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
    "p9FgbUC1Svu2QF9A8Qy2ztVCp3n1RVQWv6nReRHvzFKN6zA42hVqPPgwN3J6CZ2Wwk2ksirKMgVuHeGa5Ve8f15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nGHZEtGTcEr4mLNNniF4ttWnFWe4EKhQ4KML3cCZvF2dwfSG2yJcfumqekLZmk6WoXrqwTWGXRFUCZUiAueAbe7",
  "key1": "4j63ixL3CQ4N4qvipsDK3U6hogJFCZYLcZjJdzjvYk8KFEQ8Ho9ChwoxB6R4bf885S6EZDhsDFfsRDVQzAqZW5uV",
  "key2": "jscnyBtsV87JrgFJPKgVyDJfahe2d47j7PFYHeGBQWgiskYNsuyuH8iJDtnjpbqksC23VFpTBf3mFeBZiMuxpPY",
  "key3": "4ytfRFc5cgY3Qa23MxtZL6WhcXygscXGPr1uJvX81hz4PctnFzBbeHeEAkzFg581SrPZsyT5T3xgJRQ7fcqJGn7f",
  "key4": "4Jp6bY9pe1RGJLw6c5Ltbd6wyPUvbLN87bS1udfo2W9i6BEvkx7zNz45TLS5KvhgUzWJV9iPTPby4Cpa39NCawJF",
  "key5": "3DQhBcbfH5VCdiiXi1eMctfwC58kgXLmTkrdPBr63E7JDL4hBbTpvJEuzjCf3V32He282EBWYzqcdArQG3gMWR5X",
  "key6": "8k6oHxMAQpakiajViuw7LQyaEUD14bpTYiGPkSVRM8iB1DoBRjjSXY8sCAt5MADvxUskRx7wo8KgHyV78EnexWQ",
  "key7": "4QBrePrZrz5PGkzJpBNMi6BkB2sKFpNcatBYyJW971tT4okL9HD74h641Ci5YzYfov4R7SzyqaYGCL95npM9kR2K",
  "key8": "2k2Dgu6xpPTCXtddZhmfXkeC1mHA5F5HaPyeJZdXib99SwJpnMnAvZbm21FCgEcLnQNHpiK7RcXryQdy7nSu4yGE",
  "key9": "3vU9orSkn6SGyupSr3QmpgRTk66sJLDGuJ1p9uMVY2R25m8u8mWDRUsPFJjXsXaQWURcxxTzQVpeUx4WWfRxfRLS",
  "key10": "2UeayRV5XJnNgiF5AkfTw6ppvoWR758CHwxWJop5D5gXfZK8xxbwuW5cnd4i1xnmzg6mXrrELePTLYzTbhHGvJFU",
  "key11": "3WHHhLfsxSfo1TSUnWuvd61N2AumWKndZkKcwBaECA6QgPxPvupxrB6oVQ3BABt1knqv96ixUdvUt8yw3baMERFN",
  "key12": "3LMoQ4kTMbT5rSfWgfcAwj1SmuTAdzSP2DoPQT1hq9MtuRzv51LUXxogB89kHGycyRuSPBoFsKso1kNEkar26QPH",
  "key13": "4dn2hLRnVDiReYvUKKKx8RBV36toHZvakEGRSE3wTKDGrXF8Ck3mvFGvtAvmoBDanWWBnLdZNcN83fjkB5G24Kz9",
  "key14": "KcFEBpqfR9D1xHnQjnaRy5WeXUqbpqGoJQ9ntQTf6VVvg3Gyy8j2PzPo4dGbMcLUioCKzYz75aRGVGKV4Aryfha",
  "key15": "4bvXTB15NVGb7PkUXFRXPUYs6wpeoN9qvq5zxo9836i2qRnhMPU6DJsdVvRiaUjb493iPaiefpY5DV16WsnvPULV",
  "key16": "3meya3R5ZZt7qeXzjqFYEftpJ8w966U3hokFg2jq1nb2w8ZKsej6Lz9mCa8GS3m63jzvVXw2sdkDoi9r82yx5ox5",
  "key17": "PC4DQSwifpQ1X3Gixpprq25jbFo66fU9xLxhvx1HzpveFtHkhJR8nwdpBxYHa3tzrmDS2JGsjb2LtA4CEoQx6XB",
  "key18": "3HdUzBCS8DfPaCyCaGSMppoxrPUTWZJQszoSdBnvyGfknUNAtwYUpxiSdiPHCzK9Q82cMNFbN81EEZDEAmg4tcxj",
  "key19": "2DAQD4JZafm9KLi9oFua4KqpEKThQE4t5N6i519kvjNwT3STocFgAUqH1qSngbniFnsGxhwyNy7VrVt4iV5XVBhx",
  "key20": "4TCuAJgKegeePc4U4ZxSTXiXXThxMGhnSHsr5EHgvngmqzvT3i3xZy4aBjxSDYkUeCfdh7LK6jJdXAUQxhaAVxEb",
  "key21": "2qz5J7nC28AjQPvH7vxDzSVz2SwUf4BSZSTkoFfDtKvGcqmzANjFH37A4vLDeCgCJThPFgFghR5SS2rbXMWjSZs8",
  "key22": "3Awbd5HwuWbapMUERvpiKWRnNBPWcCWTZtF6bYHZFxcJ25EymVWYvbgLbDJ4SB6zFkVz6mntG8bGXBnb9rNqeuFn",
  "key23": "2dp4Wgu8TRvCFgNHmrNYvPG7iRvEa5EPRKdvd7kybsPPjEm8YK1dmt9TGVxKk9rY8actY8LcVmLYEbdpq19yh846",
  "key24": "2AE8QtfhJkmbN6QiDipTvQCtmJ4b13TBu9sGHyA2RqbVirDagTubfLfLQWuqdK9V9opBEpqh7pZCZwvYjsjRoJ9F",
  "key25": "w1CAG4Qeodtz2L34ovdsw22dWkENSfJLsP3yJfYREoaNwc4jU71ZE7h4L9wSBncDCA9cpMKYSzGkoi3Vq1p2opP",
  "key26": "59ZgKBDycx8EU6vsrmjPMueFmsg79Y1JARcZuVwnM9yjmrwrQM7559hgFNx9GCqw4vea5XZTxHDHA7LzS2Ve4LTx",
  "key27": "3FgNzWnYXmMTuRsk2cW4CvGrnLcWVkHJ4XhSURyyy5BKwtQSk6bsq6FVdt6iCKrYggp2GZhKJJTzPCj42craZWUS",
  "key28": "oF2ELKA7JaXcvb3jFvU68UmB56pFx4hBn6oRc9gR3hLBbmPUmhFM8BrfVDYqvF7QVFgG3XbfHV52RviLZCRx4Yy",
  "key29": "LTNXfev4Un8NWTLJPAALe9fJT2gzrkSmd3Kx1cYQvXvC6RhdnQ5hgppTiVnnW871CJr1vsrDSMGs7aBhpQ8RCym"
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
