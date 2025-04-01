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
    "iEw6cQkJebqrq5gnZjfbW2szG2kYfqQ2VG2Gme2J9Zd1QSYGGV1PYbVkVoVzJnydw6UkGTbnURsZQJEeaorqFgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35u4sibMPxz7nxhjdK9LeSvCkj7dByRrFwJHdxeS1QyhdhsD8fxcfmrw9gKpf1wdJAHEaQFJH3tzBu2mYv2uenDi",
  "key1": "31xrUMaqCTvLdRF1QpLB1dH1svRYYztATDWRsfKetNmyuVaQaiZnrTFgPnhh3JF9GvFZtgJDhq2PidnYiKvM4imX",
  "key2": "64QweK9zqm5MJXDh2Jfak1LgmRQKxhr3cWkAvwvvaUkpa4TzRYEML7yQHtpgUDfNd29mEwbP7VDnyn1DHiUc8qEV",
  "key3": "22YhZAQSwjpDmXBWyzNBBkFv5DrpzdrvGBEdQYw77zC4qdXeZHg2NpBfnqdZYUdG8kapmw5HJGTiynL4vrS9uAuN",
  "key4": "5Pb21Jk65LU41KiyHQ39j3iVrV9qUnugiMaibWFjvpkozfV51tdCaTzk1xNNjqXVxg9CjmhPBUirkpUC7K3ZZjny",
  "key5": "3rWTt81ELmKitq9nx4nLNsd3LzKXCGuDoAApQ1Eeiy3DmmBLtP4efMvKeLsgp78KGavixwbM3uFyVT4BtbLdLVmj",
  "key6": "432Ue3THo7zq59NmCyNBamgWyEdUp1zwH3XuxaKeYDa99fMUz5P3Ft42HexXwcTf1dg1EAUG6oKHT2kmdusE7b34",
  "key7": "4QJG36NMCKNEnggZknKvQaKowyLcpsS2tdvQT8TLgMxNVyZq4yYGp2FjMv2Gy15wew9bZmbu65FoEVuK89egwrKv",
  "key8": "5gkc9jwz5gbGrKFEN7BrQzZmNtFFuASsjzZftJ5fB8T8teS2k7k69dU8Dxs1yanm8NzYfFSGAR8En2P2fv12YNwc",
  "key9": "4CTLNg2qohhxMzAAeSroJdS9kNX8GqeKdnKEM9bP99suMgX8bH4dbJn1VHvtXKdRBhBQ4wRq98fvBfBmJKwY8tWP",
  "key10": "58d24fciQhqxXZEd2dMLx63KJZGsS1KTS3a8W1gYf7ZJVwj7BWGk3JGTkFKNPwyNsD8NCvY3XPn82PTBLdMud4rZ",
  "key11": "46zXGLC6fMvE5vm757ZkiSGNwG2CYwgHEisYRwrepCFBmeD5TmatBaodHNDTSpJdEqEN3KVrFiV3yydf784UkP5R",
  "key12": "4FLpXLo4Txg3xcpGJDRgrZWB6XMgHrFGkjFUG6ZwjpwZyUEHDH8Wszk6QNWkPEFhHMhUd9JYansmj4uiRM7JYUgp",
  "key13": "3ZMZHQrJnTzXLfg491WfFmruymhwvVTu6tA6ndCVCZkmEp2rCADZiowgyMwAz5U4ovwydsJa8XSw5Jgk1UfMjytp",
  "key14": "g8fWUSgKAKHPq7wD2hAcSYVEx21cWrxwo4BnEPirxZxKzmsfdgbuay52L3HGcgxGU5paLVG6aXyULyscofq4b7v",
  "key15": "5qKy4Nh9kvvcYixNV8PoCood8AM2mw2NF7JbeRh5pHRTTyd2j8yiJ29oCYusWDoqTj6jTddXZ7MxeRkfqsBR41ih",
  "key16": "62MgF8Yb1hYt1pw7qRPknbEKVVf5hByri83upHGxQUALaQSowNfWL1KM4ykw3JhJRJnBoQHJpsaNXSQQfXWPFbPZ",
  "key17": "ZCGaNaNv6em5pDzYJeEHuwtYjkMY8xdLcyKDYxnvQxMuxVHVCxTgRVVfNGkhTY4Hk7up5MpDrjZXhAodeFtTSXD",
  "key18": "2LNme7MdTs9iMEXgB3KBmmfQC2qiEnzPNkpLAaWuTnJda1gk2eiya1vYnHx9bqfL3qrgeJUxQSeAFwADiqqje4UF",
  "key19": "5Yb8wbiJJ8rNPcLCzaTeEDuwwQXHZpJfrYdfrAZ31euVgrCL9ZFWQwcVFMWBzeBx7jWJ7XF6oeczNdqgrbmk7X9J",
  "key20": "3PMATEA1gWUY79LBoWwtZLsYA3NjuR5rFwMNAg4JtzP9BCx3Py9A23S8ZCsQ7SERktnH6U7A8Z7HkLWuh5mSJu2R",
  "key21": "4M9iBbcigfScY1qnhaL69ZyeEd1wVtaHCR68Au58gNpdXBSsipouyeAugPrK38LKFEEBPSjkpu4nA1RMpzaoUpUA",
  "key22": "CtbpbHHmcrAu6bpFghJE2aKDA8oX1mJYixDDi5aTQj3HB1veWLd71Le3W91V7XwFfFHVwn1coTQYmnaxrfAeg1i",
  "key23": "4DkTxoHd2ERmMN89uRQRTUyTmespf7xQ3wqBezx9prhZvu8b7sBbhvXQqhtARo5h1e1kyrbZeyFzKMdW77Gg8RUa",
  "key24": "2TtiSNPXhp74WP2KbaSGThMsNJnfsLFzLKMBi8S3n3KWx5HjgKg5V4bdhucHuQv21ZwstYfZsfp28LzvYo1W4QUL",
  "key25": "2TwBUV1j2Bz7rCUUgE838qajGjkN6GkhdyqzEGLyxmLZdHkmSTGMV6An6CuupCK9hfoDF8s665omHrcC6e4m2PBF",
  "key26": "2JsJDQ2pVmq2phdyMZYwvSWU3GxhS87UcSk2NVk8bdiPr4xebAYWuxtgSSAn9r7YgVxkZaXVcb1zN47qXUAVrzbw",
  "key27": "jNuS2qrBFTEMG1WokmqanGC1BcqxTf9zUW7ge2K5n22MFXu49N53az1W5MVanaashVSSix35yr69VVZe6rYCC2b",
  "key28": "Pk37iQc9bYatBRENfT6ESiYXLjadYqNnTYbCK8TNgDwsUtMC5yrWj3FjYXsa9pU5mwxVuMnsywsAw8ZPM8U1HbJ",
  "key29": "4M3YMMg7WgAcHcZzJUpQRMdTM23CXunYuH9UK8TErvo7PFrm25VXBbtvHvyBYQxH33BNwqGJMM7ZahqwE4J4X5yM",
  "key30": "487TFEnGLa2ajt7bEHPZe2r42fo2x46opiYCnLwyxqLR3AqTAZVGBcWaMJ5rM5qUFs5v3VNSEv5C3kyLuSQPjTxL",
  "key31": "2RXvmtEaYHxSahx6eQnR86EkFfQ26zXtsso8yjeCZEG5iyaxkj3wj9yVmY5sg2YQb8o1nc3qjcTTgwqMxav8kNr5",
  "key32": "3pJcSdhCdieGKjAt8Mv3M8vz1pF1qTTtTeLjF4KAcjz53RtHwAS5pY2QZnA7bWkf7EjzAojRagGqiZcHhMhMaSha",
  "key33": "2itsxq3yQmvrtQ8cJnnK4bDmAXX7LtNMzkipAVbkvAovpGvCb7sToPTggnD4BJmyucYaniGQY4qF63teXxeioLJ4",
  "key34": "4YYi9JUeLmGTRT42eGCqPPaBJLCZPP7qwF9gprPgZRKdxRR2AqYLL5MgLAJP1rUEkGAwYTMwrLcp7puZALvumjsV",
  "key35": "bRq4e7JrYSDz1iMbKod9wdFm37PANgMJQquWjcmQWnSfCQbcEjwQ94KVvx1ojZHk3KsRcBHUY4AxEjxE6fS8Rvg",
  "key36": "2cN8e3sRPgd9eParp7UAhp6UMVoNfPafJvvMDyHfn4M2jFRdV1FHSyy8gZGGFS6JA2uoeCqbBbwRLqquS2HGmgKY",
  "key37": "38pU8kphhCmCKuPrHHc5fZtUPaBMCPw3NQHU8Z2TjoPHy8Wgp2ofUHG5FHG5h8dgPjJ2DTzhHcPorLWH8tkpZcSq",
  "key38": "3i82YksDBJCPTBPcf9BsqYtbhDsQY1Ppy3bue7f6DdADARKzX8oJz7cc6pJVdfVkG24YQjETfCaLvyNRLW43KXML",
  "key39": "3fxK9WDjAifNmyr7dnKi2nDiS48ACnFbaEDhU5XuP2m4NazfzLzgMCYEjrBSkaS8755CjSqksyicv9t5mtFH1cTE",
  "key40": "2EEUbbQo5SZkXZVUcxeoJpcVZ61GSn8kWNz3PDXwJoSXbL5tQAP9JkMQTFZk4cRq7vYGA4S13TKKcjNQyWdX7eU3",
  "key41": "63RARbWoeWZg9ctrhYTikUfuV2SoajXJR8BKfXMc1rpuzSUSzoGmcPNxy8JirUEvWYxVZ4JZhSyuxdEJCrDnkhzR",
  "key42": "TQhaDgFvSXpTXQxkX7aGesmGGgGWydmMj2saWcRymn4ZvKRDDC2cqiPpSBocawCc7x5JwUvhkFufzGG1DMNrNe8",
  "key43": "4Fi1xZVob2ohXz2XVG2kRsxKcP6uEQpLPSZiSmM4nNmwpFL7vTmMtCCoJaK7Lfkh6KqCfNUywG7ZXZmvH1HCP5b5",
  "key44": "5HbaRQ3Swa6TA1iL7Byt2qoTrNX518g4WUw1UKwVyVNVbujLsgUTycSjrGpffiYNS1FPfBt5scA8ZqUaRmAHAbLs",
  "key45": "2LQLjUzX3iVGGq9N1m6NnyPr7LLzP5hsurLsK2K66AKHu7664tLrytNkG8RM3YJvKUHFLYy73gs1oSHqhaB6BoU7",
  "key46": "5vRfcnu3xFCawK6z6uoJrbiMQUXMQyTyHC2MZPvLpVFysEGgDQXnS55DuTAZXxbUjMxdUKXzPGFkuqzHEjPZh5kd",
  "key47": "4FUorxch3e3AWUbFL6QWqg5T7fcrWfC8EjDpQ7fZ21eamfebBjeXyfXv3HbxcA27n2LMoA7YUduB6uGEASp11sB6"
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
