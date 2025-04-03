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
    "5e2Yr7Y4o2GXTvUqxZibob5rp4VpNZDxsD2XmDcfeU9vowKiEF2aW8yFPFtcaJR46xnWfkEow4jEB8JjYamZ3hhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d3gphM3mbdPUGHwpNgHMxpqkXTvcyGmTFYZbqZL5of7g6qiVBqGZmdSAAA1Zq469NPiXvynDg5ihLt5JsXYuVqF",
  "key1": "3zsgF3aZt5fGtWCDLZzKwEuGu4yHMvQ9YNNr7BLsbiXYZPtFgsQSmLeiX3FMoJpd3ZXbmDq6HGLcWuZ9d5pgoifA",
  "key2": "3HXxMDTXnQxrjpToqirRopNyCtSk5CEXR5CJitPPyy7tvKTGysywZStveDCiHnFLDruZec9k9Nex8NQrdRHmbtma",
  "key3": "5ANpHhtiZvidkABPGz8TXkRcfQQDqRPTA3gPveLK93sMQVgJr4HCCGoNBnjfJJk9zbMUGhLayyd4gRzXVLYHtYWH",
  "key4": "49SDCoge5hj288UnBn6wNnCfpztFyUAUh3B8nBEqFetpd5e1DtaecMowqE7CgkB5tGsoguxMVhrRVtHa2egR8o3E",
  "key5": "tonuMm8DFfHnfvSU3uPubecqZYqLFfXTtCQAmHNqCv5RnPsCgyLsLu2ZAx5iXExcoaqG6H6qpGVfY6Sc9TVZkDB",
  "key6": "2Dc4oWxNzWe8ABEyuszZxMSXi7ATLHfyjk1145jPUedTWTdBmwSvWU3B4z78tPeXBrcpjyx272X5BjacNnqwq2gB",
  "key7": "2WgGU3icrC7K37vwGYZNXVqWskkm2fJTZsN8VRBD6nEBZpFqThK2cNq7tFMHUL2L1UJTVu375wTAMxS439m7QdfU",
  "key8": "3Pj1fXf1BakRa5xMqb3BQTkaFqb8aSqorp2P2T3Qm1ZEkqu7nnSNbcdZSWxnU4zrPwoHDWGXeitqG9xS4P9XekzJ",
  "key9": "4xYYcAv3ShiTf2wA3iCGepN4pRcxb7nobnP6LAQkYbNMHPU28Y7URh2TM9m4P818gGWu2TbmXNV8poN9qZHVpVFi",
  "key10": "kJbH7nN6P6bYdpdhafV5XFmgnBSpoccJbWR4Vx7MiSk8bwscjKNa1MkdadP2r5Eeg4Z1rCVFyyDbzaXRCKUKxN9",
  "key11": "ziCadf9pEPzykko9y2CnxhMYuFTSdeNutEuMobm41F2xaEi7r6b8REaTGfb6EmYuyhZkw8SWXjcAn13YoZ1Bjip",
  "key12": "5NDfo69w3mowEzHnVJatYu3VFJbtV5PSAVCrDxXKySQkjmnga5JbDSV8xBgh2DszMkZJ4YkTwXfo37ZJsMasUuue",
  "key13": "4avbv7igpyQZvanjP13PWQLs2wkMXgadkx7c6js7HixC6yEgbKhy8joGpBYjEe1SRn1byo7aKwmTmmMFthuNDQDu",
  "key14": "4fvPMwXSWRM1qvhgcfPSWL6bDE2n3FzkcHcdehhJtinqfdXab71Nc9KzT25Doj2AS9VfFPJ2qrL6WRUb9psGxb34",
  "key15": "HXTQ5X5fYaEsNZ5N8czoyNkpEoqt47FVPV4a5ejjUwJxCa6iB8LywSzzLQaqMjXJhLkDnSTBeS4WkC7qio3FBRN",
  "key16": "4viVei8UFoUH8w1i9a1uACQuVQCMghE9YRg6dJ3nETBrj65QxzVG9eWw2fH5hxVBvVy1rpYkdTVuLhyL3dMuZhZu",
  "key17": "3vRx62ZZky1EhpdP7PV5hNY8XCBDFJaTVsYjQ43BSeLNiaHGwYnD4z2Y3eXZ17BgxHmC4pN88tFxSFZpKuKZdx4j",
  "key18": "oNpFzUnEtRcvuaDqcDzSmm25M4z989A5DLELXQuuzVoujKsKCKgFgRTarV6L5eq6HjMtBHSHi6nAnJ8qEB23hTB",
  "key19": "4Y5Kot5uc1kvPVAyEFj9wGvcnLW8GgP6wQ9pVhjwiihYTb5WH3BRTZLsCMgZBxbbuKTCpx7sjQziabKS5dp196u8",
  "key20": "3PaaqXBMUQtN1EfNF6j4n5UGT7AFGKn36zWLHu1n6243P3nPLwRCAXQ7YJwHaivHkQ2WarWwHiv7FsBscCvPFedF",
  "key21": "5giz7Hxd4jn4v84rk56tYuj1oixtQuYhXaoMPvYYSC21nRzRiu1zoTWDZnoDJp8yBY6bz8Y21fWSn3gB2nug2wVu",
  "key22": "2yHzoRmDkkk1Sfh8qgdgfS8opTDeMgPSKQ5AWVJktk6oGz8Zm4gaj9uThEyfLhnhxLvS53qi1hnUAuk6H2Yw7uwZ",
  "key23": "5VyQrmBT2jXuff7RKh7pmK17fpZYvAd4qERf7ZxDNbXhzeWVqEJMdsKcgLM2HCd93bat56X8r3o2WyXsVqKWyb1o",
  "key24": "3Bv4gKM7VRuvcemoqzF6TLJxvQPU6qRvgZELX1RH1nadj5nMhxZttjqdZ7RcPbN5SonxVtnGVk8fFq75sab7gtCy",
  "key25": "QAAXKDyXKc8EkEJeLHETTn45zHVqrHqiQYiSJ4Su4448Zs7RPqJaWipr1cDWQiqckoNUT9nAkHvzHQf2HL9jfSu",
  "key26": "XkzqvBCvJ3WAw47Shaem4XNM4upKSE38hPSjnVzbSssFoB7x2DRkdcfkg5CpWVY38o7FJc61FA5MU7nXnEnBdCf",
  "key27": "2EhXsKYXLVLKfxAevhwt3GhR84ZgSDJbik8LJdYSGkzqtM8SHmvgiaeB87V1r4QTsVVjNoSpkTwYreqeWQnsnLM9",
  "key28": "bzbhyB6Q6FT91S94rDF3zYzVZYCG47KoCTup1dLxY7AZMmuPLDY9mdbnz4cE1EwSsJBgfRjb6WrfHpx1LCNRr8x",
  "key29": "6ZxKMKL4SAov9tQmom6RfoLiFyxBHBiCAXgyLSR7e8bCE8ktuctJYx6WLg8L34fhQuqwrXTrVoKNcxprx5N6dRa",
  "key30": "3DuRrrtpZMKpUyoKrLxdxmquw2M9GEtqwARgCHqrY6k9MUoy1dq7YNCH6pRV1pNPM1ehvbPud4fPkjjR3LFTyFaq",
  "key31": "3pbpym48nzZtQSMyMj1Mm6qD4Uc7SMY5d5ieemG4KcP5Rfez6cc3ftEArbxhEqkfXdAPWjjQbMtV1GeaA532gTkQ",
  "key32": "5J86Z6oizXxtGFRg4ySWUsE1yPLDaSscuAkjmSnuP8sn3EFTtHyw4U2w9xHhVK2FBeTVXsQrHqUiCP8h6PsPkCYW",
  "key33": "2UkTvQWqnQr3Yh1BtNcTCgFA5N8LcCJiNx4ahnqcPr6jNaRBuj5QxY9vVMkZX5V8rYkUbghmtYdrCZdt7oTCyDpV",
  "key34": "25s4K9FkNfGaLVLS2jkRpGBvGEDYewWAXCPt3bALanxxfSmFnDDrCr9mqxmEDtsKMwvko9JdsAfbcRR2Df7Q1edm",
  "key35": "4HynG5D3waNgcVL2JNLHB1bYTEGG3WuXjwpXSCczDajrgkEaWjgTVUDQWY2mLQDqnoLtfjxKFCtib55ri1zG2hXC",
  "key36": "JUUeLqedJHa3FyaSoV1oNxBhEFFXjp8zqeiXpvACRnzySCn6349NuuHxqN1AYArA9UBTWqWYcXuizaPnQEU6hVL",
  "key37": "38gx8UtJ1KUj8iySjTouEvK5sQ9v5vinDKTVhDSjEtqpKTseUVq9ReG8bPaH5gijpYkhiXCveKGDF4dL6HNwHD8d",
  "key38": "3LKuVRFYsTMKza4JT9nW41zj17NXsXPS8p6T8KMrS18utVF2ZYXhZhtibT6bjN87ooCJG87KkyEKRpM1xw38X72V",
  "key39": "2e9JsbV6UhPwbz1trX45NHZLnGq8SrxXGmQtCjdpXdJX8wwwNRKvx6oJz4DuicB2z7gUudeXqpDFCU1Waqa23e4t",
  "key40": "sydudf1WxHvxDUPv7P36DXcLcp7Juh6HiPdY8ALVEnhi6pbuvaZn9aDQKJDhAcek5a8T3paZis74Bdt7vwA4jo3"
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
