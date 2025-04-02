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
    "29sNtsqZjNj4tdSZd2NScEnZYTeVHgX7oaUqGESTQzKREBmLeTd8FbJ3DVNMZiAExkztq9N6Z82N42sMLKvkp6Y7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u39Knp7UosetF6ZckVytAP8ojTs85fXmN13qRpUDqANgf33BuaCcDYwoPmSjhV26JPbUJw9VaFDuZ6AqGFZse6M",
  "key1": "2FWZyfbyA4ATvyobPBpbGEcD475eW2VjGvUgTWPAVFRxH6iguSNp3N9A4vZ1B9YQFgaaEpZsMayijhQLeuAoYkCs",
  "key2": "4ktMrys5SnNCT2FxcgjAyxQodVyHh653aV17fBnRmmvTDkRT5yVpftxuBxyFEesTHaafv6ZMKuLvREgEPLnKoMai",
  "key3": "2eut9NWrjgeFshuvkidTMQUbLfH6HfbhLrrR3N3u9g2v95qrLHHpiURJtZUE7JJMgyeBqHeiKowWQ66B4B1WTu3Z",
  "key4": "2oCmHyuBFbKyPRoqwXKDz7Qf3bp6XmgA7R7RvRNVBsUJQpBs44FtUQ8MEA8ZLgufEsoQyQoYXpLitrPLPRSTB1eZ",
  "key5": "5QcxXJAJj6qToUD4H94BtQn68P9madgD86HUgf49KAT8jtFCNou3z9LLLtFgjBB2cQnahK8ipn7pa49Ez7CuNb7H",
  "key6": "2LXtu3PnQ6XeNLxLrms8588iuF8UNv1714L6SLgSpb9JCmGeGr7Xm7DGsfwHeiBjvATkXdMGNnQSjcym3HV7hyh5",
  "key7": "3V6zbuUWsdXdRuLbGy6prgfrQFLWNz3Hvw5vfwpTgnDV3MncddCPGDPaJz49S4Dtqp4RVd1X8bh5bbKoYjb1g5eh",
  "key8": "4umAd7oJVAcUPdH4Hkr6RhBATAqPYnvpZfNB7LZdw56CMcxwTDNwQzreiReAhmWzVpYP4ge8XMyXUhsNHnwzPERY",
  "key9": "yBvvMHLmGAC3WKJrVHFtTvt58b2sFTAGV6yJgb83Cap5tpprRgygD3DLPpeYL4fKAycUW7Z5DAdEt2igszL74eK",
  "key10": "5WFhy8M98oiS1fwKHcLmDbSyojorM8Gb2eDjx1sy8efxWgyFPEnVqTiwGkucLWp5LYCPLqrXVSAQJoso8LxrdWfS",
  "key11": "3QwwZVU4iKSQCtk2bqyJngtd36jtpNtApin5P7ru8mwY2AJVenL1MUaRnxJZgysNfFN6FSqx1HzqyVovVNb5YajL",
  "key12": "2Rwa8FFGnyW63saZ57MXDphoyoWYwqP6H57xY9Xb9FAaDApkULVrPAMGfKs2AVfJmBi6tSsmcQaCSzpNqUq1CqCE",
  "key13": "5agz5gCNWKXxwetXrWLPJq1oWLQtwn11DuoKuScHgfjczrn4ttA9szyYDu2eewT58793GzLwCcSMScq2i7wjspyt",
  "key14": "2qTyJVE3fh42Qp6tm7eG8DGnSYcJCyKxh4Uv7MnRMf4CesMbNfGSVP4coSxPhCHBr4ePqKtEJCogGeGbDa7dbbX8",
  "key15": "246jSvPXVdeg7AtWuaBS2Z7f9yvhF2yReac6Lx5EsCMHyxmrTLuqU8B2Wx62e7LMAsgomKr9J3RAH8qm2W7Cad2T",
  "key16": "3KwPEtNVbX5NtvrjsbzBVmxvUXYBJD5UJeGjPC3vTMLaz79h2p53nbSDe6GA6MGa8mGMu1DFMbRjaXTqYAPypGMC",
  "key17": "3Kyu1UVR5pm9dT4drvWgpAfyiGnRkzo2zwzg8tVxLiqaB859r6RxQFh2PK74dtNUG7Gx9ZhCNqzckeuoFL4GAfR9",
  "key18": "4Jb8kSQjFqX7FoV4pq2JvsVP4WvkGmAB71vecRGMThgKZnkQ4YDRaACBxoypxMLUqrLEpPwxvxgQKjtcN5D3MN83",
  "key19": "4cMD9sqjnMoLTpPrfkfFitHUqYr4TdpMepgPaHTpnDPQkqLDwrG4ab75qDwLuSRJwLJ1FLYGRNxUatAYYSF9akd2",
  "key20": "x8TzZchwQjjJ3oqhfjadKpHLNQZMKts7iQyHQdVsLL3WHTt1d6TQUaQddxHJM73GYp7zn7DQbzgkMuyieoizqmr",
  "key21": "3RCWtvJqgbwTWn5iesMkpM3tbnHKW98e4efYweotJxGx4Ki6g2PzQmh2ePsmrsb4owMHpoz2s7UkNE61yWwsCowQ",
  "key22": "3Jd3vx6SyCLN6CfzWa2zKPo3P2dzUPURxhUgecsxp9tx7p9mDffp9juxAz5cMhErWheKbDsCy1GT1DZcdkwYuJvE",
  "key23": "2cQbKLwjZjTm4ZHPQN982G74ntBJLrexW5cqfDMjgqEMXjc6mwTiLcamdNwH7amLdy7YFwHJd91RM5pYYoqUAnMv",
  "key24": "3YP4p3iX46WBKYhLZkYrNvfhAs1YmRVEPJy7fFQz7S4xb1WjcgfaGT26DdHtmL9tSdWvNSvfzLNFwRi7UDQeR15s",
  "key25": "cKvsx5LuCAg3JyKRcHMZZBoBdJsJkCJwLT5vZVNiFdJt6rELXVfFV31Lo25VKtSjx7cy88acdgA5RnwVvGpBJsc",
  "key26": "3LrGaCv1tqje4ukPY2VucAzzj1oh1UFQqPhKyWoRgZjT2MPEE3veLKGBqzow5v8Fz2Wcq5sM8fDtjKzhKkYMu2gA",
  "key27": "28Sz7VEtFMctz6QVmt7mR4YMZCasEa8jH568DVP7iEmK6XQSVfCeeZEQQnXVdch6o44KukUgyMGytdM9b1F12oNd",
  "key28": "2NvnhrAYuwhbYYDBzScBk8NXShUmexyxiCCNQLiMBPvQxJEDaShdB4uDVLf1hhdwDjXSWvzx7tMEZQjmLzxTJjRX",
  "key29": "5U26uaHTwYZoFT11VXvfvMQ3d8C4juzixheCJEGEbCgJ44ty74u9SBDg11hPNbj9hQVSVD5vX4MbnJRVpgQFeYWe",
  "key30": "2VX5UpAR6ivwX5EthRFxTFEmrkQ5hcaYTBtLYsHY2u7GnGc1zGMQvMbhcQh1T7NfRCd4R4Sf7kGwYByZb2CRCEFv",
  "key31": "3MXGuxzRrZv9cZKvMzeTxh3TKPeYRCJBWhEzTLCakLqmYdtEfc8dZ7r3Ru7LWyqmbsXb6twKMxQsYYseKsS5QbKf",
  "key32": "24AVPjmd7NBK5nHeZrBvNvWWCNqYQpRqzUeuQMH7GbJMo6JpYqRhLuoceLQYZefksDxpCSB13rBLQQ4Bnn8cEt3b",
  "key33": "5T46knHZhExd1ZmNj3eRaX27LG7totZxtbV9RwzXwKtxz85VyJvxR691dZZRJZYSv8PLQdHP3t8EY17KoJN99EsK",
  "key34": "3aeNP8x68WozXKfy2vXjTNLdJYB478UnoSGQJ7qGsDE8h1G5uCifaNLQ2vreF4JJwAHRBTJaRV96ZCugh2bvCghh",
  "key35": "4TPtMJzCR4DRqKKUa8jxL3dQuaWPrHuxBhAN1q74uvWgnWLEbrzLoKoxyugnjoGiPV4Y9hT3qrh4FpGZbSKY8qnx"
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
