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
    "5kYUsbrKGFS2Ht72zrpynJhVxWcLXB5nCDPvUod9Nc3WPdavGmcWret5yAbRkSk4zxfiznMUQA6pU1XjAv8LPR1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msbrUca7RW1rQv6PXJuyvporCFSD14X7q8KT2RsGXRKaudJ77F7A63wqYEcXbCAMD1y4rJP8adb26VqWmJQAomC",
  "key1": "4BzC8eFFddMhN9MYfP1LpBxqfnN6uf4eYK5yKXD4uPVe5aKYfKKaP9kYgKdiexw2cgidVSk3vs5a7zxUFeZnpNF9",
  "key2": "2ooupGiHkGVJJTbwSqoDPXVMD7TohQErQ5dAgp1PJz7m6nyRDD5cPxGoLi1ngS4GXseEp4Pjw3Lwrup9F6mg2X8Y",
  "key3": "p9nC524pSMssBTaXyeW22cPgU4L2xQJZFwTfqu1BHsRBqDn7GeszGLH8JanFA8CJ8ma6Fi92qCg5BiyoGQSA1M6",
  "key4": "Dvc9UGqf1RR8hqHj8t56eBN4pw3T7FadkHT5fEESGVUNfYYYBaeqQGvpPNTmjoUKRdjJoCFQfR1J5XtjFn198xz",
  "key5": "3XCgWUzuj178vegrd8VNxuQc87Fi3ewueobvnmvxj23oT9dUzkfNHXy7JSxd2oLxPTUeUPvScbvh2Nd1q6m21He8",
  "key6": "5pc4yaRTspMV17JF3TZU5hCB5zs7X9AfKUQFwtEJEFDMcvwJV36LrnjqkDDKsGMsQKwbXrJJFXuHaeT1BKxB5cLn",
  "key7": "BP5LpneQhyuG9MkWWmLThCbA2JVeLA3pXmHnUgrBaJ3kZWeTkLFebGGHvqKYEjAVojhudrAkcodBhpoYkucZhoz",
  "key8": "27N1bsP5wipnsv5Y8rnh4AUgFkwX87YuBfonaLe2ZgoLFiY3GTuUSdZG8UkJVrefSae3AkbzsqQ9cioCkXS1xwpa",
  "key9": "5dBFLA4aXpkaxUcLXK2HGVfxKqCMJYmLicfgpo49nQyN13io2poPs4qamThNukN3GZUXDaQs2qQzKm7u2SFZJF6a",
  "key10": "2FKQYnpVi8wMKtJ6jCj3ffmK1WbVhmgmcZv74VfJ6aPugdVPXLjL3uESLvptqyD31PEDMNpJ1uJpQYgBqvX8j1oi",
  "key11": "5Zok6d8ZCQxpMRVfpZVWGdKBw8Y1vvqBAwEKcaFZ2sjPGb9LiDspnFyxNB1ZfJKYgsmnkyWHDRA8S56SvCTCjSQv",
  "key12": "2FQEHt39ZYBwJ8adFrUajukkcrUewTJppfoYLru4jK19F8y8ckEUKnusbUbDaHcAN8jBHF2AJTuYBAgujApoKuGP",
  "key13": "4wra2c2DmjmrDsSSXc4JZnVCNxKG9AJPDLtZmasErDjXgtcBMN6BqhN633QZmhQuWaE1LQrU6HYkaDzZFgJu2wKs",
  "key14": "hAaESFe8ZzpUzmKzJNRyVqzwQmEeBNphF5PgSHa4c1AwANCKFuW6PhK8PaBwLQs4HrpkBvbSf2zugCLfqYRgXCy",
  "key15": "51KJk6m4JoJeW9UFC4Fdy2BhNcfNrjRkcrfDZmZJSKLH2JzedfCgRnJw7RR4rYBKdiNzag9gHqsBGkW8g1A8vWnE",
  "key16": "gJCvGh12qWiURrzgzYUSGq46d1nEicp1ZZJxZsic4DHBhnmrzz5iiZEEZfpvaDH17czh9v2nu2PBgMY2YrZMFPh",
  "key17": "4Si713Z26nAnNATPTmtQmoxpRxcerECBpK6DPLPq6JYXyhd57kjFit54r87KLU3gafjdnhQpjx4DnKYUJbV8DBPV",
  "key18": "38kWQ6rs3LYECZzfkAE7kGhRN3NiiqpLsVwLYsEzK43CMd7nuCcPinJg82P99EEfesL3TcvthQ8Yen2EEzbEUtos",
  "key19": "2Qv3X5HmLR5Mb5qUaxQa67oQ6cuBWhC9cLtdoCSDYHwQrAaqyxZw9ipTVwk5V21o7sRP1Jny4zaxQZ9YLq3H7CNH",
  "key20": "3ivwzbbxwzhpdTmtuBbmTgL31deGdUUBPmzn5fxXrFcJ9nWqquexFvHXqZDFbpVpuWtY5NAtd8EZQTGsUQABrCtD",
  "key21": "QSSGcUpZbrCshGiRdcEKEjaEHSQi4sQ9EtQ5sqv6Na6wHvfN4MKRgBiqR6tQh5MXrrmgRNiJDViJ1mDGqbGaqUP",
  "key22": "4mDunH7bQhXV4VGfYH4FKLFWMe2jLmd2pxZ4e82fDRnUkH4YYP4jYDLqXB2vgwX1zWLzcSgbEacHj63oJ7c1EJm4",
  "key23": "5px1Av9Hvc1D31WVRjdcD3ncFxiJzGTDXW1Vbx7A3EoppJ9PyziNudisdJMdq7aLVdjCgZVhgQmHdpYTYw5S64ar",
  "key24": "2sbMRCgjE3KHkTUu6dAxTMBbomkvqHkKswHrMVYpy3owiBz7PxWCKxg1Y5qnkprR98BFcZp3d3DRqFUGemeuJdfR",
  "key25": "2hmYhFMhqWsUhG1HtfokaM6jPmPpFPES6YEpCxEWHCt8jUwMuXxCc1FmT8pAu7Zw2GhjvWc4x7DeAUuMiY2EbH3m"
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
