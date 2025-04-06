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
    "4yy2ggDrgMKE4iQvtZgT4yYyRLoFE8sxpep299iwyQ9F1QoaqZSYQ8iRtP1XTkfBpdNiu7efzYrb52HwnJgnSKTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QA3TN11PeizbTf7z9BoWZCc226cZEk7AsTcgwCWcVMoLTwTxxY42W8nFyCyYszTQYXvfL1XppEQCMmSoTsrRtPn",
  "key1": "4mZr3C7DHZsgsTEJr8t8y1d8G2oWnLVogdvMy1MKETaBLeYfwNKXJfsQvtNPFZVzYmgUxZR87x7Agq2JsHUNWbYS",
  "key2": "6ynBJj3gUgDbhF5XLzXyf1dzeyQsq6tThHxyngaP9Gw98Tij1otqYzjMjMWiEs8V8Swg4jSyjtsrAioaCzw6VDJ",
  "key3": "2GTKnj7Z5TKANhcoFz4vcdTzG47ZiFBuNY2CTFSUsV85FQYjXf3qb3nA2n8Ls6rb1ZgBfiW42ehNjWYCqnGD6Mun",
  "key4": "5GCdEJurUhVT7UrZvXZutNvxAW7T5X9vqcm1HYirfHvDF3VYNYow1Q8ecfoJwdDcmR9pADKvgaqAwYY2zvAyBtZY",
  "key5": "CYNBUNRiLZQk8gfbZbiR77wjxdeD4hSpx7rBPdTgamquv8S6CLhkkoiKWkErE2RnofuPtCx3wn4vgNYqW9Lbxs8",
  "key6": "3SWCBprvYshBcC8DKYP72p9gZvB5XL6g5wztUAYqGEet1PLTEyhsXU5vwVqSyNAAafBVtTZCG4jXndFCbdt7XaB9",
  "key7": "29qLTSByFMK6CjUj8PSwGXtY17ySoPDVfXP4BPsJvVSw56qD2xBSYoeMdXsMMUBZkGWajQYVEMJ69VkWmsJ4Dyab",
  "key8": "5i2JTCapjyWkdxDzWWzgccZ6XF1VR4yRbtPS8mviJVP9b6oT131f7rxXT8BNmBrcFyPdAgBLoN7zfMTDdsGEMPKS",
  "key9": "3VYL8EHAPKpCWvWnj2tvNCsjegmEKWw4pwZ8SwJtsZA3752ESz68LU7fmtJb6pH6sZNhbVkjbsBy3U8qZkQpxhDy",
  "key10": "2L8bhhaBg9Mw55ka1q3H8DPBFzMyiXq3eXTLQFQJnpcRoGKsrCNzjohRa9jhvkkyLzgyY8xGYB3i7JWjZz4a4Ngo",
  "key11": "sKWiUGha1pJompV9QW2uZTDtm8WbmQPR5rubgsQGC5L4MJK5YAPrio3GbnnBZuxapEixVA78e6VjH9ofHniPR3N",
  "key12": "2YZ5sikhPwGbvs2WctGdQ6ycd4AiJrAsaDuv6WkT8yvFTgsz8FjvGDNnzSHQTr1BGRrzZGWXqEECxm5DZbaYLjM3",
  "key13": "47XFNsFLTbNonUUcRzWfRAp2natFpBNsv5Mufd8VzL267LBc5EZFFkYjB6UzqsXYFdih4tPDvM3Ht9n8dQezQZ61",
  "key14": "3agMh9pdZeFGdVQX3B1Up15z5QxtNtCXxQeSMFFGNXXnown9qU1vafQqmxBT7uV3Apd1psM7QBZm1pxzsDgHntPG",
  "key15": "57zJDpAyRcGRZsUmyroFScm4Tx5W8ABsSwt5nJwc3fzBe4NKe4REBQMFr8y2dBkEpiGZyvxEBwQdMs67mgd32smt",
  "key16": "RzFmnPo39bMTBoAUKfuULEHXKrdqYJTPfHW4JuCBdQUjvUefGrnCiPXQ7uJQVwmx28EWGC1USmBHobh8e5PVeL1",
  "key17": "4WrNwTVfRqdkckjbhqc8JzngrEbYZuLztw8XFVFdzEorjt8pf8ZJYwViZV1Rj9y7T684fEZUzekatDSt6uBM32ZJ",
  "key18": "24WsStXKj7TnXCqamv1jrjqjQj5q8us8f9FfxZETDByAieKsiekY9p3PZDBucDnZBjeot9EEqGFcj6JXu9Z45Gkj",
  "key19": "B4pLwLZNN2jzdPUsvN476eGLTZK6a57rcw3fRa9hEykTx827ciCWj27sfAfGM9TbUoakhhK74DdMN45qkGQyJLs",
  "key20": "4Lrke7rSG43qjEzf5hGbEJNAvhEd3zhzeBLndJU89MG5VjZgJsPfuyjaoeoGTjpE7seLKR6S4WfJydrfymmkE9Rd",
  "key21": "3ie5K7eGAcuquq974sdLxS23U7BMMsu2RrhrReF3RvgYAd1oduKzYREJpF9HoDP6MqiPwCNNf1ca2D1RdK7TS82",
  "key22": "2yvM9FF8x8xXZHgJUTwgsVfc4d8pCMT61EwV8zavnq7xt7RrMy9Fau8bRhHAasUY9nq32GfFZoGDmzof5XfiWKiw",
  "key23": "2xy3tpS3ZhtrTYxck2k1tGspZtp7J1nx9nkfexWAcjaQU3UqrHHCBLgC6j6y6kCg86KayYEULwLjy1NodD2Xv1e3",
  "key24": "5hcXRcbbr1RUZfrwDwvvev5Jy8rirZ4TMaZXHkXZKbnWfomDKdzns5PihrUd2Ryf4V37aFsaiuL427VFFfjB9CHi",
  "key25": "4o8DEd2AXc5oBfUPs8NtmX5YQG7qGXvC7153nvpvC8roHhGx8ACT2HP9tteQsMHtVGbTXpqdqfdpK546XzpMSFcC",
  "key26": "67ZpZHtCEaGxoRAcx6NyRRtZtKyMXEEAzPBASE2BRbATc7GzvC16xcYe5uy453PZLNprmjkXMYeRVgTkdRseXPAV",
  "key27": "R3y2oKUM7TmsBCdN6QwQvcJpt9ZfoaVed1vH96VJVkMbgN2Vhs9KHNYsvF4mdcpgFTTnsnsHTP4GALnEt7i5dv7",
  "key28": "2W2s9DMNcVBbWsZsT4LeVGrrRTjsd6amfwo4oJGtDzRcspohsNZ4LAmmRCfVPt4oWFqMCsV3PbPr13o6iWyhgcc6"
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
