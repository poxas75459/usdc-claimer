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
    "4GSm4ht33qXADU5wgUFauXFWDZ6GGjRuxRGFYjkXSmetjPBALbRGrriVVGiucPnRTjYLcvi71LqcGZrkJdXKvnKK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMg5svEwAFbp2XsU3ikqzk3efaekReXMsFEvVid1k4q7CQA5vHVK3H5WB2b2nhH7hUVqhmsyVkGiZ1gFUkKnv32",
  "key1": "3PG92eaC5DJepDUXn8WpuFHFtLni1qdpbh1YCohUYd7p9HGB3VBDX3fZK5Xk8hfpkMnnosDYfGCiqoDwPgwmxuBu",
  "key2": "nSk5zvNisFANRmZhm9m8azkfPLmV37h4miwa6gMdfFo5eDY3T8wPPQDs6ju7vFTkHvgRQF3mBYjh7NtC7tuvoDx",
  "key3": "29DzqFAaifyGKLabLRiaxP4s94VYC7wT8ztkesY2RDEHTCCTa5Q17M1bN27EkUWjW6z2eiiYM9DgrXjCegMNWXJm",
  "key4": "34CvtrHCA44uA7ds3p8EWX4Pw6aLbRVHfH1d2SowJ2GE4z57GhGUNt2Nxx2grbFSKVhwcbd89gQnpWTMmeS2GeLc",
  "key5": "3fuHVqYNxtYBqLSccamJJA8B4T5R44sbHtn6UyqurLGrQyN5Ns6aDbq9qGkVXguY72jNQj7HazV4SW7BnxjJj6hP",
  "key6": "213U8ciifjeCE29sHzPcW9rjW6MDSG9e5yWX1sbBjpYJk4PKEtV9ei3mLpVXiq4pdVGyqBt4pdh1phffTY1SFj82",
  "key7": "kzA7GavCsPjrpnzKMjG6BvJ9ajZM6W1yDGgnVKgjGHCy3yxoQvfNTcGZPSxpjh82gvbdADDdkRvJHJPF8m1Er99",
  "key8": "BZsH2iGRJEGEvz66s4onLKFQowPRUpu8nzpzSBeB7MsVA6VbNi3xBrMGT6APmYFNG89K8zKN76xWRqawmLbV7gr",
  "key9": "37vWc8EXkoMeir5trEmg2TTUqCyK5B6oCWchPo3LswgKPTxnwq3JNC8GwPRFaG2X9nkoz1kRi6CcvKY4U3voexSp",
  "key10": "34yw1ARDzZjDxUWcsSSRbXv8eXDNHujTpfRCYdJV5tgUK7w4Eqp6mDQsdKY7kNjAgrPXphk5JGPNb7LU6dUEww1y",
  "key11": "4JKVxdMEnD4APiseCVS7LH8tE1AqZqsDDDiNgDe4TMr4Z2XuSA2icjdmT7xiGHa3vWvqtyBNRYy464LW8wNTiYs5",
  "key12": "4w8qLLKngXKk94vfQTQUXhB8aZgig45893DL2KH2NWNREcsuVa7pssJif78awh5hHhvCsTJZqzQyji7RvH7GQprH",
  "key13": "2SiFjTV3fmAsfo2o9rjma6YyFZCKTm4SE6rTqcM3nzv5iuXK54QWQnhCELHjvWbivfCE6YW1UuEoeZ9WFGnWqUZC",
  "key14": "5egCuR6JWySr3stBCi5rtL6gBenDC46gmvVnqtRCZmqNpSyyghZcwEkyNo2q3TYadiovDj7QUEtf7qoevUWmpeno",
  "key15": "2yN1xQpiYMM2FG6ZaVMkbKkuzvzNPK2dhjvFwNzEdN5FRWGo4xxWGz8jateQVtpRE7uR5N5hALXPU67EB9iNu47Q",
  "key16": "5v9kCXLRYm6h6pdg4QNE3i9KyG7Z65dnexmUQ8LTGdvsWTpRBx5oBKQMVTHffGJT2yKxY8bRhASLXYsybUL7DMGG",
  "key17": "3oR3UvVjNiHbKGDc6rrN6xhPvRnJu7TaeebwpnfEX7WmpUscwG4V8WWmVvAvva7YwxXdrGE2etpJXfemjswWf4ku",
  "key18": "Dgponip3Ceu26qvuehz9gjDfvXMKTBMRDK8QBtsa7VrTevsgvb4XYWtFF6yTg3ZrSHSp3NWRpt1Uhp9NcvTpFWF",
  "key19": "3YMPD3JYAeTHs7xTmtCz6Xj1Q41zrQpfpA4zV9HKqLWSXvg1cLt1HhYYTytchEX5LgHRU3iAHWSf9gPBAuhoKwBE",
  "key20": "4uEeEKacTaVJiuH76atB53KcT9dch2xDiToSLNrKkUeXuhQ9L1XWLtTkt1skKMU6zDxNUCvQGk9QBgWC8Wh5GJh9",
  "key21": "5srzGJ4H87xHrzy7HsPyQHWjEjTGtHR5YdbgAHScsCyTYNXCQH1DPXB54Fonj8saxPMMoydQjETJwFafyoK9F3ns",
  "key22": "4LmAwfvwpdAhtuirrk7kWyJodEv63NhMvhRMvpc3UXfPfAwuBmDmmqhfQYiK4HEHMbXL7XsoDZf8aW3cuMhxyx8k",
  "key23": "2RGqMhnYu6og2FyY8m4tkyWy8sLKRu2koQJ8Z1ZC6E438gbH1XaMJSNidvdWrSfoVFf7Ybrqw7a6SvJB9A68fM5m",
  "key24": "4dVJ9cvvkvZSnKVKHdvs6yXKgpAmofMNmZqUwJoS4VaumbyXZXPrvbur5w7jhdaqQdWLitYjZLnk1rqdRhGMWodE",
  "key25": "5GKGxggkjDtoGNAsxS7kd4NDrDmyMQb414wHZ359McxrownbgUVNtybANnQ3VNYK3MgDeSp3VGA54EcjvrcufeY8",
  "key26": "tyMxhEv6rHth7ZSGFAQZgAgNHq7LBL35PPTuiQS5X4AjbN6X4P2kZMHtmYXuFECcnu9oFtrFaHSaJrXR3hMZrPM"
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
