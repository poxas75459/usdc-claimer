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
    "4JtJTmKfUKf7hcEjeAM7dUbTR69wTvKRRgUfKvKaSuXApzxaDPA57S2XhVt54nXZTSk9SKXqjTp9aNbEAoP8NZDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ggX26pPs5AYPRoMdnWVqSLZaF96i1YtiqL3QrMMPwdrj6gmdSgNnJ2Pd2CYgJaJjcdwQBurxYFgycxbZ6Bgvfmn",
  "key1": "4uziByp8py4zFUHNQJZ1JvZ7ubEaDzyd5DY3YxHNDpAaHEnC3ohkT9RSNWcGH18YnMBwGGTogi9MJwcR6UV9ctrm",
  "key2": "5gAjTppXL3fmAiAXHAAsvj9xohNSTYNCcXf7rkCphFYX5Ht5S9qCCgyR2quFsws2gVg6NL1HkfqNoeyRscFsxLuW",
  "key3": "CFYEvyhBLmBaBGvMWV6SiWNJkjuPjMUfacGoXcit43H25oR3nTJPrTXm6CbXvw4URsXvTMFVgsZb25M8pcuJF6E",
  "key4": "2BvfsJmkU1fw9ZS7m6zCscTWHP3puWpageHBJrgcWzcf2hWNT9Vf9DMs5n8q2dQJanpfcusnPYstLCrYANgJb6FM",
  "key5": "3QUmWrPuR5mnLe1g5pai3s8Z11SQWWZMcSfBmd4HTmY6sobcm7KSrgZR8EWz1Mu3q5KvysJ9x2YZGwvrx7jbfsLY",
  "key6": "RdhT5p4nZFpTUdjqmGB6CaY4WG12dJCNoRt9iG4FKPEAjPGxt4ueX7NfankvJ3ebiipSM5HZK3zYQLkGvnTyYd8",
  "key7": "3v1v3SvoHPN8652GbeTktW3gat3J78NNkLBYpPtB25CZQSkdacCYHM954YfNqMmTkUM86BRPkZTCb9D7Rk1BgSge",
  "key8": "39D37mGKA3fsiUPEgbpDPb56QNMBJApCybnjJeoo7CkCxUtK7qUzm2beXEjUrxkygV8MKcgHT9FfoTEkxUGxyV27",
  "key9": "3bvtQw7AzdjRgAX34unCihP2yHhzTZ3t1kAyx7rJcQio4FnbvnB6sk6cC67CZN5UGDAkNfxQpiXj4RTF4mu4sK1p",
  "key10": "52HR4gs5P2K13pLJL6kWbWp381eabeP9uxjZErDnSbNTEBfWQDc7wx1DtZBJCXbbQBxhdqb8WohwGd7gCoe1J5C8",
  "key11": "eidrFRuyVQRpjf1dgSqGVouKdoEJmG7pDG93D3hCteVctHT1poHV3KLWbcF4JjiphbkPnWnv2HhAbE72XyrcxiG",
  "key12": "5engh35A1Xi7WzEpGDxacr8MKCiPZJfjNWs9AJSjpjdx5ehwMoLeeiSCWBG87pPNM2cRKKkxybye1pjHCJwtdMgU",
  "key13": "2Sy1uX4HHzRUnds6vrrSET1u7uuoQ11oaV62237pD3aTmiM8wNJTUF1is6kW7xUzv1uvr5cchpEamisLkVTVvLs9",
  "key14": "389JePmzgpGuywfSidAeT6gY7YxXTTdLDGngo8AP8EKCYF9N4M8QtmA7hnDenWN7aosu8jBFCHu3V9D6qR6dRShV",
  "key15": "5Zo3RaccpWHzVG2xSFhKYNx9nvizJTK3epCYJExwTUEHjfPgHkzkaUaWezrkmHopBDGCDmCvUcSwW7T7YSWPvT2m",
  "key16": "3PJ2jpa3cjNwmNtn9naLdeeuQh3k3BtSJCmb3TqsE6V2RpsTytE9oTmDX929Z9GjcDubiMfxU2vXh9vZnZXM1qc4",
  "key17": "3vumSi2dJjtAEMW6FwJChTUgQdFEkSY4prR51QMMvWWzJTLp5qVuGM7cWBF9prt8LS5gyjF9GkPEaFbszsuTM827",
  "key18": "67KXHqUKpyKHt1sCZNRuxr44E8qxa7cXBkCkSG36gXvR5nbBjyBxRL5cwaQfbLhpiVPeJ2totK74ZyiGgjUmGXJY",
  "key19": "BXvW1Vc1wBVPym6UadmbWU6DGKyFjeuRLo7tr6vymGBRBb6MAgQ36gayN5eTGqN25zDzu5e9CTihDBSD1TePawi",
  "key20": "5kfVuRzzpZGkDLbGmW2yCtm1B7KTDBhwK1BhFdkjvSbg2z3fBP8fuVfYmfqkX6a9rUvqnpvEBPg42H5z6jY3MtRW",
  "key21": "4HjAxZrPt9AYcwHH4ETgwjC6zmufm9Aw5hc2P352S557hFA8EbXeZr3dU7TYj5jUZ1Ez3gpXp1TMb56tarMCdqA6",
  "key22": "ibcNpc8urxUDchkpG5YGAEzpadaGPzPbbhsACYfmHiFVWMtLpBGrWtDMbmuLM3Cr9rJMmYtaH9by1cJQKiCoxq5",
  "key23": "4FoGPw8mPEWbtRJFYvjcxibA9DrNcPnAuguFHXgLqEecN5Nq8wuCmbj74jwttQhmtAqLZqtz5f6J4CNzpMdRS7y7",
  "key24": "38aX2NHvG8sNqNbECAEv4LgNQXS6RX2pBaNyQyr4aMHp8RnGCCQKFmKakwnHFjLicE6kyW7v7ojxXLPuzvo6zBFW",
  "key25": "2qccUeE615kQ4FaWL4vTLxavdiksnUjCBVSX72K1hEdCZwgv3q2V7aQg7C5teAfBBWJsZZwKGtRRfUS8SuEGMG8K",
  "key26": "2NEDHeqNXZPH29hNNGuDWUtQNfod8PE1BW1TdTjUP7z2fmqTSpg8aMtJdBZyvojoxBEkntarnfiRYnSgRWpwYfpP",
  "key27": "2ZM7XQJjASbrP6LXUUzctYY7dB4z1JJgfq54xhvjudQdJyQuXVCLaD112uZaext7v5AEZVspkmqB551KFwuUbFur",
  "key28": "qmKbf3XGHAnhQLwVZNWHC9egvT1Tg2R4dFCR4cQXU3AVaYoPxKqFcgjAE1WXUCdUZRGcJM5HBiVeZJUG7tbpxK3",
  "key29": "3atfRns6g9rNZiZjkwYeL3FhwkhRF3DPQbVyPwQjQUA79iyRqx5pF6os8dQJa76QTJwZv86MfoL5Npi8js7U8rhF",
  "key30": "5NtcM6DgdoucdVV3frvyKWEgHtaP9pv2ZFJAHx5Pxxu9k2WNsZXUUBPQdNX4a9JXoFCkEJpJjBitQUg6y7hZBNzA",
  "key31": "2J81k8HP63asNqHeQ3bCb8ELkvFM7cZKYVMewmFEsrRyEfQRMBPm7M3qTo7hHsajgfXaiYTBLXwfPjZbUxPSrW92",
  "key32": "5YDuf5mvvER6qFRTUH9EzHFHQLDzrj2w4PR5ZXZegU5M7xRniCTLitNh7zypss7yS2fKVnRpT8QFS9wdHfGWujqR",
  "key33": "4jopQHJbLKaRcqyCg2jBisQxDGejG6uGoHiovkFACh6ydTRNehAyLqoMCXiWgvYyVMweFmFapP6uk82Qfb4EaWdy",
  "key34": "63ZaFegeVDfwgKgMvDFeUdEJ9JncxpHB2W9LZTogKEzWogZSJ6vxezfcqziTSuJ2Cb7xPMt6pWhk5WvzKT9PnzrZ",
  "key35": "37rkhQqfMSWPNBoSxmNajtmLa2n6XezZHzR25PSJuK6mx7CbBMEEDwFF75ZwGuVquySfbdoZZHKqGkGgpH9TuRWR",
  "key36": "5FJrEZbmkAwVdg2nFQPipbigaRyHnU7nqXHHnCEGfAnpdRM1BwVAYU7zncqzeWnCBGbzHnVbx3NwZBqjR1imgUPN",
  "key37": "2yPBeavqPp6Gyn8TZbNK1x5zxqBgoHzHLYqtBatseMjAtB4EGHGUZPD4oUEeDnwQMAzUsW5fP9DS5sqHhNYwTGHV",
  "key38": "5W1qxXcRRVnDTx77kd4b86Rs65cRrNXSXsEP6126fWMR99nAfZRNqnLPPNiWggK5RUiEWCv4c91SMyEaHen4dd9J",
  "key39": "ZEtgveFiWFn5mR338rFhfM6r67e9NCYrvbtwgYPQvCx776a3DHvbSecuGtvTmdshqUGWLw5x8LvsSd9NYx9bV26",
  "key40": "24ifYZzXPirbmD59WJapU3covQbG5xj3n1DToZkrdi8zKvnZ4W2XonVH6i9NybAMN9CzWKPnoHfibtGLkhfUcczP",
  "key41": "Y23MEaReZtDwar2EQBDr132xcJnTQvFGYreuNSex9KtC71myNzeiQPgJeVvCFGhCaGmmqQfmo1AS6Zp3yimghQK",
  "key42": "ypekp61VVvZRz8ynvfeSLKmEpYvoRY5b8MoxP1GCEKxeAQWbmageowJyAEJRxHRkLy5AWmKdJv7RQrH7bnRcHy8",
  "key43": "5QXSZKotbEEZHHarFhqBnAGqUW7kFPUqZbjKWduRau1ChiSGMtXb84cN6nG2ymEgwsZhZ5rYZgy8zYuFVkLCDpnA",
  "key44": "27PAnxHjup2vJjm7zNJ1wuLx1RFomMGuwPfFZ3cnpaAstKKUuNea3xQ9ctYuH9h6gzqrBVHmj2rvmhcmdF9AxVgj",
  "key45": "55WuZzijoaAMpqxUvp8uo639LPCRXJwrrsRQtKt7Q2GnsNfokrWHjE59j2hETXk1SqGcYgjfrEYrMPYVD2RJa3hz",
  "key46": "4y8j7Yb8H3vcoMQ9zuogSGdZRacWbJtF6pLXTknK9UH3QCYnzYnHwt25agFG8QqM5ECMqzHoGaGr6XWPpSLQyHdg",
  "key47": "64ZnAnmrWx4ADF8rFAr8R4MRfEShjhssT8UovoB3sr1NVcJHoB3QJ6ZAw7xaVNMos1zm72s8wJ1NiUU2ZT3Njd1j",
  "key48": "3fpaVkp9JwZ4BizZASVNxww7o7FN3QTeAgcYWJJZHiwXm9xWcyTqK77MuP7dZT7KczkYq3U9DqiH7jNSCYXrV9E6"
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
