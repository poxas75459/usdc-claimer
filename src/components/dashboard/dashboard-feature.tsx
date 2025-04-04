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
    "4frSQcKbRFARKx4NGDpF6moqvEdGRW1qsuh9tsEPwAnxUrEsEducU711qHz5LDapcdQScpGySsK8txmtVnADgBaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s1WDg5nDLt8AWB13v6G33UNQacGDzCcV74h7Hbbx5NgmXnA5tptpGP7BWPwTMMzLUx8u1si5mLoxdMDLioKRRr9",
  "key1": "fbmn3kJDohjWtvVf6Z58HuHYtywVGemtSzk1vAVRbCBHNFs4Qm22Qd3naWNEsq8NkyrFmRaJ7qCJW4BqiRDEfny",
  "key2": "3kPw5bHinw5cA7iqYnLtDPE7aVY7ALxXjESRJshvWdjnVtcXcd9U7aeAAmGp3uRjdfTdBTkhT7WRUCNGLqd16eHP",
  "key3": "ogB117qg58X8gydp5ovVQWb1fktQCv5HL4uuH6JZQNLKrS2VHY2X6r3wPfdcSj7PeJyVuCX7hKhNF1PoU5u2jKT",
  "key4": "5vpk8zSXBqiKGbnym5qzjCXcke6qkG3bMgeyU8J7mZSbDHXMjQRKJuycrarHCjJfvhjftgbdchJMXyoxrKgvKX2G",
  "key5": "3NnZZEwFUg8W2C1ArfjTAGsMpE2LMdg42aXjNmpgdSj3HmNsvUH5wvR78ANM4QCC5VGbtQyy1oaoMBHc1nUfC6Sp",
  "key6": "3xZwXJ8monG1EhLsdo4Vptayh2gxvbYariomYw3ZgV5LkgsAbcb4FC4M78XauY4VrDvMmvswJvjv2bxHvhYwbpcK",
  "key7": "NWsekBE73TjjuGtb4CW5qYrPdeA4ypdiDuK24QMstRF5296sfyqwDduiBMvgPrFE3FRAQftZv5kEhVXRMgkXJXu",
  "key8": "bh2bZbnPNkyaxjTciJdAfEYmavKLEz7fhPS4KpSgQdLbt7YRB4PdZcgrzUy86G2fgxsX9WispyH6FbXBJ6yvVjc",
  "key9": "4ehPsjPWpTBj6WQ3cWwqTqbw7vSGYqp4NQ6jSWeG8hhmkxVuD5LV6rHygaz1jyBhGKndEbwaSiVPARrGdS4wYJzr",
  "key10": "4Jd8WG8JTtYoykT7Lbhne8GYxZtbyVr4JvxBpdu9qvwUu5bTHJvMXrAZJ3CtJsZsazwxEUMzW5iVPFYc35bhFEte",
  "key11": "34CdeufanDbgchAP7w1KXKUsgr5FBsz3Bjyt3HzatcJM187GRARmpeoYiSzucM64SVj2brZRMSDHRwRpNY3cjANG",
  "key12": "5J7LWhpTnDwrEhNCSQBg7T9J3PsUo3m3ZyL4xGZktJhnHvNDgga7BB9FXKSPYqSFuR1RxfqCUQyUKbDqhGMmyZex",
  "key13": "2zs6eYJjV36msqsf9bqmSvpMuimKtdtYVjpg9t5hw1x2DmcHWUXVVkQ4xzHv4fKAJXZHgdpW5gQsGaAzqXVcoA3T",
  "key14": "c2j7p92VnXng4pe3AKLkHwWkfg2WBM1qMCs8AE6KtJDSmh5TRUQUzPkskJzSJp7EQbGu7JwKwBPaxBbfu89oMhe",
  "key15": "fL8zh74sTGHq1MtZbkn8fUWcadxQUKHAyB2D8f4sW1WfZN4ybDHg2cw6Uk7r5gndgaBmU8Lom4DuJiFG5ZYSNAn",
  "key16": "232omQiaAEaj9hD1smSz3H34dRGMSMaAemiF5g43jixi1Js4Q34bES65F9tbsuAhvnu4buyRpfmYiCQefDjRbBvg",
  "key17": "4RCvzf5F2dQk9zhTniuLntufPusu5DbwCcNitKwC6pSbd7RKnx3rYxSL6fYovZyDwp67hYmFZeCajBDxcegF9QXM",
  "key18": "2GUcaq9McbgWYPwe1EdhpRu6fTqL1G9QkAnasFBUMAt71ptzKHXTPYmj6H2JyX9VBwik6RRVyVrLo6ee4Xq5HxWg",
  "key19": "4g3PVcDHXVBsuHcMnpvPHyvUTFCXi1NpEYW2rJFv4UT8hT4Bfk5pS6qn2c8bE5vWEuH4EgTg7qenRiokC57vTe9n",
  "key20": "3ECqqRNKqoYgmwzNRi2VwSqqvSHMmQqKbQyTKMwA6xqqFHkEBAB6rAJdpZoeSWZqgJ38mQChvGaAAY3b33BDhzPD",
  "key21": "23tq85L3iSkd4tnrKF9CQrefRQ7RZdBqutHtAu4QDsBFFTJEhJokiWcmZkoxDhcLKhRK34fNvRAYQf3dpk1GYLVu",
  "key22": "5aMRavwg9MudSiUsdHHVHz9mMFgk1ZbWgonF4LZ1HW92U1KEeBfeQeoDWRuUeicYm2YPAaAtRLhgVgcyQmscxx5i",
  "key23": "3pQVweqSWnHPbRHZU7UUtfn9JRsDXaudkfubKnqy2yR8EFhz3Qb31r2fVEWYDp9pK1SYVEGdijx5Xc4VBfcPcxfw",
  "key24": "2e11P4b7PYPp2KkMFvo6zSvP9AaCQ5CBoshvmvxMneouLzLCtg1ugAnbp4J5rEpsTLgm8KMh2TZhggoKbfmjFJUs",
  "key25": "3Yyj4bBS1tv1XoWGi6YXVSb6B4guQ5DBXBhq6PnbZSZXLRLc7cq9wLD9dWvmTGMwFRFGANTJjYnpBTGsJCrzqZfw",
  "key26": "4m2LsWdJvgAAVhL7XbnK4rBG6Go7LWAuYeALiAfsKPjpywnQV7qS8PDpix6ag56omH1jNregErDvTyeej765SjUp",
  "key27": "5uUP4wtSEMMh3kDkwLpqgfqfnLKcSbxMAXMTnerauSQzNNVrkUyNE2G3TGfnsGjNwPDAW27zZpNjvXcZA1uKWVvD",
  "key28": "5TQGNFtzQnocFBDcf1ztt4jDBzx9gv8Gg4RrN9c71JXbKWmUnt6YEivsuyybRiSmMYgs4uaF3so91tfoUqpm6gBV",
  "key29": "bUQvN811gAFJuPQ1XDMWHM2nDNpMDYwAJXX4apymEEVPk9EBhjBnEZF48ixEuDk41qrpbKyfc9FyAps6h1KdUHZ",
  "key30": "2siqw3F8NPEpnzs2rurFYnaYbbxh3yhpuHm8NspMSsMiLNF87EX2NN3kjcfuBPKV1NwTcVrFWhC3rxQL4w6hShpU",
  "key31": "4zZVB94q1po4JtCJ57eL1fGUUKcLdKCSpwVcUJPmSqePWUrrFXqqHuhF4ouJPwQJpZvbiKq4gCrd2pf11PfJq9pf",
  "key32": "51KByzSa3UW38UZHR6DVMDXtUN8Dcw8y7Egk47gfg5PWjQqJVyYaGbPev6gZcaWXTwLcooVgu9XaoCDJbRXievAd",
  "key33": "4zjfAfL4V9JxKSxE5NyC6XxDmd3JtkTT2x12xPwWW1Sm9QZw528u24AA6u9jngts6jkNwmvQKqVoQz4JLxtogkQz",
  "key34": "3zWbQsHyrmmAFb3raWT9ehE86vhyWD8g83mXRjUyhXJMoKHfKwf7YqSTzwYMFP3cBzcjyu1AziYkQSVKewd2G3MT",
  "key35": "5Bnfra9W3rqkvMrvGeXx9roj9gkqsdrSjgEYwZiRR87WCEFC91zJ7w6d7DWqJT4VAkcMFX4TUAPZ7KKTxyBAbTQG",
  "key36": "h1fChjiqxpz7Eic4UVLmZ8USPyKkpPK9X3t4TzZXvpKWuWnGPmdA3gN8eHe6TvVGQxZtiUvHWaBs7crgmvjMnYW",
  "key37": "rgwTnHsMjFWE2cQ5ubDfmQ9zha6ZhyMte6XER1hF8XidW9hqZN3BG12pkCsmvVGCqheR8ojAnHshyorw7YVMfp3",
  "key38": "ez2nPsowrovHV9nAGPzsP5ohYJCmbADpDHEkon8Tuax1cmr77gNrPXuN78wWnvHfospiUBb21j2RwtzTKcL57fD",
  "key39": "2bNwAx8JahA2GJ4FRW7FLjn9kidn7QQnR9pCjySvrhEXeXpDXBbhs5ekKnuSEcDCfbEWdR5jmvKn4fVnQR6XJFKR",
  "key40": "2QJ1fVCgnSoLupq35w727EG6Gar4SKsiZ8F3qUBTy4a5RVVPZwwf7ZwDVXS194MuTsL3fd4gipAGWR2HHmeRYCyp",
  "key41": "5mtYjcB8szbcVuKzwLWnx1T6x8kxq5NvBZuFZk4nFJpm1AKietQvukdvAPASzZGRLu65fSZ1M2LH1iycLysdKU1c",
  "key42": "roXUz3ssbakyNgLEk2nUvfEYZzS2KDmhAgVcTKBfaBZgTSndHtYAj951cgjE18kyNU8DwDRF9QGAK7xt1fiucwH"
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
