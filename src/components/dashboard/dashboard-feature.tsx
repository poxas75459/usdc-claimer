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
    "4rpBdQ5cwdhWriuRffowjjgWBUifQW2CgfqmnvK8yR4htcHbS4GSM9ZLGv5vcDjRRrAPyJkaCVtQiM4BKZ1mh54r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYfhDLwhrT8ouhszaSYxi6p3u39fYpcdJRGnqNTaxu31MTrDVE6xzSiHLGh97WKh9NinsP88jAtFZhJybjiUAcP",
  "key1": "32PBTNq7LFBfNg8XHTv8phdGePTxFLsTJGKbxpmveuDeZ3RXTg9E3vG1ZmPtWwwqmtaie2SfXUAeBerXgrWeq9bg",
  "key2": "nVznu3gumWWR2gENMPN5yoejiJzGenttGQT1NaMSmvikndtP2hSoAUohXHA6B5FxLMB8vk2jdVT44TZXKvBkeaj",
  "key3": "21XTDAqWwReotZDWVcfh5x2b2PxhSLkmPtd6qtigKuzjJpKM5U68LQALbkPWkQ9ENLBdbfmmpr9RUGqafycoiPq6",
  "key4": "42d3YddYHybGnkr4dPHQK8zNxRe3ErDGRycbDPHLhMmLDJJQxgRKzE8brEqKupPtKQftKZKKaVKLwKoxeBJpXRT3",
  "key5": "4xw83ytPwfiY5Lh7T9h7TQEwmcn2XiLDZwd8Mbg5u69yu6jvpfqqt1W9YknpBRHb2FVP8NtRyUtvbATgShwhTVdQ",
  "key6": "2EcBgSjviPjTCZpogAYTpYFZkuHrfXuvxyKP5qFBuL42f4voi7RNRuUwuoaw364vuyiemYqt8Dkr7PgM6c3z3XaP",
  "key7": "3ak9K8ZiZ6CBnLTW8KdWKY8ZshLviDo2RUYAMANr2bFhNseLfTaZmJrKimXFRPYW7dhiUCaEHFJFnPg8vMcpofLu",
  "key8": "5a88U9eTP8niJ3sDy5P9fr9A9E9y1ycBEWs7pq5T86jSFMkNbMeAGFAuVjVRiKyDpvu8jTFAABbs3Bd76dJ1xE73",
  "key9": "2JmhPjEzC7XqvcULGHPwbAuL9ycW6rAAQT6uV4Bu2yQWtUS9UmMNHmvmSgSq5fv4ZZzvjsesxpH3xsX8ncSsQBMB",
  "key10": "2TV4gyda7Wn1gBxxDbWCm8edVsxz7TGD4uvX7PmLbEBrYsSiYPMpeT7c4KmH1dEPnJ37zCPxvyM5wQ4efCLRioNi",
  "key11": "4MJm3hEKbzAnzQGnRKCghNz7tVnpjMrmZgiZGK34ohwFWTmHygwV4ELZEB8ZZWViRSjYmTLKRGYwBJLajqx8iBXb",
  "key12": "5TBGZXVoqZQq4ADqqFcdHdkYVxJ5tyHsZ4q8vjoE57aXBfqXJmHAsH6aivDY5jWYmS5ifPh9vpkmWCQeMJizNkch",
  "key13": "2CWDHFcTK2ho495kfDk4C4m2rnSyH6sgv84iSKVo76N7Eu297LbpLAqCWkaCQLspNQn7sQoh5mbKmPHSCaVYymHv",
  "key14": "GARJ99F6ehRV1niug7ASLfdJ8jotQNJX4Hx2tfosX9VmQ9EmBuQL71tBTYctgnhHeCabpKnmxsdTtMNcmYe4C53",
  "key15": "RrGTJB3R3WPeivz44dYH4Lh4rYcuvV3QhKJXEGsfZqueFCxCaTkc8yygeBXGPzzVUHMJJPMp5UbtZ3mF1fyShTi",
  "key16": "52tiGWPDifTHRKQPJq7Z4YcVZLrJyVhiUifRjn6v7VZmSkwmgNm4r9VZ9dMG2z631ZvMAaUtAGTCQ5g4DHN1buQ",
  "key17": "2qP9womULT7YGUMhMvY39WxKdZQyXLSvaxFziYdqkB3hCKgZUwkyZp42GSEstVxtVYx7R4e2MyzuerPghvZkr4yz",
  "key18": "3HfUWyDBTyBCrQRa4R55FoNRmzhL1uZFhNbm2mzznVLPmmYyVNaEuLJBM4VrMvamZzHr1ZqPwdrvn7AFFVwG5R59",
  "key19": "32Kkxz8tVCvNtu7dorj6MKwnTbD8WZ4cD8vek4cL6NVxDoRzmnhNeGq7Wg72HFDcmCuF3o3NpjkM1ji1UMakywy2",
  "key20": "4d233dAgVj592ANpqxm2c5gzokVzr1chJ1i5vagitbRgZmUvMQ2pj6SRd5tBDCqtE2khNSVgq4Bov3tZT5m9xWeK",
  "key21": "3TKorcjtQnPYTmx4KfZHG3J78U34KHzzYbGMKC2HBVnayJuQNNVbBXeYQAWda7pXCTooTZs3bV7KRcgowjGXHn4m",
  "key22": "2X4ERYFPGBmzG8y6BpNLsoe4YoxBzPdxWq4DRrwNYmbPtwGL2aABQ5XyjrZjiqhfcmoZfeU7Ws9gNN4gknKjvsJj",
  "key23": "3YaPYkJU8h2XXv5j1qYsNjcLTn1ZxK7GPNTzQpbciGd5v3FKy817aLaCrXUv3DgVauhWGirEBTPmvcNbFaKbHQn7",
  "key24": "2fvGh9b9UoZPWqbJooowXiP8F3H82wdKVzkWzcgyefQVHMsh4T5VztL36VFaQTALqrr4arjZh9D3kPBHQXNKDouS",
  "key25": "4svefrriU7fnDKBLb8PURAE1iHtVaXTbmeEULXqMB9ckxgajFRtDEwkguB7Amuc8JfTVQrkdG6rFKyCF48zFbAkp",
  "key26": "RRizwneAUvSVZ2kkvgaq8Mwd69EijUB6wBWxVpKEnhHG5vCRYgRhhNiYmT7qWK98WnuoyQESKzzXd73J3RmFxCA",
  "key27": "37zSGTyC96rDdXfmV6t3oQMRq2qN3ifmehAsWqT8ggoUszLSK6rUgFzZSCpM3zt5vTsCSMUttjWQKwzGg4oH9nbj",
  "key28": "i4xbyZkTYmZP2T2AcMUAqamQYbnMp6WXyvVGspj9KhDESascq3Y8kmzp4zoimRqj2Usm6AEYkd4sfKcrcrHd5Hf",
  "key29": "23c2rso1GwgKCwE45ppqmQmXNWiWYaaFmFZzoyCH29R2wSCyoZFqP469V8VaC8JTyiaDpQ3gWCoY6VhnVdqSMgT3",
  "key30": "5GuzskEJHWEo995djDxEboDCGWcCK8tn5CoTHsT69yBkWGF1GXWG2sMtDQDb2f17H6CxQBdH2nZBKK4ZDYgUmp2z",
  "key31": "36p6c12nCk3K2V8VehSLdTZcQL26S4nJQiN4GbM5PzYpc7fsCoFmcLfyt6YyDkYSSWCoKBWoeQw14tiGCdn5pvSe",
  "key32": "iL4RQBW3KXFRjXxzWtbDCZWLE9HHJ9p2PKvoHSayJATBJDUrZYLwqFVrdYW5UG8raigSU82WoMeEgw7Gds2cLjV",
  "key33": "4vrACzVnic68Ydzh44tDb7qzQ1GcAaznqdE4mQrKfTfr1tbpZi63tB5dc1d6DheKj8cTkXk64MLg4oS9qJUZYi4M",
  "key34": "2UpiAMVP6it9hofHnfzviNx3goqjxgSTioAdP75aeTERcCMJo7xzdcBsv9cmccmHQBU56q6Cny2dGxYyQ4g2UWUe",
  "key35": "2LtKHpeRcCk7VjW17xV6zsgD1YEyy3KU6idsYWRe2kSh6upiR5HYdxNpMoNQmATEFPJiypSTAznwGh9mQdc3Xkpa",
  "key36": "5evTLDDgT8ALoykBparkVeLaq6JUkxS89YRYj2QCojVFWqfa8W49eF9MFnc1ajL8Di5EAr1fqr3kMitBCX7EQH5Q",
  "key37": "z3HTZofXqpm9QSUNu1ZiUtaBQcPNoDi638tzaGgZ5ZYsehBK49xPnhLyP4Ly4KH2k93Pn4xvqR9LnH34rtFnFfG",
  "key38": "2knodQVQdNSRC3waGokrqjCFt9TvPgWs1BdkByzRKpbKe2zwt21wEcf2eMh6exRdxro4DrHW1hZxDGDVh2FuLFE3",
  "key39": "4SrTYN3wSRHazPD2iDezFuK8PgGtx5GCu2cdk2Kx4KFJyMDzexVAd7Q3Er1pYbDSrWse8B2rA3rxAkMvB9iaK12c",
  "key40": "24eFC6HesPkB2PXMS7k8h5cwKxYP6HGci4SMsyrvRc9wS5igMwdZnQB7AEKLjtBqCoWj1KyLk5HACtTSBz1WQDER",
  "key41": "27WNGfMZoxHdqkssoT9o7HfDFbxmNMfqQdb1oBnnzCnWLfauDuMRsqTijMwaL8bwTVjRpv6dArmCyJk4ANCQvDwu",
  "key42": "wj3Ro2mVxF9LLnUFkwEPYtrcvt2btUVgPx7YMoDJUJy7ujAJ48VgSeXtf2jazE6ZSTgjiLYia1RQ1M3R2vevo9N",
  "key43": "2aMZspapqgF6A1g3v6oUD5EmgtY33giCEPTeSSjVaDD1MDXrynNdEeyMfoEtvKJSKvTLqRV8g5e1Xhi8LKZDwc1g",
  "key44": "3ibuKx1vCL5JLiU1vSutaMopE6PUzTAf3VEcwLhPQ8nWUBGNXXMr8ESwAQPG3eBf4ocKKKjNEqATmWwJyeJenjmz",
  "key45": "2WnyfmJR5N2fkYz5zmR3haYzicUKEN87AvUJZWDXR3CN5qmS63QUz9Qmx5sPeJLLKo6t6hXShy4cnTCgVT4uuJBi"
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
