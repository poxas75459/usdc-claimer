/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "gxq96u8tqRCC4wi9FaspDhNdZvnGbjKazmq8Ekp5WQinDqgyWTnPKF3EP5871aVsJfrFSiwG6XtD8eAaJSKgfaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRKKSFkG8pf14iz9Vw4PN6dMCDSSJHUM4gVJY2jD6mUSVH6jK6JVwwCF5uUfxLWNWNtocP6x9W2785Qa4XtbG2n",
  "key1": "FmbQWSkhwCi55Y3477UFyTFk5a2wHrHqiPdKzh78TXPVovwF1Q1zU8GsYwd9rGzFnpddffaHcvNE3BjgeHZggJf",
  "key2": "4KFi43Jme5MhB7JQfFktNfkqSuzhzTkWSZfZ48GNoyMRC6ftNPfx1xHX6WrfUX1BwVL94ui7BbXGhAtgaz7NEg5i",
  "key3": "2gG4TDBCF4D5SQMHxbDQrPvaQ6cXmCyLEraRJ5d8BHxAmjuF6khgzgPcS9JkbTDGM6vCAruG9qQte5SYFcbknZpR",
  "key4": "2iu4VKHPJSL55umRdgHjyS1cXTxEjnSkre2ygf64cUeQrZF6kwRG5Vdz12cEicAVaTGUpdaCLcrzLaxd7sFzvQMy",
  "key5": "3p9haqn9XjqJkgjS46qQhJY9f2yPTqNGyLdsjUoyjZQVALopYFCCvPeoCRteqVbmK2EMiK1knQeUp7KZ5ZF9CZUY",
  "key6": "5G7E9KBgBbkijNHcsufjYTMuYzjGyaxbG5DcAFp2BEXjjQ36KNBweF83MnMyvhaU8HdjmBMn6Bb3yFHiBwHPSyX5",
  "key7": "33ekodU21afBScmP9gD4eDSrsBu9aK4D5SPntKAVxVDnGZUiEukXK6avjM4xPamk9m83v8soGsfP3x7UTw4aRE8U",
  "key8": "2expMBF6i5fFwy4uKkCbFAtGmTy7WyKydSs5KaEyJvwNNN8fSc6Bv7hPfK9RADMki8s8cfjze4yEeXJNRGzK654V",
  "key9": "4p91S2XU64vcS1V6zparMBhG2h5CEZfMph8qKR3t8kYFRLjCaAoFdJLZCZPKLxD7KhsDApQppSrcLsyn6xkDheXN",
  "key10": "3AnEErgWfASEGfLwkvTzCCVFMBbEmiozfYbzaJMm628U9HBRCx5hrbAg3WFWEXdmqaMohXWd3tRAWQVC6iAnFizv",
  "key11": "5NFyQwR7K1bRV6nV3D5gG2QzTQhDYEyLvk4apJP5dQvcUFcur1PJq4m5sp7nMGYfLNxQZd6DePm1uWsNy3iMDGmp",
  "key12": "ZrY9wCG7oFKUJdUfjYjFm8yjnHvxpgS63uhxU3kpMQP5sJNWY4VpGgEW2uHQpeQLxEjoeyBRk8XCwidMFQGD2ZL",
  "key13": "TiRNocPRPRtfBq6H2rxPKgsGTWuCQqGyxrMCz2HT7YaYE8Qa22oLE4SgAeE7BTxyRcnxcYoBVnG3z8G6B4BqWNz",
  "key14": "4niRAjbTH8rY6J5PPPxnzNvdA5wBtN5F6C2xi1XsVLjvYyoSn8JJcBtXLvGwqFWZcfJeq4zeqRvyunGgWpg66rBi",
  "key15": "ZL2acgUabLw2a1VVoQgbBZ1p9hFvaPihd6cPWRoGihHrnEu152dEsai9jLGtdnASxnMdnKCCHHghgkGdCWmEbRr",
  "key16": "5BAZqJBEbErMUkb5fiw6n4D2cpfMEiuvjYzGoUGREuXpRfcNHMe3Zt4bqHm8i8SYKvsSYs9vFho2yuprdqxmoKRc",
  "key17": "4NzHaQJpSyo6Pg3QzLev1A6HhyxFJxMrJGwqNPAMuSM8z5vKjgZ5nZXqJUWhwS7StsvivF1RaquTGWq5uMaWdjF2",
  "key18": "2vjaBXJRMsfkZgmLNVz5cb4jZS5LX37JpoKJTjYDgmsVNEEho7VQGurbgTyDsgwRGLKFwzzTWmju1LCwLJQoy4gX",
  "key19": "4CyDyAomNr3Zw95icrwUk5WAdbMsBitvcm7nuqzCVnYoTnJtjaxRJb2GamB8bi7tfrnDGhxrf2Nm2buXGQPqnTKn",
  "key20": "YiBxaJ1AmM4cNH4fevDZP2D5msBHLq9fWQGYwEJcHvVWTWkiUVd6APjsxQFKxH78R4TRPvDWNDTmk2wyPLn1Nhf",
  "key21": "4uqeeCyXV6zTK8bymsB6AXTh6dQAX8seMEyGXpEtVBD4hVgRMEPDwap2zNifAk4hAbnkG4DyU3KjWawKMCSrirZ9",
  "key22": "fJ9wUcfzJ1ohNzHW11KktkBsobLzmppGk6PXAYp3WJhpyaAx646AfVHbHkxiY9qmaSUSGzsV3LANweuXNQHwZPi",
  "key23": "66wgPSS55qXtTXYuGmkiDsxDfDpE39z1sMnmDEWFYuK8opzhYnzvgEVZgCfJKxgURs5SGW1hETGCVZif4HgQ3Di8",
  "key24": "43JeCqxM9SQfs17a2VJWU6T9hBfThycszmd1XG6eEvbCeKzM5y91skABKM5zs9d5qqkgi6BjJfJ679bu2yovFEL4",
  "key25": "4gKzidDFuKmxLqy2kvvsnMdDawmTqoWfEdWNhVwuyyufMxXwQV43UkH7udVyNrjJte4fZqSoqPx36kzrMzUfTVfD",
  "key26": "5eL2Eb2sFgwY9okBwhqWKdKrjyVCxmEnyKxLgec6Pok7KzjDfe5RGb3m4tUmte358fAf8aKgsT8LnytfJHTREaaQ",
  "key27": "4REY1raTnF59666vnRc9gtZKd6pi431BD5mYs7c76QBcGfzyYy1iG5benXPJZS4mTnuo3RbuoCBr7APhTWkARzjb",
  "key28": "4HeqBxv99RJo8oLh1rK1hctryLR4AgzkaLesdp2LHKLbWG86fvDTD8i4xTcM4KALasFq9XuvEt8Vvg12Mj1Gzepx",
  "key29": "Xk1eBJgu7UEf9XSRMcADiuf1XfZG19KyFnkVe4gdnihbL5M31xBnw2YehhxDG2oSzQq7aGHpns4RYoX15tSD163"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
