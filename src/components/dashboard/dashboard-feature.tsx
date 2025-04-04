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
    "5R8g6sp9asSFaR4WstYRaSWaRgG4TPzDhgCWB59MTT7YgaKShJCoqEasJuFWngk1hkK7rt1ih2gB9cqYqgWaJhkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWpwokr86fH6QGgWU4GUaDaY3aWxpZCY824ZqhWaXBE2swtP7R8kZgnAqbju7t2HNVgEnydVQn9GtT3PP3vzshn",
  "key1": "yWXB5wAHb8XnvN4rtwCadfsXZ9H8g522fvxPbVUnigTpX32fudqUL8viikfw66ddWPEYzWLo9GJ7agDEAKuFVaC",
  "key2": "5dHupxPBKBr1BFM677YjSTk1VRaw7uDdu2waaEj5nAuEoBpsseHhTWNp88QFJLPTEmPwA1Mn3J71UmhQYvebKrrX",
  "key3": "3fnHryNYB3DuoUiQmaHMp6m8BfMVdrAd3hZy4WesigmEuEeJbw5vKuBwMi2EXQvoBnTpEg4cHhNoVWCThuhqRV6K",
  "key4": "4umfJxFyaE59oSLvGydBahybyiLBF2czWXDzvfBrJQcGyJjS7foFi5HwbTZsNLmqbHewyrTuXzR8RFp8vfocyLjB",
  "key5": "47KffT7F6atar4PMpXwHCVToQUAqWrxwoGD9bgWnmV6cxayCsBjFQp8gzSthVnwp5Ri6bxWiT9vHqVbksnqxaTPT",
  "key6": "4Gc3SDMBvAQFZQdh3WhR8QmfR87ngRFKaVgh4wzogMANhQkp9Kurn8go9KCvtoNpRHgwxkJ7Zs2QrL2vQAPcxjRg",
  "key7": "2qqvgg88exFdXPD6REaJnfhFCfm1nYhvVDbRPUY2BFztoeVxG2HM3nYvNHduc4fbrznaLe7LpKbHjukDJeC8U23Q",
  "key8": "4BrLc8SEthetvL39wpB5RotdzRhG1bRmEcqDn8Z7xbdstWzRM4hQR4ExaYgGhGBYjTBYhdpMg5Pjp48G1UdAtv4m",
  "key9": "2j92AVg1VKjyMtYrMf5A9YQDXA6sjp94hDDZhuYazwk2LfLCzcLxzNAmhQEcqkKL9z4KWwCmMFuqwqUhWbT7WkJe",
  "key10": "23PApbHmwhiBx1QKEoE9QkVK2gujLmdg9pfmcyN52SviW25TJMPPvawAL4oNNMsS5dMWWya9mR23JNB4ej6rXBZP",
  "key11": "66US4zPk6g3E5DjbYBKg9W2PrkBs8PceRFHgQzwhGPBaUPiV2pyWLExJSLPsERKwntY6TjrThBDYbdxkrTKZDkFd",
  "key12": "fREzhUTPab2VLp3TqxjixcYCWZrAF3YYxufQrxQQkrwhxTBrZM8B3ekKTM5yLtYcZFTuCJBq7rPRaCnVMiNvydm",
  "key13": "2qZP9PA87fqX89cDhAca5LZgj3sgSuZ9RKsoEsuoHXF6x1RgE4UJk4QfWGUx1ZXSBv53TeaqjEEZdqKLtrgvwMiq",
  "key14": "3H5QZAnKenWTHeskTdwz5U7egrb8eUzgUmCgypNtHyVTNBy4n5e1Tj9cestofM531mMYGyevmWsdSMPT3mgVkdSv",
  "key15": "SkMhyZ6tVVR6ws7va39NAhTm3YEb7G8BFf5H2f2AaKv4CwgKRPQHF69kBr8U3bphMhUngd6mB3WGf5FYhc2FhxR",
  "key16": "3w8izqR5ENGNrQvuJEnF4B1dJ5AuXkideKbhzjK3F6s5ZVS7Ncfajj64DCqeQx1WyeLVcQ8npf6KQ2VwUgVCsS29",
  "key17": "5FRzze43VzJHZvTRvgqVZUaxEFDbJXLVWtxgoouyzWhuXkU1i5Mg6F2XJcCtc6WP1CYSX7Wih6byoH7WcXXCfvu6",
  "key18": "XauCDDEBhwr9w5DahESkxN5Xey6TpsUhNifr9FevM6JjoA7E1zkkVQypBxSoApHHvmvU5cz3s911N3Tk3dCoQvv",
  "key19": "4K9HkQ3mPpQyRGLssL51vJRYjeCBPizCXYXPWKzZrqsWVS4uMbB6D5P96VQaXXXxPz4HM2bFBT1JptUmNuzAPBpm",
  "key20": "4aMnoTQCRZRzLxRnXVNSNMVTbYfsofpxQynb1xP5MHiyjqKzFiFiHf8NWqFEXBspYjZLbs97QtqUgUGMXo9SWAq7",
  "key21": "2mvWvxTfKbDSweugbu1G9Db6VuLznnXQttN6MQffNzdb14MQcSfm3xn2Wf13FWysPnbiqFePKYRx5g4TazXV3XY9",
  "key22": "5fshoT6KrgzJS8cwLG4NcGoA813VKGMpw62hgfaAHQ2eFZYMhipJSKTGDFdUGY8VeVfBk3NbfJjvtLxMsvBApqM6",
  "key23": "DQsvqmj3hHo5LYYkwmTUjM7Eq7BKJJRE3SxdnMazhZqtwf99NtF2hXxz328hJaPMeaCSEYbSXTxdGmKbAqWCnB1",
  "key24": "B2y4FzCWuXBhp5AY87ML4jr2N18Q1cNZVFpu2hQ6C1RPvrXyDo6RfQiV3a7NSCfN9hCJjch8ShpkyJFqwPw5rJj",
  "key25": "53PJJpb5vxHupK3n1aqej3AiokpF267aEbzs5s66KfGp2uKKmEbeWN8SF91wiB6A7d2p4kF9QAaNQaVnrRkSc7bG",
  "key26": "42QSAyQE9PhJs8LPp6Z3HMW6pp9Ktr2Ne678xRA1e9KwKqmdSXPBdEA2q4M4b5xG13VWMxXDiJ5oquYuEr88RPuL",
  "key27": "52t6kRoxm6rjuEX7bxqXFirvuup24Ye1sbstXR4NapsKxFnSpHCXM9C5GJUMtZbvxkBdDUEZHrpyy22kVSk9RDpt",
  "key28": "2ChQaZijUvs8mFJKsdJXWxQnE2ErjYYWh7NN7cHTUpKav1PWXwfJVy8w7u7cyMuB73yfmg9Qja8xzgjpAEdq6MMU",
  "key29": "t5yak7G9YpCMYnNTvN2J8WQsc2R7EuhcaWyS3fjWGiK3L4kqUUBeMuXbTMVBvC3ijgNqLFDc3LAAKML2eYAhrQq",
  "key30": "45USQkNnG5zwe4K2WMmwmj91BfjvMdrRGkVLm7uU7FNuPK5VxN2DUoA4zA4zoG2P2rHQgWzwcZGsLANPbgpcgx89",
  "key31": "52xbahRWQwNyozx329B9L662ydprxVd3amV9xq4MpaTNxc8sX9SAzgru7AcrXyoGLddnTkuqxFe3YoH3Rw6ifT9w",
  "key32": "3qZwDVEE4uUhmeHwuEv6JXt6gaWSrAV35WgFSieTjdWsxtFTjuPMmVXdxpx838i7YYQdwoiv7rx9dSFobMsspauT",
  "key33": "5cV1KgqUvjiCJtpw8q5KNrG5b346bGCSgZT2AwjmCECEzShDgZhGFUumwDhTuiHekYNHAJZJCmmqWAm2kKpHbLi4",
  "key34": "5Xn4xqTfAsoT12NiD7j12Nvh8DrYw2LbZVPnhEPFqCqHFu1hepNyUgz81J3kDzJXfNKLrkha9wo92wSy2REjse5y",
  "key35": "5nsfeCAeCHWZWKEeLyaGwbgbzJZauU7zWoSYpxZ4e1B9xbtQHdSujkBAzuLwQbeTV9dJCMjwgJvPDYzNUiDxhRJr",
  "key36": "2Doq4rYsi5dBYaMcWRJfQM92hvR8ESgDDbeR1WHJA2hYKjjGLrMMQNwHtjkqQk2qxPMJqkbcqobAzvR824u8Aqgt",
  "key37": "28g6otzFSTij3U8MdgKdNNM4nYQ1uonBXcxiEbYbRmKzuhwQGQsLor1EmaUCBZNLuNweB79KUcJGrASrjeXQCjrM",
  "key38": "z186svv9jcfQqxxComDvte1hxpebsGm34uArUUXewgT8Lyp84Kb7LpT6CRPWJqfmQ3U18ENAje46qot7Eutrssz",
  "key39": "4qVyAKC1AWQGEFBwehfS1P2BAqTGQTa9bJxiQVHDidoRpN28uFkVCp81drfPhAyqUvLfoFF3K3E6JWndr1ocrAgZ",
  "key40": "25nLFnCLmvRqdn7Spdcvi9FyP3dBSXeq88ygJRoUr3MAYNwej4jTKtmicZ3mxHxKm2Z4UhwCmDQozGxtTUGvpT2Q",
  "key41": "4HCvByKRMpGCXi89nRRUGUVxVEWBf4VqAtYzAhhcAcypzd3GaZKnPm5HNimbeg9DBuA6qqGrxxX6wuzqA8QuS411",
  "key42": "5ue37DZn7y3qC3ZLGamH6BtphS9Tbvu6rVFGDxM7MQYpUNfwpHEX1o8PSGA3HUca1JbybLweNcSfazsA2CRNvYJB",
  "key43": "3BqdbpDP7sGX61zXrj64rHGNSg1iGGALgJoNxjnSU18mf1SagEyir61GLaFbm8wme1SYy1hR6cmBJ12umfZYaVpx",
  "key44": "3RgGxmpBhUvnhoXWB8fiQs4q8sKiz3sePLPBT5SGkcwAfKRyw5vymBt1Zm9C8xdfJL4w1iGzPmKF3ip5yRfTxqNv",
  "key45": "3pzHg5Xr1cCubTswcj6D6d5Rdfpqi8MAYgeQyAAPQUFTCCBdomM76Tsm8XqCFaebxJpaZPR4t85S9ZbroMXKDmQj",
  "key46": "DYRgYGkNHvesvDbBjN9s8LKWaPDxWdobAZYQTSjBDDt9wcQe7m94suN5ykBnqTLewRA8p6Nfg9p8sbrPzxQgpyP",
  "key47": "5wWuJPRPxWSn6uErBrxJifvW3S3p6orTRRAZAQh41emAmXYUQwcbK1nS8V4odvx2n2UoRwkUAYxRAKjS5NBituTA",
  "key48": "cuCGLJaoJ4zjzWYd86x8tMoGtguJuBXx3xDehYe8MencEUSQNqBT4b8ABvsgFNmpFcEde7wL6xzxfz4oAUa1ncr",
  "key49": "YFJkkKgr468DqfcdxBuG5dY4NWRKcnhJQeFrsPajqi7KHxYtLbGaHAmgUayFhgZ685sx5qHt1grekkyc1pmoEY3"
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
