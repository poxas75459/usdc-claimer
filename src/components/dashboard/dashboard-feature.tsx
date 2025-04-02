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
    "4HiHvDMTimcVX6PFptXhEWAHaNqH5EtnMgJCjG7zAqteqfZNhD7FwfN7SJMGbYH336GpRdHgYuzz71AkeYRG1Ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8DrLfAiN3maLpjdrNnUFX7gg3EEbXy1eE1fiWYEUzG4i9Ar4gse4oUGf5Utx3BiNNqzocWrEQwpoSBeiQivrq3A",
  "key1": "4RcGmPCan2vfUn8zDZ6BTR4usLPw86frymBiL7egXuD2XiUNwxsYdeBurcBwheMNVdaD7gzwbZfc1X8R4ZfbaBYZ",
  "key2": "2Vp34AxngtSF1uo1DetLKy75VsazAk4x1AkhXWPu1hXHKx8GoRkDVzm3nYFZpGDs9NdYcSYHdAwidrp8QqsCywab",
  "key3": "23JsLJAiHG6ug3B97cSGREnpsDYicQZfWoKvoj4vvyduZdBcCebP24jWS2VsHm2C1fUSVuYQs4jUqediULnpXuQe",
  "key4": "5Gna2JkKz2TWHokwEz9Ur7qUHNF7AoGw3MuQDE6PsfYkaXtrVUCPJRRecrGBB89S7neVbReG7QKrpRa24hCKLddk",
  "key5": "28ciEsAejNWp22v8tKpvBWd7DidbXwEAhA7sLBL3SRRYFadzUasbeNYNv4piQzFaEV5A7di6tyXfgdM5M1xgRSse",
  "key6": "5ywhoh1G9vdhznuLsZqEwUQjc4YEcQeLVVL9UhsdR4127RJchm84kjaWJAfMuTnXB4ANnwseFbKnT79w3Jgsvdv5",
  "key7": "EnSz9ruNM6oQDW5QUt7LSNHyGukjhbFLUB6jF9FhGX642Sh8xbhV1TDpJT2csCcQVx7Kj6ftg2HG31bjvhd6TJM",
  "key8": "23DVzZB7xUH2d8Gz4PUbzUwuZtgvMwKV3LRYT8TXsHUeb5dKCPr4emaRw44ns66Mixr8CeHexDHqjDFMuPcLDKw2",
  "key9": "3sCmBfAuJFd2iN8H6NESk3PdgJtXjAgWeaEAbDVRFe5uyray1qwMa4sVkCzERkzbGjYmC3YhAFrkLEub4jr5gF1V",
  "key10": "2VBFXSzhfiG4g3csW13k9KWZyNXYt4jjn6mKzv6Evv9iRcfRYuhp6AuxyqkdNvGEFe35LwfWrRkmWXWkwi65S9WF",
  "key11": "4TG63HnJCMDgncTCRGomzq424JXFDZKPodorJmZan3AwptR7Xw38t2FCBYsx2hA7zPnYTTXyaSmhZyhEycmvQJ6S",
  "key12": "4ENo2EchXsxic3xkKieFUoWoomD9MQWWSXsBuc6ic9CGD2pNrUx9BJxxyet2X2wEZkW8a551Nwffmc7BjpSf1ttV",
  "key13": "3EirdwbhX6LzUaBc7m9oc65TR3CLuuPFFTbwZFS9yhJViQfyYQSVknALjuUd5KTezrtquxrHRYwZSTfZjD9LFUwC",
  "key14": "2F5BvZB86fpLVRuYZFiPEGeQ14soyn4Uf472D4aFMVZmHUhEd24Y8idDpGgnbA64tMMHFEgnaMy57QRGPtYPkQCY",
  "key15": "37RJUbnvDND4RcZAH7Dxc34ASSueMk7zPqJtT4vYM8tqqRHX7UPH4XA9p91iR79rBbxVSNCMWShg3aCjogtSGLVv",
  "key16": "mfZhs3gMRrL8HgQhCMCMdsFj4F2zqnQyyWDBeaML9TjgUf5gr89XrFa8GPDuDTgQAd5H1NkPx46u7khJ6jam512",
  "key17": "3rmzBTpDQmq7Chs8eE9AB6cQM5g6afEYEv6iZzaDzeUxJZAQLZVUmQJn6SD6XQJvoHCG8br8pLByXeKwVsL2Yzqc",
  "key18": "2sdPdNMDkCj3JLg9cS8mZvJ9dbjrJMKriEpb356KvkPWfxQsMKHNiVFEMcDVsXUKkKRsU3Sy9P1hgwRiTNnMq7Eg",
  "key19": "5tQJFS71dGbJLNu6LAv3XrnF44wgbrX2gRR3QfDXdEPJR4Z2E6AeFgiZhnLi35MjXANsafrZxxHJDnn3B2rFzR88",
  "key20": "3dmxKf5pDeSKynW9XeiEuCDv6FnMJhqHNDJqLye13kFue8uKU1smrKkhAAGtX9oLYT7ATd14BHzVKic3URnjUc1o",
  "key21": "35C4kMqLxUhQtd7KR6iN7rwAHTH7aNX4WLMt39J6TCvSHHUTpWiLwpGCJQP4aGi7YyHAStbE8yCLK5q17yZqKFpK",
  "key22": "3VxSMx3J98QnnQapW6WBvQCS5HNNDFFQpGE2AgEcYE7TrwSfW8CsnfLtpMKSdtD9hxEijhZExhvii191QFgCrU7C",
  "key23": "3hs8j599raZ95Q6uAcVLeQoabCNMjuYLhi5kHxBbsPLJFqeCSME5S7s9iKw8f9Xggmy1gVq5rFRycFs1sou9EXvo",
  "key24": "r3o9QBToxjQXKAs1Ym7ss9FEC1pC4td3BArkNj9RS7CQwpchNx68CsBBGWNFdEWiKEdHNKoWku1mjubtBsmGRLi",
  "key25": "4ehoTVogZkpA9FiWhzDtTYxasBJHNGA4jUcjTHKxhHqBFPBZtX49apmWpTBPQB5VQJJRvUga6m98PGRS5ZSdBVzc",
  "key26": "5qYzR9MkMKY6h7zetyS5DRWPiRm8vpPTvou8aK5Zbrv3qAu5kXkC4YynJhXezybzNPSbBShEpCmWqE7F4bUrNBFn",
  "key27": "5uso5U91QdNWNJH5H8zu4A6ERB85BHJYhmhk6gXw6SbX7AwikyBAbHW6DHP9bEd6JzpdDdGQK4ur9DgWzLfuP1gk",
  "key28": "mQ16mGMGWn7kfh94ctx5oY7StaKTCMUKapFZbujzcSSwNjutQvU2zJhHFT7Nzc8ijYYc3wJ633DsSvdB1EKFPCX",
  "key29": "5HrA34APYvepQzSmy4A6RutfSXRdyEh6Vw3zTcQ8w5MLtvH92pD1tgj24Fb3T5xBaLd2vHEg2on68veQydbq63sy",
  "key30": "5hR12ZcMK1kgRwiWc78EVLNoWzHSMAwbmJh6JyaFs3QmDh1pArs7CnCRu9TBpU5nHs3QBTpKTqpTULtKw7Hyad22",
  "key31": "5JWVpPMF3mXwXLtWvPKTYgaVDFU6geLjXJ4edc5QUofFVgRAMoN8y12fQD1adkG81CyEb5j7azmoMCVo2NzYZKtA",
  "key32": "3natAjiKjg6GCxWFi1DFQtBqzgUSy4pvCnXQtfmZH5pPyACzeEDobenjTuNoikKXcDMcfPVeEYqXV9T3NTcguDXt",
  "key33": "5EycYDrEcUw227BmFdfNTBm1CPMePaGYU3NP6kc8T2bimRkCLkAN4j3Aod7uKeQc7bDU8X2iDPGWzmDgBjDasm3a",
  "key34": "5UP63Du92D3A6xCUWtjZUF1C4YzE95diQ7BXQJNn6THYz1jcJR5r7XvK6GkgAdenMYjZyy4AgGNsVT9MYJrrrrbx",
  "key35": "3WgR79SpbyFPnf8SbCnV1sU9WprBHu6AQ3tCwuiEWBmNNSYGNSHmdSr7neEGmNRG4V33k18wEGCrLawXVfUR8Bqx",
  "key36": "5BKHWZJkua7C3wKimQ1MKLZfNHVMLCyBBKjWvf8dBJoSL4ajskZLepc8u4Jv2NKzGzQKbiFEGBHjb2KWaaxgFf9X",
  "key37": "3vjRCqFZwUYGirmiwcpbg92yuDRp6H83ckB6CKGU33uHTCauTU4XW7RfZ3GWhjzbEUXqAvmwKktUkBsJjZqigAPB",
  "key38": "2N7Uc9pZHa3D9HFVXJhaLSGguUgBmmq1wSXFjd369QrQhUY53MxXrjW4nAdwzEhLTL8ASxD4RUnvQBXY17b4MN76",
  "key39": "4sdXwYxhqtSRwj35m6fB1zTewzaurGvRPmQo4FdL3v5xY2TZywfxzhTcztLovfXmx7huv4zUyn37GvKiaeS3nKjZ",
  "key40": "PRd9uSRM1sf5yYne7i7biRNHg48stUyNqxk25f6JspT3tvVbTAewxyVbEPsui1oFvCHqrk9wkSnJvqFWbHTfEsn",
  "key41": "4BDyu1AdJWpbQJPAP4XdS4WjaP6LBepju8nh5xcmMSf9Q35wV8gFEA6PVFrCTyZEFgfFDCizFZkNNJRjnd7uPLJd",
  "key42": "3gQUPcmqKrBEEcdPQwbMvbH6RcmJXWBediB5FHsVLonp1iR98FwusNZ6ABucbRwZjKnXyRGgUFYWMeh7FAQWTcK9",
  "key43": "5ya1Y7xMyfk6iso3anZesVdEpJDyTU6VtKVD2aa5kuFyNAD88y3KeTqWxjdPkKH5j7qyG2SNYh6nuNwjkGxgG5Ef",
  "key44": "3NFG2aGny8LsKJuzTfgdcB9tGvgYBqaJpgJJtHit9nu1MP2YsA3Ku4H3vBar2awavXArJQyQ3DU5daUGLDuJd2VF",
  "key45": "3JTpS5MZsm63uFS41xJMettPxjZDWQuzZX4q5SJT5csd8v7rrq1xKEhw2ei9EHAgD4Vg3pHkJTMkZVe6WSaGqd75"
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
