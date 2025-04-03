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
    "5ac6WLRpSJ5VqPvzAfDBw8u5boj73x2b67N3ZTFvdfp8VnGzzZGAZKkJE8jyNUazucU8btBFq4ESubRjtRJhkq4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyLxeLAtYrKiCArLqD6z4yycHCXxSvEajo6wJASwoD5P9M3WaKH3mr3hassPRbk5tZUEEcpZJExWAoxYxZAywku",
  "key1": "3uQ49jwuEYhtw8owzCxpEijY1FErPd55UNNwHG8QLTSjQHcvrXUEK8H54CACSVVufgfyAK4uqZSU31Yr8KFDY3Kq",
  "key2": "3PhE9e9JxSmuHitArC3UB6ax1VMB7BbvCPiekiSsb9ns8pGMGoHw94mVffV4gipXL8TnL18xoEGUPuKB6vLW1hvh",
  "key3": "627Wer3M8AGxy1YhFZRDaT63rDsDgwhZE9tpyCWzdXQLSuBa591hJyRt6nMFbYSknXS2aDiRweduHVsq11aRcwfL",
  "key4": "4VXSyvg3bfPYt6NjxwzD4gi4bSEBSyHzM4kJbsMV7jt41h67tTMVw6Asjks4qLMfxrLtYw1D9E2MXf2vgYJ7PUSe",
  "key5": "2w317nB9VYUxNivpgnP2V6FHkUszxVUFTCdhemqQEr8DjZMQfpxUZYNJBXVZzj45Y8fTSvnrS9xVeF37FjZicmUR",
  "key6": "3mPp5HGTueuJD9iviEUEGYgw1mYV94ApNt773MAkcdybuv84ijEUT5dWRQjyNhjtzQashYkQx1zbS4zrD1TDavj4",
  "key7": "4nuw7JNpFY5u6av2EBZX3QnP9hBAVLofGbVDAEVmXdnJSN9zf6AUYFo2j4fEd5xNxwmAWfMDCeXHvLrXi4qwnRzN",
  "key8": "49s6siR7kgXwqdtb4R39npU9K2UJF3d5iyuPnoAwF6y821xYYCJkTRPDDj3LP2naexiFb1VfUmbgBft934NXobAx",
  "key9": "5QfNcixQzxEXyBvyVHd2QEFSsEytkMYhF6fGdDfD9EhS7oYpPg7XzavdHQ5PKfxHAyPBA9tf6bhuCLEEyRDpbFjb",
  "key10": "4gU3Fpjquo8xjjxRdoZCUBBy3nKQ8p6QPpvhcEGz7oTKEXqHhxdPucZDrdoUPwzae3hAENiQJ2hQMsGvMBiTPBrk",
  "key11": "3tQdpDoH7t3J7jjdfXZSVFJ3A7P6Yz4xtzz6aWwXb3j5zHdTsZBaddPLNEPT9cURxmAjd3BmVH9bbJaw2z3LvkmW",
  "key12": "4Kk1q8eBEUiEwZ9fJeDqDK3s9WARFmP7ud2ou1EBfSUniZinvUfxHz58B5Yt5Nf85dCx3QdJWFmGnc8sEdh4jomG",
  "key13": "2keZ5xLXuWvniZPVw3WL6GtXu8hU5J3ijB7yGoF7pSYgGU5ypQCrazz1pUkMBtHapAvDyPatGtMvbuZ5HpocTviv",
  "key14": "54LQELPeestRYpKMtmXV79W84k5645mt7zJ9NdPcqv9DewXhgRuHQGFfVuJC1KgPFXo6jY2N2y3pt4oRfxjiGHPj",
  "key15": "4k6xrgvCmVuymNNJNJD4Q1cWYhBKvRHM6pqBQtQQbW1WBNKwbWFQGnGNz1Pxm6RJyofxVMHcd2gLjpHZuVvoGKgg",
  "key16": "4NNctAxEqnED1fK7WVDLEFAusSZrG6gz8VWvyozU6NGja7mZq3sJD4v2zpfcgXGikAAnTZ2njxXLVQetxJG4f2qa",
  "key17": "3vXeGRyUspNTwPBvvoQjuUCtPmfAVXG8Y7jj5GhbQWuvHgQZVqKuiQ2wvrFDBLrzzok79mJuwpGChQ1yJVg6bBRt",
  "key18": "5fxcaLo1vtmAnajnU5TrQrk45cUMWX5mmRpzUozFwD9uN7eE541jc7njjnNVx5rvPM6d6rQCa9Bf1fg22KCdubtq",
  "key19": "3dC3G9sDxZYVLxFBTg7L32GhugniWQuEsb9SrioUr7mBNV7MNBjSAN7B1iQNtbNDeET6XWPtnPPT6zd1B8qGquo4",
  "key20": "2HHhrFhtEkMoM8w3JZM3ogBiGme7qxgUNdo5DuJfNsGRwWFCKBXrxR2xV4rq32LG44sUfegXKEacQeiJbykt7Cxw",
  "key21": "5bifcUhivQjhkkSe3FaCq5PArkZqpN9XDjZYM9tD9gJBqPxyHTBtzCk22j1Yeh2L4tfM7BfRzfoUnKAcV9r31aUX",
  "key22": "4htFtDh84k5D25xGY8rqF3JQJFrG5yP4MzyjAKU68HVFhkwA7uRQ3KhiFv3XYYu2gecbYN4zr16kUmuCjPqfhNGD",
  "key23": "2LGVP6NWhxa5dYiRyRfPH8zcRLM82N7fj1Dhj4p1EarkCQXPnwvezJnxu3xiMsw9gPeNEm3BWdkUpv1N9A1wvpoD",
  "key24": "4XZz6yyCDPi3vh2tiT3pmzgRFhMCLLmqv9NaTbVXVuQFtavZ5tnUFiRhaiwhjXXdofyMGCk2xbL26TJJC8BK1irs",
  "key25": "5kKdtXGZC8c2jujzFmoubdmutPyqfAfbQ1rxRv3HcJbR76YQQYG6o4whQgySUHjnb9C5bbMh7WVbaUWg1e1nmd9C",
  "key26": "32bDjL3SxQAgzbQRq2picG8bjfwSdvWMPvZsPh2CCt6XoLk9TYsZJwba2R56XCxhfvZuucW7m94Fh6J6GRsYXK1g",
  "key27": "4aC8ih8hEMvc6bEBXqFmdq3vFSWj34tKzBhKroea6dk3Z6SWyxDavLyqL7BR8XkEJSb2DLWRJSvER28sTQQpkZPj",
  "key28": "2Y2wFZyf2xvebZEpw6nzfKxE3BjtwAiigp34MdvUN6GJimwYMj1taWoFKEMMhGMpAJR42U2N87a6yvr1hG4mZfh6",
  "key29": "43SKLde1QT4cQQthMRw3ZxH7wg2JVMmfSMqT3Cz4mGtMaRWvWmDppwRHAhbU4J7R2KpHnCBXaaQTDguCUV4Bogjm",
  "key30": "5dFbZGSSAPsvSJFWXhcsjcQ6JYHGzRVWGfndg1WY8HRYXnFd6LYMT4u5ZLiMoP7JRXgs5bqb3FydC44azmSVCarT",
  "key31": "3ZSAm4tSs9oXFQYdmzSGhztSPWbp6PaTugMukwhrUcCqq38LGW9YiyNVJichxib4CtbB7wQufgRse8Th1UcahAP4",
  "key32": "3eZXzm3E2UhRANugWVar723j23ZjvttLQ4cveUhpQ7tdDWShM2i13J7M8myN4CoaszpXVnenVD8G9f5Coe5Q4M2T",
  "key33": "2xHWYzDDHYhnTL5aVmxnx4z3dNcd1bqrzbJ6RG7JCdGBRTaChBenvZkBXXHakm3YvfS9CcLrW7xHiPNjjuqG6TC3",
  "key34": "4nKiLYvswRX1HcqzA99tSz1r46CszQVf3RtdYwnjrv13ssSEFqjqkf7RkPhP1HTM7TD93fBkjEiPxv9QnqHcCM7L",
  "key35": "2yejNi3ACTKFmwVEm1j3BuMKF7pZxGq38MAvAFfrWoPNqXfwfhhzsWqH4X83WrhMbg2tGTgxcMPUzrf7AA77WTmA",
  "key36": "4792RSwaMHrkKe62PHdqwEB4yHhEhvR6N8CF6xMH7SJdMBLHu35xchi7amvZKLtwMwSkKyYNTh3UZT4s4f1fbyxY",
  "key37": "3T96tgxEEqXDLynBnD2ja25GY38JPwVHCud3XSfTZ59bwZsRquk5Kb4FSxWzfUgSb8enBBi69dqFpirrqGmcSSQU",
  "key38": "2jbkfgV4SSEMrjbQRaejYWxXPcJwhhDbiJ62hcfUV8LT7JP2wWSuSFGiwv53v8ErLnvWfoNDad5RRdjUQiaTkud1",
  "key39": "4GRSHdXqzR1RFP663htYC1fwukZcjLhkSy6ZCto8dbF1RE9qTDr9ZMM9rwcj6ZYUCo6yotLsJb6UDpJU8v72srwf",
  "key40": "3rKtdmSEdCdNknQCCbCta1joep9aiSSWmvEGybRoYWmSiE4qTmvpUBd1kWMX6RMngeyEYDqwAx93stAjzWsxHmWR",
  "key41": "5noHZ3ktahdsffyUnc6J2U85RbSsZTnKopzBqwMx8FYQcjWeobUT8yG7Uw3rptqmVhqbUtCgzqTHi9WDxc6Ekkmt",
  "key42": "G58aHt19uN3kJRKw4urWHowxd13NPq2PVo3fctm22JDrkUdVDdNFFdiSoATjAki5WsosGPeWfdkVuAZEPaABM7b",
  "key43": "49yqXj6XcK7TiqnWFrMDn8PU4gJHPU7GkZMpM94b5UkQEdzrP7S6o4z913NtSS5s1Yo3r3LdFYshn5zDRiBNqdss",
  "key44": "5iru5UWG2u6q86Rgrn23uGzZZq7GPuKMk2pxRkvLh9dv6tDpk4LZGFiiB6nZP2kE9kSj4DaUw2AFeVfsunEHxgCq",
  "key45": "4hKvEDysCyauFZX1LtfXjzVqPZH4aHrMh1EBXHiCevRuLjK3FVe5vM8TjHAxXXGrDpdXD7QUfd5BmwmrBop7b2fu",
  "key46": "2FvtxMGvd5Dj5KW7GK8kLLeSV4YKU6KEqFQzzVvcT4rrLZgf8eaZm2V9FG19FR5pbHSJhsKdML68jRMcJb5tcabF"
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
