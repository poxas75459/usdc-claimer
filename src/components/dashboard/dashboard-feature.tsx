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
    "4s5FALtesUJ7qQCFRHhoZ6UrAiTe7y5PzFdr7b11wGtVAceXjLGzccsbNN1X6rF7H3d7uS4SnqoG48m8oQJrJ5mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kxxsDzZVLE9VVfmHcsNvFzwt8NgQdMCsMx1iovn2jw3J5o6dkqYcBgWwEXUxE3qpGVZPv1my4NkVd2UaX9nbQc9",
  "key1": "2m3W39bCwgR9yWQLecuXqbQfXE4n1UCGoWYmRSFMwVJaaXPbEu9mJ6tUpBtVxFbwHgTBpJZGYtYxCBYfPrPDTDVL",
  "key2": "53qFLdAY6HbDEQ4ePpZMuBYE26H7H5TKKSYRtTNzW1PHWRbqd2a4ariXjUw5PezvRqkn72kbAMsjQXuZ4nrLAVdN",
  "key3": "435jcKtcANdrENjwf67ZEzjwX4WCL5L7cBtwWdCn7psntSWL2uieiTYYUp5479tqBRQF6cDQkkNgE1svpYDkEFxb",
  "key4": "5d8WdLLxAj8uxd5bcfMfJz877mrXzXxSYE8zRWYvpLyBE9b2BY6NNjF8DubJZh1pTCZvXh3S1PsDce7xSwj6MdyM",
  "key5": "4EqAKxuot8vTN4rrougibKHBiJ6T4qJwYmw5SG1vXRQzXH43TTiQ9NZ13v7CsrqigDoLwReCmZ5mHDyhiXdb9fy1",
  "key6": "3wn8bdVcvta4sWoo4dWvfyNbVcuuSGM3Fa3ie5ymGx9RtkQEAfUnq34TmvgTbsyaHMt6jCnXBmyXsCMag25bXPkz",
  "key7": "3wpNJUuDUj1p6RJARAaxADBhUvb4Kymx8AUuExfMNEr6Sgcuf3d8Rh7VcFfF4q4u7w5xDs7VbS2uLbtkqiKs7cnU",
  "key8": "4Yy4m2AufYGhF7rZQAQgaFH8H62kmJRWQ33LimYgzEbgg4YkkEZaX9RNXyA6ErXBe4ZzxiiscVik1oHgHBtCrJiT",
  "key9": "5SSNidYHZxHsxSXGVtXnCDb82TkiRM4CkbJZnt12mmLdV3eKYonhnvT7pABQB7AkU2FSMQiUAtDdmwQKC2j8dgLC",
  "key10": "38ie8e8XFCUPWuXRHkPJWu24ECtzXDhYvwW7HXLouD7ndNC1QDDKiH12SvAuiwdo8Km5croyCQt2bCAFefEL1Hnf",
  "key11": "3zmtpDFnsZLpjATQVjDWUJFcTyrF2ohVkpkk4ZReRjbAbZcWnNhYt2ijCQLTp5cnaTvKVs9zud1xQUCegcB5uzPX",
  "key12": "2QdGxiCGFYkotLHPfbgnazDmAmgA1uRSKouyz6Fr3yNhbZ24UVUEG7inGgQMCXggNVbdAppZRZzs2vRgGYbGPEcn",
  "key13": "6ZCdJmmdrvA4oHLavebSRcHzPnjEVyMj7w3kUzpJvn2E8p9CZspwHM9uZ7BunzvNM9g2yydLKSdxkUz1mUeViat",
  "key14": "3yPfZ7CN2cyLz6UCLJ8FtWoZCfQ7ERa6cuGRx34gdKhiSgWRj7mUmTA67K7RxjzAmFei19qxmfX7SFswvB8dr5rB",
  "key15": "5YrsfSW1nrcDQMqPo2J3CE7hJLu5sd7GizBirBTfi9moiuMQ4VW7pr1FiTSqshMr8RiXjapSBN4UJhstBn2FeGVN",
  "key16": "4rfWnEvVeFQtywGSaiXRmoGPsFwkkVyZ2aSNCwQydeKLgNozpmhX3hFB9vCXB6j5zurS1mWT3dnKrSdUs9Z4beBn",
  "key17": "4kvEhwkW4Jt8EK5dfpj5KFBFG6gw2JtunUXXHk8DPsoTYzHXhv5x3hpFzugm385cUFJQCjuEkQN9ZxMAo9msiPjd",
  "key18": "4XTcM6XTobaZFmtYokykasgavLURH9BVgbb6R7U7eEDu6RhHz2zrfmvEWYTyEZH5Vf8cYErpAKDgamZcJs8aGfJ5",
  "key19": "3eP7qZ7R212Pzvn3YEuiGieUTeVC4g2EyYU7cr5U87aZ6Xa5HnkhDcCnJMFGQqkmu9CT3scQQjD5x5MbjDdeAGqn",
  "key20": "wvhn447u4a3wPHKTAXdg1A6j89JoRUQtz79jSFBA8qYUs85ofCZpVcxYtVujQbD33zBEN1Vm7Qp6EgxmFyH7iuG",
  "key21": "5UuaNWHwu8xzmtdgToybqEtcPSZh2S9StTkp1NZtKFrZRDvLaybDgiD886DRnjZLPMDWwJdqmPPnE57kqjSEjosE",
  "key22": "5PkD56Lb8pzsgCmzBSRykULytPtp8w1iHtydACDixxsCJWn9XZuzuYS63B9iFyMRXCnZKd7hhra3MutnDtAjpFwG",
  "key23": "5sdRWrSkS7bgWnWZM8rnSgk25rmQws5RMtrtLFrzmnudFuHfJVMPZEckzJNi42eVjoBXFYnTq2zBMyt9A6x2nqH7",
  "key24": "4bi3jY3JpS6NXiXQWWGGC8i9akfZq7BBnN3zEjgGExFH3WjHGYe9KkoN7iAi3WkT8JEhWpDBkk9MKqF8FwvmwLK6",
  "key25": "5epctcxq8wfKkuNcmQa5d6SHb6vjZcEMdoPnhpkTb389738pYLmy41jtj7N1W1UHbhABv5fvzQCVdNtfjL6C5Z8b",
  "key26": "2Z1uy1ZqYBTYmZbhHkEASxDRTsjwZpEGuq2irabLeAMqC5hNFvHvUarivrgxaui7fuvcMGGtcEk7mdPMSBeGXV5M",
  "key27": "3XkAtAv6RxLoRDsMWtyDWjJni3NvQyn1Zk3Tb7h6vNyS89NGdNFtDdnbRhAVFYTYzagUJ4gEKX6eMX8Z1ehsL4P9",
  "key28": "3ocATXoANL4CTaTaLa9a4YeYxe1928TG6P2PhmaEejdy2Ri4HS69JVFCwoHLc2KSzwjfjcUznU29LcN6dvFgXixL",
  "key29": "2qcKmESjAFDZhZ6wP1zJxNJP73nEQNqxdL32aK29zYVnFBxk3SmreLKoQ71WrT1KnR3X2rBdt6r7GcNXXe9P8Kcq",
  "key30": "2PwyhJZ3vqkb8xawKiDjxa26z9dXhCMfsyvAXwyiM44ZCSVjA3swQbYLe8EB69djSbHhZjQQheVVVauokfwaDkww",
  "key31": "5nxgifBs6wLkHKTavkegHmiSCjtFp9h3zH3y9Z7V2MVfc2cYczKsxGenas9ooSPGZfwuXR1t2nqCMuutr2fv2uCW",
  "key32": "4CwdKEJq2Q7gZ1wxz1BiAjwCuTL1VkPj9BRqsRHZEkp6V7k4HuPTjJBaGXBXtaxGKWvTPT7n5f3FJTg7d3aSJaft",
  "key33": "2wrWU4YbDWaeXyRb8dWi16EzxJUZnu3w2HbFvgeCTyYjAuhRMqQsPFAoxFnvwzmScWnQKtVNC4V39LaDnVpM3LWb",
  "key34": "yNsv7vTayDnECUaV71QTFAwoDhcENW6pethBsdKdp6XLjMEJNrd2ym5ojvCsdSwpBeo2GZ9riueBwptvxVk5YN5",
  "key35": "5DwY4JvPeGDu7PqjHnwqsWVibMyVwSkrh424oFjpTYWv3P94VYT16AcMARUSP8T9HcoosoNCsg6vajeGfWdNzWdu",
  "key36": "5asjJhHsBBFwxBUeE4VWnFcevaJ3EjEZNaNMBPZ2BUasAZgHsF6fB9AKZXpvqDeFGHurzxaNCEMpVb9i5kk3JmEc",
  "key37": "BUX8Lj84o6ASW6yquN5xTJv2CQhKNHacBBt4Qywb9bSk9UhuUxV1sU9FoTgJ3Ah6E1ueEdNzQ5nT3vtzdQ4TR7k",
  "key38": "2mXVkiqK2qx1ig3qEpBQQbry9kG2bKkpK7tt3TYEyfP1zpiogKtLJ8AC5dbXthfQ79m5DPQzm5w6c62dZx67h2G6"
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
