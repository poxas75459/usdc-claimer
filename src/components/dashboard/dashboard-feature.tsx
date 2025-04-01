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
    "3XxGyVuuXsgveXTMhFyHvMybhcXhNqisaN1zJ4omZtptD3c3RcEUSGYxSFrAjfz5vFh8dJiDa1nhiLfntKcNuJmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwcuJTwBAcWrpab2tfHAopGURh7QmEpF5rzd3G7VCW4DAkaCGxz5MtEgTWn4yGAtzbFvMgL3jLGVJU5GDEJej8b",
  "key1": "5D8EaNNXHXvKSzSMmbqY5gzGp9Gz38ygsStxpgnv2iPCE8XqPDi8p4tVXSKuw77hHfup8K9gFGbnvnivTpQpsZnw",
  "key2": "4S9JPz9tZMgquxWhNYyWsFEZL7nV1k1j4Uo9jSBCWEAYr4GWgs8FjZR9xuKE2dyxonMStXYio2CTc2VKC9ifBBAN",
  "key3": "2jW55z2CsmaCHdQ2iqxAipgGeXuikeM8D3uSkjc87yp7qGs4qxbWxYKvpdHhmiDbeyBgkF2TCM5zMjToPCpUWVvq",
  "key4": "5w8zdQ2cj1v3tuBEqxYE31QZuwBnETj1pJtbW8Ci8b6hRH5i66DbggCgVikfZVBmyJA9hKmQTgF8HbqKQSoWPyjo",
  "key5": "66f8N6kPYQriLPmSmQAeWEJunY5e4PEViN4aDZ1QxD9qHvoUnAGF12uSTHqFM5GE6hMvciAQ6SNdAz7Y2QE6yRXr",
  "key6": "5jruMiz8QWnDgVBqVN9BkTMACQMtuNiBGgpxn6M7M2nTp6chvo4x5J69TupjzmuopeuxztCX4uSsdCaU3ZGMxvh2",
  "key7": "33PGnNuVqpfsoeYNKyGsdgdgmMn3m5HpNUrgmPeVwJ6YW3Y3ZyGTz8eW29xzZMRpNoJNVJCozvBQmWNnpyDtFVp9",
  "key8": "5yEg8Ln4ZVWKXLuDDQBH1JPd1Aj2DNx28mMxMBXW89EVpVGM7kPNw5xesy82ibJra47ms1N7praPtRmnWVkRRdFS",
  "key9": "rbcm6aGdtkdpMpmzFyPPMaMaj1wvvztjBP1kAjaphZRWJ6h31Qt35wm23JYHd2izapeBfuUcB1AA79ghdcVR3NH",
  "key10": "4sBKPye6sCwVPjo5rrazeQn9ca28YmJ34ieNBcBuSffdaEbdDBCnTqCB8g52jKoBdrYiELvF1HSBqnDYkwrN6MdZ",
  "key11": "96P8mX4pPEePjP8cXmVSGvByERUMu4Ne7W3NqkJebVGghuUAJgNeJt5ed6rbYGHVaYT7TrMVrf5jWwoeu66dkNg",
  "key12": "316WT98J9hMyEdQLzDrArZ6CnYmtanDXuG5o34PCc2sVmx1j6iNDvDKwuxmirsN5RPSLC3vBcTTFbcAAErUeSURm",
  "key13": "5iBYmnZW1eu63BPfjs3tFb9ucNJ2cAHtfaoYe86wdBfRmeTnKSQravVTmtKgtvtWEqkY6yCkhP9jSiNZnQdBorEv",
  "key14": "5ZJi2PRVHikm1ez36MDoPc6bqgkozsxWQvoHicGQNbwYY7cAXvzD6CCwzHvm6kg9QbFdBR7qyWET7upQZhcBEuri",
  "key15": "5AkkKFYEsXx1M62Qi9ebZY6tPLa3XArWSFjHJoqDs2AhwD9KsbWjBB6HVk6hPfYAyuSvJpz8FmrYr7CJ5LkNxmbM",
  "key16": "5nPGZ8fCQRGTDR3GmZBvXsRx5mKVRXXFyb3GuP8LRGVHEF7HupyFXGAQvKyFf2cyTiYPVyqpfeXyCXqxm34X5Cd9",
  "key17": "3HTuojySrr4xSqwxfvGT2EeeMMynwb74eW95iv6Vx3s57gi4S1b18zW4PRfKfdoANX55pRb4jTnpVcnGbvsbVfxc",
  "key18": "4wjRxr2GqpStCRyTV6hbRbzmWxuEAxiTSeqSywwKENRmU4V7JhKddqJUGUjPDCLS4bK7P8cw9oKmkv3mxBKXwx8V",
  "key19": "4ZEYDCWzrMEGHy1PDQArTpWB2RP8fkhkHVYZJpSHfFgWxPdzLh9XBK9wKG4X6RgN31hzFnTrCckPRyYCpEnNdRFw",
  "key20": "2HVZjh97VbaB7Apr7ScWrohsJEq63FdGgT4nX2FSVmfQ8ssUUcihTBWUXQW5RY3mQYsgw9MDWQj25Cq6KehQ2S33",
  "key21": "3wQxdWHRFubaeEn7pMxX2BSRzggtzjHXPMYXYHngXPSN4HAkhLBv9kMDa8i4znwkKf1movrPi7eQP5eKAUH8J2qa",
  "key22": "2y7xkjNEdBjxDvppULTToFFabkULww5ZTbHF5SUxUBbKKVqbR7va2NPJbQah2p6vVhFErtwxACEMA8WPwqszGprC",
  "key23": "AoP8Z96ZwjVpSW89QwMzq7K6PYBUj8xo9KitE6J5cLoCSxQopFYMmTdsjwCucspaNTrrbsu343v5KJzJQ9caBif",
  "key24": "5keMeVPQyuuZ78zpx89mjApbtJAhZPfoVkwMLN64pHfSe5sjHBZMTPsj2Qb4TvNmkuv8aYhhnc7pbQ7EzhCxFZsa",
  "key25": "5no4tU4pdYbvnbqbV8VfX9PLFYxNXyM7kxtk9KTSoupRoVUe7sGvA9SidytsPgwrkoSw1buEZgc5cwhC4D2F9qvb",
  "key26": "5rAcCeYQpQ3mgv8Gh8dLKfRVD7pdM7ZuXSLTa1k7n1f9V5Sdm7C1gYP9ZtMzaNfev9Kn1WYJGzMZza2YLEkMLxka",
  "key27": "58hmeHqReyGGLC6qaLybirctbeTxQ2wuEDDhtTxcx38PefSjCkqKRwe7r12nyEMsXJtrX3nGxrrvAePFvFxAB782",
  "key28": "4odGzG4qG8qQACj4sfZU6GgyXiEUQtj13GWXUJRTeN8fFU4ukJhVBeEMDy4uCLHV18NohRWFCN1VD1qB2sZNFy9w",
  "key29": "3iJAbgzWeGkWbF6xQ7A2T3AkALd5n1hpmANhYKYSJth3PeLPWXCYaQR1YNTav8QNN1CjU3PtuABHhJkoxNz6UzVj",
  "key30": "4uSQENysLmF1S5LeDdhT5W72geV27fkrppazRi1ZWQCBuwz836yhUqCBYEdV2HCnSBT561Ww2U4yX7AgER4G8iZv",
  "key31": "2xZbPHQ5nzZukGUPAGPXM6Sy4RXkzznAhe7hhBSZMRBMuDFJbFnMMBW91d1LnpbuRYuKtU3z9uKUEVc4rmVnjg3i",
  "key32": "3RhZufyrwfcMjmsuV7YbddtPwNtPtrrC1zJ2AE6kjTGJbhXxSjUBe8pcYw17Vs1sZyr3SzTKRzQMRNc6M1wrME5D",
  "key33": "2Zb5YpYPs7Xb4HyQruwubMZTzDt3XPVxMZymee4nChvxT8VV8kmQBx29ZKJuK8SDifZVr5bswRwTVbPQYV6Ww3sP",
  "key34": "3iTvQAHvxbUG4KPM2N3d6gDqbfUz6XmGeZAYPFCquodANKoKQpe19TxkWEkXKrP11PMgt6om6WV57Lmjfzwp8oMb",
  "key35": "2v2VjQy1AdrXSRWt4t3a1YvpVP9dXmMtYNnbGXV52VqV3QvNuNPb8d6abUnpVAriSHZcYSBtxrusp1CJsfgXHwjT",
  "key36": "4UWr6zEEzps1Mdu3BXu5ZetUN7qwpG9Qfq2exPcgfVy1tv3yLbJFij5LfA7GrPKi6nGn9erJXEiv424UjcNk9Z7D",
  "key37": "4WiyC7BYPaRXYYH9iwfXHJ1fYGnHuxmRpdimJZXb56QR4UCcCzTywtaveSkd7N9uJHRWqo76KpK4w2ZhPSkPRmTf",
  "key38": "4YnmWCbhqR79aj2RDhtmhhr4rtzQWZfPJ8cEXTj8iGtBxhgKKqne6hFasXxYBxZRjYvUtvFkyu9WpcvgcBTy7fKh",
  "key39": "41iCrzzXkMq6Wo386ZenX4qsSxwA338jMRaN3vnRPauvF1z1zZ7BnxnhKSwE7hm15NNPZu6Zwtg9vsRYeqF4Y9JY",
  "key40": "USLuEdjc91EwtbyAMZA5hyXcAqgu8gBtNTwSgJi5WzPYASkgdQVEu5Yj8SLzG7H44h13GHGJCSUyszngFFnUcog",
  "key41": "62gNWkGBk2jPZGPnuhvSFr71xhhxfdse5duhurzYHoUVK11DbDeq32pnpyhoETmmNQUuiUhhhLfN2QoWhA5nqGXs",
  "key42": "3w8GdiY2gvP9L5UoEghWoLdSGyo9EwG7hidGCmcwETffKpXxMgE5Bg4DijquguJFMu6zXjmxe8BU3AnCot4nYXM",
  "key43": "57FAzwcxyho38p2LNLj3uJrQ2fC4Yg59Wp1AbgQnUaqF3dQfoXWXzBqRzQ5KsGWSYn6DH687qRJYbYgESTQQcSUo"
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
