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
    "4u9oMGjkNHjUaT1MzFdfZaWqnjo8f2FT5UW6dzBmLT6fxwrFVoKknBZfVZHvJrYrBYtBtSxsBuzW4z6iQnkWiFS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2Q7XHjghtTAhg6jasSCrFpz4DHo8DAs8PsJHteSBH2UcRq22KcsdC26R9VC4Ha99uyDpAQmBhYU8SPZ3ca2GJc",
  "key1": "xdVHh6cn4HDrmdX1HQeRTxbCX984kDEvjmB7w8nwN51k7cZSjCZy5oXxiqDnprpqqUybdbck9Qs8VoZSrA2Xnii",
  "key2": "5YvmBGMhPxQGjXgDg4mUSXucYT1JUnfrjBVijMhZSr1TjHuP6c4r9F3q6ASdULsNiHF2NdG67e1zDn6EoXiGvzzT",
  "key3": "PrFqtH8mu2g5gTcFsvuQ7E7E2SPibR491Z3ApMZc6E6bXfJGSUw8dqyaUQ5WiW4sYNpGH6LsWnP4sTzVN61zCqi",
  "key4": "5xWyqn745do19KYNYp2MFk2X4MN959FEn4aabXTvAq4ehiFW8Fzp17iYWDxHHKYHTcbh8FTLuGE1ha8pChGqJaqf",
  "key5": "5X3xL8WakSPghxHNmG2HUV9t2C6AcJaDSqFNvWFQqRNWwkT6LijE7557VRR9VKzR2ixR1CnMv1UenZ9pk4rtEL9k",
  "key6": "2pg5dSxyLUwDjbgsbjpfzY6Zr8vY77cqooqBpujAjnH5HSeN9e5VxAkFVMg6NSeLr8pQiTK9oZsbBL789y29pQub",
  "key7": "4pchr2FcM7WFwKzHAGFGororgYhbH1R3spFko9P8cNpLYYtcdPVaqms2Ayqf8LsC5TDgYsxsdWhybhbbXLrnf64S",
  "key8": "4vgtfFhC9hgLW7mDBANBHzPaufHrjeBgiUNg6mrWsoCQSamFCGDpyS4AFWDU28ArN1yB3XehaZCPtGUFy9HmjjsH",
  "key9": "qBqrUoyPBK4MyczKv1bqFinAL5kwysf5kjAWMVdZwZdRrTWiZbPDFzhKuVpqHC2cKroM59FYRzewJrqH6FoN9N9",
  "key10": "8ppGWZP3Lr5fDmpSqyQeSHgtJyEMwXjfXuf8dYx96kf4Wh7pEUrbb8UMJcAr1CbyBdFPUiRUYFqioYtHzXAY8BY",
  "key11": "3X3DvEREix6Lmtpmo7yvSpGXrKW4EVYC152T1YXzHKmbSf5W79iDKXMBh3vgGYLidawdZBbpJVLQ7EcufTdn9zXZ",
  "key12": "eNZc8RK1QZryLnyKKwAjs1rKWGKHNqTNXuqH2ZJMSv361fxe3GRoPQYjHtkwCWRSPJLynHp2vVgEfvwf5VomFXd",
  "key13": "22DuCcyrvFsSLjk9omaQPygamERt7L66D4Bw7gxGVTnrNRDg9KxcdXva5BveTcRhE2NtkHddf7z9S9Gd91GKnsDv",
  "key14": "3nZWy7L6xiggL62ubeUQ4TvtSdnHsFAQZwzs24bYyPa7Y6dCno1jYK1Kuf715MMz5q91a4hr9Dt33btzaTaQmgxp",
  "key15": "45F3ji1jVYQWsQvzsUc7k5oS9mqbzQoDRmfBMNBgWy1GKnjcySr9QNcErgKLk8Ti6NzwzQ22LwXXTiUmbjnNpcy9",
  "key16": "5qJFCj7DzFnXuoaf5hoUBV4wpypjbVBD4PLCH5dmsdQMrYNyyjcD1sJUmcvr6CV1ixp3PBuJr1sdXUyVfnmAaojs",
  "key17": "3yHUYjycb4YpVBjCvXHXffxaeowN24N8mRPtukghMWhkeMQBz3nJhhMYnuwUmZpBN2vf79sJWE9vEy3Tym8R9xxL",
  "key18": "CTWZEKfJUBv8e4P8vde9XC9AzWqUUBu3dipvF7jLSQzjfShTPZqH4hp2CgpjCbiMvpAcPc2wG5BCSN7Vw73tjVK",
  "key19": "5rN2L4gUVk3JzFkEH98udrGdySvCdzKPHtWoLcd6H3itkDVsSqzSXhZC3Xm6zWDN3YGdEY6QKCvZuRxz7ZS7v8e6",
  "key20": "5wxzZzK9Tm7ra8TXKqZT4uzGfyq9Wzm9MVL8StfqFZxHTE8zrutSUrMMDbGnc4pkAoLjtC5cmCFcn42zfvCNw26d",
  "key21": "3EZTVCg8mMALgaN9RRFvgH6pVLWRNexkxeUvSkDDHsGQM1xbs8cvcmwUZzNEKwk8BFwDG7cVZu9HLQdudd5d6Fgd",
  "key22": "3XWU8TyczPyWHsgdtzE6H3sTquv6VfowfLZhXeCXMrrTNb5DSPfiLHjNwisberCWSA2VGeybnCpybURBDTxYgBXF",
  "key23": "3jiEUa7KdMMc7UaNxJyG8PUxfYUVcqL4UdKy4SQveLQ8x312LK1mvf2sv822EtCjw22VTzWfvB5NW3MNxTbjteXc",
  "key24": "5Vto2ZxP5aRtmKhGPf37cYdqCK4EQeqjerwYyg665LMqJpVmkyth4WEPBuqyJRd2B3wsPX2kx7qwKLmzQ6m7rTgu",
  "key25": "38eiK4Tjx5APLzwa53jvGckzaPWdKu3KkshwjU29H8oX735K9d72eWog4uCpe6DTbvK9UezUE6R4TsZmFw1pE9vk",
  "key26": "F4DKmgjbkaHJrovmxAW9T57MDHAjeTVxL4HC7SguRN9jT9hpyZ7q83s7YLUQoQC9rcBFoM6FHybYfmmXnhdV47S",
  "key27": "24jDQeXBm2BYqRCk3c2Toyd57ubytRV7431aq3aCcNutKocu1Bm5f9HwB1rrukDPa72U6X8ZkjHsPCMuVyPQirPy",
  "key28": "6TFMc2JmRU2vcbxV1wh8tZwaLGCHpzbPtYMZzVaNd8PRYW5AwG3yGSJdMb6LJswq5qV5tiCY2CNf9WAwE3G9VVJ",
  "key29": "2uDjuK1dRxGWS36JaussAa1k7mwxLowyJswhc7xRMMw2jgwxuF9Z3eZRFQmAPQaAxHP7ctiMafEiLczETHZ1KBAN",
  "key30": "4AWAuknN4DA7oSpQ3zfDabfeNornzEfQHrfZMvgtMoJDpvBrFmtTZzCaLnve8SVhpqUjEcdwHiSoN1h8GZHas5Ek",
  "key31": "RbGASeN5MnPz36kC4zAHQw54e3Bxtx8xssZPSCYpnSnK63xfwcv99uPzm3JeXxz8vCKMcpYuz7xs9sB4oNqFwhN",
  "key32": "2CKrmycmR4Uvra7TX5UGX49vtPt7L3VfNaqkE5qkmmCdBvJKNqivL2BXhH3Qxk445eHpnbRYLb9qSELyHTrYFo4y",
  "key33": "2WKNSv7x9uTiR3jABV98Jaa5pzoK2hV7ELzph5ciZ4z6vkn69rF7MMmLjtZGsfL4HhSYwCf2wjk4jzaTdQ2Ye8Y4",
  "key34": "2PsZvmyvsaireHXhg3VLCHodR6cxbE9MfrKQmZFF1jC4y1VH9g3FhFiUGAYpgM3D1xCABCUa5bawkGZdhQzyRqiD",
  "key35": "2yWmzwWc2LAePJS2R6mBvAcuGiVBJYtqVnC8opCDoMyzPo3e6aMo8JNynJDG9wesk6maVntfNSMWsGHdr3HbXLpH",
  "key36": "3RYapvt8yzQhLfdnk8gYb2WbKXz8Xqf2ipvJn9y8G68BC9Rhu4CfvgVSCmviDcHpDdMKtNjG7DKQPQwR6fKQQpjq",
  "key37": "43e3xMSAedcYSVRqCsbEyp5W9vVpaZSJ9ZGs9n7UhK6gud1gM6BcJYHFiw7M2Cw9iJmK4sP6eXHNHRGD9mj86e5V"
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
