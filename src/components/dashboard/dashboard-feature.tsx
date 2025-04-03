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
    "BqMT9eiZKurVqDJKmNzBTdpRNhzALMkBD6zdvXjN3wPyUNHu4yBmT83uxbQf6ZBtwLoTNnaSWNRJC2qm3KowkFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mFvWnH2zVxrCHsttpK1hPFnTh5VxWFafSazFQ661QaoZecVF9pA17pRJdtpT5fNTPFNb7cWM1RNZqq4AXWHsGo1",
  "key1": "3BXwdYZrq3FdoYZnQQviFb5Sy2rzMs58rrejQ2jMaVyco4zzYBUMUb8BjXvZ9aQvJNUWj5RVYADSEB9KbNXG4ffT",
  "key2": "sN7rveKaW7SVh7414wzsJqDBDD2Bri6iiDGdFM9AiG2ykYcxSFoPH8yooFX1r8ubjEq2WSHF5QgvM2MD99ZtW57",
  "key3": "2jukYaZE4nYjPBUEqFmZk1Vubs8uRSCnJqtCGm9Ue6vtrNSC995gtvmWejFT3oLdEYKzN5fvb7ZZSwsY1csEnZBs",
  "key4": "33Z4jkQYDid6zLCwjRhd43rjye1Z57zVwbEDuR4W9bCQjGWdFo26bGDkzbiDtwAQrSj6wzwMLiiZ5yYuYZQivZrv",
  "key5": "42wDHKcQqtohuVM1cZk4RfAaDJmzxDPAPAd7MW1fRKvA88caZwdQDaJbiHCAAHkQjyeCbhzDQuWURBM9w2Z1v5qQ",
  "key6": "3G8wUQev4xJzvfHGncWTh7Ye3XKwakJTJt76TLowquj19wPd4RGr2cbCE2hxxQ1GKmdPChQhTQDhYiEp1oE6xpR8",
  "key7": "5B8yv5Q9EZ4h3botXzGQPc1oKoq8ZwTsHp4tHsdPT4yC1crVr3wGLATES9cEUDmsRjSuowFpMsCRzK5ppRH4RJkS",
  "key8": "o7i293jUZ8ovSNZeYgqFwknQLXsCxYvrR853TXGfGe5zv3pe24zbjZPKEP2Lt2GFwcthwYHy8T9kb9qLE9ZeoPv",
  "key9": "3S4wLszvf82LgPrzo6iupH3Booj3KW3MoQ9pWihg6fkkNGLjjvP5cWKSgnKfPm8WeaFwnr4hUkXoPGmscSCShfdc",
  "key10": "2wPP4tsEiDXFYzyTFTfHyJceVbVrFfUwGC4uCCPC589MiCUMhsRGbNRnrqcBfAkSBxmwobGTikdz9cS9b9JxPWjA",
  "key11": "35JJSFhJQYVcHxFKedkwWvCaZeDvP363xYohTnz8RF6g2ZNzpYSurFUFAjMdevzeNoPLMpasqjh4UmMa2GuxeJc9",
  "key12": "4CuHNLkX3gZ5maCaUH83bUQ3yJUYVP5RzWmgroU2RuPowtTyx7dfsjHD4jM3ET94RzLJ1xj1seaJM8a8AzhhvmwN",
  "key13": "4fQAAuSEC3mfdL1cbNSfyqE7PmfzphCEAKt1RMccumnNZh9HCPmbHWU2SMYmYaaMGuxhoBrKFctaR8uQDQthQ4gj",
  "key14": "3EQgGHGKVFshvuDcNLtw3sghyjZ7vKNgvxp7TiaCdFVkjUKsvNDvxcp2mpvTcEvhVpwUXwhDHeTtuMJgnd1hY2vS",
  "key15": "25cmLWYcJnbwEE7FHcoojEzTwwXBYbeDjXW1RC4tmBAfJLwza6oXnpLqD5EEWKZA9d4MH6BHdiE69NVKGz5WdyKf",
  "key16": "4NkCsjGiEaAZ9ThaYj771pkPZRZzbDTYuJ3xtM8X35DhjgPq1d5mQngmVDSLbpQ82iGHnmVx8mr8HT23ZzvfpsVV",
  "key17": "2XGyCemDArDCJDp6qgXcRtxN7Ck9GX11z4ZWE4xEeHuv3vayXDYNT2VEmCxvUPvRQ67EhsnurNQ4bWa1N621stvQ",
  "key18": "HvQnmwWLPyVVhkJBBoLuadSTwepTiECLoBZvxy59bT2mpU5quhPpCEejSrXGAZ9sc9j5xaGGnRTdzimNHD7tfFo",
  "key19": "8DXq7XJbLHehCEAUf4fkUs1CNtvmxFQdc89fd2cu2HyARAk5wpojsh34QfvKzZ72D7BPxGJCTTfE2rcuVzQEuRJ",
  "key20": "5hFhTkQ7hM8C3kKNcMGvG9wEYkY9jp2V1bD66PdEvcxcDNs2ewEFPt2Q1SkiWvyUpo5UToqHj3zaU4RiCAWfPZYT",
  "key21": "4XSiXZdFojgPNwbGaPxyLr49bpsAZnN6endUnC4CebbY6zrmyQEF2scStL56YuTjx23jQ8wXQChiayCHLWBBTFBJ",
  "key22": "4zuMjWgZesfQo1sDo8GcrRY34Mjvc23Bdfz8sNzmzPSF6wgTRLXYxA17Fy1rup5dhXjKcq1LyM4QSuJimHp11PPE",
  "key23": "3Y3UppLDyBkKdojBpSarNn3VVpq8sjLGZaUhWodV2Mu3Cp67RS4LfX9ebQd5hoPenjEDM7F5bPi7bEX1UAJF5619",
  "key24": "xhmFAcfwUo4vwogw3VGLCLBDnbWqqQQxnD4LEKmH9URRSsNGkeptHrAAJRHztUk9BWfsby982fL2JPFgDLEzTTQ",
  "key25": "319eXUsLrrhue3YMmC8KPKjWgCrnkmuNPvVfRwaWVKQ1k29XYEUDe3QtQ19ezjXWFaEAd6n8sWSbcdrkytbcHtg6",
  "key26": "3n7HTsstww8tqXCbZDccTh3ah1Lc2kKhrrDLjcbF3Y2WbBar7XBjKnWXmh5WAv9C9FF4kuxjBijZvrtQbNQMjwPy",
  "key27": "5WToHmmcGLv1uQUTeuxjjc6KSZYmcx9UjVCubXMRh2WVhjeRnnpLKqywWZ8wiGcZGuZMp2Day23ueSbjc4KMyrQ8",
  "key28": "4nmnp4qs9dKTSAkDGiK3kG6Z5r4hBMA6hMHS6e5Xi5gtYiPHgJERTzHB6qcwhA4ETfCfqYrhixj5Cn9XnhHiUBiz",
  "key29": "6bBCo29Cd5GJsfNzNePivP31gS6fbCJzAmDiKRg7GtUoqAou9LFxG5rRArNH34AeTPUkuzV8EE4dL6CnjMoLJtE",
  "key30": "2dMV23xGYVVdWVmuSTefksEmmVJvnnSB51Mp9uB3YeaWpxsNdUgYzzEWHqKC829pLD5MdJ7jYMwZtF7LVogSSRF8",
  "key31": "39nzCjX4xxUAVZnzEqrr8A6gu42U8D6ZM6Cm75UoFLQ3ihL7m1zF4rfvhbrJqEv82sndGCNzDDz5x7Tj659vNDq8",
  "key32": "2JEXsEHNym4VVZM2SSEM1ngUWNTgHf2MGSmPGYa38SBe5hnEgtuRsmfqhn7PfBsTMkiNVwF7bnVrpQQj33dfJKe8",
  "key33": "65B6wAfYWvjjdkRpwvNpv19C49ZyR78inXGQ5JpuAxGyEspHcBxLz1YNWQAHsuM9abAVh6aLYsbJoPaCae2JwNPa",
  "key34": "2vunyuoW3mvPZnnGiioHSWcmzg3si7ob8E4hK3eT4pBGzc1MBSUGVMwVWFFK8dDXxVtT4VM4eoPhrPvabd1gijcR",
  "key35": "8xr3wxJExsoqdEpfyStr3pUGfpjVZ5YsAhAfg13tBeaDcocQeAEsLrDGvP59N9SX1jaWja7NNm29dU3c6b5qpoK",
  "key36": "2d2neUjsc3iHXmnfG1YZvFrnv3Cka8f7eemJaaXSPKum67KxRRtEachCVjq8zrcwku8ekf3eA5Ypi4EjPnzHWTda",
  "key37": "3SNJPkmWbT3TSuiTmkWrmmhNh5F3XV2hnAqZbP1VXWsq5QBtR71EFRjWUkr37UCD46et8kMbNSMcnqSVsSXs5z4H",
  "key38": "4qY1dtrfs3Z7vkws8DrTiCozAk7KhJi2BCScqBA7eMku2aUVrRKmX4EzmDCaN73dLKhcBn1z2viCuqtnw9mXNXui",
  "key39": "2CLa2uSij3KVK3jDzVSYF3r4K8XQvmwqZrzgkCmhN6J5MrDyoNvmAasjsQR4o8rGJ7MXcR9uTPQppF8yCjmJbeae",
  "key40": "5wTkmmuTbCskuYSCEKhcnYCrBHdmaPe5SGEfpxAWY4yXkdxqpqYj5cKJ2icfbwsuyRPG9dDJZQen1zDuut9cMsEp",
  "key41": "2SeqxUXAm9cXqeB7g7VGNqhSBjQhPvQ3HzchAyRTixvf6iVAsa9UXhbQkcwBhQu2PexcGW9RZUERwtkyKQie3a4n",
  "key42": "3fpLcGNA1icyHifcC58bJPMst5bkSrp4Kiq9J6SZCk2ecua6oSqBEPSLhtZyFRN592N1CSUNM1tjRKWcKAqPnAL8",
  "key43": "2mCwXY7gJ8N1UrUUGvnnFhApLB2aGnn3RNipndxtkgzdiCMt69x8CJAjqGXxXuf8SKcFz4mKudHj2LMhDwLRUiT3",
  "key44": "5tkg3CzqXLHpPUfmbXgJ4uQdKf9TBALx7wG3FmkSUNA7zkqtUdDhxLWS9MBmDb7fvuKXxjrg9kecvjHNoKu32thg",
  "key45": "5qLr4ED4kEbfkJY9ULYqf6drrdi3azS2xchXEwvJxYcytuXaJa99G9baQsggWoCDFgLQj47cc4ufpv7Eeb9eimsJ",
  "key46": "4HbsZdDuYSSi8jPNKUKfQxiP1k3N1fPTtYrLXsneZ8ocn5YMnzWG7Yduk5uF27dd33pdqJdvChFoYpawSJUp3gZi",
  "key47": "5sSuWkwaS3pLukWbp58tQ9ejZXSRxqNjaHu5JZnpDGaA3tnGxNLa4zBFQamWMVHWp7H2n4FbGbZWjgN36p9MnjbK",
  "key48": "4TMk9Pi6fgwkdr7XBvZw3X9KNTmwv8oF1XQFJtTiBXL7nrwiu8cTHWwk3cBJhFoxziy81oRBW9M7SYhsFJkGPCtC",
  "key49": "3foTtq9XAoA67dpxuCJzCWpECxQ4o2fgcECNLxkf7XqzCRHSSd7WLXGor3Y1VWnAUZzS6kcxiiLEspSgQMn36t8u"
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
