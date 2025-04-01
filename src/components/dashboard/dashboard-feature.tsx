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
    "5jBWgmQmATkfzXbCAVXtSQStdstG99UrMnJM3Er3eHaLJNkP1GkkkMKSVsoxiNqZhtK2Wmh7HRGZaT56375azMZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziEWHNGALg73gjSZhhw7J3NDBnS3gZ9eHaRgXtj7p5TewyrCbh4TfUmGwPwZQTUcNyKU21BYLfSXoyutxBuBTcz",
  "key1": "2rG3Y3877kwmEuFzbomFaCCoFTdr6Q6dHTgTQ2tAT3iakZVi2LQZHoA3wob76pmb6rcMYJVAFyyw4aJKKRvf4jFL",
  "key2": "6354JgZmEDZvbX61qy7z9jt59uxPFpDyMbGQcNgzMhS2NWa3EQaQgjXEYDDhcuoguFn76pKSWGz1aH87EpjxcrPs",
  "key3": "3taXwpXZSpwGNXhJg3aKiPfhBTxQXukjGM4QCCK4VzgUtq6rRFuapadmoSdFejwQ9t5JwyzyTJppV3QPngdZkf5J",
  "key4": "4ksHvmiRYZj3uCiuXwQ59ZsZQNQGHTCRkyC1cKYk2Vo3m1F14XXbifXrDRqaEmhv7BpLQWcgyoKzzozYfbpNtbgY",
  "key5": "5kKASvo2oaB7a3TCrf17VYSezQjVT6HjHB9rXuWdDNMyXpnr76AYyW1dS8YeZUAbaKvLWgGMcL5tgj3VHbgUVAWA",
  "key6": "4XkDzbRqaz5sHzqtssfx9SeHprheMSVpZQ5VLv1U1pbttnr3gmdem3Q1pkpNYgJSCKDfMxwnBd8pz8QLmXLDJKLa",
  "key7": "3pw7Zdmfm1FAtLxMBWacsNdxU6bzNis4ttZTf8spwTE9zwxTxCrco1AGReTLzdaBYD1P56EshZtjFJWogHVhgMhV",
  "key8": "7dh3krPfi87mSn71VhPu2VjxBEgZcMvR3fbTMtaGBroUYRoLii9pcU5swd4GiTrbAffhXgUrjBY66LP2xaB9qUo",
  "key9": "42cxzSNa13FUXPiBsjWWgG4kpkMhUSc9w9cZcwBL8QP7DNNswa6M7SPyjwYEbush4MArJ5uXf6x6hPbMAkxN1iNz",
  "key10": "32Vhd6HPnDiHmuss83Xwpf4gh6Kt5pcaJ87DJwZnG9tNivtxreBWPQ8B81L3NrFVHjh33MPfSEcHrCq18AJQYRun",
  "key11": "4J6p3jzXCswKoocbt86AeFq9Nv6sVCo82LcL11fcjVyxpnPyXMALtmcAiAZYTV2BEgG1Gp9baXWJ9V5or5kMeRNd",
  "key12": "xSVUvZjwvpmN5VoYC9hNH6YpHVwfREFgizCzvAquTUTr1RDhpxUsBK7YLUXenEh4cfsJDhnQs6zsRYHFjQhzfuU",
  "key13": "ChLTvzKckocZhiSLLGmR2Qjpa4bSPWQyUN6XeETJv7rVByaReSyZeiyihnhyZRUsgBSK5W91QD2dEQcUcYMdWTY",
  "key14": "5MWBQi2Fmg32ofEsbTb277ph1oA5igaZURpPuVsdjAGt9tUBtLpUiDXHcY8DjiwBz2WXFvQnic8VdF3Vxs1GNeJm",
  "key15": "4kjh4YoefBF3rNWNurZvzKCgmVQyT2jgisnyYa7qKkuWxxqgRFXmFYcaavuxwvswTheiNSUPc2VJiQNU6pCuBRKt",
  "key16": "3U3LUxjw77hjUNPHA6k8Erj6jE1X4Q4JZexRahevBV88nG9v5UdH95uRmm1CY7G3ACS6vJetAwewpxL45jZk8SPB",
  "key17": "2DgHQR9exGt1UGoA84KLs6mE7wqNcRCTjEQRoPBeV945zdFt9dnCZaeZdu2J8tZiyFZ4DbNRW9QJuw1aLe9obh75",
  "key18": "5bUFAqAxZziJWGQ14NTgD6LWs5mgZZ4wwxqMeXTZUZpZLQjxMu5zPhKy8kvqmNdThaYsmK5qQ4tAocYAtcs528Br",
  "key19": "iZU7jPvbd744aG15viWnbh6LMxYxTvTUj8S7UdXGrgaQkvVzCHUw2LMLUGk82gD2vc6X7xiioJE2FvunVKSPyg2",
  "key20": "gCVnPUNaj7k82KGQhUrooGo7kQVGEwXY2Wfo2jrQpQRGcQQZK3sLHPZgyw7DdvAY9GkDiumEKSMDrmiWKhmCpcb",
  "key21": "4d8dvVPXFyePjJLhsESmmwJU8dizUxaNLX5ywJChgaTRkMGW9yysRdobuHoHh4ty16eL4bfrD4WLpcyxEi4YkhbE",
  "key22": "4Bsn3SDMDtRybmCq2SWKVjNV6DSKaKLV27gkV5YotsdtSWpFSBBxpihSeMw3AumBMF4YEDkt6CauBFVXhFdXeKRD",
  "key23": "3Zhf2irXLmfS6YCW89ExCXgDWAhPe1ymrp2m6DWVeyXr2vEwxJQLxC8rzkWfHZBN9JTe1jSH3BBFC1NNMpWm52MQ",
  "key24": "3i4AYFAeG5wxu7AQufdZgjmtsHEqC7DpyTuXGwmi7WsNwYs68stN44d6W9AewJ7Fus6VDiXT5Nkvp8cMT16N5t1D",
  "key25": "4NxZTv7PVmSfPXBYDrrW4HgKK44XMrUYMPD5hFSMsxizQEEzooUYPFQ6FDo8ZjV2DB6aMSC3GVv4mVCL8RevycVc",
  "key26": "4Zrst4dgpN7RDZsQ8rfjnDykP83ycEu3PkFgnKjC5enYjcQyQv1AJUoLL9Bh2SJc87GtzCxHbVyHLoVTGqJHGP17",
  "key27": "jMCstM93aWjaCAnkNnhT96Pu167u5nwLqUYVYaK4PhxXgEibgNY6eYWfHWxucCdi7WKakpZ5k9D8scbZJt6GAaP",
  "key28": "4mhjqrBMWfJCj7BnZCjwvxnjD1P93K348TuLujfBpFu6LDoWaEptCA6NuYFZr3g6SfzzPFAG8GNNYdtoAKW99AeK",
  "key29": "2mZ12nbmhKsuyVnRwDvEWaUrWwUKhRE1svnrLGyiK9occqRq9KGPW91ZmBEX2St9EXHcYKhVBpkeUS4Q5y41gebx"
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
