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
    "uA72TB7C8a41dPjrjY2iqtzdQ3jWwjc65ESkJqYGNe5iymupX4CdCGgteP6U56WMXygXZpqA7FcgXBkygtD9C5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mt2XBVkTDT99nUnWPEe4Wu8JFx4oLG8EsW5RQKWTCK1uunfAZ9JquTbQkc8uam8aQoejLnMWKXvj22GQeNDMHT9",
  "key1": "j9tCV2vDusDYAQuKLdCtGJnquQmtJH1mnttM36Qf2N5scGEky2CuTXFwXy5H6UqM8fDt4TTNYN39QMv6rdBRDaD",
  "key2": "3Viy9bdzkpwoQHbnDgVZJpNRG5vfUt48p8MaC8xXjf72dFY5AHzsZxpXZD1zFA2XWS6Lvnt6ZQkMGgzDcrbPAMWZ",
  "key3": "2xywUSeqetUod5NyL9Ci4D4g9vifra3WxTv2ueFaWZRWSLTKqYy5272Cj9Kghm49oU8BggtLjSgVqiycehK6uZqr",
  "key4": "3x3FfDQ96ykR3MNdHy7hfJgpX8EnLW3V627ZZHE5S3bQ137evw8LT1BsBiGW3USuyUJ5k47Pib2TZvtpLR4vjFLp",
  "key5": "3LNmSUVLMALKNtYHEi9RXSf4mTbwDRoLTTEkrs8U1bagQhtpEEuCBBhzDikAN46fyoVTvjAhfMNns7D7BCXtdmmF",
  "key6": "uvLBEmEVenozP1xQVjRmt8dekdFjpzJFksX9Eop5RmK97fbaXPGUMYAKZNX3zhbrLmwjzJfTtqzQ7sg7khozcTt",
  "key7": "6YabGYqpfG7ozU3BLZwy8JQHmdrXUGhXZiVZf8LuBHQcRLVreRpBzMBurDmrGetvyRYKKfvyqw1fxHixZyvVmGG",
  "key8": "3v8m6mD8JzRMha5z85hyJ1hktqxwCae8wK3mLZZroB6YVTfifg3YkFT42ezxWF4RiFsWgBoQRPXBV8tY2aUPVZDQ",
  "key9": "zvg8pkKdaKf4GUJvMihZh83gJw31mtX97vigvMpLN29kT5R3eS6gwp4iUgDH66UagFA359SL8pHCsoF2Zz4ZUzT",
  "key10": "22z7wrhWsvZM98bqzazj5zHKVfmuiJaku7PGkBf3WDcyJ7MRcacavdDzUpEqJuHDetUNR85Lg8W16gyvmvSBy9AS",
  "key11": "2u818eTfUR5AoqhB4ATuj7TuiK2NRUrPyL1kfsMakmAgvrY43x4LDhyw8zyWrDCxgTBpg39wnkSRg6FVxJXF2Vj3",
  "key12": "3bRcZmTWxRma1jBA3aaqSacMo8CQWSTVmh4EsRsvrAzGKKyGwrPbrF7M6GocA8vXtY17WkYG3g6UTyKUd53Eus3W",
  "key13": "zUSMEENykTFxHZaYPBP59UfHuLRZmZAS6agVf3Y9Rd4iVXEqNEu56MWvWTj6552bCR6VXt5xJoZS2fskAcUpPDf",
  "key14": "3vbvcCM42FGwV9LCRr6tzvGWY3d1gemJnKgD3ZE4C9QnZpHphzaouwukKcYwJ1SHxk5SihGEaGxYH2VmwFbjQt36",
  "key15": "5C68vi6C96NYQPcDqZ3HG6pP1ZGyCEYPxE5F14y1f7GbKLep62NGHs6seQF1737TkR6nCfDZP7pRsvFUsAExfEyc",
  "key16": "2LEA6pCttWZw3zgYm26yCbbQuGkhxkhNMj3i9E2oQWkD22T48e63iPc13dSL39EuyrVUdZG1WTRCVuQFL1cGTLGe",
  "key17": "3FDJdkLB9pAzydsFdkaPXH48f2VfJUHciQchhwFukQmG7auCxU7CNWxv7aTyrqgi8XAgSuxy46Fvm1fMEf51wbbb",
  "key18": "2NRTPub9b95XumVxhhA2URRWFT3VUT842rkUsLoydVRgGkLzCcFyj2G8M9RGo4KP47Trkk1vfvQWs5Lq6BkLVJPV",
  "key19": "2fs73H1BYHZSEp4Qx7889qinLN4cbYXnzYAbU4z7RCuo5qgyS5anQgnkvVY53tARtqok5RZuMMXN3NR6icibt6Aw",
  "key20": "4VAcM25zzFLTzp8dkuLpMPNFZeeLxzePW115TxB78Gf7G922NwLNhGWXpe811dS7excxWmZjCwCkY3bVnBNYYsvW",
  "key21": "3A7WVConprijmBQSWvYJrDfZCtZ5gmFPBprzBLGCTz8c4e31Ku2PAL1WiwLF1e9uXzwrb12AEdDoMnukdh35XHP4",
  "key22": "kg9mQUiEDf77MJ3VSvjmyrqqDKGksmD9tgdcoiR3LSAzFX4PXyJwkb8jjRqUXWw2PjaMSZb2fWeBGQhDPQhdQLT",
  "key23": "5r2v12fcAq9ebDezb1fGoVyefKWtZumXH5yM2Xbc8gPEFNAizR8MA2YyU4YMXkTRAeFb5tsMM8cLuoUbK9CbgPfk",
  "key24": "vE8SXdSBArVi8xAoV2Pm6vuN7PAT1BW4uu5PYQifAKqrNKLFRKFCuGH4sfqFEUGh8iVV2P32wcZbWBNmfGg6rGW",
  "key25": "2kuoPJNcMQMWuGrDXQkWsZugEYXRVvpi4KADkx4ZtEprCkna3tEwLxEHARS7kq31jzmXx6EksZRbXsL2mBPVqpnF",
  "key26": "26YwRoYewNdfpVwkmzeYZxpj7U1amphW9htz4BB7y72HrLvj78KtDMko9M1PSNDN4YUxGproSXj9fWoq7mneNEv9",
  "key27": "bDMQMtMmJ4jsSaLYsZwjCW3aZYjAd5z2M6a24zmdHo5WJ47wusf743yN1bJYayXJRov9Px5nwR49VvXyZsGkzK6",
  "key28": "3E8Z9m6sKa2aMfAxb1e5gKFqaF39NsVsVdg6mhMCyP52CHkRn9mXWjc2a3xm5pBcm8EofQ2BX3KNJ6pxb8ej9MHs",
  "key29": "5yTrXYAMTb1hBts8L275BoP9V7k8WuizBGfnxZofc7JZroB6MUXyVR1jD15rg6wdNEarwy6gQa3keEM7itBKASF",
  "key30": "46Sek76KMk26k4xdNjP46RjpdTGJWtpw3pVXWW7JhRDFECurG9v38kw8wx3RGoAHFVFFA84mRSJaWwCBpiX68rED",
  "key31": "2V4X2BSZCMLk7C4b9GtczBGNeFJspYQhK9jdpWnXgWcsvEGPtZfyuqWFHBc13K7syJF6YbVYYEwJ7oaU9vjooauU",
  "key32": "5RdLzPidLiDCHKxJSRGHixDprrZieRLbjZpesNyZkU4qDr53GUu82ZFqFqeN4xeJQ8PBFejKd178MnaXyc3JHJkJ",
  "key33": "4n1TRiMsg3xG38qxLApq6C9Xdbs1dnMja8k74qhV7hLV3CUfcLsH3nJJmRoLkf4dZDpuYYrnwX32JneayDyauDFK",
  "key34": "PuCrYAKWcjDvvEiNvifFqGttHfZCp7NNwUVBtbsRqg6aPQGqMMNeRMcAPhFdd9wUKqm2WZYBXFxY6N6FEQDNVsw",
  "key35": "rHDhpzMzLBJNNd3M6P9pbf4nnXFWkHkmAbq4XpafDpwUT81BF44gJQAfEeD5jcToPc8RQY8Q6yhiCZN5EhEZdnb",
  "key36": "5LZ5nqgVKSaLHDXeP4Te3Q8kQVAyuXpA8WbnMftHWBSuaiikzePdHSpAqkr8Z9fokKuQ11R1e1K7BAu62Fhqf7WK",
  "key37": "3NWYSC2W3qsunShiPSMk5KLsrYaqvN35RxdfUcuS3r6MfxovzDfMQwtgD4XPYGr4RULMiWw9XtQ4R7urfgK4W4ZQ",
  "key38": "7hFWHBfJ1wy5m4P2WpanyCXxT3wgao9SpxCfG3cFh7S2PKxQXauc4E35bCVFzhAspmdYeat1fzw6zGMDL1zyg8g",
  "key39": "Y7LGMvr5eLjpqYcAfnLmxYTtiSFXckMm7cxdUrHJwcXU2Cb4SEdx9K7AQ2beUZDYMMarT7C5NtJbbyQBim6eZLt",
  "key40": "58kK2wrrc9CAsTfqCsuaCvaH5zeEvGYj192zRDThEaAjmEmyUqbaLftG8jPkKwGU6xr1sqqPfottXqxRoqQ3vdVN",
  "key41": "3utGG6AUKeWx8NmCJjLBu8MhEWvaEocA618x5zAibWrYkQyLTsTTmkoGgsCpz5a3uEwf47TCaWedncu9aRnaBeLo",
  "key42": "297oFSbJKNLYZVi9fhkzEeFebk9wLsTavqMF1sKbpz63YyCv6VCmuNyVEq9pXLjTm6EMp1TJCai73D2RvCvvZokP",
  "key43": "2m8pG6awGqWKtuVbed66eW9Ha1gXwHSY4dfUVdSYs2czR7Dn731tTmkXrpMUEQ5bxwfKRH4THDDmcMydXAiDGv5P",
  "key44": "2oGPhuCmyrLZMt1T99BfG5YG1TJpzaWn57xEhkSVJW26iPUn8ur5wiWTVdLG8tHYJzYMPPxBZeWFjE3peMipKTZR"
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
