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
    "3QuYawaZQyxkzec7uFj5GsALJEmfoxShTYxBXy2wN8K7Jy8JEuFYD2KGfNfytc1w75KrmAdzVhAi2cxZX8pEEu4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdg2e3DroAMwRXUbe2AhN87scbGa1ir4MYWarNEYKVmxpvRomaXghM8PfRV6QMYQ2G2VqM9XaNXvSFBpPfMkbBb",
  "key1": "2NgebthKWqexU2iLVNunGzMe49npNJZ5viKnCmaQiv3L88vmNQhDWz9ePfaQ1WWqWyrNriZNGmntPAXyg5YzsBdX",
  "key2": "2VnKhuH7NCDXJsbUbmXsuckm3bitVVPj8DhHcUnqihe4qU1GLcjJS72uxGo5jAdwHZXgSFugf54bq4BFYyk2h8v7",
  "key3": "3iuNKLjC9ZcvvftWnYDjHGkZEZrvEzthoabhLU8aPc5KpZLmXYQ4gsmQW65sDAHWwXkSxBN8mNpnVtyGhgCaKf7",
  "key4": "3DFyR4RxyW3tiYnyiM2kGz71NPdc3j4im1sHH3vvMqYfbHzgvdVKXoo29cYZqL3JZCDDTVpjgG2aE3sVBdDQukeT",
  "key5": "VvraF5DYjCwweG8TadpAP4oiQu6abDGh8T68BX2N6nPKMnPAB7YACsYgTEn2JjojRav8v1buMuUhneZQbQVwbic",
  "key6": "4KZPTvFrMbjv5eqsv4zsdzDVYWXk2hmR3fzGHj4iv7LDiXb99qzma6u5dVfXXWXE5yKJsySoHz1NTdQ8as7p1df3",
  "key7": "5sDzoJiuVGtmFrYLF9CxFbH9GKMfF8nTMHNi8zST21g8ZfVUg3dowSSrZ3zU8ihTWvotwJgypBziF8kJNdiEW2wm",
  "key8": "3KFnmgxyeFBfQ7J9ERKQkJLp3inzrYogeEAgRdoYvQg55Lyqt3hka51GjAhQy1oXqoowyAfQ4273ecqTvAW5TGwH",
  "key9": "3NUvD42bUDpULPJJx57deruKq35pcSVFUjXQfT7SuwWf84MqohFHTEsffZPC7XQH5FabEU7xzHGApyhucYFG7LKA",
  "key10": "4w2aT2Lm4Krs1dUPy4hez7Gsj5XNerjVWMqChwVdhy8C4tziyBpL2U1n217JwzRr15wJt6B3w5GFkk7Fpu1qgxnw",
  "key11": "3mcRu5hukizt7EuM6jtZ2wBK2ToTPNWphsiMCqf3EbKyXs46z5GRCQmaCJEpa3pY9hnp8EHkJJHf7qk89UWNwQA6",
  "key12": "GQEWJXxHwNfi6ApmPBNxPtyTa8wpZBJWaakZ5DFgeRGoaSt4LyqPS5uzUmXhE6Y6j2KceAiHfXoRsX2kAmvmQMA",
  "key13": "eZSmrTNdSPyneNvsjyM7ZFLA5R525C6REvdnJVcgsuuRikhrZ8o7sSYhpWVEUQqbKWR5BxiU2qkBCJxLUny8qFC",
  "key14": "3NHR1cQASx1DK2GHzmY65eCnGYPgyDUfRDfssgXNjSgQzJ4tLVRpgWVEugRtm1Ymtvpdf17qTytKkeVtqrmCyepj",
  "key15": "5WMLj8hdVmEByQajxwhqo9chKUead7AvNLT3kvCVFKiCP44rHaGzeTUBBeWapfdaZ5CagJe2pGYsamuspEs85tYs",
  "key16": "4joDwYicDvzob4bPKZS8C7Cy8hXDz1UpPL62uBGQmcNctJzTp9cv2tUdGngwsuNtdVnSJsaarV43zA6G7DjgMb6M",
  "key17": "4zkV1ZnmxBtu93jYGYfRGi3MYt6if8ZhPgGpQn7YUi9qipXh69PPMHVXk8TQPeq3EA84gMWsuPPTP1fhENF9CWCe",
  "key18": "BgcDQEe9NQkfBaGMFWqUEhuGJDSPCXVuKmD3JcZiL2qWbLM3pwFvZLcj6YMb6AgZGDVcSyMStD2qmmBnLDuNoGT",
  "key19": "5qtjU8NY59vGt5oG9Qv9thBwZBxb8c3Qz7Gxf3PJqWQVwNnsPQYxfPWKVc4twMC7ZzFCCCARfPz3mt3C9ZyvMTzW",
  "key20": "m1x2Z2tGcp3sjR8Di4T8nKgqWAGXwgud8WHUHxejTnVfuKtDg7zR3dkzZpxVLE81ci1Vv7WFtkqdz5gkcb68Z5P",
  "key21": "49489Xw4XFw3sceNcqiyg5wugQob1S3D9dR2VyPbBwi4h83frzwh78uCAur3hdMuFnuRHsK14oJjpapT2Z6PeikG",
  "key22": "27otxeaLnqv6YDgY99AnFwbrsHZTJWfAT6XFktRWJ8edNa41DU3m5ksoCaYvF9vjxHJkKVkMeA5ZriQeWWgUDNYj",
  "key23": "39DUKgucooaSmRP9E5R29DgUkDP4BwpCWABx8ZKt8SA4LhKaAL1gJBkzoQRB1Rx8GSdTHtYzpZCPXrgfziny2YLZ",
  "key24": "4PWNq4ijg9EpcR5foFwknrvTub1NyKb2FjsonUtXRqFfA6HVeC4xYfPrQgby842e9m5UPtYiqi6AP27H797cfDso",
  "key25": "yEhHhkuXFaDPxQpBccaQwgfzBhjnMbN1SpqQbTrbmSUbvvbJn76NcmstD9t7pRWjJStWEemx8af9SVfsYB58ZPD",
  "key26": "5CmLbquYQgvdLxmDBzhNS16b2HRytKCn4jkoUxJWwpbGc23pZsxhZdCw9txk8GXwJvwc9DiRhDacsG1LFytKK464",
  "key27": "2hPnHyFEr6eXza4i6SonDa2Spc5G9WJgHGkTB3HpGuT2HY4kT1JPLkAJzfRCxnFx51c8ur97M97TkaBpxVvMgREq"
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
