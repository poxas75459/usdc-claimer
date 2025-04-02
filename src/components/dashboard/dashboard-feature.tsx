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
    "5wqeuU4Ams8GT3pZqfnzp7ukfQpfSVdrbRaststkRAS3BnugVo6ej4hHv61h38H1fWy5cchViGarNncmFzmF1GWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FftApvD2gBVtocBDeqXWHxXULACMYYZrfkn4xooc3BSgFTWeGLmx5HDAytHJXPxdKwkXhgN6yVKWGbEuXsV7qMi",
  "key1": "4vZDZc9CDzPCJAPVHN4y1TG8AfCYnNWd2SQREccWFBikmHdPHJDDhjdNioo5ijsRdPDHhC1fkFQtjtqxfXxw6SkD",
  "key2": "3NMyEQHshhqSSoeNxUaAUFM4iii6fSeWJ8EKN1hAdvJp7zK9wCvYZzvEaqCz3qNTBKr3n4YqWkTApRcXPgkxrfz9",
  "key3": "4ybGUoJvAwLvVY49Hce7MV8N45JzMYzCXLi829u8cs6UCfN53QLEiSD75kzPoMeJtL9oP2QChUsWFgQaeHg4rBpV",
  "key4": "5K2kg1Nc8Za3R6FFVq39J6V4EvvSFc2bZbEHHz9pwVe3UnmbBgzAwRNVxtSKGeS8s27Uev4pTq5xSu1kPqMz7yJ9",
  "key5": "jfVG4joykznwyPJSddi2ZdmvuWXtCVYdUWi7t6uv6eB4Y9TD4SQiqDgPi713f4CPRWrfHAxU5HoVuvioERRpzbx",
  "key6": "4xdvj9K2P4Ephvs5kesebjnqqVMfTGCkiwENxtXtHERd653qPdWTJLrD451UhQpeFDrBy23c9siT9LYEUCD59doU",
  "key7": "NYrpYNXAXfnbYfBwVSLnXPM921QddAt85s4KiFPDAoTf1Sm15akeusUfKnjrEquDCrTVvNb849nhJ2BkSveFZzq",
  "key8": "61jse4qmhJxaLf5gmyAJMj8r9gL1j7j2Ea4CNuCeR8B2Frmkw1cpC5qJLUewLMKoe8aihgNeFMvCpSEVcTubnAQF",
  "key9": "3m3MtrBGQfAfRHFbgg8ZJxpAT2eW2C4MQh2RBugEKPtdwCNnQvEGuUqJwR6waYVJ1JNQX5kRRyZpVobQuwRi3paY",
  "key10": "5sb5zBMLLtMmYX7k713L1NFeQPYHmuQnVRKanYqLP8YNiAz4MCeU8kqGjbGEc2PJNBqxQmVsfhVtBJRxhRmYfHAV",
  "key11": "5UJVW4JXrioQt89WeDCjXyLoGhBe9YcxyoKy3L2DP94JSnJmA5weZijqCyqeaTNGCQTTVongBm3WK412Je1vgmBw",
  "key12": "iZpHQEZzcFpHw49ngfmbkBfs21AGgYjdFqKWZMwfBf8JtB8B63XMoL4HpUcV38m3FMSsJk9WtHMSHWiotiBi2xH",
  "key13": "3m7v9zoNumDY2LYGqiPmUz9ij6gqkW1QV2bEe3PRbwAZbmRKuT1sjiZ1nejNdAnTZwYUWpsDgQNC1FPN8fbcVxzb",
  "key14": "4GfvMJZva2Lw6Z9hXgsZ1WMTgy3EqK1NmbcnJUbjwn4gLypqhGjbsyhGowXTKBF1TYahFowxCYRR8fLQhnvLu3Qy",
  "key15": "3bNBijxqt8MgeXC49z2Zet1jsyS5Xr8nNkog798tRAtfSy3CjDAFY4CaDqkBWLJj2LouFTJc4hmntM314BeHi97u",
  "key16": "35AHY7zEKvahzHLnqGN45ovTXVnA6fHhXpAi7Pddi9KDm2fFfntfvSDkyYJMUVFMFT6eJcAgmng2QxMoanfvDEgk",
  "key17": "MWVfkfengqN7dxh3PFD8RnYBRC9hLSxs39pCz7GbAwyBF43UbNQjiuMCRD3j4ejzEFUsFQDFWQwY8mFcRSmvZpV",
  "key18": "5wMWzwRXEP573tGX8Bb4ChTvwyQ5KDxCUgHNCWRS2U7832NWibqvA5hKn3shGB2mKdc2ThJCsX5Dg1qtfgQoYArJ",
  "key19": "2p88sSovhzNycoZE2mxawmAtJQdV43ypNrcGcxdAj7eBTRKRJJA98HgChbx6aJcbaoy276YvM4HwtMXv9EeZxBCG",
  "key20": "3N9A6aD4DTCWStoj8qGFCarZitJmADnkSWHrUfxvVgupayQZSxzGupxWYwS6vrdCyVt68fQvHMUYkQpsQgd1EVoi",
  "key21": "3LgG4S9Nt4nZ1vDPzgVzzbDZgF9W9T6zVx4QPaqmcw1K1ptcKukFovYyVTq4R6Vg9tG7zkJzwyjx8x7WfcXRHRtZ",
  "key22": "2V2VpqLRmSNzdo57v27GBJmijKXvqwf74joXQrbEZtPxySA4i5Mba4V9UzKhybf981dyoXejdWgtUwfr4yEx2ugG",
  "key23": "5x4cmuc8xHrQcC3rtXoXvy95qmN42qDL8dQrrU5VwXMGHqcrx2GV26LGiiKZPdHzhfJfDCtCPjofzndnLpoZtR1w",
  "key24": "4vufBYotcRgLubfuXakneEUdJEKCjUY7u22jY87JmcStd8fACPUVeo5UraC2CwFJEwfqWMrr2Xu65zHQtVPBv2Pt",
  "key25": "r3561LgHwQEfkkhheZgdwitWKeDKmRqWTPoBFsjEqzknWedT2rWE33CN25UqwCUu5a5WWarZMhRRJZHKi8t8wFa",
  "key26": "4u84ppPGmk6qZ91Kuy4MSSpqvw4PeMfxaidcjv9u1uWZNKKeTTye77MS3cgkoJCKfwQqA4SBEha6z49ukRkis3E1",
  "key27": "TrvgG6UFqtdByDtjVrwgcYn7T5YxHxZsKirCXjWnh2bZSBxKjjxbMACiP1FJ4LHzRgFnXSA8yTxmrKA69R87hjM",
  "key28": "5KWz3gMMcL2f9hgioqevAhckaF8WmcZs2DMTCTe2Ac547Q7FAq6XJ9Rsib6kViQmiCgHBxtw2mxB7viETZog1qVy",
  "key29": "5UaLdEHDp5VGTtTHnAR9VaJRGe8xkEtwdF3QkRU4WzS5Xb81dSFDi1tEfFu1VdZSW63wm4UnGf9WmiNDhmNHRaBR",
  "key30": "zYkg3mEMMsEc9JCULq9Q2cdH3AT5oAKWdj5kzQiFG2KGAdd1SEbvzYNZ3EbN8sMU5sMYfxc11YvGgjVXvhhNvas",
  "key31": "3n91EiyvX9VzMVEkpg7rWEAynGma5UC7t9Xkd1Lrg5MVgCssuA4vd9nAay55KEtExMiCDq8u2pE8g5K4fYKwQCR9",
  "key32": "2Le6ULTUQfr9XVmu33tczeX7JrFHXwri4pXjU71vai8shyzkoFjYiHEY6XXJ62gRyCkjKdRJ8rxK3RR7pRaUqz7r",
  "key33": "29DQCk9RLStXqM99e76o3Vq4QtrAbgfzMoebkLLdsik2H7Zvfagr6G73kFhFBmaAFG3wy4CkpLGS31uY3egpJj4w",
  "key34": "34tVgn1JAFc5QnKpf2mxUYm3PJxNW5G3ZWuTZg9Yi5K87GLsayutGC4pwzGsT41Kc1qqwKFbB7tNfQ4iXMYQhyC3",
  "key35": "3D1rRe9X3qEkKfZzjbu6Zh94N16MSF3phLHpegTUmZJMCKbMdkx2xhXYsphBPfm6JCLucN7EkRTyysvRXQY3LhtU",
  "key36": "5UYPG4KhbsCDG6hhG2RF1hmpBru8GArJpbgVYtPDgGULpgcqBwehFUWG29cwJEfgeFTVfphdm9BXzaFXk5oGBRS8",
  "key37": "4Qrgp32Qea9r7HsC4Z1FKLhmWsnxGNNgGTWvH2gHqf2xEcneBkUL6NywijkYz2LzdJJWxUiDMHgLuHdQfoveZAZQ",
  "key38": "3o5EFtButcCuHbG8fL2BVGBT4FgE4b7TihBPVcLUgDcfBBSXmD5tBUWvTBXnC14GoqtqrTtgpyYTtggqxUM37dXC",
  "key39": "2aLqji594SQQf87dQfWVA4Ge3zsbXxsohtU2uqyXHe9WnpQkqCZxjYJLHUV3ZRz1cuoNL7pRHWb6qexV1ntCfxun",
  "key40": "34dEJu6isMHvGVaT9eHS989wuBbmaAUd3eDTM6RgYAvSHMYAVEV6zJs5wC7Qba77uqBU9FJMbpXsMkmDSuW6tqPd",
  "key41": "2gCfoTsFS1UuqaYrSiTrdy6twxw8zdQoUXdonYhQNvNwy2vhmkSzVTsj5aSSkMyFN82465KpiCMpEgsKjiNEoyJL",
  "key42": "5L48dzjJFuFHdVme4optPseQ4YTnJzhw9LpeTVGCALSDRYeoMPLQ7cxntdfn3J4Cu6bVvEDwJPsdsKFaihuMKhM7",
  "key43": "2PC45kMgUVA9bDDicZ52rYYqxE2TfSp4ej5xE38dTd2iXm3heyHNZuznocq14d1cmDREPut1uX8FWY1tYkQcSKvY",
  "key44": "3538VXQ6tidzHDUqszvARxXn9gZTKTaxs11Xc6gMwL4Q9VnMgqsFemZmEfWiqWHYag4c63mY3FsuwEzJjer9N2DT"
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
