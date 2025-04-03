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
    "5RaFAWMxz9YZjJpCAnBbn8G8HfAFb9JFUmtDboMFBeWEiragP6JgYuBm6tZ6gub9bDPCiaxBm3jFSPXMQDj4p3zX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kFy92PxRWen5CQ8qkvtAtpct6rhPGMobNTnaMeQbSXVpKqmjVZH631gvwUErwTesGohdrHJCK9fP1wGmjL9YPXD",
  "key1": "5yVDKj4dS9yT83LTuuBxcKt85gwcsL4PtzZjw2fWSjVNMYfXwyKoEi4i5WbPyqfMvBA6qWRZr2y4dTyQMMfbRXiW",
  "key2": "4g8iHccy4nPMNhbubwcFLamdDCfXUKaKFcDFgqWAfcmPGn3JHTbujQYtixWT2xvWCMNZHMsVrFqm2PzQUVDrQijC",
  "key3": "2Mp4c1iLsm65vULD3GDx3XVMHnqkDw5YwDUweMraPZoRsni8HMV9M7J9jCxowB8Z2sKxpYoY34KE8A5mU9kmXaoa",
  "key4": "5rWNtHxxnrpXg3YraHivTV5vGquSgZqYtnona5XX8EC8LVHHrFKHbbYJnAc7LtUsPbjqtHYwbu8LqLEviFzfXYCB",
  "key5": "5Nsx8omQgeP1CsRaHsgfY1T9d8hTQmJHZg9Lgmu9FnHWhSJoGJZw2w1UDizw1M84rHVhHjAGSNyZ3QZCHGLvshWe",
  "key6": "2dvzMStBmsQzYs7a53YhDphwaRdXFAiQvnpmqLXnMvCBtatAvJvb1y31Avfmp8NEeacNGShpy4V6g6iq2ibGzzC7",
  "key7": "3BjYkUAh4xWRbZpTWQpUmXc4HgZk4wn2AgTWuBNcbaavbVJrTzcSXhNigrEtnGTcfiFHj47Rw8u8QSu8458a5hzm",
  "key8": "54y4b3XWkXuDrwqyE8JnDeF5E48UC7YbxH2oxdPmt4wSTWroFMLvuVHLWh365zCp8GUL8KBC8FnjdqqiVNXnigt5",
  "key9": "2NbhkwxYEuu8Vd8gh5NamtxSiRwWJhr7YXQaAzZB6N5SUbvpLGyR42C8KgeieRStfid5HqtM5W9bNrRrZbJMrAPK",
  "key10": "59DHgWLkzZ8eR6QrS5SdNRKe77WvHP3jiGuQK4oaWPLbTVg7rhUMRKAqaKV2rKp2RQjxGGqpSZwYaWmADpKQkNdr",
  "key11": "66ctg9BigePS8Yk6SpFaLbsJraqGesS6guKfQYCw3tDpxPL1o9cGxtBz5J6CFC2x88C9y4mibXMtvHHHLrVFYPNN",
  "key12": "5gVk4bhFFduVes71S5k7AW2AY152ezYFogkjNxonryRVdzXT5kc7K7Sgsn49WHbaBE84W2Tp4yBA3CZRpbPgN1yR",
  "key13": "3sEB7wsetiUF5fVZkBkqUwRe4ihrLBai9D6zQ2YxXRjhscfoVgFf57pL9GDLtbU4C9HfMiwDFprm9R9yD3RCJok",
  "key14": "8ScoLniLcJTpaTsvLEYoNsHG1oMcDWRWLARNnEJPescudZLEB2opztN6G3F1RzY2heq2EAPKLTSm6nP9GsekBMz",
  "key15": "2SezAEzXPZiuqort6n7KpAWcQCKVFg7MCdpsRTGuaiPjfPirVAe9krvVWNdx2DX3NC7tgwfMzXmjS5ALMzx8jfUU",
  "key16": "5a9qHM6admzx8LwvRyPD8oiJdu36PL6hfKtXprXbuMT3nuQLL1PzpE9XCEv5rrT9YRswGn2FyBfjFghBtwvYkzG5",
  "key17": "2d5u7FUz4RFsBWBfeGXEUe1TMc5ckxZGkYyAnyA9Vn7wrWURgKVSqgt7L5R9RSeVtL43xCXaxL4ZPXsJGB4X1pDu",
  "key18": "m5rSBr2vxvyBecpMoKK5hcsQMsRM1j93umvHZCTEveGqbnqh8fcZN35nG2JVc7LNU5tTQbg1QGdDZ1WZbV88DbC",
  "key19": "3DQf5jTXGiRKXkU6RfsUNrdKRStZfiTY1WhxuAgL8D2XsdZ2EzRYMfLjk9cvUesJp1AwyrkvBxMqueEVrTfBVkUq",
  "key20": "29oqh4T4kdi8ZsS5wKjWZMKvEqZ2RZmTMXEEcDwiwB67Rgftk6hAHpJPJvjRKFRPHtDbu9RorFpdFSxFEVWfk5dF",
  "key21": "2QLhVJwV67RwEdxLc2gg1Wjf9K2cKULFjLUJPhFPKzyi5CK9A3ooRgAyFj6gGSyEfzZuJoGKRJJPP5LduYjgnKRB",
  "key22": "toGqCMSUsCoo3t6VxTK9GzHKoWFzRr88xswCfTEqpM7c3RQJTmzMXoyFDL6cy67CJ5wN5FJmWanW6ZQnfRWeVx2",
  "key23": "5hsns1UXaHN6jpx4qPqitgdzDQtpsqbjshnYDWJFhLAGHJMszJEor2z3iKaP2tZgJs5XjYmnLXfPPK3kobteAYQH",
  "key24": "4LKs5oHyq8LKP2517jcBu1bh81XukKSa96m8dDXnYbtdWn3tVWGnS1WfctGBcmgQjbeQr6Z5X3LvZxPAeiVjdXnJ",
  "key25": "42AJkyHrdMV6BXCSi4j84Yvgrp3oE7sLvFwePGHm8H3oE2xXn1tsTyHeYRoj1JpqM6NeoEY5R3J4mYfey9rWUJp2"
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
