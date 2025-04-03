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
    "3bNMgidQcfYvjgCpmmqyZN5biERFUoqi49DJ5gosbKL5qqA2vzwSN7T7h4sbD4jP2CgmjQZ9sztqbxZhHo5FC8uS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29ejyDZSKWi3C1Hb4yY3YEaT4yeCa5sqn3129xFZBM7YLuiMb6REgmR87t9qgZsuoMcvuMWDh5ZMjCpnoVpmaZyP",
  "key1": "5Uy97UuJYLRKgjqtikJXWf2ZxThTCqWDE19eGwnT88mMXfcyTVM8L3zEGL3U3SPNVCvoXX2L7eE9bco5XPLMWpAq",
  "key2": "3pgyJb4i3T6Xfczhm4tMNa3S2WRrV9rTXZabdjhRWB239x6rV96N8nCgQUeRw7DUZ38AyA8AbG3Fta4oJrHmDxah",
  "key3": "3xvTH4ML8V1Qub2RyGGTnq5a5s3YZaeuHGoEXujGw982zycPAiFfU6yeW9SD5FtB48yzTMB9jCDNEPGJUopfhh8d",
  "key4": "2yj5Zv1yob9bhHvGJrABUfEmCyzgU8UtU3YNXzQ9jqFUxRcdk8rXQbsoEckpTudSRr6f6yUEzJWtzs7svypA4977",
  "key5": "KzKHD88bo9s88XogvEmQ7FF3Kuk7fsegSCevqKDcsDCy1DVM4pSspKDgKQBicfbBVctypJSpGQY72VNA4Y1Pj6x",
  "key6": "3ajm69WTFESwnvp3izxu86p3PcLYxX1snLU8d4aoFeFULjj8YQHPS1tU3dgZGANYmM6EiEWJ3zQmT46CxomqXrXh",
  "key7": "3jB7teRALNF4dzsJ4xRdmWPYHWQQFTLotQUwhUzDZxkmqrpFZNmP9Cv8Tm638L2vivXYy7G3Uf8Ch9g81SLJGjxY",
  "key8": "3KLNzb1dzB6bEcWiSjDGi3y6RPthA2t8JcRNcPhWNpGhwDUUbvgN8MCYpQveErEc5wAuzySRmHHPhvw1bKpZFwgk",
  "key9": "5Ke1A4hK2PKZNRcQVstujB459HbVeKaQNsQoPmRpSHjumk1K5mVXu6bcwxJy3rRZHzacjKNhZdo2wZ1Zm41c38JQ",
  "key10": "2ii5JLGR9kotS3TSMdFJVLCYy7inPZS9LEK23aa8x9JtUqvERkqgW4KzLuUw9KN5DG2dwMM5ps3V3MkZMBopr4Ux",
  "key11": "4YwWQYCZkDp4dJW1FX8V7MG6gir8tVFYxmWweexsfBfPSQecqR4KoxWkN1dnvtJhi3hbpy1zPLBEa4LRpEhGB5ZY",
  "key12": "2AtzZDbFBArZ3gNXb6kFtc31tbEqMBotWi1wEahtoK8KeQs6xYLCCXndgy5tExc2bbSRDyMiXMpRYAdSqRdFHs9n",
  "key13": "1d8wPztyVBczSejRwqF1awKY3JFsjD7ZFJRUzyRshRW2RcAgA856nZR7jD1pfyu4U1i87wJFnuvzK7ifk19Pmfm",
  "key14": "4oSanAe3fFbW4wbRfAsccoQuz9gSBXBa77BMfoUmVrbMtYfLyT9uCKCctGo4vv5DVrQ3AT9SKU3pyEK6heQYEy61",
  "key15": "2hqYCNz5DnfyrY1YC7KFcbWN5Qtbg6D1qfHHfbxSBaaDrHrcwEACy5Y9XcLX7DJVwM1YsR8yGa2vP15E6GXc7o8D",
  "key16": "4SUpNKuTJX8eUKYQFVneq5dfk4yfwTqozUUKbCrj4KohUm3rzVYMeoS1C9GsUsDf22k8mHBbPzyQNi3qY2HFfv3N",
  "key17": "36W8W6iVuaazMc9L4oMYT2EbNxuMEFFzGUXgRVR3DMX38C69cjGXi2vjfcKgVUqLotmTsxvsHazeikUjJnChighf",
  "key18": "ZMmq5UZCLzCJtHKmaAwGMtkN1zWra9uekEBg9SgCsiLFiWAgdiiggxh8PG9hTfmEtk7PBHZyN2bSDFoNXESc38x",
  "key19": "3BVDVocHetgLEdEJtqdTyBmpy4XDNzUQ2R9r34X6WRnBRAdhfwSbGF58NPgWoSFFzKXu2Cm9DyNGtwAUUEzGydet",
  "key20": "28rgi1bVUbqY5R5w8q7xBxovL8g7sJcZfnw7Yx9FSnsShjuzdFU3JYCiV61RBw7JCsXdzq2MNS39b655Uhi6xmmS",
  "key21": "3fovFmPmD71T3B4Y2TRVZqvEGzpmbnF5YymgUpFQrg4hnXv2FGkEaCjGdVPAwAWdSBkEkT9iRZQg6TTc2mSntJ3F",
  "key22": "friY115noAGYpoMU9MAepEbAVFLsyTY5PfSssatjyjG3udyqoMX1wnxpdsZGL7BZt4p3EYMYY6u919uUchv8NYk",
  "key23": "3EGDMeRpARjLVkw2v1mnC9EfHjx1rqtVezsLvRM84xqNn7UzhdFaGXz8kBx7d4ht9M4hzBWBq8DkhxnkxRijSceT",
  "key24": "5SmT3FzGoePQSc3NhiX3Q5AgURRQb5KdfHq1bgqPNRsykpVYHjqfztuXT7heXcpUMki2vk5wLLkxiaEagz2Np4np",
  "key25": "29p4RTGcVTqVRgKDbNwCbEhZevK6R6WipUiTorXTxs7QvDa6itjLFsfvqS196P3tAgMkU1R35NnRUcH1DstSDC9w",
  "key26": "4QQ25a6XYCdBLnP7B4MfNJNSFB8u9ghgbVbpycJP3HNRZ471SuZrCHvfZv9R3MnZ8t2PXQuvQUMQxCzV8XVR7a55",
  "key27": "4k26XuGZuTgERm4t4HLf52sw9GgMnr8VGYy6JDqLXMQcThW3N3852q5yypDZCFe4NnZ6eVjeW4SxbYj33Z6fcWFv",
  "key28": "3M9dH8KrbgkPGmmh2vzCzU8GaGC36W6Wor2fEWR1uJEwn5nqJ4E4bauM4ifcBxtU5mAQjjjMQBx5adE7dAxEknGs",
  "key29": "5sFq54uZhKEXj6duogvQfNPrZjbq6fQN4t6xxSmhbTBSPcbayfffSm1oP69kz3exu4vXEGuWT6APxX2XC69UWyeX",
  "key30": "2GY9RSvAthnT7cgLEEeHkGs8UcdKFtQWyqRMLib3W6bubNQczntNaQ4yk7nejWs8fZ5xCaN5SDL7n9qMWvMiyxRJ",
  "key31": "5vqjMbCxdom6zd6pQfV3NQfr5nrVCAUQseBYE8bsW65kiWN7ZZ5D64EDiWZPim19UGUTZWtm2D2X2BWGqYG7iqfh",
  "key32": "41NPKop96ZgbcuzpaFgxTa12c8McerKdrznYUoceEv5D58YeQTPGZuuKWMZyaMMxom7s5NAr2kCzogZXATskby8x",
  "key33": "5DQwPyi5wLM4fouqx9yiRHzsuQC9u2nrpznNVSvYviTp1S8g2xSi5rmyDUFxXYdPfwN8UjKrzKctMjzWkTVzmjAQ",
  "key34": "McEiAKpBY9Qft8XZUd1G1ayFzdCZcBa769pLbRgfRMa8txJBpi9Bb23Ekpht4Zrse3Rv2HApsxCsoH9hQQJrUth",
  "key35": "49LuHdvgoiPXiFZmh8HXkWQ6mzeESY189nu8WDfFgnLiG97jVmKDqLSgw7pr4DSJtVpArSywa49BZX9dTKPrpiCc",
  "key36": "g19z3hTs5UEMXBm8rrgWbUgw446vEWuWmoRaARTxTMEBVcNZs5u1BretTS8nUhqid1NSyDzUc4adWuo4aKdPEsT",
  "key37": "62qNrypJ2Z4QP5uLCyVJbDJTqovGQBLtmX6NE1ptfvVfbL4VFjiMrRgZ1BsR2MCdyJnqm5aXXGHf4a5ChecrSxAu",
  "key38": "52S2VehoKHyZXd4upu94NexgRsyHcEUATYySuY7fyqKVF8Qn1ED153hua7evNfjLiiz4a5jiq6k69PNXLNxt1Tcd",
  "key39": "2xL2fkJ4ZoxnxwQkevvMLXrQLPiPGSPjczWiG4EDHCzX7GJyViLCdd7FKEjtondszoYnATXtr5VE2uRcoPW4JSVi",
  "key40": "2qVZGz5n4KrfQNdbvTFXeK5Aty1LXpVM68Ea8EKugaEEbbgUAmqGJn4hgYFBfE6XqfMiDukSutMUkxcUkCaGV2La",
  "key41": "4XFgpe2Usexs1DMFDsUAjieMhDVgR44KpiT8npPdBBRQgqMXHo2YD61YUpJx4H1R7YBbjdL73FTobULZrCnXu3EQ",
  "key42": "RuY61Z7wjKwZgUhDfC7DGxxmvay8U1NcSt88i8n9y8S7XMa3nzwjVajJSiuF9ZQ4MCMmacJJkyBrsbEQf72gQtf",
  "key43": "xTZbCjsE2BGKwacCC8P2QJheX9b95DceuVDsMyURVCi2t1TiDRmhaUueUKpTH9QmqM8r6mBcPTokF9R96iiKna1",
  "key44": "53mr3EidiLZb4cZwQ3nWZ7Wq1vfqjfjTi7YuDefZMovaTq4auQ3qsCYVtJKAmCMFjJXSNBs2YdXChDsgYQLuGoBB",
  "key45": "5LTSQezD2sQKLyc4Q2MjMGnC1ahLe6b1twYMM798dakAxBKjH8tRsohtEbx8rQeeu4EwvtjCNUjupigiTSsvt3G7",
  "key46": "4rme9SaJhRYLXAzPcyfQvBtpo3DPYAnd7fFasGExBnksCPnVz6o6HUofGuwK6ZhuMgbQtL9wkAaXzcAhjMFdP2e3"
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
