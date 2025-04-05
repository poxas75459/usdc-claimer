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
    "qw7rAtgkrS6Mkfw2gnkenQU9Fw1UuStvxeGUDrevNkpdvK3aMBFEZmPps938oBd5yrD5XZV7bqVvfqeHWrVGc9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXL4i9ysv1Y9MqA2w94GuwPufepd7q2JyQwDqLD9qFMPuMdYm2xB8zKF2Fibk7CvJaGC1DHGwvnS9JjnKmYkQGT",
  "key1": "2Pap3e7xzJAd31yUkCmcptyMRKoUvcUVHVHqtaKBnCRyngf1WbTqZWDBR3Qwx1b99stMMcVyBZLtkJR7jB3MxGMY",
  "key2": "Ks99xjn5YhaCyJmNXCHFQfrbWb4w7ncECuF9EwRtLVcMJ78mTHDPszRsCmJJ46LpTMFQwLqdRVYxXgDcuAwkrB1",
  "key3": "4npCgyshdB6dvXCTZagECFfMgdu4f5T7ZtcQ6UVX8Kg8aDjVuYwAwCf8zT8VStzkn4gdWGbgEPVoy9Y9u7YLoNwU",
  "key4": "3XFYMKQdAHxb9r9vyKQncWzjkimxxeUkkWdQAgXekL3rNrmPjiCH3Uaa8HNGsXFZZjg7NBS8PyAVaHDTcE4rAkce",
  "key5": "2iEA4BPqhkAeKJewGGB3Wmq1EQmR9jr2Wnp3VmAyyreQn4FvgJ8HozzZskyiuPt1B9sRxaa98Cy5W9FVZh37xXVo",
  "key6": "2g56KHq6iSQ5g8vc1gfbjEZU2s8NRnetJvToDZDZBSuT9StmE7UQA3bpzDACjnLVHfd2R8KsudgESWULD3G9nM4W",
  "key7": "5SH3N8rwDCaaY2zQxNjP1nVG76ESZZPWMTbcqjzjFAEmpbqvLs4fRk8vEEnzGYg1XkmHTxusMeYoRGZihR2LgrUf",
  "key8": "2naQA3Exb6mUsRubkusFAUwruNCPz7T5hpEskVrziBMHnaHAT79jtrpLNjwVeVM7RgFLsCDtoKLcw4dVjEpmCCEr",
  "key9": "5zmbE7fzBhKcZbS4bgZLxnsMCSuCZ778znwLMTVcfGSGB8q46VYnVZsYUfrxxE4gDCpT8tWrucmouXj3xTb4VHmi",
  "key10": "2wxkjmsYjQNPxPmVtAir6AMvWiHEBSCYt7GtrnPCG8qKmwfhdG5ufBKniYCDBU4zPdcZbWim5Pr4jCMhYViAsFtb",
  "key11": "HEiHLWzhBC7D3Z9fbwhHCCpJs7KAVWgSiTcBX6ZgYYEJDT98mkeyCR5FDHMmHndokJaEFXq2Kp8uKeNU3hLiCey",
  "key12": "3aRtBkWj9UQTCTGAjc4zDDeHMXFVuqXfan6YyZMfzGV2ipiyBWEYtJoc1dwug8SS9pkNTzQixW54gNCDfR69YzTv",
  "key13": "2RSp6rsHB3MJrMR4NDFkBriVvHMtELg6EGtLuqJTQmvzm41LEofSm35w7EedQeSLbGDqQyckZxVVtEP6XevrqqpV",
  "key14": "3iPSpW4HxpVAw77VkTkrFQxY6yostJmM639E3WsR3bcdSteWkUd7AyCBL6yCtPqhCNNvBhYZ6bNhWqLXcRypqyB7",
  "key15": "2FSYkm5MTrX1VegnSS41MVDudqA3EXjekMa7gsT4LvsW4vgp1owUyzYwhJAcXQAar3f4epucj8zaYitn1UUzs58h",
  "key16": "4Cy8RBPP8oKS3s3yDVzNZDT73BKi4Z7hzPYKN26fHpgz7UkEUgtMBsPkMRHuQi5KBe5ppFvNGYpgdKomHkfieixm",
  "key17": "rXURx2CEQdLbj4QyxSKubBzEfQgHgYXYs6MsT4N3s52XmVMUpF85KKMjCfbLws4RJyC9ix54scWzTGzEDdEqigm",
  "key18": "4vCsWnFJdLAzStmeutTJtuw58jpgfLbyiocH3WW8VUkbvMtX1AGYgdaZWgmECK95RVaVAznwKa8W5mgyWifyqAxo",
  "key19": "5R6xQtsuh7QyEEnvKrnvrg5Wuwjec7mQEakS2FQ1bfonLMNSAvFhu7DUdjimkFn82xBGeAfpKSC8K9wZRz671kxN",
  "key20": "3BkxCKFx45hm3aXCiDBvQN3K81DFnMaKCPuo7wrKiz8YMQCRBXaQVU56S7dfwaEDwWAAt5EbkYVSxVZsmZgmF8dK",
  "key21": "3Bt36jZ8Tuezpw9t7g6BdknW59nnEQ69293eHws1tvN11x5Zh4F64DQWufk7Dd8DmEgpi3VQ4rLEuTFAcM8cdG3L",
  "key22": "2THgEUTbdVfYR1zax1D94X3TUa6DZxfVApeJodvjZSF8GixpPBtiv2VrNYxRhNQwq6HtDyGzHhvPkTwGGveUMMnQ",
  "key23": "Kk3G39yK4eHteJLicfJ6AcyQ7VYy6Uo5bE13qXx2BXy6vKkCWeNrx61hxkf593D4uj5AwgxrydLhwHK69hPLkX8",
  "key24": "5dmEoC7cz7Z4mZgCobgvYXe7q5XZvuScVmzeuaopT1A5GaxzRXo6QHpGRTQVR7ZqSEwytJvbkwQ4L8ph5nLjBSwo",
  "key25": "9zK4KAoF6wZEmoYUuK3nKUyn4TwiPC8o3uy5j3TvTjt6PQwDEcUNimBjhBtNMy8XPHyjvpACnXstZ4j8jmrGjgd",
  "key26": "C4DTadXqG1dmoGw4Tkm2ewCFKgUHGowwvjz8VsGDhpSKELti4Xrb7xpY7PvSVZZ6gzeeWjqkKzkQHs3hL9PyV7h",
  "key27": "64cwxv3TCrYweYoBHWUZJHx8w4CTEr3nvRUEjTLe3BJagGFbLPxsxRhhevjA93FBGboPn5iLh8pkYAwnHN746aFm",
  "key28": "5nPMgQkkGCKyMZQsDg125qMCKQs7MZmhDjH6t9oXZRRNc2GcUj56Bg4BKVz1CdT8KujNJEUURZEMTEPmofnraVfC",
  "key29": "29heKjW5HdXXgxjSpSk7eDbm9dbLwBhaNJbjDgwBh5U67vSWSdEK2iXRXRoveBkKdYbxjBKkK2ELBoqMFGpM1nrH",
  "key30": "4FjGXqQSihf1XKpJcUZEmwwxNnHu1h8E518vy9MzzcgSqrgiN5Q5yL3f8aZYgHHh4yBwRKThZPVqJk2MMpxXFU1R",
  "key31": "3V621dmYU38zVEbvPRRdLfYotvNSqCwnadgsY72qiUZuT7iMozLWYqwQM35tVEtkfX5aGwkRyUkrk7AJeGFGd4Ex"
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
