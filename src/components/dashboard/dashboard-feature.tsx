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
    "2pVnB4hHrcSkXkw11rA2qLeWwqSaDNajdKCSE19TtMsz6GTpscTbu7oTzEJYavVptVuVibfFFaq9dJE4ie5xgsuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jh9feDVSZF5131CYPrH17v6n2UyQbgk6NP2uxbsMfErby8J4GkoX3RCVj71jbDZd7bMLWHskjXCSgc6381rH2u2",
  "key1": "gzBUW26gwaxS8PSeoinQhjqx691ojCgSbaZWvvpoxkk8RUv6SsQui5UabApL9bQg2ka7Un853zTeWJ9H4SLynmq",
  "key2": "5ikWDcyFaCHUxHnAFWT5LERZDvrAziJJS7CmjKrrDm4YxuK79EoQWVfwE8du3dTG8vWsGSdXP4AA5FvMhkbJKvvY",
  "key3": "48JNaei6uaXGn1CweZWAWaSo3vn59XRvzcv1yyocaLH3W6JKYENN8wXCCHDdD5AkAoroYXAFQEp55ZwQnyqf8c5Q",
  "key4": "WnDjz3QzkrYnD4XVnGUWP6rLV1rQ5r3kZBvtV4y7cBPBVVGo14Egpch3btn9QRXv4UpxCv917dD6kfBdDtL7Uhd",
  "key5": "3Q5Yb9AnhBJGJtLoNPiUWg6nUfeoe7vPSNRWFi9HPbtpjsFZFELds6UoESsvEg8rFE2EkcWaa8rmgWTsRiy9T7RP",
  "key6": "X58czuTmhW4AjAdNkZ3PheoXkqSZ65o9JZmSM9V1B5U34D3sQFet3FNMWcSWk9shuGnnXCLJQBjtzuKDETcBfE6",
  "key7": "4Nj8NRcUSzrBvZbzf5XUf89xwU7uJLFCnXA8yVVjVqh7BJR4VWdPx4bMbkxZ37CBGzsadcajnC1XUhKTjQqgVrCE",
  "key8": "YSzUTehiyECocf4ymG3VRNUw7VcNNfg2nTxmAAuYSgdSYFrfXAzrjbkN7MDPBrgEmAR8oxPNTwmiz12Tdn7RetV",
  "key9": "5U4Wy9VwPbgUB3PKMe5FM356V8kvsreHo9yK3eLJrRMxGFxyeiK2ypAwmqY49PBMuHF6HGDE3UrdUawowG2RdEg7",
  "key10": "5SacjFmyPuY99TTiFYrYWfbAahoYpvJteNq6BnUBvxFcY3jkKtFAcrtP4Cw18QJWFaGcBFXo8Vu1GDHkVordnY3R",
  "key11": "55eP3EvCP7qHneyKaNFhhzJrQxxAFrvDGiadyxdcD45aBhGiTPA4X5G1g17VYNbWSTobGZmPdZgKNQaktRpbFAEA",
  "key12": "32ezp6NYEsZU8dDTqXqWUx8WfWGmEqS4og8Nk3oUGycKRd4Thbt82UYUL31sXQP6iTHX8bK7pUkF6b1i5xhixvuc",
  "key13": "2BPSs1knaKRiYXDaXAcGmYtCR3gz8sMnp4CB3uUpedGYPTMXbZ9o9hsFn8inJiSukCpbXq1yLSmRP5yYCLSzePfW",
  "key14": "5XNsxdnHbp8CUiNemuC5zhCLdbbEgmXAoKSsY9Ds9pPPFX4KWJ89WxQKeCUuSP68jPYeEEbvukqPaExJcQURpPuZ",
  "key15": "FWXjU41Pw5LpVs7oswvm5j1AqBjSo9sSJBHk6oscM3ZeeKY785wMHcxAAsGWJGbUuTL8wdjCvJYnV8JQeUsV8Xn",
  "key16": "7qhXBD6ZE8nYaGknwCxStJ8w1aYVqHzkP9eNqwqXeWDBYffFEj9jimz1VW5gkP3CUpQjChcpkKerqQsUtvDT5h1",
  "key17": "2v2fRv2azjTZmMCvEQNXNm2cHtyy8bWo2TKRRQK2UefH4ubtnxri44gBiUutrxuec1SwC9q8Kk9ZBuWXHQKSnGJf",
  "key18": "3UvSpCJVt3tSJ7YAYtH2EfyTHDHptwSi6KKndTPfLcZjzdqFheCY8S8Qr3Ub8TPmr4yiuRufW9M3vCcwaZtxUYG",
  "key19": "4J1kQmhSiBXEG5ALUeF2ZBQBooh4ZsGj8dp2XfocjaMr1HP9FGXYSSm6j2sZofdfVbg3qMNeSp6sChzctiW7Djyo",
  "key20": "4Tgu4oWwiWJaBRWGQUGythp4ZwCsM79U1u1xt8uadCrGMHHFrDgY4zQvJDP9nqUfCV7rXRQRXpVJM3z427uSzyqz",
  "key21": "4VdgsuKkQ7PWuZ3n2Xgp9cw53n8tHHRxpx9CGDYHAG8aJc4fqtmbbNHA9kjLN5ZEZDMVZ7EvEgErfYBbgsqcND59",
  "key22": "4Q4vtvZiTkzQw1J69RpQV8BLptLgxgrfq911WNTJCzHmNnTkJ8rXMtNoZ9pfaHWv7SGUbsBCLeAokXqfDTCX2Yit",
  "key23": "5athVU6EKjWLhAfrsFuQ2UkZMrN5LTUAeeV5mshCghcvSzhhWBLDMAHLAP53myjpJQ8PsDVem1XKe3cHyJpFWfmf",
  "key24": "Po1fZ7K5h95LJ9DBu8FJ4YVAe7aKgssLZutL7NfG4jLaSLV5iH2H9jedMY1MUnDT7eYcF11AXtgNirfX6s238up",
  "key25": "2kX2MvXKBxrsMXdSF5cscRibUr8nzQeBTA2miJAnU8TVRZ3DxA2pHdxdwvE2smzddyCbHf9SsfdktnohZ9a8eUiA",
  "key26": "28fcd1ToVh1QeMgzPXcJ1TaE5DZdHfNvMVagXwnr7WjEyHyGgz2yJDPphSfs3om17c8S6Bkm1EJGYKm6C9Nz6Jkm",
  "key27": "3GdtZyBAPntSUDkw8F6b2NPVbG2iyk19fj7SryFVwSXx5hSxUkpvgxpGtoz6K1cMgkYkUnsdzD1AXGLap2C753zx",
  "key28": "3hEAS1gcYUTLSuj87uQbnmiN6aYzaMH4sfnYNSo3JeV9Mm6XNfnoZK9mHidKhZt63TG77pbf5i5hJMqGzVd29ic1",
  "key29": "3XmuCLHqHfZjsdSWiDcM9iCrHXY1rqgVgGzM63n6L9qcRmt1AbC7uFXfxQG3GbjX8k12e1JCfdhid3eEAEsYjLLk",
  "key30": "4kkxiELX7TkdCPtkTBnN3WvCcftZDUtqBCUwEK85qGWpCYNrGjMBHtdi8kccLbHfNX1gbQnuwfAsENS1vQxP9z1J",
  "key31": "4iHZPwYXPB6A9EiAEUV1knRGfBSLFSLkon4ayqpUBvKNBWXQ3C2sVpYaywn1ACSpHse4ABj8kMqiSPkcPZry2v71",
  "key32": "4iyjwNso9fJAGFLpMv5kYE8m1iNFtnBF3s5q7Pi93YmQHEeNYFVhD31Fre5TEa3CyvvHXvxCRdLmmHwi9ZzahGhA",
  "key33": "4TjarTH3m3eaREWQWXVPerun469eDJnYGLqUnLUtscEUxXfSABcbQpfAEYaHqSwA4srNXz7fAD8FATaoKpUbqtBQ",
  "key34": "EeQggZ6AKVUjmM5HiwsgCEdAtW1rQmzvQZrb1Xu713imF6HEdZSC16vMXj2J9zdPRUXtDVbwVdeArZ4T87GVYLB",
  "key35": "4JP89zEYXBXZxr8cH4jUpYsMDJFZfXu2bFWK6x5dZcu2VuCbGd4Rmy8YTf1a7AzKSj4CRMwFQN83FD3EKkGP37qr",
  "key36": "N2cmPeCKMy5XJAVf9RTFKaNQwszHyFUKfWictEbweMAKuhyYznfCPA992Es9YvSXpZmaf4b4G9HADj3F4gkMKgU",
  "key37": "5PuiK9aJ8bnuJ3XrGmaAMqEpjEgrvkJtDux5ifNj4btLTbSpvBfCjzGQXxoTBdihtvZC7bXL9RqZ9fdP9yZEXZgV",
  "key38": "2r1JQ9VX8qmmscsKKJeUKvVU7KdoZgYVYcXrZzsuB5tXebhDGgLfx7DFjiyZ9JPC2uKatkiMFMynjtxajzfSvbJt",
  "key39": "47Vvw1YZZzhMuM8bUA68x1q2tQhGsTF3K5kYNkgopqRmceZbuHUQqPjEVsbx8yP5vismyG5PasFRMKM8nHc4gzYw",
  "key40": "bx6dbk7gPc3K5Hwo48RvfeKmGV1T59XW4ChUTPB1wpEWAcqnnkUyY7fSa1u6s2Qm8g9BXY3L1yVUCBdhrocwJvY",
  "key41": "2Lep5xn2g6sxdkA9rK52LNKwwY2owwePekjWqxapwV1E4YvvrLjspnym8AiT6rfns6bSKvfzW7nzJC3UyV1yUGE8",
  "key42": "5gSAbXP7LEQrSYhTPMiNJp2w6PScv27RtcE3zSUokjFXTLGZY4knS9sjhuKyKFYQ6ohAU8T76JB6bz9gHw2tRMdo",
  "key43": "33m1cx1cWEfbWV5Yaj3mjJWdCv5VZ5uZgUoB4zrEMEeXFp1xSKbvHpXzcApJbADjKMQiwMHnTGwu48ZYAhUPmrGq",
  "key44": "4KBAN3viyadPHBdtSBR2p6suMf8jQvgW5aNVPiYQdHSipz9o37nALYgkWfUYGYrEDWvdXsEMvJz8pWCmTM157fgt",
  "key45": "4eh6NYeXKZo25LyybhntHuCFpyDwkRv29FEQD8z83sxBeFKWRnsYEMqciv58cuJmSNA8zqQj7xU9No9Cka45ZbBD",
  "key46": "337vXKunfqEtWKgNPYBuzQ7cfKmzXcw6Tajkd5mqUd9Yuu5ywNywrptJ8hbwFfFUmKjmv4cc7H2jpMEZjBPsYKNL",
  "key47": "63vYCufnWNKH7ETsmyK63hnPnvB5p1cRYYack62JqxDLm6jS4V3NM7ZMNjnuTZ9t4ZSut4Mt7yrvNkj4Xf62Mwou",
  "key48": "5qRYoDcv9yGNxuJyY57nTkwf4GhHqmosZYYusgNNBa8RFb5Pvhr8ZwQimUjxFETtWezmYnKT6qY2buPkF83R6TNf"
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
