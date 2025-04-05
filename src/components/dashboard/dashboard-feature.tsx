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
    "3cxkpz55sWA22p8Ux1U3q5asFA58Q7K2nR9xgDNMmgXZHG4pjXCKpupALVFnVLacn332H9AFmgihEZgEHhCbTtFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tN58FC7Uybrx5mAgiATTKVo2as8HUC5sR6MdKTtJLJGigLQiysoB5pvybDbiE6VApRS85HAeToY8zU4EFPzvfA7",
  "key1": "3F3U8rstnqEZnAUDEAGZpxeLMQRDV79WWgaLSkSYrD1UNbWjK1cwLgsx8ZeSEvtEzYcArFWj13RX6RuUmkrveZRa",
  "key2": "VTrxiiVmFRGaRvdccdxCBtzW9tydG537meDpe6vERLHY12uR22xx3tk5Hfye8TSkMhStZxTnbWv5uDeVGiKjHma",
  "key3": "3kpWWJ4yuuBUe4RqwZBXtiAdFbJMM1jUc3UU84wNqnztfFiGr55ScznMaHtyB3wfnANKyi5nyjGk7GGdQfx2ggJH",
  "key4": "3QxYmmJtF5W8ejm7kw4yWo4R9BA4YAgPTnYTnytrHFwQ9QLEdpg4mn8CGddDsfwNkRnkUzwQdnhCazE6DUpagAqQ",
  "key5": "2G4CLsiv6SVxe2JJefSUWQCfCdu3RapGnHSdtVR5mQp65KRzqzaSNMV3n6bdYg8ekSjfTRdaH3qhJScSPGkLtf1i",
  "key6": "4nPxTQjJEb6oNd8rR21e7Xd4MfaA28NeFmBPkTkc5WnL7iiK3Le54W9ayQWrm5mn3PQyLMR3i3jostHAaq1qdWyw",
  "key7": "AKRszxvYwsvv2V4Tjh2jA7zuCAuJ4d1oGmGTDwTiihApSJDXhGPYhiPPA64qxwhvAUbiPrwgmonG7a8HBmTnR5k",
  "key8": "5ShaZZSg2JB91AL24CNMociUbkMJxSewWF1tm4zhzemrqdZgAHAMdca5DbTv1E78jcWr3qvPEuPBzknrVH5epubg",
  "key9": "3ijGwFGvd1Hzh86ZGVYEpPtFBhNBN3RwvMt3p6pJtnn71REh8fAwYXWq8o8XK6Aq4tMr1uqQhLeMN8xqmF2F3R2L",
  "key10": "u2x83GWkFvpFgTq6RRjzhSaGw7MQ9fZNuYvq6nrjNtyGsZnRuA5QW8mViLxFSDbRpe8azq8EVQBqXDen31LEkif",
  "key11": "sMmad3428HA7s9wvxX13bgReB9xe8JnyT3cGWxNwuAupXT5UX9VaAaQh5QwRHzAFVHnypWYsGg1skAbxyWmgq66",
  "key12": "4GxNSDazj1gMU83vGKi3J7a6eKpyZ7ViPbuPAPZqosLG2LxEix4ydBCUdfzaUFLaocoqW32B5YShBsp2NsBm3dwT",
  "key13": "5TGhdbZumLJFcoNV1aU4Kk3pLFSJH8bquNPNXrmyJZzqGBSQRDYATG7hXFSYPyPW1SqpqWzuVXE6XK83jWVhL6VR",
  "key14": "26ivWS1VFmZyVt8LPu2xCAKdNefYh8pvRdZRM9oWECZUL8x2w3LFGzrqMFrJMRfEnGTZ4KaYgUGYRSxLAbiAiEV3",
  "key15": "2gWH9T68bJjBpC2Vzn6scRLxwNmozAPLWourWrFu1rXPsTYdbSHK8SVt61Tmmeco3NF13BXv6gtfdWTsSJYom8Fb",
  "key16": "3GeSbLBey27mdJ6qQdjLbTnBZmRAkZHppfB9airR1ahbZSYCsWMeUQw2gi3X1EWRSeCSoYVAdGwzbVvAxSgSyNHp",
  "key17": "44DTVDTHcfEjdDrVte932mYXHqqjFX9ZzFMsEJNn4A5Trn1UjiiYATvtFVyiaRPccP5dPUfBxKW813kdk3UHdo8k",
  "key18": "2xweURaKA7gGsUiEe2xdT2rtTWQkozpzqeFqS8HvofT5F9Hi79X1CkYYQQ8egDQeR74Q4kfdfPnTRKLvp42EijG5",
  "key19": "2qK9aSnJEpkkvsv4DDm8duB4q8oM3yAn29TbvqTS9LcrpA6724jyQ6He16Rp5SW59abnExxmyQBjuvoJFH1kQNPi",
  "key20": "2EDgnxWGssuSvg1dYQb3crjqAjL9CAn5MuULQ5JQAJptxEZtq8yBRmwUSaYgvf18dWgxroq9qmrwAJMs83XJBheA",
  "key21": "481rCmCJAyaXqAXna5GeV7sWU2rSne5RNuD7tL4by2jw6CVru2UqSkFmcPcq8NAPsKGBxTMR4scZAx1suPqderQG",
  "key22": "23R4qiTFxJNQHgSCpzF5dhocN66VS6ghsgnFSa1VEJe9eVpgkzXiqcSkCpg5MC3pidHVjJjxigmPB851RnF9irko",
  "key23": "416KYZFeUjCMUBich1g1Tnh6dmN86vprbVSrp1NVLUhUNxWB7DfRXua1GrPxcRErukmDbhYAkGfV3j8JwbjYjQ2C",
  "key24": "3EaayR9TUvbCTqCezKp4YtJKfG7GoAF4fV6r81rmX4sk9G4PFiAdBMCJqzsFYyi5LKVHADxibd2qjBPNFH2WgeKJ",
  "key25": "65LwDeW588YjyuuQm3X9n6BUs7XHfeZqMJtVrV7PRUYhUqvpvuY1aSM6khCeFeabLqqoUFngJ7Y85WNUWEcq1gGz",
  "key26": "2tyEjS3KSYwiVkn5XNFTrSvBnTjGjNY3doGFMR2BVW91SvDPk7cRpJeGo5Qab23We27NpsEbpt9iDsy35ThXZffW",
  "key27": "4h45GjCWMsBnyrGM2KVSRNidb1hNUs5SkJr6K275Wnn6cqxKwHMFdt6c3uXSg3ah2DnUu2p2wTGfQnRuf6BM7WZr",
  "key28": "4EHvrP8KQsyFoqB1BiSbptGM38Uao8E4ZLhxkPJ8se7xPWZxr2ZBCetsM9g6LPThj1DeCQ1anRopPQKFQLUTLxq7",
  "key29": "4pBzxpgU9WzFgKGVUneYJftxdHqUya7tE2erVjtEMwPVGeUHgckZHTWdjZeAy2cn8n345KYyBXaVzZd8HBPnFsQw",
  "key30": "Ss7Xsf1QcAd2HxYNMB2EKAkkPMLxNmDMjS59PZXk51DbLdpTfUaLrQfyiRefTjCX8SreTbHpypDeyQZsmKF88jE",
  "key31": "3GpDfJdr2g95U7BtvBPxuACTZunDeenciHGTVfgm9uoJujeZwGKLeY9mz2qJUUJjiBhk7HC5zZ3hqV6gr21VTWvW",
  "key32": "2vY7tpi81tweksz5dHf8iiinMA3wuMDhrY8sX2RmwULafRFNz7Ji2MfqaHTidrmmCVnrJmpr32SFzVDR2RQWVK6M",
  "key33": "4TPptHBpmh2dwmQ7iT26QmEjsndQSkMQW6iquAQoFj3J7Ab9hZdeq2iU7rvT9FQmYSme9KMgT2DWqP7eGZYdoBag",
  "key34": "3j4XpLdeyXrWNdAGvvpwa5qpYq7uybpWCBWWnetJdgUm4BWz2Xj6ALYkMcpAMFAQC5Jf47BKksxDmA6SzB5idWVo",
  "key35": "BEjSjViyAeie2TarEGqq9CQkz7j86T6sMBxduMtD18s1RgQZ2X1iGwgxWR34YgDkkLAC7eecyiHjK2Hk4C6if63",
  "key36": "4PBkYeTLEAp95WkMoopyB7me146Uh7MekPssrpaudtyk9nGaDJcE8zw9XxeGymc9jk3Rs7WSVct6AdbaPosb2cZE",
  "key37": "5KYFGRJYrjfgLk9M4HT7XaGpCxCg3ooK6UqxddBiNkPd5FY4qdhFH8CqJDZpWwdfY5mVeWCzb7THCtaQS76MU8th"
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
