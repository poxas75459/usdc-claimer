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
    "2h6yBREhqAshxhsgUbSxWq8HXraYXCG3DunrqWps5zk4pRN3XTzQfE7xVHEsFFtRRN79gVEf7BFwdYLVHek25W9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2259xBQnvHg5qU5nyWcTwift4Fy4dFc8zCPVjXqkKGPPmvmRgLGMZ73eWuqpeHZoBWWKgnSHpKZq9qGmHzzVPbCX",
  "key1": "N4noExVvJYgqLYEyD6sX59y516McKADsb5iXnzRWLuDh2MvbnCzoR5CtyeniWAJjZG58XVKRj74G6e7Z2w6Pti7",
  "key2": "5QQneLSeNNvFYWHgedUGZiuMYENdfq9Lb5LdsUQhNsZpFhJW63aNvcc3n4aZCPm7dVcfuX7QCBDRg2Wx7wyxXaPY",
  "key3": "3MDABWDjHV8cGdKcZCF1sg85pxU7X5gosXiWdesxj2qVpuBLJYDBxy9E7Kci6dLE11bYZuzJNim9pNv2crf72o5T",
  "key4": "5gFLmwnz7qBVjwWeUCddRJ3N3RXWzRgEd9S2G3XjmQzjpsiDEcpuEsGQ7CLrgqyMsBTET9ymmgjNEc5G4bgWGwSb",
  "key5": "3wWzWyb1BqZFkmjn4tNKaGrVHvtCSGVjxb8Wo5rTUMud9Z9Hv8WzZ5DvSmFAmAK8SrhfBtjYMBJAHAxLDwq8yz4Z",
  "key6": "4KFTcDveHExtJcYBYPxfu3WmMBpTonKHA167v4idatgH7gffNx9Gu1UWHBwTWFt2CjaN4BqzMGJFUityHki3Kvyf",
  "key7": "5d7jGV1YZkNx7H7HTwW7jWdwqe1aFisJmTtR5QCRw4VoQ7SXZoyn3k3JjkoFjHUrkisqH7P1Q4ZzeLCCx92ecPdG",
  "key8": "4EKjoMvX5fttcUxWafqtc8mNxDNmtc3iDawxiNEQCbdn1zq51hbCSCXF5ZNS79bRzqxbWhwGJ45RiJ9S9P5cte6p",
  "key9": "5ZXhUbRK8GFS6XCMj4kB1aAeb8LhRzcT1wcQ3VmQko7jcNm9ZBDQhDmDSbhYgsCFxceUQpPVnbbHiXuZsGMGnzBH",
  "key10": "2eTaXuzHdu2ds8Ugihmh11etHksinJuaAaobw1SgABq7NNYsbFSkTh1ioshypUiEm46uhYxU4B2eKs2pWhpcGqwd",
  "key11": "3z3GthMr6K8z8HD5UE6rJGgx5yd5tBPYoJro6pEhmiB58YNzCRNwZsM2T3rSnRFKzt9jkfZEggb39pi6LjiCSgzK",
  "key12": "FiXAAuSEaGkMFzfutnMW6JQPqBn2AwTwASS2Kt4XCFGeRi6fpwoBG625APNbiZJ62cmuZEG3k7jpVFfL9a45vH2",
  "key13": "2WmHXwy3hohfpn9vBxQMwqJSbbE9rnL2oay2gdXKDtQ6zgUN3hfMc5zGCcSZtzR574PSJpTN6uHjxDdArTUtb8vD",
  "key14": "3bCeq6ukQtW4wWynznGTBSKm3VajCCznRw5CayrZzjenXqmAqgeekbhMFRF4YEZpY4Qs57XY2n53S5xQSK2k3aVe",
  "key15": "RiNgMeCBdxiXjwykgSWeh5YHbWXWVeJnjBCd37sgzNbsaLVRtNBuy2eJDpd5i281G5TvepGzTsKcrdegQPLWYMe",
  "key16": "2pLJmHyQDd5Y2S1N9kBhZ3wLPeGYE7CaACpeezGHjMGKRGdfFfuaHsN7g8TteC5kGf1GSFuy7FwFwWgoTpUH6SJd",
  "key17": "U5R7jS6MM34bJivRGckeU59mQmvHYujrsVv5ViFwMaqPpumTjCEUgZ3KavGgeB7aE5nrGbw857yZw3rcj6Jp2oM",
  "key18": "cmMo6dbQEf6GXJM5U86kzYFqEAAxpcrxXCy1Uv9RJFbXpoHnP43zuqe7pRFfKf8s1Mi3ShCdepUzjTghAjKPXuJ",
  "key19": "5WUzxfP94WaBkokLpuxSCyC7D4vvzqt4gEdgqWEn2vYxG7xotHhjmDAZUp8bBac2PTnqkHZipFDGCWe6cuCDUPUY",
  "key20": "4duKmeMxGP2zYkZ7f8c1bbuccnNdk1KpwMKkr3YxyYbnWa97yXmhHgrfwci7XUrk5ZsfRTHU6SCr3v5JFFkMa2G4",
  "key21": "TJwXRReoPRkxncejyS3ZdoZRLZXE3Pvbw3MyMiP3HWydQ69Ht8KMR2iJvWndUpGehjQudmUJR14vgYuL1rJ2C3a",
  "key22": "2CSN6iSfT5ufrdaL52ZQ9srkyEXW8YZynPqFzHcexEFzApE8kH2PfyVTTPXKbSEzpKx595gj12LuWByCaVUMDBWL",
  "key23": "DGizmCQAH2g1QP1BpQ8JkgrHS1ofCJcEWUbmc9W7BytnSZipNNQ2g1kXizH9DG3JbdV5hZ3oSSecMgMJak7JzjB",
  "key24": "NufazzBewy2Pg2iPB1RbbSdGgp7sazirmcUpoHZ89aBTBoLtxjQ3gNPutoJpSnrGMaYqmvjypPT7AhcYoGa3sA6",
  "key25": "5sDTBB6bzxDBik5NseYStXzqdUh4Bbrd3nMmqsP9oJRfk5U9EMXo28mZq76wqHnYhVpCpv3H8nMbaTwTE97bftRU",
  "key26": "42cpp3RCHRDrqxGhW1d3P1WDBEGd2Yx59xvYgAaqmcF4Jeh383hqwaVh1oYE4vMdvaLfgmg7cAjN1uBgZdaRagyq",
  "key27": "4eKKoo5bGLBPmN8QUmTprnihhsNUNSwcMiYAaHzsaaymGcsUcJsce8mxcZX1pQBWRRcKrZdnwxsp5CMzuKugXXrG",
  "key28": "5MGRzsaQRkqmWgnsbpsLUrMJ4oMMeyPYtYByYkPh5rEMSrcUpuxSSbncKULwkUxRH9n1JJWxsPWTQwCdLXuMZQ4Q",
  "key29": "e7YXpRjZaZ6vsDgj9koATMSWrQzJJstHjmpqQGFC1X4KiqjoWhZoeBFY2XExm8YxoGxU2Z2vFaariK5zXWD2Tuk",
  "key30": "59PQqbfcHTxWcKCx6Zb5FAEWQG4x7SrGVasi9qTP4eTdbAtgmR6FpKKesHQHEUxpP1BfhBbNCC9jxTDhVi3QsKWW",
  "key31": "5cqZSbHVQxaEWtiayzqTUnkHUdvuNLhoxecE2vT3fhseKu5o5A32j4GATU17EsL6nE8ZqnwwsmTyqbuq329hXdR9",
  "key32": "3J5dLiNLZbgUseksj9bUYT6CJATLehMfD8NcxXvWS7YbpcYZUvj5vKY51nWmfqPASifagE2AfxLFveAcNuySmKrz",
  "key33": "4XT8JjsjmaxHP5siZvqFxPLafUJ5DgWdvggjNZy8v9Aoqsk4YnXtap5LYtZk2DuBJJDJCUwkvzMVVMG8Fb1huyuv",
  "key34": "3PyC9v4Df8RchDtiHhFPp1VaXxkfwfFyG5b9zCmmVnZoRZZKJsWGu9BqrVsrskMZY7EdF32NnA9cHDrDjsfxNM4",
  "key35": "4TDhDCsaqdqKniAKnn6AhhCKkadnjPCamD2nBgNz2FeZMN6v7iizssBHmn7FfwfC7NJYRfxiaUucZG5JnuBKTXWc",
  "key36": "bM3eYAUFDbCjFURcnLPjcBFZzGmDiasTm5yFYmfuMJWGLKJreL4mtKXUvZoLj5aVAphCa8mUvbaxSsHo94ZZecQ",
  "key37": "2nEhXhhc1Lv5VqsdNms5phW1dPLqVov4Dw4hHHZCjbaS4vzeeKW9S8G1Bo5JHkDM799CdGr7owgRv4ZxvCsnk4dT"
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
