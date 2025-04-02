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
    "NMNzhQNyQCm5m1QMjFtdKWTLkHFSpKQbjY33qrDSquQTYbTPu1P6pNSzJHT1PResFYhAm2cQgPYkTLGwt6cERZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAg2dgweYJpZMfoqvjycsRL5XFTC3KRGLAQ5kaX3iKPRg8eMz5ua9LKknzw4LLAzXR4RcqJBrqAWfm389mnEVmA",
  "key1": "49BMaw5vGoq2hCQoSx7TdPLYFHy3zKgfi4TEx1ZCGRrKgDLiGshCbCunT7fcR5PDwELFBz83Eu6xSe4R56xjuZq5",
  "key2": "5AtonmC5p7WP3se2acgq4PLvEpzEut6Kk6zGTLuqVxd3BsosR5FXTDgkRgA2SzHghmxxtCFLCtWJLcRB6uKDWEyt",
  "key3": "4po9PwFHh31ibsPnfJZjP2LNwZxpiQYA7kMatzUg86Dpc4hJi3QzbYtww7DgZCWqphLKTKHbFkWUCFwbFs28cbUH",
  "key4": "4QQDWyVAjt4K8JnTrnvwr8ehKpHk2whkxmVDCBdNQ9v4X8E2MnYetXGuffriFfWpNfwcbCoefeQFPtFi7o7SkGxa",
  "key5": "2VyT7CcusyxRni8U3T8QYF7U7DA6r3iZCz3gHYA8jLS8SMAULZHxgnv7C2kDbkAwVkZdUSHS3yhPAwtjuSbLzR3Z",
  "key6": "4Bv41cmaLiUhNimYsibC9pdDdgndy4EVrg3bfgM5LTJqt7Bw1gABzXwUD7gqkvMM2FyCoDtWHEVaJHFABv1GkWBM",
  "key7": "4jWRhxhUhnpJ4Tpj8PXXwNPHtd4VVv7BpNbPugZiDCmpYARmYNH9nSVuWz4Lsic9FYt95GvdLUJrFBpvGXUCKDJX",
  "key8": "2h44iPStp3L3TvFJiBZDEMokjSYTnBAQguyztaPVa7nFSfwvJa8BZuK9Z6HCNK723YGri9oatKLXqcLaTmSGysBJ",
  "key9": "4A66vqMRQLLgayJeyeAaWWTPmGR4z2YRFMveCkSVahRY1N8c1kK6XjFu1CE8xB3YUBZDeLWnVyWFDub9sNSsr711",
  "key10": "2dz1REsmL3pXJYxBT9mfBGPeMrBAQM6GZV7eTQLDHEee1CY8UceddH8dvFA35buo3YzYWeq5QtJGWvw7NY5qLsjW",
  "key11": "7A1LK1R79Jhz1sVLpZggonQQZxKM8pGZqtHnZbKUTbVBTcNyMnizBWNJPzi5psdH9v82mX8rKKJBS9jEDAd5LJT",
  "key12": "2aq2gwbF7Uh9xL5gdS6atsPiebmnCnqkVAjkyVJJJJSzNTFLoCn3JwsQ8WfRvJYo5MVhAU2EKPwZfgV2bvPXjDz7",
  "key13": "4JW2poUXJM1HvE2N6Lkhc1rm3ya94zTJU3utjUR3BnHjorDxjbM6zukEHGacmfkYNNWUgRv2QDpcyaxt3Dpm5aGU",
  "key14": "5fFcjEfxZjhbQ8aXQdN8PaFJeuGwDFupojbSXkHxiNjnB4tRVZ5vcu7u9SxxMZiiKMQbU94bmpQU5MH6fYozbLGV",
  "key15": "3LQXidzD4DUbiERn989imwVLLrTEb15uNxEdrE1RnzH1GaojjKvujKKn9FQvz4NxFvQ5o7662Qn4KvaejHtnpvds",
  "key16": "5Kts5qU9tJL1u8HmURTj6j4AcFY9MdhEQ2UgxJ41AjLLfbEssWgMBvxZD5E2ftnmN5CMgZM7x75N7AkbvPn97RHd",
  "key17": "2CeeNrQBhVXYbMesyR84vmEBeyQkwMEF1ogkkv9LenJ4JgPZC7wYBuF6skM4EnRoBHNJHquMZFZezUwyYCoBhj6J",
  "key18": "3dBwpbhpaD7Wm5KoP6pHkQ8aUd8QQdrgHeaVZSiioaNSugo8N2sDwToBDzGZoXG4TUU7rNL6puAB351yTCAk27Sz",
  "key19": "4V3S6WAU7bESgeL8ptGAGFgQcBxBHNLfAhXxgrZNGWVaKBTtJTKjk4eWSfYhLHP2degphU7L6wZ3ErPju76LEb5C",
  "key20": "W2yyztoQXYt2mDA8D1pmekesFhbKxv6fTJeUhCQmvWYwL9f6DDeaHU2CXC9gH8ZsyUHMywdcMAnT3mtmnsXpdhx",
  "key21": "336gTGvVz3bDxjp4GAq3rUa52Ta28gSDNVJ3aBySzPXHjVk5HZ5DExaY1B2iitwax8oLqkMTAApqzkNxYthXz5gr",
  "key22": "3qpnEWP3Ft253G1sKQZ4Z5nkJoiW6AAXCY7VNGos3Aswyjj14uXgrcDKAbE6ajK6UqaFT5NPbTMmZHBdqxRMnUPh",
  "key23": "5ySbBfJ29btKe7wSMALCi8hGpzZdWzPCDhuximzeoJaVbGYD4uraTSpESJXWtaSrNTP7N39qqFgckGp8DK1sHfqB",
  "key24": "3kRh2vGANN2xEHwJcRhKE2dUNAb4bhJHvYG4DtAKeLcdNJqDn6t2MihdrHTU2WMRNuSTRH2HyP6bWQG8r8pwC5wu",
  "key25": "5o8yGZUAs8Nd4S3U4abzSkoEqsrFPyK6GyaZyLsDip2TAvjiA1JBQmimS1PCwDU3WxNwQ29L4zocTTjH5TrAVnMs",
  "key26": "492cAakoBnfP2a7TNS1zkWaV4inj5QmaXb8eX9BJgkRQh1ZuN7FDZbP6qxeQUPxVYwhmm21qdq7nDabsbBYCbBi8",
  "key27": "XJmBxwf5XYBEeSFRfYUE3KrcE7jbw9PFLVgNnsXh59sHH4rH1ucyggaqwUunuzQMFpiFxJeTCVeCpEbjadThRoW",
  "key28": "5GjTvy15YqNr3DQDaqTNAyqthPsbaakYvHn9NNffQiaHQVAC3GHNVDfRHTvLczfAhq3naCRUd6dfBBNWrDj2JKL2",
  "key29": "3pcU83EDLPEMc2HCx2jBWqcCd34M3ZvJ7ssQ7JDDPsRjJaH6sK4WDh76RbDLjnnmXu7EctKBR6mPMc8LRXSbXenc",
  "key30": "4GgXzxRTCg6tGbxBXuFQcwAJVPPCX4PPFe3LMppLWWJs7MUJLcb7bSdg3PTYyVb2WirSrFBpUqvT3bjyEbTu9hCv",
  "key31": "2adohDS4sjD9sdwsZAC1CRYCEt9kXZHvhYwKGypd4Cm3p4xaKJXjhyBwWTTSffNmXUEsufE5Y2v16utm7RiM2ZBs",
  "key32": "3JAZzqsG2xhF8tdnH3Za3wFTGZHgnMjarrnXvdhC8ttKAgEJFrCmvzffUFgTCKUSWb59tFjzRBMUnk4wyx6XpfiZ",
  "key33": "3ku2aTQ5BxFVxmrCMKtRrKCFYxMpHAuU6pcqq9Capb4GcL2YvtCCfNLdmPNcioNPUgf1ddBUuEc9xtmEwmJ4pG4W",
  "key34": "21AkvqMwRH379QQGGLRTsbh3GAQqDADBA8RuVpNoZroXbrLZ4wj3CcNeJQj9aS7MyGf4NJJEMEFjTyQJAdJXLBVi",
  "key35": "5nomXvthwcsz2XRwQbT2MwcRnsCPFV6dfQRmZmDLbzUbHnMJNw8PDbyB6hWbMeB8dS5okdi9DteEL3P2DCV7w15J",
  "key36": "4D67jRZy4L7fn5SfavWaZ8RpMQL8ZwQ5VQvRwT7m26fcxn5P5JADqecb1Hw1CwCHCPsQPpsbEGyRGz3rfjxbgcse",
  "key37": "2JcXYLSwrc4ho6HapkEo4ZU1zGXTSWjxpwBL8qqyeuSZmmAzHjW16usrqGbm56Yk8HZ3sJ1JZd49DSQHqf17WNTC",
  "key38": "3cUfs1m2bTrnKP62ktaemxd232bUnqa3BxR3pXiG8BuChgEdMQ96cRJYuMP36EuM7tunvECdmiz4btZw4VSDRRMf",
  "key39": "PEWeyGbe6FfAVTzGiok1Rx6mBeKcC3jiCLRtSURuRjsXYf5qVhuV9PEQSZF9V4L8jZQ2HXQDaNKXfdBAwqaGJrd",
  "key40": "3EycAU4aVMXbmZn1XbZ5Q6taYoWHoF5Y2qA6n86XPeC2so1z2F7R1orRP7DwUjnx2y4WEW7SzfhgHyzr54AKFLzi",
  "key41": "3FdgsxDN5jW27rGsWnKX1mkVraRPK6Ps467th9etB5ARPBRtGagjvJi1ZQSKZoigG7CHAhj2tELnkGgm8WGDx35j"
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
