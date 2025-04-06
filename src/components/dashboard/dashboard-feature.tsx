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
    "3HgU96j1QJN5X1YffUdbZrvF6XQ9AYqFv2hszfYhFwitp9PMeegPsCQEf58zBSafsWebqb9uWbki32hbt6ckx5xb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nmVFDNRWovc2Npbs4KUfh4teouwCEEbZNcN7pRQkgD1TenFku21bUzFFvq18Tn3hNamdrrbrqDMRyUZMPzXxSpm",
  "key1": "k3jJdSeDrQTbkBc9BbMUANVTbKVFwj6KAPaX8BNNUec2akoURhs7zd9LrLyhqE8CVn6gR3iVuDC8vhdy5aRrvCU",
  "key2": "575rsj7t5qYHLgUeXM8d5agAZfgF2B3cYAwuhFfn5yqXZ4sgb6qUgrirMdWCJsS7vgVPnMDeL9fP7RArBbqG7Xpu",
  "key3": "5emQXTCCVjzd79Lk8EFGPMKtdEuPPewFUTvaH65d4KTYVcVL7SDz38Sp4M4s7LcWmQpKSWbTrMHY1UG8Ciydno2N",
  "key4": "5FFanNGAAGHiNoNs6zKnskJE7HxzgRAvQnhyWkxXoTvXRmZANc4jzvEvLRkiV35JQtKaKcd5xLRCQdS458bLBaVr",
  "key5": "Q8sw19bewsjJ7ay3JkoYvR228TYwY859Z4a31wh3rKVM98yUHT49PC8coGReqEhxiLdgy7pXKhFZxTGJQrMpBd5",
  "key6": "4Qkbh2pvFie7XFjwGmjNzLPKTUHwA3DeMMGcgt9nUErZBx4PvKQbbeVgmRGyTUYfCoUbhvsZezLgbDMXHUydqknb",
  "key7": "57d841Z9B5a9wNEiVZw7pjD559NQSNuTSky87FFrVwrbTwewVhtkeFUCzzp7NVTKKx5XFFUq5eM4sQe7A1nHqhTg",
  "key8": "89u97UyuFTThq8Ho9KoBcA7qSA42rusFwYtiL2zVggP2dN8bGij7rPCBoGu3ArXkKUf5vBENEqq5wwTiky7gZcq",
  "key9": "3tjLZbrGbY41jMFNZDh2xvkd16R53KFKDAr4ZwAnbiBRPJj4RCJXebj3suVe7h2vqF2K2vAFErrFmzd1sKHRfw72",
  "key10": "5NCKSLTvDr56BHaBiHfj3zRe9U59x7W9Nt4fCc539Q24tCKDtrCV7bacWaBbhvNW4WHPZRbzVXbJXAuJwC9UwfaE",
  "key11": "4wt87mKJWpp2dimF8rC4jJgFWTAzJjFiLzYPPxiKseLP4G96twXBPc3u4krkP5cNQZdwwxRDe9w4UPiiMFyZUCim",
  "key12": "2fsHFGBrLiTRzme9cPqCCAtbJE136oSDs618BKSc4RunJ1EDhNYGPaUJXzkm2VAYogKkqnHu8n76pv8DeFMVEEPg",
  "key13": "3oL3Va1acAQJt4fRtogFAZ9iT7cKZjcLuGLab4dacFepX5FUntDFDM6ReMiq7WdNMbr527TRWzS1ukgNQZZLz3Nn",
  "key14": "46V1izSNM79fVdzRaAmZRs6zzsqSXjz6N35QhJa9d6n9vgerpzoUXFQmrTAy8Mk2zWKcoc9dKmaNLXcTLym6Pemh",
  "key15": "5EZX3QbHonFj1RNBXRtRQAG15MopF69AyCZyrRS3TPbcW89JQGiy4nDQmiyuhLZk14H8RsGKz7iGXzg53kgQKfkP",
  "key16": "2MvsNuMXQvZGk3b1mUekFrEDip5EhpjvqpyUBnoDmspVGB9KRf1du9HVeaBUZHpXV4aV5LdVdxEdq7inqxu6DZzh",
  "key17": "5Aiv1Rsr1MSJDFzixxJxB3NQQ3BQW7znmr86mtDUCehGyrGJwH42ybiPeKz1cCEFBNphYBscf9qPKL9SQr1rxip2",
  "key18": "34gwYbjvJw98sFegVmSCoNXhwCEbeWX1Wb5gNsfVasLugSH93JDSjqrcxcRxtBaSbq2a1WduCVXD8HZ1KJzvN6f6",
  "key19": "4reqMU1TAc2eSrjEcaS6WfvEVxKj6ZCXZKNbCKHRVV4JPnRVPQXuXtVUk3JTa82kfdKBQKtWA44cHRFPonKmRGML",
  "key20": "2Yxud8zSSMVqeJdnk9u6Wrdwj98xbK9wAFEvsuouJvV2DFNV6AikBzd9Cd6xKhcKBNicAaQ3SADumzddqMVgVmNo",
  "key21": "5wxoQxoNSQUrJq5gVAs6Xdre75yzN3qUhpdqdspaUXQr5FJq4BUt3N48k3rWoEttnYSYY8EdGKGBMDGrvWyQh7j1",
  "key22": "67KJJDqBCZAMK4Exz4GhDDJg741hAXxjR9JFxZNqoHMjaPC71mb6waew8cdCJbNzVwEKgJHfDqWjmYtr9dXcqJjU",
  "key23": "4UcFX4GpKv2EmNiiwYAgmTGPDoJuJMVtDjCqgAMTLe96nTgXGX6JuD22h93Ddm5SpJB6N6p9LU2ZyPpg1cNyAgoT",
  "key24": "5z8XBMpHPYUpvF5aUFn5vMXFaxouBh7aB38kbmmQDUyHN68B45VNzGWuQ4pKmdFRxbcjDSamRufx2nN3P2umstFA",
  "key25": "58drH9aR59Uijn6UmjEAV5Mpw9qEiVpSi9bn2ojAdnZ9HjysUvDycDVBezqKTtrcX6HSohZEnVssMJTvFU5JfnvD",
  "key26": "28218KcDsDcZq4ecRwnXdwhW48ood75gTrqJinyqTqxWY8W6VfvF8bT92bbfWp5mynZdi3SpLTWgA4RmRjroE3Nn",
  "key27": "56PvLKSQsCFJhYZPkwGPr8LAQbK2fwk6LnrUrnXvfntAspzBC7fGxF9JsdpbvR13DkMELYi7gNquBxerr1ZC1Emf",
  "key28": "64Yajdrd5o8aLefi78LFSRykgTAyN6X6AxfQZrXXMHMU1SvVmdHx1xHf7HfackHaEzSoVD9TXXf71WgYPjhxU8zd",
  "key29": "3arM4rpCWGLAscxM6vgMRFnvUVUTu29LR3qiKxZS3PMrofW4TLT8KqJST54VBjjD1XyznZeZijBaEZ4ZVswgUH8u",
  "key30": "5ECh1ScAMupptrfeA9zNzDTD4q6yz7DjapMKJfVjWHJJGunbY1TEGtW76Zxd3JJF11cUyD2kPvdezDGzLUJGD4oG",
  "key31": "4DTaaQbG4LqG8QF5Xu4FzqSdyxunrX1jJvz58LF7EooeRxuUNjnyGq64QUQ8Na164kFG2PfdEM4wRWWVuPcdcaxW",
  "key32": "DdU5zKKp5TND4D1MHyf1KiX4gbuJ8Hn7UyfiWt64ociQtjUiFTL8EoP2c4jDKpnnHNn41gBAzxVpzsLz2FNosuk",
  "key33": "28nBCdpjHaiZmneUaYFEUoi3PcWsNejETfVewxTaN5JT9fFgQh1XNVMSCX4i5Ce4qp8WUjLimzNB1ZAEnt8tpAag",
  "key34": "cjcpJvM1RqdP3xCbDjfn5huCuVj4hmq4rCzSTWnwYvmp65Ukm5foMr1UATvULMNMxQcws9rHdEAn5d3XUPuoCmE",
  "key35": "4RZiyYYBPMadpC4TWQRyBxxZd5tGVYQFiXwifpbcmMeaiXzLiuy9cypKekRsHSYt9E9XXvaeEhfBXsviedH7xtEc",
  "key36": "biZZ5TVBm9zMa11eTnHusdyRmTcVKVBLHw7e48YiH9iANg69dGZMkAZdujsq6busRKU7A188cB17qG74uKDcfUD",
  "key37": "4Gp6xjY6qQWuy6EFCtLGfD3cBeEVRSga6EsQjmvMLCz5fd1k68k6V9giTWFTubiJsLNBWqe2JseNyjp9WRc25ZxG",
  "key38": "3JaFNknhZfxpPbRUCPk6ppg5up9rmkXZPb9oHZisbYmWjDF26Hn7oVrX9YMrcZ8XMyKnNxqs9Ldsjioxgtrv9J66",
  "key39": "KzDEfgG63oZCCNtB996gTPdagw2crLXGU2UFjDmweAFJLuz1AEX1tVR6BByX1DwgV8pgSYLpdrpBMff6BzqdRRT",
  "key40": "3zmuLT2EV4UVcFBBeyxc9a8GaPNRHJ6DvatySTKeHDu2aCzdt7817iWf73kNzRA36qwXPcq1w1qcTsRqMhVYHxu1",
  "key41": "3jGUdzfjjKx7sKHKmN1LD81akhrAveBLQyhVhhx8fqhgGXRHnR38ueNF7kesvJkAsqGEAeRsSSDrWkP1BUjvpGGy"
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
