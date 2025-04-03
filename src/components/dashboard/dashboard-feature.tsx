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
    "213xvsmah27SuCUukNSqMHzcvHqcWZ2baB24E4nqK8JgkiL1sRQ4c6DLo9RGjUNGKragcBkGNDbTneaJAvECtSEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56am4BTWMF9uysnbZWXViskj37zvc1ih6NwPFgRcTg7iY7HjPzh2Dzt9sv96epgrBRDFzk818Ar8Mc23ENpae5cP",
  "key1": "45xtkVArboc6hyiZzVCpJ6XWdXS6exfR5p38o75wmFTwH3RYqjLJJw1ZsPW6uixXyNKLps2nsHe1pJpRF8fD22V8",
  "key2": "5agzoyJc1rqcwbBu9xkVCXZbBx8y65n1kjEUnqsXL8RT9pWunBNG1hNPeR16NVMB6BxEvgiWNqCwpRSEF9uqWrg1",
  "key3": "3j45Ro8c23DwjMgDsQGtxx5dMM82UbuoiFfGKy5zmw88pgAEAWLvAUdVuQzNmz6gdNcppALCUtqw37hk36FzyuSS",
  "key4": "2ECkZEdXKkQRFjLb4mSP4jjFk1HMDopXxJ8BM15MM7tYMPiYui9hzX6RiLs65yfJTmbzFeBZY47Py69hhpgbtvRX",
  "key5": "53zqkmVbku3R6vzMSD2ysTVJhhKEg81PmpwW5BvuMaYZL3czTQ2aZQnR6pq9SkeNm6LugSDgTjUGseroHKcjRK2w",
  "key6": "4G42duvgrhXwo5iC8ALvwppvaeXezqRhCFoiS9Cyiuxai5VsofmMmjV7qm1YzJe5c6Zig3SGy3ppnSRdqKmKujjn",
  "key7": "4b8orwrr8sc335J4hx8NVEyeLketR1ERXxeVe3Ry58jkUMeyieUpMLuWkf5mcf6qrUnUrKPxHbVL9y761xPBePgh",
  "key8": "5KzEj3U57h7KapgL3DskEZFiwvABHkAtqjbxZQBs5mmMU4UP5RMN3L5Yor4wDGAov1ds6MP9SC3KfRp5zYMvKkB8",
  "key9": "3PntNPHMeaqZGrj5q8e6Ha354MNiNXWEgRFMAV8yAAbeFoe8vJkNEJJq62jD6p3YJeQAaXHCDpuK2WsfrNVXhRgr",
  "key10": "66oL4tx69cPZMwhy5FJzJCAm56CsayerDKQHLAXvmwp9DreLQ1bKZu4LV3eQEnamp9QJVZ2qZrieJExJ1GqdVjpC",
  "key11": "3R1qNskU6TLn51iwevgzLmVrRVBNbhPFn6PLXNKqsDpsoSiZk9DVSMwdFzgtaRxwyN41hnKGgremHx3ij4GW1wKd",
  "key12": "z9dUEEmeHCQ6J4aUJSxuPpdrVT3GzH4jTq6avgHyXBYSH43jvogMAFf9fYZosWJ1jsFzk37aaJ4Haa8gQwTAu2N",
  "key13": "4yGFLU5qkS6bU5uLE4HdJW2pGr34F617PfeJu4GivnySE5wC5sTEomCKFH8PUR8wFpRA5FTXA7JTf9qhTeYubpLr",
  "key14": "26ShaAjYj9hTw69pS71PAUVaCfMTQ5UAyEKUsdmYqs1PxH2YRQ2iuPR12vntcBhdPENa1fAXQsz12XAbEFJf8AXa",
  "key15": "dUbxaq7LFedhq6v14edNBu7TdeKuNqo6ukq5trsVzd9SypCJZ2oaJYNxr8hHNn8BacYpGVBCuo6iuwyFXuXrK5r",
  "key16": "47UvuDw72ovSqwqVCeWoC3tzMecHGbfdaZ8BCD3Sy4waZ1SF89FPLx7RjVq4r451MiK3F5XZrG1ShMvR3pGhMFNA",
  "key17": "5Pvdj4hAxXD2qYNF9fHx2DRBxiscRcToxy7bbHjZKwJ5CWPp4DEfrBMs4NyxttGFPueTi9sa2edwBbfGa3rj6AL3",
  "key18": "4RKmqGSnxMe8Ltg1MNgyCuP2NcXa56sbZgYen25vYuRR488h3QGdZ35gEbgiJpYCWb39tzo2spDSpUYvXxqPmaRP",
  "key19": "5Tdh4VimJKbubaN9227wY526WnT2qkp7Jz5XPcDApbaX5s76PLvAGxxaEtNTVYTLmEGzEMGsCV7NAxA7K5oyhsfY",
  "key20": "4QuPtXZkqtXFc1Skn6hqfXzyCmp3VpwaT8D4bzVR1aQYNUwm2RHB8P73nLcSbBQ6HvAWV5QDombU1d6FJHmYKzpL",
  "key21": "4mBLaDaUMQhforKtVebxivLEnFKcJnGRxbgvYBYnvo9z1JvoBRQxHkDMsz3JSwZNMQDJzCNVSX1BTqZdJsGxwxop",
  "key22": "4JyFMNfdLX5eDLJRnuRk8CFYd37uBHD5DZUc4Bsaxgx9UNkrhQ5eQ6Y4R8So9XcLKGEdWNHZDeAhXDgz1N2w3WbH",
  "key23": "4Y7xALjCpTYM7oLv3P9Lr1Zi2gwjCtbJ8FbsxhpJ4GbM5EJmG5SeqaZSLD8JKdza7L9otfufJeWP97Mytm445yym",
  "key24": "2r5zbXaSWgv7tKy2FJL9DH3QvRTrvHaeUjAT7AxsdHHh1ZJUcXvip8CdPZsXe2hSkybQcoyWxotGU49JzDeH7k2U",
  "key25": "SXSbm2SNBb8WWGBeMUx5wXS47vkRNAbWmr1yLVS7QFNVBLDbc3cwUKtWRkqXJwdryc5Lz7o1DzPKKwdUbfDASqR",
  "key26": "5vdXsfDUgmG6fWwwmaXaBhTGPf3bJB6tG5apNBdowFZms26ctvoT2LnMhgNWmJz5z3WpzJayvxEkFN1K1pLMh1BP",
  "key27": "4LZjTwYuUbc1JETviUoZpa3ZxcSUdW6fRz1JA5834WiH9PVdboA23mMUJgh6YwDV65ZJB31FWux5tpEjNfWCH5iE",
  "key28": "25TKTSYpoRmuVRPhEwminHiPKgCbYPF9oxqxrqnqbXcc5egan81FD9HxKec7aqtVYLbtC9KNUu4TrQvhPYsGjpdu",
  "key29": "39dcoecpJK8NoqryEdxznY89a6ZdSanJWCritfdntNsyzXAR1kWmEMhSrAwoYy7URHb2fXTcj4PMFkQw9WqmJ1F3",
  "key30": "4hfgyusd21x4bVhEbHasozbuLUR96AxyvAKX1yV782d1JBJKAbCCm9sVJwejC9ZQRggVacjempb5AGN2YUhk91ui",
  "key31": "3KKpsPY3D4oRhrwwvb5WR2iG9vUoYG5w5oE29xaEJtypbia41CsShPYtEvFWSbYomKLFR6mnshmqS5dc6N33BznD",
  "key32": "4HBWXCGdyWBLijpEUqDyd5ZYirb6UmFKtXfWeY8GmJ2vFLoT8DHzETbQY6wjjzCJmxsjV6LbbchsouzP8zWB3qa",
  "key33": "67PFhyKtb6VzuZ8D9fxFn7BethhywrZwzN967C7sy2MZPGuLMtEQaBbXevRVNgFaX5zHaS74T8pmoJfbiaaJEdeg",
  "key34": "4Zywv2zHpGjZwWHZmLuZKJtRsRxjcWnsjGyqz6UCcanXZxCGp4NhjzWQucuPfUbH78JxSUveeRLJShx5TkdKxdHj",
  "key35": "4NJBcidkfeV2tLjMoKxVvbZj3xriqpsPVCDCR2t1MgHwnTCSAVSJCRsekR5thef23CxMkb9qjp6UYXbyfkZ7jPzm",
  "key36": "43Vu4YGzK9YgfQYKaPFr4fv5iErpY5XeFjN4XA8bzku5ZLH5D71AJcfnfMi2o4eNUjiVzQLdzY9ofGm63D9xgPbk",
  "key37": "2j2UsGkGR7Ak39962aez9rV23zkwv2gULJYdo7dDC5jyugz7Z99JjxGJfi8FFdVMpjYxRJ4gU9e11NeSGXa5ypER",
  "key38": "9eeb4MxKVATCGxz5oQQshdoPVEpBNFxBGhEgbGjivzLJ88G9jxy3iTtxAbNeY9wUtxRjGfo1tZqXPoxTnEovTZC",
  "key39": "3pHjPKk47B8dEPMaAfsL5Yc93z8wX4RxFouc3bNxKbCuhvsvGh2coV41JjY8YrCWZV3L1bFqLM9wuUKWLEYJUhs2",
  "key40": "CpuxDYQhkmj4AVg222zewwpvB9PhaS3x3Xc9wtNy9xpA7mXjcatjxkyz8kmwmiqt4q2kK8zcipCdadiPuw6tdMV",
  "key41": "GDgHCrEXc5i1ZduGpAJ3ZfmLyC8AYiVZxYFRAC1sRyVgkfau1DMUDMMxkduEXsEHbeecQRHUN39uzaVu37jaUcb",
  "key42": "44Xcr4EVHZqXRNG6uTrvAbpEWs9Rudoaqv1NnCMBBL5L9vFRgJoEB3aM1gCMU9DAQVzrQ6xMV883EDrQhd2uiQqe"
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
