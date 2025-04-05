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
    "4hp6ZJHqZ5VH8d8WP2ybvM4io2QrhwE7qjoqP9Tnq52q53AdhtwcBho2Eci61nFFV5rVXShbgMUB6ToJw8iABDdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8AoPz9HTvXAZ5dJL8d2YZycswSsDNTw1dA4qkdFhrFcbebUuXnixgABnaw6ghbLZKsJt6YwKhsZttup1A3xhvC",
  "key1": "ShFLbQggP6WoEJsEd9JaBnpKFWVt4ZyuHsW5iJQ5t2xX5eHyJWycBGybi2DHvnRh3ciGQ6AUk7zW8m98SNcnAaF",
  "key2": "51rt6LTVUAHK5QvXyWe2waL3uZfakJQapq4qmPKcYtbRunLyahKr71nzV6DMbikY7mtX5mKky1dGXs6jMFmYwGLd",
  "key3": "6394rNUZ8UNM3tuKzAwdCe5tv4R16YH6fCMRjND9XpjNFo6KBdv6RaDGfhA4fekNZ5ho81vCMc8LYmzRDu2qABB7",
  "key4": "eLAJnBE9FBM8kAg7ffZ23C3CACA2ujf2eXpnqHmdaaBVUQnaKjrtqkePRKXBUvHWTTVnkitSeLsznZMNLs7nuE2",
  "key5": "5EUwSPL52Wy85fGM5eHvyDC1hMxHmXhSkTqxo3Fj9J1FHGHvsyqDtWoyk37xsSL2wde5NLNCEfzJBZcsCt2Nc8mS",
  "key6": "2yaYZXtz3p3eLra3LhqtBxSGjCi5p3XoJnDQ326YRuKiAZDdHP69HVqhsazrLrVg9zoAu1bZnBia6RippXvTUXvQ",
  "key7": "2dkoGVjifTrB6fFasKY6dgkWEB1zJ57VC4zkshrv6Airvtu4cxgBAwxWXQmw6Dm4wah1J1FydFVN77zwgbzsBwEZ",
  "key8": "5zqWCu1cyNtvCQDqSyzHDUNb7r7MGyCfhrHXrRKV8zJqpjyrAknEaxb98ox843wJkiFKskGXk54DbFS7dRiCJRM7",
  "key9": "2Gki4So5oPResY6FUgDyz5uZzeUU15T8fShN2Bi1kdkCGFVdMc2SDr417rg5LqFEKFZdp6ytVy2vS99aSxkxkTaB",
  "key10": "42uN8wovTXZoaQViG9F57CeyTfb4YnMMUo79s65NqtrzhjZfrQaGEXAwuFNdvkfVSH4NbwKedKGhVgoctiDqPvmY",
  "key11": "5fAutDNfodyQEu8jJu2L7v9WcY8BNuLSWLzx3BLrxuSoCAAKn61qPCXRrRfJjA4xb7B2rhTPbZ96GtDfDFe43wzq",
  "key12": "mCFe1YoSvb4E6WGkGCMWnKSX9xEW8k43mQd2AbPEgcm3aurc37vTsUrYgWRyedE462ZUL1rddQHCEheWiJyLRXZ",
  "key13": "4dTk2UBKbAy88Y1qRZYAqxWfTDFyEcdztGH9L1DtGcNoeGpr2JeNqoxkwg9ShmtubdXN4BT96qmBenXmp58EhUaF",
  "key14": "2Q3Z5vwhVfZnKZYBA9yDZdphyuMuNd6VgJF8gKE82S6t66jSuQmEid93UqnJm39DiTELoxFqtjBNiuZJcdSHhAwd",
  "key15": "3uh7Y5ebKXwWzjP13c1FyEm7WytzvxWRcSuHLFNNBDU4ik7sc552LEkDpVuKBVh6Ecu5trWRA3xy9CeQDQQdx1P2",
  "key16": "2RUnWa5gLaLRFMFTzmWSfA63PRmt1m2NQe79eM4KAhL5CnEQk9sWWesay9dMqbwbi7DAxAPDaSni7Ma9B3gXssQm",
  "key17": "3d9RuADvxwJsm2pxLKmpNddt9qAwos32H1wrSJtXLVdWHK4egM39i8kV8L3MJVYC3y5jumheXjhsJuAfsVbMiHVb",
  "key18": "23D6FgX2FRmKVNKedqJY6K3MeBYXvBKiBtkhKRHbnxHtvDccg2iCHQLTeYTm5UKhuj2GzfdCf8sQxBaH3GHhi69Q",
  "key19": "5gw2f16DnyM6V6NnWxtgKafpKZSnJNqbVWoqUKGfmUv3HGdx9TFYCDSLzVBZNBUitTTKq3RKfu2obN7cxmhc41ZY",
  "key20": "w2k5tavAqRdCKBrJqAJCapPoNjxEk9gtwUn517kgJ75mEoA9ba8q9kkqUnwgo1EMkm64ps9HQCccSYtkNZZnhiN",
  "key21": "3keDg3LGnSoTCkA5xkBs2zJfzzX5m2TZzRQDTAKToMMybNbNHpdYvbRsTjw7vaf9ycJUPLZG5K6aWNetgUYSGp7m",
  "key22": "2PWy7zfMiXhLtW1iP3zgC1qRVRckZcLBRNjh82XtRthJEFSuauRwmA3X59NKj2wPcqtLrZTJ3HYA5jMuMz2vxwfa",
  "key23": "2YrMDfLZ6BxvJe2h19piD1itozSKkPsvMhmqPGWudtd4UQ9kwRoyrtt9qWfWv5TPr7bquKs1TbyaLjfoPkvJkg7G",
  "key24": "rj1ARU7GP6m7e3SzRyAwK7Nsnbx91Zox77rpH2FYeMSH8iFJ7UjpPPbqAXSr2EVuWo3AxPqwVmMJBB1EjPPWuVM",
  "key25": "2jcnYMxtpaSXmky5bLtt3e2qePMzS3z5r9JnKt217L8ZU5PvVZtjAsSXXzxp3r9m4jta47JgCpqwvM5rRkgcdnTT",
  "key26": "m2cLYcaj3QXcKKtsimbDMQQBicGwmKyZseM8GFaA9KNU3UBNxAfF5c9YMyTnLWP1Eqo6wyk9YLDAQdv48ugY4vZ",
  "key27": "ue5oVczFkRer4mgH2fnPwe3mnfqFzhvrHcYSoU4yC26tr5tkz8rMS3YDgeFYL1td4FSrdaLkihv33Bfi859qbvi",
  "key28": "47RhEUpNcEH7vtM48VZYtWnZiErewNUR7MKRRVqfUY7v82eenYG5Gd7ToYZ7y8ZfXG4aeMHCvr5kTbqmzj4UyLxi",
  "key29": "5Ygti41ABmkgLC3ic5GdXFoBoeHPwYWYhtDkc5NGtmRdbgXsxSovA2uKxbHVi3oFmmmQonuG3Kcu6iXzgZUdCBmR",
  "key30": "5SktpPqufS36NaZ6n7xYkRjShdmrkNvwYxDmjtqtLV33pi33EgSgdGtPA5sTg2EfhRBB1o69o8EcpNBnevLG3YBP",
  "key31": "45sxLBMobrM1zZ37u9XTpX8znQtPBfaUZ6EHx9DGMFUBrVbtHPBsoXGuhy1MMd3tHJBkTLRPmwDLDDgKpuKodKX5",
  "key32": "2cUqhWvSAppjWjohWt7TP3Dtp5U5KFewidyTazjosRwriGyken4yfTbN49QCR2k1ipZZVz84LDSYbfY9AgKifKLJ",
  "key33": "3nqZQvMuqi7vKADdHJ57G4ab9QYz77p1nAApiJCTE2Gmppxpn4VfSQdV1jkfWN9iHtJDeD8tK3NuY5CWULQFCsKV",
  "key34": "2dUV6SDooFBNYAHumUAKhQ8nvwEr9cKsS72oopMTE2Xq117ppEFeyqnzKEzNt3v8dAgeUnSWX18h3p2HASf7cXci",
  "key35": "3WAzAeVGpSNxJk2cwoZWvDNFggZDSvg5is3g4ZwEDAcBCBEjS12F8dAhhuK8D6dRL4srstFwS351nhyLRVAg1smA",
  "key36": "4ZX3hHw1syGrLnScrhmXc6skvFQUKH9gSXDXHpHu8PHVh5boAks3pwcnkHeMN2fiJidjikJr2P3JNmVLtV2CJHSL",
  "key37": "5bSciZvy2ynCysmpLBqLpzeaNmj64SvX7rH67kYyN9ak4xsBKbYSb22Sg3pZYVDH2d3Beh43NZSvMNyzrLWfRUsK",
  "key38": "4FYEvpBT4ptRXjPBQk74kT81DrFJJo6RYEdG2S64FxfDxFnwNBMEpHS3JeHKSCNS8iQ4oBLwN3GYtMjZsauX9rNB",
  "key39": "2MEdeK2L14kCSqn5qErD1tccu2XzYTEvFBznXzRThc8vpGbTXj9pptJANj5WzRRK1C1iETWRaD7qLPqvPgBmdw2h",
  "key40": "LFnCHaNjahdiJ28CT6Rpaw8prChNUzn2KPJano3rfKZX6JbqxC75gDsy5MoViV4r9kxB9sYVa6DHVqCgiUiZhKQ",
  "key41": "5k4TtG91w6MYzG3sng4i76N8DnGWzokJXYwTCAnGQyuPnwLLkab13A297V7TsyRtKhmKtK36e2F9cV9U8nLgCmr9",
  "key42": "3UWoGTGgVYLVzZoFqRZNK8pbceGY3wMDQ8qYh6TW44NyFjzEMEmYbNR8bXzasofCQ2ZUsYz83Ws23L6mYJpQSzfV",
  "key43": "2GNw3EN4onqVQJ3aos11WnAGeBq3D3oAb9Uns313heMcAFjbkKXrnkFXbFyv73f5ff9qPR3G1Y8JLsucCAmSf13v",
  "key44": "36fP5qh7hXEmje2Yw9ko5k5ienq7GhwqvkkHqA5zMFHXY8jQGB4noygVvwM3uhtpyCvWWPQumFpU4dKoenRxA9nz",
  "key45": "2WYRAb9LXvPodqmFeqBiJmrubNnoPcYEaBwR8VDSutfPcbtC7PvUxuMMf3abYyv5htQhLYuEWAHCy5SxqCTq1Zev"
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
