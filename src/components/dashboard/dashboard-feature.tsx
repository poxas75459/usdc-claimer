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
    "4LEdQF1Sac7NE9rWR8MUKw5aUprDMiEUksf3TZx1As4m7252XtEPTfxG5bkH5yv3YoiC6618KsmP5BiDFrKbvoqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytiEzwdZNoGVBSeQWTqfWmqH86YTTkTahcBHxcaQhJHpqLHMjjpWuY5ZcRzAnKAQBctcr6NnHzS9w3rUAknvCUg",
  "key1": "3UWTpB9vxdzBG898VGhomDELQWZoVTM4cYhSNNJorUuJo5PaBV9CUvAK9GghZJoVgmgXMTvgpXHXQnHDQ1dtwCeU",
  "key2": "2tafvgcXgohRbCVpxJpngv4YF78RwWw3nXGZay4sdTByRr1eP28MSAqLhsRNLRi8v8YU5fSSLkASk4BsVgrCeBAM",
  "key3": "3iduNRTB4zAS772AHnsYQLvqswwszKmyktfbCZjyUaiphNT3qEmQDVazTfHMZP4YwcsFzVE7Uii86WMu3WSRgchm",
  "key4": "tzZoNMcGp9pCjk9XJi1ULEfJHiH6c48DavYGHA2oJ7fx4s87mhqe2MgQSXWcMcgGPfTpoVpmcghJF9yFxEXTWaP",
  "key5": "sVxMqCoTxArTExSXirEb1rSGkN3kFwhZ9H55RLkDmCuLUEp7q6mbC7B35Ri8hmG4XfJibcBHutYnc9bPcfcBgdP",
  "key6": "2Q9JjNzjsQYJ3XHH7K7tBCd1DBi6zqqbdzPHP8D3oFVMEciRQJ1LooS3GE69g34FMebgq42MtCKWX4LfcnyCZqnT",
  "key7": "xHVEApQPmK5GbktBxo3A3CatoXyubUzU6b5hMa5Ex56E3XsywA9LAY9reQgVX2X4QM8xqtedAqMx4vZJ1SypHJx",
  "key8": "5HYoqTjTjVsL6m9Kzi4ThHGr6G8iPzdd1rYqvLRkaKJKN13HW86nD7VRjevyUSX5SiKatAWPfGpVrurzdkBfPEM2",
  "key9": "3yzCi1NSoHfaRPaUkzxyT9T5s3m9R5v3hBtrhmNa2NtZvTsV2RDxRavBxmBDVhJnuHMZmbBT8464FFaGPFoAw1Pb",
  "key10": "4dZsQZFGWWLjBRcSaRhn3BUbmq1JmGhG86BC1dAFzYSjmeUhF15cpE7pWeMm2fhzhQsdaiogCiG5J893vngB5J2J",
  "key11": "28gTe2wNnCWGETiQZbiFy5me55HYz2iFQ4VQ5EdyiEetsBsK69oGTxLrjyPNMDkPUYe11HPgi486iiRpfVSs8P5G",
  "key12": "2rFm4ZWmCJft8uV992WSk2x7cCTHZ9MaQcjDBFiive36K7Rq39R6D521VLaggXhmm1TpLmLmNaENfPB3V3pm4tJW",
  "key13": "4i3xCYtSspFFyQ91bmSC2bAr4w2CitHh3HAYvtDHsoaa5vAgvcTPjh7bH74t8MRvPi1X9q9h4sGSxLMVWD7h1gfy",
  "key14": "LnSqBvAUygWrfCHXuRzmYgfRfYfg6P5kbEH6qLmyj5BTpY5z9NYhF5ANYGxVCncS4n25HexmK2W6mJNWiDXdGuQ",
  "key15": "4SkCB6xvtNv492xZ1JnfSSACyZXLWnyeUN4AovohzktxyL4v3RgHaBms7ezpX2bcVMmifFuKnpK5GBiYYS4YNm7u",
  "key16": "5uGVtffqQekXmmrJ5bw1h9SU82EvWsnTZU7b5Yo4Gj6HS827GSBuAzhyjNceVqPyujEWncFQhnDMsnxb9eBE4XRy",
  "key17": "4bAEC7tfNnexSKjJKcPh8NA7zDwXhP3yjgp4LRzrMnk5onqDixcoo58ouaqUsy2e3Y2siegdw1hwSq6mYcauBkT1",
  "key18": "52T4K2ikCznfmPwuMMeXMn9a4hcvjtitFr2NHMqmD6gE2yTBGABFXqqb3D3EaHAWZ1E67t3Me2pMr7wBreyVCHFJ",
  "key19": "Uq5DnV6WvSpC4QYZaR7Bh2H4pXjurn5Uwwu3KaibyBpaJDUBxccDzkBycgpTdrCDQ27BUMgZwHj7duMucjnZ8Z3",
  "key20": "3hWcf89Tyy9cay4kx1TwKaVDjVms2NFEK3PC8rMuW7YM4rLQRMwfQ6WCKX8R8hE4wn6LVkoDKRuZdRE69K8ez7p3",
  "key21": "51HBFUikauFfy8iS8BHNXQLmzebF9581pZg7ZudCgTDF5jM142fgJBsxLnuuEnzRYAWFgUoSToVi7ykU5pRMupug",
  "key22": "4FjUSu3T86TchvUgnGkhRz5bzJDimtNUmj7jQMb7r6rz6SPrwoDQFBcyAvQtwrT3tYhebHEZQx9j89tDkq7qmAyt",
  "key23": "571Fepf3FX8WfHtYQYawf2KBZuVU1mP5dtCVcoMMgBnpftxLisUpZShjjHK5fCuWb18iEwepmnH8KQ4cd5zqX9fE",
  "key24": "5nS6NJbYEffx9ZzwTMyiiutNPQjvwe5vmCuye8CbnjcJivqDS1Mi3xmdzTyHJh7DfdnMv35WZLftm3PRFDWQHFqp",
  "key25": "42VJeUww9hTnmUayjT1dhUA1h1rFNhDYYhWph1ACTmuf7ZTN4DD2SfDF2HD1Fa7hfoenxMcfr361y2G3x7FyTwHq"
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
