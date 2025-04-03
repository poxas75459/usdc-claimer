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
    "5beVz8e6JqhrzmsV3nPjhggThMT8ktMCQmvwTQzU4bznKEENWeVHvAZEK1hyVhDoSu6CmJAsSpSx22ShDLaVJHgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQhPvknLX1cQY38235sKz4PwCtuU7cPePtLP22JVpfZ6NnQ3DkiLmxmydw2M2uNxqrqKw3Q9sFUtNrsd7tp2prS",
  "key1": "3dvGaQwSZBoPXxeNXYpNuXipDY9aYtfGU4YMjUqg6dwKJeEV1UafDEa7GL8k9cApT39NXbVGCfV2yn6yb2bKa4SK",
  "key2": "594CWz7GCmZVm1nEumiUMjT8JpPPmc9gsmQpSLqdQWs9NxhQMaeRL9WYN8quv8pYm1nQDZ6y8ZfEpDczrNAAjiqL",
  "key3": "3nk5HHQ89LkW141731uku7RwNcGLiZAe8z7nHgkpZ8WGLgmLx8eXV7AzNmiKf9gCcZGMwtmUqsop4iFdR77bA68L",
  "key4": "5Kxhsfe8KY3zFdTveQFikqioJGdWGAZX96EjhLibGTckex6w2j5by4XtZzw5h6eDbnP7NUMoByMwMU9w4PrEyrjq",
  "key5": "39YbWRvb2bq7ZaFudUYo6Q88rUFKZNCCodMiVxvMSobRMUp9gnzzvBe5bNQXwpYx9YymwaXU1ANyuZZ44LsiebhY",
  "key6": "3RqSWXtzyRxZ737HvazdR4TfDxFhXnrwjArGNsS6i8XtRWye9shsGhxcK8fSiA6g6TR4gb12gnvjLAF69rRVsaM5",
  "key7": "4waMr7AuusALKYWeczvXmwLKZjiCijhi9KhTvXfx6fdkGjAUr2DjFUt9mZYuC7VxjA4UTfLRnXK7yr59swLRTfd",
  "key8": "4hHY1dFe2VDfBuMbVAUqK54d1DoCL8U4qAWXNopqMzyXB6Mjrqia6uKrri3SbHz8mkL9DPJTL9YFgZEfZzjEHcWD",
  "key9": "2tFNJW89GbVcJJSt1VmLspJ1AhPZNxemwB6n7r3WnBDKag37od8dmA1GuHNFHzRFgkWN9jG3RBFQb8CRKUn3t6tL",
  "key10": "3kDD5Vt62ePLBfJyL2Nu1wLP2fw9yzWXqrfRvwUsKQgze5xAW5bpFZDpCgpzpoeKWsHVNacGd4ufZHbULu9LvaGH",
  "key11": "4Rv7VVYCqDAXaXe6XcVdtXr4qPByvnJbNUaxTJ8tK1WK5zen1uMQ9RsbNDGnJEbt1ACtgGLZMPnBDG8CDpvTitaq",
  "key12": "46PaeC4YfuCHX2wsWKwWYNy9gJbH6MVpmWG5DbNe7gL3hvYqEbPadvSqekvVxJKYpd971LysXQ4yg5UME3DxwmjQ",
  "key13": "2wrkuDqajb8vw8VaapymRzW8KmqGfNi8YhDS1HaNYgRYp3YbKJPyc1tkHUMJdGMP16SEeWnphDCZSJAgAvLJenQe",
  "key14": "2rhdJYALPZbVdyekm7dhrcnkkUohfvjSe8LxDXvKJ4gvE823JzEjs5jrSBo6tBC7TprmkUc2bCCewgYDHZGtt4un",
  "key15": "5UHNojUneQ9FMZJnKhZSFF1gdjt41SiQG7WxU8vWjMA4mKQCVasYH2zwQ7mDE44pxxyxmVLTxZ2GFANbs1UWuXpu",
  "key16": "y6ufK2fo5qKuwpgsNurWkr2vWAKr6S5cFKhigEeG71AWpAMK5K99yyLBNDEvnu19jmWzPjKNoUMYeZS8w6cWBUV",
  "key17": "XkHrVi456GiayrN7TJxtYVZzDnJmBjbXKcxfVgQWgu1WGTPmdxPkRfeqymiYQP6igNYKNaM8MjwYm8rCyoskXsq",
  "key18": "4V7yzfWVYe2YHMvg7fLZGi8azsyWmnXUQ3yxruFspqpxSk8xPypCsiQC53cwSNShMDaCNr3tDjfVRhcn8zAcD6yS",
  "key19": "Q2QNqwnEieuvgPcsE4JfLFuZ9HkgHVHgitEVRGWd9JJ86Qtut9zHycgJaDmn8heCrvm9hw6m8QAJVWbj3Fbjjuu",
  "key20": "2SsC9vnsPzjZ2AdoLv7J42VccyBQMAva48LPJtBVxNmSCoS2uPV1dL2RJ94niSY4FfcXeag4pULGKZvgLqv7vgMh",
  "key21": "JHgLMLGDLfu1AacLYHytgKGVZmCuPnnYBDFFkE86RNcidRECca6e8Wx1PPp42Qn1zDbXQctmuzmgxhxmS39C8Qf",
  "key22": "2EvmGEdCdWqeG8XcpgyFPG92snb8wzd5guw1rvze6nqUi8mYqQcDoLXkcts5ibiot1gcH4pNg8GRPMAS5QRydyvt",
  "key23": "c7UPWykZp63wL5VB9qBwmwVPjPGUt7UYf2wNCZ84h5izzVmZC3wvhfbLCTqyLZyBQxwGMjCfZFBSeT5r91KTDSB",
  "key24": "3qPzfn6nYhahP6eC1dKPCFXoKYPiXqLXxSYnRCtVCH5jCt1sRA4DBB6ktYV3DGjvmAr9jqELRwDLVrRET1WjtQ1d",
  "key25": "3FPWBhZVZjFMCJW1hc9FmfJdBJwS3NBgZ7ZKHDnGPysdS3N9g1TFCaWnTvYUkZkjGBbAUEzhY5JjeZdb6oQWjUra",
  "key26": "5ipGHysrjL1ww3d1gJKaySC2gyPXigtTza4tzqMASzPFM3E96TWk613beE47s3JXhPES3yCU3nNySpoRnYa4i3ft",
  "key27": "4hQ15WtoTmRHvMuCshZcJnmySKgjrQJ191swjBHnat9d92aNNyHsw6DmPz7oWX5MHuFBBnpRr47oAF6dbVpTe4Ke",
  "key28": "iJvEzhqJ5pzqQdLfAAyC9sLsSXGkWC84skEiWjzPor8knzr5Lp9rbQWThFYkpQxoFJx8nyyabWhw5aippD6571B",
  "key29": "tGdGXopc7YZFLoxxYH5JajxioxibURTpHDFFKdUrAqPNhqpzoEpG3axEa633Fon2sZKRwHLMtHm2wnSDWE68oqv",
  "key30": "4QiUKaiSXwrRT3D36ig2mNEGKqBhvxw6WaLWSX5ZHWwNp1KJcCG8zyDp4BC9FKWxWX3Kb4WhWPGVWFyoxHumAfkM",
  "key31": "5MXN7Eciu2L4UyKiuT4aEQdbWNmo3BhikFJfd1m7yiwdDDywZKZ1nY6y64r5DXP2kFGe7KHRACoxqZsa8vHidRWn",
  "key32": "4p8djp6zJ8m3dgMubNmFLiXVHXHbi2E2Ceq1jyANVLRuyePZusxQPnjCxDAzfC3xEX9nnvmdaowJHapwNhbnX8BZ",
  "key33": "bZVBdkyCV7SohtbuwfkPwne1jLbfeLvtR5S6LuX15SXpZiA6uNcQECr4rvKb9Q2pARt2hr7mujXh26Rkx97GzMp",
  "key34": "2jE4xxhPHxMyubuURGCmJva3osVNkqMMxzaktkZHfmZuFW4hJ7oDcjZLUhkBdKCR1BgQfZdzsf5doZeKxQMSdgBP",
  "key35": "48he4CkC8XTkC9BB25hK6BAycCzgyhV4CfzAFeh9i2ThF3JuiDUbqSrGwuGnUt7HTyH9vA5Naz6CUmVH4HHmGLEw",
  "key36": "5j2Vt6ugTiJ1pCmkAgvDDF3rcWyR4uZoFpoxMrAD6towxWR2ZsmuhUC9LeK4ftRYkyZftM5LkojUcQ67TPHMVvfw",
  "key37": "63416ujSoiwkgiJQJ9mJ5CUQYYQzjPxTnTE1qajU8KdwWYXoduht58dvJCV9ZcN4iC15LEXFkYXC5cKuqDWuvSTB",
  "key38": "3SwmDs7nvsBjaYAEjxpJtC1CasNBU4iUfT5f3YNqzA1XQnN6fFCaq2Bv8aqTf5vyHo2epcPedtExY7SgP8BXHSWp",
  "key39": "2CJfqa4gT5JmZDAyG5fYK8hqfLQNPFVUKkHnSFt8y4ScDpdLYcc9fPFaqHq1nqThvrvPYuXWhQVteNXwBNxDPrGk",
  "key40": "3yRdxxpNUheeHnj8z3vjAZnYbEqxK4uszaqc2eRQQY1v1rx2ynGt9q6ui3ShFWZ5Mgzmp4sb6eLjdq5YWBMN4R8j",
  "key41": "4UvqfK6akEh4oaprKZQu7nP3jD7HrNAFeqYzS2hTLwfiCKZb4JUBMd2wDbC8XWQGVyY8BiFSWTmdU8AnZq4yRGgG",
  "key42": "3He7iEQso5sBN2Y25Qhr9btKJkMMz3CVgSKkGEZ4Kdpatgwiqvc2t83kjYQV8yfHsnpEb77q4La8FdpUpQ3mkGVj",
  "key43": "QYk3uMZ52o2RhJHvx2XUsCsHfWRgaRrTAeZDxRheNiBRzDv5CS48R3S4g9xo6nPTpJgwkUuQQYvzbuN7cDFna5Y",
  "key44": "5QaRxifVjyZGjry2AG2M4Ng3txBR15FAvjSoCdba1rmJEzLCn8wGbWt5VZexDQGvgHcvx8bmX96EMeKAoCLKCGqV"
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
