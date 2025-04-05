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
    "3ER1sScrtQLWNNMFycDYn4PDHuJw8nLD4M9UdNLUbdQLQfBQDCyQbBdnzEwbjwXNWTwsQw8TDmbPNE1STsCzaSHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esd3BPw7Hb6CmgaSGW1WpLbrDBjQtJgEE7BobJwYQ6qmTJ1N4RbLYYxWNmNCggQB1dhubgZ5Bwf52UUP2VZ2Nxd",
  "key1": "2MRqhGTDyWzC3YkxPGXhy2n877WxXsDt7jRq53EDxsMDYVchkAciX8wAYTTkFH22dnKAqpGu5vZpnwHQ9gkYesxo",
  "key2": "4qz8XTQXzT1V7cbn68qFpKLprWXLFhh6emYhFMfBXmQ1BtvCVGUw3r2tHg4Zt3oK23T8mceXv2x5fnvdcou1Hnyy",
  "key3": "5E2Fa7wukrxsrLbiBXtsEEvVpzWg1NAAMdNUJYBqBDy12vMJGiQiPHehcpZcqFdhMsKKmnwdAYLuHeN9c5eSpQsc",
  "key4": "38Sxft6MtpbyAiRrADTLobchBRPZWuMqXqb4EXuikBGWH44wmVySh9PLUscRiz2EAyYhtBvYUhy39kjWFWJf4k1b",
  "key5": "WYhbLLfEw62Q3vPyvBxQt7yH3KFD4GTfHMbjnNXz3FPmhpwCVXgsAceM7WjRmY7xiAfvhSLTMPkAqDzpuizZTQF",
  "key6": "XfU1NC2Voefg9BJyLecKpnRhSWyKXtuZ2NXg9yvESYim5MKTk5x8cwSSavEh2B53oBp6f7XHqfroqYQ4H1FGsqR",
  "key7": "4bM6ST6W8fbooMip459qhgBTyCB1V8iBmyC9PoshKA5JRJpYYfhnM1Fy7SS7PENHUueWHpPcE8tTcSveLjXeD98r",
  "key8": "4YjWrfwb7fKftJYLEuAAhJ43zjJrzQpxX71edBbZ8nGxHHChqZNmUpfAAo37dmh2eJTzeyY6iVWiUiBYXHJ7Kzst",
  "key9": "5E56NKVLLyGEuNmWuhhrqeBREwWTtWrRuBTGW1EjPVKJpLFQCJwa83gc4nWomdJsuvCPSSyFrXWFxscdsYG2iVK6",
  "key10": "2iSi8ezPpq4X426CMbPiY37L1YLqcHvm43Fo3P55M8S949nuCsg6KotwQ3SCfZrcPUBSm2rGyucv53AbeG5dHf2D",
  "key11": "5eDTJ8FJSmeGZCrFwvUn14XDLHSC5eAi2AzxzYDCvpnxaS7Vcjp5K2a78j2pddwEYfKE76pXQhCpVFmZ4BDfUG2c",
  "key12": "3MBxTUzCY6L1EobZuGkpiEgQjmx85Hcjw9QFdWaLmYeG2wAPtWApc1THSD1PxTLmiyjSF2r8GBFRSFikXjupvsNs",
  "key13": "2RQeyVg6GWBAT8JqKc9zzuo3ArosNsrEpfjs5Z8QvxYfpXuGAPBpDU7VM7rndyNrtFPmZw56FmwRwDekD3xAWDGm",
  "key14": "3Q2RsJk7fi9Ju9jkME3szcCcx2XPnzYnTNHN3U3NJDnMhhj5wgT9HWeALweNzXTawAyi9kR7vW4EVFo99WGVaC6x",
  "key15": "4BMVCWqGyCQmEkSPmZXYJekPHEQA5uMKf3ADWL7Vt4Qrwv1pFo17HmsuSDCtQx1YYwjzErrfaJQ3wP2hGNdgL7Ea",
  "key16": "2GSRDmEmu54T2wLgaKat8kSEMhVBXjjiaUGDBdR64mc8NW8yuDm4pnqhh3U476dyTabGwP6sumqBJcsruucVbMk5",
  "key17": "27SAdvq7MDmgBMc3exk6G1SgUe67ycYbMWzKf9mUeVkH7uFX4mP26AovuuxGtUMyu2nq58bzDz4GZo64DhW5BpBP",
  "key18": "hQ3S3LeUF8cQ6W7Y8ZFZZGJN1JXLYpsWRn18TL7God4bSo4GCEiiAqyWNs7Tz3vSLkDLVPtLgu2LU76vLvbr6WV",
  "key19": "4Ty4LDg5YUW9nsTQHBhkHqr2QAqQ8W2N5HmqDnmKQzP19x8BS88pLTSH4qtRwXGfisP49fFgddEzybRs151tT5mR",
  "key20": "2RfNfjZvA1Zbrwyij9WGijDMsTdgWpSqbF9dSTuVbL5tP4ABEA6Mb9AX8GWzmUn9xiwJfrn7gKFtrGdQpErNvDox",
  "key21": "3fwemaPi55Uw5zVaAgKtJ5tSon1icgEEfhxnPo2YGTvTCeHyRW2tXQD7bfAQXkcCjzzUSwiUeneAkrAJu5wW1edK",
  "key22": "4kq886p68afUoXoUGzRFdhHfP11xE81FRuV7LQY6gYoXiXscyxNRfrZ2CtEexcvs84MuDhoSuX47DeQYFz2GxxRU",
  "key23": "iGTgidqKYxHLbatmuKQacTVWFJKqxfdpbGNBefwnzFnckwLCezutmdrd48CvpnkweYXheN56oZBZpuYxdL42bS1",
  "key24": "o2shW3apB3Fd2ngmiWMFi1He5ZgP9jx55NE7MJRJBXk4Se6upbzY2U1msVYSrFqstH3HTmV3hRHDk9orYS6q4vi",
  "key25": "5bgyvZc7uvajMQR5J7cNuwjRKyed52Gy6ZVobY2PdBPTf9xeR1fK8djDEhC93qbp64rA3w6qeic2FkwHZ364BYuP",
  "key26": "5VgsNYkCkzsYCTRjimmP4EQQQsYML9BVPYh3wLAG4VDowmcGmh6Vqsgr2AViT6Ek3YZ3hXQ1U1g7DU2FnX1ZUn7C",
  "key27": "Wd8reBZJHLaJPCtMRZhRwXt2NiBgXKxtMgUbwDfEuEHm8jBznA843yMoYCjaP8XRH4HHLWsd1ZjWRGVhQwXY4jJ",
  "key28": "4XPawhBXQFdAxTrkXp4row3GWigqb4J7DFDobW2pA3nEREQAaVW28w9HcFUPwmJSiqJQQ4WLw5tP3CUGRrDHSfV3",
  "key29": "3wkbe3rdBHmQtco42YveTSq1ZLBABBC78xRTPVQvmeiYgp4DmMTLnvRPf7MffDwGenRMh6VrmAMEos5vzRaNJWNF",
  "key30": "2P4RQPn3R9rnoE5RJRqBmvtySqB6WZuAdR3i92zFoFXkXVYgntFWM7TSWBsvtNikt3BZohiwMb9MrW4BKJc1UJKv",
  "key31": "2Rk7UzpsixsYfz258u9g2HEfu9pHuhTaskCRX87YTPc6EkaVaUpNu3SU9TyeNCix9vzgFrLB9pzxTj86YEeXndrs",
  "key32": "dqnhYYsNH6W7adfLQZ4c78fp8LijhkvkBFrUdZPhtte3x2JmUbU27hFNoR1tRNS8ghEy1aTrjgt2mbh8n3CmkvL",
  "key33": "5RdnwLGiJkZZCW22T7PTL55EgQhskJzKbNi6sEPqmSAtLHBVvatKQVexkmMgzXNa9ZEyobCrpoGDbBgBwj2AZrUm",
  "key34": "31Z3rETRgmUMMVzCcnTXpe2PKxHZgNVp8Bp5FvKokkmb5pYTi97RWHNt3M5NTxo8pnBaSuC1jELpAp8sHhJoqZdx",
  "key35": "5W59HQGcgg7oP5uNkxj8QjmrHneQHDZegeJ2n5nFqYr4yf4mK6iGE64LKd3D85PpQb6RkDtqfJDj3Pvaemr1Xmiu",
  "key36": "33GQseog3wCL75xqYyT4YuCcKT7HXtofo94aqUKrARVuTCKXtU2QAP5CLhk7eunZgfHkkdewGf2Nng4fN5dmywN5"
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
