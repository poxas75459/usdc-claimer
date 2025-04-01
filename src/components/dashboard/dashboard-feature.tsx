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
    "4wRe7GnjGxygQgsfEpWFXPVaZZDHz2z41CiRtfGvBiha4pwFwAyjnG9jTGejwUqjLicynJxh9TEbxHEj2i3jtqit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rQWqpVfCBYs39UunW4hbfA4EnqqYFN9CJsbUx6dqB38nzejMf3BXimnRJb2mqWgQoBPbCXWUd5hntX3P1WUuqrc",
  "key1": "PW42fR4dDytgx8VJH4SzqBpQbwHaWr89Ski5nMX263PUHCZL4yFWWM4bXqCk8NMLtQeArG9ZqT3UaVKauiR5ndV",
  "key2": "2vygarHZgU2qf2zXzSBoUazMsYWADbNiiaiLRapt6WvWWEdFCYufUmzhH76D4B9JqR13nFVe8tvkGRRhYbUL5LNd",
  "key3": "5gf4aRsd7zkAxdYiMgN18V7mRTZFeXpEJyYAmKiUEtMEUmZiVGT2fPZ8rWJCzXqDQSP22JthCkftk4eVwLwxUanm",
  "key4": "FMDLvH5zJb9LKx3MgypXr5yooGDNdVcu1zwLnWHaZXfv7fJAtpuqrwpDMpaQqKfF5JVdzU4gfCDdPY64Uq21ptn",
  "key5": "d1nWNMApgKN1K7rDAGpwDD9tz9798gJBhB8JTQzT8A5GqQA5k8zEabW7kBiuMvQq7L5yRwh28QkaQRHE6mncxst",
  "key6": "4AMXWKogEMCcKGpMi6ZsxjjuiwxoVvKtK7widrqkhuKy1MC2xbm1ZYz2oR6gSZd7KTU5p28wbsFFqBNjefjX4gP3",
  "key7": "2D8qNyrjgvRM8ZvxW3Z7MjrDFmhDgLKmvFniHfso5kcAxuT3ZXpJcZUUW2DbhCSaDcF6ai8FzVH1HX5W2XBoHNoa",
  "key8": "2okeSiN2RjkShQ8bBCeUavAxtubYXWwaMhXKgZC4enTrcLXeMwHPmJCdvg92U4V56r4MExeyMqE27dyxJqAiqbYk",
  "key9": "4oNtLJBUgndRbEckmbNaarEDB2TdLQ5LVdQugr2EmiXYtfR3nn7jUrxVEc398WATnfM8yDd1ig5BG4w7pE72CW3i",
  "key10": "2N13gNZXJBo4W2SF3PuoLcZrdgY2PvcxZw1C6eyRkdXcebexe1sNwbPyYhQGEniqWksum26vkKALsGMvUVc9FnoX",
  "key11": "3KrbzFZzP6aNSEJ38MAejjykcuadj2g868RDoCxBodded5HNHkoGeGoBapyBSu5DAh1sTAkFjMG9hpF1pRZpKvd3",
  "key12": "ErBFwut14kk5VeC7Mjtt2ySdsX29F5eeGruXKb2aARwvb7ypw42e9YPZSF1HZJrRs1WxSujqyZzLmXPAmeU87Ub",
  "key13": "2RsmdKNpZMtyN9pBm6Y7EBoD5YQJQJwbqfQKPQm4sa8FB2dkoFataigL2Tt7R2bGKQ2wUTfaNd9hovDVcyBHwXT5",
  "key14": "4B7t3GRHtBkR5KzwuLkQdTXPhtSg9Tt9v9UJmV11Qob6RvGh5cN2EnKThZvs8hGdbnsrwNaXtpPePrPdCtPzB2UX",
  "key15": "3WaymKVsfMToVJyGpt1ZHZqTXTnvWRkEbc7F76GEFm4p4DqBtjSfs8j329jmnRb1TvvAhFRWcASFJe76cArzBFW5",
  "key16": "3vbrW5FytGE3fN1eN9jkuX2GaQYTrNv8wfuHbk4NkrEmThWBgKEhJzAjSY5Li9N8RJUieCChVZD7qdNpfAdaQx5x",
  "key17": "3XYofSEmiDXJ7y2Kp7DPVJ7zqL1QVhbaBEHGdZ9PJQYacp3U13KmpWCnbTFENvd4WXh6zgREz9upbwcDJzxAVdP4",
  "key18": "WykfwWVPRDov1DxeycV1XuZoRFh4YwjBwFzSe88REziWjfPAtw28jSJwvatFS6ecnRniFyhWjExucWkQjMCz4LE",
  "key19": "4GEZFDPWdej3xoAp7Ed4rPHoy3B9KFJ9HBt1ip1PnQz7EusfdjxGZwUXSWqmTiAoNwUk2PQ6eQxo5oHAv1efv4bm",
  "key20": "5sk9Hd221Q4QT9p1sTnT3SviutSmkg3yuVCfLvwkF83duuunKT2vuATTeR7K27FqMJQhxPK293145an2Kkcpan5G",
  "key21": "26oc6uNzfHD6oMVybnSBesApc8zLmxsgik9xqX43WP1iEKiE7aGuv3PbdiLy73DDiPte3EsYJPm2i1DtiEeVBnZN",
  "key22": "s7yb7KvevKNZCKyvEpo2vrVxdhqY7Ec2bPyzRQ9paWEjSh2RURfPPEW1g7j2VcLM4Wvb8XnayAUekpiZ8TtPamU",
  "key23": "5ifGRBCQA4nqoBsNnma9q8FRit9PsqRfPA7RYcnTB8W7YEm9CZUeRV1RWZHMAdkC7vkLaYYchEdAS8xEktRYutPk",
  "key24": "2L59pr8toWkqdDQgkpRCXJQ1iC2Quxg14GcCVtEtfZTy117ApzAYCByYEDfRstcSJmBbe9s2d4fcUKfmpk9P2Ff9",
  "key25": "5dmyTBy58imMDbytFgMNBAVTf1nd94bs5PeBArdKkCeA7Y6bfNgk8krC8GLktFEC8YALd6tVfcjpUKyeerk5Qscj",
  "key26": "59HFD8UaXTv5VxWBX1pk4t2QAjARSWjju9wFyxuqxkueqzaogf3r9CJvYPc2YSF29juCYrTTfxTnkRmmXpKwXkmD",
  "key27": "5C1XJLX3rSGBA92J4ZVV81vV9YSKRim2QZX2fW8SZwMtvRapiZF6dvbQV2btUVQB9Mmffotteeqd1n4hJs6tHL8x",
  "key28": "5E5qyKZUUDSQsd3oRBze3zz6QtkciFLguk4snj9P8aRjy3wkto4EUua4345Gibm3P8GQuHRrSg3nrrDSFymejMGt",
  "key29": "5qRnUVLEGrNbaAhJxWFfwmsRx5XesNkgEcMTdD5FaryvA4YHrg6suwQTAJssqXnxSMAPo5B6PV5Fy6jbsfs6HzTP",
  "key30": "2RXGjSgjHnF4i743E5QRXXKnLHY5vW2A4mbnj96anKFn4fXqUwaHAtmFwPhm9bxrggNt2kWWqhCPSa3uVC57zxfg",
  "key31": "3W7RJoLpy3kqwmCeVLfRzYz5AVjT4ehA2D7LxNWaDTsHk448b5gHQYMzFAaZsMcBYW7gLHAm2RtyDpmUycuuCTq8",
  "key32": "125f2QHtmfdoYNYa8Zeyhjz6MKMoVaCr8Qivg1ymr2BHiBJKzJLk4RAFzopSPdD9pnG8P1GKVMJysLhskYpdQnkj",
  "key33": "5A6GZkrN32seyTFmb3mBRd6mgPFXvHNeipbw9EBnkM3RAkVLMLXwGeXVnXTAHwkb5Uco9M6wH54zXgz1kxovyJsw",
  "key34": "2uQLkXwrMdLYu2nUV8fG5ndcReefWZsiw2BZxtVVfsc5L4rjazXAiq5Qh6f4AnBwcqKzs5oaFBXpdAmCxNb7Vo1M",
  "key35": "3EMpgh9XA6YKvzgtLUFFyQkucJiMSomsiezphidkz25RUx1tN3nTeqnosWSiZVyfrzXfJ356MLenkJ98eyyeCJtc",
  "key36": "EXKegzZ3xnWbbmSBRUDTBQbSPDNQPFGMUUzaRSSv1EBkPbtAje5TkUyej6e6fbzZaXn7o7EMfr3c5boT5Lp7Zpz",
  "key37": "Mz7bfb97U3yKP4Lfi3ERdgj9xLYxNv8Hq5RcfNgmbyy6EjAiQXvJAonBHU74Pka2RkEx6Uo2LL9zUSdue5FSDEh",
  "key38": "51msFCn5WSydYro4ncTEZvaZ9D3FDyBGyjmaDbn5Arp9viwSznAaccAkbxULiNi5FHVP7mAZKUpFEaES97vFBaB5",
  "key39": "65pCRf3JKMrd1snoHrMWHm8eroMtnXmo2W96tnEDtiUQRvd7jC8wor8FTBUDrqQdrdQmtgmUFtmSUZs8w9xHVZvc",
  "key40": "wbCNZqWL1AhabLwdov4kwkk1NwytLukXKSPAArCYndjEeZaZ1LjgpLXEt83gV9EbiuXLhJAi7CAv6hCJHbEWKN3",
  "key41": "2Pn76mXMhgchJiD67PuM31M9fMtDmFuH7b6wf2nCrG8ZgX2XN9FYFSWgtWsn3DjUsdPGmjDCGszYXCNMiv8GNNkF",
  "key42": "5ZUgRTeP8SvuQnQKaKZz3gAhaLPcN1TQrLD4mKwnEJVAW6jQgFNUbW2UtZphX1kLtMRG244MHvXX1wSnBjEdsxXY"
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
