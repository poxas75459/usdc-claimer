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
    "2kMapt7sra5qFTtcm3LqA3Tkf3Y7y3fBfdcKquCna4rLJsmNFWPmwAt9QBkFyADih38wJ8wmbx2BTjQ71NWJDxXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XHFhK9ftRCa9GaUrFUv1GkHfeqzo6MDxZWnSsU6tUSVnM7raki6DshEVn39wh2qeaoDKibcVkH5tFgWbhLBrMJ6",
  "key1": "YA2Y8D5UWtXWi4MMpgf7ENCYpb3sCtZn9xzL4y18R5pXVqZysfgiBdmtSv5sAantebL3KSCE7ZQXoXzyzJa5Q4G",
  "key2": "5PaQcbhmn1rt4q3N6vskcwcvgxrBiziwyTCvKqrfLnwAkwAja79wRujusaGAoEEa8LLniyUCTG7gW4u6CnDwdswY",
  "key3": "2uL3AdP9TTYiF6mZTsozEB95DFN8pNHP82GChNwp2mCeL9jjaDv7fLYCiQDW62KW9VuxmD4P9Gox3qDuALbnJrXd",
  "key4": "51Dd7iQsYzBUdUewpJa3fnhJjVSjzsTTwjBM4842ogQjYuuUKjuYpvdczoYxSq5WfePvq5dDq8BG7YSZZcxxrYCT",
  "key5": "4M9NxjQqZRVj2x8Nzx8CjqjrbYso4qxB5DaHnbDisYrFkVZGGfwxhpBF6UuRVtsco9r7dRieBdsy6BUhamy7KpcD",
  "key6": "3JPHxcTAHzphtXwG5zmy46ZcW8KFQxjnDHHdmg17M65qmBvqrEeFUco6LxkYk5co3ewtTdqGGZ9QnnCMgG2Rq5H1",
  "key7": "5K3bSaBWQVFrdshtdVW7zHbnhsnEe714jgcdoeCuJKESrKhV5U25eyut7HtaNPywkVBkvxcTXVvjCsewZkb2Pu8m",
  "key8": "5AZrBLVC3C3pJUhKdWSk6t7xe1UTL9w7YHJk9WVWn4mC6aaD4fvhRXkgADxago2dVUKRFE5iAo5fv3YkcGNqLGAk",
  "key9": "45raCc9EjC4ygnKeNxQBnYNi9RJwKb51Wi2PrvoiieiLWxRDjcMNsCXVMqmMLrvt9VxySNFWwRazGebhjnY3nXMR",
  "key10": "4ivx7YgwCydmc9fXHUFh4u6irRKDKY56WQdXUqyUGHkRmp6gG6gyAzzbXk9jETnPhteX3EQGURsZYhPgdaH6hWJR",
  "key11": "3saJdBb9DyhKYNB2Fyi1HD9vjSu4cKcuJEJgT5CEiD94d2rjTqNoUJgmY57wFA6dKAasZNUJYsZ8XoNXN3Gb5Mob",
  "key12": "1pQBBJPVnZKBhk71bW6D9ndPWgSLkupRK5sNkUfM9spJMGE5CvhYJuyQ6KX1dU8ScMiuQAPbBvdgJHDmvKpqxsJ",
  "key13": "5inEj1ogWbjRxM1aY5aGV7K6H3Q7oczQg1oWzyYcgHGt7jybtTfsd2wx5YMRE3MqomVGckXyJTC8XUpzWspwazdm",
  "key14": "25CLcNYUffSmn7ch7YJ8fP55DdtQoLYQnTHg8YuyVqs1jbigGQ4t1EYE2HP2VLYez8oiF1LrtmWqWz4PMgeaYzSx",
  "key15": "5mkkK4GyoavmRLhYWPyQ9PQAJ1tukXFAe4zDjMhtnGqv2jWxQRwcTvkTpiC8a5ZUKRkZrc4MXY2fPoNBtHmz4a13",
  "key16": "2rkhDWuWKDwafXCWE3DutVBkwWvsoMYRPz4vjhK6oPrW3bhXhLjy766mHmp8ZqaXRaavXuDMiChwb41yEAjib2H2",
  "key17": "znCUkcySVWD45US4eSPVHVrrwS7kjgWvaWHexn1VSHNLSSsj3z5Qi3JA42pTwJXNvZd55eSPQHTPDzMZd8eyG7q",
  "key18": "2y9kYaxgffbssLjLy9L1supgBSMEDvt15qdk3rgY2gSkWVqHiwm7owqVzCGAspK8Bi78WCJYZHptmCYEVsK5dwhz",
  "key19": "2QuQyUiQmjCoogJhWux2K441TaLk8tuhDGHkYjDggUbmLFVaSN5AFtr6bKRTRAkhGjjfXvDKy6XmcQ5t1vN593LJ",
  "key20": "3SHhMfqSfcKy6f9h3eNynnidXEX7iofj2bboPMGQXKWnAMtWjkxHjVuDZ3VKoaJg9AihWS6mG4XMExo9TTmxBU73",
  "key21": "5QwCoJ3fWFTQP1tWUfJBU3BoPanrahH25F87zmiF1oxAUMpPgBUpnvc8r3pV93cUMZ3GCfwUoprPJyr7hYvVpiYE",
  "key22": "3gxQgBsREqMH3XzATAEVUnfNRmo4vWgn1E77E7x6ps2ELcBuG2WcyhfLdK6wb96nNK3XNEyGcNJMBCDtRL2MEQYq",
  "key23": "4LSRw3emkFnL8GEnjvCMzxg3tD6sWUEjFWH4VfE7WpmRR5dg3SEax6M3jmE1s2whe2kAY64jrZdvQinqrammukun",
  "key24": "kJFM8h1sxVZYay3D2dqG5nzmun2qbZoAKCpvjeijGNvka8euXf5X9Vbv9zUJZfZMRJTU9J8mb9JCbUjTdnt7Ass",
  "key25": "67rWTQ9wunfzRwDqtEtiFim4sSCvrGanvHx7Jbg9qySHvikzznaZUNMQQJPYnkfyGeGb7o9rp3Uoww6tdgUcsvVV",
  "key26": "2c48uQjLo3kUwa9hXAsRAnWuMAe5Yv3RyU2As1p3hq291pUHmdZsfYN8AbVhcvQvsP5MMi6Qn4AEDdBJqyFJo8Pv",
  "key27": "3QGcFzu9M2PPWyNbKTPXcL8npVo6rM1baKffto8sW8sM2UY8vLWRYjsphq4aCuTuGGw9DYu8gibFaTLnQRzQogmL",
  "key28": "2BGeyM5wHdVfePwad8io7kV63Lmb8jgjvNT9j2R246avyVYNawoJ2d4JAawYUCNvud83nkjK35EaaczwZqXBcp4a",
  "key29": "3FH4uG3H8tE6Rcd2mc4h3Uh7YPvS8SSVvbFyzv45N1Wwuc3DotEjpHLrh1Lz8DPvjiJfTk31Hqnbdkn1ZHkSgL46",
  "key30": "aNcM5G5gwhQZU5X9Szyk1GRvoc48zeaeYK3tgmjH1JMY9m6kq2BtFoQ2PawH6fGNLwZ9YB6FP2p7eG5iCQesDmt",
  "key31": "2rrsKoupP3tY8ZXExAskFKHdKQvXQnRpSVvKN2m5LnP7gpYcymEUCGajB6c5MvwmX4NR8Hbw9ZE14smFAqX5ptCs",
  "key32": "2ofXnDhxTMHCqwZps1pELTmhtJupZVrto7GFiQw5yf1bakxrQfNT23WzmjgaWcP3RmLoLvj541Ljvmttq71XJ2Hb",
  "key33": "5jJpuRZ6ZfnUzjkJEhevMSgEVB7cSiS7ZKmVczg9sMWDBeNfQKJTV3LRC2kvJzS4qs3G2WwF8hRQDyg2JVvVNJ52",
  "key34": "42GsZce4EexXKLNLCeATpRTMb2sTksXn9NLqBUwuL2N6uhB44hz1fN3eFabp3rivhGCKyzwXJ6JQi423fPmXRBVR",
  "key35": "LTw6zekdEuurapXnqaa7HqZsyLaXMWiq5uitVe7pWm9MMoi2AX4rQnDzaEcE8oeXyLALRKnMwCjYELUgPEhnV13",
  "key36": "4sRdatg7zXEhKEHWGiqYfCsXvk22kkZ1y1dAQEaWQBw9rrMDfizqyGScbxtXovZCDQjMJnsxM6VwMDRRyaUQMnGR",
  "key37": "5PvHK1ZHhXUNhHVRfpc2AgqrcHYQ12pmWoJr4PK2EH5E3y8JSgtortGeEL6RixBWyYfvuiuC9pcrEfuAzHTyXpYU",
  "key38": "5DtGK8RLx3ioCHp65gHMLS2rveWwEGHNYRidz32Da3J5wJ31A7N47fM5JqvWJsPpPBxBMFrWQNULvujcUmqhG83u",
  "key39": "2asghNYY3ecxUycVBiha9bXYobAxrnu2g6iHftb4VCdqLTNcgfhU4dUFL4Nys89HTqJid1Sdgd5Eyj2eRaBN3jCk",
  "key40": "o1nVLQQJRdDTwhm6xmEVn7L3T8NBya2AVPc5GaNWYS6jn4eriurdju7LcBsUVcyFK8ufdr9BPB7YbDPVrVppdLX",
  "key41": "5VyfPi5DNNcx6HNhxWbU5NoQ3CAvJEwPW1Jm3kHf93feCDA4EzXHM8n1mkH92EZn23BjJb553TEg13YF2brfNzFx",
  "key42": "5dh2gUd8zBGYbF5HgZWhcE2n14zYmfTZWv49bvaUL3ns8daSSdeZYKUoF7VWFo2NXAKesSCj2uY4XBM3QnE9tMoW",
  "key43": "4mKiYH2jeJ6z9erUfRsQ4uMhYhFmXnGbu6gRQVMKi5QYHREr1dLKqQFQ1BRRGpv9BAoGXr2KzYyLtoTDR3sqw6uZ",
  "key44": "jADsp6UcGJUwNeDiUWjTuTFdvDzPAAhdz1jHXuQmBSLsyaKAn41c8wf3qn3MMtFZfUUq5U4NLBErG3NiRT7zMa5",
  "key45": "4hhJsPBU2kv8nw1b6CCkFHjwbfyWfAF4W2zMaFkDEgj8Rbp5MqBGEpzBoBvBLSYi6oUnP9aCyv4xioXAZoELVKhT",
  "key46": "28GZJTKEtg8VyHjvC8dKGzo7FDW4kX8DoZzu3jh493tMEgpHnmRa4hGenpMyRcVMsrR591mnDdLVzucJK31w81CJ"
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
