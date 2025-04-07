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
    "2pjq9g71Ffrwu6zY4NwotsqY3ZZLmfAAk9rex686kJDJK2QctCbzkymQkTdUFgbXZfockm3pdN2Rt3aqDsTQP26i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21dJyktovL1TNdGhKTMb9jbzWiuWPgBsmQNQfBjmxzg9ThZyqWQMNNHdVy1Z8aE3a3bVtb3Gp1RYVYWqBbtDDSc4",
  "key1": "3iZq9NcDGuLN2enyYfDCspYvVnYc3rT49Ysf8cruuNewq9XxqVn1uCPosii1TfdntgvELxjHb7Dm9WYdut6afWy3",
  "key2": "5fvbPthvz99ThvsnXXLr56mmsvPfgMbr5seLFALf5WRcQrK5gBkc49pNdKqpveFZ8eSEnSmKCv8eLPc2PSFq6CMU",
  "key3": "5JrxZqn9iMNsa9aE4wGnNKtESRXgzdLnckkftpR7BkudeLowCxduYFQVSBHvsFPwrgfeBDVhpVxGGGm6Vgybnwgj",
  "key4": "3ow1fgmegtBt5cDc6t5WfpLgH79hqNaaE4aQ5Trsa1UeqKyaYmNm7dFa3YduXGswyRQo6kYL4zCN4ePYM4EfH5eU",
  "key5": "fdqeVepCSjF52xZ5p3aoDNL825GsTGhiALv2CEKEtmpFkF7J5yKQnyuDm4er1MRrd312CQU1ea4dXjohyBXkPEh",
  "key6": "2QtuEVH1RFvzuGQGCoJjpwmQ44SCL3AtnZK1FLbjk7ii48vRESJMegZburfUzAawnS2DaVsFKPok24v9wdgSQB7b",
  "key7": "5z2igjCURWEui3V7UhagvWgbGRTxGFz7KRRWgSpfV5skqRuAEXuMKbHTTUjYM9eHgXBuhrsGs7UxVM1uEvfabDvZ",
  "key8": "5TobuN7EpFyXSQWX9fCoRqS4LpsFByP6u1j3hCbvCHQqKQp6sV8nuA54ZxwQXKWrxXuYaKKUtSgaUdXigsZugSJw",
  "key9": "FbnML7dqVLH4v2XF7qVipNeJUdkAyUS4SuCh9sfpvfaY4TfXnFtEznTL65MT6bzyz1Jk3jzcftjcUQd9LVnw2B6",
  "key10": "3MSGDZ8RAgbNhr3xdFhw67ijgspsV4qH4jLBzvYm7wXkCBc9SKSYPxM5s8FiAKgcG2sc4gnacvWPYfuBEQMe2zoP",
  "key11": "zCEYcVrjZRppKSm7aba9qXM6JeqJvHomygX7nE2s8JnebMvzYWT5SoGAogSC2Ldrk2586kKhKJs9uemJbysFtom",
  "key12": "2MUemo6wb9xymUgsQcLBDfKYRNTNUy2eJ8tC1dvHXT3qCWC26M7FjPxsZBf2zVjVzfjVC2tHTymVEmAfVWw7DEe9",
  "key13": "5FUtdVp6s8eNQH1cXUQiDzqiLh7PAwWjmtCo2Z1eH6cHKHALFVgyqq8ceEeTsRxF6tg1xdtfSGK21H2ySdwFx9b7",
  "key14": "2H1Mvotz6UpaMHcwiYtxtgCDNkjpesE9oW3u6zYAJ6Td2dw5zPtBssDhVMbu7KNERsYmMk8jw7LGHVgsaeXTYYdo",
  "key15": "5p4qWAdVBSkwbZH1C6pZX5jXQSbB6uifijRSrBFGYiULrfCJvtvRV6hqhPMmYGmu67Gni3fhYBZXgiJY2LbEN4yz",
  "key16": "2QNjhDYjZ4X1PR2L8KZJUzq6CrMmTFFco8bxcitoKchL8spW7FAV4xmEE7bgHUiS5DxWPPUbN6PPCQFDse8rp6aW",
  "key17": "cgf6UzLhz5rJabnuzuiWEc8k6SMhq4XkSskxuY37xhr8eDcdn94Abmc9i1B8o3QDd4uXuGjWHEWTJdai5oFsACx",
  "key18": "5DMbAaRw2XpT55irjVDVCpxNneg24Ycq1p13aLwun8dp5MzcfKQddEmWBnomYzArWvtobxEvZ19yg1x8nKPRz8UT",
  "key19": "2CR9WypgwLofozp2fAdBf1yzBk7GLmf2sV3FF7Cnhh1pd1quWTmsfMbhsbKnJS4j8uQE3yRs8Ab5SxURt7i1dV5z",
  "key20": "PCrRGL75VkSQqNbMXrSNAGmDi4rjrdJxV7YqZZ7M2NChXhupEYDuid5MmPZXZgt6KFSvCFx2GiEVTrLHK4T37KC",
  "key21": "5YuHXQ7yUyKa7WmTwokL8E3hucPWAJFLDpUNq3s829vBmPNvtdEAH5vYyCjTZNWRTjgP9yabDFJaZQtoSEK6cFns",
  "key22": "2iYnXMpQ8SPmcHaZyTaBxEGeyBvR3tojYe7nKa87h24WiQhJtoS6nYwqUbzBCHecTKbQWwL2cH4cqZkN2CUwfRPZ",
  "key23": "596ThVpQGXeYemWCyGf5EUUuoMUJ4LY2VzGhFG7cSZMCLyEdzsy7EmGfL7vZYG4inWAMJeyWx4AtgkDH6QQeXb7Z",
  "key24": "4JcpfY8jh1LwvYfQWJSJYqEeLBPpwNKjefUsnpTJg9o8XXct427pF7DYxbyWASKNDVUCk4uCQ2LFV7jJsu5SHeZw",
  "key25": "5cRcLHgZ7r4fA8wrHAR7knTC18b1UXvpYfCs7a2XvMM7ZSW15fF5A6SLXdKTrcRo4F5agkcyEmiM6av11AmTaSzU",
  "key26": "ozMeCuMm9QAtVMjF4C6FUpLo92BqBuXzYLjxiQzL6bKx1oS64AjYdCJb5itXgyFfHYGxqHGARGPEicvau9BCUq4",
  "key27": "2aMxQc3LAJMWBfZ1YY1J9KRtJnWuTq6jnAJx3ScmPqRY4sU4CJPMM398tDcRVkDbx5ctmDnJ56MikWWHtqnuUSBR",
  "key28": "5DAcCRf2CPExjf5HdxNjgxTjaqS823sqZ3U3es4KAKcyTdbbB5tbo9setGpRoy63XX5YJDu7Uq4Wv3MQJeHkdjNe",
  "key29": "5zfJxCwwie1ZzLKerCFQVmqLTWktyXqUjhuEHC4CzTnJTGWhV14feNoSBCgJV4nqw8R7cry5cjSSLBYf8mzv1HsD",
  "key30": "5xif8oJTzzhWuWyyFYbZM2JXpW7C3Yi7JqcfZ6T5upr7aWisLHEzcnsvcZbkJKnQ45R8BJgkybHSW84jpH11tESr",
  "key31": "cBeryxyem6NszyrEP1zWDtME2amSWDygdR2w8rfvrqUMN1VUboSxZtzAf2Sh8LFkuCc1qFrkzB7ZPQ7iMgFVpk2",
  "key32": "3RmP3ScVgzon4efokSnpM8sxea1hgJc2Cfbyz1zXnPc4J6wgKEsXKStjmL87YCVMfmpSHWAenuJMBo9tp17gvVVf",
  "key33": "2FTiVxLHovguk5ASGibrL5PJhjG5NfJzowATwUgQbmryXZJivHoSs7txG3E98VBMXPX2hEgYj6saPEATaoJUw6pH"
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
