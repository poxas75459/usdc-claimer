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
    "66DyMnD5jXW8ZVoxzURjT8CmWEhrA949whyeJyAxrAHEoziwKyx89hYuBbQSNRnJwLE8uv4merxTzTvs9bRhAXnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4am9kMTYDQDYKkArYmufAeMc6HQHP9c6kJNGAcJQAqVUuyHCmFAZ9368UQ7jxAP8dC45E2NWCunVGHY1L7idyGfM",
  "key1": "643HK6mjvgzXZhGYvrg155wCQsdmVS7j7f6gBQWfi3J6UKK3yLSV7KEvETyfGPT2iKBsyTqTFY4Mm9SLzjREp5j9",
  "key2": "2kLgPEAGrdXqP4bouYZCenpcQGxU36EJ4dtutt6yhXTfjT9ahvaXre9nZf4TWsfeSj9ZEcfTEec5pws1B6txg25Q",
  "key3": "2FzP8jXBFuTD6Vqg2LqP6DmDCV6qBRiKPwdHdocXGzKxJaHvvqCXHSum6XmthPiL8RGR1PwWS683mJ3zd3Qymj9r",
  "key4": "gDN8PGjt22L4eWSUCTbXszfLZ65oKZJJPVoEfvMNTFQspQzn7uy9tKUxmP4MXUt1rSHBZqTkARXRmT3WBcNg3ew",
  "key5": "7XAxMWt3hJTYVbyBCa7jRvFvdS4CMVLU2nctpzWzV6f9HroMREtAH1XTz7n4vXdwgdSrV5RyjKqAh6Gy4uWdJv9",
  "key6": "2JzfJv8kTtoxM2VdVCNwcbSnCCg7URyd7SfAWHcEyFD8z3ATPKAkQcib1U1cLmDAKnV5hKSMUGrNmC7Z6DWEZyxF",
  "key7": "2UYhJMaUejPy8YfCi9MkFkfrKazTSs1LJdoaJuAcJGUrHKh3QCk2LQT4uSCWJc2GP5nuwRWatxWMkDgzRmSznNrH",
  "key8": "3NnDR2dWUutXnvzTRKEbWdvt1EUpCciKj9JRhoYCtiGPpiJt9P487vDw2yJj3b1pCbHBTa2iuVy2sUeh38yeG2gs",
  "key9": "2ppwVLJN2DbwLf5F2Grgn7oWm1UozHeeDbAbyCDGhzBQLRCuuKac9Tc8Yi1HD526NmLWVQokDDUucUU3MrvaaHTf",
  "key10": "2FX2TyWKS7LQnpaFNssuYgDrQw7DyZ5SkmBMrcpiGPPMRhRwJ3oUtn3Byt4ZCTCbEajqfcAt6P77Niy6dk5rxEp5",
  "key11": "2ccFzoFFRM8f69p6wDHAMLPjcku6mxCRsVaGVKMQX7F7krkxAD1fL42Dngcs1izdjeq5dRXnx1a9mqZPRK3XCLec",
  "key12": "2cNrnXv1wGE6zoGLTUrCah8z9wXnXRFyuF7dTi5TYR74v24aUuGGM6HNY1F5aM4PnZyLQPQyb1q1s2gYovJQGUEK",
  "key13": "2cuEg7N5pJ7eNanKurxpZymLG37HdxcqN7mxQfkx8kuFAYDYsXcGRY1veJPj7dMzGgTVmBPNY1SgcNqnwjxXNVdT",
  "key14": "4knpAB8S2exTb8ZmbyQ6YdQyh1mgku9pcwqeoe6Dm8hrekqBm4hgjbcte4tGyoSvq4PNVyskmB65aSaWLdukakhu",
  "key15": "wQ3H81LAQYgqLP2bDnDxPBYRGbxVninZRYHcRe91VpApeHb5N6JQXN4GQrmrFuMaDFaLj9KR2JnU7gKFb7KpnGm",
  "key16": "5ySo5TnWUGpnHtEpp4Az1tKibqYwfETFnydTbGEcvWfzSYD5WZnU1g7tCJ1vMcnKgboUvkSSfoe8zC71EWipYWHV",
  "key17": "551NNTsDmrAHfgXk4i4BPNQvgkS1qjXptrwAJPrPrBHv3MwDJCJW8dZA45cs1EaK1GBU4NGjK7hsGJArfmtphZR",
  "key18": "4wzXW54USAcJpakz9X2jBcJV6GkWUzkMp3R7CLBQFDxEdThoWiMjKkeiCrKhCeQeU9uhtFVwyhDARqJABwKHVHgF",
  "key19": "2GBfijTo7qgKHDc8pKUiaoEuuSJWwQCPjPYDRPwLLvndnJYsTEnh4dQPmdMpf88okRrChE1PVtnEAGhVt6vHNo8S",
  "key20": "48aLujrhqp2JbgCLV8Y1oVA63sFjJaBG13NfuEYpaed24SuWViAC2DVFx45RFFjBaUsQBJZ1cQajCgtDPJEdNHuz",
  "key21": "4siMoUso9GeQEgcSSYBtaohf8unVvEdLGbKXFdjjPVvpcqjGnV2K8EMz8xe79FCx53EwCgrv6qWoqVVY9esDjuaV",
  "key22": "a9PATLNv7Scii3W8iFNjo4U73iBzhJAh7PLR1812bQkLd8aXybGUgxuLECY8WFrnXmqWu7fPUdGuJkJKRX9Vh64",
  "key23": "3X3vBuFD9oS5bZq2H8JYgowu7Anpwrp61FdP4v69ijrWK8LYJZr6MQhJaiw5TbSmrT9yALqGBVotEbZYf3RtFqCR",
  "key24": "5LBeJySTTPfifbaZQ9dVxrXxmU9V8vmNvJC5HyNctWUmKpMS4i8tqgnVUZcpZAs7Mr83YRqBHebL2S1vNLLQcJcG",
  "key25": "4ZeaxKetyxPFNjTNw87SMG4VLKjggXdcptnxog6fUTgoz2FBbZLGRf343jdfH6LJKjWebD9tjQufemGHTheSg3jF",
  "key26": "5ACVFAKxBL4qZLpTucGmutP32bEVvM4ASpykWfCrXT3cjM5hnKww1QFZ3GVPiNd5GqVsXLJgfWtyR2VTj3KiEkh2",
  "key27": "qV5AZUUdjRhnC2khmirketK3xHfdnjAQj63ekWkAuzZAVJ1yqwKJf6D33LxTGik5Zsem3MafP9rAHeCehAurqvv",
  "key28": "4ujwRGUZmrLCxXux33W5AmgEh75NpvQSMdmMemCvnhYukV6rKSMutzfZwwf9dBW86i7uzchgQ7LKf9SZhRXk1oxT",
  "key29": "2TXsMkGe4tseshytnygtiKX9zELE7xFgX37VPvV5qApBdcZwZKWMxW4XndQUc4AaHkXGsXLSbACBgziuThUhvaE8",
  "key30": "2ZLhoa52EnkRvtuX8N2QVHAtpA5GBr6ni4mKMFoffwpgPbmBP9nTSXJJ5qMhQEBNCM1caNLPQgJEyHroHjLDgfGQ",
  "key31": "4HpVscHHAPkFLJ2dbof78zwXRNBsL1ixeiJfxbQVsXVmwEpJWGHGJff7MG7bJ7ecciM1vwhHDD1WBD1bUK35Yar1",
  "key32": "3etWVHPQAqxD1Qww9RNjkXLtPaX2WxNvdYffzY7MUJ2vqEAYzoHjRUoAPBEqYg31nEGUmABWb4xGFR6ekeWhHzcs",
  "key33": "2cj4sWdx7Fsbe9z9DbHph4izUkM9yRr83oCwk2NsXK511XmdUfo5cwagApyixRnoKk5c9aZ1NLPeaLCcM1DVnv9w",
  "key34": "3o2A3wKFKtmvJFmKj3zVVstu4vGs3phnKrPD2RQrWGicozBAi1xXDZ4pAN1AX1n2TKDmR8Pq74yfztvtKA5ioKgj",
  "key35": "2gN4WoPtczinPd2seMiWYMm14CgNPyoWF4Cx2ABhhrh1wYsrmRBPEeUQbSGJ3SCbrBHfHudGnSY4gfvS2q7VmKBv",
  "key36": "5jE8hbLYqDJMSURn3qRFBLo4HPAyzTnHLucdWhzhCJuVZjFCamdXPdgYkzSCu8VMTfFhNXKR7Xum8TLhPgBf2MgD",
  "key37": "5FAzG4xqPq23WNmxj9a6ZvPBp3xKnUaspQPCiEoESks52n2nqXTPBRi6brChQLGkv3T1ZVPNhWo7fCnjx2mZ2Fz4",
  "key38": "5dmXttE5RFMTW5nnXM8LKcCgqjMB1yMvsgZMKkBXpPCSpLoDFdnfpKbsmrwVDWpi626LJvkXmxAkdqmd6hfEPeEh",
  "key39": "4y6z4b26RUxhL3tn4fXDievjhL1sw7X7iz3gnfraB23B9UYsZF38ptrNzUBWXyC3t3sscTKnGW9FRxMN2vLCqMcv",
  "key40": "4RVNv9bVY9hoEWHwfC1qe48ZYmQycaW69eTyDuu2nJkVSvtJYg8x5aeaj9FDXVUFZc76hi9TLHwVqNGeHpntr85w",
  "key41": "4CG4Rdt7uRrK3PZkyXgr8uA5AQQXXMkfiWUg53eoDdXZcZ5EKnLj8Axsqp7YUZdunTf8SoDRdr8jf1jQqHZMYaaG",
  "key42": "24ZVXMhfrBgWrePmVNKSL4vgAwUYWmcb1w7a9qzSYoxkHWgMDCAkMrjvzYGs1a3wYGHHJvsrJwLCSuSEePDweoCE",
  "key43": "3iFsTBRGa2viFGhgygRcpVVFKgugr9MpEd7TA1Jeq1MM1MpESXrvHWnxdc9ZvYxQwoogmZn5w71YDgYTmBEeem8Z",
  "key44": "2qfQ5KHyjpBB5oo3Y95ChgGswXU97K7yqrhWFB7mqgdJ81cj2LuPAQB9NdippH1ZSuag2FMDV8ZUfRQj4TrPUyNx",
  "key45": "4UoukCbscY2vehDvMgtMBaX3sS6GiHsBhrCQS22whQB1t5YwHn2J7psnF2XMiyQrejawP4Tk3PoCdj8zhhzBESwe",
  "key46": "4htHTxkxKJjgyxzXXL6GSwp9v94FutTJTh7KQZNi83HoaFAvmF6YZFMZceynhXPFbsGTero1JCjAstaiaAiDzA1W",
  "key47": "2dqUusMmJVGBVWzD1HmCpR18aH4aT4z8jYMqTsASCZ7QbMtzYu9A74GJi1NGwNvr2YEG7AL7iqm9Pc5ccvvL1gY6"
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
