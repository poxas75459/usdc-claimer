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
    "2kuPMu4vqYGEd6AC6zPggCEczfjKHweh8MgEV1Xcj7H36T8iaa4PA9F2MEJ3rUokA1kGC5oBYWL5HjUrsEEEniVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sNpKf6VaXRixTzzKHYuCEAe4pMegSq4pQTASLQNPpXgqPKybQ9AGNAaDmwXm3XVeq8yckPMDeepXdEYAep1LVMH",
  "key1": "4QF9aHW2yyoSaAtBsSjtUXDaULnA7K2Vqh87vppqbp9CoPyjoqAwKFJKPaqWD4DHjZ7TeMpZusY7p1LnJ9hUgshA",
  "key2": "4hZpvcv9kZHV565bFf3FztWgJeD6hQpD4vYG29usNfW7A9JDZF2gBSWR2zx86tbtNei4QcN88ScUiP1nZPm72zAS",
  "key3": "YkPZdysrZrHmHcu4ysU4ebwqEGsra87vSyaGaazDZ91bZ15hGGQc8uLx3jYrUuqx8oMx3YhK2NuJWKhg2sLAQeS",
  "key4": "3AjeH358uwGMviEDex4as8vtXRhncPR72pr4XeSYpzKt1o1rEfc99JLM42QSbojD2pLjWkFL3JF8oSoVyeAYxBuh",
  "key5": "2KZd18UyeekaMjkzFQVSyWa7wsjXuzjFSTHcbp3daU3LhPZgJuKW3e8Ug6pt5bMdGNAwV8kMDN8K8428cfEt5bHS",
  "key6": "31CvDZYhGbabDnv9EWBQk8GC3hbwszWS2AW1Lh4BQmdMEULJajYm1yWTkczaWYmnB3JVn979hG3gsie1Ey8jC1Bf",
  "key7": "2NnHNhjapsnobMSGChCErYwzfpkrjdJwrSWDcQV8SzfHYzi2avtHrMpU37Xqj5kS1LGrpu9r79mGu7SrRokWRiYQ",
  "key8": "653G1VPwvRRCVntBhptr8TEQ5XheSguz3iY7ubM3MuanW378CTDEYQshJRCaDoksJt1ig3AjuGrAtDadfuiBxa75",
  "key9": "5s2CzTXWeKtFZwyQmhjud4dMP6FjihZ4FKthzVLCwQQ16JK7TuEkAKevdZGifwjAyqXMcCkSmrKUS6mkshdG6uiF",
  "key10": "5XsU9PKsHGcfhqQuGwCHn36FpVhPdZdFbfL3abUbtNGvM7b8xYyf2zubkx4BYmTMqcvjuKhLMHpywxeyYMuia5Qz",
  "key11": "4xeEEiy1Dbf8KdEoB6dnfQ5tYm8Jtf6Pg7ano3AVYkkw3jsuH94RvmijCUW8WwgaEyBJctFjPAfHpWidSfBEELEK",
  "key12": "fCHY4f7SvMp5v4uWHGixAazmAfYwFFP1yYVQM8p2zUU8ZX82PtZDk6z4rqqtBVRnDCCy5JPBXd6YJJw4cSkfsHD",
  "key13": "5JoR17txEnZu9mujpUcizd2fWerQNab827NjrznnmLusk6DiWUrZBt5KFPaTjsKiWfbMXyvbrS7ZSos9JSdqVrFv",
  "key14": "5ZuLJyWGvoWv9GPfVT4hg6YMWQEWyonP5Yv9yFofPv4SMe2Hm12TcAFBHefTADxo7zXgiqnxiMHo4nJWWgeAHdvp",
  "key15": "2B6RqBRCEfVDThj6Nf8zwT7LYP5KhrYwECazjzFD8Hzw8utXDsTiHShrHYCG9vicY643zXPemn76DJrxRySxa22c",
  "key16": "ZW6hB77Q7D2Ctxz5twQdzRtS5GrLcFi9UpHDNXcyjEE6CufWhY6aD5m68bMzvrWN78xAvg6TQfNN57yURJzRkyp",
  "key17": "E8WfBhZEKX5RbYb4ASRcZXFYgUJEopjtDuwHZxR5Edh6g7mfom2TRib8jaJuTEV2p86YXjM8yjKZGWdw95rtAtj",
  "key18": "5mDMqGCbN6mWswiaH1BvRBNxmoUYU1PakhHfEYC8shdMJjQeoE8sPgUi8CrBRYiQEcmae4oT69c6PwonDAte1tZZ",
  "key19": "4eNMTevHG8PgmS6Ljb9tZxFjEGfpW9K8QgTfUE5eU2C1CTKpzZzGhqx3aaS1EFHqWVjaqWTxasyAcu1CLCSM8hdv",
  "key20": "7aMCRrqL97CJvrANGdMTwsVtEPNEvnDW3CHJpQ1SSQeRG2kk8uW6GUU9FNuscAB2gMamd2aiJGAZTP2WLa1xbHh",
  "key21": "WGHr5PKCJQA3M8SeWMoSmyvVYqSCixagZS3R3qJoV1ZeJXdvvjPFnMXg6ZF2G5afxu6VJqeMsinLwB8RbQ6vQf6",
  "key22": "23sypK8C5vwQDb44RBw5Dbvu4531g6so6Rxm9v37hrEm3QEmABfWLXV9NH2PSkbmkX5mQDeV9XmWdDj4YkgvZSbh",
  "key23": "3XntJvP1b4huMeRmtREKSvyAmLB2ddw2viBBQvAYBrFs4vuj4LsFRc8unHy7yr5y7o7bdkNfeRmAPLLHynN6ENW1",
  "key24": "4gjTMdFW2Y6B6k4FHTC6eGfsxac2aYkfy5NGwxwejymBidVu4edcz5n3mvrWxfWQQMC9Vsjc2HTrwfufLjjdfmcD",
  "key25": "3YGgQVtqSWjF48ow31ZtkG3jZ5FE2hhPERG7esmqtUgNmnnujzhtswFJmGGKZ4w8ecbQDtGg87tKhcEPT6KzYQMu",
  "key26": "2e4FqthWgBP2MWxowvF7uZk8K2DALYvYK9xMD9ujfSNQ2dobfxYU1inAzWi5JGkh2HCgiJBHt2ewSQDeS7LgtHaA",
  "key27": "5jAAdMHezJNro9umV8KTaEHXYaby2Hp4XRqYhyrrMCAoVYecU7CdohYh1vXSDnkjcveEPo7rK66kkmxZx3pqmMzx",
  "key28": "BEP3wgZ3fhsiCdDhWmt24JZ12pnZfsZX54z5VmgPEuWboS99AecG1nQptxpEhd1mhN3gPeneq42kUGZXD7c4R8h",
  "key29": "4dbKTj7aABdFm4Vj5TRbhfFrnJwPUg2o6JTUyMbub4q4qqiweXcEFf6BuCp2Y9piGrtNg6cWRWs5c2XQKRHDoTAP",
  "key30": "3TyxLRHexWb4qZoDdZyvG9rwZiQXkby9nZUoiYQY71CTb2jSPP9y9yuZyYM4QBPbZk3yXfamRHzbGmGLEwy7U2qw",
  "key31": "3TPW1mCkPdkrySZ4TVXcdvtLmfkcxHi8FwNNdKGHDtxLyThKK7r4FXgFjkWh7wx3Ushb8nMcscgQSBSTgin3eVhu",
  "key32": "2FFXMYATAZg2wKcHA8vBkE2AxYQMFR3U5zDmVKPmCF5tqn2DJLWkBDWd2FfKg4wusqGN9rXQWqPZJfGqpoczdwzY",
  "key33": "2tZGCW9RwHZVfQ9391wYhJRHeaTrnYrSfUyGr5Qnhgf11QPYDbbCAt7SLfk8goCTzi373VABmPwLQ3NcfNdmSa3M",
  "key34": "2AZsFxP8bgzszsf9p4BwRJUwep4K8B5TC8Xi8SLBnpRz3tjWKNrvWbbwuMwpPwzPC3aZn9bvH7mgjepJKgrwVBtf",
  "key35": "L7syDWLhXfL4PXiJWE2UMME3rF6M6jSN7oiyKtFwEZjSuYgRLEDTFSUQ6sZUgcp7hma6z2izW3btRttmqzjMCrN",
  "key36": "2M9wxM1pzythzVwLia8tXRSs5Bw69Dzb8jxarUemqLvPVPhrfP6Rd21jB5UBUCkk8A41E8YWgrw6BGMhPfsAph4N",
  "key37": "4z6L5uv3MfNcNMM7H9vC6X4Gap22GRD3QtLbWJLxUJi7Qi6vXRrbNLiyCAebSAzRU6fKNkQhVd6dMhYrayFMeR3a",
  "key38": "4KFVWy5sN2sWqpKDbJtJYhMxrb6KW9Q7mRt6HRSCLLydZtYipqQX8AhVZJEdFbFc4NkoqCESCb6Vt7JapnDF5kxH",
  "key39": "27VmabGdjFh7fNnBaXj3VzwMzHQFhd7aECZvcFj1GF5THCMBMH9qehyNWJzdvLm6bgt7nkWtRbeMk8xKZNCWrjoZ",
  "key40": "4H686h2fPNzAwftjDZUjeCc2aqMsgWJQYtTatb2K4fVsaTk3DbREQWRdDRvWKRnt6oTT2VGaRZ55e3N8TPnByteb",
  "key41": "635L1aFS2nYrmqTWN3RCY83mmXieXdLbs7qCvcvdPSW9Nfj8BCv4N9dL5vPoENaXysLgPkBtsbfhXv4x2uXYyF7b",
  "key42": "2hoNcrDAmhgpm7Gm4mwnF5En8e3BSnEqCKANr6jp38a9tp467R4E8eajrTT6JBWS5hwuaBBevgJVxsUYaX9RW1Lq",
  "key43": "3djnJQu86jUDrmqwTE29MXG35Cpv12PuS5174sT34BXEG5c3o7jDYMYabJi1h6LQNJAX7WjJb8PL6WBfnkPM4gJi",
  "key44": "3R16CVoJXfg7tQSe6rLQpiQiDqSa3NjHHT9ZXRNVyQXQAZTrHmGrBo35YAjp3A8TPdNaYUZ43V3orQdXBaFRgYdP",
  "key45": "3xEVL6rmG3jGdqaY2RXx5J3oG6ywsNtXp1JnRqr1firDbgngdx8xyizt1CLWddjzKgLborY47c88WxPftQxU1oyz",
  "key46": "4tAaq1MrmyyPMSN3HCDLUYFCQYvrXmTo47ULgeyV2F47whszT3ZQC5VnxFpHBpTXau6Fe52gNwnqxjGgCg3Yvwad",
  "key47": "2XZWrgbxHv8JJjg6ynqxNFwHgyMVrNSgchnndVkMFfxLhWo4qspfParTXUzmPzcQeHduors2623fX4wHfb6HQbx9"
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
