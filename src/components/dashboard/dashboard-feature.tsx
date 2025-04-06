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
    "2BCTzF5siVSRs9eYqHYkUmcZN11xngFmDnnwidpoZB3ptpEPPgndSnuE4Revdb9oJTexb5KvkzbcCiTyz8YmfkLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AUyktLtniGtQEzeDmKZppBzNXae8EmmA6LUL77Y3PJEXD6LXye8qnGrQjZRxXaDw9mikWyKNJvUjnX11S8tppT3",
  "key1": "3dJmCwYVjajuuF8h4eVHhBbZQsjdXy58D8hMADRDHxhXsGQrZQo21biW1kfcFdsY8axLbgEUgtUXmRQBSnfzFxS2",
  "key2": "MJZggT8rVshargrSwBLbHFRjwgBxgFbQbGr3zADnq2dDDSFbCedBWk9T3ArDUszbo7HtbEfV4fPgAAipx6UHHYW",
  "key3": "Kev93p777wu5zCQGg9MQVcbQ9qsbZF1MiHADfscrU4zzvoNBjj9Vrjza22cuY4F2758uATFKj8t3vvWTHUSnd7h",
  "key4": "2RmhEdRwbmv2YBvwJwQp8BoBDQ71bRdeFRptvygfMtpB4AP1jsxuCu4RRAPDpCp3Z7DGBAMuyEHzrESresDMyFV3",
  "key5": "54R8oQDiUSq5nHcTCT9PXLQu3AcqXMRPjuNF9a2a2EwXQkPBZGxztKi6cobGkMj7Wttzm8Dh7FTZK43h5HMoiZ77",
  "key6": "yMRuZ1op1ZNonPqJh7L8z3rCYPhm78EWyJi8Z6qfov5c13QauCRFciypMkuHYzBXdsTiVsZbCsVEvJZ2h1bb8VA",
  "key7": "4RE8anKN4seHYgjmE2xAawFcahBtFHfFDKbAsAwDn9VG9MBjpAxDbBXUjiUN1g6oPn4eTamEBReqGiuoVR1E9FPf",
  "key8": "4cUNsSduAKHmf1swvKaSy4ZxdTHPdaPkaXQgDZNkeQjEYk1zkB1bAVqvSq7VGQHVZVXJxin5DzEiD6aJWRpa1mCK",
  "key9": "4P31QLfJhG86A4LYePYs5ci4q1y95N2GGWayWtUzVR7NneakJrs6TKUFtBRSvK8Sm35BSu4Z6cLickTVaDwNt4q7",
  "key10": "4cJN1SygPdGSierSvyeMBakgvHCPYRvqJ8AgPvCkgS236WMKE2oeq4AFrgz2kr9a2QXeEhXmnLzhEguJ1KRwgRcB",
  "key11": "3zsXGZdP4BCVX41JDKC9Dg6AjQhWLfrtaXK4Wdr9uzVGaDjGftfXynPtLf8uaek4n3rbbiwCyu6pPpVYwzz3cHiC",
  "key12": "dhDFjDEQTFTBgZjKLjGf1die8oRuQpqkMf5ESRvF5ipA9bfrhSK9RRsXoKzz6nsYKZsBehdigxxrPnrXkci3Tdv",
  "key13": "5JfwZuSWYhTEK7aXjBopNk2xENaFrdZEMTNZSsqsxU52YXa5boxAKFHsTZSPQ8AGn3CRUhGkmuM8SghYfrjKxqfm",
  "key14": "KRjkbtvHkizc6f9Zt6A2mKkskhgEehmPopV9FmEw8rBigjArHackVwBxRHewoSHTQv2TmTyBmZsPgh11sv8tsjh",
  "key15": "4hNgGW8tWsYBnqNuzyG4Sd5UFW4KmxA4FSU38emA1G5D3yK3fnQHv6dip62RaJdCJkE2bxW7bLyR5p4fHLK1MuDk",
  "key16": "5BMDXAXFv9gnLdTnPViPH19RaqXGzUnCo2nCKbP3Naa6wLFDTjrvkiwVn9hu6Dnug4kVnLGWN7S12sR3jGJmahS5",
  "key17": "4aUZkvuJiDBf3PVjHxzYuGBGFLyzNM5LcUPMFVSCWjn9PA6EKRga12chAgwm76SUd7nGGUVhUuWYbgFvbPsvcQ16",
  "key18": "4fULEevBAWe7W93yZLJawir9w6CPjUcUcshExpZ4ZYyFNz6LVHsu1yE6GKivN92QmmnRidhMwKZcn7YAvS38JTcH",
  "key19": "ExreuS7YjgShraH6dyT51xz9PexYmEmzEnauFJtT3WffySEjDjQnQ47vCAYnCLqV59CkPj4JzTJb1qzxerW7RQj",
  "key20": "dwDr1fFGk6Bkz4R3iJQBFS6BK8RZnWFtRbrNNNKPCoHE7dXo3FmYeSgRVD9N7k8essKXr2RVeoPrkdXv6FWweWY",
  "key21": "3H2GNZxmj1Seo1bcgnDDdR55qUUT2P2MvqQX5kt3vVv6r3BJeSJJ41kjNz57PJ2p8i7A1yDGkmiAYDKBZ5eCSG2i",
  "key22": "5h2bHe8pxgQ7UdovZTcngzAirLzK2t3C7ofN2Hxw1nLSR4jpJRVT2k9s6scN3NszHBTaYNudJHdAaKg7PDQ9nu1e",
  "key23": "5N61Ed85eGGR4VZ391tRNZrczHa1nb5PoBGt5hakdMpszYUUwz3oSwtajLJrYmu9Vm7g1e4EmPYXb9WtsJSiXkA6",
  "key24": "5GLKiEejtdamnVqkNbY4Mu4i2nvm3g56ZJRZdxMD4gVFdiiQ6WB8LEtY4xqUbiiCfCPqJXmb5hWAMrvCf2QALiEq",
  "key25": "3ifq3Re1pg3DNnMjB2dpqdt6Cg19ZvLvz6uCA3GsVSie19tjEdv6QFD3YwnpLMekzxJTwdiGJyccxEGwYtAKf4sH",
  "key26": "4YJKfFsywnNFTn4wvnXuyecdYNWpq8rpxebT4VbjYBr7tUF6Lgf4vyMHsDX5DMoo46k6vC5A9yrSw8JgXfNHveto",
  "key27": "2CyHxWtg3GaEXbJsaG9KR4bmbvqV1i7WfnmYRzoPEBPkv3wMiH9Yf6m1LVaYNAEELe6FoRhbuWht51RjdmSxe61D",
  "key28": "5L9Lec49CjRGjpQSjp9Jcw64mYEUoBkG7t6ZsyWaGsdFmTPg38W3GFNJQ7f21HQHyYRQ47YGTCaM4TSc9fBhZkQc",
  "key29": "34BprMyVqBQXKEkYV91dxfMfAyHj8HWasaBeXbF1M7M99yfcRC19oaPWQDknNtTnLmjhZJEGzjVxcmkpLhVn9iGH",
  "key30": "4xKpf5kJSf3MQuyf9SJA5g2E6Cd2zNsXSWwP1BgRUE8Jgo3cuqwuwLgNTTtAwRPTMvJVsnQcTA4EdVzzQf8fccur",
  "key31": "3s55P3SW8biSYRmVA1xEz2BQCD7jZ2ZwTK3uw39yHNhZmu5RgaR9tijrF6JxgfPBUFjP7JpqrWurbGGHearXqg2L",
  "key32": "27c9rJ5Bn5GfvPAzCG2PV92WDaSEhMUwkuZ66dMHr1HQPDbuf7HKwx7An8v4tWcFNjfSacBtQPxN2hPuKWoRpCXd",
  "key33": "5hjVURGYHYTJm75bmdE5HKs25CQJniRAwjmEZra2HPrxwxdLHoUjpAydK5mRe4LPZGJmR9F7o1bAEcfKi6TKLSrB",
  "key34": "3b1PBhJHrDCGoSE3w5tTXf523HJ9R4HKyEwv6nczWhbkFMNKAiPy9368fnxrg7bnGWeMmvubPacigEC1iqx8KDhY",
  "key35": "3QbSP54rUxSFWKXAVpRzKDvQkLJSAumrmy7VU9fhKCjhXRwMfeNQX1BhnVEhW7moDPYCPsvsdm4RsPyksvbibv9n",
  "key36": "dCLNiiEYN2dUfYvXTdsLBacBP2njmYBhcWqYEWV5D3tQpkSTVkz34PBdzVo1GJQE5VSzQyvFkD5doLBM7HQ94fB",
  "key37": "5wK2EFqMjNUYX7hZEdturrhgdNSLhMqA6G92eKox4aHGYahTd4vux4NaE7hBBTqZW6M6NfiJXiTLw48uhzEtUCDJ",
  "key38": "28KXuHLaHGr8dnZxWVAANXs9knEXSg37qPvKym9NS38mHRmXbsQVL6KVekjjH6jtzCTwqemiwQZzmPVSY6mxv8Ho",
  "key39": "4JoQF3v4aZGVze1QUfGsWj4zsxUjyDVexMjbVxCwWk7n9yKT9tYc4msYbaXkjexLKY8EFyFbqssbcr2nJkfUZ9Xa",
  "key40": "386tvaFqdC4NVA6jq3vxMf7dPD4L938kHKRLmWmrN7juCaPVPxck4QQho5Fk6Ctq6yAAgfAVm7skMNuaQUmAaUjD",
  "key41": "4FP4LndfxmXxinuU3c54yDeAPf8KRi1j3h2wAUhNyAuyj2y6pVj1HXMR4mRRZFzZN6HWtFN36Mh3GjgQdZM8iEyv",
  "key42": "32iAGm9ohSSxYr8sAi9MtXqaoDPtDVuZkX7Xy9tqSACMZ6Kb1gEP7SgThcnYaJBWdnJNHgmzaEWP56oSsG3M7Sxz"
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
