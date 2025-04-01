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
    "bKSs2jjg5EMB9X4XTyHgJxoTsizpeqs5Mw9kxrEZStphjTeEMtuzvAaN996xbp48ZDfjF6B7K7u7RLC4CmP4y1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "261b4Qv7mFm6rWhx9ngiQtKLGYX6WcwRVSiRBNtcQa8T9yuB3eULU2KZPq34hQQcwSSFYMiQhcVLeJCU7eQxEhPt",
  "key1": "3QJ5ASsaYmAc5yWgDJQPEx4E5thMar9z5FimQVRR6Xa6U7dqCmRmNgfWp5j4iKc8vCdh3UYQfmAfocmMiyMzZgVJ",
  "key2": "3NdDNYhRftN3LjUtUQ9tmjgBdCGCZFMpMEAt3mGJJmic1ovQicUhrzMh2b6mhsKTxNhMZUM1wP4XkmdH85QZJbm2",
  "key3": "32tZAh3C7VgB5dYtcx2TTpqQPz8oGN7wq6KqvLepmqLjG6kSEz4Wz51ZswEP3GHvNpjbHhpXYi3sSdsrhRN4L8kA",
  "key4": "4yWp1LroG475BJ6QUvcnvhzoG88nM395vG8LFrcELx5kQSTiZhP1CupZum4FF8KTZAZcaikti9dUSurtWd36FMa7",
  "key5": "5JUHe2BUWjbUt5jJwxS3LLofWNAcWFmJeHzYggpiLpewvJXnAyD3TaejRGKqEL5sXiC8Vx4sCcSJE22BQJQ6BWWJ",
  "key6": "8RDPDhYhGY37oTCzasdsMqACmpmMKjMrTRWQxf1CMPYj3ksGP56hZLkfrW19jnjseJSEdiK6SoQzBW3nKCybjfh",
  "key7": "2c2nZe9Dv1JN7GyQfW4FbuRna1N4pDuJBAkzQP61PcDfMNRHi8G1QiQ6AAxhRHPatL8V7KYV97gVE8Wo6ko2J8WS",
  "key8": "5rvhjnYMwozunNfSe4r3KSEtWscHBeTJT5JURY4uoMoV3fbJSPrhzPdcW9uhGkRTKue7Q4Moe7osrmQuN3etPAsb",
  "key9": "4KpwA1vTffVcErbEM2oqeTaFXuQhGJaDocQNsY2MiUFuKq8x3Lr6SSSc1smENygGhf5goLaY6mACyMLuNibYYifG",
  "key10": "3h5UtLeRgothrc5USEczcFVxjy5NMEPs3GWEkgNdrUfiaKqQtjSWEfSebnmam36FBkXHsyTnRv1RWYwR78T99NHj",
  "key11": "m6nLkPbXFxifqFrqmXL9dSio55unDNStRhbdTEsBCjPo7w4hPDD2KxPoxWvVwJQraon71eTocYLCjVaSqsj584e",
  "key12": "49BqAzJFxKMAabxhwgG7WSosY1cEpPydJjUKscjChfy4TWQfwdrFp7AKj2MyqgHwYtteWD88ZT6qKzUCx5QDUvNL",
  "key13": "49gRSVJB1qfp3bXcKHxzdSU3jPvL9mSYhfuQabDisiYhUJ9RoyeCdm9YvL1cXaGFVynwDZ2sRZ4aRSGADQ4UyP9t",
  "key14": "48qMhybXKsTYNEDvUEsataVrdQ3THEBu8ixC9p44fY3KaZss9NM1T6Ui7zAdeezbtC4WYMjjB9bWqcdBfXxK5fNY",
  "key15": "3czNGrGJLbnatph2yf9PdmGgSruFij32vZ3BcHnZYdUqNJg4cUAtVDGhEDatgyiJJvELgCphjE3Vh8mWeawhBC9j",
  "key16": "5MArJdD3o8ikebFbRr6VK9dtrq8fmbHHMjEMAFB86tDummWZFiLpfNLnwJpkGhWBmseqjwguNpimGokvBvUkq8WE",
  "key17": "4us3LbdYvmbYGF8daBf3eUzrkpr8WPJD48cC3WVRxjKhDbzsCGGsiT1AcpLZJbJhyqJjbYbqZcSReYRLCw6u4Cuw",
  "key18": "3g3QQAubqbEzks5RC5tNEaoijrBUUbYic3zZiTh9KV1PZqWzEh1wvYqRGX2rssssanJGMsj16ZTR9w6qTVv5qq6L",
  "key19": "3yFKetboVbek8AE8wv9fKwuioBsBjrKt1EZ2dpRh1AvTHd81GRUzFLD7JgNUsRGYoKYYxtNwxbxB1X5hbFyEAVw7",
  "key20": "5gwYGiWpywMLvLsyKAs2wqNp6WzQ7qJmkcXUzAz9W1M5uYgCgkwBkZtzd4qozqJ4FvRfq64hbBFsthSyov4iSDNP",
  "key21": "4KBLrRacwYkTzZeoXkA5zCzC79mCbbeZgtfeRTaHHis4StVWwJzaWfJp96xZnbtFXAFh6oYmkUUfHyskWC4yTC2E",
  "key22": "5mdYWnpdc5nQtLzFK1xzhJkYQvGDr3kFxKatvd78afFAA4DxYChe3LM7eP6zcp8xGjSjppPDTrTrGFtDdcD41bzE",
  "key23": "5K1FJ5QNYhbs1c5XLZVf4hGM5XZzGsbTCmhvsuxHV5sVb3BCaj7xxMsfdzSevDDZ9QYGcgVRemfNDrZJA7Tq2i2Q",
  "key24": "5Hu184encSwFMzA1gBGXn2AJQNcXfuraLWAUv3ZEafXYJqfw1EvjjPxJNpiiJTC3cYfr6FjWLZUJYNiwEskbCBXH",
  "key25": "5UJX6ZSmU9pqPrSg8hpxPEPM6DhWdkPVSbdCA1VWNtBNNidZeKLAhQQwB3axiAps87ikuSSh1EvKLqxJkGQjD2s1",
  "key26": "2fzKFMukEXgA65Jd4qVwN28urhb82c5ARZcLbtpnbpt6NLH2TC3CSMWQzpy7MAhTeXvrv5WFXTdjepgTsDr1PB1S",
  "key27": "5xDrfxdFScZ8Hn99magJTSHghJniXiKe2VrUxahdixoVbJ1DUE3Xrz4vGvKsNDpw3eRVps5nGZEXDP5rthZLrsTM",
  "key28": "4R5gkWky8k9B6EB5G3u3tqG4Jwy7BtAMdUopmpWnzE2hzedf1gLk3Fv3b6X89Cj6ZbRf7fyseEiHLQ9f6DSyy5ZD"
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
