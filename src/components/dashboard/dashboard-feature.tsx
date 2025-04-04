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
    "RYzCv7P9Kvqo1DwXobotwU6PvrqBNXdU4goMnjcWakYgrnFvvijk5vzKfyiJ4pFNdPT3zyKsSZKm111ksvtDMZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9m7ciSZ2mDw2zoxPpLxWt5KcoFFgxqm5mrAf8NfyPkKXexB8TsQ9oTJvTveevxpa2CxJUhMFDkkQChDUh4Zs8E",
  "key1": "5dCXpJoKpCHo458hyo7MB33YPwKccjP9G2zKW4HbgH8vuK7VrNrivNV5dna7Zr8R8ZxqWjdhMDQWGZNujKucPFVK",
  "key2": "5KpgaaSQZ4LKWtDjWswrb1exm5sc2PhgTfasTD4ToZgRYgy51hhHrX8Xa5rEZ2nq9CjS8DjpG76mvYLaZksbRp13",
  "key3": "51TV9GxfJvPPGhn9NorExyes4d7z96mUei6zAc31o8U92LahrfX2mVgnnkTKQt9Ezm5DbGJj6UQyVFbWJyY94tWR",
  "key4": "AzzLzsCmRRYTmxiKmJ3S7RKeeRgpKjHTgSQ4o1VfPK4aunrC7HVfkYc4v6gzP4Z9tQkWDBp7mkLSZdqesXZGaiW",
  "key5": "2hddDUH5gVhszUbaxcRDKXDEd2a7Vwp71x9YoML4xGbMgUDr5zCZ5EeZ5pKPzjtqLv7kHehDdjvMJyWZ1jjZdpPt",
  "key6": "5VuL8EupdQtLpTwsChzvEpgvykR57NSL7jmA72CrgS1ckN5KvwYfQNePPCDkGCCXnK1XbDCcnmnBKGjXsj4Q6Ciz",
  "key7": "55XA5biz9TL3stoy2CMG1pDyMuT4CgKcizmpCFJpkhooENte3cyR1KH1HHEkGvCRJSuALULgvmb9bvugvBA8QSd5",
  "key8": "33HdzpSJfMGQxLkVL7n62sig17bGs48fupgQNEK62pJDmFEHGNTgcxQgvNDZLw5iLYnwR17TyEH5hxtUTSWrfqXv",
  "key9": "oYYYumSwhnsa8zF6DXjD5aXUKtddMwmQn9FPC7hGz69kPAofzSaJA2uzdcHdPpg6achHy7bkFJHhSz5NoZFVpr6",
  "key10": "5vgbjHuPcJNxm6etKw2uL6tqm9w8pH5679RBXCDXWCMM1LUSBDi5WHYSNTQBAPuJHDYb5XejJhCnmhfDKcmwPvKz",
  "key11": "2TDRS9RAaMnYdAaYF1MWTZnMpPJDfxegNw63zXTviJv97uNXeqn6w9uVaExRpq8bpUtpiav8LV4W4GkMxpXDbhuU",
  "key12": "4jeSzXApwJ4u9Vr7oYksumgtzGaj5DYsrosG1s8L6Vk5LNHi2bDuBJM9cAU59iVwrzu4NnMvPLzzT5cE9Vu6Fnni",
  "key13": "4u58grkiBosWaoEZed1yMMYEtb9hKaaw3uHYhykV3SDd6YSCBZrAzyJd8GFbvjSPy5Bmv7SMJF88wX41kvmqdoDi",
  "key14": "3pDse3PPqm8Dfgwn3ZYYxUStmtMJM2mnxpPBu2sXbtPkcAomapmGsDTLcYb6nJMZUvhuNDF5RmQsseJfHUkqE8SC",
  "key15": "4XkHLcAyCbV81xYwMSyZZEvfeee9okT6TvFcFppQs2RYx4rEwyRsBwW6Be4QRVTW8kRF8FPynH3CyQ27VReKEcTn",
  "key16": "4EGhNkKZsmQgtcL3RCG6MQypWu14XS7H3Vz2U3vLSjfaVbUqG3az33UkfeyJzdrJSREsdcwTZDHA4bqqcw3BykUz",
  "key17": "3GfTeumCREnNRqC1FvVX9m4mzZ4ghUUqJsxyDp4VrtZa77UtFRziwJCdnDmtqphPWTDurSLAxEAbcXfmzZyDqBWz",
  "key18": "2UxJPqZ6N73QrVZ83nimRCUuMfQxunQ12V6zYSnQXVLzcz3XmjzEnjBorUbyYpnRMFMzd8Tc2RD1W6EckxF4n533",
  "key19": "2woTMGGQgYgpwGFdULchJJmjoEzVabnAJXSfC3V5StX9ymvTMMr4EiJdYgR5hBzx6ErsPXgHZErikMU6BUEkuENj",
  "key20": "DcRWpw46KkktKJQ8VxWQn8XA3ueaLzjHWETsEJRwgCVTs22bZBQ2ALbBfw3JdvGAbVbtLwyh6uvYN824vpfwD9t",
  "key21": "59gyKEKmb9hDrpH6chG2AcDiJHabq37ycL6weMdBXKnoSkZwDqxNzJxfHp2bFb8i2RxkMJD5qNAzB6iJR8zy1Dv4",
  "key22": "XazwJcKmt4N82SJcH9JVfpRHS2CxKW2tqQVe2EfgWknDwK3RP2K34UJPyc3M5UDoNsTpbtdKpt9bsE1Gw7HGSs8",
  "key23": "44umxz372xNv3YBNt8TAF1kcm63P9SS4BwQJ7Qe2TMrdJVHmKmrHZdbdqWkiWUPyrGSAJ2nbKrMeA45hxfY9JKq1",
  "key24": "4zxhrvDhs457dy63422sBzVvpTsFDKJBJmGk2FYFZmUXvTBSBe23MceY2shHuqEZzH8VU3ksJBRQxHZ5seLNwa3n",
  "key25": "3QzzHGs6RBbFKJVroCvJqmUVrAggwVZo9P2d22H1xsEcPiufGXmAhTH6TTx7ygWtNU4qJXQH8kntnyVQPt2Dfd5X",
  "key26": "5f9inbQxcQQgg8Qk5xYB14Ju47Uz3n6FQqGe8kYgnFSj2r3zJEVwWQiy6RF7jfym6Em6Jk967f6nRSVb5g7dk3g9",
  "key27": "4Dn7iJtitDPHdYaafTExZ3Naxxg1eCxpYjDKZFhmUa2cXC9putvnuLoqeVLKkLMRUBCgSR1p98mn84UAa12Nvpvr",
  "key28": "VgbuVikiLrVeH4xEZHdcLZNcvZGuVzVeoYHLS1PVE99nMzR7NAjjfH64Wv5B6xsAbb1X9wDPrpc21VCkBMRA2jK",
  "key29": "5CL2Uri52euNTqTKqq4n5qZiVqj5myfehYySreGHVhcbCG6ANBJCwJvW5kUFUuhFTBWJqpcbsPPKNceaCSgn23rP",
  "key30": "4anyrxHBpqDmXKmsxDmRxrgs6AQAkgDy2rvmfaGqmAdEz2hDtRrjCYCNH3XbqNvMy6QRca86L7jfGNvM8rydSSU",
  "key31": "4d7u8bf3zA5qrskzmuMwaG9dP5d7SHrDvV6jpy6kzJ4z7VkKN6RHfkk6GQa33m9uX3pufNbvXyncj6a12nSNhudk",
  "key32": "4kxVtVUV1gqJiaEEWsMoFtL1fSy3HcHAk2F998Zk8PAYNnXvPLxk2CuXrhpfHPS9Y2ZskLjJwZCRoFTvqYkFni7h",
  "key33": "3fK2fKuuBkAV8C8oAmmtYtXPKwmNDSP3yvNakLfAePePgj5jkwad1hL23HbQkN9kP3txrHWSJmDCXH2bVReeTjs1",
  "key34": "vFeKNUDWenru4B6sa4M39mEvJP8exkWF3yrVdjTXqjFKRmNbruJvEf3w9rhXR6WSpRqausBvjjn9YQzLXsgVDv6"
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
