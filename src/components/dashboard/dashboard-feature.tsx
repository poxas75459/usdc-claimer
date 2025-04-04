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
    "R5v7acqmfMqv8VsNXyz5MChgcMMyPF8sXP88Hu7eJbw4nwP589w7egGttfx7yCyDMTdwffXbtL8ukaA6cquxyb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y4VN8vwrSQNxzqPUwJYLXbcLW8bbpHMmGpdBP4pp5KSTEyHSGgsRuXmw7m3TYk27xd9d6fXPxQzjBYwfWkkAKwr",
  "key1": "5hu5gBdUw2ERYsa2DkuFUUWVe7ndyynrih2aFZMyon3reqgu6z8EHcDEMZLiam86XyeeTpF3kZgghHGZPCz3dzf5",
  "key2": "3aFNZ5AcZwZkg86ufZ7ERHEULwDbTPYNXUgSNxv6PfWyvZGeNUczrgXauwABch6xtiGmZMxMFc2CD9iFMKKxNnwA",
  "key3": "5qvjX19ekTTHKhWUcd2M88K1nm6JFiXfCZbwbZBTj1Ja9zYWe7YJuKbuc2KLFEPWTEdqXmMAk8LrMyBjTp5TKCDJ",
  "key4": "3L24UJDGMGURBEndkLJ69uonXofu8ZNGGxUushcx5fHGGqVbkeUha8bFDJQWhcHbvLJdNTymLpAAwnrHcMu24gvz",
  "key5": "4WdekSbk5AC2tp6e2Z5wdKo92FEyVuqGdTXg9R4Xe5gSVNaKZziLMJMhMz9Bxe82s1PikHtqFJYeLQQ9WC5idGHW",
  "key6": "3PFfHBjp6vRyCqD74ViFKWRwsS3eyr7nD7ndVTiEhG15iQQyJNZxUpj6g8oxPpJsY2kLvf8ZyB8D3LkSTxcstTUd",
  "key7": "i8GpQ228tGBj2NdfawdGkDyqtrhzBUbp8Ex5xX65Q2Bq41GcC2VP2DWyn8R37FGYNpPsgokrofqcK9vkRrNCQzM",
  "key8": "54wTuGTqn7hMsceBgETydVw7LWPf1wLKVt6XYronR7ekWb3wvp7MoMjscoohuoGbq4dwDx3t7dFaTiudGDugVkzx",
  "key9": "2jb1hJ1xHRBLgqYenjSzN2vGEnMqecNZWcNKFgfufscqxMyKfHACWqjkhTg51cxTUws4HhqkpEiYvEegP66pyHPS",
  "key10": "3j9GKwecF4BA2vJwKvSHHT2YwPkUZyfkboea2v3nTsg8qjonS85zTfJjA9yko466mB3KJPeEPugZnRshH75ZbkPU",
  "key11": "2bXagQ8Pm1nzCJecxRKyAJqSVSZZePBHu5p9kG4H9cQvLzNXjdUfxQb2TKSmzppiWfRH6xSq8sxqrAWYH149SYsm",
  "key12": "DpkH52igp4dnuXGbyBTnApTtq1qDRbLdRqcFZgjtAKAV6sNZvXZdJgWzFz4iPkvYe8N3fjbZWTcRyQEvA8SQvzg",
  "key13": "3TyCLvoQUBmoQ13EuckpT4F7C5p75Z98mDojaHVSR2zPd81eQr5UaagJ7TnFA7XauEQp4KzNLjpzyYrSUPD5LFrK",
  "key14": "Wbx3BQu3RrHzcrCdGnsVnUtzdMpDu3kaincsGnQudPrDtDkuyGoWXcNGQPJVPdxvN24Z2LZvxHnHRso9bFbwKye",
  "key15": "58MeR7EhiZrbMJ6xxzzcQeSKaATAqB8w115UpS4X9uCVK6LtiypcqZJmXL3nDfWr3vz6KvV5FkT7ARV7521zGSRt",
  "key16": "2YiMQeZJtXXmisngFmW9QXWJ8TMuRwQShBi9oXXMiNEu7d7BSzqQ755TXdAjqn63ToWLbuixfgtYHq2dfkcKuPvf",
  "key17": "2S3Ed27EkGYrpqaLppmxL5fRauxH7ndrcSySFDKZCyajQ4zKHUN9Gby8FFrwWGeYurzjk7QHqTHNtvCFgqvpJVfv",
  "key18": "2PRPmjKYrkQhmmYUtyZ712PgTm7YrVQzZ3oaUyP5fMhyorNDJC4DH8JZ5N3xoQ1uFeoCCGe6tZFqXbvevTCVejkK",
  "key19": "5uwzTAY9AgjK8szMSptdAb5vpfiaEEVWmSGhCSoui3UctZJn5zi1XETqSHNeh4Rz32Bcw5J4RGNSz1VWVkt4os6B",
  "key20": "5VNPfHg35bxH62GYD3y7H72adERXd6vbdfh2ct8RbZ95Fnye8fLrqEw2iSputj1PUQVqB288FediKb5kfT6WKSp7",
  "key21": "XPqn3pJQzJ8Xtiq4YiYnPZigBwNxifs3jupX24PAUV6bT3HP49zKCYX18Sy9SxKqqKJh6ja63nZEN2uDPL4CRbm",
  "key22": "4NkDDPNhXs5PzGXnFvDpvX21NUTb8EouAitt9dy9Q7QzRU7mxyY6AYECASFR6uhWQzfbZJycaq3K69fiz1oGUCuo",
  "key23": "5WiHvWKfPAx1wiCtHgGx5634AqDCSbVnVEGE4cdBV3tcApuwizaMzFzWKbW9RJAHZP4ATgTQbcVKWxEzS75rS2Ls",
  "key24": "64VwYehjLAD4CRq3nDxF3EqVb11TNdyuwVam2rBj59ZjG7S5gwY1YnqVp1ijJcVZLVHR75jsfLFc9367suoEF2Ma",
  "key25": "3RuvFfjwuCmVTDM8YsMgYiEaWzBDEFbmfqfnAzy3DPaPsASTbYBiZFwQA8H74cvdU8pzLxmAY5yLAiPKh4TT2tGE",
  "key26": "4rZsDQnEQ5VUm4Sw894idek1vBVXZD6pXisTexTDecY7FyDVtXBpRmqJEffCZKQQ5HempDmERJoKj2JVHqjNq3Y2",
  "key27": "5s5C33HD8Z1nWgn1G5QFxeNtbhiaHeLRZAcQ3hZ1sJe6buMCy1WDarDNMQvXosxQ7ZaC6N2qP33rc18zMty1FP6k",
  "key28": "3kHDohiX121agpenP2tBxb4s7e5DZjUytedxqEVhDrntuT8uS3wSjyLkqUGSR5h3MhamwEedLpKsUtoFRE1JwoAw",
  "key29": "5Rfx5evfv7RZZcJy6bSzr6MLwwquFvx9rmzuGBfJ4LNEDnvbmvBLbD8bsooqfuTz6g7aGSrUJkoJpyjtJAe9Ne2F",
  "key30": "5GQ6aCVBkgQ6Vj3VCN6wpuGTtjAqg7FG8Z8ucdT12v92P1W7XGWU3PmdHnUdfq85Cj639wUAffcL6zVjD2XFax76",
  "key31": "M13BWkgYVtPt4NZ9pHppcp3UZ7bCpoBbJv1LQ2nENhZuQmPL834jUmA3k8UjTcDZvRpnZyCa3cDDQpBA9NyzZ4v",
  "key32": "4cukAeC7k89moCd8smcDhDWq3BvaVFNfYhg9JCXczgNPe1HFjWVvTtQFwGH75D3dbTLT5dyZhjRy36FrdAxk6vKa",
  "key33": "4VbL56ipuzk92jNrb9DUqHtwab5cwWAChrg5YgjEFJdo3FQGiwnXEdQhdV1a9dwVfsnjSQM3iqLqx7JsTRSHVnni",
  "key34": "4PdG4qcv8sThTMeNBsZkKxDgNCa1DhAzYefaB4Efux729R54Hkq2oqyVak3vigXGfcoZcjgXoiUTEQ39oNjRfgc1",
  "key35": "J8xRr3heM43ELV8rQ3vsZaNuRvNWnX2EAsXJfcsciKfvxkarNox9uGs8z25fWZhfVDXkjZJqQyTJKGLFmE4FJL9",
  "key36": "4bpXQ94GxaB6wUGevSx7uiruetegKLV9QmeYhm7DLrcPTPTof2YC1NC6vKaezTQS4WKrBDYCM4W9UgVyczVue34Y",
  "key37": "RRni1ecFAhkdf5nmqF3fixW8SdhZGV9eS4UCDkmZ9pB5H3fM6mzzhsxe8EE7TRSnEhpPGeVL7g6AQfM9m7ExKL6",
  "key38": "4ZQcvh4CLTpvD16bLkeuPMNwHEauLmbn5vgbWztfXDYXAAKBkcnU2cnGvxDKtUyQ2GiCmVNrT1AhQy2eJMGNHn94",
  "key39": "5uYkNiPd4mueyuib55ApYcFZorfTg3kucaNjXEWjRY9LeU1uccsLSWMYiegEu9w4oWRisUUffHFWLZKXuzEH2cif",
  "key40": "55akVgF5cNMsmnJTGmB5k3PHeHoeN2tAoVck5kY1E59fMH1WiPfHLFoNQ85BTEbyyn6EBJDv2twGw1q5qLHXfD7r",
  "key41": "CrHmsBpkyaiTauJKQ1uRxzvJoBW673LY87C5pEpGFcnBwp8LMX3hA7rr8ZrSnY4unHxoYNXzSkNbtwDkRPHDu8d",
  "key42": "2DiMN2T2VBS5hLgQXy3agVpcJyBAMwwvVPgzMWNj8vL9sYazhr27YYoR7pMA3afShpJpV8g5oSDDA8GJFqDeCBwM",
  "key43": "3o6JW86hhwoLurEo5ipLxmtB9h9AAnFTBgy1fn8dAQHMyq4VXy9UM44VBKLTxAdSRqKDupAHnVZcUbin5xwezdM9",
  "key44": "5e57noiLx8fAHhWXCdZs2D9jBg2wQ1BesnHmBN7NmLp7jShgxXz6vW4raEhpYxc58Qa7A4heLCD26QqrA4BtfrQe",
  "key45": "2GM3HEqd2MARFLfqZYK4tXHJ67NXX1fRMvXTt7ZqSiAZErUsuQicCmX9gNYJdajBwJKj7UJfDZzrYcnTiKmtHTb3",
  "key46": "7iyX4X4X18ZtnNRsJ8BzpbQWQChPMNcqa95r2d1s7XmywoAB1C2HU9WZqmoiD5aHfyq2oxpMRejFtsDnhHEn5rE",
  "key47": "28z5mvfnqjxF5TXu2EmHEEMGPYkFrJdjwHtowKfZv9twxCPmjP8JYW1H8JLfBunYUBZF1axBk74XiQxHkhjiBhxe",
  "key48": "5P3Yy38cQApqsH61yo4FWAVwmVXrtufVg6WVXki9MnAbGDHMRN8EwKRNxo9EU65HhzRrj1ZFk1aQ2MKiUPMWRKXx",
  "key49": "3mGfQK6E1U9d7BP9nVQ2eTk7oRagAXN58Mm6TwEfY1ZVZbnFCTx44t1Ao8SgDLpQuqWuhGxvu8L9jsZQBDwWTVPV"
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
