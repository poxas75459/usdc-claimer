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
    "31ZxDrqHoTMagtURUQ8cuzXHacHfG9eLPEdv6UcAn7FLx2Ddj1kR2ihpyvRAsCWwHoYXf461caCM57hkWQjXdMkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M6mghj2LmMmG2vm8ihxt7QRL5FAZiCdDdVhuXx9fBLQsqVHXu2fp4MsPYHkysQBQnM8qBjNKJ32A3NmYhV91b8o",
  "key1": "4XA6obtJdpCA3PTD3tVPzoFcHU3dsmheXQoGtapPkcAZmgmjpu84A9hWQRaYQkUFaqw7g9uvx45T822Dfbezzmvy",
  "key2": "269W86k9sTc2M3Ky1KGRs7FCfp8wnJtoUET3QbQcjgnumcsABXngZWUrmi61SrJ2eLYaBFzysKP4dMYHQdu9LtS9",
  "key3": "jAtX4ZYKVw9HbVR8BWkXNs2Smt63RrF8ZMDCcPtCUgT9wjAD9eKEvbptB8dgAcsnUDV8GUTAuNuHRPRxiMwoREP",
  "key4": "xsvQ1nGozf6kRsTbPdt85i2ZGXCAMD6LWs7WLeRZA7eZGGaZT4qN38mT3tUpk5oT3y6PXRu8k7LHsyFqZWzbci7",
  "key5": "45FEgsYQfinVv9vkuDKqdsHfdUHBt8kDzmrdJMp7yuZJLVi69LgMURtFQ2bh1XkFUX6J5RRAJeBcmct243KZ6HSf",
  "key6": "46cHa7WYA6qegasX1cvBGtPb4FpCbjypsiEq5cZY4nFcDavo1Xd1ntwkvxeUP1rjfYCcNAUcubrD2k4G7mLiiVCL",
  "key7": "4KL4kCHMeRgDKVV5pTKdjVhz7daDaYnwgDiUuq26wbKoL2txu71N4q5jVQR2v3REVdmCBwTGDAmsZMaSpYDihcV3",
  "key8": "49Ka9Nf41YJj6YVHWZuDwwzGNiqAzvKspHrHAXw63tLDWw76iaoz8FBhmRjuJV2gxiGPrPp7U4u7j6n5q7qp8rLm",
  "key9": "2GxL6P7hoFVhyYKmfsviAkYGYP3f6rDuDeCS7u7Q62WAezkLcC6W7AesnD5aJMXdSZGzvacWPfYSmqYTFKiBA4a7",
  "key10": "47ZmULoexpdYpw5LJwHdZb3nyXgM7LmRdoAA6upqZaDmTqmpz5zrKXTMz3jw1Liv2EA8sGSpqB4GmbY1CtY98cG4",
  "key11": "41BtVZjRMwfBsvy2NEotPYPGrfU5teRK8FN5BfWfc7K2tJw3U2gUV6jXhjRkb3QXdbKK1fKuiwJK37VKLW9jQSEz",
  "key12": "5R5j4GYcY5eZuGvrZxwQVCXPcfXQtm21r3rNf1RuCavQz19UYWyUw2dXcMK4Y68sCWB5q5gjjzqYZBNmDC9xzQa",
  "key13": "3UjZYVcnoqfuYzAvABUjXWMvFWBG2eTcStxkF4kXJf68phd9DxaWq5GkV99HCp34nKfe3TTnh9JNqrGWh79R38v8",
  "key14": "5sZAGHTRWRhHG8VuYStznXdr9GppokUSPmMevN5GxZPcPFrLh24Asw36BhUuMhXMxugq5M9pz7w71LQxURQm1ikL",
  "key15": "3MfVtk2ybTVjjk3hqQ92KwKqVrPXFwEcjbzbejk7QLpS9od465di4u4oQvwNmwDqYJsfrpARAP8sHoy28Bwga8FR",
  "key16": "5upeQ8FN3GtQqXgEgN2rvKVfhKe1uiktx1Sep4MGNcXwkBkHMGAeKAsZUsYMDKD2ztz4Ed3aQd6YzccdLgU28kHX",
  "key17": "2ogy5Z3gXz6gDc4Dcnt9ZRJfkykjeq9nswzf5mHpWhySHBMqdCLgvcDsXryG3JGsuhVF8j6affkm1M2u8SkRFkmX",
  "key18": "2qM8gdkYwiQShTyTujMLe4Fck7f45zRcWwqGkGcPQYBKHCy6rbq5pKBSrwtdX6aYi6ryZjh8bHv9gGNNis7KDALL",
  "key19": "uBA5LRzNqN5Teo7sygAPb64eu51tKbww4vsG59VWj96UAGEuT7bTFEm5M6gZ6PBBThMw344SXdNpVWbR9iG3gWo",
  "key20": "4iQs59EQfPsZd4kFTqhZTGKUXL41mBVvK8seLWzEhnJUs5yykgFspU5uZtJn7pXUkTb6NToHoJrqXoho5WLWgAwJ",
  "key21": "5YeddVQcdEctLLMwXjtubwof8XBHZufooYJUL1nJPDSXnTKCCFq1M7xJAZTte7HbTaTzbG7EWXKnPJYBFCsWYUXL",
  "key22": "VBxMQZFRxYe3bpBbpvviqtTKhxWGHUNJu9tujpa977pLqvHYJLugfVqzbirEjK7vzRsdo9iBrRTdM9xqwtAdcdB",
  "key23": "515yRqbBfnzuezjb1DBtckXXeSE1LYkiYiLdqmu8b6eMz1cA54HoEhLLFQsYQEp5C7osD666V5Cj49t4UW7ppbsb",
  "key24": "v2mMCgHD63Tz51t55sAEijgycAALrKE85K31ZYAHS8bxG5BjR2qH8LPxCfDrD12R6aupAgZyJyt8aABqXuB5HQb",
  "key25": "ZQjgv3AwYzv2k2wRa8opxkrh7yZq88nBfT83ZWLiouPGRr6JYfebr24w4pMtJgFBtWQ8R18gjfEVKTF9bJX5X2J"
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
