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
    "Nd6w6TfXSdfsBK2yVPyuEKXmfxYuNRiHHzv2eEh6kwC38bs3WtoQoLdoL4esS9q84ovsPaMSFzkbLJsSvT6yGCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkMeEHMurEt9obMVhxh75AtwUGbmR3Vurp8qjvUmiGZdrNUeyPbA3SCvyRezaPe5g7JqecVVyMdz166BTfieGXB",
  "key1": "53bQ8T7yTqd6rZ5AkpsacvKaBaHTpJy7qQXd1TDFFSYK5NW281qyQ2cg6UtEbe7rTTeKgaPkK3S5bd7DfPeMe4dL",
  "key2": "2AnurjB5yTnBrwkY9Jtr4HNyHGSNx6CGVqU5f16JF3ZgVgyrAMyTNF9B8QJT2kxtAKGzjuSXSmQKqAbxh51T5Wjd",
  "key3": "5fohCffQbvWMXW7qbVg7rwXKzviTzjqZhqx3k6ir9MAf6wPNd1GiRsxpzmTy266Nr8aBNHdAFjC6ohwb2DE3Rbee",
  "key4": "2CQEN3biWkwrH94q9o7PUBd5DA5AWAwa545ZL6BHHncR4R1ix4xHPJnUc4eHsQJTEAhXYxW3TqAzfQJwGnQSriCV",
  "key5": "2Ahi46Gpm2Js7RWNzbM5QgQ1CkX431dmnND1YJ3TrFWvD6BrSReFKv4MbyaABXKTBeW1XiDb1Vfejzm7VNvMxhcb",
  "key6": "2SsfSq8SFpydcb51pRKC3eECH1KN8cEtJMzLCtWUJuEEw3nv6Gn6u19dL33ChtrGwZG3oTD8jWmmiRuYeqxJyLQF",
  "key7": "5JdPUwmPL5foZKbdfiBDeS1MNRW6x4CEqspdgSWLHekW9LJdEBax8NwNQkGnp8mhcKcaYo759DXXrpERNfAkZJog",
  "key8": "n55QkQpL8Ce6AYfqRGH2YfLga9k2KZ8Fymt13PAtgDrHMEepm5y9oGxn7Bd17K7eqjLX9je5SxmvkvCGEnVKWkS",
  "key9": "3iKi4iiGdDPBQFNadtSRuHf1sz8M9AoyWEwhAF4K5cV7NHXjGV7oKkyRzmVncWYFPGWgP1b3HEQMLjR5Xm5Gh6wC",
  "key10": "5KSzoa3fLPVShvyz6fNjNxSnLzQ8kF2KStgMwNeBeELcPeqqpB4j8Xbe7e1ReDvw7sZEmNJUXXtGf5n8ULzorn1Y",
  "key11": "E8LuJvSMTBgDKnygfC9ZLMsYUFALPC3vSZjAGu1kcvyjyp9H7V1PyfkCTCCcm6ypophiCAVj2wANW1kcDkn7ZnM",
  "key12": "3vYUs1FXpA2PVLgTH9LmXmCfkeRsuz7sonQayFXqFoJvragYbFncsR3WXfrbDHeedEj35UXKyy4cbF5Mi1QHsYYC",
  "key13": "T6v9pM5AP8dvdvZ9WoaLWZERuXJyBvsEq48z14ihgHuSMsNLDDStC541WDMr99k6ewn21UL8Ra8pMG4U4QgMyFf",
  "key14": "63LXsYxTLDFgq218czLYVkFGUw9s6SW6bC4Vp1btUr8gsjkMK84F6L1GmU5XHaukWRaiEWoJBsMQs7CuYmFqj5o7",
  "key15": "3gq1V8mYVrzXBWn9AjRPjYdZLjjb8jigGcke8EMnwFAi73dNEi1zxSLdzHpwqBcxtc4o1t8SNGonsy4B9poE5Tt3",
  "key16": "2Sc747Pxt4UJDXz4EKwLLFyBYfsYBawRkP2YLZNFJuUGYDTwUmg1Psou1MspPRpr1FrF4ktCDXPzKFhg5jFqodQL",
  "key17": "5txvD4UDwn1vSJdrmcSP3xLepb6egm3VNgkd2tQzv5Wh6GwhLPXwfLzAcTapHx3fQ2apykWm3XRUYNwtHf83XGR1",
  "key18": "K6FF6U72m7c7bQUZWnFQYGiqJ193Ds6Gx9ZvUo5iHoDUjN6RBm9jHf2UxNfnek9o2272LGeXTtq5oCPGrvMXVES",
  "key19": "24EMLwHuZ8DWmNSJbcrt7MdaX1JrCxkp1H4sMTr4JHnSxSEKZ8kutKf3hV2An68qLMbyK6UfrUAA6744hNgLtps4",
  "key20": "2Gk8PP4cWmUvCrJUxLLJwquGbLE4PATcX7eV9KAGmuAjx1RJy3pCMbXUeL3d4AcfwXUfjshPx1xMnJs37oNAXcTG",
  "key21": "AkDqMu7AwNXJqRwNFBAZjeH2LVvRmGnS9HvgV79ULZzUMm63XV7CDh5ATDqE7qC3BZXZ9ocykM3qBsGSXKXyiW6",
  "key22": "4asTDzLnvSVhQsxZ2MDfSbPdbK8jL3pQHJc7U5LouM7J2BUsME8wTxz4ivX3amkEsVPn9ZSshUPqWruoGHrTBcsP",
  "key23": "4Wpuu1QBz2V278qjhaVfcMH7FN2YTCyUdq5uPi2yxDw2LyJRpk4hNSpKKJw884uFqk1KWgqgW6GZutWG3PNkpztg",
  "key24": "xKzLzVydUc8wGZAERmefhZzRaQh2dMxQobyw4VUiWfo3fQNsthTLC3bbftiCNtsudYDWRimkMsmPZmfh9pTTjeW",
  "key25": "2bz5tHVB5YRYhuHAoa7RyKR3mftuKgSPCvEhJjFCUcr7qhKo4kG2NEG1Wm7GMdWCZ44Q8t8F7aj8F6LGfMuAEDWQ",
  "key26": "3czERYHZzN4ywAXByoNA91rRf91AkJUG9ZvJamKYhchhCMAVGe1jmJQZqjFnuu1WLFfMT3jnaxjVK8YZF8BMCtCR"
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
