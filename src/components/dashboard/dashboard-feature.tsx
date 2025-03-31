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
    "nEYP8r7KFkdQtDezwPQKG8Dzk81GEuqNCJf3q7Tw49HxKs6JaefofbafoeQVRSzYiA7XvuWtRB2tocRYWC7GHvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C4SQAi5gfsVoo7Vghmdwv3SRHjYByCUmw9zXqmoJ81fnY2iKsmTxZb5j1QQUL1P3SCERN9oPLJVqnYUVB3npACj",
  "key1": "4QXd2Dm81GNDevy6WQxYKTvpAcUtv8g79h6Zt7eYNWJpUXaD8JLcEc3Kh44XgrYjHe2SQgPbtjQuYtw6mQUPhWgU",
  "key2": "HmeYP6LBohPyix1wQN2toZ8U1T9iDQneaZCm6m58PayouVrYjDZyfKfygEpSubLBBjJv57SdfL7MTxqDVsqm2SP",
  "key3": "2REoDuYu5B1HUwoQE7FPAPuryVVXLpifJLdD4ZrUPQXN5UTzZFCmCAtcup5Sh4US7vi4FWRVfTLVuaFDV3LyhBsQ",
  "key4": "5MX9JjrHrCfuQNq4Qtt8oAoiquCnKaxn3fgAi3aW2EQQnRt1wySJdqsmwi9q8VewBKC299qFXouybJJtxvuvPcTq",
  "key5": "FVJmdLqFFoLnpppcJwn7TNFewhrMxVgFmfy6Aj3fsUdvPqPNtcXkYc2MtcVrjuRyniChVCvK14NStE4LAdzBZdA",
  "key6": "a97erCt8tE7xHAiQLLzs4Xf3baRo8RnJfF46hYfAG56WUrnwdNifdtEVf3a38DLjvAPA2kD5yKBC6qaRaD9prT4",
  "key7": "2hKmAhMYJiKs3KSCMj96VsZcsgPRZwbxXGweRB1tvkefw3bJnEuZwoLH3rhwkD3FJHSofUA4TdbMVGTnFVkWzqta",
  "key8": "2bYL81MJX6JfB8ZkJpvtRJnPv6TPWFchx8ZUHQVStgMWR6MMdfSk5KFB3sBHo24ambgBpVLiCovGVvoH8wgu8Qji",
  "key9": "65nz2gMzHcDPXLdNXgSsmdzM2n2TLy7J42YLot1i7nmF23kdyGbzvxyV5Cgr3332SkTVYRVSXip948AZnLoQ76pN",
  "key10": "4voJxJ44azGr9qfebTRMV5rYCNQ9WcPxMJ2yu5L3AfhzEqaNhwtAMEfsAvmnwywM8zp4BrHvXVS917XGBJNP6EjR",
  "key11": "3ZpJqPYyJMDoghgzxMjy5DiWjhmHUdPq17i6X2K7qMfzJFB3XLrfVhP9NPSxs5mhw5BzRKa7x8arrxdfc3gkBmtJ",
  "key12": "2qYqz5DSVQwBLdvUpxQQSn16ve2tNVEU19QH9EiDM5Yagre7w5TkHsas7zL7WpMAELt9UaDssQWxKzwVgimecs7J",
  "key13": "41oHgnyaAxsuaLePyF8dve29QeHa15sBT2JJ5UuCf9tvprtSWeNNcG1mGALisKqAcMFNG6P9BfvfKzttuXaLJwQW",
  "key14": "2cbgTqjTZgx3ewRSJ1fKemvtABgXM1MSVquoLBqunwxTs2MMvvDLBrBrnWDg4sPBdGbKuvkNmvZ23NDrBg6JCswd",
  "key15": "413HYHWVRDjEyHgssWujGNzLzCTFQRdfUBzim8kqQHSfsMG32Zts5vfzkXP9CHXMqmYNa3Xx24xbE28nH6C2grgu",
  "key16": "3wAVb5WyFbvemTPPXE93UyM2k13vGQBhBuknGRAYFySW7MgqwrZsewysaKiY6BC2wTxn5fYtTKWTTxX8E8DAn3Ky",
  "key17": "5itsrsR8LuHbxKZFAsbJQ9iuACZUNSGmJxDJHfP7Q5foZKUrhXYQ7PCFUVJirkwHbaLxUyaBcytW5oxJk4BkkeEf",
  "key18": "5qphvcQkvaKXnyiaQGnruq5eyNG3hz4LicnSJwofdoKKbK8ExmQy1RjL6mPFAJtfyYnfi5LmzfaEWptvoesvpWMa",
  "key19": "5e5CqE2WtpG7nfDv3Qr6z2WULxJC2JS2CanAdM7SDxK4N4FhwDPRMAs1XfNdrytpdwJmTfMKasHy9rvCwajZH1QU",
  "key20": "5pCcYqqU4F3TcACdJeTPkRQF5H8gph333TJ9PNDFsY38bZdw8WRh9JVCkFxRRPHT2kKkbbgaECj7TNnj58xc2pPt",
  "key21": "65qgHrJfUK8TxmEYZMQarNEjHPWu9y2PTHhFe16ymeAjiKQh423TbeDhJoCGePELqtuGXLHfmVj5cvphZRqfWNmX",
  "key22": "5DHBMduFc8Q9Z7iwX2fv2K3BAmr1BzqTErEXxsec4azw6auoQ3sEsX9PyHG8kMqV135JyHU52DT8jUNzgQXPKb2w",
  "key23": "k8STRewJd46LrAYVDj7gXU6LXm23WQfFAgneTp3bjq3CGJqAtUio5E1ycXwsgXarFa9wUVJi41wv1B6hjmgmmm4",
  "key24": "3G2F8ww2YUDGR3nsN7328eQqjnLxckdsMSsidQtWQM6TQS2UXapE8xUNvkQHmEhaLXGo767jig8gs1SfMCmrPP13",
  "key25": "5p8Bi6zoy2b1JHuoYayXGQjatWQ2uYqMrp2pgz8S1KZ1KT6ur4PyQNHVMFZQsuhDjJDJConnjSc8U5Mv2SnRvR6H",
  "key26": "oE9QXcuGE7TnUe4JRzSzH6ZTR59F5z8dodhRqdv6AY1WvNL3xwvgDC76SqZF8zHZe4fBi4eXq68NNkMnWwdhs5J",
  "key27": "K9SYAQHmntkaakUgvNQvJtnvXyT4CqsQwxDvQAzHUBLyw39xU8KgixcabTgUGgPyUAJqrvZ4trFpzWYFm61ty2U",
  "key28": "5TzS5nPpfVivfWEJ7hHsohuBSG2FinVComvkcuifELKMbQmKkQAVeqtafZe34hsEaK8oBhbTNMTr3eni5oMrgVhn",
  "key29": "dfqiH3oyrFWd6L3p6UxhbK8GJEp9J86Lj3RXgWLVztH34MJUzoCvDUYA2WuTFLnqraAajdiwt8riYexWvLbvMwZ",
  "key30": "3ZbTV7RJYMwACe1cdGE3o61o3QNaGdDGxY8U6hmcogwXAMBiRTCKe48xTasyH685yPrPNUEVskt3KbSSGwnMsoBx",
  "key31": "2uD3NwfwEZdWv953eKBVhkZrErXy9oR6Vr1dee1XL2WN7HAguAyVs68PgTNUmRsVm22bRd4CP456zyMsPw2LgaFq",
  "key32": "5gRs4LDvmRCdUNVbqBWuU7tbLdqG53KVGxtSLaZiDWGV4CgT8GHUGW3NUYGEobnSV2iAfjLThZMf1KHzvv7eJd2B",
  "key33": "2h1gGodDFQ82FH1Za7S8bKAjXNFHJV8Ec6BmErLkQMTqCSoCBf1AJzLrzWc4BK23rV8ejMPbuVqSi7RdTjAdqzD",
  "key34": "4NQ2njUvPrL5FqEY589jHHH1S2tM6tUVvFQpbUozMT67YE9HAzuD7aMc7CZMpLwUrSu3jzn8vh5jTenP4mgDpR2z",
  "key35": "252BpectTALirxTL9oPP86UADdfFUrfzkM7Nv532DZ6cZKUE4ci67r49o4XCbfqjZFnZ7rNiivb3mdctA7Si1eH9",
  "key36": "5DkLy4oUWL8w7m3z9QQqxinZREqZHTAcR4s8DKe7eV5qr5gcWCgHHAAe23uYmUDRUDbDrhSg8eL8HWqwgaChjmKK",
  "key37": "56yLgmdDjYgduEsUQ7YhQBne8WBaLM5F9g8bEkorAM7StFDwdxodxYowwaYieFEiZqqbHYtPtv7F18HARbeGkS4m",
  "key38": "3qybyoEmubs9phTExytLTkkdMDbHma7xTLRvo95iVJcqSmbz231qBEZbqAycyPXbKmm7EXpun2gzfsKXb4iTUUcA",
  "key39": "4hiF6diTsPsqxKHZLH1EdS7b9T7j8THPf6Tqk2quba4ejNyy6Yy7SznMyFtzSA9ygMyst2doz6ZdquaTPTMSv7GX",
  "key40": "36UiVKikDApbYJMVw4cMS4bEFWcRQxyTBKFNaqLd8ymhudB5CxZKHdjK6bnjyYjF4KG4wM7bCbuMR1jgCkWSPYpZ",
  "key41": "3J1ewNJYFoTAD1EJWctW7DRB8Wyuoyfge4MjJvn1rVH7yhEewMVT7dRkGq7Bs9oWguoVHViPrai5L8pcDtV3VMGw",
  "key42": "43M2Lu4SBnNXYeBFDPr3y1UAnKeANEVvgQrSnySxE2tzmqWPjCWjuB4yUbjKTYhTP1JEgL2P727BUYX7HAK7Ui7W",
  "key43": "5hMCBgnKXoVvFtjfsb56sne3jLZ9MgoDCbkU4gjpT1A2cSUxyLb9Bt48BJgAEQDKZffeDmVrAMg4U9QyM7Gxz8a8",
  "key44": "5ywU8p6CMcRdxXswfBNqTQSaaD7ZrzDHiLCGmPU4S9hiJcTQ1aHFj3vgaTZCdeLdDePkoGzkQm7jQHnX7Lx5M1T2",
  "key45": "5TKCUrfFonuLhMDmaAwn66zn7H2oAeJGnb2FfKQZtmWZbhTYy264zV3f1uTw1BEXx239h6E3UUAWqDwc6BG3dhSu",
  "key46": "3SjiQ1uEtPxpgBicLbWWMYKpnPFBXRb154i4K2EbvSTP4HKxdJADH1P8okutTW3ezKk9ZF7KvMJ9JqV4PfPbn6jR",
  "key47": "2hm3kmKRKP1Jq93CVSQvFzioHotkApc3gCt44ZXaHfN3jLBHzPeTSWHTaSvE3eavCJPaG4t7d6bbEuzQu2vLid2s"
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
