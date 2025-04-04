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
    "AMSEfNbAPq4ueT6NHC5PBCRDkGuDFbK373yjmYpmqDqKhEp8sfV8mhUabyk9WXA6bMySh3qwDvvmugTqddaYnmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jph2bDYCKyXU8YwDs2ChHS1rq3yaoy7yqKrjUqcWhWxXCxFbwuF51Jd26zLgbn3gKub46fFMRDPVWui2VaxJdcv",
  "key1": "3sQnkeNPfvgyGtfrq5acJXiZUKmax9azd6pxscNXu34DgStQZz8ELU2NDwfXDT3BBrxkVrmWQTx3HtWJqWHLvY14",
  "key2": "4Lr4dMN4yJrPVjiAk9de52RGqj73Ua7ekYBnASjSGt6XVro1bmDdLVutQcMW6VMicophCuRkjCR1bqpvJXDcEz3N",
  "key3": "4KqTMhgSYFW5xUesPzueAA5B2h8c8JUMLVLiYmxqkavG2J5xBvFF9dDDQPp6obYSRsTu3xDyagAeuyRxybu9qvnF",
  "key4": "3G7g2Xi8xa4wiXYh5hcCo94Z22NtUpayZzKdvVutaUjVvqE8harUDeYv45AHkTHALdxdqosi1mMAtHgBPps6fmkh",
  "key5": "33DyTF8zJZfgD7hGwWRHKvaiHq4CpNyiyojHzdmj7C7byjR4dVgHSzVLRt9Xs6A2Bz5eyTh9k67iZ6VhWoQpEs2J",
  "key6": "3RERCM5j1iWQfGaS4EC4fhCjnJ2D6idboBCkuZFrz8VwMn3qVbRcB4rzy3tq8aT1jM8RUGayYdptr2KYWxx4YhfG",
  "key7": "gF6KwXddEunx2wxNQStJqgZonV4ETGMLiK6qqt6GGs4de7sezACJPFCiMyCF9LNShhjjKaDtESyGXkiTNU8NdXh",
  "key8": "2iVpvyNaot6p4JgwdocJb8RrcT35CuG9CLTcfcWUppxQsGjas9aMWSwchgNFk7zqTjsjA8tHCqw6hJn6FJUn5Yts",
  "key9": "tXCHP8kLtZ5PxGUZV3AmCAm6X5i26x7D72cYkx5gSovtUtajfhAvMnpSP3gYVFMwxZUQF336PLyPrZmSDDUvNhB",
  "key10": "4WS3h4JRWh6Ejt6E6Af5SekMR4auG1isSu3aEhXT6BKQKkUTgTs5GM8pVr8vsC18PYAa7awcj4SPy33k1sP63CM7",
  "key11": "4DC6a4nFLuv913CA4suCgJyenSHTz77YdALFE1zgW26cNMhfntSbhijMYgvrLniLzESrGGvQ7FQEMb7u4Mii62EB",
  "key12": "3zXryouwLDdCoibCpdY95GFpfBN3TWfrCEJS9iYTc5k3Yti1jojNfa9pfnTULsxaWQsAPBrSWThK6NRGV9fejihg",
  "key13": "yKJF5YTnT7ifnxtZJAjmTDHVPe2M1zg1WkoH1DucXi69iqDCtygiMCPcZRVtu7UYVqModcXmpXVBRi4wSMDuzsD",
  "key14": "3jvJGiEeTKQ7AJMzCGoYmjYxFK3ZcqsVqZnsJwHnx7unSQmKR7bdLRop4NkuHXcwBjqbyE7kjgGuwxD7A9mfBBD3",
  "key15": "Xec6TMXN6o64Gug4W2nD9qvgppPSZfzi327cjX4sRdWiAymrGhPdVwkhd7RvMCLhPkyoKwmKpE2WSW94v8vPDg3",
  "key16": "5EzBEUNWydx8xTWNPZSfdZ4qf1hoHmTW2eMs25ce68dKMBarVmwhzigFWCxSoW512XDgsoGLd9D83jrQ6CvoVNVc",
  "key17": "uQWMCHes9xVc2V8KnaMgQKru9sjtwvXYvguQx237FFnhbHAgmzkQSyyi4dWin9v7UCcLiDznF4Y8RGrNnWm8S4W",
  "key18": "5YEXr3RXpwxFLTgxyQLeRRB1bTk42b7eKRa8ZcAtenkUsMtoczTG3ewd7NcJtvmDudHucjxpyGBRexweQX7VUSiG",
  "key19": "3ZyDnXnkDaMLq1k2ivvURXLYqiddgphHqZfCbr5aCHCwLoWGZVdnJA61kKAu1NmrPV8tj1M3yG8ngjZ4DoKFPxzG",
  "key20": "z3euhZpH8YyJ78z5WgqgMWHonXNL3WnkEXDgMq4nxC8w97isyP8CSMNybZv3MgWH7dCDb3LuBoKRwnZS2yEqQG4",
  "key21": "28PFgZeLfX8pe3v8gpqeWLaV2f9565LtZMCVYBsL4JVvjJmLs173mcCQzRFoUBgTKVvE7CsvF5SH9gv5EHHFJPsG",
  "key22": "3xdotUN8WnoGwtpCx2LLqipr47c5yWFsnihbYqKKhWzdrMsAJ7GthzZCb4Neyr5GfFUD21XxkEVX8poXLHuGXRLi",
  "key23": "rK3qoSG9uMsL1vDub9LkGQFSyD5KwzEtu2RZR6A4RsDPhVLV26gozwVYiEs4hyVyTxpWyZKnombAKQCEhX4txG3",
  "key24": "5kNGxkGCfRdEqrNk5YfcskortdZCSmUnK84AJPFpmroBosWzphBMw2dRkEdyRLQ1TDwxPgTvGydAKsHtEPPZYaSZ",
  "key25": "2PdqAqKjCCXdt7EarE6aTLdt8tNeAhkYqmAq2ipboWditBMBCz9NryMtwu2M2Fu125CcZdeSGNqKBwnnPUbRjhkF",
  "key26": "2LdzwsDkWmwYnfTjSZn2QHWXT7BVcBhh6ote7anATfKijsp91rdktFPbsXg9Z1ms2kmw79uhGAeadYLVH5vzhfpR",
  "key27": "43zusL25aw2zkJxjtAAdq4dWWUwk881AehHtNZHa2nVN7JaCkZcZBckBBCBg97wiGjjbvKGAbm1bbdnCVAdV9bDX",
  "key28": "4HcUhS9QuVHFGwCm2VjsWL7PrBx2kD3TScGW24TD2XiTmt1n6SFmusmhX3m3Cr691ELkYQN1vZUdxVmdfXzjrzAZ",
  "key29": "4c11EJnMzE7qNXyCQ5RF3yNkgD1MCWjnH6Uvar4wcYNuUfPTaQPTBGnCWpfy7EZQTKkL4S8L4ErU1hANHqzWRgbN",
  "key30": "eu2RVADXDfTej5GgcepzyuYubX1iJx8eUnvvoLz78okZFZE1SoupD9Uw6epbnrGyvNSrVpVdfw8WYM7PGeyWUz2",
  "key31": "4oPxxDhWjTG9bxAbciLBRu2wHsvzARAj3tsXK8pqdRLbb5xoxkTMJvKCZU7bEZFeSK1orxjFTN2oMFw7eWAw3pBW",
  "key32": "2jWVBS79VoJ1s1XbGnp3EXpteREBmQdSxY1pyYvAibdTqXd3UkCnb4A97P3ffJnNt49RRLqT1wyzXezQ7ZsyPpMS",
  "key33": "5vCzyBF68fEb3sNH6yhi79rRcdnzHWbrq9EFqqVGJHWonUuTFHAfQCbksqC7cwECTmTfmG1p6EuUc6T5H9k9KWF6",
  "key34": "4UWLA5UoseMP2UCaD71GQgnbXrSYtCK3gR36YqfT9bTU8g4dUzeJCCo74o8UPbBsdcw45kpUDQ8s2dvVLK5ZRWNd",
  "key35": "2KrhryWHRqn6AVcgKTXzmb5sVhqJeSD1XRm8mZNGS19grXmGp6DW1qKU4mLKZhVhhxXZ1rhFTxjWf8uDnmE7PWiq"
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
