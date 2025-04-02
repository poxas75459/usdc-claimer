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
    "2Y9JfQzv35ympyDAyq93hhUXjUQdP5NaS6VAWMdf6PUjh96ttUQQtdHDLNmcrQBHzGJHSAo9h3S3XZmZCNUoqyn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aRt2SW8E8BhPAVzQhGfiiiptKBBVD2XANMarczZXaB28PRP9M26zu13fFr6NPc7daT9zArNHeEJHgMvgTXG87eh",
  "key1": "31viyEDAMMYDn1nxbCehHuqAPaMXaQBTPfRGUe2qt9irymbWsAPdrRc1LT8KqwT8HA1ntjQdvD6RBNW1ewhW7xoQ",
  "key2": "4ymPApzoyLVrwPCQLuWUSj3oPVxjYJBGV9oZdn55vfboA6hgH2d65rksGjuvKxcD7iqMFsekkgPQR4wrioSxFfbK",
  "key3": "422Bv15yfbgiKoN38D2aSvCtSJMgvDFGmX4EfetRh1B28fovj6jQQHYvVcwx3WuW1k4ECd6KE4MwqMztSRXJ8GVm",
  "key4": "3ZnzKtBZCVAhQ3pVDhuPHeg4idEUqDtmRpQ2gGGp493ptTSnWWEHLPs2oFhXBvY1bNoLcZSPE5jdXYhQEqoTUNKJ",
  "key5": "5NqnReEsiB7149npco8ANVT2xsFJXHmfvpf5hQPovLSscsvRVCaDSynmXSsujXhMxDaubWJ5NUHspoFvwM4L3wHy",
  "key6": "2vnJmgPCAzKtfvvjsQfDUfekDFt4H8W85YseVDXzFf67up9NqHLeUChsLNuD5KPqQ5C39i5mf2pt49pkVoqxwGHA",
  "key7": "5TZmiTxPRfXExsTqaxh55zwYMVMoibfasQB1G8QNVDgBZqBCrnHxEcdpzYXmYJ5emxeRtuzc2JmSwPiG3qFAkeZe",
  "key8": "5LYiJpZYB4uMu2ovJmdSMGtbcJv1WLsFwYhtMbCGYQPPJrmGKixg9PSAzeKM6WZynUXWZ34pkcdw6hNUsA4nNTAi",
  "key9": "62HVZf74DkTqXP79icVrx9GFsYvbfnptHkpew9E6G4UgJSHL9WmexFhYch3zf25foi7sRYXeTtM3xxmDk71cmAaj",
  "key10": "Gb4mTk5PrBpsdM7HhRTHFvJrML8bn29cU81ZWx4gPFNSeMa1BTYVtPgNH5WUassnAm6cuWVMEhc5Dsser6aD14F",
  "key11": "4vknNebuz9w7puZSTEhe4q2m5BzSgcgbteNVLiThPu1aV62Smft74JQwEYoPkJR3DqrowG6wrDdqhejAzv2mSBMB",
  "key12": "vEZaxV75vk9GJHBpX8WHn5bL2PgMDDXdiTDHTCM68U3v22H5gcUC8Fh9g8628shmTtbj6hNSP5HwpdEuUXKWj8D",
  "key13": "4f33GPCBHKn9STKuozKWVEteAHEAYCSDtFwinYbUEb6baGQJfHvX39WHNR5anygHNVV4cQu5zNG7qVEf1ByWbmvh",
  "key14": "5pnMhk1vSzjc3HMojefAwN9EiK4huYHZwbnMKEx89Xv3UFFPBrhCe3hsk2PQDuguxdGsHqrRjRbkAhMwjDkLwX6K",
  "key15": "3kv9feC4hkmvjDGSdkXGNUhDzEknXnqp5it9AK4kZF9b2Vf7XpZuw32MjDtyWkKWq19WWvwftnYYxPLsPLPcYsk",
  "key16": "VpjWYmRtDCx9mGNsVQzJ4fvMUELcTQW4xuz2gPFmnceYNzZJZqx11A4zvHzrF9WWdwxs2KZteiHsr4AD8bNAFAw",
  "key17": "3cymxQ3cwAcNCtbQDazBCC8fLoeGnRE5KCKQ6vtHenicUxFoM3qcQJJpYoCASZ5ubFHMempMSYW5mTB6cW6Y8Dha",
  "key18": "2V2EgGUoiG4hZqR1UWefcTmyyqkZrvVbFfsecJ2GeRckA222togqK9EJX2okBWuHejVhY3fnDoaADfAmzJX1Fj9A",
  "key19": "4hRtSbZJrRHTfjktBejjGeFfi9irXLMEbB59F58qx1YPv2JyMXxmzeR8wuJEpFgXi2kga6DSez2tVt9bEvGy2foX",
  "key20": "4Y7A3XziNsRxgzxL34AresZFyG2wtDf9wj5Ux2RgCrALxyHJABmMygGPpwtPkCbFstNn78uApGJNso4tcAa3qXEo",
  "key21": "5n3Zytq62FRjFirAA93zhZiZQv5aGN4D6NA4Zpy9WMyUaxdVVpHQs6XECSrwgc8aWNBmLiRgXjuGo7ktVx9T9sZr",
  "key22": "4sLFUiXCDAknNX9iXnHx9HaB47LpHJ9pAxFLuT6ydbZSfumuPGsrEnydRZFkHe5jd1w7ZQfKTsqQK4Ewh6ZawNQT",
  "key23": "2KU8yLrRVz81aKN5YojzC95dqPHCgcMFPww4zZcrGUnaroXGr7TEChuwYc87n7ZvgmjNDVwg4SWoWSnCrMmfns5r",
  "key24": "21X4jom3eaTnKbmBUMBDjNMKMLqYz8bg1xvNJuCBA955cxKEbDdGXshMquWgAtBy5simi41wKFXEXrvbefQJgHN1",
  "key25": "2AB9ELaKCNE1LfeGfz4kXdDiWLjGxQH1EB8x7pmMTyoQACZJjPEeFWK4SFYKBNk2EsnDtdL58MSxX6FcAQktq2q2",
  "key26": "58xRHpg3Q6qU8KKvFj5VKLch5i2BnKGTJpbec5MdUxNyhF4WWCDJvuVYLeS1QigBewXdgDJJVefDwcWEPYtr5bpE",
  "key27": "2rfXi9oEaFPqFW6XXJ7EXTBtdvkbBLAQjWue95dLH1XKabxyoRCDicEjRaKEvtPKQ26ie2nrW6ddFjinHTpQA8gh",
  "key28": "3rtwst5aThhzhT6QVGjjZ8NNbxR4RpY1w4DDGr7L19Je1KuHwRbQAzXLkNEzMDrb2SVX4K4xqgcixCEPtkkswhAw",
  "key29": "VAGpcR2xQwD7b6xdfLwJ8D9t8mxuQguvEiumamXZ9murFyFvpvTcHgz5DycPCW7bYYRCsHZZEEZigBc52hENtum",
  "key30": "k3zzo7rGd3K6e4SyYVNm8wDDieaSiiLkVBdXs52qQbPbNmm2Nmkc4K4iGaeoaNELtvPDEU5obKCov5hafUEjn3M",
  "key31": "51RVXkGaUhoqxcVwn66AevAFzuJXE1Pa8JFqWxQedsvMKM9sjqHLfUsAmgGRMuJkEgT6TYsVjpoq4ohuxuA32YFf",
  "key32": "3p9wc5TCQSyrb33zi7gZcQjeRQa7AkYM1ELBrz7VV1PogNRVXcP833fcfYPUBtNRqa9ZAychBChXjKUSF2axDAFM",
  "key33": "4woy3rtpTjEsRiJ5qc2t5qcrc1guc3Y6FjpSB14Cr3kHQ87E9SrnaV186U8hc4wZego3X9JqkVt7aBYsgiUfanrF",
  "key34": "3WzSrJ91t2ppaHrTEmnBbf22smrxbkiZWUYiN8AnV4hw3Qumr7TnuwYvVJiCPgG4XiiAHa55qDBhk3PETwASXsS2",
  "key35": "2KzKkVbFm5hwvSMKCuvKpsDRCYQ7ECLAJx2YyN93hXUXEvkaP33v5aDDiaX7HHjsiNen1iRzZrX1hdSCP3pN2Thc",
  "key36": "sYfgJrsd5i8rsgpuiR1LHBJG3foHm5s3tT1gUBzVMGivQ7VHGEQLyKGcDDLryYSnPkL1izzY3tvKv8vPL4attYi",
  "key37": "5vMkt78YSv3PtuUrBWJewifvUXj5DSecNe5uz2Xy5dmfaaVkAUnx6PrAydNfXyGLhiKm9234dsz73md1V35Ro6MA",
  "key38": "5uXXZ7iCuhccqAw9m3qQqEgPxzAEyqLZmqgcx3A3FTj2yxSJS9tYxVboZBbsaacZJr4oQ2aNKvKe9JSQhZ3iKN1w",
  "key39": "3Hpu5PbbNeRYLJKGP9n39gptWNmzw3wM63a1JtcxUJWhT9CbSabpFXiTUPPXqDfDdJ3CciWVhcpjZKFSL8SqBVuc",
  "key40": "2d91SFFsqqtMjYft8GrRMWxnM1T81Wmry7QzNWQqirAQimNMBgFhGARpVjBNNSkg2H3Ym8x84JRFJRGkfhawKk4h"
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
