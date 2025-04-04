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
    "4AFhMPPvi9srunRZCHTjMZD3aEed98QPCH5wjaTqHhJWV6rdyzLWJ74ouJzDT2puRZB8iv66nTPDDCM222hXuX21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VErNRe3S4FB1yLQe3ZpCpoao5f4U3E8GVNkTWNMFSNKcThdfkw8XiuLJAy6bisEYGyHVG6icGAbVQ7WDmTYsaYt",
  "key1": "m9wCs5efcvM568u6wERwc9qGQYedXwBoL2A4ST54eigfNNoCZjFBmDMELS9fzkg66TptqKgyhUp4Rj8G2QGC92Z",
  "key2": "qmrySviFq8gU3RZjrVaL2iKsDnb7yCbkcp5DwGCtTXtYaDkJUkU3wdeGKZdYwudV9xhSNKY9ZKpZhtMgXiV5QjS",
  "key3": "2Bcp3XHePRpCNnLY1i9dvWa9D8uZuiLrt1gAwWFjc4CEeaPskZb6v9YXK6CD3cvjBujTgpGHJM2nvNYYgk94h5mx",
  "key4": "2Dej9nAVS4Ay9XrmsxL3jNuLn1p4VLMPK3JrbwWcgvmdfiBhUSZKT9By1xbCwbpzcKTwvwUcwu6rKSj1WRczDC9P",
  "key5": "3XStyhSTU9qkfi2JXVTtYKzvidMWhU6EG9hm3XAxHqRe5PR9CqiGkT3ANkPUhCHMAW6rkrYZshhpJG8RSzPx6UUL",
  "key6": "2SvGWQfsmDmbdAJvz4PzqDLdS8ei3zi6t2EhLoFXbLMvkwsSXQKHa9D446ACPDX8NA4KPtHs96sayfBBQiKZryCn",
  "key7": "63Acq1NpDmpTkSZoyTWmkgVh76fFbCRX9VZpHnFaMuMemtCG9D1Nef2doAnLd9ayYAha4tr9hFVT2Qo8auLYUyFb",
  "key8": "mk92wQK3F1wKn745RCotSrygW4HnkjxyCq2NVX5uNYY69z2ZgR1bMUSCNH3oyD8zy4dBgDbi1YVHVoVt5y64TbC",
  "key9": "bh3BPv4T4y6ZxFA3XtJNNPDHomzpQoA9MdcK877DgsLrukrHh5UmsWoofpw3rMqx7CQSgV4fsvB8eJ6FM279aQH",
  "key10": "4Vsie9SmFFS3RtP8xHQTfr6XA3XS4QqPK8PALqZu3mCJRU3F1X9vgTdpCu2grxtEPPyG2eBdgNKDWFCh41BNQ36J",
  "key11": "59MZ7ZPSCzuVMeECfpbrokF3ajB3kifVWyWYYsdot8gDkDbeRXNnvuwBx5qyHc7ex84S3HoCcRAm4qiY826b82kh",
  "key12": "4NPPYjaXK3ScGVesdmrPXFNquryDe13nZ1DcGh6r93K5SPv7ZMNguzYUfLyXibd4jNkw7RLKSfgxDacSjw1nzdwm",
  "key13": "BkgGrGwXmdVeRkhqTKiqzEngFJ6Q2uSzrS5gNceWmuxuAKoyHzvBHy1FhFEiX8ZsK3tKHXtg7yHCRNudPSo8bsa",
  "key14": "45vsFniHH5uf5984MSJqsJUVVVXWQPuFFqXQvxTcaKfmzCfGPmvx9zi879w1TrBnEHiHgTvSQGPT5yTGik3GdcXi",
  "key15": "2C8MZxJQxeJpuyZtJyPG7kqb4bqpFF8i7VzMHgpdWxBeZZFt4o83KzcT5xuq4gw6Cfb1u1ZD4gvdmaiWWTPDDqs5",
  "key16": "2YHNFR1GBbmLNxbgGKdBCR92RjzRRAyuas2EaXaM1X8a6LSSt4XuJocq9HLhgrojuZiiD8poioy5fQajTzKws4Lp",
  "key17": "yFvHEmBm7pDLWv3a8kK7mRZfwqAT8DMdvWeAbA2CjmvjG9AQqveiBdBuWrG7bQByEqYmUVyyHXKf7ayunaPdMit",
  "key18": "2meDzK5G9jSWfWFMrYeyZdTVjhP1dZ7qRspZXtsSayKFo1RPr1iyJbM3H7H8W7BP3hW3NeMz3ydTS7C2Ge2xkhrY",
  "key19": "5m8wYcHJ3bu9ZCeXaGdkyegsbsGTSgXdSUQNrwrRn1PbnXPL4VrC9sZwtjqhbPfNQJL8exQ2cvZbi1pzJDJEm3t6",
  "key20": "41gKahmvUA5YbWjuw6iNQR9MWKRSUch58R7qh8ycchYsqzoqvP5hNN1pc92eqDbqZXchchiZmmVbmHMfwKd5ihcv",
  "key21": "8cApQpHfLNv14NADJYRt6HUztzYApcUCRbQqtTgGXF9CMxBpPR9rJFLy82mJXNrWydNgkKphFMUMWPmQTcDA43e",
  "key22": "29xB4qQAVcEFmaHBVptM7mFL2RaH3rqE568dameNuXaYRzWDMzKTBUsXP7EyW5zqWMGZYEoRjsDfF2dg6XNiNE1z",
  "key23": "5jgk6kx4JRFqqf6JepoPdw2rZXH3cvWREG6oULBdgqwkEcdAZyjQ3XCSNbMGDib5s3x1XMBkYr3GRFVQtYQEbAuh",
  "key24": "34oSuZN5Tv5mp6CaTUHX71AfxzqQDS5ZXPe2J4nQHx8mA4zcqoPk9XZLwuantZ2wp7tZSX7aVPuSfiqdd7ZdxVML"
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
