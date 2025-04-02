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
    "5VZGmnxMbnUbJaxhopw2FLmjjNRMCFihAmtkuPniRfh54xDPqTWw1zGzm11vhnPFd2sKBncemuKU9qervJsqMDi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NNn5zmx1Un65Abv95LUuA5NxHVHybFrbS74LAyQcm3MszgXjRxNeCdVfHBVLYoSPPVk4GyqzdXeb4TH1XJgPHPC",
  "key1": "2KKNaqiHpHvnFH7nJLkCfkxuLQ2Xqpv4mUdCZifNspXZonNxLBuELkTVEzB2H4K1morrDj7e6zEiJNKzJrBCtR4y",
  "key2": "26nvmJMT7GJSvRyDkJpMRBEjYbYW3Fi4bEARBNTrzPsicqxVfSrHx4kyy151w8iU3Wp2VtzDJ4NLtmCuXn9jmTHD",
  "key3": "4DLtPRtUoumsWbsVCiNNsixHoykdDfcjxwhmdbsxYsJzLrWzkCEwticcFQTNraiCtbr6GWkJ712S2sHfEV1kysPL",
  "key4": "4pY1Rd4NLKuUyJDijFChQ7k2k1snTMaANc8L2csyuao3rXAVnUQG3Th8gyPR2wsrUTMAVzah6Mbr5HzQrhPxm5SY",
  "key5": "63QzmTMKkNAG8hPrp77LtrAnL94UGmSbhjsoP4LVUbRJRKcpnQtWiGYBM9PLRKmMQ4EzcfF3ZotaqrKg7tgVASwa",
  "key6": "36XyKrUdea9MtxMas4MyECvCUGcZ45GSKDWE2UzBTS7YMyNUZVxFHFZSTCwkzdkv6CQgL6YDBR68eXBLrxJoNRfZ",
  "key7": "DBA2KM5qZD5qDnvV8opM7257BjQSazgHPWeFcTXwR6Q1U6PwRTrqa5eVaHyiVwvMakuX6DbtsDffPH63FY3TqES",
  "key8": "2Xzy2nW41BNzfdEc4dVSQWBo3PxoXi3fypAkDo9jHhaTKxrJtypoCdX1WNbuDHAEWFUkX9fQvw7eMk95aZK75yYF",
  "key9": "3RRZw2P7aC7udWFRuJ5EPchU8Uhzxx1TFRrnJhxVU3RvN4Vo7xxhevQRvahAUzAU7H71w5pHuWsNQsiSefi9Z8ye",
  "key10": "5jr51VdPNnF5UdQHjd7dyNJ8AV5Hbajo1At2W1pUvjVQz1HMKRyhvQjE5ikjdyWknF5tbKF75tLBm4DZq67XjZMm",
  "key11": "5nPu8C7G2pWf7FzHojAgF3SShwQZGeGc1ngu1Fa1893Arig6v9aK9K4jHz6W3u2xr59BThqXuLyu58GVFUK9jtj",
  "key12": "35iMAxgtCwiMDK96mUVpJwRjAFGgpu2ZeRmJmb5VM8AQUvn7JTUbB19rVrjQgyXKcM1HKwMsrerqkSqa16zUBwiT",
  "key13": "NziU3fooBzBBtRNCZPLAZeTF1QLCi1vwBi3g7dqCn7TjNc5LHQUxRH7YinX5RQ1eqizqS5utMMPFzVmP1jdkW6T",
  "key14": "5RwFbrNshKq3x8rHmPKsrkgNXWmHGBqHdh9aJwuGX14PbdyzMPyobn6FCybZi6L82mXPBeyegp1LysgbBqd3zWai",
  "key15": "3dTwzkUiMyYY8q6PxhP7t311mhqow33CpTMdL2wVHCxZd4oBmNagayxqwWHMaZsynPufi28VHSCKRZoivWjZPDMe",
  "key16": "3Pgs3vFHif663vrx4ZrrNj1C6MMuCJQDb87wfSVrkinBLX1mpTrrJKriuAageLPX3EGdmX3E1dwa4NxFcRgtAZXw",
  "key17": "5CL5sjYviJp7ZfzWgr2H8ZC8HXL5d74AKv2Qmbp3t78aKrRVd7G4A8qXa8yBJNhHafSbktU9cXVGh8ss5qXDDASQ",
  "key18": "FEC4Nx2pWknk79i1jKvrM62pPqRBZLTjWrhNuFDZ8vQ9BjvH21hmfQj9PrzVBrLTpPxj2amXjkPDmQLjQSx231s",
  "key19": "3DFaYgneoBukkzEx367oxCtV4Ygwv9TixfL5oLpJisiMSFiEiy66URD4zcs13Kmmjr2w9FWjQPMu5TzL8hR3k2NH",
  "key20": "5u6EWLopcF54ADpmaToYhQVQFCymiiT586e8Kx5yfi2NPo1sJwUqPsy5ChTePAqfeAM2uTCCokGbFbsrqRJGFawK",
  "key21": "2F5u7zdXmAtTDVnygNWZkE8VsBpk9bSRMQeP3kzjRrz2dii12HyTZ25Mx3oWk6bUqw8Fb3VCBZPBHdqFw8Du3ckT",
  "key22": "3ycARExSgYGzxYALNaFT2rdqTdRsZbWieoGCcJLCEAu6S7ai5shJwDg7Jv3dr68HLrwATC9xmZNa9XBZxrWAkhHu",
  "key23": "59Erbi44uQHMbQwBNXLBScvZpESycBjS6FbFk3VJ6sfVpFwy86D3H3wF5bWEfVFNRZkAUAD2HyWsyiuhiMNHsM3Z",
  "key24": "63bqL7SevyXTD8DG22yvr4WjVxyiDQRx8coP5jmrZpBPteioYAwwhfNe27fDQ6S5X1VrebvUpb5GAiLL7MgWoT3g",
  "key25": "4h1Q7GcADU1qBfBkm4faKCB26mz7k9AM3n9d3hHam6maT89SqcytH73HfbUtMBB6VfQbx4abaXwe4bNWbv78ZN6D",
  "key26": "3CLRZvTJQPXLgrKnA177aYbE3xRTrUQHzM9Fe9S92YQAsBT5wpW4ryvwoapqpPDnGJgC8BW4uymodtxqVpDuuKN5",
  "key27": "5Rz6XkoFwrBf9g4EuDzuiGMhwKHUCCC52wE8upM9DEkMp43132BAWDEagJHa3ypVtpA636SbuGnW9U3XD9B6dmkd",
  "key28": "4zryfbmhWV1JTyqWSvapxmFCpMqUW5rnaaxfvs1xPFwtERcvuV8yxcB7pL7Q6rYSxrBvXN6PyySSdDc2vk9D17PL",
  "key29": "eVdGmyj4Ag36eAw9MXncLrw8AUuYvRGsdEiQnhUYaS6QH9mbo6i3Vie8NWvbCpX86j7FLjbksbkoTWR3xFKbAAo",
  "key30": "bXjGKuLrqHQ952VZ92gfEuiCb5BsA1ZAobTg1rktwLVyggvX4QKeyXfxbH56LMCnJGFQWRmN1LeABb16nkC716H",
  "key31": "4hzjwZUERUCFfitcnHgc7MX9Ur9vNXd1QNAXGpRcnTgkncySLLsi7yZXTfdPuzzDJdo6FnpGGjHTpgn9wnhkcXxN",
  "key32": "4AbfwUHHCtRKinVKyBZ83x3K2WRDXn42z7cjmr5n57EodBEzyRhuMjntNhdSLzexkHEpDigJGDDT2ADkMkq6uR9P",
  "key33": "zd869zLvVgrBPUS9aYnzjdKJMgtXunrVBAGA96eHF1foPotapZcaoCLTay16vDiYphbfAG14oKKMZ3wgKkhdr7t",
  "key34": "4sPuZ2gpeu7qWV889uWtuaRUDhZDwXiDLoVgCBRUQx22v5mq3UKWA9Dsi1zAm2bcFEq6RVm8vKrhrCq2EHorQcpB",
  "key35": "pYNuhqGVwj6P6c2fatVZtXVgP2uiGc8UGnKv82EayMgQmwuCk5t23RzhPfWg6P4R8tYQnMXXKLtcePVrDDjJweT",
  "key36": "3RMFFrg8dAU3AZ9Z3tFmhCB1JhMuorDvhjr4eBWpefb3rcaubjpLADzWE8AXq6XNaGXhaCH1V1KohnUBfioozWC9",
  "key37": "2GyCPW9sPbn3eks8aHSFE8ek7WhqKtNcX8FKnC2MLQ9mqgJTBf2KbhBcrLrZvRkA6xu5GVFss4NJh6jQQ1KhkcBq",
  "key38": "5pRkL7Uv5b9Q68gPxMW53MPVmdcP82j4iYSuqAfwcrD5dWvAnxJ1j1zx3gTpZnerEKQjz663xRAsz2QPWwRZPkKd",
  "key39": "3dK9eVMJJmHFVv7zuhbzPXQMroWzaQajvY8RFQb53GSWub1SCfJWqRpKd59aAMQ9bg6Zyn7aF73CDx2sA3mtg6qN"
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
