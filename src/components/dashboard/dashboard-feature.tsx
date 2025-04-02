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
    "3E45nYsEW9RjdW9yaPqDepe7UV9rmySrzDyhdxTKiwXKhqpKLAxn4iAywkZnVPUTw4jGQLCXfugh7HHeFFjh2Est"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V8GCbf7DhbiRrukHiFzaCcETThQrtSnakNPmVsbaZ8NYSNKr7jfCReQhe1DrzMSvULPvMCb4Kg2CCeQ4FMSV7re",
  "key1": "4wQWqyo8rtY2FtRsfcGJm8LSg3fahz39aVNCLoBoAhjBJLgu2W4G5utZQptzzgw73yDdShizMrP44WVYVyh1QCY4",
  "key2": "2bvFjNjkrfHvgfEAUrnZqXBJSXRp3HMYWt8BxkF6mpwQFR5f3BuibB3MA2fRbfsJKDjXeCNVQeLq25tQ5WBNK2AT",
  "key3": "42DG8ybu1hwk4qacmna6dG3e16eoD3MNzDQJdsMSfeQWN158iFYCxg9dh7sms4TCn7ZbBQQSaUgcHgn1zTrEbihW",
  "key4": "5UvJMsbTRyLB8eC3P8KEPawvzhkDubQAgJmFqhhotXCRxe2FwoUpi4k9w7ShCnyXmXXHk9gHH7x28xDoNMmUgu8U",
  "key5": "2mFHpiV5oKorbTqf699oomRcSbvrWkXGv6MtckzQJdMstFuk7wHfRdrFX7PxF8XbNJ2AhYi6xFef2qWGtDHh7tRP",
  "key6": "Z5oyD3P57GqX1ByyMYXRbtoB1o2MR6pfgwXqwYhuhozQ4bVGcajWpzGFWw3tLr6c695jKQEjH3Y7Yo1G1ZKehes",
  "key7": "4Zhsn4Xj8N9EWEvPKDfDYtKQfJnWsUneGrgs1PChrDJgaozQpb5YS4qSbYaY34onpMP1Ub1DqQHSWaJB82qMeeK6",
  "key8": "4m2pNFt4VCWLMdk1qESnQdcrZCCHiTcnqB3KjLVA6xNSMNs2yGevwEeAWvwWpUyoFyRqrCfrf5BHLFuTsRonJyfp",
  "key9": "3KuwCwSVjFdxhVAXDTdDZ6yNqak1WKNSrvmBuxC8ukmWByW8HAcrmVKkfwJBS6yPR4dE2gDmrkUawa6wuCUZz6Sb",
  "key10": "3rf5x8xjTwoiZfK3rn57Tgbuiy6HgvbXyGRU5Cia9sKqjJnEVK2N9RzubFTKvCHFTNyxK1WLMZa1kfEr3csoZkAg",
  "key11": "45dmRYySUEEdTJFfnV6SN1D6bpLmJW3ttnwmvkZbifRDF89xrGAgj5hstZpYDma98bNEAx9dj5Q2yFWi4aCcu2wn",
  "key12": "4qa1VPqQpnUau7X6iY46F8DUMiPUxb3tZdYv9ZD1NqmFAgSNvEPEbm9oKAujjQQ3MF6ZYGp4n4yLcHJXDEHHehi6",
  "key13": "qAZoFQY7BdanTiUmzvnwRcRiKkdraUnZBygtX5EX19LhtZAq5HPmMbFvqTHBt7RXf72MuALzYB23s8MGTqYoV8A",
  "key14": "4YCERbvc77Ps6tjUUu4VEAQTFwDwG7cxmHC9XjucgX3eDzL1js2Gh9CjvzQZQTMSMd2bwTvRJqhp9xhrphsJW7oE",
  "key15": "uzq2Hf9CtPKEww73T6MGRYorsedqoisCGFueKn82RgXTtTCBjos6izAFCgZqT2R98qYFKn4SLaHkV5hKK7cVJnE",
  "key16": "5hA5f4DcKvLMUxKM8kNtB2Kfz7TvSFLCGG9PfehwaTLUs7VwRZqHWW7bMyju5zuG2NdGoD19v4fmvsCMaRG7SNRa",
  "key17": "28eYQhQrNnm9jDqJaZTjm9wYmJoB7T7wdTzktZCkbYfcL59yFjZsm9pjXyULCoF1phQfCRADGTc7V2PfQmkt4qaN",
  "key18": "5qCupZNwCHiLQivRaFRgDJsrsDhBgzCv4LSxUWpcb6kPVqXZ3F5xBkFxzgEV3bT594sVeGUy6rzTa9UR3pew89rz",
  "key19": "3amVP43m1YqBTXAzkSqcLu6nAnSF9MGSBN1eLJS4pHf7aYHDLipEiP8cWv2SUnZor5WWcH4fUNVgYPyxG3gZWpnL",
  "key20": "fAt28NuhAHvJ65aj8UafRykVT1ANJHheoxfLaJSKUjkhgMnk8XEmyB3R49eQGVq3bWX3YFBLHvtmFNUPBVm2kab",
  "key21": "ZNJBSMG4wzTpJ8GUdXKVYQy2kq3iRc3GEpApXST8crz1z7cCem7gpFfsHn4mXeqCzT82vvxjx9MVFoTr1TCzyjc",
  "key22": "3t9fqidrrar7eGwxWa1Rk3uVQiKJMYw6yV9soTzmpMt2ddAvzB8AL2tzD1gsC5ugF9UvrSLQCasdS2Yscz3mmcER",
  "key23": "35HDJkcqvBXDRUhahJGjqitqNAHwT8xPvXMrGnxTP4yXWTWvMXhGZj8keXivnLyVzBwwV2Rq5L7dFJm2f5smdzRY",
  "key24": "4DDJMxk9527hzpiAGcaCzVX6SPS9NSfyT6Rh6x9Tm5i2wvizwJqx3zihX2trGKAuzYANzaCDEtsCcCCBVG4Kpf92",
  "key25": "36RXkXNs6Rsk3a7f3UCb3CVMX2kQgJtYnaLkNAaW6S2ikELyHZhw45dGXm1GQfVhgFJaX4eNa8AZ85F5X677XxKy",
  "key26": "2EZb6QCp8TJTySuhGxjKQ8HbwhDeuyjJ129XMmCzRvos4d5FQ3PonSsrGLHtByQeZ12AR93AWUUTrEZViur2iRYC",
  "key27": "5DJwJwzjsSXsrGqwpxczHB6tXuJKfZAAXMeyku5A6C4b8dyzeFSQAY9L9irwwUeVAWdqYwZiAmUEr2oLQRc1hC6a",
  "key28": "2coYPT7SmNHNmucgLXqxY6PKxJxXGh4ugKctdL76hKWxMt63u6LnA5aN35XKDhQpBhBrPSWuqCuH99JwH9bP2gGV",
  "key29": "2zRYE26EBznHnQdd1UBRDpY53vCLUqyimjvoqxChBjqgqVsrH8FVpq5N4i1JM1Dx43NVRDRfR2kZrYctfGfqdLqp",
  "key30": "EBX4nmEWtQdWubXpojXmVbMbUsZBRcRDf2Moeohge4Ai5BrUi5bRZXFBqPsHQWbNUSbhVu5LSzTQ99Kj1iKSbTC",
  "key31": "599yTJyBRYpxwaMWm8ep5974FAQcX2Qjp8J5Yqksy9AnrHGFkDNmpMdev5Je9qciKmYGt7RZTtZFy8uG4ND2v4bq",
  "key32": "2q6rmJKFymW6mLveg5asVKdZEFWjg7PvrFppjfGzxu7v9VQYC3k9rMMLVC6G67Rw9zMPBMLdLfT4fyCWTsbypR7G",
  "key33": "66ggxneeD1XsgBqsHPPbdAkRJxDkv34b8RJY8bfnG9jqLxzsLdAtXL4Nmt9fPV65cTZURNmSMVUt1AX1fg9LHAmN",
  "key34": "3gKbkJP7Vs9S8FGc7boxTUVsgD91PRYb6gQf37ev6TjS7rPLco5b8JZCrondRF85nAMepX5z8otQREqPgN35eJA2",
  "key35": "2wNFHfJ2VyBoXQwq7LsSV8JRf4GH25GpVXhGeLEEsVhoX4E6NXpufh2SZVZXTDeEmMVp4Mf1cHSVrHcxUqKq4fgh",
  "key36": "JdBPhCjiaSTP7HZWmtXk3MxuzAWSdfHuFeKGf763nrrYNsFbemVaSYrnfRiKS5v3bJ8NVhHUb4cb4CSFQ3tbw5A",
  "key37": "3BB5SgDUWh9spejCCcCE7i2jkD699ehj22NupfBduV8qXRp3bwA236qCKmWyZ3wMvoyeh99t6eid5B11ArWvzW8z"
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
