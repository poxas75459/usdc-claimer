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
    "51J36pnmuAx5FKbj94DpEhh5PxAtnWFQDEnfhcgTrbKccfmrRSkR9FVc117bKXbWe6gQhf1aPhv6WKAfJtWNixHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qaZYkvajVSz6KUTMoydfMhB6qEAJe5AHTdDKjyHi4Mt2njSU5Se6WBRTxojbgkKsum6nNvmE2WfVkXHFmdnfLrE",
  "key1": "36CLGu5DRzii5vPTsJ49gZ3c9fjwCkwrkKsNYRxZVSeGMj6yjV1ipVsG1EViHeCf8aq66gUV6CGZzNW4mXz67HfV",
  "key2": "hDL55hJnbPHtKNs9subXzDU9RRpjFWxiQ72sgzbNZ9pFX5wyBtwLZD95W1SbGL81vdk3Mo1age5FHpyZeBYCSzk",
  "key3": "AqHcoZbqfE7Dua2ajPqrm44dT4NTQdbmTV8EmPCq1w4Fz58a9imE7UandZkM5vKVPztp3QyoX4F7a72teiWG7a7",
  "key4": "3L8S8ZBRwMpSWzYH7QGLADSfwUoEvmkPbzSLtcYcUX1mpKsSkeFWVZbkcFuyGr3JbLgV669LHNYnnzzKrjrR7tc4",
  "key5": "45T9zm7B88DzdawtPj75vWwMXdF6eF6Ma8tN3FH98tdLzopRz5T2eeEifW9wsA6FAJCxF8y8b33tYsqzA9NEZ9UZ",
  "key6": "3AJkT7GmMiRmnUokG1TrwQHQc3EgTa5rSYCoDZXVFHHaq4QPVqBBhMVPVXvpzFtVWerCAvmZ8EvgxFz6eg5KvSqk",
  "key7": "3kUQ6Xa8WLmYTjNR3esxB2bpaSGSL1HdCPoT8LtET8P2WVT4dZNMLrNccinidkDPUKfHZ6rSgJMq5ZNrLVAFuNJ8",
  "key8": "4iypXpHiGibJ7PBqCq4pKrFXhHzX8xeTNxCPjn1wp4FJww5oFU7JR9se9YVjRwsnfVNJzNq2ewGngU1myJF3hcAD",
  "key9": "3Hnj7Fb7s72aXcsVNcy8UhxTw7sBBFA59s6vonqguwMnsE2tbZamsFMc2ZZssmchXXYbuDy7Ya3TPaPJNS63FX87",
  "key10": "1nHy8rqiBVroodTPCQxzSCyqdhHSShZ7eKnandkpeVkpNpt4J14NVXJQZ7zT32hChbESXEpJvLu7U7Eh7SUbfnp",
  "key11": "5ihDrh1Pe9y4peekoWLgxG4iaqkXqMBpo4WA6zySiA2j59RH72BkN2JKuHdJh6dbW2W2F4M4hDLfv2c3wXcFHVKF",
  "key12": "4Jpsm4o2GgeapPRsmoXJFvw6n7Tk1nE5BieVdgQ3TLVFkiMG9muRyDjjWJnanRosMabijdJZN15ggD5uuy2uFdXx",
  "key13": "4fjnGCu8HYjAtNHmynzb3xfR3qxkEtPC8G7gH34zPPEtp7tVYQGdi6zbzxpSeaa9Zbx31KtbT28PDGcmBj4SNKpE",
  "key14": "5dG8hrmKZRD4BYgZBh9oqJZEZwxTjjUoNTxsgGSAFb9uT7aQd4d1ym8sasq5WzRk7HRcWbLKLbmCtUqR7FxwQ1G4",
  "key15": "XMvt37wEK3eUSPEtRBHXdbrGT5kjAdzTo66awQqzwRFL1Vgwozq59qzthWRtbbg3Q3fPfeitoHctexsX6Cf8DiY",
  "key16": "3YPFpBcbrAPVXgNQ1KtYHWH9e2qEtiovbSgkBGzH5di4ZyFsmTjtjyN2B458AeSgrVZPJxaq2iSmFuVkwcRcY93P",
  "key17": "2qLUcUWvJjaoLu1Cv6Kyhkdy34qWBCfuM1F7cGjr7SWWAw8TRzetnR8GTgffYwjdNmBUunomS5NHTmcRco1PoSuW",
  "key18": "Kj9XGfX47GznC7SLPMHZYQS824w7wne4Y8HD9sPhnDfunEbZ3bPnKwzzeSap5qVUDKnFcY75RZTV7kv5AzY5KCN",
  "key19": "c8Bn9aRS42YP8dWtLdNDQcpe9sYTqLm45sXHcuptkDPGN3ApnQjc88K848kCzdDtxEn1nS4e6a7R4ovsg1dBdxy",
  "key20": "3nbLGxJDidrAjLqoMLRvAAAnCKfFTzvcYMjVM1y7ADq9VvrrGSxr3g19oYZDhDWA9GdspwAEQjeCPscyXuZq5P3A",
  "key21": "DpHHHspfyQtoyt99zEAtMpZHawDwUy8tCdDrHQ2LeWd9LZG2iwPCZDHJRWyaWGe9ZuDKwBpDYqSCDkeAgwH1bst",
  "key22": "Nc4gTHJmwP6YhbBtyHFMrJSCqaJSjzoposDFxPVZP6aNN42ADTijbdeuuYu1NHjCXaCN232142aeYKJgpx19iwe",
  "key23": "2YRsbo4wj99dLgFBaqZ9SVkrVT6uxDB1kCAXVZDVoPtQHRLYxJAoPDYeugtENriA9fD6LtKJ8EDgQkoDHJ5ZnMHS",
  "key24": "4mBCpuhQ4bHjqBKaMJEo6YdwCAv6dgJTKXetV3K3S7ohwFag4x3Kbdie85AaxT4RKi3K1KAzaNEFfNBxw9ZsRoSB",
  "key25": "5wp8jPH5TVhhSA41bPR8jocL7SnHrFavZFejZMVGSzRehrcSCiVDdmuCDReUQ9YFv1S86wUwqSBF2gPyjS1cvj5P",
  "key26": "3KZwvFaNXmsj9L4U2UKLWNZR8d8LYos14tHuhczqkr9B7wLcVbeRqZDa9c24Xpj6dGbmy1HZGeq5dtg1rErexAg2",
  "key27": "3gwsFecZuRfnVBNHxC1DdEt1SegXWZjjx4kePtKyH6tJrpVJkN26hrypX7T1jgfGzfEuhZUNYkCcoSD7EizF6ETT",
  "key28": "3ZkvYZqMSog39t8cShuyURHmmhT8KLNVjF2523Vk4cYCLqyLdFB1FZKCsuz1yCGMUfZYrepndKg6vyS5hLr1MPNu",
  "key29": "cBbgCoQmPEZF49FoLxFrC8hmdEsnemqhqjZzPR5NVvwLSadX3JzqKAQq7nCJdBapg8axa4hhSEDGWncLnBiYJMQ",
  "key30": "4VeLuJv8abQNWB6NK9qkcZcX5AgjXJDxeqaLQJhCpf6ifA8a94i17FpPpBu5LkBEbVCQ5NnfWGcc8jXYEXd9T6Lg",
  "key31": "6srDbbzEZm2GENuNEsRontor5wPg8QtERfJ2BztUFp6Fo3RqvKuhXFhFmQPtZBTCHQPfTfqXWEnD4UyzrKzuzH4",
  "key32": "533rnkLfW55RjmRnRgGpYVEtSR2559PCBanwPZMLdkUPxZjGxPW7JhYkBGVbDEJwAf6qi7VxJq3UPfFDJAeFsTBk",
  "key33": "97C9gwo9wdHCF7NNcKRwtD3Agq5m71QQmnQUiMru8FHxVEdhNyhzsrj7QALEHSasYwKkZKrVnYSKnhfzhgmSxZj",
  "key34": "WvJZfKooMcAbHrhC2vQA3TSy8ZaTJ4u5J1mpgPoPL8BaU8phqzuNarrQJNJ3qRb2W4ahKA5QcShyWix4UtxbtwH",
  "key35": "65sdqrHLKNi3pa4tHgHieGc6Srnuc6dR7VGwxv4v21jfJhhGjwqVqyRmCsJonG7hRK2JKt8kQeHD4SCKVvXdQoe4",
  "key36": "FDL7SFXxFJ6Z6ywpiagNb4xSejfNDjQDY2ca4pU3uFeHMHgwfREB8qDqxxGZdSue1cEcTtbvgZjmhiCTxamTmyk",
  "key37": "2EuLmNYP5dKLgczaurJhFecRKsEV2yj62eiiiUcLBiuUdU9YRLrAZJ9L94ZKXENRKZsLvYd6KCnvQhz6wRP6HpGr",
  "key38": "2SN7QRZMiqWPQLw4CRHpUwypzG8jNMS8NPaab6FJh8F4fSGv6CspKMf7pA5EtVi6FxicRMwBLg1VgshMrR5YytQL",
  "key39": "4Fgv3YtwBieQNBcZWZwVsu1WDVH34L8AVQgq5gR3pncRyvPPmEHAqnB5j7GHXwTWZo3WPUqhv5EgM1bVU414DGEb",
  "key40": "5sgXsLURn9ikftdTopyEAypgUwd8R8TwaLeMxKpmXPTebo1nxLWcNMbuVzqURKHYM7ouvi2YkfjEE1Lxb5hiZHVJ",
  "key41": "43nnCccs2QgtFjay19MhdwQdDRNAMwuBaw4ZtmbRPxpfWxVQy9nnRq1mHoE3NGdMSWy8kn3byq5V56d5rtZ3JY4J"
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
