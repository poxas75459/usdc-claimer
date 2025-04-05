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
    "5ZfeHwFwAAgwZLwJ9NhKqiJ1wubeRbqmaEzb38WmmjABGq6cD4XXMu9UqrBpUgATkLo3LzaJi7p7nzZSuNQvXiWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiJiw6V6C8E191P86Jid5du5e9vubEud7qjaRkhDBbkLw3EKhBCjbKGw73j6YCJLtEw9tLBVndnEiCLjWoxVJJS",
  "key1": "4hmxjJg4uJFDbpcxTgaZYoYooPNMo5z4QcFQ9rPPBbuKGkjEZZnYMMZW7oT4yx5Jvh8DVT65BQxyFzoXriR26tfQ",
  "key2": "2JSdeah1LT8sFYHVgWtW2DQPuAfWVeVq4e2ZkzDPB7VdcMUSwPmg8MNW9vzVoZbqRbS3shuwEvdHUZpV49ZnCWLo",
  "key3": "5gr3esA44SRLYwHXkrpYMUksQCLa2Bq8iCHssxKuwxH77ZSNyHBvRLKxa2F9WoCEKDV1y6q21s7GY839nTN4wQuH",
  "key4": "WrYabvasfcFLMU5Y1tcEuFrsPihmUp2Phb8UVpHQfxhHPGdAQPJYqtvhg7k1df5T1jr5oLcf8umiyMmbWgBxt92",
  "key5": "3u3SR4RR9pDuTD8JsLxQ9MFAbVC3gUURyJe794DNWhq8aiv9h4CdsvKPUTDkJQj4s8q88kuiXytA8aAiSyFYqaV",
  "key6": "1S6fihN7BWdZSLfXYjprQyNonRLHBuJbNC63Aq1j3Uvar7cbCX7pCatntHY8oPEVLUXZeNNLKi1RTTD3NiQyZDo",
  "key7": "nsCWBUU8A8QRkrVH6UA1xb3QNVJqm7rN77RAVdQuaUDCVEi9ynKjrE95JMJpngBFiyfMsFB2dbp1WknubXrYCqe",
  "key8": "2ddeQo9ihgoaaeWDqssQBoy2wguJXCsz5HtMNBscnw979urBvpP2KWdKw6hpNf9RYynRmANM9yM3y9MZenGHHE3M",
  "key9": "2QvEwt18rUAN8kXNfLB3t9hPb8M82CUoPwiPwqgCFeh4txfBH2swd4onkVnFLB3DAGdvXJJRcUVWCUf6WGc2qjdf",
  "key10": "XgV5TreBjMkLgKXQTt6UFwm4Hr4LsgBfKNDcJhx3xvKqebkBoNsJQvRKX78nd1mnKnFgBnJpYgRY9DGpQqpLZtf",
  "key11": "582jXLt5ChFnWP54jHo5oXDJjTbGDBju51xk8Qh7vp8BaQAu2WJHbqTcj5X38HHhwKNQoqEHZaPorciJhsuskZ35",
  "key12": "3doVdPcEVv3fWtppVroAK95GB8eGT8JGB8aQ4VLbDhwkpYTTi5zzZKYjYGnYSwX8RSopcCvBdMB91vTEDCGHbwrB",
  "key13": "39sEmZoZESvzPoudkBzZxefvikGbYtYgJoM5J4eNofBdEcmdt3V5K47TKhcJ6sttzWE5UA7E3wMxyugQMs6mXBvG",
  "key14": "Jrbs1YWa6tyUuAVxXjsiPcdTajorCDYay2ThW8k7zno16MY5CFZjVGTJvNQhUikmARPFN2mi7mrmhKnU9QrBdfr",
  "key15": "yCLpEfTMaumVsk9rKFWxLZbjEeYBfZqRsTcJpQjC2C1ixNW9uMswDwyqtucS3wxwbQfMcCG4sBsJTT3xvJU2jBK",
  "key16": "wV8kLaQaugUbnGYd66W2LaQbNJeu58nRb2534usYHtGPkanvXsVUhAxNnuCMV6uW2dVQ3xQyEFampc9ugw2m6by",
  "key17": "F5gGvnWUmXw9FAYhUrWzVGk4go9DYCSzCMCfQiBrqEe3k7xgDHJr89BZej2o9dEXmEh9PKQzDRuq5tT3ANDyojd",
  "key18": "5wa6eXprV6RTCN9z6XciDcB3BeH7g7ndihEqua1nkD4yENtE9Re8G1jW2ZYiBUf4MKhGA26ESvVwaSFmzeeP1HH5",
  "key19": "5kgeEuQKDbgx32H5kEeLDgLWyTWXMWjGBVXYKoMoTgfyANCJxABMtTAuEwPN49oRh5UebKRsBFvZSrou5V1yN7mV",
  "key20": "2T2RgNA3zXsejoZzxj6PurmrMEqqoqnCteXCabgYY9Tv8KoqUryUa9ssbYasSdrsSF5hve1rkNdf8ExukdzcpfFi",
  "key21": "4H3hgPTg8CDmoRdXn8gFi7Zv18s1SMYjngKtH2T1Fn2reAukspqdRP8oW2J7gebZd1XYSCRcCVqarvEBKsngbsiS",
  "key22": "C542xtcf76QaS3XehTf7Qhgzubq4UqA1NbnT4iuY5vh3Mv2BNNyDgqj6rkHZiRoK9TrDYaiBFNF5hwYxcu6WCdF",
  "key23": "2Gy8ZQK7FrLEEa3267q9179PnuxTmZmwR1H68VBsghiBsoaHJzENE2u3SeeciS3Ue7L3ySqfxHrEnBUebrhP8eAM",
  "key24": "5BJ9KRWKZkUeTEgo21VTPXTusV8NcDbfDKpXzh1sUf2ntk583ndLMDqUZw4vGEytFkNUiRoP6HAvJSaFnMJaJby",
  "key25": "4LR11tgH7U4NLonBHwwZm56B9rGdrnF1VKwDRgy4L2kocuBMY2Kc37FYs8mBLbYhLVMzYPKJkoJj51ySPJWJkfbZ",
  "key26": "4ysPo9QaAC7YyrR6Rtmthw8CgC7eFF7qJmXYEymYrowNyaoBDicTs2mtskKFwZccu5U7R2D8whrHJhvrkrnPhLBb",
  "key27": "yCz54YrFXmSVCsCj51Vkzraxz5VewFJ4mKbBNVAnGCXDdZZJiNymbSAP2r42yTK4hj8bP82Kdz1hqvHwFfmW7UP"
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
