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
    "5vSVjthhaQuurR8TWtTDjipVu68RrQNPZcGWUKbo5jmVyHiM7Z9XWQP9TxaR5ZNJqrRjsczGPLSftQBWYv9L7FXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bmvg1Zqe9es5jfjw7L3mqWP7ePhtZZhuWnMsCG4PMWuA1GcjZxbfGLQbXVqavsZ7usypURyqiKpEoKsXbPEt17p",
  "key1": "45nfHuS9zWRj5sFHGvoewhZSeHaUkBAtJQZUR4BPFQxxTpA3WMvduQELvUcQH3yKJNMasaf4n1fZTjwiDBbry8Fi",
  "key2": "2ztraXN43NtEPao5CKrpwFtS7bURbvApzuYsSqDpgcmRDikwmjWAgtPiRw1zZYphyZqxDxoMSKJ84uqyYpaopybK",
  "key3": "2NG4qqME1pQV1neKaaEQquv89xUXC2ACjphZyigoA9MvgoBk6Juxpw8TBRkXVPG2gW6G6VSCiAWHx5XQo1ng5c7K",
  "key4": "3bhkMPJEBPQ2GadqVzCNoob8KRjkQduZW7F7EJ7ztBMZCmjFzkQwRS2qoorYFmtsyhj47xuzADpY7RoVWUjZ3gEM",
  "key5": "FHB85eAoazK9KM68B4b9PWSUWWwF6cusMkP8KqATLw2s4MptqdZLK8WLzPEfJGwAx6d3r1CMyyvYT6kJKGPmqJE",
  "key6": "4F3iYdkaCzgMbMeZ52VoLXVmoP1PcVT6U66NiUUG5rJi8ZFjsJ1ik77F5aQoy6nzW2iqXkLm519WcA7pKPC97toW",
  "key7": "4Ls9m6E8qeRcZ8TycrZJtnTv4QX6Pf2f2xJoqhpzPmrDkLB3Sd47zTQX3wSoD1iW3SjCHspeMiTKk7dbtJ4dpxjs",
  "key8": "5wYCprTxveFbJguvUJe9UpF18aDBk9foLRwuupdMUP48ZGf6zxZ215jAVyxBLJQseMMpWfeSjSGsHkGMt5XeJwtG",
  "key9": "3ghi4uBb6RZ4oxuB57v6KtKga72xQW5reN9Sv7UZkvyZP3qjin8avXL24MQtGAW51hs9cMzMyFYM3PPks3KhivV5",
  "key10": "3uL5ULn9nephga2ENmbVKrUrtdVP5BTG8AAsuqYK7hXih98cKR3o67j1sA6dVMNH6h9Y1cguSCvJ8SkgpFijXQCF",
  "key11": "5jVbU8GQts8vSMaRAUp2Kt755ToEAafD5iBwbP1gArCQRGVqF2qNuBoeB7vPw5x8qfVhAinMK7JYeCSws7yWmt4h",
  "key12": "2xPjs6AhhNoKA5s4koVvtkba8xdfWbohVh6SnvUwUq9mJHnMQGQhTRp5dMhgXLxoXNZyoNwGYqxwpTj3daLa923N",
  "key13": "2kstqj38vUUoJGUqw5UHnXfPWyGWwRyvp9ZfckYmiZj4HinpKsJGaGvk1gwmRZSvP6ybLXogkv9UdVsRm9Xp9UHD",
  "key14": "4yebeQZSNQMakeZddGFaCn4rrXnvaB2349TPBPQB5MbLrffZEueYEFFwJ7669EbJjHB57em7vVnbnD2WPTuMVgqV",
  "key15": "4zBy5mE3veq3Em3uoXzQRefV3gHCgmtxHb9qaZGDYBRB5EmX2m5CadsLQiPFgaE68K5XTkZcPX9CeuGiwR1oE8SB",
  "key16": "53zVzr5TpNBMWzeuCPePUKtHutYdXXvnBvDP9oB7ZiYwipeLRd9KMoYJYU8oPivQwv1AXTx8CbjnwqKSXmhSKkgm",
  "key17": "5aG6pKZdDHAxRYAC347ZgXGMCj85sYTnLeqZYAjvD59FzBZz4UU4DSFK2DEJ3pmzR3XyLMq8siraBzvyybnGZZA3",
  "key18": "5rqgwvVfkMK3E67aRF3mUxDB7szkyAcU3a1kKCoEM925w48kw8WcQ9EKWAc13ixYorgCzJBq7dL3nPUrDhCucUZh",
  "key19": "1Y6cbhMzULW6UpbgGTNJRJq7UP1dE4xtt3L7wfq4mspbhRMLQz6A2mXkpyHQyqmgjvEBhmughVbsWwegN5XFBvE",
  "key20": "4gs8YrNFfh9dFDM5DkAAfbWV6bKJ7QnuJYSiadmuyfmcxNkz4CCoLJb9Ju78m16iDUTpsD4AvTtGkX6Q28R9t5nz",
  "key21": "4mwAT9ZyesUh9fbDURMnrQariwWmnWG3pk4iqCZuiYkbs9jczvhksFCj6pLWC56TGhAGBX3g3NZkw3LeSxUAL1Rs",
  "key22": "2NX5nq2CCQqg8VWRbEQt7tz5oTqausfvMYMJbuSdJM2GqLqqkaTw6hjRSTxv5BL1goZHanwCNaes8bf35Ueou3yZ",
  "key23": "2fWjBQpQwViZQ1onHwWAtaguRdUb69vVdn8z1y8Vrn4MUrznBhpoaWVBk3no4gqwb51Gmdtsq9xpTWtWBXMbaKzh",
  "key24": "5a4CMk7fBM51vxGfYEMPv7k9DcucrF8V9AkxyCTmQcS6rtCwUTqpU7C6Q6XLTRYwoJTd3VkuPbyvWQfbMFZ3a61d",
  "key25": "49WbueWqSuRr7FkHkZoJsxJpAqWz8Yk1ntESw1scHKeKRTEie7QzBBMKwPXZhmS1AtaAAKo8ht1TduKdBniRaYs2",
  "key26": "3tCKbRt2mduMJQYGNCY7NU7DsBnsntoab13GGYLLtHDfJxBr1qFSxWBohjy5k4umgYTYacL7utHgYXK6JiWwo3P5",
  "key27": "49L1cvCvL2SMoC3HW1zA7T4WmbHEnr41znnP8kwc4AFunVPxnrPyf82M2q2FzkELwzimXEdW9XwZPHKtVWNFAsxr",
  "key28": "3HS1GvcrsoiNvZzXDq62ibvfN3E2Wdh9yv7kjG7GyZ7dRSxeScHxSZASWS7D8Shrs5QsVBFbvmogUDoCNc2ap9mW"
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
