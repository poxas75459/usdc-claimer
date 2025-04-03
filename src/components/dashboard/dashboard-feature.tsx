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
    "5UpjbWXFb3fDuXzXvpFBJLGLs1YbQdeME1A3G1yxsKmm6SRqR6m7bFgMW2mWxjLvgdkLLrBMZo8EHGgQvJvAZZfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tDLygKnTfqB69EZAiuMXZEHzxM3QZKhkdMZ2NbYgB5kEp8GSPByzHzTzbbdCQqeeRympwu2morrDptVcZRDhusF",
  "key1": "3hp5qHnQuVBhsTETLQrM87Tg6P7i4zFcRUNwzEV8xNHf3Z1SBwCsEt4UHNf4ttHyBVtzpdsVW32nFFPdtJjjhVCv",
  "key2": "93eWASwrZHJ6AwDzGurxJTHKbR9pVWtSNGnaBcEhH85CTsa9Wx9kzvuubqyEQTbgH1qmGxzKHePMtFwPfzdVU2K",
  "key3": "5XM1oeVva8susXJJjd5iMzyEjnmhM9n5cWBcayneFSwhcGj4FqsN2NXUcigC16iKTStqLWhL6N2xH47mPvxoWToq",
  "key4": "33HPqCmKWV6CHAp2NKF2Ryjrhu1RXMXQC5Xi43qnKPqebCDgugsTv7zT1VSjLDgzuoef7uKb9tb4Cc2guNpsS3z7",
  "key5": "25GSdrUFZv8mRXaUd2jiLn5TseC2HwLCRzuUdk3omkpNX15J9jK73gpnQRqUVZyn87jug8rYyJFF4XK5dUtR1fwq",
  "key6": "4Yv2nkwQdjCEGUL4PBAzULMCSB5LNAv4SQsRPNxyEHVaMNoBNpnezBZxvQYiGqNEp91nGXc9929fkj7zm8KsNYKQ",
  "key7": "2jF9JUwp4XQg34GNvb34ksZh6v2TG48RqEQCKbW8t6cz3GGfjjMUQzKgwCh7vZ4nVC1ph78UCCZjUw9SwesZSMcU",
  "key8": "4iYmepKWdwaNNyiFmEv34RWMxkUZTLo34M3zHksyKajfx8fvBuePeuGWPErNJNqHHjzaGoHXgEowPu2KPQGoJCWU",
  "key9": "Zrfy9PaFqUpoqRsRpoCHMQ7G1pKkuHCeVx79Zu5wcySgYNwVYNmjYFLMi8DxtGWwTuvcVWvo5rXE8zTdAdZSi3h",
  "key10": "3Zd5ZXLrLxM9AeDo65CwecsgW8dbqxbWV8qAaFYmtCqtviXrLE7EvuuXkCawNBA2GS7RgURkd8YLeSSoCMbqArA6",
  "key11": "cTb84fGVqT1hc8u6hjwLrDovT8rbM27kK1QA3bxir5RLzC8SKZuPHQGX63KkUyCht6bXCNVE5pPFBxTzS35kasq",
  "key12": "MiTrnSs6YyhcswEMoppvN5nsRgJTw3WeLGJh9QYr7pt6H1vHKPmMfLZC4qFt2BPz8muAZD7aA8jWjQ2hAqvLsT6",
  "key13": "4u1ZtJ9HZNdm14asx95wdTk5yddygV6aQCTRu4gN2D3dAk9Fa91w2QQ47xgehBz2zvBy8VfAyMLnjMjn4HCf5W28",
  "key14": "29jfDtFQmtsm2bqVvqDii8XfT5abGNUaNwiDtJNkq5TDXFj2Q5FuTnAnHnE4vR615RoHbZPEZCJTrY72avT4cY2P",
  "key15": "4JKM2wiEUEZ3sYhukwv7YejmrujPqpW3aP1RZbNfsnX3WBaT8QCjMnVQYACKbzpAYEfQFNCYAzmiR4oTgKg7ahoK",
  "key16": "U9njLct9BsFmW43y6atEVz5RvU3F4xyNr6Tf1uUCH3L4NbHmpf9VymEp4siU2ifZCHo4Nt4CG5b1uhgu47mQErz",
  "key17": "43oygcSnpaRBEnL2J4DPwofdiJoAZuniP4EgKjdt2W2EY1S9ksS4f685xF3gQYWLHKmNVjohhNTLvqAaNYGdYgKm",
  "key18": "gEFnJqf9vcNx3w5ANbDPGBm8fmDNXTnT4GVxDQYnG9Q2yTxLjp39kJMAPT5LbBMCEDuE8NSBZXzEBCLAbisusJ3",
  "key19": "5cdubzHPNjg3mf2rME38M9FaW5vM9Db1xMasQ6qwyBYi1tTuv23G62CZucCjN4YydCfdi1TRs7HzyhUoBYAmMErm",
  "key20": "55DVd2vbfRtKK2qVitVnPcE4o86hGG3KjsyvECePF4VBqEzW136mxBkANQWRbaS4GzMSdutPi1sbPS6RBarggFr3",
  "key21": "YHJYg93R8NJ5nNz4j59nLUweUMAx9K5HdT7smiFbWw2692k6xS7KjM48Vo6GNVo5RtEkfX3GwU6y4bGu2GiFgCH",
  "key22": "3wYM2CvfYEkk4xTaLXsBR3CQtRzxeyAhD8iZrka7mDoCEg6aXuTX1D1Fg2yum1xa1Lp325UfaDuzvubAbJgVB45H",
  "key23": "2xed7KtkCMsWE3eDbaDRYm2sbbRQ5TzHD7tyt6ETqmorPxWo93Ycd2pTWq8NhNT3QVN4FgvnjfPfD1KM9sR2kSuX",
  "key24": "UDkYQjAGyn8JPMsrf7hzpDCTFFSUnDKYvne6LqkvZATQUHkJ4nZvDjd14kU5D6SHyPpZUh5ZimNwtg1g2wwJtSD",
  "key25": "5DJ8cS89zWHDPWbnY5nTn2bKDUjC5hUgqrdRTxYmnf24EP3VfDiLAV3T5YszttxuqNyrHSZLioNihDGkHE7f6JEW",
  "key26": "3vqEfX2jgjgWi3BwG1tQbos7SQXMRjUKuX5mt2QwmZFJKcSMkYUVVptbtdo3g32MH2QNth4mBv9c3vNknkfErsCd",
  "key27": "5fQ8SLVXxoeh6dUkQwfhZbrCcpumpgm16JU81xxo8wqpdr2eb1EZsxhskZmmoWgq4dcE9pWAmb79TaKqo2opfcVr",
  "key28": "5H211ETbzgzYn5pSTssz3rcJQ4fb49sKReARPeQeWXMDZdT5drfSpAxZXNa2oVZNumAa1VDq6eLf5mjtKJTFXGLf",
  "key29": "27gZZ4Qt4BUPrR5s4gQrJferywChdKVx1wqzWLHPrErbCceBusMYbHcYoDusm6wLU3umh4PSkujZCzViPcea8RhW"
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
