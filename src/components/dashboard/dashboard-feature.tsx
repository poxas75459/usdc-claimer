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
    "2MWseSbQKi3ZzC5nAE7urtcxXQwwy16mTVdLeW2WqK6ZJzsPt1TnsAJKSC2LRrLnGwdpa9386KmbBhszoAtktMmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RjmdwzL5koxTxdrVPfckmbEfPwqsHPBnE6iczngsF2WbN6C2t93LZ73rPQHgoMgG8DyLRyAyhSWyzcE1468tVmL",
  "key1": "5GachRJK1F82AArPJmhDunRnPiA1rw7DVyNvepwckKxEjsMCXEsC9WvoTkmUkUq58eWQ3nLffRKYcck7X2r129WC",
  "key2": "533bQXm7sPCqDXepKsAxbno4AAmob4ZcdRtGZ5jBmZw1ymHu7xVPw2Vcc5kQB8F1mXhFS6carsFGzcKm4pS3z7V4",
  "key3": "3G2MRaNnmRLf2j72KtDfBN8U9MV9B6apbUjbhorMmYDJkqUHyEVQnnn27C8HRwwnzDMbGCFc6Fg64fN6KPRQB3qW",
  "key4": "TLfeazEwnTkMJhyQKFi9ZhwhiyAvcZXaySX4kCmsML3HThfZEcAf919zAuncNWM9ASNNvysDmeU7pLqppYdMJh5",
  "key5": "5UEQHYvZ84419BVtG91qFdxnDvbueUfCaSKgC9v8hP8NHFQaW8ZfBhEdLG2V3anSztrGGE4mRqiT3radWGf98cqR",
  "key6": "4WMWWsB1CSQwrU9tj8TDCGM7HcEn4XGjP7z2GEvJv4PuJZKHYFjXBcaGwA2sTrT2baUaydL4E9cHPg7qxQPYRLF5",
  "key7": "2xUfF3DvGo8SVA17CAUz3whHSuFmDZR8XumpJF2nbkhAkan3cKoe7Zs9K6TpKFTgBoM84JW5bWvBQQ6tXxvrNWsL",
  "key8": "5Vff45STzw9ir25i3DKoQPmWq6bWg3qS3VPyVUDiwPGoGrFfpyJHuYCwAhVJK2sGJDwYbvfYreKxXxmFiJy8jcJx",
  "key9": "2ZCv1kFxQdBUSh3vvPbTMpjfVUm4L8gNnMgG6vmeYWbGCBgad1FCKRwsp151z1hYeEM8HzinUe1G4iSMUcua7h6c",
  "key10": "KdWwtx3PEbStaE58Dbu1RGy25PMQVVnQ57xHv2VTt8v4EdArfsUzc9btDryZRAoMCwdtmx5AvTLEHR1e36bhUXS",
  "key11": "2xxPFZ7e9ixCnUPJ3Pw9536YA6RpLu1vFcc9pNRWLbXuRuQ3BbGchdDcbhwoNTsQySuf5EaCZYBvade28Xug6RYt",
  "key12": "LFDWR1u2w3AzVN7b5Q8xtTSnsopfx4NCEHL5MpAC5oUx2Uhp8xJMuw2QXZbKaYyKyn8kn3jZjJNF2vSKkUdpwBo",
  "key13": "56hFNF2FLY7KsDYUUcKXAAqY1VvDq6mWRiD1G1d6gzoqAZdpmRRYgU6FT6WkUcsNGrZtNzpGUF3SwEvSVeL36Bs1",
  "key14": "38h8Knny9MkysJPCzpcdKXxWy7UVUx7LUBi56acQCvFhqSZc4xXXz2sH9vrmG4Dtjufr4eoM31aDo5vZ2mrgWEAS",
  "key15": "2wDFRJWJgD8fENPitnF1m2S4WRYeWHvVfoDP7FSKNbeZQEaUBY8d5UxmBWaNRCR1QMRQDHmorZGhquwAk3DMTfxT",
  "key16": "2ptntfyyEBoFEkVLes5sSFeafLNSofJ2ujraUNBCqHoXxYp9JYP7GPtsZQCCfACGXXT8BCcMfaRoC4bvPcc13G4Y",
  "key17": "37JH41QREMRwHckUkXGYa9AYV6Y4nNfKmPahLcc44MZJm9AZ5wLEW6qDCGNrvgo7zvyGAyksV3KsjET3MUCvgyTM",
  "key18": "awtgoxYQKzybBYF1vy6cGXj8rrqL6ecNZ3ddXzQBevjEjXn8kmfdTBdJf59QZLTkvwXUfaX8faJx4o2JdE68mRa",
  "key19": "2gugeus2iPUdyBL9yhQjKVWzmTr4hgWqZeJrii6jHtUXU6vhu93kgKf7yNiiXENUtc5sKeDtirvh8iDfsXgAenWq",
  "key20": "2v1KfJNABMzd55XmuknbM72HCWQ5NeugcGFb8gzs7eJWWvtF7Q8yXUbHhd5eJX166imLBuPz7573SDYysnaEmp1Z",
  "key21": "4JHbmpWPoBw9PYBMJXQfjTV5mFi6ChqPuQESLL1k1HyKtzF4LkBemGNYxxiZh264K2eWpR7FS2J8xcggkUiYWhhe",
  "key22": "i6iNzDHrDaYgP2qXHC3YhkMxfyH8zcAhTok1zAdwYrZp9P9uTYeG4Q7dsvJ1WBpS3HtjE9NArtmCpjnvejm2LJo",
  "key23": "3EgvKtWLx4igxDXGGwMswrvza82X8HpVE5Qbea2JwquH7Ff38SM6LApMWG3iqUqwCjC5vyKSy3sh76nV1oz7Y4Us",
  "key24": "xeQwmRiVpc84zFEMqfD4qLqDNx7HhV5YwcyEvaekm6y4EqHBhaUGHxbaigR8WVqmKEwKsm76ciEg4PohxbeKzmt",
  "key25": "te6Z1AuSemaxSjBctneVRGNdJzPbKssXoEQqiSEr9TYRP3ocxneSLL28u6LBgLr6A2t3qhuXP74AccxEYfPcoSm",
  "key26": "QPzRGxB9Xiha7h988zpqdyH1abN1bjbPy5sFa8PqD1RKbZukoo6ZbHH241k5wpZUEEMQybRk5dSXF6t4M3eM9rt",
  "key27": "5qevganQ5bJ4JDz285H3EeCyd1z2kTu1y4oP3VR4M1AyNAUVeFSpy79zYoumapTCEJ4zoAgFAm2eVo3vLYwAHE5J",
  "key28": "5ECEVpS7h5NzQ7fBRvqc8KSVyYH1e35vmQonbhqVHvQ59xFF2hz7sBAiUTEGcvPKXd6vg6rtBMbu2bomc7HezaMP",
  "key29": "5XVdjQjt5STx8JVCQZVkE7wbaNpfuwSJ2bcezhrEB9YmW4ppywsFdBYPNpitH2McEk9dwiTQQonHR64fRzs5zjwv",
  "key30": "cXtKxCdJZ8W8YoPDyhtaifZX4y8FVbEwCwrtThmr3zkB4V7gt5Q1aDjMjHT6SGKS1HSDsB6PCBhc67Y4LdsD8RM",
  "key31": "371MN8gZvhdC6GBg6kcXyYh5UsuoE44UGTtMWQq3Nqj7MH5ZHkGbfAQXeavTZVf9ZC8BhDttP87JL12ff4fsatK7",
  "key32": "czcigLbTQeV1WygxB3SHwdw2zmPueJMjdkuXn7TxQkycLzDVzLKzagcmnoctfsJJkY8FP3VTEicm6TW9VLDRsVE",
  "key33": "2EWTFxH7s6XMW5fY539GYDZozonfiM6Bm1h6sJpSEZrZybjNCeHVok2NAt16JqGDTJhkaxhRiA4DMX7sZsGRdCfe",
  "key34": "5jK4U1fsEXTinyxJ89fyng18jRqhJMCFeJzG6oqn97pQSPWBdhwzn4DVGtKDa9YEWhCsLAMav8TSdZ3rvW3qh24n",
  "key35": "3ZkCuJGHMXweTrb6dKZcUJWwGvpfMk3sDta4pctSE3xvYY4mzsNXkUjPxrgLFPfHjb1hqw7DVJ1GYQbpB4PTKY2g",
  "key36": "3SQRUbVp37Uh673BNAEkmFskFPNBLwZhytf55q6Vk8dAtBMKCLhyAjsnf9jasXbohzXg7K4Bn393SHfVz9mDYQqo",
  "key37": "FagF773tYDABGtzDQ3t8edcCcAQkhF4E9VxNYmu8vRLqCioPoic7awtSJ9gcriqPA56tV3VivW4KoFCqq5HgvKt",
  "key38": "ZaLaT4ruK5LD2ZmR6nY6BsLXSY8uYR8jUdRgE7Ei8WrjWQt2PkvJXgfrU3fzsQZCEz54iceuSAiwiFDs3MDKj4N"
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
