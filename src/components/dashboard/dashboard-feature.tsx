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
    "51uYgGqKFZDv6J6iEawPiMQwQLazzJQ87WDEMksYUKc2hzNLGUbgkbjRdHeQsargPT4gqLMUAzUNrgu7mxu92cQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GCGYoXn3uZNLq1uZqbkH48oEtTvjwXWuREY1pYppxRuKW26WqFPwD1aAzTmMnpYX7Bsia67q4WTB3hjNjyVD9AJ",
  "key1": "39NVhDGE8XoMWbkq2t8gppMRJs8sbywKrMsF4DcyLyRVxyXDyMwBE7yGawTDJNHsRz2cNi1q3qXxA7TjgXPDubGv",
  "key2": "2MKo4Lt3BD5W4hjGER6byeJ2F1nhiTA3x5efAp3jVE8JAp8Nn5x4hXEEuEbzQJA2h3tBMep3geh8xCk3wFq273gk",
  "key3": "5cWeg9YmsqP7uANr1HrFXG7oWFFaEUZsjGgwUpoDy3pTeBjuUdfUVM16VdY4Dbn7kLYDmZtpAhdnDQroAfJDrxRQ",
  "key4": "3KnApXbSMdD89681nstSFCfG3tRNG2nEnDQW6MUrGpLSMgJPG8Ay3nD4Fmn36HBuyuvtWBEF5eoAfx1SCdDRJjfk",
  "key5": "598FDT92fdeSMP6t7mESywPigMQEQMVvU52FSRrizVsBEP4eY1KeVqrMAkyGupKvFwDnxxZXrzEK2eZVmbvgSt7b",
  "key6": "5UcVqRVFR6j3746UqDQKbnowWB8jAnLhxA9yuH6xKFYbwWAQaxg9x9SFNCq4AgMBAGXqqRov3HBPzWiTtLqe7vrC",
  "key7": "2noBbLvRCaGYA8UPfhxq9TkkWVvymb4ZqE5QFB7JRarEJEZLEC1Wr3RS3BBDycFipC1YfDhMdSznwcbGRiny3VKc",
  "key8": "63TJzWMeL7zmgmpPDjRTUcSPHuiQ34cDggw27Bct5LwHNTCryLZZ7Qnf4mYyTMVAtKu4HckBMHwt1snHS8ZsxJMG",
  "key9": "5m6GXRsMH8zYnNm4sxw3R2wxcbF6Ti1jPYAgX4tZ6J3zqaXJo6AXLG79CB4LzqboECv7dhMFDXGFVkAwqb8HJbKK",
  "key10": "3CxK2KLeHGzo9pqKQXgjNpjPxumCZrcb9XQp3Ref5hJW3YYoRwy2fbJoqLmbD6CDbWBjD2gBdCqaht3GKc4nCxoG",
  "key11": "C69ZnJDHCn9aVnu8SRSjaDnfN2UrfnAzSnJAZLfCvHFgJ6v11R3yHFvC1Vg8Yz1yTRk74NHZjudtGKHoPvSHkuW",
  "key12": "3awAPrzVSFSVmMZxj4qLcedkF4Mvh14vqWrMRGpQGUGwbETYhipVyLPhwHCXft3wM5sHZhGcLx4eaMwL7awpK2ux",
  "key13": "5HzgmYSYFRKmX4NyERNDijfVUbdd8HdRskws2bfyHh2MrAkNR8beYmuMgZ6Zj5ZvWdVzNmKDBzzXJ9VkbHCv6X3i",
  "key14": "2Ep1VxKhe5gbzWnvLe4Lmyn3y8yN6KCkE3kx7JC9S2xaAqmvTDJeQAf2umVNoBykEhyW96sY7fuT4rkyf4KncQP6",
  "key15": "62b4qx4CJCg98Q1zuiHBBVgCdU9fckBvRxWkVmtviQVDBzZJheGD8DsWf2moVhdCiLLoiwyQNR3wVs6ge8xmQBzH",
  "key16": "3NFdvjUn4cYTULLY6aS58XK9kwo9RMTtsFmtTDY6CMzuNSHieZhF3SidDV4M9f6HGWBgv2gbYMtg3vcCFkxPW6C7",
  "key17": "41tn6NWHaFiz7q3oFRe43Yvqf84VCw2wQyDAEtQasexqg2EBZFCr3C6gkkdNK3mZbxWg7VyoLchR7XR3Zt9W7vmw",
  "key18": "WpSBSMJGLqdhoZLsTp2RuMjzat6pa1Y2B2rfgp2a3SStQRGJMrJN3oQQxHbxsNiBLevd4nTviYXydXtefR1sXrr",
  "key19": "RRWqWhmjutSRhAKEwZVEXVBU3X9PenJM9uHKs9bQy9kDe8r4i9FYETk8mSAndUZjS9MXtpkUKTZvgspjDrEuc1F",
  "key20": "QYnFBvCMgMQoHexeDe92Y5VHnQ8qmAaXw4Wst4tUkFKRNAjQypJHR8AhUjAuVBeN4wjCudNGotFM39krHP6AxM3",
  "key21": "4QcDMJ7PWemc2fm7gD8PVsDgKAhtQsrbwwaXYMc8y34KkKeiK25PnhnAKMqky7qPqDVSJ1ptunZCmwdWJsDyzfm5",
  "key22": "52KNtNvVHLBcktBL5fSPcm94rn53uBrAucsdmkCCfLRoU4RzZzJpNbfdMiN5sDgErkmyMworKYSQWLuBuBrD3PtU",
  "key23": "3epcd4Y4W8xXfdctn833uWMi1CSTMPfAtg5JAR94LMZEK5QouQaudTYkZwgP1ApSthpgEoPHQJtX9UNyzbjrNv9C",
  "key24": "5xf8DHJXeTr1so7KjYdcAdZPV3BZATVNuNFDtyJGuy65Y2zQGNujN7sUM76MzynvHJWFZL5HaASHxxpMN5iGcNmZ",
  "key25": "2FhbRFdupWvbewWgJixZD47SggfdV6izxyUX1ZhzX7ph59jF1H5Erb8K3TUBwKSopFtJaNbZRTjL5UahtenHzQYS",
  "key26": "5sM6XSAHEn1J1EnjQ6HNqmgnJCequaJLrsVUGg2NkB5NCDoQcVt4Xu6X2BTTy9WG4kRZ7htjr4LrBQ7UPfTyAej9",
  "key27": "o15U4csMMrHY6pzryKqKZ5sfQrmQFYgnatfZzj3V1ZfxcSwVPifbzc71GkwHuTwj3Jx9XCxP2EVvdg3bUt2AkKY",
  "key28": "qRcseBsUggEss3dYrbxHWf2o7cA4DLcQu8xRRjJ6a96meQVeCP9HfGKyd1rd8CZVRWjPEcnVXavR7HRTuGfexqA",
  "key29": "5rg1Pi5zNZvVUbhuPvUMWRDhThj1Es6ic9M31XUE39fLcuQbqUqrPHKs46fVG7nr4VT3gzhjEFT3CUZ6ZxisEFCq",
  "key30": "2dx2SN6TXcmK5xvgfRpuX5M7gyS4gewJ8aqWrRNqQmW9zgBEnDDNJkNFEk88cd7ooo1gtV9GjKKio9xBehfQkrUb",
  "key31": "3gMjYafMEG95qyszRBtoPuFkshzQUL3zLuYcfGQJfDRPymUHwEvfrUC3BPKs7neG1Eo3BLSNCoZ6oG2n6YPEE4Cc",
  "key32": "3jjJxdVsY6MDm9ScczNdno54XK6G1m35jqmY4YkZ6UXZ4q9VG2M7XKbThvmBx7VqKtRhXTg6F6nQTKkuADJpSmF7",
  "key33": "4BWrxVyXVfvR34ZwGjBAHncNwXvrSEHbYhkUhkQLuqtJPQsXduSVkqcijkuAEg7svdTqje2RKXbp7u1E2tEDt46G",
  "key34": "3WVm4TK7aXqpTcKByk647euUEUL2nAYUko3wZSkH7Yua98K3HjFqQrtSCAjjTJkW4KFezJ1Ja9pF9eERZANyC5hz",
  "key35": "2JdCeXhDoXP79MP37MNFf56uxrx4FEABXWT46J2y7vGLaqLcPhj6ZxtBCV8RzTMo2HaNgWNgLH8WF1hG9GYHmeAV",
  "key36": "28iEQTrJ423YCaMzQzMBFkVrSZhbzi1yzc4ETenGtuhdpBsQG9u885SBM4QzAHBxV7DnK21adKGoEKPLJe95A9n7",
  "key37": "64ThVdnE8Tc2Xve4dGhyQNmUXzov2nc6i6F1wicuExsqauN4xMbupWPyzmq58CANu3AFjyd29m9pBV7etaE6nEJQ",
  "key38": "4ba6BYsxugiuN91pbdeucHGk322D6TrFqR6fWDisVvEuXedDrR7tQwcYYuT9KnayDaHL6okjR7zViwNFw89373Dp",
  "key39": "4PcXTRSUCaepXR8cj5DCJc1gSqCwUThpBPNAeoG1YobdV4LdrU97YcT9xqATqhB93Sk6LPRS2q7wHeDfZJQkVHft",
  "key40": "2YwfXwfW4P3578xTQRzTbQc1hhF91WMqZT6LmqHBSF2gCY5hHoeqkg7UjPkh1SJouf1FWKCte9mW3b7F8iFm2TZt",
  "key41": "5iui3HmrsyWtTxKXFDsimVt3DRj15udqcauV6DFrWd4X28Jz6Yd41CfdLhtVQenfDas13UWYnJAuL9xrgWBkpUyq",
  "key42": "3cwyvZwAYHqe4ELL82FoHs1Gtigvk5G8EL1Tyy2M5HJCLS5qPhnCactiZDUdzSaLLMzC28UmhEXudLvhf22emF6j",
  "key43": "2JbBW85yrR1NRfPqFM2if9DM7wF4G8FqhyYmSu1gUNEMQ5E1nMEtBqVrYVNUQ8MP4UezK9rCzJywh7RQZ1x1BY4M",
  "key44": "4mrjdPR68hpGfxn2qxfQpFCcNivqtVntjFJ39KBrHH1vLiekcS7hr2TpPxFbLhStrpXJyFkpXSmTd558nXcHTgze",
  "key45": "3C4HumdtyC5KPRg8Ty2Aa5xWBkoEoJUCLi3NDWJfwQ3AnnLWbVDYSJMpt4seaayLW2Co2mYXd796GVXooXtNzKMb",
  "key46": "wKACHWQYvZRzkoChYNf2qGjx7aMRd5kbfr53qZAGGb9iPYKZ6RqChBGbyWRrq8LARfNY2ZNMuumX32r7HmrQueu",
  "key47": "3f3Wnj2C4Fwt15kgPmyNRxV64NpRfPV8FDs6s7HuCDjGx15pnJ8Z95PiHeY7HVa1sgpekF4kZv5uZGe8QQ92sibs",
  "key48": "52AbNiQwCrNRzbMoL4Ak3pmkUvzxXrF2LKLVNrodkZUVRm3Fzg4yBRTsbTBXevRryDtG7Fnam9d8p21g5JTx45xQ",
  "key49": "4wNpzocF5oHpzuGBRcpSynJsRKy4MZgZKzbnhptA8m9s98Gtuwxyc7Npyp1WgB1XLMP1LrDiPoLJW6vdizWi4rYH"
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
