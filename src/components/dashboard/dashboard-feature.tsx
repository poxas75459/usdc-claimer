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
    "2xtKQvAAiSGYG7quof19QuCHHvDgxhMzQ1veffY35Y2HLidDaaMXKnViNgc6dABkxpy9EASsWqtAB45efPz3ZwwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fpdUdewTGDJDGexMNnhR8Gpsnk8XFxNwYevEnK8NTyjARLqikAK3rAyPFGvaxc5p3rvFJHgXAEbcqZiqGX22dug",
  "key1": "2GktiXwMjstG49zgae8QjbF3N6UsLtfXSNteKv2jjaaerPXdFJLHSxmXEWZS3icvgJao7sP8coM4cn7qjpwf2Q1r",
  "key2": "yWJNE2VSS9GmJR21Y7MEUoxPdWYZoQT9NgY3koHnbE7mdjTnBfzbwucC1Be4k6mkYfq7MkujGhPMpvi2QiH75nC",
  "key3": "4wc31Jn4q8s3WXedtYZuDHG5JXHKjnDBnZH6bVFc9tTZVyyrcb7x634aTKRbmC3tWJLGVeXgy9si58xh9kv93e47",
  "key4": "5KxdBNzZvVve5pyYBGcuVzh5Rw1ZN1zDCMGGrcxM7DBuNbKtbfSBkdJXtzvaCba5SgZXpBgAm1RcXv7F6X1ghdLA",
  "key5": "3iZGDVMQm66Vh2x8t5SqmQJ1BrMqrLbdjin39SLFN6yfp2qRctXdS7kX9jG4AYCcep54Mi37Vjcj6scNmJjyF7zK",
  "key6": "4CSZS4huydNdwxMqvzRJ5qEiQejLmzsugBGkjgfGWzgt96v7fKRQaVy9ugBS5uZdM8VYMunqZSS6BvNgovCGGyBb",
  "key7": "33dM1shhnZdVceF8Wm59tuyGt8dQr8e8awtF6hCC91mA8NqdTm3TRXPRfmH7MVKrnUKNKrxrggUniKaXtZnSqsAu",
  "key8": "5BZiqaGRsKhLnzsPNEQRSn1e9VnwUThk44jS4Z5noM3UiRaMJAvzby5tvgMvi8QUrnGeovesd9k5VGaiprnqzemX",
  "key9": "2LL6LCL6rLrPi8uSCPxgPhWyBfsrF6LceAPKVbujjYoAHBbfDPbVHPQGDmHwwKfH4KfME3cXLkLL1WWaQyrP13SP",
  "key10": "5R8ehSZhKqFhbiWpHgGtDdqyssG2djn4dyyekdbQgEGA5ZV1C6npFKzuNVcyCVCm6NXkdEC4BD54TqwZU1gxtY7z",
  "key11": "36Q8uMaJdUMdJyirY75m9LnGNkAWd9QqLcAuxqP1mkWkouEUMYzMQkiQjg9MKhkRGGw4wBf97ofPHoWrkjmhbUpq",
  "key12": "4WagtuSE2SagYsmBEXUjDwSu7EgWsLkjDcwFFPp8CUdx4C54fbV435S2m8yGYbtEaHzhowqvvZ1bdwyT4MYNwKuP",
  "key13": "5HGqbH2JS9T6mUWdi7PvvgKjUTwkNB5gP5p2aDUSVhQnH1b6SiicXws9eeXWoSp3MivWbWjLULP3hE2AabnjUEqX",
  "key14": "n5WQKdVmy457dDgwCYGptq7zq6hi5BnCoBjhmmdhQrGxqoXjvVTGcsadeVG5g1F41Jfy34X35fhm2uh9wYtjehz",
  "key15": "383CVnSfMuHwjbwy8NhmSwA81vDZhpARvRBnrqSLWa9BwqaxyQizn7W1QZDkmWWZCX2AGEpF5NrxNwQ4zXEiVs5b",
  "key16": "hxc72xU4ouNzydDX9avUDTWZiNekPKPxMoqQrK62CxYpZUp3zd39PV2oBbAKU3Rr9YTWwgnDWqYzaTP62a39Dap",
  "key17": "3zD5vMq3Mkv2KJdPjafeftfasgXgSZfqxiEZT9ZSmCWVmd9MdPV46g7frTWMi1WcYRHvuh4nY5SzELuiVhat7ksy",
  "key18": "5e1oj18aKAbZ5f7TgrmGVCLEdUuTojwYY9VNbYqAUNyPrzNYchXA2bC2HkCtFpgUm6TfDbE1LMURSZSZZTRXkSiY",
  "key19": "295mFXAnFFRTia8muWUN76mc5P8hmKYdrDWvJ9X4B9khbmHDAAtENL7bmqQ4TQgssuabZ9h7APiZGh5rUK2j93mV",
  "key20": "2G8t4shtki1o3jU6KCGoVYru7yA3jZL1GatfQRGTsiZxamyw3SEa5wow4S2bzizjoTWotbtSxaMuUoZDEMsZpvpw",
  "key21": "2TbKqWr2knMKLzAzox9eeKEnssRhTDfgMB8RmAZNvbDDowcfftj3cyQMa3sm3aVm2kdvTqkV8UEppyRFawbrqekd",
  "key22": "28haEb6jyzQE5PWJDAY5DTqnxexyYX2ED7Y1txhAYCGnM6LwgduwaPT5nmNzKfCQzbZCS2Z8R9RcK4kyHZb8emAT",
  "key23": "64rVBGszs8tZdYp1yA5jWpMVoaNrgiWh6eZbVJebryfBdAyjwfynWEfkhb8btQfWSgXfkDoHCJRCeb32nTCXaDbA",
  "key24": "3PxLGii2W2mymDUqL6K5uycVWRRuVRqCQsXMVhdk4UhieijYMSsqERUSbdgrpgwyUcxkjqQJHuuhU4pQtTE9BrPu",
  "key25": "2HjcKfRk7hio7h74q1BZPHYzCdwRCqAZMBwAJqRQ3tWrDC6EmQHGS5hx71CrappqF8xVgy7XxYXRPt51xgV9HhYX",
  "key26": "2A5j9hrDQnPEZS9sF6pn7ue2kXN2jaoFdX8tPcpxiMjp71XD4Lsq1aR6m4VQyZ9Gwca4dSXNz6JTYaJyA5QnFzgj",
  "key27": "4ofqBpZTC7n3F8njGwmJuhYJ73EhQqaRRbs8UfTPi9SkSjRmcAtGPZWxK2hGmRQagiabrZnLfqpsq92orkahHK3v",
  "key28": "377sHiTpztHcmpRQ9iPgmg8zBkKst8SFWtEw4p4cJKjNngW9iurDP8PW1YdXWi6UQDFzFRxp5QekCGDimLQSXVvz",
  "key29": "d4DEJpHiVHX3CJhoevCu2tMCoBMsXjeod3ySzR6Jsm153QCYYqSrhysc1hwNDgjxqwuv9yNWb3v9qpm7CnWMkyr",
  "key30": "5JKJgHw1Ti8Mqp51d8wZ9Cdp7mqvunJN691r3iLP2uifbBHPpRGCJvf5HEqYfxmAndj57fN99JiwKMANs4Rod985",
  "key31": "3qTKgjLUuw1ZgGDisRQpywAHRoo4DxVW5sjDPETvihzUHfAoa2ndtx6qCS9FvJ3pH9J9guU3VMud9Us5Xo76hq2E",
  "key32": "4NA4MC2WLwt6rcjH17JUU7dc1iiovPaZr1kQsMsHd9A1hhJ3z9pJggRRGFWnYasL9KdZmW9dPy5zPkZtVJ8WHNqs",
  "key33": "2UZHRK42TCp7yvWJG7nWfVr6kW7eEvhodVPUGNCq3AgfChUV1Ab7fnWLrVFMEHwGSbD9uDD73KRWb1ikpjKCyDND",
  "key34": "3Pb8PftBRPD9GsvdMZa2Cd5y5KjBCAi7tLWpx2Ccw5jamBpMXQbJdDR8No4psb7cZgoNw7PLGfGEQC9HbwPKK2tv",
  "key35": "3EMqs9hbUJcMydNdvtK4s9UpaUCJy2Nz3qdo3qqKjBErLXpjUwqUNFDMyB6bLVVAVPco7p6AkNCDKduxfrwth9tV",
  "key36": "XzwkKR9kCRGT6SSqnSWJxLURSE8B7JT9ZunHGLKg53PRrSahfxm6PwaSoamQVNbnFS7mMVBmM3qwh5V6W4873Dq",
  "key37": "4S1qJW7egBBwvLcSVsn5XsezT244sW945BeWZVuEzYhLdaFKwMhCormRjTvtmiFhJdrXpF83U59bihDgPwSHEz6U",
  "key38": "vyZ3TtcdcnGgHoSD6BtZVR5Augz4te3zhb3sMFWWAbE2LmdqRe2GdkKfZTUZjmTU2uLLY3WH2pkcxuW81RRVheW",
  "key39": "3efJbCYquoYXLWyxJKGRo31Qis27EUwHYQuM5F37BvsYLxW4SwcewPa2PKtguzve9ktaC4bBRu7cgxpcqc6HWYRR",
  "key40": "5LtZvFeuFmhGyMbRkoZJ3mqc8TV6jeqMUrqshBkVpZcUg1aMX4JSFjq7Eqzo41vTc6sDBkdLZWUYAXxnWrNCDHwz",
  "key41": "21YC1WFAzXNG3k2on5fGXEQ4jwvdGkwvQviX9uWGw52DLK4p21qqhD43Ne6ovKETH4o6oLzvFuPjZhfpPcqvfniZ",
  "key42": "QnUhNVmesDBVgULJGddar4wd4bbs6ADQS3n1DdhrdCqBuHm87M4YnkJv5G9e9PcMbTUQPMj4mNsJK88B9Q12tTH",
  "key43": "2uLGATbWkVLHSwcdarg34WtSdUVZm4Ka6AvXD1wVJrw5wPysu67D3caouYjnA1jQkmtvjRRu2CRt4fBpxfTVbaV6",
  "key44": "34KYYa6trUTNL1ajPobwY8sjxhGpvZ93PY7hWsBgdQ4AaS2vZep2UTXPG7isMvZx9LYwexDfoDZ7dDcb9hyt26aL",
  "key45": "3yxgU46ASLLGX6sJmKxXcC8gahDkAcYrfZDaGWLNXhCUxYcm4dHiRv1syzfyTXVBbyeGB8GAeKbXkSPmG88BHgCo",
  "key46": "3xgZFSKE9Hgio68DTBCAL6VVW2mamPF6y6VScSsNMifwnHkfk18cvzsw6KnBxrruGiUBHRscDxFcZCvEFPpQtHm2",
  "key47": "5AWjnfwDvodyLzMu7Hrcv9TD8P7hSa7yf7ThaVCyJck96HN5m1PKUKrh2CHcwdpbHb4WJhmpMPhDHCNfZ3ZxUBV"
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
