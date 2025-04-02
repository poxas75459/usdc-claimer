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
    "5aHCtS9Hvnyc7usc1hkmhooDts3Ss7jVDaeBymGR7qCpaWiYQh2zsJZrrof6BFKQQvv2FQw7tERAEUvpKYXZCC1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eyFqk3dHmSMqNBkwJF9mJzHS3cVaSa3fCujuiH36hxARzhFguFtzxb8KobkUvDTaCKnGWarFxc65MpW8CENiMYH",
  "key1": "2i6fwM7b5hFgDpxDzeWgtyhvpfd8wyvkzGYG2JcNuKz4U3FbqXY6zYGHigZtUmVBgFdhSRSsTWMSknZZq4egeJNt",
  "key2": "2wHDnLH7d1CAxAgyGXayYXPLJFiaPdRMNRGB4EpyXeAyKz8ZAVFvbgMdyQ6A3s2ofuhXzNMPeHXhRUgVPUmkKRt2",
  "key3": "5rr6iP6S8xksmXZmmkRr1r7dQ9trdRpB5f2KXmjDCf424UyzyRXcLLBhTuvNf8JfsaVazKfsLXRK9x2UqJnccUAo",
  "key4": "5pwMPjMAzqXgYyVestTnEydFjyGYaQBxhRAGmRUkkHjNaZPhG9oeaDJdw27XzEDuJXkv7rMPgd9XE4Us6v7UuKxQ",
  "key5": "2icsxwWHByEdRef9zr3AZhe4QFC79XTkH1oSb9ztbvs2dnC4Nr7g3eDCcwwdhSZi5YTx5TVNV5osGKT9wPGmujzd",
  "key6": "4N4BFwtJWE1rozSnBGpnyxTyPiSdukyNLCvzFeVXkVdcD9xviuXyU2AQJUY2jZCRzv4xXHFxMSZubgTnpCNYVN3Z",
  "key7": "2KXyYMYvuyiGRxVrDpHmQj78vL9pMc1c39CjuRYr22YJ26NG2rmpyZf1Q8aPPx3XEzxFjujcNG7ugR4HHncUMSJj",
  "key8": "4pmZ1ZcnAvTiV1aFP6y5TtjTBgX4CVpmHULeNq5W2XBq2Lugkxspkx2iPexoV5YeqYGpfKfpvQJLCv9Gds5mKRhA",
  "key9": "4nK8smC74vf8PBHwooPU3nCqynqkg1pgYfhycCrPS6ofmTxXrNwC4ENtWNCVhkutFywtNajXzG9tJkRGAgBm3xZV",
  "key10": "481M71nFbtaYmCrhUkvFhprZWniNuLX7vUCVGDKP1rmZrNyNsk5Hha6c9Vz8tQjLw7mxHpwsLb48XmEPAz7LuhPN",
  "key11": "5WhPKXtpkiZPFmbRiK8FCQum14iH3ywYxsYRrHLvrU8tojX9n2sFz3nu9wDRKeHrXyogsCLbd5Cy8RZ517RKKGQT",
  "key12": "2MUMRk6k2dUzzgSdCNMCy2C3bPZ9WCUqfFn3JfDb7pY6kzhjjNtvPHwLBV1qQNSYB2SroRz7SVrGh3ECWu3f4CP1",
  "key13": "9Lfj8REBm2FMSjpQMkNKsRBHho1YawuJd8nHZnWRbTadqMgNvSjfXkd6N7Dd4dVEbxQmJ2h7WyNsAqMkeygomop",
  "key14": "4UxfKyTB8hFXDJvcHx78EMfnyGTspftZ7LGwd1Psb4tsxncfehLmDmwnt4oFFW7AzEByk1trru5VsZ31VXunsrX9",
  "key15": "2EbFoA4r2cjVGJzUVErHX7nCFWySPJx51Luz8VbUsRDRZEHv7u4yTrbZbXkJD5nKk9PyhSPoYQP5FRSvMYQi1qPC",
  "key16": "2fRHfmw2HLEpNJwjULsJq3b3y63pJfgVHKt9tNJLsNvGWYDyTyvKEH54gixm8nMd4D2GhvoFfMzkwc5m12SRWZfd",
  "key17": "2uuRsSCXPe6YHNgU9cHbVdSQ8biV92AYPKRR3M7KtqbQtXs6v7w4M2m4jHf4Ew3AbrKrtsPD4oWLUErDRzpRXX2X",
  "key18": "2Pwz1SL7YSRGStii64TA77PA9M9FYHgsnXGfMEqsM2JdnLSkQe3THQhfAGDTo4jH5w9wzMP1EZ3RLwTU7P3KkPXm",
  "key19": "65Nk1ahE7difwRsrzdXzviczXr4Beb1NwXqaZt6vKa7by426ZtF8H4ndLSY9j3g2JqPJUUBs8fVSeXTYAQnF29SV",
  "key20": "4GNgRgtzX2YwPhVFtmEzq8C7pCdN654Fqh5bf3HjiLhTowYP1V4pq8S35pafCRRqzskehnamp9BxtRP6s38U99zp",
  "key21": "4bHphNQuMDAgK1RXWLvLLsoN3kt7ibBbVma6hqjz5nPEmEgNEnjTV5S9pD9y8Bx4peXWidz4aXi9EbkN1dguLKGX",
  "key22": "4iaEUUL8eeqHgXNgMDYY2W1JhcYsQfSPKmSCUAW4GAfMCKpjjTdib8YjZVqgKaaYJQJ4RhoEKEUKLqBCgyjP3jKm",
  "key23": "3KBiyjLYnZEywg9UTjQbMssMZurSwRGmda4pdDwodMS2ZN8rBY85BiaeVXkhr6PaSySTcxc44o69wrhrPzSYgQ3J",
  "key24": "hyePinrHfLawsA3XaJnznJ4iskC3gtpiHtdKTdBD27AtHMq9nE6oeS7F9sFmBut8apfjWpHFyxhXjezhp1pZrWW",
  "key25": "y5VtjtEjsRoQFem2VZ3rxyDFzC3uGAXwEuvEPhSmp29qMe97U9vtM5qn9QFVC15TYcmExn7SHXHZbJtgZq5sCoW",
  "key26": "3Se6J4tKBNtXJWvoPa2s95Lqd5Ba5bNHuAaXyWUZcVpPnueFPqZPzAZwQY5pJjqpLRddbomrHPj4vHP6iu6qf8eU",
  "key27": "3qK28qw9ZF629Cc5a9N2kahryVr2f7ZFEJ3MwUBwDVZJ2bxxzVYtvTVnr1jAjVWFFVUJf8dAdEa8o4SuoDbzwphs",
  "key28": "4dQqkfoALqFBSKfgt5VWnPVMs8rp4LyFGaL3Kw6h1ABvhHYE6MbtP4PCXvfqdt48KCGuJukxReg99rTfcch9p4Lx",
  "key29": "2J1nFW51vK8v2XnZbZagvKFL4BXF2pLGJGehLjy88YEDjzmBCqVgyQrZ1u39VUeNR17fzPKjBVMv4a52QFfmHf2t",
  "key30": "3tKSMr2EwrLz1UM7qMMsGcJJoUp392VZws8jUTsuR9cZozKTi6jU2WKoyQrHcggaCBfffWAJMQvZG4uNbUUZc2ng",
  "key31": "FKnFkVKLAmJhD9BLZmncietf7zUHBofveLyV84yC3YB6McuQ44fSGEL4YetGHevPkSU1MULRNGGgP3KSfGGJ85y",
  "key32": "3NtwU8GRupXpaMANvCC5Y5sfGoeC5MEjzLWbrN3otyeAJRpca77JtSjj4iyM35ViU6XZ8a6BvTUPgEPkoJTqmEJq",
  "key33": "xyHvPgcXayAoerAyAQo5VUZ6nQh8jk1yvoRCbXbbnwcPZA65CuD2uf9ND5TL4aLY8uhH2o7XFa85jweBZx4qZB5",
  "key34": "61eGr38n2gPMAo3N94DJryJYDrA4JZgbVQwhLE4CurxyoW8ZS1cBCSaKRmrHZ4iV1jt9qjkBZKWB4N6EAQdZrDMc",
  "key35": "4tYmovqjfyBDTg7Z5A14ce53gEGjBe3uJYrFNaTEACTJ5o3BvTCWBL739kjouChJswMdprYNAGApPYGHxsPjiRa",
  "key36": "5XzjHfHiGkQf1PPJRnsTCH96zUMHwms94wYWXJVFnosRFmLJ6vsp46TMXKDcHx6yXg1YeRuJDFG6attw4kDChrsw",
  "key37": "2SzGffLWaFkifPgqGuGFaMin5qAU9xb6PHi9w5FVmAdA8UcXfLeP7o1wt9juM6xpKFPQPqEzLXURpxC14sPX3Z1k",
  "key38": "5U8RUWixEP1HmGBRinxYbzFEDH8DJQXb2sqiQ924vpRMdMTFeCRwzEVTEKHtQ6KfExBamuwMAN8bxZKEATjSSqkr"
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
