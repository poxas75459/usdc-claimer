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
    "64nxhDn6BGvTwez4qbv6gZHDB2YMD6UypTUrx7xyna6H1ZbP512HToLQobvjZCoCa73JjiNx21C9Y5EQYTRbBro3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAtk191GCmWJfCZDUcmjymT9ZKKHRgYjv9XgFDJH5CN9RyKvS7aAnBLV2vmMGSp3Lz2pkuEoJpRm6y4H6RF4dMd",
  "key1": "2yYafhCi8gU2cCRFCsgUxtFsWEY19xtYSHjY8Zwz2rrSWDSF2eNnS1kbbYmqnidSHSmWDoX3LozwcckAYhSTNsyc",
  "key2": "LxsTkM4Qd2nfCWosKMNAx3GUNMBHJZZwdvF9yrdKmfMXzssiLHEZDnGX9a766cP6bSoQvgjbSPGgLAQph9DJMpB",
  "key3": "2A9GNHvso6uh9XM88NEHKbGshrKqzWGrug6uiLppGucN3diaLnAZ4BspJ6o6H7eJGpu84DAYm6wsxGt4iotmMkHT",
  "key4": "2UVQV912E5vKSf8RsyDenbhVd5YtTiPD7EEoY4KPRZvXYDnEE9bgXA3trSozdCtsG9hrMfTNiRrmiUM8hkt9oW65",
  "key5": "aphvf6Yz7CKFYQ3giHS9aWHfgHdNmVACkx1bYcxcRFpy5qtyzXHw6e12iuoiSM9fkSfnbKn6pdPvdn99YE3y27C",
  "key6": "AcKb6hdR8XFpGvBFFQA5RuS51nXMtQZt3tN8ZBZfhoD6pjk7NosVHdNcb4ptK5dy97JPHo7DVpxukR7sh3RrH7t",
  "key7": "4j1gDQnyeP53QGiQLEeYfksNPEsbmbgn8Mg7MBqhm3iHWSW2A7TkpGiKz3vSThiVEAptE8zWBNgL35WKGWtqit3o",
  "key8": "2AyCGh1gLuXPDCY5CWPbU1JwBg6Ruwk77uQqgko3qnRzmV7jauAY18mCm9yRAnubkJB1fmMBJdM2rFHzqUM4xg6",
  "key9": "37wQcoRZBr2HZt43Wj98iFdJox6FeobGrF9jkEVmfgXMxD6A6RiHXjD3jCgWHJiUSqAFg6Uj7XGKtxVkQTCbxkBc",
  "key10": "5MTLNXrHXFiRv7fSiby6bzyCfZEco8pAHV1asog8ckCrqsExZmHbrySPqRHrs62XuPR1ABS2jWnJBv6V7fMXXQTh",
  "key11": "3wZMjDguQCixpkbxToCpGtrqZsHaXt2jHci8edrvwM3WE7m3mPHdH5TtQBK53zLoKmuaD3dvu4vua3Hr9jGMY9dF",
  "key12": "31BFpY8s9oFkSM3azNQxQWB3q6Ws9KqXgg1tQUKpFQagVfasUHsUPFXAa2j574r8oSjynKueYkKhTpWQAxbnreeX",
  "key13": "4bYfffVxq2311c8B24FHtMQPujsoPraCs3R8toLkLZwAMUqm37QNqGYoF7i6XvSGQe72R8mykSzTRqnzUjyRTDkh",
  "key14": "3SoeNUrMUbSWxA7zbqzz6B1adCZUZgpB9EFEC45xUgY9yewH78N7gUrUXk5Aw5Bo2yTUuUYEt17YSNvfCjzUg243",
  "key15": "Zd4wtaLtxbHZJcppe9YQVmpbtrBzB5n5xq8PBF88EVrCQ1Ee6xP2DLoByeK3Rorbu8N9M2rRyBETS6VToy4XKzA",
  "key16": "2ERszDiE6TANtUhAeXj1Mun8jfURoPys6a5qvCGna9TnoNJJASaMs41fXyvrxd4ohcMgKgBq26uVF9yrSUjVpAgA",
  "key17": "3uANGUtCuKr3exkMNaBjAVPBCkqLLJv8C6Qau3imTftWmEGRbs3PEPpC8qynjihxhdMKNQ92n2o83kqJywpHYLua",
  "key18": "33cra3WSxzMJTy5BMZFWJFiTL1D6krgWerBWr5viqqqRQ74wWMBVCFvaYXudKGtBsXK8ZVK91PRpd546XxNFy4Mv",
  "key19": "4kdMNdJeqxuP32fG374tEuWRvNAGVksM5eXdr9knmW7PkQF4njXxnfdzZ4YF9dKcCaEsi6Sw37HEDniq4Xcb8yfi",
  "key20": "3DVtgkzzTGESiE1BkerXEsiyNWnzwSZnW23kWvLJMQWp8gZD7Wd4ugPkFiHtgeQLL8RmwBKScdaY97nKoGARAZ6n",
  "key21": "4UMvG6XvzHoK6zHjEprqVu6po9ZG6TvzSMHgBeHUqu5CYsBdghdkEHUX5sLSse41tHsk4Wq5ugEZcgB2ZRP6mhov",
  "key22": "2H8HkQt6Mgary9aotkCGdR8kaBbfQAZuozMTqMM2hondyUR4KwuBx17UKKyZSsms28ZfTfoNLQmhiWEsqsGyDN3H",
  "key23": "3y3dETR2TJJPVuhoKxV9o1F45ZffkiMHteVBgMdkrLr2YwQTTNUG5Dd6B2KmPT7XejDgmR1SmJkH77Yuen3iFZS6",
  "key24": "2sLxLmDiWwWKjEVpoaPuwuVYBna6Jhc6XgiXqsjPyhN42Rosr5WDbgyZf7cpkMYhTq2rN6okJ2nNJ6YWCBeEYU13",
  "key25": "rWsiST98AqL8YS33WjouKMxcypPNRu17bmjx5UG6fJkwwzsHfS4g7Cn3wtQGoEfY55khtB3S2x5uGHRHUq6NZy8",
  "key26": "44A1dRpS4ymyMowVnptcogyd7SRRG7UY75rxVwwfevKzzFCNkenUnRGtazB2iuAtyji8wRYtqBa4ufdbjijgWWdb",
  "key27": "4CqnaixBU5qb32h4qsz7Nq5WZLry41bdXg12YgJgAtjjf3moEUERbnX1TJWQwYMQw69xWwzcAxGMtxFEp32q1LUT",
  "key28": "4cGj3zuRCnjQgZ7ZGKKa1R2ZSmLPueUrevL1kNM4fqsBGm97Xox8M7bL3t3bZMJwLn2hrq3qp7TDNmvUXtxisrNV",
  "key29": "2SPAPqFac6LrEXpo2c3XFR4pjoNPbR3R8SWApqfyhh3yZ3niFBbUaj7GJueaGMNvVzzvo2rBPxoWFyZmAk83Pp6t",
  "key30": "5PMByAU8AwoCCUKGuWd9mE5veAPGvMgMHFNkAkWc1t9pSnSE76pwxuCCkjgtoBB68M2jSiE9FSY5xPTde3NfAWeH",
  "key31": "5BoEDZmiHcRMo79LmVAxP4rsAyrWL3khFnrurd5MR7QiuyVmmoM6DneyqaozLwEkY6qM8ERVZSydyjyWZnYyYdoZ",
  "key32": "5Pea6kzUkQpnNhzTuYgeG9kom7v6SotHmjiFydAFhBVXEDyeMZywoLuGrm9kMwcvTaMivBcfXJcoUUD3C19E3oxJ",
  "key33": "4MwMviGojVWrb4k67zFABFr2z5jzCuim4ABP6wyZEpAasnsUA8PqCJtQaQx7KBnEf4oTroWXNM2xrgr7gvbec9v2",
  "key34": "4grPSJv53c7qLL2UWcr4yu6WZwWAXRWcyVeVwMzReYsMzeYgyu8uhthQi1BJ11aF5SPRCfjD8KRBz7xuMegZgaSB",
  "key35": "Jn2FpUy5njjwY3dKTFgWwiyJoe49YzhS9VWTA7z99pkPiqAeGw9Hg7ZJpJAR87BycaC7bjKqmKaN2oC9gD9oH69",
  "key36": "312BgUiA7GWRzKuL61qCLHoW3gAnAamMqBUvCTZbPceJaX6LfYrHDV573Ev7WmUwoZv7Ahfyi8bWNVTKQD1ruF8v",
  "key37": "2W6iFdLYUj5zLhSfS3C33NkiFZVhPzgKZx4dTJkXjUqLk3q8bQt12a6HZEoFBwW8k4Tt4qrbCw8vjyx2jfeF2JXP",
  "key38": "2g7t1W2vom2GDwmiatXx9yftYAUudeXaNhSgXMWgqRCqHH8Ziwr5APDBA5cxkCyCBgrtXYuGQKQZrXi9pP1mXBEq",
  "key39": "5MWA3VPQSRWFeVRYkhUikBMdcsRrZLdNTPqk9TiaZhwCTJsEFY4JCq1i9px9QGiW2pVtrNeU8mQ3SeeNdzcfJ1mm",
  "key40": "4MDLzy6SQGWr2USq3CpwXjhQSXrgL7WTTEx6gyoxT9mXzwQtDaZyTXDMRavxhnQCGTBmSkjM5AgjqqiiUTG4YJpj",
  "key41": "FkzQCu8inx5cvwWEAUZoTxy5w7ibZ9jLAD6H4DsZx4YMYf57CSoP174hmGVNCsY9Cy2Hfc8Te7hGqcg9CvdUxga"
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
