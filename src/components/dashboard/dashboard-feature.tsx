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
    "5tj182FsmuAyCSgPCwypPX2KZWbFrkmtHGNMx1JVj2jnirEsYMgkAjeBXAYLnq88i698gPuH3vB31rnND1bPfHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59AZdChJfBC7aDVis7ZJ7bzYPV5EmXftrVZb71TjdwAFrktPZodV6oRzX1mdfxrk43w7ESzJL4EbW3rBUqxrJdWr",
  "key1": "zS2zeQ4ou9BHdunLzHC9AMq2yjd2jQ88goUhXdM1FyqkZwCA4qAqTASh2K6QdR7oWx3UA1Mc2hhStQdJvsFN7j6",
  "key2": "4rdWfPVwuaHP77XHDXyG6yxk39r6eMcYVCgwXpzqdTgcnEktUJmjHmGnxMKMiD2FQBrX6hCShmTovdayuKyHh5m7",
  "key3": "3bJAWreeZXFeqstCbQuFWUdPTvFcsXJQh8Vj595bHbfNEVwR7WeMZ1Cqita6ya9Sy8nirg1KjqAienRNfMHHusyB",
  "key4": "5JwNNLMiNGz9U6WMFbtZSe9o1BPuakcouxwcf66TGwkJfqR1CjQKFJ4RRRNSXozrcnWYJJPg4fFBy6Lqf7Tvwyrn",
  "key5": "5DqyA6xicTJ7M1D7HyB4f7KaB6wy6MJKNUoj6PBojphhHi6wtE5eMAs8FgYqyeHZ2tPEbqRLt7cG14jEtbBi84vt",
  "key6": "9xVcgopk9tetzuMnZELsALewK2XbCWtdFjfnXkuGRLF6jfTDJ4TDbPEpoyPHrwTfSwPhEehvvxBoPG5nhXdLH7J",
  "key7": "46sMPiAu1rhufu7howA5yFdBsuwicLEwsE2b9jNeUqKRk3m231uTMFyCW9q5YyULtQsSKjzTMLKE1AwQ6bPeRVVd",
  "key8": "3wDbFLLUCi7Yz1DFwvJLU55849TELpFTj36ddy5DuPvbt7SEmL9Ecf78SSHjwWvgTXC3tqFpEaeb6SaCNCsCoVZQ",
  "key9": "2PGVU4SsYqjkRudE43oQmMAbZyDdPWWCWJxXqy2sVtyYNqu769nGW998Xe31FQKRWX9XqhjLkgGfmJDWDd39VwTf",
  "key10": "4PTphVnU6Frq32PWw33EjSP1EEGo7bEf8fXhNNbWATboqoKqDKZdubU9CkTmerZDTndoH5gAA6MhYFNAPFXEi5sj",
  "key11": "5WifW2vXgQxoW2ECoS9zHqT6MpvsGsGsspzsyYEq7aexKaeYB86hfSs556cKQzj1W1wSQsGJXLVVssdhLKbEv58a",
  "key12": "2LrAuBNGdHaLjGgJUFNocspY3VsH49D5DjNNRni66yCp1zgxz7PGFka9fKWpUhBjdNBkHDLz8LHk5aXcr8LirkY6",
  "key13": "3SUcMQCLwvzKbzWskHCPb7MTfE5mMJAfPh6uyrwAKGL7v2MdW5KSB2dKkHc7NYJUo1hGqVm42BGCD7YmLVRRxv4W",
  "key14": "sR7mHkjSz6pdKBqvY4myxeMhoTd7iLbHRuiEntbP22WpWJ7WHdBaULCMkBgGmtedqRV4nD9xqkFjZ6AWUJoxLAf",
  "key15": "326ZL4CQmqd1LQVLBJ6nW9ucKS8S9MRH5FeYjE6Q5fvdbDFnsJXEtk5NBn3KQmip1omkz4j668vCRCgqJcQn52Q3",
  "key16": "4fbApdUUiidgfE4myfUVG2uf1P18YtqH6VfxkreCpZCmrUJNgNnEijjqnST8nyVqm5UQqwqozVxqm9ERvUWok5Dg",
  "key17": "4sHBfXMd7SJTfy2rEiatbyEwmTrJaAqvm9RBVxVP2xMwZbsUiG5e555Bw9g3hBNyQxrnPHHV2kz3kZuUqrFFfDVW",
  "key18": "2bZy3RZtF1xDjA6q6f5wCu5Xx9DiBbtPEiiji5vXZWhJr6NHaVPvLko5rp2bMxw2xeQy95zT5TMsZ4ZN35ND5tW9",
  "key19": "2F4ntdhPLm7HPsfpGknbcTN8VYZap4429JdNXUj5bdLpBn1XqEWydyzJAG48mXv32HTuKHbpZoVNbJBN1zKP3Lvf",
  "key20": "3GS1C7JnyBhsMxu13sJYqWNBMBwcequtBSQGByiXZ1d4GPtf7Xy7A2m2XZh72MbWfZG6o8o2gDhNpugXzoa2eBoH",
  "key21": "3vQoa4yJipcfkemPvu6CRpXiduQ9fp6UFFDwWA6DW6dvLxh9RpHq1j2o9MS1tpJCcSkM9q3uP3jjxFtbtdsm5Q59",
  "key22": "4FnqyX5JpcxFLC2LLWmceVveLs9CCKz33zVoxcK9JskSW2FKPLQZprffLP45FJNEGuPiSDcJsRVVHF9rNhBt58yw",
  "key23": "4PpakgSWXepUKw8SkA3xZ2q83E7iqWe3UJNNaidKJoqtvDXdPyhznmKU3mtWwyeiiRhvVBgtfVsFXvUz4xjh7Dhv",
  "key24": "2hzrXR5ETGkEMNHi92rgGdGVjFhxKpeKw7kyG2ePu1nU9ptx6u9mTV9vK5XkHMSuEsEopm6Lbua6cGM5g7m9rbVa",
  "key25": "sdNwN1xjn1RWMXLuTCsbqYjF4v4VHfRcT2wWdCz8f5XzbwiR4enKqgrSTuYCivM5nChJx6gG7foFJ5my64kGWKA",
  "key26": "4ht9dqWgo2zBPW33cB36o4dX4sRtur34eBftvD8biq84rgLmmdv8P4axUu5VYSootH3cfFeUrTZPFCUQggjPYeag",
  "key27": "xCbJHmHjbU2UfmLZefU3uT2MRX8EDK6JmPDm8X49FBkxasrcPXKfXMfA4Y6RAg7NjjA8fJKk8UnC5kkhiUosTNx"
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
