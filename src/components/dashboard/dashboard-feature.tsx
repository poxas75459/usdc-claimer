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
    "Gyuzh5yJCMNoAZQv3VApuos7YHfNnuMUQQ6rPQwuPoiQmk6q2rQBAcARsTdv2ic19erzazHo6H1P4EN2mYjcdcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UHDURv9vTgQ1wnzWTN3Lx1g5X5P6XiTautxcDWKLYXGCV1WNhMf1fd9J4qZ7e9iJN83xsuZQf1io8RGyhuxREXT",
  "key1": "PWM5QGLkWhz1LAV1b3oksccnKVYsL1kVitWz7u8bfpaW78Lf3z9NSMzw7Z1NMJhBF6DYodK6t5Femm9p2WVrHnH",
  "key2": "2DSdsovyDytDFbwUzZPzyRBQSvR47HbZ32SxakaEHeJQiZek8P8qQ4sAebaSMUyGjvCUnqa3jLUepTvNnZMtkszb",
  "key3": "2yTNJfVB2fArZbZ9k4Hhw7bQfuXYjVCJPFypJbhi16hQehhqSkticbS4qsafHAY533GWUL3DyvnX662LQDNKGegC",
  "key4": "5BxC6i8DA3bkthVGdE7gj8ivYYvyMadU25iPS3v7eXmQqjHeQghDTUsqoqqDN4Pykaz9AkupX5KFNurVwrAhWdpJ",
  "key5": "24m5GcTgEcDReLAk2c1naBb2eFn7XXiboRTzveYrBimm9at24PXwUTPFJXXKNNaib93BeoA7J41qk6Ztb5LRQ2hE",
  "key6": "zPYx6Mu86pRvqKo9DqobtUTkAYW5rHCiHXM2qXmRjHkACXJJW7Yzwkbh6GncXeK3TuPNogXQemvJsivLvL82H3T",
  "key7": "288v3VPWCoiXbBJXSGBm4Dq5BqnJK5QdNNAtn1qsF8GTQnYonnFds4r9AykaguG2nhprdnrpoPpXyHZAMjFX4z8u",
  "key8": "2FhX5yepMEYDbSSvmSv57rkUrnvYU9tC1w7w2Jv7yWnhbVHoFbgSL9FYieRfktvX9UfxoHWbycLMYgfU3DbrBLrR",
  "key9": "36NnfnKLNhkXWMErdQoZEXSJmAJ2rykkixJhcuCucoh1NQiuXNMRdzpaVJS4E7Yc3Y8uSgxu8rtz6ioyYviGfmyk",
  "key10": "2s2hnAqCaoMcCz3CEjpFs76SmRxvvfeZrMdq3rgjVTtKH6gXGAQDtsGeGPNNcDbXGffi2WwPfFM4Abn3PncCwM8G",
  "key11": "4NsiaA7QBjDMQHX92wngwAAteQQbTRKTi1EXZkzH8J3CPUib3z64q3Q7Kmu8Gj4MtytvMcY4cqJnRwuHxz1ixu3c",
  "key12": "5qQviUvWfzpkeweJkc73eDZ7X45eWKeTP4KRTCFn2xkdj2u3w2N4TZUi5APqXhrXj7YKZTZX1Hor3mNAojHqpXQV",
  "key13": "Ei6oTvzyZyvXjJefxVL2G3mdepiUKCdcjnmZ1Ts8ku3PB9KYSenjSNNy5Gejhbsx48NpoR38kYxN7YhuCKy1KRt",
  "key14": "2UgJfDX5d3vqgVmomNGj4QGMtQQzcPGBjqUiA9Q3swWGSgdXKNWYWspSYQaWKxV6GBZQLJu3AU7PithoKBrbb1Je",
  "key15": "2tsgnV4G1H4mJRkgJwQTrAkyzWJrXoBqasZ1jFQa2ZgTvEpxvFdivwDohoCkSAY7wwKaTjn7wHbKSLaZ3wcmW5Fb",
  "key16": "FA8wPopY8bLTfdjZ6eEEcNTKzF6XTLhYVpLB2S6Y9meUxiuUU6DYHreD69ZgJFnU499TqYMZdbuEsrDr1FPQVSY",
  "key17": "3iLBP7EnjJ1kqwsqj32x5eRfd14bXtU6LVvJQqLrFqrm6EwuzPZ4yy4FmRwGqzCcb1uZj8sdEm9KoQndH11kiVtb",
  "key18": "3WRZbuQPXEEmXFRc7XTFshX39etrrYxXvXrdCuNbDnCodm4FfcQKNbPwcEer1xKAbaGRP692mjBYaMshDz8yBnoF",
  "key19": "4ZrpLknQTPEyGgJXGWHz6yajo1BAesb4tLaF7BCPsacWZRKP96cDZoWUTMvye53UgvSWqsLUYS3G5gbS8U2BDLf8",
  "key20": "3Gq5QxCwTgEg683rEZuocVcFruh1vMrw1WhufVd9cNE5mRJzKBvUWAMqg8s3jMtFjaN8WHU8JktHmL7R5fdYRFRR",
  "key21": "5PTJi8zMS6M5pymcWTdZnk3hQDaR3N5tMacaKYjPqujNUGAGb2jwcSouZEPnjVjCciyZmv696YL8KavQ3tzLJzEX",
  "key22": "2ph4HVuCXp4EuntKELSDscnzL1T1RH7ca4WSHnupyJ47ET9nEnH8tMCmay9P3zteSSR8sha8GhHwrieNf4FiDwFi",
  "key23": "3fqaxT5KFQQaKipz5JGGhvY5cfT68ykkwi2EcV8URXzEd3xuQDHzS5JGPG6D2b6brjo6bFouNZJeDuy7Ki8ogCZi",
  "key24": "sXYmmxAWyAkh4oANc6JaxgvznY1WYMMDipJPpjdpd99u3rgAC6YE18fYCVHxEyUrCZfSmN6xnhWxfCD3fFZ6r3F",
  "key25": "5UFFjwRV969Gk7TW5RszgdM9ENHnyByuezMjNo9fo86QcrdV7mHvoZiiLPxszg2kxxdzsMiWdfc7mEUhPpEkKBFJ",
  "key26": "5SmhAKkNpwiWbxKh1eMkVdXKrokEzN1J3kn6k96gbxf4wJVodGSyBvRNd19zzPDNVN3Ko3jCpNnR5Ub6BSWdf8vH",
  "key27": "32TRX2vygPUFgoz6eP315fAXp9xSWzNY3EGsWQLgZFLsBncR3N4uMPXpfBCJSnzMkN9cxScQm7qvugt7XSYUBZjx",
  "key28": "4fxmSSB1x6MGN6eAYrjY6sgLEVokjQwwK1fEtrCydREyDVPY98AvfMxXeJRCX21nu8cWdFHJkV4BwbDSB4L7i6cP",
  "key29": "4yNGGZEnKTLtrq71K8xNpN6qvtw1YQACPZt5G91y6jTYixzbESuAuwRjxtrptdG66aBivVNo8XXah9Fo9qr71Qxs",
  "key30": "4FLUfN4JrYxTpBVvZivquV5H3GGg2xgBZrTV9ZFZBDqS7Ee14j5ouDtv8oZzCP8ASVuL7y6pag3Nq2Pprfybwh8s",
  "key31": "uRBX86ZBoD3mGrGuTXb2csnCjf1SvVJQ5PW3UE2F6pvwmB6UneLtki9WZz1QvcSZwx7i3xww44jkW9VegKPX4is",
  "key32": "54czxD9yBpbGCJVqWU3igtHMH5Ku2QerX2Q8dpKS7dMPcBsLMwx2qarArwWyo3myWs7mWzoY6CpabZtwL5PF8i1",
  "key33": "5iRZ1RizNs51QWfH3hLWnSLXucdsr8p3mnogwtvMp7YZbX4po6crFMGVxUS57oQZyDrLSKMUsfWBhhG6fcnTsmhE",
  "key34": "3nQsywcEcA6k9raDb72za7EYpXwsJeDCJG8gRppd8LGGSPAtPbVGtJYu58MAV8oDxmLWYcjzMbW65Bb6yp7jpZNw",
  "key35": "3KYDadNhRCcgPDFLwahFNFC6qPVyzf5HHYVi1jVs2YXMe558LfjzCXBzAooSRc82P7vZFrGNCt1e9YHhboJwJGVP",
  "key36": "3YjpjFWpgGPocCKpb7b9Ma5sMi7EoYDTPQZsQQ6dARDJgcoKiEV8dNvcCFeNtrfQxEKSEAMJP86oK1ePdzWscXeW",
  "key37": "3eZjLFwUdikfFm4uDj6nbsxDqS6JCZ43dgcAhRqU2VUBARLsnQCpu535AhMhdmRR3sHWSrB2dn3aW5ZMreXsvbqG",
  "key38": "3sTnRbWFr7iRYi6CFZADJX9qs1NhMsSSQu67fFPEJKFqeTGXG4eiGWyLNTWwNPxSn1mLQZJqqvnYVrSTgULDhsmw",
  "key39": "2AwrVUbsG5JeLFxVUerJPpzd1zJ4qEQ8mhG2oXq3inozapEDq4FnPH9v734pUu5ojdNwTo6GK8sUube2bSkae2X7",
  "key40": "4Hd6ocokh55BJyK2WgJnjbEcJFPts9rQhnagLoUTRLqv3NFoPeLu7YtHijg6gLMMkWEDNT1k7S56DSy7puv6UVUG",
  "key41": "5G5CRpu4tKaJLuggcWFuQskpW31QKRM2kXpSkpMb4U5PrvjdXXvvUEPzL553A1HSego2RKrAvALhA6ZMRKhofYAd",
  "key42": "2VzuKr2tR8oNfvhsrhv7Mv76rn3AcpuKB3RFZuuAm9rkGzq6ct1wbpMvhBfHYkpXBaB9pUtL7uWifUCoe7Uk7qb4",
  "key43": "2MPER7kqYbCvgW7Qwy4upDouHKPdgY7PZxKVFWemJYZBv2iwidJDtbY3YfbqX1AZVCmf1upsA8TkABvqeLHLtDUo",
  "key44": "5rRBbkfpTy8eiESNC7NAPJrPhsTi5jtMfSeBWyRjCFA1wU3GHUGQg5FHmozA6mdoRiRiQEtirRGB8q4j3GjeKZFk",
  "key45": "2jv3YGURCjA14F8YRtqvNKWYeyFZJ6GfPSs6gsweR3tYUCpYMJxQY73ZmwoQ2sE1g3LQFo4KBpKaavoqAhz2Rt1N"
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
