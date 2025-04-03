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
    "5cd2TGJeUS2gKvwPYnzkuriHe8mWx7h69TpgDcBHGT7tow4XchF3QRQGfd4PHT1iHgwLSYn2vbJorLJvMn4NttL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d28xEkJZGY9grN9auuXNpVLSzsAURiqM2MQy7FJzmXDeptE9GDrgCsDyDTwE5HNzoh4NS6qMGUcvBDmZAUE4wHK",
  "key1": "383JN2s5abiQUxJ8hHEo97VyjVLVYQWzS7HCFMF8XAP3L5eGi8DxY8rfi62LVUrMfJkhMkKarNnXcrNRHHq6U7uD",
  "key2": "2zSmB3rmtKhjgtyMBJe6CkoQYa7m2BVwqVhXNAotYCMR7TfDtES38VvnammpzaXr4GkRrFeQchy5Kr574jKSPEYM",
  "key3": "4VfJEsNRb3JaoaZU2kZzEHZ72DxHiLfV8zbuJMsdDR3BqpaWTTEo1CV1sfAmqzi4NSzRL4LSPJJEDf1aAdXHoMx1",
  "key4": "R9z5fLgEKXMpicVa4uBN4nNxZGEKZPywS99N95UCVexKN5R28ouA8XknJEtPeVvZAVKUezbwtW6BRMAUktQrW5n",
  "key5": "3KT1E7PMkdSrpPwz5vk8JQgNd8DHyo9KCeZbKRPYteBTv8PcGGbnEpGh57Hdz2BkZtPdGXNQCfu1xuFmzYq4UAaL",
  "key6": "5ZaeEuixSDZhsJjoUqcrbCgxQ5duWR1HxyhHFCRhP6WS2bYCtLi3p1qaExgUvprm23hhSBkdL9oswEpqobKrt2n3",
  "key7": "4ZNNJ9N3YTv4jpP2rkaaG7Tj9RuvCvYEaVRqpidniyasLRb25BYqX9euRUL8bAA8eCYu6WaWPS636sFKpngvHtav",
  "key8": "5DH4pXiDu5ojtgRkcy7u72oqnpG1b2DNF2fTCPZ8TUddGQ5mrDkX9e6nPJrme793Vbs7y5Viwew59wEtSojhECyD",
  "key9": "23hoD5H3dpw6E6v5nvFDPHMFgvbSTfrjHexCyhC1Jq2HuHz8hXyR7YVrBSJWgXkxd89Zu4xXBoLm7jRBJu6hvKaU",
  "key10": "5DphybWcnmLrZgB64jHzbswvfST6W9AxdTqpdra7MswPHvYToQmhfu1vRM32M2as7PTT1a9TFFnuu1fcd4CVb1nL",
  "key11": "mp1hMPw26Z1ZXeuY8tRmREWWoQF8pnzQQx9xUQQcjf8x2Vjz4V2oTdL1RbxjnawmPbbPGBmC7isfS3gNvUzv2H6",
  "key12": "5wVMrFiRWuHkx4x2oaa2zWEntWjNvFoBhgrMxUsBySdQGLvH46aC6ysGvFijTWAxdQGeAQ2KqsuoWJhqp9gKm7MY",
  "key13": "3jVLntWk43zzDnhgTpp1uNJALxQsvG6bPVXzjyJfxsc2KDZaF9BTcHPoj1YDyX5MNS3VxC2NhF63QMcwaXf1pR6K",
  "key14": "2BBhwQu6otqhvgsHChXyJyi2E6NVCcJivp7iab7Aocj9k3ZqW36G6wh7biGG3o2t4gbj2iUV68DmkCjBMLCnc2Yr",
  "key15": "2QakuAUsGVbNgU6T7eRkaqXUmY1TUJtfd3kGSDWTKyGfZJV3qa5wujWBW1RU5z3QRNinEpyR74phm2ofrrVnwjwL",
  "key16": "2ScNJKcGzNK22r1uJBXPNHPkBFy3UyTvYB7AiK6nqZppkRxaWPKJoZj6xfr1x8f5Tww2FLyDVDtRbJUXeg7xX7NW",
  "key17": "5HXr8GUCVuh64F7HJYgZUsFPtkxJ1oTKtgerYskUwohSiYBxQfn9KWYv5Qi7yqhKoQ2Ev1nTojrUADFRnTnhayn5",
  "key18": "41ZRRbhgmELM4htmyqcJ8wRyrHYxj1h5uRGaYGi5Po2NC5CMtHxS8FW8ekcqzkaeeJ1KPVh99Cxzh8fhnCJUPVaX",
  "key19": "5BwGrfSeeECrwSDQjvnQ3LktGwRXa55gutT4HfeLbJ2yHsrXFjv2YdBPnjYhZA8LBV84jgNUA248Hg2GRX9UFyJ3",
  "key20": "5QjJKsVxu8WMgMRwyz9F4r2D9othUgUyTejXfpBRRRHoP4AxoWWmWtP5R31rmF1w5r8heXYF4fB7hgsk7CCwZY9B",
  "key21": "5DBe1ELZQ3skUMFkZhjk5rAingWSp98EmRJCpAzmAdwfBAVEbwkgkCHnZDWTRJVBk1nxxRVwLJZkDVgA7yTMRMz2",
  "key22": "5k2Q1dadwbby6K1ebAXfCrRJ9mQBVVe8NwhHvnbQ6FaMyyzZjwovibzeWsmw95QSJ4TPdMr1YQKe558kmZ9DD4DH",
  "key23": "5q1j993YJPRgLcpW7hHvPUwnwB2qDuNCH7qV3WfRNNVLAqCutEHhnTQF33fvUbT8ZVgi8k3euLjcejKoMDA5bH3w",
  "key24": "5N5fvbc1prxacpSvEisgkmqvmMorxaK2aXMdb2QViZCNwFDJzYh6Gjv42unot6gf3CdyyvERn6wrVpPaFXHWfKv1",
  "key25": "4yHGU3Joui96QmzSMPrFYBuenLWpqsfpfijjVjU1XEvoSJxU4LZPJ3yB6D4snbHZGLH6Ksceg4qirioxtHkk6yL5",
  "key26": "3rwMeDDzqxfnpKNZu7Q1QmPTweqcS4w6GwQFwSzWnz3ryApHfpE51Ca7TWhiJ4zK1sbHEZbsYWDu6XmkMgh6VPz9",
  "key27": "2sdLAvSTMgGpKNaQFuELpbFMddJo8LyxiSDXtiSh5zPLoT9DUzzBpL9veYbenS3z23U86Q4KpLATxjViVXpG9H2B",
  "key28": "5ZSSwDa9Quuj96rM7LGzVxZJ9wf59kh1QSXjuS8efCybBvLPx13YrMuThas1onCLgiKBZhEHMaXpE72aPURJxFzj",
  "key29": "5iHo8C22G4msVhZCo2mHGx1L38VYXrpPzik4vmTtFKqwnWv4L34AD1eugF3H6RfLfNxGVKDpMD5ntAucGN4zVzvd",
  "key30": "UTruMQLLNUAjutmyexT6jvBwgBo8ZPDecnfyMfryerF3vUA73nkzNDpFEHWJh27xCxazxZ5ynD8b8P48zRsdiPb",
  "key31": "3g95w4nnHk6RvTA9gFnjup8EEgQrY6j86VYoGvm6Qnj9bRjXLNYZQNhmBq7a3M3JeiwBZi36JtSYCrKRVF9bh8nb",
  "key32": "3vbsDXZvRffzT8JeZ8xy16cWSW4SCg6A23RsE7NrCsXNaDqpBCMkv5RfAWBRTickUMcDAEwuYcjcpUCn7md5JRge",
  "key33": "37zzcC2f2ADLDXxLE82fhk971NFtK9HrokkCG7MbMR4A79XcPrWYXJzMq8fg7XCvG8F1nq8JgEdQNGGCCfuhhBGR",
  "key34": "5nVH3piqjig4z1S5keomLQpL5Wd8xAYjooFJ3ecgkc6h37hWRgN3Z1fWNMBZSNdGuQR6Z9yStRFj9upYu9KhzjFt",
  "key35": "3GPzVk6tzEs7D9k86ibT8mjf4aM1y1yq4YtSybd7AMieRtLzrcRz7P2e1Huaq6y9UJkSChYkGy9BTEKsjSZe3Ug6",
  "key36": "qXiB7NBdMkfsMfotUTT1Na5tdhS9FBNfRirY8MBmdAn8qmJbgUpNN1Y4U8aMrmqPHcujpZkUS2UMHopeaVkPU17",
  "key37": "4azrhM1Mybe1v8WRkzZiESv3PD2h9853q2NqUEBEeipmTPGxeC71mE4bSkWVaFRWMTaEHJBEeKqtuLvDtPHMGH2M",
  "key38": "3p8RkbZbriCPMXCTthpwWcTQx5nBFKeV2jTywmyu8yEfqP8bKbfz7LVkkfY4rpmZdTtg22y1raX8Q4EvdFf2rmgD",
  "key39": "yHnuGEXZURighYYSi74dGermp6EWfu9XScbPwDxrPk9HhLUs9gvcNSmFoR84AqQfyHE5paixMj5mMEBPBZpdGGe",
  "key40": "3xysGqRvh9q3tu2w7hB6K5bJWdE2kCyW88kz1ns8bJuQ7XjjNUKtXAzQm5eT7NB27SieU8ERHx8Q2MSVuTMdTDmD",
  "key41": "hBwXPwwiTBKPsxxCknt16NuRefdd9QRHYFV8FGAuXZCfsUHQXhYnhVyXDocZcSyGvHU18HL5dSjFP6oGEZnVkkJ",
  "key42": "29ApuQW29ZD52SKnLBQbhessagFbvf7YbjSRefLHKNaGPmpXFgvsBn9nBZf2xtbhqZv3pT9scJoKUZPs3ZXvzefi",
  "key43": "4jRnkhmGxNw3jymyNH82ECpV4ePYbnMwprsmb9wB2KhKrWGm6uKh1iy7NYwXYbZGXGqKVyUiVigW4mQYb3wRi4sQ",
  "key44": "2o5Pnbrpu8Thu1dC7uS6V32QZqZCHhG8RMqaHkgcoteS5n91m5XU99NmSK1e6FcxheF7wixccTiNgRcemzppF9TL",
  "key45": "4AcJgMaoBmhJ6r3x2VWYYfB2inGLmNPUbPQs7Y6U3cFpzeZU9G5so7HhCLKpSJhgDqpm7t7eYkv2pMBpmdTQ1cBs",
  "key46": "3KV9EbqbFemzy6KxP3KGAE6rjE5EV7TYjvqPvnnABo5tqWmS79JUJY1vv56EHBtcvLGfS72838ZxgjPwGMjydZJN",
  "key47": "5AVJpjP1oygcHVGnWqCDXtTCzosYaiPktHs7yriBW7E75z2gxJvGnL2oZXYXch1AnWYTqbBMWVktHgYUc6mtuqVn",
  "key48": "7Q5YmJPxapqn8fnvBgQurwfKF9mkNvFBBSsYq7kKx2sxwXHqE2xXWVSiVQbsb1av1ViMMmg5AwQxF6f8KPdHv5Y",
  "key49": "3W6UrqwZMeQDWJESCNhMEiigvi74Vtx7aAHqtm6zjbBzrYYJGfaZSnEkbwyNbvE26oj1LmeAp9jQsEong7wyN5aC"
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
