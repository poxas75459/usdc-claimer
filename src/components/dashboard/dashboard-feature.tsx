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
    "5iDyR3tSscppD1xGFn1G9rVznReNU2tZgPrNJDymPqeFmw2cS55N5RMdYSZqi9CYFt1yr42UJb3knzhigX1xiKW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uDuHtyHNB8G4R9N2bDLT17C5u8Fw487JW73Cp3Rin3hhSTEz2bneKQbe5BvmteQPkZPJRkk9xLMdg7yac17mxLk",
  "key1": "4HiG2c7HQyo3x2WY4bkseGHXhR5xSqaYL6iumnXMZQxcf7en3AbHNqGU8uW8ChZE2ruUDvFAu7YxhEQwTyBwexAv",
  "key2": "3ujDAJU22g2J9gNZFW2KvWPrZpMXkTttm8StdHE6Dp86H5tuKMauHEo8xYD8L5mgWb41qbPn9vYC3Tk4RmnqGJ4",
  "key3": "3uRYmBsjA84srYmuVKxf4TmBaS7TjeyTrzq3f3eFeaReGtPz2Jq1iPmLzvTumwykfnrzFzTz7bxRenRY2z1FRRGx",
  "key4": "41dBUXaw5iJzDjxgCrNhrCgo8ich5exLy9BjtZvzcVTtUrqmzD43upDgRoLSHYzqRE5Tanas3tZT9BLwp8KTuNTu",
  "key5": "4QA1xoZ2zM9qxBZqttR5z6wvAoyPfFWcEteAw5o8bW8uWR1WiSUbe9w4a4CwjLoVradLS3jsQuce85HQ7hDYe2kq",
  "key6": "4UhRKDYbhy1Z5KgJ2HTJ155ebHyPhoMw9Sj88LdaeJ6FB1sQFPWBCpKbwYo17Sf7QNtX6Pw4rmrE3rAZcPQUMuQh",
  "key7": "2xCcykvAY1mjUP5ABopHm3JYv7NuGokVmFFutwJ2pnZo5YSvTvHkEC3MKQNSeDeZFhnrYMtVh9axt2HPB73jKTJP",
  "key8": "3QSZ8LNsvfFTbZskEL5JYgqUUENNJgSeztDmyEusocKt64SDb55WW6smEaZe7Jg4xSYRz55bj7MPEphczHYJhUPe",
  "key9": "4Aj67diYtv39M9Wi6UXauty5GDa5EDZ75eyBY7KcwLKXNEPhCH2Rdz6rLP2W5sw5k6K5GFt5XUkY7u36yE1PyxXu",
  "key10": "2Nn1SdNarhsfuHbxH1eECQeVTnysiiAVu4kk4SQFgnW5z3EyWxyE5q7DxCvnmGZXLmPydAdTnqNX9NCLtL4fi3Hh",
  "key11": "4rPMS7UDGPuiJfsgdLKVJBYQQnRyLin5QN8GXbRia9xSyaYCExjxjJpwSPdJ8AbFKCujWft3s5xPx8oJCXQxNQQB",
  "key12": "4JfUsTho7Np766QtMD6RdwKmZhkNkvm6J2zzKiZpQfxCHi8Rah7jZ8nRquPtUwjts8LkPM7wnsBymjFkbEmMYCgg",
  "key13": "4GoEoCkDaH9Rdd7xa4DJk4FzhmbjH1uhKMQm37sxEjCujEJEctHyWRBrybGRH3h6uAJuP8gHvk2RmobhWiMsrdzs",
  "key14": "28skabf3Sa56wdAv5DtvBrcSviEq3x6UA8YLZgk7koiYrkKRoTbPBX18t277oj6udCB8Ji6MKDKkHiJCWENC6uUt",
  "key15": "2Ce7s6zxakk4gVmdLFHEPrvfwEbZNvhYeDqqsvvpPkghfFGZG1iLWJ6aen48JRdhTWhQpU3K2gkXuf7BKoQikiSj",
  "key16": "3o525smqsCpxorcxxWUEpangAY8gJFhBHJQ2EPU4o28HvxJjjKV28H4R2SiMKoaEaaWyeZYWc3f54hsZkY3Xxw1J",
  "key17": "2RzY25oEq2T4LpTdXrooPowQ85aF5HbJWhjd1QYma3etibDg2TuMCz7VvNN5CmNJHQ59sHAhvcvRBH3P6TRnEPGC",
  "key18": "2thZxWUhDWME7xxDw2RxAiQzBwAks9Q6Fv7xmbzxUSggJu2fThq5pguPjcsFjsca1uPdgdrDzykCn9xcyAgapG81",
  "key19": "5aXExtuLvPYjSy3TCfR5LkXbopVTfyAjEYfeozs3j283GejQcZbXKoHS5Hc1eWyCPf6oJonv7K51uv75x88P8eEA",
  "key20": "48kr8ZNwYpzmEQSsDtUmKfjUWeU7PCGBgE2bnmnujKL9P9Uy5cD73W9Apn88DH4iXURAAdkvVdVVy7QQtrqtQRDZ",
  "key21": "GcbchQtTCqmPuK7zwvhc4zXrmgwb7Mi6jBHHu4gGPzbAqYRbH16zVBCiTuYPkeCw6Yeuomrinvko2YQXYbijYJS",
  "key22": "27h6Zuud9S8AWUPZ6urtq7VXPhBSXUw4e5f1FLAmEpZtdQESDR1wXbnLyJGGf5eKT9PSh14vVm29jmhgsBnR2GK3",
  "key23": "4gnib5CFrxDHWp6GBpJxf9bC5shPmZtVN966PULCfABNb2ooALgVTZAsgqvbTKrdrQ7bAwCxcAEvDwZBPbFtAJ9U",
  "key24": "2phSRdKcTiZszKUGHoX6heUQ8wqYBYLEb8zamDNXgPUxonZA1HPgmcHcsJF4qdaLtfdVvzarGJWJJdGRwzaYJQ1V",
  "key25": "4DqJYN4cGWHP7228bQgatRntcqkG18nAb5fhCjaQUZ5NqDaKcPzG16nRCNVQ6NJhkLUJBv3ZTZQUSmnvA2Qeu3DK",
  "key26": "3yyZmwywtAMqrTjeSimYiK48MjTRB41kKcJWtHKfXX73JWUbDvhqtrAdWKbvqJE7L5wdiqbYUNCNY1xqu1irKR5a",
  "key27": "ZzCAhvbrZHxrpCsvzxZsP6q5rVUXEqEVpxWd3arXEfQZmUsgpVHgR6dW5rnY7aTm5e2S87wgHSvSdiUfuigvHVu",
  "key28": "cNsVhBax2fQMe9KDt7EaNG7SG4b9QdCDm6Mh9BqKus3qtkdAMUmhDBRNiw3R5Jjf6ZcizeurM5iqLz7kJKgH8dD",
  "key29": "3ysU9wAxRGVFpLuB3P8ac1NXkTf5YHks9kdr6ruVjG1z9xKDu6ioU6j9YB3nyFbsQkeWS4npRFgVR65qFizhwxi7",
  "key30": "2iiBKDa2CJvRqJZcDh2KraioZyQo2RbWPFyvNRGKJ5o8zXA28tH2WabfPBD51TDiBAb93UULPT1D1HH4hTPj27R8",
  "key31": "7AArZfZGHwyDBuPxTLWzBcT1kHPVkA9WmHvNgqhZdSG2ofw4hPCLHDsV8n8oQB6LwMCank12BkV3QMju4DvRMcr"
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
