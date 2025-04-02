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
    "2NRwfH7UvrrgJTm8emUqB4MSQx9FP55o9d2a8iF1GYiBfd3BowgktSgqYgHVHmqejQoZhyLRWwGrEHvFY5ra754C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iznsU8RD3YyWDxrRoA5NZZsd6okshj4q2HdkJ41spodJ2mZ7w8NmNedzoVSGBWPGizXpbqvx1vB2dieaqGoPK3Z",
  "key1": "T8oSPvmTLPzadDb7qXZxFgxJ4Fam881nXAgFv3bwahiJeiCGbXKgFa9TeqqYJdc3YfAVgr8bp53FfUeZpiKzNCc",
  "key2": "5f5mt7mgeTdDbhpWK3pvSB5JjsFcGTMwMfhRn9cv5BZyAzemJa12C4nstwCNyWPjzft2yjfpSxxR8NYy6a54hA7C",
  "key3": "4ZM4KwfuEa8VspyfB8dApsSWwpYjF4DHBYnkNtbbUkYUMuZZksCEcqBs59TL1FqGydcNMTUyoGRU9GcDPu33j3HG",
  "key4": "4kAidfp7tA2iquVM9DxLZepVw6hkZsjM1wsr9Jaykp7TdFSdRnbeGRb8F3cXk8RjRppSbATefpfhMC8G3iP5FFy9",
  "key5": "3udygtNhwyT12F73h93cdfkX1iusw2yoZzKCpxUjvaUpSG9CXTBzVParEogA5ZWmSboFSWAZkk2gQckJD86ixKHA",
  "key6": "3yNsv7SvZa1mhiadYWsDnEUC8LqRTX4L3a4FzhjLd5RZLMYPoxGEW5UwxjEFQi8jMEfZe3tJoPMTxN83VFzbqxuD",
  "key7": "RJ33S4joh2Qg7eKoK9CaLjCxhouKesYLuu27HZxDuW4Q5J3YmQbKBQj262YzCLpN9jeeJZyAz7HBrz9rYTFvYJK",
  "key8": "4zAZ26wW9EFozuVi9VP6K8bTi3aCoyc7wWrFczL5kv7KHcmnmG28ak24YLSoCdWMoiq7WGG6Nwje517k8fjWs4jV",
  "key9": "4QjGz22qPsgpRgQTkh5g5k4q5ohnouXUBfaqf3A12jqcyjnsRXvxTYjQJD2H3xASDcwzS2RwabkFhzR1HpsgYqM3",
  "key10": "63XezFDLAxNtuPWPzgiVk2mSGZk3SkC6khkbrwuT5EgXBJwcbX54ZUMPPAFzKekhDczJRmxEstTMR2FiQwPSPAGP",
  "key11": "29DGXAmnbXRf9Ki7YfWy2whiBrccR5FpQmcFHRxC5bHc8sAHWzP7yVnNxz29wk2kjECyw3Dm9h8iH7jKZcGQq55w",
  "key12": "2FbWTrBUvQYzWiNzYtPr5BXdu9tVUvmxnyWbUrf53nQed6n6YdZ9m3Trb74cSe1XJheFK9y4UX6aBQQNmAwnF3FG",
  "key13": "5jh8ZK8i9Sh4FmV44MQB4JvBTLH5v7agfZptyzbuQyoHF4a2ieHn9mKUf1AaaeWVuz5wnXew5ee6QepeJPwgVMD3",
  "key14": "3vPMM2aKvSYojhPUFCFUhSZwZmDQk8fFrAMz9A7ishyLgVMw4G2zvRjhRAGvpfRPdziYnJsNkzCkkgqGeRACbqKU",
  "key15": "5sz4da3sx7NrtUjRZxhfB1rbLycVXwk4bzGTMso7GHv7xNWx6CVYtWdTpmmxfHNGEvBmrLfxQpdJXD3VLGYfQK5i",
  "key16": "3o6tBKSkyEgvySAeZBWm6JgTQMVCTMruohZxe9d4VMfi79n48f7uTN5iZGZSKHbP52v5xSE4twCz7JmqgGqveFyE",
  "key17": "2acvghu4zF88HWynWge2yi6QdML8Y9YdSmpZBSxcFK8Zt8XFRvqhUzY5fUkNnrB17ki7Yq95yN5NkafjU86eopWt",
  "key18": "33KRM62J1Sj82fne9aArYYhVCGtKFC4oyrFNm4SbDmD27V4UQZSojPLuhHmPgcTjJhzw9pk3nbxJFqeqhdo4FXUd",
  "key19": "2nGjtQarxvkW6CMSpFyMeeDW5QVVeaq1eKStxMJesx9DceZYRr52HdT9j3B5HYkx6FHgYuZcZyqG2JfGh8mn3A7g",
  "key20": "3QLn8m52f8Q7Ng2Zm78MnbkMKMDzQXXpUCxtEf35bWNtZNovhdgA9fj6qopSN3TefnKWukxZZk28Wddhw7YtoTH1",
  "key21": "3J5axR3xy6tRoenG8ih8dGehFRScWAZ6u7n6sXpxweoCehKU1Fd1bPiesTJ8gUw8RLvc414Tzc7G4ZksHRFPtsNT",
  "key22": "5QtgthCqh6YpsqrSgBj5zYj3QxJUZ9wf3C7Ead7WBmv1Dmr1tPNB99JjEp9BUDQNKPaNUFQgUk1avFXEEGkX5UiZ",
  "key23": "88Zj6U8bH5HYJKVhkagEcDFTGrqnakmmwR4feCcEkujAaHEnYVNViBEB2MaVDg7oprshdqMqhGPPbTVyXxYuPyW",
  "key24": "3MebRuorRwjBkThYN1JYaeBFuxra32SxoJbyeW6xbc3z7Qa7y7kJhSDYQebvw83ALMpmyAWsyjCKSbuwN8SmAtmv"
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
