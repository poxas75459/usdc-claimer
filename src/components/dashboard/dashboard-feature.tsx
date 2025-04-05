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
    "2ZW4Z5WoYyVmSLKrVEqtLnA6FMdo9F88PvCpmt7GTwTphNNBRr2wZj2JGjrNayFUCNs8kbsTeJWA9R4YwH5EUHW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMckH88pcrZjjtBEDtZ5ia4qVBFsxcNdEConCUXzrsS1DmLo9Aj9wKgR43KKXPcxy7K45ggFJdHSsincquLDD7s",
  "key1": "t19FYomTkPXEMnhR7tuc6wxcQW2jRxDVqw2ipLyQKvcs2sK6RAM35KX3UpFvtyYmhVn4ghVNtwVAxZGiVgVuv1P",
  "key2": "372PBGRHff8rGdGD7uzEKPFXVuH2NduDXdNjdABBbLZD1hB8APegLN2jqZioAcFMcpM1V2ZVCjsgFLL5dH7qRqEu",
  "key3": "4CZVeHMPVusZPfnrXbwiexRUgJhY1mF8qa2KvhpkEdxPZkPaZAuiM3m7CKWcSfJJn9aBGR3TcrNdF7xVdejaxWNT",
  "key4": "5Aow3VnZ5kJQexd4xUmkGTvaPz32BvEeXZeq9MJJr3Vm4zDbpZwm4SryJ5eK6N16fVAH1YxFc61v7Z66CkubzH72",
  "key5": "3L4RBb8Dh4Vbd9dFvoYxexVaZPGnvWTdk7ErHZ1K5PCebkVEX45Bw3tK33Mz52iowRJa5w5ySWMcFEp4jx3endR3",
  "key6": "4ETaRKm8eS14tUnnSTMY5MYEuxjWxjZrpBDnM4feN61GptmHgjCL5wnxkxf4iYtCJG7FokH34PxwZeaSGd2zweY7",
  "key7": "4B1dAVdhjyfFZG1dk1idQBc8Xzn4kRJEDR6yTwAZorRKLWZVXhCH3KgFaqUiMtUwzHHDjP4etwh6YEDLm6zq8wj1",
  "key8": "6Sbk3Kv6f3jLX92gCitPMQ4geTKhEVAF6sMUoFsfJ2Fn7P8YvXRNtgNSFDyK1KscJaCEeTCQ2oUZCjXaFCBGGqo",
  "key9": "5m82BhFhykvSdpmMUFgtdw4WujWijP1YumSafaHVvPD6Ms3v8hAYxexNehBJzVqGSRnMnTefApAKgXXfRJKyxoNc",
  "key10": "Tko972EQGyNGEupbDePXyKWBwUpPiGCbNM3Bf7e3mcJZf2ywuzEN7CoB34FW1TAiWaeUeBtMn92PtgC33zcF5CS",
  "key11": "68hFDkw3CdTzDYR5iwUEjLuKovqCuvhGQVhdtogYy37UCrxmYAPp13xa2yzmrXMo5fSGqZ2vRESw4TtUcgehmUi",
  "key12": "2inwEmp4bTBiLy5CYzbUHsmHLn2kaK3RQJUbfmLMjA3drgd5Kn4U71YmNB9nrDpgCJQeYsbrSdbnpAawcWusxP2v",
  "key13": "uh8mquGkTJ58kN4N95FwUEizAQTgZTrMQqto7HdJeXfowVEA3Hzkt5nWGc1n4AXiPNkaLnwFWzHteHPXfUdhdgQ",
  "key14": "64MTKWdFhaaowSWbAV9mT8A2BrEWVarsEPuaxUU7RQKoJU3jbkZCFU9RsQdiwgWKQKH5u1LRxQeGTGAbeVVHqjN5",
  "key15": "61na9pTrMHtTzLKJ8tinDmmKDdK4Ew9L1cQ9fQMFtsAgtUdxASEfdQiw5GKyqJq7tDvw66oAbsxZKZVwUTekWnxH",
  "key16": "n2MpUxztieTJVvesx6JCE2KmxM7M2V88uBkwTaKriaCFdXPgkFV2vMqRnGoSrPv8Z1w2eiJPLetoDXatgZVXHts",
  "key17": "2g268HNB4zag5BivrvAsGzPZ3J5hbYMBcGaHm8XuSmb1UUnBGa96KMGsxgCE8NkzwiSrUCwMKJsBsWVxN1EFEKGj",
  "key18": "32boCLwS29nspaX1tnSFKiZHPrV9TJmb9E9esJLB7JJQNzHF8hFa5ZRBiHoFGWvAbgf3o6WbiAnTDPiDmjZQvFmt",
  "key19": "4kfX5t7uL8w5fFDDZphW16s6xyiSJ9SVzu9c3A75kAjWsDEAp9W9p9CZbnHnKzcKk9WhVdnHVViJSt9VATnMLXPT",
  "key20": "2yA9X6U22pbijmLe1uwMA3HTzVEUSBt9EhmKdqjjsg8H3vhbBGWRc2CAfs8mHJBHPzrzwp8ms8K3xE4vwW8hXMZP",
  "key21": "4tKGb97zaQ67kgDy3t18t5B6WH7wMP8JHMUf6nnMdGNvYZBz7q9VdW1vngsLWW863jCAP6VvYhNiMkpM9zPr5RRw",
  "key22": "4TgnePyEkmtgtGcJ8wJv7PXhb92VieqfwpG12AS7j9rDUdMsFVTyh3rkGGLjNJCqD6i6H7sdkJRCS7sb1nyDpSa5",
  "key23": "4gZXFmitHJccTnyTTzVkbWMwGZfzK7HHRwaxvwis34QmZCVsJbZTxijsnhqy9czcdp3JNqn6ndgw2dSc3ewmtboK",
  "key24": "58qKBajAsSkyVt5Tk9UtmZY5jXGSU8jp4tFmfScY1AjA4ddobazdd3fAanF5nbvPAf5J2mZna4GsMkuX2q5NHKxi",
  "key25": "4XLYitYemiv5nbevW8YJccXK169dATD9vF1F1jPt2x1gcLb2Wfo5nFnUuCxhA7d7xEi9aw9NbxzU3dcahsA7MR4Z",
  "key26": "5652omZ7GQYBdDWN2ussygZWTmbJnHiXdgDBLSVjHpYxwwtkshxe9i4rwPiMKgiYwJP4tBgLkXExkDiZorTTcytR",
  "key27": "5wbZtAv6hfq7HHn1LX6gGZwzJYpJCmAL7RwDs3Eo2pkvF1uYQPp1b97Gzpa1PccBxYcjyeB6vug7LcoAyeMeeCRS",
  "key28": "rvEe5HfWRtA696dRb3RkYWhSAAAdV4VVqcpXa643dJzBuL2Km6VyiPm6tH3yYSupr9Nj57TdXTYR9qLkoYBcCB8",
  "key29": "4zYQJxbcEcQPFV15BKKfhhDmHUHWDbVKg1NJT9FrGTRL8CVcx9EWVi3mzoMNSZcbMsPqeQGUxmDY4zdgUKmGwvas",
  "key30": "gUTok1bnQyWVZctYFXMTabHDv2VyCMUz9GMhfKk3TTRsyvFacESXBKYrmk9ME9YoGjBpRBixPsD1ebUfTG72VLv",
  "key31": "22fPU9wTta3sgyko9XmRAaGqdqLzKZezL9cWrME6Lu6rC96ztWj3m3KQLyU9RG8J4332qG2G4jVxMtY7hwSg9yTa",
  "key32": "2o9s8SZFN7S3NVvLFRVALuFsF77zvxu8HpzHfZfuT4nn5mkcMD8ymkjfzK7xWsqmKRx5eu6zbTssS3YhLjBAPiLD",
  "key33": "2sDeFpzoEmLJgRuGRiMrcbC1kf4fa2nGe6v5feCmxKweRavu9WzP2ZGsqeyiJmFU8HCEyiyhsBYgDNAtmRnfWwtL",
  "key34": "qqwGT2PSj6GwwLoUuEptEHKYyFGkCELzKa2XknFii6fk2rCwSb4PJjVHjedufuPP7coQSDzy6pFdbEdtnLWNPhT",
  "key35": "4ZeHqihPoAUVabsoSdPmaStfAUzFtuiB4YqGa83kz9siw4FvbmMXcf9PVEiVme3VGBP4Gtces9hbujVN2udJeZtU",
  "key36": "4gbwAZ1JpLZzSNBX8qKGPpHzBRkA5z2tdNWZHC9zDMtFVBAW7paVC363X2z2f3RJ8t5yZwQKNBwurRxKGAz4v7pQ",
  "key37": "4E66WkAKHhNpEKm8AChAUgHmS6osHzDobsehPyEdRnq6TSFkzSmFzshHm5cNFKAsYc89jFRFJvppP6AQtLTRBJ8A",
  "key38": "4piEMgSv53HC9kxAhvpS7jRdr5P1YiJE7qpGQhte4o1KVAyUzKcWuatri4bHtXB1RYoPmnCWAhSKwTYnLPousQm8",
  "key39": "4vqZKimJzQGXn41AY4eqwDphdoreUDH46GvVq6wwCQosRpVgCQsnVzcTLdSsUvDpv51dZbSMkJ9omhuRihZrL5S8",
  "key40": "5SQSCuZRecmX5GiQHtahShmXUN626v1w6qWhV2fWoz6FMcwqAVjVecb2pAEyWHwdWY8skmG5HDLgsppyy86QFQwQ"
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
