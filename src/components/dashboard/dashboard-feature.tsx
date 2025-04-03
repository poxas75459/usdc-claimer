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
    "4YtTJtF8mxykgj3LQsffuBnyXUkcGMpgx4ubUsaN3UaU5JiuoxL7KJXx55Bv4TfAMAXBA6LswhNzGaqpywazuUv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SEXSRp8kqnBephcjp3wQFwdYDcqZ9Vtjv9x8Mjs9RpC746aNATnsEigHUPx4FY5LCm9pM96FH3TtkoMS9qQtFAU",
  "key1": "2CB7vBD97NEthLHGMbsWFxWmgS9aymwgABZdYLdXcexC8brDNgyHT3J9Y4XYJGdrri3r4n2nzfPomTw71ywxGBWh",
  "key2": "3gEokXMgDVdN6iSMYBiGbbB7uprsnHX4jMJ1eDBVbnCyGcwGt6LzSHdFV6nYTUiK1b9fmaXkdjmu5acacvKLVkaT",
  "key3": "bkcz9myg7u21EZwGMoDDhPtWRjcGYhh6nWU8JhZJa5yYXuBZ5FR2ccmoLJWSFU8zYPYB8Qpau5GbXzNq2KvniFp",
  "key4": "4nY3uVk4aRzYYhdTDHL2zzkEMoQCepG5nFSqohc6oS9JDv4xQwYH5EqWkFCipsRnbNpqdW5kYmZDuysJhAbBafNG",
  "key5": "2o96xTNuZ6LFXn4YCR1kuSQAmifN56bRQTeLfyvJiXTGfaBcs3hqXzmXz3JVVDKkpcy4tW5BKihttPwmpUWVN3HW",
  "key6": "27kPBCr2JdJ4bf8MMU44UNEkERttBanK8sLTxcCgxnk21XC1wDV2SKEQPRph6mLNXuB4Ek5uU3wQZTRZbN9HSyvH",
  "key7": "2u97Mw31CmbK2P5dvPN8iMGscDwmxW9koo7ZindJD9weyxEd7u5ABNZG6X22TctgDnAF5gDLvWHxJ3KUvzsoNt2Y",
  "key8": "2qZRGycHoZBW6wkPLsTsUppVi5qAxgB2nBVXqUiRzL6DXRzbtLxJNTbPWE1JKTq1LJDo5vpZfbpPNKwcZmchmoPs",
  "key9": "2d9JACAGcnzvCrgrehq3FdNNDoiBB7Vzu4ACNb4sK6M1ChZnESLp4d213tfM26ih3EkgSnPBbGCDedpv4PvyEtGf",
  "key10": "V641eeWX3Sxm4bRYi7YLgsRGBY9VqJB1HciVtDnwzZq4N5pu6XaX238KG2p2XH4HeyiuPvZaZYt1bxEpeL8Sje4",
  "key11": "ertGYEcpaFdUTv6UMEvyUDg28Co1FAurdjn88M2jjpFE61ZU1MckM3hn7KyKgR8khkeDG41SbkTRbZCMvSFio1W",
  "key12": "5gH5AXEsj6WUhmwkMQG9eHDc9n9SqLPCBFkxJMhjGkJj2uqeXeac9A3tePTwNW3bwVHpos83rxUDBATMwbg4s6Wh",
  "key13": "3BBe3Zf8Lf8xT6ZemLSHQrD61QBtzNapZnJYvxEKrcy2JWbxANE6gRMbkE7F6mv2XKtbPM48vAfYHnBUV5927HS4",
  "key14": "5TcUPbxdxXGskCwzbfaog5tj23pgxWkwZtQudaGHb5p2H18SWZ6UnLEiUTWCwRcEqgDfooTeYxKjp1PhnR1eBze1",
  "key15": "48g1Yi8eB4gtjCQu2f6RVfGjZfmX84rJCNnHyGeADoiHForgvapjmycZh3tTgQMGpJ9QBdp3JSnfXFNFXeF1d7Dx",
  "key16": "2rXCxVf8XBWdKrxzCcZE46CFMo18rVZPkRZqMp4haseomH8BRdtWaxupTFNJuyb4k9G52Gvh27ejdaTY5dwBKfj5",
  "key17": "4EScbRjDRQPcyybbJ8r19YHTpjmeQDnGi29F1xzUDEirCmQtLK9D7sA5kFU4Zu15hA1DMbwQVNtCxpHH9BPom4Hg",
  "key18": "5Um93yNjhcFdw6kVebGqNrJDU4sAS8GSTn8Qa8aMMwJ5dp4JHJYtzCkS8ouL26DCzAJEg5DiRUcw6Mj3Mm7WhLac",
  "key19": "3D6NSE3DmMKUzPz6GzWJycpGHGQvAvwBNreoqceJfq2Wvo699SSB5JZ3sekS6Uvxr7EEyoUkQ2dmyhzoGZWERJcf",
  "key20": "5qmjJXGzPJNFEaiNGUG9zVLq7Bt26PPsdzgksinhGwVrG5wGWKaFqw9JeG4FuDnMrzzKFHc69Xh5fBDiEPitkYyp",
  "key21": "2P6aXe9ujikUnjrf6eLysJydxJP7oCMHbHNbvWjDWEn8DiWsdSiGd4GADGKWy4KL8Lciut2s5mr9SzLu2SLZoSrj",
  "key22": "3ViWxYn174Vm4wDccc51EFCznKMGQo3Zkeo6BeJo9u11RhrtwKuKCbSCkaVas1bU9u6v6ppo87FUcu76khzuTQnS",
  "key23": "pzFz4vzrNU3FpXbayNzSejaTgCx4EW456Jx6oKhV7jQPvSVs1dajgLzSeeX4XbKcJMivxiN9t84w6jZv5bwWoyQ",
  "key24": "4aMjuU3YUTn5mQvEjnZLPzMWpEoU4YzXPAS5gsCiNKyKEDYtoEvcowDCfNW1UupC2DgR1DBngxRxH9qeg9BPxJjA",
  "key25": "5QzeqZr1y4E55tdoN5zL8uYMbiPY9akSV2KFSwTKFfPKCybzPkLfHCYwNMZd4FDdm88EAvpFsCGAikKtPXcsFKKW",
  "key26": "4tCDvpi1quxHbHNxC9GxLxjdEMkH1s5uwjsGTiTehcw3DRkED2KiL9pdE8v9S7Wpb5NXuVV2aFUt6yyy2nu1DJYT",
  "key27": "w6vfuLeVGqyqPKMeQ3Ggit1tLg1Eq5atY1gndXDGGVEWrmEjbxEjJbjk4xPZEAru96jQCtNcv5rcdEihDAc2861",
  "key28": "4j3XpjJUGHYAHwhFS3nqQLcAi6wJ9mKgvReps6BJYYtM1tUbskGat9KrQVcNWzySs4E52P7Q4R3Zbg3o5a4LMofn",
  "key29": "Z742eS4mSJtFGRdrjdsnvUm5p34JAsWSe8xQKVRNsHgiNxnVj3AX3E6o4tP4QCb8Hb32u1orZee4bP3vtNMA557",
  "key30": "3TTNYD9yt78zg5Uh1ZQPgKyRBm8G2QL5EGyFPahT76bwQJuUr9RmvLY8PdsnNkEBwYxjUgC3SSm9bndf5YiZo41A",
  "key31": "2czkCBqNYTixS1cTMduSKi8ByQTtCBmeAc4UkJBSkRN8rWGVbABUZiBgAPfUHCEaw1MGE8EKJXe4RZNuLXSoCSzy",
  "key32": "4oNWe1VC8hYAPNYk2peEMKG4dVvJzSxAxhuEvseCPSBv6aYto45RCX9y45LUhnMeikQPjDTngdwkwfgC7KSouu82",
  "key33": "3o3HtMR6UzQ3zxEifSv2magxt53JRDoYzShUVELA7FfRAwYUxhebtQfH2vbzUQUnCYSzzGPsF5jgC69JnUc8YRWF",
  "key34": "3tAHttkEcoP6qwDVGGsf8i1VMy5XS5rPbuTLUa2AxHyCzu7vTX98Be2Winmqj8yTtwR5AgXsEjDh39kt6eyHRCbv",
  "key35": "3ADKmpcme4n4NPb74ukSo9zkfF5a5xZLkKZArsMNL35B1s9ELCRM82PVqfjEzTam4BMcTU6Sh5c5anXr7bZX45xi",
  "key36": "5NyM4pAop47WPkfnW2sHowBGbTYynVsuu5WNgzqNXecpXopU8JdVBcEun3BqqSULWgV3uvXuM1wzHGysXaJghzyP",
  "key37": "4BRm2fk3jNHpFZCFx7swRJe8Piy3LYzAFa6Hz7Y8nS2mrrcyrAxYituN3z1VRjdjSsESp7ZC2ZvW2tEAZuNS5oKC",
  "key38": "EoTyFka8iL2M1oJ51XzetatPYhHVjVWxdRpLyaEDZvYEiUBbguSswDbD8HJ5hhKjHgutetac1q7T3mY6yX5HrZ1",
  "key39": "5TnbA2JnDsssHLWczak2GkFY4k1uXNet8UH8tAE95win3tkkrPH7d2UjnMRQpuMPRDjX3wvk26AXang6bN8V7vsg",
  "key40": "5RUCLjwTzzQViETKonRX2PjfRU9H7wz5LeimE3DjnXHuK81EwVfa6R86QsbGYF9aNKdXEXhbiPMJtCa1uCarBtWq",
  "key41": "5dfhDP4AzxumecpgprwxEGgbhKnu7Gg6uLA2eaiD9Dq9qyK3i1Jk6kEioJHnAgpWuHuViJ7GQq6agH3voa5KfWbE",
  "key42": "2aoYxesDg65644e2YDBoHbgKUgykoBFmKHhGaQLYxkoAnSurtz4xZj9W5sVg3YAQ7WF2MeRCDkjfD5UePx6v5Hkz",
  "key43": "npEhqRzTNAUP7hTB6y4FoCxZBakqBsn7W3m6JYeSK8cdLsTCKaM62KV31N614uSe4UReG79xP91fCsf2eavvjTf",
  "key44": "5u5DY3K6tihhKoPSJNJzPBmqkAgqg5W9F9J8Sck5iNNZGMoyvrg9Xcc6WN5Go9gAzusESLKHws2WHv7Aro1H7YFJ"
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
