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
    "4HEhGB9rB1PbqVfBrqRtuG3HtnhKnwDAd3heDC7biynXkku9358CDwzfpopnYxkzgVvbTtbGprDj6hWVWyrFbs1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e7BCoDE1jn1oEZRLPJMG8m1ut1XAajcdshkCXfepM9gbrN5WEdMYHcZLj9MhFrEwo6FKzw6TwrA7gahBj3huHNn",
  "key1": "2KqGA93ZfMB4b4eX9s9oUHxUKocbYGmzQCnSD39ZChjiqiKsc6o56q4fU5K3BMrUPH8pSAA54ifMvXdBUhvkHeak",
  "key2": "5soLUbkjNB7DkqcVL6VM6PdJBjVR6EVTCG6fe42iceGRncphXYY8owpN6EJafXMsLo2W4b55b7183Bsu5dan9scm",
  "key3": "2KXDpr5Vy55gdQat893rNKYkM6A21dVAahHqFL5cN39tfJfEdXtstozS62STid1mRmcT8BXSQ9RKQdoxE4MJfEpg",
  "key4": "6422hoNXsCTyVyj4DkiwfGdhpYnwNahCiqBpYdbRMtNWsAkcbwNR8ewFth2vBAj7VyXZAxGFYvLFhWcWtLh3jkea",
  "key5": "4xH2qZQmBGoqo7Zmg72ZUWbqoQvynMpDf5qJ2WpYro4dU4EmqGPQWBPsoZX5SCfhTjwJogqNedXrj3cbcijVjmEw",
  "key6": "5ggVvxx9MdoLmr2EqpfECumGyqukmZ5P1quD82WKPesGDnzs3d3bw57z4QHbDqMaaE8Hbs2hfK9b3o145QC1b27D",
  "key7": "47h93CRoRpddXgCBXoDQpa21Hmkt4DZaMg5PaapqhSFHcGaoLKhn5WsJ4RAeQ3D1r5CDSedpCMW48H8rzyv8zvBj",
  "key8": "23RqTpXs5VTm9toZUxpHwbmFdS1dAc4ENbwz3dGpBHA5bCqJBRHgLbLA7r1kt4ErWDArATWRPf8PZPXqJ6D5DR1L",
  "key9": "3eN3XqTD6nHDowep1jw8zNxqVHx8wMiGWaVTBpfmH3gv7GTWRkBEdk22qTDeLyx6bFQJP8TCgA2dJyVMY7V1qCHQ",
  "key10": "27CDLsGDzfwLo83711yekfE1LiLBnKryMQ8wNKYes9f2zdLLmCqBsmJT6sKHJkaNj4mLVSZiZGTXtNpohxD7MXky",
  "key11": "RZh5kncUgHHrrmebS23a4MNhwa4dGxsVCNxvPU3o8MHfCSPkqydapZbLrzF9Tr1tU5U37Jy2jHiezAzMmw65KjQ",
  "key12": "3dEPQ1VSqWCx3Y4ZnviDfR7KthTTuPySZHoF7UvQ6Q5g6y1yH5Hho1LNiSha9G1amAqccsRMgeLDFgA9WuSFAhNm",
  "key13": "2u16d7QD6hJm3342q3u7dkztuXnzXHvVyHW6h2Fz25RLXgR3vgbhjix8osWgRHi5i7CbaYca1ishkqfrcbNcm8PZ",
  "key14": "fcfSvm1yxTQ8D3qiFARykVBaPVMfH12KqfQ1uAdpNJRFruhM5bS9Yv616L8FUJnWXXHpCgNBnUPodijfeXCXySK",
  "key15": "4Dz1x1tHmqwnLGd5VWyoXX3JsGtGPpxtLoBk7QdHXg1rGzx7LDKfCd25LqbWU88mmR6nPNqnwTnPn6EpU2YxyC7W",
  "key16": "56CRxZj3iKPSSfR2nxpF5YnhwKpwF9Ddf4gmfFE9fecf87U1eAPwCyqBSxfDL3MGvsg3xkrJLwcznnpCoowvQb3g",
  "key17": "38QsKyUKLLcRs31StD7KuQka2BKdK533uNJYYQcqkz5xpQEGLujahDwtD6jX4Yi3jJ8aaJLEKiLzz9G9we4pd31K",
  "key18": "BemCCgy8FLqaWsq3NNVetBMvo4p9QgrAwewNZWkZWuY6F9TjsCaEAEqF5TeZCG3rYPJ1tY893WKezEh3A6aXbjn",
  "key19": "2Qjn1uq7FH4rNtV1qJmZ93UuMPQVtr7cUPvJntY4DNdJoY95k5tc4vAxYt9Bcu1y3hXFm1AxkrcJmhngSm4Hmgtr",
  "key20": "2aZdtwsPkkEjr7wGNyj8sF1BybAix9S1ZE6rdwwW9ti1NfpZ6TEfcwNbFDp6oVRAef1tcTTGgqmihvnpQ1wbKeJ2",
  "key21": "2cBcz2pbKc1hXCPwi6vC4EQwmLpsKfL7upFsxZ87GTSXc5NGfUTv4uUwBoPraro5BrAvzXWKvV7PkLCxQaJxz8rk",
  "key22": "n3ArVuYYBa4Ug6tNU1CP1WPHstJtjnUYeowuoYr8cJy84jGjuAoL57VySNPLAS5CqTSQvFU9cGNHbkXN7BCHhGg",
  "key23": "CJoVgPrXCLvrbN3bPNtSb1YPTLSDvJTemaHv5Y35z2KtftQUu3Z9Dxz5hu1nBAh7fWPDDEMGV4hW4ucWzGCvTYg",
  "key24": "5CCjd63ZoV4CFx2pj1eQkcbiNjngkyRaGVQSrUDMcEn4svJNEVPHWfkM2beEH4dk9mMoHrbvhFn7e8kfE8SrkqGj",
  "key25": "UutwEcJwDcNDBjqHrCigvrRXMN72rMGGGYG8zn3LgrqxgM3dypzpr3QBDkkYxHgW4J7hwtV8UbYo73GyZCLtcU5",
  "key26": "2WWPPZY6Whr7uWtFBsxUBVHgzJXUcVQEfKWr2i2sfhvvuoHQZFn88ZjLc5wGMFZJ4JXHztBWXJGyEP4PQDhJeSXE",
  "key27": "3hMK6CgxbXwTwCNpBQMAa1PEJrCMpck6PanD3sXWGAWg5PazJ2LGFSMAM34UUDDV6mibcASKVgfxQ2E1DQjW2Mdo",
  "key28": "463BitX6XWuT88JoV4cdGmVXRuf9WwKKJnpCT4vJS9JbFdS3ggZxioeLmcy1RSf887Tdr2xaGPwPCr2ojZDo968c",
  "key29": "2xgXv6ju3E6BRrUTGLzXJUgWD4rDiAXqb362C57B2nBWYGZzdiKCKSxgkQeDigcT9CCNMr5cPYjqxWPCE5xkL6xH",
  "key30": "5eSKaAU4WxoAjT6aMkLgLmMXP6Ju9fsM1E2mHDVb8BAndju6fwHFzCENmfeyQVau4FigfNqJKrc1apPaubQmoZee",
  "key31": "5cA5dqiavQgfun9aoVYGzV7qzbB5XdekrCPB5P2ezzBh1E4XWhjAiuBzNCctdoHronGewtYt9QHNS3rFtMV7gqqE",
  "key32": "3Rqxjp1yMzWDrgvXpsodvnXT3Uv7nXZCFyJr1evSCzvc8Cwh34nUzHabedEXuovgWFQu76XbCQAQPf1cjFbbebyg",
  "key33": "3wkjmAEb8aukbAwJiwsayF7UAgwJj9Gg7ThdMjGWFF6xfjN2Jo9c53LtFnueA4xfDDE4pcKHBrL4xJ11Cz2Buf7W",
  "key34": "4sGLCUK7mi7oH3eUQvaymeaBc4HRrtXhD98n5utP5LEYrAc86waEu36FncknVdb2KiTnGN5hNnXk2Ezv2cXwBiPm",
  "key35": "3Z2Yjoc6QajRoAGz8cWySYMvjARrZZftfhy9oTsaYzHihp9E4Po86hKFdTTV4nQUyMuP4uiwxF9xg42zUA22AdTh",
  "key36": "5NbrHEmhZcMVXWt1z4hZsfhPhP9VcwzKFaKhDSMWEaR2bapBHzqcdb61CmaYjmPhTcdBH4Ekg1FLC1fuvrCxgogv",
  "key37": "2xk3hv9p59GuPFKQA3uMoMn2pqupuZCYKi3JdUqxVpxfgC7JxwQZU3jt3v3EbWn8PntbSVdqMYYeyRLbuJCfH572"
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
