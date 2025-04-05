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
    "4ceW228m8YYM2Butg84hSJYJNKjuRHh1JmZQGokXs861D2vQwWZXEnnVoyGENnTxmWorCRyuPtbG4WcM5gcZcJVA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tzjQYHc8y99jzLH1zVdTR5nptWFUPWJgcp1BqNXAeJnJhD9ZvVFSwX8Hps5pPge8hAGRKnmTv1JC2tGRRbomxj",
  "key1": "KzHrTzY8uribjb16f7tUprLH8akp3SjZwU5zRLPvMbd6hy8aam44rQR171c7FjW5UgMqvfhM9utMk8UTf1RAbjB",
  "key2": "4v4TshhjWtCv6EoGbco6pi1TZzKhztJLwCR1KZeJtMUUgZDYZ1piPUqXcmX9mHur4GMF4wMBr4iVcDoRmVCfk6Y8",
  "key3": "4DkL4R2nvJBGMqQqMRReS3e9iZuYhf3k168S8SHieQZ8NrXzeo9qMWzgvbGAVV19hooYC1MfY8QzLSAsC99MB1Ra",
  "key4": "5C35Xkb46gtm8NwuhDB2xJn1hsX371dujHZgqp55LokznKerWLUmGw85pjTAW7cHwwmHNmHVgFKGZVGzCx5tG3Nb",
  "key5": "mqRzwUwkkmyvP6YSjzDBBRjHCE4TNweLmUNGoF1nqw2k8ZtowKvPkbiZZ7HXrD5KqeQjnNYAPESxMLxKRmyDkGa",
  "key6": "5nkZxfWgXF2JmjmkynKhVrACj9usq8STUajmJnm7eJK4yvAna2gGTEPboS1KXzXVmjRTpmVBWfMbCEDunjeEm9tW",
  "key7": "5PGajUFzwyFsiqqB3m39efUp4L5Dej7jsZHxECtdC7MuKybDaevuSaCo4Ec5cAb6Dki7Us38Xo9rS2R4RQDTjogy",
  "key8": "3HyQsTw2JKwKBxtwc4hcvGj8ffaKLq9Dmimjuekj56z1YLAYMXzXyWMhCUZJovMPiBiwUG1oGde4F57jGBhifVRf",
  "key9": "5ZnEjSqSJaZQZcbSk89Smxj5UF3XLhEbppEULwwV9AQzRAXFqQH5MchG6deEVXMf3TNELXkfX3Rw6G4UNrLSi4EA",
  "key10": "3tX2DKq9Vy6p14yHJRMr5A8s2D4ZhTzXowHNZ1QEszsjiGXkJhMaobjLtGZxxa7WJovsz2KToFdqSTHeYiFX3tg",
  "key11": "41o6eCwNZJVXH8ezzZK7yjvaRtNAhsfD7xzLAZBMQorrxsh3B66pMweYgcAUn4PS2UEP4rXGbwE7A55xEuBk51Sa",
  "key12": "61oGVDQGwDzb8Lhqiddtnper4ijFuTmkw2dk7WVR5VQt3sU9aS974ejyQ2iojWsmYerCDFKJfnA3N2LhdoFdbXML",
  "key13": "5CCgTPrKP7TQHuUbTvoGYQCtyerMuWsXFDqX6jNRpwn9apY6aaU5vYWV1w3Jxi1B3cZ2jh2KW7KQcdqCkVgJ9BNd",
  "key14": "48FTEmWNuLgVdyCVvdriewW5r7xeQQZkTvbFXVwEQ782uuPrPDDMUMzWAenqu6kVFNLtFYm4XqTnXXsJAFjd4wQF",
  "key15": "5dbd5WPJGLANvoyuXYqa5edzdPsy1PSokHMQTBpX9zPEXi4VCftvZukVuBmbuVqAPAchr1zf6g7yTm5kNY4nGTS3",
  "key16": "nzzzYC3k5GkYcdfmGoKytExrxXcdmsYUz9BswChntQg1sKkHyvPqsHs1xCB8NPvunGnRkHHWzw93vnzvU2RD5bc",
  "key17": "3pHArMHNn1i1uCSz7DWPTorfGPt7yx3EfUsjdcCUSLDkeZPCpMBK2cg8JUfjKMJAc1nSaJ1MCaZRn3Jq4LwZ4UyN",
  "key18": "65G9kqkfY2dmbK5XrELUzeH11s2kyPbo9SCCuqMqapeRfYBHBpRmB73nYeE8vRrtxrPKtswcxU49DpFaYp6QKUpN",
  "key19": "51FApgtCw37xhAFDT8zUBKccdoTjUxDoYqvqf96eqoreANVYuxP9o5j7WT2TQvNbLAWRp1t2u9T442h84ps3oJQJ",
  "key20": "3GeaXoTByW4tEwRKLan3ogYvu6TeHWHuJvt299uPmGnRUqVa5syG7z4nqki4BCUt3uT8U95gyhgWYyFBcZyyZkaQ",
  "key21": "2VnbjwH5LRESP1owKBWRPKCaRjTnipkcCHVbXhHZUtsUKhRqzm6kHdPqDhxRr3a4GBv77WKbNqcHytA2yZxeGp57",
  "key22": "59ZMeGjkFULc8ktFZ2XwQZwDZa9N8TEH1i1xCnebUzutVrqPqDPi67QYCAAK4XRoZbaHjFYVue86rbU9bE23o1Sf",
  "key23": "SxWXFu79EgApDLAXo8eERGH4ijeNGoXQcZ2BrriUGpRMecYPq8cuNiB8Mda9ZeDU3LCYmZYTTHebDzASAeBgCcv",
  "key24": "5uStoTznAB7KJNZtc8oKzJHZtD8V7umKLtJPXQBVdRKAgVWjyoPToz8CFWJsT25vcA9hnzKwh9io19pBr7a6AXp9",
  "key25": "th9PZP3Vbd7LknBRhtwRPBLkpvZjPoE8Ne7EL868w4GzwGRBFj62stTLvp6Vq1bgaLZHje5qtpCB4iZi2CBxM28",
  "key26": "5XUJWr3rcmRXsQasyUBjyv3jK9c62yf9s4FmpW5rCC5KQjrULK43pYD8gmevGaGrDBepafRoUiR5UwoatuyUTXDi",
  "key27": "5nMAZWF7LKvruRMuW2pX22h48fU8NVivnS3TbqhWegf6AeYWFE3ZN8eQd2y7iadSuci4CkwCxCU9NRjCBfc76SVE",
  "key28": "4E12abXwbuvk3cRufxutKa6B2hh3q8T5kuwN5L4tBREAJsu6f7iPx3cNS2N6txYdMs25sCCeMnZMCJE69K4xVKJT",
  "key29": "CHhCrCdvn3nj9oYPCJcPecRANnPA9wjrF9qwuD2g355hJP8QmguskQVE3fzLmUFbZ4bf4mtagQfVWZgupMR5zAB",
  "key30": "2ibizyueGJTEWkWCFgk62uCKUxmAvo3AZeKHLpEZ1XjjbKmy3iPHT4J19AKGkzCECyFJDHNhPrFR6EEczR3vPKoA",
  "key31": "5KjEjtsBebdjK3PERZ1Ht5RntQwKxK1u8tVwwiodq8xfgH9XitxmADgUANaHSR2tKYwtJV6NbN8u8sM9arwULJYs",
  "key32": "5nZ9eiUzhyWRrQZ9VUspJcd4NmnhyGyJVAqGziFkYqs1FJN4BidTkG5LneVdyxLoJmcjwACA5441LwPPFj4PuyHL",
  "key33": "5n9wsXsMvfzV4crdDVnaBGKbWw77VDiVNm5cyFJYUMVnAbxoE9vjDkWXcBTcrNJJjCVD3ak4vWPq2NnHY8nbku4z",
  "key34": "2wuPuAmnWmuxj5QrEYvUuKbSzmYxCwZ5MgSqhjeiLMq3sCsanhxDeEVtatAwGQHFQpuvY7AnRKYLQBQoaHMsPPw5",
  "key35": "4TqgUwjKMapMDre1ZJC3HdYviUViGBb6zodTs5N7ukhN1SmPHTJBSryHLCyjqhYBHAWpTsD1EEya3LCGk6e9ZCNF",
  "key36": "2jfU8KJFUBVLwG73mUmWWioCeuCwBHznZNJkVM9MV6uiF3fsPhZ6CwzLQuFSfjy7expfM8BcAatDS2oDspgA4e85",
  "key37": "CuqBPWcci33Pqi59Z6wsVWwntvmKLZQc2EnuF9hXz1PhZtvJdkG5AALsnBJwyyFBKgFgcoeXezXSXF2b7bKVBhB",
  "key38": "FnPwBPaYttC25JjaXdNwg8y9pbdnCkX235wFJeH2b2rxpLW2gvALsKyr1bXWZcqV1S6SQNCw5YDKd1h86hLuG4t",
  "key39": "4BcHr2Es2UQD5RkNYvdjN3shxiJEzxfhxXjAi162jkyk7vhw3RAMs2nXxoiUvgJKdsFVgV9JkTU9M8rb6XNC188e",
  "key40": "bccnzp6QLruD7ZDKy25dJ32NEhyRtqX1Meuh9keg2qShCGGThAR6EZrvdJ8NZE4CWa4fRfiGwDrh1jrdVEPPEf6",
  "key41": "5RXXKftB4TYixE88h2tgdxrWJ7x9cppQCVt9h6nYNDfa9XLyYSCqsdb6tDGuELKCHYAgRvBPi99sqBGLxtMnAjEQ",
  "key42": "339G3xS6ruRau3MNEQdvNgre5rSMmUgG2WURuTEyjDRbLEXUvQx5syRe2FvU5oJPsX6qUs31w2eBXdJVmCjXNYsx",
  "key43": "eWQhUk98NPkHzoCc3LQJq1FJNTn1UzATdRHT65g1rq85c1NPjKKKDPM1FjRzJaD7ub5xSN3T2LfgxShr4WZUy8M",
  "key44": "514vYHFPC4qUkcZe6JsQ3CLpPDtUbEh52gXnYjXgE3QQV7WD4eFhbpRN9xRc6FYTSVKo2bqHG8H3oF2KCLh5Rb4t",
  "key45": "5VYbbqqYLkf8SpLVN24p4EJ25rw3XLoQ3Mmr16Y9yxj6vBHggRajFespRsWWEwjkHCHYd7agHaYjtYCURuzNBTEL"
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
