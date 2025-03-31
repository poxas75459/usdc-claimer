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
    "4mGTdKT9ePyLUfeesSL2dGe7gmvx9VBMKJpqhjnYXQhc14mU1BXRCxSv25pswXjyqDTdtCqsMYe5iZqZiaGRZfh5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egTNjoGUDJhxx4hSwCQaaTVQ9eFsx9CvQWUi7YWeDCDsYsZj6B8Jjup34aD3A8rbeYdWVrrf5n5ibRqrtDiiATy",
  "key1": "4XFbgPjpX8UeMNaPHTLNoY6cSu9z8AjyWtScXLi33G8t7YR4XeMZrART7fAkgH9Ej7jJoXWVjnPiLLyQRnkk7pS3",
  "key2": "5dPtWhH7pCSdvCGi9nSRBhsd58PuhpY7A2VrUDbxHt5WrFJKzFfcei8QU4Ub7fLkwtKXnQSzxjaV3T5pCASoUaup",
  "key3": "2RmdrCPuHfeN84r8rxmopAS29ABPzHCm2EoVnWGm99JqzqbpNkvYeBcjH9CsQPyJxc5e6jqvuM6WM1QBwoqD93YY",
  "key4": "3vPy3u2NVN5jse4p6puQot6C4KwCxxstnEqVjJ1ZrQP3mTW9Ui8bfB62oVnLgYpec8HwSyotqrBjJ77saxRKaUpf",
  "key5": "2SdAZpYR3vgxRng1yY6VxbEh8CtoJgGJqBzdspGX5kmNAHj9H2j6RDT2rinSV4oAguJHCZukqn5x6fFv2XU3Exvi",
  "key6": "47nM95cUKkUhJ9EJ4fq17qW9dKh7HbEo8VfuisnhpmZcu4YxNLapcHJvTvYgcprhT8mALGQ1omgz2rC5Zpy1QqUW",
  "key7": "4MpVocDqBGabNNR7rTSGFLpR2Dmum3ig1jdxijNKs8V5ennM6KTKL4ZhX6VB4WoGWHwA7ZR2ty9Yj5Lxt1wvhps1",
  "key8": "38dbdfAKQ4Vp3LuAZEF95DLuAwriJTPXZqdt2zKM1H6NfkgV8dGhDMn3JsSbKUU8GeDMQqTLyENyAX16D8r6qiB2",
  "key9": "3RMnGXKFjbUyxkCNBqM52FyutKRQytcV4D3HgKiEwhaUbpJBCfR9QwjLfcURroTU5TFC2uxaYBuDweasiZNWafHR",
  "key10": "CzHZ1E44iser9xTyG22fef4daBTvACtrPygPYi4zqNFpWPpymWG5cGXRN6Fjfq2Z2LzpKVXS9QT2YfQKtVUSX15",
  "key11": "2rBeQkQHSUF6SdNDG1GM8oLeXyAiAs5oDNUjk2RkYm5evxomNKEf4EFNFWYVVsmdRaFDujv72grFMUJvZrusEjv5",
  "key12": "QQeBRwDfxoFnkCrBz8W57T9dg82JjZaZq6Wx3BEkd3c3BMEZKEnS93hnf69eecK5ZtZNRtocEvQv15DytJpi1jA",
  "key13": "5vtznQJzFQCnLfKmzn44QiaRhhLHpqpumAwuRNZJVobep1qmxGVvd6drACQZFQY1teQaJNbFKP1U8HFMuWafo6kg",
  "key14": "2CbqU1gGnVM19weV3QDaic9hUp1RrDjnxoCBhawMHvwGLFrBya2uxzZyqyDseYEtVrccZm4mUjpUEsuFCSGUsFDu",
  "key15": "4aVcRdKfxNyuwqJKDhd8LPesgqky9eCLdm6nCtYsRSi62i1kmzrDEgRwAVk31Nw877rQtZBcRHz6ZCqBGpSBUBkn",
  "key16": "3vhFfitZeVQsLwG6GW9At7ow236ypbbJp8uWHXH5rM9pKigKCmFCHTAM5cchbzJRU1DmPepCjdESyFqSxrNwGgoE",
  "key17": "cWkamYXV7n2Amm8z7UAJnsGYMqCYfy8gQEGRrMMkBGmLJ5bRKzvyfUyagPvaASD66Bqp6PqJxJLQXVbbKYs5jtF",
  "key18": "3fdnp5kVQgRX3d3X5zLxDUHzyCX6ARtYgh4xsBdccgV1ikPeUQkFDon7h2XpJAf4faF2Sc4rEjW8QroTnScR7NcX",
  "key19": "67m2A5D8HVjtSL6YhTRGaepr1jQVmyzkK6akQEL9jo4u3t6tVZx9Lp2fRF8TXj5V8TMyyfESGQ3htHXyjrdiek3o",
  "key20": "2LqhPuhZMsAn7kUgkszwWiUhNqKFzddh8T3hSvgmZtK7URYeVdbQr45BapsezFK64qBmaqLLu5GtyBZgudXULCNJ",
  "key21": "222iBQePXdJfPbjPVW56EN8btrd4qouEHjz9UmUfsHpGkiLh3tkeYkUdBSq6FaVUtzVwUouV86jQfLTfVgZKno53",
  "key22": "wDJc1wRjHHdzRTVEhUiuWsZCr9C6ySbK1e8ZEpa6XU57ytAjKaXVJBpoqoHALPDTVtHBFthZbHjF6jcdEtUKWQu",
  "key23": "VUekDmP2SvQmTW1NS3jnbLiNNVuyCGvvsrTwEC9bkHcyZ8akmAfMts9fzvRJoyNdKvxgxCpG8FFa8kQ88Ri9P6C",
  "key24": "4ydwxkVqdpaRF3L1EFAmBcVmNuvEdaqtk3rfr63J8rDydD8U2VywAhyLHbwKs4UGsdqi2ktKzSrceokAS9CZsqCF",
  "key25": "5FNJCqdMDs1q3m2F2FUif3ehsoW5Ue1Wnh29hm3SPUprrhkNThvAFHtFc6qJDsiPhV1PaNTJ5DFWt3NwFkubHQ32",
  "key26": "4fq4SC3rgbEcKCkpGEELk9imn6qgtcUWLQac1uu7KTzbfBeeB3JAaQk6wzaTdZ5iTdxZNRQ5TeC68AQ4y1AD5Ffu",
  "key27": "42U4DaXwqUkQ95s6ERWKgZsmH9Xps3A7k6AYCFCz3WiGwNrHUmvHKi8whJp5qgdvEzENTR1Dep36UbZ6ht8vNeVN",
  "key28": "3mL1N7vo8dM3T2AwCddHTQ1YGdCvdiAV15KnDHWkit7ntATRD74r9HhtTYmMkRSy44e6oQzDPpEscQfUr1EYuRjP",
  "key29": "Y5TPPmRQCyEQswzfsWzfaCMgjVf8Zrbc1TSAVy1AEuv2cn5VN9ocgJBtE6wpfLsW3keHEFVYCp7gqMjzHwSZNKJ",
  "key30": "4p5Wm6jG8XPfmVyKJDPonm3TkeqdvBprdZZfXyKgXtzobnxHKv5YCrKRA9VAk3EvpQzAy96v9ukEm1f3c4m7M3hQ",
  "key31": "5Q8bKpw5kKU3CD1yQ2MAbYoaAZuZgEHG1ipNdsDfmXFzVwayUgWFLkvzTm6hdAXxNGDLk3LoDMBNGb6ffQ2Ysiie",
  "key32": "5bnuEoDvnzyYohz4cgexB7JUidFjE7uWkxsFfn4q3voeWiHN4Ab5fkiZwsRR2HHnrMgFapV6PbUa7SjFp71aQ73q",
  "key33": "2zxSvQ7jUm8szJCM14vAgBgLsfXgS6wDmU4ScwS5wJwPGcg49rFCgQ6PbNzkrrSFjcvnp3P7MykMi4dPwnE11JJ6",
  "key34": "4sKQdviptJpQVepG9TkHLK1ZFQRYEDKCCkwP6ryvnrCP38jeuoutBaN1nsdpzCbZaycZJieeRY4ZGowiKzVVXs6d",
  "key35": "NMqDHFCLXgvycgdtWEWixGDXHBSVGkc1jczjVSvBvbkVeeKhrHpQr6v2LFt4QqzrsnazaCNtMfNAYixFHjC39jT",
  "key36": "2YZfhq3QZPjQCnp1ngjUUZXJoRGB6fno9xTrxqmK6B6KobK4L8DVwVDbDuUv179QrBVdV5b18ZRLNifqx7YAmcay",
  "key37": "ztqW3V2M48Cd3qbSX6USNCcsKNDh5naGxKd2HqZGLNQHKUo3mJctPKKPbxm2RjtpG8YACunBzRzkzqRZnanU2S9"
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
