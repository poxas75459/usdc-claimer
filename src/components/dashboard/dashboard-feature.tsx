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
    "5qdxwLyzMDacMbThd3UJHG6AmPSmevYiU32uC3VxKfALyhDGheuoaWNrgRDS4CuzYUF5KqP2UZZs9nxRkSPhB27S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wuMyNV9p92udq7dV9aPF1AVouvd95KSvbDDvv5Ri5zgNF5fJPr6edV2LvCqUS5MPT7uPFvFGc8WpN6innJG9er7",
  "key1": "fsbcMkVLMpVaGzNuk9TifKnxFufQUEuprY24bLvMfxgXFczxFpSxX2KUcazbPDgqz9EetzXS73S2BGHPczeiAZ9",
  "key2": "LWWexRtrUvqKXDNVmxRfiiPq5BUjhcMeVH6BPL3PgsEL7TmLyHhRV5aHTAUrDRjZqoqPefiwzLySNEYVYX6Djjw",
  "key3": "DcEZuJjLKdJRJ9Gnxqb8CqfiDGaSVTUzEEGiHfPfvXWSz99b7kSE72DnBsK9WR2RaSzYR5cyCo4Mv1NULUg3YMh",
  "key4": "2HFvY1xpndmUabb5A47u2nq6p7Am57pQLdALH5r5KyZTrtAMtRZhQYS1P73xw4CrZYRy4GhBmNqKziAMxbHtgqEV",
  "key5": "dtUuKKtU682XF4zw3yXhRHKY3rBAVYCMRzcGTLZv7ojjuGACWUJh1cqrhMLgMBB2MSzfej1NHCTnNtNEPW4r41c",
  "key6": "67ndNyJ2qVoE1qJrMWRZFjj5fuU5g1ST5k3nxvpnx5TFdpH7mx6ciFPEkYYtnEidP1yJa8FKm4cQzxekDeHC762R",
  "key7": "4rQGAWFKgys8PbTjg4qekN86Dr568zLcYQKNwq33eRUpips2jtnhHvBV3UcGesyCEb6jajACdBLjDJvNYCy2MYHh",
  "key8": "3jLU2oLP5skaogZhNu7kB1cT8jhZKpheAfHSvQAsAWBgDZDK6KDne4ViyEcChdim6aua89ktNYSd4dLkWpYEvPM2",
  "key9": "xJaYiWT1y9acKieJntnPnK3JhkgGSe2vGk5HmeMeJyjkZMKbe5qhGxNnvnSV8Be9gzf9C4LACTgS1J6ntmJrs9D",
  "key10": "4PWaTVct6RW3GVPrSedc24SWm376t9bo9oC14L95xsm7mUbkXxRqARokXHB5usi259LNytTcmQCcepUbXWKkxx9b",
  "key11": "4YQ1wwGbJjd1v8BRUN7j3q8Mn7R2qWs95mTJ56mSDxtpqhYRXbtGsMHND8pSkXDBowym713LV86jqW2RCe9QgiQY",
  "key12": "5NbatNPDVQEZYVzPwHXXLU7cW65HW9C5gULA6td6NLZmgq4YsVAFnC7fvSqbFKU1MatSDzStVGB7dRzeHXyKQXRK",
  "key13": "KSsJtvgLGVXaZkAQg1VnVfvV8Xc6PYrdU5dK8yCtvBP3K979JqEhXMfMrv5MHWroC8iie9xoNqxG8UYes2khp2s",
  "key14": "DE3yDyhLURpEujB1EVYXBCBWXFTioNq9L4avZ3bpXsb8gpT9TASwiwrb9qyoLUJfPBkTLkuEmAVaYERVrNnjc9L",
  "key15": "G8C9okWorA4MUth56MUTNRvznN12bZkUf3HwHmVfksCTfdv2DJDTnrha8mi8G81KMyYNJcKrNShWEmtP7LY99Jj",
  "key16": "2amdEpr9R4t9ov3LiPoKVucpxRDiYpZgF4m4LYHcP4nSQHMNz8vBM1jpZSHZcnBkQoLXSYDGg26s6diEU3udoBDj",
  "key17": "4Wcgz4SxN12ocAkr27o7ZCdpFVv1o1eK7n4LgtRe8GnHQA5puXrSYRr3hXBGNnVX6HeECGCK7WeyrSwzjwb8akhf",
  "key18": "hKjDCUzLoMgwZxX8peyVLA4DzhV5CTERELPVz7MSo8d7sYiVPYzZkZ4QXSRaXVrJ2k2kdyj5x2curNBuBNJ6tcZ",
  "key19": "344B5KhvG1C4vXAudrstkAbYkx1ySoWBdzCZHH4yPoaazU8tx2vGf6uynPisLJwKyvUZBf64EfWRXivwX41P64f3",
  "key20": "19B7ntSWWqQTgw76akDX1ifNuwptvrEbo1DgoBK4WC2nr8Nk5PbLJre12K12PzgiQi7DuyeUNUadcunNFErVW2L",
  "key21": "1Y8mtA2A3S3FTJ7H4wDboexxe6abavxNrqPwDMyvCuXR4mu7fgU1UWZVTWH3nSUncHUCfYxZ5Ht6txNTHYjKY8J",
  "key22": "MjMYcYTDTw6wKDgRAbkYB1YS1YwDDRWUdHvBthVtomN7DT7ZssNAkHRgG5ea7qMmQMPkLGEdC5mZtM95CEkxTca",
  "key23": "4CXnYojZXcLzpCgBUDTHH8KtyQ2yFWhF7qCj6iZTEJGtcWGV4udCXvDWvwvXzn9dcjybaKVpDKG8715kxqrDJ87j",
  "key24": "35RoRMNf3wiFP3f5LB7XEHfKhrWJ4WDFLpLm3oL2MyBewmvHWW992N7ipMYfVLeuHksHFPRLNi7K3pNBKnMBSf18",
  "key25": "5JjcVQm5R53rHKmVBEkjLeJmXAiqgDaVTpwT5Em6VMz36cV7v5CEM8qVVjmawwPsQGAk2iSkYpZDvzz9kkSTSqUJ",
  "key26": "33WdY8SU9KcF6Qy8HxYybzSgH7xjLmwtgTBwMcEBrQz37ZTmppMxrat7c75Vx3jyLE4rstMNmYHzT49UbYKL869v",
  "key27": "5o2RfSY58BUowNFEEyfPWPeHfAcx5UJuXpNLH5zxCD1eifHPDJpqAy4UTNnj9MAjHv45bzwMgGd2m6mQDzj24Lt",
  "key28": "4HiU5QjqdCnL6gcvELpBGhVTCbKTcA3kBj4Q2ea8aSpnyPLmys1EgUesfcngmr5UGYrDtQDy4hZYeZF8pHPRNpkm",
  "key29": "CoiArvbfkqJhQ8R3gcY9i9wP48bBmJph8aJ2b9D1xHdBDp6zJ6RvJheKDvhUZxZMQXUdgUHUscmH3QLP1DMe8rS",
  "key30": "3MJ4pG2HrCYKgkJgAnLFRvZJqPEqfF3sbtmRm7NK4KxedARyBjX5DKte8bhQ2TLVrhWFmE3DCyBtV3edWA1QPvkG",
  "key31": "2W7w4cabwSZVKK1ES65ChFFZdd2JSMApRN3epkQAXJneBQ37TG9m7W3BCQHjkms5dvB8qWFJN6CXZCKFS4iVrTrC",
  "key32": "4d8UjUP6C7SetfU9RCcRBkyFQTnbnSuVvKsNSfDifyLXcmaXHSDuXUyUKHzhCeT9AtgZoYCEBwWf5xkkGaszbZHr",
  "key33": "2K2fC3JTmMUdwxA7ZsAomCpUiGQ2bNL9PF8cFT6d8fLUFzRrCEVLFmmy2oLskDyLxGusx46KYqLomZiqFgR7sA6z",
  "key34": "2xuMHRMxoyEwZdWdhZthiSBXFE5sxQgCyPsWPp67jQuaHsmtHgZF5VPDPJGCU5pp1JKkQE1Lc9xfSV4oDx2RP1qp",
  "key35": "46FZh5Y49X32bDWYuS44f2iEr94j42BzXQcPzddi3Vowvdn9atUaDDDGMd57QAJcksGAXaQM9SbsYPniX9o4zo5i"
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
