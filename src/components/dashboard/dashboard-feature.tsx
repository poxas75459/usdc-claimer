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
    "3dakytSKy3kQdQPg2T5JMYaFRzG7PccMvzWhrRMSv9kuSKDLre9ou3tCPYg6y1FrjHgAcEbuF9rJLndMWfJZwRVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrLAQNMYRySViyPv34VgWvgkdNcrX8GgbbXYBA1d4XGDEErVXmxuyaZXMYtBTFV1vk9TZDHFCESoup3HC6QYVsg",
  "key1": "63mzmgaHu44QwTCeuNiFPRWk7Dv5BVuGCnAT4CBdqeoyhuz5kLqZ8Lt69PAB5nan4xGPA3GDXyKcxBeAt1mxJENE",
  "key2": "45tub4sCnLLFfUHrWRXYFw3w6DHn5vgpzKxHaEquCQk5xPAGyijnRvxKdeyUuqLN3yTdGwW6Hz9rh6ieMYoKwk9v",
  "key3": "2fwnuzWj2snmVAChJTWpXcP8xbzwhdtMNAjxvE5gPymf77U7KmKobyapj2PydzSLndApNmCkg2RvJLpTd2puPBs3",
  "key4": "JsniNbKGae9hLS212wCJVeC9PozK89Wm5sdF6jSiQR7wFjYWEUchEPnZujv3NvQVnpWzoLxknPCm8mPWKky2y4R",
  "key5": "26REAPuFoZd5AzyE4CWGP8fAYe3QQ53F8gH1iDFsocsFvL9fb3ne8YwjfvdyviNmwpoC9NJWuSsanLH67UxMNxUu",
  "key6": "62Q1r5fyZ4UZ2BEYpvgzXyoo4WAckwfUB3x5B1QDBUDJNAcPVyuHeWJZkXjdqBe6Pu6HTYH6whoCsoEhhpsBnUVU",
  "key7": "59YQECnQqhRQuXg9bbLRaUQsqaR5DhW87YWttj37948RnEyocrAtBisYdVGaGPXUXwYFGQwAvGreY3W2a5wz7YqC",
  "key8": "2DghiGKLVXhCXgLNxRtw6y7yjVLfoeJiKMuuuRyMwp9y1KwHHvHt1ikggp51W5uu3k3PWm7fJJ6nrgY1j9VYiJxc",
  "key9": "28Cm3Zkqk4igzkAePMMmgScZvL5A7BAkwvwMqqnCNTosHf9Bt35pAnx1xmenwveutMC3deHaPgWAbkKpZ37KaokE",
  "key10": "37AsRQA64uofBWUUzdhk6WZCzbqpbhNbfW3UbQkx2FUvCxAw5rQJhhuj3Apd8pUiLhiMymUvfQfntGGt69fuk7h1",
  "key11": "gX9W8RvAi2q5jk6yPTqvCap5X93t7Y3Bk2mJTtcJsq1BpC5msoySEetQGcqde7hP4bHRYUgz8QnQiVvpjnS4aPX",
  "key12": "MZbFqpQrr5fcHYzKY6YZZrivC6cmYwNHNcopTKZS1JMAfQHg9RGPLH6od9pbwLphKh8DK3DToYtgxegyrRfdXf4",
  "key13": "3GQQty16k7topBaQwzRffa5BrUBdXrK6YZWabzscp1eYi1TJ7dvVtaVfFrnw1ubnQ9qM9jAZJ8mNNksRdaVXb9aA",
  "key14": "8noXZMQ1FmyGehi7HPq6uBJDufUGJsieX4h9NS4PEtQyE57wt63T6nnw9U2W7XM84vVePKcroByHHkScmirmN7u",
  "key15": "Awrn94QLY8sHfaBMDHgfgsy9BsfGqFxE3JkUTjpuT7YDd15D4EZkRy2o16y3f18tFV98KSvzQS2iUgFoRyuMtQG",
  "key16": "3LPvU1MUtVa5jVHsmbLY62fSA8ba5iWCdstpUzKJTRJCYuxweGDrxPVSscbUTGHsf5Atm6jwP6rWmKggsZgJdcL9",
  "key17": "htZgzYxVFuu4evufvNjhDqea7RMy3aGez5PPvRGCLu9KiJgDNfX1yersua2dQjsjXkEDucoUsRKUJ5Na9wJwgTH",
  "key18": "5RSJRdRvneSiArs5dYaynY9pXaGs5JcKuzfakTJ3ifJSnQYt5bvAiB9NJ2Dpqv2ysEbxTF41FgNBm99sMgHPXSqA",
  "key19": "2xfAphzNViRuTMSEwRmukKchoe94PcRF5uH7VkU6WsDJYjVX235WAETMMcqfuVrpe9VvfJ2behPQ8gE6sfBERCWq",
  "key20": "4JeJYh2Tmvc51cVctP2c2NH7Mu8p82qzEaiKVn66EXZi4LcZ9pg2oeDDPcX5yN7tUuRDxoVKEjRWx8uULJDdrGRq",
  "key21": "3R8SYdw4KUhWkrbHYThrBjWzGLzE5nZrXNYXYYxLUmeCwBkmfKpXBHsJiJsa6XMZVesu49YSPvD6NMmm4NHnnq2G",
  "key22": "4r674HhgLfeANvY1jUGLxV8r71cbmuvcEaZEsVhZVHVe1y7ruAxC6wFikxnMMYNRkyYaES4iYYsmbFhMdbVYP45a",
  "key23": "2tDByEg6PhVdaB8M5xFmxWTRd1bMg273wewXdYbSovwfvLL7vnxVog6Jg6qDjqzQ3ngCWJdxBzMcH6F4NhWWtzec",
  "key24": "5eyNLdSbTZVvyGz8z2c6vwfDuYJNKpv3RSaLGFiY4t1A5T139MHDuYP7Cv9wH7UTYLE5yRtkfiijLCJMSfhk3VPK",
  "key25": "5PKFog8DwCnV8Yys2EGjnS2NRLmcKBAqySSonwTaLZB2fCGpqjKzVwVT3hpL2rvd93NPwKRMLeFQNbXEGap9VRqM",
  "key26": "5BDxXzrfuVKAjkr4kvq2xTwZQDFh9W3F3gD34z7ytVqMaLFJTJJCjH8DAh7VRsx7tUcqfNsGRzQFNLXodKMHMiYU",
  "key27": "5RuSmX7kiY6BvDwL5y3zA8AQFZ3QRsFpWrkGKPkvZLdBKbud7LEasstWDb987b2mcH8XhtaXiGtpZgP4QhWGMMXq",
  "key28": "59kuHaoYNTjgqm5bWXXgC51RnKd96oEPvTqKDcR2csEZBbRTgqLe2yJeJMHDzr8Ws8HAfPSh8KVosej4hiJei9Az",
  "key29": "2YDGy3cJfinb24x9YdQrNkUxBarSqYj6DKUpyjV3pJAndjfqYuiNbtbUTyodZWceFt7aw7eX19yeAUccrtRRFqsg",
  "key30": "37TA2T9WeuR68X6DtunuHABVj31jVBqZRfachiKb5ZEq1FfyJZn9P9XeF8avqVbwfmUaRjXPNie7UPrmgKycNMyp",
  "key31": "5YR2iY82SroVSpubp6mdMYw3VkXDQebEuXFx1CiE4AqJUmTi1uZTZKUfnM3vjtk5fxNshWENPevvXv7cGxZcL5VN",
  "key32": "5oN9Mym7vCD3q42AcXh4a6Kwc5NPGSw98T4g3BDb2yYZAVN2DMv5YNDjYNQjwUpVEiNfBRemhSTLUZZz1A7LduvP",
  "key33": "2fE6ZvNQRLrbs4epCd37u7WZFcofNHrLdiPw6h4cp59nnsf13frSGkw9L9kyttQ3zYu62Df1wvfpzqxWfQWNQjKy",
  "key34": "3NWwKLH8YhkADsXY6cBd3yXpVtBNeGbchoht6C81HXBuCV47CdRH8whCw6qRCA2gVCDjyeHT7BzQADaMCc1E4fjm",
  "key35": "2gftGkoA6Tcp7e6YNtWVqd4NQb53DMVqpc3o3FGXSGpV8Uz8ktFq4292qZgjjUPHZMg7jZGqdFtkp5fuGv4eeyu2",
  "key36": "1qNZdGuLPFAVEASUuakkDNcTSZF85P9Hfhjo8BLP4mLtzFVL46rZdeDQ8f14UitvXzVcrAhjzxQGvhrGwGMvnQ8",
  "key37": "cosCdeEk2EL7rzZDJR2S2VcAzDFNEvTBQWvsgDPWJ1JNAGjFuSW9KY7VMy5uiMesHTH2A55BjBHjWS43xEUxe9c",
  "key38": "3prwfVneC4vPG5sCRsV8AYDyFMc3x3WUHiHHRJHpDPB7YfnumEEdBVMXxqAmwqeAp538QZf479a9jq4rRLA3sFGP",
  "key39": "5HaxdNCETDQ8LbiAjHtveTbqHnKWMPL2CVAuvndU87ngmSo74kpPnE7eFzbTTJxRp1eXcPGVkZd2oVCMXaVENe9u",
  "key40": "4bRTcd83MXZh1s98xEfSdKN4Trrtjk5YzhCCYzkeAqGftxJrFzMF8yJyspAXjYmEmbtfD1n6ZKX1rPakk31FaNpt",
  "key41": "4XkFVngSdvBLX8FMDiahhJH29pXaaD2yE9K7oyZ2uNchj43UnLM3bEisBtZJmw2Na38GH1zZPYfVb6nWhpzmYyHQ"
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
