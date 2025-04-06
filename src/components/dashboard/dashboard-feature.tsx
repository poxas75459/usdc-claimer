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
    "3LyBLHNjdbLxpACbK44qmQsrreAW8ajp82sDvHaqiBUFArFuEXcGtYxVDUjEdqAtnBTpWWR5V5zxyjxhtdLFN41o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24zPd7SQS8w8kQPnifMzLZtPHTnAbTEZXQ9wcSxiV7cDh68zR2NgKczkeYzqzQ5wyfsTHvJuxQLD4ijzcWFzbgRe",
  "key1": "5NKERRhE7DzsLd5ymk52e78miqmsR5bXngFwDYqbdX8BbASfsQeon4LzFgJr5RN1eWZHM24gXF2iD3miEtabrRfz",
  "key2": "4fn2PW4AA3zBudgnuep32jKPidWdZwBGK692cHAZ9CiWqKU9GAMABPZFexhQxMLRczSBStth1xx3kNfN4iyW7nw5",
  "key3": "5ofXcXzHcSzEqyrW3xCxpfVCVxi83BSKkpjCMsnntw8YkLAbLJtKfiQw2Yvp2taB6qD2xsaVfwoMKiusaEMNKqR3",
  "key4": "PMxgf3W4ZgwWFQHJA6xoJUz5PzLKx9qbTxLckzBok9RhjjZWDHxY6invqCa18jBpH5rTpDMq61Tdf6hQM64vJiz",
  "key5": "DHr8FnLB1P128uwZUo311jhnbHoVrexoYoCcWLSRhzigz5a29wavjq3JtpVcvSrCVgFKMqhC5AYqjsrmzhme3xF",
  "key6": "36YVANGWnZTsPucLGUJKXpcBP59DQ75Qh6c4icw7Sv6GiRs7jJ7aKm7vEQ9aqgy6hvS5JyBJXUC3L4igLo2d9hzj",
  "key7": "4zu6FaF7hgQy2tkwrKKWwwJtZks3SXDjLKxNcYEJjps9iGsaVxsgEbuzjU6LQfCUuuYkdEtNJuk4jVdGV6h2aHMR",
  "key8": "5vHja8gpjk6AGwf24JhfiahzYPMbZatUFK1WAERsqcpf9JcQq2jt2Sy9twBqVSZdAeSCQNUNKdy24GrX8MYg5uLS",
  "key9": "kxvuhFQ4S2jAzimunvDEwncF2ZcWtCBcxs87y7gaQjSJmCTbBRvgxjdnXAHtuV9ChRm2T7p5gwB5hKRYjUNFCKc",
  "key10": "3UXVuLLjCWJcoAtX4gw1Gax9rysWT3jJ6AY5oFcA2yxNa9yy4mSY58kqBREY5o5hbXxchb2LWKZZzL7neHYMGvNj",
  "key11": "xn2hdBQB1mTGydWpsjFDkoetK35Kth6G2ABTLk7Y4RCDPiu4BAsJVqPZf4HqfiAWHNkZDEPiPRSo4Tvj17VkWnC",
  "key12": "3iKF9WDTgFLkRYdRyCbviFFcsh8rKzfhQ9siQnyvoG9Fr6UXWvXKkNRZdk8MSZrKNJaaox7kzbQH9ux7bxosKG8K",
  "key13": "2R9ffoeL4wWyXy2yNo1WNkvYDwJbXbhuQXCzw8uPipWuUaiP24NY3sGQN9ZBDwBwVBXd1GjcE5pNV9Zk7TqgzvWr",
  "key14": "3xFLwhaKxs8cJDq9erPPZhCLDtruYRDj3XWNRFZbqJWD9Xc4h5BDrWF2KqDyTzn8Dxv66V48RoWkj28zGpQKSBLg",
  "key15": "4KrmwdGcjcGRgHdC6zzdGbE8cxuo9rL3pPB8SL5ZEoFFk7iK55nzZYBNk9EWUCj4qvtdsaTPNF26994q1pU8zh73",
  "key16": "5YL4MGZkHTwSCUFafhKjxZzjCEoDiB7SHxSJc73o2uNUUjdYj3YG2h59cLuqcXozrYzuZ65o4MTuhEgxjmNVWpqx",
  "key17": "3fDagqEdZMapwT6ZdFZnadDZ4MsCnVhF5HyMhL6XgQTx3QShPzXJBaf3KxdMNKkCSWgKLbcYCcPKgxnY9iCmbWVi",
  "key18": "5eQFgmr1FVdRqr9psqmQVcb1yKxSFz7VturgQkkwD22GwXACZWZRd8pTFsWutCLWe9eLJ6HMSkTCuVkbE6wXgLjC",
  "key19": "3Y1GsYFdRBWuFnivF9GDqYjMWL7iFQoiWzVx5v7LbNnDwdT1vFURVWedoRNsx9viPWQgYY9vLrBeAHWXmhboCL5u",
  "key20": "ZyeyNjse67kMN5q15YWjdhsCcu8wmnmZ5c8zJPAy9egTpuTpnFo7anEjnXpJTEmy4658WiyvXH2hYZeacfDJyvk",
  "key21": "59pFsvAWLVnyVyhUsFQy1xSPFeUDyXtRrvEZDZeJJkQTLx4JHAVVPjUyhdRE6eNLvsQDY7H8im8uxTtPVBd1HsHG",
  "key22": "WsyRQp4599HsCnpQxHoARSEfdX3ZDHr93ou4rcWTuBM5me7PdFRUcD69k8L1kc5YhkZoPdfGHi3JKfgmTjMJPcn",
  "key23": "128q1QG52YhoMmh5JERWwQjTJSjp2tJUoaiStVSPfP1A6yjvwqDRQtQfMMvwzntn8HgpwEUtwK9hwHu6jixmETW5",
  "key24": "24nfBr9wKf6Dpm2NvNiw81yQwZbKpm3yyrTBoN24j4PGvaMokVwTkTtC5XCcQM7MGG1MdNEdz1f1dQZDAzwMzame",
  "key25": "36p3uSoqPz2DTmPcRDvgdLDessFTwPuHA9ooKEDnc3RFijSRY3iiKZMyBh4dRondyJAGhhXehD7Xjpouin15RMye",
  "key26": "4hAgGNbM4hZsJXjsuNAM2bjmCRqRPiFvmvxwj2jaoYcr3h1NVSgHproWzjF7DMRSQzVy8FVntU1KHjW1NDd97Ucx",
  "key27": "4hzqmbNEe8aL2fe7U9nJwSvgG8vmbyYQ9AP8eJBPrmpvy8boK9ES6ka4PCcwg9Beb9uAsAwK9f4Q8dFEQ7jerwzy",
  "key28": "5EtSrPxTSSYdkjoarqtsTHUpRaj4U8bWi75ENktQDFCQpc8aX5cDvgYLk2JtqQxhF1TdQU26sMP52BEbW5b3Fxqy",
  "key29": "FCD66r56C361qkEBsfgHe6cJppVVjzsnxhxJS2hivJgDozvEKkNrtZh6oVccMnKYkzKZuyDQQYReT64a7FAEv6X"
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
