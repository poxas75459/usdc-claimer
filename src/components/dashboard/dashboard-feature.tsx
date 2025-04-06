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
    "2kPXttnqJQLqmA15DSfAgTUqbaUUSAiA5QWnLWD4j6ftd5myMbVMDEhW667fXm8hK7QNYUxuzLFnLu9BD88uBm5g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DSQdXiXJjgWRAZC6AF8vmPjEUTccbs71Ma39GsFTr6fTde6DhZoMxzgyRrSpHUNZ579spdhkfkF7RsnmozEcJTY",
  "key1": "4TChDs3xPyeTWyMMp2BnCWjtCPgaKtwZWmm34p7dFsqRWmFDBMpUK2QdTboe3twvV8DvDReZUaKQPH6D8ze2HEUv",
  "key2": "59qsGxzmdQgfTXyB7DugtpG3npUdM4J5MR7q7LMkYX5F9HnPF7HrgJdEoNswdbrw8mzoGLFY762GsqWCWjrkA4MM",
  "key3": "3UP8FEs939eKPvb9CtJoxDwuCJAbgg7VDNXaosPSeqCms5Gh8DXJQh6ZiNfZoHtbS88aK8tHvKxvCePTTfqsCaYH",
  "key4": "4QbJA7VmZUfFM73rwAvneiTcGa6ufM1voKwqgyz2ys3mEAEGSr85ABLRPnkSTQzovtEvyZZGxWnWGY8j6YHqhG2h",
  "key5": "3nBR4mdCxc38t72SMkj6SzvYUPMiWLHHoqY7tzCGKFBA4Krn44X4Brvgo7UeTScLCRrUHDedd3W8bcdkwtsk5H5z",
  "key6": "5yUq7mwouG4DcXYnfbmYwhGL8jcuPmQhfrV34y1U2r1LBspazftH4nQhM19hPsFzJCRVeFGNvoTQiej3V3XhBvF7",
  "key7": "4CwntD4hwbW4Fb3Y8gNEbW3mUxNwf6NNM1MR1WHKfhd5QedwfpHuH11yxnaMsE9o7w6Qiw6XTHESnUHFgsy48TtM",
  "key8": "3PDRFQV6jMAw48DM4tJDKRCW6pQu9KEsgg5kauP5xk628rZdU2BQ7dSnZNLCv276daR1wDiRi66DbuJRQiLbd5em",
  "key9": "5PNBshk8kc47wFqmvNdPE4XJNiXEep2UkNaBFGZRMVvtuzDPR4Yw6HMJ8E831TLSRjs4Rk8RnAGN9f4yKQZyrgGs",
  "key10": "2eqtkP8EAtFp6eipStdhpodKJEhHEqLsfqsA3XhmGQ5nXMY2pC1xc33pXDfUGU6J64xk6JuLkywPf7cf6YMQPsak",
  "key11": "4CVXxWXnhFC1JCvPmDqC4ShbAUF2bMJkyDNHvYSaX95qVrsMsigNB9cMytAfchr5hoJHKMwSGs7WuTEom1ZhQinZ",
  "key12": "5PBpoFsx2JEVtnsYjSiRkY8Cg1QRbT225hWHLf1rrQixxRqvMQmfP8faQiLpCHvZ8YP8wbCSjFS6hdx8dRb9hCny",
  "key13": "4itZVRgtvVtUQhCqp7b9G99gS8R2kXz5hD8sxHK1sdy1dWkawrXv31oH77d9uRJQLDXEV6wpdapgdMbM3n8s4qCw",
  "key14": "3FgPiVxnx2aSye1T5w41YL3675hExWcgV4MJC96ytk9EPFCuKUNAWh2ozRsQfUxEaLFL8YRT7DuTDbNXygNUua89",
  "key15": "2KpzNHuyt4i628qSYyxvGyFfqxzfv5DJPrz4ZvGG8poD3H1Fa7HdUaBfvw5kvttZJB3ZPv41YPmrHSVwEp4w6xrx",
  "key16": "4M7CJ2medUdoeYriRMpSYf1PWJFXCV8EXiftSzimFHciuMpYuFcV8CrAuDSsNxPRVxMe9iP7p3z3YUeypQ8TLKbp",
  "key17": "5GgKRcREM5VZbEVsfqw5Jb42TcN5hiS8M96bYSkozLj8wrJDgAWjcTU1acg4rqxkbDND7DQ4zi3R8AoTnzT2LNDJ",
  "key18": "3oUePuffWmxLqbhVWX3vVSkuq5oVkF5BUScEmGpUHdgR3w461CGS6Uq5wpfbyoMQH3gL1nvYmuDsURw1xdWt4bvL",
  "key19": "3yJYViTiWAaWuHihDtMXMJ4DvJ7A9n4gsh8bNvs24WjTueWP6XAdK4HXpUvrjTFJDogjh2P4M6YMDdK4Z9Vk3wBi",
  "key20": "5hcEz7SEZHbirqsYyAxdrq9T3PsZjGXYnVfPezQH4aB57JK4hgciCdNuzqmdoaLkxJaGF7DvrChf7GbtMCvqeCa5",
  "key21": "5JjJSHbUNGhciRYe1ddUa2jxdWc3j91sfH889r2LDRSwPJaqX7z4swsNw1WCtjgYcVG775mqneu1aEmuAKAqMtaC",
  "key22": "b7pBwVE9z3urLudoA1dKPBwsBVkomS2RnrGX4P3koyWsNP4iSggiDSN2iN2Crwgp1tDFp8mmGcn5nEjtotRoi76",
  "key23": "2nQJp5gLnYknLpEKv2gDo3qEh61ysaV8F6RzxvywQdRoLMYAcGfVXTsabsydEHXEE8GUQsmeoosRsKSWTPg7HC8j",
  "key24": "5e22sUrvStei45RNf4pA6nntwUyV2fBKDYnMMAajQqN4pZeNDMJ6rSEbnXGb4Gqtd9uVYM8uGac4DJU3DraCCFcg",
  "key25": "5UurNdu6Yf6BCnSZqrSKyyS8hhDEgHygoT7ekgC8hMWCDyaGt6Ztko4ni3GQJrj4PbUwpoEuUkcJiBvDQzp5K492",
  "key26": "2AEwhwfBAokm48bd1HBDPZjCzqaKwxQwAEnkEpuuZysANYvNTV5xdNvEzkCWVgqKGBfCnCn87xYYXEBfkEuN4EmC",
  "key27": "5oEiBnbGU8z9dWbuTGKHgoP1bziNwAA8XCdR4wQHnC5KkN8pTuvG6YmA5ZxgAKSkGzjTRPNh6oYXNwfH1JpDXPP",
  "key28": "2Ai6oVDG3oEjiBw7Vj5NxtqCAWvtPeuyuT9vWCNPBY8ZX1RqzSjJkBVMwhYLgFjMUiCX1SXxZb3fu5HRs2cZb9JP",
  "key29": "3T3APntSLxVAwfr8s2Zmhfby4dcKfQfUGQeFdM252WhnsRau15f2L9bo3LyFpRxeJRzd2dZcGLfxBcSe12BcXLrh",
  "key30": "3msQQjErKGQ9FW3W4douuouwetY82sB1CkVWUHjHZkcCjQyF8uETTZK6cPwC54RNcymg1VfbJmjhEkecRpvgvDba",
  "key31": "51zRHswc3UBevAcyAyHiS6BfirPMCP33CFUCfEhHW5DJpCBnKT3naazptESD96L2T6S211NKhEKafaErH75v4Mds",
  "key32": "37PGJaAxC7V1Xfi44GToX8vJdYtZ4hjYNZGvJMGp4hbSd87qULxpvCMem5cxp2eoSmd4n9T4fhRDqtuFs9f5m7gh",
  "key33": "2zcWNFXGwaR4gWMTzk78mXnzbmJPVdvvzf3fmLqEwKEKgb7JEk1tvDmgMd8K6xT2GqYhGEpEycAD2bpnmQjcvkag",
  "key34": "3nBSki3byhTGoxKGHGA1vsuHUJoi6J99uNAA8qSEMPnzRvKfigkMes9V8Se9kJPzWj7Pga6pgg8kdkgCpz6c2VmH",
  "key35": "5CBwcYRBvnwV8TJCxXGmMz4fUVKbGC3LEfx9rHPvMM1TrygMRKENZJiuUfEdNf1hpeTYF5oAcy35sRmyDGQgeLhr",
  "key36": "3c8e7RjRGuq4RLncxoCPx67KRYB1Tb2L1P8zVyKjcUbPkLDiw3Dw5XtKiaebFkZeD5oKd6oPmpqAv616J14skGH9",
  "key37": "Pb3deyoxzH4ioiNBQBqTKrXW97mMmHE6CCBjG1jxKWvJnc3p6ZoaVnagQpFcRBxxDw9cM2oF5CymxP63oZB2h8L",
  "key38": "VDkVy2Kpjq51JXkZVF1LmeMZPCP5mXS7naaqMYopjZ2FgwHgX3niSDX7jYfDRCJV3KaYub7WBd2UcwMc1Bo9aRT"
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
