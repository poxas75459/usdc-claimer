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
    "sJbS5uTRsfwxszZ6AdSnSZNq4a3mdapa1Jom5hD5HiVwWffUbGGchteJnb8eejmRicmvTiSUMziAuso9Lb4Qoxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CMmoVJwyM5wKM6vmT3MXpSiJZPczmhhk5jMDXd44CLeqVbQSJqTwvw7J1Zdi9ePwX2jybX76PNXz86ngoH9BPqi",
  "key1": "4Ctk1X18F6EcaLJ6n8HMUtNTq4vjBBosCP8iHz4KYvFQfnKaWnfhFwV6QiEzy55LrRshTZPUFwDbk26SV52vPnLy",
  "key2": "5f8A4dmD1gKM9qhP8CbpRWrY3TimVpuvhX11FHUJCLwtfcGcFnu1vtUVK9g8FpVvAtyUrwNzUexGUa1bjrVjypxp",
  "key3": "6dSvL6N7DToKwLjrE3MenJjjr6n5U984Hw7kiYW6L3yPXmEUFfLTrsCD9b35dbQk56rdxHi9y5q39C6KoNyzR5s",
  "key4": "4nMse6tkCnfzmkEf4qinuXySFg1Q5netveCUpXjMriKrfuCEJn1oZQoQRWe3KJLkF7yvHFHP2CidmtcphvAD8WM9",
  "key5": "2CmREDBCc9upF6xMnpaLbXsJPGfxG2oVzDpgJV3hBe8Ert4qaYJFd5eC3zyVoMycZzzZK76YcAF43RnRkTLPNnLu",
  "key6": "2VQ5Z5oKBxS2EwwwVR3CXaqZ1hxqKybRsjJxMrJBcXmM7j62Ha99s4djZ4tzrrLeKLzm88E4TqNpQGwoR8AZi8Yv",
  "key7": "4Z4cUE5pNJSqsMp6nLXEEZwmfggfxy96D1snFE3dPCasngMsNULfo653AhdhhBHFahVvBFYSUkig1ajA4jvevUXw",
  "key8": "4iGo6UExGjaMksbv9u4ecGv2h3Gd12ChKyhAL5dZ8DAn7uLTZXQ5tfbnKSb6xQXqFp7VZJZM819q8obaVt8Q94GC",
  "key9": "3cDqoD58eEiyJ3VXdeo6uLHonmbt61RQAYTMyeiTvukDKVpsPJgKqQQyMwGSSz9zMTceNi7cEDjp68ktys4aYUPg",
  "key10": "2hab3opJdXCzgmkxtprCk5p56aF9h6qh4hhCq7Pdmbc5R6XyqA752g5x5kpKj2aESgeGziYhqFADCuP6Dq8zZ6GU",
  "key11": "FcXqAbRLXf4itXoG4Uj1fx1DKRy8HZrqYRe5nmNL76k39rXHuQZXHS1gpmcRkRdfb2gGuCuEkFuS51VrUwHZPch",
  "key12": "3ESHprtFoVpxiZzrtXt6K9GeeymiMUz1w4wBzLG94hg2fJt2ytSzyWqQMXTjt5Tw1pBhiX8ffedoLQcWzcj89s4R",
  "key13": "4oujTLt7bco4dC8KHQML1ptfHYBMEczezixNA6gQx4ANrvRg2dzUnmbx86mMZATpa4suogn5nDxq2Pm8SaN69YhX",
  "key14": "43XmEfMKbB3ADsQsEXKVhrYaPKCfk4xdFHzMRLoAsBNY1QR2TnRjKn1iTxbNnoqXjbgqEiJL4Ru6kn6y8WXJkBq3",
  "key15": "6DWJgchAZWSwTW89cH5zxG5KniZMW5K4hHkx3ZHgkhPfGwFXmVeCafkSDzVnE1WGirfM7Kcn87GMZbdqP2Ue41A",
  "key16": "3sMsjd6yBa7tnPAkn9KXLk6DVSZsRAa7LvLPZ4mjnHPtiygt6QNcGFXSBRhdqL9swoTRtv45ARp7wLZ2CtBpbwdo",
  "key17": "291TTVZo6HvP3aDMfwcP4d5tVD1wFsukrqtu5LvYqkM92SzSYBbG7bkuXfAdeGWHcCJaqLZKw7dWseRBKsePDmTu",
  "key18": "2FbGnj1bnRWbhUK7sH43nVcyc2YKzmJUeYivYNtYEQRQdCU8JmKwvJcL2sBTybKJm5itgeRxzmc7UjejHvSfupDH",
  "key19": "z2ZHHXt9LHN97CVqxkt5P6sr5oH1YVJ4r7DeWkP8gzPQAfZUF6HSSfJiykpFbuhbaxrL7vcSKAepNuhF8rovkLK",
  "key20": "2FC39NF2NbACGCVcmqhPCk5vx4NPyzpdgzCPxTJWCAmWUbBkdpRsNcMMZPqD2Qtvd7R1VF5Zu7EUj81mAvhnE2ny",
  "key21": "3t4tf3PjFDbDSwrZ6vHBQ73sAS1LtFd5MCtTARNPEkMxwcuyTNtEMsSGAoscRXETWetzWD3ZZRtySDjQpe59222k",
  "key22": "55srpaWL9BhiinqgGUsv47Qdq9bEkvQAHWrg2EvH3w5DyZtaBum6PRwBD2ezHSi59i7NKerP5zUR1i16g69Hcb7U",
  "key23": "5M8LPx51b2Cqhfn4U6LSahnmWiscdTbUZPgzj6PPeTXnLihEQ4sK7CYQD1bjCyKeHp91Epd6AzaHb2MZAXuyLinh",
  "key24": "8GJDVFWchGSa7x5Pvdjf5KbrBkQy5TSCHy8N2r8TxzoFgDfhtNt2u8968c85G7uYU8mEpWB4p8rUzRTePEECEGV",
  "key25": "5H5ierthn5JMDcD5W4AJ4EUeAgFJvmr97KqLfDXRCNwGQnRS1WpE8Xce5LcoLe1Meqwb9CMufkfEYCgzFbPFvfGx",
  "key26": "4JLTbQYr6bYFpBhmnugvQ5efH4pPuVveLnDgxTMzs2zKcjjaaEQ6vvtddVLHrrRdWxZ4UH3g2syw72Rmkbgev12B",
  "key27": "47nsPtLZBgdJiM2Y3D1DERGXbTVDWUvrbUveQwek9rPmP5TCmKfq8NpYsWgSotUEn87oxCX6jtUFzfgSAp5A5zie",
  "key28": "5cHnVbURviYGrVNTjcw64pXctnwMNPW7nX759odaU3zvfTvqZupNnRuaVyBwezhGKkPv7y9f5HHbaQ1UZuwfVvkf",
  "key29": "ihJUnPgyCZ4kx4Fy633NbFytRKU1JFPfojW7ikx6W45tbQu6SeATwXAUvRF2H6hW3CmjQ5PxPC7kHmuSLuAr3Nv",
  "key30": "4U7qYvikDuRzRbT6EQoPAdzdNejpViszWyMhb1XKNcrGmM9fP4NNRXgEP3FJVuS9B3qnoBqxSLyG98r3MbEnuriW",
  "key31": "2Y4P8cvLSHYhyBZygwEubmHfaSzFVGyV4d1emxNDWyZMELauETyRg6ZRiBgnWU6r2J7xBi7hkaSLgUgam59wpvVo",
  "key32": "5GAdHHZrxpcWon5YNJYStgbv1oAjQqShm5csfBtmJLsrbEgnFUPzzMfab7iFmo9gSEgdEuUEC4mYMK9XbaauiCGm",
  "key33": "5qem5L2ZNkqKsYxrTHGbKCbm8Mk2GpwpiRqo9aa2M2ezbLcL7x3gnuCLkipxno2zeGmN5nN3C1zL553fcPB6QiRD",
  "key34": "cLqtySLFedZd1zciPaCA3xb7yTHadH7eUvWv4bNgM5oaokJy8gU544RzoVjTchjV8UKe82ih2WUSVqeEyRRhc2j",
  "key35": "5a7vTxbYDkf1XG5TbswxHUw5mRFtdCnAT26n8HXZDJk5xvEixFnw1vVCCzJvoDjrCEwXMGvjWVPAkEk6fAbf2BR8",
  "key36": "2f1CTrXuEfKazJ2zTRTgpLR71Bb9G2NB2eNLebJfj5onHx7wvscinb7jDGK7PkBE8aXGkSngdqgjbkZY799oAfmp",
  "key37": "2EEV9oymu3mhL5gVgJbGPwWsM3Qui65Njp8FN71ApLKRFMGdcjxU6pY3SftbPdqDJxmL7mcxoeKKCeNR3Fkx2mhi",
  "key38": "MxrkwxFi5Pe7pCtwmDzw4pNPgGvcqETntZCsvonprknhhjcBV7n9iyJiYtoi72nbWEKoZDSEAsCoKBFGMtPti3z"
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
