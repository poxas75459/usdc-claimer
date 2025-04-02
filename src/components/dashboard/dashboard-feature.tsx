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
    "29aGJQGYb9ehjfNkgV4u1aGLfFCTw6kjKksBbQ8aS4zPSUw6xcF1Df8NqSpBjYsh5wPHYpjWtdC4wcP9ZuLb7vkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wBhuH7EjNWyrohdGUqnRvKirHv4wzQURntbxm6qDeewjbL9H3E2Vus974kwEpBc7LfY96RWs454RwtmoSeMKXuz",
  "key1": "5SL6eChkRrg5trRU6GExoj9iCrBbFAyAuS7MGFyRKcEZWoBjt2WR7aJMavyc3ZKS9rojX8NR2Yr9ePGeCTotC5Rr",
  "key2": "5AEWgHfwJHhgc9CGdKrQgpwtrcaYJLrEc2waNZDzssJpeCAv1PxXyjqZXB1k28nQUwsFK46mayioisa744A4dsTb",
  "key3": "mydU7kYJGL2dQqPiWbHfVxArkptL33hDU8dvRnVAzyH7NsFmB9zpUCCtuEsKUa8wfk95tinvnLn5iPSbjptLUz5",
  "key4": "2QwrrPytqtSQSCKzcN5NhMjFgBvJeiMKt7U5SCEDVfJNHw26JnEjcGWPiRmCzVm9rqEem6NgFiGkzMhNBF19bTjQ",
  "key5": "31vzi29pN2W36c4JfSRdLGSjVjMjsf5oQDQwworC6Ju6ByLXWniQCvEj851ErmUYoPkuMM1c989jsuUpTkNzs3oH",
  "key6": "2XgN3rxVcMBqznbj1Kg9F2iUcEVMKUJiFnX6PSYhswbL3hRmgnT1CTZYBkyqTKXtA9VUZdvQyyUYZfEWcKshcH1c",
  "key7": "2LREb3SJV3mbDMcEB8cXjCPqVJhnBqA4tCMu368RpS8oB5tSMDbimeLSVzvjBnZH6x6dzmSgfF63q2yKEYCBZRLn",
  "key8": "5i3it34pNYYivpTSog8BLuYYQbg3k9TPMk6gZu91RLYrSmapQjk2hdKkSwDSpKDybPkaYtmqgtenp6X4YUydXS6G",
  "key9": "o5qs6gLJNYopmmcU3eWD8CXAWrMzNGVY5wb4xGamXHXwqmiHbmL3vkH8j32WAVwGnvX2L5GTHJhhj4H2Kr5dknB",
  "key10": "2fHUwamd5sUkMcB15959xnxZFQ4EsaEa3ojHwyKiCQnBXxmRPYAPMkxSCFRM1brPzezrFxJpdYksiNHtzB4DDVE4",
  "key11": "27SUG7DVLESo87Af8pypMyZxAUWfx79cizEFV35qsYWJoQEPVL1UgXvhKYFfUVwJmRfPErNXhqewSfjeCeosVnAR",
  "key12": "Cpp6FhHqDxozqaZnhjsyqaP3p5CrSJSNxHnfhpasY6JMN5c4WgPrf6weAb2g7xEiyJsD9JKMyQuYZEyUu8Ud4MB",
  "key13": "3wmpadcKAPJmmuoEtr2ehfxzPbCVB4LAR56gwCvyY8JwaBcmaKZkthahF9UqnMUibHrageePFDgmPUfX1qyjBz4S",
  "key14": "vXCoV78cHaN8Bw2S3j5rpfecjN5ucyJghu5CH8HPkGG7Y57Vzcga35tcevr3SnJfkUTUpYDEFQhV31eQiNgvVXc",
  "key15": "2GCyw7HneEgrRsTx6TnnYdDzmAk8TjmHq96noz6zM4LN73aFewL83RGje2CxvCHEtT7sXTgkBTfzQ3Csms3KB6PN",
  "key16": "4Aq94dBjHUVBfvYSEkxxyor8TUeYcWqRLoWHzy9nDVLRUVs2jPFqQYzdkJtTfhmrK2vdgD1pQ59qwKiKo7bPebYM",
  "key17": "3UPePLevqVjhuPUmecDB6V5NvNCTJxbPDiWQtPBaiytUmwHTRDiQnpy2q4DrpiNyAo5Bb71W5GPHGP92YYrodeEW",
  "key18": "3yLPyjHP1h7tHM9i59xvFRaUbpVHWNyHWFQLNKye8MkfSSfaUkaTMtKLotrTVSDDukCQrcBbysX9y52Aei13N3FC",
  "key19": "3oHFf9e4VEQ9G8q7BkgDJAvyb7b28ULJsGEgCYRQcatezYdn8PiTVuH4MS8YfeAvFYzNPt6MDc3uM937RjPK2MbC",
  "key20": "57dp5U7mGPXo2G6kiTzv6bMZyE16iCrcs3U7MWkFYZYzxeaP6DHETkTjY1SqpBvAHvWM18ik5m3xBsN2RC9DyJ3g",
  "key21": "3UztZfCrCYGs5tUVxyVvvFUkBVjW3jKUize2NRWHvPLcbnDdwPEZz9ShiC67ZRxpZ5Lzy1An4UB3dppBJRLQPUcc",
  "key22": "HzMgRQ8dTD2iyc2Ub9gkdHvNnpZhjssgvEDK2cnoGXumKMK57uYwJJCtfdHHeBtTRPxnv58orwMDyvFL43pnnar",
  "key23": "5q27FdZKVCBCDQroJYz3GanEKCk9TGjVTxnCx7yvSNEz4g8gD2WpTXCY2UKe1jHRuBZyVAPmDugUejDpvynywSsZ",
  "key24": "5YBDd5yff2AVbUR5y8DhCLQcgD66jpPeT7JBdhiR87yixp8ZKA8WttuqkRa7kewk4buaBa8dYaqXmK8uBJHYrCEq",
  "key25": "8BoTB1dU49fJLsfWZvLV3jZSNbYYyG5TMPa2XLCWp1aT3wefVY6zDSE5mX3VnXHZtmExR4NecAfMtMXfHT5ZQdt",
  "key26": "65t7WMcvyosShwyicJd5mu3FmTosmTXeTkYJSQkQ4mmsBPL11XKqnDGZ2PbVbNQuVo1916rBnMmowPFnnR6eSTCu",
  "key27": "DFFknvXi5deRW3gES2v7GgiFboVSQp2n5J2tjzducuMvg64APFCQAU1D1zJY6zUZ6NcAXnr7HSwgG1gT3V513oy"
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
