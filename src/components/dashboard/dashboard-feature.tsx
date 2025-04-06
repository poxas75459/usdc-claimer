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
    "2SSo3DQvqnH619quiQxYwz47kJ3QN2PCVNsiaYcZySUkvCJb5afj3PSZXc4k3UNGdb7DDkYerT5y387YE2KaGXbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "268vd2hDPtVDHj5wj38HPjRLYvhd1Py6Cu4UthjdEiKunwKmvbNyfob4ghwt8pPW6z8Zyo83id48BpsbEan6XzXB",
  "key1": "25munYGNSVTtYbWwKReYctAZ7nUhXjgctWZBVELjPsHUpFJHCwzHwZCatifV8GRVqdaWAbyYisrQQqApvKyZ4gcN",
  "key2": "2oZejTtvgTzc7sgwkXpq6ndAEZtDqACGFaE9tggsnSHrjKwyJjLEKMLUezVLp57faS3MPuZ7hNsg2tb68cegFwGs",
  "key3": "3xJPWapgUHgQKhnVeevUpcZut7tZm6H3p4uvBDvhRWnfcg1dLqioCiJA2QQBAfcypi8AyxQxczrot5dq6rNvrsd2",
  "key4": "3n2VCWNThuQJdQq6Q4zUDnpadSs76uzEmurN6B3aSm1HJNmgvsqjuWXXaqBpbaECaWpgEGmiR7bNbMPy92DYU6Ej",
  "key5": "4mWah6g31mCYjSYeiT4Da9LKkMjrobZah3ZsyKNBSWESunJDKdCvkqrrRVKL8LciN49wno7gPcFEtsqXnTeCMnMw",
  "key6": "3nN2PTgT1qbh52nKht12nVjjqQuLuBZyc5wKJv6NykTBATtbcbPrt56p2Jj7M2PPKkpjrdWjiGhuy1C2HdywVabw",
  "key7": "5Cosxs3FgwBbC1DxKQSQEC5JHEkBnip4AFCGzLWmTyS5jfr6K9mFaKbyMhuA3H1F7Wk3gjCBDtpmhYGz4SZTWr7Y",
  "key8": "52LKeVeaMEo2cbi8VJ7sQKqSqSBmq7GhMbbSsE5PaFE88JcNM5DCZh41u43qB9CTGRJn5R2su22speHVQMCjHdPL",
  "key9": "3Gg6BkMqpKfTKFzvYDRMRUqzqX3RvB4P6e1yrcrHH8v19hPohvkhfCRvLrWbTqunpvymCsRcoL7yNkWUNzKG2ZF2",
  "key10": "5MFyRGpHtzoKRinLeQV2YzUy1c8Jf3wxywSDVTBBrbn6xEnqk5YJdt6LKFqYNhpk3jE69AKJ3mKr363hTecXnNwS",
  "key11": "5xFTv427pZmT918uWWZC6U3tH38FvfXz56kJk3FTkbggCXdfUj9yPE5GjZGGEmwye93R9UokYuJLy5MgB11J8uNG",
  "key12": "2sjbEXAMuBKTUNj78uUyxqDnEDDXYSDFAiW6A8FqsbNTDkgChjWoYspfNQZqvH11eSexwagcmn3TPWjcA8vVSR8w",
  "key13": "2NqYQ3XDZhc23iZ3T2qdmE75p1fn2WSocuXcu5J8H6FSE5Q9cn3tv5p8en3yZWRZFnbtEg2m1TJpGRr47rwkGVE7",
  "key14": "3KxSs3hboLMi4sXUqWSfDYF9GSahACuPC7E4NLMXK2PeXJZ9kNdCMYhUCHMbQnQC4ii4P5u8LT7dCLi7Cahk8Eov",
  "key15": "Cj2zQLpxYuvKthHA8DmUjbdHzk9KYkYa6FXugDgBLVtzAVMBhHfhCeV6XroM32APxnXyJ4T7yXJ7U2LjL2zsc4b",
  "key16": "471mzhzpcJK9p5MhoaEYX199Drfou15VEK1Ywa8buYLoqf1mizJzoUgTKCy9Cf6pFkMYZcRiP7Bs9dDHgBNhPUW6",
  "key17": "TFXN38tn7TxEqQjLh1gJiH3aHJynshur6ANrztTYUd6HnNzXnXpULfiS84B9nGgPAeUGqrQ22v3JyedJ2iBMCcJ",
  "key18": "LVXwtoMR786pmRCW28eqXdhKdA6PJaZhcBkX4UQQrteoWiU2rFf89z9EfCXT4qjVwfBNudqTFmgxTS1cyH1A8ux",
  "key19": "fep6n4acziSwUztfmzZ4gJSZA68K5sk2CusP2CffR6qE2Q4Fkxit5KqnMe6n9cRRvxnDWWPDf7oXERZsXqa7ZEr",
  "key20": "yAsF43GXesaqu26WPaEvpYSu9tpCSjnWggoT7iFVe7nFmfK2Wsy56REB6Eg3iNaDiEbSc5UsKjzgG2ZJtjHkKs7",
  "key21": "1vA69UkPQE24F8D9hQq7jD4jphHRN1VoAFYqyVnFhXj4RpPV65xyLEEXL5PFzePHBNusWY6uoinzq3yW5ZkM2WX",
  "key22": "44hhv8UsaMfYEtaj6d7gGRjNFxn3y6HSfRqNbgzBFHmaS5sVYSpnZnCWbBPY9bVPyGsHxCCtj3RmVx2jxkc6Xurt",
  "key23": "2XmnnnGUgEQ3WVFQ5o6YiyVnt2WBgSgxzG5R4KYNV5eJ4Z2o2fd2mu6BdFhrXm97yaBiTw6hFwLu3PDUmJNmrxHN",
  "key24": "5E4LBL5ibgyWp9AecNN2N3srPuootPZzUozTUECGyQSNjjeLY62B32sS7ewfuTmhZTXjXVbzDWvGH7XgGYBc5XSn",
  "key25": "4Qm2DbbWazf9wAMV6ahzHTWi4kxUM6axUPLBb7LvjRDf83gsNSR7CKrs31ZFvcNkfbAXHV7ePT3xWnM1Q2NqmJsX",
  "key26": "23VHkhCPNGi3AsVj6eXwrNav5PFcGgoG2qNEvhZxMwBePphjJDE3QAGxauMyz8kKHsY7CTqtYzK8BRZEKPKTMzA5",
  "key27": "4HjTt3F2t9o1499HjLFURtQwA83Pv8TUNqykiap4kj4TfzvrR55dHDE4jvPjK8x2hAHLaAXdaZZgJeeqfjab4Lz4",
  "key28": "2eWDJuKNizH7mZnRNSS5NzeWemkLeKKTWYFYYtvWoaFZNucZYjT4eYhWr6fTnzG17ojcxyKUwWxxwadHxBeYUXJw",
  "key29": "333PxFaqjh3ojujM6bjni1JPdGRLf8ovDpaGi8FsBwN6NpNYv4arnFkVu2YsVGDCguudMwPV5bd5AS28yJEaGJvX",
  "key30": "UKv8nNQsnmJ1dojjBPVRkNgvDjzENGm5Nk6MT3Wo14BJM8vxa1Rz9MtgRDjorrkW3BLaYBv7KKFWpLVVZQbeCRZ",
  "key31": "5ffMvZwb8ayCjPCoiMsvYNPnadEZkgeRB2LZd3NinTNpi5qwC6xvNwXmugr19aAtLaY4tx89STRMkGbdcZ7dZBzA",
  "key32": "3R7qg1DmYf4bYnTP1giSGxP9PPpDoEAqVFqcTB7ttrGMg4X69FaAjZuXKrbhfkuXKnSw5X6TvBHFuxX3tYU9brtn",
  "key33": "4EHyje72HDkgdntFph8YeMTzck2eAhRBW88YyzHsM4XLwwF1F6q8sZtdQsLjbbftKpVMs8oTxXPwD1FHwEwRhueq",
  "key34": "4NZBe4AjP3nZjo1YTMe4z3NLHBvhzYNkdnxMC1w7UCPrmNBKwUgevB2smYhkH4Gv5XAq6A8aoWq9qdMimfrsXWzt",
  "key35": "42hSBX6o1FrqKbMNpFS38BFNTqUeYPM1di87pRfQK1Y4Jf818TzYfTvdS6XbRA814u93rfrXLsrJhjNazRxQAUXf",
  "key36": "woVf8Mf1qNhfPigFejzMyd9ozf7Z6RApHZVJJYRs42WPuVoxwCkUJn1NRwGq7YG5TMq8M4VkD1nPhYLBxN7RZTK",
  "key37": "3ZEimpRA2LkYR7HHMunTczqVJAVFTULX8gtcdEcLs4ZMs9VWUd7UamiDcws2bTGJHWpTYv9dv8MczceYsyRbvHTj",
  "key38": "67DztNBHCtXnUDKHvowc2kHgqTe93f2tjsufwHYDfFXvGVdktUhETDFXE6QSnZdBKLVJw7g4ssvo1R8GxrENT3mw",
  "key39": "4FYJW5uCU1rfz8Zagb5hz2XLqgrGRo5iaEvPyAFQ1DyAAKfkHBGxBsLXBYrwBk2XFb8N8fdRxYS4CSUBPsvCfWq2",
  "key40": "snk7eRJ5MyzaQKt3ExdySJxC7Cjx1GTgAbRPCFSJjARntuy4BEbAyP7WzmZvzaAWbuBgdQ5EmfQs3R1UNB9vZou",
  "key41": "31NzpzyNhcAZLGwLWLJKth6y1RrczDgziU2iGekJ2116Ep4HthpKXS2gywnkKMCkZMc4NkpRFca8WnHF29aej1D1",
  "key42": "4net2VMp8pXyP3n8WKYn8Qw7K6JedDNs4qCcvmSnef9s4WYDBf9cJHDK5ZZ3jDspQ9Z4dVtLGvjDqBndC3SnrVPh"
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
