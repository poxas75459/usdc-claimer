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
    "5dABpmamGvfBUUBWcm8ggMxf7SvaZPTbhCT1QGeZLsC23ZVfDZZcXTpXzWD7Epinr6ED8gZfoEzBwyQ4JCayrCRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MGuc18XRrGSCfoYrB7qtTcFwwnaNeVvJZ41cyKhnUM9vi7zrZ1BDDuM161bEgfe1psQXSnQgR8bDkvy5crS6iLN",
  "key1": "4yvWAosfYhDe2zPHaDVNnuYETo4X4CwJYxX3bY8Vs75iP41vF89RFHT2BbNzEY9b2SrmzkJsemutzx6btP8JhXUC",
  "key2": "fw88fT7ukKF6Gqqv9tCMfLUkk2dzncExF7tZMFbS6PNM7UyyFMCJSZwkJU1H3S9nutvGpx1c2zDek64mRuhsgJS",
  "key3": "5z1NjhqoT7HsuXLsP1b1FCvhbMEUvDLCnJwgNfHXhdoa6pE6xFQ4uKfb5JPuQsVrUNWwmTU2r3DSoBbhQ3qse7XS",
  "key4": "2Ez58VAV7bA6jsrZGmvQmp2fW9UWQEwCWMCG73setYUVcM67ag4xgkcVfeYBfJS6oYGEfXwY6XcsyZNS3no71Msx",
  "key5": "R9pNP78AxYcLi9Yw1AuuBnC79mKvHeWMHKcaheS3ZTL7DmLHVw714sRVJ7GFZ5Vx7LBkhBgVeTWcFGeK2W8df1s",
  "key6": "49tUGNkpCCNs2Z7BpsXKhBBEYm4iMRnzLSnbPx1G4p5q92waUZzePYvsMmRXZRiWspT1FkHdR7dYXwEm6At6C3yi",
  "key7": "5i8VDY8aDXAxxmyNpNE9g3KGbBoydUEYvqF77afpVgZRSxWyKMFL8XnGwbwHwr2ZjZVzzVqVsab29Ey91pq1Kjkz",
  "key8": "4CFEpdGuZEPPJre5PbM4WmYiSyNBNUvu1xdGf8CGVZiuwt4iXR7Wrts3hGU4fphTuHQSivXU9VvuGr3acX3RyLeB",
  "key9": "4Xy2b5aVepbJmX35QPCPG6idLP9zxWUkVJw9r5m8wpn7QyJN8HygneXHKgEegw8s1zxJH9jPT1DpnzLZ22xgfzNK",
  "key10": "4WugVqi2E2f7HqntzECbVpGgwGXhSqwRnfda8C48rAXSaEpyLHaQfuoEyf6WTrb7v4CVusqLvPYtDdXMcvy3qSkb",
  "key11": "c3TuqcvXeVcbAeyuabaVy9y9jAr789NCLEpxHnyDfxrTkByzWRzyFAHqfhAWhoWeL3w5VNQ4jLjeM9rKvcc38Bk",
  "key12": "fi7MpbzzcjTNY6syxySV9YNB59uLEguwuKMwGJxci99TVzM9TUirUK63YjkhFgq14phiyQfoUjMHLuR5T34EA5B",
  "key13": "36Di614joWbGGNMJ5GuJfv8jyVuZq8TTSjFF8eVyiAiJEHz3tT8owqS33aLsrUarVEGjEksBkhFV9MEahuvwRo44",
  "key14": "53oDquGMd32BnwyibjVquoUcQUvwmxs76G3umi4JAQCS4NYF7orPrt9vLwyxM5LtavYsAysudnDqv7RT26xMuu2T",
  "key15": "4jQjPmFzUuuki4WrFVYxTnfH7NL82wnRsaA4r9AFmiaxtMW7hyHf1ZypGW2aa9y8gvTM3fjX7C1DypSowRUP3nZX",
  "key16": "44okxr37HFotFYsTGXpEUAzcSAWgU5h4FSqnXAgQ8sK1RJQzWFTS1ahyhWqANk3Rsvnj1SKdjuzG4w7GPoWCzfPm",
  "key17": "4c25NgRZPEZyzmw34ru1eGPwq6NZcw9ibdzc4n9npp5AoUFYnSPRQsbCv1XzsE5DTaC9bnhQ6YR4DH6wh4GeJKKP",
  "key18": "5m4vRdwQWmzWCLYDeCFRtbio8Uu7JASQypQx3tfYZPQacaaxAmu4r19SUocrLjxLmB7pnxHHMh9Vaz8qwjuB3HGH",
  "key19": "2RSej6UqsnTDm9ghiffgv5Vo8zJHmRQ8GfMdpKaBkKFdeQqQXcw7xiyet91MsYHU1db6HCN3i2H7qED8oN38Qz9a",
  "key20": "4kW4PrqjBGTBz3KveRu5tdTiBK9GnsJVy8ni5sgm25sb66a1n16MqWX26njQUe6AuxRSgR7AjzxminZZ3gNLfmkp",
  "key21": "2kc8pqgYN6B2ae6mfd6sHgAc1BwUENcnGVQ4fBkCokAUXYWhu8x2hDVYW21ZnNHTjKvmsjUBw6vkkDGMCpXKHFXN",
  "key22": "4FspVNDPoNpgGcgrAQaZBwzsKmETJ2ZEkqVrGr7FVuHT92ahrKK2setSgDGPWF3REGY8MThFLpKA4GidcbSYBwBX",
  "key23": "FEPBUz71xkdv7o7PZLmmTfVnqef1qZpCfaKqVhtNwwr3Hp7DFrd56YCsWwS8oSr3uCCuqdqntQifEFmGKeySscU",
  "key24": "1QYkoxt3mmGuDuXJHAgCpyLeymuknwhAKVBRUfv5GaqLt1xzxrnFo12eRtiXUx94foGmZ8uUzJhgohazMwzThtA",
  "key25": "5Cq5C6qEzo37MXzYVQcNamUbSrpCsYoKvs8rCNZ5GkV8o35zS3Sw6s7r2xk16afSbTteHX3HhT83x8WDyFuMFujC",
  "key26": "4kMRpeLH3zP2qUBChvac9iEbUHGnt2u7iEms9zCy3PeRvwC5wBZuzwBLYbFihr5FqB5h3kmpWYt1MSv5cJ56Yrsk",
  "key27": "4CAT2j7V2J6PssoMsUokJxYhUWzGx2FT4UotdGJ2dLWjW3zJaLF4WCR5rzJ2vMSCSqP9pdqvwUpogT7EYjs2VyUR",
  "key28": "59eGsXRiqitezfDHYkYU1Wib8WPCDztaQ9JL8CNkWCG1aQz8GdBH4E27faThSktzL9e2LwH8ToqVrZHin9NFVshx",
  "key29": "2zGcMs7JEHJYJP5JQF9wA5b6UbVK4zbuYM7HfwCdrVY16F2wEXbKWzamJyyJoWs1NMxEFjgqerWxRUa1dhZp3xwi",
  "key30": "33fMVYSGwarrGyQ6Mknm8Yv4upSEZqazWq49pmBpeFvYBnscPT4KumNi46virHoyqSvFV7KzC7Ki9rUm7b4DnoYy",
  "key31": "2ugwhLnv97yq2qVgUYZAWzprjUnJ4mT8RwT7d3ki7ZuKtEBN8rSqHCf9WHbJRgXP9B6rFc8VDpNQ7zG67oukhPv7",
  "key32": "4y4F32YwvCspb83NxBEHYrH4U9WP3qJYczkkXekQbJmGLBAtBN79Zokvt7g4QbJsNzgffwAu7jnFGcDyWRYx73kh",
  "key33": "5EVyKkXFauEz46fkTuoXj74dnqgMbyzRdJBtz5gVPBE6J29HWbezBdNjQHrsNP8kVg88JtJNMTcPieqRSmGR3zCJ",
  "key34": "P51hYFrUUcxr3wLNL1h8qzvoxamjiCVCpzAJEzUnNriPfRBaUMBRnfEZEZjui8yWCspP7K3sHEUfjZhQgyvbkYt",
  "key35": "By46xttyx4uYDg4oq74oCUG27riubWJPX15N4rUBQeSU55dEk6y3aXzuCZbnjTVyVpnTwABtPZcBnZXgwZNWUAo",
  "key36": "w8c4fjrS5pfG8tRWtF4euxXfVKdQqwZ5KnGnthJvFbdU7qNDc9YC7SWqzub3T1eSVAyJqDi7Fg9d6FmzJDXqMd1",
  "key37": "66ki1nR8oz93djC6bYapbYVd1fdVYnK4AyUCZoNi9CtXR5FB4tmtDxo18DsMWegnpipUpmsr6TrTG7pFBQdcr5Xs",
  "key38": "4Fw4u5cyiQLoz45Hjvsf7RHvCFunakiEoVW8KJEnUDdPVKVtjC8ssfJXa7VubBZBgj628zMqLXUSFA2mhoiJ9DC",
  "key39": "24Ztiz1m1jkxg2nUWs59o79Zds6TdH7LzERbiT6KxLPvH7pS8rHzY5kEFtkKGaECMfhtYzYsNnpvJugtEkstkJVe",
  "key40": "5i7htqLPBtF9gPcwgkNr25KKbQMCCxrGXPpktQv4vRyxqusisFAjAxBmkK8EKWnDJn45e5BahBx5kmuiHG5qnkTW"
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
