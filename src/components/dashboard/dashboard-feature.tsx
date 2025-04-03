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
    "4yYQgStw2wXnkQBMxyBvHSWpcAqSDpo9LUQFiHwPFonacGy1icvAFx4NXK3YEzXFpedKptobLF4c95xzbm9i6EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hWCVACcKf2XV5kEVaf3GxWwmBUWfkK8uhTrLmtPUZ16k7uRDe5xtpQSfqCA6TkUGiwFNEWBL6sPc3v2agDz13zB",
  "key1": "3TCxH8C15A5Eh4K7UmbwfEpnMwTXKPbkGdLmH745UKJJARG3oYWJijzUs53eKFMtEQkQekwBPHQXmVtCyfhgYerm",
  "key2": "3JYVQkWmPCVaqemQEvmzCwkgqoZ26Cra7xLjvivaxvync2SLcgLW4GTUdQr1aiZxdoEAjjTPVfpKcXCU8miQqjKb",
  "key3": "3afsv8gdPdX6PVofhwvvKNdMnY7snbviiyq1egUit6W1XDUesZidHFGzc3YPDXG2LDbe9vWuYAoc1DtrnSrGK1jq",
  "key4": "Gb8Ha2Z3NqkDrsBmGDyocomdBz2JELK5eTAokdFM73VbkLdApGuyVf9U32tmpWkAvyJqhPQvLmJBXNZ7JnSSLNx",
  "key5": "122LtiXtbmYf3MSp3MguqqEABKtieeioBsSqwc6ey7FcF6RKhgkSq89eVjKSfAUh3tDdEBt6ReWSPhGYo9Z3uJYs",
  "key6": "5GMMAwx9mRdeaEJdLgHQxG2So5rhbRXwX4mtr8fne69jQh9e2KKqHMq5T3aJ9M7zjKp7rY7udLNsMh4qEyY9Bk4V",
  "key7": "fR5GTN4KYgjF53e8ULMqKD2AXd1ZPSWxMJNePPBPi5LaRRm54U2AecVpLZn56Xak1eEQX9a1DYF4Ui9W2ZPkGJ3",
  "key8": "2zhU3ZSVcKf9LCtcvYcfCkwLw2ebEsw6iwxyWYmVCDpvfsqXaq3QqE4i4ZNWbbbVmbNoz7RZZ4HJQcCGKVo2j6JH",
  "key9": "9vwDVj41DTRBN29jZxeKrBpAr8rTXXWaUbguNkR9WTZJZZGSs1kHkWxte6s6puPv3kMgvarW4P6pVUqfjdNsj7F",
  "key10": "NTZbkGFBuNcwmWYVJQiVYL5PTPCcJT9jL4tSpeqaXe4vBxq6WJ3FScxfjrtsH3ELzxj1waYzwR4eUSnnYQn6Tv9",
  "key11": "4PnGw57bnDuBXjz2FAY1fJ6eRM76spkTjy7gFaYoV19KaQPtxfWcbfVTsRWgmAXzS3JSqws87jmAtGt4yj7pvP4h",
  "key12": "2RrhEgh1ptHHqBioczCwVphQExXnV3eAgkwDhXw4dUzZ9n1R565CFBq4YiR9XZu6VJKDRxXtCPFWpVZeGdgyTn7h",
  "key13": "2osVKMX38BxVM1n9masQJAuvqKLNmd3LE5T3vsT4EmPgyJxY6H7cy9htChRTAhWH7Wshexo3N2pMGuCfsgR12Tia",
  "key14": "2zWoxkuwYMnCMNrUER2znLpvzESV4hKojzw2mWpCtUW7Czj3Pfv8Rm2Mu511DQNx3qHZH7n3v6ofQm14nQ3BffTD",
  "key15": "4jUHvaoL46r5gtxC9B1M7Yyfw3TeCxwNkUVEbkqTkKzVQvDiaabsC7VDbxhWF9ZPCvQtS5biMD1vfXPxnfxa9V8c",
  "key16": "2wia6AMGKc9iwGYTWHZA5koVxjT7Nc38ffrfT91o2ay1FzQKcSKsFygTZwjx4TCYbvJdqqTYaWGGGicosdJkQ2oB",
  "key17": "2peW71pbE5aB6M4n1622ZjjXhkkS5m146fs94595D3xydAiv4zV5yWPasFTxXMmuF6XfkSWpDGFbkuU2GAg8PBsJ",
  "key18": "3b6LWNuwad8zQUoFwRx7SfWvJtQorQcS7984PvG3ECYoGN83YtbSiydifxcVv8FJYArsRtHJvwzuPEQ7TK4AC5k8",
  "key19": "4ZobZ3bAZYb6CbRcES1kBFKMM2HDq2Srq2Ee8HGCnGpTzejQGrkCoWWvswSTBeHRPB6X32N77JE9rmxuZM8NZ6Vf",
  "key20": "4wuZu6kV8q6Pwo2uoSCVi3GYNCWsgb48BSJ7Ag4vuZCqrFG9Kb2XE9wDfXyEV6SVzcLXqKiHwN1t1DhrPybSSMqw",
  "key21": "23PnmWwYJcZ7dpC1Fzn9b9GooXkoSmZosqNb27LhB4QLSTWY9qRYxzfnh3V1mgGauGNhR8rVFqmjxdTrngz6d3mb",
  "key22": "47inbMeRBeNxBsWdJUvD6j6F3TgyGan71BMLCZKvx5oudYVNmHDRZs6uPHESij1vXmu7cSn7wqnBDd21gDGw2Y8V",
  "key23": "q1ry6q15sf1rQuRC4nJMhszXGz2jWPLR4dDuNzAPFXX8HMpSA2vu1iGDD7tzcHm3T6Xob9oKWZ5P3KWQqYqJdkq",
  "key24": "5Xqen8D6NStF36FhbF3EYmjoPMH481a4KzkEqrVReb3Xgx18ce48iadGoLyGZbm9hFK4x3ve2HHAXrh3HAj4yeen",
  "key25": "5zugz4eCtYXo8QqdbVAaGoekD8KWBcCVEFPddtmrL5MxfzxXMJppb3uMy9rxcDXYQCpYiheUqW1PwF2KychGcRz8"
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
