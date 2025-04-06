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
    "4RJxtVkfsRpgTAwjSGiprkRHrem6ctQ3R84fPqXU6U4zk9RD5GwhpqNjSu1YvNN8WBiyk5ueL6f2WAFQArJr3QtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rs83ddeMAvaZyoS442vpNUF1et4bTkU95zLMFnNUe9Cs7cyNgTyy7tzBCDXAvZCm79qkwdPSRmtthQrnhsCVUyP",
  "key1": "56GjZSpaK2dWkqoFxyRc7AxtyfNLbvEU4qFS2HHHkysJEXk425Wg8eWVosGj3sxNV29UwLAQj6usdP6hXGnQPgCi",
  "key2": "5Uz2CgH8fDF6TbdNajFGUre33dqMCVsU9edsFG4ivW8o6XNnF98GfVkzWdzv4F4NjENJAbyiXq9RRjPK6aKssJJv",
  "key3": "5fU7bQrA4PeyqkzNFzX3HRa8Q41wxKoTo63SmHE2hhxoB3WmCxrdwo9zLBEJsM8m46uRtKGYqY4dUsLMJrjbsZ6M",
  "key4": "4JouECFTD7ZxUeZ2izJMA65zZgAVyFj8nRDSPXVKX65EfexPQ59Afz9CQHEZQfhvNpDGKkYEABPCjCezBWVvUe1a",
  "key5": "4Bi7vvW5eprLZZEGbM9DsoXbxcWhEy6pm4qL1HV2KShZRUEhC43v4F7rg4JmGuymSBEEHrBx5DpESH86BxffqSYy",
  "key6": "5UvepjV7ypZgyCRPs46iTbFpKnhMCQvhjtajFtUPvqXvvZ2Af6oDPFCUTpY7KnCbMbhn39X6FMtWoJfqe2MuftcW",
  "key7": "5gGcFdSR4KFD1uUvuYy5JRGFMm2DgQ5QUvwQpLq7PEQRTNNFmWQt7Tyfi2MLoiThAWMQwdMahWGtZdNok9yf1h3D",
  "key8": "5ZCnHLNjng5wEmGxK15rKrYyQrYqhsLEfA6a9N9rUDKiDJeVeyQCaSU8JBhAfEGkbZj7WFK9WHLeoU4igCPAu2Dn",
  "key9": "3MNKJeRTHBQjE2eMScaUxZjGNSdjEoWTUATHFzFwUUx6j87uiJwdCmqSxHJbVK5vzSwSMy54tDz4UahBvqPWUNtK",
  "key10": "zKn9edB1SaRqXNwJ8ifJvZobHETJYgzSA7bp7YwmVf9hitDtxMjRA73DEEPKddyjozCkg3WSkLQbxm8ouncFuf6",
  "key11": "5X8YAZtacbjeF86qfwxNa7hmecRew1TbKYBrNpCaDmFJJXToX7jbXPDSMpRQAG1PEGtQG2NXLxQYaVk9wommHyuR",
  "key12": "a7vVTvytrbyq6FY2f3bmGkfgcvWsRZUHxudsbv6BNqF77Cb5P79hkjMGZfLUA4azf3LmjBPnRCgCpYhNHVd7XUk",
  "key13": "DczsQMS88hpDfv5nbuQPwaaz2qSTHuGDqw3S69jt1E3c93LvkKgRRAhWYekcinzFUhnsXGEsjY6NiJmfUnGM3Ry",
  "key14": "39PnT6yxG2tHaMajxLDZiNE7kGidNsUFyVBEkmR476MsPQg4quYtWamJGzKq9dBBfnKeAnSjuzvEf1RqspnwFpZ8",
  "key15": "475FXDJ95WQ6p7PXoXvQF5Y6UNCj16qfizGj8csfeaZd5m1X9Qmkgtqu91AA1JBnhh4NPWTiZ8yDdFrPXfNaoDYR",
  "key16": "2bTbMtLNEEUKJbjHBikM11ZVor6TcMo9gjN16jKPQPR6vkwEkTt3cjrqoxKaGYXDaVXxzu9PnCxVJ9DbtWMPd6cf",
  "key17": "2KgcNVQ4mPNvtSGpsLgMuW9WjsBAwBM641ohbRPd1xutw1RqCaZHV7ivntWwenLVgMqxcZPG9qvBfknY6EMQHDYg",
  "key18": "2of6eEqUyVeZ5bqaN44DwXbBNjtMDxNKphDgwqWipgQriUMtJzHqG4w8qnujxgvLLX5TBQfNqY7JcQxrwvnvuBVk",
  "key19": "mK24LaP1qH5cy52yQMmirMNF2oa8URiuAbruQdSonvHYnPcmjcJf1rANCqSYkcWFEU7JULoWtoSod9ttwuF5Ap1",
  "key20": "5UkHuaByjsEiEAvbKgVVUHYn8PjwfoT468mcLEJvUUW9qr7qosoiMFXBViHcyj3MFtR2iN7swoQkohKZctgY1yYZ",
  "key21": "2PK821jJnAFi94KtjEb7gN6PnnGvPEZ6DdqKffRKhjey3UFHS1ZLaBhCN4AnpcJhzyGtx7b64P3vPPn4R558K1Nd",
  "key22": "3gZkr3qftADyx6FnEYX6gf1p7o6diXdPU8TnMQ8AwXqBfJHX6yfsto4SJ8mkVoXjN8epTLgtF2MxnfSp2bpBcbDJ",
  "key23": "4MTxPsmhtrSm7XYXvehzEkho6Styks53HLzYxzR98CJDjhyvombVS33ykHCAvcWHUCR8h5HC4V9biDxwktx1KgkK",
  "key24": "3HMWnRSN4Vm2oAbpBgjaQQtERzvhn92tuXEDXC52K1BaNzGTy4ywwnvyFsEcLee8qmidRiAgv4e4ipZf7mnhpZd2",
  "key25": "4BeKt8YsMYsxJzfGoeUNaQeafWPbt9Q2TcbKuVQ5VYWDRwitBZARHsfSQ9GhgNcwwLfawtWAcEJMr6moJsv1kvyY",
  "key26": "NjHZMfVSBmLL7ULRx6teC3CvQyP8J5cb8pbVouxXHvV7gkrXRp3sBFjwy2BmM95XWmiVx2HPcGaXm4eAF1mLujJ",
  "key27": "gNQqkwgUfg8bpqngVNKFXrdWoy8mbDu69RfKFVKk3uhdDdfkrBfGFsLxJpuv659T5iBPbBguUGUxfndPFeStwyt",
  "key28": "2SHUCJW5a1jYQ3QQLUekyiBf8vXDv7AdPfqM2YXXXrB2CirLoqM3vbMzUfdVB6XsnDymopAQ68JXbdt7iy3gC9hQ",
  "key29": "XNc2bzziLPcG8Dtxt52AHMzvBk9r95Z93JQkxRRdd7CG5bkTSZv82X8W5FBcV64VqvsxTr5UuWNprLC3nh8oZeh",
  "key30": "5gJ8Vm7XeXtZRk3R6krJ2sNsRWU15o3YpwL8qqbeC3VQx8AgpJZHHKR1dmd3qPgytA1WKar5JMpmrtNev5iEghAS"
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
