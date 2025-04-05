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
    "9yFqSrRf5FakSSK5XjwqPX556dvnpQ44eRJkBtnED3VEaig41KWVzLcWazTqK2QoaCFTdnfXTXwLth5Np3rr85y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AKHihKx7Pc65a3L5Q7c9SsntxKRYwdBoSvPkKEqJqfDmdnTJMbtKTjV2ia9bwjQ5ogKC6G632DPBmoP4AE8duKw",
  "key1": "4jiLteEQAoUDFuPH9YPRevaqcqY9VE3UxAw5QKXyjGS3K6VKFemx3cjrGFf6KUNH2YoSfm5fKn6nhbWJ3CJUswxk",
  "key2": "59Dx9ythkxAM2gkkZmcSopJyojKRSEe4zRUuXyXrf9rRRDtCvjimjAgdZ8NhUKNzmVz6uJBXXKoQpAXn1MaGZYEB",
  "key3": "3e1NeJHCwXSfdjVcvQSmUHhcYX4Fq8v8BytsGEfWgS8nki6vRrzogaXbh3jFnmENxLgCsmxyBgX6H4W1918B4wHA",
  "key4": "3ktzDn6fNcj4tKL67de4LBKxXcZ5wVSHCU2x33FJD6B6Wdii3YWB7kpgHk4JfKx26EgAwmp3AkTsDBPrha9RDkJp",
  "key5": "4HYUuXakYM3whpCbtkQtNGx9CBNjhNof5Sne2wZAnNvK3Wsdc36X5xWkRSq4d48CRWY9XVPTufGMmdPZ6CbbwThW",
  "key6": "KuWQXbDXfH9eV5YE1bbcPzDTB1KNzGMg8puS7eZX7ijVqdXALiQyFkaAg9tDmffkCnW9q5J7LaWe4Xr2jPo9ifx",
  "key7": "395XhTaSPaAUvnPjxmj9u8DNCJDGxEfmZUR1tdgdGx3rFDBgMkP3BUTnqEeiefM15PjRt3QZQUngsbcFhdyLE2kA",
  "key8": "4qRmjBba7vBrvuj6xdDt4Mz9LSuk433cNUY8RzuKZaGPHtrGndXmeE4TnpQRQQhw85TkP6BFCcJVRt7SXym8X6zH",
  "key9": "8escvA9oFFs1G6tFeUsvh72jZA3pUVzqBMb27ax9RtMjVQJcdwHYM5mavfnBhvKDNcpJm4n1M1uigD9JorKPFB1",
  "key10": "3RAeF7SpoXQTerHjh6wNmrV7Whhri7svxc8JSfxw5Rb1padYU9eA5pGsqHTdfz2bZDW4M4qZSjUaq8hJPBUyRpPn",
  "key11": "2WCd5ZQ254QF4KNmocZnuAAvJ6RSL4tY5cQ6iHaDfeypK2Z661pny4s8CMjjqCW6DPUGRgW3XGscx5uFQGhUg59G",
  "key12": "GvpaaLSBfEPfBSps7GwGgJ6LCrgsqmv1MF8LDpXb5wsomb1BSwSj4j8SHnH7atBwZ5LifkcbbNz9EcWbS8nwvkQ",
  "key13": "2RjyP6UAnVvQtpUTB8j5ovVUV9X16qfmeeqtSk45MvBZuBie4xSNdqF4JB5VN1tpdvD4U8zAvv5i4j7mE5eqgmhD",
  "key14": "4ZpYSEsNkLvg2m1qNswzEAQNpLRp6CcViAAfMksfRfSC5ce21qGyLyqFSraL4vnTLpohyaSanDvJRdz51dFHe6Qz",
  "key15": "4o9qQgMHG7xHUYkBG5geLS4kvSoMRgZJ8yzinFA1cu9sqkUX6tnsjY79SAwEykBeqBAAo7kDr1g6ueuzK7UB7giC",
  "key16": "3RLsm3jt8yXPYnjkX1bMfgoGKL5QAgAoVv3nh3pXvcm69DN34qT62HA715YZNGmL8v6XsNsM3qksHV7xYuYiFLoo",
  "key17": "MZ6ofHjHJRBeWTX1EXiUoKGGcoDHJngpENzyJVAEWRZncKb8MfycRP4om1HRDW8pnDzPAKjFve4dHK5hURopKZu",
  "key18": "2tNxGN6zWu68Z7mMWGBiumvJHdFpfgFqK8aukNPHrpusMhSQNt4RhaURhBedt9TMuUTHVVr94LfLjAQQxjBTissf",
  "key19": "3n9DujtgK9GRxcpZ5Ww8JK3SCq2pvPGHMFmsN66fMKtLMSxQvjFBPPgzHsWrjMG28yQt8EaPzAzuUH5pTCZzpyBU",
  "key20": "655Wp8XVBp6sPsnEKNAWh87QNcQvD9Fc3iw8FZ46KNU63zY67S5X8qm84MLoG7MzfiJdiSfFwdv5d5NeUN4W57ce",
  "key21": "4pDt7Taso9HFg7c19YjZGAHShYfw4XjaAMLVzkxuNCANzmiSJdBRim5VfaGemnsrHhn6S5D4tAnbvNFxiA1HBkyM",
  "key22": "1y321JDVHuMgcJEHUWmRCPzpSV1fLHCTNj92B3iJYcPR9SvDpFXDMJPwox2HqwBXsXPzn8MP3B1xzx9Mf5W11Mo",
  "key23": "5ifEfgjCkdaqVk5525NtPPvZ9qQQqsDD9nMQdRcTGcvWdpjNzM18U3twPUnisCEgxnb8LTpaKiXoeEFMbFuVDsP7",
  "key24": "dvRJdZdRPVz1fqVjJteRHWoLTWJTuDjg5orVx3rCZvTjqkxrYwwsgV29i6DSoQRdZ5kbpB9wqBFmsiPtRWwin9j",
  "key25": "khGNCH4aCBPxppos13SN4HCyfikDVhHTqwoNXjFdSRyJENFxKPiHjW2u3ZaVKg515uNBEyr9pRDXWYQzVYU53jE",
  "key26": "5ZbwMqGbiMePwnQxrFG1cXLoaQruBp8cZuX3msEqPCLdBKP35YvRxazDyKWN8SuDfpgwvxFaCJBMyfJDdA181FJo",
  "key27": "vKqkHr3tN3rnjvaKREgJbAtwt96EPmYahTAfqMkgkDkFL6Vkyc3jeYrWpRfRm7vBdMSQ3F882yDCRSZBmsvuALv",
  "key28": "s5rPoknnpnRPJwDXu2YuVBLdL4QHGSFvBzkANmHPoDfATHnEaTnsLvMa4bJJUmq7471ULeYow1MfXnXEArBNF4n",
  "key29": "4yPSafLT5jNRFcgwPRgDuEG5tAS4kHw1q4zvmz7L19hdxRkpzMCKFLMpMmMxK4SEkUYaUFrceoWvp7QU5vg1Fj7G",
  "key30": "3jRBTRiwBrkEv5Qinfjoy3NkZRprqx6EVqQ8bbzLXKXNg4h44mAYAUQVJPAJi5HFvwRWbw2zPWtHasoNvn9iYrLe",
  "key31": "3aq9HQxXoy5FQ1etoGopUesTvgo62yFwtr9sRHjwRht42JmszW5dekUvwXMWStpXxsvfRdTx3kunLZHhFicfv6Dc",
  "key32": "2TjMqgEi2HFxy6ajS8SkUXUD5m7KjsR8ujAazmhnLXzEB5vTVon1JcUAcu8sochyFqTnnEfWsK4jpvjb44CxyDXR",
  "key33": "Tgw6wapc7aEWQi7RtHDjRecd7DyYt4nbiicBZudQuWtBxJjQkmATCxcVt1Mg9vPzoqC9H4fD7WLZEBG9W3x76rE",
  "key34": "2zMbNwJzfM3XpANQ9A7ePTJrAFZwWc5YTbyLC74sKTdnUGugNfeYLwuWp115oLWJn6mRK8Cp5nYshpidCeQtdruc",
  "key35": "zaoW5A6pNHNPuKfTpdpv7UkUy4CJvHnsJGijJihj31kTxGM8G99uEbQ3zWapspowAQuimUUHFtenvEaRUsNXVSb",
  "key36": "4pJe8VuB4QasShu7ric1Yir2hN67dbkatopDSoDUGdSAJ6DxXQaXcDUNrQVST3RnfL7zivLQnwoz6hXyMG5gemVT",
  "key37": "31szRSWxLnhHioSDHQxCEt5tKkyRjXH9mjppV1KdXpxPushnxRiAeVdHuDNg9R6h8YiySg9QP12FB9E8hbi53GDf",
  "key38": "3mKgoAH1yRrJFX1aN5HrjB87sJpitT6oYetkqVVVG7A6dZ5WgQmAKrjcL4qQ8r7eZZ9Jm3yfmvxMkSVJ5w5M4m5x",
  "key39": "KV5qPNpa4s3G7xyAqCdK4omWaUc1X8fyE2PzwFMfkLGB424ysSyHV8rMq5cWdWzPoQCz21CxFrPjdx5u645RNHM"
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
