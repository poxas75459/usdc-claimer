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
    "58bWDDuheVDCd7sUKEDNDsymvGKertALF1ocdBnK3pB2BxZdU311TksrRGFCJJciZkE6vn2N6HTM7qDxQXM2GBx6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J7tfSVQdaSqcYVCJC8A4aFdy21a83R57bWuFAZgeu7Tvo1HPd3zHVhTz31sEUBNRhbvgWu92xR8iypT3TwVAdYZ",
  "key1": "5uNoTWnM3jkZqcaawagHx9SURYoeqcDyDrTefgDpNVdaEb1WDFLuhToSyBNJSBEKzFS67yHq9rbtabf2tr55Byy",
  "key2": "3ZFjr8cpZ3w8WEqhvtesZAaqvRoAvJgyhMdnQuaSi8SQLJKSxybFeUw8ExVyB1UC7NMjQWhr5asiZfxqvxweY57s",
  "key3": "5JzhvAgp3MT6zqsgXz3UHEQT4mtNjvE8GgivN9zKBNZZKUcEgwRS7evJ2A5q2xSFZJt4AngCWKascrmwncTfTx9V",
  "key4": "5JLVvFmhccBmZrkXc6yordq9D6LrQKmBd1ybfHB82z84vKQ8NwZgs91HCEcHjXgVPt2BU35JcSKMgvzp6SujvCEG",
  "key5": "4nvBNqCFjWYEBsBvjYya47bCCkXWewvhxLiyCt6QTrvgFwDZejvNfJUC6iAXhnPcbvEESedLHEm514kY7zVvwcPg",
  "key6": "2my6P3dWmn17zwSjo84zqjW5aFpR1rfTq8D1zQyhSWkWPQczEUJCEM5Mf65opJc7HB9hq6uokxFTsSycZSCfmxFr",
  "key7": "on3RHQ3QkvRT85YvwKyPhA7envNh35VS9iycUwusQWH4YDXtSsGTKqmVcxgZzubMoiX9VMer25tbZJUTxnQLHKC",
  "key8": "5NGcwbYmkEkPXMNXdofq1mUNEixCDfpJo1RLYKMYf8stDvGXTWACCwyTfkXMfKdCLRVnE1NZ2z8eD25jZ136K2U4",
  "key9": "3cvW4v97voyTMQTCRoJUeGPwQ8KtxZ4U9ptSpovGByE2NbqWJPJxKNmpY5VEc4ofVoCYhKx43eAp8wiv1SXQAMGp",
  "key10": "2Wwq9EyZAaYHwTUbDWqAs5gxjZk5dkf2XnwDbBaJJNcRQ8re6vE1PCzqxssbfPhzoyCUmsU2BQ2BnUEL5BgBhDY4",
  "key11": "2niBXrpJNV9XhH6TkEYFerxyx6cN7cv3Tb8zWmbigADH2aMZ7aQNhCM4xE7Ve8zwUkDZ7cHMSqDg4UbVtc3Cp8ob",
  "key12": "35Nk1hR5U8YVnx3fchXDYDHX933Mm78SFZj9uFh5mZaqakA4uhV9xTqsC86TEf5AEKkb38Lu6tb1z3VneT44sh6z",
  "key13": "592gkxu83JARFkDHdDg2s2rDtNjTn27XGt2UF8Z3GGdQAx1iZPqpuWh7K6Zn1gt1iZMMFc8boMgbmrfs47BsPpEd",
  "key14": "3UW8rT6BRLJ8VM9QGVob4j3Jknyogh6WnNA7MKpMuy1uXBEXbBFcAchpjeG7eH8CRVat8L3yvkZ8s6jpeHgLm5Ea",
  "key15": "5RCxw5Lz6VMAZTL7m4NqFmKCt1i5UMrckpts68xTnrfEjRtDMDt2hqFsAAbYySiMDiFes9xvvB2mnyeU6qEtwsQE",
  "key16": "2wCrcmfAtiqKv8mzjM4u93Srh1zC4xjMZRCoVDPv1XqqgFKkEbXs2PPVVVN7CwfgsgBhNf9vDfqTsAYpo59TXd6x",
  "key17": "511kKWPtKSf8FsZaNHAVYKPQD2XVSUHKoqfddvXMFVdk9eSHYFZdR9uWuEZJTSuhohTepHYUqZ5A4nAbogMkC6zp",
  "key18": "H7gc99KhWtP6xPGtuL2GQFgBBDivzGEzwgAAvJAz3Z83DphqVJVRjE9fhqCJMZnvWWJWQ6oZyy59A3ayrJAcZJz",
  "key19": "5MBqeBEeyjEEVKPccEdTWRnJuBPpmnZqjV2f7QmXxeYTv1mktzTMzmjrUX9nuTiWXJWksTLsjHKQQdebCVoeaMed",
  "key20": "GTDHaTxTbH49AtbRQqkrdpDMvJDULoAhvFBFkZ1ubFZmdwobdYAYKHEEJRbKmUHWH2RFKHyQwP6ZRr4vrjS4Ayz",
  "key21": "2hx5XnhHdb4UieEiYW8dZtEvjgBvGDQkaejxeJwgTFkrpahL74ai3oX1zNWrqVHMSWhqHaJLwFwJTGpGJNLnLf4Z",
  "key22": "64SUC6H8TDhg34CmGqrzxCQfSycQodoigKWg8UNzadZzVsa3GvYv92mSvF5WBBcSRKJCJuKDiDZGVSjF2mrMPcng",
  "key23": "Mnn9xGmmdTm9yyvnGgbeUU7VfGXamPMgP4GmTThF9HwDJavCnxjzFzawyXsL4rKXLnLbTd3Let3bNniXuB6JMLL",
  "key24": "5oJ4rZuR6Qgfeioe3Jxyw8okknJoqN9eBkEUWXJpeeaUYMpfT9VZXDnKvv1KZYRxR6H6imh1Rx5eAkCLpq9oaERJ",
  "key25": "5Rc47QKxcWPmGcABmWVYW1rETxjvnwAj8SLvqq8mZowazWrdYj2Dq12n3umDjyHxWBz3pSAj3vhMe2qqaZphgtB3",
  "key26": "3Puwmg8EtdWZZp88DkPtr6WHazk8cCzcoguxZ19GY5H2VFz7BswvboVE5463eRVeT3511QDLYpTi8wTP6hvpFrq1",
  "key27": "5m41vYAvfqS1k3gaa9puT3gDqbUU5CA1n5i9QkhKzRXJV1HhfsRN5X1yyEcBE24VEcpazes21qjuLePYvkTx3qxq"
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
