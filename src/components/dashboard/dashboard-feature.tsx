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
    "67aA25eSe7EYTyz2FJVdk6uUT89nYeNNgUdwFv1bG6PgbGqmTq8KfFmAAQ9c1vFVXMZgGhsVuzM2TSpX3B3hfhSg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FShmqTg5kMCfPsJHA7hb8QSsbjdXhPfwq84eAxpJqd4X7KSGCE28uqfhrX5PPhPHi1xP9FcN4mYWbYLgkoFeueg",
  "key1": "Sfxa2gwqxj3GqDUDsGr9D3kKiTujb76n9dNPCK6sQ7vVsdmDY8XwbyLhjAWfiAP95hPieQsB9HdDaQ3zhsxzHaJ",
  "key2": "5fuucr1xiRxL1ZbApAvP2X4nQLUvtcLz9XaWKtXXQpVRbZL9ovLs8oeJGUXD2udawAe12QzUSARXiWy31KYfZUt1",
  "key3": "27XMSJfFRNDngBQofXgLat3qC8vBxztYFUPDnYmn6pRvJrxQyNYR6cXgnFMyremQvraCGEmCmBhX4BsTPvQY3JbU",
  "key4": "2xiXzs8apoXdMSPjG1zG2qKeu5CdE5s2MzFt4BJtAgjkGWPXJygSDotLwiBB5SEmomti73P47PhJ2nUSnVjqVrnd",
  "key5": "4hpgoJC6j59SVswaGRrQzKc1XnsAoWxz9Dp61QuRZLFBETzDpW9za19fiYMyJEqPg4YsgwN1rWfRUH7psWL6GxF7",
  "key6": "3gz14uvqbbHt92AETkDnHJM9XKxiNxgUXa2Jmu5hobqopaoZP6nimKK1vBEFuMF5SFGaMTmxqMSqDG4g9yXY4rAi",
  "key7": "52mYmLgwjQmsy4qbg8uXaaGZobYsuMstq2CrtagLThM7n9BmuhpK79WkbmjSjozUokpJChtfQN3f8NQziNBdK5xv",
  "key8": "659iuiAziLCjmFstAvGuJaBuZYqGg2QJ56TxtpGq7WHbEr47AiAo5zYXFHYVd3zv4XBW2jjSB5QjMoFbC5FXdDa7",
  "key9": "4aQ6o2nqSsvUGSNNU2ysMWtSUYgXYeCmuSBwER8xk1HV3dcZUHBb92nePSqXpj75MuttPzc3pXrTT6CetdikYf8d",
  "key10": "2BwqXaZCcBDVwsDJpY2iZ4o3G4M2UkmEvBfj6y9VCyuzKV6xo6r4SFnHVFE89znkvVm3Cm3xnFBWyTPtAs1TJRY7",
  "key11": "f4xKVQQ7PYd1NLh5yGAo7pJtUGd5X3xUGwNqXx9bQrPxo1Pv8ELJCE8dKd6K484nG9fJzudQ5h2GeMVCWGwfc1H",
  "key12": "2SDq3qXqiEZbDzkPn5xfDgkQQ6cdx94RqBwyHzJQ71jCYwfvbD3AgucT6819hYPHLqLruaHEcyGN9tfZxH7xy5MJ",
  "key13": "5MA1quUoDJNukiByxgvmv3neQTSUb6wNrMv1vKvXEoKfDJbC7hhzGW1ocu4ErgrpmqRAxNNwsrDQw1JUR7pP1HBj",
  "key14": "eSkMkbKaqLsi4xL1ys9xerJADHeLpwxYS5FZTrCufgnSYB4jhqGeZsKCDCwn6BcZNPF5gdVn36cDFvD6jn4ZvYR",
  "key15": "3xqyig7jNVf4jPVj1hpFMEdGGpK2uJfQPtvtax9xr77Ti8vQXgJ73T72zy5VVvouvJvPTo4RofxWjmfmZXPrzpNh",
  "key16": "25c5M3CETKJav98hY5vkNqndtf3fXwWoWfFGoHkse7VFVneBAn59NMmU29YYFzo8PLquaNLiLAE26WZJLfirkdCx",
  "key17": "5T4vBwziCm3UWoprpctZCVwWHKTVyKqU8aat8K1B9qRVrnkRNN5WAPzJkNzfXcZa8dAN3eorpWUTR97zZEtQBZCn",
  "key18": "34yUm3GmiFBUKNeNL1oMSYg3LwMMefqnmxa6eWwSWrxufQAt3AxuuufvL5EeGhtUDzuZpdEDCNbD45RFNFFqHuf5",
  "key19": "3GSDA4Mn9DBKJPfFvH3KyZVxt2DW3bNFxvZcNzDY1TRbrNmSUZZmMyBcMNzrfTec9v8AL9HTRodbEKXTKuVQ69By",
  "key20": "o7eQ8MvBT68gWxfMGqaYEWgzoPbkyGat5p9wg9Y5EVaPLz1vZkXARSnS1gjS1UgBypis2stpjB2M7hbfsZNxEiA",
  "key21": "2X8L9Ee946pEHfb6vhRqRUKwmzN7CRRH7Y5PYy7RrCsM1sg7kUcB4dWeR2p6Rczd72ZQ8YcQcfaWWMhu9nQLpRJE",
  "key22": "3371Mei7GuywA4957EtKBm9yMLLx5bVgRdDGk5sSELSs4XAtq197G9LA68EaWTmXVP1coQKQYMnWyg4MH33CQNP3",
  "key23": "39w5FFXLJ3cb3cejAv1yWQUZXiNQsi7KKyz5DFEEJfgaZ2gychiteB9zrCj1apLFLwjKxzkjrfCBT5wMQNa9RWAi",
  "key24": "2LmKQfhMaDGc9XvJcfW2ZYh1y3Zr6eiahQ8tPu8LmvRokK1Zk7WVnB1qrLDEF2Dv3bDC9Tzjgm3nhZNFGBwKDYvx",
  "key25": "2ozzC1ggFD4dSdxFRiZKC2vFCc24xkPnsFMVJnE2sADiU1P9cb2zpZPCJruP2m2q7XPD8a7BmHkmcyR9nTRhbU9c"
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
