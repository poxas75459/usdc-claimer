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
    "2GEhDMQwub3Mz4nTUTjMhHHG6GEJ6QePNSEX6cCwR5c2mRcnYT5zZKB9jgwkQKJ1sNnh4vT7QeZ39xBxA2a5AHJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PxnP1rwKLELMzL5DCy3ekXCtysJQeWYZ82Ugf2Tr8gpzPd9ZCqi8n9YKrsj4LYaSibJojTzHArAVYWL7gzwxFi",
  "key1": "3rtSaAJyGqGShjeUVCZxzYrkHrX9nS1BDnEym5wsQ1hapy2j1uDzkd2qGKKoF8J6Ms16TGghuMJ1KGa6GqzsLGk4",
  "key2": "23z9MM7HXUM9hUgLdSFHMVRW9dEqXTk4eLUiP9Gd8Ejy2MnxX6pnP9Tgs2nzZ5YBoEHsrvDfnvW9sAtb3rzQuMKd",
  "key3": "2vhoJtkfPi76a3Y59MchnXvugbsg5BnwgaMeEiYVMkfPF1XuiBvvpKtz5QtGzyn4RMsucA1W9yoTUug9d7ufG8Cr",
  "key4": "3tTT9fW8NZW9vwk5TT6cVuAGJsjqzvGqQYB1oxKjZsqHJYAwGnemiLaovRDriUhwpXyk1jPFAAvjVfKbSMtXdMFi",
  "key5": "4ULCkQ6F9C1ShAVWvyCxdieEUkRhGtVtLKDmeWsu3gDaCPx5H6PhxotJSqfxfhK3doJMtwsLnf3WcpSdUU25mqnm",
  "key6": "22fZd111g5dXpcWPBuBPDYMDqf4oNqkFmjkkquyJvRkeMrpqZ16zUw98uaUVTkBri9B8be2WQ2JbXZdjHj3YwH9i",
  "key7": "3wemNFyD9RhUA9ZtWjKrkMSN99eKMmqfqFyJeQ84Px5DJ4Ytv2NuQT1cFpaGVbQ9uBrXgE8chwoFXnyVVnjQxmHY",
  "key8": "5qCc83FDwuRs9Cx2ez7WNT1fNBduBM72y99EFPEh2siG6FfCjB6q5jzEMaXsdPaZbmDVZ33KtENxDK9BXQDny668",
  "key9": "321zhojTy6PwmQ6x46kATXymzKQioGGybSXitFF1MT2sVcYAMfyAk7cEPjyiQzeJanHTCekupZt56y6DYCSwAbuo",
  "key10": "46ELmCXYrBjDs8tWZeedwjbAnyYYMgqPQHxXZHDT5xq4zuCxp5cX7JYcjfyPmaWLDbQwgWp9vn5222e9Fx2nHud",
  "key11": "4ojy5wd4DZ4oF7pejCtaLjRDJEaRsL7pofAdUy3UEFE3BB1fkEhQmDCp6TaprPGzmvXYkJQxNUy6BhK4GW48BSNm",
  "key12": "3kjm2qRWDNf5Pmcmtjew89H5TgPJUrHzEjN1nuBg5XktouPqaR9ditzEXjtJMr84SkhxbxvBidQ36qr6GEkNE16w",
  "key13": "3kpaMGKiFUmuAZfXLtwbg7vtvz4dcoEcq1BzsH1xa1vRHMEJrwcz9oacqGYgCPXfDrrsxDbzgTzzj8M98UuJJAv4",
  "key14": "59huz2vrk8isJXQr8Bvg3Uc89MvPayz7HSTx9KHG4YzzpJC5TjnzbAxP5TzCJAJbrQwDLnMUS5jxAjqjWwPqyuN1",
  "key15": "3qLMqTxWFQtz2FqDds4i62CgzSVZkfjtp2BcxGLuR8yuxBuaU6PNn7U4mGQiXzgw6PdAHHKzTFyTHCxF9vq51xxj",
  "key16": "2WgcPSj3GRCZyuoDdo9LQeR5e4iCYN4akZVWint2RWtRNp9Hwh6pWKqkPMR4ANFSyoNY8nw1SPtnc6ExRmSdyawz",
  "key17": "5fyzbnrXqfCw7EAdSBT9nRkav3fAWgPaJbDXGJbuTdwEiwKvPr8dfkPqWkG4ULRZfZwmuqKFv66NFEobThb5mCXs",
  "key18": "4WSfAvmW5m7HU7iEu1PQpqXs45bQhcxr1kbriGtHTCyt3uWumnH3rRkXZhR2vE8usiMiaBkAmgc9tczYEz6xKMuS",
  "key19": "5SH7nQW3xLMaFkFL4XmYuo7ShTmX8fM3uuZLd4dwZSLCcMczTss3nQ7NRxtgRYwD8oehs2Y2sXfaTcusF7oxg7wV",
  "key20": "3kaw97KxyCrsVCt55A1zzzvKqLQzGzeUYqGdwJp3oE1YgB5DsE1aJWi2A8CGAQk59srphR1zrQj7vSG1jVentUU7",
  "key21": "27r6EzVkyyTFi8d4S4VuVBZkB5hesLoKU5vzAQ3UmqBdzzqmwAJDTVF5n5yempN36jxeqUtPn2VUWPYFd9Mv8gBP",
  "key22": "2ja9LAytrZewNGrnwH51vLJhxFWUmcqPrkUcjmKQCqvimMztp5sjHgTGkEicn2piNqyv2W2X5Jw7Zu9eVE6qj5xu",
  "key23": "5sqb41fMBBLGMv8tMG7UcHPL16bjvZknCnDSJGmVuL3jYUuqx3qdgZNq3cNrMER5JMwQK7xFdAG1V5ikJWzV1qqd",
  "key24": "4LymvEvhGfLmjXwTjyS9ucfxvwng69iUuwPdMxWLtHahkpU2be7xg2hP5d5qDT7eS7frYTTYDGRyKSKBKyaPgsXE",
  "key25": "3iDH4DFnudQ9326dpqViwPPu3C5kZQ7zQSEya9yXN9Jo3yjw2APU2sZd6YJPxJjiN5GZL2Ku8ZhNaoVQWSjFNmFP",
  "key26": "5SFLN6p3CjWP1yZLUroLPw42MPSYrVuMFHaGmh79JQGgTEFvqyfHTStC6Mbs2EMRhnAAbBFJzvFsUgkHzMHMcaBm",
  "key27": "4AHLWSLuPXmBj6yJBEwYsHLccvBTys6Ds8KnhJwvVZtz9D2Kx2veo9FFJq5cK2pVnKoYVHqMfLWJUinYab9MgHnE",
  "key28": "3E5es26fnkGi2Z396bWPHjb2C6KrWxqcp1eFJdxuPJDZLWZ2CoES3vpBRws4X85rtEL1EY7mbmyYyF7v6MBdNrg9",
  "key29": "5ZYa2BNmB15n9hYPgjQKosXptPGehNNiQjuSRVTFAdJbxAuMUb9TyQmZAurBuvazU4LvW4cGTj9M2d6airDCEaFD",
  "key30": "2pp8pbygXh1euyyPrpoQakhiVCcM26vTw4EgdnEx3wbEnkhsX9YsD7ZcxoAMLK14XQaHpset5pNFQkJUHG9S4QSX",
  "key31": "2fmJa7JAr6hHtV98JkvzkK7TSe7DEq7AfwhJD9BZgeRJQGoiiKr9J6mTEpFZJDE5SHCvvC2HSxKb7ZSZKrU4RbA9"
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
