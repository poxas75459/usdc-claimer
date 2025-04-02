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
    "4fzU1h9DW1jhft2ipbjPWWzbgj8Pwo3pAXWxjbhvYCHACRrXn6iNEEq4D6cvnqumCGpAzaKBSCgenMCd4tq1nEKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xvRcGZbcQ1qk6CZZhGMLv2DRaL488CJbuiErxzWnMqenj9qBZwHBTmkPoUqZmNMgcc8AXM5BhShEYTyyS6QNCjN",
  "key1": "5BjJkQ7b1mWCFAoFnDDTxxa6kLyhRxQodfVaihPUA9L3WDXgntQbgj42w7foPkN38Tm9rye7X6wpmknMtBcqk8Xa",
  "key2": "2H87q1WvpZkQcfVJiLbzLDkqVbaZNV2xeivNCzrRr5muYFckrPCGSNXPEXT6vdaV6qsSFMceT6wgCWLDPCdxSj21",
  "key3": "5njb17pDZAhBibQDpZeafFSa3qEwAuU8uDZcBHZgKN7ezyy9JuUotZLhSLz2j2KmkCvDo3irJaMnLMBxyWJsJqPq",
  "key4": "4PauG8eBxgGMkrhcPVz8unBGf2ipZ5JskR6AmAW7TPh45EDYBs8x7dZ2GJWn6bzTsbcYD7tApr57AR6K5xAGUz1k",
  "key5": "4KvVQwihg2hetR1KFHveoYgXXarccUU1jtU5v3wTdqhVanNBpJA4WBSyZWiFy3EkZnFHPo5uLjSEpijdUmRodSXf",
  "key6": "2k72r1wNoccMY8rsir8ng9qe478iSdSkXhXQcyExXJNB74mNw3cD8uT6XZXutZinfEQkPU2EnixeNqmSt1YSiUSJ",
  "key7": "3ziAt687ppSXsah6v1TKmSbW7cvCKLwFojVWzFthi14uC5gJBmh61ZETCUXxjfWVTkrTn4MqVzUhMyFXG31CEgZe",
  "key8": "25FryZKm86ogDyY192iAsnjM2U12RCE2wc3JPJfeagSiXzLnSb4i6ucyAQPBP27haMowYQ5nNRFdH4VU3hTzs8Tr",
  "key9": "h6R71M52HghgxhUmc6rFbnChgiw2SawQEZzgbLCccvHGxdjQQZcrqKYXPWrojViTzSpdJi1EeHWTwY3VQJahvTb",
  "key10": "5Dz7yct4zjLYqsc4AHxx15D1vRN9XPNbG9HakmgESLVWoa6i2uiWzh7c7LBMXpkaMqyQooUokNfPXS3xweh86ZMH",
  "key11": "ATG3wrYfyhcaiT3G6thNixwkJCSW6h6rt6hwz5qmpjAuqz9vEUq8VSKtTjkLRPVpZBfoZzipoLx4s7jK1TUG9hx",
  "key12": "4RtKgBcc5VJ9GYBoyVZ1uwcq5VFzdDVF2kmLPvdStytSjM2iquyyf9cwGMosdFM4QYFNnpY4gbEQxJt6DqPsA3d7",
  "key13": "5Zu7UkTyQw8sivPiMPRVZj5BztEd8UmxKqRy7BWG56qV2Djik1XxVV4AsEwMaDD8VJnwTeazjvRa2P4K993cm8z1",
  "key14": "3m7pUGNMjAtaVBj2dAJENnhjnxsXDiYsco5efSXXZtdmZqGaVggbgobhxUEF98y4d1hAiBeoY8HFWoBdXtpbkBBs",
  "key15": "5hmBCM81sZoaeqrBRRq1McXHnD4UQv9zDyzFfqiocGAL36at5Vd4Bpz7m94n3rPjB4nNPZAyoXHXQhFpxqVtRAKi",
  "key16": "66UR3eijvDZeRLbSkwQVkHjrS4gnJZLGpLmaVzf7J7BvFpRUQC7mN1zwf4ZHgaXgwLa76HGBtadBGxPwX3g6MRzb",
  "key17": "2b2ihVkvoJQBwq7nqvVdRLBHQR6FoGK6EQNGwB4Fbop7VgEMJFxbzubXCFxNW6poShDRdVgcEiRLr9gPs7A7BkPH",
  "key18": "5oFigP3cbLNkwPa26jBTetFpzLFePJKPQkFKGZc7YpLjPJZzGLsAErySEW53dZrAo1oYrSr44EayXhwX2ZDtrfb7",
  "key19": "3RWVsqFytKrgiwewpemBgTKTuTDKqRcxQXXeudARFFMQuzeGxgTMvcF5UwN3Texz72SGRWX7JeY9M6Nhz6DgRHfR",
  "key20": "k1Z1avaR9vyrtSzUR16cd473MQd9wpuPSPmiMg9CTWx5Z99bezueR2nejvpZFmLfgvuzpj6Lis39L2Az2fZYtdC",
  "key21": "38nVw3piMyYMQJXW4cae2js4bBx7aCbXWz1cxV9B1G1acm5PWZiPsBAkCRcuvdsVvMPauRZw54TuH2hHfnXR4oT6",
  "key22": "gorZgixRzuHtSCW4VwMe9ycPHMm8zECetxZWqwz3uVGmSFgjT8eZxVX4wUNWDuzSLsdSfXXFgCd5k1FVbB87ubq",
  "key23": "PD9ynLnFgL7ZhyhMn5DoXC4NwsyjsvGms6q92KNfw5cYfdq2SkyieApADytARGLQ47ZDCv1jTKGeM1LHP9sqp4D",
  "key24": "5vabLpxtzdqDT8nUQNNYT4c5NBmg8hNNHggCfaUYC6rUCXHfzCkekZ8tVYZZ9Y7aZ6gKaAY8HFWJnDUy3NbGNRBa",
  "key25": "3BUbLTv1LszMy3tsXYqMRDf7mpWPE7HV9aRJGKDWYCJ5Sv5AwDfFuXtYrYMxHpDN6SsF5rqQuyFqqEyAGS64EjmF",
  "key26": "KFvffTcTKbesL1UqVc6ehDjGqyG7ncb73i7sgx1QhCrJG6wyNYQu8Rk74mh1imPhUTZmsNwcSpk66etJAH4q48o",
  "key27": "2cPtzkQQPqE8JVx9jZ38kbnoBMTURsNoK7kiY2wW9jxPrpnwuaWGN6TCpkbL4vnbDxEWVsZVRh5yRfG7NUD4hD2M",
  "key28": "5yD9LwQY9goHLKP5MFG4d5a3g56XkU4ecLW49Eg9dcUT3obakUvwKg3ShufXHFVi2bPS5Gp25AuyhD49gsA6t4Dk",
  "key29": "5asgC4xRgG7BV8dijSTd5wxyxVHcz8nqfKHJ4Qj5ZbwgKt89MWzyJX9qDPyRNxBgj8cNn191WbCt9gR3a1QnRiR2",
  "key30": "5hRDqXJE5QMNrbLNeMNvH59nVkpc9d14d6kHypUrzDEzsoQuq2Pd69b74CdgATfnFekRykSn7nzbvz4jWU9bS8tr",
  "key31": "41JEAzxMopCkZunzUVsR1NeV8imocXzbcSH6CUQobrcQQYGUarYg5kAujXeTJtGH7vu7BiJQL56gz4GKEwhhfWw9",
  "key32": "4AG1GamyRJsqLcB48jAupmh7KqjRbvnawdiUf9YEA3z4Uq2MhamkjJox2E6y5UTL2duF8EVePv9sw48irqUMnTe8",
  "key33": "4D2kNrLjEt7TH5nuEwQWieg3xk1RE1FGgV7onrHu4tomCuNLbNmUT9Ate7L2EEAEuUeBjiTf8AYE4wBhjHgFGYVq",
  "key34": "4ynjeoZ6yZvYk2jrJH6DAUaRqiL7n3FtzmV2gXgV97UpTGC2bm2kHCfm15wdFHzUDwSydDFyCcUcpP6bkPfxBWGF",
  "key35": "2GG1UxZph4QptsQrcRxXcR2bFzai1VRfsBopRhDbvJi4yp8X7nJKhT4zAmhy8gMUy5GuoMaqSB8ACGuDmBiXN4ZY",
  "key36": "rktHMpp6F2oMd5cmTzivUwa3AHtyvFfNCVTNzMagsGAyT7vAaWjVtc1gzP3PcKp5nizZzhvDHQTJcU6pC632gcz",
  "key37": "iB6MKDBJK4JUM38WyF6bzLyuCmvbraFasHQM7ysyrVWD65fUCmrZcUn19evGjoJfgx1zP9ME6Nxxfu6DBa2TGmL",
  "key38": "XwPzb8P7NUxeDmEEWAc6ZuR2RR1FRo22pzwiEus32FT2CR6NW7GuzrtF3FhyNKBy7LQyQGbQDsSjsrUrHKhhWPV",
  "key39": "3nRf9ttutfi4qAm5MwDHJcRUgrJo8nLvsm9ijQkBHfvVw3pSZsvCw2B2b2JsjUN63BwhVArQAuTh4LeT1QAFK5zs",
  "key40": "3o8WfzVPbmmdGuDuSxBKiKGMNWQFacS32swSYoGRdTLA1EgsMTeqyrxy4DSg9DQCKERuZnDs7U3D2fUabDkN4uDC",
  "key41": "37QjPsE89w8dZFTFQNzc6tLAVLY81FzyVEF5iWJ2aoWndhFwAbrP1geofdeAne41jXqKHFQYTQbRWPwEUUvvdkCx",
  "key42": "GRsEnDGfnUYmtiBvgDaRWxk5W6Cyrf7Jb5Wy6vFEVXViqRpJ43tYuGX4fAjK9CZvsXQmiZpaU12KQckbNbwnoob",
  "key43": "2VGYnhLFoRtnojnnXgFmdvtnChtjvPaNDWE8V9CDWcYQo4zFmorV5KGG9J2qYbLkrHNafcuRTHyNuwkrHiNhqQne",
  "key44": "5AfsqTFddAYM3Wgje1Ez8Xo54RVHhaiwRY2hnp6Hs3ZHfkdfsQsSn3vAFm3sPSXVapJ42B8m4LVf8RRpfbpkhJv4",
  "key45": "4jehrEQvX26p9mk4bdpMMfggSWxbhdwWduasNC2beeBJdyuj4cPwSn2d8yKDT76Y75U3hCb7fq7DW8438GvEhfUS",
  "key46": "5XF77E8VC1Tv55Tsz8uLG8StbDJ2XHwX7TMJiU7oeiztRyrM8YqGhp9jFco2UjiFyHz3c774eMNZcq2gWXxgKJ2s",
  "key47": "62J7K4a1jVRZf91KN6cdyUy7srusufDCeUSGCqivGvEVdc7fpu4EY92YVEJf6Ec1xmU7v1xew3KF5XWCFZ6utKiT"
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
