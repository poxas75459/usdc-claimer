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
    "8ZbipztQE9YSxGfwjAB9Af4tgQfHcKq9A9KrigMg3YejWLkKLPxfyR8kkE1KwdcvTFVxEX1qwTm3D2o3RT8rBXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kapVKsTfxjGWGJ2baspPGf2DnJG2eWdxkJpPU1buVXjmKcwbwnbrVRXduznwvS33J1mQ9B6q3WhmN4dC9q7kvp",
  "key1": "5m46dn67DhaahqjJeoMXNkiisxak96fF2VUSt1QVVsUBMetURWEEDyR9EjyaWAvfPdoazvg8qqFhMrytAM4ohE57",
  "key2": "4x8GJjmH5wzAJ8GWYRW7qAXNtMpt7Q3VjQ7rPzBZoST61RWY5axvqMSsowTfjk8Pzm9oD7Lg2Jd1RTYWQJk62DFT",
  "key3": "38G1hQfGutipfqxeAGXdo761MVvWDZKXZLXwKgjoPAfW7sjiAJmXZvbMCJm1Dy14cAW7aEkFiQQ5izpS4e1QNkft",
  "key4": "5eummNF77XijckRfPmW6JU4GqVGinsj3RqegaXe74ftHtA3kZMzzkXu7L1DydFKfJESC2SpGRfV6oP1Dun3FwcFw",
  "key5": "4Z6vxYi8XW6nFWJRyTcWyxkvnGTqQe8bYZxRrqyJk6qtKK6eDTDdhimyGHodm11mFcohdU1DtAzu1Rt351choG14",
  "key6": "3JwwbiiRVHZ1iWrgWHJUeYc5538PoAjgpzxECHhSFwduyq85uoRje7NuScbJXhimqGeaVKCTqZBnK6fcYJZvNnpB",
  "key7": "61GTYEzfeExZsRswTYWQVGSSHUHNW7257bXYYpbScmtmHQqSj4MbVQxLsPtBWzYwPheVyti7VKi91LA85TdLVG9F",
  "key8": "54tt4U6mCLWq4k5cRSfRttsj7YSCkGyMQ6UFtdVgoG8BAJJ15sZ6MKvVKeKdb9iXYSBC3vAUyGBZgJA3DFeLddQL",
  "key9": "QQjedB1fgpQo87HxKLJ2d6hnP63hGYSQdgssjibKE4nZuETnYD5EchuUAeUGhVJKoVAHygRAwDtRr6wAi994mr3",
  "key10": "2Q3PT9j9aHm9pFoopuHJKXs6Y1aMvTRuKa2kWfZuayahyEBZN89QRbdDvWmRvmifP4iJnHsD6GFKu5REnHmtomWL",
  "key11": "47EHFs9XAQiwyQo4Qj4RyP4AFMFPxRYRe73H91tYYmxrGaVsEDqKfowkzEQKNyPJv4g5XRnYf4TvvkEkeHC9s5Mk",
  "key12": "3yMLDxgsAHe3fXkreJA9aCvwECvBLdqNUESQesqgSHoR8AdatNuBkjkYqhpLVW7aBMHNa9BuUdRW3dsyJURRsWhG",
  "key13": "3onBu2mjXMAL1HCfEAbogLSs4j6yKJJQZGxsj1tvB37MNH2m9869yu3TfyM4NS9CLBJS68hhrKC3v5NffxQP5Psd",
  "key14": "2nKNFXrhWRvvpW9SbSaQUrAmiQT8UjKAc6qpJabkXLpg5Rs3Lf87fDg7mBKPEN8Xjw52KCtZNLDijfLLCiY2yKL6",
  "key15": "5YgTsK9zaWhcgrffAdmDp9Ccw7FqAduQxp7VL2XrwjTJJwojjJ34bsSWyGRCteVn5xaZNxpjQTjmwXygMJgGcrRX",
  "key16": "52JCdfHZgmyvzNZqPBW9nxmBepq1vZLM8dKeLcZGyK3qwexLoDyPXvEDzRg8R3gyXE7boapzWAB7mDwHwowdedRS",
  "key17": "3KbYatA4peFDJ3PxmBX4v4s7P8RUowhfTQkEKQBKaYp2eJsLJbemS7CtwpwJ7jGmzotKgTTYg8MdS72d7GNVwgzr",
  "key18": "BZAE9VF6pZfbvXQS8heEUFCAU7Mq8LRXuKH6NjDsBNzjGHEV4KgGUhGwj55nZSEcRPWfpamqFwVsQzWLoSPsVKp",
  "key19": "2tG27ieM3f3bgke3vYKQvazHijgc7Q4EAErx7TLvkWyPuXrm7hNoJ3iqdiYGNFdkc1LqYMMeQkVpRMt87tCFAyqR",
  "key20": "R4N62mU9H61hz7FJTaqr5gaAyYGpHxqCTCrV6gATzKKptSjUm2gEZB6fM72BVMZ3i33dXE9wZVzDhoLNMmMu3jS",
  "key21": "3572qSaQWZceAKSzrXGZhtkG75xLGdt89guuXm4rdHX8ZT3R9VRCFg1fENJT9bpAXmAyh3jnx1WAm8q9dwJqMVr1",
  "key22": "5aVrDag8KeQk9XTVcRK9r4B92wds2YWZUUw3bMFkcavzjCZ4GHW1xFUz1uzxdWgAGqmb7UofHurkEa84qtVd9tBv",
  "key23": "5JcEunDBQYdrdL1AKuZaHVeetHcKkHuTjHRv4RxWeAtiZDwHvzc4sULudJeFdwUT3rWFtsnyjYBZsccv7W3GzVqR",
  "key24": "21X4gR7idH32iWkpP9Xtx9mU76ap4ahXJ18bDbCdzQkUn2Po8CXJzSnayYfmMAoBWHEqVWYK3sqMYFfQS9xGLpmc",
  "key25": "4U13sWgQscCXXMNmFv1MB95PSe1AtdJ8Bc2cZH3THJDoK9oVQVEByTmfH7tUyaUecmxeY8VThDiUx7E9kDLm39uy",
  "key26": "3kqgHbtmKYYfBAobKtouLRVFe2Az8Jshfc5vHcsUbGw4YkgSQui6DNbhJ9jnW6XQe1igXgFEAkp68KU8arzAWmM1",
  "key27": "7iZoU9fTBNQS97n7J7QwumG1FBicMYxAejBhyPqau5AA8p9jHHh9cGDVPzRPZYkGhRZdqGLwPzWwt2Dq1XPmBWW",
  "key28": "29CxHYQWEAo81txXA9ZZgoWJR5Jus8ucg5Yo8phkmLetjvGZCX44vWsuSS8UZXPUr2Mit27q73bkDwdNGFX3qzfk",
  "key29": "4u8NhBqu9GbRnFiquhLJzHnk8Jm7qcy6RJTBYe2X1uCyBydFn9FyS86j4ZUmDUJQbz5ZwkJnDcRgq8Cv8H3Gr8PC",
  "key30": "5hGQqFegz8ennePvbPEErwduwaDJwQpVyvYRwc3vAYKPHK3CXB54pFJxZmCC1JGHTJYDzsSswZySpopWuZ6qghFS",
  "key31": "4TeMHhBLQNVFmRLWDipL4XcxdSzKt2fDLN4rS7EUDCAFJWxy1F9Ayu3CA92GajJe2Dg3hHbYAYsLnaRRQFeJ4Yzc",
  "key32": "gz45kUG89FejfuEmBBxBavH4cxVJwwDJc3jePLr1GszTPX8atcM3eBTSbQLHL1UdbV5KwWUfQ31PWjsXQmikGD1",
  "key33": "4Nd7Se2uNprR4mAt4JCATBARSbGzexEosBTCx1f3vdME7ZqnQiqWzgMsgnMtygqPrp1gUqNvYs3nQY2xqE4W1Nfm",
  "key34": "3AkAV6K45sEbruNiAJbYK2eK8UPka6cVQs59WcwZYTenSAsycZTHgWm5P5gYiuWVh6QYqHgHiYPE7SnwnYkkEEvF",
  "key35": "TRtutaZ3tQKBr9MHs3QHWW7GDwzter9hDbTBcvGztNZME5MQt2fUheAZXF63sdYs8FYy5ZYs6Aw9tM6rCFg18xn",
  "key36": "J828kYqtPN6UKjuXnLeSoerNorYtBHp4ZLkeNBpAAjPnnW7H8k2hJURhwT3k3LxCE91J7uhjKxnZerEKHgkEMHN"
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
