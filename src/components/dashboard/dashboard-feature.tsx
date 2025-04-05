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
    "4bPzNVERGAN8Zb9dXnKMjw2DwEE8NDxnMvXPhMk4Z1EaSig91QkcJEaamUL86ShgAKNRk7PyWELGLd34btAwMkLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Labiw1w65FwrXAtZjYTdRGq7qWb1ijh4X6bfr5kwucKWUfKCsm1nWoxQc248TB2KhsP7SGrAe6XFfgG7XdAj39",
  "key1": "2XEYHuFoFhjMoUg2spYSNNLNj6KvRX6xLfB4jgnHuGT9H1baiS9Y8ZDRUQgB4ot5nQwyXt2WAZgQHRMq6qWqJtSX",
  "key2": "NJyUCWPQVvgeaMs68E8jbmSziKcatq1UFyBPrkgJ8PTXgoJ4tHiF2eaad1zUgBAXdCUCx7GbrTcUeWAbPpfpbZC",
  "key3": "2zmBc5UQfQdtXD36GcGTSrzB9JHBjPx5q67aYGbqJ2qyNShigkTVLNLsiDsWivVqEGiXNAejiPSrdq9DsupdQTeG",
  "key4": "DZ9MUwHFhdhiCayujV4FsEJ1yGDW8ANAUN4qdVFin7MUPYSmwVPZAgkkSc4f71XaTCLgVenB3pJ1CP4o4ZC9TK6",
  "key5": "5SPZcg5nUjkg5QWLT51hSLgTZsomAdYraGRaiLtjnmqVZg9ppbeZfz3bqsUPNCMnXdGiLiB2LQqorYoRZXWAuEWR",
  "key6": "prrPXSHdWXLGE3RFGb2SPy6cYLDXTDqaAGge35qKTxYmHTPJwGM5A3GfLex28BwLzZsA1HXFkbxM5X1MKs2Ztwz",
  "key7": "4xcEQZcmEGfuB8vtC5TEPEECr9o9bfEpeywG5qeR1WsVA8vGdVq612Z9V5XQqdpWhBDaadt8f2zBWsJyaMUNktEG",
  "key8": "257aewxC3bbBuyPjTaRBKTvKJv3vuyhWLvj9C9xZL4tkzKs8YwmveyjWHm4QcDFB99HtkkFr3uPH76MDec3n682S",
  "key9": "5Qzgbe6PebuhWCfrxTLG4JEvofgsaiC17eKWgdh2ozdwSH2hukwEXxJqvAoYW3BoHMRQyrRMHB743JQo2cX9xfGt",
  "key10": "5J99e3adsSQ6V888JrLjmFfTwBjWEjQAfKtrkGJssWyXKPp5HQuGTBNUYHqMU4oBE8RyHXm9K76zjJuZQG5Qn5iw",
  "key11": "kRPWSF1TeZ8oDt53vGNS6aU8XBK5JDAV2TbYFZq3EMcf3aVeCURfDmZKbnFmHAY99zufCBgbX5P7Ex9yNSYSNaP",
  "key12": "3fUJpRjiHdzovnnEDh1cM26qQSuXBDMfbWVEDWm14dGPnpmaMCdZzkn3N2UFwYXc6U3u66GEmHEs1NiYE9xZmKbK",
  "key13": "48nAKRXRYZeS3QCSAmLgAejjWZB1ApTwyWNZYdBjVAsj2vSH2E5f5JNdLatDmxVbB6bfqhrZAmsY5KQVzdNs5agT",
  "key14": "MTw1tbWLQHAJtT6QtW1V4PATFFStk1RUprz5XVhJRRPScKgqTtHFTBQPNiiA5mjZXASVNzpVMDhJGirJuy6KjuU",
  "key15": "4UcCmVDf29zaFvQXhBpJS4H9UGD1QMbcxHjpKKfw2rr5P7jcD2tFHYCgT5YXmFKYRE71Sr7KPWewFyJGKXmHFvbm",
  "key16": "3fRPv9jakwL98dGJe3j3F4uTeefcmvyacNfmcUXasZuWX4cYLPqcpdoT14sw7818TXdFTdatBGE8CDjfjNXeDewp",
  "key17": "wZymX7aFRnFWmwyvVFGpMQev9LMmeZ4u6TMkkNaAehc6gxAiCTQo8EbzZxScszUGvc8XW9GiwncKC6drqXWJaCt",
  "key18": "4q1WrCQHRwstdhiyto74fSoXMVWWFdLKTjaU58KoPoQeA3v68wi6XGaZfDSTkHEjkQGwpACq9vPXUdcFkDRqcUxW",
  "key19": "3X8kAcWUwiTmU5fdZX9d8uxrvjJTV78AKccB3gtbzu2DBPGs6zVLP3BAQTGarZfiSppzXUX5i6wPqHqz1Uy6h3vy",
  "key20": "3J3p4GepvYo4wnyaNBHctogXeQkPEPhMCHwaBiaTb8QqUJmub9xTwht3FubhhS1pYyWQ2XhgVDtNVsBmW53nFCyY",
  "key21": "RZeFgPoX1QZ3niyqdDyVKfVD1BuEEhsu6ijxb3kJMG3E7PReaLiCrEvCTvaqbn2yhcnmXDK1Wd7Ldten3niwg13",
  "key22": "kQw9tzJyaPZebR4L5EYescr8tTBtxV3kzh7F8utVF6kuEgKVQCm5xCU3pprZutXk8eaPqUxxAAqoZt57uVJWd9T",
  "key23": "1VmE7ZF6D7CnSVYXDCGzhGSvURDrKPyDZ5R39wuoszNatWH8c8EpMEQmb1E6s8e9KyzjNr9hcXZPguCotjyoE88",
  "key24": "25B2wpY7v4XM4MsR4Hyx6z9A9Nej4X2AUS4XGfod9kq5U917nTRYRAww6hiYuQ33tDN5udFbG12wa74MA6V8XJXS",
  "key25": "3DvjbaAgcFMjEgun43fm9HBEiar6ka3PHTD1AdPfSfSaZ1FKM3Ui9VrPo1iNUz4LsoCYKoqY1J8AC13sVb8Kzvud",
  "key26": "4BRL8bFRoKeFZpraHkWXC76QadmhJZ1qMsP71qyVDwR3fobP4sSXBsMNN3ay1Qzbt2gUn5Ahs8YJmJsMNM6vSNQV",
  "key27": "1Jicq7FnUni6P26jF9gMJafrMiX7w3SACsowSZrnhupqPPYv38uPuC1izCZDXBSaY96QGVZKFXAzQffmCThV8yK",
  "key28": "25MGTm35a5E6eYYV3LBi2R2bk6vZAjyEUp6sSVcxiNvNLiCQPpriZGcEkVPPR1JseECuMXH443KmpQE5p9L9L3mH",
  "key29": "3LCTYz4JXDRZKd8MYm92HNGBfj6A4RgyJmGJL9ecC2wEeAYPR4DdNQWKz1JtswaCZA4Rdrys9iVbRNqKPNXzmpqn",
  "key30": "4zGJWg2jXm7M8kJLwx78pDdVJwhmWxeqqViHmq6TsNdanc54r9AZUNXcvGLwk6Tbt6EVhgSyfHUKXvfMxEGPvrEU",
  "key31": "4s8gSP9SSDzoSM6w1isMQMhes82PqQc6vvAg65QZeVyWoX75qj9BcdFeD3Yu6eSNEYJp74THk1D6YLbMKGQKMXsW",
  "key32": "4VdxUDEYYsBSj8QFLtf8AnzDB2rev5Tcr4qDCZapVRt3FsFfdaFpLMddoTWgEtSgeTSnLrruNdDHQFSt1KdFQqMK",
  "key33": "5VjExCAHmaEaswoVQxzAAkg1dVe9gSyPkK8UXJtnFXbwbyA1zWKkLcGcHQNB1wbPAVLkPPsgZAZYPfj9evqCYgBq",
  "key34": "3i3q8d2Am6Ycg1M2qDGGFYNtWCuwXZafUgaid1vvs9yKfN2EfF8NZTDXoyruovtEckA8rbWyzXo2T639fZz8gQJY",
  "key35": "4mYqbTJHesuf2WVjPsm2bmSHRqdC2bvs26t3wTYohz4xJP8pk8VzezmT1NWn6dtocz2mCxJiTTPhM25Wkiig61gE",
  "key36": "3BemZjKKm7quQTpPkcrqMxhM6PGZJRuvzZ7cCXo7Z16tez58nEBM5RndVJ75T3bAWEVrxX8JxGNXdt1MRxuJQWBj",
  "key37": "29ZEekczyGaQJWqbyFUHL16iN2d22AijwAPKrWeBAtQPfvbP3BMRncs3i3wiyBghiicMgkTp86VXSqFzyALyhJTA",
  "key38": "2DVHovvvEnhrXCpW3oqDVkuq6v5m4USYQbEfbNYJcXVbHntWWBSiLNJtYRapxEhnRYBUzLc4AjP8Gzdtha8zDtZU",
  "key39": "3DVJLcjKZYCUBSNHueGPCtaGAvVDCZD3U9R3dtWyquJEgQiXpj3EXCiHWMubbE7eMAuRk4qDEfJzdqy2V3kokKS9",
  "key40": "5mJUZ5s4CyL6fKC4jNRNNpopW9EhEEcyb4JfBC78z152zep6RisvVphfEW6yE3UiJJhF3JDHq4ppELWdnU53bvo5",
  "key41": "52nKE4SqprRWCHkASiqAMf4KWS4KWxCKr5Yz5XpPYMFmuhdb3VdRCuLdt3BUBAuuoanU4SurW6Wk5aPhrumADjZg",
  "key42": "5Uyx5HHW7M61WUttfMCANV17K1Lhche3sG3GTJvJxfzdpnNa6QFxRUYBdXFCFDJGhGkUpp19K2H5fBFQ7cycuYS9"
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
