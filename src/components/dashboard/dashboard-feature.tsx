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
    "49XzXdgLe7gbqYNuBNY8HLVNma2pBivcBKwHoAkSZ2TYSkT1gX5R4YhyWtnjEomuTmEaaCMWaFJBupB4KZ4p5mUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FzUkEMDmU38gxKThXbk9j7ApMmj38iPXVcjGdPfctvpkmsu4TZE4m6Bc7a9rttscwbjaSr3RNcL21yTsJtWeGVP",
  "key1": "4UKP5hnBWfiQ4YJit1XEVNiTx6eK1uftjvqj35vXwU6zpXgZYmz8XwnKYRn2tPpUFwVBLqN3psjEFQJgrEBTZBDp",
  "key2": "gCGYnZjkmXhf8tqDMvA9z5wuKn1e67ktDFYHcJThT9WuyZU2Vaj24N7SZVyjs8zrrYwe9fH9AzEeD1vKZ7C7mDL",
  "key3": "5kFeRtYjQN1SbWLXx4H72QuKUbs5kiwaoGNWxCkR4T6oHzA6GAPSHqkTzkPuaNhN1N6gPUK8XHKhDKTHz97Npims",
  "key4": "497P78w1GXnEzXYctqZxcupfsV8Z5C48rtVumrvXEbzpbNhzqijzvCWx7R4xzSAP1mPDQF5jU1qSCsWy4eX1izQo",
  "key5": "3ukvkkgPTeVYgLkHkk2whot1kTbqCVyweAsCmPBzycKYwWf7kgfqDynyFcaMnY6MAtKfcQbTRDYvyW8h4Safn9cd",
  "key6": "2C1FKjKM2yrgoSNy5FQZz2rZAGjCxacxQgzhyTwhy1CUdQKCKS3xQce9N4Zy6gpbLfD9Jv3mDYdgJGQanr2ybPf7",
  "key7": "25xRinEKeTMnoGj61ajLKVcyzUAAqJeZBMN4gMtTqF7BG6tjqgoWp1Yc7jp6rYsx37yRSASxMDVLbiHQVaWLwfwr",
  "key8": "4R2CgwVh5QVEHEJR1gtQcN6M7EWy3eA1v73MswPyAwsTrPPpBzQHiTgJP5PX58ENVGSMsRJhya9JkyeA4uANa6xS",
  "key9": "5bnTUuSBYZzMbtWTrUScc8TMkkkZqiNTJXaRc6ZKgce785bGZzMDgtuYFY86wrXPdW2KPrXgY1cLRdvmo6tSxCU4",
  "key10": "b1hsZbPkQdXN74ABMd5VcjpsftcRNqdyBBRRJBXeYYuQNWacR1jMRfGeHoePoV9J5vb6qmd9mVmKgbMG3QJRjXu",
  "key11": "43Uze35fNxcrir1sF6JKmJdYpGcrSvsQ28wFBS6PMzDtVFMfqsQ7Sc352Vdq5XQKqy9wx2XbEimzrXvAG9NN5p5H",
  "key12": "5cUFf4mGV76caqXx7ZDq92ZnW26TSrP8cR1vvHLLbde1ADbNk41uRmLQGKne2LKKFEmAzM1p7kvHR3a7StjDEM5B",
  "key13": "2324c9UEpuFSLrGUukjjEtQp5vA7dxubtRegnuxuYec9fu94sAmPiRerY1JB3TBT7sTx9im9qi2kGuJMnw8bVZpt",
  "key14": "2gqHqsvTgm1ei2mzxSrTGEzwSMzmpQXYa6D8NisVgtZL8wB8ggLdDKzvQjZpaLBoa6DucMm2JH7JcjotjYyCgffb",
  "key15": "5bcDzCAhNBFVDjaMupJFBB29TYcfupAdi87oVGF1TjfdR2eT4jaW3GxvD8GC8ycdyc6f5igQKvRJRUTD6E4Xv894",
  "key16": "5YmQ6YjYngP7B9QkohuoWq2k7BGhZdERJsMK5mdC45VDBMw94i8XrmZtu4hdHH7GCi7vtvW4t4PuuYh24BiqXxSa",
  "key17": "5VaeU8ZVHjNVRrT4kP1owaMBK2XM2obS28RewK2XJX2phc1aQxQkKRgLcSyaEmof28mf6ViCnQasEvk5oSrF7UNz",
  "key18": "44vSp12QRKMatGYjdpipXkxHUp5z7H43qSiaptJhALnNeqKn9CtHfPGAaEhZPzZqRHeZ6F9bQzXdN3LQkgqYPFtG",
  "key19": "2vRi6A7SmXZ8tWRifPnZU4gPEheEr5y8hNsRFFV9ePLgxccU5hNbpE9e4emCz1kU7XJ3eebEpYcrtNeShVhAA1nd",
  "key20": "3TzAo3hSWVV9go7kivL8BZufDSHF2wEpGhRNvkBf2w69Cg3nCSsZHHPh7FnqUFvVWMmVf4DiTt6Mm8roR8UNXepx",
  "key21": "wzNTW4dPQV6ADYECD9rwPSGvPwztCdPRJ7rRXrDNN64SXELnCTaRhrczv9u7ospxNLiMEir2QzUHP5oHXpnwdGC",
  "key22": "4BASfE2Scy91zvgUcH4LMJXrUSVAGrHUWB9zP4pKzufRfXPMkZhEXQt5psmFPdArQAxJG4cbeRNNZEsD6Tt3DS7v",
  "key23": "5jjJaKm831Eg6WYp2rybmWrquXvvFJp7ET8Jcc7kcfJSxh8jLMmXxXRCx9bgYcNweCadCM67Qik6EG4pdckAFqU6",
  "key24": "wBVfFbXSPigg7THsKJ2renoH8CvBJWgQaitFapv3vowutZ5wwLzmUSoffkvaAFFWmptv17PDGk5XXhBD6YqXpvs",
  "key25": "5Ex8dT2U49k94Kj9c6LCZ1RBNECmPr9JTt5tuR92pzYVdiRNwGK9ACkkNqVgSCCbxtrqE89sanBiWf3RjvHBM6yF",
  "key26": "3JCMAG2MarT4ZfHNTXFG7K7wuxTTkQxKjzDJ6PqqnkQgrpcBjhojjWcz7qMBPCgBrgv5qkDikSo3mmdFA5oXhVwT",
  "key27": "UtE2C4xiDRkAB8SWFm1ik9NjSUhQcbbKzET9mnJoTU448cBPzY4boxdGnhqthnkznZopEvWcshZoGJPrxteZVF7",
  "key28": "5Fb6dB8e2jcrXjrw7EtgxSKwFsGJSDEzTeros2ebmcyRqWKfjKACTRetw6gDQaLVTaeiq2eypkLFA551Cdx4M2zb",
  "key29": "2H3u9ymbNuHgZH1JyuW5q3k6BqGndSzeWfg8Uh9z5ZWkPqn6oSvNvJsJa1ADyFJFqVik5Yj4VR25LADcoe7tCFam",
  "key30": "5zauyysjgKcJ8SMXdokgVAwck4fpsfGhcDVChA5BCTRtWzhCbSiXkRHC3JpiqjbAWPNBQdCQj5R7iAhvW4Gkmf4c",
  "key31": "5mfGLEWfiKWD8mRuKpMG2Csc328v3FPFgZPBkyifFruAwYJAG4hSpfFWK3Wpu6YiExhtoxxPDYYP2ytismenhzXy",
  "key32": "4sX7SCuEoS4QStTxX4LFsgg7jALL6eiUUD35ZCvjeffchniNcEga9hg6WAs7oDc5ZdQwmNbkpT6GST6HZ8AprpJE",
  "key33": "33EvrJ5tPHCzS39Fa92knyTjNyi1nmi6pVd7YBiV4g2zNP5AiMoc4VgsZe5yyKHjm3n2SnMQ485nXcLPpr6J4XVX",
  "key34": "2zLR55mGQ1z12XWM8RjEyaNC9BW8qck4ZVSBY5PJ9M2Q2ockWQnYk9Vr2Y8F439tej8T5VvspX39fDe96eQszDzZ",
  "key35": "4d6j9Fq4hGdwrvhfEqJG1xtyBs9ZyVJQ2NLuHqDWukcgAYi5et8fWJKhJu3QZAeT89LJRdZhB4vpn44FWGxe6ktw"
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
