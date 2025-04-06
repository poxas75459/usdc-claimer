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
    "51TDjQhzNwA4ywzCam1Pj7dsf9ZuthMovUQTSTwF2ecZCSUrNdex6tgQkAUtqtYnoNWS77fVQeuE2ax3TdsXiMkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8jScZCR9kvVhCGZZ7YKZ1BCj6BrA4tc23ZuKVbS9cjBzHVJ8DoTi3uNTQFUUEtGzhBk1yjYotWjwApSCiEb3Fsi",
  "key1": "5Z54kCQysG1MRWe1s9qvCotAooJ1nzyV9jLxwYjyMxgmyNVEkpHeDGSEfkwZkfsQfd2Qhhok7atsCpYEwtJaNwoE",
  "key2": "27Wazs1GQVg54JfUACRSv5VfkjHScXyGZs6WYRADwt9UQMvvya6b4d5UuARti5Y7SLY1evmjLVC4gjeXocfQdBZJ",
  "key3": "3nYuPhNtgt9Jz5g7NJcNNoEiNH4Bs5yLBj2egNJUP8QesXDP6CzzwzM3iqPpXRSVPXemn99bLa5iXGQom8MMSa8b",
  "key4": "2qzvuHbMa3bDrePXnZ1TU1LzrfLjnufbgtQwkTfJM2GdFhbFCvLqmrf5MyfbawpcH49oNezc1A36E8E9HE9wRbh5",
  "key5": "21XFrSxXRi8RxdH4k9Kj5KSPezTXNkmz5KeoomM9p5Ay8xPukiU7Zmipo7hJvwzhkYnfDUTMa4bHmQ4uBsatXA7b",
  "key6": "1wV81UsJ3PjeefRWzEUccegWUPUpZuyd263NBJCVb4A1yp1vuC2JCaCK6gi7TjhAFg6BFreLebWuG7owT4YKJj9",
  "key7": "4BAsPkvvGo27ftdPNJmVcL2KnkqREpchhL8Dw99eToNzbtE3EmgiwhwYdhqDZBwNKxVkkD7q1A8wGvN4LRdsg3yX",
  "key8": "3CaBZDz3aTFdVWxJfPWJaUNoxAQk4xUgfQxZ64U6z5FZ6ZoZzWHL2EdzUbMBJndBfMB3fh3nRGkbLGKHhuj9HDqo",
  "key9": "4yvQeLnpz7oeDT4bHoNQhUZ5y5xRd4iAN4ofi8uukTGK2LYUFsiQqqsuTHrYaw39mDtQ2fzAvNJ7tTiqNXJMZ391",
  "key10": "2ggmFN42UmjwdCYCrkQzfRpCTnp9YG4vsdVWAnod6PAx444Gmbny2LeYoKk9dDo9GhzLWUoX8bQ2jeYnceCA9vS",
  "key11": "63P9ZGZPv2y6T36UQDmZ2xtKoLjn8W1KBr46MNMdzW2NNoMN63NckskPxKHAv4vHUUKWtLTzACrxb2rgrfLrjs4V",
  "key12": "47SyBAYepChorHiycAyBt7pUtTi97Snj4qPijusD5gpJuKVcU2RpKCe9TSwPNoiWQeuiqFQqma53soi513BoaicE",
  "key13": "3wtSXbLgWPnkWAkH28Mitge13akTUiyiAtiz7Gvph8ANRLV9f5UmWhCDKSfxMqucmkd7YAfZuVHckuT1SUapAr8R",
  "key14": "4GBEEJqqjJX4GGSj2LDDYcUQtMxxEG7cU6RNBNejm5qArH1QAdvea8DvPMagvcznjHJoUvZFw7E5JbVCmXy2q7pP",
  "key15": "uEWgyTVvTtxCQRy2ZoUA3RemKSzwoiPg88CDXC84i2pZvMwN5qYokVyMnfdUmP1dUjS5ojHVeftraNWLshscw9H",
  "key16": "4XMHBNQtjViAjLoApZyhv13pxJjvxRLhVnJxx3pHiym92LMvbk9GyLHofwE1HMRomw7XABxp3nAFHoyZ1DWrgVKG",
  "key17": "3r2rXYphH9HHzGyPrecAmWZaaaTW3KPwP7GNGDenEdFDnCfjX3yaMvR3t6PaUP5wWFoCdGdk2EMAxuTtyP32XSR",
  "key18": "5bLqiTaeDhj5wapDuHiVuRMeWazvGWH8BwrzRDMPb3VPRUuQtJrw6yFFtPkFb13xw6jezyXGo5QE9NLXiWyWd6H1",
  "key19": "2UFTCPhGDKUXyvJDYbAu1zShyepi1dpaMeRMdnPpxLDeFEVCMCpPshuerCrxCY2DbiY23Avko3gpEKSNEsmE2hq1",
  "key20": "2QLjceGzzRyDneQ85fQHTQrGPmzqaqvkv5LhGwCyY3dEbS2nQeJegkeGhCBkr9GDpqv2wUsubVESKkatK8xsKPXG",
  "key21": "2aCwzueg95XtsniFnh935k1eY8UuJ7emD8MQ4K11Rbf3wZVWzH1CyvHiYjXGF454KxdMWocKmWVQwPWETvC4fGR6",
  "key22": "2Z2dBVFB3k72xumGVSPNRnxWLDFAfHJySQJhBhEbR38PmL6ivufjUpgzTSiPd29HqCrxK6VsJtbwXWw9U9RdkXSj",
  "key23": "3JZWJu43eryeLd99V5yPCZVQ3xQKMtfvMzQnVxrhHsuxu5zyBqUKai5RqiptsvDsRFLZHC7zGUrT9g6BF5XQTSey",
  "key24": "4JaUEoQEDcvvrnKp4gnDxBdt57h126SFeMPi3yDPoBUfRVzgzbbFxJthVeygvzMQZxHtu1R3HEFgLqkUciR4bbxP",
  "key25": "5je9dSFGrhDWjhvWC3LEm7NnXtSvD2dPt1rZ7uTCZjnrnJXZivVFNkkN2SF311sra3U3AiYmDmQmXHQiWegXNnQU",
  "key26": "3haa8PxHtDprTaSJ8c248QZS19yopHKcT66JQtRU42dkTUxjK3GGXPm773DYgUSwqTcwU7n4siyN71ahEXJqbjoZ",
  "key27": "VPzomTqJYSBff7kHZCWLEXgpiumNPMhwDGsxXiC7rTSdY6gMkoZVEJ8eqQLoZ6BZaK3TsRbFVv4e3JAMoL3zb93",
  "key28": "2h2FhDSQFHQmk2dm9FJKmYaKRLGHE1mSHQx2U2GBW4uLoDYbsA9RDNzc2RYpqGNKpcPZ4SkAwmU5rbuhwR2ehVN1",
  "key29": "2349ZKo21tUniGRAFsyBjE16m9quMhVTXRjEUmgeY1pboa8htLEp666Gc1K5Wk5axpWesxa3yUmQy7crUaroxRUE"
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
