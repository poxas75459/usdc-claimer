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
    "8Jr3piy5tnpNyGaZszw5fByzyLtZqD3LQmWc7ncsJQWJPei8meTf9wh3ntzVE77KW4ZPjoWiWQQPUV8vpwxptfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rMReb9fVAMkKg2CeDHtCicFE12FUTGUQM1xgihus9obMf8jxsGAJqLVyhbqA4tLKgG6JggRrc6uKUATzxcfRF7F",
  "key1": "3PVgrpCrZyggU2ibBuUA23fGp6Za3soL3Cph9PmonZhpUD9D4kJ6agLetpYSnvRkKwANZsQS8wpCrFZm1QPayznq",
  "key2": "21hKuR6TKfTd9hd177XsWXFdZTEbVtqvQeqqNGPTxZajP1vWF1QdQCF7fbb6DWhChEafJCeTXksbbFimEbQhAQyg",
  "key3": "4UeqFswESqvZmMqKBa3mmbMLHs1WguCFVzimm4UwKMdzVoCfQtYB4k2EDpnSDF18PMVJy5HYgMoJSYyFWMmstSkr",
  "key4": "73yLTncDg9foMpfiqo62RfPE3KrfrrVoNVsxKYQ9vZkgZB4WgK36wDSFVXzPtZZUz4Drr92F6QdPB3eYvE4cXTB",
  "key5": "7qU9bhSXMPhTeQzkpZLsMzmULAGFMFTMCGvzZQjByB4qyDZZhf3src5QCd4xQVzkT4D38mUbF8oSTjALE7vKfii",
  "key6": "3Nu75wC31txKMyXkM8eTHo2WjFcP5bLwPQdDekWWsY35LPeQZjuCsADGNHa8iw7snCdy6jn85pSbvcDRthpPF2c9",
  "key7": "3eQ98qcpkwzHAhoQaaZCgZwNn6GRZ7RSBRpVMRhA3b9a5LoMskn2gMg5rBNQCV9JspXFTqefBPWN6aBogDMGbB1V",
  "key8": "5KM55rgL9AX4CNzGt5aM7ufPWZVXWosYpZVpa6kihsN7aSwJtC3ZLjVauzYEe3NqYUAnJTSzN1g3cF5qGEsNmsE2",
  "key9": "58SwUNiHXAocptyJHLt3wbiLfbS1EiCNBQrz8CLMnQv5qiWmRXqFLy9sgbktBxfTJxAAMZzQLmXeK5VYXDnbgsHW",
  "key10": "TETYegMBdV8m9b588WfVJgPFQFpYNYiy1mzW8qzdEZ7EGSCTYnma4DEoowZXRFJcP2QfqV9T7qHEEFnXDhf9V9J",
  "key11": "5avFJ7ts3m4d7qmytcpRFN183QxvuJL7uAjN13XHHTisDrC5mQ3ViLHbDYm48Qi2pKWZrAcWGdgz9L3qoreRFR8o",
  "key12": "5d5iM5UUeW3y7MwNRL3p9r3re7KWBrPuYTuKcD8PvnVdydUi9uorWezi1o4QJs9StR6A2jU4EXsYzQwj7JyPETBZ",
  "key13": "dhTqMVUyf64C7oHx72wJ2TQTmFoDhySXPjCNrACM9sBj3V1oitQKcUhDUaHczkfABm8p3vzPfqwu9raRohMBMC5",
  "key14": "48ibP2WzaEro6pf9mEULPnLw8YiaxUfd98cnQyUaEMrGFwbcgDLBrjuDTNGbPYT8jeHzgMePqKXoprGkpRGTNdqy",
  "key15": "35Q9AWCo5H9Zakr2sHtXQFd3XsCnvqkcx1T8doNR1nZQBJk6ASuab3qr1NFYeTuRqV4EeZRnQW2L9W7yzTpENDTD",
  "key16": "54eBpv9UcAfWanRvUsCLgJefr2rWndWocBY1GahZnpt1eN9NYLNsq2STjQ4QDbXdGSeMnVMFZuzUj98YB5AQzPBY",
  "key17": "4VdPyA1YSD6JoQXuBiS9E3x42sVo8T6aTiepBR8u9tQXYMAWjZomx1qtEGivoYRfCTwHv34TsAEHYFuQhuvb768Q",
  "key18": "6adLxmpj3szhDGyH19KhC9KWatQqdUnneUzpeWgXu5FXC5LpRxbBfR9jRGjCSMz2f4dRGVaGyCPkZcD4sdrY6um",
  "key19": "3gTQyrMBHf9zdwWZfMjBArHQvKX25ok214fKiyCKfWjMcwUuJQTwJ3f6gno2WPqx3GsxPXnf43eiPZVjWVvas4Lx",
  "key20": "42Mhurff8KdpZ7m7P9YbrNZbFPqQaUA9had5JNAU4SB59js8GmAMtuHdjHqq8WVYh2MLuFtQB4weFYxuy4uf4j5S",
  "key21": "5dGnAvmqfMFLQ1FXpH783buoqKEBdMgRxV2Pdxt1csx5rWCAFSbTHTFFiU9i1Fy1mhsLks4UNJoQQyE1rWEQc6wQ",
  "key22": "2sg8UuLmFww2bdNRneoDsKHDerGijVxrTxBaVDSZcHBvawqKLA7Kfzx6F2P11ChzUZUdY5NAztMAvuyXekES3SHq",
  "key23": "5U85f1UPXQcvKJjivXtqHYe7WzRY9NbAJ1yp9cxG6n48EHpy9m7h8zCqzYwEshbmCRc1hDzAnmFTZehMfJGLM2F2",
  "key24": "XQp7p1vALYUeTF9z2o8AiX1w5TupxSufxUVMfJTX4g8ZRLUgfqGUshdKbk4cFf64uRR7FAkKQMKmSgRixWH6Gdc",
  "key25": "4HMyeSkL62wWEiLaipR1FatjSndyj21N93karNwrK9X6DRAj6NdxYoegsZf6U84z66edDP92ewfBXd9axshMeJxG",
  "key26": "4ZQkknGY4sc7XfttoepXwT3BFmeMVtTNWjTC3LxnfGQgb1p4akfjpCjMdYR7myBGQAfKBPevXNNKQXJvXBXycRHT",
  "key27": "3VdmKuLr6aX8orBjWTnewKqrFo6MhnKAMp2fcMN2ELJzzMHkxku81Ht25rUc2Es8RdG1nWEv7DAbYrjCFcFtGLH8",
  "key28": "4mgzn6zNzF9pdgu7i4A4MgwebAVfcaY1yEkCTiaosT9vvqBCvHLMXSbj6acsyf1bazwJYGFTLEHzKqgWR6thiX4t",
  "key29": "2mgjjurRAmScTsSVjye9ikatuFASVdohpb9WhjBQx3hkHEZVXF6gUedTLy8uUSmtP85oHeoGXdqhFUeWmtciMu6V",
  "key30": "2sEGYZKksYPs14eQm8mJmLP1mQNyrdCif7zKZTNrcpPWeUaMbinmoQtiAPkPjeTspmtVJExf3cqTJJgDicFj8nQe",
  "key31": "2wEVwf6pgPjyu2QVwKHVtDNJ47GW2nC369gNLCkyKqB36uwauVY1SPLXyGbKuy5Ase3AkR1EocACxtCL2x79ZSCf",
  "key32": "5N9jcP3FXADUSPKetLwujLVeMbPPTzZgQWPcJrcucHQwCSiogwTMdPkLM2EC8UgTVYCQs7NYE3NPN2N5HTbFLg1d",
  "key33": "231ZQ9wVaq1hDmZUx8jCVqM6goUECCG5EYnhC2VxPBPR3tf4RWuCVEn1Eb98RvMKiSxkAqeewskB9MhAdW8PRD1P",
  "key34": "36tSAMz18sJwjsK6hhwuWv5TRehcsrhUcWfJ2i7YtpRhixw4p9WFv6hXKyxkE2XHytTSeuax5bqoUtqL4X6e4Nsa",
  "key35": "4ZpyPsP8KrTYYPbCpZKNshHiCHpH6WJ12bGcSR84N6dZsoSQ8fjUAad9ck6YCe8FJZoAehRGu5Qcu1jd2odrnYiN",
  "key36": "31HVRahar78vGc6Rw6HNdtUbWZGXz3JJZ2EjRmTW3BjRcz23xPbsqjhy6gsq7ZRWmxxradkSc2SnMKseiXvYLfrA",
  "key37": "5TgSsHMBedG2j5eBm14zx7DGDiYpF3jSu1UCNpdbbQ3VwXiC8nQigdbi9mrtxGpq8sg3JGmsg6dbTAyJoAGcHLXA",
  "key38": "46vXbdpkjNkcCt4NB8Qf8aNAap5gXtDA28dRaY6TgvFJttoWsK5cQW5PXgkHduy43dgXw6HTvUVT5C5QG8BGZuER",
  "key39": "5YViREtBvecGnctdZDRjyRsFwi66ZSYTfXmq3Vi7wTfxhh89Ty8jRhgkzV9Ki5uQNZRn4PUNq3mS8v5fP2wsxc2Y",
  "key40": "2PiXgihFLESKTASC2XMo5gjrnrWgybEFJRkHSGxkBAHLZoXDPUJaw2L9LcPcw26SaaKBMJMgT4QRM9ysVtkbMqJr",
  "key41": "4oNeskPZcoDv5ZjSjg5HymAnNnPnEbndtvLAiTpHhChbgidsa2eVDUtxtdr2NzkixPuotR6GyiKsi1S4fiatEHXH",
  "key42": "5CRFX3FCms9q9tNcGMTFv6LZJhep2iyn46GeG5M5tmeziELiTVycMTqnUNnZ29f35cPAd2cZhk7DoQ85XuZDFfcc",
  "key43": "2C715zuKFaxs5nw6KaJT9DdVT6KGPDbxv9huQjD5xN1sa2wC23xFtBqWbo7vzeQARwrHeDtKmaZnpMKYB8NhFRaT",
  "key44": "5MPEKimj4CFzC8NR25LS8vJ2J31MAD9EsqFmVcbWr1iCjT3jZWXiW49xKbMUSJPT8b84fqqXGtFyQiksjjvSzRD7",
  "key45": "1QQLq9L8dz9foFfdb4smxXLpvb3fLiK6bHP7o4AwCzfKjWmGSEawgwF6gs1eGSLymiamu9czvphfgaU42A2gnoL"
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
