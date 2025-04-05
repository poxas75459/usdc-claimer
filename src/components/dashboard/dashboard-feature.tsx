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
    "5jWge1AeregGEAbLMExz3Wk4yawYELWvozeZnpk1MRaQd88ChGnEbsdudqKVWugMhkLzHAkoYY6gDCDGC922VLCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CETCSNqShiwemvyrTdixvEYbzbpR3RG2sStd6F9wh1Fz4vPsWXfw7fviU9Z6rHUHYLbF4sHyYvSL1VLQ1LRpGsZ",
  "key1": "4UtEP8CEaJDQ4FT2D4CKnWR7MXf4hMDQ9U3xsbmCCcPwh4KJAotQ23utA9BTS6GPo15WXV4Nvw1cjiLuxuY6rVx5",
  "key2": "4guXdGkF8MrKRAcAh16HMpME2e6DixjdvUaNz5FdaHWiuPezLeqYpankrohbVvy4KXHRyQVgmoq6YKzyA4M45LXf",
  "key3": "2qFTHsNXbe3E9mroGpmwkEDm6YDhXSbPdio2Z5NRzVtxEqep93nb8Unmypnri8tfB3di9ZBh9zTVzrrAG8vXSFKo",
  "key4": "5cYePJG4uBjnjuWXuysP45CZDQrv54YsFavG7B1W7LRni3JCvafR7j8QiWLede59a5q4BQmSYbG4PGex8MP7UyJw",
  "key5": "EvB2hizqqcxdo1BVTKR12AFzZEWz6VLxuQzdDCjauHf49kT9PQGdRTQS85o7xFhU4D4BhC949fVP5xW49jUYTyL",
  "key6": "5eGF6wSWVusSMdYYbt2QmEFxCZMKmU7s7jEYJwbjxF8jRQcn8D445mhsXkGDQZyoske3VZB8LnHJXXSA6imxaHsK",
  "key7": "4dDTXYGW9k77GFM4dLXr5FTpaW5K5BftAmfG1ZCVZk27yPFQH1UdE6mfw8V2yW58i2G7u9APC7G7F1LB1b3fN9bL",
  "key8": "3LQcSP1K59BL9kPyCbZ8nWem8JdDjB35R7xarfs9awjTfYJWtjHAPhY1QUJVxHyEBHNFKo75S3ALcfBLqqEetFB9",
  "key9": "3prW57LmHgmUWMccRbPUZr6M7irduygSsc52phRV7M4d7kYUesWnxz3Khbkg7DGDzZv8xPbjSy3hcdRRWnx9M6sy",
  "key10": "kW4bBhGjTfGukkjPsA45SBXj26d4im91DtrEUqJgBzhSNcnm5xkgo59NsZDcw62Svea6igG3ovjP6JGmWVhznne",
  "key11": "tGpVLFrWuP7fGovspySNwGwkNJhVypbPQq6rBeYQRA7k1HFCx7aENZ4AXuy6d65DuC9Lo9uPnGJrsonDc1itkp5",
  "key12": "7hDnsnUYmKH24oSzVCaomUYLZ7cELJguYBgxZLHvfUZsUwZx37esFScpYL5rq2zmZbwmCebKGSZQGmuCEnZfNFK",
  "key13": "5QHZ1ejRiHfXobMPk63X3LdFFkRT3rXZaLWcc5Kxq8R9AESKVENdG422Xvvgo8cDsuTQiJJKXQRb4MnRQJPtaiBV",
  "key14": "4P4ppjgtV1W1ASe5hG678uBE2DHQuc5argfxDhwwwqJwBd7PC336W5usfGAQzgYYPAtohVRTDspiLzgY6a44axqc",
  "key15": "4bFiytgWAp3UjQoysSr4FJso5G8cvdZumjtSeKLZ81oCR5dhwWhYYsXzsQispQorukFpXQmKsGQfwP5RHWYTbyVr",
  "key16": "5aoXcDC5brrCSex8uRuF5HNFP5AgFbc9pBS9bsHpJCwpJK9AFkS55JkoAEfwfopsWbu8uhF2NjgJxWbtcH11X5XC",
  "key17": "5R6PF88dzGkNzNWZMEYyG4DLTuTr6qWApcvDhgfvKcJBYqiYDsEn7qeCDPdn466Th88U2KrhvTR1puEKfe5M9HqY",
  "key18": "22T5h1VaxUHPgmQSVgeaEDtbuNjLcYWysgPvFGBQh2VTJnnpXNG85fCiMEDnv8jdzKCUhYLeFusBTNAZHpSxBCoh",
  "key19": "vKZK4ADKnAhnMj29hVGxdYZasjBaQP7zEXG41XAeoR8uGkcfPFFbPV61t7B9jxb1VGKV9L6QRog5DMpapv2vz1n",
  "key20": "3g5PEsqx6sLyhkoq88qJRh5sTpcY7R1V2zkFRoGTVmpNZaktW9mLJ1L42rcQzz7KA6GHa6q45Stc2ChhQizHw5d9",
  "key21": "4swsJotBL3pvgSr2Mrp3ivLatER48EW9DgVtPnosybk4bCjqtZRN7oqaMqACqhA3CnPx65sZNQauhe5PW1CTQVmh",
  "key22": "3Stn5QMidGkgCvYF576eY3GraTRqwr7BmPbUjkqQxDhvmRfGa1CVGuyD1bxfyEQpaDd9yBsXeozATH4TLptKJDzc",
  "key23": "37hn5GQRjskdJJYWRT6kJByLpwzvJzAMg37qnt4sJzXLKzNDoLXYnYdY33xPYPrHbruRSfkAonxA9bn5cHaxK9So",
  "key24": "4oa7b8K2LJyLcW51xXHGANXhwBNzALHT6XrYp7AxhbGPvLxEQV6WFPxjjdmSW5J8tP6Ck5BpSeJMcvhpg6vQ1J6a",
  "key25": "2tvEoRtrfsBvHdWAUFveX6gYyJzTteQnijpyiuctuXoHUAKT2Zxo9vWVLUA9YJJ9jEU5zvv5jv2YuGqVr4PzcAcp",
  "key26": "4kwd4R1pdE2aUGu9apyRmE7fq5WvJUdzeKJYvVm2eNA5PTHF8JQB4Jr8gbdZrRut1BAKsswQNU3gPQWLUXWqJe39",
  "key27": "2pxM996KqDVMo6mQdL5vTycv4FhMxMUCB2bHMnxuqqroL5D53D3cY2MTNyRKkGMHYEP16oDhkkkSz1Xe7Msd894n",
  "key28": "22CLMgiPDhDhaDv9RyByeUXmYjfcgXxwaJzjCvkYsU9cYenEuKHYYy2UsoL556pF95tGRUENs6B2kxuYc71cVnMA",
  "key29": "2toVXyfUvcVsidNjiUMJFhpxMbWU1odbwr1fDGqsYso9dikprvfuYgbiHfRmnp6hjNDPNsnkVtL2zMWwTFL1BEVQ",
  "key30": "63koEgLyNtd2rp7nahMvAxc3nHbpeAavZ8kc7WVk4Sx9F9US8EKz7GM8x3LyJBPFUTkSPv2A1wwQn7SkfmMjZUzK",
  "key31": "2ijaTK5UCsX8RWPWLBKHoSmAHrz2Bt6Jpisp9XqFNBsqcfTAg6tZFMBsdeFi14V3Z1YqZij3i4bLm6TfE2oVQcjm",
  "key32": "59TtfYvKf6kspbpCTXto7DrhtRR4yqDZkhiJot8JtXboP7vJatJVPWNu6LLavcqDPK3UKpyYsEf4m1Arju9GVi9Z",
  "key33": "4bQedqEd1WixWzyxBRQ7Adj4ro3B7iffULfxFW3HRkZH8uVdvXdQRS17jzVVqQNEzhrVZXnscHRJCqeX1v7jrhk7",
  "key34": "5W2sWDpZDW9UBv6w38jbNk371kRT4W2oQeMAWp9iL9guwXVv1VzmRm9VvKsiTDeoaiZaWrAot5Z2GuYJbRgo1uJF",
  "key35": "3UWhmMBunWPzYCZpNAXqmdcLoyXaHGSWEyaoP8yWpEba4ASAC3a94WpmcEyJ1tD2XsnECHmRnuosrvQw7T93ZRjU",
  "key36": "2F4kctyTwwKqQYxp6AbUZKcnqtwEibjxqpNbmtRBtzrS6Dysy7AXFVyCb6rKUtmMC45psT5LrHmhjJT3MGjx8Pjv",
  "key37": "5EWxzHfwBr3RnfdZnYytiKpsUoNUvU63VycGxvkEmR5H1zaD5hit1FQN5p6AUkLA5fWcEjnzoYTSe11ejt5MSvn3",
  "key38": "2edxx2vHzynCWu3iSPCXAMz8Mu6k1mkzVNL4siNYwco1BtvHiXv6n9rjxGMPZiJyEBHntZEkFP8otvZLKp4PpfRm",
  "key39": "2QZymt8wyoHz2ymKNCpRYsrNw2NGmAziuo96qDXBYXXicGLKHKxQqUyqsQp8Na9UQggmYM1EaeVxkS1drWtrpykr"
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
