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
    "wP3x5ukR6U8ARUKm7B44nuJmCyLjQa5k7kH3268Y6rzURAgm971grbF6GaLmcnhCR6GMEZwmhDqDMNhQAvC3qX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GogfMuVgF7uVKBDrRASU1o34CQuJRJoJDFgEcLkFwJ4DjkbmcSpsKXQPkWNsRkJAmTup4a9JTKqN2Z3rYu71acn",
  "key1": "5y4yuVtZnpd7bKtRnT2LgqsXuhwEvxctSqVCcp7xTPKf7poq1JUECKkdkQB7t5PfKrsnxVuoB1Gx3L8jcgV9561o",
  "key2": "3wgfqCvmW5zPJDj1tHbLUjV6P5eN9NKqhFbiawHMtABpzdWb4e38DcbjpaNBMX5zqFqZBRXb2hUK9sKBnZ5D4gYf",
  "key3": "8woXvnqUALtVVYWV6aaPSSAqkp42L1GqsVyNb2EeqcbSVfAuwWhVBtSJ22fTkENVX4VKYfk1S8GdR2wNX9Fvi6g",
  "key4": "YLTaW2y13cHfraMNwuYJbvMS93kSHJdc94TTma9oWqeZVj4d7sMDFJT58SNCPaNDBKjGyCMqnSFTMcYNgRVdn1d",
  "key5": "3FLqFn7DH6K8iioA2dSoHNETd16PEMXqpgpPMaRhWYg6FbhQJJonaUQFcEtvyjD5E9Lj338vfkuN2XRoPABwi2aY",
  "key6": "2fQCVs14dNqzPysRC1x1NCB8ov8nN2uDaNcGqSKShmFdfQM3F4oFbtNnbE1Kzdvk2Fd1EU5n27tm9KURaNvVmU54",
  "key7": "39p5kZjMWPvwqXVcWoNjwJWoJQVJwxqLsibpnqhL4w8MMtK4n6m8RgPRm1QswzVFYMiEFyZB6sDHqP1Tuzn7agnu",
  "key8": "2XYNnXoq8igVjUJbFv7EKPrt1DycaJkcBqUu6CkHkNKh26xbqtHpUpptG9gNJxhMqER6Z5c7xQ3JJUnRBPDBmk8B",
  "key9": "5cvB8CbMeBg3AdWezLpo9sunaKnQWEcFDsHobd5oBAmUKzKC847hpS3gR7ciz5M96Y77aArz7KA1cHL595DBYmGk",
  "key10": "67kih8QhyUY5AZnYXNSNQcuYDM5aBnKXTd3DzpSDZgBgex6dZoZqaCeeCoX1N34Kh5P4LjrajmVtrZX6Cy5f74D2",
  "key11": "26JUxdGQw9f9dwPmbQggy2HzQWYYCufzoUaVcteMNFmbQktNtd3cWdLbmuAKQfTh5DBTzSfaTz5e5nCumLpLDWoc",
  "key12": "28GcPFSvnj6hsG56TJq7KyhcDo3y22RiYQzupVatvM7iKbTjVqeU6FwH3TUrVkujzMfjG3Trz2MnwqQ7EpjLeVT6",
  "key13": "2ZeYxJHHNJKm5zNsb2Mk9WFBfDirWkEBjjTK4T75wjzGbQ7wMmGeK4mgXzNwNWhTzMjPZQxe7z5taPtysiQtZPJC",
  "key14": "4J3Yk2A9LZP3Svt3NaGW23wtwcYyhCFjN5y2mJNhxSfKyFieU7H39mD8o35TH5Cycd4tUVRT94vMgrfLCAhzcoiJ",
  "key15": "5fnRqAstBRLdAQCtKfeT7pE6WaN4biWNnJiDUP3h2vhEyg5gq2eebScVqmhti9utSfSPDGMh1pMAw9CcRkAArnvW",
  "key16": "4PhFWWg9fns76Fo7JH1K57XVmfQTnEFaEne5dsdWB7ccqrKUEmsLkmoHB1qkGK9nLBFX5MzuejEjsRzq5RnhMuRT",
  "key17": "PyMUSkSCoCtT6ZLMr1BMcfpzaoDyPFjPMF1CfqKB9TWJWmBE9g15oeLbGfC7m6x9GUJwV5Tj1shmZivAPied9VC",
  "key18": "74YPFix8YQUNEehAXRToG8Ck6k67yoPc7kwJLr4FRkDDjqVknHc88A6ERdQaTxpQmhpiy6YV1J6trDz9GMRrybm",
  "key19": "3oj7jWCTxfwtTpwbgBtkWp8to9ittcdUyUQqtaUDKQ5wn25DqbJxBErnhStu7cCn42yexb6ti3xpnpmtVUtaa7xi",
  "key20": "5c4gDac1ciQt9KYLHDgTTZ3u58QcNYtn8jHTjYy61KPqfZ3YfFFhCv9eGt44xyRAGeSYaHoNsWW9mNdncV1cAzgP",
  "key21": "3g2Hx14JxDNwZrvseyykRpNYz7psW5HYBxD9HSuuwBsgJohyPWax2qLcrGw9jTooHTsajFUWGqUuQz3RA2eE2byy",
  "key22": "2eJHiPA5gyh5GemBvDL778jd84uwwXLED1U1AhCTgrfv2Ku8in5tqhqooncZXDqafL91GyxXowrHo8VLgXJmkApd",
  "key23": "2dZ11wGNRssPKGFGhCbkBnP4CmE11CifJm18H9SCkBpyqFocX5gyN9yDqWvD8cQFcQv48MLtUaQjS1Fj22Vp9xfk",
  "key24": "4woNp1yfYPu5SJKXfWNHqzF5RViCQ23V1b7VLYuW2qdPz1bVYYgM6WujUPf8nyjpjvm74fcjd8FeX3C3LWvERAga",
  "key25": "2Y8Zmv25rJfSiqscno8X5h134Xbo2ieKfj5Ueqrq7isZfuv4VPacA1XKFKDF3xuNmXZ7aezTK9x8Vg2Hco2CkbS6",
  "key26": "274oVJ6ucDSTCUXspcY7Dyg6PHDV2qu8wXnYw8aW57fVTitPc5UxS1CQx9HGsnKtguVPUxiDkbAJRTfovJ37eqTr",
  "key27": "2ARpLdQgrfJPD2ryFgoboNRiM3839Na56Mo6dxWv6nKSJDuBSzLyBLmTS2JMfUWLWkU1oCn8XKfK79fBDDd43wzL",
  "key28": "671N8KP5y7CMXDSPiVLv8LU7gUqRaZYW5opcHppRqxzLK5gtuewwhtEydUV8ETY7V6rEQzmTx4jTaJNnm8ADATAd",
  "key29": "3Qe1uSr7xFy47yHycN6pVz5MTrp89n6xGhUpNpkNPRHe6gNbwCTGCfNeZooyRFTqcSFhqU7HM97g4mhEGKVN2B76",
  "key30": "5zDkqMp2TyzVauKvFKso3iEntsotMxDyd1FTrw9xsNY38kchRgMrFdg2K22gKKMLzD6LwoPgrXs7KzF45zGYNC5w",
  "key31": "5A2wcSUHGiRijmCXqscbcvCjfR1DScx21Qun3ixGHv929uzduRoBzeNf1WkaxZAyUASpWYTm6XmTSti4Rth8viKh",
  "key32": "vUac2Cd839TMQQ71p2Pf4jE2oeWkyr1S7pVwwSFQpncGi97BzVy69Fg63KX1y1HyF6GqamHYv6YsjzYPYNtfrgu",
  "key33": "5zneHXxSkKXeHmUUkVeS6REUyjtScaBe7MQ2Gut9oez94ShNA1JLWfQe3XhLD6GgYaAufVozU5tVvciDxYEDeUse",
  "key34": "45oM2SgwU18AGGKtCHFMCR2naxmonsoZf45BsbFqXqMwU6unPYgzXbSXAU8G7r1LR65y8kK2mKBEhTa3qyMmrQmR",
  "key35": "FxWU254c5Lchsn9MhkbmVnHh5rVwRFhLPmTzFF4AyUUfSsoipYU2VDaKACDjGpr8f8Xm7snYMptB2hFKhocxxoU",
  "key36": "3kJn16cqwFdWhzFgzUkChRpWpC38h2smPn4WYaxJkxGE4nzeKKFkx5ZcNWNZu37qsFizMUzLTeEExTWuAEs45nf9",
  "key37": "QWggiiFzRhHKxBw3PxfaEiEG1JpTDRm1v7yqpKnAy1d8oHeTNMWH6t1u7B2mPQgCrQPhtqsGeh7wZDrEnKkSLo1",
  "key38": "5KLTv2eMxGzhyAGM2vrhbbsLvtoKG8U1WYYj9E1us6TMRXeDzfJ83YGGLiVHBMGWSE6SXnViKSE3MU5NB3wqkFjm",
  "key39": "57HGCcWTiniyTbxUPBeGFdMpSq37Wh3ZgDTiedUZEHdPnVfyBmFPcZoHuKe6nf42ma8VhDpyEXYtrkF7gim4NJ6H",
  "key40": "2Z9TfcQWcTiEuH8HXKJdAeinpxABpp61QGUnzYPng8M63GmxvMdqLSt3XCbHZY8ZMCZQgxpLNej9LZNBNopSRon",
  "key41": "uoRTfzjPbzw7LP7B63roZevMTWKeNmWMjnuMYp8nbL1PdfuoFrtGbYVGZvm63KNHhNsdp8w76K5ZRtqir49fqua",
  "key42": "2GnUb5cJ1ntXUZFbfFPAk34gNngU291FqNAJSyzmf51HwvsupL7JXJSGmR8JWUbZ2jMUYdS4uBM5EccsWzUyEYe8",
  "key43": "2iPSunKJVTPPVGCABcNJDk6omNhMW4ksy8abKGop81KbqnenyM7cEVaPmRr8LjPn7gxuJCzcYcpeMqiyp1RZ7X54"
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
