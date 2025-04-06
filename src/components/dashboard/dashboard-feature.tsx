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
    "qF9pKMtV6USY1CLKFebhWP6mfP2j4cX1sNZVVLbTY8yRyVAXYTDcwvfWXWFjnbEsZw9PjL5UFBTGEAhgxeXexdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zJsjuVsdoJvdxg8He4bxpEtg28K9Hha9qUeDCSNfEuqBX98xzzmJ8RvkHbbGXLAEEAoShdRznQvHqsVyyFvoKpy",
  "key1": "5xVK484f4rJcKPbevpqKCoixHkJ6N9zZxET6wQagE73HHeAK7PTvK3FjMNaGNwgUcRCp3wJZFCj9A7vCbMuaYZpJ",
  "key2": "2ZL1zjuaGSp3ebQXBTPT5P2ebEwabEfCssz4gZjNnjjvQUAi1HCNrckfMonjxydcECAqWHVJ84doTA7SP9C6tmk6",
  "key3": "2PX7JzUYxKRmkpDavznw5R229u4UZ8NUpTvRd8ZbLhTcvKUHfA4xYgSFM3gwwJGDmzkRuezdRC318s2MugeVFdzG",
  "key4": "65bbd88dmA97ZTWFR6P5aeszmbhA5JJ6KTuxi1Jkt9D7xNRsbneomdVbZJZXX9SBi8BtHhaJXHGc7CT2E8j83CK7",
  "key5": "3gGEEo47gjVwuGfzSPX3WVxnyXSmwVTmUzs2GyKnZyW2JMtGkk6fE6neaaNh6is2GSNQQ5WwZvD9Y3bhDymzwkyx",
  "key6": "5H2kJ7TB9P9gdAgrZkiDZFwP6TZAAjjVbqAei2yAXvnsTvvYKUefSWot7KtR9cKKHiANLjiwu7w5SVSjyiPdrNDx",
  "key7": "5fA7JBt7tJzp6q4QdeTwDfEN4mGSXWYBf1BgMRurXGesy4t1APVTPtHgbS9AupDCXBcpYmcqXw7japEJ2aLzKeoM",
  "key8": "AP6dPMkGzqwEkYUqS8FyjWKXCNxKmX91Yn5RjpzACoscsqLtwZmtvAUbwzFXqikaHWsJ5XW6ovNVyZ1V9xvoXHc",
  "key9": "5Pzerd3xh4TFvk7i63MtokigNYNDqUdtWX487UWiMYn7xCAzbzB11GZk1H4VqpKo4aecDTY7voMkLNjriC6rxdnL",
  "key10": "3cAHwJjvSz1YRVPzLTwhAH2BkPciKNYLgjvrMvAF8zMq3K3PeHHkLchUXA4jom9fzmPjanNpdbr448UGKgTQ6MoP",
  "key11": "sWgb56cF6J6J3irZkUs6SaJjPU55D3F8hDr1HDGn93R5cGUJBz3m8P4Lhvm2EzPahb82g8B6dVFvE4aYhQ2Hzue",
  "key12": "3Km5AouKPwG3Y7TPkUByquwRMYqjRxyfQ4Msz9ksVc4wV7nrCiLJHmUWNGTzya1v7J3MWUg7ifw2aBGKcSuWKsmU",
  "key13": "4o58LCMctSsVG3oggMuaCPaJh6nTVqgVNmg9xzKjnTz4tZB11bwKsGUAUfYX1kd3bszWt8V1TRecYLne3e2nSo6x",
  "key14": "2zWzRSXUjn1pbzRhVfaMqWcQVuWUYFyAygkw8V8B8ApuSV5kNHmAMfxRGygf27Q6ES3EXgbPVDPNBh6gGwkmK2xc",
  "key15": "4svYLxzdLsGzRAV8HBcwAdZT7T9xUZsAZSvjvMHPd3rhKKV2o9Yc31rUSXgLNu96LQUbnH2uMQC4spLJB9FKnifR",
  "key16": "4KDg2rXBp6hgMKqccnL2Jf9jd8TwDhKVzuitutacWGEZyAnWkC13EwSfoiB7aX4EK2vuUuxyw161sx5tCRb7yHLi",
  "key17": "5RfZzLZMpfuapSJQHe6oxQ41dcATKkJnEMc1U3qtCDyTE2oKUCFkP1GJWTMCDnJdfyefGQ968JtBeSvkA9Ws8yuc",
  "key18": "paoFixDhNwbcAgmMgJXcQZq7hG1C7gDJpgsBcTmYp4RHN3vEHjvxXMWmbXXfjZ3hu8iaybN5BWgXTqDv3n1kCgw",
  "key19": "3zdQbR3GfCMWa2hE5bYXrdTXpL3GvuWaZvMFb7i58bt4CgmxvHosPswF8DaAbVAGgchHzjNc2cSKjKuea6bSPYcw",
  "key20": "TnYkvWV9zfGJPvRP6oiHWbvtf5yDJ6XhpnKuZtFonJNq1z3P7jiJiB1DUDD3UY1GovZLak91vVhbakYJEbJwWmV",
  "key21": "6kUCAVH7NaFNbwULCAoTtUJidTxaLk8E3Tz4m7Zu8zmotDLFm8GxWtoRGEPe4kH9P4U4i822UuDG1AW6krfJ3bQ",
  "key22": "2nzTVHcS89hPoxXy2HKJFoX5TWduFwmzJ3PEeURqsAoqJxvfvrNihdYgRGCoKQAMTA2zArTSzws6HUn4bZEgnnwH",
  "key23": "2sPhuLPLhq5dRTrwWCELUnqkzsG9Z8rxuk5ngNa5bmNUBY7ft9zPzjZuuyTU5CGPbmFtZEHAuc347U3HMmWADdW9",
  "key24": "SdWJLFTFK3TThGoWtUHAaTpbtVqXC2KMB7j9TKN11m4m6sUQsqqddcwNdGyQn3GpW1qaQHFsYVsgJwvLbScKrC6",
  "key25": "65e8xsyvApDiw4nmvWJozacmvKdsBcF3ibt7gTJfcJTajpoqfAPUvcjscYPBM4BQ42EquapCuugdeFXNqt1BxFmW",
  "key26": "5XYCb42raviBx7gyfsjJLzd1ZG6uPDqEzSk1dxy8qZEH2WmaBbeEhsK5NbNM4vH88HvkZEbEoehgzeKq2cRQ5JhF",
  "key27": "4vB1DsowwgScktZM8BFSN6inhnUdwH3uXD1CGdfRbT6hLcuF9YeYWVn5nZbf7xxxPJhafTz6HGj635uFx7G3AARm",
  "key28": "4tQQnFZp55NfWYt94sSUxfvEJQUy3HaxVRx1Gq6DHFdowJ9kbqFbysvJ2DMZLxeNmhVcVSdWXhjLj1vqChiTWZxR",
  "key29": "23AM8DN7WM7YE4YPWVx2zdDkuHR83QYoP5nRoEhfUN7txaCdLpUTndSfkUG4LDKQ3wCLRBk1d6U4EjPpupDtBvgW",
  "key30": "352e5amBGjzQy3CXEzk9aYYnrjSpo82jgG6Ve7eqnqrW7FpxyTKpArfMfLHcVJoUGF9ij7Sn8u2cuFqHonExw13s",
  "key31": "5DZhCAB58C59pHJNYCTQorXcDsNvPMrRwyy213ibbUGfi1dJRSf8PpuekhedscR4djw2vXeLbjW6C8TpL5yhLgX5",
  "key32": "4f8w7pAdMcarUqxoEN3vXNymCfWGYk68yGGdNDX3SC9JL4m6v3KSKbfEKwyhHWwQKW7zPW8wPjHmpq5E8iE3QjJW",
  "key33": "sQhwkwNLFFveTgfk9WSMXHQ2rjFhMmHCxUzgAcP5fTyQbkbN9bQYm8FGArFnqTcWnk9yHSLrKDBkRbCmuAxqW51",
  "key34": "bmJWAwKVesuEyaC8qyF6XcdLdq297a6STd5xfzBrnRreDNS3VNwk1H9noQY3RzpMVczc5whyXRn2nRKqwmXPXQH",
  "key35": "5xmSkZ5nWe5QoUitVZsZdHEURK1zyE311NJLGhp6z9ELsUEDT6iezmcMKufmtqDScT1oqyHPS2Whg6PvjVdmUZS5",
  "key36": "2xqBYQT2SD2sG6ubvYiPMFbVr5qG3HtEoVs2XSiPjP2Jx5E8fDaJxYoDD7SGtJUrgAxnQXDyQbFWb9L7yEd6tuTJ",
  "key37": "25rWQ5m4UKQt8KZBzpKC5y21sjkzG8VExMCUNEsgNozMPbd3Ni4dEw3TtXsDzHGp7xGFEzXUR8sLDGP5vPYkTjY7",
  "key38": "WxYTr7ASuM4PBmpZYoZRU2YoQBQfy3i916e8nGfeC5rzs1WAdSBbxNyNyivn9qdGCoq6vocHxR8eN7BV25jDZe6",
  "key39": "2jNAsqTVwJ2TN1XJtGXmLixZF1Ysjf2NBSQPp6emLrb81Rhm3gW39fEe2LDfUB8HWUCE6M9GnBrE8VxrafwXnLq6",
  "key40": "5rsLjdUpdHNX2YZhmAzmmkfkjweC62opuKKX9b3EPQh9JKQJWs5VQMnoFYDsb5ZMAYPdVneJzipyRygP3HUWB9BV"
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
