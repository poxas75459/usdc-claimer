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
    "66vtke5cdgWcMNL9h6bQdf2wPYovhVziQmoX4yemYdLt4c3mdHqrnoMn4EtRiw7cZMk1Tyd1Q9LHzxjCFjc5n6Ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a9SbLxXxW7ZhM9DytRLb3UuA2efAxFZKUt69G2MYgiYeLRMTMkRTbCZZVnS1NdtKiMMY7T6gaExbtHZ4ckN5ALE",
  "key1": "46exjynPDqT1ynTEcez8vmpLpqXuMcxzGZYuD2UXVpWzpQsNTX2MBcZWgmAx1HxkFkjFwKqr1Zmz9dqRUUszjwBb",
  "key2": "b9qdk2JpCpS9LRxuMpcTHnL8SRpM2N55UGH2Cjw98rmmHRUCjVdYT77onrSjGyHiDCRtoNq1qC6ZWri6ydMMJKR",
  "key3": "3FaTfUoVpGyAt3dvBAm3d7QSrPtr9kmWiMRAeN1jB7MBmLXQw2LBPnHhGfQjkUYBAVCPAA6ExF42oo9Lu6Ajap3T",
  "key4": "5hhR1j5evKntEbzfJjiQoKN6bVFkFZojcuUMk9G3f2gAvQomtEfNUeAGPUjGx5fQ3DRyzMoFRhKieH6sNgWyTTGP",
  "key5": "3tcVLzNsMMkX97z7pBqaV7Dc884zckXMuxRb8meVh6X4fNZ1CZopAZgpZ1KqXA4Tf1TAgomaERPnS7xGCXrTZGT1",
  "key6": "5R4mNUFjfgk6NQ7o8CyEZ4A1eeTfQYqnDCnQD1br3UM9wpq5VbN6CG73CZR46twhhW7YP3S1a7SCZThFvYinTpFm",
  "key7": "58Km5dQCexq1ft3fhpKutLK9cJgCAoGc3c8KQmp4TUboLmNFrPtfutwr37dsg8oSjuMFNboGajxuyKcsBrzuk1am",
  "key8": "63q11tQGJJ1kWcBkuqB4XWy6uXtaH62U8PkZ51BqvQoJFCxGFuTxQVToKS1qsU3GGQQDF2oq1Gjuxzuu8qWCZpAb",
  "key9": "3fBW5eqso1jVb2m8mMdQhjirBFASzSqVK15EhQEndBNcjB7hLwnvbMaUyUJDBgz3pQGtHFo7v425r3wefom5zcDL",
  "key10": "3PgnZa9d2fMKPMXcsJhXwEH2wdfR7GeLz811S3KCBu2G6oaG2av4DxQaRKH3XehTdzSWHFi4MYK5yZ6gkfGzUzVZ",
  "key11": "2WCm4Xpcr6bejLkTNF4oQstMTZpRDHKGbebbxRPgdgso3dt2MNSR7FzCvyqURZsGzAfkbdp93A49N6F7d7jwpYG9",
  "key12": "34TA76WKQFfkgK13iSxKnWZa2gHATUfTkm7dCbxsx5jhEptTtQd4LqASFXHDEjh2Fdk332SwPMQvGzbxjMgQsydv",
  "key13": "3G18C58TFtvhKoXykop5vJCtkkZQ8RafdeC6X74cd73vdZP2n4TB5Q3seVvVLiVjYZAcx4vuadaWgrCLc7sHzJvy",
  "key14": "46y6ZSPCkWnFiwRuWAH4KLV9xWWJvAzXSB234urUQ6r3tha8sejR7qS3T8SCw1dyhhVyMposZVB93GpRGFJiPDdu",
  "key15": "5GG3v7nGTKtY4tj2W5fwufCB8euownLpBpyXZUvUnZ5W7txKQDw8iiNmNAzNtzZEpgGf2YxtNNApW3PFXhguzept",
  "key16": "pc1AqGnUwKGPVMoxhyPDuSMKTCKF61un3UKs4BHKFoYAznejwmYQUKmBmewTj9g6W4x8yX5wBWXDdTjRysAkB77",
  "key17": "5ZnckxfGqT6SbJemB1cXdzDq5bWqpHmTkPy3hdsBboSKrdiV9RW3mdfyhBvuVsHzZA1cwxgA3j8zYPTahuTmcg98",
  "key18": "5ZXdrKWmNKjFVtccVj1ZKAa49KMQw2vz7S6hbnnW86dhfoiFuiFu3KD8CmL59KQ46i99V4YBykYhc11N6SSaTZhR",
  "key19": "3dMy3NgUnmEgcGe5hhZyJ7Pwxh9BxzMpffsfcCcUsyBRi5TvWS1FAAdD592L6NhETvgJQBz3XRskrk3S3sQNe77A",
  "key20": "2VdZuQTK43meg615VnhxsrzngbjaL8TubqeZ7EZgvkjSWRJmQJUTXYKpWxXs26Gca1qpMjrytSRnTewAHfaaEsUm",
  "key21": "5cFVnkM7ey1rjQozpcJ6KM7X4QrrTyTetbEmRsoQzgDMRQEkeTTNnyd1Jo36Tk5GHRexQHHfq6QUZSMrsD8pvuVS",
  "key22": "LAWxAzEdvx6V4i9EyjyqfH1pn45fEArZmKLgpmoBpdrGRGZ4wPq4rjzKgaMT71AuzJ3AWUZtdi5b9gbvUv2zN36",
  "key23": "29wam6yuw8LoDvhKGBrmqYu1QKdGFgVa4bbGYRhah7eHXpVFNCVy6qg6GCEGQw7Mt59QFZADQa5AV71kgvFqfCTh",
  "key24": "NZmvPLhnNEoGj1ZqCyKfFmpdF34mF5JEQKZyJ4Shg5wBbPjoQ64ACKfpCCf7HiHHrZDXuFhMRuj6xMKMqpsvbCc",
  "key25": "46ueD8G9Zui8jxDdaDX6GJBnAwhuBvjyEtktybn82QevLLRqFSYbVBCHQFbo39oRXGGiLvpftH3x5UoWduZdbY23",
  "key26": "LJBiQKZYne2UZuv2RQG76MEQGDA6fx5j83rAm8firfdt3veUhF1iAmswQsnmeZmH1Zp2UddhUZ1jnFxDBfJ764H",
  "key27": "5b4WnDW417bvpukoDcZZKMKbtiDVN9pTZmQpVop3bgXBk45XyArYjS14Kb6uVNfqPFbSnons5nAmfkvjFnACsC6u",
  "key28": "2gB65hZtWWSWmeQ1AJt9mxosEdWxWDNKb8AVPAzXGZVjHeaSQ1qpRzj3jqjbU6Je4LmsmEzcmvnFZSJX1Dan5kUy",
  "key29": "o6ZQPnJBLEV6L26jZyQgutHoqBzp3aDfczU4YJKep2U5RmN4yskNAjxzUiGZP7Nb2cNc5AqGGJuY4z6CuM4Ptoq",
  "key30": "2nV6D6qd1Wdewa9LcvKCAGqzwAexoz6jfc37d9r8398fKM5RqzKmy1fUhyoyx2eDhvDb3NwBJtWf8DpFAzranC5S"
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
