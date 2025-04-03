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
    "5sfKPpwHVGbXa3h2YzL2mW9gr51wMRscp2exPqHAbQoszd6ZaMuiuN92RbZVHDcoKXxs3ZEfjqBuyFxTp6D2jNi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TQb1u13cmqmhKzxVknw5JW5k24jEZY6PoUDxSJnKytjTPPZR4z1FMAsLCK114K8Vzby4gaRzL1Y2nApn2j2H5Ax",
  "key1": "5kRyPE78XQaXuCFCnxtVRazPsXXwukEU6F8HiUX4RZ6afW2cL7r6mYRJU3r5Ek2Y3WP9Fgaua72fkSKdJ1NkhyT",
  "key2": "4zRfJpx4FW4Rb47wSB5EmKuFYvfvexZj2WsiDBobGt7ACovXXoDzWUJSzrX5EVyyFgHyFxYGe9txS33QLa8fjgTS",
  "key3": "2MLpUcQwEvbgQtPg1hNvcsmsaQG9mE2Yvp58kbnrFTWiZMh7wsQiVBsYn9fBYaz4E3Kq5JjX93tQe9uuhnLpncTm",
  "key4": "5GEhFpxQtHBLovv7HS9FiJ1oun7eJ4qP3CLN9tq1zqYhxSh9CEPGEKS4CxecDu2XyVaojbhASCV31VL6zCnmve1m",
  "key5": "3sutGBr6nn8qcayGFtBFb6R4i2gJEBjzG7SfsY2w9nXHaQ338J5QCe4pMDj5bEG5ropunXvLzcT4tUqixpH3wFF7",
  "key6": "uQH7TzeGgZG3QYHFVHHhR76YynwcKNHHpZpyDcaW3Js912Lx2hzuNXjMbgiMmWnxN2HZD6s6sUUDzRDTLaALkE8",
  "key7": "s2cVT21NmLeZr8KS2P4XkSwKtPzpXt2bR8DBLYUdMgf4dWuaVo7u4b6QbXkHpwQvYMFRoN1tpicNrqRHhADfVwz",
  "key8": "2NURW6vcvtfWUwbyAbqhqApTAQv3WJVQUApx7gN1PsP5ReW3imJr69xGT7dnkLKNPxMUeYep1F9s5HWTKWV4kDzs",
  "key9": "66YsHpvz27817MtXo3Z6TqXEqVSS1tn9w7FYUqHN6aXHK1MdwEnkQsfjwJMeBSbL6dFRq7Zdtj1nZqsDbHRaMLD5",
  "key10": "aqoguMnS9z8q3cbr1eyGQEMyiTwRTfHpXFu6gphvaB6oojunym13i8dZgoTfS7HWyA1ByBM2NJ45xEXzrrqmfWL",
  "key11": "Kbr7c85eiu3RxNssceozELA61SvxfXBXBtJkLo335goaeDfgcf9x4yBuQp5qPdzfCCDHbQeqNADyTixfWBsdUVU",
  "key12": "4vrt17kmQSr8eGifaa7o8NRymJtQZUFGhN4J9KB16FNiqLeGqTWziPuW1z5BrNGoH3ujrSqxCLMp4FmnGgk3MPyu",
  "key13": "3NUxAVcKc9CmwgWrgERVm67rn53NJBmPpdY3pSPQzbbtGQva7Hw3TqLb7Rh7dUDi6Z3HGm4KzjssuLQTZCeiqswf",
  "key14": "2Y9LKmSHQCrtkbS73TzH1RK9J1ss1oRPah2Wrmg78UnHYKbBVU49SyNF2sgB8JTNg6Schdk7gKdhuzJbgUWrxwyQ",
  "key15": "5rqLsj5M9o4d9vYhmkkKqJuNt31StA454GJ2tUHcEUZ6cXUkHGC7BPGqiXnro4TLqWWWHoy67M4BRUmzFZaEGQuS",
  "key16": "2TCuTRPFYfECceXXtCq3So9aa4zZPmHm8A54nw65GooYnWGz7ZiwWwJaMGWYqN1dCkwBUUue39aCNgkUjcoX4w1b",
  "key17": "3XxB9EkFbwJETeY5btTy8akXyh1NeHKsmCru7ie2k8Fe5F9yaqaHh1tjMBpzXsMtBa8dQXFHBZ7L3U3tcqxyqatN",
  "key18": "4XtpHLHmMQNvN4Re8eYMyNFS8wQ6vkn7YsR5e1b2JhE9KprYt35GMQJdzQnYywym5bL8VborWXpMJB9wS51Ar5Pr",
  "key19": "2njZkP9f7Kx4V4CyxZuhS5tHGGQvC7sHdXQcXhr3xKHABMyJnBbJ2z4Qtk6N9qY5Dp5Y5ZxrPCmtEW2RWMqJnRkM",
  "key20": "4DJzmdz5QEKYTfTkB9pZUD6sJwCdvkg9jTHzju5Rn4VCyTfDbS2LFdmCk3o9SNE6vT6wZSUu8GKBUrbrrSeGN4Js",
  "key21": "3ATSykK5PUVRz3FtXM1cAK4gh4b5zQ4joHYoayvpdjq8GvDSnJoCkDDdNaiXD1XvNggtmBHMbW537uB93gWKywmg",
  "key22": "4LwAHZd7pqimDHdPKexbnM5LFeveyPan6oN4VTCpLnf3QMcrDRJoW6uRp8FsqwBKQ7Bx4yYZjZAYU78ntp7sBDmU",
  "key23": "3Usu9n95oaxusSNvwPEVj2Rzr3ZTrDPjNenv5P1eCK7W2ihrVh84MbfeatUhQrbxBBUTSMi35Xe2kREACtEgV2x1",
  "key24": "358bfcdD67ZWnAvtYNb8ZHknDvNovswfvd2mCwhDx1fA39oKDZgH1o5rfVBdiLy91rxpMmcg9QarzX6q4CbtLLby",
  "key25": "3NLjt7hkSVgGCDezR3BcQAXuDGzoWR5hyFSseAXTCUCLeUttSfeXb7HSVBXNv2ekRo4oKPprJB3Hpbj52TpjiaSj",
  "key26": "skH2goqzjVAUqekpmogXEfnboXxVPf8osdguJRYdwojVkYtdzXDtiKW9HPNk1w2r2QgJmxj4cHtNhHShWUrXTVn",
  "key27": "2xtA4mgnu5nPFrJBkvKgPJbG9uXENWuLsztuuh5V8UkYA17aiFGnTBhDk6NBrra3BuETYVm8WrhXLiLjJ24bUd7q",
  "key28": "HKd1oF9REkv84ntvFuPkCesRQyCeSFWbk7p9Dvk9tyTHHffCGPhdLtnkDMKUFyTDR9MB3D3DKFmRrdGqnxU8SFL",
  "key29": "5mYnNk7LgJh9uiDyTEthciRKCCbyPiYihBdRLGM93uugpRxxUgk5jmaxCrU36CZjs3GnNqp9HFMsiSqRxjTZXeo4",
  "key30": "4tVdbBmwGZaEzsNwbvtLGAvPToGRAk28cyrhbDRaC7Fwfm9Bb5NqAKWU1YzWPomYBPf2wPw77Jz2vLqBcz8pVggd",
  "key31": "3FcpccAqh6HyoWRotz6h1sH7rfYp8roWUSNyn2KRKgFAssC31YHRRWD7qrWBoa9jowY6TSQsXAc9gBezCYTMsibB",
  "key32": "557faukXxWcCDsqfTnPSb45Vjeat1Ph5FjKpBcrXXLZgcC3hbW2kPHZm2NCvhXmA6NNH6hJGLKGhEGzrLqMcNhjG",
  "key33": "5mi3fMEsF1G6MB5nY4SM67WZBDnz23DMGWpb1RFWMpERtFuju9Apij1Cn7EiByMqaQoqHvpJkaDkWq2kYe9cGV5C",
  "key34": "xDpxeDu1CUFj3h3pNgw8PaFCfcqMEkjac5kjRJfkM5soPdpqnQDRwYtpvsBPZYYPH4ezsbnERRn4RDwSsDFaDra",
  "key35": "3jRReaueKRZaZ3ZCpeDkRcLRmzPX1JmKvRCzrS9aMVhSxzV8rAyX7PR5ZzaY73ijCERzzvHqXU1iBK6ghLJUAMiB",
  "key36": "26eF6RprtetKSgL5PjtVWU2qMkKqMMmARnDtSGbbpsgGtmiBBdjL38mgapbX1aBuVnJWh79UrCCST5NCd25PVBf4",
  "key37": "52VaKvrL48Q5mzeptZJihbSTkRfxhs74YETHdjEJWgkqhz4sRM6x6UxX346dbG5MfNE88ftjUyvKqukpdDrF9vij",
  "key38": "26w8C56rgfWRM2dxs5EwccZpuiXAZiBBr37hJKmLvpAKNiEwEAKTp2tDYGv8zXWc9MQcxq12nENW5zsfFA7z2eMV"
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
