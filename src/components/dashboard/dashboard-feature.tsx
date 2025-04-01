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
    "4S2FjZq4MtVpoxxp1AKLdJW1NXu2HWBiLt3SVXgodjcvoPHGWu7k1fktdxuSxVUSND23cpSkFmj6Krudywi3AM8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eiMthHRJ93nX35Nnk1YAW3Gga6TTwiDFctUgJRQ7gpMmnX4j57bxBMnoujJFCzKPyyFHJM6EkwYsRhosTxvprex",
  "key1": "5YziCVxiKdW6kcTUiDU5zQy9ZfYLs7824vN9XpfCwwQQx9F8vwWCLHZPCm288afbpGyxudFjM2BURpXsupH6ehMi",
  "key2": "2wuJMMcncsqc4ma4jRLFVCYFDwoefdcV2cSyi6hKuV4EYx3P8yt3WbqziykeWXv4ZsetH1TqkYfHmmornZbSFzDz",
  "key3": "4BBvXWrAhsfYCPeifZWVMShw2PqBSh5KsmiVqn5WjuGZmee9cW2fJwA2DsCaCZgowLmB5SBLLuvHhhu1KDKbQtvk",
  "key4": "2UQrTWpR2ih6Bf434FZ3wWTGjnXjGBV5fC1dLwFbyB2tiJBXVutdEeNkktMhxXpN1MKFWYKsZuTb7v3SyBDZte1y",
  "key5": "2sQEfa6bi74moV5R8bDYnKWCGxFdpxVDFmgKofXXA3cDbN1NJCaM1o3ANwjWtvCXQBQtdjwrEc9tKTVy3djMAxMB",
  "key6": "2nJDnu3oMNWKMSzdgZ2KVFSmHHTPfgYnySPFmfLjphprF1Z1ewdDPRWrirQXkc5ieAkgB1TdbN9iNGRQvNvbtEqS",
  "key7": "5soTP88f6hrE1npWfj9yRCsHKPVwPvnzs9VwiYsmAmUxbh2JPRNz9eFxPcP9wd7GA2S4hrAbx4vzDdCSDfyU5zTm",
  "key8": "4aTHfa1SxkjaWPYbi34TfyDgNVrqmvLNHkiRCM7DyjsPWxqJrppfdG1L4atEKkEi9ogD1eUYoQA2cKfuf84VS9ci",
  "key9": "5Ldsja6yeesQVtzPsiurDHSgafUHpoVS6Hj8VDDGerGmggV3ywX8skdJjai2YWa8Jya6L3oBxxALUuLmgic93hZH",
  "key10": "4mRvxhkDecJQVdGZ4Q2AdJZTm5tdZf5Xgwyjzpti1LLdtFDgFefGBvyBGo9iikY9frjKLzouuukMHbRF16YBMYkH",
  "key11": "3JQjPJCA2VJuhGhoMBE2LVkaBiTwtmn9WHPNbocKggDarYFswCjYtNs7HgxrpR1GTtAE1RMwVJVb1t44WAHGEb99",
  "key12": "3JZxVXVMCbofHSqZ2epvoHJ8KoFoC33Pjc69EZB8osMFQFV73zRUie5Nf5xKoLkh4CHyxRti3PigMpoXvw8aFqVt",
  "key13": "3djL75nmkJiTNj8zJnW9KPagRn3YmzrUh9F5LJ57M7S69FnvqucBWkWJByVE22jxGRyXpXCHQxgntUzk2LiNsjzM",
  "key14": "2bTeRCVCg1bx9dwK5eZ8aQ2gevbpL75bhdt46TMZ5ptn9PxGptdSJ5AhcBzosmyFyyTnBJgHkPuM6S83JD5MSAaz",
  "key15": "5t9BnQMY1zbH3VhLGacw3LSPswSRadx7j9YH7rjHvXti9fnY8zQo2p88BUvcBUun5CLBfkk4H67ufps27uBgXAmG",
  "key16": "2PdqRRPanT8vpkiHPwJgyZX6ZdbFDYeQjZvjcfkusr6gZzqRv1qVqF4mLgpAAb8hxGvsKVDbtT4CRnfTaX4QF4EX",
  "key17": "2meo4DXobsQsu7cG8CByjPizxVZWcKtqWX3xW83kTLR7vvhjJwTByN6sTGUHW3QhJag6EhKx8Vmv44u3AwaD5DnY",
  "key18": "5c3PSMxdLdUwzdAc9dRyU6QXsJGqVf7EDSkgSiGpaWZFVx926RjU3cLXQmzoVS5UmmvUHeBzXzoVZtv2hQzZp8jn",
  "key19": "615ukW3qs6aMYXdaLhxiAnx4WN7cPdB3VvQNYYo34qBKgvEGpcg5c8v4hoSYT1gCGvaomJVU7ugp68PYUh7owqgy",
  "key20": "3fxQdW3E5QRvoc6Ledknc7FSv822G9DxPmskZ8kr4beLbKdgnUvwYTRjA62QCdnU7kMh273AUhFQwEh54BS5SJMA",
  "key21": "EA7G5HVcHufmxgfCFJqN9XqZGAQpTtVZzXHEQvR2a7z9V9U4Z9tgUd8oXS3WfYXBc7kZyr3wCUnGn74cEUy7VQw",
  "key22": "4on1o6z9bpJ1UiPvb3eC2MJF5TUdamJEd8g4goS296YtSwPCsTciHfXKKy4HinfpwxaZHmzvmBJaMh8iDLtTjo39",
  "key23": "25ZEPEsPiqWSRZYJrfLzyovM2ShekusKeeiKWKJJJwkSvzLY4ThBRWfYD3Z514pqE3TYEKVThRJRbbuELejxEJJa",
  "key24": "2ctnY9yde48xpZiismwhapAh2Vny2k33FHGKqwk89AxuUY9zQkmXCjgC96DpTCXfrfzLdNYrSSuTib34KZwLWnHC",
  "key25": "5wytSrUUY5iiYe9B9YadiNAwmH7HMxMKZoUct3ZZEttTpgJwF5ujeS3tN6E2oh984GwpN5Vb7wpaK3WrAkaztxMo",
  "key26": "4EbRxsoeGGnP15LTpBdncSVw3mcWue65o3JRgDwhZACYTGGgQ2XpzgYS8cQdfhenoXQE7kx8br7wNJLetoxXYqyt",
  "key27": "2Hp2QzSaaP2vwT5t7McoftNRCyEZpJihGRQckk9TJTZXnKCpMXJc8oSYvvL6r7ersuKf24CV39qF4y59WRYfHmBD",
  "key28": "3X7FhZdeqQJgGaqfbWWVWky9FMDtFywCR22bUoUVwhoLZjS7V1nofv2vUuF6XihxWsBRPaLRoynTadpoQ9v7Dd62",
  "key29": "4A5Nsb9mW6WnemSaE4vczTjMV5Kf8DWVrwyr8wTCxPtRf83TfszVwJmqP4MNVbo4c5yRmQ9iWpgVei7Km5Tdoyfq",
  "key30": "35zc8ea8p7yMFYVmhDYAyRvaPK77nhGbvCwNDAviRMZRkqy4AazwS3ePBEAHk7pouGZKh8e4myuaWVNSNsN6vErv",
  "key31": "2Tk36wPbxayiu3Br84URm1fsmFwroy5DctSo7JohaWEV5PZDMz8J4rTdCgreu2ZM8KJ5wwe5GsHMpN6cmfWf9gVS",
  "key32": "jUw5cZHHa1fzZFA69UqiJ7kTXL5NJTASAnaNUhDPzK82jvEBFPDHdRfQpUaoj9awXr9iLPCpbW1q2vhy4m64JiV",
  "key33": "38idGct5iZ1tnkYaqgqNoNue3bXhJbAL2wjNMcvE4JxDH9QPiG5idZrezEVEQP23RZ2Ti6dQgygg19NFpWc3SihR",
  "key34": "5NMgLqA5LWVTafQZAa7VK2eYUeM7Mz6kLYdE5PDFXjym3KwtoJNGRRayUFru1LmLXW7WPpx8U7ZSQVqEXKLbQcxA",
  "key35": "2nkYfnZ4tv5p9GkxC2J9QWK3kby7M8KqV7gWe1cQjQWnm5nxeydQdj7St63km6uK5yMLhVZb2qBrRrpi8J2enSfH",
  "key36": "5miofXAExHECqNV9vWWUo5TBgvkdQvWy451yv4ctVkxy1MKzGDTp9T559xczd3wSz5PFbQDsCTbbapm93oVp7RwQ",
  "key37": "3gj4DfKdqgbvCf9uDBTTFXaE4jL5auWggRGX28uj2s2KErVNShNnfebeHVPMgkph2XEbXeYEMmnfa2fTrvLXMRcA",
  "key38": "4GgpCrckGKV2JQ4Gu46qFBJerwqrFYKMSS8iAqFEQHsaxTRoj2YRwfz2krTeUySmiT7kajev9gQi7gxL3J2sKLEZ",
  "key39": "5DaWS7iXS6zwjaNzKKPdQcoDG1PxEpRNohzP5U8DrBAjLUiibFc9Ahhj6LsWYNN8a7JNEU5uututofA3nHpKfoa8",
  "key40": "4U8vRkjthvwzL5q6zKLRTw3PDw3GkeVWeJ5SBoE3mSb1r3Wp5QyiRQnoR3jjemRDEiPw6bvk22ET7dABw2zouseR",
  "key41": "45ErvvkujGjatpKeJ7RC6Dhg78xF4naXDn2nPNbS5pseCHxpV8RieiFzuXnEEna6wNsimiuvRWwjdPkBbitHyZ5W",
  "key42": "4mboub35Zezj8qqYepjgpqUjcef4E2B7ZDTR8wJABgfEC7AU38wxHQFxVjGTeFGTLj2FB24hQhyGULxKFJsrDWu2",
  "key43": "4TQxec3fjARYerQXYnv812ueKQCqzrrKdob29KPBvn6WQjqAVb4U4kYXPEdfhHH3gapy9bWxR13B49RArFXSZtPj",
  "key44": "M1iUyjvLTqZWNU6AfP1ML6irmoTAqwgeFNAF2P3MJk1A6vTCzmWXhUGT57BLk5nJCzaZYsD3NwHqmnXid14Uv6q",
  "key45": "jcgM7Qfn5FoT5Js4MD9nLpdAA1PW4TYLC5ecNbs6DaBKcZGLQKkXwDV3YbWfZk5qgXWSLy6miRB3e39nHo9D4Jo"
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
