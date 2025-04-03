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
    "411hpBy8vDHHx8d8eahgx39AuUYZPpGDmohCmNwBQ445y66QvMP2f6PNdAXVYWbkjRmTVdo6CYNThFYn1BMhuWGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KA1b4pgPTbqCNgtQNd63qGieRs4D6R95wFiGCkKytJjT4UoKiB4nXMSvZ9xsdnwvauVVatEkSED5wsCaAFtk7QF",
  "key1": "5RSEXf3SdLnECbc8xuyRx9hZNbF1qJPuQYGUn8M8DeXhtY6S9e21BfuHMDU4dYKcHiT7zpfMYyb5FksmNac3Uh5R",
  "key2": "2D9YvByXRatMx3fyLYDuiQ5fC6Gs9pxMPHSFexpXEkSthybV2CSJwGVzdCvag72yDsm91rbnkhV224KkbDhrZiwC",
  "key3": "5m4TTLJoXqyCN1pNTYyx5K2zkrpjuPzipKn9wTCk2wA6M1j47G1L1HksRiKNNSVEVRExxaE7aMVJZD8FDGjicW7",
  "key4": "VyLRb6honHV2cHmn8sC9rMdJbHGEUvAEofVKPVrGvyvvdD9gRgQqBzY4cecUFTQ5RfY6GTRP5xGZS9mDj8M6yi4",
  "key5": "4nsMW78Vp3m62D5xLrKscx9i6WPvHDpeCjTJnucWujoEKSntD3FzEnKNDCu2npZrn93q2VT5HkvgcpG2C7NNp9AT",
  "key6": "62JcanHwTunHZqc9zMZ4WdNYsayuAv5QDXkYvnvNG3FqnFw8V2pKt6vedPww75aodm5nENXhzxYFc7upeejC5uUn",
  "key7": "61rXwPK8zSfvoFQ239y2kJCcoqbStGvg1xMZYw1Fq7qQ8nf6BL14b6mujvfu1vSjGJp9vtnFB7TbPPB586MB3oJh",
  "key8": "7R7wsuRVeYnZ9kEWgxVzYZm6FmDVrKnoWRQpV9uUCSy6LrYdcjL6DqDUpKv8FDUNjuNUGThoSsBkNAmPrnbLHqE",
  "key9": "3Sqef6755K717wSwVys6ac3mD5zke6FTupwv1rzjUmaKtwRpZXgqUK2gdk11nipj9HWjfvEx1Yn2SQKv7wDyqb1A",
  "key10": "4cSUGvHwU6schKvVbFpjJs2nuB3YazA48TdiRQozkubwZBfVvNhDpAD7JWVQe9y1EFiXyAXqRmBzbop8dhrXTCNg",
  "key11": "2v1yZjRRbpufioUgE4zPbxvi7iTK899i5tor7yGKvviHvZAYw2mE3K8vMxtL2Q8CCg4PvCXHq9FtzE7x8ipTXdaB",
  "key12": "U2J6fBL9JWRHdwk579LZUwKLEzr2SM7DX1Bs5bECoPsAmhxLRW3DF8fjSH6HC98SgmwkdkjTH1PiAwwgtBiM4um",
  "key13": "5mfAFbszP9UcprDbR7pYANJHZEQxvVS1TYiSKdhLo7JVGvjtMv7wabZR7iyMEgF67uB62U6YWJXrPCvyycWVgehK",
  "key14": "5g8Mg7KRSLtHLZQMd1rHzeNe5ymg1oFtM6CPusrtEoSUs5LdHa9DyDAM6yNLucMwXH6enCnxNycpA3tkMMwwLD64",
  "key15": "2fDGtKcjpnjpQazKz5BHVEcC5tSyXxUyVGt8PraKwrXo5xhCdR991bvzyEgVrcjE2RwVj8ktz8DCnr4GQHwAJkSh",
  "key16": "2BV5Lw14AF8oKqSR4j3wDkjadt6xPiZioPXGqRzucooAqrMMwpps4sDHNnXLDhBBQCuu8Szg3Gujwd56jmAYfKPA",
  "key17": "4ixU3N6MFv6NwKTAmuquepD9EKMT26tu8uWfSUcrR7sridUvvUTLeF4t1qkdRpEap3xRDpbPgzuhZZAGqKZXJ7Dr",
  "key18": "4rhEYr36eK2PryShwR27X4jU2nFW3BQAPRQWoJEUcYipEyAnb3MVBxo9gvvfDnARcGDGvMxcoFE7aQwAPVBVkzBi",
  "key19": "2YrNhVo9JTKXaWGXU28RNcVnQeohjd953TZ6YTkgaRSAPnRxtkJeyRTAnU6gJ8u6k6AconXvE1gkcAha8cSMQFAQ",
  "key20": "5fH5Fq4m7yALHxqVS5BLa3ZnegtVURGxn7ioebVG6G2hJvVVuBPBVE9xckrFayLGXbHvGG2jY8x75ZeU3EWCRetF",
  "key21": "3HsMbyo5RbYbbt2QBWCQzCMv78Majbx7B2Ygv1WJUKHhZ5DZLLRnvEiZVah8JNqEWCZR6QGvTnd7JaXH5h8Q1bs2",
  "key22": "5tiDYLSw4TXpPT3k9HvSduFymWjr9GnUbyL1jYGk43ERb584rTeoGnoVRRD9nMidkrbEi4uDzN1yteU66zJ5saGr",
  "key23": "5jCwheZt9etxTkgcgoj7fDcP58QGETzbfZGRMWVN2WuAAVyu1EMGu699xNkxGuzqe3ZVCiYyNdoB7J9CA66ZBBxW",
  "key24": "rnGQWk7kUP8w8i9xMtWZfu4jdZgQsR3ERANdU3eLpt8ckwyvcd8hDZP54oJvFdFR1q7gmq34bT5TcLb9ZEZg5uo",
  "key25": "3Zvn9iyiZ9UhkKM2Pj48cFEm74wKCrxNzuzrb9HC4oKHtym6QRGBFcBUNUnApD2ibokdU19FxAsehceexcejo6S1",
  "key26": "ZHjDVHUD1AwM4ycGLnQ85aDY2EStec72erbotuQf7ZunzT9uAMHaoDFV8JQUjH4NXDH8YrAAr643BnyuK7sqtPS",
  "key27": "2qR1EY3upGWWS4HjFjpoXMTf7uPBL3nqDLiR3hxWoVd9CPv4VA4pGErxZRHgcPRuLGykmgQC1BWtpaCCgtGvvnNQ",
  "key28": "2nJg9UdNZctrTqMCuJmyMMYGghLyw59Fo7SY1CwTVqGWQc7NmiFFfYQXg82bJG2LEhZgqiYRaLRvuk6pezcMXmTL",
  "key29": "3vhuPjPXCs57eNouev2HbUTmhgPAL9aRjyAqccVNcrZZWmgp1t9cBetmE3usu3Rs9k7wKNMXnxoJJo4Y2iFDQUee",
  "key30": "5m1MhicLKrAQyFe7m5atw5yr8djrWmWPAQvGzbbN9TKosDDNH6GJ7Yoa2RJmzB6Yfn5bp9qofhgpBCrYxCMx2zoy",
  "key31": "35D9WHBJcfTh8sQ5AegeRnsijA1utVgneVQ7QrGHwtWGYVsU28jRPFPJzhTGv8xdSgXmHZMVSfAXYCKBvfnqYRXC",
  "key32": "5fKpfHRNtPUu4CSnSRykA2FZKrGd5eh5vWHzza1tigYNm6RR2FsNiggLLPYtuipg6jPBUwpGPEhQf77Rgg5XLuiD",
  "key33": "4SdgTitoL6f48S499JGQBFvYxZ5DVGZJFJsUa63yFgaz8VjgJB4FufNTCs3kR7MdPWhFDMkrrHmsjbd8XcP7aRrk",
  "key34": "52U61EGE5XodJpe77Yo3EJaXkrdnov28SHWFtix6otuQeSJ9qvxL5PsECUhPH6vQyQEzv7nYJeZuaVXCUHa1d6Zy"
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
