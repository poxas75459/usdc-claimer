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
    "CFSYdkvic9V3CLBRwCPEcGfdhANfkhDfdmCUzUgSRAheMYvDcqsuq6ogDccty53Hyt6sYhJPZZs76KX4m8vbJPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kyHp6AKLQgeygNVgsUm4goCtC3LU5PQ8YzdT6SH2ra3tpbCPFFy8chxFA4xZskAifMEejSFviajqYg577nHVFrY",
  "key1": "2nzbzPUiV2wrMnJYp1Vzs6ZKs3DshegbXJgbiRB1tJFs8cTQiDjXtVMsDyuBczdkjjSj73yxbNfRjukYxxnq7wdS",
  "key2": "64eCiuXXjtZzy1HBNdFX4dRSoDWk8U15KP5NdpWDkj3GC4rXvyk4UnqyYPTtWCA71yWcrb4mHSgjDFWFuHv1vwRX",
  "key3": "4UvHDgmLjC1JjnQocQvES5yLPa3hyQJB7Esec7mLAHwH47fXyG39fc3Ke5cSzGQUo4F7g6TmSoomdVf5sZEGgoaH",
  "key4": "5tFsYrDR14wirbRumyVineukqgxULcU7BjysUvE29NFkMz8gweMw1Q2pJkq3p3SZ7H6KN9rW1JQpPAkiTKj9QjuK",
  "key5": "5CRuCvdxd5RCduZnzwxWeNheij3dWVoXCfTSrtJ3AwPFhCp5FSoR27QKYmHLDVm3d7avwUVnY59pgXLx1cL4KCj8",
  "key6": "KPfhmsCNZrGtaw2ykCK7spk1ADNLXz9rvDsYAzpfgymo4M772oBGUN1w8QEa8Rm1wT5c2NFqKhDGsAiRQJEjuyW",
  "key7": "4mRbZddXdWZZF5nAazPXejWa7yY4LkpsCay8u7yKTMttmBxbVCHEx4skfP6yNe36B81BaMbpArmdLxfz1Gyx47s8",
  "key8": "4aNHBA1cQZFXqMaf29YET2RM7iWvfkiHimWM43YvUNR9e4ak5qV94wXeQHrLdziNPEn83pPgYin4PS54RyitRkBi",
  "key9": "2oz8dk2Ne3kJGR7RSpS9zjvoCUaPqAHWZZHJ5WWuHjrrsSsugAnnWiPtjJugAuCGcak4GMrA35zqa8yCL3Bp7S7B",
  "key10": "55cmyzvM613wCEVKegUdMrbvNfGVHHyEM9xUAZyU6APMpfGugJEBZCYLQTF89qMnRMMs5coGahGoxvheJE1vBjZw",
  "key11": "dWdeZpJ72kCFJcgrhxN8m6aKV9NkZaUsbSBWA5vy2Wm8F1DKivNTUEdBUtXaJEs93zkD1nokkGhpw2r98u3xP5g",
  "key12": "242uSWBXfcTc4p1i2oXjBWC5xg9DcMczzsiA7Kxkj8dcDVQjJLkiVcCGuuT93RK9zWWUJUoQLWZ4FixVC1J8QCeW",
  "key13": "3YKVQaWDDowR9jCtxmKeLPPnMiWa3HAa3Eh8ZyuMvZ9EtrN8yy6vurwaZLSBPttbY8utjEsEv2fBfGA6PZ5aweGu",
  "key14": "3DhbwMa554XCuQDxhAmWuu6MYPQfhwL8hYEqPsse5kLbzeZqmjRasmzJNVoeWCKZSYTmB4haATPf82Tor9t2oieB",
  "key15": "bWDDSj6kG8sBgE7pf6LLA7CbrnK89hfp77aHdLUpgWyqFRWYSE4wDKoudViECMcnfgceiQoPTXCxxPVp11M2hRa",
  "key16": "622Cp9oFS8frr8eDro8fpw83bdJWqZLBRBgbW5cc3bPh2e69HzdW6fPbV5P2PUVHAQPBPXMJQksv2gzv9KX2HoK4",
  "key17": "48kN351TJ1UREstoC7xSYXC3cgPtqZAjvLu6t2YyvJRBk3KCUKpzWdQzGVpc2M64E3WddUsk4U6FxnqHEdaWYQsL",
  "key18": "4BMrkGzz2N18Gk5Csg1rVbbPdBrYXM6KadqK8ooPSXL1vrQKdKx83cQG1NVxWe5xWkUJ1BALoekJgo6jRU5NgoGH",
  "key19": "3SjMezbttcW6Fn4mXZ6pYFxry7Ld4iiKQxXYuLHxf6N81aUbVAWdE4oUUN1cipCtG17LZ9gD6a8JJnH7xyhLa8DK",
  "key20": "33aQzqTwp98uAt6U4EqRTJuvBmHLcgphwNcWBbMujVAjQ2JF3n7uQFT7uxNCFDTXWtCVQNQiAjZqApTzfkArzEeh",
  "key21": "5e6HwgajZ6zB1HNsYfL1LzUc6oR8ZX4bJ6CiMeZFsRL9xwJHejs6S5M1cF1rcPWPXv9F8ioepdn3ueny2UyuqgbB",
  "key22": "2gzNwSDSpRpdWfN7aisxmadgLjKbRoWVSccvFnYjMkmGYyQw7cs7ZwY5uPQXD8E8hZFdmMemzDfkMiMRUrBdVbRF",
  "key23": "2DkHxfQx6WLByuN29ikri6A1SC9x9bEuP9j6YrHUxxpsHgCqrJvLuWQca8MSnAtRQH3UEyzW9ToVbLjANdFguLmt",
  "key24": "5tY6QSzwcxaNaGwCpGeFHZLh4xt2ZxFSd2UrULxtSLuwqvaWMzKqdLCbTCrvfgVWehxHXEMj5iuZAUVKGoXSyePF",
  "key25": "512WDFFemTc7d9a1JmeETUa1Hv4YTGFz6jwU4Wf77CVENKyjyWKfhUKjxypj9vrvpdwr2jjU3yYVPd4tQELoPdhN",
  "key26": "4vGorQ55sZwLwHnW1zEHzufFaHPGwTQSHMTtmpE47FpEE9wo3JGMffhDmCUfsLLiMFTcbRXeM3Db6nnTibaJsUyk",
  "key27": "5ZALy7pPx5h9AWvs8DpNbx9RuK5Bbz33RPmeAk9mSwrG1Hmr5UjVQaVRjP1JMDqsGFEzpkrAg3YpMiCJZSHgV435",
  "key28": "WH6x7by7jQ1tm8FSGWQCtKSRPmkRsQzqouFoQ7d435MB2aUGq5Y216ZGZrV2bfLKrqpDJPiGDDSN38V12MRFmK5",
  "key29": "4Mu9312guVB7zPwwWuE8JAH8oet7iceuoGMi5kjhXMkaVubb3eiTQPogPvgV5TW8cxXsfbAiAYUDiSSgqReuDnMS",
  "key30": "5rXytzPk6kq6faoAAhkh9cyeusa3CRACDnHSgaNAVD3KcG7M6rJvQEC6pJoreaBaXziiUSGQJbsJd8BaLH6wT76t",
  "key31": "5s7TQuhykDC4gdd1cnJyJSwjpyF59XxpwZdM1eFBoqGqG6VDoQeRAnGXKowC6uwyCrxNsKxpbAsxns6uSqyCbFAH",
  "key32": "43w9vwCfpUH5FzUK8V9z35LXXkUkn4417SspmK5TKc8XwJCdbaN8tfsUxKpqzNrTeiqQymGAtZEhZPrWGU2YiWm5",
  "key33": "1aGH7aB43mY34STFYnf7c2C7hgmzGQCfJ3h1VNCLdFgxUeHnfN51ChZpan4MYCXpYGfdhMo1ZvSwgamEpGoZzWa",
  "key34": "2tn4wDWUFSB1hAuuEdzhJuZArGw86ReMLZ26vXEyQ7Nrmmw1mzcog98pJkhugjZMCBxd62JtHArQHfX3wc44ZAkY",
  "key35": "5rZHm44ohBf2evHBQp2ffj8MFfwCaLCySVrqtY1QYUX1SSe4vyD5bK9iPv2xcyXh1yerNAernR8p5QdAb6ni6qgd",
  "key36": "2m4SZLdAzPjBr7MqzKcfVKdPGo2zq45JKwhNbPDDWtNtqtpjayJCKAiPJzh35JJz7FiMoKFy1ATVDF7FHwxT1zdv",
  "key37": "5sBFP6Pz2sPR9jDbZsUSh7T3M133dwdrmtX45wKynKda5CyqiisiHr4XVS3raWoTfDeJ7ERNzrsSAhYWFiNk8GRF",
  "key38": "zXHbNRP3dYjFAbyBMhZPTq5jrRUrCPjYUtk9XEmnKMXDqirBdSBskU6Eh4gTJqEf3qGuFnsR15xWD6d8eQ2jBvP"
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
