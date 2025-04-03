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
    "UsZzuXUSRnnN6PqPJEehEDKCUqVC54s4AHdn98PanWNnkjj9s9BJ7iriUVyAB1HdEUFFULrQBxVNWSDhHbGV9zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wrXpKLrnLDhjxVtLaerm14NzJK8GSw1pLuT5PPWibgVK8kDLyTFmLqXWxocCdaSnRGZ1xyawqnfsRPWcqjWXL4",
  "key1": "4mwqT2hRTBGAvqa2LV57W6iugRKpqKzyxmNiuGYWEJ3JbrRa3dQhfhj5yZeHSqLYSQzmcg4dsZ4XQsAGfmjjPMmf",
  "key2": "64fYHj5do8rTfWJfkrGdczdAKzepXEQFXhB4UdDW7vqwmTwVksh2kG1aQcUhG3y8LExcRMxDSr8sv9eA2AKr7H4P",
  "key3": "5Ze9RhytDeFFcM792EXnXkMGZrJFFnD4S68fuWMPDru15j7oAJZMxHjr9W8t6CfTFiZbdYYZY8SETW8M4jSHUVgo",
  "key4": "3UE88qgt5gqGKHpXffohfs47UvuWygPHBbw87LuaPrrKW7LT4KB77hyTEMw6vLRJv2m1AwgaAWiXBA1Nhi23tRAA",
  "key5": "6K8zQNCP2mgMzY9rzPvq4gfq3qaSihWRDkXZ1N3WhiEEwYvYztaHgNifHH393wBXLSHrJ4qD4UgBrwJqH34RYcc",
  "key6": "2n36N8QenP8D6AWTZKsKoPFzU32gf8fxCX9d1FaGjoddLG352BLuJ1JZAzqunSDK9DWGMQ2mFMuhNAQArzwSRvLJ",
  "key7": "2b1hSqpHf7Fv1DeGAcKcvq2kyHVWsGaQNVxUq4yHkikrwsD6Z2RgYEvnJUzxqDRFyj9GXRZDL62Ks3ZCLrwsxTBc",
  "key8": "449aBqrtUJdGx65n1KH1DHnwS1QY8Ujb8ov3D91XBUYsM94gLnbLMrG8kYbwAhZLzeMBTZpEw8PnUrxuupx89peb",
  "key9": "6QGXj5AYWS3Uysn4R1WKBVxHRH7g226WbPWABodkhJi84Hw2QciXPKgf9MZ8skiDHLAEipBfFDY3tsu9qKZZf5p",
  "key10": "5ZfT81trw4t529WuGxk3mpWmcnDNGPWmjnWRFycMdTtZrBvrkPmNkwmR8NoF8VmEjVMs7j6vudihHivwPzT6wUMy",
  "key11": "4h7yoSR9rVCvYx5wHU23xvSnrLWofyc71y6dRnAziw8zpJUwhHzUanxRxLQPkZt3segVvfu4nXoEo3yFrto2sUFe",
  "key12": "5wMZpYyzje9zKknaeC5scSmz8sZDqYTbvxpZJEFaVqGact7An47k3hpcsxE4XjJew1u2RrvCuuCSZ4kAArh74SR4",
  "key13": "2s5dmBFMBtez9aUS2PpaeRVJe7nbXQEBZ516wRpZ3eW2zRPzuQYRYdRiGCRhaHHu8dHK93g27wnzjRYsrL1SHkct",
  "key14": "2Lg4UMtceHi8TPg48ALNjDTcjppsftscoM6n2E8eh6va1CECuLzcKFgEQ1Ypm937x7KZ38AMFUm81nay5FEPCwwu",
  "key15": "4VKTjiwj4haCyyFTz6cmkVtysEgQpKDdujQTCRscnyGPjdDripFoZnc94V6HgS8vbAtX6pkdU96rfC9jtaBuR6Xg",
  "key16": "4mujMUv9MS7EWGzyWxhrqHi6iHVmpdV5YXEkkYmiKAv5R8apaQsTsNtkfSygBapftBUeKnaW8BrNJQBEv93GJQg7",
  "key17": "3u8dG9yeNR9KSZuCqSDUA29RMfkdRXbzeDAE76N7W6qqrvdCPkZ8oL4woorfHVH2787P1G8ueZ8wCEsMKtQ3oTeS",
  "key18": "3G6zbLAji6vUDjDhuKYUdzKq12hG6s4KafUReMFyxnmuKnqJ7XzUBdyVbM6rpjSrKCH1nt95ZQU9Zu1PxnCBvpya",
  "key19": "BomvkcB6EnnrTJ2VRTf2cpAx6R9eadBd98CLebbP6ccMF9rFpPxJ3hZ4bdAt5iGMDFYAT9YfWxkhpzG4tAa8BqR",
  "key20": "5kXBMCqcpYxnfLvQdAnsQY4y4wvE3B25EvcTZHXpGuftEMssXLsX3JKrvGNpYepM5vZ8CbfUzWSu74iitbyorshr",
  "key21": "3PbmKyLjfrDY7yzdcjssfsqiazrrQ7sv8dm3Kpr6v1U7d7ozcfuQrrGvi33gDSqW9G3uVJvsWaYuWBuTjxt6u3Pw",
  "key22": "2EEnAAs43f3urqvRSku74WVt72Jhzf23B8Xaa55o7iUQvPueBtk7nDJLHCGce9hZd22kn4RqvjRRnJd33hMgbCCU",
  "key23": "AMh7WH3RCES5uzLNGptPPwCU39eDb8bpGzM3eukDSSMsqYQgvHFBoXFRdeRHcHzJKiJcFWoKPdsapJHfc7FiZHA",
  "key24": "4NyFKBnFmNTF6DHLbRPAL7vLLdfzcwYiXAg5gZRwnAVR5mBcazT614kBDLV87rKWBoF61hmwRpCAvBm3YyZfQt8x",
  "key25": "3553SzMjhUGVJnsGSCbz33afiiGPw9DBjJiibFgmg7HXfSzSk9AeTPYyRK7FwxEA1eDoZmuG3jJQXagdTnvaLDtu",
  "key26": "5MaKi5mL8epVj3soG6Qu5HzPyC8ourD56STeHnnnef5q3W2XSVRgf69AsXKKetLUVC19yAKLWY5S4nFTfBPV1yFS",
  "key27": "fFayoWrCZepLDhrAgA8VPscdx2KUndKqGyfJwRH5i5UX2EiqNvQvzQDz4xZsavJd6X9UfwAtnbuYTR6F1723HuY",
  "key28": "3rW2Zefw4WNrQz5yw1CvFgm7wtZyTAQAnQgkYSQZbqCr26NsejGLJKUxmCCFsXp9K98Jdgn51BNAELk8EebyzZch",
  "key29": "4EfQpdAfptYWm4QpqXDPWLZEg3w2YV1GSuHVMuiQiD3gD7W2DPnQPJgPPQ9z4vu2827T5nKtPQ3riB9YELdtxtoJ",
  "key30": "4zjzo9kP1cXnu1QDJg2w5eM81Ba9SAVyBNqktw84wJnZJaf4VNgCkJWBXNkm3hxgzGPzDTmryb1VHykp9YdiL3we",
  "key31": "qS4eGSwE3vcHkhoj89x69z4xQGk7GFFMudM85jfLHnMmtGmpVCzouMpkbE2GPTp5oxnuRNLGvt6wQmjRNeRo1Fc",
  "key32": "EHTh3kujQ5KDBY4Mcr7vqXogupmCgQKcQ4xHWhjshmbyZNvMNkSpjqkAGNcQcvYrb5xYmMGzM6wz5Hu69pzEeah",
  "key33": "dbiBuweHLxUfUCeHWD4jiA4NDQwuNoXZUGd91we561hw4UjhWJUgBDsMJTfKe5d6zuV8SSuXawsfnG2oJH8Cg5e",
  "key34": "2cEtWCRNPUYcxZCRaurQwq6xVe8h6u5RWpk2ZnXM8GaY7Cvz1w1h8nUmWog9sYeRQUczd7chofDR6EGbxFgUZiiC",
  "key35": "5tDrLsvo6ZieT4n3t9hzUmc58y8NVHdEVGSNfpduEjfdHxZPxoSC7J1r2GYho8y8RhZCecsAVth3AKQketxqTKRS",
  "key36": "2DWo9qrJxLquneVR1QqXypac6Dn6AW1ywMq7abwy5t2DQneT5rLp2aSLYUuezj8YWcc31BeBn8nA7gNKmHpAJMLS",
  "key37": "2hsq84Pi7XjQDpBBLzPayCpJKwa7okxcDi4RucFMam2CycPQT1wLos2G9VyVoK7CdMUoumLq7A4hZRTGXt2Sj9Lz",
  "key38": "6XRKwP9gc82pztuwe3RxKBiHs7zikCDMCU5wq84WMxhg6mVdJ2wytnp4aPxPMHKppGf1U6Niu5yqfb7L847sL5p",
  "key39": "2VmYU8VcDGKs5oGkUZ9UTWtCBeeP3v2CuyV4ub84P8HYpmPxSSnbE2TvpoL9bt65sQSetp7JBFgk6MfWoUvSLc6c",
  "key40": "4R3QPTcK7v96V2iJwVp6x1jLoGPimHDxj4cXn1WGNddkMZQwn7xBvHit5oP8eZWB8y1EhsypYwpan1yvTyUZYB3C",
  "key41": "2qwmr4ePQNd2j8DP8TMRKRX3aeB1Eephfe2ECtvsX7zWeuwtzRSUdYA8wTgGXT3uyoeC4LBYQMsgKMtm2XH11FwH",
  "key42": "3pVYpZqWQL3WyVCCamjs4mNnBV66A5S41k7PbPyMi5ZzgijdPhzmgLGkX1Q6U6WkxCuNQ9kVUEVRtAbCGw7uovBq",
  "key43": "4hXpobKcbBMTWpBUAkntfjjSW869Ls6cqTj7X242b9XjD74AGyZVkJ2KiLzSxktBKBxLMToSzW1PmCwsNEt124va",
  "key44": "4zAnJ1YaFu9dxMfCi88RQucJ6RZwNWJ5tqdGNp5bbUvqkEQpXZqVDPDWr4HguQyHWXfp7hSxTpd3YVxcYZMgqQCE",
  "key45": "5pfEpd4aQGHYsb7wbAtowFbLs2AyVnaruG7JstsCUB36joyXXuSd4Sj135w7Bkt68LtVLSUb9d4vVAEJ6zrDdewp",
  "key46": "2MezTkZc2CV8swCQkGBpnj3fzHNiQEYhFUu87CZbrcEjsdyYd84H5zuoscQH2qKZpyTrUFnvVKLWyq54R7zCmeib"
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
