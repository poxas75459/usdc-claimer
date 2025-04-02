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
    "2F8zBYy8Tm9FkVCNpo75ffitjq3hTbZsuNcLqqTp1c7RiZA2VCeFaqUYQysuYaivAArjdxEPYJuFDHNzdKu8hPvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BxK15H31MmJCgCCviCAA34aYwTPFrSDGvoBHqxjmtYsngkC6tpRemdfZvn4sTpa7T1NY9CNMWUAjMRANinP3BLS",
  "key1": "3MN6FQx2QQDa5bfxj6oJZbYiNSrXNhco2eEfVv9LP58gL4aAudTqmTAbubHWpi4QJNcZhW2VHuPicTFZvGm8M9vK",
  "key2": "46H6Fv6drzNeWxqEeeMmYyH5LNtRwK1YhWEcsYys356MirsPRfkqbTRuA3DBqXCrdF8YL7RzzMhWew5RkERS4uRs",
  "key3": "4Gazum1hxCuxVR9Uh9eyzUnmheWfgvNT6j7KGx4thGZKRf86dLXuVv8rXV73xrz9K3xbcvn4o5d9FY82MwGAqoyx",
  "key4": "4yrwZKZ1gN8rLADj5s6uAqGZpBC7xsA9dTkUj4TxuHycBjd4FSxzeXsut9Ps1U5yNJhw8mXUhV5GLDtKMsxdDV3T",
  "key5": "5rPvZTczy7kan6YqdgZ78vJubtCURxhirUbPomnz9ucxmHfSomQ3e75s3a2MGMcUsShUG9WRGqrJ4XSfh4MCCJbc",
  "key6": "tmHajNdWPsUvhibRpjMqVVhahWSNBuSWb7DFGXznxW3ge2e8MnaAsbv6BD4A5ykrqaVYyAzzETDgx9wc2tVDzo6",
  "key7": "2qMg1TraqHAFoWYQWWjaduk7ZnuXcjANyPVKp4MEkE3EBtZ6H2xkhx8hsj7RM2v2bz2aKvhc5tsAuNGUJrQ4z7VF",
  "key8": "p8kNaRgj9bZziwHwnwPKRqbZwynyVz6qXKKxHQ3wnuNnd4hbb424Vc2ESBVMj8m5FUbKbYfh7FqU1nhw7bhHPXx",
  "key9": "62j1mo4szLbzN6PGUhuxKbxA4J3Um1XB67CHjGGhjjsAZGPk2zAHNeb1eMHutbAAqD6JmxyftMPpTTg89m3xZq6b",
  "key10": "VoVkz1Wvos48StrVRpquhkr8yiVoxcYxMFTvHTFMExyR3rXcDSbHxbykoQLMvKf6UMhGDjySGGGqqxfxS838wUM",
  "key11": "2kka9pNcWsiwb2v5kuQegKi63Shiq61QcQ67EcX1mBAq4gP1pNY5VyeESQLB5jmxkjYRPvZY5rirajaAhcsESbym",
  "key12": "3UjM8eALiBF6UBah344U9AAFhUrUm2Rb1hGEUPeZ5YPuy96H825drK7PTLSww1JiJUoACjLPdaA3RQCHctwjgUdk",
  "key13": "31Y6yLpswv72h6apJFEfrfLZMnESySK78ovVAT6puzDPAhC1X6R1SVd1Dc4Jy4eSth8FwC1kjr7uudZk4MpcihEh",
  "key14": "2qfaKNp8W6yZGXkobkuVusyuz3iiB8UvGXTJVvR5tTNpvv9f3TAVaKjQjWq2MD5JJsF12JcjgosmxCkwRrcj5GPJ",
  "key15": "2TLzMnpDQ6XeFJGiib3is2JhryUvB1UtvxepAdmXHvQQy7zqU4EYncLERFA2dysJAXBCi2ycuAFkuDjMxxBrGnKw",
  "key16": "62y3zughewjmKHusnLtniKungAEhuhEjCGgtQJhSr89pxbzqjaXqoN5J2MbpzJqyb4hx1KPvxo7YsrE33moSRoT",
  "key17": "3VLSFAL8AwdSa5EF7MS328zKhbDwnRG12QsQudvwpjc4te3qXvBcFA7GS3uJmvXHWvfLAHNCiP9frAYNQNRy7grL",
  "key18": "4JvmAqvgLJy6deLEjdJ4kE49yJGfQsh3iMtnF8ocZbhVv8Vp4ZChcUxyydyAXqNvhaT6JAnBPxw7u2iNZLoKKyUk",
  "key19": "5h9ggN3PPRyqyRbKwHGEDGM1hWEem3C43h8jMdi5C4QHspoB7TAm8A9WSpGcW1ebo8hLeyxJvzp6zQm8AWPS8u6G",
  "key20": "h9QgEBC1vtrCh3JTR6pbxkoW81WXmUC229oTBcTWkztkPoXkS1kd7L2YKvhDfVZgFBKgsdBtuKuRoJQ3PaW9LwK",
  "key21": "kL6nkmMsSuV8qXXtFXmmAe2pyVWrpxRY2NMJHgn9yKjhKMoShtK7LN7wKhNrPY1U6PYHRCYAtQ1JMs8mxKosFdE",
  "key22": "3X9LThcWuBg5wZeVgVRw2WWxnDj5D9dsCSyJHVxwRwwbcf5jhYpawNabGRfC7P3dMzNfYUFxUBwEPqEEaWU4nD6Q",
  "key23": "5XNZQ226haXpq9HQoHvy3pwByiKVKQaMnWBiTyxNhEcz7STkPickaSmW3gXiGE6SenudQ5NGAP2QwADoKXhuFDVR",
  "key24": "2f2FNYtDzHQQnyxkJw3RNYN9p9qLvfKmuEcCE1EeLxN1je557FwKS8nuAMbqDHx2XdwKYt4UFgakQyeingSSzYK2",
  "key25": "3Sx7TABDx1aUSDr7M3ZTUeUrrkENs7E3pchF1Q3K676wnRkLxSn44cazv77PysBjED6uFPyoB4uGYFrwbWmuVCus",
  "key26": "2a6HLRUUbv5JkQ2538RjU8TP5K8Vacyj9A49PKaSYHCTEbrHb2xUY3P4uyQLv6QzTU2ZNCekPQGQwmEAKskaVaFy",
  "key27": "3R14zz6UeYa6REoMToZPdg6bBEGSRjU6615zBMYWaiqZq7erkiwgrUEvX4JQaLZSUYa3GhDAAWaNMWWjDFTnCxyB",
  "key28": "4RyxdDUq4AyvrKHHLoEqcMq8NUMBriwg8NgMuZEu7KM5zGbHF4HR7bEa5rLsMcBQJ7FgYTtbAHgWGyzNzeVM9u2K",
  "key29": "YxpKvjMT9P3yNyUwCySe4fP5oFEL4TFBTdByA6FJq4eZnK2SMj7R2zpSQMx7i9tMAem9QqjMWcct5vqQSBCXYA5",
  "key30": "4XsYTe2jvASsZcN8ftFFwqhM3venA42zLYxF4vrzPqXxDBKuZZPFHZfQaJhJUe9kdCZkmgvPGbYVV5LkKuDczPax",
  "key31": "4QCA6WdLNVjwxZjJ7xcQysphqcMcvfvbfSv75yYYn7XouA9TdbaNNoq4HMWDfnxX3y8tyJoezFpgw34NvhwoBEVT",
  "key32": "5fQGaHCu2z4mXCKP7wfjATAWZntmzPnRXMNpezpp3VyJRM6TP8jZDLK6v5ujmhLKi75zfA4QVRQ7gLyFvUVV9eQj",
  "key33": "Qxowc7JLFSPczJHTnRFpX41GmePa61EEwsHmjMrYHtJmiGbzerV84gvHCEFfGE2YBCn4j73kYccqhHyEDLqsnyF",
  "key34": "3ZVMQef6NP74nEHcUWXUVP4qUj3Euw4E8WGmWqke224MJjpES6KzU1uhzugWjbvPZZHeEA4U8wNbRnSSVY4mowGs",
  "key35": "2dxWNCmt6NgDypCZSbkCyFpaBaCS5Ni8DSQowLZYcBqVked27wQEBdYsgJcWrxtXd2GPnpK8AJG7dam3kEbDFmBz",
  "key36": "2MfoZQ7tc6XuZY6uGA7UNgoBiaZ2FJUk9tkzX3uQGPXfjew4FBbNWXR8Sb34PmeiQFsHuwZBEf7r695SfyQUne29",
  "key37": "8y6naX2CihgYLdYJbiygSBRKZGUFmZFCaX2uw5XFbbTEGBqBdpB3Ro53yKyH8qDUw998voaWfEzAR7HX1iPgM7Y",
  "key38": "BzLy1iNQrEdhSWcM73BCxeXzXyXyj8ahNdQiPhHwmbMxeisaFu8KyFVKY5c8R8ZMJfgZHk2h5TxvNVAi6DahpJD",
  "key39": "3PzWFA1RdrLsZi7J9spr2RQc3YYvwJTmVysngjjSC1ZtknaY3rxALMrwCAgnaHZVFfZGwPvZQgmKz29fv9GMtwMo",
  "key40": "3iPEZnj9fB1jvFawR1KSATDQh1Jfw2rEQJH8qaWZPnW6utCURpyLrYSpLggumeS47u3zW7oV9aQS6sYo7h3F8vry",
  "key41": "4Hx2bFWBahKttM1PzhNgWs1wWTaBwSxzh6AXyUmxUbm5eMwT44xmQYQqS9m5TehfgbcqP7SrgCK2PnUuLdUu7cmH",
  "key42": "3zSvk93UnfVE7pQKsgeuX7ixouP8LAvt3mN9Vmxg9HAqauQLkaX6E6jdTx6jcquqH4VXteeETcZZ3aE3qqdQEA3b"
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
