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
    "4y7VmL6g4a4SGvkSXR2LZwucnxN39iE5qqRLxSL4bUgKd37gjZRauP36hktAchbfdso8bR9HXM1c3UYkj8MSnBFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ng6XBzBezpmxDfpEvemeWvK6McuTjXK99T6xuWFKwKp6M94Kc6aHHVJn93kELKMn6tgBdnQe1hYQ3pZeyFKMD58",
  "key1": "KsydLB64vpwj4TKYdi3qP6DH3wEmcj24Q31b9P1w93nZJzc8jSm7xD4S2xeu7pxeBdL6fcXjHMzqKQVy2QbxXA4",
  "key2": "5ytxTejUuYjReYN9fivZ6vjw7FoRjWLMKg4MdnsuUmqBuFrDc5medXf53jYBH7rfMihidcuz3xhhL2WCMnAdxdZA",
  "key3": "54GsG1Y92Cho38KracfRLZANtiFCDkFSJNUMhTs4CuHMwXPegZG8z4fPKhAANDFuTcR6ymWrVqj7c1nG2LEPmmvg",
  "key4": "3Ag7GeiWHMZcsC4Qm8qAnj1nHVhNTyqUfdGZ79Xjzr92fyqtP27MGXFexQ2Wn6gFrC5BrffjjTnkkVDvzMkQXLPU",
  "key5": "Mqogg7fbmQHC7SPj8JG9mdwpzgsvtdC4TLBZ1KRiZpxT9sqjdbHY3WG1iAAJS1xQznh92WY8wkNQjTymQLZAbgH",
  "key6": "33yKaLcciRqKgKF6VuegwTem7EsDRL9dK6iiqQd8U6p8KpVsFsCJo6J46UDWzWnceQrZVZKtf9QeJnasnbcfYm7c",
  "key7": "5hXfSNystnW8NBM3npT9WXjPCCNpCVKKq1YcrcGcaF1hS4ePEgh8d4FTeB3nxhSkEdu3ZJ9xtXcVzLSBptNBbjv7",
  "key8": "3H5PKGmkQJhjK276RGEMgdUsmjmgJJd8nAdn2hs7B7S18rWTrynhENRm3XENd8qVtj5QDxJUrx4kkbZZmPajqBNq",
  "key9": "4ugwGDeGVPUxHZEqeMZX7JZJqMH1bJRNXm2QQAafG3BgZvNvnXTPBUTWZABH6m43Y2hfSEfDBSQ3KKp1Y3k2sn1D",
  "key10": "8NR8538iHe1aCZ2yiQxPoni5Ty6kJ9fD7MXNJJobX4sHuQbPhsMYQAmp28Hr9E1aaReKXb7QQnMjuY6HoLwJ8oZ",
  "key11": "45HAz4mduQRocLEK53uVY4LVSNhiyvxZydHysT6HDbUf9h8MxMo59FQmUh5cUjfpnJFJmtceF4SqKEbFcE2GXQaJ",
  "key12": "MJ1w7qn3mnCeYhrvw69iXaXtDAaBM5C4wLVfBjX95HQnvfWPkE7tbrSTP5EwHVCefpSfWGUBmDgCEC4kpYmHu1j",
  "key13": "1262v1nbkU1YnZtCZoxLbAP4HxKFTyYsEy5Vk43zERAcYZDhxtmkYdyGcdY5a9KbHmhexC5bJJgmQ6tchm1Tx37Y",
  "key14": "28NmvGgsKjwYPzTPw1ikmduGc6PBJRxLjgNxyYiMuoVpFLJ9GMdu9Rm9dwniDmcZmEAfPhamzBpsRBmPkPwMeqg8",
  "key15": "2BVpZVUF5CGMYgT4QM6sXg3HQDrrqs6urz5ZconoGiqZpVLr5MyVkncBnfX3SfF2zF6DbubKFcD7bgLJJ8Js6SQC",
  "key16": "gtqBEDtDbT9if4jQTTvkSo3r29SXAAw63BrmUgUTxMKkzxzUP9x5cqX8jLG4upYx6Egx94RbzKPfi8JK8HWLQt6",
  "key17": "5gVeyT863iCZt6atzHQWCHCkzYu1neqdKpgia4VDBnbvXEDgrARX9KqctPtYLgYo5Bh5fBNiNQH1jFkS96NQ9E7a",
  "key18": "5qFebBaGChMj7LyLGHVBzkjJvaQz4pBDHfcu62qYKXaYrmkzduqi5Z7xhaBDvdCxGcMUayDJGQwnpPWJziL3fT31",
  "key19": "34hBFKw68mKyc6keFvffn7YtkZzcZU5gfvau66dYQHnoBEUwsRjCKi5Pv3vUiCqrb6doHm6aEno6RaUdd5DmDSM1",
  "key20": "4edcBwzf9opAPdgcWHZJKRNa45N1311eKcJZJ5z4pZr79EDwkyt2kCL3jniLtPFL1pQyJXnF9L1MrSpYeFA6Xphq",
  "key21": "63fmTWLyo9APsKNvKwdpa5qgfyn1Et1YSr6ipbVhcEa8FHup32eCkiWtjqTmXhYuti72Js6ryXh6RpcrucpEL4Gf",
  "key22": "3EWGuN5pAoVQgcTYG8pd584nQF2WZPt41Spyje84e3yiZcBZpnNemEm2vRojqnZAK2D8FxpfbcTfmSAQKaopP8Eu",
  "key23": "3sGj2ygYwEttKv13fXzZDV7KNybZD5d6ApmceZbNNQTdkEcFSkMoB7D1zRkPjcFfow4ebsCh1wFd1msjXhFrbr6s",
  "key24": "23BofLWELpZqUBmQmp3FPB9Mr3BJJPAgHZTrmoDnvqG14zaggkBciAxZb5wi9LLxKPhkBgsuQP34qV6oTrHR86KM"
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
