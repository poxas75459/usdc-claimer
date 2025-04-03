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
    "3cekBW2sqgV4L3ZsRx97XSdbHKMCWUdzAe2aimJWpJ8PGED1A2pqx8bcP33Zzmz4cAQdfc8wBUQYJdXNHzNFoJY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DeRRvzBoN23LQ5k3Zyva6L3g85HNSLfokXHMQ3fhsUyd7njFyfZYC8dgf39WdffMfzxvc3NktHFXGivgLdxHZ4Z",
  "key1": "SBrrPBwdyi4Jb8hJeiRMd9wRBVVJ25N8ZvRe497cdYdHJTwo5Bww7iHMkevgubLS3ccUrDpf2giFMiq2Ux6LHeX",
  "key2": "5WXfQNz2efJnVuAVmM1ng2dgrSrgWUHscF6S3xt3Lf44zb1PwqhsbiErEfhVCNYohhBiQqYGXCh86wzzoSv8ih1U",
  "key3": "5M3dhj6gQ5yxW9SAfZCypJuf68HscayXhTxEYdDmbsA13Sfm2Qz7MwWqx8dud37MZJ6sFGBxgSDSSyZNY8AZ4wtT",
  "key4": "oDg9435m34isMSnqCJZJToFXu6wkEEHBk8Q4RTnWLfdSi6KraoNivBwXS5xwW5DYxzWfNGswKYdWD8qiHTPQjqW",
  "key5": "5gKWZCPUY3A9cfbGtVk8FFiyzorL7T1tVEVomCvFAkRZcyhdMmSB1NCP9X924DacYST6fpty787LDUM9iadfNjv",
  "key6": "5o4UeLCrkq5H8jTGR89TxJsCmGTb3bgorGTRh8pr7FJeTU9YK93Vvrvfhav6KbMWsVaW7mtidSvtkKJ9MjPtXCMn",
  "key7": "5k7U6KUuSEWvRquu4xQ25wS3BGwKSrxGC3ASzC3GN7e8Xn3431JeSg9gkuEj2MUMQbo6u9hz8sfLr2o4N2hS5GzT",
  "key8": "4a4Qt9N68mJWRxrdkopju7PD6TptsFSK6gV9YdMYCppTujKNbhJwVVoHbTcmUaMuNKoTddtvzxahwqguHhBqAfN5",
  "key9": "4EYwM6LMcn4msqCXxwQg1jyyLWYZaP5L7d23jvBrSR5Mc4soSH1JwcYhGQFt3cVCrdquPn5Q1sCiGZRQHHToaCnw",
  "key10": "28vK2zNEQzuP6ffh3j3fvxZvA4pvk678HrkWUqp1C9dDnjbu1o3g3qHVihrZ7MvG8RPCdVBwm7nfSouVS7YSG4h8",
  "key11": "wQFdNFpaG7ge2nWQWbaYrXe4ee8nWYxgm917aiQKcA4cqVdTbpt2SZWw9T31faNiQPRnKSN646x2goYAtNuinzT",
  "key12": "3Ra4Ttd6GRt6KAJth2nSy6WZxQg2QWDj18CnJ3FFrhYs2ezst3wpbriW4Gt7F5i295aWJduJ6CymoYrLhgGG3nQn",
  "key13": "4e8caWZai29b6Hb72yRtLk2mEvr82LRvh1eCXvNYLWsRXYFL6dmWBKdABBXqjJEHEA83ghetCWi5yfThPMr9Hfx2",
  "key14": "5qXovtzKny1yDsX7fPK5GCzSkZcvWckHGtpmr9mtxFcKp83sTf1gpZbckhrXMuALj4p7eeNNSW1XcNB8GNzL94Ui",
  "key15": "2wQxQLWRL7A8rQLdSMzsQih2nq6xgwXAwef66axNvDB13SwKU4NUui5kKu7bgtwkXHXM5WtGWVjq3rjkGgiydvw",
  "key16": "1Wwqapnd4tLLo1z3nQ535m41TepHcxRr5ebiXhALEJ1okGHFL4FvxbFrHrEeqAZVVK2QjisG62Myg4WZ9TPeXLV",
  "key17": "5DgNLdCmTMmDNcSqv8QjC59v8dXYC6qXzS1Vz5SVkFRsKTkxf6MTn1U3ZxB9RddMVBD75aoiHSbVqcifaGcayjFP",
  "key18": "42jjtWGafTSqa8kZ42DFUHXfeMzEsZH2aqTLLEyZLTPgS4Hq3tSEBLLD4PpVykXj91xs6PavjiyW9Zdtu2WT4Zqk",
  "key19": "2PmTTs8wbuigxjUKCbtoXi1t5CRsraCAqwzX7bbr6wwpSccauNyK3dWKbySLT3mJQgQdT8HLYjppjQ1BMsfrpJbA",
  "key20": "gaw5Bjqak2cTofcjGkDQnJQoQZjvgRZWvTtdjMJ2y7ZcRXvstefMzB4ff8PxWLPhm6XMEdcjL83cjppWosgrMAJ",
  "key21": "ao9bAZrk8Fj6V2N4PoximooRRzazjzJbVJE96iQEYmSpvwT4zANnRxHmHtpRhevwqjzahKx4yaKdiNiQypLFBoo",
  "key22": "sMQe1EUK2JouECAobVAcgAmJ77gGVhHXaVfUV6UoF6UCR7ebKoyxiKHEnYTVwnHZvYynjWJfietpTrY9UcQzzqA",
  "key23": "2H9XgPyFqNiVaCZ8xkb4bFkXFmJKqS1EEGSFSTQKUx6NQB7w6k1FQU4gpRC56bu4RxtzowMbpufv5Seqcpnf8ig6",
  "key24": "46iS5KjWYgtGvBz3tafxKjS3iPaLv1mDEKyGX1USWeeBGBXdbjTgSRTsMjCcLxiYHQyhn5RMxg4FkM6ZKDdUfWaH",
  "key25": "3GPM6TzfPdMvmSQfrKMKYyxGfo6B6pYNZLywJ9LDLj417TBTr6Y1pqPpmRtV6BYNQ8j6YxKFvHoMdzgw1g47Je77",
  "key26": "2hVAJwzHVtpt37rvq1DX1vL6i3FTuBTAAHdpUyy6LJX5pT7EcBawJjfj5vjfTWfLENnbop7MfKuW8JCDT5Uwcq2h",
  "key27": "3nwkV71UdCzi7vJCk8KVGqovHaRYPEicGYXxsDHLjh29s4CjeHGfSgey6jcnm4P4teHRPbpedqWAxK4dofSx9abc",
  "key28": "2EmzrvtVmAoER5jck3iH2b5Y89Hv2c4BiWNiX9QVASiQcKza1Nz7LoDWBghwtiECKTQMsDXrD7qTbfVADjkNdpxu",
  "key29": "5qodNpZoGf9dddS88RDxZZHTR1RfHBzdt6Cyj64bKN2ejH1JGyvdW8wKuGuLLgU1xcVgA9Knhiwg4oK5SZYP4hVZ",
  "key30": "5e6eridVETYpNaJgC9GSw3KdWxxWDnqH8Wxuxi9g4k75J9tUPit1dVMCnzy28X5nDB92crAgk8U9bf1rM1RG3LkC",
  "key31": "3YueFCd1srHBBib4xqk9E654QKpWWoubEhXv3MRdEsoaNDL3JhTDLYip597PjAyAN2Zfq3S3RBK4xiBVPderKX8m",
  "key32": "qenNmd9GHDeASKv7CepAjceVNLiyLy3iXpjuQmc26zJCpJc8NqdpCbXtvhbmrLGVQEp3pc27iYhXTf6ZHV7HL8f",
  "key33": "66r288mmVFxwxMEaZA8GLqWPL3vBKHRU1Q1CyVGSGtRk58HJe3jULK49JYqJrkPcawcoQv5QCJT64ebTME9F6tom",
  "key34": "5F49pv838mxEiS2MpbJCjCW5cXqDG73pHBZ2a2YudYh2ULs9vc6kdE6HAWxLLDTZdsZE1Wo7mnPMQPgVUSsqmMKZ",
  "key35": "36Rvkcchu19bJv158t6dDVsBwxfWWLRzMRhNKWuzUwcxcysDQhRGLTfM7EXLvd7BS7vKywhsNyYxsqtxrn9Yhe2f",
  "key36": "NJjNfr2musCM4sHNAUwXUdEBHbAApLjtpTd2zDFQjThNac6irLX46UfUc2oTNsj1UWdWpdcfKK6fA962bvqPhQ6",
  "key37": "51atncAVJBePFA5HVEVGiVyVDbEUJwShW6VWwznRehPthmHitLJJiSwr9DMJ4SmBkTM6mqzaeBGj13gces8EdCK4"
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
