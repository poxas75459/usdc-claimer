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
    "oAgw3u7tw8LyRPkPEBJkaeohmq1PPamJgUFwrj3mmkZHwXZrWAz34Hq44aheGZdq8ETRbjwFkc6K9fg7W1Q7UVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MVxdCoekvBWxngMCugcwzMCDk953znaaYbMgiExnvTLNeCYC7AVZHdqMwqcUamD4BQoWpHkEvcVVB7J1UwvbgkR",
  "key1": "45kn1Wet5kCc5zjr6KirnFCk8q8xqzyJVud33MxPNBMNZz2GP8232ZvRG8qzZ268hCXuQe4to3jXmRHhLVUTGQm9",
  "key2": "4jZpfyyjyM3aCw5A7ZhuRag7qakmL4mA5jepA2XPv9AQLYLCyhgiN1TpnUzrmBzSEJQtywYr42CUHAD9MKERSbsP",
  "key3": "2b2URaRFMwAGCAtiMqy2mZPgdbGwgHTcgaWLuBrG1VyjqN1pbEYf1qVzHZp6pD1ivVeFT4AfQNXKh6oC2LKYiomP",
  "key4": "66MkiaB4w4SFaDBByAeDR5aFdEgyKcje6pEHwqsSF4MAKKQjYqWewUqFBNWEtTqDXBKjgoooj7UejLJgDa4kUF94",
  "key5": "5tYCBJ41SBYxV33QVP55T24Y4FdLi9yypNvWbkskSr9HJQKFgUmFMpehzKbaDnC8sJMi8mdEV1jLn8YXtXy9pq6j",
  "key6": "HmwAyR8MAFztadkcJPtnMDiPk5ypvySJukmVuGUFzpzd9WPzvZ14SWJFL13XxNaivZn23TixApqhe9YGJkkBF9Z",
  "key7": "3J8XHLY1Hqrok8zeNQiCKxprFTM8wbf9hm9E8jd11fdMZA86vyKshJNPf2P11A68tv5fdLTQkarbzmHChRRTrQYQ",
  "key8": "2uTsKLEkvo2RDUFbeBhBFA9ac8nq5LNVX5Yzo8chtz5hrcKUwQjtXcq7zN6pWJVBWqnk1chqh99o9dAS66dicDms",
  "key9": "4Uz1YikRpTWVDrmKXmkRGLXDRU4UaXx4yhT3ZYJVxzxc6UkMcdFGiwKeuig9Rs9bjJng79nrzbcZ7o9narRjkRLq",
  "key10": "4jT8Er3wookD5fXejhUPUsFtYa8pRK41vtDXGbP3nhE9JgHjcC2247bztqUvvLeRZ58f1GkAtw6Kq73wRzGgWcXj",
  "key11": "2mDMHZptfstrFZodt3MEvEJ4jDy77GppEHNynwkjJzDcDtjyrSuVMEYYyTc4LxD2tZDVEkYkzfCzsmmGBu9DM2oN",
  "key12": "M95uA4izQweSGCBDYJDg6zPaGVSHiE3xegfgYcH7uZYs2XxhVCfvfGZE1BeXehgXwXUWoYAYYYKhkU81MdW5J6m",
  "key13": "494zemTKT77KuyqLTixnqxBWdx6af8FHRosS7vuzBtLLvPNQDEdMPcBXfAhZMEPw6JspWzjhysUDRn7UVHWvywFM",
  "key14": "5uk6J6yUt7xGP6NR2zzMCQQqchFSynrKAiwGvsn8oB561N8AnVfvaCh5N4ieA8HmMLb2Wjs1X8fcM6h3ciuTpe2A",
  "key15": "28aTaRp3owdvRbtmhKS7cquTvZwh9xLHcrSD5VoMhtHGGSWgni2kgZzrT6XNMQPCe8RXXY6jGKQuxFqQu3X2VBEn",
  "key16": "29v1ZVqJitcRJcH6Sgw8UKV9V3qe9Hj8Ueb3nw63xYQWqeMGL3Ku7oqQNnuYaX4ZdgMJVCMu545HtVXQH5RvJob9",
  "key17": "ZHYzDB5HSTJfDxvD17a8BqKkGFZ9MRBkCXpdb6DsuqSCZUeJn5nj4GTFGn6eJsQuWJuDYZfgM3EPyps3pDsH48f",
  "key18": "2LwFXjjtWmsKF2EfcHVp55uMwHyiZbdDn4QZ1pRZT2npeASe6fVLkm9dqHBwZvms88tadYDNvHPLFdPNrmBxmNi4",
  "key19": "4in9dkHwA6yuEEEDiRqsvxPrvJooXcw2HNqtHSXcfdjbuhUyeza9fXE9Xy15CgAmDVadX9keH2NHPsfA8UE1Rv87",
  "key20": "4X7FPxkEDUj6SHNv3s6i6tKHsUzMH1Nd6T5pvdpmXbWW53LfZRUFvUCmLkbRknjLLuKBzsSsj1mAM2fx5wVSZmXz",
  "key21": "JkwJC53EypVjcTxBsEi7iDbtpNQoZuGSTenhrtSRhqJvAScvavxZ3wxxtgdfHTAtH3iB7oJ7Y5n3wHo7TdvmzAP",
  "key22": "TczTeY46JspcyNM1u519gqafJcuNkPaGxZi2qqHpyriXatyX5hJUv5X42FykHGrMxwzEmFYk6Mf8MhyB4okjKTU",
  "key23": "4r6ZJ4LFaJg9ozrsAWjjKNSaF6gcjhH932cnpfBMroChGBLdJzvF3Fg4HBQ5hiZbnW7TUkT87k71v6Hv5KwnyUpn",
  "key24": "4hEMeqZxVTrN2BQUUiY3gNfxGU4kkM3MRwu9op3ViEHH8PMYd7hZeAggucTcnjN2MV1okRLJFAqpUv37CCEfxVtg",
  "key25": "EyXqPA16DJfN1c5TTPVogY21p7NTJKoMpxvqNijNAtZvQ1wEnj1mufEwDzsM8jY3YfvSgqvepUEwtUmB5i4LGhx",
  "key26": "2Jba2yb4pcmb6aATRts9x8yyVWpKSTTm2MJPTsRtGR1jMYnJbBCUxgE8PsYd2iymYW4J3dDtQvjcUq3dXWfmHF1j",
  "key27": "4ZT8nZz44hJs8oBPnGuP6SyPRkfv1GBT9RRYkQgEZhNAcSY6Lt94bWS4qjbE1FB1J78Lkoy9E5nWxLN347HGrinz",
  "key28": "VFftRD4ZtFprNNGgCo88Zq5PczD5bB1B5NC5DGsej2w6h3eVJfyYm29zoRmwmEHvi9nwgWqSw49UPcRvRyTbAtA",
  "key29": "KARESnrXBBGZCgGXT6qizxvA2HABGTjYwU9rEDrSXTsjjmD2uzqPaPQJiEa8wd6yWus4SiyiWwkqSPWnEBAeTGZ",
  "key30": "4D9ndZXUNGeriSYiY3Sfk1kTg5GMjZbDw4cGcdmiMRb6ue8mv7pjLMLwUzSoQXYAE3EgdGmRT8aTJ2CVvHEW84Qi",
  "key31": "nvcepwJ9VfG6FX9sfRRW2ZYStsCN2TGqCV2GW4SUL7KG49ejyb2ftQUBHCo6CKsu99y9WW8Fmk3rF36geeRtopA",
  "key32": "22FU8wSGFuM44us22dazXXHGZKFe86XPM1HyeNvXSjiLahgq4pYVp9B4Jvb6hxSetaCuKTFvCCZqtymeFqwy3XKM",
  "key33": "4rWwW6NiWvax4ypR1vAzjL9ELyyiSK6vZidx43HLf5diZEzzTqA14P7isXT95NWLer7rWewUv5az1eNjbPkAbb1N",
  "key34": "3cVBerspirmbryLYtk2aysxGBgkpYpaYJdheD5F67UC8TFwnTAJNTYWHtvtzq8Spi4u2X3rWQAP6qNBMNpKoE2vK",
  "key35": "2d8Vfgttd2J5f3sYtVmzqfn4feEBAKg9Rtyk4mb4VCMTh5muzyXge2DdqxkUxj5VYeLsuoASXM51YmYMfgE8cmdx",
  "key36": "625ULoWxWtHKD3pqnjP84UA4iaB4aKU7Q4T5gJUKTtGa5QpXy6T93sdnrwuAxq7D1WpxEmt4daifNAHByLwyXgaL",
  "key37": "5NFtupkBCm4SkJWXEwbQZA8KuscFUNS92eg912xHCccmKqMoQPGXqhP3YQgfziYRDTQbEXNMfWZgY7egJs74u491"
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
