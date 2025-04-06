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
    "2rbUXiojqk5uXyAsWwAyB7wEGutxNJHVzYWgCSn4zR8gvSRVe7vhgtWWf72y4pFTV7899z1LoApXR9eYjuYSua13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2My6Kk2m75pkBsG3E1ZriwtNMqTrWvwUJU4JwxFFb3S4cDNMgWMLwqnMNd3JtJRisF1Y85kF7dwt92gn7p9esA",
  "key1": "4Yt95RcEfFMUPVj5DuBisg8NKdkZxGStY71KZT22XeWqKrfKadWwWncd7rwCwoSY9tE3v4cvjZBPyKTreTgfbVeu",
  "key2": "5L1M18xabF6aFwDD5V375HiKNgEhGFHWHxcZ4MCVsRNij1cZhZ1JdRoY7MS8cNgcB7FXrcxSyFtFueEAL99Bzoep",
  "key3": "2EqmCTNsvfLxGX19qXzDFztvQ7p4mU9fuZNU9ggtFBWJSUVx53zyPmACrjjfFbSz71SGHR1wdWNroQCxZdppgt7Z",
  "key4": "4g6APUoVGJfoRycfYegYKZUohSjtgcDGNA4SuNxMGwyUaHvFDpkEe12Y5PbTwpPES5VJRzyj5p2Y9nKinU5UDQ9b",
  "key5": "4sqFx42r81Bxc9NRHucocYexoMawVCAZCz3VGxLo7eXKRrhF7g6APbRWz88ELwPXimaq3d3AXSyVqLm8d6refB6o",
  "key6": "31iVKv4Zssq5fAhdnZA5KB4byRPg2pm5XLQZaY78tb52JnJWqUEWYYVcGWr8HatiQ9joyHAFscKXcPsbF2sTYpaW",
  "key7": "WZepMVVDJGoKK6DWxiFLk12odJmEUVbEoAyoe6zMi97vaTkZb6kXUu9baTetwkdEaVis1joHsUrDGR4ozWd4cXq",
  "key8": "5HiSyjwYXQmkQ6oynMZGv4WSBETXsSehkTMrmgUeYxrYoKRHf66fA1WwASavaQx3VxHsYqPEj8tKqpuxuogDjjfR",
  "key9": "5ADeLrrN7JALfBhjZ11K7doHrkvRXoPvV2Ny1hxzaKHdkwZhATVzaxtyBiayL8QuQDTwc89QEBjxCeJRDy8AiGJD",
  "key10": "5F3ETmQaLe56QN636HLgLYG1tuU2cgYWik99H54e3KLP4pWkJzF38sfxuHdWv5WHXJcyhzSFX4i3dzXxUcxmj94R",
  "key11": "FEssM6qpgEfMAymrg6GheBqrhv7fbXj4uqSd6YUY2psb18a4uEnE256BaD9XhhZJtPmbcq21Vta36kssXEq3MBr",
  "key12": "muWVyEYXx1gZeFuUPFyHPFaD1hNYkQUNP7u29g7s8vcTKSTfHt17VWkQgnBUJDr6S7EovwtrrBE2mwVuyMwgLpi",
  "key13": "2FXdbPHXS37VX8xGvRe1V7bzqpgZbPsvqxBrDG3pfWDbN4E1gKgZm4Fo8W8UTg5GrXgRLn1w8RnnZM9AJ9oq28Da",
  "key14": "3NeRwW9CToHtMhBi9DpsE8S8BhwZXnwYKDum6QMmss7dKScCUXhjoi2Mvq3R4DGEtWHoc8usFfrVqorXtLdjWbp2",
  "key15": "WwYtEy7xXqpZGTajFsLPXkcRYD4m2dedYQBwdVd7Ym5ChCYAJ8hrL4RW2bvtnoBpeX4CHgiNzk4irEwTwdm1z3H",
  "key16": "4kDTiW87qJxGJeraxTEYw7k7aWknwKFBBTKwjT19Vcvt17XXn4obeMDTbNSCwETmpQHzFyDY2QkAM1PJkPteAJQF",
  "key17": "WuXVrmCmjwDRDsLdys4h3M5Dbu4mMJ9gXzuoxrM6atqwnUBLipsbMKvo1ME9gK81YdKzZYpnQg2ZQfnx4eg9Pfi",
  "key18": "57uz4bo1K2Bvwtc6Bay8QVS2FTX61zwCZhYiDHPQVeo9vLEJLVEG2k3BRoin1P5wYjSajYFfpeRh7nwft5wTHq2e",
  "key19": "4sHwMp2wrKqJ2PafDTdGmJhaeo2Ntxo2EJyKCZU2NTVr7tgg4tESRJ3mo9QUhRZ5QL7uuSVDcPZ9Ap7XSnXFxd8j",
  "key20": "4YYG4GgHbRrSZyuWszhZvSCn71tjMB8dppPboh9tM8KF43tpk6z2FFB65ZwmLvN5YYgvrwyAsQqjo1tdHJk2bK62",
  "key21": "4NqFRVmwnRiQnmKHr5VdLJmFdvBrSvgXrdZ8R153DLVip7jfvnkH9Did7c1WuHaETvPTmizz5jySg9CjWqoL1yiE",
  "key22": "3ScMKQa6t8SsTBWXfXGfJVaEvSUscyJwaEyck5WTavLoViTc8WUWiXSTAE2k1zM2kJXpPWFh1eUq4r4ZxgfjsHm2",
  "key23": "2K9TRqG9Y66kAjHFPG6WTZwbKv7tWjpUMCkdrXr3Kdrn2SZL1Zo1ozhwoyR2qngo42iXPTZiz5foRi6m8d8ww4zv",
  "key24": "2EurazKmf4B4jLedkYigossmhpA6pWacWR3hxzPYAyEfauQFsd3xLtTk2dMARKHi8spRAsd2Z8om95hffNZWZQR6",
  "key25": "4go4oKmn3b5JQxDJ7qbzKMEguPuosYNSQqxZfH1zzf26QuGhZE69Nq6Wf6ExS7jnhBEWBkku8omWN2Cma7qFpnnh",
  "key26": "Wj2ckzyU63L1GcmY6DwVDr8mBVULMFyrVyt8tQyuKX7tc9rVDqiKxEf1cH5EvsAg8398Uvx9v14NNtFeWRYjTas",
  "key27": "2TxG5LZr1WSBpN7EJDPqmLGGmScE15Z9vjwa8v24gJYpAyZtaTpzuJcLeDBpahohwrjkaHkN1q4CY5XRaGNYqwe7",
  "key28": "dhSag7cW8rBXYCqWgeHX68ucALgo7LJ9Hiz4udQqTeCpc2pcAag3o15buRQRExeb3F8omgS1M7HqeuE55g5H4SZ",
  "key29": "3rp4N7vnyiPaFcGc6Low6YwDzSGg73eaD3TgCnTos6Hs8eRsySNHznvu6rF65KRaxYoqVjciMz7qsR6iEgoS6eNq",
  "key30": "5x7ZrP1dCBD2Ri5873vPnRpGCoJS1zodyXR6PHmMJqsNLAxG8HePVUta3UZvSKPEZ87FdzQYeVyZgtZGsLxZvu5g",
  "key31": "24qaWEVTNSqPwW9kHjY14Q3ij82GTQ15t2EbcUsLiQHqbWD1TwM8a6qzck1wEPTmzCkT3YwrjM9g1seHSozvdKjN",
  "key32": "4Mhs6VgtHmsxE9gER1ukm68ahptV66RyHszd9k65ZuTkC1LjJaZSXC8fkrfEjuFbUsMHjbnxm9XWxJzNAfyPMcFZ",
  "key33": "4nWd4bVVmi51pqTcZ6HR6w9RokA8jzRUvQe91o7aSKkxfjJPNtmhEquLUok9RuMKJTHVgQ3xwKJFA4Xq81Z8ZJeB",
  "key34": "3gp9MikFzsxeBTbnfYv81K14KCupkmL7Lt63q8FStYdMwBWGLuNnGAa4dG3Dwa2bVpZcxPnNWWa3mgPayTmNQzTv",
  "key35": "5U9K7c4i7HeD4133dtpAUnhuGjo23kSnyhBevxh492hHhF8Am1ntE7gR4sUgcpW8QZqNfAY9HEeRKt4dpnPXtfVM",
  "key36": "4jmFjMPMwh4NiES9HjnBWHbLmJ79FqBNEJqcd9JAdoLT9KMchWECGSd6XCzVtc63pa38avxzEStKZfK5qQt2Skw2",
  "key37": "3tttNupsCVofpbaFHsKCVCH6ZjDdFZY7aqBeWvpT1higphkyHcrR3BNbtTG8NiA6MGQ2HYy7busd7zkkadH6o4Zm",
  "key38": "3yjAWZS7KWhia6uCXxUE5Nxxm2uFuLLMkoqM8nEWEMU9AfRTtjexfi5Fz6WT3H1neZMUtzYWAhxCtppqbrXStmtc",
  "key39": "azqA2JmXeZ9fC1GYBkpBVRN52wqTUYzFq4sgYaqeomNpnHStRe4Mp4kkj1wfenu71trz3SMetAp4dyZyqgkLYdq",
  "key40": "5fG58BkT9212UeeF55iMhgSKeZcCjaXB2JYoHjQkELRL2x1kzrGVARWVasyUhbqiLc8aVhcbgGvSzB4WQGXioxr2",
  "key41": "5qKswJ3SV1M4u1kiLroRffEBavjEDojhGPakytDb84bwdT2YtdfpBVRbxHD5h75JkFMCvgmmex3NxBQr4dT6btQu",
  "key42": "5o4n7hwEMrPAGeC8bWQFBtaZGxrwJuTNhtZoykWWXrYNd2SxvbVUSTdvr6inqmzbES1BqYRMLea98jKj5YtW5uDG",
  "key43": "pHAUGu6tmBgNJNda2GN4AfR3cw75saSpbGEnrP4535Kb33ZHZcPhsm2qQygCeuvHBr5V9ChKnFffcbCNCyBovUi",
  "key44": "XmRGKeqNh6XRMcdPFNyGKGYK2pauhpVy2cM3LrVh4ZwjHBe6fb6DXMo59BmqCTAvsN8MDrJJ2DPcHVe6s2JmVT7",
  "key45": "2CUx5ggRw6vhUn7Ped3FsDp1RRVmkYsLXZ1Gw5pbPhVmLjxJY949ProwtScpzovVGzn2z7pXnU76bUMFuXfHctk",
  "key46": "4xxU18G75ZPgfdiSEDXarXtXTsuBujtCSDZ2By9YaML8NPrYBkJhAbGJLfxpxAzhYBcVpwL6EmobDAb4bH6cGWKj",
  "key47": "4Gdu1mCcSxCiAJmnzgvtctjSTFvnTzioFz5uoxSpsgNgHa4HeeSmiqyJbe5yzV6C5ovL3p8ffVbmCd1zF1sZjv2d",
  "key48": "3XpHzGzrQL8kSRmqsF1tpg3uwhym1p2cYEWd2bLiAya7XX5YaPeDQDGPvXDL7XJU1NxAke9cvN37mKuMZGZAi7bJ",
  "key49": "RynYzprx7Mt74678syaCgRFrZSk7JwRwG4jTfhsbAc4QwSfeBMwRX7W6XqwDajMMAkLAcrbAHggv5ykckfh2Cdj"
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
