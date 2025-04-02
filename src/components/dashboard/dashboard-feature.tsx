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
    "5hDqXt5Z5vPboQHQJfM1fTRJ1qagrqhjVKqLys7wiL6SMzT4X7rymnzgJs6fhTJqXx968TEU1sXkrWLGTkm3FNfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZUhA3hmHLsGRmc3AEgvc3ga8RUmGzVjmc1vdCaapxcdxUsNa713RLxL6M2UdEzQ35LECPtfJC7ARUGeTVCPzhQ1",
  "key1": "ZV7RULJDT4m744cEnLExpS1563LAiPU4qPY5MiQSsvGnhDZNTmkuiS4WK5rJN2HarKyBpXm4PxGUoFxhAEk5BNc",
  "key2": "3BB1x5TvGhLJY9oCH5F1bs2fbbNig86udTAq2wwh9Dpfk3FeownQEqrd88KoC6HkRsm6sqYaFXJSz9SA1vtbyb7h",
  "key3": "4ibCKErfkjLPvx1LjJoPr4wHnGGDvoJpRUkx86mjEdXWG9Awwbf5wCY59URi2hRTVueKL52NkHZf3MCR5WYBV5bR",
  "key4": "34hz2YeCwV1tBGHy8z2T4QUUNW9MQpkhPTbVshnKTJc5yvMKTTkvEgSVpzv6MHh8uLESG3LxDSZwgTMNwxJEiAY3",
  "key5": "3rVr6tkdGE68ohcDuo1orKNt8KsVn4r96mnU2hiYztqryZpHLQGT9D17afM6SxhJVLeSwUuXfnsoteERSPhRecBM",
  "key6": "4fQX24cskUP86hxSWdG1AWiYfx2AgXNxmERtTgkQRJ922T6ByXF5dkkHFssPJto85A6a9HWQghqebKdcARcdx1Ju",
  "key7": "4awtoGnzXfWruPM49p239sQZg1tUz1RNDyjjSnqqBtCTj67WbqBNfPJ4M2edUPyJc7HS3A7YqVBn2RBAqVn8Uzpd",
  "key8": "4bz9yGUDp92F3qFwnszHsmocQ1z4WjSTwHV55eSAHFFd1ULoxyxDxxNJgGADm9rvN1GLkkoeNjRNpxkAY8p7bgcp",
  "key9": "2u3XbJqvLRDLGreb5bhRrvi1q6SUY2GibCpxHxRVaEiDinNbw8RHqX1r735QURMupVAFno5LxrzRHCxKapz6NUj2",
  "key10": "4v4T3MspgqEqBmcx43MokYbnuvr5rD5zLnZBtougXFPceAACpsjRSR1FAF92o42eisGkhYdKTvUDJ79ZuYcBKh8b",
  "key11": "bByrrJMdcFEgM2sombb8H8fjVoiiHhTELWSwWefWkDFkwCz1vY9LbzZ4nqkNp5z3yv9J6D5Q7rPpDjwYBk7XH9V",
  "key12": "65devkagJxW3h25uBNGKwp6871Aiv3W31WKkrLpGxVHh93sh3ug1B8yXcthoHviKA4kKo5H6Yu6y4a3DYBcj5PBu",
  "key13": "nrxcK8z4Y9SUc8hgTHiy1DqxgzbP31M651Eu6Ydqq2e1tYcBZrSanECWvkoCbn7WnQLtM3idNZXPBDR5FrtAJFx",
  "key14": "2synCL9TxGfa3hxyn9VL6oHRfCzrLCx33TQcxx5JdEdUsArJffHYk579YqwK6agGKF71Gam8o5jdgeN9yTQQCXS5",
  "key15": "2EZkum9v8eBX9mCYTGWmfYXsQSKHpPCRFVqVCJjEW7hSVCnLRudrJ1dETXZZDqyDQGnfYnyD8nJQXL318kGWoY6u",
  "key16": "4mRyaSrJm2JkDGN7oThrQZXcVKvkUQ7MKZFDihB1LPWphgqpUQ9kUtgkF865kKDbfSjJXSWMHr3bg6FYJ42RYEL3",
  "key17": "4t8ibGf3ZGMU8tgKYtZ3uq6RdM1FJLHN8ygP4vEewctgzsr5j34jgZA2SL7p8isENVWe4XAPw2Af5Vw7ueT3DBzy",
  "key18": "nLbHV1QDbb8Dxynbk7qtsV36jYcSPGgSNzYXLThzkdVEhLCHQswzF1TZL26Ey2GQJYe6esStPddJFZri4pKxV44",
  "key19": "4yhQMcFKSoWrdeUKYPyg1owRXo5Qn1WQ6UTTp6JMNda5GmficwqdujLXwT7VcALQXBKrzL5L7sB2zgmRX4DWokTy",
  "key20": "4i7QPbNs85RFaQZJ1sgxEb9YbsKRyDaspLwNYu3hj2j7ZK9GAiWRFsRZvAiLQ14ueSDun8RLXfQRxoBYmriMBR3N",
  "key21": "61UtG2Dhzrmkg5NdeFJzeyyv47yMMk25QGpEGjFPNKhGMowUWZoKPLJxhq6EfyLwN2WZB7rRWjAAvTdsNCJurNvP",
  "key22": "4zhrTCDHWqDpdEMvdPTkmcvikgAaX4b3vayyvriEjnkUMZWMAVeG2P6baWas9vWFgSChxb7RAMoTryeGqK9tJofZ",
  "key23": "3FUftYgFWyWCtTFfGMzBKhePqpf8LkcjjWhoXCyscQLfPcDXyzFqFQEZXF1qy1omDQY75RNeGzQiEa34wm4Nsbqe",
  "key24": "3sQuNQLnnQgJfQQz2apW8fC72YTWi3Y9hwaP2np4WNQdFdEhXV2yapnKccVPY8QLssdn4F3pdhuM9TQmkdw1byXt",
  "key25": "2sdoWT1yAmdw66K2en7uB64bMp5e1PeQ3iZrDPKXrdmWgkHEZAzjvJpUpnskKELo1fdr4qwkJr3gqLD7gE9KA1GH",
  "key26": "7CxS4Kycw4FZzjt7EUR2eW4exSfMF2hmacDpBkHS7vthNJBD2kESi6qpkrea3F5PLj3ZtFZ7dCshvg8pw2hmVTi",
  "key27": "Tdpyeoc23ujMgNj1RBTacb8M28orxkPwS9fxYHhSmPvYhP7gaCXbJbwQZXZQkc23K1ykfQ7w4gnLHeQMVvKSBj3",
  "key28": "4vwrsiLKLEajFB8zJmY7CBdydNMUrXPcHGwFx4aNmZwvfPnNV7m45HsJNtm1yRDRQknGjqoWzpFktYcHSWYHS4HS",
  "key29": "4y6PyrdETuiGEVD1rCCymeuYkMWoNVrWDsCELnGMWKGc4Efc7RQvmRJBrpivmejQqY4LsBF8XR6V58rGUpbwP4Ai",
  "key30": "43nxVjzKpLNnLSy6Fsc1zZUrWELkRx9E2RAQyiGMSwMT5S7QQte11C33M8CxZNzFYELW2LU5xx4oJvUZJ3gmvtJ1",
  "key31": "2Y6YRxgYC68C5wafRkdeLAqBDMPo7Nks3SCjy1rpowaxG93XriHDcWCyPpVM6t6RnHtHz3MPnuyu7UBsea8zutQS",
  "key32": "4rfqXXSXoHXGWbZZsJnjxBK3AytRecfAX14cJtV3peqgcBKnmHUv4AUSGbceyTSjbkHeLhuT39wTvDY99nktDSqd",
  "key33": "u9URmgt4mFSMeZVBPQNokXP7ByaHtzKA2ZaDNxgWKqrsWw8BaPXRJ4h4uu5FEQ3Ce87qfqz66R1Jum58VzbEDNM"
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
