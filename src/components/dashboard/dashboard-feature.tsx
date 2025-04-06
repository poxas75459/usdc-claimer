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
    "3x4cUmbYxxcKkENMssiyqDF1e5HaRyqrxZs3pFyngdfL7eo4JFbgotWFa61nVcXNBAYjvibgMHE1rLSqDJYLKmp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QD6psWQjYAKW2T8tfaRQZDPz6sHjGxNBwpenvB4jKkHoUQRa7RXKq76JXHk8e6XdSk6Q4wAupW6kraNtcvVxeDx",
  "key1": "47nkchFriCu1qj5uYa7zgndXQu6XWtbakoyRZ1Nq9C3XnvFz8u7KgNuKr65HhXimqg86oqtBfUkHCYUnAhSRsxEZ",
  "key2": "2XQPKYq5uPb5PTUVXwMpu99zsMx8KVjVpGry7h6GXCeB3mUHZERbwv6nF9ok3Jj4FTwiYNPgcz8qm74mQTeTokk3",
  "key3": "3cAUsQaEGqzLtR6WStbdY26R8LHnq3EzAh8uriMXYim5GmNya5uhcjkxpRRddk7cZ38EJ7KmLYCiL98TcsUUv4Wi",
  "key4": "3U3iYXMZE4NM83njq1uNpAiYjRXy8UPQ4tihVCwQVYzVJUpHFeARuX44FUJKQFusuKDijAUcLnG36Vf2KkvZiHVU",
  "key5": "uj8Wp54MeDye64bnbEW2Lpg93b79hn1kUd5F2CnpFqSGVP2C3tXjHMUPYAgMRK9qUaRaF1qfU8StCi7tMP5xqqc",
  "key6": "4CdmVuoYJtovuBSh5eW3th5ZRFfD22PuctUpXUEu8p66ZXp9GTvzNCxFcHWGkHgda129MdG73JjbR4wJoewYVaZW",
  "key7": "4hHGWdGziLmbaPerfBvDNwd8vP7p7VrdYqDLnH8v8vvTAj1JZzzBaKLSy7KGSzU1VzgBEpxwWenZNprcWGP8JeYw",
  "key8": "4wipGwr4FDbe2DwVfSWDJiNSvmaQhSZQ9yDE7yD5Vexyf5Jb2t25RS6iCeQtEWutgPsEgLvqkb8WfGKXuGJHGrtT",
  "key9": "53PHJBF6TVeYibJGWn5RmvSVdsqSRgDdaM6i4kaVexjBNosiwbJvaNDhkKQwPKjUBuuMmR9pQYJnhZbbn6gZuoTW",
  "key10": "61zf1Vt1vQRmv6Yk8LbGK14j8KhWGiDhWHhQ2RpGuBtQwQ63GmgtERxPP3KtLhw3pYnFRq6vbtVJEmsBDfjgf4ft",
  "key11": "FeqPJ6tf9JQCqF73vq3By32XcjkWz8jPWgo5rcN2yrsx5C87tR58FJpoxWAWsdMdatiJv3K2wCeKbTdAzMU4kDs",
  "key12": "4mjjoPaMi3v1CqYpW3cSV8zAMTgiAUjjhYm1hChBFAQAbXCZFcWYqKhSUssrP3rQQSPvnFg9W4vu97anwenUBch8",
  "key13": "2uc5eZuRTLWVDMNdzECfQ1bNKsJUworUA8GEAy4GC2ku56T7PHpBYE7qyANYxG6Xf9Yf1KC4dPDfhUfW9fragXzt",
  "key14": "2iXKZBZdb3DX1wdK7tc1kiHU7nm2S574epRU2VQJNE7ie1pdE2XeUgWc8mYN4JuHUuBC6bZxZpTheezcheMKUFY8",
  "key15": "2Upw5Rz2LBEWS8FQ5NzGnR8chmhdyT8Fxpay1eMPiipRnKy1mKcwrRZ1APMtZFZLDz4Y1vqQ4PwANQMntZxKW5fq",
  "key16": "5EXwXH5M39JgjUppNhQFTJZ4UPVnN5L7nS3fVTcqhraLkgmPvVtbKtiihJX9ZTg8Tx5GGqF5ptSnmF5y53dK1dCm",
  "key17": "XFnRaCqXwN1VS4uFjouCeWoPU19nH1RPikNTESpuguxCpqqpvGn27hD8YmqAw1nnUCzVu6e1RxVoQVh5HVpyU7i",
  "key18": "dE8ZjhwKeLKXjFshUecHfWQG9McqTy6azuLyrzRwcW9wwxraBjnfqLyfRqLzzD3HYVpZnYrvJjabhgJDkHa1HAN",
  "key19": "66vFAmLuCYCfYPqGg8wYPaUTtXgVcDKa3trVGSDeonFqRH5eMW6zoZFymjir7cmgiAZs4aL7R1n22TgdUC1ognyy",
  "key20": "5ExifFo6n9zpz43MbQiuoJjo41dSdi2skqwXrUQYK8d6wtnkkattGyBtFD4kup1h3sn2jDqVS7PsCWz2xSU2kSnp",
  "key21": "2ZnWyY9MdquuFGSmRvyrWc8U9f8PqoHFo6R2dhNQj8jY8vuXFizLz6XKVBfBeG16ANZ6bdH744Kr6AobZVKKiBMW",
  "key22": "21VYwKwebxoUEVCx3ge8jfUrZx7pwWdj59A3omCDAUqhYi5CffTvPmJzzi2BLUNtQFXxsYW3ZdRQovqXoqLwEZE5",
  "key23": "3dcEimiXrQ7t8ebdXdZk9YHHd3tTbQPaAYu25gyyDmdeGqhCtqTgX848d1neDUw56RDJcim7DniobNF3toJuNCSK",
  "key24": "3yVBSYoqmzt7J7xzkemc96t2oK8eMsxjHajf1rHVbCDWY3mNRdE6NQTwXXxjkuHhLa9XzGoAM7uSGffrtkaEP2jp",
  "key25": "5k4uV9KVhbi5Dj8S492kZiAa3qVxAjykQ3G62K2bGWBZHTREvWyjLeWm6JaZb2GSECqnh9SkjocVs6t29aat96oJ",
  "key26": "5oYmpWpTQNKiQhqEEhH7JA45VcVxR6EWqQHX4Y1rLef798GA2LXd2d2HEVJ6ZsdBvBEN9GDp522o3ZSvvsLnrJDb",
  "key27": "4cuCG9tr8tQUwJLwgag9JYPuvkLGj4qXA7qRPMwzj28qEpNgifo89DTS6LQw8W9Z5S448zvQZXuZMGuXQoczmJXi",
  "key28": "ppJREs3n9VX4fsdv1GpCqb1djdKcJ7xB9YJYaapq8rggdrTfdQZigEzZpqUrzuwqXHg8ZbXVWw3kCLrwrk8rz6W",
  "key29": "3dLWJjTqjnJNiEhT7rSHSaRp64GkojTagxKp1MPcqSTVAxPTmEvHNCBDDcGxTD561FuKcck39pazXxRETiBRFbGN",
  "key30": "4K4hgQmBgVxTWvNGEs7sXq3u6ciovhtHRxuRuaXWdvjzb7XKxJtVDLhMh9ZvxEczzRmSwMSbdG1H2cSe91GYwr55",
  "key31": "bxkNcGc2A1TeoFKQdzJAaodckxvxortzPqGjjTsja94qvARWuN95D72E2YAnw7iqnr4r39cDUo4thbuumDF4CVm",
  "key32": "QMB4PDPeeizVq7iPmVjF2ZKAfUQVvPj9AvbuEZuA3YNgtTstf1M3TqEFVBbQTzWvxaa33mizbCW8LDtekDR8NpQ",
  "key33": "3zh3RTDWQjM4mERbMAWchq4HumZzhJVfddm5Urq197wfbW8MY1YU8nRPEJd4dRYuMBCWejEjVHyQEhwAwDwmzquq",
  "key34": "56avi5HHgcxXPGfY9u2LT13E5Eam3FgH5decTy4fCTQAA6eEwVK4txYXAuwGpuPFgb8srF2Yv1A7DHRxCg2HZ8Rm",
  "key35": "2c1H3KMENCURyQoxxAPtwNhgv9Lmt7b2CoZwxTTtahuBm8KzH3C2vZQQZuaLZdmkbN6uuHYpMUg8bzXBpNb5ZZ6w",
  "key36": "5pNcbZ9H4TcF9Tdf67D3USJRAB6YytF5x4escqeJcxN2abc34sE48Ke1yKxRbvyeaMcRm9Cqr616RMfp2rLCgRk9",
  "key37": "3WJYZPRNVogchkVfW1csD8JPDQdypdNMDx5DQuZiDGDvGFFXTMpiAzCG3Nbfke7ueB9eYGEDRhX1WiS6DfsgAWsy",
  "key38": "5AyFWoVN9SknJeVPxa8pnLCbAKGS8a7gnLgx1jhmtHnsoHqsF1pHB363AAW86CesnRK7HXsnF4NGPvso16W5ZHZe",
  "key39": "4ypneDubVngxz7Jcuicg45DUrwUEBirqV32VWYcHSNiaBprtmX86iMQUgrXBNJaDYxvNAF96DJqTjGmEkHTFKTsW",
  "key40": "4oK9JqzhvMo8ZWqHs9FmZf5YfTEL3Dj6A5ugTbvvZ1jNpbEck9wDgBTp1hXh45B6cVStHzJNaJDfTHcnLubnctnu",
  "key41": "3Qfnqhb5gdzZ7kBhS2tpMGEUfTq3KknMvKTAqArffSw5NVyRanKtb8DSVs7dhdjint8M4aGt8W2vhtzsedE1eLah",
  "key42": "2YFmEVHHESrZhsSwFSb3MfxJ6VrPPZp6nZhYuAEDFjsUMkmyaU8AFkZvSQofWtyttpWwPycxgzZG6R4x9jcRS1Zb",
  "key43": "63uGiDXptFGoJekGMvCUf5TjA8TWuuR9ZQh93viqnE5i9XYs5V9vAmX4feZYErgMYZdh7ooymwypGq3WztuLF3rt",
  "key44": "52Cu2BNd4RPRFxpR2wozNwmqk6vJma5R52jmJ7bJ9AaKAs7g5BE5q3izWQisfsNoj46uFuFgve11Zx4q9ndymogT",
  "key45": "62Sygt4tnVVN3Lf6si5wqixwSvuDFF6xVhFD8W91Xb1G4U6ou2jK6C4rnNpJ1WPHVLApxLukYorwfmDRhSchcZ4k",
  "key46": "3rq85sRVK9bnAZ3quQc7nbSV6siV8TRb9ysrQ2qEF6BiZyXGnCXQU68Muf8tPrgQFmsA95WZ8FLrRTMZBYQDmDG",
  "key47": "5c3ua6HYyj69DhVwVc2fhcSsH1YkLusVP1b6th9bnNAQPeFRuAJ1KzTgc11wZcjWmZBUvYBYPEn1iygLW7XHavan",
  "key48": "msvqMLFYKoDgZkytjF2xp73h6wJhVw9eYC8UJ4YBV4fedQ9uzfbXsEERVy18AzGMDHgHCJpbt8hNd5Av5nUGEkT"
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
