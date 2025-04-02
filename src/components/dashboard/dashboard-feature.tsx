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
    "4DpUD3gfXU6bDVnRKn4htSJq4UAyyG2q7KU3ijL3i4UArpJrx9uTrErG9XfzJukTXwTtBeJtWpNzMuTAQMDXntGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sdzRurYEtWeDbLD2F6tjKFC6m3gNFeGxTCws2wxq1NEXS85ZGX4bpmZatJMgp1dvgNZVDMfaYjaDkTyzQCvFqMs",
  "key1": "3JYwuqdPf7W6j6FyvAtTcUTPCixnyudEZerVgJmAXhmqKC1HXTGZc8wmjLKyVSBuPPSKL7jP4wztjMUj6JMyyRic",
  "key2": "4G2hdQ88ANmEJJVq5i7EAP79noDTXzCbwMGH9wX1eHgF3xeadq387JuixnDY3keMaKfJVCipDFtevSj533zeFzvf",
  "key3": "mx1SAQ9BFGgVXi2oxPK37YnxpXBkoukPGudE4sLGcNYFCbS817BzZGQEhYBvirfdumjX6d7SVWJcDUGAGgHwX7b",
  "key4": "5pDC6pNn4b9dgBWqjH6vMfxRJx1XbzeM44CPxKENorCjX4T4daqcTUcuhyU3itfUnSPdVqwvCVyr9q6ryzHnMZTV",
  "key5": "31AC8YhQRy5oMkaGQQ4PXcKm6uqWhtBduEeuMobLs58H8eWtJB59FgwVevKMnDVkWUWG1fMErPQGZFGvrFssV2we",
  "key6": "4E5FF7nGPxF5RfkxNcK7pVXc43qtLKmZ9SkKbJyusiXAdYVXw3qsspVbSVrQkvokytj3bDBJsmrnsuewcmK6XTk1",
  "key7": "2ufZBZKZhizdmDZEXmhsSZqSXcBxSUxSL9euAkNdYHDD6o17iDreoZ3hcsmSpnijHfyg3phFJQYNzSAdAFzrmsoB",
  "key8": "2kisbzGXCsYiYFRxcxLmBRTe9aeBVGxZEYwMbFsNCqyACtsGPjneHd5Ush9Gdu5NMAzzaM3xHDVRWVbckdvz4vbp",
  "key9": "65JTJeWUvdRVcGZS7Z1P57zQLjAH4GjopjMYMGZN5SJYJLeNgnd4uHknvXiYvdUxzHyo1zfo8tiZYgGUcoNdBEDX",
  "key10": "5U7oxiu3WAg2Np4Xzj14pb3XGB3GXpKATpjqRdLsZBAE7xAoKMF5ouhq97JFQ3VN97YKMZCrH9N2Us9SBs58TpQz",
  "key11": "4DfFm6qaqdjfx7noTRdaHrZR3LmuxQAJCWcnVivdphJu7nj7e35Y38Q1BVQ3bdz3kHkZFrXVtXUnMZK1e4WyFUY1",
  "key12": "4iGTxWfc2v2Z6D3SXCHsq1pctpgJrGmMYD6UYhjcLtScvUqnYePhf11M1SrpC8ZLw6PgHV9G25hLf8jHYmHocVwc",
  "key13": "2FDxHzuxy3r7EjfgZ84J2wYZPWX9j7rcetyatFqxnwV1147sEpSq6198dd5T4FNyWwMGfweJZmonMZB6KvRMz68G",
  "key14": "29S8LQJJRbXBaNGooJdQjvWxWFmq9A5xCt6Fzv1xqR69WHqsUaHt7u724NjzsnQNQUf3WQx52rDbjzMQ7sPgumKg",
  "key15": "3NsQcGLeKorjmSPam2SMMZJZ958v18iCd8W15aR99QXD1NLveNTgrFK7Hmxdzd1hXxSaomGqfycrU6yJh4rEe3CH",
  "key16": "ZR3sJ2RBCwnARvKxiyFPL7WHBHDGCN7RMVyufhKvJkYDmEjwPqaMT4beF5H894tV2ffW4AvBoe8Do8TdLBC7Mex",
  "key17": "3Psdn4feGzbwLkrPCR5xmHX98DHKazowAqHwh9sboCqoMx3BXrJLBUiEkRieJkYEgCEbkfry4WngsN9uU6TNKACT",
  "key18": "RdzVfd3511uP3pfzvc66oq7n3CaK8k3hqy3LcwazyKcpeH8w3u1JfSov2bZaFc3uE9c6Jp3iZxGzgeF8osj84Y6",
  "key19": "5tVqyuXZrfLPAst8iJzV7vqMepHVkJPv78HFxfhvWcAkorDrf5kcG6PvQipP5PBhfMau54fH4kiRxCeDgwuCJuKM",
  "key20": "5G9c7eHqFSvzH1UDaH3HraCsRRrUop4uPMRWBugacL2WtQwCuNjzE4Roybyh5CGuRDFBQDA9sxwTbgpgznjFe64F",
  "key21": "3QdGdrWbcXvDKEGk5GAkn26tDop1qQbQXMSWxDMgQ4BEiDy27fRRugFSNSARSyZnkbCuX6JR7etUPQLd6rHb1krF",
  "key22": "Q5SBxKNgE3TM6q6Jy9J6gHfzJLt9gjFk2FXjdDJk2gnMmEpqLLCJFAVK1H6pspkh2h7uDsb8zoh26CZiCAsC6Js",
  "key23": "3UbdLVyzu2AAjZq8QHXeKTJYXWU4xqULyBXDviDvhRfzPLiVJeyiAM3VH4Vgm7dQRzJQbw7h5fyg1M28csZJHDrj",
  "key24": "4eR4ev2g2G6HRBxPs7HCukHtac5pEnGeedKY3ggS5g1PnQ9xXF6egjPFTwiLkWuyb5YrzjN9xAYboBFWGvJDWjWD",
  "key25": "8TRzraAQ5godDjMQzoMfj2oUNwQm61HbxtPLZETpS8kPu9pCMmkSvt5taUCaSyM5iL9Ncrmaf15kQkAZV4uft7z",
  "key26": "2YpWAbHTQhKs2VMFVDQhs9fmgkgxyG6UNuBv3AGuYy3FJsnPPWvCsZPS63fC9orzgvjzfJk9TqatYo8FMa7ZfwCh"
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
