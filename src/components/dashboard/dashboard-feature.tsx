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
    "4a4WrNUYSK6xsb3eqKhTgT1QfCsye4PC8qfn1MANqxjLUjF1ZSFPgMBYGQNpAmVAQ5Z7Veq2xzZt9k6mR5De3AkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7H77NXBTRX1y33DhFwGLQ1KQY4HLYSXDXEZwbufJEsFLwefqre95PkPG9EN338T876nGUa5G7ErdeNuJF8XnEN",
  "key1": "3t4QjxHN7aVMvdQGCkXN845gmargdESqF6ppbctB4d9PpfyLUFPAPGTQ5xj167NwN2kvyxc3HoLy67KNTMYtGh9J",
  "key2": "aLsqix75v8bkSo35WEp1NHCKsUyPxNegfSWZvfvqn9HNd285oJRmknMSWdJjKX8Cqx5T5yBZxHgrnoeRv73ktE4",
  "key3": "3zZPNcDvg5mDNDhujFQMUbRa1FME91XtmibWgR4zSCxtChqYiebnNjMFAMapFqjGmLtzP1eFDDpbRok5TJYkyE94",
  "key4": "544F47bZZ9jqWPHscj1noAs6CaN9zis1YegeMSaUsvcrTPrVLduRxsbCCKxyoh8qz48k4Le2XJSGGgytzsZh9hyf",
  "key5": "4Cd5VkqLKzwVTrftm1gvvQxeivYdat3xAZDu4V4xpExv8AYokFMJryfBsL86Lj9Uvu2BQVG4XwbzHYezpqPPubV9",
  "key6": "5woYwvyjxGiZGMyxntTknLKdUiW2ykszTuECJne7PCj8KdpUoKMCRwyFCLTtc6YrY34dfP2vjP2hXCxcTuz6RqW3",
  "key7": "2kZRh9u69p7tTksjUV9Zhm4zH9pZ2eyd3HfsYoffU5x76rugvTQK9nmQQkbudbvMUba42ibHy49cZFBo8CNk6vbM",
  "key8": "5TKXHxpNhvyaMyfzy3aM1wF8MrjgmMZuNj4VAta9CVNu7CATT51Q7ramfszbjWRw55ME3AmrWULKhMoJibVNtQ8m",
  "key9": "5xX3h82W6SyySe8BG1dMgZgLByNSK92r7KgbcbnPuwAWyBbSP7r8hY8mYDo7LNq9WB9XibC3mvW6W7ra4xDY38ws",
  "key10": "21jY12SM4JKZCrsTBKU2ESpvJVftEaMbezuzmJrdB2trbrXt9no6ZqGgKeWxfgLoSRAcFkt8czJAQJMBBoTqkPKJ",
  "key11": "28SXFQQQ5Q5V3CJr2G7FHijc9nyKJbfM6ps8A25wWUzSLzGyHxFtFyTz2sk5kCSc5sLqGv1mdX3FQdLRhYd6FAYz",
  "key12": "3JRtnuDcTZgsVr5vn6qkoo54ESbzHyJjgZBhdb9vvWBaB1tgxArosnZeuaZ8UHb1nAmCKP944pHx87TXbsYUrWjG",
  "key13": "auzbCXazib9C98hVYXxQSo2f4s6xvLVj5pmM84LN92CmJnmowAXkWiiYVp47TQN22Wx9gWN1sLmVxJEo4LfHE1X",
  "key14": "2bLBisSSZDomr5b92F9hognMEAi9cMCfD4ur3JhhC4PnaNHXWNMwPa6aME2oJjdeimEWR8y8pcHkKCauzLhcUeXw",
  "key15": "4wj1ra6dG61x5zNyegdEryxHNdWwBb6D3ad2Wp9eAvwHE1Hrqd5QM1CMFZJgjF82Hak8zQb2Fmga2zJ6hVJY85Kq",
  "key16": "44aB4T73Fdraxoz8AejdkJEcUrQaZJo288nnoBU6JaKA7MTsVjCWpY71fmdrdMLGH8najVvrj8Jq2BGVWa4U679r",
  "key17": "n42cF6ccbUVWzjRzdeVALSvjTYK2qPDjM3zLegskhnjAQNMRxeGKL56sFQa5YH68m9yV61PHGTmgBEutmKQHDkt",
  "key18": "DzdWqZw8gi3w176noTtbbjf2yvxP6mRcSnrkjnQgyUPhcTnG4V7Gtn6WKt7v1VSyr2xbsdA1HMQN1M7m8vcdfHv",
  "key19": "3C15KNpMQ8rKt7avAsXcNxdfHqqg9NCWifSai8S9a8oejq45w7wGzWHJuEVGi4NaCA7rEBDHELg57pVpKdJaw9g",
  "key20": "3F3uojWVKzDAr6ZDNPdAV1teneYEZD789qgbPMviaoNYHPeQfMgvdtnyjFkRHqD4JhePPSYDYBfKkX4UTPxkXULZ",
  "key21": "4vSn2vJdw4s7K7Fooq5xjai8FSzfTFG5atD9s94XVKEXWSsJ6pY2DSW1B2KyhKMMXtqHpjMP5Mc4cugFJAXTVuf5",
  "key22": "3wMpeLT8Em9y66YrZsFB5pbXRdWt2CLSwBQQ951erun5UwdFTVRDebcpywT1uks162K5jPwmNDuF6Ur4YXCXM2cL",
  "key23": "5w9aRbCzSJaURHvQiY5RAnfsLJ5GyZnn9ddwmcJxgpfsNHsEgTSoaKynDvZ4k9wMN4ocL8GWHP2Z4LxzVG6w6J79",
  "key24": "2y1kbbGSiUPzLUpGwHyF724mNXiGnq1ya48YN3wKPDDqpr72kqYV3GKWj2dCNuUv7DtPFeaQrHVs5ZUiyDNEMjjm",
  "key25": "4kYQPTg4VPhpbVaG9M2B71GcwpbJgmnKBqHHtNkfMeR8mmWGbTcQeDwx6q9btcrMhwTLzpAJG4B5upfM9Nqkxw7c",
  "key26": "4VZnQ81oTmNQGpbjAUPiNQmvVgXJZFD4gsWiNax6JjmpMpCJfTE8H5YCetA76ajtUQFQAV7dAgYAWyvvNaSapXVD",
  "key27": "3ZTs4dNNjq69FenZ8bUbYyXpS7zZYDSVYGJcoHWNCVSCxk2xrA5bAbAj1f5JseoB1GR3vHjSqSenMCBUsSGrs8N7",
  "key28": "2cAkFyej8yfNsV4Lp9XsZ93yz1KuzysWQuPSLpeWFVAicqWNhE9MyrX9vq8RYXzxtbWeENsbA2q8Z3QGXyhmPVKv",
  "key29": "5QU3goQG11q2v1StLeUfQ9ToHFz6NjbDmFjsv3FcAr9LqC7TXTQ7hpiBcbx7LYDPuZeqQuUjKL4Qgv4Anq5DnqUb",
  "key30": "61RjYz9sLba1djXhPRccXZzvh9USiFaa66G85NCW91TZW3Vhy7SEotMacPyZfedTzMGa6mFiBa1sioorQhA9jyRs"
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
