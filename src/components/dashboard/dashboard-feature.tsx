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
    "4sRB1NP8xzmBTUfirotKNnVqeKJmqXz3zkYB8EEcdeFW4oZn6d2PXqKR2pjnLFYmesNk7YnFrRqMW3NsAXdy1sAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TxWeqeiZNUxEEdsNJ1H2pEbKLFusgT1WuXLbnMijY6Rq1M6UGKPUSDWuJtSYBH4X8xSn8ZhtFgoG4513V3UJDjr",
  "key1": "5Vw3HnUvAUC25a4QnheMBFp4jjCZDFib1gAz2fmdoVs5qKe3GK46v2Dx5EXG2PgRgJRMEVfji91T2SMAkYxJ29pe",
  "key2": "5TyYGZmfRbbPMEasGvyNUGSpJZLa6by8e4UfqAyfG39DpvY1N2mhF4nmT9xcpxKioozq39FEhPqGLzM84exnEpsa",
  "key3": "7v8bzNomYtXCxizGBNVJ8LyHDJZJABtMLLB1bXfn7YhEGe7PbjnFgZeBjwqBESUucJYUq9crV5woMEHjFhBGQq1",
  "key4": "54tFuKc8H7oXFLaHZMeRG3EctNpbMxd8PuRFeWSoTnPUtoXyjBerUgKyvZWY5TmxXeQ6Bs2jaEij9BimpWdQ4pWx",
  "key5": "58vVtS3EwCcg1Kgbjb96vpcq1DJNvzXiwBaMnvQ5sLA67FWShXg7HFWdMy1VoSR85Y12At4ockFovJqsEJQVRyFY",
  "key6": "3tM6iCU9PrPwUUpsUa2vF4kepY9UEQoUnvr1zgKbvbsJLDt7AS2fcZLXc8DBnWGpE65Rn9hfwKPcSW51cy4ur9Wv",
  "key7": "4FnURj4UrGs5SNsLyHgKUAsPRFioP26QAQ9mWKiHCdB5dWAHRncS7AGFS1kXPPoNh5bSjEDs1ovykZgWfNbCmPz1",
  "key8": "4dcf8jWrGT6vSuST8DBG8WyHBCmChJDV1She4oCPEwK9ioT2Lm6EXz2xpYLF1RUH2irZzcJpRapBZNsPXuqNhM15",
  "key9": "qFDJSv3rd4AHWu23Bwb7jSwGRogLZ4CQL95oC1hYZT92n7HECLGXkkKcvYFpxenKJXFtyzdaR6cSWDdgmKMrmvz",
  "key10": "3oBsChFPHbNasvPVGqLku6zwcqnn4VdZ1CGD91gWMGMxQSz3oP1htkrQbv1xwPkd2Rmf1PLV4c3TH1dohU3deo9d",
  "key11": "41EeGQ1pBuWv9PySgqCunPqm6k98JHGQ6pancED1fdF6UkbpV2fvBPNy9FhVmEzGN7dZ5K4vRqT7aivBUwoJoAdh",
  "key12": "22wpiU8beD7mssjCngeEG3uHSm4iVypvMiRdvAqTGtqzKp2LEpAkWfdmV4tJLU7eeiVfvbTQHQ2eDEgnuiBj68V2",
  "key13": "3K8gzTiWWXjqNr2KLHYhc8E4v1MEZ7FUnLmsmy3ZkpToz5JS4UosZTHFRKHGaUDF5jceKzbJXRguV3TsuvwpayDt",
  "key14": "3DrifyNqNLys81Jtj6RZRuJ5b9nFgqPqnAfwwZJHZF4ZvSwYZsDK68K8xGfgkQa7zKMU4mgb8DjJvE6Pt9vR1tAa",
  "key15": "4g4FBeUKpz5XzZPanhuBmeFyxjGyXdF4CT3KkeKZ7ouVMrv8dGftJ4hrF2HNkZeqFDzjnGCRyGkoFPDEzitRhq34",
  "key16": "DooTkz89bTuoLsajK3uuWMEoHQsCuqhMGxGJzYZctT5Xku7Ytyvis1vimLC7KvE7UEZTMdFsdWxuAGaTYeYjEVP",
  "key17": "2owtdFAAnHQKZZ5A6e2fnJmSdtpwBnoKbwZUTHXh4qRm3vGcZRAv2vPcRtzhae533nnjmpPhHyPzAZE4GRW93sVx",
  "key18": "3DVxdzBodD7a5GQuMPoTupemUGvvYG89ZZXNPVsuygxtxcZgwbEk1ZpHy8yqpV5rM4zxjDTXLEiBhYvRvRdNtChG",
  "key19": "3VfsprWFJihKCA1sApjRuWR9U8qC84PWr3et54gDPVeGhZCe5jzt8KYn87VhNWzH5fUBMWYczksnJuUBhnQ6AAjK",
  "key20": "5iuJRzjTTPTrKzJXGgRUqJPeVUfkJeKhQbK5VvMAVV8zTsEVjHXmHQvW2TgfqNUoAbhu8nF3QoZxGzueLioUa37e",
  "key21": "4CXg7hUekAo5yEcSpxJP4W2qFoXkoGewugVWSA6ztogysBpyaBuumrAvQw8Hx6FficSNYJQfzW7mJ7fvNvbXe4hJ",
  "key22": "38NsSWKuHf6jKYytyiQsfEaUx8Hy74sir5XRcJJKDKYLpqroAWbuUWbbgUorhsQ82dUBSqbXREbLydehhct93bJ2",
  "key23": "2MH1xy5fNL7sTARr7UHWExbwETXwQ2rzkHDzHvf1viDB7prpdEXRuZFWf2Rj8X8s86NUfTsn2aMZjiqk3PfpRLUh",
  "key24": "G7TnHhpHayfAnkJM3Kz8fiGBD2QNGtusk1chak9TRxNH5jinbxiXAmyUpu7ztophTE9FExU1NFFPVHEKSxex2Ci",
  "key25": "jkK7XReAEPc3metfSji8JydA4XWsEzgMHyc3hrxUv4jAJQX2Qm4yhKntzbRMc2zPqPAeL2YUCBotyhc6ugoMyWU",
  "key26": "667gJcVjN9Zip16h2PmMaym7qAzk9c6Ab22CsnmpRGYmAGbarvndJvgYH4iJ8ML7LZUDUG3fgr8rD71V5ahkoV4J",
  "key27": "Bysotfqo5jmmVGXSyLgvbNp6HH3uwZZfLJ74xYGZ4RBxn5xVfWusTYoYZmzZGwCdbiVZGLp6Vpb1PqnUog5FVjf",
  "key28": "5fB6QWBXxnbvJa1Hvm1mv9v8XJ36rP2hXex16aA3bAmKVja7UXinufbLv5v2FeJ5ifBYAR73tvbLExcztQvrPXFv",
  "key29": "jDSdipPguA2rtpop1UCnYqX5kWUHNBDKNm74RyrvUGxibaFExrqQoqZHHEgpM1UhaD1Z8GnMzrfk94Vx6hzuFaq",
  "key30": "5FbUz77tyC8Am5zuRq8rY97822W78YHZ8VLVSBhnPceeU3ycoopEsPjbz8pAML5xkZ9v8SL9qV7P3BdSYjdnD7oB",
  "key31": "2xquY7Gz37sCDEjxixVw2RK4qaJm42PAKHFN6oNPF8GPMaUTPyc3RosuK3QBi6DewnZFiZtSGzYQ7EHRBeCU6XfV",
  "key32": "3HQ8vBraauwCUfTDiTrgDpAox9a7w4Qv6Wy9gRijHxMGwDy39Ls1eJ83kXzHWnQRMNrck8mk2Mc85FNBAD2QoZsQ",
  "key33": "29tALUJTWDk1KmdF1YnxRJrTWWtzviL6k1ivhfUv6XNtgqXXPDJCKcjb3rM2YBjnaLRHaFnHinBtnrMFun9HWLiM",
  "key34": "2bcSTsgB64Z73X2b6VnnGs2w5yRmXwzM25GPKffg3DHZWHfEyVA4YH9mUVMoAHq3ha4UhNtZkN1XSLt6xiiFfSqq",
  "key35": "wo6mo3GqMK6ZJpTq1RuiG9zUsaTPWcW6puWrpmXioB7GwEq9s5AZirzzUPCCJC13gHshypqY832VY3YALmb4Ny2",
  "key36": "4cBqJJrkdsrfMkASfaC8GUkN6yQj8ugWKUxXWmsFL3Bh92K7TKRusvWbGGYkckHfY2LqzXHgxqTHdoBZJ94VRGdC",
  "key37": "3kqNDAbwDJZ4e36NEbaVpZme7rLHUnYg5U5yJJLLEuCGjiAx4i93jZjWEdQmC4i5D2AXNMVEmFQhNvw1ndzJBHDY",
  "key38": "3czdaJiinpVnwBaCxjedm9pNmtWSLxnT1BG727iW6k9W4b79EUkcosiJpnZp9MKNLA7cQvs2mpS5ADdQdpg6T4i",
  "key39": "4RkFmYGCcVhMNf5iL7Y5GUYxEzvvAYKB4Cn2iREFNDhDZAEjTixcGF85VVQ8aWuUmnDLeB5ZWnGDkyWpXYow69ww",
  "key40": "4m7rw6xAAfMVAmNWH8UUv6fW8778JP8tK45UEmCzjp4fYWRVbdwMQVbZqABiojbQw6jMNPM9c6UaDEkpxe13bWdb",
  "key41": "3fxfaQstuf5WU2HDZdqpm5aaXKhWqGECG7syD7tXM3U8a494bnuUcJrrEWL2nboH7UaAUxdSZnVezAWh9XifhHXv",
  "key42": "3FDH1B1Jh9hB1iTpHoU7ZkoueLihxvcN8WeEBDrCHSJPPDxHmjXNhgKTPU45U1yCDjpJmY2sxtoF1VnJqxPtKFDZ",
  "key43": "G3oajPiiPthGRfX4dFGkjvCxAQK2KPCvHLx895YuukngnbdCf64tZUeC5Rz8F2CykcD7YNTqbYhzvnkmoQhrrsF",
  "key44": "31wMv8cJBPLpVwxx9aQvwjo8ntQ1bAbg9ecJifedVuXcHba6QByGjSQUmRGsjEZGsLkT9YmW4P8w5RLBrPFTpzc6",
  "key45": "NPry4KSiTYfnXy6JdkbFvPxvm8t4DJmxSKiatvoqRvuKfxzupgTweYVQtvaawHz3SGZyevGor5rf9StYrJEqGSM",
  "key46": "2PxHbcYspTrBKbsS8afBAbZ6PcH4ZYRoQraVpCWMfyK1F9pP7G1C6bLyjBEx9me4PQVSKDG2qeCM7Qf4NLESvPcS",
  "key47": "4w3RaJJDCbhfHaoGpLK5VuvfqQ5J2x1bKYP6qHX2LHYRw9iQ24xeowErquDVaZoExx5YXf7nfNXr75PNfyrMqSxN",
  "key48": "3zX6kZcbsvSLrBoMdBZnJNUURZeHiVoSHPgWQCTxH4N17egkXFkkQx2TiVLwGZ4ht7Fjc8AsVnonFgfZ1EugMP3X",
  "key49": "ihTVexgWMYztXzvTArDQmV4m9ZMvp92Y9afziVFTgAYn4cxf1UNCntVFEpsAaNEcSHcomUJsUPyczA9YZnXbV8f"
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
