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
    "44HuQEshsYm6QN9myF7csLfzSmMm6YsXQV7m8CBoPWhbfKE2MCkB9yrhZ9jtdeGbdTEtTikZFT6pxoBPCAGGEiDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5pxvZavRyEkAB859uk4eZcD2oidEfc5SteKagayptwyxPqpFF93hvL7CSLS1bbxoYeBWQrbhTXrvhy4intq1ZF",
  "key1": "2nHfQcyvCUUrMrDSpsjWcmXkyncpiKpXaUcKxHn4yPaTLQqPdPwiytSHqUX4H5i4CnwZozwh8HChHitytSGyDb1P",
  "key2": "4Le9nA7UYKPtZcaV5PrNMrjGYnB976LXzpbLkVtbfjoQ5i4epaUhh9Kk32776evgtPRYrgfzae3fmm3XcnQ4Pva3",
  "key3": "3V6BhWZ53RX89HgfN5XvYUWu1m95xwhyi8G7sgXRHrfRypTg3ZqdrRDSCGhAEzD6t1enWahnbnXmP7mo84rBofRU",
  "key4": "37NEXHVhHPaBh4D8js6qysLi3vmbHXAV6c4JhRgKfyM1r9WcmB6ztTmWw4zQcvmr6b9YQgN66giRE5nesMqFgLM2",
  "key5": "4cze5ziqJ9CvyDmEk8N1L7QLkfMvo21oeBvUaEX7L31tyiFwc8KdpeMKwr6AbUjDBcy2fCYBxAa3457UJz6jUC2E",
  "key6": "5EK55jKZe2KctQ4h9QGURXm3cqvw9dGgz5M66fxLTrJhEKkQ9d4T6tE8ux81tQMBNHEH1fqqUJGe15QsN8BrZPnS",
  "key7": "5RvHd844E3TRef5Ee1188dX8R9iKLa93AoL2hbFgzoNdM9XCMBRe89fmCRBYgcUHQHsEEFZ65toY574FWJUKTQF6",
  "key8": "4zW1V7b4KvZY2c4Q1RR6QoSBLS74G57iYhdQhmw37Jc8zxLDmZ66tmH26ufXski15sfmn17SNb1vcbBEFEYtSQNH",
  "key9": "33Zm6fGAbfmdz3ru1KkkauX2gP4dXMbK4onpq7G8t1UhBG4rQtgfDc1MXA8ViSadt6Mcbwb5U2b8UT1FqwLBsLQc",
  "key10": "5xxeuZykzFCNqtjABQj8DtZ5K4dSakTWUmn46zM1jrUzWw3P8qt8P3tpbCc2oVYg9BC35Gn8teqh9Db1EGKnZeDJ",
  "key11": "47Zad4P73qVoACNzSutDdV6a94wHA7a73GRuf39kwkqpH4TLscMGtGGp5d8F6fBcqdfmtvgAoNCpcGCvyTA3eRQZ",
  "key12": "3cXDd3Vtb4oUCmw4C3fcfCBEeHEqndbrqhGvWcZcJ78pjuh9p4nGpyxWtefgxSXRw1yJQPQqz9fEu8M8KnBSB6mr",
  "key13": "2VrcUct4J28TC2ZVJtJSa37jtpG2QnYgUU8KUM3QasK5WAMaSGV9uHf189ffJRXa1v54sRqPbYGyvmmoFte8tRFx",
  "key14": "32B7RwTYLakQf9HUgskPZn4xwrk9ba6bpGzgkJNc3vmZmphFfSYhNoTcnNpTbqGwCHbyugPe75qxhnwsFTDLxiW1",
  "key15": "463rXTambBH9cZ6gs3yEJxCaBBR9Prxweb9tHQkfiorsbWyjzXQEsgavJ2jShG3eeer9ht7eteSBNqrE8N6pgYBj",
  "key16": "2vZR2BP8xkssDRuMZdfdYRRqjh5aKZVe9qcVLbuss83YeKPk6MmiHyMRtmTEW4Fu5LWSuhk9238fWzeFYgrRc3jk",
  "key17": "4n69r7pMTRA8A95gKrztVEhEJ2GJxU7aFs58hB3RCrrV3oyYgXqbm3UBDBLzGGBU4utSQnTGUUrdSWhNrGpKTsmQ",
  "key18": "5ftEKFLdTsewNGUiLEz8EKiPGch4YWwnLgHZv4VmDPo7zFC7zun3MXH14JfQFVscniF5WiMagRdChd7CZQxyp98P",
  "key19": "3D3CiyjUFtYScZGEYSMdii1eP5QehsSmbFFGWRVvj1ucX297Bobuys9SMpu68fmxQNe8YVCLQsALZu3eh2ngsi7H",
  "key20": "2qWQFej54c9D1G1BCxRVXk2AUtmKvgGA98KpbJ9nSVK7SNp4wt79wdGwQPve92SZW6FeH3vTJozDRA9NuxMFeuRS",
  "key21": "2kiUJNCzVqr1vAX8oS6yszTZW6CkM1Jpgj3Biof2gmfuMzHBNZALKW6aKqMNgKbvnSTrppPsvaEEFqtYpuZ1T8U2",
  "key22": "5EW8fDFc8M6YdPmcWc1i3nhTuUZUx2g3xWokBQAS2gMtsRV8gfAVdyTuCT7g6x7RSk4rh3jC5KfkmDZ8JHmKRfsZ",
  "key23": "tYuva9S6m3kqC1WaD3HAnkpwaNvzrAUErcGWrHwEdAGpPTMDXASSSoLfVhjp53bUctYPxBbC6DUUEBGXoyYBeQK",
  "key24": "4DyeLf8FyMq3vp9xn9Xc7iNg8eBSJAFG7e21e8gbSLjKZMDxUu9uJ94dxcXGPEA7SxGjrbYdcN28RHpytqxYytnj",
  "key25": "5sU3Ti9CdNGxiDuxsutB2WfVUnGmHpnpu3ojAbQugqGeRH8j5HM1KRVDyrixTyX9bBk6HmdKYfYo9cs8fjf8Z7Ez",
  "key26": "55uAxwF4Lg1gzcGWf7uEo33956WF9i4kw1V1Z5JEv9NnGB3LtvvUoeM8p2sqDdLx8MJs3BtAZWkdpL13ndYiuSmL",
  "key27": "4DhEwno5sPvJTTA81mcwMH98WXcrjSzn2diQfwJ9WKcGCf4t5VitSnRNriJF4AWTztAS52cx5RZLf5RYKR153xFc",
  "key28": "42PR3aszRuuCpf9ow1bYbexyXLYhbU83dM6iELEhaM2czHt5mgxhZAQdoR8N8FbGzKQ7FYcyCnuhtpGqpy2jMqEW",
  "key29": "YdfBvm3XT7962oZ1dpmKuaGgkjj75Dtkz1GJKJLwzozriRBdB38gukjHJFVZuP1kCHkVVN6WgLGBnJBcbri32vN",
  "key30": "2zZVvswosn9W7Dvkjq4rdbH2YKSVSxWscYbof6AnsWdZnpYCKX3TRr8BucxhbQZdiQZYvkQdp8aDozQXXXpaEJgJ",
  "key31": "21ReNbCodEKrGZBhTUSAAmkCD7uZJuR7UegoCsZKE18YDLhPY7QqC7vEg6V6cSkhZcQBBwZvnAhDMtiNcAFsieUj",
  "key32": "4MbStyQQAAAtKYoWnHkMyyN49LCAziBDzpoPRVt4KqGUDmMUEEehyD5iL4LKP6hSVwbb5J3223Mwtm8AfnYLBtr5",
  "key33": "3KGXd2vzmkoSuo3gpVsdrgeFEUHwdUw1735PFvEBtygfiiUA6M3c3kkrR7WMYLkRY9AfyE211jUMGC7VDLzwdzTW",
  "key34": "2Zetzf3mTg4c4dEW3Gevepn8TtkEqH7eexzXB6LHsttqAYrv5Ukn6ELyq3Hv8oRn3kVoxJtSXyPDvbeLFKu3qwwZ",
  "key35": "3MNejpqQnsBpNPkzj9mNMKpssVyQhZiP9nhrVjLAYbwuYdLMvvhmPyVzRVKSuT6Kjq1iJxUGP8fJZzJ1iqYh4uZP",
  "key36": "29ZLzTgchX2fwmBFz9FqakcQEWJS75MNoQj5JNipxRptYVdWi93LmzDgDBLhX2394Ys7vy2PtybHtWS2H7AyDxE8",
  "key37": "5Ucv2hXUWdZbXBh7wCdwnmTBEHw5inRiVPPHXeHWdNGx9emx2xcfqN9KMorEdAvr7bpDCkzkQMCsgvGkZsQ271D2",
  "key38": "4tS6fWsnc8mByDkLNsvFUCCNcGSoe9ahgtxXCEFthQG3wskAhTKXFVw6EAY15RXpQCYyzTxgY7inS1nKXL8PB1J8",
  "key39": "KoWWBBpTb3JPbJ6RP7vEUiGjqRrSeCBVoex9imhv9woF4Xf9yy6X5qkE2e7Bofz4nZHZKE2hc75egfA7Nd2KNnL",
  "key40": "4KaovGqVGQdJ1c87TWFZ4zcx2TwQL83uxnmMV3hVv8CZC7nU3D7vFdAL3bTLjLee1T5ZczJakuvToVjSQShn3FcJ",
  "key41": "pw7S48kQS2JjSmZvQDfb9AyATUfVYW1piugsdCvHWygjQYYvBFNTY5fEFoT22eB8UCAnWsNVvUXhVjQCUM1umWq",
  "key42": "YVeNbz6So9knWoCgkpejRUhhWeYgKmZQEgGwt7HnGUUmWUMemmRTNL9iHNvwbXnwZyrDtBuCnm2X47hkfeqTzS5",
  "key43": "5TtHTJve5waE49fkqdffwJLc3ff7xGv33nLuL6X4sytznNU2WcMLXqgm66hfR2xgv8EGdLeByoakc6MUritqMPC5",
  "key44": "4KeqdSHivk9eAYbfEfWgrXanfGTE1uykQjgNSxbQNB49gkiRdqeQaRMhDBJAYfNuQkH76KKC59w25iACz6tLqoLJ",
  "key45": "2vZjauQDnbgq32Dv9S8fRs6G4vqHjujz4tyqrcptZgxLmdMLcM49CwtvS4uGzM5GRvbKBM6DnojMpjQELPquQuf5"
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
