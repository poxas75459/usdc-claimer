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
    "ALdbPJ9P4PJry9wfZfeHLo7qGnpUKKRkF9dKwPkhHo1bUC1qWEYgQenLHzhU65zVs6BUKaEcqWAwqFhE7MEnb6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CBWm5KiEezb4pp5pmeSbMqhzVH1cWL6Zvo18QHWnFTfgqG9WEb9HWni6GYk94xRff3TCkcJBaqHKDzXcerVWrCc",
  "key1": "3RWbWsNFp1qX67DqSvGaRhcAsoRp1Q2NuB298bRJGnDdgWao5tx51GtzZr2BSyRh4kWp1KPWt6SzmK6DpC16172W",
  "key2": "32PWDnHkaw9JiVnNT91MQijFnkKxbcChVDzvyot1P3FvdUbF7NHBGN15J5kz9FmnF2kSNZYjw6pApg3vfyx3XCRx",
  "key3": "4NWwQza9GUt3WeKmzuD3nmJZmyYP35acBGkp5E1fbeEYcvF2NgScN1V4jCHaPuNCT5UYngceRErxRs4Fasouh3n9",
  "key4": "5Gkqyuu2Vs6V9RwZaVp6rP55UNePExGBGh9HKTekwaW5zue3XwN8hmkcwPG2vXqiSKWLkhiCyBti6nPf5cxhS1iK",
  "key5": "3ymeQgMXTu3k5EXwcA7T62jT5CNr96ECeAWfi6Tyu73WT84Svzybpv7EFsyWyeeuWLt7MuBX2YcCxAbSBcKcNgLA",
  "key6": "54Kd2V9qVhMTQDqdXHTR2M34b4QZfjEDi4s1X5ivsFg116UHLPwYEqw2zqRAttHKj3ZsYoSNzUHLpKcuvwow131z",
  "key7": "45Xz3KTFDeJRAyciyM26caZYLxtkzNzKtDSon6b7nUMw8vZLesPUWznyfSjsJRE1YzoRCDPkwUFVASnMxerZedV3",
  "key8": "fAqd3JbSATYKb34s2G9axC5nQdAVutk5CYsR2AARLWsW7Q9cxvqS6RBCxY7ioHr4HW5ZmnpoGLGekMJjCwXUyoJ",
  "key9": "3NL7hUfeWxwAfMakRgVxvqtQjuvW8J9dwcLAUHhQWEMEPetM1GLF3S9rpzoZx3ReQK6zi8CdtWuhzqAMyw7N7bUi",
  "key10": "4YHtfwyfGDL2NAujkySxMHAaeNPgoroprc9XVpXFUBpErW3TCDTi3iT2zA5esXgwcbBSCvPG6fznk3H7mkrJR1UZ",
  "key11": "3VRvh8b5wChsVMm6vzHe9Qm7e2NdUAf1wajabxkPU3bCLcmEYNv61WNV9eCee4G68G4k8e31HerLdLByczhCszCg",
  "key12": "4JqdUttpLxq7xgJ8YhKb3GjDmcbH5CscDaBjzA8FbDjabrPx3mcjB9pW6ap8cWiF1DnWFgnYU7WVE1zMapar9AbS",
  "key13": "2xySVTLMx5yNutMayzv3pQs8cLhifgj89b95yu1AG8sXgvBaL7aVezNMPiMVWZyig1eGBuHzEonv86kC9TWQJMG3",
  "key14": "26LpWBbawbP65NqZMCGtkg1DubDjqGojXqd5L9ckSUxoPqNk8iPGd33sZHCro1grRbk6xDbB7mQZi9tMwbfextWS",
  "key15": "TELpw5T7Mj3VRK2oYWU6shKTMWPhTuCSKA4RNgihYA6BWML9T33KEsQtRxkpwumnkhd7Xj8sKMe11eNuoFgTkc7",
  "key16": "63QSvGMdNu6xPVSc4ddsWdsr79745xNKG2Dck5EbRnn5z9yTcxthpiFHy8PzRYNYzvH4nkceg8bMDzHC7DmNeAbe",
  "key17": "4VMrFYgFNujkiCQ8boiBNL8QrRrCWTtLZ3dYh1YTEQah9qaVfMmpLgzBh14sN9wSAp95G1jGvioFntQaGVSuJRjZ",
  "key18": "48V5LhYAzMsB5KeCuiuyRJ8UDrjMdbamP9Ccnbf65rTLvJXucg3FtSgLtwM1MWh4NDMwFCSfUiV68rwgpHbs6ZAE",
  "key19": "4EaR6CqBdBeGmFgqsFoXoXPtmXWZ2PH3Crw9XWL2u4CLGgaDbKXQ2Poybm9Ra1FUyPkDnrDnARZvQMEfd1qjD3rf",
  "key20": "53WwMNEf6kp6WqrLJHurcKdpP2FVG6fU52BgUcHit33TtPbb1TCBVBEeUPjtJBYnHxGgoGxdKkGjVjoKrBgYrci1",
  "key21": "4yi6VLYXM7MakHrt5buBfWNrZhkGxYLZCUwA9pDe4Ndp79Ep4UaLGYdY4SB8WHjNshLcKxGf6A7r4nJfcbkfBNyv",
  "key22": "3BEExbAgqDBcRDoxJ3xBxLXE5oA6AFMvXR3XoreCFts97CuMUCx8uWnV7NADwzPYo3L6c4m7dH9rNZafau3j2xnk",
  "key23": "3v7HC6ELs4kBbeifqdhbnLjusW4ArBDrdkbegCVQQ227BQfWtupu8ZAgHLGgNkP4DFeHtKhjidghKFr4axLyU2hP",
  "key24": "5qsLWL4iF2DvDRpT1zxyasjiU473Z82gyXL2KB4fHPkokznPActHX5whxFtJdw8gs5dzW6tephrGnNrc6QnVZYij",
  "key25": "2tNVZWe51MYqL7iLBE6MxkkWqD3mL1UEyPmZXiEqSZqwYXveG4ijWswSkbNAST5SsJ7g8hKSYQmThht41rSUKP1S",
  "key26": "3vpwZShuVqddp1uNsg8A9PmJBDyxGzf3odo1im2L712Q2SUPdxp5BA9z4X8iXNR3DCBDNZqXuAsypta1fDNnKTHG",
  "key27": "BYd84WPi4CBpdaVY7s14ZgwDAjgv1PdTmNNmUsKEyX5W5KSmbEHvRSrMHMAJogz9SKoy4jkTMMiartkCQSixCM3",
  "key28": "4YKQF5wwVFZ5mzdtzKFhf7FW7CTtsSNKu21gxtafb9xXWgHCrQziX5rUwqaARmzvZ1LvJhF9XJv4ZSYJTo8j59S7",
  "key29": "5P3eSh9JZRQXhJzPkrQsQTzV5RiHkR8TzgNnf9dFGXDgZHYgfSkvBjJYbn9mVcdkC8stUPzkr1LngGwriFHFDEVf",
  "key30": "5E2gxFrgqVsMmiiya67Hq4sJSKjNiuoAF4zRhLSgfAF2ZEH429V3wn83USH9bNQBYyTzEh74ySE9zU2vNiiUoEqu",
  "key31": "5WU5DJFx2qGmmCEARE5EjVWNHhodqfwdi5efiPC6d255UCRzEbtN81JDPa2gfhoWGCSEgVCJTrNLdxSRaVYHo5EP",
  "key32": "2CKLSV3hAApwKLm4hyuWmzCU3v4HaXy8DGMZngdpDG6g19SKCX2cxFjR64LihaKHntettiexfXXjBigrgbHkERqc",
  "key33": "5MjsPdMcTvrAqD5MoEWPgpFDuHsxVTc9pL7CFyuZ7EJqFJzaEsoDZ6i1UHHAjY3hpPHJ5yTHVzfd2irCZvXhog5t",
  "key34": "5wS7NaRFAD1Kzjm1qSbky912fiYtc3oVMEjcCiU19zR6V9EKC81ijLPj6Ce4BsX26UoKTZoRa9rrQLeta5yz3oJK",
  "key35": "5wZVpougZAvq3auQLaPBQ21MqhMttPn49N1zYHHmyffYe5rtLYFDhAMr4BkgRMd9ArzjL23B6bcKdRNF5Ynj6bYC",
  "key36": "dK5NkPafWracpk3D4fXoArjwwFyzuszEjzo6N77GeZVZJi3xDZy9PeKPh5Br4LvHsivx3nWK5N4FrrCfzxVdLw7",
  "key37": "gC75nLXAufZuEJBTMGjwPCv5RWYqxGQtFaj3XD7rL3ERDcYhLpSCtFj554VHaqKRYvDzjV31CZgnLgRCydiR6z4",
  "key38": "3R21pPPQT9B1RnaS9WzAeq6eXekvSwDWWozS2pin3v1KS2sEbnQvARxrgpGsWhkFwpN6odw6HiNpdeSkqdpWEYZk",
  "key39": "5DkbhcL7X31hXEnDTX2RvjJwH4uTa7ZF2oVoD94kbPVn8hMVYP8s2xBC8Wcf7x7nmQGQHucX7L2PPQLMLipj9CDf",
  "key40": "31cf7HB5HSwUkJXtqwDs7f87aJqxDESwfLn5N4ADS9NNR95mVQviP6UNsGhKMwdBwxLUggqmrNeSCNuEMy9ZxpSD",
  "key41": "4DYT1bdojUbdxQVeuBfamfk6cnYhiR1tV4LXJ3V8RwB5ekN2i6wJbtfPJpFNEvY4epamboZz9hMXDLFYwBdEYxzw",
  "key42": "2RHUURt5ZtqQHeWMUWNMfRtgMVZ23sC9vT5MRZ1XHyAFyjZHhQDVDfdNPdMS2fd6pdn3miwyQBUJ644DV2wdXsdh",
  "key43": "3CUREsnye2oJP5JPGaeZBbSCsvmV3jkerkZmAZoLwyDEUS4gMgbN2Uh1nVPGQsSE3b2TNQCLXtPEYEvqzhQMM99j",
  "key44": "4wm6mqENEFrzp4vzo8dj1yrxjt5vShPssYHLE7RBKpB8P3s34hq1i2tdYFaLFmnr3vD4zD7BypvyWNdWiNrWRSXo",
  "key45": "5AhyA5uHLhBvRPevWfoo7YRSKEffQJQkBKgnboSYVVHQCqM86wE36UvknqneJJvmATPb528tFBa2u3mGSDVsn9XV",
  "key46": "2GLS4v8CWUv4yt8Z8buHHkL3xGb1E74bEgxsTxvpWfV99nyTJffcatauQju6MUnZjafrayghDyj64chxmfwEuY8H",
  "key47": "4vqLP2Dv1bWaiHnLsg7usRYJgDTs1244q6u9VS1udMom6zksbk8f2sDbchMwkiKUeUxGAcFciaTxFFftX5WZJXY",
  "key48": "4sgnqEu2Q3yCU7mgErQN2LZ6nhcT6pZAoCFUimRTKNWgrbtWuAzfQPb4gqqpea3wQxPJn1SWXt7V1x2hJRZ51JFN"
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
