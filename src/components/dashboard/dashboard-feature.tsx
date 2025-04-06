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
    "2cmxQrP1amg3os8eDW6opT5nctw4J1v2puHUdJwt1NHxvi1iutyPaYwUoWkhzAtXdXXycAHaDK2kL7rmgmXaTJ62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K4hcQg2Cx1buRyiLq9KPztk9vubH2SDdpEGFBY8THpvRk1M1mXte6xZZQsLAty9XnhLVKiErKTBZkygohwdz6LK",
  "key1": "3ZYWwRBe2k2dfhTY8XYLyai2u8JnFSADWmAPxRUn3MRRoygQ8x2HWGPChuEFBRXj64jfcdkZiCrkVSeCPvtFE2R",
  "key2": "4CRY9rAxLQv4qoRJSa47m2NwcbNresgXG46o1S8JgW6x6cBmxWSXyZXFrLjiFkgNqTHifCqAMNgktrCMMDx1VVyu",
  "key3": "3s2ckYfTiZ6HrtWhKvbH2vGV2jeoow9J9seEs8vSyuhftBvuiQJinHjEBHAjQ2DhPmTP2PnKEPGUc75FU1SRPsFZ",
  "key4": "3wCGbhoi9PUAo4Ax3nWJBe2wpuQxGhzxkMGwG6dUd3QGhVmMswPU6oFXBKwHVpsFyedjScgmQ3YTic4KL43PaVZD",
  "key5": "3ESVZdREsDDxtP4QhVPGB4dyQyTdrApftr1vbfyFe1RgGf6T7zggx1pfdvKzdxoFMRR2kia42ywyS6x8EDnVKkHW",
  "key6": "3r2UrZvSEdQUy8ri1BGi4v8bovf9sD4um2EESEPs7zKjioSTN8N3zMEfcX9kHKbxDNWZdb1PqnzGek2vn9vTrd7i",
  "key7": "39N5V8rfHrn5sAnhiBHWLSn2QRbzm3vjLWVGGduXCGGaiFJJk5BmAsZiK2fxuKRxwdd5paSHtQj7rP64qMnRMjn7",
  "key8": "2ByDJp5D8UYrS3FU4STopmviDUsc1ReYD8R8QhsAyZdpRdFyJFaN96UHxtbWj6xynbQsq3Cs8U4XVKgMGrr3YMHH",
  "key9": "2XyzVzyECQJ3CKYsGj7jDCHv4GJ66CTE6W8o1TZjELepUUkmxQTi5cDNnGkeyMajANrBqR53hNoG92fSEm4UzRaJ",
  "key10": "5Kx5Q6WUHNDQCAQZQ2sDJ3n5RURwBucxfdPtyyFwHmxma5Yus3zXoLYSt9pSaVSNbZo6wCEN3xFdX8vvAkZygaAk",
  "key11": "4bquYGrXh1JCSfio9v3t6Y9i3Q4ECYqEtYuNbBi2z7zogXkV7J7W12VQhYdVpduzcYDUxNXDHSExt7X3PDwGrCzY",
  "key12": "4aLkssV3XfVFBjE1BzJ5moi8XwvaKPzZqsmoq8ELWvsyqE3P14sToEMXzvWSu3Ua8htnDNBwFzLZAWC6CyT796DJ",
  "key13": "BbV2xYXLVTyFZRFymvc7Zp6NKeJjcZz4iAoPm4tNvmx9pLEtomDLKvBxTEi2AGMWNrGBkWyDq1H7T3HHKiUnyfW",
  "key14": "49iVrSnEPUQZN5yMgU41EE3J9ZaWfjWchyPT8VRbEVmG4LvvQ3e3xHwuDgszMnAjVedFeVXuK5tVZHdMAAJ7n2E",
  "key15": "2PaQdnuKR9y95ziWDmqD8tJuL8Pm7JroX5vdqbmBYbRfNBxeFKJgYPqmeFQG9vyF8KjR6gRBRHA9aYaP8gEDap9Y",
  "key16": "2vBsfJS2ziaGBTEDGz3UziCtvydQyCnBFDR2mZVe83zgiEcTSvYdiGsefEWitCZsyscX3eosPA81XVBnsUESxKBt",
  "key17": "C1PoHAo76LadQhKbc1cr1wmcmLqSCAGDYhpzEWPUTGsEd8AM3sLK15VwGyBrFjJxkZiGULByG9QhFoweQZxWCS9",
  "key18": "5Gy4h2KwCCZBPFYUF8fx3npjTdW53trCxrndKny75qRF5Br8Wqfcq8nKnrWRJgPmYBgVnLgcarYLUmCZyuAgagMt",
  "key19": "MFVRemznHw9Tbp59bFGj3gPHaho9k2Vgc2U8hUTp4ZqrhqERMkNcpUR8aADzmp4MqJFAB4uDqj581MuMCqGbfsp",
  "key20": "4LFGVHfXj9zEeEX3cNGpxquUbJZpFpzPsaJexrDVHAKZ255K7FdZU5NLEepQs4xeQnt12nnRk3itCJdzKC3Z862j",
  "key21": "56K5TyuAy52zBUjQNHtthNEPR5MihivG8iSRfxdAp9YeKJV2Y5FxegArLyPrkM1VvMLd7WsgdDdYA2aMaDkchgMk",
  "key22": "p76dn91yNt4TbHrvCddReC7GagV1a55c6VqosTxeYGfegbyM4hm9tT4zwv6goWcNuswBL2WSxBtj3KyR21QjgJJ",
  "key23": "2A4ENFjPF4K6RMiBeVHDzk6sJTmmbufNezj9NmUxcMf4XcRJPM5rFGkFUqut5JTitPhwcsyvRD8v9zA56H64FaEq",
  "key24": "2YTa7VgjSzz27HpVGyw9frxDrfnRQVTwfWgnr8ovjRgpa2sNwTEascPZ9LQbBeVTWS7dsKXbHdD6uQPchKsxEFk5",
  "key25": "5Nq4jWwn3FRyVZoYiSywr7vr3WbGVEDWLAZXMunL24RNyEpfLCQG9Qv3cBybENbQusRENKCkftYmjnC6w8E6cKTx",
  "key26": "Xy1iuftpM52ZASLcYcX6thqynDWmw8WuAx7MKLXcrHuHKEdR5VYGpsD9tT3PCZwZGJmw4NLJ54w6EMbCR5LEMs4",
  "key27": "2gP6tLG5DaeLC6ihKUCMBAUDe6fzKXXg3dZCJaDhpLguwPJrbW2T2r26cD9g4aRf3cpG7tUB44HJt4RhuCRXKyiJ",
  "key28": "5Nmj8hTWETfx3SpsF3L1L9PwW8MAaHVLWYoRFfaTqeZ7d5oNtyhV9fqFdsp3M4sZVeN4s3YoQUi4BuGfKPfxPuTJ",
  "key29": "3Q9g51Tu2txxWoiq1fPQ8DKbKKA9bgEJbWksyrNZHTot9ZyGFR663SANJMRC3uKCDBEeQFUw4LdrPi8LfybELvLK",
  "key30": "3p7eNErn3ZAnpthpvdZmcRvHJ7oNvL3qzv977A9PentqNj3JLiv32UpALTXbfR5pVHjAugLNca69g5aQ7W5UdUTS",
  "key31": "5rEcN3xCtqhXwWmSwfDEyPFRQXpSv7NgheEukptH9cCqY5ma8hhepa7vy6fMgyxopv7h3UyxenT3GkMxW2a9rjyr",
  "key32": "4F9CJmBvTmnwyZpFxiXwdGuYKnhSGxNjrwcBws39PgRmFvM57BDj9ZT5BJZN7EtetBXvF44FHudTiGz3v85bTweE",
  "key33": "3UjfFMXpwxxtxGxvZAqfoVocww8neQRe4qbFfWXGSAy3Bi7ZeyQ2wF5drqvTiYChc3pVjfNhPxdtD8oznFFtDXVT",
  "key34": "zrW8jvsMxYzeHd1XM84b36jWKezrMFiGHNY5RTWsZgERpLbE8tpRLTHFvcQVmry4iJgTncj9Yxrf3AGj6gmaddS",
  "key35": "2mxEZDFVgtPjov1wuhCh5oYaCu8aKxtn1T62xjCVvqNdY2APdeUX73Lz73xePCyApLT2NHmtyoUYdyUPQSLXXG2x",
  "key36": "vqzNdNAbZf4fxoLJrY2EbHoTrmswCpRFCeriCaFManaGUZeZrCkfLbhFjMoy2nYMnYMo88qVTvtCYj29W4GJPSP",
  "key37": "xa3k5r1mG1nz6G2djtPqRhbrFkeWaDmTqLtsUXhFvw8EG7gjrffNqhT7EVbmwik1cfi1fq3kAs3KwPq2SjMADXu",
  "key38": "ZQbqgNanqmsLpfBMe8HoxhMkJVuRev1wyNX8N5gjtQMN2yP1J2R62eXusvgXBAv7eqYXfbxu2hUL9zptZkNKD69",
  "key39": "5AHgb1xaVbf5dJVVcNATbuktL3Rhh69GXWV5vJ2644WfzMZNdTxuSvD1f24DJCskJuEuk1LyekLiJFGpV1HJ2ArV",
  "key40": "3g3aqX1qncaKoxG1sTWUfg1aZJpa9NFwJLFjwk6sRj7BnCd8rheWNJL4auFNG94fNC59m3Z9Z2mDxK5xtMCEG4AG",
  "key41": "37133Xvdn3ifF5afvgP3X59yVzETzGs5X4uoc9QNteyp3UdZ8H7BKxbTcaWqVYegSB3epB97tfZG8NPT5eF3X78t"
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
