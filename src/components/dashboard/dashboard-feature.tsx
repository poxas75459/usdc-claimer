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
    "nLAoDfhwEcb9ZpySg5ZAxCCcN9uzs6Yf8LRpsfQnZK5u8GNxj3zGrmAkhAvm8GwW3eqXeBJpumWzeE5Ms7N7z1m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "adiLqLbYEcPyNL17Gey7NiCM1seCCy8LhQ59xM4b8WkmApqdB7zZUhwvAJvKPJQ1SqYmPdf5yoeXGEhYvqwbTBR",
  "key1": "3QexVycAHHu5juP366kjeuhfcg4GoDZurwXHAjXTAdUthZ7oomAHi93YsZmi6LFtU4pYffqNokzC7RPFXDMrQT2W",
  "key2": "1o5d56vRwhTM6mMzPtiBdpoHgeEq4JXEP9dQVfDeR1qSN9sF1NHiszir4j3kLAxxWHNXf1RHbEAvVAk1Y4SKjPv",
  "key3": "3r9gUfwtFUW97ACEhMQtbyCCNwE7aSiU76aBVkPqwGw6rY3rABNdM6p7Q1dQa4kR9iab5ujSxhp84VHbKaeFFe1M",
  "key4": "PyKUCA6vNmoFouMAU3385jasGB5SYC1pNpCv1jiF7CG5GU3oSrrTxN6uVoU5ehy9vaFe2URPkHmQFA9gZq1QDjU",
  "key5": "3fzBsgagBgpZm8DWAwafdpjEjoSrS1rm6XWo42JRhUE8rmZZowQRj7ngjyxEYRGmuoh78AVXHK1Z66ToaAv7CmdW",
  "key6": "2LrNc5JVE1EcfHBALegn3zSnn3WVjW1tUB2qUsepE76vXxG8G3RHik9vGiGAdK1tpPJmu23bt1MoHQGhJ5d5TSYA",
  "key7": "4ZjBopNfHEDpCTiMncHPoFaGTjdsf4kGcgyd17SqHGLnECK2pSvFZ7Mki41y85RJS2mWyqTELKfzLKRK39w7DcUB",
  "key8": "23pyDcf7AJLqjQCW7T7GfPXGoCPabGF9SsKAU1DZcZwYjc64ePTMxcCUaBsEAsPHhVSh3jkZRWWiXWZd9prtXpDX",
  "key9": "5DTDYx7ZcEJhPn4Ht7QFBLfndHVhPndtiMJLNpGx4uUN8kLpPcFazhZM33XZxvq1n4qkStpVa3SvGEqU8GPUZHHr",
  "key10": "4DiNGfDHRW68ebpjwTmuX4JmfTX4rD52QJD6MJsrXiE5g2kkhogk7774AnhwRfhmQXcZUBYr2onhVSwuNdV7MueD",
  "key11": "3UTGwVs78uWqyAhuTWqTdbsgMJyZurzDA2qhaAdrgYsV3SznAZ4XPDzVvmBzMzRJbArcPTUujZEXyL9i6MRnNf21",
  "key12": "2NTvXDnLuNRiBP9jy4dY9ni7UZ3SaEpBh26bicrkffE1EzpLYXskFCZzXby65RdE7xhsHn9s5BKmCBfgd4PGv71R",
  "key13": "5N4faD7oWmNygx7wb9ohPrNTwp9phATQgaSWhBW71z168F1PtuJPEeNeRhKF8M2fEwvVoysBkjVoRnrgQDr3AWjH",
  "key14": "TqBFQbPCm98iAcRa1ht8tAMgDoJsMTkEHsAyRG5nMAQJ6k9EV6DUKvGvQN6UiMDqwt5ksV5jCfoVF4zfyNwgnYc",
  "key15": "2NoGVVFK2MQ11nbZdLxAHLgN2cgHVXrCfaxtdVv8un6r9z9h83X7M3o7irWEfagh3gUQRACcgRS7uWHV3fTzHq3V",
  "key16": "5hay1mDTHx3f6rePgFRdP8bBZ31jsVMSNP8KLiyZFz7NtLJhwfPrqS8KRcpwBtWspMmq2X7FKwLYqca1GXBJRmkd",
  "key17": "B8tVMGyPcFHBmTVDxkbvCr74dqeeCLqP1fYsS8uW8LZ5RHRRcFQFmFFLDGU7P3ZP1szHDpRagGacDaQHBMbRqBq",
  "key18": "2GweykKgSBaJiGAVv7u7KQJ4zoxkpQDar1rvsjjQJKHYqTtFp8VNTnWQi8wXXtVqeyFLBGKnsWgmCKiMiL4MnSfn",
  "key19": "5ym4zhuYYU8HqGSvAaKMSLtjGZQDB7vFBKT5jqMhQWCJJKtBz4pRCPSRRgswm4Uwqpj5e7iih6SRiETUs9YiUwxV",
  "key20": "45CUxB3JisMu4ymH3rpbUzLvUTWMyJQg4LhPtPVM8ZnBMr8bMpr1WNyi1hggbjWTAUvLxUcdPHy3ZG1EMt4FURFZ",
  "key21": "CwTkruSXvyW2DZzbhEGDjRh3HiFnJUyqLnfFfS2B6whVreNUbALCa58QD6Sr57Wrw2HFEMDaSa3nic4aSbprGVo",
  "key22": "qZFQSLJDAf8oE82z9NUhKnnUvt5nH491eeMpXX2Zm4y9dTQpMUse8YmDzMf6RJfNirCxzFxWC8vhDYUYy5Vbigz",
  "key23": "5xEAEmarxPwosmtCrasF7aGGc9rSjZGNaNb69z3St2FMQkbRxSWiFHv6JHoF23uhEsDjw7MWsQGpJVtecPnvAWLL",
  "key24": "4iPiH2i9XhqfQ7N9TMtcxzQPZJBZrpyoAW6LyqgFpe6W1iVHPRSS1gK3A89HFGVz2WVJTJTv9Dya78LxGUP57Uj2",
  "key25": "4Qa6sbH1WCBzR34Gj1wpu4C1sALcubzKBrZNQKEvGNV5s6E2oNE4iLpXKLTyBYiXdbpFfDzddab66obpYzCh4PHU",
  "key26": "55FXuvaqFUnHies82GBPu1M8WTjqmSUF3RiBYWSmbRciGmUx1beW2eB2Xm4cMwwv67Bzz8Fmo9Qh7imcwT7iw8aY",
  "key27": "5Stx1JBWcvxQGB9B2P6bN6YJhHnjg9wd4ssqgTvh1JEFABGsG2jDzkdUN12UDvFEnsURxxotGvYAPVdEdhnCMGT1",
  "key28": "5PFJz7criUKoByiuxMeCufGDuDor9frNjCCTWH7wAErubtgbupPb3igQgEX7aiXkcFF2i1WQGSN7GGR4VihfEqP8",
  "key29": "4vRY7r5TPC5JAXZyhYVH6ExPC7rCEC5W1HNBRzsfGC2KtRq8km1uYuX4vRNwNLWCViPGG75nitCneAvUzd23hZGf",
  "key30": "4zwfXNvAookXaJCbZqnB8GMJdqHmKYL1ZAYnmgwxL4zC249cBnbGF5bxXfdyHFNskvkmEj8jZVfwqD8Z9zBnad6T",
  "key31": "4rd989nWQQJGYpebteT3gRiVTN946THfk5wjmHRtYw6AX5ktU3cvderYwHKZUj2odhmhhtSkhrkf714fVVbLAwxA",
  "key32": "3Y2YfDVGZhdbAyHYfguXhF6sexME7k7fi1bFvCfwf6MtQ6g6QuqYjdF6hVSowVfwHipcaxWKBMW1twffc19YFuoQ",
  "key33": "5VQbXL4GRMmp8K58wRggiUB3AEdGjAGRne8rbbzAGPX2ywozHqQFbJrcbqRDFp17xHcP4kqrTDSGiAyjd6amafVB",
  "key34": "3fy9BdNVMfJ4xhy2dHsWYq1tbhhmMmwyjjosRNYjdAkNrJ7EzGZ3i57kgnvGktsCeiABUHPJq9TjBgK8HkDq1YQN",
  "key35": "3ij5odPhEdQbtLm6fiuNbYZFSusTyipHcn2hbjNPxYhCoe2Nh4JkYUsGaCaCMNh8w6fDcQRbY7XmG5oXCNmRPqMf",
  "key36": "5DWYEUBQjPeh4gadByxmq8A2W3Edher4SK2tH7diD8JMB76ZtwdWgzmLfrg8VaYTfnAvUHFTBvzc7Lj8HenEpTkJ",
  "key37": "bcBt86JcaxxPgcHGWoaLNGFRegyHmauWrHii8EHtKEN9yeFD9eXbWG59ZPiGRaEY1h7sAyBWdgg96JgaLxer9vt",
  "key38": "5i8ccJVLMjpeSRTgYazhTzT4YYrKSNYGxKoXsuVKFUqXpwzXb5bM5hTj2LdXMGGbnoxF5YTfcovf19Qck2ZLWr4E",
  "key39": "5ZNsvNAg83mTKRg1q5Wb6svn88AtaoXhgb7w7HbVNpfdHhZqXMFkuH7MHe7ZYhepX3GYnTCMNjV7Q7XMpbStfytb",
  "key40": "3j5wQYERDzbqLz6mVy1UbSqsH11FY4upqtGcvQ3ug7ZtdfZnWKXFJ7sYbxb8SXaxsM1W2oEbXGkQCfgfM5nsefpo",
  "key41": "2UTaruYY784CMrbgtaHpeYdSKxb2ZUyQNcDqqYAyAVyEEdVhb64mCJTdDju2gyJynJ8fe9nLH2Zwv8NJr7Pm3x1U",
  "key42": "4uFyecseV5kLDxgHnyDmSX9ERTekdyG9Ya3jNASD92t3XCMRTinpyUFsxC6bxNKymemcwXt9mxCogL8BnqWj8C2x",
  "key43": "4J2thRGvauyeQitCwBeA1hy9vmU2zpj9gZCjHJQdUTWftGgWtK2G82tV97NkGWQWJ2Tfb7rSynM83uUkyEpzrcEg",
  "key44": "5FCGB2wsrizRqpA165pBEwFPUUGF7d7eQ27Jtsbs7jmT7F4j4LCSqhACbvXe89FJWf2wFg6fMBBDYdxHoVXx2PEx",
  "key45": "25GPvUMTBMoQVjjTMv29Y37gou7Jg319r8cFUHFCkJE5NPg1WZ4dqGeWpLLZ9JBFZAqzGoR4sg4CPtSftzTPLShM",
  "key46": "4mWTBWzA8mNQ4eesLw3MvPaip3v5VoXBpktk9igFHFLt7opJaN1Mggm5fjFJts9NpHpmbqh6MXLJLFFk7KwG3ZPw",
  "key47": "611LtFQmaNSejsg5tqyMmoR9msmUhTK8pg5yvVu4szWdujDRmNh7sAg5Ux2UU59M12JbQn55cPS6KgWTeEPeN3xu"
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
