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
    "ZBuLHQic75oxtHfNc66nDLDCmjJnFXokUYnE7hpFLMBHQM9pvC231arDRUnftDbxZRNnxZsjGay1g3dvK3tZoRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63v5YuacDhoswXkph3HbXtFtUABMgEWduLeJtxncjXxN7mDsSHFQrjoK5jdaFCMvQVsVMfoQ2yZqKzZZTGi7cper",
  "key1": "5bbVSQVSMnAYbKTmHJwHgx5BFPvgMFBoty9m9hsag2L5ozzM9cjnovFrvG3iVY5eLZGqWn9Ckw1fcJFVxvu868Zq",
  "key2": "3W9UytD4sbymM2eLPgDEkHxoa9fcPaPsrTyTXh2sAvhtYszokSDZgHphqobDumiEo8bNF5ttsY6s37QyBw93moZb",
  "key3": "3ZRu3yPp1FYi47DRBxj4ch4MtHTUKkZVfZTQmgRntjGFuawATPKdpGXBj72HnogWjPCzpjqbkvax4oPKmLoE8j8h",
  "key4": "4mUAccJoCj9d9fqxmdCYoaDCvTkQBMtBgAtvvzrmBVnriLuvGsskM6NXkeVH2yQmu7MxknPSrFcrwGPYfapkFEQd",
  "key5": "56wLKfmVU3YBiGmfFbBgbVK2vJ4Xo51KHskmCzWqSzG9uNADn3zd9ZbS72uXDFEvJfqNGpobquSGApC2gB46CK8q",
  "key6": "gurb9EA2WWWfYvpgnHbhReTHS9ks5KiJyQGHfpTnD4SgTzzLA7zeLVG3zMpHDqXf698FVtaoRPHft8WH5k85tvU",
  "key7": "3Pco8d4PatpN5CMEW52B86mA9AEKtFdpoEPqNVopf9TQ42MzcKWftCLUwJxQvhgi2bhu3psYdH6NQrSjThYmsgb",
  "key8": "9wvGe6mCT5PxZDH83iQzJcKvsp4dj1NmtgLscXfvvLCT1vpakEfiDKshz2mw22Wa5sEkrVLCUXcdxUzBUb5pTmD",
  "key9": "3m3pP1FaR2iHiGXa7PNfhfBd18vMgd1rcVa7F3XRGcHxHdB3HQZ4FNnYd7AAEWbtPwJ96oXsS7aK1vDKHxHWPXkX",
  "key10": "eFBLyDjig1KRzmamjSyw1g9cyrDUDotAHwCZSKnTHefyFHTCjRdQEQXaGGvkXiLSBd1oY6bWEBdYAYWTrV3uGz2",
  "key11": "LcZBF6jJFWNJmtbUrSR7riWp9jxn4DhaK8QM1DvW9C5GGpoMwhfNgDrBLUkmC6VHFimTNYkCYofTH7dqDvZuWBJ",
  "key12": "5pSqBDSxNW57PNBrKTkMYTUPk2MtgiTABntt5HNw9kF4Kuo12WANrdBPWYTvtxJQJbqjAumLAv4pRhDsKZ5MrBcR",
  "key13": "2mjMAYbvxQLqPgL9sgjbF46m8pR6RzkkZnpuW3ZaNN4rozgvCV7HL6iSEG4dWhe6UYfiEUgmXqCpu7WpVWQv46B1",
  "key14": "4xaeC6zZRS4QNLeMmZf4cBWf6Dr1CjaV71JormGuWLkFifNsVXJhCL4jSvcAjSR4zPWVqrVhx3p9KBgz3eKT3ZRH",
  "key15": "3bdRZWJcSRWaKDqiBxwFfouVTmPY7B6HELeJurLKbYGsqmHNBpUzb8cxiWzUGMLcgME4W3ophYmop2FrWTkV6bp4",
  "key16": "TwDTizkLxxTiRYW82G88ETQaXK92vWYGCz9pPAaXtFr1C1QU9VpHnttA2WhPhj43tBog6qhJe3tCEhag3ZoLVnQ",
  "key17": "54phtzxbY2DaJAAmyjaitTG4P9Q13JAYJFr3DKKSdmxcabt7XFDFEA1rLJTPKCYp7GakHch88U9uKtKabhCEugth",
  "key18": "St3TKUD1tvFhqocigEMiFT9nhzWgxrtrZ6GqhBoVbR9fMdo5iPz1e6XXD4ixgUPbW1xMmkNeccrdsWSvvNCCcD4",
  "key19": "rdr1AzXgtEiQdm6fwb5sJZKKPgJ4SzrL2h8vyZ5JKX56r2trhpUuGsLz16oPNGyiRkySawUaFmvLjM2Xx8NdPjD",
  "key20": "5wNmV4Y5aCM8AeE7fNs7KRmBaVz6h2TvHzAd9kmcpKFord95sjLtp9iKB8mS4xJtnvwh8BsLedZLMzW5BdzJDqZL",
  "key21": "39jHkrRywghqf8ZsSxkrXiVjJwHnyaEekPy2BsXP7Ahw5Jw1vitM9CBKssfvfsjbtDF5EwFVVPK2iVTDr8FrEVes",
  "key22": "5RcS9z2sDBJdRBokHmdekNDkq6ntmP5PCWAYY9ad4A6jGCC8KPC48MmvrPTVjbta4yAA4yzvtvFTJ31PrB1qy2bF",
  "key23": "EHkXy7f8JiSbvsRS6mGGxrobgyoZtfNCBSES2AeZU4VqAevY8SujFN7tiKrEFw5db3h55eHnu3iRcqaCjrvHraQ",
  "key24": "M2XieMRafakTCjgDFvggiiSnSXF9LBX8WxnBJ5S4rqUWs9Ha65iG5Qqx6jRJ6tW4jJqP7vdJAGiqDBU2q5HzuMr",
  "key25": "34CqmwDT9o3NZ3dNS6zpSRNGYm2aRMeB5JDkgsPLKR6xJ6AhZ9xohp9hFsjsSLLwXjAKWcLGadFe6SEWczKQrJhK",
  "key26": "21WPRQ2J7vRDxTrwhAL1sJrE3XfcdupPFcofYjXHenyyXXE4F3geVU6bkK3KVTgPuRgzG68sPn99x1Q97S7gRbfa",
  "key27": "3BsA7fQqZvJ6ooPundcLj8XG94JXSPArsczqJNL5L8NRn8hw55keREdrCZoay5gYLcN27ZxqL1kXekT5o73VGH7G",
  "key28": "4V36AsnpS9MpGxgPSrDDmnmJzVQxtJEfsACJUPgab14W3z84HRxUxwrSt3SU9vxryrabzkHaKKpUJFKHmGi9px3v",
  "key29": "2sQ5vUtXXcdSGkYRTdej8A84EXDj1SNiXJfPpKkA3yXH4wjPiDAVsccL7xfebTbFi5aE5Rf968upByu8DebRsJck",
  "key30": "65NDwzVH5H1wniiqYKcbLXcBMcF3gPzikE551MhihGSaenPenVGFFF6pHLGrgGWh69XK9ap7SQSNYX4Zx9fiAeNz",
  "key31": "4KCpDftnCyiKuVYPrrPsHTScev4dyAMUopKciRpitBevXmVMdhtHWXzWzKJ9h9wJ1F3nx7VcbsqCzpSxzuVaEtUt",
  "key32": "saapi6ssWG5VNrG5qgQe3Ln8aNA7YWemSP1CPriUopNMqXMpZT11ZF88bDbT5DsKvxdyBiqQ6CjJM1NkGw8X1HD",
  "key33": "2TcCBJUc9XtjWzoH4bPqc4QV46zUNuRdBC76TxoYVnJB3Uxo4MH6qDWYpqKHPUPhuTtavXihmQh97qEiPDZW8m4S",
  "key34": "4vxitQb7bmRdm3tdbQjDsxwTWeCL3ZZaAJUnadFKZ9cHc1XxL5DxYwXkTtdhrzrePX96yKtYMgaNNzs74K74PYvP",
  "key35": "61WD7TfaSdLudgW8DLsef3B9FQVPBtquSmDjXDQJir5nYwFGzoRUAtMNm7h8HjYfzx1XbLeDCWp2qKxuJxySoViR",
  "key36": "4H1e6X2tnQzDiAqAokoxczP2o41TWcc34SsCi8NMPRsEPCX2dAZKWnXVkVPq65KtntGNVD91otiBvyDVDU2bWLoZ",
  "key37": "126CdB465efp7eADoxdsrzYKvxAgHKnueq5CiyUG62RkHFaRS8ZmuvvfHyzBH2uqmghkSUGgcYneh4xn8NTAHAi3",
  "key38": "bUE9cGhtsFABx9YhW1FYdcUiaPqQG3SYgwn2j8h5EZuNWwsdMDdwAhQfERppSieMxXX9uvK9wr2VDcVexBKdshQ",
  "key39": "5ksRuqRK6H7KirG7S99unRjVjRwCGJJfncfcmTwvPhdaH7cA6Lz6EYVQnBCU5AJbXAYGHMpZe9Jy3c1anPU9WfvU"
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
