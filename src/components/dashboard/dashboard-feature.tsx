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
    "5LTu7b6FVMYQ1hCxS2PfUxUatTq68n5jhR7FmsecEyRkrpMhgqpJkfdAVc1kk4skChsYRLjnKqcBhRZXLHLboaRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ivFFAcLEywvdZSttA3DzU4Q3b8oyMTdmJpuSGgeBR6ZxxAAfmTyG5rAXQmgsrTDsk9cB5u3jZUJoz4yYLzJWfK5",
  "key1": "2pV3CYaGDcYDqhMBvn63Yq63FEnb4Ji7fmBhS55nwvGbdZ4eBPVuDuJx2XQqtpuqoBR9v7yadxfkqWjBpn8xjoH4",
  "key2": "4d6isH5yJoNx7oGSwjG7ReA3YY3VYXa4kn6iKAmTJQGkokJVXLauWQZ9B9XjLRoVX9KXC6DfgL92Vex7988V1rFP",
  "key3": "4YQAVRUg9PxQnw5ARxTPT7aBiaEzQWdiEm7xuZ3RUsZpGTqbKjbx5uhv9PwmcPArrojPtD3VSrJZpnpYfRC2qTzg",
  "key4": "3z1ng47zFxerofYEXzCmtCktTCnMen9gfaqhWj7tX3CeK2Mu8AMcR6HANaVgBvQjg8tCSiB2N3S9u5saMCcxqFUn",
  "key5": "5KwC8m2etdibF5rXxsQoKXdBnVvbCSrfZ6sAKoMy9Npp4bjQKoGVRbxLhTcmv8RwCi6eunzqmmd7LKJuEP1PoFmt",
  "key6": "TE2CtQa39SVeyN5GpTkphawvjzwhCQbPSnux4TsuPvtw71KF6RXpjA8dkQw7GgsqMssPxWBgTkiQgafKWuEFgTG",
  "key7": "3nFdRZFmFuqmMqL4jvBphVL8i7zrcXcDw4ehU8neniv9uz7EoYsPWqNzsXMQHk5iebm14GojYpqTi3ojWPSk1tSb",
  "key8": "5oCmPZBGcPe8G4Twgvb5FQ6bPa7bn3qgqqDB7za1JEBLYpo4tWUbhc9egQ6hnaRJ9M42Z9Dk8ziVM3UvcHjFemg9",
  "key9": "kcZxdYQnKiWcwNwXU4NaT3poDMPyYpELYff83nR2g2UC1fVasz819gNgi2Ymfibkmi5Cna9zke9YHnbFvjCFHSm",
  "key10": "2MEK9ecGkgAXi2qA8v73ENz6ZUpmRvPgGsodCeivqGD5FSuhq7omRhopbsidtpEY34MRHJoW3PQ9a36Fe3VA71bA",
  "key11": "3Fa2hdLUVux9uoxgsR4eLxXmBRbGxT5YZaeeGYdAFFzuvQSX2fYpUGYGnHt2TF8cSDYX4ebSMCaTVUww2tsWYHtC",
  "key12": "4EieERGewayi7SenD87e2VQXqRikmTYpyyJEtHTFNtsdYCAXTotvbY8NzvLBmis76sbncHo55G7jYcx48WAxHQar",
  "key13": "32tKRyufREdahrYjEJ8iHfj6GekuV4m6Ki2fBdsFAMX4zVdD4EvbBQ7XYBGXxNMzWQGYzTowwjKmUWnSnzpqRKGt",
  "key14": "2KnUo4YbfZ9uL95ESRKKeRm3GzLHhXBfBS5hqo1dHqo581K3mjc78HcVWRiuk5YePxckivz28RdHc9J3DZb7a1XT",
  "key15": "5NrM5fk3Q6DbrBNDmeuMGiYGLyv7ei7VsDALJ1Urimz4yLxiLVeXvV3VYhskX9HmHw4rsqTWeMT3JFArNkktJ4Sy",
  "key16": "5DVG8dERYbDDGhmXeoSg97M1N2mU1uGM3UpAheqeWkWq7fSU1NXxxyHSSZ7d17WBXSZ9kguZ2F91Ak2yA7ZG1Fww",
  "key17": "32jC94tpgYZ5tWUTBW1CiC13intc69Rqc4Fk5jW8J1CYN8py8ajzXtrVUMxfcYJABH4218vhA1cRPZugCTrTsrPr",
  "key18": "5ELo66uWwwc3TP4dPxEw38TLFXXNve5fw6Q1j5kF6FX3bUjsNb5nt2RjqLmX9wpyi5rj6LrZLzZsJa3fwVtZr864",
  "key19": "5RRzMhp6XGQsnaxQpRbg4Zmj5brwn3QXDSnPu8jM5xS2ADkLyc7Aziu21dTNisZD9wemxT6kbtMK9MfsSnmNv4M9",
  "key20": "vEZZWh23XLrMacnzaokyhcNwyCEApuoZ2JL9cMmiRMY4B5AobYnQ5XJ9sXnW5kx84iN2B68tujakpsMPouGzS8q",
  "key21": "2FcQ7XnJpK6qdWoXLV3wJLxJpFk2hrNFecR4T9DutoXcS31wg8YNjm85oXdfzNjrocf2FGG4kD3dEZCjcmcpLrxq",
  "key22": "3uRBHLE2mMuDPSVeAh9Q43TNAF3qVyuDm7p8UTwfLVRHxHBeJDttUokRk3XYudspMPpdcAgMeASXJV4Rm1681QFh",
  "key23": "5FUNnKSZgwJN3G7VSeJ8F73fppybDCiiAX1WqyohmxHnwUDQfEofvUjzEZmTiz4khZiwQvhhuqKLkXK7A2sD7unX",
  "key24": "123vGoR26BSPUG4JphrUndHDp8VPtA5bmHRV3jEvhwA1U2eCriLoP8q4Ji8tE5TdtRBokr9jsBoMfzWxyPcK5AXg",
  "key25": "4dBmd1KXG3345gdUJL3S4K49wAG4ARaeCgnA5zAB5nNRscE6LXAxg7yNWHGVzuxkR6SdVUJhoSRZdTjFTjQgx77q",
  "key26": "31NCZXiqnT5RouLc3HHvx6MSH42jugnmLL9q16GZNWx4L5AT4u7ctiUHkmGc9HhXHgyDQJtCNNDLtRhxSNTGVsUk",
  "key27": "3R2nVR1LZorwkvsmPFVMVNtcYo2xeJYof2i7HybmLrj45Ft9KawMy5xeT9nnYf32beVk8ohXQiRRnULfnh79oRng",
  "key28": "2Yv8gC9fjNqqtrgQfAAL8TkNhezGpjZA9s9zs5EJqYdHxEbDi6d1U4juY7KtbnW1jXo26qgJUpZXzmCVKY5vFpYV",
  "key29": "5F9LRVZfs2HozRKLTaSDQf21JwMFVCU7WtBaQrP7z9BWeg4pAAWGGFUyCJQva1uKueqPzQZ1Pnd2sNTh7T12yWYC",
  "key30": "4hYph88gsuAkh1nUmCHvtonH4RNHSSDMFqgZmDmsETEbcf2UFsdTmygvnn1TmEwRTB4Jr7xYmbuRpttw9jdRUwA4",
  "key31": "5ezdj9hMjNCpEYSD4EwBPa8Jem6wHdUwjHHkS1RMk8bzGW29Dv4HjZy2y1jFTn7TdfNf6j1fMqGbLH6iPHmw94zy",
  "key32": "8fXaQwKYroNGYrCLPAk5hygYdvoXY2jFNZWLjp55357Bjqde8yAqF7Gbo4uR8R31HjcoXcHDBLzmTQi2e3DvAd5",
  "key33": "2GWTc71i6DihFzZAgeb62FCP8uEgeGD6nHFb1u1FDsisA8CMq5fBLhqWeCDtgk9nZJUnZ5treo8b6XcZHEzZxHrD",
  "key34": "5kYyyFom4im5aU8hhKKFyFG62XgtsAaHgNRTz9qVxWkEawqurBF8pxeRYZJ25xZGVX7CC5HmLNTyMKjPaKo6RVsa",
  "key35": "3czbyw9kK2cMZGh4mUqrpV26XCMtwtqKhHpkRb8gbMGgXWEcz58dTacpHpr9iTQ4yDPKFiawrk4pezuk3HcLzKFx",
  "key36": "3T4zzj6ytbQJ1HnVq3ApiH2Te6G9uowkzJ8i6B6BTsM2aZJ3VbZXEqAN4U3pfhwAXLSSsE1eFFN9Yb6pFkfkUm28",
  "key37": "42Y1LkSsMb6WyfGwxFpou9y9HmvKDMSTecasjFxcv6t7BNj6yPgAR8sSSnfVEf8vZHuN7CbQc87QrvoUU8MGCjv2",
  "key38": "4kvzoTh7j77B3MieTVN3axWUcCSzgUp9eNg6FnJsaxKPPGtScKbRP8sSffchvyiw1NQu4LVMp189r1mhgZabH8fW",
  "key39": "43ouV451hiEFqVRB8vVNBnxnZigXAS8kaknApSJd8DXLTGFRb5D8nUkjVoQ4gdnfTtQ5dzu2kk6KhCYYje7rL4N5",
  "key40": "3BupEat22MYG14hUTJDYNesZtLSyvVvkojeMkYaynELKThwnqGTBbSdK8RSV9rki6mikPoHHhcgBdqUAWaUfX32T",
  "key41": "4rKgThBE19SzMCHJsuvQVJcYt9VofCWNzv2Hu56CDgoY6uT9aVUV75Utv7w4q1KkjcYQoUgMaTETLuygtMmgpNES",
  "key42": "vg4Dy5pMJypkduD3MyNUe4jq9T7KDEh7CizUVqaU1v1K9YVYaLqVrh7VEnGkPEJnPbFp87dr34WrWcbKj8ZToDC",
  "key43": "PtwTLrKPuabxCzSCPZyHYZb5r6Bo5x8wQckQq3ZYo4hdzyHjCHiJciLzA4tNKSFwhVGWvUTQvZ5iYkQVshyCbMr",
  "key44": "4VRC4zRE8cwMuLMpaBHAPC6hhnBA22wdnpdppXZ7ZawTvwYvRVhM946ygzTxAp1fPrLGp4AtCZ6ZnQifnr2pjjBE",
  "key45": "3AQaEeYnyXa17dEK2uvyoJhvAY8HtWWugjZ9Z47X33Hp2LTvotJhZAqbxKJqiM5dXsRECvVNSey88fBRuuAL5P78",
  "key46": "8A4ZBLeFAkuq7ARWArLSwF8bhFStqDw1WdPcGDeEfzT8JFZwHSEKYPNqeyvQhnDca1ws48gcWCsMs3GcdvK5oFZ",
  "key47": "3eCqwz2KwKEWxkSsYN9tA5pTLCRKJ84CGjPCGSweFxrJe2rMiuGnFSKkkN7P31yhS73yzd4NNT46vJu2k9UkkMic",
  "key48": "52dMs6x13d6EGECSqQS6fp7pSSpiu2hdDbFhWAmfDM8LLvaGXw1NiRYKMzZ74RFNZitbCj4Q1RdLvnrRL2GwMe6W"
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
