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
    "7p3XC8twKLmwbdDiPNm8coAJYrQ8Gt62a9XfTwhrr7sSsdZbkqLTKxde5YMBEZ7oDTp7RV29qvLjzmdCh29s1Gq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7qdgXQPKmcYsuvEkxD1JqYZEhh9VUZScNnxTCEEkcnFrb8sDvtwLwNs5PGh3phpUzMahGJ14eaTmXZjf6rc2LQ",
  "key1": "32K8p8sJFgYYqiNhcWcrx2oBRrzUJSsxUuRQRPXQ72FJBcguDxuZjUHmh3WUptXmoZ13p3RpwqwePnHRKNci8Xom",
  "key2": "RoyqWUdn27ezy28T73x1Bhymt6mNLTpE5sVNdKDYfy7WBpUTavU2BAsgd6eKiK82eZGZMiqkWBBUdPvib3S3PwY",
  "key3": "YdNgYpmGRg4u5oQCLgPpjr3v2GGtRM8QETPMPYYt99at7LDk34YxD9sEwrjh42yiDij5MbLYaPm4x6zBv3q9C7i",
  "key4": "4qDSk8ReyuM5kT8ZfBz52NSLM5JqxrtVuoVKv5ZVkBQaRWTyoAjwZ4HfrgaUJH3o347ypBJxciWWQfXt1UaTwDnp",
  "key5": "sj4666ktfL2Jiy2boHvVi9mpEh4KjDrV3fWWEg2KPAbD21Y9HTXGKhfg1MAbbcnDXYLamGGDf7k1L3KkCCVtwEe",
  "key6": "2f3mBfxwsdDm9Q4SYd2hkePBNxGPmpxfQu5AWMYdC2uNRckSH49UG5MsYJ19EfvcbPSdDosyChvrVvXxKSvPDJx4",
  "key7": "2TwGUxPE2DKD3HFULSe763CfNUGqSYCRja5gXwV4V117fLEvXVov1ViwbjC7dY8dcMj78g1mWsUYvGZez6jX8gCx",
  "key8": "YaVuH51pD7TcaPC56C79kjzBLzPX1VSMJNsQtZpQZMvHwmX96YebbRX9vJ9U8QCip6k5VEXygUW1FAZ7zT3vK3V",
  "key9": "2mqQvAnqkqHnbkA29mXng6p9DTrsLeYdAyJ7TdrmRW946xDv3kzdouJq44VUeVEZqUQ23XLRyp7cTrxc5cKqnns3",
  "key10": "5FHXR6bhTXmBm95rhYu7c6EuFePWvzeNr96R8VEZnGkVjWDncaqJHS5qBMA6MCMbzs7Kv1D3D2ekCTLFkAcCS7GX",
  "key11": "5KnLNgTrQX1Cdfy12qkSPTsswF3oU7ejX6JNz6H3GSb3sELCsEK3S9vr9bWy2xT8so3M4jmTeUkrXJdjQUFGTFvj",
  "key12": "ivo2agNEcKfd3tvwpDN1eacqHGfDh9MVFPUNaPUrbXzvPBbihGyAgy64sH7N1iw891MYezvxbiJLTtvXUF2T2xf",
  "key13": "35b4cdRWLAp4GjjNu33AwUxvzhWEAZVjAan6SEkuTKHwfxMEy9khvrFDb6r3hM7Q6x4MWTzWEGUPF8QqkbDjzeLV",
  "key14": "3qCjDUKnpYu8C9kTVPm1GNofv3dkUNyh5A2eDjH2foMc1KHrMsMFPCqte33vH81sqon5cFPifwKQ3BNs9DDvt7v8",
  "key15": "3nXk6vGbjrUhQd3NT7EKvJydLcYsmcETNrk1NokuL5rYiD16XbFECQ6d95QaQntKvZFuCpSsxqb5bqSJGJXn1QG2",
  "key16": "3dUHDim7e8NcfUX5MTD6Yfm8pgGo6T1yTg1DEvadmCxjP6o2VtsWF41jNAiucvb2wdqycqf1yJGvxE5rJCpyAvkY",
  "key17": "5ewWYZHJapy3rhYL7tGMZ7MskVBLHiwMiNq1xfrz59rcVkxB8GecWA1BLYRFB3mcFWm2kdkyy79qDBJWAy79dLfT",
  "key18": "679oXPRihncoooLEUbmYvrNChGegGCtGokrYX6hMcMXQxJ8Tm6wqNH1EzQgozzQgaQFenbKEBzBkRMbqfqK6tqcN",
  "key19": "TTYigqVhtLKib3eRQifBEmUwtU3MQV9pdQjxnCXKyxinaJX842jcgfV4VW1c4fN5FKubvjpa7DhLbMm2hcNRbx8",
  "key20": "BXHEK81GMb7VdXKmx9MMyxH4r4wmbXdfJEE2haocKtcwLNRqVcnu1KfuJR5eZsTQuRvtGPoTHJSpWuXasM93P1P",
  "key21": "pZWbswyS4vtCKjHb1PH2Ce9TpFWdy57EizByspg1JS2FcUov9FK2dW5UESMSF7u7EwnUsvQuJadB3AgzWPC3fxX",
  "key22": "5aKPzaqXoghe86UxAFyesxHarMKiRGeizrcZt7GqAjrUKvFdT4ww6T7oj3oQTG61fx4EXVQxa22wCmbwu7B6beSK",
  "key23": "5GnPadH4PSrrsrw7aY6TuMXKdwNXhmvbqCbXNFHxXUksCr4kuP31hUBKkKt2qbr7rz8T97FvQCb8P5pfxjWyC2Vf",
  "key24": "5gmDDuykd6tLTxw11tQhFnUmv9SU1fZ5D7Cu6BBdmoqahWsXTZrx6mD5tEJhSZwZFKVFANh4zpUFe2mhLPUsrkKv"
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
