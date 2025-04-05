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
    "32o7Cxa3htWRmKjenxD2h61CAjeE8Sq8cSin9ZQ9znT6K5eQYiXayBMT9v6HJKoyNoPXJXxykuThJTYxdg2gQHEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "673wc5xJ6QwYFkPKhSC9CcVabusg7T2KUcsFLdAFxbLVgjUpsFbD5a7zuofQKhEQKae1Uy7s1QmbNULCWdQjD8xt",
  "key1": "4BmsxMfXG7dkJKWUihECVktZXosGn3HDMfd6sEmc7kDacNquk8mXXkX9Xnyy1pKMp3arbUKVoJ1uECgPnHE3E2Fk",
  "key2": "2J4Uozn77Vet3K8PkMxQPSTLyKQCTNRi5T6k7HrEdTBy2oMPekg3HUSWmCPUz7kYe7UHE2oEj7dBrwHbKxtxkxWv",
  "key3": "vzdPKifoEqkM4jug8pUntmXfHhpE668AgUvxnezKYQWRcuBuHds4wVcAALwue6tqv1LYkZpoBxSWxn5gMf1Yfjx",
  "key4": "594h5MKUBRf3B58QreSfhpC78ybNSAC1XkTiynhy9XajUg7SuMZ3WWVPfLeXUJ6iwJbJiKeyiKEVic58tRhFvFHT",
  "key5": "2TDyN94sFhtWmHUWhdw6YxgESEPff5oEft2sKQK4zetd9mk6KZhELJxPRH1BS8ie3uA6r19aQzgukDSxLi6KStZL",
  "key6": "5CvXpX78Nu53ZzbPixbVkkZwdxyMZVbYkEke6g3CmsDRtjhQjRJsjvx8uemcFLpdxk9EZGCNtgHGXNGNSqtLCk5m",
  "key7": "5ckqjkZdJT3KmQoXuPvmR7S6xiLEaTfcZRqKTqgpAme89poA9vRXTTJa7osxeXiyYeZp75vAEEpLeF7qaJKk46L4",
  "key8": "5d8E7wwFXEEKAFdwAJpUnN78krJnYsitcqn4sTKs97RvmqNWDAcvKcrMhZkaojPtLm7krj6AzpyUUsUQvGELvsiW",
  "key9": "VSbhae7SnnkRUgsN8MFCYJExSF2RCt7ujgzCi6SiobMrndT8zC3e7iVREg56eFjWK6qw314uRJVxw6iqAnQcSJv",
  "key10": "2Ud5K4HArSH8PhNMPmEM7zfUYF9xbyWxjHXmc5BJLdBZqvjpyeEwTh38RNHzrigoaXSy368hiJReLnukUritjyUb",
  "key11": "1BkDjZJYMiRU4rVjKUyYwF7cQcVq6gSTnSwfLhvCGdv54sQXLE4rETE8QLu1hfsCZ1V731Jf2nEridiBHq9mpZ2",
  "key12": "3JhV3KCkfmAStvJoEupenud32KVVBCrgKsGJR9f1dSQTbQh4hMHkxU8mL5wvfctW7FDvU9hVSv7z8LugHqcxTLAq",
  "key13": "55wheqp1oQzk9Rnu16DeZvwzaTDCFFCU7P9CdfcyZRUFQx9MGWG5uWeAEZrMFjcDeXyrGxhjE62Z6r96E4EUs6ft",
  "key14": "5wyh6HktLWLEm7tTC2wfKELazjt3DtR5Sj32tqRCLjWWE9dxyZNPhXwpuHkwY4CStmuamdwU5LYn7darRevxDaVR",
  "key15": "123YUJCM5rYBFGBPTZaTYHXGe9fZUq75ChbABMkq3GQ5ECahM2ckZuWyPJKDhVukuLvxmvuweXLCmCcJLtGn9ZUb",
  "key16": "4TUbBgSV3a6g77itALLeSjUPTzyWn5RsxPwdE6e5cY1woo92kS7EiPTFKq8vwtdxCg1KtSi8RE3WRZUhcMSY9Jjf",
  "key17": "3vg7c5wjdyPSXjTs7omXYaZApo7hWt923gpTW5u8TbSbfQ955qoWUFcfibg8ZXtLgo6tSAH1h93Hmij7ihLvJFg6",
  "key18": "2XqJeGLtqXnYqFM5vaafepERmxNppZvvqY8qpfNLLrqb2ZhRdm6esiWm21rShrpbD5EKkSZVFCnm5qfLB44PAJPR",
  "key19": "5r3PC5N7MZE9kUtbHDvtfVFLFXDyF8eHikekvN3gEYhLYLcvu2YMnzndZax2xPTuMKgrwy3sCaLmsxdrFvFw78aV",
  "key20": "2XbTy1LrUcBWJDha4Uhchq3QFLsqps6SYw72Dn75s5rVA1Fv7AEeSSDBLDmfZgQyD1NGxQ8tbP4bzyt6YoGF3FsS",
  "key21": "47EHBZtrkzX7PkqQ8VCRBaSabyrf8R4ZBjjNHi2NCy96pe7ssW5cRCZBb4BehGGUEVBE1vnzsHpfxWicbEFvMMLn",
  "key22": "58nkWqbDtD8wp34Hayaxk86x4ga3nDu5i2DSzZpnZCrpUHQm7J1yGN5k9SZuUysJ2YvHaNvGwUWsCU6zGJdKZp4j",
  "key23": "5x9qSXCLVDH5okPegnUVdsFzCsqmndYxjv6QYtAcgQDmDJYaDATjCY7hEFHFMEY5Kz2bhaHwAvkPeKXSoqUHQXTE",
  "key24": "2tf8fxu1KNMSjvQg2szFYZACzXyZZcYtCeeD7sFGjhGVAVXuQfyVTNYXUbGVYQFppL5zsEUvXpGnSiZpHa7c79vA",
  "key25": "2qmWe44FDb7ERNoQZmH1hzztmjpqGTug1fRf7aaNEaNmJcZXZQDpP9yN1de6nQ8EMiEfvBrUA4NgGS9tXcYRMnqS",
  "key26": "ns2V1kvdt8ESNcwxVs1FFPEgmfe83G47cR4o3nu3EgnrMtvzjjwD1XJKJuzttsa6Dob17xo2H9pgJNtRSpzSQxC",
  "key27": "4fkDvEEwJPCycwEW8v2qvK3feU6oCNe8JWb2YCdn7Nk6ztXZzou6pMUTEzKJ8WN6Eeavhp835jh5yVfHZMf3Jgbu",
  "key28": "GWgokNrUtV7Bbibhdtzezcp2Gzwz8dAGd9DixUoYNXyHZeEhQCVosCWkX5wm1exbgvMpnNKMatYVTzGTTaJT7vk",
  "key29": "2Z5xESMykoDn3m18Dcgvu3LZfAtVSmLqR95Yjt7An2Er4qYKkn7eULVSEFQxvFjVf1VB6nMSUEPM8Pht3ywFgL8U",
  "key30": "vQMkQhSZ3zKtycfFbW47Pdqr1bCf2NqBxsCAqufTPFouzEheP7yVpxZnnJXZrRXC8Zr5tmNrGVsihZ2cLVf8A9U",
  "key31": "4XNtp1sC5sPvSZCby7PtEaVNaN2fTUPuJspCYnauLW8w2jrH8N6W6X2QAxcYHGwyE5kmcgHB1pXNdQF91ekei7F2",
  "key32": "67Eq7TUmk69ghsNYvTeAuFRoTrc39gLQXdEpLyGo7nZgSqHSTjYdEpqfhsCXMdSVpkarruNwLEShsxnry1GiCtZq",
  "key33": "4uScZydMUCDkSsc4CvRaTTRp8PJDU8nYGNxmkKisgn2EiQCe5LxYADJmZ2jFr8XPJG9EBMpvP8wPMoguUpzFeAPi",
  "key34": "3ovA2wRTeirA2grDMac9r4K3T6g1yvGGYt5e3fjXHG1wdfWtsjTsPrn49b1buuJxXAuGMKS57NFXDQcFMp6QTxBQ",
  "key35": "5KvRALLimxiEpDP6WfGtQyJjH915fgY8NhRRfdA6W6VTmE2HvJiqMRWbEqGUaxYmukAdChkzCwp5P5y6qZ5tYpds",
  "key36": "3ZjbvQvAXqi59t51v3GqVFUBAZgH4hxNQ2dL7CvX9ADH5NSye8TV9mbhwg4FhKLiF8jNhDMFPkoYXR7eZktLEM7k",
  "key37": "2WHpYUkpL1CgYDP5tgZ6jVgqveraWWp7CkmBq9akC36LTYeE3KUZ5wWZ1uj6CC1PjdL4R2Fit4YS5mL77bXQScBb",
  "key38": "456PSkmiUuFBWNwhskHqG93pjHcHHnQMUzcsskDTiqCyPRP3cNH8DYgUDPC7gHd6khNjxCe9aDk2uiwKm5bAGWHX",
  "key39": "29aW4Wt8PnfXNE4SVowBvjN5L9YfG2hAJvwsTdxDsXmHHiNQ15z4ub7TNq2Bsz5zodUenK7bmTjs7vuAkm8m8Gzc",
  "key40": "2LUfQi9d3BvH3RViTqPhG38uCgMSzqcJifaE5TikPQNKzfutnLiq6MngqRq61YCd6fCut17bcQTPdxMVYBGQw4Vq",
  "key41": "Jyk5YXBd9EX4xRxpJrewnYQcLNcJwpvk49gfUMuzGrPXRV5QJijwe5Wi2UpmQbWetHrndYNyuRS79mf1FUja2We",
  "key42": "37PtY7FBsHkJjcrqk1gk193aQVANUr6DmhTTMupjTuyvtWPW8V1ghGbFSgSBJbg21f6BqTmDaEvUeB3EYWKXYmWB",
  "key43": "2zC1kL4NMCceFmisPZ56wVuLqR4zQuHn2bsRXNioH3MMs8wJYoFcYSyXDX3MEermp5fVRoDroBFkadVaSdviwbS3",
  "key44": "VEhr5NqcAfzZB49A98wtMVE93KAbGwqgGYSkwAmVV1aufqwRU7oi3mkAfynd6ZJFXoeHqsWxBRQ91k8QLFGZFQj"
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
