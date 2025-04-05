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
    "48whBr9VUyBaYxWgpQxFaBPLaALxab2wHwvqKecy2pzxcaW7CQ7sxeVwf4Nb7ahBeZH3v6e1KrjEAGrDSkC1mFzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6NqoXU2shu6BNXUiDSM4tBZMaaomUXDKD9jRXHRhHPQfzPAprnu7RNZ9LA4f17wektu6bzRuy9NHEtwM3mx1Ti",
  "key1": "41tstW5SuhTCPhkYd9hJMB2ShZhZJNDtrcvQjEUcin8Nsp25Tv8bXzZaN9916GUg48kjWFhFUNnAEsQ7pUW2YeUR",
  "key2": "4JjankedWy6fNXXmF9StgfZLputmpK1cTqgbCenpxvmR3o4iJfM4XNVPAgEGdmjqzU6Qpgt2gprtAoqPPNR62zED",
  "key3": "5FAR5UTe2mqVL4uVxxxd9r2BNhnBiJ9xSgKK9LTkGcdczQvdEUcyTwtGpgtMTxgMc1pBH2DMyk4wZkpzmqGiaCx",
  "key4": "4BEnNZuNkhdyXvyRbH8rwEP6MnBnaHbZQUPxNocTW7ZWkziyHhSd41PNipwzPhujE7muq3DJWbMefv3oChHT3KFh",
  "key5": "2gmYmwcvYk6hjv6VMKX4guWdYWVXkBW4T8xCbJPdk7eNdMRYY364pyr9KcdVh4DvmUG3WBQeX1TtdMuZUosoHaMA",
  "key6": "2Lh5mByqKW6dgG6zv1SJoa5au6cSZBfceQZmfhEMayxTzxF89zFgRCu93KBMEDgetHxbFejS6RfvUUctAR9NaJsw",
  "key7": "367N5LZvt9BBU1brPg9dQLUzGLUHnUuRRpmCdeGcCHZpcaTLFLkfKTmnBfsQtKyzFy12YNjMqAgf9RLzfeiCnYmh",
  "key8": "3rVZ8arFar6ryVhg6faPmijne2QDXoJnZz1QwxHKkkx3nAFrPar24WwNtYtWanrimpj5GbRrSBoNFSBy6UwY252B",
  "key9": "2o3C6FeJF366L5vjaYyBuw3RmF6zzsWnATBH3tVAbK3iBuXE5gcHWb4rSyqGP5UwVJTX29ZbY83igMEPPqEmDfrF",
  "key10": "4rUY4Nnw8ey4thB1DuA553Ecc6Sb1sUTKwY7WYwcbfW4YwhXhxYomz7AoyEWwUX3m6FWRhR1RzLumuomwDLYi4TD",
  "key11": "573vhSY8vhvxwo6Wd47jAezU8aTQqAaGFz8N6MKdNwnMHPt9evQyEQJzDPsRQ5QHdbqZt4xuRqi6VMEAMSRL1jPa",
  "key12": "2KDLbsSzQKjSRLoN19LMfHjGDvMNPJ4Bua3UaCBg9xhRvZnBRdnWubL2kRYECnK4SJEQ5f9kGXJBJY5HGbqFWch3",
  "key13": "yWm6WrRnrTqaS1xfL2VdPU5F8QLHjrg7cWHayQhh7aHqEeX2zds1Lc9GWQadCv6oVXR99z8PcNQZmuGJmrWcmjH",
  "key14": "3z96KFgRHy37GMwvaUhEWAfJcT2UZRMYiKCvSwWHgD7brHpxkJgv6tS9xxyFJJbZvNQXELWtDWXaLffqo1BVu5tB",
  "key15": "5e2cruxoSMXANVnDXMQ3Daj45BcfT7k2DfMZyj4qWRcLo5a3y1w72KRgFV9ixBPK1PkGZosCndck594edY3HGxkC",
  "key16": "2hdaa94CNKJrkaDdVGHgLtTGaNMsK2QNUv9VJaXC9yNY2YJJbqKLr2opQXzSiKjBjKvzzkgWkoacB8hejqyUcMGu",
  "key17": "5CZ8WFBVDNyHhDNL7RFvVyAapbJS55JMZMYsjSs7517es1zpTcXVqJS1nAXsgUgFRrDT4FQfDryGyNDbyUSiM3bo",
  "key18": "b4s2PLUyfGe91PEr4Sp5d3fJGyjCgDq77716u51LjXBcAwkMzf9ba8KyfMKCSxi5XWVup5zjgbSBJfJBwj7aCjL",
  "key19": "4fM6TVMm2RyGmp83fX3CeDQyXj3Vrk8QufuJwK7nsRTXYK5nSwtMXnR8TpH7jU7i8EZ7sCsCEz2baXpL8u6TrGg9",
  "key20": "4aYgptLBMmZiAqwHTCy4dvA6J4c1MHdvhJM6VZBpTA2iwvjz4noCeQ6t6RydVQWgTCM3tmKGgurU3aVXC1reyMTJ",
  "key21": "3VvutykbiDjvAq4jkjDZBZMQbXdNqGkY7TWjp4soXCmM3eTBLDQNQLh4m2EuLyrxdgVuWaTeR1K21ihx69GvP1hW",
  "key22": "5FubtDCHcyDMUqLsG7g5ZvsqpW4afXypA21XAJh9SsqtqCjVyNEF5TdPcikeeAwpQ6pUevXcjDL52pn1GbW5aVET",
  "key23": "2k9HDLrx3baAfayxmqTWQESakhDUKC1V5kGExqaaDq3RBYvg7x6odMybpGTH5EpR7AEKcDLUYwEyuXErxneQjWAg",
  "key24": "2qcxLyJBLq8mrzMM4vh1WFZ3rKi5mmLKtQKnBVyrDPCAPQdDQcPP6wzVgzpLAy5eb9mpmqMh3kGueU9T5ZoKS8nt",
  "key25": "3FuiCtKcr5WvVGaC6CrczwNJfka92kPQebwFf2tv4eDrBSH4Q8wKyut5dvuxszZptT9hzbPype7t4ULhWQJBwrNL",
  "key26": "2Y6NW5FLRpMp3rudF3KcW8oph2fpAGeXCK4CMUu7S937jvwYWQBkeN7Zfm1WXQSUUJS6dDbX4g7hffVGcQKZkP9u"
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
