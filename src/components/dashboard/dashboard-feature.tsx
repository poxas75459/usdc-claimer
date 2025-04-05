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
    "4QbhvAc7atnxAwJM9vT7qv9kontApCLpyJKD6dnCnUW1eg3tsC4Z4MwRiAxkLnwa4oiiKUCi6avfmbKkoF8NEMt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b2PQbGRsxqNBEy7eaF7E2NsHc9MQsD9NwYfLWuBNHkfMdvcvfXCSAVWmCkYFXAE5uQkWEMJE2RLFjWX5FiCt8fK",
  "key1": "3KS1AGRoQZDwR7mLWLMDPBqd9K7peExxjf3XzuVwmk868mLY4PkQ7Pva1G4omZPZdi5h7jK52VcznncNRWg2cpx2",
  "key2": "4NH5eBNQsVKNGvixnXwXLPZbkMAJKoYto4vXFmqXhmePDSCqJujnih5aPeX9mwhryoQRWrRkkxAXmG259BECdvsh",
  "key3": "21cBjeB5FeSHikYChhxUnhocJkTeocg72WijUoUiw2ep6QNyZ4Xmn95z91QSR44AP9VRgrvBJ15wr5fV1kjBkng5",
  "key4": "4Gga5d4wECXuDJ6LymFezEAtF8uSg7gfYrQAdTjEJPh1rQqJ7TEen4x9qguAjvYw7tDkuh2Vf3xSSywKD33ojLm6",
  "key5": "4VKNEFAz8aCG99VLgXBsUknqUXNSGigZw8c3AxiKB37d5mhEkythUxbqZRyQMYMkqDg692Yd9uPV3prJDao8Y3Sp",
  "key6": "4wR7qHkhjeqG2i1hcAeFWn2jkvx3jGhsBkD8dQHrvDLvKxXDwxQYFZCmnp9VNdAbve3a6eqJHrn9hrdgqJkNhU9R",
  "key7": "2X32eGby68kHNtyURTibBUg4XdcHMJCLD3HjfBDvAVi5mNtw4cXtkpArYTfDwJ2JiChBnMe1GamwiLSLdL6diYuu",
  "key8": "4kbbLHY4DYrzQYBzYePKCGErfC8gwWwjWmRzjB44XoDk8CCjJoNVSqwUZyxjRuUom5XuR59Hoy334P9ygtZGdHXp",
  "key9": "4xCt6Rg5EyNAUzCQ1M23xscwpiisfsGu844nf6yviWK1uF4MpzQwLvVk4MXWkv7BHtfkz2hNa6Q5oF1vUiLzLvQ2",
  "key10": "4W1k71c4uzw1ARgfvTPFgvoqC2vGVAFbuU3k7jwF92KkmhZt6zBiXCGe3aQjtijaSvjo69nC96aEwnuhDkavF35",
  "key11": "2gSGJcXHwNUVZ9FS353A3kKJZas3gk87a2FNcbyvEbptpdzTLcmHY1mmLoVF6qsGgAK5rFe9HhnhJfE8ZWKoBeR1",
  "key12": "21npbNvXHKoGVXSr8Lz4CdyvfbLkdUqjwmUikJkgpxQ3jVdiY5A1jvJc3iA2GToKkA1oFMVi2KFJdQ8eHRrXzKPC",
  "key13": "4uditYw2XQ6K1sb1Adpmqd62dFhvVfpuFCfButuBCghcSwu3sXx4HcZ176jxdmbkubMZNmrxS1229fNjjp3V6KB4",
  "key14": "4sPaVbfKhKpjAj9bkvH1BrZsw6VzgYcnDiiTAbxnjTJidq5u1vRENYuXFRa152sw1fGP7cs8z7F7PcKH9Ppegfsf",
  "key15": "3SAkCFzxLg1Nui6WRo3ZxV68YndyNWWdFo6ZyJ3MNHtBB2zLTz3tFDpqLS5LvEwvJ6Nu1wN8DVHsgFndAg86pP9S",
  "key16": "4iBsuMYZyQpfMViE4etMEtPKm5m5KKdedLMXKfngSZZ5zkvbM7DUuTU6uS5yKrEaLWi9UNxvG3kX6bmt3wpwBFWq",
  "key17": "5C8D7Remxf7fP89dXbUbP9b4bXoJdGpGb7Q6K1paaiJqzJv9rsewkNbUk2bzt6TiERGZ8M2vuBmKmsDU8yex9TjG",
  "key18": "3Y4NfC6U7WFZor2wREUUX944E5W5wbDh5mWU96c5vS62bCrrpnRffLLN3ZusDARMxQ2QucGGq31X6ENF1iE4ign9",
  "key19": "4ENoC6SrpMvY58pJvBXw9cd2aKUZHampMnNyt8XeETvJcCBTEKPVKeNkp29vvSPp6HMNR477tAwEbYoeMfXjC9Dm",
  "key20": "5uf6gMsYXrZfQdecbBFxc3SvQmEvnrYjMv6EkTzU6h8xtp5eykGUWgXkJPDV61VDZ2Dth1K4Lfy6MLZun5mpDckw",
  "key21": "2WBWBVLtKXFgzf8ZmMuzsfbxWHssxiUb8kfEdo1ZAinmUUhReGyZFbEfnbNcoueR85fJomT2PP9XY12TTK6rFHkh",
  "key22": "5nWfWywx2eu2nw44f7rX1bjb612aw7udCfZJm42D4dVKpsEG2y8LuotzEzQo14ATvyXi6XX89nCjmpwrTaSKkGmf",
  "key23": "1Gf9G8eCXVQMPmKk5qtbbF9FNRpsCbZhRJd4S5Zf1UhucZDDzQaSEfyGewcqxVHfLZq99nAyF7Jq6DEZ8NHjRFV",
  "key24": "5xBFKHbqD3mbWRGiSGvGq53cF7j9YkhWzCMKHHGVE291fhJEFBSPn9oVDXpv7BxDWmm1VSsuyv1NgTSyudbSRtSE",
  "key25": "vex8KQYL6DnAqMnFkPadWbNVT6hXSv49vmFVhv46YRRLu5rDiFS3sa5nNdiWWWEAStx3p2L27KRBsPGPymCMArB",
  "key26": "4ATfYSjHRGPgYQZQGERn4cSMgueRs1nB7Kk8nzutDhFPZYpWboaG7bSrvTsW6tBM4DxXbge9eRmh5jBoRFJnmSS9",
  "key27": "67DD4wyQ3hzgt1uh9p2XczJ5FPCUVzmb4e1GuxDHjt2CvC8pcotv5SGro7ykixR9zmXCTc8UvQU5XjXTEJEx58BB",
  "key28": "5zKaw1SeE6mXuD5AQxqz5gc4DNLXv3aY6P7q51inBMHAFezbMU9S9Jvn9uHHRF9ZD97zQwq5DoE6VM9pLEVC1WpV",
  "key29": "9zVHZ9zQnV5Uh7t5jbAFzFQo8sKwPjNFqHt96gpitCJMxvV7WPEtFMqPNtsotB5rwZtLaemgRojG93qnyYwGhaG",
  "key30": "2wPkmDucx6x2kWiJyUdQBbW1U7eEBrpvore8RUhVUpCWiPZqvPLLwKJLgZ7rUXXBmHDXnx99YfdLJEoyjxTWNhQ8",
  "key31": "4bEjcFBEsqrsShmt26nePZb8yn4ym3baeYuj7ntbr6EqK6noopeHmGbtJrJ5EDUwx7FnuS3jZLpvGPmFEsFGSzd2",
  "key32": "2mbiU5QnS15gkqx4noAx82pHRA7goNVaJznwYmV3gQDMX5mdL6qzpCyAPA1Hxy3Y4EFffymRJdqzqAVBq7QyBJ5o",
  "key33": "FJPeJdNkEhFXkuYodBRnpYMqqffoYUqeWX7kMSiy2wt1CfPxGzYTy1N1KW2qefrP4pztLaBy66QMqwgrJQbRg4h",
  "key34": "3C6F2iTaDWd3JWTQuBRU5C7axoGnWabWXaScwD1oKkPGBsH4juTwWRGDef3xocRm7kZG7cZp8TAsCimHUfmD41a4"
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
