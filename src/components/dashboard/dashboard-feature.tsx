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
    "51LyQQDH6RQ6NHQAHcZr8XwGKwGRQabyimh6qHpQC9rCoKphTr6ewVYLxSQJVUB1pGKna5CRcoUZsmkDCP8EjUPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54SXFKKSPjYF2c6n2GjGve8KoT6ZLjCVZhTRESCAzYFymDyNSQ2QSm1Pd1kaY4cS1ZYgfrFAP1SGGDYJp7AcfMW2",
  "key1": "3g39VanCdYkYHLdLu7Tvv7fE4HuRdSYGe6X6yroWB6UAWPkHsqimPvGPdGovZNKHChHHzJqeMqaU775jwbtxU6dc",
  "key2": "3PEDd1wuvpatdJgaHSMUdQ4kKsz4J3gRdgiVziVyqNZywda6zSyv548BoLwp984558Jr1RbqzoGMaZbBkdRSkCzD",
  "key3": "YhTv3zJSQoBNzCaJLuUYEVYzs3TWecQHaCaNmHwBs6vUvaCmAqzyNCd1qBPsQGUKpeb4SGtCEn7Jpz7bkUJ6osa",
  "key4": "CbkWeXUUVYuUTfDVrpLDxZe2jS6287n3U8J4kfJoXxrW9UdnnZGiYUfHJhXw1oLG76XmXuzADgZu3GSah8cna8L",
  "key5": "3uDKtNXVBn9AvFLEKHCmvP5xkNMKWHhDqndjq7gZDnaajhAsebJEeGCwKoc6EeeX9rQEHbqhUhyG9SQrqat8ZkrY",
  "key6": "3hBe9zXyq4YVoNUfjq5JwtnXZZfqeH3YxQ1Ttud4sZRfgeDRatKAEY7qX17zGzJWq5yZLhwwtkXCRJ93MmZPKzU7",
  "key7": "4JMXQody2WF7Ug2WiZAzpMnoGHRjwf6G9PLRi3KrHac4BUebxR13z9SaMM4u2K8jsTDCXVVqN3eqwi1DQh3ahZVN",
  "key8": "5Q9pzfBZ4an7DvWcmsHTzD7oLUMg5YJrQWGHcC6oToat2jhTyH3egRhg6JehxzyMsqAESMTRS4ugptzroWwyX8mx",
  "key9": "56rhDZop4AUitLc4KVKMeScpAShjy3reSFLjR31JHZmvAGKboKa5XTkXqay2hHG9MGAFEwC8TfsFv6nqBRoQfUqD",
  "key10": "3HqFbohoFXhNQUV9EkSatcSLkCn12Jox6Cnm3nEmtVLJuWGTPvDi4ao4NXap649aPMCbNa2zM5idoPWDbc82BrSW",
  "key11": "5zJGP54tDcMtdL3w2rcZ3Tsa7scrEMws18phcgrmRJoxa87iL4UHemWK2VmEGHuC61yLz3ouabUGp8J4aYu8subZ",
  "key12": "5xbwdBKFkCrUh2dpYkADXDMgLWFs9fFc9RWRgbXDKKDYNZSrg1HFbM1T1eseqo14ucd7iocJSkftBm33pwAqSLDK",
  "key13": "sGcqVYjqvFkGMwEjtGzdsW6kYyqMK1TBFXaSAfFVEQ3PfY9FLSRgk9i9EmSNavWrYkcedXA1ZYSHiXq1kfCyMZA",
  "key14": "2MsRAgwwmvmE7npBNnpzRDcBerfqdHMdqG3ypdS2FRD8JT5iZL4B4JyVYcxRSLEkENYrHS8PwEQWDrMzPuSNmSyt",
  "key15": "3u4wHEDx1r2gEsurZbeBwGL3KQdoPZSR3e5myEbMWzS4hdMpb8e9KseRJa3jJVWhHtzdYQ4rvZc1VCJ1fBbXRKFP",
  "key16": "3jDTMihY3Dbwv6SnrUjAkoak9fsJTtTKYnCobKRjUhnU5acwLJwwWH3UnvXfavqTrspFCNDBxAXQCASXC2JswSjq",
  "key17": "3D4qVvDK4sSUhsWzW7ACgzxHdjajWUjQGDXkJbJ2HT78DwENgjqsxr52SW4JpaeFN8FpYMU6BqkmdyYcmkK52pTU",
  "key18": "5DvzTe8FQ3ppYJWCgkxozviPKzrHCabRF6F6eEunHK9omdRtYw4DGu6kAow46LTdDxcNoBuKCcrKW2jhaY6prZ6c",
  "key19": "pWicdEFA731o6LGRUpiyf1xc9Pnh461ycpfwUj23wM6nVPGMERMAnVf5Qhh39LsR8qHdWUJpj71PBTLnzLqmNW9",
  "key20": "36rkj47aU1ofTnp9PejKxJUekVSNYLVYqe5z5WmPcC2xEsDVvYBoYD8yRe5qNX3VRETdQUZCK84Pj119DMLw8UjB",
  "key21": "Q43Q1cLh6rSZXzp5MvMpoMH88qfd7R8XemqZiSAzaeprR564v33o28HaDcyarg8Nouw7yr36Z5oZE8fd9F8Z24c",
  "key22": "2jtguPc5ZR9ZUhJJuNnYjUHdpUg4T4mT8WKeqAKd4zC5tGPPVjGxuGK9ic9mTcaD7VqR9cayPbAJMA6JE7Lghmm4",
  "key23": "HymoJqANj7YBen9TFBD52ZzXHPofw2tuahbNm7EoftBFmqWEExxdSFnzWsMA2Fru8QsKkBogZVLqhCGWLPovZXR",
  "key24": "2jW6pNkTuRohN8dxNppHCcZqr6NgNDK8Sf17RrX6L2mCEU13TpRUDXcNrKZ45bY8YTYAK3avCeCYwNdh786b1p1C",
  "key25": "5b3y5ezLTnKAFcM7MsNt76yWb6TmqVWgQ38iDYucurboPDZSS23bA6TfHrJRPEFsgyRq3YWgjo9SePrqsFb5strf",
  "key26": "59VFbScmS2QnPGvjFBgLDJBsVRszBHVN6wzgmgWPHSmKxwpqe5CEkEczT3SW8ejdY9GaSSowAXYNNoqaaM6cfbgm",
  "key27": "58Bym84xy8GZDBWSrqYKvALW5CV2eqhUqa4kZAWHBb99pGhZPmbn48M2gcsx8sgXz28cHBVDP4RppKoXieED2MoU",
  "key28": "5ssGMKgztigUTqxB8aDHvKuR3E583L6t5Jbh88qhttzYrS19fqmYQ3R7ehg4vhPwbzsRoy9jUb6ekCdhFquCpnFz",
  "key29": "4hCXwv14b2CAE9pbRNH5Cq8yWPzVN1CoRAQqJ33myxWpEdg6pqL1XkNzZ8291cWxCVoc4xPFDNEcEJuqhDxTJQCT",
  "key30": "4Tst8y69ueWD7oanKiHwa3eZJP42RSSmFjWUMpVMUAcsmqQWeEBsvGN4yQqk934L9trhMVcw3p5Hhu6PMy7mzm4a",
  "key31": "26ZXVJ1zLa57NmWiehyfBeJZLf6aApKQjrQYJhEU7towbHzfcsbrJCXckYQQ6Q47srfQUAbPAk8SE34vmBPTnBu5",
  "key32": "3Q5dLWVkcycfsdohWM6RVFYRMo9an8rfytyPKchtF5ywEuGJkpWBYbHRZN2LF3wyS5iFC34j6RjiLXjNXGtvGvW5",
  "key33": "45tjp1rUNrrLAzvoG8hd8pmeH3wJip6uBBVavBVRQZvymhEBgNjzrLZgSUPenTfKAwJTNmrbcnbFStKWxixg31cH",
  "key34": "23Kyz1gV9DpoZoSbYDWTtWAAdJKNaGoJZaoZFa8SZAHtXNC4in1GcKfbNDpFXYpUjKwQDZAX2dcS6F5ywXSh7uPP",
  "key35": "HCGA4cgfPijCSnLvWyHx8bWbx4i9DNjN6kSmN6FZFSumStZC2rA8EmDtJosG5eYdkEpzcfSXwgJLj4jUE59SNLn"
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
