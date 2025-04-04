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
    "2WDRqgFfzBaPWyuVXPUqwfnAZUUS2kXgvr4sM4zC5yZLGMfeVeaQFFS55ytUXz1ZMBZKTVZWBYh64utQui5nWs1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MwpqYjyk6LQi1HQW2GYh1ArNn2aLwxRJcpFkkoi2qNeQn5SshAv2V6mDnhWeC291jNWStELtSN741cRZMJ3Dasn",
  "key1": "4ZVs2vmXBddfGfxqQi4uq3YG6fV7hQeaot896CJugh2Me5JzBjhFK93RxDUrFPJoEnWPEGWSK2rdb4rCVSaBMFZC",
  "key2": "29YPbHWTvDM2FNZgktEFuqv1ijN6FxDriSTm3uEc1qk1gpVAsqEKcbEBb3LhaSe4KPBZfaueht5JmhbuKDm5bBrp",
  "key3": "3nTvZZFxuUvfcSFedMw898TzGcYrNVyKTVD71DNff7JbCq8nRiGKYYHhWA9zpxG3Uxcbrqj6HyX2drwecq2tAYBw",
  "key4": "36o8JZUJFP6fKfKki9jnhRC4iTcmAAZZjodsYXp1odx7WLyVZmViGQmGnNEdkZQGKssX2K9Tnd2PQfJXDRgyneQc",
  "key5": "4jLF7iUH3kcMYVqLeMUun5FkiLv4LG9YPD7bt633qsJBCuuWae5rT7yrqYYDXPUDTb14rYhpTLfkEKd7P7kxan71",
  "key6": "3hwHkLEikTutfaqFrMpjYk3NESmYaKvjbns93UiZ5shDjEfPQ6HPVYjEMFjzqJ5AwTsD5WWDbVD2ZfH3nnEJQs7p",
  "key7": "4WCj8TD1iMEN1VYyyEXaiVvXWDEEhP2rn5ATF1Ug7isKb8SvQwUz18yo63Vb1ZXdhr6LSbjwtnN6W2bwGjEMbFb",
  "key8": "2cV8heCkjpVT7J9mNRkoBHUcH3WKzxQ6NWhGiiYU4KSVQ27cVs3Uno5GdzQNzhVpTybVAggbwegydGdcsBWSGKec",
  "key9": "WEHFL4ntH616ToMR55pyFdskGXHQjKbyqHAyfnquDnuHYoWUSZQYoyNRQRBVR4Q8EVSDDkoGjkKtraviXNKbSHH",
  "key10": "5RTAi7pyh6ZiYT6SMkbdA2GPyNs2GQpSJ1mcpudvo8RYMnz6xxYvbrBevB8qCuxhFY442EPFbq8rvUucoSLB5KBJ",
  "key11": "2SuyxVn9WiqgVYw16PjvZBTUnUYsnHoSfDU5miGXuoecWn9bUKuYKZgP4D6yB7tyKJyNtC2yut9uHs964mQ1VBAr",
  "key12": "31hAX6HtD4evvLpouY6hoPhYtWukwWLhN9MajJKzjXGhPi51Vvy2WSBAVSfb3nGoRX8gcpGhL9euDavi4saY3Vkb",
  "key13": "29nifyoGmf3owvuc2YHKejXdEyC47QgVDcFLmQr4XmVQVoj9nRueEbf5B6KpgP1eFwAKqACcY4gQmmGPqaLrUCKw",
  "key14": "3Fn3Bd9DGhxhUtkncgUVi7J1diELcsCGBhy1dMxqBEq7UZ2Ha8xhTPddjFHaWAvCM8uJV9nohSY55rya5Tn3vKP8",
  "key15": "2oZfm7r7Y81HkjmRyk2t5qnmaGVGT5TzMq4CK9ruz5kAm6pPdQ4rCYAg5aTsbtL7EbtGDCdBFS44SqHpo3dSPQjm",
  "key16": "za8sZcqDX1PXpVXzfn8ojnZsjJwVpzN5Aa14kGbm3vdbNf782DB4raDCse8B5N5jdPCB2EJPW3Q5dJcuAjh47q4",
  "key17": "cuBL61HphpBgKZeQ4ZGsHXEabdg4vo5xJPn9HScpsssbe49AtTuyh5qBcsHjoQWhVcJU9QVkBmSvQ9Mbjg7FfWH",
  "key18": "59ifUriNB49CEwkSKorYetxyhpDytPR4hfGUQwnmnrfig5oyG3f1oya9s5GcZGiiV5iLkYA4DEcPuMbSTQK2C1xA",
  "key19": "63ixN139QFJx7WAKeK2AzgW1WS5vJqHzzQxB2vuz8jkR4EPBhr1gcvem8AdNg112xMhekgXBmhHp3rMWtGSMsyWb",
  "key20": "ET648MaBK2zSenKG9zudietXN3JYoAf9UttRTqWwZMtu9FjaEk9nGYTacfb9d96r8D6kA5G8xHSDtXGXUh3kvox",
  "key21": "46BRbaqVymUy7DsNm2x2SqJuKHJh4cDSxQYTBmgA1EeD4tXUjA9UQkknvoz7yTBwn6BnVocfJ8DRgrtgkhNYuFQ2",
  "key22": "4cED424ebxkeZv9Ynhpq1Rc6FyGWxGEojHwDhsnKtUH3phaWUaMCBa46nHZqVDQFs94MKvcNkAzfTpMCKbjhgwXD",
  "key23": "2raB83TAdxMR73cfyGghLDJzsqLhL5jP4euesV7mF488cKRE69xqU8W5sLWGS2qNbgMGt86oURKPYLSN4cfhTk9Q",
  "key24": "ugBQ8xc4NV2mZhQ4E5fPbTyKuF5AWLT6Xv8K5gqfd4fLdzJHmSm5sLECvQXrFJttbEo7bk1jv21nAQXw8dWS1Dp",
  "key25": "3xAhLgDfPmGyg1mSjjgSNUuGnobzj4ZnnbbBLgVqmDRLfLMCZqLYhV7y3toZiZtRE8UP7oTQvAJn5qMUPzFHj8Tm",
  "key26": "dtjFkFTjBp54gcYqk6fS7yKAMbxncMMZHZXzUCQyQqpC99Vhm8CnYWepSczktW86Ti4AScRQ3852GoDQDY24GJ4",
  "key27": "2pC8b9FS5LLQdw19HErXfZu3Uj1t95QP4oZ2qPdJK46V2wrA7GmeWgEckvyBTRrGRFdky77Ak66kDB6qoBHAxgM9",
  "key28": "5iwAMcjavVjAnVqvZSkz417AaUj8Jc8E9wtw318RRGit4KcAGRxxAnVxEn9jwkZVagXqBHbHLdUbzxYYLUabT6Wt",
  "key29": "4h9dzzHz7V8ebArwL1U7A2XG2oQ6qZtmtBDC2edYDRsrELFbTpbZaTfe6ccPAjwDWHBFhfJQfNdNUd5xZMmEqqbp",
  "key30": "5zY1SQGYACePUW8VFB14fR6SwFB6ub2DH4nPEiudKf8ppRzVZwrJEv8ebQM4Gqvdgdam2KKE48q1d9CWNLwfAttT",
  "key31": "4UF7PmypdXk6gfJHectK3cF2JkxJVGyVMVizv7f9eBj6WRFM6qNRR3uGPYZKe7rvbMHrvXU3Gha5Z5qqKuP6YuVv",
  "key32": "XxkpoV7mF46VrZLfHedawvq8Ts5N82MiAXzNosNaswA7WfUg1DXfekC2XHeYRwhVNhyRKXtgmttvm5URk8SxQBL",
  "key33": "7NgbfAXxGzYjYYdr4opiXoqYnSjze4HWBGnPg8huvZrRHq7zCT6Q3ycsBsQBs1E13xEvdJAog3teNt3D4PrHM28",
  "key34": "3BLWPMT6DyRsTDxw6dSyo3mAoh8MktkbTSUYck6LXaijiUY27pcSKU2ntTWyZMNTxDsG1z6EujuT5tMaden4vZKW",
  "key35": "PkLy9KpwV4rWanwrHpiQRdh559cDUiVJTC23A5gkcQeQLUnwpcDfHfNQmAB1ZJxaGvEXte272xAnLApxViN5Niv",
  "key36": "4HUnVM3gwXCY5Xa4YWaNH76NZjGEf99vQzuijBR2to6Bk9LctMFbsA9ZmFKb3pkExTLHPiGQRLgyy7GKkRDXhvyy",
  "key37": "5NKzDymunrUQ3Uc6SV7QPDFCZyXwcKSvU2t9dnRjtPrEijLmP46TBXVk3inu6isABF3Ksd3G9bnFL4WC7XnbLYVn",
  "key38": "5W42eM3tVzW1yoBGqVw92pfBbsJ7r6psDfu7dYgpg4a6pvPAHjELNP2ibVpNDEPu4qR4z9GkgH7tEwfpFjUaKXpA",
  "key39": "63hTypp9x7qoHZ69VhZspfdKvCcHFPG2oH1hzLKvDhMD7aWVAde6U65degEdi7FWbc1Zau1Big9VsmRqnBGC24LF",
  "key40": "2X42PUqiBVzVc4nh5spUFNkJa6VU17YKzrMcKwPqY4pHptLC2y7HVNSxX7c73d6zYtABaDZ5giG8ghSdWrqpdn6Z",
  "key41": "ZVxr6ZQk4CmFXb5jPcVQAG26i7uMP8HgMs3RixaoExSao91DJCXBWuH6yBbuHzqCirLyAK7bF7zdS3piz4H51v7",
  "key42": "5wygWiPTpULXHNGSwDi8YBGmXMfYXGaQ9RbWR8r6sDqkCSxTUL4ACWReqNHzdPSSVKQjMbU69KdsqA4esLiH5A3b",
  "key43": "4ZdJHEochf2rb6QC7AZ7cEPGRr2VSnnuFkiMbhM9vFbA3JiMwz7A2VKMe3xY231MGUucGAxvfHwnWcS56mX8SGKt",
  "key44": "4JeokdKsux118FMEkkMbS3Hcy97MvD1bfHRUUarXEKAxHhFKUAY6q7dni6hnKA1qMRjayvY8XkkepTYYZk1YcFyg"
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
