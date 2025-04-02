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
    "5fZtQsZs36v512KFLtDZyjSij8wxxqQjp2yD8uLQ1mp5aCBDWcbrHtuDs6hhZWtVHL9Hr3CKvYi2Wdh5hxtxzef7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55QaMdxzEudiYLBkMrFoWHfxuFtgQfJYS5XomMNp3wcCXdBVrY4XjHHERN6hQGabqoZyH359fcUheYoi78FGcVGp",
  "key1": "xVsupaMBun7vMMk4QM1KAKDLsAPps8GwAio7hBkahL8QmspNu61h4MnbWWsFECKF7ES9iGCcS8GpKR1H2Cx3PkL",
  "key2": "2RNENd7HWMWMfNGbURoQZ71BsMFSBGCNyXbo3rtRXQvee8TuSDuSEZggtKpgTLiTECfef8U1hrWjrXQ7r165A2f5",
  "key3": "UU21LZsurUBB7v21d9QUeMJSGpTjHBU8T6HJFDbZ5tTtfyMpqBCnuUquCFLMdBFeBskJJxhtmrwFZfLBERAVCHg",
  "key4": "2Xf9i7koojcDA4nEKKmFk1vZ78toQmnFrEYr1miM1rPqvs53ZcLzrzFhBQhyyhq598qKoiRbMsimo9LNqk9dH7S3",
  "key5": "3WyxxtgCnkeGYsrXub7XdKX3fYw3EfCBsbeqjtZLtDjzW6WmwV1C7zKPkU6fiuQDmTnWP58yo6rEu9mNEd9Yg5Eg",
  "key6": "4NqEsJy6vnDuWWFRS8pAw9nQSn8EF3xKwh2s9xKcnPxvNpRFWTZ6EY46s3qLC49udrkjivoJCxt9ZMs1mpVmPPrB",
  "key7": "2wyJuf8FCoAW8U2mm7TXdrtHpi2HDkvhkgDN13nDzu1Wo1vsc13BuS5qtihzdSJvohrKbn3w7uHjHdhRxtUKhwa2",
  "key8": "642TVVAWSXdWMfmSUC1TF58A63dbqZd8nEqbYrxwQBSwb5tWbup3Gfhg2RgDPxJs3wnD1T6BMqcvzcsF6Eqouo73",
  "key9": "3TbdMF8Q8mGg5sne8QWRvexotZoNz4M4njh8VfS88KAJEdszB1sFvWcdWtv7vCKYnBmP623wDcA3m9aTmbjUTX6b",
  "key10": "3hvR4KEnk3dJ2ndGCjaqY8ocUy6Xvt1euGS45hmtTsyBkR26v8VXYoz48GR6x9HR3w5p7Xcg9ULkgeqKfjtcRdRd",
  "key11": "2YwB3quUpdh574ffyNmnj7uv2jYo8id7u5WjRh2eio8aA3BHyfDZiFDKfxW3JSkKSEmHkHRdVde1AgnZTFHZNJmy",
  "key12": "4aDZe6jBq7ESxffAbe2y1GDYQEQmTnGQeR8xN5cGnzUVBrbQeBivV1Q7s4YFFZtBd9tyx9gi6J2WiFajktg85Emw",
  "key13": "3aFZLUSEWe1wqHGsbAHusGebFkBzUvUQ8anzdE8q2GesHKzPZkWz5WVcqeLLuw5C1p5LikropkL51fgto2w6UzxP",
  "key14": "2kPeNHnvrXWveh2MPqngekCz1pg9TwuRFjAuwRzRdRxiM4XrgNGkkmmNzeDX7UZZ7MfkZGaSBx5eRABSkGgcFhC6",
  "key15": "3LTSRXypRuJxi2yrYioJxFscW3q3ecHYCvTKLrYbqHAWqi7zwEJRBB24mrLVLpnxHicGPAY9coe8u2BCr8s2uzvw",
  "key16": "4mVaJbGdeRzH6KxMCR9yhBK7BbMDxsdnCWo1DKkbV5H1sFJ8UvvXRHjyn4ihcLYaR8mv4RkUM65AfHtnG6n3yeR",
  "key17": "25NQatfNnNdVY86YUdUj68RppoZiPjrZ6Bbt16EgHLZia16itGGEwJmnqvdhmnvA8RPFE4E4xpKSFp1X5sszHWi3",
  "key18": "K7UePyKuomyxTH7ic9KrZrg8fR1GAJivF4WpUa8DSw3M5ZSgkFNAhSdsx1tLNSGwWgQwwNpG8a8T3qQbcbEvL59",
  "key19": "4MCkGPFPVLGu6pnqfQfUkpQaG6kSSE9tqtgjzgAPGwRhefPUxDiyJ2ijay187YLpRhvoYHxZGJFoD6KF2AMkNnv1",
  "key20": "2DPXLyPgU11NY4Z57ZTka7D4LMz99JoK639f4eVTWyT4SR2GYPnJcnjtVGeXJuH1t5qXWuC7dVvfAXLbyv1AZL9M",
  "key21": "4h4NW1QQoUK7WJ1WrT27YpqB8YvY3i8kyxo9mwsgLX4AYLvfYuTcbf54cJy73NAXLj178h1Gnu9kqTyGocAjJsAc",
  "key22": "5WGtAeGGAcAxAnNLgEwdhL6dBuhRtV9wL33XqWnBpY6hu2TM9cM7TukEiqyM8mBjNT2SKKoR5Xj1P38Zm3P5hnX1",
  "key23": "5zW1ALNmetW1hk1HhmgKmgSshzBHNhVamZWx8U7hpS6AAsftviPWZksLrT2R4Kfp6MDPmCg7Eo6R5nj49Me4nfK",
  "key24": "3YyBNbRGwYtRp2o8zT5SJB5zFe7vhKCMkpQzAKpVJzzLHCe1yqh1dX795rZegwRiN4Ltz7BFEcUgKx58SUbUTftd",
  "key25": "4AaZWu2iH3aSCZmCqxvBnV1VgUcTRmpH4JVJBmop2FJcShLEdSjdUFN1qNJDHpbSjfvDjnexZR4iNeq8ePGUbU8y",
  "key26": "37PKGBGZkSALZBLVZW3BFG7q4DDVRLc8DfHaM6oqHdmgTHhDcdeS6i843BUaGaFMfSi5HVZojNLpYEmymyCqYxDs",
  "key27": "4b7zL6GDD1qHzLRJn6fZr92upBCVMNvKB4GY2dvLNPEyuj7f62RYtd6rKhb8fxEGzRCP4aZ1uCULaaJPyHWJguBY",
  "key28": "29mExFQcoxzAq21LhwuEKmDdU3hAiTah1qRuDF4UhH5EkuhPgCz6pgG2H9WzLsaJwCieDAtGbXD99beR8m99XEgG",
  "key29": "2KrZYXvB8rRHaVbM3KjbUuNhLnxYpnsXFrvXPfJ4WceySoqx8pFHoxFpqpdhiiBjbkEadrVGoJSiTfvipc8CzveW",
  "key30": "5H8qAPqdLVVmftKheKm5rdTsAEForN6dGTqHDnkuWziAdUz76FzCe3YryzGjVNVfgZYPzhVDgzxmQyQWJ9LXxr61",
  "key31": "2iHtwYHXgPFJPU5y4UL2q6hUHG2Rc4dcLgt3WDku89rdJCtTun7zsZ2fU7nHe6moTZgqKXCC6JbZM56cPL4ocej4",
  "key32": "4KgR5sPQHGW72csTKoJj49JgjPWWV65RcU9AapGbsUps9fRLEVhua5JVTTQcRAtyzbdxpEpk9U3VmXKgri4g9Pvw",
  "key33": "2NeoUk1SJpoEQnjBw5tZV2CFYje3usPGBFxnEZvegmUNbSfn2sNiRyPYju9HiUrer4u1FK1HzYqxy15TyNVJJhp7",
  "key34": "61v5W3BynKDoJKT9TwQtbgxwWBT9vFnnjsPDJMvZ3XRtcPUmokWMJ7bUdcVeqAeETkDrx6PGGLAqH8TtgLgWKbk",
  "key35": "5H5YTvP8zH81bDCNs3hfymiWMUHFXGYLwtT2rGap12xm6rv21PWYKWnW5QSsXV62gB6UjbNapfrbr9zyQprnXMnc",
  "key36": "5AJnSPZTW4MaCu2WmLicJjZGst9zHPpe9QVi9WTAeutB9V41Y4gqPWkuVi1BTcRkQgmVRdQ7Xc9a5uJCHBaEJgHz",
  "key37": "4F8TqR3PiaPn7ErBqbeivzMnXGXr7j1PYSSQU3hBvqbrWcB2hUJbnpX2Egf2MwXB1uDFhef1HBbxeR4LSBARhXD8",
  "key38": "KnnsjgauxefyGDit9WLyzHCE2Mh7CBfzz3CcFXZsdYVhgx1vozCwduQSjxJdiSjQjmrxbS5dFUJmsVgq3MAAV6g",
  "key39": "5dsSAGjFrfjjMW3XihHeFym9gbwPFt2b8HcRX2yLGmVeNxreMj7b2gKJKSWWjyXTzz3mvcXrSog8aRcYnPCUwmZk"
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
