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
    "298ozijQVUAAfFfjMGx1nrbNFbArrzmhVtMd49fWAKyq3jmccR7q9qchmkYcbCHuCbRTSMPxuPcf4KMKMPzU8BMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "N7auWCG7jd3WD3JuETR5bTCydBEFUxxYg1byrjcnc1Mr439yUCt1pxAo26ARRiJrHYCUApf47wNsFw8gJHc2tph",
  "key1": "2VLvMV7tXXmNYsELXJwAXq4roq34iv3wozJzuKAz6vnvbt36vbRfM4dV27Dapw8QoyV6NMWCB74eAEeSFPXQ12pi",
  "key2": "4Jp3ZcqGMExxZ9PQ8RgB4E87z9BTYecQqGtVjGUkK1jwbW5yGCdzJEJCEYrEpb4AvMRDxYmY3CLAVFTLZg7xGrWL",
  "key3": "3yoMwcqkzJ2haGxYXUncs7zgvSHn8mqRVC65TRJoYzyvQPYVnbJYFz1txhF5w38dWpdjma9eJ1yUVw7co5N3S7Yp",
  "key4": "5PbEMACZwxHYvAUM4GFCDDYW4yd8LNQg3ozqWQXqy7XYFeg1vQwR12a8ekNNshZcDh8HrkLUPDNNFj87nbRc3LZp",
  "key5": "466CQb4X3jpkJumwE9hUqdXobTtUjA5zWqXtCMhfj7mR9fsCwk41DxwWNPwwkg8LkErudifsxLecwbuf3Qxk5YTY",
  "key6": "23o9Y42fZ6QhhbFTsnQA5KXFnE9sHh9yThGQR2dUX5RstTKwbXkwPe4b6BZQbXxZPuJhBMp7Nec2p5KtRHWzHx3M",
  "key7": "2j7bkCmRxtNBQP54Y4wB1uYfxHVM12RiQvbbxH2BiqZoxGFeijxQZhY2M2gdwyTs9NNRuMWnBkQ5rf267ARiq4uf",
  "key8": "2he9oP6J2zkqqcScEqsJeHyJWbYLES4jcxVt6Vr7nGcLEbVnHopmXq9QWpUxKdCvX9JgG2akTZaKUdXuuQnLDWt",
  "key9": "4tnnJtJ3ZiwsE6JWkZzQ6vyNtZrDLgeZkERqkaAMjmYfSdb8cnMvRroesta5E8jjFpkMLS8hcdZn1ZoUsRsigdD5",
  "key10": "2hVAJsfzyHLer78aRqHE1cHtprh7MSSjEKhMoUc6eKPqTHzStDwRww7pWWKqs2qbqBKkoicKpgqZ9ejicJYJF9PQ",
  "key11": "3abYNE72yMvLK77hx22bNbQtgXBwmoYsE2G4sNvkginoNqVRURJ7acqfUDeQeazHH7VvvKofRnFNWLbKg3G5YskR",
  "key12": "2iZP75z3yymLG3vLywFYcP7jpvvjSSNHMPpuiKeZ2T5AB9KmaR7uuEQ9MB1oKaJvrCygmqZ4Kn1GM6VSaN8CMyx3",
  "key13": "6eGe4DTUMw3xEQpTy3wV496UTdV5GtzTiraKvuD9V7QTJH7s1Wv5k2bz8L8zx3iE2XaQZLwKdG95SNeRGXouSbM",
  "key14": "2BRRXitjW2fB2GYHquEwJjAJp1dw6Kr81UrsUP8E5H7Qw7K3WCbS1M2pavrJ26u5Y7Q3rLJGkmroQ9wSWrbAZNaY",
  "key15": "QxuVRkeGSdLtmfkQvzEM7Y9XesZddP7D5aPuM5G9qyi5W5vDx1EEuMtaMC3ermVK8Hmq1QwYZxFjdutoas27D3G",
  "key16": "4biqmzCLeUe49paJPx2v6URDNgMksKDYroNQPSeeQvGrtEFNt5J9ZUqQw1gEV8Zuq7d6mV1ByxLnyoNZ6jyUCTwd",
  "key17": "3c8rrdHqXpWNStkAuPpc19SJmpLfxYLRwDLFFujzSJaCM2ZkjYtyw1NZPFzgE7xdd8zRYT5PZv7XUabGgtcBGz7n",
  "key18": "2iKvhwpNFpyQdsqZwCztRruQNLgdoakbA6dSJtmhVDCLmQN8wEwY1JHcfYAfhc5JFNiZqzaqEJk4qwUVNLwujsYf",
  "key19": "2Qy8TmYHu4AsFrpNt9E9A9jysKbzKF28Ha2ZLsDokF7vE3VmdYjCPBVfM1kbzP5Z2UVw5i1TU5ZUyguFcoC5DsPi",
  "key20": "3RiSNjD2UesiR394YVYrh584x1514wZmb8D8GbE1EZy2eokaeVCGCeXmVoUPARHCChDpbdhSgda1PmJxce1SJD6C",
  "key21": "48dCSUuMkTvjMAnWhQaZ9SxSwHK7ATaz2rc3FJKMfUyVEk4ebEZmUXNMy53As5BKQNABGJXgeqAwGmubu2yEFt22",
  "key22": "3G5QfXo3shNw6DC6GTEpKkNdXEHn2EM68UF2mLgqECTV3E9w8GzftReQHn8K5bpfRRYpfpJVdP1EJ7HovYZ3tGch",
  "key23": "39eJjnohUMdrziizgxNPSwK9Wd2SveQ46WKpBmYjy7ignHSjCNy988yY3h19CUkpjR6ThWDBqP2unJv98FZHt1og",
  "key24": "5BsQE3XexRgUbW9216jSrsBgXRKQ3DrY4caZyZNTKuBzJ1yRrDDHFVcD98HwK9rF1WwCmE5kUZ5DSY13zKTSznad",
  "key25": "EhbVCmM3KWKwMHz5bJCNdMT89ukJK6S5SsWD8KXe4kAf3uTCJXdfd9vznwMPDZKAnnKVm1dk3Lw23uX6JZumvhw",
  "key26": "yJ4VRouPBuhWgx7vDKMuMbcJQbWyZh6dDPQmRmE3X9VMnNKAPJBiBrSc2eUbHparKAZW47a5S2mRzMtntkZE6FD",
  "key27": "2qYptf2UevZroScJ6g6sQ23CNHXUn9EiK8oCXF9zHSXYgNdK14BwFXrRqrtb58huhquCMuSowxx4V8MBue6F1sgZ",
  "key28": "3RqzVbAEETod3XCB7JMeyVoH7bthgXPruKTAAYRjwS9V2D8tN53xtsNL3q7H4xDW3rvBp3JUV63eqJs263piJv9a",
  "key29": "34ed8g9UZV5Bt4ipSJbvgZYAUAPmFLkKRUmYebEWPvBcqRz2xapT5HYrMLUCqAHLptd6nwAAZ5kZ6aXZA4d9DaBH",
  "key30": "3XLC75VaRzxn619hYCVmdV3TQrgGZ4NqijSLZYDP1EJUetyS7ghgxx34kDozgo7Aniff1ViutWaieMpAN4X47hc1",
  "key31": "3fDeZQnHoVUH4VDyaUbUMB5TnTumhU7hv6Z2ghnPNxfVPhriLKniJJVsy2QV51RLSsVy6XkiJ7H81ghjeED7XZJ",
  "key32": "2QjC9QhDybhPwbSi5xcDi6NXASWh1Be1YTrNRMgjEyPVP5ZLEpgkJENCnNiok5DDf4bHCLGCf2TvEDL5fDcgyMM6",
  "key33": "126hU6PCGRmnj7F9dvFqjRjK9LEUhSJ5Dgqm4ybGTA8S1okyx7e7RDWDqMBWzjcgiXVs7L4CH3FLCpzEFbAWzFrR",
  "key34": "3nZTGKTmhgFHzP8fLTdQe9LMAm4hS9oLHXwVGk9osTezmghgowdKkm1xffxgg46jpeQ7HRiJy8fdcpyEY19EAfWM",
  "key35": "45T11ydU9pq199UyuEnJLfyHmqTtBw6rJZyvKenyGGdgcLcqoNqWLuzjGUHZ6eTB69yrqJjtzpj5GgqKWyoq1fDc",
  "key36": "HqrT6xob5q3T2mQKoCLK2p6BzCHW6EAH3QmKEUhyHPbJNvU1yBciY2x3qeKA24N4MLG8ttWS2yPKcuMgoHbGU74",
  "key37": "4QHAFiHvJjMHsuCHv4yvM2LLKYHuw6Z7nFDbJppefnRQgaj1usEXVwRUqZCJDkSZCGaWkRt4vqTYWoAca7xjgaEW",
  "key38": "4ADkffwRqBEZEp5hxPJ5P2TM2ZuoyTeDTpYUuuCdmVCHxRiQ93nH1WH1oaZSLiuXowD4kji5Nk8d1kqQYce5UH4z",
  "key39": "2w9GLJ68n9D95SHBTDhaXbQNpME6aAKXyYZ4q5gRJq4zcYt6yPUm2AGpJE1QavknT9dWn9qrPUfqMNs6e7Ub9Jf7",
  "key40": "4hqmTP9tDe3umfJcPV9sxKS18iU8hQHE7TLb5uDTGMzAdD9xTFLZha6J5jHN84vjZYHE2X915VMJkxNygyMMLcv6",
  "key41": "38QHjJYuDQZX8MrEhvusxpG8Scua8L1RKKFjm1hNPCNjBYbcC8bHsTrdu6B3asGnwH5yghWBptvwXRZfsCzGz4Wz",
  "key42": "5PK7twbfNeWCMu4LGjFdKeckHX8fpo1N3YTuU86EHtWbJc3uUSZ6Az7mvPH5tJVkrSuzYkeG4AGQZ2kBuSvwiTPD",
  "key43": "4YPicJpXjZNP3VUFqwKMrJDqkkvYXntftQhR1nmtAc7mqtQYPpuwLa54TFb7skNW9JWzLK2vnfovhesy4SZZUvi",
  "key44": "3Pg6eizaNoeL9raMwEK1WXi2Vc5U7nTSScXK79X1Kffu8CQWHn7o9WxoVD6R4R5ULPZNNyrSXBwkqdrWfTHDViVe",
  "key45": "56ibmfUqL8SyEdd15mzeDpN7ANpuTeAdKUizSRvnWxGkcCV5P8SHUhBQ2GuwaNKaJFshHF9AFzL2sev5yQ86bCuf"
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
