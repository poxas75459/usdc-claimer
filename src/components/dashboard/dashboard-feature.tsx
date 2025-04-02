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
    "2ep8TF9WhAiP5m9ZVNwAQCBM19h17YhDWLoQKba8W1GEVmRCRQVP6AY3d3u4X7YHggAtkrwkGagMA4vD6XNohGJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFYzAfZN1ZbiyhwmR9me7VemdPLvRhzpkSirBja6gNdPWWfiyR133ffrKrd7vPq2QLbkLoKRtpMPxGNpFnfbNg",
  "key1": "3hTyPQm4tm75qQeMpCWJFFx4dqo7FWjKMBWTDVFfxxPVELfWkrFcsAPG9w1kBCJehdd5bz58tapZ6CfiPa4ZZ6f1",
  "key2": "57qpHPWWxG6tBHk6ScRCiMT34V1Y8dm52fvXYg7hWvWnaahQpfZHmZvyXTACEVWChcRxubBiHcyCHRkPoeK6hP1e",
  "key3": "4noe4oL52737peWV64DRfNLvt6Uf6WxPx1u4kpQuGkdhkktfeMTnTGvVpFdS1UtsDZKKDjjBAZpcHCRiDfjfqLGZ",
  "key4": "6CES5VXVy6WADZihJGMB7rDAiLXSYvkpqmDHnVTeaCPLhikPRHhaz338kDbtGLShqoNTKtB71p7z5CemcmZ6C1L",
  "key5": "2SpeqSco1W1TjnLeENeJiCH1bgVaffq5rPBD9nhoBwgqmjTUAUSEbkwjD4hV9PBEBzibFHwXDHw3rnruUthN4QGb",
  "key6": "2QP1bUq53dvK2zm6XnuPzvxL8KeeTLYajkvHPoPKBkuQBbjLXqCh8JdGFCx45PRErDSFiHAT9eTNGLrMdzUVbc5f",
  "key7": "5wz1D4YufgBpYaTGHewUZ8HaF5JyPxBkfv9GjuXezBad6nGNHHKijnPH9gYZss6BbDWxCtfkwgWoyCa5VhCKzybu",
  "key8": "25gADwSnTbc4SS52JboFzpzS47r2FxigEtzsjiGfUg9Ea2ZPyxgTKi3x2XPVwaAPRk8a726RF9mmMZQTGpzS6999",
  "key9": "3Z5FjDpaqDKaV19iE6JQKiYpJZA5SNNA12XvjF7a4UyiY5H9S7dDTocoR9h8HVLr9RSgGd5pbtXWNi4EkjP4rjaT",
  "key10": "5zWhz332j1Xyfzxp9UiU9J2ApaR7Gob2z1PB9RK5YdqHzBW3DQqBWoqjkv8nUwFBJvHXfADbSZ1PM5ikNVvY1QB3",
  "key11": "chmKk5Y3MncHh4R9neGsWPkbEkqZr9wvyw1ZGDLU1B4aaoHUazc41xqP5NGPcvTiEwH4HtZWpAi1RfhwqvbwA6u",
  "key12": "53fphqnjmJriyff3iWB7ZEHhZus2r6Rp9ddWWzgbnKLH3LHeoahDY2UTGCmshMBm72Z2eQPiaCro3a2SJBwrMj9T",
  "key13": "3pzYYWzoBYkpRzXw3o23n36ThFhQA4oeD6LGhmwudddchHAGM38yQL3WQBX3dHwEWtnWz7mjipvsfEiXrZHxghDx",
  "key14": "3kndRdDR2tnnND86d1yzDKw72imTxTpBGieExahyKx1xZFNGCi3NYpUaW3dcsAdqSzc7MstF9eEiJWaPRKeDNSsD",
  "key15": "zNC77EvSKzJ3PegQc2dzDTU6XfTBchQ8iSr5UUiQCL4YPtUzBH6sQKimWUMx8sdtbZvBKA9etrjBSUgra2m3ZBH",
  "key16": "4ZqvMcP8McRZFop2nUhSRnNS6A1YsJqHMMBdhpDcMBTfh7DrEPXUnkttwkwVHbWsDdhPXNzCrd9gpQY3zQa8WzCe",
  "key17": "2vkHnJwDyZuUJywyetWnhq5TB1d2T6HRawnSZVjnsaeKFY1r9q6zbKNqLggH3rHWKYn2ED3kdPDAqZd8mGwhjt1x",
  "key18": "2wcP2yPC4q37FxzYQmihv5ZyXPccZ3qJPVVj8H6yGbPd4SujfubZbf39jqjdmt88mX7Hj9jz8vRKbPU8r1cjaVjS",
  "key19": "ccJqPhGMhoan5EG9Uc4K9ZTkjE4WUnU9pVR3fGNCL3yn8Va6qfVPP26Hk3R3TxUMv3FjZ1HqPpvTTNekSp64xJe",
  "key20": "bjh4YfKXLFts8cqPPsYVEnF9sitReZ2QUUQRXX2z4GUKdAiuPQJiynzWXAqUPYjdtsrB3b8voZQkwZS3GCB8zMJ",
  "key21": "3NQZ5sB4pojxJ7JNV9JmJDHoAS9LFfdmN1iMNPJKZU5VRCroe6Ra3FMkCgr14YkzcW7tuejJcrEtyPHH3ZWTtVbw",
  "key22": "3orLiWo2WT7WQHTigZyRNrUSF1dw4ENaNHNLPat87MT34rPPzUok8PmCETc4tUabwNun7Dn4So2AqvHiqczYs2o9",
  "key23": "3tVkejAg6Pdm9YPwCT7hWcFWft5LBocgpCZCqZQV5EyBAbhwqZDvNVTC78LmP1GPXs6kEryUks6mCKM4KogFLPbk",
  "key24": "33YkBfVphBSfLRkzrupJQTvcDfKQbsJfXwbJAo5tFzEsknpZSTktbGNtVQU1MAbJLkdi4VaJxaqGXeqJyEDxhAMu",
  "key25": "tTaUYJLh6CxFYKBtTPbpfgfHqQieyi1dkt3UYGxAc1hKxzdVMxpyV5pcuYuTDezvbkiJ7KbDcpMAbMhnfpTSZ2m"
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
