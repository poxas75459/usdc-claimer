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
    "5XESmVrtF2rkaJ4DzgLAwHUFNm1Dz4ZMeHE6o5RBibBi7RPdjyqLdCsRp3xrxAqBXb34RJG88Epu5TwLrHWnEjbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1Uo1QbYzBEYeWa81RLMijqfnJoGK6QKc4LPQ7kQ4v9AEytkXyLwvXC1zZiw3S9SFBShSAK7jryDWcLc4GsjQ7W",
  "key1": "3XX12T7foNQbBJg6CnMaUXHBVFSScQAC54qQemW2t5avi8v2Jy7vBfW3qxsxVrC9uadKMUv7hXJRKSHCVrNB1NKS",
  "key2": "3ZvTtRqXLNYGSgYK95G65ZhNRtcM4YUMoiyJPnHVHwUVjQg2e7Hi1ZP1WtjJbxixynWdv7C2LGzNrdiTR2KXRXMw",
  "key3": "4GK8VGGxpfYhz1FRJxvNptAkA6xtBLTZL94RdU2LRuEEp1jizKYqtUHGZGUB5veTBu5qvmum9snVJNLhR2pmg1TV",
  "key4": "2Dj6qJ6MBGkGHsZ2ouqhjx9k3FYTxu2WdBw2648tbumrCYMSFyZwu1URspMhur9yoyRAN5upj5zFCUP7uuCtrAqF",
  "key5": "5PG2yvb7VPPusgeGQg793AQ14k6RWHnbpDtvDyHZ5JC4bcG639z2xKHfmryJrUgZAjQ1UQEF47SAEFAn1raNGL2T",
  "key6": "8FLFVctbnUea9Cn3uSbLjP1xPy95ByPFpXa8aGxL8pkPkJYF4sWmmXJ68a3LZ2hQEaxLQhFWui6G17MnVDC97Ax",
  "key7": "4a8Mnen4dB7S1Tgbj85FTPCRuAHwyxHmV8X2SKDm3S3FvQ1B9uQAKV6NfZ5C7sTJyDFa9Ay5NsYbEr7CeG5w714c",
  "key8": "rE4qy9ghuEKy2hodwQwfqZpjwpPykzoHigFHADqVD3LoorvtHW3LXYCv87R4Ac9gdBfbQonBJ5Zbo1UArimFM2p",
  "key9": "36TzfFhbGqDnwQwvXCrYKe9qRYaEvf134YAxVeoeZn5waATTTkfabt3sg8uw6kqY3RxGeXBJ7HSopd2yGHRnsshR",
  "key10": "PKN1xVPvAQwhQestf66But2vgQHxLVh85QGuqXLptpfrPBAtK1QifsvPDwHwsEcno2mCzmsG5KFPkPxABG18gch",
  "key11": "3DkpPZmKLNLpSyLXnfNTJNaZu7fRi8SENV6ZmpbMbGuAY4VHUGKZwxus9PHUAxQHYEhAUnNSYHQwaKbApoaQtpm1",
  "key12": "2qT3wGJDkhfCqaEFUSqZwo6FQWdrh6WXL6PmKtUPLcDuA3Lde7Fp6nnuPNn1GFSjqgaK7LZKjHe2eoBJAVwpH58M",
  "key13": "5qmhvmTETBsqQzEr9WETk6Vv8bMBvcJwmTamusMSLtR1pVRfDfsmuF9UT9KPcNQnyuffmquBjzQTF9E48TGGY2Yr",
  "key14": "Yr6CCP8u9QgpHERQrvBQywrmQdqfKUrMYfQpamgHGGyz5PTzhHabiFx4owWK2SvQjWa2HiEJ52ydgM363CDaU6a",
  "key15": "3SRasnJDihN4sunqnitmHFQgEpEbaeVhfucUGferFn8cJv7EjSzdtkSAaPNuzHF7t14gJgPvfj7CDBRZjkBDCcSr",
  "key16": "DRTwWskxhUkP2brptaC7sV2a3L27r29doXY4WggcDw2R6VqGbqkbijiuqs9RGbFCxWosAepGhGDLeNNb8X6adfC",
  "key17": "2jwxiMzEE4vsoubLs6Cbv9cuk413TsnUW3AfYMXCvdpXcqYJwfLKhy7xdzKkyLDkzoX9CyZ9oEkgEMCz5YEtmvPi",
  "key18": "27iSZ6dPDqM6tQngTpXG7ZwLjsNPgFti8uXPRZvUqLt6uvT1y4vcDLMuCGHd5QZqKSNfzqszFRAWdgepCN9kKAiY",
  "key19": "4oJ3r5GQbdMNDE1ASYqs3zbZsgTg7BeLZtUpWLyBUKQwSCZ2cp1ShsoJi6Jj1bY9izBx1uuSSEwdT5HtE1nZUYju",
  "key20": "5Niac7Gemmn3Pr31m3GNAjb5JNmFYBQhAHZhNFjmZC1B4WuywBReizyQUMQ2XYbYzcCQmLZiKewoF1e8Dqo5YJK",
  "key21": "2iitf94unrWd53yqyZv28BXnDKJSr8j5NNFAXFmzqJgBGKXwanm1ckG7DMNPDTKaB3SYXSbqQDQ2yRhvMd1GYHRn",
  "key22": "2PgwfGSJqTL9NbCpsvaYpe1o91DWGiVoYDB8z1qHYsUzqNiS9ze9N7BH3fmjMCnEw6NdRsCVRFYABiXPHvYcrxk1",
  "key23": "2LsdmuLWELk6dPBfjphn3nMzr7ed9ttX1hWXouDFPmXoQaokkRCtCA9TFayWgTpWxDt8jVKBS3FWmPfDrB348LeU",
  "key24": "2F9h93fcW2HyeRKULmHSGQv1z4ZHTzqrb1srSgDmFtzpLTPJfnWqenEW73mjneeRJttaD89jBQVW3dfzrRaZESAo",
  "key25": "25d8Qa1mVQBXr7ybyb5T5zYnhaBgxFKAcKcawtojGpv7hGhNMSyNyAZz92DbZbewu9zMxGVoDUaSqyf26xuz17oG",
  "key26": "5zMLgsx3Y5fq7Z1FKxve2EaGjBx6awj6rYyNSu5nAotTc9TbyhbRWBAzVRqDV6zFky1hgqKs42rSHaRrcWrWgCqs",
  "key27": "4MTdbebWQ8XpRECiahyu395J6Ur5W6xMLxcQfLMQMBRbZwAx1BzGDNcZwdsn2WKzCAwYtUZWHKggJDJRZfM8jPJQ",
  "key28": "3pMNcuDaX5Bx4r47AESEMW4LzLaJqo36WqgqLKfoj9koshjuY3sTY7oRQJo1RPiUsaz1FK4XNod7CMW44qHG9Zmy",
  "key29": "5ZA3jD5xCVT2EniGQJCZYh9xFh16L1F8RZuxkh1vC8EbBQXXa9styvKqiSngsFMsR23YAQCRZzpEYbaWRDRfjnyP",
  "key30": "3L7e5wbdJzfqTFCHtzqAPF3b9PdheZa8L1txiNMQtB3EZmuNhytrhUERQJCDFW3R55TvVJYu419ZAJvWfVL7siaU",
  "key31": "57xs8vepjej1NK1Nivf7AB6gEAFnTcYFVhHrzDT135ZyUYaN3gvBatUK7xXdEKm3uFqgiEhvDyKfpF1ViC57KNwY",
  "key32": "5FMiupFCtqjNdtV1R1sXBachgrK6C6GkEheezQEJWvKMimtso3EGfwugPSrazq3M8d8EprPA2fygJ7SvJ3d4Spys",
  "key33": "ReXdJqgZ1Rja94iiPeXMLFLk6giiXUai8aixMcQoRepYYauT47fUrJTzhPYwWFyX9qsUUfHhKSvp1rjF9ECmucs",
  "key34": "5pNeKoEDfHHvuA2c7KsLvXwfzUYt7h2q5PKyQ5gCYe5aLx2n8MQmjz6FDYV2Pn9QGHgqn6nzU4RuTH65cbp9bxQT",
  "key35": "5agdjbFopUidfRkNq1zhNMPMdSq56Uny6VsbFSK2Shpz5mizQztUyRM7YdkWEeZSsin6XMpS21rNkBkeRM5hhgns",
  "key36": "5iH9XbzZLBMbD9L3J2veTehkS4bkgfEGzKootB67YoJNBVJCwgQLGUWHuesqrP9U2w5CS3d1TVejp37eFtGkaCfA",
  "key37": "49CeTz1nwfZtHpSdcdRE6f7RK1zxCecp63nykRDbY5ZhZrVJ5UDgVzZWVrkPdfZTrdMh21BMCGermbBsPAFm2Mws",
  "key38": "25PVXV3sUkffZxns6rh8faUbJsL2FgUEAoV74Aviz2ZhQiaDso6dwKcYuHHf2Akt4z4ybA6x2By55nAa9sNRUxKt",
  "key39": "44gngyJZvWZZWBYctT1KrVYwwHyf12wiapdTg6nzrpsedeWbbefGBC7zbtTYbd6cbEQZJgrzyJ8tpBzP4b3wsSHq",
  "key40": "png61NJzhxfKAabDWLGXAdTYdhP4afaHc2Zoy2AkWpNkzWgzCdLxBUHZVV2f9j5YK8QW2CBaPQ87Nd9kq3vJEzZ",
  "key41": "5JwHZ3gTexnzSS79Jm2DrMnbJ1vs89StHfzR3Jt9MMWRD4JbaDnqcpwpRqUDNpiq889yUVQK5LUHt5kX6xLtSKkX",
  "key42": "3Qzfs6RojwFBHKjdmL6RjUdaaZQbN7wbSSpaMYGuzHEisn7y4JJAy6ivsVu9ic86sTaXvzpcrF3cy2TUGX35dFu2",
  "key43": "3CExJi6NHu1QgkCq4wqfrKz4pNtwYiugsc5n61yGqGwP62NRjttJDTa91aXJddetXqJoFZL4Ssz4Ki7VQW51hTVR",
  "key44": "2zMd2UvVtfLJzRWeX8YnTVrJNY5ipRJAufv3yAkDTAkzvPMztHRP18Hzxno5fBCU7sgaHYrXLkMdPvoYmvGimzvX",
  "key45": "5RyH4Kngag9BEYsmkZdyyGZ3L8iwqCKzGQwmt9FFaui8493b5smDVseSjDua3me5G1qhNzKBzKDSJffQ1HtrWiVB",
  "key46": "2jJUd3F4BaSPxLesF38LGUzvYXkw5qEmGWW2exjFVhE785AUq5FooMrYuaJEAmtPC7fJcWqCNrJ4EQWxgx8CUSiU",
  "key47": "2xXWN26L7xyhA82tQbEFNTdFuXwj9idqNcfixiGCqnJUy5MGbGRtnXAfmq3FHc8W8jWeAqZXwuJYJaf4Mqj4k4Q6"
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
