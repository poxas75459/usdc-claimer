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
    "2TCNpCi9oGMRhHaea6vJW5SNbj1PjuhnZV9ghFiu4VQrAbw5MVpXzP2ug43btZDzoVmdu2UHBunLbtXJqGgWL4Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8kkUR9JehpXe3Tcxg6CMY9qxJHcDbVxvHGhmxUunsigs74DnnvFaLvT4BGdzZD9vj7nVVDVEAiZeuwRWa4KX9i5",
  "key1": "3ENxzT6EfGVx4RwFcK2DMa2sUBi9PRjzVUZnuKhfEpUpoEJQP5oPYRBeDbxk9yPo4rJrJrbF5k8s46un56aQqpE2",
  "key2": "64KgThxAEgZm2n3DLJGAAg6FsG52haYNPKyfQyoMZeRP192Dpei3cWhq7dugcLPAhx4hSRY6PVbT3VE4Ljftj1WP",
  "key3": "3VG45mozaWPdiHwPbxNg82odYjo7ZaHRudMU3CnZfLHQmiPrTzBtVhzWhJXmy9gE4a9MfHgAwrKq9H4giLvK2hf1",
  "key4": "5F3kwaSBjaEN1ZwmDPbCLNdSc4YpLu2SGZmQQ84zVENUEPvusH1FBkREwMA5AME35aBDCgLXLjutg8svA4uj1KiQ",
  "key5": "3hLeiB5DiT2s9pRWmKFXkdVVHVhZvcb6KS7ynukTe63vEbE7ZEL7kd4DC9S6xadPSEvW4RmKpYpzHzMbqbKHPYQ3",
  "key6": "2rh4kRuGotPEaViwstKsri9AbtEyjSx6EJJEg1LJ28joRygcGJ6wAnpnc2c4qE3dNkUMbtxU2LxSkZrXMb9zevWv",
  "key7": "5Wms2gYyjMsE4TXiMsUdfUzm8QyER8wtM1c2je6UuxTUcsXrBqznXMG7fXvCeSfFczWLt9VcEAEM8mkbS7zuzpdp",
  "key8": "3Wfkn9WpYVJAQXMAZ3vTNMjUeqGu9YysyJ9MB9PQTUAWjiigSih9oPapiPGXoMMjoiQFePpCQi6iqBuaWvQxGCkX",
  "key9": "3x9gUiASTDV7iHjq4ToCrUwXT1DeZm3cegBHMsS6CJ8GCBKCCQknrWyntZY1c4E7zECzXA94uGXB1cKBKEW4tWBA",
  "key10": "46WR2ks8apSnirD1K7ZUxNV8Qj567faKcXaDejwny49hWPfJPzPvGrzTun1PnTjMJCyyxetjamGVf5GiQPrf4Rt9",
  "key11": "2QeEGJCy2Dj6tbHoVTJroB8oUQD74nK3v3hBpf4zWK8M4m6LFEWVZoPHRHNS7gYhKyMRQfZYYa55T2wu6YwB2A7Z",
  "key12": "3GkKqKkTwGViZkoJKP7gzkgAjNRyMNkympnCtTPuaQnJEcU3AkpmKK3gowRXqgdm6yf5BixfB67brzy8UxLCYoW2",
  "key13": "41dzVGjCGZWZTbWHWLKvFHobAvpfXrH2GGCJycxcFo4vU4f5vW7exVWDTZm4mBoQnGmP9Aa4MJJNQBWajnWWzGn5",
  "key14": "Rvj9PBB79phpK2UcNWA1NeEDTj6KCWcTz4o83BKtwFtfFk2fQhUE8WUsTV7UAHVUQzhBgey6Hk37K4HLS5EErsy",
  "key15": "2hCjj1bzKCPrnVu5fTiqRwKoEifoXzygZQD14wT1qiFYxU32uLDeLHpnDA2y3vwvUtpYFwFBpa9G8r4jtXGcyzpH",
  "key16": "2D14jLsU1WRnmBgPhhMFVCPrTEDLQ2B1rD969FT7kySxm1iTLaAzU5Bz1TZZpE59hSFDkC9rSEBtWwsjRZBpwSyG",
  "key17": "41qLbE5tVDpSTe7ngLWgesU2w2VSSaxvnQHm9ZWubvPvJi6VDPT5q6baELaQ14TpoTximwrUSu1a9TCV7FnAVASd",
  "key18": "4yGK6AW3wzLWkCEP1yzamrsbHrWYEP1TjH5YG3Kr7fvdXD9GzFpDwjjc5FQ6dCaJSHvL1DSyUaX5uLoxyyQNYC2h",
  "key19": "Xxwu7cFgZxsmTWihB5dK1GfS7SfPQKy6AzheA8tqegjGEE2JCkEv2EjzMrQxYQqGsT15Xf7nPtFWoQ6uw6V5yCG",
  "key20": "4nmV4fTdmyxUWJZGsmFSzkxioN2i81au24zhLcC9xDPwFKeNizbQMtxeeAVQ5N9Zox9zNs2vDTXaGR3gmjWVUPEG",
  "key21": "51U6LSqTXvsyWqpUUxbBXWbMbkywWmDZ6MkGg5gsyHpqpm1gYAFUH2ozMXP6fgLavotPki7wQLfunrMPacwseawv",
  "key22": "5H55jPVBKxJhSyRgPLkfPX51DHqvjF2gatz6ww3uFANtsBRQdTz8m4XEvmx3BEj1DNEkyjr8AmR71E2Qnr3QkJYo",
  "key23": "2HLXMqmY3ZiWTYNHxVVhNqxffDw47o9FYzep5PdRvinC8fVwLfqAC9Juy4E7znKBuwkWbnbDrPAaNYN6cWFAqRhD",
  "key24": "3omXLBSf19QmtAMF5rqTNBp7K7TLfBC1koBWBaxwhE5xctS5LRD7eLMi7qNZtbpbCMAdxxJ8xvLN6tvnKJ2XQpXt",
  "key25": "55crMWgGLLuB8oDZ6KHzy38sdQjQ7D7tKbbCu594Hb2FpRfMQgmGZU7w7VBdyeZuYyRb7MuHo69sG6SnLuGKwn5i",
  "key26": "67Yq3GRriCCA5PCfRX3s7k1RzDC84Ah4Qvf1ooKrdyRrq58sgZyKdvZzN9LwRaW7u2YLSGYJUWFZ1Je4rpAewfxw",
  "key27": "4R1VrfPuc1epBfrtoDTm6zP6CzcYU8Jkpk6hfVL6maNmPRGSwoj3kdCm45xFcfF1Q8gQiiLn8q1thgQ2xYJTtsmW",
  "key28": "5kyHraqRYtwLVbbLRsSLBCpMpk9W9aKqWMvnWHW3R7EW5gb5doFR6vKW81chrQ6ekTPr7aJAWoSDf6jZqwdhVKf3",
  "key29": "2fVU7eCXq887m8KBmckcc5puhoCRTVZDj2zPN7QVTH1ncHoQUS6qT82rBQfUn9Mu757W3bizUgzjPqfop28p6oQX",
  "key30": "56fvbNVgqyqLuGhfu1w4nE1AhXwh5uBsAMVVW5ES3xN9b5Cu6HKw299rddD8JrEYkHG8Yqx8S8XhhXJzwhoMZBQC",
  "key31": "3Pyd6wP3qxPhMUaDo6g7LmGnMkbifg9kJ1gDUBCGphgudgDjs6NWe2rLiqz9PkPWgH6ocqHwKBQDGDETXKune1k9",
  "key32": "GqZqcpsQqVTUKhz1rnp53M8YQVdVU2QHgFw7qCXFHnFjbFRgLNMQkeGy83FvuZ6NzAgg78dw18D7U7cW98yp3pn",
  "key33": "5zCzSVB1ndTNAiYNEWAKkGXyf7XPfZjbt97U18YBwgnMAQwZwnMF5qyyc1CPAQvnRMZtJJSt6RtzNQB5yLyuaq5H",
  "key34": "5T1D1uCtkKozEPpmf88CNns2dVZkCJLfEpoGZ2fsBmTjWSVjPwy5xBr4QTC2SV9e8MCHbskzBaF9jpazqTr63GDs",
  "key35": "2Z5BQxHkMt95njD3BJT5oUFLXqM8r2vhAeY9P448KvWHAMykfqi4mzQeiUVJcxDpfw3eLeTSciimqarW5fhmPJet",
  "key36": "36NSmbwdiM6UCMbKHRcD1jS3zrL9692NKjG8CUGkY9No2b8s7SK4ezf1xSgdqP65guLfj6qryWWMDjrR2Gitiv6g",
  "key37": "58hb7drYokm3nvMvShSZWUGbsSGjUQCypnYK4Vrdnf5JeB8EAFvpwDMJnHW51JALhwbK5PufJPw6ZJzm6AdR9V7Q",
  "key38": "5EVjaei6KSwMDxK1Yx9YRmqbLELD65kFq85EX5nTBUvjcqGjuS99XJTHuqipdtxTgQXMN1GT6gvk3FTLvbuTNVEV"
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
