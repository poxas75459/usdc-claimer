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
    "f5aerYrbC3uzQ6NrdbXert4d9dP1qZfoCfyV1Covj21yCTRVUKv9WtY1H7cU7JwokDX77pjVmw3wXCXF1M3jSvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Mi8H8WGmpjthEMFXit71fsE8Cw4QjrCJsY3mzh9sjBM3CFkxM1QNmf1rTok8iRN9DnhHnuP6LsykNdjSd2TSNsb",
  "key1": "5LvVsXBKxf71PWHQt5L2whdWUzGFYt3y8AxGWSBDzhPu2KToVwztSLTXVUY1tfQ52d9EinzcpLoLCAq6Fy9Xzn6x",
  "key2": "fxG8YDZPWVfxXSYew2jF3FF1axEzeqhXycAN9DBtrfndxUCeYq6wbsC8SWMZGEREg2FHqM2G6LdCyruRxRrnLW1",
  "key3": "21QTj9yoZvk7TD3Zh6dgLBbUH3ktYjNu7bJ6LKRJn69rTPtWCbczcMjcc5EiajHxGzJtvr2aZaE2GQAWfbrUoLuL",
  "key4": "43gnGSvjyo4antoMoqk7WGvUKWrSwMXEfx4y96iPgFkSpUH45Xfvw4gvVJhyN8nQPumNsPVrZAq9h5UzNAa6N7di",
  "key5": "3jyEryTnDRbvFeGuy6ZkpSa9MuQJA9NAwZ1D1UeoaVD5T3vs8kRkQUwaoN4wcAFkw3EPwCLMXnLKhcj5HJvYJyfq",
  "key6": "3BHB6GqE4oUXyuauD6CXFupo8zEHJp4SxMeGvPSobkwRuRCG8NK2yTsz9BokWeYmrPocsd4uKYbbRH4rMxQPCBJX",
  "key7": "4nuL6YvxQuR9wFDwzpP56tMGVe1WXwyYmH9tJ9wjkCDXnd7QMmyEXAcS6fnB4VFoouF9BQ8Zih61Ru3rGaLuge75",
  "key8": "51qmeYmcXmiHC5Acr4CZHHp1vAkweLFFNDDWo4D3DMAJusjd4ptfZAtvXfHopPSQvRaCtm66wfksBUT7DHjULQ2Z",
  "key9": "3sgY8CAP4jhQVsrxLkvqnnJyg8JgwgnZxXeDWoPXYRMm2NGEnvj7A3MgjMqMQbuhTNG3GTi5rfkTkxqRyWhALyWs",
  "key10": "2SAeuEG43YV5UGQwP9S7zx31GQmtuxcQ7gXJB4sEUaR9PQGbmTVAquwEmFKELhFgpA3gsN7KXV9Mc8w7cvZD9Hjb",
  "key11": "5A3U9oqdhhuXVfKwWpqTDKH1zAmLPXNZNui1pGjS9TNFiPqvQVPicfBNY6JtY8Np5KVgP4gAYsdhdSUGXSUh3vZv",
  "key12": "4QEeo6rr7qFLDwTQGqvtiNNuqK4a3tvceTdmynf8hK4KJbFKcbaEmGFJa531DZy6fdFqjcBLiTveP6tnuQxTvs8H",
  "key13": "JHeotHKfZCHF41oEgtcRFDEUHvqS7mbaREwDWvNiGg3A4LnUKEt5XgHMzX9Ejzwp9kYPfa3kQWQ6jCPy1CdcZzz",
  "key14": "2sj1vNugKV15sQBV3GTwSYdXX1MndfrkaWPcBJRJjFJFjF95ztUGTV4V11gC3NSu8Fi7nHY86hhPxAA7q1ZciaKc",
  "key15": "5NkPYCY2ZqRwRVwvMmCutcpJH9gQZpAfdD2gGGwnvbW6H8uccDvK44bwZwY36ZL3Q1aNvEJwPeepqZGU9AAZ2iS",
  "key16": "FpKr8zPaZmDxxSvyva2nYM2yxuTgsNf1QQLNUp3X71FVsJxb1SfFoSaxyhhK7gprpNzN9UWpzJYobZ21yLwtK7j",
  "key17": "X5R4cPpP9PFRTX5jb2QAs9eC4AQbwFeemRKLuDYGMQaoqdw6AeT8nSes1qmeAhYdiqfxKvRJgWLTYaV7hjkQidZ",
  "key18": "4Jzzi8Sk2fsaeJvLMqgQvqXZ6nTm3SEXqFX9CpQVL3oHbZJVYtEk3u7HbQtfEdZW89j5LCE9sUTKLbq219ua7eZS",
  "key19": "4CotCMUYh9CcgmeRfqb7gEMB8YeGqMrpESEQMoydyascx8jbb8fuRfB6nvQhwxdrC2WGndRRWwtB8VNtxGEFy4Kh",
  "key20": "4bMnKDrqizvH23Yvp2vW8brgjzG7wLVGVwwa4o6cppibBdKBwsdWQAtB2Fd5onuBdixMoZWsRkdNKE7XjYNAzfhx",
  "key21": "54bvZLpb8j3Ga9h22uGjLHXyNDd4nzvVM4Hvz9i7XUj7jGg4781196oDsXzfmYUUrt9pfKiWcKY9QMtkBmojhDGK",
  "key22": "5HLNHxaRehPorgEmQmqfdwr6qj7v5bySqfkc4HtrnazHpF94MYuENHWC8996JSd6WU59DBsX5rFp3fYt4n3RVZeY",
  "key23": "3dcukQ5pFqQqBqf44M1vWZJewP9xXkCUqNHc9ZQHWQ7ZxJxQSE4WR39NSTWaNWF82Ghegk2oKTBEdUp9Qed39VQa",
  "key24": "4dDfp8hyNkJNve935991XCMAL2H7VxYvYvvGjzK6TGJ1DUTsLhnhC2KpfM156wuYhku96YNV4YDFKZEsXwHFMMRm",
  "key25": "4dT5tegFpHCskEubTwcnTYjy6gtsj6Gj1LyPZi21V65Sk8yJSxpydTBeuWESzbq8jTS8f5zMrgVUtcacn9BGEDdD",
  "key26": "4ExZxdfN2vQYQETPXNoNBQa6A9ycebHZdkb8VczZdkD73ocptHZB4vhoNoB4RoL5TJpgcQbWVeSxAksbE9n2g4eA",
  "key27": "7Rz9fV68y4CmBg2yoJAfrvWtMqJVJfqT1SviDwXJdNw5pvvKJ9seUdjQtpsdW1MeWahjU39Mw1kqjYm943N2ftZ",
  "key28": "4BQSJdoMq3HkR8jTiaKzd9fMexti2hUr4NmXWVtVGTFPXRogm6eeMDZrggQpobMpY79FnnGTeL6KKr2HBKjbuMQE",
  "key29": "5ZfDSAvmWrsho87bMM4T2Tq6xkPKZHunyMKYYNBwwHMhvhhqqbeKEmFNKFyDTxsQgACCSpV4NH5yVDe6xCNCsx2E",
  "key30": "328LQb2bggeuz3WHwYnc4yai4ojeuxXZv9mcEU5n9ZQVZ7YmX3zNX1GXyVMXmH6vKvWpEkDQGidfH3eGtQV5eH5m",
  "key31": "42Y5WQxahmzKtfzQfPeeoMnBpsrm5XD7bfukL87H9DESkMdHa9GNqZTKmpR1wVnYHYNRSKP3DNqdhudis8XFYiVy",
  "key32": "3cykAymfVs78G3FTvDY6i12n8nwVYqF4rr4BuKhixtX1rN1UGqPeGJaVmccEtqHZEBDmpiJ72wKnSco3ByJMcWQn",
  "key33": "4ywNYpapLGctbbD1LLSqCyiyxhyKoCsNhnaEKcxLDMLqUZVztHfZtznMZuGwbFF9mJbcLC4vjdvY5PmaCQ3p2Z5c",
  "key34": "zE6fDNukrjHBvbQZMTgTGGCzFRY8zymfdWd5mn9B8GkphFaDWWnGZGhALkueyKzQDHLPzzDXp91egp5dn4kkBXm",
  "key35": "28HP8oasYW89a26cRXHqzEFV1iqCanjwZJpCHHVd49QQeUR3ATJ5zt8R6XqdTa27v8VtVj7s8mrdyns8vbHknhkM"
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
