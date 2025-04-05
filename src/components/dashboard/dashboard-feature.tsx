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
    "2rwYFyZanpFfYZw2WxPzE3b4aT38Cdz7tP3zxnj8DyJUDY4TXm8GFjnS7sptPazsCdB9x5s42wy88m67sZLWM47o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41XrbMLZnC9oTjyoym941B8NWhSYKLNKVN2q6YHBP2Zpws99VDKAC9HsVvNUfuR5AZeBGETLLqXDuKmB5rnYpixb",
  "key1": "SRRfrDiqPWDxMXckta1SPMkRek4PR7cjCh2WTG4qkRynaCeBheRAJn8GjfM2Y5DFjNMAPkrpQtXfEy1BR2uinau",
  "key2": "4pDhVdzqydyc7yW1uQymR6bwWAYBtacm76kmNg7VPCqnsGMdEjruar1qwhAPt211hJ45jMt8kyvN1rfAd3ApwDiU",
  "key3": "5B4Smmpd1stRuvSiQ71qkHgc9yM2mC7HwQZVoeAFGDmUZi3RornYQK5u7xnBPVqUfzFdLHAV4sHiCPWYuqQPL8Wr",
  "key4": "3yY1uHmCKMZATv5BRbsXE6tYYsLABWRWKheWy5AZ2hQeHvphWWhfxXJRbMSznEo1jBQiEKbu9odn8nB4BdYry5PA",
  "key5": "433gBnq4cUDWyCv5k6CSUbPnJYHpLiTrgYiocNEDngJCH3FapsYzypka9QsoFEjkK1p389N4fbA9jjqCafDbtfZW",
  "key6": "3CQBaRP3pUwM23qcs6kW9StuMrzNLBMGg7Aira2eq8Gwc3mgcTNuziAb17PycYFdHHgH3MHVpLpGWtjbjCxfn4PM",
  "key7": "LPV8cH5u7UanGcZKLcLLMatK59R8sqHXe22E7m2yPSmeXJuGBjnAFYiRNp7heYJE5jo5jZ3UGB9WZteFHFueADs",
  "key8": "3TFwZ6WaRsC5j9bMtAtxiwiiTSuGks1RHcbAj7AKUSQi82J5HEAF2CN981uB3Sh5dinYqydasgvW791RE17J3sEn",
  "key9": "45fvZh7Y7VhHGsbxZVt6T6gt6xcVYgeRL4HutCaMQfb2oEAyucUiWE1LfWuygfpZQvVjSdyTZqEBpBYScJXJYddX",
  "key10": "4eUxf3RsvS2wni3sQxeDsk5jTKmAnzKP72X8vDjGNVgezyEgakfwMrMr5sfetPjdBAcG62PnrspUx4quhh3RSTyE",
  "key11": "4LYazE59SzbMaKFLYPxTMSuVfd3XH8qAr7LV2MDDGHnRRrmQ5ibSt7snFaPCTNJB2XEetKmeNmkzZSRcJWtaRCv6",
  "key12": "Lx76ocVp1DtPPdKKMEhtPV43g27pG6bdoiWJenBUUtvJLDXHaVsihhp2J7k12pJqq12PwkvxDij4CfLU64NYFXs",
  "key13": "2jx9aK8riTQ753pm7czePs7vtRnkK86ei2dRZ3j62yfVUqwM5y3vPbpc9tjNctDDGDc4a9rB64ZoPCtVSg6jDiyx",
  "key14": "4xYvKuexirVG8eBs9CooWyRNN2o45p8GLDdEfHxKtmgu7FmCN2sbNon5amsHq9jWNZNxU3XKYraennnUWkdw18F1",
  "key15": "BBugW6cMsmey6a2nyRGv5r9bSjpdgYdGMvA3RFe1R1k8sBDH82vmskYQb2HPSLKB6gDmHwnP7d7PPL2vTSNZa7V",
  "key16": "4ujaqTQMV7WL1W8FwrwsiUseRmBkHEcn22gw8LEE76JLFTe7QP4eDcfkkoVNhUrs9LGZk6TDn4rzkQKUSQMfff71",
  "key17": "Ca1zmNicT88kv1fP7mrSRetCkG9Z3yXdpbbifFXFUhRc6ujiYBq3c4AFeCrCW3QeC9Y8U7yGigQEHgNgcVKXHGj",
  "key18": "43VZ12yJmpTHFyLihyHWrNbUuZHKpLfBDzYujY7d8MSvWaUdgz2DK7YMuedkqFnCRKSiC3Atm73cXyByhBYVk7sJ",
  "key19": "T8ZuQjaan1E8J8AE3AnLFg6WYwZ3ijUurdHzMtxgi7KcyE1CW23Bvb6chgH3cL28wvgr4kGsvJS8tavd1SKspaN",
  "key20": "2RSo21aHLcPVos7Ln7cpL4wLpmrHeUVjvQHGPFumn5BmoP2YSCBaonMyYJdctRhGxPhTrHEb2GJtCDBe26Phc66N",
  "key21": "5SSgnmGeGLYrjudzKuG6vzQi9X3P9cbZjAwQHvqfUAo4FQpaMUM47j6Wrmokdz4Bim9ueWjwYpd1H9kuHgcVmq2h",
  "key22": "2fQmpZbqDgY4taLt7vNVcRrHkzvKwNLQev5wvgznVjqq3TkCRvDZWsVraamjGZPuWpFVsqftWFnLzuF9upp69kng",
  "key23": "65XdyywhHQ78EB27tnhPU1fmEJvGWGRJkEc9cAfbReCqfVJ4rrjFi15YNBTPdt746iC7MuZCvDM4kTzn9AMcd1d7",
  "key24": "2TnbJMjbS2Fy55RT9ouiEmZKEtXfr7JtE5yMboEU9U1hRGKMajGhwoKeFgr4NNhwk5xSasmn25qjYKi2X86snEpF",
  "key25": "3sr9sj5pf1wAHRgWhtbqRwnCKjrGtVPo6odRZvNunDtYZoGUGsd7VZnEkRqEinHonR6tCA47wJ91qGKuTEKvf5uN",
  "key26": "U8hfN4eY3MadtfpizXME9yq1NmTQbzR9iCR6RYFLwCFp3aiasJiypd9QSqHNNaPDFsa2YMNx4DTawmzYuj4yp1e",
  "key27": "4nFU4279t7m9J4e4FqwNB22eS5FZsvbWoKzXt53qvahLmxrfDzfE2CqmmtroKq8tBYLxo8BzSyeXgPWu33DgR5KM",
  "key28": "57cJA47bAvCGebo8ATjymU8twnAtnV49ctMLeMcCFuxzJVgc2gtvCfztW8Dzxzj9v9QfSCBXkUjAtzdAtN6QWZcb",
  "key29": "2AKuAj849eZYFNqUgP7GuEYdf5q1b2uSe5xPSdSaYzrKkMpt4M3CBS3Gf9sL44atvcUXAYZ3PY1YGQ7VvsB9mi8h",
  "key30": "5aasZdncXe8BfH49FMHz769XAjD7vd4twE4h3ocjn3cmzkuoSu1JpYGH7vdKVE9DAjST9DyZeY3hbSv4zjfFoCrR",
  "key31": "4CQcZyLqZrm1A5ALDzLwpcB56WjW2gAHXPTHn9uQc7kEnKjB1hXKw5N9uhL1PkoAZShCLSN8LRuneM1xcMyPKJXi",
  "key32": "GDS2Xn9Lv1n9QNQwpPTi8qpxBFWeEqBJwiBhdyS4iNihs9EeuKdaYQTtDiNk3bWHg8XDV88iV9eHuSV5dBxUb7q",
  "key33": "3D2v1RLtsZZBUYnFv8E34fPnZ5Y14ibSiagxnnfrGyte1h1ajd9hYEBPrGRpG2orB2YRKw7RFg4MU9serpJyAKUx",
  "key34": "4kbh5XRjs1c2yAur43XX6xYczSu61pqKW19wgUwymooeuDmMieFddg2PxxBsvMPcwjwixUty36yBDQUtBefbSsq4",
  "key35": "4yVUJzA43G4Sgji2D4MZ3AuUYDWDzcK3FF7jMQHFm4STJM4tXBmsQStAnEBv2kLqRxfV5CqStWkFqDfxfbJBUWDx",
  "key36": "ZiH68d2hw6TkmUEuc4u4tjYQwp6A3DUS78YhPQFZ7qbFs1u7zp35vwHDgWTwan8Krz6gJo8dt814WJsLEURYSNM",
  "key37": "3ZNZo8hf5RRAWhfrdiUQufHTsj1Ebt8Z9Eo8ZzjEJn8DC2F3UU6e1wgf6BoHLKcCuii9bvY47qvNnMhsCGCFS99S",
  "key38": "2MLK1U5VF7GyEwKwCGRFaY1GoXFfxocjt3yJk3dYrpHAWLx9vw7bMHtsAMJJWUZTeNz5UbsAcgiD97hC8EMxhvES",
  "key39": "3gYSd7LTQEzGEJ53zzRoCemN55QTu7Wc8pkbNZkHhY35bDL5JmamWnyRUnympKTZxHw2QEukebh3QsaaSGaSuzmC",
  "key40": "z8SmFVN71wHErfEw99L32BqwCs8nz7PkbRaSZbCLRJw6Dg97xpQEY8x93VhWLKkbjDDYWBjrU2oKa24Dq4NwH7o",
  "key41": "4rW66Ykb5mm4EUNZMikSHcy9DkzNzBRpxNn9Rn2LWrRkm6UKbcUTFL3BPAUgcBsgsCuyZmnKe6F1Hd7MTCSKeA2s",
  "key42": "3H66wh5a5cu1K3nugSwBgUxQ6R9dMtyHSZErf75n2yPcgTHtwvnfdL3zVKic7DmSC2WKpM12b7JPWPS1nzJeoX9P",
  "key43": "22i7K47Y7buPmqvUNjM26ab74tANT1EvG21dmLtWMcx687sDDjnuUd8uTYSNhJLenysLBf21AWS4fC6feMLZaCCH",
  "key44": "58Prd67JEoyALZoCHR4dMeBkb48QGsdaCGXbaupFhvg69iZpHHDgVN5QC4pJnNwTuoeJ1zXx2EDqEchud33yxfUk",
  "key45": "9e1qDh32o7jAsvTf32BegMXqfo9xiy1RNhuksNs6qmNcmE6Gr9Vf6j1iUBs4rZ4AZ5eYFgEph8esrxYrySEhiV7",
  "key46": "4TkD7CQLH5SZJhwc2DjaR5Nx1JrDY5F3r5Bn6evKCUBHsCo9ntq5r8NiKMZ6rz4TCYPsYVgoCEgKBVXDTKW86FW",
  "key47": "4hgxrKRgxpPzhTKBUcr6rMabjrrG7D8TZnNLZyjHTswN6FfLCFuBtEiWERd1B937NvrpRAyBMbcZ7EhQNcn1jza1",
  "key48": "2TbtnF5KKNQbgHRDKdVJp6DNFQwNgXxVRP8LujC3TFk99kAvmXJHLTFDkG35afuCqkYeVf98UhzwMcQXWDXE2G68"
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
