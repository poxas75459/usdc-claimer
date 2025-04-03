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
    "2jmMkSyWGKCST7jZ1gyhQK3txzzzrzscGZoWrdkmYMBuFAxY22jXRY4DzwjrSahFsC2PZkdbMD2EPhkKKqRy4td1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57p4n1s3pei6QqvXyjPYrAoK7bMD8fQALNuwXnssUgpCFPc31DD8yj93HzJyuz9d4vFYeaA54BEAQ4wtUdQ373Bk",
  "key1": "5CpstF3b1ZgsDjNB5zXXjRLe2bA7VYZ8QSmzfm45avAj3RwucC7aarhg3LF5M129YCbGwQUSno7XFNgj3HqgPabX",
  "key2": "4wcCBsFaBinyB6wNkC6y28b5LstQ3rHYagXmJ6E3UV846dA875fi9uiiC1xrBZV5oMKwb8gVVvexLiwxr2e4QN3y",
  "key3": "TxFxKtky7QhKpyymJSnxBSu3soThoUBapBjDniytqJXALN8ZZLVLrqufaPQqPCfpEpZ5Y6QmHGsCaw76bb1Cn2R",
  "key4": "iizCWgEtZAnGbH1UYxr9dPJkhWiN5XojQkmUHyHVzWeXopCrTXUNSPu2yAiB4zYPNSdqGAPNdH4HTNriGLiqaMy",
  "key5": "4yrB2HM9V7XAthsyAaXNQ987nfiG7nnQwpCQX38YLjUhNkZXa6TocHjmnYY2SqrpamkusBoGqgtH4EjoRemi95gx",
  "key6": "2bkejKBy1hCKAmuqYRqU2TCh7TZbYW6kwGiuijwtoMrwhfkKkFoDVaj3CFuiBmbxnXQ3E8CrZNmLEHvm1M8R1LVH",
  "key7": "4SqyXej5cfbDb7iA8Pytw1g1kxfjSC4BwRjGaaTErmrLHeukF3kAKdXgjKhnTQ2RBRmkZuKisoVNW3EuDtQQWnqi",
  "key8": "2TSvCS8uQsXadZnHV49JPAJyZnc25eyMqtVEaD67cTBnMysVtQuEs86qUigDNAZUpwAeHFbEZEFms6esErjdViz1",
  "key9": "4w9qEAXmu7i76oFpTLpxRVQPQZB5pE5egNZYdcgZ4vfNHQxdSpZEiLGQ1XTb2ZFnQVfFLhs3jmc5FpgGxRJf7Cgk",
  "key10": "4wMNnGurmb4bxj6YaUkcS3D8qhSYTtwTXuAapcDxzU8hBWD5mxVFoy5XW1gy2cvFQ7ndbNRcmqRp1VqQbLTJAPhK",
  "key11": "4Hce3pnRYAVDn9RAVvadrcKLmA1au6yjjdrNXkak7DoqKpuH9ceijx5yXWqSfYZ22zA4Zsn3G4ZadExMbvLBJrpf",
  "key12": "zYL9YnsFRUJQZCaGYst8LGqUtbJue7Q6hHg4YnRvwc4wiZjH7qTdaSbUuc7YLNUwp19WJV7VWh62XLsDA6BoRtZ",
  "key13": "3ZkRNfqZaJjqNpS7WRykaB8DzAxEAZ98S8cn8EmMbUPWWRYFUR31wta5mKuqBhH5k3ajtLxoxQKmNakSKMcnVYtN",
  "key14": "5s9MCGvyNGvu46opPAcNVuBxWM618nwz4yjHt5GZQuVVrAyJZXfAwBXQKc4Y1eahUdvbkqZHnTWzWYTAZWUoAgcT",
  "key15": "3CriPx35RWD9LZB74Y6cVTsBZ22128FyzDqSxMEFD8x33QwtBaniCdzXhRfdNBKAes3ommwjoxYgRestoC8hy5rn",
  "key16": "56KAX4faZWQ92vDpjw4jfYX8gYVpANqSBAuuwPSJm3FpBsHo2cR4gYMrpmbBBarRncCsufQP99PoDedmWn121T3J",
  "key17": "4SE28TEwxj5LiKgSb6Lgozm1sYsbB4V8g6adeZUVtYgytHJCexAGvF3nB8KoRGypxj9yzBx6d1Ymn5WCvLxU6tWW",
  "key18": "3H1c8XnDHJYr6e84NnNxHVvK9TmU63swYGkfS9UDQnhEVkMZUAYDccs2AHkgUatCbiwLVmRFZoQnupg9sUasV6Ui",
  "key19": "2hG92B7qBthoSmv4PVkbM8v3n7mRnpnTqyjYzwpSPRwk3KiLZBKsMaa4Ai18uafiqspGrhs2EYfkw9LExaHk6P72",
  "key20": "4ai8vSQVT4Neeh5L8zAHC1FhKmEd7xVN5ZBDyp4KAQEwNaXURpDFcpiCae6qcuz9sBu7W8CEexqPwgXG42JqcXsj",
  "key21": "4qbo7SGfLka6ghajC3epzDWJLjvnGf9CYaRNEY81Lk5jJAdFu5yHoCGwJUcC1EWdjc3uBnRcZMnzTQrVebwXqy5o",
  "key22": "3CRJMTSFy6ccjGQHfKTp6vmYTAn1G8Ten2nzicx689sh4AJi3sjGX9TuHaZbVWZbFSLD77rFEq9EpbRVXZdTsY2q",
  "key23": "24FC9ntohZQFv8NtZv9q35vtFS3aAQ6D7XJ5yiAioCLoauQMzNV8bjNfS2GeibgQWvonM7ZSyKz9c6qBY3JfKnrT",
  "key24": "4q79F7KEEzKPyEXydWf1EreUhJ6EkixaMrnmPASJ1ZEMt1xEYzYb5nSSFd4uiSt2yrCR4Lubs68Bc2Svxh3SvSes",
  "key25": "bQpuvTHbEtXSujJdfTJL1ps3U8uZ2T19opAPiDNGzYQRTh2P6h9VVoM8kWnBkeQymAyD7T4YWuWzdACrBcRdHnG",
  "key26": "Yid3vSmv46Bfua87WLA3ctqdHxqCzSHiA3NgFG3N4QHzdQx53cgRr7dpndiEwL2vWEHvRQAtoexez6FCYJUMZPZ",
  "key27": "5e8g7mXhXttwZ5rwT3bg3joXy4jTD9dCY16K7eJDG8HUCqznurxaNRhvRoSuELUwSWWDwK4v3Nbrr2xDSHyBEfCq",
  "key28": "2P6qyAZ1eEk3u4sKFgpnkXh58E7omjMsqag7ak7obo4n4pN6WdAJcFLzD2LJ7f1G3hHZqvNY1pvpbF3vsvWw5qJv",
  "key29": "P8BdbopykiQPgLCieEztcZx7nxJx5Lpnu7Cu4EyTPK3uo16Eb7usXvCrRuWZk3qrHAbPSDqdjcviCg8Pr5owhZM",
  "key30": "2xnTqySik8RkKVhusXZx5XFD36JVmmUUZHvsT2ZEDZuLHmy8hmqhCZFrNsyZV5osHsy5BqmEDYpakgemP3CgorUY",
  "key31": "2rWkrHobyG9Sv2mhu6v92VPixf2RKRnjRSN6y5My44orEHUjJ1gLAb69Gk8tCVUcvkNmo3bADWed9gzSLDAU38PF",
  "key32": "htoFZMe43Y87PuvXiqMsXHHJ7rVyqmMRmxFenybKXqQzpE2McageLeGCZRG5RbmMGTgp4j7PX2h4fPHq7qDpAdr",
  "key33": "3Gxv8Jjzk74WpbRWBzJK1gCBtFQjyhVDPYa2ppuYbRTjTv3ZXYSk6nArx7crRobk1oyrHvWN5X57q1E3UvEvWUvx",
  "key34": "39Nm9dWvcYb1jMhWyEjHRkq2yd8eEkzzCqWE3D1h3GawBTd8xCc6LcoW3XPG8SKKhwTKRkThYPbPn81biKDkJkyf",
  "key35": "5HXzsupRkPUrtxeWYkkzawGV8oqh4EPpgJSvwY6ReoAzxeCvHNde5TbxofBhXbzZUorGzrsnWjxSuCXBfgFVqJiW",
  "key36": "5zSejxK4qK2WBLKD4s13F6zTJnRZFZTQ6TJPLz761wNBwZ6bKeMmHGDVadNnTZtVFGp4gU9Euw9bXmxnhFsCxtYv",
  "key37": "2C8cHiZd1xWqP3Vz41G1dK1QuVsxSuK1Pu3AF1tdLoMjzvtSAZbZixREgKWYLD5pByKdEhLsMygCCv6SLutUz6aE",
  "key38": "52fBXB2PdysiZFLiPB9VovLVyhfFvtUrTuVyUyAzNYHjgwQ2us1ezFSfjhCJn9NNnGJFPJAhMHCN9zf86Dp2Rqi9",
  "key39": "3rgbKs6YQsRQM9qeeJxoMWWwa5zUym6sGcrCCp3Zgi3ZSJ53poXtbRguB449xYFB5dxTkGyyW6LFNsNeb3euioso",
  "key40": "55YABCTn5iWdRznf13xcB2PoxqqKADpzefzqkRA1TZj4VoqvnzUceQktY3BdEzDRvxh8NiP3DFMcZGys3nYh17Hj",
  "key41": "5oyAaoFxbgLevq9k6Bgito5ua955UZr2e8aYc9MpaowRj3Z5w4A1ReBA6WtsqT3XdAJh9vYmpZng5sAtRE4wSoqF",
  "key42": "5VUayW2D72BJs9hRwxqpKQBZ4TrdFpmu7KhQqECrNKPDA5t4WqLvumhqv73mtG6zVywaiJBpnPsGVpvoesBm5NHP"
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
