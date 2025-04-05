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
    "4qBbzuVGpBb2Gem3bS26WYquhScRVR8uZBuysJaxZrd59zB4XYvdyFTUjUeKAjYxXebW3YxZRdS6RyHfff7u6GDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ceJuk3rSzxwowyVzrNVx1qpn2Zk9XUY6ceRZAYnYgkDn6pZumqKxw6YLbXRFqGML7tuJptH7NR5g5vH5JoELEWF",
  "key1": "4DPpVxoZjzzownhzGXh9AzDUKN52N9SBjJDdG2xaBKMCpix1euXrN1oj4nzBmPPFAAYDL28oCob7jBUWpQSZYBSB",
  "key2": "2tsKEeqAbRtexwN7FtK8tt7HFdHVpbv197BFnuMa5t5Hva2gUXFWSbKCqPVG3xRSiQg6rExyKgvv8JoixNQUSEvi",
  "key3": "5my4z9ULfLRS94HwC8UwAjy4v8gwVZxMjGXqYCbbeFcXXvmdeGkf8evPEzHWocviDDkxt1BXnM6s8Hq1sexKC8k3",
  "key4": "4cdy3nppE57gekJWkSbt2vEwSK6vBJ9WvsQBt6gXHgXzX24ng2V5nZcdWRDCrJh4B9s97S5tLMXwGyAWFnYKxm1W",
  "key5": "5csodqAUyJQYK1hwoT9S9t6ecSSaJ5g56E1nXQCeYrJiYvXKPrug9SnVM5XLWtgYB4pzsfJKBrX3nETu5ggxPeB7",
  "key6": "5oZnsMbVsEibsatA5TWA2M1Chu54z3AhzFyGowkUBgDXAjz7qTfs6EEM35343qd1HpqNwLzPKM4dpaDqHha5J2fK",
  "key7": "4EqMgzDSgAPsikASUrGUKBzviZyUuHXWkxrQpsksFSnStp8ECyxoYwi4nM4A2w1whvp4US3xUahfpPoi8uDAXe2q",
  "key8": "3MiHJgEaw3a3FvXh5zr1xQGLAPCFJS5Ug13AjUXMhkoLvA4c6P82qt1fxCRpho1mGoxXVapVLhuLS9GHm57hakvz",
  "key9": "4ett41msvQTz6gtviuzmqehXhyApWLi8ZpMvK7jKyGqG5xEfLmydQCKEX35f6bWTK6Cj4UW5GUwgznWVwTQS5Lh7",
  "key10": "4TxqwBu25rxKU6QUfgL6TELdKqLTSBZ4qmcJgUUmAxjvjU59mX4m9ys1kKnf52p4TXUv7GXjn85EDxvvdmvFEo1h",
  "key11": "getf6po4Zth5QxUXm2LpzQBnkyMB6DQiBakmxyqLBXW5Pw7u7ooQcemdNEsan32NJKEfhkzugSES6S5fxvW9A1H",
  "key12": "HHUqWKPTvgdaMXjK7FHouAtUjbfWhydjknVZ8U3dCEyALNEGPaBfxJyqoh2ULsyDRus26CypN8VXdG7U9BP4ZJt",
  "key13": "591mux5furGhmbZB6E6CSfBH3SzdUeMmQrzsgK2viWtSyRbwKK6zTvYtana6R5qnXDLxSyiWyzZhQXCtp7Xg7Tue",
  "key14": "5kWg9ntsknQAoe9DuzebNcH281pWVZWHEpF2G5LbKk15e2FZ6DwpFFr7sxVCXisw2kqy7ChgNYaYnSB8cBBqWCjD",
  "key15": "2QSYGnNaE5EoQVeNvCt9J2DZA6F6Tg3CfSysJ5otdWg9KnsXYka9XxYKcZsFBxKtdrszznq2L6XFZbiNG22AgCWT",
  "key16": "2bvoGSHD4LhRuYrXrv6HFx9sR4sVQ2UthvdPdTi8TzutxQe3GVUQkJHSJgUNpo2jA14NBswBi6pb1wNUUCvzMes4",
  "key17": "4eFRrdQj6xVtjhKudmmXjKUQf6xCWPHrm3vE3zcnkQeH9ntE4PDoFzhHsdcJ9uv6RgX5ByMBXzbMCYWcsx1t5Tm9",
  "key18": "482LkyMguPm1B4Xuw8UxnSyfFpsxb2ej7TEZbrsdNYJ6EcVuaSAsL5gSaUg8oMiVisPkxJcAQcGZStooD9FcyWHN",
  "key19": "vdA2bgH1gfZnnG1YrpSZsk5TYzfk4UFCu67Tnw8wwwr5fsxiMcWd2WQ4gY1W7AtobzbGEfNARcjFaJAhEuuWqZW",
  "key20": "2fyKQh15V7pnemwqqv3Hx2AYrZra6ktfUw1dqeiQQ7LseyMZwRLdo4JU3vZdE1nGx9HePtnpqYC9WTiQp4zPKeG7",
  "key21": "NxN3Q1Fixzwsx4Q4nTuwYHKd7EG5pvJi5AHwCva8HptVqifAzSX8o2fYVfCe2R5NHnvvNQBjcFoxyyZqmgqkqYb",
  "key22": "42HU6birXU7XHeHSYiJAPTLFuRzFWy4uE5dhgtqHVhAqRjMTkcsGye1pd6wCs3T9yVYDYE7YPPefFz1Cv3A63Ddt",
  "key23": "5kHB2271PYeN1NbDxTB9f5tteZYHhu8ibGxEboEC1kCN7dLM6w7AWqrNra5uCFEHoamNgTyo4Y9rwtZckd7R884E",
  "key24": "4Wxs2x5DLov3o6izyQAmNvNMWUMJCJE1jM1CTaE1f5evxFopSWBp3ExD1eDn3KThGyLSzN8HvnCEJ3JmLobZpKPm",
  "key25": "4YZ5RAa6wyk1py6nFiWfvnPxDLt31i2ANxrAXgQKoRxfnAwfv8x9yiojBZD7AUqHCpDy4A2MjHM3pH4EuL5zqVx",
  "key26": "518YUMckxdcbS9VN31pbc1ve1jCCMKG1WbbaTJnQzhN5mf1QurzSPHfVdCEZSAK5FBEXv67TzfduXzgoo3uth5zu",
  "key27": "5eP6HBANYjhvYK59qP5pu6NfnJPG5pAeXhhEh6giKgqweQLrLRA3Y1Wq63Q4xes2NyKQCbxUtTe3CcvZD4B93yFy",
  "key28": "4fb87goqm3LkJ9oFKSSVNmphm4XLub3c8u9nA1iU9zQU1SaNaDHmoKk5XNiZSqb2aixCzYB5D1E5LqRtoZK9qNsK",
  "key29": "5VYSeG7f67skH8g4f1sPAiWL4PH9ZqHoehVLTcf1KQHAedt45GL3kdKxu9gDzWMY2p2jPEQvMk71Lc7kEAkDs68E",
  "key30": "4XQt42e5XGkEYFbiG2AfauZP5f6z4567vmeJM65vL6Qh7EZncojwDKWbnoQwbQHLaHfaC2w6dDJFjFn4msypAcZT",
  "key31": "5PLkopFVeBWMTPhrST7TaCMPc1DyMe5trMWedmD65SAvTR8fGA9WnZuG4Yuo6zMBbqvUdm2GZK8m3E1sJsuf16Vf",
  "key32": "3dupUsVDqBoXeKRQbutXMDhzw74U3E9c13s8Ds5878PA1kVQ1djoAma5LpdgWhsXbwSRFK31bj9dRxDu81MKVPqR",
  "key33": "4HNwaasjuFpxW65Jdfc4ZwdhynwQnvFCeoNuVHxgt7MiXkeKKR9G2QPWKcAkpPiyJ4RgWCN8Lx8hvAC7QhqVYrwa",
  "key34": "4PjU1L1gb1kwBnGRPeVdA9fvujhPchVLCDLETLutxN9SSDh2g1qN12Lixj4DVbRL5zFV8NMN3hUzPh2FreV9m8os",
  "key35": "42htW4QZWJp41radvLg2TZ2WJmgMBCbhfHJdo2eBfarxS73w8MgHjzMfyGtWuAfVzTxVx2MtQWCdoUw6pxiLyvdR",
  "key36": "5SAznDKYCQsMTAewFuct8doqUWmFXG5ps34UUo936Q3ArLfG4LS1AvDS6SownGaJ1mWTQfaKQ6J3sAXuxJWAgYPL"
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
