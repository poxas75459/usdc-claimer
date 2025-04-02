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
    "626Ex4KMju4WXJmcr25Z5pEdaZnXVhvXsNWVQqLSPWbnrnxZ2ryarWWn6SXRvNVFFZk1kQHQGg4taUGtSHuqs6qR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jqaFS1ZEi9LhQz1grtTCJJkX46kcAmoMEqzzdEgedBnPfbR2Y7ykdAamcuLq11qEZCFsWLWmVsyN68uk5k6umzN",
  "key1": "5DLXdzXgnj1fNokxu7M8C6iRpiPktxtref9352z8MSErnpvb1zFpPeKatakqytEeeEzLtJccWuRUmRsfbGrhdkZ1",
  "key2": "2oAxusibD9CAGMux9ntGFCmGn8dnMAhuiaHPqUwnS48d7zumHDX4EVDi6dX5snQwjwr3HuwqpxtZ99oyS9SmMGnm",
  "key3": "3UpzBzxTiUZZU6SQ6eaeaLNyRCPQmzjRFkuRa5njP8pGfhzVYYoJcVZrg9nccezHiyiRoNr9PAQNeobrjm4rgnkh",
  "key4": "4ewkFsFDGyfzZJk63jdN7wL8tya9ox44bpyRxHdna52XvsCDcHQ1XjZ756S7epYFAHAdVCWLorvGXLAp4Kd45tDa",
  "key5": "2TU1Z52jhY7fLDvwQhT9SkEWAj2eD7nteZYN6gJpXJpsJvnNarZDe6qMnEqmoiUs98LW7wCqh3bk934GBP2zPfGY",
  "key6": "62rbfJQhuvs1xYGjzKofCwQjf7a86QrnJHDhic3aT2uAzqNQ7oScoYLFQnwbu6Hup1gCn4sWu79xTSdjwrCzaVXQ",
  "key7": "5VEAWkq7YS6ERcCoBqNgaVSVoV5bwuTc3c2KTbYfLgDUZWnrVhwLZDxu56zpmdE63SRZeASHacZZYxTCEnZFpvwT",
  "key8": "3TjoiSwGANbiHcV7Q82n7yBj6c9jvhDPHszCBqjREJ1AZCgY1uzGZioQq4kaU5znHRujJ62ccDigFLatQGzKy77A",
  "key9": "2DkKmBCExuHZrTzVBpdqjhVESUs3aJh6bJhq2dHjMkGk3Y2cif61yQpVJ4c7ZfZL8HfCX8czktwFzM4NnW96pR9j",
  "key10": "hUMwdEYspAxjySNEQbtndHWnGHd1Qi3gKUC5yajy8MqGMdCvqvgK9tfkLcinLNdiBJ47gvWwMu38UdCqGDfFZ98",
  "key11": "5uZwpvPzC9iYictQcTbLVTCKKFsETHcpocxg23zXn2w7adhcrjyUm3Xac5GyFZpNixDLxn8Z1sHXxR7K3HrmJ1W1",
  "key12": "3uC6KHftqyquHUGuAMjBm1o6Cmjo9Uh84RR4kYRQdRBZocGbomFcJoD8SitxswbGtNcEMtEdjpUpafErDgwa7SRZ",
  "key13": "xu8ijJb3m6maRjfdFAkR53a9SbhmbVWTTxT5gvrDL7M1X8LaPe89FyP93veb8MVioj6zLRkPe76hcuDwEdRSuBS",
  "key14": "46fsvk65XAgEu5Po7FyMqJV2GG9qCaWt8GJydbuSy4UWNqdhh6RfS3YZu5iXRfdmEp2kBFZpD79KvmXBLt5NWTS3",
  "key15": "4tbDFbHvj8cNCBxVvdL5wc4atrMxYdrmGPi9NM9fPyLvHYJYaq2Si1rXfqCChwyL7P23biydDrLcrovW8n1yqUV5",
  "key16": "2doyuJyXX18uwMiEx9ARUkHWFcyYpxtbGcy6y4XfpbkNRjbBvgknB4nvHx8kkRY49c7GVjFzHsoRrGhscVjsxBt7",
  "key17": "5Fui78rNTkzs75RL2tLfjdvnQuom7953BsAu7yfn635S3DXGontJxS2pGPjwrzxLTAQVhKX2zS7XsdPqkd5GKCQj",
  "key18": "3F2XATXvuTwLACWzYJZbfrJxK8h7RfCKEPozYHiUNTZL7cEJSwx9j5e1kYJRHZufPC1kF1rTk49WekmUA1jUscF8",
  "key19": "4ycnhsoFiqVeYXEFjnzSj5qgFaQ6XnsnQb8qd3U9qHAjWVrHHJq4BZzkNpMATWr2E7gJFF15sHuHgnvRbHSgQrVH",
  "key20": "3vkCJZDV3dAJbPULH25k7c9gC14DLhF8XhnCVKp4yeYuzYciAYSqt5whSAv2ZsoyfQEvjEZoXrKpEoAm5JAYrAFU",
  "key21": "3wvmZHCJccQJQHyEadi9q98CyHt1Vo9e4VR6Z3Jo4skZi5wBv8nksxo361gmbokiBqpD5zHwZcBKSes7ZpsTVxXP",
  "key22": "5nJHqjb5ENx2DR9zepJgSSPtdwovUwwA8wjeTLWNwqaF4MA3j1uoCwRypqiDUTRfnk4vnpnx7thieCAeYgy8yLnL",
  "key23": "4xWD2zJi1ydkNvis45ppk13UGQ11kCRvB5vuaN8f1u1p4qUz8UWG8EcjcPgUiKdoVKCBufmMXRFN3ZW1623TwUKV",
  "key24": "zqNUeDtZWhWw62zPqQkZ9TkAzMzAiim6GtQr8f4RU3KNDKGbdBLasQxb3NniVTcvCjB2vVB6cfHcfa2WvGJo8my",
  "key25": "YJnaWmfDqpFpmyHTXAYNUTKkehCt6tqcGNuS2qMy7YUGqHZW5JwyeVXkMpNTDNTZWRHwFR6UYzv4hvdB95xDczq",
  "key26": "51SG5d3texC4Nmq49FTrTFXyjbXeBThPJeWJz6Psn8tJDnRqTHyP4txtKijD2f1Y5jdWzYibVqkSASikGHW2Kq7Y",
  "key27": "2oRWeDfxzpX6zs7LufMsG9cquJfnJaNkuiniFGHHYChdu5J8koNpv3T335KPZ96ZwoTj78mKgLEaZc5QNBoTY5JK",
  "key28": "vfkMwQWiSsQCLWPgy35NWEesYECvtgPy9QYGjwyDLRgGB7BmPvhemerGNgbZPHXem6hSDGnNKiJTyDBRo8jEUrP"
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
