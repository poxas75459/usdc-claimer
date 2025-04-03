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
    "5iZ5TzDKmwfZH62MozWLG4BMiKMkvWtZ2QLz4RCxtgGnkGNsX5gv4e8ZR7jsk3fToYMJNisFtdUUdDoPYSoJuEEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xqkWrpzUbnCZMScQsF75QSVseWasenjigUNPDVVXD3q5fxQ2bjiKGZPXbMcyyvJV6ZGFkDFsor4TjzCA9YfFcWQ",
  "key1": "VQBcSDQPkf2NqdQDEJPDVtNAxwJYRhS5bAThUZ6skbrAmaMvDz7dsoxnoRQcKcTGwbqv9Z16cH6SwaKpDUGVoMS",
  "key2": "S5nw3U2qpwPuEERwYnnRZiscfDgykCDPaYBjSK554UPpCtZRS2se2nCJHPhCPV3JXCsGkcibm3YXkSv5HKkKCe8",
  "key3": "8GRXA76RXzg6niw4Xe4TpQnmYHjpb9MrmrgaqK6aWu98gk1Ywv6aZFyjwKhXAz5HGgAps55VYCyhn1Wgw1nXpyX",
  "key4": "2n5nhxwvyyfp7M5sUsLoAjE9ZvMveZHo4F3oVqvCE75QBTD111371rbGDAJUYf5U3wJC7co2roBZsvnuVmffQaLK",
  "key5": "448rNj4ejkzkFrzce2iMf5ULShARAtjtvKurATFZgiMtwYY3pkQQRUznsVkDSzgJDEJZi9spqzv1LQdcpmzukJfm",
  "key6": "CHb7tfLgjT8aqvh3fQ2uvCPwUBMeSugGenQht1dLKKLzGPGhqZwpPTtAP2hUvx2QxgPZW4QkyxPMWUvmPKkAdXY",
  "key7": "3M6zzsMWAhvnVE7b2dibk7n9JHzNCXfnaQKY5zNB59dH9A6NVV6zap37fHdss3s4AJTqnfGv58UuuqkauhPnALif",
  "key8": "5oUeti2Ewo6kWvnx9RPHFGT6L64cpGUV4MPjE3UDfudGpHBWZ4Lh5vqARbZAsRv5uZJYGqdNnw8zHoERSswkxJuN",
  "key9": "2UaHJxn1QRTgSkYdevtuHBs3UZXzsrCTzyfM5PvA86GWM5n35mJ6SSZcfrg4xkSoetc8DhtMo8itVayUJCrCAPJk",
  "key10": "4ssWQxu8BLTtfAaQoWCmadxsfZBLnrsuC75vcCqALw6VPN2j8KetSB8FrGa8oz9BuBrLKo2tRssHzKGGQzKsRhe8",
  "key11": "GG7GBt9ranfN5qQmeLWc94tHm8fpr6DJzwxVzPXMuQTvF5yrWJjEtATZFspqjSr4Nze3TXY1PxiAahKTvfZLBEr",
  "key12": "2tfjRguYj5bBAzWateLHX7k5mnyYeV6MZkdnCtm5CuLSH3GmZzvcq4Y5er1LF5oo5FdafRNsRdGwGtNC2QmPkBoj",
  "key13": "5MJQVB2UkW9dsdHLELhQhPvy7nDUF2LtfnwuvcRmznzfeqdkj3pDpVkYeaQBzvB1BdspgPakHX66HQ3RqTzkHUhV",
  "key14": "5xCrKPHcU2kH9mBNAXtcnDUep5WDm3a6cnkWwQBHPHm6Jz6XvU6FB2nc2zJdmTLYnybYYDCvXrFwSiJFYP21mR68",
  "key15": "5uP8q6duMJxfEUunyS3Nvvhy1t2FpgkDMY8yukMsP893dhapSgndfmpWtTiEvbq6DqMryYMwy8CMsg8K4oHE1SPG",
  "key16": "3aFqHaMticdYGk4R1WmQEtMRXUngoPaDA6AQqFwK8DE2B77nzhtPRE9J4b4RYoRmmTdGC9aLj8cnjy14ZMKpnvSi",
  "key17": "5m15ShpDgS6cqGVQT9nimhRHBXuzoERCzziTg351NonmawiX19sNmhpEvn86fVHez9hnSYTKuqqdfc5ni7fLXNfC",
  "key18": "31LewXPbT1mtg4hyX2V7AK3UCLG2HJNWwqfo9jTeDjuk6yaSHujpZrGPpvVsUGwvX1825yqoo6npa5WgZ4HVeZ9R",
  "key19": "zKRG4CLJUtCeNnoZ4JdbPHSV75Cd8ixuTD7owyzvnywRZAWYtYw67X2g15CTaJFSzRedyyw6YJRKkU3vwD6CLWd",
  "key20": "2ZviEn1rcHS7pR73s5sYuoixDqzgi2Pn6WWm9MnpdDhSSq1cMTzVHQZxVHsYaoY8nBdvj5q5oMr6Wb2Gw5UyoyJJ",
  "key21": "3MdWYA3ZpfEHQfibbYo9bv2UHXxhKuF3P4FNazHbqr5RkrbUMa1b2JV13y3Tm8b1GBgGyFiFCUzZ7gKDDcZRNnyi",
  "key22": "56GuF7MuJi4wua9FJoQasf9C7XnAyexGNGWmkTMdBeNHNTJ1xcdbj17oiZ4wL6J3YWJ8iJKin3ePRrVKG6ME8FLH",
  "key23": "2ErPs5itvwc5UV8tgJtamrSdWbxLisXzLxCvHqS191f5gDEauaFsfmrkZGwWeBQF2ALoFyAXGPQXUKfSWzCHwpHg",
  "key24": "35Hi1h7eFBWhNVRCiLBA6YR7vKfvnV9PfFXfZjga7NBPCWJz1QpKSpgj4v1hsC2WZWabxsucak1rtJZvtxWddSBD",
  "key25": "5PfuQQoHb3aZKvrSKc9ry1yQ5EXqtitmeYVxPfft6t6oj6Vc8YQH9ksansGtY9Bq9mvgKa1yCo42Du5oDsKB5xFH",
  "key26": "4AQ48VHrmuYB3sJxUVxjyLj79fCmxpMkkEX9jpmnjE51v8TRz7SE45x46JTZQNMHdULiZH3jtEPvCJ2d3uyypMXJ",
  "key27": "Gy31945YsizQsxXBco1DMDLeJ4oyAzipS9ehTx52iNTCfsefHmunLXxopptqGdgJr84ATxv1bB76kGK8ML16VLY",
  "key28": "51AErFTSYuAKrp7XkzfrQAbzLTrY3hxYdbBPMKbzNTGzxvhZ8izv1KwBE5HTiEwXuY6xBEX4JiBkcEXtuec4a38Y",
  "key29": "3ouFqajHzqpiwJjV5fBnKFEbcd23VwvxnWgA5P1rKgPXXSFiGb6oybdCdDPvUZ3JSfoSXiu61P8R6FJ5Dwooq2pW",
  "key30": "8LGPCB4DD2EbUyuFfSJ63cdPKAN3Gcf3Q5rgM4wSqQ2hCAupB48PWCT4hQuNTHGR1ZMpCzvEA83n8n3V9XdcEhk",
  "key31": "3hMrbgyYa4qvRNyW1Nex1LGb6LZFafWzjJQ3P2sssozitkWRLjwBnweJnwkgdAxKZiMcc6B5HzzEa611FyHY8L9d",
  "key32": "3vVsBKyt58sVseepBFQ4hNZcSfJLqPpbRzdRVbzVmHgZaJzqbnYuSi3ZGJpqEQc3TWNNbWzfyetdAbSxrnawaDhw",
  "key33": "eyq2SXM4teinvnYQRMPdggLEvHGKPjRL3fDxPmUmviBx796k3ERGVB4L7Mz5p4b4ZR4M7vAtYJzWWJpwrXqyKkV",
  "key34": "5L6DVhnDJQ9teBgbz4qGKAC3q5srsPGqBnjqiBZPtBCrrWBeDGiKMQpB4T7XDHfWzDH3zF92ZSucLy6epVUJjibU",
  "key35": "5JTLbDnbP27gMian9dz3YY7gHbRycsZ7rE9aYRkVgGygRjw4DcPqzq8WWd48sp1HXkPN1XpxTDdnLWcpCU2P44tz",
  "key36": "5bpTJVEQH7BxqzWDGWqzBKgwmBjW9w3kcGkYGtr63mC4v4x46K59MnavPAX5JgtDdRdC1f7t47nkPqjM3fssNnYx",
  "key37": "4MnQzMmS7cTeywxRXGRfmJg8Ti28BvBhcxkphbUGyvyzehPTAbXfFPrmWmJiKt1xAsJxH4Mxebf6gqcjHDgaHRp",
  "key38": "2qoQhJc5WW1abG1QQQhpefehLgtMyPm9ru9bYK1LpAoLm84xnQ4YpQkpUn9RZ1dd2sNZNBCzMNT8XUz4Pvb7RaN6",
  "key39": "2cA7UEcWpsyDfVJ9UyqFTi8H9VRVn6vDXjsPssMt95QdwdcGegN98Sbk1kcbzuDe6WdJHwXJ9PFzHe6NUMspJBb8",
  "key40": "3J2RQdfWVrkwz1QPxQ86MDhZTFZMYdhBrYc9sH9w1bTh1ZWCgPceTJEz9Y9z8PGY8QdC84Gco58YiaEbyan8769z",
  "key41": "3pnThPRGYZcsM2xdjsSvnm5o3Zq41c9BYnz5qdnTdrV4UY38csjrQBxZudaKJRJhEDPy3LVFpjyS82dzJYfi3SY7",
  "key42": "4Wsa5FWkvcyV4vgMgzhcVyZZySbGLrmDEZTAJNuAodGyAUhMzazxjxSgTaevhcM6qTEEJiJy4Wg8JfVtjNrTXwwA",
  "key43": "NABK4Zoq9JYsapsbogYRZpugGZqiJdLbN9weopWP1ZSNF2PyuHYwyCR1DbeA9bGgxVxqih3homz7GShqor8gCyq",
  "key44": "3dRP1Z1GT59oqCUd6C7pQ5YXmDkw32MBVVQt5iaxCWw3yarxiWpwwVwhURcatXYd4R574SxC6kGpUw6YqpQyspbj"
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
