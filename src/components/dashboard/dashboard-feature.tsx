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
    "3dVeYy4h3ABrcJEWyAaphHALMzpShJu83HbzxWKjgAV4T7caxFLM95p2TmcS3N2RsvNShykhDHDiDYbFxDb8jMUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zocKe1kWXtJGiboMyXwzoG2iweibnVtGrvTAe7Z9zZgCjC39E8gujcc7gqw3RKBHAorBYDGXkrLhLd2Rffg56a2",
  "key1": "27RguDZr8pL5izt4CmN2mvC2xyt3HwMyiA46Ysyuado8X6ES5j82p9xaLF6jCEfuQmNvYoaa1r2NiZcpUKBM838Y",
  "key2": "2hgj9h4KpxEaZ2AeR6mbFjVzPhUZH4PEwLUWXhePR2UTqW1cSgc8WR7TeL6qTK6GhvuX5ba5ESG9hn6RrvMoWvQJ",
  "key3": "2KeVK77rBrhrePe1RmBvtNSxd6LYSAwvxmURHvZ1WZhhveAoQsYywGQn2WEza8fhFfpJsWanMyksp4z8zTPQid54",
  "key4": "ba6BSp55MKLVXZ43fVkBaPEtceLckDPV1Jma9JPZ7Psxm2nzCJAUY64pReouaCNYHsEH5jxRTQ7t83rKGooJ45H",
  "key5": "4zcLy2M7Sr4izbi92Qq1EKeACgZ1mxTeQZQ4WLn4PCHiPZBGBW2HdenXaf4BFLha9VquvYZBpAs4FKv7xH3ZzHaj",
  "key6": "DqPGFMP8kGia1KtHhntQAod9arWQrvuYa93DsyaHvneitTWMn48feJg8g2JGWaZpqywiTTK98gpJCukhAAuoBTy",
  "key7": "2NV4tKDYmJjcngApqTbB8d7oTYMnTm9QS43DLqaW3J89AH25Fxc3UA3d5KkQRqVq5c1EMpUSbYAWybGJqoYDBHr6",
  "key8": "WGqeUshb1cbRvKb6pRncSAyUeeUDAC2QwW6QtVaDKNYszGj5xMMtivCuetGpFs8BsEzwdDN9XXyKPDZykxsenJm",
  "key9": "wXtz7AN4fuQHpCk9ZAufz8aKLN6tNJUXvuqvMwr6P9kk3kQv2P6s5foXutEMcmedm9yhcURc9bBuakc9son1dCg",
  "key10": "NEpQNcK37NS9RgSCV2QimSf7iGtXnXz3AcFXAv7obFpnHzBMmBnRYkX31x4Ry4Bgfip8WDFB183XnxSqCuXQwkV",
  "key11": "KhV5yTCAfZw4FXXwqg5i4h6bprrj8KcieYFxdWYizizSDnXcfjPAC25AcURP4kwhLVg2eUrbjrT3VcujxCdW8Xh",
  "key12": "4eiKK33ZzJfRf1nDLTpg9W9SrJ5kzUAv3Ac18J2d7etazZUQ2z2dXQEQZWpZgGQwFn59j8GBy1At7ZKWsVu7ZNen",
  "key13": "3pHZzjKgQFydeZXBAYrQbwUMzUfZVt2KMZ2rqfFyHA5A7umGdwomeL2Kw1iCrvge21zD3eSLKq9rDpxMvLHnTAwu",
  "key14": "4x3Fs4Kfijt6KgNbMuKTpqdRm3ACA5iGFrASWN13zeXcUdxfK11f8BNcQkcMkjFrS3vWn3DB3pS1BwAYyeLy9WvE",
  "key15": "4rz2at91thNeoqsLC9S5xW1kyCBm531j4hNi9U97W2DoDgfBMSmEJXpk5Js8SLbHKPPw97HmQdGzshjeGW8hh4a6",
  "key16": "3EenPq3rcdzx2atQoxNNZCf7bESx7RwQwWqA1Krfpa5ox1ZX9xqLWzPGzei1TsPDJLHo9u45MZc19hRRMj3hVMEX",
  "key17": "4PA3TQ4gKzne6uvnRsfbtgexsKJRVY9HFm3BX22jqoiHtNYHgE2sVES6j7bqWbyogKuJGAU6hVk92mGEBU2DpZBf",
  "key18": "2iRhPwvuDYqAT4znFQBa4j6JvFAbhCrkRjq97eFV4ckP363A2bZXEcRBCWD9fvHs56qiz3zbPy5UaKisQA2hUCwq",
  "key19": "4wjoxaw9tJ2CUEEZ1K5WgPQDJLYJKT4haeEsd4Fi457TBeGAQLEc3g2yZSGbMdfc8g9y5Z9NfbtQ7EZusMtAHUHs",
  "key20": "43rTjamHyU3GGFUMENZwePjYUinTzHaLWvTXY4vBcNsbhEUWGjePu1VRv9pXJAzp18B466Ai6CT5DxXzXWpJDc9k",
  "key21": "4eidMyLzh3Wa5tJjck4HHqFa4XiEfcPpQ7RDfJ6AL5XRyRdnqc5NMJjQn9q5NWupZ6DWQWTNAzAk8EiVTqcAUW1s",
  "key22": "5YUDJ4cKY7vRPWtgu2hobFdGvk4hap16QyZmg3JWQqPkRPg4m8vvkT5LgSbWtLUewKvfBEygan6A9oLdg2UHQupx",
  "key23": "3CayRfvEBs2hZJFo6yQACrhuJbXCBkqU5GY3hLmVNkZ5kfzCL5zeowJdFSPB4c6QfRotCTCkG5YxefhEJ1navZ8f",
  "key24": "5ABPo9RZBKnKGJnDDVCEzjphEQMDbK6S2PW3sxRfe76vJFgtsL1yhd49fJpudaH26QzLzWJtUtRKVQg6hEHAjY3A",
  "key25": "5kXBs53W8XsJSsQtAA2J5EQwgB8SpNsQQU5dqwvnEcCwnDAyFw5Brdja4GjRaXEXJu6KUFERDx1CTUUbJ3gsDjGv",
  "key26": "TJKM9XZxtQA149eEmiwWaNVpUh2YVs49UKwLYpoHigcSZRqTBw7zWYe2KuACgmBSRJQyV2RqPu644vNbK5dEuGw",
  "key27": "duy1FsuHvS23J7j4WQLL9zxwpgZyAHxM4enfPP7VGx1hNmv7vA11fzJC1zQ4FNT7kVTTD7CRAf9y6zHgyodRmZC",
  "key28": "mqLb8xUS7xbWFafTq73k7KCpot6BG2C376k14LKv1PbCeWyDs9UAZJNxhQWGr1Hp63Uq8PLE6jEGeVs1uXPJVSr",
  "key29": "g1QbZsmtEU3tFgDqw4t3yc3b2NebWVtbtFWmjkiFLU95HHuF1SsHwnEuVQudCCuWkxzWCVSSNZPx4MUA9P2sg5j",
  "key30": "JUGbZEU1ZmW4th3zj7vjgqkycB2jH8f8tT4dXV3AFU7GRenyJxezYhshpNnjt44EqyrEovMHZmgUoAMsbP8aNdm"
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
