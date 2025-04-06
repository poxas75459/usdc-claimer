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
    "4MXryzjK1361gTzLvre8VNujHwEK84oP5eQDqqKFcF2BBbvTL4eQnsoyKMrHpRM5vVfzGMsTYDewQQ6FvG1JTapG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yDYv6ejNmDVxFi37fu19D9894x32otGpA2J42mzYoqyTDS5ipaE8UrGbD8JjTFaUAeyv7h2aVxaPGFXAiavspQw",
  "key1": "4vcUxPLLd5gknVndFqwGaLLnfnPTgNdZZxkWwTBFAXo9iFKYQiBzNV2TnmkxxcYLZ1HYaq7NsttMNmuApGskGHmw",
  "key2": "5d7H5bTu5o7zUxbeRuj2ZYSwsy3GVA6wC2BsPVCw2HuPKtDy2SpVhNoVprSnpULSpFHrmZFiEWKvGas9RxMoPZS6",
  "key3": "3YCbtWFUbL69ije6GYECQA1hcVXThJZ2xVmc2ycnotb988TXRa6fNDufdkURfcG85j6kgbphqKWb774FMcH4dxQQ",
  "key4": "2WJ3bBJSKKBkmULTsxkPKskWpG78XqXP6Yczs1mekxMMc2Yei2uGNyrjKHC9kSQc6AsUfkUt8ssBqgx6bQ5dFt4y",
  "key5": "5FyHhDrxDPANEbTAf97dAFsD5GmmwFEsVpSjyHMFngT7qomYMsjqFaFxdmuPg6h593eFB2vqdZBt2zsQbvCXxTHA",
  "key6": "511itiFQ8yKnx5sZRQR5So24MqwJAqaCDDaM8vB2mC3TdsenoJ43wzm2Aykr4834wd7iN2h5mhRJ5qk3BMbndyL9",
  "key7": "WdDTWaSXR1q4Ss9yNVAuqf1CCNPHhaTHhNrSufbrBjWDFBNYd246YCG3Rc4iFntdhj2c3quWtfyMwoarP9gF623",
  "key8": "33dEAeSe7dE8UmvYfQqdqQYJQCU9sfNN9QjAjAKK4Dq7xJVtBo75ngzoqFk2b3cJCF5YLkcpFNrqhyJgxjsZrea",
  "key9": "21WB4wCpz2WLGf8qRMw2XsDrDTxB1P59JfXrYGd1ZMehbWa3viA2nQBDWqzxvKqsBzG3CC6NTkwftkj8aDTn466K",
  "key10": "2xBk9waWfGVYxBvu3tv42bsUvCEvQMoLpoXva1mi7BaWdnTN5H2bEdr2Exuf2KjkQ3ZPX1uRrczucBySASt7mssr",
  "key11": "3WqXSvz7P924rshvHsXbQHKC5KHvnYNwdUmxMfdbmePWNjWH2dzto7dD3aNDkExWxKAxn2TSpUnGfdqTXFVDEzLW",
  "key12": "5SjfTGBY9Jvr3zxeoYgyt4hXhn31gCseJgx9hEEUpEvLx6BgLFSc14X1mV6teSZmTwAMijDXFFZ7tTWfr4MXuVUU",
  "key13": "38hZKXVFubHwohvhPPanKoq5UFer1RH6BYxGRQLReuS5gKHNNvtZcgWUYj1U3xR1UjMpP9zdCB4UQdwtnFHQovJi",
  "key14": "5L8kCdByrptgh5PcRgWj6QK18xJ6pJa7Ukf8j7G9NkYrCCxzyuZGeKqVuJFhru3jtt5TFoa4nQLXMUFcwSH4pAAR",
  "key15": "5MJwrrVRn3qLFVkBfyKpNagTdUB5eFE3L15YgYcB2ubydTf3gXyqLQky9qnQCVx5SEdN6FtSmodLLXSGGHadzQsc",
  "key16": "5GcVuymkpB1iAjH1HjGqEwtDDh4K7g3XUHd2nSqy2si2uVXX5y7CfejCMR35wfxQKkdPRhpiFrvzjv7kEkhpCJU7",
  "key17": "V6YHtW9wq1wH59Et9J4MM3NrjpgSuYQtnm2whuFLi3gfdAvH4RhqqE7sL6rmgtT4qRNcLnSVRv8xRto5dVJbqi4",
  "key18": "szDafFKqXxsYfE5bh5JtwWQQDb1tzPdT4jgUBzkLgXMaiSESjNf7Qs5Xd8rXhExPXBhGDPkdrxXpK9zAi22xgCY",
  "key19": "3gPGVFkQB95qoeabcg8KUSXL5aubGb2eJbSSPkyWG5MjT3d2PffQm898Wb4xNLv2Y6QmyhtXgScLQFdxD4RdWPe6",
  "key20": "3E6jZBYwvceNZZ4E5FsN5YPPFm9WwmJ5ZKyoGQ2nugGGSxCa1KBMwxiSGZX3jpyJPJkpMA8ewx641SjgzC7yDLfC",
  "key21": "3U3b6vPRePpGVVD6cXUK6sA31VQbic9jRZWkxTqwdRFzD8VMqzG4JtCWcWXCbHYbup5mgkyMmSUVnJRHL8oYiWoS",
  "key22": "4UxFindvAQuNVu2se4SkZtB1NkbzM1TYgEnqguZprQP7FGwmVrpmiKWkzn4Ar4vqHaAjJ7fFm2pZ8LhmQHyJYRMZ",
  "key23": "5hmdvgYfq8Cj4Y3XuJX9DQJvTjSkvqawy6kqfBgQgdmArCjCw8tuEfx3nnUKZ3SJa3LpxGQWKKP4gvuq9JYabNJh",
  "key24": "9S3Z2aZSMSsZkqZmphTTScmQ4VHq9jW4XVVYw6x9BPqqmafTwvCF76RmphHU4A4BGBqm4RvatsyTdEuLMU8Mz1y",
  "key25": "5ySoXTVN6KaupxYWwjdKJcxM1QctNoEfUhqxngzav2Jg7zNf32xVVLrwr4bytRSxzyzLMiJttnUAiu1KFukgBzJr",
  "key26": "2faQR5PJZRAgWryC1Qnk8to25e6pvvG5rES3hc4vsrSrSLKk1x9xXkjuv6ocuivV24pusB71DaAj7n45M6ofWc14",
  "key27": "3Fb5C1Qybfx4gF5Y3RdHxhtUaCrcJUmb3gbbsTZQfjWPSP9YpwS7cgU2YRS6xGNAZJFJhMqSfy6KtJwUTPrxN9a8",
  "key28": "5k8DRoSiM89sctw7iM72qmJrngEVBMH7LSJs1cfUVdjiVGp9qbNmCCN3L4kZkvBMk3sErRyCgpcMssyGHWDN6yRz",
  "key29": "dk9URTCrjXz1DPx8ZkL7bMTBptXEuUYqrCATVDLyR84KYC6CmJ4J2MQThCDreC791keXtx46qxnTPPP9zeParqA",
  "key30": "4kYmA6f82M4wMaS78M5tkUf2BPRdo3GJwkG3d8ZNkLWZeQZxSNMc569xcj4j5X1PWu5GqkdVTrUqoRh6JZCXQr22",
  "key31": "32jcCQGtrjGQguhcMB5ufYN7NKA4MUNC67S13VbPtLtPWxG4ZQJVoeytL3DWHUVH8nXZGtLboM7nHSXU4zGJVY49",
  "key32": "4Fu5ehxnW4M1qMFNkMqi7NeAKpMJY1RibwhJyktepJvuu7uKr9CShVVt2qDEaUaACwopCJZk4PR69aL4jZcZZU5M",
  "key33": "4rDLW3H7SviP6RZSUy65rZuxdu9RuqLZkWhBzE8YvgsBpNCaGfKEjyDLaAqRDE6rQhKBwkRRxGURog1imrnPRUKt",
  "key34": "3iid9JoefEewoG4DB6EfNzLAEKp55xq21emkDFvDepcxWf1PMvpuifuiP5rNEjZHGLyYHQop85dGLUx2xgXiTZ5Q",
  "key35": "3qKw4SBvBcroSVWaGoH33r1Gaco3fLM5MtwJvECuQeBV5Vyzqx8GbXuWpn7DW2SKqa3Z8AGnZvf5ZwyX2KartZpm",
  "key36": "5AWWeVbZDz72kZRRNxLBaHYHVtJCteS6GBG9VKjr4yDdyES8hMM3KtqLUJcfc7gopyccyxMkM3g9dMY15nJScLgF",
  "key37": "3Vr4udu4TWQuNWjKQfLMQNsDFAterPxSdjicKtRwEUGt5mdUnsmKtijtH5Gtr14f8jK2JbWkkHPTiuZDWzEYrg12"
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
