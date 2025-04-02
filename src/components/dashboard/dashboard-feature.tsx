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
    "2sbFMm1qPjBveZXMcwVWWmfbmsUfmpvu7RESLcGf6Uugw2aLG3w82LTUqG7oTWsfEky95iL5u8UhqV4uYd3SqkrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CK2DayNh7StEkhdZ77Kr9nDiymHRTzPNbfVv5BM2AjgyG2nB7MoEN6vV26hvqE46YwySnTtaPs3mkmLUnKUCfJr",
  "key1": "4xCzsNUDFUsptbCr8rkYKDNsZrYtE3pQxn4JifFYjg5vSnZTprhAjGHx9sZY4sd47kdGbmsTFprBDdboFqbZec9S",
  "key2": "U3NnXYS4cok5EWfi7ND5Nubp7BedY3hBeWLcYRfZrF3AgNVGQ9mvbqUCc5xinuMs4LamrEFRc5aW9C1H2v2PFJg",
  "key3": "5crbKN6h5nSoQJWzwx3mEu75PVVjeEvEnvqnn2Py8ZtZDVsyTjGpTdZXmZ7ZMJFa5R49E9uiAcCKjQwg6an8pHXC",
  "key4": "21BuJZrkLwN1y3vnDFD7bDX1MUW45W2Q2pPTL7jGVWjVxHsg1UBujdEo13aCdEPGBPhafUwJo7ZqHBbUsWjNPEbh",
  "key5": "4kDfu1Yxq3rZeMihPfFRaiJqXvSHz2nmXe9xeTT6EE3YjbgR5Y8KSGkYGxPYx4j2CcXaRh4UtoArDiRU19oKq2Zu",
  "key6": "4oLCPpPMHAqDQa9jiKxQsFsz1WUtsFRLU4ryB27grTWhCtP3rkXc1xUEKwLgtyYuVP3Ngyizjdj8G4eKRh9CBqKA",
  "key7": "CCMBk2nJY3EcQpreQabF4HreW4GggNCa3dzshhpLjSKSTS5yWwoAMKPYLWnp1BEvfUn6h8Y23ds8WgqrhMYKsg3",
  "key8": "Wa3pxxRdms8AFeAoemr4bwdPV3msmk3M5qf1GLvqXCZBE86zaEbnpMmtyrw5Lwg47fyypn1YwmK2fedfCJEEp7w",
  "key9": "igozy9diBMPYnTXE9N7m9eAAiKvPwSaD2raC1TTz2cdHgp382Fi34FHJDRXNeKWjFKN1TgWmCza6HwgACuoRiP1",
  "key10": "Gr5DzdC3UvmM5wA7VfHyiUnkLDtJ7NeF54kzMtFmtJSUk4vinaSP4GYS6L5MXMpXrBmp4UrzCtHMrxnu7kXiNy3",
  "key11": "4trhis9tedDNb7QCsM1vVEWcrAF9HxysWNQags8tHYYzowZGx9fLCEErWTz6eXGb9N3yBoXyKywomo9PjafC8QBX",
  "key12": "ZiHhDWxRZPLL31CLSCcjM7e8HYPTrvoBcH5KoYfW9NjnHJeUdQmEW1TsdtWHjiuGjGh1iRbFJiexF53j3eE4Qyn",
  "key13": "3ZDjCALRwSqDkto1YV7adj9CiFVuzAwVqYgfXBC2irbebDNaipx4a2cqWhBKb2TAjymP2eB4w9hAMGUkeUSafcNU",
  "key14": "4WgP4xK7gQgBYiwKvdJe3ba9LDEtYvgsr4M3f7wzV8NyKuFsmv9XrbRmWYj3KoKC1cTdUzQpDz22XtreXQNgehv",
  "key15": "SZgBogFvyd15J3V6VsV9yTEQP79qoY6n9j7VnMBsUZJHqE56M15x2WVcS1GaaMsYy7L4mXXcL8agsFjhm35kP1B",
  "key16": "3ijsnvLHAa6SPJeH765xeqKg2MqxsCvPV2GNDeNYdjBpmEHMrpX4PNTJJksxh565mwQb9bzgrQfay7RUvdyj6p1p",
  "key17": "xbUwiSwriRAaZyA3fHRTe6cGFtgCyhfbRoSKrpijiGvcECAWFjewJcgUqp85KA9Ja2oSonNnf1WpsNUUsicP1bD",
  "key18": "4uygeN6RDQbBzyrTKMm5LxpLLZiMVmtF4jbBcoL4U6ySh1ULrwbdL7ebPT4jStxD3uzCSRvhbhWeo4BrUAjBx3tP",
  "key19": "TdCWGWKmY4pS4aWYoFdiEdkRwRP2TADiEaQmuKwW8yRyWujYML2VLfz23TjvfJR96gx3sNUM4G3BXWc9yhXWDAn",
  "key20": "5C5ctfB5VSAC5VEiR1bW6VyZ92ta2EqWX7K26s8cbGG4oxowRBsJdX5VZCjGxR3TXbhPYsqAp2ZsgUizKfMtEBWM",
  "key21": "4BDFLt6o2FznaDtTeSnuvqpAjZhSZA78JjF17T3KeULmPYnTUUzRBkyM916KZfFtKVyHzB8euWqtZwcS4VrjAyf6",
  "key22": "VRNJG8fL9mgHn8FapZ6SsFDemAKo6PPyhgCTixH6kzUHMjdTTXtnZJVYKZz44caMgh3qMLxjNvhiZAmjLaNmvzD",
  "key23": "rvK5qLUQxuTQuRhVcC2r3peou5zapbwqRB1ynfV5H1Nxo1afGVaJ4VxhiXkSHJURjp3JB26CoVCuAofYHiwsc9R",
  "key24": "4nGoDFxbKAR78YpBdKw2yki2S1wNELPZhgzidAdsPweTioZ7FDf9C7L9T7Jb2TJtrmQg35YhVDkTyJp5cfx8ErPz",
  "key25": "4Rzp1g9Nyo16RzmK3Zn3WvUbWLSkT2oZyyvKvAcHSMiSzDxRuwDrXFw5dyLQwRrdLVUYhyWvVvH6cPovxyQzKV6d",
  "key26": "3tztWYU63X2CFykjp34McSEWMv7LH7eGuc3P6bY6ZTQJ3YNgDmR5wQPtv4jveKZ3mtHkX9ZBt5JXqyuS3QeywNaC"
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
