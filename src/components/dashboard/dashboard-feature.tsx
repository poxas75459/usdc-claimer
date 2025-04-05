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
    "2h9Zei99GR4B6r56CWDZTirYk6Gy3V9ADnWQWckojaQdg4RP48Q83JDWXsTjE9MrCzMVu4Wduo4VMxdC5tUcd6yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rHjX29vLCoqvdjv4ZpWt2hXjpNe86uPYFir19ZSqr2xAxJEa16MQ6kov6ytjYY5Pkr5i1BBQDjzfV3fEDgCxMZi",
  "key1": "4bQ5BzNAHzSrHNEZNsgCxWiKJpmKx5xNoCsq4sWtkjreDw1vNrW51MhHge5vucqhw1U25bPJy7PtBXE5kjJsm5pz",
  "key2": "5dDspirqWVj1oWchZhwCU5YuPkxZtgVq9pXDK2XFPb1kvheTsxfatNWRhfgCeBGLyRRrdWB4DFGzkXW3kd4bf92D",
  "key3": "4WKQPhrrM9ttm9UbL82rmUvoV77RVMBGaHjpbh4PbhF47BGnsj2EyuxB9L3pLc4ie5js1Z97oYt8tbVKxAqYZBpc",
  "key4": "3Jyhr9g61hmbHT3KNetSq1N92vU3AaA7LHMQAHA2XnfGSqWnNMXFrEPrHCFtGiPEtEUZZbTqhXVMvU8NAjnibyFi",
  "key5": "4RrXUu7hBZvUgGuWQeCecZUfnWda3VCh7wqQMvU4X5mBhu4uxf3tVkq4LZqvRTsXMNRyhifC3FGz12xPghB4WTvU",
  "key6": "3zP7HvohNLMTB2aMjHt8P2HcfYcwARY9nH9fFFLzAGQyb9211QE6qpBSTGPUUAU71CWEGk9vYojgs4SUhgLjixWU",
  "key7": "4S1oTtf6ghiAB2Mztf6WS3tDz4ftDnPFYU9CawXHuDdsZ4h6paEWf3dNEH5NYM6HmQoAcUigu1363sbVvfiC5Su7",
  "key8": "3FcrRzN65KShT6i5P79orc1u2hWFmWTHQ6WwHncqcCTDwUayZScRAWKhsMtePJmuusoz1sm3KToDrhMSM4bvxnEY",
  "key9": "ZY4dVRSn2UMrfMrGaM8MdzAWFctNwiRx821jproWeFwf5mTukMuotmvadfbBXrbXohzyJnd7JdWKj9QdQeLgEs5",
  "key10": "vPpiAByvz53ziLgtVWdp2GbXPiymti3qpRw8kNhMyayUY5WBKv64NwckZdFjtwdaTM7Lh6PbEAknxNYvWE1eCCx",
  "key11": "5bs33Z9fkwBhyQwK3MQCEMBBDDxrZRytLTHiUNmHU5iAFcwRpuzUCXTnHbA1DmrxMXcv6FJk4CSwmjNCRDrMs844",
  "key12": "51zS8cFSHxdAChGUJMU46rkr1LJeMZC99LyvUpL8cgoaejp2UZGQc5YPoc6vJ4fgC8NEyPE3fgkbQJN2dHSwHjue",
  "key13": "385wwUFze7svA3f9HhSFxrbZq9QmiSCzh6f7HQL6sNm871H7CFBtmS4HVFWL8VzVs7GtvYVBThBBm2DrtQ41NaBB",
  "key14": "58LUcHHozMtxrHMCBMRCBBrnc293GLKRDm3zf6wcBigXAVx7QXmxKzMM76CNtGbTtVzNV7yPBjecu827BBzkZshy",
  "key15": "3VYAewWixbYh6syjD8CHmLpRxaeaV8DtByYc3FpPdgUC6HTq1egjf7XymqbjNPw6TPmA3oQ9NKDSWDxwMaFfT9nn",
  "key16": "32kG9YxLA2UEJKx1Jo6uhiJ2qVjJXMYmPUyQjaBg4hYBrvaWQYWZEUTKoqzocwZEz5gSHVnSsmx3iu3dYMzYe2TJ",
  "key17": "5EFokYhT89QzXY56E7FxNdyyrEYBW21yxvX6ue4TQH8bkagPN5F9fazrv43QMCUYy6ZwoqhnXSZUFy47sjtWjVRa",
  "key18": "4N7AkeUj5RzDPbTKaN9jp67DypY9Dhi9kTVpXCTbeq5s24tp1WmTXE5fBESB2ErWJjtk917TMDCh7jwE95GMy7xC",
  "key19": "4AAS3gesC7DFZzunPsCKDcSYsNVM3cDp1v4PPAhL5xn4Lxg2QFvtq3qUTcTXWU4PTDwRjA58a5NVV5utoxMUK8iq",
  "key20": "Cp8PnatzV2yoVZL3Bwkst3j7jG7sVDvAnNbmKo4ug8xT8Ecmv8yroe8haSzdxYgD4gWwXaeBs9wJ6NJeDAzJ79S",
  "key21": "EoTVz5b97hx8gVXyQghUvf2urP6oMxrGsA4Bbki211EokbVkoxHVMWJFDZiT39z8QB8P9kLTSGpTMbR7MPsL6MZ",
  "key22": "2RJGT3aGijyGkxeKBEPvt6fHweckGKPih7rKdRBFf1rPHMLqHV3iJu9vNvDE5Po3Urs5vCEgi6FNApa757UV1oXa",
  "key23": "2vnwfj2qYL6Kbp5znttuUVhimcDtJeJ2Yqpf7u11UBeBPXuLyC2dLuLM36NuhWvqS2dXXCjqqAjrYQjxfQd7vgWW",
  "key24": "5KRgDE3EMzVT3GGPLuaucj7igc7w2QawW1PgzjysgV2aAVue2nLdMTucsACbJ13FVpFiuT5DSrbUcMtUCA2u91Du",
  "key25": "3MZpXaD85ZyHMeqZZ7dYe2ZyUBxK4YUa3nNhrZSfhzNYXB1N3Q7MLXTRHZh4LaMA6tJsdXLsRc2BGxtg2AmhSbiz",
  "key26": "2t2CFseGLNMdYFXSZ9YjYUwNgxDmxHWWrWMShdoJSjyB74kC1bxkKHsrts3E5cLpy57N1R1gYHwQEpso8qSDTZg3",
  "key27": "4bXedg7gkzvAysFWhZVG1sb52D4bw5cuHZx9rq4VxeRVR8Krmqq6CGzoyyRZkXm5yapFdRiMXKbTiZTBn4Q5yJNT",
  "key28": "2GjsiVULWX27zV2WQyrcAvvMT5U6icJRwANJfJiTag6gf3ThTNGqY4rWFGkyvgXtTaPdeLJevMmyGXRNkiX94bBu",
  "key29": "4y7iUJVyKQGiw6JitQmCCQ1ChodMVaHBJf48ceqnmQgGsFJqPizD1Lfk8TXKhVmM3LDkuXtzsrWoJgE1RUTYAoaU",
  "key30": "2cCq2212grb6ahDeakMMtJX52mJ2d2xoFDE9g5r5tTscanjFXyqt29wyifoMqdEVNjfGR9wUZYF51eJpxVf8SveG",
  "key31": "3grWdZJHSQ97nHy4WGrfPqGkczZi63cYaQrGtjzcN1x8spRR9JUhtxXv1znRWDZEStVqjPo6VcaVjFJ3LJL7xEz9",
  "key32": "3ugQfSx3N9FY7pmHmCurBoxj3sEPtWG7eZ8xcMALBFSRMgj7sobKwVPxcQ4vkjz2RcdLzvWGnQb5tGdKGpZmXehG",
  "key33": "61XTePe4mDmf7kReNgnkSXbxd13o6hhjgZHs9in2iJxMY97KDsMVQUmaMAcyLJkYuMUaRJviNNNGeqCKbjQY9aG1",
  "key34": "4gaiGFQP4MFTokmB27rkpWTzNFpiGbZn7si9npEtMHFcPUxZ3Hj1t2M7YfKqCHi2UfXJ3FeSAKsKAf3bF8DtFr4S",
  "key35": "4QHEeR7QcqqkD9BbuxmYF8k8KdrpbeYCqJ1F8TW42eqRg9SnMfGsepHzYvgpYeMrLNanE9wWFfzqmMuTxcrrcHDE",
  "key36": "2WMkcbuqkaV2suFjubGDvYJDXVPYaUNiaYmX3k6vcxq5iSDGd68rpNHXjPW5tnkbx8AA8C14jeUEMzkumHwJNkiP",
  "key37": "pzzcsEoJd3LdZKg1sCcuZ1o3BMohfyX2Mr8Vt4zgmgAXfRBUu3BTKFiK99yDKU7HCWyfjCQVPm6pSNdTQLbJuSf",
  "key38": "261nTRPrdU9UrGXfqjdqCaUdsWqCuZx8t3J4C3zLYbGBW4x6Dpo5L7GZDXXiR6TQm4Ccw2vvTZSLR3SqjdLonMeo",
  "key39": "2qV6qqJq7d1qhq6x8uHFWZnbDXCPyg7Z99X4C2Zaa7qDhGx5pHz1wNKWCDaggPNC4cp94DZDSqvqcyZeDGwSkbu9",
  "key40": "4dAdEnMuq355JFMjjZJDPYNYPytcngeVUqPuVEgpvGTCkHBXSz3yytFZkeSxkfT9861ps5uGgvMYy5gjx7yeymEa",
  "key41": "nKWdB8GE6a4n7GsmoZSAshTGWtxTKDGFVEmrDiTEHXBN6xJn2unfnNiTkZbQh7g6yvkHvxgKF3zJTFK2pStTasB",
  "key42": "4ptLSP9ciNePgRy5KLRhCyYAHdEhEetuJwXQj1J5kqNe9uDevtBHmNidDDVwXAR4aTFoy2SPs3rhswDyGz48N2LH",
  "key43": "2KYgnBd7UW2jKoJ4LYxDpB8QmvQv7G7Vti8kLhqBRj6vhGD37wBmEMnbUpAoW7buhHZuciNYEzpV7uBUp5gJ94io",
  "key44": "4EUWCesy7H2BymxXVauU9LitSz6cMLXtj3CxpLYgJpueYP3zXXsLDFv2Z385rd26h772Y7zgnmoysb6K3xouJkit",
  "key45": "2Tt9kp6DmDGwurBf9NGB7doZCDrszRwX1j751Qs8oqKkQAiBLRMzjCrrpueGGbGqjLdTDRo1jPTEvFQ7BWj77bPu",
  "key46": "2r8cusGatA8GVMrWzT3ESXHA3k5NKqxLEYim1bnRk4n5sAyNz7AhwdURjWMtEi3ynytC26gSmsSYn8xoMtnvmFWi",
  "key47": "61THgrf4atrkJR1rp5wyVTjFtDP6VmQ1EXN5DY6ZFAA8HNZA3NFkmi3CMHyuefraccM5PQhzp5daTexFoY7mzox1"
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
