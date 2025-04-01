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
    "ZycaQ4yCMYkJatGRytmTjjqun5ktYBoD2bMehg21hMg6cXU9VpcEW4CtdbmjDWTMu7rANSKQxWPnHtiKdEc9tqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SAtURKXg1xxFWUJJdSNThK7UmJQak91kuRsDCZqBLJxP8ggd5mkSQUkVbaHHRBfAMyaGDsuX6U3ocqHZX2CjBE3",
  "key1": "5L3JTotHCRPX2GxEwHATs6uM9jtxdcoWgnqr74yyrtA4jwZykwtmfAvze1XrwLhGBVMfEGMmg6MELmAD7yaAg78h",
  "key2": "4g7tvRmhtXki4oEWXyGhutDWW4uUxTFLkDWmor6xpyudW1BY3jtbYoybUm5m2h22kLkQdQFbsPRT5kThrHa3XSLW",
  "key3": "3NzvSGnpLh9ZmKZo7er4eHhkETpqYtJk6NPrHWsNYnvzCswDTwfmPX1yFWWPPjGCgatEdM1xoE1y52AXGteFcJiG",
  "key4": "4x5LsVAvEWstAqBqdpoMypdCATtuF91k97HHXyKvvwBoCdp7yA2fmtCGVdsgpvTXrrghUiUa5GHJxRSWrQYsV6tm",
  "key5": "2hFHgRbk2oSWPbpa3s1Uzcno4duGJuCujUfUiQRAqS8GDtXbVXpQemTUbmX8sSHLqHWzFTB5yRUpM92tDB6hiYZw",
  "key6": "2S5DGHVLpcnTiFbGsVmf2ZuUKij5SZ44jKzXBYoGn7MJtyZvVcFnHLmauDbF4rmjP6XyxF4LxbskoCqjBi4KhF5Z",
  "key7": "3U8MKJanyA8yZYpeVAPsCxT5f7YWVzmuxV7zEmjrojSAZSc7ULW5rFkxoYu1iFQSKFCVjEtTXVXxcZzsuGYUYr19",
  "key8": "yBZagVzb3TrboagWnmaKak7TfXj1onLDCARGxk19yrcBWArPGxtEbrz81iTYHULYC1ppbp2t15cUfFpbzqJAKEi",
  "key9": "3DyeDS9askGmGrpJyUZSKUp9t4TPT46atMBfbPGGpettoPDY7mSpL7uPPi7trnE8R8e5jiz7Zj7JZx1cnHEH2rqp",
  "key10": "2jf4GUocmgJ7N6AW8TPvPviePp2aDquLDi367bNXzriEgN5g8q8SZQKreLU18Fhjq3sScYHjVgoHqYkDSpQnPth4",
  "key11": "JZBgVut8obcYo7EwDNvJVR5AW2zKbwmkgNisZs7moKxBtKMH7QE1Wf3g4GFiypmMGQWGWt18129uc3uxGeot42K",
  "key12": "2QKWf34zGWE8oFWxaypckmsP7LpWE86QXzuYy9RAc6eyCdMp9p8Mw7BpJkPfNnBLtjtmtNQUsqahNsVDM9WvJ624",
  "key13": "Ue3dGi9jLuMt3CbpfS4nRAzbguuTmgSmerhE3Zcg1BZhQkz2HSgGWKXqat5UcucggHQvLjHfjeJqKhznuRmb2td",
  "key14": "2SX5jezQxe7ABHzdS9e5T1LCY6Rg2fyJYm6ZzmF5oRf87tTpkQfnGW2qW3CTLLo9KyqU74WnjyGZ9Kwi7amFu1pf",
  "key15": "3J7FUHSTZozy1HwGoAU6CY8GTZPbfYpCGpqo3uXBjH3rQtYDAi1s9BofqqhaRjoR2nEvmSZgNqf1NTu1CaLasL3j",
  "key16": "5sfwTpdtc5x11tnxhesSFo2htEvi1yzcCBZQtHFt2tdayCxqseXH25tzanHgyQR1mwF4YBXZZzLpPdjtqtNzWjgR",
  "key17": "2793rLQHcXkeVWaPRnAQFJmcs441bespLWtJ34NTeVe46XSfC957bMpoaSmuzTUNJ8Uwqsfjz96Lfkd25YzE5898",
  "key18": "5vmnYDtY6mzZDk7vBxfNGMYnC3Z95fmQCpshkvL9hUjdzjf2K9TStLpjC7Tq1tcr9e38f2zyfi64mccquhVCJ5Sp",
  "key19": "2iRrfrBZ1iQGkVLwA6zhVf7kcvCwgsGQ58zBsPvp2Mhz1XTTwMQue47Cz4g1rSrGD6hVibjVLs9evAnHqfBouvJ7",
  "key20": "2DNp9LRdoyNE1sjNDDPMDWHznGY5HyqkFWBXCWSq6tDqJFkThfydVQs6KEkauPPJJeC3YWf3nkvftUUBycbxPAof",
  "key21": "2TjkAGT5fxLxQyaK2LpeJHkZdJaUoo38i6grTXVp53yuQmUYxEKAJWUXUpA7bx8wGV4RtkjjikvPQpaV3SQt6RVb",
  "key22": "2ew8L3Gpoi6E3btvZ5fuf1EV1q1DJJG3t4aVX2hmTVvyJcDng8mdAi6CdwRxUa7tvXxjaDshuxGznQ9aTm5vJSJf",
  "key23": "5neyjHSkz3HEDUCb7aCgSXUTCQ3g9rpcDApw1hjkL3sgNrRtuzywReYzbQTKcSz66TZDuZj7zdJx5BH97URpmVNF",
  "key24": "5q54eEnn33cMUPtnfiePvRB6qw1D1hAnSePDxzK1fobWmZLBvzPiDSKGG42n653ULTPxBMQbyKUzdgWPjnLz4h8V",
  "key25": "128AkbJh7vdPCUmUsqSipKQnrwrgS25d4jEFXsVpDdosdrvEzwKK3HgeMuozimWngpAKNUBw1eKWwf3w1BXBHoCg",
  "key26": "33JpqPgEAPn5gGRXK1FpteosnkBu3i6dFd2yuugZQwuki7nu1At6ER2ecaR6VKPoo5gkitXunXgVW86FsHcEBmZs",
  "key27": "MD8TpnbfqpdAouxZ6pgTPuXEkhArYiH48etry3swMyqQ6Y1UxmivwJbBvesJbtGNq4BoSdXuBC9Be2JpgJULQ2d",
  "key28": "4DmniJ539Ce7fZXWePVrRHyYLzF1YapzgdGxYZ3a5my2MHf639UXvL5JfKY6L4CcnibZgRHLZCRZd77SsGpSuyhA",
  "key29": "3zLUjzxf9TZw4pkmPXpKp865imBzPcXZdyxFDGAFHc59S8MToAVxWh5sGYAhqHr91vjxH7A547LXGqErngnoGvUA",
  "key30": "2CaLFC5rz9AL5eX8pWXMVJzaM3tGp9PYBXiGwCd2B7YwtTJ4Wrcep3gXrvMesWKjdKU9VGgAEL3WoTuQodUgNz1i",
  "key31": "2nB2g7kXG39eTrNDRqoicZsjMJih1t8RhgdUMCriVCi8jTDWmy8j58McGFx3nRBM4yxVgSn8svZB9CHtRJMcA1og",
  "key32": "5F7P3PzAEL68D172XAVKmSqPd6yGwvBTs4tQwd8MVh5MS4WHcJZfTQwsxLYYWVoFMLDx3w39P2LdXiNcszzvhybV",
  "key33": "5i4CwvtLFbY55qU8JFgTRoPyveL3dQZwQmHWyxLPm9Gz5cz6aSLEsNNPUz9kM17zTNg2B3uiF6K6cpfrAhKZi3Ri",
  "key34": "YrbiLcDqMvX7CVZdJj715kTqTXSaS6oyFVCgjLQ2SStK1zGEyxsbFDeutohE38t4Btdk6HS2j8emzbGVjtUqHMz",
  "key35": "2uNHMa6bZaGJDhUnFdsKftw5VBTwUjidfSnoSeuwKbZokbGb2Ajc6obAJmj4Tax5eMxZ1qU2uVoyz2zjuooeP1rd",
  "key36": "5MjH6pSMEMkWScHp4U13XD2X6LyWFR3S6qHiYbYqXd3BNmwfRtR2aZFCqoX17NxwpyrMYdKFyRvnPD2d579wp1PR",
  "key37": "4zQHb1qSjG9kGN7sPDDCTtiK2Jug5ihfpLLrFvbmz1TSZPWwF2TnToE7xbd6mg4gV28f2RtzfhFts8HaS4jmjhQD",
  "key38": "2vAbyMHSvub2yYMnpeiP4nrfww859TXJENmwQVb16fryswytuuJRjPBgDuv85y2kjp32N2jBt6MLxMHhvxjD1wkd"
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
