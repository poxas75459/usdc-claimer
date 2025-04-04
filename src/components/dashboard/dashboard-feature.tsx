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
    "5PbEMV9yTGNN72u4iFJftiBLrvKFy7oj5VNsoxcdDJFenAAXMfdJuAwQtrYWEdRwu93FLLzU9JrKh3Nq8JTnmFZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUeo7r6N7qaN4rsj78KA54gibUP7D4s68ztPwTo9bVKenEFYhtMRVX6GtKCFAHutmVG18JiMNpsR6p8Rs5iczXr",
  "key1": "22SmmeuPmQfmVhQE11gfa5C1cSxucZ2n8YBmyqKnyZkysFYbcZ6FgPMAwtqnB9UYB9o4ttgiGkUvDrLSisCHyD5K",
  "key2": "4b5NkwGZdu72kscRSxMK7Ruv2WrPQXmvFdQ9C8wVSuyHHKgFXatTPa5Hq4SynqhmWF2TebSkTwFrafZwTRVjhnKK",
  "key3": "365hxMXCFrDjyTGVUmRP818vqqNHswfo3sxEh59EkozmaXexZZrinwp4GcT7i5dT1LPGJVFjjrjeJuzQkiESi1eg",
  "key4": "61RXQ5msW8nT27Vq7jCHvK9J7cPjxoeLuNgFr8NeX9c17wx3NjQWEuXJh2avxFCSy3jAAPoALDpQzgRrA8P5NrZ3",
  "key5": "hDHjdAHv4MaxuoSqNdWgJR1HZyUj4FX93hGRkqiYjy3mbovhSMUqJ6b9azxPQQdGJatn4LeaGrgf4d8pUdHsj5i",
  "key6": "4Th12LxLxCrehti4tvX94wU7RjBW8VR9hRJKGYsgZr9sLRGL4sNCg8a7nHxjm2RAdB3Rq7nPxsLqjSGKPXpJqXWk",
  "key7": "26q8YhoCR9gzBXKjDzabWuwVxH5p8YuLV3FgyzpSBYKLNBBAQHL65tSSHXyD5jYrseYaedStCNhmozvDHGqPPV8T",
  "key8": "5CAcj9PmiThD4nKUPB231T4LLC24UCEh1XK6wCFkaWJ5cMmU3H6K288WZCTFeEjwMcb1CXjaW38A1ZCu3ursDUih",
  "key9": "HzUYTLCBWcoUJCfb76XPrajjnmE12h5LCqeaepsidH2F2v9iR6jQxfcVPFjxBudnrML49hzPeiZ1NsYeiQMENpg",
  "key10": "61mpJFiUMc7W5pHvARwcJ7xLy9jvwLt2iQHvcxwFjVvUjYmAr54AMqqESjMbNVkGgrT274BdA4pHbFQvk3EXXmvs",
  "key11": "3hEV191xeyVDqEwKoyqXQvAwFFGbvkdpgYNG3RrriHC8XRr8S4xxgzSYW1fNPsJAMTGoCm7dc1uDx46TqPWphKCb",
  "key12": "2pDbfqJLCMvcX8sYAKyZoa7dqXyNcqE4dh817uVmbx94z9NYCxYhbhnPWq7Nx6XDA9R2K2SUTNY7qNhiAXnDjwBk",
  "key13": "23CZv8V9P7SDkRToSJt1dxJDnvA9ZE1nuoaHc2hJ9mUwtNCxSWAaig67TkTj4y2Q8mH4rduZMZwLQxQE1TjCHFox",
  "key14": "2ojmgvPnP8Peu91ZG9CD3kjn581cAiBfNxpDfDvLY45FdPM7odtfUqT5dZ7yN5cKpsTKhAysuCsUNVHAahB25pBS",
  "key15": "ZAy9pdG3hZjNRWijWSHdUkb44X2g1wfNC4N5rrGKX2GAa119fwWFakuDYpSeXBzDdRgwbzJvQcd6tML3fHCTVq3",
  "key16": "2XLXGVGi1Qxad6dBbYF8vKR3QHyJ9KS9YcCJxmrJv9gP8fcNjWkdBRUj8TKuHBWBXrwfBimbYh9MYCBRTKV4j4gV",
  "key17": "4hkYQZRYYcjSnu11gSicsuBLN8fpLPVEHmAjjSKm3Nb7FKdsy5CW4ym5wDREY5qaWXKatbdhVTAV3HdSLqgVWj57",
  "key18": "57ia3wyRfYwvwm8f8ZLY8J2xfVgqZAoiFnieTstnWJ9qEqxhYqGdGHn4kbpqF246WGMPAogMmPKBmSRgxfqZr9HG",
  "key19": "56LYNzADBdVwFzq7zNYKRReQzibwtGV2mWamrpJ6VjoNUMPx3S3jZVrq3t5HPqn4wKjCHmCZ3DgiuK86phjyf69U",
  "key20": "3pAuEt9NozeMBsReXzDRHH2fNBmmLQuoFSqmCiA45aECVe3YhtooVFpUpUnjekTchwHN8HM7qW3tyXi7Xrq1NE9k",
  "key21": "4Pn7N5vh6KNLjdvDo6REgCdP6AT73iXBv64W7pUnKQfpMcXcLuoVN8geajwAdPPAPsA7CUUYkd3MJLxfKn6ebUAU",
  "key22": "cgUnaU7uWjh7oV48JvgDTmdPYqZ5QDfWfZWBfdZ5Tym23ax6H8y2qK9k5DosbPZDxpVScP4H3C13fuhug4MuBGy",
  "key23": "36oWHTSqFr4h75JpoCVXdckQaW1vsunbCfdTvBM3YeQEEgm1arieE7HGs3MBLHMPEwNN2t1xXPsJ5FWJ62F9hn29",
  "key24": "24gEBAbUnWhBse8yo4uxuuj8Jedo1pxgKuA1JrcanNQdo3iFKYSPtdTUyL8tc2brGC8ArD4fnP5sydf5V65CbytU",
  "key25": "4HappeGBfeXavgck7Ygugr68onRn9eyeQkhKHgPBTwNupRf6ySc4qnkomfQgWAwxbPuozG2WV2xZKHhenybSctXH",
  "key26": "c8PoAU6M2YS1YtnL5CDA3pUViiNDRuxuV8kYEoZL5nwxvUnGpsgqF3DgBKDNqjSm1JSg4RNmWBX8WHXPLvdCEQx",
  "key27": "57Z3WPyqbZyuyvNePhCPMJufTLRPEzBTKdjCLetQ5TivtZyb3BxdQdAHz3u5HeVwAXHSahmdq6bjDhxKbx9fy298",
  "key28": "Wz2FXhtnYroHxAGYjUq8UdrqFiusLHQR2JETGjRuYK3ctEGxVZF66bg1uKD4pa4Re5A1Mh4v3J8H2eXTUNA1Yf6",
  "key29": "53tEFMJJdYg1b7u54rzcpNBndTfqTG9SW8PBi3mUXtpZTWAAzN9RyTNEGW1PQgNQbbTUPaFtKZDiWPuYpGrZRjfb",
  "key30": "5Up9AYf4KHtcqdZYRyG66ufc2f4ngA1W9AaQ7GmQdpjeHv23hPQC4JPbdgAmqR2dB7EtXubvdEVAee9J8iiPYaf6",
  "key31": "iLViiKifLvBXGM7jfMvKpta5VK3pSesEzhmYQfZKcFjUqNvWSXd7AxwSwbQSa8m32z6R3ARxQvP8uY3kMDrGVdh",
  "key32": "3PYtpWr3vpgwCPDP9qciSvJ4HxEjDuFXf3rieAchELbPLPWNFrKeDuapUhTfGib5f6wUEWeF8KNgHfFaJYVMKG86",
  "key33": "3SzPuSTxMci2D2xYnFK9kyygWZDrej4W1MGLfjsFPWqF8KCJFUzCND5N7cc1e7LrXFNY6Gh7UJcTAub9NMUZ12aH",
  "key34": "46eYuWzYA7px2UVKx1y74EiBLkUsfaDyHmTxmAXgzW4kZt58QVrFm3hwaq1Qx1kuyfKT56QmrkF1qtdfTZbmYxZ7",
  "key35": "4hJcAYsoMR1dHCqQVADtXRBYMMhDgjHmqa3CcCTEjsgSHV83NpCtvHwexG9qSWttozt3y7FX3uAhh6iYbd7Wcj3V",
  "key36": "YkDE7nsxFwvMoEUvHLTY8PzuCE5dDaxYNU59bZbX1xgKUq53EAxp7HQDcvSLpxt1nqczd2XwJtmNrEsGgmjm4rh",
  "key37": "3b3Z7Z6P3pgKCH6a41vnYrx9w87S5afygoHSx9Ygj1nU4bhVswjzw4GcxbfbA2XdHNDSJbEvbHqBzCSJGt4QiKPY",
  "key38": "4gatUDSqRS2a7eRsEvR6ZFwRBJZ168EGpYXsfhrUH5RneGuKSDnonSF4vzbLvXunDF8SDn9skK8ZLwY12r9v9QuA",
  "key39": "5f1HqEzULpL7kYEaJjvcgQTB7gNcXdGY9qhQG6sasGTeW43Y5K8xAnpG8V4DJETqXpqPuR1h5Ut5kdDFqDoxfNpu",
  "key40": "46FVBrfw5cUgfozX7NNerC7yb4zBdSfw7TKFqgR6HGx233dL6ZTAS8Y7toySCLgMQ4sEy9a94bht581vnZnHDoVz",
  "key41": "4dSaDo5MyPCgrhfsQNXYh5iCzU2c1Q2sae6dp9RgEsnuo4vw6BB4dgGu68PFuu5iPa2xiW2iCWWDhu2YoBj8FR7f",
  "key42": "64xXqy4FFnpnBweMctpC57DPRH8a2d5c8fgZYFzwdzeDGgzMJbFJecziZ5aZhP7qTKcPNmxV8pLUsesiBgvF41fd",
  "key43": "5o28AeVL2pBmL6jDuh69aofnXPW74LtBAHaVBxF3AZsmZppKGBUyUARQhYdTvDGecxizZgo56P1Vy2qvH6ZWnf4f",
  "key44": "55U6u5jsEvjZAcSEYhFbGQibGoyVXctjHdG9gApXBacSfgEMomW4ms8wMD7r5Z6FhG3YPJjuVUNd4bW6KteK96bA",
  "key45": "5ySfPWFMYXd6qSDPLZwSpNmWtjeoDPhu7AL8cKcjfhYw7ZR2jGv2fzb2rp2LJQhjxAtcUqxTfqvkoMCRZ924gL5p",
  "key46": "5i39Uq6hTzxxNrSZCkxnnrW3fxqtx7u6tocumhSRyzgjjLeAXVLZvXeM7Q5zUXD8xVaFEWEfHepLe7LQUZKXS5tB",
  "key47": "LeF1vsRg7exAU1jCZ4dtuB92e1mQMaDJQX8AntZDR3ki8nE1HukRQUBgjy69vyr66mAa1tCTjxLxhdMWQYSpxdU",
  "key48": "2RqYDP9q6TgxApQedPsRpAsyozrZiQUEZuXZPQbvrLahSxXd2bxK2ZEtww1ij7sYa4j1JgacEK9ZB1NtxQJy9H5z",
  "key49": "24XFQRSCp9Kk2pek69M2s9jEqvjsWp6HEvhXSW22oEkVVp7bZMMYRQeVUkhM7RbxxemyYoehmGaQESLRLALexxrP"
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
