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
    "3PKgazAdtKQsmx9Vs6LQUHfExnxutKvLvfb6Uoaa6jMgaxCXwJLHxdMeSBH3vGLTenRqLXuF7AtpF4t6ZhBepzVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PmMQDLue5uDG4JN3hfKotq1HrUusVduztbVBm8T72Sy27y9nbRupMkkUUbFqx1yBdeAFYHW5TNpJkXkxMgbvyP5",
  "key1": "1wp96DC1Hz6vvQuhZ93bDrZLJ3A6TG7WJCTszKBPhtuuiX6Xbnwk9kjJCERLMaUqvXNuAaSLYzrmeQFX2HZkwQ4",
  "key2": "59qKe55NWS5VwhqJrXMDVik1LoZrv4ytNjetk2jztYAcp5bkuzCAjZRQNJwxrLBaXbykzUK5bfhURTbBQyMn2meB",
  "key3": "4yVr1UCwVTfXFjYsHEz2YwuxrpSMKPehw1d7L8v4MByvARqEVpcJcaHcivug4boZdwPg6m2WueEycVPNKne24X6a",
  "key4": "4JQ6hVaveVCVAbp7AL8yJeXZKkbiZJjWn4xPYs3oDB8HrydBZUkEPy4Yd2AwdiKpzgxAX5Mk1XKdrSxv3fu8xPpH",
  "key5": "23ihKurpiVMfsSdSXPThNwLgNHNMQpApnttuWd8KzdYYXSZDu9vRc4G7Nuwu3yLfDmSokx1TXvXbyNpFWzxKmrDR",
  "key6": "53tngA7xMGU2TpBpAQPdkPdHonTrhQEmBVAR8PoC84vb9EY2fWqv2WPLEyt3cQtfbnEFoC4zD6dEHyt8buhcWYqE",
  "key7": "cmSfcw6axY1wGcMNLt8VxLkZNtBRDv1TtMAshMqUTouQ2pjHfR5U3gjLHUnaYFppih57Uv2mxz3Xv2tuAXC12FV",
  "key8": "57hExy426NC5fHimFcyCd5UmBn8DLDFd83vEtbXzQ4w7MtmF7Xj89Uo6EfX9mQ9LWiy4u9S2XxcH1ijeUoXGwcq3",
  "key9": "5rb5EjpeCpMUPvCagcnTft6zpG95aKZs4X675gYmxvDBTXK3Q1eGPvTYtS19DEiZn7sS5u2PJxJKCJPkTpgcCKTN",
  "key10": "3eFif9vL91KJmD5tbLVQM3MuZuYW325wsxbBqmYcEyn7aiFgewnjr4jzcCEUGRdWoLYZf7v933dq7M3Swi8fkXg9",
  "key11": "2BeuCPuk4oTxZeH31b4K2X5U1and94JPTJGEb2Tv54nf9dVpXz35qeaJL6VmRZf4gzXqRw7z1JTkn4tCwEqaidJ3",
  "key12": "4kJJJ9sFBFGWzLSd7sHK4XEFrv4Q7P121bo3BSkC9WCtZX5ETo3vUiyKftzPi1BftNJnNDrzC5KjUsuXkeNWWfcX",
  "key13": "2ZBSWoWYK4DrijXwU3P7RqD6mQ8ZaSEt2thXWZWoh8885CnWEBB7QbfbD1frczTAT5FvZdZk6MauGqYCDCXcNNLB",
  "key14": "38Wh21bo39QFQfmMRtatGeAn5zme2WsYQCoKaj5T9BRYcmnWNKXkTw4xkfWhZfqA2PNKeTba46uMe3BQtR1g3eWe",
  "key15": "5msmrBpURSonrLHun2TekF8hxVkJTeyfS1dqLyTwcLzjqGgjmKwnoccWuueUXK5VpiLdoRhPpkS2nrNSYYznPpfH",
  "key16": "54aiz7mFJre3JR26iL7a9mPgdEhr79N7bBeBsGeFj4azyiLvQLuwdrbwHyVxC3brNXSXhTtaPbdTQbFKw9578hz2",
  "key17": "5VMCJfcCMK15XKdcWAGdMXu1g2696FSb2Ga8m32GmRiujntDT5FLHWuSyHgGwhzKmqEcbTC7LqcWjXXVTfMtadwa",
  "key18": "6391AutNke4CD7T9zsjeAbEgipQ2j6M7ECyqmxL3K717mBxDCvKPpMiUtzeRH6h2jR1N4vxdWxtGcanf5Xpnahbm",
  "key19": "2qz48dN4kbEvkS1ViyoT1MEYagGXeuVR6Qjx7DZbrMmpB3ByRdQpaXgungkbb43PC4SzvJLCAKm8GFmEnx9Y8HdV",
  "key20": "i8TXqaSGS7kp8o5SgeWZjgwywBQ7XN3xQKiVsD78i4Loj98TQQ3GkAhz8mV9xQpym6tqY8wZMfr8wS579oBHXdj",
  "key21": "oVxhQm2WvHDrcui1cvXs6s4Z3MsjVNhmKesxWmtjHKA2nSmqNxjWQsKJP7NGBgioDF9VytcnpM9xvzEn8mDj5KV",
  "key22": "5HNfHpLMywjaWZdsvvsFmC1WbSw5oktnvC3HuxnAwoMgPveCVtnxmYikqLyKgfrwJhLQuFjjEPSh8f7awJKSPWGC",
  "key23": "49WBwCfmyRfgtsbU9ejoUpxozhcnDaYEEoon8s9Rz6zKGDGuPo4MLr46bF3GuNYQm4mwGWGisZHpV99w2mSyq9KR",
  "key24": "5cXPsVCPciU2PHKi97HQHYrA27pDN2R4tR2ZU4xzpriLgPYfiVqiQULq8kc1iXG3u2f3KJFb1kox964HCyeSQERc",
  "key25": "5UGxGgwroJqFLa7zNK9922FwhmJGKe2QXoabJBqabheqTPLMbNPZdaHSnWPHPhqiegwqjpvwnYGKuYNZCvUpjm4h",
  "key26": "2PVP8vEfeaDAqJobUF23gtv8zeiKPeAjd6tVgJu3AfwvYrYJV6fRBb2mzt796VYE2KcSUeCDKx123KvidZcrAqGg",
  "key27": "q6xm8WKefDQ3JUaaxHeSmgNiYtUERCaqM4c4chs38iU6fe1hvBXUceczwP8xXd8KCb4BzmpEPR4dDRoARyiLANy",
  "key28": "25Uir6Q61GyEVxjvQQcW9L2XT9DfgTyai2cCD42NHDDc5oRYoFETwSw4xemMSNNmUVdRaU2QLo5Uh6VeBijP2zFs",
  "key29": "4vV4ft7yeKA99M4KmktBRZFQZxwoDbqF3NyFjhrk8xh6hyWB4DUektZy9ZwjM4zXbwXxm7ahL5At4WJYA7cv3xUr",
  "key30": "26GpYURqjkZavifTMoZS3pkoyFWefjzuPkQkNGxxqmejPU2b9WV1GaKUTLAj4g5kJG8F6ShaF1YQfAa1nD4aNNfp",
  "key31": "BxU9hq9Yt4GK78C3RbJ8oPdm1ERmGs1TK2RJUWB6WXFA6BPtpzijzujvtmvbkrVJRfczrZtuzfE4Ci4e9UeQmet",
  "key32": "2QM6DZbbZ5KpVcrLnoymxTj3H2ZLEpYquVe6tWwNpmSNvEXQQoj4X3xWmnH1Kkrwbc8ATNUcV22qVwweLa231Ygs",
  "key33": "4iWJEsJfZLAjYGVTXHhk4mFcQQ7kXeWC2w5YdaZT9qaGq1TLpfUrPmradQBudDqPUEFxhoVWhbGode6FpBNETdFi",
  "key34": "5jm7Tc6qmo9fQ5U6YqZK3Haf6buKa62WTVWDzY9pcm3JZgrC2S93udaNTwuWj3pR51Mf5jHpVhiEd3GmZSg2HXws",
  "key35": "5UkfTZZDFdCHKHFRwMpLFnGZQUdK8b1FCzVmCMEWsNU8ED7xcM6VSDLWhLEP1j3kMi1iLNHQVyaDZsPjtVzZLsk",
  "key36": "5THh4YrCRAH1EzH4t2UBpVqCARKLwqvTpvwbZqqPUwnLfTe9Hh5KWbpExVRRQEBWNUuGswRSFLq2TJh3Yx8cbzPK",
  "key37": "4K59Cw8MpPbVKanB72KQGttRyeVxYrPjcrhTxiooG7pR9niH1GhaJTTkKGFxaDQ78qu5FYT2B2qEqaDE68J1gawi",
  "key38": "2yotJD7U5YdBRdLzi5YYkrpQRCtCHuNp7UohT175f9jTqxkBbhGFKFM8wvXEexiQXus8vEgQGxvDuEgzGwkACu7D",
  "key39": "4qUxZ6ME3BmGv8wTbHPK75zLkDoQwzqKyb14yJYASMFMuhU78peAGdJnSooJPRN32bXsLVhsHVZp3Gh1osQ7nAst"
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
