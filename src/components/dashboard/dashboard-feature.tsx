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
    "5tqU3dVfbJzoLFpPQ6pZWDw22Q4JaAadJXzy9EKc7Rj6LUryKqU1sPVa2yTokNd17MxnoGZ4PxSgGpxa9m8iaoRK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JpeGGaydZEqhp97KSwH9zMEEf46xmfWiya9MxZPAVDboRrAqY2y4QhqoUxSGnZnQ5VAb8816GWo2LYv3mqxPNk2",
  "key1": "3sZmLuxz74Y6ArCV5AKn6H6kxE3sJRrDqX494B46hxrkM8DZ2CZAyozndEBEfe3adRPHSJBmuM7TU2JETziBrytA",
  "key2": "DM6NiPA43vK9fVyLEYKia9o7SKWhgu253yNoa6HpHndDQpKoEnUrKUBFwaHdZWM2ZNXr2SFYgXfdPf5HuGYiHAg",
  "key3": "5peUyAnqEycJyP2M1PqfrduZaWD9cz66jFk9MvhtysoHtTZXoQgzsonNwFfeXfwU3hfZAsQYAsT5vBxJ6cknVWoz",
  "key4": "25TdDNuSiVAEh5dXk7GJ1YPZUZd1rsZz9DDGi5AHf57SWRjtw36u6Ju6oUuXxV8VJsp1ms11cg1vYLHggfDWX2Da",
  "key5": "XqC73SPwc56nxvVjQydjiJGgrjBZCAzUjv3GeEGt9Y7LHTKzg5sZisdktwQEKMbK61i6QvnWMQW95gxu6fM8Cso",
  "key6": "vWmQmV4gDQ3jMbw2eM3kShL9TeQadkbfMHJBAwvCHaWcc9MFXBMERtt8RSbFWRS6pYgn7fvovpz3v5viGsWiHvj",
  "key7": "VpbJdPaQ9QDgG5S5hMKBwi4VC4wmb96KJwJftkMayxyFwWiubMF6kv3zpMKqJabL5kh8E5Dtw1vDPxWFMPAuyKj",
  "key8": "3qDBEaSswBte4auMT4WJ9bpfZAGynm1jUuErWDas4ijrn7mPJuHWmAvLpDb7BTedf1j8LYf2S3VB7Q8sc7CYL38s",
  "key9": "3pwhikfUK92KFbyM7xzk2WV6YTb4GRxDmaHRYhbifZzhZEKHYFNwQsGKXosP1L6z9dtbXVAnyPa9zNMroqcp8rxL",
  "key10": "4ihL2rTQq8mRkzVPeaGUkZNGr2REvyrpJAfVdAN2TK5UQ3bHsM5oDY3PwqhKau3LLH1Wg4E81krxq6GDmErBARif",
  "key11": "3Scg5zaLZSKWHbeoR8xaenZ2N55fwv65biBS9tL5i63Dzfz8ZCZ3iY3RTrW5fUNMaviKqX9xNdDEnis4aU55RBNV",
  "key12": "4gLhiMo7HbDA4MNoBG2XoVh1qXHASPnnw4R6q8RbGBunZXKHk3PvJDkVyEe4G3y4ASpAgyV6RcfYGrDG5i7F9W5V",
  "key13": "2UXmZFRDJCDsMDUdx9vZqYJJfhC4X9KFdo5iwxh8ydZvGt4Mpz2PnW1RmEnFJpQiyCu1b3Wm6mvyk62RX67KuVqD",
  "key14": "56CnksWwryfpVy7J74QJn9sVFaGN9H3MmZRLEYXN4wmrYs3MGLhgkyXn5uyuFZ3wR2NAk1eu6b7M3osbh8Czbg4f",
  "key15": "4kondjULzs1c2TprkptBLRALKgBxDCb4riVjrKZiy8yQGnqwt4oQPn1DLFtyR9AjZqanhk3Hnb27aTpgPe9iJL2f",
  "key16": "62frq2h1xcu1q2yQB8AJvtVpJkUfNTXTfYpEWjxUr4cLfRMEfN8a7L6fsx3abtRvmMRkf2yw6X8Ke13VcgBE4t27",
  "key17": "3CWBhEWitiFpFRcVVFJqb5vpBYJutcNd85nAdpnRw4KhZ6TaWHToAo7D9P3K5mXDvVYSnuDqZmiE2Dk8Dt7iURqs",
  "key18": "2y4cd5VQqmHSkbaNYFN1NsZw25XsD4PsVKuAMoM1Vz9VzDTrrCeYLKHZL4SpNjLG52zqPLhAK7vrMT15QR1mpm3n",
  "key19": "5rxSYXHwEvwdEd7Wovv9Q9BxNVQYFYLX5JEcrVQQxXU6QsqNMsBjNEdQS8C985UoV74Krg3Z4Nxgky4uN178KQGf",
  "key20": "3XzrmESvhtVu2kbWkwZDs6ZD4A1JixUH6dBp8bVHxNDqrmCsgpgAHkCNxaPT56k4iSrVciHHmgpmMc2BgPkBkkKv",
  "key21": "B7pVzqJfeyTHCEmo8S6vAyXUTjr22ujjxwgZnhro35gbEupbfSfG8HscVYXSJdUzcHGaxwsimFt63dvUQs6ULYa",
  "key22": "5NftHYeUPxN8596rKhBpE13QvJdG6PaoLGsTkttJ3T9EEtkVEoh8vj2XLiNiMmkphE6p2NNFDUTUaLjm91dwV1hT",
  "key23": "4Cc5ZZkZVZEVhqvnGNTwBPhETNrpw9ZbmqcCDHsaXituxRUyLf3mHzLbRoyTpon5Ym5pLZxfM6DHf9H5QYzY5ofe",
  "key24": "4A7Y4g9sYx6UMB3zC5VaYGMKPKDBMYNTpBZXXXXhMUU53KkUVCE5hakZYpN7aSDU6caeGt5Kc5npsdBFoqG8UjBK",
  "key25": "46RVFiwsj9v6i9CjTNVCCG5BYFofsFbW18wntdwW7Rxde4DVuuahSaz6RFHBY2YWaieuXVgKhjxgxfzwuBhMzq61",
  "key26": "3vsGaEnpHxZJ2dQXF2B3rAqznpCsGC3CqYbB9QdvjXTMrcuzAFN2e4Ci4YjBbBsUV41K4UNkkXZXuznisF6BhmZR",
  "key27": "535aRLkvb4KsvevJ4MkrRLVVyRJf7DCx4iUhpVXGN6E8xntjMgYpq8q6Ka7QvWWoJTxAfpVyWUSiZmuEbk58sVcS",
  "key28": "5R5DNLTRHJLTcp4CXL3KsmmnUoMRNkGde8CT3y8R1LKjyBkmZ5i7Dooh5WzQAwdnYnDtDXfkZvvfFGhnEiCQJQKZ",
  "key29": "2Zuu89gqLcUtZDQjD8FZNNBf9ceM2qfUSchvqHnNx9F4ZdJ3j64p3UFQrpCDPpvJnr1Csh8UsJUENVMLHFKmB1La",
  "key30": "3mWgkzwHENVxfJDmsEoGczBZ4rM2z2Uj9aMbt5Kezc54YviHXpt2NUDcY5C66BULWGSmPW7BEJJroz3aPhBNUd1",
  "key31": "3gsS7CDFH74nLUQwMfuZCzjEsx9DVSu5kJoAjQEx6tWz2QqjVjWKRoUYR5kR1GcC3isPHNZo5GzgFWCARzXHNKK",
  "key32": "3qbD2pj6ZNnUqUz3u4PvRMgpwNmaaLPJpJN285iyoT5ZSrzh4BDQrB43Vb4BhebMtysAg93FoJYLXYJWfTJqBhEY",
  "key33": "2ACXphh3yF8tjkMzfhy5HsPUnJ71Tm6fjpupkdPv516CLytzN6u2ZQtdCsnC3xx3vcU8YGfrnR3GakFfjCAf4s86",
  "key34": "ZGN24JVQhkKK6ULzuNGJ7oEB5nPh3qA8kDCTxjYAs7VX4mVnGsTFtSnPbdMUcDpiaFx2221wHdztvFuBThCeMvg",
  "key35": "4KC1fVb6XL2yrnrFdgUAMv92o48Y8zPKDAPnhdNwxvTbt3e6DTzEPhqA3X1twMf5Aik2XZkjcHunk6L45HdyjEr2",
  "key36": "UJW9oHpdFaEspB4kA7o5pF9AERHnmCTjZX3X3CWpLdZkecVtwgEmhDy4zcDtyPFC9vWwRvqPn9AWLtCSq7VsaV8",
  "key37": "WH2MJQ6FqDhFtBhghpk5nfWVq8zp3WWC7Qp3QVMtnyvr3xnVFhqTPZXDs9Tv2pgtny4ZYBp5X4T6Di1yY7FjpaU",
  "key38": "5RWHubxDEUPkRwKXD4D4EsPUdur7mmaDeTZb4EYsP3gZsBUSB2Nm8oJx8jkovph4MfMoSjH6TJXE7DXp6RSyXdEV",
  "key39": "3qbdsgHVokz6UMHiHsVx6HxkZBvidLEcprMy72GYy4537Us6B6pYwjQdgpotDXDsR2bPzrj7WwSo9SPMVN7Gk7eZ",
  "key40": "2NgpXm5fF9GL3ouQaNR68dudUo518bYLyfEweugpdbJWzdJ9EdyZipUWHmDLBytF8qpzYKMrXXD6zSkPikzx9xss",
  "key41": "DQ3w1Uss8Y7kS5Q92vHy77Excq1SgN8FzGs2xssKrKiVF1adVRa6VjDMHCZHbAjfn7PpUWSsU7nvwzcchTKXeVw",
  "key42": "5MkbXPmiHncrdwze7Wsxdni2ufZVsYG1fNJkoMzfaVWBpGHHP8SGH226TpwDjEwf8F67RfFxqi5jsmgYmCtnXWJ2"
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
