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
    "4LgEkBcBfegRnhb9cWzuyfSmNwmS4PT3johrPvBFoHxRHAdD8GQu9EXwcnyeQDbQVSiwiaePp8boPtfaAhQxaV5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49iSM9G2emsZ6tmEdNbYBDbg2iGzGbqpfThWTjo7t8Uw3V9yeU9yQJbT6TcQaurqVPBHhMLXWDyhXhb4YBBJEdA9",
  "key1": "4vaNotUcez1towHv31MCkZQDJtasNVRDhnTRTSFhMLRy1dS9hK4JSc57CBYsQ2WJ6b3pgvHDUD8AzcYWMu2mFpKx",
  "key2": "6vCkxUZZmxvFQHtgP7szb5xVBcZhnq7854RiLUZPNjVcDcbzj2Hg8dBYwcxr3aRAJv7u3rF1E3ywZuMFMFs7gkG",
  "key3": "3rdNt74Satsgwc1LfagXMeBiUQXnKPeHpHKHKT3n4KpfKcS1nhckgx3XVo9n7h5RZ4pXjAk9mn1LsN1eSrxxCh4g",
  "key4": "27kornVhLN84SC4CR7mQ7L2FftaFMEPvz5qBsdt19YDL3MvAtyfFQNKaNYKfs93VTW5BqRyS4G4H8RakE8a9MvuR",
  "key5": "5uxC8jhWQSyhE2D4HcTZRbv1uThkcV52cFqQNzKkPp231vzS1UsDJ6yDqPKjCD23KuXhGbcQQLHuw6DgkH82BLZh",
  "key6": "31X6JjJFTJtPEBjnpZmz7Qn1HQoKJ6cPnkULLy9Wfg463c4PbgHokfsJWseHEqbEFbVPK223xYJDWCzhpzsYQaZp",
  "key7": "2EtgJ8VspQ2BgtvZZAjsMtBxPzQomfBKVNpRfirKxjDhgwJEDpCJ1FNUsGHem8KvG6xK5RuJK4CeBmgdeW1dKowZ",
  "key8": "xw1bpaYwgmnxTM81NsXjPhJvkMd4ynr4bJaumUx2AUPGHLT9pyA7sgxjPaFkiDQMCjYGsLC9UHT99xmRdf5iL8c",
  "key9": "38btYMrzmTc8cnKoiPx7qj2fRwx6f9mguXxs9GHZuFajE4kFPw4ZNbbB68Gi9v2SjJUwCasrJ8DjXEwgWSH4AvyD",
  "key10": "5MjvSTQE5LmJrbrzbmHMcJsgE5aMfjhnsLc5bUhTky4NFijMCVrK1qNvqHM3Di5WzegqDPqqSghifGsDMHcQHCF5",
  "key11": "318zNbKGtgabWxCFGicLfRCYSNaYLS4J7XQxgVG2ZRgYpj3byccr3p1MrqsyrSLgGQN7w5wWKrCR6WffzWcpvgEd",
  "key12": "3YtJwVtvUVTYkABZtNoXgoqjgTk7DuZfwfngS6u9zAywqFtTfHpiX36TLEBzmJ1qZUsjGd1G72ccEuDQojSFgEUX",
  "key13": "4rxZq55exeZXw2MNA4diadGBd6BXE84s3cm34u4UNdqbxNQbVgpC9XiMoAS7xaoicpK2Ng1C7Cz8HrMu5eSaMko1",
  "key14": "4ztocr8gJg56CYAHaaPTy5an68PTb8jqVdcDyXrnnPko5AoLLJnQexnwX4CLfWRLVWME9dDPZE4CqkSg4dqvhAaL",
  "key15": "4hSZZfpfTWhgT9CVLW3yAhHzBM3fc7xRxFycECGUfyWjZTPMUUstEMTzh1Bc76gSnMjupocWKmBvMmAViV5SLvAu",
  "key16": "2UzfcaUGX7mR8BJAbb3hXPVdDrMR57RsYfKuvLQKpCWee7AWELsr4CpiKv7ZJtqVpgYr5vavEgAu4y7MLvbMSmox",
  "key17": "m1wv1GDXRxTuYP8zHqP6qU1CoYa5Uv26Z4Ca1jNPxnqxp1dtSzUPC1Bab8d3cyBZiYitrwmQtHa4vzeFsWgJTS1",
  "key18": "4dTpiV4Ek5uCLzL742QgF2rKxHacJe4jRhXZJxUcaqDQSTe6MfPEYTutEccTy1Zryrdn74h43ESyShd9XD7YDrD2",
  "key19": "4zcj3WP2UwyV1beLckefrQTJGMK1QH4EqStLB233VuHqLGJKADCFeLB5m15Jk2gsUgX43JPttdtEDKQSpugP9Anr",
  "key20": "4B7S2ZdHKGSJLjdVR3P5EkJSjfV8DETLAD7hKLLsCSHnAipv4wNfhZBi3juTWow6g6MLa3TN2bmhY5mATzgDcbUV",
  "key21": "55AKLYRES7j5i8tuozBELGwM3kEAsPLdHB2mPZh2eSo9dP4L4eHuBePqroiwndMtnuSYLGAUcwTnBkae3FYZwFZg",
  "key22": "5PaaxpCAbUcgCFFS5Uj8Cx4ZGhMxB9kDyMo2JbQWedDpf3wJK5TAg5BdZ657p1PWCK3Nwu8TmCWHBPEKjv4uRUWm",
  "key23": "5yjNNyErV4UEGPzLNpKSCYfrgE8mUs9MWS9zm7nV3rKuSkvdbeBKe2HKoKJxt8W2NSvC3dLZkz7kvDQEiiB622M4",
  "key24": "3QuCSRwisaYhBkZF4w7pFUYXh3Y7Bx57NPvM9ZHYdTVGYo5LLAr6D1iMpF8Gwk93eGb537LL2sarmg2rdDZSEMhi",
  "key25": "5Rkgrutg2svDtnC3MEwduoHon8SoZg4axJ1wgbBRifqYb1m14DbUi36dcuQGbJss2vKiPBVu3TVFtUweAeP7UPSc"
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
