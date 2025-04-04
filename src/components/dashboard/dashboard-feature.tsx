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
    "5CszdabvgdP6sWama6QgwsMR8GKUHVDUVbzQnXg12jPSVEk6JGp9TRwbBgTFFYxtHG4dc3wGwXDJt6hcTQhndfsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aEgciNha26QEnzvjQUXUmQuGm76DrGkEwfc7EQwnbe57jriYTwVNHQ6m13aVEbGJ35DsZunZ6uGXT81ucGefdvC",
  "key1": "5yk64FzWtJrPrXLqf3ozbX4znZtGqRYfXCyZZ8PUAhpqwcyWZpsjxkr7zmf6PyGdboziteWAVs4JbUPupeybCWP2",
  "key2": "2A9NmGC9RhzZ8hax6GKdCbTNSr3qV1gdLAzVCygfsqWpe1hHQyEbcTtCEjRhYDqVRr87baCCFDGeDzw3rKpNtu12",
  "key3": "LX51E7kK2mWSXMkXkx5ufjHWfhN6x3gHFcPfDKRQqJVG45ce3HvDwfc4r4UzVMFewZNs4rzBWqFG9iFUZgdXvEw",
  "key4": "36XisaNwnm9F3k2Pe9KvUbfahpexYjt4xgGmmtZLz1a5XoVxSdrsqqzBYsHFtPJz9qPv28Nj36TsB8V17U59KvLa",
  "key5": "4wT35ARhoSejvkXXNUpf5KSqzQgPe6gqHePDbm7wjWXaexUCxgWjpptt7GQVqH9zCTUaoF9ec56YeChq8CJoutVS",
  "key6": "5PC4kPiUcTu2z74NTrpTJgyARewNhAqyLZJkfgrC4ttxvVM4SGCnMoZLcPLGnkKzevweuY6X1bRMbzjWvaFQxZwN",
  "key7": "1qniYGdLsgvki18gREBAGoEHchDtHJSowX5EYxctNfN2ZESJVUmvrLqPWvw5uchdaz8RgvNokGQh1V92jZbBFke",
  "key8": "vADb6d3ovwCzQ5aFH8uPYMLmdhQ1bHV77Crj7QcpWqfHcQz1EKdAt3ExXE1aATgocjnBeb7t9SBF43kgUUh8snF",
  "key9": "3NTyTG3aTZdrhUTdpTMP4bWcf2ZkB2iiGVMDUmb7o3nHgpKqbc2u11HCrV1sPt1J7diohFEa8encp6i68n1zsfmP",
  "key10": "3Fd1ZPoSHK7RXuep6Lu3tupEEqyRyeR4MrYSxm35z7LRk6iaQ3u5Q3DyGjSwomhQhogwBUCxtvmZjZ9rtK4VmZpm",
  "key11": "XpTN6UohcXVNroLRkQYVX8D3S7He8s7ZeHoryVr92F7Tt84qT8RLJPj6vGek5cc6WYKG9woSdtkiZe7JR4wjvyY",
  "key12": "LNTpSQNz2PQ9FSEk3KgjNZRp5eCZUNYpd5JriNALVRZV5fn6MYNwF4C2kagcqqpxx3F3CapHx2zUsKo1H5KJjZZ",
  "key13": "2oA5X9k2ehFUntuqgLTzRUfvrK7ySELwPWyqFwhkbUNKCRTWKw6EAbkKp5qCnBxrysHSdiwFXzfz9XmYuT668hSV",
  "key14": "5kW3M56Up5HrhpeRsPArrYEGnqahRhyaLjDYoxYeHMBPEFq1FE9zzXvD5FZnrbJ9XcdfwB5QvbdKbbkrW1gPPCY4",
  "key15": "34vonT4jAhHYTQLr7NrqdApv311Qjm9PkxxCrx2fooCUhBJ78i5pjpcTUrxYwETXieyYQGTc2sCsWHdNoyeUG3TP",
  "key16": "2DFHyXCzPSbpfLTBGJ45yZ5Mv9YgE7oiinXbJmtbEVLZquRKaSJwhZwURxncV3X1X6n4sLSkZAa92FzpBYBTKQie",
  "key17": "5BPBhqr6b1jZ6TTkqq5D5FvwqzqZWCoCbhJJLn1JMAod82KqrWjEZfC125vYHeBXXBwFTuyNiMSpqLZVXgyZDb1j",
  "key18": "3ZutgpG8zjJuAvzmmmYedF8HnyADtvHosbXonDaJyFZE9iAPccvX3ywap1X8iHZaKkxLRMuRVFWNwHRwCSbkZZj4",
  "key19": "63DUMMGeoZ5A15C4iyRGwsDnjAaYwTbz6eHBx4pszDmwXXYGem5AFwYLBgDLUZKVh8JgYBYegiHgvz788W7HoAbL",
  "key20": "2z2RFSPKUjHsXzymnUfjUK6BvmArsuRCnDrwSBRFcRLkHxXNZV4YhcBWmGxy4vaRd2c351LrQv5SsEBKUz4FtcLi",
  "key21": "9pRKEDcbhM9fSyvKAKf79TfKFwBkfvQbG9hSLJuZNR9WPPapEdM5hNEqgi4X8qsPBYAjSSs8TWVnqtVLDZYenV2",
  "key22": "4GRTiLR45hkf45eVaijKvJUcZtZYnABfc7ywhKFpoJ1FHKuxkwEecP92gNuUFJKUqaZkHZGFzqVqX9BAeTKYXbeN",
  "key23": "49pTGzjQVFiVYSdW1DCgUpyRk5ACbwynQEQHA28KWARaxi7gUBDbst2rt8cVnqKEYL7WuN2BHAZGahTeLSfTjiqo",
  "key24": "axJN7PFRfuDNKxyKnbjmkGPK5HqKRKQfmR8avo7rtDcEeF9fnLTzo6TabnVpGXZeWATuhfCQBs1JQm9ULeK7a1W",
  "key25": "3JP1sJ9w2vY4LEmNr6ZgauTAo3qqf294FMA2J1BH2A11oRQU542M7p75cDb4XnfiHbNRYfYY5DdLXpHpYXGcbdpL",
  "key26": "4yRqmpDLdYeCEittEEBGeU9G3JQSvwXhEGqvwmdTTN4EFqajRmUS9QhTzkoTcQs5TuYazynTEWE219phkXz4fvVE",
  "key27": "5s9RGtTeqRscr21vE711atxeZXRJEDHxRPxudRbgJfKkbp7TaCXWcgEXyyNJkawXykRiHN7ykP9qHRyrzQt55oqm",
  "key28": "5wSvkW32m1BDCBywFhMxxrXNSGzKhpHZXstP4fzVV2wNRhJPj8svGojXKezJQWirzyZjBRZzdQh7getVBzvz9sAs"
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
