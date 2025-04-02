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
    "2ezYSfzca7gsHA31przZiPfrbwuyqFvpqRDwdVZt1HanRB2UtqrvtHofFeqGbcT5ysDmWHXfN5bmoLN6yLucsmEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nngGK35UaLtP6VrqVA8gHXQT9H7KSm7jNPSD2cJV1w5Ybp4LM3w75T3aMxTYBbqkMEpufaYvL4mETM8XDtGE84b",
  "key1": "63eqMHtYYiFJYaj82z82M1GjQNwfTfz6YYe6bzkVZwgxyVzFjQsyzK329uacDaMirUneNXT8xmui4tJMRo7HDC44",
  "key2": "3kwSEXpziT3aV2MToNXa2kUAUpBgd81UdnzNNcm8FvjsLeDW8RMaEMdko4HGuYyLBSRfUkKQ2bN3Z1Mmw1qWkaqh",
  "key3": "LZd9SjY2uvsDGgYtScA8BgBw6Qv1n9o1avdnNdCSAqz1ccTXeFAfFWLwG2RjAM62K4brgzfT5Mqf2mpHE3RB5K8",
  "key4": "4gdZbPqx91fvpKUUMCkVt5ZKytW8iEiFReUT58REF2LH7ErezBH99aUV1KEaHqrKQMYNtihqBPSJ8Lu6vrVhparJ",
  "key5": "YYWBPXt2LaGEzsbQUJCqcahCX2a9Y9g8MUjd4pGAynzQ7JvWQTdgC8RPUYjAwiLbND3Z7MwxizUt8azLhAjarVu",
  "key6": "M7tqhqMZWmAJ28sjUVc9nqSTja9USKHHpZAe6oJ9xKyk8yZkEdykhdGpeW91gt3RsjvHdMT9VLQWhXswAu31kmF",
  "key7": "2H9xzKq3hDRBDuW45DGtXkLj15din9UaaXNULCm1sptmbP4ofTCVzeBgBrCT7FSuiwy2EVftohbNyasH8zNFCjV9",
  "key8": "4U6APSydhPnNZd1beFdCgm4MN96qvg8pdvH1KM8Srk1xWbaLDuFjgwKwxFBQaat8Yk7tZYewv3J7tdCtB13p7EeG",
  "key9": "2spFaf6CP2C1KcXhp9WmentDHbKASSHmaPMVsYRpCbba1jcVoyX4uHewDa1jKNT7171op34WuyguyhtyqQF2MeN",
  "key10": "4drFKoiLLhfrT5rxirESyzsFDuC9ctTeHKReUUWGudxp9XViduK5JqYdDamHuuFHu28YaT4p13eTHbch659XVDRX",
  "key11": "3SZGR43WhYKgQj8LmVTJ9yM2tArYkNsxpY93ZsvDAUKaFppCzqvhFfPEaPiRGfiGrXLHmjpM2ukYcc27US3HSGpT",
  "key12": "2CrjamNNVawAm4HmkG5emP7Qiz71G6DuxdRyabKHzRy8CrioUnjumtdUnGtKMo2NzbWKMxWuYy2cKDX9pwHMLNg5",
  "key13": "36du6D3EeivVEZvxQkbyVSppgtWqAFLwAsRSk9BJK3hVhF8AXmeTrtUjtygNBGig7ZR7hqQKM8sNBPQUDh8UMqxR",
  "key14": "2VnVrdUUEZHeAWL2D3tyECRmNutmVJysJWMLuU413chDSM4ojmoUHwFQGbVDkf5Mp2zvStFuXedRmyDTQuWXy8bA",
  "key15": "5okfowts9HccfGw6RiM4AZyt6rE9rBY1kBWnEiCo9HWkKyV56X7NmsQqQeJt49UXadPnj1EkbKb8zhCr5dWZ3eEd",
  "key16": "4MfnkuHQia3sWvpbAuZmgWvS79BMzDbUjkFnCezv74LWArT7zg3ukjPwGMfEhGHj5roKvezcadPJQuqHbLVKZsvz",
  "key17": "3fczZTwobKTXjzrHXsSvSQAwjjknj9VzhHsuxVW1hDXsGVB8yRSo5HjNQDB797Yf1FQzJJbbL7yeqYpyCVXyEo4",
  "key18": "F7M29NG2NgFDiHzynRoeEd9WGcGfPkPYKk2oQHSHrYb7ovLndfQPoEQSMkDaGjudPBwHigHeDitpE8bkHUJrhaL",
  "key19": "2ujw2PaT7aVYXEKhsjLw46tgwzkt6BMbHdDeNvmdLwaatZBzQVEz7ZC5mMoDCaPa3DcMhLyyjEXLtJFvwW2MGyny",
  "key20": "3T2WNXr2rKZmAXFiBHh2C7UBgZFLRV6TGg9fAd64weoetmfod2yGwTy23GNhSaqSXDcr5EJwA31CSzYwCupD7FNd",
  "key21": "5pQFu8wa8ptnHy7CQSqyoRuUwfmf1fRni3kUuY4Y4PfnWTwqR1beRzBTu719ak7gzyfaKQxqRb8YhchqkwPQqPaW",
  "key22": "66KLGQ8NfJdbn7GUuhKE8ioiPFE782jmGkTc8TJHToVYcUXq3XvE4dVLgFE67iGU6EQHzdt2t5pyDt9cGdbSG7TY",
  "key23": "4GzPed6Zc6DkmzL9nXz6g58gKxrvGohcaJeq4Smzz7d3JzMaTTP4kAVgQWAN42qagS9e4pUYfhhBFeYgjRD6hRLk",
  "key24": "4B3mpCuuKzJukiiXN7heuQQt99wa2FQUkY4DQKziVFGCnntpFZuFv4F6hPSutXpQjbcoDejXY5cZX3LmFcYE1ySc",
  "key25": "2qT6tV9JUB6WFb5an4skkt6dLC3LkHMHjA473pjZBqUCg2wpeEhTuQdUYyAzKCpJ7BbGYtjaH8wCiWX1pLv3nZn4",
  "key26": "3TWj8JKzzkNUoZN2s8HYMziF2cUPZ4zyru5QeZqSybeZ9Jm6eLW3dX9MTmLMs5tXjXfmPartTSDczjVCNkrYdTvc",
  "key27": "4h5vZBBcX6krKSVwsL988R77VotPF2Gko5NGFKCxpUW3KcUSYrkWpzaipuTEKiaDCwQXKSZ5UzyGhWNwk3xZyun6",
  "key28": "5ikULUGog1iVkCW1o6GeA8p9AiCESxNBVfxnKqrbmp2wCSeVny4muFFR13peDSUKqFkbVP9SxTxbBmqXi3EvyjxE",
  "key29": "4EPiKZSKoCHDdQf7k3f8iqJE7En7he2u8K5PCvacLrqVFWX74RsLLn5aCeNRLG7SUJXuRh1EJQRkeFk6J9ZCA2rJ",
  "key30": "2m8nEajh6QdXn6E2Tt1ykyC7DypB5Z25exBtRuPU1PmKcx6Gp4pLB2TEvarvSFCiBgbjKuyFWwQVJqKpS58HjvCe",
  "key31": "2yxr72SBpAQv7zbowAmR44EhpQmsSmEgpz3WteNQMG9Ge7pkXPLKweoHG72XpUhHetfpQ11APh8MsxtCLWYs8YMR",
  "key32": "59FZjfDEyzm47hDD9Mcq9268NQzewUdHWsfMxeKzVPrXBdc7hboxoMME2vsTwqVTVYr2Fg782HzXUSKYxG3XJywg",
  "key33": "2iqMTDWSMHZvdYQzWnUygBDiXFDXfHLK2FW5vL8dZW29Too8jFkyt4aMDNV7KXDN1tdocz6MCcpBsK4jwVwzsXEo",
  "key34": "3XTH3pGZaQ7Gp6R9KuSuuAp4aPmYi4QgvbWUdWay443wsfEJpnkGo2BHajF6cL9Hu7em6zTntu2jM9LQujtnQPyD",
  "key35": "5mjhFCjmjb2Bb5QTwzk2zPcs6mzsCkKEo3d9YShjgW27bStSjeuPBYsGwgbymqptVd8YRwq6QfjY6xMdBpS3xedC",
  "key36": "4cftREfEJVu1AuWWBep6e2NzsiRVcwa3VngMUiNjcHs3FPFgY3W3ZaUfCe5XGVt7mPrWbFkc75duu1vCQZEr8g6B",
  "key37": "529ARhY5553ifsQb7UYjK9WsyhUXU4mQ7Bw7QUihr5qcZbkXmFSB4DqxXYPuVJVtx2HtXAdSYc1d9oWPU5zZUDC7"
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
