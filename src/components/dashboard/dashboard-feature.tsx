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
    "2eq4wnACJunXqGwczGFRVXtA1q27JXS3BS9bGUTtbMLyrj9tv5se3mSi5Eam8oLzhG5DMb2iad9exZXz8zQSS83Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iTq4QHPXZU6fk5bYvrNHURqXWC1Z6sheMi2G7fVcTiUrQ53CVYXxQDeJd7ZDgweuSA2gRjtMWwBF7G4DRuEWQv7",
  "key1": "2ygJEaErAUwBj8TqB7gKrHXFn1ps3ghfEP15NJsFqecSSx8LKhTebKJtUo3BEDVkNkYN8UxueyZnJTZfZDoxAhVv",
  "key2": "4bLxREDXkkwHcxgofdKh6S3KU7zw7muoPeU81qVKrcy7n1Ev2rMZ3bdtBFqpPiEiecQb2mwmtCCPfsVzmzJ8owmX",
  "key3": "7rZdNwunksHmDSNgEy58bvPqjRNoLpysrNMsWgApVzfyg9Sio4BNcExsiVRtgbLKX74tGkaKgAcTUinzM8R9pK3",
  "key4": "3RVZeC59jbHDnJtabxZici9DhT96j9obHmdgP1nYZTohCYsdLspeem2AwDBnJjMtwzRa2ntrXNSftnofRxAAug2T",
  "key5": "26hqMGVDfLsxZqubaMMSaTYznPCdmsAsrTDrHbaSPTsxV2PsVm5NKY4LcLSUmAmMPWs7biHoU1dPiP1GUZxUz5np",
  "key6": "4q9w9pwXBcsk4jXJK83XyUSWSWEMtqRS4nn4kmWVPETZFkcEnXTszeWQpcXTSS4AYhkyG9gVghRhmpze7shEDQn",
  "key7": "4dpHHRUx7YRGjbU7QPxyWiwz5J9jk81GFvDFLgVSbrUjd9rba1aKDZzMZRhVoxUsDrxZJonsx9gpbrmxRaGn4m8e",
  "key8": "5FceeSBqPoUJfqzKzT4419gXA66vmaScECtLaFp9z4uvb6EcoauWjtbusmG28JeSdRiJRTjUme9uh6EHwEjQ7Bu6",
  "key9": "5nR5uETRuGtGHhKBQWxWP6ayitAyBS3SUyrZUCritB2MrkJBWGyk9gLuXqwZTjBukeKmcLbM5Gek8fsVEVu52qKZ",
  "key10": "2Kkv5XNByaEkHB6F3wMq6ze4eCWBbrQoVzg6bD7qUXQu32wuqbz1uy2SGhPHyrwArVLR9qRHbS86mfjqTadscXWv",
  "key11": "3WQ1MYJrECtRJtWjD2EBejayd39fLKUewqbAGvR4TZgz7pW22SHHJv368EMEu9NxR1xu6JoqivK6T8YEpt1fxGKG",
  "key12": "5qQAeDepTVShFH1numvX91qGrZo2dW5KepzcDd1LpoFkiLhbfpTzDjrGFxhPaphT1CAtjHHx8sb6em7qNRJCHreK",
  "key13": "Ro6fnMYYqzoSiDQqEGi9tVXVVsqXxPRYUxKLGFbPCKQ3otnXhWkV4kRKFY7h7dqaCng9CaimLumbpS3rKzuebzi",
  "key14": "48waR7VwSSDm479CkjjeviRAz9r6brZn2tfuv6FRSfewgyYUfwsvJ2DSk5W2TDLaH3M2ytuco8MnKe3syoGfKsLu",
  "key15": "2WnxLFf3CJuquirco16DNDCdzWt9XS8JbxnbMwYEuErm8BZohY6Bdv68xmuS7zdN2TkSvUTkCREVRKTNy92CiFAN",
  "key16": "5KQbSwAMuT3J3anFM2sN6aa7NWg2terWw727RkSMyi2vJVuKu1jQspPPhfEaNmnaz6FzhqcY6cXCcjSUoDDEhXNH",
  "key17": "3nEMiSCmjQDpU6T4ZLpKyCS95NJY7i4Xpbe6NdW8PCV9d98mGGAmQw4CUNGYPHBcaPnjZwA6qp5MAusxELa2troB",
  "key18": "64xWWgDgG1cr9UPULor5EcU5ep6Zn9sXwUJeXc3fWGUVEz9BAXQvcqNvBoaNGnm8Y2MQDdBsmbmmWfyFiHUvk1QX",
  "key19": "5unvrWp6sfyiHQJotyS3heJiunXnmsZR4kYZY78k7gqETJvPGjj14pyqT3R3cofjg9RH7p1PadfJn7uvi4m9f2Am",
  "key20": "2XvZhfJ7Mu3EPvtnimEeSgZSBr8NpAHDkQNRQjFW5uhsJq4r8GWGVNMAnPFspHpTM3WQnFnppSwXVysUvY8V4UxY",
  "key21": "5cR4is5NXZQuhhqXoWJSCf32uCRT4c9q5JFGJErY8QppSfh8m1NoNTPXu83yqw34k3sZcyhNJmXstCPT7oscRVsY",
  "key22": "L4FUwsPtPy9phcWm8SWsvn84bP7Xsns6DL9eSEP1R3qzz4bsihE53mL8uHyE78CyHEhccAPMS1R8eBGy4Zy26qc",
  "key23": "2tXeEThX5kHVLTCdBpXEQGQwTFZD9PviSSxiAfvLc9AnNq4VMak4xzqNSDZGw6FDrM7zGn3DJRJpn5f4DS91WUVE",
  "key24": "5FT6R8ecBX2UknDL3oKQG4D6cqSCMEH8M2GKtLYcbbkuitkHPM6i5y3rqeAr3oqVNUZSRWT8fqhTtgBNUVfZEypo",
  "key25": "4VAnCxrhWpHgW5tSD7tG6Fdd3FJ1GpTdsP2yMpygK9or7cTJS1aSqXvXjR8NskYVYieKpDt8YsdbjWRgJQVXWtwy",
  "key26": "5WXThwdj9guNTk84eCd3ZJfoQequ4XewSpZvvuVj4wuZYUVpkDqCULFjUCeLmePdfTqbZAZPm8P7pNnFX6EGVgmY",
  "key27": "43rYv5fq1CMizJ5NQfEYGLdSzQefTxEH1hB34cSyxTZMy261nWWwyvMdCLZZNtPQi5BJkDqoZFBrjszAwbT3ASDP",
  "key28": "3H55EB2xCkDsXchCJhndG91tLgua5ZuhKpbAb4c3Lc65QNjEqXPqwtWhrhPJLqevkqpwLGLGBwPcnwAZFM8gAdy3",
  "key29": "2HxXA7CpGKu46TKU8ijgPaYtdFiQjU6peL3PRsHFhTXL42EPudJymB3sJz9rUPdhRpcqKj2gy71ibk5DJDq49nXo",
  "key30": "28vMmANtiHuzBmwsukeY6iHg8tRXU1JQDA7YshPLUs5t3941R6buznLZvgKykXyRGXUAEAzqYAv4UznUWqwnJ7Ef",
  "key31": "5StxPfkCFkfEBr4bu3ZKat5YoCGkpRiSsSP5RhLNBQ4Gkjs732YVBGYoWkMZrY5Wy74JJiPf2Ej7APkT8Q4LmKaA",
  "key32": "2X8CmDwSBdmAQ7jKQ6R7NXTNLLScLvHiSfWG7e6Q4roENN65eJ1wJaHnAomLewKTdeYwX3B2UGLhJWGdwRFQxKCU",
  "key33": "2phFwBVz2JD5x5ZMhxbYUUYdKLMvnqCRcBcBKi5pEobsPJTUEEXVvL4H9fjhHeM9VUr9mVF2aSZfvtfXdgxDNHhA",
  "key34": "3QmWkg4esPkeDiNe64PhdBaGQeFCyVEdijpLbLVHyuvWwgtqznasZ67ar23hXAicmAza7F2fUawm511zuYhLMnnp",
  "key35": "54ks1uQGKnn1nGza6x9Cym99LW4RjB4exH7LysBS3CsjUsKngwXVdTx5omwoHHuWBeoADVLZC4RfZwQVDSLcWxGD",
  "key36": "2NkqJ1ihT3ptbNRBySy8F87CHmiNDVA1sybanMHSGZ7B9LjfJkLbUxbYFj1g5pFzdffK1neHU6Zq1pdSD8NrkxWD",
  "key37": "359Tf4PwgwjTW5Fsg6qw9dA9DBjDuFkULhmSqESN23tYPB9yBLqfKe1vm6SW4h9sJJrFJPKP9z1o97wBuXZt1spy",
  "key38": "mwg5evTkTnTeMoazYXCqRiJ2CGyzoJH7nVNHvkmimZD1cXouvaj6F85ydXRpbnMTwAV5gas5SuedV7LNCyHMdmm",
  "key39": "4RxoeobiDrnrTEz6nxtfA7M1h8JTvw2BPSM7yr9QHMR35cfoHEMmoq1hjEWEs5CwKPActCDtgo7kZNx6MArxE9ta",
  "key40": "5Lg4QpK7aqHxxhtPejgkfoMSA2izmBw97hB7TPmKw7DyRtoJMCH2hrHeZRkjEaGMpbzeRd6A4oWsnoSujRn288qp",
  "key41": "3qJY6FfXT9fCB4KQ6SAgjujE8gBTkWzr2dZsjp2Ncvi1Y9rCxwYuFvwcNQswe7YjV55VqyazxYYQB3pbyHyWePdK",
  "key42": "527KdjyH8gi8GEGqBPPJKo1jbeZqaQ51yQ5LsiiucykNYbXWzbVYMYBkDbPEDrzPRSr2pkkWkf1AuEwzrR2deC7h",
  "key43": "SMXy52s65KaEDe7eoXMkrTc1dxCMDd6jjxNJV4mpCABd4qAQNZiGeWvZk1twhSAWkgSR2kG6RTUh4xqsqz6aYaS",
  "key44": "U2Y2T2ofbkrNQs5EBTfo9sqW5njv5jRbVAN8xJnMveiHuQYRACXaJY2SJayePw9uRvjZa85s15dkDcthR9hM6QC",
  "key45": "B93g4hfN3oPjZGGnsw6dxR3cuhRXj2CVKxGj8YRgTiyeJnT8dB8RiCapYeUnzXqborouWniLpi13gpoyZFaCMpu"
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
