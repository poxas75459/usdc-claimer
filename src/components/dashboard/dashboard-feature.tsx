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
    "gBUeA3Vdk7WHFMuxZs26XySpfKsFiY6mv22widvTNATNXzjzHy5TYjmwRFKGsuz32MYvUpBgMXGyLQk6gJCAUPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57D1qk781VNKfxkkwoFzs1Tvjq6krVu6xyxUbJSGqPSaoi2HBpEJ8o69hTidVvvqFe4GEk9ePhTVd3teFfhnsWdp",
  "key1": "4uXvmgvU9YV84kqoyxTRKCUmqhwHKx5xo1E5PMH6JZNNurKeKYyFQzFDFLBJomYYpy7erNybtmoSqKuthpQRCgFf",
  "key2": "dCb8nsUte4pfRjnKCoaxpM2qaPtvKwuH58CeWH5HgBqT4DapzzCNpcQHmQ5P1a3oCGbT5m4JP4eYQkXTbCVr8CN",
  "key3": "2LkWypUvTZFT6hvXGNtnAbrBVAeZPmkzoW6SM93TwHSBD6bT23UutbgunFZw8MZDvrjcCgdDMGcNYrFyfXRxYG5z",
  "key4": "5fWJynJiascuCspU946DWseQdK3aT1oYEghmqez2dbqExkjLMnon1xrzr9oVRELFLZYBdBkU1wRjMJaR9NoFjfAQ",
  "key5": "3AJBD1nQ69vLWZmKUgC2eTyhCg1DTDWDN6mM9zNXdEiXae4x97TvVJRGiDX6qKdnHmSKcVSJ2iKrdi8hfBYcfmJ6",
  "key6": "2wDAfh6DRHWhqJQ27c8rq4iy2ZTKgn5pRgd8hvCdhXP38HMKowvWwjRDfhMD5gtevR2DtQMgrDvSqdgMwbUU7TvE",
  "key7": "3bhuiYvYhYqQimwk4fp16aNKufrgSqMFLcnqXa36hdsPeXxeUhxxWxUnUH6sWXJPcFUq5kXmFAUzBMuirYsC7MBm",
  "key8": "4y1fQQMB44yev9FNMBi1UoNmsqoqYgS6TrtdUh71iyyeE6yVPECKHsHRxPzJZVo2WgNT8aGnqecCqNEkmLoF9kXt",
  "key9": "3L38cKJGZCP6pBTxm8ycu7w3oDVhYLFdhcPtbJCjLTJEVVbUNuzCuqzwedNTH1KPq4Wg4kpJiPYoshFKnzYjbjqd",
  "key10": "4zdpVsSw8mes4yUVm8TEjqijp4ha3XnFJd2ZWKuGCnzoUDWAaB4nGPMm7uuJ9UWMSjRjkC5oMPUR8Vvb8z63G3bx",
  "key11": "2tu111hviyaVdVPpoRemUX9AEw7893ByQwRqgus1MYZUGRXCTQLhiKzHxQLUymhYPRNnqwXsQ85yAi9fRupBt8rc",
  "key12": "3wQNyaXJPBd6xUWjdL8vMCRDLe2uCjJp5i5KsEorpConwQ1YPPN1PxgfwZmeudjsrttXKSW64HjQBnsyTBZ68CNW",
  "key13": "4pmTwyMBWBXxHn82wuUSC7pobRpD65uVavYVxKrEtNVZCB9W9YsEB5xZrsf7Q9SYhX7DGPN3HTbkFFqXoWCci6Dt",
  "key14": "494m1aRy9ckpAask7wHoU5wcyeowZyjtXoja9Br4hTWKCXp5BdnnQ4U8ndmfsKPuFMAAWtWpj14KxRzVUmrEUJSq",
  "key15": "63hqb2fjd6DPbmvQAy4qqe8XhTfBNwhrdDYA5KAvvUG5Knj6t4ZHixSTfGw5VjaPL35826hNqZZqv2pcyf57HyB7",
  "key16": "4VMtPyDgJaH7w217a2EiHgopb7pK8qnJbCGECQmrUe8VdY45QcXZLwTNeyiAzShpqdfFP9uXpvStMf3JgnzRRvEX",
  "key17": "4x9QD6yreCreqjxjHEmg1zB5rE2xvWgiZ2igZUzbun8rS3wYRKQsouctD9MjWASHhsF9PWuVGwySMHaGZiBXjxqS",
  "key18": "41gFKS8jjAGvSktG73C3MNs2vSu2WYqKqHUidYrtudmkw9D73d4L2idsDXKuS6WJQ2UzwdRmsKUShFBS7WqzxbM7",
  "key19": "3fXERC7YEemn4yJhLsMGKqhzXjFvYcHgC9x9dUfnVt6Zjno5qtGBxh3eq3cySpG6N8gtR8gZ1qPyfHiWkJYeBP8T",
  "key20": "5gHHXyfhRG96y6rqd5PybHchhvru75zV7hefLahDnFKPEXmzGfQeA7PQPoURAQhs1pX9hj9SUY7WTT2TiLgGtcJq",
  "key21": "4m8x8eTdT3MV81EpoDYKQxnFocDRTPQhBqw4ujwcG16Z9qmR4aJPfd1xFH4vtjjGUARGf3PbeBeYKuFd4fcQdE1Y",
  "key22": "5HYMAejS1bJcyY52Xjn3UVMfUoZbWXq84GPYFZcm71JtzvdwETryeDkNSrnoVV3J6idQk3PQPSQ2yRrmTDmFai3S",
  "key23": "5n2rg2td5g2Gawq6nnFQcp5FryzpTaEGhQ1afnZFSLeMiq6r364jUbrG48hsJvPcEWekDLidZc3MFu83YD81mv5G",
  "key24": "5Cma6YoG7o13AD82AGkrB7ShQR1BHWBNYcj7vhMC2toZ9ebHqCpdYTzHDD7DRpisptV5BhFjfuHf5kDZWoQBvGM5",
  "key25": "5n8Njhj5dFAfUwmLJWhiQgwUBTWnrnw1sj4h2SKp133LLWVE3Xrs4zyhdTchnZQ2aen8FLuFjxxsN1Qdsdo2oUZH",
  "key26": "31iVBwkVF5ahu2rMBvWzsd3FmfRpZuRBWBdMNf42PhWTF883SFHqT4V7wknihLg6wxZacC7ogkbpqUi8ao4zPecz",
  "key27": "64Qv8opdL9x6aBoGnMq7Vz7uUSHVBLxjpD45E4bbdr6zUAR9MVhG79FvyKCRJvnPN9GkwSPUbG6i44B7tpqkDJgG",
  "key28": "66YJ4seCUvXuAEc25KpSLNFv4X2xjfEXsK83QcUD16uuiiTEr6dqVLCpCSgz2XHgeiuXS4sxdtjkrLKZTvET3gPm",
  "key29": "ty3pcKH58MG9kLfu9b5AcoeZWfft9s1LGooaedRKbEPNqWvLg2vKNjDi64XsSuvTeadwBoaDe3C5wqcgXm4W5bi",
  "key30": "nHDerrcywLCNmeAdpG2cNcjUiMXQ9m289tU5rpximRRL3rFsAcnf5WYGCmo2DuMSKCwMGPdJghdDi9oAp59Co62",
  "key31": "5SpQVQkxngUiPN4bzEcw313xFP9HC5FP5JQ8W2sLdK7rgEsn35d2zQfbHPae51pxB9NvPqta4FcdrRrTfk3xEAx6",
  "key32": "2BfvahZKjAkRdyWRDTEKMMYvmiBNnYPQudyEPxFVrrkYpvA93tWxrCkziGXx6X2nAaPNxmowz7eBKvQ4DXXHB9Er",
  "key33": "rEpokropN37hXH5uduwMJPYvvwWawwC7qNPziEbztf5nGHTZkThjH8WqKqxnrot2ygRfmmZoGkYimRYbsGs7kxd",
  "key34": "3gwiuW165RpKuY3pwHYoNJ9GorCJXGgHShuEUPGdshaHxLyV8Jgg5hfMqrznncbRF1jLqYtpSgRrNDSZCDwAwhzC",
  "key35": "5Tw2okrrzXTHaJZZNVQGXFXo1bbwuQufqGBFe9Q7ybVvZ4BjkgenVmTgmxhSQAiSkH65AHLRsKALtHhtaRAPvQCV",
  "key36": "4ywpnFKBoHMpWMU8tgzWbB7VNebnBiVMXpReVikXu9VhEKa9hJbRYv4TkvPwDtQ2QGkydMx14oRb7JmYf3pwAHvY",
  "key37": "WG7L7nJaFk7UStvAPNkaECcTmTTwUMWjoZQjG2QjoSpfsPCBaJdLFqzSwN3Ju7Vt3RzgFzqBrBsMb4eRCSHvQC5",
  "key38": "4Ffd4rTvrd44HK961yXbVZj47RrdciH5Jc2wtBTB1XnskbHWvtjSFThkyvN9YiiRfVQo81hMCYv21x1MxXG36hkW",
  "key39": "52N4yuvr2Sx9D4Subb683KPk4hrkQW6k8PUGxkdu2GGHw1oSUs3w5So5zbGVPqsFZZ2kZ3w2eFrqamX8F6QdyyPE",
  "key40": "4b64SSVXRcQfy47bPws5SCGUehGAG4KnRkiLoti5zah2JMZVx5BEuL6uzcUqWuuGQAAbFiyTyTbKewFjuN2FMbPK",
  "key41": "3mnjNmJx6fUMbctGPiVWnAfopJ8kGUZkus1CfzXCEEQwypfYVa3qzRhdy6zrreybEZ2gGb9efZ2EjvG5R3raJG5R",
  "key42": "3NFtBj8Y8Xk6BP1QpFeLw6FB8wQfoCuurtiQskYjGtnbSWzXDGVQKtfCAhu9Jt1scsm2c6Z8yJjKKG4d38Z9FAKL",
  "key43": "2JEuJd3rezBqtBm8afTqD2zv767J8LwMLpwf6pWmzvByzycGjMtGsYnPwFPbubQs7xv4vNZb775rHnJn3bps82gX",
  "key44": "5vsWTBBArbCpZoLmW83CjJhQrUtGFXZTuVkooChueL9RjctqJVAfpmLiDPudfhnpDqgCQAhq8r1aWJ5kSLWy4VfM"
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
