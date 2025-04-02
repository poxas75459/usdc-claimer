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
    "4yDY8SYZbKaY8smxtLqsBG3TDwACBKKCZbq8rNWX9dSd48UTBffpFra9Uquqye6eeSr5ad9mbG13bsTpTccs8XfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QbU45Lx3he613Cwkm7uiyKtkpw4q6bS5pTtmuKFwpgwJ6erCvcJmvWNGtUAWX5SyvnakGZj12ojT2D69GAWvS4",
  "key1": "4PPChLF3K6kkmxzuYZ3pnVWYouisDkFCK3NKwFRbJfTvSErEfKg8LYJBXSZRnqmqyEvUs4dbvCAmHoZxHhSrbxie",
  "key2": "2dCTvNkCrQNWY5qjmz7goKhxYMmtWL8sc8iAJw66BY75hjP1x1mYQtwvihBezXMzhvXobFWVYaMpWMZ1zEPMVxeR",
  "key3": "3SNaQh6eDEEggnCUnxeHcY8XMHcTVD85uPRrTb7fhizzU1btz4XJn8EJqTowyLvGVX7fpuWKf9FxGxnAoCWmwR2J",
  "key4": "conSPyXkgimpSTxEGMRR9M9Ahu7KwhVVTPKrgs2jaMXaAYNuh4BySBjfFJA4p5Puv1XrdwQxUz9eVCXok1HhTVG",
  "key5": "36NKLvntWgWgvZNUT4XBPtYh72T6ym9YV1DoF86Mrm5EdXWXHaUYnzdSunf92esqyvLRAE7xjPJkMjbRhmqjntmo",
  "key6": "2P6JsmbNtL4XHapzuSZZjLMRSMm8dwgHmXBZ7sTvskysQUN3qP3smTF5wZMujKhzYqAaN7oe4zCPReeaeN9qk2W",
  "key7": "PwcMdbDyzrHRah6ECNDSAEJtbgTw5Vs2ZG6RW4fBBPuwLy8FqQhks6y5biD3d43kYX6zFXqMYhEGh6zZJA3SDnf",
  "key8": "gULPakzSfMW7qRsvCFd8qXy77CwLc1eoGTeLi3w6u5WfC9e8eUmAoLfdueit1Tn2dzwpZDWimUAZsdoLNAz3Ym1",
  "key9": "2RKUBGfHEZnV7XjoQzGgLyzLurKJad6we4KJQpsNtg6SM59J6dddXzyfdkTPF43g4r19ysXNxQvbvVGos4fdMXv8",
  "key10": "2PQj2KL4XLsXMp6XUsfd2mpN59r9AEa33tYBRYyUEUkHkzB3CwgfDm4fuBTYVAYhe5uYRWQbR1iRz67fKJ7FwHwg",
  "key11": "3jTQARPes6BvpbKqbD3WoL4fjwQeuv9MDMWVBG8Bj4TzCaTVV9ozEZawvCY7RAVmPAo7hEoHqn3sHQZEwySigkLN",
  "key12": "2Deji19dF4LLW4qrweERTUPfRd5FNnrYiMAMRQVKyS2NQiAKJi1coDhDY4yAwSrc5ZAoZdgiq9BoiAfgmgnCd8K",
  "key13": "4dNz71QXVxMd8d4TUN779YHfWbvtQFWyk8JLAUTh9BFsqd9GsP5KMgivgVfpLXfdxykxCabewf9jaPCgnpWkjUbw",
  "key14": "49K26LcoScu9CtUAsgtemQ1S7ieTych5vYSvfimZd8Y5Aas46YJLVCM1RmxcKECjQJ9jDrPPFVoWh95bngn5FLDw",
  "key15": "QntthN4suEygGStUf9DwBen4yjnaDbuBvGC9AeC6pK3o5mRWrDsCfPcEyQR27b7EUwUcr7PUucuMjsYKSXhV5mg",
  "key16": "4m7PSWdNpJBJxjyyBT8aGG5XPptAu89xkW1oSuEoWCSDTEr9ay8Wa38FNVkVce9cS3eZQMg7GnRvCapRgnaiJHCk",
  "key17": "4x2UmjNcNdQuPvTBNvo9VaKbVp1AeDnkgyzSFgC7r8XzpAFz5EUf7SDJZvbkSfWyd1vuyrtWEXbJj7CEP5WFmYDE",
  "key18": "uGmSPxx7sts6Dk1PKpbh3Th17CMEywsCRcoUqGDo61kL5a2dK77X1M36sUKQP173JZUJePy9pMT2MPR6kWm7Jcm",
  "key19": "4TEjfQN6GdkFX2j42tHEJdVQfHuUeb67Voq1W5XL8XwLW6xeA3p1Kx7KbJqYHkNpbyZsTmuVPnhw9742i7drJTRX",
  "key20": "NR6XdBddkeN39wCZYoR4TvmGYQeVouHtWWk8fJBqwHUgRHqgma2n9MdNHvBnbhZANNwWdknubFHC8dUNbhocPfK",
  "key21": "3hAEgj7jztoigQ9PQ9fyxgkgcPWJkx4TBEXvztEDmKzgXfioKcoYCT7cVWV2684d2FQhouVN49FAyyjQSGKcN7tC",
  "key22": "5gNqHYMWpDEu8fZX92Y63f7gW35yrq5V69c537h24pjg4gtx9PvyFiepDzvLooJRMa8k4pqLiu1aUwniqbU9mPXX",
  "key23": "er7kuNftKFMDinJkJcqSmv417R48kxi9iaKwnXrSSdRVYjKJLypYiFdnWUeYQb9umqpugj8Gstbjntp64sA7ZNL",
  "key24": "5XYPuFQ86L2Cj48qReGczfXNGjBCdXLNP4Kzd315MdeLvy7QgznYWyD3Ey4b79D9v2uiFZUmQ8L5LVnatC27z1Ee",
  "key25": "4nkxh3y9Qojb8wh388qWz7qv8B7oU4awn1G6EQ1c7MMinnCNyPsGPGL6MDWZApHwdfyrADxdH62uRqM4CrTv5Jka",
  "key26": "5uhjztezMxVQLKDzcw8DkCYxNaDPVjk43phAzVi2LCHV9v47gdyangD5DENj7Jw5MqDYccRL2qtosc4Czv8JA18L",
  "key27": "5nqp2QMchTxnjGXaVAGb2Vh6fh1UkHk1F1yfndpHTcWP4tsrs3UT3dc7tTayvQdS8vrmHpiBKf37NbtKG9Wcrb53",
  "key28": "5LXm1LLK3kQ3T278Q4ACDa5G4WMqa4vJVuK3ybnkhwxhKebL3UxaYMGjCJ8RmFLJMkeDvM7nvexfSVFcX8hijGu",
  "key29": "2sm7Cj2EgfmP89mKJAeFZ7BUYsRT9Wtp2jbfkUFxsWhvxn2uwSjjnLysPn41f34apDXpf2f4mqAhG1PL9jEgHizL",
  "key30": "3kpDSRVbCZhDGyT5xhLAh8QN2qdGTMP7KJtJMc9by2F7tAfqvkN8zgAPy7WWj8LzAdfE7QpDsccfPjRTdcw2au48",
  "key31": "56q6XR37CmVUymXbPoTgGSMbg88voLjF9hbMxW1wVm5HDAN3Rmy7RxzQuoGH8vmvR7tUUPA98ezcDfc15Lz4fgZW",
  "key32": "2AEJUpcn6XFyETM4vmLiKao5GVCdzb4Xo7ucaV1KSXgxKWioJUgbSMe98ubffdvcfark9rf7Db8UCWB92r6vs5yK",
  "key33": "4GSW92eEvqh99w5scEUAGMLR2BjfDDAv8wLaQeGY1SW22TuaGWase9SCCeaJ8NN7ZEGafnkTHDkEokLz6rRYV3GX",
  "key34": "4Kcv4TQkNUmmRSnDrrkpjkvuYux4YXmNwHejrxhuQ1naV26Ka6JynvrhofkfqmguPWj3BZxhtUqoJWQpB9BYZvMx",
  "key35": "2qW2AJzHiVv74FVrPw9q4hi5aVwuV7Tnp8wXMc2mAutsfGukFtRsyNkPMBkTBFknHGbNe6VZRFQKHpGkWSN8s1LP",
  "key36": "2xZT7qsnGeq2ktJ4xsiyjqHg1ZHrULmkXZgEMQP95yRU3rt7aar8icX4VFHKF1KryQhERHxJ3iX1QdkFZ3B2WYtj",
  "key37": "3bAQ3eHUUQn959QNnmmRWe6CB3VmQ256U9xwEk7dyzKWheYAH9jBGmxqwkpwty3KcyF8FuHLmVLkzfKKiXfih2wA",
  "key38": "D6vozjKLfnLDNFNMiLWJuRQEpUcQDhKCm1xgotWPWr3Vg2VzkJ9vkE49ycvRMUbfsseA1GKYXn4ymEcH2wkLcS9",
  "key39": "5qWgZ31nzy6tM3PeJ98H2iw5381wKn2pSkJu9rfHKqjudXSueedvZZ3bUMM2ABXBoz5KzxEz1BD1XKxerEHj9UQe",
  "key40": "3QHSYcGH4jwAZ3kmiGKMFSr96B3fr8jWghR7Uv2wftYzxHL7EnbmurDviMLZpQMWNEuuouEY31UUgkCgwcmj6eoq",
  "key41": "3C6KHvS35MuBXCuyUHFPkiMZ15Wb2qKFmNPuWupdwHGppZJH9dZxBo4uMK1yAdqgc4MHSTa3bbsd44MonXjVrbXu",
  "key42": "3BVSE4xoK7SwPaL35b267rVw5XtwHkAtMbLWt7Q1kxAvxrT496KBWQB2uLdajr49n3jJ6bchKcWT7P2yCtpfE8Cw",
  "key43": "3xJS7UGFw8GxhbX6cS5SkdLyKeZBa9yntqDXJsDAfGpKJhGPxLKHu66nqRiMA4iLpUriWiusRVkvoSJw1i4QJXMB",
  "key44": "5Bvc93bwdHrztc4huP2rbQnGRNzr1GX7D9ebKW15S9q917Mid9ZnTb5Bhe9pmEnG3zqWhpV1yarSRiQbj1KtHUtw",
  "key45": "4rwQK2uo7noF9BsMnU3p3vVRYdMmaC9kUp8XtCF47MWkAG4azgtjgKi6g5BHzyfYQ9zcBRuQ7PBeQKaMjQuFX8kG",
  "key46": "4VTyhzdzzqRJVELiiZJKmM4g8Bb7U61A5pbhd6yhYyzxpZsRrWmg6hF82Brg8wuKAWYMXwEJHxYZyJmV1Zj9rL3H"
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
