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
    "4xbmobtUXnD5NdAfy2W8miv3xXvnQXNb75w11VEaAFApgegjpv3CXwbAz9rDuhbMDVKs6Mj9GQ64jYDvegUcKeqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W1V5WGioYCcimfdzJbV89oj6uC2uLPKy3YQs9J61rsGDfPYdnqDaeXVKF1ktrPju47479xk8k28aNcCDRGKNVAr",
  "key1": "3HUkSQMXANwNnDwoCC3LE8WsAwv4uD1EM2a6RY45xji2SsMY3hSenLgN1imYbrxfj1txiGtXzEEj8ZVDuDRJHFrW",
  "key2": "517wMA9ZaAG9y5Word9NhPPGzDdF2DorJvrE87SJhiuXNbYkVaLtwf76YP2CyNzQWQq5LLfAboShd32Jug3EeJoF",
  "key3": "4zH4kwQsTDAug9iTkbiBGbGwyn9KJcnNBUuq2XngZAq4sSK4jgVgXwpZ5uHrByZ9yVVt9H4cr7iV21Lh1RytS3yK",
  "key4": "5F4Hjdt7K71EvVsDNsScN5bE8cKwSqZX1jJbqjeYrpfn97XNeNwTkBWcABawB1n7tY1EaAmJ1LZY9Bd2tPuT9eJD",
  "key5": "36H2LQaj4CwxgQBQNGdu3NTKoW7CKaacjxn1eHy45sV6UfFZHJUoXAdkkRujDv6FPuKMUTy46snnWutzCUAfMVbw",
  "key6": "4fHT5a1HTu1aXfZj2KUKsDkJo7nxmFuEx7NAovPhqoDGKAx9BoFi8rVWscPxhSib2q3pKjvaAsogVcQSsrgQHNir",
  "key7": "28wp38PgTEx7kPtfLsWKEwoQ3eRJmUh6eywEaieRYtyMxyVbdHgA2GR2N3x7MHAEpUNcMapgGK8Bv2tczjXTex2z",
  "key8": "4PCGvHb6KAX3HpP2xj3dfi9TaoSCasqDYLGYph5Qd7WjKFfWNDGYg5SLCP1AHpgSQnskVhDwT5TG6bkEk15m5JRh",
  "key9": "3gJbAx3fTKzvfEqgUNDVpUn2K1YMDTzpNkVwL1gBzLV7RMFHbPUh2Tudjp8XMYgHgB6DaE5qBXBoVbag7dkp3RDt",
  "key10": "4ojN6ErAjbgzVrbvN2sVpRm8nGKRKEQfAyvJCMqGpaKmY98fEMHFckUrtR57R1ZNovEhCU6omTSWwueeNFgAQKC9",
  "key11": "3iVFeAcWgQLUq8w8cToav5RkdSWKzjtbt1P63pq2Hwh66Dm1uyjg7ZCQXFpkLhudQZq8jPSHQZd9h3MvVfnz6tsm",
  "key12": "4h74LuxbBwnceQfBj7qnZXjxXBsfZm4WKczdkar9HXCfgbu3XFme7AkAm9jwqQ78RVtMn1SGD1bstSJxyjiQZ2xn",
  "key13": "482cpCN8EH5ESMxNjiwEPF67wXZuZhM7jtQLjBUm8JWmq4t9thDEBPuqQ5jboBetzohTM7qKtmG89mtCN9HHHhv9",
  "key14": "3cUPR5pF55ARe24NsXnUrRwXSTeWpHieVBCSSDiZ18PeJNyEesrsotnZRkeXdCvZXS7hsZQTF9mosB69PqDq4wKS",
  "key15": "f2VZyA7KF25CxdysFKVpeChamQPDYYhR2WqWVsm123RzbGUFAVtGT9zLMqMRECLHq9CCxZg131uNRmqyKrYZpYR",
  "key16": "3LxJWXrpxHeHvA6Ko9BLkZC486kYAnRSpc4K4HW8XFuPFWnRvx4uH9YAYybfFbavrMsEJgpdmR5zvZAQA7E8W8vQ",
  "key17": "5eVMBDPVbEXnc9kS38oNqnwJAv4ieXxbe3uuBnu11tpo1cf4vmLLT1Y1bgih3o6ta8fzyCCVF6dRRRJn9Mso6Mjp",
  "key18": "2bzsonodcgAd2wguJR6sQy21CngiZkoeUhFSiYvryQKmc93bt6ZiczYbnLHGaR3AfCTN6jEpCSDN2EW7scinL6PF",
  "key19": "nPw9MkxTgvQ3mA6xHiyzrLfVAUHM6cQAhhaUbyhtZYbRVmzrEyY39heAzqRhDNihKd3wGvATGbQjCsVZ3JueNWa",
  "key20": "2pGpHhjtTEboqN9LuaaSVd7eP2LC8MuZnrh6chNriQ2wwkvapibHVAtSZRtaHygdueHbf9Wf1hzmY5AYnPhiYPAf",
  "key21": "3tcug2JCbnJZaCshQXXb3y99WGdwtzFnojeHfucUPqrYhyavNXD6ioYBziAv4jXbEAVyTa7aagSBuf6kMTXn66Dy",
  "key22": "4BBwwbgWcDoHCTyojatH7qM8ZsBeVnVMaVS15BfiXwPD5p1PJh3mt1898Emn6puF3JxpWF86TUAurZFZGRAX4yMC",
  "key23": "2PCjBTNtp56ZRY4NwMxKiazaNBjJsnZQa4S6kj5LuwJLrJyMsUL1D5cUMAD7tP2W1TT4aXPmhttdB7e9yA5h2Q1W",
  "key24": "5joB1G4xa5Rud4UJLLgPJoTnptEBRcEfqNyXzCrhwtpVXmbNGE8AA5YBiZWbvi4jMzoxNdHB4V8zdRWFp7iPowxE",
  "key25": "2vhciMf7Vbf2G1ryy4d6NzhfRYBqGSo2JdUjCzwK4t5vhZaYkuZ2CCLZeHXQ4G2WFnASkGcyy8JTQjbkwxzF8ghK",
  "key26": "hogxutuq33sc4Gqd8wS3ppt1jwWkvRaWBDuaQMqB6vqDgVv7oUsh6y1zjwvfKARV3RmGBPvYrNUKZUcT2ua8ghB",
  "key27": "4R8YFzENsjiToq7rrCjoT9S2aBxpx8EAFpt6BdW6sj6QZf46XSXfUay1a6bVUS8FDhHziHksgaaV7kq4Ztxnjf4v",
  "key28": "3yMV8EkisiBZV4yjSvevUFP9mSFRnnxSeJTZXoySVLdKkxG77M4AVkje2n3aD96ZZHMGMQGdpaq8ywPM8YHyCf42",
  "key29": "3w4Hegd66VfWQxr6aNVUgVUpEbGJvD8B6GF2NUTGZ3w96a6JoMdJcCFhm8GG6w9ZRFGqHQYaacCqyGCsKchuSE14",
  "key30": "2cnk7muazC4ovQa8EHvUKikYDJuQ7whCyaGbnDSP6wEfn37Vuex56v21TtEigiXSeYfnVUpv1JNtpHutCgjxqGiZ",
  "key31": "3uaF7MhjswR9KqcY72rsJZS6AQVcFiH4PPzyrMgFC7fBEEb9AXuc7ht3JY53bpph1y4kqpLXbuVFoLRcLF3t4qTU",
  "key32": "2ErcD19JHdtSSep6d5Q7daU4NsVxCYyNRY1ASi6vFyvUxy8c2eHTT5jxZrA9wYiFYgs1iYvChRML49iRA48M9yFA",
  "key33": "3Ynb87osJJf9BUqu91Kk855j4qt6VCELu3N3dr6VJEWpR4c4TNm685ETTFQZxze3EhJFJXfcuVnMr9S1URrzzQyB",
  "key34": "2JY7g2pBmCReN3gzaMj3X7nJqxUbR8CSSodCnZuWtjHj5B3ynTzMGbtNd1jmBt8nKCm8iPGoqBuvnhoZtbKTbtkJ",
  "key35": "aWvB6TWSRC78983tieGfUbhRdWdM2ev4DBoFgY9WUo4TPDGMgE8ZFhA87nHAdbHWwabUdXXLegXwRMedXmZXMWg",
  "key36": "2z6dHoawhWzad8TEZhWhU4DEgfMtMr4wPRo8yxzy3ZkXra12tYFBjGET9YM2i8KXQrp7J5Hhqkebo8bUZN918KTr",
  "key37": "PJrkCTV32cux7e4dkZRtSF8ZdVUZdsY7czFJKR42eN5BDEzChHM8AvoTjr1kfP5hFcGMiEpiD3FJtPUVBoBpZ7h",
  "key38": "5SxCxzM3dFgXB3FqD2FvKjUZdKHDeLTTpGLRum1u5cDdUXz8zWpKFrMdrmpBSLhThRScHzZVcbmFfZ6YGXBwTEjR",
  "key39": "557gFkhWG6uqZbXMj58KcJzmJJrssC2JQze34mLGgoaNR3F5iTynLiguJYEYdUY3SiSKCeQhvRkeKyndTHVuQ97x",
  "key40": "G3VzYuwcP8VXWtCYvDA8bHQE55SM3csxyzTnEnRqvxFGHnH9uFLJ89ACv9cDnvzXHczEWJj8XvfJAbXmcFCL54f",
  "key41": "3TeqnJonpRYKFbS7fJpbrCrwNvJKB7iLCd9UbHvbhb9RqyGFJGJcYunpFmsYzd8FEVF5Cskc9KFRmPNkuGKvKRmn",
  "key42": "5LLSamZjMNhXujKyvoUvoy7FVTTEw9PTmpxFP99eRNE3bkcXd7yAiZAM4Go7WHKTe31tLk2NWr4FwE9J8Kx2muGr",
  "key43": "4Gbokeickad183qWpaqKpKRCUpwDW5qr5bJucLrMXg6i8vVgg6zho3K6fdxgpyaFeGsFq96LcziWXku4fPWbRh2w",
  "key44": "2eJVkdjAF3ivSNT8JMV78ZKtLEiYDSmfdb1iD8VJp3sEN4rVNRWrvGPLau13YvXHKi58Hv1QUdM1QMYYLmeUwQud",
  "key45": "2HBB4r8jbHrGakkL2hmfTG3hx8DLQUrzyg2J8RBowhkvq8odXVEXSP6dbW4Rej893EAX1Wqz4UnYGAHRGpNMn6bp",
  "key46": "5cBArpxW23YxhRy4QPiMAKHNpc8N6sPPKAXyrcVoGg9bNLXXiQmYzJnWLApc5W2NVFG12rZUyX7jYunFziWY4ofo"
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
