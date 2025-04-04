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
    "4pfESzfD19qA8LqTFyMpkepVykmK4mzZLRHM5MuaZ1RRCZ6Rcaah6APPc7v4PoFBgSMcDbCFmfqKPyuXcYe9W8FN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eXbUboA6bYhAJnc8sqYUBgsE76KN95zUe7s1yF2AXS5UA2NNokTHZcHTUnKpSb8WvNFEtgbuAPrnpF99hRnBbUK",
  "key1": "5mmgnvRx5CSBqNAgUZC2ULetgVe1nQeZom7Nq11YcsQJmqrLsKiCMpysk8rfi4HGuTtTsFbdgBd2q1KetfUgVMwy",
  "key2": "3Ygw8X2peuPFiQxejNcmqCWmm9HdwxJG8eNgaefdVyXTCcHybrHpYUrkKtpRpQiYYgfpEENr3hYdksmW8vx1WTRo",
  "key3": "RQkSZW4NNkvuBhYGx1jCJP9VEQfom9dXHgRStpYJnb6HiJkJVJB4pH4piBuFUH3eoxyeQPLGZV5gJwUKoaQuyE1",
  "key4": "2sjhEMqM3VpnCGoKwEhnjYRaopqRMjT4tXsMR37eZHBHM4KnVBh5jeTGsXLtKMSzgsq5GFkmL71PtvayUhAMU6id",
  "key5": "JHBfckt3XivE9cXN7524fwjr8FdwWP3zzi6EbzYjkyfKeZgQUua9KVfuxtETXRTQByryrWNjDhSfsi2ZoXkst2B",
  "key6": "499pgGMMgCMZJUSMVg7vhTNJfNLWjgUoYtYHBT4FhmZHPQdiieGrHe87vv2djZRRbTyevJzHGgzuA8XVbLbiPjoL",
  "key7": "43XnnP661iGfrxPCSfJYfgTKjyY6ge2r6zZ2bCYKkQZHXw1anMSPqp2TyALavtQAvi64r4FembxWt8YD3YNP68Cp",
  "key8": "AHm6BuLMSHAPU86zw6zqzqzAAAxkLo3EXxys3Zz28kem5sFTvpm7dmCb5THSfZVuRyJDdoCCzL6SDZz6WRwZ8Ay",
  "key9": "4QTqF78R2CyAFKHg5jMEoTdmcBhFCLNpDZt3h63xUi4QR2DKxRk5kDNJM5J9HEymEcHFyDrtFRiJXT81uuaTc4e2",
  "key10": "57fqUNSYBZBCbFyVKjeJyfBgChVJu5bG76cSFzLU9uA6CUJ7MekRwmnMuXxAYGq17zcGV58193WAsUn3EhyFrVhq",
  "key11": "41VucfU9CzGPstdAgFKFm3spcpD8EnpBQpRjqnzBx1jK2mEzL1pkMe9Ms4w467oqDULpjq4uUfd6kWiCoruzR3Af",
  "key12": "5BiDTdVhksWxocGRqruZcJmxkuCmHWvAGWPeXy8ktRmr8wchmEBiLaaLova2pbNoVKJbjjbofb3KAwXkZGiya1X4",
  "key13": "4yDiD2rVywHEdUVzNQdvwHBfv6VsyrxmuiZTrv7g3u8eDgcHhqF6iSnXg624m9AzDRNYK5aeyZJdKbGB95CFJUWC",
  "key14": "2ZpWDSCWaS9ZZXfkWt71cuV4hMANsQ6UxvsUdvDSQYgj2ZTdvZA7vB8Kcuu18Jzwpafex62hWh9Nd6wkcYtfDVkR",
  "key15": "AdxWdF3eASE2WZtDHviUchJg4PwKHexWasE7XeUCK6kEgJSZr2iP1izjBz56JmkG23HZHsAQRWens4NxDigx8uB",
  "key16": "54pRKjBuyDpWv5ZzqHdEtn4YpK3j8GjZN115kBZ9QGech3HXFU9trc8n7Cn3m556LMYjb6ZJKK2HLpQRBBwQF4cm",
  "key17": "58JBTjYfvW1KpP3hu41GHCxW8N8Phd1Xvywqpca1gbLWBXcMps7BP1V6WzMYaDsYRnvJHWFxGvw6zBLFZZzLsLQQ",
  "key18": "279e2aHVSg4F58muj8wihSU1bSAUWqJFm5q9vQQ82QrWVsf5URKV4MMaM5UmKuVGqXutYdAyXXEoLwXAHLrZVwTJ",
  "key19": "2ZfAXbmeNsMbVC5omQBwEkCwjiYB9QjHix95iGphExJURHfPRZUUh6fG5d5ParDdoq93dsgYt4aL6waXpyxtv2wY",
  "key20": "3DUVdcscUyrmEMWKg6V9neFr9W8exhSnm6zVxrkd3idv6Df8VSqVB4GYHY58kA7qzCzFW17UgMB6WvZPtMYGYA3K",
  "key21": "2zK6VDQJsm99vR2eqUebypeJavSsy3rj2udsApGXJKUTNcCm8oyvWKWeE5cg5cACkULgLKxSzbqyuw8J3j9HwJzE",
  "key22": "5ZvhFH6KM15bxyk5wiixkomnHSZYzz3yMeY5VeNoZ6tVKNUa116QHZNeLxbvQjWQjFjErFwCs5ts6zJYbp2JBruF",
  "key23": "5QtPcc9YmhWKHgDqDMFoLueYG9LchU4sZJbCfmJMGDPsRFFqDGbwaUMRgAAUE3dvCkXz18JPXo6VX8ZAHnEKW9D6",
  "key24": "5vArjGAx3B7HvLnWvPm9BWr9kU363B2ExcV6bVsR2Lz2euyBDjAJEqm1LMBdL4YD3JaJuKjNPrHb4uJMyuhpHJvy",
  "key25": "4A9ihygr4gCM9C5erj8dvqz6cYkANwfoifaRzHwFiSWdG2Sd2j21pvMsFJbaWC2hJMMk1p79kr987oGBZkWP4dtC",
  "key26": "5dECujKZnYvKhWajgPo5usxawBnsdWmYVRqsDoNpCcdYyTphsvWEMgn891jY3efgrkPkGov3TDZMHVr985YhnybE",
  "key27": "2v9dSQydk61xhZ9zJcRtSRZxjcFEY6uTd4cpctsdHNf93vA6A4uFCVzXHDvspQp77d79CQqoUeJwf15tFuzY4GDw",
  "key28": "29j5h2gRVwmeQqyS4QMsuSAq69z269kYdXCkgh8pB4mZhe7euy52pyGHG45khCm3nKA7imDJCwZrMjBDi2W96813"
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
