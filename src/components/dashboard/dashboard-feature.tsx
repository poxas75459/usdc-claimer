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
    "5kqJo5dYvCN2N6MfHAd2ranVwwHaY7bLfmy6QNVuRRgHhvnes6Tv9YwxGKVEsdv2DuQSp2thjqvdydbgSYzCf9oc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uq13kt4VnW9fEnmUPowTw8sBvR16j4rSW2yjzH2GUW6JStstf7q8c2fd8vSk3icA2Cm9nTgowXJzA6nRRdMF7nf",
  "key1": "4xQ43kjo75awaJtzqJDRM62YjpXQDh9ctLSbDx22hsoMKKaBZtuthrg2qStEjbky4m5hJ6j4swJKRD3jh8naKNjf",
  "key2": "3LW1U1YA1kjZKgRWpbpbugixJGt6F1hRp6TMoqzi4daoKTec18ZE9Xubz7rKXR31f8z1WLf4hmArp5z6eWoFpsLT",
  "key3": "4XCR2o6GW99tv8uQve9Z9BWK7hoEc6y58RsEBN9gy461TWtLwGQqNiKtxukFutNHDWtJQQwDCtZvio3GuVNtucJE",
  "key4": "2H8dxjiPgw5kVCErKFPqahMc5i1XxsPQWx7EJitk73Zs6kcneock2bTrHRFWBnPxo3J8eeyVGN89YQVxmnR2RWVs",
  "key5": "5ppPqRuiVR1fBVfRSfG5r7YQWeaoEsLRgB4QzMGUbPirVnoGxP717fpVE9qRy5tdQnvTxtgrQYrWP6eo7X4Sfkxj",
  "key6": "4LZdGJfE9RmW4xbfNp1n2j12yqGtqZS9TdqGrYapa7krXTqLF47LyuUgbobnFwos6FaStj6cpXCbWppKhQtLE2AR",
  "key7": "2ZgTyS6y9isuephSbvXDh43wJ7Wzk55pPUTkkoQ4hStLbMbDXLzjsxwpy56PkyDjmTJtUauUpxkSnFMKrJPWGy1o",
  "key8": "2UfYVSabg5HUXNzEN724zCJT8xRgfaE8XqFkWKt2DSLts9RsbWaf69TFgNAJ4Dr3XsoYrCh1WZabVYtA14CNT2fs",
  "key9": "3kVGhF9mujddKR76kmZ2a3eNWDGrPfdRH7GUXmSxc1MnqwQG5SGs57eZUXeCSCd7ywVjVcK3dYLWt7rxrp1mQC7a",
  "key10": "4jMkwRtQjHzbJqUxr792yRzASVN39W4AxENfsBfod7QHAkqXug555Sk7XVRciAX7CNnWaswtdJ8dmo7AzKRL3R56",
  "key11": "5uX968NHkdyUZA6mTExy5Pmeh3fNMZj1YXzXvXSgrEiZ5DVE14wHUtykQSJgp2fXe7ZoJfCXKpf4Xd6GU3GVMLYW",
  "key12": "2ho9CMMBqJqX3pCtCwojzgShnscdrstn9YdMNM36c6VLzs2RvtveKmPXAkVZ7TL7xYEX3eu5m5ykHcG4yvWQsCGy",
  "key13": "4pjH18Z4hpfeibof3TDupPGacDVEzMApCpLg1NrgLWAp1qREmAQzKcL7uxtANjSNzXTFayC9mKvRSzAkQRT3XQ4y",
  "key14": "62QBfkBWYWmqqe9VwJszDfUXmHBbEQo1xuEndtZDFumzz8oQM34LojfRxerrvuW7s6iYkAMzpuLAXA1uf3SDo8g8",
  "key15": "4cRZjm87Fc2HfNkxywF4yr92cbJkw9PzqKfcaf1ytVLiJHiEgxHoMLci7cKxyHUFUzaSRy6RmbQEcTUNUyk6fyPG",
  "key16": "37hF87ENBXhvEf26weJPvKEoV9HTWCMaNG7gDRAZ9cbJTXixHe1TDBBDZTrD1CBi1G7N61RJzGBCXWfocaAa1Wso",
  "key17": "32iwZqzYEpUhSSPUp1vwaUEYPLZxvnByQR9zP77E9F3r6irAPy7ZNFHsDd5TwXVkk61b12pvs89hHDsyphhCdsCs",
  "key18": "4uT55MuuoPhF7WwVe1paZqry2dPP6qfyv2L9HXBtpNwBrqY2SHRpLB9CXFHjLQXqNEm8tPoHAm2B76KaQ3E73eoe",
  "key19": "45xFnEbswqhPVj94F7xHfrH6UnQCqH7kx9ALovPMTT5wA5ZB215pArw6Xw7J42LfW2PS8eHYuFRXpLwCjgec7HNh",
  "key20": "5uSK3NmjVM9wsxVL3TQq2yueRBRuHKE8g1JXNNQ3w4H6pd3pZ8KsEtkvbp6T5aFjq2jepFH5a8NXKzKbrBWKPqy6",
  "key21": "4XQhc8AddtkoxBZjmAmTwRanq6Zu6vLZKHruU5EyDr5P3pgdPo4LagLPxoMvvFw3tgfWgSL4XDybDFmAx7bEm3eD",
  "key22": "vfY1PeLRW4op7CajBEZF3u5kQnj6M2esxF439rR9fDejTTzBCXZLL2LPHzZzVDqX3sK1FtAgTdkUrYy2qVMm51J",
  "key23": "jD5Hv7xWuSyhbtCTBT1Ad3BWPRbShB5DQmavcVFvfyg7WjtVQ2m8D9engUuYBKUB8jDjNmMh5ozPmcWfVD9CBGM",
  "key24": "3FDZxMdWS8gxLQCkVTL6w1VYbsMEQzeRA2tEAjViVwwKmXrDeA28PWaQoZ4mC37U9mYMo8kWz8gykYKLYvY9kzCi",
  "key25": "65XCm94sfgFt3QS5sNM6FQjeT1ssfjqmsWEDMp1shnn9PgMEEAHSwwmgDJLcqxQNNsumkTWbNMQx3e2j2ixGhU8G",
  "key26": "d4Re41bmmBU3kkrfGYe5PiKATqJuJdYyG8X2Lu213AH5TDu118aKTqiKb4gAhMB4RGhhjP6N4eiaiNwpYCycHBw",
  "key27": "5fV4XAfJnHCUtreUPErK4bpWttPQx3ooZQGndyir5qC7RzkxroNHrDPmRiDRpt9T4LdsG2hoJSrPPiVu4jUMZeq2"
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
