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
    "5h9LSUVXbVgLnbfKp3gLQfGFysNSrcjAcW3NpLB7mGhdEhDCEVa5XqTzuWtVeStQ3xHpAjzHxqXYe1hh6J8FursV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bW2Azs5rukro9n1ipPpkqmmPSuXZJPVmFeZa5z38BKNVjX4MZkbNRNRpfQ7tjnMHhT97zbXohqPEJ55aVpzF5sR",
  "key1": "2iLuzQedgTuY7EyhnnYV7FMbp6inv2ULDUr5gZuNViTqXnmZ5fudKpR4Kb7EMJDS8aogvqtbkqW7tTnPxr6W7vPe",
  "key2": "3vN85bFQdDomND8WsPLh6N9RJpsKbDJZz3ZnCjvZisogr8ZidzdoC43Po7vWKWV76yfzbAWuiFC8858oMgoox1wv",
  "key3": "4RrtNpLqZcFJUL8gLPPoe3pwJbGhGkYPjJwhCEAMh1fpqJvaajZKPHoGFfWvyX5thVuj7WZ8izejXosDYMK7F2Qb",
  "key4": "v1GAunLzo2Zub5EFoTXbop9xSQuEXYmmgkQVbEUxndxo45AP6tG1gVaVHEM12NrwKZzTnGoAuw25aPkNf1f2qb3",
  "key5": "4CbzasaXPxBALw6PomM9Ek7ARKnZg5oxZNy2YCeKQvHivoWREFT2F6r4QucufZWDpGPkAVo9JsQZ4k7KruP92np7",
  "key6": "x43WEXXWu2cQ84eoo5HCYBHcYVWBJKziZhmMU8ArHYiCijdYvuN4a91tdEcAqyvRsshCEYQM7a1YRaSaqj7pJSj",
  "key7": "4aCSv7D5jmxd7wEW5fWJTnZA28QtmGwXMJDLUysGRRXn8aMu7oSspcCAZPrmmfqcFwdDxSv3RUwjhAjnrJoRxqAM",
  "key8": "FKcKy4sYrhTxhFRseZqYVkZzkeBP1FCWcAXJAarUr19oGSsEuTkuvfb2DbNXw7DNBcSawNJkvZyCa2L1i7LvnJn",
  "key9": "5NP8UJ9s2FYvCzyQdLeNhrKqp5ds3sn7rfQigMCcKweHyBD9w2c6AkiBdhKsrMmDrFG3zBKU3XcpHxzwLs446iBP",
  "key10": "3Uyg9abSWzmzNpRewAfDBFmj1kWq7jbTNajrGEunC4L74M5HvQm1n5GBaWQrHz9X9wPucqPQcJxHR5694fSuw4Wv",
  "key11": "5wMVKMnMvip9UHhFCmeXNnV6K5NV63xrYdkoXu8DrKADuLnKV2wh4eatuZSKF11fFCGxLBJJibacLrAe4dQyxuc",
  "key12": "4FSspHn2EzAGiSC36UPnPF8Ynje227cx9KY3pRzDCiNBh5r9uuCDiF1V8p889Pn6DMGBGsiD9mhdmbDQhkBkZiCW",
  "key13": "2v2w2KFKcjEBsmxjtDXSSDy6UPPMmiPFKANR4jhNrp1fszDriCY7qa9h36ySTyTZAEVHPB4bpSa4TvQTZHw8Bb1X",
  "key14": "3CyBxYf9Z5zQuTBRuJuwY54UG7bkC7LxeMR5cMP3NJ2UyBoy24WJfzoEYC9CpDS7A3WhSjjWF1M2tz1sxs7NbjiV",
  "key15": "4ToLRGqF9spnMqYUvEoHk5UVYQQii2Yi839QobhFE2a4NmgxsyccfMcE9tQ3mdpdxUedexWgoxebvQ5gXfbNxWXg",
  "key16": "4Ypsu8KaBu6aDpAisp4gTY6knSVxMAmm2K65KNV6KbXgBwoQXGFv5cqhnqR6CCAxyUfVh2Fqf5bg2KqVJdyegoxp",
  "key17": "3PBWVKxrcpD1koqcVD2JGNR6g6CqiJD2R3hw683FAzb2fC9pGS5RyLVdFJY6nhm9nP4BwoLwToiy1zs4Uki3EH5A",
  "key18": "qYgQcWtbjDoW9wEQd4JxWdq8FinthRL4PsnuKWsFhwzNXZ6zG3XVng71xCtGXFYsYKLEtf5vNYRH8zmvvJQs1HM",
  "key19": "2kGhWVP4cc5LtCvXnu2VWyqV4n3PDiuVWrZphYNyf9v7NcHqMaz9gHQNTU8vEQf84SupSJbUuAVfam6wYAxanqdt",
  "key20": "2yHRotSKidh8nf5UwG1YBtUaxaHFcBdL5jf1im7WLfgYRTByp5TyC9jnZaE8BvLZ728yxkjb2LzVRGE9mmoxWBGm",
  "key21": "299Q6VMPUEMDfmPA542VbSPJz1jk52fCzFyMYeSQ8BJcDB1DP3DuLHUwxNdPc4LrpABKL8fr5sw9DB3eyehNDhv8",
  "key22": "3njdJViv3c5sZEppasn3XmuKBZAPPP7BfcDFXMVuWGq5oajs4bK9UVUx6UgPr3t7EXhrGvY7LStSR9RQdvc6int",
  "key23": "vnCStwoTovYnnPhnMcZEcpXGDxcEperW7nRyJo8h3ceyq6GZW1iHiYnoya7D7jRsNusCka4zHsibUTMFJrvcrSm",
  "key24": "BnfB46CBUcMXAiDRLZmod4sv3b11NYTqRELZu4YrRg9EKXSUQvjWerDYqNgtKeK95ZiR4jmqvWMoRVJVC8Y4bkG",
  "key25": "5dbHnMmrPYazx7emEvfSuD1cstydUiq8HWnR3JF2SRQQ9yrcDsV1kMTXbUeZhiWzoabEfmZfyYJ3zdK12eNUeiHs",
  "key26": "5jcxp5USpPauZzDabQAjJyLttrTUjxcEviPSD97XuS6VpmH3giVRzc6sLBKnHL8Pifjo3oKCtNhbZFUpfnxPhkPQ",
  "key27": "44eNHXf52yFWsum55b4sCpnmJ96LzYzNBHLxHyEVGiL2Gow4F2t7j7NVGQxyqDaZAV9J4AfzZ1htB8q4w4aq4qch",
  "key28": "S4QbuMaryRgATvnRADXu9shq6FEbmE1ubshkkUQAbQrBbnfhvgHs3jVuJWag3HLNsw6vZGVimTbPZgzRyTMa386",
  "key29": "rEdxT3Q3A7AdEWuo8aB58Kqua75mxnqd27amfGavXN7cyRUPNMHR3SFNDotyEufEmssDCcAQ3CFoyRo5eUx92en",
  "key30": "55RNa22HRncumbV85Gy5K5KmZdUEbReseH43hky3Amqq2pjh6j4x2qQGRu6V6P934vBZDjQDuFKstrGbosKRfpwG",
  "key31": "4ETURvVbc5jxa3QNe6tUonnGbM36TFqpt6YK9mo4XG8iGzNRVcSLaLoDenDfmEmogEVZpRufs3U45Grn2Q48qCFv",
  "key32": "5EF2FhExy4u7XVMgXFDP9PTNCFN7v7hRXKfiCxW1SgtyV1RSPM1xU8JLmwBpXxQKUuHMWnuXBVYfHg7ym4QEJGre",
  "key33": "4Eukcoffhw59xUnFpd5KD4vgohdwhZ42wSc76dS6T6hqTgnNt8eHWNcprtjnMPFBUQ6jFgM53516k2r825VbyrUc",
  "key34": "5q3fEBAXJCqJq4Q51L5fBTNYJkZJnxT5ZG6ZPRvtXz3fGv8U8eFV5hpcNarRprUK76bu8vLAUP5MwBw616j7DVSh",
  "key35": "rNfQAYZ6rA75nTJ63LHoP5NpuirLAoMuJQz5HquvSQ88TYnTGCM46diwybzDLYbAzTaaQsWYkGrPTX5fo5Jx1aZ",
  "key36": "2Uu8tkFhec9F36cshWxEzj1wAsUCp9uZsAbTsMN8bKKbCggWSNNz5NSaB58VgVmXwK23vcr33Y8j6Vc2mHo6kXPg",
  "key37": "3H1BhKewSgNiceMKZfwGPVoZidMEt6jzqpx3sBiRuiS1R2i6MPqkCSfpEEkpF1r9deHmntzRHk4vV2NWTrujFg5r",
  "key38": "65jSZgV1TEPahkc1WdbR9rrf7RayHJWw15oYWXLhLWF2sDs1SFSryn5yNLbv4hNShVv6bbDCXmMDrUihYg8xstzo",
  "key39": "5DQWJBm2xW31JLkVsSBR69pohjgabbGseJUrjftjZqwmmLSZ2CxTwrzcDPTxgabVRAF879AyNzcHido8etdTQF6q",
  "key40": "5hfcXtdbFTogUZq1cJ2RYCMw49Sf3RviQnqcKnCtcQCKNHrCx64GyUoChmrfLDUXSiF7wX88hXoRemzzUvoKQJtu",
  "key41": "53GrVGGm1xU8NHokrt4cq7QGcvcpQChQiWeJ6Vxo5TSNFEhD62eNCAyj6xzaahPhdj8yCnPPhMuPzsQTNPcjPuCW",
  "key42": "3XqoqzJpBUs9tZxuPCmajACoK4c1ShrAg1vY4phBMnpqq6icHX3SzvL345TMfgtiYZbX73vYdHGWKsfUaiFTMBvo",
  "key43": "2SjKnMXFibBr4hssrC7xWKZy8VSbgtxZJQGdXhXXbWf6hWYXS26M9AVZaTNAaFTqagDD7kpjCkk6ssE8ZJL4Yfxa",
  "key44": "zky1ZEJfW5U5yY3GLqdStVGx2q6MQXxuX3GfXf5BKjq7zDNZLc3a18su99JC3hS4xUW78QBBzUyVydykk5W8MEV",
  "key45": "2YiZQJm7vi3SYp7oWkik2vKR5DhNnbDPpEeHgSkCM5exQRCgzfuPbqEYYpPcQrAuttcsDysWQUqsKx4Ngp64xpW2"
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
