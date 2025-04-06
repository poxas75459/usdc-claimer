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
    "46TKjSRjZdA7eAnquW7nAeDqJqjzgi1Agw8mCwM7vCXXEG4DHwQ4dPC1pB22WBYJaPBgWjWpBbG7AwLdjE52t4S3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KJXNR53JmdNpNyucyAaWZcPcuxg5Ue7JCMAPVYisasNTUYKaLQMtrAK5xG4vR638x7MQgK2dgJmV2eB3qNYEV5g",
  "key1": "59SnrtoquLz68qbarUQDasyLcX7Zp2GhmWP4mMJCCwGqtsf1L2tkmRYgXEqvsF5mZsB2VTu8Z4bZF4cxttj3vbrY",
  "key2": "5heneEthe6DAh72obH8ze64n9ne4U5kkMTCL5UxmRWAGxH3fhpTg4fjhV6s7C6LAa6ykTwxRgKc7Bwvz4J823S7X",
  "key3": "2ZVdZLFRuyKYAWgCVkPyefgrzeRTNzZAXfyA4RyJqEG8GrLqH3EpJhS3wCYf3sSKdE4PgreuUZfEcT71HDTNWGC7",
  "key4": "N8gZmVChqXzK1NXgR4JNrqyHUVhmJnM7My9fLG34KuJFcVgEfxqdKKuWFgWon1P6417m75YTMshMi3rvViVoqpz",
  "key5": "5E1xCbfhmidQMvHhDFv9bSGTvkSCd4ascK2hhseUJNPuw7H7wBZrjukzhyVVye9v1GsdkjHXM6g8eigvzkSVE1so",
  "key6": "2SCnUZbffhDZ4u5rAAkhmQQcLrGuzZWQMjxva2WjRb3hkxGuX7cDixThPqA7Cw5podoiA38uu97oXFpajpaEa7fq",
  "key7": "5DmXAG31MNY2Un6pjLYbdvULDpZLfQ853BSeuq1ckF6Yq7E9RYtNT5wSom9HvwVihNfrCQGUdDZykSwaBtHKBsC",
  "key8": "VYk7tWZ8iwvRwn44aAsah17NdUAWdgmfJkJd9PBnB6rNnXUQFQJL83h1mP5qWqMnPuohfUA5akSqr99fXrWPPsA",
  "key9": "5UVQgFhSekefSrmPyqZR9VdzRfHVzvVAaTH6hAyLBLXvVHP26nN9DVi3Yor9LkGCLRYv9M5NRbZ54N9F1Q8uk8mZ",
  "key10": "5CNRE6Msc2i39MYPySqQdLZXjFxN4HbWgfNrLEc7cmnN6BGTBuk3WRgRzWV4LuYG4m99voq3F5iY1js7p3HebdXK",
  "key11": "541ikAa9DUdt8DB7uktk7ECRdfrWmNgaZohjGePXCc4F6rCiZvRaXmxpCe3z8wwDLs47JZowz1cfKTgg7q4zQ6ov",
  "key12": "2sDsVjcpPUt7ei3qwKf5fRhNKfiQXcopjxgJHxMgMsJfp2MMteSdxUmhVEisAkiBAnb6D68UbkfY49YBUEUysnbu",
  "key13": "2iHVUq9svFzUk8FaqUZWsRFGKo6oZqGHGgWMq1844NALPNkSPaABjz5r46ha12sxhF7FngVQZqqqnEqfUqmp1qxW",
  "key14": "4Rr4tUnT3A9i4s9sKbTAsmyvAPbFDtRCiV93Wvg83xhvMURTWLq65cgS5bG1gbZH2emNMDw8e9RAHGELAYoFnB1o",
  "key15": "46DTnmrm8RvjRcVdHFQW88ebXUPwETrwnpNgukT2mbPRxtiHp3ZaRwNtruhRcJXRYdu44RM1oybTfyRJhdM7rMVm",
  "key16": "3EeJSTMs48nGsniWNctgxYsY7kTY1KGUN4pfkcNncsXWG36yg8xANBD1P7ZAEBGdKjt2RZEyZ26jS635qcafsBGW",
  "key17": "4wGHaqGFVpcirjQ77u6YzBth3ByciANC2Kex3sY19WRzJ5SBTxxvLpoM9f5NUGEcLLYb7hq6J9Ly38wVXZqPtVo6",
  "key18": "4rSoDXwYCwvV4DMVD1wMsBRRTWNdUbNoYYTzUxA7PJmpnJKRE9RQfs4edDmz5BSYfDArkchz8d24UbRu1ZJvnaGh",
  "key19": "Be31TJjBtJ5cHs79VjyAco4qFEghw49nuRHu6wGxRBTTomsNj3Dtbrr3YQNkRjMyrKDZxYbeq5cY9TroL6F9ues",
  "key20": "382ZtdfGrsLEY4KYZsAHAGyBskdsDPSugKSwFosK9o36q2Zeyg2HpLscT7ajeDzA3hGDHFVgN8MTipxZsyjyudA4",
  "key21": "XGnV3DhMwLngr6AZD29pdWetUmbmXcdsbmUmxM277PZWYCvjkG7bL7STeMjxesXkQ5EQw99pLnvFEUmWLQS1zxr",
  "key22": "264DwpQZWEKETrBPxz4Xik186V9pizyhTNibfQ9bBk7wM31BhdXLZJaD187oVv4QT8xQL4WK4xXEUoUd54w7284k",
  "key23": "4hB5TRhrtvtWt6kxHeo6kpAHsEuEgVV3ZeCZCSfVtYAjF3CjHUP5XcGFMis7UdtHdpxbhykQ2Ej4xLVYdt1aVKPG",
  "key24": "5NJsgA4kYgTpLXr4GiBX7kmAzFYymgYa7G5G85GnaGxNjgSqMGP6ANA2cpLWBoqAGNkp2tzVkaPKaCvWdr6EH2hT",
  "key25": "Lj5swrr3ySnTQZQmqPbpZpvSGrEKNdJQwskEyXzVah1fgwybBvRuaLBUuhviTVrqami2z5qVq4Jr2DmfyUWxmDS"
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
