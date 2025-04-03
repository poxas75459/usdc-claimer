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
    "2z8sBknu24RkMYYLoke34WTn45YqCW5N7QeNz2UwKc942ypLGYibxiG7WBFCUJ5jAi3qbFcKaUaYttLPNcQ5XTp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z4P2m5ML97NbuGsgWcsf2inVTCSpP6ur13865jvxyimFFBHjQwoR67ww4xXMvtykmyHwADMZGkfdG76n9jtguSM",
  "key1": "62266474PcmKBiHiorCsXKo8Y72Y3jD38sjeF8cFs5Kd9cRmLk4HvuM2PRmYfhA6k4rWBsztSyQXxfQKXF6ERVMz",
  "key2": "5RugyDhAAYniPZycqtLKQcxMgp2t3DvZP7JJLG5KGhACogTYxBWy6LXf3xeCxiTsafsTTkZXxEBvFU2cNeBY8t6U",
  "key3": "zJSQrNRxDMfsndnSyvTHwvneuivFY1WoxgmxzciNpESr2AdNeYygBG2Le1FKgfh6oNpGjf11HREAbE9MDXsSAXK",
  "key4": "57EXkzZGZAnxKTUwYp2eNnsJ24C2SZ53tjVdfZ6493gwtdfSNB8dZaeQkNxqVoSFmZHKTeqpxtcr8QFk2pt7mZgk",
  "key5": "5JanTYTESEcmYti4CAHKNm7hoeJvPU3ghVDfkZUbynYPfgyZdWZKMxbKwtBHMpvT6dsNyZjn8WEwZPqX6tZULtMD",
  "key6": "UKwqA2xGhkhvnWPhNLBuBVQp9DEwfMweTNG4CswScxj4ViryuPFgTUXksxBy99Q7Roz6N8nTW24zM9dKHCrSF5V",
  "key7": "LPpeL9p7paGxqVb9bp4KKbqNNYwb1BT1Rw9PqwgKpDH8urMab3Y4FgeGXp7ap5McwUdeewQhgPkrEhRZVBsMZzs",
  "key8": "bKUjgKHhhqDzHHx69hV2hFWBT5TQLECDpVDuAQE8cn3GhxxMM8vNfkEnAchP9gnpStLYm4MBkF7NrayCNL5mkrj",
  "key9": "4dmrYFDLACW4KBtoNCuSNVTC7WQY5WHzyW4zn4G117Aiq7JTYwToWUqWpJ2vXoowgbp6pshtYXpknnZ5am5a4kue",
  "key10": "94LYtVrq7gtrGXLsDMLnyccR1u7FgN1TyjFMZ4hq81qzvkKZbqyzov7Y6JGHfTP8noU1QbKgj2xEdVEZZSxKd5V",
  "key11": "2a8XkMx9cEP4BRuBmRWE77iWRjS199Bs8AYoYLPkwFqCuzX8JpLoFJx7ktaUzCEfvk1LZpH1ytxe9wNicUZi724t",
  "key12": "464215PPgFQA4ogFMg2bjwJhBDtbsvuM8omrWHumdCTyWX6RyJTTqs8DVbo5zxnvXbbLtseXjGRYnwX1A3x6kba3",
  "key13": "49qPMrtR8ioPApUhe5QthpTWfwMb6cxKvTTDB6xAJq896uGj14mDxgWrtNEdkgJxMRn3QQFj3QTgfGdNpgHS5giH",
  "key14": "5PzpxyhHdwpRkAtbUwy4LAP48yyy55KhL1G473Z4XdSPWKfnqzo8WS6BEbWWxu14xCdYim6msvs1va6Lvu6sCGga",
  "key15": "4vZ9urUmPPu8uPdBmVoaXQLNFTtaUTJjuXRV2UBtheCGzsJmnBTZGoLYYCUrdQUtDqACMKnvrk1BbNSwhGMF8JUo",
  "key16": "YQiDffLn96LEi7ECt19ajTcZzVZxdiRAQCFz7ozqL3rxaAqY6NRfmqHfmVEL465tqi89PspNppzRL64xEfwPFtg",
  "key17": "5Pjjz5xoyxS3dK9CgbieSHEoMYk6FZpKcMwBiZqJPywbxpnE96z821mvUWppKEnCK7FoogQeirxm5GofEULBANJE",
  "key18": "52i8XjRdxWaeHNPkhsx22amzCGyerLFwop8zamapxkd5qYbgfYnHdnaWX6Dc2HaCFFiSXP3nJYroSMuTBfjRbxGz",
  "key19": "YtmgTjpLzeqraZgjwJJ9ZkZa59Czk2CfgYWqGrigNW4UKS8sm58tUxhKjoXksgUJ7dfCB1xCRc2rUB1w9kSoo6s",
  "key20": "4Srr2RqWF6yGqv91jFjYFEUGvRo471p8tpYzqJYQizJyYX2P6QRAvTwuEh1DrY2s5ydTbqGqjByo313WZDyxvute",
  "key21": "5v7GsVZBFvmMcoomsMztbxBG2oTHmEg1T3UDTZwSuKyE6fV8WMm8FxPqbgmpZZFgcv2GwmTCTt1ZyVMnS7aZbYPe",
  "key22": "3TozTM5pcWuQ8bAHiR5ixgnXpxoRWeM3uUCHqaG8iT7yeLJpT4m6Btgwkq37XQumqQbUidDGRDnXK361ESPms21Q",
  "key23": "4dEnNzCfi2qVFrpeBYxHiAay1cpXZ3brCEfjUL5e5YRj9Agwj4SaRXKF5d7EXnEqFcJ67KTFzAMzkcLq35Es2Ssj",
  "key24": "Yh8khPmrXN7cSh5Rop893qN4W6dDqF2rcB3JmMVMk3qHpzemTg9GKUpgLKaJ3N88u3DcdL58BM6p5mRHQaxGTGD",
  "key25": "YHtXf2K6pKqMjEP4KChNYRMwxgwoSyXv5eB5xB1ddFzgrpx5j37nFqCikfJexJv6aBPdz1b2LbcRAYMKLDj2CG6",
  "key26": "2aRErMaGtF7giw6XU4vFthMtgGSBqAd9Rhr7Wmf36iMK9zFqF7ddHnzJy8LvNS3i95sAUHXjNJAYkR82VyMpne1G",
  "key27": "5ZFwY1gdK1EgBV94XBku9roM9yURAZsnzCwmiSg2PtqjProAreFS31kFhmtVBVkHdGjNaRZCidN3YDTNhMaFczKE",
  "key28": "5diH3Mi5CB7X569QgNV78sjbRSnWXkuYQLN6YqKjExyAzwMqfuCmyDLnUwjmwDSyX8zCkCpQxfiqYcnna1FpcQRo",
  "key29": "3R3V6B9rkiTBBfZnT3LisDMfWDK6BdJ4K1EfQuTmJ62MnTkKrKmoJ5hNJQB37czJmn2nMFTEGUK2ed7mcVz8aaSH",
  "key30": "23PuGNG1PLoF6W5F7bCdGj5PQFoFNb8C1DCVH5YGugj1iQtFTuB8VfLcExebxaCk5xUeSpLYbFgD2a4sG1M6k3Sf",
  "key31": "5GhvLBERKen35niSvHA78TcYhAXQmYcbcFbnBMJAp71o17PYjDzNiyjt1WtQpk64LygaFi26mmmZmFVnHfDexZ2T",
  "key32": "56RLVW1Exb81ZfgwPv2P39iqmdGPfxwKWo3mn4EohmUKCvfsTTJkG73S75Hdd8KGCZ5hXobHeWRbcdLmyGny9Mk9",
  "key33": "2TGN7XS4ZD8EyX5E1ZpFapLyoxBdHn3PySLjvMeHFkW5fnGqMB9etcimj3a2fZ85jYQgzb7hmUw7hxTNYF5fq2gJ",
  "key34": "3Zz5bWiJJcbTr2tCFDTEz2XbYUPMoVm7t9HCTzdNKtnsb9cbYt5tc66Ayth5Nveb5E3qMMzdGaWc1t8c9Ct1keXJ",
  "key35": "5xQTeo2YTAHZXEmRxuUtXXtQKuQuEuJ3pp6YgQRhXorGdieP3Jrym3ygvgeudDVf8m3DzQf6pEakwK6Ss8nhryBv",
  "key36": "43TS2qRYuhTUVV6NAnME7d6PZXij98HoUqd91f1v1SShffo9y8vtj47HqJZXjDicRR3DWAZksD9EVvPgSHeW7L8i",
  "key37": "5NM1n2RjXhXxFA3Jz8QewRUddYYnAF7EjnSyijLGEJPUgt38yuPSSmydUJDNc9AQbTJwYvnMEYUYK9WH2fY9xh4x"
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
