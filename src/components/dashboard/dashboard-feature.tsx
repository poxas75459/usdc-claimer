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
    "R6561e3ns8YTkmMifSz5AWhEXGeq7MkX1dNqMHujj6CnydFFKrQXtMMjVgUN3njso4mjfAPN3N5KLXNEy1VPfuS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663mChtoesJaHbEeiq9cr6URcCGZLhxmzQr4kaXEhC6we1SDFNfy3meTDVKYqzrbZ1tCFber6BeCLnEwvuGMZPgb",
  "key1": "4jfBzys1qtm7sywH4VMEb9W8MRPqS7sGDU9LDnEwtTb2vk7EZaG6jigt3kCpJwAh4QdiGMMU9gNzRsmxrtzJVMyG",
  "key2": "PzMpQa4gmK7ajjWH4Ato7CecpGz4j6ixjAip7hGTgnT6yS2TxRAmryXSPFcyJRtWFxUnYFynRgtGRNHwdzmRjBi",
  "key3": "5KB5RDoghHtPkTscdFmJ42T6XLrDMDjcn6bJGBTU1KH5hFi64LMcgXEgzL1QmprZFqftFBQzK19kSgzvLvHKWVWE",
  "key4": "4L3KeiJv4cmmJ4JYUUDBiDeyshajjHnRa9G1jshmjjQZk4rxyUq6umWDz3SpNvUzwp8FDfwiNatcsoByt8h8vPcE",
  "key5": "24Y9Km62tyuZ8hiX1haq3hHTskKSfkXAQcYS2NwP5EgurssmzCk8AgayH9JBUYFcWcXfjrAkA4kwmrjG4cyBR6gz",
  "key6": "suqsai5g8vALTDc6ndbG8suRthSwYt7vx2RfvncCy41YdBLzuG7yWgHCVooXoMTEQnqTABwCPyzPG7m1yTkyJNn",
  "key7": "4KUaZcrjaYhsXHKroeUXYpsygNEqa37MUNfHECAMpHCP5WTLaTpTumnSDAoWZswi72sRfuZvpCvUrxRFLMwuS9ZU",
  "key8": "H3Z1jgKCkAWKN6M72JJyeXW3GQ4mwuSGe94Bga1VESWzHyEZ7Wz2bP2XNFm234bZgCjcZcv7RZs5mb1rKrK5MTX",
  "key9": "3zpE5oNMsV4akYu6ydsoY2rcTAoh11MHx1yZ8MtjJ4pGCbvjsR1PbGUVgUFYmvntS2Ex4x8mN5cqNsx7c9zPwogD",
  "key10": "4tZAg5zxp3BFEKikHafjF3VxsEK9cvPFDYKi48dVULrA1RSUPDJ3zu5YnkK7V5xNJ1e8GnVbG29TqWJEwx8Zp29z",
  "key11": "4KEaTVs6LJ1vB26dNtxeatWiAxBMV2mosrRNh8teguomU3B8TKTAy8w3YzTKMEvJKk4CLj5oagSv8umhH9Ge2iUL",
  "key12": "5pEfUUZJECnrzWDjBcnSUh83EhpkhXxDQsT6ntSditbSwwgKaioy3nY85n9Jn12xsmJVoFhVHZ4w2JUFThQzUX9X",
  "key13": "3DysgjfmYhU1yTcRTs4envrvUUjN3gdoQnbzNmKYbMop8wW4hrgJrWykNBhAEHdfoxJNxKMnVeUoYBuGC7Uhz6UQ",
  "key14": "35G9k8UKcpne46kXw6SM3owS88xLkwAdcRsdLGEFF9kroTWa1HzdtHwPcqKDcdAhhfwWMQ1YXqR8xitUPbg4ScXh",
  "key15": "5YR6m661qmo1PG3hnxcS5PLn2khaQixkbygnBhwaTm2uXLDCM629MpXgTWf89r8i1gckGQ714cyHSVLedSc6w9PL",
  "key16": "5ESgMQVtQFUnPv2NjVNzwCP1P6xLj85VZxH95UUp97HXJmLXbugyRrF4EVAyVtCL3u2NBjpeMNwTiJ8dBHQXmsEF",
  "key17": "2mbJXNjsY5BQwyxEnAzZeZ5dQqgCkt2QWbbn8LfmuQzJvpqR4yhtvaUtHVpLNDJFX1rrUbqZTdRYmzG9QZVY4cdv",
  "key18": "5xVAtcsowgq49Y7DGcvtX2HrAgNATmC4AwPV8tCAqwzzTosTqNUEdynvgtWbkxZMhDBJ8HXRBi9iz4DW9w6hbx8u",
  "key19": "ZTEYMDZyxbRaC7NGWjfdnL2b5T2qcD1bVvKcdA9UUDWV1YmByg6UXx6FTrHz1KstJ8gFaR7CWjKaySsYJVXD86P",
  "key20": "3Pb7AfNGJfGzQzryVmMdSsoDAN8QY1XoCCqAY1JHyyr5UZVCvgwb8DsNSzMuPnN52Mz7oUUu6XCzBRiPAbMXf9Wn",
  "key21": "2Ep5HRPhUhxQdMfK4RzR4y4LemqrWsCktFXScFhm5XuJd7LMCHp8uKyrgvgWNX86QS918TTxSTbYGGg6kjFZjXmn",
  "key22": "4BT56suVch3bSsK4uj1GD7R3JfukAfyDfH5uqSt4jxPiqTHRwMEKsVAa3uE21VfwMr9YcJiuZ8odGw8Leu84KHoJ",
  "key23": "2PQA9m2GBesMjuKGr9jJLyLkeaJVZ3bsopyVLnZM1D4tAQo4jiiWpW2SD73NXAZJstsdr3o6cGtCCn9dew6eoAaJ",
  "key24": "4trGCWjTpsuVbEvg1wje9nYyVHcPHGqXtJep3FqDsb3kuVpNihKVarQq5Mrji7kNucUKiKy5tyqkjaWGGtDbxBfv",
  "key25": "4xfL8vVgfVaJrtCPD15B4f531UM8LLNqBNyscKUu2vdwoa7nXoGZPNgdkKw7tMm17Gkwtb9bk1Lz5JDB5KLHtiAF",
  "key26": "61QpY1u8aNbctPpP2pRpuoSiK7vgsssoyWJW97jdEzdRNh6W6zqA9N3ndJYqVC2cUTxk6xLymqzZpBdFHf8ov3mi",
  "key27": "2gnkgkFmET3euBnJFbJ6wNhrwAdwFMJ74Qgz1woA3LX5J2sUTCSFjmk9gx4Z5gfLde9f1FhDAhrJemmtofcyCixN",
  "key28": "2PUh9BzGNBKphmteZ59MDDa19pvNQQfE3P3SESyhZagoasqCuurM8J9f97hg5qsciPYTDhYsnhP1HW2AW1Vh3fre",
  "key29": "ePSH9HGE7A4tMFn8Nc8526cvmceX8bsKNMTk7qcCQ1fuMdmv8fGLuaX7KFRwHkhVcU4eUuVjYwCp9mYpBRjbdCB",
  "key30": "QLyUzV4WS7DYh8pnt2wEWTXXnNvxPjhgEJwU52YhDrbBVwJcib8LRaC1nvT7opSsbRnJydnHrPzCL3Rg9tmaPXD",
  "key31": "VcNi7dFCb3x3gdqxRW3PkX1WjiDBhjvUp882Vv2MeGr2JCDB5g5B4chcmpxmFWY8pnbatT8wiHYF3HYGAwnZ1Mg",
  "key32": "5rYdtxbtwhQvzkUpXoYSqvjtX2v9Rjkoj84sWtQQLVrwHzq8ZNYqNv5EqQZouSnxJCwyJsKw7ccBgrdeeYD2ap27",
  "key33": "2qZNx2AgafqanGby8ypJbTTeR9H1BirCbdmjxFvNWtv7S8XiZYnuNMiaGTfwn8LDgbJKeyJtWa5re1b2eNu8SDR5",
  "key34": "453j78i7kaUgemvdn9EakochCbyBrUTamqCC5LUonpALVeEG3LTgpaYxkSex6Xfv5X9BUQoyAZKPeqFoecLJgXT8",
  "key35": "3qtpUpSNRtNfpSKhC5vqjeRXGUHqFVkpAVaDrRSUYxfqtUHW9Fb38j9QaCANGZqK8XvGZWrFMD5w9vqQoXxdfRFf",
  "key36": "5cmVaPC7XoH4G6pq1RmJumDjsSqXhksScqZfeypstZwQzMePBxcsuSpRp2bgyY4bTKfAvwrU2xuZspG8pkMWFxZ4",
  "key37": "5ymhzByE1pioMM6mMbubzGXMwXnS9fVDdWYaP4D1ywSvubeQRsE1eVtp59Emrv9qtm6wmhWt92WCS3MvhzpQiBEh",
  "key38": "4Wn4aS4NXBxkR8EzW7jYY7ra22fxLfP4g2DjAQPNdhDMvonmi3cGGt2ZwRYKJyr7ThSz9U9thBJepnRZXmUTXoY7",
  "key39": "31jVuvzB9GiDMkULFWBoxLXbSuPspV7osbQhqhXgBqqdSKMMjHrsvExEsjkTED6bduXC7jDtK6ffZrUPsh7XoTxA",
  "key40": "4kDhuWLUudgXgCTnzwsgRF5kWWy167xZBmnWYSbdFfunEfCJCtMCx1mm5r1D4r6H8YdCgPAWoRLXV3DJWLEeoGAx",
  "key41": "2rY9D9HWNMSuVNT2iRLekX4nU8m5AiTw8peGftuGtXaZLAVdqFQHauo8zBkNfUg7MR51HP89d84kjYsNHjba1F21"
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
