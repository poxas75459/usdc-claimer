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
    "4P7fBE3bNnyqar36T2zxZpZyP7Yxr785FeQGTNXbDDh2wYtEjT9xwHHtjpBYTeWmikwV8y4AEVc5dx9gcy5eGWed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zKhB4bCwmG9QHFa8LEab34rDxi2KBd5Wp8bzF2wkp5sQxECQCdowWxzERw5D7Ka6icYJmoGaVx81UNA8sAjriC",
  "key1": "472FZ6733c6pB66ntXTst4SiTF3sXxPQcqfmD69UUn7cqH7zmv78qhqGYckVhbkKJyCJc8Dp66UZEZTFnXFyvsDM",
  "key2": "2Gp9McE62wBmxc8FHuv3GTxB8H5TW4DyX8w32B1gp5qbTALU3GneELwBA4zXD6ToBMY6fqLCEcvMDP1xy7LuwRwY",
  "key3": "5DCy8pJsmzhabCf9uHf3QcyrqxmjxF23R6kYe2ku9tnnrSNeLSRiwPxCDYx5R8jS6xffePiYL2QnPsfacj17mEDm",
  "key4": "4VqwhziWSB154oVqEnPz7qKrb88R3PT8wZvbs156fn4isuVsjUmEwc2x7mA8VDxca1qVP4yEGTFvnhWW6QxJ6D9L",
  "key5": "52oj3nTJT15LyJWuUDgCsHZdwFpmp2sUyaaVBQx8Q5McmbDJGpkigSHmXWYSKiLniDGLYy54sQzSJHwPhfz3SdoW",
  "key6": "22QUBuVUaA1k2Yoj19UtuhyQHsanBXYvWfzsekWWWSSMrjzN6VU8HxNHWc3mcYi63q6yZUiBxWa42e9zrZeGvEFy",
  "key7": "314GFDuvcbtreaL9xHcm2isg3RpuepJpBaTsLcU5jh4pN4fLHbREN5zBw5i5MaizNQ8gDUEd3Betohz39s5oBaNo",
  "key8": "etBVVDWfB5DF9q97dN5NFXbYU88AfzCtYcoSrKTutr8izTMdzx8ojqw52pYHV47c5wa5FjeBA64yanggm9NdTY7",
  "key9": "5KF4D5pWWQnhWM8YjDJqSLMKThGm9xsSH9VXfmh6gLRJcVougkVNxAaNi2Er474cava1yebY3Z7Mk4KbUiRB2YQB",
  "key10": "5rc3Am99rkk8H6HLgxKmNs2YbUXRtiYWZmcMb9Kyq3nYaNrEvpm4ofK4UcGqchQajwGrjj4qL7WcKSNEbgG2BbS5",
  "key11": "2zMgVV5DMFgePz4jJNP2gfibkAMYqwhXw6Rurkd9UYdXR7MjSYtPkGmEbbuazMUFtGXtP1Ebxf3edL6DNDAv1cC3",
  "key12": "2xKr7UKcgBda1qyL3Y4MmcBCx8atZmHLvMfmMCF9UZijCCwH9m3cu8q3HfKxbZDuLvaenojFMYnBptBEcaTxogK3",
  "key13": "4Pc3ENaCEeKgtVkc5L5js8tRb6AdBF9UzTeKgcZWujE6tawfLx3pdwSNuFTMPPKjyYgKu2avNui4HDN3B7Sv3PZr",
  "key14": "39NLWv7X3oSgJ4mFWMttomjQ57GnxHaujyY4Bnqp7pkDgNxS5NhCwWTASPuvzJxvjkXzU6RgTeSMFNHbwKzHU1jz",
  "key15": "2zjsZJRwkixKaCR8QDw9WVrnzgKHW4DKLZnryK22v617K3kQYh1wpMjwS8XfTX6p4UR3kMoYPKt4CU8ooniiRBxa",
  "key16": "2AW8Sm663MXrfjkXCG9cmCs2tzLzS72x74PVDm44tBUF3ZPyZRpyd5tVJ9rXBW2MVMoGQgPvqXyawXKrVFVbrHNC",
  "key17": "kKAhGycTreN5xJP9oREcJDf6hMFEGMrquLLf9SwaCeReJH1XDHB7UR5utCqfFpFgpMrvCLF4hrSfVLqVGaYif7x",
  "key18": "35amVh5vzSQJ1R8PiPKndb2A421hxqwwAjMQ3dZXsKgwityUrqaPQ9fny8dehiMsf24SCVmPp2b3uuRr42uU7FxJ",
  "key19": "2Qm3J1eZa66GRG7Jik6y8eKvuXoziiPU1HPHQTdwCaTJoapswrfoWX99n59SDDN5T5bkcyVhkp6eWujyAkJNfDZU",
  "key20": "5YyFYGihtD2jRKcA3XPVdTH6CQBJArKJakTTreSJrmGm2YLSJbKwgj1HuvoozNSFuVhcjBZbcbyAwAtgz4mJ3744",
  "key21": "2kM8rh9KoMGneGn5RVhbRC72vPDVmQf4StaZpMh3DbueWKbjT8c9bRCV2TJsBiTjBVPBdkc6Nbzeec4kueCt4it6",
  "key22": "3hP9XXsyYq5uAaZVu2dQe6WKAP1Bkc2PVjUhWL8ULr8fbdBUeXvKn4NgMUt7eJJGm7g44swaaRzNc1LiHtQtjdCf",
  "key23": "38KUze5CcujGm6t72RWKjFqfhLBhrvebVrGz7Fn5Hi9on3nfkLNre9LopVvKG79Ai8QzVDpRWnt8mnwD2tTKCP8A",
  "key24": "wuNuWPnLZmEpbdzJ5uefhPnu5ks9dgQsRnHdCGSPZCFYUuMqaCKPaQsjad9DHdAaDYmJHCLxgEfRQ6AS4vk8NxC",
  "key25": "5FbzoaPynz3ybCb6Wug3YiuAUowDDkHBZrGoXwMaxCcKk9CCJ9KtzUZMYjoSdbNkti7yXuwMXPiysq16MADsu2om",
  "key26": "3wkHAqLVBmZNLGXkDEhUYfSsqZdjU3LxM6wPkZ3d3xHp8o9wxMkyyxrwYARU5Bwh7K7edNTsedhoPHQH3sNYWCom",
  "key27": "2qp9kAAA85bjV5KgvwP7Ro8EM2xmfi3xBgZXrH6SHkBV3SoteB52QWyJbewcjRpdFRjBJEM1M2TY5jzC3JMFVJty",
  "key28": "89MFugk8JkWnCFGKDuSGBQLvZYeqy121aigZjGwcw4deVtwStMZdDEGeepcgxqXAceYBL8gKkdP8NjtNbgLwQJj",
  "key29": "3WPHZjZsLrRoqJ1Mxzh94KH751JPY1gn9hqqGu4PJGcY9SnDTbRE9Fe526FKninKySKpvNENscMfdie6tHAmJzrT"
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
