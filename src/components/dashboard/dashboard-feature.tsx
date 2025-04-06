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
    "2EFXcdrihGYKKMy9ceEtQTjH67MmcoH5Rk4j5ac5HgG5dBjkLVzFsGuUzFY9c8iiSiMpNxiDogsHj5W7f2tuE9Ea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3SE5R1eh9E7BW41mehs5KVD4EC5KMU6yBgHg8CfWoTvngcRZxxZyEMZMUmkWbNHUAqd3z9278GWJKaCgMW6FC9",
  "key1": "uXmxzguLdeacegtpM461Rx2mYVuBAfVdbAigkKoUQfLPkcMEYTsnBcFVTbi5vFqBNMXwBERPPU6tSdqphUbf4iC",
  "key2": "3kc3oJkhEKQgztZrhE7UxKfw6yzQxpdjASVDccENp3wpvyQ6KvihMCrcazAjD6G94b3pPSFL1fWzmemzhtswQcX7",
  "key3": "3ckKoiA77MLnVim28wznUMaF4WBPeLh2G5pdsQmSpnzLUcsB9gP1hMcmV3jyNfCjndSxTrSotrmrQkVdhUnC4q5N",
  "key4": "4zvU1btRt8jbPWUHQja1sGYdQ1DPHEHjtmKezbZtvgZ4M17j3vGziXrKGhtjx795hYfNwnCiDEBTk2hVv5LYpNMR",
  "key5": "DxT8FBy1uPhiowfePAYic5P2moAsF5vn4ciHokyjPiVdovHgTB9ifSPjbDesz2vHtMR7KyJSytNi6ypRHy98NFz",
  "key6": "3VdxgetqrQR7YUfpqEpJqe6mc76YEqbkz5d6ux5SgeQG9dDsSVrmS2yx1GuxZv1RFP99f5zNn72TAbQi3vaxkMtz",
  "key7": "4RhSWfdSSNEztzcSHLiunWgQggfmXZbPUPRtvuBwjFk9kJy4UEqi3hTAkGe29SMLxibisyC8rwXLkRjshAP29u3h",
  "key8": "5WBSWkB1Le7RJKDNyQX8JwrymcedJcyHoveZF3JJtmKmZSt7tirBqcfvBD4Q1X5DFe86uTXJp7c9guBt3GWzpzTG",
  "key9": "2jwxAnLYAhEnnctTrGAjYPgQZ6ecqpNsY8yCM3uaoBbYWgeLiBxbtJ8nkVBbAoF8UPLu2hXsz78TCgYkgZmYgYhp",
  "key10": "1qkSbSJ8yWPUKT3SiVzXwZxFobDNnkeeFriw1QY7jcJXHmHGQJ4LMgkiqaisz2eQzcWRkVQz97D2VEpjQtsoiKU",
  "key11": "vUoomjtsWTPHPJCpTexG6n5Dhyqm2kfUb5x9ojTrSTCwAx9Cc2puvCwCcotji9bu1JpjNi2rnULPFbeBqveKPd4",
  "key12": "xxZ63vw6SYiSpGr7pzaiMEMP9gphCuh3h62qJi232swHyfgxtRj1xw8rHPQKqHmev1ySysHrDHeYum2kr9tRvNV",
  "key13": "3XSGCwp6GgsMnNmMxiuFN7asbEPveu4fhf4dBmXAtMtPVzfz5e294NiV4ezaujtN7n7xr4NFPe8M8m5GsKMhxDxo",
  "key14": "53uE8Yh5cPu2sHiMcitM3UCBoWbbWdYcczErVGwW4Zv9iDiF2hneepJidNo49yEniMbwHJQoE6bTaDZStacPRcxu",
  "key15": "xXyHuu8JjQDvArttAJ8xm6vomHFtibEg1XMSkEPuXm2FwZSY18ARSdq49iRdKnDDMoUSmaBDu8YwD1njPsE8eb8",
  "key16": "67pBJy13XjF1tpYDVe5toE1duKFBWyA6zpFYGzLqHhMo4EbkKppnauSRSuVbmrayN6UJgmyH4PJwwFBtmBwTeEtb",
  "key17": "3qB2gC4hJZZSaDaZJrbZGthR6sgxbCA2W8wDMZsbiPSoRUurjDiCE6LUDE3rbr8LYeNfksQx6mhyG4fAyaDn236L",
  "key18": "46eC5RZuFnmZTxYwwGsWVkKDCjRkxxebJLEgWfVB6nR9yYcwyXGJchA1LmcnbvzbnLjEqcY1aBuLRutYo1d8dDwg",
  "key19": "5GiVeATUqUziKgLRJd5qjMruLFAt6mkUQyk5tETFsb5MXc8YFtXLjVSWqpKcLrgffABFrTMfshxvWYL1ti55nxRL",
  "key20": "3YMURYkZN25BRyyeRC8fUAiW5W4MCFfVcn78ue1F29yhA23BdxgiFUwGw546QV4yWRxMQFKhCn8HqSAXCogLmHLa",
  "key21": "GKgYqesNLM3wgHXBhYWd4B2DHd9wSKRe7yDgXDMnkgy5FesAYDrKMNQffCfohyWXSsSeXfKjmhjQbL89ZcMJSDX",
  "key22": "5qFiSDQYUTp8B4sdumbuFT8dYiSjsM5ActWF534Wwj4UwKFSZNT3sP8PBHtBV6xrngHoF2EQzKDPLWZQj4mEMzKs",
  "key23": "5uKDaVFRhvArThenzYyLKdnUnHn5Qn5hYxjhveT8kdEqRvmYg4M7FknssTKgEJpTP6i4eTtUKr54PiZpSRr7dZWG",
  "key24": "3Hg11s6UEyPYw2MUMj82aqkY2pv22LQy9MbZqSHQFLBmtxBwMg7NFiPASsDp3Z1Y5i9ENvDNjYjjvEMb8EDE1hRj",
  "key25": "4TFRTRzeLuA5QHxwqmcTK9AUZnpqkY9drGXGA39yCn3Vtqqbt9rJ5fZ44Xr7EpVTWTdcVkyPgKjAyq4KTbWEm6WK",
  "key26": "3PdxEjwYRUjxA9g5UB6DsRJNVvXK4mL9Yyr5toPKKcHSCipa4LTtKuXuuNZZZDaVKdHzGzS7FD4hcg1MfWqb1vhb",
  "key27": "QbXT2WTkzpHMpxBj6UqNyaK3HCzMD3iHS89TrQxgbjaHmKovbqkpoxrhB4yxXMW1PzuwS3zttoHhT2Wc1DgBdgM",
  "key28": "51gmBK7ukr9uWCHcrKg19165rQa4RkNQVgTvXhAH35R1zfecN1SiHTqsCyWSSEy4kB3QBEsUzv9VsuLsqWvQcsGg",
  "key29": "3nho1d8iEjxQ1dcZjxUyG7RURuaDo5ZAHsdFMuwHvyiJh6BLYQefWKXDCjnh1scCjT4swM8pr7qNHunwzFq58wYn",
  "key30": "3hjFLrDCkCusUbRKsqLFahYbGFNDR85rrMTN1EEYr9HM28WDUw7wCrMx5wrbjaDKWNMaqNJBtiNBAqKGrf1yUyag",
  "key31": "39vwGqZY8czPWn6rjpBbBMew8pFrJTZSQ7xUxvtdZ7iXtXMY5s59FPSkfVY7upfoCbDKbET3zsd6VbDDNZivTAM8",
  "key32": "SzucUTyg9WDEHT3n4VRK62toJiRdsSgcU1qfqFrLNFHg2GLzo6eLseNp188v1DqKzxGpJLJ1gXft38AFTTrBsqv",
  "key33": "3dbtpMU4CFcr2N9jbw197Xe13CgxqxTtchvmQzCfXQ3gprgBBCVVpuXeqEg3nQA6LvvADkTpmp6s18PDDz1KwroG",
  "key34": "3djAK4udvLBwVoHfBmv62oHdxorrtHYCaJqsH3PX14niKKzpRcDj8HAH8zhUcZSBSamHsJ68Gv364oRTB2Pr3Evp",
  "key35": "2q8sB7mSxVdfcK1yaJx7hdTg5s6sFwrznerdFRgNd33PdnbudSJixdRAFDSBteEk3jQVYnztUz1t15Qs7oez4VJq",
  "key36": "2ErA1rMJrgKLPk4Qqz8hnmTHXmhFxcnE8hektVQ7vkGyHzLoEHnj8oDABFvy84fBaQCD1RdwHhLq6KNQquGBFcuu",
  "key37": "5Tib1ptfFAc6GTo6Eg7B8sYHTd2oYDN36tAD4Fgo5WkSNfSkqVYrup6BRgkqtMZe3b3E2sbU3hjaqBnysFgNb25Q"
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
