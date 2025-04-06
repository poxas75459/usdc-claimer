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
    "v9RFpAZUN7pA814bkogbU6hTiGJn4btjzKVLdvd26eav14kXj1ScdXniZ5M7xJkYfaPihvfBVXNx5PKdFN8MXE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hFtTwvVoWXbJhsxMDYVH45q5DEMzZzv3Lc3npyCmfyRsSyFFRrogyYU7PMGcgLBNaCUSsqEmNVcfdeqnf3i96Rk",
  "key1": "3DD6mfdEcxvkF1xgb7ab2Lmnq64XZjSNA451MGnKmkVsRBdekTchhydKyVjqbbcyx4tbiXVDE6ojZ7fJfzT5FKk7",
  "key2": "34QSodN2fZZ8okipAJGeK29GjBKi791URpzXJDjugdXoYDL1Z2iXL8XoxSGgUFh7RKzT7mrCzjDHHSx92eSg9Xyg",
  "key3": "JTXcq83tgzPJ7hDiimeEt8PWkcLVGVhWim7eq5CC25pRQs6oHw3wEogCYffnYo74p3qHq99spKjp3F33Vsq5V6E",
  "key4": "3bWzfQKdWx7pGd9VeYSUPgYjPPpw3qXrDyzZsnbUzNV48upEVT7XuAKo1cBuHwnC5b3DJac1ZBsNdps5txr5ujb8",
  "key5": "CxQCggpbugg3XMR2MDLMmKDRST2RkkuSb9rpQW7j741dHeCUSDPULJoCqjQYF3WWoFTCL7eycodqTNLg9DZp9VT",
  "key6": "PvYVYm79d8aubgUyy1tSJ3P3Ci33f8vTdc8xMQR6FAm7kU7ZcsDREGkkEdVFsrrDZBoVMNawSTnx4DKEpbeF9fU",
  "key7": "53AdrohUMFPZWt2mqFFuRmDFcFC7Gkp2snmUaqSk3syr7zEYhUfH4LfHKP2xm1kWanAQzeBrZVGgPrV7X8K64NUh",
  "key8": "33LDDjPct1dvn6CCFYTp1YLwLEMfnVtP1rj7wn5BXZWS91mgBKYSSfYXJEJAWVuGasdTTtaZs1rm9ypCDfAmS5oW",
  "key9": "bpnPoWvb9wVrWyT5i9hJE64jsV2CfQoRpPf1jbCvU8yaC4GAQBemgJMH99BhrpEt5UJo74pjzPb1WgPpCnCphQT",
  "key10": "5h2hg2JxcqZYLbKEMegicRaD6dBDQm8vNxZMi56CeNBy6GVXfQ6BqHeV1WzaqLRcZDbEchkJhiYSLzA1rwksDW75",
  "key11": "3G6q9imEnT7ehnYz7YQBMcthkgFtZCCUVhjujkPdL41t1PAHbkVyra2BaHmb5NizdYWKLdaqKqqMdUNJEH17s5ck",
  "key12": "36KjNyP4FxfP7e44RgbU587nom8uJSv7darMkeRPyYzDHNNn4t2pVrhsBgYf17YMv4NRwaFw5Wqx4SShh988xWfw",
  "key13": "2imneF99JHow43WAvswCu4G1z3dNy6NdfA9icGwf5oLL1KV3hoNDcaF8A5LmHGvP8Xc1VHyR5UVhXQ6BjL72hUxc",
  "key14": "35GYxKqDs3SA1MNVU4CPfsPfJpe7crCyZYtRKznpCYSACmPfiWKCWpjWJiF6oXmZR2KfT433mvien5hGarSf1No1",
  "key15": "2JFRkk4M4xHGmDtfX8Mm99BKkj5hWooNKRFoz6Vgvt4g34TWXQ8G8ZMVzVvJDXfwoh4DPPQh5j6cckMNsi2fHAQS",
  "key16": "4H4dbhzEDnYuFFiDNV3px9EXvoZ41W1mDTVQHSPdMA8VY2BPG5Mywau3G2J7RQWAkwhRJiAH5VzMAViBGmwRDMwD",
  "key17": "3PwxCQKBPU4hoz2raTLn9EYUuubHiejNjWKa1yb8NQwzHiUG6piesLnL6ZWnE9oKXnxyLiNBsAREpFDbdXvFtb2A",
  "key18": "2jxLdyAphpTSZEa2k8wHWiNmAuSs47KAaduMAAJrWnJNQvXRha4yduhhqxj3zz79Lgk38DVssRmzvFwoRYUKg1pM",
  "key19": "3ZcfcoYJ9MQkcFXmyrRhbaL7YoVcD7XQS3LEfwZDi6jk4NrUJotYxZizAFzEgV77WP1RDobi3EjptzsrFH9m7YXZ",
  "key20": "3y1GcwGjMPPvj2C9g9FVtEQweMHvgejC9d6siM4Sh9DKecpRxh8XyVt62e2fzRCExTB4NdjFJgNqUrvhKr7UcJm",
  "key21": "3GNsEWRPBuPrQgDVJZLN9wKFeRkAmMxekAFuqgXPXU3dQQqb5d3bvzgkaB5tNqww48RgtV37tRqawdPg4MMdfjKb",
  "key22": "4dptqUYPLbhvxkE22GoENrCFiRKpwTuPzqTJR7Hh6KELF4edR1vYeU3amGfok5LYqnTWUaByZZfRdFUNnBeSBAUE",
  "key23": "4CQyB27jAJ8Cqj5KzCErD4GdZtdNcTGExb1ApQTkYGSUTcMu1feQU7wTmFma1E4i6tVsRUa8AYMNysjjC66BFXyh",
  "key24": "4UYMa2zVSbh2pchAJGDixnDK4MBGgryFyxNVAM4D1n3xdavbpDy7TB9QCLjJgPAqzBbgLfmGMmoLXGKrcsfoNbcY",
  "key25": "2NwkCEbVt95ZjkeMaYspQDdtBnVFtoSwKEzcTEfBDYNiq9JvhQVQYFq3ph5gxJkQ4NN3T5Mmr5iEw7fWMrZwGeiZ",
  "key26": "42GEWbfcmjH4qpdhgCdev6M5yK7i2ipVensRBkaF8tkqEiGNxmZLyiwZoLwMidaCqRai1RSfPPMMNLXdzPYSdjhR",
  "key27": "3ruRzvwjxfU59kX2Mbof1FsZTnJsMZL6RTS4wEhLuUyPwLjnixGdhCh2LFNytpHqpe5EWnikygKskgxpEbxbD5CW"
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
