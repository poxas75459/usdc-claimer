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
    "5JLHx8R5as3it7eMHTwkEiTYQ8sAg9y1uNHZAagAaouVFomhNszDDfF1sgfxdDgorhTTYR3fTPWpv9mjE1t75k8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1EbTecTDwjafXF4RboQsaiDkFyKE4HbDdXe32EHoj74QYgfGr5HgCSJtHpUD5TnD8KFLLaV4GVcJ1EHf8myJR1",
  "key1": "3bFHzQeKmXJnKTLGjcC1fx5Gm3b1gsYHN8WFA9dttXMeJrwAAiryq9Xx7vhc53957bc7jEB1cVj8vxQXf1nR1fj1",
  "key2": "8kZFkWHLiUkjwAjQYwYKAWVPCirAzAnUPox1w7RPjMwozFPPzfk563xhHunofqdpENeogisTa3YgY8f84qhxTYL",
  "key3": "2UnMAd67TJ8gSxJc9x9yYTKhgkMCx19ivxa6SDfhXyDstAsrtPCcLLzCpiXuwwP8mCYLp1keVREwFmY4nWN7hUxu",
  "key4": "5LjyGhHd55B7Swh99ADvobs7X5skkQbg88WFDKpptQvfBobfLnoLMqCsJXLE6NtDDoaVEi33XiYRLNiNZiDDXH6r",
  "key5": "65fso2CwaN7ye6NPryermUt88p1vcDVnBXmjD7kMwpPEUH2RZ5vLT6ctSHaBpkLce6utMfsdWPMbMb5cVicum3nN",
  "key6": "5XDEybxKzcNbsBiiuwARaxrrnE7D5dkyiUpkgsCr5fNxhUK8jFzfuSFVd3hm8zm2kDxiegeyNLyU4QvET2sBy9gr",
  "key7": "5ZCW8rxMwBkUtQCumqeuZV1tF5EgdvYuPoDsX9AjnxCDwRdEq6UPC1mMPpFapBZnbGNVMa2M8CzECU5fGeJe2eg6",
  "key8": "4GBW1b3uDb1rVtqJW7kgMeB9yQw2GHVxQdkJRPbFZEQNMMbMtLuV1whFCMcAu14QSVeSTgmcNEArVPdrXE3dT4ac",
  "key9": "21fCJo6eFZEmqrvnsfjEMTUbnxgt2NtBD2B9HtdkGCEpWw3HjnzH5uPCgwZDZrorAasA82FB2GoeP9V9KopfL8eN",
  "key10": "5X3aznMGBgJ8Uvob3nEX57sF1VgCkw7BWQ5tZMignsreheDjrM4RiPoVUdrd5ZPRsa1pQ3KzDxNgVsbYfZBkqZaA",
  "key11": "4XAbGrBfFQoKcpmPZTUo4MQ7zJnFQMUKmEtkFbWkhrpViT2Kc4NJBa6G2QUJ7rTzD84rLZpYwEr2Kg8MWLpiXUy3",
  "key12": "71cruPEaatbCDKF2JKhP9ZhRMWCEAPJK66gdcFqm9DmK7fPWLHnZGxVztKrEKqgEcHw2NKm7tLocRRqKhTMFJE4",
  "key13": "2XgebzuPM5J53xPzVkvGHcbP1XTsYUYe6Z324YdZLeyA3hWeY8ZMBeSLX3VGo2HVLz2wamquxA4YDUvmuu2BNApg",
  "key14": "BP6myQ2iQU24HX4DL6QbgSLdSjvMWjTmg3iVpiR9SchmstgPepDbiNR38VqdYNeJoSVLqn2feCRoscD1n25eTe2",
  "key15": "34fymfa9rTS8C7jidrTwp58WeLamU9wG4TeZj9SQXZaMA5TdnKBAFJh7jhn1CQbVgCb1e1JFWG2KGv4chvy2JcF7",
  "key16": "4GSR9HdXtZLzz9DqTTHPQQTH6AFCp7a1Auc1kZZGCt4r3JwUgViHvP1Zkb69m4YrAnvYsooEQtGbDHUszHmZFt5M",
  "key17": "4EPWp2ZQQUmAqwm8mJZcAFYH11ZwiQMqjZbVEWka2zJx9qHLc4VGKVkWC3yWoVABg7KxxCWAPfoHq4qL9taumPVA",
  "key18": "5T1GQHcqtqbEYU8qtctD4QH2tGC6VPTpyJgsTcDnFXbb7vo5afEjmm3BN82XBz8TsQqqvzJWzVNFCAHJEVtBTH8R",
  "key19": "2QjbcSwGG21YsPg6wPBvT98eosV5HcQZ9YgbN95bVawEbkYcmjoaG4KvThNtdvjtWETxEafzs6SCPKir928QBQPR",
  "key20": "onazDTc5codH7Jt25UGmJYfdifwyJp2G3X2bfbfkCAeehgfqZfgpETbSWJndF8TCfv6PhcT6v8yL3oig26nvSe6",
  "key21": "5WQbBC2B7z4gGXqd6tSKYxoVrt8exs4iHd2CpDhfLbSJhqyW7SBzAh8xeGnXexhfUiATfeFNC5U2Uo3NUTZD9K8R",
  "key22": "2hhLnX9pPaG3P539Et7u3a7BcAUWvQKRQuG1KqPSb5tYWj4rzZrPQapKKYhrDGBsL7DmkTNrJPabeaYj6utqXcPX",
  "key23": "2mXAc48fGjYzDx3UJeCta5M2qFQinqWmKKesT9gHmEdPQckCWFzo5PDrs1NidzNgcuFKgPzMtMzSegZzv6QUC7A1",
  "key24": "2Mjucbr4TGDzKrsCTVQ9trzJDCjnWbbyEXrpynL3rc7USnXo4KjBKpZbrj8pJvz72CUe1ejyyVdv3B49NV5qHeLT",
  "key25": "5gp2nvEUukj6agwLrCdxf5o5xWc1hLimEUWwpnggJb9dZWfPk1NU61Dc5bX5JKbpHkBAE3qyDz4sHnqDiPRPz9nn",
  "key26": "4rue442Np51kgrpNUBfvMRLFcGZyn4as94u18pe8d2ik5RenGXXEeFhK32mYXgtuoZLyQYb13a59Yy1Txtkp1KWv",
  "key27": "2LZhpyJpvD44usBv79p4LGHsrhv9cF8qq4GsmoUAcMny2SJy2Ncnu9Sfa3gaAZHYTWmCh2dgu3p79TpJe6knkncr",
  "key28": "5dRALbGnQFicjYTNY3t6e5uy4Lq7H1txG1sGdKp2eB3qJRnZTYFDLQzvHRCeEyScGZAz1Pn8nLWR473dEu5opsTW",
  "key29": "5o2fQYbAsEWJ3V81aDPtfvbJm1eXrrkDLqkxUMm7McbGGiPQXH56KsrCVeRhQq6CLhJExYKmjkaixfY2DEs6UTge",
  "key30": "639RTDYR1KVoW9n87y6AmbSjmMWLq61WomWzjkPbMk2C8mdugWWssrCYmuWmjFRUKXfm4xN7qHKoxhx79Z17E1uF",
  "key31": "2HAtFe7jkHVKf9cqjw95n6g4SbfvFhT43Rysvcy4DLKDCWonGf9JfEHCNzG7GtgGuWNt4ELJDFhv7Ua5NrCNPD6P",
  "key32": "3rvtPisaBXtaBSuK7Qq82gCpRQAWFSzaYZoWkzGJWdawoheGqGZXGjPk5p6r7Yu9Nnk3Pxqx8Z72FjMotedRRGzu",
  "key33": "48EnNByrJR2n7REJHTZAVVL9hBxApP7Ph8CCsWuMkp6xY3Ct1NRWMDp9y8ijfKVJ9RUGjFjs44K9sLJfazTmLMb1",
  "key34": "FmKK35MpBSWuQXag2Kiu7GJPWQ4XkLnvxvLPHqK1kZXFfLMaDLhHdJs7giB7bS1kTZMoE8Xjq92dpkUezvDzNkR",
  "key35": "33zdn1j3QNWHDG8Fkvp4cqivAbLmGRbm33AxyAxQU23HfmDHYEuj4aNCTdFJpgFR7uUA8ayK4oqYhijTSzguQFhe",
  "key36": "4tdNjrUm5fSq3y7uRJn2djEDHpJoyaPqbX15XhepBpDNsABAnGjfJ9DS63M3tbSDi1q3RMDmsLYQsLEETYX617C",
  "key37": "34c8pAWmEnu76n698vziKozJPoexKYwnRY3f8nsCD6RTLGvTd6oiC95d9F1e1FP5RUCKTTEvw26QeTsngVt31JfH",
  "key38": "p9YJCt6Stnrwo5fWjDunrdz7dpn6A9WPsQMn9gdPXntF8698KXzRJoLFav5ZrijpmrEFHdcEV9UJ4UohhM3DB9h",
  "key39": "43DjU7HdsfA5rAeoeaZDDDB1Rb1442VeBZWRmKAdk1wMgmVGNCcW1YQzL977Nt8KoE5BtF86asSQeqnUSAXDDghF",
  "key40": "5Krmeexg6ucysRqQYymXVaVbED4qzACk34BPFV5h6x5CzExdnwjNkYwXHsHQAwUE7L3ZEiQvBmXi21x7ndfKFTod",
  "key41": "3VLqReCKP6FYDxY3iWCUh9g2QLxKi7eaHWqo5Y4w1zcwVmjFypx58WQ13yBKFa5bCboyEQq9M5ZdoaRkquSiB6AG",
  "key42": "3EekAM2i1wrphdPsSnUUcteaxi9ZThaC7mm8FN85jwR5gBn3ZVBZDn1PvfnwLRhanKLjWUUnknr1hmBkX1DAmaSF",
  "key43": "3NNkyC9YLT3f7L67GcyRdB54ERjjoHhoAyXfG6XqnF6NzYGwSEBLcP882ivu54sjYYpCSQEhoCuJgHr89uHHLVnN",
  "key44": "5fdDxjDqVdWn67qCSAUpsm4Lys91WurywAAFt1UKJC8a3nNikPyY6i85pa2CfScsMcGW8fpdETo2tasQEasNQVsF",
  "key45": "4ix8R4eZNt3ierF4cFvagRiHunYnApujnpP1ygSTMrRKVKUQb37JrFMpXagXb2zseCNvwH5mMxRdd7zt8Gqr8A8s",
  "key46": "3PKJpjQJCmiEBc924KU4D5KQ45jgTsSXERHg3RkeVhh4ufq8f9oX2kuztYdJM2GgoaACasTqTcDWVSJTBPGRajEX",
  "key47": "3T7cUqCaZzfx97MsVS4Z2mucaYKPPeKk67e91Vi1GgqyzFUyN4yHqiYTiPHdBuKPXVteHsUdg4KoEVdzVwtMAeEf"
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
