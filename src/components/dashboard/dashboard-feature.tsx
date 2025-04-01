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
    "3sDTt3vg42XRjD1kzyZcFW3qVXwW6Mq9t2rMzzCNfL19cVq9fvXPTobNQVGMQnkxpHjKyNAPKcwV2iXQPNxqrPZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39e58phEhrasyUKtQsPNZgAcnDLxUxyBBE15ehBhA6V2rE4zGtMH9uJ31eMBzaUt27vbyHksn6WLCvVTkR3fQpTz",
  "key1": "4WcDcEBrAgcxqPEf1ph669CGDhNJ9cKuqZ3fMRoKWpzo932L9b3GhdEi5SiGEeMZrSC96cNAWRkkasd5A3HfD7cM",
  "key2": "5gjgPFthhgfjsDUFpKLTxPnbHXdMvoRDKBMvjPacMbNB1ppsNrZpJRPYVNeYmeohcXvm3kgfqUACY1sk8RQM8Mes",
  "key3": "EfE22NNSr5ueABZXwLpdc7tw7pK5RaNz4LNB5BkPvKnuBFMKDMWxAZFbbyXuqaNFXFHV2faz8rENNoL9Z7zJZsG",
  "key4": "24bNYMiz5WY1MZhiVJ3AwcEEvggJH86z7FeaWL9rtefM8hMPGpxbZby2aKXgQPWneAWLKZN2jg2iet6c2tBejkrm",
  "key5": "4LseeGPxFNqh8dkPCEsAgyw5BSZWtvnb2uNRtP6Xxf2aKfai1G4zYAGB3CA9ZMcuGm4eA41V3RLZ4gM1guJS7XE8",
  "key6": "QcAvPbpUF7zuFYyVGqeVBpsWu57zCdXuhJBpiTwRZ4p9G7qmZg3g5SVic7dKaEto83u7Pny2pMBNEhntKMSWjRp",
  "key7": "2UL5mvfBkSAHQRbsTDcUWocUEBBit298F1vjuwfsLYtrdQ1PNWeQG38DTQJyGQJNJrTYHGhCKq1fJMF3WP9A4oLp",
  "key8": "4eoJM1ntrBWG4ir36UQrGzAQvXSgtQekEKcKK98GcfxXHVQ9D62uhpkXmgMFhT1YCgeWDB9bJiAZQLPgtWEcoX9N",
  "key9": "PbDSL2u96eNxympwH8QbYMLkuofrXUANZpGrpHoeG51wHQFAat3qAZ2v7cQQrUtFzztCnYfPYpyhzDKN1MSNjwu",
  "key10": "FtJra3nikQHx3hPKJ4ra1DMqRFmch4YLyAnpQDEyBw4NNYA1HYux7bBAzUrLTQjNdgmkHrUmD91CuPBKz85bTi5",
  "key11": "5roDJLoMms2p3UmoENGQacemBMapcqFxApEWtzu3MvuFFPybjwwDwmdZwa7N28D4rxTmQNVh2chno8MCvGGu1Sev",
  "key12": "5a4SiyVgisqTmkXp35wdrtDkwAFnV22zZmbQ3ua2NyjTQLqkPs77BuPZcgT21C1TU7rXt6Hdfo7Khr5aRuTVM1Md",
  "key13": "QbcPJ16Gcx83MTDuNVKG95QaorBByYhAVdemsGx6UBDFUpVTWpFKdWnjj4PSwkQiNxc1Ti5pwp5dxSwheyVfaCV",
  "key14": "dLZ1npAaofQiLdur6mxRfYLJgqmrAWTmbdVihYPzDtMStPKKi22t9gGk7BvEfg5ksBB4JQRgdjuG87qMuHKwbp8",
  "key15": "gAPwUpoRuUvEWhFPPkxCa5Yu9FkJ7KzZW9LnJ1R6Hu33dpRQWKUs8YLZTyaGZoYvzFs99PeBDsG7HSwfSZxbqdE",
  "key16": "28xco297yCNU2rU6KLQSboJvsGQ2xsXfwVMxwjbLgRnghrszGetERcxs9TkaEjZwwmts6gD7DEjbnBX462LZz8x2",
  "key17": "233xyzf8AukcysaZ1eNYdGtQetmKgsEgnLqoR8nmNDZNBQx75F83AMogaq98ri1VLFD5cyr6NCbNuw7MABssfVdm",
  "key18": "eDkLNjXHHm4aBk7xcHGGRc887ujPmre5RdZ4DPJLQ6DWcqhVHFudDREqztx6X4NWBQ1Fh46mv5ednZrLN8MC2Td",
  "key19": "3SBXAb9DVKwCjo61ExJUgArDMa2eHi7jSFdZpPsiNKbrR8NvJ9A7oKp5RFcmoUbLx1UB4wakpLB4ueeNhihMsMbc",
  "key20": "34N1Rj6HWjEXcxngfL7UeUw8DWVhdQeYzPKqaAHdqD9xd31d5TDazRgyXYvSNtGFSmWPKrJmcs5V57hCavdzjXxT",
  "key21": "4pUHhKRjLmaFRWf428dJbnG4GWgFb7s3Z2WcJTvgY3QPyyzZWspMQffzFQPTBdBnLRvQqgeqKc9A7dgJDxjhJmKW",
  "key22": "42cHuKFefgqNMLkqHisgWFN6qXHwy9JQdEkJUsTDrbmfDhYFXVJcQAu6HSt1xrPpbD8tFryJBVQbZ6ZGvtbfKtsj",
  "key23": "665kXxC7RJuWVdmUAnXp6QETQpNhR3nfUGZvKo98CjMa61MaDiYcGQxBwQWKko4F4gQdgsiY7Msy8YYXYFgJF2uu",
  "key24": "tBJqWeZkAc9LubVUd3at7ZwSG5x2rStEEaHQYm6XZ3VQceS1NCcfJQ1hYbH3gkqAduGbfRCqag8TA6FiSJ554uc",
  "key25": "qq54CSbUHDFPKHesssPCZHph43kSuQyYteiqZGr9Dwt5VjLkc2LXLHaCZvEavBk8YVBRw4XKdW3GdDi9i9xChd1",
  "key26": "33dofRxfanKrH1hc7LjC8zZdir3khM2yTarjjSTeuda4bN4hxU1LQZAntDgDvPHerH9LTDxugvAdNzcp26PyNibQ",
  "key27": "gtj3nG1AAmLvMFztkdYqcg2biPmUF6HJ42Eky3ipx5arqDnc8N5H9Gv53eCyBm8nDFz1gwsW4RQzeWajA1Dwmtu",
  "key28": "mTGgcoysn4gBzoYd2qNY3uRawodaqdfKb6by5aBGsQbTpcPR1pVis15Wxpp8AKck5nemoGFNZjQU2GS98yTWJyZ",
  "key29": "3MgHpp28gEFjq7Wf6YvRjxkMwj6M5Fe2n6peLg1uyE7PpBrgsLVUsEAnv4BsRASmDtGdSKi9aXvCfKyDmFrFjtUv",
  "key30": "2MiNz6EakqE9V3CSgYAZgQZtYStdHVKvfBnvV5grko26K54TN8URwqpmt25NiueP8Ex8p2SZ8myQEZm99dNxEaoS",
  "key31": "nhqhLqMxpmY6NGCk4CV8wsGEPNGfRpmWrYRq58GEQ7gn9nzz1iHsAxEt8ZUgDFPAUQA8x5R3fjQbbuXag1oU6Co",
  "key32": "2zdanEraw5HKtdWTBxahnKh7YUHpGuUe6PJb96smKCiy9MnLqwsMpPBmhM11DTN9z4Q5KyKVc8jXE4m3KYBPXEJC",
  "key33": "5StRv7dyBBxdLR4TjSichzMDAo7yZ2RKqdDWjBHpX7Hu552EDPPUZCUucF8a845X2QLmWD6eMgoDEnySeC72A4nc",
  "key34": "fjmokx3xDWZAFzE4JccAQNFBhMepQrMgmk1tE6y4ZVQaHzHt7UJEaibVgq67Ug4esXDGA5uAQysqGjjH4i8r2Ag",
  "key35": "3duCBCqioboXLo3CxzKNdRdxuWXzT6kjYPGkAifMSWSL2UjWNYfw8HRxyEdWafcfVU324HuaWfCLTxZGmGbKVNLP",
  "key36": "4ZK2MAe3f5d8LoasjnBKuK76s6gN1iT5wxRAdDhriwWXAYhEo8wwnSxecQvHhp5S7hLXCxEvtZ2MbduW2ZPfi5GS",
  "key37": "2PQC6R26vSSq2djFNGWBgge6J8fC8mXQYjZJamN2qzwEwREYvJL3L8bVscyx9kgPMwd397ZHd4MFF9ddEZt1b57p",
  "key38": "4NwQPPVb3ap9FqGwqzRBcBmGcmNRL439oFRZnPAKyg1Ssr5rrMJSGj8uJBFQX9Uaqphi4utCPAnFa7VMPW5tPggK",
  "key39": "wVW7S2FHeE2ZqL1BtifvrUyW2nsUZgmkKX8PByHGp4yncyDo3D8cmLKn6DFgm4T3f6ojSX1okLs3Rzfkd26VVJZ",
  "key40": "2FsyKBGyX3DfNUE2Z2advPMq8S7pCQFW8gDXNRUVUzVyhDfUBjTyo1ga58PD69puTvaHoNzbHz1R3UHigC7auUpC",
  "key41": "3vuNNy2PpBjTuTQeYVvXbLMtbJcqHDRA1T9xSeMz9Pf6CCQxkiD4gSfPTUvsiRdipUwQXQEVaW4keLSnvcqTZUMP"
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
