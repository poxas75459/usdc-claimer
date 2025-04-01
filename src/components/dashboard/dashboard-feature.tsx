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
    "vZWLSshrbB4SKJgmd1XBDCvpYNENJ8irXHiPjk3bnD9vJcpT3FQRMej6PFnZyCFkg4j3pw6efTDTrFihFovHDNq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6h3wdHZoLy89tmdjfYJ8Pdy5j2b1JFmxttcvsFaaFfZcWbRE3PB1BoDLzzTfmLDy6Q8HKmGd4iaBkQReXzGVES",
  "key1": "5KB4qLuXLzqoDR3HwbrevotH7nuMn2UaXBS9DSEkUfv1m8QfCQpftEHvkDR8NYVjHvAtAAvpCT2QTyam7J4TeQDw",
  "key2": "4GaMvSc4G7wP2mMFjj36Yk4B6ZS5YsjPmq3Ch19ejLfAPY2JfDhvmMD8MQXTnj5kw9wuHiNvp7FUUHDU5iTjUSzY",
  "key3": "4edwhxjd5cDp1vqJCG2xY3EfGaYTgpGpgQemymahtTY6GzWsvqy6pehhSgZowemesJHXzpRiBVzqLBwe2VUtcKCX",
  "key4": "55G9fCkwQAoujoZcqtFbcUNtVEUXzcjkdvfNJKLb2BrnzaLzqcpSa5QmhjDifYzWANbkhYqFoeufGszGqNMxrSjT",
  "key5": "5T9SQcD1wWoUM4hNncGLSmGw9CBxA5fZdHAFNdXVoPKFzKb4ZhhoZv5xrNCu52ZQM5dfDrTJ4GXRL1Ar8KStLJ3U",
  "key6": "2B6Q9CSa6HppDmbJF78NWYCHzja7MzEvcv6AgRVLXGzCa9mWSqdn5DjZSCQ9Yp8uJS1hwVo9qJQCBAW7bJFZg3em",
  "key7": "4REiAoLck6vRHi4Y6jgNRDaqq8Tp5eRReeew7WdMWxUtih8UetxdEJPDkMfJTUSD222JkAW5xqrMSkaag7VL9A5g",
  "key8": "2shXpjx1RZvSvuE2TTtEJYC6NH35rJSFE5BhgLeMwbTC5LW8JdQ1RYkQvxV4wHNi54R43suQbovkSveyFEX5cvz1",
  "key9": "48kJZoNnbogo6LM4yaEy4wt5v1sg4PymDZXRtEJ28cBuo71fUsTrvWGsqhR4TKMeUu66hcyAvL7P81rKRJmHyDD9",
  "key10": "2HMP7MRfg7H1m97j6uY2oLueSyqoeuB5TG8hktYbaaXKJSHN4q4MzxuTufHTUs3sv1wuboQCS3HejQ1gK3NXkk9C",
  "key11": "AXaYFiYEvPVthNko8UtgmryR9y7WKodfbELwjQb2F26JaW4jXTTqNi2xVfPHVrA4fs6pUZkz8rZH7jaFVhejbDJ",
  "key12": "4ZLUV9MV31fQAiPw4aBt5oQWHMzyLd2yLbQuHNiVb5fdznWxGNCAsxQurbnGZfuBWUvTgKTDgARAujuVoZNx7hKr",
  "key13": "316nrD28Tb3JBnEgAoT4p3abm5Vnf3k4vDWaWcqCEhUkRrymYCxbcSsTkpMZup7H9c92492qqAJEQtN6DKVyJ2oP",
  "key14": "5XhVTU9xrijTNkhE2PRBNzYZUw3MAxFYwyJTBYDw4uFDg1pMaT2t9gw8N6K7hHTGEMfzx61LebavjWSonCFnHpv",
  "key15": "m4VZEcBoW7ppfr1Y6U3vmPF8CbAnQeebSbc5EaS8bKEHQ1RqNFdiibu4M9m1z5HfKnC3tGW3tovuEEL5PLm4oNM",
  "key16": "nr6TQQfAPyHwKvLmdBe2USTqnbL9hqPizyDmijXSRjowaKexPXKwTerQYq58HjtkijXBTdM5dFBAPA4NnmBacPr",
  "key17": "ZyXpzn236ucjL5NuooXSCNFdELLyYsNjg8uoUSUmgNoLDPP8DQmfbKHkx9dXMmwB7pMSqdjCnGGUpKmqKs2eySF",
  "key18": "gFbzLhe232cLM27LXrWxYD1hjRdVtdYYCfiX9x2Y9eT6XYpbngHFSLKUra4YiFG39jLARJktMjC1LAet2Wcvr6S",
  "key19": "2mg9btSoipGRrUQ77ifWTRPRGFCMbt9eFeUYNcC18sWMiAMLupAjXsToNV9d6ZHEk6dstNYnScHp22nNDTTEzNiE",
  "key20": "zZYedkzMbZa4m6yNWadmF5ztbG1Trj8EvKJZ4kMnbhM5nkqqRHHk3TeJ1oYmBSKLWiKcjj1HNZjWGcpZmeCnLrr",
  "key21": "4tvTyLnMwmojs3n1ugpQicX31GVvim8eNvDu7xajs26PiecaJyg5JxYy8ErBCyGTz54uce8qVCMRnBNUvNWduVvr",
  "key22": "3gDHHrU3nLn1v9A7imX6y4H7vU6jJfbcaa4uf1HtXJ3r5dFZA6GQdXDXqvdcxNCPewUFcQkFoNVqQAYai7UJP2J4",
  "key23": "3CNwViDgtVJ4VSy3NVWAoyKkfmB4wSaYF7Tv7q8X1ztNeErhGXbznxkmFDBjft9AP51ER7gZY97YpJJNDvWZUtbZ",
  "key24": "3PEBRBUkeodqVW4zxxt5LFdTyjBMbuuu1PKEkk2tsCAbrbKriVDAU1BwnbJEE15ppdKMt9NWbTHrWJaEcSvj3LAW",
  "key25": "547xrWcvKTVe6eYZmCQF3ojW6TcfYDxfH678VVBuxRpLkqBUXVVJgmnZx1VYeBYeTRiCyCZwqtsWg3YoXa2wrJNw",
  "key26": "zfBAr6iGiHYuq7kAd8ogiPxQjZibhAfa2SRf3vNP3Xidzxye61MGLGiwcGywjcMRrKsUK2UvXC46hiuJ3GmfZ8c",
  "key27": "2PHjD3avfJBX81BSMYhXVLxqEaXQM7MZq8n8p7RnjLUmwmdNcq3pDDWmoo7BjhhnVGWgv16CKPSXmy5JSzYGkw59",
  "key28": "2PTjELWA6UJyCB5VwMhkFm3ZXzzEGxoF9PduGKrEKvqm8FXEwvjdZsjBT6q8nVcnRPfjxhYUbNQWezHYYKT9HnJM",
  "key29": "QNg7g3HWSCz9WYM7fUjYJLFhWtkBpdhKgaZy6WpPiyrimTT11M5zx1YLVueqi895iJFtothGciENzaGtTe4Per7",
  "key30": "5cCJ8b5yuW45jbnfdShRA6RSYW1v2DmGsfTahQwt5qEaKWG63DwnA99VXxmC9bmRgw2uRtoWkDPCcPuYaPN9Ca82",
  "key31": "4uajuN69mPRD1zYcDTXWJk38a6x6tej7xPhx7NdtS94EA67LE4zuCzD38HmSgncojjwit45CA1a5GwjqNzf3zPLZ",
  "key32": "4xdgBQMSKMvJwxCRe3QF5HRDyGVwvR427RG4rDTDVcPLTRDU71fr7JP5MYN4s99rzqAuJwtopP2Tt6n9BvKnvypG",
  "key33": "5Ej4mtyBLNYwwDVMqV5UuVnoxoxNUMc3FNdPtYwvQgj9SGmpWwrBmY6C5jTXaXzo2Po3oWMQpXH6xzf4mwDVhPgS",
  "key34": "49YoFhZfHXiSqbimQmEGmwZXMf1AcX7BafoDy7aEmWFWTAgCo1Tv5FyapYVYeb6CoAq5U1FbNnpm2FxLWk3EN1dt",
  "key35": "BLGw3UgVP6rp3YhmH5iWp5Eataaxv64i1V63LyVB2kpB6L1XJJKL4XEfxRXstDR3SiZcxKpTJv3amN7WnrdMZ4t",
  "key36": "4Pju93mqrQ2FL7GzchrYuTEmvE1tEBM795DDRz9Dtuhwoiy1aVGSq2YoP8mCcqcyuBqf1xTYHQFxAwZf2so2cPyD",
  "key37": "d74cVzFFDqfgDWBdu5AHDcHFP7vBoxLiHie2pRwf3P66N5SwFw2GXP6Mopm6QsiYtZEqwVqo3pxmLX9TVmdyDJs",
  "key38": "5z2LSSGSAiBtz3o7o42FgckNaPWTW2aHHEyrJseELnQVt28PCuJtGGDVA3kk62xVyCQoEqAKjzeWR6DUuqLSd7Rn",
  "key39": "5b2X4p7otjNHZD23CaTZr7x29Gv65hrZvGEr6oU3rr3F7TnFqcspnsfZXA9MXh63dUEnGnWZyWAA23FmhJC311Ct",
  "key40": "5ScSWkSmdKidS7Dor68TNm7kSg2L1BqJA6yTztVNVboNmNtGvrmGFPi7CHJmEdytRRsxwg6fffztfojnMmeHvDkq",
  "key41": "2vUeKBBtnCMH91r55zUfzXnUn48hWdNU1FYigyzrn68HKX92ko8Jo9Scycu5P7BKg6TzfqfkPen7gx8aHZ3tU6FB",
  "key42": "4sLjVu8DnqDJwTacsVQGpMJJjSjNt1YTQHES4DfxiTVton44ucatx65PrupNrzUvw4PjVeXeVBgXj42MedQEQNqK",
  "key43": "443z4ZWKHqitV64WbdBsaL77DQgx1NVnYRcHxqU2HrZNQgoAbTBBMzPhr8nd2pAivZoJ9ZRJwjh8kjL8KZa1UoYH",
  "key44": "K8bsQYkwHaYdCYjX7qJh8kr3jrb6FqGyKdmqdS3r9839He6r9qiRnmefsoyVAXiAunC2vr2ZvgGXD2rWAi2LY96",
  "key45": "2SMa2yFCM2uQ7Akgr2vjNdzqnwK1ywmHunYgJWQYtLPommMA67KL1HVap9akSvgWNg4b3WVSEA8b96p33kLtZUaB",
  "key46": "2ebXms5BZciKrFZ6Fvzs1snHMYFDZiwg6hRgmf94JYseRNrScZFLJQYmTMgB9rRQy2JvrRdu22LpEKWvgZrFYd4X",
  "key47": "4hUGNBKAUj6P3CVinRVDwF67xcoGx4zSzCyBwyCFRhuSbgz7DcYgXmG2hv3gzMdBEK4HpxuLXFjBRvjUUMgkkuat"
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
