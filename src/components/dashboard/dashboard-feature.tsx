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
    "3QtoWCMfVJLQvDJARmNqqUARwnM9HJ8M5YYCL7LjgfEVCGVu3rnfPv8noWXJXQWsFB3fM7qYJ6oobJFS7XiB7c4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kZnjgayb2vMTBPzZzTUw7pYmxFHrxcCbRRbpUfsj3uhXA8B7nxqxjmpK85HpEjKCj78LUPCfKKdBienD8MHjdAL",
  "key1": "2PyquCzqbuWMgjaDGici1ziAERYofj1PuXPyAAtSyR17s9NVhjCdYt2kZ2a4FCxPbzQAWT6GbmC1fqK3EGYgD1ea",
  "key2": "9XJSBzc9MTooBudiZXnKBd9kxaEuVXAUaMM7ymuJPbVGf85dXq9kijVED9D3wEjnCSxhFnH9WCbPpwEjcMCmC2Z",
  "key3": "336cSyfy9stQVFN4BwRh7rfSx3ucUWniph4S1uvk55QJ6KPhCyJ2KbFwwQVwoEz4mEaaJ9Eu98qavVdNiXwZqQuj",
  "key4": "4z6J4qZkM9M9KA1UaxUAyex3UNcLaANy6Nka2UhGNeViVG74yHrLGhAJfEjhHnBZAsEGqJRAvZ27rmQE3hwYxiuM",
  "key5": "4PtZAReTSXfwDp89V4KcpmVyoNPZzMQeUJCAgi6M8UAimmNhSUXHYSTTbZ4BpzoUTKSNnmmZxjVsQsvkco7nCMnb",
  "key6": "4Uc4rNF2wTEFxFDgyHRUU9tgZpDwEmuS267Etd4w5h3yYMe8MXMpdqs1rnboxu37JD6Cn8DoWQN1nMiUNXMt2rGG",
  "key7": "5axZ9UgLvyp9aeqveVJ8GVULNCf62YjMqXnkmTYdzNCy2WGAvJiHVsNhLJAS76TLh8Dn6be7DemLtUyFz2H3r4xb",
  "key8": "TV6D3j7QKVqDrBjcv6V65mizVpXyHNUtRAHob468tLuvj1BYoB4cpmSDNjzd45NkKPcYXgDZubr35TV2jjgGizY",
  "key9": "4b1wibyhHrvhcpcuZ88MhH7tFhPk4oUM76bN1ty3jeQDGVnQQKpxJ9ruzdLPXEWzoKxe6MPuMmo3vATsjUyA9Dik",
  "key10": "ZPTxJonwHQiRfnduJy6iWJV67hKAvhAyQB9rkKG9wNVS1TFuzn6XKpZ5hxMQrJrepa813ZQmKhJH2ap4MahUbcj",
  "key11": "5pkzEPRbHT5Tr6CB3WK6GBc33b86PtM1zcPEwfVVCosFR84qcz3YkreHTu8gJ14kWKdixfb6VK9tLFjA3Nn41Din",
  "key12": "18unHnPL5dv7d5dataV9uZ9sxhuVG3G3VBFDu5dNjmDyKMf25za4UKWp2Xv98h7egh9WP2frTaFUGaZqay9NXkN",
  "key13": "4bTQExmAbhzFzrPo5F7M1fuEiW5HhBwihTW4WPRVG3HT35NiAuooR3i8dYmJ3hmoB5aLLpgtzFWm5XpMBCpQ7wJ2",
  "key14": "TtfssR6SEh99qjmxfQAU7gNBSvSv5FBKiKVcihCXDkZ442Bz2QoSN8CPGVeLnAUJniuioTXPDoVWMViqiua63gQ",
  "key15": "4jwofjDCTvYBLC9XtGVs5ecTBTE5cXz1MzMYLKQXiLz2KrmNV4PT3SFeczCJi4ojiRnUoofuJtD2o325dzLoPvBG",
  "key16": "2ns6qBj3prvdXxLiCZAcHeqBWmm7eGdDNDZQHtomRysqxBV6iWSCi3wHvmfwqmHR3Q5MjfDPc6QcsDLbFwvbwksk",
  "key17": "61WnFkLnUcw7nv14VsceQmcdnejY58GdEgE7ZkkwpnMitHBMs6WoBSWdYYWKu611yssz6bXtXSiUEYSDMMxpMMxC",
  "key18": "2zry3zPpC9EV3BU1qZu2rCBWm13HmUhsM4yg2aVtshkAaLhCaiYJVp4YDTn2s81zy5Du5ovMZin4hcL2L4gruFMy",
  "key19": "YSPNuVadSXZaZnCcego9YPD5JG2KYGcfkYUwgbfg3Vy3huNfh8nsmPNSt5kCuZQCr3jta82C8C2Af4DdyqMpTey",
  "key20": "5GUUTn5YSriGRHTuP6Gk128WjgrvQUWyMxuC58PnxKzfjXTnXkUgJZmUmCvVEbAfkgEcDJ3Nf513AXUd5ntFQwfT",
  "key21": "2QKNYoKdNF4ygCsZ6L3TkvmHPnhkzMqzL253DQywLuCR3ha9nz31yi5mLcmRRZ7gBdeKM6pU8UoxwfUrEn2SRpi5",
  "key22": "m2n77fL2GfzLUjyjFbhAptUyUz6VLg4KuYFxeU9mF95RJapmhjaTxrPmeZDBwifmhnVYsSYVHBaqqCpLrYLPv2J",
  "key23": "29wmSaTSRNKqTgZ24bRtuhCgRwk4AF3pGncBUSi1UHLAYWrc5uwkRgNkp1nuYi6E5tEjSztXgKLK9Ycusnr95fhT",
  "key24": "5YMD7Q76HHgN3xctAxo4EkdFxEAGenPPVL8HDvSzN3kb3hPpK5wb2NVcY88JGxX18UqM1nfNShWniC5rg1KYk9nH",
  "key25": "3bXfvozeXmRE9JznYzfZXYFqtVa4ZLJ737cqV85b2W36it9XgNM4zgXbRQVnoTcgWPU6oxqRctQVb7k538VLciCi",
  "key26": "bqyfWP9dojJczqtLmVbRq73v55A6fKvfFPKBHBu9RYd5yNK1HPoRt8PqNcp7ajxVk8i3tw66utGj6eJ1g7wqAHq",
  "key27": "2VL8MrUFC1aeeu1Y21K9S97pxCqFuo1zCigqAvmTxcsKX7ZM5k6zYPVqyF4GHPiJy7Z7VRYSCfGsPU7vUweArxeT",
  "key28": "5p34dbRCKctuDZQNJCdkandQQ6yUwF3HFDqZDmEERF91yMd32HrVEKye3xM8nKJQxjvuvJCGo4fXXjMWvV5xSW87",
  "key29": "5Vp4SvHigVcEHpugjsc9ziWNidumr42y9X2AcgEr7vwrpeUG1AsGskL11md1ZVpiVBwnVMjfq83AK5Kf3F6ykhB8",
  "key30": "wE3msjRe2mgCeyKtmq6nHFJLY6goABn3g7KuAmfKAyLsJtiPQGkxvxqBHjtAVSHLXKYRkJEu1VM3NCvQ67UHhfU",
  "key31": "4QfLy7XiAVb2TamhSHrfBFYG195sBn43aWKYhh8bZPzLsss6sdu2F6tUkXdVNKWhDV5f7mfpntCRDmdyuPETRqQ",
  "key32": "UALbUp52DKwDNr5YuBfVRXQ1YBv3vpAKjdwy3w2MkrfcSznGiJNjaK82AnFJ2zjJT2dSnNanuXuh7Rtna91d8fe",
  "key33": "aWKNN74HmBpqCHmxYhT4cCjfow8w73rGjGyBxQ7dirH57JGf1sXG2Q2GgeP5XZrcwuyvSt2degTeT7qyXExbot7",
  "key34": "5CrkgRAo8mGsNxMgkF3H4FBMuEqre1VRG5pG86FrUGj5AsVbLnBYiBLuiLaYm1SwqASdPyS2fTBgyLH5tEdohykJ",
  "key35": "4zocEjt6jGg3pY8GfN63hUEbCYKYn7n2PWTUVhV2WMaBhp7zPwvidEK458DhGiV3fCWUXw4PfNpuEGLo2hcvqrpe",
  "key36": "3o1ojTpDsZiD1hPRp5erUkLm8aHcQ3yybomaiMoPxNKjxT9s8HXcbe8k7aSpZWAKYjhGptUoZgPAwjrC5GMPaFMg",
  "key37": "3ZbrvXtd3iT2RCrndjJ62RHUPkorEVQWPf7UeWLGd3aQPqufC7yyDgck6bWheUzeXBkW3JMRTyEvqkppSK5oCTF4",
  "key38": "hhCN2dPuSTPadjBa4LZJagRVwHUkGkUAoSWbSUzKf6e4kQMNaZVWwW2BFDorMTjAAaxjudissH72wcP6BvEB9Ss",
  "key39": "3ScNiHZj9mBAhJiSYgArEvRFb8tDm7YZdPwG36kaHfnHea6Jp6oU3BzbweaY7xNgdJWfEPrKxo6Y3NjY8USqurDQ",
  "key40": "ytJ1sx3HxKsLfot5L7gRkgQX49H2UBL13yfL7d9xNeSuMhTqxiK9oRq1wqWsYnBQ8MH2fNnQK3v9rMvwvWMxPF1",
  "key41": "653RQmDQdaqeDs3erDNmR39s7yMXEPVVowoss96TtweZPGToxqAaNB2U183nBtY5Ni3Hr4KbgnEaSQ2tNhTKSyVm",
  "key42": "2UGPNwjs5NJsboFe2pgVQdNouvgYpQBCGCL3SRTFxPRH9XFWhFReJdpvrRQRXeaRVAkafcosTWFQbAoDvEG22XPi",
  "key43": "4MNow4mgrPELHpRTZ72LwpdRVsWk98U3pcJFxSJpDrvATsqc3p4ZtZkzAKesaxdo39fEspfqcEXjqw87JDxaaHms",
  "key44": "5sWcPnhBTJCw73Acq7PkBr8TtVXGqZuTaenDCqPTPtygE5cXzQrSqJo23fwT79t3E7zs7SBUiQ7Udj64weLWBiB8",
  "key45": "5ASFgCw87EpiQDvxQJo8tMserNZcQEn3Moc3D9nqScCH1rhhMLdixr4PobKYxDNNELwCBfoJdDVffQZG45QQZy6n",
  "key46": "3LtKL5oYQc2tocrLQf6f8o5Q6KcmG1kRL4P4zZcUiuxkbUCbvDv4pzfpyCjfd4J5xRFrjut7Kj9Skp2fWbkPprTv",
  "key47": "73cSp5M6er4NydeRG84NGkZz6BMrmBBDSqtdSQGvNGNShasrQ59YY5mj5eYoA4GXFBjyAXAbx6ittH7qgyzrk7V"
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
