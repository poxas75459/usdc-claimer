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
    "5Lb5G2fKbndwnbvbhVJyHzfPbzwg5ZmUHG7qLRux41wZ5NH6yphLWL7SSc6P8cGMwn8ADUgSh8EDuwiTbvrh2UfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KQcfSMU7Fg8Za8hQHHBgSrgHhcYTu2czJ64ATtP1nMrCdoXntRb8jggo8GMzwBhvCZQgJd3KBt84yYRkCgXRULZ",
  "key1": "5BpYSufyRCKWaxNUf2wuC1dZzynH9Px7SHt1mvJmYbpV6WRoszB4oBEJS6MqP7o7UxSdnauCk6qYsNuyMgYDRi3g",
  "key2": "dYQXpTo3pR636sr9pmmQPgh3bXMHa7MuSsXMY4bLvZVtvaMWvcMk1S48i6C72pqL2CoiwZ3kT9ktLtEjkPZsV3Z",
  "key3": "348AkjZv4BeM94cJXvRw5u2DMQEsxSNUQtU26AxfnvoXbm3s1WoY3kxcHthHRUYbsFDuvZQz4ME27wZybVEZiCSy",
  "key4": "VVqDq1G2vXFcgazXnMPbLGejQuKZfokuTZpriQZBhhQnfva7FumS1vERA1mGfVegXwBcWVYc1fym9Mtd12jc8rg",
  "key5": "5hteojeyeyapgnv5FmjkAccrkUPvWsyxtK8qRrsQXaomei6jS3eWZGAFdchYYSvPs4iJNqQQZyLxSLvDxE2MjcZj",
  "key6": "J9EidJidtnWd7h3hatz7Vqxg76LZtrDBw2BRbab58CWyasmiWQsf5awCfdqmdZ3tjdMbeBE7bZGKbpGG4RphEwG",
  "key7": "3Mrv5gNMzifSv4P27DN7XbCerbGqhDFAfedtzyqBSbJo8oxgq6WA3zWfWnXAdQvvCkcFSVupWJ7PniDZ5eZ13MMk",
  "key8": "5HWL2aCGPjtccNDVm5YC3amoq1WTiJTF3BN5Y48U49dMA7K9pSJKphkrewmGSHeMWFsK2HHCKfEYV29Vd2749Dgw",
  "key9": "4BvaKc4g96SiX2968cuqvAVa2kmaeoueHgaEFzUxztKJDttNy8sZnimDCoVgYe1BmJiqwpeCepxJ3eDNbAu5JP2",
  "key10": "5Z5rA861MDDEhQBvKn8VBT1CuM2XmQ6ZbPda6r1ejGfHVBjbzrENwS71UsR7PP7tYV3qyEMLBFgc7fKqCkmNt3Ze",
  "key11": "5FRQxunuyC5oVjyZKzYsSA9wfJVzcZBgD4Y6hqYRXRDQn4fG1ygezvmGJzjhe6PuiwffNBCG6BN5pFQfTiwXNFcR",
  "key12": "VUBxUhE17GX8zqSrE8NKi3sNK3UwMbBugLHE62qNxZqQngK5fyBEUkDVocGQcpCiEinfoEncVk8i1gVR1TrnBgt",
  "key13": "48qYGLEW1TH8M95wDW8WjWnoCrmhJP4Btc9jMbrpTfXQaHRzL65KtvwFcR26DS71gU9gk2YSM8AjBQYwqMXn3rEN",
  "key14": "5HUPsJENSuBPSYaG53tbqQnguYjw1YXnPeHXgksB7wu3huxdzz1ErfeZVfuLr4ZKCELTgPHb1yA3EDW4ZDHrJgYC",
  "key15": "4fzr4ZvtoHqfBbBGsqNS9Hrr8rcjxBk7puRbLZYbJxNhwrgvYuGa2wp2L5osV1n2WSy5hzDhgQahnFmGMYZiXrCw",
  "key16": "5Wp7Qvrp594g86YeJFGSL4dDefvUVduMQM2H6N7uNCD2gFx35GombY99dtM8uGN2Jd8ekWqvXUuTTJJH49Ux2CWY",
  "key17": "NmJg7TbqpWvGUXgpxHQwUhnZs9JBEsE3h5nPeas42JfNW2qsBMG1rLtF5SktGj2BQvf6Y4QCLTsvqPTtNSvCcSX",
  "key18": "4SijVhDwysqGn16xz885rskZNaZbkMKc6udPXGPw7vfezKQ3S6Xk31UJUgfJ3zLHRDmkmoHrVcBdpkVg6XqzZ3i2",
  "key19": "Kw1MNDXP3Fbag5d7y71eFgNFVNWYjRkGA6Kfk4RqaiLo4PPTj8KRXncy46MPiBRSxwjHH7DTMJStYUY1cLndH9y",
  "key20": "2h1J1Di5r7YAYKN6kucpGaKmZxRRu6WAZ1xEM7j8nQoYJbUkk87ub65agc48BXGUwcTMerFXXsZehGNM9eD529UL",
  "key21": "5iJhbvtkaYNSTCjhzJgEgbRsJErgPCX9NmFXtG4kX4bVnB11sHbRXWwXggS96LwxMBucmUfr3dVanUDy22dpPMau",
  "key22": "5gxQmPmtQNXdBmDtxDyQkd1wDCGey5qovaQY22kfP6yVUDhXYF1aCVUF6GrSKenPDAi9ZFWsqd64ebnw1mwskob9",
  "key23": "4DdN6YuQwNXs58Sp1uZFUwbXnpLSic7Jwn55uAFb27Wvqar6dqRRGsAwbhLoWQnhFDxXFN6Pv8rrhVB5tCaFUCZJ",
  "key24": "2WtSeeuxg9PVcVNAVcuVGYAiaNWC51fYSxEwyEjRwdCu3UfdZN8yKkPrwd9T5qmzVJnx2toA3jV8v4eD63wjmDun",
  "key25": "NNzeQ8SHgchVcsmVDGJMfvcNHNtUx72XKgfXFmLH7RbkRMRQmZ1LyfWSfzjyYA7hCC4uC2nuQCL7AFcs23nGKjp",
  "key26": "D8mYwHaeaLm73HXTVucTkjK37HRVf8btbzyAK2u9k4B7gpwtAviqdKfET6Pp3fzA96ApQ7QSgBDbt1NcBrM184d",
  "key27": "dzWajhEkkW5Dh6VCK54SwGjv73UV7rizWWei9eSzSDpWernR8hWhU2uHKEahQiYXoDeqn79wDu8mBo2MiCaYi7Q",
  "key28": "2dc3hg7ifPdgWXy8bKZhtAK1JQDoKWTc51SZzYeoMU8UxqWt4JMijWT9sAXzRFzVj6nb9z5QZaqBB97645To6Xq2",
  "key29": "QQ8jDzC6UiDCjQh8inoQMBWinPLmEtu33RyM8jVVwTxtkdqjzGduJQVfYhCgWNMWiTFXg6wu45VzUnu3EtVh11a",
  "key30": "d2xw3rnxKWq1NXQUrHT5Y1ac7YvitMFqMuiDCK3ZksPxAgbxRzhcbMnEMRBp6yZFihCeWHb7FguBsERiENtJx2W"
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
