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
    "3S3aMrAbGm61QjXQCYCudJGzbTgXmATSi7zJsNLJ85kSjLgEkrLy7aF6gFPFJsEVXphDGbyajPwHo276JHm7UTY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v3ZnWWUYXnMHrpoNpL7PabpqSh1rWvgeuWj5RzKbebCJD3GR8s5yE4XS9JndoboNdWCY8DUtsKTewN6U3DGnF57",
  "key1": "5M4oCnoNwJbDCaFdwU2yiPGCnbXwbi3XyoK44J1PjUiFgpvdmzJAhbzwA4g7gQtTJVbEUpchSwEip6R1quYSXAEB",
  "key2": "9dmYv5YdVZudsYhqcG6KnBZBGWL7kY28QWX6hoNiC1h4EAdVLfEXN9Bn497zihLzkTRJRRj3UtLNiHM1cmiYcZF",
  "key3": "5HYxZpoeVN4DN5pxMbvzhTaxioXtCLrj2BsPVpTmTgFmtWHwKPHnf3dtcc18eoFcAkvsGw5pDjbFAx5GvhYS7ZMR",
  "key4": "4kD42ZYLgJnyuNV5iuiKXVLfYeLkNXwPGaYEpVmFNPeY9vePfUsoZTGbqs8Bgd8AUj5xv7JT6gkw7y8ff3Sf6YAM",
  "key5": "2vJgGaxRGPYWUzUfs1rJLWsLpnZ3SRbDg4dSY6BfTteq3cvRGLjdL8UhJ6EAnY45C58AfBUn1WqrRR6Q3tsMcAfS",
  "key6": "3Pc7ZW3gmqssBemij4cZc8yD86SL4DYcUXWFGjztuCDLaH5Zu79SJTdrSW28KckufvRb7fbwUb5EJEagxxP7Q5DN",
  "key7": "5eXeasUTaKDcD5xeaHMCLoq1XNk25aWsi9CFf7P6UbiMYNzpDP2sqrwRSTUkQ4HvmftN1Ajw4AC44ZcK1UAx5iEj",
  "key8": "5CE7MgAaxNEwC8GSUv46FJbj7nFHdKfgzDDqqjN1YSA5ahePWgUi4XHF38jJZcyErQvu4vmB32Ygnr6sWSLx9HrC",
  "key9": "2x2DThPrGydLZ2pGLFUAkr9zDgKuX81g24a8oZhpKTaqG8xa8sxE13FkQ6mGvntBWDWbYsiuMCR9ckdexsbUiydt",
  "key10": "5XMTJDjiTtBRBWgmLpUCEdW9yoNNeH1dYzSsJGEqWZJ8djP36Vik7DYofRd3izEeohH3yaZVbwSzK6T87YzvCeAj",
  "key11": "3XeDHCEBgBBKnHtQDHSkEsYpGBG1os83xXrBCh1AEuRDnhdVT1eqSyDNC4zS3sMHUQ7XUoX7WKn69yAMKmu6s3Fn",
  "key12": "3UMXY9c5AiwzPEoGFTBL4uNNRs5uwHBMYs34Q1wXsnpvHbB9Jc2YKLTkDjj6A5NAFYVRuU55nzfMJEZrX1Jqynvy",
  "key13": "T4BCc3NtXqLhS3S9542ZjYphfvnG3HLk43ysLZDJZkGJ3g2aeyyjNKn8t2oBezxHB78fdeXPsncs2NZYcUBNY2Q",
  "key14": "4q5XoLdLqjBnBdtXdbD9CfZNL2StTyxum1VGN8P9Ax4U3bVnddWgGkKwM9u3uPGCayisPxqpGT1wgvD9XWFfJmii",
  "key15": "4fojxVodJtf4MTnyBi7Nn6m65LKKW1RAUgqq8JzqgCcpMMz45SzBRDQ9Ss7YZD5duTvMLWqXdAT13YEynEMxpWDd",
  "key16": "2Bk4Pr7g6P3oXGdqdKdaCxX54W5XLFpLt3rVY93RHaYhatosmEbQ4TciJ4Tir4YBp5pUVPVmxa1mkeNeDftddyoJ",
  "key17": "3cW8FmQp2METyZSKdVvQsMaacSWtD3wGJUYkRdhQN2DWtQL9Q2ue5wNUJXgVafhBN8FeKDAzB9EcF1YgCY4fWKMR",
  "key18": "AVA8zafGAFGeqwzLg3vVSgKE6PyxbCkgK2oUgFsbgHXzDH8UhQYdQ9tegJbZGN2YpY5vnDg2DeesB9Nbd5829CP",
  "key19": "5NNmBo8fipFK6hmsUgL5DsZtygJgjCZ7HYWEwHt8fs3WostpGScT1kqQxe6iMFg3EgXy3DMf8sGB82Cy2RbQwbbS",
  "key20": "2n8AnFD7rhAXdALttMMfgxFRUTDZb5rkCzSdP4gZA5gVFxKdpN1Jog7wyHG6jWhnFSaDp5VrgS4FFReiaKPMz6sp",
  "key21": "3yoYgGvFoNKn9FvLRt31FFJUWZpoQHpqSVfP6bhqXD5xp8cAREdAXdqLkmvWC5Lj5rHGM6uwF8Gn6xRnaaJfkvPf",
  "key22": "cGBZ2TBvDmvZXvLo7GaPBVjBvZb28oAw1MdPnETHuPuVjMY52BdUU1joYYj8p3xCJs2MAdYiXkyu7yFjj8stjh4",
  "key23": "RVnK3dbRR4ZyzZcdNQtbtZLsws5szoJ6bcn27Vhr8wNFzyZVMcagb6BriEbzjtRhR4dor8fmh2P8BQUBLjJGtWF",
  "key24": "2TcWYh2yUnf8tsz4vsLXFYgynBGbaFDa564BGhuXbFVnumsLpqgws2ieG9okuarniEoZcVmPbqEhSeagrakdLqfB",
  "key25": "2Kw95XpNSRvEZDHAYsDdAoTRzBGPqz3yeBLTKcg831GFz6pHGoaVpgmRS5SMjEKcbAGShTahAAQUeYFqX12APtAJ",
  "key26": "VWJUduyZf8e6co4wXMFzZhKRRkEKy2E44vDr1uzxc5MXdY8prJvtTrwEHQGivar6hTyvPXbL2Fs3viFLqytWBLd",
  "key27": "5hHbfy1do4M8no3oHiXivRHJX6zQAxcDm4oZEubzUbL6TM7fHoRBEA2yG9P8smPm4tneAFFEB1LmESqHjbhp9H6Y",
  "key28": "2eANd5Yf83JT4M5WJoXyK5J8TSARqyNVhED78pThUnN4DrgqMGR8ZQk1j8TRgbbXaRXBeimWf3fwbL7i3yWqWx3N",
  "key29": "28dxy4qAciA9QFZDuWRWKnBkbSU1hfNAzZuPTKyx7nGDCtD8nk2BiY4BHSY8HN7Gc93C8qdqMJWRukhywGRwJZnh",
  "key30": "4x2tiJM5TwgMdcWwRYqUjcWsvvyGatHrGbR49ffxUVTArTaP2zHaQ1o4ZhzyZRNqVkA3c7yfkJEBrJBeEpehkaxt",
  "key31": "126bYQn4cdhjaQqQ5yeNmsk79wHbWzaeGjdWrXDmRhr5CNE9D3sLqG89TbxNABm1pjLyVAS7nT2WmQaARzRfQioE",
  "key32": "2pdEFnnh276fQ7itUB7pZTbK9wkkgeCvFTuaZkT98TDpo5ydrmjaJB51SYbncpmRZq69n4msbis2mMZZn9oSynnP",
  "key33": "4Ke3H6XsCwhiToBu9Bd4FAdmBWUqT32GNCiz2UtimYTroM5pb71EKyDuB1gsgUwfw8eYm3sLQSiPqetNszWVoRui",
  "key34": "3qu3iUcZ7hhZEXubtGrzTZ6ZjSFenAcoTyquFTcMX1ZVBSV9y2f2JozvCJyosFX1QFp5BX54NyQH3kmsFBi6FF5B",
  "key35": "2MiTvruvXT48iRwoA5N8GCSvENHFA4NJyQkG3NmAjiKQ7prsmUajQpsE5wyuyMt8uGmbEGQj8ayxunombssFhExG",
  "key36": "3mnRc7A2NjR9XYuC4qA65TyPkjZisjPZ3zxTh3Yc1UE3DR64oK4EFrz7K6usvz1uhUtyFPmi3VAmeUJxSd43tHwc",
  "key37": "4uw8dvJaQpZXNKdagjFrB8kS99tyQmMv2uBhvE6AmL91xN3rnYQYSKQpMa1mzYDte9K2dPBxpjYyL5YSQxN5kKwj",
  "key38": "5doHvsB7txtUASwTPu5AXtazTMF2zW4jVXH8Cu7VQ71zSCjFyYidqenWFZtf1wBymdLrnAiyZK33UfUEwYPjTn3Y",
  "key39": "k7VvpRBYm5Zm8w8GAVhZDoS49k9BicgoQKDGZG3dnQUbKhjUyYjJHD8xFkKXvftBEJueP4puqSBKpaHjRQzBAXi",
  "key40": "5zBrnS9M9VTwjg5b7mLrgyff4fyCDTifmL62gcEhbNmwqAPXB2Cqf4HcH7oDtqGStd1RQnLCj7G3P14PTVXobFEB",
  "key41": "2Hc36meofthjrDNLoDdKfRpe5KLDMFohrN3SPYnKGg5P2jdLbpZE1QuAUxbGSD7vrgeGW8F7w6rji1YAR3fxJRWB",
  "key42": "2v1h8Huq9n2kAjEAotN92GcRBTiF7VUsU7bKETZzGybGvUax34xSQGYJR5Gyw64CnAyDMFbSasN5y8ozErZ3egQ1"
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
