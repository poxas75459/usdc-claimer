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
    "2THW14k6U453QfgRd2v6Jtno2WZm1HH5n4MdmT5NEKYTv8jPRKc4c6gBrkNkTqRhNz4GWYSxC1Xo7aeGQXYe9f6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pUz7zAcq9mkqtKQ5XTSeYtfYixFpVyyLXnFmifBvPh9AJs67kpmkdrkhtwoEzrMuQ4Lje6SUM37GSSVVeoyzY85",
  "key1": "4EeQ9EWy1jBKaYStxkENa8ENyNFgZjEoTVmfFbgoWuexQM4vbTY6U56LkKaYv4bstFTYFhFSbSmKqRVUvV2f2dVg",
  "key2": "5NqSXViyhjP2fQDePfG5ytTkQacfyKf9Mi8Z2ic6WrsuE5Ug8LXvF1teM3uNozMkzAMZaHrEQPAort6xm59QBeTx",
  "key3": "3W9Qv83cdEiRqWr34fVaJcsDVLYE7Q8bEQeh2G78HGR4M8R5j5srGax84BvzbEniYKee8JQK5QfDE9n4xT1FFhNM",
  "key4": "4A7zfVKm7zz7tPhKrK5TQ4GGwV5Ku1Hpo9kv2VxGwWUq7NKBxTwqotWt3vsnGpgN8tpKuGdx6kV7HxLgPYfkgCPc",
  "key5": "TCsqw7arRqApDxEwdXwN3F3uTYvVz8T9ALRgcr8TPmxZWpqC7LUyJr7GGXSLpWGMfey1DEu9qpa4PinHWMh3GVw",
  "key6": "4jFxo7gnS2J8fEGpgeTm4XeQNQM25ASLMvfd4dqrt3z9gBs58tDQFPuK7se2teZ9m2L9kDxPkrDBAqfgqmZ2y2MU",
  "key7": "2v8YrDAdT1K4ysohJXPNxhLmCoWJm5WBvWkBDPmPow6h5fMr6UkGg1rycmAuuUr2uuhFiwZ8tBLgJFMt2ykpJSU9",
  "key8": "4pTMw6Q7GbyLfhe42LVFdJBjr8uo8E55QFhhhdP1Pn1P2kTUqGssCBCn4j7YD24SZzmweCthueu9jixxLzDovTr5",
  "key9": "3TVyktuKPVSNR9eZ8QoDsA99Hy7HukiC2oWwkspxbKWrytjGUpVdjZ8BxLkZ7NdEz5iWg9hcbuCjPcm4p6PMz4pE",
  "key10": "5xAb5t7eiGujuu7efK8DF5AyztuKc3YTr9b7Jf7z2HeN2imUbsDtEnnxk5qvHKynLFtUa8NuzqYQjCFTTxt9XSuk",
  "key11": "2wGMFUv36A8dK473LdMNeKqhT6FDMognrbF96dvVVAMkMh67YWgh1wAC5aok57YcANVKVWmdjP21o9bxipWZgNsz",
  "key12": "4XusQaJqzqh8bY7WNsfHvnt8A3okQUXQyNy5sNwhjJrj36JkEDc4um3ptsV8MoKbYn4PqYxjAc4bQPwU98ESJwRG",
  "key13": "3XTREL5MXz6HdbH6Xita2FSuzSPT3cUyu6eEMTCTHzET8YkNmdGrC6Dn3J97N1tW5nJbg3YiiUZwhsVJbEjgDXKr",
  "key14": "44gX71crYbPs4fmqFyxjxqApkduTr1LGTzcpQ1MBaUm91A9HwqdkTnQNkrbiCftc3V8VwXNwj3mZpck6LcbAP2GF",
  "key15": "5nF4m5oL4FxwVzEXD3vvMRocXXWqPLZNDAy6M92NTCSzeK4MJHYyZachNVggx4vgUSsex1sdJ1YgBtzU3r4oA7be",
  "key16": "4m53NrwB7ym5yP2MVTWpnAQq3Byoeo85cMDp8wBbUSit5quMwVFa99mvWAK7hsayqCfKdnNjQGFponU9J57PAPMM",
  "key17": "5SD51cH38pWwJhhsEBfiCD4oLZszEseM3zKGoCrwv8c17mJk1uZKn9vhUv2JtQ2TcjNN55oUgFus9f5UbGpmE5R",
  "key18": "VZzdcVGkogpetZkXHRV29S4RPNXL4bxeNJ8FwrzdfRToUYNGwjL2F1HgfkqwCQiZ3W8MXqEu1XmRrX1nBgNLDzf",
  "key19": "2Bmsw7NqSUnz3zebGkAUy5pxves2Qr6PH9We96xr4b62FZKDXkaN5jK7qygYGZgPoWLp5YAw416xJuXByYhdTnBa",
  "key20": "5NEfyv7Ec9PACc6aX4WFx9zHWRXuVHTwLCdsK6ecDb6UNGwjhN3FXwc9umYaHR1Kvb7dACqc9kEcojfik1qLp2aa",
  "key21": "4o51ys546Hkv9RQtoTPs8YVNwFcHr5bmPAvW3tDLHfVvbDPup5kXszNPoY7U2d1x2RZNYoJBe67b1TQhLMajCy25",
  "key22": "5XFKBDBX4mbBaXf1MWnXT63iTHMNTQn8ZfMaxUaPFW51ccPYKWNZa4iecoc84EjRQLbxyCGVRxjuVK19BJv4b8mj",
  "key23": "3vKEHYyCVUJJmzcoF2W3gPQvpKkcQet4q4KqSeFX5yBkRhvsqNGm8FZanK9goKKazWVVP1bLgoR4wgW11pYfJqNJ",
  "key24": "2cFLR16xxZTYVQYMJrxXJhn1U95bZGgFoR7biJm6g3eQ5H6CrDKkjjU7n6BNL11WvFbc54ReM8D7vePivaQKgCXD",
  "key25": "2mLFRWWJsfHvmi6gLj9TQRQbh26JfAoo5vyL4yKbNiXgsn5yf66nWHd2EzmMmc3zkG2Mr54c5NqhkcC2kyV1Zwt4",
  "key26": "UQS7s9VPuHjqsJCvpmdApxnBkoN8u2ZA3jZAvT1SwtduCi5MfPRxGcPMUqUb36u4GQfQV83wyULCaMtYhxFSUCy",
  "key27": "4sxAMyG7JqabnyaP97RCtpWq2bAUSkLQqA2e1cJ5uraYUp7TLNqDpuD5R4aBbSF5VcQWfQmPfAsh9qtNVw67a7Bg"
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
