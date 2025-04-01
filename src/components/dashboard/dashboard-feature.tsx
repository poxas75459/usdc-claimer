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
    "379d8aYZi28HWM2qoYDrcdVLV6m6DWsK2pHNKW26DdJkLmL8NWS1DxGADDmhMcoFXtxyHHkDJiNvfr6zcH3pshWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xNFesE7Uv7RL3Awb8i2zBKLDytr9M3HVJULfQyxb1McEgx53ihqpqMjqfHL3Au46ZiiUD7FdxntK4HwYnYr5ks2",
  "key1": "3D5ai3qew5qFmw2asVtSMAENzFkD1GNu7WPVprQ45qvtdMyWmxB5kSnuGb6F51DG2zYnYDhstmAPbpPcXE9cvBss",
  "key2": "4Ku5YWPGAEfGf9nyoDrUutWJoJuD2j8NjPxanuKDvn9vxL6AjcdBNGzggFHRwXd8KZiUCgQvvDSSNePVVc2Hsnc",
  "key3": "4paZPWquH9MtgKdJgkvCALegKFi5bPhvERjsDNAsByNxE5QNgQ6BaEZAmZEgRsg7w33Z1UeDGwRehnDTjQSBDdsb",
  "key4": "4viG7ekAWw7P9PwyKeMiBYtdrkYT6uxF9t4x7C2kb2ZhKiGM3zgo55W4czj4Mz4ATWQ5K8tKCvSUtNCn3M5gUCEc",
  "key5": "yYEx6cwZYw6qoELmtSqPwjqb7c3oZSc64YkwnabcAovmTC3FeHW67ZkphKLi1LqCWiFiQgSFod7MgW3cojfdZVZ",
  "key6": "3jjE1A6MoXyTfuzbp14uponHiMF34cww7oB3Zj5wvezC3GUSm94r9i2UGdx4fgn1saCAMJHYC2eTzzrTgF2PbZkQ",
  "key7": "27bN6YyJV4ctQPRUW7SdAeRLRXTHcQhZkPQVrpKGWNkEr1SJeVRpaqwc2rb28cvyWEwHaB1cz2yQs8jn3RfmhsNM",
  "key8": "mM7Fi55iH7yTqkgeZ67D2zaLP8pqrMYuCTFm3WvXCaAwF3DunjKCRpTKZ5XwUmP9rawyww2bA4LP6pstbBgjEis",
  "key9": "vGY5vEekZLLwSJ4cxMjqoXYCHm6AuNueZLVDWxYfhYH7DD3vnzJfq894G8jkUDpC9UvqeZv4rJckArPrA1ghsWr",
  "key10": "2bUFAGUFrHAntwoZirePgBqcKcYXGt9ZD1nqc2SK41HSRr7HrTN9S6HAmmMGHErDxYi3k22xgjBdmdC7yigDdPgC",
  "key11": "46AaHpPDbJDUFG2vJRtkLMtrQc9cQ7T9ZMCGUCPAtYaGoysWpZW4d8qVvi5Msyks7QwoaEaxrGXE5xZhZRgxqnBr",
  "key12": "5WdQar1q31LWHm1VuJEd5upaJdL1cXhZ1Qry1fmJWjG6DGxdRDMcfXSdhk1mj9GPRvMj67Xn4NtpLfKWbdoQAgNY",
  "key13": "2WrZK7D4DUXnn4yHDMXZduHdUHYsps28S183yRJrwYhfDvCTkD5rmGAQ65VATJQfN14ZRWH9AhFFBt2usTiwBCJY",
  "key14": "4f6j5FweN2MufhgYStgcapXdBqkG4zXfgGHGWH7KUNnQaqSm8PDgwoBvjahSGxGwgFSFJHYrEU2wbA546WcvTbbE",
  "key15": "5BuwVzEGJMUZP4vodHpcQgsBsKieTDL8dDE55fVCr3xUgCxSe6gyPEFMyyC8VYiRWPHtASNmEdxh5hMu7SWbo1m8",
  "key16": "4Uiu3xNV1AJTyapMgJi9XRKiHofvjWdgrkr4bKwhPQVkSAKU8tco4zLdJtsggkH4jFnaLxsBoVydSjzfS9Z88EpA",
  "key17": "3ZWq9i7rPeVJaMSMVmfqFMWgyriq1fPtriBemts8wWxZGxNGL9CWPU1suEJgsQAf1gDvvKTNTGFQF31Ns5acYFpP",
  "key18": "2AXyQ8vmF9tjZV3M5aoNPYesffsrG4TrzwByCzxA1hm9C2dxzzvd9EJxFK9LTr2Q3XkqYAWiWJGRhM8LwdQzeHiM",
  "key19": "5Jys4SdZKugqJ2Z54snFENQWEEYHW8ukjyaRjeBGZ2e34uPq3NBM391mgchGiKL7RYEqpkBCBSN2T5qtkUJVDt6",
  "key20": "57AtFTipmYngsGtWsKqQuXUrj9ec5tASTtwbF1VL6dSpkB8A9Jj7jbrgXmwNkjcg947hJQ8L77NieY2XLhJjpsoM",
  "key21": "4r976CE9RzGsM8dprYhr3i8WEdxtu8zeEuJUsFm6Cfd7hLQQGKxiaBdtU34K1zoyRML3aqVW3vHfvo486nBWuaX8",
  "key22": "37eBNMAFEdGo6GCgRCnVnftfWSgrMwACw7LhwHeAH6HpmStZsN6XrMGvk9qqrfHPrc4oUrzYDEG9ukUinzZt9tJi",
  "key23": "3UacCkLLAGYEH3rqgfP2FzDtWcjKNDiAvTeQzsMRKzuJ3aik1ofGsfs34PXDb9LBhnxaeHiEvqwWfocED6k7bv4X",
  "key24": "28uEAeDDCCWaELPPpQ6ZnXHDqA2aHeKDZcrFGcjTaAWQDeRMBZS444gjyGPMPMu3DytSsUeUvPSCdci7GTp14TmC",
  "key25": "5g4vJkrgz649XvqszAydMXWGEkna4jysUgJNtzPXHaBVVgYRQFTyEGtxAjBUHFMh6usCATJ84SXmyAR4BXkYYkuh",
  "key26": "4irCzQ2AyVveV22xMgRVwK8MLXajRGEPmzaLSZ5NJaYZqbQ2hue1BbyJK8xYsdvhPuQ6FZo1Z7ZaKjSa6Sr4F82g",
  "key27": "5iWycMvxnTNwpvk9yBRsBWfMyHFqtdNeHp6r7tqWnPAhhGr2v7vaCSyosYAJhrpBSjko6mFuLncUidNKffba4jSe",
  "key28": "3XfqUNmW5tJqtXs5d9nTLFEp1c7wPtoJmeVQE6D6wQ9c4qbsmmBPnRED4piC8nPY2kkiP13F99T6a51SDHbQbEVB",
  "key29": "HK1XQGLYzixwe3mgBoXgqyQVoeKQ7n8QuaHo4ZS45vWDxzEnbxKuUynDTCKxeDZRyNGezXKwydwSK3i1YyVWi3K",
  "key30": "5ro9gjJXgRpNtPWEaN97VsXRzPFrGXUHHHkAVzuRrw7pp98sx7JVcspCFMhWprgnJmwTaCHMqHn665gKNgsshC7F",
  "key31": "4SwtMhm12MvGkJo637FNWFuUEGvBChZhCaMzS4SX4vxKs6YVmqnA1A1NDZd18SWU7ovWGcnKe6xtWx4WQStEKyY1",
  "key32": "5vkCwjzehSiPV7MuTAESPwnQUKCThbWCRroiEffFovgefHbtCNLHJdDjh7kg9CKBfgnsgxjfYrEiCD8XeYtEzf6",
  "key33": "3dshFuEMiiwL2Yy9qC9o9xNLJbdBF93egcGwHzUTg9cjb4ioruP2SrfnGL3VjgxifYFSJxuRZhZhEqnHTGGQbofS",
  "key34": "5JRByQxtYesroKCinWX2Mq1eKSHic3iBxL9rQDobx2N3HM5qZKWgduGL3fjA5cdhQw8k7Mgw8bvskJQShzdKHkrx",
  "key35": "aMnVZAjUaRYgqtATHghn9R9cYH7ofLf5tEFuy1y9GQycTVH3WvuATuLRcaiVo72AhBb8dcbGDUjB41jsogGpsuS",
  "key36": "aaQEFReQ9AL4x567zPvr9vTpT77uLe9wQbB3wL5JWDoM7wyg8EyjiBvZ1DFHTrs1co4YUvQdEMGtE7w9VMtpisu",
  "key37": "5Azdm8GvsTpXApcUB9aixa67mmi5iwYNJXrqwmT26yq7K4NJAni6GYC8FGjo8zfZxUt36stZzxM1dKWP1ABXzhU1",
  "key38": "fZvqBYhmifGv8Q9ygYqE3yadoR22ttQeupBue7jJnAFhUwD86Jpvk6emHv55K4vHsjDHHvxt7Rj3MgLsAXd3LV5",
  "key39": "5zTZ9RoFXPNabUkcbcZzkLXsD9TVVxGTbNbjHeidRz6XZxHGZGzKbnpXKdZNVKiw7UBNk7xRSW6yJ5VBk7XEVRKr",
  "key40": "ePyKxbyqrSEraMVJifKmB2sm66RZFDfhzQ5pAMkxRpmJ8B7BfY6Gs8Q7mHMgqijrfdwEsGZf8bywWssnd5dKuJX",
  "key41": "24YpDL9621LpDbvrQUyS3Ad1Sj3MKiFU6BidmZ6DHDaQCD6NA6K4AodrP2rkNrE1SYK2irNEryNrpXd3TsRfXBZv",
  "key42": "5Bwx1myaXRCgg5Qoxm15SJ1QgpMoCzvHzudkdTfns5BQ1hAGWo7K6pqD21m1J2VWD6X733GeaxVsVF1SxJetMgp6",
  "key43": "1fJiREAehFzbRiHW7WN5yePMQZ7aZb7u9xbFJYBftu2BDLP3VHGnZmMiULVxJ7cJ7bVDX2EWTFHRiFRPMYuQyAp",
  "key44": "3z3s9xx8j7v3c6JjYhjrvshpPivhSGn4HjbRrfsfHXx9VGmwFHWUduVLfHkn4iify8SBh6TUFbBde5Ck1VYYBLDU",
  "key45": "5MV6kESqgichAXZUGbexHv6wnidBUcUwM1gmnQApEeEtCfFjx3vzvMPAzprFC5JUUhFxjx9CBo4np4CRwLX93LGd",
  "key46": "589wzmSXWaW9GXBiBjSRxUq5N8HhAEYgxs9nPfZ7FVMW92sHiFpwbB8d6dDZRNB2WeRCG6dXsjY7WyprWtJyafUq",
  "key47": "5PNvhiFGFQ2ctSuv2weAKzth9tGkQ99Jvzh2nNMwmTJxgAKUrsyXKPwy6J5DBRDQtJnnF7Te8nV4rt9awHsxUZ4p",
  "key48": "2aWcduwJHWd6SWZ7bU31fBzDpntBnyvBGZcFgsystzEfrXHM3cr5N2xQTu1kuDb3dvotXLJL8DXfhijByBPY6BXP",
  "key49": "39NNkBxVBWZiKBkrXUiH4RViYKqoKdBknctXcAzu85eKeQr3rLpEbGHY8FGUBEFhJ2jWSMfmUKV7ATv9cNcF2B5Q"
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
