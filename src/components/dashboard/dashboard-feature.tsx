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
    "61iNKwgKmLvf7DdNX2oJJTT1ybMXQyJDhELg5QurrXpEWQ51qPfqY1GjWyp8cgWC2aJnZU8MJcDVYofm9HgSVths"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "746xq2yBLo1BDS5dSuxYWLZuvjiSsTmSnzMi4DkdTi6EFdS73fcm4UJKZDb9ztk8KH8oN8uwcqd4a5X1f4wzJxS",
  "key1": "2BTojnudcB3uq4CGiKGeBGCTPWmrycMnxEKqMHkfLMk1jrHUGZWCsC7WuGDPThpbDiHYYZYhuN68Zd369du7S2RK",
  "key2": "3aNvDTHwfMHsdDeXV1pqfD2h7rFY4ErhxPpz3M3oed7B5Mhfoz5yhoqZ4ZXxtWfW13AjztCpYV4N9ov6awV42X52",
  "key3": "3zEMd4t3aKhJ51uopt83P3AZb2oEn2Pm1aoX6PDY4gU95crCTZHhrucnb8usJnbnuEhSS4Bti64gc4HqwmpXHtDN",
  "key4": "2d2oEUAxmnRVNgX8xsjScQ8HBcBYb7iep4nLVmRMbikSPSJsAiJVcpwaCx8KEEXfy79UDQFg88eExy33PUPGXZqA",
  "key5": "2hgvrZm5vbR8quTgdeeTpQLFZ4UGtD6W9MbDvyjoFWBe7n9WDmfaMvDQDARry4AAKQujqUKiAdzySWExobEhXSV4",
  "key6": "2C13PA6sbjTg8axhSobYaiGThkmZbZNgXY9uvrd3dn8yTH7DbbeKD9rrxNmX2n1bKMTBM6HFikLeEu9DH5bNFFwu",
  "key7": "yZsXCLpE24KmPQbz7Cgihi3bQaet9PDPAtD1vY7zbWDjUE8CrMvwCe9KYuaM4yfsH6dGorSmVZSXFL9GCWen6Ce",
  "key8": "4fKicHJ3RmfrY7ApBmmKYczaxVgTcy2hJWKzy2pP6nQcKdjemEBijXFHHuj27BzhmG5URtgY43WRY9wzr2LJhakL",
  "key9": "5H3UxV2W1i9QhkK38kxHXi4HnYDQrLZapurCnvAjycKergh9N82nAaNdScYDkbAbn7DH1A9rL5autxKNdQtcrHZz",
  "key10": "5Wq1aT24xrRg219gM4EayGPq9cf1uAFLZ1cy5N8ZudGwAboQafzLU5GghPx1VsMeizSEV2GxX9bkA5kx7mDf68cx",
  "key11": "4gG2AwZF6fxePUKi5qBjMP79QNCNUmBNgePe2QnDdnMbw1Uf28fNXk4y7T8fovJD915XfEoNUwNYWR6XJc5Axz4C",
  "key12": "3GBBwAA6qwwiffEADbnmfH1gvRMbRNrBdRKdpUf1L73qhFJva9kLDFMamr3gMVYkscUGcfRXQuG2HX71dbxTTBvF",
  "key13": "faDw136otVE5FoAgCafxSZULkNAQzV6scLp1DyUNrnahPDZDQvoZnVLrEgaSemMgvRR5SnU1BWFHmpaxUy8H3UV",
  "key14": "4U9H29GdFcCb6g8jbkEDVyoMeqjyuvjoHnkogn491EEvSzskhcKsG74Soi6vWoHEeH6R81abqGzGnzEEvJHoti98",
  "key15": "3yyocu71vQUXz4wdUCyfJe6EE4MY8UL6Yih57uvNtXM9og8ADQrbvJMVXYRwEVnyti6fA6SKkBxvNwrdat24Uit9",
  "key16": "3Z6xBwGdmP97GkPnVhqYKGofgRk8hNaapdM33qgGNWgBPp42y1a4ZA3jJF4j9pVcUugWHtqh42Vf9FXsHu9eaXZe",
  "key17": "4HsFSiugzG814N964fWajDTUZWDVsRdYdV5RPN3NsAotoSRQkPfw7fXFP78oCkD3hgJkyTEWgB1eCebnuJnAHxTh",
  "key18": "5CeUjxqDrXkrikwCTjvw6o1HQGYqRJC4nkzV9JwC3dhMLRGNWFVLaZJzRTju47fxL1vEMppSRSksjrnC1EKNEUrr",
  "key19": "2Zpo5ZMaqmXbcMHAuquYvNqeWv9U64iRSXCeoPYRxRQ3C9S65npJdMA9FnSgtBC3kmC33jzwPT3FtvutfSTgfw8z",
  "key20": "3y4jef4q4QZEMxwL5QskJm84VrdKTBuR2FNFmhDj6871M2ASv9U6Ay1GPkcbYX7FiKPfKLUiVCnFoeJymeuP7TX5",
  "key21": "2mweuqF3ZJ53Pc8NkWbH9249s6Uv7XSR98CVDa96vzsedULAjYPz8dRmuMt1zjJTbzMmYmJ8DfLkBUSVLCHmFf2K",
  "key22": "5CLXY2G8jpCBNKs3mkv7o4PtND5vyk4CEmRMb4tdGRC37h4LijdMjMDPYg8qtQs4RmGYkHLBRcHSQ4y9mbnk2eAM",
  "key23": "XTJRovrqjwWwRo5B7LPV8Dsvfash6c1V5A9VrVFNxsLX7bvak8BLMFjKnr77odcouCkcR7w7b2CCTiAmNZQLV6V",
  "key24": "4KBqJVoba3wvAVaH4ZonQtfzNJTQHBH8R8JtKuZrp1adDcwv96v54VhuAcqC3mA5DJCf7RDqQYC72scnLbN4JPV9",
  "key25": "268rGU9rUhDKWA4uDN3wDxCoULoea7zf2VfePJYyC1Cs1auybMkhK1yow7XPc9XkyoThGYHvNFvUDemn6GtJfnHJ",
  "key26": "4VmuZ4hvwaRfCSMLGDoJghnruM7xB2tQx8N1KKvRvd3r6fswfGmYRwu76bfjK1WajomjumZn7Gfp2zDEMHtyXBH8",
  "key27": "2NkVZToYLi9PiimRaXcUc9obwEwo2q5A7YVx1kPS1i3yxaXVuFTR96kAjiQohAaEgMin5dtL3rGRDTznTGZGUeb6",
  "key28": "3AdSCtBGTSmud5EXoa8yi1VMSojSzE8M95gHc5WNbV1sn5KkFC2sVG8CChShH11xYPVB5qLGgQT2Q52HaQ7hGSC5",
  "key29": "5sy9iSykKZKqbCN8HJrQCuNcuCEDCznY6XEHjxcFKHCaaMsZ8MtqnkmtdSdSq99JLRhGKy8VhLkYwPErezq4CLPC",
  "key30": "eBaBA8dEeRmaufKQT1358SdhrLfvkScMRhKCsf6SLXeqpLGGiHjD7nnZfG8GfMK7M938pCyrWVh9uCL4jHeiBgt",
  "key31": "3yUzhWmWfR2XXa3EeoZNYyZYjeoCCQFWyEGTAfnDDr8AVJZmjhnGVz8b5USCXBwoDcdLn3m5soS2uVNU1rqAYyDX",
  "key32": "4c5GoXZ4Ykvd4S1CYAc11nwuLgc1uA5remaVi3XsCp8fjPvUsoyHayRUWky6M6UMAM9cBWxhNtSsC5gkLhxBhvoY",
  "key33": "4isMi6tfxd2wEho9KJh7EU1ah6HDMuaQMs7MkE44gQREJ1MraxiYfRLqCmQAxAHZb3uXvSZhc6A49cXP4yMmBL2s",
  "key34": "WCqVTyjw26ircHb48wmFhQSUidtuxfDnqPm64FbW35C1CwNg8uQMt41RdKdW5CaPwGfYjqZCFQZdRWVyewX68wR",
  "key35": "49mFzRy7jYBu2XzJhUowUydybY9jfGBzu7Sd9RJCsnd8unnjJ6iPjbem2SpWE852sLxbwFSADtPEJ6okQNGqAfdn",
  "key36": "3aBWZ9Sn5coLJY73VbjYuvdEtPprJLNbLun7E5y7nVAWjGp9WwtmRrjBJ8tz5VdGhGX5x2A7HZ3geJEvzQLxK4jF"
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
