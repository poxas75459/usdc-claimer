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
    "5seVvCzNjwimM8Ba8JYbe5CAo1DoeT48NMXAFVfEz1xRrHrgy12DQBqFsKAFC2whpUhjfTSycKnmnfLeBqTbKKWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HVho35VLgDLcJrpoX4SXHihuJQpgeZSmjF2x5qteoRtpeME2oAFnTuRWuC8Ccs26S4UVBcukfZQYtvJHsa1MRQE",
  "key1": "WVFXcQWzDcERvMGGKbdswSaYNtu1Vwrr7XUBG9DZqmGNwXFk4aquzqRRRt1VbCZqThBsdH7WLF1dP1vW4yECeos",
  "key2": "2WmdAE9dghnsWLowC9EXBCbscK7n1wqScU9Cnk8sejcwZfmaTpXUkzyCEqtM5BTykP9iwFdmiEHnsStPkMNaeQbi",
  "key3": "5NQV6ifgV4tCSQ1mB7EYeyX7BwpaQ25CTgh4VGPEQTLN2PEdKLUXPb8QaFrbZkAgdfvmjccfg4NPhbqM9KgwKSYp",
  "key4": "fwYJNKwTwKCuMV7NcdBNePJWBfrsPyhNf7QdM5PxLNwwWLH6hGsEkeswyobinvYDPS6bt7DciYUqwKgeibn981M",
  "key5": "4DBFxuKHpv19s3BDzo3qYRnVARy3yJDY1WirrRodv36bZW9p7zHnh9wZkgHoWDsHApRjTUSamv1Rh2VU91rkjU8c",
  "key6": "5toQ3BY1nVxvuTdwEpooZQ7Lipk11fztDpLt1GkYteEeYw4bMomv29gbon1GsFjTipNpa1heMWAv85JL844Zhjki",
  "key7": "eVHza9hB3pcUjLF7bx9jaVHH3dDX2xu8DiYwWHhjfdNcxmV688VWQrnZQRB5GZznmzHnAGQ7fj6BzLhzZ4e3Hvu",
  "key8": "4wb2evaGFySspt7PQUBm9nxKqLZygDknCeL3cYqiiXX2JWrsH2jYy7iU661jTBVZMvrsRzbzhuNxPrpJKRCZj19W",
  "key9": "5RLML6atBsPGdSCHGDj75r9MsFDNLioxLcSKpPo5L3CQgUbQeF21CEVvae6mLmmcTChvhmXo4ETywbXBY5NymAov",
  "key10": "43PzMLcYnszDJTDtBkJQgFEGVNSBAfcDLtDKiwTf1YwWJj7Psoc1c4q5t7Y8pYB8Cf1UQW71rDq4gK53ZWrE6sNk",
  "key11": "32UM8SB7sNHXK3TbRPQiNF188gZvC413GpLUMa52nGqoEhrXsznnFj7eGxWu6NsRXit1cbMggPMQR5jB5sBpzRih",
  "key12": "4GpouxnraTVZrTQXsTcyFwWKamJ6neKJe2rwoTazBnqndSzDkqTxbUkSexr9PrWJyHuuk2MWXbMyZVtoFXh4Et9q",
  "key13": "PaKC6t7Ehf6q8bvCAVYoG8HaChR8r6EV4fcB9rST4k8CZ9VZD8JcdEumEByBxPLwqsoaiV16VRNUvy7zZ3P3mD6",
  "key14": "5vVABi12iTBgJaBzXx9AJfo8VkAvG4qziLKMiJi4sE24VzMERvFbtwn6h1ecfLXv9TjCbvjHt77G2VWMGFvVjuFm",
  "key15": "43yeo3RMdax5xNdTqyoGNgJtHFvmjdGXZSvwt9FuQRhpuqbc4CVWvWfG5R8q6mYvrRYScJsmQLyKS4nXGXU39DHn",
  "key16": "45ktWtD6mtDPRSwQAMaPzPdUBnsZL4wnbkmeYCaH3Ps5FDuqSsg7S4PKCVHR5TYnKW5fBMnZhXA48gGgYgjvkNFU",
  "key17": "4LsqMUNdiVrSGMBW7d5C4D5TNtzHgjqrMo6mH6Ldu56ZfB1WbsSopXUuDt8oiTEnq3HFL329hSJwSisSyFwYJ2xc",
  "key18": "4PZeUeQv6NCSzqM7jGSt3nV75WNXrtVkqxcUCsjFNhmXoWjxLF7ENyBBmZ5is2Muk4xyZqeekZQJstFfj5EyGwNX",
  "key19": "3jb8YSjfAwquepdXCocagYoTpiCNSHTBXFWuPLefKBBypdjY5Gnedfo4ehY4hQv24p82PCtHxZnXVp2Ymt8y2CLY",
  "key20": "3hhiRentFa8TKSnjLxhH85qfvMypRVceaMLFJyfB18a66Zyp9nJBzFWVFwo9URNtbm2XKLKWHJqEEFhp4FPtYZMm",
  "key21": "5YhjkWSUgwKfoT5x3CSWyPP5mb2gFH41266Kv66159goMmKJieCUm1VasDYQBX4KSCzFu3whfQcwgz9HzS3aBbRs",
  "key22": "uYfuTsbrSCTQRZ5V919HvLtFhwNusJgbCzrBhxxdwQYAg5VawNLcUg8srQZZKnR5V3RChGXgtd3BcziskBTn2EW",
  "key23": "2Q1Jz8pLf94JbjoLALBPMNnpUD6493DKP92SuD5fMBZcA9jfDs76KNjyhEYnqXAHJcf1CARCMpv1biT2f4NqBEqz",
  "key24": "5FLdXzju9X3W33pvARZH91gYSYdzNELo9ATREwDJSiMRr6GbYDMRzqVVZEssnPhwW7MgrGxtUrMGoNZkK6Lv1xAw",
  "key25": "51zNPN9kYCqXmfwEX6cwGQNFu2bDRMaLk1jcDZD9V5Hi5GGMq51Rv5URr34gg5wV6ZMsy6hDgqv8rgNJj12eEdL",
  "key26": "5fPP57jGme2fnAqR7opDUdVvXHUH67mX7HNvK8QnHR4VMyLGNzsmB6fSD7guJjyrKXtodSb95efbz8wSex6bhjA9",
  "key27": "5NsDkHUMFkVAPdxdXdVx9PhFxJ31JpxkSo4dKdF6cWxxhcnVyBn3aut7JBqKbnq9HSBk2GKEnEF61e6GwCrQcxBb",
  "key28": "4dfrGReSz4ka9cZSNUkaDnLGEqhfsuR6qqXfd4a8vzcE1jXhnXMwXKy4iiSvwoPr3WuAB9vZkpEavRfH8gfXbsad",
  "key29": "4cXTDiX4ZL7nz2tTQJV4pVewXHF44VMsV6GwKscJNHMR3sWvdRg1XscrWWmwjz3DRp2cz5Qsth7xgF21FLbX7GcJ"
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
