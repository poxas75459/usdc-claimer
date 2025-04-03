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
    "4ngvPuMQWeETRsiQ9UkEvaUpfcXCMEjdGtFpHfTffeveX4xmR4azg5gcwzQEYpdSDuq8ZHWEVs99vakrMrjBqBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EvGoCBuRXJiwYHzPs9LfEEiSAwgZg69MGvAgP6A8SubysocMbGrSxgM1goWYYU5czPNLTz6UVX7qkgvkcKPYrw8",
  "key1": "2R34GRMpA7GpCC649EUAzGALmsFJCp5WfheRXacB241SsoffT96DXGGi5cZg6342wZzxibgzyWpkVaE8HT3Wi9DE",
  "key2": "LGBxKSK2KJJiiAJr27Li6FHwwykDGJybB74LDudijWMouZ4C1WAi7LRNubQcA5HD8iE8JRGWrMjo8BG5X9Nz18L",
  "key3": "eVQVyFUqNvcAWiZw3Ht6jvWFaZcSBbJtooRbSyYcAF3MvbsPWhUZNdBPP6EGcHvqGdDKfLWE4QLx8thqMkZRuvn",
  "key4": "2kdR438Di4RXj2ytSqdcQwTpEg3GrjWELoJ5otUXcwC3CDFLwKYXVMatgixoCYARWGFzdofyrvr74DYxb6Qt35iF",
  "key5": "3xQyfXtcbNXPQh9hcxn8tn23USqTsKv1ZDvJkdewRgit7Tyq5gYVmpP1HtHAMhiigY22wWvWAdsAQCHn8QGzmfpb",
  "key6": "44RitTsMXuTV3Wx3i5Q6K8G8UYYAhkM2ZDjQkYJmcJmqiCdKuptLfS7gHvR9G5GF3Ek8neM4Jc4yiq1HKRrp8GkW",
  "key7": "3kGFNyVaSX5xKNeenQGGbXyriyr428ePSUCS5JoZyZ7bGxm4k9Q3ZgYSTbVQBnAAu6vVHHDuqT5jzBxrndkL2YxC",
  "key8": "5n9MJ413ndrvHDBFvgtWFq3hEANxvYvwaRqrH2Zmz6PP7eyoy3qFzNNVHMnLputmLaeqEPkndfRWFXsGa1eoXNfi",
  "key9": "2f21Yd1TiN9yB4KCwg9wiGkUNjZ1H6NVxJsas8FLgssvykju5nsSVrwFNnXgZS6xcCjgxveH5JB3WNNVawqo5Siy",
  "key10": "R1JDsUNHPeW7c8ZSHiQTKSuz5gYYyETvCSPouvcunWiKEWAc36bvF7Je7qDMvNiFQ4xykN68LSVnx913NvXhZ3S",
  "key11": "3aLaQ4pkApUpKEoDGHZdAFEz65dLUfPYayPMx3xpBSZZVuifDEEM45mBEAXU56V1Ry4vzxhABKTTJdK1TCitzwER",
  "key12": "MuXicrTLTaQ3ZKVDLbwszJheSKvicAk7LqVTmANygZPMA8wxzMMPeS9rQmoQjUyDixFLcLJLMem1qV1zbEJAWE4",
  "key13": "3yfxPoxFQymUSEfQBn26k4QiS7kTfr2Qb4gsvTEmbdPQU1BKaW5kJi53XTFLhHdE8NhoKVWBnCRbR1DLQKFBsaix",
  "key14": "4QG3tW1P5AiysjiezSrceggrbmLDvqzGivRFZJYtEaUzSDomjA9WmJY5yTSknYdUoHyFamvA56XPZdou1UNJG61a",
  "key15": "4HEJbMRaZL9UJeT2efkovxKEPACSVSFLgoiaVfwd3T3zYxUEyAKF5NBQ7prepjJyeUe8wcp37gre8aeRaEpU5iEa",
  "key16": "ZY2zWZniCeNLf2SgaUi66iYmSKQJxLyxfevFagj4GzwzfUWr7wpnfWZ1t5Y7RgQ87S5B41qFvEML1Z6Yixrc18f",
  "key17": "5FDmW2muMsTvfTqwfiXbrqwmjesvQ92LMWzLDjetoakN2Fdhtwxt5gngavupyeKo7zwPXwc4npxHWgqctGJ77FEK",
  "key18": "2vzxRugLf1xrJRzaKpJ7Bzyw1nLGtqWFForE5ozmbzqNZjYNnkFwgx784V2mJ2R9qDfgoMsreL1JyTs5CEWF9Z3r",
  "key19": "4HMU61vYoHj6v4JZZG7fJrJQxBsc9dvPsAxTBuPNEbWcBSfdidem7QqdsTjELZXhfTUL313ku9W3zCpREKqApSQw",
  "key20": "2bpZPdat3fHbSPwqbdvUKYaXjK2SgHTZwSnm9GjwsSL7HujDSwD995qyoQxzidCvzri8z8Cq9NgEXVFviABccGRW",
  "key21": "Aj3b8goBHBVsrBpqjdyhb4wvEg8Qt4StNyqFfWVcDq592YLfzTQHiCYwVBgfFBFYnxsDke9qbbPyibXnwhUdKYP",
  "key22": "StGgrgCs1mkeSnTiyTuB72buuxhXte5JEBbRuzCFZ6K4t7fqdAQXxvkcDQdZxS2fQntvMg4N7NGVFfvVXY7FQ74",
  "key23": "4UznSFj1mPMKFg2ybkuxvkX5KnrPxwEwP8CeghzX3aKQgf5FWqoWYiAK7nNU21Rv84U6es7vD72zQfcyMQCx7DTR",
  "key24": "2cm7SaZz7cbNzM2JWwFyPUg1xF5QJLkQxtrZXFkoA1gT8t4K4bETy3bWThaNEBN99viAYekqxYt4YoFoHXtMeyYk",
  "key25": "4Hwa9xvwKUkmAMG8HR3SqKAghcmbmtm8Ffg6iM2BdPAGkQmab14BRiRCMnYaSsfDmdhVAT92UrTwa54ZWuSZhALc",
  "key26": "52BMyr9AYULRLn6BUTFDaAJtv1fL87rTMG52PvqM8jJRyT95q8s7RoZ2rdyUCnWLumzaYJpT73YkV7aS3A7GBCaj",
  "key27": "3gdvL5LzrYyzJMy5nBztdRhG49wT2JCWk1XRRMjqsNFUJALTUL3ZvxJunxg3Z9QCrjTPairzsCZYttmr4PAb1bAy"
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
