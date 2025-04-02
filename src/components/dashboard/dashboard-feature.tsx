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
    "2Uf1sM4RAdTpmBZb2kWHRXFuddzrUR1UYgwdWarCzL13YkAxb6tjroLciE4RqUgcw9G1CDykaqJXjmMEe9agqvmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233iWQj8aWPpCVeqeKQyaTCpv3CqpLTcW69c149XooJhdCypWzWsgxFtYRU8kodLCcxeRz3nec6Fx1c2NLKZbEuR",
  "key1": "NjYzzb5T3rcLzHM8SZHJyBWnN4kMAUt3PP2oeQKRYojaRYgSR1MDhc9aZBc5iWVSe5d3f65oC1gzY4ExxSUw3zq",
  "key2": "4U7xEizHmu6kzZXyfauSmhNrAXxXDA62D6WCUyB6DHwVKdmZ8u7A5vMKASK8tdhVrKUYMr7ENfaRUUg669HBwYmE",
  "key3": "3iZDF1sX1Dqi6GXPLRT62QurnKiFmJRVJ5fx2Fco2ivcJb9hZb39E46zrQgvNQYc9Nfrq5nYHMeH9tjzHSAmws9m",
  "key4": "9VxyF3Zt8GFfTVucYL8yTwa24c5nG9xs1yFe66RdNdZaqvvttm8N2D33BYdq8piide9ZHZyR8GBUhS1go5kZx9F",
  "key5": "4gDYHAedTnmoDVMBRBtVurXb9Bwavm9d55fYeBZtMym7fUkThkuy4jKaTtVGGweobbXg1WwJByYfh8bDp4UMoBP1",
  "key6": "28NUqDoxtMdAkzcVVkbb6fgurZLH9CuYr6jx75hnd9qzxvM4BDEDUM9g8z2Sd7tCQEHxS9A2DWTqhcS1uTjQB3Fd",
  "key7": "3dbfssaUPHcLkEQh7opFd4FMURoYSrvHTH8YhdTAf19gBsDFgcY1jxwFaRuzMGXayrs57EY3DNKxstHmDZqmkwPT",
  "key8": "jNeYYkGmZ7Whr5Sr2Gk8H6MVnqDEvWt6N7Hu8tj8pzdWCR9CWVcsbBxixnKvhNABg6UxoUpeFsAjbDwaqfJhkC6",
  "key9": "2i2LSwrD6bRfbtnvfU2CpQDpbhu2F9rhsUkyxw1zdQ5GT7GrbSCAXmRhuJJJ3PU8tSUKNnMX9ndoB8vq88R9ijSx",
  "key10": "5s7LVSMoToQq5w6kKm3vACZumo4v2Tu6bsvdLZLy4j53L4MKJfENpDKCsYLa2dVXXq7E1KPLv8wdL6fZunVZMXKn",
  "key11": "2hoC95GhgypUtQD6nVToQbCYPsVmFYwxpP75MTjhc7ebhiqQxNa2NskPVuJwCGbJHSa2oTvAhRUpXKpDTN6eGy7r",
  "key12": "rhh5J1yS9Tm6qMqeXCweC112ruDSdYSfj9vDHiUjkZgvZETZsRLZzyR2NqiA9WLVLyxHEqXmgHgYZmnUrQrUM6W",
  "key13": "3EpzzQD73QryzvXzQT4YdBMBB68TmotAnxC2cS9EDuE4vsnsPwQGtYm5NDfXeVAQ99oKdCSnqVeFHBdkAZnJG6oL",
  "key14": "39TEhxFeFfSFwmdgkhnK4AYKPsu848NXzdYW2iDSiB2thVU65FayNBs1jXvax4FRtFJcfU4R3WjJzTrfWzm5rbWm",
  "key15": "4GRcxMNcQrng6iZRFFYqDNBVwHVnNAfjFuBJSJMy7HvPQajtMksgz36Fv1oxbTJKLg3XCbAyrLFisdDJ17StEFUg",
  "key16": "4uPqYwh7K1Eq3Y5sLez9TgBWzEkzCR4JbQU6mvQDMAGoht5YUCkUTW89Pw9uWXpgrQi2XGVH3v9SH3r5cePjjc8s",
  "key17": "54WPfRn3tKFbUTCVp9CrbbwSnNXzkWTtMnnC6sJk9Ebi1gcorhmakQoANSmuXeKVfuooE5drPuUMTD2wxEfVYiMh",
  "key18": "DqWnPu7UpoTjrEKFqsHfRvkjtsL3DoPiyU1kyajWXfVMgoQRR95tYRtcMbHa9Ytdhp4VAqzFyYWuag8b1SH7njj",
  "key19": "2TwgyS8RZ7USJnNRYznuAQ6ERcqnx95qrRxKnkEDi3arMke5A7WFJNh3PhJCXgBofcZ9hku8evgwj15FVFWkfb5v",
  "key20": "LLj62r8K9QmmDzBN3EJHMukAajri9epHTs3uSfqqTub2DNHLnUsZfKV4cZTKvhAP5wKREV2M62s2rYonydyCjzf",
  "key21": "36tEGqi5eGhcYfK7sFWAuhd371Vmite1ji54u5pSZRwrVt2zNCnaS1pAsCyEzu1fDuMv2h8J1Re9uB6vzvsQbtEM",
  "key22": "4ApJFwwgTgptFFY15SLRoA2jY5p1zhFswabugCLWNFtorQCxcAhBTBHRHYnVZtLKd7Z9LRiSWVFRgUYWzQ2EzEVe",
  "key23": "5EbFTDErzn7mBBVa7sMAJyy1j49zP7P8SaM2yFzSbGZXyDt38SjHRDpXBpGkB8f1zSW6MSytKh9b9FWu7L2GveNR",
  "key24": "4yLDg1ZFwB4wNFUVGNoqrsRKjGZVMznm3zg4xNQF4qcKNM6sZ7gYhDSuP9p6uQDyXvLLTvM356JXr2TP2R4uGsEL",
  "key25": "2gviGVNnp46jD1wwrujsi87ZnRszdRuxKJPCvtCzLTUWhHM8LCmVt3fP7K2vxqFYLUa19aBe4BwG8gX88ZnD7NYV",
  "key26": "4prAQ1maPLMCPSRxc4zau21kqFVhc5cy9ceEVUzfZU873b91qSnKN6M7YVd7B1mDaew3EULaKbJj5iNQ7CJQkUiQ",
  "key27": "5E9g3CGwzSAB9ye7D3pEb9iKaZLU9PyvZbjcUxriBbTEYKNfa6d6nHTBYAmCeaS1437Xzd4P5xiDSoZao579cmSY"
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
