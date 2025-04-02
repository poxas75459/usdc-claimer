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
    "3CJ3bjT7mS7zefbLAwVkFJT3XCBA164CrzPjtX88Nx8o18BdN54QmrWyLQk9FGBzv3ATEuCAAfrhXBCXg4FFC8mN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3BDkR4DxztiKUueKLEKhZX4sYgHjhqtKDxcRj1EMN7g7xyoGfKAXQSCT6tzbZhGjPsf9URtaeN6j9QQz3p6Xze",
  "key1": "5UBKKsUW9HkBEtLsYNAEzkJ9oEa4iNf32GpVyHnBRXTgzGdvrqTFVkW3dtSUg8EUu9bpFT79FReWGEyas7v2TJS6",
  "key2": "3zR5BhRbtbnGQ1zb85W5Xw3v9tZ5eP3nnEvQCPsvsWG3Fo7jvFVhGu5eGYNU9ZWHnyREDyvReubkiqjttzRGks4e",
  "key3": "g8RuhtKgd4T9ptcJQSkT13siFSRY4PaURJ8TRCdxFnSZncELdHNaDfjKhRYC9pVJSzAv89GkcaL19PAFkeLxPAX",
  "key4": "Ks2NpPnPAkUEhHY7yU86HHGmCU2DfYmp1gmZkfFWWehefSzvpfgMHPFmk7APYi2YbqHrksnULYKpSxgk8anUABH",
  "key5": "3hKVV9RjqTydnKq423JShTMnndD8TgFqKZQL28eyqBHTb5Kw4SA5u4KArNgERPC9usWoMShREFDDsLeA4VnsErPy",
  "key6": "5DH9KXigCs74oWXnMr3ixpKyDG8v6doMKYjnDxgiurcDGfbce68dNneQVfczCjP4viFsYqgNq3GrQaUoNJK6tPnR",
  "key7": "5hjRRBXqvAfJs5Jzkjd96G8fFPx4W9KwpcXcg9gSrMS4So8a5dHXmJ5cUVvwWAEU4GRXvSHhDYkH4yRq1mKRkGVk",
  "key8": "4Yij6iUFtjtefYCBkvE6QT5R7s1bnuQhGTU3o4vqNhg72eUAZEsJqAEsfXkx1eXGGdHUfZJ86jirgcupFVagfnZM",
  "key9": "3ztQJBeHPbHvUckd1GrEYj8Grppiw82Kq2jWNtK9AUjynvejrzLPt9gDfqHcNDtDER5xNwfbwfor5SjNw3pcPivf",
  "key10": "XuvKhXzihEkBNmdfwB2zFqy8XBZn6WKcdyk2SFsF6yujS1dXWg2GWKtF6hBXP1N9g5CpdpJVpM6vL6jAyWkuBuc",
  "key11": "3Ug3KrwzkDSq11JnkvN8cbJ9fZ8baexUM1TriYQtmRzaSmXrxobAAjgZty6K8X2xQzKjaeserkGe8Xw6FcN6wz4v",
  "key12": "3cBV2qpeHfsWQQirkKsLz1Ywqq14bT6hPPBPGUzMEzsaebtFmyJTD494uo6dNLxNNwdLTXgCmEdfUvEhV8YQuCYG",
  "key13": "5VksLYWEFmtS5ZKzkNNu8DpixPLFfc9hPYaN4pGHLmqCUGwL2R9UbfhjGHx8WeUEdwfkMzL1wR9roNzM4FWUcFS4",
  "key14": "3eREF93fJzMHq21D36gQ4aG6DaT68CrQmgnLbvEjgZoTY5c8aJkqb5akM5nL2utu7gnvb8ayA9JxDbWZp5Fwf7nS",
  "key15": "2sGQ7r8QgB2P71azVPtuV3imwRu7AYEVVTFmKvTvkbnwSxiE3ErtTf37EN5XE7mAHVbAteCSnpd2vNmYFNCD8Ksh",
  "key16": "3GqdhKWDwrDFLzPBdY5dFc9WNGn668sjJmdWPcphitNepmtNPhTdEMNzavokXkMuieHiMaVapSV4XAjAKHvvzmS6",
  "key17": "wdGDJt7vT36qhXUM4JXXfeWPbEap6nugQgSg9BmyAVhYynUJgPYMptHNTeBiBqKMn1TxL5rNX3SAkQZxN9YNw8k",
  "key18": "3GWQMmcZFbiz8neXvoQGjRmefpRRWWYzeBJ4WAE31714G3meJms2Uch2bzNkddBXbKxX9oUs4v6jxGZdnsYB43HK",
  "key19": "33W8TiSLNbNgtDpVataSvKG8HQua5QSiWve41QdeCzTHUzcDgKszdBJLpVLnUvF9CPyYB6mX2Rhd63WAXmBSzk9Q",
  "key20": "5sBXHuM3e3xRnvZfA86QspXa268Z3tk87ALCg4Ujziyi1FTRq1KeMtgjQ8GqYRMFkbFN1EgxA2eCKw7jUzkM4MMi",
  "key21": "2HgLFy8ZtBh49aDprok1txJwUE4M2aZXCS5e28s53epzMkpFp81m516fuEX6spR7EooYMy8UfKioVRuxt4fHAwX2",
  "key22": "3vi2ps7ePA775khqgjbPr2stsNumjzeTCdg4QoQuxufXqY5WJK9w78YJdj3yh3BUp7i3TeP1r5m49HJAFy1ybH4Y",
  "key23": "3hDJN2QHwUGG7GaxMjXPDF2FMtZ79PSSrowGUfakJWm4GLHxRxQ9moiGEU5ZwBnyBMX6Q1nVgJbZV2NVwEDnorxU",
  "key24": "McxWCGpyuUu4bL6NfThNAjJLycuiX6EjBUCJRtc8JABh4vYNbd2dSjBNKuTmBcHAsapJmrJhMJM47bohcsj5a3J",
  "key25": "5axaxLp1Cm5C5P4h2brmkjGVEaXJhrnMKaQaSXAYb5i3PB9XPZ5GUb8v7FswZamCoft1qDr7KHnxWmzjLXegAQ47",
  "key26": "PRTrkSni7dFxY7P2d1QQfyqVADaNHHNrHPU61h21vhVYgAG3YfuYFTzvnin5h45UTBpXNhTJMsujjzNYHWCkELw",
  "key27": "4zZtUMmVVgWgthG71UQxVo2BmrBCYznXPRPgtRqZ9iSQUKKgff3LHnJgwLHLA4NeGiMnzr9fZBN3zQ4gafdJSRGv"
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
