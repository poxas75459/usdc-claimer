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
    "4Rdf5QhZfFjtZjxdEYuw6QmhFNvLxxgaF8xno3vGPSz9dFSCkXVxqfqPixe9kAk5bphDwFSCLqZJ5M2QMchRLK52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9LnjQHgCQjRR9K27joW99aeGcLucaDDdqety5sWKmfytqkv6U1MqLE37B6naF1vFYQLKsUzG9vtNdfK2FGizVc",
  "key1": "5g4nXbxW2ze7uooYDzFaBVTs1FqrXyH9WTZvz9bwxLE3V24pajf8GKAjWifsPJ39Dnjk8CzvJsS2jvxCC8B1ySV2",
  "key2": "5ziQ4ZL33tNQZdxVtpdhuN6m5n4ogZgr29Ajd7WXzRx4wVKFL5n15ggF1fqTy6fzAw4Ah56RFajQ4NKZX5dndcfD",
  "key3": "2RPYu5pKXtXtvEN8yFTcaQUemC9RoGQPS6FFDzfBUo3LFpC49GX5zJr3e98LMXzHo4E5AfhpmyHJ4SVAWrFPTLnT",
  "key4": "5z4JP3L4SJYyS4eMeasRUSGPQuLj9pd5VMdnq3sT7YWhv9Fhe7toRP1fzbCJ3czhdKqye7irnJEpcwrUDPaZkCzA",
  "key5": "2MHVd6GjnJZEysY5ofLk7WZBKaWcVqAgRFcAbYgf5g8sSEv8BQoNUUBpveX6sajYApjHur4EkoXKd37r2ikuDqPs",
  "key6": "5Lk2G9vQzyPm7au51qyAnuxfqTC38KKjjrUVKeBaimYpSpnG5SkwBy49fuEx5tG4NRxUB4PV7VWbRSpGiGArm3BH",
  "key7": "GmVcmBefs9faWSy57vNU9PAviyatJGZaWF6iJmjcdkMPg7bATFP65FkJPyaEXYsj5kdnVTvgYcmNh7HXv2Vbywc",
  "key8": "662vGW2MAqFozy5QSReYkKcNtAwXMzywRcSUEqmXzxjDfHQKT8brrK5zFaxrJMRtYBMSbcBQovJEUqjXXawxu19Z",
  "key9": "3Z6cEcCBKKC3rhuEdNpQ4UTCYMhvo5dHrXMShiPjmBgYMvJFXjdmkwXLB5ZhrcxZDT9qrSUX1adUh84KYjH5mdfg",
  "key10": "3NsRHjHXwuMmHYCDkeGjEZhKKnwc49kKyahrDEYB38262Fi6adW3MCUUJNEFxdGNKAh4ENEzWbR3wspFQxGHPPp3",
  "key11": "3uE3W4Fww8fP5KyVELZSbCS5KbuTMNkd3vV6tD4XCMErwvMn2bd1tkyZ39rP9pyuR1xjmL2U2C8ZRi6YCuxChMQj",
  "key12": "RNAkBao9CPHSUbUbrkozhY5peji8b1xtmMW1sb5irNPcbdq1u4uk4xLQR2yddTXqfMmYGQPBdMXGaS7MZGXfU9h",
  "key13": "2BU9HF9T3mNK47hUMF48ucw9h8LpSWUEZXpf1N8SMoiXVrMdVS8ZkREnCAdZ3WtYne9bEs4gifHgsi2RYYQ7QXLv",
  "key14": "2yrtR3LRFShD1swHZGU4h84Guqf1XZa2CppdsibsKgeY9jFLuiF8w426TRJmAoLPmfhHKz42Cz1hG1mVUmWF3i2y",
  "key15": "WMzZs77qteJNEHzuCyGJJDFP3n3oRbPHJzTXJzy8jKb4pDT5PrwgKwT45pCL9GVXTnGRfzqCZ4eoXz6MgE3psx1",
  "key16": "AhcLCYEcYe3fd3EAsLfE5ajSW3Tsdz9ypnGUXQjYY3LovRHGrKFuYamgYbfDVPEkGeoTXfsEFzjBvQEdzEFpAB7",
  "key17": "646RuDMu5AS1xHSd76w9cHeT7y5mF31ecjQw7GqB1ByMS9bjqqxAoZuHJv3gEc5UbMWSGP4bJiGqK1PubBE3emW7",
  "key18": "ESsAhVACX4Wx1zxLjKFZtTcBiop2Y92pQ84DqiD5ivbshrQa8bKkYz8SEqtS3K844Uk8Y6h7h7S7rswH1fiE4tY",
  "key19": "V84ideXn1ov7vnv1kt5qK9LD5s1tJtyo8sYQUzi3LM4is3toKMMHx7CA2Y1vv4wEy89P4QpKpEGrMdaa7Q93E3a",
  "key20": "5cu8rRB7rvxG4D9MHzTrbpSDCrT9LKndRwTmmKe1GA8rukARMEYGnFGHEUVxqX83PAegz8c2g79YoqC5qZDc82jx",
  "key21": "5XMC86Z2q7rVDjgZdeGjduPMk9NjYWYVT4KX8TP4BWNjT8LhHAaNGf6Zb6BPzDTorCLozBpoRmnW4vvb1ogoXVqB",
  "key22": "85QKMpVvFu5SGmabFyzAM1zTb5LNaXXRffkTk5HdnTeDvNNHN4vMVxkSQWpVm7PnG4v2eFbK2o1HZHysonG67D5",
  "key23": "2T2rchk5cQxnm4QSqjtTxoBmS4p8cFZjGGrVv3TPnNgY4XdJEmcD6FtuhvvHEFe54KqLVCoY8NHD9pjoxtUVUkqg",
  "key24": "4zATf5GPjk8CdZDwz35QBoN51WTVGFbeoiFmnxpenueUjzWcxe2Xv2eBDdKsdzvzeHPX5AM9uyv1dMrMAoUJd4SL",
  "key25": "4pWzgcYXMEDvg9Lx8qYeqngZxQ9MNuFLoujXGwaByfN7SoWZw85P4SNdrmq3SbWVaehJd9CSB9Z6rHbAHnQkeMAy",
  "key26": "2NQgota47DYC8GhjPsF1Kr9cemo2EEEfZaTWtmV3rLFbsQXtTMzENT7mXCc2qBHvR7ifGQdhHJZJ8mJzQb7DBA31",
  "key27": "2NjawXKYaRHDYT6qLbhYuTn2EkDaE7TqmpKjWLBbhFkfr7GgecWNwqdqbrJymcuysnKnekEqK7DKdACkRuQae71r",
  "key28": "5DFqwu9zc6MZc2hG7Et6E3WgdsT7Q9E8GCqJtuNnrLSUdiAKzV5hPnx5TxkJhf64LYyWpxQjvTiUbMZStvKbdE1L",
  "key29": "mh64rAUUm1FK33Udn9M9mJEiHHVtP1Ri11xTGi9u4bwEJhh5Hf7yoW1noJNCgJt7pyGgwpD4MnmVrh4gAZe1wwz",
  "key30": "3BPSYWCHTm3exjsraikm3yWNWqXnDdtdYJN2B5EUMq9XBe2FkSmxNUf2fWgaYoFefZT4ySiZVHU2g28fcaia3ydV",
  "key31": "cqw2ZSvmHjrnLKwRktBfHMzFfUmWQ1JbkxZv3B33AU3FSrzBmz6pZdVTxwdBDsC1Ux6cCxYvNJcRET5yjHcU5yN",
  "key32": "4HhAsGrRn5k7wmVcU3UPk2w9xQifHD7H1SAk7YrCC4zT57hCmaa3LTkS4NEfVwDAt5Xu3Hcbd2FWVVa6p8pDWVLq",
  "key33": "4e7SHaLahtm87SvoeYwiDovLZfVZ423xRgcgtbZaWxV4xxLEGXqA3YbLRi4NdBG952XFj6TjSQ2zyc6Lg2RFtmWh",
  "key34": "28W3npe3vhcGskJQgngTtQ3uGxEU9WBjDpt34VgGw6up3DfaWMz1wdc1N7guEfkgEbXwxv9Zn1K7Q9iikJDunUUK",
  "key35": "BdiVbX3v58UvTkEg2RMd4ZtMq52n2YG9HXNy4XFzHJishhDC4bkFgNyGJwqPisvLmTeYUqjq1zhoz9Nwiw758TS",
  "key36": "fELosRG62bWrGuu3EkfYuAmsGUeeJBRRRY8yNDryPprURkSPdADba46AcDBmuep6rdcczdYmkLp1KzFGwfmQh2e",
  "key37": "2V6PwnS4AZXvnNFjZ8E4JyfHXs9EvYhpZhgJnsSgZw9LF8jbS3o9QwuAeeSKNcfQviFVRfL5WBtLBvpKVA7K66Sr"
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
