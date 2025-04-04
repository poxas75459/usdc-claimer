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
    "4V37aYYF9N4JrKdEcB4pMkU7VaTpU3kv7A7Wwyk78HZq7KFTkWvtZL5L6UT5kAKvJkQLnVdtf93cYfLEAxVdMckx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KaQSPW23ttGkpT7pJjYRtzUGiuA9bDXKLWCEJD4yw2xH4GVATZ6gyduxW22oYsD939Luz7z21EPFF6uahXZ1haj",
  "key1": "5hW3X9dYqqSBdJwsqguZ3mvuX9SNxFxhDsLrN2m1kXmXYeDRyJ5Ssx5nzpkbVq8NdA8WazMkRVrdbJRdkecXdqi6",
  "key2": "2pvQRsicTQxEMV3n2QSaUjxzFsiM2z5HWBYDzGaag1DbHkX1gftAZTwPSQaYUEYiQ4mnfo284m3eNtfKY77ZF6tc",
  "key3": "5ZLWztz1nUEcPfxznwg8YY8cGKQ8zE4qe3pvG9wLqKC7VwhCN6s1q6JzJZq76o1HThhZBaWrAjUdrgBW8TTYCK8J",
  "key4": "SfqjFwk4BLkVwqhmoVyxmTvFvw9jJ6MiQ2j8Xj2QhgATEbtFzbL35HnSLSU8AJDQMnfWVqoHC7Zt3BCgZdZkYDi",
  "key5": "4ufXHpEcuJG7pwDeQJjzLer54LLsP4jvSbAVHFjYgVrBq5Fg5BL5TUHh9fAKSWACTtMNonjyCaxecSkRfPVQLG9R",
  "key6": "HrX9jCrVZmzCtjq5k4HAV54ig7h5NUEWmdJXedYxyiVCfVBsnaik1G9KMiRYgRJsZF1Ravju9Dgd1EoDFjUM6MM",
  "key7": "3NutRqE9eLrq6s4ZQ29WT32ta5Shbt4MMXgwFvpoyPmSE1PnpieqTqA43EcjAP3YLirgkNYg2SU3EE3kMQj4Ck8M",
  "key8": "4z14zT1S1cemfo59x3W5FnstqewumsbxQRZuiPZkW8iedbVZPEYPywgcvc7ierVfZVQd9nNyVtw3ymsCrLSpV1Us",
  "key9": "4D4fgBhwSAG7Rnpigg9qkWpkSH68gvucaEmUsxjedavTEhAhZL5mYFx5RmEc6F7TJ2vhhckiJqH5PCWdMSPAsyuz",
  "key10": "3p3CFf2Gme6ZAVHCpMVjzC3bdFqMZKZdFvkyxdPYRazeZAcHKHRE5qBRmXmCuxSBh2NsT9YksTuzEXVfXjgoUYnK",
  "key11": "zdNsu8EHN6h8JpopNzryUtDAc7CDqG7h9Jz6PFKp8yZ9fwV2kmERU9Rz1qSiuZw3ycZfA82TpSRKVLjond8VRCG",
  "key12": "8wBS28NE6USkvznUoRoov6mzebVUb7S1d4v4i5ZfgfkS853qmy77MHHoz85qpYecXvmtyMW1RbLbDfZ5NDsfBfN",
  "key13": "48gsqNqgBhxiz6GPWBpERQZ2rToYJHNLgHafj4wjiAnhHdn9YzyvirfHHZFnYUmq4zWg91ehXB8LmjNi3WnRTohP",
  "key14": "5yr33sSUPpiX8vFVYu8atPZigtEBHJAxBjCzK2Rr7SwpkGLf4nfNcweHvkkGy2mtRMpFwnvd4aHT7QQQgMu4GLm7",
  "key15": "NrkctfEoyuo8cm7UKxBSx8qVQiKde31YoUQLxqoiG8ZtLwtiPv6XvLUb5s3uSnHNUmgZeVTz6V5aAGi3neG5G61",
  "key16": "3Eio5jrg7u52zUddM4JzYRg3v1gBkqKunsj6civTRd9Soh2gtSxU6EFh9chWx5ToK3dcszhWZBcDB6HTCDLMS5Dg",
  "key17": "4Dy2r7MTjoWUEJnJVD95Bo5yqfp3xCZ6A62s5xzSePa7d1REn2eq8xk2hzBPfJMoievRuFLF688EjC1RzDGp9Avm",
  "key18": "4pE9rFc9ywcrJofaxpL9tLLo7qy3zY7FXsrakThDXndNcSn65BXKhjMBbzhPrTprkPjHxUP2xdL6qd8koa6TTmp7",
  "key19": "5naVg9ZPHSSEbjJNZiQvv5yCLkDauHdbAkUw8YkX2c5MQz5WPK7Y9JXQNxHrdRaezto6g6mdPuUQF68wMJfdqYz1",
  "key20": "5kBji4eJrcKid6QdSME9ThGCsiER9QyXVSNe2tUSCNuykjaMKpG5ruhw9VJUkjEwVtMa2h7CwxCT46bR5r1dZKJC",
  "key21": "3GLUzRLFgRTx2MVcV2YagxC9bkiMbSw2858GuMrFN3FKxzJoTRSfdwN15rT3FXHWTBEJCh6CTgHr2ZFL86LEFXpq",
  "key22": "PE7y9a1Zi3v2akKCoZ2VYdAQzjYrGectGbSYjzbubfXCLk2rAqBdTvkn5NgvT2WRqh5SDrLoyneAnet1nFLuYui",
  "key23": "3ejt2pUkMyWMx4Y2TXGz5KcyZXzmaCPfTjUWzPqsXwpiNrNwR9w5xQnbQwD5jZFxyfsRL4iP4JnJqCj9g56rZGLg",
  "key24": "3As3QyNFxHEJxZcQuWHCpKGofTnZnEeweH96Kf9QEUQ66BvSRuGFGcgyHyDNzgUNyPwVM8ABG1aGeZE7naJ3bToe",
  "key25": "HVQQMUZSLQVZkt6WLC2GPonRk46LhZx5btd6RDMdRBkCG6gQ7UYuWANTeDW82cir5cZeCjJgLSP1pBGeZAwfrQV",
  "key26": "5owyZCA897WbB5CFeiNGNNVTDYqmYiiRWEUV3jiigre3sGgzDToUhUzkrNXKvkg4kZFMgJVHLNnVt8jnt9c1fpZH",
  "key27": "64PM5hmSzCxAR1pC9itFYZVDSGZTD7DREDjsJntuACbkaUf6uc4MxnnY7vcZGWSkmrU7k3rdKE1u5TnazATWXeqd"
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
