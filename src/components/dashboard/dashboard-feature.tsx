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
    "5nf8XhmTfoYakN6chSfAhAtUtU4Qz9631VRh1NrukwSEQxdQWMWVS7qVM51penSg84EkFRK7mLc4qDsHb6BYym1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptUC3MfVDaFjjB9EJaFhmxTYkfdMDDjpMMrRuNJrJUydGobk8Avt7QfBMYDGBXX49jiabPR4tY9bNSUpMwKpLje",
  "key1": "56Rsatv483bJH5WSzXFJTXo19sfFKuCD4c9TTvGZGqNHQrdJ45jYvSQ5caUMyt35htLbpS7BhgnL5f5GWYWHRRzU",
  "key2": "47X3mX47VQm55pPSV7J6CoBYDWv6dLuBAoeDT4Tz3fGruAbxTyuKnefNjirmfyARSLL6hRnjrwcon6iMGXw553F4",
  "key3": "2GHvQk7hBtXuQtFbv3nTXwCpbbNsMHGsvzB2PQNuqhADUi7uMz3vMQmSypsmzwCBpwCMj4idTeEaFySoq5rk81Q1",
  "key4": "3FjUs2RQ9QBttBfAzeVTaVa8sH4nt6PU4cQWkBFrHKkbpzZZ9CbmUkBCipHMZFTLreNhrj4prWJvHmEKift8Djko",
  "key5": "GVbxqq7enpkKujUgNRDCvErjuqXrS9hCxJdUpQqLJXkxQeKGsBB4RpJQ8ZJGojj4m8LRrYe5aYqxvU1et59XEM3",
  "key6": "5vvgS6wgqdUPNFCSbhwdvHG6XzqSvGiNCENEGsvWu9GgDNV9cXVZedFqXYDv6ZXf3YgCe3drMFAoH58zkFJw2CzB",
  "key7": "3ndpYgAjf2xWsF45aFm2JamQiWyyAbSz2nH6rJhfbAH4FaGhni22VtpfRrQe8C7sQbUzzvgMiPSXBYz9PdoeKRmd",
  "key8": "4B8Bx4Qc29qYvwpgssE6DRnri62KBbbJXXiPWzcAG8U6SQdbnFHTxm3AJhbAvcVmDTUCUvKnP11t61kUxJBMQNnX",
  "key9": "ZR7bgUtigUk9goatBH3re4MkmE3Lvhh3nG5q6GtMMMXeqeiGZAYb7os7udZC7YpBTjXqavb3VpqTpwTV6CEBg8C",
  "key10": "4TKxfGB1T1sr7QAJ2t5KdDXZsADcMJVLfjgLv3WckSrAAorpsDE6LiRLimFLnMkVFSc6S8XPrPMYn7xrAUudztDD",
  "key11": "2REsmi61hHBW3LaKEU4RPitWQekLk6KJ8Hs5QxYy8f5ZxWhasMH6CfVG2Mkw2ToLsDNtXNoYiDFFMrudCPYMwaYk",
  "key12": "GTCRdAuhJaxM1XBmPpzi9yiXKpnaoNN1zhyjDttLiYtcMX5mASADP662sy6QnqDkmAHgcSU4VooTyYpu6wm2Seo",
  "key13": "52G31qH8YsHvZB9yfa6J8yB1GPTpyh7PtDHM6Dp6MShBWmPvc16fY54Sk3y21ofCiUj2dzhbVpTd8h4WE5tQpDKF",
  "key14": "nXW3y2nLG9HjSHMuUVwHmHpycz11GVNwHqfUNEupfTrdR1EdkHSY1XcbHr9x1jQ3nXE5s1PBNmSABnXsQDjT5ZK",
  "key15": "4UXunz89N1eKVHt2fXBvW9PM8hH2r5oNY9ypocMeiiH7YsYD6G3n1xWcsA3AGRV2E8WRFL1TB5GQxLpi6xt5habK",
  "key16": "4wEK6G3XRpcHsCVkHTkUSzNtZYFUyHT5suqsmUzr6ATctqqJDnNQm3mbjgbAgzG33N4eo6q6KpquhAbeKvaSV5GB",
  "key17": "54GyyenHZgp6TP4RdssfzSNbMs3uqbwMzMHqmjT3hL7L44mBs45BriGR9F2CXurU3sUVH8nXHoD37kGAJ56Xovuo",
  "key18": "4AbZD4VKcqLspdGdqzAKD5DHZFaep69r9tgNWCCCFX8Q98hj868BKB53k9YNKnKJFxKeSBLE4aCiGtaMzd6HmWT7",
  "key19": "RPBdmAfrWrbWnCKYpNMVjvQ3fSgj3Lt3a7BUWiHza1YfKgA8MXMmsWQVNKYETXi9PRivFrXAao152iaVZoVQipQ",
  "key20": "9mZVGxtgxKoa3vDxy6nZZrvQgfZsoUukY6sjJfzbx8SWre6DZrjipSfYYg68dF18CmkVBsFW7Hf5H5NhqG4ui9Z",
  "key21": "37TaCkTw8MB3faDGkhM7WVFaqjKQxYQ5cathnh57mvXiY18denWuSshsft4nwnMBvYsUx3b6Y1qYpdA14dMToARi",
  "key22": "3g69W3uEThp5etmV888UvKdjomonSfvk6RwRTzdHTQJzvbJg9cCVTage1W1PBNzZewZxcmzutkk1aJt99Kyz5pcf",
  "key23": "4isQWTz2t6cQsCLFEEb7oWSzcHXGuFn7fAUXY8cZPU7FScEVTkaDhZFxFKYdZ1kQdiXL8dGBXMkai5knN2RWuiAa",
  "key24": "4dkRzL3SvNuBC4eJQrv3eTFMGuUK1HXKDdeuXpRnYbLqKvMSZ65pivaTyGWG57agRj1eKVGAb6HdzNBvSAUEbzHu",
  "key25": "65ketL2RcjCoUX9W6GFuFjreRk9LxYncDrSdesZsLqgoeppUqePzmeLcjDX9icoUssVdSsAyuT1hRvMNsBW6wsXt",
  "key26": "4NQUeHGUBBDJ6NbVTojB8jN3Y3Cjx9uSuxmx5g3U1E5PafNsp82685ie7N5hVBpskxotWgwpHhdQdDrupzJtHyw7",
  "key27": "614ByCC7NZWMABaxRD19GRWZerKHfUFr6oTm7fWWMvLN6iP4qztjXvZ1kV9yQfzUtjkH8DZkKvGwc8pMhyTbeqo5",
  "key28": "u5zFbc5KvtAKYLJtLrv2svv8V5rrqit2vSC39nxwyFHX7hoo3w74yj1sGMFPwmpmDPA8eiFqDJL4fBRLEmtT5FK",
  "key29": "5QjZ9g2TUCm3v98ZYST9kAREhdvxgykHBub714DvRyqJxACongGCuyh5B8NfFXfBc4aV5Zj3ss3LspoxbEFVdcWg",
  "key30": "29CF1yaWVMZdPxwy3BSTb8ckbXLPc6AmR3f5zQqAvj3VpGvonJqPQUwDMkK9J2nFJvDx72ZBqErkATps86T6N5Cw",
  "key31": "27gy392zFsEyKTZdYDS1VoZsB5BLrNrrMrkpbgkkntx6r9e7BNrdEoGfkZgqoeUcnmWtWrVLT7GyPrrakvL76EdB",
  "key32": "P44HWW5r85hxLdXmgfLdyVhU8AcwaYNVqQJtAJHQ2RkGRW5ztpfzFNqS6rMaBcDyAkXHUKbD55eL75Fwh7KxSxm",
  "key33": "2htdkyxsiPK7vbpnXUGWpraXf43RhyJZR9h66QHTEDbd3aQcx4c15HNLZdSLroditntQNbRTpU16RBMFnSSo47tu",
  "key34": "3Dx6tkUBYz7K6Nmyd8RxaYQPFSdfQm5pQjWNyn4Pr2dDZ4phYcvzkEzsWFAsdN5TEA5gkyZzWcESUkBUTm3diTRj",
  "key35": "2M2X6gkTRyAwQSP9TiNBHFSqCBLBiKX8v7uoi5stu9NWhCiGcvyTG7EENgvEbME5AMnfDkiyfDss5ckgN9jb6h5k",
  "key36": "5Dngd6D15PSs1Y4FHwXGuMj6iBPTa1gS31oXtEG2VVqDymBVZNnuqxL19eeHiaV6gfeo7zzY2pK6hxnGJ1rcUn7y",
  "key37": "4KWWCJBewYN7vrk2YqsevSDQULfnxGYHu8xiXmSqcqZKfL26LAp6gJjVXcJAwxySHeFToDxrBufWMP921Kf1EVbP",
  "key38": "4Toi3wqMynVitmxTBuPAbWY5UJ5t1ejUu2Rp2gywZEo4u28rKkaGfANCZUJ5QnNdJQf6YudMdTLFx7h1odEjdXvL",
  "key39": "2MTspjHFbF6FTuZECxCuffLhFnNsBFXrCya5CuywUM1Xty3DrM6MzjPvFkDM3KLJqstqFLEHUvERM2p5WpMuUfv3",
  "key40": "4o7gq5znH4gEFJ6fP7J6sveMewvpmsi91HkMcWEQC3DzkwpuTBHKtSm1Qjdc8fDXPAmLMmkdUBV7Y6fLCs5Qn1Wf",
  "key41": "3qBqCETu6xSDBShaB73Aj5B8pjh645Rw7utUzNf5zJ6oQ3m8X8VpfbQU7GWsTr27QGWDTdhoGsBnvf3Sjez8wED8",
  "key42": "4WXgmZifcCZKGzpKFp7BbN1vgsfbxj9owYT4R4zijyj75V6s2ev3Pk6UGib3J4UK2Rtc4GZz2wocQxhSpbwMsX9Q",
  "key43": "3vtzpis7dfGNAYSXg3vfVwzyb8mtQofrYJeBUMKGCrcFQhjgR5Unfq7io4PBxGYie1kXNaTTk2uX7SirAee7bxTA"
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
