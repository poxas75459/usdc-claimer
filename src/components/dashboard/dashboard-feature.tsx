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
    "3eFpkpeYwGFNHnKZg7PYjqJez87EbVgwrrsQnQaSKNRKxxBP9phDtG1h6DeiHbo2uDaBcfFKTFWSMsyhV4pEb4ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G3VGnz5EK6gYV4UckkwtQUV7VZ8QtZfk2y4GLvxfWrmhBfxrMUiahiQfmNerz8smRXVwjWd8qnY5TmKZ5fx7VTk",
  "key1": "3F2Qr4KHDk8W124AvPkn8kWFzMyNZrPRsTFUKBts4kf1AFLHnknm86ChnZiVARHwhGNrq9QjypkpGTY22ysaXybe",
  "key2": "RiV2Z9g9dkBDUa22YBFXbowjWMq3YgASxMCR9fU1sKMG9rvvgUgUt4dz8MrxYUFKbWtYSu9ovN1wziq4EgzHhse",
  "key3": "4sbVrZKupyFT65zREZeA57xFBv6154ZViZWYSSm8VawUp5iX2hmQAidyYmekUWbbUhi1QSZ3KNXcdYuxJaugCREQ",
  "key4": "zN94TjJc9pgExERs8teDe5dUyjdzuq92EZugUzQ13Tp2cLn7ujAtBWhsj3wTMJBctZ3Txn6LwWvf47LnFeeB6ZV",
  "key5": "3QxjYsasFyLdovKBJPSGY2EKkqjnTfKZaASXVNSj6ZLVHv9c5wYYQt2fcaXVvhMWtnuBwA1rT7aTri7vkbPAw2yR",
  "key6": "3ZqGhh85W2e7q2cBNfQGvgW6PUQhUdHv4seBMj6Uy6WdvFBizWJcTfd8ZvJmErikNSb5znwzSv8wrBCEzN441FS4",
  "key7": "2Uiw4d1Xig99GUAGT587Toae8C67szkroTewxGudeA6ZwKWUL1p7gSMzPffdaRpjaUUBJequazSQVNZRcapceJFa",
  "key8": "2KMBDjxk5TnEBKRe3vCor3ohmPmbWHEGsuM1Qp1y2qCSGKrzBRWKjChxUtF17YtnELTiwd1SvwCSfkFzynywqZhH",
  "key9": "67SisToN68mb1ev2tTHDGitpYFwW9HRznUq1tMVDJNBFzjSTtBcAQK8e7xXERKu9LuvzyLENPUm91PXGCZ59Zm3k",
  "key10": "28pi6F7CLitHNqNH4itEzPo8HBGwiSBXjohNk1n2vtb4SraKsG3BHPWkc6pJWo3WBCMepJz34U4MkcTX2YKYKCLp",
  "key11": "mgjsqMVyYuaDKLGQN5dcgRAshQvohRs6AtzBeuz7qPQbsPBckh2855y4dCZpNgH5JZQd8WxYkZidYocwUYTMCLP",
  "key12": "2c9CZnzpCfnKcNRaFuMGscYJdoQbBcMsXgTMLQ4H16Ci1WcpgWUKKdAcjXihWrayGeRwhDidz3apRdW3gBgdjzTc",
  "key13": "43mYqUdeWX9ZiM7F2hFysTVNce5ebFbnkY9e6hSYVcuikknh4VJuFdX3aR1v1XCeHTFx3a7a3ZCwgMpExKKA9UxL",
  "key14": "2jPwJXPMmcvTvn8P276SstCC6ao7cz4fTrWk9tptXB45wtpFbgSvMPdQ1nKNctL4DKHkm7279Qy6YXBhrn6sfN9r",
  "key15": "5LJq1jc1qqeb2DYfXj1spJGYSJDgMqoaPVNG51JMAthSei6QdKKcFZTjS2LtV41dCSVgVyTbHrvJSuSaEFQnKQpt",
  "key16": "ZxzdjipfBH3EXTex3976kjEwfhWGz9GnWR2z5iBjwG1Agyf9YLMgBUPN2W7oaxQQrgMDC661UHoHn8Phvztkeaw",
  "key17": "3nZC5dHTcv1XJm3St6dgzf8EFd6kQHRR1p3Z3xrzZxBpZH6HW1oB3YvdexgNEi6BYhtKRRkhFXF6G7AzGbFqjeYU",
  "key18": "5xdHjjLGUVJAh2qAYpwrDPsUqchR4FVPpv8tL8kscT1uwxRHqLydtQQZqhy8Ksu3V6QpjAdNEQFyRkq3AzJpCriR",
  "key19": "2RsRhma9vUNyjuGB66XrNtQCTBBNPmQMhUMVEPSiGx3wECdvEJ2VvR89MUjR1yqQVkLR4iCMfR84CmhXHwcBxhwW",
  "key20": "31KHLiGg2dwgmREECWcN9MjcMJJWD5c8xRmKQDcccwpWA3CyTrVwfxMYSKsv6qKsWbCVzMk87EfnNbH5t12LKBtr",
  "key21": "38p7Yx7U6dS8ndTGb5GJGhT6Mo75B4LRgH49TUoBnSHxG3GUB7UMHjN9wCgYZZUdSDzaa6H18HzVBviu5zxp3fs5",
  "key22": "3T3q7u8ZGyjSN9UodwSnaaMAMxG65pEikKvyXtVGD7dMFXHyegqHMzz71KCrK8XDaZcu3zN6wQ5H7qHaaAfR3gk2",
  "key23": "s8yawiza9NSnURvW86qNGo2nevBBcLnFDfPsbvLFq2RkY14TGaFdDaWeksRofhex9JPdkQM9nMAr3GiK9rZrhiG",
  "key24": "5aHNYURJnBsc9h317kDGgpPtrQJBeMHBwBnyQJfAmDmT7iTaZfRzytzfutqqWpryuDod2purgPeFNmnUkMYnYCSV",
  "key25": "5bJavjAUvP6g5ap5AWt2jow8xyCCUBMSnYR322d2anAAgkkR2fB9rVaTmrcbDz8hbWhSTUdWQf5L6iFXCkEbwgCE",
  "key26": "66DDh3nPmbrYnAzSfdP1ZSs7diG8iDCUVyaPzqiMtVCctv8NrYarCiLY7iwKsyvNzR4ik3vywEkpkcbQ6uWPQwLb",
  "key27": "3mN1idzVXbX6cAZzi39NmMuT33b9HKNs6zDt1Fk4Z2EH34444PmrivHSmvwMoR9zqQTQyWUAj6HFTjjeZX3rLBJQ",
  "key28": "3L2EZEoKxmUpbJN6WskcoapCqC6rcMCNTTT2sd2ASkT4E9ih1J8XwPrNTpFziodK4iNw7REkVjcCrT1zyftnRwYi",
  "key29": "5rbmUpvZKFyuAcexXYBD4W1ZNTUafqEhDWt4wu8CuiR3X4sjhBbieGhBHnvNBGpW597qpL7jEM7T1jCr3x4j8xsA",
  "key30": "36fbBHYvgpFpyVNPjV9QtaoQBKw1gBY5sYEeFvah7Le4FMTgVmLLovJi9tUacntVrUJYukPEJ2SusoUWTweXswDj",
  "key31": "5zpWd9c2NsYKhmrXyK2EWSLtLqeHPXKWWmiGq7w6kURyhKm1vXU3KJz9AD5Vr8nq3wrPDC4FYrgt9ZR4rsoS1jJP",
  "key32": "MNGU7z5BcxkGQ1hTF1cqr2zbYkZZqazRFfNL4ePrUDvcbxZzbSWvaqbMqdiMsav8Xa49tWyR6UteKXmfuKuQDDJ",
  "key33": "4J7f9CSpmbuBo5x9bCUZxPQoTLBsz6g2WnzMY2Kgk1G1avpAJFNZNH9X47FfmFG2zRYwGCDCYeagnKhLRPMzRtvr",
  "key34": "2tCSceoe1wHuqfC4LbR3YWuxmabpfb4hHPsEm8nQLx38Q8uZDd5nEXbhkibu9YwB8Z639K7fhDdymQdxKD98Yjsv",
  "key35": "woZg6kMJR4e3cHEqSfkGt9gA6gGoVTgyQQzm3RGjFbkMGL75KseCXPGuatZPvJLSrTsrhPr7imynJYTvQSk4CsV",
  "key36": "38Jo6ZgR92cQTFJ7f3uwsfFAA3rVUvJuhcj1ev5z66y377jkTi57KZn8vL7A7kFRAQt6XCGLsa9bqGe3TWTm8Dag",
  "key37": "31F4XFFdNUDt3LGFH7t9fCwffDHBumS9nMD5B7yjZKUQVEeuW1MinN2Sw1Dh2mY1zWWG7YxbpuqunkWvHgCBXZ7S",
  "key38": "3MckuZqakcQihHdjBKjJ6BbX428g2vCE4ktaFpC3N9LFBeSjeMAfnqX2eRG44pXxem2RmjKXXqa9iMkc64M63TMN",
  "key39": "5qKKPXLNxW28d7ch5vAtVnw2qrQU36fn3JKjVmHz2sXfYmkMAqqVJfXdDGSQBPkZVHHPXmahrgtcDaF9WZXF3mpp"
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
