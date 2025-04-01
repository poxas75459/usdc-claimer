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
    "41vz2FnAJDXVk77rbdy2wUmqw91mFi114mVXWd3QRM1ZPin8WX3iwn7TQbn8Zps8H89aadATraTWTgNk4DAXFGKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uxxLZxZZ53FwwHQh5YQouPPsz8z8Jxyf3BAFDUB3sJL1V7Dm4Rrxum2T7ZutMXtWcYX1iWjvNsb7SgTDJEEW6Ab",
  "key1": "2h9DWFjtFuDR6U2tE7Eqj1FbGUPdLC9txDC9ba635KRqrtJ9mYaLvXX3MKGrrfbhvCNjEzETxzgE5BwQAYxDG8Jj",
  "key2": "4h3LfQnHGcQSPtB9RhKTq9S2RLAibeyPNKw83AmBdSBPusA6Nz9uQ6VLXh8N7j6Sjr92MfKfgpkvFDsqj4vNjf42",
  "key3": "3brCrj3Zw45hZrrp23B59kEagjzcnGmR118LhYv5xPpk2thuuJByrWsAGVX945XfYzb6U6mVsaLiGfswYsYsa3Zk",
  "key4": "zgwc7Vox9QxnRW4PtRheFx5S7yuN2cYefzcKFnrhNyfbQp4q5NrfEZMxWM6kNKuKCn4nwKPX1m82PwQv2iwt14r",
  "key5": "45FZ3Nootc9zaATKTPDsoXa3v11u2o1nNFKHL9oUirHZ5RWGDj2ojPv3uwnLh4dm2tGeKEkpqmoUpWUxgMn9KoZ2",
  "key6": "3DpZZrR89ZbayzgAd86qx7MiuoativtbbNcihK3FGXaHvWGS4v6fZ9cGdcwKrWot8XVNiBmGnVidnnU4491uvpuN",
  "key7": "5Xf7PWF376d8JUhFGpEunzh1PWPKQzdbxomzZvngEuMS8HhmNpjQxhLErnkD4Q4f3CnsGghX2nM3dmYsjzkcEtdf",
  "key8": "VjyFXVRTmw8asFmTxxFPJMxqrMjDHeUt2YsPaGMNTVRPS9fWXbCKNWyJPyj2voWghf9egEL1gduSsaZB7CYr77f",
  "key9": "4iQ2KbAPD8P4VFgzdp3Segj384VexuicKjWPjqp2FnpfiVss6x96rSdzL843JBgKkxoAm19sPEgqQ7ojQdiCQEzw",
  "key10": "2wPZwTi7HtoVjeDt6KWEBf22rGsGDAnBQncwVuZLooVGyJhqmURZ5acV2fLhVkp5H7VNuAiWaoWXQJ1vPLTDDHiK",
  "key11": "4PphpMyNqYJBvbpMSudzxsK2T91vaLsHZh9ZYjjfKp9zkhGbwybN7JFC8kxhDozepEqD7AFdpXFPAaVWDDti47Qu",
  "key12": "3EFCuZjerT1zSwtgowe8CKR7dqbJGhoudsF9o6xULbtf9NSvbYvMxUCMytfXPwW5MWgZPkXnHmg1rAtorHkRv8SC",
  "key13": "3rmEeqwKYy6ckFGmXiFkDacNew4wKm26i3CZ7PWyWURFUBpMoDLvgabEuJAuYymYq89Wwo9Z817PggF9kSWNtHRp",
  "key14": "5ay8CDP4RyYesFnVjvh1hnzXVizffwEtvoqXcJHXsDmcpJFkAWAruB57t36UUjwJoRiJPC9Mqq2GvnVg3WUUnmjs",
  "key15": "LhohGq5G48h8RxGbvPy3wgepAF8Et6t4dDVkiGMq1qa2bpYmzKrteRjhbsyXHFURWUQ6QsER8drBV9zFx7MMwYV",
  "key16": "4HhikLRe2FgrBXVkZMhM3gk1ZNVwNeJzZ47JHo4cHSTeavmcgNPHuxK3wpXzwEp9Efj5ZpZxu5ehhuA9H2bLdbFp",
  "key17": "4sgG5Wdo99M4Uj6dT8Q5FgZ8GXJp2Mf6jZbAMAgRzKJsuEMZ9hnoBUKWDhMbjm3HrWy5yXQBkQMRB8EFjFUBFu9M",
  "key18": "2a5V2jyomfkPQUQcDMJfsVp14JhVMCUjr4EMRAdkiB2Ttf3wjt8ugxqnN4QUyhPeiWZDjH7D4s7hivmhF65k5PWf",
  "key19": "3k8kvJSRtAahdH38A7BaMpRk4cQnVMCkKC8idaSQr4LQPoTChRAjnXYRtogkb9x3TXaaAAAALcXrUqEo2kTCKXGN",
  "key20": "46hUiq1tQCGPG14NyMY1Y6Sp6JVN3NZg3iMPjQ5Bh1ozrRbChcAgCtEeYkmDfLpMYLWTBj8ddP5LzT8mouWZGEMm",
  "key21": "NcAsZp4KuGPbxij1c3XzVPJ7bvVou6E7tpU8WQUVFxNqpDoZEpYEh2khzptv4zWcLxxmVEKgJ8tXgHq1FgFXTwz",
  "key22": "3pPvktSdMTNUDmodStCKKapXQ2NWGqH6rCciyzVQxdNWjENgp4FczK9kJ8sFrWMidLqffnKSipZPHZuvA8S3JH7t",
  "key23": "3x6ByYz1xHdv92enG9ZCvtJXZ5PCZcozJ36geMwUwJ2UWNHrXaknAHLr8aYvo5nBUAeYSfpaUeeJaJiNLeF4CSGa",
  "key24": "5gDtop2N6BY4Fxx3f9khCErmCGN2CgPu4qU34tXrjrnB137pZJVgsNmoRuzWVDrntXa3U4WimELa7MQ21VNs48H3",
  "key25": "2zEd1gBgMsjhvgmSz4x1uhi73nM4FfFyqutnDdo7KgBR8E41XzmVZemTWyn69zJihAhxC883CRmB11agGMtBTUzE",
  "key26": "Bgn5qUGWQ2tj3am8hJpSx9cFEbTCr2wL7hXngNVjUmPAjU5qpBSitN3VtkhpfyE9gjV224fbuSTKaQUY1oELXQW",
  "key27": "64Yb8aGCmR1jiRUhA9LSGAVH8VyAZsdptU6ho8nDYCwNjC33jw5Jmco2m1kSCjiexyQVmBfRm9Y2cM4nLgujL8St",
  "key28": "4MDzY1oVQkDpupaWdgtwRYRm1FQeXdR6RevDkLvqbPtEjYgFbZPTJ2HXZP5mQhPzgv8329s1ZsEzQUEVdQUcSBwy",
  "key29": "2QSZUhEmnhUXxV7URcNTz6SRW5Xth18rhsNUNzhfQPJeCEWfbLmwuqWDvD3wspwb2JC2jg1N54AfQy1xUTdMLsw2",
  "key30": "43tdTm3DpEzGGyipTz8CFv2ep3DN2rDccdxChq3ZBkAZWnFdPcTQBfi2MJ6T5p6Q6QEWra9FHSNwDZnfVbkSrJqh",
  "key31": "5YK1GfrZYHNqsVjcBnjifUyeAByNSRJnrZ5inemTsBXSbfGeabfQeyNGpbHwAFFJR12ZGDS4FNE3U6ZtoixSCYM2",
  "key32": "4gx5q3kcgryLrzYyb3K2JTsJX5bMfHJ2HUbnf2ThrCNqAKkZWXsKyizKKdUBtjpc8zjayCZNsQ3fNCWBdme6VTzU",
  "key33": "3MGgcv8HQj1s26MCnnDCBonzZAHZuSP3Ro38iSDqJotaZEnDykjnBtdEzetxvLRHRmkoUFXPGBnFWh9Xxs5XhdjS",
  "key34": "5c8dG6tihwMtYrT9oRt88eXMEgccvyNArcT7TQVrG5L3KA2icAK8QENvibV7so1Uaka5Z8uGtJs2SPLsfp1KFbff",
  "key35": "3jh6Yf99Rgew8UcRxABszbyXyjoQPPqbUBWy9QAu8sC8U38Wdt956JX8uJ3fTeDD16wD8twRxVLq5z2vuHVVWpLC",
  "key36": "2fdtVwGcw8FF55pgokrUqn8t2gGUX3vpDJsaDFa9ZycziUMtPRLzVyDECV9cdiYyvZxUNGeU3egBLehDKyfo8Ljn",
  "key37": "4KerrvX5bQAwAbmWdLGJYQq8XXs3kzXpSeFHqhSbTAPKkh2gQqgj6eRzYw1kE7xwxN8XCVUMo7RFTavXf4EqsgwA",
  "key38": "55JD2dzfZurLAsTW91dG6tcqgdwfPYST8wjjHh448bfiPB7qLadqnn9XMs8gQvwwRPaxaw7vzRoU1mmQpWRsW7nm",
  "key39": "2PWXNqANhK4Cumm5aoR7QGnrwMhrA8wEsZizRJojPhem95KXMUYUTAByKoZSeWT87AabcibbmV4F6xuWqKnvThbD",
  "key40": "3uKwie183Uvcbkwh9BwWSd1X91Whq9roULnyTxRiUsKhebbcHRhkLE9Xn4JZb1e8xBmLNz8xfpad7YTZpfYNHygA",
  "key41": "55D8oNUuo12yy1rxHmAQX9N4fQPjRhWNm54yoA68b5tGi3eAKNUFV4PkcMXZcvzHG6CUPgx1o2vFj64iciLyuzVX",
  "key42": "2M5FPe1SBkX687WVQrCKR4To5hAvDgftDAbRGgS4JPxKypcYiv565bay6mKh5QH7b2QEYcNkYfHTRat5iUMyu5dp",
  "key43": "4iYfUpXctUbFx9jG2dkRXGE3i9r5oPFVTzdEJhdKvrMJc11Y9tD8q74TBuCUvjkuiMkxzZ2ffhWz7Cq2sw8viEhV",
  "key44": "3wBQQN9ikF9EcsXqnXMuJoLryhmYJRWGj3oNZAhM2MxZv1DjvP44LiyX6tWxL89WwQyTnMvEGg6Z4vqfemku6WyQ"
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
