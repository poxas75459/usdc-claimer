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
    "3y1oXi2Xp3nWji1sfx9EhBvJMzZqVakoDFCSAQZDp6k53nPGQeGdAQ9URQcH1rCrARvVtNzZi8zTc88dP2sJgquD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fW9oFmHirN8kCj68iod3W1jcVNUdzjyYfUoLttutXJxUZpUXZopZgivAhkZQLw7nKf6am2aQxRPAyzeEFBqofJh",
  "key1": "57qEhwiCk6GTDpY2QQ1oAwzZrWZ7uEPuSNgZEXLuSVMV2Kjsf81eHRVNx4eWKoVj3mLjoUNwMvYK1Ee2s6dUguLg",
  "key2": "669bXXiZ6beXwHZj7PKBCcoMdjp1U5zmWQqZcj8bwoKNEmChK83qdyaGYY7qAWJwJs9XEPmSnGeefpX4nUseNsvb",
  "key3": "2Ji5xjtaKnNJUVWfkKfPPhKqrGeWJHMg6NFePLFAn2XRGoUULLAhU7t8vJWwHjc4FVpftMHzDx9TJyMam3AZ2bKV",
  "key4": "4mhX36ENNsYtSG34hPqVdJy1BG3wK38Ek7PjShwCSGoUtC6ReNxa2JDyKmh43jQTu3VNB95J57wmEvv9wQ6sPc9p",
  "key5": "2DqVuHvFvLAcnVLN55Y1Yv9q8hLF8VXeKjJyDxHUEzab5GwuqwdC4eoJUpXaHRmwKHhrL8iBF7QgsrtxiUF4DmdM",
  "key6": "4C7Mba8waGdJftDgiCT9jTZEifumDJ6m9WRJPq7jna6p229B23eXX6j1D8H6pnePDVghmHXzDehGeaHXchz71aqP",
  "key7": "4wmgbSfpUkrryJ1dBb1Jg887hvjHyeVnpBDdSguk48bNBxsE3naiGdG7n1768mitLJb4UHe4oFEPcLsUEwQmKH44",
  "key8": "2znwWzkNWJPwa93JcRKEyq1RCFUtMJ9sy7yFRnroGXmXqQWg2khLSEfseZiJ2uSNnJcRABdGS8GyFUf8qiB5af3b",
  "key9": "3cA3qtkNVCCdwY4SJRBJSaDYkmGD6euK2WiWFCbdVCNVZxbk5mPNM6QfSd1UJRRZGcLi5iu4bWLECrNjgEWoiix1",
  "key10": "2qQ9QZGqwB8wb9w41PubV58hEUU9SaG8WgxNLCTQAwL4QmyZNUHiThd8f4Co4ffAaVY6B7JtH8C9rdievo7GEewW",
  "key11": "34EZjWuxhouvRayCa84h49VyEwEFcztvSJ8iD5pGuYYxmtFQBFWss4LRWVXkGoxxbS3UvoLdyzxbmhGHCySFi5bE",
  "key12": "5MpSZ9abkb2QbsqkRzjmoBGrsrEUzx4gXEMvGGJzdBLMByrc7nHtMtVe5f3kTAHQJZogUpvGhBSNwmZuFPgBLVU1",
  "key13": "YzL9oxA56h4E5Rkhyu731yCBiFbEEmYoAk6fp7u3Z1G6FuXCPmZgBE1cYQKsYJeWL3WfbtrHAMZE1UCN529JGxV",
  "key14": "35yLqhFa94HjQTU8gdgKJ3XUS4vZH12vd52sRFsZRuCHvk3bKGwjeiCKF7ka9wuPRwjt4BzfnmcQDrm659d5Guam",
  "key15": "5P7JuNqVU4rtcHdEbXoWQygTPe1HRJtKR9nhmFxyD3DbRv8otgRqYGTqSZEGaPPkNS5y7q63H9fe1tpeueUtm9bS",
  "key16": "4S1QnAiNzDM3sZ4a2Yq62LeNXX4tL84t4qf1GusNUVjT9YjquUCtnBF7ZbEQ1AT1eHGgcitJA2mQksDRxg4ykboh",
  "key17": "5LXFJFR1RNPAFaUrXQoeta4xRDVgyi2YBRTsDV2vfe6LYtnVQRhfLB3Fg8YH6bNBQZkTpkJBw3LroeC8JLhCmhw7",
  "key18": "2w7WTcpCR22hZAubKfrYfdVqpgS9De5tVTmSeK4rYE4TpuHVnnQMNbmTew2wzzxLTEy6Qxf41WUDC2H2zgYH8bYj",
  "key19": "5CE4tRABACKxvCyh2RJcaxsBQPLUejDZcwu5JRq3cGWNYu4jhcARTvMwJDN1sXkBHGJbLVrCLTRGaRntKJBfhRnT",
  "key20": "4MZ8EsG1uY4CQKFqSSdLGHXTqqzEawbYuZNGgyJhv3gdQVFvcSfLgVMfwDV8hNbzqifiHqAZPNzbv5wqDHpfFpbn",
  "key21": "2Nkoy12JLJdeDYj7EVavU8vfgL4THN9GAy5jtzt3oQV1ypcYkyFNSxBA7ioXBynrjLn8KhYxLBfdvrw8XNxGuqqy",
  "key22": "4i942VHawgJQGbA6jWYyDSwREMhMrBjEEkbHL6tVLJqbJbtRGc6gyNUNph8uZck9y8XqP9T5vZqNJG6ZUpLbWBB8",
  "key23": "Y8GJWE82p3DiU2Paxu2giuzYB7jFhbSFrL2PQvkAjUCFWHmpNn3PiLtPzHVUwG9AgyTnmPuNKYPc8gKQxdLJWMw",
  "key24": "4TuQ2GhwLi2M7qSzqTvRCWyu4Y5DnfdNpXbD2Tq6WckWWY81VYbELCfur9YnvsEy6iFMUMYQ9jV6QbmW3WLoooWR",
  "key25": "34yHUT6mLExKAiFtSQRZPu44sukZcXKTKJ95vKydYGtinxDUF5K3dYqcy3G1P59g8gVCjfMduoTvHcQ6nVZq3L1g",
  "key26": "5njaLcRHDfB28f3EDaMHkSDTkJLR1XfGmXuR5GeNPQ2BY6qVHSoTYy1NUPNZJEtVT3CHtr9RKUPWKSpf2WLdigMT",
  "key27": "3wrVLqoAcuZduxFY3zynUq6YdeWxZYGc8wfirFjyvLAK5KBGgKYcyzT1Rs4V8kW9RVx4yTBYLCjZ54zanQDqGsrN",
  "key28": "DfQAGnKJ743DR8dSnqPjBjCwpVWDKdgSf2uKAT5YD8XFrXiuUG1KibTsDyrFbevZrSgoNLRxssFFxWZDePqbDTX",
  "key29": "44htQ4WuMQsLoBRFvwGMh5zfuxknthbnqeysSkrwcz6pGPeBQYDf5rPEiwyUxpt5PcVMEZLJzMWUewX5b6GpyuwG",
  "key30": "5WKVhbd8YD6HkKpJU8GgqbnUibiURpFxzfBxm287juXBv1ntLJH59Fn9exFQHbPXPxx5uJkNHe2bYtyVYa9yNHk4",
  "key31": "531oX69W6mxK9P5XrYidbZ6mYMMfsYr8GbrAuVFobZVTfUWVJLMSmDuy2sAPUWQRwPwJ5c5pVLnZCBySQHZiHsxP",
  "key32": "3UmwdCRHLbFzaCDkb6ZFVdwo888pF14hbWSfF2XvdsRApjssZ7B5cEirvzGGbfs4m69HxUdu2widzUW9RQjWahqK",
  "key33": "2e9fNwx9haLkB5Gq72BKrsknhbNMrETcwXF8rKY4Ar1vDkw7s4iUk15Zi2drJNpjx1jormiPX6NfDgAm4tPPnZL8",
  "key34": "4DsQVcQydcH6TXcyYMmboDck724FQ2wD9r9Zp5vnUxKRFFcDXSDW2uhJrr6YEnbrW9DYmMb3k8boyCifzoLGeCnZ",
  "key35": "5YuS36a1McShamP6UjqZivve3zqvrnuaZTavhko1GrefYcLu3sBRRvwEvESRXspToEsMjXq5CjQDRiCNfWRRsH8w",
  "key36": "YjSJc5yFpyaVgKkGnVG6jgS1GYRaQVcBAZAoZrfqVbaNTmKmgHZygqPfeVJd1jMyKCW35TmcpXNYS5AGBWAVUJd",
  "key37": "Wj4umzyEbiJNuNrNskgQMTvpgbGyt3xktUpgDdEPni5j3aVGBGt7bH9SRpspREPx6rMk1FbFvsCgweygnZD6fhp",
  "key38": "4dDGoTVtWzKK65WVRgjNWCZLRRnjEtxyR6a3BkyLhrVfKLurGrqJy3Q7YbZL2X7YMe7XBsvzABzxcz74Wah7myV9",
  "key39": "55VJazx9iS1unWMRRqBM1Nj4xqXfkStrKaYrQVjobk8TSwAQYFq7HGQAwUsWz78GEML5LnPx4Kix88HHYC9Tw8tA",
  "key40": "2ainbJhAvZ6SfEDGbQdp9uM777TGtuxN3TqPg6eJ3N7M2xt49EBAjzUcLQzUrtuBdoG6ux6Sd4btoCAmKBMbrr9f",
  "key41": "ncM3av25cKE8KsEYtskjuiKQrMSBJQ8RJUcTPsbKjni23SnYg9aisTr68wr75aMgAKgDTEwdUrMdXLo9nWKKKeU",
  "key42": "2ymjT4ea6goxbga26Lhcx3JUUgbnTYcYtijchCRQaztuCqL1yYQQHhyVMAnXTXMpk7676vmc3PLhA59KMxsmwWkG",
  "key43": "4g2RRmi4wLkwYuenFrgfTAw8bgzP6HyJKP1YL5GqVyRCyguKiB8JjVY1hjsPL6qjzE4KAmjGb3Bhimtpgz3yxZED"
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
