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
    "4tCXA2maW6dDKmvLY6W1KuiWEDe8QCGsLfoRwpzdV5ZXELTbSJ1rnJNYd2JR2yGstACbHE8tA47uimSURUgCNtjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z4aqw35Pua6S9r1DjxZEQbs6zd46o99sZe2JBkcebWVdufVbcEySiBC4XzSqgDny36dyEjcHRGgbWFekdSu99jG",
  "key1": "xs7amk6L6vEiM4wxLy9kWRaTa9BxazwD4d8MBLrVzecbKakwL4k5na1jQUVgSLQU5CLXt5Fu4irwKuu3oUE3iwY",
  "key2": "5dbiZqEsVsdiJXKKUxPcAUBptvjys647XCW41hJ4ikWmBgSUeuRvvf8u97bqmy9JAEiqJkhz3h86R832yPCsUTBX",
  "key3": "3fGwJArfM8mEKDxs1mBLULU6qLDAr9CzkZf4kmfVnVMuc8Q2U7EP17bbM6MQMf7GQU5nnx4bnAG1S23wrkA3VbMr",
  "key4": "Y4iy7XBc4CGkHykftYruR3JJryapNBU26pLvyc8YpX3P8VUZW8Yp5UwfYKKBCQa1cpofzUkQpt8KsFNgCPNKvSw",
  "key5": "2aei7zfbkg9peUU9QL8V3cH8JMvefo8C65WPLEksSDMF3M9dPWj1x7EzFoxUoYeP9MmG7oLkw7Eg48Kgtvg3jyfZ",
  "key6": "52cuWULZdT7GmQdp5UQbBHj5wTS24GWVCjNPTuYwhrMKJeZhQK4VG796n7sRYruWS6uRbrGW3KuN2suuMso3iNQY",
  "key7": "4PETHA8FKWyZXQYquQKGaMFh9e6kBW3dZo5Fpd17T4jW3JVAq4nfqzBympNBxr4fHzLe2hiMF7x9hmmmHm9djYuQ",
  "key8": "5qfZNWsnjWbpr6eeTWX85twPpfrTutdyLupRnBmeVY2ALi3iUa3Bx12sFJbgUdVowqyvnTebVAD4n6PT4Pa98FPp",
  "key9": "4B1zFBxQCjmZQsJ1vRaR4AiFS8cL8pDyxsQ2NTvSiNoeNwFA4kVJjJW83nGAc5ye8uTvQY9oDCHqRm1ov2wbcyE4",
  "key10": "2GaDtnE7b5rFJ2sfmiaaxZsd1sa2eqorxxoFQtkLZpA578jJJx463DsshghsE1mcgtEqFccKVpQEnBJuSj3vbArJ",
  "key11": "35RMCAaoFHZnJzjd28H4pG7m2yYuyry1vK9fDQ3izo3Dup1hovB7anpPt4fDidzjPfsHBNkUpjw4br7n2pe7Ahvs",
  "key12": "nKAJ6BwEJARWv7V6m1YxbA6aTjnVTqtDeSAcgRDTrCSTGScxToWUK2ZV9EkbAfCHUZpbhJEzYrpkDQ77RaBa4j3",
  "key13": "3rNF9d6dJvfp8X76f7uSyrJxjhbz1PdCq79uvQ52rRJzPWg1P9qVdGKmVAAtyA4oGHSzvRVb2dCFsgvNQUnpHici",
  "key14": "Mb2V3odcYsRts3rt2JFeZYmxzPJzhnibGqpba23EbzZaeRxXTaepWJ3HqDqJT89xcBNb8Hx9ijYTDYrLKyNwipb",
  "key15": "2YPmtG77McG6GFgjxKwEB8s9RE9QcCBHto8YATWCMYpnLH31Dg5f8vKtmChYziDGTNLHLw9jdiFuDGJWWmX7dSKo",
  "key16": "tAwNZpFGrLutLdSV8xYb98HE8rQZ13DbfernLq1hxF6W9HMggjCLnPGLZVacCLoZ3FpC2LuzBsGk2Dx7bKHJdsZ",
  "key17": "7VsHnEv3Pa81BT4i3QBTAYh4yJCKEnh5n4kvNcjKpefEdyRAZguoSCuG4AaEycmAL6w3U6ptsis7NHj7uzsonM8",
  "key18": "hmAwmUghW1s3tqUvs97mn9G5yrCgmrGZAKcriqZn81n1ievZnf4Wtrym97hsMvcnNkFKXsBFAMVgR7QSnjiTyfj",
  "key19": "4UN9FvCogLm9ZLMezHtWtq5nmRKmixQkic74MgBv2cqawbb9gTFQmrAcsbtfoTdwGgkdcXprk48DKzfjxU1A8DW6",
  "key20": "25SAMiibBsbsNUgjjt5CCyVhUNm9KBK34Wx5YxpAyQ2WggGBd92FJjLVzw2uekapdP9edur7FjoquykfX1LLavbq",
  "key21": "35y9A1hmfHncJKYmuR1ntrQXq3wQqUnT1Dig9uqrArYT8TpRpakhyqeQpBYucDbp5gDHGWYCKV6AkJCVKsH97Wvo",
  "key22": "3cU8MKjkQ8zxUmEbwcL1z1TdPXCBA6tUdUrDB4FoFJTPfgrYLdSnmcWbcxokvZks5nxUff6Eq297XDakWeCRF9vB",
  "key23": "D9Lf4JiLPJHnMXijgpdXhVP4VErs6V4jAfShem4chSFzH1vcLHgxTUjuVmYMNhqrwGxbmHUAqe1mMXuidYC6oyw",
  "key24": "yjtM8TvEWEeu8jDQGkQvt2qNNCqPst5ua5Nmz1p2u1r3XDfvFQ4WXHCKnurhdMRyYGhsV1TWWRnNnY4YwtZrMYb",
  "key25": "64qt8K2b7m61Ysbnyej1bUGEgggu6HTXQFQiQg1ZXHNngLZUe94NMSSHcyD82zmXsTFE65s34FEeFPocyL9qcSv9",
  "key26": "jEW848kqe22wok9thknDU8bHvs5nArWVZPim95EtfpHbcGDPbuxoYrFVPVc8jzQEpzuQLXJ28DAESoLYjhEZ6J5",
  "key27": "B5CaXxz5iL1kGHb2ctpxXxiSpZ8EDkFNqu4PSFSQ6HR2W8iapjfYE6QCmej51c4ecs1YR7tndMJTwx2qEe6EcMq",
  "key28": "2zUZs8H15x8ev7DjhDJdYA7brcHYukbwpVS6qygCLjg4Krr8kPqCiLmYn35nz4vDqVPkbzbnsKZYAk2WSQd857nm",
  "key29": "9ntdXX8FqW35mHYUex2Xu6fNKAeTHRcWwgz8QDFrLLW8UVkfKQ8MEgCYNHyf3XJMoXVKVcQU9fxSu6fgbCDWJ4p",
  "key30": "gmntHbqaq5KBE8FXyEVBFRAs8bok4jVFHcCSoGFKq9aywE9uakQW8JiREzX2YzhzEgZc9y17c4CyZSzjrpYKTAv",
  "key31": "4VJeuPf39rDPnnqpuDrWP1jDcLBDbUkvpsvoQ3K9TkmX81wUgUTDFDrKk3cEnrtumNoYPMTVgBsTgmc3y2bUKRyz",
  "key32": "22NqypTyC7qC77JJ2uQmxXzwkv76QWSNcnxY2HT3BwEDWLkRYMGbThafXVd2wY7Z6i1rTi7P1rVouhJzs7Vbn6ip",
  "key33": "65ZwzJQsKXp4mXKwyGpMH5v4W249jePjpHw6wK28MkAA7zy1MeCCKDjJWckQLsigcTFGXVbCj8X8a1XgckBsPYMV",
  "key34": "4moCLwMFXjAQ2n18kDaTdAGAhsj58xGiSyin8GfkVcWRH9Tb4MkVQPKkEBRUQh7fNYvm6kN875216xDen47wd4Yk",
  "key35": "4gZUNYdNKXsfqK8GyMHBJeUfBEm83rrQzQCq5JSwpNpJfSdMDcytqrSow98D3CJAL3rkPq7atvYnZ43uPCutfSU9",
  "key36": "4mAmx3MqQ7WaTfGH8bME5GekvVKBujVhTV8KPcfzT1ZEn7DMzcrRYFyyToLn3S2nydiiGPtPULuiEPeaLhKCszft"
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
