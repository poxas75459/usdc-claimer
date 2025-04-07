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
    "3AcKEZg7aGhMVtL8FFPQ3SGz3ZC3jjXmsph8mbt9pPYGrMqE8YyVGH9QnTk73XvWUg4WRnDoLExZ8qHW2ZbRnUw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ZpH2CAL4TZ7JAJMr6cFKk7hAt3RknLCcTQ6LWKFAns8APbSwXkGdGH19zPQY7a1NaSU3Y77BjHh7k6EChQHDn5",
  "key1": "3btFQS4mYBGz6Z1JjbrzxXrFeFYuFvjSrx5JSHnVqBt66JfMVKPdWzGrrAexPXPrmR4WpT2o5wqcAimiTWJWLejh",
  "key2": "dD3sfitksvMxyZkNMpmVbuyg4npVXyvZ5diSP9u6duHcLwFQV2AsRoioTvy8By3bZ4kACidcdWq4vY9RMAhxKx3",
  "key3": "EAAgXD5WpsGFXPCqJzr4hGVi1q4RgfPeDjkkhS4eSxjaHwwgbQQoATdYusvrDjLeJRagKwJiZg35Teq6bjvAmGb",
  "key4": "EyaBKzNNePdEaVqtMfSoAUG4QcytVh3zHW7JSEg2doPX6vPKobYo9e5BKHgT4hjJ2GNSkLrtKypj522fqLiJvXy",
  "key5": "3xbrrbAjLhdcyCjbhVqGnttH5uh1K3uYJSEi42sE4EhmQwMyBx2uCxj8GyKupPN8YJ1HFfgGnzrZHkrUBTDfeM2k",
  "key6": "MaqWPEzoW7nP75hYvCLY9oRMcbyV6VK8Ng7BjvzaPnUhSS9gnGGZ7nHat7UmSUYEAxsoCmYVgYSypFoDSBhoQZg",
  "key7": "3tyhuVU5Cd96nVCdEsoQDCUeddF8mBeRLN1t6U4FLUynvDNxdVqVUvrXMpfsX7QN89VmUFBeQxDBhZALh47zZkUJ",
  "key8": "KUqLs5whA9r4eTcULz55rgKVpeL5T7dWMURUA2Zs13brSWieSnxFUjwW2AX74Cike43JbxffJ6bxBttVXWX4cX9",
  "key9": "4DJGo7osQzJvFhJVBrJoFBHSPgox2agVv3V1tjgYkvfop4UgggMAxBdi2icX7i89zuYMX8QjgKQs9n9YymUdXHNs",
  "key10": "62pEYZEwR9NKoK4nKvRLrBAenU9sYitR6ahv61yE86nsZjWm1dE735WMZhGWJF8NSBhDTZVhTTXe8CE4uCNeRbPN",
  "key11": "4W99XpqhDnghUJgAUmkFt5nD9z6awY3zfi1MQraHsoBUdoGRynk3iEMteERu8fQiNPL6RM4xT3JuSgF8iUPAF4Jp",
  "key12": "4RoAAo6CUf3oGMSwhEGDJfJBzbwnzkG3UHDomCGFTAiDFmW6RWLndREFU1hxxxfWdUUA9uZNy4Yf87fGUgLTtazR",
  "key13": "3uhX5cPBexmq9QLCrJb2uKrcQS6o3S4mcNpd1sZuD9oTzY4GeetQnjUEzhtrsEWwRWkSwrvBV26Ee3DroRH6nNni",
  "key14": "5i11i8CyHX8TnAVF36Wdvch1Bif8kVSAiD6aFS6gBpetvdok3GFnx7rrh2RMsRpUgUpxUCFp7SMYEUaHwmhJecaR",
  "key15": "4WHv5d86sVkEgiWPJgxtw8Ue5DMhmN1Dt7X7wVQkefHWGHdFNJU53L89wL7FXhCmEagnwsctbBVBUpdxYuJfFXJ",
  "key16": "5t7HQCa9T19hpHENaZ6dDwjYGXTtvpVoWKqzvbHLrBbUi14wX1R5V7J3XJ4ztywmZ83nmC2c683Kiwf3vAQFcU6v",
  "key17": "5NEdHapBaxhDrvA1xcfBgmxjMEyrdPjwdWQAV198no7koT9FgnPUAqFwYPd6U8JekAN8PXp6JMS7buhSGrxXDkK1",
  "key18": "4ch9Wjov8dSLJixhemhNEcPXqZnRqHvKowJapK1es3YGdrb47rqSnNqn3hV2pYHr3odARWDjJcYrPiYq91kEjF3b",
  "key19": "426GSUxGVWXQgWTCyQX6qzM6mFuouvV54BXRf9FyGxiDpYD6LTteFAf2Na97Qd14XVaQJEH37W2MfQmN8GbSGouF",
  "key20": "5LTDrVEdUc25ucxwCKz4r4yffdNaRPkqHgASqcfrAFWdnp8q1yvXrsoHLWUocSKMnA1tmtFSewnqtV1qUkWNid6b",
  "key21": "617aQxb4KBRL7Cah5jS6H1vdfCcnJHWKTciuM5WvBTYV93y4mn3HASftVCYA9GoYkq3xtZDyTRYvo1BAQS3o1Q6y",
  "key22": "cMhLb2zbsgYazoSJoPdXFkWhUaC3JZ3xXrprCafaiycfNh53Tif4y24qt9sFvnU89YnFGQsh8YMhuapNstGCPNx",
  "key23": "4fiLnePijJgH2rMA43SofmZtoptb4X7UYWgcPYsSgi2c3aHptpyEN8sb8bVFpeUpQN5bAB3AcMGKXtRWNF3JvN3w",
  "key24": "4SHJ2dhBuuD6NYiG62ofofe2T6rsa61pwyDHy9AvwYBLTqAzDNsy9GZVhkqEezAF6BYjp6JfN4JQGyNLwFXZ96zc",
  "key25": "am2jfPpXMcdd1AWouedyE1kjRaJgf7tjFuNE77YmA3aXrTRGnd8Bq19z2SXD7horP7RzSz8Ex1cbRoW67N69Eyb",
  "key26": "3fyHC2bywXWsDrpwJLMRQ5SsH4bPDqbyFKU6L3M2BdZGXa4yRDXEWD3Z2u2YB3EBfGEaGEMaBHE6RzkKd5fDMxAA",
  "key27": "LyNaxVGpeuFf6BkNkwDBk7pn4EDvqbEmZek3iUhVRpPe1GCrhJbCNKYpG8fBi2TZ8XTtnC1Wyz3r3ezvbHjrY82",
  "key28": "3XWhWiMhK2ZDYCtoAaVxNHSF38przArTTY3ct5gxUvHiNVwLxNDhdkaFzCcmmuWaSb5RneSLDgY4TaCSh7joFzVf",
  "key29": "3rcoZQ2r7skqP8Vr9jsMeLyTg8WobGThjYYJnqiYia3z4BjcLmRGaEqsjUz3w9w9oQ1WkTr5i266Vsu4i7B4dX88",
  "key30": "2HviDdzFeR2eB9xjVLgr1QnCHF7JvVNUT8q8pcGg8f1ptdpVHA7AcUygH1YrLemWQ5PhF5YnnX7Yq8GR6vSFBou6"
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
