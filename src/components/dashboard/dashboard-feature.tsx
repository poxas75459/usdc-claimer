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
    "239J5ZXCp7P8H8ig335W8sYRVWWwYE632CdkhutU4Vgtyot8pvXD5QxvQx7X9Kbaj3ivDagMxv1BCnma2Ct7Hsdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yNpU8X4zW7wq4B7mFHQSBuFCyF2cuaS7GRbpiMBq7UEXhQEHsZJxaP6tZ3jUa7HGSsjFLXzZuWZQ3unLjTAQrjK",
  "key1": "3SxuYmvnWC1a9jdi46oo76hVvx4Lpx2gFRaMNh1g7XTg979tww3xes2n2VFSqSiiK2n2Pgjwa57nLNubniPhVtpd",
  "key2": "5MLUb7wd8gzaZLj2FxBSqGC3GCV9FMMwgfN7MAWWwfjkUFkhEDUHvQBSAKrAJxo2hhPa9csh4UKEAcvGjUsKSScq",
  "key3": "5DTssXVYfCahN9UCR2oGcsrmedvGJTtCnLGKguJHWTvRtks1GEQ7kjU8SPkV9kXzuT989DKfFJqvtjGNDBTbTK6B",
  "key4": "4CiqHyvEzA6oft43JD13bFusYu8ax13qYEvSx8jN8NQfSnCsFFtDi9ayEnQZybNEuaFJY4YQVDQuC6MYkseEj8Z3",
  "key5": "dHtprw1bfSCJZBnKxFWKjzQqGcoocxGi2BFLADLK3vGRcxztXhvfpLJmjbPevtU2mCjRfWNE99fPgYab8qdCXq3",
  "key6": "5BNKk3vh9B2oXKwhvTZpmygdoT4YqZGo7nfrcqWJi7o72fqz13TVuVw8cidNnaMYVvXqq1DqGm8GsrfLtQtyzv8E",
  "key7": "jGkEh5pvs3PraA4ohNdwjemvqGvV42G7hAj5WHmz6kbMdJ2iMBSqdxevRRgWLjEiXfmfi72WFtPVBdHAnH47nD1",
  "key8": "5ahUWv4ByWUePXrhNwWeQnrRFTqdRpmfFsHwCwXAVkxw2vZikuutJK87ZfieonUZ1xtsjBjMSTEmGR2kHr4NMMoR",
  "key9": "4uJxK3bbycoipECgysHtJEZGDuPsu4cEXHJ6CraoweicKAMukFWL5yu3jsuXGfshtSwQNWgC2BVWs6ftRNsGScRK",
  "key10": "4W44uP4vzxcK3AAzBfbTHqQeZVfKGybZrBhqKq37eB9QbKWmDWEbj1xnpt8tc4tAkwhjQSsowPFYSYCTXoipbwRz",
  "key11": "42p5bPNEFLXj9QYkm4MgFs4ToE1ueExXpmTiR3HxfUsj8tK6WhBuYyKu1onVhHmYuAW41WPzsKaneXV88ygA31ag",
  "key12": "4xweME268GNP5RzSv9eoy7kBtmwYc9Je2uKNSEQQBKV4KpoiPvhvQYRcGTJVTatMeJWziD92ZfB1W7tePDRN8Y8d",
  "key13": "3WWabeehXABpvM3sfoqY4eoDiQ3jWXrth8JUf7hBMzuFg6xYAHtPCYFevJmNMHfzZ14o1GMhtPuYmZCUH6T1eobr",
  "key14": "4udAk7hrMNTwmDx6v7Uxofk7DEy429HW8dqcEwayADFudrE2rbw5RztCGxmLuW4QRu5mF9WHoQvUsSbS1DnSaE8n",
  "key15": "qtzqSx8ZfWp9YbRo9ZXY7t6MX6C2yfvqnHgZ3MJAgg1mzjD8jDPt4rQuENWjCHesrEPAaQpujTwko4qb4xkGRn2",
  "key16": "3ugcp9kFgKxgGMgzicHVbRceWW5Ve2CpXVnQJqvPLDwh2XbJdWFeAYZNCirDuWKjRE1oVJ44jowy6A9A9vB9JWJX",
  "key17": "c2y4ooZSi5oW1Nb8xAE3ZcZUYwDDY3eiHtDbMh6uLvApgFTseBWpMncocvZD8GTphPiYZd4HuDnPS7YfkQtyZb1",
  "key18": "4qMbf24N35BVeLPvKNQDr8hjpx622sB8x2HtLrz38qLAehVYqm6yWQAkzCdjBiVBhFqvTB6ST2eB9zpeR58rHWGu",
  "key19": "2SUSVfuzdFBhmjWFPx65sDtGmLWo35UWqm9wxP5CUW7YJ7voHL4KzunkSUhjWGAXjJCZaBW5UDQhBRjBWgr1yfj7",
  "key20": "bGEpFVKQNvLd6vfw9vbLv3CR3uVxAQNZ34wBUZuzoTnMP1SpwbA7W55aEYBpsN17E1U3Yz6QJgm4pLZGs2rY5U7",
  "key21": "5NzJMxg7AqpASoKcJnEArNBTMKCNJv5JE4ZR6LjupzCFDTUt8kjWkK56nDiwNHViWAE16djxrRwTdVtbTE6yi4Qj",
  "key22": "3HtUqT3nwYaoeG5cph9DPMn9sRYvJZyEPJK6TcnDuV4Y96a2CahYhqtRAZhgmXuresdZSdhq9jmrNNjf6gaTJqn",
  "key23": "31Em4jyuAPBsTtHHGZz9xoiUYytBm8FkGiKzGQWihEY96nokXU1eQkKX2vcBt26ZFKfqSHqSFjdprfhX5Pt47gvu",
  "key24": "63Dfj7JucBNSFWsrSKjkzwquEUY3FBnnJ3CfhLBRsgXQeN3oRMDbb6jkPtz3KpbknhbrWXNBEaXDJvCU6WyBQTHQ",
  "key25": "2PTmji1S9jSMJmGZWFDuyriN5goq7eh5Xb4ottPFPodWWX9uyGkdjsaMsHff8Zb3aJc8RHwn3EnfqA2y3e1PAXEw",
  "key26": "52y54tt3c7k8gG94Whus88LsQG8sZwK1ieiNoJ3UKDUchH6TKF3KgxHyRNvoe4RUh5KXEV3c4MiGop7TdbtWxDh8"
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
