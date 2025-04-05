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
    "2U6tPHkhntrtGt3JSmY21usHkn2oJYmTRhmQ27VjQkAMNY3sRQZ6cYM3yUDMcwa1qw1QmF1A77AhZTBFe8h3VpMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pgN9Mw8uDNVvZdpb3xryr1egLciKnNjUChxaH6bqLSk4V6spg1eYRV5AiZwVpbLfCAcGV4sg53PaxAdUHgjKaXq",
  "key1": "5hjskpmMQvJFPyNbFkZbZEqWZ44AGueqmbP9YyNGuvFmWvhUe6B47yqJsneofg72VGNtiAyyQK5LrQsPbDf4VwrK",
  "key2": "4f1M42Wg73GveQPjALztjfa45c2iAqxrAJCjZB7ftCFLAHrTYaDSduCYeGbn3z5tP5D17zpEjXMU1GmGzvwFhv46",
  "key3": "5oMvX2FhomBKWs6yjxB8NZNwV9hLKJvNaTqcsSNukvfD2yMmozCmGxZ83mgh639qr53QzPrcWibEV35L5FdeAeCZ",
  "key4": "rakXzggnCtVmQB47MiW3SQxaKgG49UtkF52DJGoGBMq4UALoRaURiaXiebCr7sqhHWN6hsosBHUDsb19fuWLcnU",
  "key5": "Xq8DMEXnWodD1vZRVmckQd911go5Z28w2P8ctkiyWweTe4SUVRStyYtyEWuzkeMEL5656B1QAqjEzdNjKq8UjyP",
  "key6": "64nFq25tv4jGGuhUZfFzFm4TYF1kurwTsYxVNv8WYcWtZWW8h9uYfA8ArbyxN72ZbK53NLT4k5u4RWLnjeb4R2SP",
  "key7": "4Kdphwc8KZWuDX9dSvNAH7h695jxdV4rCdesc3M9soy5fjzVUNiGRNYVyZgx49Lzug714YMKYoxSv5PW84nYoio9",
  "key8": "2fivJV9D87BYS7iMSbYcKxvsbSpE3pi4DRjchLKoU6HoeLpesJhPzYCxfvMwtaMnh2f4j4KbqYh44gGEfWyydCxz",
  "key9": "5cWUQ2kvr7icGJCcyxevSpcbLA5TvFgQsx5f264GW72aGauPNQMuTYuvWXWspuNF42ezmpeZRnMvjaWMqezUokC6",
  "key10": "5e3mN2JdM1htUzrJhbSQwCjph4FW4wG3uyfYQnPF9sUeHsV8xriMNkJevCYuyj2GPr9RYkyEHe98eeb6eqUXTRCQ",
  "key11": "2MXevWd5fGeiiWE8CZ9AdRcpRmHpL3zXzqpkhZ2TEAZd1hpSe8F3ujHx8EHZ2bi1VYS3NQwdMhFQzC93fAVp8bS",
  "key12": "BW4Ms9VF3LAPiZnTVr5DB3NhgkxYJh2Gk5kW8iN1dwPWdfTCAdrg95ijuVxTCTCHxmeWyAotiHjCsfdo632K2Pk",
  "key13": "4zhkpovuCwoiRDgqH3LRFCN2Zxka4Qb2q4GbcX2E3cv9JYW6h8S7eR8MEkvRnExK1YB7VXeoeYKkZfWoEHgwPmXF",
  "key14": "uDoFwdiKjyveyhCXinyidA9vRZr9ShhwbNWywRmFxTQ6uJxmAb2Dyoyi4C5CytLQR6XzbGnMAR8xci42mNunuKZ",
  "key15": "2uaMmjEhSNoin5CEvz1aBT8qNXh8yFQ69JKz1KVCrz2u8UCuDHauKGP1GVvkEzW9HaMVEofmCHozU9FaAFqyKfof",
  "key16": "2XCRppRaCTgJuZZC7FoRdcB1gNmsJDo8zbuXRLSfdAhoMSFPUjVojzkkSQoekUQZTxXVt1VPBih4BTryGVydZnJE",
  "key17": "2f5iMG9TtngTY2m8fk5tx1hVh4V3sBTDBA2NBvaw7FP6BWwVrSBREPteHzMsB3MFZwW2PpzAzHYLo9mDduNSUpuV",
  "key18": "5q824qhFXwgA51HoWW6Lp1i1YUTsSrcu6H1yJ8Yeh6zdGgRVtvR3JgDBCuYZqqVqPXHyhbp1pvqcNhfALWb93YoZ",
  "key19": "4vFKNJxbxiArq6v96Gk6VkVtdF4BM4dmJUku2qcPH8HpbhsPS4GBufEu5mvHceUGiFPitXUGkeA2AmKwBqnqDaG5",
  "key20": "5bAtW5Vt4Dbr5pcmuuLEwXZkaUADLYcK87mtTRcVgzKqNKqZMYPa3H1zFEGNXYxEjvt75QiVCg7qXKBnyezuYr5B",
  "key21": "ogAaSdJygSz1W7s87Q8NhSkMNCZC9GLrF57BXveXYkavLvALY3zSufNT9edYdzbuEqkD5CBFfRtkzsRb8pv7bHx",
  "key22": "4jZqYYyqrLGVMeguewQF8uSx7vbViDHe5bFqVn3KfUJw1Vypcd4oL8TMW9BFH6hDsS4YExj9VANh7nRYScNmQUfK",
  "key23": "58orVpk9FLhifJ8dKxnCoETHqiXsSq9a2UTuv5ZnXKG1pLQmtKRaNosaDnQVEGxTbkaiFvRCHZP8qmDpMUApYBH",
  "key24": "36uRwCBQsoKzG6FPcB9oMUSxTiGT92R72FfXeJYac7BB6g6g8DmSH1ucGV1sXY28A6S92mEtSB8wt5A92XcBMDSp",
  "key25": "4CRd1EYv4JLJfV6VXKtVtA24xdL8V2Q6KRRepRUYYuvYNHiYC7N6FYaEBkMt9xSchLcKwppFhzGdVXq98vwuGPhB",
  "key26": "5qdpRQ1ierXSTwf5VDaTduH2MmJf7MNt2B6xHnRPCYs8uMA9V1stss5x7zLcvtUHrConz7VGfUM1tK4AcMFczTnj",
  "key27": "fYedVhN7dSaCdZcYpudhWSrX73mMACweTZP7Ngkr6NJmaGtBSK8PMFegkgCUY3FtSjaPUsNBbBcNpwPRKAkkjKb"
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
