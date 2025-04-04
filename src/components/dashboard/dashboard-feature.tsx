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
    "5CgshuRe1JKZqhkAfTv77oLrZL74dGV8q57CexzkMZhRsBKH7SPEULustEgZdGGjAEZgPwjEp4BPGYCnAXZycbxk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gq6EoW7cg9ZcuQfuqCNc4LxJfLexRQEjUeyaMUuy4wxoACuDVaDUduvTJaPsSBsThmtRxqbYNXooYdvU6mgyU2i",
  "key1": "4dYGQGHyZTbrnbAwfDXPMeBHKP8BY8fAdndeKPSrjDTBY2eZpq2wsXnPS56xG71GFFm3iJXC1NgrxUqYb7PYLNSY",
  "key2": "2f5UpBbD1xWm3eQxLnRLS41KS15Ue5YM4zapAhauqthhvFZmywNwEet3sp8rBkTMaC9MceNvwLs58QVE4JmRsBjC",
  "key3": "5iFeEfj5v1MMJZ5kK34GpTMwU3nGcruQN8AJJf62MTpw7qDFTdwbV8n48Nh4saNbJMhDC1cMY7As6mJoRy7miUgG",
  "key4": "3r8c4MCxw5hsUoxps5AzDaZzw5CVcaCwuQg5q4ecu2EcNZfwfkLcJiKAGRYePMK4ZhovXTmbP87TvemRsMNjehRP",
  "key5": "33eeuq7vr3Gs2srQhnYFVzg95b41g6tFiRGqL7QcUCXZNJuRpaekamGi7QJ895jQ3ANKdXKWz3ycKBkJ1AcbVYHy",
  "key6": "4uMcSGHvSJwo78gFYP9ECHG8X4vWJgEFYvCRX7GdaWWwiRnZvcME8UmzsLpmWQpN4hfDmya9mVSD7psrPbk6ynaB",
  "key7": "sptRZALMjV3gXjzdg7GRxvY1ZNpv3MGYD9t9ydRwoP5DbXjgoQGb9LEUy8zQCDCTWhL9uVaQbYpDZ1PGuihuJBT",
  "key8": "f6AXQX37dJPEAAj2V2xBxd4vqz7Cmbi1GwJK5srADSjQ9EiuGEamP9TXBYeb3jGW1vURTTK9hnyXXJvLft3ezb9",
  "key9": "2aGoSYqsVVQw5R118wfYHi1Sci4BkmYNt6AHLhQKQz3YXAjN7CYgDs3V4K5ew44F2379hE5f5CmUDr2csn9JVqBe",
  "key10": "3aumXrgvbqtTNi7fKPbMkm3778a8GQiFv5ewinCD37Qk9wfEi3zP7ojYWyDo4NQJksa8v3HBdU8ziRfJBuZHKGLw",
  "key11": "5BEiMe6f1jivbNAEo7mbT9jkwYNuGb4TKy4mSqxyoW9V4VHAaNuXykoJp29CRpaNqTEJygcXRkyc7zb6zznK6Evf",
  "key12": "LtFqXNq6yZDiKtR3yZwa29MDc3x7R1WTK8jLBSQryx4tm3rE7kLWRsnsUBsE9tRuzH2QiCJJ8LQzFmwmyHvgUmX",
  "key13": "27TnxFbrZu1aE9poQwdx8YDqo5fJVTZEnGi5Keqs7U79gkXaRpDNTRMQtZPHd1ezDL52FocSHQyTGr8KBVZzNQiP",
  "key14": "3EZ7e8BkfMGaB8jk7cGrwMv9mZfzAN2LvDBeLWtUSajxGeV4kLeuchdZiXUapsktcFgce5DtK1m7j4C6Wc7zJQDw",
  "key15": "B3pwdKnvvoFP1LMRRgdcTqxaV5rFSdrmeau9bhsub1HvCdjgzPkBeFGDyvSoz61eoUTgKFFonEjeY3MxvWJTBBb",
  "key16": "3WTzo1KnmArzJjYcegeiqDYMyfQcgHH2RPhm7i69rskYnq7J78B99WFDo3sqoa9vecbinFKaoMqwFZsi4VjnAeJx",
  "key17": "4YNkpkrRYhhHK2zhr6bwbCGkWHdYocnN2C6fKVZwMGTq6niL7c2QwaQzkLGXpQXz7Q5kuEMXiYQQQLN8VprpYbwo",
  "key18": "5PX2bRZSBKHekuzjcBDWQ2kzJmuhc9kjdk2ijVZMp9Z5cJa6e1TdqLvKn25vt3CiTDQ5D2t1esxqAPUd6gVU13Dm",
  "key19": "iCwUofmjAL8kAhiUdxVSWfptnXzoEaHLyDqiNDkRaiAFjrX13vBBNv9MB9gmT8YEyUximNn24yfFPDre32PxyGk",
  "key20": "6791EPnZsxXCpvBqopqc2xyr1ryodhfCF2MLDPmebaDaErrypN4GPtDmZwhshm4b3Sx27ur9ngrkUpUmehWGiveW",
  "key21": "5AKEGDNcGZCGZ4z4wXX9bsV7wivWB78hUKXvUxs5WX8HGbYM28hHknWDpvvM7yo5vog3ADh3V139tfxqAof6JZaR",
  "key22": "4cNmzjWBBFbBMzuMTtPDY5gTV1SZEJpR7NcQCaYGzcEdczsgbhYx9U85CH4aErGGoQryRDidakng2SWWdheie7D2",
  "key23": "yN8MWsov4zCvWykiYaf9H5BFUzADuaM9GRXo1XeUGPyCBMQHcjkojebborryqMuBE7Q5uFScy5GEAudNG8qeQ44",
  "key24": "3T37PiFAqSuxWkZLisqQuutg5RuPENBmNxehPvGEWmBXEiRiJsDBpKywz8vKB9Rm3m6dqhoYrU6mbPX2xZtaqCeG",
  "key25": "5MLfrwbxhDVWy5me8Jni4ZTT2ugYxSjqon8htkMDRi4v4cUbUw4WvtBcHrF8ntcS9wTNjXeFuYkvihXkJ3bmgfRc",
  "key26": "2CsnoFjvTgVfQRemX4BxYXKEH1UFksbe2cf66PZuAz9s979Ze7jQEKUmaCQWWg2LDv2nxwFB31F3cNjfJTU7wYym",
  "key27": "4s7vyajttzXBviSCW36x7JCEkgAjRny5pBciAVgHLKUA6NKCsZK5MDHw8HRgtDSGmyGRTjfz2fGgy2pFYrA41n6X",
  "key28": "5f8S5awwFdLeJKEZwCGCX7RTj7ughA3wwDnw1QdqsAUhcFmjLpEgDerk75SB6hSoJ4nKnYnurJWQzYiMUoLKcVYM",
  "key29": "2iekMKYryQuzv4DuhigcYD1Gu7FfuX3ubBfuSnscqcG6rPUgchzQMjaiVvgM66GaaE1fAdBYt853Q3nCQuuZYe85",
  "key30": "2EoKp5dBWTxru5bkfgszNZHr4EwbFyrxKMM1P1oDGTgqCcn3S1pCprVmZqUKtrEFSXnP2dYJFaFMGb66KxzuKu2c",
  "key31": "5hsoq64SqnG8Ln8YJ67kxnJtSNvzBqXLHx4piXhtoc531dBmvN4NaJTpuC36ksyb7D5wdMq5GKo5C3KfGHL1KiNK",
  "key32": "37g4Th1LL6KDuMV5VTcsZtZLSCTahCsPoCXTa1AMNGpHugmiDWyAkdk6VFU5YZTVEcdp8FhYUqUamoyxBy7cd3yq",
  "key33": "5mneGGij1gwTCHQ4KYLiseiAqMD7QkXCy1hkGFzwd4JfXdHiTN1PYoobQFcKDWPE5Fh4GXk4MWFDFM2KH3n1TRdu",
  "key34": "2ohYM7iuYVufSpB1uFKYn2wPoir2JvfHjf3mQypM49BjT8AbZ9FDkR5Xr4uY1pcvkLdujMPDRNPe1pdpte1RHaqw",
  "key35": "2roKpqraV356BaMW8wRbq1crSN5xHTUJ5RFHTJfCGxuHbm78jhRuBxFdCibe5dBXGGWoLLLXG8jN2xafpSePhahr",
  "key36": "msRoN68EqzHox4AhWGdHNzpZsw83veuPrck6zJN1vjeSdQQcBJ1mYwkwoAvqhXGwYDrG6nbjsnX8kvFamDxQLPe",
  "key37": "5CDUY26jdFfehRmwWXBb7X5uCTShg4S2jmEEo8apW3zLzwnqJoZEui6kqmXiX9cbrD9Sn2naJTDEmFrrdU2QCHe4"
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
