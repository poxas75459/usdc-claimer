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
    "5U78BjDZgrNmL8ons4FHFeJjEqqij8XvjjqhjbnKxWYgukn9i79T47CnEctjvCJpevqfBumEpmu6rb9H5Jeu5LpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNxRtZ7uMM2pNYiKfQ5jSHwtKD8aRBnSE3N8MvXq86SA1DfbA2zF3ZkjNshy8HRcKhpHjqKDSducv7E7ygBHTFA",
  "key1": "5EiXbAUxjpZYA8HCrkZxnZ7HszT6RHyETbteZsse4CLEQz2reMxg4BVXyGeHzyk6R8DU2doKAMjvAuxm8PaNbUN1",
  "key2": "49oZray62MmiWFHDrvEC5Jnay8GHrMjkdaTHnohbsd4upCNTpnDZYCgwJ2L3Cc8uVTwwK78XeW47EAnK61LjYXGX",
  "key3": "2TxceeZd18oCYqwdceo7eAH5JtyTDPPeuUNBGKsPJYWkYxc7HBfeXVMWbLCvFYHaSmbrB2wYvYEFnTZUrKB7RThZ",
  "key4": "3NK1Zo1FZ5gWqJ8c5eekMKmnEVfUe5YjjmmXiYg6zvcZv78V8SKpHwJXF5V88wxUcuiCq8BBg3ZkhEMxmu1FTBHw",
  "key5": "5dGCyjRosEoQbbPqY1ceywRczsLvFUdhFUo6CdiMgq23kZpBnDtCAXn2zFV6oq4oJZRhmVU5vGXw8BU6RLSgSuoE",
  "key6": "5DwSh6vP1cD3XNzorvXcdBkkVy5f477tbdcjJEnC9hm7VLmvGJG7Hob2vZYARFaQBgBTvLLKwxULT3S9ZYKcyt8G",
  "key7": "2H7dJtoTK2cS2vasQDV28vtWKbv1grzDjffQVTXX5khVwrpjL4HeSC6LXj1919H8GwELwhobYw6JYpzwPjy7v6Qd",
  "key8": "4TmyNRX8C13JVC47DaGeaoBx59aghX36F6xYLKxrty7pBq9EJkFBya2RWxZYHjyQNnnScq5RsmvN1jSx99TPvDq2",
  "key9": "4qJSFrQBqnUNPppXS8xMeVYQAcutnMy8ei92p2e7Q6b5WTX9ujXDqeDQu7mycDsNJGVcFHnf7Zw64gRTV9pcwTvk",
  "key10": "5t8yvuT3rmA2UcoB4PSALvKjK8JetERNHxBkgu94dkz8yacgFTcqTPUcFrdj3X35miPqtMmDeT3BkS8oGQ5NwYMN",
  "key11": "5Mpp7DFWHAthq9z4TeFoi7Y2VXpoz3LJHsF397uYCQB9M1RzmENVunUMRFw6PvSwHHuxEzr7BQdUGtnjkKqiZ2Pt",
  "key12": "65QZQNc2cnaew4fKpXsYedhR88aQ4ZmVWkoZPSQXTVEaA6Fdwrc9TNaaHdYLMmEG5GrphBmLtEx2YEm25UJHfRZz",
  "key13": "5uRRZbYEXnYobr2WcTwMCwWrvqJVfcrS3YkSt17jBXgvuCqvoUip1NPRsyLRjh7uGkopL4sKrHtTos5kPvWtKJD",
  "key14": "4M3onvrx1br2MMPzXFAgU8uajjPaGexo3nWb7MfFhwjigwTYB47cXD1WPxZ2rVgutkYZWW7MnbaXUobFtCKGaTVi",
  "key15": "5rnj5xHC9h8kRtes8LGz8ToGUo3KVuJyui6cgyeVBkEoAP8btRh7wN6UPzKV6PADZciyemXHy6GQgjZ7nSXvRjQS",
  "key16": "4aZK6RUJUWV6txuvCfQEKp7rw8HDHJ3ZnqPPaMRX6S4P1fCzziXLptLWTs7f1GvJbWapHgZBmRzVj1TaPW7xJDee",
  "key17": "dnk8179xVg3aX9pjAsRo9haLXCA7MuNA16Pf3QfXbtDmkYAPMfXjuqzjjQ2FQ7RDDfSxe7d23SigvdzwPCLZtQy",
  "key18": "4LBMG4NE7KQthZCZqP71nKBPaZcwA6LJbADFKsaSFrnTMzW5MsNiGfWAuUvhryxy8L4ekUg4YaxK5TXXxeYZR3Fj",
  "key19": "5DVQ8dfgHJbTBxhXaav1BjMAhUGFoNX6fUuyzJiprudffh9Xs4pzaJgWJnf81XvGsFzfo9xF7x3muKjxPPLVuHT4",
  "key20": "3GyrwQzxpXnWELBNzhgEfiDPpv3cTpvHE86ztcm3YdGqb2puery9PUSrs7hCQvrzh4RsUpU6iVdtSeDm95HBCBvb",
  "key21": "5DkHhh87TCabmtvfYL6FFxsnyMz5uMS4aW12YiWG6VYQ8uYSFS6YqpHJWm5HJ4S9BmxbpeNeVSjdzXpigHbLy6cS",
  "key22": "5Zb7cdQ7CYWKiCzfuqS2hxv94tfq2WLUNYxjMQ5bnoBjQGJZ54T98t8mosCaCrieSRL3KajEDKDsZq1ony1TMVAY",
  "key23": "54UPphoUqnmDj3QzXQzGk5Qr5Msu4H6AR3sZ2RpeLrp4xwcSxaMwv4oJvyjpXiAoGSRKvhhLZa8PNrp9XUaCujcw",
  "key24": "5ZsPg4Ni15vW9aeVjF68voKKLh9idFqrobLo6S1GpkTDMBDNCattxVoTMrKgVs6r94kq2CaS3Hb74wdEidxS4Ynp",
  "key25": "66LvrWQzf7X6cGHe6uZmusc7c95wypQJPcYgo7Tv5JTKUoMfPzQ1oN3oeuzowfH2ZuAST8Uu4kggqUbQd7rtf6ah"
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
