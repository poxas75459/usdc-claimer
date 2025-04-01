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
    "5sg8XW1Ffze9FAnedCqCRGnY99e2MQvDiFD7qGBTqTRX8E19XejgQqaH5m53zUExentyUmowHCfAo1gyhZ1tSNTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pydhJKc44pcUZtwrXBS54qaqBz3qgXBNt9Xn8djbgbRvdhv2t3Z4YMHLfEXWgqqo3FUDbstkBaUnqfEMxcHKxFP",
  "key1": "C1yY96tNFJb242wFbdWqwWXBcmchyZ8QmrNte6BNZHwq6wnUozKr8cM33EeNNdQiZh5Z93XTEWts35KUKVE37tW",
  "key2": "51WBiXiPz5kZQBDWQTHgp11aeRy8Lz1VgxVxn99j5r4zqfDiSDmjo2PzHsGrKjgghbL7du9221KVrWA5NUyrUEgr",
  "key3": "3bD3FqxiA7X9qfFPMqppeNbRmYbjAiXJd5oayHc7C52R1X5iHResZQT5YnYBxeJbgqna28AJL3EgHFHGVMKt4SWG",
  "key4": "5Ao8L6okrf2s5XGqcSKGgMqzALxtn7sMRbBDqLZuwxf4J5Wct2MbakKssp7wcGJKHkopk3G3SoGH9sXBqhVDrqzn",
  "key5": "2XvFLkrPgc8rcc43opJk7tyZRNpyZrdMW6KfaTzVAjf82uL4drE5vr7Yi8xYrgS5yUXrhYHiVRUHu1yooRmRvyu6",
  "key6": "5iabmFot88X4Q5GysgUXrDqCBqcx7rfPJDFUv1zFpkb1uCb1SZuVKUm8avP6BXpEazyfUxzuba3Jv9ChgQqQkZii",
  "key7": "2bJnSQk4n9QJNGTnRW46GNcB5dYciattaya3xxtktUXbSHJELcmdAw7rKTAiURV6YWXgi53vCax6W428CNZ7ME7G",
  "key8": "5CaeJquL931zFxewFQrhpPvgaYtdgQLEeKoZfXoEGSNNS9T5xBkBW2F9uBVXtKX1gQ6toGRASkCPRtXzAMcBuJcc",
  "key9": "3M44PhY52v1X7bdXkRF5EmMMjpNEnEdecAwSAsU5E8vWaaaL4pNQ4rb3H4bwb57Cow5htxBPhZhgnXeevbDHwvTD",
  "key10": "2QRBPojBqoo8VCaLRJehtHGQhqfMG3aTTDBg8KxzMGcmsSG4aYpB18SkNq7XZ1Ax9H86DSPhWA99Uv1ubwHV1Tfu",
  "key11": "4PcYknsFJBK6jBvnHZz67ZxfWLc23sTaGUxtqNpBTBnA8S1ur6msuKsCuiWoJjAsWC8XTJzBTBkKJgpLyj4yhyAF",
  "key12": "2hVKLeNaW5NxhSAGZWZan21zeNG52Tesbqfto2Zs9uRwq82x7yEogLkpmbRtje9auAJjD3ZmUBHAjwQnEAFxWC69",
  "key13": "2dMeaXLvVeTqK9iLh3xXLbytf3QPCFyTMS5oNuXS4PFQDFarWppYHL5evUDhszDKHUcGWGZXp2EVqvnapv3jNKV2",
  "key14": "2BYG2cpoNsVcyPC11D1UB7dsfQqxcA68VwWg5xFN1cHASCSLVossggDHaqXkLq83Jhhm9Ui7kxi9TmDKDniqhHGn",
  "key15": "4tizRKHf41NKZaHGm1H1uwT439PhMY2oc5m56J35ZPhmC4FB1ywphiYWE5ydqDy8iTyWopjaXb4cQsNdCZdB5Pb1",
  "key16": "4SHmXYfwherAkQsNB31CwdB96XhwXGSSBWWiALwWVsi4N4D2bkDBsHYVUpjhCYCqrJDehvsw8ZwsbfeeX1Yumf6b",
  "key17": "5YDNeva48TdpeDVD7x28f3rG7v3CsAfSadk69HKQY4Whsshczg1Zpd8j2nzDzxtxKgWtcH5b1g6osNfN46tuHo8C",
  "key18": "45mQicabBPbPEaGaixGrki1HsJdnwsGzPZyzko5VSFRiCQpRSeiQQBYbnLPeTbmhF4zNgMWq6eSWzaLzJzhufG7T",
  "key19": "bhxKhc9hx1BgahrgrWVfvHThhGvadoLNe5U7Js921dmFtGsJfcsDKsQzWu3Pf6fXTJcdsmktE3SY8i3stdJjGnC",
  "key20": "sMB697SApk7RQLqyUzVgf8dvaERCryQuwtzDRn3zXXLiFLTRQH95P91eJwBFeom3YWDsbQzb1z49VX8xBcG9jv4",
  "key21": "5712NfEDGF1wwNHfMZ44d4qFbHGXF3i2PsikMfa844oqd51qWsUWSfuzkrJ43qvxEpDEgXjoLMoGqMXr6onragov",
  "key22": "1tin2w8pdkNJwNaANpWZwsjKAYabRqB1N5qUkQEdx7AFzQABWMJawk4KATc4svegm8fEDZSbmkTtCjf4Zh7AnSa",
  "key23": "3W3ZYCed21RngJgWRRbqRyB9gUqDfmonM5LrEfyTzFuNvaTQtLzGSZ4QUxdM8sthDkztnBSuyB83RiGiMR2XJAGi",
  "key24": "DeZPdDntXuzWWDCgSL6powPJVTw7aQV868dydeP6gQD4apQEGnbcPyUQVpcZsn2ygudtXsVQDSbPCjt3qh43ygJ",
  "key25": "56JyK66uaSUqXmTL8w4AKL5vqNSM8ajcnUDmHDa6eCmMV3D5ZToy4Xt5QWtvzi5yyhyhexcbN2yiaQqXxP2nAbGj",
  "key26": "GpmsRM6Fk34TRoHuHF1paBhBQmNtQDCXrYcEHTsvcTdsT5Y2Pn9U5o4U6DRgtWY2VLGbkFgfp4HmfnjFnxva3st",
  "key27": "XWnB8UhzrijVXA6H2Kz6UsjcMnYUvPSTiK7zTCXh5d5c6ERyfhxF1gmFaEjkxUzDHXPz1p8By52Mu39vm9X2eNR",
  "key28": "5QW2qeB3N1yPnK51H9FEP7oyDg2YFMsQTQBBz38rFh5kw9XP6KBAUak235XpaAtD2Fe5RvbQVXpzGcoXez55gKvf",
  "key29": "hFuafzf1o92MmN2bqEGYtUhjB2yMJEW8Brc2QXddYZRZvD5QqSwJ1NqWZwvNrCKEtE4Zg6ScZLUrQRhqpDYXg9N",
  "key30": "2krG2zRUMhyyLahvyQ1udYHBaEqJH16eyoMsrXwApSZKpoZCpoZh8wkafuofx4yqYxXaFpsNSJZqkUwNbkPR1ND7",
  "key31": "5F4Mzgxkr1cwjfSWjEfQMHxQ1NBQcZVZ3WL8MhmGkEifw9qAUv1Q2BJNSvmDbC4yj1w3kHKQkWkgfESv5rjSn2kw",
  "key32": "uRxQRsJCSqJ3Z1rx34P3odt3FsXAoFTyem9PCNp8m7USBfQUttT2W6RsE2j2YTxKAZG5kfjv3krmnnrqMLfotch",
  "key33": "4yZcQgLYtSeNBjiX659oquoVL4i5tZPkcQNA7TUVU73rnm96JZMA9Xfpg1eCfxGugzMEeKr7HPMFzAnRfhagawVN",
  "key34": "5wZ8rbKm6jMPjAfk7hrWngmxrPbYmRreRojSSmyYCFx3graAqJQJb29251rJLgqaTaiFSNjfKfYAGsK3z9Ac94aG",
  "key35": "2VKkzJH3esdBPkr2NRcfiZt1yXmgSrASL2NXSWm4rCvC4GaYgGxNC2g1xVamDg2pyV9cKXd8tXkP55NjuVrkZSBv",
  "key36": "5RfZgMTSH6ip646GPmNb9EFCLQriTZTS82Vi8MwH9r6RDLtLsKEZMvP7yQr3NnMd5AwMrncMsW56ktBFjYcrkwSj",
  "key37": "3QCyKf6uWNrtM2yoPMVff2ZkKwnQaA3Tydj3bCz3bgsjfyDbZNnXnPkBsz3JAkBYyYkHbbLTkUCqzMyEmEk7iU6n",
  "key38": "2cYK72A2q1NmGpzVJArEjNaV2M62FxQ3cfWz5HWEVvcfLQ5zQpNCRsSnmiFSD16fogxug1SaQn5GzvgmJS7TpqoU",
  "key39": "5vNhBFosPa6yitxwJFmAv2tTgfEoMq8B1s3mDM6Ps4FVFjj6oSa5SqAdB9eQLCb7BiDC7R4z7uh2X4jE9j6dKcSr",
  "key40": "4DpZLy67ixHTVeeVyMCrfrbdkmTXSQ6Bwuye2UrPVKV3puRTwhMkgCcVYrnms2chcsPCXAyQb7owvkkSFtVrgN41",
  "key41": "GRHBeVnZzoLSkH1ueLBimjPW75tFQzPXaphSRize63UVQCnKXPT3TAQUcMZZM1FnEBzcSebE5K1ftBPhGrNxnEA",
  "key42": "5TK49NR2RBixPNhHvpkkzysQ2LotBzBtQQYw3K6PBWCdoxoqvncfVnwcfEG1tmkuarBiTmfUjGd2e3a3UpwT4Y9U"
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
