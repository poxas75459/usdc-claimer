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
    "66KgDDxq7oTB4Ve7oy4PiJyoofzYjG4pJdHYbZMjn2NgNSBcR36e3JkCYe937K9ogtCw6vGMGeDQ5WMqD9JgoqE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6Ddo8ooV256ixeQpLYtzsDJB3aTV2dJwfhDZWFSLjv6mmmjAsyVDLxYDDpZmzARU6qgd8kBNFzDxfoQsAX4Had",
  "key1": "4Jxj2R2kkykWMKHRueTg4BoYRvr4P6dC5WsSXdCrKHBq7sND4xtLw4MmNJhsk7Kkb1uhu8NoN5RCvcdxbQ2AaaSi",
  "key2": "2wMcQsaV4NoUHNriNm47KiyE7VpMiLGDadRXpkShahLDhU48HyEJrvmDdcQqecPbeL4dJD1BPBsTkCRTURdaBXK3",
  "key3": "3xt2xMtw1fEKvHthDvTLp96ewD23PPccRayyYpgrfPz8kcchzDmFTQXrwCpr8SsTd6DKvupSugjWwcB4SayDdH8u",
  "key4": "5A4soQ4s9AEYCbDUaMKZFMKYnmfFmgSYbGYJJnCsS8qcmXnZ7hco8gZ8TQXy8YtTiCxvCmLrBcyYHBYmwcsHxhYK",
  "key5": "2VddUbLGpWaQADbLcmHQRWPFbDWV7DAp6XLUPRjyxKW3miiR4qYeHnQ91Mne8WQc8BoE43iQAtMT6y7YwJKkseA5",
  "key6": "g8bQ51ExANgSLPUQTNB5h9BreKE97Hxz9jwdasB8TFvwKt9Tkw9JJMHyEPH743Zvkh3jETzWchgbFZfmqkNdPnP",
  "key7": "5VgcPK8S4fPyjSHrQYacQDFZREjma5cLmRd91GFe6R5dJRJtw4gjrbianWkoKXVWvzHfuEwmw8sMcRqrFZidtGCd",
  "key8": "5pEASiaC8aBk4tZV5uMXkoaCLrRbfz3ggkywGP8gvsdqSLxHxG9eUuLCu9qyoLpgtsd63xKxLsrsbpePJ8193j2d",
  "key9": "2XudGDqfEau1FqQ1N5ubvxLW8PTSMZJbmTqp1nAr4sUT7fWVCjALmRQ7Wkj1oyMXKLqPnrufrqtAwXebkAVSGCpr",
  "key10": "3ro9jd1cKE8Jb1fULbgUxBnotsUXepK33mqd6GV6hDryCxyQqwutDvbNW92j9U8yn5PBZ9izR9Q1MxoEQnDLkQio",
  "key11": "3s4AVJ8dBHX1iZWA68FpxEpLx592qVwTRUujad1hE2tngxca82Hxr5cAsSAQZZGc2kb4SfgDzmTNcB5iySvyYpS6",
  "key12": "GWVBahx9JwTqDX2o5UJtQueFuVvy7kK6mm9uMBp4hAc6ysNWUH7dZhr5eFiEPiWMT4b1GeKWuhqc6endBBtsbYe",
  "key13": "4aHcQvuQoqnffuMYsjUsnzVQqh1WX5GLgNCkoR7F7wGZEskPgKwYfQrooJduZmFDtfyPy8tsxsTTWYxBaJMvdtWx",
  "key14": "etz3qozhtLwJBiCZBkMwcry6V9ZSZGsuGG4WkwMsqf7AgodNjrpYYNBxFu8khunAe9JLmSWWy4wXAS8wQE3tFQq",
  "key15": "49NA9F2wd26bkJpxykugbeP1pYnXsRgZagf3Uvadz2xvpKbdnpDrzgL5GSbS6VZYFCu69sXSznG2oFwSvBggzvgL",
  "key16": "fyCGU9bgMYqexqDgKSj9GwuyabwUkvbB6pEjPFVStoWVfh35LWhrFhnQFvNB3d1Yd6pCQvBGoTzdVMt9xcFQpsv",
  "key17": "3Te7fj9mec3dW1zMS8GjPshwgM88pQfE1fcaR18BzEEG2VNXYTiwuFr1V8AQLWqQyxQx5JxctBYYfoVRu3i9w7Be",
  "key18": "fFJ59mhneE24YvMdYmcQodRfWGufkpAsVdNLdGeHQZ2XEntKigMxbAtraKzGKTeLhHJDB8ZWRiaBJc3UCzghVQF",
  "key19": "4yRti2mjcHYSPMcLDQLMC5GWqhoEucmbRost3yWGw6koZCXLvwWTb4TUnHuZPPeCwFbwZiTYMN1Tb1uP3pGQSqRn",
  "key20": "Wq9HqHNiW6TA7moSsG4NqKboRv6ruK7122HPkoKVtd79fJK88Y7JBQ4gMPRmvA7pkmm7q4T6TyiQTT7vCatiKTi",
  "key21": "5JkjVrpcpvBuHSLVRVnQdErb6rhEQuPonRztp5TCAYefumGsJQZTneNs4u5SgyH7BJczaax3FgjRLQDATmmt21kT",
  "key22": "3qmi55ongT15akA2cq9BdZNPGW3LAURCLCdbcxxVt5987qVtB6AdBCdBJZnkXmYSkA5ojs3kCTx5KyFwQ4eUKU6k",
  "key23": "5xff2GtYgkX8tY4czCgW5hw1aPoAjdgBANEXMcu1ZqWVkff6vaCaF7217nkNmm7ZLrJS9p68LRRiegSr8WSHN9dh",
  "key24": "Y9hNpGFCV4rx8kGbQeRbix9MAMFChtdeMoa9v7THLLBmn3x1B6i1ZyJDkNdg3DktzEomQ7NsCwi1XZM5N98zvkT",
  "key25": "2Yr5PzkCyqrporFp3oScD1ksEW9BJRttFsU19hPysPmMR8XNpmDhJadt6qmADfe95GHQHinJEDDusKqs737SZwnT",
  "key26": "RUsktP4JCXWg4h9i4Nufh8zAWUG2GBmNEhFTrGNCyQVBk5CuqS59QypkfoNXGiXzJftfD2pfqjJAX9GoVweHL6F",
  "key27": "53QaFBZCWjwprVnUg26LpqVC5X8QmrvKYh1Aoz5DAxYTfV29BJpzeP4SxdLpCoh548jbM8TUvfUqwQhdAXa728jB",
  "key28": "3QZxZu3xAZA1Td1HPAeq1t3u15xVn1z3fgBkrPNEiZFc1HAvKyZYNKpYjtbNVptgfQnm4aTkbkUA7PvHGiP2T4aX",
  "key29": "5jk6ijyF6s6ubc4DUZjoc4bCoodrPLGCeesHRYmTgadEBqBSY2ds6jCH843pccbp13n5zJbRLoQLdp3Y7nV7AAiN",
  "key30": "5sVcQ1GTJiYi93W1Wg6Agjq27SFQLLFreU3zvBdnV21frSaJrbisQsxJ7xKhkNNBjaejbk7KhoTiWvAciRZoBWva",
  "key31": "2V1o6xrryGfphaXAxXEZUqrvYFymYGKWB9yVAUFPmwdikgqs4MGXfRUKF77nyoccuDbwiCTXghqgysg1eancEUYr",
  "key32": "1m4ECCjXYtj8zGmJT8FC9VJ7WPf9f894hGjEeZAyKjMQ17DDQ1A52GVG3xJogQwuGzsF5sG27mJUCgYpUdrFGHm",
  "key33": "3dK7XHqbea3mM8viRM7tg9f1Tg7FqkoKU7TtjJBRofHsYR6QnWXVgqkUnAJmCmQnzjT8Qip9UXnrKtuu5upFwCga",
  "key34": "4jJh52oNnEP9GcPZrKKdPMUvws55c4oAgrwvmWygBqoMRW7xWGTfFMfDfXLM39TRJHQBDa2howmsYcx5GSJHJ9GR",
  "key35": "33DACZGc6sWdtr3kCoJ7VZ1aK8ykqNHzPKDkRQ3MoAvexqv4WSqakU6BF29DHVcaHdk4qdeeVLSu4MSfJtkK3Pc4",
  "key36": "2edZwi3hNHUhfHR9YJZYiNxwkZtFzjDPr6goBLCFvsfxQm1zAohAhwk68dmAs4biXHdNiDko9FFtnhy8sBFiNr2g",
  "key37": "3kj81QKwsm6E4i26MwKkXhhCSoVpecu5aFXipbHUXzSV47aMTw6xBFgwBsYrhQdGfPetKJjN15m2qgCtBhRZYwmX"
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
