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
    "2WnTtsietr8nuzPNjZyrgR7L4ukxjAdxbd3rccBkSVUaB7MAyAyYGCpq2T9vjDworDcx1L1DwuqwxBFsHWmD5wNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nhe3pq5qsBTtgC4nBEvqgHN9Yk9aPzJ3p5vkSfHpYXGWtLk1hngotdK74jG2ZqdKYsD5NGjU85xFZHcxUJHKJwo",
  "key1": "5fqrA93NvdBk1iPfPFEgPkGtJjfYrkZqpLr8BYH5kvCUNomDTiseiTevbKAKkDRkzUYwMTsFzP1rDCzthB4VTpDT",
  "key2": "58CEDnj8Rpe47WvsfBFsPZaaQPCiBNGxfwwWNrE8qoaRpKUz5T9j4KSTxkDwwTvcWGWQf4PLY1wUfX74XgSUCbpw",
  "key3": "4srvbRSA5Fw58g1ta4UmPThVhFZSaV3nbj2E4S2TSyCUUfFroCunc6kLihMTSjp1MxWcghTrdCaxWACptMXoH5qH",
  "key4": "ivcH65RiDs7P13antvsbHeCTTk2FYRggdjquJepVmTK122rLQXbUQxmutEicp65PNySQ92vj9sv6bCow8LWnwmT",
  "key5": "PiTTVJdDwfdDxFn6EAzwtvMsV9jYcMrGqzS2smgE4XpcX89jxVKhzTsQN1ytkkZPQwdhfPM4ZLT8aaQEtVst16X",
  "key6": "88cMvRgxjbrHNYPLHXgxejDG9BGK1VKLFBk3fhfWZ44Wmc882CrB879bSDr2HxJTLvwiZ9uo2Ujzo31BBpm2Kgd",
  "key7": "47Fh4gY3JUMfCQktFCvzQXbVeTX5WkG8Kq9uGXgoy5afJpd4A8eDuwH6nmLvR9zXsXZRXTNfNXVvLkjNb42MjtXG",
  "key8": "4Li28noFhKzYdbATyW7QgducdHdt7rHNLFue9vzBHQzYyeU6a18DgqVBRj8AyAPVhU7ozJ8EcSyXRDebFYcPVk74",
  "key9": "51E3sciojjNV9gMmQUt28DKoqJJzE3jx6HCfsTYebTa1UhXFxmcFVRUEbmfE5PiWk2uKKWNDgyY5Ymur89S1Md9C",
  "key10": "jaSspXRSFLFXL5QEQ8xrvgbnEpmRRYadkLvSVPmbq4bWAEv4xh8v1E5NKu2gaoKYgTrcD7FxYi8tZt5R1HR6bXW",
  "key11": "3kgkGkZ8U6eUkRHasnDLEt2A3Ha5oRECZ4nJoSGRCBADTP7ZPYe3y6ReyqWG55fkbYRer18uAjykUmWmzZ5gp3cT",
  "key12": "2HNivPa1evTnmURXh9AZXa73pNJAvaGrxhJVeXTh7ULhGCwwfcniBYmB4qwWGorRcWJ6vHt5XbVMzrw9arj6qSs9",
  "key13": "2Y7ADM1RRJBYwaUKMSF1YkWL6oARWkcQLPpRFJNiaHzLcf29VeJKQUeSRNYHTHqTjSJ3EzpTByeVoqswqCQ1DaeK",
  "key14": "2Uq4iXe9LK8nuH8THxjJFZQXG8iSuQ24vXiuwcC7aP3ji7Pb9AqgJvTFiBpAA4EV7psg9y6iKRj84VthhReu9ME7",
  "key15": "5REx6rajxyA9UtwrtZcmcZz9m2hdGq8EGEL33qyZfJjLq7qs4s9JQDJ8xqxQpf3TveE28ozoNMbY6UQCLR241zHi",
  "key16": "2yTpQHAYaHP97umYBobyRhiZK9wtwB4s7qBGpsa8Urv9txksT1XXYLQPTMLcMVWax4EdVsyd8RyX8BCLdvxfWMN8",
  "key17": "3qnHNoVz8iXfLzkB4v7a5NktoRPNVP92g1CiVqjMPouP6KPpHRatAyoAh5mh3Njm5NkcUoZogrArzXcVMbeYYbx5",
  "key18": "3HJpwXjY3ggkVqJ99b2hE78unD2RyZkkBpekFafMz2B4kvKuLvu189xxMLML2C2wQhH33fTckHAA2VNmG2fJMMzL",
  "key19": "5tAQcUfCUC6vhkfkPDLCHoDTLRDocHASKYKsT8pWPLT7xyeDL76iQVLZ4CZ4fAErBmgzo7aWQStYUhvF8qN4pc5Y",
  "key20": "4xuHAKvBaLjWSX3fjE3YYASUV8RP6pRhvxq3XYH9nD8mSDiJmgFMomxFTfKxqQupJtZjK5HgZFJai3ZoR4tUQDsu",
  "key21": "pUSKFW9irMjDGUEgSXB48nQ1EKmWXipbx8WJ3GyGGGxRf8JHCFet94wFH8KrQugJTjBSbW152Ds5cU7QqHR1DUi",
  "key22": "4G57194JHA4MTJv7mx9xbuoGNU4ipXcNtME56j1dyCU4dnn85HdN5DTVwbQ8LPSM4mcHX5bTy4o1fHymBkZkcKGe",
  "key23": "5kA5LwBr4L9fxhoZ1ML7NVZA1MMTYVAAPXgmuJSxpzRgQ7MXvNzFz37RkTBXuCBacu8enj3bkywDgWRGdJuLJHWm",
  "key24": "5nRbckZx7NqNkFiuk3BALubPP8M2YQnSft6ereq12nzRNfw42VCmqdEmmJriRGqt33MN3qt9X6wxMo1kbkCRmuHX",
  "key25": "3ewKnKXFPtBAa3Cjap1khuJWqVf6o1F4eqoNLUX7iiKiVLrhnX5vFvrRd8db5cEfyJA83GqSuiFrdNBS1HPK2JBs"
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
