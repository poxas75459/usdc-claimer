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
    "zxGEpvEAvYqeQP8dYrZ2WiSr2A3ffwZXBK5YrcFThmqP5XBe6rpJ5hdkhwuEJFj3AcoQ16BcwsZCETrFrdQ2q6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRE6TaBy7WtAbucu55jyEtGzjd1RURYuBMTV1gQFwX91bQx22Q8DNCnBjN7W1YTdeN6biRgT1DNb4SVj3jMWH35",
  "key1": "QHViiJeqqAnw6ZSMREFeSKmyoZXTCtWr6h6EwNyNahYczrbjPTWVdLQTisASGCQ8wNztFzcEHWemqVTNJMLFtW6",
  "key2": "RR6WAeuQapCEKd8Xna3P3HZHH6ueCDY9bTRWU74DQGBj831yhqToUAysLvy386K3cLBvSJMUw8GtD1HDth4M6fM",
  "key3": "2PQw2vamxb4ktfTpu4t5MfVAduwrYHeVzVxizg15p367Hf7ijC24WvHwRUvhQo4uphoShhgimtqS6cVwookJm6py",
  "key4": "5Cob6rt32k1mi1vyyh3NdAySP8HahfUpudWrDxLnwoFKiCiHuUA4uqYdtb9xS6BNkANmWNosQ7w7kQiAmMeT8GtX",
  "key5": "4hsV3WrqfdxsC6bvFLKBUBM7VtR8r7GouUjSf5mqju1oMiA3xPGFJjxcVqLMDd9Wbkqpngem15zK1CJBTCKFVVbG",
  "key6": "5YQbSAFGTnfJtL5mp4CkN65QxPvf382PAvsShHngD2eTpgbAQowvLpBsGx56SmUt2V56j13Z61EAhsqFmjHMdKhi",
  "key7": "2h2sGuN5Squ4ptU26knGywKTA9AYNqvdYcmdcSA7PaGQMBdNhiNBaKQbuJyzMwUeAMiw9p7LZTrau2UrXDB7yWuw",
  "key8": "SqkQVED9g2TvHoF7TG7SsfTWRymE11xfinSfAmNh3Y2TSnzUedyx5eQm654XBw9s5u3eTuPfF3B81oM6Bg7nqpr",
  "key9": "25tqQDqMtNhJFepiaJwxjvPAyJkwYNwNBMoNoM6MyDCh7Xxifc6ummBCdJBCKWsDjiJya5TuucSPjhM9Bi4qZ7Ua",
  "key10": "4PkDujrVSvgkd4Zj2wLHyEyHuejqdqSiCStPTcqoU8KwoD52932ymWFxS6HtWqoxsnVz1o6hvKd9ZZMWKGEiThok",
  "key11": "3sQjgesdKorZRSe5L5bF8Z7Kvyhd6DTGYS2LYBvvQrUgxYCzhpZD99kjxG8T1xwSYVqm46BVXz7iDH12z27puwQr",
  "key12": "3geyoPK6tfUGWkLseKqaUXL8qXJNLWarYi31dDPB7jugxXSNTRQV49GemZQRProB1BpN1vR3mAHtqZX4iDVZQHPD",
  "key13": "5VrdsUuyXrHeQj4NDxbbb2fPFFEviXUWVk2R8VaEFZvr5FyVHe442e8MQURBSKJMSbYogPodxkP4mPDBHR1ULz8u",
  "key14": "4AzFZrGjDhVQhNYzCt24B1NuGRRuE3UXEehDim1MvN3z5qXtYur7hrFr3AW25MXHFYVBukg2TX7P8VpPD4jgiijH",
  "key15": "5k2AmvM2UD2GePGh8zQUjQS8hZyD8Bv1FjiWFYX1H2Txy9so9wrCD5u88dnoBZiTA53U9QAow8Cf8iKwaCbZrmvT",
  "key16": "rHGCXnbzRe8N8Q1LYQgsATnfBGMg5ZAAKqzMK4XnKMUtzpAFi5SV75LNrzhvVmiLMy2LBRxgQdp5khGmTLHHW7d",
  "key17": "f6Tppd6HWfd9LzWyigzyXUHzFeaK3cVYMbFfxH4CiGbUVV2jzyAbCAfGSozRm3yh9ajsyLmAj1jhM21XgmTPq88",
  "key18": "CjnHebCTmmVN9oKDyfWsQA96soe9zjQkmBXLuZmTfFvbVPjfMycka89dNK7tnHRgkTELzzTkzRw45Jv94QE772p",
  "key19": "5G4uNr9v2MQ21eSMxiPiFGohy8rDyU92kerFydsWg7pK3kcAXQ1jnyCT2gB7XxE7wN4YL6tUNNjCCZnHnn7ZfXQ3",
  "key20": "2AwqZFJoSSzbar5H8nGqaTfT22d48M8qpM6ypjjbCr5WWXikkfAKv6mj1Kz2qCG2UYygwUmxqRExF5PSobXy8rmH",
  "key21": "5hYX84H4C4nKRbGuUrJuqz9SHz5nQfFCJeRtoXcwvghyBgwoQzU1pqvJGXZCASQewibJDUhMHVzxWcjww2MVQYjF",
  "key22": "mpJta4WcL1SsExQA2zWHJHYeiYNrbVyU935od5JxygUvL53DuF246gc9yNEhkdBptSkx5CnwUsYZTXzBCM2UdTu",
  "key23": "MawYUJxXdnFcZAA1hnwaKHSyioWrSnRfwAuKS2thX7HNu8So8CQK5NGsDvSnZBaAd6bboFUmKndNFATzPJLvsz1",
  "key24": "3yBavjr8WuxrWtWCdckicmJyoM1H99gFsysHZ4nYMufdSV5Bb9oGB8SyaUai4V5ESswasFNg1zkr4ThusijnZ3a1",
  "key25": "5ZAqgrzroLN4x1JPQZA2Ktz5NVWBvgqbdSFS2sufsA6yy81RjgJwMjGqXrRnLCgWVVAPNdGfMChBocA6tfs7ZxJs"
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
