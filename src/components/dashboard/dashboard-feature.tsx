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
    "3uPWzENV4zSW4x4M712P3Qm9doRDLsYkusmCDZennuZ4JqpRTdgkgjGjRBi97JvcJg3ai63wgSweicbwiNUgmkbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9yf9pU3R9Fi5EJxRA1FznX1h23VWtVUTJnbp8qK1fmFyQ1n6z3ov7rAc5BDANM9TMmoR9G8WYUEddp3DowFMXk",
  "key1": "DDSewFzTe8ZSfLmiGcTYc2xgEXP57YxaFfCUhwfPpN15BkxuMwK8gXueknkeAwZAnAPWvqLb9eQKrq7inMz9C5i",
  "key2": "WW7kDV9R9MA62UWeqDQbZgri6yb1hYwpHtthCHeyqoVFpFjTVvEEMVcRLcDhTiAadgoS4NBgR2ePAux572c7CB9",
  "key3": "4xFtsNUZhwoirg21Jr6TwubWZhDAjkzKJq41DPrmMxz1hPaFTsF1otpm2ZxaodULu3asMW7w1fGZghbWwrJhMzPt",
  "key4": "63xTuipKU1Bi3DaqETX2V11NKThXVxz5fH3ZW2XeACNB5SYjd5E4tdDkjjyPCcahLMZDX3JShNpghbfB9JCHMjQd",
  "key5": "599JuuYmjpXoZA86VBiZ1f31msZKSEg3eLfx9WoGTCjrakAJmW71nZ9cVexZsnHicjL1wmbM3EUm6BTK2Qxmd5TY",
  "key6": "5kuiDjBBwcYbKBJGL8teYswsveHgEVEoqevdQK6z5nvPZKwEmNNUskTDDpQpjTr8bc9nonGAcsCbuXw3iRGzE9CB",
  "key7": "4bLig3bx8u1uXiBX5CRDJ1eCBZJ52JeN7mraRBz6E7eKYkLgqbHj5zD5qJnnXTni9QLyYXrisVHX2B2MovjuwHRN",
  "key8": "2bY8DFEwRymdpb9YXE4gVi79V9c8fXS8LX2SeCWAhmV4cHfJfi2oExhgTUGvD15ySrh55KFMcvNZFq5XHHgtprj7",
  "key9": "66qWq2n7v2hy2SmR2RydoXdpzV8d2efyVivpo28fygBn3P6sujTHEtjsPwC4s1w3DvWfjx7thGr6sTFYXkAYtEDu",
  "key10": "HvyzWEDAtEMKd9GjajnS5dkrrvRSdo5myvvtZa64iYggfQsocQ6F3gnyZDv4Lf7JbFQfLawi1MLqhtp3YJQ8nCR",
  "key11": "4zn55bKN49JUwUpWGtwFiDRaFisFKo6XsyTTXQNvhuR8D7Sjr3uSZH2achPHSHk8X418wySzfQPqf2UicvjaL6Wr",
  "key12": "4bTBt4tFeAMP2Si6LZoqQFtRgLWwGH3WE2t93Wqq5LeJunZ2DHkGGTxuR1MiCuXGGDxY8ap6UKah2h1W8y5Ko6c8",
  "key13": "5XeZ9cDCr1524kogJYSuDj1kyj4TcCTaiJfxnQEw6FNokFnjyEdLrhrGbgzMYN3NLVE1BhcLNXBvTXc2omETYFNr",
  "key14": "62CLJuKCF6L3Ym7KCCG8JnLNcNZ9PXjJxJR5jAM4mXgan3ZmTdvJpSsipLNW1RMQwLXS3iJb1KGGTAxoKuP99WVn",
  "key15": "4sgSF6ZKfCi5sbLNgEZPKdaRFgyodbUfWEhGPzc6Li2rphCcg8DvyienKfZRnYgYsrZbTYadSdAmo7fDXXzUqpyj",
  "key16": "2zRCFkoPS55ouxCUR81mUCvSms9qgmuCZnpshe1zdrH4aRHYuEAwkVgcw9NSnV8y8a6zTqe7F6xAMiHzhYXDtYy8",
  "key17": "2k8Lj8AqUBVFYpw2tdpVdUxnvP9R2sfbPesrSoAcPamPEysEmwfEn6ckz2r8WkZfz5r6JgYSTegpec4F8RunfTbN",
  "key18": "4Yj5tSfVtGBEPJdMVQG1UNMR8hNx6VqaLvvYVokX1PJt1MaqnbCVDry4vnM26f7sz7p2ysiQTkbbYjAhmjJHLJqe",
  "key19": "2zWzbMAasoPgoqLiUppdqqVPwsNSAucc9TJq8YYsu6VkvUij2Ud2mY69b7ik616zyNxui6Zhtxf3DyPcuCCGsqkQ",
  "key20": "5xsLK7HBMcr3RJ1FKgaZsQ3qhj54HHD2nLXmvudT2bwWNVuEBdXCezWREvrSYHUHCHr4X11Ea9ZCAnfeAVQXtLML",
  "key21": "2vpUS1BYpYjVaf2LEvYtFPv6DocijMc7qKaWUeaJY8DntU1iFaD1Y2bFFo6C1XvJzAZ61Wkxt4n5ir6nBz32rv5P",
  "key22": "2wwgm7211hhXZMFeXwiCg3hvBxVWGZRoFBkjJZsTFefhuB33AYvcmwqxbBFm8PQPv9d8Q5pLhADsNAEqbusVqfD3",
  "key23": "4YtBjjsap9RKTTCG23h6F4W9gsR1irES1Kmu86AA6Sw9aFisyyiNb1hVMAaJMfCy5y45q4btT4udd55xprhyBysS",
  "key24": "32GoBjgeaLCKiSpDfbcU5x9Vzq1a43aNRTVTKfiPX2wUjDkdue5dWDCoJt7Yo7z783ayuE2QMSvHbnxBUs2muoAR",
  "key25": "1VkKmErnbCRLH2jXcA8zNNnrc6sJR1y93wfxd1zd2AQBG1Mf3V7HFxg4Qh6xXDVm8wY2yoTeRXqjQur3bfQLRgE",
  "key26": "2tH78amQrfbkWMcAgpxAT4G6wBpJsSWZ3rai9EoJFWurp1ZELvpuCq9d9e6uh1NNqjTBRkstdYbR6uxTNhAaTD7M",
  "key27": "qFgWWn5srJBDZ4xpUMPvSLjpDxd9Wa7dh2x97L2182Y4cJn8LbTvxmwQuXA9aWDXT1Kxk8hdKwBJ3pbtPSTkjfp",
  "key28": "2kQP1mGfw7hEivkFu1NWCESvHHDiHunJ1m36Fp1UvgehDozUPA5673RK1J1DkDt5nAD1UfZmBu4BboApZzViSRsR",
  "key29": "4rMWC5kkgi2HHhK3UyJM2ZyLDEf5SP8hDickW8VsjvLuoJmg2KMJ64ktagL2mm2b6fW38gSiuihHfuaLYke6eV8b",
  "key30": "2NDfd6ZFqvCNqptpg9QkQJ8PRjFNR8jKzfp57JgvLW6M2eg6wS4MDTMTE9LvPFPJwomMKPnWSmeSfbhNiz4jCRcu",
  "key31": "5Q2ciJm5dffzEQ8L1sxq7PKwknRYGEviYzeagRzf13UWegsTq88MDqwVwsmKJzEmYELESyUWvYg8y8CatFWKtyz8",
  "key32": "jU7EV7q3BbX3Gp5GbKa7GJMrJcjGTR1UdBvFw7XwVsjzAGCGH7L823vL6mUM9HJtQTWD7LVvtz7ww9dzGsYvueg",
  "key33": "3rwc1gwnVV4JYzyX9tQ6wSL9vUQr5mmQiWqKvGFJZxmztqQFpGkVmeZw4PagXnXnGQNmPpYw9hvvB7ec6Kmj6YaE",
  "key34": "24W4qUemTWiar3myunN25EeY93iX7xiwMjjmKzS1YEJLdvjweAunLkBRrs5S4JUBB1ZehPFkEsDoBDWuJaijanhG",
  "key35": "42PFtTKPSZpjtL1ChQcso91eNXEqhmBeFYouJpbn3m5vEeWb8QA9fyDmRw5DErD7FXA5HAQynY8jE1f4sma3uah7"
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
