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
    "2c9fLLHCdUePzmSucqZSQwLKqLgdnFv7TuPMhNqjAvLgACDpHDKHrXYSRHxFsqUdUDWnim2SzWjAjeSBZJ3KPHoM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6z3ixNgMpqhee2BuJhBWRVDE6LuRDbEbCPPDv6M57zhfXns4G5wEHM4i51okchw64uU3vvXERmiaGVYj92MpTf",
  "key1": "HRz6bN61mHDW54FwAZSMwwSDYWpUrddcSvJRGGog9U8kovhocLJcZn1PeGAYfMPkMFHCwh6YEt7cF8VMf67gV9m",
  "key2": "5bD2hiUkp1zD8TFzQ7kb2nxPQYYVCi9sW1CCYreU1MUtoAkfnXfh1GahRKdKM8Mmtdj47XZzk1mZUAJJivjGxHGD",
  "key3": "3qEYut1bScAsPZPrtRSKUp5mnT6c89LUEofVq25YCQx83UYmpW5uzSvwPC6Evpt56cnHUSNSKqJcucsGyWHr7zgc",
  "key4": "5Mw989N4ddKc7VrbpT42Uhnwnku8466uvd47aDV6QR7uENfgZJCB2Jd8gdNZL69wMhnaumiYLU4EWgJjQdkCHHBF",
  "key5": "2RP9PMLALdmbfpxGvZ6AR22QodbwWJBsEiAUnNzYbg35vdXBpp1xW8V1vkAmFXNDH38SMnDadNBHt8qsaEXJtBcK",
  "key6": "ppV5ndSB6HYTdD4ENE1hb2yNdDbsN2k8gkLKmARgDPTRah5w154kENFiypHoaDjyh2B9Enn5RZ7FQm9Kn3YWdGt",
  "key7": "4s8JVzm2MQy7H1wtxJqssGvs4eYiy5s6Y8nRdWMVBZKaiZsT7MJEB9KhuZDCLmdJkZv6ztDyKBVQWVFLK7XggxB",
  "key8": "4Ku6P1RF5kiZTKrLjV1aZ3G81p5PJ1zeDwvjEopuSUmSCizhfR1Nr5MUmKM2kx81yqvwsqCzyL9x2Gs6pmG7gYBd",
  "key9": "3QCXm6d51QQa12doZxMT9P7hvR51MaoupAyz7Raw4kw2Ty8tE4X3XjKKQdsXkAY9XHCC8jDGwSiY1jKE3c6Mjf6k",
  "key10": "5bKdxSAiMuEthVnU1nmj6egBbADg5hvgfywmim7ntnVWkewxQ2GhqfrGsN1XnzkFaPZqxgEWkJBLKDRobKg5P3Bw",
  "key11": "4L4pVqzsGN9peuzmD7fvzZhoN4TpZqTi4L1c7o7gPPwhF3aUxiCjBbaxYTFLw9Sdskj93SDsD2WdKvqnQgMXecRe",
  "key12": "5THUcdbUUy4eAPUXepgkEjbejgdzH5f9ddAPpjtUkm3KZcB4XrSi2Apq8H6yBnRbb7GuBtgMt5bpg4ZLinjv6wA2",
  "key13": "5zzGqRW7M5optTzD6hAc6oSmZNEdFLiKCGREcvtkydfpnGi5eMhXnznihayk2GeH6LWqcb5nN5Gg4on7ERfo8vC3",
  "key14": "316t82LMqLLDnrDgyqH61QTvXNzYMa3fbb7ubyLZdM9bkdE4hnDVsBPixi3tAY6Lir13NTfsw44xn3bqueNQ33R6",
  "key15": "4spEo8RfXrWmXLruQEapQd4UnMBMaAvvtoFtFqFHt6itQqCeQ1T3HnMKpoUg5qwCeaFgmsh7PwrR5jMXCyfuQQ17",
  "key16": "ytkyw3v2r29ePLeNJRtK4DUpFGNstkZu5um6MWA5Vs9o3xcaP43HXdyoQYRoog36xu9r5B3fvux5431hU1pzTZ5",
  "key17": "4Cqh4qnrGL3TNQyepHPmP1geYZmovrPsBKWgQyCfD8iFBMD817kQirrNVXPiHEjKuwLeJe6c9jBstF7fpg2vpGmK",
  "key18": "3neoGXMwcYGB6k57cmZ9g26pBCJ8QQTtDbYUDopW9hqxZajBLfA2jTcy8j6mWBRgqfUGs2fZuFEwRvhxkh37GXiV",
  "key19": "4F45e5Scydch3L2npJcobQnQnRfg3SJp4SgyzasPRUFfnCjwB3pjchKRRdGS7ngwULANhMPRo3bwnG6L4nfLYP9W",
  "key20": "mU88MPwac2wVm8ybFCtPZJwHVzvQitYN7rVLHKgVodNP8oY1riZJFVpbH9LTfw9MwbJpSCVVV1SRSM8yADt1Vq1",
  "key21": "45QmSbwkJJ6NZGLBpzRjVihzcDspQhbvr4qHQqKyqPN1LyPP3nYd4fHQvbQv7ZQQRdZoTXwBPbkhZoUpWxztG9nD",
  "key22": "2b7gUXVgR5CSKAwf25W87RKyoRrYxL2BzugPyYS8o5uswDrX1FQqmSZAa5rmodSb28Boc3VFBmPzRDYLj3Vu38Nb",
  "key23": "4gjubCg8oHJfDTrmE9ktWxJw3ccR1ZBspr8qDJ35sknor3VmWsr7CD5puMML56HCKDQb1inSHt8uj6WVTw3zjNPh",
  "key24": "wgHcVxTSK6X3SXYLVYkFCaABMi5ToBNNNbtbJwRniugkJBMdR1PLtgTCDuVApqrfoEC4ywD4UyG4rHUYqzLtKRN",
  "key25": "3bubMhypXsEhi8DC9fWz9Y1N4wBrXv4WGUfPaFhHTzcCHEKfx5k3SsRjRbvdJk9QFgziKzkhj9UMPUZsroTJ5Evw",
  "key26": "KTitCMvkoyFXtrq35fXh4asRfwKPogPFoNXmukM8t4UEHiKXesaAmiwsjdFUaFVc1MEP6LYKE9gsreHbReQVEYm",
  "key27": "3EpJriFBJtJFhwYHwczAXHnkTkHJMJN7kJEXZAP48x4yyzVRjoHT82R6tjDLXHBDxTaBofCCm5prLuSJausumjEP",
  "key28": "jJDzndmCHMP2hUeZdarLGv8R2TTuvB8sCk1ayRVX2rEgL1gutTfdDCMCU2ADy3dUKtQEaoqw4y3UqRW8HfHxvqg",
  "key29": "3rZHsHyWomFXyerJorCBLgwfRFjDh8NWBpnenSbTRoQKMBmptDFg8hsPPh8FC5CjrQQUGSr1YCgHhv1kUDKNz7s3",
  "key30": "dgKpR6ujaGTeXz5d4sdbcEQ8Kg7JjqUiFF9gVY5wnfk9hWJkKCiQjekaiSfRotV1YyW8caaqTdxQ48U5SckvzAC",
  "key31": "39LTE9LkEDvFnVjumu1nq4qtbjubm8zjEPMhwDsVfBq2oswh3RnjiBpAdMgyyXtHjPVgk3btEht9hY7wFZPxT72n",
  "key32": "4R6kaYgMuVK9Svnnn8MURdvQUnrrE5FPEdbLv36wKiE2c8hcuBUrf9bFg3oSVjJkjDKN5RJwbVf1XbZxneTDSUPH",
  "key33": "2Hfvov2VdBV4pc6ar2K8fNBwpDWJ1wecLCu8yVeXSh3QEQqaCh6iriR5sV7kshAJuFnmj4qHjq4WEbWq93nLUM57",
  "key34": "LzeELgxmM9GQ7S7W9YJxGBEP2BPQNrbrBEhqcQ2dy7Wwm7C8QkajtrMiGLdR2z5rUt4rGw2dLypJSSU5JY55aaG",
  "key35": "2rhLP66cRDbAqpiuU69Y47e8HGPiXnXAtbtB3qpSdGhn2JYuCjQ68Lq8NaK7r98af7hZsJ5nazXutSfQMgttMyhn",
  "key36": "5NgvuFBKmrwUgcTUSGSCbV9a7V71XM5EJD9D3LdRnbMtcBtpeZohc3HPuz1i92eHp3ppoBKuryp8MgBGd3rAibGc",
  "key37": "5an8WNwrv16dzbm9NZ5deA7yNfvrzUSoNpkHnsSWnSMLdpHtBgxFM56iiCn6gR2EGw5CXoWFiBAWPgVDrwwnUhqg",
  "key38": "ggNRU989PNuXCMTEGnbgr7ExojQ5zCyqhzGPa1VTXZgtfmekAxAkydhQwW16Ywfj2uoWvPG8gnTrxNq2dKZ4Nc6",
  "key39": "aQFVLhNcTKqoPedVkvC1QJyT5wmhmFdLd2k83CU2V5ca4sz47aWzoNXHLmo5wZv4y2e3Q6skCTcx8nwpCoy2Ypx",
  "key40": "8e58DrYkhjYJYAGcNPezuFsL8qikavrSWFj85QUr8yY3kYcXHHVnB78BRAMoTPUbXjfEKdmt1fpTjAwcc9a5RA6",
  "key41": "3BR2s1774C3WeG1pESv6P4zk6aZkMv59s28mZ4XGCD4wnWGT1B34T3nyUEAJv4yPknB1jSBvUTPTYa9S5KyhrVqk",
  "key42": "rBQk3AsDhp2o5ZuBnXVXjfa7u8FyqbyuNcieqvCYdpBiJ8G34e4WLiFrFe3kTGbdHswGjF7KmrRWPURomZEan6z",
  "key43": "3mGLXQECEjkx4V3E2aRwtNgXCmUPk8yu75LaGtgWaBWPkiYFTRTeza9bnaB885srUHb5PEccZhdEiwKbxYLh2he5"
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
