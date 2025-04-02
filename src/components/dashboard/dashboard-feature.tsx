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
    "2PLMpWsQFFaaP3b9uKa79yAeyx9YtyFUf5CKXkmkQ17a8nezPFPTHcWkFd2VCZTSTocrzdnNi7L2evRTHXEKyL9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cSPwHqVjdRo9wWv16EzbiystKqsEMyA3jeWCxqe8pva18TZVFSam7KkPPTiwazs6tvipFer7jkkGfv4mtMkwSQJ",
  "key1": "2AM4b9xqiKBJZZ5LpDV1QB8D5B9kB6cQZDveKMKFZCXPUzwZKg2Cf8De2N1ZWtWpWkXt1cx7uQi5MV6Fg6qMjS5K",
  "key2": "43yQm5fmT7vW4NJYcD13tCyxmUjuSzguiaFPxrd46R5q2ceE9Dt2asetNxzwPHhs2yM18dEfbXUkmvsfr9tm39CN",
  "key3": "2ype13BRF3hBHhydVY5ZtjAZ6biCFDWVwkRa1abgGbudS1wZXQtDVPi1df2d9CEydAp1dmyTNrEczXTVz2PnL811",
  "key4": "2CEqW346RceFHvsK8jpX4Bp3HuPbFKkVKq4hmhvASUY9wweRzcNtMHamsAgVUserKhCMiM1ahUP2GMKob1r4kN9x",
  "key5": "31Dz62rNFDw6gSwJBQXFLrvQ7EPTmGyy6V86L2jst1KmsTm9mxgcsUyAvqYtW5qqFtbUTjHh73La1MS6FVUaCYPg",
  "key6": "5NSHtBJ1MScQvRDtKEsN8VKAVv3jJHckfcTVG2c7x7oha91j1uxvsX1gKt7JMVpw3EHqek5CHisWFdrBBDwL4HUo",
  "key7": "4yvmHUeb5nk2PKhZDu8ckRJ65QuXfbGQ7L9hkhQTff46WpawiUhW57MPYKenSD8HGMjpPW5k837YBodLZx74B1uJ",
  "key8": "3XV1FvKpUYyfvsRZHTXRcMRqLFjewpGpU2Nrr4FAVcjPqe428KXHX46Sbix9TtGtAG1FGuFmDkvQNZpLVUxnTJ3r",
  "key9": "5FRxfPgYzP4tj2ypXQH6YrRZbrVuhjcg8UrcuhdTq4b3xpXCtJNntUFbA3GuNrJcHuey34W9LRnEAYd8XDB9KKMC",
  "key10": "5Vjfv22mh1d98tBzhBGc8ptASGrqdxwxa58rovsEY4WdZFeigXP1xm8Xri7pvKvsFt7JGb3XjzLJy2Jyb62PeQNd",
  "key11": "3BhsPuqrz3UmqTgF7cC8wFg1qptGM2xM5FAWQ95V2AuQzcSFCYuXZSKYvaBr8hKswxDcbM7ZBgDsJcveTTrV7uNt",
  "key12": "5wV1EnAAhu3Y7HFQzjSeL1xnJL2ZmtUPDHRXz5EddNppAE3cNwmJVxgr3i4PpC2H1sjCJbHZQNoP8dNJSDz9M9dS",
  "key13": "4MHC9L8PPtnLNBWvR7Ppi3tQLoUsDQVzkzeL1fj7bCjHM7wa19M8wFUeMKviMmeTRZTa6idbWscz6Tq4kzrXSWnZ",
  "key14": "2J6VsGJDyGwD5zCkWn7bKRmEnbfqprgZ5U1pyDiJJgvVFf5ZqP5Z5xeiW9K85johgJGgzmrh1xu6NSB1QK3imcCZ",
  "key15": "cfFUJMQ3n46cuZ6D3QWLWiyqULryLGuYobzrr8tRhHqdeqRLEruojRwohDPBVb4aqv6vJUhV2sV1riPhYHmjwd4",
  "key16": "4gpfiFCgN3phfdy8KGgRMyjDqT7UFaWbfKywxJoPuVAACVkk6gbJMy8AAZZGFn1kQumqsDvKCfjriw1BqZjzTF6Y",
  "key17": "3dSRo2U575qBhXzfL3F2qeWCUnfmfyUXxZi1CXzGTamJcmKAwd6kdTj2vCuU9mD11SvWUoDRb5CdKbKXi4V9DWuL",
  "key18": "j8iREm3Sxqm7MXWmDADibYikc6mJFRdG6yXR3zSxSDN4hF6T8GVcKct1GD1VWxuMGcrAwrar84QqEmrjxHCVoqg",
  "key19": "4PPe4b9hH9JURYocaaMB2Y1dqwtYuy5zs3PCcJ7cRpVQ5DDcmVic8vgporZYAQrNwyjATYABXS6bRPsyZ5Lj9C4w",
  "key20": "3K8oju6iga4nMtyu4WmmsSeKvrWG3Ko3RE18CpAbYRqDBX43ZmMUFitdq7s7zSG6v2bzZpewzzskqhoib8R8Eha4",
  "key21": "5fK9sYP4xkYTL2GUny8GFwrikeipCyHptdMCGy4QNH8paECrvAtCQ8c3tLPdCkW9VfLUJESyAELxcPPBB6TGECwH",
  "key22": "5U4ezpk3ks1vEmhsNd7TrkPf5XzVtx1Z92fVs6KKaLaYj1pb7gLesHzrw9ELGyzTF1dAMGPG2T64q4kkkr3q5RP8",
  "key23": "5QJmgMSPTiBMvfR4Amn1bk4cLF1DXQqjtpZk78ZZUiDKPqH2JbUC4eE5vnxgexPSH8LzPKssVjrt2xxtjS15sHTL",
  "key24": "3cF7rnq4QkLkdRR3W422Xu2mVmCFHrwe7hMrv773MZDdAAPZHKYmqM9vdpHKzwDeCN5mBmYqy2m2TQ8jYT4YA9Xo",
  "key25": "66V7qWPqpf1u3nDgVoBUgqLnwN1RZ8xiVBc1ga31zfjzbP2JxwogiyJXKKsPovKeVJnCcmeYtRdnPTogBY49uRL",
  "key26": "325XpmTkdNc7qoyEty2AHgCVY3Ms5DCwBnQEmdwHBJRjumG48rkFxXCKDt9m8D8E8QuycNCh6qetLB79usnCZJts",
  "key27": "2uKx11ttC8Hbs3jNm2EeDFN4ZaKyvjfyibF4QPXuyMthXXFdHZccrmDdHDX24k9ybwF5Foy91JAdqiTXKKM9AuNu",
  "key28": "dn6wvDnS4a8kyYHRonpPvZonhzaLczSm7s5cQTJS9zx94jMZKmkswF2G2MtpSUndzfR6gyWs36ZMhb4CYRWbBfn"
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
