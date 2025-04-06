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
    "4xRtQjiFBzgYTNBgmatDaPBrKqZ8Av4DY6sQDWZKf8hManJtExHzzS9u1eSpheV1hTJrDaaGdmWuSC4K7qQurPJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RYr2jSSFLzY78JGKiue4eBKhbbbNXvzQGMiUkfYw51F3D4d8SC3QPWrNeegbuFVT2ugqt1iRRaN5zrxQ9ugYTXa",
  "key1": "3F6a2kKM14GRnJjh5So9xdi1t1RpnH1rGpGALxHXdRRnggp3WEPdKgUGcssb6ofhrHGCcPPi3AQmbttcEAXencr8",
  "key2": "3U46UtqABAwySmfUVRv7khz8EBuNS63C2K3GYCxYTbQb2W69iCcpA9sTSX3iV2u5pRJ9Kr7orTgbJBJDBXBxoipG",
  "key3": "36qMndyj1q5v9LmGDKaXqahPbm6P8FWXRawowupdhpd2P2VLbN2sTERggoKcN82GyH3wSpueQczGkUrX5EkJMaqF",
  "key4": "5AnPqVzDKMtKRz7Ctnsmo3id7EVHaLi6Zt3Si83hkS1tKSBSX9Sg5fwvasjNMHYboijnB3V5pUkSoUCM6o7GC7kq",
  "key5": "37YQQCioFXgWPSev4d6JWke9ikpk4nPzc59VkR3h2aiXtfa5ZxPfSu1dJyeftFZ1haRBnz3zVXmpmjBGDkk8Wki7",
  "key6": "SkiE5kaF3iTVhn83PkVivFh4NzRdMvGgsrrnuakGg7VWri8Xz6e5yQEsWR6bjSMzHGmcqdH5TuWZpZPZekQYV8G",
  "key7": "3Cf5ZARL8suXGm8Hj1cdrqKreaNeNcHBi2CVE6ygPGFNBqpZHQWHWmiH4Yb1iQvdh2X3L8SvRT6Ek54yW3sCRx8Y",
  "key8": "37p7x6755ZXEXccv2Rvp1BizXArqRTmsMYVVimxZUxphqqS7fiJ4HKzXta13NkuV9YjHJ4rebwj76jomf7aWfyi8",
  "key9": "5EYoPkvFU6Z5DvRPQ52reRd3DghPgh9VxdZ1hbA2UwpgNBxoTTRPsMBN3axvrVLLK1nGDoQ6wZpcQgdu3dFuxqDA",
  "key10": "3j7YJtpCNCAZxW3i3khtwmskhaUsWReCNLSqEzKhV68UGPZ54jeYJ6bSRQHXiot6B4eYAbKq6X6e2qZ46Qon8x8m",
  "key11": "3YXQY2WH7jgFbJXVS7BmCPstdjbJWeX8F4MzrcSpx5ysDUPod8cyXjhUANvgTwQihSSsxPmaTedkcKSAju1RKV6Q",
  "key12": "3QartidvhBb7LPaLbPK8SMkhZBms8rjt32BbGGBq6EH8CioiB4pdARs8HnbKPYh7kvnNcT2XBs8tjudE5M5qCq16",
  "key13": "3Rj42e8ocgzPdKrMjeFCuhvJaFaQG6AAskvrWayiuqYYVX8vXYzuxGrZzUzJ6UdHQAsikxkwSgKmEBJL1pSMbri9",
  "key14": "391qr29g2Jpcbfw2essMVnUDiidS1fkjKctdTTfHEYbUX2JxL7dtyRdMDYYQYowyAXtUBSmPhsv94cxKg1qHnuL4",
  "key15": "5mcssdYs1D4PxZh7HnZDX8YHKr2EAAqV41TSebvDDb52Jyf2AZYSBJSnSpS6HCEGHtTvktsSj1je6tp1ugiWpoLr",
  "key16": "5Q22MM2cKJqsHCdMJSGGT8gJ94b98GmCNAsBnxkn57MCj9evSAvW7QVMs8D3zMvY54PTVuw1zDv7eAjrLFuvbwSU",
  "key17": "7PLQngwhzQCh2fQCqz9JicZW8ipUDRMTLZKKqgRepmDQQEpnBgh6V4C13svRMuQETQChkLjPoLeMAGvmUBjTeHg",
  "key18": "4bMAf6ZuUdR1VGSAfrjGAfCQng5gqRNcACotWMvieBpZ282HPvP2CStQgkRQQw4WtYVSuiUZo6i9cDERaA2EB5Yo",
  "key19": "4JnwANRTSFRfPKjbu55fNMsSK6DJnoNJvb9HR85zeJ7qZDq6eyrjDHuBvcxub3D1Jo1bwtSok8Z2Pm4bwgqX82bp",
  "key20": "VqrqAAj1sTJ5UeHN5nU1PRbpbB3Tnzii6ehaYqdYftys62PwHQu5RD89o2dRyDQzettpdi11T7M3m2cxUQKF8CP",
  "key21": "2ecTHASpviJvzB5vZixfoZyWdW2PoVBWXQtnPNuFZNTiS2v1DKVXoZcM4SZMg27RAUwVhJmS5jshiMqHnDb6G9Vq",
  "key22": "4q3Q5arZejMWwFRGQhrqJnZX5rddjWhPiuFGKDfr1kkJQCgb3AeFoHGw92VrpZ9tr8owcKJxXdMWZKQQ5a3urKay",
  "key23": "4nA5WsDwSdxisLeLRiU4jhjz3cYZpfAzFSxfaVJoQLgoFx6j2gH6sPcXQ4SSFNYWMCKnRiKiCscBGJY1cLsAmDU7",
  "key24": "2k8vAZo6JttDEc5Z2BxZ49urcxQmwbDVoGerCVjXtMBxxb4Cveze5ocJA6SgHTTBw91eMY2ETpCS1vabbBkNNoVJ",
  "key25": "2oB3BjNn64Sf3KbsjyH2UpmH1dG6eRJvuQKwxnhZKunuh7EB635zJqRzPksw8zMkG3GorQutRv1E9PNDRw7MnRgV",
  "key26": "5bwJaZQtFudMnK2fkkawxvyqKFZ73ehqz5gKfoXXpBp7afq53KseEeNa2ZB2gNyZSchWLkzarC67q9JiGwcMKFE7",
  "key27": "3jMZhi4GC49tcDLoujDwkiW8PrKbL78Mw99KxhXvYa4GZJo4zXPhYxfyuU88u2nE944BicY4fSim5iAuNjBoNA7z",
  "key28": "3gCNUAzZWEsjYop9S9yQqm29RKLWgWRuKEx7pAJBmen6mECKN9oFqu9AM2RW6LQUWMFNZTFcsDtcVaX5kpSEXFNV",
  "key29": "2BASRLz4vQ8fuK3MDgV1x8PsWFh9V51kvNPJTW7jGK3Fwd7SKp9ZhtxrqYnFGwmqRsgejpRVXFyzyxzmrcjwm5fb",
  "key30": "3K1ktRPSg6WrjrS9pfiGXaC7Y2oA2HHfb73VcuDAfVHa3MGZZ5PpixpomgRdNUBdJ1WeTxyS8gJdSHq9uw3UjVW",
  "key31": "3hkYDQsQCme5oJfzXTq5QVmTwuDFgWEjGFh2jxCDT281KoSEgUBUXuUQwWPa2fefhgZDxZsNx4M8wDDyLE1jVQiQ",
  "key32": "3Av5iSbyNCiZcu47dMR3HTwuf5ubJiYk2sLv3cEixSomnqGkki4MD39iCatZXaFJybjsgYHjQFFsvNzQt2dZA8nX",
  "key33": "kVJpMegDr2MyrgjcdHzfSGKUeR4DhqLh7eEctiK4ugBMqkrs27LCnVoZmCyPXdVdT3mHNo9QzhRCA8MwS37E8ct",
  "key34": "41ymKa8cqsDUK6perNS2qKLibUtxNtAq5xfGR4MuwJnaJx2joZdiocQStRVvLGBjXbWnow5cLzqvyWk5kj7jLQko",
  "key35": "5qfb6tzWzLqSenyw8gSxdweP1huiBXzFT8P2B6ELKzNjz7e9GytnAd3bqqzR6x7e47gDnJ6VCzY5M8FEwR3CShrJ",
  "key36": "2HHVttnXRCfzQVumL11YKVKErJRTxW1WjF4bW1VP35iJFDKEHiGjk4nvu9dDtjLZigybvBgaVQSgYceRHX4vMTLr",
  "key37": "3misgSZUH4Bdq2hizBYLE35tuhHEnkaGvKPjUTB8s6TkzrKegQPWCdYPxJYsRPVrFsVo1RDmrRNYy59FpesvTVLj",
  "key38": "yewbxobFThh8n5MtQtmem5uCD4ZsfbjjkN3KgFE1SaGYaWaoCgNgBwMXLW8ixjs7UVM31Tc2muTvcsZT1Lf3nrX",
  "key39": "4t35bppP8Z3MtLMrc7HZQ3Ypu3EQcVZULjhxdAYeyXV23jshLXksKZ7LVWtHXU8mqHyBURbHCgTtYzSGUWj3Mxo1",
  "key40": "4yn9Gh14VTTf2mpm2ymm995GyMVUzbFEXB3UqGGZ9dxaMVqPtEgwoQx5qe9WZuBbp1NBLnuqwKyWo26TUY3A3R2s",
  "key41": "2KbQzSrh2HVmZwoG265mzqmACLCXQrJRSmrrgWfCX21JWotRgLyBovq1AymZ9EKhuFdW9WvsLk13p3xXuXgNM5av",
  "key42": "3Kt2sMTDxNNapxViCAxXzh43m7nGf9hxFVRWeCy1B2VnsmRFw7LhBdbbwfV4yaxjPxSTbbmJqj6TaMfxjtJVfwk8",
  "key43": "2oYrXztEoPnAdR1BD54ERGtW5TxsBbGu7RnWA4BdvSzSWgLVDPjHuf6kKvhFPoT1QCeDCB4wNbQum3VAm71vr2np",
  "key44": "2HGs1MX1tCorbw8t7ZBkYn6eNCs9oAYtxoojtLuiXT2GLbYo746xpsnbnjCeUvws2xg9qc2o8x2YR3obW3DHqWCM",
  "key45": "FMDLCDUkJAcWx8aJepmp79UrMXHz9CWV1DRdqo6UPeY3zMf2Vv7gSsyA4iGjhu2qWGq8yNx1zgMHLGYDXLcqRmL",
  "key46": "2Q2hUqGAo7jCicZj6qwtJzNeUuPRasdzZZ2ZLtWAZvS1gEGpFkvuw6sfisDYULkX3zCvjdAqDApdX5ZxaBzjrpfr",
  "key47": "5mmU3tzSQAvBvHHsjBJSB2QfTfGqnvM8PwjBf4R2dLtuZu2ddXsNX8LxCA2mcTJJQp2uRnptGSVnikbyAWefkLKW",
  "key48": "58cW6dYcTbVBrTYqfoU9MpkLARDXYzLoEewQm1CkDS9ZhRXcXQ4iwC9vwgLRcuEVKFFJxwharYEejbvh3VnpiADA"
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
