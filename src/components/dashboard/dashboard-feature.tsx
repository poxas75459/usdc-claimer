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
    "49HuyuC2i1ndwuyfUAWvBJCn9DTxr2xJxAGum4waZinbGstH9gceLuGKQWCANq1Vgo8JwbCFamY4GFr39oE1dacV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32XCoWyorW12vZjJrZ99orp2NjTgaRVTvn4dZB3G7t1u3HyjowYbpjykKHYtPBnyXBT4vp8qtcAPYV3nhnvkvLwu",
  "key1": "5CSAFu1MarAh2pYy3S4QfNRgimACJb4661tMFFBRPmeKuZRKikRGHk8eon4YxCwxVKQZ523ZqLNhXDAarg6wNtwM",
  "key2": "22LEt5PPNmfPT8KCBJzBbgK3asreVafBYwxQTxRXV4iGBnEhwGGyVqzNqefXNDkysFnqm6xSDon1ELucLm2aXaCL",
  "key3": "51mru5hEQJvwPPh4MJsbNQyPWyrhKSCM6hAvRUUvDhxhfbNUNUGP1tjiW8AVhPoJqku5BbKQktf1bjq3ELhk3kcp",
  "key4": "3xVGCaR3gNx21b7kiDLhduH8B44MmSft1mHm7ER78AULBr2aGMBFtpSjDNWPpZ1UQcNaNFhjT476fxXNzZf9Y5by",
  "key5": "3YuEd8zj2dGhguLQcFncAfCuhE2ka5pju2rPthW5tBjJ3iFDCt2vqRpiqzB5NqtQZi7St8DodnYYrbqDR9hQpVwC",
  "key6": "2BjC7yTiqLE6sMo5Rxied8VqVYTRgycuNGtaH8Cd8HnX7H2L9cwvDXKqhxmyvyboyaYQ8NQGjkREhPjRTnphRokE",
  "key7": "5tnga3mViaPz5zmCJW7qAinMrfPPkPbTrtDnwf86AauVxPGQ83vKKjR5u7MdDZWZvuJ6kXZxZoezNusLnnMY5QLm",
  "key8": "3g27aPmi5vymt2qaQJ1xFdfnTtSmM84hKGdSxSnphcvZYKnHNWjzUrHyYrXQQTYFUXNpo8s8guXRuae4LJ1GyakN",
  "key9": "2gQ6XaZMLqzvGdLRbGsBxprDYJU72Y78bAhWUNvgyhg6XWVWeLw7sJADYzFB5jMyuyebhq3EKN9N51GLDshoYE9B",
  "key10": "5Xqd7n37jJqXBA3XSeLZEGMpmFxRCWXQ8zrNGpZcuZA7kCxZchCU1q2KW8HZ2KQXxatxt4L2wXsUsEvXDs3CKqpz",
  "key11": "2L9FPMnx74vNUJ7q66qbhxGczgKHkuUw2RCfUn2WNzXoQco7qFibDcB7HFLGsiJpaBaeBDZJUipvdd99HbLhGGDL",
  "key12": "4gJmxAKXgGRUAAWpoWdWmewSLTnNFCiDCM9GhC1PPo4KqYMEWuTqJSUVfFBrY51kmVMEZvwtNnT1uB1HkMjAwu5R",
  "key13": "64Vb7HinEHtwcQCeJ4bAf7e4njf2W5xo6MyPWrpogedxqG9xPSB9xmoAiauutS5n1iwfTupFRkiz9bjRKMNAsAmw",
  "key14": "qfNSg2NJ9eyFo7ZrMGVxDL9VQzNYGgbasErbUyuDXu49M9FQggcMYiqKfq9bGbUbYgGJdQLN4XaruLEcXZ7of9E",
  "key15": "2kGSJ6eEkfgrveh8MBXW9dUNmzebJpbTDtuT4exPaPaq3UBKA8jbmskYvEAsfYH3sAAvgJpV1yghp97jdQuVEDLd",
  "key16": "4pV17ddTKVQNdsJChfjk4rmB9xmq9TKKddDzhat3WWZjo9i63qwuVgFz2PLf17AZpJzNpFQmnRjE2SNgGYCnW15w",
  "key17": "bBaugTh7jmA269uv91v1e7M4XeZo7QdQNBgiHSe6BsuF3FKgcrz2UxwRZ111QZvL9CFwmffqm1PbDmWRyUwu5XX",
  "key18": "gMJBPDFbHQRNWgZudvYZrUYB1WVAU3DfHnN9p8X55wpYLe1Jm4TkYnkie37YecfkP8pezwREVLXqdCiVMyCLSed",
  "key19": "2J5fH51AkJrGzxNrYjNCbjaQWzAHJvbthq3Z9d4aGKR6wENPpXrv2ecwsAHNjXqG6t3qwe6bLd8sz3WwYpq89Fce",
  "key20": "2qFB6kSQ9FsiszwZ1cuh6dTk14S6eZo1rJimVw8orvqbwXPium18J6CGgcW4krB7wp5Ywrxy5eL2hUyCuxBpFBUn",
  "key21": "3M8zw9PsENRznycDcZVPDQ9xZnJ8NJc1tQqnP2ReVoGoAvG2EazR84UnotT38CrYQdztF3HAKoMuKSMUs7GyM3yV",
  "key22": "2L3Whmy1SfVY7kwhMdK5A1DufrvhuCW14DSMCMcgvkv5dNNtVDVb4Bw45NiTsLsuLT5wSHSRxYVPsq69iwC2aZ61",
  "key23": "2cCA8AtCD61cdUupUazkcsPgrXzkEh5t6GEjVPEaQHbChLY1AvLRkCaRm8nxbf5droLscHVA2YgSFzK29VGxWJBX",
  "key24": "5TwiLuK41uDtEJosGbL6po829LFpyQ4Z9TfKrHGq6w9GF5HNsyS5hbyZzJhR2sENYSaVdmphQTWKNxoQvYvKBZk6",
  "key25": "5a3yL26tx73EuekiN6bzRhdbMudCFQhc28ArAGpJ8SswQgRWoXPhiVfpYJhhnZSDjkPb5ThY7ng6vnZZ7PdVkPGT",
  "key26": "9BhWuBkLmSa8TG2hDmmgsV6n5wxJLquwHT6SuB3Y6WNaSYneh1qXgZYz4jvZxPh9dbdDdNJF4jXXBYNCEwj3NWp",
  "key27": "2MQEsU2UBhCRWxSXJyqTmRgry2A1hnfzb6w2HMhnb8QRuHhM8jwvNuc6YCQ7Pn3u9oy3QJ6RcedvaJ81hoiA7fBe",
  "key28": "3qukieVTMCBRUS9Draja5KDeJDxhc8p2yHbvLNjMsAf4gQ5t3wWvCm6bdWiRiu2FjWXH9pfJE9HGW3cWbrFdxVS",
  "key29": "4iZSnnHvWR33hkEWAMYQ6Q29ku8dB4qwYvXwdTwVbVu91yHnJhks3zWctRKqAgCy1ygMpWuYHotWLKddE7J2e5UT",
  "key30": "39DF23rNeonxtDNGeEMgys8HUgCKjqd3swfAK7rsV8yGeKmwzWkumHNEvu9ZowGgTFeZSzqekXmSyDHErQwkfRFF",
  "key31": "4jdyAwmCML1eYM3cEVF3TbRvHAgVrCBgF49SVD5NbbdLAwi3LovBn19o5Rv6owjzqS8JobLKwxQ9fxZX5pgZjAHu",
  "key32": "4SUDZJz6fte6JDqmSHweN1ir3ojxLCGK4qTGGxpQakfg753YBCNP63JKYq4KppKU29JZavd8DZ1m655ViGPM4f7s",
  "key33": "27nQBm6miasU5EsPyPjGZ6SKo7LrZj31CuMLbjd1Puu2vVdj9VaZ1A3qJxWZ21SvsNp4nuvxGMZTTzAMZ5nSdDKN",
  "key34": "2ZcB4VY95ooyTXXjuH2SEqxYi5rKt2KJaXkwm9T81R3B54dwV7wYicm4vTxmRky5gBpCZ8uNucEDEyC7yqqj1iTM",
  "key35": "DC6mdFfJAteBP9v6AYRzyRXrtNHCZyYbMj7MmKZZP1hzMWb1R2uCH63L2heGm4c6a8NiJZ9pZU9T7C29o8Ex34E",
  "key36": "47UGWi8LGMAvVYCGvs61i4BMekHZUBsy2HdTbT68N3kSrYTZVPKVTCz8gzBXLY1b9Mog6cedmpPY3zoqM64d81JJ",
  "key37": "W3ZvojCGbBN2DRTGK6xJQzt6vevMH7gyTEvWT9tLug8PfqvyZEPNq6dLJ55PShToxZe8nXV1HavPErj5Vib2eBm"
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
