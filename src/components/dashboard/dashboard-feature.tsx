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
    "2hqmc3cj7fYuHPiRoNc6xyP5ChXw7Ry6mQgVrwJQrw8ALi65eWLfu8fCPezPGrfWG9Phaih3jPfnBwgxDHMPLu3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YqYxCi3LKeF3k4pETy9RuuzXJg6bcjjoqSc4UmzQU5ne2LorQ6sdqQkfLuS8b7NTZ5fYCcH6uCKoE61XCjjACaH",
  "key1": "43Y4feus4wN3qTKhXrHvYzNFMUMNek1wBx3hSrzJzJg38JYGcCffuyBiWkxxfjszQAYUj39vP1XGovS3pwS91jm2",
  "key2": "ZroyR3zHhWXMrrDJnWnjgtEPrwWbkvareTgC9Qu7VfeRZKUiBn7oWzbTbfbrRrm4d9w4xuNY9k4nSatKsCasUaM",
  "key3": "2nAbKkxN88anumdg8E52WavDG8GkwRGonbtGaodqzYpPXoh5Kv7FnHkpGpGLwBExgzNThfjB3wiggAG9o4isA5tc",
  "key4": "5eqHQVdiWVU61MuC7MjC36xEMbt8aE8yzEwtVVtSPUCyxzafZBC3Vvxsm56aFhPecXmLzLA3LmXwzHwkiewkdqYF",
  "key5": "3gDoeAB8Ar9b785L4h1M7tmwvACuerKtNRVAwFYnWvV9evPAcWSZg9Bx6RtX1iFxJCLkfNdskcpgwydY3Yuucs1y",
  "key6": "4paPGVSoU1qDK9UHqf7kqegLPKM6Dfi9Tm6a56LctVAKPzpVPNnwNaVCihF5mLXkdGP1R7WNanNkxcAwHqs71Vpr",
  "key7": "YC2RLAGnEXAMQn399kdWH7erKGPTLHG365HtnDumGsjtfTFhRFUKqRfV3Hb5XUiovJGVwTzEnrnqJL5XqHwt4Tq",
  "key8": "5foqNz972ZKfpfs8q7xyLxobvXTzCahQaVTVMk4WLmFY9WmFjWwkucZDokMCjydEyV99rADhJXNYUFPPBbgh4F7a",
  "key9": "4PEUV5GHtH4LU5qJV622cxBLj5Z6FXGGL2jBcm24ZwHNiAMMMyz73G49c9Wka7vgQcrEiB14QoaguxMWW1mxPD4h",
  "key10": "34dN963WwfMQNEKXdCQrTsi54EgqGxWDPiU5q8sok1yWaEkf5BwRjf6owrFwzKmeMw43uYGjxMP1yxjHnEtzvpnw",
  "key11": "kNumpcBSR4KW8UXVMyuEgy2fQXSXJrVf93Y64AvJFxTeJtWNSiZwnR6iv5rUKRYv6KZiRjxpsamxyH1MnWmLKBD",
  "key12": "2xbPtGqKjEdsmCQts2sAPNi6zXje4aRWKy6hXJNbkTSGXX5qXz1DZZoWS1h8NXPc4YWCymAN8zLBeywodKq6ffUq",
  "key13": "5K6dvBH61MxD7thLVn9Wqn2Z9eZqXv7AP3zYda5h338Pm2fJ7QfPSeEbchJmv2Trcc6mvdrj48EP4wrfV3nACtj5",
  "key14": "2RBLbR6oPaLoA8Kc9DQRESgVvDt4S5fN7v9d59akDrMUWHGErRJU1Djisz5Dt6Qz137Kqj1GaSJz9iLBsVUJPZFD",
  "key15": "3hiNNYhmAjgS8rX6Ryzs63hYKrCi5rBV29mbWAmHKXV3FWqBrK4t5oCKpctDRR9QaHBjYwr8NXynHA2mMdPi6xXV",
  "key16": "2Xs2CfE825yMtQE9cAuaspiZv9EPLVUvLpDtDv3h56qjcLAsF6UXawNpzsNMSKHd7QCPFByVDCQqzburZivbGdDD",
  "key17": "S2P1t3jkSUvDGHDECijLnFE7rqhzbhVqqQ44dCEVrzp8TwZNnrU5TiLYZ1avja4YvDUPpmrEzbzvLXhC9hX3np4",
  "key18": "34etiupw4dKjeyDRYTT3TY9dEq4nccwupUbdTzZ9SY4oWTnZu6HLoJEYu9PfEA4Bp4iqXtU1juBLFYbYih9X68xK",
  "key19": "2oQoDAcNvCaWTaG1ZTb4Xts2QBiMUdvyzYYXBei95D3TE9txmV91zGhebHRQ5aef16A83xoyERZSSvVQMqX7thbZ",
  "key20": "3FHxceesJuwyTFWf4BnwJi7ZCMWndmbfvbgoaZXGxxRupt7eM75fr1kMwCyEDiLvKtkpWDiRCepLMJpKLTiZmxmY",
  "key21": "4pVfeApddwQHTkrRHS7ToieUXLHo2jkkBiRavWaptdCvydiwNPKk7TskNbxJ34idCdV4vFUfPqR5K9frdJsegXgv",
  "key22": "4Yd7bjKuAE3qaprgcTsArZ65tSuToMoE4gSacbsBG3vbBsfR6x5bicA2Rit7pDXRnDscmRwCzRCSg7YtBgzrRb56",
  "key23": "27tw2JFQzZcYjieTRdFqQRpg3W8BHViEUZN2oH9tVTxYJk7D5hXDKYQkVufGHPb48DtTQJYsxdjTeCtaYYVBSXrM",
  "key24": "47N9LXXsxkMqJxHPZcJFhWtWTnQZy8gfSFegk4oDCmtFZucEYqKqt2UhXkqGKbmrGzes1JXQHFv8T4La4X5sDXXT",
  "key25": "56DVNuNNHuK6mFQQxAcUP279JigSTZPzjHo6FfsQMcjYHTLcMES9uLb1qEyc1z9fMwkhGxMPXyjDzJzyh98AffYR",
  "key26": "qNdbBNn4Wci6KNxeec4zxJR3JrrHstQTuovm8P9A86Nh5sUxwKLf72zDPLdU9FdNXC1ynxPDtaArmxnPtnMD4tW",
  "key27": "3vvLNbbUj2PQ1AisdEzFjERraNMBY4jMCbFwZiszqMEZWP4nEuPB9uhPxLjwc5yviA58hQp3HJRwrecpxWBmTuAf",
  "key28": "2e1tEFSEo5u55f5CToHLdcYjrZ8UGXxzwAgKvNe2Dhjzu9kQF5oWtWytnwBuxNUigG2z9Y8wcCHdfpaTnvn4XAo",
  "key29": "2ofkABthHoN3neKH35RfBBQi4WPxwS9jDR1RL3yf6iak5KRwdmMtrPzNhhbYGParwbNAcKnUvhqbXCRAJmuRpdJg",
  "key30": "4kxtkMxLgmiiCGoBX6e79vmRcEVBMhJXy9dsaxctZrhdJD1o1zk3cSVaU7kDxeiwLASrLhr5TYxpbrgWoN4Zp8w9",
  "key31": "5kdruP16Fr1uP5xnA1vFXP6PDDDG3bM3CszkMP8xrnkg4ZP6uBfM186dduWtoT8DkwjgLKCGhNN6VXojRFpkdehS",
  "key32": "3zsMrzoJqP7RshWatjL9jwQ28ZQiWjW9BLAf7wQC7PCdcPagRCNagKJDb7a8Tg4kS46rN54TWL836WfSXpWk4M3X",
  "key33": "uMpbgda9vzx21U8txAUogSbfzRrnq4GoP89uUk9XAtPkUfD8jbK149zo54hePmYRqZgUqtJJarQ8rwCH9pPWwVR",
  "key34": "4LHzUhdMQbjTpCP2xqnmVYbGqrLcELEvd8aj69SEx2N8E15cyQGrwaLJSdvrKGpK2BGadDuzBLVQEizaCiv511WJ",
  "key35": "2DcoZTK3VCPeChgQepoLeaz6sA8zRHEqsST6wEza4eUhKVDsT2uGxMUE4XtrGfC47jyo1yV5eh1mjdC6A9B8zJsg",
  "key36": "58hkMLtA4TaEcWQEWJnrGw2egVT7GukMEVadjN9fEcPAV3aSYTxLQHZ3PDbAk2piPnfQSw45CL4DMqo4BrQZUUrT",
  "key37": "3ETqvL5jKhZ3vQxrGtTTLhJNvURzuW9LUbYy1kg7E4RntQ9KGCBqi6huWa3BXn692qXMdufKWVehcBfRKPFmgH9N",
  "key38": "5PCL2RdHRcPSLt93JBGNFzPAihEBr1YiRgLZPmnhK8jnR2JL787qUqsUCXU5pXb67dk3RjG7KmKSyrnk2gs2Y2Yd",
  "key39": "4dzPbXUhyQkZzmfNdJhRyHJU9QcVhPrcavymaf7SBaYEEbzDagAuwtRtHhSHsAV1LB88YsKTitXVU5KGdUPmqA8M",
  "key40": "56pdvPMAMTh3xN7pqzmQhvZYqBFvyvBGGkfRECLkZFkd1r6vJ6EYZfiguPVuycoL8JPDekw4AiNUiU8R5ta4FZzn",
  "key41": "3JPE3FZZk9AtzpKYoupxsuxqXXsum7uAgRFabqKvGLzmASRuDXnsgCRPPpw535uncdyTY9MMAn6DEF1as1wKaBYu",
  "key42": "5ytzCFGBXRCDoTSpq3xRjBKfCBYyBd8YwxY3s3chVBcC3fJ1RAZLgR5eMAQAF5oyP6G6yGYZkpkPnnagC6aueoSo",
  "key43": "W7r2wDh7n6GaaLyV91EGaXvKju3CeSM9uL9jNgE4vG5C7fnFZQC5bvJuuawzFSSshHrkKbpnjfPaEtfNKLsFfp5",
  "key44": "2tV5RUW7z3z16X982EBt5jzm1N2Sp5vZDLBD2jxEcSWnN3AMiikN5dYBEREWEjHZdWs4rtbmAVuNtDE7dz3KCPMk"
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
