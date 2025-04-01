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
    "5h637R82AHtYqm562SVd1ejCX5LtYcwqAV1QwbcjvjdkDeVajCZ8Wo2J4DFhUWcfw95FB3g8vJNm1QYsKqkWF5H1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hxqXcaeWNTjdMTp6DZM2rKwCETuvhq4tjE5nJ6irG3xEypJrD34cTqH1F78Cxe5dAv7CCAqUqugf6vbQqZQbBx",
  "key1": "3fz63Zc4ZEkFbJ3H3A8aQK6DgYXGcXbvGLZ7R8L7Wup6DLkrxTxkmHndzp18oycdnZxV2S4N55h1o3AwmdHrmfBv",
  "key2": "2RbDkqPKWrqj7WAEXrUN2M2AxtfjZhEGx2cexjiSFhwKG4y2CFuhfJYWngfzjdsRDcN2bxbMZP6FGZHRpbuA5Ls5",
  "key3": "NgktqQDtCYDDgQw53bYV1KfHjcCXXDHKda83eV9WmMgjeifJMdM6oJfqGDXG7UjQqfn5nDSEn5kFgQwSXpxmfiS",
  "key4": "3aYBfoZgS5cpN3DgViHKGk8zjjMZg1pxmW3aaQrwGdng9rLhHvro6DMPc59B599ciZbQqVxoZ1vXsvUz7zY932AQ",
  "key5": "2jWmS1vvWiWZBy6311EwVz2oRtQmMDTAGwnrmEhnCkw1LUdwCJDXz8MdqCMcQgLsNmXcWA15GPXtFYQ3aM5AQ9Tz",
  "key6": "oLziKgQVMwR37y16kQSAwSC1k3PJ4sQY9rwxGpHD1BGJzu1h3SUFUbFv3vnULwHdiB4e2ZHZQLUs6qdbwqXNgGd",
  "key7": "2oiK9anXyyaEVmJvJ2NdrBpA4FLLWGhj1AaXuHyXByYHAfmZc8aiHeUxbRAHYxMr665DkZ6UY52ADto5PFApshXq",
  "key8": "577nSnYff2SJ8VRaaXxqBi1nfj5t5DKg7N6T9keFqrDwBgjVjZzKukq31ZSXJWeAPJExsgN62g17WvE1Q3bEWr3v",
  "key9": "51BZhHmwWJqher7WFvcz9EmCWBYje5egg75Vgf462S1LF5qbG3o1SSUZ9zbfE7hKmDJNKkLC5k1Aj6T732WxX7DK",
  "key10": "3NzXbJQYDA9eAEJfJSJ8c7bqkaiUG96fK82EuK49ntNMzvURfbarTawWxDAKLGmTHFD1GJCNN1S7uKHjJDjHecKk",
  "key11": "3F6dXPoUNTWQYw4y8iy63xTt62fPzsDWFPFMR3SYRHr9fXA6bJbkw5BUu7oT1w8Ej4itXqP6zJBh3TjL6nPUB7w6",
  "key12": "3FpXiXfJJsQqGu8PxJghBjqh6vwQDzchxjMH5onTcJGoQws923eTE5jrKqBnbGpcfHkajpwZjneZgKpU5gZ28CiJ",
  "key13": "5zaxy36ZYrT3WMzcWYxSdk2TiidCNyTwYL5BtN3AXqm1nV3tULLEm2B3pyzpmTtkXSya7dTrCYdoXNbDfXc1SBsi",
  "key14": "4n1HhHoqkV7AVGdTxuFE6GwNoUrSvsawg7R3YUa8Hp2Wr7QYbyqiK3dWqpX6BEhYhB921HHTJeA3yk6FnpAhpfbe",
  "key15": "37MbA9QMQQkHrqCx7FoGGFaNEfMKd6qXr3uqHaGHdZu2bQVGaRRGqoKgf2CrdRbeS2MzdFvnqgNbtec93KWJfcD6",
  "key16": "54hGVaKDGTKAaopCvjN7dYjQeomYeJsWEv3123kpbXcGZujTDuV32kvYQ4Umc7ZXwVZtc4JfyPKMnfbCXWpRT5Js",
  "key17": "D3247uJcPGZdCNyBGXCGiHRBWDPSLoybX8vCQ1f9nJFHRDEkTdQA9hVmnEPDg97fPCVdWo8VDaVHdCDaN1sU4nZ",
  "key18": "5zcVpqDd3zvmxLFmCN3HAkRFPLKVb6u4x6mn74es4s32X95pkBvnznkcqj6hVqaGoR9mD4UcSYXGYC1BaHt5aMBL",
  "key19": "6Q3Hw36gTmgadTU66EGungntmuFdygehL2ceCEJqQkAAKTmj86A2tM6pj8FHN4ndRHMUbKASWc3hUChRR2uuZjC",
  "key20": "4WWwNNJ3x8dToymQzEwocE96naH36oyyZpr6gBrJQU4R8M75V3WD7kT5HcdECgnsyNL64yk1Y5moxGUVJxtUcn5Z",
  "key21": "7Y1eaeusEU2NG5qCJSb5D5Knq6iAVupqGh3XVv8SCioJMRkjGVQd9b65XGpBJV3CP39mcBYBdoCyy2UtHZG46Nz",
  "key22": "5QGVAiEyEHkkVndNToVVLoD9UeKDssQ5A36f7YrNY22LQDgyyWBZmurRtEka89AhQSKyLM1V3R4PsSohTnB1vxT4",
  "key23": "2ehLf3KLotjeFYvWBiUhybra5oY8xzUpc2phcm8YSq647G3vYwVEKxRAEb7mnZLxkQxLvxVSLsLdGYEJBftV7RSk",
  "key24": "T5aRiZA6dh7F88m67FPGvT1QmCgm8DwHkcZHkFpV1ARwesK9Mfvc4sTAzy85vUYoeRPSorBSVnygdTxggSGf5kW",
  "key25": "2KdyqqwV9jrzJya6ARGG4mmWh6jiiPZcdT9tJtRS9GkcoL6FEKAHWMQpmYWMiUYUt1eSnDK9Tdzittc2r6a8CGRi",
  "key26": "3FLrSYR4jKQNLQWKhUX6pafRdngPXZ9waeKmYD1WbUkM2vtT5aG6Hy9g1pUKn34NLHWHkdaAiNMasQ5FHBu4VqfY",
  "key27": "XbJnhvUUzpn7KWaVkrFPwb5QvFkG5Acr5wAz1jjf5gXTfcz6go6qwzMV52xCXExuKgXbgMeFqV55eEEgMtYxhvf",
  "key28": "5hv8wULzM75PyXpq7P1TCVKDEhPC8VLESHYKSunGyCxkurUu5HJWJsiJbz5weU3AWDgypw2MSdf8mffeS19rEkS9",
  "key29": "b55xS4FgPGxGVFaPecNeVQSskC2Pz9VbS2gbKTK8GiVirrvXjmY2Dy2FXszd6cgmjKhTKd1eSLY1pHBMMy4nL2n",
  "key30": "BefvGahGiWPNcaXdXZjNbxoMzBcDdQWk7eux6J6jgv8YRtE5Uc2Y8UJn7yfnN2FSZx315U7on9zfQMzAu4ctXNW",
  "key31": "3CABHGW8dRzkGPnwCSrNJdLZtkA1PQMg6SY8T3PJAsaiPts2syCxpCBUiFndUsMbwYDimRZT73fxhyxbCSQZgjzP",
  "key32": "5wbh6Pk2hUrymycnZitfL6CDDMryfgMpxtUcMmt9unfdfn6qRebUA19rYSoc14d16mbB5SpmorBS1B5KUHrr2S2B",
  "key33": "3ymFgXJpUWawHHTEed6CRKBFR3dvNX3uM1uHrZKWZkCX2t3qHCP7Kfk5TxJ1a2p99toPFnqQpkqve2pVP6ED3kP8",
  "key34": "5gwdBxg9JfBtqgFEwGVTXRpKGt6KX8VJa86ZtNq2DhmVKMdPaZ4zGVPb3B7kJ7dxVDRo44qzk7onzbvUVCENQu2U",
  "key35": "5GEfdXCf2jrqrbdwaN19cwjKu9Nj3mWVti8WGEz8dWupf2XEnA6NE7wQE8yudPkX1FsWKmBMSxnJ9QqWGGxfyfo7",
  "key36": "3nhdgUeZ5DB18ySKzWXxW7FrcGi9RS9mW6mmAbtKYRxBm3Jc5xDKcSwWZ5MuxBhT4nCL6YvgGPNyQdTGfcVD6dnk",
  "key37": "5nc2tUdYyGY8e7pKeWhxicm33zM6agLHHgFbScLaZrAb1mixLu3pkmJ9nuVUud8LLbM1eAziGnXdmNwRRvWMFiJ4",
  "key38": "4mB5oNGC9yQk5yomAABtPhexLfZ3wJKL73o4DrZHJYaZ38SgAz4gcSvPeeBQWjFgTCrhGDDJtCLAtT9rPM4GMS6g",
  "key39": "5CMW34CVbYfKvZTtozTamwkeifFxiYCs7Q6P4bwA7GB6bbX7XP5sZrQqi9ue1QRzgJtZpfTvHnbixebP1KMNMmJt",
  "key40": "2RX2NWhg5ZbnJYZRkPAfsqz8i6oMtt3W5xcYUHa8dvDjrrevtUKhXZKMaaGNYXLtrkEcCPY5V2RNvn8Z9nS9mRvW",
  "key41": "42pSh3ZT7NY3DFeUhLY4DfhYR4z53jVSuPxjSpexEqnAHuzwAJjeL3JiGUcptAYdmUgKKS8vc4ZuQBc99hpUvsEu",
  "key42": "2af9tkPd9SfmL9aquVtruJEB7suGD1VTsc8s94GHB8heVRyx5w1uNtM84whj3CFrVLVfS2cnJ6Bo6YAoWpSDDpNt",
  "key43": "3bgbViDcDzQB5nVkAHeFZ6AVcxN9Hkj24Ez3WPQF9MReSeV4h9KdWT7y3paW64C7e1yhGX92h3vNxZZYey4PYgtC",
  "key44": "2okbDKYfdqnmZYk3pw18WokncSvAeSUzoj1pqj5DtDNqQ8zAdupkeX9HndF4SLrtG5ziG1PhxH6kvPgsXBcBkXDS",
  "key45": "5r3yF6N59WczSWkspJSC3aHygjHK7nU2bVL2s3o9xiHGH2eF7Cg3rNCyUUMbssiuvMdouzBATBHn6A5LHu3SPoJY"
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
