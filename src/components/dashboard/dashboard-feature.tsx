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
    "2t7YJz3g7R7Mwu5Wa4jX2d3qTJrQFNm76FXBjbnejHUgSmfeAVHrvwonatdttjedhVnEy4Yvrn6rw64LAkFDyrNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4geDXX29RH3PGN8VEBL4LhR3K1H1LtVssE2W7fRf27UJoP1yNoJCENk5h8qK5NyUu3eK2cR8Gmgru5ynekWCdC2H",
  "key1": "4ZbBGTYQCaY68jm41NeYghRALL1Te2EQfpeVGaGD8UC2ypgsDT8Sw2iGh6MdtD46Xj2F3EAGhQMgHXuRrXjrrc5w",
  "key2": "5Vapvnm2A8vToe5WPcoKua3AECWS9MxiX9r2gPBgtRqZ1YNGBmLFHHhTAxPiXqU5r9PFcbmMBCkCo5PdFCrTg61b",
  "key3": "3uEDPN7PB92fnXyJQuX1XJBKVHCmiocYZAxNWw9Gzm2eYAXwoRQpThqj7SqWW26JpHwHjHoJ4d2VTHxBE99cL6Eb",
  "key4": "2Hky7tNpi827scMZw4ESfSsmiV7y2i56Xm6U2BmEp7zCw9WmkEmf52AZFznzNAVbWKE8JjxTc4WLtJGCnVvCncVE",
  "key5": "5kwQXRMRaXBtixhhhwzRRswC9gLWFHM6zxnZEUymNisN8pUe7nWUddWweGZ6chKh2VULNJYbUT3CVeBE6YU4biJL",
  "key6": "5brvZHWAzhG6iZ5sU3KAJ8TNfkwaXo2c2yueVWd3Xz9vBaBqzZ1ohjVcTBgbxrR54GwZowUFogV3AMT6UJg4j1TX",
  "key7": "dvtrE2bYLaRtRSkXEcfAfEgLhRAkvTepgrygXaZCci1x55CMvxubkkN2sdtT6LjbR7AMgwQxjyprgKBQhbZ1eZG",
  "key8": "3cio5jXryt572eUnieBmiojNXN3ZwDE9cNKeYjgi9jigBiVaBpfMEHv9tSe789FEzN4DiL1U23zzStmPoM2nX8PT",
  "key9": "NRWJaBGT6tMpdUDLKpZbJMMcz1BLWnRcTBGtifRHNM2qtgbvN1ueWpmH5xn34VF78xH4swP8ytuur3vJU1RGfw7",
  "key10": "3Z948VwVUSLMk2JfvW5NaUCZLmqL8rq4rYeeodingKAXXieXFmW9qHdUhsTPJDQ3gQfz7ycLpQsGuMr1Yhz6YEZQ",
  "key11": "5rHHpzdcJKPLZV1AvCtWVxACV4Dvd98ccbXCyvdqfsJd81MfLVgffXWgjggZj8BdnyjkveZ5zE4XPkvCRnDaECBJ",
  "key12": "5WsdXCJwuByJzHgwa4ywdNJGrQvABy84RsoXmD8pVoYTGJypmFEwEGdLneXy6HptzxjW3HCMkrDy5pmHFWRDw7n7",
  "key13": "5jg2TqPxqNeqo5QuDhz4YadMD6nNyUM8EK9chbhTA498boKS3daHMvdjkCRTP1PF96Vg5Ym9SAPpViFRaoWiAuHZ",
  "key14": "2dMTRJENiRaPy9MkmaiKKSTmZN7WWG8twe2ZBucX5YMgLmSN26uHWzhMvf3m5GAv6cKg61omifLnVeFvFu7Gntos",
  "key15": "3dEdkS2B1geVbzxxaXPQuhxfx4ivz9QCqsoWZHMjzmWRrVSzhUGXo7PSWTgeZdQ7uWVK9uAJQuhxQMpMWX4diE8V",
  "key16": "3zXyA2hx7RmqsaZMGaeDf7jm2HY17Bu7ahHCStnx6Lo1UQX1PgWHMcnPFefxKxWrTGcRDZvF6K1vmLKLKqyBcTq",
  "key17": "D2mFdQygvE9KET7nZSsh85r7Eczo11nbd1WLPRU5pisRdfQF9uzn8GCey53o8mky9QrZEpwiBxHHy7JYNzpb2VW",
  "key18": "1aB4FNwz7PYFpSNihE6UGsT4rF1m9SkHi6fhXeDjsJGZkrQ2HqQ7HDMLBbZtiUgWEtMrFDfSNnNSvw8TDM2eNru",
  "key19": "4tyUC2agwNpNMv7KBCbCBLvJTvfMrdFHqtU9JPgXgHTD5rjad9imi2utaPLDgN1GFwbrkpprYkkyFx9Bd1sYZb6i",
  "key20": "u73SzAWJTVfHde5RGU3gdVZo9h4idy2BikTmxdaa6iPQwZ3MWM5MWpVCxcVuMaPv9khujbSwAH7aJgrra5K89ok",
  "key21": "5A7UBhkJaC9mrTGZ6sX2AgQa87LgKhBbvJKkPN6BiA3sgHJDYCEnP4WAdwVUnhH15gVziKj5UV6n6CHFxvhbb6Pc",
  "key22": "NR2xSY39yZTh978k3wHuVPvJbEiyeFF3c8VaeV25j31GZxri1g53peQtvntvDdyKtdBayJ1JgNwuFaMT1J2fLEr",
  "key23": "5ECV21MUYwkKrGzQjgcxCRLBjwCRWkRB6eraDjHhj4afPAgSxut9Di5sa7VNewbrsvWd266z6YkAKFW8V7VKdyfL",
  "key24": "23PFTMjX1JEW1mQhYq5Gx58taGLuoDdbBaZK1FPjC2ynnvX1qCTpyqrGvpwQdtHTrHW2Gqm9CwRQsL3ZMXbNT16s",
  "key25": "2eMJfbmwrU5XMs8vJY9ETiVJFWvnmhxzsLuVD7NN8N5vaWeJJD93uUKjs83hVtancspaxJ86uL5QE5Uf3TjiABwL",
  "key26": "3iC4FAhoj8NBbQPHx3JSZT87A2xsi6qH5vMyvw5hjut8AYSvXYmk6kfRjkoXMhmteCQe1rTRtomiPKR5XgFAtJZh",
  "key27": "42CREWa6riP3nR4kLJ5JkjQ4yUncKYcpGodZcrC43zAJPBkL6mD8h4wX93YgJZyFRVs4MacVpfJCBDyvoq6ZEfx6",
  "key28": "3TATF8Atm4MFuoQC9cWn7d8S5ekT6pmiDy5sRVCEnMJcjSNT5pbx5U4RxRC2sCBVKUXAiqBA5Fdfs7fS14CvVJek",
  "key29": "5vDEANzHS5KndGNejjQiEx6PLxiBMaSA7tspD6QzvBXpru7FxodJ62VvMXZZGsv2PvNNch1aKFWCaYp8hk6NEZ3Z",
  "key30": "4giGJR9Nk8hHMQVzGpc5hS4pxej2XC49y5hAwSTR1bS2gMuCQrfmVZf6FYmsjohkfbqj9J2G3FhNnVACzYxyzBfS",
  "key31": "3vmQN14N1UjSs97eDbwMK6m16JhiD57574JLQTWaYm5rx3KtuZ3xzHbBptYboBeAqqPFv51VNemjWaHkX8goWvcW"
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
