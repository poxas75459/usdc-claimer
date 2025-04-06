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
    "5vW9XuYzN2aKkY9VY5NB3msbnztsAxQFPMiGLomvS3MwCnYQZQZjioKPy83MAqoNSA2czVh1g5W9xdrqQZmzTng7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MuWZAZSrt9RsBJpJbhVXTYTZ6HuiZRaXt89shwVGjzACj4VQ8B264RRNGNquugrAFxEsKfgPEkmbjsmaeJ2GAzr",
  "key1": "2DmX19Fyg2Qu9qXMrgrRuBfDSSEQM8V7Cv4gypgBcCTqUVvcWxpdFXuc2BR9m4ED552tsfsmcM54iLvQjMDbRx3V",
  "key2": "TbTgBhL2QcCiQGrUsQSVAXLutxoavcfyyRPPYRy9M7uGuRfbpWScgETAekbPbxdgwVS6uhe91YSbSdeyGsZedrt",
  "key3": "2bjBLEihnGJMpWWkN4W1uSihfLQzp11c4M8w4vRrZhvNCq4J6WY8Haei66QvDx7Zr2Q1GzGnkcApjtN3vvcHjokA",
  "key4": "3p9m959GTYKir3vfm1sX7tRydFrwBT7V3V6Zk9B32JqdgZDQwy25XoUU69n4xXRPtqWshWc23jdcF1DuN9qB9YGW",
  "key5": "3w2kWYRLtrCEDBaMb8q8jYY3XnV9mzcHBtPyDfe1n9MuR18Qb3PkaaJx9vYmGsTHhuqYL78UQ84myPP89YeGVK2N",
  "key6": "3catFYe432sdUjuwYFcvA5vss7xDadkmkUf15LiJjR5Mxwc2ufaNg5qs3Vbscuunq2CPebnGvKrgdC4PmHnEc5MA",
  "key7": "21NbGiQJxgxDNJQCV3guqG4bDQhdyCqtEoVAibF1y2hJqGRsK8KmsYRTjC8HGWoYwiCYCYAk3h4FRPBVS7xEc2mX",
  "key8": "56NoasAjHA9hzFarmcVwC5f77fDuZ3VzJVpTgigUFi5zkW6qjcsaRJNuVUS6UL3f1YUE6s6QpmvEztd9sRcwfhah",
  "key9": "pcf3NXW4nomeGaJVEy8oRzK9qh3RKQ9eyUHQ8ZMS72oBxWJWZTpiyigy6fuQhaFWufWURHCgMA1zY5mj9Fc9e16",
  "key10": "3mrNpWBKoVnhz3dTHTQxDGgfUyirwDW4HFoHAmsUxKUzjCeDm7REVVPBw8hsBZBYHQfguxxj8WXRuvyWsH28rEhw",
  "key11": "4JToiv5jxtUEnHhdbjHmgzhtMVdcJdRmg5AKxr3PmE43HwMXE5eh2fBio8gprtWe2bDMs4dyjR8dREDNmNVMnWcJ",
  "key12": "3fKiHXniS8PPEWSZusWdHBTrozJ7KVovcuFownAvEEohd3yhj1qjoPvZNPm3J6NJBUx4nR9DyS2zePyg98zvESUw",
  "key13": "3KSgmsfYLwVb6XKwwSFtSuKMxKGu2SB1KqeEoU2CYp6RidHRyWQCChgHopt2mQXLBgKTu9aqH8j81YCiDb7ZyJAn",
  "key14": "5Sgp5AoVWD7YMfeFQdQknR1uMLi9jtE6dnKYPkZdsr8G1Z9FcHkUwFgxgbwsB5CR8FQNSiFiBztbgY1DhdKuomty",
  "key15": "3hbFU7gjKvPBczTBHnpWby65RBEXzY3yvaUqTDP9vf64RiB3vuXakP8o7gFPBq6y5hq2hFWur9mYjsrfN9wVoYuL",
  "key16": "4NTHT8Aiqy1Fa9ReYzjd52AE9vhSbajkVvqC5VyEiWHPftj3btZ5azbTN6xnik51riZiUgq8fg2fjVSbPZJuEtcq",
  "key17": "35QK88GkEKLMy9WvHd67mAcMg4nTgsjWjvCJ9GRWpuAxudADqY1YziT8sDGEvFpcigynBPMQACxPcg4oob7418iE",
  "key18": "4FXjn1qJCQ6Lh8s5KKZZknHBGfNRsScevyhjieYEt3PzU8NyVbaiAE2QE2yZsaok1HJNuAmEH8HsEtFULrYievaj",
  "key19": "4dncxipKfHqaEWpQU789QN4xfQiW9uWWoYUz66qrcFw8iMsAGXyqppQF9TvYncyEjM4FeRSUAJFwFeSG9RgcXfv8",
  "key20": "2ryveiTtBtHQF7Dcdf6GJxM6HRncaKXadKJhgxKrJnyoX2ETDMvpuDDfbmMr2mjVVtJ4rU49iSQhTNejNkySwXAP",
  "key21": "3FAd5pQKtf5cty3yMa2wfoiq4VfXDZJ97uqXEXEzwa6MA3nz93n2Pj6KKwJYU55PZ6iKw4AojkSLHUgCCAJm5WzH",
  "key22": "4WGK9ax31nh5FpNBPtNVuxRNkRcgCXjn8NZ4c8HqX9fs4K7QgAuQEyhjgUo3Pdy9Xi4isLo5rvTQSFZ5g47Eh2J7",
  "key23": "3frviNkPcAafTf6of7GSR9D2NCX6VynR6Z4rLa55ai8c7J2VYYiF6CGb6jZoDVaZWeYtKp1mRcELocWTi5fnkCwC",
  "key24": "5HtresQHpnN5bk76CUDcL2eUKxjGSyNLmDE6h8yz69rCMFg3UQJQCUVWxBfMkBfS3ykwiNFVsnZKbvWVyyN11ZRP",
  "key25": "2Pqwqif1RV2NpQBX4jMcYEgWnzBZqS9PArREUubcapFwDnez976dMVUEYCTp3MNaETvjS8eoBRCKqLm58oCdW6Lv",
  "key26": "4ejikSwFt4LYaWA4ZdeyrqwfKot6zqrbAs1VMuGLXh4Aft5aeGEaeGUZ8nxfvoaJxUNayndSaLum5fangKdC4gMC",
  "key27": "5LbzcbvLECmtAwhoN61p3gL6uX7cd5faANVith62SvBvxtKANiu5qnFRWqCQBq37xK2WfF3Gcd6c1TUqfxqn8EGx",
  "key28": "4NDvRvEfeAKnJncgZQztXgcvMrAjr3PhtkpRYWDr3C6oyNR3TcWEZ8hqsAzUUqfruQw5GHanVx5KNuue4vsBdBwY",
  "key29": "4L7VoZtsjGFiu2QJ6Gd6YfLdvKq2sF863Cp16s5oHwGUyw8UAaHRjWpVw2XSNCxTohLFgwJChxYctZrupUMXShmd",
  "key30": "5DSb3zkh15m6j4bU1rjiJzLohzvPLL6x2qKFzm37KNrcxRhygURXHQShMa28odnXQJZv5fWQJv77ZAbeLLF9yk1c",
  "key31": "4NNKc8yUxyzNParYGxLbV4XjqryhRTkmwfNETmc5q18otZaX4WxgfjjTrVnjgo53h8a9iCpU1HbaN3cXWPHF4hsw",
  "key32": "2AdNex6LdQ1eKCjGYp4syRiGjWhEEEzZ9bU5CiTbghsKN44KxJ2pc4CYHJ7RYVP8HEdbLLdsc4ABjyVk9yWhTJzT",
  "key33": "4tVfEmqtxWzh8Mntn1RsLF1YW62N1X8w1PADovteCTTMR1W4XJaJQmqYZaagKEagscEcp5agwwwNtsASVxU16XYC",
  "key34": "3ssFU3ouT3VEzx6L8rivM6utMNxviDazt7gGZ5bGVS9RkgBLZ3nxfUEdcZazc6zGPZDTxJr5tRc9dMpFruRX4zRq",
  "key35": "5CmoMrWu48ra3fiuAGTvpGoW1LY8bv9yunjTgSSGLnQZ5BycRLaVc17oq2T8zUpLd6RUpo7RnfC8DvJSthdiHMZm",
  "key36": "4nWP7VWa1EtAAZhK2cUihnVad4WRYBRfFguS5MkACLb8ZhQkkHxxpASCDpoUcvpio2JUCyzFhuUpJNQbq2s55EQv",
  "key37": "3nBuiwQu2fgw81y4ChRJnGNVscSDJBXwgtbBA1CheUPnsyzRwUfDNL3Yy3Q1bJTAxRQXiXLywvQNk64r5w5dS17G",
  "key38": "3ke8okjzt19t9tHBheTSpu3bP5Vqk2uNfV3rxTwuAJ4wb2ioW8wdzzNBeApGVxrVYcmePCVS1McXdtyuqwM4yjxD",
  "key39": "4X47XyeDd1zSbUpuHHGvbdDvhpJQJhBWkrVSA5DmTRXcQTNpMZp2oz5fWfNYnUoWw347MbXgrBf2LUPFCYsEftvN"
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
