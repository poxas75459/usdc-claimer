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
    "43jbrpAKHYKBcuNiVyfyAaJTXLBfnmP7wTneaQJfYM7WSarvvJCTaD6rEfx1D7FLWkkKjagKC6H6WqnsHZhQQkp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "662DCd7L16ZgYNWyupwr3kUqDQxZuiQuDoVwCMn8dDiBWkX55Uin9bdhcgFSU3tZeascaf3nQHhQemL6kMzry67b",
  "key1": "2zbpTwW9bHZ4ENQnuyXNnpPuNkmQYo6Ay4aHGD1yhDgxq3WfMxcs2L7GfGHzgCCvv5JugxUMBgRJkBJXemYQAm19",
  "key2": "5saBSAf3vzCjRLa7Mwbk7KjV5ZDz6cd4TWq6ghQKeKQnmHxZdBRPfG2VZbCZrqnjnbqUSxxJKyarx2ChgQ2gADZq",
  "key3": "3US1oNxV7BhFtHr2bcXMS3DgCdXkSFXogLmaVe2ZaokbvWWzQoYv7ZPrugNGY8EX5JK6ccSPR4s4fua369JaUwxi",
  "key4": "KJFiiTFVK39SW269ob4WqUjBnfEqJA644uv3BKWo44FXwVpTqDDSbmdu8cpY2WYNiJ4t1sGF3TRoGG97GsX6KPU",
  "key5": "2Sp4V8acEaHkwRh64wADtYBopSp7afmTBiF3ZG4URZiXY1PN7XAa4tvmtgqcFXDtDhrE6xht1qhVbkAgm1JC1hfG",
  "key6": "2qRce3VX1XTxKJw12UcPiCi6azGGFfFtmF5S4kPopwkjRJRELW8G9UskkFSegSKWn93UnqnVTbmzY7QiSUZKA9oR",
  "key7": "29mveW1htyfun7scrMq1TcBehmNtWDmGGqo4J2K6KbygVFQEyycF19a9GA81t4C7JSZcSLgAqcQznNeT21ABMF98",
  "key8": "4x5UdSRaaVUFfSJjtasv9B3dFHqHGn67wSfbp5rLUBkNDFXGgK7zdiis1FSPc1vuSw4xVqXasK7ceeNJyjFXbGvg",
  "key9": "3L5rG1Uy39hCSm5AaLAXk928PnvoJzchYmNQ9iy2SrKpMF96cehUB2bvHZJdAaAjBaZvwUeQj3KFrtfN983rYTpr",
  "key10": "3C5C2A8Fre86a2iAEaSazA83zCYjq94jrMuCwyvhHDp2JGkZqKq7PD5HAUooBkET7QV4e2zo9A1vhRuuxRv7HxXa",
  "key11": "VdFRNs85qnAErAsKXjwm5ozah6EaY3mnBucVSmn2vaKNDMVgsQjz9tooRcKvuBk9Tp4p4iyxZn9RrdSj6QTsqQn",
  "key12": "5AU2Ui4MCYSu3RQ2yvywUSfdLowV9d3VLmVJepdyBm2hKpFLE4xs4tHpkDkPmNpeJ63ZzcvVbRhAhjWuLuQqGJHD",
  "key13": "5Y8b3gxVXzBS6sNwTFnkHfgVJfUuKocRhESDMUKiAbhHWre5f2ViCUFMcPR61szvMTVtjh2n6KPXPPujvt5htZBZ",
  "key14": "61iJfe2H7CFBG3f9deoS73SuF8LMBZNVZsAnfFu69aJkum2oaMpV2RJTx82ZgZk2xffKnHFVdqLa3pBv4721uChn",
  "key15": "5JYxu9UWGCokRzZFhRbpJqoqCJnaWmsoKqTUgc85hA6CgLPUcgYNGjMattb6rRpBBcKwYh67WM8ryB5jT2gemzHY",
  "key16": "29QTP5stS1BSWzmdBjAHL8JrsqqUApX7wuL1pYS12S4AFq4XLKjzBeTSVijMm91zD7tuBvhaLoksCJdFvidqLWnv",
  "key17": "5D3iooxavDt3RMGMuqmVSkvv2cnTZEhyGxWqnhBk2U7wiQyrox89C7S3gHGFYehkoLrqELroXc68hbFkAgCmjHH9",
  "key18": "3cVgYZXNubsZbS4LHt6bScMs9NWARLnsFjxp94uXmju8XruFfoe4JcDJGEXRVRrTQSy1HQ7t9UHM5aXvqt4VKERH",
  "key19": "4Tg25ZeVXz6o9GTaKew3K7MNQ1fiJqzWtmx11MeVmwiG8ynjhhn9XadnMQ7dMJaTput3UJKqmaEeVKRhxws2CDWs",
  "key20": "4vYt24PraZ7usJHE43jNWhmj2LUusJDGft6MwMUyE7HgT7xvWb93PHKJkUR7xNDT6SLPLMQ45y786cQAfCueKmWQ",
  "key21": "LnTm1jGfg1jh7w5uRXZEQHGnKGfAjdkxdL6VeaNG4xw7dKmN7EF2gSmxu9ghWiAK1TaMkVHQrRyJA1GzCEgAb6L",
  "key22": "yDU3978sU2m15RR8tFMGKHeLpYSE91Y7bxG9dNqT4NtatwLXiFdAZzpfE1bAJtzL1XiS38ygdjbrL6oKuE3WCe4",
  "key23": "3RgiZctPzGQFfQp83GZBhbM94P3ko45hbCRDasGzSJjf8EdDYuhid5ehKarRWEPTPWtwtvMJXTRiDiDjaKZXWF5H",
  "key24": "5AApxDw9Ve9HNs97wNBePwAgi3YPWuRGJWT51UWC2DZJ24q1TgoPHR3PdscKg7dd9c2eeiKmd6nrykxG95S1KASv",
  "key25": "wwC4oHEcTiY5rEbgQv1trBgk3zVxoaWFhF89KuSpjdrEQUHNpy6grd8iQLBb9QGnjAeinPAXCWbbtRtDdFNT1ET",
  "key26": "2CpTM6o988RQmVwQfgbsAXKtUGXe64YCESJZyQjaeiKyxd3vvvAJJgFXReeaVWB5aizsnLPz1nkTmFJ9wm2KXRkG",
  "key27": "3XzrLtstaXdRMhXnxHSMofrxDzwhFCyFEnx6YzosRvSmkVMXQF1M4svv6jgu4mggzy8Kt1KCKK6o1khPAEWDGQbo",
  "key28": "Jqg9L6Q9zE2yBusuwxKE72mQrtmdusEjyz6wnnzZTKCpcsQYAYHpMsL5kxhaUGeT1jPDvFB4gJrxwTbifPUXRxc",
  "key29": "4stcxU37bZsq3cMdeFYEEwnvNcKGJbiZrHVHWdYRWnSBJDggQMD3pxhop9RTSXzkFqiW7PXp8WVeg4pM9RjTrfLP",
  "key30": "5rZRqMpG74kZsB9M36n9PFtAaW8LrYMSr9p4AJVT2p8zGzbqQekvgFgLokf24mmMqK13fZFHeCSTkUbPNjp78jcn",
  "key31": "bsauznErohEZL4UTDn1psegrxBkt2zk7FFZAU1M6PSGd5wicaG2jzxAge5G67XDWb77mpaFjLqF5q18ABN6Tps3",
  "key32": "2Zn1ad8oBACJhG4DsT5hWYSjumQ1BsiAT7qES7y6FWfBfXu2ZrfEcYw1j6N2JcFunhzcVvivuGYfw1CXvmf9g5T",
  "key33": "4coCnhpSyHK8nSoHvEzc5p1WJMPcAUK4iNuGGCNb2zXAbXUcxWpyAtP8PB1Jbt4Zma4GWaAQxyqkN88jTp8vChjc",
  "key34": "j5wvVqChUhWVK5c9peoX4a8xdmjovEvApD45cDCvnuPnkBroj8mWiWNnP71my9NKTne6Ejk1uBu8BHGZZBSkZGT",
  "key35": "3d3eD1CjX9HfDHgTwnFpXhGz9vP9WWQHG4i6P8Kz687A18HsUUBnPB6YfyMzQ1mMkZZ16AUvFkHrFi7PDUuGpp1",
  "key36": "3HPNYAKC7ZFfAHj7J7haTqEsSDpaHzizbehQmjYKzkKH5U41F4kexpGq15oNrhhVakpn9kP6UAtd6PUVVN3Wose4"
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
