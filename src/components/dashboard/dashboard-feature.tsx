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
    "o37y1Y7YawmarYh3p7hzR4fP7m7wyEG3ZE2ChHcnc5ebi7vY7yCbSoVU86z87X9EEzB9iGzLgwccPGMPj2iyPgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x8TmamosQKEDPXTnLRf6EKWV9HQixZvbnuBwkhfwwbkc35UJahutQkGPL15oEDSZRcoB1uc9WGoqELPhG9RMPMc",
  "key1": "M7fVkDo9QUCoBMjfxb9zagZTckuLUX1gxvoj8jaVM3QAQZnchnNe9dJLKDgc4K3JMKn9qkAwDQ9rwayWKB6KKMb",
  "key2": "5Wq9WwLM1WYBwFD6yXSXCh9Machd5Ru2U8tCKgftQRvuhAnmCBNb9nqbhHZukqAyS2dYj2JJdrmrBQ5neLifXKYx",
  "key3": "22VWLXpJtuTPzEW5bMVBa1UNnQefuwtrR5wcNAqj93gu8WGHmZjuft3cdSacSA4PuVK7vJ75fjuaTrXBNR7wtGeF",
  "key4": "5pxnQ2k23EPwS8iTbD74VLk1N2pntnx4DKcfLiEsZPWrq6mWGgsQcyHBBNaJ1VYuzUnwaXqjcnJizeE3uEWTqVNB",
  "key5": "5HTDW8BnR5oJSPYyut5yX9NFRPiXdFTeBCmP9ofunEPkhXgKQKX13znrXway1mLTirbvRQrZBgTD2MPTsUQUgrbt",
  "key6": "2nVnRz6R73s5UhJDDuj6ysyyE5kZf9y3cr2UkQZ4SUmb1QCKk8neaxm4cF6zYBhrs8PpLgoQyhxhXPJ3NoW9dXHt",
  "key7": "R7B8imhgPS4PKKsN1iCfs2RKKXMeoe7HJh5gi7u3bwZcrLZJNMkXmAQSCwxzix91nTEgnoKgGFUy3x3hPiXvhGX",
  "key8": "5AGB9prxput5r7M86M18oSE7m4ZWDktLoGZecJ8AehdhSLAVhTV35D2FGW9LTDcowi4WCAURNDWFW1bLtUBRqL7P",
  "key9": "QhNrzWCNqZzURb6DubkFdPxNQr7zbJjnsEKaAAyyMg7iJvhbgjWFhoHvLkEuRazq9u1CWmA2dSaSd989cfFZA9k",
  "key10": "3T1WYG8TaejSvLiJdxs45cRfphvX3k9rpL3vV9F9TaTeamDdqWegQnXDqGa3YZ5M3eTRmb6B6CTpo2KPmX49M5kD",
  "key11": "3i5pcVqNPFhb38uUh5ssfjom9Bw8C3NRTqzEnkStcdzHuNfHdJEGHFUkwJEcWfhNvRJRdYs4s3o1jyTgJeH8DcQQ",
  "key12": "46pnQW11iCyKKKVD7ZWm8C85wcnyAnTwVVTCpsbAMuUSA61iEsFLwqyxJpZoxsegka6BH4g8aXbWmCWNKHNu9Hw5",
  "key13": "26AFNqszAt3p1wNdoPpaLDBv3uee2isL3FgyFWYGh5NwkSbmjL7xd4kdq9GR4M3SM7P7LEBbPqYP1syY9pYwURBq",
  "key14": "HGtcSbWk1hWrQQH1kkfXiaRfXCtK4j31jHYdykJ1wsAU4utZkv8u27TLmRfSpxW3JXmfzSw7ryVpcwDDaihakAc",
  "key15": "5pXUQLcUfsPNjXv7yaCNh1bQEPbpL9YXqEzKTiRx71bPmHbByf37WhsdX8N8xR1JRZbwxRp2eaCrHgep8g9GQV3C",
  "key16": "5A8YfABBCJkYNXGLG7VsnRj4tC8QSCK2bmiUpHEe83QxgCTkCLRNJHSeKYEZUJzbDBtQt5QP9cYSjpWEZyWXGVx2",
  "key17": "5qy6VmydMQ6pY454RS3qoeAw4nYzeeNkgpvjpv7uEUxF1M1AXpH45NgBjFThkfbgpxFZjm1QwtTnVCLzBYF6xNxe",
  "key18": "3y9iAHGWJaGiCUyB7Vc8BJSRLpvpWXKRJJH116p4t4UasyUJvZXHGQP6WH6qVFi9kqc61feUTVRcKG3Jd7bGceZp",
  "key19": "2owgUmUUFfsg16P37szv7BJGnjNRunc8gajm1EY5GVWoSAEQq6XPHV26g44PLDKPvd4bavaFtEsPXwTnDUahxjXz",
  "key20": "4xQEU2N25jE1tKDatUeAAQXqoKwJY3dSQCxn9ef4FMKGYh8AW79Akd6LjmU7np8rSNfW3es7Lw1YECkhF4UaffaY",
  "key21": "4XBjpbuZphMqoAnZKdKBHcUSWUcj79stnZCGHC1zkLiQaXRREwranFrqBL1fybYFyYHiPoxJDUfpKVptJv1jXxQc",
  "key22": "4EJZmTAsHqBQErXunM2Ypf1MBvjQQh4X5bNCpL4bPcZqTL6dgg63iWerZRb8WR7g8Qer6oG8Y9S9LNvFi9pbD1V8",
  "key23": "4GDV54PReu98DjaGfgMiFvmdjv6fWrgnR78GagfGwdUyySwyiT8kbkWKZZQpQCardq6V4A2VAgAdfdxAZrmEGX44",
  "key24": "5xFqTDN3LgBxzLwiVKpYqsRBfFPdC76QM8Y8CD599yiYm5dhh8Bh2K8wuNW4emEscgoUfKwtcjBAAFUzzQiq1gzS"
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
