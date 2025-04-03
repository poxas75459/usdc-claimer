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
    "2F2jcQQdh5b7tQGVyogm35DM6Dc6QWJXtVYG6B6EVzZ7bKoSYbdhKqbuc9rxvYvAKPP2Ws9XjpobiZ7LUAGCGTa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "648c4HyuujwVT76tReJfpQmFS9cuvJv8p2SaYTE1ocSv2xHZrXApPMbrixHpguHFxaVwT9CUPDnRswNgMTKo2atk",
  "key1": "3n61Uzkrz1ZAcd39ZCgi2aeBq5cBGaxxQ6XLLd8wSgXdvyevVtSKVSe8PdP1xco1VQVnb2jE4xN8QY2stUfQ6Qcj",
  "key2": "5V9C1mQLEYJcTpHpKmoN2NC4p7r1RohUYUepvbdRqJPg2xkDbzUsXut9G7Hk73h75d89xoPgufNdTajfAm8r2e28",
  "key3": "256G7mTZW2ZBCQ5v6twaVRr9WkE2hbtoEyBH92MdaerT49Ek2Kv6iX4JFJg8weotTbqRbeyAfup3UjbXKvs9ugZ8",
  "key4": "5uFCzw9yxKi9qDLzA3owgFo22qL5N4qnPxjdMnkxNFJg8ETLkMgpnRTngi2biQ7ekY7mK6sDmMNHVE5kfcVsJ6pL",
  "key5": "5kMidWMKCWyCmVqfwBiqF2L1PPJZJF5hc4rabq91K2kfgL9PMsB5YwY4gDPzCPHPkS3K8Rn9ywnzjxuzuwL3But9",
  "key6": "2PKiAnTpvktSY7ym9NgCDfKYzoxQQ3WArpAqX1xmfEmEGY2fS1M3kU1rTrvo5ehLnxy1hUbPzrn6mvEosr4kXoWU",
  "key7": "3YJwwHa2mKU49T8saqDunMexDVaWfop6FLd7kEoYa6wjivu8sXynwJSwCzNakTAtZpD5o8dk5jX7Nub4SGGhtyVp",
  "key8": "23HCBcsHDc2NauEVnTQrqGhNGJz5tRoL7ekLq19MZ3mXpW7XQhZfuhuW3m3p5zSjLFrACRtVGpgc16HHZMATmj4g",
  "key9": "4tCNZVy9jykirKHJ5j2NanWdHpRKpK9dwJz3Zx1H1cazCypN8G3Rku33NLmG2r1NrXQJYarMMZCnqjktpdPQR6UL",
  "key10": "3Ds4cnZ38tbzyaddWLshgVJfPTeMYMDP21PXRnMmfnqq8EWSMMRFWTVWd9RrQX42upkAEn7TAepYtSbzgqbNjxhx",
  "key11": "2p9yLBkLn16wUcYyoJoWH7gSyRouM9gz888gKy5iMCRX2RUmYzW6rtZrUZYUNffmTnFok2brWQogFSBDZwDEkWvK",
  "key12": "2YRUA1UiYLmpA1WxcmaXUdUEzcuKQMrdg8TunVN3KZgW3wBEEoXH7R4VVtx3uyeoXFKyBozg5fsu7wx232kcMGLo",
  "key13": "5xFhiPnBHuxLKTCSN3mRQQ36YDZffmVeWMacZtSMdwahmDKMMfy83LPtoe5smvG7HHukTZ1S8DCKAn9HYpXWHTnr",
  "key14": "3bjtGV6eL77NBjGZ1fjvx2ggG8ViSAbTLXCv6X415qBpSM6GCMEet3LE9fRQpL9BnAVUmRc1Ec35MBhNfMDhgRtP",
  "key15": "3dmctvUmbVooibyo3DXcQ42beRLQt73Bqw1ZAbtUm4rEXBR4Y4CyqeNQh6UaAw9yqWsLFtL6dzRH2fgbW5UyDwki",
  "key16": "5cGF2ZpLQC1X3ie2GmgJM5UbWFZt3WzxBwT556DA13VVEPS2hcbS5Jeb4aZczrzAHGYLzUvmXGmsMYgBUqBmdtcu",
  "key17": "2181N8LuXaeYiKnik37MePfG1f9MLKinhD4NfUEq4NTfyeSjvx56zTL1LeqiJWaHtLJ84UsKS7onDgYi68Yd6Bmi",
  "key18": "4FAd4sXniEWKBZ5M6PaGjss5DtdxDaBYE9daBgVEHxgnR1AtD251LfvAocW25XJLvUo2Q7oCJN4BYFt61kEYupM5",
  "key19": "24u7j8gfyFqFM4Esh4n7zsujuAhz6JGu8DHqammNtZRRnGiYJPxwaVyv3NJ3cUWpgruCXSQ5Vytc5tfddsSSfiZy",
  "key20": "4FKvPHqU8SRReWvBhHD28sBc8wh3bFXrJkX9cXynVSWyLDhqZ75wuAVq1GXkpTuntBJbLaTWVQkQ15Eigo9RrTNg",
  "key21": "2FnDbWmahM7oVMkV99SHUxe5VJLT2CtZAcUG1P8rHtM1DJFYEaDjvVmUKSc83xMaXjX8ZZEz2HJfjxpAPMa68r1d",
  "key22": "64HWVqL71P53oaaH7aUux1q43uCuZr455MY6EuqNKu43GXMiE5RXt5sf3CkLzYJLpzL8EWtSj1xma3a1vTjtBEYF",
  "key23": "63yX3HMYvrkcBQbjRArhfHebYDJREV1w8P7QkLD9ecX9B7j6Gi8f63LPShaWMgHjZ3rWCRW2S8cdYEE4S5WeSKpi",
  "key24": "4vZshSoYTq2MWoGYtqcYyxCrLTwkks6mcMbZWwHZaWqyvs4B78P1HLudWYbAj1tgzrXA7dNehKGgC8y3864tLfve",
  "key25": "3E5LYiTWrJvixnmqTD3KJh4Be7NTqpT26q4n2WmDhKEXkknm8roCwK5SgbnmDk7RZ9xt1VLmd5dQiDjosYPhdFsw",
  "key26": "3gPMsmfSUYUqcCEgqqkUDZjfvCwrULEgEut6sJsW7osbfr8q6DZED3XgFqH4ZuptTi3CWfu6qAWRNxubWbPDLzsH",
  "key27": "2bhtbvLCraswLuzc1x1v4pQwxV4BUUSBCWs1u5w34xYPrmqxqicd3dgpAfJuhJgjXaJaByJ8JyhzmjxeMbYzFVtm",
  "key28": "5F3ogvESymLkgfVyJu72U54wGz82GPCocHh1G9YMzUV9RRqbibAsWudawoZ4Yzy2tgc3WET99MwYU76JkWJ5ht4X",
  "key29": "3DDZ6NV6jVT5Tab7iz2QZJocXg5sKAqRXipAzMNsZuJMqSByDHuyYdvuasX5tjG8WAowDeX8WKMGEuj6WvJyRTBp",
  "key30": "c1BkYNRVDP3H6kug3sqM4hY5awgBChLmDv7SGcctSN2giGf9GTPVXwEVWAmZeKA4gQzLxup6c4vg27yqiab7NfS",
  "key31": "2NAPmoRepBsSE3p9a8bvyrvgXoyJVHBXU1gBoAawqN3oRVk7HsGMv1kMoE5wd7ZzUEwPiYnAsdcbJ5xbeJHKZbaY"
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
