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
    "2dWRsSbQGF9YViLXJ7v55CqbKBFSq2RqM1E7zQegmBQFupdCHo5tG9HcNPqq4rRKsLSz35aAZrmfQXgGJLNV15F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vivnSAFydqToCs7CY9hDsj788ZonasGxi3qMkX6LTd58T8VKpBSpugc5cwvZG8N7jbsLUDyNBQCuoz9kbaU3Gs",
  "key1": "Zq6GhTE8RjwnUoL14irJQ6Dr52DXh5acc7Tz9RQwYxGb2rZg2J8sJaeSmfMfUEgd7avH8sLQLtGKazkHBdRPbDq",
  "key2": "4tXtL5b99AD1etK1ZnAy2iHaFnZCN29GpXYoEmDMi1BJZCpJszujKe3otUBLR2zdVhogB6eTKXeNaFp9hWcQcG5R",
  "key3": "2g9zr3jnxvLRbWgrpvrWH6A5Eo45nheyV8wcfmojKTjbroofLynCY4SiRRzgu8ohEiceVesov1xteke7Rh7tEeJR",
  "key4": "3v8Rur34qkjMiSgKXuEPpfEJkucM1bjZXaqQkYYKpwojWtFUCfvPfFwY6zQH9NfY6HThBL9JvWdNx8UknDRszzL3",
  "key5": "2Fc6j9qppu5sQrch2tfKjdjZWc9Dp9QYXwRBn7ueM2qw8fqEAtSEGL3PRwV2S18KvXobNsrRJi5teqSCkkGwiVGp",
  "key6": "34oGe5xZzjNncRZd4hnuT2ADKDQ9XariC74zqV9EdVsBqzQ2EfiSEB68q8CgfdmV7xTtjBzUZypFn9JwvzfEnJJo",
  "key7": "4V4bpRZRWkBM3ZLMUNa2aeMRUf6jz5YMgTown2KXG9wG8dL3cBrP3vwcsVfswgTiPtNwVx4FASFwfMHESBrDbLGd",
  "key8": "59ViosHV4ShWpQve3tUh2U8MyMQ8VKD4Z8H2im597VgSfUzpMiwpTe3Y2dVR98ZemoVPi258sB4AWmdYmrTJU4Ge",
  "key9": "29Mtb33n4YATHjUeju2HumnM1JZhexEJWyXUiLgm3oT6YhVLY9Qa4m9pMjRD6PfReonHm3npFDPaPxUNFKsJzkbK",
  "key10": "22puKmJe2V9AgSJSDcrhfXvnpGHAwWTJ5BiL5fUBxkhLzPpFoshabksaMhN65Zhx4iX6kuDgkQBbR7WCYiyRwH2t",
  "key11": "28d63t9dMtVWAXwMsBpDzjbiCb6MWjHWVnb2D6zVZQbTiN1QziphdrK3NBTdaWej9HKvJTLRWfgojFBP3oCBZbiC",
  "key12": "4S7skaANEjLiUDgVPM8izS9oQAnLbYrAXAABKWPZbnwvc4JiLWeMBevzjuPcZENUjy9iLEBCgmP3bmoBEqmWguDL",
  "key13": "5nNnzUjRK1XPyuKwVccENKzx4eSwNZckjhFH15Q4Zyax9D75mvwwakPjDkbXHrCLoLHekXbp21n8kTaFxw3HwVx5",
  "key14": "27ZNmpqvBP67tEwwQY8CSpnHWP4GXdoDAoQChGbAyE2wxKZ84WRpNVmLfhAELRArViPqJk61mwQbJRmFxXyXGJQ4",
  "key15": "2miPNTaXvt2m5HARsBnqactsZhmWjVsM3QTVx2uQTbpqxAFmKq6gMrAehXXjyM1vWPWRBgkgiQNoko4ZURQzXv3T",
  "key16": "3xqMjzJgGh9Vb35QBCrosDCnW135E4vt16FP6bqnSgLAiJfeA9j84hHjWoxdryBpCBCjJpdSqbj7AaapR93wTR6j",
  "key17": "LobaNkNirDsqCBQxcXZoSzETMrCuFB8N1hJz9pHEGdFw7J7wt3GYM94bc2HRENkNBBR489t7zjpHHjwzHJVoyzs",
  "key18": "3D8owPbGWxtEDun5L9JfZqbeqjhqSzbfT2CJAXWoY6CLLKXwvNJ7zHLadrxs5A34SQUNotDuu5ME7BMziSzs1xd5",
  "key19": "3FbJ3kakomyBQS3SqfBnMRSmAN53xEouvfTKtRTDQUqVsRTeJmRaVz24atxWEPe7Udfwky3nfL93GrtHmux75z8K",
  "key20": "5BBtf9FHqdrTtkC43J76pi5Dp44Uq1Qb6ERTYzFWLLRmJetpfAcwXurv1Df1qP8UjbaB5fV2vW8XtVdc7djEP1XX",
  "key21": "5fJYe4yKWuz1W35BReg72sToLjwRHfG182wmz4V81rtwb3zLkzVmv16ehEAZXykJHjSbqd63NQg6WLjPpBFSkc2q",
  "key22": "4x81rczF1f6BHfKwqxWbuXdo9J4FR45zakLERPfzaRESb8Ak4oMLK9RJpod8UijH7onWSXyBmwt9PUZHK5Q72kWH",
  "key23": "5p8t3gdx4JEaJjirzkxW9htJ8uMUAhhadHz1EEH8gpnHvqCZKGKW3Pw5Aa4UF2qbQSmrgqn4oexcMMX4EGTxiUBQ",
  "key24": "2W5dLHhcUjDrY1Cp7DmiwFHhcRLDW3bb14rCBQaUVjGHzDE1XXJi6284sEBjjgZvNpSLjwoGSFdBbg8jjaoFYP4y",
  "key25": "212x5HkVFZLGWriDaZa2EixcaipnpBkDmZwqGs7Kwn8ZpNkrhramH3c7Thnn4aPpH7TmM4T3sYEYKrax9RLJBKsP",
  "key26": "61EQWmeVJncufsYmm62MuzyVeatMKbYqWvnU4aep3Hi2GvNCDbXpZ2bGtB41F3aa2SWegHppL2PbnurUBVi93R34",
  "key27": "2CaGP8PJLhLgRYngQTCi9BmKRgedKpRsWeAG74ZaCZvzJ8EbynvihLLYzoVVnfqVEeipP2wyExzNmFCtxUc1iJQs",
  "key28": "4N3gsjmF7pyqfTYaj1gwRsn2XSmc4ZqR9774eDYfYnASHgJF5qqC4HzPMQe4v6X81W8B7Fnka2U9vU3U953krNQv",
  "key29": "46Gz8iUfQ8jskgNAn3XGdquffrEMo8K8r2hxywd2JsNNVuv458nYWgCc5deBA7G6SgbYft5Qbgs5YY38RJAJEKux",
  "key30": "4q8GikxhmCRNgCaGpbcjxfoqxbUAQY2y53AKL3ZwjSzKyWTXEzLkkM2bK49j7ez6hUjbjyqjhDYhd1wiLBCvpnXd",
  "key31": "4cK2P9VaxAA6SKwEVyMXtEwood6pZhDzx1HYH7VVEDoSugoBwC9BVdWH9hUB7wCxYzMGS1QdRpHAkh1dDzoc1se6",
  "key32": "3TDh2ECberm3gwQiQtkfvcmFqQdeQBThSBRcFogTAxdeKAxu97a1gLnZQCmXAkViZXjZAuECEQnAuzoMqaFPj4dm",
  "key33": "59K4w2Hs7VRbR7pXdQiaTjQfrnHjAz1UUQbkdAwHMDPYaNqeybKbFcwW5Z6jMRkkvq9FaN4qa9dQVE2UHZryp6uX",
  "key34": "5UKyNfgnLuxWDUo6UvVhYCb7UEuNLGWN6jkfBGLZAyed5QKV9wF5dfdcSrZHpuLRBFd1YCiLhL5nvm5e6LZKtH8f",
  "key35": "bEM1oqB36j3y76xcc5YR14GaUKkowg9AxrUaDYV17Yk3nFYXhvtWtFoVy6QC7493ZGfzuHAnYQaPc9a546v9xVr",
  "key36": "63HmBdHP2AF2JMhMJX21A3EYxyuDWv1yfu3nFm6EATcV3s1Td1M2wBViNc5fDKjsk8xkto5uijUAyQab2YcAhJCY",
  "key37": "4ao6S9kGC16oxCHPMkZPPTEQPjXN22ZMeEmxGa2rU15BuYTR4DFXB9GrsbEfTrGpjEWh8Mx2RGcGDJRDmqxTEpDe",
  "key38": "34jMRgb31Uk5pzHxm4fJkB3fet8sHMh7DU2gsgtJ5Y3BQG158RHSvNz1eBLqzyrGJ67MtbgZJxAX49pQepwNH54h",
  "key39": "2xoFPECaaEjVFM7NPVvqjEBNqRsPmqWGYehhWcZE1tDZPjpdCkairsGAaqKmiymL4YL3u692KC5hiERyz1sEnLWU"
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
