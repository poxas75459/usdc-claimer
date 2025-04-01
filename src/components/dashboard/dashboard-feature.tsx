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
    "o6JaeoWpM8ZzVpFMpyoCZRbA32vYa1Trc92QZkExBmaKNvMfMmbt1875jYoNB45vgN37hoqV7Pire7uAhnGLdtx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uiVJFttEWPAQbdzRXSGrpuju1FdtaRWHbTxgHN7t8FjVGRTyi6m7YAStFockvbuSxGbsAFPsLWoz7MmvpFRSwkf",
  "key1": "5veq39NDGnikQJUzfojaJcqoowVuDm4zDx5iuanWSx3KUkV7E6jGLqEnj3Gq9y9hLfEFrXnJVDzahKjvvDJYnaRo",
  "key2": "5ef8F9nTxDZTLSqyDcWokXWWgBS1dhXJGd9iGhk7kEBRBjKKRmeQsGhvWJ7s1uf5wJHPpixB9yzDCQaNYsKwS4yG",
  "key3": "3V4m4TZEKYyub63MYAzJmi6LnYabi35QMMTvRE2g9FjGehCxuXg1GTJPWk5dNb8cpXQXtxsjKrJAtmM8CaDiNjz1",
  "key4": "4zvjyLmDKPHh49y1d6dMrxVdPTPR2SikDAdTZwaptiUKBiuMpvahoA9rLJgQWuYXym4yp29p5iLricCRza5MV61c",
  "key5": "3Wr4pAhgA9mzj7jiKmkqcYJzhpibFtWfufWHkEjp8vbPccmxhXP3WcgqZKkrQEAfenqJ9Au3EogBbHUeV5vf8M15",
  "key6": "Tk67QPJELJEF3sXsNz6Uaq6ferUoRcjWrZrWM5L3Ub5mWk1gT6CMcgkv4B91GAqnxW49vHXbPExGKJZuZtuA4xR",
  "key7": "4j7TGJKhaKNKjq1yXonymHFhhNu1h5UhWVCwHfGVmhbD4GxUWHqPFsPFh9gbjLy5SmFUGyprDxEfQz7Wgnsr428S",
  "key8": "JyWh5a2i7EfZEAwDN5zUAd6Qv1rKPVATrQ5rX4nfMQeGMQn97seaV6Aj5adoBr683NzwyjzS6TUyg61SRQYsFtV",
  "key9": "eW6wpPjGcJaRCwUPYbuwxNJGkkxC6unjmG1gRsJ99zKu3yKdStJEcbsvhe3SexZrqvn7Bau53uexiQocDNL4zWg",
  "key10": "5SyG1w1GbpYobjdo1TDm6z79DzXrNnkg9PD7rpLxo6hk9vCttJL5Qx8TUrkYr5h5az3f7BpTzz4BPVULucMVfUdr",
  "key11": "4rzz6D1BzuoFeD4HFDTkHN4Xq8Q9wP1ZZ9AjMaryUfuZEYkxdwseqBRjm6ZZZktGs2ac4YDtsBU5ghorUZqPxi22",
  "key12": "4ymCc2ancWYLYDoXTqkQu84A5gSDQtPox6WX843JJCArzTxsUZ3MVzbRnjKFp1xK6Tup5mFCSjPS18G2bFUWtaUD",
  "key13": "Tpe3ArGjPCitbsMpyKXc1a1XvC2kxmpLxXZbPcHGCSP9hVSgT89UYnMspGDuYmgmVN5GBEisiaHibi4Yo9Yqv6e",
  "key14": "5EmTiFGm2tnuGf1Rn4u3bF3uHXvAeUFzWAM7oVZnftNKvsd5cMxQCwsDMzf1xNvcHckpyCWje626KaxdA1e5vDBV",
  "key15": "5FpzKCpLwEip8zMtkRWJ9fwVB1YhMdw5wVz8vEpviVmgabxncGeYaZxs7omBm6Gf5yiBs94WVWTMVgHxrsTFKJeZ",
  "key16": "5V7aJZ2i2wuc7hMoZAqTt8Vtx6LMDiwRJdYL5vptR4XfDobbG2CbkgFEDgRrXLadJZ9LBSSwWUHrvDzkXXnc3bks",
  "key17": "341zSPTPkVvXu8FB3xkjAcQyyB5tAa9Hnb7Cye4sEvFkTRb1DzJzqooX9QGQpgMoW3r2ST8D7QsYDYxnTD8wxexu",
  "key18": "CWwokfjbHZwUB93s5f4ZtFZZ4fwW1Gbv2ZjftoQcE8PigBiubbZAvphzUpYSQdMxXMFxjv55NCss58CsRRKW4UB",
  "key19": "2FcVjUjF6mFKUAvKKHQnvC21U8kV8ueBmz2hQXsHj8xMHgVepcRSbDhC56Qg97EA9MNHLhW1KWhpdeGhiB9X9489",
  "key20": "5CiG3RZBAeEg9wxkeVutSbCfk7UBD9kA3jSx75STpiSBWgg1sj4LKuiaGVNuDTJhm2XNLMZr21buPLo4HqeBK4AF",
  "key21": "4MQM7Hw234Nh4mcbymvQqe7LqZqFxDSEVYr9xX8iU16xMVBjLQS3Hw9WzApE3orYM2mbvzoEJXZj78FJtJq9pohG",
  "key22": "2N4D37551ne8z2EwDgfotVgvt94WyxRcDbNLo8zRcR2GTRpqTZNvUWVQWM65Aj1Pg1eiQQnDVz9PPys82RqaQWHo",
  "key23": "4M7xzBK3brApkNnQsg64gQtzsCxkeJZHqKnRHm9xULAPCJ6DHvWHNU3ezVFCYF8JumQWg2yQ7VHBSGKPpsCBuHbi",
  "key24": "231xdVnkJLD3i8m8e9sm5wzNPt9ckFJ8wkqG8zvCYzMc4dz4mq3jHmAwueeufNWdTLiq8ZbLJdjKn4pyK8Cy73BD",
  "key25": "57U1Jkha22i4Urd1T1iacYQmNetujw56eTo6fDM5BcgWoWdDrCYyaLDjQbMFj2LyEqhwDi7NyeoVTzsgQcqyZYtf",
  "key26": "4TQTnX6AkaEngvac4CaLsxiGAPEb2BL5XuVqWrmXP9sRbubuEkDbepiaaMtry6Rc3Y8xwYuLRMmrLMwVE3eWPCLs",
  "key27": "479uEt9TPdDN44fYPFfm1sySXT7ZgVQpghkVUEEmcPsvvubtFgypVVYqmokZ7B7EWgeMGFV5vdyTcBmpCrQ5scZW",
  "key28": "2Qof56QcfP3m8vV35hSLpMipS6fhu4a6K2gJLyd4vnsGVorhBq4uqBDikKU6u1ywkyMHLntyhJHTgFDh2pncUqqJ",
  "key29": "4cQJzmaq6Vj7uxgAf3j1xCxLTuW5xZPUrUHpBzAn1kfrAa6VHxWcrdkbn8ZQLmTv5DZn6QjGJs6ADTgBGY9i1Fsx",
  "key30": "51FBdgfbxjd183WTTcCrncuhEjdu2jZJqFjDubLcA8x1CT9zx7c6V4bvy7ids1w7TruCo7fYV1hevNGuUMSGdHdh",
  "key31": "42XC9AQxuojPG2gTAQg6Kk9E3wyfEMzdMEKVK2N7oTJt3pbuuViSG8Gzhqp35hkXjcKKc2LYLMetqrGjfyD1LaR1",
  "key32": "3YuEFPkCgX2vLWhxV4XpZJRZBZwnp7GsHiLCgNM3zdfubRLpNMMq5DZLdoYsm4TQttjLPESguQoN2DQW4KKgnhxd",
  "key33": "5cn7ec6HSQeJKpKe5buzdtqE9b8ZfHTrib1aKv4vRA3yMAHpzCoepKohWfHq1FcASCLb2272cBUwUWSA4cjudtbj",
  "key34": "5Y9wy2dGLZgiBwgDWjnhtFxbQwUrsejDdVaBTf7ZjGu1A3YCHXv4qsDojoat4AdeGuaRMGWeBXBsT6jx31aasvCv",
  "key35": "MwyuP4V87JqfCpNkJTwrxMjkDfCcABSPaPK5geUExpqQtgED6Pi5cg6QiF1QwXdHavnFg7DFpXaqZFFoPCjdJTB",
  "key36": "4kYt6FsUMghgPKHGgtbi4kchunzkueUkRhdQM4VaLs7kSU1hjjQPsWb6SA38viHLaqHdTwc9QGTeDDYahuZoX1TZ"
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
