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
    "5q7AhjvnaQzdEtsc1fm84GETjGGZA1r83XHDVQNB4owbTYLMbNB5rUEjb2UMTgYUSXy976mBfz4cnmwNL9sxiG9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PmpREZMUkHmCzQiHG972CKmRzdMMhiFCTbc9beMWmvaaVsjZ2N9GM8Lka13vmjpVMbGerPCP4b7S8K8StE96A9c",
  "key1": "56gLKTaZmrxX65Anub1TcZWiHa8rGQe9LymMCZJ9yWFAmGiktLn9skgA9yRbdWizJzKjbunGoXjD7yoEf17zHTmb",
  "key2": "3FfiVWNzK1VK2JP5ejjd8wwbBAAW45TBwrEYPyG2PoAEAdWzdtrAM7A5S1MmZ3ti4L2pCX8uV1FmNX4hJMPnhsS7",
  "key3": "66YiHhVS2z8oX5bPvspP6fc6ynkXEW4zcHA9Yqmz155WdjFqGAToaw8dCsKZEbUbyFe6HTQaxroV4dXu3aFWXuEh",
  "key4": "5pxdjqkfvfPmiArMddSftjirZfZdnpGP4PmHtNcMZZk8pL6JUJeaCGaxpfHnMsRhMWQP23wpya4qcTxdg6gVpWwf",
  "key5": "5hrdx7FSWwSXt54PFt6ecaAwqnNb2SehmCdL2oN4VnKVEiXD9wNzcos6p2gYTCPziEGFhmLRyTWfEj7Jd7VYWJsb",
  "key6": "2fpDLaG46wRmEyYHLRcK129T1akQNLkf7bPUPu2EJJnNkUnNNbwJqp77aChMHQ7yZ5pTPqF9xWqG3UYjmpXhqZED",
  "key7": "5ZxytuuVu6oP4ZazhKCyGZC5C8z5gA2xJAdDifKTrfCPEWNBaWMeVFt4zZ4MRZGMmv8Aoxpj3J2CQJa2pEcHxLwV",
  "key8": "3vfDKgXBGzKu3w7u3fRwVVnXqrAMtYFjh7xY9KaWVQJbmDBzaUY4vcS4ehS8cdvaqS1hb5QvNQPNH8xj86cGxUGW",
  "key9": "5gbFsKCJQeV3B7oZJnu15NbYgCFNWX9wrPo5tZ1kS1MZsxrUk1j8r5PmmeCHeCazntRtJ7fj1WDJQ6ve3zQLNSCL",
  "key10": "3zVWj4jGLyZoVqS6nrpVYN7xVRhcYcpjrsW39uByaJJWMmL3FiMaGCg4XJcE5L9bccGL4CaRzXvhjKyHu3yZUzWj",
  "key11": "4KYNPHaD7gac3nWRxZ2WQ1sQ1F4AkgPgzoWSWEm3mczBfD3wSR6eZd9LfGFWQQXEd2krnJdd58xBwMtcZvLVKKGR",
  "key12": "5qNxPn5zbsTibFYnfpRWAtTPqwUkpmcAA6qdeK6vSJM23mK13YyPu3mJTLtqMzv9CQXWKE6zBMX3FfpHjTptqosH",
  "key13": "3wFBmDAZWzPy5xCnfV9fd9SiWZj7PKHa1QFBzXFNcfdppfFazKARW4zBqKkH99kSUraU8AHDtiQJiiiXzJY6858i",
  "key14": "2CUgCXvQKWbx4tr7ByqaytswH3VKd5LNfpwiiDtzvuZVh18dFosYyT8k9ohjNM5BnBrJSfPxYjTDAyKFui5QwQW4",
  "key15": "5LVdwZeWk21F8ueEVDaVoaw3VamXeCnCVCDjPLZrWCJMXofNhpqi7HReq1Vfp8V6SwieVNRiv4JpKErN9Zh3ufBt",
  "key16": "529wYTep1vDsoaZjZAkMrWNSAZtgWvou8Y8rBXa8QJYSTHna65LKyDT9pdRZQgKBhbhKCyy3VQDf2WKUKm1qErG1",
  "key17": "3DfKkmPJTtPpxW341FwuNzaXM4Mshzo2F2sLVsoPVn1nm4uKDYvjfAnHkbXGQMfJASPQCX9KGMKxhFGx5XQo4ujb",
  "key18": "AR6Se2us1z4wyLMhQbfeFmx4SFnkZ6MLSRvVPt36Cnc2UBTBMzHz7HDRdR4jSUtVhYoXauVnBRA6H8nVKU49qub",
  "key19": "2NWFoL4adWKrAh8veSoxAGrKv3B2VQDw7KZi44xxttiDvC3whHfWhQcKcjDexjTqdL9ntbcN2j3qdZZB5d79kGX6",
  "key20": "2GKvXxZcdW9kQ8ik2ghvVUWs9ef8AnbLwSn6iovoDcPQYWoG9x457y7gfXv6mc2RiXQr96qu1MvF6isNX6C5wKUT",
  "key21": "4FTV3gnubzXvwMPvDzQCbF4niTb7ej9tbyHM5GbfdexVau9mnYKe3jEVH2VjH4H3PyfentXeD1m6BDfvnuXNj4ab",
  "key22": "6p1dzJBoShgfYWRuWhYUCg8XQPqGpwWkrF8FdCAiBw42W88Y7fszV8gneoe26UoxerS4ACxveuUDQwdsYN5woEV",
  "key23": "2ktcCZK4v8tEnaVohmiYjNb7RZJFeeCY9MLmuVWCZcLBjDLryQq3kHZgQU4RXBJcKyg6uptoYdptmRoA7LESVqv",
  "key24": "5DGNjBhwZPznbkNbeyjGbAgRYvDVf8dSXhdakr7XWZmihh2M6m6ft3f33BmeV87U5kW7MvZFi19R5zUXS8DKuY6y",
  "key25": "3XBgjf1uZ3RpBUGTwm4dM6q3B7MBHT3EH8dyAQQGrJerAWx5ievNaZLpUBYqvXN23Rs2nTj5mqXFBiq7LbGKdshF",
  "key26": "3hM5F3AsoQzdYTrhK3usscC5JGLSpWLcGk9Dmvgiaep6jDtXKCk5YwPAf4CqQQJLbopXs1HWtHtFCMeAPPs2eFfH",
  "key27": "3aSjo5A3oZh7XmdsQGawFTz5e5TtTSDiY9hUY1bZKs1uX3F1MJwSmgK5JfUpr8FgVELNzdgYmQSX9PMhGRDEmTXU",
  "key28": "3uSgGUJogZJUszUedP4qfn6XdJdyeMcVHu4xU9GLV2aegWseJHT264CM29pELuuZ76EiymCjWjLVRhaMQyKrkwDt",
  "key29": "2KJpbGXJVbChyUJnHnDzrz5dSN6rMR3BeFT7LTwZm4Ki27tfWdKFTAnuFuhmozBqxTxxfvjcUwFmNjcSavY3eefb",
  "key30": "2uk2s7akg1K9uYE8aeuLUVLhcyWE2KCY7SpFrvr8Psgq1a1uBSanXr7T8zp2sn9J8FAqvEHjazYpkP5eLLPmkZZo",
  "key31": "SKWAzGpYCp7ZYKNmvbeUEtJEEytsbrzhvmqGEKmXuEXZ5i27YhFH6CBSfMXWdhYLircgcNGZYDXN91AiQREvzyi",
  "key32": "4QyJumGkU13fhVMgadLRuQosbJynGqBXZ44fyhiQNJWoYcwZnYW3dF5tMyTEmfj8mdfZKvVzaooaF7EybUw25nGW",
  "key33": "59xwkZTk2m8GZ94PQ8JVXgP3Rf4zVVfMn49avNb2WLH2xKVsspsAcF9hToD1PKrgG3jVyDbbxfDFPcNbu1ceCXqs",
  "key34": "3RYQdpFfyErcZZaBvBn95MTHBzzETFimN3Edwh7b6irLPrLKXFWUWWjPtKgtKuF312Hwnu5XKQ482Bm8pTNVPKso",
  "key35": "4zeykLKBRxgMHcgmYkkN5bewwptt6nhtehazV8AS9DUm4uohGwEa8gyTsczuMiT5ZUXkSN79bFJg4ehgk41Bn6GQ",
  "key36": "4Aaqgh6QfWqBCZwJcRQkvdjgTA4NBWpPv6dn4yNaK7XT9ZNDTMnkcPJUUtFvQP44GEjFAE3QFkEPpQceHRbKSWyZ",
  "key37": "3fogRJkD7NXBw91GC2sYUrNPw8dDShKAWhvKUJkKryZr4GohJXcgd5CrRy8QC5qnPjt6iipcQDZ4gSfKpp2xhocX",
  "key38": "38vfD2i9CTif4GSRcuR7BMTqByEPbAriLMu4vsj51KJKCMzXfftcZohx8cSovyVtNCzZZcuxJu37PQ7VJpUxb3yA",
  "key39": "2Hb4BQ1tQdcDcgmUE8Sz5fWSrF8yXZw7EAbVDDJ2sc3BJXZyQe4Cw3v4QqwSohKV4bXeXQG2AhzxPTf8ZPxpAKSG",
  "key40": "35paL2kMGajDsK4WYAGDNyth2xfVWU5eN7PWYzkbL6o5dmugnz3BCpW9Kmx4Q2Mdjhbxw6YbQt7LPe53cwnNx9kL",
  "key41": "3LSrNYiXydLiY9h54LaCodSeyuRimbL9BqcAjJLFk9kASfeWUZHnttQ2X2WBTidVQA1qW91yuGKymfYLbpkobQM1",
  "key42": "dFtq3EEMLUZwU15i8nF97Z3MSHEfTF2a95MLWnESqyc5RasP7m9MihxAGbEDLTfKgNCFf7b5KKPG15hFChYSUcd",
  "key43": "5do5dj2bUDfQx1yb2eF8XEZ4oBavHiRfPvmjYn6WrCAbXEhibDdccjDy3Xa1wosrkQ3vhiaNFTHQY2rz5aiQ2hdb",
  "key44": "4HpiGRxpPoi7n7R3DCpMikcNVRX3kTmNLFWr25zm9PRmN3CJpe3G9AyCsyHYTuRFCVTTgDPM1h3zpNWnsqhgwhyf",
  "key45": "gLp9BfovU3E2Drywqj1WbGh89KAZVcnj6bhcP9wg61g4g7axJYnrRH6yVk3nStJKaxB1v9uz8rsCHjycS1aFDaT",
  "key46": "hBK57kgookbTY21gWwyNrmawJbcsfwJnp9FVpTEhGQq3HKa55ajdWrXMsD6yDMrwtE3qxm9JKdHD2tiJ7o3KryD",
  "key47": "2sQXhARorQ8np3shLTtBZThkXpPdDKCUaxy29jP1pKzWcksmPKVvT9ADxGaCEgGsiogge9ecux3ZYccUgpbuYTA3",
  "key48": "5yBRJ6AETt4w3Wq27a9Z1qD9jwQtJuYPM9dnwmRYddvaoxeJJGe316BnCk5o5jYmJSPLeAopPtQveiW6739dZAEY"
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
