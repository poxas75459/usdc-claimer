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
    "4bNtvRHeg4UAD89up4srdtZ6snTovDnQeyGrzyjCTzCgETZXF5YhGhGgNvf1DiAbe7g6o2bG3NjTYVtUqxgnx15u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eXB5A19gVqMdy4eBtdCfB5h1kNEEga3i13yuHuG8FZrHRPH2bCXR9L1VhB3tpzdcudJKZVe5PWvXr73h5nQoDHd",
  "key1": "mykQXCtxQVdjWZt6sddjsXb1P8YC6jmDDV6GFYYeuq3VT3rBvfM9FtXFn2XLQ4ss3e6hAD4pgtu5YxsjJUJqgKP",
  "key2": "36xSiWodx2QTh2mNbR234C93Y5hrBsRYkMY93SnarzdYkTByfiRq4CJMELg3mCh4eUHyrhTXJhLcbSnctXAN5eG8",
  "key3": "4L4dtTbdYoqfobAyf8ZzoDmM8xym4tNmsejDsXHcKPnaXLYQ3Y4vrtJf6kKk4UVFAoj4r7QonRj318dSqEczqBNC",
  "key4": "479ADb9gqon7AJwjs7PHf5JiAn9QZvpaSRJgcJUftRj4KuFyRzo6ppZa2hgU76cuD69xz48hi5mQhMRgWN23AYij",
  "key5": "3NBUiaAuUd9hS5bhTaJpYz4gfTt9ECgjQ843TmuoWEoQqw2v9AQovNJiwNq7maLMabmZb8EgfQWScjbJZhXu45kX",
  "key6": "2V1RG4RHvFWVp7v27NoCddXqVmTinATug1UAMgtZtTat8VtpZKBKi7bp2jxWAhpCgCaYeM8YFM1qxzW4RrhKoPWZ",
  "key7": "27PcJasXAoiuxtBroZSGiZMiPXoz6jyHtZrqEWK8LsSX4sdvXNNB5F8H3cR32pgZC2e6eTFPVTQe1GTQiMAGCEXs",
  "key8": "4TFGQpFt2ATQNmi18tDUzwQoGWXZHeg5G6oCAXCDHWZYZo92pvKgeedeSZwfhiRFv6TUh1C1omw2yPKrVknrszS4",
  "key9": "5hphbjfTCDR71GCV659uornUViPUPb2GgVSaNY3fRfQVmg4RmAZwGy3a7XDr9TSTLqTCJGW2nKHAY6wdihLuCKjB",
  "key10": "4b8m3kEUWB44WDUR1RvZ1FFnDRqAA7gSzVo8VXBf1NoH7xRt9m1iVKFG5FyoAF4tzZZDwErhYMxqx9thUcGGRZdN",
  "key11": "5hE7bW3BnLFhXW1paKcyhq8v9FjvqfsB787B2x6XQYK3i6QKGZ4ZUARbCSsYoPkuUGbjQyFd4uiXz43vq9Kj3HDE",
  "key12": "Xtxwp64CeChEtHctJFRmjq8F1JqM693GKs8Wb3YpdgegoYUoChy1GXhtJLSAys6Y2XHj28z5ABZPaTaEwzPsgZG",
  "key13": "4rHGuBAWRW3CgkTe3vSYrvcJsY3nuqxkdLQbpXWMJYW4cYaXs6atGm2NXkMNbLCfGukNFWnZtA8GZRmAZFmCy8yD",
  "key14": "EJyxbMWszLZvLR1d5uveb1ixRihTBayNMjjoE3ksmDqKXwuKiVviKzRanMNTuH9Tp1Z5RvRRFp5Y79kn5gSsQtN",
  "key15": "33ZtdKpcQzEGwxNbNk1qjEsrCTJ3Nvjpr4EwWPHMcdwRaAuG5oFYkeENLv5CVtfJBYmzmWMxvxHScyEHTJsumnzR",
  "key16": "3DuGhFxrqWjDzutFWbTo9yoGfBXN5dT5QJztxSJiovfeNzKJbMLasb2HN4DrpeafvAGXEdjxHTb9Kew1HegYiaVh",
  "key17": "4LbJVdeVySCVMsGtXQD3DnN2MN4Fm7m2QE1iYXKcLbt89etfetki1pJhkioBdbqYMaKt8V4agKydJXeyMFaQkKPA",
  "key18": "3pYgaPGy9VrzsRfzQvD6GebHdXHLK1htHFdFqtfoRB31pNhkoFfWtrGqjWb9QKtdmuE9Gs8i1byakJhh8x34NhqR",
  "key19": "3DyuJaVTwHPHY4w12PNaDoXuMRPZGt2AFoZ9gyLYHb43TMY4xiTd6AYiUyGYWsm7u4JpTp8EZqyM4rViFDf6NGFD",
  "key20": "4jsm9xDpu61XBoYJFS1Aof2D4Tj7yX2sqFEFceR1R8qeVS8hbUyxeZBC9Hi1EiKZfeJKFqg3aMtnp5mJ4pnep5sm",
  "key21": "2XbuZMa6xzSKUZv8rMBV9epEo19Su7mDUcLSwsJSRNsiETsbv496iYvcUVxpYpcoFFh6RxKX95NdkCqrGtmsudMv",
  "key22": "27HJdN5F2DCaCxoMjzLM9mKNcCe8uAiNrHCZzhpEeE395G8hYF29vyFe85gA9nykRonpZpwXteJJ6f6L69giXBWA",
  "key23": "3zBnCdYvnP1W5U94Hpk2eTxvho1RwtUeJRzDHfymP712rUWQk6Tzz5c66mEAaRuDPrZ5uKTSU3bCKRycxbNWD7TC",
  "key24": "2yqctoNck3dakXo99ExhMvQfhDr9tU9qs7A9nobijzHXgrF3XWuGFbun1W6kxzq77L8Fkm55RbrsDw2SSXzUJkHK",
  "key25": "3xMkuxain2o7NA4tiFBST4A5mVpEN2vdEvy6AuvGXB3FmMz7U9ozUtth88fkyn89X5xr2HtPZukcQeBRMF6WN94T",
  "key26": "3zRfdtUVWfgeJPVQ6bi2XGVGUkrubq3c7jsiE2FoCGB5rbJ9YTJ25p2CBR4zrumdAFLgdAu8A3uXEMfDXfixjLSv",
  "key27": "2rrcZ1VL5cGJgAQ1F6VoMvR6d346SYDsDSCJAXt7HFNa4nGGnvEwDGYG7TFRianPXomz7r5SyMza8z3e4YdSKKa3",
  "key28": "45XNt9hAvKKWeWkEZ2yeuYQJssoKKiExhEKvTpWoBYs14qjiFHFzoXLT18T3D2GJYJjrijKHsvQkHqpyYAZ2Xe9F",
  "key29": "2U4BqtiCzsUBCjU5jaqLQw8YgYrZBG2TvArbWTPQfU9yMTjkLaQfLz8CBKNJV1maFa4yPhrS8XjkJ4KHcsW3nsPM",
  "key30": "5jA1Fugg3tALVNW1wEs3wAbwoAeZ3rELP7cCBZuWwvhVfnCqB7bBvcRBugRqGYhhDfFTHTcpguaaJnQGPMap7ZEU",
  "key31": "61AWtzQFxV6nE44jrcr7Gbo28fsPsYgKWY165fpw38JVtszmQV2e2hjyefzEbbg6TLzGynrPJy6c2xc77mJJRZTk",
  "key32": "r1hbXfJQna9AuyGU7jJSWrUqr9ha8Qx39ER4nd4PCxDaKKPRA4d2uu54Chn5XeQV4tUjouhrV5ZNrJDVnwsu2mN",
  "key33": "GeZGWSTGzhLrwxvzT8DBj3WFzZaNAKFd5xdjUhfWsj3GsifgUfmwtE2iLni4RXSYyfh8jH3Gf7cd9HDyFpfVVmD",
  "key34": "5Kf363weSj1pbzVLKLaQmi1DNdkBc9ropPXhTet87GTHvaoSkWVyJo9V3FoDFYtttfwo33Vm7G63mUXNqwNSLF1v",
  "key35": "4Epknd8e3VmkDPDJEpHnDtCJyu9aig8zigSEiZSYQYy9hNABVjJCWMFBxHgy3rEDzXZaeKqfWrV9hKfVhQbxsvu9",
  "key36": "4GP3wdn7LwSNTQaNhnFhfm5JghvsWEhpoAwRMF1R93NrKKVKaiZc5YLHFxGeLKA8heE2Y3JU4EAzYWd4isBRV455",
  "key37": "QQftP4bLFPBD6ee8uQgFpw8hkfzUkK67kRc7qTSuW3MgjoRtBWNhzju53AWC4cUmgxoKaj3gZZhhm8QHan9L8n7",
  "key38": "vRxmYkcWAvi5P7uAsws82iTWRqRbsQt89arxpftpVtzN5PkPT6NrGUMAs5zgKJpXtpKeP2pUB97HfTegmvhefs1",
  "key39": "3cryy7pqqGNUibt6Ld67R9r5XksETuXq9DFcWhxXroRadDC33YcizhhbyncoCDrGk2roi26sMq3f7s1ZAdKCgQsk"
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
