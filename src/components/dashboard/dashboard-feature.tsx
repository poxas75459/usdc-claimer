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
    "2VG7eVxPZmXG7pj5W2bKrciqaff9x44PgfBq3LHKioY8usdqVrDj7crF3dSbQhmHmMMt9XsYfjgHDjUDfeZEejhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvkrECLkfrFk9HDNYXoetb68p2HdbRVyqfRguB8tKcqGm6smgb1yTbjHWazMs7N7z9UiAjuDAXSCP9mV5KC28RS",
  "key1": "4v8dux3x1qF5mXdkcTBVei1Fo3rbG8DhhUutVZpWBqT5GZMLDq4DK23oH75TuYz28V9FoV1iKHdkW7mZeKdE3gmF",
  "key2": "2WfekjSyrQdSZWBnhcr76rZGTcm59AtoLVmwYu256zemBRZVwQfTMDPJ41VcTxh8zVTm1RRUsCD9r4i4U5AdmK7e",
  "key3": "66TApo3ySGHLnqM2ciWzYmTcto5p48W5CPt3XXPjjHyXPjbgPhVWE9SRPrcGZcxLF6F6vo5GGoK4gkXRsFreu2kA",
  "key4": "4WiggdFRRhRzdSrQbNMNVdDA33vchEmqBtF3TTBFJGXRwmexx2qkoaDFvySAJFVzNUH8MGTp63H9TbSr131WsKam",
  "key5": "3gR4aL4jLdh26BGMzpYPPKAQUjY1jjyPaGyjtCFrPtjUPCq3LUBdZweqpwLhiBssi2zzBoU6QW8Pef6d1DkLTApd",
  "key6": "5Bek34XcoeVeLUoWnprAraF4qVGhir1QZR6EyHgGK36vwqRkFq4uK9pGtXVr8THZLCZxJJVEJym1Trc1YXV4hTzt",
  "key7": "irxULtn8P3kMs5Js16qDABHxwdkcmGqAYGjDqgD5ShJ42YGk5HmAQpSbFndKGGJCdeyjZ86zXMrg7Wv2KrRygtG",
  "key8": "6782vndtdiCLGkeXo2fj7kuCyy3w1kXkRTHR7h28xfUfBjUnnMcDWDpeRqgtyQbjh9ts7FXWUpnTJ8eYAC3ZYuVG",
  "key9": "3ndbnFJugMuD1efKe6n6b84SPm9UbJpZPBydaQX7rkB3dvrdjanRgS4DzDgfB7VDjyRVGwpY1NUEH9xUritLyfdu",
  "key10": "4CEfuzu32ufg6j7fH4qyMDwHurU99mKV389CqfuPHaV7LzmprKea8n3iuLvo5uH8SceuG8kFq5bRctYJLMc1GCJm",
  "key11": "3DibCaA3R5woahX5Svhb5bqXYPZHWXuCjb3SmuQ6ftYhzZgaRQkgv7oQiFcWr4gRanoEvbmHCkm5jnMrmoLDPe1X",
  "key12": "2zLP1AsUqEigCbzC6T8hiQmD8nmjzEPdRKNV4wF92TyzjGSo3xQUCvrgedg39v3sqJjhhYaieqWhoymfYcnRJJUG",
  "key13": "4H8Ur6Hqus3rkx7nH7h4TvyVVSyXgeABTxiL5J9kVQxzJTCL1wxvKUv9gCEtjgs8ZfeB4Ebeus7fAgWoWCFuJoP1",
  "key14": "4yFt9ApWpftAetzm4aYGA1P1cx9yFdJiLrNSv4rEADXbXt46LapBnNR1QYAzmDwG19Sfymo5NYiZE9BCNyDCby5a",
  "key15": "5Kw2X6KT8e2ei1LmkY3bxHJWXVutZDv1a2Ev6GZyqLYoNzTGAX8JoCqVskDRCRCWDo7m5brfYiPoArvLWsQbQrBe",
  "key16": "4YCZT55ayA3eA4GbCsf6f5AiuHrao1YZh1FCXdxBh4Eu2Xdxsj5P5MYYEHj1sjusJQf5AUs68eZFCgsi94mARPEz",
  "key17": "42hVmJrTzqi2z9sEkPdoEhzGGYcSqfrJcGJtfAQQt4Phjf1GxPQbnkDG11kVKkedHsqGQLAgKd5wSgTpMzkNQbBC",
  "key18": "4zpypUAmYu3c3bVvtYUyEabkNJBAsgQ91kzAxRhTp9PjopZsZvBK9sYoBegtJs4gn68VztpkueBvijXoSjKHtkLP",
  "key19": "5whAyAJo51mgbmxm1bXgR7pY4NDGAEfrLDEJWk1EZYc6bvWjyLrxJQEjtie3pZwhCL3Ts8ygKdr4YWyj8qY761Xu",
  "key20": "M6x9oweLkseRE9m2S3oX4bugq1KkvS17WyK8h2UCu7iLvgZo3bbqwi58SZhLhudDZmegvyQgxwwapEPuEBcgCZF",
  "key21": "36Zv4gkxafF7bbum7GYovXHtjoK3btcAkL64uvABXYzT7JPCjmJmNVgAUWYboqjLkLDUHybFzerjyyU5GehM74BE",
  "key22": "2PPMYL5faqPRyqcybU67cBBjsG7AiLcxfKidCEBVLxdd14kSXg7JFh5GVWWiZB9GfDCg92EjYVG3K8KJxPVZivP4",
  "key23": "5DFLaLAsrbyCq6Tp5NGBs3uK46tL8A2jr8FeWvLarujPx47XGM6RmZW3sDMDTPW6XxwYb3ECzkP5PMRjFv8eyE77",
  "key24": "2uXWvDdvN92njXqGmLzojYzotuvhMKqMScvXdjgpadg2uSUcMKM1iBSP71DgS3s1E4tmN9optJPsxeFcate5zTwA",
  "key25": "2cn26wpudLjDczfAZvWLzJnQKTU9aULfSeSTxVpuxuqXGHGiLTLfpANxtbxxgZzPaLk497efqx355WXRi9ozFb3A",
  "key26": "2KtS3LdK49tKTbTdBKq7NnsBcM8BMHWVkSvaWcwksFmjzgZ4MidTC9QeA1g2uACBXgGP4Z9sTDDLNBP484SbJYW5",
  "key27": "3hdmwKcnFe7DDkJvwRRgfp7kBtMJCgekKwN54uWzJfyFgThDp8NjzrQo51kGiwyTU3QdXszTe2scB7psUUqbHULM",
  "key28": "2aLtkdQTZBpe7KHWGD8eroFuizsGQ2GgHh6o1YrA8fdgAvjuuCt5AprvsVyvSvaSe5HfkGHpXK8VAbG8BwTVDAyh",
  "key29": "5guU6c9xUWdanb1jjey9fxqDj5ePBLUY58LGyNP7E4YnfzWgJATW7B1wU8ttTEaATtVumCkKEYPF9yHQ6E2aeHn",
  "key30": "3qmTinKWKMYdViaqYsLSdzeEFRQHfaheaneLu7pSRRRqKpZSBs3unj6VYXDQae8WB7QZBf6MZQrEhbJdmu9yGnkG",
  "key31": "3H3JNsa2M3kDoNNREJQ65BaZcoma6amQPaHPDYCs9Vy7iQt45htnfv1vXfs9DBMXnE1kgRjwrMcuAcMRmpbKvgLB",
  "key32": "3y9oHNxrbeUtRFsdGQvfLx9ocVXq6ZiUGTmHSEzJPpfDb388wdMK3xp73ZMTpACDb29HgaRGW5XyLwFeRusva8m5"
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
