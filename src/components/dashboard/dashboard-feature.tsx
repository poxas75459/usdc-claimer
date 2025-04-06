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
    "282d9Toju54KpB5L7E21gVa2EQ1gtpskJuyQ8cgcQ4b6g8e9jNxs6fq5JJ4ssgxb3BsfJxX7GSBj5FMfeEnS6316"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hweh6X159vfwGNGRer7kcxddGzbmxQkKSUjav5s1EoFavKMf9icEMUrHgY1D6XwUZQkqTCoAz8j9rAgqdQFh5wf",
  "key1": "3qEjHqNvcZGuiWhYq5NDRZgQszYrdFVLxXmthRwEx5PyfBryDaHAwGxoKRJKXMgNWGKFLbgudkMiu8PG5zuq4gv1",
  "key2": "5DRMrudobHQTHyfeDjQNijsMnMLXoZcPwgCSXG2qYsobE22rWQZ2GGjc282mZzBym7mMAaU2t9f3gadzCtz3x1mR",
  "key3": "EoQqrEX3i6oDQdq6XSab868An12aXFg6H2fedeYpQduq8jLUFcjRfuue1bMXsLyns1TB8XoskJA7GMhqbghredN",
  "key4": "2kjFYmzeBHRXwQCQvuHAQm8LGzkxVXK9yhqccnCVre8GPYqvvPgVYh6dFSp2uvUbqbRHjxxctpJJtrxSBWFVu9Wz",
  "key5": "58JFPCB97JkSd6LKP9DxHmqruNCh7daZYuTzGzdQXfgchqELAEppj6bhNVDgUzxp3hupq9aQM9mDBmYwL4xQy5cP",
  "key6": "3gnGKPh4p7SJuMjF1GMTF6TNtoBeFfSmp51Jf3xVGXj62CXjtKRFfDqEdEWUrh78SkFcMuPP3W8y1hKa27bUjfpb",
  "key7": "3yLTwyAiUNBtwk3ypxpw7KwX9tNzykwzhuLgntChUbHtqVMDfpPpxp7GsGcrcUWLuwV8p5VYfMGc9VUMWvKF3aq",
  "key8": "4KsPdfJSTcqhEd9NZx6yrx5QbRn6ZLyJNELGVSPFRx1btVW2HXLtBkU2x2phxrECAomF4rGGUDThietRmFrwPHoE",
  "key9": "7mBj85YGfvSXEYm1SozXSMrsTpeHkS1AhkerFf4y4LjmMpRPWA1ckXjHsTP9csnS9Zf369QJuiKRCjSD3zwzmT8",
  "key10": "3BPRFz7nwq8ZUKNJoB9ehfcba3qKadXibFz7TYdKqYTfJxr33WLsZmfnifTSqym2u6nwwK76J6iWmj6dPqpzgqAd",
  "key11": "52rhWR5hia3cVayiiaCBY5WGgDnyC9URXEcv2d6Uqv4R1TnuvkLV4bo47nwmigz34KRDcHtbFSxQxf5beW28mhyL",
  "key12": "3w6iQfbacY2M9jvvUaRwvbjkG1vEGxFtzM5ZsRiLg1RtFTMtxozY88Qja98q7WCtoj2RyKcy6mhd6qYrJpiuWjHt",
  "key13": "4eZXVtbeh5hu1W6zCw2whrhK6bN8TAWYauXiZCPBjhmUFCakp5s8MptR44gaCdkSC6hjvxqoevACAikJZucsqKUf",
  "key14": "2qTH9nnpwpc3HhhZjWeFe9iKKNRNnhT4Ggba2iXBT7QRXDygGNFiM7xqVjZVAA8NT29txAoeyXfSfW171SUBL9dH",
  "key15": "3xMw2VPZri38Sf1eRYnvJdsg4awR2dGRzXPZ5C95j1cc8cUzPUhqoGagEJgYBjdGHMiwPE5F8qbV1zT2UaJQVwMk",
  "key16": "3YmRPP6ACxBKrcXTSn5s6djUDP49Jgnw6NcQ4aztFGyRy6tEiCs2jZxeuiUkQZNf91PTAYxVMPmZvAEMqyZV46V2",
  "key17": "48z345ch9AyXxv2nMCGQWxhBKLSpqPhG32pF34ZyrR3gpYD4JuoAvnCAKYcEhJkU86KEbYus6CemKSqWfTLhz59g",
  "key18": "4WN8MCrNmEPZShvhaPPN1MxaBDuqL4tPvCjAfnGY3Dh8etV4YEUkVuKrxRoAGnoB4TyC3em9ijTaHrD1jQDUxtXd",
  "key19": "4Q8UG3ufi1m8kxDw9JUjNQTLYrV3TMaxrABqCpk2ZWgy431X3UFvmwVwVym7CKK2iJuv5tGXnUk6sZup6QAsxm3P",
  "key20": "4VCbgCDSw8gSuuucuQpcmAGm9r2ECQn6m48wmBhEZ849qW5rx1E6Cr6poeHWs2FKJnfbPAfrQLGqpns3TyYEMT96",
  "key21": "2rtaWnLU1mM9UEF7SGqjxRyhVWezvYLepLeC9DxHZMvEf8pGR8bJVqbEUrdJnR5JPXrCchc2oqzef2vHG28LarHq",
  "key22": "5ZKLANJmdJ7buvUQbGpaH1363pJChDgv9RzggTZy8vDLhhvo4QF5MS7fy7d8ufkKXZjyiXWpgwmVny6DcLeaAV3J",
  "key23": "2KUUWsu9iQg43wSadb9wYGpZGipgPDDfhbTxLMRuR7sSVXGaXKhPqDuKcvGCopQ3ZnJ9aJgJK2A42tAAPTw7WgG2",
  "key24": "5qySwMuZ8Ycpoey8Bc4yw1KfaQGZ5cUvvtovBZYbuFLT4qFGZmgz5EDT6dNuNd2xVbjESmRNSNLMhWEyWT1u8gS1",
  "key25": "5ogJ59xg7M9wejuVemBN6BZTmjd9cjr92CMKMsLFETF8RNGwwiMjzVbqCrJ9w12M8hBmqs2Wy8hSEQnLtMSQoVBh"
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
