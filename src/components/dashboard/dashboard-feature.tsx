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
    "4JrMXhGXadqPA2BUmHrb7tJi3gpX8gKumC6D3jkNiNqFTJtY6wAT2crZFT3mhDiqb59CBqdQUsKAS7ERTTZn4942"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMhjbpoqh3Drx54aWbt7o6QeXXNJF8hsvPu4htm6458eDE9BbEcHaw7Prb5kF7UvmQg7gxLhFZ1WHzNnwRnSJAY",
  "key1": "3mRt1Tih3Hor8GCrjrd2JUhDbgpKpaem4Dhjp2eUWvBY1CvqtGdBgCNokTV8VRGn4tVLqehtm9CfTWiqAVdNG4rG",
  "key2": "2HGJu9yDhyn1LeiE9cWgqyKMSuKdKLhgx3So9eC31Pgu9QReeNXiUwZhv8dhNLzBQtQVpQYdiewLmbQ1LgSnavai",
  "key3": "22PFSkZc5zVk7Ao55GZqzTQyE2NRWRkqoRsXw16F34v8ABuz3qwfNPxhF13ez32DZVoNrjQwSjWoeUmwCFJV1gwX",
  "key4": "3QkriAd2556evawGLsMEJTq8JseKj7vLKezYRvL7VXB2X1BF3qc4KYu29NpepBzkGbxSV2Z8WDWXr1t7nBpLeRk2",
  "key5": "2UbqHpjDCPz6h5h6uwN7C9dyjSiMvK4Tgt5HGBwZhbWUwb4SgoF2k9SEb8dNeYqGPtQbJQfe8bBWdRC1SyEwpbu",
  "key6": "2xQVXWZxrbEsomXU9kwmfobZ2QMJhiFHGzJ4GY75V5kUDkuBgaQv5woiftR1vM6319wsurU4mWC78R9SkhyCANB8",
  "key7": "4Tfq2VuES6oghS2xsDuiJoeock7ghNTjzQwrFzPuHVsBhzgWQzrWXL6BGUuXZ2bSRaP24NnKhbQb5MP88NDsCsFb",
  "key8": "5KT3JCWPHqKh11Z39DgUeo7oy7z17VxQFhhY1roEGb5zCRcWissAkpDvB3EP6LHxEeR4A7rYTcfMEQmbSxtGymM1",
  "key9": "2fvokKc3Tm9foA8U5VpotysnaVH4zzm6xpgdzBNqq9AhSpNy6rPDDQRJnFakMbonRpfEtgrWTZqvYskt5Hjy64p6",
  "key10": "4SRziv3XLtJGDzSsuFW5dyzUxEsxQNM8rHxFBLPkZpfCDW41EFapV3JeZEEg4NTx3KWcfqx58Qu64dx6MAERmr7A",
  "key11": "5tLj49QusJNuxx6r3E83f1fDFzY9qGUTHe14d3QrDfYduozKaSFB9wgQV1XBn5ZwSyu4H5yYCoU3ZVA9HbrcunTR",
  "key12": "3LLmDDRMUT9T2cRxQL86R4VKF9W7fzCm59szmg9wTMvLVZWAiR7RDSPR93hmVzEKV5MJqatWWH4BY49QkoCWqth7",
  "key13": "4bFWDSUWzwj8bTuRpDCHmLyYN1isw1E5wX1P8G5uUDqtUiVh6ErzFPV5T8KFL2RmNJvo1RseBXheRim4Vz97isKx",
  "key14": "5JHy64Sfa8jFC6R3HXgp3acpKQSxE32SqarAHxdt1BEm8asvBnu5XS1W1sUDNKYR3zfNrFAampfWaJ2HBiaB51xx",
  "key15": "SncENmCXChzzHNEWfhRnkKVpQiNu2mBGWcu1MR5KQ1U8ptvAqZaqBuenJf4c67Ai2qRTqF3GtiQ7eHC8tXD6jUu",
  "key16": "24K6j23yqCFT2zDiC2NBCp61oV1s2f3k8qNCMA6yeZFs6Vbs1xPrTLCv5dN3jg2DyVh62Bp2oGGTL37A4whKeMYu",
  "key17": "2Y5uo1wxe6JhAL3ghE2gTzBeJ2efUK3f5w2Q29nTUK75xMmViGA8YkRdDLfHabaicaLPH7jwhhgnTxNLZDs4E7f6",
  "key18": "24NmkVPfDQuJpvd2VMvXktREA89hR7Mz1hqQWhsLgyrmWrVJfR22tnRyDmoHw1aBD8ehPFeVhtuzLw1u9SapwUZB",
  "key19": "3FUuybavpJbp2pVWDUsCn31Cchn4WLB4theDtoCNcyQntH36jPjysQRBazDAPdQJwzrqT6PYcVyetUmkQff76km7",
  "key20": "21V7ZNi1tpLZD2yQQ5m4eS5EN8HHzzeSGT5QM7VTYfPfkyBPy9tWbgvaGkL9xXhZ1iLgwpWP3BwZDJL5iiwU3Qv8",
  "key21": "5HreGpKuMr22z3F6jCaFKRFtceyorpc4E6QjRyQFPo2H33mkpbuKH3SdgYUXhZfe4psL6qZy1fVm5K45STnRqsmb",
  "key22": "4KzATBFYJmkKTjUcDs3DRM7sNyBx4kVVRHeqr59HqZTc75975bkijBPHnvmACK1bc2bXFD3NBLmAUUF9kiDDBxMS",
  "key23": "27Pgie47vAEsKxa8gsVGYwKXEYbWckoKvNT9tfvXHaz1SYvVY5GeDuFcTK7H57Y6rmZao38KZwEWnEVZCsVFyzTm",
  "key24": "2PBSA1AUDWF2azCeMuwZRtCCSZb3jpZATPUeXekboJpdKeYqGNQa3Da8awAHmpyMWv5AmQNgnSWPwdB97EWWDEx1",
  "key25": "4Rt5TMVX7rVZzZaWdPzYf4SUkx3uVTsstfoko8E7eNAijeezdwQD5oJorPJwN2kyHwDyJYC3QYUKZ7Q4tSxpNsjJ",
  "key26": "536qba971tydmryTmf6ysRSiUpNFCLerNNsn2ZgaY3cNDjGj1oi6kpRmn2hCz3uPQRdu8wg3FxvyuY74Dcw8ahth",
  "key27": "iPN9mxeNuQttZirT25HbwNvY4wwY3vKaC7n76Rkysu6G79CmPKaGZMB1CNnEpv42539BnSRpP1MkA3y84XoMEZB",
  "key28": "5XayRaZdbKpUodABzEKTeUeEaSnipRHDzgukTFpaZ5xy5VrAcQGfVAYttqwFHqbLLZoU557kLtrALNNZbtYb5E21",
  "key29": "5DUedXy5JG5nFRkFFMSxMxSsNLZxWKSbaSvruxniKFL1QJotMwBAucSe9b2N5PxCYFZb5VtN3bjh5eGP8TDioLbc",
  "key30": "4TAmiTRx86GbzCEDA5iGASmpq6qUu7Szmub3zKzY6GX1oLdYWqa67Rv1gLF3uZS3b5Bozx3TMFbaxeKJtGhQKcgT",
  "key31": "44Ljh8kMdouyV3SQ67vdWBdH2HdDbXLA2JA5TZ62g4dns3p2c366X1FQ4aNhmQiWtzbqvCKAW8HvjEm6H24qaNBm",
  "key32": "MjzdfBnLEAYmJyFnU4vQQ2sPvBbx7WjzWvenG5EiYfF4rQkLyzTkszbxZgcfxRhWDVhaiZHtTRFMb5ogyjNVtwJ",
  "key33": "5iUJYHesPC6b3xyCPxXMZ93UnHEEfmTNcveZkogHcVDVehx1a28bPDEbrxexE1gBm9r38EnLtnN2SzypBP3qk8yi",
  "key34": "4tMf48t8S4XtbnNHhuHG4rH9SffZCiKY8u4coHKGzG7ULBQQYzEvyGQFbjCyW8yafJwGdDfBi2zZg4YZczmtpZ8v",
  "key35": "4Tc2FZGG678woSNCxuXWBZQ2QvHWkE3JiNZa6S8aYPUkwbVpKHTNvR86FV6HPaZD5Quzdqg7P76KzbPcRLL1rsHG",
  "key36": "chVd2P266iwmJZhJgKRaSYe7afEYBtvc27AcS51iW1viYdLcvYskUdgvTmWNW97JtCavSy73ySTFukPV2rRtDuy",
  "key37": "5oX7CAGQP6gUk1VgHJo7CVcCBeSGxJVosJmUKpPzUBo5Bi3EPpECsCVNazQJSdkb3NfwftbuFHEr5TJDMigZHLbu",
  "key38": "1UaQuS1XLqVfj67JU9GLHAuAdjNyFXYsWL5288WLj8Nyb3BmeXcj7pcTHvy15MHAXxpmrbsTUMVsyKYiMJyaK3P",
  "key39": "3efbQkiQFKq12iQ13mCpVyb4sL8oYVYRpAu67oZh2a5BJVPef86iZ7EDitsK2AJxPCw2UChsriy6uDaxshF4GiLJ",
  "key40": "2t7wjRyRyWvhahWR8KG8LPJxXkKudjq4hN5WrzNoxMUxDF97ST1nHkKgZ76WT6RANvBufoPLnywcXvJGCPMqnRZq"
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
