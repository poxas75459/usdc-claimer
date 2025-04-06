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
    "48YZu3g4qHy7UWr6NnjKm6d528CFPxXZsvprontp9uw2PUHmZmfPEgpooNo8pQnPXjcAnpiB4RgLmiJ8J8uXjob4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yiWFmbZHbFCLaaukCuMuowUGzG8LucJqtciq4m5wdKuSpLXXQgpQj4DF1obehwEtpr571f8iujm2UP3qLuKVHEp",
  "key1": "2zYUp87myiosRSHdJYye549k8RZ8yndY8HXYyku4UnRizo8inzyvdsNm7WjqsbQWmARqY8zDgVz3MEDMvw1Egf8n",
  "key2": "2RYDVEfdzGUXZzvr5rV2t7XLu2PA78FrR9hQhEhJxXg5xuXGBTM1cCjBC2LHw77RFPxPyzXcRn18d2QnyhwE2eLm",
  "key3": "djHmrBpzfVzXdPdUzSRDZfi5hfSEh1LJP3x5KMMHGFEepo3fxUsXF6MBLvadj6NwckoEyPbCv9KK6FJPxb911xJ",
  "key4": "4oPeRNsnscHHYdG9G94KriYWkHsPEy9oLDVDkkvFuGQmE7vuqXa198K1KQefMP2f3NGsBCGfEKzyJu4uE9RKmRu2",
  "key5": "LaV7F9JFhenz55rpgQUWA7h3oa1oPovLZQbpxfqHUXEohoJcNjzJsH8o9Y14nEG7CLGYTHP7iSTZaRqed2g5xV9",
  "key6": "4qfgC4TXBTgCHJurAFdLvRGC5NJozqCq3nNvVG8CN2EDNaiBaFxp1FNfigBPt3DADmCL8kbapf3xtF27yyV4Cev6",
  "key7": "5kuGehaiGnxESEPcC5cCPRwKYPXV9h4YRqqRRHTaWaSPCbCtcBNrhskXDmuZi4Z5BCQYLyKscSUtjjWxYRJZSZZk",
  "key8": "3Z2pFEEZGDmDKbAKX617bVStSexJv4XLyE5FVVyfvBgdPwfZQs7spC6qVqF1z7dmrJZdLa4B9dL2TFRfFwa9LKoq",
  "key9": "2hd6CmRAVZqy6uEPTs8rAb94ddMUm6SX4Em7W99ZWxpUseEHLdTPrnLRcKP7bhevsdARMgCaCcrBiDb7CcYh665j",
  "key10": "5PgqAJeQftCZUpiqxo6L5s4C6xWtCLCxVnbkLWydizRkpsLCUrqL2btRNNv9uzHBYqWD8Qa9N6twTDbywc5n3iUX",
  "key11": "V54NJVsTqovuFNW5yDtaRZbhXEEpC3j6nCxhEDzas9Q5myV386iuGMAkyLq74q4VyJRveajSSfwiaserEfsSw38",
  "key12": "5hwUBvz4iie1x4fsdj1ZirPHomYnk6yomtwqDcaisrNjWmh4DAVWiCkUVxtCP1WBjKVFpEWP2DH7z38AoDocw3xq",
  "key13": "5GrVg5XfyRi1AYbnpGGhQii2i57eaDxjUdsUuJbWcgMHjAzhnvwaNd4jbm2Gnp2niVThzeLHojvN1tXWLNquweSG",
  "key14": "51ZjKXwhXUCq1jKgFEELgfoTn6me2XeV6vLuEaRcanQVZsrh4WKhoqwVadsuvMzGaTgFumgG1mhJZTsMbd41BGfW",
  "key15": "5vVa9RWfkBoVrBAAeaLA4fESfPLV1pvVAM7jRCzmfoKP6NQd2sB5MmmVbds8Lwc7rfXXU57yDfnp953kZMXmzvrC",
  "key16": "4itLJmY5G3qVsuGzeKVmDwtcCCNgZ5gyQuRAsBvUXEiW2STLtUd2wBDSXqRgHsqGa8ZAXKR7Ez9MBN6VmhzN3znx",
  "key17": "4c5FjsNsA1xzxyQefey7X5SUHHp3RC4vPSYwtyDHv9RxrubKvqX5PuRErSRZsMaM5s2Bx5BneoVKGGjjLJRk1267",
  "key18": "5DHqhMAe8fN9beJ2Q3aKoNwDBVGX7e3XdGACQbbWCRTrNXt5dnaRieCBkcwQodkjTyCKKqtGnH85zCYTe1SH6HK2",
  "key19": "5JZq65wypWSCqZdudxEceG7jAEfso42hboDe9wKcsAVmCpdCVQw5RU6xuWq9EizomfD7eA1a1kNvTNLboNehKSUi",
  "key20": "4DeLzY7KTcr5ouPLQEk9pjtj6ebLxMX55YpxXAkp1GyK1UvonJc3dnxBFDPh3Xodc8LGz2fTVnU4ToRKZ2dmb4YN",
  "key21": "vYFMyev6mP8hNLv2PjAeeWeDHcbMxf3MpctvyyLht7o2n3jgHPtnK412U1QryzPeSehLbeWmSmaUK6ZPb9brkP7",
  "key22": "64LewbrdEZ629cF9UGgrRPGLtva69tvKJXSYQTCQKDBF6HKw7TwWWjaRjtZdfvdK1qsVtRuKx6Uno6H3g6Ym5jFD",
  "key23": "AWAzbCcBL5rVqr4TVdUP1GNuWYeqKSJcW4BNVZMKDL8cCH8uDoZu9NfBvQpX4tmswpNb5GKmPCMuctqfyAwxzX1",
  "key24": "25i28e8ZudLNf2so16JY2RaZvV1D23FNWdhtP9zJTVue9SpUaZY64VA7mjpxwJAJtAeXBMiA6N31A5ATyA6w65hW",
  "key25": "5C5aXYEk3634kRWaH5o1ZrWwekLBkCwjzdWAXJqu1xCqoki9T723sJkmeyhDBxVgwxiWRCn9QXxwLBoszHdrXUD4",
  "key26": "5hrADXfPoZjxvpDXo5eR25WqZzrDvwLt8VSRskhm3aa4XK4qewSkVYjhpZS5KcRV7E4VTCwK1vM6cXwDidtXcWAo",
  "key27": "5iMxDRaimkBUsXvTnjRkNv8wEMjAa8D9HvCSKKUWqd3NBzbzVWB8Xw4H3S1naEoD1WPBaHprqJZSinv1M1hvBczD",
  "key28": "2nyNyCs2urCNhLRUb2XQfTjKxPtVd6pRbnNbZB9H8YM9Unnfu22xDVi6LoFnAYr5W99Cjz5sp5r9AYHSnaKpK4Zp"
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
