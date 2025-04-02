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
    "2tz1kc5wwfeWxJdCvpsntv9RSxh1kuXGSH325T1pW2iBhvNqaRbTByHD6akVG8fJ4y2dwYx7mQWN8kjpTsi7tFA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5SEVV5JZAHXhmcU1weX27K4murYuTxyJVK8hkaCFKL15EcqcBsTwxpW1S3b57YJiebfxAQk1Kh78NcGAQtcq3d",
  "key1": "5TpFh1JbNFFjGWNgyxeoQPbL39p1NVj5viYWpq9KQjtnWzopL3HWwynZFY1w8r7PHT3ShtxgJW9boMRrF61z1Usn",
  "key2": "58u6E3JJwoAAgaFuxeqvjuhRTukfk9m7Ctrq6JdCNy9Q7y4mAxMYrGG5Xn4cWoyEKBuZJsjeoK6GKB6VciEaZv6R",
  "key3": "5dABdNJY3Z6zyYrX5Z7sAhEbcgoNDAAd8KF366VZXxBEVnxxqybjGdCM3wN1fgstgiJSZxY1V29czFxgrHkW2Kis",
  "key4": "43y2SDQ6w5FnWT7dFNkRmJLKH2Qyr1fiN3TA1jPyz2CUab1FrEFMFWebi7rT4jNWhSigQBvMgMCJuzYRjURXaoGW",
  "key5": "5JaNGHiXKXbdknKF1Vo8dhna8a9PSWrmA4H2jV17LnzyguPLkr9VdUoLuqyhrzQtr2GtA9jBDgG2BBvfU2dbGB4n",
  "key6": "3zGgWS5Mawv1wx5Acd7eifucZuQp6it4qsG1HeXoKJQTTVaptmjPYwNtvTmV1C1gsoC162fanb8AwMaVcZTaTtMt",
  "key7": "5uooR2CY9FGR2S5sTU9mHHpwPAwgJgXm2z1NwF4sb7xZfhRGimgyqJLDg6sWbjABaQt4RBMteCrFFU7cx3c3U4ue",
  "key8": "5BPxCx5sirq2YToAeYw9KRbNxjRF2rTsZxXXqDLPi6cJjB3Gv4DxRxTDWTsvJSe62PP91p1aMzUjcrsaK5gUupRm",
  "key9": "5pcYwnX8nHoCPSuNn1x4wgUBeiB8SmNYbxbTUmqqaL2PemAGsyLrNMuhdz9dULr7QrDzRZhhLCUV9bEtwabmhEp7",
  "key10": "bvmeBbcENXCG5bF2Wbp3kRQw2nRXtNWmHKZ5RjxRfYtPtEn6HZWbWCBt5hF88bdGkXsP7fhfx2vyCQ1aiqdbYA8",
  "key11": "2vG7qAWchvtVBeCrgtRhKESMdmGJVf86n8jH9Y2HVVnG7gmTtF8cspuwetPnnz4nkqFKJYe9Wdq47JmLa7Ww46vy",
  "key12": "4VitNpeb2SxUdTdksQTUPJPCZLwxPawpSk9gddaokUp5btp8WJ4WVyQaHYf9PAftTYaYvHd1oyR5AJmT66L9LaFG",
  "key13": "4Av4uy5HS5owq3vXjtraHNGxnzuT6MvKaE3K3gpRhvnhpLUi4TdYPr1dDKEJ4vvEA9AvNsdfCsHTECZSeRDQmreN",
  "key14": "2iiQ2nFwvXD6Kk82geiNacuk8B2PQzbcppcAvGJYWFowewPLPcPxYoALyd5Py1bC17BCuaH296GFUUc7mbpSPBMW",
  "key15": "67YBUearx2i2CfqyLjUR8kYM834KLvvzmZNVSzUCSeCz6PTqYFHWw4PfxcBy1d6XZ94hr1uKGZBoEvnu4uXsZgNS",
  "key16": "5sbfGordfNUQKwVJNsk2hmQSb3hrVd5nKWY5m5zKpv2aed1o7NdjMAbqM7YUMTbCCh31WZBczZcUPfWcBxZ12uCN",
  "key17": "5jTsC3FEVtAE9RjNmX8Hoc3Ck3C2eGP2f5EoRwqKophYsdoHa19FJH9uW67JxRQv4561sQUTLJQ49XAfrL9t1pmJ",
  "key18": "2XZoZJENBgGEKvvWA1vJLhuyvFmtgxCwAeaAEcB53nDWw6wtKYkuAM5fuVRUz73MzUE7HCbJKZG1xwURfNBfz8s6",
  "key19": "3bSrPoyvZ5a1LZxVqSbpNuEkRx3AyRf5saMmC9xhPT8MCFK43fq6mCBeEbYqZwk7J8k84AWpyzhjLz6ZNNbJW5r7",
  "key20": "3KZDpuhLWsiqimupmiv2fRXJ22HQJkknQHiV1rFDWcRVhQiBmoz2cusbYNJwmULeSCELssvfoXZ7rwy3WLQYT52n",
  "key21": "654b3xkDonPotbUdJ5Hf6Pn6fuixoje4P7nTSmuHN5gTiQnh1chuJMBRKrarCThTvY7X45MQFNFoLggnQoLQTBwm",
  "key22": "5SGvM1NngZWFjkVUMuXyx7H1UXAk5dC2LbZuvgrpxeQMv7u2uRPM5WHSskaxL65tfcgUP5aFCLKJ9dtZxQYy8hMT",
  "key23": "xsDnKBRVdY4Mr64XUsde6nKpVhkWKbVSdgWxHzNckM3ckNj4YDzpS9ELKXtMuHZWbK44qRzS2fiyjWVY8YUWJB5",
  "key24": "3nBk735eujqBsmuMQyvCNDRppqTtaHG52xBeTsoo4UURhWowQxQPhxTr2NMZWp739Y4BHtmsupgZNEYd2nTDSGfA",
  "key25": "3SrmdSu78znKjbc1bFoThNoufpXEQT1rxZrmj8dxKDwA5rQrNX7mSdDQ91WTR4p4fdRu67WFeSVaMkf4rQhT8n4c",
  "key26": "4H8mQPb6SwEdV6Fb5AQoyT7GK9XcYwJq3iv19p4DBEVer4ex6Bjq1m1NgymfeSmdvPQkZ8ckfUSfzTJf4yroQ7x2",
  "key27": "2NC6W3R7x72xD3VQanSNxHfGEufvrkv9gFkLjJdh5TTfpqBKfyNpKFh1mVP9SmbPoM83tRLbXCsfxZ5g3553sP2h",
  "key28": "5WaNApcP6JMh7nSzZC9y7Rw8a27T2uSJDNDyi4Dmhvr7JSmPzaLojy1evMP77Vm5FFKpnTGzZsv3NSc5ejGU8bNq",
  "key29": "2fCAwnV3FkrWw6bqswWruQQdLkm8kx2enZTUKoBUjHXLyty1c7eZHawSom7a8fC3uH494PSZi8nRyifNbefXvLJ8",
  "key30": "wWjNQ4ezxwAWp8SxMDequ42aALnNQ5keiqFcjNAzA7h5gQw6SxuNbB7LM2UBVWogHz3an8sEDC3KbzoCT8f4aFA",
  "key31": "2N69XW9u6Z7j7FTLv1GtGDvYEASR4TqHfcA6tT3AJQocH3Vhc8nMdFRnYmQkv4DepwEZnLSMkgmfPTBbFPLcDywv",
  "key32": "PaqrxCEnNm3JizjzbCiZPMdbuC6NsYMvGyjsmediaJuazne9db5YPBhpcQm7V9VZCQNH4Q8Zt4pmNwZe75tLUfs",
  "key33": "4Mt4RFCvPqbAE6QWYsZv2TGKniyGN8VdTeuSKyGjMBFry6HVfEavZLMPacd75sPKpR923Dk3XNy6Rstb1Z6E2Lhz",
  "key34": "4pF6woG1zTUWCtqXSnzfHHmyJvHgcLBjNgbXbnwCeVE1TfxjrxLnKaWfrjRgimXDzxetzz4ZkkdG1tdD9wFyyz9b",
  "key35": "r51wyHUQ3GbkL3NAnWjE2AjNeDsF55chZHUpxBA3b5gn7KQXjCJSBVc3KdCgi4PEUHnFoUtdqfFog8h2P1LyDJ7",
  "key36": "2bzB8fdA1cnN52VH1JSvhtR9ebBY5xBoXke4YHH81S3UF5QE1QKGC8T55ir3RtknF9UpmaMVExALmhYEDpThP75p",
  "key37": "5YioUsFyAAfaAMstRUwfwiQqEFE5Zbcp9gZLePDm9ooRkCM5a6d1F8fp7hg1mGUAUezwZZxZf55Ny6MCxfgXWD8X",
  "key38": "5pkyyGr5Sn9r48AWUye8dqRHd9NLrrvG92UW8aBPBgEHeKwD5VXzxAn7VhEvU5j86zkqHbz9ipx8VCuskDK1VvXW",
  "key39": "45yLuSuptJ6C8WLrNpqMu7faxvxQSeWwdJcimWbkEsSuDncumDpLPJoj9H4NM2xgmSx2JkBHxUKb82cbjHj24VfB",
  "key40": "3WxUgsHk6Q9SK7dGsRjUof1BqwHbSWzoRgZbANT7x7xXJpyxzquL1RpPR9i43ioUKT8TvhvFe3N43TWSWxR6bHd4",
  "key41": "28yioog9o7D4NLYk5biTsfucgoWw7gZzjtMeb39tTT5iL7xj88JMubgfCcR2bDBmfQ3KKiVcRmS16AwATVuqpiuP",
  "key42": "qxQXqa2wzK2fnFojeww6BfzuYc8n6YWRfKq2gT5hgy3YHX9TDBWSF9FTKnRP1u5v663hd9uzShYyFgtLAMYSofW",
  "key43": "3xmQPzkv4tkyK8SrKY87NSQYV8SDu4GDHauzmEYjB4UoW7Vd3Qun7yNtU9z2z6tgc9E6Hy8CKfYakjcvMRSK4rHi",
  "key44": "3MKatxGdGMEC7euW23NF22TUgrV9EkCMH5wi2tNXumULiQ3m2vbBzzRng2USMUGqToNfbPwxLt5mnpVsv56nBUuS",
  "key45": "437FFytxGYsZaDQro4hy1MT8FyK8EUwJYRzFQrTpuaLgPS496oJ1PW9jiuS9xfy4c3tRkVtRZJAGqfUTnm3kx4vC",
  "key46": "4wKS8o4GRL7F9QPetUr9AaPkxJMxenAVzmdvHMY55AazDujJcKzWe5sJW8ikit4S2a7SfH2iCYkjwVA6rw2m7H7H",
  "key47": "3cEdobCo2gR613FEx24YRN2RRZpoAzW1q4fu2TnMZfvsA7FH27AU7p4dhyrQwPzau8MSULtTzh3UxFBtytYLzdBr"
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
