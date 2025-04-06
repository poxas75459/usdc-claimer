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
    "4DcY6qgGiwfigcFptQ41ckBwsHNaQi6SM1S2JwunaT1ygy1f34V26XWXGrPKR8MirCrpfx12gwYfavnweivYWudd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f1ggogEbv4XNPzB3c91DhgGSFz18vqdefmz81zjEVBFbsnbaQfiJtGQAqg1pVkcS8BXSLHYx5FSqhuimgeHP8qW",
  "key1": "MaDTqsPDLz3EoPLChgjWY5eMaxo85RGZbn63uarJcJ3dMt9d1QmVYWpr5BF39ZAoKFiRqZkTwYQrJ5Mn8n6CFzP",
  "key2": "65bQMxqJzRsTrM5XoxER3a7vmPseRx6WzE3awg5Csko7NoQWa3YoGeT96QezrwPXgcNLrMFYuxaWVvxvmiFxw1wL",
  "key3": "2ay5Ru4AQvjpREcUYzLmKVnDWcWwpw1X2DWB9eFca8eyErLM21D7iceR7rkXpbXhdgWQCt1e1eP6MxY9p9EUjf6Y",
  "key4": "vSNxAqpjw8FBhgRuKMPDBrSUMDN1WPsnCztiJmWomqfmHinCaq9bcuZbdYGQkvmHsLVvmtGrFxk122x5CKVjCaW",
  "key5": "2F71i9mzcrfPftFcg9SVDy9pRZ5UmvwRAkk9h7dGCZgtCfo3o6yH7RJqK4gMrSEHsGvtzfZkwrYVgrkGjT1ZEtv1",
  "key6": "2TVeKPzEeyxDzjru1J7SKV7bZy5rmgqkhjE2HRTxrNAwPpg25tbmGgk8VM98rToETsw9wyX8L3i6NvrW2R4ieuKe",
  "key7": "UiXpAQfXWAEnypMQqaSseUVFFChaXvSYK9geGrmswCHAWPce5zVRfBViQRwbDa8kocPkyFLLkkdPULzkxdkyLs5",
  "key8": "u1PmzvqKmmid6JJuRndnRu4VSkRmpSqMhBoE1B4UyweGGVtG2ChJu8zn1mTQQeEPGFKUnJBpUpKPyJcMaR93FrW",
  "key9": "2WDyn2Eui8LTpysSGhBk6J9gtHVRXNEmHUZLzpoTUiS4XQ9UYPaLinsRDdcaP5SB8z6sjdMEkwkcjvUBuDLS5Wbe",
  "key10": "3jS4wPSambBX5afaVioefVdQGxGGyUZ1EA81nZfLW3bMw42iPovU9vMcP6Ay9coLt9WFXnQ73mw6Rc1DJze6Beka",
  "key11": "5FohNtE62YPg7uoAtG2Z97gf2yScuLCWhfepJri4UjMBFkm7qL7HvJ5yTRPxfXrQhVFYLRjbDKrxjugWBs6nd1Wv",
  "key12": "26CEyyiMBx19ExNbENNuifW4gWS7yLn7TBtQANxANg4tRvUyNbaHt3uTNH1ZTvyxu951omZw7rujKeTZzKxAHakG",
  "key13": "62FrixBGZw6crfeFdoc6cbQ59xB6wXvVYfkEqHhCtKYjh3H78NWfgeDULvx6bjF9reWXEtnk566aiZCfeVCTiNVj",
  "key14": "3obemsh4yRfKFtknbXri6u9CDWakESXEbx2EgQpb7UNYpSS3VagVPxgDbXaCeu7DZ48pFY6TEgCCSQbpkLug4L9c",
  "key15": "4Be6DxbhsbEMu76jEmqyqXL6EJsVuSG2Mct6DLzF6XYHoUimpJzVE6hcdUYVChuzAozuStxPUWQN9dGbkUTeS7kD",
  "key16": "31CEJSgQuns6w7Muzf2ny9b6SrMmxATTdVp4xUcnMtgUdDnRTG5vpDMKLiy6W8sgzqLn5ryPUoDcD7HdfhjkUkBD",
  "key17": "3QTs5ccc4aRqPfeBrKqyWkNjiFkj1PzhGtwmM2cm7ct5vFbu2m9xPf7G7YY1vB149JYB7gfR4zyhDjskS8K6UT6t",
  "key18": "2ye2XicEoKCvwMuoEizwnn1KDYC2wZ6JAPLy79ABeV23KYVTpda7jhkmADKqpAcNVstLHcMvDnRfXyNE3vAqujQ9",
  "key19": "WjGbR28YWVjFkiz3zpJHDpH3MNiWZPfzEr1QznGEmAwfoYLFdkt5ws6qCCjNok9JiRJXvMDdMZmKsH4UvWX8fvg",
  "key20": "tGVg44vdDEaJ7gsiTKDhtiMKZwau8f1U97cvt6WtaDw5rg62fWdPBNmhhQwCahRPvzxgVYcvZo53uu6dXqSKrSm",
  "key21": "UE41AaMjiwqNX6aCzwFXje3cZxd4LRoYcdKqd2akgXn4FJfqkVkyCG83iCT15bFmd3hAMqJgP1Y7mFkT2tkhC7F",
  "key22": "4fPGgy8esAHAkdFrDiwUsw7Be3ihJz4NZ3ckqnWmHApPDaDBft6amPZshh1eEj4XjopXsod7nhV2BdPSkVKTtJ6U",
  "key23": "4v7my3eYMEWfA7uXqx2DYUaRaYNS75jC1GBQx6waCppt2SkT8eGmTpx1AaL49QqpX7bvQ13TuBTC3K2geGYPKVJN",
  "key24": "3sBzaMLQZbJwkXnJeyZLdEADVZx9h5tu6mLhsZ9Uw9jMo5CEbVY6E81ffGKhGTn2sqXmfZX5hSdjUnNf3Uz4U9X5",
  "key25": "3Z9yCCbep4o5RVig6RsWwSqrRMiFQZGB5KNyW3eoedjrEkcx754q4SR55y8sMxUGhd2nTCRmas2qHGHkzY4aNHDX",
  "key26": "46RuKD8E4g6kLz6qatiCgahkE3yg97RDaG7HeifPzYeQ9web92GAMNCfoUVSLpTzoUejG2QmJbnJq8t99DaLmcGL",
  "key27": "2K67hx9Eaf55cd9jG2tNtE6oJ9Cg2AEKQd5N6eXbeoxojLHbgt72rEaD8KPUJxTVcuJSBYqJ3esNZkG5Rj6eaqaY",
  "key28": "2TqmHarMsTSJqGroRGwUxwkbSxS5o92ctKwAfQgeJ8XSgRjQqSgjAK3cyQEEdwd7SckDSU43XADV2iy2DrBUF2ec",
  "key29": "2AEsP8bf233qpv6qcFVR3SvR8X9vc8BJ5eRi4gfet4PhaHPPFcDg6aMTufeu6Z2RNAM2AFRjSSpQbaYR52TmJa8c",
  "key30": "5LUtFLdBKAYZpWTnyinhjtz8t1GQvALwy5No13QXzZjDxaFM9HDycp3xbpGQ2ZQrcKSbwNZNJv1TfRW6yJsBhWfq",
  "key31": "pNHugzu6aZC4v9VsZiMuNdAd94z48fBEFLtNcD4XPoFVAR44sGvyV2uE2EZsMv2Cv7LcRLt24ydSapb9xSB4j7i",
  "key32": "2sfXKYjEUxukk7Zu45t3jSDrfYC6EkLJmudvjBdwcncbfsNEELzX3eWktXvfH349xsFJetpezPzSi1bAVRcStwKJ",
  "key33": "LkuacEZdEdnfxc3wH7AXAGWrSaLDQt8GY2J8QRSDGuh4cisgfbrkruVds7Av5xTnLXpLkZNM1UZ9dxc3KaPMD6R",
  "key34": "2fqcm7xczeQPg9WQL5g3RAUxDYbfgVTrDcDHcbhxa3gsqE9ShBGmRPfyq4zMWUyLPXCdgULWwuMAUTPbgiBHpWA1",
  "key35": "4R9d9LFfgpSUxbdXdgWYEA3kHYD3Gaaf5qUcspG85aWTHonwUB93nz5wthY2dTLKNDkuXFdxi5o4KAJrE7LtsSSC",
  "key36": "5Yumi6yccb5sdEBcbGnu4YrioYSAcfX6Nwe8QXkhXt43YE1actbq9w2MfAKxv8SAbSErwMr8LE5E58AXicXjKy3n",
  "key37": "2APfSdAzAbiUsdCsndv8ZRdPsUTGMy9j3NZ8yo1RSdio966jyhi2BGsaWZutAxsDDotndaeJn7UpuBournJ9cMSy",
  "key38": "4ruaj3QA7MenKQXSQyqrVP3Td3RsiknC9CrvdeQ2vR3uSzAaqX7pRWZsTajszyWdmoFqvyzPVbNPXfYB8zHSVJVa",
  "key39": "34xK23oKVB1SUEt1K6qF5ktt37C7xw18eFDrc1LmabUAxYoXXbgUzvos85p9DyRwv5MinZkemnMQDstTQouDgRkD",
  "key40": "2tDNAjeTQteCgp9UUgksreyQdBEm7Q7xpbBn3LjCTVMuHQu7YLLKGyHewMDoQuCjSKuGEs4qQXWyDuSShxpDQNov",
  "key41": "2DG3PzS4vjjx5nuKRG81Lk6e8iYeYsNXHo1EgJxFCMnq6LeukH2BmPEE9ihQvVATRvbi388W7tJY5XBeSuDEUyhg",
  "key42": "5zY2TWSwVkoUh5PzAeB39fRnGnKretMHsrymVKSE3pF1msU6Xe9Y5v9yyf8fVuGqUu7tZCraHxUmG9VoebYkGhXJ",
  "key43": "5Zu25JheTYzaU18Mxv5JD8NKXZCGrxeMSytZ7HxLf9Btn9dFA4xgiD3SF6uMjRRS6GR5ERJzR3uxHtCFqrg5m6DE",
  "key44": "2TogkUGapEqY5EjHFpTakjWmvckR8SPnkRndtfdvQqJxhNJFVm5f45rtwyykK3qK7q1HXReWdHypX7kMm3SgwiRQ"
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
