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
    "4jpTCVpkZ4JoezgHQueNN1GWnAKNoopQ9zFrbrM1g611tSr33e2Zj2aCkWZ7g3fSSjDJ6AFHqDGir7hKTL8PEb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SF2QP8LMfFo8Cn1UYPcTiYcbDjUiE85kvein49kKZ8Ds36VtcBmzxZh54J5Fdu7wg8UjkkKVgjsCNRApPup8ork",
  "key1": "3t6XKkRWremNvmdUuDsUXoF1LsCHGAegwZa4xHnuBeTp7YSfLwjiJJEhaLN7smgh7u7mmVNyfzR69ssWuWLE8zy7",
  "key2": "5W9VfQatyPZjMZfdH18WumpBPdvNR7c8nHtZUrMApzjQEJBfC7MfoKjPu6mP2LfjQE3QRjXcfHWbuZXgnRjLYXgm",
  "key3": "R5UAonxhGtqeiPRDedx9jyN6eBmjqf8sxbDiKb26c3sUYBfMyczSjD6VEf2BcPi1qGvvYmMc9enVwQs8t9vPBN8",
  "key4": "5V11ZczWuu48R6xrPADDcaHXEKBfM383BmhbEaVPDVKvLjhEcKFSNJUmurx4zBLwkrKwaFa5moSPwYgP7cYzAS1U",
  "key5": "2bzDBb4cwLs2Uq51gfYGxgYFfA3mJDErvGxJMVtshWc7gAPYuqBa5aRQANSdV5jaonXAPrzesfizaK4Jk6xcyYRX",
  "key6": "3szgcYbNCjR2mAYPU9z7MM4jyiuoxnkdR8Wu8hGUepzZHcMxXGKifuVaxec94rdUJ2HwbRppB7x9J5Ua7RK8eRK7",
  "key7": "3gbsSoq1RKXPFYeM2FBUgujXu8LGrbGXErHkW8o1aYCNdPG8nwWktyfi3PteMroHZNdrBJi4QHZ6DDjvqDGH2xpa",
  "key8": "46uP8sKPsx5jJS684JND6mSjbXkb1kyqAo2hEUNy9qx1ihW2mFeEkWb2V3Qu3JBx867NEB6jrwe3AHi71CUwgtA1",
  "key9": "3iYYBor3nrSbzQSJQV9Nb7p5Vyvg2utCTBtoixJ7s22daF2s6w9j5CKoYStrjeJP1twgvbrB1ZTyQXYz5GYk9ugy",
  "key10": "zAKHWoXrsMZfCLp9jvofiVAdjEwD32XnTP8ekT8xWCi8wQ9dkoj86hS6841R7oFysxNEwA5s9GGgsLagCgthmgg",
  "key11": "5SwTGvSVSGHQqdWDp1b8PnHk8MrkUsWwpvt4wcW4WsYFvkRnUV77Vk2f2ta9EnSpQ3J1Q3bnVVwxNT1CbhuHUqqW",
  "key12": "3h3cSHhp4S4bMzfW33Fr7c6Xd5CvMhBkWJ9CU71GyR2dLoFRNrS3Z6YGEsfxDSSAc1RggQFN8PSKKyX25eaT55zp",
  "key13": "m3crcTnuhaeQW9Y4p58edefWp1J42FGaWvJjdnXnZLtRL5UtumANKwN7NPMdfRoAXraxSUeB9LxeT74KmaDCSKr",
  "key14": "4TVtyoMwWZs7FFi7ranwxLLhGa6cW5F1Epe9MekXFQUBaKqBqK6YUxRfaaGCjhwFFFgS7YG84SHwPVVzr2JnbtMV",
  "key15": "dhDr9rhChkpTQxouGdQEzxX54qnYVaiWUTS8chHSdAQBRci1iNwf9wNMB62uHfXPatUzkp5P3WNPrV4RU7uHarX",
  "key16": "3121hEA6rntkz8ZHCJJ7h2sB43cEjDdW2oSzR8CGQ1s9AWZGYvX5xzbYEzuEsAF6r8NT8586MC7vaPH9LfBBHRM5",
  "key17": "3vYw2QhBtsJd3gPvhowgZpvLao3JGZXpUxFWcHFWFLxHdL7w3RRyrCpre3opYymgRjkKAHThUdnVMV3QXYPk9EG9",
  "key18": "5EabB7NoiJxpFVfGU7MXQFUZWXPJ277s5z3y7NKfqmwsCNFoL6ntsy9nCHaZm3DVa9eiBdcWXwwMnsYj4gcCRiuk",
  "key19": "2LCn1feowRwJ53KNGJJDqVvBsNB81w1aiyfFV3Cq6yGsmjj4cDbjYo5J5MfuEmwdU8qhtvHAyWKS81Vce7MWFBLG",
  "key20": "bnc5zNFpg9D31Q5rRi4wRZmzSxqH8MFGvp5ZWu14Hgw3Wp5aqWYZ8LXbaGa1UpP9fNsgvY4jVQv3rU9AMgMVpKt",
  "key21": "XgzUCMk91oQnEL3rbWd3WboQ1hJdDormNxvmLka4StmDaNqJ5oTW3aEfxLAr8bwoqafHJTwLFBxEcDKQvwZ1iz4",
  "key22": "4Eho5UqV9LixdkDDCgAsYdVsVsA1s28wDeUNE1s9ckkcFpxqMsYSKTEvF6L58ZMrjhb78NqKhJLmVQskNAgk2vua",
  "key23": "584JAWm5JP4DDDPjmbT6MWwEKUKAWvgpGAZ1YoL1W6iTw8FzAM8gpTAEqH99im2N27fE9zrVLJdopFRwiTAR3bu8",
  "key24": "45aBQRS23zqeCvA5CNQzxWU3KWTkhNzrtBsKWDLksXF28r58BXExFzMn14NFuiG6SxJ7GqPtm6fb5iYMuiwAAdJQ",
  "key25": "3ooqXhsgrYSmVBvuTyeYyZ5jMcEGPV7gqnm8Ysmp37rtUkcnuXtLMynsrUf9dFktRhoCexqzyZRUwZni3RKaBYRG",
  "key26": "5QvPscmbgjupL16MpDCLMPW9Jvvn5mQU6j8WTwJiqnu3XBxsuJxkkWgouTXAU6EJnkMEYb3YZpNFPyhGk7Bca9ww",
  "key27": "5Tq6kw99KS5tZXJroH9ujUNjyZ4zQosxq4ykCypvhoxUjLhHvMYXpDqLWJFUam1CxrxkEHgXakvYtbwWM6GAS79L",
  "key28": "2Tu7QrZ9MJYgefzLCR1LZpGhdwZ5NNm1vYkjqXujmdXQ8Xi7QTZ3TtgDzNHJ8pvyhSc7fu9Rxjss79oZFGbuX8no",
  "key29": "3vn4SzkbaKBV8wBpnBfX6YaJ3qP9cqT8q3sBGJhY3YVvkGB1r85FtPWvA5HtQpMFu4GGQKHFtc9tqjVT8rFUPpnm",
  "key30": "5SPWYbCoCSbr6fjK5F63CHkDkNAFqE6ustJ2BNBRxRsJB73XELYkCWz9da3rAe65hhtWmLVmxqgRppWTBCSnEdVw",
  "key31": "2R8iMhHDYJgk7WJ26KoEMADVgrmAjFMezQcCSUotRg2EDMQpi4J8ERStmNVRV3EvDyt8fFcdFZmW8GDVxaR92Lp3",
  "key32": "3sBjSbVJs63T9NzfwymkfV9GFe2cAa7SD754mpQUc1u3svwWb2pczPQvy5s8hQXwKv4joJbcwsuT8dJqhcLZuxoZ"
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
