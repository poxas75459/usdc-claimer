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
    "4rpgcxHCGh2uDRVJNADrJvcpwC8ouiBmyjigWFdLxm6bB3sTFSqUJa4uqn8gmSfSjQm2n1wKrEPeah6VJD58arGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VgzAuvjXUWFbqytaLPH629qJZ65qk8gJ3QdMt7eTzmsfZDeno1mJ3BiQtCqZ9EjZXvfuPfBxtvKzDztqWLzHxbK",
  "key1": "3wGnUyiA1Aka2T7K32T882vdcrDdrkq768adnhJ87zEDBbEzbJQLeTfRjCYvTMh7uD4QdNSmHQBLu6WkKSyPDDuU",
  "key2": "eGWD4fwKeBeDuXbQfNeFbPh9geYSP6Z1piTxju2BLJMPSS9rS1KiDDYPGSKFLg1q19swKJf9df78W4S5fUXa127",
  "key3": "4mWDVYXkVQh1LEnhDXy64jFChhRoHygAXiKUKGqC9QzbiBUGmZ9ASKDtGY3mdvcKoepdZBtNMBLGaouCaGAyRJcF",
  "key4": "5cGmCcfjZeUVcBXygnwUkAqSkUZPC99tkp71pMiM2bJpk9H7LzGvWouuLAEoFomm2NygyzF8kECyVE5GrCgpLdqq",
  "key5": "3UrRtLUSpyTKD64D5SMDzZW6cxTnb9EtUfKXeRALCqAmWbGh5mwBdCGELZCmGrt5yKscHqZpAzaDvn17bABMuTYQ",
  "key6": "4oRGnnHBsZkQApzwgEZkEcJ2kR795WLC8QWcqQnbhMLKLJkddfM7Q889p5s6BzebbvzDDkvV8rbH2zAviTYJXst3",
  "key7": "4C1sjSWxLe8wNK7ZR7uwFLEHNXQ4eygtSo9P9je5kevgmKwUUEVJUj6a7uTv2zg4Nq7QAqDEEjASDptjBh5qiw1v",
  "key8": "5quY7Fkmz3eyS7x91fomhymMuFXUPRxmhhic2zXopBrSeQrYVQkuT3MP5ATSN8q86KgBbRTjSBJzGkwjb1ppa4yy",
  "key9": "28yriXtXuZi1SqS6vDXciouWknmFxKFrrKscGt7WaJoAUzcBKgfotiKq22gGtZpzL8v2PbYZsXrcRpk9gy3uJ3qm",
  "key10": "2LeGxEqfzcUxZ6Qjdzun1yzr2G22BaZ2JWh8DAWD1RrRfKDeGz87Uvp4Yfeg8YH6tHpcN2JMXEbWszJXecdxM2xB",
  "key11": "2VAwc5isB4ijffGyTVULkZ3og3ppjaNF2iNLDCi7JD3NMqCngAXWRcHPn4AzWM9FEFuWoa3ZNb5rX67FeKwsGNHM",
  "key12": "3wb1CL8YbpXqA2vKLN9x5tN6JoVsRHC5x6tmrh8Dk4UcfgUBT5WNDiE54gAVLUWzg8tVQGhRVpAQD7XyJ1FjAJJy",
  "key13": "4kuRStxmG53j8E2oMKS9nvUAvg4EL5cwsETKFKR1HBXvQza8zJpNrrwwCS4hCx1XAjEgqYChFZA1Fymgj59GbZEH",
  "key14": "rPvvjHz9jQdC5GfFh7PVZEx5vHTXMQptRggh4eaDGBKNWb9JF5Mjc6qU964NQkejP2KsTruRwQ7NR8S6jMNwT2h",
  "key15": "2GY4rsYXrDarYEzkhx7htpVKKajWWL69Tubzyh5gTmAZFH9euv1MQzjwQKMTzEBbX8Bm74uo6pFPrLJd7RWj1qTX",
  "key16": "5geidVoYKy85AsqJsPxRVQbX9hfKS8a9FXS2H9PywPbDkffeDFpxKW4SHLiC85eCEwg9v6gKQ1UvLrAiG1bUZdNp",
  "key17": "bV9uszgCeaqymEn6sto1TsSFFSsdHS2coQxG9Gnyc5boxycFf1rk6pmxbrGZS83y28ZB8iTk4RxrgPTFPq7ZFa5",
  "key18": "4mSf3XXRYj1aWTpHsn1hTBNKHgpjv9dvwF7mVCMxhcaSUVczF7yE3stWgwRnCPW7cTd4DTB4MZYxhAU2sm7538Am",
  "key19": "4q1nNUDLG5Rrbw91vaGHpJyAxHKMX8S1vaqMtekhtXGVzL4gnK8ZLa7r3qFYftgZ3gXUBQhcvUodmPNLGSwitiUw",
  "key20": "3fg6vbSVjc2Ug1uWZr3Czp1dWU2ivMGmFbMxe2ZBEkXMDjgB4X1NYVPrCPC5rxBWbkgUx6KTdjd3gDnV2m9TUbqt",
  "key21": "3mmtP4Q3eU7Mzwn5ZcH5YTWk5C6PJrEnEHkWde1dN87PwPRgTP4TTYwsShoqwnFcQL3yeXUiDkbo4sEMLkoDgurq",
  "key22": "5WNJxxE89dio62xsjRYav3xr7bBZYkVjB4cZcWYnkUMNcE4LDA5QNFdaVWLtH9qGxDnMaFgXFGW4FpXM849DeH2e",
  "key23": "2SszxE7itWdLhms58QXirfXwXNmKRq9q6fMgXhoo7PjPWj3R1aaEuYkh6qucq2WeSmrRdG3hdbiUG57xHMxBsHBC",
  "key24": "2BSSUPcSyb34pJBGFHLKvWgeXzFE1MKTeVT1sTcuFE7JJoRyCh7hkiFrp3Lpq18oJpEbAyrMdFDKUfbSEK8N5Wbu",
  "key25": "3RctR1hoLqUjkjy5KCebCqKJb6c9BigVPKhBh9YSzJswuHG4g5DL4oz7ExYWNTRG7vGr1hFP4yybTJ9v711FYinh",
  "key26": "5DxNAtpGAwhw3PGdLL2gxdeFj6EZDPftn4ZZ6RA9B7yKvgPjHbh1S2w1eQRnnKqjRiB62hbtx6Ci55zFFrjPP7vi",
  "key27": "3CJC5jcdryZCQHAPRJzdxUjQqsHKvp1se8dvBC1hMRQzAMFJ6XgG3UJaoiDHW8DLj32HRkGhb7PVNfsVyLXEc8Dw",
  "key28": "cgkktu6MaPikT1yWfNKUm1fJLtZS1XYkn6VKzvBVSPT28MgqKNhZA97bJaRNHv1rP84Q6RcEVz68G7Kf7kSjgkd",
  "key29": "oB2JxhTqEnce2jnoamY6rPxPvqfavgJMqeFjCoPLiS4qdRrcXE72x59mNsmUMDVS739QPeqE6uBBq8XovZd8oa7",
  "key30": "5ruqnAe3BDAVWuZ1uJwJA3CvWCTytZtA6sgH3RZ6DSu65BTYfL1MEfbRHnw1EX4xG3wYatZXPeaShWLqkVEdCbVk",
  "key31": "TX79TbnnXsDzEfUPqAceuaQg9mHPLLXjE2J77DcTAwuJr26WEcZuGrWLhztEYv1FCZmCmNRY1pFcKhZ1KQsAkN3",
  "key32": "48ddihpQW4z4nyWE8UetNxecUnE9viyk4SQoE6GzT4z4NS6FbJf5rVix9679d4HYG2JZpJVWTXkXTcXJcpebUZ4E",
  "key33": "GQeET9aecGz6rao2ZrHa9EGi3e3TXWNcrEjeoWCd5GSMr9pvneJNU9bGMt2ScYp8sswVPgZ4rxyKJnpvytnofor",
  "key34": "1htzidEEv6pR6mPpys2hcmsCfS5AMxmgABo2hVbbaAh8pKsMU72tarrGwfEe2SsmNy5Qv92h9vCtq7yVuVL339A",
  "key35": "2uGpmcrE5HCGUm9U2L4qb5oq3kqR25efvw5D8XLjgqWCo6UHXwjaHC5vQW6Q154XguSPuTAa4Zg1GCb4YzZAZsUX",
  "key36": "3ir9RDrohzuZ29ogEaHD8kjQ7Puth6nv7ekd6drdhAw1QwLqfCQK2Uri6E8Xw1cGBJxTnjGDNWhB5HewrwXwLpod",
  "key37": "2idpx7Yg5CqVqdTpz7Y24BgK2Sa2Asin1uXWFeiM7hW7eMjgtqTXjCi1bSfgsRkcULNVa3g1ULnr6HXGqznEKyRK",
  "key38": "67pR3Vt3SZaQzqGWfrGDYLKyojzrLt2y6QsuLc5QfeyxhspUj9o6jJrd5Hjsr16Hb3ywJwLoVkbyd6gJdCrFE2Su",
  "key39": "kKGgHTsm6nvs3Yv2QSUV5Js77qydq2Cv9ttjZ3JmKMR7hc4ejpVc7usG8BmL8eWfdvMRuFD1j6fMkvrg2oCWKiK",
  "key40": "5w9xYnMbTEipfT1Xut1U2RvH53wsAB3Cd3UACqighfdeqBxkT5GWL7WvUo783YD7XSuhTuZDMiACbZnDKgUKP4wj"
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
