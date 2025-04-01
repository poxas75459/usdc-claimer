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
    "63PGwgJTbuxSXgXauZ7eHXD3EMJoA4cHCwEJDzsggVV3zE6ncVtZKgFyk54uNVj6Fxo7hGJrVWfPBQz2VzkRXGxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4cWokQBJpWcic45ctXGreikUBs3in4AX6ryoRTiqyLatUSEfnxrE6hEfpBTmnMxHHmy4ppbLCsnqGZ7Vch5iP4",
  "key1": "4RbCentG7u72ZTdximB5Xx2vP9Do7zpU9XvNG7Rt9QFmBPdk7nqAu11gFZkgbHgyR2Zas7dx8XoeAcFNhmgWX44h",
  "key2": "2zyyi2ysbqxrY7jSgaMdwoVPRGtT74gBLmQra5vjt3X1RBhYfQND5dzkEVf8mNVCuZt5aLWat71DDjWNoDm1QjEb",
  "key3": "3KrbLmPSoN5uT6JBsNzKFw69TpxtrWSTiatejDqE4WW9y7oRZVZH4GJQ7oU5s78DF6n762ZiEsy4NWMTQXn7iwjm",
  "key4": "5VBzxYx5b485UHQEvwynGF33d19bAhBvypFfiojXDMThLMxH8YFtXfgkqFs2UbacT5bGZJgqMZr1fZAp3mp8kTdm",
  "key5": "4G7LBsFSFFW5DZ7SKVd2RNuqkei7o1p8fmQRuo3NwKNN83qsBYLPX9Y8WKGKkfbtDKDtquydX9o4AgxirX1vGGte",
  "key6": "4mfn8qaUYbhyzqjiBbSJbEXaZj8jYHPixqAGAnpidCVcNQmSF9Q25id71JsiUDzqfvCJSVHvkF9Hrj8RfB8K4woZ",
  "key7": "5FyLNtwtusCEhMujPFqxhYuuRqhbwxc6PNEVjQhPxgxU3JpFqkg8HJevyH125Z3dcWvKPfWozM66muLntpWrxfsm",
  "key8": "4Pfjf7kzL4RSnCo1HfFceSnjtzw2w17iyuDmr6Ry4o7ftqF83HaJVyQJa9Grhm7HNYkdRcVDETn4wKGeThFKz2zL",
  "key9": "3YDdRzhtexQkdNPvRVW5PMg4BpLRAmQ4TkA5oQVXpDe9ch2eKTQr96xdjuHCuq8fmVFjqYJGm2iGJuBiZh1v2ckS",
  "key10": "3Sf7Ld6qGMmdDddP3CujERnv5L9dJVekpzT5HTwN7SoTLACVc9QZheGJnYskmRNcqPfgYGKTyw1MJbggSWtfuUSz",
  "key11": "5sTuqh2KPxVkgrN6QBFkz717WzRkqBv99GoKjQorq7WhmALQ3W81Ryj2HFuvCuiBaRvdxnkyYczc2CseLkebUdC3",
  "key12": "2Rjz7G8EcZnco6c1Z4eLyY7kZV3LQux6cnQQDkLmtRroJGRkHoNxo8iKEsAS5uRHHn2hG9eVKK4Dj99QLKogy1Bb",
  "key13": "2JUtVRMGHk1dyr8a6C8nAG9RSn4P6ZEuy6gk6poXruNbGT8eZ8SYd3HFKditF1ccCg7HM3KboFuRYBTP6EyF8xJk",
  "key14": "PJ2N8PR5QFhZ5rRneLDRbjonDbunAeur1wEvY2kPcDdvu8mgP1cTjusoHSstJHMftC4tPjVqrQAKovmYP65d6Dm",
  "key15": "4CCxZkRSoHWpaFEkJBHPQjG6QicsDY8F3EmCLMccuFnUvPWAfifaL4TkopcKEz7Kwdkes5n9j7MwRNz3As1CCWWV",
  "key16": "4d8JmLjwbtfRzGtLWG7VCmn8Q7mFFd5zR5hwBJBrorWXSD5Y2gNRpf13nwEuM4yySLZR4FtXAhry5SK1uvmdbuZR",
  "key17": "8f4kX66X4XRiozDVadgXF323UAcekuysEe3XUTrG1HyukQeM52r8LiTaKscgaWhvex9QHkAExZWcmUaoy1BjL9s",
  "key18": "5xdJUGR3zWPTbUUEm58HVoZNGeXURAt6wQ9yroU1h6R4yY7pGJVPFJ6YGQqwbgbHeK5fJpWC8TxF5nH6ANDwQ9Zb",
  "key19": "39Mp3eTGZ7ZF9pFbur5RA58HvhxfHqjVuchGL3qzmWiU3pbYYvjhHVvHpc3Q9pAo6pceRycsB7ZuSBrKjrmSQZtg",
  "key20": "2QCyzCNMjgDE99wReP7J4voVS8PCj2ZVKjJetgrGfZ6BB174zMQJ3kDzoozrqLa9EfmbL4AMeYYBQssN8daA1zp9",
  "key21": "53xwWSYbXYkzhBLX1faoPaMtxJSfE4zk1kFYC2c7sdXA53qERsDxGWCz7MZszvKZqNfxHRmgosQWVbFTZnE5Q6AF",
  "key22": "4WN6pQGJhCGHWyY1tPjbVUxnFtSRBNAB43iLhkuSUufn66pgP2Mcd9S2a2fVDPto1hfn2wtgmKmE3wv7dUzQeNRf",
  "key23": "3P78mRpAobdQ5rjp9HVhwrQ69UAnmHWkU3ZPJg16Vxo3ZWYvRitG16V4BUwuJjgqkRYFn5QJUnPyq5LhUKZuSkTE",
  "key24": "3tDtoiYxMU7biRkQsrJfbkoZ8xbQgm3FsJcZM1KGW5jbT6w51ZrrxgYwBEhbMzjcqkgmJXaURWtCXMmYY1bWk99P",
  "key25": "exZ9b1qEVrvg83JaCrnS469AfzWrZjgHHX4JRx2uUyRoayeqF2dBk1BBc8qeZuc6uS8oTnpBHoniVRBP9no2hUW",
  "key26": "SgGexgJVSukzXbp7FZPdUv9Kc8y7YJGbi9Q1mW5X7XyiQSge5F4ERTgBo7ZAAsZ4yxR6m1iUyXqvXXBu4Uh1uWe"
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
