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
    "4xcifwjdeV383KtNoZtRME1cXCs871RkHz54cguD8Q1aV5BhEXFrR17HTvcNS8UKejyg7nzJcS6z1evoQTdVRdhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SzWdPhkM1eBb38HT17sWzVoCrzM1A4LpWUtQLGxUc6G3UGKyE9busDSbLyHF79TtEtWuLDBYxkwcLLPMBvyYu2",
  "key1": "5pCFkm5go2WAPjUiKBNsmszvxW2hw9EVcWcFN9UtAnNAkmynrfbhceCo8PTDMFBsKRHQjF3yGpXPP8qCoqptWFeL",
  "key2": "5DuoJjpkvwuEAmkChe2zGAGBHRAV6k4GoBeDh3qunEAt5J7kGoEg1MjQZyseWdsJrWhY5MrvxKsFCCWeeDF34cEW",
  "key3": "4tz8vZSkkmvF3ku1JKQpX7cZC2HhNSthXXhn681cLABGD71LERQjJNs7u1EyaorPUtJAmgobCEb4RiBKg3AEtL41",
  "key4": "2FrA9rDSFSiUxXFAtBrhV3Z2uum3wgdiFjTPN9wyCGZGFsRXzSgGmUAeV7k7ZPQ5UxpYKMkCnYcLLN6HqCFezxsv",
  "key5": "618M5eXVGCPoLQL35JpHgooTKv1QwFCN1nGii3w4ULBCkWVHPESmzKNUzkddCHYcZfC31Pd1T63zepAQzNBC272m",
  "key6": "3g6s9wRr8jmriVbEFGkWGRgRcaiQwK6rR8kygBmgFmaQ5ATTcg4Bc4NonRuK7iitV6CQjg32dkEtCNGMePVENhLP",
  "key7": "5WiKSRP8u7RAYUDdUPLyVhaXQYWtWLxp5QVaDqSTmxuei8KySAneWHte7JR7HDJ9yeSyf2fSpGJZ6GtxUddywZQq",
  "key8": "X76GK3e74Dx9jBt1YcofgjdcKDh9eFQayBqEh5zRNX3VFV5AbbwpDyfhWo6ZHvU1NGyMsx4dWBbj6XR3cxf9v1h",
  "key9": "3n1Xx4YFJitv144s96pGXKSHbPbtzFNANEKR7a1jogbCUx1Vn265qAqYDYzM5wnFA2MWXTUGqSMeeypudb268fCM",
  "key10": "3Kj6Hu1X293J9z3JQbVzVdWnJgVCp2iQtcRtnoDmGNSwV9wypyCy6cawWDR9m3E6MaM9eTpxke1ziTCSRKSU1BRW",
  "key11": "5y425Dh86xaUKySsnxJEUSWDKKKDWAJZvTDeLLq26QEJTeN9aATGKhrrThHYsdnzDJvsv4K1tt6HQ4raD5G7Bp3Y",
  "key12": "4ierxA3AEfstFKJscpbNZ77KnKTkYt1HxrM5bTRnJj6k9rg1K9iajSg6ronunFAfMERYUAmsneQKCZ8sQvGMyhtB",
  "key13": "2WqvczjzJyELbYHExfxsF8njgmfmnm1SFGpCyJuFgEjTvKfqvkrns5JfMHCp6jggBKTvrp643DqmXxB88gA4MLWt",
  "key14": "4zF7UXBY81vu9yHamBVLxUpY6rAVu58nu3bDSPjtNM6B5hWGBVYU7RHumYFjB5mL4KRJkoPdGGz3A2VbYN24KwGs",
  "key15": "4ftMosB4RfcD3GTAM9BCsAG7EUqjAgxXgaJ5KSBGbVrBN9ZRMNfWVtVQhkDUMHj6RpyPudZkFz2RUeEWxkN6vTV2",
  "key16": "2uipHVm1uh8g2De5sUVwsPxTRywSvAimjDnXqvt2iP5NdEompRAXE89B1DWEtANWZvofDmewHeBAhYEhijDHYB8Z",
  "key17": "FThYMNLtNNM4B3r9G4MNAEcg5z1o9QFpKySZidq78hjniuGRJrK5YttwcDkLMJ2J2zYjvU9s3CtfLgZWjTzPiAW",
  "key18": "NVHTX21Jx8i3586oEbS9S5WDugA2K2sfefzD1eMaFx4DLWAYhR6CV7PdkuZ1AWrUmDeM7QFfYMRozTuQTxJhM6Z",
  "key19": "4TMgafumaYjPmQUZoDN8ExLst25eRWf7akZcvFJNf2MFMoSDcoY8JPB7FXrGwz2LvTawC27Jsc5AbMPxfpunFHhV",
  "key20": "rFYGU1NWY4DvFbGtN9tNHU9L4euKDY5CVH6WsvcqTfHc2Dg2ijkdptLymQVo3cM8qaX2Q25NJLAXY6dRmqWdQuW",
  "key21": "gnJKBizPRkKXQpMXfrcB3gpngAdc77FcamcSoMAQaNbhYtgydhcEFZcaHSY69p9RwTSGELfpCjgnNhPxpTh2cWt",
  "key22": "29KnBzARniSeD1VauzU69Xiu5hHFE4uiJYUd2YF2vmp9JY4FyW3QmVcBrJ4mUK1KX1UWi9PJsgqMebLJqLda2Ug6",
  "key23": "Fcjh7W892GF8HEh77LwdpQSqaeop1TZvYs6LJ55UxbUjq5aM9YRBF6WKN39S7GsfmssPcefKbL8cnayXBNL2ytr",
  "key24": "2EQrDFifE7jyShcFWy2D9uea3Q9KcN6JpT1y4amgKUTtTu7tu443SkigmQupRBfVRfBTQ6Mx4oG2syVHJJuHvYfM",
  "key25": "3JiqFhxu8Pbg6DA9qg4bEGGULPi4dQY9GVcjEVYGS83cCFaueWEC9TXRadMbbdq3xLxnYRyhdpibdwHudGMQLYTx",
  "key26": "33W8siXX1pY5zgcwaaw6ttMEPcPziRme1sHRxfe5uDxvCQUPPRBuJwnuS2J1gSsk85dfyb1uL6YV99xRRhPFm6kQ",
  "key27": "zSWTfYP8mzdhmyUj9K8HyVAhpcE9y2Cxk3hPYXue4F2Kobo2UTUZzbwFeoHaZ5pb6KKLJm5moqefzv9tzJKZtr7",
  "key28": "TGLs8uxcR9CF61mWFipAUAKeWS1PrPi1dPBQwe3sQdX28dEYvMem45W6jZbCgwZEH61jLEsbTSkCzbsozd2rtLk",
  "key29": "5nvrF9PxQuwk9dKreXj66YfWLYfVegnJ5pQn9i7kmsyEQDTaxJFygv2bT94VBCxHupTuEpQD6wZovPgSy8K86dvo",
  "key30": "5cg2DFZCmj6SMZPnsxgmEnMX2h4q8LYajd1GWpeAjVvWTVU3GfsVCD8VXse4HfUSYKPSGeN2CovyHBKwcNzxtsJt",
  "key31": "5zzD2N69UZdn1VfNYLztGjAsT2NszQ2xXoNeaJdyZEdRqymiefadto1FUpZsTPeJsFzQBqmgjxFT1sMpbzuKbmSx",
  "key32": "29tVPXhmZ85DaQuRsSqyWbJ4sxgUzjXjorEwPHDRoxQrxNBtczRUFf8EFnjddy9pQ9tfDAHPyLyE3iSoruDETinx",
  "key33": "bLiXetmNo7K2Bc3jwAtGTJz745itV59kktYv8gDivXg5HHwr5atcwA1ajUyLfxQG9GCZpGcAJH71qiZWmR5Racj",
  "key34": "4jJdYrECdpYpPEaje2PbUC3FHBZpVJcefUthwHNopLtvdJe2HjMBZgNStdnahD8mQFe4aPE9AeMJtvdsJvPMneAf",
  "key35": "5gNyNKP2zppWzDd8PnywR9KBQ2w9KdBFTByBNAiRwKTdUXEtG11pqefKpEiYJL4ijjNf9FFFCEoZ6Q1LgrmFW4v5",
  "key36": "98LGrfCAAvL7oyNyzutsrCZFmHT9GrhnaQyXieD4vxgkswVSAndmm6FUPEDqwBXuc62MGJQtmCVJy75TTwR2jLZ",
  "key37": "3DoGv7A5tZrpnnuazNuTBVv5JDcWhxBuQi2YecbwhFwPenpHEBQwJY5Tfb9ikFaJcQAqrAE1wQrbPMrPbCRcdbeC"
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
