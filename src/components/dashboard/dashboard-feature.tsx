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
    "4LXbUhH1vYDX1JYCjBjik3VJtQgagZuiPmwiB88xHYU7a1nsC7YyPF6x5ihK4RCDhpy1v7V321syzacD1pUVx6Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N4sp3XLCJMZ7W7L6mkkUgKydpAh6vkARDReX744qR3LUwsUUo45vaEVPweckWxGXXdzLX4w8AvCwHbe5zW2oRRC",
  "key1": "uXaDJ8B6uzYTae3LodLXTdJwtRVGwgN6TmUvYyh62nY9scT72zKGiDN8Mr3ce8vSXzWwFHXXmWrZYRRniveUcdx",
  "key2": "5NgQDAE5jbs4h3o6iCACGd4yLqmrkRFCYdHWj735RynSHzL4mgJzcKxrh9ZdpzLh62b3LQmug7T1XCZdf9CEnvaw",
  "key3": "3FQ3XcEPyq9pQfnfmhBHBz9ESjzjwsXhnwSSLz26h9Q9VXttDKaFKjnH1W8V2v4AHbz7qMYSBf1RPxoTAaK11yco",
  "key4": "3Zoy8kifA2dBt6Rh8U54T449GPr75Uc5bu3WTuPFykk45EZGtGwhHWepwWJP4VrRNzVthTMbrmwwztiM4PP2zttc",
  "key5": "5foV9hTz6ctJfmTFcnqdcSqBxWkSrRBDazZq2QVpprYLdBojDDBuNxSYKkNP12WGdAdFDZXVEZzkZuxX92ETrLiY",
  "key6": "4oymPTqDquZrkjkTtDSPr8hqP48boqNUYyAU5Y43YJTm4EERhSV2r1qeEs9tDqAnYvFGytHodMG94BiKAbTWw6Qs",
  "key7": "6rGBzqQAVRvHdhovhfoVco6oaGXi6jFFwyo2ZyrhxCeHrADD1uFikD8PwkU6KJYe77E1t7vnzxfR1B6aiNCK1x7",
  "key8": "39kiH6rEvEZuJNUrUKuLW3ufuSLYC1rBiLednXocUZoG242AWd5PB3NmsptLVKEfdSx9PwnMpuRmx2s32xW137Nf",
  "key9": "3qdzQukaYe92TYJEiJYD9CdM9oAud4H6LjdPTvXyasygD2xbiwo87kU9o7R9Qvd8LUTJnHX5Kn3UUHDcMeTZurSq",
  "key10": "32y74iXSXkZ6KtCFaJg4ePeaghnc7CSo3KD3XQQgnZwtzwoUvwo6ahNt3HRtjmpjNHvxnjpvWxDUTeaVecf6uKvu",
  "key11": "2CFVCPQCxiyXgYkwDGpaMPocUerACbBNwT82RwF6SuFMJkCNmYrKgNt1JzVVXAUTa3BSPaiLRQT1T1DbBh8F46YP",
  "key12": "4Ue3jutjj8N4vXBnwpkRUcQEfsFCZx5woF6W3auZ8MPbYqQ9Ec72uPXpzLqrjmmU8je3zG66tubeYMLJ34Rfuc1S",
  "key13": "61DzKkqhj1Za3FrxXwdGiLR6kJyi7okQQWY8FyHzmdP6fpvuXEAzCtyY2kPstfkyoacTAZn797Lk9LDsyg71jmFP",
  "key14": "2cQDfmyrnQi7DMMEWrhtpi8cm2Me98rLKkrSuZwV1fcus5Te3TmneAQZCKfLVXJ3ZSx2cDkWHKsduKNzuYrBNLtr",
  "key15": "22UFxyMMWFHRvydkXt3u4KhcKUgUT5b8SqCgNSBGbxRKHbK5FspvoSWbkrz9XzYPpyNMoEmZ41Mn5WpB6tgzSsRT",
  "key16": "3PGteWgpZiDUffW193JRzbxN2EMqhtxj1bDHE73VFotGpxT2KKxofEJrtqLRhTxmigHyBHieCvr8Uf8kqj7qbSQx",
  "key17": "85caoSta42hMan7DYneBT24oD1Wi1kdMxSNYGnqmkGgcE8rwrmFkGWQR5s4vWVpGSH9eM9QcbFQ3Wba2iJbhBku",
  "key18": "2aTEGX4HT1JxiXWws1vsRCkifXjFkYBxCsDbzKNKVxX75zCr5LAZXhgqZsMwC9dpGbgXwAQrwzLBKhcmSwW5xmhE",
  "key19": "1xt9kwcdUkpMNmpEacsVXhYbTX34JYfRWxNixkATWjQaqYHA6kHSexeW2biCow8bdBUyALFH2pdR97PZMVMYQ3N",
  "key20": "2s1fnQhpcAitYpHqZAsPwcLeatPCWS62tfxPBXeziMMxFHL5fdFeTZ8LsghnZfboGH7kzKtBgCTcwVKy6f1QRkCx",
  "key21": "3wZSibwGoTrVPQPWoXjDxzzsBw2YBfosQ78mk4zdhGx4nKAAM94N1NkbSPHJTnQggr7FCwMgVnQEQDx2a5yosvFi",
  "key22": "gtjSGSHVgi1JfrQGwNKFFS1J6oE9vwrZZyk7yiSVpePdBhA8Ar1EQHzsu8G7fUTsLnhnhqnyKYJFedfQ2vbGfDG",
  "key23": "9YB5geBevkaDQCi4jXE2bxYzXwWx4xTryvU3evnLEtJzauxnFU8yTn8B54eHnDnG84TPQfUfb4XYdzETSxnEBgH",
  "key24": "2NsUEziS79abhVPcKR9BdFXak7c3NxhKreZDopWf4UEZRSBbGbVEUqniv38T8aDvxQsTJJya4YnAKDqrzKnMqveT",
  "key25": "438z9i5GcuEwq4gTxzFeh9S97Fa8PoDdMroDcEebTobjbHHNRAjvQSBVwRwHwNohSHDq4UkH7RBKXZwayH1XAeVY",
  "key26": "3R78mPWKpKUWok6mhuP5uwGFEaFPz7BmmytbZNSaLDRQhnXt6hN47yz6ao9RdguZo5EhsWjAgwkEHXHdJf5Y2T7u",
  "key27": "5QWfKhDqVGKLpstTthgcDAXg6dYof7pshEQ8eUT9XQAHchuYikLAnp96c9ZV6uNoqNWw4VurxNdQ8H36ZXBo2TxE",
  "key28": "ryGLPFsMWdv7ENzDNHSJ4gkMe6uTWz4vdYUX6BrQqUNds1EpKkgPLWRPk7PTuFYT1n1pAUKhHg1ofUzv6gHcZtV",
  "key29": "ZCXiMCepBk7r5CS3zCGHFzApucUxQQmW9JCVb8uQW7oZj8nGcp8DQmgkvareMzCXxmvAyqVjXKXZE4EqtjFpqAT",
  "key30": "3akum9TGseTetpTVc4j1z1YCfKUaVFgp7EAyvBKxS3fNMJJLgyJQk7p63Xg5ksvG3PtYSwv5hAdVGQuxpGhW9G8g",
  "key31": "57hUBeAwhJCxUakFVB73zayvobo7pnjfXwV96xuTJ9W2CW4iAHkieJqHeGELr852LpZmWjGmb4fRgsTLRyF7KVFs",
  "key32": "67ZE5Gp2Jew2gps9BSSBq7fusX6sbnN81G8AmRBauGjwAE19A6iWwps8NBF7Sh65BygweFZGsT2EgrEGfY2dusrM",
  "key33": "2biZon41ikgQ5Lv3WVvzxMm2Agioo9pumayc53mWzHr84cokvN64ejtgL2o18bAKNStW9umS22n6uCFGhAeEPmG7",
  "key34": "aU8BUeHcf8UXserJdZzydWVtBc1JPWHv15dhBy8JsZ3Ux9t6jWsMcdqxoQsNDBJhqZW5uM7Kka5FMvXT6C6eyqt",
  "key35": "44HujYgU1REGuGPacMuFYdVEhW6uSZMfj2ysAjwQ4hde9qqLiW2Gc7LRhyXAcqNLepKZbaGyrw6reoXGv6pY497q",
  "key36": "3rmSdaBogFcHJu8N7uyjHWiPaWpSUc22jckbY79ivTH4N3uzGAW7VzajUSJh2wwzXNn6vPB5Jf9XqYYqCrxN2fje",
  "key37": "4guyNU71UUF8JTVTZm4c4shuQvR7mWedXmwJFNV4dAQme4Pycej9A6YHYnUFk1kZrDjTba4uUiVe5ABsxdPvcFnX",
  "key38": "XtfT3JL1XHar4yG7j3GeDfD12qRvn6cpjafYU4uVkhiwxSpxhiTeUT8MUTzXxRmfWVGmQKbJev74THXgnzvuT4w",
  "key39": "tpZnGFVoPMPiEjEzb6LwQdSU96cmoXs4QARrTtbwqSVJxpuwHuUA4wT9nbUDULbu3zn7mT8WkSTA6JuR5rdxoHu",
  "key40": "5kKwok9WENhAqjeoJndF8Pyxo5ryaYLupuAYpWqpWACyoSHSffG8nyqbTjzABP4VRwvDYYaRahYZRDiE8KrXRUr8",
  "key41": "4ARWE9QM5izwJwXg45foQf7H65ox1XUuMEUCYoz58HWFzLfG6nvfzTRUFPntHrvcyxTTrfBKtGzvYmSNq9iFfi9S",
  "key42": "2nKryZc9GPkiw6xMF1bYckx3PZpusc94ApxnJRh8Uig8FkbM8S4LWPk57Ta6eWpy7kaWmd8ThYbBMUubkRXFQGUC"
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
