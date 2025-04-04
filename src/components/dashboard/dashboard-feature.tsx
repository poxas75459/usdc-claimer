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
    "52DAsRQVCbMa7RmzjifND3sJFWn6vYsEmFmAN2XPS54RyHgH1zZf3TszG4SvjkJrBnbkvWEkayQWrL36saPSCb6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vx1AWMqgkaTRCacXhx6DLcJireojUCdXZWwpvs6NVPQ3987DhQMfqTuUCQMppS9JYpNRxEiM9Xgt646HPkVVce6",
  "key1": "2RrJ1Mso3nZXMzGGvWuGSnk4zCE5VKN8jWUGeu8LftSg6mB7sxLkuPdxswk34nfQ5AL5wA8NWPUry8Q5mFG184bW",
  "key2": "3JuWJ7X8tejQDK89eBXAtCfpzPhCBr4mV44C87MdMef8XyysdcNCA2yKLU86djzkWekoHDpKYViwrJuS4Smqx4AP",
  "key3": "28rmt2DcF15L82ej5DoibSChG9b8ebPQvwzZe8hEWp7cnamArSGXdq3RbDtgCW3o1NSW7nZLuiBc9F4FMRnxSyTs",
  "key4": "4w2xYdLndLTnoDcpLyLp5zGGmsi9w7BaZ7ZjFNTvC99xXMvNT4qyd7UJsGQXKAJgRHnqsdiSFd3Qw74CHrJnxRJE",
  "key5": "2Tk1XD6jTnEjtup5xXRW1F9Bm7rHcCmk23iHFyuvwfTSTYbRJKsAVwkbXModRVxdiJKiYTaVAnxkeCKmHts3HpTe",
  "key6": "5sSCCjFY2nB8HCzqvx8e64z9y2zhfTCcLE4deZhFA6NsnjuAp7r9LCP6m8PNGei6kVswb2rBeDx9aSdNm2ufoMuM",
  "key7": "3cvwPKyM9znbW3zxtZTiaqx5V4p4B31GHwWFovoYMMv1ixuX2QzP2KxCjcGMW8z7LV47R9C2XcZW8LHJ5M4XMkpj",
  "key8": "3xQ58spAQB2FPH81REB5PZnbxBXPkswfYCMRTqUkdhRDL2L7q1JWjQAmWrwbdb5Ns5nMgKV2o5gu63BV1GhugqUq",
  "key9": "4ehkqErKTFJF2YeQRZ5Tz1RPG8csU6E6AXjyM3vLCpCEVHFzXYjxGAEsf1yVawufscyrihb79EBXZsWV2T9aA7Cu",
  "key10": "5aW7Yi8shDEThRb78MYWHTthbMyDB1jWKxz2iJDDfzLFaRCUc9Q7wqRsaQBFGvYz5Gpxh79UJfEUffonssJmjWd9",
  "key11": "3pRiXmV271c7dN87TH3wnQ9FBjDifY8P57extPsNGsQknNB7XELdgG9AfvPg5nFXVVNu2m33nijLnfn5UU5LJCLK",
  "key12": "3f5ib1htg93y57gztLoawkKcQBoPk3Dnk2Zy2mxevybqjqDhz9hG6HEo7B4HV9o5tWtF2Qektu1uvdHpD9Ya9jFd",
  "key13": "z8fXpXJwN1u9xJKmJqk7QnQbPc7LyePzuSrw1LMLWzGWuGjBnsTiEq3Z8HdSHyT2TuCDMR5K5AfLbPYDibhRXgt",
  "key14": "W71Vw9f1vp1X5tmgvoFf7iCQ7R8pd1oFgYXPUDpQD2tJwMQZvLbVXrPqRp2LASonW3tajKijQSkTaC17nVcEWUy",
  "key15": "2SrPGM1iPChaow92ffzxiBfXBa1sQCWKxgQtnxzQsNCwjxiPbRu7dokcsd3pbvoNDhUNUh96vaa7rtpCAhkF1aVC",
  "key16": "6GMvD42pmsK5sUPZkLr1bPuASpPNqszmivpP9P98j8ic2bT3eDcBfz2xR21jSU3Y24kRjyuPDhBf6Lc2bhTssXg",
  "key17": "2LLtRNQBBRUNdNbRfyDjCmT29ACj4ZJLgsTtbFjhcP2fGU4eBcTSKjT1ySZsJcsWuQFdr1puWAe1g4xs3inLwp3w",
  "key18": "54VMEeTjuMZXB68XYoJkC7tCrtBoDEvfsTAJYXMZCWafRHfy5gcM4QgpzuiamYoSd4VW6xaf3D4qwSovREqbQhvW",
  "key19": "2ksCYvogAvsnYPpoy7axLYwA5xuFmkQLwWEPnonpTVH9yysji7SVyMkwUe3kP8cEXFPd2DJY2QqrvYwBMxcQCRyQ",
  "key20": "3JVmnDj8mZU8fqyzCWW3p9cMp6TSQFbZAobeBrCG2eLsa1UyosUgcSndgNyMZTvi56sonwQaHvavV7X8nNLw876z",
  "key21": "47den8YJKRbFrmMMnpG133RyntnocVMUqf1kv9hqwBq3bsKWDPPsW2uPqWuhS7SquvX136cPpwrKZNf8x2mgLUYF",
  "key22": "4iKhgPxAKeJ98PxPsJuKL4L3K97WeiEPjFLk2rM3tuDnSbWXXMsX4gPNznmAEBE5otQGdodEATAjJZnTxD7oTb1n",
  "key23": "TVdngeSxmnDFfULafuHw3YfQ4j6fbAMuWPd2NEJfBteABxacH2QirRzaKx7NJ4ATcTFsS5Ahs3UjTK2bpgvUDu5",
  "key24": "269Nd6qiGRrV5yC8S4gygQzaJ53WKHZa221rvPJ82LtZGAJuduSzzH2mm3ehPmoEPSsyZiZeoasDaffMfN1Wmzhv",
  "key25": "2enkNFhAU4ubWpxUHY5WHz862pf1noL8jmNN6iRzam2VHcEozocpwfrcKnxYZkEWLurHtGnByFmqSEPGsmu54rZW",
  "key26": "5LaNCfaxRWYf48ZbWMr5pKPqARhRXTmwHHm5RSPzEuPFyTnaw6bRq9qq6KusykJL7Q8RtZCnt3CfnVzRxgo9KdRG",
  "key27": "4GMjvCDdtWQEEw7oLBv3AxnTM9BHg67qMjTzC8SRYG32PfUwsu19gJNNoxqjE43LSx1nMjgB4RCWF5immZSFfJng",
  "key28": "1khztbWGgM9qUecddi4dXz1mk1ZLZ7o5DY6MMyiPeXX7QBP5G1Le6bpSueyk9HJ1y1JK7XGuG9fSr2gHfcvwqZE",
  "key29": "3AwRftnnjn2cV7Aaw2AC5qhnVpSyVhAiuubsRKua69XJgwqUSe6tGSNCv2yow9Mw2ZE2NBjpWaP263NHQ51FnF5Q",
  "key30": "31LHTBSWcyLFfUhDFHGDFv71EK5SVg6FH9shC6EeJLUWVdWvVPpFtGX6thbEs735a2N2qqZCa1PkduYqftfQSbDz",
  "key31": "5ySgkzCGmwxqyZYETjbdx6omxGkfp2waT1iLR9HF1FmC9s9tCBR1SV12BYJgdQa7jQtzHGJhGNbyE9ADNc1L3ay5",
  "key32": "56ybdwNcPXHNaxJduunqgvWQwPtwZrVbutS5gqYVNgUarRzdHHMgdmw3ZEzmBP31aJBUo68tsLrGeahYD3rLt5WB",
  "key33": "42MHb7dwZRntHhsRQiCoMmjA2FFPPCrC1GAzbe3iQX9oJakVGKBSMRKZzwQfif7EsvLtCKc8v3gcvz5aECxB7ge9",
  "key34": "21vsdTi2HTiGBBXjykPobF7gPnehxaQXq2VvRBuAjqr5cNNV3115dzGfU43DtquVHUBnvh6hoLSTB4AqUuujFXgG",
  "key35": "yKRkpfAoFN5Cu5HRzQDo1odQLA4VDfZdxgyxcTefKjeBQPHwDavgrFXNLJLLPmtpzCuoRmSfVmBCAeHxQTAA3jo",
  "key36": "53AkhQE6Gm9V52MHSfFVNbVof9nJoxa4niKJwHJEziYQZhAAkpK5VTAEMn1Ba35fzxYjNN8f6JZeUVP7GiwKEK9M",
  "key37": "itUxN5TgjDB9YBE2ceuBUfRMRzhHHdwDVxpHqJVJ3j1bGBnBWXrsrAhm8M4h4EcEf2VJskCXpCVSMKyW71rVWKD",
  "key38": "3b5d9FLWxcXf7U6Q1UBncQAijp6wyjcE7mMwvwf9imhJyetPXZmWiRK5tJ5BrTSxDhQXsSaNkfM4sKbFqZ2D8tRS",
  "key39": "2gouPt5r4oSmF1q5n8Tv4NzAWBPntNXwLDP7PKv8yGkcwXVpX212PAimSPBSJFtZUpx5p4qt1LsH9ZTH33rQ4T6G",
  "key40": "5Tkj9PKP6qBTiJbw25FGgwhY52hu1kbA2bgiUn9X891b8YkyL4aHgxqBGhn2EsjZKa7GxS2QU4zEPr4tbgK6Kgdw",
  "key41": "371GPBHb36KZYspqNFEqHm8WURNNhzG4dRt34B4JTgUczgnmWqyhcWryRYy6XcYyaEnMevdd6LjYrjR6sw7Weh7m",
  "key42": "52YfejcnsEobJanJgxfRxbzwTAUgGoV7a5Pr28Bk2By9W5bUNfs1g8FSqabfGn81d4Z3te9Le6Y64WvnvF6LNvop",
  "key43": "rTPQLkxFhvtp12NA9hcsCf1Lg3wLZQSmgKnsVsb2wQx2KmPZKDBdz6eeYSenwq27bKQBCauR2txkK2abwjEcAs1",
  "key44": "4w2F8NkmpELaooDVoFuAtNeHtBDJTyE6uwdCLAKUu5bGFt5V7EaqSGp4xwoy9ffyMVRNgj7oi7gHrbo2JEbu9bgE",
  "key45": "3ea9f5zD2KN8T9hVRAxJJ3wiicB52KJWpH8sU6Z3Yo5Jdtozj75jXZUPVexbjTTjtnaSfnBBUz5geXueMB2UuDtZ",
  "key46": "64nU26NHMdVKSQ71kYEvKY3w7tvGpoWqsAaNDSD32fWEckjtpBeE9f1TpopcXDK3aVcFJZXnKZuvHrte3Ris8cVq",
  "key47": "5oTLKdqkNT9XUrxh3Ly18GFcC2f2KWwti2zsz23e6nHr6vnu1m3dSkDc2WTCoSunAwkhuUmJoFLKhN3T7RUWnQUT"
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
