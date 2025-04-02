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
    "3a9VQdPQFx84eiTpx4LJdB69Y45PL53VsKYLQqdCL8xcvCM6hRW6AixvihDtLts1xR5MJwWPnAHvxWNmfAd7YG2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57iwaHQmpiLogce3H3nTmqXYQuWAZdmfEtHgzxsaKHSiGs3KTStfSN9yyQfw4MN2vHLGiX3c2tPbfUS2KTJut3ev",
  "key1": "5GK5jBqJNoeJfCTsvHkybZABisuLtSohmFhHxPVvh9vWQKwPgVSXEaroNZtYYivxkftyXq94gX2jBUSx62v7ZguD",
  "key2": "5dM8nVMh4Sd6SPYzkTWaf9S6SwZLWkPC4S1rxVeKFCU6v6yo6a66dG8bCmRyqcy2FnkT9HZ9QUQtEUf7A9NoJc2c",
  "key3": "3f1a7t57rabtKCRP7a4kizhCUNMfR3Bacdr3PEeCzTTfLwKvTHmaNzhxHxzFjcFSNSxUEscagL7WgH2sHTu7Lukn",
  "key4": "4Nwy2VVEz4YkQ2XQ7X79B9Gc21Y2fCnjFDaW9v2573zWg4ZuFsNJR8pt8EAc7YXgz8foUCgMtkFWJGDHKwP16bmy",
  "key5": "37CVDaSFNqEF25Pt43f9s5aewtRyvbof18SbATrUk1dAgaXJkWp3oz8B2Mk2EtfqDesiezQevuDZDjrbEu4Z1GSa",
  "key6": "4LEhykHVtXBumbNhWYH6B97Grj481s1Pu3iH4Tb7Ca9qFxf6R3cjEkRktrE3xXja3fFwM5zQ44vWMM97yUKJA7zV",
  "key7": "43XxtpTGJAukhmM688ScecYQo5nZctsfpNUkNm32jKnrXU2J7RWr16wmoGpdCw8nF3Zf2fYGKe1YHPeuxC9A2SDC",
  "key8": "5pUtf7CiR84eFfC4nyALqDPzmFrB3Rtq5vNEPvvytvaTtgn9kju9EiG7NkhSj24QFTi47BU9rBVYkaA6tSJijhsK",
  "key9": "4a48iCoLo2yh7ChjeB45KLN1xirg1vyiemzM3JapDAox1knbTMxZ8c2HmczF2pBs2MMdTctdeNz4A6zBnGZcw61o",
  "key10": "3x14nRWKhMNMSSqSEF8ySrmpzrpLQLjNkgHnqrugft8oXFMkcHe4UZ9QQ4kTU2uMcrwNDqTEWwDpcdzVWjBPgBX3",
  "key11": "3YGuH2JSjv53g7mABCeJAFsR9BxUkf4ybZc57Zy8gFodzBe5nRHeFBYmnW44QwWgv82LPAF6FztJtrhp9VSQt7oc",
  "key12": "3fH8dF4xdcfDYg6RpFQ7JGoScePtUyndhiorCWhxFmz6ypgK21VpR42Mj48dExgusPVadWBtzM9q7U9kyXsj1qzX",
  "key13": "3N3iLEkD6LYo1rXRYp4FxXQ5XWAKHubhwvwdF6vXH69JRkC1gUQ26KJmtGMEdoapnhkX6wUvNE1jsUwYQn3ybAYL",
  "key14": "5CaeNeC4XTKjaH8bybJKaN4GjU3g8pcmbMmPtd6tMv5beMwSCJ6drUHehBjHjCQd8YF9VVwUmU7PpYJofALfyotw",
  "key15": "4qt1YufKoinSC7m1VizhkYdojNVexnAQmutVEp8ExVK9nosBtE783rQHCzKUM3p6aehSTnrftpPLkJjKwWdHjVyc",
  "key16": "3b8VrvS5SdjxyV2S3V8gzFs5G9VnC9j5VArvRX9LpuiHRYnJduEykKwj8DLbXT3TKMSKhNtbNwiVV7MmeTuQsYh8",
  "key17": "4kjnNdwgiTQvN2Gnn3XLvAmSA8feAyxZxGLhQ11jui6cXjbzAnCcmzFdp8iJFRRnxLJk2yYof9QKxi995cNdFbTA",
  "key18": "58xJfYwhf2L6sfRKg9Rovbt4uQ7nDBhvpUHcfh32jUDbu2szkDUCK8ZTibhGtwUKrihNrqtqq7uWxLSQpibkWQcb",
  "key19": "4qpieVZUfBDdMLDnh9NMXk6a9QnaDvEgU28sU2ycTombUVHAArfWsa4so3TxjNLRqvbV1YuhJNohimxuPYTrv2wf",
  "key20": "4h4SEWBKpCNcDe54aMwLrErtZscEsNDiKa6eeCwZh8bvrr5gYSD3mpqGgXmPqfw3WCPMKytnPiWkw2FnMndk72n9",
  "key21": "qbbdcUBNgvXijjeXLE1kAp1ykdqDkST3qhaAr9gXps7H5jRYGeTxuttFJsyEseiCtr89BHvPDs6cguzbWsrursP",
  "key22": "4tTGEf3rBsVgT6uNnQa9ozhp6tpNRrhiDA3sQiLB3yTSXBT8FmgpoBrggfac7mKyvBRdakV9BobXWNXG2pRAHYji",
  "key23": "2kZUuSHbptkEbkKyNTTdrD58UPceyvHtbKHzHkrDHTpdKYLuMsSHThzMs5GctKmXs8YYFhKMfHeUiVxE1ncyVzYW",
  "key24": "3JNZcdETpZakrGJEKqUr64qdmoXgrsVppAXoNqvA1UhRgvRKPy6jLE7YewmS9r4WH6w5JZCYxRg6DA121fyreT2n",
  "key25": "U9F7casxJiGiD7YmWeWXppgyNhdL3N4x37qPcuDH75kJboSER2zGeSo4mTcgsUnZcX3cuXeDPJiGKn3cV8abtzt",
  "key26": "67dBUs2rpZKCFkBhxuhwwaicG1XpiuU7yYxYabTGhs1H1hU3D9QK9qbkdqVtym4VcC47TBatzDZEjNLFUgV3mYgH",
  "key27": "8Zp3wqG4GsK8ozwdp4oV1YbkKtKsqeLVsw2YCU8GH24BHPoifyD24Wq9UYeZFXM9tcToNnJS9rnweV2SzufZ873",
  "key28": "2cJDBojBaZDyYFLU456M5xvyXTx3kXCpYsyM2dcVjMiC4By6Byo7h9V6JHtpz3xTmnkFoTrLryYezwvQzHwBsAJM",
  "key29": "4BJkbWBVJ9XftVGDmo6CqWUgsevyzuMoeeBr1E8AQRapDHmkryv5ukmocxbkYWozC7KjSwdZRGmBT2AeKnTWNaP8",
  "key30": "5CnazCgEy93PQoBbcdiprfx34B8JsGxgFSRyT23vAf3YNqGmM2oeNQzSLJjk9r9UtyxEvkiQVCLFz5w9m7DkBg7",
  "key31": "3v3x8VQoVPAe9R7Ag6BAmUqo7fTv7je82XfX1wwtoCcekWQLzrNzfqbw2GhbkFiBhLMsfmTfH7DrwnQmLehAMW5N",
  "key32": "4GL3mtao46fJ2S1ZwLj5SvyPMacFhEK1hu3XRLbSXnvDc1RszeJvhJ6sX4v2VhxvFfp2oYi5Rh6QhHKfP2J4PoVz",
  "key33": "4RbXYdwZGe1HyLaCCE43nxtrWtu4jQTxpVvWLYuURoA99LaniqnpTYMFWCYLwKXTnVdRSHkbXxUsns8x98M9Gb5m",
  "key34": "4vUuf3fxiZc8SDSTDfUJWZseubnLjQCGRtEdsbfbkdnLfFQ2mQDhPSGZwF6rLkcCPw7QMESTjez8LzGvQPAkCo9Z",
  "key35": "4Fbc6T1xMTLrUoVEM3chf34K61fwB1r19z6yVN5SP7KktGKysc5kz8i6c1thcaqGPPkeBqw5dkMMkFBnVuzft53u",
  "key36": "2hag6oh3fb6sgQBoM7XpqDRmRpSFngM2U3e2QDEXVQqU5BzZnaDFb2FowgsNiMK37hwRWnLaPa6egfwi63beJaek",
  "key37": "2Vor7qudyEV2TovizYnJdrjzoFH1quEQtwy15jfrvAtK6MSmTK5JEKPRidTk8wp9hLSFz9FfPbWfNbcB3AkgU2vB",
  "key38": "221hxNNtdd2gD7A5gf8fDixKQJ2RuvTtUYt2Pe5Jsi1ModNN3TBPGT8R9jyAL3HD77yFbmM3ZXUWzPWBvNFJkhmz",
  "key39": "3kn8obX3MJkMGPEoeLo2PD9CKnDoowCAz4bfdTDzF1WEYnPeGdsc5o1t5iQhVDKNWnnc4dswgmaa434NqrnKPgtH",
  "key40": "5fv3cXzhGf8KyqRDmgqtPWpoiie4GA2qaaVmZduqnz75UXMNSZaRhGJwCKr59dYEnLSYEKZS5vbckASdAi8yhHAm",
  "key41": "2GBbDsnKHNMhbNK2G2NZdpr5y66TQR976vbnSUaH9kziDhRaXR414JbSMQ72nWcqNzgncvdWKGQuiiyqHpsztExU",
  "key42": "2c8eCXVkH2xhD6gCNy7ERnAS9MeVpRECv25mQH62Qw9vvodQTC6ZuGeh2DrHNmdyKySM63aDKaN3zsAHwoTgJTfv"
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
