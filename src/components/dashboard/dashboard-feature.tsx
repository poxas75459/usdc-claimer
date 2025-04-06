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
    "41N8mEMKQ88cLrQ7kdsfFHYB498tuRW9w5HNCVuG636AGcbsNQwu4QiNAh7xLDrkB7UavLXkTDw5MBMSQEh9epXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3orupwyxfRAbPmy8mHfEmJo3CiEjVFfzaKDgWzYadEQBU7uUcQadvXwtS5Tyr2njZGWVFSEq6zDiNQjuh9YFQNJh",
  "key1": "4TkC8fmBJDRM1KbSoVuUuQwgCVmCkLAHpr1WPW1XmT5UHtXqS8DNmEvTQxnFh3ctcMT9uwXSVCYezuXF3QiVH99m",
  "key2": "3RjzTCDXo39artnVuGLEeWhvbqREpz9G1PckcsCbeKH3HEpxZvXT7ADxJ3kM7j5JAvFAaeARMHTVVyrQtaPVqUKi",
  "key3": "2ns8yLeq3FQKoiUy3g39FpQjVqFM4yMYaGoBpGPu3xq89B2UUnMgW2vXeispyuJE7YAJMBREVv467UpAE1N6S66G",
  "key4": "3nPA2RpeCXT6aMQ7bi8YM3xTngsaWw77dcwYvXLxH65MmqgNckjut7FKVhWGBodYrv9qatxrBbCxHqpzgdLKtVFc",
  "key5": "3bN4dZf8rSMTUErgtZTn8MEiKgqHEtmTthkXFEMXhGRct9R7PEZ2bBUALvcSCABEdFNC3Z5tqHQYeZTM1tvXFN9S",
  "key6": "3defrseYqByvHtAEN6yUBMEt6Cq1NaLdArAtVaHw6vCMTgPbxxD9GVDoLchq3hqb8n962TnYnLf2KKEzShphFrJ4",
  "key7": "3gZKY4d3Czit3DASft4HvLTCF9WqssKMP6rLCo5S7g9Tg6N9R2LsT4Qgn6eQxTqouo95AGfVdGWCo8mJfWaYXsa",
  "key8": "36Yodtc9biVDjQXhNShFmPwE3fUCamXpoQEy9Eqj4bGtPtNsLi9Sg3GAc1ncswrGjSk3mS7iW7HEHesW4Auv4Pow",
  "key9": "ipi1krac61MfYupTHnUV54cFLEAYpDEaHbgEnahx62edDWUTMd9Qtomi45DYVpb4uKptxWX86XgxWZSGnKtT8nR",
  "key10": "47i68LW4KYkUiUBUhtdarz4e9C7WWf1W6r533B4kgWnRfRoTsUKQNM8Ki8kBYHcgtjUkXsDoaiPRZPxTL6ry3qi9",
  "key11": "3BuSiQxMndqsU11bae3Yzd89dBci4LJwHJdGqtLpZBVDT3FMXKFuANH3b4ZhzmuTdomxY6EbJMQ8fw2vUzxmNM6G",
  "key12": "5yGwgqBRMQDWr6WyVuS5RqwzRJcQQv3rueVWoTxGkVHq48zVGEHTzAwFJUhdZM94z8FJyMPdzT3KqmaBTMeg5sxM",
  "key13": "5ngrfiocrLZuTaYjtfcrEapFdZm7UsTWbAhiNrgHeX4uWbiiwidXTBxYEN2hCmA7bqN2hEUrFoD6NihBZHk1GeiJ",
  "key14": "9jK9yJkEmLNmnMYKzFnF7CNZE3RmMjnMB5ZdmEs2fCrwuS83gk3xMV1DGd6fdLPLZp9qQZn83kiETAHWwQSo9CP",
  "key15": "2JgWjJwT2yQcaXhCfCXoRg4srgtFHEXPdZMEtBCcYrk9NLBgK5Mfurb87a4wzPAg4sJxHF4szjwxcE34xgYd5F3W",
  "key16": "t1yChwzN263Fhip1CEJbQ27TNKx2UZFn9LNLYgYSRu1ncRdJFJsmnne3sZi1gi6waXHqTgef3Losfug8pvqwNL7",
  "key17": "3n5nCagD3hixzMHAD2Mf7s3vBJew8fJXZcbxB5AVXtVez4vujLMCsAxrkKZM1chJrgK2oMhUGxeSKF3Cfp7PZJPy",
  "key18": "3ef2g4gerjTeoSnyifCddWpM6sug8u5FdH2hhbGJ5wmhgUWwgXWbPimjf7jCobrzwqErpNEWFDG2KaAh7pVWYDNb",
  "key19": "2RR7FLj4heUqNf3c7GMHMjFK2Mj6MWTrwiD8KjFGmVaWWYbCm5AwMmfK6n1vAdBmVkK3vw8gv2AWk7j8Bkcgp3uc",
  "key20": "4zNMGR71KN8VCezzdBsQ7C583WRUBoiGFu7EjZMxY5DAh91zi3qjLypNVLYRHGbWgTbQUQGRhZfGuiF6G4fxADoW",
  "key21": "2gmM8TRKLWyhiCRKsdVQDaMXfuP3cBfdPQWwUGSZY8ALdo2MqzjHcU6yFM2dthNLQ6sraB1CzqBKDu9upD27oZL6",
  "key22": "3qTQ3oNucc7jsQ6dmXR5tuBk7ghSxtvQGWWZLMvRkaccYnz3yUhEGvxRRjy8FbHz9qCxsKzLXd2de9jfjfFZwWYV",
  "key23": "364yfq68a9xX4bXTXDwXHKbsaU3UP1EASwBwgMqBkNezwBvzij5U2QA5ZKgwUrQh3ZV4ggST2S3agor1Lguwrwud",
  "key24": "3FB6prsq572yTvCRaNvDTRNRkQKZ6vieN1YbTga3WKaEVppGS5r92DfrWPNJ6bz98BUrj8EZnxVEF3vGYjnEie1B",
  "key25": "tCRwQLmfoKfL3mw3opgKbTKUfsKu9RRhCSbHspnZqJZM4QJZ6BCSh62r96mm27u4A5prnefuzJEweKmXXU461cQ",
  "key26": "3mWKWPRCHmdHDX17A2rCEPqfAeRqB8J6iPT54YMExcgxe6ZqwNqvRka1mVw7EXLu1RH8zsKG7NZmy8NDgtJJcVc6",
  "key27": "Z1SDvpwEYAtrpijVvvHQeNZVX1ffFJ9zoJ2ijjcNjvZG26WppsFc5Cina5FJugyqCSTdG2G5ATCR2r5K7u1Una4",
  "key28": "5QdbvG4fCn7W7GAc3LSHnUs276KNkwXqW7PBNQr8HSDThQ9VT3b4a4npZUEy4pJscCeZ5BkZLVf1AFxkCAd3ikDL",
  "key29": "33yq9dt1sJRWXyjL2jnYnHnTkrnFSHjfpv3pfowYbApwEdrMVktCVwKQeNbaoP71uBpTbYVdRJhjWVZBzyzVQqEX",
  "key30": "53JLpCYdV2HLNdRBArgaYpvgYR8nATPAX3eGgc36wcTKnNBbdD6NhJiCb3QDKt45M2bS61jJSimtPrcybwHS8fo8"
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
