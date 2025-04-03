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
    "Tkfy8abJZZpsPcBS6KQKXQKV7zsMrstGgvoEdm2zkbcmvpi9PTbvABPTUbC78K2rBDgVZNRLDuxw8EKAowPV7Tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wre7gBRQev9qbzNAFya8VtqB7KGMFwNX5eu1ps1tu1mvSKYSmcGHfRiS5G3a5Yjg4DkMeqJf9At32xZesNbbXYY",
  "key1": "3iy6WYKNtiJRyLbeDNpPsFUpCmfo7fg6W8CtcBc4SQFzho4ZLfrFf4YVeFTqiqNMVRhcFuhdGBR1oghY15hsg81G",
  "key2": "3cHCHWpwMcekevhZZ3ovcR3xvW6UVvrzy6WyW532dgPn3fPE4NGCktCXW5Vt8Wz7FETsruqezdZeEofVMyg2WfLD",
  "key3": "3fUnEHKokAhtALFbSbRNj5nwwcJ8fYEAEMb26Ktz6A4T5FMFsUdRre5iH8JvXDzaQgnim3497ENHUemAF7C8VYGL",
  "key4": "NC8chXy9zCp5umiwWThtxSxDCFN1rnbQ11joAYqHf48zfoJhr6uLEk7uTBGvmbWZ2CWNgf6T8P8Tc33LqLFyXqZ",
  "key5": "2KDU2DmdkNJH6MTkWWMumcM2LgrkEkdCUE9goTvHaUt8xfB9o3FtCkcX9qaDAdaJRvTJYiMhKxmpBR5pwyD6dhL2",
  "key6": "5cPnvKwVhqu5q2A58njRgqEy7WbMQ85MKKemaY52Gvp1pUsZ25RXsEdsDL1rApUwSFKo28NAgLkHXuzDariFhP9T",
  "key7": "2oAWgvkbuP2C5ZNLcTFFa2moMx5Tk2hapCTiWURnGEKiskNB7ttNcLHkUsQznFJUNBiwgmUKsbBLTGPiMuZy3TQZ",
  "key8": "5zWL7xA2wDxhfNUa9gpQDY87UcYSmsK9yhRzGqmPvcww1VgNpmxYrewp8wp65HDhZMzUdMnuAXQ52e6xWfF8eGz4",
  "key9": "33tNrPBG8xJpNoUPRgtuYUuTLyzPuuNBaytGZxAn4FUwAkbHddvtoP1tbV8PYG6Dm6AU5v6jpcCUiGP82gH5dJv",
  "key10": "2fnaXGiEWYfhLWXzch7MZ4we6JmJFQSV92UmEckmfeU5ACdbHefvtr7peuRkEPuhMmb139zB9ZMcTTDMKjdCruvj",
  "key11": "5QjsaYV9tFCU81bfemUFjG1MQwtQs7XoaQCVnzPJKt43rLfJaWG15GrnGPaTCbRXEipyeGTabbLk9JVNHPkJUnYQ",
  "key12": "4q2RSVnRVDQ1f6W2rmP3dXPsdVnxpoDFXxp2WhBvWsLWJnHDwybeHXxGP8t3s4MQ96JtDouNTb1hGQsr1uYvfoEa",
  "key13": "28ijU8d52cZ4KKXTmUjDkKE6GgYy9Qbpm8ZXpygfjzTZqyTRFxDMsqVXSfZ9bmNkYdPErtrPZUaFvQac4KzqcsmE",
  "key14": "Y2UwhNiRHguicy2xxwvXPg8G2m4AT5wCSA1onx94wSsXCbLxB3kt7Y9uAQyqo3rwRiqWkEmH49R777gkEG5EWG5",
  "key15": "5ksgbjewJuSvwXoCAn798KkAD3W6KjoFoXxkK87ULhgAmSNtXqxUvgx1ehJdPWkSCoc7FVLwNUoXizJhbrpQJRhz",
  "key16": "4gPWznvvpkfqamSo16p7tGxt1cM9gLHDGfw3oHoPXuu8urcXjDGHZSrkGtHAANySzePyCpPnGPvjnCbcRdZV75Tt",
  "key17": "w4L6na9V5qPueFtsa7XVntQWwzUdF5z4XcZstcvonUM9c5BSDQJKocJarLqiKwnMdDRwUsg17wDGZ4fzzHfSegC",
  "key18": "5LoT1NsPSFR1nZnU5EvSfqGGW4iDBs9h4xL8AGcL9Go98k1bcqiWiyZNu2gwD2JsYxSX1yW2YP6Zuvn26jHzG9br",
  "key19": "FLWt6u5fVYEjJn51Ta93tCCm18yqBbXUHFndYrBLTGr6Usr9cc1YrLWxuuCHHuEpD4XDTa1k8hTBQ4VcCUryHbp",
  "key20": "4m7nWFL2vxpitZfjffQtScQJtpBKwoAxq4tcHWBGrjsqZVJMWkE9D4eFXkRxKWspAp9LFyNqYB4QEV9keJQkGdY3",
  "key21": "4eNmhccXLTKAgzBngUSArQxtGXTJw5C2BqTuj7xeMC2ojJUsLg5PZ2xP97dwTimShh7cvkyiww5HAusgwMaPnG3v",
  "key22": "52CkLMFXk3nzL4uVsyEPpTWtWWuHCqrwjBqsJRqTCZAe7tMCjh9RgczYVj167tB5zJWSRWjHnW6ztbJPhtfTzFsm",
  "key23": "4XCHQsWgqRjRjxgzZ9Upvt5UDTFwUs8odHa7CuWoxzTAmbox1YvfWZNvsDuphx3CR4cpay3qK4KrBBgiXbXw1mD7",
  "key24": "366epn3wdfYjKU68xpSno23zbZNqVvdWHw9Cz8ESKSdw9uYHbHo1D5F5GxV1Nmpbv5o6GF1RWwGP7kqoyeey4N4Y",
  "key25": "2m118wUEwE74FhpRvSvN8M2sYmsVsg2EEmo2YJfFWUJAJgQgui8nLbKzT8Yx8HCgeaggeBQNZ11BzEb8RZuNhU6U",
  "key26": "3EULU8RD3yPYzC2D7BqjAogcc4x5171TWcbti73863MYf9CpSFbcqb8nK1XnHV5CdqhZ2nwVjJst3MG9azGYhiVP",
  "key27": "3Yi75uwmVyuKu9gf1XwBbZFneTbtTejxghSXiV3jQn9xSwTGaHoMXUokVBhE8DkZNDyAfmmRoea22vS1cHga77sx",
  "key28": "34J7SpDcdNmHTrHD7BzsqbCZTLSYjSS1BCSwibaRusxn9Hq97eNzKPquPvGA5m4kNusppg8o5ty2QW8a8Z2xJKEF",
  "key29": "Y1VP8opJXiSRHLL2vsuJQxmMhtx3bvYrD3yvUJXDnnPCtXqJZUvUqpxiwULad6gaYE5sXWLA7CWJTgrs1PozZsw",
  "key30": "ecggpZmgLiJx7Ho76xY1QhLRJAvZnmL2p7fF5uYCe3tBUSJcXML6KfZwNTQCaUBMUcdPFvbCi14xuB3Vb8TYG9R",
  "key31": "gsPFsawFVMU8E7jWEfBu9ZdtztrxGGQEoDR73dN7zLfsL1NDzvgwkiRaXHkdYkRGckXN7jh1KMKSuY653KDSr3d",
  "key32": "2268HLppYXoosrNzmnnoYm8Tv52oQ6ewLTXvkHDfHTyoDxmPcV25Kx6cZCM2h4r2wWUPX5DZjp7qT6qWfUDaHTk7",
  "key33": "2KwinDNUGZLQ2iRrh5vAiWPtTSW1XUdShvhSKMk6gJqLJddqsqYd2cdvg2LPWJVwM5iongiJEeS86CgdNmuk88Gk",
  "key34": "qCcxeF5cRqEr1WaH3uiHbnQZNGqrrAE2GnkjqDPABa3Cq8GHwEXePDo183Va43KMXsaSmJk9wpVqdKFQWSiukcm",
  "key35": "2Z1qaSN7n3T1Cmm7xCnV6vETb5scRLAwwTxApkLYJ6wbg78q25NkZqZ1VZKi5daPEtbmbFVJLCiC3DdLX1UeAinJ",
  "key36": "4zFR1TpieNgcpd8i35m43q6CUwLSR8WSmpqC9DzakLm3aftTQsaD2nMu7VGnHoWuxCUFmEFkzQNyNNRCDqxkBWNe",
  "key37": "58ecoRiAmZrTjUexibn5PR1wD9Uib2v52KLmCGszpNnnGcsQYiHhfaeXA1dsQaeaM2SEyYXL9WAxcjqczRKELmTq",
  "key38": "8WUyw6YLWd8SBfh7CJ25msbT9MFY7reqzYW5RHM448XVzu2CnUBjwGy8SizpVHafDThpmHXnn658txGmjjS7XBq",
  "key39": "NPP2rTvxBuVBvPbbwNERcH84hBzFzQMcVv7Qyzjhsqj5b3n1oEXigKjoTku5A5YDHC9newEX55KivaCuWTq6EaV",
  "key40": "54XapMvXHhc8Y1zSWoor3qtjGpUDiVVEav63zonGAjCK8bQuMUwwdM8ZhgUaCLiDbo6S8moV8RHYCHJsLZuDfe2v",
  "key41": "Fhavo3nphSjyu8fjvhmEQZSPy9ru4MCYi7iLao2k8ToabJ68QPgysMujmVDXDsXFMzhk6akJAifJWwAk3MkASXc",
  "key42": "1rkkv8T2ywMYwLqEok9BcNsTHGvFKqXG3xy2KXV7RTQcEKR32eM5zKQCRRQT9cburMG6HA1w1mknQasJCCvCZvH",
  "key43": "5W4vhPigrYvyBzD6eoB6YguS6LPDhYT5exsUhWYj5KjJqBCXFRPoFRvbhbEGuWpY7rUTJgiHmo4Nda8LXNKabM76",
  "key44": "4KVsi37YXRVbArAkmRncpnQscH6Fg5P9mXF5dL1P4Mi4ejWNx3bVJyQzvXQGPUaNHQXG9KBZjZXgAz7h62f1b1YL",
  "key45": "4RBTc8xcDnczG5MRHT1MtpFvCUMyZQviYY9X56GaJUxZScbwcu9A9BySQoCDwZnNtmJXNYx1jMt94kaEMKEndbXH",
  "key46": "5k2QM9fqutT4i8KWSeKtH8p5Dq4rXaDif87ongBjHRaA2PDexqzmPr7gUGJ9Hy7gk35VL6Pix95XzVviWB9pu792",
  "key47": "2CG3g3h3gBUuSAJTQx5wdEeExA8u2nNYDfEaxxGiu9mL3FVf3qeRUnkuUgUwfAoDH8HUovhkEPx8eGvw93KFiTXS",
  "key48": "3qh3dhCyPS1qEdfcrqqUU4hFRyF8cJoLZAagz58YuGTRnSECQYfkYcog1Q2YNHXVfBmjJSVrCmWUmcG7wDS1g9uP"
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
