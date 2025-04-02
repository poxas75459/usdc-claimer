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
    "2c7EXQL4A8WwoshHeaiMvVnAf1K8m2qXP6AyK41zTn9iLhGGBjUXkqVms3TbKhjSppkrixB484aKehH7T5gAdsMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iMiKhVHf3Yxfm8JjqqUAUthZtCh2wVr6FwsNf99wBvG4Vbe1sYzVGraSN5xMTaHG5Kn5qfnAfCS1BMd8Quz68De",
  "key1": "2YaZbrZ2U2ewTNktZH3Dgthjky1K7v6uLucfoUHUoAj2DxZSgipUvZDZhwAh7hjQi1wg7xfqKQ6mVQtKRN29tN2A",
  "key2": "2CSiKBYdZbhsTdHp1Q5s1bk5hMXrEKXycMib5CsMhiNHR943i1uRFGuyaTVg2oddCrxySBHsYxbVcBM1jMhzCLp2",
  "key3": "5PhwNd9ptf3kb9oh9iVtr3g71iTtNUt9rixm9FM3oyhZzMvhSL2tFXomST7hsuWCtCZWgX3gP9foaiCHb4BjixEH",
  "key4": "RFL3aPreQ8kAqTgbxNjDtmxyxy5S7jMXZdJ6LuPuyb5YpToAzgR7qaiaBVKcX9DCx6KwrzTdUVhRoD7ioF6u1Wk",
  "key5": "42fDrigtusYKWkYaASpGNKFJUkLW6ahX7NBACL9anWmG1mEJuMYNHwy2asMWZ5D1Go5niRtJtFBNiWbW1rrfC35t",
  "key6": "3TqP87eja8mTzMAnnD6gk11FZfGyrr3eFeytTfbqEgtZ1TtzhzaVuGPvGKZnHKzyNz5E4cSGQn2TyF4YHWFbC4k1",
  "key7": "4Xa9q1WZ9Fktr2JYDJQGCMUCBAGEZGgh6YvcMZTK1a6VsWYg1iBJxV2FnwLdTq2ybN8ifHtentkoL5eZn2LfAx7Q",
  "key8": "5XfkUe34RmNdqq7MuNdVySQbvu8mNhBYdiSPUPUSumLotj92DzpF6MPaLhoobi1RW4ajCYHzkmRaGxxUeFPyMAkM",
  "key9": "3cm9ccxURo8Q9xDSiSBinqiNNFAAGZi53GWWQUKWy4mbpc12vMMir1ePTxZTN7YGmAVHV8sNWJS9XAaRw3jtCbXr",
  "key10": "5tf8MPeDRAWMkqtyZZmxuSe342dS5Ug5jCtFuTTjRaxg2oWMUWnYaRmGeNNqRYWt3VRiygiiY1186VqwybUjhgBY",
  "key11": "3uubEFGDAJjNoDP6FNDL6odDYFojPjmdMJ7ri4BziXS66DR5eFBLFpxthuUcZEjXnuqzXPo2RQtUSghhgYrz8vtT",
  "key12": "44ApZ7Gd8sR9NijkT4nJPnQbjJCaeVymkKtoJHwfVm2wV8p8KLsy7DTiwUuFWEZgCdpF5KGiW9RK3kLEo4Sx7NHc",
  "key13": "4Fh48qRJ1vfLtB42sG3EKnrQUW64ujPXjoU5bqxf7ahRxrVYthQLHsFMmRR3TKifnPuSBYVpd3MVcKtbnStNAdii",
  "key14": "3eTzXUTnfBg9Ht9Giy3nXYzJ3vH9iDF3B3w2o1GPf9T6UZmwXtzSofHbyTP6GKptRchchto5Cg7CQ1Q79oMVTVd",
  "key15": "3QiJEwZSuZuJX1Ac7mmigYgP3uVs6YG3UQG84mHkVTJq5MNbs558ciQwzDMVhEwmrGBUGkwMTmu9stpBiiXD9d8u",
  "key16": "5rpnraFGJnxJApZPRGCX8aUUttosbw6sHAXP3uTws43c2qNvpVLE7hU9RzXiZTUhVt8kd9oRpdW6oeiCZLpuiHyn",
  "key17": "28NKH34acYFTXhA7wUxvhnKcogejCmekHviyJz1KV7P2M5c2cdDxBnYMmepQKrsJNmxHoxgjEcmtpR7d3xGJUtbj",
  "key18": "4cGQCXLZJL1Z2KKEjbfbvdqRfQzd4BNk7GCr1PcnK1g7w92Uoi1jiFVqXEMDpGjLPt9oCtBhL4VycVYNu4iuAFog",
  "key19": "2ADxFyzgTbvytieKLdokgAkv7utbJR4D9YBTVBmV1xMuz5MeeqXEabMhTnH9ofJ3WynjuodxgYwM14giSkGULzeE",
  "key20": "NzXkGKB79uQ92htMT5kUoANwW6toXeTruRHR3PL5vya1UvtGyAunSrpf3bMGeXGg2gjL3XsmtD2hy6gPqhWQFeU",
  "key21": "vwX5PKWS1Cuf88Eh1J4Ake9z2if8q5DoFfvEUqTEmyYecmjbTXibmcKMmJJ8PgwkmNyPSeTfGBxoKBsXkHUHtLP",
  "key22": "5ig9Xk67bCC3wpNRGZnPT9FRTXWEgJ4DAN8BwTr3BSZaDDw4PekvkakSenc5Dviagpj4MBfwBCS8QZmh29hzBhuq",
  "key23": "zTpFxWCodirYDnBSdf1CyFg2BeNwdFJSEmLohURHEYASsPDoyGWmykKmaVZ4SYQ8HAdtWBmLDmPS9qc5vV6segU",
  "key24": "4EaJE8PYwWL55HHEmTb1Tp8SkeTwwcwxJKFEVxbjYBCHBz5T3airf1bfZHmZL6Frx1yBLAFQ4LxvudeDwCzJngWP",
  "key25": "3uZ7TvYzEfpvgavKQat5RqZd51Ubv2bcNBtqZT4R82tEBw5yrnhT6ZFCKwayB73aEGLJR5qig43f9qHdbhwiHRFJ",
  "key26": "27QHZCfJtdYoxqQSjYkpfv7zAA8dNrki3y8ihrWjCfakrZ9nV2ct6ptYmei1MG8H12iAZGMG7wWBokjK9tmMPrZf",
  "key27": "4XPYmT9BCkLp7Bnkh9q5ibMUvUqDSHsLjXYkyUZv2xuQUm2Qsqst2thDK5FSA8dBvpPM7paeyEEAtnNmMv4KMQBh",
  "key28": "2PieQcJHgsyFE5iYXTv9bTLETF6Fq6G8MtbvWhSERTdpygTWbGyKMvYFbAgVeLD6gq4ujpdUmWC7tNDNoWWoKpU",
  "key29": "3FPHejJcfX7LEtDA1iWtowftDNuWjqM9SsKCm96usQjALWUmTSQDVNg37JkJF9CRzfqqUybiwxYhNahj6zyBudqK",
  "key30": "2u6ZCyF4Tp4McBZoEX4yw2bfgvayYC93LtUJknWAozsnGZJLzgukWPzuHqhcMCs8G8X7K1zMxY9ibemKTqLB2ugK",
  "key31": "38Mu3ce9QeGWH5Y3F27RnKPrGRBwsyAbpYdWwyi6p86U1zQDqpZf6AZYt6sD3qoK1cy6jLZVLeYZ4Ub6SjMiUzcf",
  "key32": "2vB281sKfaqtM6eN5D214qJeZ5Es9AjeuiSamqka8V9v5ft7vtoqBegG4ninhAJUVWefrDJServXmdGqwzZyd22w",
  "key33": "4RoThjfnxiFGyZQGpWQeebT7Duga4kzEXnNHmyXTqP2gSRciqguV9VYDNXU3jxLJMSUCxgJHSY4gFY8mSDmmn6hi",
  "key34": "4Uu3FCxMbipbuByHY4wzduX3TLV99fhAMchzmbVUD6s666UTNu9fx7C62Sz9Ev2L9EY1qtDt1e9c9QYH4ZybkXP3"
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
