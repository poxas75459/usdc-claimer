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
    "2v4fA2usUWYtpxaMTYsD6RjuGAkuwQRyvxyY1c56qSC9CVYHBVumPH1UnYmqq4PL8vD9YVTiaKCtWXKwuie87ucJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z3TgiK5qaTSDBK9qyXNxdV9t7aezTzTaSyMgmRjK4YZsM9kzsTXub6nkvrRymmTJ5PaDEAC8EofJK2EcPMJaBJ5",
  "key1": "8mMWz4qKLYztgb57cGDMzzn8YDktGAEbxrqH4QoYwJVsdQ4TR7q6uCeH7hMEeCGffJpckQ5pQWQWKs6HthRYwaP",
  "key2": "47D4ZQjAdsVWNyUbVkWemrQBSCxCULcnoapHnPXAPP6JT5Reiwp8XQG9KUfpp4RgfSSe6F6MZQ6tEY8pQAe3CT18",
  "key3": "3ytkSWvCKoDxFX2P8Ad4PiTgwMxGEXCCAjyvSp7HSXWS4nmDMUjimXjVyDMRCkfhFhgxuhbuQP1eA6QcSkQu3NYw",
  "key4": "3UWRVQ8Xob1UwsCAemdYkmASBtTDyQdfxrQmUHi6mNvp2Vvh2htqnZbb86zpwKJ6QuFqEhJ7ZCrLUSXVTd7PB3T1",
  "key5": "5tZGao4hAYsLdGQSAhCZUSwkDdCkKiBopxBXk4PF9By77qF8jbcnCgE7i617PxwTE588VjDkawZUpwHRd3RxTXFU",
  "key6": "5GKZ4epP2LsCrEVwY5DTAVC6V1zthFLq1Y9jFfy5t3goTkNxN8mFDexMJwbyACtveH2bThVCeH8MveJjpyiwt4Jp",
  "key7": "5tiJtyEXLwyxTZtnJyCpLPFkmRTd7K86GJzTKd9cMVWnvntpAcUme7aFzYqqTY8oKnxY19LPgqV2jMCTrhWe67YF",
  "key8": "4PDxaXSJVMdH8HjV7BjLVBjmThnXdr99PahQSKtjtSBP9mAUd5ZqR3qigmFrotMcHyvJ2J8nD4cvU9MXEPbzHcdQ",
  "key9": "5BZRZgAYhAYWJvJriN6m6uHV82jn2jfTfAbm13LfyXsDoMevM3fnsjufxrFvRek1G3xffUSG2TpY1rijSfbwzw4V",
  "key10": "4fvA8xW8LktTkbfhxCy8YJrwwGeZiFTnBFGrjcpj6KSyn26QydHwMTznLC1EKfVNtANbPUThjtH2n5UjzXjzimgQ",
  "key11": "eS5EXMML1VKJv8S9P5r2bsjdJXXj2zR4jKfFEPRy67TaR6FDaeN2EKE7GHxQMiuvxarGh1UzSPdZJsMEW2chJSG",
  "key12": "d3CMkZMwizcYszYvgkKenTodWTY2pM8TAuLnr39FeD8s1GnXfhzmnfewjYQfxHBwNPZFeXZ6KdrNgkQJbE4u4ej",
  "key13": "4XnC3bNshr95BVHP8w8CadTajCoHWsL1Umfka3LKSGm1QXUV4y4m85peByc9rJz4iA8jdCNKj8UER9mv5qJiiAeS",
  "key14": "GLdBXfbLXdLrcqfB5r428YsexyVpWcMoYc3N1w8jVCsvb1HGS4cD6cexpUB2pLMLQ55xRcrBun3GLYM38qNXnSM",
  "key15": "65V8djd73zW3HxmFPtVE7NcfrsueBM5VTeG2jvEEJfbJH7CBmBQTt1rnAE2s9Nx1xTwh5ydqQDXS8nz9DmuyRqf9",
  "key16": "51mYo6Hcn1Vm1F9MdzbWkfEgCuMzzmx28HMRZwHBYLkZVWE1SZkQxXnVbuLDCQgL6t1gTug1fpJvuk5isAtTU2uK",
  "key17": "58h58LZ1SK2keRxemNuEjyeCozYFkQxRLBj3GYbE651McEUr3GLCp3uwK6mrLv1fGsHjGhkkibCb41mRavr9nsQv",
  "key18": "4J8oiuhHdGPFFwwrjvkd4Hd2SFWqa6YA5mUc2crtsWhFa5dHmhuzrEzodjxF8SkjKkSNritfvS6idA1uaiScuuqF",
  "key19": "4e4iSY9PeeN8bcUeAWyGE3Zi5Pqkacw3Mzw1UHLvsrcM3agjaDvFx38XP3JNDbHkJrNR6se3pxezQjM4ciFgmqcN",
  "key20": "5X91EHY8KvnNLkh8wuXWMXg5oXAtQfahRqVzUx2v5zksX9yekyRJqfZaJEeRbruKxzSVc4v8W7Qn8uBAMHajy1Kh",
  "key21": "5xALbaZAGqZG77w9gGnwhGxMziSZAwPZ37PpfQBXMUZHWpr4HkCT9ZjsnJnNRwQkubEZkQrfCtKgSEEV6JbYGg7Z",
  "key22": "3Pc1ctodRKmmYt6qmDjZU7wSRo8V4R9FKTu7AwZ5ms9uTVaNccxvRY3egCA1zzDdyP7pobrfU5abJRK5cn1AdvVy",
  "key23": "3V8xzhS7VYmNypQr936GumKZJ4eNQ8JZAVvyijjzqRVD2X9B4qeqgZk5wv5kx3wekmJmxTk31Qi7JyB2RELSVRCP",
  "key24": "2gZcqB7YMkHtdKY2ZyA9kjgChqb5AmTkbmDTdPWN88X7kCtuWeL7E57twccgMzcpEAWw86GK1ZBG8SBmGYpq4Jik",
  "key25": "3oZjrwPdW2TRsKLwSWXBDsVCYvqcxaJgPbyp18VcpxfJn23H6PK1mZbQAMN35PaWAXSRVbvpza5utBifZkJjwmcG",
  "key26": "2Rkcx2J78NhAAnDbkMu6HXsF6WeDYEAAAuAaSLggv24sPin28gPqPGLuTEdqogP5tFS4uStGwvkJHXgDAkGq56UR",
  "key27": "2RVB52rn8m5QqWJshhinDSppXPsymWpnff2rWUE3sY6JLD6Mvb5fhpeCYrqSQmakrj2G889GGf1qDKEZHHKrTkv4",
  "key28": "3rtnNcDRrLEN9xSvXZBMWUaxhsEXMwDCqcuN1es5K6RorPQY7qLPfJxwtMLFoQ2witkSitK9AczK7vFiL7jNCNeB",
  "key29": "SVifjzLRyMJ9XVz5BWQcP7awCsE2jCPUZHBxrucQDTgXc7bW5bGK858Eb3NS2TSX5yVLWuJev2HVR8NpRpCB53w",
  "key30": "2LLuXApiqfZojdqNB5EChuUWaft438zMvHB412wdRxQuFrVGTHDLFVMwFUPnbZzukLiekrBGtUHzBRDPqs9e6grR",
  "key31": "45kVjNDYvgRnnL6tgczKh1RvLNYVYRN1jhDUQmfj4focpczyoLpk4zNNCuDhkAkLvakmr4b4LHu7synyiJo7mHp6",
  "key32": "5e6Rw8hsoe4ZD2YHotLWLmQ7GAhgEsSU8Bmb8DdyZEsXte4xfcqWkPco9T7DQX9uPuswAiPYYYRksANtXvF4Cyai",
  "key33": "4cA5yiAfApBJohQJJh8a3SW4jhfscEhJkwZBuh2Jdt7KGYQ5NereGiHfMpefkKxEQ3DdD6SGEDxhrDhfjS6mbGYZ",
  "key34": "2sCZ3WCkikZDGyTiBT2pHjgLtbbE4Jchj1UdhjfSpgVfyziQfotroQ59beB2ou1ftAEgcWLGbVDxLqMYBk7W4J8C",
  "key35": "451MJqXjVJ4TGRwjBvbuW4Z4TZPoErZNK5VaMiuqz6zhSRCB3nLmMGXDCwZMRVkd3PJKWhJMtPqBGUDwK4s9uLTQ",
  "key36": "2py6wWbazUgtiKgirUBQfDyx2z5vVXUeQ8hgFoBrJgn8Y52Vw7sXnHHDCTtskPrn9PtdKpym78TJMMammUJai7m8",
  "key37": "4LPuRxJv94wheNYELFnJhvhCQkU1CxiqKb9geksyjTRS1q8WSwzmS2HBPMf37oMnoBKDLGYRuxB6xn3wy49k4CaE",
  "key38": "5VG7GV1i8xZr4NiRbS9ZwtUv19m5rsbiGpnYWkwKFL5QJJBydiuZbxWRRpYeLJHkXKuoHHPxTXFoqULvdhbLnAUM",
  "key39": "5jFAJ1C7Kha5dWD249ANruekjdjw9UUF8faJ62CdSniqBExjqqZZwgvPa9yTb2NFz9rfcfgufVdH9fmCrw2EtbU3",
  "key40": "4ct7ts8sfccohHsCzuKjrbikufTqKv6XyMkc6fbSofum3Wb7zMkDE7EQdxTGLpptXW2hrhLw2GXLjkMyrQLziwTt",
  "key41": "3mhXJJhjoKstksqVbJdNxq2GQWz2Vzr65G9Rmrj2Yids1SceCP72XZ1VLQ2PxP6YheZbTJ3pTbEzZZvPjXuTzVxQ",
  "key42": "32TgPA2zRuoqZJPwYnwssnDaBfnX5tZqoGjG1wN6V5FjUZLR4h75ePcC7GLbTPvLN5R81YV4UHaW8gi6xnX1BhpA",
  "key43": "HDr4keR7utnMrxxiGZytszAhpp7ScGAZYQzFpdqDfX2GoQYLH5eEJN9RBCv47vXBxqN6hgxt85EV86estKdChTq",
  "key44": "4spJm1M7KRQc4oGhMdzYNsxCpb6nJdLztNRM3sXpySQDgerscd1XwTh6C46WNwAXipVC4i42x1abU2gshSUDHhtq",
  "key45": "2HZTdW6xSwv9c64wqCRj8tgroJYc4qNQDkpk4AXhBjxTQyEZZdziQopfY7rAD8PKbxrVZMstXuAsBNr9V64pG9fU",
  "key46": "SHqh8osNJLWFpht7Ys75fwUpyPC7hhbSXiMvL2mFtXGYdvARdXTBn57RcPfBkjtSvedMtDzDhFeL2z3rqBzq6xK",
  "key47": "3eRCGTKuzsv1WnNy4XxUgSBTAurbnZsMkFa7Ry3trbvJVcbEP64nYDM268TVeqtKaE6WMF6bq1VZdHyKd3Eit6jz"
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
