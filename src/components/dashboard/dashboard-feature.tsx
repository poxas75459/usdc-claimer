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
    "PXishefeAoNTSRgQnDfr9ScKUmWAiVx76Jud7QVcKJN3jUtAjt2md1d2fAEKhoobMM6PQvCFU4mqtpQPXaHvMgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sSAXsYVHEJfwepnyUw1tyXPUUfgUi1tw5Q6QLso3T3Eo6JWyVDK7h6FcgzysuhfWggGVkhyBZSDXfbSAb6KuUR4",
  "key1": "4VaVXfF2W2wcNHcjwgN8iKqGT79ycLg7qwPvb9aKxoWz5rdmLLhMajjJT2AYaViGGhQiMWmeAWKKAsoEoDJF3mYz",
  "key2": "3AHTo4BKZuBj6T9Q5DJ6dKYG6UK3MmhHW8PezRLo7ZmE9LocNa5iEbgdo77KuU1EhDuuroZY3VTfUotq7PCBKxtb",
  "key3": "VpoCvZL1B8n8w5Rv2WAW2dpWT1Zr2T32FyJ9smkSzLgqHN9Fi6xjXVZsmqfTkgbiuWiiAEzumx2Te9ZmW1VShR3",
  "key4": "3LXvzUQQg3BeLrqMaTb8732rxaHpWBhgg5DkoMmrFDq591ddPwNzoiCBBGcWK8JJiPYRPT41RWAMxtc2AqJPjd3f",
  "key5": "5ZYJQquBGweSehJ4hRnX3uezDdY6T6NR2GCZkqDzAkdFWep1xmp7TfvhtSS9Ho4m8NQGkEXHxS6kpBJcQQaW1TJ9",
  "key6": "5Hc2362RnHQ9UvCC3Mp4JGH184pDv79UQm5sexifTatwxCK2EF9mNpEmCXDNB24YeeM7SWXV1vXgtydiZ5oqmm62",
  "key7": "3maCrPRvZAVjvKz24wgSyG4vjZT7RgjVFZdrJt4ZokCLP6SG7AJeaQbeTuNNDtyb3tStveYXm1iyo3x4a1uf3UtF",
  "key8": "4LmVPpB3J4sWurtXjwxv9YkHDiQ8kKNJ8wJPxYGdGhmq5kzgH7qLEezCp5wpFWTgtC5Arc8bZJAEyteEgnSuKVoS",
  "key9": "3SiWSWrLUgbhFyWrcdyFRoHKbsYqKpSqoMEe6i4DZVxk9NUTEL6kFFonYpW31j6TqzMyRjeHdtXtPDVqpNQ5P6vy",
  "key10": "4zrhcLDJ29xH6HDfSndRg7MKgexLrue6hmA1ismiStGmUf2qvNFPoiCCpLKEHhBgApZwQWFffc3P3Gk6M49CQK9n",
  "key11": "3qKVkWnwhjhVmT5cb7jH1TcDYM9zwrFsG4ubvZMLsXHnKxaA31yCTSwoha14YsLHpDqWwSLS4Hvhg5fPf6gvWPNT",
  "key12": "2NdP2P91ByxVut3ZayfeKuoTgcXNXa2fk7SskArVxzNfBn3MQw1KkERqC7uKrGrDShbhSiMFLqC4diQsDVutZkUH",
  "key13": "ESBvrKTMA4gR83VjNYUMymNFR5DswjBRfaiqgPK8wvFPnfYcFjodQeS59fouTPFFtsKD7k8aLkHdpJyVMBzsTDw",
  "key14": "5Qg8gseKyUL7ahqkj2j1nkjSdS5MAAMXVpomczPJtYe6Rau3uTzsFidCQfKxX8PYHoSVBtSmjspqvihU5EKgPCF9",
  "key15": "5rsRhKydozpcAPQn5SbpYQz5h69jF7rYkhZ2cAqp9x5PJPE3m7zXFbu7CnKExLEkV4Pq8UsQdBphuP6KHc6gqQxR",
  "key16": "35DLxVBA4Y7FDcjxLdu9UGQfCu7SNqMTSAcbbAZaVknV8yBvZVzcrzEkqANsZRS8FMmC7xN5JJ33G9BXVRhTSZrt",
  "key17": "2wztFi7Zu9cDBYeQ4riUeWBqsDxm2xMYYrBE2m6PDsBHKZYTeej81ZHPDAbT4FRaVnBKPuVr4mE9B5LhNa4MydkJ",
  "key18": "3PerTXXFUoYbjSbUbLqM3JBsi9BfMZrWgKrrS4NHz2Ny7SYxipE6dmQzVzZfrzchvsn99gFdoGvvRP3QjHj4rue6",
  "key19": "2arByLk8sid41wUvwEGert68D5UB8FSrRsBdx7R2dgHTgB9BXo2uoZEGZWW4RMV2zTQVuua2LwB86xxLczfHRJBF",
  "key20": "21655zTrUZxFfAgEg9CRPPZ7kYAcBy43yBQ2T7UhZy4hT7iaXfePztePyueziHJSDttfLWP1N9Fkyq79KfUxodo4",
  "key21": "aeQjHh8t6vGKAkK8EN9YsLhtvd9VX9vViVmHqzWE6M3z4iAAP6FapSrXyDXapjFu3e6uiMgiAotDyqKGKFRCUtH",
  "key22": "2cHAfqs7LQJEcPWveje45fYAQAnL2RBZRkYvEnfTmNw6cDDgDbGbYejvpSWpJYw9qKTSgUAiCJ4bWVCDCkDvDRfw",
  "key23": "652f6H3qSAiZEWs7C3kcHs9Dhvh1HdKnmqdpVdza9d9PpTYQGzQvVii5B7TzQQ242Dze5vNZvvWo5m637oQLKsKC",
  "key24": "5tpVQf2oeZ7tbkg2q81cUXJKSohF4CRCjKNQQ7uz1hFEkC1eFfh7JWxgCnLFyNDEiYs9PCeDxC71mazojNCWiuHx",
  "key25": "4cLB7YzKndJq77duE3kjNa1o8ej7EpqYqD3yo7NgSuXK66pZ95GuyH5J1rPR8UxTCPzx2a3LBD85knKj1uJokCxt",
  "key26": "4jwFVGJatFegnFczFRrP7PQzv7Rhyrd5rp9rHCSpgTVNEJ24AQX31Hb4svGQf5bCmGjLpB5sL7scCxgBedRJmbRp",
  "key27": "2k6Zwhp7tfG6Y7pLF1skSu5Jpcam4uMswJcJXSvqiQR6CRermaBVKG4QKcckZpx6uGKwsHXuPd5jqkqcMBN46Zeq",
  "key28": "2BWz7xjmvVNfaETt4yBKeLSMbgP5FMvT4oZiN4SvQLGeTLDL46yK6FSAh7t2D9meEaod9E6B1nzXVicDDkuT1Re",
  "key29": "64BZMp5qpFAKm1CS5Dk5r5q7mwWVC2wJH3Wtfw84jLpaEXdyC5Li7KxkzEQ4svMcipRbgWU2BFrX4MVhicy1jtum",
  "key30": "mJnDwoaZykEQQ6du8i93cjBWuDDtgtt4EJQfWJusdqQNBTYnSwPDTfXoUckr7MaLw8MFvrELRzmeCBL16DDTgxE",
  "key31": "2XtYi8hTMBtZrTKRPH7kXmeQK3M2n4WkVVXwhtEv9DEPwgzztoh94rxrM23S5hJnRGyyhpvXnveQeBp68HCDwSQg",
  "key32": "5hVheeFyK3KSwPmw1X9rcb1QKKUMbVay2UHLJDpc4pqeEDsn2dsL85oY8CMPkEwQGdKUW476pDbsXRcHnmeeyGAw",
  "key33": "2Gb3mZdpNsMMXr1yPDDpJhnroKr6hq6WmAFoMjtGc6hUbnY2T952VqnYEwygww2twemn72JthuHfP2FoMPgwTdwk",
  "key34": "4KhoMUg5teeEfG3t7GP318VJffSASCk7MbXYKnZ3w5CxYtr5ZUSzNQfNJt7fMgN5xouuq8i8N3NrNdb3ZXHVT7W1",
  "key35": "vu8mZwBpPiJWku2sZ9p8RxVCjYgUiRdZY5KSbP4Qb5wBoVi3chbfpsBmhtAR6bGBDpwV5JmgXB1kWduaoa3e67i",
  "key36": "22ytJ6K4Bm9ANrPntcg8v93kn29LNZqTc3fmgzVi8sTtc2KYdNJHUV4W1GGtTgehY77TSrkAaupyjXb7u1MpZRja",
  "key37": "2Utum3LkQUw7cbFeNoB1Ei8NDuuPEUuQCRp2hdX1fKxHJqsPB1KNX3EjK25vAReWAwpeoqhLanKyYeJPkggbMUYX",
  "key38": "3RqahrZqr7JjaEVzv5DtDymCLYLPNZwvQfrkiwAS2sxAVUBHwyCn1sDVFe9jPyKLgFHRPmKZyyDHtW1bnnybzH1j",
  "key39": "36JH1hRn7wFkdNuGJcH1vUUVnfJ8rMv9BKyLTEzSagkLU5o2dxAa6b6Tn85yi4a63SbdF1b1Fo1xPKYyfws13dtH",
  "key40": "2H4m2Zz317VNNFAGZ7FrQkaPv4pxpEdxVNUb6NfxMGrNtkbavHmeEnsCjqvihkiKuVxYjj9sqtsHHxpi4uZuPdpL",
  "key41": "ypV9TYTsX7B7wLrNdRNPGfMVXPJpmBy9zpCDfXkGzi8bV5UmCytNB4udzXuCD7fcp2gurp7NUchTzPp4ppRBsUk"
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
