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
    "51YpHZKVbcHRKfNCUPXpJL7KrAZh8UvSZ6BmP37TziN6GGb7PJJbdR9szsDrM4Xrmwi2FmQq7WLCph3jnAcrALz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MPuavMTHYKmbqedcenBBsXCCpB7q8pRDZ4vUXR2ycGeSkq8SHds1QiK4YMQFtbyhqkQa6khk68TbcAsbEFkQWZr",
  "key1": "2NuM7nrKqAPpBYqQCM73kBpatFXKmGpHUog1XVkF2XxLxcTs5T7RJ5Wim4WbwtUrLcRbCxR36oiR77uGLVo5PZy8",
  "key2": "5zkCxwhZPdJW7LrU3kpoWxh8A7Yq2Gv7SKtjvct2KMs6AofKnXd5UFzXkbZ5NBMQ1qPHHbVt6yum4NT8zsouuv3m",
  "key3": "2DT1PSV7a9WYdKxUJVubenkkMDaamXpYFeHknUVHgahiSQngiqwMJzfSEUBxY6BhDamyuoqAQxFR4Lw7XRBHrTu3",
  "key4": "5X1adCJQsiAPf4SvGK63exFtwP5m5i4ib9iJgvtfajNEZj4C2BPAXdQiTmboGBqi1VWhnmuoajRCgJjqf8adde6W",
  "key5": "4sj66LoFfKAu74Dbq697SUmi6U3Y6r47otEL4AygVDs5XU1SyqHn7wNFDYYkSszoiEnEzZUUaHM1qsTxy7QWXR1u",
  "key6": "3cYeZD8Zhqz5BT6ryrWhJMceG28S6THuEeFpU7FWQjMnUtBPnvmipryNNsLV913v9aCbdbKDczBV2ef4nMNjFncT",
  "key7": "5hj6kvjwBVFu65z1tFAruxEhERHeVC8U62ab73zcCetgr6888iRRKQyKDeLNBeyMTkTzeCMMyxz5oJDeLc54wt9w",
  "key8": "3LZ9VL5UZEXHqgoE6Un7Lf2eSq9drGBRohJKugPDrPNQLBm6FC66wU8VnJMqaXis8hMuaDY2neLbVBkRS49MXbAG",
  "key9": "4RFdAtcUGYWzn9anEwSvXSjNGFwiwGUDoNJXyCHYA2zKFM67cHWzUbk9aGYE8G3DUak8upxsEV4Ux9AULjeGAMUs",
  "key10": "5tiTmqyr2AeYSXLS4sw9jn2ZAx4jJ17foNaQGicLkqNSWgPz1cTPjmemb2Bhk5Q6312ggxQHQmbkDhLddT1XAvPT",
  "key11": "2DLv1DmF8qvMQk9YrN1YRCMrLGxQ1Tf4xGNCnwGqCWd7wWEmQLBjvUxPY7odWKSrBrLaF9V5Wo6ph4GmWLH6wrLR",
  "key12": "2QbeuPZpdy6uYk8A8howNDYHrTNk34edYbozC97KEe72aVD3oC77crJUCQ2WLpzpQKhR1Z9tVtVUbd6PiATPX9sv",
  "key13": "rD7HzSSe2JXWdSHeFMziMySqKypjy4X2jz683BdogYoPMgyMZ7x86iAvnkL3NgHn1ySUV9fZ9RyoH1zxo1tSFbz",
  "key14": "3688qBMovxHtTsnhChQBD5vq1B5nSFZoTRpQQd3ak8AnM9PzyrFtraBSWmZLQLL97t2SDrphKze8NqmiaaSWjUkf",
  "key15": "3ueDzpQxCTx5WR2j4iPw4PWBpBTRnXF6dvuTmKwJQv4yyJUzFMAgWetAY8q6GkvTdw4pNmCPUWwxxkrEgurbksY6",
  "key16": "5teyuUTV46wqupahpZuC7LAtdU6S6hhybP4b4iNiP3uu1kurdu4x63nYtPtPgr8kf2KREKkaRqo9fHh5EJNmmrZ6",
  "key17": "4p7DtR7VWPBaGXhYr2BLhHgK8XiTmJm3JwzMo36y6aPwaV6xps5oTS8fieuFarRzHYArkU1z88Un1LWxfo7BEXvV",
  "key18": "S2qyRTm6uR8swS3GgfjEfMx3uW66oBoeiBoJwtxy3Ar1gJZxeMzsoiRHPrwEHTtsN4AcsupUfJKMBVDKQ1Aqz2b",
  "key19": "2DrhiMG2xT6798bmLJUgeQfgJeSPxfgLjTXq7gsrQkLftukchZHdcYQFzVanTcbfAxHdvJ95XqVVwr5E9Aa5PY6s",
  "key20": "55g6asnjqp7LejiSKWyvr81BwGRmqDLvwh8LUGBMWk2YNhb942xKdFEJrxNbzQFDRWJGKUysndB5sq6xqbZq3p1i",
  "key21": "4Y8MgqcsduqyRFTHoKChq9UL879gg14s4umTJ6ZdC3CpApsUMdQif5ZzArnUsvNKa2fh2jWkiyL59BDoNHWeBGtp",
  "key22": "4bUwwth5qjgXSM5oDT63F2vKixVG7DMYDLZ5usCaFJpV7aRgdAw1uRJpgBhCHTsj596fzW5Vas7ZnBa6aVAVnjPb",
  "key23": "3jEQoW5x6ZYDoq1aHQ51FW7tM2pakfouvaYRHNzWZumewMXoDzAfRtZtkCmuQwiY6hvCL1Gt45uq23bxgYGkdx1A",
  "key24": "3AC9XGbSqbSp38n3kRYvGA1DZawhW93veCDoanQk6phRtqZMig6zMxbZ6d2Wd8f5y7Vh3MUoTyndbqxtBvhwkasS",
  "key25": "5fzCUJwQcdCTe4tTSKanj59dTSQ56PjRBPazyGSsgTmrGddALFBDZQdoevNvPoJHAuHCUdwfxonJ99Qqx36JPxGb",
  "key26": "3G8jPi7Rywxt92kvgYuZneSpxg91GPSkoVDh3iberomuNUaXR7cgYM6jPrr1A4e4omwrFbp5jhW7B8BbVzcYhke2",
  "key27": "2vtr1A9as83zNzxmU5m8X6m6DmHKpTxwjaR1kuy21mttWU9aoMJwnfB6dRAcLheSwANaARRhdx6gZcfXHQbPGMMh",
  "key28": "3ozgXQEhd2uj8x94rjs988jv9wMnjeDk8ghz2sa33ji9NPrHU6dPkCrJTi63NTAPZJKDb6P1Qn9hpw1H7n85amCy",
  "key29": "Cr2v1rrLj41gtkTgnZnZnUZc1nVoDYmnfgWwtb2mGukcf3pFiG6DVLrm8MFabkqHv96LSjjsdc7W6Xa4zcAo2U8",
  "key30": "pckCwWKHB3gDQKqEghFwGEUXxtLNXVXP4PT5gP41njfte7NU6iSPeuDtLoYtD7LRDRk1cejWMwaymY5ZNhX22q3"
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
