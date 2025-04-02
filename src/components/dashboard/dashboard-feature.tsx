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
    "4YcgrjSCfMX6MXADC4fUYHFqTRbGZ2MrkbpBB3zK8hbeUfZBFdKVMFMGswquKsgMiZFnh6fUGKyk8Es2zu4Nnv1r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MdWPBdjr12SMXDRJ2U6kLdcV31KnvLuH4bVeZicHEzj9LYa49CakSoGChZJcAZ2fd8Zw87vXQiukQ4VgFLG1saS",
  "key1": "3AFp4DUyESJmwtEA8QBkq7N4sRpzKuM2gv4q1kLSQmtwd7VmtLq1tCwUs2F7GnkwGgtwxNUGq63TLhhUU3NRbNy3",
  "key2": "2WSMLQhAeJh2ooeMYDM34m2uKgqvUBfT2hHaNrUhVajoBft8XCSu6434DgX8g5ePR2nLZPnY1BnBv23JBqiuCsgr",
  "key3": "26z3euW7HBNzpyJK3bF51hYAH9p3pmXFMXXyG7jt2b3Pt2MJ6mYXhYEYsdYmhFn3tLrFKQCtxWSE7K2LxqPw2Yuh",
  "key4": "5fA3hLuw4Q4hAL3ruzrGu5o2wCdnsCSmu2BKJr7NWbtXMxhrZdEPWnYvNC5abw8zb7U4jLjvG5FwxKUVHrPR6EGi",
  "key5": "5bBC5BpT4fCsWvvDmSoCANk2xrCBPx7nmSwTFi6vXhAXKVqJ3wQJeJHmZ4kWKnK5ECPBSi9Q5QdyX2fRxXe5NPRN",
  "key6": "2u3PvCxRvhCT2rzWp93q6mmJenMeY3v9p2LNF6bFxVmPNEfSb962ApXT2BKg7i21f7MzcNBznwhKAkx3KeAHKhJU",
  "key7": "3K4LStBipQucnYDbr9tp4nL6TfuzBfBBTjVSBTt7GNeimY1ghoHs7hKPGVZ5raR46zurx5xfuPBgNKZAJtRS8zXC",
  "key8": "3BBwiFgBHNwW5A2SVGGoNZEzJBBLm4gQv4GPoR9pQAcQdbaZ6qp8TgWEvYz1AnKUrbz7cpzFsv1TUTS6oVnacfNe",
  "key9": "3VnLDCWPsgHk24SLah6B2b65Gs7BHPUcHT4i9NxtXaTC7gz7aBLGGCqBXucDR5tBbh8JwX2A3dgtYHFTXEFVcsG4",
  "key10": "ZRckH17SpBJaCbSrLon2UyNd7SXYSJjU7fK8PhFQturVRLgkyouvRiWx8MgsLfDcHQEnbnGDGLVeAYYVJC44wEh",
  "key11": "5JwpCNoUooNcYkSPLeYVqaEeZi7ih7SWNAc1LFpzAoiyfXWiqdzmAey5FWHkjhNXcpt6Qf9ePRapKqJ4ku3d7DrX",
  "key12": "2ZTpstBysxRU843qJ3YqkMSADoDQ88MjcBo4YueNrHFuNrr8pVgeAWr6u3CqCkVAKb9XFE61JZGE8GMCiP7mDKAm",
  "key13": "5SQJogdmFsmNxLj7Hfm5ar4Ro1dHZASBRZQLRpCPFoeJgDG56oAPZmYPT1SnaoWtDLRWdMgTYm6f6wokUWzT8rfW",
  "key14": "3pTLLFoR9bfXfioRJeSDu8DzF9tz3fJFcy9ofm7MCdZ1k84jFnVQV1pdGToLGuX4oggN7fRwkmJabtcgwMq4Q4Cu",
  "key15": "3dn3eUASiQWSv2rfCfrarMk4UDKre6hfSey2VP8a5ZA39PPKUnoWU7zYfso4r9AvTUmgh5x7XEnYdGWLqnb4susM",
  "key16": "2pjDcHQF8mdabBwGGM4PFzxG7yTSK1yAVYJSHHa83ZBX4GGekCnMw3fNCJKCvqSB6qHDaQM5w5XiHfEUwN3XN95n",
  "key17": "3woZjF3oPHtSSGYNWo7BPCdrWnxAxATsHRvuyTRAqJhjCEkQW5yp3TdRNg3BVRNtdQ2u8fjL4niu8JQsfyXg3v25",
  "key18": "47GiZsz9M42gWhM7oCzGARtreRErzbBGDYbDxM3K2MAefHwmjf3X3dnzBPAvqQBavgFA555PgNnVEzKVHpr2vJQf",
  "key19": "4YFTaEsryQYdGNhczqbycigGC6zFno8c5qE9KGUHVe8DcvQ5fzrefMV57vyJYemrCUKLPEPQUAnQ922zCDZLAiYb",
  "key20": "23w1Xhgd2jAxMrkZQHtv9Dd2FHGs2Eyi874iT6Wwhr3GEZkJjF6teHv5MYyV85inF5gQkeWZfR4XZCeySiPubaA6",
  "key21": "4zAnaxDHY1zkFw6H9WhzE3hVFbVjaGVQDn2ePRcdsZTrYzSHXnj5y911tSub4qTNfMZsAFEBPQwH6ghiZbnb9CL9",
  "key22": "5t721pMETYJKkwMMb9qECowVW6JATbgZCKUvCUHJskUTcCBuXkBLAmG2jZAQuvPLXWR8KCEPJ81boLNT7t9m6yH4",
  "key23": "48RPTzreH4oRmpLemmSBBQvKHvoMHg2madG9NsWuULSNdiQuunNtdT54a8PbSiM3eVcpXD67uyVw1Aetuzg1QhpJ",
  "key24": "4fNTNxB5shefaCJ5K9qPEoU9JVfDEhxjHrFQiJYwtcUafsmR5gkEWkUkAHRwJK2Sb92xP7bicevxC6dFKNCEhxin",
  "key25": "5nJdPFQjFtnRGyCr6UzxBuxFKaJJqSDjBWjVM8qZMiceP4MHZVT4mHMmDvfAANbTFcSfGhVZBKQQq9tqtGvQgwBK",
  "key26": "5Ckoby8FWXhvhqZAZEHPzBTutMPovd3v54Jrxbz3XNe2bDTkT8BRRBvwniyM1YJmbAAHH35aciGsMa26tdr9mz2k",
  "key27": "d6tm6v3jpAsPbSCu2KqWQTwZH7QNjqbsmNFn1RPinXhuFHzUmD8eZekt5un7as864rSqum6c86R7y7r7kAY2HbG",
  "key28": "4EWzgvkFgwL4Wu84BBK3zwGKSwnLsY9f9SFKCD8NoXumAhQ1uWHp9Q33he6HaffW8T3SGx4bxLyEMwdsiFuU64P1",
  "key29": "5M81QDXo45L58ZgGCritgQdSRWumbr3ZLqDR28e4Rxe1GL7Za7J99ACCyPE5zS5HXLLHKmmK9wtoo3ktQJrtTpj3",
  "key30": "4CErmmEGuLp7uVTnPBPmMFsKkvhj21VuWqQPAkKbtUMdwE26hAdVW6Tdv4bmyq5wgEbh7taPspxhP4GBpVoCBVAT",
  "key31": "3oL8dEWJj8sfnVCjjC29qo6SJf4BPfQZUA1Trothy8Ks75iXFhtv2atvvLyySXAa8ADku3Ue9phppBHaUZRid1em",
  "key32": "3tcTPxLymciebuN5JDPHTnRBcYdNEbckyvUtyamyEMG5SMgEL1K2vi4XAh4X9CTBFSHkTZWink1X7kqxv7ZrCvd1",
  "key33": "5iMYEmVsdXc4hzF1zKK5Y35djAC9yq3DrwAYBSi5RVHjxgbqthCcguJ5C9gsNJwDZgXZVnpXYsxuZQmtYXaKSTEV",
  "key34": "2U1Jx7Yr9yWYHYUnG1JN54FptoTRLWhTCvYNFpZ9cQ9ER2tpmBwBTaCz6pzDWx4NhjaXgs7YA9MvriqaytFbVVnK",
  "key35": "3K1ak3MAc87b8Lji8a3ZxWkrzvPN5T5Wqesf6FDhYMAdeY7qEn6ihoKA1EKY347pmFcdpHWdHqyLTAxrZeR5hXBS",
  "key36": "4vtXLWH1VxGRPYMWwThEp6Ub1Pec7rGZDPzexmmWML2SB7P1r8mWc2ECZfKCnu9vVqJP2k4bbwgpRNfQU3V9qYDg",
  "key37": "8N7XJcymqycq6GdF8thw6DL5J7ND557sW4zphUKrR42VDmSXbaiQYiSyjPvXV3p6T4xx8ShkCYBUfYH7dCSi1qP"
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
