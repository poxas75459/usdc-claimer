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
    "5QYEQ6tptPSK2HcyJCWmdBBFpJqGYLZa6ZLK9MWy4sLEuD19wTeVVYvgy5YsE7U9FniqjNKZcXb87Xyw1NxyadDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AyBsHNik1xToDuPfKHwH2CUcErredp2wHEN6vt5cmfL4HfofwSiCYd6Fgukgftr6ezmq6xT549DAbJ1xeZxPrmG",
  "key1": "3neUACnEXmJtYqVnfUbYrhEcvjRNyyWBnx9bz48P4hCZ89CnMauwJpJ4W3hFMLLxNecBXHmdqjA2f2V7bhS4Xx3x",
  "key2": "3Q9YyZstKCUYhdPeJHgGnfCnMmfBTd2bGd79WjxM6s6JF1PNgQa8NoctgMeFft2W1vghumyvasx4rHTujEaconu5",
  "key3": "51uJ9dyMHxEQ3Fa5ezYhUSwaXRtzBVwkgnKgjiLn58opVnYj9zQiBae59KZ5UizSUx71SsSBTcfHh4L5wtzVsoDs",
  "key4": "4t833JinWyhkJ5v1rYwZSxmW16z1Hy1HSLSAi7CVsfT6hDEKNhP9DUCP3AtTLSZyaHHnrsqJch8rsFA4camCFWmE",
  "key5": "274kYbXrK92j3nw4u9TqHS55SpGM3ErMU3CwxgmD6eaXqLbQPwumzg1cvJ5HaDymNUjwuNbiSdbH469BefcUeNtU",
  "key6": "5wJNtvz36xfGXqL2MYesv1gzyfpDpyHFrUtohMGwDxxVSsXrE2hqg9VELQJZDuiQRi3HcXbSkXtNym4TNFvk25sv",
  "key7": "3AMu5LDqNk49mpERRkvxBv22LvFkZRTWMSBvRegLhe41eNPLisvB8Ek5bvmDLEQiBNHV7XemTM2xXBZW27ktPjYj",
  "key8": "51moQaA8vXuzXfjk4PX8crGVpf2a153gBzquQ7TdAEy8RJFPS1hKMiNr2ExGRdQfKQwxLqDbdQbChdepzWezM1Wu",
  "key9": "4iFk8TxnxhKqztUCMhFzw4ET6isqUmuJGQfnzV192443aniqqZ9zFuWYJjTEapp3BLoTVxgkmhuSwAqBTjtymCuQ",
  "key10": "3esT6mnPHETZpd1QR6z2dZosBoqE6oEpVPNpvpQkWkjP2izt32U7cWEwNBeP4XP9iHBwG97uAHCeesMRYQ7AF3P8",
  "key11": "3cjCcFC8KJoFAS7nrDAEhFZTRntaUiGU5VQEjRpMeQGu45k7JmhsFZqJq8tCYV3cbGiX8RCX3vMChV8U2bBd4RzL",
  "key12": "5yHyswzAnfCmCYJxzrVH5sYN2BJYNHoibcj8bta8gKorPn5vxprGHkB1V8Loec68aS6X5chxvBSrEbH2dFXnA44X",
  "key13": "2mUSBytUW2qKA5moFzUFwxLEZTCdiVpUE94TD6912DkndCSB2RhzX9xoP3bWCThGrXK5sN9RvxP7kmo8qBkhy9sZ",
  "key14": "2fCSWr6eEvhDEkfQ5S1tuv3T7PY3MuVZDyqahHtZG87A6Z5pVaKMD4TsJFwD6ZaKnJyQ3JeMckc8ZRtq5k16rw8g",
  "key15": "4Nbbg95vF2nudnj6vYfAo8Z76voHAmS1yKiPQGQu9VGSUiJ41AtHDGTdB1o3JFPkUj41RNrzYDkzmSbENwGMtQtH",
  "key16": "26TmwATskoHBoYZ3ue4PHLAKZwrnZSySWWieSuWaDyDuaFNgg3LppjgLwzfRpR9RYpGRUQoSzSBt2UQVqCN9WCPN",
  "key17": "4pGpkHy1hYATbHaTRaAtDJgHM81kZuBbJgGW8YtTuDis6izHtyGdh3225Debmoryrrk1YHCaTTYZvdTyQdjcbAbj",
  "key18": "7tTKQdVzPUuJbv7XB9dWP73Tm7Swg8RuE1iqziWsm39p7oowX2npPARTtgrF998fQUTGeezsn355LTETqBD5MeM",
  "key19": "49CkRKVpZXHKd8vLUQi5YywG7qu8B3MWazojShzU1d3SVTSg3zwX5twY5Nu3ygQUPa7pW2ksNzTUW9BG2g14e9sE",
  "key20": "4yJighCBg7LMseTC5DysF2UfuVPwCK7k34fUPcU5PXNDA72TfhiLAv8prV7werjGapHe7TMwG5SdM92BDK2H4xUW",
  "key21": "U1B2h1YvrccCmWwC2K7Q6YGoSag4rz5ocBaSA6qEamz1KkBncSzar9p37BPasBAVyoTvzbcepN2yUfgF41Vx9fi",
  "key22": "rFcdrfwKsr6m7Cvy7YFUy6YT3SYEmq2B2mh5JphDfqYK5gWfbxAXrN7iy64RjJCDZC19imHuMNT7ni31ZW3WEQq",
  "key23": "4f8V3sTEk9aCxawKjV9nBBWguDPh65V1nGwWHjGfCaMMw2HwWqJs28u7nBkoaYT7ZcdbLNUzbirCdmGPjWQGL9F",
  "key24": "3XWqi4M9t4CTQa81NLvGLHTgznc1nF2yQ66aVeY7wbwwmABCvJ3N3vep4HiPbY8dCcB1iDwoKPhrbvfGc4NWgdec",
  "key25": "2SFijCCkNoQfYAY4EPz8jgzZTJY8iiLJiiSA96fzigHnZ8Q1yz4Ks6BiFQfnKqU641T1TNsYDSkkGv96fWSwBFv9",
  "key26": "5oZdwjBhWTsMvvhBSLj9ViZsLPJAj135YpPEkJwWFktG2g5n3YkzC7CbhWVqXE1S7hD5BB532dvqKZhp72EyLYrx",
  "key27": "3imijsHQBYU8E38kMyifjXEJPJCFQCV8ZHNbFmesyZhFhPbHNC647DMFudDy1PfFu98Z2bV7Ynac75w1CjnF6eL",
  "key28": "5WL3AFDAiSjQBPZvhqxgPyt1VjaHSfhH78u5GLnNm8dYrbK3XffGyJQcYL8NaMzVgjt2GVDG17y6Y8ZimzogBKsz",
  "key29": "3skKif8ACAkCYVcRJFtEJfRsfiyyztsScm7Uaq7G8RmomeeTYcV5f6UNtW8tAZnudjXEjdoXMoFQkA4t8L7df6rD",
  "key30": "4S5BPj7babB8aNEDZCMZGJwvfcaGrZE5obRMcmntdgWUz8wCSSVi2eFbffqYAj12bxq62JQDSSr7az14B6HhKrSX",
  "key31": "2HEVaiqCBkmq3Nd6ny5g8TJcjUiDxoSc9Ni2kMfCZdUjBEJMge7gXHcogGV7RvdJS2VwfBZWP5iJpAEcYyZikby6"
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
