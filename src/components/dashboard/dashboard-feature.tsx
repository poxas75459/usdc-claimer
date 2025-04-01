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
    "3qcAPbMHLY5Nzx8zHMBohYfQQHYoA8kSWfxkuc39P6wVo9JY7jt54U7xrxQZtBezYnD5AdemToMpxQguYTYyxvpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoVd1BSrkxqkcATviEyZvBP1wPcmDxp95cYQA2L3o1z1ahY7jXwC8avxFcKubASemQg8juLFHyubAPUcvVrwd8d",
  "key1": "4knvXZbso7RxHBsrziiFPy2CfDgVacC7GygZTL4dB63YSkCHjjPkktTdMakvUjD5oTe5AM6h3GLSLJRDjoGT5sKR",
  "key2": "FkMQbTzJvEqjUQDWiSk6Xb71dym4p2RiYMxrZbceep8LiVzveTyHTSN7AgBZj3w2mH7f57mPxXCenBkvYV5MYFN",
  "key3": "4duLM6YcigKXq3W9VuPiuAP7wV18FoSb2ijsqPNUwAdJe86eaZbUdXtExh1Yw3Uu8o7gGSQ9wUq282qTHZ9YzWGV",
  "key4": "32ZTggmyzZM2JAzNShTqAR8yhVYWY923DEHpj5kFbgawVf3QJ9C6y2zVJuCsqhA4SQdJ4aGuAFQHfdwLwMKZdFaW",
  "key5": "54xiQDc2yZ1imvZr8CmYG3oKndbvpxmPDHKrR9X5Nw8pa55vATXsaer7mehu4dbrBzpw3oPaPuNSAtd7Xa1YD61o",
  "key6": "5RLdhHXHyY5AqaAXNmQcmUpRgvP5zCFyWuWTvzWPzrqAxb52oXhXetcux9ksussbirecjrjWQKXmmnSg1qtgXvZz",
  "key7": "Jnq9JAEEFzHA6cNpwoFjMyvHNvgphqBGnX1ZTeSFDE6br9NjigDRBZ9eHaRqscTep1FAgwzpQzA7xHbUuwbQ4Ys",
  "key8": "4ZGwGMLtLw9FoANrnLtunGRHuYYbSW74SsAxCg3dQ2U2RF5XHZaFw62VrTL8Chxd3XKQXgHbwqXzidFuj3xrLBt5",
  "key9": "kRg2DtX4nMYbXu8FEaH88CmCuDGF7msmBFNVjeH7VrMLLYQUKSSsSmSUHwaBd9LqWepHTjEG6HbViNnK7iDpuyp",
  "key10": "68jniSrWgbzafs63bK8KBfQ8aWpvaq3nkaGXJSAkinX4FBFmVfJBEcg3vFkttEDWoxLS7Sxvmw7TMjtx5z5ewd1",
  "key11": "cuSJa7MMCrQfvGUH4RCtYTuUoHHyuYSWmfpToByze91TUC9pc381RSQqgRfdRQk198cEji7GmkWBNum3tgTwN5T",
  "key12": "4zqiXvLPRVzwhtq3X9jpde77SkWC1FZTcfLpjWSGANP5LscZ1rLGsixaAHh4m6tninuk53uoiEStdPSu8yEq21KR",
  "key13": "4vTPmnXp7E6XNdogJpLHyfgR4JMapdyhyDP4DjcKZ19EDGtU2SR5uDgfbp7VaaL4ZhAqktYoSUcH2bo8JmcLtrMf",
  "key14": "5S6zZvC9D99bLsRZGUy5p85MPyPBfL8RnPaz7etqCqzjLLD4JmQSXT16P5HtUfVPBtojnpGjw9WWd3qgeKUXhSLw",
  "key15": "566YheGZ9ZBrhEN7mKxPzgTstHVt9BKhR2aQxvpqTsCXgXguvF36QuumTAWSLb1efCaNYWhD6RKMafNnt2t1JJ3c",
  "key16": "ENVQrV2i9oHV9i3WLmxFchkxvB61WyyJ2wrvTKDQwgFpVxoVuzGW62rm9UQSEiSeweJqcmBjNSG5Gd2vqUf1Xi7",
  "key17": "45CJkkq7azWb2DPADU2UuftveoqsHavmWZdRZVre2xDQrXpqWBuD8gKHq7psdVBaXZqVxzqRDcgmmPVo8U5JzMM5",
  "key18": "5KhJQ53dy9VnF6aDsdPFam8Htz8zizbom2Eh3syWM6g9tsc4WodEj2j5Y9pMsis5ce8XQ73uBoDLCcgRXqLQ1oPv",
  "key19": "2koMmXYUNz9DZoLi2afZZzj4vyu4WKvxf5jSidrELjhL9pD1DEW6TGm4WWXJLHyv8mMhRHv1ipui5XtnoALFPYon",
  "key20": "4Wgvzvz3anhsDb3aHs3XgUqFMAavEm3P4aduXhsy5VLxKXXJASknVnNFC6RL6bbMF9P6ZvNm8BjPfTzewscqKodf",
  "key21": "foY42Gh5QP5j9CQB3bPaoqdUuffFx8NFE8UDa7FNRKRKWyp6cgr8XrmVr2sTrrzw6Xnck9VS7waxTyjTzJjxKxC",
  "key22": "4TGmFbtE1ZVQknXjVHFdccXxP9WnFBwfcVKmCw1E1GFGHJqcohiPqDccnMhRcLLhMbbEr4k58QnNaN8g62LzVvZD",
  "key23": "3XQPrJqCZ73QWDzZQcixtqyD4GAH1Axse2G76aBLxzojjNjhhs28nwVNPmcr9tc5ucvqHNAekKDgyXr8j3ewD4Ax",
  "key24": "4Jv4YqQsnQotgWo6e4T19gp4giUKsqnUZEv6Vk7kXZ5fxKKEnvyzjuw7vzoEgbBbGPSPwZiFWq8YuKQNYt3DATv3",
  "key25": "5Z1m9mTwQVfom4PBtAYTUd3WAHVfey5gb8RDeMYM3jqsKjiPGSQZ2fQ15GFtz7TXnTgzphJqgdMYMpfReqbxa6XL",
  "key26": "5uyivgtrE1g8KKBbQDLH3P5hb9tNbHRXkyDceZKJVRAw49kBM8S7Bx87imiSZQJ68w5MUfKXbgVQw89DVN4ucsgk",
  "key27": "2L1PyrLJ2PuQokpL8oL9YNVRegeLaLDxq1afyrkxo95a6XYA74bZwS2ybL3WbZjS6sR5opjGXDHrBdymjf8hV58m",
  "key28": "46WTz9s75w38SxW1NS1Qc29KoGxzQSXFPM3EqxRWJfqgQ6E7pK6CmGTiwyrCu2gYDPpwZUnt21jMk6kb1ZixL1VA",
  "key29": "3qyMrZhx432qUniMvdqCbh7WGg2ziFR9bKnVtzVHDA4rBdsWUvL9fbqT7zhtJnR8g9LRaNVbzVXh7ETTfKvKYGLt",
  "key30": "YGBXeWMtjYT3BCPtCu4zkuS3FYBsSeJJxgNjKMJ1LUeebNUdrXprU1Nk9TQ4QsTL8643pRC8vkrD2XY4RBAdWW6",
  "key31": "3YXxm28Mmtq69HsXTfufSJkgMsZNRRPb9gsSykkwxyMmMSU2B6XtzHQnQ8G4q2FcbBjQbsBGHj379DpRBx5LfjNW",
  "key32": "3X8sx7R8529ht1Q5KXUdu8HEPJszLk9TJ8d6iMYMoNq5hCqoB48KEcQp5mV2ad2bGGmkSR1GF1RkUuBQzstbZAgJ",
  "key33": "Txg7MPDqBvtmTjtrk3J9m5FYFX6GQFzJZCrASRzYuFv34UyLgApjNeX3H2RULKCWLBzzvM84LjdUowNCXoWFjeV",
  "key34": "uZzCiXs7xN2FC4RnDSBGaJZifw6tAHstDMrtvz3sKYENtCbYnaPg9aCSuCd6u87NRGuurtexQo2FqGsT3F7vn9Y",
  "key35": "2yrKTDY5835z5fjqnPnZ2Wmjr4krpamdsUiPBqGyACCARAi1jWu1AofjDXVdUDEBeULZt8raXN73CRc2Tkd4hMgn"
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
