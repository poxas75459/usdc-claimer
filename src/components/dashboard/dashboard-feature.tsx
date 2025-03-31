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
    "5tBUDLDcgdNMyifFSo49q6p4Lvr3waoSUZ2JJgF4T49Wrm3XwEYpUYZk1D1fYsTLuLSfMt6XrsmdaTsQXCSde4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M8cLw2WMweRNCnEh6stVa1TFgenSUutfS6S3nRny6r4AuEBLGZQUZ9oK2jMwJZVSeDPppZ7s8ZFB8p589uvGaVz",
  "key1": "4YWvnuAvaz8UpRBYMRcifrbxE29CHwei9yKZFa2AqG6cHSxnVV4HDatBdZ1i7cR1YyZUvaTXbtmXsvvinFLBAFF",
  "key2": "3WtKxZm9YP9PE8dfKm1TwpjU7m9ECU6MCuHTNKgXBExxYLmaaEKizpLCAkuKjukDynNQSA2RnV5qne1brLDiru3C",
  "key3": "2oFP3nFjXVzfu8pbctQxgApaNaZNneyoFcQ6Sxhy5LPNDiBDnWzYD3upBkYWNuoomwSnpG755YZsqN6KBzMBTYKT",
  "key4": "54qteVBTYxRCC2L5RjrAYrnN2ZqDh5XXMmhzpJLgDFTwssXf7rX8TdXge6Lkpt68EWPmfJFi99xStkP2DEgsxFkZ",
  "key5": "4P3UxtAysurV1HYzKWjMwdkJ7QYCpZhEYDvmDH2Zq7ejq7h2nd6cD8MYmSCpKj4v8oMJ484E5bgbguFKEc4dtmTu",
  "key6": "wTkQza9tP8chCYCc9c5hiXJgDyCyscvkQENH52GquiB83hGivb3Y5hjWNktBPvwxxex5y8ivV6B3QVHH1sRcbiV",
  "key7": "yxCzYbr1nUfWcjHAXPzrtNrghJv2vUuBd9uX4bXyTeX2nfWcWqodmdZrJUmcAp7rXvgKUrfSD9kuKbrf7UQ9hsH",
  "key8": "mQGduFKBLja2ga2CyScCmoTWRziZvPLwKhFi5Y2FQdYcVewTJS8wHn4fXMsWE9dm7yhjh1u3KNwfDgV4aZr1459",
  "key9": "2H12hF8JZuFeBC2yVwK4Q9ToupuPGaT9d4Ys4DdsCrAboXKea6DCf9bjYBRethWE8WgjrU6exhMTio2Yv8A87hnW",
  "key10": "49aDRCVhFp6zagXssWZs9RYAWFqTjZfq3gWVL67PEminb8xjBUrsGeexettsudTvWgibwnXdc2uqhYx9yES3bPnS",
  "key11": "2C2G2LJGkrfJFCWpTHEYseDD2Hrbh9o9zNfgEH8Mdme9FXrVAumQRmAGab5zjcSzi5Yprhax7bPA2aAzCWdncpbM",
  "key12": "9isDYeva19r3wJaHrd2Xk7Z3ca7YgyTujVnGvEZ8bLnnht35KShfospZshiu3a3B5whtjqKKZuvvEjtdsupXDff",
  "key13": "2ba4eytvPHv9cXwMyaNHiMnGZo6Rz2Q243w46Ben3US2Zq6h4kD4z5xaqwSNdpC12eTQXpik2HUcoqbK3PHMK2fL",
  "key14": "3R2kmd8nJjTf5HETdLnhsjVZPPa8nW9HfoPKBBTRhCb4sQv7KCajGvv6mvs5HoxpGGYDdMVkpDiRATzxw3AvVZrA",
  "key15": "23GS9x6WtoDJZMySiH8ygdXj4B64DNHbEEyJoQtNqd5RtfZirZLdmq2He9Lzd8AiLpeWWwngNPwDFNzPakkEkqY9",
  "key16": "5QuZgZWXW1MByyYngWqZWmzJKX8fNGU1iAUeNqR4nENK74FsfEpESiPSDEGekLxVXeSVXqa2vfvNBerhDmaVQMDe",
  "key17": "ccFwrSHaMGWDoqCNt5h3KZsZVy2yhLrW3xXYqqNTbdXh4ZJbFD8jwqurkA7qsWa4x5fKqLsNZRY6R46UYFEuoTR",
  "key18": "5EzaEyu2RwJE5ehQCe8xHMqFx41u9ys5VWu5mAxGv61FMtHCdCNPJZuWnvSUR3Hx7r7qYyTRk17LgX5jxpLrBRAY",
  "key19": "27WYUnMbHn7fdTvmrR19YipasSQoaWCVypSduwzbkrh1DRNsKxv7RLDm3sdUNHnvB3tFtKeTCvxAvvFr6A3vojC5",
  "key20": "4sTbcfXdx51zZ7RfkBNGQAce4w7fW2jr6YPx9Zs6jXKUci3aMqhsDmWzQMGMc6YQY9DMLcUELU4zBDLsQnFNoeeR",
  "key21": "3AqtTsRrGHqCWPygJnGrum8BVtnVmVqtFRSfYH58eaTYDgPuK3GSTQAiWkqRvuu5B3gtcpQ5hnizdA9bh1CmEoHv",
  "key22": "3YK61ehKwCr7YdvLEuDjKJLqUCdgiaChiY1Sja9ov1nPz11Y3syLedhvafEk2ogkjDaGwgh9psH4pQVwVvuNRira",
  "key23": "4bihpYg82rf82njAj5FrTVy9YACxMvhKt2PVD2gNx4BZgKKXWtsq61A83BNneC4Gxf5sgaSSAaHuTTyxWe6nhx41",
  "key24": "5iqctv6u2YLgNiaeFmr12vE3zJiQYhbazYXb6pF2N9uHTmfSvwwRQzQnjGuV3uyoAVN1gd4pLmnk4GQA91bScn7d",
  "key25": "5YeZ9A9JrrDnJnJHfq7tFE18co64y4A6ZyV51FjTUasKoNuto6ZmsoQhHNaKk1Kd7BJDqw4aS1myCjt5wYfsetdx",
  "key26": "43ZtD3nvGncNGmbgZEMdwyJ24foTYwtXrrvNDyp1fqWynUUNkEsgF1ERBT1qesHQaJoV2dWjAnKRCx9hgNWTgCe",
  "key27": "An6yHi99ntC6TcRYFhPe3dYaLecm9gwbUjcifni8ywWZChBAJDEGcqQ71VHyBGgTA9QqGn37mCEUqTRx53U8ixn",
  "key28": "2XuiRBxogyRijurS4uedKGSpMfaz6f4YC42r1msLSpn9YipCt8XkyCPahQLm5VRvHes5NQCz1BAfyQ7vUSGi5unF",
  "key29": "3KZ3B8urg2ESnuieHAvN1WyxeGdC8SxkudJ7gafATPio4hgjbXY9CghhSGgNC3v7p6CcG6gGJPUhRjCCWjLJakhv",
  "key30": "5LNKqJ8CBSdaX3joqYqsaTTfXwjXVUFrJ9HeM6RsmgxXL1JU9KbHXc3E4iGd1LAqtyf1ttGiVuXQZ6Qy1qo5NPy7"
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
