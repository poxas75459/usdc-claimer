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
    "HWvwmGrNU6tcsPAANtwz43i9zxmeYuFfB9vgMuEWw1HtuDnJNPLj4BBvVPtB2he3CrhfR3npnqbaaiDmcGJBo9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pAz5axZ8kjxmsmJtoTBRHRvf9cGNviesXUzHJsd6QSNzse7fdCYCogpeHvSCySuuFzosCPf53LVBLRoKihsvkik",
  "key1": "4s9Fe63k1vstCnpaBMY6nnxDP4XZRXXqCfSHst88BGX7XaLjSrBHnJTBjn3A4uLkRdRfMjJNKh8RXHK5Z6b9c9QL",
  "key2": "5ocVbh45XW7x2PieTFA9djqexbxVeWMnHG7qhFxzHGFA8KWNkh9mp1LnRSPneu6FWr1LtLqbQh56Jpz3LzzwZVZD",
  "key3": "5651TFaGKSBM6LbuSdPH2fyRw1vgvG6ej4uToBEBtyut7TNxaay2gCtmpEwdKDJoLKERxk7EeaYHVquRH2YExNDa",
  "key4": "4uc85fxt6o9wVLk7PyPqyhoMCsUgKZZ4v98RUQw1iyXP3VzhMyhFLCgmgsX6tV7x2KpPStBAVFNwobcHYRR9PSFK",
  "key5": "59Tw7QHq9yRZijcyuvjDxYVfY1MjwLCbxeE54xHQZen3Cc9H2L7FaawG1CnbDmKzmsWct13wojjR48rfJx31cbid",
  "key6": "3JH8rWye6ZcN7vza396GocU5hbPnm4pzL9e48zGzYDTiiV82X1RyGaAi8mUpRMcQDZbcWYQ2SCq2EyQ7iw9kbNaB",
  "key7": "2m95JxZ632CHu5KyBhZfXKknFda3PnuvPbJH9QQxpKVNhrRsLxpYic7xGa3Gk3yBzNoZT6oVuzpUkQKbkVGzUL4H",
  "key8": "3MktAHLZgVL4k2pa9nqTZaB9LzDiyAfyByM7cGfkmDehyvze7nJ4detRudw8JqN8eAyysE4nzH7Hj6HdeEmphW1T",
  "key9": "583SZ6P9qhN99DgEEYAkAjTFhsMtwaF938KVN4DvBTRSrP88Vi47e9qs3ELr81znziprBmTGRvLn7rJGZ7KzdcJC",
  "key10": "47YyEN3vivNQJZ9sxQ1dXfyrvsMzrpBkADkryto4k8F6FNzJTvjRiFiPPTCt5ybpdLUKp2XBsDXCmf6sJ46PsPKm",
  "key11": "9e7jPkKZwUcz2UPCsb8iHxG7QmBniuk1fE8DZ1RcfY3G2sXA4DrdagL2Na2azAvbciPWrzfP4GqJx341K3FJMXN",
  "key12": "3BT6uLWmz5fR6dAKxXcBayy5nUKxZ1yHGqyf4mJ24qawBNhivGn7ZVzDf3gZ5tDLyiiLBCNK2TkHrjG1khpYFwtW",
  "key13": "61nJuATpU3jhyVy4s3LmvcADpUKpobg3pF6SVu31aKnngB98dQXExNRyVCDC8PMkKXCg4mE26hhpCTJ4PfYNp9LC",
  "key14": "5VpeqN2tJoRvGMG8X7zUrUiHQ2hc1N8RP4SEqaXG9woArNbpNkZAxSsFW49xrSkJowxJEnRKwewzPfpXwH3Nmpv",
  "key15": "3aBETrsphUQyYbjBsHjSkwzXLk4WHJGLGyJcKxFeXufpUFrJnSWvg8WRhbCv18MPr8mWgJcdZ5PEVj1MPpRKR6Bc",
  "key16": "2yh9qgKcBNfEQgBudKbJtWf3dTfQFSXZTJhTc8qVh7syTmagj6aoouXoQRMuhqDBvzMoS7kB9UcKeKHHuxyyt5oR",
  "key17": "2LhLRHUAMEe82vwBvjQLMdrxabQuqqugkpsCfFjthtxpYvVfr3iCqF5bvhKfyyTkLrxXW2qKgQftKwta1zWmyjcN",
  "key18": "5AfNUYoWmhunomvVXTRzVd8XvoWjMvqLrDWqPjzqwwMtVVvH7ZxQC5hdAvs2UsdiAYCjmTjjUpqaeUv7VHLEGTaL",
  "key19": "5hiBC6Pvq7qSJsYKBiBqasBs33SALTXw17M8fAepVfKRt4VZJQtqiJqEBJfr2rHKDetXRq2to25YiedLpvoR2b6Y",
  "key20": "3aP9c8GHJLn45LfA5KE9DEsYB5yDX5o4huDxngaFJrYVxG77aYKYvUMxd9DHY72KjfEo4Gmy6JFdzqygQfQeJzLe",
  "key21": "2qnMGBqELqPfRXDy6W4UTtReiYzCv27wgHafmcPueRhkokQHVuc7K7S5gUhzMDt7dMWwApdHuFVLkeV81zURCYmN",
  "key22": "65e7MQ3vj299y54axc1c5dPTnMmnCiMJPud9ovSxxdHUXoiewRNVmrn7nxV7ipKPzZJr8wremzZAZioe7jFwUqgM",
  "key23": "amEVL9T83tEmyn7taVjVx5EV6BqCYZ6VV8paNAnyeHKSAzkXXvMAFDgDK77EWcbfpwMoXa5U55pLdb485GxsJTY",
  "key24": "5ucErTyCmJh9B6ViQdD9o37z8zcyvgty635K3YELwtnMDGx4TvVfBdzje8UoKz4nZBdrADk37MjEdrUWrZxTVeGJ",
  "key25": "4WfToiw7bjyEiwCfqVwSch2xsxARea7Nw89WTRdAjf1S2LAwcLgFbeEqAdEJFup5CRTdEfnC3t9RY34WCMMoK5TG",
  "key26": "56v92hcBrWrJAor4yFFaPrcoYQm3FBazZ2kwu7FLUgYiS87BqJXL4pNWPJiTFMj113sfjhks8EoN4VWgTrr8TrYN",
  "key27": "57b4ZsiWSPYJunNRwrdKe7HzqWqo3WfRfoDABks5CmpVXx4YvpP4BfBcmAaPtR87F53EVCaiCbQnPm3VjznAjPW2",
  "key28": "uMpAhQiVvZuhWQytr5tTLF8tQWubcqzcbfQiSi636GncnT66gvW4BqxW2ss5hwAYZqg19boCSavfmM6iqsjFddL",
  "key29": "56w7m3rQZb4dzstTLfugchaiSuqPiRPdAhiNUqaUXnkSdqAefQSdcatEeGk1Ym84s47NfwHn6qmeAbfm4VDKtQnu",
  "key30": "5ZR19Jr5aSXFrmDS1qWUgEjzPCm2X6FAUDQgC1L27uWGaAn8j8jWaw3d8uApnMCAJUjJjiFVeYAn9KwLHERFs7FZ",
  "key31": "5WWSMpZUjDz5QCSoduHp2itkCahTUkUQP3ThbD8LLpSxK7TckQ4DubrtqvSba7b9tQRPrbXR6djv13LvYWzNYWtD",
  "key32": "2TvJCpYMm6eKYbWFgEvFmdWZF2tTTdMA6z2ttv9Mc3BWWXvUj9tQSiBswpR3RnvYrZkZDf8QBggZxDMTwJnFqJV2",
  "key33": "24uCHeUX9o7SXLJfJDpQaW7Qpzbs4HhHNueDTiouvYjY7XTuJ1ExVG7hS9YyZFj6oXR4UpqqMJx3GUW9YPNuMxsr",
  "key34": "2SqUr9NtehSiwJaVgkhZ64DjwWH9mAechSj2DBhTCtsfUH5FQ49Pgxn7vuicSCrvjBttnbqSDD7xy2VU2KfkTopP",
  "key35": "rw8NrD388HZG1LxpKnDNt8o8wrKrUgcpdR8utNLFC5kaEZiTQGMc4up6BhjKxcX1f7siJcgsfxujg1sUs8KF9Fk",
  "key36": "CoinRVT3wXKqU25HZQaDCpKxwbW3cjQ3X733JZPQRASYaZSFqcbFTXvohUrhbqs57jR8n9K1oh7RGcymwYHZcqt",
  "key37": "2s6VwcnamBTLVHLGvcK7XqoZgxMhzhsqWxMQZB7CxQpAmPDEDBKmLRwjN7VZ9LJNgxcZdaKpvWYU9kjMq1zeSk88",
  "key38": "3oJQCjJqXmabhEvWXp77FLP813486RhCzEfPudJ9j4nh2C47FUiDQHtm71EHr6vqWBy1FNLFMBeUVDaMqaFE2GGU",
  "key39": "2jFWdYztf4WRmxmkGvVGUuERcRfFJ3NeU7rgWJD2sjFJGWPDTnuRsxFuRyqQrkEP5v2TqdAyXcxrEeVgymfnYeGL",
  "key40": "4BfrQD5TWBCaQez2RQp34hfzSG7Y4WMYwBhRi8svZbFmdbE41oYY2o2Eg8MJuZ3iKoxUBXibEo4CbtJN8qvwJQEi",
  "key41": "2d7Amrmt7nAD8Co7pE4VjMsvdgnjksnnbV5ahB5gycpPzw61qgf3A77MthoFjdTAjvHQMvZUDcLm9nAiy6h5PTgv"
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
