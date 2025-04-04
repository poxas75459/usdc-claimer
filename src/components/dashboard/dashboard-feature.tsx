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
    "5jjUg5835fNXbMxqYsmrJGLEowUkJfcKtzJneVTQShzokC1UikxUw6TCud1G4VVUnnfUM8Et1Reci42To6QJbkun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGTs2TBix6KQ79XBqfHJmwrN2SoDiAbs7XZu2kewBuGdLKvLK4rQYvJU3bSFRAfYGQDkvr9wwBtPFhqr6NDPkey",
  "key1": "5QJvV8iLeKrgugVrCWPqCXvZnXu2Pc52xmTNEVNTSuf87wZnnygPgrZjeAVuSL2nyLDNDVfSsV9iQ6AhewbSLr4p",
  "key2": "3oKnmcVbouCamsZ5mYxzScAehzAPgur6bRadHNVCs5T95Wto4n32wUrNEn573GP2zcc5nM9vieZRzfGXgSJwb8Ft",
  "key3": "4yCNQb9t562dRs1JR2FN3UbFReLqBfFUfBYBa857fxSoLfWsMLYzZNLEJY197ajaDiMPfEVhQy4gP3okUGUUQytx",
  "key4": "27Y666XicjcMCeT7jYufhH8cQqK9NY5snrBKnn39mtABfQBGsSzmmxPwFnAogB2nvQPSgAufzVJaDGJWNvcoYxMB",
  "key5": "3daV8FPt6a2rExKf4xw81nFf56vNeWYVQ4Cqc4BSCiZB23XDJiFZUVjHSK4rd9sqA2SQKP7musHJn85nwKriK7ad",
  "key6": "3QwXKWiywraHnMXY7p7CFwsnPzh9UiCwnz3PpLiru5qP3cwMQXmcUDiGLsN2aKjxUK6XW4LPJc6PMMWrEc4Txrqo",
  "key7": "3fWGWvDRCqrr8Kpm48LqpT8K47uJYy1fmd6ypvP9qQBj4HMLsqHzxZSDUpUaRtaaJtvxMVwjZGEa8AUMCziUXMqw",
  "key8": "BrRN3rkfNnzd7RkCaqHeKhBSTnvf5MtSSvp8cJxafLt8AVkmov6aB2QunkNz2BoJi7oMBmKE2u7kwjoLEnWrZsJ",
  "key9": "2SX9Uru69edqkbX6CqBCDkrkwfTtoUwQExeNn6euPrfjy7DbSKfMY1wGuNsG3thYdgU2Q8ZWP2QQrAvZMcDc8Kt",
  "key10": "8dVSiyBVVHCHPz5mWJ6agyimCM46orDu7kVg15ob2gstNK9UHjj3oJCtSvXRwBWpAUWeHUrEK9VNhGEQ5bwRY22",
  "key11": "MbtfsrD8AcAYzom5fh21aqyXfPzEyzwc1YTPHmZVp9bKtVr8Yxxay6DAYnfStnzFLZUFwnyLg3Qhr9A9iW1TX8s",
  "key12": "2H893n31nZhxN1zrpsu7RKGBNZzSWSfRUPA23rEtjqGboBxPbJ55CDPSdAReRqGv26E51xQCUiZHwPZ5kKJJvDVx",
  "key13": "2PQMgBgYUPUfQwbUXZqaVuoZ6MAABym3dh1v6cMTBkqwZF4aKWN8Y2FfBnCMnDrdsMqXRxyZyebbdsgVsjvVrGC",
  "key14": "3SXhBA9SKeKyvLi9GtU2rwYEDCSEHjUkv4uVuWa2hvHgEunjJEADnMbfWaBzHgrMDqE94DRsSGMGTfDrx8QzCgNy",
  "key15": "4xD62p4AxmNEz93uskeA7Fqxn2NzGjkVkFotqWpwcuVeoCPkATiQCg8AhNtqbapUUpRHykwvCPL4Hiue5moD7UNT",
  "key16": "3AcNsnDUcnSdwrXT3jr4mKwcGFSdYZqaCaH9VbTXbpXVMBA75FGCmx6D8C48QqQNcCFNVSQR5T6uCDFMuRd3avB1",
  "key17": "9cCuDDNe9QCnCuYW3ZXrr6ybBD2tqCrvqqqo71UKZehXNeMaatEJx8gZMoTbxXgr5eHEMWdH6CzQneLWM6UbNDS",
  "key18": "ZtEErh18rCj96WztgcDChqMVS4wzYRrTiRHVwSG8sQGnTeJoTvtc6mYxxtxwVUJaHVSXcvqCtmBw7zhPAd23pWq",
  "key19": "5vVFVKisLtbWFDBB7pJfNABodc91kN69HeinjF51bEBuduyTsWX56SppQNNNMP8FBqbWM5DRN1AfGpK92rjjcxuo",
  "key20": "3L5amRroKsawiqqzooF1dx8WVvsRC8BqkbJtLaBCHEwERFPXy43aNfkvCkksnj8uir3LuaQMuVrhqhrG3hx9jXHW",
  "key21": "44RNVQzvMf7qL8JajCCYLEGgMwT5AAwTfWh3gBMQLKDRzb1faHPLQSV7Uz2VZTggWVgXrN1gvF83vzkMpfr44MD4",
  "key22": "2QT5CHMA9nkYG7rmzkE4c9Cy2mczVqftNjM9i6wkjSbaeHsEKNCRifVCvzwUydQMfaWNT6AvaF2UnguRXJu4BvfF",
  "key23": "2tSnaZiLhU5ZFwiq4oQjGu3vHQ5o6eDtm2azo2PiKG827tkcsikHuS2j6rF6ZXwNrRyrHUodYUmmtYMJEY58Mryn",
  "key24": "31YWvFYVVdU1t98JsrKpmFDn9bw2yAsvNs6dKrqyXGik762FvMZwhWCrf5QUfYYqSNjQtbeUkD8vCxjxK2qrAHTz",
  "key25": "3b77P4wXrya8SVUyK4Z34jcBJiWPCvk96TkSMGZmEw5SqcQwrm3Gz1VEV51Cf9ZV32EGAxqVbX7gbcgDLkCx86TU",
  "key26": "oFpNpifsjhc4MQwUo3b2t6fr3q2MRWCVB1nQNUtcrDaE6U2Kan97AfHUqhvhzoF2g5xaWBLojozYgSvqwea7EAh",
  "key27": "2BN4r9DbyPRtNJMKyyXHWSqPrxVYpfBoKLENvdBNGjriiGjEpTNhDqKWczYCsgpE9omcZt8JCb3ns8mBkitGTEFz",
  "key28": "x7Tzsmmzhje12HBv8otgbUhHsHK1dir6d7aFsvq9RTNumLuDk3M5NjHpCsV4MpwLVgsVSPMjz3dE5SJYipd4Qui",
  "key29": "2ripbx5uy27dn8t3TgxhD3mxnHW89V2ctbfmvYfWcNZJN3xg4Hy8aeR1Mv1mtsrwbCjs1ZhLHYTfqsHFpApi46KW"
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
