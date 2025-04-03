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
    "33iPiT6CVmXkPQKLCeL1Vb4RuvnsF1ehwVyyugGgNtgVQ24BZjpACSNBvt1NYwduDwfpd7xNY5LSUZCXbbwwEkMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVnaashf3mWXkEcqYgBXNhfGxSsKMXdLcgwkNAJnv1cLz1mm9zQzYvdqu7AoMRTAegtthk6ch7b9zx3h8QzoxmN",
  "key1": "67rS9uCRMURoh652fgyu5Vq3F6VwQ6VFEc9jNiBhwMQikigBf9WMUTvcavK54SE64wGp5wtXrh3j4a532VEj45rt",
  "key2": "F6fbVD2wjfxqfzwKvtthTeL5nRLaUrMt4NCqFgtBxrjEnjNnrRzrpBhBhM3H582YogGepMsjQVraJDy3CBK2PAo",
  "key3": "5zLvfLgRuQN3Noef9zcxZbLxBdH1xmfogyhkEp9973hvBUqMpiuwZMcnQGSMhjmGTRPBZFJDA51oACVueunWexie",
  "key4": "W13BCCJZ6LYwcBJx9XaracV75oMRDQfwEMWRywPBCg8stE9AnA1SpE9fMZ1URLRmtm1eXHsggPaBH7uiMpstrQ8",
  "key5": "2mX8H8yuzcCGcCcszyeEheJNkGFZDhYRFui1eyqupoKaKy6eRJxvG4odSj9owyKqurVD9CMYY8fwyAHKWzSLQFBA",
  "key6": "4uRswSLbqAfFrQRm4He6ZbrrR9jy9j85S8vZg8WnRdNrHmXEjZuyqP7jhpQvhrjiTxU5L1U6TYJdWxpVUeNDaRqP",
  "key7": "2xbkCVCAeXEWacHH9jLfU2QvbSvNimsDKHpu8QD35haYXy5xrgt79A7XvHWb7JY16jmqzH8uCHG9Wt5KkxejMsG8",
  "key8": "5LEA19hxKoPNqRyjpDZN63axSScTTyzynetLcxWHN4qqKozGNTpVXZZMUjFSwMzkJx7DyuE4Huca49HPV6h6Snf9",
  "key9": "2LZ7MRCPTcjqthUP6aJcDCRFdDsEgS5mzmgXNTUZ7zTP8DUu39hJsX2uS2C5ZfxcBWST7QozMwLgihHi6mgvrJn2",
  "key10": "2mvTseZb7VB1sZuPiHQ4H1LAUVGk6QBjfxzy6LzUSxfMrRaqQjrY33NYE9yBTjoA5RqcmrSGq7reEg29HVTPbXhQ",
  "key11": "3uWXR7fZxwFEAazg9G419cQj1Y2mZADEJenrq4qFVF9yjXrvkvDnSavZXjjrHmePk56Cadgqge9oAMrkddoiq2uS",
  "key12": "5rFojMhQA1wGhb4xGCM3xhwGajv5pNFuns1kn4dB3FaiaKZG6ycc8KqJd7vcH6VL5bqst1dmGVt6ToT9x66wz1uF",
  "key13": "2zroCSsZjaHEYtpYqiAWaxznNdh4dg2KQPyRd6MUB2XJGab44bRNNN4rWRbQpc2BZEEKyfAEkXYgH2ZQ3BphJ2eM",
  "key14": "4k1uF9X1USJvMM6YWGWSceYregEamdgWo2m9JoykzXSNgZ3RD9DKkpPPWCiKoA9aoSz7KbDRj2hMtExyxSYm1WjR",
  "key15": "yLEumun2GjUhp2HBx2uokXRkMSfCukZJdA5ZfpNvJcAx79NF2Z1F7yK8N14PusxXwhh1ct7c27mRWQh3yFVBghG",
  "key16": "2wi1s5pcgJhCzU87AfT56KDC7RG2V5ZKdPZ3uvL7gQDvv37ivPpAYqiqYg5HjGvjJ6Gfv6YER4vohXivSApnxieC",
  "key17": "2AdbCV8jKsPbFaRzs4yu47c3XEFukshfaF3J8ybXuvU63j28FVNyhF9DoKSJjUoc8YnwV9s18q1pV782ZbgkBhkk",
  "key18": "trSVobCm1wXzWMFS7BitPxfwBHgSkPe6Y5GfVaGzUaneP8KP4pvVk5ZTyMbNY4vp81nvUkCAGn3bucuEeHXypj4",
  "key19": "4VPydPSk2ZupdHhFtTXK6ZeFuoSURzwGryDbocnoE2aThvev3LNAYTLA5cEjs2ZhXUgfGPCx9sbVHynzTgTacdE8",
  "key20": "122RfJeL8qbR9NFkWo7vziuqgZ7t65nAszjJQiEgCf8LCgKihH3yHwcVodDjsKDkNEcXvjeZn9jA4zgcY4GS9szK",
  "key21": "3VDjkKVkHo3nkjoS6sGWKBSYTfPyBx4CMFx8X6Gt1Yps5n42qn3ari63P4AeWCMc3ErqNauDiqgxbcUApbTds84n",
  "key22": "3K5K7dv1wZT3GHoSrtumNPW58vm7C3WbiCgbWN6B2YgUaV3dSWDZXtJqGFbQotLb7aTvYFmx3tSjeWy9ixqxsSeM",
  "key23": "4zrAndwKEdfxHdg2ERdsgaZ1dArp55YJxeUgX95LXMxAiSfThWoN9pdpGuCN2BDMbSz28dHvAxELVbgBA518uUSe",
  "key24": "feP7oAfMdRMcexCZimpiMjXZVM9D2eQ3RVF4td5QV4iLmfDLri5XxpmXWiLGHN7Seuch7KM6zZthpTsJ6GJrfPy",
  "key25": "3WVYFtfqNBhgXtw3LNQxDNSs8sFNEhv1833UgjchJHToohSSPbKJaeDeBRpvKHksjk1QZoxgYUb36oqgycscCe8e",
  "key26": "48N5fFrALsCFYjFyLYnfVb8WyXLcKv5xnban4EXjzAd9Lv8KdnNhvNMCMrRdu1vfKHEV8jm16MwSvVanFAdn9Y1H",
  "key27": "7jwHXmaPAvHDTweVKLGFxhnB2bvg55tTvbQaQWNYKEjfq3WkqxiW3RkAdJsdDfKoG7Na6zJbuiD1MXhFwHeqgjL",
  "key28": "4pQpHAT2a7qhsscmcdJHRUnZyNE4vBQ426xF3JLEtuTUnQUmtBhcdvuLLfXy1sgBqdqzdQnwnWMuPASV8krkaJEF",
  "key29": "S1dYdghATceTQ3YEkrg7P4B3V78jRkMjrKvLniaak6ZWrzkPXa3yMPjo5rSuHwG1aUjw2ZkMhoDJ8Z9K3vNNYJM",
  "key30": "36W7E6t4gMXekKbKWr4hbiZk8KZpNwcYgZz1Ur8xpUiuDS94LJhBsoLsQL7jBEfNcqGZjTGJ1RfmXk7wqk4o5YpP",
  "key31": "5u4ZATSaHv9J1d9cn2HjjDzcVDJbS9oB2MXqNbo8dpK7TpoYzxAWdVmR3zosKUH46dU598m1UbNUPgz6Z9ArBcxE",
  "key32": "2aLqRFnpNJ3s2Vjix47PRceg4W7Q3w3dUk1kt8jNq34f5WSEhA9hAR7DEuLKv7JtCWsh1bxhwxkcR8z4EtNTpoFt",
  "key33": "2YJdTrub9aGaqQh7vPAmh9UwrZG5G7HN26DfG7UGYgcF6EyaJk7i8sMsrqwZ5BsWkZhrqPmS3PphEscNJbAUCA35",
  "key34": "27bK2UQ6TZsj74Q1xjqevD5X8ZwDmBkGrpq4Ui7cD4E2T6etzqHVtitdkx9og5VvshZtw5fkrnnA3C3tCFdfsK3C",
  "key35": "48xEu7Ko7jtZaUzoPr6sJUntC349VgDYGAkKciNopvTQYFzBfxGqsejEcuD9k8atP4rF8wXtvRqCD2uVYZvBY2ir",
  "key36": "uMkrevgeVVdWFc5TFJZA3ndQb7trc4YnjZ2SunMVjN15KjFh5r6bizFX78WkGLH7ADtHMgFBLvTtt76uUqfjfj4",
  "key37": "3pj5xuXqkqw316tdkSssuj9TrFH1WCnE2E2CYWEshqzqxTKWfa1PDUZBMn5UKpi7EYXxkkefq9q3Fts72q8HpFg1",
  "key38": "b9rzjQrZNrLi1zuDHJ3moaxC653DUxnb8A6hfGE4tJi2JvYxwnXNcntyHWZSpmH7uPjGfPJ8ZP5qRPGfmDcobgb",
  "key39": "22v7y7eNJfAFRct8K6EXRHQeCWBewoQFpjGyhjcX3KnmbSAzvaFmVq7FbiXWRgBuutEbUCEtjNWrzxHRLzBTDQzP",
  "key40": "2sd99At2CbkGYvfvofuhLnyQ2QkWkiwr1DSAFFw65gacjZvcgHbt5U82s586TSPxgQAQF3W4mWZ5QtJMVf16jbV",
  "key41": "4wqAyDuZjAKSLAnszhbFezXLRH8KmaGUQHpsTkdpDHQH2HJwaKLWZJc3E4XpyK9RjosTvHZ9aNgg3R4unaz182xu",
  "key42": "23dcYZA45o1QnYZknLUYukpMQpN7v29UTsGCdognWRevuJWH4g8i4PPqoqsQgABGLkD54B85GHm9wNNvVueKx7Rs",
  "key43": "4fNU9ZMrd6ddC3RSNUiCitgEQDTFumz3njdEDJjjVNfDY22w6SVCrinJ4mTj8vz16DQLa29CrMnGSj9MSLxLAQFT",
  "key44": "i5rC8gfvaFJQopfBvkiMtZZNJEYFNJNMKefq3gPZoJtNBDUr3y9iyvizsXeV53JetPiURMyP61QtJqvmzRFytX6"
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
