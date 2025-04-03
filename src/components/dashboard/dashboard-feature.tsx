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
    "4A4CynbnyEMA4Wm9gdv1HSXkb2pX1yhk9eJjX3uiztaSEUaiQcvH7Wyis8miZvgo6WQEHJRRMAph5cv1qw1Mackh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDjVe4zoKd1jMo7RahCv9FftfCBhQpjJzzexjR7gB2XwEmxjWnQAPdVkcSsH1c4m8M5QajqF5gfqVy4ATTYWWVg",
  "key1": "4Jk5AQtPSTSAox1A5rWwneK6G79RcQJW1VNCTk4Ed3hMzAe9VCHeLYqp9K8UDEYo2fYaihfc8oNaXMLvq9qAZxyC",
  "key2": "7D7sLAQYpPsUinwrj2k7LnMSVVxqAjMwSBzcW4iv4V4JUoqKWJwdq4CPAF6wjimJcUt5rWn8vfaLPg2wAVNJGW4",
  "key3": "3eNCG2wjxKPY3vyKgtnxG9db191HTbjC1wEWF25bPagFuriAZMNro9nkfSRRu1Y9MqxMYw56dMg1Pe9xLXPhsbtm",
  "key4": "4Vb6sFb1TiyqGTLaoVcN4vf26okHGnMgxcapVu7W91LqkW4Y7HzECyKU4rbssmbXQuVFxUzmgpNLhLpeazYVdBhf",
  "key5": "4AXmjhrj8SwjqQYRQuCs1ERBNLePqbiVSuaerdCKHNUBw4kTPUAToPEemr41M5CfSLtSF72Eoo8yi7t81cAXwaS3",
  "key6": "59MoqZpqyVRWAbcSqeZCBKRuZY7RZ2TyroYLTq5KmWSWxzYS2sDjkE4w75BxvkPRj5mYzmzC48ySgN4CaGaB25xq",
  "key7": "5WTFrRwS1ERk6SnEuA8JAxNNwfU9M8xfJCh3KnRDRqwxB1Qdk3QELS98XH9sLmLU22kyhdLFwrfiQC8LZSxRgRXR",
  "key8": "zUsgrHTr5VTdaTaBk2P4Pm3Moqh7HNnvXrUh1JpjL1j5KdNfj6AF6jtxhUibEYCPvuHeFUroVBeRgGGGC6oiQA9",
  "key9": "2nduoY6geFxjdNmG3bGe81HkjjpCWitXERZyQgfN5eWS3G7khft1X4Mjh6ZDKCHxSVdGHqUUyutY6w5WwYzfi1Gw",
  "key10": "2eRZubZBSTggzKuKHPcid6Y7yngcECkXyoHVDEagaNXgXXQSB6JgEGh6aiuS9Z8WEUBuZ63k9mNkjq2ge4Cc5Hvn",
  "key11": "324gEtCpcekKvhwjqncBAyMuo9vF3LxUoHAWdn7YV2ghsGUSyQvQNYmnRd61KDdBbw8UoV5L8PESSwKuX1TDqUUm",
  "key12": "3PcyqjRs4vHUdg7AZ4746GJXR52wdvdsfv4aFNy82LHcE8qU4rigpi9hJvKwbM8o3CDEUUmxkPhfhgxmf2WsYB5H",
  "key13": "2Ro8rT2ehPuJdqsH4xwRfLT3TcE7f5RLS6mfhXEj2YayuJEihaGiKcujFqY3oCWrNqYCzFGtSdZmVAKV1vaufg4B",
  "key14": "288pKvf8zfgP7jT833YUuX9zMTGV8KWpdztkfzDU9ZF4kA1Md1Vi94kkpvoPdfvm6tRq1SCKq2grkwfQReF7QqyH",
  "key15": "3CfZ3z2tJtf37ZZo73Sqvk6fs64cszhCNFfL1qPUHXka8mrfmi78cuBg46rY1z7PK8LHrW7NdCdCFjFzpG5m8Hki",
  "key16": "2MTNS6K7qAQDXgwU5dDy1JNyg218n3QWZbbuiMyB6fcqafJ426tdVVuaavQqk68aPSKjRf164UvhBXskk5GZD7Zx",
  "key17": "5U3BQJAcvugS6Wvem1ygrm1Nzj2wNSEK3gJgvJFGpvbdUqHP8M9AhBBkis4a3BSMb2zaKUbdHzB5ZjTTj1LNVjC8",
  "key18": "2BExxcyLXDPaUsiqJHx4yrH6KoUKEFzUcU7XN2BkBMhFHhgjXJUdZ9zHpkbkR32vQNgVyniNcNUyTeFxsxesHtig",
  "key19": "3NeM4cZ1QkwheWmDoigRituJ2XDYJuuCXVUoQfKuqMxzN1dVDtGxKaVfmJLbAwGghBE6pZQLB7qMxjw3gBzXwUc9",
  "key20": "3T2ZHRG4i8AeqRnBprt1XFsvKNomc2EG8TBuyCv2ehAPLAVUd27KoF8y2MxzQfkvbFnPtg1SUfb1Mk8SbU9eTUrF",
  "key21": "3ThhW277uVWLUjQNqMj9cRwUGNnJCrsV6KQobtMchMxaUjkgCGEXwtsGz52Tkj1SHrRrdc7mvZhxrxQ9LgummsVN",
  "key22": "Eg4UHSvEsN9jH3vwYv9qduPK4EaEnVdV4agPsVY6qLHHjXC7GcxHkMny2h2uzd22tsBqc8DQsLHF52LPvZzsam6",
  "key23": "61q2jmJp3HbK8W6dUyDnxVcv2vpczqWXY6vW5N4nxTQfJPDdxbj3eWEa8L8K9cf6kipJ2ZP2M5hXwX6RcHwbnE1P",
  "key24": "4J3qaTyuAc9Ad2AewDg1k6GET7z4J2wAEKhE154DwtzQUvVycdXXH29NxrZVusEcaziiTmgvKBeUQhcDEyrMtsGy",
  "key25": "5WAiQNPLDdpEkJP9hEQefDNB6bQU7ATRKv49bMsD2p7xCSmPhdW6W98ciNMFZsunVZfgNmrL8ULqVZMhbP2CYXMn",
  "key26": "3SYJZd4SAVcfCP1BXatkPbRhRRfYAfzdPSHGBvusyggeAcb6xUUEnnVAxSZsS9zDhqKdGdjcAGXBgzTW46Vu9aQS",
  "key27": "2Dne7Vf6oRVFjJ9nMmrNBePmqBk8HWDqD75JiiQUhFxMFoCFmEFAndWc5HkPy6rHJSi6vvWevBjryRgwQZiiNFko",
  "key28": "5wfDj9ydBphHH74JuGNTvrYG4SnwCk1vreqLnmnETjxZKE6aK2T32LRgXQAo6vba8qkbSNUvR4TLm1cj46M8f2S8",
  "key29": "B5Sac79jw3M6FmDQ641SeCQGfaEjXmMYoMHpiDGRHmcnZnbxf8ssSTvz2LUibtiS8W1drARypM4mYkcEt4jWkaq",
  "key30": "4vM71pWTMjk8VgpptE5p8gDLz1PqgHBcUwGiCEZWHm13tp3A9vqcCBbTygiLGxPQ5nYT1ojN73U4nufGx7vNsycy",
  "key31": "2gmnSrfUWoczeUexhKZwxU7uv1GKzdft9WkS2ukYy5MX8k39LQ1D3uBvLHNnYycNGx8DcAL3z6cyKhVrbCXNPhUE",
  "key32": "5nMvMpSveNNbzR1WHBGHtqzRKHVRGJFtEY6KW42X1rHzuGdyqnwr2FuV8JBBM26wksMDNDDkReJQ2BzDRBR7fbsL",
  "key33": "5LCnR8VADm2pYoyLMCURhCFwjVMSgNs5hDEsXE1tFKidtEw3CweVfuGBN7mTuHUWdsat82TxFQ9bPyAK9cFmExU8",
  "key34": "3GdPcKM7Z7oVvNVPBK8H8ondxPUQuQikN4QRzXD66Tper7d4AxnoYRuuGFqkUeDPFkaFZJadEc3XqAciDiqu1HYT",
  "key35": "sHFBtqhSZGaUpLSoVt2fbT3f7TRVvRQFPMM2TjSVe2fowe6CpatUwtLBsPsPUQoPCu64Y5eHYDxFC86m7LdBG1Q",
  "key36": "2rS8uNghUaRrfpMsUETndFuQiQtiVoGGDZPEabtcf75DXFnYwUYNmjB3q56rujQ2NZDH85fogWbJS2VYWapbfk94"
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
