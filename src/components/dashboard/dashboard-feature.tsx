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
    "4EsPRMAVUTYKXcsRJt8aMSNdZ8GRgjUnGVFct7YvmpHkwZeoNMte7FaHMYCdkqi2DzWoX71FWnRpvt3sxaPxdgHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adCo59GD9Wsqk8W7bCmBWkDSkxtgiyH3ThbtciBBYeFpxYq4FDfThn6j7SS2k4KjEbkDAHbtPhBzXSxdVE8X4RY",
  "key1": "2dDEYfen8cmYw2iFY5uh8NH1acXL3nuTCpTRSJa35JLpxij5iGiaXYnDX7AUa9Res5agkJCNMf9m6v5qxDJQYeqK",
  "key2": "5JnuXEC14rG89khoYqvoVkyvBimVEGxPtxnTRjtR6KHiUK6C3yZCBu3yMeCi8ctyj6b6c5F7rekAqb43Ki3FVmeb",
  "key3": "2ff2LPMVfZsZRaGe7qVaX6brk4UNshVPx2SNiQ2EfiNuSCYTSX4onX5r3ab85d83TCcVWE3GSTCsafux5GAMWRAH",
  "key4": "2ZncJSZ6RKsz1xki5RqVnkTg4K3RLs1tSFLePjwt7q7woFVDjUJoCr2qR6XBYrjYy1jz19TCX5hbrUYiW5kih11o",
  "key5": "fxYUmvSSuRWsTvtGhR7cuf9eAJEEuADh3eYJcVN38RCsDmbmkDJRPWxYnkXwjtDKvBeBzxo9idn1Chb87uvQcJQ",
  "key6": "2xcqS5x9RxCsZfmED21LJqTRkrboww4FGi7vQVNP52N7ekUiboTkFA3LqR4X36WBDU7UcCo8oVLgwzyqUdE8QJjj",
  "key7": "32u6dvMFcWDspkE2r64hzNvrHHyPNCR3i1kJA1gZKCL2wzRbxtmeSJqkKfCgMjg1WWdR9ZS56h7E4wziionX2HhZ",
  "key8": "iPukgCmVg1z6Y185pFWGvU8PdnoJSRshuRBc4aenAhqZm3jqjLNf8ubd8jdod48d9z95NVTeHmtb5BUtLkLu7tz",
  "key9": "3vrMGzGQKhUdR3Z8Nc6v4U9D88sV97r88xdYJqDJ9SZNgSFta4i61pBXM8iWmanfd23FAU1eimVJzF3M7iZjerRz",
  "key10": "2WjmKGT5GrKtQeGZBRkzE8rzCKgc3KqvHTZzvEe4BXzkpyEwb33XHU2tyrxsefrxLhemBThDrfxo5vDfus4RWoVq",
  "key11": "WGsRUFvwnu9E7MWEURvJQdT4wc9hnRTs9HcAm973XzT35fUdd5rh9pif9FbzFbr7XQvBbaVwZdcHV5Edupi2g1H",
  "key12": "3anUX1Ky9tzANkxkqwrt8MP5drB97MvQBGbtEof6b8smFQ1ihnhCPB1LRUe8hWrk4WR33mCoFATiNLbXmRPf47az",
  "key13": "4UnbccryGCfDvP1eKuTzwG5T2MwWdaWk5Apfz6uEbwuP3gA1oTE61wzfMhTTUdXaW1ejYi41LLwPR2EERXQffiXu",
  "key14": "2AXkEFXEnhSYfnmvzoEbfFdeP7QA1jw4VzWKE2NNY763qCqpizig2voRcngT29Ds1jEfLYcehA6PFh9kgCKSYdPF",
  "key15": "2wv98cTFNLdSS2REheLdKiMeCw1aEn5VMbUge7u2e5gWePa9CemBGy7fLo2pnSp4UkRKfEqADXQ2dDjGUmEkoein",
  "key16": "5pjEdikK39TYbqzwfcKPiBTWaQMhY3kgZ8kc3KWViwVHRwaSJxxGuf8nFaUHo8f24b8aXRX4uQ9h2XpdAiFT3ZPh",
  "key17": "64cTRtR84bDaTYkaqBwLS3aapRWKAAV7ng1ABXG9pbfcv2cYvcSaTevQ7ku4KxGwGRmtQcCkRJUXU9MxGp3Wrqe1",
  "key18": "2ogWmRnHtdL9NbEVyorXN4mAW7d2LFZdvCqSY2NgmvtMw28oPWb8ZYfk68dJN5anE7vb4fe5uGKq9QAe24VpjMB",
  "key19": "5awpuu8RKnjXEPfAtwpgpYsTupvkK4EZaWKNgeQHeGoxMxeEkNBmx2D7eSfDWd24q55CC1EK4YjJ4CY3boWFPSLt",
  "key20": "21ihx44GXn2oCQu6D4csEDD4jCPrnbQdncGE7cw61jXGu2RN4sVrDsDmLis12bbwFaQKViHQ1khMQD5s4GN9ECVj",
  "key21": "3FDnmoCea5vL8uS8h2NBNoacrRqwS8VJWZPR5e8KUa8jBD59SrTKEV77EWnCoRkLY7zfdndriKFquyxMGGHRgTTh",
  "key22": "2bYUeXNub5xKsd33gWNDdVbNxyMs6fhE5NstjiWqVeMjdxSvCQU4vYwH7mysUFXtab8TkqbdzGE5mhmupJvXixHD",
  "key23": "2sv7jxTHVohPZ6797D8MExMPpQv1DPT7TdpGxy4Jus5cdrpFtxM5ss1TdSvmTM3EX3NB4UTNbQDf8HQWz4sRTVJM",
  "key24": "2ScGL44WUFzgsynmcWYcHdzmBEZaKPfAJUL8vQ3qUg5tN738WD5DhDXuSqVnfq8fvnGhnTbFvqoduQYgTwYdBQyi",
  "key25": "5AwzqxnkKRnGMWeS9gm7iQjmMuMMBaFikaevqkoZbApN9zgaqHRorms2APaGtWADWEHHmAinkU5urer2Rta1TKe3",
  "key26": "SpmutbAcW1rmnLxpzAz8NZyk6wcdkA7Gi9mzVg6jmRRGPx4KK7Ahyo9GqYQqV6JLvji25KfoRURkHh8KqQSwAJM",
  "key27": "3sWwPqk7QvfzCV5RQPoRCvQBoSiUB7skh34RToW7hKutYjrsA3px8yiSdytuTgpFhGRvV8CDp6fCCyEHprkCQSrf",
  "key28": "5pJEYVTM3MSDcq3sY7LD8ufPrjwhFrB1uHPEFj79P32VU2BxAE6j8QVo6y1A5BCcFHLE4YEWiax5kzatzvbfnUvU",
  "key29": "2sRTeL7fQVQHa1d9Ujg6nTV7NytG16nUk7bhoaX3BncSsrpGkAKQwkDbUM2F9Vr2e4ER32NSvSkesfHqqtdD6EoF",
  "key30": "65JJo8rf3TMPqfvWT1RSEFa7HQEg85T9zCKAXt6HceK6g5RzgxEWKK75M9tqC1rDDpYy3wyHsCduRezqzhD61cqK",
  "key31": "5WyLKC1iiHuD3t738ZJfAGTXzt7S7GFcxempcdL6bkeJwrkoDnVLGpjRUtiQCkow1bkNHoigFF3E9gQ8ZHTz5cbz",
  "key32": "2ihQwwEGmCMSNLYtFTL9NWnhwja1xTMwPbdAL4eYxusK1sBSPNyYLNyNjaSRA314FpW9pFQMM4hX9F6Kk7teWX3a"
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
