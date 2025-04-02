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
    "2g4qJ66oT8DgWNvfHHMuSiiHjA9LFw9Xy6cSvwWidswezFhK8nmgVTFuDZao9mNGaENdQJtqwyyaw156cc5fpbNb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rAt3fnmxeG5gJT35oEsAoaU4Yf86EruAdn3624fuHLyzHDSXWcx6M2xykctpMRGw8hNAQmKhxHcsS3TLZqjAzb",
  "key1": "4VLoWXua9YEhV1ncmNbwnFLbwy4iYk3bXVYH7rqWBr5FMnTcBcnSikbLQEkdVgGC5bUSyzt6GyhX2kHYQR514VbJ",
  "key2": "56Wsd3mxe4o4hjDhg6uitg8LBM6CwG6BoYr49pTTVExnq31yBCV2RoTBMAKzCASKbiopftK1NTJu7yw4Kfjf2iyM",
  "key3": "32tQronujP9vCmrc63bmpdNyQc2XqTXzihvx1oqrp82dzgFpnsvqH7UU7DYAuG83Se9WnWNrX7NXDdpHby7Y1jgP",
  "key4": "5pHmc5Ugvi8wruDquXxBR4dC84EN8hDuSWzqGM7neXoLxXF423q1VGgqz8pkFMxzaENYd8CzSjGeK8aCkAkqejQf",
  "key5": "GFomRPd95f1SqTQwwMwS5pub2oPkXHs7TqsX2cdno1Ctkfu9LHYbNJ3U2RweymUViqrntZFWhfZWTDi1KDn52o8",
  "key6": "314CfwghPgRuifq6zMvpiJjjhUcD7FN7S7GfLejDU1Zc4Z3hZSnapt3BMapUPBkKkwnjn5Wkxc8zbCo6wxsyCbqv",
  "key7": "46AyDxtFothyQBmkdpVuy2SLacMkgnBkLFWpftaEfdi9yDtdR9ZpAVTpUPgVXt2uenphyynzXGYPygqgkvhMaosF",
  "key8": "5MqpYQivWaEHtcxNauwzyyqe9BVodjWPuSPYD6cx9cbYzYjaET6k3rBdFCbk8BHkUoZaPvf42r7DGhRZQj94LTHM",
  "key9": "5mBUArnqgTwq9aUDtkNQBTsbvtqR8DCWviDcQK4ifUfpWjYiWB3XfQknxPWfPCuBtiq5XLoo8bkgBGExA696NgCV",
  "key10": "2dDc99fUU9Cxc9JUZnoF56MNE7wjjPDiEAtFBT3bT1poL1J7MMNoeeABR8jS4Q6AH7Fz9VZAzSmre2jkPsYNmr6U",
  "key11": "3qPDGirxQexK4AVXpfXTynDgPQ3Rgpuc8DPMXMVRRc5kW5kHDx8ZhaxGeiNnzYTgLc1ZC12jKn6GPH8rg7inzKb1",
  "key12": "5cq4wg4NM4SjZ8YdRLJoYzshnLwr2LCQLkoGjPuLgPhpaghwzVaiJrti5ByosSfj5eJGgcGxbtYk6vuzCb4FDi3g",
  "key13": "365Gvir1UHx9kTmqZK2PkRtTPjFmcTHsMGKuan7U8L6A2FnibRcbPGLA6zBJxPUqAR6seuKYPKByBMh8Gb1qdqAi",
  "key14": "49bEkvsJLWE6Zc7rMBFFRYt8mf5xPPZLqkFmLuqdDmrPuVUF11PUbGqBKtgLiBJuZ7BTEqxA36TMEmnSYAkvJGMA",
  "key15": "UaHPjWFSsvi6khFpcciNW4yrNcMvZGgS6njy6eFTVz6vFNgwyyMVaS1dtuNaZLyfHx1hWcS593PRx886qbeLuJU",
  "key16": "yvXAcM3ZjsHsZJ1U5BbT7fyjqXo2WpMzHM8GQUHZepaejickGiB2HPhuYTt5VwFBzYZdXJkEvWiqfC8ouUqEGjT",
  "key17": "4qmFmSWjsoRAQBsESL9HAAAjNA2NGS16KSVpbdMt6LmyDU7p5NmWpUohjWhNEHc9sQTeHN5xwcUh8j15Q1v95gZL",
  "key18": "4qBGxjJ4SWzN1e3VqQJmi5omYkocAT8miHjkREBfwUCXxh677d9yCGByVxyij7VZih4rVprq4353s8s41vvtaUo8",
  "key19": "4zBsGUbccxyq2ARCsrD5GTatsdFkPkyhSsh6QTfA1KpoFqxhYLuZ1dbwB7jn9rcT4UzwBdzUqE1xnUUnFugz1uLD",
  "key20": "5dsWGrEmyNv3jJ8Nyws58KKtyTW7yEFs6bu9V8c5veMXXAHQm7VKvV4P2Lbzjx7NwAPRvJ3fb2PhoqerVnmLUNjL",
  "key21": "4C7CfW8c2ALtqGusxAWhWMwWF6pYvG38S2yzNRypCTVrBLYAzFh3NqZycHnGYEhWiwd7m6oBK69n9ZeJndnD5PR5",
  "key22": "3AktSsmkvYU7JFKtAF42rHbzT7sFq2qZfbX9n9ZMM8cvuS12jkM2vhvYmBWdMN38TSRJ8SnWTQKywHQESS6oWb2L",
  "key23": "3UU7Lr6Vp98zJpdg8QkZjHjEEG1nwrdMXJifYgmANqrqyb5UwKYu8xsBBGM7zHM2bJF3t8FnkhUkhS1ExvcjP5EN",
  "key24": "4vBjaJRwrNFwS8MEPV5caYTgxW7wqj9ZEZEFcD25QEuzdUhqaqkXjKjFtXW7epan68DeWeWbbi2b32nuD3Vjx3Co",
  "key25": "3zGR6doibwD8XPvATcA9ALZLmqoyqq3fNPzy9SXmuAxs3mhmbEfit6oyQBgqi8VE6fY4FZigyQS3nywjGNAv5DzK",
  "key26": "5hwMSSct8baB6JXTZd2doTXGzP8fTFxfk4h7fDVRAL3wrAT5pNCFPtzpkUYD8DMxYWni194p5g1MpH3tyU8bvhLq",
  "key27": "24xaVb7RnFYiuyn9dXi2dfMR1jbdmTdAXKTVNkfKdRAafNMcDT7NqUfkoq48sHm6sH3WmdLV23oSdP2wvYgpneVp",
  "key28": "2H73y9XkazUZiVVe8aYhkD5Q2R1Hz1DBfTQGVbR1mk5iVDN3n7ZqY1rDdL5Jf5Vq9pGzHbhXT1ABtAGqThsn6iDs",
  "key29": "E9pNMjraozUNZq5ebzZTRJwf4y9NUC6u5etCyT8Kw3u8WpKwpJutodgwPZeuLBYNW1QVQfC3fCT9moZ8Xu9DXT5",
  "key30": "63inXwdtBMu8xoV3Yax5hiv4W2PUw4fEk89iE9qJeNxWyrXw6W1E8rUZA4QmvJNHJjfcdnhpjWMPkoCZuEF7pgxN",
  "key31": "55c5vYDaJoe72mkLEEpCXsWZN7oWLffRnbMnNbac5G5zJeHg8GN9ATD8NThyBFytevT7XCPb4mjvbAEveCngwQn8",
  "key32": "6tc3sFuASfgzHatQC1estz2kerjudgEix5bzjeiFxtKcntnBvgyd2P33rgUN5F2ccJSvrvpAjBYmTVDYcqv5ZZL",
  "key33": "UUhH7EV4fuMUTmYPwZoimYKh4quKGSgU1fiN1UtHKV4gFN37A3qydZBctsGHr6SHswabF72cTzFZuQUGjrkSwpE",
  "key34": "2gAANXdXcTa7KY2JvGdgerK6n2cm6LsSuxEPrmkHNukGLab5hQHzDgcF4RpsAiJNGD9F4mPkiBDDs76YPXYPYEzb",
  "key35": "652NCVyXtiUcfR7mGCqrdu5u3CKohGjXDCFnPfei9B6Sm6gHUj5H3vLz4tRomy4ATsB4XYjZr5FEygTyxab17iGV",
  "key36": "2TScrycqRx7uXrT4BmQUrcqrs4HZwDTSxHVXJbFVEe3ZGWUTiVXzFTSsAcASLqiWxfy7zgimBeZxsv5bw9VpfAtj",
  "key37": "4Z91Tn19fLwviXLqg87GZ4P7H284QFZ6SsG4VuBbPpMkjMBK6BJPurMy2LRGjjSWNNb2XBTp1H6Yb2G3VT5viNzR",
  "key38": "33Ge9foo9QYnCTHeak4MkGgqoAV6KkkZ7a49DZJVFebQzJRqrd3yS9HrYFTmHq3FTihim4L37G6ziybbSBjXM3xf",
  "key39": "4iD1ugSmVPneWC3sJzssA8BBw4JjefKW4MsJNfwuXzuhqyHA34MpAx6adKkV2hTHh6amxbYNKJRUWaUeabKSt9TG"
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
