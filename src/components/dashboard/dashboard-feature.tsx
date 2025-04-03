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
    "33Q5sPCBX8Akh9XjquorMm6GGuzshQfoWGyT15eooy8aDVVNpYDmPtJavMY81eVV44afRWQk82nK2AD8pEnSWLJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3svjBczbp6R7qXCVVwsX7hPVBbZ22LyCx1Tob8rAjtKR2oj49VrwHc67YrmPdjYczpUYL7QQnFtN8Sj7EYTLrTiD",
  "key1": "3RE42yWDJERkQgiS1yv1FBJugqBpt8S2XtkGZAiTgUg9Q12yNuW4UYtWgFftWeqCbuTAwwteFfzrh7b1JooNJthx",
  "key2": "sLjsxnUUAoibmomSe2L7nqRFhjj24bKjEiiVqQ2n14dK4h7vsPaaY1mPRxYnUTtm2iKXsruVQEcrZfDB4ZUVE3U",
  "key3": "25arqUDAPYgX5UaURteRAgs83Qzdvk9duhCY2St6f8asJcZufQQkG8k4QrSHYaZKFD4ipsJjC3BRrme2Tno346ax",
  "key4": "5V6CwqzRTW9GzKrunyWdFLzt5UaRf7WuvRan3nGzQ7oFa9SzMnSX7RtzZHNsgwtgntCwqrrcSUAMgoi5iAKXfdLQ",
  "key5": "2Y9edpoUd9kkDqdHnRiMxng3Y7usGUsQmFAzgMGWQxNRqnPaoncWbootcgbbMQcYTm8YYd9ivzbzegmcM97j4ToS",
  "key6": "4PJoLMARBoYyNPqKhkXU3Kra547WrGobSj1CD82BhH4jac2x5dXkLZ7vasy34GB4WjBD9ZHJu93zLDcGNeqg5yYU",
  "key7": "2YxKEuEuP6yCkBgyxdghh1J7BwXfwxEQNDFWGZYcxhYAv19owNSZibHMEFDGJsZBYbhiPxNDEA18HStdJvjAcCiz",
  "key8": "5YxN3MKwQxBmLefod5Egh2mJ77d4danGTouszwRo1KrUiKzsV6G19Qtk3En8GHv4cifhoq58YhCBRQvR2d3Ar8yM",
  "key9": "GxQbcciPAsycdSXByphrV1GuiV2Erx75Wo4H6auayWnKZWupTSJnUf1j1FjYj2to5bBoxDQn3FK9pyL4nMsvTJj",
  "key10": "gpuh9HbaBn9GiMcR7HBDUSxreNwd991oiToc2aRq1ZqgyWCfFWdKCxpBEoMnK3RGi5xCWvi9XpF3NcALEaUX59L",
  "key11": "3NB4uxV7qXEZT5XGca7t5TSGEdTMKNhZyb4UKSnxQVJnqjbaLsKUQ7cxLo3idwKa7Nh8aGPXQVpbw97eYbNKCtUM",
  "key12": "2AMwKKjWYvYNE4xhBve6TpEozGGuXjRH8v9tEd3ugefnC2ZWCk4oRzBYoEfyiMQRCUxhjTwHWjv4b4EfvY8NmzVz",
  "key13": "2f24VqvnHtZ5gxoUBcutFzeeShiKmbSZmHx9piyXMXGHK7CjvATBQDFrn7Lb34bXW2DW61kBNMdyWmJTVRfesyMB",
  "key14": "26bJ5v1PmShzXJQmQfapvWxDGKV3ZEJxVkJm7Kx667FRBEWaBUwnMcSHheqK1mc2AmyJbKvhC8ybU4BeRZrSgBaw",
  "key15": "2na2GebHK1YMSdvWq2ni34SHNHtJ1enxxcDnRbtXEadEGG3bAqeqdYiHP1zJTX4skZ52M2M9SZaXpVhMxai4Qo8T",
  "key16": "4GB8rEk2r4ycxTAqmRqWf35x7MNuT6Pt43UnanXVgnrpb4MheVmdNrEeBvogWzNftEdMPKgkGtUiW7bY3cZVAFLB",
  "key17": "4SgJWKPcLbgvYqr4STbnwfpdQjpkLjCHzru4Jz7c3MLwUhpARUGqkS9qUDJP4HEQJM1pomcfU6NTQhm4QRGVooma",
  "key18": "39xdZQrn71tXgM8RxPMdX2HtQvzuUvHpmgdcXS4HTsZuy5Dx3j7xp89FkbA4SHM5HTqm3EhaW82oxMrn7aRoRzm9",
  "key19": "3tQbzAv8TYUPoFxsnU2tjdkeaVdfyLJxC3D5kU6MeANnh1rJB5kB1NJkHfQoEN4FyfBhXKwL4V2Nts44r4WdVLCm",
  "key20": "4hpxXkB9NSrz4rjpPUiH5NB9ztaFSs127N8MhbGJ3sAjJN8v3vcijV8y7XLnb4EKTS3zGoYtvZvXcGYNq9azK5dp",
  "key21": "4U72h2YAptEaKcWRdeqAy3HuTjqQSFbwy1r4kPopc35htPQ7T698FHvT8jRRiXK7V2bGP7sB9Bcngw1jbXduU7YM",
  "key22": "5ixN4zh6MPzxV7wxXTG9Q4hFno7XBKQAEL1kDyQc774MJ327UJaMnnSmXoWLNymGpEKTSRfsryetzhfyLWUoGYVN",
  "key23": "5MweviSFQW58XwKcrLRRdLVHgxsuSmwr22oEKPkQHycuqpN7oH6XSKRzf6oF1pSQaQtFUp8BYa3hVyQ6CNiTr8WT",
  "key24": "3iwagZR4iVP2snL6AoataycgArt37BrDrkWNrccoxFkUj4ZpbbsyPktzYpVCXXmsh8tKmCb4TyLD48JAiyvMCHME",
  "key25": "3LQdjA82ntvaFUYPDJEmBeGQuAMkq9btRNtucFNFkTohh4rNPL5wQruLcAKixbpdo7YFSvQf8L7n8ZeHC2PJZKoy",
  "key26": "4nmCBAQCjQx5bRaJmmRpVsHD8CC2wHUqv23CedgcxLY6d6fyQKxcoEn7M7sP79SXvo86nTTi5VNHeWFeghGWnfVn"
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
