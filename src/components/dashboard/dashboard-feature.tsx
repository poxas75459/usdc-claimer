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
    "KND25Mh33Bvwud7hTdq6tNPwh5ZH78ULJ27XwxJcpBJBbTKDZH7HohAfUuFBFK2ZUWevrYLwphQgsJbjBj8fHr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6xSzucYu5r6n71yBXPZi6EkTZxZcr7z3nphCu7pkMpo9oR7ZvDoquymwUqjm7qWryrV87ex9XkbDx8Dt2LjTBo",
  "key1": "5wpwe3KHsEpMtoP5gAZncy1TRwkGny3grP9JzyWi1BczDwAZX6CoVYFEqa9LNaqLqkzan6EjggdS4oj64ZCKVkY8",
  "key2": "516cQUKHuRM2av9caJvgBCeANSo74g2QGsHFrR2FVwytzPZBNH6FMVkU7yBrUCUVjkUHHk3NuCh3HZXa7xnZpbc5",
  "key3": "5xwhFivFEGSnA6t9kba8B3Ky4Q8n6x9Apfmc5uiPsAzcT8F4T88gufZFtnNQdyTMmmE7PgcmizoVRm3TeoUQgMPL",
  "key4": "5uqBg8rERuUhGh43BTAsxU8ncgRvX57rRL2NkPjxxH4JQkYxSWoKXpa8XgAbPWABc5PMjajUHTbR6qeUg67GdjF8",
  "key5": "eQPv3EKKvAVtemKbjEy9R7YKvp7FU2aThSogar6rskNE9Qkw6dPk7yxkTHEC9x8VwYZmoMyBbyizFQQRVkqgc8b",
  "key6": "4vh3u7UxRfZDmqwDo3d9WoU9KtXmFTsfohFbEtE1fTJ2wLKhfgwKEM5a3HsWchHoJjcoxtTAW9d4vpuCaM9CrWN5",
  "key7": "5wEbojMJukMm2zA9mhAssC41UbX5a1eQojcFc2WNUj7gdLKWFwem4uzaj7kCR6nYhabaPNnCZ5EnzgDs2Ma7sihV",
  "key8": "3vpRrBLApzG3rnYgpbup6SyAeF5XN8DPtrTKYbHMAEJxVSqDE4ctXa3Z7oqeU6tS26gjpJ5vsUXcu3oa8puSh9ek",
  "key9": "58hHSA1RgVLNEwVviCkXrxmVo6Xm6FjJAygh9xRK89Wny4r5iStxe4ZiUEnkb5xJjwdeKyK1qfZhXZHqbgtTX5Lt",
  "key10": "wYycc4zHRM7n3QeKkFKDwGkdSZqBsD9sbhVCqBLwp3a5P9g9G2fZThPPiEk2mAN5yXjGQRzM7wsQXsFWT1ooszd",
  "key11": "2yLWCm3ccdcwtgfuw8MT1PryHuaLCXx9UQgm2XFKLUWJNRxw4GeTcT9uKz4TBb8tHo8FBDCH6pnumciV97V1FQbv",
  "key12": "4893LktfoVy8Uz5qAaSQymg1J4kwUGNryHxV9bm5EuKyBSKP6jV8CB9gGsYtrP2sUWfoLfY5M4so5wnA3tSQZ2jB",
  "key13": "4cF8PX6BhucVh6EWrVdLmU2eLZnDDUbGHRQizHaLUoZzW1GqzRCNjji9ooAtf2JcirZ4yg3WRZEKiR5LgaD9Pkui",
  "key14": "58dMDNJZah9T6CNbi9f6g6tL8ES9ydmzeSVr19S3w13yF6NwKG7ZkwFXyNtgzjvWATLuxcetGnZiL4buT3sDCMc1",
  "key15": "5nTzqskLDcRgmaZmN7vwSe1Y3tcLbBQB2sd9tE6DQFboSM2P4bdv2cw98qyKqRFFX6f4DnBYJFzntmihC1Uvrsbs",
  "key16": "caUtDytZUefnSpHpzgeH65gqhw7oVcTZUA9H43rLbCJmHLAGK5jpDSxASKf6fGg1X81sXWn2wq9jsUUuy6MZbr5",
  "key17": "3uExFQMeQrLnz5o8Ldjr3v8DqPFquFfsYX8mJ5VHYZnWstoxT7VbCPtXnacfJygTh6ezDoNLJmpxHJuhCejdmQE6",
  "key18": "3d4tGRYP7LkKwhQPD6sZAAt99ej9dH6P9tjbTM8dfksJsTcr6d8YND9fkW6451WtCRLAESJxYxjdpd7tst8mvPmn",
  "key19": "2JG1WcTisbRDfVy8AUvTBLUBmNk4j93p4zmoidc9Md4oKkx33wJJxpp5V2Wgmx4vm5V4qBi9bYSaTCNyebiwAr8o",
  "key20": "3C7dNuGwCsmnVKNcuW1x4Z2jBAX7WPXhfcbTKcbeYyBVzZ9Knnjy4BWEYRLXeh6iB3snwo5Be3tNjwce9du8HENv",
  "key21": "4Ca9tTFjYxJtjJpWPrEufstPWwxzUkYxDino8ajQmFmYxiqCRGJtbkYVQwXUPq1ybY5bXh57fztcaRFpAvdjto6j",
  "key22": "nGudmQeatdkrRGGSzVoeprabjpx8pCHvbgtSFB8vjR9X3CERQzmfdayyvm4fVMUNUA97Syqq45JtfwLBsZRtqVF",
  "key23": "Ne2jpyHTcofR6y5bRNQ2rYq2dDAJ8QKFXQW7KcrX53ri3THxAvLP1xwcmfDbqX7xreJFKy2JYQ6rKejmp9mxvDA",
  "key24": "63vn2W5yughwaVnboJdKgUYYwXdF6bLpedpB8Z3qCZpgoMAA5qksVCffXNbG3t5pFUaXKhT6F1MVBmmJoaCuwQJu",
  "key25": "waNDf8sXSmB9Tvq4akgokAfuRdVBaHND7pS3VX55cSg4nx4w7VdPLc4dC3511RoR8Q9Syx73b2m9WqbQrRB2Mum",
  "key26": "5jgZo5corGKQXXtETdYixtaMqdS2J4ioAy1U7VTDA6oByrEb7FmfUdAGAK2q8vMkWxXyfEzVt1BCphjFcNEKHGdg"
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
