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
    "4bHWNbwActe4dmfQgevTev8nWFN9vuBfK9uDjNQZnaCzRZuBnNif14HyHa1B6V2jrukPafZMMN37ZRovUE4gmBv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41TL895gZvyBmCPxXMJ8T2ZfCvbMNeY1FbE97jMcrbaSLxn2tJiJQyCmX785LA7suG5VsEEjGB1T4wuHRSF1J1b8",
  "key1": "5ystJWFh5yq5zM9H4uwRcGxyLVvCfNUzTZNbTz7d9xGjwDmicyYb4s5JBU2GHqjqdTF8jrWzr93o55QaGtVXJzuB",
  "key2": "2M6eVyBJZEWpJsczG7gsteT9SpGHTX3rm4hnJ9ox4ASj8cHAzxZUgfHGWvKjuC3e8uaR73jupjWdkc5Vc2EKV2gH",
  "key3": "2qx6CBAMxqLmUBwzUmceMjPBAV3sXUCsuzKTKHYkS4v7d3jhWbq9DxRSZ853Kt5o28mcpeRS1uXk2edCJy87ED6p",
  "key4": "2npseyCU4eqQ6drM2FoNhfyztud9ffF6Y8kgqk7J9WEuwRnfWtfSCGRGfoMpkewoHKDM7Mmbfdkpc8KRdb8mURum",
  "key5": "WwiKZffZ63KprQdQBxPVnWbJracKZL4udZKGwV5QNXpc8KYDbdNGy9SRA1GmGKkudvsteD8py3C7SgKizgNvrLp",
  "key6": "4g2GEPF9Hz6VqyTPa5n5ihhwG9z2GHBgjbRWEiZHCihfcc6CA3QAQyngHoCRxpJK8QRnNi3K6CJvCfoXMdtDpzbw",
  "key7": "pET6nYSUMxtbMEoLyTgotcDTAvtHKMHQJtjkuosCmgMbaPUjCCjozEPLfCxTXeknuuMeAxvZ8zvkBqydazdx5ra",
  "key8": "25HEZ5ovrYPSLudzbEEdqmdNWPPzVEitExF29KDsFFc6VAjbnGyg2xtTV83EKn4RfZfq8EM1MrvCdWfqcn8vnmZe",
  "key9": "4W3bi4ivBrsrcqiprD8VpG3ThjSDAHieuGLYfoZRGVkANuTokYfifpf6T6eVTKqkynEKygYnjMNqXNbeJFxC6n6y",
  "key10": "bvYFhTse3bUdJnQtDCWahXq2ckKA1394shb1NJTVENCA3dKXv3K9yE13se33gezxJhW122a6xswqK8YzBtNLD4i",
  "key11": "5d4CKcDqa94AH2YNBZ94qvk5dJ5CCfChHX7NYNrF4NpdbqK2B3cUYvPMkNN4Q1EHAyveipzLLi47UhGv8VHyhxCy",
  "key12": "5wSsSLzzfs9om41my4QisQ5o2TrPprkEnoNzRMZi7QTErt4yrccKojzefJdPB6DTeyGfY1KTFTX8K3eKjEjC6ron",
  "key13": "hdNQLmdLjqWJBwXQtuE8KrpqJZENdSCf7VbjNdrQVjSm9zSMZUa82LzE1DnAENuSq1YuSPoRskiXYrtfTfVmSQq",
  "key14": "3y1ZWbSYREXRRg995WGj4bzCzf86z2dzF8z6yzuVuiNsohmF1gMPr6s3UMfAyVdhvWq55B24SL8zkzXFWc2Fm34X",
  "key15": "3DGXHzrhAuwBA8SMM5kX1hiRK2XvRe5B3Yh2xeNVCVykMPMhhcuSwYMQh3mNNbfB1HxiWmvmwGB4HUEXJyPYy6Ps",
  "key16": "4jDx3PfhYJp1MMRw8XqHS2dMU46KGX8BHBtYi9FQ6PCixhJJVu9dK3JrPSvttXJXQze1CfD3UeEbQDNrNv3qNgry",
  "key17": "5BRz6NPEqGo1bM5AGyUYxehJdKqvu5ucFwY1nMyFeyp4DqGNPduC9jycECt1zCABNTrCmUQxLxSyMMCZx76m1ooh",
  "key18": "4JBf9wqhX56S4txwPyu5qJrX4Fehy3kCMoab3avmtg1YSQrrcyTCha3eCyzDceQq6xATNnzJWcrEqRbgdqQy1Kzr",
  "key19": "3m66dzxnxhuhXx41JFGjHda3v3SUKCmqwxodvdA4aKPnodqAAPeV3BdAHEWmZBFeFi5b6Rjzhxy4dTdXynn2rZPh",
  "key20": "4DoBPyKQcKnBVLX3w2gUj6F4bu7SjTvZHUBxsU3TjFHnH1LVqc2J4wHDkkA8drRoiQXtuk9oP43pfFR3NhutFcEd",
  "key21": "5GVbMrjfwyKBtRBv65Mmq7gNUfuzgrtqqXNw82QkVAPSFs1mUwbCKGGvV4Lb1cgGB7M1fi3oMChxeeUWg93ww59o",
  "key22": "QgaBN8fpxrn5wDKGqkbDF4PCpPNoQPPp8w6NxTwcJYK5uAbtfwboorqphTG6kpte7R8zstia47Fw5yTpierh8zc",
  "key23": "3oqDJVivqSaKJY9AvCQdUcRreQVven28Qj51KBGvQ4GxPLbhr7XzuxtcDWPe8F4HQGPMVSyWRqAgFy36DHTNnReM",
  "key24": "345dY8uPNnhzTr4dmFXXukBt8EmxLhQWJMasMPD8yp6vm7spXAUzfKKkLXRFUiYSRfb78CZSTsycSxW8HKcdshAZ",
  "key25": "5ei2Uu8sfFCQgQDn9Y26hsNbrysCPxFCuLcK6bxUCa5Mfpy3k6SX6xZaJ7qv2mqfKSyQbJ8nHkparkUbMZjsNhDx",
  "key26": "5HFh7zga6dxBbYb35KYFDBBEEU4S5dDwirTxVDW6W7M5uksMaWMYnRWHec7a3hkEETooiGyCSn9rZYTaYXGDFkPd",
  "key27": "Q9ztq8YPpUbmKSvyNxxK7jisVxxAY9zuaFYGBH5c2xgtjGm8wUQ4AHFFMQzG71WwD644D1NZUxevj2FfAgwLXTm",
  "key28": "2K2SL5fPWtH3fQGnLgzx17Mt2WeSqvKouYi1jY56cekddvZSzcvfWQ3H4fTBvDYBb4kUXTwgqqXMTikD3dJxEVcf",
  "key29": "3DTWX2jKaCr9oE61Bby7Jxv9TSx1Sp823RUyMB3t41b3ZVxKXNegPHNUqn9JDg9ssMgY8KE87oYZGpockq3LQmaq",
  "key30": "4S65doCFvDF4oGoUonX5G7VWjGEMip92FHEVqopxK5VH29EXV7SdvxLLPvyvcyw6CCwcEzanNYEPrMN8Rxx1vCYC",
  "key31": "3ikp2zh1MmARgHLu6vp6ggA2XzBWKo1MD5f4g37hqSQ5putvGcztTHUrrBVQ7wdwh1kJGkHKWU2hREdatEfDcNGi",
  "key32": "2GyJdYgMsvsrXWgjc8LucdwdUwxWANG2UVHN5LWRrBij3NrTNYwkdSAhq1V47rBZkpJPq1tiGXhjQY3PsC4PZSY2",
  "key33": "2vXJKP24Gu2jJmGaTAjouupemFptwmxp6F8SCLUJVGyy4YvGhf73qWiFuxbQ7YwgEMZKuXeegdbMWmq6UdqXMFaf",
  "key34": "4xjhwupLoY1px5wbE7tkAUSbEe8TKXWMKmCxAFcY78wV7N8NnjKh49k4CkjarWm49HBd8Y1oPoxCvXCv9TsJ6a3j",
  "key35": "GmRAk2xEummHkN67jf9esJKNdaAzk6eT8AJQJN2CXwywRVNGdvu1MZANnCBFZmsxyXgvDr9jqyagKSrzRHLQTUF",
  "key36": "4TTj4LoELEPnr441uGb8536japrdCM2vWkR7bXcaFenoaL2z5aUXeKdeyh3fzEFepPqB2fcH4Bo11mCFoNdoWSBa",
  "key37": "4jMPDZMV8853NuKKmp1LaTDAMMgZpWvU89ytHLXqxEADES64BsMZvMJGQVfUDFR9kQz6N46aBMUMKZgVVnrdGTR4",
  "key38": "5SM59sDgJd5qywtVxrzMwkQixwWMdrrxXLBAmJTk4TuU9LwckYw1PAiTszjmZmJk8gbr4qbNFYoPYrSQA3w9Q5FR",
  "key39": "4F9q2zwi7oLwex5zZAHXAZeLS9zhygR1t4TwDFhgBrXQQRbQnMctUgERphHFY6tZmwfjJ4MBLgAKBKouYhjzDzH7",
  "key40": "2uPBQF317E58eLqgDKLRCip7gteAjwdKsW7Bssh274tKUwgGEGaXxhoUoMkgnwcCUGEnRqi9nvsb7nqRfjZDpJ3P",
  "key41": "2LNjQmQV8hH5KTmBrJpzvm1WF1jHCsjEnZ4fysZWPr5xaEswVoFGQkCmDteSv8efU4agSKdDrVSmbMjj8wsysX7g",
  "key42": "5cZpJTy1yJaMR4CVQQPuCE9Wdga3oK2HseNePMSBjucBFM1PfJ2P9RUwCUAnaHTSTqcDcFXN1SuksnVJMYkuoYUk",
  "key43": "5NktmHU8UoJjpp1rxP6aJxCaJpR92TsBHFbpg4Qc9w76ikePGgX5fQNHRfd7SmNohTAdSSMQ6tVKuTUBjzHJSTvQ",
  "key44": "48KBZsHbag287xMjb41hHTTU7x9p8FrNgDwQLSoR8zcsU2cFHg3uszD1qxQ3QJFXizPUGDy6Fhs7xbn5GeySbfkL",
  "key45": "38NkHjZmGZMHQXJQDr8FtFpDk7dG11Furi9iEbBuDNNZGWjVHAXNcQ7psiDH4RNLNRz7LFXP5u5r7Wg1pjt32b8Y",
  "key46": "64AeMk47aVntDX9MD8jrnGVTtdGKA3JjtTkJhM1Qv6vCY8hSaqU4NWEwjciXRFH5R8NUAzd4L8boU4rE2UYrMcRv",
  "key47": "3XHSCRDFyTUAuLgJ1NgxPm3g278xT1NQXXAVupLvCYFFbM2KHmUvUd49YmwHibjirYouBa5nVTCzok9k9MwVEpU1"
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
