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
    "3WSVQn5VKqoJZhpgdwLkJF8usNDQzHKPUqJH2qat7cd71UvoB3hkbED1nJrVUmNDw8fRDeCJ9auuEBuXmXNTEjcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dZjPoMoNdGFYBtuuoy8yURho43gZ3DT4s4Nx27LVuDsR9Xz87ZQkbRFiN3CcFVQfYq67nx4cZ731ZZRVuXVd7Ek",
  "key1": "5WbyWGVLFsY1xTKdd52y1SKp9d3MeiAqpiu6s21kug9Z4GtNTRX26g5qLTm5NPqeLrvrZz9eyGv6tRSCjGotSiSF",
  "key2": "4LrvzuRyhK1XyKG5MDqtuTBHbD68vh7Gj1bi2Ax4DrhrQ8tva84HEditMoTrCws1vGpk91vJQZpabvAgKyKUazDm",
  "key3": "4YiodSnkkEESs5RYz8obrF4JuxYuo1tzshE53o4j4NKrpaCULgkEhBFsV3vtP7behvtMoiRVaMgTptUD9sJxax9g",
  "key4": "4jzN7obunA7spYcBDZoN7Dud31mvgvJU5etqCwgVkVCLgnXXy5rDduRCCTgi5o7wvu7WiPUnsU3iiLdfMTEoCu1V",
  "key5": "4NC8aDQz56CU9iVuRC1yKEirMVwtoT9YubEWsh6S5iKjxtYjGpydPVqJABGQoJKjjnFQ7CJ6WC1tKGMYR5rxmaJo",
  "key6": "8QHDU77s7NneaDnmKo6Lny1Peti6HaecLJ2s5Bq55g8abgjeq5tukFvDGh1xj7m5H3yxMYC9HnVcDMF79EtJRMF",
  "key7": "5oZHpfZ7NUuSDGsvNg1YvZtfp9ZYQJnSwYDb2V2uNcddfGYtyPsGbHqqr1pUAyi2A4E58UTafcYae57zHiH1vbbs",
  "key8": "3TJbAKdCvmYvg7AFRuPNo7DFj2R8XFRCs249CAYVqjxq3n8ZVnJntDwsYrir2Yp5WwdS4ZgEs6BVypNiCcWoSbUz",
  "key9": "63eVhh9StVDJn6kCn9Fv7RyqAS6qNw3VchJDvzsAGHeNW6ZaDyDuy4znUnagL6idM5V5mbtEMgHpcNSHtrMSimY7",
  "key10": "5aZeqKJXLTFN5Ybunqut3MmZae37Ykze8yjfGFzw1QxVzzEdLwPewwwMDfaoBsVyWB2u3W2QAjvaA1mGkhgmcTMw",
  "key11": "3QMwTjY2MTa5LEEcxPE5DhMFATMkTRogRKtaqxdwqaCgb818ummTfRsonXy1W19d1bcHZuHuqJGsdx5wGaUiXanw",
  "key12": "5MUxp1mFkiymt784KQ6WmtMojjsycSFovYPrnHq9oTy8ewqdUzG39AoY6hBQg4DKQQcPaF7X8k5WjiN5mG4Nhukb",
  "key13": "33hTeZCVneE7jBTzddSMbUFJUQ1h2QTvsefmchem2yy1Hua3w2WYY2oD2HevoPVoCQ3DJUFQx4Datq6vsbzLoogL",
  "key14": "4X11TkVkgje3gqxgYtDnzXKnFkFMnsrWTBLg48gEPeEqBULdxWD84dUXjiYQK5xKKDiUvnWJwtKq4m56fFRDYL23",
  "key15": "4YZCtjG2ZZD6hWqHMQ2uRoVwjo4JhCiuxHjjoyEFCLfrh2WPUK6PQLBnaMyjEwTXXrRF32FfbUGF4yaAoEm9LrqA",
  "key16": "37uNaM514nRsNbPd4yJyRiDFX2bYNQKzN2pLH7iYLcsd7d4zbqNJj5S48hPMH26RvSJmnvPnq65WDk8Fkju4eQey",
  "key17": "EPq8XnWTDgKk2Zo3TxprqD1Ku3VHWCLNbHCzLZVYKdRmqWqcdt651VTEK4yyFFQvRDeTGhyAK4LZ61Pga2o5DBc",
  "key18": "4hZCm658e4yVc1BJPYsMj48jAZYEextPeTzu42HJQRsRrnQgHnWLYHTPCw2mrjouBdYqmbnqyqCw9SMAYdMyeap",
  "key19": "QiscSaiLQNndRpuANmC7G2PUL6X37uKQ6tY3Um5yqmZLv8io5NUGVm7yRmw42V8fFdmS48W4YnGF5hnwGAoLfvt",
  "key20": "4T8SHnGiiy4hNJLYpyB6Qp8yFyVYcehM7Wi4xVd7NqMkW4k5A5u6bWXn6ers492KcnE6tJyhnQcBToVRnNDZBgdt",
  "key21": "vdejkKbbVd4UUhPQeHVhfvskDQ5EwZEYQiZmo5Qs4QdESpBXXdUw2oJJbgH3Kncjqe5GHfvuHeC74nni7GYZjd5",
  "key22": "3JwxCAGhmERaSjkwX6db7ZFUQm4zkLL3SFnwqRKLpk7DYJi7psXuWwnTAKhHSYeuTCMyDCCkvcdhs8k19Z9JQf51",
  "key23": "jf4UdzNjNJ9zLRyYEKPsd7oogv8jjwHtio3BcoDjCJrNHczPeJUvk19NMwbtyFmgUNwTzzYdJ83S2TkVwK4cQc4",
  "key24": "2ra3ax5Wo38ekA5MaBfyEckhJa7ANXMDJKvTYR69YyqoXQCgxxQRvSSKTXNue5v7LUhCdBhMy1E6AqQGp3FYnoc4",
  "key25": "2vtn7JVAbxvoeDSbw7GaH2Q5pWzHg4aHpg8U1uoKwRbGpwqdU24RqbJDZMAgSeA8SNYzAUMZTVjFU9MqEsDVH5Z4",
  "key26": "eeii5iVyjv3qcMwFzJiQR2E7yUZijM57gDANBNJcYxRdd8EfFHSRagnBg9UmUMb3jThM1P8VJAhT5vauCPt9Er3",
  "key27": "5XxrPmdM6rR4ysfbU7Wev9dYQrXS6wXr3F661ZdptximHp34gTcGg5hLqTsQCzkPqg73uqg9VKuXvMTTxfivvwa1",
  "key28": "3dKXj8Cj9qhJrPvFbE3qrAWoUFjau1KuiBVa6SjggurGmK2aQxku3Jz1C5yErqDssNG6XUJ984DVPEQDu4VWy7rG",
  "key29": "67og8nrx2yajnZetYfG6Ebr8T4A19gxkaXUFSTKNz83Qf3r4WeQfXzjEahJEgNZHsYM9QrdohnZZNMUDMEPXsbyW",
  "key30": "qXKaZbGgzmwfge4QyknnBeBMkCHJTFERUBjXU74gbbVVHcRLVL4aQKwk89aGycE2nQAvY7UqvvMRWqeizAhwM1o",
  "key31": "3dMGwgw4ULQKvgwQcDKBcWp9Ld1jizfZoGSd3izvGRxkdVrpmb3ces5JwpzV85uhuKwtUpYHgKdF7am3bethhrUs",
  "key32": "4LJyRgM6wZupLpoW8WHsL4n8yJqmEst78P9e1ShT4bnwXeouXyAYd2p8EuX5GW8QReBUg71urkPDotA3AtQg55ZM"
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
