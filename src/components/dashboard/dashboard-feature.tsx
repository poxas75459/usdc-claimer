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
    "24LRP96YeYpiMF1afWnBL4dvKirjhjdKQAP8NAum4xVGx6P3cvR8KEgQEMeKxnf8bpX7oweJFtY6XXrWa9qBj7QA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aoXJMLcnNyKb7jUuobq1gbyyJBNjygrud7FTy3BA8QQUzyu2K1HCPSZcwGV9EiGkwJhHpXBWJuB1BboAYzP9u43",
  "key1": "5tSNHD5ntNTgCyY5mvtQ9fiHKj4zMY8LpttBaQBRXrnuhhmPtaSGyyT5HCRLn9L8waXd2Q4fQeTtLsmtUSTtha4d",
  "key2": "3sn8AYE8mLm89CBTButTrmLffMhZECAF3cfpqsgtSg3fyo9stwJAgFUaKBni3GdtCFYTfBeBVPbtG9bwCXgJeR9J",
  "key3": "37ir4v86wPnrbzcki2oqjwGaeHx8wE5BEVUkYC7abijkhfS13Lefbe353NnAe5D8AjQY4RkjYZtDDYvW4N4igNum",
  "key4": "4KK1417aicMw9sjdrB3prCvzF7sfjFEWJZ6Rhqe8W7b8F7tpo2B6xRqhfnZoyfv1S8oxX4u9ECazuV9w5i3p3xKX",
  "key5": "oY7GtsU8cdgCFWUbR8NuwoBN9M7iAtDRw82XD4QsT9AHP8k59DbTNBHCGrUcSUMuiEnivqjAUtKf5qi9ovYXrpd",
  "key6": "NCEXrCsHwvVvcKkzaZeduhDTdrbrL1xHChCXQKFzNzCu2WA6JA8zbQ7jLyczFXYZjA8ggBViQ9E16YpDSWuw5ax",
  "key7": "QUAdxHWwbbSVa9iuKYbFn2XRRP8t2tjH5nUjZtjeAXRi68pJebREWMVmx8WsahiQrS6DkmG4gt2x8mvhRn7yYh1",
  "key8": "4A4MBRVUuNBVP3sZxDPm674akxKgAZYusS51RHvaS69EzTDD9T2AQBbJgzYTQpmxPJmGPYuKE1fBbSnrNAem273Q",
  "key9": "3nAuMzmx79eaA7w1Nvw2mqe5LNfvuXCXDwZACEyZ1QEbgfUmJR8U8t9Vin78f16rm234it4v2QgV4HrMVnf4tBuk",
  "key10": "C5NM9i4ExyENjf1PopgvbsPquMhtzVcwPAVrPW4E7wcEptLucNzSypLuZvaFZ5phxaxU9sQLci1bMEK495KQDbf",
  "key11": "FiaT3cB84qZvjHX5Pm239AqLYCsfPn3G2RMWqxVaqn4Hwvqnvn6z5T1eu38rVzMDSqwSWPVAtn1cjjKGroNb9eF",
  "key12": "4hQnMTbMJmguSr7p7j3Jwn29jownRHRFXym9C2yynFMUqzNwQK91ztbxxhPSpa5rca7maHQKhtKF1mhF5PFCJDZA",
  "key13": "5ZFPPRTxoA11ff6xW1v3xi6VfuAbL2nKGQ2esKQMhzeDMhS1eh6oMDAJYLT3s1sD7wpFGfyssMcadf7EhCaoT2df",
  "key14": "2FFB2MJ7Cp7dmNHY1CTxjTD8BBYGqDSP7WQvYmVw1F3FT2K7zZH7cAJG2dyfCfyNLMJLNcEtxp9ykiyZNFYRCKma",
  "key15": "2VsGZMdWp2tokJPqXC67hgADkxkD8En2CxxrY7obbNku5nYqCyZbf9tGERUTrK4ZPT8XCRswvjwfYar1jMVQgVHn",
  "key16": "ikmhd8tnFtwuwJ2Lg47soUnjVSvWoSVgLYfNjxnfkrXQS8Pw1QZCir7moW59SRgCWEC2gSxjh1SRpttd7Woe9Z5",
  "key17": "4x8eTbGMr6XNGYN1DKnaPno1y7Bic1PGuaL2GFsU28F5CAFfgWYnad4pyeEV8tHdLpY4TuGAsT9owvWctYcKRiyJ",
  "key18": "3NdDvyz1qvLiBtbnSNyDBhLmXR7EEsWCavKGvCUy2HD912LhAxwGEq5d9cJCCRYBGtMpLTGhnrHRFaZuhZ9e6o7",
  "key19": "2oBMvC5u3Qkw8xGYHKEtZWcVMbaXkfrh1yJZD3Lnqbtt5QsY6opSZMcxq3is64Ftss5ivX9QtcSDsoGRdKBhHBqu",
  "key20": "5znBjszvatyu1K6nrEmjTTMkNsuzavmm28AmMRiiVzcTunfpzDjGhsMknC72chLb6TogiNNwh8KsKhXSSEVc532b",
  "key21": "Xfmq6cwnCKPbGKPjagfSQPWR2nN2VcgAWqNbrsCc5aJ5yzx7JDcx2WtBJ7X1gMZ6CcFYZJihAnYraW369992oH4",
  "key22": "5HLc75xLjPtQQ2d7fGMAiFTf1NQaJftSC165oAfoNBgZN4b5udkz1rHWrhe128r1q3mAmBrM4eELTbBAeV6XQsBA",
  "key23": "xsX1WCKxFm6MTS3a5h4h8wuLmBRNLCz2QspJmZviuctB7FHdvfDQpP1dyzbaeKm2137dwoFkEmyDHdmAuhpn246",
  "key24": "3K5yXtt6Vuic6AK8uZwBmsaqYAdECNRHB8akT9GRDG27cJpgxBPnPse1RgC5PXQP4qmgEErdD9H2LXBrEGsUPm7t",
  "key25": "2YhY48T6UcavsLiMHaBoMvhxRkdNs8tjAZWQusymMJfuGbs4oWAA8v5tbpKfGJzkf6vVxFSVouF5pRsqu7CzMaU2",
  "key26": "5dzNpY65w8MAcAMDnoY3bbQCiL1Fh4xSuu1jgQworYgVt2CVEfjdWNNTqScYFxhVKwXq1rc5PB8SzzUnNLATKd9z",
  "key27": "2RJQXrYrEnqJzNxZp8VGZegS4bjpNQB9jygWmnfdD75U9b5dZYsURjBwfQgXHvjXQ5GLqFwrxLVhBfN7vKsQHdfi",
  "key28": "2DmSsf5J5GCYWEgbiNER3pcCoCQtM3Sja6DvJHh7mRyFf5kKrwkGxWPmLsSRGC3bntWnVSeQYUuMEFdNPUqTjjts",
  "key29": "4uUb6WF4x2BtNcdrq36HYsGeyTkXjouchiKR1nNoHPNMYUJZRn6iT875sdDUmKXQjUJHPShoJ2wXM44ME5c9nj6J",
  "key30": "5PhpoQSKyyPJdm2Ly4niVP3ncKgTcA95EMUfKuvgdis3Qj7Ycv5QrKb2zGd76QkRwwYCBV11QxiVH1dxr7JTLtYa",
  "key31": "4F1TxsDzmQbL2SqMbPdpQLLLjmZahfsnp69wWsqqs1tNUK3s2nd2WCwjgphddCWB7DuKShhBEW13Y86GT8C9mibv",
  "key32": "4VabNNCQfyaqtcZvppZMDXLEe5mVa8y1u8qcYFBDgp13KBfyBZ1jVB3ddvgwSNSakkAFMxqTBK7BvDNPfHkAvU8r",
  "key33": "55ajHRzmKs1d1posTeLuXFKYdvutnM7pVCsVdgkkQABbHg3ZyAtK4WQCzWcdDdT6vCmFXgPEPvyt1UoJ2xYBLwzW",
  "key34": "2VW2v3RRCQK7FKMHNx45cPma4k6TfLdfpurnZKUwnWbrvW8X2XZ13uRjJonzXbBZJMtVLKyET4t8hRt86BC9c7S1",
  "key35": "DiEVTCphGnLtaWC59XgbY8oPJ12VQtVkV2yWbNVadHEG7gpkF6o59UWjqck4371NDMV88S4CdxDLxMzzBqQghR1",
  "key36": "4GhybtwcDeCrbsyqaPRcA2Z58sRfigo3DhVKmXGRMwe6Hji84qHCk6NZGjFwKTahuxawGR34F5WJ4BVVCGNz3Dav"
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
