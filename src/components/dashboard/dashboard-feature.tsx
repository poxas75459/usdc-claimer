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
    "4RJbJs874q1Eyhcvid5f8dfxt99FXroiQLuqhzKW5WDFm8C5Yid4CuoweBCGUU3fHU4hyUvfkxYSqXwA8GavzfFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMgd7m4W8naQqGBWnVfAX1WDqF5jYpoEeoeQXUeFMciGwHyDsw1KwqqU73YE1Gw3M7zTTXuusWdmFCEjJWckqud",
  "key1": "2Z29ch7PcXbnJNaKgbGKqajDR5j8MD7BvMZvwKHniUzdpStaJibz1UHLY32W4ubcLgwU8uKkcmeZghP54HcxAMM3",
  "key2": "4KkPWfT8ATnt7zw9MXEWNDtGdPhUQnBZeu2D3FbjKeCP2KCqSDLHhGY2xsM5XXy1iHBd9HfxzJNnaMXrdgRMfzof",
  "key3": "4un9gvnywKTsMMiEhKNs2GtxFohPqnxPnVryS58mh2Rx35jY3mWH4rmMCct9BCN9iFckcmUFH7wSJpeqYHaVmTW7",
  "key4": "3PxG4XBngqyisDrGDazVf3mRibTRFG4QPesPUeF69zF1xkmJEVjC6qzsNBrR6hqGRXniT2VYLpfHWMhPstdJgKGY",
  "key5": "3yhFgWpZbH2KC4vx5ALJjrYtq6iQxc1rfaR1Qk5CnkBKZjNJDrVg8tXWSRWeVysfQVUVVeNduDmG55bYuZ7MYoL4",
  "key6": "5L5gixG2wTc5YzFUo8xVuKG4G4MV96BL1hatFkWhHQZT3qiyHzvs1zaDKmC1L487VV3fWr1BcemD8v6Z5yo7zsuP",
  "key7": "62aY45uFxrDt6uHoBBwzQqEDzSpgx4WmBUfkPQzqhKM5vqhZ4K1cbYGWonUzEC52F5z8P3iYrV6APGbg2TKVkM2W",
  "key8": "3o29PX3jXLbExCNL3WrqwAv5NX1kFANu6STVeUDUHgV9sxDus8BAcUdm1dsCjrXerxMhth5RT1jGFw3tcYbuC5Uv",
  "key9": "2aMe5mrLPeGjonRNSFLmH1w24qboEkMBfCs1D99rBZChuiJMttXmkkr9ppnmGbMrn4upxfVj7C2rjuWZKjHiUjtS",
  "key10": "3SJc9JHB6wnDwipWPAeyC7RC2j6yE8hAfWBZMvjUEUAxN8d5FzcxV9yc6fy2i1K62mdyjahugK4r53LrbQTBxGPj",
  "key11": "5RXD85v66nqRWVjcd3WYNWDqw2LdgUjJ1UmXrhrPeEYyqRa6bGANjpboJ5sT9ZzvCEeVXUvdwJMTrK9iXVy2L3GT",
  "key12": "4sEd9H4pg92MMeB3TnychjQDgKHQMC5ozyjzAArHzfNPGRmyPKTsZwTwRxhmogA71Q64dux4uUm58MZYkDXjgBfk",
  "key13": "5Hxgj2fUEw9hCHkjV6xXAvzMzZ7EHjFBL85bYciqByEoob2svD87GBbxGtGD8xiezEA1vT5reRvxGCKkBTjtb7Cx",
  "key14": "21tJwsT2QfPZPP9KPzWgTWkxZpWtFUHpyu5g52TjD5aCbQL1wimveXiPkycpBbkHPrYaUtj4wTyjWtDjQAV2mPv8",
  "key15": "fWPNQC319FbCAAt6Tai2whZMnz1QTeE38syLhEfEswnkJdPjzVpg5uGMTJWcby6JvT8LjpbBjZNTdgTAxk2QCxs",
  "key16": "3CuVFgZKcBtCD1MLJvjdYqfHZ9D2axjZVhmFQKkgttUV4GtsJLRwdP2qszrEEKR2kiU4oNUXwTaK8v31sY3bdjq1",
  "key17": "45Zh7mhx7hbMWMxmtSWo1Za9Efc7XJVshPs4bLJ4bGq4sWvmVHo49RmLqfb6vtQWRU6Vzdmhhc7rRuy9WUXU9uRE",
  "key18": "5v8wGB62iwFzf2eLWHpQ5q7WwBjANiTXQ8A1PEPC8Z6XnPT8EMxjnQtnZ56C3f7YNSnPgoRGEvqaLQ3BMeKWwmCa",
  "key19": "5hd4j3hAGFWUWwM5GqMhPAZd5MBUDicQr5PKbvL9havDm2naTPGDVuitdfZvW3xNfT2bef9AjJbmVQVtUSEcHA74",
  "key20": "tKja7Gjvr2Ao2RBmPZYkvEbGRNLEAyxgqGy8E3R1mxuKkU6QM8LqFStPjPRPB2vo2zTUa7tbNVLGhTugBYjdYDx",
  "key21": "3Q5E8rLsTkj3HyiHbVuUFYwRx8H5LSqcwg8Z3WivMMDGUzbajtZwAtC8eyK7EGETeJGnTdXipftNtAg6a4aZqdh",
  "key22": "3TjAL8hDoqb947GFWn2AQJcJs9ufqHMUfjsUZiCu5rGgifsiq3wiyqawpP8MANANQ9R4nWEdWGabMwB8WgYifvUP",
  "key23": "3oVt2FmehdoNeJa5gbusVGC4is3A15PLPtXu9jZzwF4rupzUT5DZX7iYVu76JFWVSixrV8mgfQxUtYvsp463qNpk",
  "key24": "1SjRA3f9sUoFPf7fU3RTyUhD6zUCgygzRs8bNohvLPqXGaWKn2pSzXL6AknqbQVKUY5HR8XPZThKm7TdNRU4jsm",
  "key25": "2LnfFXfppUb4TK3JYA2pJfr6nuF48njxBzPzmqNJsz488TH8TcuibQdREPPrm9BBRFtJcJQqxrSCR6qcXUMdgnhi",
  "key26": "zfbsVgeNRuAxHaLpZBxFMCshNuywT7CZA1iRPgV4ewkzuQz1MzCDbvtk7FviEDdsBFsY22K7thy9wA9TJ4GLx8E",
  "key27": "3bqPmszBbG2eaKRWpnsHuXaDhaWhQpGkyTkPLyCtA466g46TY79hGDLdj1VhS4eC5x3WVev197GRPr8sTx7UXj3e",
  "key28": "2haLYfkZ1p6UbEmZsieQCvhQeN3R7MLC5Z1RHmenRpm9cdGdigMduF6eFehfzNqGrgc4j3tTiiFx94qJ1uEvgdXb",
  "key29": "5Rg4SjZyGEHwDa63oc8ZHECFBhAYkefspYCMcuw6N96wWvAUJ7jaZU8GRW2T6GwoHZtN1C3zP1W4ZJjMj496PhA6",
  "key30": "fFq683N7zR4cZaAf868ApDb2g8M1UZzFnmDxqZ1MjyTvG7FwzsY6q9Pvu7Kd4xGAEi8mRShBCw6oinP2iBPuLaB",
  "key31": "igpMqwttsW39vWppXdULEibVA2cRU5w8iZ4sATB7dktQB2RxpMQBTLT8ThLSWZ6wdSqN6URHNwbujYATs5msYd1",
  "key32": "5GNKPZXepwkFmC152j5X3hzQB7GhfeEtoPNT8XWeNxZztS5tHFBh2gtnDRpJz2oQaNBvqt17B8bGthn44AwNSmxL",
  "key33": "uGZhuuZJm6JtP83gD6BjRrKaC4RL2dWwCaisVtcxxx1Mx33DrsAYf6VCW9fVXjtTAmqwXWH3Cp4yBLdN3aYzPNf",
  "key34": "5Hi8CfUwWyuDrEyBT6zaAv8wiVR7MyuPDJSEaCbvwPaWJukPtKYSTGLNPwN57hng1wWEZSgxvyPANeuCj6sV5Bb6",
  "key35": "9SyVfAPVjEPtjonyzraG7RHBY6GvjMxqWU2MwARVPWCkphbViQQ9AE5rCze312bE2jdpZmye5MWK53GqvwMrCfw",
  "key36": "JP8x9wpTs1wRTBkQBbjXJcU996nP8NyZELo7tJL8j8NcjfNoZMUMQmJMzWQ4BsR7Qb9QeFaXMLLGbyjfGZ7uDvr",
  "key37": "taNVmPyQSHdvV74wnub83mbn9w5bXgJSjWa86a9QfwCGaAG3gsVLWBM5XFtrV7F6MD11pxTvUozdUNGbmWaXMsZ",
  "key38": "2PD9LZ6XNJkMeM47r7gSfTTHZbdqwGrxeSLB69F7KRZYQGnPpYyBsgfu2xBHVv7yxaAoLGVVSC9hsJe4EYmY3ztx",
  "key39": "32EBjLAHgFNvqp2eeiwRfTndeuzuK9QgQ5Ynm7rxLVC5thhXAfWp876AoGV34zw2AoWHQtynPsSyFp5LoUeVs9ET"
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
