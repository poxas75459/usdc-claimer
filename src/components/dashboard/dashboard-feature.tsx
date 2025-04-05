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
    "2a4s1EquJmgacXLk1PU9MKjXCZ8sTRgnYEGFiU8Vw26tuai7RG3HqXAXLAfspkUcEFx4PK6j8YLM2mEUu4r7Nu5X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpgbEGhUccQ3NH1AEbpuZLfdXHp8wVLxdUu4ARrp6iuz1w1wEYNQDz6Uaz8uQTdCgNsyGujcXgYfQdKZ8nkvEsx",
  "key1": "2JLkaCEqw1GSfXJb7S94rAuDSLoK5SbiHCXmSj8Gmz3JkDYdNhHh98UvaBbGnnfq2rMBoBx5bEu5oQkHPd2Cy2Zz",
  "key2": "5vPZHEaokJDnsrj5teVRK545k3mAZBjZncHuzfoBRgY4RB69gUmdCzPHcQ5PA7ky8vQDy8DW2ZYjeDXF5FJFUu6",
  "key3": "5sU16qmznnt9L3dwxpP7MQy47qhKoKwKpDkAu8tYVoEtxY2fyrwwCG76RrdCyHBNZwnwFdgwxh9S9wGqsBwePrKH",
  "key4": "5DzHpJNcNMEv9Zdy5QtzrW2QbivpfUyFH5yL1odC1TneDCMDhFarzz32RrGmw3NfLAXCuYVX5E2pYdnXj8Mz9Mg2",
  "key5": "64aVpPzWPCyX1z87iT2NEZhAN2GSPKnjPQhjSqwpDoS2WWfcFV5pDX8LSQREAUMhSQLsj9XHLWAhSM1GdjscQHqj",
  "key6": "2CAu6t24atkAb9EHN4gqTS5nc6bATzsPWjhJCN2Wv1RTceWkvqcY3ibkDu3Amy2icFU3YnMN4U48wZ7zRbBXdUoj",
  "key7": "BiKqSDk3xGV9vgaktuWSGbRx9SVojYoc9Hxfy1hB2BKCV3cKUdHYwuB38QMBdZthb2MsNRswDxaTbpVugaCeEjC",
  "key8": "54x3oXpSc3ENZsEZUrVKakjmDRcdLwZQfBNZQfBXqoMPRW5en9dD89xVMLP1HEN9pNSRFmofGRxJVYFvLttk43ZZ",
  "key9": "2yv9vYk4Jw2y3FMHojmeLuJkhVpnGz3oz6a3J45bytBzChL4WwWh4eYMeYNNimfqM3Z7CwVWrHvuvFL25h9TrbY1",
  "key10": "BJ4DaJvvmaMXiAKjQnzNXjn9tjtr2zdYqknwD21biNtRMe5BCvNxCsYVYaxAhh924nTVkttWzxjw5wYKqYpgu53",
  "key11": "3peh6NfqeDci26fRBS8NNyL3pi9ngfBW91aPFcyGRH2cewrsmZLAPpWaFkQSeXp9ZxrnkADWqp7NWC12c52j83nK",
  "key12": "2UM3fWpp8rjaRJYJD5sZbRt2oVADegpHM7eLegwRwm3os7p8CHFK5VQYxsKkZo2vGS8xyjrGQMLGGQvgsytdwQCE",
  "key13": "5j3sckintJe9P5pANPrJJY9EZ1iuXgw8igg1UJgRdrX3SFojTsu85KDfdHCXK3pTwcKvs1itvUPZmJW4Rzdg9qde",
  "key14": "qELaUFj984CPgAonHzFfbpZ2Uz2zYMCk5akdUQtuv52VjX8o3gvUzAGceShjTP6StQAwd4t2VrkLXvS6XuAZdWu",
  "key15": "4ZQgRBkC5CYTwEsGpeUWNatUH6v4yTGvNWvJsaXPd6Lb9HWDHGZhWPsvphcZamUhWyZZhfykghV7uqU2Y5F9Xo51",
  "key16": "2ESTBQjYnptt3WVKtL5GEfUYAzquyun3pqu8J3wAN84xTQrx36RjxDzAsPhyQVZGhQzuLDuhbVb2BSQiZNDWJfSJ",
  "key17": "4B6wf9q2jVz7hzAxci7Kic2ZX2jbjwuXBdvQEJTrwu4dUx31QAq4soZ2MxmTqhGcGd3p6nMFYw1J391gPePDXib9",
  "key18": "gbPw6b4TeavkcCcEWoSYoHpqSHbFhXfMqLXai8h2XcNSEFqqTT4NFtdheRFba8GLXXV86abCKHz4E8PQp9SKshY",
  "key19": "DT8z3gaEofFu6WJRK9NA62fv4eDSBgUB1LBDHZqccVeYE95fgeQT3cvpwEhSYRAU8ocUCrnXbEciDMQdMELpxUM",
  "key20": "4tbyr939TqnjrWuMB8keT1SUsY1wv6YuoZZnV9LvjtvKXD8c3j7FCZuZp4zkPoyDJqqGJm68mNzrSaXZdK8M8BNM",
  "key21": "3BjaovpYLAP8cocGUgoUYMip5zjWM8wWxZZCBscMEGUu5yEcnQFPZh5nPQrNmwJFMdEyK2JrdDeBcUUAF7TaDXwc",
  "key22": "4pG81FG94ruEzA88zw7tPYv81N2W9EjmvHDNTHwmAJetbRmJpq2xgfghuFFy4xHkYyhi9oD81KnkdGxpo5xfJSqZ",
  "key23": "3UqJHfuXhKbcxQN1mVgE1wUQwXynDT7u9bDn3GwBcmJ3zzD8xm9HdkVmJBvxXiRVraTurPmzyA9suX6X32XJTqt1",
  "key24": "26NFC3rjpv4aMfhrwwv5WjWcYj9A1uR92LtQS8xcM2KznjmkDRsqHCWkFTb2FYN111f2vkpg6bGvPm1XgBnHVuX4",
  "key25": "RWbUGYYVc4BhE1XwAm92MS2ooruksUt8frC3CsvzQukNac7CfaUiKaP11esRSqbhc6efqaqdSUMJ1Bh6kJXwz4R",
  "key26": "LWgvbhCtdqNTgCmJPBzumwDcoLE97UE8Yi7a9vGJxH9ZVeNrkYpUrwwyGD3fEsYNRvQ3XwfeUSDBE49qmoeyoqb",
  "key27": "418uLaU9bwxxtFVG3Lxamc6uYqu2YeHC9LsuPcQhd34BMt1b1ihf7bGjaRPRr2xq1mbTeYpJmwQ8hgKQsZSK3iZe",
  "key28": "2sG1S4PUY3AkGqaBqdyecME4qy3PerzUDpxMCW718KJhvjnr7uuvDxDDHt8PDwbWon377db9j5Lme3HJQXgvkuZ5",
  "key29": "PJZXuGcX8Kb73DQV8qaQGheDiVasSe4jRdeUyK1776rCG2VDw6UM3nWKknYE3eAoLnXq3rKqUxSmgMjpfWo4wz3",
  "key30": "64AM8zctNgQ1wawk5QWJpveU2E1SEQgZeadMtxegyU647rr7EMqwF6rFjHu6rqDwAVUqHVdEaM7w1dfrdHhKV5rk",
  "key31": "5iXHHZtohWn2FjeacAZfVUhbwfUjHMybUEwAGzhgxbBf5E7yX6TjNvaW7iFxmBY1647taKaw3YZVtN1q1E4GDKW8",
  "key32": "4USWKx6eZpbj7GdZW1orCnqQSLbQJ2fcSHqTmXxrZvSCj7Um1CMuepM87ypf5JsZmE3dGXVdhVcnvLg51piZcgJB",
  "key33": "4yMSKdypp2Aq1etymNGM8kbuptuG1ppy3Sgr3i4KaMjKNSYQNAazhpC6h2V6tiaMbccbphVHwakxzT7UoxDDewNJ",
  "key34": "LDVezJ4PYXnBJMk8PAGMxXbSddFbBk3qiwaLKQHQ18fpJZ8okXBWMrLJDhWYVkLw6TSEZmU81wrofuihvaSLBm4",
  "key35": "2rjuFs6Ni3CweHMbP9UNjXJKPqio2PVWhHdLwWrqGoHaJDm76D7cHf6ivh8uwbK74ZcVdAMM8V7rim3x4KWu3dLA",
  "key36": "4npuWy5HwWZWhDohqCDy6YiEngbxbC2Kj96Mxk1C8rq8mGWasAXzhBQ7LMvFssDwxNCHfR3y8n29NKpFrFFFYFQw",
  "key37": "3AHMZs8m1AmPcBwnTY1rMrkfSCJ1FzjdXorTscJMbVvoEctSArrunvKFGqiPgoHAwFWQKfFJ1kV25vaD4oWU26Zb",
  "key38": "52yLEKV5vXjfE1TeRQtdq7gfzJA2xbEhribrkwnu2P7qdtjU88R8dABNcCFXUo2fq3C48uzuV2Hg6tuMCLq8c1hz"
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
