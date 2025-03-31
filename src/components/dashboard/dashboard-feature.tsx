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
    "5xemUbWVDXtRSwA5KZyEJQSd9BT5cGsCoj5Vv2tMjJc4MhmUTa5qXQF8Ci1tXxjg2yr8kB5sRDzr1JhF7W3P19t1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XDfkFLuXS6V3qkLoNkiraT4ScFaMfJvsD6Tctd4XfCMM1n8dmu8WjR55akXBMmS25jHSc7LBsdAsQjtfBVpaHoh",
  "key1": "3jFbRuWwe32jms7jSphrFWtAaef9EAQB2misoEkF2gdJEw7tpGDXc8CQqVaAvkrELC4ryoT2jtGvRkgPBZoWCaka",
  "key2": "4wAiduoGYvmSd4kQYMLPUr423KsHPLS9dWLLx4ecXeDAzupTGdHocjAVwj1nrnDUBy6rushY57mncLXhvwWu3NcJ",
  "key3": "2wH3XLVRrQrGoVtsVekBGnwV2oVfZRs8UdMNDsCpo37UTixLvbEWsBRg4bWNcy792GDn71AhSJFo3o4wLFATHW2T",
  "key4": "MymqgGKEpmArjrL1UB1R6sYJa2EPcgf19ZHnvRqTSGBna4HFRmsB14ca5N4WSLR3T1xz6WKBkvowiL8Z9MN2QVm",
  "key5": "2qZnCiPMf5EQ5FNsSaSazhC8wuNv7n9ASPC5TZBM5dYgn2ZQc3Hr6aJJLD4oib1pbgr3B58uJmJU1aWXkgGkA4JW",
  "key6": "2u9z3Wfsdw3HkmzxuMsSPUxuoT7q51jfb3L7oCMpLqA2NCPpeEM1oKgDZvMqjL2hgPQGZsd1nPvuFXVoSsw3KBmH",
  "key7": "PJwY5Yq5Z6GqAr2icgW6ARcfnasro2AfCyo5wAvQ79KWBwWUNsS2tPkRbWT9CftbfndnEJyG2Cdc4t1sJWqy378",
  "key8": "4BUhFJ1Qo9aeToRaw6vkr9Jw3SCXX3X7TjDM3ki7FSwYvc5vHHyJwMi4g2pcqWTctMjhpaszJznUejAhmYCiaQnC",
  "key9": "3u1Hww2rijQStkvW19M8rj2EtsnCtvXtzCsoD1Ju7R9QnweXs7enktmMwR5DbxJTj6NPgVjhUPkJy8kAvXPrLgkf",
  "key10": "wQhQUig4MavyiJPyXsrdnz8YjtdSWSr239xabuJcSDXYLC9MM4xvMc3c9dVAJPB6fTohmB96Kh8CW1vvnFeHmvP",
  "key11": "5jftJJPHngcSpJmTQ4zwGEa8kTofJ7kZwEZcCfmdCaVngJovNUNQrJ5VF8pao5ZccxRxi5aL7MsJmRefCiCzuD5k",
  "key12": "31G5pfgCjQ3qciapCW3BR3BiMUY8oti2Gxtjqbmwrc2qrG4wHVTTHFMBa32b5e9cj8My6TWj8pLHF7HAvmzPeKKQ",
  "key13": "2CWov23GfJQ6utwUxn4ZkRGCqy54hSv2dqxCn9bZvmbNtFyFjSzp82MvnmLpKwzfCj23siJBjs6WTjZT335Sc2XK",
  "key14": "4GscAbBveyp9sTMCc5PmL9TpiZaasnmAZLEe63uDfZTDZCqdjZQiYP441LHHkjkrCACMuMLQSraWcHL9xcAFPQ4Y",
  "key15": "5gx6wnZEx3pMPPK39Ne59xU3vdq222ALNPVio544LsMa2KoWKfqmQDjMxzxDMpW71Zy1AvCnZCzbRtz5Yud2nJSs",
  "key16": "4kTkxgBimmPSQhHp3XeKaMgpQpXFLFPYNNSZecXd1z2cGEYvv2cq7MAYrr5EoG6heuqhAWJ6MupBN9QLEvmjfzHg",
  "key17": "2q2X1sNwBd5r46FSu1N6dnRJLTjqfcPrUgWkQeXTAAtu9NZBUBgGJCr7ht3iKADAXcaoXBQrWk8Fj1FsdbtRjoQA",
  "key18": "5HHAp65PHF6ZCyouUMGmNBcKyfECZhXimVipT6ruvtLxY59qWMG3D9ooWNYp7vbpk2XJb7C7zVbLVcdLovMoUVAy",
  "key19": "4ytZkRJc7GgqW9bkhaGSY1cCFD47NMywfVntGQnGt51h9gMDhW5tWfXxqWpQzPJzizD3ZGjwfBsW4E9wPgYQaYRZ",
  "key20": "2tz3aV9jEGSMF1A2ZH2jjWXEcBHfouHPFVsmC5geYoCjQtTEXYntCov5LoqqWEtEaLv8RpTKV2jxFvqC2oQduemV",
  "key21": "4SbmoAFbVhtGbgcQiLPDKKEyeyMfCTDBGgDeXrb6Qy7Pu1F6bFVuqHCMShxEpnBXAfNS4zeorWgHdPF4SymaQa3x",
  "key22": "3vk7eXkgjW8pHdfKGftWBj5yr39L98ugoL6Pfiq4GskqERNPKRa6j7QNJY1h6HPQZ8iDcVRMFLuBxcc4mcB5bfDf",
  "key23": "2rWB93v3sEFxRataF7wzSCMZCH6KVHiSseSGNLxPwgRDV44N8T6TwTuLWPBLvfWtSoBYHvLyMPuQncPuZES5bisA",
  "key24": "3XavQMfShH6URsjtrhUQbLSmftPP7fC4iXTMzhW61Y2Y9i6yiudY5tTBmJeZeBmuMwwDWj53DLuiykCFAzrgafHt",
  "key25": "5Sm3QukXebBw6sboBxWUzZc2QxUJiRP5QzmzyoczqtpFXYHBv5fBVCpae6MtxsCJPRmLwo5cBpmaFgrLPfnixzrJ",
  "key26": "2jQGrFARtxtBqiGenrTstJHWGeer9nWhsn7p2WqhsgiMEn2gkuXynYFnyWh7VSMohPJoDf7AAiWx1ArCvGcEkSsW",
  "key27": "2H8ZdQ5nLyJ4LjKAdnjSrxQHBuHUmUH55HMSoxufRZG4tXQyADrSTauhfd4YVvrweZtMe8uCYKbcvUtZy88w22dx",
  "key28": "67rJn77iDraftasumyGZECtevtFmimsj5nvL8rWheU5aN1uE3fetxXm9vVP3Z62vuC6xoynVNjXEo3KrqA5gWo7e",
  "key29": "2NLdJgZjDPQ6Eza2uGv7y2vit54SppJkHNRL1QAKFL5jeiYPrkTTsZCov5Ab2Eb8X73fsZoRFrpbjgCU1mLEa3mc",
  "key30": "5eQE3KEBaMr398Rpn3mb31pw2YzRDtGooS9RQCuTsPLMdevDEtXc3vJtQwBcKJGEdy6BnSWGpFSpvotqQaaJT17C",
  "key31": "X8wsCDQA2frRc9CVHVarx1LS9uL91puSf67D5kcUfXguX1hwBwWeR9ec1stKk8tA8P91BGqXNfqqFJ4ZyNAFv9W",
  "key32": "58Ep14XinzKHYqSZVAuVxm6FptsrQ3sjibdbJjAYf8QRK8A3WJFzZPhwVgvNTEvLS3y8uQRAfQqJ2QacJbh78ows",
  "key33": "WcJAPhZ2CQLzZKfaqAdZESPe5KCmJAQnxLoJss6KyyD7z46DURxZQKXZiDcP8cx2ayoM9Hhj5Dmh695v6fkeYaD",
  "key34": "4y5vfWP5tKUskxdSCWFJ9i7tr7ewRBbZ6d8V3TzNWt9rnMucCdhJAcMf59z1rH1XJ2wftahPz5VCreJMzc5ifspB",
  "key35": "4tA2YLhVC5RGqe6pj87Lsj9qYPJtUkKAe4tmFeYNgXyZk55w6yGAW5ZhezJ5zKYbPHcKNrCkxJsvpyjxaLFJ71CB",
  "key36": "FAXMqDTMVMTQzpcjsfgfVZfzcvrUZRyZg8aAaYGFKa869WmT7zrLuV9bMQLA8uL6giHHzTDCBrijjtMFimAA47J",
  "key37": "5jrjrwXyjGyctgHq2qB9j2amEzSp4FmMMD9mbGNAF5DKuVqNBMJXs8Df4E3CEitmrXuDUsViCJt86Pi2DkfJqbgq",
  "key38": "8FtSWAGM57EWjK2d8NJCTdfZSwygtaKAhJkt6F3NkoNsAFsARW2aVh1dK7rpZhG2Zm84ss7xwEnwWcojyTLNUCd"
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
