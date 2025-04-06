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
    "4nRYVpJY284GkFFo1cnSDLr6V4iS9TGkYcSfou3PRjDZQ2SGyRFm5VvyLJMwKzgoeUR1fQte1tu9TxYhugXXMe6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sD9qdMTpX5q7xto2drTKuRdNDSdNF6MCYm7uwa6MwsKJFfZu3jrCkbVsoj7A9wvgB6dnSyybCaQNuyJGtbcwwsx",
  "key1": "NuMhhSbRtyoFmhU1Jtor2MMEqJfjYVH1kaDY5PocB91jof8vvNzCEn2Q5t2RYzXSeFCxcW1ZKAYtZkWnbBzCbNe",
  "key2": "5np2Hw6iAojuDEGFEAHuCyLwMXJL6gJpr8tkQQ9m4F1VfwhSWbp3K476JUDT9BzLsnPYFaBq4i8sfLhgwkWVvVfH",
  "key3": "4BUHePvJjSub4V4qQMbgzNRaqu2w4ti6VUFAKwfqHdLA6UaSFkfvuYdv6hsZLB61vXwwGqnfQPLzXQXFtRK1VDej",
  "key4": "4PJ2YKDZxxjVGDeomh6G2NgN4qb1hdzn4DfZVLoZhNuUxVGjM981ftWVMDD7wp8DoBVrR57Sw88QKbqwe7wgkZ3y",
  "key5": "3ZbecbcQNLW7orAEzHeuNN43iAtT2iMyqvfFvT2cDFrYd7bAw5dAFDuaJGagZqP3nBrKAiaDV5bCweLj8RoSMFUK",
  "key6": "2JgErkvcMVDVSBgKbuojkQMUuzeVi4ugyrWSUbSs8CNrQ493xzpxeMib114Lsi2DtWrjwVssTw8pJRW1aFsKPFdp",
  "key7": "2VNTXYLiwf3f5bEVSWhtWakkrW26eQsTRfmipX5jk5ZrvfTdEUqbeuY1rPTHeB16QHJHwMyZjBMSuNh9ajJCHRVm",
  "key8": "466dLkPT81FqGn5WQMRPY5PygK5KL1gUTM28z8ou9XHBSJ3MNGwE8bkymGMydqdeEFbkoMQLuxgSh9Qwz82jE2rV",
  "key9": "29ck4yt62Um1UTMVjTjz4dS34JPC3dJRT1ncCKuZHtdvwqhvBqRWBtnuASpGfJNBWV1825Khz6oaqzRYzoBeY5ze",
  "key10": "4cHbYHmcE57T9MEWK4HQQStG4QsGo54i8ubWuostPfF1wLvUTCRzYZBky3EC8oVQgUykC8nsuvH5bTyL7zagsekf",
  "key11": "5mKfhHgdmPrPRb6W91pnj9MWoFtDZcUrLrWGMHCUZhsSaMycTG3g1VaC4UM1t2e9RmEkeid4dxuVJiBvaESKNksP",
  "key12": "22GPBfZJavfC2YYbYyWcQWrvksss12jrBqQDL53KvvY3CXr83Zxc2GUJ5pi2RPF6EtRC9JAEJbnBnqwuwn9CXgD8",
  "key13": "5an6wwNdEiThCtVamSaaezxxJPtVrsP9VqzywATVpaSJjcfZSDqj8Zvk1HrbsVdyUHadWKkXHxqPRESoYVzqj8Pz",
  "key14": "4wsEDDJK9VkWeEkmebDuNdbrSbzawExQADBFSmNDajcqoNeAJH8x1ZZykuPS48BprTAWYXz9Q5HbwJ8uD8PpqPCw",
  "key15": "MtewGwi4F27WxFHs4S1kELhusXHBgAnwyqZAL4RyUPLxVegMcZmXGJoB4tm65CGgZsSAe55z9xVn4iauB3LkuG4",
  "key16": "DVA2V2XMEjifYmnahSQeVYnrDCnmvxsy7u28h9K2ueEM1GGzR9narGJEfjFwqAU8JgRkMVxrn9nG3ZTLdbS1FJM",
  "key17": "27bMabc8Hk7CHgJUpz2J7RhzdTFRHxDbNozsZxf8GhNWBcUYJHvDFvFHLRxRm3nq1tjDHfCEfJRs9mSfadtvjJmE",
  "key18": "53oCT6nGj2iW85CSaXVXdMpb1suomzghHrfp7zg6ULAsmNuChDWpB9kcjGRN6kE8TE71AQh1bKEjbfa3TZQLgvNz",
  "key19": "21G3ULDbUcmw6n16jyQfoKRvxQKUKJQiVh7SJbq5RjNSLVkWTX5NiAdEq1FZ42n8nmYgvPhQxApFqV8hii6YUnuq",
  "key20": "LRaWvYDLnimz7KDGbYFj5D1XK8ChxATQy8iyTQk2jMedvVqYbpBtcRyaXcJttdGVeUkJ2dTizQrytojoznm2ZJn",
  "key21": "FHH6qNAZGYxyWKsfZWpffE3yKxKF8KGhKVN6ySCaBarXLTt5erYeUHVysTdeqhtc74mqLB59dPSxLdZa8F7Funy",
  "key22": "5PWd9s1BXQ8hv7XRKpR4xT98o1wz7xGa2HXiJwufLGtEHSqRYm6Aouud2tQCwwn9DHCCiEbRkAGGgBH5ig2d1LMs",
  "key23": "5EhrQyWVP2Q2p5DkKZHLY6VefWtJhGHqnr7NY3FFCUgRjvEupGPgVxMfN4tXraWaLiEDUrsh1gPyDVNHHqrQi4tV",
  "key24": "cbZJ7pZU4Yzbtac866R95s8xr59yRBgEi8NnsCfm1HZxcHeZf2aWJpnsJCx6YtVrsfPV8sud1cykCW1dwCndhC6",
  "key25": "hvt5AKkv8rdmk4xWfwm67rZyHapcVZ6mSBwBwKSPk2gyY1S8v75ERapcNtbWiUnLvmWAW4XLaqwQek8qrQpdng5",
  "key26": "Gfj6Gda66KMG2xzVQHzRUg7SfSP3PwXDzZnFVsW3AVU4AKoykvhfPbeutVZCMC5wbSksof2xk9czR5SGH1SBf1A",
  "key27": "2eYkumyhJXJMgPBQcN4AKznZ2KUBeW4mB5A2aFxKTp9PhW5571MN8KVUSbL2p9j9JBabpgeU5oknfArfiLMTLstW",
  "key28": "37BEPb7nEKGAJQwxXdeXmDy9PWVFxhJExHRdcig5p3p3j3qzdSQi5xeMmyEWUG3uCyFQRcJ2VSTNsC6mUAcy9jtX",
  "key29": "3UP2dhCvfevZy1tCsPor7GAeb61C91S9YP8P4U7ZYRKigyDCtu9AZ5gypAyPzLgEZ9r1FMDS65Yo6tguA2LiubBF",
  "key30": "5DSQfSeNxDNdsaimrrcaELMUGZ13sQzZb5McQuVQqaGwsZBsTiS9EeXcFhyGA5We7GmxQb9fEj4s2A8i4kSmvMzK",
  "key31": "5gFmwtAtKMoFwN3iZCmwjVTYmRs45xTkddTc9MWqHiKNgDJbWQrBFbopLmESVvjDfXHreZPmroqPq6wuEu8toAZd",
  "key32": "52jdLH7RrZGk8he8EqDxfVihKNaYvfzEa43w8wnqVvwohwnhJPkvofVDyuw4qSFEZHiEJ4uqZT5iu41ejqchfRNX",
  "key33": "fRUsg5KpVLPCEqYwEE9UvdvHxZnJ9tYSCWMZV6hJ7cwNBV6zzSSJ1SxjYQZYCxjeDBMkDbGBDDbo8Quzk1yLzVJ",
  "key34": "4hCADQHqHwo1gXkBRb4cjsy1ssp6PtExMMYA5XuSkBkgrQLAAvFSjSNYzpJNMG9ior7H6MPA1BbcFGLhwZdVJPdE",
  "key35": "4RZqVZftPBU6YDiHhMv2wh1vQZhPt2CHmDeBBhAxYYDCFfAiDebbWnZrDAutb5Vgny7uxb3fo1o4Mn7Jh9GcwLqG",
  "key36": "2wASSgorJBFcrY6MAKHZKJwoce6q4peWr9u4NE6g4yotYk58GsfMEjwbR6ujrwhQuuUqxgVa84cVhuB3tUQZ4cKd",
  "key37": "2zGyKhA4bG3HRsYJdRrFuPYpias9evVnTg2Un2udefvMxqTe3NfWFPND6TJG7ryKMKxz7J85qwmpxaNgUX35NArH",
  "key38": "2zG7qgRJ3xeJCYRHdBSFLSSGBdurhbudyzko3hvsHwRqE2QLAgHRVdRbbYmKTAb6nPLZNYi7ayFtZuvdmV6JF9MP",
  "key39": "4vUD8hnVyBUp9BycDEcNMgVgDVjsJsHKumVGKDttvugPzwCUUmLxyPKxy9V8YWoowpsqyLDx7grJDXnKN5nr6FWi"
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
