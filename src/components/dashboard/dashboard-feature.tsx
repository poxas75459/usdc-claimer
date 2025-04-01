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
    "58oe7wcGMB8odRZxediVJdwiPjc5ghtVpvzPWECMag1ThhBRqJyb1M9q1uoJcu8vvkaHu2M5yGdAT7n4r9jNRjrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UCyRUoBGKdx7kN3mYvgfxJn8znpkA1Fg8x3bq6dzpvSTJsy35fpumrxgBAMzPxg2mXSPwJQTttyi7mVV9NtNmnT",
  "key1": "tHUvE93Z2QMGX6DrRTenBrzHcwMvYAC65WthY5nr525KrgkfJmbcbvj64CQXUtwuJimU2QmZ6dnQqht2mpHXdho",
  "key2": "41n6C5tj2fNmqfLD13m9QK1pBnhLbMAUUGo3C6EGKXxnC2rGrbxLPjBNdmRuw26QQZPxUDKP9kQUPciEugDVucYK",
  "key3": "Sa3j4yKDn4bzLmUy9rELRktpEMtGmow9RF8S3LSAgLo6vwvJ8h7JBEhnK2KUrV74wzdWVf5yMRpY55Ud7ANk964",
  "key4": "2GBGhwyiXiyZRwnp5mFdzyyuvukz3M7EuQu7w3gZAc3xrNZbsRR8K1rsn78HPup3cDvQz42h7ePXTb5AtqqL3w5X",
  "key5": "2E3uFvWJRhpCUcDQbeLuMDfGfPzxfMRfxBJzQa4ESoYjemgXNPpMUNRFYFnjRX6w5AEpTP2SkUXdikZEjesZuBTK",
  "key6": "3unbdfmsZBqwPQ2oq5saE4jRac1C1GFZLhBLgZ44Yiqr7z3VuECLGRPHT6AXPqEa8sewWAjf7e2wCnECV2MNjSyh",
  "key7": "4yR9HRFHDYbWu8nUC4g4h27kk32jBcy4YFTDFHUHAEKeTbnSSc5m7Tm77chJ5NY3oTwM61Cdkxxp42EKeZcVGT2W",
  "key8": "yFFher35n69hFgWz3s2Z6SSYCdKpSegNVTqYEXgJDT8E6ehn1yhuHeqnmVa4hycTwRA9sFHpP9EP3bWcshjygQ4",
  "key9": "3xdtD7MMfaDy8QCyHZrnHNdjAhmPuDwmQ96wRbShe7BxBM2yp9vNs3j3sjyUQGwak1t7q4HkiY812TmNTRMzn26m",
  "key10": "6ZWztAJxV4eBX3xPxqJH6vPQsM3chhWdPXdmpVHHHTubpjHychVyU4PEmAGt8ES7x7pKY6c3LWS8b8foDyLuYZX",
  "key11": "ehdVYU7FEruyoRynBsoff92bMNefox4vmgxWJr1cguD8yytCdWgnkwdt1nhufmS6pRQChwEcwXCgWNRvDC3VSUS",
  "key12": "5hWqE3Xcs7Y15bfhuXGrgt3t4282noTF4shJ1fNmadGci5p5nCYXj9XgKdMrCCKsghRrMEcr89A3d1rzFseWMnX6",
  "key13": "2Ljm76batKqfhbqmHb4UK5wT9UR2QJNNx6wAYQTswwkSJtFtmhCZmA1YW19essZYFAueKCyacnvzuzz3M6vrQqAR",
  "key14": "2PSkviUb2mtjTXWVzg7axNQiV2n4K7hPrJi2tMfH5hKrWfeTBtDqGC2sT1XMzYLgQjUBnpqUDaChjpGCwrofYUtC",
  "key15": "3TA8ctS8BmfcKkyxSQUv633yPLcxLQecmTzyr6iKCivNfrHRLqZeteh4ehUvCvxgD52NQoRjfpRQiZX3KbFtrM6b",
  "key16": "5Mj5uNbit3jxWrCoJ5eMBbhb6DSAiDMQpkde9iKszwW8YKfjdLj7CkQSG16KDoBQC4Z3Bhi8MwmPGBe3sQyT8GxL",
  "key17": "3JMe1SWZBNZrKN7PhiuhPYuy3RzWc48bW2nHYWzQjqBF77k7QSVW9mkeUNeLGwTtSZGGKtf8BtR5MNPpHsFWA2xF",
  "key18": "5iGjmSh2urRYwA32kMCdCQ9uFbT26VSVkknswvNh3YZwyYVEzPVJChf6p37PsMUSehKXsgfmmjpUe1LBCJTfQCNZ",
  "key19": "3eAzuNwdiHQjjnrEL4sKUvmQ9n5hk4RakMdam9bMmF6p9gyBihtkMEsdzKCcysBqNHAYUCx8mZYNJqK9LRGJYEnQ",
  "key20": "5NxVZFaAtERmpuFUjf4aryeGxixNSLmxHoybkhZg26hLMfNPqV5614SAQWwzAthyj1ZYrwhrZTagKC4wUPAGqbLU",
  "key21": "4rPVz2KvskVF43KLCchLL921MxNUmzjuCJErhRSjwtT8A4eLpDoyubEoRF335kVtFTmuPzEAmG2oXqVWGNT9BTrh",
  "key22": "5gg3hKzHLgx9QPgdLYgHi1CXM2u4ZWTpc3idVLUnhCa5VRvYTqY324iysJTBKkP6mWxccCJXW4wqMoA86v8uc7Rk",
  "key23": "4YG4jyrQvAj8rXEzuitBBwE98JLNianweZPpiuKwckntSavcPLeV1gxns4RzeaPFs4754dg7JvEWGRvXXnUf17ow",
  "key24": "2ppYGoDpAkADKhemb4hxb677LxkFUrzCDbvfjifdYNyofscFtCXTswJbgBdt9PzLjzRRt38gkcrdJk5o5grgRAWj",
  "key25": "62xoWLBL5gsfcJwJ5rwjEH9cYAP4cXUxqZi787M6PqmtL8bJwY4NUGjHZu54P2Rzrnkdec46MujdUf8HsLPqRKwZ",
  "key26": "3ScFgJ91XkTPtGnkJvFaoudwHNE2uTPSJPRdc3CHwzQqhSm4Ms7T3m4fJRdJ1bTwnfxNEPYvJ93UaRPi3cNHUD6s",
  "key27": "AgERRqgVUZ8W5AQsMjVX9VwYhjuqdjkk4N6HRdTAHUseLSGd5EDtX5oqmxvBKen7dpdADAQLHZj53ZbxVgnaZk2",
  "key28": "5gv9BBSrtcy26LpmFhf9PpqZYgBKHrfQKr9oA1VmfLD2ApVsyA3E7u31qfUMAeJMfgjgGaaWqAEbnFSCeN5JhYPc",
  "key29": "h3AHRPVAB8KtxX7Fi6XF8DgP3r5kLpf9eULgziJEzRm1vR8MCYpuQUyuxgUruu7Gx2S1aUdVuzMEi8844QANEfo",
  "key30": "qgepHmk4UCUo6hdv6gaXZMxLAaux2DZjmAYniXsMiVkRn9r2XUUoSBcUKwtJbgFf8Ao3AfdqYUU629Myz3xFdQ4",
  "key31": "5y9mw8nRSD61YdG2de8BMxTMnaHUqHArkXSKakjo3TXkrMoseW38hMFHBz3t73ZmWAjxZ5MdhxKYnvGKh5fcsU3N"
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
