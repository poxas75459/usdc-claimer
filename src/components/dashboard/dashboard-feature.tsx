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
    "1Gwda1GnQvcj65FjSkbvaUChpJgrxpfmt6JwL2qqjvPVYfbjwnuSkFUm9CPgEKrMGAagJcKL1Gihro8Qqsws8Qp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xc2ePe7MJmUQ3vtzbrqiPJJg8tp3waCesAAxukXspZMiCR3BrYav6AfoQTHmqFVTckVe3r4MaSTwbcokgj9g2rH",
  "key1": "5XrZL535LiJjBmQui5K7LLUmdB3q3VvJu1J35cKCrKZpTHfUxTrQxfcUXHihnuKvE92meAdX2xzKw7e76DF8dbKq",
  "key2": "FY6eyk6hpwscEfF2vwp1fiZknQa5kgRyB17DJJ3MgBi67b7DLqdzh2ZNnQMUFakLQg5BHvqp47T6ZDyUMz9GmUQ",
  "key3": "pRCBRRtWLk2iBTGE8UY4jmoFoBTHUpqhg4mAxs813fvZfVVJDjo9uMbcRiDDbo725hCXeC5CpW6FQH53iK8P66P",
  "key4": "2PdsMx3az93fFopkAoyMqBkDpj7DaoG2EHH2htJuv1QTZVCoda6uyE6p9WJFJLsgWxcBfio7Pwu7zSu16jQ6Uc1q",
  "key5": "3AdKu3uDR76kWw6okph1HhsiA76tmGQJgWnBV1PyUdMAwexHJW6LjexsYpu222JJYhgStz3LwGbSEmd7SULtHLye",
  "key6": "35Ugsa77WGbmqzqvCeB9xuN5qAkGg5fXS95pP9BbBaCZSRMngsPFRMENjcmicYrZ9QniAjyGq3Jgm3MmgsLRGwZN",
  "key7": "zFqYMZhsdd8kHMgXTiN5zX6GmD3ME6dyPCJcLdkBUdxAGnf9DjqF3HprGyAwZzus4DPbPgAZVy6QuSHSGsmwnAX",
  "key8": "3Q6icHPCjjTB9xuv7uE6mZViP5xjrkZY6EmyMCGckYPihHQk8hvC1X3HT3Vf4opx9opcbgB54dxRvoJPXrZ416Zm",
  "key9": "2yM3H8eADjE7M1oba5qdXFg92r1AeQgBYwB6zMnwAiaY4bkYMHafBmiWrM8CFTqwx6bNuGj8YRwvzMRqP1yBjJYc",
  "key10": "5nFdFzSfhtsx2fR8rC63G7mVWb7NWC3tjVsF5X6bpseeCfL2rfmmCJkJfkATqWcyvMFjwywipDcqesaHH5DTvVuY",
  "key11": "2WBnp6g6yPzNMBEiSZCtULfSRHGmy1cmdeBNRm5qm6ZsTR73zA9PmNeMbzyx6ozDeFq1N5FXpmscoABwBmRcQ16S",
  "key12": "9ggsopM2FZJ4SWe9wWpVR81wn8GgbQNLeVG4dufia8YaTuHdLqauSamaZqWEVURQhDH1ZBbHcgJswmjWwUZXEaT",
  "key13": "2DQMJWejcac46EVXnUCU6GMuE3nJ1GZAmJ9JyucXrPB4GH271ghUMRcfqGupxeoaTgkobCKKmBi8oHW1MvW2q7Kd",
  "key14": "37u4mn2Tty7FYyKXpiDwkpZqTEo8qhptSe4V8gVBRQf7D6XR6FdGJXabnKzXGaxtbdoH6Jjree7m2aEdRvG6nWKP",
  "key15": "5pAQUvzyrUuLPuf8SGS7XriaWa6meLqJzPCXGZvnHgkRiaJmPpAcVjyBykYySs3RZXH6NCPzs226ux5jMg8JW41A",
  "key16": "MtRRekXnrd7pG4HNaJnYELbvFjdjSbWfJNVJrtXjebvSBbmert1jDDs98gv9NTqPEDibZ3e9pjHK56Mq6KmPeoc",
  "key17": "2DsVG8UScxXHGiFSXbHncrD6n1dkraUXYqEjor7k7hqob5Cpu7bx2QxztEFhWMJUesXUVoJCA2hwqthdGtA29iYK",
  "key18": "2AwtF629c6rBQ9bJfNFAdLhzm3C3g73ZbgztVZroBPgvHmqYDhjuV3ZP7yYb7beiho4kBD7PQ1MTW5xYjgkMBWUv",
  "key19": "5pnEdKV11QhDGEeEGNyWw5XXksMBngjQrAFrEWmFwZLBUUw3RTzZyFSkCv6wFdCJEJn99W8merq9tkgTUwMGGBwN",
  "key20": "3HWfsAEAv18FcAbc5gjWr75VV2eBkhNvtoyGWsmRa32YR1kzid6CfZxe6nxg8CcPRearNEACbGBGBJFs5DFxdvRg",
  "key21": "43y9qUNouEFxFJJF1x749pvrtGVzNU2dBcZ9ae2jxBkVVS2EgZWuY39nvqpfVLGCTfkLKGDWitrhnWGLvk57dbzr",
  "key22": "36r8wFFsbJqUw2qvwJ5JYp7RB8fwBQ4rX61UYLuhVpbqnq7i5HqURPYGGkjxsYdUYefseNAPqSvYEfoAPFMKUX8u",
  "key23": "54MGdT3UFy3tS52WKkMkMJDaSiBhitvvdXbRhAbkrv88NCghYmaXh2JRUPGrN3yuNAzbgfSJHcKhDRGR1MxP4Mq4",
  "key24": "3CP2N8MdbeFb3NCEA6TASZbonGVzSPJwo4HMQtXDTHfwk3kh9r78wrSQHaE3QX8mSzNK6q7iv95hPA41tED5XbkQ",
  "key25": "3HF1YF9GZbEYyXYiJpVLmrhfPUaNFUu7TJ8X8JwchVCaiZFU5UdGT44GvEJx9KR93NASd8aaMQegFheRDP5jmTw4",
  "key26": "3bLKZhmuFAxFAp6RRvRGQyiERkv8aCPERCsJVarFizVRZSjKViFqQd7dG5XR3nbacMQNoUKGWxyJSyUU4FKGqYVQ",
  "key27": "2DNTBnLE818B69ub8ufmGiii81avyE7NuB1ywkGXsBSpYENGLHMUUg68LgVfJnKaChTnG8ve6iw2DDX3Lj8BPCUZ",
  "key28": "3ZE1CbrFqKXqNeqmRyQToCwggVn4B84x8RuMiftnLMdfcwuyzTf1UPfszhZkAAUzeL335nXoBZaXRVT7oSv89291",
  "key29": "eHpgbNYDDVEnXHpQZFhjQTWz3TiDxu3HMrHvd6tzkzU5t15ajarUBb8YwLcAxUbsj76UCpdg8N6maDaBHN4tXHz",
  "key30": "3sZJCXfEKK9xjrGeAJDWHSELpywUTXDghFrNhuAKVJsEGApNkkEYa8yG6jftLvjqCoondsY9SHAy6F9w6xCbXVER",
  "key31": "3kCm39yeAHHKdaESdsjnQwLV36WR2ayxRQXJWrtxNayaVTLAkgqN5k5UXCzcxpFqFFXUZv5VUfJB3WNaM7RTThBJ",
  "key32": "2YhqPz1Rf2ry3BjjxABuSM1BVBowqTdpTyh6bjyWpbrbZFfdyJzg4hVNwLXMCRbKeH4F4EGionLquPyZ86jMuV6M",
  "key33": "RFDANRjRexVPWab8mNyXguVn5Uhy2H1PP8qQdCTE1BM7XEupyGJ7gvBcXPnMZ6AjqBHmfNELV4gzUWvqTFM5L1k",
  "key34": "3CKNUghH5mx5sFL5vv6FJ5UCUPjSQNHZFuTTZ6xGL8xF2mrnnvFqgEvdPoUNFHxTNK1xV63UcA9oxSznaqfcipyN",
  "key35": "4sDwnBowACL5npBNhVtXq37risVTAHtk6qMU6U4gYrUZ3n69nnL3iCEfzDwwFG1d5Vs1t5sFJx2QyrVhi3EZsKdg",
  "key36": "5HB6AZRXgciiZe5F5kVQFNmgdKvv7rmrfEoFBjxLNbsRTbfzwfCk1fmuXJX8gbcc4AXb45Rv8eDZRHkCGfuk6qm7",
  "key37": "3A5dUG646dXsKvb5vBbPVxptG8fJUQyJD1ybaFfk2SU1fjL43mPvQB6KmvKtSAiweABPwVJRBvLEm5P7u9Jutork",
  "key38": "3QxczjggeA4XsYLNNPfL7rAp9PjUHR72sBmktucQtWnXseXidhwRGHtybtS7PmQE6R9zQ5R56y2xJKgdwC7XyuEz",
  "key39": "nsfiwXvkjHG6FTR352UDQTrsTAvoLGTjS4ucN2Si9DMuKL9yhFppXDeBn7cJUEW6wxtovymMNSNKLipp8hHnD8o",
  "key40": "2hj7SLY4SkWMaJHeDueAYvEpcxinFZj5mgb5JWk4Gg7SryCoSfdPrCJSNKrgFBsrv3GTeQFBWKHRprffvWxdh1dG",
  "key41": "4e6U7gKv4YQz1QTPAGZxB6Hjr1Lec8qjxMDzxKZKmKyJX8cSgh3P8G2Nz6y9F4rSetpoidzwuKzS2wcgtpiLjsn5",
  "key42": "5i5GTWfqYmFGc5CkuiN8vT3bmDLFzDak9rR1hWUo272y8cQgA3HNu5tbbVEFxS3Sw85YRbTLnDz4DFEKh9jBbLov"
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
