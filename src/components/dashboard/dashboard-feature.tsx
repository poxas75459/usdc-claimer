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
    "oMV4K2vf4SughmYDHrgMzL6ZuZ4gUFMAdcprBQEdWJfFkALPPVCn1iJSUE8F7SAGtdR8JQRukXNVh8cYPfnENVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cKweBhd8MmzqBWjpNHEdA8tWfNxHRaH6KvwBYCcNo3QhVQ34oEkE7pRrPKMS9cDi63Vmi8S11cPrYoq5R93sMSh",
  "key1": "2YPCd2585kc9PFAqDjZPA4TYFpErnK9sue6DKhSfp8VQbXMjtpMuskorBv4Uyx3iTg4xqYyb3gjhdn12zCTDtn4e",
  "key2": "3Rm6VTJcDwaTQofisNjYqib9AgcYxEyGta1fnaf91pDFnyMuFdGiAmDG4AtLRtKrSW9KmHrbwSfmmeJLqRS6RWdi",
  "key3": "4qH6GC76DSergizVSuqAWE9ar5YQeRvQN4fPSGh6zQoui6kYzQj19ifN1aqt8AccvUVWuYiiUztumxvTNnzBxJf4",
  "key4": "5MtXWtCDsiRMy56aGBPwdXyNq1jEfFQFk44m9gBjvCzMQMTNL1KASU92cLFfnJuS1aKioe8g1Pc11TH6mdUwfjjb",
  "key5": "63UPPSNNrngc1SEeVChRBogKkch6WV1iBTB2kg17pfo9U3fYFbJhifctYwfjJdwELvdkXorcQiyHRapRstSS82Wi",
  "key6": "32jyDqGadx7AAn8T5xwB6y4fCvkCzeYg5rok1t1G6ToryQhYc1NRz6DNYq3gp258iyy8N1qvXQQ2hb9Dhiccv2KY",
  "key7": "4zbPaRRXuSUH9WCj2eN3h7FiZXqCjokrvmi9Kc2vBDADhCtV95YuGBhMYKwxcxVjapjrpJFfXSVukgKSVp7JCagE",
  "key8": "2GTGvLY7YDjM5b5jaVior8LmqAcdBQ9TagoFrdqF1NSNBnG1VAu6cn2XGQcAfKggTPEvCZJ5AzAeTHCWdemBQrzd",
  "key9": "hFRHiEYk4BZboNJaK6BAogsn421xyAwUE4KpB3nXbo2jbccSuhpxwcq6CbYb2NQzEBiRdWN1Pb42Retq8bUguHm",
  "key10": "AYdcKr5imBmBuaA3uhyyV8zhxvWxh8aTyj6YgmBTAof2Mh4DDEpx7R1VV8unvAPCjx6UmL1qkoP88Fmit87xvDY",
  "key11": "2ydYGJz8dY5dcj9ZKgQjt2EzEb5WadNaZkWWp32B3XQP6yXasGrExSAW3Asb3MKut1imCLrBSuHU21DJB4CRMwaT",
  "key12": "63Mo5rX9XNTbyP7HzuWCMMNcfroKYY1TQEcY5LZvvxYnCopSzVsduDdkZUCcUssQLsidBgx3XFiuLvuX941fkLJa",
  "key13": "MYppGuQzpJiSts8dfQQ3LMwWHKotmUktLNxqVhHwhoMjdcJ8NgKNSuKeSQQN7gGzhcign5vZmdCYjzjyn3X31mM",
  "key14": "4ViLEiWqyjM24aiHReuUEFrwvF9YbVrvXvH2EiWzePuwqTtKbWbY3NLRUbBWtDoBFugfjoDmpmaMBBhP1y1YhwfZ",
  "key15": "2B47V314kMivcs2E6P3yBMyQiiMg2P4r4krEfeDxTydAhzfAToWQih4NBTFjnzsJSQB78bCfQ7Uf9ht2qXq7y8A6",
  "key16": "4wQiCFSuVJRKx3BGP71m3shFN5NJP6gaspGK1EZsKPhZN45m29QpTpEsAFSnpR3R2CC7wH2DasWXcBxhKvSpc9JJ",
  "key17": "2P5dYCzTWtcaw3rLrR748FU3L9jA63T8BeTV3csya6HQ4aTtCNkRTggK6dPjB9W8BF54obbzPnpfC2e7bLE2dk9R",
  "key18": "5pXWYvQLwYt2E3TWrx8hW7fkk2XndepfVoTw1t193RKRhyQcNJ3USRZgRaQHdvaEgFxGEzDgzozqvCWtwFTuoymU",
  "key19": "F81CsVnVN9tRdsefKbRtBZWfFwfNVFSwDHsQHX4fHwjmEghoYBgj3NuzhazSsS1TGcYkPbb6wnWtfkeVFFgs1oc",
  "key20": "4q9RgZBZqhVJAMaxNRnyKKXK9y6MhFzwQd3um5VugfRU68gFgiamVquijgtkwGa3it9GHbxx7BZZonMTQbauf9u4",
  "key21": "JbYLgoGiLijz41XwzzXJNheU6mfrTtNpZPhyr2X9ovL6jFxouvqKXyA1qE6Qw1YgA6LBMe4pAgntwG6m6Zc5tAY",
  "key22": "4i6Dn2wKp7DkwDN6YLZEhBa3vLmsxaqAxDzaTuUDUHNiEFJ7kJtt2ks7NtHqSv9JRzTojBoknWi5oL46MeLofggp",
  "key23": "2v4yu4sSUR3vLVsiyA1ABTJmALEsPA1Hv1CRH8uYHibDADbK6zH8CGj8MvFzT3x5hwJCy1psSAEy21GJzhECK547",
  "key24": "2mvWhLk3YaGcqaETk1Hh5LsRFrh1NAVvBJQSz991CC1Qpu8aFNxS3pTvHt4F7fZzeYQqthMLbQXC3DCNLxvopLJU",
  "key25": "G5q3C8afaTKmXWum3uad5x2ic4msruTkWTnRHX8k5r18ocCyfo6mdrx3gKEDYViuwyrPc4DQZyV8adj5ZisBQmq",
  "key26": "5XBRNswyjW2y1SY3oF1PVzzg4cZGLj5j493wKTxjuL18BZ7wFrwJJmD6Du61QESZVT9xxnbcr3yZcm1dLG1pbViS",
  "key27": "4pPCZH5bNyxuXjw2XdLVPD7rcWyAUCZDtnBAcpaKKmGSjhqo4Ymv7gB5RW3DpqZxvTaKrjdSwq796UJWmDTB57Zo",
  "key28": "4aL6wqLEnZsAx4qrrSphXZ74LxzRv39uQaGYbuUT9WeHiHDGvZ5htwL9s9naKEUx6ELZNPB28xsEUkiNyxKtGF2R",
  "key29": "xv7M61toGnv7otdBbKvBAyEZJ2ooh8HsWiT3snFykbh7HzAo8VLxJ5tyvAK8bqcW9gqMhXTSGe7StMDzFjycofE",
  "key30": "2S11msGbQmLRnzjzSaMmF8yWuxxUByurqLJYgaaXJ7QcXAv8zuy4PBsiHDbgce97o2wVdZnPQ5YMn1DJrLYUD6pV"
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
