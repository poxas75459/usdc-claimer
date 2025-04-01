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
    "3pzJvJH7knbmwAXGwm23bhR5gCJFuUSiXvZtjVgPMqPDSNerxTdEUgTD8oR1SNZ6dsict5GUphkFYV3RBqLbg46J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XnVtX1FspGHwaWiUpZ3cXyQ8LE7E3YAm5jqpat3N8BRvzeoREXJdY1W5ZFLBc8ACBfX2dyUB1uLeRLNd4UA2nqG",
  "key1": "3HmCAGBbkajdMAFwXueKkfPojq5n3cgzfmWBV4XajwwcYhjntR2dfRwhwqNhy6jU7pJK5cGFWavNttRYbRaS3oKV",
  "key2": "5rrxV8f5SwfZud7YpffiCqcRA9XZQhyCHBHuuNkmsesP9L5YJERvPFHbaQYfnadPpupGYc2hRFJsN2DZhaVVXKS3",
  "key3": "63JvMk6roj4NBUnJZ2s6sjnGtThzJpvKwaVGQ8YcnwVTex8ym9Go15d8kfu4nfpcGp6AdwVQskJPmwCJanktWKht",
  "key4": "zrAi7A6ewhyhfeNpbxKK4fruC2HRafrvu79dCDUUW8W6oTQ85knryJ6GKZvkTbucPHF5XxemJpZCYeHTansH7td",
  "key5": "27MuWdS5161wkQnZhXUHRJpuqNwYHWwUsJfbgDZkFjgxxv4xuSGnwEsZpLF5YMzbUEGLiL27nLXfqN5Gs87w8Ahd",
  "key6": "5WS2d94YVWLiCy8JDCFZNUyfyagM8sa2GPqboahH5GuC4Se1oQg6xjnUmm1aUrNe9j6qMZBWR3JdAZ4EFPp4treF",
  "key7": "4rrQVnscvHQz2x6wc42ZtFvvpoqVUqqKGTywjdZzE8UMKKadxxrD6HS22hsYi4Fx1uMG7tBmqHENmxaqTajZcqR8",
  "key8": "3aTDi7k7ghJW7NgGxQiV5GywM4XCAjN9XkGhJ8GeSPehWTTHXeH66YU4p4KyX8VM8fZ2XvrW39CT6GFCS2y1w8CS",
  "key9": "2GfMPUNqNasZB83trSw2yR7hdaxN3N6LgjZmfwoKHfzYmKYxHMM7UL6JPpGf4qYkRXyuGc8Qe2pr5GQejCbEcbAp",
  "key10": "32Hb3e158jR39WesSr8qxdk75GAq8ZtivoQyhJD5xEQrR1wVJyD7xWf2dj953bVufFrJ75ZJ5Ca5H5fxsixGWf4H",
  "key11": "2DjnnatDWYvtWZP1wD5NR1r7cqLHCz6ymVRMvHrpW4sD4YKp2ZY7S9S6L45rz9sDAitiToV7UjnixxqMYHN12vYG",
  "key12": "5ihSBX4uy3eZp471XfWqW8XfHa6HcrdJWQiPWjGnaubMTPoEwrLDRdQi3SaP5vyRTJZ6cbtzwbUwssUUBxU41Hq1",
  "key13": "MTssRMhHk7KgoVnp8TZLhKevzVTGvEitdUGaw3LEfncB6Aekj5jLXTKNcenVejZDkshrMSeQSCBVS1Ho2h1QMW6",
  "key14": "anASrQ6YF3JB26PMFWH3AqjTd2pPkdjvJLypbR9zChCBeHZJtxXJvhvzYD9KDsEccPCeiaNNULadPVsvNZwzEpf",
  "key15": "2ENphrPEFZfTwPi4Matq6Tw1nFkGPpiJnFnkpc8Dm3KVEsZtmyKUEtr2167h59rsayTJ8VQcJXmjQPCysjzFSb21",
  "key16": "344FZNbMF8pt4bbCcUaivwY3Azt4k1ip5uomiryx5S7C2K84so3hUmHCAGXcK7f4f8gjwhRnsmVp9MGQMcrLekwZ",
  "key17": "2dcgP866eKrFQ2326frCjXyhGNLySVZsUJw3ZKgUU66g2u3SKo5d3CNBzQvPQLstVP7bsjwTnho59GM5KS6PM7aC",
  "key18": "5kF1xJs1wgVxJghEf3PYWmLdDuxBy4JFfceD1dPEYFe5U7ssFMC17F7hGLBLDo6q2fvwEwbqWYg1rnu3CkXj9pTW",
  "key19": "2GauJSDNaz6ReXBHCPh5tB1jd1xVztCZEZXtDFJUTapsucPjCyy3HMZfKCgmfBsBnLva3a2dHRHBHTRJCY27kCp2",
  "key20": "2NSQvVct9yb4zkpic4HxdHBpibhrfyt5yaW6Hjumxn5WyHazgnxGBgJEUW3nRgs8ESDNSTpauQLGoLMizT2xhrYu",
  "key21": "5Z9oZfQYoWNknSzb1gKaKDk8sZeKtXHEG66ekYRnyE4Zxs6SwarT6S12yGammCrTH2eomDobL4XhMPxGfP4CKC15",
  "key22": "3cyz7hApTQ27spnnjsZ6TyU4jj8peVfsjcAynXqFGwt8DBcuFAwxhvsCqprsBV3zPBFFuPgNLK4dLCC4A9adxLNb",
  "key23": "5L5KMkUQTj9ZTfTfrVCE57NNksKzZtHLhmkf9ehxfBn2tSm39r8PEvpTmFVp7uWE3WUKVt83uCFUNMkWDDQbcASo",
  "key24": "J1PpjYZSKPj4tYfgSTMywjR9BBXiD8xpsgUTqZGt3e4cgyrqJ1VHuwUg4AbPZFrmuMUyszA62e59qsMHvjBx7hH",
  "key25": "36FktY7LGYzpMdxdeDuxFUAk2wxiTdNZCyLtXecqf8nDeFom296DCYgUV1DjtB6FVu96yAyUjkMjHDgbvGdpBiyi",
  "key26": "UtBVkWdKmDPwtCZT72Ri3EEoyedMJkn7GYPGuQ57GDC9WGf1q7zfT3nqfgTCLRas17X6KKhKrUtsjiswboxiH8y",
  "key27": "2x1ibHaJXN4dXqDUamgig4RnLDum9gbL3VBjNtG65epFxmNWwHz9xwt4F2Bm6rFaPfXjdMnKeQnAsm3s7zjZkaWv",
  "key28": "2DVb6Dd8UpwcUvZZcBqeL31ZkmqZSukTdtTTd2g7KSc2wkGNFpMafhXkTR8nyternqeqRE3ybWTikw72EBfhDxXk",
  "key29": "mt9uRqm78xfHAF6QE6LJcGd3oLoDzAdwuTk49muJSMZGwYsxr5EwEzEAwkSwTUnZY7VDCZGhQc6RN1i3oFEKsBi",
  "key30": "4mif1xZAy9A44odDHpjw6W46U3W2BxVhG7qMdvQsVcSs5k1qVExSrLM6JEbbKRsRr2MSWZ79HDErSb1KubU3sLhS",
  "key31": "62FgMZf5TtKbPcStnrwBqXibAckCgdv4yNv36aHF8eRbM3zPdybhZAwUoLfb5MWMqiumiQxM6nfqrkRrB3aZFvoY",
  "key32": "4TfBTcZok1NSSYW4QE4jzxMpnUuYHrdnf9hdtZNwrEoxqEhPoMdwJzrbAgTTFc9bz3EFSwTyM9TwPKRJcF8iuRAN",
  "key33": "4tRDgGc5cvEvRusLEgyDb1VpLBq1nQvDKFEWBNy3RXZsh7MnJpdcnSMB3w2sj9oadwLaNrHbV1Xkct6E8a1VfxVx",
  "key34": "7XT5xqNj6WCnA7KVQkMJBcSzUYb3pt4jeuJwAoobnziPTUz4fgHatiSR2KYF6KTPbPPEz46KA1nbaLdDmwC3KT4",
  "key35": "4JfuojGuk19Ft6efKk2BYmxDmR6a6XvL5roLpqZUDpoDZP34kgMuaCtAkYtuLa9a5LgizEcm6QDaVPJ4WiESHg4d",
  "key36": "2XDueV1U4Fg1dZ9DkWicdRYfy2a1UFemt3VTSTXVtve4B6DecBncLb6qPsHUruzN87Y8pUVZrLaNEoMwgsJaGFxU",
  "key37": "5MnML27BAt2ngTr4g9gqbcvzPv8Gs7LuANB7tNsqQnEuqeuXYj1yFuQaJqnBMCUeZSWJvLMR5yJjUtqYCopj2j5s",
  "key38": "5hE8yLxfkmbQdoGKoxVmXE7QMg8VMLBNMnQzb8b2qesVEFjKmzsdTb3qhFJGAiQMGtMnk5xiquguULTMn3D3ZUPf",
  "key39": "2kLJWNZSfRAkiQtFLqdLQdcBGFxoo3TrpbKYwnBVZA73mxqniMSg2tJ4qY15hte5P91aEzY3Eenq8kkFdHG9qFrs",
  "key40": "4p6fQC7ezC1fTtQ72Vp5r2pKBuzDGhLHXwotX9uUYczCNyaueD9WRi268LB2L7ZANaqhMhVrUDRxhQ8hKYDcUGa1",
  "key41": "5uNvBhA1yrcDzx5uDR7q1KSjxZ1Mi1jsmMBrFz39W9jo6Be7FJinXbgaHbzXvwnky3zFGWffduKwq3aKTWtmmDcR",
  "key42": "P4KTTXZS8AQtUtkMcKtiZw8E75m2NaijoFfJg8VK9jDihitdryadVszehc58spPbzVSUiPRaEB85quFnmFbZSHk",
  "key43": "LVSqFxJN3a3pjHEXWvPbAYWAW2dGHQBaEABDB8E7tt3YkhmtNnXH1eVY3CGN9R9Pr6A56tCPNmxD4wPKWaXwuTm",
  "key44": "4Dh72ivuXZYDr5aSa7mvciqtJNBg51BM8Esj1bk9jsvHYcH5YHn4z6fMMSf58xQSAZvRgvyWSTzY6MCXEasFT7NJ",
  "key45": "vT3NF1FbchnuBCtGg76TAwPpMUPb4e1EHvmQpE8wDuwETfv8xfqJ341Tx79GTCojvVBB7C2aBa1fZL9ifacChQ8",
  "key46": "kAVMVPtm1ZYcRgYVqMggQ9UND4hWxL1b7gtYMe59qVAgyKuGvs3CKcZ4sTA78wgSbtkZe5k7W2F2jGeZZoxDkh5",
  "key47": "4khEFkyoCtYoYpD2tGp57FspvLV6qSyVRn8XPrzNDkUMQidtDhC9E4iyHe8Fz7dHQWfQYeWGBAxVGv2KDyjKaML5",
  "key48": "2Ax8rEemAHEQf6ZRLM8R5cANQcwUaw9LuHqsvcrdkatrmzqji3C7zsuYFH4RVAsmto7xVvSed2FrKrfng62v8Nq9",
  "key49": "5MHMuz6Sd3iUpJuwAonwsEgUnjYv2JfkRw56HH1UxRq68XTSqrT1E7vjzn88mkJtE6U4aVR4W61PgaBSz6WomuMs"
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
