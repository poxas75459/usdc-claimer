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
    "JmZmQnNakXiv3hvN9s2Yyyidbz9miB7tazHCTgchztZJQMdxWxTv9QJzCHLT1UovNbBQAN9stvmwbiux18Rntz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJUk9a3i4186pqbrxF2zeb9g47iGevN95xK6CRBTt2nQGAA996U6HGKs8qiJChj3vuJiUoBwvdLdGZmpUky4Vp5",
  "key1": "5WjR3ZxhPFAkk4wh4Wb3ySk2JoBUXCTHQBkgdckrM71PWXiRUeDF2pw4vMqvKzG27pBNCkfCvm8cqzrYBimr1wUk",
  "key2": "2uC319pZZLkT6h9LSXVtpCFJheVmbVuwSMo5qhr2y4jSq1xzkhDhXQa4QhXJ1oNdAfKCNzjwR8aAnkU7Zk8BGbrz",
  "key3": "22MkTpc4zST71PnqfRF6P9Z5MC7DEzVebLV9DmYTG9zkPnpkmGhM5t6oSJuLdH96cpq9zjJmxZahFXR35sG8Y3Gt",
  "key4": "67ZcFMaV5kzi55HRtcr3xfRMKAnAULXcJHpmvrUSnC7a6F8xHDezWayiWkWfsYa393HXKCSWK7j6y4d6r6p4Cg1d",
  "key5": "5QcBf8eCLKB2hiexA2eZ7xZkXEqDcX7PHk48FheHhog5kqyxPYLU6CAb6dD5GqzmZgcYRRdvW4ZvU7FcBgoGPETd",
  "key6": "4aKsBRJ89k7kMgznHKJqtEJmnW24Zdd5gggqVXqoDMVuX7tRiCy3CLtGtJdGCYu1zxcufZV4XFuCh4nHFdeyAfCA",
  "key7": "4Nqh379E1h41BQ3TCLFdU98xKwNsRnA5cTYFGUiYdsjXQsBs67wmButGW1YTwszxfHsVhMSdJ6Demfc25W3UfKMo",
  "key8": "29PK2pVAb8Acy6AJ1nhLMtjLm9D6Nec3n4wBw9Deuzgt35bbn5PESmw5rTSb7FMBLSF2Neaz2G5zfKBX1dCXhWPB",
  "key9": "4vmC9mtRqgqyf7sb6RBBzPp8LoMBHsYh4v5PY8kz6d2RHZ2BD8oq6mjG1pajuGnQvFv8osg9YRbRfRW1BB5bG4Wc",
  "key10": "QoAiSvPMcar6tnm8CWwUTE5rSQr3pJtDnNW4idELMzbZgowNx7nTUukez5oBuz9SB2nJuRMqgvPaKAgeYVjjkfD",
  "key11": "2pMcqAgPMCDSKRMzacumiwG4Nzeb9yFqsJy5ohPCEwtmPmQRVxWcA1xi6JC5MixTFZJVScAhmjXHAXrv7Y9hEkNJ",
  "key12": "1Lq5D4KEA8rxG5k82TiWR26FYBDu6x6EyPoYB14axMLgqbMUuXEWqMJLrPuzx77MjXwktiajjarp5SaiPJpZAph",
  "key13": "49Woym8SytrrjuYZSi1pbLWnJHApLLbfLKfuQ3jrwGDAKvCRoXjt6EZXAn5TYC3tFrtPfBKyK2FhkvXtBGgs2NDP",
  "key14": "GGEAjgEjrwEHpTLf5Fb1aVuNA1q9U4tFzBz8GWq1DT7F2V6dthcbY7anD86sbgdfio5fTW1zkujs2WYEoUm1h7M",
  "key15": "2qwFQtMHLt9YXRQrW4oUXYsY44RAbe9hobh1PQJDasmwzkHrrxfbFLTJNZNjDJn5xsGQcfmJFTpTqVHvXLL8bHHk",
  "key16": "f2jpyuMkiiqZQtBShgihSn9bLN2yDFij1bxYpvY5UvXhgkVkchRnSRMH8pAcsG683h3gULVnpeqiHpd1q6R9aDY",
  "key17": "4yyF7M29GWFVCoLKUWqrHi6SHtsQzvwQATkEJDWXyQLSNLAKZf7tFCmd614Rz7nL4iWuBrXrvSW5PVD5KmVKKuhA",
  "key18": "4vK8r9KsSM9bDiZ1FoHPRDZgHpLCb3gRWcEFFD5rcAv9j3FjYoZRDwnsA5bhJtp7AXoVqfEyTe7tMJYw1ww5h1sJ",
  "key19": "5YcPzzTfMpAoTL31r99ZTLQFD4Sq5iBFMkwNAdaKsBbwzXE9znMn62qTrzKiPqMWsyTGweY59mQvoY95y5Mq5n7h",
  "key20": "5dwRq6UHH23mXSeuFZejCCWQCVAyvqYAJ8Zz36LhnqE9aGdSGP6eE9aWozq8dQmssrsXmtFrbaFhdbpjNQCPgDCw",
  "key21": "4z4e19UybYFQdQR16EmTKmV9pCX321QejssJ2JEF9GvCKAcmHihxcHd2nQkqUVit5pRRZMyVYrNHhErzyfUSAX8j",
  "key22": "3EnqztcxQicgA8aZBXMRJ39EmefUp7NEHV7gfFhSAz7aSXBwtC96TjDnnZQyEGAD2dUtwg3KTPaPbrayKyayAyFQ",
  "key23": "3n7LX6XHx9DKgr2WnkAChB7W3xAq3gWGEh1VsFp1tjd74hv1yBYRyj3cmznHHNje7GKMbv7DF3Qo7TKVAzxNoHzL",
  "key24": "3DBc2VgqnoLtFzWefybV3MKUrE2i2VrTybvfcBcxySUJfbtefchSoEzGeGdfjQ87M34dX2EPWk9NqnFAedNT4n4z",
  "key25": "4pgYADd5sYw9ekUyL8BJPxFLUknERtemVK2wbCekouDwi8wB6PcMi3X1A9JP82HyghFfkGcHj8gvPyCPeLdVNaXz",
  "key26": "2MBiaj5tJ6JLPt4MkmARJRvEArvryNpPpRTRQbSypcrCnZTvheVPgksrsSZZD6M3xZtw4DxiLuXCAPrYW2hvd2mY",
  "key27": "azmaiXVtGSVwEH67TUAFCG1a9Ha5AvG7HXccUJPRjvKSUYtbLsB6k8DD1SNR3KEkncrARQqX41fM72vo2jCFb4s",
  "key28": "57MWLfEFSariJhapmsuTyhepQajH6frMdMHe7fSuu7dXJXbUZGGYNvEDQqUsCocmGniLneVsvofVtH3GfaDBE3zX",
  "key29": "48ohZiL7GFCRSXvyvQz2VJouLmk4y52e6UMH6e28N77HpBqJtiJtqoQqSZX4sUzb43yEbE9xP32xDZewJXTQeD4z",
  "key30": "5GQybxi3pxx99SeZZBzwxX2qCvX32aMKVptdHJi2cbwz7axxjVmwJmmgc8TEbNxffGiLnb1dP1Dw7bQBKWk6C9v",
  "key31": "5R3VhHr3puCL1f4kQzn9KeED675raqagPaKuyq1o1TqfyjmCf69y3AR7K3d874gSXuFPV6ckKRLE5xKmbdqToLMq",
  "key32": "3TrD8JduzDTy8U18XT7jFzsmVqwVaqFFHzDJkpqP54oKmczi2qrsWWreLDQwe6FychPdo7vTMvJ75u96XTBfrfwb",
  "key33": "3Z4v1kbgs4KURhFPgeizv4qF2StkAo17U61GzE7fMJUoq6WCmXgDq3xz2i8WhoZTnC86oh5EVBhaBKnUmpPtyZS1",
  "key34": "32w9xzBiJgge7Vb99Fy7NDuFnLgFnm7CZ8CdHnvyFJXiL1UkDmPWs5vDmnLTkwSbC9NoH3UXJacGyuBxGQzxjmJv",
  "key35": "4F8FkxUG4yaX8BrThbZfguReJ35PCbVafQxfg5AE6decvAFS8tFhY6wJT2JZYXMzqXWnzjR4XbQYaWzfSH7vBSXe",
  "key36": "MpqH3vA5sfZkTtHycw78vR3hvCcSzf3zQ6wmQE6wG2EikMsH7mYTAF6CiXnHcnSTf7wqpFpXD7vwrh5Xk4vE4Sh",
  "key37": "2TG4PSNNrsZHnRdrS3a8PC4LZZrDVoQyQsw1xpJJ7C4gBxEp1Fr5UTDnuytqJF5TYJJza8hYceznvWcZ55ggQFb6",
  "key38": "47J3FPExzKYmsDbHNrM3VQ5WEQn17iX5JTXR5qph3atPUtgyDCVwJiJZr1dRCZRjPMDjBoiTiTB4ZPJrrvau4Z2N",
  "key39": "irBAWhoWfCL5q8J9Q1Qu6tfnMVRnkMZccgLdiPrwMaHk9A1DmqDpUrSotRKmpfiuN5NVEQxPAFaMzjkBV72u8Ft",
  "key40": "2hVFLYcoQJQeVzVjy3FTiu9pC9LrbE5N9BNtAVM4L28G4knzWNZsBH29tQ4yx2bVeUi1rJkfepsmnEZrEp81jF3p"
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
