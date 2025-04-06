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
    "4VMcdXxTXNgzRSFAwM9svznHXJ6mqLjDMJhXcFqeQYnaqcTCjUFXZgEU7B4tBL9son8nmAqzgkCTgzqyEiFERqbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mNrzwCxjdPAxAZB9A3vvctXTQa3sgoVPtJaviF6xra8P9nWzUBe61zy4yFghuKtdJeuBEHVD3Ujfvq658di9wBg",
  "key1": "2bqtTV6KFMSoWoRyb4G8du1JtyYaT89sfaUAD7WsizQtZ3fm8N9FbmQnAStEAQHDq2v7BEcNA5AEBoLWwWUy25hv",
  "key2": "2F3B9bprwm6seZtUsv86rGy5ZerEP73dAZtdJJHBgDJDEPdyrUtp13A6WcRh4dtBfhZVmxUwbHVZYCgMmtkhq5cx",
  "key3": "5hjzz4XVSoVi8vBwyWBut9jFoUbG2r3FNV12oCwiZxC2ZwPVe2czVYSrEaCSPtu1QXGsqN1dVdCfvkYKyP596516",
  "key4": "2fPLGanzLEkpzF9aT4EJMfmAZ884GE6qieQ7sNpM5xcgK6m91XZYchHJDm9zuVkdkWPvtSs9h6Vyf1VcGKJz9Fdq",
  "key5": "2rn6WWRewPbxLqkjnGsp9haqwKa57iPd7gyuBeJ1ztnr1Jda8uDb6oeSrDppuc3F22EnCQhGpooJC8t1idUXdwP8",
  "key6": "54c1cNi3Xgvk9NfZc8Eh3RvuAi2eJfL5BAtWjBaLSJV1eNhW2YfcrPvyfqKTDeuCxWxcQ2n4KT38SJDzwxAkvJDS",
  "key7": "3LHv3o3nBopTKaV3X8Smjow7Yu4JdUXz8eDewyJu4tUamQQhzUveucXzPhHareY6yLDa2go67MpnzL1o3FVHoTMy",
  "key8": "42YWddcUEEQh3B7QzuXJGXmDJZgkygUtGZqNtrWvFB1mhxNF9BPsuSBKa94353fdxC4Y185mdHzZFfrLpdD27BAG",
  "key9": "47AY9qSZHdVxbmXYprijYNyt6PZPzq367F4SNFG7DyQ8Jm1XsX1TqvsJA2kwunoAUkYkJ9hj7zcx71cZ9Z7Ct43R",
  "key10": "4wjSkwudCQ9p7RMbA7mHeReRgqKt4M3aRPC4K1om8yJ3x4J9EcgTsDkMVBLGTV9XWZ6yBesbVjTnawvo8LcQTmy3",
  "key11": "MPPAbum37xDVKHWN1Jb9yuLG88uW45xj6eCXhXYVDeFYyeit7Wk1By9XG8TT7EcD5jh11uUSojuaFJcgMshGGMm",
  "key12": "42VEXM4qXaKnbNzRoPJh2g2SVi41bcWWmFwiMayEZNW9Xub1RRHya312n3vRkHeGx4BQgKV4yG1wju6TP1jJN6Fp",
  "key13": "4wRBZAp4DRdtJ7ya4bs6SNkup9EwXWMNykQSGX9nmRk9ZVqdwnEgVtRvQijHoM58pVtFGc7oibSucGY97nkAePS6",
  "key14": "4DEQL8uPcGLNbyKGH9LDgRSsjXrDkqqXNFo24C1eJW7byt2CMWHk6RbqfCnaScoX5AGJN8pmGTHd4hzUMe1WDVsr",
  "key15": "49npKqg3DwRG2d9SNGr8Xb759ea286ezT3fxj9saji3G4iZ6tFvgq17J4onPCg6a5F6nNWwGcrcn5rmRMLPPdVpF",
  "key16": "2DwFQj1ryKxrZYfdUn1P4heg7Wy9t5T5GpZFzfkMZcBRJxjnAVUYEWLXgkXBxDUWUewvspWVrVxjiabJytT5sSkw",
  "key17": "4tWAJc7qiMQe4tZZ3kPL38p4vqeZs8qQY6dPnJjdkwamg9a7BWrq5MM3PVEe41Vv1SGEy7ZKzUb5oVTF13ge7GZZ",
  "key18": "WJmzDTvoh2jYMqgi7Po9eSAjyE3a1Wq4PkmyFERG4hbtgLceDkkyAewBPhhLebgwW5rPNzUN1MyvdcxwQoc31rn",
  "key19": "4QJ33pGodAN3LAkewjhxSGhUr741YZE8DYpUeVK9dtPcBNusb4RATRc1K3hYSAPiZK1oQGyMtnjoLiXvWBtHxYZY",
  "key20": "phsNZn4XVtzcV5Uqw8fN3EtMqvp7dQPqKAdXfjPHFjyuWhDu4t3SKmLp9Sk5Zq92gJpGonBiwZMP3DEa4Rw4T55",
  "key21": "Y9whcseqxCkYCR6K2YmFPvT2kHKgbjDCWhnifRFvQoUFJv6JTa8BQHarbo2JtLYcCAETAXWQzcEoDLiTnk4KiFo",
  "key22": "4aMxoV2Qixg4mx6Enx5m5edhfN4mEcFLjxrHa4mFQXDVheme5kBPEC8vnmVsF7eechH3x8BVBvGmjRZRZKJnxpPH",
  "key23": "4fAxSqLr9cBD6vLwrsyEgJScpumjs9MT4FM3HnHHAH1g1pEbrzV2xrhJf5Xa8TuwLVdgP1qfAEEcQN7Chtfzdyzs",
  "key24": "4nsZfq9cERMFGPxHE9oowhHhrjhq1zH2phDpJLMCboXwdBP5yLg6ksQsq2CdoWDqFFT8USYNu2df8sAHL5wZopdC",
  "key25": "3B6aocXmCa764mv5A778di8bYnMQQ6Afyh3QkTNoSn468vVEBExEEaPgGMbwZYzq5WBgwFszhGTYva1oVG6r6p6r",
  "key26": "5XBEsESjMy15vcwiLhvg1qSWPTCoSJPWLkcHVvpP1Qoff8RMp61EB4faKb5ZXG7TR6uQa4yxkhDML9W4o8WGYN3B",
  "key27": "Ms75vUC2cPnyUafWRVwnpKyhYHuT6Mht9qtULnzb3afxery2nM1voEbQKFqcW4P5nPFnHEecnsfrL4f9SrKi8T5",
  "key28": "4nNkE9sd6Ztpjyzshx42bGbf3eB7w4JimzPSXmusXXvBrB82bMrFdyg5Hj2b1GE6Dei61o2zpUKaz9KyHgPGEFK",
  "key29": "38s6ACPtZPgY5gAqB62fxUx3GyF5QHJY7RTN6qKa2HCrxRTxSLhZ9FVZFFvaTs1b8XvkAbp1asqhN88d635nKdAy",
  "key30": "5Ua6C93MLDNRr7E8M98b9wd9fXPGAXNyvVN4L9gHLEsKRCPutT9JLnEEod8fxcb2NX96ywZz3Cy7m74AJzBAsApt",
  "key31": "24Lu6BExoN1kRDUNnpQzZftVTYJDWRrFx6XxTULxdnYAcHTzQ6p8Lfye4hKNBX25RH9hMQTgyoDfM6VhDzNsv75A",
  "key32": "4vAZPyCApTN4jBT6QTSsKGufejKURMba3LZZohXe6Aqgn9TWTSSTpMmw7zvoRYJH4wVMpYowqUNtd1iwbxhEWBcf",
  "key33": "atqp22hPnSXQRh98969oqTApCiDWWRfi46RQtLbQBBFSqu381RJXXvNFSTr72eVia1MsWgS2GtLvpDejpbqsPAX",
  "key34": "4HEkU4dADSwEmLYUFaRkNgqqZDf9sWDmaTL8dibzXy7fKR6HNxyh8CMwt5wVHsJdXPTqEFipix6C2CwtygrXyuZ4",
  "key35": "62kjdr5no3ozUAFJBdA6vqKzv3LUfxWFZKZFet9E36DgPN8BHEh7apbk5bL6ReKv8vvUNzDvWaMYZEXy9ntR2WSn",
  "key36": "4GBDRLozvzGYRxW1egpa6xPgiFqSKLCgojXqiTCfzdBCcVA2kUp56uQx5LPxGeekHcmuzMySPD5rj3PudyPfmyPG",
  "key37": "3B7sbKMQ1J7ZAE16VfPEmoXK3spNXtjNiBESsurZHRVaafjkfachxEjN41SahXFT1WfuaFFniAfFvmqovfW5XZgi",
  "key38": "5PCXdFfuPEd1dWohn1XnEasJat7LJuGJn6JGeihzGA8q7Hfy6F8jeU8rTE5Cwge4JMEQwLkKvC7FKjfFzqCcMEkD",
  "key39": "67j2DLCVoZLQsvctxSS2Vi1JaAhHsfzJJ3hkZYLoLafvv31taASDQTvLhDPDcRBaXmQdTNxedE3HzawgvhFHDDmb",
  "key40": "ioeBVwj7QEa46j5mDTsAC8To8PLiFw2hi5RSfbPejsiHgZKMfpU88p6xfBpUEMtPbnKBKXet9SnTEMq6RJZnC7u",
  "key41": "5qgvf59YUjtLJbsRs7UW8soNuzuzi4oZYt9KjA8GZTomu5uDr3o3NgrARHo2Hq5P2bx5zKGLPt6HLG1tcaVa9XCp",
  "key42": "4dfooiaWwwyDU2zUrYfrx4uPu7BFbPDCzDp6GqgBevGxZKvma3e83MSRz7UR2E8hfy2QdzQZ2QoDsVt8mpo1cr3R",
  "key43": "5WeeA6nrUTybxRErans88t6GCG3e7BqctxcGt5y76dx5YzEh5ygqudaoSwWVRfvMYwMdpepiLB8AQQt8BmcqUZjx"
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
