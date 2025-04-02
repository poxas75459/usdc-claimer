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
    "3YJ7uBwWubvqhqDdPXbgZj8ijw3HPCJKRbYgFMbC1mVkhMqbPMdWLNDdgYgVEUM9hHBXo6YE4WKJcAb6h1q5Cyme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZrcATLEi9wnawEkkNyteXxyTP2DvHBWxuprHQtxthex53v9ak8gWPF9695Kd5YpoSNdmnAZLrcBAx9hrVPM8A8",
  "key1": "3Wyjva621cxVKiTW4R9aZ1Vgd1JhdRnMRKT1Ei5FMEUCmGShrkfNbn7hJiTiR2N17q7Kt4zPo13W6VfVajq8YreA",
  "key2": "35JkqrCYixQiU2QebF8Y3h2PActPekaLeLihmVa64q4eurzvmzGvsQHU6cYTZNTMcK4FYNxyva1W1n9E1f1bZpEL",
  "key3": "2t4q42XYhgdqD6Yk2E9y2yo7b7iPoLVtWZeAHndqY9gerDjEAjZHRMWAsTvAkKeyUHnJXpZEZGAcmbNS9w1N3r2Z",
  "key4": "66EtsMVW7qCiJkLYGHgfmU5H2LrjoTMZfA2pdjdpwupW4DeFbp1LZBFfoUuvdBNBPQgAA851DRCkyygpGctAAANb",
  "key5": "4SvPpfNGgNsXnzFJqvboF1ywfP1EegmKVPiS8qhbuYrNKqH2fKp6paCVewM7hTa4xetne9pDzXqzWT77VAqJ5Q7D",
  "key6": "4C19Rm2TJStmuLPktRBqrsJ7wHcpqtHHwuuSzKYtchHsNfksWDjtZhsh59r2DTncPrUdUMpco4BLctpTMBjWtXVn",
  "key7": "2hdQQ3ApSW3pjC1jqmSxHPewNggBhR36WD1ycGhtmT4WvQU2yGPYejVyZV7hjsPfRUThU6fG2xezRv8DMxL81Skb",
  "key8": "LdqhGELw5zXJXunten97Bz6RTLboigRHmCCjX4SozdZCte1xjrFpLkAQzUpARVi85Nm5zH3SL52e5GVKNA6PPnd",
  "key9": "3DP2S8QJ8Rsd9FMYi8AERvop3giAHxjMXTEg2ubjhrRfUVqwW8S4DrBddg28MDjSsaEhHtenkbjf9gtspjWgNvUd",
  "key10": "3Fq3DU9XECKy2BoUJnUv5hXUeGVBxFvY9F5hzuhoX63wTKGm1jdnH9o6WhPnfZ5WZW8mhyGpPVSVnpPGStZXmpUk",
  "key11": "57yu3pmJA9VmpNiUZBxfEXUBmyMrsrAK25KcjiFCJYFGDfxnoHBaXb2TwCPS7nBF152vDHsH4qSEg1dApaDg6fgu",
  "key12": "4tycr9HxQzXuHfCPJBsLKT7YENsBEs8Z8HCQUYMoVCS9ppeLVzF44mXSuqaZZHj6XvyvCMS7JcCghoyDRmRv5mhA",
  "key13": "4iY4DnF4Qhvt81w8KJ3SJZhRSsixXZCfFcxGHMiX2BjYCtV82BAhJZwiQ4N8eJYr324pURa14v9mUjydqtHeMmEn",
  "key14": "2RnvjEhVvQFt7KujkUtosEadTqhv5R4CLE5nRDKC5Ao2HMHx4A4ggudzkLMb3G2nK9FueAHqvd2wsnJUJAi54CFi",
  "key15": "4Kp7BSCvNPQWSrPueWqC5uFwUSdsmKh7VspyV1e6ceda1xU2SeRinM4pxnCshKLuwZPgv6USedDCpBQzJGiBs1qp",
  "key16": "UU6YhRLg1LYV6X6QNQSqXoifsaWU9utyPYCjy55uoQmYpGNaJmkLihoKhHsyXN7LXF7s3g7KvpNnzVLG1d1eoF9",
  "key17": "4aGn7Eo2eymhyAuDJihLVpE2wFj8kgSvKEMgFtVZ8qKiNjQEoDPG5MdAPLhRNXSTmiZzeF4qDJFkWKuozs6ysKYk",
  "key18": "2Se4Pxz8ZMiV4WWCSw4nEA1uScFnkTK9LmsxfcxqjKtUW8nMLNj79xQ56HMkssJNEmCTsGPm32DXdeuwZKG5kjBk",
  "key19": "3LMgm7UnSx2RoakY2srHJgXtPFrfBR15Pvn4GhAKGqHVfoXpgu9TsMb7BjngzASgQALGV7f1GVz7VWAhBSoB9qR5",
  "key20": "33zHPbERBPrfGPzUN87SciT174W7skLifTJ8oHVbfX17JPXXzYENNRkAPARcyxSpUMQR1pAQLwWddWhLjdUnpiqB",
  "key21": "3juxhtYptQMdquha5EfJ7M7a1dRriuQewGTgDt9hHHGq9ZjrqiXHSmntb8Ku8yRJgtUKrmkh68RgpaAWfK7iTBYC",
  "key22": "MiD2xHDTtuGhg4LVpyojkFfFpNpQV2tNVa4u41Pz65bwEuMC3q2N1YgXi6tajcEg8ifJp1pMFSswmP4J78oDZQm",
  "key23": "59gctC1WzFymVrAynHiKruwsmzGMYba7F6TEcu8yZCn9YgVSLqyJ7WV3J7byjhh2879ka5PV85sLKGT5m3pD9WTS",
  "key24": "4vvJUogQZpaaZAzfvBB7idJdNfLf3HAL9WdeWtVSi1qU84UYL9bHNE94LhQDK3MVokQf2Zs1SYb5ajkotrj1bqVT",
  "key25": "5xTGuy1dRzQ11CZsQpQkF9wXAxFqNtnL6khsnbLa3HEB1pxh7MPz7tyYPnew1tUKxoG32tCUqX7uobp6RcJA6jTF",
  "key26": "3G4Q726CKyMWmYYkoNByBTPZE8R2M4HTunT7kHGBfvPjrLNWmUsXxvdapMASrCR4DJmXsmfXxz9FjYcZXjHJQdr6",
  "key27": "2kyzgzC57EKSXdG3cDG29r7EN1WafP2oVLH1KU7zsJ3uDMJBVWVw7BX5njsdhRysmP1cwTmuvXMJYZCkVtEHMqXV",
  "key28": "2n6hHV1L48uSu3y3P7fQcR4XffTDSLJkf3JJMgTMSXqB7UAj57DHevBn8T5XQu3Z5dowTdVgHpm4iHs97qh4QA2P",
  "key29": "3cbokkqU9cYfgUrcatiL1cBzmGcmctDm1pp6Xr6G4bEjXcZSTaCyV9t7SDJT8iu2iqmPqJ5b8676A6pG3oAv1Ln",
  "key30": "39obfmfbheveh1kGW2ArgbG4R3pbfR6phrLsaZUj3r2kJTg4ZLMAZzccBvLU7tsk3yUtBBre13uaR7cvTmwmgmju",
  "key31": "5hTHCyD3v2uPXVMRMJPEsa48VimQuW6wUkRoX7GMWwpvra49QsLvozJvdLrwik4KBYa1fM81ntv33SPLF735nhw4",
  "key32": "5Khq6xttNJiTQ5nQ5Bd5ZzXesjkuojwwe7cy9f6YZwmgKzCt9Fvqo2iu9B5aJ6f9Z9f51UqoVsjgB9mCztBdkG3h",
  "key33": "3WBsbBNZnsUZ7XbWTQu24Fasyot4scX5MTAAHzjcxDWiNqJnfhTPRTTkrPWapkRgmc1Zqt9x13PWMDaJpB9gizQe",
  "key34": "5dRR3KwGYhP4iEz15rhgkpcF7DV9CSeWjr3Ca8SDJvFF8fQiYKgY3PcNqbWLaxAzetg4bz5fAi4fQYVKZ5u4TJX8",
  "key35": "3fgb3Mr1kPZv81b3VVfAdYftgDUxbWyx3itoW6YG5RDVCdRi7sEvcwrbrTtBHZpPDdSrbAxK5sW5rK5HBXPJndzT",
  "key36": "5u57k6i99PFUfbEXi3AhHvWaYPFeTNs3E9FfQQ6zqwDd1J48ZwkwfGpYZxD3Fm6Qpp1jURAuCfRPGzGpRv2TZjhF",
  "key37": "4wJgWhjP9ePb8QPv8Rwpi3rKaUsfhsZGPqEbWGff6RES6vUw5f13fRdY2Xrz2xHJG6YJfv4Qo6CjzYe7z7bP9E51",
  "key38": "4dzeFfnafkp5yPPy8ydJmVHAtbixhJW7qWDNzHCSrC7zyNN5XnLM4UB5Wtc2c6gCGYxRCuGAEVvkL9iWHLuKgNz5",
  "key39": "4yLK7R5E7tMv9wkMwNsMFamG6zCFbhD5YvNv43F9Rd38mnqtJxmxSgxGNGWiNNBbs6SnhZtX9DsdRKCpmUxFHBkR",
  "key40": "2EF3zPaZixUX3RU9Y4Xpe1haGSzauKnASM2trM41DBxGk2TkZH4uUhRxey3Ba6Ze23aXwzatpQQBLfFttPrxRRUH",
  "key41": "5d3xEJfXRMYN5X59nZ6HFqnpwQePf1qTna4W9Npya2Q4psarDY5BwPvFtiZ8b4JQZjnaoLUmS3yW4EiYTM9eNrxs",
  "key42": "4BQMm7pvf15h3vTxaBKCwXfZxb5gSwTnWwh1zK4yX6z8mRTWJTURJMmDiWDSSPhLKi6FZ1zw7jMkWHAMnTZ4ccW2",
  "key43": "5QqBCuoRwfUH9T8tmuNYW9L5AXApiPXiR393eKmFbja3gXga7Yz9CV5NUK6EezKMgqbfBtwNiVsUf8KW59zo2jYB",
  "key44": "E8H6HNb1PsDckcVLy6SNw2SM5DoCVDcc5V41QBmiVw1HNnUfFiBc8Ga3F9R12ECW2H1WTsQ1EPEb2fJfCdffPrj",
  "key45": "5reB35sj56uojVF7fqoT3T669BDBC1A1hzLihBfRR49baL2gVvZa3Vt6YR29PvquUAVk7ToSUApLCvG6BWYM8Rvm",
  "key46": "2b4fEzEdLTCH9iG9UNQP76TneueeNWkZCfRY9o3qDjjKP1VyAz3Zdt6PfBpCTpS3CUQW2hBBxiSKqRrB2BqhdTK6",
  "key47": "3NbeZm1hjsB5EX86vVUPziqHV2eNkEFALhPnM5MBNyrRGXxFbEzh46DDNNjr7tGFdVmHqTTm5LLpY6roViaiVDdk"
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
