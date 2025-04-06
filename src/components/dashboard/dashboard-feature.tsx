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
    "D1JmFPzi8n9SEhaSzpkkvtkaSof1tRwguTsdqDp8cZmgysGTveA1wAaHir3mEDakL9bSM4aQBgSQtEEuT3Jyeda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DzHF97tAFzFWwDq2VurJUNACdcHXcqgWtXmGex3Ys12EXrYVGSB2BkdVe6zaE7rDK8mSe9LMVVrB1HtwG1vLQc5",
  "key1": "55uQmSTfG9ZfbzdbUhxQCDdvXcKsq4fhXFwFiX5hq4HX8EVo752rDvLva5sndmG8fsBVZPnMKpiWXpGSUaiP8L49",
  "key2": "3AbmYMHYhX3xuWs3mh28Z3sMt73xtVJPeJvac8ZidaNzMqVbqg5ZJf1krB68koJkcxxBP6zsZURasvcDJ6Y1TSrj",
  "key3": "5HCRPNiRSL9vL6Zqir5JPoJjthhKPnPaXB76pi2DcySVQEGZFhEUPjecuqJQsLLcBpNnwdCyXPhLMy7M71EfCFhL",
  "key4": "2vyHABj5R7ALUYKhJjpkCc7XQTJdKqnZj2nwgzhNFBfWBkPG1BuFVEXA8bKraZhjWVxQLZZyWtXuUmvuqZMhNZux",
  "key5": "2xbtywY75Bfoi5Zb5m1yED3BDyzD34wLuig8A36M1Ts5zT5ZjgyiqDqpb3MmFtuRqLW2ML2QskV9FpTeeA5oN2ME",
  "key6": "3PrFSz4wtgMJob6AGU55uFdVbExvNDWEsCvgR2xVbP8kanuaMCiKAykvuS9er6P7e7SPmLmUDZtTGEtfEpHhvESC",
  "key7": "2cxHZhYddJDc6HVBuU9M58gr3f4ZCpS7CbsRMPMdqY9nchyxG9xjyMgFqKmEqyq5AStCoVUCuLDJVndHHP7tuDKS",
  "key8": "2v5wZ4j12yQtVkcA8tfuzMXnqBRbBWUC68zj1qGbQbRoFxDqw3TzUv347vweHSAbULMgzirWZ11Fn3dpyfZrU6kr",
  "key9": "ouTJ2czN25r5LRX7GCCXJzN6nLTfwoBzTpUudDwjDZ1yUw7YFzXWFGW1nE7JM4w3qYoYhTbvA8puji37b9M5y1g",
  "key10": "5H4F6dmAVxrN46QYNexRiobDeWqaRDdmoBQZ5X5NawonBDqoqJVyCiX8AnYjb5FexZARgFwonPEDsP3vaAj9GPjP",
  "key11": "5vurUUXk3jnWqmn9CNtqT5FGM4DF94UEMEpY3WnyvfA2HdSaArVJp2ziMSiHmHJ8iFzMCh4VACqt17WCRpx9aKAT",
  "key12": "3ygwUX1q55njmCmrXjsjNC8uoFhGhVnBM1XaPiSKffzVswRgTDexWM5X5e3n5iqT6GQL4UFUeLwa9ftEh6pNfyM9",
  "key13": "2tXSU4rkLRDwHXJxxWDhDMYhK2B1TQxJp1NobKANGHaaj4sdyXEHTZPrqdZxgE9aqdZbowAh2EeN8tZW9V1VQ61o",
  "key14": "296je6L4rEBSwf1v9NioeDhit1HXSpSBAA1s9n5mPBTLZ7uTWCR8KiKTrBHdbqV2Laf7acqmRp7o6C8auoDKM78t",
  "key15": "31EBxUNxMUcAwg6KocJHxM7fC9Ydih8v4JYhUhxLJJmNuYHKfWaHQStVpKexjSTKCESJvw6PVsaznxZcdZbSRcuH",
  "key16": "2zjUQSDto9UDvaakAfKPiH3QhQJx49wq6TmsfeiHLvHTtmvU89LAthKD31BM53rfvhEJ91oHSusGsDkqVFdRhEtC",
  "key17": "Na4WSnJNrgfDCWGR5UdTzUZ3xgSSUPiFU9HKTSSeywyanp3GmLTBNGXC3BQ3SWx4njPmfCbvtw5bx5iY1t7S6dE",
  "key18": "erzwxrLNtDgSB4WUB7HZxckPaqPrr2iCf1sQ1RWG3cZACH3dy8DafdG3K8b7aCzYw7whyJiKmgXj2kzGNHtHGmX",
  "key19": "5YSQTbUXyt1NAHXgTjhx6MiiNgLrwjnYZedNYt9Hb2hWjDcTx5mpEccyAw4nr1BvY2jiKiCBRssKaYFjp62UZrsB",
  "key20": "3wJnzXNi4WC5aoFYGiVnqZadY4Uwh4Mpw7ypYCuEdRtyQxxrvmFBXPnvR2Un2sZTVzB5eTBsiXdnVjeC59aYQqWS",
  "key21": "2zuAkU2wjMBzrUQmwwviSuZVTCaSgVmavoQg77G2vLJTmB7s12tGrqWmwHy7nfKCdPPSZGCRzXsWNeSMxiLLsgmM",
  "key22": "FWrTqLgenZbrn4kDK8KR2k5Kf2BaqMmV71wyVW4JREgUnABQTNWvYxYZ4dcYiDLQcE1zuMdeUPw3nQcojam68rT",
  "key23": "465FxH8kV4NSujaAuu8SRU6iE8cAnCzvP3ib67CELU561stMcEfvimSqowFYLFFyTWkgBrdSsJMxzUv8ZanvsxLg",
  "key24": "5c1Us9XJzSvtfVLzoGxj9kvkjQtzStxY84cH8h51wScCUqS3Ex8FpiZARRxKfXU4xwAvdtBeuJZkpeUuxxBBFUwU",
  "key25": "3TxpqDMBi4W5WCBuik3JM6P31yDdRfYWtKeu9msCKsm2CUZaeN6a9x3SWeD1CNu4vsBA1egVcq2YfMn1ZWYJEY6w",
  "key26": "3FL7Yuv4UPwqU54DUSWEs7CQzbYE3JndNLesH75stEj3ofYSnKq8DMbsG7XSxTSVtyF2eJa7GpZzehaMvPtb5r3B",
  "key27": "5SjaPPbB9RhxHTnFBAMVErgS1GLHBsjnBvJw4RZWjmTqF9KXuDWq3FYsovF61qBaYGyaphPB1LJiMMteemRHupza"
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
