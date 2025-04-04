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
    "yS8vbe1B6J4EF4dEpcQ5cL6o6oAwv9fKZ5EbwEyU6pejBiRcXtSkWocvLWqgbmKvWkuKrue8EqLEAGFmtxyYyoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wyy1aYgTUK1PE2WEKbZZGsizjXm5RgZivmFKrSG6hANAEggKbmvjFenLsPY1vn88wMqWM4UQ7Qdiq3rufyA4zCS",
  "key1": "2GShWoAeuN5FxnbJzKBtELVtRWV4Pq58mZVyiuZYuwcqY9SS7BSNQsxpi1a32cAUN7EfYh5ciS264M8dQaGzyFUq",
  "key2": "52iC4DqiRap9P71yTmn6er6zAMZdoWQedtYFRpA8SXjhi7rgQFoYPNsUUvov6N7tD6hTes3zpCr4nqf3vdBHPPn6",
  "key3": "3xr8MqKKT2wipYiFeTuw5N6YGwoVCFuUJaRHzEGi5THSTYvNsYK6rDyT5RF6ugdob57ei2rhUdvdZx7i9ezR99og",
  "key4": "5VNqNFA1GBEi5NTNKzJ94DeckANFpebxcc8SJf732rJcXpreFSgVfRJG2HcUXRsmf96BnXsNthWxKzB7BqDBCPrF",
  "key5": "4QGVPmRq3nroP84HenU464aUJtyQMBSf9SNgvYAiJ9GKannTnc61Hzj6CZjUq4jLBtTZZM9PfZ681z4JADBcCj8s",
  "key6": "44uuMDDCXDkYDNHXkHv8swPzwcFDyn114CG7Y1AmbVCTJUR5Nt22RERvkwgcFZ5WyvNviq2Nug74L1h3HqUsALbx",
  "key7": "2izLs4oAgomiF395M71ryxTg4kHdJ6N4UU35LiNT3uqTdUwN4hcf92UrsxAdnWyfsYthd7cBAXU7S1RWuC2h8uY2",
  "key8": "zta8z6eHCdEecet9cvDtJXA7CixyGqisMXYberZGtAkhoAXGcrjNEJ89ghNiWs8A5pNkwAeVM2L4StiEh8Nmsd4",
  "key9": "25ryo357VEp9B6nZo8gVVt6GNaKggfFgc5Af4EZyqZjEzYviAfv2o38W87YKgGRotKzYfjhiRuoordTxg3RC8b1w",
  "key10": "5WMDUKRgM3cAbuskKMq7eQVEdFYkk8oxC7Go5vk9unPUuNvUQfeXdDYeMvkRt4vMEtPrg57Ty6hU4goH5cN97VWi",
  "key11": "61psgSytCTqgGByMyvdoCMNMG614KrMALE81SqsXecUohsYPsaGN2R5qVmrB714z7dVeyuGovA6TrwkFS3JoJke7",
  "key12": "5n428dSEjFmL3VuXEasLo8aqpjDjitpbEyCVJxakS2fuPk13MQdir1FXTmQsXFyHHGkxEk5mxTyJBVDP5gVRxMfX",
  "key13": "5GdfEwTJUjJViNRwzzny4sQ4Qs6DWDfUxDAHd4C49GqN91St7u9enJGXWcMUTAYYhLiegww52R6ztE48VMCs5MVB",
  "key14": "4VeLdZPuczQLNWNA7rNfSQ7tsxTo74iimqFxXoZ1SfiZFjUajPomTW83CMSNnptBSKBiRxmTWegLcgRoQuCFEtnF",
  "key15": "56TCNyUjckcLL7cYP4nE8RsRdNMeYPrTXyhwQEo6vro2TJ3zywxsABP4dEk6vTvzjmoR34wkwRcyRQ89RnUvWkqZ",
  "key16": "37ESFNMVFztGhthhZgZrbK4otQvZsn1MxC6qnqgvxvRBya5TJYnEB2y2sJqAY8AFDXqLEG1Lrky2qNnYwtq2DVor",
  "key17": "4S4CFnWFCvrzFgUALRzPSYAvjyMGJqeX5d23tHK4H45oRKXKKMrWuK2gfFSojFN8N4Z7R8afcMfzUis2a5kwGC4G",
  "key18": "4Pa9NQJqWwxNJFATeRr81Cj7LPzejCecsBXRRp2t7dQhhc3tG6RohRsgPeEV91gGhoyAeZqj3EWLjLugTtadE8F4",
  "key19": "4pEHxnSfcyVxxeqTiPYhjds8QyLGdzVFtJLv3HvrAJ6VfDE3jTRQ6M7VTJgi74bvkw1JqQGcHnfKGLbphf3CAcyZ",
  "key20": "3hqmdnn5qLQ3WcT4qH2xGjCiKPGf9Lt1HgFzB3Rkwj8izfo3DAJwwVWmQwLYSdQwxk4vLcP6961J5D38XdtteqF",
  "key21": "5qR9LtxpMMRNRNmUhjAXUb7dy4kmuW9Vmo9DCfKR3DDQEYXXSiB8TKnYouyGXtTZrcAB4bfJ7AJRkYWNHCqotQnK",
  "key22": "qogZsjKNubLSUfDRKfKAGdyfPKLhHHU6dN3rjZ6Yx49UEfHzVsEXY9gQLumH7Px7cnHM8yymyXCg4NWC34MwBxv",
  "key23": "64r3Bo65sDEND9KRD2hEAggEq8VTgmR9Q4TNvw6X3BteEiLbmrU8azReFcqTXcnmQQLsPdEuBi6V6U4G1zdCQhm4",
  "key24": "32eBsR5U4rTWv5o5hJ1snUnbwXxgRFucTSoVa6HZSnNwkW8tDoFexvDbbwTw8eyohdhwnhjatprhSEoxHKvkQ5ph",
  "key25": "3iLWSbWXLujMB624WGck7FW1mMAAK1ZCxeUa24HCuTZ3ZrngcYVBGWkGw1yyGaDy4GagqqdgGvvNYtyttYCt8GQP",
  "key26": "5728km2ieDiRo5e1ho1RifWFn7mJq32sXpLhJL9bpUw3GLn9yfVm6rKYrZLpZF5cyuuvdPAKsXHuTDA1hyCimxe5",
  "key27": "5XpT8JgCGtrzaFkk1yVtPGU37qckJDrGYgJRN9a72kZLS468MG8H9VGhxXgzGxh4hMc9HzRsnujqBtKZyjuKirFj",
  "key28": "4NXSx2BHKYKZsmS9QLqctdGrWWom5By8fxvVhK7CqFT9haNBZNBdVWBdLf8A8fW55AUs3rBxaqQjBobHUhyyfs93",
  "key29": "3zHEkGt2jUdBX5nHkBk1FRHmUL3dfmkddR35xHiqZyte4ZuX9a9hZWu6hVbMFi5eFYLkW6Laj84ExGWz9gRyQ765",
  "key30": "5XSsc39Np5YbVSm6LqM75ShUPBoW4wBFMhfy12tCaaEcup9EfBykjAwe8mK4LzGXPVhDLpAPWEBq7gp6gx5uZ6em",
  "key31": "5eGxKrvaMLNCcqVYDAcQtmb8fYQQQWvwBnwtMTWBWDpqC4aYBtRWxMLx6F5Gj8NwYdDcHmYsB38zYpwGWSbyiLwy",
  "key32": "qiPVnmotc6RdczWHZxUNPMECTkmf4sqKJiKEJgmKJfT5gJzjkeViyLbRgZRQDjnR7XPK6U7AAQuBfEpwohwFL42",
  "key33": "4CL7Qp3YGcAsuuRDgx8z4HiajmHXnRAkt3RGAkGPxCW2jEUvrwaj2t9cCoPz8GZ6Qhyhp4t5gZqWKSczs7iHZ1sA",
  "key34": "4H2KmiaCKCGa68rHoZW2aV48EAty5wEUW2LHu3YDDLmkBgtyB8mvS2gFRnJyzB8bZp4dXABWUdsk8BZwvCTam15d",
  "key35": "DTkPGH1jsiwA4z1dfZrv42Mgv3uavA4DKxJUjGPZY4kKCCzhWtX8xXT5BBVxJFjyeqTV1pHXpRapvxzoWY5LHN3",
  "key36": "2JUVayWnUc8NWP8f6Zs4V3EiuFrYqYNwFcVsutvnL3StK3rhdZNYcHUPnqYC8t3pP8zSwoxYmaj5phKdRuUGzNxS",
  "key37": "2CEsviddhn1YVUUiezsZqD7Etn2y2Qjxap3nMw5jWCSc8kgeMVwbiqBG2fGtXsFkmrPytPA75qrAT1qBVNAsqxPK",
  "key38": "2TQX5nPASa7bXCAGLypjWuzCXc7RJTBEvXYRoTe7XppUc3VqeTxWcrrwiniqw11pthVgqf7yztFVBLGttU8JuurW"
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
