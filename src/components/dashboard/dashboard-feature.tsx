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
    "4ENTypqoip9SVW8ztJ1D4BUURyoXwKzESt9DnAYj8LhGFrcVZiUweKKNNMtsduKJAMueobueQK1npVZsQphFFgVN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PV47B3KFeEeKXyrLEME6ARcLbSGS4FWW6zDsVh5fa9gtbwscL2stjjF5JahHkcx5Rt5XaZqxbKMqmyskBNCfs2o",
  "key1": "3BTaQ79gzywSELBXP6WL4mMc9KpzqHSeEPxmATjLeboeyFntY3RAxMtWBgc4uE41Zwo2GsZmaj8ZHozBthUzkG7y",
  "key2": "5Jyvzn7Drpn5P5VjZP3CAMFkDQww1hq4qihXvjp54WRtUc6mfkb5eqQD3GaHC6ro2GhppSCAzcLRuTwAauQmt5Vi",
  "key3": "2RtcWH2iUroGtEdap3ksKzyMusbPsenPxvWcQKeyinZ5nHV8akVmcMr6icUZ88Ya1513EwFuvhqi576vMTvp5U9c",
  "key4": "3dAaP1xB4ej23Pf5KQUJCbkRbFyYajnG9z47qfmFbXRMBa1wEH9ANJyQXABmyaTzRJHUqiMKnkNCQbd4GLPsoaH",
  "key5": "2hQp2bX9p54t8Jf71xHoc55qrq9a85pKnR8aBq1VZza3BGcVf8owMuyuDM9t21muMGyJhFaCt1X1KD92bidtTcWK",
  "key6": "5QWzQb2JtGKhEsqXPffAVbH8QPXH7uBRG4PK7ves3edAyvLTZzJtwQUvAYnqfZ6zUQ8kWJ3fXWdDu7ooovw5aAo6",
  "key7": "MHAVJo98fduUDXtdBGLXFywxyqtLKPiwh75Xy8JX1TMUK2KjnrZQKZGeRBFrariQo9VhDKdX6FtaM4BjEJMxK6r",
  "key8": "2p4AzSzAC8yzABWYa8LMrq2GXdWA8nJQ2oWyRo8R74q4Pw6DZi5mCYsSMva1n3FxemLXyVEH67UPfttLDpKn33E",
  "key9": "3VguDQm5q8rgJKYN2H5qPcvfdAs7BbHiAjvz3UwDMh5o4SwqWAemdjGNPMqznc6fnuhdkgRiewmaucPTVr9iSvAf",
  "key10": "4hDKLDiouxiXuWdYfRtSo7PCx4UDC22w8A5Y4K8BGwqwrB1Az4dascUjwxn1H8NSHphD4FDZKgnuG6G5SZPiU21U",
  "key11": "mZrBw1AwyU4nY6H5arnnJaRSKt4iAv9R4qXjEDAFgMHyUekxVvTWhYfuFL7AQTtxnBmPPA1UUB8akmjjAeqinK4",
  "key12": "3NZu3Hqjm11qURfgdUvdyRp7TiWb2vf7vEaeqqDrDvV1qszv3uiE9SDJYQrrETDDMsVSSGYMCn1jJ2DCbjEYouFu",
  "key13": "2G8HaD2qbR8f4KM899cmwLYyfwHg2wGBtPJbMB7pFArjwv2KE1YDM3xPz2p1QcznNPAY1x4L7hRCoadRS7U7aBRU",
  "key14": "48WT3t3TiYLydEzHuoMdrAd5Jt5vXN3Sxz9WBa3fqf6v3e55gwnsfrcHAK3YagvrGGSifMUSPSX8HYZWenyke3ay",
  "key15": "4BRS5GNr4YTSuPsuV3CcWRzJ9Td8TCwQBKPsszvfDMjUMzFwgDW3tUuqzWEjRXdJLyUfP6a56K4CqTCWjv5M8zKq",
  "key16": "3aK4Zw13tVhT2eHwf1SNATdApvazVuFvcs6cXC3ZNf1XazuTWGQze2gcjHDrMuptydDTiGSi44paBxm9vxNp6Vxi",
  "key17": "2kWPxZpi2RYuwXiUdWSYB6T2W8NFQnt9KLeZA8qx62XruKavEC7MtsyY7P3tqfpB3DMBR4nz8LKPj9XNXJsZGoQg",
  "key18": "3DkCFMBwojagMREDGPXg7KzxEwHxPACCe1AJ7pwHi44A3s46rE4UGkP7HvLvVevi1XUBNUsLC6aJ3zNLn7R7MiQK",
  "key19": "36QU22BcvwD1kSo7pHCLWU2eg5sp6sq7BRbATDWQh94w9eFkEKKVyoKegL1KS7dPXT7JSLBGnZAjRxj5df6QxfaZ",
  "key20": "2X2xRf5j9soP45GHezzau3tGPUMkESij3rrD798VdoDWyuF2TNHydYqpewtzqyybPcRRPuvHHEUaVmAQipYeUYhr",
  "key21": "5bXwBwfgKEzALnVXRx41cDrGs9c3nco2HiY6YGG3qrBR65iTMbzsDeSAHGZx4ew4qoRLDGPoPUBWCPFvmWy1CUnF",
  "key22": "4PoYT2CQzFBwHMdTrtNUiU9cAge1wVyW5AG89zMEHrnxSNkF7uEQXkZofpbyM6NCx9sqrM5zuTTFYDcfZ3BPmQ7x",
  "key23": "2cZYNmfd6GmiN3JKk5eVnS65PdsqCbjwDxChrSvza94j2r7GV9zTvEy7DWZd8jREZXcsmChjesoGC9PaDjQeD9mJ",
  "key24": "dxPyEKSHT81ERA3mJSYynTZqRrSixqdyC1kXebmdJ3fmJPrTpaMdk3e9Dk16ztHps6oFvz5rFPPkMrrFZUeWwot",
  "key25": "5UQAYzXVNWURZ3D32FzHuvyiSE7Et6b7XCgAZD51dyUZMirgtaTF46petrSV8GuEVD8KtRxmHRBTYadixVK97y6R",
  "key26": "2NBPdBxosEy9ibL65UCs8vN3YYv7qU9CUbyHveXY9VVjtBn7WVCTjegfpjYubiWBsGfYqpu3ApagdWhSythfq66k",
  "key27": "T3s9Q1bxSSUyVrUdvMbGeH4t8KpKHV82TCAVfxjRPzQspvaYj7iJJzqFHwhsWkNGfUUs4wSQfNBzAAKxcXGcrck",
  "key28": "3hrcssbw2Ey6D65rgsnth9HoE7D5HPYPA7mNh1ceK3z4fsLwzP2PtCqDT3WGX6ufC8z63xrypuMHkRqwA8RYjoqp",
  "key29": "5CVFUS6J982n4bGcT3APj6VJ9WCiP7dD7MXaSWusV9U8cCjSpBfwbrzHMm9e9SE6U3qcmcgiw3NFTVzwqqw98sU2",
  "key30": "3uzg9as3b4rfCw5ZJVKR6y1uvQaCTyiAiQS4rutTjqdq4P1u7PvY9j6uUBNW6ejXAYQhEjFiTb1cyqpFZauVVMxG",
  "key31": "543uA3ovMFmakyPwqG3s8xm1ipUnJZtGREhRZNcNbPVTCfK4isXpwdxYWmW1HaYCM5QT63eswy5MWcVyDrQG1gWP",
  "key32": "4FRBrcNMsKr3R6WLfK7iyEM3B6RmRfyVg9LmfGBD5YvAAC31zfGHJVnzNAJC928HgUHDCc7cNJjhupKpbv229Cxx",
  "key33": "2odtpB52V1694HeueHVJiYRv1sdQ5bRGRXEfGoiydJM4ABBCnhM47rnuMcy87bFtB1bm2PLw66NQf57YTbYyFXwj",
  "key34": "m8VyfdeWrvyJUGfFJ2GbFdfNFxu7kRgDdK5aBpf4CB4YwAAyTeYxdxoaVofMQUN3jwDoEAsrrwUP7ijTk3Z4GXN",
  "key35": "4mcTUQLyn1uaNEpPxZa3TeJUWQ8QE2XqC5PwF7smeTF5X35T92KfKT4G51r3JoTmv76CWcMirXUdPykumcKoBHXQ",
  "key36": "jZnbyi1rPBKSGeVhz9aUDZ9QgDyJdFjsq4uQx9ZhosHB88fJEzAj7HkG94kTrTrYQ6WQwfwzdhNyk6KmUpHa5ve",
  "key37": "5sUaRztWbXYL26JJKLw54sGZWawgwvQYArS6rcw6Ki6udVLLKKqrvCPhvUZT1zPKSnLwSKVh1Za28k4kHK1g5vyy",
  "key38": "3YLcnMJCsTWhcvktieF3ArQZP2YHVwweycWHu1ze4iAVRYTNBUWuRa9f8Pkj8fDwPb7jQ98fc9Y8GcfbH42bEgKL",
  "key39": "3cBk6nZMXFMtFNB7XHeK6DcgMcPEwmB6wc7tLxBXYcp8W2N1jafPGm2u7iAjpbzYkWGDEG5Aucha1mvvBk4uDgyg",
  "key40": "4DcndWA5U19AxjJYFiJcDggaowHfGMinjssPKAz3fahhwfjKL5tk94zrAB25mXnu5hi4oih9XyTnM9LQoToKeKVG",
  "key41": "4Qj4cVbRWfuyKLHYrS6xfXmgWmBsoZZ7ipBZMzMHCmKDHuNmZpmPb94oib93X8Dy5wHSB3ikuaU917zeXsu8xSP2",
  "key42": "4XZoQdMdf63UGvkWqUGNsrhZRp3cco6XqtvbdNdsYZcrgb1ym89HP9CekVvQrjw7Hm8BjzTz2LakneA5g3mwy4qn",
  "key43": "3pA7wrkPrRuXk6wpMCeTgbrbpv2nCtWqv45Q8jTfUqK5SmhhtHNVVUBJjUtwc9SFh8WTdZaGbvH7eh8tQmajkdE9"
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
