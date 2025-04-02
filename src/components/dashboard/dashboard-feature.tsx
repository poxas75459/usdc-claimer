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
    "NfMegoohJhDZgiETQag1CGUkP3e7aZDpUL8MipNLzkuy6uQWQRHhKGenzptcCyCVdH5NYsoxeqgJLhqBBcdf2F9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GwymDYSfRdf23r3UN1oPVogRmP1VCnLTuW62AaFNoRz3XUT31AN8osgqx6VL8LgkdikwwQM6i9JiK7TVPpu3evB",
  "key1": "5FnprwUDZx83zBjjWDTVoWeBeLFVzvsDqXoiBVbxPyZV6Mgq42WQstjvSUp8YaixykwjWCMa7k6TsNBJmxeE2GXf",
  "key2": "4S7B9cWiWdseJsqTogeTaDchZr2augUAFRhY6awvVN8Km5anuRCnHuYNLezKCTjfkWXSsd4Kd4UX7J9uNAtaovq7",
  "key3": "575HLw8v5sxL1CVmdpSid6j34odSpPc4MPC5gw2uyxNKoCWhc8wSq5B6mBjAGBrCGG9s8QmAuH45xYs7i9Fpraih",
  "key4": "4Rjd8koBn2pxKqDAQsnpXpRc7U8SFDvdzmqNLBUszHAKgmEHDCfciRrWBd3GQ9xinCbLb5Sm2QYVEw2LS2HeYcwN",
  "key5": "54pkUiynAbaHXXiDoC3Pzuywz6Uk6DQqW53RC2rim9Pn3LwugLoVJ1Gi8Hpvf1wcRwULsVCkbSackjQ2Edb8PB78",
  "key6": "3VxtNy7aGedCYQJD8TiXQShM6AF3ezi9DQHdY9TPkXgVG28ZWx2eAbdDgTfTnG7TVHhdTsXcQkKRLeUAvaQmsmNd",
  "key7": "4RaLqMMZrVrfWw5fHGU6JePVCd98xHMu5UWo6cgPCHqEhG4nWjAdMPa8F62NoLHKd3ZCSBp1DFbjW1Qrw7MJxBdh",
  "key8": "4xayFWmgSvWmrrN3HAxeAmi7GWe6cFwoj4awKgCPYTgTv1iUTJHGm6ctNfqRQ91WvdSHfB2usSquhDVJ5S7AuiFE",
  "key9": "3w7YaFwBF3HVzBeQcac3tYNheEPE7pLnw7eUoCgTjBCha1ijPM7u2YrGaDvo7EanyV5fSBCWftno3J2QDCNMejny",
  "key10": "RvWp2b3MDQLgn8yFkRURYhtpfyEYtQd1r7YyVxS6qcNqKypzgsUREx2htDuCKvWmGqE6U6wW5NyvLozZtGUffzF",
  "key11": "5ccbTPqmh8F5ttVXx3pF91DefUpaUWMH2MTkiqzQUinbMZH38nCp8UeX99MpMSjyH6yzs3an1bLFNhNb8CRKmUiQ",
  "key12": "437aPqup6MEw7edxuhMtn6k5SrDLdVHqPph2yaHmMhFcgpVcUFDUFifvnQ6axVganMZCzZDcLWSyb47GsfSaaMwp",
  "key13": "65uopYXSBdz8CP4q5oZRURx5scm1rV3hiGBcwfNKAh16e17QyaoLkkWyHpugvfqG98b7HDpMGLHj2B2UETaWheeo",
  "key14": "4NATzCLuBJ8H1vS36CNZjFudwc54rvQL83LdyPTyNBQTT4fEVDCN1gy4bQpskKYY7cd8QLTfzEEDAXrMoqzh8doT",
  "key15": "3Fckw9tcx5UbsgAdvuTniNfYgK7YaDfbe6qiituSriUZEKL3norvMwmrC7uCVdr7nyC847oeNBuMd8TxA3v4Jpkq",
  "key16": "2rY6L8JpVeuEcffMKz5b9rC9SbXSjjyWMrvuEqKbNQVhowQwrsL8CApk2hxhZYQJyxQBT5G4wAUxCssGEXrpWAK5",
  "key17": "3SV8Edhezm6UUsFQDfziAVgCW6rhwst7Y43x4NuJigAM8FDmNvHnsf8kgH1DKojKkGmKrJoXR5EjArep8xtQ8s7Q",
  "key18": "vJHDuYMTb41KYH1qD5dcN9qtxQdD3xo3Rm5B4ZoSrz1zDGv38nadpMtmS78Mq9vmT6cP4oPu4UHXmrspZun6p2p",
  "key19": "47eZrv8YTgqZJQM1URWM5ZVfju354j7NFEWVJD1ThjKm8EZ6FU1MdovqHUAScLJaW9Bh6RTpAHkhoDB9eA9vrJCt",
  "key20": "4xFfLz4KNW2365LZQFmVonG99xdYkDyVHQHF6frFKCYnm6MtinH9hkv1DSdUbnFC1xbPRqgvfFiwURkKgMApQyBy",
  "key21": "5KHpjvKY3udhbwWoohAUXXE7bYVKKLGGbj7SiE7e96WkqhGheuYWYgKWdTLG2mhGNSv4vsiGuuY46ueXVYyVeazL",
  "key22": "WVKgggt15r4RsP5U7wfud1bcdyEavnEP6MCNsYReUJ19WNZTDtYQxCxQ4LXrv3vEF4KLbVBEY6Fy3UQJLUzZ2YS",
  "key23": "3fKQaYT2WcYn5fFuPXHaYopki6w1rCQS13VYirJ3v4tVahnZc3ZGFWu97V29xqMigoMPqTXncSsrL3YcXLDtnc7q",
  "key24": "4YnRkgDiKyCZ1GZJM49JkysT12v8e5LvjDtqAL1t1t6oht9AU2vw22rwWHh8mnWtmzRMu9dH3jomKo97c2an2rwD",
  "key25": "4NoY3kHEmepDCiMMbzCuTYrXGysxYHugWU41nj3zwTXt7sJHwFc6ubtCprSmujbaron4qhmRseSC46c7x32LimK9",
  "key26": "4PNw6oUAqrimD28EBsoppE2zvjky9p6QGgdi4tRyyVysvu41QbLKPM4tPAEfanD3FeZjjbJb1HC9iVyLmsDGsHgC",
  "key27": "ZF4qXZFVqqVEcXJqNQB4r2J46tEsU6AHUXUBjPU99MyJd81iAoGgxmSijD2MUY4cTuBrvC9S5hcwLYv91dHotkA",
  "key28": "4owdxnaQxFX2XbfgQuTtedWvzaYsAr45nfT2CESNqqp2LNfV22SYwatFg26FRMp29NJMCvpi4vD5XVRhh9LzREFj",
  "key29": "4UGw2nUbjZSGQNTCrvJq18RqvVoJZgMUqfNvSvBha3ybEnyFpVA6DY5yv4Qm5TUqpfjNvkwVkJnwWrFeZNKhXYVN",
  "key30": "5JU2Uecwy8uCLhb1ay2egbajhtM4QAtzyrdSxyXPjGz3thjcMHg2bcy7xTVTFJ99LprpZwMRtJahcNVpj5u7RrxM",
  "key31": "37fT8MqwnqNLbDX5P185TAfqtHBP1mFHjoicrg7aQfzY71mfdUidxVaF9H8VV1zRGAhBnXK84ewzJ4sFtLrXV3yv",
  "key32": "2E2ci7rfDGTMi9fMohHovZorF7YXR8jmWJUGZZQKNsDW1sEE91pqiypuRCE5DqhJzrCxc9x7NkDFnMUcxpWxnpC7",
  "key33": "5aWvjhKsnjZqD23xSPdgQcZwBcZeavWuZnoZbw38wEu68QGunNN4DF56tdWhwEBPMaoPS7YcR1XvdrhnbnStkxo1",
  "key34": "56gZdCChv5R3pzCLqEGSC1f3QAvq1Pa5iLTU9rrSjo41421tVheAUKybHxKikcbNLREWpvTrmTgeiS293qDT4S9G",
  "key35": "25YJK5DmMRMbXh4nAppLy1SZfgmpgW5zEvLwmXXC2HdUwhrYVEFxwb7CzYwmcSpbd3G4xs93kUGYZUb4myvHFGBY",
  "key36": "NDJRz14JR4wfeE2BaLJEYFzoTgZXJioZug2SXiVi8GrtYwP57bZwHJ8o1oGVd5f4RbEzEPmosSfPJfk1WH8Lcg7",
  "key37": "5vVhgwoVR5ZeaahATSDtNDxKh3AftCqCUkQKV2EU7hxSHzg4AocvvEfKCxmPM6fhxr85fTimFcp5WBi13fp7eozL"
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
