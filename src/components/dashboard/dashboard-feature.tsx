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
    "43rxFRLJ9g1Y4RVuBgJs4fU75zQPfkG8jFj6LCUdPUoqsTrxmvVX8m6zRTUQPgKLgPtEJza9GmR8xf34tqKEhmdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YapZ1zL34wwPfFnjdsv6DWMKwE8u8LXL7o5w8VHpRav7FmbN7Kb9ekP6riraNbGA7tE99ciBMAjKHXLrWdcqpTs",
  "key1": "3WWWmHuuCzAjNGV258hQQBqaGnFBBeycXUm74c1Qe36BV2aM1wkXiGwm7KkSwNR3NMin2F9J3PNNGrRfw3cwx3hh",
  "key2": "2U31FXXKLhEePcPA3DfEK9FrYi7GHPEXtbMhRTTRpwriCUFfb47vsagAkFhF6reinqa7YJKaVknc1i6R7vm5RtTH",
  "key3": "2Nf1i6NYKewKgJKnidVk912fd2iRjq6rCi8XGoqiQEJoKazkm2a8WNWfQNXtpUaRDCp1nir2c3zg2MgToNFNBqvS",
  "key4": "5fqMbTBfWtZQGh4a8BN2LiZxgQt2h5L6ghPxg7h86LbX2Tp6GAfx5skh5ESCqozfnxzvWZgDNNgqEXkwzbActkFq",
  "key5": "2fTKmsFefY1VehYZfJS6SJB9iZbDB3GDJwXdYb1Kz9egQ5bKgsqtT1uK6tMTxab8o8T3puQVBWamqVzhvY3SWTEX",
  "key6": "3RLtz96SFAYEyddhSQUKcQhq61CHSaaShjsFuYkvu34EAEiY68MxkcvSqQV8MzU8ZVU23UEMdiViWUsPJgkTNNAt",
  "key7": "5VKy9RFeEgeieZJJj9GJQxTDTS18CrdXV4ffChXEYn3tjCXMTfkAL2JLcCP3WoPddSVT1cQVrLysHjVutSZDwsm5",
  "key8": "5p1QJaEcuGd3D7VcbYePyWLeUoHyB6tMKEGMcg9EyyGdBankAqq9YabpoSeHBM9uWE6wAbDMnxPG9fCJNhmE8pNm",
  "key9": "3iTngT5r2aoZpGkB3sUitzZmmLPt2pZXBn36bsgi8CHn7V6hjWZuk4xk9gKSyVZn52YXA6cTHRkFiQM1EriJ5hHq",
  "key10": "4iMkWzvNN5QayVmQKy656ZBMCJicRoaUmhAFpqJcUWA7qFWZwszro8SZKSznhYGGtcAqHARNtHRq66P9cr9G2oLx",
  "key11": "3TQDM13nZ9ybGB1MQk7yWqtRBazz8SjWMEEr4tyiruuiTVtTz9fqiBJgE5tmK8C19F1AfTuQrRXggiMfegorY3Cn",
  "key12": "3Nbx1qihgpfkVpSYjCrJi2xmpnsiiAdvqNr95oHP7HTt3QB8bfMZbhxLFQgWV9uWRGEHcBdximhmgkEDAY3BPAxq",
  "key13": "PnSRFt5KBro96MQPA6cjP1SqL2DiiqvyLq9Gpc2tFVeXbMoCVLgPoJ9d9dAH8NUQ7anwZS6oAueqiUEsrzTRmR8",
  "key14": "RHCjKBcVJDGx8AXxQnNLhERqPvWLTArTAwb9QQNmMc2Ur478mjGh2WS6qxdPeCv8nxiRa5LD9NumMqkETuMEXRU",
  "key15": "4Y8iHg6C3HRn5ghj5CYzjwB6jE3kqcaHT5JLBMCsMAWwVwuj6iytT9ycEr8N1Pa5gL9JqiWiwJZ9yqBNmFpUNTiV",
  "key16": "uJNJo2xLcAiRt38tchx6M63mMNLk4YDTsF7bcywmEfSX21EJ4c5HnBfcvwyWewuqkHCZ3Lm2Tw3XenFQYbHrt4d",
  "key17": "4ibwiMrgpuCiqqKLnouUbQ9y9yXFfnTP66rAJWjLCdgkWAAKDo9sUBGbQqQG3e6WvYB2kV14MZAAQ823oJGHWRmw",
  "key18": "nm1LjcpK5Ex5sfaKgY8NKrKcsajCzBnGHTAR47biuUQ9FpyR875FYuZpt1fArkz8FbEvTqTNK2XbCGQADnpdixQ",
  "key19": "FuT2NTrjWcn5W4M2HZwZ5oVch9f1qRRQMsBm9w26EzXZqFaYqGT18r6iSXBwXTKSSyeLcbPdAy4ns92UiFTaETG",
  "key20": "512NCWa42qygx6xtcNc5AKvDbWR4EtYtVkyZjjKcmTBofzWjDEqz3HHBnf4ErMZDb9svQE2qo3pjDqavopW5AgmK",
  "key21": "PuatAVL9jRTYwVzZGR5yXsW87tCg7crv4sqGD2kSaHgzh6F5dbQxYiBmU3BphPbdZVR3cDcC9fVxcSNQL95opm1",
  "key22": "4aQEXGBn9VSKYk2QRsX9VvcsJiGJndFfrL2gBF1iDJyR8Lqvk5fQkr28LFVVL8mWBJ32zSyvssGPEfSKpUTZxXPx",
  "key23": "2QsExFMK141UAA1TgX7jRM72ThaqJqHwt29xBvkirs4XjzLqRLRsjGxqfCK5WU97CLeUAweXYsJdG9nikyA2TPQQ",
  "key24": "4e7sQyAggw51y81YvSitfT92ZacHv6Gn1XGsBvqYtNDHCAWGyUH13uf4v7pBBqWhyVLX5o6TNSHbga8xUjp4WCGj",
  "key25": "2FtTLFgVaGnCsAokbbjFRbazKVbS5P5FmhEdM2QeEiV1rtbjAMQycxizCvK3tNGWGovDKXzLqfSySF2eJ8SGJP5e",
  "key26": "5fHhckfGRMfjSHzLozFWCtMx57Bum9QdMJAFWHE2ts8NqCFnKqqquufV9qipwaC5CKEhfr7ZE6Kxmx94A7ALPk2K",
  "key27": "5tTRhdAkAeZ1x7uZcnG3xdoMXJTXvViRH9zohP8ZCWLnitBA6RjZW1SWbWug5cdvZTzKi4LpPBHYwJvbG5ZHiNiW",
  "key28": "4uJYt7upWTfV7gGj6aUPDQhNuHZgJFvCqev6bMFj44Pe6R2BHtWbbM3gvpf2G1m6DS5CeYx2ZKsSSQVuKFENPod2",
  "key29": "54ErkuJBdUSDiRsXxMCuLrASpfQqwmjwWGiJo3asLZFT5reg1UVZ4Em4V2VTaWMS2QXV4GgadpCwmJcJc6JzkJz",
  "key30": "zrZxNJEDDqqRkg8TVrCatjPH7paPG4bgigmha6imZu8qkEyzApTDcZ7i5rwHe1gg1FAJ7ihmmHovZkjeaQiajUV",
  "key31": "2s8RczKV2W3KHCDLYS3sWqWaCMXnGR7HCir4qKURtudM4VkzUiEjoec6JQLKtoKHB4EVK57Wwg9LhNNmzp643neW",
  "key32": "2nyH3d1wgoe9X4CFX9EWbQ1q5LtUakSHbcXC4snBKJwuYKysTgvuWLEiqaktYbM3WBzFHMMYdhPSiA5FYuuekLdD",
  "key33": "3jstES9FQt1uqMmKA8q1sYinfEcA2qwfRW2zAE4UWZfHyUpLbnnXKJ3Fq5m7y425MftARUb3CnQQSquYoN8PkJ3W",
  "key34": "YwRq9Kb5TQtbRDZVFkx19JUshivrAVt9GvrYidqg2yexGiycj3W9tDgx5a4CJ5BCz8J8Q9m339tMq6kqSJghYWQ",
  "key35": "4XmH9ANQhmsHrr4uHDf9qpMgFefHV3cdkgHwYCb38uQNeodXELwFg6ob7RVhj3U5qjKH5KpS2qZkM24PNJpcwfHh",
  "key36": "zHQbAkd4xuFg3evuLWSWZg3naYTyTw2CVedU2mizyHTcSdDswGA4Bqd1acZUDuZYyxZKaxuPgJU4NQWxB91jpQF",
  "key37": "27kqk7RvUaDXTNRnNPpDagYUpb84ugfrBqaVRnmogJsyFXmmYsLMc4oS9W21LdpmoyYWNz7WMirruJJSUa7fyLvK",
  "key38": "kVmZykSKawgwhrSN8S2pSvkFNVpJbvEdzDiymTsccvfxHJ7VjBxBjNtn1hCdFTJEdmsY9RJK9ZuZKnd2BZgwuHV",
  "key39": "44xyY28SFtgW2N6mtuhJA1d52JxdgQS3qMdYDvrdxAUQ66XiJu988WnbW95HVXhFt8SLms1CsdG5YaLXNuPofBiN",
  "key40": "2mKDXjEm5di18iGv3gswUDcSQSrKwmJi2Y7acu2ByaD5SCdyukAweu7ZMkJgTe4M1zKZYVrrv3QgLLBhTHPp2HTG",
  "key41": "4dBspXVQDAYzeYTdxYSc252T1zS9VayZFL3rDYr1eXm9n4BadoZ1jUpDQPs8qRvZdEmdU9zcAP8LS9QcBsdhPkVd",
  "key42": "49p9z8huaRvQ9X6BXYYok1cDN1Qd6mE18utTyFbg3GxgssGcNGZXH9P7E2jbZb4fCWq5CnN5TCfPw5D8DwSTkpB",
  "key43": "5bzTLW4faNxxi3aD3k9keCiNu5PgiSGmmxaWCVeLt4TiwEHnqbjkxf8pxA9j9QhbTwsCmb8WS2MeLAJGSUVecFuz",
  "key44": "2nWDa7JGiusd2dkAWTJyTaDEcCAgxkyXen4PnBhvX4ijmD4c3wV2boKumf1dPz8SQCdCqBayUNStaim7Cgj9Cxpi",
  "key45": "3zGSJfmYTEQM1DcYX5LCatS4HthPEtqHJAqw5zucFPUQ9u7Ebe45X3ND8Ye4QaQshoV9A5T5pMEeBxRuCqofiSvk",
  "key46": "3dEdNLdNX3mWzyUoJyuCvTA9E4kWuiwDFsNkesgF76435ZxSRUrF6tScxhy4u7bPwqvwXvJQX8awmoNqj69v2L8r"
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
