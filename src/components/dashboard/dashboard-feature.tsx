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
    "34LrXrrUkQgwyqwBaxjDRaWZJ5ympG37ty3kQBGmkbfv6URtaFvikCCAfrbJBQgy3dbsEFLWzLgJo2Y8Z83vAMbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WQoMVXcEvoeeBLLvAgtRLBbkSdqxqBqapYHjQHFDRgML2MQHHYHuUWMhsbjb3h6SBNYjU9rjeFcqnQ3jWsmaZte",
  "key1": "4qPpAhRw64jytHj9mxhjuNdYKzfwXKM5FEC7MseLxsPfyrR1rnPWUBfM4C2D2kyA6VbxMwEc8gcSqELy5uxqy9Nj",
  "key2": "62DfffVNZh1rymEQnDRd1vgMq2iz39rSrousLNKsLQshs9i5FAqg6ELeLoWh9UYXdi979MxD18pGQUB6sFv1qMU3",
  "key3": "5LGUju2gQ4VQHFLHv6rXfKuVrvfesk3gnUZa9kAEYs2umVTVYbPNHH5qovYttbTS2Qv9hQyBoQ89p48LdqCGMAb7",
  "key4": "4mxy3SZ2VJ5aUxt3v6X5gjWsk3tox2bGumydPfXbicaJos6oCmw2ZiNEWqSS9nf5LBD6jiWX7NtJUctw4MvzsazF",
  "key5": "m5YDqRpTG7vyokKzAaR7jB613mWDe2AWn57Ybrdkq1Abwv1KbzEMQToqyZovm89zsKdcWSqKwLgiJWZECHmjeJy",
  "key6": "28NYzRYsECHzuZrd1P4VHbTBGpbUqY9QQWy3cotombQkuLD7NMu42afSQ8xCBwdX3MAxqe1jgNF9BMvQ4JEZZjpb",
  "key7": "4CKKVwYytEPwf5cQGrR2ks5PCwq35NVDuR89Fh5Z8bmqJpX4ePSSkXMZc4gvUD2wWpXjbEeFN811jkPYeyZAJwXN",
  "key8": "MvZUMSzBYDC3KGAKiaSmvzgCMzm4y7AR5UrRkiYHK9wYuToqtt7G7MKcmZe1fMfMZEsVUhT7puU47nPzAJ2uzrL",
  "key9": "4xm6rbVCURjcXdPGGBC1GzwKnFSXpzHRqrue9hd8GoTqfGQWrMDWJkiFfoUchywRYLaKxQZnyRhiJeCJd62oHCT",
  "key10": "31AP1Rhj2CJGK9ksUf3fqo48LQuWVgjQqpVnd9qgc3uAJWFAcwm3DF9GWw1ZQ91TwMCoSsueGNkREyCmsitS9N3L",
  "key11": "22QBJECWxWVwpN1QANvQCjnhjEvUnwgn9MEMXTyxY4GopdKwPvGRvhLKTqJqUqCJybbjr8qn2DYch3pEia91JXcd",
  "key12": "4bgGMHKdmixPQg8RsBFJqfVD2WdtMP3QMPBwrZirfKVSpTrPrzfoA4Q1s7yjukieihexGQRPkm4kQ9EeERWTT1qX",
  "key13": "4jNHjjweDZr9vHtPs8eRTTASeQEZwk6k5tr656WyjMbickrG6ssjycQ7GUQLHt7KP7qCtLRuCDLKYcvwmB2YvTGf",
  "key14": "2EW2nZdG6oUvKokABYSRwsoU9QfU1Q68WMfdKD85YAzABp9wWRfnv6JA1jgLvqehVwz9dhEWrRhzaa2tE8RfC2N2",
  "key15": "4TvsdDmZ8HnjTuJDwp131e3tD93eQJ3fbeTLmBksRTaSEijxnVRKYSyzRcBKvJ6uVDPAeYiCR5HZyzPg6aAAMCcL",
  "key16": "3msuLNu5awyPygX9bQdHV2iC2jiG46H1sgFQkqZi98xduaRFkGtgNbtsc8wVzzCJ9CcqaJqhPfK4KkJnhqF8kEEy",
  "key17": "9SHb1MvdcoR97R6Bk2867KgP4EPVoCFxHtNEr6haYPeRWzMQ2nLAegEjDMZuTYXexWeGvjhFFxvgPFVCHfWw3gX",
  "key18": "fq4L7NvvFBH2HDpgAxFdvxXwQ3D5UvEsFtsiMaexBe7SMwPXWqrS4Z3rZpt8DoTQKo7hVr6KaDGvp7yx8C8ZBnc",
  "key19": "HzQ7gHZYALfZZYd5GPLuv6zcY82YpJ4vbhXHoe7yZ5HFCxPXERH3GFdwPkduFMv82BnCJcBgzbiueMHtSoR1TEF",
  "key20": "2hjSMjPQSSJNf1mk8x3r9rQeDpehqCR9J4BBJydhagPmjpHcEVsznghTaCpy6PkRorQati6YS7tkakzLbfKnjWje",
  "key21": "QJThYjMFdakKZpoZ7ENKSmHZq1Bt9P65rGcQfFytsUXzcj6ag4sZEZgbiNEtzzLoJqWEDbHzYrsTBhq3oESPke6",
  "key22": "5DMLSajS812gBNu86fDNoxCswpw7TisTy3YwFbYAPyiQwhJSDE5Em49GpujcpxFwunYF8QQKt73N825G1KLrvJkF",
  "key23": "2cH7rdvzNkZq95SrJQat55VGmfsDkV5oFgWP1tuVSUmGqrSXMY5LiKnjp8MCjG7VacNZpka2R4h7WsNHUamVao6n",
  "key24": "3ZVLWtWHk1RHh71eNPXRaCuBny9QESfyChYVqg4Lg81B3XUn61MqA3AwigruwfwkpYQomt2itg1JoggkNeJUhSKi",
  "key25": "2zLHqciaoURuQ7hpxbsqHJnk6absWEYHrsWWi9Fs9YG9L77nr3p4GjUWdr8hUzEED2rxc1cB11u5jhrkwe8nsvdB",
  "key26": "3LBFE9LbaRJys1iFwWBBHrigZQo3R6m2j8UAyAH1enKCSi2mqY74RxJ6eXm98T9AL7sGXzqZaxGGBjAhBBf111mG",
  "key27": "34RqSBGCL6SeRwLQ3Q2VDw7zUqb7mKZdTSaxWum5ezMryP3khR3cAngcprkYBPRA4keFL6h8J2DboMhSAcizEcQT",
  "key28": "3PP1JcxqggkyEQJqfRci8MM6ZC9GtzPW8aD6J9Yoem8A7gw9bKMhDLt55aJT8UcmrjXmDGTrsw1xdFv1s237xR7k",
  "key29": "5e1tfXyFPTvsRQuRb1RWH5eyxwPNhC9hQE1reK6eeNGbE9xjv2EZRcCiGjwhUS7uZFbuQ5vEmCd7ik7EjdQVc44C",
  "key30": "2T8xZ5fdezdiX7DHCa8siTpLwq6KB6SkRho1XS93SR9V7rNfjWjNkj6PtFrcu31fM2dQCFsVcRCYwbQgehHVbTDi",
  "key31": "4JjAoXRTZKxbTQh64bt6DvgVJVtgxnuaHW8k93Pk57Uim82DR1d361wY1zRZ21X3kfnBkWDpMEGgjJ9kw4ip2KmL",
  "key32": "4CAPUYXuupu35nibpXFpMGGE3ja6GZLX7Af4UpzYH8CvNSBgsm9ypJ5sE5xSGqHPSuWdviu5EuoDE8beeaybKJ4W"
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
