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
    "m2aEhmJbK8rEktMRD76oqzVsWbL5C7N52YcKLRBB5q9R9Ange8dXYScc6tV1eGb8e51f5wtPeNg9q3QnCfB8fDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34MCA6c5kT5Wb9DzwhNhLx1VWojS9ydMTiJ1Ynw8mmDCjMdSm1oncrAJsfZzTYUDxD67wZc8ekohTHjMtiZ5wAVh",
  "key1": "3iDw5ekvUYJViFy7m8h1Qr5pA3HahjZfY8zrYg4CcMHqMpdQFhqbMf84prGQHbyHweCuCMppLvs3WrYhFkAhrEiJ",
  "key2": "4fKJ4ajdZFM9zpwxhp6inx8ck9vMLFaSrNpvGFM79bfCXhBo99D6g19ArgMyuQpyWXGt5SL1Wv1vXwuaTFQpXucN",
  "key3": "5jrtGaCPP1to4sA31mMRaq2CBbH7ZJzGGX8nkfKsmWTYykfQwcMgm6B4aBm31pJKEmXXa7ezsjR6jFEWqnMb2tBB",
  "key4": "4ivYafTEa8qN3yBoJgc13Hv2ZEyZkPs27UbqYtfV22SzRyxgsKqcFcpp14Wgw5ZJD1HBAUPZdDgefDHDzWHQanMX",
  "key5": "4Woh7x3XXatisoTi7aokEHBhePoKVerjnmVgU3wTg3JQvGbFCSa498oidVZ1g8PtZZSjB53mcdYaaAp6vhfjkATx",
  "key6": "27rhSM1zQ3ReMC8yk3bJ8TrUnqg8adTi54hZf1FMGpCmGE4rHmUrfVKVuKD7gyfBSBcSnv3AwDA8WfRKMtebNaw6",
  "key7": "4E9KmiyVmMiSYjiaggVCRhryRryNmbPNB6zJotSo7gGq7vyVo8iM8KACWeFxijC5hEb9HmerLY1ZETeEkfHkpzxk",
  "key8": "679mpuwcprnBEiEvTJfbHFkoAXmM17KUHYtssQbgNKr1XU2ReBRYmvGwyzA9psmL8sVijKazBUNKf4b5XbUzYiPN",
  "key9": "wRRbZgVS2usWx2NYnpKL8QF7cFpDoxMKaK8QsE3bcGNZUVJVipwibnhJbV63FDWmjUxv527Hc8p9RPK76Q61nSw",
  "key10": "2ngQ3eD1w2vEaeAT3DDwbnUvVM6NMHLutLmjrBq6zJb1S2L2Ffu5QCGtPZZTbci99VoYVdCdEuGJjnkgaiiPJjZL",
  "key11": "4NKG6PSWZrJT73rnXrrMDEmNLyNzqyttWuvwWErocwsNzmsWHV44jbsYiKwhVdY88oBbHycmRXcDUGm522Ym5cRW",
  "key12": "24SEtgHrjfn8XNpEhHCggLgEFcJ69ge9aqm1HuokwY3jwv46Ww5B2tF6kRY93GKDGGtxigcYZNAKyUD3LKVzBZHY",
  "key13": "2SLMKiDTFKPgKG5D9ZwYzZJcEg1XoJxkwjyQWV9TaFJaSVnQi88vXrnetn6sejfgkHmryZDDSEtowuQbP95iX7Hj",
  "key14": "4t31bCwkCEXqo1UdM7XHyMZw3AiANwhpsYmW3SoMjAgQsGUrFR3sBwDbAgVgLWVZYU5A3naB3KcxV83sDRUSHgvJ",
  "key15": "7zYWa3e7yozYNCQwTkis7JWDP8SMAVRgdBcp4WEs3cG1MDdi43mkoQzFgmQqNJUbV5Yhxgqx3EqqPGACfxGncf4",
  "key16": "MTgjEBrTWxBpPk97hmuzeCaWmgExH28idjaRYepz6konRZqvt9wEULVTrbBQBpJsikC4hDP7MXrfQogpkxP8zhP",
  "key17": "4KzpXeTkAJbt4WT3uebTLtjgaPzK9gA8p1F9L1qFpsvyys9vbuwLLgtUWtMcj5vS5JE1BpXSXYrAUD11gDsx4AkH",
  "key18": "4W2keoiVmxoNnKWZh6hzUkm1JNP2ktkd5Bnj2WAWPnjrzgBrf5KUpZA764aTdS9V8dJV2nRK57WCC7jJc5vCZtr7",
  "key19": "qK51smJXW2TpjLk4H3XGsHHB6j1CuLYd67HsdQNAdx5ScFawLX8k2tUT8T59B5LdwPBU7YVqr3Yn9msqNu5joRq",
  "key20": "4TEdiNwicpgNUeTyZknDNUnZDjD4N7mJhtq4aQA2K3uaWq97PgmNEzbFLiVYJZr5DjerE88PGKiwDxuKrYNma6P2",
  "key21": "3sg438ustwRUjfzBQkRVDd3f3ZFXd9vG1794FopF2h6k1RMqXN63vuth6UhMpMhEykgqxjfFuz1s1k4q1Fanuh3f",
  "key22": "2R4MGBPWJbtvqhHR2WGwNTA4PPfPY5X7CdXNkpUj3CcGLm9UYvH2AzaiHpaPuyxav6JMEgEfXEbxNfqHC8kKjk29",
  "key23": "2d5Bbo4V9pN3i327KkzMsF8qDtpFA7MHn69kQhCJr3VJqkWs8ktUGCjUARttXqzdF5xvaeHgZoajfBa5ZhuCXfcr",
  "key24": "3fanejmWAQQzgSKASPtP4R8SKPyEhy7xaYfug74KovjtjFh4WCuSMNMouTm6s5Zwz2766r7E8CuCtpipeKa422bs",
  "key25": "4vzD15R11uKZJZ6vXpSj7n5mD5abmNPJpGGuC3Bv2PTmJ8Aj8MSwz7bW1vpaVeeMvkrfzmp7NcvdYdARCkPr3rQD",
  "key26": "4RqPmFjfRLTJg22iwMPEGhFhpDfXPnuCMKEyHPuXGr4wfosiHw7nSzjGWtcAzvzx3oocDas7DtfUZSwUxh6PJn41",
  "key27": "5kuDXafRDKh5bBh1i3Zy8cGRpTPYxG9hPeQvoJiQnmM8rwSUi7RgAJukfuQCWkJU8Go7p7S4pFfxnqc9emNtjBCQ",
  "key28": "26tXL3nBCWkKjdyu6WzVHfrb3rjjJSmYiKmrUt4Wg1pRgbFXZfBLfLKfdwV3rJRjusLyWER3MUTYzjPz3KkARCmJ",
  "key29": "zwNwXESDwiYZQtC5NX6oCcBUHUYbdXz5KDrg34dWt1Zb6jsXhAHUuBw81oHNcVH8hzgFC22bWzsgdD3PEqfjxFJ",
  "key30": "41vtsLXN9Pp6emQnsgMar1sChjvGpzyVRBgYrvhfX1xNipnyUC9W14d5jfuDCvNZcHzHce17Ru4c9jCMWVLesKGt",
  "key31": "4LEZYc8J5jLNN4jTN97KFx2Z7Mz5N5VYArmdJZzTH2ZVcWdf8Tpk6XJF44E1uYYcQb5oJhX486ynBYfEzS9Y28iy",
  "key32": "2UqEzuvGHw6hkpe4PWKz38UyHSZV2JHPiyAd8NguoAupynZTzmcF5GJ4zUGXmYw7GhaTvSmvo6wgAyDvLhJeVquc",
  "key33": "3D65ThpGFos6aidaNmNtsf89Fp9G4dxStGdgvvBJaNyVzpqCVTb1vTjzdHFFWUyXV7tM7jNQcEK9k2rBGAusaWt2",
  "key34": "g6rAcSUkm1gWm9R9zC384Exbe8ACSe7NpAvTb788E4LMscNtocr7RvofpHcb1TubkTuFupUstkzj92S8ToRiqKE",
  "key35": "5dzdH1Fj7oaefgQ9TnmTm1Vp5ExSQuogJ7g9hSFyhbeZkjzM6gQKrqGtQ1Yq1PLuxvray8wwgN9NpZ1wNDpPhoAM",
  "key36": "4TLQPJCVGWiuuVx5xvtCjLgM2CwsyrGCLVxVrfYnad3C98SNxDJRjrfkqJ8h6dyocuwzeuowYizDiB3jBaUEZSMm",
  "key37": "39gpST18E9oBngxf8iG3hVd6coWGXhCGjZ6BbfDVxnAdpBicC8ZVj1tZ7HeARLvYzjqU3acStJmMw5BBAPWka7cR",
  "key38": "wBBnsdueJC3ndkyNtuWfBF2EU7jCwuXCQmSZ98DyQGbUJ6AiwnFZiwnmo6xN3hcAqyWPypk7MDmyv14QQgDGinX",
  "key39": "5cyspcxLkVzYGeRwXxTX2ut3L3Mz2dvgb4VVi7mb6GSkfP9hqgKZeoczupHAoapSgGwU8WWrAsExB3vBYyQSb6nz",
  "key40": "3Ekena5Uj39FRUKFCmdYVDNHtkTgqqR7ZeVWtJ4DSbGgjQpghvsG81keKQvKyAAVu5bt5WSGXaKjHyMJhWeHeLrL",
  "key41": "4JwjRwEhoU8tPWM5tGq1pUGEf6FFVdWHDBx3w488RqC2EqbjfJ1oJqzAvGrRHo2F5v5V4dxKp2tE6eZXXoNhUmyB",
  "key42": "4oSd5nkV2fsXoWfvAKGhKqMyjMeWcybLNKt68fbkHGTr7F4rSNcFovcN5ZhBAShe5qnu6azuid689XjdmYLxDkxy"
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
