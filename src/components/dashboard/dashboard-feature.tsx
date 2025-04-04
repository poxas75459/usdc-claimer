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
    "PeU9ksY2mGKEtFVDh9Z9q8bh4yjTrNyRbNVufyCUiACSeprHifankyhQh3JzZ32wabxcNCpHGcFYJxytoZWHgpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tEbhwByRiQA1ruY7VkmCfWKKmY2yz8qQWuT8yhmvUsUQLiCK7Ja3YNmz9MeTGPbKp9rwzFeR1Lb4XpTGU2HMMjU",
  "key1": "2oqFBXaviuELzVgvWCzW5R5GPnSia6HoidvcAVNRZU51AFABEPTHjWbLPZdxa9z1Wa63juC1pdiCacX8cQgGRpfq",
  "key2": "4tzX5ySDxTF1iTw6oCqbaEqkoEkRL4SRs4G9JRfp8PEEa2cVGsQgHFKjboeNg7nCP9GAoqMGaRgxCDKpiNdvvijM",
  "key3": "qtfKrTZNZqTWDv2d9uGMXVUU6vVnbBrhMnRq8DtoVh5W6b1VtEeYHErpyBJyUQdhVogbd4zEfx8fMPLNxu8DgEp",
  "key4": "2KSwd6LtcYFQLeFWoWttQqSaUfkKG3qiwQHeuEmWy7jtxZKEjFCvkmeeWdC2guFt25RivSp25UJPyRVokGpau79j",
  "key5": "VgwEDusVS5wYM3C7kgq2vAKEnmmXjZ1JCotN3Sjn6x68bEiuutHDKFY1XKoJFuiZBLairApzX6vjxCjLfcasYVu",
  "key6": "3pDqrAW9RN1NLETNiYDmNCBMsJVPDF3tMxLfoSLB5eu2689r4NHkzav1Jymc5Ve2xArGKVvCf53RhepQ5NbDu7sC",
  "key7": "5dc6JyeKYdHP7bum1qy4qFBEZeAxptNUwy8PLGKZPx6hwiH7wQ2UiiFeT8wBzPE4MdZt2bh4pabJ7QhUTZEFjgdm",
  "key8": "4w15HJdTH8bDJqTRR1qvcpcYbTsCHzt8G62Hi1rCWcyJJL4CH21RAHhWQjF5PXTAnGaUow2fgbGG1hLaJ1zGd9FD",
  "key9": "5f3cVHbZ8HScq6UUX5Z5JqPfB7gz1heii48j4Mc2YMAutiN4K7TzN4WfYLN6jPAcvH2Bw4geNxu1pXyDew8dzUve",
  "key10": "3pxZS1bvrcXEoCTSqoK16ZvGZDJGNZRU7NNu1KtVc2khSbDwsQvaQaio6v9sBmy3zy3V9YWufSYHbQqrCAwDturA",
  "key11": "TdxPNFxGSN7o8c5h9fim7sLcuoZZ2ayoDBcnJJdrG28DBpWgNRijCMnWLhxKEjKbAzHpsxRFGE8X7FKvMWFpDUr",
  "key12": "3UPtxbXW1YpoSkawEr1BdxWCp8aJiiar4ostQjKtTBa7w1PtQW47638ERgz4snNwsqX6ReFtP5sqYw99zuaMSmBw",
  "key13": "4vANoJQHBGj5Ufnr2THxrfihHgj1oK1CoEnZHxC88FJJckA8fkoQz4B5puvKzrV9UP23r6RVZqzV52RG8m5ByGrD",
  "key14": "3KhNnhHo3pZwmivzVJH49z8Yxnb3iSYLBJHG3rvbBfLa9uQTTWeh41MPQtG8p9rdx47iA5UkndUs6towSKVPzMA2",
  "key15": "4NGUuu6q8M2HP9QWcRRcp66kwapSdJbEENQL5gxHGNPz9PxhRRGueQdmErxYt1SnHY22kwh4wVULLgTZTKdmc6Ri",
  "key16": "4JQAriDzsG2ZEVjkyyUPmRQs3nvr8rC9aiwZxrQ79XHZVNVfggeNxPJXq37XSvszprtewrKLfKEVUUowJX5ZngK2",
  "key17": "2rRZf7xqUBu7j4RMbCHAgMRJPuoA3j81PpJbrFPB7u97MYkWhpu84s3gL7iHBdVB3oQERiYUA9AdoCs1MGvS2RUz",
  "key18": "4cpFgkySowxveAzxBbud9tvdyjBTXKrR6GtN81sXDTKxgBxZKLD3Sn49Fb4Wata2bFLaC574shjb98YthVaYbXRv",
  "key19": "2rh4RGzdRBbKzypxKwFks8bE1zNGuR1dDeLVow29aUXfW4th1L2ZU9sdJF78oRjTBVDkvanJUfwgQHqM6cFi5KSP",
  "key20": "4LnkJHBHsjrb1au9rQaYoCDyQN83StiJx11BU8ssrGjXXEgKzW9DHtnTzc9AHs4ixz6vfXTgckSgfZQNgX3ikkky",
  "key21": "BMtD23SjtDGKQ8rXxCgsi3VSh7NtydPMf87eEs6FGng1e61chiMAvE7TBSLtjdzz9MP344uX9cb453PYXDfpDXr",
  "key22": "4z2tt3ZRCA5K4JzyknHGwjy5rdTCrjheovhTGoYVCFcLVoXNm2bMC94bSGXNrbnL8EVbfgvcR7YSs1BmpKqPmDTL",
  "key23": "5PEk7u1v7pgvmSijWWKAcxknA2o88EZ23cBBEGUgK5yyba9fwHK3rvvPjaCMqdGqYiKq5kW5rXCobPdA2gGGsjFw",
  "key24": "4M45HJ54doaoVqUDRdhutfuTDc4XXNMaMVPADN2WP7EWxiAfF2cj11W6wYyxpNLrmtbpoV72kFtwBxQx5Q61mrR8",
  "key25": "25xLtcjd6NmqaVVDwMaquLFCevVcUDu3pbHfSmxiHY6m98UxwTUVHkrrU9gvkYSUZnfhhn3rWvy4EyNMxen8H8ue",
  "key26": "2zsWKd2B4vnPcjPEhNcyUtD1zdCgf1qvfLM21KdFXUqM9XrkyTtBDMYtrRXxS12VafCooBwcZ51qiLRUuGGqAyhz",
  "key27": "3SU4Q8hftHcAKLvmLAiLdo9L6ykd6Dkx9Dy6g5zmW8uCw5xWa2hfeb68413efRfSvvEECGSAFGBkk7shE1kfx2w1",
  "key28": "58FZ4FDLckYwuj9P2T5imkTEik3YLdEcXobYCjajgjPb7af4Le9yJHCox9fJTWWkcZdHToUhkcWa7d2ihGUU8c1L",
  "key29": "4GYXZwPrvcpLE9KQmuJTRVujVGyd7jdSfkRNMDcUUtEKzx9N5SeSJiT8tPH6ufjh5nDKbozeGCYChB4KLFrtexuX",
  "key30": "2rZ9qDpqUe4EshzNJNiXdzAi6aFgobgcLzwhSr9uZPmr1Woe3bG7ShNxLzfVBR3Wx5MtsxzUWWnGUFkBCUURD9fA",
  "key31": "3dp6Z3rzNwiHdy3A3tJrPezRc1nhEA1s3W1z31gEoibrUzmUuFWyUPccCMxwnDmFGh4Qm14gNR6JBJCrm7e3zNQo",
  "key32": "5Q4VwZycN5SvEnnbJTFcYMDEBaKe1xFUSzG9RtXo2VCT7DU8iE26pokjH2FzBoDRtMvCN8kLJuZPqQKyu3oFW4L1",
  "key33": "34L7wSnYFQzVUoF7Sf5UzV1bMhRsaqBcb7crYEpUH2BeRBGJshfCC4JRY8uQxDjnoAFk3psvkim1MdxCVpKyUyft",
  "key34": "34VBxDGeqwTNHape91P5WYGPC3E5N8cLniJ15uockTYfn6FEi7yXT6pVzMeg5m9xHF344GHMppBc1nrt3V2cWrq1",
  "key35": "5LNPZ8jra7mufbxjvxwSVQNTzSHHjPQcTuic5ei74RMBSLSHxpo2sasEwckhLXKNYGDz8gRP9gSz91yG4sLgLZcY",
  "key36": "2GnBay5WWFyiNaEG73wETsxtfVaJc8bbZML9nmjv127TjLXSW1VCAG8112SKiZ9LpNR3vK7DkV2nCrW9o9CX38DZ",
  "key37": "5jNpK6KrJ3dAT3oGKAJx1WK2zzNE3xip5j71NC5SGTaC3pKnXcVWNsMh86tsPgto2NUYrQmZvjzCVzykjTnyMk74",
  "key38": "5X4wo8Ag9pBGjkgrHZ6N8esJpF9b5G7TcyKk8ct4dJMqfyL2ar5Js62woo9JX2oNpRbvdoLBYTNRfTXTZJpuF6A6",
  "key39": "QWng5sRffMCqD5pXMqWn6mCCDKgbc46RabcZ1jrrRHnFfZPkghs41oW2RBRQh4sZkhtvBBa4c1RKt47149fGwrH",
  "key40": "2xPn2gnjWCE1kCN5cEnz9W8hVS6ZdXGUn38XKtDKVmqXqh4PpYs5zE2xLcAmTBKxmNWSbHrvkVAYhp3zAvpAx3p2",
  "key41": "2rXbCe8qwnnGcwurVw8xZvPMKBZ1B7EGMB4u6mmT1mLQcAid36NsMs9mEjRg9SWRnQgHk769uJ3duTsbQVVrYqQM",
  "key42": "vjQr5z8PLvVtAQ8134TBgEqg7Yvmh3bLqYLFK82Mxy4AJCwNF8HgLuvWaoTRrCuvZx3Be8boqBoGGs1hMTo4FsD",
  "key43": "KczbFAYQ5tDDrC2RQdjQBo4ctyDba8U1y3dEPRsRyXTiYJTwZknedZjmJKhyaJSy75EjQzBLZBoWxXham8x7G3A",
  "key44": "3dAn2MHAh3NQtaGNqu9uRiC157VSVdqpnAZy8s4rbpHPGfJHeUe146yJiuFEDgYhBvi7peRhQfrjYnBYkDNm2dxw"
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
