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
    "3mceNprYHd3BBL16tYopD4wH4NFnkevo9JpUwRXvDfHbutCLhDSNtoZs2nioSEtx9BfmHSWyxbZ5GNxfD8XSPm6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UyHhEWagedaGhvxRa3e7VK9z6qw11fuqtEhrnjH6QDDbWZ1T9XLMwZ3EGkF4ZRBbBx3egQxDmNvshoEoGhLPUzs",
  "key1": "3TDmtRf6iYvrWpgMFhCPah6gnfLhB6VEgp2M46ogF4kigWFZgCxowPsnqT9bMFYn3ioNAgndzTeYZ4ktWLxm1s95",
  "key2": "2aLGPPmPeKCJqwTfASR6F5hEff5MwKhwAy8jkZvGEdrDGi7R4EV5sfZ1XR2dqxCdKQo9cJ1WuVwSGq9PEFT5Pkrv",
  "key3": "2yssXNDFcKjRuRZD33VzF5WDGDpuU9nwS2HzL86kvcQoDzgUQC8j8zGzrXLyMeDc7qzBHghgpAv8QKE6k1ZraYGr",
  "key4": "qC5c62AxvJEEbAe3KvrBNZM57eyv6GwEtW5KL2VSP6rtF77GvKQfk9hqJsjaJZkmEEJ67dEQBVqxUL1mDzgix1C",
  "key5": "2g7y3wyEB5q5tkMGKACXMmzdKkNFLqG2SZEpE3La4iKhvxMyrVZNC5H8LNXu81Jo3fhLcUDYwC1yYWSUDZ2CMHJw",
  "key6": "4pm18cjgxZotMU2srMN7JaGqf6UunskHWSc8q31cVrM5Y5h1ZL3AAHKrsy58BcWEiyVswogV134gsWMZjdGRETWw",
  "key7": "5gTNsBCKm3mtr2XZ2XgZ9jQd474kyoWPco6RKFroQkYkVxuUXyR33FCkgM6zFqdoducQEDrqxoHusBxG7gmgvjmB",
  "key8": "3fexS9hijJ3LbnWVEZyovf5sToEECFjUfP9uvPtQ3NkkYUL94bXGnpiHx1aRjKmPHFw6tt9bNoRuyQmsqPwoMBLs",
  "key9": "tBMv2VYKbMb7whUhC33kw8PZGvrmGpBn6owb35qTTSzHWRJfYzt8j7NCT6Y8WrAFCQto6deVTN8GVqC5pWyUJYJ",
  "key10": "3DZByRnXVsVU7Xbv1vAPrg82wFcpU9b5Z6UsdNSKmVNgSuowX2hEfcdVUp1rMKPHXf6dnFLLMEmh61ediSVvAZ4q",
  "key11": "2i1Ayi1E5rEXXzb2XrbpUaa7dVCWQU4x8gd4wH1gTkM1aYbUTsMdKyNcVNEdTmq1zgVViLxbBnohwEgzmW78edVU",
  "key12": "5Z7DZEuVY7hvmZcpnnHfiDsqRJWr63oyVPUdL6fEE4xPvmpnnibmJS9hNbWCV3ZwiwBFL7pdSqVntHLkSzzsp5Bb",
  "key13": "4UCMZWJeEKeLPt2To45hgHkRuRvGEDuDQMhCHurb2tUmiAxTjdLNWjE5gSap1CMZg6Siyy7cxGN6JtQfcVfvcSSb",
  "key14": "4kftnvFNDHemc9bSzysuvNy8Y6FaErMLzvGzpKkVX26N7YueCxXtpuQJTHwoppaEDtFPFzVBruDd2XpYwKLLmvXa",
  "key15": "3STXYkhHcb93vwRYnesabfqYvZp6txHXrcsMqC1wXqBFzGbbB8R9NZbbCMoMYs6pfxpVigUdrNiKau8tiMoUq3kn",
  "key16": "3M1QJayvTVakKrqZukZhLz8K67Md59dXtzw2d7atRwbXBYn3qD8vRAwEXupuX2bXD8X5kiy2kwm8ob5QEttiTPCD",
  "key17": "5x1dpjFXPXGyVRm2Q5PeHQj2YmLca5Z8BppRKpovmy2HV1rXGbzqxpTnCg9oB5goPzT5Aesccxy9FW6WjSVoqiNU",
  "key18": "5atjj9eX7ycnkyzUkaiVXoUNWpXpW6sdk1yjMz4dpA3aie9bN2NScGMcE7yEjKxrS9wGqrs3EuzuPCNBH1dU2zsH",
  "key19": "6322jgTp5Cr85uptx9k6sG7rvMiAg5cTgSyHcndYPaDMwEYwgxinoNs42r46uFpe4raJBYf7yMpLD1epXo8hMFeb",
  "key20": "56HjZGG7pEzRE2Rh61XWxK1wuVD3uqFCP7td59beGwmzF4tKshphAXNg6acVEf54CzZqyuMncWZUHDmazU4cEZtB",
  "key21": "W9BHU6KbZWadr7Smdns8xdk8RsVQHydA6QgnBnqmpruzz15cvkF367LSBTodr1JLhEd2Bc2upz4hevyxChv9M5n",
  "key22": "541UVL5znCkVGUNvbcS5dRCTKDnCDPh54nmTafK2KVAAfwCDWpFeUvk57PAdAkwB1qeNq8MWoBXzHCRk5g5wB1tx",
  "key23": "5vjPWmuXirZ5NWeF2ex3m1PKNV9q1qkqbSwwdCeSwvvmGQFD3HZUgL66dHpnuGBcKoMNAwvZTxwdet9bnKXLYshW",
  "key24": "Gpuz46esQFt4aDm2F1EthTUAgswFccfDRBY9pEoUceeKy8yGNk9h9vSzyBE3BCBJiHJcPfooSXkYExFoVzS6hfG",
  "key25": "CbN1BapwcQaGKE1Wn87PPSrcv29Ak3QzUhfD2ZdrB4yyDN9ABXeTwnBXRZPqMkxogZAnQCdLzSdhTP4J2mZ3vxu",
  "key26": "4SYqsxrqbf14zhnWTGa2KmndBD7UMjtHnNn7GjmcCevKLVLoQPjUcMxziTjdVaHEUHzPQe7ASV7BETwBE169okAg",
  "key27": "2ZHn9ADSAAZ23HmDcK7sxrvjyqWG7fJgWdRub6tiryfknGSxVm8jMzDhU1g8y68s23WPyYWsvt5Wt2UDizErPqyx",
  "key28": "3nQwpevQBq5nEc9yZDfqytbAFMympzhZV1CXxVTLNCHmWHzJsJ35Ww6FCQm6okT99RxMS781Ndckn8XKregz3i3M"
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
