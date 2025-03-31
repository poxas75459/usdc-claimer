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
    "3tDaw94EKUoy9AWmFgrLhX21Aj8PfD76xtcdbBzf8j2BCLUG8PWEaLHa55J8HyukT9P5LqdZFaNf3fKvPie2oSAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28536i8aKJtYFU5JFuNMiC8t1FQa7WQD67WvxFUs6iEt5NpFLvHnMg1xpbPuEUQJviVQnXZJBCcdTkwD4wj8Dt8z",
  "key1": "5UphueUDmZK1Htm6XvJ5SSR1czVuC28acuUZ4YxAixAjT4c7QGcT9Z4tj8Axys5c8sptbZdYUkcQN2XnQbxZTBGa",
  "key2": "4daCFww8ZuV4Hnnrn5oZQVAiGDTRi4SUVcyUQ7bNy32eVAHGZ9mrjmxDYBCkb8MMxq2qPdWNK9dpcrviQqE8DSY7",
  "key3": "JDWgdCY3aV4jmp3X1gM94vQ2nRwLJsHg124zHc3bPCVBPpRVTeGGPn7U34fz5wmgzz8FiPYhcpzg1rQ1BFnY3M3",
  "key4": "2xMDMWFnt4EY3SPcPhA8J29oR2zafqa3D75ZiGCAFqB2dWffqN3LJ5okWvnAcHc4MKMu97PvxmbM8QkcgHoaBZpD",
  "key5": "3KStB1R9a1sgBG5hhjy7eUrLgoUPNdBxSLB856Ft5j5RGqoRiVgFoNh46W7onC3xuPfveKgJ9HcB93d4tG1Yvf8i",
  "key6": "4N2UzTdkFUPcQg6dRDUgCRmtwuog5d1YyXvASV6tbJEp4eWcq8ikCvV6fP6mosikmGMdtWrgxbyh8eLHyYVCgt18",
  "key7": "3K4v74NacBwX5ejDvbVs2p1SCbj17i2v5n9MEXWFFu8y6diMPCotRPqkva7zCVp7wtphK139DZCZYxF6TkPqYuih",
  "key8": "SNFxDFSBLWUqC1i4yp15jHtsPDakSHW9cF3yKXSDSnFd6Dx6VPEP1uAbo8EZiuQJh1xo3meEb3A8rCdPPcABppV",
  "key9": "2LbANCZwSpedqbwNfkKpesUTAfcUigxLGnrxVsagZP3yRcC1ahvfntzbxonwrcRUZ8sc63ha3HsMZmNeqX9gXJUd",
  "key10": "JTcGaRBxY1cL6DTCv8Age8YoSZK781zdkjt2jXNV75RrjqdG5zah2QoBMpMHV3SvpzPtdHw9LH8v9bghiEqEf7p",
  "key11": "5Z7BCYHgAMfoNtXwMxfGh4BpZVwiZfKK8n433Wnk2jMujirFCUNXDnKnDUWjyXoe4P4KFTmaSCxYpw9BgD89EjVA",
  "key12": "55w3uhMT9pqXhggZHijB2fA7PdMTFKZyt8wngiMKjjJJfvzemoJ4nTxPoqjtVYFMmyRFqBVLhEtQtXZMYLaci4Bt",
  "key13": "DgFzCpRnzsnDbW2Rq1n3hQXxz8NTM4Mg3tYojaQPQgdUnJrVAHbCSAwbiMvFaFMu3TSCRdvvQqGPXrQn5336Qna",
  "key14": "5UER5jDdM53AUHjZ9p29jmr31utbcQEHaGYjreTXmC5EgXKbERjMsUdTs3mScHGyBq1o1PvNipnkZHW6dSk8ZVyZ",
  "key15": "Mhw3PEZSVo2JuSY98CQ2kaGJidcNfqHeUqD5WyGXZb5kSATZ9RGc8JfW3JeD6ARBCtZE9vimptcJC54bmN1jogL",
  "key16": "5vgDS5FcVGFCcmqcxJZLxiaD9zwjhUtPWb9Qjg9tet89yXU9PFpRA5DY1Ggr1zU3wVEKwZqChtNd1ywsTkU4ngtp",
  "key17": "56aWLi5KPiPy1tG8fGZJJ6hVUnpzCeeyxogzZmKQjb7TxmG2dKrP883dLpUPUDsUv7WpFYZq3j2bHHDpLCm3E85P",
  "key18": "aH4p4JU8hd7FW1SmVh5EZKtGvHGh8ovazxWuaUi1v2cJU6ZMLi8oryoEG8X8Audwe4TobqnYdHWPaHWcozC2ShF",
  "key19": "4qqvkPHQb6CHpjLaE5fvmJ4KvvswfqB5xSdWqe1Uo4mr1KrvgBmkzJJnoSb3TYesWahA2N8YaQrYqHBzssZeN5h",
  "key20": "4iRtbdh9Pt5CGPUr2PqFdGbdDr3tKHuzhJQsBnCzTwMVjGnnaQ8deXj1b7sGJLnqurrVbNt9ovZAFVLjavTgvvy4",
  "key21": "4qYFhrfaVMMV5kFWmKjbod4WnaRRV19bPCPWXonKgYwD2TougvcMmE75qUXR9MxNibFBUNsprGuVmbCmCxdEWGY9",
  "key22": "fDyxCENeY3pk9Y297byTEs74idqmDmU5qLetT3eHMCf3BqVp6yEhtQPVyipULGjEJ6ksi38uTyACmDiTqMWhquW",
  "key23": "4sdpi24Hb46QKKfArt4xrM4sKocJYmDdg9ccVrR2o9w9B3aUnNYgw6z1K9ARm9LvbzTgph4d6d3C43W9EmhxrQMQ",
  "key24": "5DHqHuFhP29sFuvf8M7Vbnb4Hewx2igNehxgk97xnN6TM3TVsgwxobPAXkgY59ezLAWD3yvwoNyLJswuJ3ayE6BS",
  "key25": "3ToWT4S57oWVox9oDrHL9rMLtZ2cjsLAEuR6JcM64R7hLKXeUPmUuWKpye3Ts6FDsV5JhaCk7rEq4DdUS7xQzTzM",
  "key26": "3sYiW687trGAuHtggoJJQE7ZQhaLF4ecpC4beDX2JJnRaGcH4i81qEwyS8dwq19RiwzYrsyEFGLRsrBcUJyjffpi",
  "key27": "32rPMmQZa9RJ2SKhGMRFfRjv8acLG5uHUFSmBWY3L7qkF7Xm53fg2Yc2AB4gXPwnZvPUSLHWnKhANU5pj6NutTZR",
  "key28": "2goyow2AmoobgC6VUJ9SUBbqYcitGJ4iSANwk1gRvVxALkj81DFRcpDo4Vbw8JJLMwYQ12YNPpz4F7a6hKGNhV2S",
  "key29": "5erfPWZgZaTubERmoEdYz7sdPrav6QLtS4dx5DCgZm42KNhZSUHFom7QAgcYDMqgRRSRxvMac19PAykRHzemUA4g",
  "key30": "2diUXeBHVkexQXsRspv7arR6eyeqkuJ6czzKSLR7ABJ1L2TvdyQQCfdvq5YkoBoe4MwYX5yHWkxE9fM8qvXjy6FY",
  "key31": "Tuz4mmTkMvXARy6ppYd4DyhKphQLcmxJUz9jVfh28Astr1WXo4YACnsGv4HcYmmnH6dVGZ2F1GtQWkWJPbDieMF",
  "key32": "2SzK8Wy7ASYQreRnj3bzF3ctxDqqkQ1fMDLaYMCE3QqAMrE2VN7sE8LTZhNAqfw6wfJHM6sYbW6AiJUa8tPEbLq3",
  "key33": "5W3VShceNCJpTngmPicN7QKAynkUKtnoy7ik3Bx2hMHhQTebZg5XMkPt83KYpTC6jv5bpyffEvDyyq1fCbCtYo7G",
  "key34": "LeMwsD8RwWVENutzTnK1aSYujV9EjVyMmVTAzcA91snhoWsJLWLDq1JyUYjMAoXonhKw24j3eUn48Qfve8qyRk8",
  "key35": "w8SiMLEm7v81nSS6xLGzCaRyEfkmLWcqzwWtXN1sGzZxKRH3uEHSbF1TmnCYg7PP5mxTivZsmApkmWk6dBWXZ3c",
  "key36": "3Pdne5VKh9ZZS98xSiKZbawHSJmkS1VwapRdkcZ4J3KTbbrM72bpbYmmdspJ8obpkXvTundq6xFkVDfjGq5PdarL",
  "key37": "45Lijai1Gaq5kaTXnzR31PszrXoUfshHcnRjSxyWGRkYPZHQetBenWMfH5R32gGhSY1D3o4k7VaTHM2NzW6PAJz5",
  "key38": "iV2GxDW2uFgqw7nhdpHeRdQWV7R4cy43eNaJ3FE8tm5qHPihzUSCXByv1PpUp4S3KdCzkBK4vNkkzoSfz1ucqu5",
  "key39": "3zEY6WYEpwHhxQgbf98wKYwy2Lz5rtEfqLZQWfJW717tvUkn1mtXmDYXF2uFQiv8dW5ZVxojwRtN7drjmTFcpfhV"
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
