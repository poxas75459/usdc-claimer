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
    "4MnE6oEmqHnSaVWzp5XTc1DeJLsLQ8Z7Cto6ZAhdiDaWWKtoPxLHGrK7JJa9aD5X5ctTb842xbngJhEeDADnkyyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H7gwZ8t1RaEQG485L88QoteCobA8GW55mX1bdoCFnYUc5coTgSnaESBoMZyYJZe8LtULJGsaLmPPqyzj35WfY6M",
  "key1": "5Vn84HDH1TNfVdAjvh41JVkmNMjMafySXbJ2ZAYZSJxupVBqb5HaNzk7cpnzGnfiToT143usPdbLKnSaRSSKvofZ",
  "key2": "49isamftTgzVmtkNBry4CzREtMr129UyN4wErahiwt6UZo3pcj32UtrrvBcJTZ9Gw9fckuGQ7kTqzBJ6PunuvuvD",
  "key3": "4ufF86ia3V8w98tiVui1SAVN81YsMB9cEtkB4ViYgdAPpTG8PW21EnySpJoGzHed6MzLWN71idUnkPAACSoSirFM",
  "key4": "4UrJNAMjnMNVbcZ72VWPfmdYRbrSFhVNAcS5SGsMcBwgARZYNdPNLJ5vsLLuDDyFSaxiku65mi1Eoe9J5GCaExHf",
  "key5": "47jPcbhpCogMhPYKR7CVJNyCQ5dPXeos1dH9qCkEjvJhaAKvYks9aMHWFU3Paazfh8oD7AMd7EMx2SoTFt9akrmz",
  "key6": "2TuhuLs1s8rhXAeVqw5xND3yKyWvcmxAAqonscd2GoCatf1LNcHTT8nw58iMpSJDQ4C45VfHhyAzxYoS3of6Tiuz",
  "key7": "4NKm5x94dLSiBmCfAAmTfLa9QuRmvi9efTMvpvowUMSSPL8GZwphKRyZRcWWsSgwnya52t9Qo3nx9ZmJgFRYopSt",
  "key8": "2vJwEkeynCPo7L28zdR4M5RiqwrcGQpf5JZ9VV4A7zfKzGjurEPmVMwv5ByMdqYuQ38bjk6hYsxPEEquxQsykUwo",
  "key9": "5pGQ1iv4BduRVqizcbgGyPea8XY79wphYCwgc7q5La6pK6zJ2nG2y4KMDTG3L2TduBv2zpbF6r6Tu4BLR2NASqP3",
  "key10": "55o5jnx8VGfh6p1v6d5FYzVSbBV8GSkvUibrw7TwCdJvRoKbPVUpLNAAuudL34e6EyNaeT5PRPXW4NvKfvCKR6nM",
  "key11": "2LveE2Kwra46JB2JPytc6CdRzSSE7oBxCWnoqi2c3rjRZWMET7wB9HfiToXa1oPi1uZ9CjMJA89gVzFQ7FmTvVjy",
  "key12": "2GbM1YcTiH9MArhhL7jkWrb7PTvwcC2unNgcUYazSgZn7uh24oS5dakZBNFS7Mj5ihcfA1UHnoKcsQgK2n7rEhBZ",
  "key13": "SwSYUjH4MEoLh7xcsLAFXbfPkdjxBToucDt8S2SotahvknUu2HgU6Gc7B3c2SdoXQhGkJp8zYmxcXLvZ7cBWUEw",
  "key14": "3o5Lru1CywYYnsWPByZ28cmZ3HMqYEwGjDNs3UgyFWCzSD9JfuJrwVBytgRJYKK3PbMpQxpGcTG674HsUxE5CBwP",
  "key15": "5TjR813BvNABxRDsxau9JCvt5CWuyHP43yn628iPXBro8PSJTeuDGffPvPa8vj4U64DDmK6LyDU65nN8WWKdnAie",
  "key16": "3X2vEKu2Jx7KP94yk1nHkzCLzuPUKYezo4vnBewe4zy68Q1QsYJrxPERKGPb1iDSFoPXq48qvYAdmzswiMq6DHiz",
  "key17": "KGvdCGPNQBRXyGGkJYwqJs6pvJkriHvVCHzfQikszaV5bCHa8WtGT7NsEvpWxSHTEqopMRx71Hc1UrWVek1UtQP",
  "key18": "4XhS3xTvQfgvvqJmfv4RsBUZpemNR7BxxEgyvAt8q9UhUFz9YxrreunGzXHG7L9hVtysiaHkaUmLGSbWiKXAbq8E",
  "key19": "3ZMQ7eevdUBSJpgGbB3bnt3JpCdQMEoCZem3T8LR3v14vV7C9iJkdjREjw7h9sN6TEgGqHBNZ16KSY7yjMhdCQVY",
  "key20": "EbdfaDYdJJ48s7LyLfoH8GYxUwkoS3n1vfVseocefMtkh9fLnasMv7sjxrLKYyUL4VxNx84zAYbTw33Uqy2581S",
  "key21": "Qv4n3yxf4QvrVfxiiHE1xzBbHyyQtLryqoK6D8FQbFRdFKa5kVeFcJd9QtM5dqgvhvecKfECKfewbiu4qD9W7cQ",
  "key22": "5CkjJ4ngcAieThWASrTmGebxxuep9PqvyTdpExdbXD1JUaLZt3tTKRpqccckSeZbkad8JbNbLvSXZqHJMCpVz2z7",
  "key23": "4KUkcHEWCwBN8dUBCaSomd8ks7ChJkkpHAg6D3U2BiEMVMx3fFsLTHf4q2gcv4j2Bcvi5sj6mxQ5ptbMMtdjy5ic",
  "key24": "5ujeKMW5P6zPU2DNJ6N85HBz7xB6MbWSokJu6fRBJpTKmQwGWQFhnZ8A1LMhhAaCMLaHFHhxn1GsJXtbi69Lzi4d",
  "key25": "5rnTuCGXFSq9CVx8LfkCYdR4Hf7hSrtLJQbNCCeTMNf3Q5UH8ReumQ3Uj2wvcwsEjagR5PRg7e72EUMvMJSo1vNc",
  "key26": "2fwL6JY6suTZHxPAYx4gPVy3mnPqML2WVSTLyHQsb5px4p3woAvGNWWaH2Kxuo4HdxLM36P38TB3W1iuDCgNPLHN",
  "key27": "8oFsy1KarbRRsFvjw9CXnwKfTKeWuLpSy9yCzrrHAmV9zQFfmDe8v2ZfKHLnEZVSiJkAif6eSAe4ax2kBw5JPrD",
  "key28": "tRMiEZawA84CTLDx172ryVb3RbAXcWW4NTwBeEddtGCDqRejRRUYz7rjZmQ1yaDvqgrFrKjzL6PvkSm8oEx1Hj8",
  "key29": "4GFRSPpmVN1nbLbRwHXphvgvukXqGEeyvfmVieRmN7b2ANptZxM6AXib8rgqBXDAKeVhxdJGrY7ovcm7KpfnHR3U",
  "key30": "PJBx1mJwZDAsLWuTxQoXQVjQnuBFcQCbL1PH7xY6XWCrVBrfA96kskdM8dyTTx6HwP4wz3opHhQJGXFuoP5ewZ1",
  "key31": "2C7gV396pYx5pRJsEURTLK8h7b1T9NWsT76LFuvvANvoT12sDrfHAWy5EKcMtxN5K1sEFKkaHbPimBuKsKiasqWD",
  "key32": "SARPJwVwVmRDpHdxrt4PKMVAk4hW83xqEFJmnEDK8wMNwB3X3sgeCzHUh6nWM8Pqu38zx48GzgU24w2KjGciXuk",
  "key33": "3dPs2jpgBCa6N3ErQ8f26xKizxU2EcMzgMMzMWKe62p6Ncz1PMbv6QHQwZWGsUH7BeJyRPWFvNf8szxfHtZ2SczH",
  "key34": "2JeoyvUMYiEhnrqWpAWL1EmECKwBCZo21b6LVyU8btr6K9G2Sqs2PAqi9GaRgUGvxm8qP89JvDJxPz51vXScaJxH",
  "key35": "41fbKyZkR4d1NZiVSFzjHtkHMvNXND9K7hXpR5FJqq1aDGyosAws7tkJeg5FwSSUvC7yn9rw4ApJM7EaBiV1UAB",
  "key36": "4SWoGz3EMs6qmvBDXgTuU11XEcH5GynZSJBUmG6KDB4ve76SDGXhWkTqBGGHX2goNnjFn89N8SuCtNZeosfJeZvr",
  "key37": "3zVwXkzhJfzB8n4rHZ5A2ouMM6ZkBUTPGe6JJtan4k9QGzd2CnXBUBzJk3Di7z5T5S6L3MUsMuWURbvGaQM1XvPX",
  "key38": "3gzF5EQQuLQZzGK7ErCd1AxhCSUHM2Lkk9hvTzzXzKqmKCu7stk5nJjfK3B3z34ZhnbY4t3UcdK4TCiRs53VKjAG",
  "key39": "4WK2WVMRdfCJ3nzTFp9h88dbc2zKNM4noU8XdFpGac1h1dn7S2EgbhNFLu1g1YdpMTP1QnP94VkEHCBqMWtGtY2c",
  "key40": "3eLgfwoh9CRTn7cBosYbj6PoDv3Mcmo9qv7cYF2UfMFbqX1HLfhAo5bPtUKF5wHHtFX96betrF3TsDuCLarbmbeH"
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
