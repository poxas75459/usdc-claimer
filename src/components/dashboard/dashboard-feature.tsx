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
    "2ijZs9SFbJdM3uwCqKGi2SorwcpPoiDqMms4DMUj2KeqY2yXcBaXjr9CmxLNAkGNW1LyY8ocFugMHQSVH6dhrY9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67FKkQ4gXWw2QPYuwgVv5zx4o32S9k7VxyuaGcxPDsUrbSLR6AEk8YZaoRMeRWu3obfhfw6zntb4pcKQ4133QCBP",
  "key1": "2pnvefdYUzujF1e4PRxxDvAnnEirByNVcLDeaQnY8o5epjD37rkrPwgwNqm6Jmh13TD8tPJ44SzTx9DXkwaFxn5L",
  "key2": "28BWNTtJGMuTHS1X6CnHaFPWCxgUCbN3ijFEiPbfrtg1754iYpHKE17xNH31cHwxKPCLN8zuGen6Ppa1mHty1H6G",
  "key3": "4xbGo83ZgTmTBaE3wYaRRUt9jLC6qTQ7RMF62Z8zsKmRTMPS2Nyba2CGuRykSuaDj8kc3vKsmoRTcEFCiuUcL8yU",
  "key4": "2ZUwLsr5nUqRFXXSHd7yaqqeBGcm286Bdm92g2cCT5D9rd9UgnpqFMM3RPg2yuoqRFGk1mLe526nQuHUGnSSmjGe",
  "key5": "2eEfw7iym8rrU2EaoLodcmFReiw6z2WWuN8RfH366GmmwdhZSDdp7jiMFwvXiQU7uvVAcsUSCzbhSnXBcSiVCg95",
  "key6": "5mbXsHtbCqNAoMvnUWq91Qvw6EAtcxHNot6Po38VWtEzixUoTEGc4L7iMPuAUVz6AMGPr2C7rmftVyS69fJfLmVz",
  "key7": "LgnM6XvE98izkg5LKYiGiA3gVpC9UUVWuQpyLanRbBdwfJyruU9ACuvjjWqDFo8QWJUhRmiVbpFrrAU9atMzh9H",
  "key8": "nWN697xb5gEMvEJHLvTDGapeD58T5Q7SLrAN6E87nKNXBQRz9WVhQ7zvRfiA5dS4Pc1jgmRDXBjboX916szzuz9",
  "key9": "4wTW4VFE4Af6XrqYHvuy9qym4ae2NhwBArTRjsxKSZh7pP3niAsTdx9HwuS1f21HsXfWkrbWhZFVschqssz88xb2",
  "key10": "2Ecg9zKttynowDwvJjEgr23c4g7bPkNKgLnpsJWX93yndKXN4PRzZG9NpxM1WSMmqUiFJZmdeVX2x55YWKYS83K6",
  "key11": "4EX24o1MJfR9bPYWC6uP7rdFNykiFhvjpG8fm65d4WAY5tQWXe4ZqPhuGhmYQ7CXWeVGAm7gK47WgBXhjeKBh3jU",
  "key12": "YiNpqtna7RtbaQoxbVpmLUNFdsMwxrM4eX8eFGy5z9bf3jpM58FxpEp1URrHhvUdbMHwBUebbz536b1yQj6zdWP",
  "key13": "bPekcRLo6kSy6B9Vh3kCugwNkjaC2FU3ayfQT2NrqGYEPMWdLrpjEJHGRVdCgBHyCveoUMSnMhcnMrRB6iSaaeX",
  "key14": "KWfCm1BVYwcSbKD5enp9Qm2sit3Lj5sysNuPxyym6rtbaLZdS4sXZYF6rVAQcQ15y5hFc2eDTeK7ditswE2WTWW",
  "key15": "3e634mK5UhKzBgaDYsDt69wJBSk56ggbgxspZt5KE55AGiH8Cb79DDQhc5YzvbV9UR5TpbbPgWtiFBHAPY7VkDhm",
  "key16": "355wwbVqob1uBxrLtHgZ5KViRb98SZUYkbmhU99GdA5UTsJ4mNNn2JMTKwqPTPWEhzkLn7awiyDBmwfNY5LxupUn",
  "key17": "2umfDkxoaxmLAVDRVMb8x8WRGb8AmxEPaVBtTnECPRaWLHhNyHyXod2NSk19r57VkZSFGkAg47xQCtUmXyXR8H5A",
  "key18": "1wSTxNsSc42FPjd1UWTTWhqdrKe8fzssrJBjbaui5ddYARf8n2ZBgXAUjvuqt5gCmanvET4M8SpL2WNSGSoQwe4",
  "key19": "4rn2GNa3Rq8cHb7CzTU8BsATnggWKSGX57Uz6kRHY9j6so4CaG1G9ugE1cTpTTNEXF27WFw6o5yh4EXVJscvBEhw",
  "key20": "594MnoPy6M6mfdcr3YhKKn5j6SQ2bwB3gmZgj12AaDXptfyWJvXp3aNzCT8V6uSpMWHqhWgj2EjYvpXj79wqEnVz",
  "key21": "T3AgdrTcqRUEWm47YPVu6yWDKcZdtKhQpm65yz3NkitEHzFvvRSHa4xSDcfGWb64votobo71aHcoYB1ucSTazhB",
  "key22": "5FCuTEK2skdAdr1K6DwBuc1Sjb5Qeo14NRoXYzXvdgBaZoyY4iWCakmbNcBGkZSxXWAeGvNY2wqPKXWnZEuvakow",
  "key23": "4pHxDdxFqAkHhDnFEH14ti51c19rjXzZpNHz194kuqfRVDeqz8YTK4go22o2jVGssnBWyGU7i77W3yKe8XcLNWVR",
  "key24": "2SHVVfn9MnRd8RmNUmVRKfay3U9jAFxsaSorKN5JPDdMtap1RBwfc7FTqcd1XU9cZUt3gRaAYRWFvFoS4dvjUnAV",
  "key25": "5rS4T6YHKbuUiBrmgBvgqEDtP6oeG8UwsgTVuUbcGPqjQztGwbKi2iKM8ywsnvesvCjt5HJ8P774EKhYmgsKNFc9",
  "key26": "3wbxPZqw18jbRWmcc1kTiZKTrbFFuV4yMd23knvwQK5gmyWARXqL86evCfsuZ23qiWzNNgYjP41TVKig5orEpLSn",
  "key27": "4ndse89gHfFYQAtpVgzpkQaVrZRdS9aTa1zWasEmyLQJ6v8PwnPd1RUoiLFidGdaUPYJUShQxxJRmWu8h8qXwhPY",
  "key28": "5Q75ZRroAL4YV8mm83XrkKgJF37rauHH4jwWUArfDTzFNDzVhW1yKrkdwHCXSKPcPpKK4Js7fS1zLfKAiFBw1fFn",
  "key29": "48GfMEA38UgRit9vwHxBKNEhpJs8uoFJSbHqFbq6uuuicSxcFaGfQ1bioDBYwdz3nZ97HwunAJxqXJfbG8qYF5MW",
  "key30": "61u7ALU4XT9yMTx4TpTfkEadKrxkeXSobg9bz6YsXHRKXuKhYKksR2e5ZwSazAxmYVz4BtzyDcDuf214DXDn3Ne6",
  "key31": "JHWbP4WwYR6adbo9oUP6qyPKZsH6PoF6qNkBk2UXobox3Ys3FvEXhpNEvdrafS2RLCSkPywKSriHfnvonkXsPsh",
  "key32": "5xCMwmAaDrbb5Hr6Kx1bxDBKrcqniA75j1iMbzN3Fut7akNdrPpRu7UUDRWCZzQzLVwMMTWaCE1hkitoVfqdUFyj",
  "key33": "zrRpauGnSh1r1dbHVkmMWhmwAWQ9NUKBiHxaPhv51jdPX8d8CZ6rkq7BKHUTaa1vBxq9tYZPytk1t1RQYoiDGKi",
  "key34": "8gdiTc3uLGuKRRdVuuzoqUBde1jkkfmpjy4PvH3JwQZDmLMPHDQXQm5yGwmwEJfPivpas4jaWVwLs4WBdi1j4az",
  "key35": "5d2hudfZz2SCnqY3jbyz9TV4ccw5dwPYVKUEqWNWTaCXxT6bFBM3vpNKEyiPEXXp1zCkBu9N1sJ7s8qucrimYBz8",
  "key36": "3V5U71v9dhJz6fHgJot8JmddZiA8aT7NnKMemE3ADCxJgiZgAdN5fynd1nZeBkG1zJnareivmtxjShUL67dtXxrp",
  "key37": "4iATi8M38j23omkUzrPNuxwcBVMYCPEyHnWBiRG7gGKJ4ZZPcjGuqm8yj83RL6VJoKnD1rX3Mm4CBVMuQFuWPyio",
  "key38": "Uas4YRLnFuUJzWULd6Tjz4VqngbiCQBzr1msW737TiTmLv7hPQkjEqACvkW7dBDgBUkeWcwkafrrPw57fg2hKXx",
  "key39": "FLVCJ4hGCtwkbFjTLHfiiEb4qLzkiT2iQMt6F7W66nGZMHyoP8egRNYEuJuemYNe7zwVACJLYyCHCmDXdq3a5WS",
  "key40": "4NNJSTqLsY6AJsh4FersF7iro5A1bErgXBNfoGPJSqMsCunjVJqGSw5wPBg4PNzw7ntvUzn9GrbK8fWSSuDdTxPt",
  "key41": "2d9143q2a1P5Cwp7cdKfsrTeVgc287FzGGxnComhidvMy22kmysBLen3jaSu2Tp4FUCVm2HTZjt7p5iWEUL9NFiz",
  "key42": "NDaGRrW1axKL5WJ6Mm6Tefc9KHyfrzmHXz6JgmGMZEeNBfMnguLgwyFbGaDvtpgQrPgrALGEJ2vwFUWSQmpwDcd",
  "key43": "3gSox4Abj2Bd1TJHGWUrF8gtsEuKdCT2wGvr3vArDvePkKvZ4bn1Tjhhnrnr8CDPZdbbeZ8sRDYMe1f37gk7R3qJ",
  "key44": "613YsRb7NS5k1vMd1zu86qqacjQfhhguYjgBc8oRhbpA9x7oVVKEN3oxF4rXqFzFoaK8S39yoQNXZ6krrtEj5JxJ"
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
