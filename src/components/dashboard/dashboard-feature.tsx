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
    "5jBS7GFWTad3kF7YwNz5JNPwxfWqirifSL1oFUqP2cegVKe7gKpReMo7iY9bXFmh28bFqkFjULCqDFPgk8fGXji5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c7Tr6vMpzpgi5AdwboVSGf57ELt4X7fGVoQTYE8sXyoNotT725mb26Q9k7DFeAhMXqg3Mphm2m1RCqJpm2Bym4T",
  "key1": "G4LP8vaGPFr1Wjm4nGHLbUvjRYa7ghwRQuVXAwUqLzUY8NvBrREAjNSjTgr8rGrUPZZDjuKS9RGoS6hGhETRr8B",
  "key2": "XYsgYffzEuYujcTHhVDG16kqtkW3JbpdbfMfBB2qVrANkBjjpYYjLSCGxcKKwKiC5UCa7pLV4avFCD5oHtWzZZo",
  "key3": "2NcfLyyUdJtk8RGotLWKqGLzjD6VkzaTeZsnm8cAKJz6Dy3wVzveDdhGbXg7J1G9krLFPLV4k1au5F4VYAw7GSLB",
  "key4": "5LbuMfsx4vstuXbSuDd19zHURgAkCU8CxmDSsT1UCr6JSgF9t6hvVn4qs5DvkNyW4mgYNSBBHbU9HKQzyMdkR1Vj",
  "key5": "4BGXEXbYSR5WSYdCMUPy2YXcjdXsbRDwgRKP9C3t7uG6bdkvcD2iVqmHVryxTmXijtXxvmp7CRpUosn7QZbhAF4E",
  "key6": "3QbhacYkEzdxMJfTcmsA6Gyue1a6rcWBtRaJ75sVDvBCDbtA8iVxh2kb4zsVe9Kw54b1nGM8Yv294ryngGF64Tj",
  "key7": "2XN24moS73poXCDB8nAxfQN5j7mfgFDJGnA3vN29qXaBxhdPAbNgUQVNPX1RpPTB8ZVWm8ZtkfMGE13FW7ysvEa5",
  "key8": "3iY8hjJkGbnuKAVwuuAwMZRbPNQFJwg51ZUAez48fbm5wXg1jZdRhqWKqjKqTJrETVdnwvQdaShJ4BWjKqjt2F3Z",
  "key9": "3BBzKq3JH9pbjwcPgy4piaHjtUc7pi3VXpj6d7k6sHt6XPMhp3XrtU6X1A9Vy33AqeB8RTruUwgjuKJATjXvR7WW",
  "key10": "59fWQk4F62X8sy6vH7tCi9QCxh9kBqANCitj1fGmg6YK4Nj6rXG5PMN395vafBu6aLaor8rnRKAUj4p8VcnqyR9q",
  "key11": "PQ8xvtWJjBFFEezrBzp6SCso9dDfGdwG7mByToGE4cz8JDtWuoJLaJkRqw4dy9Qz8kw4m7WBzivH7pSyooGaPAh",
  "key12": "4z3cPoV7troiFeTu8HyitcoLXjgSi2tNHJpaGPNPzuUqGF1j9u1rz9e6ZzMepKFtfLvKeUJPRPFLE8s9tgv7omY3",
  "key13": "2o7t8L8CeFVLuRjW5qQL86g6waRf63h4amzrJrRykesmmvZz3QUXmoaQMogHt7BpuGa9CsYxtjQuQagLjthLsPmP",
  "key14": "hMJHgyRPQCJtHTtkmazbVWtKKAXrQ3XjCQ9z5KjNRbEtcVxbg4zhsivHhuUprgyzLeKcyGLPHDZUYhzeMfnSx86",
  "key15": "65wNsNyJztMA4oSXMe5XVYAbhVeKdRssG1vQZoN3GGF4ke1kRa1BnivTvgRFxwBmeChTj7PrutnZRvkfZjPBLMsw",
  "key16": "4MLf8knU2vAtiBXvugK7TskPk2BbiM8szZvJ6VoDEFWFYpo6Sph8Mdn4Xu7CpNSnWByji2RwYmR9fVEm4qRxkUWg",
  "key17": "535yGSSaqotqnjk9GN61HbpoYq1SGtdu9ubs5JD6Q4kUA22pZaW3CcQNY1NeQREWDjnF918rLYZ3b3eZiKTFjfkR",
  "key18": "5Roig9G6s89qt1kem48zAhMGfp45ghZGno4ydwPbKq4TDtX7PZXVy2JfJD5rWJjPFu3UPR31N8cFvruv1yWtwAZm",
  "key19": "4RZD3XsZJCUu4vbgUxEFNwL98V93CZVLapUe7Ne5jncnBCYp4XSUhfd8uxHd7RUm2aNDKPGKeQsg2nUR5PRWohSB",
  "key20": "598SSyFbgLhf41z8oExe3Xt1MnCnxdi9h4Jc32icpLKfXbsJx4ez1fTbtLS5kJRBTbmusX95E3rhJ4wXDCohjY5d",
  "key21": "3me6dWdoSBVruo6AiEvNTgxqm1u4aNF6mv9iF21CuRDh3FttQo9U5rUT7Wv87zWYmAhYDAPmG4BLKqAH2sJ9tenW",
  "key22": "597L5kmfm1krY5aLw5HQG1EZirBefQRA9VkYr8r48YmX6rjjkTMSu8kYDTiDeLzihKPGS4jvCRy2dYYvoLG1Uh49",
  "key23": "JJqintG9LzdDATmYD6SYAKfrbKaKAGs9wkUPHRg4ZG4AmXK285bnsPVE1RSX69gdYtjSB1Ny9WF7QMTZd6VuXTV",
  "key24": "5kEADurvPQCCKgESz1YqVdDpa14MhkNiFLwuVZASZWDh5VcSfRvXGC4NBCFhWpZuX6E6bhinAiTYxRUS5FKE1dyC",
  "key25": "3vsk9USkxNekAss4stQoHgfjr2g6jyCvHAHAaZg5wfmWF91rPUAsSd6bA989PAvUynKivSDXKsxHZtWcoB3LXzyP",
  "key26": "sDPnvs14Xd5QXaCHjr7XUy82UkcuCMXWuVs8d8fpMjP3snCU63DL651Dgjz5yik8R337s29co4HqhvCqnWx5hRV",
  "key27": "2bmYdq7NzX11PoituUsnFqAgGG4ruqkz33bxdT5xBLCMa7VnPtpbrZ8G9ZymHcBf7rYryFMiKsWKWL27pw4NEhFA",
  "key28": "63UeMmma8YrQCefQHY6WVmepuhmMFn1FsK3SY5C93g8mgWvVvncYZwFziwgFNLr5hUu74unUPBuZMCXCsb3TWXwG",
  "key29": "2umxH8ez9L8yZ7GSqsVZvEjPDTvUzwkdPbDbDEoJ3SbQo8qBaA7kgmbaxt1Dog7nAX7s1XjVH6EChGUAAZTn7BQN",
  "key30": "eus7wmmdv6vjidc4cGAc8S4ELifmSsSAxBdkrDEPNFRTRnoMwa3T7tGv2jZzVnrLFV52npDrJa8GWhWgxs2bcWK",
  "key31": "2EG7ARTRWKgt7jQVTDGo34z82uhwaLEhNaUE5SGDUB9KYMV14YeYqerMQgqNNQtziQXpagXEqVAWa15CuGNmcbMQ",
  "key32": "3E2Qf7RjfYQyHHyEv2LnXP5VKT4As9NPnfHpsK5zSMftuefKjhRKy1KWDvHb8GwLk3GGySB5zQFQMnsYv9KZGBAG",
  "key33": "YXDkEUn7UNmshobhEQVAW5WCkwM79AMM8fUs2aD3iWCQRTnV715XcKcB461VTttXbJheSy1itcikBLLMeiJR82d",
  "key34": "2WHaxeb4PX8heZ8WhC4MRsWaWa9m5YgCw46KqZBcqxXdnth8HH7eeWtUNzmTd7pk6oxkxF7nJe2mjwjJc9NaAGMy",
  "key35": "4XpB1KPDJXR3cfmicepsuGLxzPADYWZP8PeoHAqDKLPZ29jzZ8tzgMA1eqnhwswvkWJJn1duqMrhfEejgFzhC9S3",
  "key36": "3zw1yd2ngqUjAgZ8ASq5SED2PqyMsJFVGLxuwvYiomy4XzvwXfPaW5ZGdUxs9tyUC4gFC39yzhTLVrRwwGgdcdoS",
  "key37": "wUjVnjqJzLpzgcdK9uiMU1pxywxJ7uwF2sURUbc7uGHT1pcwKZLnUW1niT4xnzrDWiaqVX9k2iRz3MrLnjQGjgc",
  "key38": "2ukxiXfERK8DA24vXBA7jPhhBJ6CFkmHeTx4rPNkDDHXmdDVtq7ExoevHAuo1RcecoBcfQbhAsm4aav1o7nLVpNh",
  "key39": "29TQzz6yRD5UeqdjG98SHEKmNnkfNow4CBt7TtW1EPeypSNRkQigMWnbegtN8qEfA4xf9neRAMGE8BgPa4pLguxf",
  "key40": "5AavQ7QyJxf9QYmdM9M1dhGo8FmS4CXxP9qqPvkdXRMnd7bPACpZGNYgTGC4onfet5EAq8EMYNy51bp4K3FYbhLq"
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
