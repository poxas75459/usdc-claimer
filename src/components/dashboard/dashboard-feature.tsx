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
    "48KpLhZMWuzVvSbxho3qAc9u5TX2CJzNyuFBNyvnmVDxhwzSJNc24NS6WwTY7iqfUGLj1umSfaA6E7sa5pZFP6xv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikQ2TJz6BLUPC7cia9ZjzXreKHKh6DHHayyQHJXWcoKpih38YWMQEeuwi8zKyMf5xbE4ha4dbrw9yUNfRAtBr41",
  "key1": "2z9GBk6kb9TSgba3a7jUabmJCX257h1ueeELPVGu4fLHpTk2h5zcMi8fYzvHFibUKS5XDrUdXeAs9gvv398m1Vc4",
  "key2": "aPk73E26nLY6qyU8153XSmoL9PK5XikDUaKvPRn7hwMF6q3gcgyXgbxT2faQuKgt7r2P2NZejPkEpuQdG9nLRNK",
  "key3": "4ffDXnG288mEqPnK3ph9Thtmg6A4J3GHsbYdUxHfpdFAQuBBkozAGn4LiPotHSgDq5Qhz2b47J4Uj7QiCwVzrGgR",
  "key4": "4zgWs9SBqgcXsG2d2wAQKgs486kQu5WJsgx2DgwT5xDkmd6nhMxvF6AqHZNk8qoRcfrMTWFrYBmwxVwGby8PxNDv",
  "key5": "54vwWijsbi8ZoiYYbucq3An9FCsdbXBUAfBLC1FUQq6YdP6xDsk8uzYkcWHNqUqWe2MDs7fJEErU74NJNjim379L",
  "key6": "jiVpsWY2FsvhY5cdAkHvAgfq4mfNTs5Dzqq3MWKAFYWb6mYaze6La5W8adUxQwRGBRc7BjY14FqyvVy9e57uAYU",
  "key7": "5XqPCJEUVNj389YCKLKUe71k9kJhiMXiYZ9CCQcLdz3SMZy3whLTRw8v4jWUyRtjXvJqManf88VyxfzTi7vyFEE9",
  "key8": "3vMdyu5v3gHrEH8NJwZXvt15PF64vABbSkcY4cdyT3nJcsWGB7oeSRVbUV5yztQ9KUSMtjYfvxb7x9c46QYw5sug",
  "key9": "3XZxLo9CGDdoy6oz6JgNBi18dMZwEh8Sd1LASeooLn1zNAgE5Grf3mLRd9xRSFF3k4QG1drgxYPmB8TtWX1zA9cT",
  "key10": "4yAjA7aBXHjk99RbiM1QPmnXHHMuMRrgygjQZtSh74VMJ1foymGyQAC5VZeU2WG6f2YjT3fjJzTjiSLz4GjqE7Ya",
  "key11": "2hMYALAJNfd4agGAeE2BqRF2wdSrrJybc8ix8zbXz8J9QqD7yFLWK6DFH6f8HtWjfUUZxVANww28Erf86K7ujcg9",
  "key12": "4jPLkiVN7jDSzMYhbDfk7YbqhZk9BsCb97FJPFX8ABRCak81hCVuo3a4AWujjmUGEr8t3ud4bhv4EPgPRbecThuy",
  "key13": "2aTfqpGSnoPUSWWSZjhgxeyuFHgkoX7v27uSEB6nge56jaccCpRWGr241cH7hg62D8mazsfaUJgt4YDhh52HwdDB",
  "key14": "2pf6UnjrvdPwY3c2oeDr7rKfdqHUF97wMFRQ8HzdbdDGDh3TVBshC9ErBLFQhgTX6LKAqF4yv5hA5mqm7WFkcjSf",
  "key15": "NywxXLAQDpU5PwWwaoNyKen1zhFRvTFv9pjBvFsyjwtWQ1m7EyFmKCQWaS17TVqQJdt4aPd8wRPdbR4YnYUT5n2",
  "key16": "5a4SKLGmsyc9utmca9VpQq2FkYpQpVRvy5TfM6C5Hoa34nGcpkLF95nmo1dUQ5L4RFGB913Vf3mVw6Zx9Jp4P7Sm",
  "key17": "5AKnUFxqRTf9nyMgHFLmUeb2bHACDckf1YKfFAHjhS1gadENtXqJMwUibmgTeJo7DKdaYwhnkN28TwJnykmfkA8E",
  "key18": "5DcXdsjvL4PPHDp4m9dG426pFQM4rDSMX5VYgtyriUQhiy4xEGVEfdq54wjqiw7zXtpUpUh7r29UP3ffRK63KfQh",
  "key19": "2wDEMoNt77v2fbwBJJiQgXjfj2u2Nir2uCu3apD9LR3WcEP81qjL2HVUmaDP5JRsArFyrXRF9yxLAF7AASBisBpE",
  "key20": "4beQPTP3iKELX9maf61onJJpAYnXdYvWAMAouMmGADCqT9Xphn39ngo9F8PjNdmCbHjV63jcL139i1xByKjkHpgb",
  "key21": "669FH2ADv6z2eWMXwCsYuv6KYYLg8jsCt2bZVy3gUXHVDTtdGyLM6bi1Gov9K2Ht6CvzqHTbMEDj82X7gESQChYw",
  "key22": "3TJf7KPJNm5CsQuG2bBj37zdVvYqAURzekF85v8s4iSkiqFkEFWk7ZxytrvzsQeG6spcWK574wW35z5ue3WYhHSZ",
  "key23": "4btCSUfquBQhZpQSdYW5LDWKCdYhkHpXDJXzDjbtQsvtTK7D427zVd6jDkmhk8ypPBFzSd7EzWLKVGWetC6LGbxc",
  "key24": "5h9Xy37KEvMW5vnX7WvnLct12dnhNMZMr5DNjA6o3u76Y7PX7QKYT6f9JxjECcNgfjDesjSogmhWgqGHgQ4khnQM",
  "key25": "3Pf7XwPWMMbQPo8D3sbob6aSoSPZaLjpeN6zhq1C3gjmT9ZETEEc2vsjCaunRTfH5gFnMhjT2VE7uHmW3G7LtZ7K"
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
