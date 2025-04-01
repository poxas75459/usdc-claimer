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
    "5DCHaGLBTJPR9RiFDpnwYfwhAWY7pBPDTwfk6QweZRcfBJvs7tXcRKKS7Ze2ZZhSPswPRpLYFHLre72bvhKDCZbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MXMdzJ8eqRQkU2uDxfGHofY5swC18VJx5PtAn8GYhuakFq6Wo54EdJvW8Rn5JLu6qGK2NM7enA9QVGMETUUUgqE",
  "key1": "4RLFsa4n7N8BxeQquTb7hEekmWMG1SjdDRpZ9Z8rhxE9vdCnov6BXJcPbXeKJDNw9PvU1Uy4TPq3D6bgdYKQKYXM",
  "key2": "sxijwBBrTsMdh8HHFxuVnnwXudw8g6oAU8xAQzEQjGcKRT1a9s2vrvmzW9ChR8o8z5QEswzvfi5VQ9nw6sKwfwM",
  "key3": "5ozUrYhFAFAtzTBgLPmwGQXxSG46hmHomN6YNjL3VAwdH2ZvqVGMvCLUiDjLRMxrT2NuLsDBYJaxXRtbfPmMhtUE",
  "key4": "4fQQjMBpUCw3zKGfceEAHHg3xzGw3945QN6DnEEQtFCX6XwnvTU3tTRC2bGeoPs8faqYyihRMnYVgXtpwesv3KJK",
  "key5": "Fay8FZUoZhZ8Be7nhRuawwVNTN9n31DguFXjt7vpXS8wcRk2YRdv8ucW1mU1F4dDYfnyBDeDntPwd8G1LQLEbeh",
  "key6": "3DcWTuC9vSEKoxHFuHLfjmZ4ynoTKwwF5MPNmnCFUz8CV1HGJRVWWqrFL3XsszURQwahN1pDmGSVqwUoyhUo1w1Y",
  "key7": "3GEGSzWXovuv5mnzcpFKm3S3c3RNDXYv4eYxzVhR8wUumoU8zDAsik6uabFvsGjuxPPtc61chTCCLbpFeWcygqAT",
  "key8": "6fUE9zAXE51qhN4dqD1q5MDR4qde1HDSYzwopNFHtHR5wugURQ3T3VZxC3JokYMAWXe6tnjVoeFCwUR1CPmqGE7",
  "key9": "48dao9xYKmTAZ9qnqBtgLRnhCzVucw1PCfchNH1uVPHV9fz7A98BxBiXc3SXa69VUtxJkJgCMc39Qf6w8TydHpKb",
  "key10": "3awMi3ByFFpX4L7Ts71jX5SuEpURVU8kGSqi5gX2DJeEkg8XKRPNh4PyePP7XKhxw23LUhANXWdbPqbqgZDLoA3i",
  "key11": "3aq1zTveZ32p4tHVguJQB7zXzdbapE3aiYLWLkkdk9L8hUDsSrX9gEPdQ6v22N47JHaWvAMvA2wMFnWuP1KVbKZD",
  "key12": "267sKSSGCWTqQBUK11MTdXGByG8bPHMvP34s2BvYJEkRVxVUPPCswA8iauAtvA98mPRyfUMtP7HnV1nrrrEfazRj",
  "key13": "CRBjHrCUtqYK7sSqvBTvChnnvTnJRS51WGcsXfgHpBe8YKHoprLdyN7PRr8cfmmGRP1FP2m4cPKnXzZqje3NWeu",
  "key14": "2zxBdZ3kABT8NmTGWahe3fonbkxDbMW8P4bhMt1RV3aLuCrJr18WgSZVgZp4oQNMY1dc45ovGbfg43N3L2dxhsge",
  "key15": "2xWAGB2TeZDd1nA5FkjXNhpmyvdE5Y47sziPbmwbLC8hFpm2xMeaL1hNPURa3SXDD2hi94mLsQQuRdYofnyMey89",
  "key16": "5u5X4mK5PL7RgnKFsZRiyNVu8xduzjYVNtzvBzo9qSNNmChQnkZgNbN3x9DxtSJNny1TN1iF9kockFKNMCUGaQdZ",
  "key17": "21MeGPV4MtuH8WpHVJeQuKqSHb68FDSuMEjwsttiT4Mfi4NMHzM9PF89NqCf7MLkRCT6BVyLANtRxygigNiFt9Sc",
  "key18": "2EaTEjGHMXrhhxfc2ePKnBRWKR6jj2pM27ccxjA4Scqds4fXafADC3B9wi98qfk7fDun7YsHgA1kPv2YH8djepvL",
  "key19": "zxAw8FgVs4KVZGVss15AWDXdwfFKLKhtCZKiw13SCARkmAQDgXtnGzKDX4pPvqiKfRGaqrAD4aM3r82fxiWGs1q",
  "key20": "3HQNXzqgptsAQE8W9xGQuyAryA7WHhLcxNVt1xQvQvUmmNgcDnKfTCzwBFr8CzcfWaqJptAi4PyF68CiVwFx2Pge",
  "key21": "4b6HuEpx3pwYJUBnu5r9Jah2iKh9Ggis91FVzuV9PqMqtRp5AW6mN7N5X97JnSS1dimp2TLPw3mEaifNHmygYmNe",
  "key22": "4if9QKGxJej2sGePmwfYhkNsyVs2Upbm7doBwoEa7uTVizx192f8HNHuZPhFJuYQmiiVbgU2SJX939qDLYmo36YD",
  "key23": "uXJGno1pXb6FviJqYyRuZWQ82gEKrAXzeE3yLQw1o8UAtooDa7ZSxwfsepDz8MYfdAwQ5Waoc3kQ2mGSpQRht3G",
  "key24": "5ykJCQFZnCt9BqgNc7zJKyGfGwFZgFEgTwudHrenWLV6f86qNgHqCeX9h2u9N8aEMfHWQdMCpgqRpHfXnoDfv6Jc",
  "key25": "4fSiQsyufQHxXkra6xKsZ312vNGowCejsj7KrMbUr4wwHSK242WpMSyshLfkCjfiwGo9Fe4BrJWoXCzwPKnPUveE",
  "key26": "fVmvr7scgJeTn7hd7RsagHrMZPuvoWWPmXZp1WQr7sDUGhGbsaHv9jyBNG7nGtdCyStXjUzaCy2M1hAYcBhWL7t",
  "key27": "4gfvtp4GH3PjbPbkJXzCKXd7YKzyvBTCCcUADeQgjnxwwC1mdbiEhWEbLFvyGZ6iPLuPMsm8qjeN8VZGLSsfYi4q",
  "key28": "5w1dgc7Cih6E9GH5abJwD8KtVKqtJ2YiEmGtGdP4ZYzpJY7Qihh9UK58yZPWpNAp4KcVVsBAuLtpkVqD7MzZWXeZ",
  "key29": "5PrFXiUMyZzAwxCD5u1guKLUEfWffxj13AP62m6k9yQGeNbrpxWa6J9WmeWofbfm8Ee5gGRA53KdifokvsNuZLP3",
  "key30": "5ESBBKfyEYpTZ9ZFLBuCsJVoNXSczt1Js5Ne372zwXokstEXDT2keei2angqBSsrS2xKssfq8eNXtjmhvaU6SBQe",
  "key31": "3YMR34QQKBDZKTnY6iSJwN3mQr46kzW4zPfVFnM8C5QeZid5VJxNpo6Jz43QcPWDzksSs8MkpbehKdUxsgexbC4n",
  "key32": "3Dy1HpnFr8AQG91GRLcJFVRmfyS36e4DN6pL7t3GS9QSnEndaWLnjkyufqjBDjTkW4HoR27kKLdV5vDfQ1qVrzE2",
  "key33": "5YJuK9tA1GoJNtKF3erHqb1SLuAZRnAzo4FJYXwpSAkayEjn1761HmCRnrssrPegDyiHoNoKfd1oq9ziTSrkG4mX",
  "key34": "4dqomUr5Vv8mTfFu5gJ6fijvSqHdcMTenCL4ikro2M4ax6eSiRK2EEn2tbQJs4N4BmHX9cDnd6RBFCL2WpHDHnT4",
  "key35": "2TG23J6cn5WSq3mzha6H88mCbwKbjJLuqiwvZh7bKTPxTvfyQn1HGVocd18SuUcLLvmUsLVFHeCE4pBFxsPTfEoj",
  "key36": "51Ga3vPYAXkNCDMdLRXEu1KwMZTBqyYd4gYJM3jxF5BgQYQ6wcHMFKNujx3m4Mtz3m8oPCS8LmqDzUXyGuYJmzDR",
  "key37": "4DamU5Yu5uBbEYqMVhguDSBFN8i9NijK5hhyynLuCBsy9JaDf6UXJQej3JiZA6SC6heuNZRPtFX7RgvQECji5pus",
  "key38": "5K9i18jKczwweZaUZsFU7fbNLcFNaV2JEeZS1zhHfP1won8igjC9yGPR4A2YcizuHJedekzsQjXbRnywibKrBft5",
  "key39": "3bay48Cf1Cja1NArfKc4ZWo2Gsz4k6vq8cqx2WoEc4iv7rTEmtiVr5KHEB9bri7RBBFo3k3DNciGWAdsaBhdfdWd",
  "key40": "4GmYkMVvjgQQ2fqmJ4an7jaW2QZKwuwhgRm3ZyiNRoGzDQ5CWgpG87g2VMiJHSSQPtRJtyzW9s573DLMaLERvZ1g",
  "key41": "4ZXse76MiUdYGnm4apkiCWkWdxGVfqJGYBYUiJqd3cJDmTzaYGnX7W4T511iXy7eciCijYuSH2aPoZ7XzS133BgZ",
  "key42": "nhxfKjTk4GPyqQqbeDP9CgABZDToVYdFAh5V5yxrGqBSXNp7HT7dot49p2fnStDXB315gHT1M2HypxtVJPdh1Uw",
  "key43": "3LS4HvPeny9D6bUdGK1f93KyDhpNGrq2bn6anvgWDxMYmm8rBU3MwpMfyG64XRHjv4MCUqddDDicgdFQjmS6y3az",
  "key44": "29XZTh6oivSj37WBPchVadFVgjwVpgu6AG4f556hYmNJk6ZKxv39LpJY6JRQEaEPcaNGN62JcPiL2c8EWYgsvXis",
  "key45": "2fvCgKxLMpjNoTvTGdpSmDNBnskC7PQzsvWxrCfwjNaFVciEj28k7BkV33FAKJaJUH9QXXDvocgrp4gqYkC5ohyS",
  "key46": "293LWfqHwj1vQZ7Q4TDCmn7s5BgfMzHopRWLW1jdUbjPYW4yQ5yEi279KVHuTsyMCHHAjvpnpPF8ViUYFikKrYwQ",
  "key47": "64xyu7r9BCGs1RZcRwDaXdWMWwYToofTeiMvpRCVXqLEArBuJuSCQJDto1ENvCdEjT9RSapeW74vTcfeSeimPFhg"
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
