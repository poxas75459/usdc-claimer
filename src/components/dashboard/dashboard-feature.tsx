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
    "2wXSQshTwYKdvtsZXefC121Su7U9sfS39Azja2pt8UrjQ4VQ2tEpdUx1y7XzT2ogTeNdzm7jHCaGUBsjfgAsb1bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R9XqygWTdNeH1G7WFsccnEk6yPYnkSt4nHob8aTPsQtJVwR3Njq69GH1rdMaYPGhHdyAnuh4LVZNZrRWXXmqv3p",
  "key1": "5zphU54QRukNemAwLiseYvzwK1axocxRkUvxZkykJrzbQgy4LQTUhnZ4GnSuNzpG8YZ47XtTLpYU5bci3xBpYYQe",
  "key2": "61NnFoJTTXWQbW9JbGsHW5JGVJfXosnMnngCtm2ysT5VMDPeh9mop32MoxxK5eDbRRYAMXs3kF9Wmgp34pmcbPzw",
  "key3": "5B7TxHhqrDtEK7dQZJ4bggGfFMVfqghYgmvZn8hexW5aKs7s3F8VfBmwjFBSkepnECnAProypHudq6cLCicfQSbx",
  "key4": "5dHHUgpunX199R8c8Q2e93QM5ENhYM5FwvQcjSSoxB2Kn9tLXqwmKEaNsf2t967VStucYqfVDFaY6n7cSAv2xysx",
  "key5": "XFVouJJtqzuodUUvqGgAaXWUAw7QA2zPg3k6ACnuGQoKTTcNSZKUSTgBQGv7w9NJfnh9YR4Wic9rcyzPQouBDr6",
  "key6": "5SuCvX8dbnbJPzHwRnQaiB8pLbwa1sua3YWN7wAiorHr7CJTLM1D7SUpYXFp8i3XVtk7wPzwq76X9KGZWPaFdJoi",
  "key7": "5PajeZLCXocRZd1YzU5Y13LzSueJmBX7qrsRJose3zXh5WtwHXrQ42WDfcsYUSADdUGzwHdAWUhk6QLq4maDBqZM",
  "key8": "5WhRjW6Ef1HCHH15Jb6NwA7vMPk32aEkgcpn2QaBaqfKDsxq9yqumoCtD45aHcxs2K5RBUkfoGXiu5Xasx8d13PM",
  "key9": "2W6ihES27xizjznmizmK5BbvtT17mWuSG1eEzWg8NYFgEVydqzbqm4CyKr3aWAahNqa5pHJiHXskEdEnrPnAWEJQ",
  "key10": "58uzYEELVUSdvddCF1GAR9JYdptCBwE2bRDTmWZnXGorosySnimxz7Q2xHTx9v6mvDUvwqESPcpNYeK2akrRqVci",
  "key11": "LBygWnvicFJsYqY96zANRKwRhShTecr1Z8nw8oZYv6cy782KnvWTB1MBLyudZ9uj8vKm68SgsuxBe7AmsuSx2q5",
  "key12": "2JfdDVQj8WFqbVqLCUMy54LidVSLf38dLDMx47JrYA7VoB7Nyj4npYt1gGxbAZeAWzRjenJ9iGZ7S4QwHyKptA4s",
  "key13": "qdA298CQUXwckBMPsnaQCZHD3waivCQvDJeyE9gakUns9gkbfFwErW7jddLuUteFbXAgXCRxPiptJZjytwTYhGJ",
  "key14": "2PKpvy92zNNLBZ6fe9Cd8xERyi8Ymgc7iXdR6f6F3tDaGQSmvjFortCkgnDj7L4Ws5bzezP64HrRW37HQ3DpnKgR",
  "key15": "2WtA2Dvk9KdbrVd12VhNAz4V4erxXPzKk7s1Z43Ebahtr77GjrNH8L41hDT9DQQ4dLe77JPrReaou56rUTx77sKe",
  "key16": "65Bcr7sZQumR6aT1rvDF52o2ZtZvCHojT11ACJGpBZQxyy3HNvbZo32tQeckEGamc9PDTW3b8bHhDfqLstMywxnt",
  "key17": "5WwWuo5QmeoUU3uMJL35fMVNubU5sBu6A8MtYmbXS4iTrmYvaN3VGFAHGrHnvSGCUEDp9T5zahrZ84ZoEesLrCLx",
  "key18": "5brdm5AxBTnSLi4ZzhPgPnoFRYPqUFajdJYuTyAcX2js1s3LhMcuxUPxUGPP571mQEc7rHaTG88CWb9svqQ8iamu",
  "key19": "3AeLWTPFyng66Yz3QrBuVJ5LUEzVzGGvLEih5enYtHZQGBhZrNmQxa27Ld36JLG5yWsvLU5AECZ1BW9gjqPUVWf6",
  "key20": "5MpySb1UuaeUF4Mjmnda7bYY2KkDa2TGSFMMdG5qtJ82QrSnN6u8EHbudXWheTvqMsb39Qyq6ygDyHG6MhkBQJTz",
  "key21": "5UwyyeMdABxAMnYpuJ9zAwZRwGUfrMCGB56UWLwiNZXGEbRu2u7LXcg8XyY4BeULKxyLnjwKooNkNsaBPHvYPEvY",
  "key22": "2dHtp3CN39GAVRjXUWmP2q6x4UK5Rzyc2gVEKeu4dEVmmAEFY9NfSgPdmjemVsf4v54NmvtLJoP5WJHgJRUKfimD",
  "key23": "2gUVAp2Ssq1K6isYnfYE55vY3EGEkQPNBfhRpRyQXAYxLZXJxuWaKXv9KEpjBH6T8bQJXJWnFTudN4LUmJqttafM",
  "key24": "3FdUgfW5ymMxvNPXSWdyQHwNk4znd2UBhmNjZNXk6vjLu1cVX8eN1WWrf2AZszJtaYTYNL9fHxLscBQ3mdmFPxvW",
  "key25": "3BkckpKxD91ncZFEJKsTq7eEsrfWCMmYLgNd7a74Wa3oVB2rT7ZetRh5f6iTprADBDAv8JgULzQZvHGzF2bPivGj",
  "key26": "imbrtfVAAUdTx48J28QGJiimy31Wz6AwPutCUDKXpTyQEnCYqodwBH1aZVnYKn9Co3rXNtqDQSr88g4W6dYQWBj",
  "key27": "3iPd4RtVKy9FsuaqUQXSKdTen27yhAAQ6DQJG4rfeC9NWG6d1HdHY6sBaZbqHsheYDtYAuQDgUyGUkbnMxd3aa9D",
  "key28": "5QTCApw9Q1wKqadqATAZMtaiM6XYXuWDbeJSCu7kd1m21Jox24EpEgmvxAvnthb56mVbjFYEto6oEeQkWmu1ZRHb",
  "key29": "23eN1nx7XnByR2y2eRjJ63zxbVHjLFRYpEpkqwyB6x4wQV3zzMCLu34MTFtFbYdNpbNZ12mhPK8FFnUhkmE6GkJq",
  "key30": "FUS34n8jJ2aQRyX3YCZmGQPUXHBtkWTTVMXZX2gKMg6gWHyWSHkbuB9YpmuMpuJY81aEdU3GzNTsR68AKRmns8y",
  "key31": "5yd9d24JhB3Qu4mobKN1nnBbNYFi4RDt1dygFrduYQYWGRCfuY1FSgzA4XRc68iK69mNAxTL5WswLU5kA7qN35yk",
  "key32": "4XXkhmV1W3tvL9tbLedsViLmHWMxXNzfkypmsVQ5N3imPjzmXRVRJaF3JQQJkh91GshwrPUyznwSDmLiYFs8UoY4",
  "key33": "5kbCCfKyCQe7xv7bZ9Tax64TtZC5MUxPVNUxUfU1J7yfnqJT3CFb53nAp6C3aW76i47cPS5MBeyDwDRdWCRTDXRL",
  "key34": "DGjt113asDC46qTZyZgJ5ZbQVVsQKyPprSACq6xsgfZAwYNtGvptrVajgVKYvKPkRwg686TdU8jxuGctnnXnG1Y",
  "key35": "3sptfCkbS4uECZx3jxXLMAYL2WznmY2dMcZM9RQmKYaK6RupEFvxaKs9nb2ukCqnjtSgPHMKrGCAikVms8i4FyyA",
  "key36": "3ynm6AvmEgigGSaF1v2aAwmsvv7yGToDRkX12fyx8JiUjFMpgvMdvL31c8C4H2sZVW4Bscf2aAdpM4NSM9qDWkts",
  "key37": "5ttg8Yhcc2AhaqeUHGVRs6kcFPZN1pdHiBExqENkgof1cft4rehZkv7BDASAALiFC8EKH2V4KPwvwymYRNnEZdqZ",
  "key38": "2EUHd5FFcnqYNdr2Ueg1GxBp8SrCgRdW3YDphF9vosp3WuZa4KnY1t7Gm6e1fwrM3n4hC9Z7e7AeM9bzwqNZEC5D",
  "key39": "RhsGriB9u83DBWMHmVrCujm5mHX1D5B2nyMnmVHCWKMP4tx4cKsucv4qVrSsQ5kzBK2eNvC3kVQGoYdCr25yUHr",
  "key40": "5yGTERZdwfjTckqSwN6t2gW4NLywsn7xjA17P63YoxPKU8JVrNs6psYa8QCLZFRhdsD7HM6gn3Q13EXw8Zgu69cq",
  "key41": "46NTq5oed73Y1P8MXDH7SfpV9hXRQDaD5gZ8NcZTwJoC6icwSSsApgW5oqVV1yg9htRcBh6TSiWQDhPSZJhvw86D",
  "key42": "2F4hRWTVpoH6LPtvxHrpz8HKeob4HipibJ2WUfNPyQNiRRyzo5UbduSFEvHNQs6q79aDpAfR2gZGsEAVBBwCj4CV",
  "key43": "iZmBzqzq48ruAF9VUcRMwwAfsk6edKqX7Jgrz1cTks6fZQZs45R6PMRZWPYtWDdLMXjXUrQ9WZVjKAYMBYXDkjg"
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
