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
    "2sgCB2jcwLGK7zWAWsLEcYnCuLDSSsP64uGQzyqEoA8eENmxdpZxzCzFZFfWuVJRPz5uNi2FCgjAH2SEDA1Hymi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qivjxgWnojuJXJ4JTqz5AQS8fySooS4ZbdLfNWZXmVnUEJ8M2kbj6ZCe3e4QZRQMjPUGSbANZpZ7RG8XRddpQCB",
  "key1": "43Hhz2B9EwMfoe3CjnZPTEKuzBLrEbUqDtbYSSi1Q6Tn7m6TtsLtTSayQF7mEH5Hi7BqCJpSgVHXDB2NSnXp8Add",
  "key2": "R1KTDE45jJ16KMfBMTRvirisZqFkGhiCA8DybrQXr826xTs7V64TAQqid5dprKC7e1vrFBCQxxyegLenpH891QT",
  "key3": "45NKyuPRpAynHtd2YkFTfBaUtDyo528p6LPXxaPZDcdh6BvaQeYeZXdCwLxeZks4bYS2rX8jLkPuaxV7rgNwasng",
  "key4": "3EqgxYfUZcbWCjZ5SU89863RyGVHLqFWEwcYyxkBhW16ViGHjLhLctHz4nX1JDdPEJ2QvgVhoMdZTgBsthhHQGmZ",
  "key5": "yEdHvQ6nDH1RuchXfC9LPnXmzksEyTrDS5AMCdBt49gDZu9vJuvFGnk9nXGc2eMVyJWxduS5ZksZaDGKjb8ruce",
  "key6": "5xbzMwXEojq4MnkckhK3KSr1wJS79QYJvYVEHxfvW5cJ2jR5CCfadBKBpzwP1fRdjW9UYF1mS4vVzbRu78rfCq5C",
  "key7": "51NhN9DRLMRmXPh9iMtwbALNAKAnwcQGUnRLbJvbVBLjp2YJXqFPRNQrpai2CXUFfZeqNFpdFAibVi3HsYdAYPgr",
  "key8": "UQdapvdVo6GncEQhDCXibeCJpMneWJMq9QbrWJfoFPe8BCEZEF6sxcoccXSnWmkzn9j7kFjQmTKib5u2s5UcMJK",
  "key9": "55saW6tZJcSKArMkTyw67AqTw41WWSznoDuFJgY9LQHcVmy8SSuC595nQ7rzzztfEXHNbSiSPmGbCDbLQU52FQnG",
  "key10": "5njZRhotGcFxSm88naWjgAKmWqkXZJkWJZrEVR7TGpAri7LhsbGZP5bMDiWQ67uqkFMXxJjqYnyTd3CzV7sTEkxi",
  "key11": "oggqMnSaa3R6B1xxKvcRW8avZjqwiRZcpfPJG2PXYuf1tFf1wVjPK847bXvoBwCnqUtJKJYVCU8kxapB38DacMY",
  "key12": "4gC89tFeGgED2ocew2DXXgjN6KhZNu15hT8i9WSyyeKDYcqf5DqxJtZEAvYHcv9yYfPmQKZkXqT1yx3AwR5tu5E9",
  "key13": "5Xb4TryD5vxvcz58Esube4G7FnKh7YaRoj8jku7Zw8CmD7zej56MVqwvW74ENzx6KktLGgJ64mAUaDFFN9daYkir",
  "key14": "4cvQjCEWFstm6wyhNGbSnCHprKPC9uNoxzM2mYQiNacAexp6fHX7fgHM4K8gFCZSbwhHCyDpTg26oJy3DF6oWo8q",
  "key15": "8FStpfSgyD87YHpFmcn7u8iVRcQxHFoR2YLVQc6y7XmdtpLRFWCJumoY3Gd4kZrxx3RkWAH8HPGJE8NK2uXiH9o",
  "key16": "5VbP9p5TK7BLv8FdW9AVAbD2V7pCHLtzx2JFMtYXj2Ho1oVwfVL2LskyModfiAf6AjmMsCi1AmApiH96dhwWWfkd",
  "key17": "2T2mCzENZ15rddTeZSefuQ4roMJaDjYRjTJ19yinMtJ8hP2ZRxeDVvoVwBy83x9aCSTpUDesyyvq1SJAJ8JKkMaR",
  "key18": "4Gibzq6S3z4cGGAuR3rYy2odtdEi3MBBd2F86hHYmP33XYyFJYLXZdonoBHea2RcJKpwLqEKRUQtFTr2sLBWj1iT",
  "key19": "3ESn8PjPxLP3L1LpnvvGTHJzcicZSPwmrqMXXskDMKBBWJgyLBy8ZZuKHHVRNqGqkCb36sFWUpz7qz8ARzoWQf4M",
  "key20": "2MZrSmbRBjs96FXxENZsD168Gx3tyRkRxs3g3xfuqXURghwxHEe8f3BKL4mjWqWLwJWwC9EB3ef9vtMWnseL8F2w",
  "key21": "5MwBumZnyBnZq2aAMGQsNmS9z5tZ7ouFZzQ4pEPLjfvBUYPDPbU2y48kLWSGGFM4trpyRcCccTwDqvuE2DmzYaSc",
  "key22": "2czKwFZbAGh5wuPQ53QftRi2rhbMJ7oC6SYdy8R3GdywHhucLK7SH2pf54iEaHgT6iumC2bMS6YVLbksMYYtXRwa",
  "key23": "25UPewSsChJquYspuVtpiCYWcS6H5SyiJ91TNzZh6Yyij3X84JacJiCk4eZLrq1SPoYYzz93Pshz5kvKzH3KYZre",
  "key24": "k2FSKu9yAuycVwZNZCsMYgp3b1hAJNTfwwL7fqgvLxt5TyLZNXzbnw3i3Ki2kBA7qZp1d37hfCruaERhA85g6jM",
  "key25": "5KR9rem82uz2pCupcdhDmqQU2NqSCC4pu5kqTWMG2suPgSGmJZwUdL56E56yvzLRGGu3GhN2M6y2vmpsELXWEStR",
  "key26": "491K6wouLLYmJ615Cm5uUEThbdUiaRhwSCURePEiCpkBzkX8gMir2uU4x1nP7hfduUN2n1hGnehcejhxsYg7rZBA",
  "key27": "3zUZ5a8isLcPHmZ5dL9o1aJwh8QNV3WooX8SFMeJvFfEie25zu6YzJKoDxrDf2sER87rNuyQwUwe91FmeZ1RzPje"
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
