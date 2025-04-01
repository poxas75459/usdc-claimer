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
    "3LEYJZTmBsKpoLF8xBY9dtthQHpQbExestUYaXQoRib76PgNxokxaU6TbWj89p9NiPvakzNroUDw45ybbup2b7BE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GUDgs2T6MMjW3GQL1XNHUEGwuhqRhfm2j7DrPohsabXmPJEMYh6GKEp8MoXSds47K8gYqsbr44PxTRAcaKfNFac",
  "key1": "Rikh9b2BAGysvS7BnKjuLT5Acd8VUPGpvTYHb1b9KpAL4ogY1HMJrtV43wExbdRLNc6gswwfi3xZyWUQZnqiZsZ",
  "key2": "Rg3ou4KqtGCK7LdKtrQNsmhaCyFAcT6Po9o3fjNytvFxWY56n3ck35RbVBGcDjvw177k9hTZFz1FzEMVTpxkCw8",
  "key3": "2uv1UgWUGPUm9vQz7aVHDRMi9rBiKHRvsvDctFQd7zxHtv1tvaMUS2r7Rvkyq7JMnG8pkyr8aF61SVkHvzdJDGx3",
  "key4": "45zPKYJpCjocMh7MN8TWXP9j8j3aR4f5JRvTB6tgUknbNVvR1rFzPCAvwZX4mMX966smS5CUp1UypUz7QxNyfe2L",
  "key5": "4bMhFBycDoyRjsAU8Hh8ewXaRdxzE2oJRAYAqy8f91RuGx9VSiEqVDiEk7fZs1adqeuYYg9fLyGW5wtL7Z8m8PnG",
  "key6": "3rwi2kdj5VWr15R3YZhjCSZ94q7d2nXR1A7Ex9GWwC9LqZGxoz7wE3jf3u4hCGuqXao7FuhaPZowmtkNXurABF2r",
  "key7": "3RBQdv1b9ieYegnQRYry1twx6ryVcyvuc1oNwfubWGT2RsWFpcCWsHQEWmDdkE6xvVyo1mSymSXAodVkffnJz9Nz",
  "key8": "bwsQEViRHhLfd7f5s6Em62TH6NiVPsQr4FDtMGAZiHPRjfDsk5qCjt8sgLxqSeBc7zxboVvgVEgm7K6Mo9dNrqs",
  "key9": "R73wTTZNyR64bFGnGq3v7iGJ2hSNVyWS7Y44JBVEFtj8ndUqERzW3KAkotFYSbnWMCGNnuqJo99RRNK6aoT1J2o",
  "key10": "NCwXjYxmLRNgUycAXsX9E8i3cwxPUrkKqvBumxymN9kmPwNuvQu8ZuB8Yh76WcWqNYSmy5UwZfZsFcwUuao9pzS",
  "key11": "5xf2aFFomhApjQ4StANXKhDjH9Xu6AG9c6PkhKjPfhzcdHX2heyXeedZ5CDya8zow7KGRmAAbjrGAKFTnWFktBAe",
  "key12": "4hEnfMnm5qA3p2sXcQ4XH84G9dYduHbVAvDcbTymRYytsmMwsKmf7bppha5pvwBtFUxhpnEuYsQHYG6R2VFbZph",
  "key13": "4Spe848L6tL3MCwHarAa2Kua2xztNXyDew1QTxnFidPZFDjpSY2Gp65oig9Jps28muWBv9v7zeaCDzvWQiykgP3J",
  "key14": "3kXhazPaNCVRVs3V4WiHajJFY3qzUFTK6ug4UrgzzUFipu8F3uxt42N9aAkXZxvAMkABDhdbf9GP7WqDxPhxc7ef",
  "key15": "iXfB6GVCpbfvRXN7CpfTPnNqUovPDNuSggFeEvH7n7Xq8x5GjLrJ1nWFFdEfDuY2tcaSmFYEbRaFJXzJYRLB4ky",
  "key16": "3iMQewyVpLoqB7mk5aX6PZRAtARUpYXXZVgenppXZomt5d3uuoRvWUcFZiXzK9bLQET1rQzZkpXvQjUJ29TwJ8mc",
  "key17": "2FhfUjmqsDvZvyCbDv3QRKrwY69zVZpg7nnzo6d7Caw3jT8tgztB3a1tr9eaZ8soJ1jfNyiR7brq1ttFQhhC5MNW",
  "key18": "5FZvWdqGH1NRQgRUjFHwTgPCPZimNWdA26nGDPpEVsrLwWyxRQq6jA9FkSS1iktiMfQCtH3yrpY5x63fEA3GP6ZC",
  "key19": "rQte4df8Ccw4EqpKQKdYHpS8yH9Efqqv6QZ52RsUUnCr7oSse5v41vze5tdqDk4XGSt5fz4LTJ4sM6bPDcpkN8s",
  "key20": "4vAQ6uyrnLi9HrLEKX1QgoZZc4SAts1oJdGWQj67vJ3J5dWw6k2kCsTaNn7qfFGaciCDRJEoe7GZACJjwPxG1sxP",
  "key21": "4Ce8W3A3FtHdi5HoD9mHyBh9tRNjSV3gj14XRGbmqPiokGdTPx4uLXepYidG2XUqCmTET67gvrgG9Gyrk4tgHZtf",
  "key22": "5fWUQmM4s5xoWMcCg5FjnfHC2ynU9XQhevCwfzYocmoE4jdbHWvvJCcpshD8GrReFd7wHFwX9V752Zicue2G3JHK",
  "key23": "BoLm8EnJUgZFWGiRTkEMSvVv7etQe6sFw7PUsuZkYrcZxKY2JpvqQd2oC6CTvC7HdP48uFhYmya99yA9eLL9qrx",
  "key24": "3dBEoHyE1Ym9QR3Y1Gb2CsTpeMsqK44Gcwy1kqdtxHtYB3i6VMKLFTijTR4GbLwqJdvc5pxsLBZ1Ga6XA1xAnasD",
  "key25": "257jYZEFF8pLe748a8RNDV9rwLCkBihq5QEi7EKtCk3R3iVAUh8Y4L5MoEy3mqpyp1geEMPQZEJc9LxAPhrzoQoE",
  "key26": "4VNVwU7tKvyVzhDMxoUyX5nZJH4HCMEdryUJw2CujbFPTzSVQ4qKaAW1jNv6ZW5GMa5G25zohpqqaX7fjGVMUaJ7",
  "key27": "3PU3bFemBHWp1qG571Zaxsd25UUrUnbw6BNptnuMg12tMB2ZmXcSLP5C5JPJpxAzZigBZ4Ae66wPWTihdwXAnMq3",
  "key28": "63bZ1syXRDVxL7eCTkNdEkLJJ87fuVPDfeQwdVRyUvhEq5GvdgTFiWj2o1VyNrPVE5i8ij3pDX52tXmnMNsxiwd3",
  "key29": "431wVPHy8vHk1nQ3okK88poLYM1HaDsLBRek9j9vLxxAxXnG6Pk9QhcFFGtPnusoAT76sTn767aub5NfGbjG99fi",
  "key30": "4KDaBC441wjSyHdz8xzt57dKD9peSHYFZ8comzhvura4BauKgm4mrRpYTVvdBKe3QMK6pPQEacWPRuNtoiUM3QiT",
  "key31": "6352aZYD5p37PngWy9HLdCtfSDdR6cgMVNHF6RP6MRG5DBzHhRK2YoPC6xkg7tNCiNicUoGx84w1rwo8Hma1HHqy",
  "key32": "3NdNnwBo6P8Qcm7dRsYqN3VkKpfbeVUhDtu6Ez1WLQ5kGuN9qMbHLTSE5dZSPu2HqanhT8gz4iisj5ZxUQU2icAc",
  "key33": "5GybXGnxKgV6xeMmsa57HXbCuy6VUUQEr3UqxPsVGkQgiA8gnCV5xR39xejjZZzRig98kqgw3p5VQCKgCiUE8XpQ",
  "key34": "3hWGbbVsKJzrdYgRNApPEkc38W2Kae5S51JKxQVnzHtz9Z9kuBLJPWwu2NKv54MtGp44nATLC5QGDZGePqtBQ2TM",
  "key35": "4hU77qe1Stfxf4VUmYn5zA6Hhsx7DDgHrf1chdPBqBQMiuhgiwMB8x9qv7fZmWXqLc4ZaNENLnj2hFUJTmHw6XP",
  "key36": "57NAimCLnLWZF6Q3j8apJy3sUo1pp2XB8QsZWMzcsDgmP1vQtfbiXcypWtTfJubT3bar8yKGdWXRLWxD1Vnt7Sj7",
  "key37": "61Yza4hXXEycgecYtA8scmPooezQhTXjBoHWbjGLKjm67UXTuSVdTftaKFsaZQ5Tzvk47bt3A4GvcQtxPP1tEKDa",
  "key38": "5mPHy6iQHMyBSz5Zr4UNHaxy17fX2CmZeE2qxpFrChBvDZM26txbT3cRB7rsK4UuEkcwDuMYNNNdukwehdnw6AVx"
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
