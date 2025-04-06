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
    "fYgXW9oAoDf8ZK49sLMfiS4bGJ73FJpgF2ev92vsKgHesDnusz5AkVovaRs7UGd7AC6Sm4Qnv6KJkv1AqmSsUSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WeHgpf2ViVf5Bgo3E6P2bVUYyPfm7sSEsnFpUqoGi6YWSexjLDV2Ze9qFYd8PJVAAYXodzFJ2AdkJ9eiKQamhxh",
  "key1": "Pwwt6nLmwLwaprUYyQ8xj4AB2Z4P3sDjrqvaSAAiPZ3XcfdPWEGLQsA5eoU6Ryt982nq7c4H69kzA6ukj9kCUvB",
  "key2": "4QAberq73ypNtz6Y7CUAUTMUJ5H8sjxDCa6GGpd5GM2fy5TbEG1AbeptYVz9QS64MiZXFxVGmWUEDDRiBjtGimaN",
  "key3": "4SJ4vnYeip63K56VsY9YLEcY5V6dp8hccEpqqNKukdSYHjfiaDWRH8NsK67z1C37gXYSafGNjef1y9QNJ7v22XuG",
  "key4": "3VTr7MQgccgjwLGzMjASXeJSo4kEJzVdboJzvGLkT7cTn9ckRpxu82Vk64AjSJkNCZvZcytLuAT5naC8mrN6oVip",
  "key5": "5pVqT9pJKU7MgxPm7SFe8rfLuDucisSsWJtJXjRFE9p8ZneRDpYpdpCAQoGo6DUEpRSMAydTjBF5HETGoeqWZbLb",
  "key6": "44hj13B8wzKeNbLr6Z2mYoVcjsM5Zg6mfvKY3EFJx3sQasaUPw24ZaGD2Ze6fn7JPMVNqdkuBEeaJY9795wuHDth",
  "key7": "3ANPJTZc8aYGVVL5meiCmQTXwVz9YRrCd9ZKHDfTdPudDJqnNWaXHiBZ8iuSHvhn74K8ViUMrhrgFXjj12k5FApE",
  "key8": "59TfR99SCPiimZFiQiJsaqPEc1eVW1uptXLf6Gn9ZQicseE81xeErxEdjSsYd4hEmaYDp2BD2fB2zYpajtuxF4YB",
  "key9": "54QsnEBVV59EdXujJKZAuuSABcpzGRAzfQeUGG6F1qLHwHss4vNRtve3ErQkS4kpukPsVxr7TfhG54eabkNxeXF8",
  "key10": "5RD3Yfsgw9kYU1dRNTF8nyLhtHpLVk6RYqBgUHkQC1gQj4aF3aXM8qgoPqDiUnErk8Jcc9NjVxbW8QwphpPLJLiB",
  "key11": "4ygehXwBaRrTKMi4HPRjXsKkAzcNmkxfb5CULTCcMWo86LBwKk2cnQVbAK3JDu1AvWnq9cMW2qZejAT1AqwQADgq",
  "key12": "BptARyhMHzR89GLRwfXcaGRhajNLKptcgaNs6a3KPA1xry5qdAmQdsiG7owJpaTRqeDMKGwxrHYDTxzBE7hhZeU",
  "key13": "5ye1jgwD1mtoL8j21N2QgDLbvDpoHSqfZVyP3muAiFMqtbxVCvZDRZu9s1L1qc7saanXQR2cW4L9GZBpZG6kBBGq",
  "key14": "387WyR7RKn5RFh3y3cxALaBpjBwsVW25aNkoWtP9bdn9VCEEYMvFd69fjAktpsz6HdUjiZiPF3uK1q8sQ5Q4H2Dh",
  "key15": "3qSoPHQcpB3ByXHhJQ9ecfbPCaSm7jfNEnhMfFBQ8QB4rEVSvGfaXjAhGBvXuJEq97sNx6vxeunqsq2QUjQHScfA",
  "key16": "4zExsmsza51z1JnDogTN4mwj3KfUU7BnnaP3hn4TSRFzBM8u2ekeSQ9pu6QeAL7RB62oBPVYbspZxnc8qKYziqic",
  "key17": "5jnAUVA1HPShFSLsVjtfhGSCYi1tjCCNftJbXaB9HKfcSxwn3mUEAKRFWwYNi3v8jTdFK4b2w8hTExJmXquqXxiz",
  "key18": "4zur4oC7k47g6RxmA4aeFyRND2UEVT31VLtUMmx8Sh1Uw4DTVRBfZRSjLRWuKSLr4Nr1fmBxBtQHycK51sRx2UWR",
  "key19": "63uGN1Jv4foDecYNXerH1SrM3hKHgxyTJRxHXiKmvRCeMgg9jyUrovyvn7Un1CQXxzFYcrLc8WMfGcQEPcrySedg",
  "key20": "5vZmLpJSkwgTHXpgwxxDWFC4SDz6zcMKy5uZVQsr1TvHPx86CuT2kDTQzGnq5jhTiZbA28iLsPt627BXtr919AUq",
  "key21": "4iuiQz1KUNYyrn6uSuj5R6GWp18cgY5yNmDdg7oaW4qt93S4YbaEpusgcXry345HFhqCSgivf7utM4bjSMj4zsb5",
  "key22": "2WCt7sVA46JN96GcmEZPwHZwKkCMyaFu9jKBEMq9DEU49G4XKFAmCRUnM4qipqRdKMkRg2QmQQ7ETKoTmDDkyfrn",
  "key23": "3VjtL7EqkenmqkmSJxB8kwAxpFpG8QAYohdhp5s3hh9WzYQnh5ZY12eW5K2LoFjSxnkiFTiGNQdwRoXMvj6cuuyZ",
  "key24": "3vLvkN83UWm9empR52rqneG591aK28Be7JJEwywa3eC7uJ9DRLCALuBBstcpGJGt7Ck4o65fJVZb1zrRQw61Bg9N",
  "key25": "5wVYVve9vveJkmWgZ8sRmAcmt5BEmmhJxETRChFRpPy1VxWE1XPZmhzgs4qBa5xHRjJSr4A6uossT7cXCX2cPCcu",
  "key26": "4H6eKnaitB6aSUCcWwyMSc6PuYJpGpxQycm4evBMyzKm5bneTkxdzccgaADzJ6fmqrc19Rmdgj4Le8ZbsmDzecSx",
  "key27": "2JpAxMoAGVXVYhdKw7oUjBCz4yKcwfisELuHmDmKmZcBwiogjQRpRmSXZyVTFWDoPPtZXBCwxBD681GHjQrFcQfs",
  "key28": "4bCV5aHNtMXzGn8jk4rEtpiB3LQnuuJYeYLSzVfYcD42pQvHzKftBMrWkQS2nwJE6HhAsXSXxhuhS6xPaoRXavhP",
  "key29": "3LE5ndFDQjJok3sxscvDxfgzrh8UzioBwwsXLzzpP1Ly9AVKWbtQ1s1snu6g2Dwtv5JKGL5tYJ2RHbofmL6G1r39",
  "key30": "3tLdXiPxHvTd9v3Mh9Py42JdShLJrgoxJ3vfpfZDTmuyxGvuv7DqPAnQaN9KZqZeJHq26KVz2EozuPDLAufTKSYc",
  "key31": "3U8ic39PCgP8rUe9mVwbEKLttfXjCvjV7eJnV76uTjCQyHgjLwGGVjfaCuaPrdeewgGTJCjNLbE1nm2Cq7PEB7GG",
  "key32": "2Xe3nKSJAbZYJJ3zd2ieAUuhQkjTkKCHEpoYABCMGrGPbDW1yttkCuo7uLfk5UFFuKCnS1ebnNFZaWL2fHgZxP55",
  "key33": "3vW7Nw8sUYnhqJn2WKLjKZGTig5amcNadiscK7Rw72V7BAreY7eeyQo8U8UJ55hk3PxMttqezQcqASnbg4fGWCXo",
  "key34": "Mrp4W2U4u8Mjmu67dKoCCnBKVvG1d61DdHvjwXmmgrP4NahpCK7yeJLC8X3u3sV5UCXM1z9Mud6WEjr9uWNTK8j",
  "key35": "3psQ97doE4iX3QavXLp5DyLfWAqqoJoNqaZkDF7d1NFFFrg7ns3cBZFicsbqxpZApvx61CtP8Ejcr9yVdA9XjCXM"
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
