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
    "4LStkLfZ7wi1Fuf1eMnyCHRkn4xFUaYSYQqty58E4mzNrAE6iP86kC8f7dbLiSVRWE61ggPxtZvitb8t69ZjZoZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64CWuZjVD6dXphtJBaN11gxZCVMsaKRMq4SdFoKFCZKzdied4HHSKiKAjQ6GmPniHMUVbkkZN1mH71gmhF5vtLZk",
  "key1": "5thQBpbQGog9en91hL5yCFHHrJkkFS9gsebjF3X76Z5FZSwuzMLZtvREVvJ7sMmQh3H2dGeyr1H78sqDVmJd9okg",
  "key2": "5t2WE1KpnjqTwTLE48pEkrL2c8y2jRCsuMBXp7E5HKLKjf3QLPw719aghwfqRpmtgercv7ivgjRLEHXGmdtA8nDq",
  "key3": "6v6esUfAXZCaoS6bscQz3hrWtai33TPmGvRar5ivWfWG8XkHUPRkjtL7UqE5yZNwMoxu9HPju4mdwXU76EoYbTq",
  "key4": "3pNTSH922djsvXLRnYXYujDn3D6yKeDA9QbojTRAt87LUv1E7rGJSZAewGibFvHB7p1yQtX9FWqF4yUoQncuWijL",
  "key5": "4ixGrXxARnXP2TBLTAe83WYn3N2q5gMQ23kK7ajWEEx8s4grYxtJTKA233vGEsp72vs3AH8LZEfzfqtuSabC2ugk",
  "key6": "B79sSNiUGKJNN4KGFRUWawxhAJxV8AQP5hJYCfvfunRka4uv97un8F1DrazvkfqBYTdcYjHfohfv213DHvp3rhi",
  "key7": "5nGtdVJZvJuZtAqe6yiVjfEZyHRS5HZKk4RLTWnwMx18fE14hp299kDccHjN69yn8a3Se7hE2DKpFGtTsEnCeDrp",
  "key8": "YjJZTanwNZ7Sixkj2zqGZ196sW2x3UgyBPGxzGmqkn3QDTf5qGPj6nNNDGcixG6z9b3GHoGLWwVCv4nj4k2VVUC",
  "key9": "42zZuMdC2hpB1KG5pS4FA2FqwDxnG5PPkG5pVQV4LVYYXsHJM7ii4VETDZ8PtLbRFqQxpWPR1ZLB5Lf3CjmabJkK",
  "key10": "4vwDMrQA5JGymwGvaYPhrcfupd13WVQ832Tgdb6p8LUrPLdBcjqhqT6ewUDjEAd3pvpf7qNPtJGV6hi9e1ktbYjR",
  "key11": "S6FUnDAerMbkoezLATZJq8p4r8Kt7tZF34RAzGmNUshUHAioxfGALxKK3zv45uBrNVqnabYw9pqL7CZGzSNUYFX",
  "key12": "21pFba4hK2RQdWAZBCMaoXBEf2rWb3UQosNUL2m9DcMXpNxHJLsPXv6bMhdx2i48cY84bdfFXYJ3JkDhjAcnVMV8",
  "key13": "U2osaaRmWWnXKQcJVG6JNLJMm813FTnwAxtnuoWUMSeqMwTrxTdUH6LAMckjbJwP5yQD7dxfkksZok7guSzxNRt",
  "key14": "5qtDyU79wMaLiaoqGpytvtKDSyjSWHmjHHymeyBJE65JaQqYioNPgLZSme1mumsChtz86RNR3e8PcUwEfB6NHox1",
  "key15": "mvzEYy6GcW7Sa9K3FHboujtftPXNnw6C82CWgUo92eDTyecS4rhK1a6kr1YoQUgKba9C9SL2j1ZD115J5L5emN4",
  "key16": "664zpGZyVNZRG6yDQDqgB2uAcbQcDQFnsgvoe21gf1RTruEPBUcf948wmZjfCD7tdZnchEPyWnC58Ud75UAU93Pd",
  "key17": "3NwFN21ii2JJMsE64RDywNZ1CUQgRk3uMG5cp9qE1QFDrmdnn1eHiZt77L2dgh79rubdAYyfgA1YzQtJTtxjZQi3",
  "key18": "37Ytbw5LvJdiiA66rudrFprM3FnjXm7ykaboPLN6PCaiP1RhcbKuHtwRreacp62ot52TaV6VbPcQ3a3u6e9GqKD2",
  "key19": "3hPVMVhvjtxdS5n927La95s1VKAWxaLzZi4ASpNycGkkoEvXv5ScppGREJdmiS2xhFWWu7j1GNyd6aEWWbbwQJPC",
  "key20": "2UzMEyxBMsAv7r2uhMvA2u9QZweTUioBtTR3DF98YnFHCkvBLib3aS7Z16oxKyehF9BeUhaX8E2Eiv5NLG4ddbDm",
  "key21": "5eCWxZk8Fadcqw25kPGNTMGcaaUB4pQsEtTzz5fFVQ14RcjxUWZv5sb6s22jeGiuABigA17A4ECyhq3NCPTZU4YN",
  "key22": "5ECLLwQMZGzzQskdam6vJP5x2hqwZPhsnXDJxCYuvFM8akPAKZwGv5SjG6DZmT8115E37WbGKb2JP9QwpWb1gq4",
  "key23": "3yMYHSrdJSVjqWWK5NhJK7YqfXyTQ4AHN2tAh7b1xD4ZTrxWufRVR9624pjGXSf7gTmhGikUKkmmcoYbdaBpMvzg",
  "key24": "67SSuckpQwVo2LyPvhhQKk2CnDzwE59kmUQML5YMCcjXfB82HxP2SgujuUJDXnCPYDDXhReaByYDjCvodTH5pP4z",
  "key25": "434yokg9VVjGsGSQQyprS7WGpnCHd2aV3TP9afPSsJkRByCfXrnCKxoCoffa2DQvEsQK87mFfCATayPRSSXa5WQT",
  "key26": "56YoNx98ike1yHCf4tyyn7L4HF1KdAu7dH7TFCNxoWzQsnX6DDtpzKr2bACU7fPTC6pbjp1DFh1SNQNDibaUkP5H",
  "key27": "5GEXmfYumUXYeCba1qMiyesVxb5s44RLwjcQvjF1qhihb5hhmVKPGqKF4KfTdDXJWwJmG8aG6BWgGpLtEcnMnpYf",
  "key28": "hgq9wge2RHtXAsH8FLNGG7A92g2jgwZ2Encq1QHABEbzaH2xQYjFxsai2TGJYAFhftvFmLM9VeDLJ6o4FszifWv",
  "key29": "5AGRmiseqf21UJ1hCN4MUdeLBF6XtCyzY9BWsY8xzzRsngpqNszUK35UhbaWNMAiYYEjSo92E6Mf1qAvnX56kzYV",
  "key30": "4bweEKTobPuGFQXjZDrszNxYUp33zK35F1EXQk7qrNZeLUBeVnjSQK7D2Z4bJTRoti1i7cVMUigt3ZWjSvb9is47",
  "key31": "4p1LUa3ozqxzHxdkCzC568LQznjmXPRtFszAcAdXy2x3byBmdQoPtqLKLtdCgEu3WXfAGLZ2gWauopzhyfuLChkr",
  "key32": "276musVmb5H8Va4Z6QCm1fTahWoyLgsKC242WY9qkZksQf2JEfw8yUAbdHMzxCEKmwbmfaTMkmbu2X2mh3w3qgt1",
  "key33": "5qWbuPmHDyEf44f7Sjs1vp2nhznvhB6RZbQdSYd12i3t8zckZgi9f76z1ZGCfGNF8LmDh7s8xbgHUSdw942qq2dy",
  "key34": "35ZPgxZ4HodAgCUa4FdVWoVpsEEGpunAJEcFioFUpKQWbNxkPuggxJb3awdA2p8fnBsYAvrTpeRSHPLwYXdv84su"
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
