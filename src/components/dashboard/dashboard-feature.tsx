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
    "4qqNRLrVFMCbxdH4xfX7PBVFd4ZX6nVHMERkWQGVocgyPvZL6tmXcwKXWHNLBDhAMw77iMGYpgLNdhqMCxKEC7Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67PhtUywZgBzKr3cAkkYt9TRr4Bzgnn3zTeMRmsuwsQoQdrmUZoMp63H7yU3JygZn4dhvdubkSdF6T2Afp9tc1rR",
  "key1": "3t1HYz1z3k3X3c5weyBNBU8rvQCJRMqBoox6hPjEXHEtNu4jTuNis3VCXExUsC1wzAkN2c6eP9qXh281rK7smKVh",
  "key2": "2p5yGdPTdERuWwpCEyqfwQ2WRAMhZ1oL2NphkYMksXYFdVoBtF5Dj3KuNwm12yiTkVFswoiVRshGyDeU26ayFxer",
  "key3": "4RFsgMBWrYxkbmp8U3ythx3A6R9gc9jD8svjzngjdgjj9xEzofp87AFnSfEwYfj9eKsegMJWYwjJn1tBWfPzFCy4",
  "key4": "4a68WXUwHuSRtjfABL4oUp7SnB2p4oSh6qsbT9K8FcaDZFjPa2dt6vEgmJa4Sg4LsDaYms9uVP8uitxZcqRYCGtz",
  "key5": "2CGwFVVoJddT7TrY6KW258eiaCbdBgJ8A5CrqDK1VE4UZdmZM2Zghg9pstcSpMiUi4mEiPycX6mg2dqZGeR3b62A",
  "key6": "43FEbNLVyUMzLjUbYpUi3ZXZLXSns8Mnx9WudQiwJZbYxpmeyj6DNSgQir6Jyumq4n1Au77LTP85hkGJiTLqhiv7",
  "key7": "3xJU9Wo1McY9tmo5rqtW7du4SDuhCVtFTEEZdLFv2zoS9PDXfA3igfbdXfz3vcghC5A11atM435y1zSSKSxUMKht",
  "key8": "2reQEKy8sQq2MXQgHzkHLPJ4uji5VLQxRiFcBaJeaB21kATiDcSHnxzKw1mvtggLf9rAQ1ALoghNo2uqwCcTdsSH",
  "key9": "3MCMZanmyJyASTp1fwaKTssQvb39JTrZQCSco5ezMte4CDZ5yCrw7RZVPgJnSMNYh9NEEZ8Hx59BSYqeJoLVzyzM",
  "key10": "3PBthuwhwFfB8HQ2B8svrLgxpy1uVoUQ8k9CJx71E4eVQtGfadNkWrPjTh3Expn1GEXs9YpmR9uKLwxX5nq1MX1M",
  "key11": "4QLn7BdCbxC4qT3NhTMNBbW2qs5Vgabm6L9q74P9XGfQxF3xY3cDuSPLxLRpg9mdXfNEVCrYXA9NYkjNFhNxvxh7",
  "key12": "CLDHHP1c5uH5UJe9m6TBymXdBxiZpFKhMo2itvYMUNk9esJ1tw6XJj7dv7fhmrMc2EuaJ6cLkpCEo9CB4WoWmwR",
  "key13": "Sndzde7KCTqfqGV4fMQnAHDLYZXrRNTKTsz3i9bCW6b4cvBJqFamvWWJfdXRth54KEqTP2BnfGQWvHuEcLaXwGq",
  "key14": "27wxxc9Edc6G8wCJAubpBm6XXmaiKuaD4V6Ncr2K3MuWgXNdYgLdm9EfJzcFgyfxu8TV8aNZpXahnKUrXzWfAh5m",
  "key15": "xmj9fT7ckrUDBAopEz16U24ZuyxL7GuDDrxzrj4yYZanJ2i4ox1B5ghf1g5v4jKPk1DrG4FCpZscwXJrgY3tDNZ",
  "key16": "3zeTnNjoJgJevsTtkNunbsd7gawzoXYwzBVhGf59b7GgCGjLTH5xv6TBix9uL6xryGEKuhLhpskh1wQcLr9DPZKv",
  "key17": "3BuC9kBkKGuYEwAUqfmdt7NuSsdrp5yfTRgWTJ1w6MbHjvJP7RX8TKbL8iHKszUwh4HBJGaHgKrNYZogT91fk7P7",
  "key18": "4dc7BtB9WKM5BxrFy3AFtVYY86uhFbSMhfzF3TqGoCYJgK2GuBwjZhHZ95kwSuH5aVyGEw1iAjSiZsmuCecByG7",
  "key19": "37q7jPn77DbHfM5WXXfCjybzGEraB15RKeg5h7YUL26MjEVEDyaDYxLPv1K3vuPea24Ys7FvbH3RBgpRxKZXLEPp",
  "key20": "35pwA6Q6DK6HAfoj9vgiVm98mN6URzUU27qhXDVBaQhSGHf5fszMKsUWxj7PSrgKqDeDU8GqSFUyX5qeEQ7C7RZw",
  "key21": "RH6QQQEaXcuBB3TDYnEB4jj5Sut8zGZRcvasf1nayy6U2qNeVSYSg8X8L7vQGC5vCiZfCrQcsSEQjHsGY62DtD5",
  "key22": "571KxM2nEPzhvJBCsNG4zFHwiu5WVJmemPTkAsrBttL73RYmwEegf775hMMEopYDUuDgeAraAWGuD8v7GdjEmTW3",
  "key23": "JwYzQy6rupm6XSvWJu9UovHU3beEkU3U8QURFAvzwm7fqcWVRPJuA6dTguAyXCAR7AArd7Rv22HrCb3jUdieNxL",
  "key24": "3pSiQ5bhJnmyY7mBBHaCh4izhGsBp3vjZ6fisvGAduCH5hC7PpFgVcuhJo3oZaEibJWcwgNoR6YB3BUvnBs4UWVQ",
  "key25": "2ButbQNXQZSkVSnHWNDz1niFpTLRxacYjEWdMKF8DA33hnXGtkGD58uYJpeU95RrDo2QXrpL28QVqwywRcsWNt6H",
  "key26": "5B8SUviHEAfdVe1TndJ3HsB26Y9uRYBhtJc5usXbhYdcNivRo3EHjvhjohgFVpiXb8ekV4NuupV2HRxQ1wzDzi2a",
  "key27": "5NMcJFc6fDwKkbsvJAfBwhHbxa9BvMuvQGySqUVqPhJtMBjDo6Bf17DNpNe62G6njUWGaTbS6E24unPwiV5qPhhn",
  "key28": "2g9pBb2zKR7D7vbsX3P6rw6DUkmN8eXRvx5RLwtJWtJ4qsfKgXT4mxN3ioRSymBmssXZMhY3uujSEoYZiPxDhJLL",
  "key29": "5VyWHGTGyDJdNpNVNBKgANnwHKusnu8iwW825tHq9QMefaHKtsboCS6AkNCK18n1VpawLahEPpswnzeQtQzhTRQt",
  "key30": "45GbRAkWpzzUBJgWPgaEieDLnfLP4p3CEwzxeShqvkBG9e5sg7L4Ra7mYjD6Qzuh8PDb9QaM5HT24JWP4BWGKh8a"
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
