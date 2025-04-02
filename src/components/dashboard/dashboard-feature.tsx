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
    "3bfQz7ohzkKPNS1qoi7vfNtF1Cc5yFN9XRQh298YGYbGC78vqdryhgsMQwyxM1DSBh8XrvYMgDW5APJLuFFfqZqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26vXUU2ZwKMLEbr1NLMuh2YAKUBAedWvg6xHjp3NkAArwjQGjkA766USzX1wW2xbTrWStoyCr2BNwP1R7tY7cCWT",
  "key1": "39E2HUDaC9xDL6XEA1WXd2Nxkt9NaJteQu9FpdBByLhnkW6QNmyHU3KAY37gCgpSvgxuzor6fuTAybXsXRYHxQxQ",
  "key2": "3HYR4doZgmWieKMYbLTvcyEeS3789Nf3iVUjY63sGJ2sTq4HmsW2qKGhwJng2zhCf4y9ESYGCQ7g1d5UCLbfSc8P",
  "key3": "5yc9RfQRaTMfggA3EW8oWh6V3Pa2C83fNbV5urUXZXtGcuK4udmH9RAFSN1k1HZ83vPwYp6g51i4jaK1R1kdtDNj",
  "key4": "5wxm13U7EbMz7NfxSp72aD7htStD9fk95P3iHfG8di7y8wLgza1eqLGN5RbNb76HxTPN8PfuGYjgd1NnfimfH9yv",
  "key5": "YGnkTxBfjbH2C475t3Bzzdx1YEEgY5ss5VH4nvV5LHrxEPKMpRHdi9DAv3HQvYj8ci6VhvWYpHhAA7X9HJrdwzB",
  "key6": "QUL3aT9XPzcfpQ2uDk9Q5FmtocWMmYDYrw4GjTcvbWJqxToN7MJHtjVBHG6opaMjPb9S2wGHPGD6jhJT6BZ8Si8",
  "key7": "5ENGnuAjWNx8PfRfeadK6gH8SNTtgiXDpk3afcXRaUiQPGbFuVkUy5PLdCAG4US3FqLTuKTq2ZkkvH6opNb1BTud",
  "key8": "4kZtGBnh4aRndRvoNGQ2yKUQdnoXGvXKvvp9w6h3xiyGLjseAUNRLWipWfWLaWGAs7D6S3MJqfsz4AWKP82wabEF",
  "key9": "4Gfyy4svabCu9cnE38i9ZYjpmEdoMUMYW7AKE5B9PWn4oVXh2M4ZNGTK77Wt7F8uKTcAQqwaWkFnunnGwqpQwgWu",
  "key10": "2vwuqxDBTpXNohD3xtT2z4h9Bnw2QvH5oSs7Ub1S2R9CebaLQj1FUGeQ9vv64QijeWowPQMLy4DZt6XVMK45eG2h",
  "key11": "LT2kD3QrVRoteiYUDveyqYEaBVyT9TB3wKCSroXWgVEXbe3Ppem6UofF3jghNYxg7TW6QdWusV4ZKte6DiFwsFR",
  "key12": "3mnUZweTsuVSafdkJDG372AbpMcC9PPXmQ2zkV6wB9ZPu6WChvTpEMqjLLpXrxrwCztbBVJc1dWCb4MQdp3ogM2M",
  "key13": "3ZV1gB49VHHGNr1SjAGyN4obi8ckb4iUDw6D8Jrqd1W6AZTT1MmB6nxXyJSRLdeaNKr1J2YHurbCyTTUwP1HS8Sp",
  "key14": "Ng4WtU1TrTCELmuGni8DNGSkFyZNngbysuW1ShKzSAdGkCT3ZuwDPSvMC5QLXMiXsX5oq8FjrcQ2ZQhFwjxsJof",
  "key15": "2qpTbhcCxPwsdBASU99m7VRf4GGY6R75TAJN6dfU9RmofCL9DP8eiX5x7k9FuCUSBhXYLkn3Hj2iGwyNGKa8ZtRM",
  "key16": "5BmuZL8jvuKx96fiuY7x91btnkQxBF3Nv5EpgQSaREawJaPb9LKnweJ1sscogRjYGibErfuKsU9Cu7VttLYyGJde",
  "key17": "HJqTwt5Cz3PcBwodD6B2LbYwq7jNoeEPz9ZpdWfkhsUfWRjx5R5iYegszuPqSA5nVjSnJXtMnAf81X6VEs9hR5p",
  "key18": "xHrGUmaKGcgo7WcZhbW5MGt48KqNj9EWpkfqi1HQsxsXHujr7bkFthMx5zoWFpSkt4EYiq1byyLrZxqRj3Jg4GG",
  "key19": "5PzFMmypoNLeBDZdn93Zu5stKGY1xrE6QbMMXA9c6VxBAV15tepLn377yHrGKNqrNKfCdbtCWNGNE5zgqYBtxBQq",
  "key20": "4MoLD7wobhfaer9JefQGnFMQ7D2YZMaDFAHLX7Z7HiYUSMiNieEBLZAawTxCDci4x9GfYj9UGZEVb3tafbbEYqaG",
  "key21": "Von8WbeTo5wR5TbKB6gsK28rjp5qmckBBy3Jwc9ABeKxoaBiUxP3Pm6yqmGCMLeazZYP7JbpKARXGMSnLqgkXgR",
  "key22": "31xtWeuxMtfjJL5r1UANFG3WaSaKyD8M9ZWn25Zjzf9NUJ788SKfFEqiLe8H1u6UAJA7Y6N7kLAnhvYZMoUVR95",
  "key23": "HL6JCyeoutnMHrPZ3q22H4GzNrDawx5o5vftXCk9BEyFkpYCQ6B5fS4vABARMdauKtPPu1M73ULU5zTpHVNLU1J",
  "key24": "3dQcWw2UV9njWk6xvy53LyojCm6s48NHJvzkPNU6ZF6P6YVXv2ZceiHKxaiphL2mwBCbaZQgp92QfEs1hdFSTr26",
  "key25": "3N157ot3zUhAWCo6xoCHUB8ANMP6cp3jHMAgRg1JJts3VrmnpoqJGzZB84ZBHdktyUNX1H4zErb1yC8x9j1KYQme",
  "key26": "5QJbWrT1sS1keyvj61y3vv9DeZgpgJsH9mCtmngVQF6Na9JkTaWxpt5jpy3iA3b2Ti6P7MBftYxxQCSknASavnyC",
  "key27": "CZG1FYMdCRTfCQMy2A8yE3LYeCVpA89PLosQ3nPL6Vc3SmPHpBj7kF5w3Q7TrHxb5TBacam7peBYDcfQZuFucbf",
  "key28": "3MEjpg7LXmRZZB1C6BAPgkq5bmwUfc7oZxGXU9xknQfwtAbbD3YYKS6f4LjiqAx9hnQHcCkKKRjGNC8DbYDtpMmr",
  "key29": "2Gi2FmckbbM5oikXj46B4puMcDegahjpwgyZABiJRKbifwsgTXyV1Jm135AgK3AAQ1jhqGxzzapTYW5Tv1gbsxJq",
  "key30": "4GvD6KmTMGByyRwSV79buxuR88u9umD5G1ZFwgAaym6wTWX6V6ZSSB6e2PHjgcHZVSJHX54Rx9jEZZ8qhA3aRhgo",
  "key31": "kpHAH4pwNLhEbiDJ87poGTP4nndeManKPmtFaWVWmya5dhoXtw2GX7Uqx4XoBMHa99aFbMQrehWdHHTy7oxueCE",
  "key32": "5P6Ve2YtqoNnX89seU3eqpeY3BYBZcW2V532YwBzHezNabzPzfLVdq5LUkD7mRSKS379q6REXXEvLXKBgWGeYqnz",
  "key33": "5x5eKYZ5cM6q9CbBkbFh6JYDBZz6ASduy2NcEYEuqroxuf3BXEsZVMkjygkkKCPzYezrW1paN4CLJV4oRYGKcBwp",
  "key34": "dELyP4KTypjYMkiYpJFgp8odcMtvvXN8Zd9X8pa3mMuYJWJEo7LC23xt8SKLyJZnerau4VcrPViSEx9MW56sz6P",
  "key35": "31xJbSjW9Kkd1PmMTjzMsWMwT8ohy3AmyvAZuRExZiZJXny4zku7tZ5qZQgbvEVLLJzYfxmHWfGyi7Gm6Kkf7Y9L",
  "key36": "5M6qtnw59L2mZg5o86rYmLFKBBMMLWtZBF6qUwvWaywunZtBcrr89WDqC4sXopAteMox9uGfPsPQAxLWja6pUGF5",
  "key37": "5HkkXP3YD2SrbZWg3LU27pNRmp7eKvnj8y8DuwcEpSZmd4FeaBtFRCTobZKgT96LhEiJ8g3chfG6H34jvmTRVEeS",
  "key38": "4asSmRRrHgjD2GMBHk1pPanWf3Qngp8o8jQJtpNi3TYfsjGXe7Xmza3jSfcu2ceg7B3z3MSMfFHPwgpjw7zDVH7Q",
  "key39": "61R4gZMg3K1MeQKbK26XRUGQZSvS9GyPhjEojuTu6PPebAGe1fZ4qgd5jfSwospDKzoLVW7okxBc89fAMciYKuEf"
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
