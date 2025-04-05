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
    "bsKFo3rz8um2ik4cgDag6jRQStvCCB6bWZkRCLv3ZwA8nUeg7p8eBFLuDPCdmoR1AzAZdhm5wW4QTLGxhD6Kurs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71zZ8nTiLjhK3yxK2sFZKQ96pYUADydYN8iZvb1LZUQKBBKPgsBYKQrwH2i1Nk77ubWFrYccnBbb4uUMC5Y33Mb",
  "key1": "2ix8zYtVmX3mW92Mu6nBHcEwYnrRqzVLK5JSYfgFg1R6ZnFRvAUnqrDMfs7o8tHrocpBQghosZJHHgEtAB3oyVQF",
  "key2": "aT82e5Hkuvd1RejYhA32WmTLTkF21hN9zWfzcXMGoVMmaEicq4iv4hHqxEmX9adJUpdiy9YsxPVMYGJWo9TfbjE",
  "key3": "X5YqJzNHciHfrhuhzqdMiEPcekSLbgBM3jcNsMCqzmkN9cfLhuG64BqNd2w5CEMhjTaNLYoRoAvz7CT5iWB7XQ3",
  "key4": "58EHGfVa3jBEvKcYdMwkTZs2TvP6Q2871etVF1fiPT4Q2fChRhkU9ZmT6SaeQKpJ4DdFppDkU2VzWks3VNV6Xsa4",
  "key5": "D8SyLDmqTHw9G5YBAhKhu6Pc9qxfC8uQrMgH9C1NVwni9o5mW7zvgJo1NBeTzfEWJdnwMJnQfHbMWu9jK1BYJR1",
  "key6": "2WXjpuiSZFSotQDpGm8ENobKiQhoPD83AAdsbTq6R137kDiX8drjyVCvcYL2nDfn4CYcQneMNTVBLTRm3Npgwpvb",
  "key7": "5nndijAp9XvBD7kSJb6A3xmhB1uWwnkyQzdtxwpmsjHNb2Segxy6qu6HadW8GgucXZenMxmyqZFUB2fmv5VLq6Yg",
  "key8": "2hDPnsYjjZRrYGq7WNpChug1axUeUdtwq7sTDGHrjWypB8getrT1Yd9odC4Ai8sYYLbyy3D9TUdr7A6xs6jxix8d",
  "key9": "4cZPQxbeNEYVRK6xNeEyj4me4jT26rcWpxb3iaEozDFTj26JqTB2ozf3ixUM8zjHmreUvTYMKMFX8r7jrcYKK8Fz",
  "key10": "XqU5NtF4WeeYgQLyyayeLRLPEwUVtAk76MMz6FfYiisjjLykPG1oF4rbAakdvAHGVLEuHqN1yA2Pjf6V59cCYww",
  "key11": "41mx24r9nxU9yckdhuEF1GWFUUc3F8UBQGeitkEypC72rkke3hvshodtU3rxvfL18W5CqPsL7APhzyevWNjyi2SY",
  "key12": "48CN8uxivjrf6yGpocQaDgWiPVqzDcqdSJyMqiYuvMaLMHY4GGeR5v38QXzM8p7cAFrN92tVgxz6vM5p9pnH1hfL",
  "key13": "kNgcD1a9ZvfbrwiHpRghDrBcgfCa3Ctix3AqxVYSSAvhyB9e3FQ1WpUeG66xyyD9VfoMbF3azQ4GC4PxRrFYqGD",
  "key14": "5rigSSojyQgJnurSkXecCkjzSsvXEAFA1bFpiJURriedhPeJzcgo6W9PCsaapRo9sfkjqDWducYwzCBpY5p8mBth",
  "key15": "2d2VQ9iFvG4R8EyRrandJ4krX9fuGSEDJdavCV8mw987FdQD3FeFPnGFJ6Q4iAW2YJnsVPPBjuP8vJpyjPJ3Gddj",
  "key16": "3Bg34Xwv8SWn62ddC51BnyQdRfo48Y3CrqFZhGdcg1PEMWumzj98DeBwiPiF4pSssmPrU4rnFcNHCr3T9LQQa7JB",
  "key17": "415PcuBobbzkzUDtDfBrB33kypU4kuxdFvHQk81DAXtTCzC4fX8chtPE3yCzwDwStLtT6HscjXVsr9rMmettFtir",
  "key18": "231RfVTfaAdu3TqE3PSoUXLTVw779Pck8KLid9Sk3s8tyU7m4RvSqfNbik8cbsuvZMyAYJNwBtsQv5W28XZwDh46",
  "key19": "4nDKx1ah8WfiEAAgaMJsjwHRHiCRJLijDy1Q4JVWqnFG72kAeWrLNbc529taiaUTXRWvgnYuoACAqj5oKAojFo8L",
  "key20": "5c11WBriDP7z1LjoeBBmgVgH9jqha5iSYRkm4jfAvb7rxLeVmaEVzvUpLkeQW3NycYojGuJHTzF1jbEN7vTt7zxd",
  "key21": "335FjbCE8wK2MEHxDDqDi996VePPzuDThwTs3AYjcbBAd6kftxfMpTUc7hhzJ9vwTpEhsNYvGEf7eeJCqcQgMe2P",
  "key22": "3BQyYjYXhzWqusoNHbByFZMRqa68haCfeo8nRvfuSuEKnMkXDuvuJUT5UMPhmHKPA7yDcxivC3ALQQmGBCR9LYWp",
  "key23": "52Crvhm6gjJgXuRE87uorxfoVYrbkNuKGuq7zRvYtGzYHqFKVFNeiiyhqiYUugxwbKdsPd4kRk1BXSTGhBAK1NsS",
  "key24": "2zvoKM9T8a7Ye4DSb83bquBeGJjQbj13g64R8KC1P351F1q9J4uaBcseXyEceuisXme1RpBrgnbTKpbSGx6mEid1",
  "key25": "5EJfDxGShi8y25TZXSkQNJByWKmf2NcdpsJB1qEkszWHVzkYqznYu8yvs19apzAjHVZDQuUHHCBsSwCgcU5v5FLZ",
  "key26": "3d7wrfM6tEGTRn8PxyA1inu7umUPaqmjPGPGZW9WbaGB2bFMASgj7dhEc5q9GokiTXeL2bUs3cemMtung2dqwfmC",
  "key27": "3GTrd5W6RHdcDNWaXBv6hGEYENpqqwdPtqmPReDe4hLuDvsuSancD9atceF8HCYN27iRZFBRAv1jAsnYT8ahTmC2",
  "key28": "3PJKm1bjUZAic96pmURoXFDRGQ3Bi6SRGP7hWTh5hTRLCNqiGG6uBWXHQpK6mj1tJXS2oT97anbL8QU1yFJHQdJQ",
  "key29": "5sxRKsC2gBstQGVwW1Jk2SArcLQLX8zdZzytbA4mgMdmTnP5DLj7XR9tSEcMmWgWeMjRngxfiQKDxaM6boN8Kqnq",
  "key30": "2aYsCmaU42or3qm7vvQLaRZXHRsGLN4BZySpbPNbHM1AKLogqcs7ghMNFUVpW6hmeKfXtydJhdQZuXVPeYsSDW4D",
  "key31": "5YDvAwYJ5nJGGT1EELQPta1qZxEkRr1G7TwLZK3r6Kjynp4D5qpcEgacWuKZh3gHmyMysZCrqsyWSS2yLr1vxoCu"
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
