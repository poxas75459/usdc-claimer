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
    "2b1URtTH3b2ogLCBUELavwdLp67LgVWEqpnTjk99hMUjnFMBhaVYbzEzoN6H65d1vYBmyu1hNKtuqia4HLFAxyG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e17m6gmk99CWQbPVToNHYXCeh7U1x2AdGN8ng7H83xjZ72K4X8dH8FM9f8ouicp4rcPxEAc7H9kCMiPixaTp4QQ",
  "key1": "2C6VQpqAMA3yfMs6GZZWXGqUv2m5XmHDKS4dr9yYU8ansEyMfKGSZ4v8Dwu9fVnox7jo2DrmpCQAkbYAMjS8k1iW",
  "key2": "4c8adEJtnN3DV1CZJW5ZKztMMobaEdsWxgY6ZSU2cCCtmtfTpE2Sb5o8CSrTeFAF9jkX8BEZL46vN4R2WK9K3fEP",
  "key3": "4gPN3YySK6aFdZNAsbZNRPGSjfdJKdQb298WXFuAYGiSUhrW7TE4pWPvwXLVPXohLjYurK7CpbP9ncWBNK5R9epU",
  "key4": "41nA8T4bSYbgVGiAWMGsaw4fSNTScMbmrYzXbzqXA8K5KHdYMKnoLYA9DzBPk8F8uy5axPXexmcpkswQrNdVMdK4",
  "key5": "uC3RK5duRxfmWJxcpMX9rMKBPPxxM2gJknDSVnnbGQQaE2jFFhF7M2qzBUg2ek3CzWhZED8TcAv8HpxDkrJTv2U",
  "key6": "3VtXf29rHezkJsdcJ1NgYkcSLMcGcpefJuPd2T84b1p5kkqacLgn8VxjsWyR58JokgfGLgjVapq4WZoMRgDJq75E",
  "key7": "33duG4v4ac6LTDNvE8mBff9HxK1LHumQ3cD39aGRELQJ8CoSqArjS1edquUvuUZu7NcPWQueFXZ7L4k7J2HZJTPT",
  "key8": "5XgSQhurVBMYUJvNW15Sq6WbvYG3VBfZnjBrvdFSdtFnSRRTvUUwyxARSHfbdmNt6oKboy2C48Cr9TZLoSxt8d3D",
  "key9": "3a9BaGxi2QznYh2bXnakhLeB6wK5hDFopCKWxQUvMqk4DsGsWJL5sgweChRbRXXZb79fjPBtdAWd8UxHtsvuxFE8",
  "key10": "38y7pUPfhq4dW5zkNcYgM35WRU6rvjTVeX1WGL81r4RoQgq22oacTthUKV4kSWsCUbibi8TmyQKvP1jqXpWxwiMc",
  "key11": "cJh9ythjb5HXyVzrKM5KpWaSXn6kriVFKzQ9E7yMG3LhYQSeoexA1UbK1gSnwrxfsPgEYUhU3TbtcYGSs8kSR5Y",
  "key12": "Auk6kjXH1rjLMGLCWnoBT7eJzdHa19kS4QKGj6c6Uaar27FcW481exyk6hXCrubuxQURiiuua76LjMFnWsiTorn",
  "key13": "jGyv9EFKJKQ6P93LLSv7F59jnUFveh5Jv2xeg4aunV8iXvhnH1cFCAz6oXUTKCgEPyvLpyvpsrWB69Dn2waAVn5",
  "key14": "3SrZAGgRzxhKHfjHUzhXBYh74gW9gXc4sL8nS8ztaDd36ZFgV7FBw4W9y5FEjzqGguTRdba59HhTGUVtd8S2zJL8",
  "key15": "26WAn8EgeK5aWs3MgdfUAb3T2mMtQtbiLURVP52aH1fjr6t7jdm3NompuujQKmjXF75z3ghPtZpkTqZJMJNYeN56",
  "key16": "2NDEmaN1yHNWFUrJ5MphDRzTre3qKoeWEvtsKnfGLqX2mTrj8uva8kJb5HFzXxncfeJyEj4ug53trKG6FcERkP4Z",
  "key17": "33BVKp4BFvk8i9rCcVtq1Xegsqy8FfoYLtjevsJnFa5c2VVKeECcpYmw4u7HNmgq9wfStr8Es5h7dvJdTVaZrJvK",
  "key18": "5wUzM5tLMDj8b8JqZ1xnqxWPmzQdWyBnLEZseya4uZdSwe97FECjGBmZ4uqDQkB2R8C6Qdr3p3bmxVMhq2rQu6MD",
  "key19": "243TNiBthCk3Z3ArEhEHtZgnrB3uxKFdmbYjnVi9YJtT9yz6ootumbHL3mG9hujH5UryJfPBWprvh3z1xrHCScXc",
  "key20": "5ZYbZCqdSpnHQLES9xMJmf253ZkZ553RvV6xa45XK8ooMvr3AtjrpkWgLea3HNo1zcpuPdAUWpy96ayzQC9P4JzQ",
  "key21": "heLLXAj3NiappwW3PbZdrGmXV7PMwjFWLxr9hSurJNMWLC2cYLjJEwX7BGNkVc4QtzPTFoRqVs8vmqa3pXJvfCC",
  "key22": "5a6UGoNpp6uYvKN29sAH3kHJWkmeeWUhsRTNP4tGoNhnxCgAFbZwiRVpnHd5MQYLLKB8cDeHwjEjWFjziaeNUy5Z",
  "key23": "46cDk49xVQFXbmAmoUPusd9XFawEBcw4z8DicsmnWCETwFiSTMsyJX6w3eaTjubjuXMy5M2fhkXfcfkVbginRHQ9",
  "key24": "4gcN3E4bEh6ZYuUueDU4wH17dx8JP3Nejcpvo6MUhP9WjDyjdZDzub96RZCjfENMtSeAHuHmuKNfpNpQaGGGaoNM",
  "key25": "24XT8CXrka5WhwnZFQBtV5eYpWZtNyiGiUM3FEBx2EC6HWYevMXTUxUBu6jbWPn14SBWVEsWXxHwTWbq2XtiN3H3",
  "key26": "4wtWgx9AsWoEeDB67Nqr7VLYK2dgkFiKY2W3msPmSizPv5F6oCazLXEZ3sxuSUTwKDXVz3DYUStxzSwZC5cqap6y",
  "key27": "4UsGypf7pZH8GB2whTFbKHPiaiJmJZYqDi5ZGpGoJaFkgsTYwHPkxQHCa49skebJFLUicPDKPeaY4cNp767auZtK",
  "key28": "xnE44MNLW77AvReNuwfHtGzZEafKy36Ut6civc88qD7UQRFhaphDYHumkFZAdSui3ndDdznZV6yvN5NxvrVFxdi"
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
