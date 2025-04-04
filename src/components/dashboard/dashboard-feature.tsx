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
    "3HTz47NCN5QQBudAdeZcLaBqPDnsD9BDkVnScsCPMVY1hz2RcYxjQBY26kDftMv8AJ8ancPCUKY2ie1KEqFSA6iK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5y2jJis7sE2NQvekXb5M1exL9kMsC9G6S2WEiritZipaduhEiuiMZuYJq6GS9hN4WL8ryvgJ1WZqmJxJ7hH5X2",
  "key1": "5kWinmgvHYTabUxbe7qzRKFLBmXYN6pQErCGzCBNfE6nfCfdgZ6uAhj2gkLbPcqzF1gfW1ZHf85EMwQreXZc46Fq",
  "key2": "31yrxW3WTuURRMNYZNpV5AG7sVFsQGk5qWr5EmsRqY2gGdghvhcvhoJ8aEXnLJpGHXoHdUwdazxTS9Me6Q74t6M6",
  "key3": "Wwry19piW6VuL7tvCB7WqziA6SRdgwJAD6ZZQDDoCQw9bikYJG4TZuiDVXrBUQsTpqxEnpHoeWHWsn9jTReYKKM",
  "key4": "3YSzxwSEbwQcj2WwBmZmVyBiFS1ZxpnGjns933PsD7c9Z8QtiAGArd1xkWHdE9brvNB3MMCeu2QiJPz31uxEyQ7j",
  "key5": "5FU5Z2eH9UEFyvd6BbRPyuGZomWoUzbWdjZfgwuRW9m6noqx3PZauLLAkdZvsFYoPrbzNcDjBzTB8fUFvcTuUPDN",
  "key6": "XixScwUuAqwAh6SNeue2cC2oUqKW5iucsbAjN6Xu4ceENXnULb6qxMGiJjpYygy1E1qtpT8NZ79fQVQnzQbjg6k",
  "key7": "NFYNcYSnQUT9QgwYLVresnwFRri3x23k97TqDBwTNLVyMfqYhTDE5MN4wTeJR3m2b1sHkpaknUVN2yoYxSQfqed",
  "key8": "36oDyS7hvCzuc4x7Hr1P96cLYPbSyf3vwc4fkD6zUQLiW2oG83F5RXijm7imDtbwnDruVJUfQmCVLCYZxTD8F2U",
  "key9": "5jB3JqYfSaWpZ5ik8pSxeChojZCq6QNF5m2AS5sLEJgjJvRQxcnoAt7Gp2duzbfzMvC5qYb1yXdKF6pLs42HyxYz",
  "key10": "567atLorCwPBbtgz7Us5WoqfCeERNeUcFMPi1QT2ZbB1Q71AuvSN4u2QDNtsv6TtCgMT6MgG7Uie9ejgn1LURWHV",
  "key11": "4Xp838qeegqk3GG5Vd1qv9CT7taLHW8oRkmVsopvYetJ49aUs4qM8sUPzti889REtbB5UgWLjMcMHHdmt7ZkmmCT",
  "key12": "5DMZKFyEF2RUhxFA3d1TaXn59E9PMVbYxLhKgLZvvZSBCnphN2r5jarNGQUMA2i54nzjdz2GVfBGP5i9RyvhdHcU",
  "key13": "3jgoqVr9VRfxB54LDMhY8R6mZkWzbeMoDQDkcB2uexCMBu3MJ3qPHkVKUFKufCQbZ7znfX78v9r6CP2U8BcAhYnn",
  "key14": "HcDNsbyinRAZgv8RJpzAhhTReZQ5uJ6ve2x1AANkZKx9krmYGcA2fEcgECGbJs2ScGErbzfbHYCeNKHgXmwzS68",
  "key15": "5BZXBZZEJiBcmXSwuTubFfsPxzX2DvKJhMEiLkVSQa6Fxu7sEqz6AJ3SCtXDXZWxhrpP7igF6DqF4igi263UhPYd",
  "key16": "5rf3ZVj5zzkTps62aLLgbbgw3bmX4wgUofKC9tHyz7cNFsy9q59vGMMV4ooCGyiiKYYXReGPmTTzhtmycpwkAvXA",
  "key17": "2vMqbgth6CX2Y79Zjxsgo6JNb3E6kv6qn2sMu1MGAyxq6phuYv2nwfwd7MecDq1EnvQEYvbEMcTQpRvYuSeaDhtb",
  "key18": "4R11LNYwtxibYJ9rUcDcEFUi549hbVjKCwDgNM4ueLD9EY83TfcSPGYnZ5yNnTdLH7DifHgaA37HAnuQ1HQw4khx",
  "key19": "2vSdj6zw1M9pMk1aP8edbbYkWsQsJY1GUvxRZTY7dTvou3q56nL3P5owxK6TWnMdi2br7Fbu91SbiwALVUXwfY1t",
  "key20": "2tA4vi51KDo5HoqqwZzTTSE4BGF8rxwhTiPGfXGKxsTBJCxrq8AxLS163c8t3fo5KNsbcVa9rMfcdPWrxsgK7nM7",
  "key21": "3THFQs9SZbmCuEuzFihbkJnJdsXy75KEpwRQq2m8ASpvUxJsrjcYxmP59qSESP9U4p8ieEf82vSnjFtkybp2kZj",
  "key22": "21d4DmqX8gSr1AJm5Pp4Q1UUWsPBiYZMt4SzWpcDnmD6iBtSBx7d7NFf7Ck5exMZJ4WZvh5aVu1KzRGgSfF2fqq9",
  "key23": "86L9y2feGGoupgpwTamHN6JWyDh46axrVVuYwb6Qa7p9vch1ieiUBRfHQDTNtcxwokzGVRfELA2ZEEG3oLoxYTV",
  "key24": "x9i9D6fHnZxtyvM5QxA9LiZVaJYZJx7dUAQvF7BJa9nRGwPsZtnodh3FpLhWqA6CKuUxaSczuMngCptuatVfFkk",
  "key25": "5wMp6igyv2eQXYnhwwTNLT1fLXiWhVG2MKDQR5NQjasncHECebfdBtM8qgMmUepwDK9kB4DsaRJvn1H2cDVPZgAC",
  "key26": "3K8UF9LodWFmYdYeMjNK62WyQXVXek112KKFWYAKh9PNRYVXALAJ4pBDsTfsUqjq51xm8KRTHgZiykZCLB8eMNE9"
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
