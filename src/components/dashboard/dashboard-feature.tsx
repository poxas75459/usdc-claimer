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
    "fMR9Q4yVd62rv3j99H7hsHrYHu5bhuLh8y35kdd6Jqw7UVRESox5LBGJFwbULArvcKRY3yk5VJgvKEYGGx7XLqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mbWHKTjL2iFopLVYNsz7HA6rNkZPW6dhkp4haRPz8yTkZEzvBk5fXXpSDXcqLTECS92UqwY5VyHdS7bTxd8Bp5Y",
  "key1": "5bf89e3xxGiXZYjkrQHXmZN79L6MNn5xNSrDGmg4Q2xLzvnYZrPcRdUMn23yeBVSQZzYLUjuAWRH2pUqurUoKkhr",
  "key2": "3MUnu8tSDaZ6Vf48nRXdZiZyKJAAZ78NB62M93EdXaDTXxzFFmVjkFJjCNvmxdkERExRvg2mhRvr6uUr4psbioEe",
  "key3": "66TBGzcWfxzX1XGGECGxiGsVGCio2jXSAUEjamZicdM2igV2W9uavqCmJNavK6S7ZxD7b64w9wx7XLwJtYg1hzbQ",
  "key4": "5Qdden9KcAsrV6ozyDFVykzQjdbubfDfB7rYL8QsxVm8vfmAC3teR6q7u6ZxVYKkrgiY9CxfrtG5WK2kCMNCv2a3",
  "key5": "5Y813CDvgotJpgnatikKoTz3iVuEatn8uxURHWSpXv1nTf16SWuwHYke7qciJUehkMkbbpwR8iudiWbY8ettnQ8S",
  "key6": "4kviM2LQH8fLGy2PvoWKFWGcAtPvc4SvuWc9wwx1AGQ3ukS75sF8GeivM4KPvoWEby4TopxCCbAEmjN7tvDCQBxB",
  "key7": "2bq6W5C1P1t741zT8ZSken9TSrPrutRsAXvevD1ymPhDKqaXa7QsDceD79cbTYNvHhEDCeov44MdTUQVa1P2tiwY",
  "key8": "3Z5XkU4GyQMVufnozKt6UBZ818PSy1BYL9acPD6UjN6m6uZDNbkWhUQssJx34jkRezJdNe7BNCz9qSBn1q9UaRmX",
  "key9": "7QpRjLmwpjjAyBfuMdr5e9gQV48YQKpYgqqLCMNRK9PP8Jk8EPvgkt4yNr7xj9GSjjhAdbnawKG2Y6nf5Nqtiv1",
  "key10": "5U3qHUJfWmCUMT2rW7oXToP2DjHuiL93YGYb9wbdgkrh5B8MfN8PKPD5dFNrkn3ibWBP42eu8smyifgC93GrdKNh",
  "key11": "3xdB7kGnmrRCpKbQuCaXo6eZeQmhuitWWEvyDQEp9EUwg2TB1p2kr92iSghZQjummo17mt4Hun68ofEdqoPJtZ4t",
  "key12": "58XYAfNnSGhf8KshEgL7qk1WAyLpwMVD6WvbWJrVN6J6kyxGp6F54XYEmbK87W6AYdLM4DcqNTwkT3oVGxtQtRS1",
  "key13": "2zkuTPuYcTLaFJ1RAB8PUjnA7KA4KA8inGa6AwGfkGz29SwsVjLocZFqNkPzNbAfxrK4sdNL3q8vWSQnuNP8fToc",
  "key14": "3ZcnbG89otPE4E3YGWZFJRVpY8QgKHoH3wneMpyQW7DjUVSxJcWmx8JbqykMJgPPEycDW5GXksGS3sVwkz8ufAfW",
  "key15": "3xH4tRqGcf3m4fztQZdGdoCMaDjP4sBfJ3xjywDmz4DFu2PETAVB84nz48hUmmnZrC214H6h9AHvJ7UNJSdcsvsz",
  "key16": "2jec58HfXQpa9GcbgoiArANiv8UbgF2LPJUEvbgFGsjMXybTJdxZt3dVhWfhqcA6QWm3nHV8RTgrGmYN1Sv8RQNh",
  "key17": "48hn8m1CD4R79iJjLK4XsjASTpJu45q2er8YrtkZLfrWqb6e2cLLPBGNrXDpDRfF4M8MTLaDbZfQKRJhizV2vDpL",
  "key18": "hdEHkQ4uPWdjJv9MCBFujqPyr2Xff4dqZWgmZYpgjAEmg8gmbQXgeH5bqZPV8VtU7ZS33baDjjzDqd6p6zr6AHy",
  "key19": "TLCWmrwEdUTCjypKmPN3nE3onWKgd9KGF5Q4SRnPQkG1piAJvNd8pRpXx9uxN7RBLqheNtFykuxYSZTZ46ziiak",
  "key20": "2VFWDuP7VsZHHRFJKWV4rguCuxCfxS6vRPxQkhJUKMPE4mywssJoV8jE9Z57M9A5pULDAa3tC2fmWhGYd3Kwy9HX",
  "key21": "5Z8s9Nf2vnksHuaUhF3F4k7vgzrbhPiKdqskWLV4sFuZxUvkmLPGzvHmpKPMTB6xzUr7r7PSUNqQjuWqThoqSZTv",
  "key22": "3zQu4h79pmyZjg8um8UnvySbXKKEqfyifcbhtgYoEppPbRcWDfNGfiF4Ux5fWYLXHfvZLVoN2k4QgfexUwwS9cXM",
  "key23": "3ok6Wp9TCX6YgNMPxEddoTib2VqqY1fhCg4d2hJSWN9T121EVjCWb2eDX3Grpf3u22aLQJa1e1xnnApFN5T5SCHM",
  "key24": "5kt1Xp2PCrjkVW2Y8vvksx25bNfeRZmqoxY8Er7Tc9XZaDKpsEAeKRFdYGJ7TAMh58cj8fWsCRxSgTHUC3dzBjzH",
  "key25": "4bpUgSL6NjkcCJscc4rD1oJ3MMT8iiMbPiTT2ybT7Ldy4w3oEuTtHgbCSkqBNzsC9LXzcDpPuX3qY66ARjDcc3L6",
  "key26": "48nxztacRFvf2btLK8HdWCYZWGmVGxAuX1sQfuMaZ9fsRKKzSoZMskhhXHc4ZAxf3QVNdKoScUtcvdYweQEiFCWW",
  "key27": "3zya2YGAkdTVkRHNpC49ELHdnzcCJnQofjruKyh8QFFWtr4hps1W1GGTZUbTssVXk7NH6yfEvPVYvRx9JV2VLQvh",
  "key28": "282de7ypnuCzuYjwYukdtWaRhfAkBXPWfAEK1kGMmGFhTPdBDMfxYWn7GJwF5vhGK4GHYuRzo5GtbEkMNnNtwn7g",
  "key29": "TrT36fMusS3JKd8guE3vWRdYjVTK6nTDiKx33CKAzJe4z4zhGtpVnrjv8Bex2RBn2WLUcLH1UFwbvfdnzg9yN8L",
  "key30": "3JiKmc9aSt84zxSpmWsf7BMssw8eLCnpY9CZ2u7nnnEWsBYEezSU5wQUeWR2ZGsTb9kFDSZVKmh26eRaNDrmvhdu",
  "key31": "44UyNRvKDr4FVFL1kCrQqsNfEdojyZzYS6jDtfieeYyCCSdvYB56vz5XLKE24acvxkeD2ay4XHN79gsFfsPUYiu2",
  "key32": "3mQAwQowrQ3e8vC1Y5cuDUZm74daY4pinkHJJkWPQR7ZTfAnUtAd3BCSxaDqH6ZzyfrVbJyZebxq2eZFNncQaJ4N",
  "key33": "2niKTaKLJSVKeBVxv37iFjWR13E7mNrJeSbN5CivdFNPJLe9R3Zt4Nt4fRLDYTTvgVukusDGHk8yiHPrG81Xv4ur"
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
