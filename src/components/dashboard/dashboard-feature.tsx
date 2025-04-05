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
    "38qrgkgkHmBkTpoP2xTbVDJZ8rBLkyoXQX2ePvdJC3zNyNpgGsQzaVL181eGd3UscBUPLiBrpdj5KCQAyXnoNtNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fsQcgNR2sNxakmxBMRz5AZWSQUaJVEfKjP6s4bpuJQ4LX4CznVzpToF3UqWxmHX1nDCUjRwgtwKXW2bHiXQjatD",
  "key1": "5a8BdqzhHS6KuaL76ffZVVxzWtk197Cr5sMu8CvD2u8ZrMcr5u1gVnyQ1sucBthyjb7xenDiQuJSxbBErFNZ3ySn",
  "key2": "2ubQAqyfVmmaaS7j3hyHkaDtemL4wZkYiU7PFsTcpm6s19322MN7GZrWfVcrhE8cq7RQ7arA4rnqiQyF757izESh",
  "key3": "qgPRUVQhSgTV3jxSqcmKoHCoEQS1ooQ42ME1oJSet8ENc8kLQFWVQfxwRYzzHxR1D9uj3b7FTAgpXxz1j5CyBgx",
  "key4": "4QuUdHhSvEZehQwnYrPvCTNbfX494tHbdNNyJ2wUyjpsXNwFDfsG5WD3zbVaYyi7Pmy4aPWTVnkD61vxTfuKMFwm",
  "key5": "22vRHFyMaWVDKA91g979bEjXwQAENjQhgdRLmuJpx8VjcF7ZULxc4i5P3yQteyorst6mBViDLZNY7wdkWx88aKgf",
  "key6": "2T6HZ8wVwed93HsFCZtWSVv3YCwaDooUmoKhpxkDAj9V48MnaPnZVvamxARNYezN4Bk8eQQXHbZxKacS4eTGqAyL",
  "key7": "GY1RQ1oPUCPxKUBPXULpTve7ktjPJRZkUCFR4oihdRidGBsGE5HS6X7HjrCkWbrXUFatoXvik3PoTW7udk487R7",
  "key8": "5zqF4aEt59hpdXJXYGWH5Z4kr3CNeAm9W9NYicfJHwZa4PS3QRRAnTyWDM2afEVdQLeHvwEHbSccEZaaW6zVLLp3",
  "key9": "3UNzczc1psrKqDoFrNRnpg3VidKjeMM72zGPBHouRJzYKTCmvExBG6eQ1Qa6DsE722eJTYcz9XodFgbCEpSZKUHH",
  "key10": "2JeBKpyv9x8L8Gkfx7tRNgqTysqNCB241ivqxoWemqGBk6Li2zxsdrkSiJhqaVxnAbcm2riK4ap4gPofPxEyv9ii",
  "key11": "2XSjqYB5aFRvMyhd6dGcAqTUrEDbXcDWLe8GwyyJwx4Y2k2yT1FTmgQ2CBmw6LfCzNaVgUKptnKzd4MHGbZpVxeV",
  "key12": "64NZUUkUETBUaq4bHFJLge9eby52t76NGVBdSMpVNXEwumSb7jjWrXm9iF4v7gBFV6sYEoXrTFXSfy7Ws4cLDp76",
  "key13": "5ZSrS2afXpurfCVLRiB7WveRdCXzLMBemftzud1tkgrUXDXqwDwBis4BMAYsYpK5kDtpD6rR7C6RQYmhSiF2cZ2c",
  "key14": "3fux5fnVBe5FSKraKBhfemhP6T5a2uwihpzVZ7WhSAx4jSiEJVLFm8Js4STWCoJ3LD4RE5koYtsbdNovLXJ77nVf",
  "key15": "9H6tmnPrM9KkJATwg5tVTtPZz1JG2BwnZDM9qcBwuM1ToXK1qAciuDQRi2RikjUqnuCS7L4oucYtVsi7NjqVxfk",
  "key16": "FNCyNmiwhnjv8Aq4NbcheYnVYnK7R7iHbMLBftE1v871fREMziEXdrjazFja8Ygyr8TTHFDtoFSZFRsCnEKPzGc",
  "key17": "FUVnxmdHM9cGnYQMuZXGdtUJRcMxaPxsGhf7sbqt6Bn87tp1ixe8DN5wfSoraU2ohqdwtPrdS8bYf2LKcnjyA8R",
  "key18": "3EXtP2HKsjH1LB28ubxk9tELyQukKduNEPnkdEQvDnBSN2z6YDLWuEpu5rMd62JfQSa8soSPijXKjcLw5vTCYAC4",
  "key19": "5kC9Qqbhzb7YfxphTLV3a3ZF1258x9tbzcFrPLhGzrr6G3WHZk7cB9j4K5JgsDjVAPxYdrneFor6g62Kj8pSFMSq",
  "key20": "2syzcmNBV6VjQY8MDufGUxi3TdHW4SikwezWJ77W1veNPg4B9zY6HXD83GGcSZTWxEEfZ1JSPnh6HqTCc4jB1G2z",
  "key21": "2KvdRNnvdEKFPcuAyFpuJByE1GXrhxKHkeHy3BS4ctp2LFKsxguooYGoKGNV9tb2uyQRyuenZGZLVHKfDGepHD7u",
  "key22": "oMuajyHdLSNUo5CeoqeLz2AkFo545qD73dA3vBFsKTBrvraRW7mfca9VcwWmTLQevvEkNmoHfnFT8A4iN8wh8AW",
  "key23": "4t1kh2ReYfkanSnPYTjmrprbLmU8dT4RnALoQKLSbhgsP5TXg2BQTLcD2mTk8Zz17VDeozUjAxQjNZHjRyPn5ppT",
  "key24": "NihHBbsgPv5QPAZxpqxxPedibWyhAHwA4BtLpLRChBxA2hjw43LJqMnvWLQeiSxGJF1KLZfmGyD6YWsTZxVy4Dv",
  "key25": "2aD1eGMd6rdMrRezvXxBbbtDDz8WiBUaTr4dcwCHpZ16Jwhetk6D2Ko1ygd6Jnn4fen71vPCqQJVfDR9kvfm5goM",
  "key26": "28Km7Np51bVm6HdQ5VGEdHqrsdQb5JgbjvawxsG1Ng8ogvzQTus2vjWE4gPfG2Y5oqHqUqTqoMJw2DTMux5ypDHo",
  "key27": "3DjF23sCaxbxHSkDNnmFndL2MdejfhUs45RAyDhurMwe2MfgQkw7id53k1gvnofCqjf6mFCqHxBUhczE61sxttRz",
  "key28": "D79ooJB9RcoTt2uGCXRBYE1VxmeksP6Bc6949FuuYjvMt3wjmeBiD7n86CkQ9UDv8vDFXBg2YBpGZdst5kdW84L",
  "key29": "XesxwRXCR83ztLYhWWiQUWN5x14vT39LBLjwEqMGbupScKAQvLxbsR4hi2sJnMNZQpn9L4QAgh3Ge2dX9fMu9iz",
  "key30": "65MHBMStLMFLWnm8mrYryTggmWHP7VNi2ZmoSA3bwNiKRGbw7TufHxyfxDh338cgsfnxpSXFAYeciaDR8EcekeDJ",
  "key31": "zjDCdzf9dWaindTzSxwq8UMXC3FCjEBYtGXawEuBDBzgvedv9eCZuVp7ocwBrNhUgD8d2ZYFrRysg893XPvW78a",
  "key32": "T28NMhKAmzjNm4tNqgKpmSFUTLPkDfnQWbdmihSJsKQykY1sP4v6Kvi1H1HiUV5khCNr3BB4JY2fErp9TAy9NFw",
  "key33": "23EBH3KJaiV5bakNZYovqdcDZzFyRvjhyjqdtZqYX3Dj9hrNexbwRGRverrh9C8fakVwiUoEZmGidMuMdy4yRNMA",
  "key34": "5KJHV493m1o82C2DbCNPAVqJxHcE7ncUxsJ8XSZAb3JYuZLnoHvpA2xvCZicJzCU4N5YFxhJmajcPuoamB6jQzQ3",
  "key35": "hqU6MtpU7thAfqTFEeFqxNkjGurGQcYvk5nFMttQ6F3p9MvnZy6Pug1oPuvyZhebFJPJCUrYRJjZ256fKYwQcHE",
  "key36": "51oshPzPg2yhPbogTzVUtoV3uGiPKNRLTLg35kYfjSBC3uakDr5yrmz5CqvBV8Y1hpHjdJyGistrZXRjiWECdXee",
  "key37": "CtoQbB3wGqBFCE84fTLvXraUnr7o5RdsFiU6ggxLdHbmT41CbWmfnkPYB4DTmzc5RRdHGhc7zUcDVSGRid1cSLk",
  "key38": "258ZLUXQoX2LBdWJ88JMyeyxAyHKUD1h91ExgxHRmVqodm3vXXsFoFvoRQJqNcR6R1wL2HYSMtmcmy4UijPcmfxm",
  "key39": "5U3NujwUdgKKBJmSQjuqFQfGgzWvoRBKVxS9YYqSh8GBnhYg3JfWHwQ1ErMmM8Ez3M94ke5VTVkdZtPdbFrysJY1",
  "key40": "2Myi29nwrHfZjfsp1HwkskptAYYQccA23M5zSJU9L7tWnnwDc5cwZzujXq2mvNge1AregKYw7Hwn4W1sf4NB7XFf",
  "key41": "5phL3vfFCbskfFNc5JX58PoDNgVMEeRWT5o3Bf6zJnrptJ6XTBUR5e4qp6wcpZnnQh9XtR6MNKHkxsRBQK6sGf72",
  "key42": "5br2PXyyq29Y9xWvBZPMzCkPJbFdspSxqynuLbS4vA9i9nHM5CKeXyg3fYHCs2eDswF99RqiSH55fqJUTCAdK6wA",
  "key43": "2t5U3XTaUQjUtWViZhfYgeAA2zRMNCARXv7JN2vm2b5PeaLi5ZVnKTFAr5EW9FXw4MDYfS45YhdpP7U8dvRh4TZQ",
  "key44": "43NR1Uj2sm1vbCT6vwyMWvwyK5fnFerro1MQPWSqJTA34uXtit3V4byPuFCPAqKmFoMPDpMoenxTN5yxQzJVH6xE",
  "key45": "3wtfdPXu65sJYXYstxqmomSrQ7NnZ3aTTTm8BuV4aWUhnUGd1C8voXRmFUHGDoiQpAAVKn31W55hKov6gxSbbKY",
  "key46": "3S9fb2AjGgz3Mq2GwLAfoGDu9RC49eRCvMf4Ej95BB3z2AhqDAge5hk1z9W6f6ZZVmZbFbxUsdVVdz1gn3UUaV2P",
  "key47": "5P8XqS8HnRuHDgs7SUPN9CJDi9JDz1dG5k4A8W4gNymCJhCkFwiVnnABKyf9W7Zc79Nuam54YeGcKc5WkfUzkgqh",
  "key48": "AzyWpGAtvWRsLFMfNetJDwqrFaDqkRC4RMjSiLUB2V22aZ6qnkUT7oQLhKARK2Tf3842jW1XR8k6Ppy1r4EeZ6z",
  "key49": "2tH8C38jMVZevzSK49rntWyxMEy9sS97LFAY9aW9k9inzYGzWg96cakv7WgVmj2z3Q2SSr5CzZG85D3mAy6KGyX4"
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
