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
    "2ZUR1cVTVjhhoo8uZNCPsXSN7xC1nhUqB6MH9sAxZCW6JPu4N8C4kDY1P4o5St5hHDE495pVZ6YLbpTXiqDwyFQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RVncq17AeprkuizcfrtfSBoG7k5DqNLitEefdhkDYgp8N49DiPC3gnjxnYmkiMfTHixPZDLws72yKRL4o8j78sd",
  "key1": "39vZdqSgrc2ApxpteQyhjCoC5yrdDzBWk3Nhsd4mazSxzRHudyo4RLYdvTovBFxuRh9U1cfXfBjhWCekUbVSv8cH",
  "key2": "3pKoYN4GtyG4LCq6iQSvmMeyZC4aFwUfEUabeBy3PLyB6s3V86as93r231dFojfgKDcNhmhdGozRoe9kKHeqpcnT",
  "key3": "3erSb1nmDnubH7LvsnSmD477v2FnQqBxdmSmFbzsYSAd5b3FKJQPdkoPzQ5mBLARomkX9QM8TxUdQL4L3KxrWeS5",
  "key4": "3DsvDfCskZBeYj4LEKLibMXY9M4upWMNJvAr2zSFHxCr8JRv3UrgaqDxBAqrNykSER7xD4pHVMpdUeskFMaaqBkr",
  "key5": "583Lq6dBYFpBdRqQzyEkz6UKeibwoEgv5Yq3kMKBTMVvzn2pk1gUktdKAiWQ1yKbnmmNSXpdX5rGJQqngRPffSmJ",
  "key6": "2BRKuCc6RyMBPtt3Ggu91Brtg2FcXEYHdi3FGzvu4wvP2FMYrWf2Jrk8eFDADNxbLhPZZFZpca7YtGKa6JRFm3Rv",
  "key7": "5QgKvNDFyDMf2X9EZ5uVyncBBBEbPsmf7k4eKfLfLzsDYcQFNvEZWEtegpdzYsjWnRWZcwqDiRzG2wihFQD1BDRE",
  "key8": "Nj1cve9UYvL5KD1jU8YUVifZ7vtucFu7tYahq6omXCX1sTW2Sc7NFaEkRACepK3ACcYNAdMPLZHq77AAqqsrRKy",
  "key9": "2sDCXASfspnGSpb3NU5Muvsw8JUHKv71SMqW3kDxufp4NCtnMojouQcZcoZB9PFSMjCtFxWvgVMjpWdikRKJ2WzA",
  "key10": "5tCnvgoG8szbuRRerHe7bY8ARoReJgLyuLt6VzfLJnv96Cax4MUwiBiSTcrWQEDHSZ5sc25bTB1YTf8ujVusdioN",
  "key11": "2UZrXJZdBcyVdNX9fKobDincme9eVmXYCsURfFjUjHQhCZGFim4TkkCiPjyeQc2aFZhCFvXrFmeoJEWxWQbBFgr4",
  "key12": "2KT9f6x6vhmgzeR74MpBD2Dq1HshpMjNUctGdxZMDux6oG7Y7BLSepF83n8tiHrjFhCDD9xZ5rjE5XUWJUGeFpvK",
  "key13": "178odFZTP5T8yNsuhv6hamzr57cUEHaLCtn57FbZFGp4NwV9q5FjV23VMkwP4ZnRfS3MUDBmC839yjckic2TS9H",
  "key14": "2VQwFGTsPzz7guM11TJiVyX1NkhNKgV6ic1Fx8gq6Rt3agd8gApfzFcwQG2By535prd3v98ooddHNjV2GNnqijG",
  "key15": "5hjrNYdwxXS4GYREZYVmW9GvPCiavppfLRaSqKLer8y6NspnCAJ6h7WHdEDVQEUasP5KNDSwbNEeUsM2xaVT7dgZ",
  "key16": "65YjZdnMLeEXyMFckqqH7vWnim6gweJA68jonzzsNU6UruYBeBoH2H8pbEEjx1DbDP7QghnxAdwhc4s2NhvBNqpe",
  "key17": "4YUzSjrqFEg3NmNGLsia6a3EYQKAUdGRJ69GbPiR14fkV3L7J6bb6tTk5yBUPZhHzg2DEQaf1F8p5TVWHSLDqsox",
  "key18": "2WnT2iy5zUEHfCKqxqMqd5Rk7Pn8ZYgCpV5qXk4KNdRBZjYt179g468iVmkMSucac3TGtx3SsQMx7tHg4Y2wWNyX",
  "key19": "MAWVHmMhaiAWS3favY7SAiz54gEg8MNC2e1PBRNhhp1PYg8X2nCARpZaDuDiGLFqC1sCjdHmYgDknB6LdNUFBhx",
  "key20": "5zxmWfECfVKiKBpPmXaaHyDdyBjpq1w562rSMjepejBbepVxSJPG5EjtGrBJr8wAwLDi5vPvZQagKxhxsb6KLYPN",
  "key21": "3ppLgbbnXnBh7uAj83tLt3sicZeoKWeGumcMGAd2KfdgU9qedU48hYf1Bfehd8UFZGdhA1VFp2K7L8onm7myny8U",
  "key22": "2SmZ1Cq6ArgMyf9EE4QayQdpcQbseTcFx2Ug4LwunkEGcUrBScqNCCjYuAuRux2Q5vWtzhdhaEJWpt6FigrM5pz1",
  "key23": "2cEgc9uU3MM7yCt9iJRarsmYyzQWaz8mV9wvzmETbYdHGjLdjDYEKVjZLSga5knbJhwBdcobjcTXF16fHu77HWGW",
  "key24": "FQeaZ88CwV8NkFRhjEUABgy3rhFWa73Vp931qhPhxDBVYs9Xn7ADu91Ke8YAv9b8aLsPB3Ko2RFJDEdbmMjiRM9",
  "key25": "5U5Yofqy6WRpJgAARfnstHYDWiwef5EnaFZNsY1kJUJdyP9R88wSD3zWHwGpg5ejg41DwuCQCwBDFHwQBvzctgRA",
  "key26": "4WLzGAFbpxgZm5eW2JzULoN61so9VMdSzB3HAnqPu3myvaEkPBmUTpSQtun77fCLNp932dqHKR2nQSjs4czCHRg1",
  "key27": "5yw4ZpsJ6HBan4WKzqmL4S1DrFiQF8t9TaWm5BvsmdVsGuHrhBUZSz2mh1AhsexQZ1TsSQCUUhJA92SnTuoHN7Ta",
  "key28": "2wTPYzN8eKL2rcRKcyuXKJCtnCDpCruawHX6qpbgXJBCaU2hrg5oBAdiC1Z3g3RUtF227bNWgtTk9HyZEeu9hTeZ",
  "key29": "5vEM8NYEdm6Cn5AziCJ9QuT4aCgJsumP67xh5nhVPvXk8fMuVwBr9yL2h7jgfUmKJ9ADEeoCzEQtY2h7h9wRQvir",
  "key30": "3R7D7Dgh9oN9uNz7GTRc4LXPYGytPRNHMfR4GcGCU6kRpMyvSTLDBw2fkjA8WZT5YcmWpnZXpq6G9M3NHFCnV1DS",
  "key31": "3t7m7WW2qrRF8udxrVicp1rg7ZAeYkPoDkCLTQkVk8YoAVVbutCnkXNYW4kG2kxE2BTfNbLDwovVk4cL4uqpc6DH",
  "key32": "4fmRnWJoYdi9hNDXGfi2kTgST2HcWE1T6h83azL9eHYFXCX9pLMmCJdCzRyCrLomUE4YjYm89CH2kifowCZMkfNR",
  "key33": "4gXup4kbWs3PJvwLPMWCGJfVV1q2588W5bS91aQDY5BjFNMcSfSX4TdG8N3qWuRfrPZmFvroYsshABrAnqMmjyyU",
  "key34": "4wE1kRwk1hg4WwwyeQCAMV6wzc6eZtehjGLAYjBEmvcwYXAfLpJqqQ8N493F7gfpBqSxadSe6P9mckUJKchcT9og",
  "key35": "2iQ8C8sWn7GDXipxqfvXerT22cCVurrnonXv6h1aDV3Uasio4GjjUtn7Z2Fzg7QA2LF8QAEA2ira83QvU8etJwFj",
  "key36": "2JJq8PcUXjMHmrmW9uYwzi8gg5E1iPuz6GBUKb2TbFZ1ASDaP7ntEY48grXie8Wd6cSJw2RRtUnawtrr7Wf9Jvva",
  "key37": "67kW4dkjwCsXw9UNVGUT9Zx4fpfXtzMqQ8pctxeCkK9QHEq2TjpiTRCEgjVmM5BdvyXbt8kBsRb9YYSZXEpYcJEL",
  "key38": "2pSSVebTmKLoUF56NwowyivzsZFYVrpzgEUkcafZdzjRZN6XdzVgSez6bnXhryRf6VBb8D29aQyauHxxro6oUBJX",
  "key39": "29wQFUfEqdSNJBoavxUM6BeBZAMhzRyHKa8Ed3SPHZwV8ME2aHSRro5LW1o4P25CeWLBs5iPSFNLjTh93uGGRMBq"
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
