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
    "64KRNzpv5C6cyXo4S6CrnkPesyzaNQsgoVHWthALFqGYCeQn1GoxNrEaw9Kf8hg6Q9NQt9zMb9qcc7wd5b1aRepq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U88tzzEFqMTD7REKhbUe2rh63TUVeUgauakZ9oYfzADMiobDVhnqwmPi2LjG1mysAiXoRYJHeKHKPH2p6sUeWy9",
  "key1": "5nKEpCbWgNXLUWwH8CaS8iGVvhCgznivV4xBEEXpjAmpG4RG8p5Bw8DBrFwCdanYrFK4GVP7UuwfEKrWxk9wsZYC",
  "key2": "MFfGLaix55t5yMZ12mAZJKcj3xjVUeP3ehs5ZfcVUK2SkkPPiNKYBcLUdDe6Xg6mfKry55zFpYNqr42sQktBPj6",
  "key3": "2RT2zKRJUd8noi28xPHqGM2xV5ar9PN1MrsYA87SbonNkH5PbFNKCkuCXWmqR2Q9B8UZYM8iGBQ3hA7aANX8JqHr",
  "key4": "myFSuu69xPiufPhSeRbZfF1FjGrZHtYqtuHvqaY8Q2c6H7H9xZiLZ6fnaBgnAJofAPNJ1inDrqezpfAVqtbsVcZ",
  "key5": "5xzseBYBWG9L3ZoXuDCfhpREzWjYy6XUmYrThbDezZ3Vfuck3nHCHahZnNuZzssYdL8cMrHKk1i3t1QiA7NVXvYC",
  "key6": "27BP6RwGQyeJ6DRNCS4bruDoNAJe1zLT9wjqJWdi4dUi43B6ZNrrSz4e8STxTZo8mhJchAEPyUrYFScuuegmiQPu",
  "key7": "4n2R2rZzGuSCjQ72pT8Loa1HYmcUPVC2aEiJ573wAdfp6AUyTgPLf9LKVqZc9FaweqfTufCgcuGHfbiCf6HvM3Kp",
  "key8": "31c2ujG8SZ38putDtXLNxsraUZU1q9TMn4bDzgNJP8WhZSoAJPC2tM1FC2x38Uab7dkTz95dkvStm1DNk6FdbKdp",
  "key9": "CuDAAhvST183KS3XMjfHDR4WFZCVQNTLyHi7rQEpf9k7XWbmN3Ldf26iUkLd4wa5Ei9hw8oqYyCpZnXrGkrJWiT",
  "key10": "2NJKANrXt1q6gRNm1yZer5vuCa8wKzApUc11xSA8yWQBiWeRxWn8ndbMxYWg1qZu6Eh8tvUMB8X6sEGr1mS8v7pa",
  "key11": "2trZBRVRq6CiP9EQd5rksrhYzEJ5xENukUqTDUdsnW9Ww2vUH2BYwhoybLoCzMzPBfKLetUDWedEK7Tgz8aUiN2b",
  "key12": "igh61Df13f3hNsGj4V3gRMHFrvQwJZU7uLHqpF2tjrG2gQ6TZQQDJGrKKkLG4WeQ47yXMKeQse81JJrSW7wrKMu",
  "key13": "51ZKrPdgx6eEk84oNUGQahoYDPZcU3omhx5XVZd7wULsVajgDfnP1rfuxQuvv5z3MHShgy7QvKgjxRhvgr2CnyPg",
  "key14": "2MPugeyppnrsGdB88rgksmhTGcMx2q4FHwBgo17M2keBWAWrGCVpEHrAEUWtmkvVaCEr6LnvTkK7Hq7qcmzV5rD",
  "key15": "RExGsg2UJvx46JNQYQ3NAeN4j2yDN7a1VHb6cYpWQLQmbVBtr21JBwh2kvjZ6g18XkaKEpXLdhqx6XWMxVQH46x",
  "key16": "45LicwcFtgu43pSyCgVmqKUAvdeC7KLHyhM3Q95d1mF61zbuVguca7HwiRSGceJfeTWXvP4bcpZt53PmjXYPig1h",
  "key17": "5reaZKZUkDNThhu9twQkhbStHxp2GqnNd2N1h2MjnUdf4nniZJaPtS5h7sGnmQNfCftRj47wi6d3FW42wF4twvJD",
  "key18": "3xRy3RgxEkWhQesMRHBooggJVq5KyctdPBb1aVcx4ymsLZBgjDP51Upcpp9pp51C7JwwDd3JKte25XUEn3ThKwjK",
  "key19": "26ahjAc3JGQkBA2yp71378vZgkf6UNDGEVApApP729uz2ifuN3uiFxgiP5mrHihYPbEKnGsuhExVdkbv9Xfka5kd",
  "key20": "3Zh4y2t5iJSne1312rGtw6MbhByLgKaMiajZUP1ALREDaQUmvmc9UgJcv1T5hoR1ueT4K6zBncaJqFEcK6Ki83T2",
  "key21": "5c3PcqqyxUJCuZU6KV3fhsPNg6pRRGRUcN9ytw1MJ3ohKWhk6EHgW5BcdSTgHbivhG8ZiweA1ywAikCBdugM5Kh9",
  "key22": "SH4xQi1xHiyCnkEoEMsHPMziRzHSThZZ3TV7LqMe6oLkEbVG3979hG6g97P1BmMoK63y5mWoLsJkPb933rtSxb7",
  "key23": "3U6rXvm3sZLoq6FHsAAxCFg8ZCoxr18hPuvQsgMnrKPmmTWQQrRRzDhdddoTKDP5LACs1rcxmo1wzsUGxbH8sK2c",
  "key24": "4g8Cu7ziEi16aFrwrfpc2D3YSafK7bUsfGxtX6ax6gdDjaGJhchPko4idYCFnSL6ZY2DL29KVrY4aXFzH5N8VysJ",
  "key25": "213EvrtvmQMmn9Zejq1haxv1HD1HH8ukWZs3cSNDeZbQYg2bPe7jTpvRAJtkq1e5wRDLknHLbeWJAgkG7Cfz45MJ",
  "key26": "2SZ53pdbj73DVd7cEEij9A5rNevZssQjzP4sJ4s5uVtHAjTZtgPQH4ehx941nEpuXkwXk99frczPqdBWydEo7PtK",
  "key27": "3nenyLc3FD6fdTTnkNwWP5AR2hTQoYZUQtnT1J6VeVaqgTf2YgvAK2DB7axwec2oZgeefE6L7pQEnrhxJEwnF9J2",
  "key28": "48qHDyKa6BZgN9iWiv5LtA7vkbYVKrUf49VefvwpHHzSRtq1sDj7EZoMhMfhJCP3xMWhNFKFw2ny9gGJL4bufHTm",
  "key29": "53oAPPqYfLKDELoV1AqZaMAQzjMqhxP1sTsBevRqDpNoWJFUUWeaRVH7Lb5ZNvUQSSNQsywd41FiYtq5uboDGNJw",
  "key30": "9NcrrSDVJU4bKFy8fXBra6uoR861F1ZFW9Lug9WyMfCByqb8vz4f1YFaEKLab159myfrE1RfswbPt37AoF4e4uH",
  "key31": "32bjUdxSdAwoQh1dPp3fCPBoho215FyW9Hc8HYFducZWdBs3TXcWAprJ2SCCbWYSL4iCKuupULbCbBQLFBBFeHve",
  "key32": "5pX2N9fzP93a4qMVsDobKNRDk2WUe6WvFz6PrCMkyDoSCY84kW2uyog33qkoxnF2YM1ucYzMWNxv8m7GrGTuxaJF",
  "key33": "2MRJp6VgbiSwh2sSYjVgjA4kTP7Drrruwe9nJgzaG5825Vmogkgs4mTZjGEvuMtBPmboK51p5NNVLiHEnvns3s3Y",
  "key34": "5mAi9XVVa8wfJfK9SRUxpzMmSrKmpNVR336qd4sZ6GoqWGaXNQW7gTztFsX5sTH34vtAadHk19qtwG7hGuWEou5F",
  "key35": "2K7AAfsA7v3EnQGb6xAFUQLfYYyzBfwtwaNJZKyAnSTa2eXYrSWLVnmgoxc6g1NDigXe8xWByPAPE4xA6iahWkT8",
  "key36": "5Jfg1UZ8nfU393LH7jS7Tgv1WVGsrfeRFs6izACcJgt6c3ejLZYvhisUPhM5jLnJrKdDGnXghKW28GftWW5wbqoW",
  "key37": "3DDTUUT11G2Ka6zQwd85bSTM8b6hZJTA6EFcYCaeir2VkRhG13EoxThhmivPzF33GhjP6zFQKbsw6Nz4UEh2yR8x",
  "key38": "woVdfxoYg9MTR4f3k951UCpYmRajV2ktSQpmnGko1yWeRv7wSkeYMuFGdYhqBjieoE8J66ryL75DQjhN4LFbJax",
  "key39": "2U5F288an4de2fwunf7JHcstU7eYo3XzeZyL72x9oKF2ZmgVf5PkcxGKkqss95eNnyFXSUTHfjf669m6A5PwqrTM",
  "key40": "2dwWUzqheftwhkrqqRmeGpJHSgfCZ1vhPCYte2ygeutPqPTBwA14thok8aAnPFXeGmEd6SDM2faisHPkHMUTHFTm",
  "key41": "58QteErNtH8SdebpvAUk16dudzBLYr1a2PqMJRATspmMen4Jfi4LMvke7bc6yT9enSj1SSej5raP9bCXoKKnSdbB"
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
