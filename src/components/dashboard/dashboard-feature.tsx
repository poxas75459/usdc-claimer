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
    "256vx67W3U4jjxinURMj6BYLEaxPVxwfZ33mnXWySzcdU8JRMoNrkHTxd1smTr1kfffART2LtDJssKNLWHFYK9qA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BjDSvU6KpQejmZCB5yorWg6yttuGCRVPLWHUCr1eajdn6FL5cW7ki1SUxGJqALF7pEKeqyKKtVRmsxAjiGHchj4",
  "key1": "FR81ongD2mCnvLcx44gSveNn8PRpGu4c9vQ2B5dM6Nf5jrAm7SM6jDvJnjpg85dpZrTBkEE3WqV2J3vky2gWWES",
  "key2": "5a3vVypJ2SYRcT9UUKJM3DFrttLzKiy4C8SaQrP3Yk9hoRmsT5ggcHZe7ahLzq966ayH8fDX1QZFxFgPoWFYAHnZ",
  "key3": "5mnZJBtYmRyNdvb1kvEgWC73JsyJzUgoqDXQMZxwZx58ZmGvjp8BijhYT4U2DXrys2XZgsWNxrjU49uvwiS56EnQ",
  "key4": "entQt8AFSgeKFQiqKUniWa8PnWmDZVyPgYzYuV9hLDdJXaGQ7QczVN2QvLQFA3AzfTJYMxn4htUW88zhbiCKn9W",
  "key5": "bjBKNtn9qYyYEtm43sKTMPNdZk3rKMuvGrTNd6hmaGNbrx9Tsu5wZVM4kJrUpWifWAVjyb42DEdCns2saL7p9rS",
  "key6": "5HYcYpBpwY6ZAEc4GpkcDSBJT8GRTB5QQpfkskVmVZwYGQucUBYNzre37Ai3cEVoi7kjJC3iAaBVF6mipbeEN96Z",
  "key7": "5yyD2mpGjV9bJt22YRwoddYx6DWEY4cuD2aanCPufV8aUNtodMLr766nKWxF3U253FkBunoPxk43mdUCo6zRd56j",
  "key8": "4venmrxj4fApNMrPtdr2BSKRJtF7yp7aoH1uPXN4LJSLNLvBmMSKDgztTMAQ6YWe5Wd6Vr2qvbsVAgCVXJZpmYz6",
  "key9": "2nCZbNoCdYVQVZ7tfbW17DaRxkA2ox6CzT9NCuwVDhAcMVFav8eaTZJWzpdfaFR66zxNtkNbkt7cb47DQXtT33SM",
  "key10": "3Mv9uuX1SQLjPgpBWWEehpSTnwysETVg7UJizJmbRVK3ioTX8mqWE2FbVpzZoyk3ffDEUF3eB75ifgb7pmh2fzBz",
  "key11": "4T3fxJDSmsS64gfahVjSj2okSGDM7PLsudV1ckgr5h9PCeHe96Y8gjr5TnBe9HjBvNpYhy53EfFT8DYc6zsxwELN",
  "key12": "652v8Pgpk828CCAdiLxef9SvV5yHbUejYN86p6GWy1gvRFh2DLGNParWFuVjup5zfvj9NgqR9WrjMc5zPkbNfymk",
  "key13": "4CEqzRJfqVBYo7wacxQccX8g2vi5uRggutJtN7WmYA6wdzrvgbYt19HFrWU6xwdXpSJbFNMkrwBjMwdueqr2oV2j",
  "key14": "SkiozhULqRVeoApxrzpL33GimgDYuxGpx62S3g3vvG89p52YnY1XSZRCaH1Ewug3Hgz6jYmvrbfAEa7g2fNcmrR",
  "key15": "32GHWYnao2c3W2BZG6dzkv2nSUHVTj69wJGam1aonpjKR91tJxNmec1pXYV4odWZKvGwsJ74gxrCdzetABgz2qiv",
  "key16": "5UH8wDY1VN2yxRuCXHfbGNmutypDPRQkYiMK23yn8fikvxsK8N517hiuzm9X3Vn4isUAP8WWTz5aKeTtAa4DKFZ4",
  "key17": "4Mqs4Ud5qBqMcm1y3uHVzikUdhdPctrQgGy4JBHCg931aST2YueC42GojYBmKHaw9HR5AH5PMVQamftDiwnZJpxK",
  "key18": "4grdrFJoE1BnLtk9UmUap2X3N7wsmJ711K2cQN84YSHPWbcwzL4xLQhidDVQvhHtkd24iwqBkCtMCCpG7vZ257Fv",
  "key19": "5nsCSamU8ht7XNFPhNR56m1tKJasTYZLYTHDHwdD3XTSoer1v1pbMMpyekrQRwwXjkGSGB5Si2oEPb6TSo38EHQP",
  "key20": "45yJno2YsyS8w2PXStnkUJ9WnJntAjjeMpU1nSURYMfnEJmDFf5UrQRKa19yyGgso8CnTBRaTRhkz7tXwcBtyDn2",
  "key21": "48kJDQsVgDa8ZVcYZythSKjNrkVNaVKQJUmG8aCqcbgLDfqk8hvrVkudFqGc6w1D5GEgwLmR9kfYHA3gtpFMriev",
  "key22": "2TLWWxWdq4F3ZqWuAaKzZZBQ5mk4vB5RMDtMSJhX21BSmo4GQfX7qnzcgrftdJcw4371eT9xdrwojKBw9xczej62",
  "key23": "3kvTimpu65TAs2zLPx1qy73M3BgGp8iWfc1TJwB2FAFPgYTxnZ4PFfTAKseUxVPGfhSaiBpX6hJZ7HkYnFqK2VEc",
  "key24": "5mKz4c3hG3etqjXsG4x2nAADhcD2USLijnCiHW79giS9i82uaukQujgtnA3JcqNg1yG5eEnuF1nc5fvkRYc8n4bv",
  "key25": "2upNDEZGdgY2ZtE3fCsXr7CVQfR9XsWiKYJUw5E3xAeokt1avMb9TnFcQfr9YDsKuUVfKZ7nBg8Dtgeiy2ccjaUQ",
  "key26": "3HAfqZmMsavwJ4fPjDcuzhC56HVmYtHSLZ5WbZ1FWP1WPUrfpZkZz1y7rNcsnRXdEXoBn4hsAdNWX82yEcsWpNE5",
  "key27": "27dzZGxSENGqdv11tEbMxNkk4LY89r9nLdTwFeAyas15SS6W1CPUoPTLaWruvyYmgSJ3HZUsuhz5L2YCGekVXxGt",
  "key28": "62Lw2M3UDJkL3UeE5WZsnjphFiZNCCo9SDqmNfi25Q63itWnu6UBZo83ak1DGozxX5jZXveSRow3Qx69inb7nzpo",
  "key29": "22u6M8xkY8zZqLQx3p8MZAp2BcZxTrkfpqxzo1iPS9325c4QcWmPwFdRr32KrizH8QhWPSX6mRKSvXwBksTXby2H",
  "key30": "43Rv2RdW4Pw4cnp7X2oXsj4c2Xue982nHyEJqh3SX9EYZzGsW2N3oAtep2DbLYXXm9uKuGmv9LcjbEqc8qqJigGs",
  "key31": "3vDMyS9aVobijKP1FPk6LwajS4i62bsZ94L46fR3S1xhDpSnJfg9fJP2Yt1jss4pSrkwqmYx4RyE5ipyCb8r53tU",
  "key32": "2S4jhvRb1t57myEYszuGixQM5m4WdzLq7HBfJEhQFC3whwvBfXYiWW7FHf69UEr7D72mP4LT4eVUpGtMxN9zYYZQ",
  "key33": "25eR6ihF5xnWR1Nd2kkYA8t7QG1qsFnWR13SCUwJpmUJ84ViyUxZsiHd9Jau7GsiLrFK31Pq4ZtJ6BgUKWnM6j4G",
  "key34": "2jwdyoVGTbmLt2MzTGDZZpYECwjauoBgxSLiYmyF7Fvq3Cu2DfXFgq4UZehSz7DQMaHo3beXYC7E2DjGukbUzhBd",
  "key35": "JmUnDLxFm5UKKjNZoWBrYFb6TbBdXZcBnpw9DMg36APc8vX7F3iLhQW734xWM7TMxZnruiyJmC9ZBc72RNd5E5y",
  "key36": "5ZU5ZQyyyPDaXtUGKAPjLMMz3L5FFz9Qodfm3DE8qmVPdsQYmhZ2oQ9nWhCYZnon7aVWx7is67Xfi4TSRF5ygABk",
  "key37": "5fdfyfCy59LD8rLe8KarXyKj61eERt1ARJifZq4Jr2HqfRMp7pM5584nFZkxAakpyjQ4fnz722SPk7Pzg6sEVAGQ",
  "key38": "2BsgTHXwoZ4WDhBXmhpLuaDHvjMnaimNv12eZHECu4rHb19aaT4xspURGMnvZFfvFuKwtPpxwfbiu3zRwQQG8KVe",
  "key39": "5mm58gqSGMFgMsbax9ne9jRPhZuygUfB7DmpuRiYsTfkfSTC1x72yJMZNytgEQKQz4x6kDSBi6WGZKG6mCKRefHF",
  "key40": "2EoFigSMhuvRXmcxH1PD8orUD9KZyNEBCY9J3i1ywdAPHCDKNUYVUz22nUNHt8GSi93ETkMWygMWSB2jbzhNBitG",
  "key41": "2v2VYjWsvZGsHd847VRFu4RPSD74CoxjgqX5uE4751G4Sj8dTcwZjUfJ8BMkSvpNnVdUbugqrX3v9WQ1TLJ9qL5h",
  "key42": "D7xCAd8LmLXM38J2CBJmKu2rVcNMyV1cU2ZtnpV1om6bjsRHHjaSNdYLENBnHxLUj1PbfLeoz98FEDHo9JfA2xv",
  "key43": "aKNokhJqdoYYUYtTdhjaPzYo9WtDLEaxYue4uFFwWSJHbnVjsLM2tuAhiK28139kYBFuw85mkbJCJFDqidWZQHh",
  "key44": "TjkfcdnjeErZ4uJ7jYxgC64xSiKWmfD9ZqFMqBokaNQpvZ5kAoRikKV57tNb4g4po3GYmAjaZnnwfknGnC74P7y"
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
