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
    "5LqRGK7TvGLWa8mj6jXPsfJqCKRQAZgPyp7u8mjkpSw9m7uWJcCknS5RmozuadgbZ3CamXpmhD5aJsCzrf2L7TNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nannmrDhnM6hMSAT5E5Vb7qyXxeJnLtxvUzaudkda5Ld4zFGVuQyeQftWmS4RE1KK991TcMLf7WMJCftvm8W3gi",
  "key1": "TcmXHSnjVr6L8FePfARA858EzoQonWi5bpVeaL6tFdmxRdM1C5Fhv9f4xusez93fSdXTtY4S6QrGP4zJs25KeNP",
  "key2": "48eEn9YXVdjS3PV7spVPXSzxpxMuYKmy5hw6JLWxQRTcxzLZqKPvSmseZkMr7TjW1WLBQWYU5dvMkEnEV8ppEttT",
  "key3": "2VicZWAfdga4oKaUCneqmJgwppFonp3Lea4zuQ1kLPXxo9WSft8GQ2GfHmQAPRCxbJH4VgAaGfbRmKsdU6jz9EaV",
  "key4": "3xuyDyvNJByUuiM5nA2RrAzfNifsw1eE1E87ZJehgQUHfrkbEFRiWvdEUgVTTqrQjoaiGMreTMeQk7MRaS3QHiVu",
  "key5": "4AoBMmLirRBbakcCSxnEQkvBceJctiixxUJP8amYPFh78qisd2tdSv7JsWPa5RTqsLho8ShP2tbSid8CceM1N9id",
  "key6": "2Bce4TKTcbyKqdBi8WymN8CwmqBDH6hd5b6ozgPiwKXB48MsW9WeHiDdKFvck5K4DSdKezww5H2NPTUueg3NSKFH",
  "key7": "4xiJ6tNPGYWMyZfDfYe3BtcPoaCyPWnjLKWhJSsmyuZBFciNrraDVGjE9ANYgKAGYqZYFmJ2NXMSTwgQ8icKJj9U",
  "key8": "65zrYgARWMqkQRPKkXiGfB8Qva5AU3zjkYQaBPju9KctLmsZWwijqAcRjSKz7MsdBWX3EnhBWRRcSXq9qWc9UEuz",
  "key9": "5y3fTgeKJWimnKVWA6SYAMPN4zP5A7tYnyR4ckDabzFy9qapTQJnGCeQnd6uStaeu4vDbeJtougdcec4pf3NZszs",
  "key10": "2MwK2GTBrLa6ybCZLStowuhDt9ggV7rPRc9qcoTPzou288Q9t2Ej2p3CvBqSbzPMxtksr7zLbxxP22t9cv1H3Gn9",
  "key11": "4CobMh94szDB92kY6SZseeT2sheVzNfvRszs1yySTrKro9PQ9QanDugBune1i8ZoAwYSz5QqrcbA9FtE86s1CQkG",
  "key12": "zeEUabL8GXgX88twmicxix7vnD8JMU34m6YFHpvnXtewXnuAYZCG2Grfw4nQmyrUBkr55gaw75CrUF6WMeF2MWa",
  "key13": "5XMfQDHroMKQkuFdyuNoqzSMJ3hWoun51hzrw1Cgi6WttLxz4pJ59XXi5aiAUX1j7rdRqfNwi81XpRQLnyT76536",
  "key14": "2MeNi9M11bZyfidBTuX1WChCwCK8bfPoU45vCMaxax3EkSHUD9Xp6MpGcmbbKLf8i4SSM6JTTdmh1GjyJxWBzJVD",
  "key15": "5WcPgd7PLpuJVtYDLamuS53DFVh5p9apDZhbT5hiNHN1N4gQir36ScoprfYB4HXpG6FmRm1pYpQ9F9SpSY717H7q",
  "key16": "45qUbScn9ZEd2pyreExRGdS6j9mUCQvWDvVDo5UcphdqQ6TZaqvdXNVQ6ewT4snrNydVQULCU8x9pHmwo3VRebE2",
  "key17": "5G2iPrvzsQ25o84yQBZiBbdtn8uJZGng8xdpjhUKb5TwE1cSUfNXjh4dZLt1cnNU4WxZywhJoZrbeWWkRw9hhEyg",
  "key18": "5Hy7b8JFWycZWjPrQv7Xphd2y6RgfimjTLje3MaLQR5pPMkNVxrMV72NsNvs37uF5pkn791UvbmtrhXjuwX4gP5F",
  "key19": "58xoRPvoJnm2tgGmUThHBKCaACWrZMKxWFQn6ka9e4Qeftj9BMupL7rPzwScnrrG1TqaAbx3WzmTTCoMed2G8VAz",
  "key20": "4LwFyo6L3nuZEVUffHF1DCjYazmkJ6iAtXP7kvo1qfrFDFfQPXTH8K2stYC7VLdNvYXu3Hup98ainGvoYLs8ddvN",
  "key21": "3PuXi8x1vqAgh9aj6Q489q5ZXxxHNFLWprKZg6n1HoyF4C8uibXTPuHrd9y5bUWW6VKxGhe1Qjd9DzRkudsya8Rm",
  "key22": "5vu4GpCt4Ei1SDDENXqWWD85QDqY7kg1CioaGeoBb4gXmK3oEpdiZGRziRfmKj25icXds4vcu71skRS5ZAxcMqiJ",
  "key23": "23AVkMjVDb6rYzQiF11icnpshSFcTTRX47S7aFjhcU6qncB1TYftcfwRQtnYJz2SPx3WceyJwHeKAwnkbBwvfU3P",
  "key24": "2kNLWR8RRyizJBxKtCdueEAU4CafjLMnKSYYGnJBn9wuwNsrQNB4ZpmsuDaJWTeCaHZbCmkANR9Mha8ZFCiDwxfj",
  "key25": "4e4NgqAftLuu74tKsPfm3oo9iAM7DykGUML5fPGhD5xt7Ft9mHHVnwR3WjW1wFLkJUgyiSe4PiebqrLhGc1JSFKw",
  "key26": "3NsevVnssxaroFjcwvoYhCqSjBVUUkiMHNKHMdxNHRQdQ7f8yZQ1EEGQ21kRdgeLF8sPnVWvVhd9VnoAP7P4pT2D",
  "key27": "5WcHTtuKM4iKBH8XEbB1yaGhg8fvAdjg6snzTptydJSj6d4dyxX9WVCHp2nHern5YxzXbajzEAvBugZBZ44eyTpv",
  "key28": "5i5wiWSj8z4cM2oySAb1KvTuXyoG9wKFk2PCzkY8vjB8KhNLpx86QkR9JiQsXhaNGhzXKh7Fio4naCq5nUvZgNpa",
  "key29": "4tvpZqV3UHLfsSEPpEUVCnVditCfVDRdXQQQeishWz4pWZkcH9qawTaqdi7ES5NjRkVgg115whP4sAgTSZhepRGr",
  "key30": "4NUSiQ29D2akquMBxnC9KHupmDLCkoRsixKWzF1L6nTYFuyBGwXnXx8eoU3vZTEp2Q54Jfyj6qHLjo4RvinuJcMT",
  "key31": "5hvBoeLwALsYcKJX81A93TmUbHqu7viTP9UfE8Hup5P2UtYoTATxJMV6pEH3iMfHPDavqNqnaPBHyD6oCcM5Hw7V",
  "key32": "4J4yMnkGeo9xhSkSJf4qRSGwPN98QuR2NZVkmLcwdW7fy5U7mpcQe5s3pJp1ZJThxqnViVKHQh1HfokDP66me86K",
  "key33": "2YpTvvLkRUPkDQw3zUvnTcva5GTjGjDjfBcKSbQAV4WqA4h4ixWiznXXaKV17n1uF6VqhgtacEzKY59DvD2RtENA",
  "key34": "3P33HwNbAdushBabne2zDKzs7dN9TbfuCh6mBu1GYufA5iCo8KVbqef9kfeHy1pSgmkqm3qZNBG5KjvwoMvbJU15",
  "key35": "sFooEnZrBtDN4frfmsbcY1pNMBGiX4CrzdevbVHXLDcPv1B98JhvqrQcD6fhFYUmDJByrGkhhigV33qajwLyWNM",
  "key36": "5VVMXxAwGUBXkFvotykxpujK1vuHaSrHpgtMfZcwCRCUEdQecp4sVwfTXX85QzLLaTJmrLWGo7iQL834gKVBzreA",
  "key37": "PQWPTv11B1CkDHo9ZTsKRMifEPhrUpvJkyBkGZUGJdCquQjpBTj2qMeM69zr4ohUJ72DzoV7ND7Yqwd45NN3hVZ",
  "key38": "2DQBMZAWpqspRDB1vP7zpve3TawjzftvxN2fUq4obAqZwVGPU91qFdzcCHTzKnzv1JKHdEApNTgqK8hZkZVVtfD3",
  "key39": "9aeCcqH4A1HWTx9W6uYNrpNqrH22aK7PeR4pauLZbh7wjGFwkoG1xb8pL2MQRdaPuaSZTdbEDwbgEgZAAc2vvbP",
  "key40": "5GpYcE266bxNpVifwR6aN7QTWVtyqPY4tSMxALYq4Yr62pDBx1xtFW97uBYZE8zkNBBVEcmCJc1BHqSuK1wwNWSU",
  "key41": "rJHRoLhBUxYVNCkwtEae7fxMzr2SPGr7fQNiXw8fmYDq2CuvuMKCVpABQxeCGUeqt83ZKwKQbzYeog9uT3d75EJ",
  "key42": "38xEtGtxrxgVDnYkDKaBgc3AtJuUe4tN4dWVqnzS1LEvYf6giU3dZkhdwMwTGErzrJxMjGfn83XCWPxqzgQNogbq",
  "key43": "VyuvBR72Cfeg4aDDG1uxcaWKCHB88hcJaB1RWcUBqdpCFT8uEvn82Y5SspkTxuZTevYGEPxw25wk2UYocipswyn",
  "key44": "54AkjYuPjjQTvFWrdTqcCBfuZZaDhTrb6NrHdRdYzEvQhvNu9fzZfZ4ok4tMbCLkcCefe6aAnAKrM6MfgAzy1cJH",
  "key45": "48VqQR1uVB6aVfphNtAjGzZykGggthT4xpdsghduzAD69ouqCJGvUfS1DmWo5Qwhyw9r4vjeivHSpCrqDoiZ7iCf",
  "key46": "58h2evJwS9oakmU1Y65P1ew1rsVEh6jJykt8yTrVC1TaEZNXk3nN7WMHUksNNJFxTZfvppBzsqJ8WpVC4929xYhG",
  "key47": "52m3y6x2PSg5qFgrrNhbUbLEVewZ2FzQsbTJRHeTJvc4fo7Y7U8Zx37wpx9bTym9qvkHRCVtu5CfYznBdLASEU2",
  "key48": "4MauA6pgMByt9LmVyqvgF3Bqy14Nuzr2CZUC21hpvSzW3vqokPw3x7JHDnojceWQqDWoVXU99hVUiYE24ZEkWRqG",
  "key49": "4b8ZaJn5Jcc9RjHiMqSrEi88YBByYqtjUyMv6H2rf5eWrpWUTMbS1Tk4kY8aAugESCKUsZt2d1GC9vgQwpxy88TQ"
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
