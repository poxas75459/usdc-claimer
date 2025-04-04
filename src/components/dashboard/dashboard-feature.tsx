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
    "4aYPsK4AFLpBZxkdnc1vCoC9x964QdNYxW1obzgmvTCRk5Y7P1xgMCfU251NXYQwqk4g96sLLrjd7wEt6JVyBci7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58vpBY8MMhy1cDTRkA52eb4vhxghmV2Ah1qKQQ43ufFZMtCu6a3L6aNB5rHfatTrqr7hqmnsBHVCL9w3XEs7GjYq",
  "key1": "4ezaytJ79zDd3z4Fk17YJ9kmiYJsZiXDBtV1cD7HBdzigqqk6xCVtqRPA139ECaVr2wQeuxbfA5sXWPhp2xopJxE",
  "key2": "3ozxeTatesKMthEy87MqzX4tohYAgHxfeSsQ2HzJKUL45ii8KStQbu83FCcwn8zRGRK2vWnDyVSZYvip5zhBG11Q",
  "key3": "4ibDVB1hZWYD9NrGRS44EUyittHuhmq8KSmKm69kvoENZfeW8zQRwPMgLZgQdP5JwC8U6m375w56zskX1sbbXEkH",
  "key4": "3B8TatZoMdw3RnKujSmywy5iq9p8fnndBTGxkMg6MHnKtXHfYgkwbuNQEQeR76TnW3G5uGnrFTN5T89vt7RMBcqS",
  "key5": "CS6AiNB45hYkyTRsAifGahmVS7n3ALNUYq82LSgo9ZnHn5rcYGG2m3Ltont4NzfbcKvhJ1fQwrDvAqqKBPm9yu3",
  "key6": "xcJ7QZfKTcXZG3UJo5AdDnSF6vPCjLun4yA1xqngw72VRYUxVERkUx1nNvLWUirrAc5u64rqfX6crnBj5RL3vTp",
  "key7": "NgyX1cyL2aRR67xBATnLjGRtvMwmXbDqbwr3UEPjetAHBCvkAG7dw6xi569fKbgMB5QpiJXGvJaHyW94DpA5XD6",
  "key8": "4WQHXV9jhyd1s6XnhfC1vMD6AQ6wW8uGYfL7uvLM7cAHWqdfb2WXMgG5xTo5fLXp8bMbCanA154heTcYTwuoq5WZ",
  "key9": "4F28oaNjQnBq2PkFQQTkkyRLHF2yhJwfXv9Xd55tkW946HHezB2ekYMDY6bYSTa7414P6hjJnPUncjh2djjvATxf",
  "key10": "55hkptQdF9Guw1WLPQ4tWgagpGFgXHrtVrdY5rWaqbTYaPqwhYgT9uhvZUFnAyyMZUfxEbUTLFGkPnoZ8nZ4M7zm",
  "key11": "3mL2S3AzZwzDkxfL2wvpQx2Lxi1SRG8ssmKv83N1vRV5EMTybPN9rSsfzNMqRd9vNY1qTm11sxAPLYoDMo68oqz2",
  "key12": "jjRXNoxrKqtphHq8zbY9doTeniJyxayrWtSUDA3NS7fMLjZ9fyZGpP7g8MhfeJmP1iR79aRK7gNGJuUeWXEvaFT",
  "key13": "33RwWxthk5J8Rq8tZr9yc7CjdsezqnDjbW9K6bPVSqnWjUp5CuVGq9NjjoQYQRmM3dSHC9jmq2Pzk1fK4YMMBw4Q",
  "key14": "2rpb5gxCgAcyEkPKpd1bdH4BeriiYePAMnujuEXheo5bxTKJsPaVGMfAfGXtDLnoJcfAXWiBzydonG6dgizm9Q6G",
  "key15": "szsMvhsy1LRPRS2WAFuPkE3NtbRhZ57QcbSTXFUaUEPmqUWp2SQ8yY9pSvqRQQz1nC1ZcV7vJqWtGVhEQk9GgMm",
  "key16": "33eSMXFA6suy2A6Dw9XhijZgK6iBR5SfmBx5LAGZYduarxKdVbAuUQboc4oTo72vS446ec2bTCr8LW8zANNnoxnZ",
  "key17": "3tFaAAE9o1awNYYXRTymt49PMKdtzsHoqaxBzmR12HZcewujRBTS6dgNRuxy1g9aWgBXZvX8tJPosnr54BbRZJFx",
  "key18": "5xboVxUw2X5gistE1XZmM7fYkd9jXu2WXtrLreoLprP2bUvr8GTp67tH8wJ1q4zLMx2JYn9ZczjXNbpRZGCqWZix",
  "key19": "2SPqMfocFGCeinU596tNfnuZX9peaD6gV5oGWXB9KBssGpCZ2h4rvYquhAk7h9w25weQV5GzMjmPs2UxqGGjX6Rv",
  "key20": "3DuMkEmRjHnKP24S5XQxwK3KeyieHhbq86RFpX9kY7RhiANyBobqnUNViaD2hxVQ3f271F3mUnyvRzMp3Wadu2sT",
  "key21": "3oAXAuXcCvzu3mAvMxFnU5e28cRMaECzUJopu7Jw33QRPoQoJAHLi5pGLhFvoxpJHrTqBQokb569eLCEpZfnWV9X",
  "key22": "3PtqTAy1oeeQY6Z5AbJCvnWcwUqEYnBCDpZG6Quy6qc9ueUx1kmYhdkQfph5TLugM7uqgYAASX84n5mNLwgpxwrn",
  "key23": "5WguHw3xvRFwmmt9YTsfiuWcrKbuvbUt8TZtsUejr5hWa9GVoQMJLHWEY2Eoz4xf9x4ojLoN5p1RTH6HHgtLSEuD",
  "key24": "4kBscT9hUemVz2mFZTZ4yxGdHGKY62KzpaM63QsVupXfXofHGycz4BNLHi9KQGZp6vkWR4sk74a2YyS2c3nDoR6c",
  "key25": "35t5mx2yb7m5iMooCZDtr9PUQur3VvFmpVDvREpHCnkiNP9GkdeR1mYQfqeRU61RhHZzLK5Sb583sfkVirhvEm1e",
  "key26": "5UgP4sdsvzrn6FdhvmD24j2mdjPVUruAxcGWNgduJD2RatZJ9UeTnHH2knCSJuPkA23h9Kwo8RH9EBhu9CdrqwqD",
  "key27": "3QMf26wckoQTGKuDMCE3rgzbJMwkherPXmkMEh3YSTDp7kWhwbaSx8KmRTFKZNNqUdHUC49wz94yv9JBg5guUx8Q",
  "key28": "52cmgHfhAV8oGdM6rRd8k5sREYrjNZEGexRsvtaheJbumUYDodZeFk9HAZRTNuQnZNgz9WwDJNNnwDGT5uLYPZKw",
  "key29": "4ypXEkBAWGe7wU4seQQS3yLkShJygudYu79gPNh6bxE2H88oKyZTNtv8PJeCPxmXAHiNMz8M7DRwJEKMXbuLgNAQ",
  "key30": "KhqcGxQT519zC9kiLMgZLjKpUmmEd9sbQN9rwiGG2fdwHWvgPbs3zCuTY9DXH4eLVexujsUgw7sYGRV5xp5pbrZ",
  "key31": "5HCeq7PxbPf95dfofTm2fhgNfU3fHaWZdLtL4ocLm1rRSjfEkfTWt7q72si1qTM4GwqGaEZWZSudvYEPeAVazwNm",
  "key32": "56mfeirABXKuUNT7UkGwxuqJXdUz7m8Fo9VZ8CuVLdkM6zqicibFoyXHP7uF3zopLKEyKQW6GvVzTmt7bsdWaHQo",
  "key33": "2rKN4qDnAtzon5TiznQDV5XSXViXDMH3aQrwycZnjPQ3cVrUr5vdgvvVGrstsdBjXRnHFon2YrS5hnzkYieEpt1k",
  "key34": "MshnhdMKPcy5AAWMjeQZZXaAmMmvqS1QfS3WRhVtaZQZRU1DyBqzf4ifEWgyFs9kmRY1vYWiHJ5Ba9DYSKQt2FE",
  "key35": "Ehbmo3cYQeukbGtAVxt8as4qvgoYPDjV3nBNhSr5cCtt5XiDMez6n6866zeuiaoiSkVG2DD8o1ZgN5YWJZrHgrY",
  "key36": "FiUbJsHaujooWWZwDebuJY7SfzKUxbseRxJehYBf5xF6U8fB3miydUN2WzdU8ZVaz3ndUuY2dkzw5MvR9gVVdP2",
  "key37": "3qk2snokqJNBkwnELjnKhAncBhb3oPtyEcWqKK2MS9ymWZDkkh4WqZxBcJLsEVUVEUiQQeijhhTE3fAz3RTCAN9Q",
  "key38": "o7AdjtQEr5W7ys9Rpcm4xg8AnqVNj8ZxfrwWqeusmdpi7Xt6JmMRSnxY6RzoU7MVLVAH2HrUkJc7tXCizQVtFaw",
  "key39": "3yF1KmriEe74vUXHTfDh9QMtFpBQyz25muWKzd6Y52RREbmRCc3J3qGz465eRLSbHsaJCG6LvaHkeuWfeLss59WB",
  "key40": "3yW7NmvPCZY6RBWcPxXKsmD7rHSwPS76aNi1vo7c5aCmQpv7oZ2DNKDrCEDHXCSdhu7C8qaNpAxuS9i3Sy16k6tE",
  "key41": "128o1ri5crCzWKeyH9GV8y4nzXsNFMSyKB5Zac62QMWbjyjHzLFir5qUfXpXCMF6FWJA8S8P84An9yHDL7r9QQfE",
  "key42": "4LVh7gjukbsW6oS4mBw4dYyuroYJ3emsJs6kshbJnjiL9wvV9XooQfAte46kvA2Y77r6Nsn5vPorKPWZJZCMHuB8",
  "key43": "3ud6hkoVqTSvshA8SEEbPfW6Kus99U9WjiqtjJRX5u5aJUU8Xgmca8XycvEtcRGfhvrt31WtyULC13zYzjbDGSgQ",
  "key44": "2z9N25TJWyG1RPTj64TxiSQb2FfEbsTqHxCS7jJ6LMvQUnPJiu6kmWC35V6826ymzcwrGNodyjVJiCT5wfZD7wvK",
  "key45": "2rW5z8reTCnNb6c98aiaGMEPqNHqhZ9VVG9zhNcNjiSf2GmpvXCRZaAFqJG19HnBEEm1iQZrcX4FbVTHL77bCQmY",
  "key46": "4QYHBdhKwZeneZnUw1N8imCiLynW75LttPgF5sNH1S4uwFWdsJww7KWSbLMEmVYSRvkNDbSGKxQBxaCnDCT6mojV",
  "key47": "3pM2npPQFz9hxgR2yeY8MamwJRPGEQhTs75YxzqgqztPaxpiexys5eFxq2nn8FXfz71q6zpwfobwANR8TgyvF9s2"
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
