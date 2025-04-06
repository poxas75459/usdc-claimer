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
    "2F8nVSYJvJcS4FHdCJi3miVsJZSTg6QYgCJzCxKfhKoSH4VU7Pkj63qpxPv2xchDSt1ST7s7GE2V62Yw3ewMKLTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FnP1T32tVBTB1RTGrNXXWkofUjub96DBwLTdrZog5fkQNsp8LNBfntcVbBJVgk6MAF3pN5GvYgAobwNGDLrnLs",
  "key1": "3ysfrsYKo63EqqbkpRu4SLqJzgkRmYm288MkcEg6WgtvkBqnBTrufwaVPkYqXZns9ahoZVZh85o29EGitS4u8rn8",
  "key2": "43rfpnppK6hLKdzMqGawXRqbzGztqeVuSKfCB1J9jd7xMHH376cpPb4VXB1UweiQW6avc2Pu5LiGvMRFEiaEnPLF",
  "key3": "4WXyFWnMeGtyUQjGKu5WGzZ8xNAuJwhZru3bs6vSenadFkvtFR8hTwE8goD1D88fK1KcASiXDsKBLQzw54EsCRXT",
  "key4": "21PdNCNsPohJ5jKkciy5s7NMfX8S8eoDKmh3Ddqp2C2RygGTYrZ1H77iCfj3WPFB5oT9tL98yNQbVvQh12LL3to7",
  "key5": "2LqoE8RNB2dNdVGXXWLWbgFiTyZHVad1wBvtM5iEoGVdMN8pbd8Dy8nmTCzg5AVx5iHaVisimcMs91wLaqDA65pV",
  "key6": "2UZVuswvAag5Q4b5xgDucuuzmEHHofRFmZAoPFF1NsNzQbDVAKh2L46JJ2oPdjG9NXN9X6YxL2rARAPMMqq7BpUU",
  "key7": "C2cDoVWYQq5fM85RWnpueLSgzfqGi1VZrvu8CpX3KpFxY5eTMNjXghYoiFxGqiaRoPM8H4AQEVk5R1mffUJVcFg",
  "key8": "4zMkBRmmiYM2tZoYwsEtuP7TGwV3ghpFVvzd5CpCa1s4fWTY1wX5Dq1ohNk4PpcBg4K6jbAVFiyw723NcWSMq2Be",
  "key9": "4GctPcY9C9jWst7FBVY9V31y5RoyiYrbqsDBjjQN2LSFXUiMHeuqRbVVaGKZkVZxuXtXgGjcYzQCvHWv9xg8fR9B",
  "key10": "5A2jEr29is11QGHbCSiuyADLvdZsdS8Dd8bME7nBvTVEQM2fs1diov9FLVfC7MZ7W5wovPY9HBLceibBu29jMb9c",
  "key11": "4ZT3wx2w5iYAbH9J8Mhn5zPK9rZ4yBuA7Ksz4mL4xHZ72yYEQKXx5YkK3VV14rgR2NaQCBai97UybazsYY5GMPEb",
  "key12": "4jwtxsPaoMviQ2FgYGQfTtevUrAedwhnvYR2gS5nQFW8gyAjWLJbjXDgtiunWs1GooQqjAddvMUTUF1rTE5thjxc",
  "key13": "2Xwhitbout3bSaz2YHUSvEPsTmqrB8fV2tkPzhtcmjkTRLurHqkuxctVZpCCAn9Nc7h9E4zKE4jxDfBXmdzZEgms",
  "key14": "FjQb2mSuxCU1m5KYU4mqtxJfengrD5emecBt3ZjDbGRzCfZyfYgrfjntU5SLmqivnjeJp6BjTVobyS9cdME8F4Q",
  "key15": "4vLUpBdbpCBtMm1ouZnkiPwRonB1wweDwgUAy4we4wrB7LHHSD4ptbTJsAKwPc6E9hQpo6wUHJk5Tau6bTSJ1ZnZ",
  "key16": "3zFzqNaHd76PBZK1wiJy4J7VEGzCCmFY3Yur4YtCFGeQPHzLVAWG16vwe5Wzv8ZcFiTDGepyPciqT3XnwueZiJHx",
  "key17": "2QVEA9sMkUJNJ6XTwX6ns7SoY5dcNg5SjhrRysse6E3an8S4czW9H1tPAc3n1qxfwNAG5hxJKKMFdy1NZeHJkF7a",
  "key18": "44weoq9UhNSgvw2tDpXMKi38DWzcPLvMhjJt5HuUdsEdebhgn641KgRHT95U9oH7y7iKhcynPmF85K3Bw5AdA4Hx",
  "key19": "4jMaztenFyQoqBgJG51FwQSH7rHLFcZ3E4Q8DbvSnLy6nNWhXz65unhAqaixtwV6wV7SxZAsp767aE5cAbKthoPE",
  "key20": "389qnJ8pZriFktKcsJ49LcDjL4eikQsxgbEdrCDgL74aeaQykWeZDz4yhEWCDxC66R2Vubggw3JSVDN4FirFsDtj",
  "key21": "ESV8FXbE4Y3c7xG5AZ6YNvprCpEzzGmsdqk4fqt9tL2ggpt9Ru2vgWGmKYMTAgGwRL1MgEoT2DLcDwKQp4V1DhW",
  "key22": "5yz7RXAQ9g68fqriiXEw6rfqyEa8Znvjkrfb4M2sdoa8xtc7sJJmK1cqfuFjRnhV3SSm8k4z3gX5vdyhHf6bWmnY",
  "key23": "66rWf86kBmZeKYYKdJS4fPBTBj5yzdc8NLeaVRejHyqDuuPX6pHkEsLfLPkJ4W6XsSe3jTtrRJEAB6CqGkiffFPC",
  "key24": "wcFzwfsPN7Z2e5bex1doUGC7saXWiovnfy9USY4yyJhfVUMppoCkKz6Y8mSBV9kk72ZrKzEwLwWJmFX4DaWeXBx",
  "key25": "3brLPafcatV78YBWTENqJ1hXYKv3kybsr6c1k2Zaff2fVJoia6DMWezb9s8oZTUHPsPPZAgMquPjrG6KhxdNkSko",
  "key26": "QyDfKscjqnbw8xZ9LnDti2f6Bir8sqXiBBwaDzbKgXYuv2ju1KihPG3b2U5K11viab256dY9GRP9F3ighMLjhue",
  "key27": "5zP7HT3MdDoFpoHG7MykH3hc1htBv31rgEej7msQUmYtcLXaG8kstT5383TK5dE8xqzCr2Uk5yiM2pVKDPCzAsJ2",
  "key28": "2SHNWbc54FFYuXxMKm2RUUA7JrRsrbAzQQkZ5R6WgRLQYxP5KUkHgSs99LcwqhTaQ5FEhoNayU32cEYYepDJ5fTq",
  "key29": "2iCVaz3eU8emJ2TZvs47SuJBH1pRZqX7gC9unvFFuMj4KoCwHVAvoyJAghVgkxE9Z6kmpeubHhfVHRH9vxKZA2NS",
  "key30": "g7FkQT17jRMGB6afwCE3cPWGM3Vfne2pDzktRcv1qKKy4UoF3dkionCzSSJpqXhANYmeVYup1xfxh3iV5J2Asbr",
  "key31": "66XjizpmFnz5cWjytyaXciTnxQ3Nhd7WVUFcuj468Fxx8odRuYsFM5Aa4SVFqLuHnQzRTszXysVc6BtLWeQzzkJA",
  "key32": "eHPozs8h9A28vG4gFwqVhExZVrv1ubNEJGQZzHR1Ky43LZYTNZJvYANa7VBYf8Cb4kuWbLF9HtMzNzVQpnJimji",
  "key33": "7ht45Vf6RcK5r7jW99WPHKwjpKkC8cazyWukr1XiYceLi1o1pgDX9hcr8uy5g5M39QyoeDFeQFU6qh5JFR3GbzW"
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
