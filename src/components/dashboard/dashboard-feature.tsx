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
    "2X7wrQakeDXtbhHENF2HoLBhWVUoomph684vLZXUUJZEANSf9GUzBv9Mc3hpp9fEqobQ3RXTjY6e7VSsaGHGudUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPF3z2qUkwpNkRnjtYDu8YyKx54DaRPuHDexvNkLDFcfBm2eT5H4ukBSWNvafFnGK2uBbnWqY7a4RczNYMfm6mz",
  "key1": "Mk8zazvpm9kHCR6dPUUDfUrGm5ovgMKUQQ9QLci6zo9tsR8p1f5unvKNpcrtrmhwsP5ZufqzK8ua7zCR3io2891",
  "key2": "4s1Ygegqwz8Sz4u2dxMnKxLonr69BcEyg5kReK2FEaiiRYAPQvmCho7Y3Ld6bfA56mqwvJ1QzuCXMbyLeZKh6roF",
  "key3": "5EB5TZPfx5FobTsnszv7McX6bhgsHoaYNovr8EC1JPUka7h9RnKJrweVomJBsY2rdV56EMWkoZ4sKDhq4m9XmC36",
  "key4": "3yUKFhdhSDKwVib1c6LwJuMv8iKzsLKq6JQAygPyzF7NRbEbgdjcfubPWkLYk9uTTvvZvn7JQRzQbLubH1nJq5Hc",
  "key5": "5w9XVDsmyaZkjk7J33Yp2KzKKu6nfrhmiUUVrNQUYK6JWUhNDdoRPebb7ic22i42UZzxgDUh2QHMLKcCNZ9dFAaY",
  "key6": "ree36xNmG2LREHAfbJvYVZFoZoz13zhEUq3SiV56qB523KpVQ4TEw4j8BG1evsSKGHzbaDS44Bmq2d1S8kW5E6R",
  "key7": "37qjNj9xxRvU426Kk2M7qgASHzWKhpR89ZVqiSWeJ8qJXyDHmxHKJcy6FKoMY6hw74JoWxqAw626KHqLaPv9wWgQ",
  "key8": "F2Jai9fZ6nX94K4hgenjQ3Q4BdjF89FujjKxRokRrj2b1ZmP4XvAE9uZAHKr1Vqwhn39efLLH8m5KggTe6TAWMf",
  "key9": "4bRaUNDNnAPUFqHMJr2RArmk9bduadZYNQFs6JSVWNZGkTSzqckp4d8scSdJDJ7bTB9WEgZ9KFshFQSr2B254LPC",
  "key10": "3y6cvaX7yFHqMFsADTctyTXQvjpieG5e4BLX9TXdSPX7EGhFkesVAFz8B1qhDhuBqqe73YXPSKMiWVLuJi6Z3ZW4",
  "key11": "5xecdd9hje1b9omrLRDgeVqgYtNh71GDztk9YqzUBjzEcVobBS1yo35PrJvb3LW1AuNJwJcHnACm2dP1KzFK88en",
  "key12": "5nJnRonU52TGmFRPDx1uRJASVDh7E3C8mq9osp8QPXz7SYbN256fyYwNGA4XFomRCuVR6vQK4fp4cFjH8C2LYbEU",
  "key13": "4Bzm6G1HpU5RLPfnHLQWMQszfMvatD6e6pDeYuELC8ZYVTzF6RVNumGH8gevw2GAzSFeCLjEYveVuEgTidKiVMoP",
  "key14": "4A2hSEVpT4tywi2UkxTDukqVM1cZxpJvXCzx4X81hD381Ceo9Bwk1v8QDgk3nm9DGhRhjCDqVNHR1p6fCGKhMXdz",
  "key15": "n4Dko11uzSR8Ga1LPMogQNfG5ab8UBt7vQYSYsh4rqDWp9k48MaZjociJpiH9XUxrTh6AuC5ivu3SBHAhnVcT55",
  "key16": "2rmDnnkbV8J5B6u6NyPRuk3MrYY9ZLRyQeQysuEnCdDtgCui4tw84Zf2mjJKqHWK3AjZT6GAZpRnXjCAaMBNS1oP",
  "key17": "3UP2s4BJoFfKjseUjuJSnKYTQHsSgsXubNRF56C8Z62eWjuCSgRaiGAd9xLHSVSB6EgVQkNgKWYJNuNac2F4b5AK",
  "key18": "3WUewEeeTW4HzWsGBBsaFugbgTRDR3di1huCNz3yYZDzL5fXcHp4BgFLgYTC96xaZmXPDZtSu19KBFvR3pkiXxKR",
  "key19": "5N6A6PnVNF9PmdssfHjCRqEhnnhnMf3GMrfQkuJNeJzJwnSvakycJDwbK4BoPYiGFjufBmLRPUAHPuKBDiihwhev",
  "key20": "rwWML7QT7HnbwbyWRKY7t215E7cVyCrK5rLgx3qLwBj8mBEvwUyMmk85LqBU6s36wPqCv2s48WKid8wNGFyskhY",
  "key21": "2PHPWjgeH5fwF66FitVJkDNZwPK9mc53ego9boe3BEJbHhQzMz9K7PuwwkTSBvFZg26JSsfcvqk2Ro64bshjzjth",
  "key22": "4yUjcd3q2QKAaEbo6bbBr1r2VzbanGHYForKctPgMpuZXJJxxrBTKwbnToMpJr3zEXwHohk9KAaiP88ieM4dVHur",
  "key23": "3ZSrHieES7eTVAFr9eDGzVvBG4PrcGHWVnViMcnwWQxWUiBTVw1MgNj8ogTiH2csDePDgB5298yYDGuc99ZbqBoE",
  "key24": "4J5it4u9dUvgRAc2WKMMotx4jbcusEtXb9EhCnLjkxkDKhEvzJyj77M16An1uy2iRtSv4ooKv2WUCKVJ8B9ghCJE",
  "key25": "4bhXG1stcAMQyCfKNxJKhQzSAQVW7udkvNDXkdYBTb4eBrxa1Un2BTxTtPfBFy4gcs7VYVwkDAQKuz2Y3GPpQKP9",
  "key26": "4Ls6LEYxbUEFRyxRNzsPGtWwufUJ2ksmP285MWpP4KMd5iJVLZs6on2YBW8THfMP9i4r1ZkxmPH9RN3dL3bSb5Jr",
  "key27": "22t6v4Kb7AaR7pDUyHzHgP3NEV2Mzh2AdEWQUcagYMdWA1Sa8Ebkho9MACWUKZvLdCXiY6ALWhPkmLxzQgfjzUZu",
  "key28": "3qmkxZxZs3DCSCkNJMhhxwsfBdqSpqGHbEYpEqrqEazS4KH2HyxfsJ44CrjwSGuQkF4yP9TSqNMW1HERTF8BaDbs",
  "key29": "5iSFFnUGiYW4hcYYtAAc4ZLJe7BNsx8Rvc3MqehJFwqUmrjyoGZ6HzejuGPpYzUGfPfB3yfvtYfBxHexgUrP7MeE",
  "key30": "3VSgBG2QJ79CJ9WNJYsGUZevG8aVBKFCng8Y1uLoxXXBFEUbAGeSyeMBG5yNZx58gQa8Msoxn4SzmqvJkhTejJWj",
  "key31": "53FvKFZMGrz9gGyYL9oisMzkbjAGw7eMvb9YQRQ5fKNjALnDVbmVY1DjT4SHSfvU8K6dN2ptqg3sA9RYhAF9bYKy",
  "key32": "2nmDqzBBtF8isjFf8ZWQC6jpUyKcCUpKydydM4S3Cj9XSBmy8LYYw4icPbQ193QQvUU2Ee3BKuGTK81d8BUbeK3b",
  "key33": "2Djr1Z6WyjXxL3f2EVguDJMDoytb4Wv3YcyjkxtG6mCZEoGHNtThjgzYLhyEfdEsqYUp424AdNtdnFBrkWBE823g",
  "key34": "3ME6p2GKiyE54QNDZyUaDSKFTGwgQj4cpjQ6Qgz9MvbovtKfQM4dwUq7RT2pN9zcFUvTaEDfk5ud8ajLp1zwJGVE",
  "key35": "4tC3YPd6sGtdQuqU165CjY9GBgZb5A3WkCwfwSbvDLpNrKBpm3fkwuQpMvY3gZMzg6okM4BvJyqt9PgSZnobX5QK",
  "key36": "2LpYjA4ZoEcejhpBwaTQiKekA69FceDdLYY7Zbz9R8QZQrG3CnJFd6XUrSDR37mn5wcWsnuuLSEsa6bxog1MCDDC",
  "key37": "4Bc9DnSFwgBRYKGAAz8iGHWXWTcgukw58wh6Y24HCZ5NpNnByBNxZJHQuD5nem9BtFYBsawp7HKraPXRnM7gEbLB",
  "key38": "4S4UwVNKf3K2rge3miALbE6ahd1x5o3XPURracMBJFZLMJtL3StqpR2KWLNj5ed8wESmMeRcmnckg9jfn5XtohRq",
  "key39": "5f3j2VNtGhWegqMqhoo9z9tsDRupmrYWjUwZtAjKLEh5d18NEaQhDmJmJp32XxN2RqnGAwVm4wJAt8YVAR8Eyrva",
  "key40": "55ZWENs5jNP1o7BGRcbaxk2cvgGhUYxmbReCfNMa6uHXEwR7ht39xsxugYL216YSuJYGY6wh9pXog3H5jo4zPJS5",
  "key41": "n9zAXXZGB3KnLobbnnjdgA97A6r61qWDxSGMyG2G1kfcNunikiVLWKppe7YzYPv9B8aEBCMpj2cRaurmGiZ7od2",
  "key42": "3GHJBAA7TUBonPSvPxyJK6WRY2XojwTuc8ipgGgHo1Jb62khv9F8KWos7TaFoR4Q9XZ8rxrFmuvu7AA74Ea4L4bu",
  "key43": "2Fp2qFXs8U6qxFTWypqB9pEAdMin2f3VNjYQnLk493D2JvEznw76d7QyFn2SYZHajZrTvdKoP7yxEkyhkSYzoRwm",
  "key44": "4APuyoXLrN5GiNJcdmJZoJTkuJJugy9jRBkrvLSRwJhZQivMGLmenLKbu8EbMUeYZ9HcZ2gMcnaTPjZXuC4CYPUu",
  "key45": "4yFKajCP1me1ej1nmE4UCv7U5GfaCqdppWtkBuBzjme6Yp9f4jKfBQkVj6kzbq9Cx7ne6NHEFGEnFLKYFZAuP9rg",
  "key46": "2uUXo7NGpBYEFQjdVMJCNZs4f5Hvnx1XQnu6kiEYL3spUXBzcGddZEVhqQPGcpGkx4vW8XwLqCuhRA1vQB1rGwy5",
  "key47": "25BjsjLZcX9xWAqL7PisN3MkNsU5EjLrLqxqY1nw6G9Exp55DFNBRDjPKb1HP6auSMc7TdjZyyZVJzCG1Gi7Ccey",
  "key48": "yHr6TptYx7QEyq7mP2DXCGAVWBAhyQtLXCziScV4yQffF71qnpQ3EpYeXm7bpDigw8fb2ACqQTvbujkVoTX1RwE",
  "key49": "2ARmqaChc5U4ixeVhFZu67c8xzydee5LAwPMgZ9gE2NtQCmMLgs4L4UkUa6BDVdfS99d6A5Va3RgjR7DsVVd37Jn"
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
