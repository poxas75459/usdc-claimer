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
    "44CF8wLwfr59UVxQ59nvZv7iQcWizmTzRYBCSpJ44iXDXmLWwui4Lsh9LB5Gn65HM2CPnVo9ZftLZLDKZ6dpoyuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FVVbQdGMb55hDwUiZ4EJdxUf6WHqBbrbpoPTd9Z9WnRMGUoMEpxGm2d224QyinTwGXW5VymD9ZL1KsKw55remVL",
  "key1": "UapxGzm2UWoLw4H1FiwGnyfUfehvKGJcMWycTSvbJ7RV5HK9R87XX8NEKUVY1sqkyDkewNeNRKc8o8eCzeDGkiw",
  "key2": "SUoyL8h8MckxDYAYmJ7h8XPNFnWxxJRcosCyvSk14Nzacrspu5v4XcmnQEUqSM2Mxw2RfTCexVfX9XUrsSVmUy5",
  "key3": "5CBYxCrcd2kMyQ4JFwoVmDksYT8F3zKTZvnAvtowH9rzP6iV2A33WhzM8Xs7Bc27eWqLGGM3WBEE75M7ViYq9aX",
  "key4": "T7GPBR3FHa44kr4R9KjPEPSFtnp8EgJw8cmZh9GkHnr2b8Mx6T5stp7EQvvWRt6uySSCFMU6f4RgDDsLyg4GDGC",
  "key5": "3rUm8MBqLUgHcLhAdu1zsme8XuRwpxLXKyxB2Ya1iveDMYCXquxf4GCS5v5sQLCcQMLFQvw9uieAcWNnVZhdkMVB",
  "key6": "3XD3U5DTTJEDDjJry5ZTKhLUu89tNWPWaVEmGJGR1JkogztuqxTgSXPdyEbP3N84QLBKKtfJMgZqt6e1jJTwzhoj",
  "key7": "3WLDFdzrDMmCV4WkfLYmcjq7HqiBkQEvBySar6Car4vBWBSCNgcxdrJNVxwbGicXVYpopkbZPUje7tfKywG6P9zo",
  "key8": "3qYJdxswgcRPW9SmWRASqUMbg5fNsc1Kv3Ym9yRhdrFGp2jDf1FfY5z7Xtr6xEBEP3jAreNAeVZmU9BCpiv8rBVB",
  "key9": "2kuzd1quHbbhvSX8RJmNMzZPaMC86XU6gH78CtfrDfiCWX1XgNHD4BDfhJvDfWNRE6ZwHWgjHmpH3Xb752KCp7M4",
  "key10": "2zR9PAfHYV6X56gQq4G3ujCxREEWwkd6Weu3HJVVsHqfvaokCeiPhLBiM8Ke1LTtew4MrSzw79Exshxajso7Va5j",
  "key11": "3zHA8JBcccJXPMtfwuatLMCJKRePuS9RUTENDNivoLAGr7VxohYTvWds1SWgHrmRhVNmh1mdk4DSrP61aeofDGgh",
  "key12": "5tVD9dgnLZyMdNxXaxKZbrKKafehFrGeypne6qPmpf2569TNwawbQC4bCrSEC4o9QTepSMETNoAE1o6Q7wScpVoj",
  "key13": "DdY8whRAjEi3H33L2M7gXui6exGwWbpq9U3j7KhTJHLaSHsSqEEFyjPoNAS9JU28VbyL5cTAtWMaMbcdpBe66ac",
  "key14": "AVUuNXhDLWGJ4BhxPRj2sVdfBHFcVC3gAft2gZoePQnY2T6LzbFMRYBcAHeynNShudK8jADhSWje68FVtYjWFg4",
  "key15": "KN3dvow1YdTZfSXgyFvEmGYGircvuD2FK383DcJiMssMoYhtg4KsXvBDYksn8ugvdpotdC4PXkZy9CmGKDeVz6G",
  "key16": "473ZAfUyeUQQWhUNJCByQgTYX5mo1J3ybrdHbWW2b24k4RMAPz4KTPQEnm8dMAZmRm2nzz9rSQbcBR14GqYog7Yz",
  "key17": "aiA39PLNpfp9YfwqnzrMVYxzZFMGRupn61hJxSk4n1SYbn5vebL4k261QyXwHkiSkeRz8H5ZvxS1iU5WB3f9sLF",
  "key18": "3xerhFeSGGkQpytiWtN5GjWH7rBLeT9NuH2mxzepS4VxuRbBMqKGRMwbz8VhAd9x5j42Q9cKzo3K61GuyuY7GNZJ",
  "key19": "4C46tMjPJ2LDtK1FkFEDaZk77WhLj9fqL5EVZ9M5QndzStSXusx8cn6cgzSnPhjrXF4CcDXjBnx8M2tPqEc9dL7n",
  "key20": "4pNayAo5er5z25jD1tVrnbpn7LB9igr9478n5zSWnL3HhrNSk88xPFfzBANjRHKE5m8vxTmYKdnCYG9ZJBXMpdA7",
  "key21": "59AZpTpo9AZn3UMTdS2JbaZRTYn8xRBo1SNbMW7VsTChVywMDj7PnrRaCvqBkJxzQJTtQ98J8HEVhNsJEBSyYddP",
  "key22": "5wyiDv1YDgJxkzQYBqUGmeDUQx9eLB5VBkszPAWRo3Hhg1gYyTzgSJYz4asZNm2ZKDraNXbR84xcU4Q2seeNABbS",
  "key23": "5MMBF1g7JDaoryEPW6DXx6K2tGbUyECGz7TF6hYiJCCi8thrr2Gvj3n4B11947MugD7EKwU9k7ETaWLkdQHNsSAJ",
  "key24": "WCrPt335k84CoxqTcZrSvDzXdGjqnTmKkYjM73q6rDVuwYww8quMbDF1JUH8HxvbY246bqNm2Ez5hNXsRQmN9K4",
  "key25": "3mF8VX4vuBrW8F3kreEYBawdgJYjLCDtstSEBNb859BYkdd2yiQ3x73SpEWXUQCSNrnVUG8AufUvLrPYgw7yYW1v",
  "key26": "L4pizRiTxnF7iaHWx87DeFPQ23Anz2JzkVcyXZiUsRjenm7VAPYi79fjgHJCrd4sedsTFTRgFs3zWrJmCtEsf8F",
  "key27": "5XQ7ofDgnuhY4xC34XMu4x4yipYoberJ8JahAiD55ATcvs1VxFgqx8ERf96EWRhSDMHyGbcnqdcwwyFaFJfXc8Y6",
  "key28": "4x8NxmsL9eDe8SVsADy4ggzKkdUVeSVNpQfaLFe9FQwhpXZsV2NYtAmcs1VLyFTdXFS1vhuUHrSfLZcYMGFvha7V",
  "key29": "3oG4Yrf7fzxt83vMWiepRkYHeRGT3E7L8GuACvoz7c9pWTUcDWJhNKynfdZWuDCAec1TTjTxkuJof4pdUkB8wwTc",
  "key30": "5xZ2zA9D2c1UE8Kdit7h5EMVf15Rf5WoyjoPHMfJJRNMj1bGYsN7ScA7ruBT8heaWfRm1rQQMS8wWnR7uVhGhVAq",
  "key31": "3MMizrVYvQatF3ymAPbjMactEvTjUZ8tFSSsfJvmdJdDBrWXCohWbUnLESgRnfpXhE5DNv5HvmrnoKFGHMBka6wX",
  "key32": "4b7ShVYdYeXdBouUUyPNHQd5VbA3cUis29EfqMABJQb3D2zJ1QikxH6qVq7WTQWZuL4acRHHCK3KwVqsEpZGXoC9",
  "key33": "5Yo8qLRmNy1LS8337HCippV8pT4ur6ucvpEkc9fYQQpiYNc4dupJNApvGYspfxkGzsKstV8aSGfc5ERmai19Hzdd",
  "key34": "BumN3dGYWNyT8QBwAjep4YsCfMbzquVQfGVFJJdEBvyEEqUKT43Che8PXXisBj9qyfHMD5iK6y8yVkFxdgKA466",
  "key35": "55AfinXJX9H1E7zk4wjwS7DrSZwkgofo6hmmLRQ9sPVALnUYFvSxjAviuh1PwFjhXAiX9Kgth36uRevwZS3PjyPL",
  "key36": "6319KV4xXQjPjw5keNbrbspBjrVS3pTrVjqgnZUiFFhEFAaBmppuCJW6HGEXhCygauSThkpnQqRYe6FwUmJ71Xx7",
  "key37": "492oTeoY3LPytb2Vm3LfepS9YS23j6JUzhUWHJSgxkHt7ao3XVkzbEU19vGzSTyr4V9LhtydSQEj1AkntyBMahxw",
  "key38": "5zuXqZPvTC4mWrEq8XLgF8nMupAuagUMFDT17jiWGpu2R9yYed4C8w5zMsChSJg4ouDWjvFAwNJU6pNpYUQ2q265",
  "key39": "3HPmpnn9P2xh5N3Ui6ESbXeKMiCTMUasCu75nunrnoehD7GaeJs94cPAs3UKfEtMfQgxQ5QAwAit3g9ebg1tWest",
  "key40": "4dBjkGD63RLC8CC5jDzHfbZwWFsMnrw8W4nWnA2WwxVFTHNd6BCACvRuuB9PXv7ZebRAkQXcyRdw5xHdyfTqY9se",
  "key41": "3fzTTEimQNsNMADCR3eTrzTmsqKs4HSQ9QUzDSBjiUj1na8ySG8NtT92XVS4crhNGp8Y9f6HYR5eNxDKaLZ2A1o2",
  "key42": "55wc2j1HL5N678TSoxucxuCw1rtgyt7nzWDeF8vZeALQf7SGh33m4GZtUatriD9UrTpDz43mbpbHEbKgwp7xF6o7",
  "key43": "3iMhmCHJ8KWb4g1unriw1fj8kJuqiJm7n8r3zQWYieRH97Vq84gc4ZRbbpUM77xN4xQzav77R5wDcU1PY8sSg97D",
  "key44": "2CvBXZ8APEbEa4KHTdYsQJbszor21XBpbkWuKPZwRCpHLy33Dg23s7Hq7MbWqx74rQmVUDuSuS4ZoNALXKo7Vj2d",
  "key45": "3QCXaAAK6sGRqgnFgnvCKXvD6tuKsZ7ubGeaMBmUBQzu3HwgVvSBPQ8LdLw8pTxg7kqccfxEAkc7Vv2yGEoz9Rpv"
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
