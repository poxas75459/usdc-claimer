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
    "3vzrH2ie9FCwNpnTruzTBCiFhorZ9qDuKSM1qRuaauzJmfVPTWKRtYbu2MQjmMsqF9uwMfsQSATsveR4rorLDDcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2699QQSjqhfFY4NJJMGS82vZLZd4o6yJGGVQY6vaVkhU1SCMYGm2iMvQkjPSVepmmpGcoWMLBeVDEuUFsZtNpdMA",
  "key1": "5HhmkBNi1buenG8WkkzJtVz16n5J4Wq5agBTZakRdaqtVM1op121pLUZypCcw81EbsNPzqsS1TFSrYGdhaQKiGCR",
  "key2": "31zQUPVfx9GFtHoaiiYWQ4EcTraTHCQrcfxwhm6hdquHPHSgjYbVug9DEgLq9815jTmt99NXdaX6uGnXbdwGVm4f",
  "key3": "4jbKnCLGAHBoxngxMrmg8WyRmNZxHg6vb54qNv9M7VbdzCbWcguqtB2QUExACsFLEv5xXEEvA4MbLZXKmuqqj9R8",
  "key4": "3rwn4e1wgBXHXv1w25qFaWpZrLEDZNbZrQQqmRnSxVU7pUEVb4ZX6zmX2nubUWAzdCXrt2E7tVB2Bga6Y8rittqi",
  "key5": "3MNrFHYetgM2vmKM2GMLFeVzgUvngtnaM165kRgqXNggfCtnhWtwgCT4BGqdcDjXv8W7vatyGqqZoa8Jd7XGhdcD",
  "key6": "5AxQpnrhv8WUHCuBiUhmU2sNoAXU4n918YPHHXXpt1E2A64q8zZmiXiVY5y21A5AGP6vp1qexgdBfiu8B49gizFf",
  "key7": "AQYPunCsJN8MLZ2M1XD2GVQfqHG4KXpcJmx6AA6TFKvWGNxDqYEVBQqWX77VjzzFLx5KkTonpHdY8Hz86GNkYmW",
  "key8": "4jgbzi5speUiorrLMg5QJfHiVpnAkCVgsQiWUNeHUqRkfrY5wy95S1UCmZj98fbXP5Ynqyit3dtX6WqsfJJLiRW5",
  "key9": "37fUwR2t1M3Vk9VYT25hbyNWAXANt1raYWtfyZ4EzQYaVZCPejXVtgo57WgS2F8Ps7t3pftbZEsWTvrcoDnBPn2W",
  "key10": "2TR2ZNnnf4R56jqTJs1GQHxEJPPXhFzyzFnDcnq4N5Ce3hb8pRB2SJaD8iaBH6T615iLyhTsnwEvuQdyAX6A8do",
  "key11": "3mkyeycqcUqehDoZDBwHrz7vF8HKQHFtSjv1ePenVRzKaQ2FDLbsuPk9zWY5S6Dx6mNNG5YBsXxQosYBeFgAxiFC",
  "key12": "2oN9cEQjZ8MSdze7xhyiMNQPiGGdhhYWhrT3hBxTrXfihttLQsNS4zEt8a2hHK8kC1fQUqZVHP9x8FStLBn2NmZZ",
  "key13": "3yXXp9CFsymNPLws3uoqfuGpbDD31zk6tLiYp4vRd9dSVgcBwSiTE9UagFUubbZQm1M2NyhZBkH912syLXUZmyik",
  "key14": "6pqPsaVwxMqL5o6kYaurJHF6fW43zig88wQJFSZNAHWGBjqUwX6BVZxtHUdXKH5FNVvS7X93h1nE8c8FnAAK2gK",
  "key15": "7NPLoL7EWrjQDdQw7d3DU8ar9DJCS2V4LyXmLzZ3P2sL28eALgThLvZXFqXeu6kAgUjtSRALVW1NqWHPKZDQ5Kz",
  "key16": "3162v5NhJMrMo2EnuhRaTueP2ZMXnH8WYKLMx7hctC6SdfgHNjWQK3W3QctNjwH7kyeeuwuspV2JWEZLL3Q7Nsvf",
  "key17": "45aDc7925VTdKNvH8So1xguVzBqZShjxv4QnRjj6osurVbrMVuABFQRBsz2FVPR5KbCQNdeCjdkRm2EzRaWNDiM",
  "key18": "4P3ktCr5Fb8oGEv7HEiVXE7EnnqVv3Vsh5HK5zBt4q6GN5oLd4PvoNtZP2H467yZTYg4DhCFLBxBsTktbMvDiJh4",
  "key19": "2EaToPFKU9HA581vvuWhqjJ7r43G5W7LtSvG4ggxcrrNUMepJ9kaNhucT9mCjDyhsbADZXtrqQLeF7eJyMWKDFYV",
  "key20": "3Ma4QK8ZR1X1fRLtdxhiZPruRXZv9NgT2jmidpohyipPTkSeyEDvstkMprSE2ZtR6wBrmyNTRDJXz9u1iCEZgFKa",
  "key21": "36jTTJcak6N9qsJeqhP2nvPFNs7XsqJVHWngcVx1BEJgo9npZJJdrt2nKjpRNrrufd1LW4WeUjFBbD17mxC8nAKa",
  "key22": "4eMf924dTPAprZNzKeyvFXQE6z6kaRLwE7QReenEcv4nhj23NQNAWTpSTWqNwNT6KHDjSafvoZep5qq9hsqdDY1X",
  "key23": "29PrBLDSBADNqNVZoFkAimbnrS89t3HYHgjnQHqTVjYVLr3szsK88eWR8SP7BsgV7uYF1iVmLoF7fqKjFs7onDXU",
  "key24": "3e3VZCEXcJEciPyiiV1q3AJNMkLUuG7XbP9sKg4LpeNWvRGp6SEcyx8hJDtcwQsi1LQYikLMM7hxmudNQ1WqHx5n",
  "key25": "5ULQqdjYaQAAoHpCVJQExcA6LgqXmoQAzrjsqTxwcBBby3sVFMuPxZ29qhq6frnHMZScvjbydZ1ECvC5gRVWQn53",
  "key26": "3RqiLPVUBFPaRx1mvcusUQpG3gzeCN9Azq3XLajMbZu1eL1K2jkS5oAsmDoTrYm9eJeR3m6um8vPbFBmWFvM8eC6",
  "key27": "xmZ6uUhHefmbjcypEkKw2iZa6jc7Z3V3J3Wwy7mjSomDHMkTBo33UhMKCiLSPm3Ga1m59auozZd2sCk64aQppqu",
  "key28": "5hrAsRjfQCR9ag2PFcjMGXQU25rENp3MsUyM4ePE8iPLWEEnwEiFVJqQxUHFKyFzKNTyqAoQJQsDfZJRz72YB9e8",
  "key29": "48hn6vEW6XbuEtkLFKWJY93SKhXPZ74JijgwT9PgMAoLKfPnaCQzZF9YuQph54atTdk95SMpuxmGhwv6TrtNcvwp",
  "key30": "2mMTG7G1ETqTDZKYUvY5LUa32ts1uUP1npTAeQWoB78k72xFUXqj4HjgwBZFHfhUhc7P7atV9ppMW8b3WvGLZCXo"
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
