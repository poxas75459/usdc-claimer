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
    "3RNgAC45K6ECLEtTiu2yb7ziTtWUZDHeqEqj7NdCyCEVJy5gcFua4zr5RVRH3h6f7zoH5MyrJNSgqUEGdFZ6oTHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAKuk6vReF6dvbKb3LEp6hoz475LPK4TetoURdkBWrToYcMcMCHV5BKMJtSmqCyTLzPb98ate4poHLweEfifBhh",
  "key1": "4GaLNqtuKj14Lk5sbHATrTTkycVSWNv4bJWfaqbnV42GRgzaVrBCwWXr58LtxG32xRen1HEPTvFUccY2Vr6pseiM",
  "key2": "64a3Dt5GtKJdTLPwZBBRg1NphihrD32KvokVEnh1CV4wzNJ1Epj7CwBMm5rqFgtkRwLUnWgHpzUJvQygVT26tKza",
  "key3": "33xg1qaCNvx8iwbYVehtbPuocBvJfhQG6PizUaxmx1NoGXtFkNT44Cr6a5U11QEcxsnUUyPSnB3Uk1RZcvTMjDiP",
  "key4": "25uv9x1EpiNcszQixTyJZ6HXQEjCz928igMjuEwwNZ4am8JJaxipZrTbNAJSFgXnxeVp52BjKA837ACsdU13TfVq",
  "key5": "4AsW7kwYFhsXwB2eoEFF1dEi9D85epMDTv5M9ZxF42siA4azhPFgKRvH48LmTMpuZQH7PBNTp5Mm5pFzcV9ePND6",
  "key6": "2YjnNF7wGSSk1tUfLwgF35Q8psBDxs6v5Uvx47bSQLNpmb2duewBjaFAM9mRc4u3rTsho1L31R6EVktRxCrZcmqX",
  "key7": "5hoGxDRrcuKaDHZ2LbVCC2QSMCEhoJMSNNH8P4xtYBQfZWCHR8aeWZieU9gnsoP4P2PWEm2XL8hGixQRDDt7xN9k",
  "key8": "5nSZt26wUo7aUfmsbV8KJnhWTnyANmshfYUu57hzWxCgGboNdjqqMV52zXMwkpu2eZzUabZLt6LFsHtx1QMuUexu",
  "key9": "MmSCmx85mNQccySwdinL3L3cBBewo7tsEfWZAB1EoDYc1EarFZ3emdcCtMDh8hhNfE8e48wLuJyAEvCXmyaQPr7",
  "key10": "3o78P7m7mXi8uzENnEqXnoiZHe8ahfPh57cijS332cFoY946sBhwjwbs7SabTKCzWPcxaxkkCF2uHtLyYjkAQ457",
  "key11": "5SkK3mwfaQ6SbyCGeewFVSQhDPzpPULfMPqMqafL2ptsmPYk5gKjACjHDDcy2yGPsYb68PHmYUywTYqnpVFqWnuc",
  "key12": "2b3cWAzyvGVVKWwnvwR3hGFMoAEeCR9wBKBky98HegyZmMikyjvH4bX1J11jEr6PbfaZTsz3RRReB1Kuind3Srgg",
  "key13": "4TjoEbg5vqB1wtKEmjcGVzeTiZXCcqrydaseQdC4NvoEfrP8478BEp7p7Gd2W82cC1D2Ae3mwVYxvi1qNJ4DC4jU",
  "key14": "2Vx6ESvP581vq3zUrAGnKPchKeuL792JvUCRRtkzkS6cmcCFD7DDKABZ8MhYUhWiXwxqzQTUg1UpHskSUrMWVvJW",
  "key15": "eUKf8ERDmkYL9XFnaX4uFy6if28zLkY2nQjxr9L9XGCz9aWEKMS3spyZ9VGDsPhoTgB2zoUb7Cb8wry9qCK1iEw",
  "key16": "62U5uf1KFm8Q7XgRofZtbU8V1syoBVPQcQs5NjAhtzix767sWhPLBbgdW1q9CFr4A9Nr57ZZta9vE5xjZd7B2WPg",
  "key17": "33JtXSrpeZwYHaorms5o2DKdvJQkWQ5boq4gUfynGbgZPgTUHfeSdvVY6gbVVqh79FQqLFXFpTM6a9VSAXtRYqjU",
  "key18": "mqGR6F1bzzR9FmBxBvqccC4YVa1fA47uyjEubhDdhVg5SKCuZR6468sSbsShNe9LajyszfiWGnG41JcVYjCvLrH",
  "key19": "4zkYKh63XQcVbarUAiB9JPdnZhZgLZiLfFDQg3GVEwad7PHo8pKWw7H9fxj4dypLLG2Z5wT86KyCFFnhrApKdf18",
  "key20": "31z8SvRXv14bNQK2WQRFQYeziS2b73jKVemfQvjiAto2o5VofanqALJXHQcc9TrLMziiYHidrNGSGPXsh6MM7MNC",
  "key21": "3eRLHKatRN8hFRvHEzEv5aq83WicqcpnfNmVuPQJgzWdfqGRsPFnAjVCTbE5FH9boENiNuHy1qXcaVuLN8eQ8wfu",
  "key22": "K5z7W9X6b4bG2ZXp6VFu3cH8iSFwj25XCp7X8w4acNrjEfihJVf2QygjW3RAH5jzZWcr5NFnNmkfu1vnLupRUQz",
  "key23": "5vmepkjqzWWYgZdAWZ8dLnbuwzUEU54NC1sUEs4zTrrcbAsgbf8qqbQzooHf8a1cwkTTh8e8aNwzGcps2zym1AM4",
  "key24": "3mvRRYYcRo7dLsDHsQicHA8BAgXtKNwcYUGb6sKkocWMut8HeogEzMvLz7fCWhdukgUymoADy23RNonovrZmuJbd",
  "key25": "8QYxadW1Y87KcEUPQ9AdqQs2rCEc6vdA2JkwAA1aqHfEbxWdmz5p2KheQpt9b9vQNN4KYkTaQ35QBozKWdCqDGY",
  "key26": "4fPB8SH6o934cLu1zmJ3nRxNcGQbBgb62q3EdN6hKYGvSMcpKaHWPN9p1xj7LJKx3bXsgHq8oQRxGyKhCMfaaDRs",
  "key27": "dUaoGAsv6VfDCF4rAS5mc9rQ7FwzVa8awJdwsz5DqxnQmdVwm488q65PeHHmSHUsPijac2DHCJQ4EA2bSYAUbGk",
  "key28": "2iVxGiHSsiqRzuNCdP13YtqifEKqHhdkpxF5T32C8cLppTzyeQTmThLZruQVdoH8SeUtGxjgyDfvogY1JKxQnm6Y",
  "key29": "4qwCmmZSPAvToJkYy17SZoJeAfr8AogckGNDRs5uxvGZy78N7WybN5KtDzVKCSLKgNuY8HQEzNFYsVTkkAAP7bNH",
  "key30": "22kLQdUe4XjQKn5LA1Tk8yYk4bmmNCrE4jJioUZcd8e9eofDRW9BN5bvJuM85QF8a1tUFN39z8J2xwkFg93K6LVz",
  "key31": "2NRcZdzcuj9HywsyDbnvitAjVtWsxuEXsuwYpr4pEbJMEK58VegyDU9TEK3qkN8jJLe94bJxP3Uvo6UmhnysP6sj",
  "key32": "24cqiB4yzCzEW7ebBeuhv2n7zLZq6DGPFKm9Mh54K71nuipQypEUQDAufMwKPPFV1Qo7WeVcngtZa8w996XxJDHa",
  "key33": "2C38ySESA89R2yh1j53zF3eRfnagJ1AdtkL4x1jaq5tqXbZBPDAUhBjgSh4Rwuuhe1YEbaTU9Z6T5py99V8cafsY"
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
