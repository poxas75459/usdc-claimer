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
    "APBkFzRx8r5jpRjkCiYDNFF7LXYdHXe339TfHa8dT4RkMzdyMRcDMaEtnikkMc8HKMEUsotS2jVjv8N2brQnKZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e3mzGhBTYNBMUKURzqzZFHuRvWjcne5dbryxDvU3LHnELa6CRtjc8FNts9agePqAwvJyKUSaU6i27nzSdyoZan8",
  "key1": "31XkDdPXmRphkRNfazf6866fyF56MqbgwVEiYaJxiTUHH189jJ3vW98HjAynSd7nSBWJRMB7X2oMeVfipck1S2yb",
  "key2": "5vEJaBYJJh73fPaszWDQMyxU6C3MDDNf2dZDm2M2cqf9AueUmQaSQcw48pEbzXcsE72SMtN7EDuuqgUkCajBSJ7i",
  "key3": "3jK6xuU9KHdeynweeAtMn7E4KcR7YW65yohuwimoqE7GsdH46gFztUXuiXLseD24UBWCnQiz7WxB8WJqCiVg47Sn",
  "key4": "nwLCcntDhb58vdD5QY3FVJEFnMqbrUZfR5bufLVn9eaRQMd8ssjyXi6iAvrM2K6eVRuHgAavigJYdK2z3K23TEi",
  "key5": "5axFhVYdGiq2t6TvTwq1fef2sbbKYEZC9KYAokEkj8e1hrx9FRdo88uiS8AvdXg7pMGA1LEjg6FirNbVznH1PLDR",
  "key6": "2DjgH2xBQbCUjd7FQtQJPaJHRdGgxHdWj9p9E66AmCePkzoP5chUvahH2eX5iUmkC6MwzFfidZ5ymWSfSpXBvxm7",
  "key7": "4nTtfTgSbqg9owGqFbCVoGiCJ1t4NkM1YjL3iS4dKdvWac95EafQ2gSYrph4mtjj8VWzGJUx7GTu7nc273vyNdHx",
  "key8": "5WMHScLFQb3Q84GhF9DnZtfJ6NSyCGZXXqn4Ep9eDBKxfjY7muak1y3rC8wYY6UKGbdwGtWBuU4XeN79t3VtqTXt",
  "key9": "1wBWg72Dy47gtj1CtiirtwE6knEg1vARKSt8BTh1ytYUwR8d5ioLih7d7w8Jvhswd6PLDeLVoBnqkRQiRpgzAQx",
  "key10": "XM3bQYTUf8thswoMt458LRorTseDJ5PgTwsCcKTUzXKwNihkNugtxuhzEGuHGhr1NzomJKqH8ru4ZMPqupUC19S",
  "key11": "4LSp6qyRrtSUUyc5DMt61TgMHce9zmJ9G6FETNzuJu4CvWDu528hTDFcau6nSGacoBjU9JxufjjRJSjbm3gYFRhs",
  "key12": "3ZoH7L7aRLEnWMU5FGiRjks68NSHfAXAE2aEFNvg1ckkDMoehuuRNQ8k2vBeE74vnfrXDwjyNkfxRB4MMFT5M9eU",
  "key13": "476tjYUBRPx8pagkmUzRtrq8oXrL53kkgPcEkcVfSsTH6jUPxFdfzsWQpUwg9nKLpr4R8qAMpfp1JJ5AqFnrWGyV",
  "key14": "3Ekdjrv3RyndY8DPTL6ZinWnhP1y3AvbRcj5PW3qSCvtGPm2wKpefYPtkf4Y1ECFeVkDG6ugtjHGh69W3NJreGVr",
  "key15": "4AfXkjUq4F5JCsmNXB9FX4oG9yNk9aCvgyZNhUH3skfDwdaxQf7Vhy1HMqv4RsmcgKbRJrTJnP7KfBWpY76whLQL",
  "key16": "3EiUg1SVFrtoqqhQ1TqNFAcjy4YKzgNesijhVXMnejj6xusSorHv2f2qWGoYyd9jr9fs9Xz7D5aPSM3ngAQJHbxh",
  "key17": "vEEJd9Zp2o7mSvtqH8RYY3YR1GSQGxbwwk4AUWXLVZrdKFdFU2dwVw8pjJoDupNokCz1CPeTTw3yLbrJ3TU9zst",
  "key18": "4WdtvmYqvy9BuK12JSnSaMWJaTAwcv1u3ZLpkWkfwRCZpM3A9NYuPMxmmba6Y4X46cqV3DGoUoGenfMX52NnvA8W",
  "key19": "52n3s6isaaTVYyXv8DYE8t96SYLjUCuNSpGuAY1Kz6TojkzfH72nxs2RqrToEmh5rTpEWuPBxvMqnr1ijhDDaDh5",
  "key20": "21HHnrETN1Nqj6itVJX9KvqGvt7BG8DKj3P4DgU5QaQJHH42YSbLxKKsrVA1pS2MxNfGLCWnRcEFfCUW1S6rQLKC",
  "key21": "3xNLUZb2oiz26uSdua1V6TXAH5tiRiJ5vxBnhDTK5yTjUFpmByk4HCF36tV5VHJcafxXcxeBPCFzfWELfJb6Yje2",
  "key22": "3JdDWMUvBZQQa9EXTtMag6aJncUr36HM5MQXJnxouvWqZvFp2RkPdBJLwsu8fetjdnrP751hASiKVxemtUTS7zPo",
  "key23": "4wpHqjA6nRD4LDrwSuVybnTGBoojfp2oFFWBtjc94wmYNHuV2u1xASSwSRpP3W5kJJDvFJHJpQYPrWXTbDcSAxsm",
  "key24": "44qEor1JD4Lb1TMsV4u4XQZLiJp6z9UY6qfctuPDLtEbeWhMqq7sq5viKsUXiEWjRDJMVvbJGFXdfgQttAsPkvGf",
  "key25": "5rqSeEpbhzhgt8Z8KchBSzjrGot5x15Hs2o6FsMd3Yb9V7b6LxFf8sDgviYBuybdsBGRe9bcLCmoPnLH9JEpErL4",
  "key26": "5PWkEgpCErfQAcvXMGwJbd6Y1UYhbHXqSYHV9XnGb1aMr7ftjWgVpheokhD6HJuEmQ9z3b8xVJMRioCeXGwXXESJ",
  "key27": "4tG3xC2tshjNC2ASejVref35v7FuwhMFa5BNKopTn8P4LRgwYWRZ5LpQq36sTgyNNbSdbmkCfPfB4tgK3nKPPsdJ",
  "key28": "5bSCSDPSAfXc3Q2SNFQ7zWAxpSMHmk5ihv4GkHDhXcne4tHdBb4Yjk15T4zXe7XzSgHhs1bhzBHyMukFUzjctSt6",
  "key29": "2hYqBwC49G45xhhRYmJ68KHLjhQz8NHPWr7onPoiF7W4Nojy1DSqsNZnB2oYmvcqwENJBmpkwPa78dFvzvGbn5nn",
  "key30": "3M8pHGuoNHT4QpLdsLcZGS1ELBQqh2oymNxMAaAV3N8TqPRRRw58g1n6YkecLd2etnaiX5pUkaGFdZgHVXJpqqv9",
  "key31": "3hsqKQj8CrZsNQg3cHgkU5J8QPRJyKykW5LhSwyxT8RT2fRDMdpcvVj1rM63APxyTwvqGbLyA9AqA76RjQq6d6eU",
  "key32": "3CXzXLhg9YjLanAXSNkT7nYN2SJuva7ur4Mw7sxNLEr3zmctkrscRUUtoC2UjnqMaw7V2Ry5k3tfsoBBVzqzkM6v",
  "key33": "2pj5afhHCnjvBA8MRMZZfr3vVvSeT3jKBAv7cv2shFyw8sXb6Ztu5Ks7tJpA3WcDZpkrx8N5UUHp1Mypid3DgBDo",
  "key34": "2xQw6XtyUkRe97NBdVhXdBoKgmjJGBzMcsYFyaeW98EuMUB6emFRZrU5iMQDniHXr4mSrLc6t8icxpFFT32G6hAE",
  "key35": "611VnnKwAR3hbp8FsrnEKzu6zJHBEqY4k7B6iD3owztKS2y3ibx3urrmLhaFm9skduWeFYSqp6NE4fRJG88yg5Xp",
  "key36": "WFYGpL8r7W1VARJgdJDKqkpvecwPNuGYJfGH63ytVuTZjh7cHKr5QDVty9UZx6UZ3MkqfBW2cZobxagwni7nGY5",
  "key37": "YAony2z6oYkaSKr5yQpjGmhWWpW2Dt8X9VYbpNrgZ6aN4FPWCWp1rqECPi8YWyjFzJgpmi1Y8oZUMsfaJHqwHTV",
  "key38": "3xqLQ7ErkfZMoJ3FS1HCRt1G7ZkJuRncEc9KX57WCCPh14oV9MHqZhCheCtX8KrUUnkJfH2CRnwZgFk1JYX6G7dt",
  "key39": "4aF5tVHjVM4f2hmaqjvtTxEzX8ioRRZcm4S6tXPjA4dXb8L19DYim92bmKUUKe9GqcEueuph2JqGzuo6mao4n7jt",
  "key40": "61ghvqfa1cmKCod24c8g57t3hRvmQhaLnDEuTe5GHRYPo1ywazJcgwWoUTjrbaPPkqyBe3CazzRU7fiA8GacrA2a",
  "key41": "gt7szVQRCtMy5rjLGWvLH752CnSbeCw3YRTrT1q1nTijTjdQAvYFZyHRDyUifHzaHiWtPGpT368FTCYDufHWPnw",
  "key42": "4SUubbB7tJ2Mqt6ymtVoo8eCTvzmGBgt1muCbdVWECNf67uftfs1LNZU1m9CY1bRn5DQYtiYj2J6xPgyjbPurArk",
  "key43": "2Dc4GJeQZekxBWWxQVgZiXuSVh7pAqBj3wJtWMxmEf5ZDTaKQwH2hWtk9uTYVvxwiUBaMSxxnSch81shLDcGRkcd",
  "key44": "2bPxUZCwPh7KzBEr3GUfSCBc3mE7rYnepLJN77Q1SY19TEvZ1DgaqBr8EfWhZJwdXqijCUfhnyQ49zRqkfPqwewu",
  "key45": "3bW2w4GHMTWVBatmQLEZ7DfCMryNzst1xCrawyd5tfAC9Wv7Li8oeNUfN1sAaM4o9Zm4d16kwBJBLLpFqNrvg6Yw"
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
