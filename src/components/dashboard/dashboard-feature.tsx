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
    "3LTbUq9e4jk4Xf1oL17Ptyuxm9T5hZZdRur5a2Kc1J25ZND9ym8vhKcmMpUdJoX5yJwQTDdAvUQhLeRbYZDyRxQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fz3hkEfUWxs8XzEBSNfdWfMZneViMVxVkTdcP4znen8EABdtZP3jvhwkURpEWm7bLBA74zMjWXuHx8YGzMzbtyZ",
  "key1": "2oHq59zzfJx8Uf9iwGhC4DxfzTZgHWtRctUvbJTBYNJuk43rAizPVbKERxMgrvNH2EeJ46Yvi79hbg2n6knzyL3K",
  "key2": "54dZuAXGHTpvLb4FdkaY3MPMdZrt77GAzPA79MMm1s5Mu7z5SjUX4wQKVCvtPXq6idUZ9pTSoYRZ4idMfCewz6uu",
  "key3": "2hy1sFNEYvztt5dVXSQwJ9ct7kpbPbRGvC4dWS1UP6jpJXke4L5b9bk3E4ZWvTSERBkYAak1VnpZCHR7BLiT2KK3",
  "key4": "3G9wUyoDzfds9XnTKaBwocs7y1GAZV8pFgLBGMiFQ8rvHiLweJ9FWf3DjARcZ16w5pnzZJxgz8eLgW7SAqoRe5bs",
  "key5": "4GQDeDnqDVdmEdsXhrBz3WJYSLyuNS75CLhQFuLJq2EAzyTmVDMLsd5sXWHzjjrQwM5SWQc5uNEuzncRarzmg8QS",
  "key6": "4kbDVQEaiuzckxqasoR7Eeu5Vu4tcuaRPRwtGSDZZp4F9VCna9xezJccsJbJEbQgzVs5crWtporr9tYGYHuF7JwN",
  "key7": "3jPjPuYmSPVZ7PyxXaU5JPacK7BEc8u8QVxwFYVJg6sGK86SUfyjoe6Dq8CHjPtkUkSJcepDWTsZEEHh92fkVYsu",
  "key8": "25SHYYVBRVgijpzEn9gtkoX99LyBsbeJKk7eudeHnnzDDqb3Jfm1sqAn5cqH9fiBKaqzMCf1UKzaavs17itSomNm",
  "key9": "2Jq51DkxwvpJ4uHCuBZgcraEYkjQJ5SavarN9Snv1hTxA3Eoao24GuMGZiDwZsn1TzGW7u7kzyHLZgrMfUvXXBXn",
  "key10": "4eRZmUh6sTmiEnAyAvY8pSejA7Bfv269HxNMb53Dw5jfX5M88Gu1vEwo36CzUTR37j7WRzX8wbKMTRWY24pZ2hQo",
  "key11": "xnCJonguCKfDZvCoCt8Na2SAMckE8PW9Yjh4W1eeNR4ZzHofAkBD5BhfgNUSH2DgNh5bd5KvY5NFARf14tapTBi",
  "key12": "4VwrNHr7A76tLisbK8qnypjemidcBVCFcQdkXqTUAy5woMdk1qbUKrmeoSatKnnXqnxx6BFFFDtf1ZXEtYz9TzHq",
  "key13": "2D3YYqEixvMqfMEooczVy6NZEBYQLX3tvtWjzUDB374usWc4Zjf4yAQE87YHzNCJMFkeUdn5CpRBUGAdQ8ZntUXf",
  "key14": "589Ccj17KyA3gxB2JKE3qoW4h558WBWZoHkuTDqBj5TVaa7vuSfE68M7oidG6cAEyk6GwBnfCCd12VAvUVZgUQ5f",
  "key15": "35Q4omCuEPRJpFRvFsYEfLuqsEd2y2rGwgEgRPvPnQbWXm3otseaygNcYB5oXXaR4VXNzawh3GLhqbhP9nK79ovR",
  "key16": "4z4Pe2A82nrZCk41KZL63t4miV1q2vsFAE2rTCuXhhZw5A3Kf8QvjKcQ5Cc3JiSvMhjyz8jTcv5yoxX79AwVtw5M",
  "key17": "5zHXr6KTsNCSdQSYPjRrZu3Yf9Zy4YdUJaMkp4KuJCTiQPBVc7P6jUvG9XoDjvgi3x3fmCVZAgpdacRZeJpJVwLw",
  "key18": "5bS11c25qh7JRqyfKrP4nXohhSCbTPLYNsfygCsLc4LJEFFTugGhRrzSJBW7DuNU2jFtrPRQyijGAB4kKf3i9prD",
  "key19": "oDZ59Y7EGHYwh6MnUU6Uy2qNfYP7X1DCHyrPM4pijXywhxWirFRq9XpkJAptaYQ1KYRAzSsNSMjjgaemFY42fup",
  "key20": "88uZAieMnE8SMWuKvBZkmqTtFL27SuVBVv3EzCQJSvEpTw42u27zTP8PMVEgAnHGZDqjGA5a4TdRSPPjNGtL5sJ",
  "key21": "2JNhh2D7ydbfLEqJZMdJJEGppQSDmTLY6qW2A2MdtS4AZVuZh3kbPb3WujEhq1kbRSKv9F9JtPYT2JmZhBggHabB",
  "key22": "4ftfwL95VqyNx1raNc2RQJX9F1kDRnL2nvRVoCj8QmwMUmCVx1QedZ8aooWr7FRJ1GdeyKBMyhuqFUdq5VzaMAzi",
  "key23": "rCCxCknDCTXxw3VeLLAaHGRQMEmVyQSpJpTCUWhtnueQ4jBV7SVLR8EsQ2zcJrbhap8kit4WhLZCygkTUPtkHiz",
  "key24": "5FbUATQc1WN2erogweS9u6VXMybVFWBfxAttuSSEwHhJ4ja7sSTuaEBiMAHiyQ71XykrP9k2xH72xMCC3xNQvUAo",
  "key25": "4K2ChtJCi9PBG34TZH9vu6neUjoHuUuivK5RWRN9adYdwqovvBuEV6hdv3DpkUkzUhz5Yniiey7h48PtWNpiwP9P",
  "key26": "5nVtVedMAEeR2RfgCcE1r32mTFpogxvTfnToPeNozxPjK4gfeBtEKmjW3Q1jpCfAadYTTNRaDQE1NrsMbRQ89shb",
  "key27": "2gUrgJLGT4YP272zmk1jMLWi8W6qyEQK5NdFh1Fk5dv1CyZRctAAqHD17fxcZEJsNKzSxhSY4pW5urMABGKJHsjc",
  "key28": "2Zmum7otjqnhpzHzMwXcagRivTbSm6PWaJuuch1JCzByKBE7vgPSLv5fjrQ9RnhDx9HxMosC2dYwVLsTH7TKpQk2",
  "key29": "2P84jwZsPyv66BwdVCRpJ6V7pzWFDJ8oSVibvGCQcDX9r9bHPxtFhhnLBykYNLWXzH7vUhjP5wsFcvwM3zRcpRKL",
  "key30": "5SHNRz4n8McMRtNUv3yFFagFgrG5SQvSaNp2KdREfBLvPoh7QaXSezjqNwMq9QKkkRaoRSAGmNdN2iCDpPZYqwHc"
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
