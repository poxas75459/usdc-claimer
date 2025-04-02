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
    "2ArshQdkAspJpvUMzRaSKBDf4WbtDcpXKxAiCRmSjhxRpDKMUDm488ipkJwvQrmBL33nEvVDFk316AaeRorh5Bbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yduESXptVkhuN4T95NAVNEhpSTSmta6vThe5ungTEdhPv6duc3sqhbCGq2kwWRLsH7tqgkXBkCuLGP8C1LQgWKy",
  "key1": "5B9JocxcF4WsSsLW8BTTRxeSc71iFzgieogEDeZu97sZJiMx8DftkmEe851UBhFkq3RjRRdUkLB7CdJSfaMMEYU2",
  "key2": "25m6eCt9YCcPcvhtjQvnPDLsXXn5QgYJLedT951fatHTPNbKbUTsYLr9UAP1LFEbgQdknDZ7NxmuL8JdizZBNqxM",
  "key3": "R6AUJ8GKNTbXqzUNix1evkKKQ3siB83wtSmqNSW11EkzRtdjhwZifL1V6SFGpYnHfJcvwaHF9C8gvP58BqEcRje",
  "key4": "HjjRCpNjeGW8RZCJwW6wptKRV9kCWyNa47SGGsXyJd65ENz3svqsxRVoMmMKmycdhQVdsAgXKUkw1fGCBzuEjqZ",
  "key5": "3F9H2Yvd1wgqgpG8zqeWskLVaKHcuoexD3KB1SStJuqN3Uejsibsdob1aDqiuD75GGihnkFkFQQPcLUTUbMqwoEL",
  "key6": "5aNBsW4Q7BJgQ5MTDNk5J7h81ucQEuvZuec2zBcwBCDbAZxK8jkyNwDLRBgja1QkDNmBYP87Wa7P9AWzZ4P1TtJm",
  "key7": "5E8PK7cCEUpiBfDJaeTLEU5cePJrJyvAALc36ewu5UvUSU3pXefEYGS3JZAuwKeD1h88XoRxniMBQaYQx7owiUQt",
  "key8": "127jmopigrrDVVvgFQwUEYXomzEiHYCkW6k62VgG3b6j1iEGx7QiAR2vJUerahrJKwZSMovxCm6fEPr2mCfBw53y",
  "key9": "4z43sFcTXsSF96Fj4cNeU7SAFTj9horuE4qu53umbArjxmgNAKqNYNBoyToQF4kTikkiTNiZY2NJ1kCu2yJ4QAe1",
  "key10": "5cPZfe955v91ebuQkmeepT56cMU8y89ip31pHaPeHs8MC3MDRMBVZmVpaE6xLC9ZLL22SBtsACrNtN27B4hsZBJn",
  "key11": "2MMNPWvAgqjwf4gpjTaCPMKaJn59Evo82jLFxCuXRXq3qkr5j8ozLJVMPJP5xYZwjL4W9wjomDrCbsrMuDENQwh6",
  "key12": "2rNEXRPkuYWoWLTMf4aRYwqoNVBvrhUyVSQSdUi29pmhVnxejNKT7GrxyDJFtoAf4VZGYQVqgGRWjZsER5jFfaRp",
  "key13": "2C1yrpLG85BsFLAza6mbUrHVvszrjEuB9mWvT9bs1VZzLemWhjbQXWfTGrYcEgdo2FsKtKCpZKF6wqpwgJ7BnvdL",
  "key14": "2xjru5dPGmjqdLrAnJ1Fck1AeknopLLi2DiVoSVJKGEx2BMRcpNF5PLvGrmmfHq2KTSHUpLRdUdfe9JEKoC7cTFr",
  "key15": "39owEpGLLFT3pUDmG3rMR7QNGwBRJKiAirXxRvcPYZ1TRGz7brFr9h3LkUB4JN8i7SemCnPMhMBZ1B42pG4qzLRW",
  "key16": "3Mz2xzmC9z2zsTxpszsEreDBbAfGqh4b4YLhqCnM4hTxkEnDTbfyMp78qfnihMFCzH2wQasEBiZ5WR4zWWxDZPey",
  "key17": "2cQfpS7aSs9ioNjchp7kjdUJVhsvM64HSLDAA9axD9i2Bcb6vq3sVzVQQ6Fn8kR6rUaGSA2TUiYSTT73C2FkgjYV",
  "key18": "3MxmBxQYnULDKPpwP3u4fhqCt5HAqgZh6kJR2F9ZfUeQpCoN6ruvJp3BuonzgRDarizejwmWSXUJCZDZpSWDyyQn",
  "key19": "22nW7toCLRVHTtg8Qb7GfbnEZetZKEPZZtaKph32eyqfKmhwYqmHTBScNgDeeHfDGDDftnjPcRWXrutFDJvn9KBS",
  "key20": "3KUoWJTA6BF7xzjS19oxUa74TMRx3SPEanTzZHmfYYnnx5m8MZTeu92Nqa7M7PuDQgvt8f3mRLVXHqcGGTDaL7FA",
  "key21": "3LzFk2FpXrgTqcqMyMyX7LtYHFsj1Ms97d1PutKR9BjkDfHsByyBuhww9WiyL1Bvp2F2kAf3c5GihEVqJYyRdNJD",
  "key22": "5C4pRzqwt3guZZoEvdKsaeFQWwFwxszt1E8A5v1iLGaE3bzSVa3a1VMAYCppEm7KAwWbYSVbxN8EyH1QogMA7xsy",
  "key23": "3hwQ2cKiRCASZKt4ERYMMYteeTkmeh7ea8GKvBwn2PH1L2Y1GrQoKGSqaqXjdkkP6V4yHd32gENuyVF9EuEn11aH",
  "key24": "5NcQuFZb1uUcnYRhA6vQWyAYngqfS1sHha8ZVZyvVnRHiWXFivPV9A1KgqNwDzKwksDswPCS5CpY1y2WBWbP7HtF",
  "key25": "446Sb55MYG91cbnEaBz919czQtoxg2b2FFsKe6pCDCLbkZsidsCCqA3ZJSs2sWFcqsgTx49oLkcaY3eQ3s7wDkkK",
  "key26": "5488riV7RTZtFcVJ4EvseY1YyiGR5rwC3xzfwgceGxQ1aoqZiMs68jcqgKxsveiGSVE1XkQSsZsQk1TcCcdgRgGt",
  "key27": "jjGjz7p6YjpC9Eq5Q1qZNrN7banbnST3CJSQrV5biiGDErKFgnM3tUkvSUvTsfZbQsMXpyHrpq7GaV1NrotN4MY",
  "key28": "25Q6hX2FYipxvaedokeuTuGtNJhQijfEnWkg1ErhgNS1qnEZ9CPcHseYGBfmhdoakM8CxFf6XzJWoKF29eVoNH64",
  "key29": "4Jm7QNVPErX9T7srHa8Ckid9LSeHuz7BZztuHwAfevv2y3oPTGf38oHnmVhbh4zHBG9373Cr7Wy9a5qP9q8wBLhX",
  "key30": "4RwmvjFeQCNrXbJ3BmkU121rkCQvfzerCxQguL7fk6vfViPSMPAFh1KDiXZXS6f7gfQ7WU5N1V87s7JwGPVsufGx",
  "key31": "zB9Hz7B8xPoRy3x8oxf5az44ihkMZ6zCdWu4RsdDDy6wVMknsZtZjYBYxWA7GT5a2cFMvpBnzXGiVjrvmBZFt15",
  "key32": "25XNYG85ipetWaq6i8688SpZoSexnWYKqoqWmqfkwd2UR5VGsdy4BR1sH8grnVcDbVefHKemfJzg8TUCMZZNJoNC",
  "key33": "3jyLhxYk7YNVVgqaQtZJAcaz7T8j8i4YLYiFGuKdYioDEDsG2EXvePLLYEFfwvnrtBEwjLBefqCWvuPt8CMHoHjn",
  "key34": "2F1iTY75vH7NfCUk7Bch11NSSxmagwq2Ni3BrnJeTXApCpwjMVA15uWVQro37r1ZFcfLU4TKXcPeYhkQet7Fg63U"
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
