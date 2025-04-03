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
    "3o5pGVaR5jHZSbKGn2EMSdhezxT9S56UMjDKJnQxPjNrg3UVb5zT38YDWo8M9AGyGJ5DY7zr3fVtkQBDLQ18rWoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WvNjWQ6Sru3EoGKKN1UNVtamQurnhUt8QVQiBxUkSDtiTrB5FoUQwh3Xan5vXozYvYtAfwVqfvWoWJbA9icob68",
  "key1": "2FT3dbX9qmQXS11xtkhmhcZ2MK6LsYgcZWZn6Qiish7hMfFe25sDJw1Wsw5d4JRuDbZzv7U1kSmjpdPdG2cXyAGq",
  "key2": "45iRkZFtrRLcmrJDUQetqLdWM7RzQhGZRKVxJVp7NZqCHyJfS7pYQdGJZmWStgA9NYgVyBrca7WLzZf9DZ1YSF76",
  "key3": "cJEzMH2TM8rXgwFT2sJK4ksN1KmLPcBWhoKTk3HSNr1PnH3uEPHHkFdaLLKRdDKNrVxsH3heRdYUgout4S5ycHN",
  "key4": "R9hDmeTuigkL2TgaZ5h7Cg5ami8eSce9NGmSYyGyNp19fPAgRjcVajuZytS8itcQMKjM7VYV3ULKZQ1KxhKXzBx",
  "key5": "3Yxmt96EGjqLLU9YGzngH4ynZiZe18VTmuN5xRLEPQJ9YCk42YgHrtQFFJWUZjBof9kEzQFuykxeGDtTyNZR4UV9",
  "key6": "5rKU3yLbRVcc3boUN2BXkyfdH8azfC6MPyXGtjNNbixhF7EwCxQfzwK6bTJGGT4TwSCBN7qK3sF7t1dnBpoCYcJ",
  "key7": "3HBfdQrA2xUnAubdqU9QhFjV3eXv9Yj5AWevbG8PZVjsitGmZMwDnToBmX8uTzkCkc6uX2NB5Ygsyp3CpRn1k91u",
  "key8": "NnjVcBpt9A91nGv959jbuCweLcwkZTagCh22LCEGEQoHvqicxkxBTQ3cZECom3rYtvz3zNk145kHdMA6rHxJFwi",
  "key9": "2Uedu3HoBc1nvq4qE9RrfWqLUhHrFHFesryGpjuLf37k5WsvZCofCJ9wYmLkHxdSpmWWm4XnxQzP2S8T6ZwnURnD",
  "key10": "4tkVoPzt26be35D5AKa6uimZ7XFFWMeHHcDTnszyvvHhvEtSmoBf5221y8EqsiJUNCa5SoCTRTVpKDUTRfsvwgv2",
  "key11": "4epxYBdfs6RYc5kVV8c226thr9fV4S9QNufH8geFu53iPbqX3HogUQ9jhcAkeowqufVwmX2BjPkMheQXZMRz5AyT",
  "key12": "pebJaR25bhXfBNrRGovyZUmcHCVCLWsEtebJAynStqGzozUucFt6p4HDHMxXXVdzDp4vhvPbEsBKM24RCXuEorv",
  "key13": "4Uu6VqyTDvm4Uj1dfoLNyCVJLbhkSssnxGTPE7Re14ajJ6a3YnxDWbD74zEzVk5rMA7hrdg8utGUz9TWvoKgCwtj",
  "key14": "2HqoAdPmpiysbvs7c5ioEWMdjb7YmUEBFoiTBYs8QG6BQKSBjSsMickZoXMELKxH9RrV8xkaJAU4CA6ZJXoKeApn",
  "key15": "4fkGnkY8QMPpjT48PLKxXEDwzsUJFzeka7rFD9qAkThiojCAuZRjXJXpyt2B8FmvXHqc3Xe1f4PPdVf6UqWVTMBz",
  "key16": "4FVcC33xk1ufXPA9TnXWWzsoxbjdQnVVcbFBQk57a8dC3Swat6kysKC62pSVDuQCVpTTymm4LdmUj3EZviS8CNBJ",
  "key17": "61afm8RBJ1ufGXZNVkxGadCHs7b7ExPoqJKkWNxuFNP3pufuJtoiqvbMDXKptjWd8ZHaKnhNk7JzZGKtAY8NDGEJ",
  "key18": "KmxrRnPxSAr8UUcodRvXU4YZxZx4Db8fRdd8p3aSsJtwVLy9AsxYTsj1JwY9boR4i9RstDfdYryy692KhDXvj6o",
  "key19": "5iGKcnNUuxkZhNVe9VbkKFBxA5u5pe2PP3ZR3qmetmdxAf8t1NcKia2QW65AQLsYbg1dgypAPw2tBowk2aep5MSA",
  "key20": "2f9ieHWbdD4jHeUfQZ7hscLHQBfoNhAvAfxhnTz5UYcS6H5uJUMPeHa37KuZwQPte4N8HqWXyz3wL1ugQxnTFUEV",
  "key21": "286d4KQr6Zzeb54MPtYjHFWNV4MCnnYAqSMRcy1hmLKpKxVzNRDiFeNMqYTxbewyEawzFXUdfNNwHujvZggVK6kY",
  "key22": "5AbbS9MuhyjzvXuUEKjGuX89e4Mu66ZJY7yZE2zinzvUaPXKgqbMY6xNUZ1HRF2sqdHDYo1zUzQCh7Qk9EAfJXNQ",
  "key23": "6ZLrkaVM3ZiVPntDxEUkyWsXKd1hB1n1m6JgYARtq5vWziS1Rzv63Zb2VmYk95nkwiHUqSGgxc3ypsDtmsnVGbw",
  "key24": "2EfhS6XCdB3ZDzPuLM8baSy4axv9DrvwAtmZ3bLZoPAmSR2uFSAtwrw6scwuMVuNCRciYGca2LFV67wGYDvXmJMN",
  "key25": "3sstonkqk4hCJdXUsUHfFjyMvbxfRFGrZbfaMGuMdt4nsgMbvq5WvM7wVA2NRvG3WD7vheFQ7RUTtKj1jUcPSHkF",
  "key26": "22TtpA6xXdc8wkJdYuLt4v344BQJEdtAmiAbCckTwvq3Z8T9wvS5C5RCRLqpb4xU8gEL3QU4rThNAFjWVJpwrqjw",
  "key27": "fo8rmhiT3fhR1dHWJr2VA4DefUgriPwupgWR2FBiSQFyzUTZuhnhxhQ6xKMjcseikhrPse6sb3tgw5K6Bu2gXs6",
  "key28": "4uMFRDCGCQwPPyiDnj7Y6ctZ3qeTx6bHJKTcQoLLzm4kt5WMk85im4E4AHkF5wuAocbFPY8voEwEUfeFX6BvYj9N",
  "key29": "5xNAsrjY4sMW3ttVmjEiecoxtVGFRQYCYD4kLUy872NzSDjJZ2CMDFuLTzvRSrhaFxAzPSxKKPPV3daPWgatWFJV",
  "key30": "4SvjU3522xrGBvpoMkYfswC182cm6HppgipVqWSA1dwhuTXevA9XhccsjAYxab69RX9wxutniBZtTT6Vj5nLp1gJ",
  "key31": "3m443TmRjGaGrGLBPXoLehgvxs2x5bQ1pwWdsGm6XHuuasv4NJRb3h9eC5r49cvfYyiZtZPohnirCnB4LijWUvqr",
  "key32": "3rb9Uh7kUqSc5oebWbatn2mMpphCtrkNt1HVLDicFbuq3y2BG4j96W7BypLQRLStBLmWJeczjQeqUp3jaTt2LaQU",
  "key33": "3aki3ChhW6ghTC4WHfZC2T7QeUrt6mRRXwfHtRDBZKkoBAH2RE3pqe8SiBgLk7AyCh2tE3gYKMckCC2AnRfimUtc",
  "key34": "5Zrjt3VnMxQcBJS3bDLgLdZhoRSJaCzc97vd5HF3i3Ts69um1XLUG9APrWPQJuwKyBDnJEt4bmGquu27pMg6UmRj",
  "key35": "zfr3jGbLM2xyxQd3HsCgFXDZoqc3cJUiZFqqX3WUKHYjSLirEVRcnzMTNNLNnjAi3TyeavcdBQDa3ACJeZaVEfc",
  "key36": "5DsohTJBZiLUKfDMTPPZC9nVKBeAHafiGX1DA38YTZmwXcBSDzymkcpffQDMA38NJCRCyB4QwnDE8qHRA62vwmzW",
  "key37": "2t8XYSECuFSNaQmfqpqC26u1CVbPmpxXgHKkDyP9SnAzeZA3nifG7PbDHQoryt5d6B7ELinbQRwLmi6vnQRAAW3y",
  "key38": "EgTEET5vNY9TmkVr6SLNirUoxgEF4czSAZs2xduGRLi21QnioXDweRXBG7zu4sSBEpKecMYED9TGugcMkznd3wy",
  "key39": "5NhK9kNj9Ukdk6TGnAxJan5JCo6PhnvpwJehCChBeyZX3EtwM9oFCUb8DSq8JE7avcUus9mMaHfQGESYCoNDj2pB",
  "key40": "2sAwHPFekTC9iHD8k48qGk6aKoGwFCvReRaWsLFs72xNixD5PFjvia2v5nuLKA96KbYMv9JR8EWekY2yMm4ieqS9",
  "key41": "5vP1XRTuS2SsWB4sFkKULtXEMb6EzdjQLyw5WqZf4giE1fwwAfFdxnZEVYzcvzmqgy7PSAWXu5NLXB5aKHwV2LVN",
  "key42": "3Z7XdueBmmmtZmgX6gWSxzzeoEQkhQMKbmRJWoCBc5JJLBVHHYJ9sjsXLpuzdfi2WAS5PscsmuTpe4K38ZqbJHV9",
  "key43": "5zF46fDKTJ5rNGWwV4WMsGLAumqaztwBirTLCctdkVUKTAKvPDF59Gtug9rA4crrMjqBBDwuVLUWAcv5FBmLk1cU",
  "key44": "JgeSG2UidCi89isJESyKHMpBBWSYGa3qBsS3hd4Zyk8pxFRcZWgiHC3e5yDgnv2wBf4pFGXRHe3FMeTt2qfNQro",
  "key45": "Eg6TxBeb5cxJWZrrBwyYhZdJ8bGjYBdV6ktmZbtXgidnmVh4xiuP6kpVLaRypA2Q37FF1rLEgZGFGg4E7wmX4b1",
  "key46": "L2EMq5R5tL8rMA9hDcG8D86DADUAbd7rHuTp6J2TQYbAEDHfaaot3GQ9Nc7HQUJPFUfF9fXUn7MgsWSBPBatjuF"
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
