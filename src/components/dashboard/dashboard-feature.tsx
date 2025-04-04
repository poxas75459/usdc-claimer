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
    "5cNw3vJoof3NtD2UgpkQAcPVHKk2rE8hgCEv3F6wopbEyvXBRm2X4qvNuaNjpE1xf3xDwb3yAmbkvMD6igyrg2rh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5morZwavxny8vL9cMicaZuXQeetDaEVZEkcTrXGCdnync88YsUR3DddagDCVteMnmy3ZVFmJv4tsw62anvR4JmNT",
  "key1": "4JPRSiyj3eaDY5LDowEYP9AQZtFt1DWhDik8nZgMTcnvQzSvnhgQip85947mrsdNghvK4ebWVbX2BMwuroQ39CAD",
  "key2": "2YVbdnqDGVhh6Mkjez7X39GNFPjgpzGMZqrUfBDJyjXNLyzP5rvGvLoHQdhbsCi6JCzUcYzHNotJSRnsYZZCENfe",
  "key3": "3nbbt3fcawZD6h6cSm1AWQxRzHHNvacGA5kA1WUe3UbQPxGobpTFFEsDNnyVN4iZfojgVoDAQDSnVjy8v7jRrQzc",
  "key4": "5ubedv6xAo6wMhPMJBU6y8mK9nHd5HhiPtXEp7az5TpaNZCEQwV4jJnC7hFkUecuEWiJRfDUxmgkfYqvsNfGP4om",
  "key5": "3gLpGgPG7R3BbADMV3oNYJo97vwe55y19HZsqQey9s4DhUjfiVuWk9RcVQVUw6NgvszFoTWPmSQBhWk5p1zNuhJJ",
  "key6": "452nR1bsufiVaNGWvKLHyoueKKwAqZsw8dMcnDbCa1ccg7M8SXTA79FngmTXmkw2CVEHCNrZ6qZikhnjkQpAZe7k",
  "key7": "5khJ8y4XuW5kcGTRJx1b2aZ7dZNGw8WyheKoTL8DhjcVudCf5WLGCk3E3CiYdGQ8kssHYuReiEaJcyt35x5mYxMf",
  "key8": "51oPNtMcMiJE9RZysRrsiKzWf7ARFm4AsCZCfZSFHmaEczdtZVo2Yp6ZWC6FPUmUCFwSGskwVhHcChwPWeVD85VK",
  "key9": "3i7UsyZn9WhY4bVNyQQoDpTnd7SCTU6X9pV1tVGsu3CzFpHdzfQEJ66BETGEDbi17f7ccxKM5omdUL9TtCFmXsf9",
  "key10": "2GP149didgv5xts2rH2zj7fufcntDwrPommNDqJ24w7C8avMj1a8t5sv4dBKLTXiHNcv3PrTYmwQQZgoYv7VCKEM",
  "key11": "3JNAxoTcE4y5Hy8vsxaE5Z5nnX14j9G2szB8rZeQzi1WnSeE8BFyQZ4GbQ2xZiCo4bGPBiWbpwDk4uecydiQW1Xm",
  "key12": "3tA4Ske1QKfmDpu95TVPhmVWJeiT1AgGbkxAM8uNypd2C6YUhE3DNE6nMCwCcxiyKANs5nJXGZViPuQszzjTkLmz",
  "key13": "61YDqgasqzUho7JN7izeuYoEDpuzuT7YgQMjsxqx9KSyBBQ9PynvK6UTDxqqTpsjgL7njNpFZn2jFM4jNyzvNPfT",
  "key14": "211Xp2YtReFRt1s9xGdqUbgfcUDWPTd4yfDdccbupQA6UF1uGp4ArqfK5NzHMPHQQC3SmZSwJ24YMSkiZhgrVoXD",
  "key15": "2yHRz43woogKcMMASQuP3zBZjouzv66xxcNEB4CYtZdPpNxZjnjGuGUF9W4Fm5Ae5kfjjw5jVxFLNQSdUp2zLgqR",
  "key16": "3CNEegYCZQjwdbyo4VDEBnGZskCe7dPU1EhTwcXdn4kE9b1Fq42ewejTb6UoUuFS9xDHESjMsgyrWStnEnALoQbT",
  "key17": "58Mq8c9H5wym1VXfyUJdXb1c9ji5ef51obSTB1ie2hBvkKBt1CetHUwaqBQJyas42RN2GjYQeAy2NkEXpQT6jS3M",
  "key18": "3k5CqowQMACbGYoAGZ9QdD9UAvEiytGaBJ6UpdqCGU8xraDW2dc8j2gfAaZ6DDuGP3n8NNukm7oixUFtTogn4orD",
  "key19": "5VundoMjdps6rDrasTRattCvKSL1ZZCYMuPgGyKeF6x1reLQuX8nfkEDFD7WWjAqh9VychvWK8VEq7U8HHw4JYXN",
  "key20": "4F9V1aDCg8gK2sheSWzejc44foPqBf55prpr1rFGU3BNvSyWctJXUVQHdwSddEnn5Jqr2XbgfVhqy5WifDaAwGjc",
  "key21": "4nD5Ai4e57YFUvxFg1PZ8nJwNzh6miVBJo2ujRaRr2ww14YL7LBXh3q8RqkqDtC1eax3LykyhNdCXZquZRn7tqjP",
  "key22": "4uYejjhNUSANYowLXeUzgBvYhnQLCzmELEbaK5zKPEwzpupeRrNwbxYkQtCc2LKcXipTKaELvUnpB979NKk7o5Cd",
  "key23": "4in16NRrKzxR67ycnaZZPf36GoSbPQWpXY4LJSx5BcrAGktwGjiU1J4qFFEUJSxvWwqARyNF58a4iT8cz1sR7vtS",
  "key24": "5Zi4r8xuSQuNsHBs6bzE54FnGkhNwUwRqWf16Ro4y4BWqAEPLucTF1xEQMTEknGPRqWAS5BSPANk2wePvwGKFog6",
  "key25": "uBgjadaPAR6vQifFrbHtemZouMyEY3ka7FXpCyguonABL9MayZSF1XpsTXnTFq1sX8aS4c8Z2HKfN99CbxzBFx1",
  "key26": "EG8qcvLkyk9qMosbtGGDPH9qZ4DdoUvCUKQHwGVdZS1Z5jSWnLpMMa3hyaAMHHR49aUC1YHf4XzxatgQVTm4srG",
  "key27": "5hNczXxUrCgdA75Z754MAbNy5hMmb85vkqCrCRYwUHdG13QgKyEkduQF1x6xxVSLQrdrPnRyDMuFt2ERL32tTLBF",
  "key28": "51wJbrxqiJJV8RhNh4F862Egej7XLBD3bqYgPGf6Tpoi2JeiTAwnTejmsUEcrfbFQdstrRBSCBriEiQfuCDzvstE",
  "key29": "2UNoNqp4QFb2T77khnFsG7sC6p4RqUGVhLgKT4qu47gqNdBdRKaeUHP1mKPN424FxmAdj6q1zjiUk3cY5DdYXwWa",
  "key30": "5LHynMWfnb1pdHwfAMrKe9A9DaxEbrcmDTY427SMnAqUX2CE9otq9TwL6bHWAXUfxSZQWp9HXQG59FLzZdSvW2vF",
  "key31": "5jHnt446Zh5j9z9ZCJmussz6maL65b7xNGQXYyxyHDwBkRXeJWHRvrEFNdfu8BGp8dwVHqEPaK1rP3Q1XyXjy2vU",
  "key32": "3ND1fCHGn28MNkv7NZk5MDbKprvPccdqbDx2uhEQ6PZoAA2TcVTEh4Ux6ZwpGg4NdjHjC2b75S2EcKLHGrFTjwoz",
  "key33": "2PsTaFmpEJZ2PC5HxGqXxz4emCtckb3QTkmS1RnWtQxZRXEY2tYJRsnWCJp51yWkdnR8KuxjDBPez8QbFN56LBQS",
  "key34": "2cHDGFQEEDNyNKesLsr92tjdTk9nBSkAH7es1axT1J8UB1qWvwxSnEkGQm2M3ikABfCQaS32rfzequfPB8GF2Wqj",
  "key35": "3JYSbMArcpzFCiJ2eJF7cfZAFiEFpeW9jdLyAz1Q5BCSaAvSQpoBTHF82tLvdWxLeKW2j2AF76oKV2p2CTihVWK4",
  "key36": "2EbEuBj9bp3jH4CVDVJzrnd14DRV8UTkQrhQa7MP1mqQBx5kVjjnaNLK3DQ1nQQbDNLxDv9ziF1XKJuxd7Aj1wkT",
  "key37": "2BAsxqiJzPHj6cwYeeJ8xTdThobvJ9X2HvTGMaDEE9LpZnXevYkibi3vQha7A4CUT9ddUuDPKbDtg3M5VrpRTtcW",
  "key38": "5xGdEYurEJBhsWRBVEuXY3NoA14nD9GQiCQWjWDd1WK8BuYfad6CDotyKfCyzneeRzihY9a8Ki2r47imYw6a2JrX"
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
