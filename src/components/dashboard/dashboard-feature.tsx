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
    "3tGepKFEGKfWSQYLHWfh9E7jyaA8B7pqnULiyPtR5AwJrvcXaVi9AXNXoLEdpCsZKzdjRZJirQqhYxsH7LF253NA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1Uh4TF6qiMLY1G8F1Sd4cGrw9B7LZ2jCTj4iyrHJvwtCwN5uQ2QV8vHEGAPe8GjViEZPHgVUSsE4ZFd26zcmFy",
  "key1": "5nrXWiLRYt6uXUFh8XfFefGaM7vWh77SZjPeHydeU6J3DcntVgbcdUYa29GYVTnRXkWJmMBXKZjLwD1WcU7T646D",
  "key2": "MWJqfrTPdS5VxC9fkFrZRCqxPFHx8p9R14KVYURHbXU4nE7Qngv763fwSGiMVFWpigoRV4fEzvJTWcio183ymeQ",
  "key3": "4XBsrPDuC5MT6Lxys4EignWyhxxR8uoCsev2UTLUdT1eXj4ssoPJEkWLFK4AHmt1iEfRiQW2ryrwtQPqryjWacNq",
  "key4": "ubHthAuZNyAkqHooChg8LxXpmoA8fLXUVRmdzEURqo6f7PoDPQj52jDjmPdM5fqGnqbNb131eHmiqXUXSJRDtQc",
  "key5": "ZnFCBPf5J7wPSM8psEEyD1XF7RESmS8Xi6ZXRduhaNJ4ofv6jeWA3SAH5LWJr8jXEt9fAqXP1Tec3Vb1Bcq3gRK",
  "key6": "2tWE3WQVXCkHzzjaxh4w6SwK5Gtz8DZZ1N2oECiW7vdo23ckiScY67f1ZKm1VaMvL9Xz7fqAYqwp1y3AFxEDBGvb",
  "key7": "5F444eDVTcYgDNdsX6ETTWGjRUUmLTBfEywUVfE89jxkxD34wNDxfzWCwKR4eohvBsAmMWA2JeE3VArPWJKRVaZG",
  "key8": "5WXDeUJJrLMiPpDPtcJriQBNxieEBk2De4jBfmvRwZj11PJW12C8KzB2NPvW8TZPWNwp6rnoF9oB9hhaJEFyr8c8",
  "key9": "64hHBehf8vPuD4kDZkAiXSLwyUwvLm744pX2a8RUTsDnQ4TTfDCkjyawsujGUBViwyw4SCHBBX3mgCqTUieYVHnM",
  "key10": "4oiq3DAoooLTxt8mVBN93RkoaCgQVR9UVqA3SRQE6NvpZN1e8JSRmG2o5yfN34Hz4aYx9nvRvZFznmtkGFRZgyPg",
  "key11": "kXZtntar2JuWfv2K3bBaSMFq45G9HCxWHWFJYCu2vZmXPcmNoUwQSYWGtJ9XN68eF1kBBZMHDEuuqvDT63vqxZH",
  "key12": "H6ZCGtcH1fZc2nC4CtR72rTtDMwRRRU6dS8VpN89Z9p6FSvW3CDHfLVzfEvUMSASDHcyCATNjppTXxYYNgHVhXa",
  "key13": "5zfz7oRDGMpRxq8dgAhSqnJXEfPRuxFMhMDPhBE4V3zsygSVSSg4EsLz6d34yFHg3A4BWSqWcQtFsiUSz3gR567F",
  "key14": "4kfWA21XMVL2k6vxeNMeFETwm9tNcwTdzuAHAyxXxdN7XN4Dcfs5o2tp97tSCv2pE5kkR7MbqqZLmN8koyHPPAT6",
  "key15": "4HFWhqZA7gEWFvXMmArWdezaACYGkfx6pw9vBLxASUENz2f9wjav62cTPPqBXsxbx1nDuXRTiyJ3DY1QD6izQ9Ju",
  "key16": "2BFxHwJ3kGAq81pHURQEHzwWELNNzyiMXDXi7vinuXDLbGDo8dgiKS99L7vDspeGCYafnexxS3aoxUMEBmdkUT7b",
  "key17": "yfQrwyZRqJCUyfZhhz8BkjNY7PRmyN7joMoCmzj4BnFqh2puEWNsKPYVHxHguPLjnFpqat7yLGxVhGnv5gRjWLe",
  "key18": "2iFR5AAEtjox7g2kyxeWyzWxkF8VT4fXUQiwcA1mozSepRCf37FDNhb5DDoYSfajpcKXHdEW8xRz8uzYWwmzdjpn",
  "key19": "4KfCHS18g3PHYoZaG7uQiNdFEkDDHJoDANCnVekJGUkkUejkGucWsZPWtFxZWRHDkNnMaw5pC6hb11Jipstib1cs",
  "key20": "2iTW3UDYmnuG2iRrWAhQMpv13LkJnS1uKNAM5krn2f9kNQ6Wk3N1SN8PJ6SGyVTgHHvV4C2J8wKmi6HLvmRkoSmC",
  "key21": "5Jf5yuBQsvHESHNiXMr8S1St42huivC4xwmBmxZf4jX7Xn8QonoYF5GjCMJNVY3w1bL7bc1dfyZD8nZoiHVG77yD",
  "key22": "sv4tGtEzF3HaMimYLLbF2mNPqQBYu83wTA5Ddfdnc2GWQDM7oxB5JwyrpFsZDQyBho4Sj9DionnWhhAeKgVkJVm",
  "key23": "8gdadup9kKfbPjqQ12HsmLMBK9goMDNRMZ5oWZosrwpSxCrysPXhK8YAeEj3WCgPchvrcwYgNko1B5hYsBZYQQn",
  "key24": "2zVfQnE46FSfYiKmcPK97JksDenNzqLPLP7bAtjbb9BQ4HvkLT5coyrK5ufKBrXRiNfuFyFnC5CpcbN1K3asi26q",
  "key25": "3HAwepubTTK7Y1oad8j5fq9Sp9sbouf2639vo6HDv4JuGqYmLBnVuiSoDfKBMNpRQXNh5xtvHeQ22wC2iTUypjnq",
  "key26": "33ES27uDNKpiSjRAZpHDyQEqYVse7iHCpqgicXevq8vntnvDYNCKn1AFBSR7vJiG1Gz9M3ioqxBJQnKEJZ7Ssqmj",
  "key27": "37Zji1rS3PjexcrLgp9K5afUwxapoaQGw5UFEHWXeXdWJQrU2Cw8Z2yvG9uGxBNCQP9Md26ccEKPVtMJ1De5dix9",
  "key28": "NCfKj75568khfptvn2QvRxfmXf9WZx5g9eSf9HBhXvjWUW8kUqhCnKPMRkRMc57bhX1eUwrqZUNwqDeQUp9kuzt",
  "key29": "4RrtvsVwYtRRSvNCRXPcDuy2KR9nXWt1F7Ex3sCHRtXTBXdAT15dkELupMCSrqsqqHN9StNRho6VNntcRcy6jWo4",
  "key30": "fqAWPTHoYfDFg45ZVuuSwshbpGy21qqfX1bo2Hnz5oihg3DqEsuuNiVJ5NAmqy5MhvxT3wMLuNTKAvFkvVMHDiR",
  "key31": "3PVzYkpKfraHGpDDUhYikFzssT4A12s3FDB4TMBe8zKCKFY7sDQUaxVmbcbtR2Rsqy2UyeCe3YxerDFkTJU3uz1L",
  "key32": "2ug2RrQh6yPGWxLcMWbZWe467gaKW4WmKhqirf94NnxFmm9m8srtsjzyxs2d75VULYLsX56TUtzZ4kFzxdSzzc75",
  "key33": "4RYALEm5yeuMcJcNEF2uUF1YEPbjkqc7ZneiaDZgHqGEj8d3Rcccja2hhzut2wemVPm6vMEADPaN2KFt6GpjBnCU",
  "key34": "5bhAER5XFY4JPVxdxZuFQkPAHmy7X3M9hYJZN6TaWZr6ZZKHvcvwhRHyPACvUeqJ7fzFBrcKs32UbJFH4EhUrwDM",
  "key35": "3GpRRYF8ewEunsatRJJznWwtMvzkjiVN1SVkwXFy6TR5CxLouH7TJatPF4uQfZn8JZxMSgGJnHvHPJMUeZxRbsL1",
  "key36": "2KVvuJUrUUd9i33yL6ZjpLSGWiFqQZn14JHxYSKq7zL6vPjK5SxK8GFZeTd8y71RDKrYVAXEtB9KfCUvi8TRgRkX",
  "key37": "3i8ViphEZeVEhVf6ydxatwoqA11dokigXtdKtehE8hf5gNWHuFeGqf1Z6NN3fqQgoisddroeG3Gc7yeqD8HMNKZt",
  "key38": "2u9P5JErXKxmycnRb9RoZ5Gs5Dox2fLxkwyRz5kkyFuEshVqsz23QEPFDu8yySajbAZfenhtNAk4VuUhq2NxKJYk",
  "key39": "4fqQ91dTUo59FWVPFEoHum8NMQdj7BrcWDBQRT9dHn7Za8pSSbdxXNsVamafPRgkTEATkK44vFmNmnPMFiSC2g86",
  "key40": "2EF6rAJ5Wtp11sgDLUJLneEkDqwvx2sdLeV7YoZsHEtRC5dXK1CZMas6QbnFXkzSZkRxtqS1Lt1BUkcJizy3V73g",
  "key41": "5i9LZcWKdL1j2RcePcwZSAtZxZha3j2PSBYveogni2H9CC6rRgizRxMbPvSNe1T6bBsJFxhF1ug6pRafQetucwZp",
  "key42": "3jPw6GUaBRP2D98CaGxMfqo5Bd9BKUhCQ8w1br2Zdk6MDtQRmQfDzCmRYGqk5j7zEHWUR7rae1Zt4BKC794B3T15"
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
