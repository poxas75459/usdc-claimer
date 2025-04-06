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
    "3Y4KNphXo1vL1k3MjxWw3VGGekLTYFa8ZdWo7ykCeyG2L96QmmYSv6XgGp9CdHshwrPifjaiQXkAtw8RnY2DHrzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cyVY1VUsfrpAvCy7QLQmcko9FHTqiMcftEB7wZCnqgDFmoaHYN6LgwahmGQnSqdcx29v2owXgPDCiYhRjMXD62",
  "key1": "4KYbrzDJdgoRAoCYFUuA9KudrtGAUAnorwZzAPR1qMZXNhEBsapsyHUVU3C3Cfdosf6G5T8AnF1tW3JV4BzbCDmZ",
  "key2": "57WZCD6qPFryg41E5Gfm1uZqbg1HZg5xo75rXUKq9WhvFmQGLT3Ua5sM3XcQmVYU9zKx2KKqYXJwFNLZkj26zEzF",
  "key3": "z6cWTtJ1k2er59wQch5oHNkTFEAvodGWs4kUQRsVDg139arL4WPwS19RzkTqgqh8qMW4sXar3JoXFDZWtnp7j5k",
  "key4": "GyjpbiChLfkS8WMjiCW5fhqSSVuGFAcKa2qfWC7QohHaURwM1bdHkfFHp5Fp7gnKexRGP45bx7k59CwPPtkxqRQ",
  "key5": "joVW7gyL2jMDhqW1f63rRYS1k8mgdQJSpXYHzVSRcYHmJRLKCV5JLsumNc8UEbWbFD6N43EFM85D3PRH2HTuJjH",
  "key6": "5ErheYFh8KDbtHQheLsXowyp7ueToWe2fFGC69QBZaNTtsTttz8STAuXWFEgQ6WVBAgsvVSpyqWVYeWXmESVbdDd",
  "key7": "4eJgAa6ssxVCzNrEJyFHJo3yJg5a2CZwojqNHoLa266yJ9373zHXnrGZUtSgyX68VYf8A97imNvo8XTeuguZh6JV",
  "key8": "3DaGEBjX7SytQkUgps54taarDZNnmiMY7kfHKZpp2zY2A6wHd8kTZJfawLqbwo8FvVLNn8bz6bBjSDuwK2edz4Cb",
  "key9": "4vuCVdyv6QdBqqNRQ5GYrdKvcqRmvTcVLYkUivDcZZVbrPZcRUykBhd4FMhfKu6Lwn1zPwZYH3BJPfvhnuBBBMfi",
  "key10": "3DJv5mNpnPRfm5ocXpPPcn8W88UYsmdf9gFmbgw5d8ir5PDSBbeDVikTPPJuzgk9m2pTynLzfA7N7RwYYYsQ9uyo",
  "key11": "2KT4bBcCQ6vf3sScAZhR4GEoBijNypRv9WDTb3EdNc3krNCuGJ3stRoyaKKV4D3Sn3jKfwecwAZAvmKLY8pJtpfn",
  "key12": "2PhnbJbh7Ta5f2PW6dRJ7XtsfaR1kgtyJKKNuR9QoNBFPw1HyMbqg2ysPvJ648QQ84eC53YFGpAmxavm1PzyRSzF",
  "key13": "5fGUcwAEyDT3FJGuVQ6PSDQzYdediZV8xR3rT5WccjT7AyMhSS9v774HgnSHuCGGsaN7c3K8KSaUQD11xTVD85MF",
  "key14": "SyjLKMUVnB9S9pP79j2DLFsRB1nrSK9st8eSAo6n3axJ74sGEcr5ZyC6Sh4WRRWR3NgxHPrAr7BnKHaVguBKnH9",
  "key15": "5dMJa1z1FggLc1t6ne5kQkFqmWpyEYrTxDcBkHQahyzAt2UpbVapM1RzHSr7mcciY1y3ESSwrQ1Y9Pq1gEUWZL2r",
  "key16": "5r1boN7iKYqETVptJJMXp7ADeLarcY8WM7kJH68Wnuiu68gwiiu6ti8UacUqnKYoxhJz8Eya2fkRwEeAGhkpynYL",
  "key17": "4uWVH74JoLEnK3uMEvJvC6afcFjToNJDafXHpyfKwjdRwrfyNUiWtwQECUz4uacDAKbWLrT9rijDds7pM98SWtoP",
  "key18": "4hgTEdxhC9wJqGrheXFyhgpjZxuF5hy2KJH64ku5rhpvjfjAKfvWcnhho2RNW9V15LsDmn11Ye4ixsiDPip9Mapv",
  "key19": "HNwpJv257puNvfCEmRTmU5F9jvmn32ijYcpiFj4LTt5tPF61XcvjmB84nYaUay1WkMNmu811bo2HezJbEawDB8w",
  "key20": "4bLLiiP1vDgFbhTrQf2k8kYjk66nvVAj4s94t5B26eHJayjMQwRoZ8eqDuKeWpYE3PdJiWv88xv4HAoA8LvnUJNt",
  "key21": "NeuFKdvSPXibhR8qGuQ5YVJbVhCsQF2KxAgGXsYtL5fatokbZ3KAce3fGwNPCdv3knkcXgciKiDDKehBECwhmiZ",
  "key22": "4S9PFZD6AqDS8wQXaBJreF77F3Pa1zCkXB27Mz7xzCzuLWzbn3rSoVgGnvfvMRLYJRjpqP6EcZfBc143Tch1Czpm",
  "key23": "2A7g5EwnYESzUohyH2hCREXAgWYZBD93br4u4ny2psGVM3VMmS39rEK5MiiDaRxXv4s6oWb3QrCHDS3uNrbyh2jh",
  "key24": "27nPkc6yZuvMU9yW5mYuhVWPmdPLuvNt34HCysNYpsfUSg8jemFsXN9yEzcnChiBjin7ioc3xoyfiEJyfi8E6xbn",
  "key25": "2HAzgQTU235cVF44SfYwfqjHPgv2yNJgoGj3ptGZB1pfpYvow86h4VNmAaHS13bMeiGBGbX8hSiyxTCxo98dqQJc",
  "key26": "21TDfavcapBZD456DfLr4NX4tX5si5dFGXDiZrkPomYAD1oQiWR798BeKsZhYiWPJq94SVCa8w6BWFBHdsB9iYFF"
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
