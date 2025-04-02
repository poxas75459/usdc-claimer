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
    "47MaEMQJVdDANxMuBJ9Lrr9adhC9LbyWJJY6LADzypJYxvgngZUnD45MLuySUwtcQNE6JigBtUm3jZxtxwacyiUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5biE2h8MvMrrrC5EjbkHPwXdh6Wc2xF9a78SMvF4Ark35jksK8EhQr7RNpcnySJsgzdE7cJoqbxsLtVpKrUr4jLy",
  "key1": "5rF44FeTiRMPnRHh83nYB48vRB5KdnihKQh6NBBjZQW2aAMP5pGuiTMWLXee9LpJD3Fz7xDW1mLmQ4kgQpacEWFV",
  "key2": "2mx1uCmZY9dp1uAJor6Zi87kmgDLVs5FTdMLmki6zL8RnUdewM8EoAMbLt1AWBGjkcmFPnWj6pfPsSEj1d92T71X",
  "key3": "4uf95ZWEFq6kTHki4RDhxH9EfmyMGvZ9FAMMLzpMvABo2qm6tGPkoCZ7fgQvSBjuT8828vPUco2wfPYrFjZcdHrx",
  "key4": "3DA7W6xeGFBzmoran1AmKoNDFf9kLSynbYEqABKsSy8nLyJsKqbQ5a9uZtgS6aZ5zVj7Qm84QmC9RqQY34z9xUM9",
  "key5": "2PwR7jVYBYsgbs9RmTrG7A1BNvziq3grkK7cWfNV2JKBBf1eQtYsUXVHV13yT2zmm7zW4BguRypZ8k6uqm8UxMUX",
  "key6": "4rYFX2qaRKGfLeNufxZy9LfCymcSZnoFwqBrtt8PCr2GTxo3oNLw9nYDc8PXkn26XoZiuH2mjiE7FVzKvAsPg9Fb",
  "key7": "SR4GCb5oz5rgGPTUCZMh4TQbPZhZz13WVCCPiMaBMVUiTVicTkY78j7T33FWWnpUT3aKtDfsn77aKTDJeAFgymQ",
  "key8": "2pKCUv5TbpkU9hX38fur5emzpFbk47NwXNKCPhDEM7fqNahvYRTaR7BWspdyP5jyCGu8fdPs6hHE6sjDXJr4RFMi",
  "key9": "24DLEfhKHasfxG3qbfzzTxiUHccTN1s9eesyMkobQsThU94nbQWJTzjRRz8P9B6nkZTK7L6UcMFPk4JW7QEuFWZh",
  "key10": "5NMiPDsbqPddaq8eKETfXhVqJYjCuydNnfYqcBQnv4GgL6mh3fqurCJ7m8NoMRTHURB3D1ydMGZtWZ7hGY9rp3oQ",
  "key11": "LH4WLSU8x9tdayogddTUsEDaG2pT5BEe7eAsTrunUJZ4pppn3QkUcXuwCscu3zWNKJZ9XPMAJzVjhp5goV9TGHS",
  "key12": "3LUjGiAD5GugQubCQYqLvXfBhcryqrpXKdiRwPKXAnZyqLcDYG5M6mjJkMkGcrHGeh8WAgipnfGFc86y1f93R2YX",
  "key13": "2KEX8x7ezVjTav7Hqfy5b5nbWPdDv7xkQNpkpstqqUyJJJJwWKgKbc4CB7AB8df3qgBwwECo8WMBfXXpiqtCAhS8",
  "key14": "2ret2XByBfacYuDA6ypCKjE1pyvSS5JRgqnVDhRtqiuPnMNb2houa7R3Vq3SUNto6a2i4SL7jGJwdhcggmZWuRTm",
  "key15": "4ap5Q565UMYB2ybn38GbqXx1tg8ZaGvcVqWYwEJ5AQoxX71bjnKLahqmXm3qRxHGhgjyahm8q3vYCvXHR715TKrv",
  "key16": "2zFY4Z2NhFezxZ7MH7MnxxMkH9rD8H5mEWDGbc8Xp7VRbJZU45U5EWDk5eeodx2eHZJh6JiPz1QhiFM5GN8gjsbY",
  "key17": "4Wi7CLbZwGzNVWUHn31hQxKSFKnhETt4VyQ1hBrxH1fCLLJVJc1VrrnGt3KME5LjgBJXzPHuoq6xiScCcUdkqfAD",
  "key18": "2HHtvBdFmatp9uTQZAZX7QdWGo6XHqvcjtS8eu9grTuJ3vWyHNoFRE3Zm2u83gDXwR8roWGv7aQFGVqjMTyFKYpb",
  "key19": "44ij7scAd7vEH5wABzhxVxdP3ZjntLYBwbThNbaeP82oDQTmxEaZFqp4Drm6vkida1AR9Ckex8eynYh2odCu6Ksz",
  "key20": "2nzhVCWBcfsGpTe2vVinrwSUUfp1EsWdaV1exs7JzHnjJ8pke4bsc5LBidL3gZqk1NJUi4iEtsQm5cbU7m5Bvob3",
  "key21": "24iAmaHwZdHQsSTEwrLnUWbDdfGStq6Z4CaNx6bUR7TCgSndpwFyLL96BHA7TgSjf7TrAcphRDjc6WhR3y5NTUEo",
  "key22": "32vcHsYviurTtoNRtdkWeuSBjLDA5Uu6CQ43XzXE8eYvpu2VArdgPrdPkGmBNQhKmC7oqxeyWWjm8bPUqgZnr2bz",
  "key23": "4n9tjTB63J9LCZ9wFuDGxtaKcX5mxTxUDueSG3qxF5uxUW83edzSHFyhHK9UBH8gyeak5ZEAm1nGCjZh7LWEBWWr",
  "key24": "4LTTGypnJagR9iyEVdW1fzQvwBBn9SVz8SK9HxVA72cxMUjdBZ8hvgFohCXSYe7L7xZEsHKWqrbkfiGHL1w7jBQR",
  "key25": "2e4VWY9MphjwyxbJ3CZtCg9FPZ4EbdorKvEgQdS32mULiRZhHYLTDWaoqMWWwE5YPJkWrCFjpiL2P8e3WDHGcDrp",
  "key26": "3cv6Y7HeKJgjpFiZbDzYMXUQhDrMGXDx5aFH5Xvfrtzdy7sP4u7uy973mrS1N16bUCDE1Hs7yMiyM2wbW1a6ccws",
  "key27": "ztUXaEnH8AY6XAxFbQd4BKxdAiMAxjuKs43XCjnaSbmUPtS3MUVxDQnUWkqcFQPXJ8JmWBrT4bATvcguikdViAH",
  "key28": "UUxJHnQynbhXVe7MhvjfcDYojvKAgRgwUuY6mwtC2PUgWvKQtJBkZPmBF6pe1ASgCKxiJMxGpc9dZjwNCQ4akSr",
  "key29": "3SLJMU3pmZY7QoWXUCDtfmYgCbpitsSmDEcjBUvSs9PoGSWi2wmjqSGFqCjrxfeABWwMVQ8qXcsTr9QVDU2PxC87",
  "key30": "31n2RGA4GxRTaF1vN68xU8xTAPujfxW68kVhzoj8H5NCJtv7gDWJ2P1i4p5Ht5K1XjJc4mN5CsF9NLVa4578foxc",
  "key31": "47VJVvN6BsyJJmsvZt6Yw21Pd7nsBQA85V9MB1aH332inkmpHv37RXiazXy8bvKkkrgHDVJbDqtN4SfRyaP1D7kr",
  "key32": "2jh5JVaWveYewwnQsC5ti1nRUx2oK4LQbQ1c6z7ih9RXLmWWqMPuP2gozqWRGrKLgEHJ9Es3MSZWxJTZyxcEsD39",
  "key33": "3WN1Nk3cB1kpAokT77oxexVh8E1FVHbXHnhqzjewJ9baenucWmhq9jAmsmXxvBrJxmvbzo6aTdVhibN39WA4qsQZ",
  "key34": "4y2qyQDT8LGgV3PFHNzX9fmGh4oE5qGKqcYz3F3KkcFDQee46syc5reSqsCbtyr362fRJYegpcvdZtR4Vt9jMFxC",
  "key35": "3oFEuW6dLr5pSnQFXTy3cFwCAZ9VcWNqiVgUPnQYUe6Pws2UXebcPFthqWJwbAmMvGnbr4waKN99XFV6qFi6CsbA",
  "key36": "BiRLNPeZizdSZqExvf4iU1Wh1eHqtoB7HAtPRpV1WKLsY5B84QioB8hrHxnvT8NMa8LvxbCQXf4CTXkAYev2Fux",
  "key37": "4Hg3xDwR9TkcU4NGX8rtxds8GXwXi1FcAFUrEKi8tYXxPRZZ7CkCHRHf8YzpEA1B8TQaLnuQ5GTjkfWfGUC8mhkZ",
  "key38": "3YTwpNDH9KijLaa9LWGpz4U6YJuyhxWy4hs1kt1uxQ3ujUPdeV9tQA5u1SyTHu3iB1TgDUruqYBYCHYPGqYuz3vA",
  "key39": "3PUtzpN1VidhfWMthgMC5u13FmUHjCRCxV29dmayXBJq5RbefFBWi9jVLUgRgvesYma9qjdKJRiUCmVp8TpAGZux",
  "key40": "PuQHrQ5gSBvUcm72HprnjHcsrSRxfWiGYFZ8CP87gkaEqjwMMPSEEdPa38354TRZkprZq57ts2WDyiKo6reU3HU",
  "key41": "3uDoMyQQoPS6GyS6QHHUEaxiTPnJdtJJkN3c28LbiRhU6B4QGHR5GPeYjUe6QTjdjxhnLgBXE6xfiaRjvQhwpRtT",
  "key42": "2KVz2RPUC2r8sjJDXhsN2PGte2bgPUVnuZYidTs8HhwXq9Zjaa6xESZoTyuAtLj778aeeKYGTR4amTV2UJwQ6qwM"
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
