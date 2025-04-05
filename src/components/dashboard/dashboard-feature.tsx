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
    "PAtE9H41UcC9rF5ggv4xD5qjjCjArbZt45MFhhrFXVngoZaZJSYyfdDa195z5Crfu95qXdN5zyzTH6eShMqZn3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8apmVsGuvuCSUN3AJi4gWAbkXnnKxFvGfuitzQt3JdgwdnjXKWeRdftRxducxTj57awKH8PViDQNbjVe6RLwTy",
  "key1": "3WzqGcsEcL1BHBgyiU3dYxHwCnxL62FM6e6ikBwQZgitynjUHdYBdCkddf4tFU3pAJkWuD3W2wHDWc8i4DEMa73U",
  "key2": "61nvVGvT5q1w3dnGYGXDdnoM3QhWyfMRcyD9sb12tJf3NrETJbiwxppqX44jY8mqRAFnStcojHrLK1fNg9sDhMDr",
  "key3": "5LM1rUj2UaRwBqLVETixSXqtzTLhDSLgJ93XvtCcybE4KcXYep3tJ3gxM5kqyn6g3NgkyESmVJ61bCiqmPidf19W",
  "key4": "31GRGsTiBechH853PWLB8BWZEt49coJFfQDHht3Sui7L4ZXnwnSGWMd8S5ZZVPXYoGvjspp5xtqQoeNU6UMyEWZb",
  "key5": "4aNQeYzLKD852WD3fk3VzdFcxCwMnBzyzFJ315nHFMVHn2nE1NhgwDErXm4KRR23LH2StTpz6BjtjsdjdUWZJzjF",
  "key6": "2nTCyycW1kGrebWHKKtjV6rSNG8FA1FYvckP8T9fWv23ENfpyFJaRaaLZGeGuEALUUcZugKTWYdDzhuQ1hH6GATe",
  "key7": "zk7uGbLv1ZdWSsfc8EHVvx892sG3FqgGCrcmHduYYirYb48AHJpbyUaEbyvqE3jpzsUQzg1eVTgiH81hf3zRJWC",
  "key8": "wv5yyvCL1z7NXRFTFXEw31xPDVx1JZLwEpM4yX9fCNU91zaBaU8p24snkc3dF6uvpRf8VXhfChfeF8TdeUkkb4T",
  "key9": "51JcS8Rr9VfZWV8dpm7Gj5QyAh8hNzbrkpzq1Tp9vBMbe57cdwh5B5mCLbUEPghg6VRYoiSLYazTs8GCYwvJfHop",
  "key10": "2StdLZRU6Zqk2WKZDGt6uCwr9sJJjYGd5KFtzBXP5dBfZztz6zxXxH53frz6rEjamnmDrzg6HM51cGBD2aTpPVYp",
  "key11": "2fDqzm9DcnVdFhFTGBNQUmm9SAg4cX19AG4wM99UGzZe8A3kumeUXFoVBYo5yLoRHMV3REuzumU2j6TqNc3aeH2o",
  "key12": "EfRsSuTUhT66jpVnq5Dxed9x7vUEqE52xuf6sa5kd1ZmsFmcx1SJgrPhFXhygb3B4YB4kMTbL7X9xfSYRHVhKz9",
  "key13": "3iZBSAXzbLE6jGNda4BTny4Dktpgepe27m99UFE5Q1zGpV9BXW6ohmtcyUTF6AMMKqr9fxPd3A28pDvAijQxAyz4",
  "key14": "2EeVqGj7Cx4KTfjzTknSjfUiD4CLaaWdQC5wFzxZzrEaFgDb44i7P7CdooCpkX2noKwsCY3pgbQEtVdVUGgFDutr",
  "key15": "zRsPXqZGoprFv6Sb1B9a3doWKjYaT7pD5841mQmYdGNkfGQwqU5D27W9sAnNHnbrgseUhQwowF3BHfvyjVLrU5q",
  "key16": "34pnbkdz4iRQAY3gZSmcBAahxyigqWZ7BjwwCbDA5LPkPuziG4gHFWLQ7bzgENxDNEK9PjLYEacKrkFPDasn9AD5",
  "key17": "56tXdp7KCBSwiTudKfdYD1n9wgpry79NGJaP33Gtypzcmdk2cDJwQnzvbjWSFjTczS6USrKxZjG12WzrhSnjPW1k",
  "key18": "4t2MkMScwyWEqYXNgs78rFo5Kb4WsoJmw3NXfrA4RYv1LHRKSjAdxt6AKDXz54KWwnLVLeVajfaDMkCLUmwRsmQf",
  "key19": "4mf6VRsb4yDW7pnumcpqsNMyiMRU1strrDH89PMQn8Y4GZm4GEhT9CYgPxg5tSJ8cfyy6mLGmFxsy1sBvveDk2h1",
  "key20": "4hmcSMYmoEN7xmWRpQ9WAnaFdp9CPNNkdLweMhk4wtfestcNW9yRF4ZCpwJrxKApZGabnmQDSA5iJDNv5fYR7Vfw",
  "key21": "5HrWZbikEKZ7pYsKZi7JLEoQzMd4z9Xd4sqda23Y1hC1Z3vjdpJ4bjAeLNYqUUwiTvttZ9V8eXhpNoejM4CGehi5",
  "key22": "5kmMHRncN4N4CcLf68y9L2kr9RgruRAV74bd2PdtNsr7gfwH4ZLD4k8H5qTauFsgamSEjBrPE65iiE7nmeSgHsKJ",
  "key23": "4LtCWpXHQ5qEtuYFJoBkutJewFUzgyrawKomdD5mjcrF9s3D6qvJ1JZSCzNqs24sGEGywacSvzwqq8ty59iotiLL",
  "key24": "52E3FCnbCe98jBiqxJK4BktaC5FeQsmCpTqNQBZGyKbmqvqsB5rFMKj2yhqwkXrjHfi8SFw3LrZ9w23izHBqmbdS",
  "key25": "CZYXgwxmsfRpj74VtfBTJMCfKKzVh3kS6Ay5m1tHue5yqAtnSCgMrA7kV4CaaqSY2egnwkjWvKNkqntuekamf6N",
  "key26": "439GFiEUTFsJdprxPf5WGiLbhKbhuYVRyKJU8Cx5YLchce3cJMg3A4R8AUB7LVVwcZ9h2qtLgwixDqm6q9TrTusS",
  "key27": "2q3gNQusBDT2b1gq41ZF58pW9eNMWMWwnTzLMyRxpBtUXwEFi57oK4kbjrpdNR7A3v4iBVqMC4tKpwQgHnUPgzfE",
  "key28": "Av6dPJFCTs79ReSrmWJsWrLMrpN3nHnPju8TAybuwxNFJh6azCaZbsXWBsW89fYQp8Dycr1m7CGyj7SjHBoiYQF",
  "key29": "2UyiCA2QZe5CsiiHmHJ2SFTf43wWeBxjfPTHoS8i81Bwe8dfHWjQWCFkCMHMgJs5LQFW66sRp3gAed4rkMNF4MFg",
  "key30": "2rbUyoa4ewj3F3b3uogotTTWvyVdWso4pb51KDens38XPc2vBfsF9yk7gijenNTVoAeRcdKBwDnQ7PFgXPK7Ph6D",
  "key31": "2S7A3GETyxusFBDZvktX4dkusuQ9787kcNcVxPBM5VFh2YMKGGos4fwayyTdxLkJNR4XB3iLqYf4NvpxYPNd4Qdp",
  "key32": "s6hVzFgpkhefgDFE66CK7DnBpTPGkQSYL14Cvrowgcft6mmjwJZcDsFdUPuUBM9orWS8yenA2Cos5m6RJt6aYxh",
  "key33": "53KH1Qxn7Jf7gvRR8Ur1ARnysxMrzyRvUTJZHdRqUcNovWSwCgHoNZ1p3MScjxErows55ag6gRtVV3MmckKJhy15",
  "key34": "GYwQ2PywVGxBqUtuSturkP3Vzgp5gtfs9Kn6KopaCnUa3KY2YcuPvFVP1FPQvbqZdfZZtJ6NYNbd4uv1arXXpxW",
  "key35": "2xstwXK4rnoCacEtDiGvZSVG3o7aGmpQYptmVU4ACj1efqQ31TJAZUwR6bqE1puKaSyFjXqCk2LEZm87nx1YD8nq",
  "key36": "xbtFKFrcty9gGGXoeSwschf3WY5eKPrnMQ13BdjQRDyt2SRhwZxHH65nJK4iCJybyaC6Gpq6HKQfYJmoyEdnTX9",
  "key37": "66VrDty7fHDxKN9Kz3QQhPuYc8BtstseZTsdaiUWGdp6yMTuSLpkQxxdkYNygC4QWMwX1YPSqhiusM1K3yzsJxxS",
  "key38": "5HMmRQmiuuxynbUg9d92y5aQMViPcTS1WF98KSm635kkv5MuPoLYB6ePQyZ2TCDRWLvuZ11feCofjNYHra3z2N6f",
  "key39": "5Uxv7Wpbs6Jrs1ogBrVezgzpT1Ax2THMcWdfs2J8yb1BSHaz9QPvzGji8GC1Q7nBqn21rKYcQFknNZCspFETwpWH",
  "key40": "5Df4ik5GkLDCqFFDwiLqvVmwUvJ4HzgSkURZUzTg4oro9GS4RRopAToAgbZywojyT8n1v4gTNAvG94kUMmG4qeyq",
  "key41": "5VNGGPmWKAPPWcqcUyqJBqvxkWUUUoRxe2RHgShvQzjJjjmrJ3yQgqBpSTi4kQDE8GJyeMugW2e34oiyShnCfUnV"
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
