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
    "5cFLe2Vw9ToREEXsdbFyos2oWSBWJMQh28KRchCFd9i8HpuwAJRKuwKCQiaTf3PhwqqwhQDkGTxff7VMTqcPKDy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E4fC8HaaaFg2KCubmQrB7BBFnFVrj6y1wvFDa1RYPgNRmnSHd7EWV22uhNw16U7UdwEwThNB7YZysijGSXt2Gp5",
  "key1": "2uwJdX5zmmEzQMKPN1mzGiy6JRMa1QUzTfrFxbr2sjZpDG88FTivZeBsp8b5oxeMWnfDi57FDV9Tv3AyBZC8HTmj",
  "key2": "4FRhRoyh5shPQTAAeK6aqz8QntvnrXrMNfvUH2XzMaHUVgrapfFvzqpnG6PZfev7J72mxtd17D8yZ6uUcuAvqxUc",
  "key3": "3asSmnAA3dDckdhSXTYTgAB3DKTG4QFmfXqvueypCYMHfhBxfAXKsFfFyrSEviwaXv3jo9E3zhnu69LNEw4AcLr3",
  "key4": "5WuPACi6SBRbA5nifJVrA4VD2Sd1KX6F9Dof4evqKzTKnbFFNtq1aSKtRSUjt69PPE898qGgsx2LM8nz8eAXkKA7",
  "key5": "4ru4siYFh8zaP2DnRmBGwg9xQGnSo35TKUMGaM42kcAkMmoxhc87QpjesF9aNDTnGGF3WBNj3JqaKuK2G5FdBRmF",
  "key6": "4GNzmvgxCdVEUdk4cfaW1JEDNgimrnWSyjQ3gNXktcJt7sr9e32MjkTwspi6zzRnDjgy2eNdcraV2kjPaLkWBSZ1",
  "key7": "56Ke9pzLJnk5QbfufPNrZGLtkntzV89muuPTwwpy8JhggcporFzLqzTVGSpwfskBWEfxBQs3moCpiWk8CAUzUCGM",
  "key8": "2aq4m1N9hHmqZuMRYHdyHRnNfQkdetEAwWWDaE2nn5ka66M1x9wPMcWG3HCqyuqor59mGXioHPWAaTduHRB38reB",
  "key9": "3EEfsRyxBCrbSDxZR3Tz5XusnozN7wfGyLABPEeh3kEydHbsTZ6Zgc2tTVtYGruxdsfuPnb5syJYDKoKjgZC65k2",
  "key10": "4xZP3qwwbS8n19HMMrzJwfkG4waiHwVm1t5Cq5XRLvzknMMGa3x6V2NLJpBsbXQNko7Ejg5nUSdLKdyNUcs3R3w6",
  "key11": "sKd6UEysieh1Yk2b97eYcU8rmZafLGivBZ9v2CnZfYDsqt632uofoF5ouXzTsfd3TkjVyQ819bDmndodNFzfXi3",
  "key12": "5NK4cSLfgBppKcxEomb7iKT2DgnhWwwj9KMWnPopcBeutMCTY34U9TSVJSASk9WrQSqg6Dbx3mSyHD5iPK1KqpBd",
  "key13": "4Fd9robdpVTyezHsdymzQpnaaT5soaXMmkJVj8Di5EjMd3vhQQBgxXXwcyqF4U8bQj2nqLta1ziJYyEV6qryHhZZ",
  "key14": "3HVy85rAff6hGWuvr9xn6s54iPn41dKWbcaz8VDqeQA1yqZwKzdcPGspYL1bnqPQ2BZ98fc8vpn176ppTQWBWNuX",
  "key15": "KDz1AJG9Qm6J7joKUxp7cDG644k83aB3D19bpnEjg8DxvCGjgX6u5z1rYmi1BaR1W6jH135F5NMkbB59bcsKiPZ",
  "key16": "2BqM5SnSgxyH9haXknLCW878HPVKkPDZLMSeDrAb5cbJLnseCSCK5r6GiVUDhpmfU1RvAoc8zbs3eFganM7xFij4",
  "key17": "4nbSa8C3297RHf8ByuKJMFn4Kkitct87BVgKwhXiDhEYAVkme9roPAmKAEknsLtqXHHMkjMv6vn2WYCu6TVXuy1m",
  "key18": "3EaC6AVK15Dh11igLvmWNgPc8etqPsZ8MRxFzbmWLHwRojHKMn85HmxJe9j88GP3XE4LJPnVtriDZhyPUtbRFBMZ",
  "key19": "5P7hmx7JQeKoyN3nuxDT5sZLVgtJgiao3pLYoswk4vvkepKa8CbEDS75c1B33aGCPzQT2pVDVCQF3A6RUQBwdAFF",
  "key20": "5gqydiCbMHfuZostUoP7DcKaKp9UuDiYnuf8ihRBWQkZHtV3xU5grYCicc7W98devV2oLgtsXCdvJ5wdR5Nwu8G9",
  "key21": "2zTdXbJzmaiwd2Dw2on58qg3A5QHKANGqj5YioEMcgL2BwXqbq9ZpdvCFwqTdZ322fp51oNYDrW4szBfEz5zf3rK",
  "key22": "rEHzCs4am6LvxrMhYwZucsksdzSwHnboWAysWp7HhpDAA9aqMRA85gTKTTNyqiRYhSxdwKsWUYDnmQNw2AMJieU",
  "key23": "byCB8qYBi1EcwYCAUxGTzmckT23rCuEgd1vzRDreNeqGrdP7pFrTPUCZpJrRNrc4bpbwCU3wiFg9GfDzJorXfTg",
  "key24": "5MQmV45ckNAQFe5nmehuM7cFYYE8cDHVCqsS8HGaNYndbSLSLHDyPvjj7Y3Atqj8sVT4u9twzzQYKYKN1jMkBVp",
  "key25": "4XHY85YYiTJJTNNmTynjzBjomjJic2umSk86y3WwE1sNwfE2Q7sGoWhe8KBdf8WX45GXRQCFQPTKZwfkasvgZtWD",
  "key26": "2WHTqm6qk7q5pVgfy8UFtcEC4mg5karDoo3de561QdjRtvhJaPRcfnZc8wGjT75Jusy5R2Ub9cAafRSSPES3Be8i",
  "key27": "3LCtkmCF7ewxK6jdQMhvuKP7zrUZVBZbXy4FFZSFRwygv6dRGPLqJRZWRbQ2SxdPQSfg51fsYvnMPcWvURFrWsL3",
  "key28": "2YMPGsvsRV6mq8XSkzd3JC4JZG3qNbmGPFh5Zm2qfMRKKfcyKPdHjUAq1au7t7rH8sJKZfzPixhPx9ci6hXLSaxp",
  "key29": "58hDNCpwmBcpWHA3SoEetoR2PKtFNMtvgyvWjP9zvdcfzAQUzddE3Ky2ggVJ8ez3rPdqnBB7V392gMa2oTF8bYDV",
  "key30": "jdhuW4qkHLqGMp82Xs6EpkGrFrYEycbpp2MEktG6TG3eVgdhDovoJBv8dmixwW6QVmo82suQuc4yStVLUGh7NK8",
  "key31": "RToyEHXv6TZ84eBG8ye4Wbv5mPkVMsQ4TxWmEQWLS5V15cn68hGYbeDUCC8E4qemULU9kt3bg8zvnrPF48XMHhw",
  "key32": "4uMXJ1kuZibxwfMX9etAMLW7QMeurGz1FQe5VUxp9Wzp8yn3sDVTHFJnuNPX1tYzQJNV5hfsxHfmfMmPJN1iaxfU",
  "key33": "fDTcaDKuc5ZRitMXXZRxFLDsKmqTMvZZzaPEtdWzLXtawZctdaB97Ypkh1YRdi11fjK84UncRqbmdbL1ssyBsnf",
  "key34": "4AZjzGKuHWShzZo7iTUP2X5mFKiuYDwb7EzDbPBTnYxerCfd54FymdaXdnChsSdXyyyqL9o6RRs38kLJKrU1TQM9",
  "key35": "64j39pY9ZBLVUse5mbM2wMpqxD1MzZRBE9oWh5MR7E4KZ2dRmGKzCWA6B5MvSaGUogCFUoftZg37DQCQHT1BNHiY",
  "key36": "5fY5ERpjw3fQZ6EpjDoxqd6VdTtqJ5Jpyfd96jjURHGhMqvJ8w3THjB8YewKwv3v5soMgpuQFn9k2f1pJrq41rT1",
  "key37": "2EPUoc9AkoS9DKC3rdUEoYeXX9oru3wmgKQVwf6Z3qg77WpsXxM7LbCBJV2Yy3QPBB7SiXK1WhF1KBp5nTcFnQPw",
  "key38": "5K4U8CeLpxUZQKAT5j8iuNzSGY4mu1Zs4qGJeApxFinbCK3qmyzSbiznnL4RSRdadn1H1T8eMZXcpefUKuaHagkh",
  "key39": "A6H5haFuvzMLJuUQymJGV7r9XT5CfueWiMySQ7arKu3qbYn85aissQtJc1ayhqjfyiUoX5CkoQjbcatH1X3LHwd",
  "key40": "5cTRfe8BVKsfvrtkMUyPHGJJYYCx1ZwyPdLjAVbL3CZyzFVYxkYCJaANvXVNKWRg1XXr7UUz4dy55H1jPefBGEmA",
  "key41": "3zkPzDc2dCMY8pTSijbrApbryjXgZsSdtf2whkQcUn2UPEzzUKpu2w5r2P8cUQMov6s3aCcE5tx9z86yuDUeVsfA",
  "key42": "4a5xmF38SZXBjae59PtQiQXnVij178pZBayLLvbtMwGoxPuLHuqNtsRQgaPZrViAroSJ2DK152MKxXdXVXqeMJ1K",
  "key43": "2ZhfSwnGUvPnhwAgTw5YRaRai3aepb7AocE8hXwCWddBkjbYZEQwiufBwPow88PefhoFdzdmcDCXaryj39AL4qhd",
  "key44": "5259DqN3A7jPC1LBVBwTVsYhEkMAxdXC6mfBJ55dETCTPsfgQLM75xawXRMiFKrEVVjw5q6p7m2JKPJZRKVTUnwW",
  "key45": "645xnz8EJMMFhR4uxkhWDZwowCAviizQUdhEpj21spasatEWbJ4ZvGkch1fhc9V6TkNtJiW3ZoVURE8bNXQvpghT",
  "key46": "4BEButG7jHKrWy196v1kRhDZaDkSQc3RcMpq7yqetm1FU9ZS2SXt2HVsZSePbPtjvouBPYbPPtc7pGAraRo8r1bq",
  "key47": "4nyP1HVM3D9FUcjzqUzkU8osL49m4SiGWep8UZvHXz76vKbkJ6LkpcDHJ6LXAsUXzPs121RUHp6bNCNbmLeXWeRR"
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
