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
    "2zTHhxWFEskZ5wMZomdwohTbTCYZjhh2orjaydCXMQ1EyP8BFcHGPbu1My7J287YG1hVt8HJ2uiedxyjLpPaHJfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YPHCyHmKpueZUZmZGQRaKwz7X4GQhWKSKpXzzHiMvYRi1a8iwtvNidpjxpi2Ugoj2cha3sfnLZSSn6XEfBgLDiN",
  "key1": "aLBDQNmZUvXFTKed8LXoXLRf5MZWdSYbthoNQhKYWpRAPsz5yRLruCcovyDnGcCx81LD3NgrjVxBETsdXPUBqTB",
  "key2": "5LNtgkBHfnCP5xLZLapndp6W4emVzLQYRuC61RzjV7t6kjJFtzy6n82B93auUZ8d2sm1tD55uPErvBW2XhgxYMET",
  "key3": "5ewS9Dz8Q1MLweU9PGpXqxWDQ2gEbjdvjiFabrqrECmJLyHKw8rEf4LVTa8MBbgUx2mxCcPRioR2B4aXFqsxVdT2",
  "key4": "2Pe8RSdX2ZGLpjnSLb2Sv2CJwgRVPU7gGr7Go7ZgnJbCFiYikyVuLUgZo34TP1A4KSmmbY4TLCdQVdjogsacCsmE",
  "key5": "2DNEizLquYyHMSWYLyTJdPPHyY1JvVog9CyrxyHN6AKtU6jHRRTK5Bk32ThFcSZJSM3DKnGBrQRCm5JUCyHBc9Y5",
  "key6": "TG7bi1LBDXLeRCYshBLDJp2DFTxk4tJedu4Ess7EbETBnpjAiLZopYPjGWXuFhuyiyQJWTXjaHUVrqvYz7mnCbk",
  "key7": "3CyhWvfL3kK6jruHSsTphuz2aUuLVRagkphaQ4xgeNm1nrCVGLp65XjN5EKvM9nEvYFR4Ddg5mWmtpm71c9qT2rZ",
  "key8": "SKTKANJ63QVF6zYFA1eFnkvG2sk6uUtXHkoMdAjAMkW7CkzuiTkFQFSNDRR3LJbFcq5MJg6mZjo1urzQA1mgEt7",
  "key9": "3zear7eGW2bqqyLcZYAtXTXP6tMT9RzSz3zcu3jakQEFrFWXAwPAVTwCNsqCiABuCGuLYNALmoUrRLSgi8Cw2Uyc",
  "key10": "577KWjSwn62RCceHN4gp5DYCeNHnQmR2nfDVPgfdE9qiqKvWvBMKQ7SR8Pgw2iwmLSYaSuHkkPEmcY2weFwxhLjK",
  "key11": "3JF5aXEinrhdFD5fWoUY8kw2beK5g99fdB7gBx63cKRbWhsFm2SPs8WSMX2tCc89R5tv9gJ23Pv2Mt2m49ciSw1e",
  "key12": "5tHd22w3R9Kw17trUY5pG3M9FC3UheSqwbZbsAgKhgYRmHLPwX18iCRYEnHURR3zza3D5tACVC8A8RAG7vS8S1Pk",
  "key13": "5rudSxJQHpkEWhhUeFx2N8aV7wAzDcBAbTTpUuA4ZBRjRQNaH3Kt65QNuGcjikuusPyxqEswnrTjXLsMnwZz8yvR",
  "key14": "3Ho6oFviDtWE7xUh6k7cBqTUisu6mbqRSygvogvFZxVFN3MySYtzKe93qkB5Fj2aqbWrpfNBDaf5HySRcHpWYGi7",
  "key15": "954Tqs4YZqMPv7rafyxBSfigconafewRA7bRTmiWtQqkKDsgXC6aQxxSNjApP6dB1gkvbwmQPxSKd4mAH4L4ifu",
  "key16": "3QZrE28B5PrPFvFdEHwuJQjmXUmZnQptPRTEPMWghaTDRUyx6X7RRfsMfasJeqS24LHE8N1nhGrebXX9ZYWdUexL",
  "key17": "h5JwD4BnM15cdjaYmffcraAbV8RJAPgq3vZZouduWtFQEXZXF4mDzhJvWjfFS5YB1M5UYsfbbQpGPoUp7UZeKtA",
  "key18": "5yMUFMEfAYweLZ7Zzv7bS5RfgD37ZQBZeSSdZDqWTmBD9SeSCKrsa2sStgninHW9qRn1NRKZh6e51iSjdpngXzfe",
  "key19": "2n4cu8csXPiyEEj9MTFUCxvJYe1gVzCnABGTVSviJ1GivpnHMGJDNa976Z1ptydHVeig8MVnwJYV61XhcZHGHAz4",
  "key20": "2TENUcu7MDdtqQgRr71Ai8S45MMRV29bQWQJP8fmkkaxv1bc4dRSUrtmGs9E3JLXnRB8HxZaNo6xH7BxA4uYHVnB",
  "key21": "2tFRS4UnMnUoSVHA7taHqbu2ZU6pUxCu6HdBG62DrmHp5fQ6TjzRRq8CNoun4c5haBPJj4veTWDyX9EMxxGpw3q1",
  "key22": "5KBfiuDZtfm6gN6eNVzM5ZUeNGaGKyy9Xay3eZejLWBrLJrWK4Zt9E9HNicPPFQSUX7rE6iRDCUiZaa6qLC2Hy14",
  "key23": "fBdnjCpWN5epFo6FR1ZD9ffGHYauS8vRd73EnHgWzPt9bjF4VvkL674SF58TTZpVxCyszLC46qsxHacajEdXNKc",
  "key24": "3HTdqvmEngRre5Zp8KLJSeXdRYsibZ2i5rZYMLqcmjL18vPCN4TadYEiYjTmbXjZn1RrHWvmyFKjv44X7VnVbPcr",
  "key25": "124eNa11M6n49zF85nXjWBYvbnLwzyFF7m1LGzN3Fp5G3tzsEaGjajGURDJJR8YmkbFBks8hnxXLg5hUsnn9ZetC",
  "key26": "2LYUTjUUbpvBFU92GcUYbJM73usk94cHBxkWrAxV9QApWFNgQt1erE6w1CABZDDgha74f21BYWRnVu2TUX6emWKS",
  "key27": "57h1YTLohRJzwvSHuVKp1RFBWHdrvXKPNKen6iKqWQ4exZWLabnRBUMDPN4A7DjsDK3iXit4xb1YiRwC75HWtAE3",
  "key28": "3zNJfsnfiPTzqeUJJ2LEF9BAcu1TjrH2TqBbY68jwDkhttWR9zFTLtY8sq1mDFRPX9juoXPhZwevHJgptQvYtfDf",
  "key29": "2JBiQBxjpGcFVxyhBHeJUXdM11GXgZCpbGwdyLDHuTNoukG27PBZkfZLYicoHzeczc8V19bY22deh4ZFLbWUvAYG",
  "key30": "KB2AdTnFe1XNfzniHwXaf6MauEvP22KRVXinrMHw2X1snX5swTrxsaznksykeMgNkogX4erXPHcwEFCo8TUx7dq",
  "key31": "Wk5DfCLEMrpSD3RWHMmDphZCNYovAQDxoVzQmE1JrTs6yrPL4z9e4P8fvJG4aYS3WYkN8gQMUZss3AsLqvCuFmk",
  "key32": "3vVfUqFC9gBqMRCNPbTxnY7gA5Xz4QiUZvuVhyq5Fp7L4n1x5DQf8hovAeKdHYs8zZCFFD7zv14NKMnbxMvz24Ds",
  "key33": "45ZyJC5B65rCCuZn7VASPZRGSkHKMuuDQVfNQy3zkomhs5y6iS68x7QUktosu3cuQZEGjjG6ppJUMVjxG7iY8Yxe",
  "key34": "4eX2V6Qn4peYgqKaC26vA2LyZAdKgWkxzQXRU3rAvpGUGkf6dEZhiNQa5emCTePXe15tuhgJeTcNvHtczAGfAP3R",
  "key35": "VPMTyX4TCQ65r3HoNEStYEmKVbSxPaRhXBH3ZXM1owutrzF6ttyN3f5UAQvawFGLLJ1eCVKTDgXr21L3kwquaNu",
  "key36": "2CYatP1ezTqG5rL9bakFEKhrsimGX5g9d75wfKyw1eHbqLhzfhnHzq37TmFiyu3iBnULmeNVMFtSujmdPvEx4G7h",
  "key37": "5jwK8pLcqVFJjzVoiNZxbygWhqGkgi9TM9TQWHq7TmkedautcsKjtpLisVW15AMJJkx9V7TMPEiVjPnHnz9icXX1",
  "key38": "smEcAw28empTDjhzX27Wwjq6jasYJTs5Y5rA6FhChH9UFBQmu7euoEGeUcGuqvvmbsWmm7U8uhyhADW9XqZRmD8",
  "key39": "3AJgypddnYw6N4Ydcmxx8zAdEr46q5sSc5g3A4bkgT39QZ4zbGUQubR2MDFZcYPzRWHaYdummGWdLvbcyubpHU5T",
  "key40": "5GPACc4Z3acCTzrcWjAC3qpiwEdXDgu5vPDziNiK29z8bbahZxYyfwW5rHCfKHNaTAJwAzqKe5NhKopLvh5MdubH"
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
