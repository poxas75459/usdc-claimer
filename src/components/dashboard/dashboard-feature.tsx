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
    "2G7imdCWCtMhb3KNx2V3RAenp44ZU9pMNsnRFgqZQvtz4EVuzkgWAGd582p3F8UgvG6Ed5JZYzPtRvG9zP55Sq8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qPbeQ7KnaRc2MM2HDkRFRgzDirFvKbZyTMrjNuG9bVWPDBEsqLSGDEAd18WgzjDqgfxCKypY7BJt3v9wKG84i76",
  "key1": "4ztmV4vQPR7uirmuUNf7LN7bnMeL4Ufo9EPuh6XppjvV5jqu8Evn2fCpKLsmEMxY3ezEkSCXghSeHVwXf7taeRRn",
  "key2": "JEM2QyHPgCToNEr1ZoEdqkPdVUdVuf2KEu76NdQ9m3BnRh6ToSDRrhZKcdiQGy1wNNu7515LGe4QC6kF64YxeHY",
  "key3": "52xYPxwLGiobBmSNeowXbcdu4Bgpu6A8XA2LMfbBcWGGa2WBHjCW5vhKTnEfF25ag2Fnp5bJxHcNeRxSaF44dYno",
  "key4": "4qB3HM9d91xSjFj5uMJE9PiVt7qY1KU1dBBTcLRugDtcvEb2Z3Qsmj5CpGtM25f1vyeqSWd2FTzZNhxqJAtCVydN",
  "key5": "67HFv9uFE3nhATV9t7Ky7HkZJUtLzjgMxP5cTiwb9RxLBm6Y77gxsEhe8aPkzVzD9Ga6dovSc21fyfdbqG8cXLg4",
  "key6": "2RMYXQbaZ9Phmb6jvtVjvDuaeBnsYsdXw64zSdH44fnAUsnx7B6hEuMYYxfwPZn4GR5EcXiHudZTBGq2wrErV4WJ",
  "key7": "jYMrG9mWvemB3P9Vh86AukZtsvYvysCQvP6zqJtGGGhiKCqNxLpXCur23FVJJTu8mzHsGH7hB8szi66v9nHSXqU",
  "key8": "4gTorYNFPvCeXtBFdawVG1ursHRuFBwRwWBismqecvi2gGYR5xbjzuiCLg2uB1YN7V1rtAh3VgFv11Mfh4GiEUSp",
  "key9": "Gb1VYUjtvNhRYrkkDq15GZoj4WFrkKeg2UvzvCA4cTimmsf8dvhgC2UWXY2qyg3ogwKco5yuhCSdkQwAbR2Yv1n",
  "key10": "2VSNBs8CYEvEYXzeq8hHVZdtuqyepN38C8pgwGMauugtCtZyJDHpMaiGSg1pdMJNDqNCG6r8SMkMi3hyt4QsHH9J",
  "key11": "Wwx1jVcFStviSVGncits72JgumLoPBQhr81Jg29Sj8paNeimCVoJcHqZP4QxoVmMEbifbWKxzbh1cMVGWo2vGWu",
  "key12": "423cSUozZgBQ1k2uuxFXE3TCc6vSfd2MHb9rrwuddRibc5nWrDbDFHcREvkfGHE8bDgeZ7kjvZhcJgB6V7eoFDdy",
  "key13": "ZMp8ZEwgbEnCqxHQFVL1Rwo17ewtRteK9gRUdQCvoahpN6UJHCjc16uWjYiYxefcVAU1SyojikpjhUtLCCoUacg",
  "key14": "5queWW6sHtxwmMnLwJFTEb3W8XFrq3cwipn2jyeZH794Ky89Nh54cYKU9MFDMtaLkVXWVP1ZbQtT8NW4ZPnCYNnV",
  "key15": "2XVg4aqfRuPZwPeyDHV7RzocLkS3yzjXgRTjEMpWHTY7XXkzb2rYBPTB8F4fHD48UB7DwRSvSHtnPgQrUq7CmCRR",
  "key16": "3v9Nh785E6DCDnp6T3b5ihotLR2CgTcVoHLRtT8vwmtX88mr2p7PLuCpi85R28agqdyGgY99d7XSDoe3gpHdxkvo",
  "key17": "giweJUdikWtRXBLuk67d3Zegn4KKSQMJ7NJPZ47txa1x1MaWBjVdVEipNfbGQjhzNbEwsrEBnYGndRoWwkb5GHm",
  "key18": "2mhxCJFXmkvH6BwSM9pEnpuoqSgyjskLLCZxGgkJA1UXxczhZFmisHLsPah8fRuh1CZ7TWXCQphouvUvJAmK4NXU",
  "key19": "gWHJmrx66d2MB8ZwZWDFBqZLFpt8L8aihPBomh2p92svdqtojfA1Q5iewC8wi6pzMwhvUeyxcbu1er7rKHJoqcY",
  "key20": "ejgRdHUPUNssQXHAX1a4oEPKFJc3pcP9K5F8AxHRdMK3C9rnBG2RAUxpnR5TLtuSHwkxJdSrsLmd62Xxiw8oprJ",
  "key21": "5ndDzhHXJyXd882Wn1athD6NZM46NovKTi51q9Lgy3cfde9sMX35Pb8UptC8GxZkxGgBoscJZ9sB71aAy9dYNihF",
  "key22": "2LKQrYjtStvq5GaeKpsB3jnbPRWCSsdD9sBxve4kzMgA2GjonZETSugSRpPagvsECBd4Qv3CV7KuNM6UAkWCxRgp",
  "key23": "4RKtxwqwXdu7dAuMbtXJAqCggpjwk4xixa5Tn5MBHtzB8gbdQMBg3XUJSooexu7dGVJSkWMLGPAw6VBKk57NyZxw",
  "key24": "UsrBNT5y5eCcxMdh1d8FBKpdYoJQtVM3NURZJTeVzU4etXYWtB4vgnveiLqYnEQgTuLhPShFGS11LYyBzCyGYtS",
  "key25": "5zhZVKEBGHp2GdJpbDVqSh32GsDssm8SwSJWf9dVKpttjaGAMXANoRGsFVap7ej4K4Hw9AaiAv8wuxqTW77cYNpg",
  "key26": "46VBdSRY3rWYnFFGL4w2PAs3mb1m6bZYbebEjg1YD6CN3nVqqP7AngLejFGJxY9dDKKMM671AHrrRhhx44V3VTS6",
  "key27": "4sCWmnwucu5CgTdTJUwWgk2rmAp1vKJQ5GHEAPgPWpzRueRAALkDPq1x7NMfnn1zJJbEAKdYDif7zNWxdW9nHV3z",
  "key28": "2oHAtc1e9DZb3HH3bHgLUASbXiRMAWuWka4mZeyCJJ5bjuESNhGCgatejR58FwqtRKHXWnjvMWmDvZch4Vwup2uw",
  "key29": "2352uZMjTyxfzPsKTf9SHybcyV7x2CJy4A3An3M9ZA1L1paBfZQFRtDsD4FXtqYKp6uWQZt2pv4LZa8f5vLmvnYL",
  "key30": "5ojdsJEGfoVqCf5tTNT2DWcVi5VSS1K8Qj5r9tmWNF1ocR9AGoXZXn9pXgz6VZhZieunfQ3pRf496izz4JMMFMKT",
  "key31": "5vSVC2323nn2pjPJPLkfagUHMRm7sMHhGWRr3ED85cjT7mfZwApcZA57J4TWG7MipC4k9SZb16CVNsvWvZPpNCzL",
  "key32": "2YvXEDgmwzcEAk3kKWLwXeJq9wyWWg167S5nUxiSBLQnAevy71qNxqCf9NSR78eTqkQHVWmwGRJi1zBETKyTwM1C",
  "key33": "42vmkSd9hSgP5QK3Nh5AGwqfgYTuMpv2hQxB4TMDC3XdNsFgFeuEyNkNVsV3vJiSExnSAWiEDmKzn36HnwJvVLJr",
  "key34": "Tkk3p8QX9TR3o11Yd6vhJRxCwNe5aGymbVcCvuE3DHqa9ptTCSeU1Th7iokqSaDudexum2rkumCmyg64LLtBm66",
  "key35": "64EmxfVPmkWSzXgN3NEkgLTtLWU5Uhy9qePc3Dn7iNMhnGW3RPrNK3d8k4WUSy4fgN6Er5H9taeD55rWpCJHrhKh",
  "key36": "5gbdcuyxGSNb16a7iFwadxbJcwQPgnf4qPnRAJv8kXJ7j1LumXM8mdqLaDVzEsd7Fqot6qbZAn82ztTiHUmiU4YG",
  "key37": "2rwAmJHieMT99DMLAaD1u7Bf493BUMqsicDFypKfE34CukGSHkeCy1vCtcTHdUAys8YPv95zf56NRViR4GdNKa7k",
  "key38": "fX5cZDQPKMycECa5VkBWTMi6BKeQzWgopMUJeqYyWajNSGrfceXMtZMWHkmKZLmGfyNXvzhY6wrLgWB9iNZawNv",
  "key39": "66cReux4WEPnrRUVK79Ta7wwbjV4oGjjbapcfgan1m9z9A1WU2VFe9ndq9bPVn3JsX3Pes9WUjLvLpqM93XmdDoA",
  "key40": "3LRLRc5u7ayx889BMbqyxCH2Fwm6zZW1Rt2t6Rb7KKRAwys1xZcw5EHQgWJ9pJurzu7QUAywZ3MjSTnkHcHM3iD2",
  "key41": "5fXpJvmNyVRdRi7t6qb2vkuhJqu17CvbggW52YMaoNFSqM2DkDBhcP1kztBpGkTckVLuRZ3jFYmMvbe7p8pg1wtr",
  "key42": "4v5DFWtpC3GCsyeW78MSofoRXpYD2X5rxhhkL6GYd4AenGWEZwbcDbvEYfQR167prYLYXq7YYGAZirsrHPvyDt8i",
  "key43": "4Cr4VxUfAXbRA2HdszKbJc549ELMwZPYEBeiDPY9e7EEmSFFuLTPMLroacYy7zWD8LhjHKQp1gDrCfZhPZxt2cnr",
  "key44": "3xfpVjmXB2m4uCnx1VsoWZv6NTJxUP1WoVmoxbraWpHXBUcBizu8f5Ygvwm17SsWETfMQBtgRmpE3uZYUxa3ZpoN",
  "key45": "5qx8iYxoMh94YdVZL52jjuHL7L2e4vdSHptcxe9hRtrfpgatWksKRh7vHEfWKAmWVTXhXySnyt3sPuyAQLPxqDMc"
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
