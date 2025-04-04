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
    "4iHvq3Kyq2jiybz9NFC6zjUseDnLuD8x9GW5KiCiuyN97XCU59XxSG5xScnLEtyFQuHzpoGgpUrYfh7tyr6NFd5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7CtQbmcqZ7iTBv8saEBGFnGPwXaWYvFvyeh1NGv1YVzDsfKNrFN2B33QdAJKUsbUvjsEtDSxtH3EbzBJwkhMTUi",
  "key1": "4aoQkZcuJJFqzVt1JjeP1cFZbTmiWmBittF5TpJu12NnNGyfjQqDUnp4xwJXuJ6JsFToEDDQEm58P4oU2c73SJKV",
  "key2": "5YSFFysYVcx7LE41Y69HmHUakkFHag5hDyYGzgBKuvcQRZzHPufvwwZkVSivQfqSMe3MgRkAJRdQuFyDTGJLChsS",
  "key3": "2wgmVsFQQdS8NBfHnh4m8xYi6NACCti4uQnoh6LSCCwZ5bEajHVWx9RjyzGNWFD2xy8beRPw5mNwjy6gqV3P8HY8",
  "key4": "3hTyMdsAyHyV3pEerKaMNjQe6C2ofqcz8xo5KHbUfrEpetjQ7mPXWMBDpY6hEp8tTotE727Y9RuuTn4PFAYdkzPU",
  "key5": "5UHmAYCNwgehzEqjj6Qtv4PHMJbtexnPnMtFSMfydYYx3zhDsJWpPG93ufjknPHuePGYocZjGnH1oJb823FZYcR7",
  "key6": "3gX4xWDba9McHu5BNHqTqpv1fAFTgeuCrRmwEBMqtx8qqeAeWVEErKLzTcG8ADMfFASmYH1rW7GGgyguM2ud42nb",
  "key7": "up6c9ghzxwc7eSgqudA8a9Cfe9asvj3CQ5sHBag9WAK22inALqogEnHRjWWGfktXQvesHMrwUhKxPQa478KbdNN",
  "key8": "2j7cbsoKnPjt23zpZC7ts9FbyXndiDxsH8oce7uN85STBuQ7PMSmTrFDBxVgJZbwiVr4fhHM5Nc9ZZrNqPCkyMdk",
  "key9": "2mZ5SrUVtXKRSVygjtLrY62v9QuVKEp1QBgd7CUFytuNYbJdEPM91KsoywW3AE1TecEzfEQSZabRzdhKLwCrd3FE",
  "key10": "5FdRiuCWDb7824pXGXv4JcHuYj8czNdHdrttq31EsnY6Yv74xSRtbgMZdJRsvURVE23YsWPmqZVVDCDibkRafjFN",
  "key11": "YejA6nHfFTw4LBheEDNjbCJxMLkmLmLZWW2atWM5M6wbRy7Ef2uTZHXfv7ejnG6kswERA4WQpr1SvjcpeeMzocL",
  "key12": "313zWmMhoAKii7iEWfb7LFR8w4W1DRJbFrSxk57wN7RmAhDub42vLLEavbceuSzkeJmQwLvfuNyaZyEfkdqcCwB1",
  "key13": "57aP3iQScgsEAsWR1rQAx6f56sNLtWac7uH6XrmhpMQbXha77svUwNd8R1VKbqWgdi7Er3ZRT1AkGgzrvA597cdi",
  "key14": "63jEagCjzpg4dehjRxH7T1dXd5gihpjB64CqUSepvYSzWCApkaM6W3zyqvYwg4kZWtqqJJh2rM3FhcifLVZZawYH",
  "key15": "MiqcLxthDhP4brNdWhf4wwT7Q4GFAaaMmwfU27P6yAwPq77NEDbnMkYFUFTVnqkhqVjdd2ZBuiMoPxDwbjT5vJw",
  "key16": "4ZuB8Szr7iLdKKDbui5E2bhszQCkXwuwQgK5Pwgpo3buBXhmXe3pzc1RuyhMP4Av4q9DPfEHoXxEprG5LqQFzZ3H",
  "key17": "4FutUBasGu4UTjQGJ5FU6uEkno9uMXJwHsUfoEKevwDH2Np4cVzSoFfoCJrwmMkaydPZaiNWvJMUM4pZsiHijpQV",
  "key18": "zwwqB9BhphHpnSusnmDA1oiS3FB8MKA7NmSTx2VrktdZyPcwkJ8dcnEDgt9pGL8GQjadQQPSdbvLzqcbm6wM9He",
  "key19": "4yqRoDW8uYm43kNFUXp4adiumjiyxtzBL1RVFuFm55dXHchQEnaqCBSRfrCSTC6Zc1F7iT5zqzJTxq26gw47MD9o",
  "key20": "4MhKFUtA4xeRAoZTa98ck7rQtHixxudStC5dsYXfBMg5eayjEqFN6GvExZRbmnuLT3Uravc3z7zHs9uiWZdvM3dr",
  "key21": "3D8uY1rmsoZXqQJGq6PCKZ6xF3skrVorAQUbz75JfPAZ2jv1fPEJqZCqyrV3SWErMXMJhFGkwCSdqwpKaUEehRmi",
  "key22": "2YGU2c8BN1Gr8vMGpVnSyWQEV8FfWG1fWwihNCTa9Ap1CTgk9JDwZBtNUxbiFiTA95GxdzJksZSsizUXub3f1gXh",
  "key23": "3b1iJFgv6hzPKQQrJgMtag6DGUfxUi8ppatSRoy7UQ3jzzDmz5M7TKvguPG5aiCT9DRLuTWXnUSuDHwgst9T45zi",
  "key24": "CYh1bGgHDohFhJqxgxZN53p1jtxvJiPKkf34M17JFe68dCTuaRofQazD4yPPtAdRB67QarmUEGXZqERn8QrDUPn",
  "key25": "2pTk5FvJYRbMQCJDgiZNHbSkUAfG5DBzEQDXZ45he1VYTWJcZDAyvzeWQwGGCxPpLzrsvCmnV7hn5skpytpSQ3U7",
  "key26": "41v1oH6ZV4L26F9pJYog7bjzgFGvbE39xjFa2CtsMcKnHsNh9UmncVnxuMAEAfq2Gu6Skk26VfcQwUM75TRxQdsS",
  "key27": "4qAXPAXcwyiKvD2aic7CZXxrSFqc8MrikFgUydjXMrtqxRjFfB6NRxUEjukN9dWxbvdufJ9RJycR6zoqxDFQgRwv",
  "key28": "2JpQhrDM7WML6D48b3Giz6CEpC3AvorSsHeHCibchfnnagL3CH6ejGxuTerukyZ9qMkf8pB8VxTYPuqpbu8iziWy",
  "key29": "643qnpgKuwfoe9DHRBCpAomS8WiNxEz1pcTR28RgKiM7vMuMzXDLGVamVHUDx6xNRErGq6S9M5P3X2RoUrFPWrKv",
  "key30": "4dfm68C2th2qt1gtBHBJaUQm2sePr8XeVYfoCg6To6quQKh5iN15w94ZJwkYrspiDMeQarZAtbJrtDGzfDfjiBbU",
  "key31": "5fGky3b3W381v4nehoAM5y5Qkme9PcjW4ej6o9he6YBKK667o9JfbwN2vijdZTSwPdcNe461RjDuKEoVKLhZvebN",
  "key32": "5HLUFGjYWuUUhCsEyr55PrCHGSWVUaBhJFAA8RzYvWzzQDbBu8xoyGszB42BTtAWSepRY6tcRTatGoMjLvEaTos3",
  "key33": "SPMUTVD2wvU18fg4e3GsNwM3mBy2cbab2NJtEXKgUsntYQdStVJh1Rxf5ZiGP4kRvhUfJ3uv5GprZzvJADPH71D",
  "key34": "5DKwrAKV2forkFwMaLDsQquSqD8teE8E6joMmTMmdHmP6vWRrYsLUWtnU9cXDQkTjYUZyqtcYLbYxYFVDxjiA7Sv",
  "key35": "oPRtwE64mPuHobdQdoAjLrKBfXhSgwcBNmUuQ5HtSras2acyCUzH8Usb6xcvBLM4nkmWB8FNt3irf9pGpuxtuUW",
  "key36": "aNrGUFTaBMzsTawsSvCQGd4S5eSnaj8qub4agGCjfKSuqHatq8rxjAkD4osQUzaEXLuHJPbWJU24uCjzfVkQuDT",
  "key37": "EzYwaxdW9uXs6ZtpoxRMB7cSSJ3WjX8kCwR78P7oahnJ8u7D2ng88ySHUzygrVafcqg3HjAMoQ96nrWhXn2Hg4z",
  "key38": "31ESfSwyZT7MmFKqj3hTzLsPcoQgJXqzqkaUQUVf61pEgVZYoky8hvBofsYcERDQ2KsVxANGfZutnkRnxopXqnGo",
  "key39": "LHwVspnncSdLG5AriCj2N2Fr8W2LcpRK6Loo5NdguapFhpbyq6bh6tJaZNaCwkdtFb7iKwJDkYFrZqUxqJiDKQu",
  "key40": "2CMFxJHkV6XjysDum4XH99hzv6gnf9ArrGVM3ubYCKi1gmU9DAFN3FuyUX78tMrwr6hyUXVyk6SngCfbMnKtVMC2",
  "key41": "2BssGt3yX4N851XLaaMGudSHgYpFEREmjzHkwC4q6XSjw78BP4wLbnPYhGg2JpgXvCvpHtGtbuQVnrsDZpbrfoxR",
  "key42": "PDmbQdpVMAm4EGf9a2uKbyYddx7Eq7w1viY19o3rsndM9fdmUQrbYFRQcQUNBZJag6BwSqZpvU7px8RgRRmaXvJ",
  "key43": "4s6p5pzqxCSCAXiuMxKeZ5vSVyZyd7NdMwfRfdhrWPXQjeMrrUwDkm4kAsTM7sTXrSUQQkXmnerRzkpWebXvnEDH",
  "key44": "2DYx3DsvXEFSqePHv2CK8VUxtgQAoZ21od9SothndMComA6FX4Fuyu4m4uKC12sU76tdGKT7kqWMMs2ZdMF9iSzs",
  "key45": "5jgiVwusTdk7gVfMY8mMPvPwoZXEZRinN6Xwmnu1qyaZMMVBoNufEeYVmEdwr5rhMoYxrSbmT4CDjngQKTmoxubY",
  "key46": "5vjyYicwEeSGuKoTTj49qiWeaW8kbHMLCJePbbrKN6p8MeCnTnPUUudV4zG5oJTX3V48RSN3fZXedPuEko5p1MGn",
  "key47": "LF1vCWcdzbN4RXXaxRguyGuUPYMvXyDckTekX2YmZvypMHTNsfa4y21BiB8YdUaa1MMzHejaqNLkRdsJoB7BERa",
  "key48": "2tk3213FAqKd19st2T9r34H2xitKs6wzr5foZ7w6cxJiMUKkpk9SPZbsnvwNxBDMT5qCvF1Bu2Urb7nkiXJHmk62",
  "key49": "yHiduZFBLHvR6mJ26iQrnin6v3r87sCtR1fDiuePdFc4D8U4uKiCQGsfiVuut3qe1sDtFvCUzHc8UDTfdkGNSCX"
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
