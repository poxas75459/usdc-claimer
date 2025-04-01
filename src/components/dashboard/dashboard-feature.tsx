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
    "2LYm6bCBGWmkaQNrVW6fPrX3UVGfD4SGSmQVFJUkngTY1qAEyyrgM53EijGeQWnCAkkuD5FftKjSnP2GBDs64PaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZrYoEqpFNEpekKcsNKgDnridcspsB65qso7gR7sm6dCvurofamDU3rcssA4kLQ692VvGuWTP2Bo18A7n3vdn1Qk",
  "key1": "4T5ipufWZTrQaLN2nHe7BMvaSnuLSfGtM4u4X19Z7RwNfBdUETJq4n1WzuAE6SAfEZeU3oH9boqjsbgnPREzoS5U",
  "key2": "52cmbZ92TMKzzEn1ZmFpkR14YNXDAg7owM9wccLRQRZvhS2Z2QvZYqs4XGa5Pwi7YX2o6sfXVK7QFjUtdaFmzqzB",
  "key3": "GDyBnAZt5jQTaheRdF1iaueLezus3LCqX5BdPaEfXfoTyssDAvJCipKWKPuh7VWYzzPiMnPsGG7AUdnYKzQbx4g",
  "key4": "2ni362Q9ALi1AhjjBYMusxAKn341JnXbass5bbXriR1RzV4K5eibr1LRMiiSX8AVkHwrjdMXXwhC3CRmgzD8oEPf",
  "key5": "2ReXhfp6MJGF1mdBEunr1oQwcrdLzFj9TawM9X7qNr5ffXHthHqmeEYNy8mYcvFNxiNh5vWKRH4Ph4KywFRUhyy6",
  "key6": "2vBptxyFswyEFfEqKC9WQTUJBnde149J2cZxzZ6aVJi1rvUwwPMvZRWewyToPZbu8AdudAchSGuPWnniVgvKrJw6",
  "key7": "3xFLAvuFR4RDTaLLmnLrWbBSpgLBqtKb6CsVDcv4gsuKuf74TRF8ZyUN83U1fxTx1XnEGqU9D1bWQngogicUUgus",
  "key8": "6Qroz1wpEKD7UD5Rxi6VdFzPam7xVH3qkxC5VXaksf8ey2Df1uTxmxKbXNcbi6NAPcj4ZfvYxrzNyHrjZaYMWwK",
  "key9": "47omS2ZAdYDhgGSdXeTwx9Wfd7CW9CggQtedM3XeGLwAmFQQEZHFMQaHNVr7XEPstCpq4KKRAvQ6fNHUGtS8Tgy3",
  "key10": "34uxC7gbJFbzSSqCHSUqn67T8XsmGZCXc3ARgudhDAtsp4ybP5WF8UQ7Ptq1ShEaCpdK1YcS9e7a8hEEv33Pupp6",
  "key11": "2h7hgtNDg7WbwXKYLcbv3gFHvXCZKcfDbDuGwEwUkWeVNPWFFcL2UFBdDYgS1WaPRwvGvFq2dbVgBZKZ5gSAkD8E",
  "key12": "2Hqy8MPuyQTDCxER7G1TXsBSVhd5gWcQAmG3NzLHxzCMmh4p1wVeNfnxPUTCJfhV4XgZxDuqFCgY41s5PrBCqHoz",
  "key13": "5f2AHJvxDNqyTcDNjhEe7zDWqo5k6DWKasWNipPx9Rgm6UjHiUWjgoRvoubg7hNkBgfi5FGQDT9UsWZf61TSPKT6",
  "key14": "3KGjuU9scRz76W9h6NtXHA9ZajydGsBZzDjg9i7tu8fU5NnHmqD9UWnKoWcH5xuazv4KKXd5A1yhYrEJhYnywS5K",
  "key15": "42Dr1PyikBniCx3eSzWM3jzSSiFgDkaoVuniPqyELMVJxUihNWvQHrtXT3zAKA4ojJDfznBD4bs7fJxSXWwxyM9s",
  "key16": "22KsPh4wMTY5irwVk5vrGqpayctX3wyjZrCHe6a39XDaWHpAHcakPeXKNha17kRg6yUfRdv4QDtJ4C8W7BgPE4oB",
  "key17": "35F3kpLbX6BQdEzkHdZrV2NENqSrkEMUDQ6CQXnnVvWuzGwDJMLJYghdJnRXnj7DKB8YBadQuQZ1vizni4t9Y5Yk",
  "key18": "q2gYzuA4YNNPXmKBoxb2MRNP1ShGjjFoyRtqxiVmC7jn4fnQLYT28Se2ex9jsh4Gpw9apVjLs511dM5fat2ZktJ",
  "key19": "5U4aVrJFLh3hZQAZkugi2mUs3zXveLiJm7i1iiVw6htipwkChbiX55ScAacf6qsT9eSQikUbevv3npB5fK1EXZ2n",
  "key20": "66exTo5E4qQJ4w24hbb4FfRkJTVMAXLJ9NKeq2Pps3iGGMriwREQjzcuuriwwdbMFooKxD8Xbu45F2kmUz3p2bA8",
  "key21": "599Yv52rS1eCPgaGVA54HyrQ1epDttkFXrqeYQGwuJkGEWrsveamFfueWu6rSA4uKTCAthnHt3nCYUKkT7uMeEgT",
  "key22": "wr9dud6cAbU5LgP95E1vJptyFmAuG8uxV7R9zX88C1PNSZZEZBisRpSyUz1MG4oJpNjkPsmje7L9k9FRWXpbNTu",
  "key23": "3BpcdP7Pp3dDBrCEh4MxtRHydHAA1ww5dP4MjEvovSpBLWMMjJFfeBuyAxxawwbXCeDvJhpgPNG7SXCUg4jhR4At",
  "key24": "5BX5sAVPw8AenAfkzyGVufZwAGSgZjYxciMsVoQtZBXoSygY8EgcxRaMAvPYTAKQVu6WHg3YFfDZTpfJPSTPNKRm",
  "key25": "3tULzJ9FUUtYZK464xNGeoVsRtxn3RuUnMn77jkzm3AFeV8TnZ8FFmexS8119ibycUfkJkMCqoPnmeFgKGuwh8uU",
  "key26": "25h73mXWsAJYw4aUjHdHrqA7tr1UZ3TtWqkG5zcL42zvfjzCj1kRpwPtqLMdAnpivfkmqvGxGikjFsKNQmrhUs2A",
  "key27": "5QX8qhvJMRMHXwuEvm1zGdf2KCPqYpBcaLo5DdK4tDM9yA38mLg7YJ7ierBoWfc1M6Y38H25enzoFu6KrmHK2Muv",
  "key28": "57ZGDexuQ14dWpHcTFBoB4DMiWy8vThi72QTXo2GTSYUYYQHXzreMLJ1w81rgbLphHyMwtYRRHKWYX3vcECLW15g"
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
