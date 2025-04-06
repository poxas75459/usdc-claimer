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
    "39PXU3DawroxDRAFJRV3XvEBz7DfJWh8LUAyzAqTyy5BLu1srxyxh3mqHMTTrNs5AyvyZGBoeqjMGwe1w2VGDiVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eMNMQSfbSopwGNp4Z69qoSf3XQ42BXM6MPL6jFsww7X9L2zjEzsXjBmRYid2DmpfmL4aUXj8qK6NHwRxqg8RUa5",
  "key1": "4axVJrHu514xZEhet1py63BdT2eA8paUkcd35bgbv5zyoXAtb5JT9KFzg6D7LCwTDkhbPShorJYN8uiZiuyNb9Jt",
  "key2": "r1TyaTL8uUojxdLdb9VYX2fAUP4DrnBh7ThP5zuYpzUk3T582BrNcazDmkQZD9B724R79nejHRRCHKFDnKyr853",
  "key3": "2zZWJrpWecfR8J1c93EvuQe7GTtzbVDZoEC4TuwVDSWppmvmSrZzraeEBXqeGt5uZmmYdaqjTT4qXUeAiQ9A8D2X",
  "key4": "4WyPkaFgpVYgCZjdXwWUJnvCyg6JiTuYZACKsoxLcRi6VfNfBifLTp1rKQu68N9kRTnKcCBqhcsczzdJjXymFALo",
  "key5": "4aP9qWHUigTxYjwpBsMXbMyws8v8XCqZoJqcx6Nu2mqR442A6meaNyvUiF1vQv1xu9MyZanWEMYnd7jcFjJxDLd9",
  "key6": "3eMvjJrfFHhjYsb92qHYpxuAnaCGiKaWpU8fybVqxSWSTsLjgeyTbgCALzYsWVuEp77Z74z5GiR3pTJyLAMUBYve",
  "key7": "54AiHXQYLaTkdFxrA1Nuv97entAEYLJCkoGxTu7VpEUYqUFB4HXh7DxcYZAxYs7pcSmrW8vEkbFRBnPTEXdQvLs1",
  "key8": "3ev6Ja9DrNoHXxy5FmEqWgbUWXrQLVB78ZujbRH1T5DViTg1wrJWAps6zmjUrbkc1tFtWmk2xwndFwDSKZcJjA8k",
  "key9": "qQgZa2ne3scj1FVe1ZGoE6EN54iz5kLATu2KwrnVhYhjGyYypB5Vb1Y1ScBB8RUCJ9o6GbuD4VYi1tTYXcsd4on",
  "key10": "2vbQawH6f2sXuR3UmthCfFCTvUm1tsA8BT2XCjQBEajxBJnBGcTxjacFZ5ZVcDRY9gXArdtEChAweYQ8SR89vZDh",
  "key11": "5vJm2cSyzFpnqrwpTJu23CP2uiza8r4DjvtgrSDE7VBghH8QABZ7JH9SzVNnY7nGBaGiDx4QBeXoztssfGgG7hTE",
  "key12": "3AUMBzuwVboZovZ7AsBpaeCjmGGAf6M1cJHMCNzvKRxUJbrEYwuwYSiqda68Gxf7cNw6Fv1TbEXyHUrmj4D1fGcA",
  "key13": "4XZeB1yZJnLxa1RgKgHE5Nj3T5miU8jQ8us14cH9dSEouJZibXoyHcDhctJBrWFAEaaAGsZV64xoxXZNzasFcK5u",
  "key14": "3hnZn4sD1WAzPTW2yN2x2hEwKQHXikQL8GpdQKctGfxKSxJki85nNJdUyLctZX7Jb85vUuhZnyULBR4QrDT6VNiP",
  "key15": "4QrUxevY9wWGMoPovuK8ZpHD4vEkxgHyt4zrjbSbh2WnqavhDGnFjp7yPa5EE97FKugjZJZgMPWbgx8b8uVibdq4",
  "key16": "2xzWXp686oxYEKrAicmTei1XivS3uJpB9RhqQSKyq239xjTPbpzdfMfdmaDf49GHEWmJc9QHSjMu5vuyBzrmMNuu",
  "key17": "48ydmMzxV6kC63m6v7pDEftkbtqRANGeKLn3KgRJnWUErZwn2rAWEUKzZuRb8fvnGDty4M6hbxzFNcLvtwAPmBNx",
  "key18": "2eC1Uc1p4bu8tCwb9dksouP4xZnzUaZtoHa7M2rn5vERZWaftG6mBxN1dL2LCw9QLwMqoa5YHeCLSefWD2Wqv9Rg",
  "key19": "vjz74Ehm7iv5iPdy616jFFoKUBSBsDFmFfvSB877nN3C66swn3KrSe4VVffzEUoNTkY6K8RAJEdGEKiRfakfR59",
  "key20": "2yamAppXUrb8tpCMSsiRb9XKXjexqHJpCDgmQ9hNV88xiTuNYCa3cG1Qp978wPRDEnrCWa8f1ZbmQTDRvw3s3jM2",
  "key21": "5RA8jEUMf1QQRh5Kp37wwQCydc4fsTcvRzZLDeDK54peDwrNx5qZ3EaUSkP4Jq8i8orCffB1xJkcVc3ry8C9D6qx",
  "key22": "3x9fwL6s5wNerv2fJDT81DinBbnViVytzdtxVda3VMsbhNmfb4oVWHnPyAWZVS7x1X4fzMDZyhKcrT5ozZBd6gJB",
  "key23": "46eRpqACJLqQs2riPCzTVyvJZ5KSQ92jsNTvJG7Qh2EbNf1qHW4xf88R7umCXTmvit61ahpPLZXbb6AGAy5BC1RQ",
  "key24": "3FdcvUppsHpG5EFNndAyEhFNVfAF1bBnm9sb7BTWCDYnP7HxDk7VGa4ubpVbTsQCKpETia4NAWiKKA1sPxTZ9jxW",
  "key25": "2ANUgebiWLiLvUCXvHrKLFpetPRDMu7M2YL1kkHAtFTb8cBSBcmKWfMLHStDKW2mSgmgkBM2w9B7kdRoUALMs7uT",
  "key26": "4h1cRcyg8XGoToQbGGoojDjYUgRixujeg3CfwLjHQhZHzJeFg2uzRGebgsznYtFufU1bCvbsRGBsuBRRXbYmwDVx",
  "key27": "2YL9fX7pwC7jQwMG4ckBAJC2MHY8AgvH3srvgTrJsVr36UY6bCMzwizSee84xFLjZAEjLtV2Her77gp3CqfsKg1m",
  "key28": "56ekfbP8A837CSFfmWVRqMuhD7XgcXPuMYwR6RwLzzPPUDdX83X1Ne9vK7JiuPkfDTrgWw9AFT54pDi2Sb4xJPKf",
  "key29": "51qCMzkmUWMcU5MGaJNgD4dnmjxLu9JTGGY8cewyLrdAiFttAoWtArGrEAjrMcAimbQ4M9PDhSHDED3ufHVRsdL8",
  "key30": "22i2B9rzHQDt6gCMyqdNeDUkZRNK7dpyuLznN5Es1C6ZMKLksMNA8XS4cHnHkuVXG47WBpxtE7iEV56W5rfR5B83",
  "key31": "Vvd3HJKaYYqrishUjyZbCxTMRxPQ9n9tu2Vt6wHZsbwzrGnaE4WnFq6sPybtYb4ZpT2QMp5irKjCLsDrQbCg6PF",
  "key32": "4eu3oEf1vXef2YDJrLzczRmkLWZw6VEwxoFfjTGh1su3Kd9uxttSBJECRYvCstKEjR9xEDjsx3mpieUdvVccNxFc",
  "key33": "3ckKX8GVfZWu4mPLJhsjpS94dHEfC1EXwBVXGBLpiYatzA9kFHMDwjZowqxCiALsnpBGpjSoBmw1VW6RcDrg89SM",
  "key34": "2UHYWv59XrWX1PtE2AYQ8XgWoEFiGHqmxnm6AofqE4WHP5wU6aNVdthUmxEex5Bb62jUe7QeAaHaX2SwEBoKLEFu",
  "key35": "383jchSzi4sEv24tNvMroa4HtpKxfK5mkDhcdhZVqWSdYhGQCr55sTJMTrUNb9LMZ22B3zfpUPs2uErVdnL8W9Sc",
  "key36": "3JkG6ZJFr6xNxxpDGPiB9KXbMmu35xpQYSkaxMaDHLMFheEcUfh6vJBw9Tk4WGFDdmRrzzHc1CSCY68zRzKokvSv",
  "key37": "5HBYxkxKowB4PaSKnJH8P8X3bFFfYPWvvmTBAp5hyZMHuXEmhk4fKkseuHDf4b56asg3uBFcKb9EEdEeHYmRFA6d",
  "key38": "k2WGLmt5GZFWvuQYDPmgB4AeS1h6rdajSNJeWJ5exxk7rK3DC3ycA8CpQAyPX3gc3tk8C4vWzyKLBP8C6nUnSFK",
  "key39": "432EFgf6W8WcAJ1UqToiXc3YbF7mMaJvm2kPKuF8TidKn4UvQdv4ZgDiU7tHy8YD7wMzbNhyQRvtKpU1TDJya83v",
  "key40": "41x1hyA7ED8EeVFA2YYpV9nkaFbcchhtNEC4S2CAFLrYouKRoeRJgzVTRKTuCqzvnWhnrzZYn7uUdDpUfLeETLuy",
  "key41": "4GS6hPyjf1w8XUv4prQUntK8GNsK4hejzG2tPDp2MwsWb4YPwjAbPqvwYvTEYFBtsKmLmsRBN3qMDoqMwLknU5yK",
  "key42": "5Eu4v3yvPYAut8KhkMbcuDN8pT7LeGvKeNYDvhxrEvxYtEVYhormW4zzk395xraQQVNAAcV8xuyyr5LdUKirRcdS",
  "key43": "5URkbU9vqEQfQgrPa8PsUTqnAUFQJNWUV8oaJCBLiGnPhH1de764UkJuK1EJWCXTbfd7GdPF2fRvkwvPgbdjJ685",
  "key44": "2jHQLTCSbuKcvJQARKGJepeLrUQnqhSMtFumjedg5Cm5TXBDkmW82ZES27chufBqzC8YLsGWA6JfmkSTSoje4xp4"
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
