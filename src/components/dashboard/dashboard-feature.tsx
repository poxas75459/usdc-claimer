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
    "5G37s2SJa7cfjuaGPz8YGmnSyfwiHQ2yws5q5VgF7R8U8e17yb7jSYDNYqRhY4xpsAZooxXVvqu7sJLryTns6tDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "auVpthPBNQjhF3HbakiUvY3AZCn2C4foYJdvSm5WRRtSADqfRdGGHidRpMRanCtDwbd9YyoUWCPSTfNaRWuQUXr",
  "key1": "3YvYAjPF4fcT5AqJfuMGhXWTKdxkQQDffxGJ6jDwDnZife7Teg9UxC7hbtspSGijpwwkbgvw9nQKxHLfRgZu2QDK",
  "key2": "33q1b7yQtRQLmkxzpKLxBaVfTWMsaAHyDpjfvLVCqZcFoSy5AiokEypGmUd8TjQir2Xcwg67TE65tvVJUPiyG4vH",
  "key3": "3FGwUzHzRcrbc12eCfE6HZ5URSo6bxNZQpE448ijQsoNC5A6ZtThZHtJzEgPMTEq6iT7tRing8hJQLZDT6MmvyCq",
  "key4": "2mpNLQYpBfgDdxAqEATU79SRJGTRR2SRVvPUgXaNLEJnyKBfpD4e7kQB8sMrTxEjDY4VMnYtaCoWA8jbreHoFob4",
  "key5": "2LK4w926zvyEReYgDwSfHnPu5UACW9kKNKAGQLvgMfE66tXBNFE8nZHD4pwZCWsrMBbUgzUnGAFw6ortJd4ks3rW",
  "key6": "4sy37bgsZo14zDzxLWQsQCxwiwUoxHBWVLbEA7Z21svzJmT2QeQLRrXewSTYY7MgTXqKrduonceyeHWawfotXw2i",
  "key7": "5QDCkKfKyxsegieJCm4x2AGxWpXjJMPkk9dXssHtYAgUpHhpY4ZHfpb4tebZkXvURPmJYj5sWyCGdksxtyk2Cjjx",
  "key8": "28pmjx49uT9SrRotnGSSKEwsMJgmQkwWLNVW5Z6uRi5Lc96kceFiaueCFbTgev5FK6R2Uen9d1DPh8XBzkeEbQrB",
  "key9": "3jrCk4nBoJjzChA1Th5KJMVSm1nakG1T9NRoTBbJsm1icExrEoSeQgaboKoKqFAEbEdtApxXncfTo5pLMzezRhR8",
  "key10": "4dVGv4999C6fRoD1wc85W6PhiSu625G117G83v3ZoEi3tU7XbUXYNupXRLnUZRarzbmsttPGq2WTgQmw7QmrMMkf",
  "key11": "23GtQre8qLZrc79EHc4K4maXv6TS9WiyCU6oPsXXMoSpnwpVGawZaGufp4NMUVr971femQeyHVTEy8zGS4nqWZz2",
  "key12": "38q6KHz91XkFRBahEtnvpmbZ4XmBqjRyG47ueEdzg23kSZpvwwUdve5vNSKBVvmFX7z4aofZZXACqgVxs7kkrdoV",
  "key13": "4xbZxhS66jggV6uqwqL4YVqeCGABA6Ax1iEXuYUMKUCnCEpJWskZtsa3GAC1VYHBd8uaErEPJHqR1Jp5zE9aTyPi",
  "key14": "3QGheiWGPbFPrWYwfevVYzX53paPbMimx7gemdNU8vTYZwAkKPgvAAXab5fNVDJZLnYkY55DaABMF5kn6Yh9uj7p",
  "key15": "Bx5i5MZj3rhUJ7PGnrchSYTVpySVuH8QVw7L1M2iQx9w9SsHSaCEANDB9Z2Tb5e5NAkTtM3YdKArA132KpRA4au",
  "key16": "4McN89Upsv26qZgYTwo8MZoj2T86hWeafDijymGUanvXTJHS4wsoRkwhUjavj8ReQALsyFvgYTYXcsc3hxhQLKYM",
  "key17": "3WfqjSrzmvQBVh1Fghddnzpagd9BPDmTS2AnZeBhN6TE5SzgNA6VcdPxPYdKcS2RDkMoKY17gpgb1X5foog2raiT",
  "key18": "5WRmvb1RBVehQ5a3REFg5B1rmeAczLZV9kC76wgivSrjJYGKhoAweShQDWHXMn5k5DYzmDA73GxVqeTAKZFYxaDR",
  "key19": "XhWeDUxHfAVyiiybmhArkSVfL6Yy87jn5rXsyKDVLt78iygFE7qjTBAAvnrkEBzWGJvh6H5BQ7ATkoqh8SACK4E",
  "key20": "NRHtrjGbnZfJ79n5xXMMcTNsvi6WxKsT58VbwV6zyp5tdv1yVhEbeK3fQBPjrbgb1fEyC83sPKftF2TykjMMoJ4",
  "key21": "4GF58UZptSeUuXexrJKigsGEh6dKzM6PVankoE73hYxqzbWgShDvYgk22Uzgf7qS5Nrp3q6FyLvvAQqH2c6v9v3X",
  "key22": "3C26vXyx2JSkRgjrLx93aWK7cJhSx4uCXTq3rE9r443UBy5Lrjavo5dGaxvwGXekD2uqiRePvnGmLyMgvJX7VY9R",
  "key23": "2Gkxj4uKpK3WE3AxH2rhXDf8KPahPB5NkMXE1bZbdvZv6NNNR37y4jPvVMk7orqQbZKC4Z9DQndiBGghZvPGcPMk",
  "key24": "4RAPNyHUUwdPX5FgcMd9ZFXNWoFyhy5cXixiW78fMzsBYpAksYiXUvhN3uh6LabgyKF7YkBwV4cuZJhGYAfDqjnt",
  "key25": "2LNFmfjHsz66kBVHd4Ys8xLUgc9ggzxALiLcFKkHgR8AFJGM5GMggUgmdmLjpjB2Fcnf7K4xK2uUKHwTzVbCGPgo",
  "key26": "4d9dPW9XAEwpibSxR54aM6vZ5X7fMQin63SErRpvVQmE8fPb2BjwjPYXT5ihWnMwK4UZf7i7vZAy1ByXNNKfMGxR",
  "key27": "2zDxYJZWAVBwXvde4Pu9oxHZqfXWW8kGiqguaogp7692YvxvpcZwcekgEGt4Nzq1Dd3z5YWbdN4zzR8SECWmEym4",
  "key28": "5joryf2utZCn4CGoDDkJ6nZnv4P43rov7Sk6RBsira7BQqq7k87JvqrDaiGMnTQHxhTsMhPtYjqZY6tVW1DvpyvE"
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
