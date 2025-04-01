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
    "4kUYNtXPxTdBJZKMoyvKAjDRVAEvUnkh3SaqaF7EL9bT1JrLnGk6uB3t633q6hmCXSEoPEtYm5X3LspLFZGGAzZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aTRYqjgGA1tWJ5DkHxmq2GkCmHNSXWyVsqQ7JTWrcQxs4WTrq67XrjpP9nRVpRXMXgMxwwuChaUw2uV7eaZuwFn",
  "key1": "5R5JmBy7epE7g7FfP1aSVB1uEpYXvY2pSzrAYvXPjBoS3Sy1rFSz31DA87PbSk5EsASymwUnUU6HdkuDgy4uGKUL",
  "key2": "5w8XxgbA9d66QzbDb3PKXq1DXFmB1cff53m9iv3PFcfzLw9hDX1oSt3rS9momojZrkuHSCc8Yry1rwdA1tTfbczi",
  "key3": "58TNaXzhKFigH8s6Ya8Ap2WLABkh6P1dKFkznxGndcceCeuaGSwVaByRNfXTs9mhb6dPiwKV3rs1tZNWdnR1t6u1",
  "key4": "kxM6BbghrosKArmd21UgpnyCw8skaLDyC8z8ijPZKPRWWr9K5VDQjqEqjKpskqjp1hRUPTNXtXVYUz9PpsE4gxk",
  "key5": "3Mmk5dV9rgKKNEjj1WsbeSm8STS2sT2x5t2BkmZV8kDB53ECzGqvp3dqvB9KVJGrh6AUqikcuiKFyVkYmNSFaF6y",
  "key6": "54UDGRkxnXFC8d8LQxHFvxkf7tpiWh6sw14nxvjCGZ6QLzaER43auhyBur278YJRL7JTJkWFz3MGQLPdGDVCoVYf",
  "key7": "3W4CPb5YUyuPNib4B8PKKG9nMKGZGwdnVMLD1VbDbfqi9qJNp6bRUDBvTfhD8qSpwhkhZBwfg5ZsQGvn9ts1zA9m",
  "key8": "23nhQANtYNxhKUXkcJ59gZ9gSbKdHsjxDu3UsYnby53RThnybmLVMvxYGommSVTWKxXgsDPbk4JwdPX9JnYmWRLP",
  "key9": "5Sk71C4FWXBkhq4BicNjx4gczvaYpgkgJRpx94F1HMLG64ejM1JYY5ZAckaYUSsPuptbj6L3YqWsyJsg6zwWhyvR",
  "key10": "sX349Ktz1J5u5kG3vmagB9GjaRywT3Y3kdWDaKQWBUGwxJqMxh7AHnS3NDaTeNSxyR6VU7yjZCDmYHyt6J3KxS8",
  "key11": "4wYk3m2CZ3uCNYH4kdx9CT8sW55Jij2BDsKVWjRRgEQNNxEQLGKo7oY8fu4pHRftkh1cRHFdgXCB4Y6qyGo2gtAr",
  "key12": "CXCNpNT2uTpvPzj9uHF43iLB1aPD8r5f911PKj9Srbc7CncttzxX3x5kazyyXQaVuBoFcKf7DmrocwHahwsDg2Y",
  "key13": "48NE2CQf1ehSA6gszZBWp1Fm4Xd4oV6aNRps3DVkX4hdxRefxjRWPFoSSQ9Dv9cFbQB3Nr8wn3rW1DVf4tSJ2PHX",
  "key14": "4u98PcXBpxqfLfPP67F6FsQfiW5JHe3cFkDgCw2uD5ftTie5UeU9ZkMTGdvGEk2eJkkE9uKepMo9wLNe7v7bgLxf",
  "key15": "3hHh3wdeJAhYDR3uKA1sn6BaVkHi4jGE4epQrphnFvTYXvU7VFuKvpikXzf9h6r6ydx61B41NtbHUAFi8DwNumrf",
  "key16": "47umN1TUkKb3gN4enVQsanzWSMNwByQpKD2PujYDk3sUoK74gK7pe7V6yETNknNPyPGD8fmw88si5wYEFWwoEdWA",
  "key17": "4bAYjwsHWqCW7FwxqwVEBWiFEFvmF3MUoBxC41hTw9ousNVbLL7ijT6fDYV6NPgo4uFHPcv6Qah7QQkN2XiP1LqH",
  "key18": "34V7NwXiBZbu873GrWL3ZRt4XSNitvsiSiqQTWATNzWA2P8uJ9zDMq6ZCMannBBu7T7wHVsZSDaq55harkua17Jn",
  "key19": "32ukSi51zs4fRq4rLcSkfzMU1Xh9SnRiS9qQLr9z8jRN6ACeNAmj9KjnsYtuZM5fyw5macTAaoJLH9k5ii3AFYn3",
  "key20": "2dpQ7XbxFXNSZccfxxm9hqPvPw1G9BQmKgyQd2t2tWutMBUuRmHBr38MXb8UckaBK9K9PrU7vigjaH7ikuwdXjvM",
  "key21": "4dCrFHD8ee92AAchGroL5kNbjXNRq36Y5VKUW8uyibCsSsSe6MqS12cNbRxtxKTdBuCdyQcGKW999qUZCufKqQZx",
  "key22": "4hfNc6nfmqbvzYyUZ4SatvqapQGRrQZEzhC9kgkqF1yroDCeyCdBnyCP7eQM28awWGbubAQxDFvyrgkzn9uvMKr1",
  "key23": "4goY1rLEQTxpRXFKAjxTigTYYMpwULxDnZiACX7rawn9xHEqysDF1eDzhCpcFDZQNah1WnDMsftqU1PN8yN39c7i",
  "key24": "3LCi2G8JRrXGgePYYGhmgSYs1hikfxib7wg7Ay8GcBFJRVQkb6fgdEHhQgdsHAaY6ck6EfVAr5sY4CqTYjDaK7TH",
  "key25": "QwG5bT6TXaE57pRbBsnuUdPzHokjpRMkr48PKZ7vidsBDYx25esZvNvSMNRJcK4Bi1axach7SGHDidjmnjexAhz",
  "key26": "P57yQpBnajxeSsusGyetN9pb8Bmhq2YihFDfrmEno8KfQG9VXFWMYkgK7Hayi5aKwfsRfpj3P5Jb1QMKGLcKo8q"
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
