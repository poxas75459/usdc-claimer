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
    "2RcmCTzrsxpSEJvG4svw2U8awdVJn6yJEkPGeZhrsrxVXhvBksUbR3vDwwDX4kBxssCdTSDqdCf4jFfPXiuETMru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgmFgKvj6bkztRM15vpHu8yq5b43SQNtJ9Np38X1A2YJEWauPZTRiXLr8QMUpfMgwF3jGezXPdsvzZHgVK4C1XU",
  "key1": "5QKgkWcbzSRGByFseBZA8Qy4hAfLKwmiwGbRu4mgebE2pZjHf6tivvJdLtCjNHdngb1wAuoRUtwuQEgTBxJ8pC4u",
  "key2": "2gatv74zxTMpVtwEEJy7LbRpaZRDC7TY1awQXL2Qa1svRaUubRMRuRitp3WYfUTzrvoRbspSQ4nzyLpNr8pP9sJB",
  "key3": "4uGS4NBmQnMgSPEKw7iuafEGFHLDfg3jVadjAN2yrYZBmpZdgBn48i1QnUgeF19yHRtT8JjpLt7z7gaJvtGbsw2k",
  "key4": "3GXWMooWKbUPnBHddSMhVd9xs2oLKijz1vFkHvucnGRJA6fSK34sCBPYj2ibGMEYk7FWS9JR8xHLtuMnWsuZZGqA",
  "key5": "12945JGnVngA5Emf4QjebCGZH2mx2UAJBRjf4UM9WFnxVXq79cZu5FuH4mpRyh1XP1jb9CXKvQdnZhmHwud9G77N",
  "key6": "iLAheLcNqQiCUoNpmMZXQF7gHVu8eUpY3ViXFB96Rw62C92sZxYPefPyEaLRwTJvBx9F5PNhCMSGzu7BhQhzvuh",
  "key7": "3CozBaNzs7Ee4nv1te49nh8BXEoTUXwKeGuyMtdL51fnFXgnZ2YNZuQjsrgiJAXyPDSiJdqriWwz5UDuW9JH8LM5",
  "key8": "2MqnBqFcPmzAQzc8AkCx2dJJ7PAmjCkaNxwZ6iJSGZW6V59pMNdtxPs96dQWVQwiC7pGY5wHmHsE7HxKKwXg8rhJ",
  "key9": "67oNLWBR2BRGk7agBymp3Pqz3ddCTviwmf29wDjuwbsC18PehTGkPv3a6GknUB9EUDS2C5Ug9W6McRTJLDc9gGHx",
  "key10": "4fhFLg74jNmyj8bompkoKMpH1SM48wDqKSC1zJenEtVm4TbdSMFwCNMjcXTXSHSVrFk87jzKp2x51TqkeK83i6AV",
  "key11": "L25v2VxddDayqqieBP1A5j7vGGYjdZK2JyE3WGz1Daa4b5Rv7X5XMkPkz8ohDV3bPwUcYj7z9amdQJxnWQwGJRJ",
  "key12": "3DrFydCwQRG8PDhgmsQ3riGLVd3R1pVQLQnnHQDFoQHrVegRuz58DSwQ5MhwFK76PfgiaQo5aFcKo7DSpP4bPwrP",
  "key13": "2QJWEk5v4WbshgZkoKmwYib9Rph6C1bJFevwScPsSpAqJJEbEtP46TcHhQ5ZqTBaNTiDtrfSnwpVPCN8NfvzzXaE",
  "key14": "29SGusiwGZ427c9u4Dt6TpwHoragXcuZDptSUWRSBtEJ99d34P7CpKFPoKEQsEApeoneJACSRrjfxc1SKDA9TaNs",
  "key15": "2CPvB7ubPUzDSnpNKNDmKnrnzTs8S5XhyfbFH4modViBSc7ujtjt6CDairuVVTH4EtuPjFGGCgHdsUzEHSYB8J9k",
  "key16": "4qnnYQvoMyje9h7ASEqHov4S2SXHNYrisKHWqwfYeuvm5vnkrppGz3i3QchtN5nFPvyaYbGt4bYNZMchrPXnENLg",
  "key17": "4eE31FjERrXwQs3XVydrs9jEmg2VqdrZBFS5uTav4XBA4h1CyYnwTHuZm4SHBjUd9EvxdmkVHs9H3p51RN6uGUXy",
  "key18": "4z35djNshv7aBSPZPhFWnexiWheNykgT5WgEMeRiqUfLp22cMJX2jzxhHoBpPCMEa4UE6MEda2anMC3hcHYtnBfW",
  "key19": "rekPG6Ye3fQQLmUMM7Sxi5boQ7CndcZ6tMSpBsqkMx5FeroAghW5HnEGU5LDCCnXaxFEfTET2pgZtCmDGNZ1gnX",
  "key20": "61xdWYadd6AkpFEksRbU1jgUkfRSPxsWSEhSpU5UffJ4PKxsmobtEYCa9trLaGdkG2kJTCR1o18kfNvNQPWBn9PF",
  "key21": "3QVHfjBGrc82Z6gGNAA4w8oPnmUXFXbKZU87DmWRNqSvVevDUrwYbbsfj6LGqjPZfgt7KNyEnZwjdQQJddunzT9C",
  "key22": "GCqJYAVQEt2dqxjdWXdBq5bgdNwQAoacPFaow24ny1hQF4qzub9RHaiFYiWyH4nkmfbfspTQE5ngSnAbqut66AL",
  "key23": "3Ya7UA6Qv37MGKohx9ds6A77i9hL8rtnBZocg2shC7eRKkdpNd3nVvRabH6ZZ5pemCg4xmP33PxfwgTYF6eKa4z5",
  "key24": "Y57uu1D1qrggcTnur2KWZnw8zZyav9yYq4TLKunFXUYjob2HChtGsPDT87Fa4RDysdY5Fw1Jry32zYzmKfyn4nq",
  "key25": "4uJxpPogb49q1KdgT41MvzdBs6HuV9M8eFRYH7wu7HSXWCV1tKNRTW1E2zn9b3Y72vWagGx3Wdnvhie5Zw9czQ1b",
  "key26": "4JpJD3H3yn1tAawjbTfybCMbKHphYcTzfc1kLgff7ywuTDeGhMivXTVKy1bzJwYu89TT2B9KC3y7HLLiY6kfUdnH",
  "key27": "5doCnmPjS4djv86M7HvJGEE7p4QV6ST3v4GrmARUSamv1kJJzbvXgEm3cwTaY4cFBvNK1w3nygG1EnkxMB1h7orA",
  "key28": "zJ3th34fRGTT9CaHW7pHJfs5uhRCV2LU1HFPRdGRzGf7rMBNWo7poJAr184LHPeqi5M4KFEJ36Uo7Y154xKDteM",
  "key29": "63uaE9CJiK9atK36YEdsdm3xKYKXNg1Y9UspLQjq9Te9LmCsTmEyYQu5JkkQBTy7BoCLS4RtbG8btx3W14BusUyU",
  "key30": "4sZmqg3U4rwBviZwuy5nxdJGZEgFEHaTyf2Ln7x3e9tLuNfKZibwT5eFcMr6nDnvTv8V6KasBxvPVsg5ccKxm3pP",
  "key31": "4bu9JzdUd5eqX5VLRs23MBSDXpcY6JEdV1EYMcazQi4FGNLNQP13KPv4whHoAmLzPXEbiLg6U9V4kCZX8C71YvoJ",
  "key32": "5q9NcJFY5EeFXvYb3tcp1soXkK1KaHipzidoj4bbk4qtUxCJZwnLGCFj3LEKDbJX7qqmZMXmLqXV9jx62yxSKDNo"
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
