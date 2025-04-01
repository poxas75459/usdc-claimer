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
    "5VFjkhemyCVqTx3iFrwihPia1Y6p1nXcypjAx1DaVhcjadhrhWoNAKyCyunWoujhofXoLBSpZtB5CNTNRTuktghu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cNxdynHKNFgj4dAraYyFtE92kyjTD7GPAKTpCvU5P2XckNoPxCzokuomfb4KqWCYWoJv3Pm4ZsPrcjrH8M3zbtB",
  "key1": "5VSisc62GBoEsZVCLkPfmUMVm9nmsmP2FCygDSJ69fCrfVVn9RGoD7JFKuceLRdfnPcEmbUfzpHWxRNWacUrEURo",
  "key2": "3p9UFRrsWFWz57qBLoGnRWtyfv69tvCdnrw39U45SgishrJwMK4MHebnyYCbzWYqUMSkPSGT7D6QYZyrrJbYxwUr",
  "key3": "BQ6JvHH4s4USCDWVntGLa3gYMNDHHN2qHnSBosX3notmBuZ7PXF8Bz1GenwrjwhJGCpFC86YgrAqsQv2E5brpcE",
  "key4": "2nWTdmdgQJizkYNzY8Jrd7x9DMUZjktqcxidJJsX4EuZJ8QyTP9TE98KqEusu6sDN7EErX8jdu2NQrBLGWXLaDxG",
  "key5": "2PfyEH8mky8HcBgz71KJfVXKeYjxKZ1H2hJTzGun6zMegCnzzMUAVaSX2NEShKLoK4QxLYushsARoya7gH4N3D88",
  "key6": "5UvVzSdN4zW1RZpad7z8cEtj6WmZbuvJJQmHHmrv8ATEm35Smvat78ZCzmjU7d2kUzTL1AbR2YysZYk9PUzzUJWR",
  "key7": "DrfYTy16RY2e3wg3zYi7AyN5cnaU7BgNwF6fKRHuEw58uz3xKuXTaWik5rSUz7JSgq17CCLh12MHcaGFKLyMbGA",
  "key8": "559wexLSCUVkVukUYPzcLwvUp2Bkfb9ZzSXjRYx2wrasP8z97z7nG2Y9o9FDYTtPongP739GaF9KKjqbTwuwZqnB",
  "key9": "24wWiRLxTsF1ziWEnfkkH3UzE7JjjCU1PpNKppaNJP96ZxLJsoZJmYrrtc8ehr4882YQJPDvZSS7XRCjFy6WpE6z",
  "key10": "5Qvr7bz12SvWmNwcAnmfWb4onoquFmSEYDpQAeFkJJdsjTSjcDr17CnHzwLYdzAmbbWYFUAWRvkc5V3JpgdCdqr8",
  "key11": "53ybG1wj9qmS1U6QyBjWTfQBa82HLWqd1oCDj1VtLooxkWJf4HKWUyh8rYKLLfjj4RRT6eVFjUdDd6BuyKT8uKvf",
  "key12": "2FVotKqBs5RAPk3TKrEPXD5nPrfRdkX2QbUGcY43gxKZCtGzzyZ8VNjN8ovyQbUMRPQCB2gc7dBdXm8yit85NTyV",
  "key13": "2y6Vzdf1Q7bGsc7CTvDkzDjEhVjfr9dVrDLA8x35CqJm9fPRoavFzxw6X19YWynnE8mvsdrhHDCaAdULiEb1Q5KH",
  "key14": "3n53xQ3mvZVVbhCoBv2CGEaMdiR7BtemwbynoMuL6GEebBZqt58RDhwhJQdbdEF1sqHDQX86dy94Ptk82g66f1Uz",
  "key15": "3PhwP83VhKxqF2WXTTaPtQ1MMcSU27TjwhmmNRU6HpVHgx5sk1vJAH7jtPHPefQzJzcCcnMjC8NFnTFKkZA511H6",
  "key16": "xXiMej93Yz8m1KyZjZ2ArjuUikgDEwSpBo6fhMLomdX2BX4GLf7NcvqLfqamRWjQz6sa3TwRXn9qhMFTybQDs2h",
  "key17": "3vgx5uMxAjDSELLV5k5crqnppyCMEjPcgKgEgEzpDohfRfNatjuoqFNaXynBzHgLqLfQ9JbseK9CAmKv3yLtw37F",
  "key18": "4WSJs6NqfaHjJ3yMKTKxXRQkLhZU8SEbh4S2gEpm4xgqr4uyZwDyzqJNR6mExSjrwZ6pEyL6xjQJ4pNneHnYznDq",
  "key19": "3ccyBgyEDjVfxaYmdpNvyUdC6iqBGP25ioag1E7i5CdAxueYvtMMuNKAy87v1KVPqzKa48ozKJQV25LJXKLXquZw",
  "key20": "5FPMSF99zqxEYiZQtsRr4ABcfJ1bkfzFV3B5U3kGNDDLJbkGv3T6S2xMF1btovpwbKE4ufixNDot4B41mk3sZTMU",
  "key21": "5DZJbFrqeS452Zv9bfY95KPH7Mcz71vfgHk6kfZP4QCzTCxxjjpeWqBib9bEmys9pyVJkazYWXTEqge2ttowSRWM",
  "key22": "rWc74tYpEd3SbZgT148Ym3TdPqoqXteXuVvnc1jSxVZPuXobtDMq2si9DP7hKyYh1XEgMHwSTA498T2Hy9zZrkA",
  "key23": "nXz4jVaz82vuQTCeJomthoDs1FFtU14dg9zQFBkr6jFpr1b8fATsLJRqx5AWqQk7Vqgg4QBMWbAmTt43oqQKMLs",
  "key24": "4i5n69SN4nA3scfHBc1xayXdJzdpcveq9yZqUfxMeQTb8iNcnVgB3FfmVVQ792RL4EmFzbiBhjB4dGXvqKuypWA9",
  "key25": "2uHt7EbrMagUyTZMaCubpXRUbww4YCqstS4jWcVZBE7FxZz4RgFx3aPrpx9vCAv8igFKWznQbFUCKX99yuL9Kgix",
  "key26": "2uNj4AkC2aFb47SpToU5nH6k1DzHVHQyeWxqzr53NvEJn1KncFYckmcbnNQTHLpc1YGRLegw8TD79QcVd4RMc5oq",
  "key27": "C6juw3bGCR464Sw3C85byFE2rQMqrREApz21U9AuDh7PqHoXRfxy3vcbkAhazSF2NCc96RejMeTuzpmNUaAUdmU",
  "key28": "27njoUDBDWVRVosWjvDLNp5J3dmKyTKdrk7a4yVVC35kdGMNod9ezsmqQy9fpnGv8cDTXEWTgaMmHu3poUSqRsFW",
  "key29": "2DqUk7XDUqccaYFq38BBGNeCeXymLPbU3VvYXvTxaSVB12nBLSUShpVh8Cu2oejbbrpjZJRMcuTr4pmQnUVjnfqA",
  "key30": "5dQaGabkhLSqzaqimFvur1n6K8hfvKjYkmT5dB7x9hepWAR1Vnb2RBkfSHcYYNFfCVVgZLq1UW1yTnqKcE6QbrLm",
  "key31": "46RuDab5WQ4ah4LezLxX1zspN1h6R53egEc5Au6pNodzenSHmyp2BBVsLs9USbwHrus9viY8aP8TEvFqkQA9VNJ2",
  "key32": "E7idoeph9DbRQ3GWhei489VQjEykCRwA1zDTE6GQaiersV131FCAFroLBasYBdVmdNuS8RNejNfXH6vtujL6Lps"
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
