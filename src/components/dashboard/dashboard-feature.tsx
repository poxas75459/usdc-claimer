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
    "3KRUFWG8pWWznUb8WB1jx8cWWUrAYuLBxNeKEBzeRFNGUa52K7GPbNs6mXpaPZfqpcJjBt4RCHPjbiHjH2m4FQYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sxZkjYMVZmTMdpUvNyVuPNpSemzh2wWa7pyyeWNRRLUfcXj6yHUw4pYSXwPifH28pp8LWM6Uc4WUKqBMR9MNiYG",
  "key1": "3qxNy4ZDTqmW5SyC3dEjjBFr38HLtWhwbe2ZyPqkvy1ZS3VEYgucQ8Dc5ryDqk1gTZH52fKM49LQAtsjwdnreKHQ",
  "key2": "3jH3GoJyLY169Z9SPm18f46isfdwMdwkU15kEX8xGegffkKYemNM49Bhvnqssd69fNWssu36oG86CatsYWVb2RH6",
  "key3": "22BoV27zUyfE9YYNUXeATnu9Y3syEMgudfvx1szyHP7gFAfXN5MXT5xtg9HynbuT93SJ2PX3pDHg1hCuLBBZG7K9",
  "key4": "5nc6i1sqLvCuDi2wcF1fN8YZDCdktaS6dKBBD2XRkGbHuBrRC8p2RyVzoXcq2prz8i5Pther3q7pw16strw8tmRU",
  "key5": "5oLCzEXFTeS4MwVjVgGqUwHb9gBuAMrGi365KNe1GSG32fr6ZfETURNGPgbVQVFBfNXPhXFwhK14K5E9mN5mnaz3",
  "key6": "3VsfnNbvcdS8ZeLcuZ5bErBekZH5n1Gti9rwn1jznzuoFsVjSGXAggZJ6WT66K39ujRSx2HEY36Aw9rqxYZ4qLYw",
  "key7": "aXedXcuzAACTYcevUfDAjmqaXm3DzDquAzxFVSgcGxF49DbUzEeTHgrp2SU5t5a7Jrg7REuseMue9gA39yEyVEK",
  "key8": "2sPCs942ezrCthxtFh3bzhAD9FZmKjxQRygikq6Y6F4Zd3tnsmhG5hVpbEragXHGQ3aHQEHtTKyEkr9r7e7qmd8E",
  "key9": "4G2Ts3p9MNwYGq4gH1JWfADYF9MaQ5pfgP4R9yvzdgY1xXyt6zAa4YU6J2x9fneFcrSiXtySy3i7rjS7DYHn5mrp",
  "key10": "3ukEUeNfmJXRmqnL21LPZHk49pzNECohQP5iEedEBQ94HBo3oMcyA5MVNmSHFr1Ad2da7HvWchzi5nYxC5F8uPyK",
  "key11": "57WwrLU6TTcrQ65MsREd3M1dLxXjRNqfPxP1wmsD7zgMK88PYZgubftsAWaKuZpehsgTBFR9LSv5zQwk7YJ6XJUE",
  "key12": "2LaTtJeoMT7T7716WTCcGAqArGE8hR2Z4Mqu5X4Fbk7LyejQ9LiMVW6naXuEcjEgFoXbSmHuPzZgaKLVEJXCFNrJ",
  "key13": "4hcE9h1MuF55rkGsQfLVNg4TvqcBcnGAPeqSyKLy1n83wvbDTDy8s2ZejQHocAYabSn2wLzGjc36u1tqjUspWtPD",
  "key14": "5RyAtNRn4E1S3Ne28YSusEgsuZDDrX2vL2Q6tVTsKhrRkxQMhccdrWF7dKp1az7b13j3iHwVmWM7XNKzSF1Pxopp",
  "key15": "2XtwoCndRZNLPqUxpGkjKv4xMNUwCzNXCqcGydDxXD1u56kc9GSDt72b8b6pb5m2sgLmcU1F1sJSbq2xJQVT7gqR",
  "key16": "5uNEBvDY5a95ac67TCyVHzbgDgaQkusTcwiFys2ZErfzV7WiZvMCzmhdpXkSNFRBS19DHDNUuKeLG8zvFsx11Kq7",
  "key17": "37UPFY8M1sCwxV75kSRW5ocaDJY2A4YNiuKSaBX1ko2ywjxyVNidtP528m6jr59tDJL9HpEXL4HRFBtbpjLv8sKP",
  "key18": "2S7Xbn5w7uy9zTHQBGxhViW2f9qikrc66TFMQSiEHNdBnXjzj2hDzf1pyLm6NXaDHmLJCt9QDPEQYdC2YwGQrB9r",
  "key19": "4opy5hB6X2wrbWxqK3Zqovt7Bmu7RSwddLEc3XhP9sTx7Kbi4dfxYWHPoQUki9CkLbnwgZceeHS6CC1YS6ezUj1c",
  "key20": "5M3hqwqWX7zFmjrr8uPXFEDap72fgsFPgjgdFYDYV4ZenRpzb8nYDAsuNg1a3A537vKFfwPeESrMqzvqgT8NyxhT",
  "key21": "2phrvtApzPKL3PU4wqqwNCoikqSiQCqgEH1A3UpEfMqTcecnMeaR2phABmjoJ8FAe17f5ERVUvw4RUBhXQEgdmQS",
  "key22": "5xpmckuERVvumAuN5AjYNzHYxKn4f1rK71VzBwe779ZiqURjTstw1cnmJJSVc78nHQVqeUMpZN6JCYNB5ANUSjCH",
  "key23": "4rzhDohzFkrXBsKJB9MZepFKJ5GTtx4KPgGCEvQbbB81j4pKZY5tcXCYfJX6ZgtJL35Z6x2BH6nDcWeSVYojpGVn",
  "key24": "LJkVMHTupyCq1K2cAtBZdZksVFDwPUuznME31y5wWh1ukW3hNCKRbDpqu7gwfpGKBQG5kimJRuHBzJfsWuuCbcS",
  "key25": "2HC9kXqqzY91cJ2KzgLgikSpfFMtMkTwLTt3frJHkoHHVkqWwKN5GC7PshGUZCK9GQtSLQRrPx1MtwQzh6y31NSK",
  "key26": "jRzyZGu27f5D1T9VuLLExKrakKX5SK7zgmjtMoW2qh993suRS1ViNPQKejSdj5TR847dH1o4tCcbqAjfgUnAwvy",
  "key27": "s11TP9xVezGP8d7WZaxqKR8q8P67JiMFghwPesMcvwwaqrFoF5GYjLmUyPMJoMWLdgj5XrVrE63RSgPqYLxz2Jn",
  "key28": "4EpzyPymfapMskFoiQxvYotZ49rX8xDAFeHx753BEXWikuA7eyhFgGxLkk4KgKLhApjgCEDT56UNVSNsNTtZCoXC",
  "key29": "4Pyu1Mhh2b2C9iY8C58YRFHUhKc7pbvLrV5kWP32qgsFga8Wkyyev3ECi9A3KXtB8o7KqPfDZK5CAqxBKXbzsJKQ",
  "key30": "UM7F6qkivWRptijmtcGz3N3nqUjHCxuFoUVSa2bYNDyKEkmLeEKhoWtTz2RZZpXbgtzUhaSJYe4jgxDWfGEutdm",
  "key31": "2wDdqAA8z3CEDXjnkNyuV24qzV93Qhdis3LGWrAn9YiBeEPTtD2MKToWo8ErqEgFePGRLQVang5cvMgRt4kWRoKF",
  "key32": "2YGJSfBCbzxHEfhYGWJyxFneuWqZTMpx19iv8X5pZUoS3ema5vzBaHu7vfNQzCgZKps22mQAvcmv2unf7Lszgqyt",
  "key33": "2L6VvCjVMF7QGZMc25jguXnhLgztPKfri5UrUV5tVD4dp6htSvo8m3qSeE1traBZgAyr6yYzJwquf2fhDqxodFvt",
  "key34": "4kbcCQkMmKi2Jj3r1K2A7cpMWbFuyafYWbxYii7ZKNYsozKFdGgH6f7A45vvbzcn9epbgtS4Lh9neM61EyoNubNA",
  "key35": "5ijhmZp4iEvx6EdNfgzz9jjN57jdwa52z9r9nGtk6E4WzgfH6MWDACTSqx8QBgf6f2jmhSM4ym4dRy2rWDxfJCed",
  "key36": "5DDvcKfDrgb7PRVAxgHLDFd7rhkQbXeusg8bfNZVi99DWmARtuwphhFxdnJdAmiVCMuL7ha5G1XPawBQ14kEWGEv",
  "key37": "57KGVmizTZUjjPWBLtfFdyGbkwqtFN9VZdE29v4hNCF1w51TVWY6NH4YiDSavC89DE1C5WtATvyyKjJ2ftYJa3Gw",
  "key38": "1MaVbPN99DXPorufciFEWAA8Lnx8WnmD9F1WDouHEcXQyZveN5KPC4fdedtsG6eDbAeXy7CP6K3nAHPbm1w2EyW",
  "key39": "5kQdLqAV49mKg1Q6ek6VD9hdbU3wPmp97if9ZCheYT5tMM6znDgXzhSs5ndLjVwUgkmoH5jaq85nTYhDkfAhDnc5",
  "key40": "4FJAyv7Y5TDmDczAf3F4NA5XeVqNNjYvvy9461y5UXf1mjcqTa22Gu8r78acALje2ZGqdUTNjx3Cr4P5XGaqwrfB",
  "key41": "4BhQauSfPDTc5gPwJXRjRmNk6QSugRMAf4RNsBYkTgqBu8VGgA3wUaZyatfcgpDCbh1bW2fWLkUaXNUC1QNARhQr",
  "key42": "47cRg5R9UMk8W91XRXdEJqYoxsY8jVFwTXRp3x2ihAySzTg6PThXR3Dn1Jg7YFHHMzqXJ4uTG4f4ZjsPwo2pBgjQ",
  "key43": "5pfD4q1VhgJah3QBJwxhfWkZefSjXswvEEcEjFwFaSkKHuMbf1wdtMRJRe8aT53erZB4mVxXhUJmcNwHHCCtUZxL",
  "key44": "582vajMzd7TMQGYWixAmXP1GjFKjqcnKjKiHVuCByftTUNuZzrMTE8XxEVg6hpzP8sdCXpT9oxdpkeivWwc64JVQ",
  "key45": "2zkytDdfSD8ePSGf3dDyPXN9ZpKjZFU3JYNB3ae2Uk9ykSZ86y8yXVKC9CGQzUPBSzoALSqBQvPGmFztrTeJQGHB",
  "key46": "67rbUffWad7ATU8R54rS2PiN3j2LdJikedGSF2tLiukXMn6naAiu7nju3L3tRbABUHpJA71Z1AevfK32jzegddhT",
  "key47": "3jcqotarQhV6Xxvyk4JSTC98KHATC8vrtcQpQKpx2VhBezsQQQUN1ipEVUkWDXjYAZUkGM2AFwgdJexTMSQ3B5k5",
  "key48": "44bFbZ7WniHpyiWqV5UY9sTBEdnGNnYeA1i4jMebLv5xigKZm31rasVNMEdcXFoDaMLjaQqhh8cewWE1Chdzfyf4",
  "key49": "3PjeTFrbfhocHVLztgKw9kUeJzrXh49kdDHWaxmftixRxuXw9eaKjNALJzHaRYPaUNKsS9NHpHwXrQmKWXx7cNcs"
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
