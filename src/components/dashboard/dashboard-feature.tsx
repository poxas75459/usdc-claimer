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
    "yk5W12yfiUKtRwgB6ZskzZC6Gkr7pZ5YM2rYEVw8GLJLhx5dCP5igL3f8HnbQAPx2AaK7BxaERwAXXEZSLhHuvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Va1CGwJUvJyj7vb1UNWNcjRrEh16319eKLHhoQutiK6RoHLutxDzkBdr9Q5V48EVkeS1xrKe9N5m4xgP1PFPJZ9",
  "key1": "44me3SAjjcr6exE246qGRcPho7bHx4g8ky3ua3VXN21g88zsHDCoJJ4CUx7B16EWk67e5u6dAP8Ddtw4WqJS49dq",
  "key2": "35EQkioBfAV3ETptfFJm7he1jeree31duvYc6b1PsFeuawD6rST9i9p5vu9Wrvk7BtCMJEnzZTm1LgKGnjEj8Czw",
  "key3": "3ncbUk4CfiQBaj3oo4LBz5QsPssEY2ZAR2Cr5c5DbknpBYhfzDMVqPpdPoaBr5e8LqhdoDWXGeocM2vEwsxtt9cW",
  "key4": "4kqhKE7La3U5ckbxrhyDuwe5mF4JpDwydsD2NRKx4x46MdGdXMtEf5rCsttHJvZEp8khRPoszw2Ydc8xuZuYi7s6",
  "key5": "3SWARY6GWRe4kfxcPLjRokP9eCsf2kigoh9Z8kvbtjXqkj42P9jS2nVZ47nTXq7pbVsKXmPSr1LtcYnFthcqhaiX",
  "key6": "5gWZcYt9YMBRoEfygf8kZ9VRLzSBUF5PYPrTB5SdeMGQMA9he1QFeJyYuTtEQzHqDZs24QPVane5AhLm1VC3cSQB",
  "key7": "4q87oEB86zJshbpHBFKsdXa6sPnAhyBh5RiFu7hpN9GvWEmio9n7bPRrrv6xCBeZ8BcsuMu4CJt7MiZGcnPuS8ho",
  "key8": "4XMsYhAip8PzyZfxJ92h6B5fjfCNWH2ksMiprTyakZFEPXaaDWCGGtAF4Wrox2uvjsRLaQeezSfAikydwrUU2LQh",
  "key9": "3Uq8J5ynnp4CUcda6nxP9UY1zpdqh1qd8hYkcjni9rT8E6LkbRxiHNVSsZamhh43yEkDWhYXd5VVhAhB6miHaidk",
  "key10": "5VBR5qibZnAVGgrXaLVcr5b44YdHcFDseHvShcAX9V5haEoo5ttFHrHaKQjZsa7JfoD4BM3zWriCYVQ1J3Z1eC6G",
  "key11": "5MZjorBNLR2qaU9AFzCGa8cNpCoqDT1ypVQgUp9nTLbFTjLfuNQXXEJEMBzpXoZrundsVFVnEzDozeuFv8ydLz4o",
  "key12": "5vPh6YL61MEkT1dMHL7YYdwJjnJCymtDBE6WJ2h8BDBUgYxtgaG6aeK4V1C5g45H7HBX7Wu3vyKEuCsh96KG9BHi",
  "key13": "5hQAruJdGaWrEW6woKt7C6Nxqra5149fEtTBSURvxFgMvjgcbw6Qj7hTAsq7qqhAw2yJWPnE7mbtjHXYTFGCkNzh",
  "key14": "2sS9LhJiy8QaS7MDYbVKGTUgzQYh7Vxdsof9zss8HeK4mH9unLbHmiUwJSTatagBWrCJuPXycc2AKcobt6x1qt1",
  "key15": "2ez1PRUS3pcHmgfmxSYPB4KA6G7SnhrAD5sYoxy7rSBF482F8sQKnP6GzXZAnpDKYiMU88UokCwziwb46Age3WbG",
  "key16": "CgYC9epYZ3CP3PrWJhewj3EE5ZDr9GqzBUwjsjFEv7iAenyJBNZPgeNR2WoVV4BTCEpu9NhGhmfQRf5q3w5LhEm",
  "key17": "5DAvFxDagceyiicNXy4ATHkkfWoyfy5ixyeQ3sk6uyXb1EZrL1y89G4fAyMqtEqZqDkUkdZfL7hfusgBLzP4RW25",
  "key18": "5C1mucEMwU39kshyvBUJPcw4CLQN6KW7PE9g3AzNVUV6qJQqGWGYFBafydxd5k9CXv1ewiHSwCKPD4tEM92TLbfB",
  "key19": "4wdHBd8LWNZ9U94X2USsZf9eX5DYHX8DJra52DQo4kgmL5u7Z6GGEzPE5VhbwjAcMHD4n5uCa8kf2huJHWDoUbbp",
  "key20": "5NpgjgQvSLgz69wuSH6E6GNfn68uAxGRrkzs5iSWtc3G52kz4SMB9FAjhTadPh6ye641MXiBknfYFxHiVRdHQavL",
  "key21": "22g6SM5iLCHZXvodc9Jxc9E6XcDJJTcjvweq5yXjzG7axeMGDCiAeAeVTv7ar98iZYRhGeQWbDiHmEDqzA3jsaCY",
  "key22": "29fuWEyRtVLPxMSsFir2dF5TCrcY8WWtjGf4tA8dnSXGcHaEwNB4Uxa8sCJxJtAvbwkp2gv65dqvupNhwLnYyoM4",
  "key23": "4qMMhLCEcbRKCztJqtBFE7LWzeVkTJSg35EJDhoxegSP3TafmFiigK8PTgvNiDLSiSKSAiYGxoyMNHKHqnjjfnAr",
  "key24": "2CBZyN7hpuwe8UUwm7BEzErfZ2ahjDR7c4J6YdmJVboNf6E9jgeDEaSqGuxVVHQ2foDwQdScV8XWh6d7hTy254di",
  "key25": "euXNAFS8US1MVD1zCeN9GFGGF2tRRLs9onDBQK8hM2fxgVtpyDeKAHC6cYhRcReKpjEiNgK6cT3VzzNbxeAokwk",
  "key26": "cTw2WeZNagnNNmX1yJDbiJw281jY5zTujYjenN7PAY5Wc7dWRJ9rbYp8ecK5uXbEDph6CSkwuFkPLRzR9Qxq5nr",
  "key27": "3K88r9SYv6h4xMPXNBUWvcQXSXBWgv4ochf1v2KGAYaVkJBcByQL97rL5ZkFZWyNyipWgEC88tKaGnyMnVzjHujT"
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
