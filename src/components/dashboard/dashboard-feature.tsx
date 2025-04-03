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
    "67DdPTibLKwB1EFJrNRGV6TAzsUSWYzvX7yHDcCGb1SSQSonvpkoE4GKri4Gt1bAU4U2oQDieeaWJnsux8bwGdkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J4h3pxobs6AReiZEcwsFXNkDX4i8dvTMwCZVBioetDzsbZwPbVEo8ExEboqytBUa14mtbJYg7WhrARfexeRxLvH",
  "key1": "67iLuB9BqnxSrBGtekkhpC7wKqqXrXYHGzjLwttoAEyLkfsoiH8yQwr9E5r5vNruRsRbGSAuT44yZYiTGjdmuvc",
  "key2": "2kbYHyTtvzxWqCmGtz1VUEjd84EpVkphHcsmr1x87njraG1xFTbJR5mLbn4YpNUfakzi7jYFVmo6zatNdUekc3xz",
  "key3": "36uGNU9vDMHUq1hyoPkcHT9vzw7BW6ETKqUSMDLCoTYAhjPALGcSCy62NQgkvKHiJJqn8nKjRmCkJ6Xmd84px1ug",
  "key4": "2hPF8U5PBrx77QrcZidepv2qhaKaP2bqnefL6Rer6VQGWSiWY2TfxSt5gAmfBccCrNBCSpbS9uk57Hxuwiq4Vt8o",
  "key5": "33syKTJNzo2GKJJfKWYMhmRmKAR7oAUirN5Fdcf2qEZW88HzZnuYLw5kCbP7gqcWJqSazg3ZMMhCvHpEkdp7SsTf",
  "key6": "PJsKQPSQLC1FpTfCmvNQL5nR9aAGbN6KwvuE1kduAtU6vrVELVnagpUVAgPssHXWm1wzGEQxxSUwv4A36GhQ5cB",
  "key7": "4WkDbCjYg4U8Gz51yJUHHYvXzYLr19R7HpnKjevCRvc16VdRgbkVrmyPo4o7Lb3YgGP4wYCEJhiJoKXQ4bi5zCZB",
  "key8": "2UjeyHN3Wc34LtJSxeYp1YQLbW2sXuzTfqt82WtbjKhvEbo4WStwt2Fy2YXHi6Vhp28QQBQXcrEB498erJY8jMev",
  "key9": "46gK3mNGU4SwiVuKGEbcNxVgeAWfCFod7dS4tuzzAWCX6a3dGiUtmGZVfA9M8XjqGrEn9hB5Bn713ZeRp73Qa31b",
  "key10": "2LAMV3TRoi9oWGGrHjhUiK5tVgC2gtU511poZpAcfjPmSW4WvenTMzWZgnV9efG6b4YMFy8bXqA7CTMmYstApaot",
  "key11": "62JBWMbbcdX1ufxiUXF5bix73SmZSqSGAVF9nneWvrsrc6qvuoLZbvCss4krWHjN4aSSD5bLVv5iZu4uqom91ZFK",
  "key12": "3qRMDrqNzY1Y3DWWvYGj98AuBxgexbbG5Zjq49mY519ZgdpSj1HCwRHVAJ9P6znfpUD3coBs4u5r3SUQCJ1DmeVv",
  "key13": "5wTnwWVc4zCFhw4KLDcZoJRWzweb1tk7Er1x6N2fzkBk5gv8B6rwSYFHEhTgtv5BksypCpDuSqRAu1ExZroLQWbD",
  "key14": "2qqfFmm6H7LXhu1Z64BarVok5yAfxLVfqxCArWzwZR12YUNz3SUUVxzPKU45VD8DpkGB9B8QpEhR9jY58op6vfgx",
  "key15": "5NCmT8R9iJi2gNPJCCfWj683uoEvZ65AKxF6P3jnFa8HRRZwTprhKZYWfNfagd46NmwjtvQXWHqXskZLd7egABmY",
  "key16": "gQvJNWUx7i7t3MyF7kBb7bEpvVLkbcUDXYRLMf5QZNpdQxVqUGZJhFdYLikk5E9xpezDfMrhWpXAoF2W1Y11rJs",
  "key17": "2apgZgcXYR77YiQ1UEuKhkXoFdAhP19rMu3DofcPFN3Tcy5pGJHqvH1H8CNiBFTYooibYWCC65hxffXoQt2jWvJx",
  "key18": "5W9wdx91ewkSMbyGpbvtkVkx5gqYU12hScQLqeqnMutHGfhqjS69X9nywLNzCnyFxSSh2ikyHAd6duf6QjVrKcGy",
  "key19": "5huqPW3FgWRAh2GteuAe4cr35e1EvNWCEb11ViKENisb5F5fwJPLuZsf5x94QgdzVcZtnkatH8LKwrUP5kFzkGi3",
  "key20": "3ysXRC7UsmhPefSZLeXLKjagRvmHJDPGDJwEnzZimTMq5T7EJk2g4XoX2jo9ro2W5Z3NuGQApcnGMw7npDT1GTzP",
  "key21": "2pTTdVNpq34HRxkMZXmVfDPT1EJy2UokWyVhpexgrh1yBv3Mreirf3SNuZps4risnhut8bHQJxsoNrAnyFc6Scu4",
  "key22": "4A3qmrJbHB7XsfpK1KtykQS9N5DztkVwwogkM8VfS5PyPunen4L1Kxmokwq6YdwS1KvPbyC2uKsuHZUgr6CrdrAB",
  "key23": "2uPhryFFCXo8Ciq3egBiKqLX2LDL1qZS4WmkJgZuLrQ5ph3KtYMF2mqUxWceoGX1GMjrobxpxW2XStUvg87xVPXt",
  "key24": "4qc8iJP4MDYkv9mKXRXgegsVaqtzjnbNcvZdNnfKWq3PPFnMH41b6FhwLWKAxdP65UBe63c5dXttC3NuZxvNdRJh",
  "key25": "3UHumysjC1qg6umvZPGqyogZLz4owApvNKvuKZSf8WNELuDGppV7UAwwJxcLGnJYB7JFwqPNWujjdr6dmQ6sEVgg",
  "key26": "5HumYRwAgGqz2sRoQH2fsi8WLkzp13E9H4EsgTVNcfvc2AHJxKnLdMX1qEAbziahY4RoSveAooTPg5zVd8fzuikC",
  "key27": "5FB9ti98qJExTKFe7u2jjezqgnZXZ7XJTxpCu3881eLPijhZEpLQSpBq4LuEw1b8am8rCXFSjRo8x6KTshN9YrF2",
  "key28": "5NckuSJ3AJ7vzjAzfZqmrV8rhX77amNjwKyUzy3bjYG6ikg8VcM8Vaw29oz7crtPUWySybMijHwvjnHcAcP8ZT2D",
  "key29": "3rXbf4AtUWb1tDXXyXBtBpwTM5putahiMx7DMRWafhSsaAFk9eUwqEcWXMcZJsG9JhYCPEtZfyrNaD61NJ1Fgz46",
  "key30": "5yQ7zoct66CHh7VNswFhBbRSfShhLAsVuR9KNc36dxwUHToFkgH4sqKyXbpZts4RRBtZcosQ9UtTKhcajPw2o9rk",
  "key31": "2tqKy2ZP1tvwq2gMPpwQiY6oS24YfzErLx244kyEx54mM6wheKypARdgniKqtPcihBdEXddFWXj2EprUfiMnykqh",
  "key32": "3va3x7RFYz2D77fEeXxdS8CCsxg2E4kPwwwMdWNa5zaXt5KecSc8DDp6Lo55Vi32AdHhtvyzsr8Kqvvn9mQVNgTN",
  "key33": "3dX4xwp6LTCoMmce3xdzQUX5fxe7BjtWEPJmqPW1pTyUsdsYWE36wUdpCsJqRmsxQWmMoy8m9exutqrsKLgHJbZK",
  "key34": "3q33dgbvWrfxZgaF7yjagtG3viLH58nXKxDFPyGPkGP1aHdN59ob3Nrs4sfdh47kzAJ8RkpT1osdS47gQdZgxqbm",
  "key35": "87F1UjpXVC2msRXmfYoPDasuq6DNJwWuhaU7q4CWPqLXk3zL1ed1UyUoxUzK24hhjNF2ep2KAJFmpJWvgVJLtxz",
  "key36": "afnCnV9Da11jERxb3ztaDYtFkE1ntFPNQu2Ph9var9vXNhc55G8irYsym5L5oyHoY1rS6VGbtq1AHLYwWuZoXCi",
  "key37": "5qWGGbYtZJPZ8PTYYqiYmrHwK668MXp59Urw34My422tfqpW1MvQUnNpDv6rG9b19BqyX3s9DX2YYUrXrr2zXB3x",
  "key38": "39bXEFSnZ9o9RYnuVUsV5mCbhd3gPbgsKQgVD1jqGZ6CqfERf4NmrnkEYWg3Ct7BVXjYpUdY41kiaWr61eotAbWH",
  "key39": "5BCx6p6Kd4TgzbEQ4YVyHYD8RiqNpdEghLy8HhHCEMMoQDPmj23oY52jrt3hv2mQKaRXncF3fpMuxNSgi5X3NjB3",
  "key40": "3eA1xmuR68NHvduL9pngsjdjLkDFZphWBNGN7RoBv18t32LkwVCASnGWFqFHPcowP63wcn11jqHZmYjw2m5V16QN",
  "key41": "NzVsW6hNwWUK9yBdpEhkAwn8qeZCe3QET9CJfczWVSM2aFg4rkMGi7sPVsoViwtJZyG4DjsmGuogz2dEqsp4kZ7",
  "key42": "5et3csu26zb3ruCJ3yDHHe9Yu3APYbDX7cnDrtb7Xr664UHGtksTW85rNLoQ2fZy8i12BbX1HZs2nXSg5sjME747",
  "key43": "5N3PtWGAU6fqfRBwBjuUxX95zX1FspZDwvhqA9nivHkCWGFDqDdasU3bQtfocQzRDV1zwBPJTtjS8Tu48pen54rz",
  "key44": "3dK96CX1aKT7s42NGj6nRqTiSwWGike9TpdFN8wACGauDmZsVUWjcLWXggaxEeACeKc36bh3NdCEXqHAu7VvRwVv",
  "key45": "AFuCfEM6WtWxj2HJSxuoneYijYXAfQ4xaHz2bzZuEDGLFPvHGNRXYEH8N4TMAQ3zbdyhFeaPbDpKj5a3Cb1aF1m",
  "key46": "4cnTgNv2tmtJjyzJCpz59VDiJWDuggmQ12KgXtbJcfnzBVgQqLErHz5SxVZjn2JXbw5QMZebWNrkyLW65eKJF27H"
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
