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
    "4SsJTBLVwyd9uRxrMpB98p7WjAV3tDCyG5V7cauQEvJNemd8dmVx7f8zk3HTk1CvpGKqVB2drqMEcyjsdD2b9GMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BS25xtKwenmNJ1LGhXndJkgqnRtm9Jg5uJeACEj3EJQ4hXJdjpeBYqdFq7oMfmsHooK62hqv8nn4vCRJUZX8qR",
  "key1": "4CyZrfuD1pVvoRuR9zvXDR843tW789LKCEHeo9Ya97xDR2L7XhBx2vZYb71XGJJQ6qgMsJV6caxxYjMFB8mLtX4J",
  "key2": "QF7KAjuriXnKqGVDg44VeatASLfV1FXXJ3Lg45gU3HP34Lopd1maabbQ6HWk2Ryf8si2HCKCHwVbjkiwjHppbKp",
  "key3": "2VwesCkVX2UNJYAWxekbxRYWgTRo9AtZ7B2o22qkFn1emeNjr3Rf3MQYRCQW6w7W5pRpHi65Pe3kTcVAbMZ8ciqb",
  "key4": "47jmMESUVACeF3Ji8rqEHxFST4YaHXSarrQznPqTy8BCGoXn5FbiAud23M4nb35FS4ZHL55PKTbgJgVm9e6q4Mz7",
  "key5": "39DvH6dXUsrSJwHeYvEzyz1XEjVMKSBXAJTwzhgAHDPVHVjiadgQjG1VejzYNScQbs9r2z7Qw2XyzwtwYPw8JH2i",
  "key6": "5jfaUCErWTqezxfsX6s5edHkGvXEipRc8BfAJ2iUMMJh1Acg1sF3mTGD8v2YcDiAzBNogVH9xjkW91VNuxCo79Xk",
  "key7": "33p5FexZBa6oYgE2L49X8xisArkoJEYWfS24MbXFd6hphPjfeHVmDhVqYmK3e37MzTCxfnsZ2uCfJ8xhUrbunzhx",
  "key8": "2XMyhPDTYHuxqTCAyPtD5wJ6XFean6W4hQQ2K6nHtvGC2XpUohNYFb2riBvCtb5LNhvaTYjLDr4QVaPLrEDXPuB2",
  "key9": "3xmQzftm2pUPPFmJC9sHgwnYm7mV2281zYxR6jMLfdAv5p9B78tCTxZ4jtFE5cdSGd5kGUJoQDEeT8r7VBwRmp7Q",
  "key10": "nY8KaQL4SgKEubHFMt6qyrWp1Es8D3Ff2zv7gnEy2TpLD2Q1yTLyVF3z2L7H7y4gMvLrh7NjKK4eAgYsU5iCCUz",
  "key11": "32D5pdg4KkwE2bbkUvpysQ6v33wYZhCReczSPB314r5aXiL3W4Awvq8qUKog5xhVzHeoyVuPLGtsygDWS5f6dVJ3",
  "key12": "3rFwf7VYPqfLLPdahgeSaSxzXUhbPeF4fBdVK8FUjWa55mtp89a2vaf79kPVaCdt4EBP3rXcaiVFexHnGbec5vjG",
  "key13": "4jHGLR5g9JWzEMQdjfZbZzrqHaKBSdq16JxkiEJXoHtDGCM739DeM5MzzmwK8BV9UurJHkykNBrPgFyjCn9rjah6",
  "key14": "2QAkGji5jAa2821HRjhFew47ZdeS9qWZ2B6qdNqJucR1kxFNVtUU3CsqTj22uVkX2A4Q8pj5VGJj3Vu5hotbXRQD",
  "key15": "4UZaQh3YWNMEcWDtUwnEVPUqHr3hqtgzxSFGuYWFwhKWaLpXzqWxv9FPx1N5USY6ZkF8AS24URTy3EJooyhy4PCG",
  "key16": "3v5zUs1cnBk2KjR4FcNBqus6UH49c6iZyVRcGvatTxtSgr76J7Y3KJcQD9d6cw6TRjZRejzJsrRJQAjCm3AFpVYX",
  "key17": "5Q4dNKSKEyxZ1w2ezDtvy1tYiEnJfDA1cS4iuYisEtrCXzzj3HTQxAiXTcGwhLUnLe2Wu8qPdqJzctzyNFLdyGks",
  "key18": "5en74E3Nqm9Yfy2mpEkau6Knrq93q6GPtbhvvUKmrnrAxBUWXe8KoXf3RLPkfu9FYc4QzJK1D6ZVCvHDGThsr9EV",
  "key19": "3Siygt9C4E9ayPrS3GQ3Fo3Z5m5NsLTDS8ZqFGhAH5cuZEuaQCydQ8YfFsogxe2oT8aAprYSu46Ytsjy3puSRDn8",
  "key20": "2Eme9zU7ZfnZyzQpjg31LvLNaiBnMGR1NpQne2BqkZUnXGrKUnZRYwNpuSH85789wCNFbNZGBMKaPDNzgBAUy6jn",
  "key21": "2hkjQk3BFj6dkjkBsnbskGyuNJdUni7sj9ALVi8P4zCVhy8m7BX1MMEUdJ1ThvAC1d9ttWH6ezZwxkHJcCkvtywQ",
  "key22": "5Le2uB71dYnyTjfiH93sGJYqiEZEPEPCKShzZzWK5v7pMTa425xe29ByeSNu7tfLyXruewRkjZoDKsD6VXweqbjW",
  "key23": "2ywgxJT9SmnR19XEZeKPUM7BU9h16xzbUqNHWyDvKGM8S4dbX84a5Gh1LpKU1E3rkG1JLPoVkh77Yfjq5BYcRjC3",
  "key24": "2fcTc2keXkDxL564G5KmyWjfJMhp25Z2k2xWTvh2EQi6nNiSq4fm62SZAmTuSvjvBuDAPHBBrLZJCog3gJ7yW31H",
  "key25": "5gv1JM9RBbGU8jaGkoHpp9NegV1E7Gd3gW7rUu6CiCKiH2589hnS9516do46ikLvrne5LYFKavGdcwtVPfQ8eqYf",
  "key26": "Aeg6mh9KWVR1SQLYXZ1U9XHaEntWWibeoARifwmqvAXWFTwBfgajDvgBmstYxXfSmj6Y6bvsQ1curKeY6cg7nNe",
  "key27": "4ZMPqEpqHryiPUU5x7KKxQ9tzrxYfJwrjwo2sqXpRcLsNMqHHqPWjsyTpS5jdCUu5cZuFWELNJNsFhc6B79QiE4X",
  "key28": "1uJX4LvH6QHZnGvxASYr1vgvogfnxS1rcRwxKZzwMK4rs6CnQqrZ3csGJqxWnN6p1MTW95FxNqAZN5EJPdwNALq",
  "key29": "5MsU181xB2A6bpZ8uiKUhov7QgxpQBDJgXMoEGnL8vWi2D1JzpraBbcQstzevyetuaz32iJDHXjqAm4F1RADAyLm",
  "key30": "2ivzKmVz5j35fUBmeCj7yT55trHMyjKgyr6XhgzLgrHwoNAtRDd3P6JixDKGteLFg9tHXNJgAhML6ybNm3652iZ6",
  "key31": "3GiGMLakKaDLFLkqTmvp8Tj9ZqjojVx6j15ERsqAGcnZnLdvcN4Y1orzVzHADx2quvDjzdzuxsJdjeXCCmaZbTXn",
  "key32": "3Lg6d1BMAAGYicZsCMkAkTKT86bCKgzWnrjqXqA2mP7g5EP4NE4kakZoK635PUaw9KwkxCciWgTNTChKQdXzrkav",
  "key33": "55qxgjakiT1jucp1GKMVNZut32ndz3KmNhidDGpP8QeMFwF2nHsrpMHgwShoPenaCMsgXLjdUyE8s8S7cugRrTs7",
  "key34": "M5yx2FNr4MRxNsnzGQgWtPGn5URigzMNkZWCJsbSt1Lmmqj25M7PanXhLYUZBmwRHb9CUZNUD8c5kmgW1tLDfxp",
  "key35": "5nrsRRNLfhK2iNhgNWczAWF2CRq1k8LguJ1pvxgrogDYA4d8ZpYoFgrvKwTm2JDKfA4kyXqD1iGLW6B184jZpUdM",
  "key36": "4URfC8gecUeWHV6Z2TwSQCE6VLTUJS1KNxM4FhojHUM4EyjVsVReEbM3eKP58D97azaz5qP1Ua2gQYswLZ37wMcQ",
  "key37": "2RPzehsSy1iieyasRJ6M75fZzscAducd2MgKCRFEFtbtn7VNgZZ7fCfDaL38m2MQ8KWT4e46umxnBwQcYqHntNmS",
  "key38": "5ZNz5j8edn1s9F3hyN8ZURhoSpXE8JDh1yY42Q48SJAPDN8nMhEiGYASUqkZnRdYBmn9Ua2gmcXsPPqFhFWEo3iR"
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
