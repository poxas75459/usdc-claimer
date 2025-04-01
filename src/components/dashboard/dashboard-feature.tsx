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
    "3bV3RMtPgBMifKUPQVrKcsastAiLi3CUqXD251CQT9ER7tf5EppL5WbgEpAVUqKU4QsFseVvMLcZEpDz7omGNJ2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVDRg5ZTCgM5uzSrcNkqoQkPycnFMHgufbkWpiA9guzyDpT3FisYU7hp5nTRkPqeVgsaKaNQXS4rbbe2m7eG3qW",
  "key1": "5B3AAdN8Vqx2Y2RnNH6i8Vkei3SaN3Mp2QS6enAPWospvv1noriVDhN6pK1CqXAyq2kDoUDeq5CUpSnN4CiWin4f",
  "key2": "5XNPbEYND4QLLke8z8VRwnkamd72CeqjTHRCfXCQR1MXNur4sxEn3SEv7hqLrX6vQDcHQkjYASEord98cPiBbdgd",
  "key3": "4CZnJrZEScbvw9KRVRRJzYoxWcRSrZKLgWv2gBjKiNQ7KhNpXKXSbD6XeE537Cg6G3xRpkMihMZZ2j2Cq5dvizTg",
  "key4": "LwedTWsBGmgKgSZgksigRADCi2Cqts9j3sJomx5oCpqiMC6yJxp5txxmQL8CEaX6UazpfixFa22oJkWbPG649cC",
  "key5": "4Jcti6ah9xsztcHGYyuDYxZPihZhWQAmkxmJFKpM2eB26YKBbdQPT4DyPQvwRjcSFjpsx4DCQQ657KvZvTo2FVMt",
  "key6": "3X2CAD96ajkfUWwYwXkZfrLFEwbGYMwKaS6PUzijZjg1A9CZbxWdbFFJ8JXPy3uHARm3xzdPLkkfNCSFutjzPgQn",
  "key7": "4TZvDwPxm7N56HSxZEf24pghpr1R1LrxkHCV5kcWySSQivBNsM3eqG2ubRaHuJsKLGAV1J8Uzapyra7Uym6nAyVP",
  "key8": "nHX3hqjsTXQ1SVyKrkgYePAVK3fjaZZ4TRf9hXRAHjiYUhBgMScELDF77QxAkSNQp4jqAW2cTrdA8ZF7zvddcVh",
  "key9": "3B6z3cprJVdoUCNVghxMmGXEccdQtxXWBJuZkoYHzQ8QPnaumqHkHjrKLW8UVT1wgB6d238dBzUVRtwPCucSrhGw",
  "key10": "3wrFuQxr4HqbtAairCrm3Bh2dZL2Xa8JmJGMvhM9D2SNULJ7WYz9xDa8dJdW5NpvcJpH8uLKG1f8eUFV4ViL1xaj",
  "key11": "3K4VUV6XALFFcPfR3cHuyLL95VFgXyWEQZauUKcP3mYeU38RH5F9U56veF2VwVaU7LC4muJDhKb8jH9pqRxKGDM6",
  "key12": "4Wp2S2oRPQFdDpw7vLN2w2NVuRcLffMmyisD3mkxtzUSByBCTpDguhTDEHuBHz7NSu9Tx6YzVWosdSiqNk8NAzov",
  "key13": "3r2LjfDQxVv4oLni5x5LgPHcn2BkrKmeEcEoLskkB5JnhZTNqkQ6QGid7f8kE2YSqhteH91VrnuGfuqcQxAtQBms",
  "key14": "26GQA5JmPsGoh1RfmHf71nq72mGaYbp2tBGtLUPXEbyTq4f913h8TtPzwxQMFtKjUcDmiZDUEX2h6nmWYc2drtgK",
  "key15": "3fENCNP5duaDcxjWHRniNPkxadqSd58syJuQeRB9xKwuEXjJstT9nJKs5JztewPXoBWTmL8K3Nu6H6KSGSngv6ME",
  "key16": "21kf6e98nrCz4h2k3SNk2kMRqzzpFLfzvTEXtH2shJh57KDhRfEcZtw4KHBXUnQjQWh9uCHWjqSQRbdZ5LAVB6RW",
  "key17": "5TgMTuVX5ggYarbmnbcJZ9ajaHTukuVGvgKR6qkYd2T8HPZqmrUAGpVCT56DQbDqY7XtpHHHA9pGtcyfDcr6d45R",
  "key18": "4gF1tVNbucDvqFkvW6XNMTU9NAf4wnqffVKP6ZeH8rsTFhomxvs2RHpUQQkqrejqJ7HY7SyUcEVvzCUBvqy92vwB",
  "key19": "5ie1FiKXxz9pTiS8ZALnDw1T9WREakn6DV1g7ajXsdXv8Ms2JJyK9RHPuqTfgy13WfW55dF8sDdvRYW1G6Sv3Gv",
  "key20": "49hQqmX4LdiRatJSpGXQdBaZgAE7nhkZvHDLJcM8QZwzCby2PEJw1pbh5eR6ujSoUoFoHat92pTZTqTjL3ySFZnm",
  "key21": "3m7VWZ9YW88yXqY1XNR1vvbsPMrNcFzM9pzTDoUyn2ArkMWaWSJV5tZLGodpWcmufcSPNc8wszmcbFDXVeMESkd5",
  "key22": "3Qck2JfUsbhStwZXewR6qzEs1p4dFCh5EePj9tSdf25JVYXnq4egGLru2jdEj4FPfHMhVLqErNNShsRDJ6QgLPGp",
  "key23": "34KdBg7wwXxsp8RmsnnPLdoahmz8VnFTcaj9kmjKf5vFtmsHugZc7L61zZiRZMxKDP1JFjrVDN1Eok9tbDkEh4QV",
  "key24": "oXGi5gRZ7KiwdDKPuwjcu4ZFuFi1L83zHLyTLwnP9qnjvqrJZhYg68xnwGNrsruLeWwBVrd7tumTmdtL5J5jnyR",
  "key25": "5pdjfeJRB7DLLPK4E59LkzobhWTT3MK2K2uUVWQEiu8n4ojDcv9aB8NUG4nWrWYzxUYhktp9GGGUs6q16aaEn3Pi",
  "key26": "2PyTi5XRsKEFwyddWZnGnLmcmRnBzwPCd6VfbPVdRyFwfCVknFoTKjWU4o9Ksk4rfkGeYuauvP8Ds1HBrc2fXVEq",
  "key27": "3R79FSkN6XViB17BAwqeZRjiygsdHFU7dWKi5XChTKucYuEnJhe7asM6ZnxQgpWRuRSfX58MjybsDzYHZWskxom3",
  "key28": "5cRvKJKTg9jUsK2TTtSbxtYtfapdDsEdZzaDWJw1pcocNLLbaixr1NBptfT4PAdbTQ3mtXY91ovMFGdmHuzRLSkF",
  "key29": "26FKTgVCeCeH5VGPf9shB7JiFgda2ABNNpX5yavEarBziULsertyusx9NLtLozLtzhV3eKC5oEH9vsmgrGcuVNZp",
  "key30": "5GLZQSoPWwVAkwDqo4G1hmKhdQvY8F6VZEx78N6NY77czaGMof8DMNiZeaaWJpPPhg9VfQDidruNxXJvnfX7LyRm",
  "key31": "5QJV9yhjMVLTVMRdP8kRJe3Bfa5ufFG9zcqWk6QhmVe3NWBzWBg6N1a3jtPYaPKZARm2aJdwYmWca8hUkF78T2CV",
  "key32": "5xrnXRY2zYYRhUFg1mYyUr8GSGUf9Gf21ZHQxdKehhrFkxxTnmzESsR9kYQGtwM8Z9GCRq2UiULE92ULXQuwcrVP",
  "key33": "3EeiY5GYM2KEbgwx3PuZxEZ4funpfK8yz23pKAADXf33Qfp1Z3GEeWJyomZ7FZPdCne8emvucVGG1xuvjgVD86hJ",
  "key34": "3hD5qSvvnXcx1E1agqChcDCVsLQyKEhMVwrYFiAygDo2xXSQUuqJWxH1bXWBG5Y8ATruBshKj6viVQNqUppk48Sp",
  "key35": "ptxq6qv3BuzRv5Ub1bm99apyHgq1NgrcgYCgtastbMWmf8DSaAQJhBPdtJYEdktePi35xV47mSk6W9Zex5YR8io",
  "key36": "2cruCGSTsJPypfDVuxtejLTjrxiW3oUw4bTfTxQiCheLZz6rAi6y8VjscsKidgKU8nZPjcMRBPPcMQuRkxQqrGtX",
  "key37": "3gDhDNB1cxCbsZEweDTnkaj5HeqaMFfX17e9FnEoYBPKh821JoJedUViwNSzwk92txu8Boz8j2cSjAAfxMcdzNFD",
  "key38": "4o93X5BCaKBTqPthoFhoASjtKh9bLTNm3UqMptLZM47X9hTY8bfqgd3vV8Py3mBmT63fqB2uvMU2xodJW5G8o715",
  "key39": "2pWTj3LZGAVFRVmLKhjBcL1HgSQtukyT1SzhwJqFQ6kdhMofTWTqwW2FNVysVcGGUxsAFM958MCATzzv2Tyqk3Sp",
  "key40": "w9rN6SZbdXJV44nPQe6pVjDszXUKo23MfwhCs7JQTcQ9eEaFv6xSkS9YRkxGH6HaPsSNh8DJV6tSK56nQ8Seam8",
  "key41": "3izUMse1voFFyvrpFP5215amaQALwCGAudXwJtAQK5BQy3KRpmM7qLvDBbvKBmMbwPg9fEB323HaBQVfgYvGMc3p",
  "key42": "E2CMGuwdmALiX2G9prUdYn6Vi9VZc6KBVmvmRikyvKnLsHD8f5awLi8mEpWz3oA5wrUx4mK87bWYJbnFJ9Fpozj"
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
