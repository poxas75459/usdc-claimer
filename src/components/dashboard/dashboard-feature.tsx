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
    "R4NDAZaonPbXUu8X7gbAkBqiJr8BjfYu1jmAS7BWsoas3wmtw2Gj6mctz1v2RBBZNGiWQakBpBAKQ1FAYiVxAfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "maWdU7Jf5Q1MZarXKNeFwSwDLyhWNyFGpCWgQ8EjxufFFQ45LC3qy4SJM24fdQ5JTKf6N5TTReA3dmdGs5j4TwE",
  "key1": "4iNiLtaw19mXU8PwhX7drNo1U7WRns4TanFjPMKD4bi9QfiWATtKtVGgYqWqL1faKNZHJernywXKBox668kEsTcr",
  "key2": "wP2N9g8UG1KxyD5n8LfNoDp5dSbo6e18MFMSa3rSNe3dJSjRWqYg8v3oRitX5AcsGPadhvY7K7CrquJaHyDPyf3",
  "key3": "32532NrM7iSgd6xU2h9p2SrsaHiZq1dujHAYSbNBHcuxHosuHNtX9cfRDtuHAkmEHvygmLC19uuRQTSxUcCTxcje",
  "key4": "3stssxMLS9WRXfcXRKvmFVUYqioi21Ja7FYyTXngCKisoYjGsVhYWFs1GVcsDMFZBXyL3zQNJT4E1kkq3CPnQxFL",
  "key5": "5kKfVj9ZASJgRF8jqrsSMLyqppEY5Sm1ZwFj8ML7iyrS5MiEJbsKkRbmCbguhSN1abVnGy7n8uhojMwB7D6j2on6",
  "key6": "2PG9fQqdrNGrnQorcaVMnk57y8LCUyrp7S8g98rmoVogcx1sYDkHhq4aqKZYQrmxzdi4cLgCYpEGeDjqLSTd2F3h",
  "key7": "5hPgXKrqCLmJM5EiLVy68b6rtVTRtTCekn3Fz7ApyubRWpQjv8YFYckaGqWJG15WyWTZmsMPazVR96vNqj89CSbM",
  "key8": "43kTpUR1tCutVUX9xhUqzviTyiGNx8boRHWPSkWqiAHmN1XGU3tG4RBfNCpNSTA2BQqC7iDS7anLVN8E7GKwrGFn",
  "key9": "hUbL8LqFYXVKPjCiqskaLwwuZA6muMVLzk4Y8K11U1nKtaNy9JGc3Pa3qtHtMDFKYFzVzsiLKcguSZudGBRrY7P",
  "key10": "3WxsQEzE1jegjNYB63zcbGFWdZJ77JL4Fez5DXtXNrmwmcuTYVUT2y9mCwZUPBjargU7bkRoc4c1qKKwQpm7vzy8",
  "key11": "53wuXBL7Yue5RFjxYpY6LyhRywnPn2c5mbyEUc4Mgnjwkks4LB52m7ZwF8Bx3RpdSAh4VFRSwmpF1Wh31Bc421xT",
  "key12": "6561vC5hDWSZe27rcJ8y3M6ja3amGwkZCJ7zMR6UaYSs9A4kjCphYAcDiKxdr3F8PhuZc9dRb1XTsSe6DNwkJrHd",
  "key13": "3ngXj45NTXSHKq16mNJPk4m2Rcn4JLeP8ZEqJxrE7nZypqXvw3ckFohra89zusqbszBDFo8CcxiYMFBFY5qjTVhw",
  "key14": "5XrhxM5xByTsYfTCpN7q3tCsRoRpgUDDYcJGXUAJVa37M8LG1MT2gDzw1Vt3cgyKksbWUdKNwXtFFJpNXUFEpXLA",
  "key15": "5ZWVX6PgLfKdw1acJB9i1c9FGLQJ69AnJ3r9VfEmQ1jNaTegBduKMbYkdCL5L8LJhQUciNw5zHVr4emqpeUNX5Gj",
  "key16": "Ys2oGsr8CGuPXaust8hnTNehQfWY5ZVrsfJgamtvWa4dXipYY8qge7ydEGhjbDLx94ipZ4VGsF3bkiybsVsnhii",
  "key17": "4A5WtgKNDig2CPPPQNTwfBbVjRXenL7yQfK7JTHzxiu6AURQcMCms5uxPCSRRz1eXPKySzugBARWCD8nAuKAuEEv",
  "key18": "fCXn4AH1ZntvcvV5j9om6AZz2y8ZaiNjwU597xr7h1B8UoiYtAVnmP4CEFEFLk8ADuvyLG5xiYivHNJwvDcALwg",
  "key19": "21D7VLfuYteVnKjYMCQANVTL587TknKFqDuSHSzZLtVyAmXnri777rW1RCT4jACmgkXfiJFxq53K8UjH2hvxsaXG",
  "key20": "tp1uLsftVGrSF23eeaqQ2inK2NxjETqMeQjyJwhhDGxsPb8qPDfyYVQsHyLMf7LXsQ3e7WDj6PodmbzP7mt2R8c",
  "key21": "2bzwGHPHqz3vQJ8xLPp7c39kEz9gnYfFMjzi7urgm6T1w1cDTw3RsZ9fjDKaqBUcBcJwUA72GYAzZ1v6yuVyKXRC",
  "key22": "3kxZF2NVqJHqwgtoGtbF758LzpGi4oqrtXJr7ubCjb8tVZiKPFxbNQXEmLd7nE2kCqfukeUE7cSbVaWeNsHqksoA",
  "key23": "4f4jniioJC2ZHruQjZzJyu1TohDZbwPtGxrCfTnxSSvjMkmA68tNCu5RYYMMTpp5AivpDJmLWKGfLVKvcVQbzSv",
  "key24": "4nUfu11UFNdEAgJ9ciozUeGoHQqUfSuTR3Zma7MMDrCLjQnzv7Hf45C7hN9rKFtT4nXkD9UmPe951cRCuhAQEXNt",
  "key25": "3L5JfkfSWgeTgcgV5PzioEi61spezbvfjE8RHrZGsctyvyC7N2LGxwjycfuVTtoKtNvQd1qMRKNiVrKL8ESfcB7U",
  "key26": "2N8y2x5CUvqzjk8fW8GCkmpZgXdg9KoUWeTqNs19bXEDdqhS6Ab2VRuS14HTbywMDyxwXfa2GnsUkGXAYKrHyL5B",
  "key27": "5nJ6xA3WV5cyB6g7njuwKpsrLf5quuhZrtPGkxgmsMTARbE7F4UfiEktkBKhH3jZK5Gd7GGYcimzT2A2DDWJ8mQi",
  "key28": "4nw2Y8ZhQs7saq6BqdekXVihDpYVDgjd2xzKSWs6obe5iHrsesa3VVa2FQkmzBYjWGWEAkDD9sxHorwakaSz9Roe",
  "key29": "38RDi434F1RBEruYXUzCzxXNi7LUgipMmf2pUdp1Kvxan4QS2UqTaiKav48MwoVfXVAvhE3NnhZje1Fe9LpbB3XJ",
  "key30": "5mAEqpdnTKkmaws3Nkn2Bh8yV78CwrhtNdpK3F7csM73eJWmeCuzYd1tCrq3JuzWbw87y7vwaTKLK4nsonGUM5qd",
  "key31": "5N3vMCtFFdMfFrTxiw792pwuu6gVnyWr4F91cCQHj6L8jL3aVzcxsVfLneRXnYjSh8wQuSD78SBQ2pp2Yjav4ubB",
  "key32": "4Qaorw2k6W93sUZgLxHutcdLpgPhPNty65w8ZYBcA8y1rSS5MdsD4QQwi9Bg1WAfrEwmPr9skyvyhf1Wg6SToK5d",
  "key33": "5kWC97MeXWNpKQVqdKVDyDtnga4nwwg55t7JcSg3U956qxAChVrRvLr6WnLDRk1iwsAwQKVa684n7sxfypCQYw19",
  "key34": "3d9XgGBfhNX4VXBBB6xy8CknvFZ365aPLfpYVxLZ1BGkGQVshHyG68oBzaGAfrgMRXH3Gt7BKyc2N8BArRmVpWY6",
  "key35": "3xoeRd2fv62f1YJuA92QWDwAwyktiTzweLEEZUFR5mC2UNGN1V9BmE3UhA5DefbtBVLbW3piGzArkdKGJKNoHd63",
  "key36": "4ZPQut9cmvmte3qiU79nDro5g33ZA6vyiCvgxZkyMMq23DeBm9xfCZeu4eMqQswZo4V9ASFtSnSJGwbB9zRgKkd9",
  "key37": "4STTK6ziD2SqVMVNyrThYUjfaxKP4wdqz8Y1qGhfauBrSeUPu25wuiK6HaHcbw2V1ADdYc8XXMCM4bshwTmtF3g",
  "key38": "HjCyxkt3M9XKc6W1NjPntgn5nJTZ94JJErzjg417ZFJ8vKxqoRLirXbfBzLAgBvr6QpfEhntJ1zNgTAAQYJx8UR",
  "key39": "2dvMAjGfDdfLvwmFuFEgRPJUnoAXxUXKDmqSg6wc1G9NGe66avtYCMv76XrT7E4bSCdJjV6mBd1zY33spfpVr914",
  "key40": "4qDPKd8pJnFxfPVarNGswkhXirVZSccqDjzkzypx4P3wZK1k1TUe9FC8j2BLqKrfpg14qC259E1QrR32YsvbYtfE",
  "key41": "5qbRxCXKN7kixgGHDFcgSV8JbgHGoGMLJostu89Bcy65M7RDcpHA4QiNafeU6VbUHsUyB8taMT26DJwTrbYkyGoA",
  "key42": "5YQXhR1hKEbt7dY7jt9JNp5LGjcyF3xws2NTsuV4rtFok59mCKedcYRo17FvUMfiDxqjSH9Yy4v4aSr6c2Dutrp3"
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
