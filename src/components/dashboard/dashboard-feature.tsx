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
    "4jWtxPiqLqYJh2N4QDUtfjyvjqkKzpyhYsmLX4MC9cJn83PiV69PXUh2567NFkCgzbM1X8gGPvs1TDh8dqSxLCsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kv9Q6kbaAdK2jhMDXdaYz6sqwvSnPtxUUV5MkERLUgAAjMdARxHgQ7XABpQat4NvEyCiyefgEjngxmVcKSLgELZ",
  "key1": "2i2r5d7CKFDArY8C2soaZM2StHNduNxwsrcmvHVXqr6T3diDsH2V4F6nLhqPfvZ9SgSvTUdvnCTzadz3ZVo8Hecj",
  "key2": "4aBWfgu5SQcs1dvr6YvCAFTJZyabgGs69dKLAGWbzwCum5jqDrT4oPfSRqEr4o4tvcAyVvoQKWfu3WqZQLNWLyPN",
  "key3": "2fQ1NFaYCHZSrhib1cDQubVj94Csn8crkSsHwRYdwRcLeGNKyKxN4rhRMEtpDkso2ibFRkjS91iYTcg3habWAmw3",
  "key4": "5iPbGpMayuixRfkaCpkee8bUNUhcMhcWMeNW2wo6SX98cwhH9KXQhgpq2oiyqrvd9CL3Q3PkueHEXeZUGUv41yt",
  "key5": "45uhBzsRmguE4y2N4c4kadBJVQzsBHjKK8WRTKU2uxb2EMwRd9Dpr7DJQEBcJ1DpdQVitbjdorVbmWLzpUaNbsQh",
  "key6": "5xLn7ifw2AbmfSwj5vEj51V4nP4LrKkQJxbwviYu6upRuJWwyasEyry6W2Gc2iLa4u6vmpHEdc6XdNhVVQocCXNm",
  "key7": "2aU2YL45XbKxxYgXUckb8vW29XaXV75wvkjS9zbX2pTm45YMvVuHvweMm9tXBCGZSW3NcjiqFkB4Nm1SuQHz7SVv",
  "key8": "yN8zMak7ywB5GpgKeh1V91hTqgyCGVcaDTRrVGyFKdcL82BQ9oxs7JPSe9KE4fpuJK8rzbJnY5cBW2JR2JuqErd",
  "key9": "3jWbFPgPfAnbo38p3S4ko9BPPBL36puuy1ZCZL7ipDhF4kBr7VxqaWLGcXkTRrN8M5Pf5fWh6SaH1GW74ttsJCjP",
  "key10": "4Cks5PdZgEUhDdn5Z76MZbtqEux5WDiAguMZfC1TTZPDaQ6z7TxEh5fqxtorjEwGPkF2tMkeKEbDvoyGimEdYPv8",
  "key11": "5zjaoA9cvTwpgayUk6wFw27HC3QorYfUFzm1cCty3SfwyTqhoJNVyi7SYP5HUaALczmVgqTen6sxn1A5yR86JPeN",
  "key12": "MUNMoWwGSarF9upkD3wHjfCroVgfKYrR7Nrjr8tgdMpNkQTWTm2NpK5HtDpgsrn2wR87jXeQvmnRjKB18ZbiRCz",
  "key13": "4jiNBspMTzbfrPP57ZV6sNjfzjf5sMzHFoDFrUFfcaAeaXoBisdbXyrzu6Vsjk3hYJN9LixfLU9gjnMNZkBTDVrV",
  "key14": "bYMHMN2yHVrwxUnhRHxnb951KzMztj9NPKhGftrBVR578CaUMSqRWSZ6woHXoWBNa7vR5PxLWwpdEDzwnvRQ31d",
  "key15": "4a11AzQzDZycD9834TpFJwc1QPfZWySVdLqoDxFcyzmydXS42XUqZjjB9ZYzWhLYwgiKcQxU5pHhQttGC43JvdZN",
  "key16": "2z73ivTSs7kuNkB77Q4xgjQ4odYHVudiNDVYDCdyoAc5ZWA3GGUBhrQYQU3zfC15oBLfLoksYDgh7wLxFRQYT5nM",
  "key17": "4JAJWzCs4Wzw1Mf4t3GTTE3vK7VX2ZosJJZsC2vwXs3kLPumSLFTftMQHEVzVXiZ8Y1M1kwG53idRZj4sqTvSGJU",
  "key18": "CG7ar9tbZBfU3w5gt3ZBbPrxj8UYS9ziBmrqpLhKX9u4qmcgvfTCsdpbXRL2Knd6ufcRmwSkuwCy6pq76B6A6CG",
  "key19": "2H7o1NMovqneaphLrmToSbXNdqYGEL3AHkx81N5pQr1h2zuchNv1tdXtfvkHba5PpoWJ5ujTPYrscTynwzE2BdVH",
  "key20": "4eFUpxHbMM9TPsTpSr3WsPwhezL2hpppzAAeFhVAXkNdG8VkXdWNQxnkSW26HDiLXyyyEQzkBBtcyYxgfgKd7j2q",
  "key21": "4CRKS5wM5gFEPwjZYRv4HWiAgaxkJFMi2YjYjVJCSWWbrg6jhHXusNbqjNFCvGkP6fFzhCtZya1QuM9mzVTN5ifr",
  "key22": "5MuocL6FfQxC2ESJwDSZHK535XZurGuZ9C4bVD8Bqw3mppSf8bzsRLbKXXGvme41TV5BkbzbdKd6FvPHbm6DnCuL",
  "key23": "LwBturwaDn2w4ZndV8goWQUhsYn8jysdM3uETK57vyoaMPtLTSDTzDmLXhhsG6apMcnptXQrnCaeQibwkeJEZUg",
  "key24": "cvaquw7EUAtVTQMXJhNuq3uouevdHmWDDj2V2TKLVd4G4AxZWDnc9ytquNpRyNMtiJfWnBHVBMGhmyKgJUXtfBD",
  "key25": "5nkwGxoaTQEmtRUQDNDpZ7FDf8R2NjRPQdpi8ZSEAmK4GhCxcdpirVowbtKeE5y1JSVvy2aDndt5W6NMkYrhjdDz",
  "key26": "4bxMYC2z5Y7uJfQ4s73suLiYd9w4KpzhFuYsotYkGbxixMMA1u1oJoUFjAEun7oJHVCdNeBUAiign7WVDENsfRnA",
  "key27": "4i4rjeRhHtTnw84fKpLZnN83dFxwrFF8rrBKvAXo21vWsJ4Z2eSYuvjs3rs7e7wH4GiL1gWwvtNxgrKnoShiUFcm",
  "key28": "3iXnXi86RaTzuxrrctLzWDZmTXJQSo2ais1WX2nzoqbzL6nWeCv8JpV7Uzq68mzxXyAQAeDxBiyd2naF2eQtmsV9",
  "key29": "5yETFW9oKpBAPhbMyAp5awkwqcBZmsS16uY6DSnNgUpYEMVZX1Vc5FR7PxwabXoLmaxXUKtvbHkj8FgWeXZzNoRw",
  "key30": "4b37mBJr65CGgf3vYX6qZyRTciJJFqCg2CddVUUDQm1wjNGoyjbMA9iEfL46DrR7s75N7X3cRHSufshSJJcGbyGf",
  "key31": "77R3bsASgTWqBvpp27hgdFh8755umcM4mCUqtprtnVgAnC6ZbTY9AoSWL6nKE6N9rvnGd1qQzddJF1X8mcpSpFU",
  "key32": "3Y9JfULdmC5Wjco549eFuRYko6gNEj1QijvNYMBXnFDbcYfjC17qjXKye9KZqgRBmKJFBHP62fZKFSDqTkQtL2de"
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
