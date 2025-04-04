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
    "5UQMj8eTM1mYUDwFPx2MG2D8R3xBfd9svditnwcMWhpirscVTC68avYceXf4bJESqnhtEhHTz1Z8f8q23vc7aHN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wF6YBe6LpoYBGTGWvPcHwhtnhmyVYPmX4uFiSXEjgSxhgPrPsBHpmVAoT55UaAz1jHnBaDEpRA32GDjXQWpDpLH",
  "key1": "2JSgtfY51WYrkPBBFbKYVahuazUNn8Kgec41oAG9c9FHoamPDokTKwUztHkCy4sAuZzuHybWyKQMQ3Luc3YoqDjv",
  "key2": "21w8XATx3c5wkhD8Q67JKuNUmJSpH5ujX9H2YLwqTs6sy819hKyUftWoTyJztNKmguywRUuG2FWRM4Pwmd8eXKZv",
  "key3": "QNettro3f3rYsR6g63qLNTnrEcvS9EheZVLALiqVUwDWTMNHfofJk7pLi6UkP4nB9iSfAdprmNUZVLmtFEFs4uv",
  "key4": "3LYrZdFZ3Vb3Xixa7FTjZhGikL9yvdGre36YaCjaSFj8NFnb4VtXfCwmLsaQ7X1JGAXjQY3rfuyU7NVjReFde6Ki",
  "key5": "25M6qUr3shBZZSzK8Jk9qDS5UQULgSZhXKKRPqJKsoaAo8ey5iVK1TEVTejgurFYDu5AfWdAZ4CqgLj4ZMeVS7nZ",
  "key6": "xQKDSnrfQfQPrCENrqyNUBxbvz6ALK387VyP2GjtMqTKgb1sQxHKnBW3ehYcze3vkmnN45NiBs8Axg8hVQfMQqk",
  "key7": "3qJezncVSnYdRnTyPqLggR4RAsqk8CQAQirxA6axX9WFXyDArTPhofYb5GkLTHrzFTWGiHCqL3e6SfgLyX9wYiou",
  "key8": "3z1uVpg4x2TTfqYAtcKGxPLBKkUHxUY5Vo1BUR4eDTMqpERghN3hUVoLkRkFsnMdQd9zgw73o8JZKjHPoZaPW991",
  "key9": "5rqN682T8eWmysk8wA4bD251Kn47x2vTWXjQHG5evRqMAfQ2Y8kpeikGiJJLzxkGyiLqiddw5gbQ35HCAVWFNqeM",
  "key10": "2fAxHo9DnBfHP3V6v2r2Vhk4dCDWVyN7wfBR7fwsar26JgE6vSgcQk488FZLEtktsBhGZWQTpWfj6yLyVzKdWvND",
  "key11": "5kucDVg2CXB5MBCL98cFpqcFXxJjJ9UfWPftMzuhy1ji3j33Nf7zGUhPmnmXGvjK2AfHtXcgk9JrzP3eNUnoyqD6",
  "key12": "21sCnBhgvzJVJeDoV25CMW6hre4DAJTgF9aXovuhmm7MX3MyagEtAgjmS58qwVtF3xee4QZJEnMEWxmiTcefBLvV",
  "key13": "46eitt5uW3DLS7LqUyimDyCKHkZFNqJgsEAn3oMyRDou2c8TtBBEQcuX8VoTj8yMwQZwdKz6AbAqfpxFtSMjG1B7",
  "key14": "4QpZ36nqws3cXczE9Mg2CmDUDamHimsXnUytmJYn2cMs8grAT2jyf7UGo7UF3y1Zk7mn9Sj8RiNGCnB7EeSk7UD3",
  "key15": "rw3hiPiHXwmEg4DAdaSdn1EGq4wntM3msJAA99QT4FPcLWmgkTj1utc9kkZamUUs5UCDgUZJkcD8zE8cDfaeEdx",
  "key16": "h6ZCNphqn19zpweXFSBeqDsFFFzxz8w7nYzDBACnPx7N5AWo2GBHRbAuGGiEMPmhNGUGQcmhBWMxg5fynVRTUXG",
  "key17": "3Gu8DYv6mxafXLmmXcTs4xT5vP2qCFCJEyiuqh7CVysCKEFHHds9Qq52D7BrjNCPhGjEFkkvf8FjBo48NMXAJkGw",
  "key18": "3bLot8jHLo51egfokenmP7aamH9PmRqp2T2bKYQRw1ApqzcbsthzJJn4WEfZQLQt68Y7XgqZs5jaXAu3htn9SXzC",
  "key19": "2yJrTZG2Ld1wa8EwPoBkPtGkbs6WoFQ5B7r1NdQ412PXtDzmXtMqH3eUaRwLMHZsquPTRbRkrd5iecDxSXp3defy",
  "key20": "3iuKdzVsdehrU6bpna6MxZjGZJtmKqjRL9HMnH3WhN1dccVuryeXewYVtMceF5okkszccVALaAPzQ3qxQdWqc9cA",
  "key21": "5kFVuUZ5DnUCvN74DWqN469oj4FtxuVDd3YEr6bmfmH9w1GHMFCf8BGBjdYJV9E5i7kLoZpFaTmMWz8UDRKRbwyJ",
  "key22": "4q5XwqFUpUeUcmMJBLXFiAQRUqzXenA3H8jhFGo6ui2R5xLxghGy7rnDDw9rASNUNHSy1x3tSDcXqRJZxhJSuiv",
  "key23": "5FoA7PJYoakaQsicgok6VN4DpePcR4WE1arTaQjZcLbYrsHXhaft1CNSbt63bUAf1pWDuNtwSYy7qZC4zkybrngr",
  "key24": "3DjaErghCpMta1eRFG4cbbe5QSa6cxpmsrheV2sNj3xCFXa2jP3ohdNScanedN7E4ZxEtAQpYUcWoHGP4kkHTnLU",
  "key25": "3pqMd9nev5vHjV2ceuiekUdxRzTFPEnCrMFh4U6P55Y3dKuEUJFbWy2Rdqpsetq8mVgFEMstnEQN83Lvxh1Ke5Tj",
  "key26": "3xEujaWzoqdqeEiopFoqE4w1gubegbY2RwpLvv2rQhPVnVrmoMyLXsyx3czx6EdKj2Fr9g47xJumADQQYSkL7tbY",
  "key27": "4aeMN1hyBXxXpwoYSgC3y4BP8D7tJXmdKhQdBrd2fWq8hm4TNy8trWzuryGXPTunyed5aVzunss6M1f4o9mAsoMW",
  "key28": "23fjEKksLSqHgUTfLsvJaVn2CgRmWY7XT8VXRkNCy62FT1SS6eL9wsPDwzmn2sRvuaHKjTqPTjF5mgTa4mics5ex",
  "key29": "2eHHEgfzCWPb2UhbsN5JVepjS834UE4d1rCxEtj4GACAHJNSDu379yagbT5Tid2jtRWFXEjwY6Juu8SRSBnuLAVt",
  "key30": "47mVEqT1eJMhiZ1U38XuF7hzAp6CTwaxnpcGKwEgTHFFsf2FJce9TFQ7bsbQvrjMfrzacfD1ugSsFZybzgLTbQgu",
  "key31": "4jMhTmi6uamj1rtZDhZviW6YMVQaP2UJWmJu5R7oNSUbXn5XEdK1L2tYurG2BaQvxFEZUjhAmieopBF7K6cM6unw"
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
