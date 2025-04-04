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
    "262LV4twdE3XC9sVRQYpGyHdEoP2WrCUzKhPKe4avv8pS5GD4FJvsWc4eo8jNRTkSL7wE7iUDshrhcBJJrDS2FG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kUp7mgMpykKK48Sq1wwfGPYr9mV3ey6r2Yas2dKYxMimjKeFpvzsvMr7fZYxD4VoPpenqp5CASEcVuXx5denv7a",
  "key1": "5UADonELd1S9ikucZbpGu1pQsHr1GR4fRY2NkGesSLgksd6aw5FNHTra6Nt3d1oGkfnvCba2TV1uktiMLk8ccVjJ",
  "key2": "2SMmSaxzMQpWc4eNdHQ2MycfGPxdf62zNNmBVp1GcmV3nAfJBhkVrmyMN4jBKuypdSidxyGdEcTavbaYon39ieYt",
  "key3": "5XDbpGFrVhR4BsRAvALT9MpEUCt8cAAQYCe99qujgw71jdkUYfTvo7xQwjpsvDi3iCqmG1L27CdKVeJjUevDTaxR",
  "key4": "xzqkeZTQPd1g2nFW386nAmTJ4LRWPHgUHP1UPUi5PGyrHuuw7E1Bpp7TRFPJ6iny5D5ehnz5GLggsZ42SM4DPyW",
  "key5": "2xyKRx5sS2gM3NkyVGk5ShyPF2hF8paQ2WzXU6gacCzjAireHHGCPqF41i8cq6TgtoBb23ZkY4cwuJELa1SaWbnM",
  "key6": "3yGTauHX5QeMddjgpQUKHTpfJxVyHPmdXtxDxVC37ZUp4FSRShmwBohvZy9MWBc6tiNR9gv3jXdV4iWNWMZAZoSC",
  "key7": "4hJi5c5Lb75VjMp16o7oXj9Ci7UzSQLJpT5sQUqjZSojaNi88XM4pxUsXLsY7uNv72EsCxoEjMRJtyJcsqznzjwA",
  "key8": "3eyEsQvtjaJGtxoHqKPqdScByUCYQp4Jo59JcisfqoPoSeBfRpfeChxkif2cZwWCEdTn1CZZrA1wFuK6adSPr4eN",
  "key9": "4399wrsvZQEMvR3bcvHA2iw2Wiet7ReYUrYpyzHH684F3ztvbWuKzkcqrpq4K8svRBSgDtyCQUf1J9BszKYPJDPx",
  "key10": "2q34DPYrsN4tYxvqTYYiLWk8EQmnESSy2J2Wkd3Sc9mWmAw9DuMyFzim3jzMCmX1nZuEukAyWbdYpH9KmE4SCURN",
  "key11": "4NgmMRi3TdYaWq4VGDYBr2cg8hgwJRutQFod5Ji9aXJJqbg44qUtSBH44LqCmCHk4ekf9XgPrTJzvdW5jKAyoaB4",
  "key12": "3yCtm4A9JVcn8J4JNDNH2zhgrRpGVBM5yznwouYm4JUG63CTAy1kCTZcd8EQK4Js36dphxDFV16QXMCa5MyeSdoP",
  "key13": "2kgekApDBGYEZNiLipjkAYipSioBAyj68TnBMDhaf6Jh75zwtuvhENcFfYthWL96g29htPoWzAEfqbsJTkiucJY9",
  "key14": "2dyCcaK4F5yQ5UHkKU2nW3xdb4MpEDibu69YJkciMEVywrK7PkffGB5UAC5pbQQmR49sCcBf8yxNYzrTnwbpAZoJ",
  "key15": "49WoM2WKVzsfg1NzbasCGJHsznzQbW9vsH9qkEnS6tEXUuBTG9daKhrzfTVfB8vjb8rtLNhQXUJRiv72Cdpnti1i",
  "key16": "8A22mGYWk365u5PfixkkyGtdZgeRrzynZMw4KaXMN9yxA5R9cEHgK8KFsAdi5Eg8HVc3mbbxn1sXx7STS8Q96kF",
  "key17": "nzG7DdEBds5qDD7T77Htr1LuRWaefc2WQS8WWtJVFaSBD4TZ9tVfYhLvDDs6XrQqXec89nPVZVq4PcXfapMhesc",
  "key18": "2Anw4cdk5XepZDYH3JMo3oHZMUsy89LTzxdsnhf2HjAdpyKNSTCTisZUfdMAVZorD7Z2B1FcP8kQEUAsft7sUjhT",
  "key19": "3u7wL7Si2UemELGhUm89sRwhRwEWs2FeSMie6QdeRZXT9UksS6u2sZbnz3mCoiY7CisEzGMdfDuv6ikmmi5jmDmJ",
  "key20": "5KbiTHZSqqAoqAJpELJaYF5THVTJ9X8e8isGkqwgr8GCXY4bwn6PUh6nDYvUaJDsYNRY57LjcwqjNr6oo5MnH3a2",
  "key21": "4LEyMyATXsZZEjzrgdv6hFFG7oJLy9dUGYq2WnmuTTM2qPHzRSJf3Q5XJXND1Mbhoo14tepS79Xc4eMPE9Kk6a5H",
  "key22": "64LgTgLxGHpndLKeoRTtPQ67rWRNWnbkjftrNqJWzksKtf6NCYVWy9cCNqQFb7ttyzFbmFhDy9hSKySvWki3KDAS",
  "key23": "5bdquAKCRS1g1wTTpQLvSU2ycHPWshqeaJmr9Us2aFJaFhCjN4Hjt5sL1Js7ao8vKFW2AvR8rPWrRM4c8KsQpvc5",
  "key24": "xMvtC3W68RG6ufymHbwpKLDzymj7KyX2pmmGQyVMGpn3MD4L3wsiNYrDoxT6mvK6wxNg9iVZNuwssBPkp1oJKE4",
  "key25": "2CjGd6dYU1HADkoERvQhYJVnQ61KTFAhXXJzBavRtYUEpvsaEywRMffPTGQen2K9BoDcS6fmrkxdNxG7Zejj1XUp",
  "key26": "5eX9dzPzGLYBzWfcC5LRdUGehykmYFXh7BQMriCYvADPrDd2U8geXHDWm9Lf7pVRPhbxiEBZXMNRtRZzn5y2U4ek",
  "key27": "584vaNXEXmxchi14FRM41u4Wqisqzg9torWWo2aFuCwirEACRxmmddtK7FziWXRT4PPJ5fXukDqEYgtp6iHhdEVk",
  "key28": "34TEgX82Md6YU9CPxnt9Jds6NUh8cNRJRLBjYpFqW7ZW1fhPvo27vV6mTvC74xw3AcS2wRZgWgjTCr32tcF5MiL7",
  "key29": "4V5fHRq7r4iegCZaafaeyHrrnCfXedhFHj9xfsFoh8XNeAVweRfthYY6VDLUxKcSxiA8BrePuWe3PnPkpQHMEAiR",
  "key30": "2XiciWpB7Ni1C8kvhz2zfUJBCgUDxHd1vQUw9NjJnWYABHPHBQwgKr28BTihMNvFK8uMBxQHxDU1q5fiyRT7NALw",
  "key31": "4wwnbFQN712CvdwWcKjb2ZiKwQb63aAcSsnP6bwRBBFLvXN558nx8GokiTDK9F4prBWAGRbGxGrvYn7CRDYMfnvL",
  "key32": "3zLjHNGAktxZUd3cUeuHD4T1pKcXXJmmRt45EBdr1d62LBw8JeXf53KBkwCjpWZinUuNVHso5vsrw29Spaxv6oSB",
  "key33": "5BpUVPjCcgjPnezNo9V2hGtKq1Ufas83Eiu28eGUfT7HJLjRbwipzG1cizjaa4VkBUFMeXqw5JehRgDSGjTgVuQ6",
  "key34": "3by5En25DxMucwWkqonXTASzBHkLGdeAJqHww3gL9ingZ4CwsZYiaBmgxLzX6BZMHfPHsCZNNUR7th71gpxSvwcN",
  "key35": "27z7CXUexeSWyJ1z6CA8oEhooSxTV2ESq8PE9Gg4vsHR8td2QkJzLkVLCypnaGZ8kDcGczptsPYVRfUHsCtJnEDC",
  "key36": "mev7MbjFNgThCupwfFnqMJhjkdww2uJg1ZC3pTaSjT5Lj2otmu7DCT6g2WPj2oLbyGv4NdWHVEH41bQosn6w9e5",
  "key37": "2qEUXwRLxS1PCgKdU7dZPFDXsHvDGK9eBRZjFdrWoqt4vDRPJULuv91UMUnHfGeA7XTfXZV4VnvcMZ2YDg3TnwGd",
  "key38": "5pZVHE6kQek3EtSm8YtHtKT6MUXvLokTyFvj8RTqS1VfCAUV8C3AqJKTMJmZA6i8NJtLY3sq1DZoPSvhCW4ShWzJ",
  "key39": "2ZvpfJq4XZwJie7fAzQNVvhraHj1p3SScYfFAm8YVASboFY2mfssK4qzvLprM8fhCERiqiT4dKrZmReFJqCS2onf",
  "key40": "2vdeLhLzatSdnQwqj9WjjpHGhQXU38vDgHQMeK6a8fbtapniZxpMXGq7xgDcjuR7ytc15GWfs3G6fCo2mqaaMRE3",
  "key41": "2cGyk8sc3sC2RTgSNNnXNmVT2nA9s3gTJs2XdBPqYGRW1wcnqRGfaCAuaxUdCHNKqhCDPYKqF813CqdAK5b8JbAF",
  "key42": "623sgCJ9zpsgLRrxuNcqsYe9AajdG8mXZamvNXwhGWCrxhPPMtxZP3awRhdpeGBEkRZUQthG8KUyt7zP5aAFRVNR",
  "key43": "5AMq7CSB4seYA8Zh6tijDBDENo58t1epksDVzoP9QrUo9q9FrNGKPq2KPK6LtuHCnyF4BqDQutQWgxpqpqhyjiCZ",
  "key44": "4yWnWMrfHteWUB51b4BgA373tS4ZyUdKFapd94NCs9rWtGziX5RoP3VGWiXUynpP3ruaW12vK5t3PfJaHLtyq6V6",
  "key45": "4Xx6on5cDtJYxghBma7zqXqYt4egG7tW1ynQwTBSAz3KQekL165pFXoiRiUkc4cuHuAUYqxM5gLvuL2HnySbDztu",
  "key46": "2auf6cE7d6FmKWd2bueVAeKtPcDXkXsMck71h73ws4ZQNCS2jWNzCNhCVNhFi9fL3dyfX288rcTeu39jqcjEG5J"
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
