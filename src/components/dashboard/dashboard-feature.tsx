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
    "2e5K2esoff5YKd5pp43W3nLQtyMR6py4WeDbQoHUucjDb9mzcn3ZZx77G7pnQJGZWX5XzePqu16UEA77LXGj8FWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2parhpbV3yytE4aWiY7j6th29yMb6Y8YxgjJuY63ozxSDakgLzD7smhE3FFoTn4cmxLJQ3m1nhs2DyUPJ6JpR7J8",
  "key1": "3sR8RVeJzVe8LyJB5XVUusXfRXcyADEPwWAThHqn7yzZWjEpFjL6ZsDTUgwNHyUErZwWEvwajGEbgEcpWWWXA2jh",
  "key2": "4RQKs3ue8a8agvPh2Xssrc17yAPNABUEM4D8rCKGJUyjpYZbmHssmF1gnYj1MZehrsL1jJtvWXaaDH1p1sShgKQc",
  "key3": "msrZxCKNiSgeWXxFqABMhG7Wq3rtZiQQncjPh1NYCLRayGm43hhKymGSXrc2KFkxqEnyD769h7x3WCYkxDNCbgg",
  "key4": "3ZKzmC6urqNwmqVAL2RqZC5xXuYkbvPrrH6eS5VaHbaapTAy6274LcgGepVk1V2ckp9geuSezzXiZ41o6o8XUEaX",
  "key5": "55B8fCcddf7uspCN5MoneTEqWxmbMyoSBTqKAZVhPqHqbCar8xZtEYnnWQf89HNBLv1N8wh8hesgZWgh4fuNEqvg",
  "key6": "4yQcGe7V8i5XSHsrDZj6Dt1NxoD47dKeRMKNSw36kFhD2hNw18HVun6QBPwMmpFa1dHpHCvm1zjTL4Bdamwg8NsL",
  "key7": "47rfg85nhzbmNs814xsUy1XbKWseZVDnAL5SL1FqHH1efhU5BxkdwLzEKaGTQREYp2xNfmuBQs74UrqRYgs9GJqD",
  "key8": "2tqgAcqUdt2FhG5yn2Dc87WjjtWUvYJGZLNM745kYSQhwAgX7HgqHVXeb5WcsuLak3htJqX4MT5vS4db5BmJRbyP",
  "key9": "5HRmaqapxq7RQCqHDVXnmH5tBYVBtveyPsjtEB6JPbChmWM2xbotELApxhiiKKDikpQ2HD7GDXbVzZmDvzV3GsSu",
  "key10": "4EgBp9SjjfrUS2vpuaEQLb13jgbfc8bzN3keUVtu3GcSEkmr2CcTXXTU3JnezpmyMXTLpwZ5uzxkFCkPA3ExDwfy",
  "key11": "23KGtk2wh966KekYTaMsoepAQT9wQWX8q3yBJ1hZvbmjc7bqZLQb3cGRUnzZcVStrQdfn8dq41k2eM7fSTwdWTXp",
  "key12": "2vL1o59ZV8HUwv8Xe88s6HaCbvGojRD6RJNK1PCyqbCj2LK85ER6k1jauF3cmH53B8aAR7eXbj3NmEPVZAyVpUhq",
  "key13": "61ADGDZzt7mtYPGnxnPA2NWu3cumoVEytNYfqxsy8fKYRNTYKJ3obakfQ3kDsoU8XFGF6bb1j6mb9NjdEVHwqhQi",
  "key14": "5AZuTfBnpLQqvMaSjLGNgguY9FbRz4jjPwq6cu622y9gNExQyyrW9EFRcZWtsaA5zSwGyijcSjMHW9mHk9BYY27x",
  "key15": "2fE15kVviZSzro3WweRmakYa3aupNkY2QeqSyfXF5tAs56CZ689TY5GXbLB4dRpmQEbRqnoMiUw5uwEcmqspHr4W",
  "key16": "5Yzf9QPvaMrTHCZbLyE1wbZqBJe2v6qMvtDH5fuJnddF1b99LV7yZGscbo2Z2NiCs5UoyJ2R8E8Kh7ve9N9TeH49",
  "key17": "s5sCKhYY7B6GCuYL39qqyGLyF8NYUvFoRDJeEpsDwbBceyLU3Q5X5ZoZv17E2wdpsEE1VyhaofcVVYohLHfJpEa",
  "key18": "2JTxbZKVxvU2kUcP68gfS7BpjoYCgEE8iyKi1Wj4Xq7z3yx6VYb3kcMtBJDhaEwFuqJU16N1Zp7howACZB26Dptz",
  "key19": "2HcNwnNq3wZQm5UprPD7p6MuG8yW8gdMh7d5gFjyNqoN98KujLFptGCU7Uhq2NnDddHWkGWow6CqpuWr5APR3QWQ",
  "key20": "2FtBbehYpALiWNCdKCC5UZamFtXCgrQURBBkpLAyGUU4WNPAByqfwuLY3pPoAq6mE9AWmEECPF9yY59SeaCXeQAc",
  "key21": "4hotCUiHg69qPpc8LJ23X89EXXzCE6y7Z3QRhNM6pF6vBXfD3Vv4mwK9m8daLUx9VkuU1GNMqX8thFyJLj1GCtYL",
  "key22": "7gv9Qh9WYrcouE6ADUchZECBka44XPfTmTew62t7Q6PLx21VawgnP2WnW1j341hZ9oQMsjQDAcxbieFV4zGerbR",
  "key23": "5D6Jikpj5rHmYkBXse9T6s6iPcRiv1aCtwDv85WLhc7ZvM3u8PhrCYtkvDhMGj17QQenwr6Jh9STcdicZKgDSR17",
  "key24": "DjFzFf5sknPZ1yxPqShcBimnKXNtpLe9pbUfgvw5Na1KqYoBvZbGbF8tspPDzSRybBBJYRbBj8DFZxPSXFf8tzs",
  "key25": "3w881rpmkK47DgBUjcDS38wNCdricjTh156YAaAfKiWfPoG5Ydw4r4phLe16Az3hB7Bx52RADWfoVX2keoaAQcUZ",
  "key26": "2cCBLJunbexNZrMqE7XDp4BNiMmtdPQcXNbvww42sD892AvRaUQ8rHXf7jM73TCt7MFJ7bd2WRZrMsmk2Vonu2ow",
  "key27": "5qMpzjWP6Wh5GV6ZhN2g4BBaTbMa3hFRD2nP3wpcCUKFTn5amET6XdoFzzgYgB1C9iD1WN4FkapnFyuf2rbd4WeV",
  "key28": "5zfW72ss88NQwwjwPHHbPZQrFSPeTuMGxR3vyHtQG8NRQ3VKao37LzWHiGHqQ3SfgVbSNi1iY26P7fv1kWGiwX1c",
  "key29": "74QJ3W9GwB4AW6bCT2Gr2Mqodw4LnQdCn8KwsYfNXnX2hxxF6vqFoZVaEDLEVnWx8eZYwpJe5uk3w8bgZNo1cpa",
  "key30": "5m3HckdVkjQyF5BWC4m9rQofzFarqfCqFfXqNJ4wTyp45kKpxK9WPPmW1NyqL3YY82nRVM6U6sasDX6Hzw3e9TYS",
  "key31": "mC3hGni6yDorRgJXYFnfYHqLb3y974CCy2aTSMTswbWXB64ivCmQPZMQDkFUfTzPfwawtt6xF2Ure11WZ1hvjbA",
  "key32": "3u3HCXP1NSy3Hev53uxEiabop9A8zujbcSZqtTPGxYBiBk6zagwxUtRCLwjjhpeLhLtqVMbbLCdGTLZJ3eKAEtCq",
  "key33": "4L38T1YfC6BzaWUbwUgAHY2co1Jdt9a9KjHmePJ4BRsNRmeYKwwHLRgsK896PSe84hM8GXBFdTnotvvwbKiE1GBB",
  "key34": "3q3gpgcbCmV2UuoLDmefxqmJ4kiu5i5LgRhKDEaaYHQ25Sj4SM9pf8dbq3KGhQSfwBczGF99mA9U42H6hw7kUcah",
  "key35": "3LGPeTiW9hz9wg8eErE5aGyLfKda3ndt4o67F7mdUj3z9XpDrRnUZbK6M7DnLSYkeLQifpDWcPtFhVAorH8xC8xj",
  "key36": "7LH8yCq3969jEwxva5jfXo1BQ5jeiBNkG8pTzYXg76Z2aSSydE7G257Rc2jxAh1sACKMHHG38kGeLZd3adwBGrr",
  "key37": "5ojMefViAUrNTxRrJn5A5CAXnToiVB4piZB4pYkkJN3dEBMJuXLxsahxRcA6X9p71uCgZrvehaqsgWL3bdJEPRg1",
  "key38": "3nf9Ai418BiTJwas8kw5yCHj4BssyYmYfi9rDRMmFcrqNpUi3r9e8BhJghcaPWRkxg3ik26b7U4uJTN4aaicEynH",
  "key39": "55gXtJaSw8r1oJobP8qttPZACjWcuJZAJADcuqHqWCDrwAmLXdL8ETfZXrXsny9VL3e4FnNsR4QkckiWpMoa1GLC",
  "key40": "4bYbZrdSgm56sWnPQk4R2LBbD96W26mB82e4MtwMFMBWrpcQ19Gw7eFDpwS7HVUKggdWfSLCkmr8ZSWGmWr7WoUA",
  "key41": "5edajjJKpeJL7M2cTr4x743RVsr9xG5JSQxj9NP94hwbxL8TeLFabaynXQ79xtNKUYcYEH366mikQwbGNj7e4hLn",
  "key42": "2GiBtCE2UEeuLYLerqjFjyXCWCkpw6mgCQJWrAEzGLgEuW24Q3BeFyctv7HtGAiZiT3eUzAsUawYpEFgTsxjg8QH"
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
