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
    "2RFYMNQWavbmRA2ZtpsjCrBp56WqGoWdiBRwWyixaWerqJeNDMszcExJNqUmpHkhHRGRdTR4q36NxVU7xMCw1gxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663JDtQ8EFXVn13uvF4sntYTbQW4hcvvWxfZdfbsLmFuJMxMFYuEJ9Kq1sVR8PSpGCN8vhsW7xcu3o2GgLBdgqUy",
  "key1": "3qu88rA5fgH5aKBU6wbextvQ7tsj4J3GjoR9XNF85S3pSpLbLCmU51ykxf1ENpafq2VoBeGXRwL1vLudNc9LUCgg",
  "key2": "3VrQ9L7KsmHHKU8J6d2MD7M7h3b83X9s36rDFS53iY4BJaJhMc3xrfPmVyvsyupXfuGuP9ydhTcKDHLV6EYYq9v9",
  "key3": "NpxhM4SUZNGCboCYh4Vmbme4g2GZuvu1u7xcDJsko83Me7BMDsU4Lang554zCXAmL4LQiwgWjk4CQYzKWQFzRXR",
  "key4": "5tTQtxH1nG81C7YGnoUPAsJrTBKUUUL5wsYtcNhX1t2H6XZ9WYTr2518bAdJewmTshufmuRqcAY6Qmi5XSVKTh5k",
  "key5": "qdZa7iaXEc5ByAVfXPTBtZ3p9mAtTQPjDDpD15CPa9TxgeWagvXGs37upGpZrgGginJEtDHvAQSy5sh2p3Hnhf2",
  "key6": "5NAZjH8gDSqQxxKwb2Lp9JDaxpi3mQKnfpvN9K1hXg4RX5DC9jshTNSjenuazKgGfqSznfQXHMYYDFtVWPYRcUVs",
  "key7": "3R5KU8szg5EH7LTAGADKQfHUHAf9UGF2o697yYCZKG47NQ3vzbnKywkHNod517UZ4ADr13PdhEKFAHTMRqsSgVs9",
  "key8": "4SbguW8X1T2UYynC5eW8tQk89Y4QzqWEae1qPwivjjN9mThvRgcPXdFFTDUWhosvFHPoXAf2usbmZLRbdnDVy8ZH",
  "key9": "4behrDBkSf4nFGW4oTRV2fC73JDir1KWatn6jjRGDPYMcQSW4b1D1Agj9shpM9RuTeevoZsqpjGaw47T4ADw4zL5",
  "key10": "2mAXc3Mvny5R7ekFmqg2QVw9ogAzRrja7tYjYiU41b8bWC3YrsPJuDzt4Xm6XVq6mEj6GbmpnjoMr1sgMjop3h4T",
  "key11": "WGHdGCUM399yrqBGJeNpigdNR62DwsUusJsj5G4CfAXWTg5XsTECDFvXHiMz735TfRN35L2sP1kHAhrx1yb1pna",
  "key12": "2UC1jV2hBtmCkcmcNbZYNkuQWCLsaUKBoECxzYFNXi23LYAq5aoXdhhZ8bwSurrQKWPgLmcmU2MKnvUgSFPSXUTJ",
  "key13": "5vMjfsbzTRNJhabDTFfBFGrQAMvM1DALMsSZFLMDSb2PnaeoMGMeCbqSxFt4mR2RNWfTthSvSeBJR1UnHEzvirci",
  "key14": "5q3XXfvpFeCCHpuNwh2vYU1g3zZkibGqbsU4hJvHULdooGK3o4zSqsLWcGuATcryZm4xE3vyYvD5g8CdN4sXaiUp",
  "key15": "54xJQVGR1G2GkHQDBEqMf31m7NR2EBTCEcksZebvVYzqc2tyYvEeHTxWYqAWejcmki7XeueqrMWfzmP9uNx8LSrA",
  "key16": "4z9VB2GCWJzMg4dibC6iWFhTJRupAj1RTwf3LH2RvondoKcqiUTgK8NipMUtB7ZFocutjQYZeiSqhq4rhneHbLGM",
  "key17": "5s3JhtyL413ECtMuPuifxrTSfFcHTWQCtfqCYAdi9uFJyKFx4B8pgGSzNzFU8GhAccD1e3siko62KG3jKSspGVdD",
  "key18": "2HfpxQhqxVurMKwqeno8HYkEGys4XJqAShnVUiB8qoWNS6aema2Uo1xDo4aCfyMem8FaUEJFmy1VDyBjRjhGUqNz",
  "key19": "4Ft8WuCPcLRng2gHcZxvvEYyTUw5ZuVHDycyKL8ZftcntdQVn75nbUB3ppvLnR7Jk8MCnrCGu1zyq8EgQKdxFdHy",
  "key20": "2vXA6gGcjQzuYhQzTQkKB7Bk94bZEVQcj5fuNzNhgjJYnRkKVuzqj4umnAkWAsmf28wNNUHQKGi6CDP3fmZnNc5a",
  "key21": "2uTrbaE9317HFNzyoeRynyzEEfywqSbvjo7pU8T8GhszSpEPMHQ5fspS9c8tbnGgrRap9FyLVjEnzcXDYViqmQu3",
  "key22": "3pxvyJRnCFAHhH42curHBxZeCwNYG7upVPjDX1cqVfj3E3wM8fybuuNZgS76BqNNf8UBTd6twd3PahwLMwSWEEPq",
  "key23": "27xj6W6aVkXWAWiiTyGHjANJptfp1ByBoNSWYudtTpLxxZFP4CX2U7gv413acYr7tyxvByeYuu7UNRNQmZ3Nogpj",
  "key24": "5YQgPTdbcJoEd2uphP1REK1JE1DWhemRrKLegEqEVk3vAc9FvzcPtZjY136W6ZSsSQQuzu1kUDnyq3kB5M2FcAGQ",
  "key25": "6jKw4a7r4S4BBbi11nz58bdjqpRpejpSZos7hSZB6Pkt66wQEKVMf7eKB4u7mtDctsBM3ysY9gje36VfqZycM6o",
  "key26": "4RTDgXHavuNVcoR1QVdkw6K2AVEBZSWtF34rABKksWKuUSY1DXL6be5WWwrnQt3oscfPpfTU8z2To7wm8zWvcbXb",
  "key27": "NeZqpAd5r4fUT3bjuZNt6QPDmQkTKAeF7Lsnq9PwcMHrkD7ynVP98q9384mamyDFvLHgN2fnD4DCGXLefRSEv69",
  "key28": "5JQbrrJkbAyRnB8P1vgYYFSvDffmGMBSNFJywqQkThQpobbCp2MSCy7b44YzMXLTKugWV574jZESaMkHBaRrkXnN",
  "key29": "38xKwNQ7wJHDR5jM8saiZJqyELV6wXmVQqWwTDMvEcjiNJ18ocUVTt1rujExUbpH2eve8uxT4YYfSvHWUuHa1oEX",
  "key30": "5Na8cY4CeYG6keiHiEhZ3WWotTyeSnyk46fF7oNC98Kre1HxAno74SdSC9KwRkmjYsd63KhXvdCqV8r9QNYn6fe1",
  "key31": "phU1jCr8UstFf5p6fE61rke6JWxFR173QmNVoDA2h8AceXJa6XexZXrn1r6i7otTpHtgw4xsRB5yAjUKUzFPuDc",
  "key32": "gZumoAMnZLWEJNc3Mg1LMoxfthQdPnJDWrfwhi5HLYHUhVVXFbduSwdZPVuLUASicsx1EmSZt965GgXk8fVoHWf",
  "key33": "45MKGoXABUcHroRsnpcg2m5tcYtKCFbqnHaMH2oU3jb1ip3EKx6K8cxmDzvfpYwTi1JXLdos2rYTtxwmJpEMDNjP",
  "key34": "29JKFjQqSTgQtj12HAHfj4cdjmC1eNpND2hcneKqr5Jg95q8GZgQQVgCKaRoZgGi17UAeyDRaaCRtvzcDBCtDGV9",
  "key35": "5W9mBwXSFemmMkQrmc9rUxk7J9MN3bvzyeXaXwmXDe5VHa1p2L5mVmznmKJ2iRU41vaphWsSrz4iU5dLYVsMTP6f",
  "key36": "4BwLTzoFAYwPeD8Bsw5NftgR4kfcxiBc3BnMjnLxapNFB1SdNg4WmVzf8HABCzCtTGSHKomfbqsLi272ZerR6igK",
  "key37": "2eiKCNm2aiLPDKRcZhrCRc7bZ6YKvSUbVUdy2xJp7yx6tNWZEzYHQBbenuxa3sUvThFhcJ4v7JKnqxRHrSG1mULV",
  "key38": "tDgWYJ9JAECTWaMrfXCFvKyAVwNiYSHdmgL3miMr8cBC3eHkteCeyKro28FGtD8P9r2P7ewxajNLWnHbPgjesvS",
  "key39": "2X8SRt5m8pSN4zYZaNemoUbAHfcXrqTCYM8vGLiymUfDGG6TzHU8QwhVyfUQ9Ee5XfgaTSbF7SQCHLjDrQr8LHg3",
  "key40": "2iABSMZ8GuLe65YCuJSthUU1nygP92xUXrUfUDAsBjH3DVEsqyjKASAV9goz9ER9ex4tdQK92XZPBEpFSwfZz7uZ",
  "key41": "1oXTFYiaS61WNvpL2DWbUmcWjNLvtPW4mjJvATfGw1D53yiS9dnSy9DUqgR1aNzLFPL9MqHS7wQmH2XjjwvqUiP",
  "key42": "5xiKRQQQUoAaQ9SsKUjqFzRrihDdv8RGamH4ghRBQZWbtS4ULXwf2QjKxRjZZbARLGMeTWn6w9pjood8ntaSABCx",
  "key43": "5VJtDXCbs2kN9kKhtvXE4vZbhSjYoyGo3fqWtW3eKvDPRxrCM3gC3ayZcze8h9og53EANjPBUYSx76huMseLSXYd"
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
