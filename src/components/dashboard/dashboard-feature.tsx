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
    "4gUamZmwSijY1uKNTrCFJduCrcNyfNLiXDWMC3KM71H8CioTG8vu9ks7dfkQygXqacFWQbyBQtKe6RRqdqZ79jBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bUdoAfHD8zMW12WFyTndoDby358VV2sZvH1UT3GvMPcwBAGgdeggcqeM3gA15ihMEjmVWLytdXWozpbV7cNXqU8",
  "key1": "49eRssmNLhfrhB8VKbsgemzTBzs9mvYP9bmvyownH3rpkXabrcadjFwpVH1E7MzmkQaqrH8f1hbhfJoeFhh6ZK1A",
  "key2": "2tNKow8e9UxWyuknLSeZjRft87d9qBQ8jKv3aRbxrcju3YFAgTLStvmJnAg4zvqH4AZpQY9QTx8MbxVYc5MpuYVX",
  "key3": "6A5dNuqdV9mxVahxYEZfuWLRaLZCQiyqiMiBEoozBtQWQMgMXbGSJYSovZTPZ1FjU8UUpiqd9VTzwH1SBdCSHuG",
  "key4": "2u5T1gHsfUshjoXkStezHz8UBwuJ3n44N2LkWBqYPhC195zYV99AbnCcCHUkwfRqUg3ZYwmi6UwxKGArWSQpJFhx",
  "key5": "5BAYYx4HisGxsZiS7kg3PxnpBrkmQysuuKHuFPHeUE9sDsG77QsG6XLwGB2foU6274CQkTmP5TqKP2pgkxccwfRq",
  "key6": "2KSqjwxdR4gzyRdxJc4nqprni6pbU1utqsyK5HDtmSTi6NJW46pGV6Nnh9kVTeM9bNLHFHodxWLoavDbRPd54NE6",
  "key7": "5YdMNpKprLo98YTJ9MPXBBeE9MVxF3Mj1ewYZgdDuPYYPQB6sDeMBcKiS5EyJeTpfkt4ScAJXq7jrnWDk5jxw7ab",
  "key8": "5yho8Q5UiHafQCyRgZDBSnFJZqVpqYJ51uMYkgGn9MPanQDxWamcTCSSVsgxNz8yS2zEieoEbVNFbQtAFcxR8NPG",
  "key9": "2BAsVaaxms86tWi7dZA5MAtav38njxpzAnM7wdHeot1atpcUUNT7ibqxCUNBmDV5648ADcsMjAmZRkDXixaoFQ57",
  "key10": "4tjmsSB2CX1qy7WCVuNpnp6HAyMrswb2f9RcTHYnFdQDUGCSF1GfMSkqowcV3ucfafcUfKTejcPcpFGK4knuQQ7U",
  "key11": "oPv5Wb61ESv8u5Go9UJWLsKbrBNwAgzNzPe6x66Sy1yMvwGvGnq5YVrvB46nGdyA1xNzarf3kmTJ87Zhi7ByUWT",
  "key12": "5Gvarxw7gjohoePAT6TMxJjKNhXVF7xgTuTt2xSU5bzMQH9aSwtyfY4Zz3kFxEAQpYwnFgwdgXqn4HtEtV17fXV2",
  "key13": "5npivghump7zX9ut9cVQoAEY74rfrFJntPtPuKjbauSHfwEThXh3MqhoFypUoGaMNhuMcZTgQG27f8xcMTWX1BTW",
  "key14": "2hoydaDJC4qVNsbnigWTpHc37KLo6z9E8TLwjuKmmhYCvsbHLwnAMdkobQrwk3et5ewEjK8v5kVaokNQrYKJQHy8",
  "key15": "5jQULG5WiE2UizJaXCNZ2tKfj5M6y4opiegHgEMzw9M4azNePJ1oXYmnXPzKskKkBHB14itHBP6C3zVjCRNwjacB",
  "key16": "4pw8yqhsKqm5uwNt8wkLVMziwPuqwiSrsewxn5pE5EQTWjhdKUXSyP95ZupNTaGzzBiwYmTcyUevAR69GrWh6Jpq",
  "key17": "3K8SNNjJBmA5oPtaBLfbFV2WrDYJjnwf2CPgyEbQnftXfL6D2HkRyupA7rBgdfMHiQFk1hfGH9rvfx6h2DEBcy4R",
  "key18": "5FCcLcWhh3VcZhbDjmyDDAvHJKCtNQ1g21hQRXjkVLzHoTrPtdGfu3tqf7Uq5p32bKMDR8W2fPPvDiJCcjLDoaL6",
  "key19": "35zXej91CVyZTZcXKqhMbaPH8uqCcRmwREEVdxBmkkBb52XRhq7M3soTgqT23otbXZ4DhX3upmXwXEeDqtkEbtbs",
  "key20": "2ixGkcdPMgNrXuQs9MFsjEveHLJmjPXXdYcP5bovug3pPqGKkx7S1nhYbH6H7MaNcdtLhZfJHQtejcuwaTd9YRuT",
  "key21": "4a1J6GnWBc1imrkERj7kFud2s6XtUKw5Nt4DW5ANR9v7sYBvB1mwY5254xAafhXvtjZSj8jURgkcWBpg9G7mVsJb",
  "key22": "2jtLfWgMs8Y8u6FfHrA3FjeQ3nbtVhYmHT2CEjQgH6nkWmhM5Q5H3cdHRD73hegDHMPPzfNcrtU9dBYoXveGCoge",
  "key23": "nMVos6aubTkvKpquPnX1ntZ7HvVL6UZN5cRNcukUnShb1sXhLGHxVTmfZAQgrTsHxdpL261vBmSqKzegRqaPUBD",
  "key24": "3UcTmXNpmvGf2znFXHrmb9aEFHWSJx36FdPB9ABdc81spbg5DYRvFNPBL3Ws6jgqw8PiTPq8eTvxKLzHXaR5AzHD",
  "key25": "5DqPWCepCtupFoM3oojBoBLNmehBEErkjR2i6cKVoXhVgrpokx6CXxe3dR67UppnQZptmFKr9KqqaZ93W1wz96a4",
  "key26": "3qjUB6bfUvioTwu9fxhyVmujQVt1odQCLT1gP4Kg1BbFU5vUY8GyY8ZprPC5iVTNKU7nC71a6Qk65yHotdo4gnuB",
  "key27": "22gvs4y2gXMnTyXFPCAzZPgsfnyKvyEXtt9ahKbdnzPMfgVGjadGUVBLKuq1zviJUXZWaurV8STmroxoKCKfuGCX",
  "key28": "3wu5TFc81QeLiXrf8evxwPgTEtSbMPNdb63HBRFSGYnz5rqM1h8v9H28E3XsHjx1nHPvY5Ru9mzPiaR2hiFAcFcW",
  "key29": "4fFYDjHYrqWmKJWuSXQnEbk2t5HvSohe2jDAdep3d6yzaVTAtiAGcEBH3aMPZTQ1s2xMpHmnNuMQU3tCzbbsFg2P",
  "key30": "3q4kWJHdYhC8FvudFfWjWxcMivfE1wDVZ3CJEeg3AMiRsYDpjR5wAkP4cjC2Y3knfDh4tN8EvhhmUGTLpxurxxWX",
  "key31": "23wzFQa2pudUxF3M5GviBj1QeVWgfB5BiFyMQZME1L5hvZW24BteLfiCfJzYvFwifMQmKkuXic7VLDR4uRSS6C7j",
  "key32": "5rJHZDbq6NUgoBBsYFc7PSH6rc6E1PxmTpLjuUXWjb6tT9U8cWayHiL4An4yDRM1cPZguX9EXQiizVeZmAhyAocP",
  "key33": "39TWehTYsrqGuuthtF9YCdTsNcC49aNJ7f3XGfoZi6BLatzgV5bwJrkRgijYaxt6oT7M1VDRrfTvQuxyocvGnDdx",
  "key34": "5TMwV1XukzJd2M2gkiwaoUZBtYbe96KXxt9wvQtpkrNPpsfujULimRVxEnAPSHDTjLQ23M5yee5g945L8XBwByLN",
  "key35": "5i8aVF8MuMgtTzFKytU5RUfSo6WgmeiPwAnz9aqiTRRs7umJwZ23fowoPzmrRgFGxNdWr4AjKb6T9KBkRUnnSy2Y",
  "key36": "3yRr4p2NWyTAECAsp6y6jseXRSk2DXf6cWZcY8z4SEFKMLDrgDgvJm43M98R1U3BABYhLUQjNUBmPaJA9JKG7YMG",
  "key37": "ZuHRNPBMBmZ31oB2AbZdMoUamSN2AYdcrMpZZHewLtJPgaHKTeWkTpgcR97aDnFPSKE8Gofg67agW5Znem6PHvp",
  "key38": "2ecqi4V7YqsBiyFfDhpgGPHRidwR76sDp4C43xUeG4jKf399X3neHMBBfU1ycGUiZNtSZh6x7GGzAfGBw2jjRKYo",
  "key39": "3CXfb9U1Mhy9BtqmaNQnkLi44s5dbpnDH8me3MpzKNcWDdyQ8vxJkjeV7Nv2brx6VxESpxp8DrfBKBrgLbVeHcPs",
  "key40": "26NBfMF7NvW5Z4WuYosfU7rFGZdnew5iAT6WBHjGHQDgmd85ghyi5dmuSgRYNzem4zHnhvCqFB5sugjSgBkTFEwJ",
  "key41": "4LfDTzSxi7oYsKYKQYnTEnFRAx8GVk9XcLU9Nyr5b4yboeD9Hd3GwqEuYhxPiw85LtsT1gWagwMKnwQxsDSxgEiX",
  "key42": "2pkp8yKWTLuYtQPyrFsPC9Vz7QKXLYTPevE1YYnPBBAKnAM3MbgUQr58v22AbDz4XzvbQKfgHRpBV6bjtrabJaj6",
  "key43": "X3K3gWYZ1Jrg8979TnvYLYZg1knC2fRH7w2y4PVuwpV5o3jXHD2B1q2uoor8nb8fbFo1umKR68FXTV3VMaRxJqx",
  "key44": "3VLZkeYho6kGJxShG6HnaYz5j8cQvzG7pc8tAAaLDrxDbStM3adc6vkvzUCV43qpd2FyjZjzN4yXSjNM4xGhri4L"
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
