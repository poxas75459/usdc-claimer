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
    "2RrQgzEnzyJ3WxDD314GoCyZpvPsWf2YUAhgqffGJjDewHuMhndxsX6qFveSFNAXqdWhjSPcHqVmHHzcnGHYAts2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ecVCs8piMTDXvgzNJWGvKzCJis76HJNtyrT9CVG1Y5PhVPJkNHHJhHmau7JAjTRpNUDRPzRfKzk2Axb7H7jdgd2",
  "key1": "28nPeU2aRm96Hc8EETmCpke9DcH2mM84NuugUyrKPX8iPFLwJ4dSfJaoYgMEza5yyvE6frSf6KCSqnS9Uo3qS1dc",
  "key2": "2DUghy3AxR1AvEdAvFHwVTGhM6FFK3Aav9tuM5rVy6LKQ2ut9nwGvMks8gnRiz8GG1iKhzZRXg2qYyBKjvL8hALT",
  "key3": "4JQqe3aQ9gziNMMMLJJXg8phGaFNKd3cUuBDFhNfiWjGPFYz4BHEutDL952yZCJWhfPedoQJADcmhratddDvLCtT",
  "key4": "63QoHAREFYT4LNWpavrJSJipYRA8EMaw6C15YakG6GCgnWzWJ2Mki5VXNim23Pcyu7eLFezU4GzsdCp4ejTnHwZm",
  "key5": "4pLFqNJcyK1czqwFpBEJLuAxs3j9uR2488FGFsf9kgQ85UzUdCHe3sgt1qaZgfC7fPtTUmxf7VoTokQ7LF144SDc",
  "key6": "2SVzzeaf5v34F8r26k7p1wcxudn2hxiX5GSYGd9spfwtJ98tf4Da98JbNXD1NjBnXg93JSqpS7snH78HVcaA3376",
  "key7": "58665sLheCzvRjpHt45X7cbB9TJKoQaKTuQKymJnazdysKDoY1MgBshoDpaPqHHMMZpftySQ5Jh2sSiEhgXWxMjK",
  "key8": "4DEbihUNhcSMC3WREk1D64Qs6MCzKBhkn1B7PC1hVpkh3oDQvW4AjWkcYDPFhu3e8RgUqdnaMYKgMi7n7NZ7t6QY",
  "key9": "2mWDxjnTV5NpB6P8S2q6NVQdujkutrp5foxf822PsNhWFidXitDxqCSdmG38RyQkLszTUQRa3JfakEHd3Db1MWoE",
  "key10": "2bBEVADAeAczEr9QuAkdWKHHkkeesVAVkXoxgayw9266YX5cHeYZ9g1dkAK4fsNkG7RpgnKqcXVpNB2U5f3Kk48G",
  "key11": "45SGspMZkr2BM53cvZvLGQFNHW2JZAugLaMpWx85mci6qVaaNUp8M87Nr9FSwUMJs5WE7DYkTUm4GBEYAZ6Zh2qj",
  "key12": "4VbZMPfPCjBRy6taDiVKkdi2qYPkRVnrMMNPndRkxatg243RQHi2xYWMumFY3XRJvxYJhVFUBizVJtTkkQWcHdhc",
  "key13": "54GyVPAmTco7tvVMVuaCDeh9pUr16u967ezSXNLVNFaotd9YDywuvnbUDwHKrnPmBfPjG9Aek1Nb5E6oUHYQbiMA",
  "key14": "5fZoJrrhYuEyEp2TJ8Mm47YnB7fCntyw6Fa841ZhFz1xaHMYtPqJ8rLPzxopjcMe8c6osJyTZE6tkEKuJ91oHq7t",
  "key15": "4aPVGMazXGx3WCQrgGGyp9nv4YDRvXL6A1n9ZnCJpjSric1CKAb7vsbT4RYuAFUsHxy9acQkqLfrxGAsMq1cafFJ",
  "key16": "UUCz84Kut3qTg8inmue7T5hAsjAXpcq5DGkboQ2fq41MeiXn5r2LP3YFF5ezAMXyJ8hmLhz5p2GEX8d11PrCmvK",
  "key17": "2XsUBxuRc5tRFFg51T9ydJWpgP7ESpUnr2mtJ4bf1GZicqfqqY6AurtCmugQZK32MjroDLRkZS8ykP3P84XSvaZG",
  "key18": "4hCjfFMU5LFbtJkakKB2RSznYiVBJpqZoXVvZguxjxuEu3RYP8F8qxLMAjEv3YdHyNdgKjwmNkWVpoVCQDciZ2xC",
  "key19": "3MiKKhrxu99ba4111Y8knfTPA8N2iKeapYH7ZtFzRbE9BreaiC4d2zzziVhQtmktY8ViZmFrCCg3NULgZQK6AJqP",
  "key20": "36sRPBCvfBpdVtJq3YY76HJCiCpAV9kc1Pha9zELHEjMCJ1zCPJaZuSoRvmjkPWtMAn1nprjvVoFJT8pAaFbreBS",
  "key21": "2CqV2hVra3HT9M2jtt59Gyvqyy3pNo9m3qBX6t3q4bjFVDF8wyrgqjkcthowbdXAzN4nNHbeCihX4Jt4LHzS5Kje",
  "key22": "2HFhYUtztZUoexzzNLy1n7rS3HigfBPnn9EV7q3qetmgEBHT4DYwFMcWYczv5WAbe1xQDbnxvuDcnVYjGp4bVC36",
  "key23": "422vfr2yrLLGBvaDCLA1UGK1RR368pUJvHkmVSEeisRBCD4E5Aq7LrLRWJ68bxkroskTAhcri6cm1yd1LmpBHdmY",
  "key24": "4NhX9qFDk45JvRGVUuNGR6jM9tmFAKKZv7D4HqaeGWBZ6Q64KYUjaUKKZ72e76Uhu37Tzt6HUCCsdXrckAisjSrf",
  "key25": "5wjthBZpp7rBzmzxNZwPzcv5PUqmWPE3D756N1T3uY4QVjfiGfvzSdxzQWeTHvZmZrZ3taaohGRa5ekUXA336z6x",
  "key26": "z4RebsCEHsNPQwn5PzvsxvBhtjmQCsbVAHGY1VqfDcMhg4DNBboXx9tPmURn13ZT1CKP3UXuXew3yht6GbnCpBH",
  "key27": "5m8aCkviK5pBndPp2XobPziHsaajCMvsGeWBkER2XELUnHMAegwLxFp4EBEsKncLEc2pWN7ArEyCyDmZY8Gs6Wkd",
  "key28": "24BsZ5UMEoFqWwnMPFVjk5kpoaXETP44smtUT6aSeV5XbRwcSA1rMrNGsozAVaiWJvrPTLyiMPsortRWepEmz4mZ",
  "key29": "3YrbvZFrtLQJSz6cZPhnsDkbwtdBPMPm9ytbwE8vSoMMWRYc3UoZYahbSNBb2j8JjaLwUz9Y9bFxByhtUQZkAocZ",
  "key30": "3vGMPayhsHTEthofeMPpBbJwz2oKTobs9Sy2nbufopkkKk5iP16AyCp4rVXeaPsuDsXdXcYH9E3hymZG8yPawb3K",
  "key31": "z4STaY6rE75N1sYwrCkcFKLuogmApS7BBZyT6SeMAUnrE5KuifwW2xaRtEbKxbtC3wJFSFfA3Sx1yRShT9TTRuS",
  "key32": "2x3N9RmV1ew7ZondMpBAqqHGJjPgHz4DwHCJvazTiZUWJCGVRkDBg12i3SXSeApNvUC4VC8J2D8vdfHG3g7U9bP5",
  "key33": "4Uf82L1MrKvCnCJ3MCwk6degaUzibeCwwn35ZESB6JS58n19NaaWVme9AKKsbjgSLWECSeU8u4uvD3GYK21hhdLa",
  "key34": "5vmCcsuaqj2pnYXHnqNpgud9TnJEfN3QBBA6v2q7N4fgY6MkfDZ6CG7NqyMXUmk8KirkF3SQjVMsMVyYaMaGE1qf",
  "key35": "G8D97ZkDk43kN4Ny1ReYgwa4GRSSGdHAbEe9uP4LP7BCdCgBkHHxcZeW4gC9pjsrVcsHK7NUJvUkC2qExYYjtFQ",
  "key36": "3hukANFQKXtZbUP2JgNLzvExcRRFghBpc9T8xJvpWNyKGWZ9VzVm55eaSXcDGfP8XVL7onWpRczxNui1yTurMnKb",
  "key37": "35sGLuwNAMhmuKqnm1aMivixownev9viFkq4upXuAFYFXorGQ5RZhhNpKe7q2hE16qvDhkBuM13RTZDiAScvGzwh",
  "key38": "5ZiFRWep8kdUA8uxsWQq4KHDTEvDN3zHwZtYqGFXbiVs7SuWeCQPwhdCRwrF2qyQuCVwiUcW8GKvvWjEPMSbNGPv",
  "key39": "2SLtHfiVhEzvXAE8B85k3Y5sifYmgEtwaYscXheXU6JLRgEoXw41KvjitkHMiLAcKSWo3DsgFfScbMFmcbsesRMp",
  "key40": "4t8e3dCRmUr2q16oT5gyhi7eMgLLURARRj9uev54HrYw9hXumZQwNTwhbrfdAf9pcox91Rq8DS8LDMLvmpbtfXHq",
  "key41": "5ixE5n8mmZbrwB1SzNLE6nA5t5hT87WRNZ65cisHjsSf1k5kjLasTH8rxdG9QhfzJy5Gxoo9YYiJXHvHUM69HhNx",
  "key42": "4dye7nZrqvHHoAzkewPpyfqjqBSDutVwcApW88SnZ8ojbrbg5JNjNNU6Y1VyqEJeViYhimtVeCQJ1mA3wW5FJwJY",
  "key43": "2yqQkxWz6CvtArMUdRJY725qXNevuBLxbZAqSf9quoJYgSksiDeiQpVRrRLHqNuozzMVDnxaAJeUbpeRKja8XEt7",
  "key44": "5YVmWnFjwsqSVLBpoe7qrxTtmyApC1qg3ze2on4CUoJMoim1eD9KEo9rAg3spkSWNSBDx6VVHwUKF76TjrNJB1Aw",
  "key45": "5pb9Znke7uGiz3VhQaAe5fNiaJNxeDiq51FNp55B53D1dpC6uP5TqBxRzDvwqQ3HB7zpCoufbMWg6scx34piSgRS",
  "key46": "3Uyqf4CpUBJyMV6a8qVogSetMj2HK7EwveQNdneRLdmCNZ5mWh6UVXxtgUisrcWLwCJfwKzdxj2DdKVnsTqvnhyr"
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
