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
    "2ypi4ZjR3v8vtS3qWX4XJcC8Ns7QK3FE4qPMWz5g92CNBPgDP6XcMXmFrxH34yzz7GGP1SRKrj5iPodo3CwR7yqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AQSDARQPbH4MXC4J5vR5j3zvXNBTD9gcG5y5S9rySGJS62H2erSNRwL3QVTGD271HxRMYXh3H6K4uJxag4Q2b9T",
  "key1": "4kcoDZncL49BuQpES77M7ANEWLzt4Y7VzYrAo1oJBSS1VUPV1BkREnmQfcihkjKhxwSej1g9KFDJmqvZVd45rBnA",
  "key2": "4aMU3d9vpzWhtonBnk3F86noEG7c5UsWrcQxjBLicJf43u8ARAiS2BM21x9qPjqQGyMkoszbisikfS1RVGW5ZvVu",
  "key3": "2CF9mMTACGwXXuos6wdsAMtSEWkuABZXX8VAgpPCB2Cevr5GKpYVqgj6SeejUJTLmMQrAK8H65C7fhpuhsUsUrPz",
  "key4": "2zdinUKbt8iPMZ4ByrhwAa4sJTueP2iN4wmRgBxQeJHYyK2M6QykSuKgPYpKm8stNYYFb3EMmZfeBAjLw1K9zfSv",
  "key5": "2YYCA2FF28kHW1bXULgddkGyfBiop1ZqN4jNkWAsXXW3xqyM6zT6zbvg8ssTwLo2tFcZxoTqEGoL3Ev6n9JQ16vF",
  "key6": "5Y5ayaMKF3TXYw6qfpqfZvGQAMo1SLqh9ag49YNeq1NVkWdUvhoXhkpGktYL5H1MmseiwoWGnLPwKnfXNwcm7TFu",
  "key7": "4Lhjfbrenz7dyE4X74Xif9Jmh2rhfPbBunU3bkTcPtnkAY8j3STzhzJvqDoqjehMNLg3GFHAx1xnEhPQgTQ1USyN",
  "key8": "3puvoRbZLRhAXEwEXGUV3L5FvhPdswsmJxDnyHYtLWmTv9K5py4qy4LaZpdRQuPnnsfpDjmSuAJberE2fHn8w5Hi",
  "key9": "3uBSAZS4pNaaN4RJ9NTYPP1HmX6MU2NrLLevRZ8cd7J3wii9ZcA92RF2JsZZuu67ax71XEgWhqa2NPoQ5cNDGa6W",
  "key10": "47USWKPPyMGSHtydE3hy2W5sbhYqFGDie26TeszHcWoJwWw3dQKf7qiVri1zXLxCivBPeoiveGZESZLbsuSCfnNR",
  "key11": "i68vkjxojSys1RGsT9AjjMeAEyArJVgGdhiVauxeaHD8MZTEvjoAb1FCkb3mryzrqTJYB1NcpamtHZud5rypmj8",
  "key12": "3sPw3XuRfd6GNXhos4FW1R1GzqSwwg6p6LcLNu2rYJjWdSNHC44qKfBmLmqNhUeRQGWpZ8z3No5DUjFU2DU5UHB3",
  "key13": "yjAJR1Ev5Akc7FEtaA5N4X3fcaMbZsqAu8au4Mkpn4VSZsQqXD9kahEXnRKV8p4U2mxHtH4CLcMwAnyWiHbUf9p",
  "key14": "5Qj24tjYud2GDGMR3ro3tsApA3n3XGLKnnVrYRw49C6MCx68QNRnmbWaiHAdHp2JztXbhDFXx2upMXPmYzdSk5X8",
  "key15": "43xSVogWTRVcooNKgwx35jYzR5AdRNufLsnpP7khJJPPoF2An2eT6VNPpWy64PBzTrmihLTwK8sKpa2aEVCmAygn",
  "key16": "3DvEW7i4wvp5tSS4gNmAC1E82xAfJzXx5VV5mHadWLbZcwmcNapThCZgg9ehWEStCkpHAiw9KpxxkRtVctC3BDD3",
  "key17": "5ZuGY2e14sFRXqf6rAwQE3YvCCbEJxMiGEWphGo7Bevj8YMCyofH6xvZJMRzYXxSgAbSX6kXJtB6b5MLNs1UK3s3",
  "key18": "4C4zw5yBBxiAKDXDKPZNdr1xwVfbub1ZEzzttJjsPyDUdCuyMC8MDXv1AkZAT8jXZz7TiSAerA9TD8azmxPoE6F8",
  "key19": "5YZffqihZs2Ah3718HdhP7ghajM8qPvpTJUWBPYNB8Gqp66i9Cdf9yVBUA6rtQDtkuxW3uQ6J5dBZjaX9J56qXHQ",
  "key20": "SZJS7H1uxQYx92G3APKPiuYMTb3WrJJHh1btacqXcbHX2nupyCdxwDzUDsAYXUFUTFmgxuSJMtBX4s37UURt9nX",
  "key21": "4hXApFq61SsSsJXC61YBA6o7yLPkTMiHPCvMikKahNTLWaXiJbLZjo5Djf6RXovud2cLbGhDzpRAo4b46wMjQdYE",
  "key22": "2HJkQJ3QnVhuDHDYTa33RaWqqk7dKuPgXcsigYKuHuw1J6Whe15qVHrc2GytobDnwpU51nAyFLizAfjbiAkeCimY",
  "key23": "5KyB9aDipmVtAAusbu1PJ6afJG6ieASQN3UEZp5fuR1NWBLffEzY5aem6RuA3dKgE43TVqF8qCsz9Q2jSSvvkK5Q",
  "key24": "424gyxiPQaU76eFrgrQsbmeRuhsCoMeQrxwE8b37jY9sun3wvtWF6wTBjGpiJu7TF5q6tJda1GUjyeAhcKVcxfu9",
  "key25": "2WmrD17aM6dkiUhWEW3N9bJcm9epTNJUMAtHSjhMWbhTU6MudAWYYWKJMsEVLmapSJs3FWthhD9g3UxnNVPhJY2o",
  "key26": "2pEBxa3YWmFGRqxmLj2yBdYTh54gPbH4h9P8XMjHHG9XB4RPmzRpdPvbyDuv8GoNLMx9yWWLWFEyLLswMfbuiDRC",
  "key27": "4oiorBbvJqUAAVtxKZT4u4WRggXukbiV9XhMGXYhBc8NAHm3DSuiFc83N9NCYR6LFWSamvaGffpiJHMBTqNty4x6",
  "key28": "4KNyGQhbgKQoKkdHiT2EAte2E43LjdUMkUqBEvaNcHgYJs3c74LuH3qkuLRHzaPFu9CssS7cfTT68iYohUhJ2K2q",
  "key29": "2i7YRs16xgYCr1kBrLP6iE7RFQuoD2QF8a9PifbJQnp5L3b5SKfYiUhk9QfZ284rk3chJGZyGEZ8GKeSYgpLfgur",
  "key30": "yQhYfuiPT79s6EBkpKXeQfLxPp2xGTGVJGebVqM9CrazNb5tYRBsbbHoHErDX55YJtCevyszAX628jbgDVSzinL",
  "key31": "vDJuccDhDqaQaLoC33P58T7zkBezdvDYXeW3hnjV81wJiZnZHEFr8BhQjwaWDMdkewXxpB4RDbftjXM3ZZpkaoh",
  "key32": "3p6LW9Yz4q9giS2Hs1kfafvuYnYzTQmSW9d4TEKHrU9Jrj3Z5pBMxS8HzAjEuLWVXX1m4MhBZEyivjZKhEhZXX4d",
  "key33": "BkPuZdXR12qV2YYXbNAznCBbkykqRpDrwZ3mbyzzXCDeSLvmzUjRU4wo6GePwhwegXkQUgJM6nokSM31me3566W",
  "key34": "4FckCAx9GHL6ffaLkAtEEDV1H4HibmnjuYfixKHscoELQvnmJpCmVb9XGs7eGs6p5jQkmuycqsrKxbUEoLqXSd28",
  "key35": "3JTSV37s3PfBHETJkYeUt3QJyVdfRn3572qP6wEdvvTUdrF3fHcovN8BAASzBD4VRXgUUbmmmDtaXf7wys5wt2P",
  "key36": "5tuoeoDL5wKazuCa8oxN6sEqKQKEC9s6hUJiEdi7JAkX7yF9YjJUTg5Zzkz6v4kjA1iB9zAh6K7jmfBczAMwmzRF",
  "key37": "5s3TLyoniD5VG6n88rkUHwLZRJZzcTKKaMuqY5WXAQXAEDD9UHnPWpZACPucDcaccdNTYK82aRmF2ir2GZqRMXjM",
  "key38": "3BtznCRqhrosSa5aTzdnyAKP45ZYgvekK6JJr49eG5e2CrdHcQVKAk2KW5bjR3UYs5MpPcCb8GGaf7d3P4oNRTUS",
  "key39": "32X96BwFaU3KvHDwBNUvFfdpBzM6a2Z2S8DHN517tjudp4YWvazXNqZ5dsiNxMwXYSLDUpAnLpcSyNCx85TozQJH",
  "key40": "2XweHpgqHc7MK41C6LBwuj1LqYJFFh4DzFx9CepgaHcicycC4zWtfY66RP99bsqVPy5xNy9w2RGM2ZrjmmKFR4oQ",
  "key41": "5fuHdKumZu4uVopbRL7YjpdpaXNjfhcD6n6VkS3D3kisbftjp12JuWypXGxtuRBCQhUyipECT2dc8ofARUyjpQCp",
  "key42": "3WaELYgsGApgEHnUmpnfKhS64hR1SCwfoEVbjNsZNrw9an1R71vKPSvpPef91meaVDHtPdwJa7xkGe3GxCNb9Gh4",
  "key43": "3qYGCPc7QzHyprxLdUFik9xHkGgwNZmPdGjk2sa9C9BHcGaRfpmiQSNnkeUJeFWDG9oovaYoRxC9a99qe61cWh98",
  "key44": "2DkE4bQjwrgvBusLxARpgzU1PziZHM5yz9jq3iDixwf7hdxBztt4D2ppKwwWkZfPcgMMoFKmYLj2huvmKn2X8Tnj",
  "key45": "2Kz66PrgLZVpepiXbdcn4TpjoVz9E4MKfB7t68jtg13kx2mLry67qyUhJxDQw2whPgzJ7Zs45vcetidhQMSANpoG",
  "key46": "5TqJQ4r9nLiDCQR9SPJPx27cA1UdKSJ2DN9774APurZpfrWyMCGqYa6GS1jPowRmk6Mq5D4YZSrvHDodvbhxmNyx"
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
