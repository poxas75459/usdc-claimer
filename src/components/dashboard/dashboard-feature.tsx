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
    "2NmBpPmL139LKKfibpJssBXWb12WKkiYMAhAzN7sMRVMzhz1hkBePTkNEc85Qa9mUUgkPdPLHdgDWDkRURYucmNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yz5BFN7WFv8wxoawUjAsZ7HZHaa33ESSc5Y1BnKvyQR8dcrDPahT7iBvo4aDQdNRrsPSuzRzLLL1gajSH98vBF5",
  "key1": "2Cgah4prQ8JfF8vvwrGeEkv2kL8uixg3TmxPJJcCcG2oPbkCZW5z5ezrLuQ2YbKMrAw42asea9wktBwbQcdxH7oJ",
  "key2": "3mDwXXPXzV54ezxtpqGQnJLV8YV83Z4SmPDtgorRvAufer1eFYpDuAbkfEajbtU5DCF4ysXEbQHoT59zSDU6twyJ",
  "key3": "2VeW2RYj8qrZCeU91B9N1g2nUZS5dQ3F8q13m1hdkca6iY4CerkJAYK6EMxYWHmFVC5v1uA3uV1bk2iVmZGvt6UF",
  "key4": "2419h3x54NvXSXFBb2RgSJxRJU2JAeRp2hs9SsH6kJo16T9McmRn1ZSsKF36sBYjKCbGfnJSKHdvRkv2xrFL2CPW",
  "key5": "4WsCcEoQREVDcTLjnkTyonnXpQBfZR3N4YeCYa2efi6ZSCRGjHwamYxAp7Wh7EZPgWp6QgkQd5mF9bPFc6x2M9nV",
  "key6": "5D9GVZ3XTWnaQXKP29LT5gPMAkifBQyLpewDWf2ZikXSGdiaKh9R4PpgkoCKQo91eGDZ9YnwX8cbQgeuZJMca4VZ",
  "key7": "2MbGHuaxPv3Nx5eiSyKifSRW6U7zXmKZ4vuwmyMMrC3nTMAGPpkGbHM8iAPFM4gRWNVaHCUxFCsC2pB7vNeoRrgE",
  "key8": "4ybQ2Vu1vnZEcqP4EUJQpSrwPp5bCYzUWpuzwWs23cgE5gEPnqDMGBybDthwZZe4Y56XmnRnHHtb9CXxk1iV9uer",
  "key9": "2SGr8tiMiHvTuRHtmMu5x6zs6ETMUCEPFrXRVjUmRzpUMeFerBwd7N7FhLyzker9bMNGDhrAX9bq7goWRy51tYt5",
  "key10": "4xd9TFmtSLURhRvkLUd8ZyriXNuwc6GFMpK9qaGxisdzQuAsXvGnjmFi8qbvKpT2xfgHND76y3myDh2hXbhU1dwX",
  "key11": "4UmcGhfaMaZbC1HhV6boTg7KS3gVRuSwnuTRBPrQGfEADhe4Lj3sBAfwGbQim4jdTLZTzU1GS2gpJuUW8SxqF5Wj",
  "key12": "5AfrgXPFs2RMSyP6jjXgbiCEMzgF3CzUHsBcuABkCW1uKwD9zepEoCNbfniSNz52SKvcDEQ8aTsJvcQmSoF7tbUh",
  "key13": "5MY3GTGpK4Nnc2ar1N21NDN7gHfGfn4qUYsjqxEjDY4LM61xvpAd67sqegcVJPkecnD7Z8wB3ZXeaZz4rUKEmvhH",
  "key14": "4TbR37hZSQi2zqTKM7YMzRbjkHaR9w32geRkpPYmF1ymCWKDqeFQdUwjTAXMgEUUn4JmpRDvsphVHrqhT7yXy2FW",
  "key15": "iQ3PBLJ77APHVJAYRtvuF8kdFKeM3pkbUeWp7TGVboJ6TwhC86ifwcTdj2UC51VqDuz5kntWCGeUPsshTjJX41U",
  "key16": "25u5Csnk4jDpBEq8Yv8iDvSpPHyGRse2jUUYrcfpTrD2un3HUig5hEnmHL3iTkmWFNm7jtHyagCPTm2mqaHmQH9F",
  "key17": "54QBsedM9PZzVbUQFmEfKtueyJMjn1AWQcxWsaAA78CVD5Te9FM2f44Nw7Achi51chuwuJCsNq7wqzmDNZdUwRme",
  "key18": "3vyP4YLoxXuy8Sasu1DkY3NFLzqBXsm7EFhvqzciipG6BYjJJMrcRCapnnKCTkGy3T3BdmHmepB8hXyDDhCPW4Mg",
  "key19": "4gcn95P2yQaX7ZauKZTr64b6TSUbZtX6RuLgwTbEL5YCk7YybNUKZ5shRwP1ccEFwUDo8m6zvMxsNcuHFS9qfGii",
  "key20": "35DsVsgpADgdCLHQJyTXrQJEcDBkN21U8ihJfgGMKbAbQGrp7jzF8wgQ7EC5WPE2JnGE68XSZDZDHguewLdnJQ8m",
  "key21": "3zs6FiwDekKZVW6UtrQ4jo5TfwMvaYFJ6qJ3KNfw6GMLhWvfcvL9vnujtc68ynUn6g2mJc6snvKAjNitmsweXLv4",
  "key22": "uTwbhdakvpTPLLBqS1yATT6Pmao35ZUQpdMkB3W8jty27Zo2o1qCQvfHPJT6qc62SBCEVWbKhMGbz8pVCcyL1PY",
  "key23": "2pWt2fBYd3hk3dYtaQD6JAyAUKbvvQtbPX54iLqQmj6CG3V52Q5aGCLwHDYeMadyrJmuZcVmeXJtuEQLEaSxHeLf",
  "key24": "v4CsKfdqwmFQnaoBQwDQ7XWhpevuksSnNqarTKTFuhqPwWvshYM2xEwFQHJ5mdjUk4kY1DjuiyP19rEYxFP9k87",
  "key25": "57zukqLa8xK46tJ7Qb23TZBXJ1gNDRuo4NgArdPY4MPZJtJVmKbFhNgVsDGx4FgvPm2LyzEG6UDXPLtVuWeDWYRR",
  "key26": "4ZBLRMHhYpEZ8A8Zkw2rjf6zmvbaD1K9B4xsCxky1mJaU1bvG7RtPYMtvi7efW9rsDCwzZuoNdDNyXvrBNxnb5HL",
  "key27": "5UmyxzqdtaLFwf7hbvHdK3g3fjbchorhFn9qPGDoKhZHNwdsL6SgkdTMVvDV2WDmEz4tn5yemwcg2mWX3Csf6i8C",
  "key28": "5yy8oW1v8kHhqzdC16S8RGAcH96toUZs8SLSt3bAsXdQYejEtFGFsPQA81b2ioozjX1ALvVn5vK4PhHSf5FespTo",
  "key29": "5ETJdLaQ7P3mrVCNqiTQ1jDJBRWSNk18xXEEhATbG4JACbRv6CggMVtuC5wmsqAuaZuq13N81gRiU1tn56xrUhUV",
  "key30": "67c22STo3pQP5aieEcXasCtx3ucT89ch98reQ1hzT8oXLZML9EFSPBpHTK18AMC9z5S4LrrhHTCG28F35B33fJkL",
  "key31": "4j2xWbTdz6kLRP8KbR8GRPpcAbYeVYwiisNYU5XKC3VCjgkSNaLjz1cq48m9Ggefoai7Lt6AoHFjJmJoPYuQiTaF",
  "key32": "58ekRhPkfX6wdAJZr63vzXmUSK2Rh1bG3EaE7TD6Q1WLCe8wp9Fnn5Du3pd3Jztukhb7GRwNrt63iwrythqKgyrD",
  "key33": "3qRrbg1TQGMkXhnMw5iFQfT533EA9sbKLt7eXJKRpshMtbK4P81r7AQHUFq9U964QFVUiFZ5mBurCxxY3KcwXb8D",
  "key34": "mRvWTCBN4GM1UZgGi9hg2pTxpNa9QAJ4W2TgmvFwLsDCo9UPKZJnzWpmewC62RDrX3dcDasU5kanggyHSrj6nR6",
  "key35": "5FSZFsHAWqHaCnC48c3uW4zJNGSFB3xwPEPKKBeQzLXSnypkecV7eT9m3efBL2Fi8dC3KFANg4TvNye9cGzmFRNd",
  "key36": "31G3ejN3Ai3R1W74h7eAxzsgvutTaRdVpuuVTWJ9y89hiuNoLXYjVh5vHyJ8EYqwbUFPyofLLTBKmUTd3cUsnmtS",
  "key37": "DDAq4yqAYYCWQXMkzheaXNwAZzJz6PUfFaRgMkaYG7Ce1XzyvZHBoQ8uxWJata99XvZHYH1xyWD4mbjV7ndrVUw"
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
