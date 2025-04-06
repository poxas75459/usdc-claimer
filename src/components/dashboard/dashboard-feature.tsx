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
    "4hAWRQfc2Qzqzpu5Ni1X4Y3Kxc7gHLGnV6QTq16AQPmdE9C1uGSYDhsu4fuuTkP9iR1wS7orSLDN5xMs9AYfdXxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzcGfWfNfR35TBcmrTk9Ndsd3ix8HSgtmfuh3jKZ6HJDqfS9etdVEH4owJFr7vnDA5hTkpwr6fKryNnh2bCgLBC",
  "key1": "41Smz9inuAS88HYKfd7DUoEkCy2TR2LcMs6TFzJhxT16f91Aycte982m3wSoVrL6pPs6m1ZaJQruaTFVSFYDDfaA",
  "key2": "y5AFBMu1LM2yk9yuqE4Zb4Y5f8s2J8CUV6eSKHQrcYwABVC6kVJcBHphwKAEbknNtYraoKEcDFgLFYENq2dUgWu",
  "key3": "3jCjmqrr2n9MJPRZHu8Hf4JmNA4H6WS25n5iiULosRtBCX2sp8kJWPeEUEQMGL25tmWmE28VSBffuLjAghbZrES6",
  "key4": "F9nAaQfSdPGBKZsF4zuUDKuwwXY7wfnBvCzSWZkZjnMbio6ge6tBAuNzJPoizu7ZmP4Yeux7E561n6CCagnYcW9",
  "key5": "2HU9ziVYSEWmr6v6A6mWneUUv6BRab3BekzqE41xkBBmc8jD75D5qwowXrtT2jvPNQ3mBvEyzaquxbPXaFJ2uHoD",
  "key6": "2JiyXjte8by79C1a5UpVX5ufE5276ViV3LG75eMQ7aNvfHVtcTVnnYBSokdQY47rofftAd2w8bZy6kT1nis52vNA",
  "key7": "2EdQUDovFmRAu6CbxUvx24hYa3uGN6DmhwBoYTc86sHJuJVGDrsS7rbc7e8LGSZ4rRs3cJZtm8DoCvsz2wu4abmX",
  "key8": "3e5gqXoHzUG518FWcMaMr5KdkHTBoo6AhHrBkETyRV53TxGexTMFVLfNp3hmMmSNr746YXzHFns7iHqYhypGgPQ3",
  "key9": "63dHjEfgg9SZMausui2kPoKrWweSiuPZkBpo24WGcyqqUFVJ8JwAV1jVhvyuARzmV8c2ck4q8DmAAh8H7qDWrjud",
  "key10": "2r5PDDC7khEN55fFHsurHLCV3hc7JTwkZebKXdeBWMsyY2S8M3oYrRYSQTJoTbahKfKxBQegmj6SZ4A67uf3ww5u",
  "key11": "5bqzEuEzivD6sXuDrnxSQtfhcGfPVsKVEbD57sr2ksrfh7CLSUoefDAMLWcfVQfbkJuiMpwpsEBmShWqmytbxEXk",
  "key12": "4JgsD675DpkUkDbc5T8W47T1Y1McRguQAC5eodJEmQcXRGJVHgs1UzVH6uNNVuHe4Cv82XcBWaSxjotXr4FgAy5S",
  "key13": "55jc58VMrh2y99MhYn3g2c64Q8kTzDTvbS9YZHBnQKtR5znWQYogYwQnfnsngT2mXKZ4CYNtLbXQ7fkf2GCMZyqU",
  "key14": "2AtufLg46oAD6UyqAb2JhfnEAZFhesyZBNKvexB3gYzzG2REFCBgD81ij6BgSpP7sTQVfr2cFYBnYfF3cv4spF5B",
  "key15": "5qcDwUf2g6iFsZ46RFbPppz76J1pVRgmeGrEVkHGrYH9QjVJD1dFVeovqEZKYHqx4rD9jx9AhvE1feHwBBAjt3Rb",
  "key16": "4kxQr1EP6KGmiTYS83J8jUnSXevnU3yC84w2wVM3TD3gio2DZTwE2yBuwPiWy3LqA6h3xivzYLeh4hLKhoxpajUT",
  "key17": "2Zn9F8Q6D9QVj25D2eX8xk3yVgmZXR1fZzEHM6SKfdQe8NSqJZ7GYQmFwX4xbKzrR9bvatcty8mDagniBxZcpSE6",
  "key18": "C37V1rxdeD1FHHNVNgyPEKHy9fZQCJE3XxCrkFETd1W7QLKMUHrW72dnpGBGihGaW4oWLmaogTRvGEWkirec6eu",
  "key19": "4TUANHf9pYXfWEMYU59ygnwpPickQwFZXRWJY5Q8mJm73Vbe2g2JhQKLR5k5R7adxfRGpBDJWRm7aquDPwfw5k31",
  "key20": "4msVPWAvEKHDEsaadG5n831BH6Q6nEY7hevdn6xAPz3e74x8uZRMzPa44M9uD3zeNgNFj3NSET7RGzktRFULe46P",
  "key21": "4P1wW3pUPHfA9rkdx6YTzBfpWZwkAH2YD4aCbQticCkGHtRX1j9ahFYg4TWzx2miS76wnLfWhp17Rv1csEHiQW1c",
  "key22": "4a978ENgnMpEANkQPA7TrxW85gaWUgVAtbGo3EfbyXTC2Q1iiYUDw1UvNhctWrM7Hqtx4vysgg89xBGwipMfWc1N",
  "key23": "jyffsnbHM7AGYSmVkuGDj6HCpRRvDsy5hquTKPmd4bQyL1aEFKWE9Kv6eBKBzqpZYa6XtSqQfr8MnsNmgtPS8X6",
  "key24": "5GtSSP9aR7SesjfZdhcmrQSnD28Wn9ZAFgLBhx5jPBGieJyjDzZLFSmNUGG7Wvdz1ZVp9M8xqKv6RQzwUrDinVkK",
  "key25": "42eyHeienivM66G32uq6kaxHAjtdtyrnYXSaBRz8UDh5esuTEvGWVVwymUiYGwrqkg7AzkiAhkAShPynsSTaW2KX",
  "key26": "B1GCD4t18jm83AtkQBUso26CEy9CjDw8YLcq9bKXbXRVoeruWqWtavjLkmnXadGZN1syEunLxfeDFAohX4Jgv8J",
  "key27": "dj5UTjZcWfrj5N7HMnnn9SEhVxgiK8mynyKVidVRHUk4AVB3viQEq7NutGuVgMFsmZcDr2dWTG2S9MXeaJYKpN6",
  "key28": "3SRieXYLEadtXL849dRNAWtYk1u4vnvjh1iB3CUMPVYq1gtKVWJe8SZ8Ek63Wq4KNAm8REr1vESUzkLvNRuRZayT",
  "key29": "31hVrcpD9tUhBJ8WsFEaWnuY3yNjdwbcRiyCCxDqAUuLpbWK7YCyV7qwAMxTJo4pqH5qQRjMbNt2TTsqqYbXUAUH",
  "key30": "rCoDYRodgRJUa2QUUzpJFoTUhLGmzTpqE82hVhxkUgPBUnnjFw6Whw95eoQzXaiXdmUETebtvWDvCgbWpz6k6cg",
  "key31": "4jPEDrfffYfrSVNjqeCXwB7NzZ3nbXqiMfvLK6s28XXF3F6X3DkDbRpDBr2HgZU4jzPiUeUrdydDjGYwGongMsvS",
  "key32": "3n8fGZj9GcbSZUbKtjrN4nQrUifu4VRSWBqRNrHK7kiVwod9M73j5biXUupwtaiLgScSZf6bu6yLVPnmioUFRy8p",
  "key33": "3e3nVEc7Z9TzJuWDjPqDuwe8zeZgDqL3qDPNScAX7GqrtRC59vQVBCNGq9ag7rNkotcztP2gF4Lp8NwHErvVU4Qh",
  "key34": "5dTn98y4aSYyxJoLY8ucy4TJocL1MFtf97G2gorjGBGS77BA52sjnABzVnUBqwbhgxcXbCDeahj3Kgwyq6dn6gwo"
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
