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
    "4hWDV8C9K9G5xd56xA2KwYQqdL6S5t6qZt1Z3nLESm8SrYbsUQa8wAALJmXGq2XsopkHRh47unGpNa3PJDTGbNfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ZBw1i1WSc8QQP9VFc1x1Uyzu7kZhe8nShtLwhoXXr5Z8Fj2YMaHxRzXD29LUf1XzPRh3631uC58LUNWNhVQWbx",
  "key1": "4UReLxNccHZEq5opJoXN4hz5erZYNbS23ABRamtPe2vbmo1qs41fH2VZUw6RXKU61kJbxuT9W8ivWvDzUPtonpwL",
  "key2": "36CJiLWduPRLqPsPWGjUPZDg4Hik9mTYFeiY7B89hg6PpS5VmMbSXnzQoXdGDFwVsQKixKh9Qcqe8FcK1wMgeARC",
  "key3": "2vSWzoinkGJ8iE4Ub5QTqinoEbh1QQG5iwcFPguvwAQva7vW1gMs9Y3zox17ehf1bad3DSs9ZfCFYSoGKitH8GLj",
  "key4": "5dofqJTNoj66BiUqu37yd5M6jFS4L8B6So6a31Gqy8eyy8PEvqP43A1DWMhTkkuoykKiYyTwSguQSccgqtkJgZ6N",
  "key5": "39j6gU5jz1WU19dX4y6V3wm1Tv8dXs5pJwD23zvumcKhZh1itnnqTcFM3XVHiEqGFoDvNRRjJXprQ75dyThGvhp8",
  "key6": "huu1QDHv58183hTt3T1Q5J7gaF2uT5fEuN7eJT2TAaPjVqfUWWwFqq6ic4xdfvFmsorzmHK9ApCHyAYDZzShE5M",
  "key7": "54RLMw8PXaKQ2Mjw8mqSXrPBsLqBapbU41vhhcJUrxVENtmzVX4DpADN4BChETRyhyAca5kTvYhpeYaUZUfYgt7S",
  "key8": "2qQoAgLHPNMAKGKUwDuAcpiSVxRmMwtqERLJAgSs11pJkAnDVY8jvECcGkggf3TnDzJhNoobpF8iczJ2BHAtZNL1",
  "key9": "duREcv2sEJd6SUM93VWb9xZdWPtuTaavdFCHZhjN3JL9WPsMapb6z1cRZfapPxm5CY6LJNV6UzzxsxY3P2NoQzf",
  "key10": "tb5foBWVmVZQpv4m4m53AUXNudj86nHX3UQhhEQoJfHqjyPjZpnYMBp5f5T1TBQTKJfy5zuLURyR1BvM2q1e61F",
  "key11": "L1xdjmcqnFVUQbU1iZBzYWM3Y9DTf1mX1UvotkcLMELFUU7jBRfNoXM1tiN2FbipPpVnKJCyX1kCX4fpJxZwvjh",
  "key12": "3dN26UPgEVMAWW9Wj6byBt8bo3TvK3S2tVYqoeFXgtCj3Fi2Yyo55ePPXHMrDNZ6m8xcNrhqPCDqsSWvjRFkJQs2",
  "key13": "pgUAYpZzrvXX8YrJ3h2s8jyDpdNGqsmd9fAaiUXHmYsQkQbiXhHorzf4paAekB7Ei92w62aexZWaRJ5jJFLmf2V",
  "key14": "5SLoAxqxKYAjrUdVfLmRSp2DZKpoaRJvUdR8GzZKLvmYqo5Wfz2W3GirpmtyEkFGJHZ4YF8UNnpCy2awEgLze3qy",
  "key15": "3iL66pLEiJgjSw6KkkekEhhE1ipYmFztGQnWeiHYMDPopMLvuLdQsQxxid5bpN4LhzzsqNqvhHz14B4hSsQkDd3C",
  "key16": "2wFMUy6c6p1xmZT2X65dkkTMcm8i7H2rFpYPno9HcNKJDAZfuc4XHPPGWJvb6Y4vJKVUyz9rbxRo5vh5aS2XrVCS",
  "key17": "3oAxqi6gzYp1eTYB3YML1fDKBRmJa3GUQFLtpGrQJEvJG3nSB4do9iNgephRkzt48Nqb27fEctmxYkBnkRdZsFFm",
  "key18": "5TknLRMK1udnddXkvVmoWXz92c1hGWgw2hnAMQsSqW7KLRXUwvzMiK2HqQA2nf16TvBR7p5DzRif9zB1tcA9rXg2",
  "key19": "3e4wFut88MEnfLjUGm2KR3eRZCYFPYVniG56AWo3vE8Cf3AqjnToqgHyLLFUPramdLTFRWgTRV4QX8dj4SRzfGpE",
  "key20": "2y5R6Bh1R3iWekAqpUtqN1i3Z4KCbzCh6ANHnmcLRA5wPJWa77FVYLYFLyDovbuRN2LnyhV6HVQVJMJNYN37aKRe",
  "key21": "3gMYrY7YeFxH8d4o3GrhqwiodVtiMCjbC47HAaM7zDm3A3gazKhhsmpZj4YS3pctU9Zuge3NpQct7FhbHrL3fkXb",
  "key22": "3Nquhu5gYf2LMKDjHuEqZrrXybTG7offL9MKgu5cCYUrruerZ86jk62CoZX7hDWBTNnKP6CZHfLdnrgWyvHQmtKV",
  "key23": "2w61FvHGb2wB3qmc52Qe5wb91Rs79Qq2wHMsqJs6jH44jdXm4uHLznzbRwWytF638skThvUorG4rVCpmZ5yRuoRz",
  "key24": "FLSQeZjMgZZJZRxZPp8MyFrUxspMoRgwr2nUdfvCC1bX3gR4Ff2br1tkbczHoTqb6q8hejCRZPmqCygkE8N89Er",
  "key25": "2rtL19eK2XjUPWDGgBTn9opbTZSrtp4JoJ1hsDctfU66N1iRQfAkDMesR4UKVGJr9TQaYoKMuz9HB1synL3iB6rW",
  "key26": "5jqePwvQ9q4sam7K7Bz5obaQMQ11y1NwpPj8tsMU78r1J7gGt96byhCkiNHXrKA7iVfz7UsHaS5phnWRgaTKK1pn",
  "key27": "5mQxHXiVffLy2QRndzocbdE6uwZuRym7CfwYhAxgbYK5ue333TrPHRyMTFhNBAcupjLzSvXcd49wHLWQnSgM9gxs",
  "key28": "3kCwQNqKMpwbf4uFP95bNqZEifTknFczP1THo1RbPM3dJJvA3vzeVw8DHTL5ReuNRW3QMd3r295o3dTjQJDi84yU",
  "key29": "zeDha9E9vCv51r5oibBSjv1QX6fmBx6Z16AQKvSLsmvNLpuvrcvrwESnQ9vm7D2Gaa7Zyrafg7pVLNWbimw7cU4",
  "key30": "4CoCJGM8ZJGr7s6mWyhjdiV19Wy5VuyRCHUGPviB8vVj3EEfF4MG7BmjswW5MU65jwMmbioxFdUcC91VyyozetgB",
  "key31": "2MGhFp6DUKJgd4mD1QXySmKFPj8qpvJfmMdjohqumXf52ddd22RBCeuxZZxsVC6D3gRZJwXHuPPp3rEeNSk1uEPo",
  "key32": "3gk8NATq6LVwmmoQt7bKtFZ6Gc15ybiQQ7rSVaya88inGdLrc2Ukh7Tfjhr7JvFeHjReDzzcJEdYjR5gDqkM8ZFE"
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
