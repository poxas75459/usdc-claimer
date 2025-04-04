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
    "3BKjky1S9Kr1f7jcyyBwy9PjZd6JPbz9p3KZggY63krms4Q7usqVoUvhW4hejaWfSZatsQcp7sArRaZXYhtnRefE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x6fQjeTFDkYbQKAmQHfU56USw26DLYb1WqHR59FBm2rWvmZmg98UBvymFYsvVH8X4wYwHhYBQ6m7PyAxQm334a9",
  "key1": "5YQVgXDfwqVfRCCtrvRN5k2CPkCMNru6qVGLeM4VRDJzshC5AFovibW7z9KSJT6csTEPp9d14YL6osWSeC9Vv5w",
  "key2": "3bx94VgJHEsnNQmWQV7j6vP4vFhjMADGBeV5xbZg1i3DEWkgfV8jgBaL5HTRHNoouL6PoVHVHgH5gjviD1munGE7",
  "key3": "4DGGvVEgv18tRa5zbPK9hwnmwsRCWZtbWsCjdVPVqfygaR1ZR36gtfmTmCi41gJ39stexnxwF49mFDX7nsB2QzzT",
  "key4": "2SYkWjVMew25j1T7QYvGCQ518cJDJpCemhaxAGLcE7auwcRuEUedQEci1sWxAo66hDgQdXwTP6P223ZNaU8ow2oL",
  "key5": "65HifWBFLaMmG4RFCKr7auxxtRYw8Gw1eCcW6JfwdukkKSTVVU2yHueTLB7VJbdz63Njt7p3thGqe3cgnichH2VJ",
  "key6": "25fx3pfg7hiezErxUCZdKxDmkopV41Zs5MK22EBCMb2cCqf2pYkrxkPrFXsdLPFhxnanqxuErW2Xy3R28wFEnmdz",
  "key7": "4okLUiW3cRCMjwzFrvkAXUC5Ct2L1TDsS7chYtPo7dhy9jie6vGj1cb9f8SHEz1fdkznpLZmSwRtLJ23HiHkU7SB",
  "key8": "oEZcp95mJqBEDXeHNFt2X9h5gqg8Uufr4BvcVnjNgNfk9M3edwPyZ6hTPkwevzE5xWTFHv3ms6akSDwXhJSVopB",
  "key9": "4hqQsFHrWT3SXqU61QuYRp9gUzRnKcxQ4GTW1Gus9QP4f2EhHY3784EZwxU59JZYzzx8A956gUMXCmjDi56imnAe",
  "key10": "3WrbALWcAc6nR7VjndJmnCpWcq3XAriZeFRN8sRnrZy5q62doDdXpyrmfHedZgK2Gq87ZnrUj3skmdcT5fxa8cUu",
  "key11": "4QjHfySR8Vznp6YdZ4Vt5DkATJvut7ocZZnVAcf62TwFcZHQjzJQkHP1LywGk8QeSUMNHTbYQyBKAwLFSLo1WoLN",
  "key12": "spscNhBn44wioTxLkaE5RpPp3SwYG8HeH9hR1jkcrSroREDQAkRawgdffc2NwvLdTqQF94PbWWnCwnPRZZJ8aqp",
  "key13": "2TCza2yEFyRLsLWbVtyjLvretLD6kQHwosNfuHgrukHyj7JZLBy5nRcGpwDD3h7u2HLude4AzECgHKLM49mbGB9q",
  "key14": "5Y3Cn1NUFCyPEGJWLswcoiuqxFo64ykTASSQxHVej9R3P6iRueUeDBKQZeJNDNLT8T5nDJXgC2n2CUmo5nEVcA8S",
  "key15": "2QCjXdPWSasWrqeuLSmTWRTu64byy6oMEQZUCJkTyxs1JQM3Afe9eehcbDyGwyZcg2TyHcZMBAF1vexs27piwhvQ",
  "key16": "QA4PG9MyqTRYX7f23Zf7GytJfxXC4F8CoPv2F99To8v5niWYJ2uM72vtA5BuAkyCLCaC9YK95SGBBLw1qFa1hWr",
  "key17": "5KwmJQwMZTcMrqxHkN5fZ7eVhoSvScaz1Y8ktdDmDccGjHskj51uBScUCd7Jmv96c9Pah3FWijoZ3k3Affps2nHF",
  "key18": "2ht18tYg6UyinwBTbxLwtbV1E6sW3Yi1XegbLTQJRCNV88ZhRp4uFAXjLaEuMeegMFpC8mVoLr3vU5z3FVxAyXD8",
  "key19": "2dGsKhe2DPbLFw5yAH9mUa5QkySAQ4iZYS9joEGv14WL8jiX59A5aszSkAJxGAwL7a29k4w7hyqUZY3d7Gb3F6dW",
  "key20": "5uRtFP3WuHn2gnzB9Mbx71K211kw7XHr14nHwqtYdQcRGKVYcg9FL21KHn6szV5Sy2GE1bxXeHvfiDkx6LvFSKSq",
  "key21": "5oZJgTd9cbxHawLP1XHJkaTiKRr24WmaCRVUQnsMmPc1GJx9qYzF4XQs619Yy9AGXnV9smH8WLE2eodQHYtJUFsc",
  "key22": "5BgBoJzXYTeTggtjPocXqkoG5AtASP52AH5hP2aBeAg6pmfdJFPRa8BGs5W9VyJp3BNNAJreyYsJ7TqcUYRaVKtv",
  "key23": "2TuzN9hKLrQykf1wgAk7TdYW7uoW28Aef5EM54eZ1oPNZ8h9h1LMpXBAxL8HRHu8jTnNZbumFfcfdy3y4jvYVHab",
  "key24": "39g8U9euqBhVrGGr4sGnhp4zAqTTAnpjNDDHiXRgpfpQt1v77SYNNZXo1Zp3mGQWBbHyAXiM2v8j2dTSMJzW33Q9",
  "key25": "3abVT3kvyA7CUGpsT669S2D4kDwEQPPbyJLVqDkQXcSrQnv7bs5AmqhkPwY7nrCjgA3U7smuDD54S94a1rs7c7Q8",
  "key26": "28RZF1P4WDP3pFDF5SVL189gNkscwx68xDvrnZokg47ZnhBaUSE5wKsota7DbBmGNWvFV9Q4uJBxXKB6xbiJR1iG",
  "key27": "4VtFKsvpaF8cqsoKT2tGurAtsfnkggYiLxeGHSpedTWrtU3JTF9Bw1KcXYpmgzrNe68Aq5Lgu8JtiBqS26bG2gMm",
  "key28": "4XSsC4NZ3vSAjBAGs3Lcg5DiQ4RzasBRoxH8oW7YQSGkwdGWLBUGHb7WM3jPXHRKeH9RaG3hA2mK2ZXJKNniv1GB",
  "key29": "jrjMozLoUQdWTKANJzFopXBgNE7rr5tbDwd4n54pmVUY5x7iHuWgfcA3X55jQN6WMHxhgkfFNBZvmUKpbKLnVt1",
  "key30": "fpwbn3sV25AqxKCdY8m9FuUhg2AuA1KG6F67pf1K6XTTJPRzU7ppM8YQ2uWSHTAyo6A9QKdpEggBA23jSYD2das",
  "key31": "5oRExEnr55zN8oQtdQmniuYKHbvaVrNgawh39HdpB5LUfHKFjNLtjfhDjsbz6B8LDymQotcp9aYgyepdEKkToh6G",
  "key32": "2qopoPD7F7AtrsLTkn9D99iXMWJ7HQay2wgWJf5UerrEJwYh5YaWL399U5sxpC69p8zcs4FYTUR7JT7nTYwy5gen",
  "key33": "5FWmg4N6tkMqUVAjvQg9r9qSKWwp2SBksfi3zpFNWcXytK5MgQzptrxBUjn5q4dBrwJpj3sg4VZLvWF2C5SVxrJW",
  "key34": "CVhoESE2J85fZfgD9MV2wmojK21UydKPmT6R6nRpCnuE6CqXRggsQGREqjQcB5FTMXH3mpjpyxRv5MoGwbGrMwm",
  "key35": "656UnM1WAofEHztb2dCZHnyc3EccRcrL255zAFk4nAmpa7rfDjQf2UL1csgkSyVciaiDpcLRn22twBosFvB5ePLf",
  "key36": "4JzC3A6hcktBxp8xvczrFJR3ATxrrPByVE6XrTHBQvHi58ioRAwUWDnfH3hh3RzVQxKYPxgLCVALTmHMsjYbrr2N",
  "key37": "2XbdWruGEzGxe5p9BsMC6xDw6E1HMt5BSQMMfm9MkKHSnuXyTVC9EDrKsyFmxj5PSQfNjpzsYHJwyQye5d1qqTdW",
  "key38": "3qKERZKLZ3yvXR9UPaubKhr2X1NgfGPKoiF8ZLNEixVuvhrraTbGR7BekT8VoWzC7moH8fgA6jaBLtP2JZuCuYwE",
  "key39": "KajbK9e8nM9qGQpSUfQqUNfWF1MC7uh71f4BP9K4aEEF7SdfsQr1u76NF5eWAQ3ZrbbhmT4TTNX74BJt2Pcr8Fn",
  "key40": "3JghxwD6ejkgxsiAtRA4RVaqVqTzNhFwUjGYC5XNWRN8AKWmggvo6EPXy4VfnrmJnj1Ti2Hxw1fDhKhsKZ5mtcuf",
  "key41": "36XPWwJdByTB4dNBx9z7rbUqv7ZrJ1ibHJ4LDqGy6Ck1hXdMc7b81Ls82n1ZZ6ytvziv2aUECrmU9qLn4PEQEf4F",
  "key42": "yCVgUiA5FWQ8CB7V5au5E4neTDBPDFCrtYHPSYQVDW9JWx2EkxTJ6FThHLrZc2zZYD36E5iMpnrHpCjCQn1HLv4",
  "key43": "53AXcUC7r24kgpKa5ZzqMhbb311iAp7wW8xJ5CuYTJPcNJiHDabCuztWzUYdRHdqeuFTeghwNBhfeYLEpfxh9XJh",
  "key44": "JW6HntvuaByjLNjfcoA9ko1ctXYT9QsT4PSasaXQjCo5Q24QKJF557ZHGjHGkXBRwopQ1zitwqVfpgvE1JQdyqa"
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
