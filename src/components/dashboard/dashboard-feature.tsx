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
    "38FaJnt1AT5vdH8yNxMGJsdLUQJyE14a3cYPodzkTQZMonsGECqM9Cei16B5CqvjnxBtoyNGZKBvcAP2aR52RL8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JyA1vdWpPZiP73FUsNgJFAQU5snWVFvQVHQ46ZLk86qSCKC5HCBwHbpdbpsDEnPBDWpDw4RsHYTuYf7Vy52qtFU",
  "key1": "eLhwb4epmgqaQhq9RYQApagse3Qs5DCFCchdmBax6cWLjsvam8nmFHFJ6TmqUx68q6pchC8E3KwWP3nzsHqDwAX",
  "key2": "2S7qCyMFo3S8X2iHxgc8khGU6KXfWxRJ2hMWRjnZAqNLf9uqdRNVfbHhMvMUVTCEjjTw9LHP7PoLP7n8z1R67UDL",
  "key3": "5bY55tjWAtHqCDQgBxByhy8Xn3Bsy2ts7vTbuYXKHyU1im5eJC1ZARH3j4LwjX4UPJDc8jsgtS4k9ZZb1UZgXPFg",
  "key4": "2KMYgZP28M33iKMfVd94irZTKpiaDjmTZiYb7TmeQ1aEmai4hCrF9RPnEvx6t7r8HV8bmvs9SGAebKH21SKZ6LUK",
  "key5": "3nUfXfYfKVyJAgSz8Y8uNdqdDAHJZCo1k8GKB74WSKsQfAefWQ2ED7AF7cvMYVubBXeoDw1UDSgfTudaF19jyvTt",
  "key6": "g9Bw2Yq7NWDYKAAaUpHzZ6qt6SHcxj2RDzqDUa173CzGq9nKuGEkntk7sXmrCiLatZte88u8SBSDBJV7FXjuNUs",
  "key7": "2P3A51tHKKzqoiq3kkV2GNHYZFvaTZUh36mgNaPxhu1wjZrBXKLFMKxCwwchSX7k2kargmVqufRmYpiARHY4gGkT",
  "key8": "3dk5nnu24qAoSFYp4WurLzxLPZySmzjkf5yWEKEkB7xYv4NrDDAVkhBsDogmtBuRzsRE6rgDmbCjrifdL75FAumv",
  "key9": "4wz94M6gZEVfmuYMd2AXvUX3BRtr13H9t1Ufanzouwh2sXQbxsZHmxTPHuB4fewSengK29TZDVkmik4f85mifssw",
  "key10": "4BqyaR7SMYQCPUQK7zmbhXinzxQ5rZtKxtgceezmUU6JPCiPXYq3XHhU41KgWNeRAtEzi16HJMTUo3KVvPFGTx1X",
  "key11": "2uZS2ktNSboCwGTmnAHBkgyd4YGF1HgQTqyFaTVm1C2AhgqWionMQo5uzBRzC1CcpszRMVPer5Hcmdr2KTjFTViw",
  "key12": "2zZhRpNBcqx4FCYmmz4xJg9e1QxkdgGVkyW2yEmDxNtPSTj1tB9yUNzzVWf1LjXSYKnfa3eBhsDrptrH423Sa4fK",
  "key13": "4jDj4zubcG2VQQZz7xEVyd2pAmtZ2ym11jQSPtpu3gMmiiuBjfKHwRCA34wDBPKYVzeXEnSgHZARLCjKwLaHstko",
  "key14": "4S7d2RVWw9Br5WN1scfHstfn8H2N9VL5tpy7jpYYnD42Uv3c2TGXdDBKER5xR8UK6cEZbEN2jAygr1v4mMsY5Dw",
  "key15": "4P1vszyYF9RR9psnTtmc1DbqdqC32bJu7vL66siaXiiKQ2b7wN55bKg3d135zkUV8yrBfBQtfwPJGtACXZPhhoNW",
  "key16": "2VgrDFVNEMCjr6vVmfMgws5cobdjPkcRwSTtBBZvaf8xYp3TKFUZpShR4dpyyBcwMQ5PK2kRGUYm35GzVXpi1VDv",
  "key17": "3s9SHH5mwDBJjYQKQX56QGfwfEDUDWYc5zBNoz6W9okNDfvFmUsyMKRuH9dxxy7iQcgkYCVYzzkaS6wtsXodkA2",
  "key18": "44S8rKm7bThAhD3AGMom1xhh6QrLcX6DeUYcBEtHusd5SXqQhDU4zQi3CJw71yfotgiSnHFuvFpgCw4eSSa8uXG",
  "key19": "4ndDr1cQAbN8PYiajUZZifDnxQw7toddQ4C2txJ8FmXHvazmvg1kmd2czT3JUJqiBKsPhN2mh6wXzq38yZWsew4P",
  "key20": "3PSKHs39EkzJzJmzd3mVSSXp5ccRjjkAPSqcNMeEZUAYmZUPbJyzpe8r8AuRPfUv1RL7S4hrR3LEMQLJKVGVKkGz",
  "key21": "2xpxtP8S3nFvmUd9NXqv6dwQn2Bit3LzkgBf5Bg39PyGKM9TaGfHZvcHYzBBUJoxJtSeBsxtJuvYYoCmNN9DGJK6",
  "key22": "34BJcWS1dUf1da4TGbJfxA9tS99MvZpr3ZTiVk8wvFC2UjEqVd67SZA8oxxaXs7spLRx5NMufeh4aQ8FhULn2zyy",
  "key23": "4HqgB6JEPuDzMGSUcs1D7qpNhBCLeuZatcU6Cfo6yQivBqWoEyqgjka6bH1RoB5ZrJj9bCc5zaAQoi1XDfRFFvVq",
  "key24": "4NpeUt1inSXP25AE8PpV1MC1yTioj9ZyG9haULMYvGTyFLpS9F8u6LnsXygxpnXfLgx7cQE4uXC6jaHpbLoZjMe7",
  "key25": "31X3FExAsXcHLCdSy3gm96AVpXHhn4LtLJNV3aaaQotrKPo95QviqrJG9SMzVN3Z7YQqB27XVoYnWXpWXHauroFq",
  "key26": "QpH2AgbDo2YfjwPbR6qpnaFUtZyP4Qp2JF38bbAri8v36RaSpxjW4ffwGf8ERyt63qeyhVsj7pms8syHxZa68TW"
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
