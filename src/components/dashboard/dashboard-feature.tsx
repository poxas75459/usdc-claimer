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
    "4UJNrCoFzKaxieCQrYpBxc2GXrUt2Ffdd5wQpenXzG1b8725LtSJsWyD6JM1dT87qSxs1rU6byDjajQdbduYeMfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GuRZW9ipM6rFf9WzxqdBVn3aSqbqRruDLqSFukfnCdnjxb1apxj8CMfesJbeMYqQyLBoumJd2XubURVP2RipuxH",
  "key1": "L4WrCmqe9AFRhgE9ETJJQEKC6n8FkK75u4Zor48D3LMinhzBLjYNNw48E3kkRfFstD8avj44eqEHqvw3yTUSdYC",
  "key2": "jWVegz8PT7kwAhh2XmjB76t7ewRd5YXZnvLRWZMv5T9yLjHoATUQWtxBqid6gvHYEdGtAZ4KAx1exMyCTtZ3xSK",
  "key3": "2nme4EU8S37XNZE5q1JPZcuo7ig8B5hkrwxwzZMh2NmFmwiU99X72svoq8wTJXrDiCVe1tyXievUtZGZub79besz",
  "key4": "3bnUb1uS76tRYmeU5d8kGncQWdJqecPuwde3SxcRhwerKw2WPDE5HspkQQ6kteLuuHRBCFt7KV2t3415XQ3EgDZQ",
  "key5": "ASS661oE8SqFDp8iKzqMyoBB1foXGAywFxurWSkZNBr35tgP9HvdyB4zTWCNEsdNwLmYVu7u2khWDMNJzBqwdQd",
  "key6": "4raLJezYbAjZM5kWyyWP1sk4JvtXUbXj8mPEXnxSDkL9b6DuttEWXvtSgwqZGjVsGxcEBKVxijVQTEGtzbTEzsmw",
  "key7": "22qBmRDJpBhqMEBYZ8BkErqj413pajvvWeSiemnTjQSvgKF8ntfTq29JKTnui3ZztHPEqu9xZJAYycUChqBHxeWF",
  "key8": "2weA7F7cbP6joBeUJbREJ81ztwcL3ZQjypEyiupzrtU5YidCvWpB7URfz1hHLiwSL7zBwskvYP4hqorjcvmMS53w",
  "key9": "4i62Htxt33AsJ3pjownLe4khaVMxcTjBJkVnNcfYNzPtwTqrE6xA9wZMas6LpAwk1F2R7PgyBdqVmjSuzwAWCvuj",
  "key10": "4nn5gH6N2rkamuWW8LYTDnoLwL6cFj6nFZpCq2i8Kis2JEXBjpMPF69N2bg9J1aeqFmBowCKcNiasSmpfaMQAPyC",
  "key11": "5jyaDa7Ls8H5pZs7VWPMLRjKMdyHJ7oCnuy7ewpFzdfY2JHfgCvRAZcajsPXPwyM4v4F4mbTK46PiaXnntfiBd8m",
  "key12": "asqSf1GhwSVVaNj4CkKHSwsNQenqhSgzAuTYzn9inzMB2H2mrKfPvmwW1HTdR2hXaA7bcmh8byTvhJ6gLppcb2T",
  "key13": "ZWhqgdLPAVuVgWjJZWBEqFyPjhsYGLc8tJu6CTN22dkL2mJ1xPm5itS3C8niy27FzBiaHC1tgHtNMqo5XjgtKi2",
  "key14": "bvtB22PfW1t8hk5s2ppGkyzQexGTgmhqMNXC14nF8swAkH2rQ1BHiDXkNymWY2rsvkyDXmo7mWFMXvaKmaLE5Lj",
  "key15": "4PVYR5z9oo42WYG4PW125vdNKsJLR4zDGwD9d2iHkYQ12Min2NTQC5W9XLRN5S5Js9BK8dVnVme5jaQGbCSpnVtx",
  "key16": "DRLXPJYgDxC34jbmVMXpDunWPC1hvmDYFkdDgKVyAfKgxrrQF1fXfKimUwsctFUYbXReAenbZa35z6cnfaWvECR",
  "key17": "4AJcJTtuDNrwBMvaXDBdPt4yTXxhhkbhr6t56kLpiVNs8VoiLXf13dfbM1GtRGbu2kubJbu2vTPd9Ywdm9uQLGWB",
  "key18": "42aNtzchyz9VftYPeXLDevzHQQ3Dp8vunMMopYHkscjs5xpz1ALcuEcSvqfHS1KVfX9koxA6NdQcNTQhUPXAFgSk",
  "key19": "5ZD3eAQH3Kr9ew1atMv1x5FSj9MYb17RnfB9DTY2NAfUPP4MQ5uw6v3zC1t2tpxp7Vkqqor7qX7hEVD3tHAQRhyg",
  "key20": "2Uxd1F4nWuTmoG36iTZYLDTYsHgQ8wCbeKinAfmhwPc9jTp2Wuku7fs2SFnNyUybULT5Ncf42eJmh8dKjDWG7nVF",
  "key21": "3aMGDwh1fFhDQVkNP3XFPsGBSDEKuLSDLfePEUNwAwqU1BLxJ9qNazys3XJceKc5x5abV4QLW4AQiV3ZjjBsVDHr",
  "key22": "5oKiD6yPZ62bcMwMSyxh7wRni5FDxr8XDHyvJcBiRPMvGvZWeW9hJK5LDJUtnNjfpwtzfgYXuG92pZDnN1BHzxWM",
  "key23": "bCE9ZgS4UmE9PdgtqXvMUY9FmzBzgLTpjyqL1vyuMSxaar4ERyoaisJDpwx1dsdauzCeZkmxC8Zmz6EHbMaunkc",
  "key24": "2XktZ2UgjwWzDWpVW2vbKzGejra6RLh4Y7LgAZFrEJ9Fp3MURMT4ji24yCgTcD54QapRUtvBPrRF9ATWK26Km2sg",
  "key25": "4mUXKnHbteUKr5dcBd9gparXcKpHPe7zc5UBZLVZv53xBvJw22DqQaRLzTHZHPD6fGBau2mW3JLPtM7wCexX7dnC",
  "key26": "59eNa3Dj5joJVCu4QPG6NsM3Yt8SC7RunnVJvbGVCtvWf8nhs5Hb5c2jQpnXZx6s2LuvU65wHxCnuxwSVeBkdbYs",
  "key27": "ov8qaAvGn45RedqctKTueKDMimZwhiDf5AKcSnencBpSYtLDh4h76di8rMGLQHBU3KxuFxX5RtBX3VYwJMdrgTG",
  "key28": "4AWCfoRrvW9Bm2ssUi4VKpgX8PJUvJcooNoUmYn1qs2DomKRoFpn65RFCwwmk4CJcrE1R55Ty8hyTSXZhgN3bt8M",
  "key29": "2GhQ1sRMN56vdgySVPHuRt5DhoZgbckynsZgdTxWDjknWrCA9xQmCTv4XCppAPsq49k1daG1aDsHGekYgnPcSgoF",
  "key30": "4Mzqv7iz4i1MLR9TbAW19S1oXLNX36D2oYY7PrSbBqXoatpZP3qR4B3KCSmDdTV7iRhhqnRJC4uUFfS1h982DjhA",
  "key31": "52SaZ3TJsPKb98vrheMxTa7NpWUqd9vzZx52iLmLKQvKEdLC9mzDiBZoaKX2VtzqCBn46456GswazhvixDfnYxUe",
  "key32": "3PPU4zRNZ45YCQFFE1jJrRvYp3uNu1LjdWCizqacrASTpyhBRUsany5GgAmZw8krs62eQ2Ufd2Uw5T1UY8Ko3iWk",
  "key33": "GFVG6kuxeo8BTmGB88atmXj8y6VANT67GmzVbPhNecMeQgssfYHUeeQtKPYHD63MRz1x51gtSQ1ehSSj2hZ8eVN",
  "key34": "4GxTSFtWxAhzMf8jR3YotauL4J9an2H8Hc4Rx7TcHRdxP15hKpHPGugxcToM3wJVVrVGASkgGyCTSm4vx3PFj7fj",
  "key35": "4ViMrizgiuRcfJfyVeW4CjXBva3bYVLCpXoyC2jUpsvYnPEJZYy2y8kAQAAASrT3hibg5xgeGw24ufyZYXjVwkGf",
  "key36": "56ZH2BBzz9rWkRM48GEhD6t24xU3WLtcMVbQRGy963H1kfEorXBxP8o42PfpChcvEao9AjztYzHQ5oFYn1eKVuRS"
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
