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
    "4LnesK5wMBq6ZyrBaDJsviiMa1dzZpXNHa6KvHXGmFYsDwRzsVnDWzMRbHXofwzmJCPrmsoYjEMx6uBukqnwCRV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DrSgvRz8p7JabP62rT1BvAYAjFQzDHAsrvoyHEfjyKNVVnKjmvrKF6Gf3NDM3Tzgk348ZGrhQQLAdYSUFJPKcR9",
  "key1": "4nd5h6Lh2Ns26R5tVUD8oHuAPrnia2ZFVyJ7m2F3BPfXyfCBsoj2nqW5D2swd2f1xmDS4STpeprSEZ7uwSrNLVVM",
  "key2": "PJni5aLhWhptMUFNmAZBQYidCPGVwU9FQSnDLLAKjdEqiyLmnEhqZERMz51Sk2bLn1fH8RuFe7vAB5nhx584cem",
  "key3": "5NUMJDqB1BRGcFnK8R3LCB78sB8wXiaewuzUc14ehuqUAV89XJEC3DAbNszbGtkmMsak1vtVdXfRBvjR4hP57zYd",
  "key4": "3uFEQpSns3MnkTA15LFM74kmkN9X3rb5LuEZuqMeHBo86keKtUT5UC9qAnibGyFpjoZEbDksg3bjyV5rK6EcAr6v",
  "key5": "gAEdYp42JmTuG5TsMjKoUGaqmoQScXjgGTLhTrUJqDPeEeYRpcz11iGbmxGviVoh6pKRz3zi5XY5q7MVVNfswpi",
  "key6": "5xRu9pvKgZKBeb2vNyayzxnhEKLMFpvXscctjWiiuNUtMYSo91gGwqBUD5g7gJs8hY5TCZnHmeKxf4iKiDW6Rkfa",
  "key7": "3rHkihzUfzh6V7DnkcQWngy58XaUpuaThUYgU8UW2s7E6NRF7a7DM8YvvxdAgqSuQfbGJU35YaxsiAPhgyDLtkyz",
  "key8": "3yFsFM7i9rH5iFwp8qpgC5TamFQZJRvaW4x2yseeEPEK2oVtZc4EcTBXdYNAmEqQTjAFi8deXgLMKDgWFoF6CKtt",
  "key9": "23dNSWmpG9gWLLy3hLfnFkVdbNQhM3LE3NYC3SxLR7DQ3KQeTJSVmmCwMoVM4sLEy6kjmqsyud5WJguA5y3FLK8f",
  "key10": "2FKg5Zftu7bmLZ288JWyhvtSAFLLtprKEd9S22mzUR53kqz8rgUmNrFFok6Ft3ixWscWSiR6pcUVVJaNP9vAymko",
  "key11": "2XriwRWnNU1NdJurZxfHgA8V7FAXVovbs8zxrfwna75d7J5y59E6uEnbSaWU14UyuGFAznEoatXE5k2YoKvYcnQG",
  "key12": "2m7d5dHfnJ9MJ6PM2L1aY6GUEBAHaXwgPqX9ZgEtVVvhhaaPBvFkaupoh6SPNRnBbD7hihUt8HegzQfKp4sJSrbt",
  "key13": "FSqWfESsD9QgzdscvmirxLq7z7Q3Ez1k6o2YXubgxbFY7tRQqN2avEVsH4bopcGywjfAq7LYawdohhjgtaQaKRY",
  "key14": "5ZjNf9XqBc8wswnEvg7w5q3PoSSjWu8172H81ig9J5WhvMGBncjTjAaRcz6De3sWR31CVL1PL1VEmgkyB7botFUs",
  "key15": "3CDdMFRvGUEL6WJcRTbPXFNgWwRibDhpVqLKkvp87mZydG3BTHUxwFKNMQnNEX2uR7uQKSh6pgHA18CQ8ewARXfZ",
  "key16": "34zSgQWsTd5uHrofRrjzHQqXFzjp54osgSokLZPvbxpdR3zYpfvUaXebgkw4PV6QuhrpYuKbLJNvUVWSK2Qb1zoL",
  "key17": "5sduhYysxqtk3Bim9JyNb7WonLxfRWivGQkXH74khjvgFKZvUT3oM6ZTBcSm2iFULVsN11sNH9nVXpqDpyN8UcYt",
  "key18": "3y1p9DU1KU4LkR7PMWfSYnVoC3oruJT9GheVpZ92nPdnNtHdNZUvYBy5uex7G7GtVEhUWHPUJSvL9uWRjbo1dmvE",
  "key19": "WWreykE7pDYSHrgLzgHh8EKnqoqR2G815hui6KgXUptfKa46Kr8sQ9JH7okiHZt43KLL6UcL92C6xjGgNNpLYAv",
  "key20": "XD5jyF6bYBGRv8gUjZ7cUCrd4RBd25JhA3c6yjRpetx4gb5XEAvKRGrvJNJTFVe8DkstDucgtvJv8pB8SCckcNW",
  "key21": "3xFPSZxWqLH8cigxa58jbijkixwJuj7EFUBgYJiXKXmkHJt4K8A2bm3iUGNMVUHHAbQnerQGt9Qb6yW5FcJWpYtK",
  "key22": "5sQNHSEZshgNyD4EAXs7GxxqCFGbnJf9ionSt59ZePSqMdJbqfCB3mDu3czGbKQcg9UzFKStXfg6jAJA9ZWJ1oJK",
  "key23": "4bGfPhJLWXy7JqXZpqZHntazfP7WqjD3APSZShEDQU18mRwzBFUofiUeDccRhkPQoQnBbdbYBKqc6TYoCB3qnPfu",
  "key24": "3pnP91gekJbXTnadZyHovJ68Gbas4qX9iXzjD3riLPg9255u7abisZDJ51NdB73E2KGmtNks2CXYrHDD1UAzU9NA",
  "key25": "653wF7S5Q3oYMx6rS7DXufcBr8U2DNXwFmpJY7sCfdQBohsnozTDcvfu4A1HtxFbfxuXL2HfzYYWPzAhuMb5LG35",
  "key26": "CUknRpc9MG8sTKeYyGyFJGRPAbLdeYNGGEgT4S2WwZdodrWUJKdZYCEu32wAzxdHVfrwaRuWPFFKwSmh4PnGVJ4",
  "key27": "3es3LdD6WEUCR97vmaoxtZarafMeWPV9zDZejdMzz9cxH6C56W7Rmz3qmgdps5ktVpopRYQReD2uTGHgGrYzWDmU",
  "key28": "4Z1WUjjQTwLdQyTombMGH5rcAiC4X9gT19hCg1qG4bqgKtGjjWynXYLBPxJkcCEAdeWLGqStWNkN8WgbpgGF87EV",
  "key29": "d7eogMhtXAvd5wRhG44nULuFQ3PKTxCEWy4BfjZ3W6RL2xSbkWsN8gwPyGEjSsN3e2dsXYppHQCLraj1giBaTci",
  "key30": "2rFiN2b5KFPbLuLQTr4CJX8UrZ8NF43mwbStzqZYvrmJgz7KCtbRSGFo4yqXk5DjhHE5XJpgAAHKfjqnB48twZim",
  "key31": "2gBHPa5LzSV7xMkaJgYxY66oo1sutrnRHZX2JdLgaBcRg8tvKZw4sSWg7GF82Bu4JH5m1r76GHBWpAPtMaQNJEg9",
  "key32": "2roorpm7taidtXgY81g1A6HCSVtEz9GpkggMFxx6oWF48Roibsypzhh9uX5yDub4cQWAsgb4LiXZypqftKgk6HA2",
  "key33": "5EJ5wYPybeVSZhHY48YLxJifa2BKMFbYhmk3bmrdR96bRzLBgCnYJA7n3i1sbtpYj4oYTcZrRSPr4BW83nx7QYxQ",
  "key34": "4feaREmzTx6YRdC2JrLZaQs9iAGzRzG7gvU3XbNBo2zJceMWeNcGWYTAWonHQWds4NYFzFvoVcJ25XhymS62UpPR",
  "key35": "4zuCa8tAUdMpwv2x4r1fmg9kRMYXxhPFDCzn184hKHdLsEUThSBqJ3yumGCN84SFRXcFFZz5qXpovC85Y73j5imq",
  "key36": "3vTtwPaV758vUc9vz8PMD4xC6AaJdmYxuWfuuSeDyJGyihqqS1dTKqDUySHczbn6vZVRXH2LERSaztGaqZGwZwRF",
  "key37": "3scTN44JM1UGiGV8rpypP35UDJoT247dz1RRYQxaWe4dJ4Nze8V1EgJ7ZYei8nTCi59dBgU7p1sNr9NHAic46Udv",
  "key38": "5bHnapBfbEHB8DieZZoaSBNfBfW6A4YfDoEU7fUQGcQX84rVdwyqA1p8EnuzAK7jjE6JdNywprPL8LTqpEUczXcC",
  "key39": "4tCpRqo7aRCZJ5CBjooGv7q4Gmweg6PYQ5KVxgscRMaCDh3UoxvEe7xc8PeDCRVwNbTwDjhL9LvW1TLYrr9sSCa6"
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
