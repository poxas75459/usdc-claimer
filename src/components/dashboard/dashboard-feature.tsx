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
    "4fNnCkb4mHARYErbGwAbi5vWxcppGh349RS3nLct1xr3H2gfdruHBNpDKuWY14LLyQoSYuQS9hHhMR1S59NcNVJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XP3QaMGDvWwvwk1HoyKeYTFjQj9DGJvzyrzXAZ9AFKCBK8bkuSNP4LzdYUhfE1cg9sZiutnFeQkFsh22NCL2nni",
  "key1": "5BMo5ifF77xDvrZ3sQRTao7VhAUQHFz4tZnL9J6XC2hmJWc1oFzEefoshU7McSxhtZBxMjoQqBcXMgiHXjA7Kocy",
  "key2": "3YNqfwJtL4dxqfi4gPKq87kP4uT9hRyCfA9Rs7HHGtUUHTF7xA8qe5k2kki6B6jALDRaAAkJEjerufx5gGbsM2Q7",
  "key3": "c6hbN416pzStbohKxrC1jpDopvj1LSZpezMZRJvob6jhjor7XhdL5RrQeUFkxpAnKeEDiB5cs3MJ2fJna8UvREo",
  "key4": "46yosNYhJSD3MKWDBHUKKDZXGwNDm1hYXVo6edsW2TgcGJ91nFes9vnVWdnmbLsguZ2UzdebAzsTCVXZhWkKX2Cz",
  "key5": "4JQgm2m2Am5Thdcen8RRnb6mriepQMF61MuXr7HePbYdFaUou2AND18JAK3dniCabaoBEEt8C9SkNpMYGQ9LZpdg",
  "key6": "4LNTcrLBJi5JWk48FpGUsYxMKvYVfEtPLoPyZFUNdFghX8N9xFANZ3C1SppEBt83hFFvrxFP3q2G2ey9NgXLtiDo",
  "key7": "5rH5pGkAbQokEURJVRwFQiLSESjRN7WBw3Nn9p2bUuHH2QZanx8PGUpmzQpjpCaNU1kRyqXacbJshzrWF1ZWWYda",
  "key8": "3A73Q3YqrV8Cw7qq7y4XfYRowk19SB8v1c9wCkD4CP1YTPXehR2tEigcnzZ5XYxixxdFWdWacGpt5vrVB73zi1dF",
  "key9": "2JNTSk78GEG1Y7HDz1HmXYwL4oZH29TPo7fXJ2dGJTJm3WFh2duhrWQEL865y8SWsuUWoc7X5RgB2PRKvA6Lih92",
  "key10": "36WAGRCwd6mPpJSbtsZhCuK167jjx431kjts4e3wBS6BMHqawmC2A2n6rotUkeQppSUtqdjNT7kBDLMJUBPofuju",
  "key11": "4vaBrxGNWNkQNRp72Z2EpUUJHLk9UHn31mxxyeEM7Jnz5wqAEHXduv3NWDAcngJ8DCYrTK9KxnDhtBpnANQxcnNE",
  "key12": "36KtzNjTz2CBrSXFKyziwJzx9RrR3wjxjPFJa5Wb1im1bzqJSMGk1H7Y73RLeWbCovW9Sp8zwjN6mVFHB9VkvNd2",
  "key13": "2hQYPaMyqYFTi79DkZ4BC9vpuBh8di6NPVxRsT9GuB3QvVADe1CFMkLqwG3sdL1yCin2oVvBo9Zi83KxfQdu9pWL",
  "key14": "4Eq4WXpn1QUXm3H9jiZKSX8byvDvTyWTHwAytbY866LgtF1gZCZFsXhe3Hz8VYHPGVYBwZJvQ2LDMHHe1ppLNNMb",
  "key15": "3qRNyWNfufa8aYWLLguFUieYrHxqyguGy43ngDxcfL6BYpsnrv9HYScudB98PZspmV92evMmBVFrX7VFv4gLWM6m",
  "key16": "5mUiqHCeo4fNig1sNqxZJDXW8fFCi1EPBPVQ47ZSEufEMcBVLx62WNxznSox2jjJfVqvqhqsrRhSpKLjZ9k67x22",
  "key17": "znjS6NFgCbHw5mMpmfEq1i2ZxzG622WK9mem2zAwp9rRnorNWxa1DoinBtZzNMD3sHThjLH9FX8SoRaBDcGHgys",
  "key18": "492u4cFzu3zj1Syb8uVEdgWYf3ic9mGisPFo1FzxVsAJ3Vfv1Fr9bwp4pJwkv8twVVw599Up1c3bs4fLvv5naRRy",
  "key19": "5wftrxWmNPDgSPy94mRpoVZ5PXi54m6wGfFLmZzp3GxGrsKcch8omVQT5CL4jgrSz24YoNNkyDHFvLjaQ5zFKzqW",
  "key20": "D2gnzVi6U6Pw3dyAEBqQwjf41cHskgJqxj4oWqSwF6CqLDnmU6x7BsjAV456ibFVcLb6EA8bpA72K9KVRvyGe9h",
  "key21": "5YVTUb8vgcy5oD4xvzHjZ4VDdaaAXf6hkeLr91yzngNDk8T1dkPz7CYZLNqxSVL5rBgQRQ5KRZ1NodEY1QPJpCM5",
  "key22": "5gQuXK8Siy7BJdh1CYxmAtst92D3ymzeMqT1MuF6DS7S7SX5zgEKhwprwEHcMBCrtcRPvnsPrjX8mfp8aCFMEUTV",
  "key23": "5E68sF6dYbN2UWwVfULo7EupkhBBFvnTYKXQQ6Q8EJUkWq9PbPdSsyDLQJMhgJCGxJWxXa5zh5Zd3HN1CXrs2W61",
  "key24": "tYVTsWM8PbDXaqQC3iMWwJHCseU4SK4PkE9LQNQmtFhGtNjP8RAVSTphrKKt4KTHPThaXrSq1bAiZUMq8VUkEze",
  "key25": "4pUZ4vZjsWqtfWof6ApsNvikd6dYqWQeXbQYxpbrpuAnaDaVy2T78D9tXEMhw8pZBkD8ZrNS6ZxEc1kFGepDg9VR",
  "key26": "5AeFi5MeFEnGzZne9dm3ntbYcNb2XPSJCntYihm8pZgKZykZzf7eKKPTa6YzdKzmTYnm4CMHQqJ5gLQDBevy1pMh",
  "key27": "32qcWdLomMVMMZk1GYTTCk2V6nFFaFvrfWYrwwF1TgWxE6uUqx41TS4NNFScJPeFsTDQgAP34roUkpNBtvgs8gkB",
  "key28": "su71Kt7LjtTcPEdGvxa858t2nhphT9Lhgdnbfmz72URWQobR7moevJHwk2gLivzbaDgPZ29CdoKykrrFVZY7yWb",
  "key29": "5VtDRUyXDXnJLgZZ8L6QWUDNkmoNX83MpY9ziwhjmLpKJhxVYdDMsFj3Ya2rgE2VTSbUKZiFbDx44kP25bZkpNmu",
  "key30": "5m8Ho12h6Ayx7N3BFzzwiX6okmcmBsTw7eXFfk3mPMrnrvDx4c5sCP7EW89n5uD1DFsc2Gcjk6SDsgh5rtF62JHL",
  "key31": "3soVo1UnuhbxkrYnK54t4oTL21LEc4Q3y1QM6CPphvqdXwPiuMwFefxs6dbsCwNFwAwz1CFv2Xcu8ZDWXp8U6MSh",
  "key32": "5Ptu3UHEftVx6R82cFrJtemyg3DB1tvVEjbVUKJN4MoHhLyphd924pCZ9sdZy93vF2afH2VnyCTH6nbs3MsnQcvV",
  "key33": "2ELUQGMfZJf9muxV6oWP3yU4bjg5Zn1h1w9UBw4cpATNj39PqVQmQzJ28m7cLztbCb2BAkuPF9qpnPg5jHHu5Nm3",
  "key34": "4XDuD2JLBBgg2knZabiKF9rqWgdCoEXtAVQgyZYjpLP5YbJJze7bxooQHtxBWiZADayGePsNQkJwsHWSCYKD26bv",
  "key35": "3Sf2YBZoRhid9e9cRBEP3KoHaPNKtXnxcsYR2sqsP5NCjMqs1BaBYvFQwNGotFCeZhVS6BCJNjYNUiPVkVtk8WZX",
  "key36": "4BdmhV3y6NtsyfVmcVLT6NL72VLWERQS7ndbmeN1Nk1dhQepJSPBgwzUkuXvVTK7oYFjiyUD6RWDkfcYV4EtjsAE",
  "key37": "bJXTAxbC7Z5s9pQR8FNFcjr2RfQvda1joKQGc74qLK3aazq7Yy8eWbLocZkacu7MvfVRYS1Q8bZahdkKpCvt9ta",
  "key38": "53oiMNnYY3DUzuT89WTL89vsRiRCxCRwETWoiKPvx7QkEBi5whEevBYEX2bX6bDzVp3jM19oXGEXhSpGyvxKwxX9",
  "key39": "8n3fgV8rFqKyjSeBeP7YfVSuoVDrKecxBspjuuKmjnddtYWEANZhk2x1HDxePsUDN9ikhmdKyjiKRN2htdnQnxL",
  "key40": "33biiAkMG7VrAbCuSXSyMTvvVRuyqmfyuNF6C7QGHz92ZgcbgZDmtBsvJcVhqZGpWqrxyAdNuBKBmREGZBBManYP",
  "key41": "6TLFAr4RZkf2dh3hRW18dn6i7Arfjob3CUYHudn6EwSbU1bFRMAvYpErxZFY7K9Qaxsr3H3Jgo5TxgMwwsKbFFv",
  "key42": "3z5UHg3Nuiqfw8gu4m1iPFFw9X5cHAauE7cU1DKMwPbLW2sy4P4hqUkSCMFmMAjCGNHKM7c2ymBbwpxZUVwaZ4at",
  "key43": "5zdHhU1UM8DkYSmJvNcq97aLm68FvXoM9zmnCq3XvwXM1DoMkEcw3hJzfQQQPep9PQuTP2qwhjoBZWGo9bdK49bK",
  "key44": "5HUDogmBJduhB6Br8FFv9pGpDe4hV7Q63SuWTBL34jiMBYsonGPH9Z6hAA4xrTw2qRmqonRvphD9z9zva3nfeoH6",
  "key45": "4R5xffKGgZU4Va2QoYxJFX9eXyjMxMf3BSi1p4zVf2q3iENJ1hPw4DRai7SSLpxSPpkEfoh1wxUZRX6BbBggnMgq",
  "key46": "3TCuRTdjr5Fn2AqTwSEzoGjF3E9LFuhx913Lc9ZAyxn6P6bTSjSJH6GxxwdM8HBkyif6YHPXwpaczeBABwk5dMHW",
  "key47": "4S6C24YhrdT4kXJ4MzFVoxsKp5rprbwwZtHwikPUJsjZcF8Va3ZVU1i1CahXsDz2nmWA7LEY6LbtrUnsxcQjRzPA",
  "key48": "4Ws2FJVyrMBbbXWbY9zsPeH4LkPiGLXLs1u6GxhXyRgZjeUjKpLr2n1ny3qugLyqRkqEjdmCy87bLUXekgUshdkB"
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
