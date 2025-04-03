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
    "4tR2gNUsqxZxg9tUgyXXUUCjoLSGRsJ7y8KYsUVAgUSRgYnKkoWw9ieqjSWFQWmKFwcT7R8AabnLenxqc4Pi3ep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSgquKRK2bQRc4GfiZwRPtBLGzSdNyVgbXrV7C33sqw5D3GnmnhPuuQg2XRdfnNSWr6VWnWMua2CBVbRQGaiZ4Z",
  "key1": "or4CPpULAmmxBDou6KK1w3mkjcUiopt3MFaVU9L2adBq752L5ZLcMGYECSkuoGWhAsxwRzxbGkQ3D9McmvjmxhP",
  "key2": "4DwSBagdFLTWWmPuPDs79YYeApg8qa6Ee6ExnuRem6TyuupANEC1NJqKzsL2P1aYSFyhsUY57tLRxSoase6ynTDY",
  "key3": "NSRNrEaRfev629T4bu6c84Q5yf799f2UtUex6qJ5cHNdLM6UcA5c7nMxQ4oaSBQxZgsqXjuxvLQCBx3fiV5a7Wr",
  "key4": "2gD9JcG9zCvK9PNkS8XNcgMVgkXBHWb3Rwn7XKoZPeorn3nm7t21oGsrsaxHtkr4P39JUQKV6kPJT51fTQsS2YJo",
  "key5": "4xvkdY7EBC58Xsn6iqHZH7mMkW8toQuYJuWTrM97RN3pKkEmyfNGa7ne6KRsU1GRebZeCmgZZaZY9vQr9QFM6EST",
  "key6": "3pqLjcRo8NDumz4HZZYTfSKkcmWXmVuvzkYP2wDUBFFZ7dhYbQsjti1BSkgr5mjrHDGtBWTjmPcko4f52Ki2JAZR",
  "key7": "3MFE7MvAU7k8FWioNExFjqScdmYCKdYwGr542RyvAb99gswbtoWBfApd44baVnKnJAsGf2T5r3WWrjBZTFyPw9Hs",
  "key8": "2a8tCrVMpwqNYHr3hTcChmSzH5oAnU9NRMx5QSy1HnSrqeYomoC2Hag3pyRNfzYBr3jQd55525238cAVLB5MTT4A",
  "key9": "5ARki1kaNNNrKZvhQzoMbCjFvyb7SWVcR6b2HmrQsMBMbVCuCaUByHFN5aBcXfYNzUSe3tSAYjy82LYa9uGUE5Bp",
  "key10": "5CCS4DvCqUic2amtD1pjhCNw3GskxFE6xQLQA6XanmYDNRxSscGi5EYJCBsy1PfF123qe8FP5jGA9ydyrCYJpDgS",
  "key11": "3nvgQ1CbGLVok8Do5Hubaycb8X8UcAeuxYfnco7aZ7zuPo4bRk21KWgKmfEQ6rRtLQ1nWfZR7rboHn75obpwkko4",
  "key12": "3yoK2vTgTkRU2NXACpuWXDTTZVAn6yLcxJaoE2bQxgNJGYMqXefWRnupiHTa37kDNRGceKJHdSCuDY8hCyiFPtw8",
  "key13": "5JxXaNxfKiQGNn2XRfVZaMSJFZQpWWQ2mnMKvsrF4Ygg212ZJEozbKpFGbh5z1EYZ757Fdp7eCwQwk5Zd3Li3HLM",
  "key14": "22A17fVxvCZZe6v8dYE1xiitCvaPgjcqwEdrfy25as5WfUTeRK6eEjB6DYmYb29RYMcWWyf3483zWpDwyrPiRAHA",
  "key15": "3sVqYiy9gAsTwpe55gJb62NgEWNdxoFWFznEDCTPR6jQpggmLVqz3UWkdpj77nZoM6KMy7P7NfnrivNED2ysRK4e",
  "key16": "22ZpKEHoM1k9zcuHx1jwqkPWjjniHCF2v5Q1vHSkPxUJCJTZ2EeKRzP9BXYQwRfgNXwyaXBeRv8ohYUXmDWw6S6K",
  "key17": "66aGz4S2jnPfovUu72YPPTh3tBbvRAa5PatLC1grncak375dzdqSftooCgNbHTmCACp9pDPzLCsKGBAXKDvSDmCn",
  "key18": "5YxUZfkEzpj7fS6x5UP7xr2EeYJKwLspPEtTnhQhwPq3dSXc1tm73gGdsTav9w1BQ31UPJZZrAhgXLDPnEeSWmB7",
  "key19": "tJSqsF411Vyw15qUcN22v7QMuoAFQP5cPG4KoQGxJWai1QDL3pnbGuYbfJEGE9uriYyX91xsF74RDHQNvvREANy",
  "key20": "4W1BBQbHizYJSk1khkvRT34CMGt9AtsfJnnNY1omMurT8Yc3AD3nLbMcbp22s3ThJk6ucpMH4C6daRnDNjQguevt",
  "key21": "3Fw26zkbNd1UDFemvyhpNuTAFMh6TqYCn9zc3ceuBSbRC8B5jvZTsZ5JyTZpr1honAcUk5w7cmo7mrYfUbAxkcC3",
  "key22": "iJmeiHGmNHpMPkRCAo9i6UqF3nQe7uFBZGyF7DbS3fWPdty9Hig5FuDXhRXqLa9Ww6hfTx6crmGB1yt2NSXmtqj",
  "key23": "4qzAKzFEdcBNxj62qHxGUXvoeDXagKQSSNY6AZ9kLuQdTmBgmK17YqeRQs6mtk3V14nrK7zMLEp6VkpbqewMKrjD",
  "key24": "5XwKxTYWz44jajBDY2Rv4AzuHhexMvFinX7FMiCWDMGFHccSmFqGCBAnSPmUN1HjUgEEsDS6hJkuFcant4S58w8E",
  "key25": "3wVHsvbGpqAQTnr3GvmCjBBwb3v6CYSnHWapE4xtZ2563q3yPg3eV4zNFUVBKAHEGz7xgV9NW4jkPneiF6qUrVzi",
  "key26": "GinxqCdwmoxocSAR1ZtXDE7HTj2Gxg177EEzPy8Eio4Y1Tba8mekfUAzfhP8JUv5e5zRcPmK9DJQuyFoFSZjuXT",
  "key27": "5wqQ3LMxa1R5brPKV22vb8uD51KhnokENNkuCbYKPbEvB8ZHPJ4taV1xeKTwMQR58KnT7XVXist9nAbibKxwAwQC",
  "key28": "66AkiYjAkrakeZstTAU8B1KaHmf1H7pExHWzMzyDcb9uQiwdAGXxsWo2o8KAjLe8rxbHWXcgPZ6Jkok5xjumJV5E",
  "key29": "4AY8XwfuD13ED8XiBi4NwrmxNVPr84UBjdR2MAjafiWDL5k8npU3g96riFJPpVM7XdxYQtBkAySkkSQzrFWieigF",
  "key30": "3Q5WqpHu57145DSN96p3pqXXq1ygibxCdNPcDcjpAvo5wSocsqF2eMVKB1SbQZhpDDCVDV879LjHXmUcCVzEKuCb",
  "key31": "4J4K9XRddBhbbAVVpxDGqffoi4mT47rGEAvKuFz8U3P1VvHxQ5zBDDLZsvwFcxUexXnjWuPuFQfpkN5555f588yY",
  "key32": "2oj2ZGS4GMdJw4RvcbHsVMdjg1BYc8vfrk1qruUnCHatPFFmRMu8E7TUX3CW3aYHWRNx4JbDTiRfWVtfVM9LDBPi",
  "key33": "i1ziVztCJyYniVZNfdg5uLRgGPNGezXNt6n2n1CQTu1EXNikBpyhjwZpspSnWU6YrDdUQK6FryhUoB1RxqheUem",
  "key34": "8vK81FDS2HLeBhyGXhaf8dBPfQhHR17qFmCjzPjR9mQ1hErEu4rV2ipFtAoLcbv5Pqs1mHHThfLxesYeAprNMKU",
  "key35": "2QowMPwNiTyTkeUMAq82eH2Nk482k2M9tUHpSAnekYTzGu4VZMLV2yyvujZmYNSdBrWiR7HcKTyAN6gpxWTLkapy",
  "key36": "5eDV7bSBaJTKtAHVwWerR9iNkW5Djt6899FFSBfCHwiC7ovNtvn6iJ8oy3qCi9mW4q2zoYWnNSLvCDDHFR8gJnxH",
  "key37": "2w2sJJ6ecD7S4PjPkM1WPXpVredAiJNLhVTcRuK814NGDaLPDCx11HDNxM8jYzQqMuqN3qsXKx1qTvVZRkX4ota5",
  "key38": "2e6CvfEP2f6TMrfUZjNudwWBnPr9CEFh5ks2a1TR9gfZ2rXZtUZEbe8ZvYX88MjYrCiSWGGKgHiM8Ctdq2nfsyWM",
  "key39": "2tWaAP1yL9jeozk4zfJ9coRgWYpDCsFe4rarz3aJ6KRjCaqSVDaEreWj9jiyEPTPx5wBZp7C5aR7fY49EmfHvWww",
  "key40": "4URnTFwoBy4jYGUhykFTPrPfv7qXmRYj1849BdNEMm1Qjq5Jy4XZuE4fv916f73aHjYWjNV9Ak62HiB1Wzx1oJdU"
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
