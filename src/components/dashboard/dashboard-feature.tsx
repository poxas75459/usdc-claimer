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
    "3Y5KSDkKyLZMPQSmgN8rvskmpYmN8jijeQQKmcMbmNd5iBW2s2txK2riLW2nFMGD64rfToXy3aRBakYnSHw8o8Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VZbMezTcBrzrioX9y6GjJWUEZ3zTWShYrNLGh19ZuQPjV6S97xZeX5uUagzcfysXE6sSyzLErRqJQWYCV3zgSUm",
  "key1": "4wNhmUnddXZprD3gvfYVhEoCwqUbTbhz8qPeKFjsjnmid9QoSjWBMaSrTFCEcWxjCsJBB97fcQ5zqDBKhydYeqkz",
  "key2": "4f74buFx5xRos54kYdiWsunQrSHp9dviuqFe9DkSXx42R7h8a57ftBWmYEsKBUjnHnZo4oq7ZwWyg27fqukizVsr",
  "key3": "2ReB3ENhMRJ7266SqgX1gb9kfYHu18eZnrhsexcayFcnuk5ghz982SwPRqXYSp8HTy51rFNYnDyaYyraPUKhgFZ1",
  "key4": "4iyZzPXKAuhbgKLfF1Q1yH2RzQsyo4L5p7xog5toKsJyspj8HzNYj4WtFP3YZmAm98wUaHxthiy9kpxEVcm6fXws",
  "key5": "367zU8UXSkDjW5vrKUSSCNdqzfUYBaRa7hmM4WibDENvB1QNWaqMWRoDBTqwUkbNs8s3jo4geQy8LrLAntxKwp9D",
  "key6": "5K8asc5mvfuuMHBQvy36tomNbM2UMgkzoUV1EqHFrymKEei5skQoLFDxEitkdiJJZNeavUmzJBbQRfDRNMT25SUo",
  "key7": "2Tbkdh22i7E4KFYzkJTkMPauFC4mvas3ER1WnfmPQcT8EQVAoFLbSLHSZsmEoe7AJz7C1i1hmBfmwXF69HWgtfSY",
  "key8": "4k2SVPqRdshBBt9MBfxRLmFHubKofn3e43RqXn6fgQMYV9pPrrnBVb1DiqNaUNpkwtS1YniyBepNiUfqmmydbWFH",
  "key9": "3RcLgmZBhZdZTTYy3EuSBiKDbiY4Jy2gX2UWj9mZcTdRJuyzPCXhpn9sirD3FuERtC9H7BADwsLA3zCmzBUu4941",
  "key10": "5QMmE7CzP9wUCMhje2pa23NtxqpVnzUdD5Qx6fqUfQ9kGnRbEqju8uvRVdZ1QLvvNxuUAiGvk623f59Q3HzzSPbp",
  "key11": "2nf1pYA4q5F74R2mMVoPaXxXoFTpRqJWiwHud9PcVFkDWHWCbVkvGpb39TGwh31qUUneXoFuGULC1KV5MoxVm3ZT",
  "key12": "4UJKxT2rfsS14wSJxDXqUQYgr1ru9f1jN3G2KM5cYQcAkKihPj4tMt1HeGm8BYtr65wCrttKPWAnmwySiNG3umsG",
  "key13": "5zRpKnP3d2oQFG28VpScNGLfrqjiRLsuRyMmLJeGysCgcpydSoMMzEjWFRYPPLeHcqzdeiaevhqmoFSEdibNMT3G",
  "key14": "4t33pC62UxaQmhhnTRTJ3DXXQNZKrBc9ziY9XYydUvvnKsY3YG2aMBRVLqSRQqa8e5Qb9t8AqMGLmf1SoLsD3VuH",
  "key15": "91Fd2qyn1dQKpnWh2ZmHwbvKiFbZKY22R5GxL9XJV5aCRVcBeUwd5sJiBv8cLhEbfNqHowBbzxsmp6ssH2LmXq3",
  "key16": "5rSVSynznhKkSYbqx7Y68wH3sVNA8aK75TWWzUvx8xWFCeJCjZuFQNP3WxZfkSNduUUBbqn2NaLnsMEjVQQn6Gpk",
  "key17": "4qERqhMngEnPJ5PqAuK11YKAJmJrtKA1MQwnLoJB37mUv8j4tpWLo1qN26NX1TRXZndLa3AiVX3dnN1KxgpqHSB5",
  "key18": "5K6MAm4shHxVNcqwgge5PqyEQDPYABk5t4MHeH66tWi1No9ppX3QtFvxxDbQqVx6ADmn2NFNb4TxasQyRmDKGecg",
  "key19": "2gQd6F8JVbs13xoFNkVgRxvVTQhYfoXJRRE9xdi7tifUhX4sx4tQsqKKfKc5urWUhK8xWMtdUtttkJFg9TFiBFDm",
  "key20": "oHhY3exah6KfXAijQnA8m9U8mH6dDdZUpujWWuVcUM5gfCoMDRTeHid58pcCyb1jVM3rnYLgvmfHLmmPKSvVXsE",
  "key21": "sKefPvLUTKh2ySPQb376eEoLHyzvtPRxD86LzC1wmy28BQ95hvdbNwRXtNxRqB28UNSKaZjnBD9Gr25jGMfqwFx",
  "key22": "gx82vVx4VTMtyhSgtnaxDpbPmBLFpMTA8ermv2gaD2UEHqDQvJ5f5wy3Nmmfe9a9ZPXwiLFFk43WTYEBMH3FDNf",
  "key23": "3pEUh6Qz6ArLtVoGqQcgJ1JbgnuugSFJ1u5trQXqe7E7cQmXX7ZGM637bMwC2q8STzC6xfpm9KfSBWRwpsv9DQFh",
  "key24": "2pEjxN72bsxWhytWZBVh6G3zhJDg666CVhyWdd7BuftL4hRQAZvXSb3wCWrB8vFBY7WGfV4Wxo7iBCmUnKew8Ujp",
  "key25": "335Pc28WJAUShMMfRkrLZ3KmBZm1EUYPLar5z7KSWf7QR8QLFjk8Ywb3NTXMn4myfJFr5sxWNnhZopqa8nz8NkTP",
  "key26": "5xxKnPu6wqh3tS1vfWwcfGsWgfeHVntEXqCuZgJozQ31WqoXDL755g7uFGiczTkJR9gsEo44JZtHnu3fYKxQLJnR",
  "key27": "5GT8dcwYN7sZUqjpxwXiRWvA3ySCtpfFCnq1yrABJ4yUqBucFG3CyPUVTiHSsHrCTAXQnTJ8dJjd671av2WKrovb",
  "key28": "32eaReHuUXqvDYF3pJf8MK3gcVHiw6axgq5sPVKKCu9MWFJeYSdZQ9ePVyEZXdhCU42ED2UZ6STFauzPQqijfJNN",
  "key29": "633MeTjqcBhWn4EeiL5ydMiY7zGenBLfjZyas8sZhKtrurpPm2uczzLCZxkzhUZCPsuTuZ5113cnq2Z6inYXjZ7Q",
  "key30": "33m3wJSzXCrumfYBgXJLHQPKzzP8PsvQkTgPPK3gBatpUjvGRqF2YYGhQ94A1VBJ3GeTHcKnEbTo39pvNLxa7ENU",
  "key31": "L92QsJYPcN3HUvirkXERaCZYWgWkLv1kxuXRY5q6ek47eXuxn3rxipSJySbjtccf9qzC7rjTiMM4yNQqXBoDoE1",
  "key32": "2HjLi8kf7wRdhjc4sDDJ9hWqZrF2SwGn1d888iStpeBYMSypaWkpPM48GZZt7YpLk5KfiwpQv6fKjioR35NCoJZF",
  "key33": "4m1jYvN4P9r7K7GpXjchCjfSETar4WiVA33TxjRDWyW16wt2JFHM7kz1DerfDx6xnkP2pajE6cEHVa8ZXZDMMGyS",
  "key34": "382Ww4crWHGxinmLBmbQCk5kvAJHoiqpqWK6ro3xghdxocfat2iiKBTbZ9xQFb5JqyNdBbZa6ngByGK466R4Uv4",
  "key35": "3rkD8N29fgAJegPCVfTaFFhnkUSVu9Zv42opYXXTZMfwFygxaHXcWxLPbXd5AnLT5YueuiftxB4PLqD97BFhGSwk",
  "key36": "MAbVDdaDLNRqv9a3q9mi9BtLDcfM8UwYTsK3B5R6QDdK62MqGKaKtYbWBCMd8FxgLTmD5cSDkTrvF6JGaEecvvW",
  "key37": "3xmmhynmsPppk9GDAPCso47grznvw7en2uZuNy8wG1sMZVnvJFzcTYkY9b62rgz4wdg2YSE6jMx7GxUYjpv5Ff2G",
  "key38": "41zWY5RdNNEyEssz2EqbLhCeG8tZVbhKCZB8u3DkMFUvAomjGtqRiovm2FszreLwb7kfdkCwbLBgvwgW6RQ63r8q",
  "key39": "bLUeTES6nCLcaPZaM1iJbd1GpdNCfqvAnRmPSQ5K3dKZxb53GYZDf2YvrUciQepYFW7NCkfKf1P2tSXo9Bwg3ZX",
  "key40": "AEp9ACE1DV9zAmA5BMbowiADL8x8XVcnRrwiQYEyB4ZypTffaqCvj6X8p3rHrSEZVmc4W6jnhpAoJ6kyft4vHuk",
  "key41": "54jGKHYexASfHVhV4Z3jcZrXbbcRUaWcdmpkWoV8Z8f1EJRXCWhAhukM9tHSL8ifZFf6JaGaoz6gyoD2oxsHrUkp",
  "key42": "4ffFh9bE97ih9JUi7BycmaGkYGiL7MDnxqXb5ZLGfAFqE59qqiAYEiV96H6JCBFHFXaYpv8gq3JDtREwJDqrvhkA",
  "key43": "3Mpuyux63Av5ExHjSChWdEQQdrA5sCooe7NC6Cvoe47oMWwVTUdwiNmf6xCve4phSRPDkQvTgWH4pDhEWDS1n9LQ",
  "key44": "35hXDEC5NDjh2W8KKVSyc8uo7s9P7f7zraptvHeyitjV6TPVib9F9NNUyQd5G3UVbSjxmfYuRNdV1tD42xCjqaaH",
  "key45": "sFG1TdD68QfTpGewRm9sdtZfkLyeJnjvPRHW84583hqVkhhjUDf7pHzFTBgSLXJuY5YkfKJ4ro1kfo8Pmh8QPYd",
  "key46": "4wjNXPMiuiWnWUQrStRaw6pgwi5KFPji2PwjjpHJ6f6VTFgYkjK5tTeuuDDpWLjeWxCx95p7uvrY9QTVRM3QNDS4",
  "key47": "cWnmakX8vhUj4TeGyUTiG4GsbqS2vsdNiDSngm2EHkrbsnamJArWjEMP24sYM2j869tKJgcHuYo97av2LZ5wEgT"
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
