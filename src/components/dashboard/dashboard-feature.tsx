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
    "taKSooUBUNY7vtp7nkmAvQQTxNYkqi6wgk8oL4y5PHBAEnib4G65yE1Tbt5d1fuv7GMa1Xnmjo4DeMepyP1Hsug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbJzpWQ58JfFmTW5ZVuET2UDTx4JyCS24JJQyYb4Qy6CGQrfhjS5i28zFCUmbCXCt3GLmgRiRMJ4oFqvgJZ9pFC",
  "key1": "4rXMNm3vzuSeEnQdBARQbXJJr6rA47QbB59WT6TzfvNYaH6r7M7zJ3K1RNwsrx7ZrjUKRcECnpBbsCEX5ebTisT3",
  "key2": "52oweAVwCsfXgcfcrWd5bmeGzVEjAuYoLHKxPKXEDhRMLHXzoj8aFJnQxW2aopcQ3jZLDD8qShBaKyyTu1EiZgN5",
  "key3": "2Ey9DKLeAWPk9unh55hSS7ZwDwukkUy6mZoo4tfR8V1JqkwH3ZJ9SB2tPg7btgczLwUVfHZucu2sKiNVrwACMHHT",
  "key4": "3Adaeodp2ZPv9mu1gyaWcD3LuzqUZ2jkQa1mP4GEwdSVBJo4TWpcnnR9fY556vfckLsaEPaekKmR9cujkE65c3A9",
  "key5": "KzS3vCFAUtoZvYNNWTVFMqcNSBQi2MnzPhrCVHwGVGsxQ72tP3FpzzBKbRojHqkVC5xtKRoeyzrTQWDKeNMXX4q",
  "key6": "3zfx8KjQXMz1g4zPiJo8L7hVdygQPAGdigHTDH6wqv2Ms1HYzdVkgBuLJhePWRm1qjmgdNJYq8y2AmT5NoGu1YHJ",
  "key7": "PxcB3HoFvBzgkZevsfXgX2z42zU3FgKhnNiAdctWbPwmGcQ7FsonXpkjXNePoSgcR1RtqhNESZJwgafgFhCZ6Ds",
  "key8": "3HQx48ZmgvNYdpzzfhiFaDcfPoP9oKeiC2WWVyR5jrLbN14Y8TSxdsGD8Ni24zmVvU2gsTKwrUuMKvee9h4Fqzoe",
  "key9": "5MCp4XiVyvNz4KyyW9pQFuNtL7XasEsR7mgUTzjFZPyp8kJo8q8jCqSyJfe5nPaG9A5e95hZ7fex1Rp3E57h79PU",
  "key10": "4QNrB1ZdPtNCHVWb4okNek3c1LxQNQ2CRvQF5b1EBiipNaKpi3BLHizVzHjaUG1tu9pjchxTECD1cEseMfsqryqw",
  "key11": "cVue44ARy8WRfDs2zWu8XSUo7Vj9S6jph7nntFQyZFNTX7jse5qYw9EjnZGLdcssXrzZV5WdRbEA1rghJq4WGs6",
  "key12": "5xtyVRRmfkUeubg1ut16G1CDdoUL1rwbQcicSFDVxGrZLob4Uuq7MwuKfcEKazM5csDcwaJWwDxziaGTu2TPWon3",
  "key13": "5c1ZRtzzbZbBGqLYh1Mzzgqg1caVm915WrTanSyuM7Gcf9Gb8zwNmRgKTTWXSitGZTmsriaKq2trKEADssjP61RT",
  "key14": "63hBy4t8xeCUtLjjFpTGSiTDqGScMGLpscNiTzVTw9WvzgDLDi4iW4yL2KwamcBWNCxB8pMiZaZjdM46RZQnnNtM",
  "key15": "SbeXydN192P3SCmayvvN4s9JLwLoUG4QPB1ZkiuVsMovKsm1mohd946dAZVwf3uHTYAaiRjUb3CbWhRYfWCptSL",
  "key16": "Kex9ZVUg7DTwdJ8BroHAUu7nmZEDd47NTDNaSMB7krxwbUyudC5WzTtbvLBujRCa5YxAKHee5ZC41xCU4rWtV2P",
  "key17": "5vaBAkkQVdEipdp4qntUP7QvmrjWDJLcYSoGziL72dtrMZjGVmi7L7tkv7eMgyMnHxL875TmXevz29L4EHqLLFiJ",
  "key18": "3M14CEEQe7sAPAnBLPmg9vdAe5LJFaSjbwEV3ztM3sMeDhjhzjfNgdMEkqjymCwKWabkBazdwt3yGovZCzhbM7yt",
  "key19": "4YUvz6WEmPony7Ef3RcvyZVApkYNXeWRyThNrpcAcm5q3oNWJW2ZRTigtSw2z2F1igtTJbojjvdKrMxqbwzfanLg",
  "key20": "4bPjWhCNnm6KxtEPt2WZFQsUKz7nKjKxrskTJXCTKmSCQjLJ7ZBLDNdJXWz96n4pWh1s86rGX5Kx8nhsYHTGq1cF",
  "key21": "2ea1fK8voSr4jxAwx7wYH6CJMaYJURTYqgkZSJbUcxpC3SqLcbc6KysvagZoH72CS3YmR5NjgwH4c69epkVZ484n",
  "key22": "e6cKKPsHMfpQQWdepW5TXe7poM9Ypam1JFimgGUS2KUPcEMLpXw5eAPr1p6zP8bitq32MjnG4j8kYjXXABShh2j",
  "key23": "5hZvqnBTuwR5ASzE6CThYt9B4AJC4FGk4QNPFUngASyohpcgx9L8u2xyj6Jn6nPdS9Pdk4ML9AyDr9KBdKHsLgkN",
  "key24": "5srAHBCMLPFPzT4QN9yyzE1mfSJGBBiQT8S4XCcFtGQpZhy8W9oTfjDMf8BnyM4P7J2FgzVryGPsqwB6puwRkWFA",
  "key25": "qtm69tG6HvsX6FWVGBphjVduPvYcSV1fyFVMs8kP8QWkWJcRFapmgZGXK8B8SoCUpfTxZftSmdMfyGUBsxPiTwN",
  "key26": "5zBQN4ABgG3TpzWHkYe22QwgURT77UAkQPrenuvUeQmLqiLfKXjiAxBU9HFfLh9ECz2FfsZq9Aew1pVTyyKepQGz",
  "key27": "EVzx1WuojPLY52xXYMGjUjiZbE8hMo1nmGptVNo674sfpFBoXkypAE61ndzuExde7pZ7nrvwqqUZBpFArTqXgAN",
  "key28": "47yitmRZ3QeHRsBAXtw17emtBKEswYYzGRxwX5MrLC4A1eMhwvyZiSoQdHN82maWSiXah8rXeQ7LgFjJrpJcjUnW",
  "key29": "4CarRXLMvjn65zBf7uNbJmi2QnrA5pLzpCDUrEo6nHNSHMKB3bE9Y3kUoZ9xVwA7hR8crPBCthv8BriWT6sLhQ4U",
  "key30": "2yDULyayGUXx7HesZ6msVvkvhjcPDEFLRHVRAJJ6UYfiDWxDJXh3yeJQxLzPWxRz21SY7tQCVhd6Ww1s17LCniJk",
  "key31": "677ZhWj3fwkVewTL9S5hgvZ4CShRVdTjcxY24jWhirkw8HkFP1XZEi5ZqVDNEztEn64bPX8NxxPt66rQJZRg2sSP",
  "key32": "3Jk7PRwT7uajPnDsoQU4VM27CDPx6YWF6CXsW9U2jEwXS2ALr6NHnLVz1CN8YBbPBtj1bqraqV2Y3Wvu8nHGHmF5",
  "key33": "5mQNci1Dkkxq2paMofMWzM4cJ2gq9oA5b3Hr5J4Nt5MZMeEAsbJRMSgJ7kWbbZ217eogfK4cxFFwjwcx8yBMfjNz",
  "key34": "qTobGfDR7zr4LpAzyHzGHqnfYREi4S39cyYkLdCxLdg2dS19jjDzEdwtnw32auptYNX19saWQRkJVFWkBVRjnBp",
  "key35": "TFhug5yDgc3jSJDREUQeAfDtQ1FRUh1DDCWzEn5qNFS7uDaRJToG1gfoQTSEyuNYyksvUsNZNedKV59vedVtaB1",
  "key36": "62fatNQmo1jeL87rEeP3PxRD4NHh5RAn3GCRvCQfbCEoFdVew2YGsoB9NQ31JGpKkyKbQgYPaTYGsuCgQDSc7aow",
  "key37": "5a9sDhXcNQurq5y47KX2tGHq54f6DKH6VM6f8dfdn22MSjerfREghH6NHVWrpFxnVZ5NUZrQNG5pso87Aq9GCxL7",
  "key38": "9VRNpDCW9iBFPH7iRLq9zN69rQC2QfiXEYpYCinYtWeX2DDYcuv1iLtG8Mhyf2sRatYPaY1H9M4ccaZNVWhAEKY",
  "key39": "3Gw7Gf75ipxWigjDjkVHSeTZhPB6ULVZ6LcCupUAyQY6WkomXJd2u5DeKNXYX8wMuNyqhSMqJbiNbez3pAgoRyhB"
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
