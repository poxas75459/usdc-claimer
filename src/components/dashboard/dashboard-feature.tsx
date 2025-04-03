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
    "2bEjHFUBZfzayHVysfkQnpaTjrMwpWPQKe1L52pLvhFYTrnkZm91tRoY8uuPBYisFB5vWSUfLES6EDwgskuczumr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8vDcPGdH1S7vjyBSFTYvx2pciqV1Bi4JrioqzfWtKnhZQuVfTKXKBY7Qc8YA7ysPSUA5at5uoHgocSrZzkm3JEW",
  "key1": "3a7Z6ov84JFMy8sh6EuBqXyCXXW8WA182CV1xSxQoPUfpVzqbrc4puWMPNgYpXm4VUvTAtHmUi5YYRWsjnJcQYnF",
  "key2": "5cLRLX1LJWWwedTvHxJuzifJu7N4kwDgRzJAF8GDByV3z4JYE8gZG21ptd3zP8ZHn3JaejuiMLTn45fxZ41gy9gb",
  "key3": "4zyxV7JsyEoeSTNYgpzP1b4GVFDZWqFS6hDBD2z3kaa9xDw5XYb9ubtuVsBJrvXkf7ibu2hCUu77wnwuq2wZBTxA",
  "key4": "5YY4vLbXABftHMGcp9cubp9RXvi7xbNQKASYGFVLh2S6hJU48W3vSK2fDm81z5va9gZSQJN4oYBt285pPr2oxadF",
  "key5": "65MmcuQmxuBqcgQ6jcoz4pE6a4gjtk4XrFbLTakWontiuTehdfJSr5Z9W3yV3UrC6h4EB26DAqPE1Pbz5DQbcsyC",
  "key6": "37w8uB1U8XraHmmqe6GxqmfqLY67yJpx9Cp4haPqz6oaLkK9d558UuhnPWc54ynXJRaWRHdg1rFk2yH4VKrxpF6L",
  "key7": "2fheNbaeZgYDRoDdr16VsRzRdepHc4v3KtmbGpsBXridykXzdQKTb2W1LboWbVwPT3Uac6YYyoxjYMZrEWcsUUd",
  "key8": "4wM9H8Z9JtWrF2ehqKLtMiwSqmBZuC9KntjFporP7huRjAHf1Dcsp47cqUajVcCxFCgH5sQVy9K7769sMZBqNxxX",
  "key9": "31bZ2CCrZefkCYLNw67C4SWvmZZh9PS3WoTCnZhRzuQo1PUXcq8FVywm69ZRpFYh2qBugY7oCQvgpyjP7w1vgvBt",
  "key10": "57imYqUZFRxQe61yPn3rRo8vXE1UNbooZYN1tfLKMbP4Ah3dZveWh3r2zDRc2bdkcEL9g5Ru2k6d8sohjP6aQWNo",
  "key11": "22VPS5DRVyM1riKcLaxoHgf48t19oBNM9Fsxitkh9yGoKXu6uDW2AbiDEtR3np164zFRqb8RS2gRS7qxmvS5Sjct",
  "key12": "2adhnrNK9PhjLH2DNXKTovKT2nDomv1pePVTwoQsv1tXMJwyyfHGj2ffbmr45DkjT5ZCGju41BSszHxKUXKtH6GF",
  "key13": "3gKQwxCqRAXPPzrWB69XR3NM7CQe5uSU4wS7Pk4MsvmiL5FnpYbhzw1XEno1HH25W3qBSaHYd9bgQDiQFDVR5gKa",
  "key14": "4LmVAVgeRikxovE9TMu9wS1pmbMxVLKRN1qKfpc8cSn6VCNBXCVs86GqrFnQJrQc3hSzDcxPjAXa5ZoLNRsBtsq9",
  "key15": "3CtVk5tqD7wre7SaEQxE7q4eeLc3mHBPtspUCAqwuJnagxtaMV9DkcSKDtYJMZ8xx17Ncgm989ipT1jzNCHYhQ9o",
  "key16": "5Rvc4RRqX4mpGER7XPBKUejD1fY7azRqgbHiWvdeuvtGgxoxrMFZkm2Egmn9BRLEBEJo4woiiX6XV9sQE3amp7Pg",
  "key17": "CBGZ5JaWwzMwv7ThEUngxQXozitqc7Bv1HmpkZXKmTEK43V1uhW7jgyJUytiVg7F4TSvkW5KoNj2Y8DDy7fGZ3W",
  "key18": "2gqLJRQ4D99ESVAEzyNVX2vdFC4bgdpM5PEVsPmqUo9UQwPccdoqtVz7NFSL9jpYC2nbn98r4i7yM9M7DhzdcTez",
  "key19": "2jALih7c41rLMRzJ5vF1oQ5hnm2uju33tNYfGkpoRWKQuV8ebAnuFnXhiL5Fc8RVmZTdBeji5d7g1NkQFrCYtU2S",
  "key20": "ecUtJ8TM81xY6TEXMzywPrQi1CY16imFTAeBEpUPeeSkNdkd44NQuwxgw46uqgtDYFkEJ4i1dvh2JxMTfawpjtJ",
  "key21": "3bxXPPc9WgpEjrTPFcvZ6XFuWUMV6NwVnUswqe2bb3795MCD1mk2oorgirdSXEVveustYfHW2ehDbkoE7EAGm4zL",
  "key22": "f6G2UFvo6fKBAB7cgF1CajjHbv7mp8PS3CqxmfTSJKZAfxUxBTZeDBRcM48QuNjB6M1sMuRfWgv22vo1bnKXu3i",
  "key23": "uwULPXHwQB5nsme5Jr3QfAWfEoepMF6PvXQrfSZA9b1R8fP8PjdGv9ed486Y7teMhRLJrCmEwe4bx6ExpN6Ph9y",
  "key24": "2ZimMQK3GHCy3MpTbgHJWH1Zhe1wPffAuf3iVDrVQs57FfXLhiuwaULNnCdsHzRcR28ED5Yz8iDhiLBrZQTpiGeC",
  "key25": "37Hj1ahn8sVzMtqSgHsdUMs2AQnuPpbJFvavvZGsoa3Sa6fnUYHKCX6XaMdrQPMK2cnQjT6Xa7qHEnXJmE9Z8wGc",
  "key26": "4cViBfQA5zJDpDbR7UuSmm3m8UYx8kAr83mvuUcSd8znacX8AKyQj1gzVRkby7mt6dzrACJLbKkgffokmHNz1nqD",
  "key27": "4yZ6zsCR2SzFuCHBnTtjq2xvQmM9Kg7QH4VtMbRaD12gidqQ3pKSqBsLjBTxUHV7xnmqzJoMfQukkndmpFPqY5E4",
  "key28": "234UQiiGLkkYEgcTY557AvmTAovBzC92XsxWYhwctUnYdd2NoQJom3Hkt5YBdtr3RM1tdYrjvV759K35Z3FJZyf8"
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
