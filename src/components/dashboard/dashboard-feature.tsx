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
    "EeSwL1rx3EAsnwq6zDNgDwy8GxJKdajwP9EfjBkSpYbXxj9mQGSTNfViAfxuGsmntv6wH4ENxedjt7axx19X9ss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ro5FGo2jvvAM6fwieg4GkVzNCebwJt7v5V8PQah3cU5R4puYvR63CgwMmYaRf5Jnwm5TWTyVjbLPaJEVoum9Jee",
  "key1": "5aiyyRJtSp44scRBYx4F7FsqmXutskkK8fiUcRTGFHwzgQthAz47Nw8j7RUZjScpoGWhuC91dc7qjoBUXmLKaA5A",
  "key2": "5kATgTd5conBbmipbDiUZAJTBt696wEFuL4Nc3Mqdxn7H8aHTqC5NJ7sLRLUGSMkmrdyNAcZ61fpUpvzb2MYS3F7",
  "key3": "33HpKvtqcrv2RcNT2ZF2dFqDkNrkY1hJEke74cXWxuKoXn2R3KyP5XHwyKgdV7L9gbvJNEA6xbMBB28UeEsF9yjs",
  "key4": "qk4br2DN2udn5ofxsuajkFu1DPQrK4iW7TuiAUM66ibqcGhUfkt1yrkMExrSLvUn7aGN5KAsHjeT7o3z2H8Xv1w",
  "key5": "2qQZ9t12sZAjgP5JASYXHbrMZXEi3YGxVCfyWX1Z1X5vTN6Z9CC5w665aQ4N3gkom2kPY8M8D99ZECLVfBZayka",
  "key6": "44uWAp6zj6LKxs31bZdy9w1W1zBxQrnfnTTkyzetNV5c1Y8iVfw8jrMJTUwhwK2rv4LSzFRzP469JbR6c5RRZLFg",
  "key7": "4XZqgu6818tr1Rdky7RzNMAeFWB9LNheE8t8fSdASY5P53YkntizKiFKT41GbNPXzUSVoa2kvKsvxSxL9v2mbQfw",
  "key8": "5Y9zP6cdkwKVmiiRRJURMbap9kGG9VeexsRbNkYzQDKtqCHuatUXsRPBANKfNE8inWhZbH6zybn3AZPp4N8udFtz",
  "key9": "5kC6QeFQTALAAcVy82zCAYKVY5SfyvtsrkZxDMaJK9bbaJMe7fnZFYEQSQK9vptzQ3474XETiWyuZMHh9BBewteo",
  "key10": "2eGXBTeoMc2HvafzyX1cH6EMEBtdUL1nP73te66FDjjn2p6ugznr6Awa1QW3no2WpqCLRV7Qz6r9kx1AuyUW7JNe",
  "key11": "3g8sAXZ7VSbGTKuHnZHLyHNHkQcHSawwxZiP9PD9UcJyd2H6U9vu3osPDjJ7xS1VF8zYfKLsz9fVgdXGsgy3LQAi",
  "key12": "3bSkLZyktNdcRp8Xo8tUYLehZ3NhCXUa5Mrwv3oJMXCiQhdNmUaFQcegsPJGhVN2SYEd7khXwJzfL6dUe2b36a26",
  "key13": "V5WTSPYZtCHRNhiGbZE9ATwuXuz2b1GGkgy2RR58qfC1i3JbVkrXbCAYJeztsc3RbVq7niBmRMbATeDXg7hL8Qp",
  "key14": "3HrZREpgeRouUj4YehG5TVwuzYntjQNgDQ8r32bUM38UuzQboRUj6Fa7gis98u4LBYsMssxQoMrEqyhfc65LUXEi",
  "key15": "4b64fDRWkNyXt5k3VnVQv5X6MQVDUCAs4fyJomKfmnqJkArjjJ8mUiB4aPf6FGsAYNeH1apY2digyiuoZJ2wSiVC",
  "key16": "5JU4LzVRpUm1vru4wUTjgjBi46eNe8RR7PjQP9Qm3ucBr1gGyzQ3xdxwRvBodivuQvjYpqjEpHehHFTyPr7jBZTU",
  "key17": "4w4QTx5J9FrXimVuw9sT6Y1Ujt4gsAk8zjkdur4UQkinvhkGNPpyLFM1f1X7bsE6Py5YstJNqz2TCcDaszF4Hkb9",
  "key18": "2uKsx45M7qvsixtW7Uas1TM5meKiMQ774Yof3V31ktppv1QkJa9fBw9io2hA2389nMkurnekeqFRdkB3NWx7DHeb",
  "key19": "5Gz7xavzbTNqE6DxQ847v4qjhTWy1Fpw7j9XjCRP8cPLgrZ6TzMxb8QmHeHQBcjYsd42sQGeB9PRWfRPeZTh2jfV",
  "key20": "4MErc5zVpHvznQGwQ3Bve2uCmCuz7gqv3P63Q4HcSaXFwe72sLMhz4ZM715n4aphwF5PcaCbwXnwREJowDnNsGYU",
  "key21": "38Cn9CPhxY45fgSwsEWaETW4TqE9bhqB5B5niH77Lzn1AxVQ9guguyFGe2TL3DSnTShrmeyw9UbCR6TtCTa9Yp5t",
  "key22": "32TGvSKChjoXN68WP4jikrCvsF2ByMwKKSw8j3QGcfPEe7R3zuX73nTeGWCn6Qw9cdLRAjAuWSaamjekgvghAK48",
  "key23": "5iKdb3oNG1QNqHnWWNXyNij4ZYekN2mmFPwrKiiWkFodfBAsydhjANthEpnQYfmMHAevJfmZpF5BVzcyUPLd1zAd",
  "key24": "22WWef8TcDPy8CcyWk2WwCGLkeikC5rJp4TdWvNoyinQtHV2axpaDKpqTnZhbYCADFbowzFtYj2AkaPxUjD6BTbP",
  "key25": "3C235PVTeBcbfiNgaoCaB15FpLknG8pkzViW8VyKfJPWL9yRxXRG1DhsS6VQ5rFzNDhDfCrwAHMMQtXxuXphCncQ",
  "key26": "2SUqBup6n1HDZnZj8bMchpsbyk45KghJZ9A9wiieGroVe2FvpcVA6ayuY7hnNsXhMQ3B3hkyqrfhDFq256EGd5kC",
  "key27": "2bZHhBRXqV2N6qTxRZhwptjxUQFYh1jEuPFsnomDQUTmiW9qQEmzQEcutEZ64JjDVGMbtQxvFjeYrjff52JjE47K",
  "key28": "3nZhziLVBh856Wv1YTFCVbFqZRcj5foPEyBLyqt2cUgjMniJrqEKTpTd77w3hGeC8hu74u2q8Ye8Vo5avcR6Q9N8",
  "key29": "63z7vBftsvSaeArJCLvaq1Seuyz9g1xgKELgbRoTxSLNdUvwTifTDxpkHaQteSRC99qSw67dQ6ANfLmtZFvu1sw",
  "key30": "2SXPbwV71TLAvR66vf8nupqggyc8MkBbtkKnqSHQW43uPiUjB5AZaV3MLYsTj6jSPAGRwH7hbSkx3uS5Ukws2hLy",
  "key31": "5aZ7UuBVmhzFzDUmqdTiDFmHSfmfSfWgYhsAGDK4LTQLVf3Sp6TpPkFcUyjvnMCQSotQ8ugDLZ9svkeGBVZkzFrs",
  "key32": "dakWW39e6CERCMTWt3moYpFDu9avRocPWG6LSt2oYiqQ7ArbX1CSPXoqNhN73CzRf6REkptrKXj5J2iGYfWEYiH",
  "key33": "3A8zV6X5itsUQhrnfBSFVDZFSinZKHAns9CJ3YnJxHyYneAJkMmNwUVAHPFKm2KuiDWPa4uTZSNrJpbbNs4bjEn8",
  "key34": "5QT32tLuBxaeADwVjEbY6DUajiJeYWcAoqatChyMWYde6yzFiHEx9V9TtECYRNfgq1RXsxSqoLHMhzy9qMmeYwr",
  "key35": "4P7LKs7RzfAfnKdkkqvyfh8y5VDMZRohdYx5qLCAX82oqvsqGnrpGpCRvX7AnCwnohw5Z1FLgNm24EurhHLSA787",
  "key36": "56EPh7TmAy8NQBTQMC3S2H6ZkFEkXQtQgTbUZMNUMLYFkiowRFzfetxsFeLHp4x5kiWJfZNyvqVgqQq3jxM8HqUa",
  "key37": "4aaA5xDVZScWtzLord4aeVZ5XGBGug4uincfPkP87midyNHx87awfER5eK6T2PxQSra2JR3c2Vjay2Eq7VyfkcaU",
  "key38": "HLvACqJqvhKC15Cb2ZN2ZbibFGeVX4rhdcJkkVL8SfpxJuUJHxxJu9K3h8y78zZc6pUVMdRpXwwzD11y5uWhPHM",
  "key39": "2fxbphY9h41oHFE2ouCCqpwcfwrCnfJi2rThBkz6jsgbnKWY8PxQE2RwZeUAcVG2rBzGE1x9wW5FDNDc6vbj5j4k",
  "key40": "5pedKwUqejZduWjkeLsMDySo5igVDqiZVGuKgD7yhQMt7E4fjonmpVqeUFogEZ42viLmvDZ36b64s4TN74fJG6nF",
  "key41": "4kSny9YGGbSFTizS6bGKkJRoNz9DD3pbyy8rNzKif2Jf8j7RoajJLPaVSeiqr9ypgpBPNA6WdEPcUXNYkKDzUDvL",
  "key42": "67XFcMFYUwHKxzJtuBSnkE7GS7BRyX3bYWkZp7MALMazaXv4JAh3uZY5YSHYn8RqmnGK7Ujxefzx3YDEAfqtcJhT"
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
