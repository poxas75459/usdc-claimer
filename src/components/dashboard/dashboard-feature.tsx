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
    "3QD7pu1vVKowwpYFm1ZaBiCBR89cjbBAKVs8rRSKoeeD8eGTegttnfats9ti8HSmdCnCr1PyLPT6U7PmbD9zD1jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bgfv26aRZe7xd9xSswwyyVPW8HQ9Rk5cXC97nm7JrRSzgUJZpX9dRmPGG2LhRccKCekXiqQpf4Y4emA8NrcgTSE",
  "key1": "2UinAjwz86qfKbromVLjKCFYHnvwy8uQH8n34QFPAQbPwpKLYCKZ6VE8AwZeEprBPcPTtwgKMcTy63DgwN4ZWKJM",
  "key2": "3njUbmP6LzEXizyuz8gyWYKicAavWs1UkyjQTXuDF9DpnCkUCZ9A6rrxEqQufPri3EJDCbuBDyYcAtooeJs3mQsW",
  "key3": "5zCYzn2M9f9exwKUF3KhoeXQKJLymUsCAeSXGDbDodKmcTTvtTBHiHZHt3eprJARXaD4iqEYXPM2B3GLU2hLAzpf",
  "key4": "23ZJCtBiebuGSen8v1brjbAHTYG4WXUHZaahvS2Bq9FNhu5Luck5BpgnQN1Cm2jngt5BuVHnDLDPzLctNixhhB2c",
  "key5": "Ld5ZEYN4Rd2dfbTC66gsZAsBrtNG9aHjNSfa1a3L1kZpxvdCC5x4Tiicjk4bW8uu5QXZknNRPQ3ktWhKbx9nDyG",
  "key6": "3uXPTZUSZVVAky76npTHK5HhBMtEkNJ9Xf88SxV2vbmwNkkUbe8AzhwWBeuWNJzoT1LLdAo5H9iyqxP6KN6Mn1nG",
  "key7": "2c3jfv1yu4XQ2MrJoXjLaM8FE4bMhQMjKk1HiVKGssVo59aNJdtVdDxrXhzKBMwPM85QWMnhhcgrJxFbUMUTYkGJ",
  "key8": "2urT6XRR2a6yoiPjjYtn7eF8WMgNHaDHVQrE2R6czYkDtUvRrKuuUfyvfbMEac3yQ5MZqWTgVLxoGhuYq2FGGoKW",
  "key9": "6458tLU2PHnLwGRonJHPoGGGzfLA4iSfpJZyMQCC7ze2LF12RtdCNSr1jEd75eX2MkzzjA8UFcnsRVqAAfdryBvY",
  "key10": "2X9kRKeQb43oiBjjW9Vx1M72man8z7n6Jws275bFgY63rd444uZXUhfEmFPzuFwNRA5q2gszu41cYQeMaDjLKuCM",
  "key11": "2U9aL5cH4o4beCbtLrQmUPGbGXQnWZd5YoVxFxr4wG8PHPAouweGQT29x1JDPJXJ21MyKNbRmfHppvDShp3RMUta",
  "key12": "4BZE8HuGkNsta5USNzg4W9uhyHMAEKwjGRH1K32D4yFCHoykaYekj4XXzzr89n3qcvw72yiCtiZTmFuBQ28eP5Td",
  "key13": "qqQ6NaAs3F7Ai87FaDzBqd7oUw8VcpvyNjeEtJW1LTt4hT4wFn54iwb7oNfKQ2fTr4TjEeoxhQ4vDQuM5QQRRLT",
  "key14": "3iUNfXASBqYKZf4gjDTAc2dfCJ83mvU1oCJnFHwoByWBv2qeW6MXUo1YWF1jVBCLrAQYCyP6qx17KrbBsoSv871t",
  "key15": "3bwhGDPLeuLGYY84KiA7sqGrRKd6UpGi4AehcaLUE3GgWEmoV572QbHxNKuA5L326K9X1dACmFuhKuoxUs22U3xM",
  "key16": "637m5w6whJa66SDQDRNFbuqxz4ooJc4jphHttdGFdyVegij6pEgtXmYuofSAM1nTJ23ZDfu9JZ8GHZVZrx5PUwLn",
  "key17": "54qukMNNPtAqn7ggNdLwcrGkgeGDZTFhYc4GCmcbf2fy6ch6GasqnJQ7F5dPFrDy4zA1gR5Vtxxx5FoYK7Tu8aa2",
  "key18": "2vUzotSJMQm3TsKfJfgKTCi4GMkq6UvETRTC3LhqHZA1ZmyDX1FVEoqHjVUV7zCgZsZSpm76M5iiyPaajZNpaDxH",
  "key19": "5tnzNfCvvqVZ5eYcqDHiVmaEgD5Vfe7H5YEbmVamVtrr1E7zmL1Hd8dznVDDSgdKRRosMxjs6zRkmnTFDVujVZJ1",
  "key20": "4rWiL92Ty1b5aCoMeYm8U7Ty9ePrdgeZasFA8uf4mb9ft3c2kLXioRDbGFK1hDecPftqhm3cpaVZTz6WHE2Mvdm3",
  "key21": "ofMQQ4KmYDBYMNKWpSQjFtZZ1igmDW7gcHzXpJBjizTyodpd5WR9jwdgkdy15Cphrd5MJuHVpsU6x8zuTR1rLUv",
  "key22": "5dUZRoFjHy1KBnn6Q1VCjbbS211kurMPdJziw5q66YKxdbxVTrrrFf8Cgzhkv8PngS5pYbcx2f5hq18cskg3YhLw",
  "key23": "9s6wX6VbRTRyzbvDyG5robrwxosmniGkL1JozW6U79h1XUKdb1YgGVC2M7JCR9qHpdB8nCLYFaKP2DihdtFocw7",
  "key24": "kLN3MPDzkiwE9QNEviXx8Sy91ZQ3JqCD5A3xkRSdGnQ6SbKh5tm9BDSZw6n6C4k3WFoygoqmK37nBfmjnd8afjS",
  "key25": "2wEc4UGeECYknRhr2ExSn3pXfkL1HCNjBfoPSe68xEXTbaiay6LdjTZDALoWv6735jpThdYtRjTfDZ7h1osQTbqx",
  "key26": "2sUPofsa2Zo2bv8WaM75e31gSR1dpNPLu48YSkuz8cAq4YU13Sh4mUvSLfEULYKmvpueeuNiNr8YCBqQv6eej2CB",
  "key27": "3poyc4oT1eWpqKgSKknuNYtoCrJBo8NzCqFoxxoVnpsmojtCWL9pbDyWB38sPT14Uzqi8t92b94ScJ517t4WHDRq",
  "key28": "3MBr91pj6oV7HcyuQDbQUDMCevhcQ2tmbCKXMV5kUTKqRbQawkY1UJcYiqNQ5omtgrworq1NZ1N1c4bEnMKNHhy5"
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
