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
    "hPpPgwAVX2T399PPQ2gg1xDFvyamz5qCgFfJLeRZ2eVeiVmaMWZwG6n2L6EzetijosRBXSPNUsayfP8LCUDHKhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbBnUKS5MuWnyFjKwTaPR72zUGwqN2YxEn8JuiSxTLkULpoUx5N8sE1Ny6vNc81i54L1VhNQDmn1jJUUPbH67Ah",
  "key1": "36TZ2STHS75M253DyvMPAdvYJRVihPPtenRKBswPQMVGoqQY11QaxoMFwMkWZgEPqRWUmXjbMv4XYd69KvPfZV3a",
  "key2": "3WToZGojPuVfrX6qMZPujf94k3WygMYmN5b827tAX1GRv7W316ahBmEXahzNq61BnF7eUeFEzeWsUD5Y6GMvYMbZ",
  "key3": "sFRAANXffQtRq3M9in2gu8AmSXdFrVob6Wms6i5cFpVkExX8GKKbMxPL4a2C5dCisxDh6xEaYbeaEoZVTckiY7w",
  "key4": "4CpLR9xieGU1UGiThG9ZTEonGVJ2GPhGNHoKFbdhsXnHmMp9euFpv5ZzzXiBMhNfs3piTfRooDgakbGTAu1Xr5ja",
  "key5": "2VMJpPAphzkUPH69KMzpZ68F4BG4GbFcFVwFXa4yYhBUcwWCyPvcPLpxp1SqU3neP2xKwNRfpXcqL7afJuWPtUSy",
  "key6": "3DS8NtLU6xx3ehuk4V3xoDcuztKdmFBEedJbfnK5ezmARW9HMBTxzHmwZzvy4z5MLCgpJ8CK7ZXcupZ7TYavHkBW",
  "key7": "2LSCJjVzLpKYu2PVgkLs3P6UA8CYE2TLSs3MN8SgADRUXA9QgL5XHP9Mhz9Nssoeaua552dmPXcAtb47VhEwBUnJ",
  "key8": "2cspEq4t9fNTAxVNU1MA39wXeQ5SBKDNEAkP9YbU78kB25raHTAvScp3C6AAhLzcQmnWbHkrMrCn1pz66mDxgddC",
  "key9": "29N3M6SnDDuq7kPHBYLRrAd18qx2zfEwQFz9CV2LoPY3PoNbcL45FFZ7oasVinCxcU3NVtRomjcSr3iewN5AyHG4",
  "key10": "5JqQVD2FmaTjbhRcbSwXV3skCKy7u3av4puaEJULXTASYtbNqCzvqCquGiKUgKJ8CBQ6bV3eU9PHmFXzHpUuLVaU",
  "key11": "38qn6KzxzjLhGcQC4UmbVtgVbv8Jfi4cYnGTZnMvWEk9uViSWMrWX3WwrgspgU7oPC3ZRDKpgbEEnyhjUJRtSug7",
  "key12": "2g483c2A5WvV3CCcN1Zep1C2AcR7XFzHUUxxr1QFVYnVS2T1Yi964Y1qrpS9kFSBrKejETJT3dg3CNsKRJo7d2mK",
  "key13": "5Q7H7C1YeNGqP6DNCB2erSWysk1N4YWXWRssHEB186dM9At7WeFaPWGhQfNaeYVNFTNrgMqoGPTFytGFZuMUc3RT",
  "key14": "7SVKBzZkRPXZfACCaVoFYuvjiFDrgKVoaySmKSdkFmdKznUhRNHN2vY4uoTsWfkdHq2byaszr43MH734sBRrcnJ",
  "key15": "3TdVdJpjKTexxUirm8o3UNyEGAhRkhYtv4KFHW1z8vjmTLJm5F3RsmD1xFHnAb2BWeK6KDh5RiRK3wv71fTWifdq",
  "key16": "5o1TFUk773LeiwTdmbfXH9wXfY36k5GwNGxD4mWwm2VwmxmTmrJABpHp7w4F5ge64QJuL11jiDfvxU7r266Butyg",
  "key17": "4XS8bTD7Xb24xNfQYz8n3EeXf3zUqr34mYR3oXU7KyDBy7bnzdVvXqpJRM97mJxJXcJGfSHAuiphL5kaLL3Cb7Qm",
  "key18": "4PAtNcfosmprZb2mu6gjeHVKKJDAkxijxwou2wz4jBKoxjTv3ZamsmcVTytM7YwJaiiuPWjmAyf2UkJ819xzVriw",
  "key19": "4tbhj49omQDCrU1fwa5wafzDdcP7rQXYxNZReaKUveotKxb4ikVKbXZFPCjfWMz6fXXcr8BJPF99pjmnFYPCJ862",
  "key20": "5gV7qcWRNrqg9JpE1N2Y3EgyaL7bGNKu3s3hFcoTJbW6QRmN2EQ8H2v61QvKd38mfgQvK5V9qrPtTEsGbore7CLC",
  "key21": "2zwESftHkbezwT8aUVRK73e4UBTVUhPyQSGVJVYcAUqei7uwDf117RMkp61NNjdAePqiytLcfSGmFxoGpiLopaa",
  "key22": "c2x3CDvPFZZP2qTLjrNfv7oZ8UXQH6HKyZ74VmR7DdSkWudUvfkALtTbAYYHMYdn3u9zDxDqLT6uhHtyZFqw492",
  "key23": "5HThTohqBzG6DGHr91fx4pcfu6sxZjq5eUdN2XCw2rkhhPeHmJ7YmFSbtv7PrftLonW7fWgZj6X1cZ2YxPWNjtyS",
  "key24": "2McU6AiE1c1P7WvVYk4RWfjLYXYfyZmTX16LzMx2Zd3Wok4Dts2hPjRZGUGP6XGyLZkVr5Xb9T6AyDQfpCJ9tagK",
  "key25": "258EwACcDiLw3kQL1GGfuBEPbAQnJPXFCxdxT5jqWKrCzfJ2wTmDp47V4yPNLJ8kWeQvYVMrkJhmNoVTCR8DbQrC",
  "key26": "urZ1bPCM675L2Wz1ZeMyG8GuD3VEAQ4bgKbB6wVE2EvZFGLjpyeWt7ijDpJr7XnrDPucmakfgvWEnpV8qtUKs3X",
  "key27": "527UVPTt3aFoC5dYAGpDLKwMxxcacUCJzLuDPsy132e7uDtxwbXETsXgejjyviaznzWpZHTqwqU1wxcprMS18bpr",
  "key28": "5aHUcpAVRENMstMupssryzAyszyvvKz2x2DUV18HHBYnpSyXvDGrPZwzwEpG6KRAKLosBiNDVQ7DdsmXcewAdN3Z",
  "key29": "59c9rt8nnN2pZTE9BJDJwKZZWG2oMbjGjhXkKf4HZw4eiWumrDLgDCpHVbkBignXNxgBYBDMrAZHZ2NvtaEmHXxa",
  "key30": "51Wc4ex12gS8DX8LfQJASKwbv7a6U7y34U9sB9oYEWByjzsWqxAPBiYDvSkGARJ6fevoRiL4f6TenPuZDQNRdAhp",
  "key31": "3Y6SM6humYaDeK6ChdVuGqdQpT1RHxKcs7gsAx4F8qySuRe7bJiv2K2qdF3gAA7uaeAEDNjNSGTCXNbdWBnUGJAG",
  "key32": "2wAPBEMu84c2jKLo9aL2SygtwcygsJa5vFf4uYAJAx6vhFmZ9uX7regDNX52HoR6qUg78evq9shnJ56zYy81bqaP",
  "key33": "kbdh4ctjuMrCGQfK6dGQB5pq1HbED3XYhmWh71uF7H9hEnaoVPSk78KLMzFNr6fZgPut3CxtaL15APCk5towbuL",
  "key34": "yPCrtk5XbtpuG2q6o1i1zeLPpw3ZoxvPhJXGRPziPnoF83qGJJjzCV49AbS7agtGQxMyi7o3hqqPg8ajKCfQGgw",
  "key35": "37udrJneu5KUnbVLgdQJfhimocX3JLWgNgHYAydmppu2WnBd6rTU8umyMVnPWAcVHPAVGpTN9gRSpCXwXQzgoEux",
  "key36": "4mpbbvs6zydkAvqMBYKkyVoQE6YC1Cwv9h3bP3xdyrAiWwSRqT7bbSoYN1tbhKX8pYduQkfVHRVA1W4J52B88mNR",
  "key37": "3R1yg4Kw6nWPMYQ49Zms4X9PRana3ARxvbhUx8rqyP2rLZwAWKphiPcJ1An14gDK8nyRn8oD7k3bWK4LhCZus71w",
  "key38": "Kcon6RCZyCEATYVk1RtXWMRoJ7cFXcDSLtYqAzCukXUt5y98Dba7TKkmn5HU9TsP7e5iLBkVJXmkzVSrfhL7797",
  "key39": "49f281ms1DPH2YBqXqinNtZca9HwnUx6yQnXjwWwaeom4gimYZPva39j7PgEagL8rqg22T1TA3pB2P5TwtpSF4fy",
  "key40": "4EP4XiQ8RGgPfkVvfXDZZPs9nvLmzR55EanWDFKcM8PGPqqtMymmpdaCNBzvtViPyQrbJpb7HY1NVZhP14577urP",
  "key41": "4V3WbG6avTGLbDuFkru8rKohn3SoHPxe9jtgHW9QoH7nD8bDjPkuu9J9kCTu92kKFTPXAC3YFXiLW7TJrgj3ib2f",
  "key42": "2uCDZZk8YfCUicLMni9SU2L4Ndcvx8twwuAZLn329Echvt2LzvLW4RNAv5yDp2QkaqUu8dMCHwEJ6YBwgyEKp42P",
  "key43": "vMidgFzm9Z8pJEfXRLj7PJdZLi3rfZNQGBJwZZXQ7mCYf8QMHRLiPeyLeFdPsWmjpuSgBjDzMWRxJBbQop6pzWw",
  "key44": "3rqqNWLA6BHpPCWTKjccUw9iPqCYWAZf7hn4sFjgPpCpdzz91C5iDAM9mvjFg1LLbgNLAu9ofyG3b4vMKheuNJC8",
  "key45": "brYEfyzr6FKW8iev4wTAS2Yc6ZtGLf6KL1Y7QbxdQFYNSEDvPHLaNfsqvCK49B5pocPNPR2jSgJUo1nmLUM2jeB",
  "key46": "udeG2LybRWKz7oBqMMcsY7gFd7en1aZKyYwvLut3PXg9x9KLqocUZZg6RS6qTpDRoTF9ezWB3gaMszhNAca4SJ4"
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
