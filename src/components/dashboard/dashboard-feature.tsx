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
    "3yE6A7jUz3kpYJR4X9KsXCFuYbCf1JvPURaJ5iX1HKLrof3Zt714TXSveoNaEFaQ5KspH9ygKfMNa4hEwTkX3qPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47onuVW1mMLCyc35gm98fdvG4om714PSaSixCEXARvs7Up9BczYJ7zKQqT8iuviHXGrh7w1DLiFLpnAxXCEqLF2k",
  "key1": "4yh8H3kfg5grPdqnrr5hUpUj12UaBe9HRStp2jzrTeGz3nzD2KK1A5LjQgJmzhbSqiGAFyjt5KcKbufE99smRNwE",
  "key2": "4UYPuN8EftLNBrEmD5tHrePbHRT1KGy23Gg9Rem6d6DENSmmmCgiihbkVttFfPb4PMhojhBeX4eGwYCTM7TnmXtd",
  "key3": "42j4bn53HVRKeGqw234Ym4UqzJET6ZEK12o2oiDZqdzR7ydJbN1EP8EVsF4NY2JZD4c48s33ydTyeCMehFYFcxQE",
  "key4": "2egBMbxc6hbs3wALdRoUVFFT3HfP2NW7FfktMCm1kzMg8kEJdMyEZZ15MKADzuNdEJCt1iUgydQMFCSTFoa3rgog",
  "key5": "4DyVhpc1iVfAWxBV6w6AtX2KssRMXkrU8xE6h7ib7N5GrYyys3wAfTtLe3DDsgRR6ozet9moyCzbsgoLXuP6Ncj5",
  "key6": "2sqKhr974QksaKZun4BcJi5EsaVEaKBqSSmhustdxexyQVUiJVzJD1Jkvbv4pvMkVG64dMxep6aGXRp7wgDSZqZ4",
  "key7": "MU8QJ7pkLZZufUuAEcmVPyLQvxCJy11iumCZYtd8DhcwZFHkfYaDaK8gCzRCmjMy9na1WRDXVkiJP8crZYvtqra",
  "key8": "2x4mxr7VNUF6SqDQp11vAhLxM8RprmgN7KMZfawo2YCJUaqCVCPjfASf6E5JqwFGdmgjfUGw9nRL5L1uG7HW4kKN",
  "key9": "3fz5ueAxQCTdWKqbffTNWDDhcbx5V7EFZvNbZ7ooavsEAxApvJQepoyBoPXjf7ixPC8KaT5H2kVTtBmuvaCwgP1J",
  "key10": "2uMqLSpipsf9A6Gn6Veg4p5JFhwRtBRBuTPbBL1viEJX4q7EZozFM4ZsCYPz2d1ddJWRwNNthkarmjVydXW8jHV3",
  "key11": "62hsG58B4zNQyJurUxXB7RCGTSxJLK8ur3z1DU873phFcq8HXK3LkMjaV4G212VDEZpYEfTJ3nEfAxpjgGXb6rxB",
  "key12": "58WRmqSCf4FdL8RePLfieg5w3JdEmvuS5ZvsMQsWJR9kaqhzRPZrxfASicZHC6EhfMh7PoJccpruKyR9Gub9dmzp",
  "key13": "5hc3f7oNbPsGiJJ2tHKjEKeFHTUtaKTvsc22EWVC5J2rFCc4P1Lp7DDXwWUrtqW4ChMsUpgrgGVqUpknZvCCpd9T",
  "key14": "9Qv7XJmfEAEfhfXXtWvoPgyP72tSdcaK266iH4nbBZpy67tcftsaWcFyxQ3uckK99Lxs42kGt5KwJPTk7hYHqTE",
  "key15": "358j1XTmPEp4rWmUTLh72pbn9hyJazq357NPq894YKaHciHohrgmXYAH19wMjQBQiBCwDkCMrT1FKPYor3Y66oaC",
  "key16": "4P3Z5byzVNgsGk9TH57hUrJ3PBcjtrni66i7BGxtouSTgCTRZ8FMTNJQehTAx1ixJrVB7Rs2EGge2ADqCRfiVYZj",
  "key17": "5oewBBDAKjiegj414FVSe5dHQP6gssEx62yU5tCxFNeHsdsWJ4d6k5W11iYpRxs7A37z6LeWf2Ppp1k34rVgcED7",
  "key18": "61WsDwUSxZcJVoivJHWUsPvqQrRAYe1fqM9A6SvzwBB7hGS4bhZwfaVcRnHNzm8UBPrxHmftWt9HFGNKJgDpHCHL",
  "key19": "594Y33LH7pvEBXvXVWJBn5PkK2g51MqhLjWcSBBL7daT1ecGzXW8PTrpmHAaPBFix6mhmbqBYf88QrCg4DzPPivu",
  "key20": "4N2bAorYrMRSUPvdN9tvnzswy2C95e32DSE3NX8AezPg4z5c2EXLbWcg2PqDTVHcjnggLNcgonbbujCHicSqpMiw",
  "key21": "2aGnysLZqG7DWCHGGqxgnZ8i74EeHsH98YnDSBLFqbKPG1amBWgnZ68XZtc2j6zBBdk8VEvL9WDoegBhyCeYTJip",
  "key22": "2xEPuDWZfwzRWyHAwUhXh1y8Vo7ppQe3wicBM8ckrLZsJDL3c2QzRKLkoBt2ujMcaU3ETRECnXyfxHK4XHZcxQjV",
  "key23": "2dYvA29KV3NF4TznxZmr8AjK2msM4hS7Wh7RMe81gUBumax35VufjkLxScU4BYLPGfF8oessp2NZwBE81jhUQsGs",
  "key24": "4Z6CdzCX8YnEnpgyCr4aKUoSrhVbMhQDefXu8KadaoMsXMkzrVuBUDJzLaN89yvR2crXoYs9yj1M4JjrxGurgttw",
  "key25": "5zXbTNiPrWAm4M2Cm5CTcNfmGMWZcrcGkc2dFaemCUgU9CBZXsYGJL7bKJUDLRf667EJcaV7U6NX9vKQ4Ciybyqs",
  "key26": "28P763ohMnnnWrtbK88kjm6N7oU6JxGSNnsA2sZhWPpJYuV3fnJ49cwGURSH8hVPDaGEXbQnH8UaC3zTvFvgvTea",
  "key27": "26xCx92myR1puFsrZG8KC9ZKAu81R3zHSaoh4UHACiswaTewh1ucwgcatASik7Z5vFtaPgf4KSDwiYAhoaS8XUpR",
  "key28": "iTubNn9gbek8F9ftvpURrZobMak4ofmj6swSTg7AmjPPB3xYGznxjXksUt6oXMbo9SGGvjPjejqhDAksQXcw18d",
  "key29": "b9tPAuGVfBGzn48DNerkv9o5yEc5ZqxJMAi3tfvdp6zQxqqMnBfwKUC9iVrFAzBzKQoRrdfBYfsmz2BmSPYeEwA",
  "key30": "RjkhTyF8WjeF4AGuM8vyub6p2nQH4HhNwK6vbteRSWdHye6WpLkjmsFd64KqfkyAg7uMUtCzusTs2SzKEwo1xCE",
  "key31": "3WsW5UhgL6Nu5CsE5UsjRxrwv3SYoK9iw217yzy91ysW4JqbKHPBDhdr31AZQg9ZQ6DEdETJr5oVh2dJTtmRM473",
  "key32": "2e1AY7dnzBPVtGuWxSL9TnkvyvKZg1yjNymev9ieiz92dAuXgcWtniBF3e2iwLiiYNmzp6c9PJhrC8YuwVab3Xxv",
  "key33": "4227gSK7mXzMg1u2XzqGw4nAQiyMvx8xX3yVeetM5xSTUsQer9UAWFQMKJTdey4LFmt5HEWVbe9RjGrqMAJE1xdv",
  "key34": "5NBsUtP1zyeWTQS5yfmjThMg5e3N9HMvjG8yU7qKQBXHfhdUFtYCpQEUE7SWobs11DpiqCB1A8Cztc8ZM1ZjnHXZ"
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
