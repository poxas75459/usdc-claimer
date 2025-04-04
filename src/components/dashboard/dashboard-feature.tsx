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
    "2XHU4kTK41irddxMsgRwuwfQ7XUHwaM4du1URQqnnQpoTUjg4RHspfg5kdtm5yCLLktKRcpUy56trnXyF8DncERJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kKg1Jcz6qJMjpDnMs3JbXW3nUmDf745athV7icJYLTh5WzH8beiDihYseSHfvWkJvuQHpS47w1gFdK4SALKNuAD",
  "key1": "3WRMYATvCV8SL7nv2gqb6pQPmcSbdzZxf2Zb8rU4Yrp5q7Gn3xmSvk8b3Sjdgmxy6WP9GQWfvBEpBMSdH4iFw9b1",
  "key2": "4iVK7r2437HBeKoMCQcfJQumEH2HHnhGbyeLWqAW2D2qDU7iDWadBi3TEQvWxpsBxXvtdUJZ1T9yWYcCuCtnUTJC",
  "key3": "rQ1wtvRJUL6jNGtFeqy1ED2jUXuHE8crHyXp5hvYV3Ghx63QnrYy7vhmrG44oSkbq7FvETAxxmMSArvFVwihJqx",
  "key4": "2MfzDtSJGzvDjoLXN3eurP3nKszLkUBFwAfn9e2r66ccji6E46Wdvr62Mmr3SSYpFNuxaXGaHWcbux8sA8f9kYMo",
  "key5": "3txUfdcaFyU4MkuBzvJCpcVbMHVGoxXf1djGbpfWnyVWXaAvAkcqgXSw31LZoGYFz79UAXsXvKcFmjStr6fzS75R",
  "key6": "V23DcSwZbZ3NF9r5SXCsJu3zEHgcA3YYsJVaTMZshzvnNiz59BrgpjmUvFBs8DZon1hMY4KNfRdV9DBWfhXag5d",
  "key7": "cGwnt4z52hC6pQkyBEpR3M9rGKfEU2pFdBAUg5UrMtwL2KXFhghYeLZBG54LeysZGdRrRd1FQvyEVjgGAwRaw7m",
  "key8": "MGrRctTCJSYbPQ1ned7rehVe422xUTLPrVsPJWpoaUfKN3ysREM6ZKxg5tvRKfNjh6qD6DF8MpsXqomZwg9QfMe",
  "key9": "3qoQyu2hD91vMYaPzjrH8JNmvBedyw3iz3Xp2aWQo7xthTV4chyBuZvqRM2v6sQRRt2YKdNog3ic11HkTUq7AbGV",
  "key10": "3LxV4xaUQ8MH2kHAbf6s9RGES1B1NjWG9NZi3Yda91ctkjS2gdWRT3XF37iSuXEExa6pqhGgaDKAL1UY7HGXenvc",
  "key11": "n24PcNXTtxLFpn7RQQjX2rnutENbPdq9o134pq86Ma6pqN4cEAhJ9J3Wr9HbWY7Gh5LW7L921YzMrSJbqDg6RtB",
  "key12": "59Pmg4ibjFLugg9yg4nS8HdHqtdUCmLZEBAyRTyYuNdfzqPwdgMSCFLuXLiB3hwFv6SPvDg7sNFrMPZw2zZk5mWR",
  "key13": "5zwWcA9mbN6Aonv5ZNFDQ151tbBEhkZicNkfiXJTZfu3wX5ZDt88pBAC6VChqCjho89H3vaWgevHJXHj7cqKrxV5",
  "key14": "4YKYFEzwioHo4sfYRn9NQT9xz3BpdyLv5qaoJuKUJdJKgaaDoVCUUwhiE543nbcHD5a5yBpafYDgL3ZSNEhb6Jjs",
  "key15": "2KxadX6MHzUXModYk1a9nf6cb4CyMLBxynZ5bAL1BVdHspMBci5LeUaJqSj1xi3voNMF56JKXXS7dN3xj8A3P2Qc",
  "key16": "zcCZ1K8BsBrK14vqPzvzWMKwr98zFsJCtJDeaD1ZHb5cwTKb51wWjUXoirt8Nzt19yipUf84Svs6pXFqUjb5tyu",
  "key17": "474khSREnHJipn5P2hNhgnRExRboug2Bu9BPhwQhFg8PPseLgYwRb9iQtsDuQuweJHwsADK6hA64KfE412iKexm7",
  "key18": "5wJVCv9L58FjkMWsoHAiz3TXinTnWBaQjyJRnSsY8gwdj5yJsN9oojFEBLbLdvrdgTrwKiaiFDezV1XYr3d7xvcN",
  "key19": "585eTmnf3TtokaTodWe76H4ES3Gye86Ru2hYDn8FFMmW5BGKJFsuG7Z4bUDatYdcocLVDU5hed7fgKeJS69nwXya",
  "key20": "3VxmaZPa4o9Vnq78Q1jwngW2VoHo29bJgjJ7BqWZ1YxmPVDcE1Wbs737WQP9XsvF5rTNL618sPjXZWUSGhuRMiYB",
  "key21": "58yG6gaqeP1Lq44bKWjbeUmYxS4X2b8gXeQJEBjwKvCdzMnfwZ1VNs9Za1YrAzNBvVHYwLkN47pp2QgkzG2iDT6y",
  "key22": "pLjy91ZM8MfzxSLucCrY9WVLYTp928B3MPmDCnhNuqf5XuQM7qwHTTNzPQpH3ukZDaFVR2qcPtmGwKrWKmQnmpk",
  "key23": "5sbra83fSkzkE2BqE7cBKPUrobvCVQanG4VwSPKDD4VLz8ocDgxHCA5mXXsqXAUngHwfeigEDZJYz3XpSEDNcKnm",
  "key24": "5r5Fw2fjNNxa1umBEKPD2TMa3z8jtaVXw8ECyG2N7mRgQxYg5yN6WZt6mzpDwNWrFJBwAcmf5kyHkpjwWcNpkSmt",
  "key25": "2muXWhQJw7zMb7M8zBFQGxoued5v5QFq4SQxAjun7eUe35eSoAMCeu4CDTfJx2Kx8f2TgDujVPD5MXXJtqrGRdjk",
  "key26": "2yFCm2cq2zT9G4QyvnUVTUfBChEGvAdMECQKhpsxdLBGfVNTFPPtveh9rvBbDC9HJap1ojs6R3bSK7YgJzNC8aKi",
  "key27": "4CPAvQRoiN1kiSN7VX3nDU5dwJcw5uJD64FuXhbzDnQYuKgnh88dsQAW2EhsAp6NxRdMRtVQCRBMqar8Z8DKRhFJ",
  "key28": "34rB8F9fEPfCQLBpX5vxfQF3Aku2u5WaCRoWkf9dHqTEGtPN6nRtieNFKWWKHRybhuXToXx2UYfZoSQ9RUrG6BjL",
  "key29": "oRiu8bRzs5xmACVrokbZHxUDAesh6xu2GjYiirMuQ5CsEucaKaHQs8w1KX9D9Yh25HRk54VEazVwmPzqVqEfVoa",
  "key30": "3Su3hfqYbCFfAfAMLFwNsCnMvoTpJoWtruT6ed6f9Vq1cAfD3L6ApyWKJ3HyE7a1gtTQKdoPjBcSnnRPBJC3f99C",
  "key31": "3z3ixdCzNFtbRm7eN3AukyeoN63dzhKGT9CRJzgEweh4vju6WmdUDgF5VTsedvANmTL9G41LSGD9iCQsvD8BwnQz",
  "key32": "3xDXaPzE3ZijTV8tM2zbLALKeLRK6CMMu5v6j8ovZitqpqbnM6HoanZWy8JvF7D8qNd9xcKH1HiRcDNDA4cMdzn8",
  "key33": "26EEjFV8mA4of13XfoTYX12CdjTPXwz7Z3gh4vgSkqqZtknATHBEYHcy2CHJ9RCC7uQTkedJG1NebsZnPYiboBgQ",
  "key34": "2vfyRfZPmTgV1ZnFHV8iLULV6qudE97MTRLDyPLSofXTHPKMb7SyAdq83wi1NzRaGshJi3V5rg8pTxC6A19dwsow",
  "key35": "5ZFDnZYxewKegatXhSgwN6BLYS2c5c7qva2kuFRyWzsaPeENqFp3yo6nYBsH6yHbJu2ZKJwBWsN3jub1fJJT8HxP",
  "key36": "3jLKpvseZ2ewzaUXdoR6gzxAoW3FqrUXjkUmMfzGfJkdU5y3RuMQnV2jfs8omfY5YNKtK6JL9J8zfRNjDkCbYpcV",
  "key37": "5EGuQQJZoyVhBq6AWyzYjNf2mwF1D8wNfdKe83zXYs9NGDyYpa52K6ArDepHgBKE6zVLXTxFQhuF8BJ51FPXsztg",
  "key38": "J8hdKFSCwonQoMWF2sPqqoZ54Q95Rry8gX8a9GxgqgBzuLZvkraqxjp54ncr1wgk4cTEa1TrsHGxZoVykD6yGuF",
  "key39": "5KwpquxqKYjYsbPnzK3EdgkQ1Se9YcVwLLZQ5U5T4hSvsPi8dB8c1oiSnACzdUi527NQjXPNjzkR1q8Ltus7HoBV",
  "key40": "3WSb1zYCCRoMkaPJCh9ncwBhwQnUDzccFE7kBdu68rqaZW62NffEXXiFYm6wXFSGtRPT3B2z1EKN7opg1JhFp3Wx",
  "key41": "4wLmp1qYbG5gowg6TEKUgb5UkncChNrVLcH3G5YT7HSngjYrRiJnNCNC4WK4QKSibMN1nhV9L17Ky1UE2qASPHHa",
  "key42": "4Suzyjt7b7C1bUDvRjwZ2hh9GgHCmE47dZrr9LkFzqL38Ye8npre1KHv9YQ4eHZLn4WQpF3jbZZ2k7CsuoDgzWqw",
  "key43": "5UL9cePHii95hvqKqBw4QA7VoHPM2idFozJ5AWoiAu6fiXGtvYNWP2hSdVJNtFVYkUJjjJmTgPVt8rQhw4M44dqe",
  "key44": "3RUTq11VAEVs43nD8Vg9wVjb6X8eeMhU4KaTKxbZRzZsjs3uFgCFiLGX5uGe7yhEgZBhwyyTUZ4dtBPWqNPE9GeV",
  "key45": "3y5DSqyVUEm982P6vcxAX2EMZ1w981aEHSv96ZXPm7fBnSa5GF5seAD88ur6eq1sqmUYpAheGRbpDHWd4V6TJDQf",
  "key46": "26HWhJnvKzCLeM5uSJHkiaQrbzvHr49d5oz4ojW6Gj8qpigiqNq4tVhtDUvjyWxQhE7nRGEaqxLiwvfYntsNpUqJ"
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
