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
    "2L57hN5kR7VpZ7P1soCv16TL7LxJQSCBiwgvfAm6wdrPeUtya2wsjwxa9xy5vdCvvf5eSzib686CZ71m3yrEgvss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c2r1CZBU97eRo57LNrM1LcM4AYipbKQAkFKwMKhC9Eone2PVH91JrYHRQDp8NabHtMiPo8zM7A5izgsex9fVo1m",
  "key1": "ngxMEePseau8fyexZrVt4C6Wo2jJy79rcpQ9MBiRmUgi9mtFyLSo2xworioWZi5KKrszoGjnt3EDqW65U1Y1cBa",
  "key2": "4DD6ggkTe9TDhLGTPAA1qiGnrg3KVr6oqe5ZXW9KaDYrPToHmfwZabooaLvuaRiexGFfVFxKFYBURMhGdLNzCMpt",
  "key3": "yPXcjVLBB9kBwGg9EVuNNmL8QLRbVAExKuRiFHLbho3w1uJyWrcA4bKSEGgQUmUubGHHAdkVdgB3cZojmshwiGm",
  "key4": "5viPG14LbzSaRb7Ks69iXuvgiXqmCgDtwcdyY6KPDrDUidFFrSzyqZUFxYDSfZCZjtYz72snw9m6ejqfVv2ZEKPt",
  "key5": "3kh5hfrVmykTkMRwM2ckw3dXENwQWBZj5WLrZTqVrnWdZ7Z1j4yVN6J9YitnnyPmMhgtMY3YVXBYUTXSkLHNBSVb",
  "key6": "4dxgBL4E4ELwgZ9BawSkpp3G2gPnHWYo2yhEiaSyfaKPjAa58FPxDmnSmgi95daGzv95EybGXGccuePowsYzTYRW",
  "key7": "3gxTrHcxJJsMJBK3YL5qeLxnCppTdjRyRPQXbE6htyAZcMSiCVpQH6FosqbZmgbMaAmeKx5974LoXVd9wH5MBoTw",
  "key8": "4UaBUsmdXva5XEry1CwKWsKN19XADJrwxRjw4TdnTPc1ntBbRihNLc86jyvLzopeji7vLA7c3p7uZRmZAHAQyNTv",
  "key9": "4kJb9kiQP8nubYmJ7useHr6SQq7mtWXySWK8cKMrzonsxpviTt3m939bbx6j3dNEmQCSNFGCyEz4Dq9uWa9duGBn",
  "key10": "4YFK32pG245xYbmsF8TfiwSfSjjVjXkximwQr51AiUriVrbVgKxdraPpyKtSVLtWxGvxLJBWgByAMa8JHF9LFTLi",
  "key11": "3jmLmnVMV8tasHhvBW9XWG5Na1HzKgjNZBCKybdujoEYcEy3uHKTeSGjcNrMhH7PbDBZdh3YZ5jLC8SXrog7XSSJ",
  "key12": "3etUPnH15u8etPXLX7vgUCGS2FDNUEA1hmjquXFSS9ciEJBXYBBBeJH6b7icCX1eP4xxdykcRbBaLLLC5wmx8bQe",
  "key13": "2CFYz8QqU9hTfebgeArW6HgB346qmG6yKWzABNQ2UGfDAavQt4F1kVyXpKyD4ymATaMzfVCaEZqmu2BU1a8CXYP9",
  "key14": "sckdX19GxWSMcKn1tRbPu3n97Yc6UrAwghQctra52jqH4zNojyVYi68hNAFaCwQLUPmhKVKKUefZEG52EAgXAMr",
  "key15": "4rFkXhDP242GLGcy7inHjFiDYXymwq9FsnbWfptj1KiHtUqCicHgKtSb26U6uVUNzCoUZiQRUrPDAgXwrmsgTuos",
  "key16": "3PkHhmWyuoyk1jrdFdnQfzTkZdmMRrpFnGGHXSaCw3H6U8Q1hf59TS5bjbjJj4qUpgMzfdJC4tDAQqcRA5QLGHsm",
  "key17": "3966j8oRiCALCQg41ypws8SFwe7NTixXKBnFKS5KcAx51JrhQ9r5FXPtBVqKAQSRRj1rbRt1zceVETvypRtNMfe2",
  "key18": "4UcQViUei9gU3d9y5UJSdRNKZv1w2gm4uiQHG72D4skwy2UgMiu4uyYgKfT7VPebJWxgGf7YEeyp1pzbMPpHh6pi",
  "key19": "5oLgZ3g1KA4BZBWPvWnmk1asgy12fiq2fYWiqhXadwZNZm4brSK3oridCzBCouWqV67sNAj1VSf9M1tJq1sYRXx5",
  "key20": "7FZuoB7S7tPHSQ3CEdBxZx8kBsWxZy1RuRHKSjhpsADTTRLmBJamhyijRkxnKcbTHjC617mMFs59EJdHFXRu8D5",
  "key21": "5dsL1CHv5znUALQcpq5hk187fBJUdo8oFseKje4xWVEf7v5hceBhXS16kMUit5nByjPk8uKT2rxwYYLHeqqEbJ5r",
  "key22": "4bUC73xpJryydRLjK1Fg2dJe18JLERkaakveSXygDgD3yDpyRYBng77nvo6aPMkkwswCuz7yaXDVq5Y6CTVdww45",
  "key23": "3KZ8c1XRk4qi1T7djeog4gqqVpH18QqxTGsecek7Z2wJi9qS4oGtfncdz4efhZd84SxSoeCYXg5CM4Ygv1Ch8vWt",
  "key24": "3B4bsE2uFzSaNfuMtWUXEjScY5MtihkDV14XkqbzkcvaBUtLgDBgHB6uoCVjhXKXk8cU2BLgHd69aMMK9bpNR25Q",
  "key25": "3wbHh5RtQWeUwLHMkeJAoJh9ZKgkCsmnXDGUz22w34itmcTyEfjh6AfuomAkxtEgyMEKgGoQpJLyxQztuoaVLdEp",
  "key26": "5GfZH7yYivV8BGmZDWBJ2uL3doVyEG8wd2UL4yBobRSjpZZ8SnRJ93JW7Y7Vj5cdSUZ7hJwsQ5JmwEHvfxygtGLA",
  "key27": "5c6YprHYbgAvmUECcNpi4F3MTrir83GCwSvDRLQpjTENgxPi1QpGxmrURCV3PV4epmsJtvcLWy9sbtJsxgqRZGSb",
  "key28": "dhwHoH7uGX4ARFPPgPV5w15ytYsDUdYdU5q3jhZ2uoPjLWrV8ARk2KJo8YwD2pENDEhx3R7BG8b21ovCrGWFoV2",
  "key29": "bkkXvshFHe7CXoi3rPo87WKk8cZwUS9ityvQsWypcsWtvYeEAtySbi1ZHaJpCq1quHMCPnmjF61AjBiDWieUTVs",
  "key30": "2LCDJwKnz6L5L4v2pdUX5jYsehQc1bkLW2fD7smfofEabmz68XCtH3fEGMupu6vJ9cveoupsgi1x6L3NDTSmm8Zr",
  "key31": "3jJKLoAfz8QndsZyoGv2qmeuAqA1BBMEaVG1TPvyFXM83UPtFRKJsQwF9fMVF4JDA4dGuwdKqq98pYiEurKdDPV8",
  "key32": "u6W9HTwfeiUMhWtjkT7ZkhMEX9SCYCatawC3jFY7uzAzy41gxbF8es3SgPjquhsEDBkGkDWhXiLfXQBtP3YN3rH",
  "key33": "esPJkqiujBG12oWxxEou2bXAM5SbqDapvZQjipnVrEScJWCxkDH9Taahhy6Tg9ebeTWaVgp4cPYZ7BNErGysWz7",
  "key34": "3BT1vncVtCpXuBwxdnxNHmGebyhscqdxgca5c7BRmWaeT1g7f8sHPJPoW2hiDra2Yzo99r3YzYv15FFvVRmHW3LK",
  "key35": "5KAqvpbnK6HpZHWHVgYfq7L2FJzZCZyWSaff16xnEXUoarEq7HnGkZJjetvkMtzT8nF46bbHVdzJ2s2DHoK881SC",
  "key36": "4BzfGvo2EUekNQ7abGgEGpdD42tYSdKc19K6gPGrxW4XTZoPXFB1mQfVdQmdUpx4qjiGoojiv8F9QGLjyMCq4hdv"
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
