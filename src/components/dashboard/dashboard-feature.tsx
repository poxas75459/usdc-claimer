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
    "5AshqT7Q4spxmbWKSxE6UjjthDD4fpJ3HfXeGxccJPjEkC1okV8dqAZxJ8DVZVpxmDDhhLnKi9G4wVpqtpBjWns4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JqkcEfktYVtJZ6q39qh9D5UomXFgFGTsPSutt6HPrW72yRDj5U4HDCEd8hsEKfq85HExVdNJ4EiKP9LftaFQZoB",
  "key1": "5UKNTaCrCBJQX6xDQDfUSsemaxjedCB4gzX5oKknf4kGrhFbhSxigyT9QWE3NS8RyiW6cLKzTRk4vNKNgVeFBqp9",
  "key2": "3jMVaAsgSecaq8b7TRVD42P2JyFQVVLgxSydmoDBSYKDb3zLae76iYFqxYvofn7b3BjjZDxaLiJZceZwNfvrPt2P",
  "key3": "66o4gqWdU7ZAZFTpswPhfpaDc95sGzv4xA473gcGYULfiJEr8NrrackmXm61eo73DSMniEBn422XbsEDSuewreCh",
  "key4": "4YECsuyrhhhc3KCnEQPQY2YEinTgnSqKr2Ubcmoy5o4XcYV7usJ2v1LsatTthDJgBNn3fkphnBEDQaD4mKDuMBNv",
  "key5": "4DPyJAP4DeAsgj5qoDPe6RqmGmWmSEbAnNK2sjxvQ2fRd6GxPXd9MsuqbqoG8DpDv9FCZvPsvpLN6afJYvs7YmF4",
  "key6": "4AQZjkkHZ2ZkSeMo16nDWLXDZYYugNuEd1zNkiFDrVgqVZ9UZWce9Ap7ouvtBiY9ZGiGek3NuJxP5gWtkRsVKuVc",
  "key7": "3729A7FT6yj39jbK37izkZFaBZ74xinmKuwfcAe6cFVPJWJFCwFZftiQqy87g9KfowpjrMaBeYXJK3k8oK3N9p3R",
  "key8": "2gaH69mwuGFUJrFG69e9jLpu7YgsKAvzLZzNP9nVDL5nHMD2qsJHQbuphcC7g1MaFDgHuHmNLJrewyDL4sQQFAeC",
  "key9": "35sk2hYp1DidyVCwLFYbfMP7SWqVHL1U7ykhU6273GduqGPMQzfXfxLn82Pq1EhDVfRtqupzudHcyCDYeQCe1HJS",
  "key10": "2RbaHA7T3q4caPUMnt4CdvggEyZqhNeX85ZPZszs6VUqUWjeuizPLJHp1vfbm6eeJ8L4QT3DQ2SMuwhqRxt242mv",
  "key11": "219oubiM5srNqi2wyT9oN895xJnXdtrc45PPMTcFqyaV7WvWnzQPSHtMFUdnJj6tKjBwiSrrtCsvu3TooAHktbMw",
  "key12": "2HEKFEd11cCP5Rz7wBRT5447ucZ116E5KxyRDx2k7vtFizSZHkoJWuHmWe4d1eRR6NbEH42MqNcgVcVW6SUyfSzC",
  "key13": "5mA1HPky8tTNzH6zwugaSXFjpehspScvUFJ8bE2bscNQkUJ14zRCMK9JbX9AtP3UBSWRQUD73YBWRhdZhDCmwnef",
  "key14": "5rCkXWVJHqJzY4v2ZAEACR6Mg8sfxETUvAAM6Wjo9YyVocLcNdDCMZE7MPz4FcY3DGvEHzngC4QHhVEK4ewH2puq",
  "key15": "2KoH1gBiJtqvMie1RCcpFDACERsQZhuEthn2s9sWNggedibFqNe27DQpBpTDt5W2LbjS6tPyzGdroCVeaFRjq5xQ",
  "key16": "4c8ygnLcmzdGLuzVFUGkA57UYLqX9DmRDcJx6fvbq7Un9hLFE8SzdBmWouTN3byAtffZSNPrGVwgL2Zd8u2N6PmE",
  "key17": "46qzNW4yF3GuaCySgr195aNbCgFZKbFmmdj6GhG7KGjAtueeAiXZJszxTnPt4YQ6LNda95oZiaK3FkH3GBVLoVp8",
  "key18": "39Z9HvznfPfmStroRw9jxQnNyAvge8coh7C5ehBRZtYv99nKRNAGkfWxnKjhrd9nFetenbcnH5Ezxu6hZvxvCXmz",
  "key19": "2y58doSPZEgv66n7RFpSPyX3Q332mNJFnzsajuzjcMPx2zfA9rUNaMtK5v6nZocABVyF8BFjWkwnNtdUsVKJFSem",
  "key20": "2vzjCwaAVVCrx8prBTNZpDvpuoDwsAhQcKs3AUWhnRdDmVH7naxPGJCfTbfuLyMUV3TYNk5QPHFq7ruR9BgVTB12",
  "key21": "579w52hgzEQu7PF9VPgjuUCvMn2ez3bLt1BFAPcKzcEfPCdkLCZV2SsqtvjWv6nxWuyVUSbfC7yZVKN2DanNm8m4",
  "key22": "5yvcxLrgsxdkLUCQTRNfucYengW9w7JCPzmsNnre2nmBxPmMBKMsgcuUpeNRSEh4hf7cxkqpXB9XdLiXpwLHoSZM",
  "key23": "4cKCKzQZV6oALk5dYWUut9fo2FZs8YcgkGrFvYgg4fQ6EdJK26jsvXbKAFqnijNUTSSu95o5VoLmXVfAV2AnP2hG",
  "key24": "3xccbx1p8hwpMmhBYSU9uiej9puuiqh8XkHha7jE7ig97opPCSMErVv1uK4HxNe1rucyFcSfd7DpVABwjVmHQjWB",
  "key25": "4AU35ekHWmXAmf2d4tXFk3oNnmgQXAa66v3szeZAL1bhY35Nittd3bPFmiFvbnf5Pobob7EogmhuAsXitWDMGaFG",
  "key26": "2Ba6q1bWWBfpU1p6nwTVy2v7ARAQAD3tHqh3rFs26qToEpNm5qaAAxiK3APCHcqCXNCxoLFR1mb1jpYjHQmuczRt",
  "key27": "471iDf1ahQhnS9JqHK4tC9z8jeuc5GzzN89oFT3nmDmqUxYbJnwfi3Y7k1e6x2twC1oX2gnLqQ2D3raazRjWuvky",
  "key28": "3KAZfnJkxbu5adA5ZEZz2mQnMpMw5q7yYqtN9z2iyhaTELYVEg7e8F7HbCHSSboe4NSPFTr7NnnBXHVfzxMKvrxZ",
  "key29": "3RXYMyhRrYadMGjFgNyiEXi9gAjsbFmRJund29pJ7x93QLzSWrkNANj3oe121kNRYX4GaeKqj1CAzfWFvvkPJqMV",
  "key30": "44TEr9137724uARakBhMEoGgxLxqYQ6crPqNLaXvo4XWX2J8foRBZ2qdqB4yB9DiAZAXhmnPo6nd4fME6zyo5DrL",
  "key31": "tqNvwrunWgbDxjYoQ1Nr3q8sk6S6LFt5cdxAVGj4mHk9x6FYSAWymcPCcivfc6YhjHHTQkyneRtdJrpAE3qoj2m",
  "key32": "5S3mpW6H1rnZwm5nL7H2p8YshQDHtnyzEENv2JgxumvXrP1CRjajxuRrh5WLVV8E2gyGp7HfhyY76aHaAjiyb2ZP",
  "key33": "5JHB51vp2JjnduFetFPa1u7Gb1HCpocaXbD9sGVk4EMby1drr1f1wvqvn9zFcmibsBgAFDq9eGo9pft9DtjKXtvz",
  "key34": "3cLKiFirYrRM5T1aSMgeZQB12agVLporxGu7zTSM2T9wdj7zEwn4jdh6hZpZF9Y2GmNSxyX5syk7XSQwhzdpXP4c",
  "key35": "23iXJ2nuVAgr3YttSrssVFdSjA6Jm8QjNBwgGKQNqHMtCXuC9J566TPAKc9TrqdZpkwjwqwXXYAsC4GqsamqD66j",
  "key36": "4pbbSErWTqY8SPLVCVVkkBgdJxU99hR5BSaUdSw8qDw89NBAG8YhvCVCC4To3xyYpMXnVbNgYoXNFz5HtqUhcpgY",
  "key37": "4UuC2kAMyMRT8cMRzyszeKjZaoY2qNoUxDX1iVmnwsMRQB22YBYYxfD8fvwKKbHuFhAgq7i5KHi2s6RKcWQDXKEe"
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
