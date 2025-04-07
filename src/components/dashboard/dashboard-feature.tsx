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
    "5VvFMyVGDNqg8yoyQSTuh6yaDwUWikVeioj3Lx3163mw91JiH7xyVy7t4jghstbEdCkV1QvtDEKo9gPf3KyftZtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39T2RKTKsuhev1g5xxEJj2RCdDQUA3oEF4FsURQ2LTiefWDqbertJfZMLzpNHVM9BA4oXRTRco41PFmhzYwtAAfm",
  "key1": "zA3Y6K9J6ENG2rZQgALNgbAMAsvjATBuUg75hDaKD7ek4HU99KLXzf8EJN52uq8EETyzjSpxtpWcgQ3SCrhVU3p",
  "key2": "65aWczjVaKrNyR8Rq7shAFSE29XVpZGyNCbGnWvnADzDxNRCK9Dujex3Ara4wn95TDegTUXnwZXzxNzewYNvTpDU",
  "key3": "3qNgU95mYa9BBYMzFiaNse5dUojngwuH4AKa3tcsgVLj8S1sT7PxWX7Kq5PdJvHE1Ex2tReBZ3tN4ZFqT6ouKrLN",
  "key4": "CZcWrYbLF9RzYgUdjGz9Ag12TeJMJciVBj55T7GsDdrEJazafcNoeoSCvazepj9Vdoh2PAqbJvXqBGuGkTWuCe5",
  "key5": "5DYVY9t5z8YvEpaHGLwqBxVgvjiHzrt83hqNMUu7CrjN8KCFsdoQPcgmJCgd8LAiqPJk5MvysjgKw1aseyiQSUTv",
  "key6": "3EyQd7V3kM7yJq5UYV66qKGNbwkYziEKD3g86PrCopMKVoADs9Kmx5njnFX8Q8hmztA9TYc5G31CKTB3AFvdiyoD",
  "key7": "9wivCFQJvicncu1EbE6f9S7ACHxzRgQvsFcNGEmBYyPfqQwpDqxgTPUSqRK82sMaD9XStqiaXEd6asShRHfCZyX",
  "key8": "5KxeastFLMDSWdxaYYaxzq2EKyTTp2jX5KMYXiBDGiv3LhKFfdX6xmMNqWJ1LmjtybLTVThr6jzgKKvUUKNcKX5m",
  "key9": "4r5pZnJpbWhduMAiwKT6cbkFm8ZGJj8HGnCDeH2BaPvVTjX2uBg5qviq8q3XhYAQKw39k6DB5Fzb5J2Xo8ps4QpM",
  "key10": "2bWvkdW4Q9r4TdA9aa9Auk9KJpJ8nbcGF4mLKdKmVUr3KhLi68bwcovjF8X4gNqwHZeE6DjcW55jpePEUNoWXMoD",
  "key11": "4WAFwULp7rb3ik9cRRDD7ANy48RVyZpuZbb4tZhaDwAijZsLFs26AeyJmkowg6vu1RW79f8zD6NgNzoS5uTTQDue",
  "key12": "3bWuyMUeJA1g8hJu8ygngQVaNTfRwpMkXLBpC3mTkBXYvuxQe2CNZJPDQpq6CryWvei9Rg5moH5zMgiYu1U7gYfD",
  "key13": "wZE9BcfttaNDRFDZnHJfMVzpxtG9x9BmMWRqEpi5e7fdUysJWQDEpsxBChnpX6hCkz2bhL6ie4pWuzUVLVYEZEu",
  "key14": "5T66oBQc61s7oDinsgfwrSbaGDYJLS6bqFXG8dVmcsY36MhLi2R2jdeE4Gsy4MFDbKv2eTgrn3sG3X6htM9yfYpc",
  "key15": "3ibLXMHEyTwaxsSLyJP93BkmAzWSKxGXJXkr1AFrw2PGgn895yPd3K6shfWPq7RnU3dix7ryzYw2KAkzxtWk91qh",
  "key16": "21U5wrMHELxsHuRaWXdCPKPZk2WAgL82nm7Qi8V95D6pVBW1pVnQawEZwMQsJLehhSCiEWL1uB2cGmQ4gjoGAboF",
  "key17": "5CnJvxnnFDH4dE1u8Ha55GjsegsFpKQb7t8NgRpyqiBXEuFNVNY5ZzsMZUyZBkWLt2d5WqKCT1qQnhVzzPXtxeHG",
  "key18": "2iypT7KasnDR5JGXHVJaFgTiDiLSbeomzV3S3YyPV2DtED1tqzVC4WHA6vDQni2wD9kcr41crRHzc1Y95p6ryTWg",
  "key19": "2H6U26YML4v1a6PvZrpnmFc52Ur7Mxy17K7HRsLHmqVMuQeoLqNffkXKe871FvjJ2bhCoQjv1axLihqRGyfucKkY",
  "key20": "2aNah7vDYW6cyUnuKgaQjsSTPvqnwk9F9D89tD4RXmVXWFdMaUG61DEQcQoP1ZBingGycE1aYajk1wkoeRiT9YE4",
  "key21": "2HS7c7NQnSX4ZNYnfSVVBzcxkKy6FiK44PYvwACvGc7kJY6wLhEiaY9PGcLa9px21pe6pHpjgRb43F8BovsDZffM",
  "key22": "4edgkGFZfvNLvWmJJ8uFoEMBCCF4DJ3pT1Uovqcyhs6qZthnumpznFTQPN3Swg8qcpbFTH29nivAWxkdTF31kA1M",
  "key23": "4XoZxFxBpTxNGp2DLYL91jHyVzKp9L53x8hLPo6GwaTKyk7j1dQ7fhFLjdnucA29xhpmhHoLKWDAUKN6s79o6E96",
  "key24": "4ZD4AamY8ifuikftYPBDTx5stWXQjCKeM9ThWidyjzezceDXjyaKmgJrsHZzVnGqSWzyqvHV33ZibThZmhwptXab",
  "key25": "2U6xjffpHSDcvtoECoEKVDZQwXAAauHJKsG3ioydt6pk2P5ZhZJMJVXA4AtxUtXCoMcJTEKnNUHzruJMmXiFChjc",
  "key26": "3ymBd3ohcfnz53DpqTVz97tCEdkR4nWup8aBXAfhSbWE4tVzRX3Coek1JPvLTMTb4ebN7mN8viL91Cm5VuiRBS23",
  "key27": "rcNXTNRSyNkstxtXPFk4b3QCw7USPNNW44nuQBhhGdomwav8XBZGoPej4SHQNUTJvb2oS43KsHNE9ANX4sHUsve",
  "key28": "5QnNY6nBJ73kHvZVmuJyaNPEGmqZUjzD566ydyKx5xSn48Saz1oX6z8SBkiUpmfFZGqUaDhkRd37UL9zaRLoGozR",
  "key29": "4RAUhbs9oZSP1csYwqw6bJsVXxBHNyzeuJPdPb7d88Wtua1dCwpEk7z26BQjLyPvTzYcTFrdJNdY7HF69UqX6BSs",
  "key30": "5zYwxn4TCEfuheyGJ6igrhFGbdGGCg5wGrVe9iwyyvhapgyHBHw6xvVXpVteVm6KtXqcnzyvrZKVBvA9uzUMdEbx",
  "key31": "2Q8FTztonUHefvvfyXzbbH8mC6Gyjoqb1B889kRTJYHJpA7HQbhmRadQQy3j2xLQaq6iG2cuhPpZ1PrWci98wBpi",
  "key32": "5F1YU2xmMf5WgPBg9xc9RJKhNnhVSgiQ2F7JjVa1gTVUEiTjzMK8UhUy7PqQ1HvvMoAtsqnsY61pWdgkh1qkDxFc",
  "key33": "qcgoiifsZyDqWqqNrm9owf561A5b2g879uNHtUc9H9tPTx2CTWeBHPbBi43U7gJZ8b8uaTUZHBsNq86w3mkc1Hd",
  "key34": "2iapcKBsSTXGmictbeexKYLHXAzUnMkgCMYKjHNzKEUxxovbpEuUgCtcsz1mUihPQ9rRq7nAq25AAX5tUiyLNx1w",
  "key35": "43DwffpwGSjqrhUnWHb7ZMKGrsCCXiAa8z8Ro57ue2tib3GAuyMrEmTbapjJNTneStf1z42em4WrJ7f4Q6DQpek9",
  "key36": "3PbSnrbUjT7yrnDQFFWKLSHEP9JL6z9SqPU6vu6yXkowcjzLhz9ikSogPQ81xh8QCsQekyWc9SNGG9uwmK2wPhCf",
  "key37": "4Pem5NCE9nLNapfDmnEdB2APZrC3LWjJBARF1T1XR8N97BuxDJAeeEtbAWuBiVSe6eH9ad93XAu6Y4Ah25nCJ51H",
  "key38": "W9eH8FHSzqAzXpYBudrTzUHcq67CUgKWv4D1PqpAWB2cFyNuc76a5CWAUGrQwsik8qwznMy1kaYxNzt7yov1UFa",
  "key39": "3PLZq4GtaQgZwSXbUtQ3fGLj1Zm156rYRdLKx7d2TSV5D5wbNDCrChvgNAjv15xqaT4CZE893AnS2c749rwQsLpC",
  "key40": "46v6RHcb6QdMGvKpaLBJ6TfqZ74SoLC2QxGbw6eEZTFWWvaVCJ6xVrE3tY8GLM9d9wd2oW2aEGZ6ZbHLW43EDVoz",
  "key41": "3F9Fpi1xaMH4ui2fB1PYBqFC6HQi6EwqDQf393ebsu28KN6ReGVxavN5VEGTN93GuKdo3QQAKb6sjkasNUZXjXk5"
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
