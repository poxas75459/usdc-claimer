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
    "5vyS21Vv4QtGbxNXX4PTyVCTbT6o8YYQ5sccixu82HK47JfhKwBjEJLTVCuD16WZaiH2ehBDxZM75FokEgH8iedV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdLAims4rnrnoBKidkJxEuWwjjtdRBudoYSzH7U7xN4LHQ8BHJSCvkSUTsJga6b7jTVfJaUsVprBZbrunxReswq",
  "key1": "2PNnh38og3QsoaUS3eXZq77QRWWoU5ndiw8qAQVk7CZhbSrJE1webt6p2zWCSR2ohfPTxrXoX7bzXcPPyTz5Nx6b",
  "key2": "4soKoLWq26MKfBXkU2eepX2DdDXeBZ7SBbA4KcACre1LJ6hwxNuZSGJpoNJWq47FEWKBLxjm3VkMHfQhawo5FS3r",
  "key3": "G7sXpVpA2tpAbj2fB9iWvkeWSh8Zy7YWttP9EFFhZ63otD9Ks4jZeboHb3hw55iazsDUZ3hj1Gh599inZPsk4d6",
  "key4": "2iJJtJPS8y1umgj2zsH57YX7C9EEKSAfzJzQeJBBb6yo3Mx1BtKgcMg4r4ikx674kz7uNP4bF6ucEFDCwF9tzCkc",
  "key5": "3pYJXFSTQeaH7aR6J2CVqURHL3YT78UBSuYFm2SDQZZNQ2W3jUCj92Qy29d9zetCbdPpg83HQzzcEUGcv9ufdwfk",
  "key6": "42fYZdYfuQ4wpXi2B4qqEdCBzugTT6QBcJi8jGBWEbHMbsPkMYssoQdJEhYFZqtT1r564HjfHx2bFJUveh46Bdr2",
  "key7": "57LCyRNxbYkZAdzo4qmg7mYXMvM6BBG8E1y1rLhsxu9PjSwmNPyXiL72weWEqYJ9bRo3W519XPWJuudNzvDvKap9",
  "key8": "3zXpG1Z4T9oRPRKmDcmnMKZW7kEqm72dr6gC89yfKAhGi2t5WKhQuEkG6K9kFa9LY4GZ6RLJATiSBAu6V3Gx4CFM",
  "key9": "5grnkwQAmZf7btphZ8f3PWnnw8x9iNYSZCrof2hxQykdUUPkDAGGKyYGdaWw7GAkqN9HBWY1fvaddj3U7SRsXSKd",
  "key10": "5fKm9kQrC8pn6mhx4uiQat3caigs1GGsxsGL7VZPsNboaxJvSjmLxkqgKRpWDVjCXBg7pzJSR3BqCoBh9JkXJxD",
  "key11": "2KFmTYr9noV47TF9cPYoQRu42DCGBh4GapZqT7csrnewPK9pGAHZZqLD4kGzC333Qk9FFqmgcudgY4hQQQDnsgiE",
  "key12": "4g9FVKv5YT7jgWoHLPHs8tkKjsQByGKZnpvnVejEMDFn1U9GPfqoMB36PXhJbgWTUnTbeS1UorXp6QUEehBMwJr3",
  "key13": "39z1UwY8LcBUmFibY9kFPLC4d5QEUGCmWpZXZvnPBTxNrwhmhmoQptBdqwdbni8168XpqUKWMVxBXUMNkLCx3ajU",
  "key14": "4YjbHXFumeai5oJ8xDW3sFax9U5mRdbxVJe5XBrApZjbQvShFMnuW4T5YApzFmE4xYkUpkudjo3p9YYY6Xc4aE5C",
  "key15": "5wz7CXjYeWT36wvPmfYAuLXddX9Drj6HoCJHBWdYEg9W3cFyC9uxxxDguDwv41iHM3EHSVjcioNNU1a75pqWcuh6",
  "key16": "47K8WpPjjcowF9kpT2VVaPFwAec3gNjREd81bmhvb9yXywGkfqRNxxEgbAzoECvWV6QDr5fJdKuzAaiV3waSxDb9",
  "key17": "4eaF4WUhXrHXmxyigWzg9UMNNUTCjENU9A7UYqQeCYRwU7DA6UmwkfXAXKV5jyPB9D6eEg5gNdKuAiitCZ4DRxSk",
  "key18": "4yCuFDhB3oqnYtAtbHXMeo97tfS735P29FP2wXjxB5qznx73zMwRHbMkPrQcRtaLyev9owX8wpTtCCrhci2yxCFD",
  "key19": "5cgeU4huR3dGdSfwE33BMuiVL43NXE1o1qEkQrvwVeaZfptrcmRY85uvqjviTh6GeneWL1tuNFKHroBNx2dszLNv",
  "key20": "3eAUzARVj3vZFnC5UvGrTGb3NfAyxQMiRtXUzb67FGHRmSZtPszHYUP2ay9H3XnHQcrM8hD21jQ8qkbdQXSPR7QA",
  "key21": "4r2xKcc5xfyZmfgwjMrY8bQS7neb86uG6wPjQ3EuyfJ6a6XFQvmBJe3Qmm1NW7Fp1gCdMctoVcRreXL2W7Zw1a7h",
  "key22": "36PiuvBYiagKKzcFRQGD2iykD47vuY3dvumrBbq59DWyoF7gYEXNxov5y79zSvCaL4AVGfiMgKPefZPJVxf4MvZS",
  "key23": "GBAtZRyP62XAgFNEKXznx2KrZCr7o3YBftm9JekuqF1YHFWHxVtLoND5KStekhExqJvBkcP8RDYG9PMEMfuA8S9",
  "key24": "pDw4fsNQSnwqUgk5EL55juUmadQFVSBmv1Z2FhcWzeWTWz5844aJ5nq9uECqsiHUY9L3jgfKH3L5FSSFdBzhJxS",
  "key25": "3WpCqbvwUMv177sevaM2GPfb1wAPbVnpEUA5AZMzas3zfeEAvwDZSiKDwBbc2tLSw4KsTbPvpPC3Yf3AFKZQ54NL",
  "key26": "fYBDppKh4bDLYhDj6Jcbn6zkLNBvLHD3i9GLyyaQVsfkR9t9R7Y4YCnXoLUvaymsVejFHJSvftCygRHxhHfmLdD",
  "key27": "4eKQStTufpM9KZrwajTB7gGKBEwVrXFJTHwNz9WU5CcxifCQzexgoMkrFNUadb2wtWU6YGK6McoyhAqrFp2twxSe",
  "key28": "4FEWWGAxDdGpkBfmRxhzUW6H6oL8ouGdvoaYav4BTZ5KDzvM4XXPpVrG5cx1GAerVc3V7mVBjrMZUJ7Yruw3NtGc",
  "key29": "64sjEDrLSdCqf6dWwtV985K29YZdUkN8t9D3bVnHiUeJTuByyYG4yuHcNwrHJ6WgHirr6PDSGgQ1uWrtF5uiVdbG",
  "key30": "4fw8jc7fb4j3Moyx26x4h73ksPNMDQWMNtQzCj3pn6SmQaSnzcSU78gnr4GRGHa7F5QYBEoeAnxv7sVZVXhzCdZi",
  "key31": "5LJJex7J2ivBvp5QKXmrQmcA2ePqXnC32pUBXksBcSRri2mkSHUo7Sc35oyNr6XA8nDjedAfPJ22o9TNUm4Hs9Ty",
  "key32": "4VNa3x5FuhPkMHcJhioi2AbWCDxiYCEzYbqVFEPUMPkiiqsrDbDP11J4qn3mNQPg9ts54Rp98DfJkcmsNndWPEwJ",
  "key33": "Mxorajfa5zmWB4UWw74rehUet7DwJvNmHAi7KGzxU2vxcUaqMtFpiysp61QNcaysgUiULNLyE3sQMYcJfDdUTFJ",
  "key34": "25uw77EwEe3Y6yRaVcEkwiLDzViGVXwjiRgHkHYUKcnApdoU3q9nSH5Ww5kR5MagQoMWvL5xMrdWQfsYQehuZzWF",
  "key35": "49sTRdRdXFa1jULaMysxGB1qHWdUyL6g94tAy9wSW6QQkjATPz1ph1Zrb2r8PJBSDnBrJrRGnqHoqgSyNrzBtN7g",
  "key36": "3Gdc4imUgU7ZzJWkFqxXGGzoMLCPYzCVBXWoea6K3mrF4PvjoBcKvf64VkrKnbj286GjJNkKFVNbeJufSYSUKYfE",
  "key37": "2Yzu3C1cCoW1t247nFD3ML9ZuFXTzSWezDsoNNATk7K113hLB8WoqZxsYJQg5xLYDpESBQKPaSvDzhVe8uyaa1dZ",
  "key38": "5Argpdx7a86smHbHkcvicJ4KNEdJQwMDNT75nR7XMbiydpdWBLFcxGKeVui7L4JriuFLHZAFG5Mw6CQc8mWsq633",
  "key39": "7AHwJWjjw3uE6eQ2vUXykw78EtJjyhbjgiSjptq5uzXhr5BoCF3jgUDipEqSPeNX5dE5DdsthGo8wnEXoGkoN4i",
  "key40": "4AKZLieuGNvCgFXY9vQ9zGDMxTCjJKuh57wkJ7Jjpk55TSXeXVB2bVfXLp36jT6XNXLjQM4cG8VsJbfPEqTaKLoM"
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
