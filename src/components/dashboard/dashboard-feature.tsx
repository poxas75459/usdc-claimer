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
    "5EfetDSgEJrAXikxR4JTpvBDPG3yb1X5TXDJDht9Qj3KiW2KUtKxVxENNu3n3m3tDL8oM5aCtaT2QYQe7r77c6LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZZs4QBhg34umVqq7aEiNyCifnu1FhvRRjkXg1mYx2r9QMZXAqYLCoc618aQUWdroVrWY4tMC6yTZG722E3XUgR",
  "key1": "oLf5WpdmuVfouJdcmHxQzQxdYh3qoZPmdECrVqGjeSSQMa1Pv8HN8h36goxRVjGGd9FKbrGjRBU1NiEpkzLwTEf",
  "key2": "3wRCLY1HJjV8oBiN2XhEDuGwi46M1niLHMrthCK92FQ4tcBwWbdKfvuXURDTxLgWJEBMVhgbR2AoAZCRYBPj4F5y",
  "key3": "614wemQfMcH7ECNGL1UpE7gvUCuAnZX9mmHtFP1VjUZJRbb5KBYWjZdz44dfLz7a9YwW44hxGNQoUofakESf9ia6",
  "key4": "4MPyQQiL83uV1fSouYgkFMt5XtXZ8yciFfWKxxRKJYuU5axpDtkFVpVBYT7PdyBc43NHFj8Q4A3TyppBuHKNC1o9",
  "key5": "27EbMs2XQ4J5CfAUGhpwkSgfWcZq4UbXxUdyLjjbkpMgmdkq7HHCp3vTBZ8wc5BB5ettBqdotTZnnDwJJ3dJWqXh",
  "key6": "3TPJZd2PUxrhg6ZCTMXPCt8NrgPzYRxEQEt7PQrwY4ACGGWGNs24NhE83R5ZtrihUWzAipuHgXPcqP6qmh1WrCmD",
  "key7": "5RvjzbfZLaFNbRfQKADR71PAKPAcPTXrySJC5rVyixpVK2nfSTM6LwyVggGP6VvFGTvoMu9d366fKWifxZjgpiP8",
  "key8": "33e7wG9NqP6K41ztter5iShmdPRBcnF4eYLWstSqjevJsCTatuvTnfXqp11rJbozUi2NvimTUSafrTHn8dPRTBLD",
  "key9": "4ZCAEFdF5KYgpoAhutkyx44azzYn9Leyf3PWwsDmHUmo3ScG4pJXKhBwwKi2LHQejpRz7Vm7ba3sh4G44ei2Rm9F",
  "key10": "3bQoCWCdVziqU9is3dF1Ab9a8fht6EcCiNqg8a994bhX4F1YZaXoT4LeNR6ah22Bf1FKkfWoj8yMgRZgQhbYoezb",
  "key11": "67EXGZyZFihMnYLJBbxMtJWZCiWm3mVYPqWVarcGdSnWtEy6UdLNA7bEXxrnaTtCYUgtbGMnneQVtKtStusoL4BM",
  "key12": "3JG8RknNJBfXSAgaUVJzMUfhbQszbUsGX21P4K8SS86hx8RsmNrDsfvCDkvxzkqsjxp2hwUsfBiUgy9rbYbTeiEK",
  "key13": "4yohHrdFFaFSdWTBE8gsXGfTmqM9yjjwFw9iDevFr6j6UcZPtB7DTWttadrHhRz4StSZbW8oHeogQfAPa4cT4hbf",
  "key14": "28ounbgZs2Ecqnt55rn7jK9KfW9qDmg5SovzTjUFwViCpJTrZBmoQcAv4Ri3PZetupS1MHBJeypzPHXztQ8ZTjk5",
  "key15": "5odtGh9AzBSmzLjmkptG26sqrp8c1y14t29SDWcjU4mwpiPPSUK56L7A16ss9wKP3df319rGLJr8BmCoc9L37Qfa",
  "key16": "2qwCHcktLZRma63EgShYCofEm18zYEe4xsr419FsGkmzjTg9nXHbvHF5FPsT7Az5o2Yd72QXjf2EvTdKNoCt4B6o",
  "key17": "4QKvH4RzeY2c7asmCWtZ7D8pvYC6ThuEwHHVyhns9XZeVCQ8vxM4wdn1NKp11PfLWe8RwC4qHKDEdWYA7WNZr5Jq",
  "key18": "5DzyUoqVyjRWCtenCBzzpax8apiuowwMysSvrdwMey6Q85Bnv1THWdSatNZ89ijjSMsRjBBZhfEwASzvuv86B8Ur",
  "key19": "4sjECDQuMDu6BwWHtdt9a8fG1ZHNMwnVE4MzbvCK4CEMDuTcXhb86oMdE4kSStgea5DMT1JWAcE4mCN1mEZzisvm",
  "key20": "2Yufmg4oXEUvmGsFtcRDg8t7AKG3r65vU8DEHZ3o2Vw7nduDHnDR8JstK8e3v3167k86HmvxhYAaURTuvkJAZoUe",
  "key21": "A4sKzJRLZuFSMSUA1Lk6yai875ugmsRdvauh8JdfTCiFug9m9vaFpZX8qyskb7DBGaDHne26D2HLZNekWqGJubN",
  "key22": "3jGpC8ebYwSgouUWRJkzTArNYKFGsdoZ1tGTPiCfcaAAT1v4Yg91egUbQWPfJR85Njk4a5fH5mBoWwdqEFjANff9",
  "key23": "3nqji41RcF1ox3ehKzFHvFmPp5wc3AwwjijdmHNcUEaXRvNroUBpm2NP8DNSdiKi5KVfSuC78ej5ssvQ3rRTJ5aB",
  "key24": "4YS52oZABndEHp5aRSvQ2w5UhCDt4mJdgKNVMH3BSspMEwa4ZQypvHVKdP6tx7cd2NveRQQYWJDpXjrBb2ZXjW5z",
  "key25": "48qBQbZsNeFByMYpzpjhQ7sU3Nx6oy3wGXtJbmwTtGvLthNvhak35m4hHp21RN6YQ7mHkgqEneUkPxbNCpJtcdnP",
  "key26": "4f7M1ybENAqKgnxgBEXia73Xg8PGVyVwGamuyjLtTn2eSTMmgZSJrfMNdmcrsXkg8M4Bjnio6ZRUZVBvNJmyufAH",
  "key27": "2QcnW78dEE19ybpdzHbc2LwCmnffzerjXAwqQ47XvsDnmQepdoTZSxeNpGVtkFxHZjfdNxgDyWVc6nEUG2m5ySpu",
  "key28": "5Jdf2LYMbQsibS9szZTVkRK3R3gAqt9Cb4LEbjjox4VBFW1DVNTRQi2o4bBLnpEZiJh47WES4p3j6nYD4uyUYLTr",
  "key29": "2iaEG6pWQ9U81MMd77EMGxUf43Mf1ELMdakBknpf4WCJnfcVZv5RwtocbT4ExKRRX4GDt4LkznUggBqk4qqR9Xgx",
  "key30": "3dnaDTcQLugHJiujTwNFTx77aa4Xd8jtiBW7Dxb1cqAjsQjjWuHBYoK6vRXiR5BTh21rv2BDS4nrtQiS1n4tAKFH",
  "key31": "5bw1gqszNmx5KrXvmJV4roZbwoSq1Biv4L7YkDhAeeg47UaVJqXf9reU5ErPnJsm5AJjcY9BV1cjdFzFKzoCrhpf",
  "key32": "3SDBy41j9A7B7RSuXvFwEyh96PtA9UodWMoo5TGxwaibNSzbddPmfhDgSQAAk6fZSBwEjgSm5REmhC4nGoArnLyf",
  "key33": "4oyrxvLWmKahy9eTNKMgc6gCRTSRd1XpriT9t9oP44CoWcbn9raRN7bzX2HqDEjRB14u8hByjtAw32VTh4RxcySW",
  "key34": "8Nq3xDiiMqeGAwwDeorRMaScENDN4LrzwuH3bmc6w6WZ7ohb1Wb2igG6uq8Fb4XU1P8vxP3jVrqD7osxNo7grTX"
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
