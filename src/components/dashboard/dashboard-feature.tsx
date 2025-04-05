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
    "4y9GKJWeCcDnqy2KXQu42NcN4Rcz4n9hfPq2E4pcaPYEVdzzdv85rJyjrhtvC1KdA73DLtTUMpbc49MDpymDTgpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxPzyh7yaWpuFad4WZ7xqyJaa5Ur65TLAkoghUT1q1Q5my1uRLNxiLgyeVHZomHKG8fVHb88RseMfbEbRPW2Rvn",
  "key1": "4ksAnLPbK5HYFD5w1wYUX3TPAQx9EtsDqcfgsBc5L2PpxenD54LRrcn4pULuPTcP1sJtULdtvTYvQoBEb527B3m3",
  "key2": "5iZ6tf2amWwBV2WSTvTKQ7TBFDsGaey3hB1935E1WEZo6CJ1q9NCaYr7eFMs2Mmjy8U9GmJJfnJstB4Wog5Xi57d",
  "key3": "2uACd3TUuSzmB8fJYRrtP6bSswKJF6cxFTAv1KaJeH97vTqpsTbfZdGqhu9LByn8HUDcttcRREixJCJXvqHZMczB",
  "key4": "2pW51BHGQzEJG91bKSbvCdps4vR2eVQk4bPumaM1rikBxJ1TzvrdRpfPijCoc9ev591eYykJH7DZ8SZR8uwsKVXS",
  "key5": "2F79hBdDFmDo1joWiXSiXwp1zNjjHABUpcFWP3LUABWczMQWohWyuTLMqcj4AibaX9dk8gcL3Yvt3F2Kkvge8xU1",
  "key6": "9Si2bHpbYdyrDGErsqMKDaKnAxX5gM8mHEBBpFT4wKV6b6r5ATbWizdj2C9AChonwGMkvMqxXMh6iruE3azNgqB",
  "key7": "5Ymtqi1JwoTvXMTuEB8aUqYB1g5JzUex19yVvC3bq9t5zof2xensJMgGk4wARzgZRnVmaA7j3ZQZ7m6TusY4hyBb",
  "key8": "55CPGxYyh67ECYmyRUfRp8wJBoDaHGzNU8axV1WNbVW13cvs9QVijzG6m5P1CSj9QjDH66JUrwPpm4KoF7bwXvnp",
  "key9": "4cEx2R4TEtQge4umGuUBMUEFdFnZhNcg7cZ4tLwdyZrh8p5NWb77qQF9vctomVAZaJexPs46LtZwMV1Z11sFbwg1",
  "key10": "rQoVYWKznFTD6aSTwMbNFfvyFbduojqEuV7QSNVMWjgXXy9jTcuM7hbtVc1TLEsgGhpPFCf6XgF7Xbb7ocFntki",
  "key11": "4xnZzuzESq4QuLkQQvnBrymdjE7fbKSCZxLbAjfSsLiqJon2sb58jASo2HkJgqMn63YbkU5Zf4vdvLdX2SdaJvE",
  "key12": "29WPQj7WvkemcznwngMCutsCFUKk9Q2WiuUfKVk5daZEuSg5SVyYAr52QRdqPGZ7WBLMsA9DmLAt63cQ1S1JsEMR",
  "key13": "4JnDJbMfjjkUbHWdfu7wSezvJh7xxesTz74x6CakL3idHpv3TauEx8ozJCs2AjJ78VTbGCkwP3qoPVX2MLdZJ3Nf",
  "key14": "QiytGHFRRymGJE8Mkg1atAMtVGzXtZXvx9obXitgk3jnKfNf62Xw66YMc2sG6kqdpV5vErh9gb2xhHfp4Ytv7BC",
  "key15": "3BrCi4RXhbaRj4WhchJR21BdLRgc7RQmR9qofJneh14VYHK8h1LiVrPcb4DwEc6UhxRkQk5TWHx1fGWkUoosWDp",
  "key16": "65azfqETg6JJwKBoHHowLRHDQNH5qSd7eSHyeuTdYTbs2AHSWbdrXZiXMY4sqm89orM7LqQoXHohp89m9G6B715g",
  "key17": "2xFuAMeFZZrAgFuCUirUiRSkUrTduUPeAJ2Bxw548DP343roMtmBjttZVR9rz2eiyXRRMnhJYNsENCfhVyse1zRE",
  "key18": "2RhQDaetNrztjjT7cSZujLS34WAL9WUnZhd5Db2ZaUfUg8Abiqfj4acpDuodPxJGtue7ZEiEmkxGYTyFgR3Df5Hg",
  "key19": "LZdA9nXHmnqQ6CXn12yYzNJPAT46u5Hdko5BnG57SyfwKV4WaNJwaP3hAtBEY1vbbtsZK93dD4D28nPnXCUTuwx",
  "key20": "2sng3RizF51Auuosk3jqoB1gt4cXpwb56k8PWQrdz53gdBFgiPcm6TLCx1FV8NLUMM2bfUeG5Pw1HrmLG97Dm2s2",
  "key21": "3yiRS4kLNHziDDWedRbzEp9q7EDUVMVneTqubjmNTfwTNA1cAHe7jdUBFNrxxBV1nUgiprpYpXH9g3UrPwAGsCcv",
  "key22": "4nEWPkhBy8Sjk1V5oFsPgUNstCRwRKJUEwatVUEuqnuUdR4wDNp2jTYxwHrXn5JBeYMRMqop1771Xrt8N6UevVDy",
  "key23": "SNLHDVLZQE26LsAVSTzucBJJSXVRRifnBw6Cah3XjNp1tumVLmFudzhrzVujTRibcMiv9ELX9g3RFBsq1STpVRa",
  "key24": "ExgTXCwNAzR99qVDvB4P2emLAakXb8MmKrUdfd55eVEB6JydQbpANHd2EzXS58u41wMnDVUDUWRvZPhce7BvR3S",
  "key25": "2opgk6i2wipPewN8jwV28CEcvD3CyHunfqsdwgCBWWEFTdzJkJ6hAFfzsNidrdLiVdaDuiRRraSLLmvj9rARD3sw",
  "key26": "3bFszzPdLS1gDtjzLNwNxBM3Nn1n9NG42GHp19Wh8zg6kSj37aHHoq6dE8hepSG1sdCLRCr1wzVaAhNm2d1YcoQA",
  "key27": "53PvqxYJuFWpRn7uz3r3mSma1mpopwTcXSTSLTmnJ8oBa6ZK4KsbGspePH6KuQjJYmCus9P4hN5mAndPvqbWzdzx",
  "key28": "mm6GYjwWFekbnTy7cJUcoTdZbv3WMyP2FyXwCSLhMpR4HeGdU4aWW6kvumo1M1y3R4tLrHYZZqNmrdEsa1bShp9",
  "key29": "37CpGd1kptHkk3ZmY3hQfSyfhiQoQzHxjJwb5rKxw977ZtTosWmGSc7pjKfbHWKHnbmdfTb3CA84bkB9gdtcthiM",
  "key30": "2H4AvFN6sRmkQxyKhmr8BVM3yWqhWrHJadumLrUsPVvm735Q9iyG7tQBSDzRjgaiiuyqKk6WXyVKGTamDzC7q2cM",
  "key31": "62ZCu8yRe8HHqxMfDnPrT8fGJDaJNU14ndkmiZcxZYkxaiiSVpJKBkF6byngc8JZSpNGdLHZqWxEt8WK7SMtxrXS",
  "key32": "xFkgF47VEDXHs1UYmsNe1QgH1XCkCY3bMuZs8CwasG1f4M3jyEixp2VfzDWeVRkLZLgSDesKs1EADRLuewBVGyB",
  "key33": "2CPKFebhLNd6v7YnczyX5wY1pk23Qedvm8kr9irSGhXzQTFoVGtX65KuKo3kqibxnmA55cjUbmYxdb26sUrr1xWD",
  "key34": "2FDhQQAWD1iMM3B8dSg2V9EvCofQQ1VUk3aeHoH1CUcRFbpAP1kKw869BPfehW3ADTnnHVAiitJfbCythb8asx1k",
  "key35": "3R1YDxpfmwVRptXRd6v7r96VrU7aE3BSWgfxeW4WbCHMuirSUnY6jbut8w9gjCuMH9HdzEruZsMPRYrA49DbCtvN",
  "key36": "4SV2L6p8WX7TDZNkceYjEMwcSMpRc8zdPGvtkhEUEhDujkAveZFy9rr25Bm8xQbRwFa5wxvG6tLXdTWixLk1P9z7"
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
