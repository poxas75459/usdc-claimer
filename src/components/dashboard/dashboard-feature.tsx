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
    "5vtWEsM8ZPj4bBoaChCyR8Qxr5DrTNU7Z6HEG55MADTbgvzoNGt3ebBV5VhdhFmgfDifE3GvNfgJJeRSBsH9T2Zs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tWG8iHQocbJsUQhxKxJK9t1RwwYoNvnz7QyjhHUhgau8GZwiUtMr4gZ63VV2wfJQ9uona87PtGWDa7pUUqmNNc8",
  "key1": "5J5UUzq4F9otWsSdvbnTVzctoJmAto5bLuMkxHuXzb5qHCsYgpooiP6CjdvnKCmoCPCHfhipKmyVf6Z4XMJpJF2E",
  "key2": "burPsohTNyEwPLU3KHRLU3BHdmgRshE3HG8oeVJMhHojNuNXrYYgUApj1pNtsasSvMt7Mfews3eB72PE136yx1S",
  "key3": "4Tb7f58CwZeRTSAGKgxNwMtC7TaXYxzAKYfBzGcCY1iNodhJ7WiimHT5saCGg7M562a49iMPsEXf4JhhZi3Unz6H",
  "key4": "xHdMCCHt2B4rXH7Bv2eaUrdU7uXeenhHfDNpuCEig7A6TvqJ18Bf95mxBvswTx26wmM2b6M1t4DuzoZtWanXjFo",
  "key5": "PHeZ3TvLF5cidzxk4Uxk8Lc3WspkjuL5uYdnjeX1GQCdg11trm4jjLahV6KrZLPTKr9dmViuthQaE8MHhRU1BJc",
  "key6": "5rC6yaKFmxE6h8wPzwezBp5xqZLWefgCCAtirTLfYiqijdyVzV618cnXCZnMuMiRzuL67smG1CHVZA3mw9eNwYgs",
  "key7": "2Mxo6fPwmRCUBHPyKA2h5RH3cJs8pKJqQGnFe2m96StXYUp8Bv43VSKf38qiuwYdTYi2wPXyxcVA3PD4fF6eXMiQ",
  "key8": "4FW7bDXMDMaKiAvHxG6Bmbbpf7JgU88Emc6tB16NLnNUtNugmUcwhFfrcLUHX7Gwi1QF5Wg5QMRptkXLVYDoTtXL",
  "key9": "454ksAa7y6pvuHsBUS1xaM3NNZuM23HDPi4HzksA4rMCPLZWickBVKQeyBcFwrAPAiNHoZLKfTzRfjpEj1kgpgnE",
  "key10": "5w3EPwTZgpg1k4EgbhQmm4aVd9m9vBNejLm5yDiVrPPcTQt989HvMEUPGK8BWkz7ak3cVyFhGypFYaNsW6UyQrpf",
  "key11": "3Dnr6biog1bDceVz2whQL961WUHdXo2igpZwKq9difnievuYW8AvMAuAzoY3rVhh7RsGmApdk1pwUG61SaZMNRhH",
  "key12": "26Zm5eZJ6cv2DQXJDX9n6oskpD8N2xYwx8oHYUpeCpaE3PAYUN3Q1wXSYyhg7igVxhwyBmDCDdTguf21fPj1SrUN",
  "key13": "5yky5Uj5zufYM4E8RqVi12bMZcsNsgwhMcYTK4P4r9AfXNBpmE9VBCQdbNDuAuS1raJ4p3i96GbchQyrVpH7Wa2b",
  "key14": "3rZUUSxPLRMApLRDkt5dbDp7PTuaForHBSaamJGi92VzsKzKoJrg8JDder1TrfFr7sxXmVViuBhRnqoMDWowDKEa",
  "key15": "3u8Kf7VvoLKHU6Xduh4L9dpmBZRVqRjW14cJbo1Lvxsw3syE61rBHe6YGhiQaFPrAND5ZDXWj4pqSi32o4iaN5Dn",
  "key16": "4T3ouEzbZGaexuAXnemxMaVA59agjaig8axW9ak21rJQyeVCv5cgBBTJBEbHtLJ5p5TcY3TXyc8wQwZCazvDBZ7h",
  "key17": "48HHUEPcP7LCSVyMXFN3jMn8WkgSsQDeuYah1HDsfzWhDP8m1vRh4ALBx3s6m74dGtB3yHsEjiQDnGhRjY1rtzvs",
  "key18": "2684xe8BVADXAU1sMc6NCsAEkKLYArkCWw2FtzeAY6C4etyGv2MSZfBRBYjyUYVCp2bAzUrYHBEapv52MQMVWbNU",
  "key19": "3giLYzU9wpUz4vAzuQwX7f6gq5nokxzLmbuzk7EoizzzbPEECoCuarwPdfBw5THSSzLGMcscnToorwRqfQVELiww",
  "key20": "37NvXrNpWj8YDUNr8MJkFFtM9eXA19Z8vfNvS7ZKVSNCyN5g7ENDnDA3tMBfQAyDDckJjJWAnoztXdFg6yDg2V3E",
  "key21": "2qPDSFNhpC4s9WuSSrKVL4iAipuD7uH8mqkZ3Ukq8c2wtU8o9QZEBe7FbetZqExbNiz68TMREiaTGXcnsCcDUfQD",
  "key22": "3TkbGpqaypwzLZ3fjcG47g5KTMJvoFXNsiTb5ncdmp2uH6hfVLLs8yxJHVgauwb77EDJ7Q1dcSJww5Ck7w1W3yJi",
  "key23": "4uptspwrgZ1AWALsz2jQw4PVsJtA4nU7gPnW9aBRPybPTUBL3coKVVXBP537m8bYokirq63S3JbKL9eMHHkNNEoF",
  "key24": "5bBTGGzD2pi8mUCECy89xeCtkGwrvPPcA6y2ofJkdQ6fDfBdZDR6gjr2EUNtvLCbbH8X7S2dieKCGvP7TiANVrj5",
  "key25": "2Aum29ePCVqau4Z1uCnWc7t6chPrzQqAoQW6BbUUs4xzCdkVLr8rqs3KXuYkihRaHgdKUv41UhbkA9DECpvNxvrS",
  "key26": "3kEnyjuzBDhgBidMUQqwozaFwer1WKFwnF4fiVLWNKDfUisk1YEUxSqowCAhvso3encEkJVY18HFceN8M2m5epVn",
  "key27": "625qS6LuHtAk7nH9XegbFq5gQ4FjKt7hR7ToA3konxhv2fxJLi9FSA475agp7Dm8tRdpTY2SyaYkwZzqdsC5pLdP",
  "key28": "5Y3JGc9eyivezPJzRxe66tQAd7k4a4T6g72hVDxk1P6JsvzXpp7Qanp9RkHJCwSEHYt8FRAUX8CUfPuJHAbrTJqE",
  "key29": "4jU6W3qKuAhnGDXA7WGeK9mDtEGwAE79tfTJSKdYc7QGvWUwsPhcCPNhqDSPW5L9beWf9e1M6pvcy9nHMY2NeVfr",
  "key30": "4bBohAiM7Amk6a8ErsRpyu5F2eG5HRLY9LGVLh9SfuTEUtbmoiTVLwK5BwLCUvDNv5zDJTxV1JF9PWGnSqrtg5rB",
  "key31": "3acLY1MAjnGupTmXoSdQdriZWXTqj7GT6uEUnaBnbecTR8B9FLcFh2PK4w45SMSJReEu7DCiNtnFspUpwrvcqKyv",
  "key32": "3iFQqeYr57xtba9nKiGteSuqEoJsZiuTqghbgAwhBCPuswGtWdYb4QfxeVG6Q42W7dMf3TNqJapirSP6dJitE4KW",
  "key33": "57c76R3bfModuZJsZjH42irhuaztEBfUMP61QNZvCPZHQ6y2k1eKbmYCSd5hA8LqqkahheoD2rfAQh7qnedWDBBb",
  "key34": "2AhgqKBLzE66M3edZLFV5rZKCYhpPykMBvRQZy4cKE9WT4UtEGqjChVSaX6J3Gsj5pySBqbxHhnGmCyGqaEjCiRE",
  "key35": "4j88EmXWZAHdcwYTUyEpGCVBpYJ1FLwXo8Y4kLk8phuENnmjVT8TuBcYFRMHDDshXrWG1c2A1Nu4FiZj2i2iejwc",
  "key36": "3AT3hk7Y8MZgqsZyXfTenuy9FUvakuE525RhaPWhHsXhzDqang6c9S5qfFYo5gvy2f49BiAgiDXC8tCn6mzC9kLA",
  "key37": "32PCDZh3oyB2FHJPneFAYDddXztyo1F9wMxwMxCxhNgy1mZJg3bvFoTFHcGc8VLHMDmQLAEKSsxZnHesuF2PL8nV",
  "key38": "gfemdeQ78CStWwQ7oaiVtyFSN7jZQPvT6abv1MLQaV92HzKuwQJYX7EBPdoodHdF6WR8cDWe2mD5UfxwuEVF1V1",
  "key39": "5uXRXsw5ZDj3TwerdqZgxcB4wap4gA7cX7MQAq6NPDFy2cBy6HJ191nxn4x8nmUoCB1x1YkimbThNeAPMGAbyk2g",
  "key40": "2i9nKRNQV63viqNan8LyLLNeDRuA1Lad1hBNMffuie3h4xAVvME4DvAbyZgL5hgKexYpixDtmhpteRQMoaDofWXc",
  "key41": "4sWbyjBGjkfH3g6fyMoESxZdMYvWDGLZSbrT5jtKXCFpk4PtsvQH8iEBRKRN87rz85jcrn6KRtVZGPi8HBdB8WNA",
  "key42": "6EP6MCE6i2TLLr7L1CftGCZYrWhvc8Dr9DFEmFjP3kDnHtf9pdCMDkphVJbNvi2JACQpeUs1rHufabdFu5tEGhV",
  "key43": "5SjUrB3GGor4zMCLynwJEj1J8pvHAUYMrw1bQUxpgrHUYHRS6gVoF6nZr8Cybq8NVYaaqyfNY3tjJ3jQSuRtSBdg",
  "key44": "4oaHvXJ9TqyoFf57U6ephXM8DFFaduy9XMZWT9JrnAkav7VxvyG61bfDAKTmQfhQV5UqVqsd9beRihw2MAUnyFdz",
  "key45": "cgZBNN7GbyGhGcVtoDRHwaF9s7BDi4MnhSS7cqzhfcT7DmdwS74eZncj1WiLCN92ndqvYWQt3RgaczBhSWpsyS6"
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
