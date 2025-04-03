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
    "rnukSp9c3SV8ULjTXNcZXBTg4S1Sy1KUTwc1W25oVXPyZrBCMmZyQM5ZxDqrsPh1SfZLULvcjLFqHBkCeGqBNwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Hu9mZNNJKHzQxdvNZQ8iePFcvojNDWJD68DcmSX2cUCEZNeDJgh4Z7QwRthZSyqwSr4VAXWC2Q6sKPrkdqbwcd",
  "key1": "ohz9CHABhjnaLi46b4ZYrKo5341xaaDiP9mNa4oet6JdDMwzrEJRGWiYUcXFXYWuawPvU9pXmPEhQVeVgKNZTiY",
  "key2": "zX12NSFf4mwyY8crDrWM8pV5HWCTLibCXFNRz3Gf7i1AZJ7kojhgPMh5vYR7zXQoU2pzsnNCf9oyZrz3P6PadyK",
  "key3": "mHSnFWK8RZMK63N9kXj6MReRCi3EXyKRFbEDyxgUeKjZCRmTR9vdwVgoGG4Ahn6HzY1iwQSpkSnNQJKFDadiQUC",
  "key4": "22EtiJ9DqBuPcZK9KfxY8T1F3iKsWuExiq6i9uywnjPPff2vyYT7tqvByr4PNx6dpnW2DDKXb5pUndeeMciPEDGD",
  "key5": "4ZkFBvYLW2uQVBNEZxvnQHoaFvd41nsLQ6Z7pge1jp8f4xWYtxVdHHwqHKPcbjTf3ZGDCUdU1tobd8yV6KwF85yy",
  "key6": "5MfePmcSSzwLzCnjRL6CwHmbsRWJeNQ5oTuYi8xNbTwhyZ9BA7SC97LPSYepccqtUHjm2CMpz11mHT22TtiaFLZY",
  "key7": "cUmDz3wHjnXedWUmNAFi8NyDgy2u5YG5zTCPyKXb116k1h8kUWEkKWqsoPpUGYbLZMjST6XZD5EHuxAnzfzHVCA",
  "key8": "3b8PAUDTho9Gxsckq412VeAYmv8ivV3bwUuXeZnaubwFDUo9pmkuqEZpsMsKe1awxRoTijHVCsvz9bsnqfvyfByT",
  "key9": "632W41nWsz8fgdcZ1u4rQhxmd2VrD4sDsqGAuYADxHHTADrD3XSs63rMNXKwqUqsXa3jLhMyf158RgcUdK1k6XDz",
  "key10": "WwwRTQBDfqFu1HYuJDxwPRgEyVwhBfTi5rmQY52KAD9iGDmVBGBJDZbKPHuWuQn7gfTotU85Gu7WhEU6qvmWhHc",
  "key11": "4pvQ6TiGmejVv6JvbMYyC8Q2Dr7YiRBFK6h9pVw6ix2iZrfgnC4xSfpXErn4vsZ2g9c48WPfHQki6mVF6W6oJsA4",
  "key12": "4nsHZqgoVyajYTNm2dstyNwi2kb1hsu8QyVBcJw1dT2zZ9rLvc4GA272cnWMhK8wr5k2vsP3id3VftKFrPThEjeo",
  "key13": "61NdxiTbfJ7VFPoKxb8XwmKawG5pif1zwjXgfu85jDirwBqL6BRxUcsSBF6Q4Cqtedb2Xhpeu7zmjvJXt4Ak2aDe",
  "key14": "3PodFbuyJJLxCxLC6BTCSvjTJFQJ1D6fPieqYFayNX7528aVtxsSiKiKQES37QgNyXc4VNtgk75NoD9RXtAVUdMv",
  "key15": "2fdFAg4ph7MXwaLTRQ5buoPqn5qSJcWTqxmKWRrxfZ2X2gbM3tZPgzLXJMAn8Qs951sQdsfvxYtNQuSAZckmar28",
  "key16": "2reHkhC77Kjw9qbebyHsvs4YN37b2NdnJwjT6Bbn9odBGzDBt7zZRvUZiM4vhVZDsmjnz6HKf99t2Bv6rhn2zkca",
  "key17": "3CuZjbL7qZQwU5Tsr9kSpwoZLSkQqABdKrQcMXqt3Bt7hw5GpwTX74rkH5PhC1NK19VSHwNDtdyXfvBBDi7QDcBm",
  "key18": "2Vewvuer9PbZVmaVESFGXAEVMcd5otqdtJeXYwKWEZHQPsfP7DkJ99qGp5AWCLLYvSZNWKqSc4RmEZFSAJp7xeqp",
  "key19": "2Fw9vstyUEWFPVufjyzhj7wRzL6FNJMo7vVkMeigJAjYAAKrLt3tmoWhdGG5hggBadrpDJUKTu7XEZguqnoNYyMH",
  "key20": "3z9w4PmSgn9e3S6bdWSJYR9pcNsoPY6fU53hx9HjhsjhRVLPiEYafKfXy1WVyntfr4QdHfXDeFJVA2zwVpthGynY",
  "key21": "4dnp1CzmfJvKYVC2w2u9utkNUFwzexWtH4k6BS1Ngyjgavp61ojYNEHM3yXqkaLLgAWN8kLSfPwM2Gjgq32r7MYB",
  "key22": "4LC1Bjz4MkDD7GfXasVEhVvYLCUAqRxomEfkXkEMuvRYEn3dDWuXbUDsVbiQgnS3KWTHuewJvL59JY65xgVkPQLF",
  "key23": "31L3iUdHh2UpaKhcpGjVWGjxk2CmHrSEYqQUyLc3E8cYLrSiaKFLWkGKnetGG56dezsd7nJ8yBS3pqVvbrHqUCMv",
  "key24": "2UAfQ8WM2SQXfWAmE4MHTrYy5Yu9rHWwJd9A1iPJnScRHGS28Dxw2YiuWj8YwKXfNXkEetXV5JzC4ykxCJP5FvRZ",
  "key25": "2ZESmUBJvjzsJFxEB6KDbGMUjcsKKhxV6VHTiSeR5tHNtTHH6cA5dVboRa9tGQjteDCX4xVYfghRjq7trmN2x8Ft",
  "key26": "2UhfK2AR5MuyWxEJo3T8aGZ5tepxhToN8NWXyjRceXy9vPfh1qfWNdEK76EpE4NhVk8xsC1noVPKyEJyweW33uxJ",
  "key27": "3rNVmuN8RuNRRYPS139u3QQneSEG4kwSYbm3b1EaMvBa7wiUeaAgRdm2THBfgG3DD2hLF3srxr39HKKTMWwo15cD",
  "key28": "5CTBZj6knfSW95kTFRnyaedUFu4uo3KLyTSf99vhZCAvoXEdACcrp5CZkiVxJdqdCkVq8RJRQB8cqgCXRJm34PyS",
  "key29": "4Ca81U2PLDfiuGciGiGXFHgR91d4KncbNqahxWi6JRc3D62Qo6PFU2sx4drxSCUTGQirk5abwTjmo7dkPaxgouo2",
  "key30": "5mGXvkgb46AEF1KRWyeCL8kXyrvKFfePTq5t4MARNBUkma1Hpe9Wn7uGfMbiJCPmMvbJsnGvKo1pzo12J2gYLcgn",
  "key31": "37gHca4aCNJfsVRBxymCArbhT1gVLj9gnjdmy6mcSL1XamactGmMnSqDHuhMwLRoqwgr2iy7ZutWsjkknfKkagc",
  "key32": "MDaVnyYS6hmYuBLfUUfBP95zktwE9mQmud6F8EBdPUHqLByBoAq4pd5ahiCfHQUnNxCjCvdC6z7ruYzB9RRw7WH",
  "key33": "4A8Pk1ho3nA3m7Jo3kUrgzqAyT3A8oNHPoPvN7T5N1txfQMwvntQLZ6is6qG268x9b2VCDCaEsfo5uy2ZbbAUifq",
  "key34": "3hAHQR4NNZ1ksx4G2CC1uMody8B6tRiPiTw8BGAgeKLmjqXGBEfdtLWjaijzud4ubhVV6GAdCvo1G6oCPuhoN6TL",
  "key35": "5R1RoRoVEG56JNuyxq1kfqQeLDmwvmz4gtfWxoZzJXnFq8pVKqMPEmxhQKySSQVzKue2C9r8BooLQ3cFfFtyPNMy",
  "key36": "AvPcej6EpSPhQ3vq4jC5GzyL9vhyr31SxxESDBrAhDz1rfzivaLU3fBba9dCHBKYaUmjqLs6rJBhk2iP5eUibad",
  "key37": "NFnaZCiw4ZB3muoo96cZnroQ5aLG7MCAY13zTj61Nd7T3byEGjV8ThoF7rmnmLFop38NwFDXFEPyrXjGv3B3v6j",
  "key38": "4WdhHUZBo7C7Tywjww3Cs5ribjWuwof1MdwRJWXDaFaym7GoCbbg9XkCeHniTCVPbQS1FX4kQAzQpZXSypEnUwAp",
  "key39": "2KVvFLFjiM4RHyHYn7ZMiespaLFLiMnJ1KfiNxveMwxxbaKPP2GaUTnzxW5ScNnNdiwTErd9AEzebAD8GkQXzyxR",
  "key40": "4nza35HFCGtJ1bPppmjcF3AqndE6T6GbuokRLCFuepfoifJVtrtDgqczv22nsBSVbLYsu7MN42aGr6G1Qz5TAMLB",
  "key41": "4Fco7x6ZXbSMrtUuUSWMsYtGZ8DFeoMik7E9cGdCDcJJQLqDLnP6SrB226XqtafRACFYVFWXWZqqUQfje1rVXsjt",
  "key42": "5F9oUHDrMWCKSSLz9fb5C5Hx1pSs6LDUc2TB6Vss4usUkNndFUizmrL8HNwAnw8qK8py557phnB4yqpsTNEHCH15",
  "key43": "2EJYfe1T2AB1PMhfpJj56x93o53uqTvgNjT5ePvQM45esRKejyBpNrgGUKL3kFcfo6FmeFoAeeVtnhanwKPWuqHt",
  "key44": "67W8tpafgbJnddjPJk4iF62w4bUNj8uSdZ7MZQdnw6U9n1Ceh68wxhqZFPCjexcVKDzsyGh58MXgHTz4MNg6PEoU",
  "key45": "3s8eXJKAvX1SwcDjhW6UnBvL4yg27zs6mBiTx8TDgmqD8zVLASc1qisN6jKs5AuztgY5JQbvvq3LinRZe5YmZW1M",
  "key46": "2PLm8WzSkywsAuBnbanFwwHBYuKS3C9bvPo3M3tT7VUExKCnZ8e5wgFiwkHSxi5RoMz4avfXeBEq3tPLJMz8vhS7"
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
