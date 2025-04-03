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
    "4NmURfjzNLshi6fdmPURcBKTqJx9em7LZwS7AWiP2v8b9y3Fm6S9EXiqoHZqGVtqV5ErSDutiwk4TiujzHRpmpP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bMsc3mNg4KoHpyxB827eBgE9CcdyEd4P4kK9YGH2ekD2cMP9Fctp8rkS4meqNqTKEX52uExqtYAxwZ478nZ3rpH",
  "key1": "2LQRBHHbhdo4oqLxLQRjJkXCuCkA9o112DjhE72fn6s2CVXLT21kUPDLQvPreBp4po4M7J4aYmgpJsf2X9xxzjRR",
  "key2": "2FXJRsLvWbCyd5RWde537Rysfad22h6A4vBzEEv7PUd1eiyM93GyTW1TmB3GSjJGtYFPZHmYC2SAGr7U9gbT6Brc",
  "key3": "rfd5qjvm1dvcCwpxb4zbJ2quJRoYs98G2DYjCZxuATB73breAAai2TWAhtBxDwBdEKmc4wzUeEpRtk6hwqWULBD",
  "key4": "YWXogQzpQvJS9PKES4zm7Wz5atgbG8Rhtng8VXcXJxp4Gpm451cbof7HdqJR3JPX5fFSUge5vKgoUpG6WGCBAPM",
  "key5": "AVabXWqRn38SrgdU7JhaMtjrfTpcZhmAB62yduB7TKekX4TRXPZ626TmCv5b3JpAqucxvHk9x3thbxjQ2nn37oW",
  "key6": "48UVukTB3bfH32z6HqKSMrnt3FS3ud5gGGqtGqDj1zMmCG8WdrYsnuXhWNv8T1XqR3mKUsKpVTTzWq5mkffZuXR8",
  "key7": "4gp6BbyNn1gcGYYTsZ9SQH5452dKQP8RRZsSPBuKPoQ9VqL7m8trr3Goon4m6tNQ2ZxnQ5RyuV5BZvSj2TEGEXSX",
  "key8": "4EnC9kKxLNrQurFw2ZeHqZuexvNRGgnkNffTqFA9ADJfZDWv4TwzWt4WSeF9dw6S21D5zHkVc1tauvUbW8zsHeZn",
  "key9": "2UbBjVEe82t58ztpCJF1wNXEyytGEPQ2qCFToeY9ESbVzdNDyEw7tzrAtRi3tjHuY17hFmS8ocJNmDJcPVirUjWD",
  "key10": "3Vc7QaTwR9oVnmsSZKhgKfqsyt5VgyV5wS7y4okKxVZENHu6frb2Wa1Smpfr3apkudeCEygqk9LvFKKvAE33sYhf",
  "key11": "HBRgqRC4NVRh7sugH1no2ciXqe4vyy26b6SCtuuHnHgJr5KaMEWsRpMb1qpNyweahWJ4ngsK6w77XZUGp7xKHDc",
  "key12": "3Ye13pT1rV8ks4Wa1j3B9M3145Bjkbp4eCP5RTWuvSRuyuVSLoLg9thBpST1yqGNT3m12PgGWki8vQY4hj1inuWN",
  "key13": "51yoio7smQqJeSxgJFKoTzvjAx3pa6mcRBuwFM7zJottrgDw5qJXA3pP3wPsVonbct3LHHEXSsPBryxXahcv7hPV",
  "key14": "2BrQayBW7C5k3ccNYeRNdzRsnUmCDzMLUowHumeEb5ZBtgFgY15ZW59uYBiABnuzE9nf8PELCRRFLFFLzmBzSd61",
  "key15": "2EsMgfbvY2Ju763JPf8rKmrYddywivUyTECwSKapT95EZAqJ4wCZjiKQtyTp4TCcx23v42rdYhF9ZgKo9xHuGFhJ",
  "key16": "5Hv5U2BjYi2VpGgVNp7d916QSBsSpw3y5Erqt3r3bJ499VPUjnwJhiri8NvLrJUKdQQbwpBSYXSvqEZEB13izAYC",
  "key17": "5fgTSbcmidkaYRq9RxCJMH33RwSEr7MSW8S6hoorvXxMQTALdmztDup1VFdQLApYkuDfyiH3VhRGzaULAWt5NnkF",
  "key18": "4Kr7q9Qr2xMn51XG9dnzNCLYmwh9UJaQTGGFfwrqn2EzCTqcKz1193NY1oSQMnATmxsFxtpZkegzm2HBGetqN822",
  "key19": "3mHRHt97vfnvAZYNTL9g7EunDohtPc7ifTgzoUAzJLbjWN6yscyGZXFpYcQixcsHimN8oseNSDFZVRvKteobeHi8",
  "key20": "3NYbSxv675mfVfKQmXxjPB4XxThz2VfogPa3pxAXxiAjyHJ1gNgkQWAHZE4vi7MGRCiuiGyqzNc1ATHMqGGcDTHA",
  "key21": "5oP7tg3xk9h16XLhoBoDg9zzLLsY9Sv1x71LpXFm181LUFeRkqz9ZCjHa1X92wEy4P6kswCNt6ePNP4Q5J6uoZvL",
  "key22": "2XCaqS3RjhEv5MCjH6H1QZfXHM1M8L8UaZDJcNBSCworQYRdtjVfYzJV3Hq5urZJefJN9K4dFm8WY6yp9qpk5TLm",
  "key23": "sMmNTEWv7ECkbuiLbtbRJnGWTAw7cYGNHvTb6t1Q32MzPLNNHAWwx93GnMQhpmKx9fAX4wqhAG5P5HcWLv77DPo",
  "key24": "3mThGhfzgNzykVUha19CpSDHkXSBdsKkeL1ATviZ2q5Akh8Cu8A8y2WV4LUJDRsE2hcntHghjgg5Rv32Tth5DU5V",
  "key25": "31jVpAGr4Fqgrt4VTWDRmtxum5NWBhYwSXGCuCuo3jM4WSRvHKQvtAeFzzQHabk4RqCmmXXP1gMLfM2cKA38takz",
  "key26": "1aVr7Qjpw3gVSkFkCQ2StduwQtmBPA6s7NWEi4RuQJepf3c4erjxEwP5HDEXj9iqMAV41G862JDGvav7Ny758i8",
  "key27": "3PR1xK8Pw9MQvjfXNNkTWNHsme4SQ3q5i2mMwz5ViFo5RC6SitxiTExynmdoQbd72Uhgvj4Kbn6hZifZqEPgZQQf",
  "key28": "4q55WQrXYba8hcAFdHmhMvfsWK2dyLyA3GPthy8XHB7sY3tqsuxcZmZvebxEuA3K9cK48SHWnX4feVJC5j35xHuq",
  "key29": "27qWzYTpvvJDc49TZrP1XheXTKWUHpUq5Cy3LkhViFwEZEAnUQcNoaepVzJCFTh9Sn7JcCCk4Kur5q7bPkQgXvKM"
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
