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
    "4TcEoGrVTQ7CRHM6eBtBXEdWKWQxjgNFRzc4NPCh66qcKoVWX11CrYG1DDXeXHSFMaEY8m2Sts3Kk6u9VXJBx7Sz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UebhCvM72yBCQgXo1PhKEfDbT7i9tPB8nzPJRaWyxzSiEEAStAE7UozdYvkSiNmz3LwSnisfFbtpbw2826p6Grq",
  "key1": "5BqmvZugV75HV6xKAWporEns8EUgimnJmur532RYsNUohjupFonoxwgwjzZ9k5gtXCTQfgVkeMt7fRKUeKHkHBtB",
  "key2": "eGokpny2ru3FF8BYGgrvjygFpg9PmJ8b5vNYtBXjvMurE7dKASRzJrQtxd4D276YAVS4auX935K17E7EuCoqed4",
  "key3": "4TJh1GbNfpJ8vXdefV3YuCRJtLLj1bvcEDJp4guqFMuQC1PnhPKRCui7wwCQLEF6gjhi1Qtv5zvUWGvDnZke5MMF",
  "key4": "2ubQiEyym7PNsjaTwETp9bN6eXSYbFVd3Kyh62MReEHKjDqRwS3bxMZwzbqDg5pBZkvLYxarZDmsvqNGpkYyQRJJ",
  "key5": "2zg6R9gFySSJxaZTrvF3XgEAnKAWyTjDMtkbaRYhUH4Tun6wednLe1MfT1uCFvneXgwkcaSVnc6b1PEc4uth5Ew8",
  "key6": "2XDV4HdQmePP4VmrycXYNSJMzCVPRaiHcjiGKF6LPuCChTYZa7qKLUhSLMN1rUYRLeDTvJknniRAeyiWsdrLrUpw",
  "key7": "26uDzxSfryy1h5uy4HUPSwpUSZwUKpujwBCmjyCW74DQZYyBK4z3ndjidS1nBeuV136hbwT7cVCC3wJVGbcCy2ve",
  "key8": "ftoUFJ3GRBJRYU3JSHuLmscyb7GHQa2vJFq4vgy8YYrUKydkN8g8GEXsf1LSDzQ1cRZzK8sdU7uBht9fcr8vSDh",
  "key9": "3NU1bwQGcSQ45bupPq9Nvtmi9AABG93AMfPsupe6SWiM87UTo4xPaxdpLjeq4djHwkMtMt1DHRYS69TrZBu9GfN5",
  "key10": "4gAXtcJh2yW7uowaBZQzpcT5qN4xkWm97UBZhNgGaTeaKoJAsMPx1dX8qLBtqJ8EV7cW7WnnwBobKXBWnDUBuzcs",
  "key11": "5ad5V5WAoGudEae2gNwdHW2nyr8ojdpEaPTgFV1g66unNX9at5GVfGXTT9p5VyXk2C45eept5rPK4TTRkz4GnRsr",
  "key12": "56PBk5xSQXLtAXijRMkH4LL5UsAefEPFQXzgf4mpt8kH2vtm6wWKGM8jgsjw4fXnQGstd4QBVhNr4juv8qd7RPiN",
  "key13": "5WXnA3KEYWnqhXhnMiZ8kNcuyKJG6C2Y6XNz5LKoXY3dseCw1C7WPHqiM7KzGEqxZitp22FP9tY1kcbtm29ed9ft",
  "key14": "56HWbWxktKH4YsvAiVMMbXeYPGYDcshhaFLoMf8vE7u6xWHdgQ9GhtySZhk2dKt9eReH9Z2az3dWD5eGnkKDekNW",
  "key15": "ZBJj7KYiwC6vKkiqh74jevxmD8yWAKMuDJF8SkB7n1qw1Yt6RLGi4hkN2RRbc8QdNQxSNnrw4txHW6ybVWFM2EU",
  "key16": "2ZNfPqzb8TPdKADMuXkWjQKpTyZM1EjxuCr3qUXwii5a6ni4xSCD4tmpgCvM2GXGxZxxMksgBbCoLxnWnjBrsxGY",
  "key17": "4n3ZrgKaHPHhGaCzwwKhz6aRQnuJ2tdwBpUmHP6jKSxWdodSMUrbGmgM1fBnMcZTXw4AFFCeQiF9QHVTWwtW1dEE",
  "key18": "36s9T24jgx9twbeivQYYCDzpAHEAKxAaBatxEWX2aUvrN3GCc1i3uVgu4WfvwN1Bit84ec2JkmvcGgNm1eq3iLnJ",
  "key19": "3M7j7JjR5CB85YtUuH452g5n9gGXZfSFdtzoSEPBEc27rq5TMJuRP7ukAA2zMWdJFUS7kEVdhwE8VAweLtTdzqnh",
  "key20": "5VNwUaZAdxLJhsUdqUkg3fjeMqit3XRxEjZiPyZQXJghmkc4Q4vzw6twd7w7sxHS9e2zVx8u5xDeoFm2t5bND2jm",
  "key21": "56Yqhp3ZMGkSUTrE5fAQ9Fb6JCFJY3Ha63QFRZaALwLaqwt9Gtu7gF6Z5aKgTVcHHfAyC1VxfbMH8g6zXiEjGKkL",
  "key22": "3qJabdVziJtvfZFnEcGoMDdwGEdSutd2Kv6GcQKTXu6kX6cvH4mQpoEzBYBgVkWGiQGDb7WczUMi8Dyw3FEaEyLf",
  "key23": "3Vz1Nvp4D8uWedgmPqsDfxWYir78AVFgFE2Ufdx2vEVc9dJd9FGwgVwKS6Q3jLHq1oSoGzKztAjkFywncyaNv1ki",
  "key24": "42jiWgfDRuDYPYNL5n4YjXExyGbYQjcUqkFKaJiXadjmfSX1FLD6QjCxug3aU6PeJCWGKWKea2uQRXBtUta5d8Ev",
  "key25": "2doT1Z8a3tEZfJiQUX8HetrvbahdbfwnCipBy64TMFSnX1wn7i6Fogff3q2h6xScWwqhfP8jFgLeH8o7zzsPZyer",
  "key26": "4SwmjdXX4wZH7QUSzAJuBAzbCQMrTqzugMG3u59gZTTCEHkCSznWrWbvk9e4VcYzBvFPvPranxr4FPyKpUuXTVQN",
  "key27": "SgcZ8VGVYfa6qU558CusAa3JkPJJRaRT4fHKMV5Kihi4dNo4oU7SP2u1dt7GCxdeCxzwANFhrEFy5szfZAyDLoX",
  "key28": "GWa45x7FEon3JUQNCCB5Z6g5GeYzmEHXjJTYxRcUfF2bbjS8yE8TgzfEoNyjCRz5h91xumEgRTipzm9PJPTtLyt",
  "key29": "42ga3AWQgexpmcd8f2xNgFs8dbA2mHnZYX3x8JQCDTYjzb6JRv74TEfpLUmfsYtYkgMs2qdc2Kt8nz93rFnSmwYQ",
  "key30": "3kWaFJH3tNg6c47mu51mPwZYgPYxRW8kpvCmQ12hcGPhoi2aYzKM5eB4z2RTgKrud4oj7YA6FMJVCwQbt16H7mbb",
  "key31": "3rvPpRniEVDRYehkmRDJ6vUoxBnqeKNzLzhK14BpnZJ43VwYMhqJndpTgaDn2nq3G2uvYDb6JSfkyLVPapReuQLW",
  "key32": "5VWB5eVyoNgNovS5GVaU9WqUwmhmm3cCuXLSQTEQ2B4hYwKVhKEUcNcDBf5orvvFYMUDzgH1dwGmMi1aXNUZFizX",
  "key33": "54Aib7JdU1QmMf1yRxhfoXtFZGEmxfxzmEGbkui6dnVHHmjhicDzdJhZsZB8RmMaekwvHfpGaKYTgnH4bUohR7y2",
  "key34": "5677xbgNBQPbqgZ3WQrxYGkMcgtaDE6jn14Ye7Gzxa1Zqj7Yqf5qgWuHjxGCoc3hZyDyMznfnP7kdTwDGnTgMPfy",
  "key35": "43D6uUm9vochX1KxZH6meTA8renbwwDXoavLFeybL8apZEwvdEd4YcX5Laak4dyig19rpPVy4ywG3beCZroSYu4y"
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
