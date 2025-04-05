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
    "63zr1eqCcWed417iiswNK12dsvX4iBsMFiBivwNNY4tTaciUHNYJpP98yKpyLEUCwcNgZiyJexiSg9be9LBgQePt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61wjbNTdaWmJVzXKiPCjtaQE8e8joY96SAXJVamWhF5ChiBeYXmMZ8wReM76RTYk8HrZgiz2b7FEVNRHhvZxGsZy",
  "key1": "5gNSfJ4EbFkMvzF8qHHMeqLYcKfPd2niyZrK4imZLCQWJJAdRCA8TfqufUTGug3Kp7hoDWjPXUGAYRANDnFYD2G9",
  "key2": "28JZ8smF28auNxUv4M7zymBXo4RiAABCh1GGc6q57i1bxwhnaaGpBQJjEp54uDx4YRuKdKZGkmRsyXdkGSkysgyb",
  "key3": "ViVXfiDvYrf1TJKV9BeyqnzQfrndrxiL5tU6Lwx7hoGoE8Vm2HNgCHoASyYAi3pKEBVSpBQYYie6eoTazx6qwVp",
  "key4": "4Lh8VFLRr5wpx85niVViRmBMqxRzN7vYmeFpTX6YpSWNDvEtovAyuosdZuPNwgzvH1WRErYpUySkoFTV2tLpXFNJ",
  "key5": "4vSVNwE9Qhph57NbZpFvnxjLBTbQT9B5XVdhoa32e8YZFqJFXU1soXap9mKh487knZYp36Nte7wRMcQq3Hu2KDm7",
  "key6": "2fG1DPFYrXTsknfz3UCtZUhNLQxBk41HJ6CBmqe5HkX8TKL3u35WXkKMESeLKKDH58L5P8TtwpXxQMmoDMAceZyy",
  "key7": "4Q951Snk8H3vqexqPTGBnf9dkmybwo4QACxPh6peaDNP6g9ZZteTzVw2Sy6XDzvsbfvygRM6UnjEK8SDXwFftsLu",
  "key8": "3f6hgbsPKPuSqwGgh4ESXqut6xXyrCpgDA2MNANpa5czctZXNFDAfAELmwfYk33e7aFah3W8ocJiAKU1SY7tRz57",
  "key9": "63eWWoC4PW2c6BykSLZTvdpEUGKNxbNdyeh5GyCd1MSwQrBkHuPBDHyU7PDZombrUQyU4XvKbUkJ3xfczwgpAJmf",
  "key10": "5k9dSUMnrVaJSh3bv5oXVFtRDToPXYkathGFunTVGuQrhu4Yooum6wS5RPyf5WWJQbQNAzbdsZ1dVHfMVQKwRTeH",
  "key11": "64LVGr637eegYf4TZ9mHB3tx6mijCr8AdxgXZxZQpAYQjA6QVvVTRoYJPUMCrpJBw9UQPeMbQ7iApd8Mh8EiWeuq",
  "key12": "5F8jRfJjaQDF6QUzKqYKp38qjLGDp2JUoDCxPBV8KDNYX8ABNS1CwD8Qa5GSHmKRLAobRQiQGeuessuKvJmUHY2v",
  "key13": "3TJomkY6yUgC4JAMb9JJkJSzHtzhdA7YboTM8odCMx7Rn8wGjNhVoYHeiMzkbWpcw2w422kwrLdDqMRfr9G59ZZU",
  "key14": "2PYh7Wb5C6iAxVQNQxDpwLH6NB782FLKaYGaSQcEv7wC9yPykZ27asRWosa6WHKeTiagSGLrgVtd1ManeU13UNkX",
  "key15": "5JDen5S1GtrM3xrD9vryGBCSNV2Xe7uGyLHrGmYnEsRLTpWVUvqznWriiMB6v7tMjAWzaPsvZjVixhHctSgWEAB7",
  "key16": "2SjQV4YfxH6nk2ScoLceuZz8yDg1jhHkKjXQy8yavm19BBGFK6LMcPW15RyaRsHKpH7uXRLz2LTCRfTCARqMRmYK",
  "key17": "4kv14grwH37n6AxD5WUJDYqVAzQW9MxfkiGqRoGDqb251YnW2ReHxM7p1J5mMTL372sw5TWeaXV1uaGYvGiUaL5t",
  "key18": "5TdBbS5Ewviiu7GD8mdSQuvonScMoCgERUwfWdhYBrezuKhf2Z8eErzimhRL6f8caXVjv593Af5Bt24m1SP12aqJ",
  "key19": "4ysV3K7tuDpd2XkTYUjnN1Cm7jFQpGtDcwRq8sNDgDGJ38o2qnjmpCidBPJLEHNaHYfhHP9GB8YgDCyVLjkSNmZr",
  "key20": "23Rz7gaGFv5AW7iGHWQtYEYTmcbCoJT2uHykiToTqf9MDupzQGMWKYG5dRfSaUnzQH9jARgdbRA8L51dXtXNuT2o",
  "key21": "Wbpym5STezaRBZ1kH93seUyBbGHjenS9jGWPYNexjP79TBpWh7UprRVBGgQBrgzrukYKYCrzxP3RGEgwkGmbAwv",
  "key22": "4eQUeKDpCqoakr3XYzYasdWBQW9pSXdshRBHonVWAUuD99rDX3tk7KDdSAA21SksxtNm4VtHHofm5MttoE1knjzZ",
  "key23": "kqGGrRamtK9YYw9q8tTLMgFRpfxye2Cxk887uKfQc4mNTs4aJ3LBCvGVnBVfNY79Hf8LcEjEJzs9JLFuFfxxN9k",
  "key24": "4oZ3ctEbtc1eJWmcMHZKUCuVQfYLDLp7PXDBGsH9M4hPrbmh4YRG6daNAnep1bFQgn2tEreTScSFVhWZj9u9BNJL",
  "key25": "5eaxKYyUrHQjP7s1nE84LgKXkxrPTJVPEvFJEwN4TrNVThAYCTgNeBRAoedxDx83RXdeFe5ZcJSpXDiZh71fctCJ",
  "key26": "3BeHtT7YYdMQT5WeASXFygNmWH3UASoz5wo1d73uirdmFaSPgAudt71sbLiDQkjBxeftPfiMWRemd9F18YGREeMv",
  "key27": "5EKHbnx23agcnMN2u7qm2NpMReTjebKjXM9GFafifk25b5sas5yaWggPPoAnS1zvhXfch4a8C8wRycdgEXH4hHSE",
  "key28": "NLzJp9B8jCYwFBkzdFfjDiNyUnvnnQjC5hyiXSr5weZmQDmmx23sJpcqe2eUScu2emnv8k97V6bWQYGzs8TELPK",
  "key29": "534df5xkjD9teVuYoxGCkU5fsoAKpeMDPYc2QjnDWgwdwgD9R52bRZDSk8Qg88pFSnqVdrYQy3US84vEu1FgazHt",
  "key30": "55GfMY8PnRmDJhw8scwbFndxLefGGRrX85J8YgtAAbwR6HrQyFJ9M4k5pgfght4iF6LaTGw24Lk2v6fC79oPeq5T",
  "key31": "5u6Y4HYd93e5qHhmPxQjjwV7g2gKVqibDY8XhF5yECFQbLaLSt4jDJGRWRygzzAyDZkE1irkYLiKThBULnmmjrjL",
  "key32": "53jMB6uPEMrYkei1sbRTZXVQLDCXVNCtiwsh6JVgy4dsB7rbG41GHhJ7XtUC2tqfkBmBSWxBR2mVBbJeSVvEYbAj",
  "key33": "52E2GZQcBrycYRv9snDTS8cHScunxgpfgHwSWKeQzriR4vLtM1q2WnAkwLasfrMA8CuaJt1eo8uKiHtGE5u83bG6",
  "key34": "7RhNUVVxD6CnAHFmvoGFHwuWoS7Xsr75kQcHWqRa1xgf2eK8xcNie9nRgj5jb6hyg13xpQxzB8qiKho3LGzjHs3",
  "key35": "55wuA2s6vncxKG9p6x9dvzECyk39MUfVydtyQQUNS2rSGaVr1n8Cj9yznNMhgj6m4bGRsyVmpPRzangGHgQZzUNj",
  "key36": "LNu3Cbjrj1uXzP1teLAPpningD4Dz1fPpHXwYZeeQ8drrgpLDvokojFNjMSMphWe5QzwQBJbQgW3vtVoj2854BM",
  "key37": "F56qVrsz4icryo8LFj3CfFdhAc1KsW9SeRYTVAZuCzpCRUndnivRLrFsNNi3XBsTbvmo97GQBYRRSWTugcSAzLA",
  "key38": "4siWkCwa4toyE1BAJG4QUSt4WAxwLJZtcFbwSyHvyq1GR5MsCxqCW2o7xJjRymsWSUCxmfnhQd3RGpSJGvRXeMm8",
  "key39": "32pjqe4HDqpS5BxGpjTEgmtsekxWcANGjCP5rEZZYrHEWjwtpxap4hK1jaUHMHaGQH5fn3zZ783ak5boPCYoJyYf",
  "key40": "5wPjFT7yVFYvCVNt3keCcpLBK6w4hk6JPvsr5jaqpyr7Rm6xeqpwBgK15Jauye218mhx9B5pNzEyVrD8koRuTf2Y",
  "key41": "5L3SrBB6LoivXkEsQ4QnqEyyqReu9crEapvhJsB1UXNzHFe46qjSbRwUV2zGnnu8Gw7KRCYcbbFB4huhQX8gr35J",
  "key42": "J1HXCKdeEu3ptouhLjuzNkYKk17v2TAvesAbaWfMRdhj9VQ5zLNZEJCcu1dMvUMxCMJ1KB4ERyonjDyZ9gXZuHy",
  "key43": "MaHoMaSnQTsJPix7DwkY7qfd6hACvo5nFjPDt2aekcVHG3FUpAEojWfBy7cx8dWwvAmXnEUZaSn1yZJ8KTXSdzx",
  "key44": "64txJA5uNGVyYrmHU6B2ho1wo7tvcknKGgq9j3d6j2xJ2xVNo4Gf4AztTjxC7gYQKNgKqypQw9EgpGuSqJ4gRepr",
  "key45": "41pwX1dE6FiPAkWBGuc5Ac5hStv1WyLzBqdHPiWV5VfhCduKQrTeVTf7xDj877wRg5ZJ4NDkY1ZkvzEP4GGPCuJG",
  "key46": "QviEdx4jsyfUaHbTXopowdzxS9AmabQ3xYpxzokoSGLDVXr6oQ1TxWF3D21JahJ1fh6QRfG1VHyJSzZwzzgALad",
  "key47": "2rtJDkXf79VoUrtvbz3k8auptMVmrRTehwpUhpyoTzYC1XRzgh6G9CdErKyM49imZR1uJauXdMGR74zfzE3ghMXN",
  "key48": "4NiL3uGCpUsECw522QF8ENfwKJGmSkHSapq6WsTDKQxby6ESD2XdJ4GjrgfJWPUEasg6WhizckrTEUv71gAR2hZB",
  "key49": "38TtJiU78Gxb4TW4muVWTqNetTK1C4o2ENPs8ystrFPa85mjdMHNUqKkr9JKyp8LXownxHDWZYAxR5Vy8PcqMkPw"
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
