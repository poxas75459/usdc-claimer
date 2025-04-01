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
    "4mLfhXcQqumG2vM5yT1NbMMQqkbxGctrt3XAdhjL8GpY2JL9g4g8DFs8UEJD4qhaEYHF6Qw794iMFo5r5ZozWFRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mVQjQF5tSkWfybb8CqATrefNFe9o1sVZfhHojUY7oVbQ1yaTjs9GHAXVwKzBAWMw9ZokrAaaNdeWbUsnS1RAw9A",
  "key1": "9TB3eWNW7x6wyiSwxzuyz23Pw52wNJoya3jdct9xmwDAaWkSCfoNXeiHX59M89sbJ1TFG1tnKJVC2LKwtCZqK5p",
  "key2": "5HWaXrB5eM97sNRj2mwogTm5s4JU38hYpgkPThgzc9Crufo3dp41t2AiWA47ZnKncuMSsYVDf7LwAyE8imuhkFbT",
  "key3": "mhxUxFgUmqSeUHrM9TmFoemADeWFasTSYCEHCcRriSeGjuJaGwKpXXNNHeee9fUfA4UgM1su9SS3izXGSvWi7cx",
  "key4": "3PtJ65Zrrwp5UEX6Af2N5wQf7GNio1ivENgf9nqWptc56Sh8V82TpcPdDJmxoFCWcLr8NcNHNg21Ei9nyv3gLVyJ",
  "key5": "5BYTL2HXt91ux3xCBjtF8MU9sfsXWVdjzWaJt6abPKytAJDPJXtrXCc21kvnkSjbBQryq6bWQKrHAq3dyXc4u1gv",
  "key6": "oiymFbhnxjQHLUoWjF2e3ubBBK2cfuKn1FFyaNjrntmyhxLjY121fEvcKwGXo5ShgdjeBC2dTdAuPEajcWPyJVj",
  "key7": "4hEE3EK8u21PYEfhPNLnkKt59oftwuvEN8A8u68wEt4rhe2oktZv7fbpTnadd6uLTgEUidB6Gsk5V8mzEitbxkEq",
  "key8": "VZAyp8SFNb3qSBsF42Y6fm41Uy4b7B5CsrmakmT7qaTKSG2mG8axkRoyacC7hyogtgYKMFPh2WFus5riruuQRSS",
  "key9": "4qHogdybiqCGd9D8GNuCXZDnGSinmwKp9vScazHyCxYb19uvUpVTRGpazUNVAKfyz7EDiZtVVPYnGHxVbqxM61LF",
  "key10": "47zWyPiGhPvCu2uxx1W1n8dSbVThmnePSvULuE7Kio7TQrJeW7Th6fuSXSJVxApNor57RXbL2QjqsnnwoEvwd7Ex",
  "key11": "XcXdQ3yomg91EHLE6VWrnNrR6vFQdYNnuoQ6UTewJrjq2LViLZDa7PczNtDXv1xusLBs9FG9rVRTEBTwhJrUH6T",
  "key12": "2TvGrmLAi1vzbfSXS2PG7stzamoCVBrgF4Xpp7UvdXMm3ayh8WzM73t3WNjRL184QXSTuESUqJFo3pfwZM53XeXG",
  "key13": "PYqs2Loiwwq5c6Bnr3etGk2vrp1JN95PDYWPVZyDtJAsFiD6iWq31WW1MYpdkqsBdRd5jxVwZEGskuywyxb9TEY",
  "key14": "3HvwY4iK53K3bDrxKtKut3BLkNuoAcfWP4c4YxjBLitZcmp2F2cXgSm1UJr7viEJqXZtt7rkMsNiX6or7wHjQVRx",
  "key15": "2TrnTx8yQJPanWuNkSXkjuyyXCkg3xUuuKsvpYmaa8cQJTewwGKsizgHuTgEACTcKFPKdKV13H5STeC8t7mfDSb4",
  "key16": "4Bf4owKXPzgC73wjTY1XHpYkpeoFfRNka2ehPWG6q21XLTA76YJqhZFzpn5azDCu7aBZVNDbfs7aJngAHe2tvVxW",
  "key17": "5W8Ri2bRbrcpCBRamdjDf7vDw8C96vBgrcwMdPb7jxJKPYtmY5iSqd5zsSpkSafhis6xyPvWD8tTbExHqoQKaESj",
  "key18": "4sXc1ihbwQwN5RdnXXV8muXZZXtQUk6z6UifoazYPfYckx7TnxSFTRbNJD1DKpRhFLeN7mhNdaGSNLaLFMwSUY11",
  "key19": "4ZyzjNsVpFwJWCdvqrKUuZp91TjcvFgfZnsM3yg3awPuqKXEjmEok6xhwaMZ6Z3EpM9rMhNGtX5sEnEShgqQ8N6G",
  "key20": "v14P1YRpTgpLLYFHEVqiRFZ8WKiAWfo6yW5xv2UgkYhcH5j3P6E2rX1xsGw5xUeFRRCsA3uyuDzcpzyjJfyTWx6",
  "key21": "31NKiXM7AQtRVpGBSyxWA8cF4uixQGNmdVWUnmubww1FyiVzeqKzQzeagrZJRDXbfQBmhTnPTvJdG7K9SQR8UiY8",
  "key22": "fpLtZNecTB5ewap9Wt6W1G9AUrb1FQmLeFK6NM9kseLghtz85zBE9kCNv55mBvGzvjgq7hNqwkMgQ7KDeYHEixR",
  "key23": "5f5QPXCFmtkKgZGTYryq1f6bSWpQUfWytzrvTzu79h1PytotgcPf73vtv6EEjRww4J4cKhdbUtB7TZrKugRuaVZy",
  "key24": "2khG7XYwdpHcMTrGpWLQpGMFYMCb9vAQRmRLFWRBBL7byJ8irQJiGCMYQ3TZkebg63KW8cqyox3NvffEeuxqvCH3",
  "key25": "5vGvV7SS5q6LQxxMqUjs6WJTnAysBao1uk47ELjvoojLpZb8DqrJp8Jg27zZReAXeCA72jmW3f5455Rm9r8KtKeW",
  "key26": "3katPyS53n4C5f3tJ484SrhYKuYYDgkewPHDFfeH4motb5Ev3AXajrWzEyowEg5aM3spzXb4jL8ck4Um8J7vZHtt",
  "key27": "VBAiCDHnH6G2DRxZ6UA1p5WjiFkp8enJyEid4MauoA9rnGuQ6iTcNHdFq7Jsv7jvjmtyT7U5dn5PPwYDuFBES6g",
  "key28": "UMYixg6RyW5wz3FSEbteNzo36GrSgL8Cve9A3o8z3nQnoHNUfY8sd7QruahdHgMxvRmErs7eSfb5XkszACbpR4k",
  "key29": "59Wi2KxVC7DioEgdCrxdqNV1iNAG9KZbnvcpUEUXcdUoLDEP4MKgPGUhrSYEVLmG1PMEDukxRzUcQPYYF74ungpt",
  "key30": "2PWc16McaMJtMeiFRqLd3nLPRdxSciUG1scr7jMWyM4Qou2s4ggzCGSZXCCFfk6BbJyFgHJN1TpLuMMifJPe16Zv",
  "key31": "2C4CUBCmAmSGtNeT7Jz3S7B3hUnoZxpcTsRb2MzCKtnCpnkqabeRfNvQRebsqdGFiZ8TqfH9GjQS4H1xQUhFpJgf",
  "key32": "3Q8bnUcJmEViaqszV56Kh2FfUyEF4BzUSvuNgsc6ygKHXjMuwXaaMFQ8W86JW22hUXwxAtLbiHztb9KmUaSwrFcP",
  "key33": "3Hg2a5iAmMqU1brfXvBXoTGCg8esmEaLXYrSuhar5ywvAiaPEiFfw2grVuhL8vZuQqLzHoTeFdw3ckt1mnfw2s3D",
  "key34": "3ESneS5ewMAr7y2J4gT4bjzQXfjqfqbrB6DFN2fVd8WY3ziADMac41z3YyNfqB4sic9LugatC5m7djgUfjzGP99B",
  "key35": "3a7R6HmtNLuTz9tUKNq98aJzZFcAq1MMoFEhFf2sGLzEKsaF5iRHv8ZCP25kZp5cnTSSJcM89spttk7PMuoZWYso",
  "key36": "4bMyh6DefA5TRJotBEYugo6z5gzAiA6qyrFuaPcJoTfphAiWVsqKvBVha8NQ23LHUpSymxxGbzBkAeEAQyFm8Dnr",
  "key37": "2Thm5PtEBt3pgqPF1F4qKKHZJVBYAusfb3wP8BhsZZzTzuYhYbo9D786p7qjSAF7CTZQ2jFGaWaZwo9bpsSKwGmm",
  "key38": "zgRoqSFRXNGRJrB4VGqVpBhdh58UGDZM37eFf4qLNXwXTZGzCD1G93XiPxWjB85MZnHiCsmVeMCGKBnFoSGYm7f",
  "key39": "3VjthRPTLU8mDzmvYkM8ZTddZtwMQt7CMNhVwEDu3PA3wmhasepMasWBKYGTU8GqRnxAfwhZyUyuKDSA7fz1UywD",
  "key40": "5YkXpf1sKuQyFHWmgaqdjJsmU1GX4Q21QmqAuAnTPgR9A9CozR5JcxYjkanM8vWbw2iYFSicGdSTAPVmSi9tekof",
  "key41": "321geymEDeEY7xcvhNks4iGzaf4mqadMGbypdYbFuSj3yNzNxK8gvyvuFAV9BNhvEjCnL35jm9NALBnEiJxQRmmg",
  "key42": "53Y8GAmDfNBrSWRhsrKQ2mTW2mcaNbzQzfcmSHbRuMLn4cQJpsFaejEzsbKEkTYR596pVy9a8iJXnwHwmdeEfgvZ",
  "key43": "RthY9XtMxiABy25gNwyZEpjV1ED3vYGRoTudTBmozr93fDCwZz5ufkXSDrPdpL2cX23P7HSLDrf1v1TXJs99M6Q",
  "key44": "5yp7fS3KnScrst3UJ75xEEBUuLE2sB6KqRtAyRGQSwjG4z1LouXsjA3AdvKKV6CY7iRgGVss7A6vpksACFv1u68F"
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
