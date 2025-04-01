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
    "4K6MAi6xH29hHEHsb9CnqE4dEV8F54UmhhVUHoWPvkJrmtBhFG5HNDLHwSqBC3idwaCU2YY75pyoiwyPNUg7HxgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M19yWtB5UMS7TDUbweUKWWvHWpNamfKy6jwWSByejFCmivqswtY4MLc16RpJA1XSNgqTqikmj5BUorvdkct5dQz",
  "key1": "2uCwf7b4AnDMVw61QNjumNG4n6YBEAu88q1rzVX1rACZHYMfq54Y5nfhRxbfQKAb5ytNujunfJsrawTfBCyC4tyS",
  "key2": "2jXKcEZkPCjUxXwXCqmqjjXT9eQZwUJF3rj3kHvix1tBbMJqbtYMtHGV5WmVpMo4RkuP8wWfnXtN7aChjsCKcm42",
  "key3": "57VAW5DAvskoaQU2wqWjfj6vBWDqQKW55UwNX4ndJUG95aAArzaYLtSGFbo5WRkS35h6kGsjcgaAsXYE5sqNXhhp",
  "key4": "4SmWTFd8dMSb5VsdAfZe5FvabWFqavZNyf3j8mUMonDenaYjWACn9jgUtTHjfQuX68s1TkSS4AitKi3ayKv53hYY",
  "key5": "217n1KKkFooVy5XYfi43XjHbzzLAYMYNdJgET16hex1tQLHiCDGGpqoKUjb8jsPuEadLQBKvZshGYSZSVRCekhDk",
  "key6": "4cQMzusMtgMvetQBtcibZTQf4prVBoj6s6m4ygwaccWSkPb5xCqh5sojGHhaoz9dgegbKQEkruBw8ZURn1Zfc7sN",
  "key7": "4FkYDdaW1xHiWkmrPBJ7MuvFLrftRYe98qusFh87rULpdhQHrGM7tCErNVgyAd3ZhikNJRiqFFiso786ZBgWvXUq",
  "key8": "5uN68K7bA24ecupR5DGkUa5si9jkSwJ8s4r9jdWnrPRGoqwDFj9BkXDh8NdjWinRiG1UScNauj8iXuLBGhFWc5vx",
  "key9": "2YSj4BiTAg2HLJXG3sUYCv9DzTGdAwY1rpHV7hBWFFKUT8Wmqe4T1p12rR9hZjrVYKQtK2nRjJhqFBdcjgcZySMK",
  "key10": "38ZqAJ3sKes97U9WNbkpBwvEAru7jivsDErM1DT1SqygkH7sETwKzF3dEMfZwTssAyzmLGWHb9WVMZDMbwbHAmi2",
  "key11": "3iAorS143LXntP78Ey9M2mZ5saTsa3TyfxmJvcZxi9aJDDHGyB59NYMHf69ywwC2FMfJrvfXUmZZsZ5eWdKgfwzE",
  "key12": "3iqJLt6bi7xRNrWsYNSo8y4GLy6p2USK7v9QwB1bvvFWUgkujN6hNLdmZc4Y93wukjFPaLGNuzG4daYvgz2KxH9t",
  "key13": "4sp3DD6Y44xPUGVMUo5fuYqn5XCGF7u1BVeYn7kFDiKXfYrLMJKxE4Xx8bkkxh1rWt3mtFTk6Y8W5T35uA3hM5k7",
  "key14": "4TrmH6FLhRoCtpAUP7EpWonx3wTHwo1dHYRWLVhim3w8taHnZxYLMJhKBwKE6VHw7s5BgwsvZs1MvypzGDm1WH7t",
  "key15": "3q5ciomHzzupTrX7k1TM2rf5aujZT7odwh6VDWkxmNwifvPoMTeG3txXvF6cj6qwXb4NVgBrvAJ4y4fQEo3oFh23",
  "key16": "3nea7NGMQvw6pefRcxBLvibPgjPBtg9RkzypRjGniwJn4kY485v3codPybrLoLeaAsh3A2NJjpHQLv3R1tgUxG6C",
  "key17": "4uwJzFGpK1GVtQU1hQy4YSPt813MyfREFiC9AWWZxK3s9GC5PzoK3FaxMMHfZCERZbi5sHcZbSgiL5Vbc7DX9YR",
  "key18": "pucwSC4CYzsLwsvhNSck36dZgkkGxqEbpRFiYxZqeNB8AaFV1Vgof3imPaoEa8t5WwckrQZ9PdtXGUYBDhhuCVF",
  "key19": "3GAVLnNgwnrM36zRxwgNiZT3uuF7sJtNfNBqefk7fx5g8ArKN1pXr51X6PfgnjVdCLLFbT6WBhMWs8EA4XaEGHN7",
  "key20": "2J32yGS5eGDuAxkoXGPgdqByRE9jf3bwsbWd2oDMghVFsJrjUi7Ht6bpcXk6Dxk44fxAEUU8sBz4trjcVAgnabtQ",
  "key21": "5pLrQ37gp5WJxwdM8mLS8pQ8mfqLvh6Z5B78GQqLSEfPpkcDDsViScKLobVgcHM5ypc3iuCzzHXWWKDn2hfoWj7M",
  "key22": "4yqZJaHpm2eAnp2epHfvPGrhhd2PPcEzaVA33DnUyxFLn4CmhGU2J3dETh3UBG89ZvtwZH9NhsEQqFPzucmPp6yh",
  "key23": "4vptpXbS93AgNVCT3m7v44Bo8e6LX9AfK2QmQn93pxZyMiNh5XY3PCwncB6WqLtRNbWw3b5oJScTAvYCsTc5mtK",
  "key24": "4PXU2DgHRGZhpsFxj2jNmsogb2m7jLaxqUVBxg6Kr9jAFYbxZ9cYkNRLrYMLGm7uHKAub7fHJiqkctaC31BnLjyn",
  "key25": "iCdHgxh6N6VwzNWhfjtwMN5o8nX5sfLj4SBRbbTxvUbZAnw2LMG1KGVAMV53Xjc9HHR38MTCPHh3k3kye1u8pYZ",
  "key26": "5TmwRZZALXMseXCHLohTsEttKsV368LE9V8HEvq96HVEvTvweznpjai3Qwus8DcGkKPPaBU4WaYQZECiZUPfJErX",
  "key27": "2jvobgSogcHFTy34rr7jrr3ePtCtbpGsnj73Nj6tuGnQn7e25jgVEx5kEPvVCRQxpdT5bYbYMyF86rBVYUTrSu1q",
  "key28": "3uGyyRmkZ2WRxtp1GbbWKPRiepH1zuTchfRJFDF63NRuGTciYM3A2qiMMag7xy4S36qVPk1KJ9A3JESPQbwtQtLK",
  "key29": "3T9eMjjxEnK1qRirpLzvfgqdFis8P6bHnoBy9tc49KKGa4LSr9LB9E5F1GEFoa8HVdCMbQRLwK3Rgf8RvrhJUeLq",
  "key30": "BBwj1xscc2jiL2Jc5C3jo6zNmjJsxUWtB4ghz1a6U5BHSmotv5AEnP5LVrNEEW9shLx3YqzeF5wSaYxFR1pPuZV"
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
