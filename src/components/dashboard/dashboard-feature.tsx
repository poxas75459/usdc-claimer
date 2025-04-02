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
    "5do5YCwFEfc597Wr3RjdwosPVNMQMRzDcMztRT9wwG5R1aYJgZmS4Np5iDKrdbPL9GaEjkTXYamkryNn5T23umdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qasNugGRf7547aAJbRBVcAJPut6ANeRVrXEoFLSAJ9FViNf9AosE7Aqv52HH9iB6f22yLLUw4G6tkhjr9coEaNd",
  "key1": "2s5NeUV2ESVqkoYz1o2W6dSGUmDPn1NHajwa3NzMM1XmYV7Y9rVAsRHGncGr2oM8tQNkvGuWdajgShFFpnUwW1oC",
  "key2": "56KoLA1oemnJ7yUc2W84geAiG3BsXgNBJ83YiVpUvABeVbHkTEcYThwcGWvFR826yGfudLoXsBzGWu6XQcgkmwoD",
  "key3": "2j2EnSXnj6kv54V7SUsHCYTa9VTiehzBgWZ4YXTwX8D4nsyJZyyTxPpLmYCj3L7XjTM6hjXU9jBsfHehmyLNpmyE",
  "key4": "4AUN9x29zrcAxUJpisFLue1KCH9fud3Cr68DoV2NtEpivWCC3nu7pkJkBkf1pdE6U1RMbAR1aNsehsAEZmqcFGVw",
  "key5": "5ZndapCmyb8wKcAND5z6xyooCdxj8FV6EK1HFewBKZnR5kijvWXdwaUHrJZwjUo3ymvkZQo9a9CceLVX2Ds6wjHW",
  "key6": "KV8jCyiMScDE4QsUxjF43ejQHJd5CwDg92prEoE6MCSpdmYb1yG4eG3PGrzCpkcbJU6tGJ8wxV5axqKpy1v1kH4",
  "key7": "3RshmZVvUsJcy3ySSABK75K3SnhyyAFzTcwst4zvZHDV2rpP3vW2q5zPc423qP5pFziCXgNVP5s6LpACBfRuyfBM",
  "key8": "5LdVc47LN8jML3sLnKE7eB6py38wrW8w2mjmdcToTcLNjVkReKL3QkLWonzxty4L2kbE6jGQpfqQT5NpyWpWrSQs",
  "key9": "5BPpufi7XqcMNQieNFPCPAGMwBrEDiSEZcdZXodkRbsPYahkToEkB2GL9s51P9Wd3zxzoJFCRZdkT694X82uZ9t7",
  "key10": "2TRmiWTAg1JS49feXGkv5SGXpRYAy4HXW7V1Bhr1soBBqsSzXaeU5qJRXaMEoBJTGMNnDF2mdn2cusT4ytRuCtRj",
  "key11": "44B7sfFGzLDvZ86w6WtMbwB9WqpnQeH1PkFYTrrMw7n7a6QVxHpV45gnX9fikgBdxbd9NMXUDA33JEeb12B2mbLo",
  "key12": "29gxYb8srigZFMBLeh4PPoiENQCmhB6LXheeUVgpeaxqDMnCjpihQUs6w1n5kHAVx7NPR5ZBc5CvcJXqjkVwEs2q",
  "key13": "ttKdPs3mCJBuQezwTHadr4KruodQv6HvmiFZcHR9UVWrgLiHYKndqxzFFGo9w75QynzB9dAmtYinaAcD77527fb",
  "key14": "63xHLNNxxt7QwKMHZ3x9fowcYm3MfshdpT9C6VhgzEzPkuynR3DKMkf7dFShuYuWNe7Tgc1PbKMhxMo23JTUVYq7",
  "key15": "2j2tzUexbHo8jKzRUJ8HgrRqzgtPPnJoaTjYKHDbTCsd9qgjQPFrq25p2CkUoVTdrpMGuKkMM1cHHq2CzquPsDXW",
  "key16": "4BTZBCDWo4STQ8geMeTs9cMFTcKr2X5PBN8RyBePL5M5tq7vm58gLq3onVRAWDUZZekAPrjTJR7ivNSTGxiVndw1",
  "key17": "2tDAec9Z11RV9Xdj1MKsN6eFDtUT7FurFrgNcnKuTSoJ8QRLcVpVSRzwHdbZgiRcGb1AuL1potXSRvpAasfEyKcZ",
  "key18": "3hs6WLNCauSqrt2NAnHeyfrixfiTG6H2DbPezgaSHw9AGdEw83NMuVB2LdUTUrom5SdcHTtkreDyebKZ2PwVEyGv",
  "key19": "5yDLLiadXQ4PaUxbA7KAa7RxFgKumJL74tJyZhXXf986BinupxLZwudezDpoYtt2SntbjnUQTvFM9M6wDhcb8vUo",
  "key20": "SLAaViP5u4Ms3XAZz7rp71cqezckhyzwj4ZZKPsw21YBiLFQmxg9mNuGTcKoJHyg6qd3vG6AS6QTnhbj7WFDBwV",
  "key21": "2PXRUwRiqZXQfJrDDyMv5141aFNx4FPnaZG2b6pQEvGP93SVvWtm7wQZnLDPuYj7mGWNtCQu5bYpTiYpRT43Gs4W",
  "key22": "56jmSr3S2NuXZJWWw26RsC46nbuKhrqJavyeR2iKCWop7PjXcZdUEmc8X82jYt1sWUwigdXpNPFnN5UinNwaYvbo",
  "key23": "2RqGpqRDXKxNjrbgQXZKrZPNhsH6jK5iNKu62EqXQwQhhDnecmWCizmaoVBUKBbhLXNCUeS8cME3sVZmTMmVsw3K",
  "key24": "hnWXUDEf2aTmCZUj3E5rGE7tnctv5fmSSA7LprmWnNSx4BbZ3U5m1o67LRofp3Z6xwjfbNtDeyESzUfQgP5dphr",
  "key25": "4k2tePu259XKPodRohCuUts6GX786DmXnjswtuD8dbn3rmW23H2GfsAwEMnnpk4oXNdPkfocPnmy2rEqkitLPSfC",
  "key26": "rAi1W9rmcKGTyJd7oRSnXW6kf4pEfSaAUBvu9J4KjGmuMenWQv4oxfVCJunw9M2Qpprk6WWuKVqXwu2vRMeQBD2",
  "key27": "5pemmp2RCbW9ofmcPNq4m7G2g7vSwEVm91e5zGwkbgDh4FUHs43NyV1SXnQy4s1gcqi1BaG5skcCrwMh8csMEMyV",
  "key28": "zuAhw81jz8dUahsmRKyXLnHjZW3Dk5CWDJ1RyVhzc7JAvWhxvKk1xfJkhDeoPP5XuJzWqKwdVfvZVAva74DXWuQ",
  "key29": "2iSKtc8cpAvSvYMs1GenC1w6scgCWBd1WiEsBmUDHNGvTsAKN8jqfLJHre1vej8xJUzcbKTuryPkafYxCGU6jsSt",
  "key30": "22HGxozyqNQNjpXLqaGXzSgcKoLLDKWUZLZnKso7BkAEh5QC2vMtdQa7nrFQZED5HYAaMHbzesmpbLrLQ9JsJ7Bb",
  "key31": "4BpwwBZZi9v19QS17dE2j4wAnVD4atGVoFpWvKLKXeSq7iXfunfXdQWH5aYtjkj8bzorSW1RKaTGw8kj5XsVgf7G",
  "key32": "66m6avHDVg2Pv6ywkMRWTnD563VmmjkovAYT8g93eqqjZVLaG6JA7Xce6wVnAgnrMv8EwzjpTYYhY1NSZgCcZJrW",
  "key33": "2QBAW68Xki3oHKLGCVoPSSW7DCm9UjEgEJcW16e16qYu9cHSizTj94VivxnPRh6KftnmXa2LzihR4Myb3yajfEwA",
  "key34": "2biZNRPv5aXm8hN6LPkVoyTfeEDuHeXF3fMcYqUwcNjBdSWLTDsoUanNC5JF2N15sxcPugvFyzx4eMucwa7XjSU6",
  "key35": "4sddw4yFMYi2S4eBd8H9fgRg8ckCEV6525AHVm4dMzbHgPhasTu8i1RtKv8eC4A3pZD4nipruYNCm7b6akNHVKL5",
  "key36": "ND6ErUwp5crt7dvUBt7ehRNehjSD3Dg4pHfEpF8GZ8Tuc4u2kw4DDRyweFSPczKjPnJ3RbHoJY4PR3tWSgjHf7x",
  "key37": "2qCVKqV6ZSABa8YpEWFYNxjTBrUxQLW3wZkKHbiKTBaFPoGJjEeNJfMPJrUWySwuti1xAcjcsHwY6btrfscDv2bv",
  "key38": "31ivpAa1xP52irMvLrQQ6K7pduabLWqm8MSGUfnYwTgm8BUFuV3nahJ5AY1XKKuTj1DJ4yAeSDPt8uPodXk3VSn5",
  "key39": "4i2wioMiUDcPHQXMjTG5WgpqpgnBad4o6KRYGWsQ7S3g3BNf9HAqKe1XJFkvTrXEX3VQyqUA6YzCbyn8nYYiLLGA",
  "key40": "2Gjbdjew8Gh8muL2BtY66YEFJL4eAKw5WumowRgYdsLcH8M137nNAQGm9whDJyz6mNXPYLddf1hjrTC9HUyKWKmt",
  "key41": "5eBLPZAT4DHV6DZZGnCjZcST5Tkh64DqG12x8JgiJd6i3mdDDFXF82jRb73tdi6ZyNsZ4FRPEdqo2xoFtvxbEEg8",
  "key42": "TVtohEB4i4f9WsXxafB641YxUygamq3HVuLrKomYJrj7xDN8N3QZo5n25DptGRUCYg1fTQE9DPCMiLZiJvudsVP"
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
