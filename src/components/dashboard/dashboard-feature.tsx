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
    "rPCd9GbfhHi9ydFoNwCkfzKvcsjq7xSnVVA5CAStZxepBkyeH2E4uUxoF3w34msrtdnNVwyjdMqogEQoXHAeTch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vz6HD7FDLwpFUwzsKDnx12kPYL4rX2VXtvcChmMU2jwEmvHLRsLuJbRP7ciXsNscnvFETNdMnLcnYktd3k2Pvcs",
  "key1": "3eZcMwGpkLUahMoiECei1aj3i1Gixv7MHDwUsn8WHtXBS9FPYmSmH8gxvPdzRm1QW4ii3G2x34nsneYpG9zh2uww",
  "key2": "3nFKsg1qb5Dw2Vo45yuVywfZzpfZcA6yXod3RGu3FmSKzVPoUfrfmRMC5oKMuKD4gQ79XDESLriXwb4QcUvM6uKp",
  "key3": "3wS7hVRLV6mtkrTJrgkVfQ93jpMr3oQEd2Tjy4CC17mx2imBp4Z5cEeb5GQgdMoVMLrVnU3GbpXMee5SxJwe4d4T",
  "key4": "271AMepyFY1JHuLUbhfz6czXWNnA4usTJQdfMzgRw9NvB9RoDYYeechK732YwG8zoutqbrGufXyWGszsfYKF7NPq",
  "key5": "3CYyfiGik4EUd7G3JbgZ4oskDbzaVisLd6NbB2bx2fPsnVs2uhbUkbov2pXjmVyWkyXA2nzCAs34xXrtKrdBjGuT",
  "key6": "5mc2tJDWzukNxXYDbcJbay91cDGzoAWpvY8b9xmBZoXca1C3tVu98aUNKkMYovqoG1k8bos6eQhYVVcDXgizPmTt",
  "key7": "5xq4L2XGgNBomwRzZqgASvtPtbpRL6xPNPRWEMDFtXT1FLniR6hJS3TsoDVysY4BizKLpxXt24sMpfTzbsN4KsV",
  "key8": "tLVvDpN3ScvuzjrfXEYAK8kZHKEDe4T24AMw1qZXammj57DkwBHMcj7BMkTUC8YnugQaCci9bAeH8MV3wU1kyin",
  "key9": "5YncrYUC8xC247cHMqwkNrPbN73dSgMw5oyxHLPdq8VLaaqvTTkEQxqLGUjFVuCM1V2o7Bt2CGGaYfTovHcJuHbY",
  "key10": "4GCF8SaG7uwYzV4Cg58T7Ekh1TTdaZxpzVMZawRew4ikMCLkq2sNBMXSBZHP7RT6kCi8xT5Apv57NXMXR2GAHMTu",
  "key11": "2BTsQPbyNzPQ9gKKCnJj2sk1UbuQCoaHJLbsAv3qwujavxLcRdvusA85oG4rEvaQFXeQGTrwMZRR8ncvSWUpX4rL",
  "key12": "5H3M6eNWY4whJDQzksaLA2mNXPKYMgZSw33zxKeEHWJczAPx4XFFdM3W4WgYu929RxCULYqTyZfjm6i3t8ywwar9",
  "key13": "TpoFUfpDc6J9MsiCBeBCf2rRUznjssFCJ8nvWaigyCGEmCMSsxKoJ1ZSmwVCVWKZnLpkgEmU2DHh5zooKyQu8M1",
  "key14": "4ZBtGg52BNFE8HB9D1gLY8Ax5GyJZb8Dvqd4SxgPBFfm4hmBBnGxEDpJZCfynWM6QcaSvYqvygbqHcC1jBJ3AefQ",
  "key15": "3TscKktT3BzkyYKto9BDBRW2eVBNPds2bRn22KAvqDtVmo87vK5hnWDwnqKDefKmjEdi7Ji2ZGw6MQ8HhdRq6XDH",
  "key16": "4PU6vFtcdYFM2zGJAUHStdftSX7kDnDuwodJUzJWQ7KC7t48asUkbgHurHfTV5pT7i2HqwzGrFVKzgFLSQrzEdj9",
  "key17": "3MfKSXEEdKfqd4zEMCP1MLwdCKipNipwFkx69qwPRHigTtRhS6nzDadnt3k9yHBSc4NxhQeKFNfPwyBJESxRDrX3",
  "key18": "5oSAq57PuW6oKfbSNYuUMU4ynD4cwco1JxoQTRo8FX88rk9zxTtCibpTTfs1wZ4UA6Cke1A8nuVC7s2W6S5Xthwf",
  "key19": "4tqLJq4RjpWB7tMTvHHEAEepeCXnpSuGHuUJGCSd9bNaYwcwAsc1iawoZmirxaNMzi2MQ54r89o9kVkhQfaoH9QB",
  "key20": "3k5i37uB5nE5NfztKKSw4abttKk28mMRt1kSy8UqXBuD1NMtJcm8TiK1rbJHWzoLbFqccz1nuxmsSuZaMPt5XwUG",
  "key21": "3rFbfjSUCMV26QAq4wyPKpE1GwfZAvaUWS9frBko82ePyfxF59FFEr5c8NN2QH6yj1AtX8r3U5AgfpH8eckzRtwo",
  "key22": "4R7nHySgF8R9YcWPLsKeLrHJRaSYedpRY6mZmrTmn3cz7bWQMHUAuw9BNKAXVqVeih7XJGg7tjguKvd4ZErj9aoL",
  "key23": "NMhjiK9okQGTa6XwCs3TH7XwYPSvcD7seWaARmqZTTjpGG21ozFk4sYnXsLTGo5MUmMF2k1uQEL5z9dhdFDHFHB",
  "key24": "4LDxktfQETj7vgpWojYNsBgtR7WEjmk1PAZsLV9zwQRxeehUgSuWFuK32T5qkhvojLhSYp8KeTWTtK7C7gv2qaKB",
  "key25": "67o86yeXjPyGbeRAPwyEt1uqNBhDew3KnxYVk1cWZvVniyUjY7D4oLPADMFV21Pg9S2KwBiDPbEr1xxtWEk2T9zm",
  "key26": "3Qx2XKKnXSWmtDnAYVVW8BiGZzggpR26oYX6TxwARjLXsvRnnoNL5gRFqxjvrpWfLs6shahvRtbF5dcHmBmLuEfh",
  "key27": "5XBQxGzS3pXe9S1eNNEvGjFTJsA1zuYQs2RyeZ6arwRgVgTzoiNCp9GWgHPFfG9yc1Pe2CV89Z5baYVhjh2XXseG",
  "key28": "67cW4Jq4Pou8pfnEfYxh7tfWUZ6aGNovyX2qy1z2cjqFbL42pM3ivS6kLvEAhEzZRV9tUzd3iMBSCY2cMYkDTcub",
  "key29": "39qyAjyaMn5CVPiwa1qQHMaXN3us41Cr1Cs2t83A81KoFRmvamPaJmhdziaekbArinoTkDTZQ2z72aC9WwrWwLvq",
  "key30": "5mUG1f7sjZKkqEv7sDLyi8y6u8JP21N1fP9dwfj7CndayewsC94u1er6xX6pGX7Xt1vmYBpA52MYw67q56h4FVCp",
  "key31": "4XWW2RBRCsYugrGEXGQPtDJaBaxWWdb88efMydyB9pV5tgYXb8SJqooHzigJkX46nxUxb1C7JawWbX5Ew6FUod9d",
  "key32": "3c1VHuicuESw5eJMvxk6Juis9TVhXvz1rWBdv8ediEdwEJqcrFS31FRik6uz6ymbLyANQWNyzhoehDUcD7Jjsj1",
  "key33": "5UDewFrbtZwqmyLK41B7JXW7juHcuNqbZEMTYi1DqNdLBgknqPcXtN3KWGWjNersQB2boqiow8xYJ7YYDzLgKQ3A",
  "key34": "4HTur3gCUejQY2D19Hrna8PfSjF8BpZGDHs8RcDrnMAKjCjiQXnjWAz5enwLXUTMEG9iGmHi7w94EkdwFGvutsT7",
  "key35": "5TWwKTuyEESW3SiKed3xqsas9VQLqut5ADjZdBy7X6nro7X8S8gSRVZTpauFrixgSoiCXLSoNNB3P4WkGHG5ZDvu",
  "key36": "5wWQXjR8LorYDbE7VQJJDWNcdbWgo1SyQH9ByPBsrcnARALGeycsAYCpaQNVawGRg6pnULnRDPvdo1XaMAghYbsA",
  "key37": "2XEP2rhMVTbquhW3XcWADXSpuGtiyEMaBPhmjsuQ7NcrJ9i2uybzRiPSzzSKVPrqXYzBE5HqAb23NVbU6cu3Gxdi",
  "key38": "5dnjWdaZ4eQNgggh2tnuwx4cFSEo2q6duL3ZqfN4KkoR5bniCtRsKp9EtZTJrNugHe4wiWTxQMXpro2e4RgSq3CB",
  "key39": "5q3P9WSC7FiUAzcSQfqpUb7s1py6FMJHx4pRH9NQu2esv14eMcgRV7RS54YCtLTGZd2ppDqFbix43trbpKy5wsru",
  "key40": "21geyWHTxNp7zwCnLidaE6LUMTS6cB1bd5WWfyvrf3t429Ch2z59ea6bYgRUNh9yci7tugpbyRtte5K6H5bQGBpy",
  "key41": "54tvfYSZurRTg2KH7sYbCaGwAS2Fwtvr47MxczmB4bvrBdi7w7RxxZVCWB4eqCWocXtoUyumgSf1gbofs7hwy79g",
  "key42": "4uViXHhy1jEEQbnWydRcHdXGfNTaENc4wwmeYJdn1rmtYztgddjUQoFzitZ6AQ1uYBawE3HFARbjv3hEumb5Tx6u",
  "key43": "5dtZvAa2ivHaMSfJ4hHstGyCSAiT91P6b6Z1BdkeRZ9iyU8EaX1yB5tdJgYsxDQ2Wqf41YfRYDbP29NRKQjvshRg",
  "key44": "nsGbZbrUu2TzypK4iRGRrNhMEsZsVHzevZ2dVFeR1AbaTSkQnSh1N8X8cnerb9LtMwqqU35fpzQBM649PknkSYH",
  "key45": "21b8WSSWmXWibfKQAup4JM9ou7kiWkTHXSv4Yp4HUd5QgFtSdc3bCkYZeLTTJrHQ4NV8WoWFF5vJm68dSSbPtQvT"
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
