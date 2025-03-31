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
    "2qLkCySaHAcB98EWkLtXV2o4zuZ8Xk8tq6xpckNMXFGJLMk5HDqYkwTy9D2J9nMnWtMHKyUeDCdAJFU5G4NecRob"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3P3Rw1jCoLdgBZ4WGUurUSWL2Q1Awu2MTLCE5W8i2ZWKa9FPNNAk5dLzGzdt6uheGAvoo5aB2tVx2mW1sBSvgN",
  "key1": "46H9294EXtQUCzjcRpaW3qH3SkLFmT4hgFTgiRcBGQEvjvbPbW4F1KfRuiVcdkVHjdAFdMvB3Lpee1awgMfeCZk8",
  "key2": "2Q6aSyfQ6wjEKDHrJNEYTYgZVxTGfVnhz3T5WuSSyinb8Ex3yJcvvASZCwzJVLh1NyXhrp7uSedP6GsyYCZP7HFn",
  "key3": "2JZtPqb4nr2J2uAjP4Jk3QmenXhUefMdAEVP4Nv3Yi4v1hNX9Z3TC5UftfD9ao6pCnJ2FZHqPMyoNFvM3DZVZZYv",
  "key4": "AfnwZonj3aKj5ZVuBdDr33BU5sA7xaUGDojW9kE6ywcDwHQH6tDTTpKBSbcqJNwkpHWkjxJZdTgnEcF632W8b4N",
  "key5": "4WH9LShTh56SFuvmmHMf5pJoFx6sSmLKmuGfojS7CHtT6wmfiQKg5VCR41grVRQvx96ErY3LPMgwEH3sXizyY7gF",
  "key6": "29eSy3xwYnFW7WkLxeicLGp7CbpfkgWV31psr4jgVh9WQLyZAZEtW2TX2axhPDEEDmoN8iYNzfzytN4cnZNA69xw",
  "key7": "2mVscpGMqtaMqTeFeQ3yhynB7cQEbbkVWzpVPfjBTm9rnc1vPURRbsHHXUDpsYW3KvdEFvBdvAaWGwdn2DARCzz3",
  "key8": "5i5GJQH4oVzbtPeMZRKcVfdufFWDynid1x7eCtczaiy8ToFQivDGXNKBUzePtYX6g5DLbpPT9T4sURX9dkYxTtUG",
  "key9": "E3YYXjgy1WmcsPKn5aXv9diUz2jeZ1Ko3xAFcmkiVxBX3zquGLMoB58zPrysyA2Ugy7kmqbrMLBKjDi4geUCWA2",
  "key10": "3NvTedRiW6jQKfd6t9id4NUqfHdRVVKfwj4Q9pncdFgbJcSn3Jnz5YpZeSXCdqdDNNoeHyXLJR33jVKMZTtqsG3S",
  "key11": "5BFFMPjycpRxoo886s6bFSzD2SZCrCnYUdR28GRsZxq7E7Wcb1xFhXUPki2WDNGjUJX9oV856JDwVCvixt4VBQji",
  "key12": "26ySuE9SBviNh6H66g7vWzfoXQwBVrhZDYpD7gyCFqdyJWo9Q7c8B6pWMzznPudVeM7AsnLXLmVpaho57cZzBvo2",
  "key13": "3zfNJs3WXbrtqqEuBahr4u4A9mmfPDMbbyXisAhfpS5BikUDwKRKdUys78CT7N1aHmf3DmXAukvvgUFToTuYQ96S",
  "key14": "3KH1E9UfRW29TjzJuZ71w8FQVY6PuUbnLRLRELyXjjju3GCpQjScZbg28a5PomdswfE6AMiJqGkkBQ4NvLzK5aHf",
  "key15": "2gb9rQ5gxrdfbxjjK5q6horFzomeiirUpNQJJYdBBU1JGntG9WVWycB2U1DkERwVSqeXq5F4fR3KrbCVaGYeAEjz",
  "key16": "gsY2qJFukLbWBjRgPCYoyPCNJXADsWDYqJB4pECrbJNsLUy5uLQg7HPvT8bVJj9svswKKZG6wKxvDGjSF9cgv8S",
  "key17": "5jvCvyVR8cp9PCT4q1T8tV2ZK1u1gwaJS6XT9t7gMQu2xqd5puVnEeTJnYSbq5URxAJzYUBBGQvyeDGWA61oaMD5",
  "key18": "Y8umomAB1FwE2hJhPaPW72dYzSNiZAT1a132zhE6Eue9fuK2RQTKY7XJm2gcRNnqBTZiuvH6rHSYGDm2bgtcrdC",
  "key19": "2oxFUFbPhj8yTWwuD63MRnUWBEGtu8Yrchkvw2bT1uutTJ5EZ3ALyU3AY1zuChRJika9rDsLmf6kSUpgs5vFMRLp",
  "key20": "519naG8tYM72B3iW3jTpSJe3vdEFPw9FLyn46q3Ts8EYsuAHKNnRt9DNRA8Sco9SPMEzH69oSwM7Pyv9DGHqRyGW",
  "key21": "3KgvFHSBkNdK3gN2CZA7WamchGNwNqfZiD1wYFPpA2QDNtEP21Z4cZ9kxq7ZEpJTorQRFnQafmW6Bgpnb1D9ZkuQ",
  "key22": "5NdTemQXUnrp54HbByzF9EMre2pZu4h6rcXQ3yDd4jS3uDwmih3Q1T32h1AuxVBfJrrXsUx52BB7qhHYqn3HYXfV",
  "key23": "2epeXAVtnP7TkH7zeu1WpRYDPz7CcmVE4wTqBg5eTaYNtTfg1JAq72CZgT48R4NEumKAxNf2FXt1zvg6bNVcp87A",
  "key24": "5wVavUsF387puUtGjQa7tmn4Jt7xGGq3oPFEgkaFh3tQSXtApgeVZV9DUJeXzEGJe2pFXhphq3RjEXct3DgxmADw",
  "key25": "3oPdiWhQ2NsdNmP8iZ6Fr42ZGAa7pCek1FKkTKVQF5F8EWBCc5QC4VaCHgrVACfhF36kjgZwJYbk3pjSbXb9ZUoc",
  "key26": "2HiR3PDa83psH1GoNsoKuYJqhXWoujDP3UWxSaqvgmEMc9cjmKCcUwqkMZqjgLUfyVeYd7tiLz26L8Rw1FbZcN3h",
  "key27": "4aqjyBGTx59NoXxKLBqWKA4urY61tRh327mwcsR712h7SkxRn4yDd2c5bgQ6Cmf8ncNUCkGYBGZ4DC6TRHDDrB4b",
  "key28": "43fX4uoBCFYHWSkWrEnzDK15X9PySfjWbq45qvScRFnLUrjGoBhkdUzxN4Rte3uYgaXjYhYMS9CsfJ6tvskRBBDQ",
  "key29": "3P9tSuRvbgxHRiGygycanHqCxuD6PS9snzebAqSHDngKaaDcF1ajB8RHoWZZab33eT1a14X8mmjVCAyAoKUqwKrV",
  "key30": "5hHVpvdMczGG2vQAQRJfy12k5ABh9sEJyatcGESSuPoQDXi7bgruVWyy5S92et3eH6qKvP4fVGH6FKqdGNHK4ub1",
  "key31": "2DPQSzoZUHsKDUzMrSrEGNmvasHryUDJ3i3rq7bCS6XDAfXJucviYG9Nr2z9dvCFX8p8Ya5sD8Hfp12XiVpHVXsc",
  "key32": "3P9mBPsB5WLtdEtt8xdL9AJ5RFhQ4YbYNn3sG6xexcd4RNAt1J7gR1gG7eQU7bJtdkUBDa117W6jaRrtos2VzYrv",
  "key33": "4YgZZj3Sd8paLJfHqB1Z8kfB9qAJKZ3n345XpHMW2urwk2jfKq7AFqs51L9jNnsh8DzvogQxT3dhZWtYreNktNkA",
  "key34": "4deL6QLSJCX8Xy2ubd6KizjsGkFTBPwwVBWvFfaUPQvGTXeDhSo86s1dqKPU1SNXrhVt1zaoXHAJu9rGA3RdFGLU",
  "key35": "28tAUtnDVe22JHoXJ5gE3tBkrCkktTf4139tY9hHceTnFdEu7h5MM46jyU2ZSoVipFxCy2Bztih14uMK4vyETsjJ",
  "key36": "anRaF8e5m6nLxugKqAnLV5fPZEC1BtvcgciY6BbNju3oGxhVyuPop8jGZKNjfcCoufmecUGrtq7pHKq3TmmkeHz",
  "key37": "2npEVgRKqKDCPUX36mC9byApwjy47kjZ7ACPm9RASwY2vFhKjPzUbZud2DzZzHCYfFBiq5sh7Yrqadr7Jm4Rrmfw",
  "key38": "emf8iY7D7HBmxLfLswSAVEvwyrEruUbij25TZ8RyW9pe1cHWmJM5bwExish12AmUCiiqimJzkWrb7kTpyVuSG3K",
  "key39": "4QCkJPybVZMhvmruTQBNrPZRBFxJwZNjEVMB8x82fnmH6cqT2GyU6bVZHn69pgQqY5BnnGFYg8jkX7TazxoV9vhv",
  "key40": "hw5e6rJhqWjJMuThXPrhMoxrMwfd7LyK97KsGRgFkpzXPDnwPYmgcu7CyF28ivQXuiSHsuqWQFapVNRsX44RGEo",
  "key41": "3iSzE4B9aVbKdr93WhvenT6cQWASDwHvNnmcrzGkzHutxswRMk3edMvpDRM4y4KqjrwJaEB9k6tRq7byNJFiDFBy",
  "key42": "3jNmBhncQ76f6jrQuP8193eTvBsjnPzWuZuz19mqtqaQnQ2zSw2iqPBVMfREc9VCXVAmav15PXzb9mdvY4nz9ZTP",
  "key43": "5uCHBnMuq2vLyrH7ACK6TQbE3HrNacPmriEvGknpBRk6QiiEcb6YuHyP7TwHmVprfyX8ChF2Y7rixr7ySodVXqpR",
  "key44": "5Lgz2dvRnwS8McAhcVzsqBQ3bBjVsHwNDPFsC4mDYJyq5kpV1D2Uga6d5fnuPPvZ1iJw4QQ4jLA94rPH1CpaA6je",
  "key45": "46epSUCuxrh8tYPQzh6ki4vq3kKvJqQCTbxvHEjowE2hbqPtsH3daR8a4LfJbx6MmHKj7V8EHMN1GAJsF9Txu58H"
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
