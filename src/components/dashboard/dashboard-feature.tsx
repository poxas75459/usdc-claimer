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
    "5ewkjHny6L2c9WMrFQkeTr27fz8y83z5LUhmh6bNRqa6HHJAZXLo8mTDVoAYxuztfaAECpFy1LtN8ehiJYr9bmbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q4SuZgyMwsyyxXsozbvpA3viBHv1Xq9RjyN9TkQxWAykBwaSHxQBg7FvzBkLc91G7tdnTzmLYJ48WGNg6p3U1YK",
  "key1": "3vL1FuJ3aUyTueqk4DZP84UnrZPwLLMSwWnaE654GHLNtoFku6UyzVJqkgG77uZwFshXsLdr8nZRyyUcNWtodtJr",
  "key2": "2qz3RVKzjArGwnBhYx1yKt8JNBtxViY88E25ttsuaSuuCE3JE7oizWDyfFYgS8nDAB18f2i9hSfXLddXC4vsB22E",
  "key3": "XteH3a26t56wYufa1rCVzh6PDNTEn4xUEXBWFfmeD91PXvqc3K2N6YrpBhGkG4sjwcdCKUA1pe44iNVJp81HVpf",
  "key4": "34YV2PcpoYwzfkACkSzgkd7fWXBN83wPoSVgVCTJVjJdrG276ZpnZxr2AmqNgWpUKu6spJLhR4sZMKGMf9V9FAtR",
  "key5": "22FrtaQfKYTsaCgWcSTsQjbhfXZzX91vuNDfL2B9jPUwtfi2JxxzsZHUU2xvUSLnJ2dbnPJ99xWVqwdtP1ZRs8tL",
  "key6": "45K1bJ3eAEXq9fzCgEbrDkPFkunP6VqpZwGekXoQymijMxeJMu5pxDePgcTbtRMeXbaNDxzfbQ5FqyrM6PDijCjW",
  "key7": "SHouhXqgZBAfdHNteUTEfEAcUQY7tcK3EZUJQdFMKKJQwDobSHAuFFp9ycTsTVrNX55xEQx9yKt8tS172y7GADL",
  "key8": "51DTnpNEAGwFCFCAkHs3yKLQB9yvwJq354yWEzqtdtkwEiYuFJEDZUbZ8b6v79eXEU5uXtj9UQYnVXC9EK9karo7",
  "key9": "3AL9WTKgrtJ6DFE8x1ny67hVr5xhzatY2WTs7wVgFXKtbdrN9oTfJSf3hnMxVs71MZ9pUcSDT378eEMRUaNj2UGC",
  "key10": "5LXLogmyhTbU85RL3wXFZyMr3bM3E1i8hce2Uzdq48HSMYQn6Fd7aozG3UVjixnGkSyw214YCsuQGE2XYiQeDjiL",
  "key11": "4wiC4Fe5C31AwiMgYTyRgkR1SUZ4TS7vaWSgqaSoxSXQGfEEJnTL3tMexVNWpN5NHQzTqB6HMWV2CWsiiDdwwfcn",
  "key12": "4fy6MNxExscULLVbiUcaziWYVMKqhC1UHr98j8XqxDMveBYqMDdcsbNWzxKmcFDeLTLLGacmci7fpzkP7hCmxZMk",
  "key13": "5PmzMxDFn9kEKXYtrzrZ73zDkBoKu8w2DGjabvkW4aDrnKyK3p3FDUoP5yZHsNEuw89kGjpcgKtT6miQ11gYm1or",
  "key14": "4bArHzPdop9PdR1aq9NFkKyDYxLov2JwQGQPwBdD9V2YwHmoXgMf1rY3989Pugt3jcTaPzDcQ75SGHHpeUwnCkHs",
  "key15": "65tX6hFzWKTH6YQx1eCky3uQiQjzkyR7XAbZMNymTrEsguqBN13ZaiHPQwY1cLWtFSh4o4tmrnJh9Saqz3LoyDFb",
  "key16": "2Ptg5pK1mfcDZ1fn8AHnUniHFdzDBHzKAM7uZLU4eAaXYUuEMpqQQQ1epiP4mUTjHgSVS4Te2w1PKsJDteTaWZYy",
  "key17": "5WjzRznxo3dNFK6C5v9XDrQoN796zsjsRJVRb6zQ2HpKW2JMzBZUfWQ5cG1QPXHB4GPDi3kjgtRMDh8Qpb18tmYK",
  "key18": "4gbez7atjEJJsZ9PGfZxj31mXsNxX34UKJueeVEmwTkCvCGAwJwTGSMKXzXJzDZatV6bWNVpHYGG1i4aqt6mD58q",
  "key19": "5497M3woWzUaQKewPQpW99eMu1EySQR83BYGVzRBXAZyv27w6i8bWe36AxePHAsDUy6vtAriUNAP8PbN38jgx5Me",
  "key20": "QNF1grNJ49o76LodwMcni67A7vU1YLwxfy4eh1uUZ3LyiiL2z9cZuosTENZBzu1ksr12bZwumj3AoNGwxfnmBBg",
  "key21": "2VMR4CcERnaycKGesRBBn1SnJKSz4SLkNLwQH5dGqnd9jbWFjTS8M3MPtRCa3w3JmFY4Wh3aotA62mXWWBmG151X",
  "key22": "2F2Rx9ubAKhzzLZTM5DLAi4efimzbvUhmEZxrfxWBhRxfqCSsMusiHjjWRFdTjcicJc6qx1bRMw2RSCikW1ewKm9",
  "key23": "4Jq4kAbacS88B3G9U7auDNf72drBRp9X2zq55836QLU8R6HU5Y28vBj8GeYrtZpwamFvsM6pBdPQjY6rk9CGUDFw",
  "key24": "213uW5g4AFcnqhUCMCFAn3e8Uz6tmGG2SWkjbG1LFhnBwZFdt7afLMSq1Gp8ayhuK5C4mtQEPmfbXdvEJvdYrS67",
  "key25": "zNk9qLDKkAeoV5xmPQjzScWkZAkzAirYJ7SPxfBUHgx6uutVAcq1uWoQZpete3eJswEAYC6gfQmZWx9DP3tdCQd",
  "key26": "5ogyd6uUvhhBqDo6qMqFFQw9xfvaj4X33YykGCGBJ9eY5UECFGJek4uhrewLrrWaAHq4SupeiMQA9w2D2ifWX5Z3",
  "key27": "3qti8CguKjUnB7PtoMadZPFXbQv12BUWMnKG8PHxySwjT2znNuPBP8nhkni1R6RsFwtyVirgZ68eLYydaDF38kPm",
  "key28": "2ENx3E8b9FWPTA1dNYf2nXnUMdAsSRcZ3sZJPYo94TzPUZsT1RfGdCXedPSFtRJA5wQJXKSNg1fJCpCGgargLuLV",
  "key29": "4wCbRFic4pABmKyTbk21qL8pknUX3hNMqEWq75dVZuZs18akLYyEJjibdMyNBQy5VbYGhPJpFuXVhVmFskrEnTdy",
  "key30": "2gEhwSc5WyJ2gwAcQBV26SaYbzTQA1SaAZLa93kXM7aB8QHRMdTjS4Ryk5i8Ro8nLyq2iEvqhhzxDEdTgCNEq33a"
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
