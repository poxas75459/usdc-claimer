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
    "41xpJnvbMeaQoqPiAi76G71AW8LGLJEPNgAw4aNJ3NZCSnRHpooYtk74U6wSTdB2m5PomemGfoabsPASpjwFnQqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDoXYMykPqJkQvXMLmWDzcUqPrSCqRwpBNwosr9E3wczqaoYrE1X7XLxRoxoALnmB2wBTKzG6ib68dmnvc3YiV9",
  "key1": "2VNQaEGepY9rrdQbYjy6r1AcsCiDXpSGHDhrWuK6LVxYBDotDbhEBzFKUYRJkXCnFi7gXCRhfaMtcyWrG8b29h22",
  "key2": "JEvgMN3AyiBbzSMnhHjjky3LQ3bu1MAPsmbKDFn14dUiArxZTouYzf92KkXefS9gN6FNAS452XoGYZNjfteDqmz",
  "key3": "nTGkufbMAkYpjpsERdx5B4ayp37zAzpnP7aN39BzoRWTGpHXva3GhE33CK3wfEtnDMWatGAC5aBBbgxqrUV5czD",
  "key4": "3JinwhUPBP9BvUimXLPmbQVtzaytasS98HDFw7VgBTyF4c9yiBnmDLX97coNUQ8PwCjHNmAL97LmFASjTcByz1ud",
  "key5": "4xGWtt2Dd3wj29pyDBiFFKLxwiHLLGt5Xza4EoY7ksuwLktdUF75b7NXoAkZJUC86nda8cW269huDBuqhw4UM35S",
  "key6": "4UGurNZECZTspSk3vXKczcCFfJrDG1USY78g2EmR65mCXzmyYZBfkvF6B1ZL1xA7cMqvbwPr8NwvTbjAiktdSFz7",
  "key7": "5PDXHXu37kTRjXjt3toNHZ9Kd3CVAF6KWUK1xj4WYPsGtK5uaedMgNish7whHMjKkFiboATP8qekNCAv6uvgaLsW",
  "key8": "5fTBE7aaocLUXjz9UWsBttDMiydEt6HHhTG6bbvFCKSonxxLKXQrWd44C6gUkcRnScbjr7UijW8NSWoAcP63LY41",
  "key9": "52eoBSRuSdjRcK7FFC7iGrYfCYeHNkBfErw52B8HKJ2ca8Yt1Xz7eVwYLmP2Tc5j7wN2bms2XCvBp5WSYCkDSbDc",
  "key10": "5YyTen1LEkL7akRaajuNxHU8MHeA4a8HQd5JsHUDd6K4ThdDthaktbF2udQzyoS8CvDoLTR9eSyysfonMeuEbrPc",
  "key11": "4QoTyz9PARJMKB8Jr4e9hedHjLpBe5BKRgH42858thAssN3DkHGHNhBGYruUwZ87ehrC8iv6Vuy8SWWsTjLT7U44",
  "key12": "635UahZ3GkchEfRDjXuxAuXXE5YiYTC9WpnSJQRjP2CXGMKZdHTb9JMsnNcLsfPCuMnhiQjCBvCUfHNKK4nwfiwt",
  "key13": "36QQgKdfWJfFZ8oFHKEREUYRjVKb9FdN7UB49xAAm3AMFTsSu1m8PKFhMhafSCLJ8qR347z4upiZSDJN6FRXtnDU",
  "key14": "3qXiPVuMCGbXjRgmbydnPre1b933diPkjrCUhVYwxZtRYfAdAuTxLR27JF8rgtHgteELy894GTNP98jSVMzpHcrw",
  "key15": "3yyPsVnVad4rStEN5DeFwRzHENUVRZ2B9DLikBwuK2LJd3aByEmdUBibMt9mNFNwKn2SnbJBu4Bb7b9xMxV9Twjg",
  "key16": "373v8TEP7YqkaiKUM1zWcH3DZFRZaUToTy9x7dhBjjtsZysUTfnCg5PpC8kMsYQoFtNmeun3xrg4r7WJe8jDEbN2",
  "key17": "4oXAEtWVHatEFh9QNhtLCj2eHKND5YP6PMgxQfwWM4MVWFBXKG65wZ53kqS6HG11vnT77vuUTKWDdYd6pNDd7jkw",
  "key18": "2RUfdZ8tcWUMkUcfyrBg2UWtqbZbjoPNyNiWmnMwsBjM8gxETzjbTM8LdQUYkmZCvUJ1rY5wXZGrfBuLLbyKz2cS",
  "key19": "5MqimfRP5MvnS6Ub3BqQ26q32fXTePUh71RqDFHENdBJgoku7o3UMH7vNUf3BjBxbvdsbkC1Ujkv3A9fCokMTfDz",
  "key20": "5TADkvkYA8zib95MPjpopVWRQuw9uuv7aZP45eiHr3BAg5uSa6gGENcpigAuC17Jnw4hJEkWMHaHPM1KRzwY1HFv",
  "key21": "2waCsRVKiRmbGGeJZ7BtbhfYtsrSRAT1APa7dVme9n9hPgpEnoDKp3Kx1etC2U1nwyTGLNkC198MciiBfQ1Dzgcr",
  "key22": "2xdTxMa4ixMqUKSLFJSCpHBGxoQo5VzUPw6Ddrt1A8iJgtmchCQqnEhQuoSH4Gps42v1nPa7Qy1SAHzgMvM8Z81M",
  "key23": "2GjjaWg9FMfgWRdwJEAWfATAXUZ2P8By7caytXjK7pKQGPr8aLt1H5VXnJC567S9oKwY2czLF53Cstn9s8364VtP",
  "key24": "T7155eQJ4WkhFgFGacgeLKKoMgcL3yXsEPt3hYpDSnQrmeAArqeGaNm9pMD7aqNMZdW8yciDgd6HZgaqxP2trvf",
  "key25": "63Xex9RmEDfRdhvi2qW8ySWirPmkfVyfitBKsC9X2PBGuphAWCtCCLZAiEQoZuWuPkVdmFJR4hLqoZRCmkXLMrEW",
  "key26": "3pNFf1hVfmvgb3gfqKvkPtoM9GNXcLMR7imr3fQW1oYsJJoMzmcnGQzk65FZcQu5JZjwKZ3qQiiKRgburDRKrcjZ",
  "key27": "294UhVCPnoQJv22CRrSLYoqbSy9Av9yHDU4ekPbVAkVdY1vvKGfpv14eUz5Psjs15S9RXrshmpp5dDc3S4mAwTi6"
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
