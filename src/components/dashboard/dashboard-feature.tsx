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
    "2xU3CEHL6DyPgaqQjfr6UKMYig9ohM2hoBWPiruPDd71RP35bdtjdeK3x36vzLkA7SZjApdBUxB97RYhBu9TmAFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NqqmLxxnxe6nuR2kZs8ir3jfqebMNkLKjWv4YADnkVsJnP9VJWiDE4e9PVFDhie3hZP3GhHnE2fLgTzDBii12rR",
  "key1": "5FGxgoLcYCKzKLerNRqZEonxqjELATmxXQiF79wAPU4MrK3QuKpCqMX9edhfq6pXqSuuZCs9n2bu5367h7XeeAZU",
  "key2": "3mjHqzU4JqM7tmvFGmJwTn3vdVbjrsegxUeMc82SBzfe22KpMUQwfgu9Hk2LuCmBFxkhTdAe5CkwMyw9KEkBVw9k",
  "key3": "2CqYem1cWohNBJ2BXXZEGFwSgLmbuae7apWBx388NUN8ejhogmon8RfabB3mEHFghdtxL7Ne1BBfpP3P9ocAquan",
  "key4": "5Wpn1ZbWVvuvMnUaz6j128LCCj6WSGXjyiRwQSfmxQQSqu1a1gf1PD5CsE5zhCMixRjYyx1DcC43rqVPaMe65anA",
  "key5": "5VZVuDKUd6BnCtqjwSEQ7jhjEcGJ9J7yZBQ5LGutruqJZJzE12oBku2pWUFgFYsKSF2y1gewNHNTNbi3rujiofJW",
  "key6": "5kH9wQ98QqscKNtAMBmUrQbXbRCmna1fsFA5NPFrgkg5Nm8MtrgomjmNgc7GsXWrAGgCHHzhrVxHBcQUjEc5WZFj",
  "key7": "t9FRdmE3Bf9ZXMd5t8wBEBPqYFSaRLTtNK8kj2NF16Goek2oKQNbPWhHY7CMJLH7YnP4Emxo4vjMA4unixShXWS",
  "key8": "59k7azFgDxNkiQwYkTMd9WRCWikt1DQnQv2F1iGWcqAiHjjC7PsAksYfiensSgTCmYTM5jCEWuyiVsfV3Vfvv17Q",
  "key9": "2j81eVUypjWb31GgsE5YUjexssi3sQ6nGZqXaHYG2geKEQvXixDfaXgfdKcehUL8Vg2MQk72o4eLNaCDYqb1J31a",
  "key10": "2FkbstbpY6D1zpKpV4RCRf4m9b3et9iKYUN1wzovgWAWYvNXMVSyhDWv58bZHFgKmYWQR6gj1jdaRaQ5sqgM7AYe",
  "key11": "2uDLzNSdzEzZgnvTN9PCz9cm7sxLGBtYHdS54JBGstNv3rEmZoPx51dtLgscafwvyw7tCa3h9bWndsbAJE4HFVei",
  "key12": "2tAi4mtQRNwk8exHiQWeER3MDBJPTqbZyvHw46z8bfiUmg4a69f6rTSc31xMbzaUspUACApzxuSKQUZezisXKf4w",
  "key13": "4zgmDTMDLZf5TYFsJfXiKprSnJd61L6JAHC3iWLKscfKseegRdC6FENHcmhM9RWheoRDvupFmRpdZ2ak45PmR11k",
  "key14": "2bFPDTpheucum2WTpngVGQBoWUX1Pr5VZQ6oAEtWwxMU1Jb4Qx7bTe61XjHLwSt3PedCfs2jk5uVT9DNuqfLmNXu",
  "key15": "4o26PBKa8BJfyeRNiroa9KL9g4X9E2rDtS2irWR9sicL6kLVNE5WVkPpSwPMuBD4M9GS7uY17jMpnJNMHE4U6zo9",
  "key16": "eerP5X4DiKTLq5qQq5mHRRcFUpzNEtsiFsPhXuhfzuckbd81BSoiXhCycQDxPVFPdrjTZsFg8GfkfbqdU1kjTmZ",
  "key17": "3Tm3QSM9fPRuFLbvgBNWMNWN6dhhs18BCChK1Y734sipFyyWtPBokJB9UJX4qAzx3VAmv5fR647BmfFBkF8ZNzzN",
  "key18": "5gzwbK4EeaQaTPrMHgTgspU2jhU11sT94CMwnWJsb75xJqZ3cX7BqYULY7DNoXG8j5PTgZwZYTaQ7LFpu6L5n1vG",
  "key19": "4PiDeycKFmhL8JfhE81abywLgkWSDgkDT1PLXK9o82vvP4NpMjEyDgq2vLgHFdvYxwNwFS5g1vNe3GbhH23cHbf5",
  "key20": "5CUjedRP4rWeXQjM78ZJbbsvHPr1tr2Bk9dAqANxKC4PgxhTKoCNqa4MVq62r7Ge44ig1qQdXT6aKAYR1ggGh58s",
  "key21": "2yr1WwLJ6haaJcu59Biqap9d3HJHYJ1zQ3MiLZ5fD7QABKwqHuTwsQDRnpCaDVr2g5MRiRj1rr5mNUce9D6BYZRY",
  "key22": "84dhTPYAsvE947suJ8kMaoqgZ5BkyVBhSUR3Ndx6HUhk1c4DTpryt73755EMny7wAwh9FgWqY6kgvdQbC3n3hpk",
  "key23": "5ttE1YyBJBaqu9QEFnPndPJkSwMFFCoJyT5AVug2smMtcDGLbTuZd9riGMRXsQ9y6Um2SQdeVU7NRKmHDSS7Mjwv",
  "key24": "kpYj7ttNwrrGpGgyFJYg6UDHHME4sqA2RA7FJk9m2oRJbJJeJA1WE5syFPPLKBkemFWet3SpS9yZmuEBLbRMRPj"
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
