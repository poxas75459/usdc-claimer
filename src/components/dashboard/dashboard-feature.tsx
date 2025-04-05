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
    "2QUWCexXTY16HmTqNiuPqzabHAUuHB2xhvAAh4c79A6zti4uHtKzQRFuP2RePhrp6f5drvgT3BSC8zpNNrAtViy4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hsnz63r33yAuZZ8cqo1KBJF7FmfpvmU5hBc8AqXQi6jsTZxv9YJkWcS931wyCWzoBzLS3dUVVjsAUAktAE66vdt",
  "key1": "FHrTWoEDZsVVsmJJHVF857uCDJiCV7dK2RLMbTMB9H8jko85UgFjHEptaTVDdyrfyToRzmySnHN5utgTyjrA1Yn",
  "key2": "2bZnnggpYK4ZvDhXjsZvmgLnxqrrovQvBASwxyme697teHh1tGdTijFCPBnYzXcdnrfi1JyTDf9aJ54g9PiLekbb",
  "key3": "2dSce1cWx586ZpyDcFf1jw2Kb1CNHgBPtt47zNwyoaeuFjFCn5k4AN3eFx9saBAvNPjwCoYukXQcXRDwh6Cv5Pvq",
  "key4": "5Dz667Q3jvfqgz7aUqhXES6sSdzQefTFCUxLEYPDphyNi4EJZJWvmMvNZ7S3skEs6LdcCuHKZ65M8rbqe5nFsuiS",
  "key5": "4k99rY6vRHhEapQX2ZKvPSXfzGHZiPzwoeVMBvvBciCM8LpsoN4rez2ydFumXSsAuQur6Hjj6KernCCarzWkWKQh",
  "key6": "36TAKFe5LGJoGcDya6ifoNVmk2pme1GS6zeyKdhfmYwitiN9pSobfbgmjYp9HP71AyXiWt1UPcBwz9rfqLrT85qq",
  "key7": "24vmTPp7kX9NTKd21QTdkdAD5oTbVhc28mEC7RDdHuPmz3vPY9AHd6xUGR57UBgNg1fzxPs5eU7DxvfDCTznMCvs",
  "key8": "5KhRPpckhJ9SEb1v1LF9eDK1U9X4tTQHbaXghUJu3Rv3WsJh4bmKUvcqcb7snP8pS2v7tTSKXMjk4MVPB54A23Gf",
  "key9": "5vNcYqFZPmgLTvZd7Ck6GZrVXhVoqQVoLRW7FKmxo6T4PjXxDMFvN9q4cMAnaYdMEgxHjfJx3BnMHsPbs67gsPed",
  "key10": "3UgR2iEGadmTnsJ89aHc7P5tkpwRGudrmqoFSzxggLcFkFbwTXySZ3RzFmLs64xoxmfY6JnGvTyGsP9AUar1is3i",
  "key11": "HHXEcxkabuHdG3hu7vqckxyPFPEDYhW2wjm9DrY6NpBRoLT4zuTKdDffARLkvqv1JmH7HWN2KL4NJXRWvo5wki4",
  "key12": "5hzVR9tYxiwkVSLrUgP8pv5h9YXdDQjTWBcc3qNFwcoTvzkiEfePJJGkqAZkirL9AST2nLzNEosDLwpEMvnervti",
  "key13": "2DhPExMp7Y7Pr8AbDfWwwMWitgBteienU3DDMdMYiy4yiTF7HA83sa1AeSZz4uoWHdtAgHb5viwjzDffyhrWqP8z",
  "key14": "5zGtYy7hNTJ3p2fMDFiaBNZL7J5q9D4QhGMPa9hnv43hkwY8cFMoer4k6d5UNA6Rcx2JA6U7VLy3a5J9fv4ZxT8f",
  "key15": "35QhhSriuz9G7K7Qxsei6uqDBtUZr2X6dvdicBiUFU7dFJZriakUmzRMcHVKdAnTdUd4ueFZaL3HZ6xQWvxgK9Ye",
  "key16": "2xGLGsMj3xtw5SJg46buhuYpwJ7i5UidX1Z3Fj9DzWoMu3yTRdK9SHh6freNcQaz6YFAKEEZDJr17AhgRe6qBtEQ",
  "key17": "7W2STkm8raQzA5zXRNTMSNMX8Nf9mjSGCKqRhQqmDhxQ3XsDj2UZfnMnmD1WyQacP4nt88uD39jeZejY7ehPPKN",
  "key18": "2rrS7ZPs3Vs1vyHh8bg9k7yDVjrDApqrGDSUEBLoHdENLktu7MsT4JbAVCwYSVeEMpBwpKWrkcvL2oVi83FCDxUD",
  "key19": "5FbxPYen2dvN6w8qEGq7t2LxL585YUDtjuzqXH1HNn9SQLShUgFtW1qwQtHdyHedJUjNewMBgkRqUxkPpRuk6729",
  "key20": "3C9PGxJbx6ZEc442jPxBdHwCgxHYadXYHmu7hv7n7sDkkjfZsgNsfagdi7r37nwoxFaf64yXhjgzW33evp3ysg1n",
  "key21": "2igMUbCn1CsHHoLXgbXv6KPYRrWCNEJW1iiwt6gjcWYiqt1iqmikT7g7S6eXgX6NxTiiUhKvW3TpSqvgB36eS1Ry",
  "key22": "UuXsxg4Lggt73PkcuryZmAxm11bVcsXefsdtKFfgb2xn9Z9LcjgDgis4HQBFbE3akfFHpBDaqSPMPHosKS5pq3p",
  "key23": "r9T3gKpuAULCrGZjYDsefp6QUgyZvSzYEZUxNN1nTD63Q8ff3iao6ZKCLzw1wphKxf9vS4FEm19yQMWRPzRhR7j",
  "key24": "4arNPgumSLs8Rj4kEPZkSrvUbG9FDk5TqWXw9A6tc5QetV1zKjp5srXrLVk6BbqcrmmYx5sF4f4YKqnEfpCWUty4",
  "key25": "4mjwrFsRrr4TX9VGrcZTVwu92fme2rzGbMBmtcmioz6PCBR53j2btBJ4adwDY8aYcQawa26h5bjARa5QENTgYN8e",
  "key26": "4WtbMyedEnFacc457Ya7gcmDDdea3jyHhGDacNmuCxrB8A6gqutsHBXsNqp2BBCSWYyHNAwDdBX4ysXFSPUR5gTa"
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
