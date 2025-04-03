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
    "b9eTHeBQdh3NFXAXBLkjk6a2GovPLPZLfFMSyUDnHdkpnpkn5XtiSWDvjqVYUsTE2LhfoKeKWSEfrdPGCEvo2Y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NrjdorsZbLxCcp49d1sq1M12t8VeydiBRVD47dtYtSTQggrZtBTeNj65ZAijrxzE5tr5wAposuswzkDKqp98qSm",
  "key1": "3cpFKH7XTHuVJLAx65xQhVucqu24MMPKBxQ1GtMjoofanEASCkfqF4R1ey8NmpGJBbNdoE5bkKVpob5ucVLGbzy5",
  "key2": "2DQmW1PHSqU13oeFgorEbbnrUzHkPBWTFpGDpvqivAgvFAFDYiGRqbJ3BAmFSHeSr5SWMsH7RFLiW1ZQx9nq2jn2",
  "key3": "4SpZL4JEBz3WxtRTcpe8kWsja1FaLzEJk6snK7FrLEZSvkiRZ1K77dUhn5eaFiYpJ57sfqp6DYc4J8WRFNi6MJ9K",
  "key4": "5NWeguCuePctgzHveamduFAnwz7KAXGXG9vGfSYieSAJg42Px6X9i8HqRC2R6Tf9gojwc5V3JLgxeSMjPkM2mrTm",
  "key5": "2Zqnowem3MN1BzfS2cRxBbHRPoHthrchZLVRgyne31yN1un1etci2FPXZys4LVYHBYii3x38nhFUKFL6SgBf6gNg",
  "key6": "5SAWREp4D3VchdMAwFnabCNBJQSgDwFnXSknzXGeSpJpzgAYG3824NwBCDHeZikAGzTMruioHE4xCGaagS5FMdur",
  "key7": "2cy1bEJfH9qxfJiYCe74QC5WdXcCHcdfxTJLv1d1r4KbNwH5D1PHq8dgyqeB7Dm3BaiAHTcdjgRyxdA5N7RBhHSh",
  "key8": "4RCjxLNExqd6pozaQmhYhQDGhcse716t6vASry6aWUaoxx8a3Eo4gHcPmMkD86rt1yXPKFRMDK5tnZhzBFF4ExAS",
  "key9": "2WNthY7T94pd5Acm8BxJ4XXXWDkoMhCuwceHqyMRs8rzfhd2TQZPyiZepWjLGXh3QwuJgEipgxTwcXJu98b7irvW",
  "key10": "52eKNWWjuNoKGiEvfHLD7EheR8CoRPrZFAdqyYDsmHChx2SBUyF341tCkpfv9rSFuDzz4KZy9DzxnS8wwqgF3mLN",
  "key11": "5mVX4qhpAkVw78XH1LkBBKcLWYwsm6wJpFopG9TosCr26zkZYpejMSfDZsBuheXRuDor5esGmegYsS96kMeSMfq5",
  "key12": "3pgPmf4fnPTjXm6Bkn3BuM5gP2DfWzpQqaj7dduf3Rc9ZDDB7EgWJAP2AeLpxVByhjPEw7r8EZdFU2DCCKYYUh4T",
  "key13": "4Egh7JebxYamL5jpHLz8xxAeFT5qWDJYtcuFodUwJVefPBTrXhFBZ1Dp5sHD65YicBhz2VHvkRvSpxWYJHkbDP3",
  "key14": "5xXqWbmQPdMDQBj64L6MNazKeKT7iGj4PKcYRyB2qEDyDe8botCnLhd5wHQDvmwpXsWFryUjpcb4BLMKGCTWfuA8",
  "key15": "3qN81ZF4sM46tThzzUXdeEqM2ckmrhbUxNwvHECJ5Zavo3K82uhjHdPGbRPatsfW21RepHFNXaaTYea51xwpqJsh",
  "key16": "GSS9Sm8r3mWFvLLDFfWc2qiDVwmoxcEn4jwzK7Sd6HAS9JguyDQpPyhDsBvwFPYEvX2kDgeJ1u11adCt4oSuFGt",
  "key17": "urQmwtPrPYYDbyhoPAyg4C2Ryk3sAo2zQgDjocvVsiDCjJjZeaeU3Ep5b3y6ZbodexT6GCgiaoSaPqs1G65LMSX",
  "key18": "3udZRFAzAbv6h3gomYh6EhvNcV9M5HwJ4bvRdYgtaT3Lc3KXZwJv4c9y21Wx582LTCrLDosSxRY949dyBxzziZqE",
  "key19": "5n6ko1RhihpkC46FRsYdomb74tCYpghkBFwEC87KiB42S4GQAgd3C7VYf5BtUyHPrTqd7EVRph4Ao4S49tYzUwjB",
  "key20": "fD4pFrRA1WAk5MgUBtKB2JXRsPXvbkkbvbFgcZcLonuyLEHBjNX9TSXEwa31pJumrxWbWJRrRu7Lu7W3NPYNomd",
  "key21": "435xFpoBHSQc2HEktW5cW9vt8cotjhBbi1JgMy9rvm26EyqyYivL4xvBBcAyZvVdEi7LhJnGsUaagkM2wNMg1tTR",
  "key22": "64pcuNkK13ot1325fr3HMSUjVmFuHZYxDUf4tDG7A4DT7bgYdL6ksdZFfjumAsZYVrKUkenwDrJc83hEWYYok2Ai",
  "key23": "2WAnVxWzbCkRkEAt414v65868jdcUoXPEsoaQSwArNts1owkUqaqgHJtUvCbyYwVnPeAnrXm5BmsF5fJkyfo5sm5",
  "key24": "kQ45PPaAuHJ379SuoJgPXZ7nkHXcAP6H4MYR38HgK46eJYgiKyemeUynJsZAFmJHQomcD7yioYaUMT8HEcVsFHU",
  "key25": "2yJ62RYgFJ4R4oLGbpVvKrdoNrcZe5AY595j5arJDMp53UxZrmFLCtoL8otYYqY49PxkaEDwC1Nx7ubLKF9V8J71",
  "key26": "SF6ip2EPm6AErFwhFtVDN9GET48swbNK33kUcDeiUwWpABp9aiTWEZw7ZoTCjEaL1KA8p4LngALBTZZSqFqSTmV"
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
