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
    "4QHQRaCP6UXRrBUPtpFqgUS6NBhrNzKDxLx6ZAeFx6VMWqzBC46PfjRF1tiDRcf9kPdJM4iF1Kx1wcEvpFpU5b4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENfCKcWDbBfaHbH4DCjRh54Ha6UwNaQAz2vq8aRotf2BWRrWniUq82vVY3JyykUHVRtpL18KmDps5kPbWvrQhoA",
  "key1": "4tvwsXPSC9mUxVU2n72QXK6PkZWd7gb9vJkhsStokCKGEgNm4hqYsCW5Ee6ErdDv5DSQANTqncijGjm9EqPkmiEQ",
  "key2": "2v5xXiPbTLrpAW4pG1h2umpEFBTodqDPDhYeJxFAGFnys1nzKcHHh5TAmQPWP8c58Z8saFEKVHMTaonvFJiEf5Sh",
  "key3": "2RKK56kk3DV1NaW7aSfQqy6emV2KjjGm422FVcSxttztrhFKC5MCHgXfv7xzvdDmBdCQ2XtcrXLvpzptaFzVHcHS",
  "key4": "4XDKWPKy1Vy9QjLxHFSpkg1Afwzb3QQuG2URfUH2R6hpvA8GmHTVGJnkHHeh3RzvGFcKPUfMNpcEy66CtM1pg9Yv",
  "key5": "5XMWxfntFEXBobbGBfwut53G3Pfwjv11F9oSgp4EsTPRSU79uvM3tSW59do9XBFiFzCLgarwZ9Nr7YrcNeU9d99x",
  "key6": "2eYTXdMLqF86HmuCS4drx5DYewHViebGM1SGmSwpa24erYL2apoEkxe14WCGQhQYQ9UmzLkAV2kLvSXaB1x9N3Fi",
  "key7": "2nWEGrA6AWtCGM2SoaVWKWtjviyZrvn5cp7XcL3yiFtUa1S1hLseczDESt7qYrWd4yPgWgnCCUioZUksF8c7RMqa",
  "key8": "KPQKsTZ6nNfyBPbEih7aZZTPoLeacFcJdks26VMPMB4qwNeAxzNmKFzoogYvh69Kij7N5NjBL63HKg6CJSaeLUU",
  "key9": "3Ck1soVjir63FX8jyQfGYzgC6UA9UDQ5pz6JpppVXoueSf54TaaPDTKP5bkSRbtrEGDRQrLrDJ5UhsorzCqG9RsH",
  "key10": "4Z6mc4HYJ23CKYLeogRsRDabSazg2htrJNhPC4KG5sgJ6SWo4CUDDA8wz6z1Mytnww1MQdai1Yinc3mPk6oyShRJ",
  "key11": "2v35BcBqPVTffkJNPwvECGBUYz8dgZRB4Z3bm6SKzKxJg2uj4byDX6fhX7qMoyENA7U2eErvWSycAuUibhRSFNvb",
  "key12": "3zsKWwNbzZPZMGZY6ESemHatPgRtsZhCBSKntG1RTyotkzkKbUrd8BfKwLPbYPpGJYbk9EYKAzZxPdmTg7dGznEe",
  "key13": "qssHqFCWBsDdguGDi1LfPzWfogLayxacqFMpkG7yUkEj3oxKiUM8v9Kc1YvWfe8EoA7kQ35Qzto9uQmfC2abqav",
  "key14": "o8hqSrFdCtthzLSuE7phpMNT5fhoVD3YLCbKFa1QjddvCejHHKS6E2tkbKd7tQraybX3i3a2UhWRdVwVzFVn7G2",
  "key15": "DvqHtVHszqZ8M7YiNMkeHrNgXb4arDHVtRpyhP2q6htYgo9WPjb7DboV89mrSP9wKWvJzTCC5UkFteteJkcz4HH",
  "key16": "4NjNKBk3JkjzhwfW58FVafacA6WWZUmQPW3ggt1KMghfktc9UybWDvT54HZuec6DhdAbfukheV3cz52gWAwJAm7R",
  "key17": "bdFXyVhQ2KqJqpb79g6dRecJwmStiaQc1uWzrtaqeEBSjBtwhAHh5e89SqGqAVaxR77uJxYyKNrDkduPubE74nf",
  "key18": "5pKNFU9X2A4s8R7rE9fwbyJknq1rnSuELTwDqucoTexMca1fUCzmdqp1B8QctGSYbFPzRB6dShhnKGGPMKmmq3m2",
  "key19": "5wwbtqPM8rSavpuceZ21825co5TaSMgPj5hsgz9N8mhA1Qxw8aTRT93Kd1ovVAckKUUviBuZRN6RK4HznwTQi519",
  "key20": "4EPKHj7195hg8RcE7WbnSgHxyrXxKqtPcsu2c96qLz7LWzjgBobFSV5BbK8bVRwqnHGwPawEvbVaAJoguVdehjSK",
  "key21": "3Z3AcKWDe7WsuJY8B6RhyV62RHxCGDCDJH2WpLMQEKHurYLoKxrysgCLxe33ogNS7mKZUQXptA43CKDLRs32rWWB",
  "key22": "2kLj2WNsavgmYzmqHTboP9Aw65bLNDTzAp5zVGR1yQqrWmGELiLUt4Rg5C7bcN2KWq6CSvuQA12wfgT7VYJ21ZzX",
  "key23": "24dzo3pSLHoNB8dZgxn5FjyxYdsZJaWJQTCfFujx1aCj3G1ev2LCuARmuzNBenpoMhuPS4f6HgvUvP9fWZGySLsv",
  "key24": "3S2v76A5tnU94YHpVSBGRokdCDYdbStRSZgmYQoxpXLvVY4MzU7pXx19F2opPnnfK1BMUKx5ojhTX6mUvUNpRK4c",
  "key25": "2CLSQE2YBRUAKPpDCiD8WxvtZvVxwtoat72FxvsruARiRMzWAepHmQ6VXF6AoUWUZaA49qN55NaovSdo3M5xSHaT",
  "key26": "61bLWaFdvofN4ze5yAPckzHtrh2XwFEh7HQYXSDt6avEWFrYzPDgYzQRZbL1UKqB4q1v8Xqx5rpQXaaFz6zp3PFE",
  "key27": "4PmUUkf5q3ZVtowbZCtCyozV4JggPjk4QZSokMMgHPW54pjYeLLCGupn49kunzBz21NPXUMNdFVUq9PZRaDvG6oa",
  "key28": "3ivonDTZs9Q123vK1vorLuCyMeFdA7tCNUpjyHYb7sBhpDLKGLmbLDEwDMiUAC8PKRENaXZxfLsk6whMZp5S7uiG",
  "key29": "5ZCFmgWWLWnfe8Ngw62MoUFV6S9zeLjYsKFo1s5fxWGetjhs4cAzC7v3pxtmtxNsuBqUn9gDBH7J1PRsNZ7ZCEaa",
  "key30": "51bs7JV629mKrXz2fyG1BV8hLQ6NzBKAKsCzKL3ZMfY834szBvb6uukvC13fmrypdDrRmvq4JFtCXfy44VNF7FXW",
  "key31": "3G9eoiJ1ZS32MAbDQxynnR9XJ5FthUoq78bj1EWv6E5SvSAQVUWfX2iKNurR2YWWfJJQ2QMCmbXZZD7EaPomeXME",
  "key32": "yFLzLCZJtFNkdpk5v2mB2U1eXi9XcMqTK89EGPATiJJJtAzoLFNvJTvcMmMsB18NdK8PSfWjrQEcmXQG9bbRoU9",
  "key33": "3iizekPScU7wB3SLCPm1QEJicwpTieadPVgxVTLBdHSAcdXLeZVAjz4mcKUTLtBFTtwkPSn7KV2DWdrAjWEo5gWR",
  "key34": "3p1DZyeJ6h4bvdkk24rvMuRR3LVJresE4gKsrXLYcPppXjEdwVep1X6u9NTGVVT2xYAcz8mVQoU58GUo7dJUz4sT",
  "key35": "QmqoGs7US9s3oz3p7Gq7tg3apUHUgJcfie84VgkDrZYBg6aH7MKGEJNvfdFjRnkbNZhLB8QSUSNngqcVVm96L3n",
  "key36": "CC7xLvU6kAwS2TVtXWNgUMknjs2fh9ssojeR1DXQLHkkmCyaqeg1W8jP3RcqYDQ5gvLUK3rofo1Q4wDik8z54vG",
  "key37": "4VDmxCpVgzjCBe3kqt2jMWZqky8UwnGfo73U1LRBhCpy1rsYq5RfDKPPowNWo5Ps9PoWmBRsB8DvB8bNqL2iqxR6",
  "key38": "312jBGa4xtgwwabxgxmht9Z6LyMnUP3kkuBixzWcrKw3zF1PSVykFqfhuZXSsx1efDAE43P1FJo8yS37NFu7Gztx",
  "key39": "4tQUenKFZ6kQrW3m8fYJoopc13PoHrUSAkKap6vuiMtFX9a1FaaRde4ywBopgcTtJYXZs9tqNnJ2iZUKnie7NBRa"
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
