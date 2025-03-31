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
    "t2uRJzcrpHcwatYQ2ykbpyzTLq33L9bM8pwogT6JesKsDj7qLvoPaRUXfh5txXc4jZF8SZuRJYXdhJ66jLuAzFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MoYR7ZfqaYbCbMnQ3cZzLqR3AWqNwkY47xzWi9AYCSe7JAFtQBtd8RerY5bjK5ZYGrY8ZnX9bNskfjiuv18o1su",
  "key1": "4fWK6uzuzY4sNzvyV8yeyTKtcxA4PCgiYvfiRWj2tGw5jpKGtKSDiJ4hEf13KnPTxB8CpWL3kmwg9KkGLpneLdBv",
  "key2": "3d4231o8PYfrirPv9xjB54Sv3EJpRRjegtHSuSoLKCdYr16zC7CvC1LDcERNB63MV5zZVhAjdenDANEBESoqEmRf",
  "key3": "23hriUepqTtxwQJ3N4z7raJgvqgJLFwoSuHU2noosRiJwYufKJaqEdgafXwFX7QN97PmwGMK4d9xSbEyM28zHy5z",
  "key4": "49dodKQtfzAPyr3c86R5YdKPU4D8Lymr6ntxJijENo1rGHu5i1RiKDHqPiQi7gaLZ6NRtAtsKV2P4vyGRVrYqdB7",
  "key5": "2ciUTqfdX5DqcDV2gwv3cirxXBNCcUtAMofCR48pB7dGUiEw8xPE5koFxDJmrSXE935ici2aKVfdm2cypSEyH2Bb",
  "key6": "3ToJFVvKXKu15Y6iYFQrRFc6VvYDq3qB5pEy8DprLNZSyL2cBaCUEBteiLyr2xPzEMVkgxDiG6KnVdRgWQtP3Udr",
  "key7": "4axmnMheZq8VezAeeZvRvKVVkDkgNLprvTR79umX1iX1oT833j4qmN4eKKpbkHHNNu7jCXhrGXgfi9XLpzk2AxgN",
  "key8": "3njLbicJAMeWDG57y32rFGwKXMqqsXwB3eNCZEkouozz7T5PXHvGPf5X8f6Lhta2Brz3Wsb4YnF6d9fkmqZdUayF",
  "key9": "UQz7HocxNy5JR6XcH83UittkNtEtipPd2v6q414Dzr9QjM9mA9iA1srYs9cVTJ9BfJpHhXomSVGEtdwwUn8AntK",
  "key10": "3Cwby52WwFCjfFJuMg2W6i2ngMmM1RFA4qhZ5s5bKzsUk77jUPBNCkd1X1EDyfzN1yxxhNq8UbuKC9uvHKPqc32M",
  "key11": "3qguFUGWPZAb8c26E2ht5Ff1SFfcf9712skLNap6gfuG7QWkeTukGBqWMygKsxLPCM5Z7qWBpiYLpvCqancRSRj1",
  "key12": "i2gf5BFUSbD6USwdNH5z9xdWeaF5gsugE1SQdxv4fzhfzgUCb9jB2Az7E7UbdJu2E7p7Ve2xftxpZsAXmoGGk4z",
  "key13": "3fPnaLeaAAHMaFqH7QgvGvHPniHPdQwmGWC2QSn5cCF16vHF23xiz2zRAejMbt9SM2GuYMa7v2y1oTiJc1tu3jC7",
  "key14": "VATLtH9Y5P6M31gkjfUnk3RE8CJQNws2a3fF235Y62PXUzXYSg8n7o5Dbo6qPaUVm1dAEqAMj9LM4kcKJoNqFrA",
  "key15": "5Wusht6otLxws1muFRt4hWDihZkjcawp5iMpJd4f85f9td8fBnWGz6qJHdvsLoE7ZpLShX8Wq9hKXqpYLddF1bHW",
  "key16": "2XGnjzLWKwksqj3vSoRQKVdcm2QLQ5xzqBySShTY7BTZGGy8nu8v4BoVZD3TfcoCFiusUKuPcV84PBJG7YeF2zSr",
  "key17": "59nZpDjZvWbbqBdD6iCtU2idr4rbC8X22pchTwEfRzbZczikLdzvYQVjFXHjYCadBEVUkSKZVZuPNJMAVDDnhGwQ",
  "key18": "qWqb2xLmTq5fpEfHMxX8AXPSgWaayHK2SVDQ1KgfsG3nrKEsPhPWFdkG83MiiiAbuM3greFy45F7QEYcfUEb29v",
  "key19": "uXx8j1n8GPbtBER8iXPLA8zVWQtWi1Q8UFfGsYXQAWcbD4bNMoX2WThWnUerw8mknezGf4SR4ZCNWc4Vzh9NSeA",
  "key20": "2rkoySTqRj4GYZ8KAHMgCnjj1FNGTaazoNsurYsJwXwkgbtPf2RuS9yXCa8nZEpcy3VUR3LLvMHUuqaYCQe1GXQx",
  "key21": "2bNAJmjdm2fjXVsenVKKprGBvWo3eW82xqPLoQGjni1EtvahL7H44dJ8SFsydjwH8m7AAZhRknt44FDb6vKsDB3f",
  "key22": "4sEywxuKcd1bvN3dCa1fBFQuGnrsM8npHJAiy9AYLMCMUoJbCa15k1obhBfzu4PaVan5J4pzETWQxFJgjUQzTwKg",
  "key23": "2UQu1ppLYEgNB4mtw9RZrW2huaZdmdFk7Zgap9w2uoNHP94C16MoEBeWERhLqPpkPutj7f2PDxnQth9mrHH7zPjY",
  "key24": "4HMXvHiabrgHGWr4S5QoVUhZ6WDFtNrxXHYs3AaGzCsQMcMBw5wjFdVarYspX9KS5GjPRX44Qe9suMj39tXUGvF2",
  "key25": "5RERxTuqzr9A8NFLCDR8i9XrZxPo8nXZiktd9ZYbKHQKztkaLVQ78uFccXZpzVLGxbMMmARfGm22rKRC42hHuL2C",
  "key26": "3Nk5V4SHm1qGHEK96sjF8uVWmP6YbkDBBW5x21pm97d5KfRFSBiCprwMgmBTKi6oiLJSPuWRAGuD4rRz3tHr4u7D",
  "key27": "3RirrjbzVR8QTQXBKAAt4cri2HBptz9vFytkEma1BAAPEo8aNtgracPenFXS1dMT3WhkoEK5fVh7Gv8ftrkUm1En",
  "key28": "2SFx6i9xoPpie9sGgc6coPN7V8Eu6bytchJR5wHxDF1KkLTW5bGwPKoYQDNzjc2iEkt2ch4vHN3pmkNgv5xJBJLQ",
  "key29": "XHyPELsiHujRZgVf6d5QsgGt4U7kW8hLfnrmB8cChShW3nX8BhAJyZtApUjU8Rh7TrW6obVPhj8kMDChNwJbANv",
  "key30": "4t5wuEVFCcnr7DXcTv5jDEJBMbMF37xycGXH2pFNkujCGTRyRGxrHAbzEkhZBpWP21YNz1PtdFg8DtpsNPFSp6R2",
  "key31": "33Dnhqv1nnR37hBk5bpLzLkHYGQYyUYh3E8js3iR3XfiW8TLzhFE6CMUS6NWsBdn4yHbEHhDrpS6cNyvhy9ebkwG",
  "key32": "3nvoEep2bGN62bsJAs1kLexehZ1UUXxUVhi9nr9uBb9vJSW1wMyJH25xaiVSPtfLRWbZHZbUjEGDGzC6vDLTkabv",
  "key33": "nvqpzDp4fxMgfCzfoLBTKmx3BkMbxKgpCNyU8YZzGGVHzBhfAaFu5SwevDKECBwrtV7dS2s43du4AaW9vpQp5QK",
  "key34": "46biBvnghh4fw56PncLdBVDuJbiDCkA9EFsTE1DvG8p28kpQWzrq8EPyQFkmeuJdFdDvgZPSr3bChDYZQkVgnihi",
  "key35": "3Y5unnALyqxQRSKkrqo7AM2AERMV8B9HHHSxQYoaGMFRHpA9A8zrE8u2MeqHMHtKYDdKWTJMqpc43eb7j9HSwxqZ",
  "key36": "5nGKrZvbKUDVYcA2x6ZDXxZ9g5c8YgPMugdVEdrrDGeiy7dPhTLGe5DPgRBXToi5G47o6Vy3v8iQmpFuSAfrRrmi",
  "key37": "62CBto9m2mJgmBKephAhypKjqtSXSHQ3VNXWxNrVhbgSoxQmnaXRgRXqfncHvQPTPzKz7wvtNckKpwkMJAenVtf3",
  "key38": "24dhHzWKYgNy4kPeaEjMXPe9p63bntDcNqDFMVjugsZyaZT6C3CZiYqFyBJ68P7AtQXNyYRPBG9hHy8K3LDX5Hs8",
  "key39": "3aE3DZCwM5btkST1LU3Mtx5Ewoiht1f8ms6tWdQ2uTEXtfcuwTRdouUnVe7hmpytd1N5UYuKb6qsLGy4KF87KyWX",
  "key40": "ne7peyNyGje6EAGsXcPk3Ua17WZnv3b5iWMsryvGZxWuqcUiQt8YQCdYRWgukvwSWj3seFsLrCY7zFSdfcv1zEc",
  "key41": "637tUoPaGyj11uTmvGGAD8F5a5JAr1xSJksb41J4Bf9qG4LTBiZa1d1jUB5hb97Dq7UmahXtKqf4Z5PBU54crpj8",
  "key42": "2EYvftqzXCFX11aEGJtjb9hYYf3D5YQMYiyHUFNy24LspCnnozW4kc5iN56ZZyzcqsnRpgdcQ7s36mCxsVpQtREx",
  "key43": "5VH7Y4VFZJBUZRxHLhbZK7HyFsHrswWZE4avfXwPHkLXasriYPGVVoYG6H774ERV19ugYZd8gYtefv74HYQJEsWZ",
  "key44": "4VAVEqAM3XU2NZafJiS9BCZKxdCfQy3vohXNaQimDGMYkzUn6FtZ9TJ4N7jnrBXRzCUR3EHCk5w7tmiXE2W9ZDnH",
  "key45": "3kZE1pS8nLu3JHene7mfpVsg1ip4aALXhUFGFfn94cHmYck2V1vCVdCjZHc4QtLRFKTKppbrfiY22amogYQDZoSq"
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
