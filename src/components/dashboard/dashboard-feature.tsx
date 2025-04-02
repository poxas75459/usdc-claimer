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
    "28MtQBh4HcFmR43k3TazcPVh4rnW3HNMiA1LwvfeAx5c3ZDAKQUTDDmhikqqo8Pbap6Jy3EkRcFqTSa1ptpV1Sfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g5qmuafX1KVyXs6ExnEEkWqgkyFBbLPSw8jQhMChQhMEkDa5iZExbsz5bGYkeHrpNcSorhHGrJyy2o8hJrBFFEs",
  "key1": "3ZAU2UDqb3hcWPGn9adRUmH9dx3HYGTrrfevGdPbEFHC6XuUdYX2PLNdHYRFCUkSHqW25LTDtzB8mgQ7W4wBrWWD",
  "key2": "5nqZhaKH1Pnyw7SogB9ztN3g1NAVuqhWznMsGdS4iBa3jH9erx22tNZXhu3THd5NZKdk9GhYE9kmVdYfZYmBs2rG",
  "key3": "27sCr8gZQSKXHhsUguFzVozB3nJue2jMkXeXdvktDWcf21EEDfuK7BHHCibnWsK9rVS56hXqiVQ96epU4wg4yGzr",
  "key4": "2oFe5bUG5JFnSAtM2kB2duWvVhjnM9Bb1qRcikkfhkwexNtosJXNkhTZqUDZ47yTqcrjZNoSR78Y9oxhK5L6rzy1",
  "key5": "4gk1ausSEeaJrrGzzfphSxKcLAd9E5cUQEMWvpJ2q4CrvWDbnPsHWymdBUrQsD8nQ98n6wQDBG5PU6xwbkHwc7p9",
  "key6": "3VSqSqAh1z8RZ2eHHi6U3PSuMzgYzCsWkssass4XeEWKiQpTUeKB1nhfhE52625pLH55FJV654LKa1ff7Fj4SoFq",
  "key7": "4RjTqsVe29c9nv6XMEVXE6F2h4DJbvoWaBtAXznz2udULrQkZsLN8R4eqCWmKUUKQHRW7YzX36HqFJwCf5a4yYz7",
  "key8": "RCdAkgcLSmE6CJMhvQN4hhE3mt8P7GxrScLgtjsoRUmVsKDNTUBuMMYHwXJQDL1XDBRaAPBZdN3h7TiescMKxdD",
  "key9": "2sdaSEbnNexphG7WuAK4A77w9vKoQ9AsUJuvpLBSh5PAtEJLGXgRfQPUE7bJc4j7yYXZ7gEsLzmo94ULnW9J5JW7",
  "key10": "5mMs7XwU51fYoTygT8SmGDuV1uP4SGCR3xbzTm17VCZZYZShbhpitMu9CECj5AjJCUuAZKR1HUUxt56qoxMTYzej",
  "key11": "3ReG7kV6g9cVrMskDFk9FyeSNteJiJcndN5EutTUWTZeZFEkoHp33XNZ7vwCoGtHTtqg7dQC2Rx8uN4V8YjoeMq2",
  "key12": "2zVGBadzgQKdmUPG1S2pVDcJbutwVemUNjZh9mWrNDef46a5gntejjMtxPvz6AX8CsXxZdkLDvHa7ZKQqug3sx4o",
  "key13": "JYjUTLx28X3zXy3umcpJh5fFSZwsvnZb2CL1aM5hXRAX913VTLEqFzzRSFyrEZEudgD6DVMkFfchro798b9o2aa",
  "key14": "5kELar22gfzgY3ep21nUCcfYy1um667iKy8zSswJcLRJ68fddKcViWesW8dLJjki1KvmD7ds3e8CGHsxuZJ3nWoY",
  "key15": "7wiiPmt6psMrCJMJzeQuU8RLeC9KbiFHz52veDgg8op1C4L9VZ5tgyfGMnNFyzcieBq2StPpcWU2gr7bQ94VXCZ",
  "key16": "5ofVrLQfYwUamziZGTQVUWNL95qdHwTGpMgkn2aVF7Lh9FqUx5RW3KmLHqF82uaphEgdytttMyDkuxWPtYRC6ALg",
  "key17": "23d4mnaG2QgYdBxcod9yXEKXiEmLpa1go47WrscYj59wjZPmn8AdC4PB1zxH33qTHd86vcrFfsWfcmUpsQZqVZBd",
  "key18": "4VGaTHEgCsoh7acnhGCgAKkwNZ2vN8MxpCm16QC42fZLW7SpLEcLaomphXdPKoPSB7PnQ2z3ijDnnJXBFWkheQU2",
  "key19": "2C6TPzX2BKDqmjLLLPfUYK9ZWXAind6LBqeHDZyCXou3NDkY7Tttqw9TS1Ft4EjFL4yyZhghN6uQfPtGweFNnpUH",
  "key20": "53oMSvk14XVEpWqv3ZfCcGtqZMdkShVkXFSPR3pyMAVqWQyyqx2u9GSJNH4DhFNfjSxLcMdij46sSvsNZzQ4xwa",
  "key21": "64DSVWbkxd6i6wF2QrW9QCimNJnaz7T3AWo98y8UaCu6RS43ea2c9XvYx87LLvDxjRPdff1w5q16EmCc3URJJ4aD",
  "key22": "5phoCEvAteZcFv4xCkDPQChRDyJrRdmz6qPNV4osmUt2ALQ8ovZQKUfFHFUtKhiph8VivpYZZG1Wodj2Z3iaiVVv",
  "key23": "fBpGB9QtgdLrPjYA7LbvkMd2q4kZXbKeYDo3thvHhoajfayzkvS5y8v5LkzN1fPgjsxhZieH7Evs2Qa2FsWX45q",
  "key24": "3DRqj7zCaVS2kFEiRrs4XTU5dN3LvagWaGuzjYE7xRx1WdJ1DX22NVbZyFpRm31m8BELEou1JUe8YK8AaUe5SF2f",
  "key25": "3CL5SnhmB2HgQiH6J8GxC7K47sQrhQEuNntUVVVfXnwKKCgCq7kAT4Bu1ruFfYgSvCoQPGANiHheguK3rtEuzbeE",
  "key26": "4dZ172bQYXJ5KtsF1LduNP3npgpqba4SEyro9BNQbMV8P5ZZmAZe1AzG6iPC4urYWPXzP63RfgU6AyYSiqXfj1Xw",
  "key27": "3LWMYFbZ4SkydtmL5KbLchuKcKjrgw4dF1FbDxkF1gyeCV4mQkziAsLs7kAGFzXMp9AjLfhZiXiENvBFgswzfGYA",
  "key28": "4P8xfg9AuvebS1DQyqwNBG9hn9HYTKkdiezUFvpfyATAzbmktYP2tNPSpdQsDHckR9yCVbRtd9WunTpXfJwY6QKX",
  "key29": "3TKDk53bEwxSp7KChaCCmhaZcbybrwcFwqwYKLAutqFDDGawMnaECUJ6xWwyh1PBFeHwEdRtWezCY4SmBVEaESQV",
  "key30": "2bKq41awox23E6dD6ywxsHnvxZ7632DM77h9MBvMaTCn38EfC2qRt38hbF5haMak629ZN1PqVTbkMZt2RJqiBpMQ",
  "key31": "EkAuYdRDd3VdCGFa2skUAsuincCNnP3wWJTjajKCgEmrdrRGwBzXKRkH2BPQekjMUkc9twxvo8funWabA7ySW3T",
  "key32": "cJFJ9SG2Na8hQHqjCTXqjCaYsdgDHR57JhuJQRTjrd5kxUEX2S9N4JdVdKsPSG6dB16XGJiqYso4pUtUJdMMnPh",
  "key33": "3wEEGptYHQrzqSyeo7vj8CKhLrzZR4xjtGmzSxNf816WT5uk1iKHdcXCv3sRh1RqTdgwgS9ZmvxLvDMVmENca5MS",
  "key34": "2AR8G5VpK2VfLWxiZTd6NSVbwD4RhCLtKgsUuVNapGq734hzwCYGZgV82zrVvf76fF2D1nkqchC1N4AzqeV8LZq5",
  "key35": "2meMvCgJ9BZ6d6VDQx3hNPJ7ZrP2U7ft88fx8f34AoeDPLfV8iiM9FvJj9fYVuvPmtPxYCFwRwTQy3SZPN38uPng",
  "key36": "5yi911tV1onSYYXRJm2v5FH8ov7hXLmNLxy73HkW8qG9no43eWATuQrXABRX4CxsxcGpHdAQbeXXJ19HFvdQ8sTh"
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
