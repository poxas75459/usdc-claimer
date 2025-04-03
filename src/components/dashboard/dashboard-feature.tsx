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
    "5ZwWjA63wY842WSWStXNbVD7NqEnanmKQNyVGBdwWHeovyiVZqGeFqduxZjqKpfXaryVEGQktE6P6bUd9y9uMzfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rs9bbp3iutjeMsA5k3BWPNDpGAnYmCC2q9HTf61WQM68JgDyddM7TgoErgbs4V5cAN8E3sfXUuE8qnDFwWz1j39",
  "key1": "5eVAV3CEFV9mgNfZ1spuLSEP1zT9JJdjpoyX2r5mxmFVbP7VxGmXZSu9WkdJkgLzpLVq6nRGCvwfUnDvT9Ad2hK2",
  "key2": "5fRKoFh6U5XDyZpfv5b8CzkWurmVn8EDxzTsfzZyzhtrE6p4jebY1843kweybwZou11zBhMjvm4xayCsVxDJ9fUm",
  "key3": "5SakGaHrfXsdRXZuZXbwvA1QiNs1cYvmF2HbjXp7vASVwu8LMrAfpt6HEuTSZp5BDA9AzWqMSgmGNamvmhXrTwKU",
  "key4": "4YhRTHLg4sPE86ngo4aiqhX2hsav1geUHSgaAU6E1iZ3hZYdVxdtvkRmTECBnXGj3nWxSymwd1qkpovG9FVdrn9e",
  "key5": "4TgjD2GFDwRwqKmqNLvP4KvSuPN5qR8fd9NFXmUGCDbsBv78PgaopeADhqM5GAGWK59VzVg8AJajwjarhgBHNSt6",
  "key6": "36JF6KWkqXzybnzSAonDEeijE5Ktiq5dPqHUHiJxCfuXhyvT4DXUxmPprVi7cAN5BQeMzvTHyy6bXAY42d2zDDMT",
  "key7": "pUrNWdnLULmJK4MyNdBxkMpgyNBN8BkfopNBmG8FJg1FaHovdZy8bTD7u5mH91MtUU2j97biVyZcRRqXsjFAPDS",
  "key8": "3bo1SrB3C526AcmpxpgEFnXiQ6pQUyGtEAYorrb5mnSCgubrubrA2c6wUtcGpXKEuRHLaFDVk3EjMvQQaZw4hsuC",
  "key9": "5jR54WDQahE4bgykb8cGhyCEMhsXJ88KLxEct4DtD6bDCNk4cSvcbVkiLCdrk4gvtLe2xp4nitrY9EVCQZpwjtbz",
  "key10": "4qUyNmyNKs6CNjhJcJBvVyaukXQDtGdidic7KYeAhtSaWyugGgqUadgBpYuCjLqeWY6akaekoYub6Hq6wNgACBsj",
  "key11": "2uAXGuUKqn1wMeqSNC9h9MPbBhAqCnLrBmPTUzgYbxK7rc9mTfse2C25P7oDxUj7A9eV7x3uAhHGvTvjvSQRLr9c",
  "key12": "hc9scKA72KE1qHFrxGDd1tiixinMxx53kQgYpWDWL4WzLFK3hRFWQu3up6qLDAtqZ4hwmwuHDa8ZrNaXi1hLJDL",
  "key13": "4iVsomsAaZFsr945X5sJzdJuniwUpi51BEe4xT7XDp1YvGke5z4E7BhsZbkSoerJ8wwcy7UvcXpiF1ULmX1FRUyo",
  "key14": "4cCjPcJHdx8h6SKvSK7zwrnW7CPdw75Svdoe74N1sjYXzttgQ5cVDHwkKPobQUN5icfqgdzFGoX7jmiyATEi9bTi",
  "key15": "2bb4W9JJp7VSARPrnvzYzYDfDfgEStkwvtUtBHBoqxAtjirxgb64KjoYSWmJ1r3KoYNzSncxVFkP8S4JgBHarE6S",
  "key16": "5e4zHrttvPk41mhdrwzwzCdMxGjHJBpyidNDWLfeuW1gErQDcRSsxUYgXgTe4yUcgvg15YcFpqnMCbR9EaoEGuEU",
  "key17": "5ApAALpT1zbVUxZ4p1dmbQqRkfxY6Df1pMWFWGE7gdZKkP5C4aFG8MMoJAY1t3A3yc79vyaR4tid9r8gnLDvHci4",
  "key18": "3stnArEraCyk14tbzTKHXUXW1pUkUJ5v6MBYfj3W48AfR7Pb4bvE63WkDaTPRkoCiRxDM5d7PAjxVKoGaAX6e3ws",
  "key19": "3spEcHGJKp9gYakTDtYKSBYoQKngUZvYGs6wdKmFXeYqJSoTicc6n9jtzxMx5j5ns3wCK2G5ZKd3vp6y3NvYWrpQ",
  "key20": "63RqWuP4CHro7sWVPbN7LdJsLALgj8fNpqKmsWztWEnrYzNgSJuGtrSbeNdpC8g5y12pZEFTvXNZpGHfeV7rS5oD",
  "key21": "4p6F1KQfztSFkALrSgRyKSEDG7GZ2uz1EhJq84RQ9rtvKEVJELcnAB1MbjwNNeM7Fy4V6mJnUVtStAPkaswee31k",
  "key22": "5ueLV4ApXLzivEt99tK1Fws8qfLrzycRXu8R3yQkXnMoxWuFFbdpwnuNdN4jMxi1viDWPfxS2kEFvnCqQAVw3Ksv",
  "key23": "47APiYzCEzKCTi7rf1pgJZGU1xzPjpXyWZwEGGzvqUtAYnTfDKmZiFo6rswARsrW8Rxyzy9n7vpzTFxQToEZx8da",
  "key24": "xdCQSJ1b6tD18Q2AEPyLbtnNZQfKdF1kznojLBPad3yZcuLxMyuQmagL3gr8wiiAAhNxV9UfJaFQsivZnCXYpj9",
  "key25": "2KBA7TPYR3zGtZGPuTFiWQctn1nBpSxatDDpWN8EYk3fYR57aA7694TNxP3iLDFxU8V1varDV55zfHno7rujGX7a",
  "key26": "4CmMCgdDggBGGXvLeC5EEzBUujo3v62M38MBkw3AEAtA9zZyKriuDmaKMzB91mis2dkoAMVGohfdQta7aSJguuqC",
  "key27": "4PfwwhXapPxiPjvAJDtW7xemquKviATptiBbs4QjRzaFfxz5siByUWpe8cTB4AYwKHwVbpkxPqBEAupY7r1JWHBH"
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
