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
    "3Gnh8GdjFuWYabkGhxeF6nqoBPeFQg9uJccW2SLZx9dh6PwyDmCTbMbdbDKkFiBGx1w6titr1ZKQeXqGtJrHn3Q5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RvczJqfz4cs6mkTB5KESKuLz9u1E9Dvhp8omgq6e6D5Hc8jBdjbk4LHvCctXg3igcpLt9j2DtZoP18Zcz1jNjqJ",
  "key1": "ubE1FuuHi8Qpi8pZsQyGx916JNd8YPtTCKvZCmUHHpK7EgY1KX84mxC5176v9AWh25EKGXRk8ApyEL4nXSy5biF",
  "key2": "59fz1NRnoRf9Jx19Ztt9XWAdNcXWE7fC7fwTLHaNHyHR31txzyzdZb6XBvmkWThg1EoYGzzEJn6Ckz46nwdPEV1F",
  "key3": "3j1A5aiyF6cQHqVgfNoTvf7CtaqJcLiCxLywsm7NPgBVWzaL9XsoBrm8fohkzGXAepd91KfAY1NYZwC8kxvADKNY",
  "key4": "3zMxo2RqPVWzHfG64o1HZj47MgYbwfuzrsRg3nAwpL8W3Zex1mQLUsiHYh2AxuDBcdxNk899ykrZXFweDHa7jQbZ",
  "key5": "4jEhKihzQ8K1ofaKqsg6G7ZG7BnbxWowxQULQvGADKnkX8AY8ogUZ2Bqiq1Cug2AGR692ogLQPUAqGYfdbLLr8uY",
  "key6": "4YrFzKNzzH2545BeCHC53nEGtnscSYuKkdvVV2DuzrPqh7DFgxGLPSd1cr9hS8rQspAdEGfrkC6u7aSYDHTyLHyC",
  "key7": "5onGL1cLjNohym8fVnRuKnoAndHCArhza5ZwNDazwG28dNRdr7T2WRecuTsLuwgtcwJNyyDcSF5axDTGcNrW17XF",
  "key8": "2pW2MAzhgeBcE7YfKx2fYS6zQbwCZdpG1svidSZrV2LH5RFpcTG8Gzp2LKd3ns1tY2wwgWDUm3XANYbeuyQz2coD",
  "key9": "eXjbbiWd1UpYdRscFGV5NhZKDtU7XuWf4eP44ZEAkubcJHXCfAxzzHAEJqhq3HmkZB3HoB1iNja4nMXT1cq82U7",
  "key10": "5w6sThCJv8TfeYg6fWojuNdw5Ji8Avrycm49Mz31hZJPnALwfgqb2ZJdtjFVHD4cWNyJmVc1rwMDNzCr9cMmYVWd",
  "key11": "eG1KsrRcz3558paWWbxtfQHGtL87Wq9cSKRTZBHZkxDem54niea9ZddfwxvwGdJ1X9XyU5wge4kwT4XTq38Niou",
  "key12": "vB3NfY9zFmLxJioq5EMNkA9xfApbQSV6mDtdKNMqkMqwNg5yZ3mhtGPGX22qL7nb4kzS3j3ZRAwbgwd8JfzKzcr",
  "key13": "2bmxQKSAMKSTE7ZiNgpdq61nQYFaKAuGw9b4QRVX4tCUJGY7mdgUVTu63MXkhWLe94EshNXw9SSnnFvktn2KwyXn",
  "key14": "2SBdmMeNVn57k1GTjnhrqFBWnmw9icjCB9DekJza9vG5aK1ukf28hhUuyuWnZ6WGYoR8MBj2dhheg2LoY1yGTbSX",
  "key15": "5jCLz15sA7Mk7fQsN47oZU53qA7AUYhHPkV1W2Fk1KmZykkvm55iFRPz6YXAq3bHh9jZvFvD57ujjM6hsnVkeAEJ",
  "key16": "NxFVEvapjZDqZiJe8dFBekwXSsipaUsBZBH6eDGyqKstzLye3bCYChwDydD3C1qdJBmWkgTpzaKoKvB3TrESt2P",
  "key17": "4mSoLzyqZBSVmtietSGXVuWzfA4JG2r4rPntkWVgihLNnRhRTba8U1me7nwjwPnjCoN5V9iSyzELABznp6dbYzSN",
  "key18": "45P8M7uKsiznV174SbPkpbzjn2kGMMa7kUzxeMo59y77ni6WPXSnYHxCyYvK9hSvwNHsjP1vzdVbzptKLMWwqpTJ",
  "key19": "2iXg8U7yMViQuKQxCtXz2qwdLWgZybLqnyrLpJ8csLLqJwEhnTSAQEaDR6v7piC4Mstrz2UWS7F1vNYAAuZNFLa1",
  "key20": "41TRwgzvsmzyXmPVDxkzvFqWbpM16WnLAw2r3UvjgS2gYnRHGUW6KknWnUCHsjPcU2qdRARN1F7MJbkYp6yPMjzT",
  "key21": "4ct4ZihB9qRjgVbTBqsCHZRohhSZx3wJgf519SDvfXT7dc6mCA4Zynm36wJ4uWL6yLxTpHyTi9ExpPSromL2uYr6",
  "key22": "4Zc8ZT8toBTuCSMswrQCzq1rNchXCaLRAwURJSzXWxPzHXHfZtg8UHgBdzwwNyVoHKDg5Ww1RkG2r7Br8SnLghMm",
  "key23": "542n6WxZEKr4t1dVi1Z55e7Dz6ptNo1dxpRyE8VmK3yYKNYY9pHEJNDnqQfHZCkgenzEBVTa7jYxZpeUdwwv3rbZ",
  "key24": "26wyVEPhkpsQt7A9kYThzve2A9NvAbcEXvs89gCyrQTALD2TUtR2sas6w48GgkZoWRHwinVtj7z2AFeAmPt5wb6K",
  "key25": "HsykuyYyzFPPS4uuNjWDmajiabPmCxEMR2AypbFuWxB6cEnadcjNBzEs3F8BJyR3nVLRe3v5Yf6hjaFsgDuVMwy",
  "key26": "4xWu4E2a5PxDo64nbmtif9LD9mdfZY3hQHi77WoiHp6AEzhMXkmS2xwNUfrxA9A8FdwvovC3L2GpQpztZYZRf1h8",
  "key27": "s6p4RsajbA447hdGZrTngTbPsyNciGXomtkzCvDS6Z7cEFofox4gq1RAhThRyo4d8oo7yDm15p6PwPyio8yPYKt",
  "key28": "3boFXXd2g4aERdDELT5MBBgZ68T2QadcNiNutJ2wM3HnKQ4iNypSr3Knq72pDrhhp9ozN7WhWXkzMNbRjPEApTqn",
  "key29": "sxwpkqjpNtuBbi2fbynBd4DibJwYSsm9LSiNYFtG1vACCZj8GjyBfB7Knb6iDPumrprBYXEmYShg4aPd5NJMnWN",
  "key30": "639PhBBmqjKBCEFdaCopvygCx6ai28Ph8rwVsBLJVCVmk2UHBc5m1nnQSgYiTCV5HqYNUTqjTcGuese3f9Q25wV5",
  "key31": "JArz4FkAACiQrndoKVEbPbQVw5stgpKMr59oGfi3hrtMtMyp71gJESifZ7G1QqWPUuWknzUt4LhNb2nAEPnZc8m",
  "key32": "WEpp4aA6YLw64PSgME72FVmPih93cFqCH6sqYuQSKH7MvvynKKtXdAM5NoVRENARUs1YHhgxstZrWSq8aBFXtFk",
  "key33": "4ZdQnjVKKwoBqfHudRBacKvwAS3NYpZDkoSt1syaFwf9Js9PqM4gZFwogCDz2iEpS5RC3AoxMf8m7buCXgNUjPAG",
  "key34": "3ZBeVcuwRhdCXwxSyj8RJg1niE2n8C3yjJp65YX3F9hEbkBtenagfoU9fvbEXzg3z9bqLu11qXhZ9ofZNNhpd7ZH",
  "key35": "4dFe2S6LpRc1QYRtf4QAi8QJPcKHFsHBADRLqv1yJh8TfWFQWuYFPcnTLLcLyGstfZ29rMqmsTRtFJigGsBFjrRi",
  "key36": "2ekDfBaxSsx7ryMC8bNhA9c7HgiYH8MTEhVHLUTM8YtBjrkqchN8NMhvigZYPYZ9VVafZzi6BXWVEFZqvp6csPEM",
  "key37": "429rHEfqqSsYUtJQsAdRbwXpZVJWkx4y4iDAPc6ED7D1Rpfu5oVTRvzfvVBN24R4zvVPQgQjh5fSNqnXJZ48EJqp",
  "key38": "4GowrZkbM5vgiQTLrA6vrdD3UP6UnXSWj8o8P2LEsb5umMiDAaWfqRMF2ihe6i1N19oSC19TyjoEqzZQWKA6H6Zk",
  "key39": "FdUhLMtFLXXhRWg5GHbdmS8F2Kj8mbkTaaCcbcMgZqjNHVVudU8cA5wqZ2ViUMdG58LqnDL1wqXSDzT62Q9vFpx",
  "key40": "4cee9Z7AQMebKGatbJgE985rPssjnKP11N97EPmkBesBynSP17a8agd19v9JXktmoBN21gHTScLYHYYUknGMZ1yx",
  "key41": "33zkhS3bMoKdVPMsd4c1vQcwUg2fAeNeKiyxBXHSt6zi3BEPP1dqxvR1aXKveKzDX2nXgeonUJfCUDchmqJ87rpr",
  "key42": "3YT2ndKspGeLFtyeCroDPMXGj1ijamu7hFjqbMeHJpXXc3uVZLpXbeXmNsvZLaJvHg7EMrEUw3eHM8nkgyvVvjBY",
  "key43": "5p1qf5r5eJLk1c6ZLufxXCSgvFYXMRibTwrWzaXpE5zkCt7GpRf2KyJZ8WcS6ACfCTmdZ7YztjSABDq7cMCBa4yL",
  "key44": "5oDC7nR5RFjJ4CxpPXJ8MuCmS3XbFCyqKJwSeQ6BQxZWAHwrZvebN4mjxVarupezPrFAP2FacYmJyREioc339coT",
  "key45": "2GT83vn2CxdpCb4ZszY3NPvj2HrvZZph6nC4xhjfqNGsHYBUuPMLwbjQ26csVjkSg7FzYPjNfer5jsA4eAEk3BFR",
  "key46": "2iChgkuParGSGEhghACFwwCSdMYwNC95TQU9q68GUoa2xEZ18eEYejT6FoziDzRRJzLqp3UAj3cW8abMU39V4ST",
  "key47": "soab4qDfCsDwpyKNbFGEoWR4tyPbaPquSv5zjMFu8fcEZiBuwGcLoutiVq6apVo1oKDHi2gufJZ5Wf2dNSV3k8R"
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
