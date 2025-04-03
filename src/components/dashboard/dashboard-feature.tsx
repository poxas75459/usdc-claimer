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
    "4AVnafCrDS9Y1jsQDPkG4fNLbhr8cPC9qmsXfUvYtsHQeoLJjzdvyWAfoSYkysXsvYfnxLZVd38NzhEPm1sa1brb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52nmeTrsGBSGfZn424QWUBdceovPpEUbHL19MVPkC35fuUbKJ1eCyjN767fdj8UYKMAK2FCUaV6K83uEwoY3gp9h",
  "key1": "4hMKz7cg8Q1USmj9PnRK2PaXfEvNDkRxHTAcZmZaREBYMcPv7ES5hnVCFZqsRnWgvXWX1aU3UysFZ9YxjdeC6zFh",
  "key2": "345z6etzcXfNupYjudk9NJrKmJkF8qmypDx7bdzZg6h24QoM2mWdXRbhx3R8ee3Z242tj3qHYs1MJkr3X9e9CBMv",
  "key3": "XseUSouTGzoMsgjKgHbX1tjrJXyGiurd9i5gFTaDBBSEa3GJRhbwfFxAEhE1qkbQX2jF4pvHjpjU2DMUY6AEQ9W",
  "key4": "5LokDZJZzMn1U1hSB9Tdefw172pR7ANjkd9kYy9e37GnQ9xBrdHBrLDPKrudLfpUUjwQqRPSDj1nmNwBji9QPuju",
  "key5": "4HZZdtFhKJyvwNJuLGo7DB21sFhFZREbKS6Q1paQ5nPCF2qQ9weKhPQYyDo7ujBJq3Vi4hFtDjmxeDREVXBFhbv1",
  "key6": "2wmMF1oC22px7roQ47gJJeEAUWydQESKQ74WCarAZLyEaiPFh4AcUs4av6qBE3QC6rNH4jEcgTunvQWNJpevYxzM",
  "key7": "4h3QrT9BFZA2uMtsCsUzRT4Hmwj4CQyJXTyqeprTHZMbpEGbAkGXYqycFSZHgCodZTPFxEY6gZ3sjYwU7UB7SymY",
  "key8": "2N8ynb9AGfS11TWcDDdSsLPDBrMFUUEDjFXavP2k4vg2dGRz1Ur8vseKrjtbYViiWaz8N1EbvgWe67GrzuPij49H",
  "key9": "3YhNXtqB9ztFP7crUkk7tSpz2i6JKR9ZPe7frZsUK68bE9UPoHJneuwP9BzmRVTpbRSsMiKSvShwC7RBxjymxbdt",
  "key10": "3ycxZ3q985ZZBvUoY44Rt87s1uqUovc74Xe2oHTu3EDFrcdzRVAr844j3nLdfRr7uDDFnSFGGNEYpcAmAspo6Pmo",
  "key11": "4oU3ttjTonEy6ZTWQcfKn7Y84kUAQZYJ8FuRvxXFt4YTd8mitaaNDNzJzSkLzrppDSziCw5oUt6saBNyQxfedJtd",
  "key12": "62HK5EZUshwMu1ebp8yPhQZb6zDxiTQ19VhHDwUQDNakL3T327tRZ9j5W9r3de8ab58czhbM8VCDQGE4Mvzg9Qbb",
  "key13": "5iJmC6hj1GFoftijxKzwznjbY2UPEYPYWAgFD9xRzNkR3z76ZvWAb2gGgds8MtXLFBz68BPZUDAabcbnbWwc73Fv",
  "key14": "2vrH4w2pCju8qNmiksfy7ZCZbw6kHopxxkeVyFnAg5nZdaMh456YFCpZBFRGSG8Hpo6HFgYekr36LZogvJmurPpK",
  "key15": "2C923pQJZZoe6nc7bSjNJU2NUMjo3oW9ur2hkjpBqH4PqWbguKKLSDhkMTVQbfWJxBnzDbY1PYH7KkmD47HNLCAr",
  "key16": "5NEFJBFAuq8KaTPNAFsbJsQ9FKCPTj6MWEnHQFttm327Lr7FU5vAyxB6pRhsRAgB8ED5PW9ytU1rzkeUay6ugrwT",
  "key17": "sNti2GPRH6NT2xDu1s5nfNRnDubGqtR9Z5nBxgvyisM7zhzcMjmdssJYDwSCHGr8v4NqGk7Lz5sHP5PyfApeuMP",
  "key18": "2DChEP1JMCAgbDF28yhbb8CiUkp9P5Vbm3FtBh5uUJKUcYeWV81Gn3itJEQC2F3rT7Kp5RumhJpjj15EWfqfCSjb",
  "key19": "gKovbRiGSDTWUED4vD9PL7LcFPcBhJ8E28Mo5g5tVXNDL3LPfXWTiSU3nAe9CbPaSfScKAmRavEGBjqHGV94caB",
  "key20": "5bMT7rRCsyjzrQHWHR1S4xkD6xoEXj6d8j4Gpx6Z3YEapFtoiLqTnpsUAPDcFW78WZF8TmKCfUVnqv5CEV9mL9gC",
  "key21": "5kWxrgZyYPbEU4Kn5BsAxvMYZiQi3WeH8zNxfS7y8Gp7CT1ZWFbS5UHeN7jGkDuui7a1NjJZKmUri3XmsUhQBHdV",
  "key22": "614UuxTvTu2K2LrBFA5urwwiFi7h4sTF6Pe84cNQ6HWYSVfKnfPMrrSmMsU9vYuniFYcxbmEoA71ZPr5mukvpLKy",
  "key23": "4kmmUFPjdAST2RtPkbciXZckgLJ7fYnQgvYAcA2n6EnsCtPkZ2WM9DiNV1wdns9VsRFS1bt1BKgsa63nQD9C9rHN",
  "key24": "2kjhWLrVgYtxYdKB7i9m7XhxHuUhJqycDV9kfyTECgBfJcCsAxBQUAgWiMFbfQvBPoP1kb8t4iiwFspFixDFaP4Q",
  "key25": "5dsAdFGYMJK21RXKaa5G1MgQbjRPgCaNCnZ1JA5rMCPXr4vLPpKZiFNkKJCwCdzBHMbaX6U1p4zkd1pWVngwJU83",
  "key26": "3iLqDheBukL6X9keDdMJur2kMu7vyLvqYbEMRo514iQVNRyCVpYcS818uX3a5ieUuNLDD3BzwW4BKDKSX3fHRHSy",
  "key27": "5PLb3NUZvbUNkrZPtNXw2jMCimmsvGpiyFRfLTHhknbWxKRgnEx6r89dJUAVqoEX4yKzgsLTasxYsjcN7CMxapp",
  "key28": "2VDpahtA2Y8z5m1wNsdtwLn5nHZfy2naT5ggHAuvQinoM8dSpNBWhMywrsebaJEKyfcvMLRk8pCxnjsjAvDFug5S",
  "key29": "4q5j6YkHRoZhPHJGB4vbFnyA4BZVeJwh51BpbyBwtB9zPyGSEGeos2WAVVmSidZUhQKQXdfhWrSPMYu6VQxsPzoL",
  "key30": "59tHZdQWRwWiTpZD9bPBvrKDkG6xvJeMuZEz6M1AHFtEi8uG6BHY9uBQAhBBds5Fenrhj5vohGh1838J3xsKuRb7",
  "key31": "3MGrYtUi9hiTd37QCvSqMU2qBapoA5vFNhUWQ3xBUbwBKCsTKQSz1NMMfJKPbTYxR6WMYh7RDWh4eSHZJZwSnCGj",
  "key32": "5LygStgeYgCnTrRFuCpKw44VM7TBKc6D1YUYqJh5naqt8L3ot8vhhQJ9SY454B5QsNjmMfanWH4KSgCedSBDdSNT",
  "key33": "59AWBrbM4qR8j6v9BhZF7W4NZ43HxZuiuSuMiD3VcgE3qeyazbBttgmyQjP2knBRWcBizyoLmXWiCb3PRQGyVqGW",
  "key34": "3Qjm3CFFvy7pbUCaj8iJxLd5PDf6Kdwq4dZBbZwpwCGfNYD6SCe6538aZPjuRkyqRkVfx2PT89BgPrmUT3eDU9CA",
  "key35": "4n63HFPooCaF5KiEgm8oanUGFemTo7wMKsu82BVGmC2yivrEVK4H9T9Ao5cQHx7y93rjkN7PtaSQeEycTbbtBKnZ",
  "key36": "EdVdiG7jJC2sje2VrzXTXB8CD8e9QJk5bNCtKf2zvLco6GCbasY7qw1uNK9Ff9Ne55ckHmZCHG7L5QDuYPxdjnq",
  "key37": "4Cwf3svLfsVj288uTFi4pQmVizBPa8QxWueLPRPorxSeXC9grCjms6XNSaZ3Wt8VxLVQ2iY8XaQ5Y1qFB1YCpctv",
  "key38": "3ydpFqgXUQMW8z5EuFJvjaTNscDwxfPqBw1NA88EbUMnaEo9KtV9qXyLjhr9A6Sv74k5y4ZHMXx6tduNh5NBtgBY",
  "key39": "4eZUHsfP5sGcVffww6Gm1P2oqJLmNZW2ePE6imnQN3Y52BamxCrCyG7oF9Re3FxKTSSw6ZVXhK51mwfX9nuPTMzL",
  "key40": "2QqfRbm71RNqs3rzrYFhgCfPhfieLnYGwiEqNNiBQy1e4m69zgLqcwXyyuppyx4xWdUF7yyA7ESmFTQTZqM3EE9Q"
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
