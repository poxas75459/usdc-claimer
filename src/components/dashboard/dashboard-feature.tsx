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
    "2StsEZXUJ8FZNjzWZ67tNi7we78ia2svDvhVen3T5yqQLH9LqdoFD9iBTWkJNNtaptYB2Xr66PTd25AnkUKPS7q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uSZu8TcebVPcZpEyMQN7WhfKCeLpKvNGQ6Fk7d8XnoKHnPYXohAUFmraEr3NyhWTL8H7UZKLDQVjSwbU3rLC8Mx",
  "key1": "3HE46k2r9HvqTd3Z8UjppT4x2USXT8SUdayAqZuuAuKPeTZzq81JLLHJSqKspuQLeip8Mkv6DKMXfCyYvb2o8eeV",
  "key2": "3Cfqox1X8ChLtAu1pUxCHxpsLNMT5hTUtxcLJZWM6MbHAdoffBTP6NY7fbMcirv4M7N8L3A1Wn8T7mAeDViXMtgR",
  "key3": "657tTgzwd8aLRZ8j618GNp4YhNTWJ28en5FCEAaRMgbqKPZ1ezY1arb7ehSZ6LwTxz2opTLmMpSGgMAEvfUQY99K",
  "key4": "3oqEJAs5PH2AfNFHYVmLpQpCDFnD1VLr4tfJx1qEfuH2JcN53eQQ6DTvN8H8zXc3o1AQEKaQXRAoyamk1Txcz4hH",
  "key5": "c1WZQ1MGuXDSgNMN6uwbJutPfvBLJwQV1cKBKDbjN41raqPe7rHzQMojFBdq4aiC351G7xNX9SDDrVdcVN4BWrE",
  "key6": "dTA1MvKBfUTYHzHfnFW83rAvDESXqZAs5WzrTXoUxULbUJgre2A6tpsQ7RCrPnY1ymnWpCxapYH4GW1P1uELnm7",
  "key7": "2ey5GKL31Zuy1zu8dXF1fDa56TX5iV8oQWbdxxG84efBnDRL7LH87Mf7cHJhxeuLoKexudQdRvDYSHywoH5JVkH",
  "key8": "bbjcGV1cSRSFS4aDjUSoZfMWVXeZuJJCoZrkLGeGG3xKpADKMXjvpDs4ZNU1kwz85dcv2T6Zyy3Murr5UHhyPZ2",
  "key9": "524EGiYAzDvEjXitK5JUMNF43xJqchjEm7jZSnUsrYM1R9VLBr8gtEta9is67cH2B9oy6rhP71RactLC4XWszwak",
  "key10": "w2ZmbHMEWV1UnaQmh3kt7nQyfbzsrz8sKm4udMG2Xp539dWb6qLr2hjJDnwqkBAuvT2zDsDwV1W1Rs9yWEschBs",
  "key11": "3pbkCjqsBnh7JT51CqG8Z44azGUSjbLRH7ngJYJV36GcgGvnH6ZfAEr5gAHoUA7YEgNLXSNgpAdYFEjue1c3NGtM",
  "key12": "3rNpsH9eT1DcXv7DHoxzcp6y4dMdYuopeDtdPEg8G1dCNPG5soeVjmXKtkU8z6Nt6cXuQcXBAPH3RXHJFzSz42x3",
  "key13": "3jg4VsQU3APmSaC66HV2fC7xzsFLkF8w81hCfNLGm8fpmH1UAMuK3YUG2RPc9WUV6b8GGhwArQmm23snYXrrnwQP",
  "key14": "4TvVvKDt8pA64Ru49w39YRzpBk7tyrTJgDCM2PMjgZu4YereVTFpKunWu5bsf4gBGkEfojaz6jjgg6a1NkrTPcoh",
  "key15": "4MJshzpVw41SsrjUYm2xRuNHg8Xpnn4yAL7uetHBg8qNtMBMqjFMkQka1hk3Q5ySMLENKghEN2U1bs9DAXgqgKKg",
  "key16": "2nNBBnjqVK1VvcWtjAowWGosYX45S6hCMkZkNQEjRqJvwtfUSejn4WPvJqLJSoBLTVJf6PTp9wPaBubxZoYZPjSe",
  "key17": "2wtjRnDAsDAL3wp8dAj9nMCNwVcyZ9tEVN9beXnwo5cJxdjSBLpdKVgyCQcsmah6UCr4f3ZVXYrMHJDqoEFVgzJD",
  "key18": "4ymMteiwRgd1mrAAWQDgT6iaTNS13vzmzzMyuQbYLKXK1Umco5zwUtYpgLe4SB3uXkRiTK8XTKSeNJLvYErHTSTn",
  "key19": "2kVFjRHFmNcxxv1B1Go9ReGzL42C89bvdPVsi3mkjLduCkjPC2jqDnysHmStPm93Yjn8vbjbJCSNDVfJYaqunLet",
  "key20": "5yDUnNR62KZCVMTGD4xGPsxtiNNWpthocQMi4M7jnzGhUW4PvJsFZCrZLaYrmbbASPMFnz7qGG6rqDj8bdkTvTYk",
  "key21": "3kvNK6uEv3conbCx9z8mtP1C1GUVWeEuTtxeg3RSu5FUs3Yvrp1d6dw9yxqAGzsYAgVsNzHG8WTyN4vzPbQpuCvk",
  "key22": "5GRwHm4PRsKkPStweSECDKJwRwM2NXCbo7mXzwhQiLzjkZ9Yfx3ytJsAtzdA7WZw4gc9751A8PpXoXCw1AjNeo4Y",
  "key23": "5S4ioUgdohXHJhTjEXfNgNaJ5CrMjFyAabfNd4iDoB3UEFKb4XTVCuqH5F9dRPn6JWNcB8taqZSBc3cbpWsw4gR4",
  "key24": "5FXh8hKFjKHpvEpDjRDKErfmAwsZppA6QNbE26hm2yuxJXBcS4QCU9sqNM9gS7FF86SY3pQP6WHaACGYoou4a1TQ",
  "key25": "2Xe2Ru3wK5YXd4tVCV5KQWj9hTsTSQDGyxYE5vbWB2JmQD6ex2r3JRRPcCAa7KS3xSHJJBHeid9DPsxavabvbrJm",
  "key26": "4U9VVggiPpxdZ5yy7DpiiPBosZYAHf4KRaYjFQWp2Zey2hsiHCDnGvmbu4NVusMgF2xyHy7buUKByYj6XfztgyXj",
  "key27": "3xmgXvTG1UtQZDfJX8GoB6GYK4PhNmvHYM9BEwmLMLjS7NGGzshvwK79i5VH8CBoATbcrXzBnX4hpcP8HVHDNnk9",
  "key28": "4mXRseCuN6C7NUoaCMJ64wivyJbmGtRASAh6w2v4JcWDrhCd4bQWaSBHpcQmYBw2aByn5X1ff9wKfmdpwsKT8tHY",
  "key29": "26Z3usw3QCm7VB6zS5XxmMQXXeMZRJoUeZiGVijCupHLSxWXaua9g4tE3gKn7gMR88Ptnpq8ZhMEVMk7yNmUhxfC",
  "key30": "2MBm2f5vwmHYZBT5MTfYRdFiEbp8zVtQHSh4jsAwouX7ktXvv4A9hVyt1wJXg1eR2keEcU3KDKEda2ZDQ1bVQXJ2",
  "key31": "J4Xb1nkqsD4XqTurCzrfjnGM8qqBbjiwYvBZDnWqQBv2ZNM4McrYdeWS2aK8q7NFBzwmXr5jfdpgLAqQB4bb7pw",
  "key32": "2z3s8FD88z8j6cqMx4dwo6km6DEsx4h5yPoH4Y7Wz2XpWpf9JAWDgM6feUjKwnQEGzBjEig3ccCB7z2g1j6yV6ub",
  "key33": "4YgSFoV8udTSJPtGG4CJpDfWnxSPDE39czcVpeCYZgypjYgiJcxtjKd4orHDgEPx7Lt2nEsTjJeWrqudm4ACxREr",
  "key34": "zrhWBbBMNgAkx5CXzfhB6w4WTJPeQXh5mAAXbnrjL9MXKQUrC8uczYmtkPAQrPFv7Z1N4shvWxSb5oWEZzGSoF3",
  "key35": "3oVjJd84s6EGLz1P41WSgbbiXqQ8TJWGsycYvTgUshN8Ej72WYGhrQsMFDyhGR8gbquVwguDAupG9Kocxm7bRiE4",
  "key36": "5dKRjVfZ8tGvdAtnUPbTLoCbYTapjp4FETqNuHQykRYJaRGEyfEGKzdKgrdrG7XbBVANzpKgGdoCuiuQngbJfVE6",
  "key37": "3DDjxwM64hVJmvf6a5SNEcTWN19UWKBFUMj6RG15RvLSkaFbuDpyUBP9Tn9PJtA3p1uvWWnJtqys4qrqjwvNQXaE",
  "key38": "TRaZYYraACen2ko8MYrZHdFvmLw9KrGd1maNqAUuWEMojzvEVD24bqvWSKZgKcN99V4zhCh1u1uDi2UTv9D8hWY",
  "key39": "54pvjbuQGJTqt39bktBzkfbhbHTXVppNVjN3B7253fSz8KCGfivQFotiSkhW1HfWDWBZZPMfjxSgnNRQE1VR6hb3",
  "key40": "3wwJbNKAXkvJL7q2cSaBtGKKEsUgzR1HKkEkjd3A9GDgsjv9QSzwEaouiVMcT7XGWX38icGJrVxtzbYayLXTsdHb",
  "key41": "SskyGpMiB6wuKHKyJiH8Jo2XXmnEVSZsY4W2LA8kQVDJcJfT3HFbdfhyAWrRqD89zq1ZGP4uoKmCt6Zow6ELTLv",
  "key42": "5H7Btij6CuGmeeL8UTQoTgSt7wccMhNepdzcMPj94B61XjWK5XS9gFr8aKKb3qFADYrZAGU6PV9MBxBPfF6QPGqD",
  "key43": "5qRhT2yjYHaJaGvQfNvEhauPqHGSq5DjX8x6yKmZT9SSxC73txKcnncwQnfGebeWhJjCZeVAmGMa1bJfCXvBboCV"
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
