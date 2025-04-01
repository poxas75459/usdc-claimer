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
    "31ihPHpVBTU7fth1tmRCye6jYY4atbGvHJLxyMFdXi9xtebuh5PKuSohzYd6pENaZutXa1B7VAxF5SVthHfHuDZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qq3fbjVXMH3ZfHSaPsb7fcWj4Y8iw6Gr2EBBJLUh2Dr4VPVHkKPAcqAGuPZDioQHW5QHyP88m2UZvEp4wuc2KvA",
  "key1": "4TyMCMw97vvYruWuW9TjSZxkVfgPzYDJencVuDjmmKddQRUZSEP7tXoP2pLJGqfFmEXWrET5BjDSRuwS4K5vPxbW",
  "key2": "4u2XpMizkfWpW8duJc4X38WuTv7ee7FRBzD7mrWvhm99QuH5sHTHE3d4yktvzKZwJuDwWvivu9c2rEQCvzUkVT6n",
  "key3": "4D7cPdhVLrVxzre8dA9tczq9pJUU32cNQNyh1kCirK2z23VxXHDj3DQfqPXTMGhbwBeQ2yR3AbjwTYbBZLxKaiiS",
  "key4": "5MU2RydJ3SGeoj3VozXqLDi3BMTL1wHSH3uPp7X22HPNyZChXe2PAGZbmzjwtRHaYwS1nyoEmZ1JiLriqcYARr7H",
  "key5": "3uKsfTXhVDRoyMcoruBJW4jRycUXAHGMEQJsCzFPT3QJzSLtHURHVLhWxDbwRzUqNa5LLMgS47vgfQ6b6Cpa5jRD",
  "key6": "5xKvEwaxvpsj3t48i346bm8kHQBVjeTq3rWbgND8XKGXDJKcT9f77TvgbSMhSB1HSNpf8v1PTtLwAZq4dozxDksF",
  "key7": "3P8cGPBg9L8conSBDEKffQfaD7QLDzbVRhUqi4kEe2cXXyHR3rF8hfDRjd1Q6qMP9KnqJY8Mry3QCCrMJvZKybxX",
  "key8": "3n8s1s8bhxAkewts2GED5J77KeJjvs5npk88fy9jHehyv4otGnLVVuiCajsesTRxSctkacggEFBtLp6rnQDhmAm3",
  "key9": "5MKprqEZkbS5kY2rnyW1yxUeV6eqGU6DJo27gksre81GtUqwYyEA8W4S3pa1QLrYDjYMFMTwyCH7PepdZjQG6Bov",
  "key10": "aYXbBbGGPV9sG6LLN1aGZxCNZss9idfT6TrbCdXjQQKkVfx5mCYckeRi6AmzNzPNgaD1m9qXQ1h7SVFjw92GTxR",
  "key11": "5Wb96Bg5fMbeKkZsSNbo3NPUc1Qq9tFdbG8ziug6fnRGZUSdHQuvHqDo2DPXeAtJS4USisKNZX6XS9tMbKPLQ6TT",
  "key12": "3stDVHFY2NaQdACmwYvXM6ZKEASNVEu1UjFv9v3eGBf2Z9rcyk8DJoq9iwsd9CgxmJwR1r9NrH9JDzSMe9ywoZzC",
  "key13": "4cETvNGR2pGWyCHwjWA5aVwoQ8GCfFMwkgJSR2fnXxKkVXXQTtAFgyx37zweHfTXNNrbWX3q68Ak37gw9AwdjaLD",
  "key14": "2sk4Yf9p1xR1ZLGnXRFSwo3TbqjoBByLfhWQcmyCMGUM4z4JAjmcoGJNzWC91tsVc11goUoQQAzfMYiScP7N9L4B",
  "key15": "5tZjcm6WzkM12zZwVG6T5B2CHGFEm7yit92FNYdKSzdaK6JgbLijUM6qnG8fiwLJ9VHoijifdyjsnGbZAUgWuLMq",
  "key16": "52YvdFkEKrVX5ytEZtSuXofdjyiZZE4ktfvogaPhggUyZKXQHVKi8hEYyVueUrhjzPPjxd5cAaD1f6kKp2rYZgsB",
  "key17": "YUDGpkNCzarqZskGNS1NqYsESDfbkiB4RBM82d1uhnhfHrPjfMvvvjAQaz2vyBxknd5NCcF3Uj3C9YS234qTECy",
  "key18": "faHp9AC8gaLSiuJ6HWUcSRJpBP3izqRwLi5QLkPkTzkRTX1VDGTdHCR8yM2u6pvV7AMMmisXXrpMDWWxzqELvRT",
  "key19": "1JSFZE1dW8YZ6vG5Xnexccf5rFScfRvUA5mUbdgKUz4DT34zzK191q9eRg8Aqy58Ke9MNvsKVYZVQw5gfJCUaXd",
  "key20": "FZkGD9j97dtf9KiVr1oQ19aFaxneN7njgLbEoH3hbKD5HdJiKw9roQRen57pdguuPUCbhc99o4iW7CigZKRwjJ2",
  "key21": "3QkDBrb5GzG2z4qTMSrx3JKR5xVsFAEmoRr6GTFaDcTVDKy626o9H3kkkwnRDMcCBEFmzgGSJt8kBpeBKSvjXrCy",
  "key22": "5RH8Ly8VwunykQhWpPzLEqY7tD7Qvf59WfdUgBJRJectGaEuruLrwSV39WtabqDTAxaStrpgC1vUVYsHtF3ixsea",
  "key23": "2n7AVYUrNR7h79PdwXG1DMa8zaD59mU7kuGPD9ktaREhS43DAPPPX5P7zgF6MWhhBE4Dnnp7NnDfyS58F77qg3bD",
  "key24": "3XQUmrT4AKydaZDMEn8yLgHzLMDcCyTWVZmR6V3ziNvJXusCf74eAbhLpRN49uZ7xA4YnCLhGHqFpepf6KX6Vzeb",
  "key25": "2wLrcYExaLzAjGLaPCygjAgRbXcZNoLBpWDqmeEha6bq3nbfZYT69CQDGrP3bR8HoAGHYWdDRaEQe4FntQ5qFFe2",
  "key26": "5L8CFXdQ8w4T4SHRjxVkMpHKLE7qo7jKXTXeMnBmJduVSMHCtbuiYZfzXafYqJTXJSEXkRyWfwbLS2zLcQp5d21Y",
  "key27": "49xcfzbWs4jT6JY4qDdEywxdVkEFx48PdzhBNHpv9hmzdLr12ZY2vCKGs9KWGp97mU6tvBKLr64WgFCxtKR7bxdm",
  "key28": "xjELQreYUQXLX2EyBKyAsV1Sc3RJbchS3vd1ktPXKEg7kb7Xd9hYgYNGYpF3TWEN81to1irq7offCeSN5gtZvWr",
  "key29": "3CxCqHmUtgMJZkc9FdV7UPGammJzGU7fbRy3YaL9PzNCy1Nv8gwbPn1gk37FJKjrfVY6pMFXpUTjPFDHWg3T596f",
  "key30": "4bptjMgpEtMHJzyXuVEKk1ucBPoRx4tt3qL8iQdfRxRzmT9MimSZ8Dr3V6tHBxYM9z34HgKP5vaeu1TKSxhLWD63",
  "key31": "3KCAuoxvGDu4QdFuYmDcFcj4WCprffeqeefkuGekFN2G1JQMHmX53bcPpBoqbPHCN4sxDBa1JqRR9H32ctrt34BH",
  "key32": "5MsBJWYmzrjYCRhB6SAFeTmaHKKv88Muii8araiNYhNpZfhww8ytF4phD6wnJkdF9EFf1XK6Mc1BvDYVEAtbCSYD",
  "key33": "4qvXzxWYrdccDaEosmfwbE3YsQp7mWJXJBSqKQWMSDwnmdPMsWhwLbCxRu8myXpfnQg4b2PzaRqvsbKibScnDM9p",
  "key34": "4RugmxC6QyWJ6kxD4NdGHKrSuwLGAMEX1GTiUyjEEJoEZU3yrQ8iRetY5qDRJs2YHX4AS3xDdsTD1K2JvYnFm9XD",
  "key35": "125q4p1GNUaNVk2dUG7U6rn3v7Ni7brtSAG4cvJkcYUnoiWcMr6fGPU8dFJpnzWbMqTX7yMVSjAqAYoz48M7ZgHx",
  "key36": "3bQTAfvU6t1NDybpRCr52UAFMPxZPSHvt1YxxjyZAecC4mwSkctN9pLuNmk8k3174arttHJf1BNrFAGDHaYd1WRY",
  "key37": "5MJEtBkLr5hSNTPR4xHKP5wDUicx277ZWRf2MVx4rWDa6XSaAqLuy67NFyptMCftr6Qi9osTGRS3QzgWykXxwBVM",
  "key38": "hwc68RXFfHiFRqPDfYRycJjEfz1sVfxdDySFJGmR2995DoR6knmY3FE2Vme3QAZmG3zr7B76oec9G5kbGYT3MDP",
  "key39": "4NkbTSECtURnCFPTas2QUBnxdA25nP1zvA5it7sbFXRBdTqrKPVtMcL1GtnqgJRggmpT2UoWN67RSfZePUModCAH",
  "key40": "2J1MKrWS3vi4hpdBwvbFsvicm6kuSzjdm9Fe2eyzaDessxsLvGytS28QAkpmCkYar3JEYGj19tQ3b3C4rUBt119D",
  "key41": "3rVCTHLHvS13ZmNTCRfjUkgBsJj4EMHBFbGV82mshXrfH6m91CFqegVaD7u24tUqRrDDfPhtJ1qTiNf1ypLuu7cN",
  "key42": "3GH9oiZs5MYvqL7V9Yx2W4nQ6ZHkpT2APWTCTmUUxuN92R2kLqrght95TVCjQKMoRvfGJFXXN4C6Vp5dDdsxtjsY",
  "key43": "erHHabdF5ci85eT9ci6fhxpNZahBE8oTJr4CKkh2R3CHmmkBjdDXuP2B1Lhyj4cddyFsEXVYifPa7YD6dURTQXv",
  "key44": "33k7bmqqEYoHmofEEPKPq9ZqZymajfQJc4jtyq37hCButpEWuieNYeoogVtxVHbceX8w55nZbHhNZGXMyHs526gX",
  "key45": "4VvPg83WDcCUkMtRt3ezkbkLPNDXchhq1FPwq4jEjNNi1e2eviQVwQSxpJzBBd9uHDJCfwGbXmzFTAMniQTa9Mc3",
  "key46": "3AHY9Qt5H6C1EbCeqPayzp6qhihCdjVgL7AarA3CNPBHQrLFS8kfEFZFwPv8Ar3ojfkshx5yPMzM8zFR6cyiK4gZ",
  "key47": "2HiSR5R99yiZEL8Baw6EwECjMEC31JofgtsfdvvyFKzGdgDmwoi7HG2m6umGNyHFhQLRnsBYdN4pZn2DXeXxrWEL"
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
