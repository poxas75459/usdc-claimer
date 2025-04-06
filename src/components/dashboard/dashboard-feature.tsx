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
    "2WNbA5zwGuVpSj3TUan7jzAQuG1z64B6djHQtXeDU5SakN1aMb36KYW7VRt45mSomW7rXEmfs3cQbY6WNH5diSik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q1fbfwrLvTUhaXRXbsdTAMdVMr6Z63RFwDmxftsrMqbWx4JsG6QmYWQhiZv6SNQyJtp676oitiwyZ4wixgopHt2",
  "key1": "3Kg7H7AjMTfzNv8XLqWuvHPRAnVxREiVUXtAV3RexneUYzwcxDuD6b18Vc1W3YxZvc7XTM4VXauNke1n6z3Li5G",
  "key2": "3cBFC2nDrNK8TrDtgXhir1LXE8XeaUfi5LZw1net9cW24eUvSMZYdZAKgeALvESZwKZM3AK5JY3UuZgWZur63M7F",
  "key3": "3TEH8gtiQqAcBVeN6FEBMUhP31pF9S5vW6G3nS66QzhqazCFGA7nja1UMKpFW3RhPfowfRRGgJr8571dHVgAY9Hf",
  "key4": "5zygbo3LrE2QvbcJpdKh17xXMRgpQYL2M1XJfQStBKfLCBLCkGwLsMSUoWdznS8XT3sroPrH53dznyXb2Z3Nedv8",
  "key5": "67fid1ySjViQGuFC2SEENcUsaYJLLZbWtTAi97DFMfNXbqSLpmZKNoCafCLytCkTvLi8jRr7geWETBiDZAgW2Bte",
  "key6": "4akcTgwR6dreg11TWH6AVwqGY7o2wzqHMJVESyWg677FYcRfLNw6KkhYENMnXVgC53Y1vmK5oS2NBH8c6K4SwiWd",
  "key7": "4d7WUr21UY2VLsCuDj87ksWmYtEBJWYZmuKZnKwXwWZXBFRCHKt7nYb83pqc5SRur2YvB6Ky7emjcL7o1kLQteEb",
  "key8": "38D7DUrdHe41tRTd7DUC24nEWAQeLPEN7Zrxvk7giwXfmyafgVWWp69beMomAJoRAFS8kp6kXF1BAyrhRuPMbhvN",
  "key9": "42Fs77DiMjJQexvisQWoWCrjE1roMKXhWVzhVWy3aksDDT7nXAaGKAfgNt7Hw9twkDDyj6GBsXenM8gmgggyxNKg",
  "key10": "41gGEKoRGsyeKnHg1HvXKu98db8Jt7ECYrV6z9PrTqohGDVC6yctEZ8HKzqD1n7CTN8bFDD8AKgFWVXVMkiW4zxr",
  "key11": "3Pcjvv6PG8ZezBSk15ejKRc5kv7nejXV8YCGhWmqaEbpaVCqqCVWWXGqtWcDTBneC4iReahZnioARU8unaZ7PAnW",
  "key12": "31d74ze5hYBuGKQiwgBYFSwjsY7u5rGX7GwQ8B2U7L9ZuDi3FueTyuT61ibEnvuCwkUQgUdzd6Kh8gMMTraQMWrK",
  "key13": "3GWPL5BKK3yQe5apMi5uyoAGp7scfsxZqszwgeFsNFJyb8a14YQH8rkkp2J9Y8Tf2jEG5LwEhri8R1UaUqUWm3ka",
  "key14": "4cJFvCVHdVoPn1NeifkyS12JA4hVD9DXNJ8gMZ71RvSnhYivo8dnDFhrDjpETjca5jSB9rEB9mkE5oZHcV3sDvCb",
  "key15": "4HxmXB1tn7QFJhzwXx5yxsNs3AyT4PBEn98BE9wDygZsJT1C61QQyYwXFSRr1JUeJya9QaH97P4VTRcMmqJhjrk9",
  "key16": "2sDY5mNVeq9jKwTcvtY1ro9zosCE5NdRCCdN5zTzCpDcv32rAyzDtBhEhSjCEmMfyynTKHwBE53VGrtHdAoxM4CG",
  "key17": "481UEPq7j4scexFWJmp5Rp4VK4yEUZ3F1Zx27npbEj8mc8iioTctWCoqhprtPZpSejxxYyqGYrPySLghtbtA6o6o",
  "key18": "p8BrBNuntP4MoSopuHhKspTvBctMor7SLNeEkUo1Dq2yy4o4beFYAhZiqWtH6U3f6urFxBQ47QCuCkjjmdZ5zmS",
  "key19": "4Mz2JmmvfntqZpRhoiwEtzhoCiVBVq6KyqBAbwCoG2t5gYq1ihpWmKSwd1v7VxeCiKFkzGUtXeuiyAWhGEbAkPwL",
  "key20": "4oUazWD5gWkTW2M9Bf3yHnM3egTqRetbbtvMGVkffPSCUqNXihFwwTMQiok2gov2fkaAwD8hVzvjHgTPioFHaXm2",
  "key21": "4nsfEKNYsc2C6qeb3NNK7UGkondawFTW4pqgWvD9k3uihnaxpivnyn6jadvztwNaHVuJPUmatNhXU2gYX3dbTzhN",
  "key22": "2kmZYwwpp6XpCjwqupmBfn9L6idyJvG5dGoDubMgUbtW4FXpdpUSwqz1CHP9ZCpvGooYRh8baCBPqewoa2jo2xXx",
  "key23": "LtEE9UHyw8ChypArg993nEaybSWjE3MG1wahYv8pgZVQaW2xwtDk7hczndG1fL3cTZdQPr65vppU7x1VXVRRiPw",
  "key24": "5aNJK1KhkF1ghVnnSKUWxgo1VPcukZw23vg61RikLkXNxfAZLS8yyhGinW9BmYw8FL4byPJHAzDhYzGVrXpsfFBn",
  "key25": "4KR8RHj9VmM4jLvuw7YSPqaFRDHLzotRVRSXSPwFVANpYKQaYH6AjRUewYkzSqwpqhBYRFVAZD5J631SYEQEowti",
  "key26": "2dT4UJhS1ev4BLyMyvwRogSQ4F1QusBratkDXNh5pJaroojjjf58QQAiVzNoDdpkPxfCb7QyYZtiFxqxz4BTvV5M",
  "key27": "4w1u31eDP2WTRzaNq2dYGrbZW29cydo35NAbYSscqkrpRxwzCCycEcYPsPAc5TY1Bno1MTWhTXGsr8EV81WKZPYL",
  "key28": "41KSxdmHkRa5zK5BTiR8nFs65PtshYZvuiJG71TeAAd2qqgDrnCBXo6qSLEAzL1Ax4YG5jSDhCVoNNe2mh61WUhy"
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
