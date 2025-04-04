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
    "2fAfnyXxVuT4xZaP4aU5Pi9TBbDXs573MiZ28zdrEf3NcSfKV9Eo9vmgctiYVZKedLHuvbyZ4s1w31ry1dcv8NzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2io7UW2RmgKPKg2fvLHHm8sgZQbLJmGiV2srTt1CUTBjS2VXiiszggwt3gHt8n3gyAj4cDAFJKNKFm5W3VYiWGLX",
  "key1": "29bz6tDFRSiQFrwbAAffxebMVW1kEsthBfheDYSP55C88DuZxePL2vWDmDgcfyYcPZsaXbn4UvsCw62VSmnAuT9N",
  "key2": "K7s7wgp8puSst9uS1UfoszqBQ8xUoMFFN5Ez9scSG8d1cXM9qspVNbCGWVNKHmtSVPiXQFxULgGSEr94f2YJWys",
  "key3": "4sTDb1H6SZwp7HyUh4JYHd76B3C1E5throHt1CdVUKUgiGZMMnmvFFBuYsZz2vfndocj3jR4fG9eLwrVVZrTUx8m",
  "key4": "SvHbA6KrCKXsQvnYGGbZ69AX7P3c4JHyMNesRuHLLFdUHPDu7B7jaLq8uSRBC2aU1BCAQVi4kSftZSZ1B8oYWFn",
  "key5": "29k2idBGJN6qYmR24VmGP7J6iNGzkdvRVQMiK3BcwtNuzRsT7LhdgPKkqMGK6SCCRw3idczekUdTNA8DSqMddUbz",
  "key6": "42GZAftj9vEDE6QAHsuzQbAbXEe3NYty1sudxVpQXL2AZjUi6oTM9AendaKwMg3j5CajidL3tD3PPKN8aJ665E7k",
  "key7": "3jag3s9KS2t3UY89aiKbwxxWstVyZpegY8oaAgPbhVnXAg9SdeBYNejpXgFX3KerCTfrqMH66RcPorzw8MxQ6AEx",
  "key8": "4gPor9tEXXApTtUPjS19ZkiF962UaGQDzuL1GKdkiqFrpEoxg7DVSyGVPCsRtUtZ9epgfKFhBREQChdmpSf65chM",
  "key9": "FfK915FvmtjxkE4YjsKjgL6jYfyPr9kSjHXk1Bhm4KeCNptA985BYbjfWrZcWTu1Hs3nyquX9AN3JwQbkZVHfCu",
  "key10": "44sLB3VvDnMVgyHsS4BaiiHmDVeD2qhhszPw4ETQYBkBAxYftb7F7Sc67YkcJeM7Lqhjq6fiAZSv5Vfpzkg27hhQ",
  "key11": "2VA3kRmkcU9RoaKCtnifBd6Ue7ZgMVspyAqQ9mUpS4oiTzLhq5xKsJTBWQ23JFdkkcvuKbpP1YC6QAGNYpqA9k5b",
  "key12": "bx6jUS1a9DwjZJQM1PCACJtn9nxfrCA8HF2VpDRQpK3Bmgitgj5iNri7kacVrLTv2S9HrDkgfmMVUD3zahLjaAm",
  "key13": "4PnATLsvJNcHSctXsgtMcaPCgBpr7SvttmYPmhe5huCoTLLjLpaKw6pkyMdAkF1bEciqH9m2gfjj2dXsqFPuzK83",
  "key14": "4bg9vgueEbVW9wvdsfN2LQ9Q8kNgs7TV9r9mQsjYYHeEbmB6dRFFX2BozLqHa7FmgBohrFb2eJBoq1AmAZHZzpdi",
  "key15": "3Eb8241opK9nYnQ61etjcuSJCPV6LHzwtvQxjPosTwHCAcpySZW51QZkvYXR2EbDV5uB5fKYRuiX7DgRHAswwQnD",
  "key16": "stDQMaE64G2fzRSez8BonzxgDkmeiJtDpxYNeGgsjcHF9Bscxk3GtVetDm5TmpKQPdL1ue5pn29A5SVayjJYP81",
  "key17": "mZF9Egoe5t7gxz4SuigUEKYkMGZhQGHZG681g49Jc93sr3pfNrbu6Krz4CBHWJkRiqth6QUwfcMqLJKM7P1TwLy",
  "key18": "3Zw4VsaWVAsR1ESJZzf6QfXNhpR4gnZJVDsJEqEyTDNg11kQ46QjhhuLvgoVd5h9AZKD6Mwtp6oMioTHF8Q6KW3Z",
  "key19": "4565oM97dKKb3yCJArPQvpYs3r81dqmmqsuNBTrhzuofuGpuep6rG3ckLQaQ4xLsCRx6wBhRk8JjQPvHuxh6QczW",
  "key20": "3VWj5wMJMCac6KyUwUAacu3EmRLgJXQgb8XLS9r1BFFXqehgYDXjPqSZvx1AfSf92W4iyYuYqww2HLG4kUKVTtWC",
  "key21": "55PxFP2Xx1b7Uo9Bizm78Bn1ZPnb5g7sdnz7YV8Q4pHLxxid2H9qJfcbbqHGYNUamduXieuHEGzZaDKMt6hcPafs",
  "key22": "2xAA6xaBDhiDydhrwty6fcp8wBjsyU7tfXBcnGncAbd4Qd9JAjcCpWh6VxjiRLCfE93zsPwTLzPSVYQuNodrkARq",
  "key23": "3gjDRJdfBBAKXA69mNR7pvSM1ZgKHMTwp96m8ojTe9ouh5gRkbrDzHuaurq4Xv8hkd8JkLpqDDaqUmMaqjcRUxDV",
  "key24": "4eJyYEzeYdD7SYspcXh2W1Gt3KLkGt97epS8SveZyQpZMUidKvPWfRZzkgXPHD6Wr3H4nYrgm9Gh2SXeQQC9bWae",
  "key25": "28Cvrg3NufFf7baAcA154QCCPRETjA7c7TiGBQhcWSE4aQQ5MyGAgLfHhjy4s6mVbzVrFZJ15JSiU2aACUJVJH9U",
  "key26": "3Pk6SmTHyNwM61dCQQYiGhZy39awmqAvXXmgj4px1Lo6SZAGcRxPpYigUCCM3kT94TcKqz21YbsnSLcdxp3Rdubp",
  "key27": "4si9UbXUUNQaGDPYePjXftokPGDJ6m5ywBD8SqbWgDUpZqjMV9ytSjE2L7NNtCxhHBpZLWxut2NaphBGJBFHrmVe",
  "key28": "3gYYasNor8FRE428SGQzC85fdjKd45VXomkzGUdzTte4LgbBTPdX4pj1yDvzZjwfMDvstgg7tvDfFwBcPm4qw5bq",
  "key29": "3indMaqBsjxFKmLcXNzpZMhsuZ8NdXC1tQnJJYhbJ6feaNeXjn252rgroDtBc3CXrP74NweZQauBzmoSUbuxw1b8",
  "key30": "3oPwMjCZznSQ93jKkadenVZkaHw2UMRWHM2Z9f52k7tv6JWAm1GzdvCqNk21mPaSfDBwBJE4qLvG25BefrAxkcZH",
  "key31": "mGVknnnW2n7Wvop93TMyt2tKqPgoPYTcmxo9fCoqPLRdXt5xqKbCBFjFmLb7NYiLfvxG7Yd5P7KMoWha8vB42X2",
  "key32": "4tNDJBthk8puUwnJcQrxPzAPS53fxEYNq9XtDXQF8cSy5SLPjg1Nx2cATFBQUmsHnFTKJm6JMrRLAV9DN1b1sYE3"
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
