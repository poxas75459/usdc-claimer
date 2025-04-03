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
    "4drE7ShhjCEi9kyuFjs97zNFZs8hF8MzuLEfVJiZMzbpqLRtWKEPtEzKYK8uUzzNgdtytG4X3RRpzxVyfDUw7G2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uY4UKxHZtxKNaZG8a89xnR4gEMhiUw5ybFjX8gh4cAawCLyWti7S2GmWo5SPviwEJC7MSg5g4WEPCh3X4MCd3Cf",
  "key1": "3DFcJt4KbcfBZ8NNe8VsdZ6brKRTFoMD75JBM4Z3CJeZpcTiG2ggnWc8LyXvuQeKo2nuMiwdea1CPrHj4dxij2Ed",
  "key2": "5cB7MEYfXHVaMMc6gYWXN2EehUXnNJ6LMar3Ec8nMEov2Con6nMNDyoj2CsBvxsxCvTwXwokjBpnYpKkvUJ8bnn",
  "key3": "2fUfgNWegYmTF2puGp3FjSXH8AgHpVh8tUh6zu9bZFBk27ts7geEgFxhwM4MLnxz5geWik5P35ju67gqvmkKhADT",
  "key4": "4VdgTa3rCVtc25z4T7pf9RAXyWaMNcGuWzF6BtErUCNiq8DrjQdzPNVY8TRuxRCQj2sw6HHMWkciKTK2yAim8oiR",
  "key5": "4EeiPWEywkXtvTibbBDzaiiNkS3DFSCMWcRfffX4W79LnsYAe6GsUrgqGNSbWd892FeURq7jPnXcBVhh1q1RSyCg",
  "key6": "25LBR5J1TBRmLJKUtJWUhtwzi6xsyz4nbTqq4x9TX6cdA3sdmdAuT6ooocg8eGbvsHmFMjC5GrRfcF8tncKS8uEL",
  "key7": "3UYP5GXTj1e13Ap972F1wdp2BM9LKVkrGG6ov6NTLU5qrUWUEZLbK73dMLUYJgWaJEwsogu5yJdVwK5i3Huh7Spk",
  "key8": "2pXf2qNahvJtSp6KgfZY5yxzPNR3EuncKZjaFR9ZxMAjsuQuuWMqNCzDBYHQL72SAHdP6a8syn4VksHyfbgALz5m",
  "key9": "3NuxqgeRSQvhFwtA2X2iP8NiLz6f5Gr8fubn8Y9JDtYauzcMzf6HVADiPEKdquXBqMevXoWmC7kbcEXrQziqiFLU",
  "key10": "2cF5TATmQY5D2d26yFfnLwWfeKs2J8UaxhbjpMKD6wuScPwzXpS5WpR4QEXaDnG2SjWPVL8CoeAZBkgfn8Xsskai",
  "key11": "McRRHEz5YX2rDYrvtUwqYSUbnR6YfS2a37LQD7ggkVPSqV8qjerwvBZfr6t8xZTHRaTYPCJq3C7tYggvYmuHnjF",
  "key12": "4g6Wsf9pq634mNLtMszSVDF92NTJ1W7LMGHhdfNRBMMKUARN2v9Lq7Miw79DRhUZ7DhtZrMyNnUJF8zBnkfW2RWM",
  "key13": "j7He7yp3AiqHHBNnnXLq6dAggg9qeooSTxMCtFDEA3i6Bd2mBSkBGXwU6ACRfzqLFoHqtLzz1GxmEHxrmDBkitC",
  "key14": "pRwfZf73NkvFxyWVERfniZzkRsD6hqd1GwieNwzfty8s2wF83HQB3nUYepm1qoa8drr2EyoZ8CS9yxPsgTwfVxZ",
  "key15": "2vLfVaMf3kNpmdPdaofV3n4hosQUmVLxSHCW26H6fP3BoFTkaTWPtoiF3ZYDMemExNz6j6UH57NVdiyoL8VqGqih",
  "key16": "5g931uWzUxbm7rKdwyLRLhkFbU3PCdKiERFGF5ZFcAYZ66Ty83GZy6zk3XZfDTVZUus8GwX4H55aPNPvHY4sWweT",
  "key17": "5Q5AdvUNcVCpJ3FcLDFVVpSL7sTNWjjNvT53djwtvFq1qYoqfgN4mmaBzSTCvEq7CeJbGmbMB8CgrfUDWmhxGYLh",
  "key18": "62TnbhgNx5x8smH9tAMUA3WAXtxWUCQPEr3CXpZiuGVhaKUgEUBT28UWFFw6VFWDTZMuXMfSSoEfUrKbQYFo381B",
  "key19": "4pMYi6MxpnMszQRstx2sfpPqXSknpsCSLokg6KEKJRqHsBcHogoU7LJ1arNJ6ykssSaGt3e3i8E2wxdJf79DN89p",
  "key20": "37AS7Tns4opw6dSjMaKq3k7keaPF5byVA9K6e1SVGHy93rnKP2yyZ7Q7PdS3ztfjLJ5LRR7E64BK1euM14YgTYSx",
  "key21": "NzNB6eRfT6bz61WA1Si4AzZHYBwx9KcYE5tMpRARyFXhhNeNgo913t34Ki2rjfJTUKDR1ZRysVdrMRyNTB7cRe3",
  "key22": "5Mi1VowUGPxJtV1bo5SX2F8Rh7idNegwoATSeeAQaG9vvwZVuKGAChAkeRUDYztnYp5RiwVaTuc9vpV7YNNFBQP4",
  "key23": "2HhctDZmS8cHicpTAdRRN3Cmg21uaXSSXX2rkkWotAFdJAjUNTWkJ8FYbqSoHHuZYCKjqEF1HhLrbJHnX25WysMS",
  "key24": "2Enfawi3sh7ByYaNeDuK5L2DoKRWoCCPuURZenNaHdB5sCaarH7jxyHF1yP8xtz6WCyBSGF2hMRf7EET8iGXub9r",
  "key25": "5C1rTBb2GrpbTofEs3Dgp9kyTDVBR5MF27y3XWvsLUA6nUWrWmyubgAfXbtfvcaLqTXJVMfCPphpFts9od3gvRqV",
  "key26": "37PuM7jxxCYfrTYSNJqxo4q1KcN8BCgSphz1UpTAFaNiF8Uqw6HS69RQTV3j7kMHJaXWJKmrJD4AehvB7hgiFJ6A",
  "key27": "4iPqDGWKLJnp7RMSZztQmZFKvqEovnwAe1RwJhnpboujA8NEaVi3fXDrh4iSbz6MbaQgazsgSQA16D4wNJoUfrNd",
  "key28": "5K25XGnLmZ9wAEaMn8qLbBWbFJiwgeiCzoMmV5yQxLCuU73DWqxFkfzERhCtAmLx3FcQUFumQUW84jsX5mmozWE3",
  "key29": "3Uk8k6hvLSpeYPTLiyo6JJfjf92fwEzgXq73iMAcdxXHPduGCg9RVp8GQoNojNpFC9gaYo5UDe8znBTM4eGJFvLn",
  "key30": "5tWcPsoWUr97ZtUTRdnadQiZJBuRqYMXHWwzoLzWRew7k5jNL67fRHWQ4k3WBZshYw972wGbtQMLvQB62XAPC2XQ",
  "key31": "5Qx7sYULJHdPwRhXn6uGPsoYztfwskug2eiLpEWeEPCzHvXgkdoq7KshTnb7VLaNQsjSM23oM86QMjd8cQLUFEqD",
  "key32": "Y9bbiemmrU9ooGiPjS5rbxBBRRRm7HmhrUkmoe3Khpv5jycEbpPzLaWs6gaWpZNEcPHnnHVxtEiQY2qXJfbQEa1",
  "key33": "21q8bsaA6rzBRVG3KYtEDpYFwRcxVHpcxgH8fycfwbVvJamsSQDudyVEaNeACpGjWdkBfbw4izzwSxFvEitz8nQ1",
  "key34": "pYjYjTWx5nNv24q5j54ZYzQy3chfgxsewyPL3fPJ7qhfWV28MVHRRqsvcULyFgiHea5Ld6dbauNhvUVjnDuNNPp",
  "key35": "YiUkuujfwgjnp2QjqBfQPu7VRfjTD8xFvN95r7sJEjBsZCYr1Dn1urr9ssjYxyfSES5vEDdxp7W9tpgUr9xM6Z6",
  "key36": "Cj47FRj1suUjykXZfE9q3m5Qs6RBQRK7vpBWTPHc9XjRBfKH9epGTn6QNdvXL7kpBh6nx4HXEX671EucjwvBbfj",
  "key37": "wbsc1vgh2PmA1zhUrn18Ty4qvcMHCmUTezMm2L4aSsiUJNctxSmWcL68Z3Y9KPiRJkXcTWy17UbyW84sDVaBcx4",
  "key38": "2Ngd6wD4B4gY9fAMxkmfQTomZejToK4NLEJMnpwzX6S3r8CqyvH8dDeUDLDTBM4X737hbBR6GpKKxxT6bkpKTXAQ",
  "key39": "4wp3uGZiSMTacGzSMrc37aDRthjqYQSUCRrvXh4rqGxD5uTw3XiWMeyT4dLJ5UDSwBgniSp5Svj4aLfuF1XuKy7h",
  "key40": "56G7psSjVCmJuaFivfVNTy5Nyp9vm5qZ6kRkq1Num2wKWRA7bjV4eoBHi2EJNeGwworQYGShpbzjjJKonP9XXFtG",
  "key41": "2aqc3M9R9X56sxZwSkUX9vvcULC3d8Yveesre1HCfqKUkxWuvjEpFE6WGES6fcszEpFfYWHyiQbfmxfsfanD9CtT",
  "key42": "2L6b7WyAPH7H3mEXKSJaMBSXpSeKdwRUkgNpRkMPXvvRCnEvwaRN7jLQg8VW69Qtitt14r3AAKkQHmEtUfzBSQWW"
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
