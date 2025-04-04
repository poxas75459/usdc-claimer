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
    "5htZ7ZEvGUE1qYpKzX5QQWNqRUkzNVWk2vzpEK6JCRqeuoQig4hynsHkGZ49yGQiEjSwgBsmQND1hxBQ163p42Tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ecENpTwYWUcdJqWUNZg8MMiHzvvmMk7RyhAC1hN4SZuYS49qK8BQKGzptVDT7xpQSnGMTrEi3kwJT1ZgzsJarfT",
  "key1": "3tRHGtWWi215Un38EE4BTJwKUhRANeG8hAke663Z8n5ejsYSiskBidR9G89oxp5QZ51jofxZa2GXwSkoPBSwXA8x",
  "key2": "2yuQidwnCvkUH1z45FNb8QVQco639edmze9yXZEPdsxddfuGYuTvjaxvjir42RL3KLi2XB3phkzqRpzEQhBVVM9p",
  "key3": "4PYY8YFQWqfBt12MEry6TYBbZaC97irYoxcMwDwQbTNK2ZboA6mxyCG8bcYfEpZC4vXkU4muHApYHP1SZgd9GBPe",
  "key4": "5anSSsPqwPy5ZvpWrrrhD5v4PvkCjXFi7Ye3obwKDfMH4PPpz8tZcJa88fqh3CJGz9Mw9mLErAD1z2t4eLLijuQA",
  "key5": "jTD5B3kShXCCJtokijpgMvm7nYP2YYCmQKqgf5mfGMkNY53qYK3Wku5y4XdUzBUSQc95CT7UQgEiSf39YAWYD4q",
  "key6": "3zEhunVMbZMqNY9rMhjTefcCXE7c6fsHtY3ecUZfT5kENgcGTRyTRWGKCK2jHgAocGhv6TPHtpvD4zYGNezz6qYS",
  "key7": "24FrftMxbWnRQxCdhrj8CuByDWSmXdbQLdW6q5NVVxk9dUiQZ4zprKFJeNeCvoSrKvPiK6ACHdzJskkdTjcA7r8H",
  "key8": "3EqPVK5KspT6Hjh8iG4dRc4Mh3Aa2imL5C5ujB5eTkeJZdhEE4pB7xUVRzJXNU5A2AkaYMdxuRMmqRj8KPD5zh9S",
  "key9": "4TFQgjcAvrwStj7yUu8nex3epq4B1N16FSsdgE6Pbko5tF29Ctx3KVWJskn2BZ5CzahKcghDcZ35hPyjTVQYh5sr",
  "key10": "4uX1pn6bS3cnjcrkTNxjpLsFa26Vn28ZooWaWXWNBmuuB3r8WrnJYKDuuruqmw9fDAR4wsiALtporhY3E9y3cMCu",
  "key11": "UbnToGrVUD93Sjqx2XvzYLSBeE2miBURfyDinMu4hivkrwwaiQiVYcz61RiqRE4mZXs3kEzCecnGntP3gBoGXjF",
  "key12": "2BUBQzGKLFv3xQ47hgfooABkofGDhn2ymDoC4DXEDKrAHXATKeinBMFbDCzAcm1uUR8nLrBrKh2kGEMKpeSo7Y1z",
  "key13": "5nFRPRpNPjaU11rurMf3m3zRJAGoW3FTsrMiMt6qHcooioQMndggnrJHSkKNJBZVYquWJxtGjh12U446kq8t4U8s",
  "key14": "5pZrs9eyaRji9sXhcB3bvZ4zCUQ3CsChEDniv69foboh1zEQ7sSp3dADnsp5Ux2wwFTHTSjxd7xSuYny9KmMD78L",
  "key15": "4c7n6W48x7m3jptQ2CAEs1vRbVHrMcnt2nFJMhVsrGhSPjbQGrtMMeeotRSFtRxQsTo4TPPztVZ656Eiut63X6MJ",
  "key16": "2jdeJNHdoJ1hK5r73VCP321ENmg4SARVoCV5UZksDcrs7KKV5zttKZ9mKr2VeL7FEb2sVEs6KS83eYeAcrdZx1AS",
  "key17": "3oaTWyckvV3PCgnQmBXrb5jXnBmNGnxfZ6JT9wW8Zc5uovWSBMhTv9Eq89MxzxBJbtb4RDrTzUoT8LMSvttNLyPF",
  "key18": "32zveyvYjqkvxZdULkhCPSKLXRU1z5u3AKTDbHyMdze3zNWER1VHSbXCFkUtwYS4QKWphk6ggB1fAEYXFX27sNSk",
  "key19": "3HLu25K4sAP563nqbVMgKNcjH6hCdZ89s1jLxxqy6XAcZGUyAapxYphjZirbw6k6UNESNHgPFCQ91rz7vUP9v56v",
  "key20": "iUMh9AeaMVUn5v5PcqYGzwpeVcQCdgjxtJsRcruzMJ8dP88LFpjsTDFhANN6QoRfPFZAZN8iSWryhZTq5gKppoM",
  "key21": "3SeYZfCVE7P89NtSd6unCT2ZPSu6zbmKmtFEgi1EnK7DFVgGJrsg9VFCV43b7CE7XCznzdLxVaLKXq2cmBW7ZT6J",
  "key22": "43j2cFB8ZAgajNphSQ3hAtWX1buhW3bw7YYh1QgSr86YVGLP8jzSxx7ZY3ZvoSGUyJrt1tipgxqBU6Z6rMWqxpAn",
  "key23": "4EeGHHZxKYKcYuFsR7XUVZT2yknBi9TenVyWJFaNtewdkgs8T3XBtt3VN1ftqMSCDA6ztdqT2UtMFWMza5tHS6tG",
  "key24": "64Y8RjovgdBNzBBGa3AhNVGbFiAwJjBhDV7HAbhVTDq4VTTJRVxvhwmea9Tj6A1ta9YUTnv1Lgsx7UuvkvfPDZAg",
  "key25": "7J8cmgEep6MX5ZBxPkhwfxWwkEbJcBrDbso6NncnXAkv9fzPnkS2mu3M5UQc2SgGHEKQQpbZRFfkUHkTZS4pd2N",
  "key26": "39VMvVdmMvJbQKDnEMqkWATdZdbhXXYjVX95jBe9sZNg9nBCUPhrYSeguf46fGPW17VXKK47uadxuPszJhad8DS9",
  "key27": "ugnj7FqRNVAZd1t9ksYRmrC7qez6eUsL7P2CsVr5JLKEuitJeTUf5VBm6DFbhkqXTFZJL2BGTq4VHMZ8Uq1eyZk",
  "key28": "2kwnj5haJ2TgkVvF6yKBcTyd9wrG89QcbDDd9atXJpLQEvSYnrF5k61sQWsFWqWtiv1hbHhoYbQqcnSiFERvypX3",
  "key29": "2FAfw3njHA5q56nZ29w6y9NDZwmJsH39bFr1iypmPWxKefWdNLeYP6KsRPBjhaboCugzthEzaF9iHkeiSgmDXFqn"
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
