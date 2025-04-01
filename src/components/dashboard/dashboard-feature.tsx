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
    "37omKrEuYbqCvkot4whPXcPztGbTcg3iyCvnyxapUq3z5LvAyWPjcmyMxSrn6NCiUijjA6YP4qpbBF751zUayaAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfHVPNC1vvLMT4mNpro6H7G3uVJPHhNn2HYCYWpr1PHqp88US3BastPErXimySaCH2Q7xLepvEh7UgN24CDnskD",
  "key1": "62kDh3LBFh8R31twgFPPvMrsWnZZpK3ED5yvvVbZkpkVgHbmNR6pVi9WjgZGHaizUC89Shth1ZzH4ksxVFSimKpJ",
  "key2": "4H69kMUQtyoWXVkg4Qgejhnk5V1vdEGcjecM3iftZUuuYTgpaotsbmbixJ2KrjGwDa3QsbBfJGYuXaCtTLJY14CX",
  "key3": "q4fZsxgbJxqam6KBGwiTqbEgxnZXg6YK6wMvmUFCiBcWGa9t9N93kJrDsyDpr3L16Tz843qEMJvE7QBWcBAYwY6",
  "key4": "4hrB1b9nZRqfpvPq4K1CRb6f6JDc3kYviqvAw1kuh5Zp5VMFwFLMktv2TCx1byxp5Etzdxum8xXQ2NKV9KBotLtd",
  "key5": "2gEuX6iGY1CppwXJns3Uxc5tyHsVQPYQXpExMntYumNRsA92AxBgBJkqoU2hSW9z2ZwrP7yGD9sauqW2CkGzkcJ2",
  "key6": "2m7ck4ZKXtBvTA8Fya2tAgxvzM2WVXiuFkkoNxyJ8GsLxzeGJnZT7ST1i6R2pMtDQur6roWPibGEHjiXu8Fu7xxH",
  "key7": "wMJTdoB5AUCiEfopQnH6xSqz99dDAVxos5CSGWweTFoCF71gyQS5MFVq4RnqNcj2ZzvMTRbUAiJBdKkGJh48Zem",
  "key8": "3jDQUYw6hctEKDTp2tQK8MDZ6o1QwEm79LNjrjXoCscYDNsCtVuZnJwW6Tyb6CGoPtgyBeWfsCQnPKUGBVA7fGm9",
  "key9": "64EGajNeAdQtWDPPCeEqvxMWYpNSoZ3s5qDiAhEyZLdbsv1f4eX4he64ZmFy3JMdyKHmno8WJfFjBeCYvDN4qxvn",
  "key10": "2EuMPzm4W8LBMhsitSPkH8HwYJjvieTVQoq6b3CMozL1R8vnJe8TTy8sFSAbumUYNjYz6z24GW1Jj4xMrq9yHd64",
  "key11": "5fGHaiZ5Vz47WG98abdWPduQWaowf2V4Lt5d6zF2d9yfeFjsyKfSBs7MPDXYBi3UdnreRapNr9mEcyfATcse3UfT",
  "key12": "5jak5wx8QVoxpcEjiRUbEqgNygHXtgeyL4956SESr5n74XVrLGHp3Y86ZnZogQ8ZksvDSGpKUabJrvNShCeiAyxc",
  "key13": "ziiH43zwbHWeBCwtw1WhnEh6JZViTvWnui4UJaQbddkzjG1UvRiaxiwM67fg6G71aAQMXM8rtU4PQwwdNPL8y7C",
  "key14": "2pDPbJTEuz2jxGHiVNrzA1SWFbgeCj4fj1PBxbffbM5KgftvTtLDRh7TJCYgn4cMiLu5e3P81sZHmkr23YBhycLa",
  "key15": "5yRZXWJQKsy4XwwsF3YaUs2Dobo2oMXFDiEuA42URLuAw629LBtJm9517BcxchTQyNd6rVM7FpGasmj2TEYeVDLD",
  "key16": "4uVTBi3P1pyk3sZsqyyqaWnDMCpEaZ5HmFKshnHcS3vfgvMmtCehdBKsXBjVKx31rR1mzSTejAwYB6AQxycyAfBt",
  "key17": "3iD7K7c9tGDfKNFsqTBZ9omktFMfZ4vcnjFLzqYBQ4moQkUJSrxgrStHLBPHhFP5HTpvu1r9TGtgCny9AVRztVLJ",
  "key18": "5hs8oxo9kRxSgPvY9mpotQBdXwdibsuqKEcrEjxQqFE1wEfzU7ngCnbf3D4jnv7CPgP98pWTWZWo6fjcQBHg8qxn",
  "key19": "4HuXEKzx6qaM9a2hTJdY4vUge8nc4i63bCD1pjFeJaKAvUGLxvuaPanf1Bz5kuj6xMUr5L4YwPt3Mwbe8jtawMhR",
  "key20": "TW1QsjGr43rArPnpVMxBWiqC84jQJYDFD4p6GeBiNnPfoPQEkMrGQg9CPwEavEs8rdfjXouY9CkmWMX8UyT7RvG",
  "key21": "235c4b6CqD4tR4WLcAHy56MHoe3Xvv5uraX1eWFwWeRLCZ6NdapSoS8RTM4zZSXqkMMEzTj9HWXYcBnDkFxKcQKo",
  "key22": "4e7dM3pTwue3UxeonX8TftiAPGgccokkCDLkg8RCZMpajNfB4sAzyXSmmc8idGuGeWF1VFfww8RkNE1UnpiLF9Xg",
  "key23": "5EeZH64Gqs1UeGgJM8Rd7Pp9KU6ywMPAkio6AyZsYNFAR74bN2jZHsioEb2WtnSYBDd4HoUcPBoxoMKKLw9QCCjh",
  "key24": "3Pe1ZnE12G9ev7Lbp4mB7npSDMpbKrCbPv2shoyECeVYUDSWALosnK4MFpV8H5hCdmqboicDCuerRywYBVLZx1WJ",
  "key25": "2S8oJFrHJ3fV4u815aBxcuMCC29exi5P356sHt5F7AGq66DdWuGL4g93PDeUNHVHuqPRfB1wTZjhEh38TNfM1oSC",
  "key26": "67cCmys4fSqzFNzD4bJttsWWkmp5KVfLuJK3T8BSYKAtzFxZyNLHf8stGmXTp8XfFNWDhEhvZqWx9cq9FgDNAgxt",
  "key27": "3ofxidQ2qL5hkeJgtkwLe3vBiNjCZNfhLgs3BuLpqhrGypPyrfDRLc7P4PznsTHHTDUhNm6sUNzB9EYy9MBMUwx8",
  "key28": "53yxtDYFwJ1mqsvjnDSK7La6R6HXdVtVcxg4xfysLZ2FGMKaX6ozE7AJxbKsizXg8Lj3aKy5SMLdskvRE4Aw1E3P"
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
