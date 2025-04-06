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
    "5Ydu1pFQbpr3hntJPL1mSMndEfNCWVPWDFCqWSPAcDxP8CgsPz8hX2C1jVQ7xigyY6fLzcZEwTpLdJQXHsid5fF4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ibK64MbW8erJNhvCWo6733oUszFnWqf7M5pQx1SMyhFZ5tSK78QMQHMFYAQe4nVZw93cKdKw8GsorFULviJ2PPC",
  "key1": "2BfsjooUqykmMBBjJ5dBHRoZssxLZuwU5J26rzqUCs4Wwdb1pZE5E3vy5o7DNZVAMAZWQiTAVsHJAJqNHfbFjXXH",
  "key2": "5r2HhoT2hEnmgj8Lc3s8qjqdiZon467bv5QvGt4nCqN9yLNahFKJS5EfdjB5LPyWmC7bZi9whDtCJcLqMrsAyX1t",
  "key3": "rfFFo47cQERab1qV1N7Xs31KsGBxvDoa4sdizDA3Se3GYNcZuarrYXj7ow6jKQfwh8fsKKcaFY5uYME6pmLW5NS",
  "key4": "2mapJPyUArf7HCvSBmdUp9CEFnEGiJdwUcoxcuTZrQJLhwbHsWKEmeKEpa2zFNu4hHStUy9GqUToyH1prLXd3aM9",
  "key5": "67FP9AQL5bK7AgJyf7HUQRPm6drohdbmVYsxrv2LQHbSrn1Kr6dJhfVnHz8aSTtSZ4c7a2SQmrMsbpLhxeHHYHyF",
  "key6": "2wf7PihL35sTCSYnH7EFPqs7MzKriAZ2aHNiVVGCFQ65sosqv7fVgmzDHv2vJHyoWr3ZRc66CjwfJvdKfNj1qpzJ",
  "key7": "3ykgWPrBdUkxWgnTJULNSv9GkVynPnDmCHP9NEJwYw5Nn9Hsaw9tLQdAYdkkvTooNqbNMQBCNQqEEzGX6DHsxTFd",
  "key8": "4S1eCyD5j8iVxTzhQVBumvcyisLb7N1m3nSkEB8yqFj8YQn8nwCTZHyfuXC3HeguaaLP7DW5j7yUrQzo5UQGEiWk",
  "key9": "2LbktkzstfvDbHtjDQJiqumXu1nADWTo1i2N5E19Jy142n2Y1pUHdrzEjphEmasyCc7NMkJpw6RwuRNsmSBqwHWY",
  "key10": "4VGNVRXx4A5EfjW9YT4vDFCx8BbZa6uGpqKywCKUqpRvvKQ9qVgexbiUfFFHn1qCGb3Z7kRA3eaDNBShAyXb8ipZ",
  "key11": "46zwBcoGP2Va5uDzkHG5QN45uEML2k1EMuyG1bhnEeAfTMn2jctnyCnt7M1KaJTKjMcHoz6gjrrkPEgxvq9MZcXz",
  "key12": "4hDEagRLeUXCcnDfUp7s5k1H4zuKaVQ4E5YxswDiQyuLd2PahX7rywEjiT2StyBuByDAqRQhNoxZFEsYxmJcJoab",
  "key13": "M6k98WYMY9z89JwPk6nPQvAzLKJFmX3nU6g8HYZA4bYnVoFxE21hu5nFq1c3twtRMKA4GErxiL2s1rbUxvByscA",
  "key14": "kidCZT847hqJ79Y5vUUYbvhtDy1yUjApYeh58YKfmQ4fLntHbam923861yjfy1wFi1HxVyz83XpzNu7TFA2brJE",
  "key15": "5N5FaAyY2qFBoSAiuVzSRdt6d2q9QRSKuUzTcfn8EKkuQXQJxpko15oCDZ74aQHG9ySwzfG2VmgX9GVpDfGCsa2s",
  "key16": "4yLzAsTUramDkk4gTn1uJ2kkh62HWxxi6Ep5NRVTLMd9Gg62zSVdkP8o9Ny5XZdWSCBHPiDjaPHrErXnKVSPW3mj",
  "key17": "2WLYrKdgirxSabdWe8BZHUQZfbqzZBRdwn9ZruLCdy4PPXYsYconuEyLvaF3tWivgy9J3tFqgBVX86T4e4Uik2eC",
  "key18": "2xKA7oRdqGt1yVdxsZh2u8RfusQ72pB9zjAQpKEXGxEwYsSGvrHCy3eMR7cPEfAYpN2JU1jVzyKuGQR2ViNj8mz8",
  "key19": "2ee8f193gQcp7D9XyHDA8ePgsqRaAZHCr3MUAw6YsbUsh4b1KoFW3FsAGNBPMrssHA8EnhppFkT3nXCqQFMZpV5u",
  "key20": "325PPMJ4qR3KeQee2H3qZTvixYv1s19oLqVBUkoQmtw5YjEQxqbKWWk7LkR52NXMZhJwbe6T7cLbayfUCux4knsW",
  "key21": "5oP9QRZUs7a9RSXtHApGZbPLW3gvafTQhXPQpBMgLaXrqxEML8vf8XMkrBE2vggNcygrsMGQYQY5afYJGsgGFMGG",
  "key22": "JzU1Wg4f882a4EDysMg1ucuPrw5MXs1F832wFZRRq6fiQCnkshW1bNBwuysmJrGTwZUp1WBviwAZAPLokRz6wC4",
  "key23": "2mKiPSLXR9uf6SRviHrXBUNKoiQKmucEXnQNUm2VcNpFmHPv4JxUHi232wGHhyo21L6s6ZcUA3gBHJy1b8CpmN1i",
  "key24": "3SjdGvRcKmVvrpXFisQqYd2E4qkxupLe4Hr1SFXXJpuxc7XezsoaGgMoZGXdmgjGbGKfyNGoGhBGwkiqox8ExCRy",
  "key25": "3vp17ZXCAqV7NmmE2fZJ5Knxb8HKrQaEaW1qSPsoEhpmag1vqctbUBKMzhNYNbmmHmFwLBxNcpyrfNrNWc5gQk5k",
  "key26": "31aSKWSBWdy6XKpxa2hU8HRfHouiabqjkpREyMgh2g34DBAmyEqs7zPMtXbsMPzCCn4mEsdCqZRg2mWySc7kdeyU",
  "key27": "PeEWy3zSNtndnX6CxWsWWaS5kxU2VJtFgCPhMueR9aDN6FpBuzWXtEjmnNPHHSNjiiYmhF9A94Q7344FWoroWu6",
  "key28": "5LBRNPvA1xVzZmEb2C1jZnrSamScvTCPyarJV1Yx9qCf7abZYvvqkEAmwnFVKG9uGH1vQB5tuT5JEXsqgo1ktZEg",
  "key29": "4jHk9GjcDL6Ld9Jc5QDgUkaK8k65ntwdwVerwCW82tEaHzskWj2JA1BCefALB4SUo58Tw1npvA3dBQRcuEFFwg5i",
  "key30": "4miWW5fE4m5sybevPxEEfWssEy2KQV5fnVkhw2J5MFi7pRfsftD7VNC4Xwe7bZzQrQdAVtSR3JLCvxz7A6CXFfQ3",
  "key31": "2yjhED5t9wge7cLFvRrn8r7VacVkR6xc8HpAaxR2qzVZEWGHxYsaNCTjXMSQ3tEuHLgkrCFRhfmgogfjgfxxLV5K",
  "key32": "2idq7KmHG8cjfXhYnVqZBEKwENq56hmkrPSKsVsstxRabBty9L4tooE5bJtTZ3hkdpi2R4RvqFkumb9BAMMGEDtN",
  "key33": "5vEmcVpvCJgxHejksqjYfURvwRZF6gZv7tYUUaQCuQWUwaXgGxhAPA8rxVxj7PH4e9rQPHXNwCn5sZSJd1VjVmck",
  "key34": "5VXoutw5v2tZfgXWuBgTxF4GiRTrAsPSSU1DViKCrMUW7ZpruhvEXrD6P1BAecRVMkEL26AoXeKGDeWVwn6kJsKj",
  "key35": "3ncNJZTS7qhiX72693L1rUELcfuNgmZrA3ZPToDuvjYYHqAaGPuxEv8rubdUFnNrzMqGKGuatw9UkbYeA7BkbSNk",
  "key36": "5udSLjV4SweDFiZUFJsQ356QPxFVtPBaQfAGz4Zyn4rT8DoKojRB4fAFDqSt4wZBJ8LWkfJ6c4FCg6RQXQZW7Tjy",
  "key37": "5uTPG6EKdR3H1E84hEHfxsxrgCf28TFYV8T2qJFB1dASJihAfVGhnMUcG5sGJQicvt26gMwMVYSuVfq8A91Bdyuj"
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
