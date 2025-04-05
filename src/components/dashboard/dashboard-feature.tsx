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
    "8TCzTo4mRPFCm62w8nMGKfEeyg6JdTr7J7tPHTSjvEKRbFF39B6UkuxdgaUxnBLqWQUXMsr18jJM7pfK8QbwU6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HpYvnX2SvhrBmjrMznXUt763MuxZdhia4dgQcRxSohYFdAbjcnRDeRUZt6KmTpMyydXowC5XY3TAzdkKnRfbVHb",
  "key1": "3VEpzGGtE3FyBwjjvc2HowADj3KjzGUwg2UnQtPsRnMVXNjhuwqbe3GPE7282G2bSJRojZG3RfaBzpudfKz72DW2",
  "key2": "23TPddBjpe6HMejSLGVB5k3KRRhfs6iahCHLA9CTBiS5eS5SeFpzd6ngR7CbvVCj5zY7ubxp7rspNB9WVU9ngMSx",
  "key3": "2MaaWPErqq5JafZvWSFj2sPqzMD6wDhdqH1mM6tJdHZEehGJoxy7TQnzMdG48tEUTziYRdJvvzMjyfYZe5WHwsnu",
  "key4": "TGCRNLPdwoZi8Wp2Gdawzrb51gLWPZkdBM6eSkprya4kHtwS9MsZK1mFRStSRRDV3T6EsDPzuVLL9V1VTsBJRXs",
  "key5": "5sjAzJXNcqt3UGqRnUejWYkwGvW2C4ThpMU67LEpGTETkyHT7bvvxY85t8rYY9ve5wwinuQf9nwxcYkx1Fv5P8bY",
  "key6": "397H9PJUk4B22YNjNciPw61FYjcWuRf9fdX3fhoc8q32iaY26HpkeRE4KwLkov3To9gBc78qpamdga4uDd2ybKqB",
  "key7": "4nWgnmtuZhepbc8vTShkS7H7fwrgTq7K75HmXxus4ncWLDgZLDpmsP45Bj72Xzgjzw1Gzghn9BH1WtiZagRyBsJ",
  "key8": "4YmkshqNzga91S9VwWYUasgXtgphEHt1YnUgNyPMiPRttUgDGUornjdmuCxEBUL4GpC6g3dyawkRzBUxZrVed6tK",
  "key9": "5xH1i1emoZeTgMWr7xSjzqQ4b9yYTLGZxU6NUMD7t7LrWHosir8ni9ckydipjjsPRDNvace4AcLn6vAcuKpjgLBV",
  "key10": "4kwHeaH4mz9KNGfytNqAarPZzSkRLNUDkntFCMjRN6GTk29gxa6T6eRKX5Q95RDmq7nZgAR8JT88H5SCyHT3ipCN",
  "key11": "573LHD7YS6Rtm3PEKREA9DSGyMAhYtm9FuYWHf7eb1xpV2jWvhD6hvVkhHqKnF7Abd1dphCo9b1bHwKqbDnCZ8RB",
  "key12": "Y51pd9DR4ZJ3cf77kSQJWHHFNbZtYY2fZ53DXUBgFQUEnTVBu3vwKmkuWFLQs34CAMTJJ2J5o4ibFyyPZC3rtFy",
  "key13": "2GjdAkSmpDjBm5ke57AnyFf54Rx89aRtQd4tBXimzkGkX5S5eRfchFEDoVeqTWudQsWqg2Z7XvQBBdTmisKSskTj",
  "key14": "4g5DMPTQWzJcQTAXsKp46K6LoLebZKgEmy4qT3dFgAHrmsYVgQSJKSiJ7LquszNXZqvAzadrgeyeVqVnnzXFfczr",
  "key15": "53aChtoqfzUY5HR7B3jT3R4Ej9RLAtkdAx1NtZPD33nMWKPiUARzKp1SJFwVH17gNNT1cepMjUyxhtN5eHk44zqs",
  "key16": "KyvG6ScSyYwXXqjEtc3kqcEyv3Kvyd4eEF9N3rdraV79DiKu2ZyrMuLYm1wT1g4AVSrf8BJ5EGBZod63NfsdPu6",
  "key17": "3qo1hxBgkupZ2M9V5NYAQ8DJ5JVcyz1SnTJEsLLqEy4iS1zZasMcaUcowkTDrGKrLqNcVPqhRWbHCYkZ8T7qtWRj",
  "key18": "3sgU4a6Rr3hMVZaPsYXe23zvR6Tff7m96HxkqQ5ziZhNFTHjgb4zYNX6ugN7UX5sU69GjiuWffmKtW3vLXFqaNMH",
  "key19": "4kRHKLmjwwmP41DRN5zqRNFtReh9EN5ZzKo1L2ouBpe6AdhncD3GjkXeJZ9K8Vg2hvdjc7ArrP9rRjNDT1tySU3U",
  "key20": "4DqFc1MV5y45Vunph6uALBfRJEraGXSv8Y6gdg6he5U5HE6rRS8E16NMFFK5yas1oT8UK8FBZWN4PZfoStteK2Fa",
  "key21": "3pEh4ZR6BUmrjRjWiynfmn5Gi2tpoKzcWdxUvaydGXkz4TxrVkPWM1V6hrZwaiinpi1KDUKyCcnCdanuxU8GLfwb",
  "key22": "3TL8RXQuSJ3PWyBX5bNYyousgtJgFvhJEc3uiCjKK6esqjKJEVhPD8cipB35is6AB85RZuPmCyoiMcfBPukxvy8G",
  "key23": "4iW5JZMYBPyEAp4pq5WcCQDVVVbh3dV2mo3YZsW5SXKeeR3ntoLUsUF79z3Ujw6YUGhvDNropdRuRXrgg5ATPFUR",
  "key24": "3o8dJz3XrRj1EVcX6eev8DQkitbtB9ysU6bFzAZtCyxwTP34s9AGQgw8dwoACAS6tLqcsNmc4sFQKrhgN8iMPuDv",
  "key25": "eewiER4WJEhYvKzpnQLSm8QAhKXBFk9XLpNyvhRfquqTUAurdM8V9Q1dr18WohwXxEii5pPpLW8geXjdbiQsbGR",
  "key26": "3e9NfYdD2VgCkTyZuLmttZAPm7FjWh1SEU9nNr5HWUVVEFfLaw9EzqqNsjrtmtg8YCsLLgRUBrf5pcS9HVBhKtMw",
  "key27": "4k7Udz2L7K4R1LepHSaLq8S2yact391JWrd2buvzrWAYkL8F5i28joazDZ9C5eTj7CUpSiWfs6sDyFuCuHMMkLbf",
  "key28": "2JG32ier9T6bDb5pb4pNrDwdd4sDgks1fnefzEn4ZnEoYsHqNDbxRkvBXRXH3XdcU9v1LGb8MBpvPRJscPkTPZSy",
  "key29": "sJJZb6LdkhrenYNfxMedyXmBsb2ruyzrFguvpnxmdMnf7mXiFdZsyuukXbkWerbwyKhCHydLxx337RvwNyP1T8Z",
  "key30": "644HAN9ihFVWrNjd82W7wByg1Z49Xu7s5WUwLf3QNC9bm84T4iemKkWqwYhaRY1UFnKGNki4TzrW4jXb6ahGgCDQ",
  "key31": "2yZo8Krnbd83EGLSjc2Ua6EX8VA3TKxxvWpzHJ7HoCK3kA2XuDLtVzpbwFdP2Zsy7QFKLxx6aoWv2sZdQCX31Cu3",
  "key32": "2VP7JgjU1fCf2WAaEEVmswq6XXsFN1hF44UmwsPgHmwQPhjAMk1aGjfLfWStzxcse3FL7K1BFXupscEvvrHBDnVu",
  "key33": "4iapdEfgA6BkGV4iCiChUpdYd9GMVNx85goFh9dz6nGZDv69XtdRKiifjuU2j93aocLmVTJ9Fkt2hZuemnd9Haqi",
  "key34": "4yCPyqPXENAGkgoXWkLWaYLzCNMVZABF2bGUwkr2trojpEyUJA1SvLsKE8vjgTGwsEUYpqoJHjGwcvX2XweL7dLy",
  "key35": "jVBHH5KS4CQwP2PH4ess3uhWa7y9WmkMooad8ucTwLYLuCcsCo19bbsWofTd8F9LnEmMftW7GGjMxW4u3YSp7K2",
  "key36": "4TgQZpHW1RvPebMxeaoCcwuBYpuETKEqXLYmpGKmUAPWsMLgdivZg7amNgNqTFJtuDxRhUFcq6nRxsGCsCanWEQz"
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
