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
    "3DXzWsKfGx9sY59dv6obxCMSZTPnQNdeNTYuXx8udFjMrwA1BmgQTtkGQvf6AY3xZdRvJYicCH7PkUCcxNNz6yPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWXmpXFdiz1ek8YePeh4YrxU9JA5JPdS71MK3LY9RUp1pmbcDPzibCXMjN2s1niD9WCjZ4GvJQSmzqFo4jJwZJ8",
  "key1": "5j8ouajjTM5CLhj5GsN2bMQq1pnudbrUMptLSoDvUfLpcCdUvFUHjf88y5mZFhd3h4rNYfhqXL1BQvuUBkkXXHTB",
  "key2": "cqpeMLuMcsahBcqdsFchKvnPqvXho2KuUeoAqURwqrvNAEoPn5E3C5JB4tiBvigMg45GfmsdRKjJmkAoTR5J8Uz",
  "key3": "2wudARCvuxsQBznkh5VZXWZ54yosjX1z4QVKCQ9iwY6wL16ZZVURgEHsajQ3snY73m8CvgfZkhHRMjkKz9r5pFs8",
  "key4": "2fpxvAnSzW6N7h727uk8HuM2zELmb66ex3B8omqFvzboDbjGvZRUnuj7gyVZwPZyKuUaQhi7eaSwkMLSuif3ReoS",
  "key5": "4rrY1x886rKGukQVEb5RQD1zV3o2HmP8Q45u6dp5rWiR8fk5audy9qiBRys8PbLb6X4JXPRcV3Rc8kug1K9UWxpa",
  "key6": "2bgLTt4Hh7ey45wPA9j6VktYywGV1D8CYKJhGLKnDaEmxSEtM47Vm6P4Vn7dqBbvitXGPfK67Z52Ec7bjnageGnB",
  "key7": "2UmGXqATwwSzJaJDoZ4vPmzyEgcTrpbMUFM1JN7mmhqv8bCuhs2WfNzuyH3koU7NHWrfufzh7yggDnfE5J1j4vkr",
  "key8": "3osHygXpWatHq9GnTSmvJSjptYPyapWgzceCS8Xj6mG66yMCeht27bzzKGNzMFS96YSApKAnL5pY3KaEE9rxi6de",
  "key9": "3VfEAAtxBvTdXtdZzaSCfG4RQyBMxd2Aq2EacxDUPbGt4HpEPBMWUhv2wWjToSSBqNvU5GjgrtZnf5CnrNA31kYP",
  "key10": "MVayLYDh3gCNWbBxodWwJGcidmf5nnyTw4n31cAfNzUPaibska7co1wATbZkK4MKAhrtzMrpnhXWzVvFkRyd4Xb",
  "key11": "4PZdG5bxkMgRBwJZjMJ1ocwqVuZQNp9sFjH9BZKcY5GndUrfNufNKoAH6mV6qepykaxTVrC77prQ2dDi122TwhGg",
  "key12": "292exMUoMRFixjcNh9pgfrfdTLEo6eqiiTK1ifsvjNchxx3ePjnw39NkZewEpuWyvRfcJ85yUsvr79LiThtbcMxa",
  "key13": "38ih5wGxd2nsvmBAiTYRNajw7pmriMrnEF75U3KyDxJXY2aKeSouDZbA2vBTgCNjAXmXtvRHVpG78EuzXYN5zvFX",
  "key14": "3R526BrPQftAGoSiDpwHsQPt8zwd7MbGMh45TquABprLT75ekKPXpKGmYvVhik2Kek7EngBQp3nNfFpdspNBcEyb",
  "key15": "5D4H8yTajCeCrveuoQRx3auHwEA9xCHsC6ZxzdiBmvcDrBN2prLw8fSbSg6XGm1ouVr5peqah7UHduYWh4w98Wur",
  "key16": "3ejmzA5iPavCu7L8F4W7FRidLo1wRQ9vzfjDWUZ8keRFtcRNEWvRG9mZonZ2h87sfj4F6H16hVRV82BTvdbG4b9c",
  "key17": "4Y2rMqcjpMZTcA7dXRYFSgisi5LeYWyJSKAbDRKcQWYBrLSTmfsBpMNpENdKLqghTRp63e4Y4ovh1VJn5h3jdbPb",
  "key18": "4rC2uGcA6wAZkMn4aquA4nsWzTZGA7inNQVUaHWTQBFRNAKNDQ6Rc7cPZPvsgE8Zu4pRmLNPZTmwbseR2BSfZ7Hp",
  "key19": "5zDC2RJZe3FhjNvW5DsRgyiwAdNobeoQxr8SHUJNUnqcUvr2tpQJJnDRL1AD35FpxdtEhyuNDfkGngeShH9GcuDT",
  "key20": "5fQNSqWBrYiMkBPUQMy29apPYwXrzBPWcw4zHCs5SfrSmDcBvi8jKs8V1X7Dp9x4MbqsxS7mAjCwrSoR6aNPve1T",
  "key21": "2yLqX7CFKn2BRVDxQqaQFfnMAsZjMvaeoBJ3fz5AGC4Yw7ypRQJrdchrRGyZw6dMZAh7wf73qFBPzG8rW3dv3MfJ",
  "key22": "9zUjZCwfrP5zA7dkoChpzNvRdnhCm3PgubzPGELkNeNAEut7fSiGWAZF5YtWNCox3GFZhAY3LxpLx2sspHbJQ4v",
  "key23": "53Mg72xMcCptRAWdMzy6eiSBcc3bRPnMcGDQgvfmMAniTPMLLT9cpkkKukshJxphjGXPFPC71q61NKV1nd89RdzW",
  "key24": "5GoytQffcncqUhAwfo5QqFKZYaEX6bvsWVEMxHmxKo5EXWBvXgAh492bptAphtMXiy3PkLXnmT5HymG5EDSAy8D1",
  "key25": "4CgeyykwjgBz2MWC2zebmUFeYSbdtNJLt45ozsF9FGQnpSQK3KjNoUWXx7csqgdEMqL4uFyWhrsBCaSAiRE4kmSJ",
  "key26": "6nc3faSYTm6wm48RV91jcuixqSUmb5EHaY4f8P8WpK8UnZhKbyEUSfWXiWo26uCkLotbEioG7jwg7fBVK2Et4Zx",
  "key27": "5d6Pyf5r8PV4rvbRPSVdoYHehxoWB17khdLsFEU8Nc6m234WBUYzQSLziD1c9qivT46uwHbySd6FWsKmKZPMN3gM",
  "key28": "4fnGjuryB7nSsC6hDn3KJRNCg9LGz4Z8UzKVUjFdkqjtMBDnesFUaPb9KTCpfv5HsWYWFPaZVYBEXRBDBxpFmaKF",
  "key29": "4kknfWdF3GZusxg7EHK3Kgmu5mvNMREnx2kKk559vpEqiZ7FdZkPtgchRVqxCH44kdhRmEgfN72i5F8X2iLexfkU",
  "key30": "5gSN8RfzNLLtzf4b6578xKwEZYxXqEHgn5iBKmUvvVaBmhiU51g1dtYHHuip4wxB2mScm8PaNAPDNFX6aVWiC2gR",
  "key31": "3GDedhqSCr8whF8dHp3YXGTpwym8BgUdDq9xA6AWCYLVRurUPpJERMVbdy5CEJ6bRVfRFiBKEFNgSTgbi5KGjSsF",
  "key32": "4kZ8AEdBsivNrvG4DSXUbZJLJytjYfM5NpWXokAMyGoiEbcZHah9CDJVpJuK6fEjbBEGcYLRtnmKrQnCyotw6APs",
  "key33": "QA3sMyCJHBFwap5oqaAwYqkZZ3pfK5sCjJb8rAjh9cvFY7ZB34rX3uWXV1wcyzNejC262BDigtWmY5v4uNW5bH4",
  "key34": "5sYX81E3G194ZzLqnJqgPzSLwypcgKqg2jTtjRxiPcop1pXNMACL9qpkKCXGZEb2s1g9mphVhNmQDc35txrbjaYi",
  "key35": "VDeKyWGwpogTCJAzd5t8wvyj5CZzfmiL6pgMdhcVkqPJagCptwqDFLjKPgXf1RFfd7NFSHEbQMTqbJJwTo7agJ2",
  "key36": "5JonSuTpbSBKFc7S9oCJY9TcbLJioeMUwgCarnQyyTzj5avri6iqGdt39MNS64WRnpFUrJ2vRUwkURiXyc2VLRao",
  "key37": "4nKpapcFWT7Byir8PgqSdFnjk24iN8iGfenjFJTUSWwRMZx3EVkLs18uPv87T9fmjyyuT1fHZVUBDtdvWYDg2pXT",
  "key38": "HWeQ7Kr4jzzARHw81vBzmFWmb5yfLADKCetdjwVT53G3QTYUhRj3nmoVzmGvDfWq2qraYYDgV5Y3gHBG7QX9rC3",
  "key39": "2ke3kiJTN6NNQLE31CgCVEktbtVqWeBAb3tK3DGKH7k9u7CoiWi8nhASJfiSDxMC1qnigEFkzWJc5xnaN3AZmKAR",
  "key40": "CTKQnXV19aUynNomPuCQTRUrCQ8f1c1Hz1txXxKexL7JLyAkEfiWx8zJdjHqKYpuSKAEmxkKf27jaoY1T3226aP",
  "key41": "PniNs3hDecgVoLG4M1jezX1U4p1y37cpL2DqcZQxokfdCfYGxaiTSCWDBaZP9RqAfwVvaRqeUkQgrgryRauy4XS",
  "key42": "3evYZtWywogcy71fuFUyTegk9R164KvSi3n8nbyaX9FeJaoUuqdwMgKcR8p9veXWWus7zRT9mKkP3uSnK44Np32x",
  "key43": "4DYsxFhoxTx245NJjZQ1R4yn5iX8zL63QmYMLDbMRKtBpHNuvjqdheBgKjUcxKge5hht3vJACqZZ7aScBvCREhzt",
  "key44": "3517saZugH4j2wakCVdJfvRqoCb4BREkHkjihmSZFy8z6argGy1C2HhoNNUFmkx5Qx7k5e7ju4unimAjZxaAzdQ3",
  "key45": "2r7k4zGjYGG9icKCRpoK8cafCeVz3pmLnPqXcPbC89p6oGqUkV8jfF6mUMyEEBJuZ88FwAyupWSvnUYi8pFrz2gw",
  "key46": "2ncuSvm87Uqc5Ga1ygHQZQqHLWhf4jUnPvqdAwv9gfmhqBKhmyKcDEbkhwZnYT6pNtaL23DRZfDedMMyht37tNUi",
  "key47": "4GWFbwbh7xpPs6F7Kz7K4sbyNVDrvSvgThA3maHgLRdLVEX3Z4s3efohvoSYBhqZ7LSzVEZTwU6fQXXJYkGRBkD1",
  "key48": "4u3dTQr6p8vot1xutinKYWAqQy4YDosGLhwTk7uHza7eK2wBLDAfid1sYajBfon1gLitCyWkbimjqHopJMBoMC1n",
  "key49": "5dJTHRx2ZwT8LZCZnsYo6Be6a1S7ddz8vMKp7BfMQ5c8dbzekRN4Bz5iriwTD4hTkCyoN2bnzRFujEbVVdMJLXVU"
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
