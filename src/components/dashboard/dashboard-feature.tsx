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
    "3szaCbc1sm81QMHccQQpacrbxW8NupUDUEdyR7pKPGNzzdN1soHSs4u7C2t8HaRDhXmGbm4cPD31UpoT71BfMgxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MTHTVRFv8uLhDxS4GcQEQKG8L7pHVdjSf9mX9V6KPS5cWm2Q6yAZM3BqUB59QpFaGvmTKumCS4CjXZpULVQvWUy",
  "key1": "2dUrfZP4nxKxjfktpG17nYoHKm9h55yM6nFFUH2o1BrimsNCSVUYLg7NmsVGySR6dJL1YUqVZXgs4u7F2fNRhvtG",
  "key2": "2uLkiRa5rxYx3UuQCu4LXMhNYJwg3gRUMReCHzbAZ5HSnmWzsLu7mtxLevGuDuK56ZJwD6snJwZCLDRgtk32EcsS",
  "key3": "3XW68Hzn4dmrQtYxrhPk3TaSCidqmnYyg6H6YE3osPz43tDy1e9JQzdWjdhQcVDE64XuzJv7P2FcpWTX1n9pEwFm",
  "key4": "3b8ytnut557QsTzLCU73LUzQmmgEuxzibNcbnUJH7S4oVB3mpuiobTvvd6pKqgkdqfrYYfqiYB9Xvuyx8dzpoiXe",
  "key5": "5o94MXV59iBfdiU5XKYuticXSWnADHJGqTBnwyYaiSnXivtQav1jTCKYRkG7thxu3Sd3LgMkxC2pVaeyiQ8HrB1i",
  "key6": "3NwV48Ra3Kjy4Mn89pzC7TycjxbQHMC3zb8uEBvRLNWditVzuMqjW8My4WcfmZuQQtr3U4cY5ma5a8tYuF1UrmPP",
  "key7": "xeLPLqxocNjyq2DxUkAoi7qPJzR3KpDLgKSCC5y9rVjhr5k1LyabzaBiXV4phKTsiHWvVGxFcW2r68vKyroWUdi",
  "key8": "VudonwSRzBnYKPtJ8sAmavbTPf2YzFZJtM8w3HYjzRjxkzvVCBZXAEpHhuRApDukWRNp1V2XZarVhrF1dMNv8HV",
  "key9": "5ocu7YfKPaQ943gdPkYJ2Cuhdy8X5d9k44qKoTvADEBVgBu3dsGA3qayWBfX5fRJFNuUCdHGSnf2Rok4n9KM186u",
  "key10": "66ibZcETcAZSBvF1Jm7g8WpX17fBLJkR8feubkbFgERwgQegbUug6EnuZoZdKNABRBBMC5MpvnUBukKieHYAqXhJ",
  "key11": "5wBjKqbreVSFzENkz2nUFmVFvuHPWQQwgcmT9DU7bJLXfk8WUcE3nybbCPXZjyMPN6kt7RLrBMK9C7FvPDJSVatj",
  "key12": "59S1bCKJ8RtNzxouKewruTeGYWLMdNYYGEumcoyAYU9eYhmz4E3iTYnjnMSSCiM8vW6AN16kroSew5UjjVAqxiLZ",
  "key13": "2M8Fpb7sRrMF2bydzC39Nn2mTFY7NN4uNkjVSkLkCq7RVzCPbDFNJ5p7qTDTQNH8defhC5LBMSWBVx92C8jVv53a",
  "key14": "5mWNCaGCyH31F3hbqXAfLRyviwCt3smHx6J58RNuwnYGvGEFzwjjZgjZ1faza8gb1tS7YNRBaUZZbiU2F2z5YYw8",
  "key15": "4giDuqXXnKcs55Z6TuXfjdQeXCxac4S2Uok17xHuHTKr22DC4YbcntVewQwyfiW7hJu2UMnAuFKSTvCVVdu2NsfS",
  "key16": "PUyTwotubE8icyrVPFifdXPFkcsgfYEfGLRiiyfEcUbiNpC8dr453U1rfBE43ts6miy72evUwvWvBKt7gukFxJr",
  "key17": "3F2yEnps4QyFVPhTgoos2pv6KY2UNNhXmCk1dnTEyinc9aNvoq4KLaUCbwNBQamcDTeBzS3zH4vG1nPG6EcmBajz",
  "key18": "8zdE7P8193mXDp9ajoH1KCPspw3DNjkRwDhJDYmswKFKz4AAkhaqWVshE8cVersrg5XK9RQ6GZNUMoFrX3uYKfE",
  "key19": "4HcemRE97Troc3gmxAudRQfUuxM22rnweJ9RBXniAkYSHWSjZyrQbRREH59Rcx9vPyLK4yzp1J3MGLiHSw6MMLQY",
  "key20": "4G6wbsVt1ndoiz8jZZn8THRPWGcg6iSs5NotnrUGWHrqiyp1NEqJygrHCRiFnnsiaQkrRJqkiWW6o1rjpfpFPVZb",
  "key21": "2WRA52YnVU5LK3VVEvRYNsR9CJpMJebaVf9vFSY2zv6ejHfm2qZnRPgmNCP1QgzwpAmbAax1tTbavQgy7QrbDrZd",
  "key22": "5qSkEPuhoxRsWTKabCFwfNMMULjyamNC1CnguA5pAbDZvbpfXfZhuA4id3SzLrNqkpx8iQMcT6LviyCADLTSZogu",
  "key23": "JLxt6NaxaZUxzKuu3drRmvAQWMKTJgiKaY7XUV3KujehfyuQkRpPHxfdchhZ2n38jdZVGHyo2xAD17onSu4QvB6",
  "key24": "2rmXiKzCvQtEF3RMwCicVS6qpgMTQ61EtVtZFxJcHfLbLCmjob8mX7uxKUbDQh1kwXaP6Rw3jB5QXQDEfXBdspRx",
  "key25": "E6RfSUHVVbrcP68aTBPVDDJoy2Y49TkJTSHooTUs6uBGqMgFJGmiYxHytyT7c9jRWxHcK9w3uJdLo3zMJNSpjXW",
  "key26": "Wrn524917HY5UBkiXDy7FoGQH37cjzDrb7BgNQB7qHGa1y8qxTsL9uxiwHDiyuKN9h5kpst4oP1jkzgZbzojv1H",
  "key27": "59z1wrT4T5jYu4LmofGQaMoAbJeoqhkeX8GdhV9tHfVjfvEBNvhAnzLFhpriuwCK666DXZmauZgckXEK1DEAXLTu",
  "key28": "36aqPqmHoJwrRXnUe6htSNXQWZntwP7diiDZuWhLp9g138Yvs9gCxcxGRvKnqtj5dfBZAxGivGa7UgKiA3NpDSAs",
  "key29": "x9FZKRVtW9dJBysEpNFtaAjjATMdbArj2EGSDhb7W8Fjx7erVeLcUj1U9gQDsJFLGpPDpc1ppNj3Uz9yV3jt7UJ",
  "key30": "1STyi8taY1BLSwAGPqaF5BLpTo1xMz9W84ijWR2srpLkW6CfBDdGQhim2PcgCsk7z3BNmGGEMUE2iA5kBRSc5VH",
  "key31": "5bzRFzvWJqQvXk77tg1EsVWbrJUR7zYX6W5hMKgZ5exouPSi7qMLLcoRMVRHgxQsyDrvrKxyNvbae5hQYXyxzAcX",
  "key32": "4pAsesG9tJRxkvymRCjtArN55HTCWSGvzYhFa9jz6fL76JHjKwFpW8L9Qh8gkwVENbUduyAeYy3qXtG1JFfhDkCb",
  "key33": "3XmrEyHoZxxyc4L6KSNnxxAhqYVxZbtTqQ4ZA68rrCZ4Y3YmhNMA9YyVJeK1Vnv7LbSvnW7nFaAefJ946z413jiA",
  "key34": "5MQcv3BT9QLRs3tKitFL2r6q5HD8i1mAjLrmwkEPqJwXHse1iw6ttTLtLnhtdM42ikEHNivYrKj8N6oZuWjgWCo"
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
