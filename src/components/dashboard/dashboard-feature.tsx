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
    "3nNAHsvsooZHpPSZx4dF5Z2ox25GT8YGi2oHnPDK73J1XCsNxGbwz6P5jKEjuCpRCMXQpfThZeiVzoDYmfzWrzKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27tDyVaQE1vnxreDn61p5eWMxwiGAwR3sjMf5JpHqyrAGhbfWf7nykSSADZtaVnnjTmo3xojGE7B9ZYhJzKnTPDi",
  "key1": "4gvuBJMXKb1QCzADzx8soJhnoDp7FoShTZNcNq7MLF16ESRoTR8UYdRyP3fp7S5VBy4W43x5abuaoAnQr4qoxwKg",
  "key2": "2Dt9CSAxWWoVTMsMFJGNHJzzGyN5PEF5tMVm9oJAyf79ENZvyN6wjqLUodzBWj6VDnG1B5KZYYGxdRELzyrcsA5b",
  "key3": "3JyeRKNXvYexa6zEKCGhb66d6j7X6YaKphYh8NEb5CkqivqeHLy11psfrysv3yUqq2AUrdQVAoY4TDxjEFBSojzT",
  "key4": "HW1bnv3tfDq15SmfZczPtkUofQRkVam29onktcgtPYhwWQC6exwABRmVHk2WatvXKv2ryp1Hht9ZhEN6T7Nedwq",
  "key5": "5nHcciNz44XwGtJSy3FsiZX86dDAxEnqpsZRZAtw6N712hUF78yDEE31Cqfd6dj6HKn2p9uuAqNYFsoVEfgWVjQt",
  "key6": "451dra5HoKhzXipDBfCvNVHSCkmbzB8uwVZaXjc67LSvrgxWKYfkQWgrRmjv2rZy4SEPLsiXRi4MWVsHHPGS77Uz",
  "key7": "3DLGro22XhKFiP9ZoddbFe5oAwdAqe3EsiY3cQcReKkmrwk5vFXWC2hrH39skt56BS5ps8etjM3xLDwm8Qxa2tdX",
  "key8": "59RnCYVGnao8sUXdjksXCs5F3qKq3Uh5xmdWL98p3z2tsDw54JRduxvE56ncAJPyeBE74XTR1TgD2Yx98YLabywD",
  "key9": "2FSoBHK1DmZ2gCUTm86VDH8TDhLcAXCMSBxKtkByiKM8EMbSriBnx4kur5g38VjoVnaJFYM4WvMYb6tD8iTy8ajZ",
  "key10": "2a1F4PVFXjUMpcPFdxQqZQ9exm4ePnB87TAtLQZegTMzL3wJVxwG3RUqM9Vs996TDtt37ygkHnWTQvmLCE8BaXxr",
  "key11": "5VoXVEQFq5p4rTZfj5VYVUiKMCX5Y5CKMdxJjjmLfkqVLTgMVxCX6wp83bjRcnJR2VTBh9vP1bTHSC3t9kgtnjpR",
  "key12": "4m9HPU5AQ4TA5mKoAtHmCX6WSdUCm8uEUgizCqkU29kxWEnSrsrJtFu6QZdCxWZDq8RwnsyF4borhFJAQqxixakv",
  "key13": "4q3NyGkbzNHQUZA8cT5rLfzxCZfDUhxuYsWrnJQC66sNWknG9UX5QMfP54jKjXfbuqZHVU2UkzcJ9q6o9qPoz9FJ",
  "key14": "PwXw5WNtqYTpJfGxn2wRBxKodegy9qPaXVyuiMrijf2SbAV92CWTYoTyxjgxNNwBdL6hheUsD9LTP6ddoaaA1mA",
  "key15": "3j15L46UZ2rKzG8AN6iQGDVZpbYL6fd8z4gdBvksyGwqQhQf28ouJXfLFFBVynerd9NjvqGJeEoX1W45wjUejNqG",
  "key16": "21ZowWKdSZQ7EXTHNceVRsaDWpDQWtzJiaSKkV21eLQkXx5VarTrGRwjM44GPkZs2nDEprB46F9Uo46RGbSfvoY6",
  "key17": "2kjchh3DSt7jrduYd3ejK8tY1wpVTKnPZ5jcEckG7wS5CFpJVWawvR1ihPK711jz3FHczsA1AvAFwSp5V6AomcUj",
  "key18": "57YsS4Ex4h9b7bqz1Sqcipzs39vaku8PgTxQLLJTEhDosscPPzb55rbDT2FnKt2Mwd5WpXuTb3xRp3MHuhtKWidC",
  "key19": "D38RLm4PCztgkn2kfMeBsDtsko8XtsSSGSmKbbYhj6CyeYv1rqijsTtY3jHXR4VP2W8ynUBhjxPz9EhU3cNmRjK",
  "key20": "5ZCZWw6CbYBr7n9CEPQpSo4LoQekHMD7xo3K7APSfPmwKN3JczgdMZBrgFYQXr9eqKNChjwpNz1UFhCw8BcQy7P5",
  "key21": "2hqcARbN57S5PiP88yPMtMbN5k1iWaUMCHha3pV6cAHqL7BfY8fvX9rkQ4ugpcTDKoF8Hz47uwFFK6dhuXY4EGJX",
  "key22": "4DeodBiGQbzEVzZ6M5JYRruDZXqui8YdchLy1PmZx1d1X5v1HSpjMXC3qegvpRzs8q1cNkNSv1yH5GyvgewumNEa",
  "key23": "2LMPPjyP2UZ7kGT2K2GW25nqsGV6KJWgMwWkwarvwZxZKSDJMvLt7dhBXR2CbHBvPsVyRU5juaSFb93M9SZUiBBQ",
  "key24": "3ptFycbxqwHn6sXMWGD1MXYyZZ5aPupj8mv73uovbHgfKfhyxSVEZYsSj5aXea8vzUQ3jTGKmzhMGyNBaCFsDqbQ",
  "key25": "3wq8FCHi6gTj2qUzp3368NSf6VGt3kKQbkZ2J9tqic3A3Q12GAXkzWs7j5pbdQ4b4SquDdHwMd23USKJQxuBvQ47",
  "key26": "55TGjToN8VYnpNMh3UDjNbthoDhucpL9NQn6KJcfS2RWDHzN4coZFsDPgajzV2Duwn7b9zqt8JEZ7EGhNdPEFngR",
  "key27": "5rXTmjd2PYVK1EqQqp8AZh4n3wyfMannQxr6uPNdjm3igZ71havdcRH7hNswsL7gVoNm1uN3sqYKCYCUkXPUAkS",
  "key28": "YeXBXntA676dZoaHPYyLy2xrMhMRKPH1cb67qVS4f867WZedonM5eMzCoxtW2jauYZbgvPCtf3CuCqTCi6t1QLU",
  "key29": "337ruQt7k96e5sNQmuPg3u8Umia1PdBpUVi79E6oetLo3c3WuyZmXSX3Hms5gpt8z9r3oVb3F1ZagYZ9aL1wFgQr",
  "key30": "2qJgDJkaBHTP4i7Ss5ZH2wevei2onktF4uF4cXzKVATc27EzNHk7dnmEgMGPCNniE99HrqiSPMEnMSbNUcKNkssY",
  "key31": "4iX3qGRiCUoWuVw6iDAeJ2jZz3o2mChtcQXfLHgdFLLbDa81NSPWNtsa9z3vEqqhccib7T4hSSWHq3biADYskKhg",
  "key32": "4222Z73cE9Wt2jGcaY3nTyDrNd8fRMybrvT5xrYFgADo78DiHyfpZZXvG1gtmsgnRicS7tWx5f1g6eUMy46wsCUN",
  "key33": "5JnHtG1eJXpdjYWBa2kscdcjc4obycfmnp2Shxtt3innxLXWwd2edi42eNNdwqLZ4dmGAVxExVwFTF6VbWaeu21r",
  "key34": "2kv4Q2xLLJPw45fkGEq5KrB6NXcRp4SR1WjLxnQrn3rJ1sh7Kd3oVmh4BKrwWrApfwrnaLHi5LAiJsiPyiUuXV9s",
  "key35": "4UuW8VSsPML7eW9BhEzsVCQLDgT5Gz1zMmZyPZrYqhcFt8Ug6ZFNpZKqXUHYyxiCBfPZAuwgUX7Q8wa6sZFHbP7P",
  "key36": "TzM4XwL3wQBQTiAxcuzTAhhwzZnajtVZ8KyyZjZPgPJYFkGn3rL187fW2dwNKMFc2QZaiR3x5B4tAw6pe87rZ24",
  "key37": "2mEGwGk4DSPsT6SyXMQfU9453rAbzL6UiqJ8RaBh68wBJyCBgcJZg92q1jYL6uFbxU272RGt6dQ2Jw8CpqebV121",
  "key38": "4P9oddRRCbjQMMfEAspsuyQWCTLqiVwtnkG6Pq7nApuo4mEfUvaAmWzNJnF2otq37zYY6s3UYcw1smmFYtox9HJE",
  "key39": "6eq4VGuE86vTD6dFymeLndXTR8745dMMNjE9ceiLBkGyW1D1ncsABaknhWXFWr8A86Kwzu5L8a99pfuETbtbjPf",
  "key40": "3QsnuhE3q6M1Gh6WyEkomgcUJyHhsKwC1jgX5Fd25UMS5Mypno2DGKR9dqhDxj6qa1V52bhXRmGhPrcStc9ck2Kp",
  "key41": "5iNahLsqKYUxmVM4YhvLVUBm7DrgxyDgt4VTHbXmk4Uy7tgpUbN5kvhx3vjyo54KxxnG9UK7cbXxmdc8FLcjkF3s",
  "key42": "5g5zAnBCm39jfsmwtY2MVX3Mz2FnFNNRnRVYNyBDBofkvp7aJAL34vtwBC9ynpLxACQmVdTWmX1xwY4sDz8B7Maj"
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
