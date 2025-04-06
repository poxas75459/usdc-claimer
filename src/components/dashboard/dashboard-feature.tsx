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
    "dky27XHaYqVP12gMry4uV2YE9xGLqNnVgpS3wH6i2irxMKugR3naXp55sNzWSJBAJxbCuQ8dSdsw6YkzyoCpwFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gj7NNU1Xp61nWNd5tYFm6SYq1ZYB7dsSjcjH6B2bfE4unUQ66VkU8ZTFhXo4TgpbG6WJrvLXsTkqayDoCF7QGBF",
  "key1": "4BzpKDRP1PvTD6nvxXTNjyufopwWwt3522dn728uo2Zb7xBUpT24sDMhZ9Y25rC9iCyTnjZc2jzcTQwebDqvDNJp",
  "key2": "3B1PHwXwTLeRZDMU3KfMuhNyH9oa4d1eMHSw1Sk5XKwFJBz6foh9xAziCnTJenJ7zA6iaL6uKr8hScQK4g4RVi7u",
  "key3": "61UnmLHZ7j48N9xksvvDvPUvetyJGCjRiPxHc1A4HLvKfk1TtEEhgGfkJZ6i41vFmFhNjx4fZ332VavknjWvkj8U",
  "key4": "2MJUbJUYEvAFsaXPxeNZeFib2p7DyDS4wfn5YprGyuVZQ2pAia2BtpDhZUarrmykSyfsQtTBaG7y1QzcYUfG8Ahz",
  "key5": "2krfKpjkybXGJuXvxgVz84Hv5DPTxsGq5ZNt2cMvxV4qq5on1eXbrTkGNWkNgVFuDcpycG7utPytVwjV9FvN5i5K",
  "key6": "fQrgvf2XQAnPCBiGgbPqDXzrkAccwsU78GXbpWr7RDfrZjF1yrAcYbFP4LZHbcBS2m1tSRJ7pjvJYewNRWXM5LG",
  "key7": "47c7ecqzbX3MXvXkj2vAUpYHHjkq6xgYefcPu7fjs9j4krPA3YxKhmidLBwM9bgxUz4cB52N4F5aZyLuByrmXmCH",
  "key8": "24AUpoVxiVcAD56mTqUw1ZvvNRDuaumizWLd44Q3RQmqWryzZ4KKzs3KxdiyXGGmtvRFdYjQpTpBLqUJbrA9mchm",
  "key9": "e6YhCRDSe8RJdhEzfESLuGkL3F7QJb7ejDEWTUqhfNAKwpFP71iYsxnxGeanDUqmKJ9PciYZzVzCYVK53PVhaHP",
  "key10": "5F3cM1pyBtKHfWHcWkZoAxdkPDPiP5kkc4Wn29n8xc67UDM2uhS1wccLh5h128aALvBbimkXxkunJi5xffoboQPx",
  "key11": "NED5RD4Y4dYz2tteDoK1gkBGWrbhugzGK4FPiHi4rFAgayKj6diu2YLMtNm6J7uxbPf4RGGDMA8eD7vTM7j1idt",
  "key12": "3Dbt5f8VcfPmphY4aiPgzSbhz5CSv7xbe5cbGTPHXgeguQtp3h7qwcx2Yqv9Z5akeiTT4tKLrHua5CekqugHYkyg",
  "key13": "3naref2PkDPoThhVKMEpDaYyuy66K42BbB2bGTs6pQnkkRisM8pLhe5Z9jGCy6NUmuEHFtiwHNVPf4wPkXjW2zQ7",
  "key14": "5eX8HGvxsjwQwZGghWBMAf9tjjgSNyyyG34xwfVxL17cLt4qQWZwKkZ3C3GanQLrkXjtFmz2fGRpd6FBdS4LrJu8",
  "key15": "59UFjtJh4n5VVAC8CeVAhX5TCGSuK8pX8GmpJiQGYx1tQ8wTqRSLmn7c3nXfeqMAmu44xbojgUPvL1cNvvaqcZtY",
  "key16": "2ofytLkHTpyguFpMhCVpPYCB7Y5d6H3HDn2QrsekfPPkD4AeazHJ1RKer7NiTHj4iA5wVpS3ve2SiC46aMcdZqiJ",
  "key17": "23f68NRKg2231doAogeXywZzhw2MZzPSQa9QpZo9LBDGFGjnhdBf5nYQnX4C3DAertFDz4VGvuuaGwmypMgXKgfZ",
  "key18": "3ptHR6w6ybPBPKhbzHtzXrE3qJ9dQ3uA2HtGav7ya3eaptLMPSMQWZLrGF6cAaLEorWCprtfwaxBnqj4ND5V2LF5",
  "key19": "28QNGK4jCzJhm13wt7wzN3GbW9TpyGQnCHECC3sVSkiLYkkYBoZwNBAi6w9HNKWGt6mJd1tqmDKn2DZXaDJkYgdD",
  "key20": "3mxMY6q7mZR6QhRehtYamjA3ykQGr43z8U7m6wRoScpL9SQT61oxUBeuzqP1kEfCgBjioQTbJ9e9giNtJjR2DMJ5",
  "key21": "5EdF9pcg47EuCXfBZELawSadntcoKvm7ck5RLfJVaAEJMBTaGPfJ6PJHsawJHNycBUtRDz9Ra3Qa5Y5MQny4sA4X",
  "key22": "238szvoVMXNDWxfeChU9hnwkUNdVSyqP7QTh6T62ASf8msaWjFRSTPxJRe29yUd7XoaxZi4snCa8tCSMdhoiuKDp",
  "key23": "5W6TyGVkdV8vEcY2b96zkTP2YSNyFkdENi5DLQeTfDh3vsXKaoC79dFybUkwxE8B4K6YJwReEqYui8WXpkWvZebQ",
  "key24": "2kVmAdFBAqoY58hcVdNnrAPCVNHNpuA35pa8PbBPAMkp4VWozaQ7Y4Zft6RLS5PqAsckoTqFfseU5rJUkY9ua91i"
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
