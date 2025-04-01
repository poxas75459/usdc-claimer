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
    "seBhtk8LSLVzdAs55HYDvLJ5dtL9ZCzH6upfdaLLkzVJwea4B1gbCoycGfLBa2XfGRkzksPsDxCCVmMFiTNU38w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWwr4c1YW3CS3Y3m3awYP8nmhf19bqpbZMA9CepcGTTq5WfXg4x2xEAM1BdUoZxfLz8bGF2RMQXLyRhzsn926LP",
  "key1": "35kef4qU8PHBUfvAVHkTvfWXvpJ1sPRBsq96ovqBZ27Qkg2nW7tk59vXGmrvRegaYwrvCbytQGaW79uoC61g8Qcc",
  "key2": "hkWpSmAB1rcpafsM7KjRBSVUeMUCXundHvzGVfTxKpXLzZaJRHvVrSdQQ3275u7Wx2qaQxDLpH4poLKABTDHnYE",
  "key3": "62pyBd1w9ssxD8NcibSisZ41qZSHrxw7MZwdZcq6VXLRCMC7LfCjerNJdsPo2qZv84efTyARwNihP2EZM9TzYfA3",
  "key4": "48tZeqmj3BrfrP1sJUzVZmyKiVRonum8SG1MLZrCxqNS4XXqjavgwvc7VpWqGUewHtdDrq6jygpbypKYCKYhwjMx",
  "key5": "54Msas7h41ucqvwWYkLbqrEQLJJ1QVfBp9rLFzN1WRkeN6UfFSDVZBnZv9ToUj64YFxbkrT7VbyLvxyFLSeWueDh",
  "key6": "4zXJ67VtpS74QLb4ba5PW3UsC3mGUhizQHBrwZsp4G17wFPygjmDMNbvA9nkAizKCMvJ7eR6E2uGc1Q5w8KThUqw",
  "key7": "5S7JcNcdMD3KxyxUr3D9DPRryFKKZGNDGSQ1g9zENDUpvcDs9apqM7SRxWTFgoJezDGyh4Z733UR3ay6XbwhuCU6",
  "key8": "5qikpeQg7B2qSqXfeS1Tvpq9qDKcYb2q4YJ9bpxkpDY8hvCEZfynCxL5Jw7dwDeHR4wps6ZU4nNVLNLQ9c2CKaNV",
  "key9": "4g8HgTYcmeYmEocMgxXwXHtQhKTAEkVFRrpR1sF1Q2reCHxDUNAoV9vgdQqtpc31CNrJeojLqzKHWsUFeX7ZykAs",
  "key10": "2RQ9ZacYE7YkBMr8ahxb4Nb229TC9vur9Lt2CUE6jctmgQnWPkGQMXNmFnEJWiSZPp4oYtQk9Gndk4AnoBYWvwci",
  "key11": "2owRjq2Z8HxmaNnKjXsy727xTXuvpoRNmB1ZeuCpAebyEj2ix9erMVGLVHpEzZQdToe4Cc3yEU5d9EcBVrjotFAt",
  "key12": "5C8Q7Ef7whtcbqaD5PvxiG2pP5o5RkkEsg4b9HeCwtyaKwMEsPfMAjf5QV8qX4DnMH3nyc1RYp59A7uedoXHVNx1",
  "key13": "5sftXY53u3pXFrnT3A2mywQdL2PowVBb7qgxQxMkRmosvQAM62nMdFYUuNNrx8YWeidpWWatVaSjyReuV1rp3MnJ",
  "key14": "UX9qdwk12R6pghiehE1wLKDo1KvAoQCHvGhmmxZVAZRgCABfuzKgmtVn6fR255nTpQ4SRgeQ2etrtiEPn9cgAoJ",
  "key15": "4xWgas8Gz97o9PJGkWV463TeYb6P27gzoXGJ84BeCaEVi1BPxoA6tSgSrkcb14cYR1AFbzL3GzqS3GrAb6JSyxQ7",
  "key16": "679zSZfqUGjdjbbjDCUbonmXGMhdX9PtzyU17D7AW4kpuaygUXqMfuVCsmnKqmGjZP6Yukkb94NYxDfjdeNo4iuw",
  "key17": "3PVZrze5gk9B5PauFbvVXdy914hbaVgteEenPUPB2CSJtyjSWhksKWXPkW4ikVytij3adfVGPp1ceX7AJMuM5RK9",
  "key18": "55SSom6FzFDxP7sDnyvduYkYv61z65cT2UMstxpQuUkJ43HWdTyUGmAptZZrV5e226Lyd3vQsMxQviGSnw2ACZvj",
  "key19": "4oRZGhZ2koSAgDeWBdy1JswKwrNZUDdm2kNBRykFHTcowMnJQLpq7bBwxu8VW4aS8R9eKRb73w6myhxJ59zr6H5h",
  "key20": "2VsUZN3NhLQ3K4oBFWCZ3jm8UtwdFiDGoSUHV49xM3ybqeDVMuZeigCR3rTFa4htek2gzxiEAEoWLKi6dc9xuyLN",
  "key21": "XYj2iAu1dE8kjNcAZsMM6JDhVbgsnsNtz62fsYMrgwq5GcbWmY8iMTXemD4AEbtuMbdC9iLHFT6hGVeXk3sDk2r",
  "key22": "2pwGgSLbiR364NubZRTNP5vU33zQwaBi4DgXHAAyTjDQoDE38aKUoTfgp5eyGvSajzP4Nrh3RUt56WE2BLA2SupJ",
  "key23": "AiqLT5cE4Sro12qEKfWFL1PMA8HVsWXtnA9CtdDVgMvYfwwW3Z2frbBPsbQs7JcH5xULDc7PMkjpiMBdUjUsuUR",
  "key24": "2wPRHx4zPdNb1obydJzNEkGNcL1LuAcRTZ3ZhXcuGzobTzFsNRTN1gAojjDRWkgxHGZdbCU3qJZx8n5TrPtsXMDh",
  "key25": "34s77MQjtyUvd8qBV4VVRpaqpyCU77srsmwGFSghZtewkQM6p7MR9PJBPXuTFv3XuTgnuDvvSgEJuzrJGxcV5zx9",
  "key26": "3rJeutw4Ba94bfBcb1TidMU2vetgpeJNH1ebvKqGj1WWgtzMTeAcUiC8bHg3CRfTkv8ZXaaA2imY7wskMuspZGSy",
  "key27": "3TUfCqwuBGVCE6nPKBqsYPvQVWzUDTH8Dzgz9nL12MmtR1GFvUvqngNTeSfPfnbUDGf2CcJRvGGfTuKqmU4ep5zJ",
  "key28": "3ciRJr2rskAEdYs7vQy9hhiGjyhVA5U2fjyctKy72bskY3x7bgqqe4JYrtzhH7cKXJofN6x7z5JwZHmW9oYLUKKm",
  "key29": "2cREAgGWJH1XAzd6Lq1SQf3R9dgRtCrLSj4KmTNrm5EmqwrTNYDBjwCdw3SgRzXfPqq3iLpiSyqQiHrAfnehUJxC",
  "key30": "4mY2obxZJiEpvE4rscMmMXrcMrC56i8REVYvqWGEZS7JLwjNPB6ZTi2XZtVC25NpxeAuq3tHW5XVWRnDuv8zHkGK",
  "key31": "2dJsaeoVmR87g5VdNrGSbUJXFTXtJdV4ZLvVNxEbGjAjHG3sbt4pJGo1hdX6KMcxBEPJUW9Y73VbhBzX3q5yTwrA",
  "key32": "5HYwCYV9FvxNsrXjJ5AdEAJem3TrmPwSSnCAhrXFV63yXL4GPxMDr2uTx8gE5PzD9c2D6TtM4fERNKkXYBFFMTLn",
  "key33": "wbXZ6NLnNbaNHXyLao7np46TVTHiLdUFxHHkNZYpLV1mjzHNDYT2xqrenFMDyF8m17ah34Gv9nFnmLgbd5w2SLY",
  "key34": "2qxoMF8Zyg3CGyqPThqaR8cEDAPjjdokrec2M3MDiszSWdAYAq1DbyeLi7TsGa3QrSevrASke3TuUdSiohKijxCR",
  "key35": "XzMKfugUj8uLinwPMe6TLBAWcERs2fgXCAoYqEbeSXz3Rx6uExYi7zH8xibqCE1HDQhxPFWh8CWdxFRnbLgrQLt",
  "key36": "3C2Swmofv2KRj6dzWjKgo8gYiuMq2tip6tyMmrowdP2kpK3hUmTSAoucjgcGEd1u5Jx2qR5wUriwXVQHB9biWnPW",
  "key37": "EGZERKrncc9Vjvw8HGvSMWMNngYiYTXBGRArfDbKigYtmW9qKGLN1gJ5Zp7DrFF11oyGq3RauuFj2nbmKE6GfdN",
  "key38": "4WzWBvv7cXp2Z11vfCaYkdhAJ4arUWMnEbijeH93KT2ZvcpD9Xsg28EZ411ExesLwW7pop1qQJgRB1Ha5Hh8jsrN",
  "key39": "8nTdzQeSfSasFuNkz55EAFVwij76T1w1hPae1NTzAQAdGcVr6PhjnGUCQ84w6nPFQkuyipHjH49x148FYGdntcP"
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
