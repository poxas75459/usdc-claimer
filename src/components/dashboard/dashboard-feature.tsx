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
    "4jc46HekMPtD2LxxGLkQD5ZhB2dU61XoBN5ZrsmsyTWER2CWZPynHJ1cokUKZKsEwQFZQnWGfKQyTwpBVjhW7qhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53LAPe9pV49CxCAeEtpXMqzcv4CGqBuBC45eYDr5Uf42wb7BouAiNBGgSeCf3ZDMUiXBzRKU4q2GMjrAofwxg1f2",
  "key1": "2fiLrRecajqxERGYyQeWStvhdN2D9mcABWBX1feMzdtk5VuSvAqqJ7EMg6Zxsc991VGZg8w8cshhsp6wmVthCA92",
  "key2": "4NDuKEmh3b155j9rFPvjyAeoDRbeTQ2eqoXCAekAn1DJUFLpZ4TgVsVRCkafKDoAPv4waZAB5MVKqYwU23oNNiMn",
  "key3": "5roKbHKTyNVY4poU451Qhs6cEcKzPhSSvAvCFGcRL8qwsio5ZXbaM4TbuckfvQ7D1arwsNeh4fyzGV3JY77hG98R",
  "key4": "L9xvC1jWe75y89rVCyowQp2jpgsMKN9oPQbiQ8CS1TUbfcTFEqd7pngXSENPqgJQh3d5yb3LSJJXMX5dJ9NiXew",
  "key5": "4HMGk98Rfn6HzERuJ3qjxitQppCXrdoQU9sKNNtBKtmYeuPDHBS5G1tkG5VrjJzCdvdZzEVQ8PyQyMbQUTkzUqCL",
  "key6": "2MaBur3kyXsrE7dj6dUCXg4PV9ZDv8ZMmY2rTD8NFTJG7FerE7B17yEqqrCezfAexxFq2vKt5XxoDLU33QuqkinW",
  "key7": "2wruag4Q1PzknuK1QzFHRSCLwPXoBTxCGsRQP3eXE3enS6Uaux3UDMW8xzLA2yqzYxoC1azy4RHTwch8W7vCkGcL",
  "key8": "3crE2njcg3wjPMVEEUC3afCybjmNQah4vedD93B4Npuewkgr9s8riABzFL1T2eEFsjcUkRUcfGyTBZykS91SGeBV",
  "key9": "MZPnw9CPdvMfuXw6FL8g2S95Z6FxokwxmhjGKYmaJXtn2FZajXfxih5o96Lk8W9uTUoedpMvt1spsLZaWhtjzB9",
  "key10": "2PMrGVHW9EJ3TuTb6qudmoBZ1DHnt3eU28Kd5Mi8makF6JSQWfWRt3rDgWvEH6dwSTrXba1M5aN7VArjuUBiDceo",
  "key11": "aajbPbCFqg5ZwSK5h2hfRqXY865QPW7iX9CxSbgH6ZdgTStYYwJvzBw77bDCJdzfy31MxzEw9tbzb5EDkgHaZHc",
  "key12": "23fED5UUDnx5vFjQn97hG5Zonzd6fkUqa1cChP77e6U6fVC3agQHm8ogoGFMTdQMaL7CcyaZ9RFPhMpA6jrsc3TH",
  "key13": "2sbGEDPuoqTGBY3Ev8UqkWNKwSVSTxsRg7vHrq4Ydf5Z3pQDAtEnN3JboT5JxMHxTaCQWFWwmcNU98Ur2UvDPq4c",
  "key14": "32GQNZzAvMvedgup27PBDoAaXrX34TdDVvqz7KHRKAxLZcMsWkiDpWxWpN6wvq9Ksx4RwCBy7WjCRRGALWb2gamZ",
  "key15": "62H9QtcgrFa4i1UEnzF2xhaHKaKVBSoqD9LBFxyoU4JDLRT78Qk6FkQPgcTgMLo6mVLV83PQtuNE6X49wcoLbaw2",
  "key16": "NRULHRxktKpZgEMFiVdgwyUVbMNePG9j1tS5wZQ2t8YFqt42W9Bu8WbKyxTa8udHBr11twyG78WGDcvcgYNWzux",
  "key17": "3zmcN4XsbHUp7cdLdMSUGPfSiGZZiapEZFyfCS7A5Np1agSBsaSZ8VkePDryt7EyQDNA7KK3aNpGiPJxo3CEACSc",
  "key18": "4DUNJyFs5EdkV1rSDh8hHpBZEj2AqRMwYHMa8319xBUD2SBv7ZyuePX1XEUh36fSYShpKEePSWcDp6Cxk5wfiayC",
  "key19": "4K8LXzytwu5hmwUqwtyuG49SMSxtLQNq5QVYL5gLK5yKdJCJPxjVJ9VBUvqTZ9RaVofKufBFaEiJWvsRW3CasV2d",
  "key20": "5ptLcs2hEr5PMWikvChdJPgdVcFhRN2AiVTQbLQj11KQKuYj3erf9Vj8Jh46o6ZJwegt9fUEE7zpduWc467CK7B5",
  "key21": "65jGDfry69yK8aEc148mDz1w1tbyjvrav3LFyqTL7MdeYK8r4STKwSUNLAwmoRixiqqT6T4vvXPZuQ2rNLiBUtXw",
  "key22": "3ByfrsqwS25VTDoaL6DUJJ8xfRDK8QFPsrW8odARyvkYNFLpa6Bo5rJgfDZxK3AYTB4VpXJinuJ8Q5qoUsFpHki2",
  "key23": "5xnoe7zzTikatHu44dKGgKnADq2PJ9QK3Nj65xyypE8qgLuwRm3KUr6rHaPcjCMVPxvPTbQUrVTngqomdkvcZvFN",
  "key24": "5iHWdXs5XZ7778pvYLewGGgyq16u8tRUUCmd78smFaUriNAisRmu3i8fPUXstpK4g8WZeBp48KDXkf7Tf2gwrk8M",
  "key25": "5uccFkkHPtjjJvHw9svFrM7WLW4HvJC2NibHz2Euv9nXxs2ssCp2Scgmp6FhKZPuvaVSgityrhP3GJgQ8emxbvKJ",
  "key26": "2PSfEawW73x9mU5r86j9b4rzrb8mLonbWVthnowHLdLa84YS3gyquJ7jaE91QiRBVYuzw1X5KnvfYBXkLXHPiXh2",
  "key27": "3Vk6EpPWPeh83wEEjSziRzNSyAM2jM1PxFcTDFJmRMUkDEg4Pw17DY5BaCMs9LCr9iURDXef9wFJKKPqygivdsQq",
  "key28": "44S6ZvMWHq4Dt4W5JKLFZ3REwWMMNHdx68RdbVAqA4GAvruoXNrrYZg1EPqF7YJgcKknrXD4w1JXgx1t9ZYeAKuU",
  "key29": "2EBq4rhjr52AjNShYKPZcBoGCPbdWDBbwmzPevmgym6LyGyyMB5u1JzEXXwYtDScNLjGg1W5SnV7yLCP7DG63z5Y",
  "key30": "2ufkjRtC8bFnrE43okipaFA7pVjgooF5DJ7sTUiiKGHLx8B21QL6EmUw5xrZ7XoSNFBFHAZYrvSHaaftpCVmEjLv",
  "key31": "5nkdMNTjJ7urjHU7tr7uwPsfffjTrEUFxd8FodQsYmxDeMYhaHt9oTpPLhzru38F4fdismsVX2zsvczdNGBJr26f",
  "key32": "MGk3vJgF8AKTJ1SLFdeRo3jKpxaRJvNeTgLpX8xDV4hdTqBnjD7neC6qsHADsykQz81sQwEtZCND25TvDGA7CT5",
  "key33": "2jRtdLPWmjSehNpYy3hznJFD2bga9Yb3HQfxXFEB7N1XvGsyzEJk9umQ7YnP5DbC7pfUoYTicTL5tNqXfjYht5Ui",
  "key34": "3JyKKgy2omCbV3DQ5wtgJCtNDJoZC8gzRhb27Je4GZkYRCTsM7WFfGiGpAzJKWwU1kady92gpwJdT1TTQDti3mwf",
  "key35": "4q1Xtgz9T8vKnSYSXCV7fRnNuDoj8cuCef4n7sUEQC4CwhJu9RsGsw5ZVizLhV76iWoSTYvsrc2tp6fKGxdZsdhd",
  "key36": "67EqYiHHqC5rqKLWzPenBTJhb9rUjvPUebKZAaCitHG4vdfY5LwxrQLYCRkNLBokKZYMdBAEUd6yVuvVpbLjeUra"
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
