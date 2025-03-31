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
    "3xFJLcHDqTbdGPeESBynrjaFJPFNXXgh4WoEQ3LoemgH6oEwrH1DEYAVeHpuUkd67hdCK3msaWR4JF2PQUfSDKuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uz5oYc3LgpvAqoZGX2b4QFH5tNyVVwCwQba3JSoGz9fqz6sBK4KGcDzQ4swxabNZV7wVWbUh3wTpaxrMm7vKdNP",
  "key1": "3Qb8zmj9BXJSk2vKxvEBkQsRd6kXG6NNZgYoudKpDThktssdtqrD7dMZnVHBKGwf4NehGRv3gbU3Ush9JNTjYDaz",
  "key2": "2tQZsJCiYgsPjyMLfCvxHbxxdqAeEPK1dv2UEdTErVfsTbFCJshJKoB3ewmnMAcxsNNqvK9aANK8r6mBdus1PSg3",
  "key3": "3Z59zWcau6xa2F6akmRTTPuurDYPJcgdFSwnDcokbVXeiGqVeksykQhVT77Y9NB7LUZDe47wwwTcqBFdFwAebpqf",
  "key4": "5ihiZ68f5MZqQ4Te91eaYswgnwnG5RDbm6Nu2W3LE4BMWx347AcRBVE4sa9k4kYUaV88PrzzFBHYhFUzMx796FDA",
  "key5": "4nCdDVRbZqFgjN7GUZBQHhtRJChh6e3nuPBaDk3ibLBjVwF47UNCAUmDb7yBaGcAa2StVAmNaK5mzVo5sTaeYbm7",
  "key6": "4a8rx2KWULaehabRiZ6q3magDszrTSYyZnXCjFrSvz2a1AqhXetNkep28TqnurSghBTnUB9gU6bD4AaNnLQjZr5",
  "key7": "4dmo6bKF4sB7EhBx8M7ypKx8gpoHvJMgZTgu9xxz7Ei1SsckBTzQj3oZQNFLuK5MWi1m93D7FfRH4kntxCGcuNCN",
  "key8": "TCqj5zo8g75K23yNbCsVsqHz4cNAq6rCQ2brDmyexJ5SDXhNwEDyF7ZkyZr7yWtNGEyb9dbikvMCoorBfErKPyL",
  "key9": "4MsBRZNoxM6wQ7gFDpkQS1XAu9ZM6RaKPAvDi2rd3YXCH9ME25FTfTCuPqmMM1uGMiVJtfowecHk5FaQ88XRkjot",
  "key10": "389W1LAqsLYcWSVcW8gvBYxGavvDyLFZQazpXcFDcZyF4h4MqzhjjLunSLtF7CrnaK1kTkQAQCMx7BdMmAnyUDTo",
  "key11": "2HEH5QfQoajhxTovLMfmMH7oy6GdXihSHxiApbjcPfSJfqErk7eEwTGscpuwfuxkqgfApqgcdTNRKEMQmRRtaBpR",
  "key12": "5RD4HXEDykgSxmydCu673rN2e5jGcmZaaFENjxRz6ebAvtzMH7P2miiVrnPcwq2Vy1ToqyeFbN39Gf1mHnmY6T6K",
  "key13": "5QwbD4aCFo476ecNnuzRzZQztNYfPoRyWooZWGK3ocZi3LTM33pKrVYJU8RCWC26yK7CQKEczWqPh1j7MFUunwuC",
  "key14": "5HQjEsWzsPVyDieVhq5uJqohLB6kjj1eTwXtpB59SEhqZHYuqLvYCjUjpGSdF5EeRCqfxgkzAbAojv6wuKMXJCfk",
  "key15": "3pWXgVnv98ySBcJ9UnmP1XaUjSCfX53jEEkKWrH2hXsodqGbkDtVCDT1m8TP2s2F7KxXCHGngEVFfDmDVtny1cd",
  "key16": "5MUs4KSWJLn4hBvNK4AzUkSNJLo4oVuuXurEu1FmYuhYnrsK4VvBh55Vo1t9neyMnwaPwj1gGdHkUcyjfQt4mmpH",
  "key17": "m3VQso5MsYyJKe7h2CSCJTEdjprPiMxyev96EXy9LKX4Vw6uE5PBuj6PqjWBSz8sAQXTgYUE8SxEDYRa8NNDAN3",
  "key18": "32gZXcKS7LNZFQQJ1PCcppDHdR5A6Ag6SMFWBHDcZvXPjxpSa8Pd3Y87sRvmaZUpTw3EyZmMMhxXXuvbjbp4b4ih",
  "key19": "1sCStwzRCpjFRWAXC34LdhU58fpzz4eybZgNXmAWcnFDfgGnRLQieCSST79LrHXtBdAsnsSjWS21iuQJ7Bs1tnT",
  "key20": "3qqminvHbXEoWPxEt5qwBbqN4L6Curfhid8LeLrzGZiGNZSjjBhh3eAwxGXmUUfRQEPKLCsP5p5tdy4xxRs42tsX",
  "key21": "5S5eSFsei2o8hPQ17f7Ybf7XzReDCQ8QMXor9HkjMohobPDZ5kdZSZudBD9kf8Z15VFYQW3aHZMoVA5uZKND1ABf",
  "key22": "5dWdmbz8Fwkrji19S3KEwugNs6YzZupHRTKfbD5xcb1ySHhj42ugDwVF78UkXs6fjKvKzvvbyUcDHLo4h7n2MsXe",
  "key23": "t78NesLAYhd5fGtD4Mz1jjWgmyKSM6RzyuKAgJY5VrTMfDvL5DVFeeB4hfWzZ1ScyLQGH7GWPXMVHtanHSZCHFG",
  "key24": "2iJdqZFTLZ7vn1azVCyXFUoWTc1dFR6R13zNVKTkUjvmEuf3mVBDsLZ2Gjf9gg2BXhiuahej14aRoxKWZiXpN33c",
  "key25": "42c76QsSMiszSztmqUfqmWoXDGzNDjoFeUCmjJy2cBubsSN4GWoPEcGg15XLmASC8KySG6466HfEApfNvEcF3UGh",
  "key26": "3Y8R81YmEqiy3rpqC32Z63izgv3YcTYw7gEHhzYsiP4sGeWokL3s9mN2qhprZ1te6DphkWjLfjh2JMDxUemJoXCc"
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
