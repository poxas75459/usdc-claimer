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
    "3it7yEyiyYsrkzB2TY1aDhEUYQd2ZNubpdLDoLn4UyWviUWkmy5q1v88ShxgidbqXqzYsTceQXLbuNMLWNtLbMTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2srMVeQbqdeAy37PVgkhZwvLnifa6A7aKjztCSJ8tWZ9SwAem3Urew1ZdqLgP2UBjUqr4z2es9kQ7ajQFpVFEHsA",
  "key1": "4ytP5o91nHUg65zG5GryszjX8ceh1ocihR2khkQMif5sGK5xvy8e9sMeMD5XiPiGjPx4NDE1wHJ6oRNhFvGraSSc",
  "key2": "3R6gA9XT5rVSVZRm6KdXwZanfDFFHjyzg8SFzuynePJhZLDA9WD8yzvGRsatGXNJAbyD1Wd5PWfZF4H7Suo93SJb",
  "key3": "4a6tFdRFEDc1kChSB14sGRHNiFW3jDvbDDTsbhteALHg79NHZrybebEQHpjSCtXXirt7cqH7TRi7NXYsMK91vbfY",
  "key4": "2XsoS4eF2fBzpCzDMXfM8DcNYEL8L3DfJCtMC88QVXrDQ532X1iuVoocj9gUmeN4JAnj53GzTaHSKkkgvoyudmFD",
  "key5": "svtGszE4pfufyXxh84mkPFoUEdEKK9jUCUU5rgZG1fQaH1k45186JGua45MNz5yo2JvsMLtCMdVGvfJAQx4pbHL",
  "key6": "41NevKSsWoWnEymocN4G6Ze5c41Qetdchf8BdqTk6s3Vgj9vzQkhgsrDQK8qgBYSK9DaRajEcgTaABbV6PWrN8fU",
  "key7": "33PmBysiz8RZ76Z1nvZGmKpmjD2pY2xcRe9Ta9rAVhFraJ75FxbUQsFeGfM1GADtPTh2PzCfFm1DvHSKWXkpXbU6",
  "key8": "5ExTE3fsen4kb7L3XdEaQj3NAJspt2irA8Ba1JZSYSqLJYiyjCWfAiFxhVrjNrkHAnjUMp7UQ6ZtVAciNxuSt5Zv",
  "key9": "9mKDG1XKvge4fFYQ6rTAXu4wGZBBcxPTTatBi6CWaWWvmJVknnQLPUSqawD8pM6dVDobdeKY6BcNWVZRR17Y35p",
  "key10": "5K9PigqEgbb6UB9r5sk8CLPY3GRJXH1m5Y8SkPWeX2euxD2iu7AUWFUnekV7muyRayyHpayxpq7S6wyYHxq3ZjKV",
  "key11": "27MYNHaz5CFz83CJQyhFeywzt4hkA1LjQi8oWCAEodtmPisoHoyKEaxfAAdhHfndxQFFajPvv1qZvjUWXYhGaS8F",
  "key12": "C2KDzHdU95mmfcMt1M7ShHeUDrcxey5W6YSFcMm8vLEfinmQzZngQa8aZdbDYWq8m4i175mjfhU7nNZSdNGPdaC",
  "key13": "2UJj5kmnR6QQhbbG9NdaKhLyhZXBy9RWT7woYZjcqRX1SvcbGPXXJjBKeL3ZQbkYZdJ4NS3Wh2isLs7PEiXR1gKZ",
  "key14": "5uk1LwVoQVohH6XBzeUaLBXKyFoPGfRAC3GPUQYChi5HNgsbdSRw1XB1yGNvBTRajBRSvgQozXwpoAgnZqHWbEiX",
  "key15": "4STcZqDQr76wAvwHH7caGFM3h8DbNm54D9Nu2YS9Uf9LM9FwQZxDTH1248zLwbQ5wmo29iJZ1gAW71yGAmyELpMs",
  "key16": "4mKPDTBZiTgLogop3g4ji1PtK4a2y7BeNf3qVNYuaeVyZTMnqgpLDb5YkJAKrYwa4T3TfPoMctPFigjMXG7oWuRg",
  "key17": "3QXspFZiUpXEuBTaM7NFy1PY44LLw2xsF2vpcm4ajFNhGUo5TxtM2T1oVKRjZtnFm3niCV94bJt2WSfGJJnnYe7V",
  "key18": "iaoMWqUMgR49kpp2UfCNNYWoa2PXxzjeZpgtFuQgsqZffe1ZiWsuZKXEh1U66Rw1ogb521MrH6KaQzZf24zNxhT",
  "key19": "3AzG4R6zfhRvydoyokXzqDz9tWqLJVNFnMTbUfnzjKC7tHBgGJeU1P5Z8sWVaaeuDSfXnpw8cg93fL3hj4XCJPLx",
  "key20": "4C6vbLiU8N7WPPqvZKVegzitA77FE4JpX5K8DyX4Bnjr2PqGSFQJvLEkKdGGr5LDaREEhL9XZx4ANxsTnQRoy6Ed",
  "key21": "4YbHXKRUijjvxG6qtYVSkMrp1FjccPKMvon48YC6ARDXnMzhhimxCT7Cu31rwXLUx8a7u5KAbF1QU1nnWG1Sydor",
  "key22": "4riuQvm9sh17FNrv2unASd74eChP3jyyTCFNBBRBXcncB81oDMBK7MKTTfJywWhN789jZyf3NZf6dAf7grJPbHEv",
  "key23": "4LozFq9D1RhWdEE63xufk6qNBZgjfcnPwHM9Z4SZcjt2m32YGyrmSu1gg6fZmNnEHyuDhWnmCbskf7ErbTTYYPxB",
  "key24": "4YYvEN4umieTdPMtuWoMHKvXGeG7saavoRmaYXjM6QzVJxmFz4nAvrNz8M2bUkH1d3yHLprTHUKKuD2pU2W9Bx3u",
  "key25": "58qbJ2DwgLDzYFyETkFAHBcfKkKLBiQF45652UaHy9c3zuyo3SSjCG2V9Lr4jTwY5SUPD2zqgNqJ29CQHtGQyoZ8",
  "key26": "5pWe7ES19VUxUnKWgXqCZJ2f4QMq2TrQLVjL18gEaN5HY1wzrqJd444VHvgizQ1kBBxHc8PJLPX5FMMsHB6Thocr",
  "key27": "3PNCTnjjb1TbDxEod3HyvnXEDotWDZS4F1jktoZU4ANXMYA9dnha4wX9RrkYZGB4dtM3zBLcUsYnWbgzcBggTgFc",
  "key28": "2PfRtBC7a5CTAMt7XzKda3jiRZ7cW15TDg4g736NCimdUspPCFpVrBpJeC3zcS5QsavCWxJYkBBdt6KNSoH2n1S5",
  "key29": "4MZJLusnBqyMreTrMDNcebn6ULjw742PEbd33F9rBaPY67r3gVmGGUswk3uFuGuT45ZxKmi5mHujgwLVhbr7qUXf",
  "key30": "4parUYziagqNB6VGhuJd9ouPG8F2B1ViWpGWEgn1jHoYBE9QUc8ZQciTMPmpX4PVi9EsC6W1RtEhfwTSivQYfbFH",
  "key31": "2gxaWxn4aL4BCUHT5QJWKjntf958ESo7Xdjdv37iuzSMELngnrfB4kjZKq9618KwCeBt6toMDujP4Kdn5EPP8YYB",
  "key32": "3ekTNDN2Upm74kx6scrjgatX2PtSYduRfpAvvwb2s7qvvkRDodgF3fkyHcwbf3efY4a4AwQ6UGRZRjDPdXPwtKWQ",
  "key33": "48YFn1koiE2AtSryoCDK5c42Cg5J9jqdj9TMfHLFnn4Evv3kLFq7X4dNJ4gthx3a7fQwQCbs362fWn5e1kc7aNqR",
  "key34": "53i4u1U1jbw6BUco4wUhn73bso9tdgEtnZfea1cQNbJFij8fs1fV281E3A4MKuZq2UyAayivtbssTCaaKKHw2FSj",
  "key35": "2C5exDBVCXU9FvqtdXqkmjjaobbuY9SEWcAEUk5TDtkU8v5U3Q2M5wZHVAtnzSdeaUQduW98A71tk3zcYGv7Qvr7",
  "key36": "33ZFdjbhDSqLfQdFgFp2f2VkWuNq3qmYVVQHTCvUuiGFbRyuaS4da8khaN8DQn4aLKL4iNoPSbSuNraKztpTHSus",
  "key37": "4cCA2xmZ9CnUNfizJrJ5n2kEmPPM4RZLz96NbG6vV9vSLUei6Q2kiowwZPDPGcdnehozCk4vN1UT9CNXysSAX3zz",
  "key38": "2z3S96LtuYnqmNMJ5Zx6Jb9cTMZzu8bae4AQ4qXVaTppWE2eEsi8VkSNTGvmFTYhkEMP7dE8S7xx9tL6Kp5ZLYJT",
  "key39": "5HjCeDdxSXW5mfHJoaRdxJePods1SDhTfef9FxGpYUHxGkSKsimcuY4i1AFEUVLDrYTXd3ixV2ZrBTDVgotassej",
  "key40": "4z7YM2WkepaahgVCuQKLUYvj7xfoZJoVdX9bkwqYotVNzJr9p7MN9mc9ML88QENscfMA45jYwyD9YDwrChPs9kYN",
  "key41": "3ip5SemvmriFubUiJkmsWLAB6iXcHMamVdAu2n1WYwhhcTZ7w9hp37bQnYVGbUMx92FhQw33DUkwMP6UC9Mu7Wz6"
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
