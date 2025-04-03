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
    "2D4BxXoReXDi9AZjewrVuxm9ahs2VFV2HG3JHcyP1gYzkyLXywQkthgorwEuid2UpiW9oudfrsPSxWEZXMRdEPrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKx8hLkfS9Yj58CkcRFaE4MtzjkqmGApgzzuUqk89dvM1ahyuF7cpTmfnxKZ6hDUToBWVzvmPEhynD1nxeLZPrZ",
  "key1": "EnWnX8qBq5vwV3HdZKWCvyins1v2kJ5NfjzhHoHB5cqmUP3PxArZqpeBG96UTzpcvpwbB4qELWtPc31GPfWJncC",
  "key2": "4BvJMg2LzjEUAVnk2WqUF2BZ6qtJEhna8KdmYRkvVvsLpR4MrQDK1VDDYRV1Tfyykkvf9y2ejq3hjes8iiVFDN71",
  "key3": "3Ag4bHg9kdBps3kWWBX6DgHSqvfGfeTJfDxtbE65LWftKe8Bak2F5Ji3bkNacj9F489jRJghHMPEjbFajPHvM8aQ",
  "key4": "3xYM9jpdHspih1HMekiHiXezxJ9JwvKUim7vq5eTrTLgbaVE1jih37T3EfPcTHswDvvYYrp7CiEZ67YkPDT3mku1",
  "key5": "626vFffbC7iq3hQ5m9vrXbnKFeTg6tbtq9b7eBmkdHKs4RbQbxTkftG1A1SLpqDqXADgj3bTKJhkeDTgsTwXZ96D",
  "key6": "2Se9ivcAWtkww26MtoQZtHBPprNHdwMpzN1q3o6vjJXddrEmd3spSQJWwBP8keVge7rxLBRYLEQwpJHtb4T3aXAc",
  "key7": "4TecWmTuY1f8SUvsqYoxs6X5vh36XRvvMNigyJsu63oogq7KJ5uKq4BBh6CUxGhzWwU4VUEEdYjw5NpEdwZ3zoKH",
  "key8": "32X2vE7iyummsgRnJ8rX4VmDM4QSwqaReKySc3Y9z5dky7xfmhQJH5d2FdRadqXcdRnrJfwNooBZnPp1wDvFzq9q",
  "key9": "3JADWhEZ5SvnJXE84D6G2ybwv5GeBhxoZF6gh9ygB9GC4Sm28Qj3UWUN4eiKcDXSZnnayyerLa9SRnxRwx56pAVc",
  "key10": "57qmc7XUg8LEbzMX35j27wqEherogLCAoKY6i3by272xY4ZVqEBZuakBLQ9qN56Fip4fYVFsBaPb1fH6MRK7ooRT",
  "key11": "4GktT9wq6JFG9dt5tonsENewPfncfbr5rNwSoPtuHSmxznDTRwcLMQoXoZUwD6oD7HU7QHR2EvL5edoYsNooGcwq",
  "key12": "BMfjgJNQvbt6occiyo1ADGtqJzuHVa1T69n4bPSTKTc4Tx8f18GBEm192sGvUXZx9QkvvVmiehS3bWNyoN1NArC",
  "key13": "1vv6DfKCivTNeh4gh36kTBebdJYmEBgoRVS3EBs5agwCzi6FSfMDWNQecCMdLgSWe13Miz1dU7bQzDeEoGa7p8A",
  "key14": "5ixsbc27yy6bExxJ69paKUHiyW7R7GQrhoqsqH2VDZU88kcaecF4uU9q9iUaENcjzhGYWuhfNw7C5ribYkkYeNtG",
  "key15": "5mcKUuUxqQ2CVrhuzAZ5zySen6uFmZe1SYxQJeaMqFomRjHBQsNRiFfsbqjHMRvEAFrYUWME588d2tpxMhvobWZC",
  "key16": "8x4aLgWV5KLpZXwcYeTS2MXqGPM1gb8caXStvwcnXob2soJ1WTThZxV1XA2ZZfSGrB6eZ6GpAyswn3Xe8qmL9be",
  "key17": "4hVwg4YZbkbj7nwKYJeUAAw9hpJWTHjyH3vsWjw6LcCUvJE58YMDypFno87nUjixT6bLADu4NwYGgAcyjUqs1Na4",
  "key18": "2VyznHTkgTmYZ5JPnbRmBK8RFQUMeAqCdpoZVqoi5Egbqb7CSdFLvT7ja3xZQFNRCiweFvtKcih7NgBJgLmox7Tz",
  "key19": "2zk2JKx6UqRQa5cvmKVRaPXaR7rjSbZ1BLYKDsFyeqq3gp1td4eDELcmbGfF4d7mv1A2dYYJVzXAS2v5FWuACuaH",
  "key20": "596dd399kg4r7Fh3cuY2UiECKdemXiCWDNsFiUngt4U9K7TkqLgxTZwv11EWmpoYsTrguG6EjLjcfezeyZBPQeBc",
  "key21": "zh5RAJdfJ5nEaHvk7qNrtpaGqb4gBedoTnSRa5w8fpGwMJsH5NkwTXUiunNK8uYDNeZTYWL9RkqEDhRve6XdFfV",
  "key22": "2CLJtHF1LWBEuobmpHmBpuvYR6F5ye4ELE9gMesAazTGZMioQWFxvpis5Ay4A6ymj2iGqEVyfoydzq2gQ6gtwvb3",
  "key23": "5wEdCBWpEB52F4QYiA3TD1W3ro57653Liqt2wECwwadV4yqh6BVzSsBX2cmTRx7ThpnDpzM8fycJDqrpbCVrvexg",
  "key24": "4Ctp2ocWp46WkEK6i84YteK2YMtAHsVHk2jtgf6rqsp9VertbK5oGSUSM1L3oQrXpcxofgYq6rE7RTJ9WSyeq6Mo",
  "key25": "49vaBDm6PqCdwczFVzEfMmGZK6hbZPTuLzoH4MiTw8Y2wTCbzMAKj2oWFone19WEXehQqrWNwkcWREVjKRJM9BF6",
  "key26": "2UQyUghen3mNx6KCK1KckUyRbVxYGn8xN9NtAAw94KzYmBBAjPFBWeSPrfsTUdWyin2NDUhY6QwyNZZrr3Sr4rfd",
  "key27": "3pEgUbjiqsR5WhGZyEKjnjVDx9KSiQPC2HTUG4FC4GiztUYpyoUJt4jEeHLFxPoHpqspkaWKrGTVtb9T9ZFzGhUK",
  "key28": "46oVMwjTmwdLNWExzbuEHczXuViGFycn4HUwNCq6P113Py43GeR4RneveLFXJkYmGzTJwn3Dh4pmMcDg5SnKwvR3",
  "key29": "temWdvVSBTdrc2PBWcfDNcc3xas495ujk9qorfRf2Ahk2PWXBFyRVR7CRtybcEnJU9BBL8xgSGeWdoVmrxJc54J",
  "key30": "3Fb3BCk5e4uRA66tZKYjbsdUm72ej1s1MS993UpXCcnu9fhg8nYMzW3moYoDJa8D9sA14rbsNarDdb42cDMQaaao",
  "key31": "Q8dBjXLRxmw5aG3NP9RW1BeKUUoN8TASUkNTgMK7JZQmjAfGaU2VroajrGrj4vPTv6fgUh8ddAFNvj5Tx95ZRfW",
  "key32": "5wDMnbsu3fCdv7CtET7wK9cyhVK7evNsh4FUd8Qv172SRQ93HzSREmzNez8q7jX5sSe4oCpzq5Cw5M76SqNyU5Q2",
  "key33": "2invJrBkrC4LCkNcruQ6Xo432LNEuQSvSCmnvDMR5FSv2YAGfUANKftadxawN2aEgu8ZtZARZRRN9EaBnaR4f3QZ",
  "key34": "4sewb2MH59g3q4otX9HaohkUcFML6cMCYVDQx79X55shZMJVVzAebTKEjAAEqz8Rp2dWYxvhKfWTZPMyLynXepRw",
  "key35": "22Wbt5BKaeE7LQcMu8jHu1grSNsjFmpJeiVtthFUZoCHbXsErBjPRAvhLRkVZC7KZEbTaT9QbWkTqXsgoYuprnBm",
  "key36": "5Rdkg796jaFQnqR4hmNZeUiUKnTD6DSQcpGuZUAtUC4Gkz6BK4yB7rcjWWZMKCNR9m5J6ecemTTN7RZ6WPDnxBvM",
  "key37": "63smjkThJjW4cwnumwoJrLDosM6uCiTz6qRkswuoZVUswFWtvhLaNSpyPc62UPQTVVu5814yG9xDSQvbuBb37qMR",
  "key38": "54qutYkxH5XTVewz4CqbvUUZwh2zUFi8dXsPA6Rb9L3tHRZpVVALMDyJwTSVQ8DfXHFLDqfeXCH6283BPyHKtY3S",
  "key39": "5wZkcjotCxJSnreaiKC6YjCFCukEyuYCmwzwnVbaAqaYT9y4Z4GB7B4xpMpMCRD1ZAmSAtBK3sH5g4pxhZMPnqdv",
  "key40": "2Day4tFRpikfWvrHczcW1kDZmB2Bd4NUSTMZA2ynDNGM1RWokFoWwVcUoZLhHZjnTEt8p2xt9RhvFoH55jLqHnn2",
  "key41": "3LGrvTMphFVycnYbaLK45Ud4JgxZP9nFukoLFCcTDsRxZpWXRZ1b63phSNTyqnbxJPqRZVwVNSJ9dqTiCWgAjFpC",
  "key42": "3bwzMqtGrP2R9R7kbRohHLuEabRoH9bTkXoKi1u4zYmu5gd3Jwkc9PAaR5pKT9Zy8wn7N1jtU7mxs955tK831aTN",
  "key43": "YhCCwEEmzJhRLf1T4inaEnyMhDHSgyGe1cEudm9HVm9PU9HHyxcLokd3SF9PkWPCi5cfvQyQ7fuzZw6KUr9T46T",
  "key44": "2JHRAWXhbh51zY3otnv1c9CoAPFtuVe693BMSyJCPRgxdhjJnNHU95JWGN3ZvArjJbNSnR13bkxS2Mwjxodv6JpV",
  "key45": "vMHyEyNthcub9zQ6RtooE5Yh6RAdtSFqaNXZNrYa2jdsw1FXvJfgpCUNc8U8Q9ULYiGgjz5ya9Jo9Nrq6fij2Um",
  "key46": "2TkYZjsNkdfrie2v3cwq8w353TWbHzVCDKfkv7egzTc6XwJzzetCM49Zw7DiCK2kF4xCdNBtU27FNk7wVGzfxz9d",
  "key47": "4Kqsyf9GbnJxXZwaBauGR3cLpx1iyLputonnR5PGuAGf1ahJnpzgix4wBTBxHn4Xdqgr6A6k21zoG2bVmdrYKSUT",
  "key48": "24TdbRrA2XLaEcBKXhynrgArbMWbGoyBuLai9SjUQjEtrnfj7iJJmbr9PQ6PPAVKLjDGcwffPUDaSqTu7pP5CFu3"
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
