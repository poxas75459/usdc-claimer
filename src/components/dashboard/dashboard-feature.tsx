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
    "3wiUfhMmV221qNeZjJmBmpp7GVBA6chtvtsy75GtA5MMRbwX7WXacVg1PQ76AxugZn8sqKY9qQdRuSD5vZkUKhf4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tT9sjgaQTzVvrV6smDzs3oBNegFua1GVauxZafzDwW57PLQETTaU5PYYXLDPmdaekTHZTDJ2DEzGsp59XJ5H3K5",
  "key1": "5qDukghoUk8SyiazYzZSpCeawFbZmkGHHovkuFmfKLJQaLtfg4gwXLuqK86WtwoXTfE3CWMz47qLmZDaW1jrZZJK",
  "key2": "2yBxPmgZyjuBaNRyq2KkF6BD8S8S8u3XGqdrtTd8uqvqhXVGvMKKoxphzactkZ2CoV7btPjGk7STPEqGs9v98HoG",
  "key3": "Qn9hRAAZGnR2RRvofbjyMCW6XRPAhYK4itt7zDx7kqcyLiJX1Nk3ou2egKgDiTEmXBRLsErVWRGxjvwhSjzh6KH",
  "key4": "3qjket84uD1wTtvuYvbWSwobUttCyoUmLn1gQf1GkRx3NMKJZdGjoUs3MCuZ53EwPZnHirpEkT28ASdN2EVuX83y",
  "key5": "5uvUtVqDJd7oFtBDeXRkTeJzYxRm644tSxGJodaJjvCuAtnPthSFsHb4AAa6vvDFrxH6tFa4Gq1TEVhJqyifNym9",
  "key6": "25T19FN27P8q72Cm1TiZZesBeFUQ33M5hoErteeHbA3T9mNqEmr9vsMjqjt2mxSGLDwq8CKTeQ3dRQkhbHQK8htJ",
  "key7": "3bCj2XZ4fx4XzLYwsEW84VmeeGNwMU7vnQFqpjbKwKVcGKyh6E3h93aHx7ExyT41hZzNBnVxceTPKDGFpeZDqXZ7",
  "key8": "4JcX843uJ5vRRgPniXjxUizHDBZEUEknWWynKJLnGAh3j5D4RnDXvgm6qhg1oGkPsXYxBYHgs2ggUB2gjEaX6SEY",
  "key9": "ZT6azG6vTrRLTJMXWzv9qsxSyW1agnAgt8QC8V9M7qnEu5kpsKX8jpepiV387MwNMxV3EB2PZQrRrwVrUNLHGxp",
  "key10": "466pkNztu8Vqj1jXb66sdcg4u46Tkj15BR5m9FWo8xy2f95TGTJwbCdZnU4tkZyZi3Rq6adZX96Ven6J9ngPoerc",
  "key11": "5AUPgXWwjAwcjNYtbCrsjPjvaaCq1yxsd4559wYZfx5QVMi6jcfu4yF2g6RrR6zWwxGYArKz9epo92k7ELmVAsHD",
  "key12": "2726A1qwCbBYJki1K88Dkkyst7FaXiEg8biL8o4LTpyQ9ynkT5MzpFuM31P1oQv24Vunof2Fhj6qybENttrLwupq",
  "key13": "4JnVUad8dnUyiFQoYXU1tJKChDgMwseDZGHBQyBadecAiNg6KFtqvH9oeiw7ZCx9oXHrLZHrhYtin1iwvJhUhpN",
  "key14": "2GBr73hTpYqdVdhEEhSdNiH19Dxptgjc1gTcmWSg5Y7YyKdnH8pkDSmv8YsYZGTZXrqzgbwsxC1ER3GpsWrWB81E",
  "key15": "nvgvvfvEZqAX4vFqWjnJ74E7yQf6YzmxKXja1Z2ieqeT9N9iNWVeeofVjadRJzV5CA3h21ptd66UsuYrSpvtS6N",
  "key16": "P5LBVrYm1bbm2M9A1ez2MZvyjnRahBkZigh6AQxHkTZy9zGCvtfDUvpkDMDzZmpt1bdgozpfV9D9Hs79VjSSub4",
  "key17": "4BwSqdriyCLhnNSgJmCUv65vqTnoYEX6Tag7Jz72VsRCVxp37qxiyZFpm19ybJjugHCzKiKtyqoyQzewSCvSRbrY",
  "key18": "5vJXoaMAoyAHHbq5VXn6L9LecaGs2T7dwv2C2bWdW54mi6kEoZSK6Y3Cpu4AEL4KDYwr7KL718UN5m7dWMe7SxYB",
  "key19": "5gUphNJhxsDma7UNr3Evoi4vCa7yEfDdJ51hk5pKvXRP9LHqgwhRVdshhrSAYeM6v5xCFSSp3dVQZCpUcvcwXssE",
  "key20": "2b7u6XFttZobw6QqDXthHW1QU9oHbMkLBPB83YMH8uiGAToiioRD29mLMYFm93RuQEy6hSbX13nDDNMCah7APMpA",
  "key21": "5Tq3gZF2MXjkzTsuTQkF2DZeheDEBHA3XP6wPVT7nCvCYewqhiPmwkiCJRXJ7BmogziJMrLkCKyJcpbda66ziYPq",
  "key22": "2SsJSqnW3kEehLr4YferpyzBrLTwr6GrzZ1aYaGBrBJ4Ns27SX4as79jSRteudAQaQuuTi9Li9A5aCYjfVqgURud",
  "key23": "yHg5bMvr4JREjmeix9cNMiCU65LgtYVSzpDCiESmze4e9ygy79owbLubAAWHbt9U7U2AQ9dRfc12Xnv7qbCCg2M",
  "key24": "2RtQREQdx7qapehwv9hJfd14XedzPThNq9PABVXbdAy2zDWcXGciTUQqnpCna5JuSuUMhrazXvVgGmeMK3C9nfjE",
  "key25": "5U6B6cya5t5XYDxYEsKDBp7BPwEMJr5A5YTtF1xDTgvGLr5HsYuoQkLFnPsDzhtqHFKac5QMKDv7SMwEhJE2F5ZR",
  "key26": "4gKYqhqPnTof1X6ZQHctR15D5yZNo8oxT6syKentnR9oZ5p6yCCWQs2hMgKEPCZLXwhASGVouCWwocBALNwriZMP",
  "key27": "5VPAEAYcnxgJNcFrF9yU71d2f6GZV3iUeWmb4mb9ZxaGAhRM7ZWup3yCvPNXN2dg5ihLdt4KG4oZDYutTtFGxvCx",
  "key28": "5kMZGHEFmiixyWF3WVd8wZPTpTcD7C2UGyBSvF7hHtFb2XGBdrESbqXeFnQhUX9csWguhQLPnk7PhjTgJQ73gSZL",
  "key29": "4PKrtiy3eoB6MuhRNm64vu2QRJ7ooDDtVrzneYyp9YjbNzRquFJe6aeCxNUtbAvga3aVa7KJfQ28wfSEZSfXb7g1",
  "key30": "3XRYRQMvCj6efKLxZZey2g7yzv3XUGPNG5zJcgwDwC2S6Vq1FPLLmYo5pxi57Fqzw5xJXAHfg9RFozDTfRmtQZLd",
  "key31": "JeNYx8Y4cRFsbFK4rPEq5vt5ZdRrXx7e4EmeBXmnxcnXR74cvagCSGgjZXPrbowamVenF38McACYftanfG7izeo",
  "key32": "4wQk52SdxrgJmWRBH26ZnbYcR5eDJ8ixnzBwaqwpcvzyKqMJjRehLDwSD3L1BS2zeHURUFHMbkpPbPnqWjhrDCHj",
  "key33": "5bdLmUkoh3qWRxGqMuBi9BXkoki69ungj2DFNKuZJU4JY37BddZ1cfwqgixKf5wMqELNHZeSvAfMBeRhbDF7BKZY",
  "key34": "2jmH1UhJHQi4x4YrbgZPTFJNYk3t2CfUyETciqZ489F16zWaQ8hbWZECSzJAdGyNV7BuDn2Vo5SUNvjcfbWGDQhL",
  "key35": "5tkBXGatgoS8afkxtrCzyEbtzqbuKJKtJQU46sS1RcKae2c6AxBZYm2QtnirobrUszZJ2czUnAgSsoL22JA9bCr9",
  "key36": "5Yg3FtXiFyjszMJxcu4EX2msCptkUC6E5HGzta13CH7a4WRPQcKA7ZEq32yVDtUNVxT4cULhJpXWtgF44yQQ5Mdj",
  "key37": "cvu5er1rCCitXFquVYrdYaHUXLD4bhtQV8ZfjYGnDf4XQQL19wtNWHuLA2rs2hCQWvVcLtfDSWJBGoDBT58babx",
  "key38": "4CGS8qtTKc1RHswXYQ4idmZ55zQQN2SobsAwBHP3a7iby11cSG58EZ7C9bqnuhXcf8afww4n7a9EwWR7ZSwrYyH6",
  "key39": "4w8mjW4a4CJSFVdfy3dT1JCm2ZCwwEKd2AbrUvgHx8R6UmuroRQvb6vmkMZ133x7SraBDCKzPqetEcmV3m5emwP3",
  "key40": "2pmbbH1mdJLGjdyNthGHLGQoJMpE94YzXTctJuHJepN5KnwTrJBJXGSen12sDSPzaSPw6Tta2gxVHRrCAzncpPkZ",
  "key41": "2RiGDSZpgHLDwnpFuQfxvS8VoLQMg8PGrywjTqJZAP6pSEvZQRcAVYUF9oQf8Rp5i9TKG7vkhNaE2eKpgHn8dRBh",
  "key42": "27YhcyzqQVSv2oQB12CFP8igWZ5KtxppZE3pM6L6ePFV6wDc9UtRaRRTjBU3DzdqqYW2NFTR667nUdQwyeK3PWF4",
  "key43": "3ECS5zSkdxanVWK3PzYqpNtegR4uBt4PHMgfq8cspMw84eV8oK4DDLmtyBTpHUpMXG3Xmaejn2whcFX2L3uXLRZf",
  "key44": "3EfUsfsq4fa1d7tWEPmRQYJF6vN7VkCdiovFk1wjZCCQBJiF2MnFquqEy9UYowdiqiKqWrqjbcSTPPZVPnXTzxNp",
  "key45": "5vUgz4c4FJmAqdfRX5ke4gHq252pDXHJ4Vm46VJaG8KvsmMDhnozL28AM8a461zECJxZP5NjL6TJsbCRbKAPQM3N",
  "key46": "5Vs2yjDY8DDWwn9zAovQZcWXqndx1aXZ2Huw9NVJXULEa5MBUGHyETyN9oRHMU3BZ4kq1jtaGHGak9Jr92nx8etF"
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
