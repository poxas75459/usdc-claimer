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
    "29jQSc78gZv8f3itzxnjman8Y8HA4RYfLJX1d23korAnsL4XWKNBvyn75wM854Nu8rRAx6UjuHS2ySB5EaBrv9JM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32emvjHSQvFunT66SDxunk2rxZpSw8zXkuTkPZtcqG8nBoUuQt9fRnZbG6QJLXJuguMaujgfhLp5zWPUiiiAAzcZ",
  "key1": "LK7hdMcqyLAuVDxRDFc2zMHMzmxUXQ3LqosTScSNFWpxbButLCJAqLUzUJy5jMeooetxawcZZceXGp7MLYcGgTH",
  "key2": "25V3fm5SnHSmTMjLGmWPceA5s7E7RQ8v3kwMAk3nSpi25ge9T8eDWb4DVXmvBzBvYoWXHYYTeoq4q2wUpo9wunPZ",
  "key3": "3AHdgtwGNokrRGniFYEWvD5ybZaSpWnb811k1pXBtJNCN5aiFzrnPkJ5Ugse6iHxtQUxKnmsF2DWZhezenQq82yv",
  "key4": "5DKzWpX6WpMyAh8FfUdbetBVRkGGgtp21zM1wioYZNmJUu8FJzT87PCKVkk2LFaBUSNEYYrGw3mEEumFbBUX8fGD",
  "key5": "2D6JrsbrhCJnAXssntmEojKpxombFwdxQWgNs3zRPhue7cMTaBQytryY982YQCR6kQGG9b92kXfXY9hGXdewp8bd",
  "key6": "Q1eMmd1HqessTCgBe9n2ghs4siqyZmaEYhQi1HYSfE51sN3HjkZZiro55kQ75z2SF1gj3SfVdZh1oF3WyBZLERS",
  "key7": "5xvtCXpf3bn9DNiVJ45Nb9bfne9a7gMCL1DmGK3K2eyanmMRWCwTmFuHmmiPeP2ikNWD3xsj5XxY6X8y2giQ9vuu",
  "key8": "5VKwUFwYwzgH1nib5MhMXkq3yb9qReR1tHyW8ow31xpP5ALzH15pq52kgiK1usq8RwUFcepsPu1nSmxx3Q7qLXbW",
  "key9": "3Sopdv8JiZMfP7ujv3qt2KZwMrD1qKws7mRLDXSvK3rkYhPn5GmPbX5pVPeJM7eyxbZdQbw7c7HdN9AqdPV8ZdGA",
  "key10": "xVkSa99ELYFTqKXPQgG6q5x6P9E2BR1bG6nFvv6v71kL8knX3UjbyvdHERHj3PXCkPBiufPEsjaTRmHUztAUmkX",
  "key11": "2avs24zQ9iGUvJkQ6V2KB1S3wa9PpsmAs4siGzBnzmq4ANbiz5eWziiCnuxasdh6BLtcFJsqksuHhQThPyzA7Vk9",
  "key12": "hXGuq8w5ydn6FXoCqe2nv25DKksFfDezRE3ZneGXTymHfxBdg2trcRoPg9Qs6YfUtzXoL5SvaZLCJbiB8vZtjWB",
  "key13": "2Mm15Mve4nmJkzQvak2C1exfg7UkEELKZj74gf1EVDR8pqv4rA6ocR6US5JwhxzGSKfftJpRTpNFNeSH9oXNqSES",
  "key14": "3RBszVFu1iGfPZqjeABFcUXusJTkxdkoCR6zhAeNfNc6FRHuJLPpbTD95Kj1qUJvpbT4i2nMCK5uxdzrzH9rKD1q",
  "key15": "27nPa4Zmt7r4dVvvD3dou8ZNEGjiyP7oriiaFVwXKJXbtYPERrEzf7FKMUcY4wFou2S2V5CHhyugUALkDoop3kJy",
  "key16": "5DnxXLzuUGGHk3r9LMrAoHCjVXDJf3fJ4UmDtsBN1U5BYjTbaCwNwYPMx9SqJwneKKHqYGVhcpp35ZyB3FYyERc4",
  "key17": "5xQUfzUgVSaJXHUz4p3ffPaNo4CN4menmsw5oJKsFyVAaB2p8XSAv6M2oAvgBVxYyRV74wrtQWeWTkVaD3o4jvKE",
  "key18": "A5AJfpH6CC8YmGRsGhtTNohJeKhsoFXkgKSXCH8Qrr4bfmzNB4T27AWfoZZYTaWHHMn9F2rZowXqyj92wCyiayi",
  "key19": "4QkuGYQqwvTCiX1LTmN1C54RkVutd5Gx7JGeoLDazfxtmEGKuvvHZLF7LeueBUQnJSzk1BRUQ7XskhVU1oXGMKTq",
  "key20": "spskNf5x7gPG7RaHZUao8oweNGH8vAXMgkkb4hDT5z2hcYU8QdnHzJ95Jf2EaFg2LXUVddhgWZV1bJvkDqeUJvQ",
  "key21": "5khhFLsK7dYPi2chUzYtttXF3QwdNAtx54jTyAFkAjW89WjXVvrQH4cyZmACZ62RTqgbFxuLhvgajdskh6nVPfVg",
  "key22": "5f5GHYzSYxwoq1h8vY79EvdzBy3AJ47DqXKEWxhEWHXa1GpzMEZASMDDaHhLFCHHw5KitxUCddQ1yXk4ngrCQzkw",
  "key23": "4uZikmEkbjJ8bSVXcZpaE6yKC83tWTCrESqivbKGQpodRenfGCMSdoXPyeEyo6RZzRM8phWsJ6GEHjLczM6p8Kt6",
  "key24": "3DkKfBdTwHVWx2K3bYLy5pYins5vw5Unph9yZ4khv9bZyqtuHKoYgzNcEFnamdMho8utA2N9x9ytND81PL3LKTNU",
  "key25": "G84eyuXqy8KAVL2Gn6Au3qkk3pLkA55ndwMUZ5mRJJJgHViY1Mef44XbNF89fKvC5AumNNgqLMzTvUW8Kx6NHeP",
  "key26": "281Ud8dzdgiXjxGR6wwzDxEUqjhfBJQWG1v3GSdhQZDd12kniRVRhM3kJnsJkwkPx3m9QQx57ZSQMWwBx8jwm44D",
  "key27": "3FNDeSUZw6tGg7rQzNuJSrQnzyQrv3pxQZWaF5fRvyMsdEy3SBeGG4T3ZJHaNmdnihyJnLCydjv6mcXF39QPZJ2X",
  "key28": "5Ci3dVPvXWs3LBfuPcmxFeaKasqr2KHYr7n3dn9d6ZqDVkMhR5T84UyVozciWCS3SPQskfhZMmizxSsYHAF8qT1a",
  "key29": "8hp1XFDq2wdGeH46CCjQr7DfZAqX667NWuRP5P3U5rcME7XxKG23ZdN158wSAJCjyKmdvdJRGkwPULdoGs6snfD",
  "key30": "Vsj2KZYbR48R2khECPCgfHeP2omfXJ9Xbuj1o64VgEbB7BLow2HrhDST3x8AprDrtosxGqUBoA88oNLfhmF1y1j",
  "key31": "g1mj84kPYTqTAr2rhicQ34w8Fv4eNf1TTQW1XtcM2V5Q2AWbmgQNG7egcu2AWUeHMakDoU4t5E7PnBRhwd9T43K",
  "key32": "4bpZH4mvBK4sNyRmDLf37VxhkLQ8wGLL6KYeeNg81jt258ZaWoyScR9ZgMb6Ttv9uQMQcdcGmqxbPi2CQjFh2UkG",
  "key33": "33jDi7nFsjMX6VFZjanNLDT1sYkjH4ypk4KvJg3rYWWwNiZQRWwVMzmz2f3mJuMJyDf6VqPTh35dNNB1brAd23ug",
  "key34": "5Dva7JREKtd8JBNuvQrcwdh7SXDu8AnPzYyunicHxce4ssHG8ByLTgPZEww3zanvJBDt1ndvGwLDnefXmDiQeVNa",
  "key35": "5KYCvqqHNSwSSjUmaa69FG8XvsygNC8chewB6dWgzdJBQfVedcotTA1WyKqsVHZbk69VYZ9kx6xhNGAKuWrXso66",
  "key36": "zhYnNh6v9e9LTDP4XJahTvi1ACkhZCxmnX3BVMisKjPihUqHzEFgPoFHX48fHALxf5sjUqLmtsWrwpHrrSWD2MK",
  "key37": "5yrESWDpABThp2iDGAxH9pL1FpXoCnoHFWJCmGtyvaUm2rcpBayz3gJTNsHsfTbZdutf4pxA3drDZQrxG72FAuKg",
  "key38": "3aV7rPGRsRuXV2fhrYKkxVQ9e1LTSugc4cKHe1sNS9w2ds8qTAhvzLRFAHjx81ULenvTG8Ws3ZQ8iVu1A2BQW7Ax",
  "key39": "46Sa9NEvDwtk3KCVmMnxPKzeNza5tp1Qivv1e8uNeS9fW5ULb4SiSaDvjBcihPDRz9S37TqcT51f1xSfiXQkCH26",
  "key40": "3MZgh92VcsZiB923DMpBBAwwaLtgVvxGBfGELiA4SAuAC3t7NioLTnRhqzCRLZtow1fdB2PMQde6P2fUSHEeM5Wt",
  "key41": "3BmGfJ1WT8SGXxpuJmcoJmxXVc5QNkwJk59ACmqiFwoxHvY349tzTnR4DDjBWuQxGK4NXgZkwDKqG19HGnSLWwu3",
  "key42": "gM5141vwp7rf7hJNMv6vhyN7ZMFyvdnv7ykmU59XwgRzXDgrpgW3fLVBKgvEMB46ARjauRC6bHMXkqrBK9M2MHZ",
  "key43": "56oF6PERvm9weGrBT5oTDPnem76z9jU8fcY3VSR4qpFPhi7WENGZZ9b9hvVudqnqw5fG9vWjLypk9oi4T2cTtjVy",
  "key44": "4YicYqQXnSkVf7veKhrSo74f9Z9ES7qj8Wq1tRr4YksSXAPQSUnW3bTakvYtNrVdSRty2WsjShgck9LhTTZ6ni35",
  "key45": "3EWrAGU3Y54xVpkohA4JYoV2GKutLayCBt1ZZEV5dKWv8YALdrMbEQ5YUpkxmVX3WUWkhwz2L3hBpBksQ4qUDCAy",
  "key46": "4xe2cAYnNxe159aDiDBwP4i8HeQJdPN6f7REyC8mrQkDVrRHZmbApxyjYJBsUR4qtueg9w352bCEQNo6K6GjtDhD",
  "key47": "5PDqBrzPXHKjvEvuJHK6Q4RFEnWcJ3pZZongkrSiPWKHoCSnBjhMCps3UfpbC54HM6gQ8CwfP5TQf8Feo3GWJwMy",
  "key48": "suya8AzaDc6dXXXPKbhvDjG8K78B5rZwzLPx6m5eGardNquwfiGMUJ6z9sxEQ7AGLUVPzixgQLWxHYBDDnvyAty",
  "key49": "2W9prD5BuHbkaY7Lj4EF3c8ND6PBe3bP7P8sozAXhvER2aD3NXZEHgznqZ8tunoHKxQy8dbDHLyeai3ND55tPWEQ"
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
