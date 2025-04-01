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
    "2daYqxngLWW7MHLoexD1TLEeSrmBYAGGnXE2VhB1xpKH2d4y8HZ26kE1si3ubnPXV5CQFRbmCSthgqyNyYCNM7Pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Td2jqNmfaF5LX2FmGTDdTf71kqxr7eQRZspBVriTyZZXURrkMpVcdLhUVCaDYcKr5DK8ZTgFk7jZMA3aVTSgaW2",
  "key1": "32Y7eN8CseDLoa9A349Hojs1N1sQPFEYgYHtA2orje7SMAGm2gsyWMVjq3ECPG1Nda9DzegriY67qKYfHLvdc4sM",
  "key2": "gsnFe3KeP2545naXkzL6tujGA7hLEHZNRqaXceVnLor9TqyAUquJCYcH74FwoWwnsf4jJ5noxRgNB5vb6Croisc",
  "key3": "5skEDcpqJaVeLsTzcNapcdXuMjgf3ABYYrZTe7xVAJQNmAxVfEi5ADLGCZ6KP7FZN5bKsGJLJhTrVjNh6cJ75iBr",
  "key4": "2scxB5KkaKPk3tFNefbnrMBFUrGfC6hwajGqu5Cya656Y2XvoJAT8zKiE5W5ESK4URrZC8xPYmNXAfv8CSyPyFZs",
  "key5": "uA1q1xUMi9Z4HTPZFDCNqRVg3m9Sq26rLjTHB8zZTcvWSGAQBBuEDXKrcDNgfNt9XuxtthnFNLjpQ1uSMa5H9o8",
  "key6": "3eQtaTPgp9GTDURFMCi8avYs1pC3k8kh4s2jA82E441qxEEwMmtEDQmrQySdH7kPV6JzHJB6VykQQMyG2TicNakh",
  "key7": "5TcdjG45VBjWmKDp4wjgxdGwVazMdHoVegSG6qRiDnvj5EaYwkWAiD1XR526ZbbVeRGmgnVsYFRTCZfQuZ5agzKt",
  "key8": "5kBPkUXvo4nee3dDmucePEUdc6391Z3uKwNThGx3rox1huYWWVgNsfVCNUdUz9o8y42WzqddshoBpNvmKHa11wMp",
  "key9": "36HtoVVHxtSwgf24FhiLm7MFzJTz8Z2PutXzJjSaMnBLGvNNuodjGazMpXb1J74LNdFPy7vVffxEQkjkwkHMvZaV",
  "key10": "3tQEhKvx5p8wXh1YiycmWZpTXYNXpRjphc6srtDjsBVXKM8EYNtEwNwF6MTuofUVSSaNfUd94GZZuve98LuJkAsk",
  "key11": "Sjc1LFJ9ALENL8Zk5C1uqLM8Yq6WfANckDBRmqJ78HHB5h19n8MvjZsnvBJ7E8HxWSAEuBYoudptzewo5cifta7",
  "key12": "2hHx17CmmogG2NGwic5XU7a8FyxbrpxUQe4heCSwrP9Ro6nMdpgccshby2JCTPaVEH7wuVNn7TyR49gFHkXkH67",
  "key13": "VhcPXwXj2vzLJgnNbthyEwuuddwzLsb2VPWxZUcBjnj9vnELJYCKiRWxXZ89kk3tUQkmjbm1wj34YC1ocYSSrwK",
  "key14": "42gsvqHfJ5R6Yz3H49jtqfqKLh57EkzNzSQsHQAe9YJGNTXUr8dJJRmNGDJkT98MAsfptArJDvdrHRKAy5HDbWxL",
  "key15": "Mtbh2gFkRQdVtZsH1bVVTHprnYvTpiuPRaMa2E3Wm8cKVkiA9u1d7bR33iEKFnSMy7mdM3Ks8Vw4rAydHRrAPxp",
  "key16": "2wgWPJs9h44E4XQPr8NfQAnzVpNjkSGb2cHznQdvp7WZmXXZydohumqt88Hy7hnXd7BMvzbsFtjabpUvbc255yFY",
  "key17": "4hqCnWkYK2ngPSTRNRA9mE3KSpdiCg2GkXG2A8A4WeKHdvs8Cw2zqN27VUkJYnTfCc55kQC1HqidN5QZS7dfbfAB",
  "key18": "k4hEyomwaFKpJKDzTKR8GPkqwhbtKYi89YQH2GjnW4XaXKCixmEWMUNBpFUM2kbAS79C67yZwCTbvnoAUF7BLWb",
  "key19": "3hWcRGXfGkW8xjFhCh9k1fABewQn8Ni9LXCwh3R1e2Vbgm74pS7YQaYY6gVs9sS8ETQ7zHvMX1kWcdNhU7L4Pg3j",
  "key20": "4873MyRhRpw17yoexy6Eq6CsxHn23Dk1a9bQctV5adbHS8jNcbH5ofeo7y4SWgNqDn8jRZVYeopBudAEPCX2yxBS",
  "key21": "5z9Tbtfno1zag4Car2BjBuJQYxie3pxcX8yChMkRrntJwHsqofGSSBeUJFPA619H84WyCQtiX1J981y1tTg3uP66",
  "key22": "3JYHEod8qxKZeuxHCv7L6xLjdbJF1E2CQAf9vmJBDgRitLQ4jt7M81G2Sxs6ANem3Txbrp6dTjvzmzP792C2oR5J",
  "key23": "53pybWVowXi3QdTvnkJxoMFBExE82GTpgkd7PNTLte2x4BPCMn1vMxbGwa7wKCtAxHC2QVh2Hdcuja2qpU32YEoX",
  "key24": "3p6Cgb82fHX3AkxyFGuKjRbV9oVAeZVyQiEcioSeKVGKVYNWCgSBEuGzu1iWMwnsAeHqxUGBjGMVkcnZBX4iG9cF",
  "key25": "4Sci8RK9jeT14GfX8XoWiEhU7nSrtfoDKJT5XaB8fHQidukJvykDMhyakyLDreM9Dm6tYLtjb8xJgswmesMLkqU7",
  "key26": "2D7LxcsdtRfWHvRsQ1STGxFwEMhhbsR4WAmemQ62Mc8G2apNigXLGyZbZvTuNr14VYKvSwrHiJaJ218vxpoVJX8R",
  "key27": "Y1njPzGU9WqHfnZp3YGBvdR42UJgfE9zdquwmsn7Y2XysSXsoBBetmqtWKLnLRr26j8gZpdRXHuQBRM8VAK9NsG",
  "key28": "5HMW2PYyEy8g9c2j4Bh5s9azPkSXeVGgHtGe5Rw1eC39fktdxMDoZBvM2wKwNuV3KNLBpMHEQ35XSvsHcrm3WKGW",
  "key29": "4YfjgS2qKLmToAy7JSQRvx9s5MXzLEbgJTisiciHNQk6VebCB8GuozwgRwzCMroSj91YD59oApP21BS6gd28ph8F",
  "key30": "2WxDKJKF1dRodmU9sJ1VG3hmnLKsmJJ22x4a6AR3UxJobnagC1TdaMNm8BJji6a7fXBPM2KSFYo27GV6ZUZkzbZM",
  "key31": "5XdPg6kDREfb9vott2X2rCLkE2czZs4S7f6V8Lz4G55sDSCdk32niJDPYqz4LWuH4GDbmiuXEW46T66JZFKriDXW",
  "key32": "MaQ47Ue9WWH92q1zKosuh8iZxm4CKzC5EinsYeM9Q7GWWGi4o3YcjLSWBqhp15Ga2FeuAF1Rawi1QmevWgmArMY",
  "key33": "4CkESpTcpCTBJG8LyvzXxCwR4YgvzK3BD8mU6r8655Z4RFsF3F6X3X3Ex68dfgCaM9oPHnbbRFvvkKNSc13Di1Dk",
  "key34": "2haqT5RiHbZ9U5pUvKfDba9Fj76LWif4E3dYQmBCqVyRLVHcccN6CkyHr1qBf6xyV6ydBYchUMfph6Pt27zWnwzP",
  "key35": "2m2pigSvEWQkZSvNFKJGjcepPUhTMwFpxto4jRGsAi5t8a8Epnqy5igHjWF8PQCTT3yrATuCoNg4EDo5aja4nHMv",
  "key36": "4NHC24TAkT38eHBhACWnuSE2pSiL4CZRdnhPEE2PtX53TE2pQtj5nqq3xduBbQmXhhASKvyU6K2dob9urJx97srw",
  "key37": "5DUmyRpq5v8zZH4xGQvPGQf9khUyASXpgq26oE9Y8HCbc5xWkzBp7rPSacTST39DoV6RETheBvCCW1NeWUqSXM4G",
  "key38": "32fxZfvgEapUpRcsc5JFRPAbrT8ZxYX99iUTCwibDjGaSLcWQM9agBWk3igsQHHuUtiqooR8opaTEoXmro3Am5H",
  "key39": "5eUfdsKZPhtox5QvFFdYjWrAfjKTsZyzC4F2fEsT3rPpu3b8UgmBKMkADBFvzCWVQzLytdABGQf31ZbC7kMToV1M",
  "key40": "3rXP1WpYT1Bgoasxuy7qSfZK5Gv4iKdA4RP7JdhSVAYto7wDvpajdp3iXjbNfNdXboJ7zjVaumfxfdhDwviZ1con",
  "key41": "5yBfbQmPu879wtw2wK4QpP8o9Yu44PNxLfN1c198xxQPBDjSHfkve5iPsULhNxinGvhzk22frkmnJDfhCUVjifxd",
  "key42": "53fLT9Py6JamnmDYdGXzRXqgXhKZsjg2yxxRjqpt5gZFUF4atFntKuK6aYWzJJDekFRSyAVgUAVszUE3GdmiUD2f",
  "key43": "pvzGr4myUzMHzctsXPDjLTRd1sH6aNTCDWaoKQqiNEBnxe6sXXuKDfDQrTdS4XiSTaMfiFRXCLuCZnqRMWma3fZ",
  "key44": "2maCRy8Qw3QMsjUAA5E3Gnsi3eibt5kZxhmRcwbdtoNUmWdD1za7gsFg8f31x73uimqVLzYJ24axtn9ritgkvweU",
  "key45": "2VrZNvzFLsU8Yr2WXzVsYkz5igRMRKWwoRud7NNJBAGcCCSiasiKMgVA5HLerq5KuViaqi1sS6mEtk2XNEN2sGSG",
  "key46": "3SeJRSvnyV91YTkkeRktQ9mqi46JYqZXfYRUEfGC13FFLA682Sm4SeunwRDtLkKBLYffQxbdbeR58sLqXsKF3Lno",
  "key47": "2HgDLNoR9ZgWCjjp5ZrMF1TWMzDruVS9HtjiDRahVjfrS1YfLRhpb8tPZBG6g11TM326emJCQScYfgmXPVU9FJAA",
  "key48": "4jyRTPSGEc8G2BxfcXe9Nf5Lq5owqjufFfsdQ2T79s1MqfVZyrjhvqt6uTT5zdwsfkbYaXokiMgBgnMPPgC3rCKx",
  "key49": "4MK6RU9mhdXqVE1FntcWkaZvLsEycTwXJT96QVXpy6E5guKQjx6Rae9wfnCMdMoGcYtDskDT1zWbcTXNE8gVFY1B"
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
