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
    "5baVTayuahqigkkPJHkSjL6jaeoancHvmsthe8dVP99f2yAkFjW5CTnkg9Vy9SRYp8wU7UEbF9CitMEKoykpNCHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S96MqmQGe66qTx1aEm8wVTb9nWVSPdi34vLRntsy4SsUZCBeNP2mirmwqWkWPvKpaJAMvgKxsjUT9YENsNNHJS",
  "key1": "62uBMCvd5ofrBXaCKCZDSo5wtvEAzojJMuQXGq91HSwTJcAhAPrjN4qToX6Me3N8Eo7L4q8dCbmWu6JtVUAuf8AG",
  "key2": "4VwFYRsopWsd85BxQi67PZ9QpSfoBXznEYWr8P1atvd2hhWK1Yrv1dJ4mnDnRri1rTDXa6dZyoN1jYhBFUoS5Aop",
  "key3": "2v31iKHYgdJ2EV2xXYcWKawJMh5v55SrWtqcAqe8YvLgQeHgCAEXo6Gs9GF4cste7wEowDw2izH8fNKNLj7MmZBJ",
  "key4": "uk8KG5ExYUbvMrWDEqEWrPAbZt1TeSwXX3offxSM2iB7kP5RGtSHoHDRWA7u8YXBoqPAyv2y6Hk3RH15NpEFBka",
  "key5": "5wmjb3CEtm9osSeHjHUfeeaEegqy3UwmqyUauFqZDRtREzC1WKSmoLNLi9iZt3iiu5gg993BCfJXxv3b8wKHL3L5",
  "key6": "2aGDexwy5L7jpjSRXLYFtXykedg2isu9LBTAkyKURy48w6Zk3VKWScSc5vpWGwjkWxsT1T9BQ6AFQWSimFtYugoe",
  "key7": "4QumPQ2KMHxThtJR4rqUNbVPb89UQofLDYPZy91dkWNEUDrdVKpqB4cfPqbMba16uNBAfdCD6y8ir3dN13QUdn5R",
  "key8": "2VqTUCxUrjYX9V5ofMzCnyjnhorSBiXk8RTWfSm88WFY5PV82PsPLrcXRXiogb8mEoLn9ZUpSmMeqpe1yX9EigGY",
  "key9": "3iHMTgLez5spjARb8hJZVtrNCNPone9kAaZZ6w2kGv1xD9EnFZYM812SWX5D5q9akYrsudUoJpYijubfM99yAsjw",
  "key10": "4pRnfySx99bcvJP4fcBeSNhnBcbyx6FFc7ncyvvmW51CjJvY7gcVRvnFJ1gfCr5RipMFtr2BNBMaYwXPthzfeB8H",
  "key11": "3HUsvqtc29XG2iYtXngS16n1A16P6ZjeGuoLqz8vTsGYgmssg2Hr33ocHiDWM7cTT4aG4cj5ChpPUgx7Nz4ngtLk",
  "key12": "4LLH5Qdjcu27Ac3WVDr9c7EVLNHkNNktgHnr3kpuTwPkh6EMo4z81gXppYwRv78jy3XizskuHoinqC8JzyvctEnJ",
  "key13": "2swbWAurMRkh2nAY1K7WWw77v2Yrerwa6qZnJDctaim8pndgr2rx1oUr2gG1Qs9bTCtZW4GrVE11yEoHjvCKQ9kC",
  "key14": "42HjTYPL4N4GyaAhFvfXUpKDmhRnwDHRQLzoE1Jeh3o3hUxUVpeMMtcWJB4LCQV2prdeoK9BC2i7MMMv6BZ5GanH",
  "key15": "5mqRNU5rtu1w1nKNMP6dCWTYQ7M9RFx9YTPxY9WyuuyDKpZ3bwinfhZfejU1Lk1GJ8MVZ2XxG7HB8i9oDyX3ojMc",
  "key16": "4PW3mz7XNuxiYpRjRR6Htk8YMRKQyNQScgGhvYqC1BosiqoxDD7h9Qxtym4YBG9r5NHYNXxqvo1eDDGpo4Xtr3SZ",
  "key17": "3hCqg1PQHdRFzNrgZN6MWKXjQpB49C6EorN4z2DhFkSDXdutPuUfhdXzhmt6HZi2gwaoZ32VB6Ra7t8m77Z49e4H",
  "key18": "4YLuDNeKVZkkeYYUEiyd97trn563hYBuVnY4Qftj62mAbLWgCqqUkAiVNcV8VLrpJGXNWw1rji1K3tED8KuwAT3w",
  "key19": "2JmZRxTaWKKaG9vb7RdusWGG5qFSkAeUdWo8FShNhvyiQ9yK2h9o5ZFBWia3mF3oBVhkN9DKEGj1ZiApKTzUuq76",
  "key20": "67d9Nx8AR11ZpvWGRvUwBpQK3kusk9iGDCrf3GMRe2qKPTMdSfeC7RytcKJpT867CvFGMzXponSzaZ39qo4tz7vh",
  "key21": "kNb7fPCyAr8THJo68kFBTdBqkjAauiR7h25vGVnH532PN9jz7VntqRdmwWEhioy5EfwNcriqxbCRcerZQcpGtgh",
  "key22": "2kvbmcM5TG3oiB3gVkmpcAhn1n12ikaobqzCd8XmrmTBs9mf8MMD9d8YQuT3eoCU2CG95jRbTyiJgeWzH2CNFx6B",
  "key23": "5jUKceowf1PQ4W5oxw6RmSEfTjTET4oMWpbRWpXBuxxbydNWcnEkZkUHj9yksCpnDbXsTgpGyyip99PhXDAdZ9rF",
  "key24": "3esaujr5PMqJMQJReVq9dHFQWwgnCB3rAyXcKX1trKptH5kjUyGe5wpx6V4F9oT5cTJX5SdTNw9PcpXE1iUD1yFa",
  "key25": "2ef47ANa2Z83yitFKXzjS5bpALiex2R5jzsAgoF9og77S4j5KoBsWfxFC5izQXfMpWZUinNsfsAxrZqkkMhRkmfd",
  "key26": "UWix2PCzxayE9CHT7n4EuQSsfGd2vPREkWHLqm1WT5u2Ys4zG4rC4XELGKwG6YJUhDBXVWnkNqFRDssi97huFev",
  "key27": "3dPJkUCJBvNCyC3meuG3gsnoFdPP8ofpzhPDKAf9cRrfKp9E867TDr5eqA1vLr6pp8RjmMQWTRAkYhzzeGPZwPR3",
  "key28": "2kqCwvuQxEAkDAtTfZP8mZpbChYdvUdZQL475f4u3cUmwrDz4Lc8FXWaUonRGuno5d16myEH7ZQuKVUHdKezZzUm",
  "key29": "Q4t8hxAEVjg4RjHdM2R6LnJNEHUtUFJb4j4ekUQUWSPwsYEYVo2PDauXEvkJRBXhuCG9fdd3DFiNAtyo1TEXWiR",
  "key30": "3f3kpEzuDaukKLoBwGxqzGp5a74pCbjEmhjnsBvYDu7Pp1SkAWbMjkgj1bPEDMwqe6dzUMaQ4tkEhGwrNnY5PbPw",
  "key31": "5aticY4qCoDJT781CoyfBpn772RteTHqJvzUi7Rftn8R1LmnpNj7agZnZgPQuE5AKe9PkNcBGSMEWQmw6hYo6Zic",
  "key32": "48mbaSNbdFQ6J4gmEVPn3tb3CWeyJkw6QahRVPxD1pnApi287GcxVLPHacsbrAdhkNFqDARpLdo85LAb67iNPCkq",
  "key33": "2sFSYYmD1dobAFGNxEBTspRGtLXKFUCdRWu2WEARALVufkG4XHWNPTTMZ5VEpYfpLu49GwTHv5GYLy5H8rD2rYsH",
  "key34": "2oLjTf5yQhARtBLFbJCpSwc9NXJFuYyQamQm4TzKJAB2i53Ydv5zZFhBybwveTCs2UM3otzf3DwAEnzXG77wEhW",
  "key35": "41teh89PDNTKbxZNcYuFzFYy9MwzXp9P8YjexzKyCmtcLPrCRHhGa6ha8CCskjcHFhCPghax1GuPGSfa5TdbKF4Z"
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
