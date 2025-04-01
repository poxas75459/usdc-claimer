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
    "2hmPEfmp8VypVRcgCG5xrF5Csi6PFLvi79S77QJiRo12WYdqsAniLaaxPEiFwyoiqvfbvDbZkG1QHCBLZJLeBuKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aagpiNfPVSvvyMWo9kM2N6Rj98PqF4vbLJHDyEw5EhfB1eDtjcDP6epw9B1hyVTdyE7sGrKDp43YSoCPmNdpzRN",
  "key1": "2hiq1icMdUz43rmpZPwL6afDpdaAn7ohhpb1H1M5h9uGEQNEA1jg785AQyV5Ui3W5vvBBSTBZYcT6WyiHFcwhpxx",
  "key2": "5qTvnDa7siToKDM6yEVJzA5qqvM5pjqF6wBKGsJn9Umq3Y46vJBTkvpDuE6c9btCPAoqTsC2kaDSf85qCuDb6kMn",
  "key3": "4aN3KZyrPQvKvFdGwtsGTmxCYsFQkLtFmGw8jcZaj1kFjixGnpy679vvCXfW3wUqvYk51JdLP7VYPdZgXwHDovsk",
  "key4": "2Snb192eS549RrJhGExXHYbtcfArGc7AGkwZ7gYGSEv5hti9asyt3Bvsb7BVRHSs1dNaK6MKfFDPXuopihu7ZNyZ",
  "key5": "5Br5CvQ3nZG378f99GMyCD3YFCPq7tweMsNFjvZqBVkBLtnmn2H13chEwvZXWsHYwPgXrNxK1BJW78TA427traZa",
  "key6": "5f2guW1DdQD1e9gVn9XQ2etVSWE8JCBNwa7QPhU9MyrKYXsumXKaCS1pYRHeTZ1xnazYGAmJb2z6vJyv4voRF1Wt",
  "key7": "3r5KKjxY2aR8WhbZzmrPCnpi4D1enUxbBxVKJduoh4vEP56aiQnvUf46WZzmwnB4p8iJ1augSAWK7y7NLDUa7PuG",
  "key8": "3ZREzQpZi2Lsr7wYSnD7d9pNbBr3p4APuPzFMgXVr6zNXLGo6yi8ZkzFLcpNHpGkrt6Q1nhZnqAgkqyZWiKjHoh3",
  "key9": "39Dg3PJpbnpw8pEm9VupEDh19UvC4QftWydwmPVVRB3KVVF1UcXwZa3D2kVdTiooYbRd7KpjtxnHvr2XPRM3h4sC",
  "key10": "yXPBBPEMd1HV3Jn2eYUVEamcjnA7jSmpxneLPwuBeAQwjka2nGKe6HtmqiPzGWMHXSNbnMLxtePZzsmCEKNNDai",
  "key11": "5bTQyCS8TYvKR3F56QR2LkC6jW6Z4Ri6vGcK9JTwwuL3fFTHUGxGuywq54czZhubtNYMNomxTyU3YhnoJjMQZYoc",
  "key12": "h5LgbhqZh5NPL12wSYDut1wFz1cDujoKSmFRszeJAHpEo5WUGEfHngwZSZYap1ChFnUYCVp7uqMusrryuaQPiWE",
  "key13": "2WabUSKJgBoYvjS8CHxRDMNCxxqRaMTtsAZ1XMthfWDfBz1DQKczzbu7b5SERa13Fpz2gpQ4PhinyJTEPHDXmgfU",
  "key14": "6wmWX27mQ4QeSKr6a5xRsrs444QZzhkpWoRVFSJNTbzwYMBR4XQUJBr2vJPJRN4VuLjvXxoKDKgt3kSSx7UuKms",
  "key15": "2nStH3MhCT6tVGHJn6qh1YspWMVoTDsRd7w9giMvVKxsjuqxTM5pNDg5qKSzt6NePkBRi975os8xZNbA333KXRHZ",
  "key16": "3dmxxL1hehW4SZ5Vs3rv4bSNcu9aXx85Mcg5JWcAgjo19QLLJfyUayBySuBVU8ptb3GzzUvMbpKxMHVJbLD6H5jz",
  "key17": "5HkmsmPsXv9xyG8ZEj5Ygag4LVUS4BA9gDmPRKxkHFpwjZWjurNaFw15tgC9BMurzQWYeq9ZgXLo5DG7C3UfU7oS",
  "key18": "2udzER8j4kyUYHykB45hypmjevozxHXxX3RC8A2HsZW3Bp7nABfmtyWB17xr22LQoUTqs5tMVjuv8GXHy94PhwKi",
  "key19": "tNjTftgrofWk3ofZ3RPxz6AAW89xuubzZeBSeVqjhNsyDNUcAEPNme5ZYHBVKKERJ6A4xUpDr798yYKQV8xsb2S",
  "key20": "3sYd3rRGZUmtfdDCdKetVk8cFCEFoAyBBQ7dWCYENaBrxJyghUzMqVm823YNfXsYQBEHVcjK1xrcBnxio5wxXHxD",
  "key21": "4opktsMcqdX1PGa7yLWtcfb2aEovfv77FDREjYzXQfAoemq1kAMRF4QoU6xdYivX6dr3DMeo8x4PG5MKBAwzF3Fp",
  "key22": "3ycw69BnthHfA8e1Z5gLjAhTjp2immRNzxLKV7oTH1HCUYfNJjYn9xhTrvUtqDZh6Emf5iZyUMyB36dKo1YPYiqV",
  "key23": "2L6qVHEA5UJxoqU63tH1f8UHjXA5JnLCzv9ziVB1buU14uE4yLbXDUkj6Tab7PaucNJPvPDRJy3kLsYNvbWHeGzh",
  "key24": "3qY9sQy3iLLc411tiBKcqi2YJvQ5c7C6kr8jgi31eeGmG8dqwLxE2NYEKiecMoJRMsY6cRYLKFCyHodtzGLM5KvN",
  "key25": "S4Q3hsjQgNB2rrZcpk7HZzQ9UXEq1EWTtTFNwbmDNPYtBQADUbVchQY9CTwLm2bAoDSSMPb5VgbZipEGNYrffrF",
  "key26": "3rMuUozdjJcxYr3UgYj8QKSAerMhfWGmc6EPUNxuoAtQpYKFxRRsdo5fiHB7cQLujv2ZYqdvC44nerbtjgqdDgSq",
  "key27": "64uC2adu5D8wegfX97Rc8U8PQH8CKk1pw6NrjgJFQACaTCt3HNVavgr3TDw4FEDPB5pfBVTUuDRL4LcFzk5w1nw2",
  "key28": "CmU9qzTemjTYArQoWrFMdTirRHzQUgFnJkLuLpNzuDqBiCQijrr6i6Z59tdjNLUSEFft2Ub2eyZG6FTDKt3cnmZ",
  "key29": "42rJeEg9zpnfeNrtQZGwhstvB3YJTqDHbwxa3kQvBUaHS1xUtoCcharBorgxTzW8mXyiBr21EWmcz2RtvtvTZ34h"
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
