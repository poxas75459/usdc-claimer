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
    "3HRwyzUrGVaM4K9BrbbaPSiHTEZYnYXsLesU1vgYV3sNGir5Eh8bRA8PAG1ANGkYCC8nT7q3fdVrZx35unhU13a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N8oeDDJgD4atahrKU3iU3RaCmUzd9q8JWUTkarArJa4YC5jorhHravUogRwDP91YLs47MdpZSbnXgLayaWnXF7V",
  "key1": "659CdwtWpxci1DM1pKgwazMVk9RK2uAdgZWBTdXAaH1eQJMeCEwJnbqRUiAp8ZVptUk2BaB8UMpg1JyHtC7c5URT",
  "key2": "596RCPswzzGEs2HcyzFVtvH2UGpgNgopxgEQ4Hkb3oCWFBG3RZdEprvv3ywzFQwvsdovdqzBvMpss4t2AenJ7f1i",
  "key3": "3TahaY1cd8Y2TuYwpBmLo6Cf5WL4H66ScfcnHDNaBX5kycQHKoHkS2YZrPN7nGjeBLfVzqA8VBtUyMN18ijqA1mt",
  "key4": "3q835oSMYRJtgq9CVZvowoPg58WLx6S5ioLn7FpvHqTagvPcQyfVNY3RQqPvFJMtfrL5Mxfde3huAiTv31ryoofH",
  "key5": "2AntcMhdY7oQsVH26FEP11WVfVAxzm8RFYFJsuuqqfwNvkzyWVWBGhX5QRi6CLvH7BhasyfesXrSzeiVW5isanVx",
  "key6": "wuf7iKWxWoYVQoSHGVTbgaM31vau9mRwczfnhY3TSYay4J6kgNuLq5jS219kxJej5Mdx8ucqVYhBSGYoU5uMJnq",
  "key7": "5ndAKJQiy8K1S2h7AyifuSJjLu4fvciZSBsDpZu5sMy9yC8PogJZ9dNDo8n7nRYTHAtYRRVdyDqiMzvujNYYkgxC",
  "key8": "3cFb6qdYDCQMghmPEHpe5hVqJ7k9dLTy6KodHy5tSZZQobDXimUYgTPWk5A9e55MjjDJipGHhuYw318YQcR7wi81",
  "key9": "2iv8Bz6Uyz8yVrz7X1FyLRPVq2qeRBBwkGsirweSfXJe2hqSr7XeTawx5izDjb7ZnGmd8ZwnfV5ZZatz75dNpWmD",
  "key10": "4hx8ZvPApauVGdFohQ3MocDufqVh54jMzFadW66mKTsoaQamRmWg1qcrGunAgzZHdgkRE2yuxwsH6oYT69QuA3Tu",
  "key11": "5Cp31Hgwtvuk5mv9XzCeAgpG7kkXbnCRzr9yehJFvooMbMWbPrH3RB5GQ5RJDqBh1FhG7dx3TJ1HwqtKCgz7cA3p",
  "key12": "4fsuytzA98SdQfjs6ni24swT9DwLs5NkFVKs42qfbCLJxkxj2R6gcoQsqHG7HqCAynRTNaFUmSnGj4J964etutLd",
  "key13": "3B4UE15panLydxgZUrqxBDdfBq2YZNqQSfthD8Gn8YSJsVyNPH1vg3JvPmHBwTYS5CSH1WvwhDfSJWQBNA78UeeS",
  "key14": "5H2hnYVYuk6yPdAtb15QZHZkbj9fC5YgRjB11ZKuNdssHDZzcvBoU5Vo14ARvDnx9v4f7KxEMRBmhfsNMKsWDzMn",
  "key15": "45ccyVHrubmsMsPcy5x2MJrkhPhJnefz8hX6sxENUE1Ntqu4mSJSLZT1bPNuGD4B59K9GJkBVXhso3xgPz3No9yD",
  "key16": "5MSwbVJZHtCBrMndS6XZP7fVmPabWYBGCaJWYTJtPLE7ys6eVRPA1E5hfnYsXa1ZtXX1xfVPLBR8NopaAXKsW9vD",
  "key17": "8ByecPdovt8bwBt1k6E1ZsZRySHcsrqYjLm9x17FVYPfA3SG26u5HYxMNsojRxwW8fEcS8JpPCqbxTEqWztjMgH",
  "key18": "3BububTX3ER7VUMiEvvLNZFN1ojHsGfWAqHY5Gu8M1fFvnLoPHqQL1crb7S5K2ZGJXaAyVTWH2dLmM4Q5z6HRxjj",
  "key19": "4yxUuWnzm6f24w4mU2JND4h91kNWc89xftrfA7GVbu8jezpEMuRpvpEPXmgKXopPC96gRtFMYKCJu3o9wYn7paoK",
  "key20": "4AQJvq7g1boTftJ7UcsM6PmFAsj7cBTFM6zyahVy6xtHzNc7YdQt8nEEAYfsr46s6SxUtJCP9eqxn2oQrQQetkn7",
  "key21": "5Sj4AjJqvG9uHHz3gjnjG299Woedn7527RYtdvEfJnbFjy66tfgBnQhv8H6WYWEtfJukR3JDvoadyN19vN2sQYVX",
  "key22": "5vVDPWd1HZbAex2zLAvX51hjznZ2So1EWcPQAob6yi728oUvgVW5xQJiFhrd7YE8iSWZqiMZyQ9WtYD59UmvqWck",
  "key23": "4tzjMEwfibBp1BT7r2GG38jT4WU96p2JjEsZ9JUXHymNazX1bTapsJ8K6CUNhTs2AH35CXUvLxnmUEXTRvWNhtNx",
  "key24": "224EfFquB1QZjm51P2J2i1jiFcEEHG89X5bb96CjrEZQLVM4w9tmwDNi7cFoddPoxWht67kqBgVbrzqz3T6YMfAJ",
  "key25": "2rVmixrB3VUBTX9hKGkjXCozmKpxLBCwZo1ut4u4eTd2HBvkTyELZWv4YzyXnueDryvYTyyVBH69Qhob8W2qqfK5",
  "key26": "4MHJ7PJCQRL4jvGRS4nUSiiuHXy5n4MR9ZFvMj8hW4FCoMaBMyakY2aB6nroTLY5t6hdk5Eo2FkP3CVbsBgtkmBX",
  "key27": "3zZ5DmULnAm8ErkmeJ6kpkevKE3jyiS97TgEaApwr9Y8fo21BWdfQJStf9iw9E5vN7cKsKj3gex3MLQCH846vtiB",
  "key28": "3v8r7hJts18udMSmXYynVwRMycT3MmuxFcg6Y5vRCfghCGCXjopUxJfDsfpMUM5sMqXAFTbbkuy7EqZMfYFWFEHi",
  "key29": "5LrqhNLTtp2LAz8K9PUofQj9r4VbqyuePV3jQp7aKCXf8EwB9ZgaRvhn2AEevVRh1tHqitVv6atrRQFHVz34jtyu",
  "key30": "53siKifWZiKQzbFsC4DwN2WpbqXvH9svbbkWZnQ9FNoDHcN796AGwbqzYoknoyc7nZhMxXynWqpiBevmXwpx7fyp",
  "key31": "hsv1jGxMQTVnMXhN6kNacvR4m6tZbsC25dpHZySUWr763ZCG3EiTtWJbf3Vn88cDknkwpZVoJUT1gQpjHaW78Vp",
  "key32": "2bKfuo4wane7nqMgF4p9vyZWCkxmBRUzfEn2fAbAtSr9GLdWVXzpmSJmuGdsMwbevet4FzkMKtyMXxhP8ceYpN9i",
  "key33": "ZAHok6EDcvqNbnSd2RSqCPx7Jxjd1jvLfXY8itTpubwraQxSYSBcWqbRTGceyfbxzPAwriuEgJCYdpHcLfxtpY3",
  "key34": "377Q4dzQgQhLTxg47WHoVsLqaqhNSM7f9uDPun1GM4XiHbWD3LZWnbk7xd47WsnXcQZM8vRv7kSsHvBFcNiL6LWE",
  "key35": "29hyexeVVhPQh8bATy2NsVyVrEww4bxGsXqVXkvMC3tRP1nXQUEXR2Q9BQnf2BkRmjBGhjG6si7b7pPfqBbsZiC7",
  "key36": "5bTC7ecXctVT79X1fH75HGnFpGUwhoRRZCx71ZFLPz2Lvxi8VTKHG2M61axmDGRoRwa7iRMLdSHnx1vyUr8pTU6P",
  "key37": "tgPc9FsKaZni6CZbhbw8fTZSDpz1JMEsLJfveF4wvaJcpghrAbyXVNfRZ7Zq2L7Xxx8kaYncQZf2TpwdLFB9Aku"
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
