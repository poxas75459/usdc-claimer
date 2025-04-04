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
    "4unui9yReg1UmCUiT9tTeXU1anYLgCCKMg587PcMtvRfGjTJdbMf9BhUy8oJp7w18LAqJF4RS6y2hqdDQs6JSuEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yKkaXJZeChEG5a4V6eRATiZvRkH86zEZKv2Vj8ZQMLaDiHiDA8pU8ufz4kfv5pBvoDpcVt9vNWRjRjn9wSBfUx",
  "key1": "5xkGn8QiKaCqTWUoBkbRjyt1bi1N8Ga624sqyGtNym6i4TNbM8in1HDyy2eiUHyv7bK7UYLYCSQnjFV2ueourPz5",
  "key2": "Qx5w2pfq2rD5yqwZjpW8pBR9YNdpXzW2QkBm7n5nc1w8Y43jFHiM54jKjKpH6grh3K297ESU3cCKMxpTTfKY5wa",
  "key3": "5u8xJNDqwwrnF7qumAK3VaJKRuNVXPNHhhUhnEnLjPv6qXPwMY5kfe9mVsZiFwjF8iPoAwHdFiPHnRH8wxNSYcWi",
  "key4": "3HWfqA3KDAxC7wsSQmoHEuBeQ2u5pLDU5y1gu6tPQDE2zoT3fkaw7ubPnPVVytySf5x4VK8nfgger9rVmebX5BZf",
  "key5": "4VMjFpYMwSSFmoAFJCc5A1VNm7kPgbimH3FF81q7a1CuLYmoKtY4ojjPtmym6hNRawthswG2YrM6QUYr1LJ3Lphh",
  "key6": "9Xwv1HwgecD3x2tTh2FgEwGMzQ9MqDjtEaSidSU11AL6RSPpjF3YFtxF1NBmLfu8RbHfhG8K6PV2EsQ7DaAEcUX",
  "key7": "P7HqG1wbDqwoe2g9ihLkqNixioEWrB5iqtGiBSpeqwsyzzGcZxPrWE1qiGQgsufpAFw2sgeFP7u1zvPHDqRokRy",
  "key8": "6Nwyf5oMsU9YsXARF37mNd8w4rsQXCLKnoNCcDvVhiVNJFuHF6NXMRYM5Mi8hPcwr2v4fidja61H5V7dDNPV2j7",
  "key9": "5mA7rPdTCUwnsL3cdLAuVoK2XhNmYVoKT1pGhJyQjxDDTEBFKZcM3o1nVX1zpzoJroLYDMMt4RkEGfGKnwaRttgn",
  "key10": "4jnUWPRzLnS6pLreYu7QxdxMDYZxjj8YLqHUwTpghe39fxXG1MbxMfgdfLKB3kBYjvmzjwQDNJRk1dH4U7GLbY38",
  "key11": "2FxTAVi3uety8SRGafiyyKTboGtjG8SagQYGZANYgfqK1gfNJMuWYG3ojJFkbu7UzVgjPA7Xi2NmDtFNRThMMx5z",
  "key12": "2om63uQjyGXsBYT2pukx29CCg64Hc3Ups8W78BT3rkBczanUt4o4uQ3mszuqcwcXB2KrXmnDaeyygp1qPbZrYwpG",
  "key13": "2sinu3EhynDbWVVP3yLoFCbDBr33FXCCeL88smP9AqtLXJzHzVhGJ74oQNZwuPs9bfTQ6frNpdcesFvMiKCDGBo7",
  "key14": "4jGRjdyqHer337rYmSmHSjW5UijWLe63YnHGrToTRVze7yQGUeLrrjFUmqzBeQ5vumCdKcPybNG6bGrXaZp8zJjJ",
  "key15": "5E2aE18m77wKJLuepVrRrDHohvX39yrqwQHBEYYrT7GgghtSZwGcg6kneJZw36CTsVj8AMLxCpxzLpWAT9W9Az5C",
  "key16": "23u2iUf9VevbZGCaF9LXFvnGMFb88xihNA1wNwLVYP8hGuUdHCbVQdFimy6u2WNApdmgXWLw2T136qDc9MZAsfrC",
  "key17": "3dRpmfumPdTmiaSWigS6Tj3Ljg6hWvjGWY9ZNJ1WXTKPGZVsCozrtwsk7NKpgB8hNhCTiDAXexH1nFQfzxanqdYe",
  "key18": "3SEUAotdxbifGer88J81ZYgF68rfCbe2ZbTAcXrzfkND5Ms9orgtTb9MryuE7w14v4mfwPsmEdwT14cqxrwQW9cN",
  "key19": "2nLEYHeA6n2x7q9cBJcJmkcZFX7V4HaU934GYEw1GnEuQgMadyiBkpKsf9P5qmL3u9AFfZhaT6fJnTfSxmsry7wA",
  "key20": "4f85n7P5rc3ysU3FU57MBaL218JJiDoDpKK7v1QomhXvszwmW47buZp5QMA9hut8gFSfSMemBnxApdrSkbcQXwBU",
  "key21": "46nGqt8xm67XFKJ1VujSPQv8t1FEMYfDGXFCiCMPbX3RkHGdqdvB52YsvM4arEXMp2zuwWHecm6S15SAiqVnxgVc",
  "key22": "33M73F8z4ERyLnvBk46UcfGj5XFfNrcje3tGCwuea78yZ5AYrHbXGXgEp9X4f7TVyShMheCb2CAxNANoKNLWMyfj",
  "key23": "5yyjn6ojC9mXuyWJ7o5KqV3TCpeLry6XqZrXN5ZFTMcY1VsiTkcEigGujqbn115fTv6MirvvcTJv74vGgVPoJ5rM",
  "key24": "5hkYJPPppJAVgcaJw5Gurb5ZB16X7Svh6mapYTA2gYwuMae3YaegbtBaSBxBLVTqUZZVL5i1Zi3zJHoSiPN1pArk",
  "key25": "5beoUxDFb87gycSEarCMg1hqRdWNSyrQAzvkbno7jgEfoXeCmPwsNQrKyAxQSzjT7i9v5ZZaDAzJSP8NfXUJew9U",
  "key26": "2my2SKuSysMfVLD5pkWSjvoZm6njnwkqyFQWtcUWKhFEwy9gg3ucwVP7gLXYSRvrrZPZNDpDzTZTR3Y2xqhVaKTZ",
  "key27": "4hZPbJeVpuDuPRiXr5GLz78LfZuNuFQnRkqDqpGgm9Jc5ZarteYAX7Cg3HVgKUqbuCwMSYyr8HsJicCQ2rnxda9e",
  "key28": "5gDTcTasD7bUXoM4TRTpBxE94K5tFjgRz5kjW735XKwQHmfuMFbosVKK5rAa5uBRnuW1Rf5xtGgDNd9sGWmPLFrC",
  "key29": "2bG6kdkUgo2eBDjLc5oVPqZG4VkmLYYeisG725MLAHhbdKqPC1HFBbTVj8twotDbVSbe8z17TNbgHzxFez4zkfiG",
  "key30": "55Z129e4KAvbzA6dGKYKs5d7LKq1zyA9kvCdDATsNMu1J1xkoqva1rDDukKxeAkbcaSotQgExmkWajydKegXBnxJ",
  "key31": "23Q7JHCzGgziAjyyUXheiDwaitVCUhb5CL1E3o6UbHXRoL6vKa3zHBs67ib6Z6cZtnLX3gwXr4XuU8KsSxgtiacC",
  "key32": "5M68Rdqxf6FnGSZ4fGK4fzmsgpGfwkgbDnZTUcPMT659CTnjo36zARwkPMTjdR8zrb82Std498DKg6UPF7Q5JGpV",
  "key33": "3eNU6R9kVZgHUvuLUB5JgFGKwTdPB7CEkvkLyUQFRu539aQ2e2HmkNESPNCaSaVu4J4e3epmDjZ8yjNrb2R4w9UE",
  "key34": "4x4ux6tWh6csmDcf4mWWoLad4af9kmwzxVAjCtS7bDGLWUPdRxZGqrSVg1kCzb9BfhDB55RJUc5LWE8HBPVBvktN",
  "key35": "49UrBbr5rvyZCcsYiAAHoDujkWWtJtQVjUZu46s8bQYjcM4owdjv69e6V1Qya61VeRWKM9cG4d7rnHDL4ZfrHu2T",
  "key36": "54mz9KC9ueViZx9obeDbk52F47VSrvWE7TLTnKF2Ps3u4pkhJDkh8vCv8RqxfBGoF7ceqCgWiLuk3MVXBAMoWuE4",
  "key37": "4MeNLbRSpnidpTKAu3SMmB55sxKFXi6FRb2Fqu3pLn6zzVN6NnN9xj2qy8svXD5wGrwm7uNYUWR7UCRisCsMR4Tp",
  "key38": "5B8gyZV5KqJxx7SwPnmZxeokm8VJuASY2k86unYTPr2MLgYLNbSg4hRpWK8NJa3UBCT1h3iZFhXRMsUqt92qiAFR",
  "key39": "7dbGs3ezD1w7KzyWeW2ZEhSK2sbequx9Hg7c3sZAeb6mXM8nYsRPKTkRNX34UT8go7RSbvYgraM36A2UwvftzmY",
  "key40": "3tUiQ4uQAmtPTDrpZmr8rnMLB83o432oDjYcPqusQvBMD6WdnvXcewLQDsecMdpdkGkjniqzyzAJP9y25dVbMFVb",
  "key41": "649mUytxvQgKSCxPUAyrk55HxPmb1Yzw5NVqQXChdtYNopafrYLKnB8bRjwSNhHGW1oHfLTBSsQbA19yLBseFfbY",
  "key42": "5cuepfCP14hLZy6XQytZLXdnXaKwL4smihiPsVCmoytA57RFLEruUo8qdGwFCVtMfcr5qreoGahYF7aikkt36vD5",
  "key43": "3ZMH8HcuxZi8rQp5fkmYCMkcbz9n1ZAgkUjjYUfHzXos1Z1LKhkEY9LN295ta3dvNjeA3xadmkTBUxMGvdguBzfD",
  "key44": "13GDxvJEmB249Wa8i2gMgdgFQVAQTL1mscVbNBankDE8v888K2UVmAzKXH4dzedoTJWBLSVeh4CkMP5kxXBE4Te",
  "key45": "49STWiD1Df815vo9YRnwCkgt6UpWZJWcvtwWiGVfXZwJfHQrBXQS2ZBCyWDhfeWG2kXg1rrTjyJ3Sf8xmyU57BRa",
  "key46": "2BrEDWEDLPfS9qUTs7yttHU6amnWYgwfrS7GiFSSAnDBdtGgwjiAhLzVu9Dz4x44s4Z8rZZC4i49GK3as6ZjASK4",
  "key47": "3E7F92WeapT4JH4WKTATeHm62HPQmHNG45i68DdYarhLCxkhZcWH523DK4g7ckYM4oLsevYeREceUPq54azSatNi",
  "key48": "3k1XAQSp2Q8vbChGPJGxdset14aSS4tgAD52EqiH11MPeJXr27fjShG7vw5TZJssmUggg5jBxxLrfG6T4rZ5AHXf"
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
