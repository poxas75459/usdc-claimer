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
    "2g7EdVZsgeX4NJ1QM83SgU7gBt86fmjdxUdgi58s52dwdtsmGvkkegBCsHR9uKz2cyc2y4LKRyTkiyz4Pe2AV7me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGFmfp7tVv6QbmqQkZA9qiTf1qSoeEmSHVPVSqWne7WKBvdmJMw5VdBGVK6Y139noE5TLNyqExa4CWYmSbUWuVG",
  "key1": "2bwKY84Jf7ZDNhsq4PPhCEuKRkghMxM92KZLqHobjqVfxVNmc8LVgCvgLWJzW1GMHMYTmSewBaVb3PbpAQbzGvDu",
  "key2": "5Y82Um1Re6caSqRLTH6gVn3JCyHiJmYi4YaGBq5bgxYoKW3vRS8eC6DwwYQXwbVtgnVpmZtmdPVGsJa4mtbxAHsC",
  "key3": "4RvAZsMyo44NUTpR1ZrDcRuBxZbQKPk9c5zUzY7GeSXj8EEXLLCaeqiZ1EsbK2BxzFgh2VM4azvcJqkFKoumaWDH",
  "key4": "62sBB8AN4vW8xyekFoqkdS6hHvhdG4aT4VryF3w51UkXvX4gDgaGssYx6dCGTEACBYazfG1n2GCQJm993Sx2jNey",
  "key5": "36HTMgQbGNxSbgKUAWCz7hDCZ6ACxRwB61xxX4kHvHz7KocPtghhs8jReaXPBpbd3xJcqBwo8kYsqKUof23BbRBi",
  "key6": "5rkinQUGxfbAJfWM7mhBQPkdPWmFtb2V74A76zPenGz9ytYDPWX1BKMzjzin991kpZBAQkCfsKGbtA78wGGnAE1s",
  "key7": "5Rkiw4ZKSJ9QkcNZytC8UDzJcNKh3rRdAKzT6yP2MEpqzWYAL1kZNq76wRz3XwcUXGu6wcFLLTzT5zFjfFuAYkbe",
  "key8": "5uVrDhXkPG3vVGwkidJiHHKiYrQJm25hg2PAYmonAmqiWU9MknsSwPwcd5aG2JQaMNifg3JWfPrt7NyFaWCzoRr8",
  "key9": "4us28Y4GyTagfNa3NYcvPyPBQ1eUuwAAHxn6xcVXf18bqDgDfgH67iKKK2mpMQKJ8XUKDHYn7XxMcYR3DFRPYB4q",
  "key10": "ViX8P9UgAkkKiXPgJDUHZnNp8zHymbFjbxAKC2f1RNZEThFrKXMhS4ECRJHsYG1CaAoQdD9oBZMHxFfk4Xy51ay",
  "key11": "ifSv6JkVaLSXpVUrBhGs9bEPcZmaMRoesRcsRT4D4YWBwnK32RY3LF1jpZCkqQRZdBu6Cts6AyUr3gLCBiWmDNK",
  "key12": "484ys65KfLDpo1jTWNM1j9fHiEqGNXPLKToTELWPXT9gU76rvHbMcisrnFnwS1gLwAqY1jXXYWma4RsP6XNQJJcn",
  "key13": "34vRv56yEJg8rL716DQzAhfTNWhjeEDWtS4zf1R69MVgi8mRbt1Y5WisLwbku6KwHd5CKgMyy1YWTom8SwdDNhte",
  "key14": "5eV9ZPWm6nspAdznSyo28WNeBEkHRotFERmTZUkpacNXUdbpFEXCNFLpdwUNYNmibcCd47iRrV7aqJyxfCR48q6Q",
  "key15": "2VzuUuw7P32x5SBbTsFasbJNtt3eH2sTShvG2MeyFwhApebfGtnr1UTtjMimxbq7pbP9xVJen62GfeMY1vppYr6C",
  "key16": "bg9k7dBH5tqRP4DrxXfeDvLL8Ax5Eobmtju8evVM1zP8qyCrLJK8Tpv8YiBxs6C9kZ9g4xBoLmsvgCxmXMHCPpi",
  "key17": "3Dz8aUP91ns6WKU5SaEdBZ54yH9WgqcraNydejyumbKZVAAXTVc4mgwGEjtBiEcMz5Qb3W1FEUtoLngizU7dU1ag",
  "key18": "4kY1yAi7qqXpS5bV27WT4jr4g9kYEWwKyLjZSunqmw6qd32Q944UXLSsnbmW9wH6jrB3gAnpD8RG6fYBZTW1zqgn",
  "key19": "4PCNw7amW97Hfa8NLLvUxC4LGH8aMbBxxCeFyiVPJNYNkh4Pz3eh7SidwWbUyDw5SjMwcUGAM4UkspCZvVLYGAcp",
  "key20": "2DjMdX4u8m3NtyWq72LmG3rT3wC5zJH4G5oHcDrnym1GhV4d6WKffYsMRhb5LzcUxTGD6Xeu6fkyZMG9TfkLUNuj",
  "key21": "44d9oY9a6S44LzuZhQEpDQiELzYHZzPNR63wiFd2c3ksPokKBK92CxGYQBbLwuqf7zfFGtm9AnxdJFVPocuSPRpp",
  "key22": "xa49Q7hraw8KejCPSRhb3Be8aG24jhKexFAVLVyDLNZH9mVmRGnYTphnHZji288kVrTiZKHqwj6yNW5DhkRTCTk",
  "key23": "4SXNgGSmg8ubecLxYn2xER4ePNzQFjRyhTg4m8U8ue3kZdr4i5E55vjvSDtdznog73ibGy3TTCXq4Guz51AFKT3m",
  "key24": "4deJXZrrbtAuFJ8CEWCGqJUEEyr7Thcfh46BjsjpqiwRmhQ7jy6w4TVXNTPS1ADcdVCbFGXTM6xcFNGk7fkYZ3v",
  "key25": "3z6R3diX6TWr1EsrmJUiuDTbxWvzFXYKHtu4xZoPw4Qt38n6hHBwMkHJqwX2wgBVkbSFrUYNjASudqYRMcEFgKEf",
  "key26": "34JVQLKUeHm8j5q6eLDzXyqF6aAFYU62gcCRn425yPHA1EGFKYTwVhqj9fym2PNL3kMWeV3KLgaJcFwsgDL24jHn",
  "key27": "4zVkdgzfSfEBc3znC4PT6uYf3AJyLj18VefsXr5XyKQvC6RTcSXcU2b45cMN1hdJbsYdutyenP6oPYZZFNpcrxTj",
  "key28": "4fxWvxYiKXVZTx5kbkh3qNhSToqsUKv96KcCdEcyiMbooTkSiJuhUExSvuagUJe1AN2Zj4jVwuLq1ktgj1so8E2g",
  "key29": "4QoKJT5KuuSjmtiFmmKwBTXhshpFH6b7dtWmVmJdSKz9LNpLzeiGdk97FWmfwS6ZtepfCjpwBqbHoFr9ude27wRm",
  "key30": "4GhzjGKf7S5sJMCSwh1Yis3E1XfWjM3qiJToHGDTym3r5yAdU2hR3JKqXjHCE2y7fNVagZXW8UhXVboR73ufmSyT"
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
