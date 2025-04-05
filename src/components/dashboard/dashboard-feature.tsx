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
    "2bhmJHJjwTyaLUtWSmdLaVhqZ7i84dN64yJkHYuKaG4ZjgGG96HiwKdiiVkrQ6w1bMNqoWhj7Lj3jo3idWBxxyCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xzPoDWhXtmvgMLbt1UanMkkFeP7oyC9iobfvBYta7sBPsFmppj4Dv3eLP6nEfpeqUUbrxKWuAXMUertPaxxf8Rm",
  "key1": "jiBLQqWava47455sSC27SyHqNRi454MEZFzm8QiqvQGg6mc2iBVTtvoaGCwxnBP4MZ32kYmPyPz2DEhKXMWhYKa",
  "key2": "4Py8YKnMC3x8fzuNVw6kYqowpsQ2aXud5w6SYtdR3bbfCG2rbvYSqPfno1ufvW1GGZMEAvDQTKUW3JksmQMNZVGz",
  "key3": "396W2gnZiPMrYfPYgsMuGhHrjrAjE8ExhZaLXy7xBpeCHhTETCVadAsHHpuqnGnfvVRsi5aEQ228y6hWnNRfjtow",
  "key4": "2spfRPmUcjF9jYCEwKEFpsJuRFE4y83xXTezr2e4uw7Jy8VZvvPvDKm8PZ11KFgrSQ3CMPn7axRCSSsWFkVHhFos",
  "key5": "2fcLH7a81igGCtNJVckTZzwCi82XnUZUZx7ZMmFdruQ8ZtpBBhUBJMpgVs75SGG5jNB2ztDoahYTj8oaFP7d4XnR",
  "key6": "34buQ36hpAmAVc74o19PhuqNZVytDFJyRQ6Wu5ENAtt6mSB9Hj7vCAqxer5mvtyn6upQKRfLLqstjs4xuWrSSRFt",
  "key7": "3dYvcHAjs45xxaV3t2NswuHrrUhzxBTGMk7zLqvrDwFpr2D8GTQ3KwWeicutBrAtvJKKDJZibPqrKXb8mTKvJdPG",
  "key8": "36B1J5xeBTz9eqquZa4h1qZZCBfyqEb2CbD4yMg2ycadPVU3TZVwKwyNirSsnCzWjsX8KXbNkVBxD7wmYzm9qK3w",
  "key9": "2NndPbaSsmqR2LfWnvcyJhSG6ggDvows9B2L6zN9vmuStDSFkukFnMrpbEjGj3quy7CV4anRE7TRzsoHLSsBwrhA",
  "key10": "3Ly24i3oz6g5pTK6kvxsRqWDNUktRcrp6kDMCRcF8HbwBfLCjK8o11HLDxjeJk9T1jJ3zq6NR8PcmKVF9v3m7HbX",
  "key11": "3ghRGfCTg19XuidrDkRowypa1ysQPDdDbLfassfzyKgUYNrrdn6AnDA9iqdtFC5dpzoKc3cD1pQzLCeRndvXktYB",
  "key12": "32hhuRXHdvh8Fp1uxVPdqkJpkb4PHMHyFkcgyFQfsNJbQTTczokcYzvEcVy1ZwfaMvYAv5raxJZafpdPcZDTwL1E",
  "key13": "2VrmZSZNh3AZJtLswR8hXSNRtF66z3gCzioRbgZXLoriSVDr1cPkRnFbifFtyP6t72zJr14rvDTx4SD9zHVQgZL",
  "key14": "57zif69pCByZNHB6YYQVCCLktgTwkYBV69dUfCrp4BV8QhQHyBRPXVvv35DRUR4qktpAnJ399CdGPdxU2PdAFckU",
  "key15": "3TMYFA7G13z4SydMFGPfQ5CrdD9qRNAXHk7YfnSiauF37Z8vTdt41R6Lj3VQZF6ivkqzy9xxgr5zZRmoHnYm3DQb",
  "key16": "34XVswM2KHcUNyZLv6dWdYEwzwppysj5fdvkxBQbMxLKoWNusQ1udb92fzQf8zYvn6b8d8gTuwwcxYVZuS5t2AwR",
  "key17": "ecfMAPuhxHaAFhXX7TzUYYMgaZ6eGuhPBhh25wA1tdjX74F47EP7AzAuMKqr5yKtuwi93k5Co7vdf28GvaoZioW",
  "key18": "4uxymFwbXPrH6akpm699H4xn5ADwzxc7nmn8tVoFjzWybtDKNTijSWUoa7jKcPKgijgSrdQ2PajqxmdGbm9V9ww5",
  "key19": "62cFDdHe6CnyyYwgYkz9wQL5DABvLbJihd8BSUWGGgqn73zQKCaGTSQmZpaz63vVDA7csgedF9QBtgCgefYVVo5N",
  "key20": "539qQZCxX3hrkNo5g3H1KEi74VXZt8wazF3hAD4BdCKudegCTMuQUqhJQjduaWRkncbsozKWpDVzQHoxbrZhbz8P",
  "key21": "4We6X37ttdQf5QyLKrphSMMeqLngwzpxnv52ZB4kshe9Qx15fcMs1Vm59xWQwTUfL9YbQvXKXHWFAAspS8R8MCg7",
  "key22": "2utk4V97CimPkboN5SebQsRWuBnDpf2jabRV65x7uY47eD2wfr9HfxQnqdxaxcRbSgSbx9pwMrhKAxoa5WTdxVty",
  "key23": "vhwf1bdWR6j2rUD6ad6r4M5T3WGt78kykAvXtQ5hZzC7F7azFzjthJs65eTPLYj4FZhNedMcjtAFcNAsZbbLqN2",
  "key24": "5ha6MEpz5EtFnJvsbWWbSfZokTsmRvuKMp7a7ZBD4MxSMT7fLUxcBZsaqEyctFsRv3k1UxA9Y8UEpB4dM6L2ZnPg",
  "key25": "5CaBUCwUShKSDXixipXjbf9xBxudLSzRniocTzYbPhFuK2XsAMeLtEbqAc2xRRSGZjA2QehuVY5DJFgJU8Fvk3aj",
  "key26": "5FLkZGX6G6KQyQM8PuSBYC6ZYurZUxk9AkHxSsomo5UJHrp84QLgcbSaxqrGFsEexpoVV1c6vMkhFCysGcQFujEY"
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
