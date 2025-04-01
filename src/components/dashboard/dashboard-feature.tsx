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
    "5hw7Td82oscZYBYfptsBxni3q8ytNd7Az6koJnXLGfEmqdHk84udGinJTUsMemi3KKEorXXtWqwP9zrytv339w3T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "So4iKWUreAUtaFVEg5AFNHq5eMD9XSpdAkHA7ZNt3PHcY83uzPcfyU9g7bZ8in3qUf5oBv4JKPzfJkwKTDbp2Sr",
  "key1": "5UbkMG1PQtLK7fVXcAdzdtVnp1WtSHU65BDkEBh7NgC2GG13C79si78WqyQuz9qqwseeKAFGMWchH64QN33LNdUb",
  "key2": "4KHU9sM21vXj3NjJ8bJcFARwarURFT1kbyyQxKAUhe5paQ5x7rjK3Tb2BFVzoGYMT7vE5b4ttrhfuNwcy4YaYAiB",
  "key3": "4pkG1y78ejT9aQbjA94SWi4QVcdTEHoQTJqARumpAb5m5rXtZUvpeUEbL8vkPxV7UD23dzqp5LQJDy3BxAmF27AX",
  "key4": "5waSgrhEKxbJw17fHfQmqyutHB2ZXLxLJ4bHnduEk9k6KHkG6YZgqrAh3n77E2neHZA6DCaYcndNRBxiDRDPBySU",
  "key5": "67BFHn6WyzHiunDixCc4Wps3wBNzHC8sjfvU2xonnhxLqQGMxEKT1L8KFcg5MQhjXoqEcfxsBexjvJZ1atGkXGGu",
  "key6": "3ueAJR5du1faeUthDFWdBF3uFfz6R2VpVz1ejEG7pR2wndGzDGgKnzV53VHoXaE7qJkFJW1Q3Eqo2vZqpj7oiDMD",
  "key7": "4ompk7YALWrmKkGoXdKKCm6onWcfBaPmrnnf6MAC3NYEjzh6M31D1AuL3HUJmT2UAVNV6C2myLtpcG5yX14uRS8A",
  "key8": "28oYqjDhCzSXSsJWLt779V3A2fv3teTnEN2JysVv9UaqP78qmnSKZSst4LfvYL5ymweEH4PDazuFBA4ewsQKsFRw",
  "key9": "5fcMzy9j1iubJJmu1Q8YbC8LB9iRazrJ7Ap2oF8cdty8tkQiAi9qaVrouvnB4sQUSxNdKaQigyzfy4q9B7ikBvkS",
  "key10": "BVv3ZLUm7KnMegKEwz3bpGzBUw6KjsVDVD3Y31infbLiUG2XkbN463xME4r2obVHcjHmq1NehNKYEAJZQxqmmSz",
  "key11": "5sNQBSYwj8TyusBmTYGwv8mHBcJYRkfJWRo4siHqD3mbiQyEJdGcmrrYjhSj5JB2ZG19fhp5MaWFrGXntts4Cizc",
  "key12": "31XJiG42yUXKrN1bpMpWQyUqiJqzmmVcYsQfW9CdX13BKBpAF9QGQDsyV5d1SJZotvTVx2sgYrFUvnjXuRnGj4Vi",
  "key13": "5tB4RUbnQDcizyEzJWJTahHMUrdSie7gcP3SscHs7PBgb7WR8nzQVawpf6fy3mpovToKoozzBNzvZNKU8hQWWvFr",
  "key14": "4qAv9oJHZJiy6iE5kKSsBfFX1kEzyjWP2Caz2A6wy4CFhV2gbH7V14eiDEa3URNQviADgZcXRSPwxcQxkrh5ZtgX",
  "key15": "2TNW321JaoephS14kGCTWsuXwoT34AXPNpGGUoUJ2rzvDo98SjHrRmuFs2JKt27BD2zHPiskYKZXJ8u6oQnK3jfr",
  "key16": "cJZkHxLyTPfkxJPyDocER7NWFRyjiarcpSJPLRgyrYPSuBoDAC1aVNpSQ1TfxQnzGkV3ZZmQAi9k2946NQuPZ1m",
  "key17": "283BS1JBT3Cf39wYyW4LyCjXdWsYA9LzCzUfSg2WCiymLjBe5uh5kibRdR1Bk24UQQrnVHqPAhsi9AnzompcYorG",
  "key18": "4uWQRkd4L7XiE4kV79bjn8CEiPMCCK5inSecPSZRVqu3GR8CYCEi6uUgMab9RWqHgUJZKZzYAtxRvd7Fz38iFn3g",
  "key19": "3YdbokZ2aeJ2KgKofT7Y4bbDLYqjtWKzP5gJurfsFRkv3g9MgqGRAjGKnSTMebzUDR9mpwZBmcnuZi7chuzM7mdV",
  "key20": "4H8fDM6iWXkfNk35XtxSmz33mrvmk36hp2yx1ankyAbUXG94jpLPXvJPfdjZre1j1xsNYTCskzL9o96aXkGVeCPT",
  "key21": "2pRq6in3C5cYYfwunXCmBo2TWP9Gj8XZ2nWoP4CwF613py1PPmYNHtxTJpGxKreshP4PLAkd9rnDBFxct4Pf4AS5",
  "key22": "22zcGJ3HpCRWZThj3HK4MQfoU1txFaCxvUutQboybcGJNTyFtLgbmKTNMeaiwCdd55X1v1JmN17dV9vsNF7YSXzz",
  "key23": "2ry9oMv7giKa1nLBjSnHGEJSKJeQ2UQmbWGpM3FrEWFRAT9oLLMQe9z1WuHS6V4SqvJ1PPnMFFvJ1nb4CRhKkdDU",
  "key24": "5gzvVnde2CAYMHUvsn1RMnaMWZzVb8L9Nf16WYnAE5Gm5of9mbBdTSR5nfnBPmj5G3beZuhDSYmMJ2JcD9ZdrTWC",
  "key25": "5C86xUio9aXSb57q6UuMCenpq6G4UVtqb4Zmp8TyAcxRnvFS8bKRc9mpDmG2Qz9iGdhKLfZMby4bBgVtx6smL4dq",
  "key26": "2g4NGwdnYJg7P4pepRHHbdi78MNRmF9Sc8pi76TtoAPHBcf62XobzfkTJPoTBa9uTZS5BdRA4pyx2f88RPPRGaE1",
  "key27": "5TYxcGchwVtNtuMaF1oiZW7Fo4BwCEwTDKusA24igkHtX5QoCPUq3FPkdpcnZeK2xRCZrTG5ZiN9qUEvHWDBYDmP",
  "key28": "2kdjFwBH96RsidvsMKTcz7Gg951HLBCVpM9fbrAXcPCVNnELEhv5UU8KwsiUqsVvaxcxqkiXh1AjtjuhYQbZTwSC",
  "key29": "3QRyo7Zjm5cNMEdh36pZnLmG5XQCU1K3TMLJoPU9DDo9SxtzosCdrDesQVyd8UAwbABfpGiQvXu1rLdu7H3oQcjD",
  "key30": "5krmErfRHGy66QChxywa1zKPNDv2Vzyy965UzDTaumzPuy9YoysxtYkNCMujU2Jz3v6WHcxPGR36R9J7SDdUXQFo"
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
