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
    "KhhY56G1veJCTxuKvaZ8pDxjTB9w4uGz5FJPMFricTJaXNoGoKYPGty7yWpM9xB3w4BzAWsgWwDbpeBco5TdGvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CbEAqAB2VUve5CHnNfnwM6mAAERUUVS1HpdyNSkrHkqYw3KZoHsBQiGyd6R4nhTpNTcH3gopGd4rhiV5daDxKAf",
  "key1": "2JFPvwEedjNhNf1mvNrTSMErLxi1zp7BebnD6Wu9SE7VnTEEbFtoZB2epSpQtRPRyTKdXnK6kyQqWZ2BLH4c6u3J",
  "key2": "62K8jdyAt7nuPhWGRuC3S5HMdmpx13c8f1JbLEobmSwg4PrXJhCP9Azxrf74xGNkANAo3HMeYSwGPCurkQAkYYF1",
  "key3": "5tgNfP3XHMvrkVDpTSDyBYY4k8stF8hpn7jow4qm6FdqMfhbYFasA9B6RHAENpfEYVqj1njSd1yMr6sDyLgiuAZt",
  "key4": "3rfBuyCRwtKKdoH4WvZjjtdATF9uunMF8ijhvxefgqc6JcTZFnA1J2tGxrygJrEDUPkWXLEgWDCKfuDU3Dd7c1J2",
  "key5": "2w4eiDHCJn1xKTFHjhm9mCVw4RniXjYKe6pGbDYC8QxX5BJUwPDXDTtd6tLK1iR1TMVGQDwaTfNdMVWjkM2afbQt",
  "key6": "28L8W1LqrLCMRiGn2WQYuC2idQ4SSuVdCZ9V78KQbFRND4whcYFXqBvDuvLrhEHzJL3p1fj7pQJZGHxu9EgstQMv",
  "key7": "5b29ja9bPwYH2scNM4b9M3CZrXWTrZMLLUPKtoozTBFeQpH6R7LnhQSWbPLc62yHMJo6XHWwoKZgs58uNDkBi7GY",
  "key8": "64GWAe199QBRBAhFoqzGrBWQFMKNV1vY3HRovU8ZKJBKZPwz3HDKQWM1nscQ3F58SHMqpZwCSqwzJnsva5uN8tKW",
  "key9": "2CwYqD8bB6YKS6arBo2azvhQjXaiUnmKMDJt4UGhKHjB6D7gwMY5LeYh1uaXZpC5pY2qg1BJhaYcUZMvkWxmDWwP",
  "key10": "2z5j5YXPT7hoKSr6uqPERCHUAsK2evrisvWfvtDoDNEcdjZqc7NoEPirSTGK7oPbaaHJPEMZRNTorFhEakeBaNXA",
  "key11": "XUTAdmfqdHNpycS5kZRjGdnZHixzaZGTMDWq7Ku7DkX3kud196mb7m2WCtxt6k1X8yr6oWbt6veK5esUQC7Er2Q",
  "key12": "31dNSqwc1NdVm49CWs3Woxe2KDpHhfzHunsMayaxmG2bxGKHxa1ctdg2bpdFUrM3rnD4WpeQvVSgxWhmv4DJq95U",
  "key13": "2yYEPN6Fn95DF7EftY5iAVox28RfjHFJauqyP4zVzKBsQhuKdByfaRUpAE5H1TKJWTw72jGrNWzWoeDVmXdfmTcg",
  "key14": "4h7GqBD1jTjwW4d6qkgCKxqn2edro1itT3wSXNB9fqaYz3iJw1586TddUXvKjJp8gXcJuRQiF9oSsuQ9aqDiR3ha",
  "key15": "3d7bDSLUN3ZcxnuWMdcN1TnDLxHeiWUCHoxUh3y3JZBm41N7kU78o7WqkQX6MvTd2D4Da7iDKwUsdYU6v99YegnV",
  "key16": "2Znnbi67fHwBRgwPBH9Ht4dm5Z7PcRzcb9Ay7WWa9Rqqi2sy4tjXmZNAQW2D9iVkFE3xYs13g8S1SgbwJwUygJmR",
  "key17": "TqQ9tasM6k2KRKgpEEqEutaocjCUC8yYf7S57eoL5hHpojP4rK827285mm54josyRSbmwLmsfAc5w1v92uHMafL",
  "key18": "5N1rNJfLD4RzuyiGjPSrop4umkewqoXXwG29e9AsgdZuB1oeyiDqaAhPLM3aSXiwAjjznuyzgVd914PNkZRvNSq5",
  "key19": "28M99UydEqm7yDVY9x3MEMBMbqKMGoGr4PjeqykcLUPwgEgMtEsNxoFQGKkxZm4S7tUiAYSphugX7aLDK6FMfprK",
  "key20": "3vtf8hzU1VgsSzWzj9hXpBQymPrWTc2bS5LQytF7jtj5KiQvPRxX16mvBRMygVfBeVm5Q6iVBoG3kMxu31Xzy3BE",
  "key21": "3ZEDxbTUvnWGjjQFkrL11uACru4rwq1oZEFULFFv2p4UBqbJNQCTeW1ZSY38ZRRpEDMpNsGVctuRqVeBBzEZJDJF",
  "key22": "3GJw1kEH5DNiGkQtKC5uhaw2jfrpD8LSnKndvZXNaDPqoYTdgv7WXQF7qt1uVBg42LzzAU8HB9KPZYb5cuVXhZSG",
  "key23": "jPWmxNkVynPqyNMJGGVibuPFShsE7e83UbotRJyNooQtsyjA1VrxG1fhRvhSkoK9qmFKCh9WGDFGVBmXJLdQFKm",
  "key24": "2Z6epzZUZtfM8QrLw9nEw7yGdZ8ZxF99UXCaZvorvr4QhPjxupH6ivEZM6pfk45J433r37SDex8X9yQsTDWgPoMU",
  "key25": "4uxzqaH29ye83JFV7o2HidURJBh5Fqr5yg2yXRkJw3jXGDGQ2UtpPUqH4HH4gyMnNJSRgETj3XFRcQDoMjdWRGNa"
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
