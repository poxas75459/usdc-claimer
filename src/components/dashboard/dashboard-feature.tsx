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
    "sEUV2H6mTuG8ERpqWJNHU1e4AF4gMAS9JqGvjiGWRX372i21nTuuDFukHmuuFuuscXgZpM5ziKKXoaeXAt84dnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S517SLxCkc5M1zYdaW2iFowS1kUnP7k6VecwcRmGtXt8jrsLjPyajNoFsous9hgZC257bpYqF6tPz8qEwuo4nBR",
  "key1": "42BE1kcym52D6vhgJHodRcqVkJk56QRrU98X3igykmZPyQuJmEu5WgnAkDngiuqnNThRS6QNsJMQPVgvXihBTBT8",
  "key2": "3Fs827dnqY2N5UdCG2aQgo3sprwp4XQXWSME4y41MvLa4DqU8apKTgzzc68iuEHp6YogPAxcPEZRgdz3HvRP6JMp",
  "key3": "2htki3V1jL1zA5LC4mQ7PaiZwMUFSxtYpVKTb8Uyugt3e7f8jCGoTD5PAYLYJhbTqzoy1cNgYAU9LpByDJTKaa6z",
  "key4": "2r9Dvwozv7F5yMmESusQxdu8Vb2FETjVPyNbgU1eQcSFfnW99gUXouVuLdSCP2rTcUXozqMcWTuX389RWmTEzQoS",
  "key5": "3WE7cDzrqD1keN5S2NRJN5cWELaquQGuhVhqkUvc7P8JVz5afCNjAfSLSbUtPSBGX8ES7V2qjUdAGV3RZh6Fyv7b",
  "key6": "2aHRepqDjPurbxeyizuJ7XUg3JDa5jDv9ypMLPWTB2QcyVZnMhzaBbiLYE8izy2yaX7r6kjWpDnKXpRq816Z1ySS",
  "key7": "2MQYX9RcKr24j9cP4BAwGjJhmczXDkhs6L83ZNcGvAtEGVyYuRkVFSJzYE9aRYvxUraMgAJ5U74LbANAuucm6bq",
  "key8": "2bG6xCLWc5MEGudghQFbbsmy3wHBTnMcjGZiUQRwd6AogpJeixtDRTmLD9coMaCAPvNepWE1bxUBSjDS7jZRrMBY",
  "key9": "5DJ8qHTu6qtkzZZPmez2f8MkBPuaDTzeD342VMzLfdpQzvWAB3chjaQ4soAGNV7vkVkk7qB5XeJtvbKnmhgQZrty",
  "key10": "GQJmk8SREN9AEAFrajbMn6EfMnMMCMRQVAhFQ4mcTErbN7c36r7kVtWhW8UKULYxBmBJdhSaFv6NHCXBuoToRqX",
  "key11": "3d6ki6X3E8J7edVMdBDRm3LYs2fufQbk4XMexqjfnE4wZx2Q5WbD5W1nPZ7zmdPYJtK3N5EcJ1euJhe2fPLcV6cp",
  "key12": "2p1HrgJF54Gvi5mnkrPYUYetHcao21NXcymiNBNPDmjko1MKdBUgSq8Q3RtnWd7VehU7zKJ7RDS2xbGBaMHhLgva",
  "key13": "rvJrof7waj42X1Uw2v8W13kK4ksXCboinZBzFD7oQbnNzagUykEWwZd27Pfq7MFsfLi4ofBUBn7a5egaoCZge1z",
  "key14": "3Y4pangyeYj3vTXPzHm65PZ8tXq17Chwxb6Hx3XWxhAgjKP78yUpY4mUywdFCngNX2BY2nBBKy7HNq5Y9cL2iMt2",
  "key15": "2unVuvcYqwYViKeWwHF6V4Nu2iZAfA2fi1qs5ayuFBK5YTR9uGEK6svd4ZyibSFEedDHxSLZwU1ySXrA49WZ4wrM",
  "key16": "2MRr8W1qavKLjggKYfo659k2ffiu9XjUUJyPyJRLmnzdoBqMx1GEPyrVVWNqodYE3YtC7FUZVdCW1hptPyc5D6vi",
  "key17": "3V3Keq51WnxG46Ru9PNv8Vettt9TgccSq4dLSNMRWmzK3eyDyJ46rQ6x9wRorWH7oVY5YcwHfweUeeaAt9oEuBGz",
  "key18": "3iDY8sXssSpmVcwE7EwJNaYDaYF6TFgrK6Vygj2WEBQNgtWFy3HuW2wqwJqBjyQDUCnau5vJnm79w3NGvNATbx7U",
  "key19": "2Fwku6NoG5kRhTqnGyuXd4XEkY5C1eXxkWcgmDhbs8ZoKgZ4TUktDAtdam1j6RLLrym4MYLDvdaZBn4iCx4eeciv",
  "key20": "27BPS4HTKmEPx1mdmHVJ6iGCsBP6Lnd6qYMYmHayTEcoC6k3Q67r2DWc1JKAN6V7eVqPTuys1JKNJzom9tfVjrE3",
  "key21": "2Z7YccwVcWWKUnoUXq8JTyNp623j8aoMiG85JQFkjgRdyiLdft69SimgaZ7vLy5f9PUx6K2sf6tie8r16Csvh2kh",
  "key22": "5YTZT6EKjnL9C4oxjzp99bB33KhCrmBJkyQDW2TGvoWKSWsr1TLrAkKgpXzg1eWKCq7n9Vqt5zUfqvEsWPJg9iyJ",
  "key23": "5EgR1CFRXvAJ7wF2meXs8ekKKYCUb6zvoamDZC5EAbWYbGb43TNnYRikfexF6KtmvgQKvzKRdRNAfqUiYUrnb89j",
  "key24": "5QrrpCzzNiVhDY6XEdgDy6RqGsP1BkTWo9B8Urei6LoTHDnAcaCxWDZRirq41A7WAsawbve5yg5EBJkQFtjVZ1Xg",
  "key25": "zWcbrmbZ6aNpUGaQvt3yDCaq6H4VV9idZ2oPzHYvuGHznbxi6aCD1fgVcepYrEKJPRAbiHacboUcziHBd5DEQXe",
  "key26": "4qDKtSEKVoXmJMHDET6RkNUyUUFo1YmdDwMTjD2vNpW7QkRWPZxoRpmsydzijvgojjr6CUcitHPLHPatCfAFAjUu",
  "key27": "4jhFvkHvMzLVraxXbCNutDwbcL2wJvHkt9N7P8rS33oU6o8Ex45i1t9BwjiiPTDVpUvMbbdgk8oArpNKJXAo6LHb",
  "key28": "4iP8HekyTbbKocLZ1fLdrjqLrq5pzb4dJcLJZR7J1xpKvT1BvE9m9DJrhHut4sZjVCXSxXrJiMm3hJKKVXN4LHbf",
  "key29": "564RwQwVQXpEBy3dTZTpVbvR9GLDu7T8iRCZaLxNkFhA7r73T6f3bHE9GVnkr2CyqGSb7cDKrn4hm8zXLfd2V1ZD",
  "key30": "2ZC7LZ4xYgnkS67cuGHKWKU7RE8Qn8YXW3CLD9c98x3UsFUA4gmYuPPYuBU2Ft8eSHWKL5NGHVXFD8WoQCjGxCZ6",
  "key31": "5iSLwX4jBBTg7CuzH77Exqeyiz9STbiqmnfkmkZTMuj5mMTPew3RmhjW2AWUN4gSQ6b4HdiRVLZLUqZ3HEFVsBW8",
  "key32": "4EVm7cKz1ksyiNukepRdSV5RwxeMJBVu7ApPWp3dXuVqmLejBXZcr3ekXYp9EHEUnedoyLQ61rG6RToPbGyXGAvb",
  "key33": "Q5gko9sRsziyuVk37t3VpFeNpoBfVc6PHwjqCiQKXCseiBzrEGjzU9eEtYUYA7qCcjJDnEfSnZVDzDNwsAd9gC3",
  "key34": "2enQBCEkmG6wUtng1KHqjadvYvhVqFzBJSro99VTzMafWPvb6gNhHSGLvRTEUy4PuLcfWwJnRkY7suX4pV6U4uQ5",
  "key35": "4HLBEaYxATZLVVLASgDSMc8AaPQprbGvpN24uVLfBsM6NqJzXAvGkYnBvnam41RP3HjZpWCA2ALVUeWoaLtbESHj",
  "key36": "3QAppLJr2juDqDSqUvjsuN3PgwJoyfBk848HsFQsy2wa1ewLm1ArqkGdYwzhfyyQvtMjpizBGsH5XjBnTzbLw3yr",
  "key37": "2mdW5aXbYVWoUSrKqmMVehepgp2xhRCWnofxV73JHEUC9HJvyvdFAFYrdUouEmZFwg3JFapDLZBs1ez4y2itiJHv",
  "key38": "4raX6xxKJpsD99nat6uAizRVHV6u3DEmjhk8ya9U6vchbQ4Nnm7n1VTDdJPnTiE6vaQo5zjQnT9UpDo4DghqPmz4",
  "key39": "nzjt3TcA7xE5HQKpBfVZ1JrnHn3bBhsMtr88GW2VZRwdomStqqn2mVEV2a8Q3dSNB4Lp6hQzxZEdaCKLDFjJzNk"
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
