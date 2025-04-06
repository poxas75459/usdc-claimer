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
    "2VH3iTyGyiknhtHLSyYqtoHeiyrEc8bGYfCkaQFQ3E4LH3VeG4xFX7kR1AV326gwruJsz3s1DEUMDkY1rUVHTYeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MCMtrJhmHyzLNiG5ZebGFBaMhWJuxFTC1b84wWYB1JzBcwJpoRVBX27ZJ827ZdjnTfSGTdHrhBFsKgrt38kGEdm",
  "key1": "SZKAYoW2hqeJFrQbgb63uh6h5VdbW6xiGPWh6cymCaTCF8cd5fVHg2amEACawcf7xXi1qyDgw4onV67vUvi8GU2",
  "key2": "3mDZDcBAr6DthWHZ4zfE9QVETnJSv52wE7j6PAw1ACZDCYBqYJLmEzYjvHnxpw3jkVffVqwbUVhBKQYantZoSTis",
  "key3": "CeZb7njhLhRVrA3W7kqnw8nE2RMTQgUcJraRi9aceSiPQonqa9awwzMJyFmRbAgqsdT4HpZxa8enZ4ghsYVuAJe",
  "key4": "4jq95cYrMc7nKiymgcLCqnyAnWvJAi4qyCCwHDJoFfyMj6ePo6UAvN7EF1JuW8xsHUz2A8pUvSHHZpDLeRMgrttf",
  "key5": "Gb67gtYrK6iKa4gcx4nvPdv9xncT8o9BmvdmUKiw6VzuJzkYRrAzJwtrNr4z6i3aiYMyF6geJx6YZW5QL7TPJte",
  "key6": "2GxfR7tBvSXHEFXr36WdHbBAzosvtBHLJdr6Ce6ibdSrei8WHmjyZ9SKuN1NtbXo7a56Ff1EDA7uHFSe3xZs6GTH",
  "key7": "2hvT2xHGxSuR1xeoC5UUikMUL7CQd6uuGvmvgwTB4ttCd9b7JECfYYU7dmZVSYsK83RCpbM28APMxugsjDhNNDr3",
  "key8": "4HjSM7f4mjvfToY6wskrvjdfM9Ud1izfiwNqqpZR1jBPvwnuZqNWeshQkJFvXhN6AKd2fqoT2TTWJUXGLkmifSmY",
  "key9": "3r2y9i61Xq45mmMxXexmbGmpedoQbydRvs6tBGXAFWMKJs5PdZF2xKGQ3rA3dtzq26Ag1reZXmrhbkZsefz57XHa",
  "key10": "2j2SuVQRGT2Wk7tRpvS84sZnXHT1oJutNsowP2zGXcZYg9baEiTyi1SoGeN9TT6rvgzq7pTmAMQNBMnaxgKZVZgE",
  "key11": "397ospKgf7XAELuXGWEPxFSckoYioM27uCX7xbAsS1dFDuiH3SjNpNu3Z3t11HA8DJjLW2HsrzaCGgDZSJiJ6T5h",
  "key12": "3kQh35FqCmsK1jqsC7Di79KrwzucPuom8yhGrcjyDhFZnqKsTsCXZavKLtDJKXbyy1fF8cJJp1YfWTF9S4iCZ1Sb",
  "key13": "65C4GRUesDNc6Cc2nUFwtp7TLSimDMdbJFo4x6zRgMhYXW4vk9E7xiqaUe2Dwbm3Ne231Pwk9tedSR4mAxQX9EAN",
  "key14": "yG2qLUqMRfpqpmXDU1MrPzVguQXoroAsC7JuPgjz7KFx1APjMiTHLPK2CpnEBh864T8fvJMDTs9Totum3focBgf",
  "key15": "2wND3VVtufoqq14KuVEfJEhT21AhADC8r3TzSqRcGhYkRniLShA8jBKciwrPwrdVfcq56WWzaD3g3mUcuy14zhYj",
  "key16": "3tptxJ2GQe7B9DZGhQPa1UhLUuCnCG692wLm7eDXWCZNmw3UVeLPpVtAysLYKVQQYuDgaMkKTAcpmwfzaBpWWu81",
  "key17": "5cxnURJvWVXmV6ZeRid6UUPGJUPRqhUE7FRfXDxufnYgBfeQnywJU6QEbvqbJxf2iBYvJE3jLx9WnyEhautQk1kf",
  "key18": "JPQh1M9TzPiXKSvPiX6pvVKd5npj6Ff4HdA32j4HiSqV7d8C7NWcTennE14KQKGHJrEEZmwfYAiczUC4LCMHHeQ",
  "key19": "5zxe1BxAUb5jwcEniWynt2TTFtCjVNMRcU5a4FGAt8EYfodhwDWthr415Ua7HCsNnGvbCPmQbUiBuJiadwz9CRkR",
  "key20": "44D1zWf3NPeS4gKuckFxDriGm5stCZcjokUEf7msxUdXgV3SGfnCDyhArDtC9JX7kawfGGEvQwGbA6hTeRWyP5pH",
  "key21": "4W1YU1Txqa3AtRkYCYpAnbmbwohycjsX41kCs9SPgWhvdTDfopr6bLykH8atstC5UeunLJqt9Pu6J7gQ2KT7gxEV",
  "key22": "2zScnQJFTzBH2CGTfCmgL8kXsexwWR9L3iTEg6tMu2rmk1rmhBk7akiRW5UTXynpvZGGabz4pRNTPwMVx8HWJ3W6",
  "key23": "3ufXESVJdyCuQtVa98wJZaWJFjU7UttJ9jGtjGh7VS6YnUVfUq7mMTBa2zpGfhvQMpGYhi6wToBkCDKmxjDV3vzc",
  "key24": "WW23gYbR5j1b8naFd2bZBz9kiBvGMPAw4o2jjZNE4es5w2F16Sw5u8mgkT1mNbEBoqEVinfZoy5mSVJPQ4LtwLV",
  "key25": "3RjGnboKzg3HtTyk4wbHvWZBy1KqUm9ec6CDcbgu7kzdUGWkjMw3NHbN5bHrAQLDiHNN1USHD5849beS7SEdgMyr",
  "key26": "3FD5oTwf161CJLNbJ9NfTekRJ7ba77jvGWRsCq6xA3hGNRxqGi6yaVZQppjdsVPZKXDpq4utCo6CEpg3714f9sQn"
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
