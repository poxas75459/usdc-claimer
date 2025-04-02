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
    "5TJEKpWNNqvSwQzdNo1VA8qUu2e9wQR5VTSMCmWt7a2HUmW3XuxTJjSNMBdqmRrFr2dG6rADBreRZztCthhBsNXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irkSd42wP6EYpM88yNEW5aahheYnWi2gvUaWubULPmedHGh7gYmzQhFEaCpnW3MFbdggMjYEytvZ7K9kgG6B7aZ",
  "key1": "buoa1nUP5Zp318mazQL84CKHvJ1j7Rkkj5mE4XyJMBMr1ex4PkwMYJs1cJtoEQ2kjHGAmcs4MgcHKThquxSi1c8",
  "key2": "27cxAULiutfNeLojr1BhpKCquR1oF2M7692YhKq5LSENdUYzY7pukepYVoR96fWdDQepoFzoWTHrwZzCVSjSNG3W",
  "key3": "4LRbMQk5oUfFC6sVsLxe1nenHp4AHzFuVYXUe8SoDQkngGugbKUd3c4m6XwTRmKxSWy5tERSvixztfzZkUracf19",
  "key4": "2ZgdK8D6LpPU4WexAdyjC7auawGqsfCh29dQvDQvjzBXSsv1EY7Mqgy4YpdtRJrvSQp6jrHJA24sm72fgg4LTBVE",
  "key5": "4kKUyFZ3C874m8RTVZKFdkW61s2DcP2w9UHF5zBo7u53vekdPcy2AmXkLxeFJt77pDBjejCdvUabWw36f2A88LoZ",
  "key6": "5ioZMv6QTm2GvDVQAZC7VYbCpLh1dHtfrYMUmhpKJ46UUQwC57QeGMMGvTeBLd4zyb1MakgYdVgAVneAGyHvzoTr",
  "key7": "3bsR4rdWSNsuF8mQtqMuxo52hMicWXjAKJSKt416vWBH9YwBwrFycQYFL5GnKZvza4ruUtrT8AqKMh3PtfDfsRD",
  "key8": "62AtGcokXxqEPApPCG3AmpQvyjoobSyBXdtjqUez77qje9Wf6ybyd8cG9RsmyPSLRXL8ADK5UchvV4r8jp54hdX",
  "key9": "B2JvbwzPmaNgSVW4zK1RmVFMKRR9KVbinThEe6HFi8r4EdmBWPCsPYSyS4hktANvxCkvPcELa6uj4aDN7r15XUp",
  "key10": "2UWTiRiUFdqpEEjNQzMS8eUSn8Fb778uhNV9KJVdDvuxCfqBDLuxTQM5rgbGj3nsSF66JynctNkjmfrAybLMxVT7",
  "key11": "359mUVjLew9CmvhxVRJgURk5yCBZLp49HRRKWqt1nehvAmgLnUhcy9EAPwuBoFbJoV8Rs1RcQ3GXcvNCA7EdCn37",
  "key12": "2rb1aDrp7mZ9QegzSEs51qsB7CkzkERf3jUwKvcYKgHSFsqwuAkJsZzmabw92YfzurVg8R9mVRsvPAG4hQAHJh21",
  "key13": "5DB9FQ5VeoZCRDhLzfVgUPtgDRQBed5uYEo7qkELChfVdcjXqc9HqhsNQi2Q6tVDWNy1TBGJqaT1zmyNC5kAARnK",
  "key14": "E8yfG5zT2G5xzrH2Zp9uA3Prg4Z5orozga8jM4Ms1jSzfHaiNktm46YBP7FF4yvJex9fjc8JSn1hDkWeQB2hhJK",
  "key15": "5NvhP6x44PKXE6t8bYmCmTDVwXMSKr7W9EjQXVRwhXeg9tk9yCPZVpamzeNCSry6gnrekNHw1YTJTRg86itJxPQS",
  "key16": "48yY7nR52jCmGtKQHRhB2p5aNaDJMZkgZ9wmxTJZXZWcFPzVopMEnFnUMGXpCpuykWAGz9eUipfAGobxPKaqJJRk",
  "key17": "5DxKHFPxwq94dDocJPw6LB7p4A8E8PUnhxR1t6dzmit33VbQaj68QAgFeD8CqC4TVTnnQ9U3gHGTNXvUANjjTWoq",
  "key18": "4cgfy4k8mNmiVrq3oughLvanU5hPbWusyqcgz5RtPo452ybcq1xZXa9ez1fieoad6uSbXJCZNfddxSoC1ERwxvaD",
  "key19": "KZcP56enr8TKeYMvGYQMiBr8Hzkkr6SUkcjTXNVSi9DjhfUwUcTN5mFKbQKwcRqHg7WL49wQMCcHfTEHS122bUo",
  "key20": "4z8YJavJQz3Hir3EWZnCvU135BXhxsHtmEEEJNdX6gzgcYQwMwcSi5srCiBYvWigTADyw5AZSo6L8Nnif9C9wpNo",
  "key21": "3BcN3h3GGPhVAW2PwwakXAgzXrxZbheKurKePrT7mdwQaVXTU3LWh7FR1UHhoeod7K2paKWcJiXB24Mc2W4Na9Ro",
  "key22": "mJGbQLwMoZ9gpckWUmaN72ZFQXPjDJ9BhFbbJVxjLW1zg5wD7ENKKA1eucXpWCUjqrSQtyZkaPxp7pDTt54BCoB",
  "key23": "3pUeuEbFLiZ4VyGzxAwwdSqrqJkqaD2yfSBJrZaGqnnvKXADXfEpWV12SY8JrUQZcHk3VtAwzsUwdwdwxfKQx8o",
  "key24": "5qTqFtrY6Y45i7EoeHcRL1eyk34AZD5MsKEaeMPtVVSUiUF2GyrxRFyYbJgJ7AU7uhi8H8nvDSEEqCwFhRbwtDwt",
  "key25": "3SCBz761dDnUSBVaeHvijqYQzS1cHphxBpu5VwNJ9YVn5y1SjHMzTGv5eMVnqv4XunVUtprQqJgW1WQYPfq8Ji76",
  "key26": "4yBfpwMKa1oAAqHbcL9h2FySq9BqxMt1WetQPwcMRB2d9iKFXcHLxgENc9eoWDuGxeEpZ1nnY1uXVfxGuu6BuDRE",
  "key27": "5S1C2EbNeoSVHeT4zzUmA9d4Vu6FthqX9vnXiHnUT17qN6kHHuNisFyEcbAakJ8UCaxLKrnaKwbaMSECiu4KnbrV",
  "key28": "H4GrHAtK1YdeuVAmwc9bTq7XfiGiaUs4vp6ERKjuhzgZtQE2JkPFET1MXDkyFaHjSNbrSAYRN9q6iGC7i3hE29i",
  "key29": "3yczaykhkn8EF5HNccwAx9bDAVDKRizG7UivnEBHF7P4kTcEkBJGwooRh2vS5SR9Pi2whwHRfbogdisVsb12CWba",
  "key30": "2kyHcpvacfmbM8pf2rNa4gzoA7AYixah98xfAWfShWQQsid1KcYCAYnAFt9RRtYppvFHoTBZw924QnhfZcVg4RzT",
  "key31": "4VwNPAAL4XFSUNqbd9WCC2fSdN6t4qLTLYAqJLNXmZtvtS1wRh2nSUuqa4kiXHVSXVT4tEWbZCXGowmNPEUPVeAL",
  "key32": "2CNhRbnryVxnbHB5MG432qUgrNdbqnd4T1ijdHiGLTy8uvBBEphT7ieittjfWD5gpHVVtaZ1f7Mfajm59JHuREg5",
  "key33": "4aPV7TWW7z9Pcwc4aePDAJ7a79eSH9FYHk7WbPh5ptKYQb2QA2yRLmL8TbLuvXnuexdvamRosKNMN5HqUaLLty12",
  "key34": "46ViSnX2WsBLY7BHs37fbmmVPzspmWbeQnsNMyhYi9qCZXEdPbV1pxVPVEb3oWXssReTGQ8pi2Fcq3RR9Fn4HaCq",
  "key35": "2aR7D2YQ9r4yZoJbwxyFdvf5R7J81sRZgwFHQPY9LxM6xXoPoNqensYTNrjuBgFjH8Y9HH2L3jiFV19rzXQoGSrT",
  "key36": "1xdzwLKf7K4eur7zMktMbHBXYYRRnoSs7mZBPFrJPQZE16CuS2KeveEMwG1UkA4JFTEqsEssSgwuMkwZNT34kWg",
  "key37": "3sGybojPWM1GcgeKbQFw3W4BRRpXbgGkKLnd1su3iNa5udVR7Gm6m83p9ypmoPDR41W2oEqLuXzapcHSevPv7cpY",
  "key38": "4thE8Go8SsyKo5XvdoRype4BFsdsztyWUgVhvq4623MBUbhF9WvzRoecyuGhoJx5wP6udpNWSHpwSxN1QfpNN7zH"
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
