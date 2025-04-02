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
    "29bpyZeDCr7zJX63BqHQEn9qdPABqW4PFp8FLXTtaKq3mproy1f77FkhutpG38rZX84mRZpjE6oKRWshCkCj16ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H7yDB5vp3eXJx8sjeZkQEhCnZjvurysPLyA173cSykLqBQGa3V8U3H1HBSFFTq5f68XqsRwbz8LXaEf6quRLiod",
  "key1": "67TNvhgAV2wf2x78Sk33yEmtVvMaXdB3vQNRaMsxRvrZfbtfaq8PxVhKQ5tvpMuQCaujDkPcyZvMqcYkvqDY3Skj",
  "key2": "5m2EQF8QbcyT9oppmcjfnnhkWzNNrpwEEdUaamDG6avdxHG2VsGNengQAGheYSkgZBkYDiPKsC2EHH96Uy82UuKA",
  "key3": "5ZzG4RYjHCEBz6UWAXLZbDZPMX8Pbjqefn14JcFtZyr63SbGt8JMH2XwvfjTecJPoA7sw2NK7gmqCUG5Mmw7AiUG",
  "key4": "Gp4buMWpSCXxP4DctzaYuyKQiTgbXf9yf2Apcoqm1g1CQVE3tuYEL3nDgvRVipojtvtU9nPqAsv3h8GMuS9xY3r",
  "key5": "2Lcq7ZpPwnKZCY4BjRUWhiiiJ9iwNbYKary3isMErRvTkW4BBckuuB8iUGHQ9Ro35a27JqkbpiCT1hC9bf3sxDeG",
  "key6": "3v9PDzS45FP1HtRcQsuuCPsZygG11TtFCjnAGzaTp4ijQQ5c5hm7n5Ym3huSUysJw6ngt4CsG3GV3LGvqv9yME18",
  "key7": "JnNaCr1SMAHtC5DmnzRwaLJvzYaNPi4xYvmkrhwhXsZWX8ct9mmP4cB6BeeR8P4FVYAJkmRnU8jDBTKcVXLnQ23",
  "key8": "4jWWwAAtingXUwZHpXrv2w9Q8CjyBDpUTgtBNPMQ8Jq4KK271Ue1mNpHwZ4dAGexTSRecxDmCWjb7LdevTCfQ1u4",
  "key9": "21gbmGVZhy2wZLtLcxGN5acLhgp2e3vdDewGtwa69jSSh7nuLSPTk4dLN4551HbAytnLyQhy4e25idhYQURpii7c",
  "key10": "2njQrsBkfrNkB4VmAxubNPxyDK1pKSmfSK4kXkTjFt5AxvKKLS6XSLUCeaA1Cu8oSpoKUWmKYAwSXGuHdBUdz9vw",
  "key11": "47v869P6z4in8kxi4PwymvZMG1eLxcFGubfL7hxTARd4qQVGCEiJTer75cDUTNoj8vt2WixrXq5hJ2pRKB367Nx9",
  "key12": "3n6v1L4kLicC3GWHB6eKGRp7hSYqRc7W5q8gHhgGKLkLeimWWkETtAvdap4QgFq5hi8B5b6vedT84U4FYUBSgVWc",
  "key13": "2ZYJtQ9bPzGNcwcdi6Mv1Zc6e88XtAqkGpdanJPxxWctHxhBMDpfiNAdtr9ZY7at5eiHPCTpecmeoVtXDVvmRvEx",
  "key14": "YXMzzuK8q4zEBm43KFyLx15u6eKhxPbHPJGLxzkSJEANxSdwQtV9X2FY4F8BvHLmm9xSke35pC7wbpnNKcU8xkV",
  "key15": "aiFuwdfEWHXZJmnkgDVKWvoQyzUdKZEp5guDrvQTSDXVdmdKSjQ8aCLp7YiQTvmwQR5JD4JrPqAhz6UfdE165aw",
  "key16": "4yMSAMqjEJrKwcpjypvJcgDhLYq2itPgJMsHWvLp7GsZjh5oXNLEQQcQhvKsBQLLFWXSJ4d9762o5WtChQEVbYTN",
  "key17": "wFTK1SzuG6Z2x4U8bqVhMax1dxvhkD7ZG8e3nwMbFSHn5HGUFb2RmVEW8M4LBUah4G7KC5Smk7BokPzm3PJS3Tf",
  "key18": "svTfZHaP8EBPXUbtyZVJ76EYWGJD7pPzZtMNAP7pZPtqXKTgoVXZRewFrFkTh5GMZ66BUaBaGHheGcPTi3miGte",
  "key19": "5871xwaG4WDtrRdKS7XnbtGXQmWfzJxM8n359rfEm3wtaCwzitjJanYyQtq2TxqEj6w6VgiWP1CRHDBf3GEGWbLq",
  "key20": "2XG4AzreJ8duoxdJSjYedwdTP9DFXGnY3YKSpeQjHrqqBcPJcEAw57XaWpJRYt1GxqF3rGGQuWAmnJUAcNasg4qp",
  "key21": "2iJDzBYgb8YSoFNZqAc1t8GBZpxwdxNAevXKzpqGTuvgahpzSkNKS2SQht7dSoV7QhrprfTKHAaXYU2xJShGGoEV",
  "key22": "2WYkgHZ1shwY2fTp558kd9f5LRv6yfL6go37BCXgAbf2U21aZBPcbPEw3peSeaKfhEv4W49M12rHx4SJUC2j93xf",
  "key23": "3kj2yxNiAibCHD9S5PssUd7aRxc5mvXyWXhg9zJ7dqpTGq2tkfYeuqiLySnHHqwKB6nxrNH8YJXJKqeZAwqygp2V",
  "key24": "5zrT5ktWMc2XucX1eMGyVENzdPva4pQk2ioDApcWyKTYYGDWxapcarRfHQEFa79esmRpnJw6TXzAqW24FvAvhJp7",
  "key25": "2G7d7CZgFUsEBijf5Jo9XrVvYs85mo4QRRAuzuKqYFwKPoofSKPPRWPAtjtZjtfnPeUEH9s6uNEsvMijNYc6KNog",
  "key26": "2y9WQefg7LYLNTKdYX3GTVhyN3wtZGwyjn7yvcH21nq4fgu9k8RAJGUfzRR2LHpbucAs28HucgQYbCRGKCozpKbR",
  "key27": "FHBy45VYz6nEkLc5VP1Zdm5pMp1KcZxgpk1itxqVfc2n3Wi21dg9ToWLgZsMdLhdDtuea5GQsUiFLWbjE1K3gTw",
  "key28": "5HfTbQEtCv5dvdu29s3DyXSfmfmbwEFdfrQ9cc1co3LWVbFsLZEXDo8qxqkxFdPjvcbqFkNtGLBftW425xa6C7BP",
  "key29": "4n6MftZy8C93rq9eTgYPgUcvAwW2FnQc7nDwZRR1AF5WJAkHHZoAfzWDiBptawiWAZM9AyiqQ9tZykEAvc5dmZ3p",
  "key30": "5k62FyHsjEH18dcrZ1MPfj8gi5EAU2gTKwnH7sgPz6TX2qsNaCnsRYAmxTKhH9PMkq2UpDjEyp256PrRrDF3Cbkg",
  "key31": "2QYtep3JPPRpWf7SMsTc4FpCgdjV44zyHjMFMxbGgWdNk5isYVTSW3QFCSaFSBrFGUW7HpUeuHBKuy3exKbjpT5i",
  "key32": "4wi5z7PgoX5hibu5XNM8T2geRbANS1eoC6pBFZ6SPBsLDFCfLNnQpfuQQBT9kHFYrwwZVAmvXko5jH9Dgffzbt6W",
  "key33": "2n6cmZoooVY5Q2qERKjYEPiXx72gz3kaE42SVf56jYJgDdxyHUYQAxqTLg9fmDs9oyepycAmLBRgkDhYjZgMGrat",
  "key34": "2CrT3idjXXW5U7rAmZUZxrUD5FoeJ7U4xs4m82eaG2XDZLh7Lqy6XP9N8RHZmNzXdAy6E8WZHh2dQjfuvBDz9eG1",
  "key35": "58cCh3UA9VhaBMKLabmAyDpH6hCLHc26NoKjgSnazsjTtJk6PNnLgqXEuv4pz63C9pCBVz71tab8GG8LUt46kB5V",
  "key36": "3LVyLBC4KL61bMQE7VCVQNZFKx1PQosZJAmLJCduRvRfjA15zFkPAiKrTjvFQHvocqj2qCUjSwoN8VgLHJZbtTt",
  "key37": "oUSSr53SSr9EM1NMhLTxEfoHQor2txrwobHc2HDmaskorJncH26NzEw3vK3rBx29yTiEJ7dtAX5xa44TjNc4yJq",
  "key38": "4DbPBQ3fn2aoKTV8m6kCzFu1oPS4vKrmTB2wPbhj1ZNmexGqw6vmVsBwEL52FefVAHGo9vQECNX6fB1T5q9LD7Xj",
  "key39": "3Tw4jTB9xJ8DmsZtFjp94ZTJgLUXtA2HU7usTD7WQvtpijZrw5engGKiE1k7h3jp5p1ATTkmztFuvuFXzc42nEgY",
  "key40": "4451SN1JdhWLWdGe71DAHda2xdhFpmUGvURAfMsbaRq4qRZE7Utbm3fYvWdJ7tCjGnSJrBXtLWC5t7h8r9D4LFKD",
  "key41": "2LqJzfsmjXWUDw7u9s7w1HQuUppPjjdKctA7hQND5kJuDb9J5NyQL8LfeGhNkLQZZcnqg55T8ppjnv48B1xzpoye",
  "key42": "2DYHPDTfhWcuVADb2Aysu7NhxbH7RreSmCYpfuf9Kbi85QK9cWTv7VDMmThD33YDaRkZC9FzNbJuctgPZ5VDcRix",
  "key43": "5yspNBrnVv1ARG43X1H74znnrPcBHuGdXf4EUoTdZxzi4d7hnGtd5svV9EFpvZLhvh1gCfPnA9jV4L9nM5bmt8Ts",
  "key44": "2XZcHNaQeF5N4ksfCg2TGwhrJhDbReqQvkthKLh5rw8vhUXrV1cFeZ5Hm38NMvfryu3H8vU21xHd99eJYoHAhUUx",
  "key45": "5SWUn3gumYrw6MbEkWbcTZCdMcWW6uhrk611oc2ULNwnNAhrXgTdfQsfRkVYho3F3XPsu7kR5mJQ1eKC3RddLWRs",
  "key46": "5mVThqPUxQUU8rLMHs3SzSF3euVYKSgYFWLrvghaUSGPR6f3YvhbKrPAfYzu113KqhSMWekN5ruZw1rMK8WiFMaR"
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
