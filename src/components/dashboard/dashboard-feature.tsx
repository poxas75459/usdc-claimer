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
    "5vyRbby8H8FVagtL5FYG86ZFLJqF6bPxXXhwuEHHQT3AHHGgdycP2zUUvtNkyp8cUQBcM7cdJwHmf3KHmYjSXp1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TqrTEzeARqnZtMB8VAAJSVjhrRmtiY7Y3ESKHL6JYfQ8xG5pbYtTJz1iTn67J9AQjjRVVVkgXRAFxEAaGSM53ik",
  "key1": "42Yahk8by9dD7BDMB6TorWnA5Le1Q2XxEC2NGDknoAdoSa3S8ivzDSkwXCxuhBRiiYNbw5SyTSjmbCM2xDiEf6xq",
  "key2": "5YgZyfFAkdM1i93CYYn64jRUyNvGyPYz1DrCT3PuoSaHQvUsVYiuEdZMrNHb4dDezQZUUFGHi1ecb1zHwZkKjurW",
  "key3": "5yTFJ5NEYkpyXFPwRqArCL3bmtckHXz6bGf1QHptvEWikm3A58BREKAMACwHhbUEkCDojvMeSAggdVPB41ANqwug",
  "key4": "3Vm7e3rgdRrjnj7x3tFtgbActmi6LxnAY3v6VKoNtLfN2Vuc8iAVMRd4gEG8Un4ysfdePm3qMo7NkCuJSHefNgMn",
  "key5": "pNHBWekSXfwBEiATXt11aFzW21uC8xaPR4E7MchadNawqsXVsknwM1Fi2pKNG3LExrNSkpUH31NyK3NCc21NTjy",
  "key6": "24wnJW1CyyBGZEAZdDCsZWZZ5n3As9gZ1R3Py8BC35aQposTtoWCHFbGvkRq2Z3hnJ2HjBzxPRGSpKc9aEim8n7H",
  "key7": "3YpZXx9mV84vfoxfPBtMo4sEvQWJWqpRcUo8F6poxrhHzz6CJVGPX2UbKfQA5tmk1n4Z5LTpdErseuUtubt2NpZM",
  "key8": "4meXyc7pesANnNaxTQorhBvXGvnrvGJZEDDtb3erDa52noRyMbDgo23cU8i2tkW85s7jf7TmdVzxFZS4eyMSk23U",
  "key9": "LHbTaPP5i8LabFFP577NMCuw3ADUYjUaWRxirR1b69WgbEH4SZwzeABojvEaYS7o3wGyevQYHDdSk8zGcLAFeHM",
  "key10": "2LAD7zAS3jwXbqVZajajbWiDzsSfg1fzQJ4N9oWsNYzq5HaWEfK4B8UBbm9K6w2DL3W7tBBSZTQCSedkRvgKpTt4",
  "key11": "4MwXCqrgjfdmzpHVK2rTZnYnYonRDjsb8e5hQmwzNDAE7TJYgcAAyUKtNAVvsnL4pFiTqf33pJU7MQbjqcU7xuzR",
  "key12": "3u9BZhRTC7Gn6bf23xoegvNcN4qPszpkAsDkSeMiSBDwJNu8bPM7wNjPQhf8fpNqpUYwv6bnZS6Bmuvke23FMfVW",
  "key13": "4jHYmVh1g3FHDNNkBdxXBjVXCtG4Su65YDwHzAUYKHEz1nhryzEg2woexEQ7TsriQzPRjt4ytqGoPSqfBkye6ZXd",
  "key14": "5rNJVJGjF5CpTygaHag5ykV4zCDWYPGQzwAKbpHf4PR2n1kGWpQurcnREXAoxwHzGwGx6A6mSkJPz1bpYDWvjsTU",
  "key15": "3WAKHBMjG4tZM3HzvDw9RhANkYpT2Bfb3MYreAn5WThbTuU3pAAwDk7mhGPnxTrAyHDop8Pj8TRpWjuUGQGyjgNr",
  "key16": "jVHsAjw5SGyDAKXZA2XH1Y7vyyUzmm2wDFcxwsC5aeMHEEcfJf7vQcNG2fEmq1bfWinn4NWSqEqVwGwzo9dNG7k",
  "key17": "ipPtFY8eDjdsPu8wMpEpDUmRCgoxbrABDmeoW6Gi3CskJ6AEysBn5uoP7C5oJJ6DqtELS1vzLZARqcN49t5nJq7",
  "key18": "62tba6174CC7JnoeB3BdWRhwsAmbxWLgfx8YfGnPEQaVfUUvxDcqYP8XwQ6dxYqHq1x2q31XgsXLExUq8fbnS6eh",
  "key19": "5xn6wKLLHvjXhnUWX4J2fXa3ot1pGRA4VzYhf6Db1xvoNPYn6p1BsQhnvG4J7SDMaxbNAokZARJPJfNarjwTGrqU",
  "key20": "4kpfcjrXrSwQJJU7CEfKfjcj8cMAkeT3RWvctHgnGqYiEQSVNfsyxHumdpCd14mvXmw9S88UZYapE76YFQHVh7ra",
  "key21": "4fruEatPaRcTRxVHuCpUxwuDQWCrCFt5xhprsozh5Rcv9BdG1cDKV9k5yxV46sDrU3nqkuNteH5wNtqb2nKa9zx",
  "key22": "5fo47cLccuvExuAuyhKmFSi3GFnYFrxtMrv38eaEduquxrP9MP9y8zUUmWa6NczQKKqY24HemvPVK1jCFeBqJAgQ",
  "key23": "3iPCdKzkLNsc7pD2zzrcbg7WbQoAvYS5kZdAKDnytkS7RCW5zdMFRqQ4HUb9BJyRX3AtdLNhwhbqWPLZwSWvGpxy",
  "key24": "q65pB97dyGEaURpvVrguP51smW1YL3qck31Vf8TboQSTpoeCgQ3UtXEhCq68SUtMNBU96WPbdqmiL62kiy8Njpc",
  "key25": "4LrZwAXgWFQQvwxQUzp7Zvc8GETi1mjAojqavdA6wFJLoeM6AHjrkgfn1YA7RUVnTFuUvVhX1mW6cZKE7zhBNnV8",
  "key26": "2eComaoWZox3oJJ5rGc1vCVrTYLw4VUnE6YFgSsVfkVZDU4JbDcAEsCQvaZ7CYwo6DPHu6MPCAFRLBEBCUQaxmZg",
  "key27": "4tABimW3pseuGZQXe6D8BRewpeNJZrc9bffCGzmpnZMdzPXoWPSzKWy626hxCR1dzpbMnho8g9am8gUdhZs1S6Nv",
  "key28": "2vMdYravjEWNroSSBrGzDi5MKgGpG6Qr5bYYrdEPx5xbX82vBdBcqhFCu1y2Bm6UXXZULVtajw9ZvcCdhDCwaM4d",
  "key29": "5ZXAZQFNvujAujvqQmbxbwiMv4No7yzpzLwtoe3rgtdbZPJKuGyCQDr1aMz7giGJUv4xyytMo34WQDMUJioYwwef"
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
