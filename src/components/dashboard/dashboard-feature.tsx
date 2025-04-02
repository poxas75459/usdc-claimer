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
    "zq3vxsKHJXMZtdageWJ5WZ5C6GjbyFbMz5AUWFkfbpyW2PZHWc7RxVRkCfRThmcxxWZ5ayHCip8s8DKTasHhA85"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rQ1KnN4qS99XBLRXHeenqM7L67xeTosyeAXPWiYugbkfwrQQcVhptsNHo4E2997quPfv9BrXfeCZNBnbe2opckp",
  "key1": "ofLUeCWJzCQqLGuh4rNRKHYTDszr54q5ozuu4NiF8T2Zu3XPPJahWLVVR8dYLVGoNV98f3nFC588csuUKjDFUkk",
  "key2": "2Eyx3q6N9p7c4wFWGR2JdAAKKL9w3sYpDp3jfWy6MLQamdGHeimFzS5SoGEAPUaRgD85AQ4iMUMvxbnL7jhbgVpc",
  "key3": "5LX6sgNL44jWt9mWmEmYoDpqgxq62v42qQV6WFXMuc94v8KnkwLjtKtpjxWJhJC2URzDJuFBbFYz6qbFqpvrVzF5",
  "key4": "5DzA3FvgxaszY2pnAR2qWkTP2hFwEWk3xymSEVkmT8CJX1TxVg26fF3jR2qgrzimga3pDNSrcFVV6kmwWBTuYYks",
  "key5": "3kq3VeEn33Vu7HRghPFNLrDCwuN8xu2PbHFVVijv41dse7nqcrjoVYtqVFPpA5WT79XpPbbSy5puNZYL4pCMH1Nr",
  "key6": "2NPyyefMQMDLVBrLbeeiBKJ61BKAja8MF53en2Yy6TVHUZeRYmkntqSDM6E2mACthEqxpY1S7F9sCaGuyFfbV5Do",
  "key7": "4x1sxqEqNX5QmpXybimsq5Ghgn9nXc5Z7rL7fWSyfsBvk9K73b4mFcyPGYFfbv8YtjbLmYNA8VfNYjYuQt9MaLBQ",
  "key8": "4y7DSzMkLt8Yd9WowhamHhiaXjDF4Jkcj1jK3FgT6vMguPAkKSm6BdJsBuB9PVVSufLCD4fHpUq1ZWmjQjnrQ164",
  "key9": "2XcP3AqRrocvD6atpZyZg6q18RcSA3ywnRtosrYQX39NxFZbjFMgo6inx327J78ZdhDRnh91hh67qDxUy82DV39F",
  "key10": "4K1JM5BKRQ5YWzNK85QUKx4SiY8ZP7Zdiq6EZ4zo3v2WxiMNNK3Y6u1zRXVzwBW1fZBxSgbC1bPxZpd27GZnzZfF",
  "key11": "3LJLe3GVfMWoK33xri4AgchqWxkEXueJ3TZusZsN1wZ5yu2wmoChgPNTiCDAg6xbbDGBpbbNvPzgD95PXARMPMpM",
  "key12": "2PHDrJsYDro3UguYNW3M8ZB3AKiHTcAVaPUW9Xb9x8ZBZokBVyrFnafGVetNiGiRyxemw5RTzW61KoefkomsbJvy",
  "key13": "2hBJoCnawmnKjZQtS1mM78DR8hBCgmwagEBtumpc1Mf4jRRyECC3e5pJaXj4HTPUtoXjoJUz4w7tLorcLoVSGwJh",
  "key14": "5vmwY1hN2rMKMneWXJFd9BsRAiUZqpEczfrEmJYvLck9yJT1SiiKyWv5e5YPssdSrCW2VbFcbJeL6373ZYnq25KX",
  "key15": "627RWBVX8MVUk7x3HKHPTf9yYNQc7ptJFmhZnEXemZHDbNntBkeNdym6dAJJ1J6Wv3rsEHXfXPft14c7nei2qdvB",
  "key16": "3rz6DqdTWswPgEW35vzpxnruNoiu6hB6sQwtXedPVgMwuX1VcKmAPZXQXY4SxWzkRyY5Ts3qe5n2ZH2Dqi5quCzX",
  "key17": "63c6jbkDeLe1YEXuLfEWwtC31oCQTmF6G4zNdzxKB9MKKXC1FUeLgV86UXv7bsEB9eTmxE2u6LHK8gpdXLGe8phY",
  "key18": "vwwBPCxS1nTTCQaPn9E1RaTiQsxt3wiaxdjahxy2oLAFCP4pBTgXXMnfAFT8eMsiDHvwKoZr77H2DDJSgMHTV9e",
  "key19": "9vbz9qydDQyy2LYV5eJFxxwsZkCUunYGrbApaofZYnw7QekBsJSVBT96fQPk1cHeobFhVJ6CFwy9Q9T42iaihMe",
  "key20": "8vq7i6XJXsFY2YefrDSv9BqZHar2t7aXEBMCcM6GMYvfDRyb2LRpwwEg3X64ZNyW9npf3q6sLfuhQAdSzMQrHRj",
  "key21": "2fzZwfcrajeqiEPmdRk1zggsnqWbKYQGkCbe77tCQXAw9mjWehpUsGSPNrDkkESxBRFR1UyrGCiTNGebiVGw3L9j",
  "key22": "3gZiEth6JGiSteAoxSnKe2pU6AmHGAuv9WvtbgT2XzVL1JzkJHbrRs2B2QGcvkF5r6Noq1vLZBVeAKHCa8Jsc8bb",
  "key23": "5GPPXySgLJRFqzWaaqgU7NLsS6hJ8NDKFGsmqWNyNKRr7NZsnQjuLpKQr2hGKegCLtvj5sFVoDxw54qjfvex9cYn",
  "key24": "5GNgrKYKWFdJsLf5xyqGig9vy6TXJegqFU5r2BG7Vkr7DSzNZ3F1bshEyHHeN3n7KF6PwMgqsgZPDxKU1oXJmaKw",
  "key25": "MumoGtM1hSTAV8HcwrnGu2SwX3bgxGhvPaaQ625jx4R2ds9TTtVD5n7mfbCbHdxwxeS7rvMh6YovawNVi4cmbdQ",
  "key26": "4PhiFcTn9WqxE3XhZ7J4DJesh4GTnYdj7hcdzGgcB9hjDgHPpzA7eM7o6sXUbGzEa1Lj24MxoHd8CUGB4GrxRxcp",
  "key27": "fvGBt6MBz5uwoz1MVUUtKwgpWnC4Z5SwgYvQLtqhYnksDRN61zQEKEWtDEjqqyvnkdRBcyUPeVJbYdwcjsgm2Gr",
  "key28": "2qFJien8sSenJbmLgSBJUYEZyZiysdf4cL8tFrj7ar1haFVvwXjpiJ5F2pqghcWksLUUt4dc82ZU2LusinKVEKtP",
  "key29": "JUVsYuVF6SirHsMf2pd2TACScPyDcdmvUTJPsanmLvhyccNqEG3HFghXR9vQVHjy3mwRp19hcbSjDVE148mXGjs",
  "key30": "4wTLKpc1qosG1CEYLHmBCrGcNmPxTDuGYdTeiVyRepXJY8Jr8gfBvWGYsF31sGuwnpMmLgRvWJxEccymxhKmH9sb",
  "key31": "5xCtHgi6ULQUC9VqmopjMwG21EUKNNgkgPCCpLRmXGddEY9Lmgs7ZrZ74n3kBV92zkq6ETXgbvzpMHCCjrSi2wzK",
  "key32": "AHVxeXKjsw8LpoVofKW358W7tTsPruMFgxehnvvADBhn3DigPqHxEk8ckhTnjdNCRpMrpBcXcLYcR9r2SpsBgZ7",
  "key33": "3WAmRSPCE7zUPH8TzM7ukcys7qMggS2PVNBiYcio8qnq83Sz513bfvjBqbk4DEzRQcfhsTEZhCAsUbgyEb4ABN3D",
  "key34": "4w5uodwSm9tQpNZAhqWwoTk5oNydYQNCjHzgL4qUUu1jxpv671qxzjncjBgNBiA7D676ujJeUH431pSj8E2qF1mF",
  "key35": "JKYreMZpUreQoXBJMccRqm6BaWmLmVFC9ca35aWzitRVYWLdhxbng3sjWwwy9iehbfCyZJkvsf6HzR23FWdkgCM",
  "key36": "3mvuteJiZbPwJ7esDqNGNZtBJtQ1bZG4WWNabJKWF44EixMh489fqxnPqm5bRYoMe7RhKpN73eqLkQHxZ7taSvzH",
  "key37": "3BSSJ2yt4Ld6xST6dwUnxsQhuyDhMphAnUWkC3WuoK8xnapiFaiNyHy4exLnAVx14Q7Visjhr47ZGoWr5WmEFoSw",
  "key38": "2efENSxbtMrNLkUb9Htp2PADpHmAcH2ppt6CUhsYHAA4MMKzmT1w7uYk412ZjiS59tW7FD37FARCLt2EEvuYje7v",
  "key39": "3XQ87wLfMyttvfWSMuHwPzsatLxT2dm5m8VJX6urhsZ25Z4sJtuRzLz37i7jST1fwesP81LJyvRzDf3e9PHXNN9y",
  "key40": "3KomS2gWcWKM7wMjpkjSTiNViFNDTdhA6f2jtrFgV2EcuHtp3toz7woAYuDdMeZwFtcYVjFJjkU4wQtaMcgXbxVt",
  "key41": "61goGhJ9MZQ3UJDcGTgrKGUd7fRLG7HYuNozQ9d4K6o8RdggABmQNX2caKqnP7V5r3JTcXZYoLKrWjR2gikNMYKa",
  "key42": "2rYKbast2BP4MZwAVxWFEEHyS3YjKL2wLpV5n6YGpeZQvUSxToEigYE1LVjtWCGS9WYzoUjJXoRy894w1viidSs6",
  "key43": "5mWgWcrg3qcHQT7BoAvAew25TB3s8HgsejCaARF1wLToxezZAHsxV35JnkNRHf8jnvVoWkXh3uPhW7bEbGJazenL",
  "key44": "4GSBaYDjb8ugZFGJfHgwMMGwr2mQK3jkwzdGh6DsTzLNKfGj24g6hKixDZe1wcmjkBmXa3UAdi2VVe83wBT3DVZm",
  "key45": "3irATJ11kReWNYct744kGFwg5cy2NkaWmqEHgaNAmsbg13uY19sJCYUFvVLHsseCYc9NyFQB3WicAgnzx12o7ZEa",
  "key46": "iQLwNv1tiDSj7cweo5sQp3gLPFU1fnaNvHMarpD6VYU2VXTQDWrR4MRttNSBy3VCnoiSx8yApEv2HCBZ3YTGSn9",
  "key47": "Ywzk1KMGJzMjjjA5eJLUud2mXv5YtvFQtjXEtAsnRGmPmQudrEiKX7Fprc5y1GgQ6sd93T5PPWSzXvNZsq52UZh",
  "key48": "5tjUrmYoEKGRt3yQTHKRog7yQKtUGKjRM8vRUA2QjZzR9fwDv8aKU8FFqxbsZ1J6NfxpAC5SN9w67YcXGN1yun4V"
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
