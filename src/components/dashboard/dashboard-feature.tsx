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
    "36Ffk3XhxPLsQZm7rFF3v19ZfnS1eexs9UNCgXDb7rXW5YPUuuSSMN1xQeLzkPtdsx5NPGQUd42RK3HPu9QSZbUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62iQpv4DedoyYnQZFWYZQU5xbNQiRHiqV6BSzzLfq4aAGzSUzn8pyUoMvbWoefR3P6GW9Z3idQRH1m8NVNwRj9t9",
  "key1": "4vgmqiH8JAo8gaFp4AHezo2zAoyH8FcUa1CPUakjdXP6sfGQUvbBxeEQybL6txECRZ2rbBZW6K3EyFgBBGLPr1Jq",
  "key2": "54xS52r375BzVsvyKsZhMuLtqjGyVtfyppXQnaHSVRkVQDPySMAH6D6F55s8ubN7k7Q82M3pvLWeSCdKh8Fincwk",
  "key3": "8m4bB2WBsH3Pkfq4eaiRAxY7FJ3me6hYs1fW1Yxr8nfJBUobhuA2fNaZffphn4VRCMxJDq43cBMnprniAHYw9ut",
  "key4": "5ZGE81X6sRiVGgvwnx6cjSAwuVZArPCTmZutNSKmPbJa8aasLovVmYQpSKPtGTrErrSLZ5tpQqLgrsWV2HbfQov6",
  "key5": "sfsABLnAQ3DqV7HABHwz6ED4yV3p3XbAHCi6nc2Z9kf7xnDTvVvfhUcNZWqeEotBfrJoUvLh4t6F2jgSyZvds8K",
  "key6": "38K5wGkCjXr1x7qG9NZ7fNPMJdhL5jdhYyWQxmZwY4SodR3viMBrrBcdYtjzeX76i36A3ZzZvTSsnqghYyCzcwpW",
  "key7": "2tvVHr4HdiKaSq3wHSjxAoGe8gVgyuyQAkeum3tLGopWu2TNBJnJNeUUbCDWuWPPLPp59AtYAjCbirS6YkG7jajU",
  "key8": "632w2Z8N3XADPWkuu9NGzr8d5bezN3M6Pmez4R4nQ4dEWMmBvsdVkfCqXvDGsFqzmPaqhm3QbL7fA69JNMRyFvjE",
  "key9": "48mbwVydrPMg3s6kThBt3NuDQMNhoFR7pUgWyfeGQqPKQ1bKycLao86w6aUSrr588aAU8hihG8HQR6EW1oJTh2Ym",
  "key10": "3wkrYHxqnP686Y1rMxB7rVCuRY44jqah8Yhc2BNziPKt3d8ezjx54ee6nrEndQumSsB5wRSnPLmHyk5eegG6KuSq",
  "key11": "4bAZQHPjd5NbT96jzTcVrzHAKwaAsbBEiwZLgttqNUVffYWJgJ1nAMxgoeoHtiEUeXQtucVZe2p8fc7BKvEnbSNG",
  "key12": "2MLBY2Vd6VWu3jCxCiKRYHMHBduCZuzW3iToFMEqYnx2kCsCqeDir2uMP5fV73AQPTq9c4SmAwKS2xwZxDi5NXKr",
  "key13": "2PBcEfBQPrgLWEmoKKqHnMKpBmQHr7pjDpYyrmGbKqWEafk6TXShqTDa2yYh5NvboZ8AY4XLRtqjP5kKDj14Co94",
  "key14": "4g8zKcj4zPq8xrKgv89RjAqRNBf9kJ76Axj99d5prSxvHiBWswvj7A9u42hTRPWwmXUyF6ecuRABSRNtG17RVrTn",
  "key15": "3rY2LmFiJJyZbpA7f6E5HsHvfdXvrDh2WKXVxo5HQPNjLJddUZF9Ws4Epa3yMr71vcXzK3pYz6y4PLeke63x6xYy",
  "key16": "4r28g79tN1VyHPajDGCA59J9ighu75BdH1kqFusUc1cjBeEt8D6ksYhSM4WhFgf2V5a1mKFwzfssZ4RREweYRnst",
  "key17": "3X1i64njssJGbX3pJDgg2LQgtjmjoMvyiyguVbuJRbtLuSvNcKmcXzHz6YQhhtVdN685P9Tvr6Po8AScqgef7D37",
  "key18": "4J2t9YsrDXbV5GQRcSeZmnFLrTsXvfDkJQxGVHxChxSr1hxxVBc4ygEq7PNj4uYseyxZRCHofqmeYjjbT4VhZKa1",
  "key19": "3jf7L3zn1F52osVPc8ugC2P4k46gArjb2XE2C4m9oJKKSmVYfszqYwSzz9CBfHa5jf8rFkdxfvEDbDb7kKDMSFh1",
  "key20": "7wwVwvYgArfVUtk2SkYZEwzncSZXA7VaudBmaG6dBf72ZD9Z3LqeUwMoR8t2F4NYz3SwFCYWTzNGbJ7FhEjyqds",
  "key21": "kJTTkHLBT7LEKCKCSB6Kqq9xmwCQ7ArWNgjJMSRp5mpBtaEA6tJQdASAVbcDYm34tpbQr1b18zfs3BDfvezprMp",
  "key22": "4o14i9FsLtmLHAptNnEWZLFKmLgprFZiTsMCnrwFzSo3TpJ3JmjZgp3Qdoe6ejCsgBsoqzbnsBLBKbyqGXqTkDhe",
  "key23": "5QpoCeoZTYCRYBkqboa9NUghis7VS67BUeKCp3fFuypMyaKosrVxP4wZP2McJjv5XKrX1ixATVVbZ4Xv8bKzg5oG",
  "key24": "4ToKNaytiAxUtskLKk4V637Yhg1gj3yfoong4otAsnqv8mADzQJoEXBvAMTtqdjm4yB799HRtvxTmZfKVkWMb51w",
  "key25": "CfvzTC1HeGmdGiJf4PHWNHvhgkN4TJ6AEUCoR9G2yERBqNSLXLt4hvbSHt8uiFAdq13gcBeua5YebASdqNavu9y",
  "key26": "3d3KxvHK649LfMESbqvdAeaa1aNw6LTvZ1LXFHVsTbydw4Q6GTrc7uXqVt2f18VsTDGbpzyfpqQCpPAhQVKBMhay",
  "key27": "56DSVVDF2dsBWhCJtfUvpZDMEEbaGVzWcW37tjUKxCqQkTdLxRHU885dSf82Pri5yvbTzvKdoayLAetwjGFYpi1C",
  "key28": "Hi1Xq75pCQPebSVn9SspxtDmuaFdae3x4CPiLZnQZRhPhKpzj84SSXvZt2qghd414AvE6BjGJd6TKvLrQgs86aA",
  "key29": "5CdpyoJr1Lw9gkpLuusRoCG5MV99FmKWRf2n85S5DU1C4fuNrjQmY8UJjcsyoLUqiNJBBykjaJeTKnrE8W6tmQ7H",
  "key30": "3NXmVZQjpoGrhpRbX9JbeWs3iLcTqY5wpk919WE9httsA6y22JYeCay2DZDxAbHUMqYfygKzt1xutH5RjazpiH53"
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
