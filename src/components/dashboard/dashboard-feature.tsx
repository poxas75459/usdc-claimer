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
    "2ei4egoWMp2pLkwJsG1uVQBKJWHTznNiy4uCzeGxZReTk5MB7Kcv771cdux7xQwMZnzR2gpymdXn3C9CYPDhZXrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "337JqrzbPiDYRvmy4i9PPxa3yiAsRVSJyts7nzU28jLbDf2NSkzcGQvtbP4uwuo5Wuh2Yd8S5t1RT7KWkQzP9bCa",
  "key1": "5eTCRAe9ibwqKYxz6sBnieVrZU2N4HzgTscbtVeKZhazDBRvvfJG7Y8RcGdM9ivnuH47mRTt8ZP8KwSwR1rp7jBY",
  "key2": "3pU6EfnFtxsVPdD23akQk4SNeJjk4DNqn7ompw6rXbXranLnnCBFQT4ik91txhseJVavQFM5RrEPsxvYufmqQqQ9",
  "key3": "64UCFJadf3qVaSrhZZrbXXmb21NuePYiMtcZcGi5C9qHBYnq9FSFUi1V67buXFpxCxqX5oeNxBdfBQ8MimzZmj1y",
  "key4": "42TecPbmrFkeGS4ifTEwRixrgsGcaYTCBLR9dfDNmkKkPudHeAUzXxqHcdkp6PbseBXiscrkfGfvCZqWjyMRYYnR",
  "key5": "2Waazd3gFx5JtZQ4zRjugDod2XcbyoXc6Ni5sg26m3Q4furEjsY1YMFkd6JCxTfYRTjSXkowSDiVMA5UMCt3EwqH",
  "key6": "2KanDEznVfsNcvGmDpsZ3kzkaXxJKDrsKpg6NgszTMcTfxfmRQhPGfoAbwSaGtyBqhmCHCwthMm5SwbGn1zTGaRM",
  "key7": "H22UBQ7aCG9eCqkFQiTJ7dnGvCZiRwhxFGDxBW4onRmh3oWsKTXy4PGycAwtTWe9syvxMc3pnMbYYCh5fJixHpv",
  "key8": "4zo9VSh54gpQpAHbpqijigcwCrGDtHQpF5isUySN5P8gfV3biB64CtLshJhb7UPLk9oCjmiHLbsookTvrGu91rBC",
  "key9": "5Aq3YEgmSezTmTarRwtnENEhHxbCnCjmE5meE8u9AhvDQfxfiE8JxYZ2nVamQru8FHz4xttCJGnTWxaRVLkxrrFY",
  "key10": "qu4eC7R3H7tG3b16XjhMJnqZ7DzrS4uj1U9ihQimcjb9erNZESt6RwmDHMaL1NX5ozqqgXeLxEPDv6L7CPkufiE",
  "key11": "3Lb8NmSeYCmugCiz554akB1RQXktYC471bnyYYBNyom9t5LG29RouawJNAukXhHR16VqtVP5NkZakRbLGf4XAwH6",
  "key12": "5arD5hHSveP7Kfzy3PGAQhQvKnhTTf96CyfTe54qmxm4C6VJePgDoGPwpXCLqis9MiSSPL1rFjbA9b7H9nYgxNAE",
  "key13": "pj1KhZfTVSmdut7f4gTCL4iG5gTBR8GXEWtqDT5Q8BQnAVd8P2pQbpXzKgxq1zmG2D3Bk7WyawrFtQadQsj4BpD",
  "key14": "R4cp8bbZKMN5KTc2H77XbBuHBijEDtKyyAKZSmagTAv2K7SBVkvRo4MLxsu2hBgtpx1uzD5VgMLpQec525mH9rv",
  "key15": "5idbHTif7EsMEmgLu8R1wWJChFmbAJDABW1PQiiZsu22W424GX5RwF9hbuMiBbEKESZbrpZo4KqStwZsJoeEVbUg",
  "key16": "3bV6wcSe6hcKc7DZj6daxjEcMWT7jRJKaELkq8utKJWpBi7ydqUb659AAxJ5n8Ak4Es9HMejmR3aStQjYKLv4XB4",
  "key17": "2W5rEt4YEeiRABdHTdrHBYgZuTnSGvbY1vCyGMWKMJk1MAnbj11qYjv7mCwpL8DSQ93zi7rStG4qkTn9miTP2FHd",
  "key18": "61hNFKSvsF74KUdf5kqTCErAfVWtvB1A4TKda4bCoS3RRSTeRwpdjccZSAkxKEw8vE6mHPZFB3e9138PBzoZE1Hs",
  "key19": "5mHEvpGcazwWKhZJb3QzLp9xZVAJiYfpjqXJtCeauEPpRQXxvVW4DMf2rLm5mdBTjNYUKjVdKF6DqGxPwQ1rLrnq",
  "key20": "bd3Ba37Mptb777PwKetkZXghzrSfzD5RDp22qDevQBb4EMwF5LoKwfMwvChq7i6qePEb8JDtV8Xs66WqajHYyvB",
  "key21": "2GweGS7z6s6DmtkMz42Fx6RwpoPZk2dK4DJNgaocTSK6K2wTu77uKjyNd3LENJzVWnkYtdYsDpxq1sv9DmyRwMYk",
  "key22": "39PBGY9T5L5FxVnvEjjXEhpCaUvojsQGUEUbBCMcnTq6Wk4oovuV47JZs38gGycoprkkeckKfxckfQQ382xFyivE",
  "key23": "48snUopDT5TUv7AQEpic8LBre8p1vAHRPeMwaBDG3q2dSZ68HUDekNQvUhZqyqYn32AFTcRpUMuSPfQ9mP7QSZtC",
  "key24": "2xQcLstJLBjJhs38Ue7t6n5xd34p5aMeBzwfByUPyvHYpEYsAusS4aP9GUFBuPgj1YsmMYkCs9536pQVoxbPs8Nu",
  "key25": "4oMcCaC2XxJo8kf9wAux5q91Jyk1Fupza1mv2BLKkY76qdT9s5Y33bEQ6UEvsJT9ZeGBXrALKf7rePC8YKgMiTeG",
  "key26": "4fGGi4WVMXzt2FiimAXKTtGSAF5nYSy1xVeNc7zMpD6XN1XY29qPPWKHuuv1DeZmEeHJoKLK5v5L3rNKCBMdn3yQ",
  "key27": "3woaNnCtCWDV69PJv3d6etexMb2TerCk86JpNAHzhwWGzNUfCxY27Pp35zEoVt1udQ3Ue9csGaQFGBw7dJURxPNv",
  "key28": "baYbL889LHHywvSNaEECngAMQ5FYcsE2CoE9shm88mzkUmmqNDYN5dFezjwmqaNJkaTuNNqZKwYnCFMps1tfQLJ",
  "key29": "5cQT7XmbdJbRHqz216CwTTRMsY3Ew3gqwRhSujPtzp8BnuYqX8FEijvmVE6SsVnyot5Ntj1TJ2FtFng6qxnzjhud",
  "key30": "4GcZjdqDgcZ27FUTnR7fjVfSVQvzCiz1b3UFBLz18tL3Jkh1KptaonNnVZQCGJrg9Cra74gBtLSMty6bGkjh4QUh",
  "key31": "3JdjvwoWTamfB9xe74d4MxUd5cP417baxkTupk9DBcP8zqjLvs7ZCo81Cb5wKH33pDdYxLUu8RZXHF9B7KxeELcJ",
  "key32": "5dqkvUxQsxNiK1g6H1q4vCGY5LJ3qJmuJomRxQjFwkZCUSSx8YF7UA4AcmfnwLafXCd7AHoS8oi97jk9B8aAYoEg",
  "key33": "5AP5fvWC36J11cVvZow2NrGWoXR57kzedEMShmeKkwBPvn8BapAPnF9i6CHHLDCrhbf9UNExTQ9fkEGv1wQEhvaK",
  "key34": "5rreZLDEvbgfPAQV43Wt7LBegSK6vVVPPLpZGMnkxNHwQVZPTeDcjiGoRjajbMkdZ2wAD72LwHMGFZvoZncDMd8A",
  "key35": "3YcpUfUu2mEmKdRzmQHjiaFj4jv8rp1atvNW4nXDJ76WHGNvv757VkYHJ5QWg982NJgmYwV7T7ck3JckG6JoaeU",
  "key36": "NEKLdPWxjWd9S8UMWVvDfGzvWNh5uv97iC9L7QxaAB5yXFLGW5PvmLBF3ud7MSaHf9XU4KM8DSipu6Lz9r22Aq2",
  "key37": "iF14AHGkWTPHS5bzKMavuztTu1BKrc6ptj5vdkHptEbUzuo7rLohvYBz26HgDFFenxmm12tvDupHtACPTfvnsaY",
  "key38": "57Q8YFFj5ny3PNDaTvK8PEHSDRscQ6e91PhwMdXoNh1b7oor9YuqKGKr97jFQa71paDvzbFbA4aL7b8skLdMwH6V",
  "key39": "2ES8JxSLqg7yH1SUR2z3FzFWt1eDJoC8tNuv3hPfAVnnbW25shP3HUBywnEegQZah5rLyHy6czMSVeiQZw5NnhfK",
  "key40": "5Xi3k76FA2154gAsnnofAmnR4pKLJaMRTk3bzzbMRd5DdSar3bWwZx1D22DwX5VQMk436SqUmA2GzQCLVNsMXSii",
  "key41": "4kWFTc1JjJFeF5nE8JPduchfU5oSb4J977WmBNCh68ngfYVuXH3NhoBqaqjb9gobAjkYcubWAdLvXthR2hfQJG22",
  "key42": "5hyvo6ZoM3E71p74yasg4qXYVsjrEtkPGNqj7mAZkvKvtrD1UP8zXy3Xz1NVwbL9k778U3T9yb9v7VTALYPT7db2",
  "key43": "24S3mGd44NVk3tpTb1HPH8RgS9y5jTQgUgmqbGDyYUKBHDhpRWEXSQVs5nzxfigE7u7y9VzJobNUJtaPhXFz2GTv",
  "key44": "2sdsp5tUoHQSeVRLrAkhzr3kRHU5Uijgskd6XHHhvQQescRWhvnme9BeyKwdxHq8DNRd8UpjQFaL1vgAiotz3d22",
  "key45": "3oeAHhsasXyYSfQ1Vm1ufDvaQGEoZqqR98PqURG63PvaJ9osidm3PfGVBo6WpQtRB7GBb27WMjW6wShzXpQQ7ibR",
  "key46": "4VyfyoBtJwujV2hjangiwNNH2EEjPkrEx7AqNHQyp84yGqLmy4QJdGdvprx4ipGAGWDHxq9pt6DbP4iJLCWZoYNq",
  "key47": "f9cbQPS1qHpAwDAjh8weSrEVHtX55LbG6p127M23bFvfd8Fx4A82huDxEXq2EwZuAXamtodae3sZUM5Wsnak3NW"
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
