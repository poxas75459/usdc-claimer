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
    "28qjetPr4HyRt1c6pY8G9trMnnoceBsvXK59S6TfNdbh6EC9U1rdZ5e6vumGav1XqZYfL1cbvnt1gywj5gVA82Hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iaErZppyW1Mi82apQtCRT8FwoMccUTRQkSqzVh6c7fVu6LSScgHUh8WrB3RstErtNKsuKiprN2qjQysdXidUMnt",
  "key1": "5KKF7FmwzeJxv1n2DMWPzAUcn8hzJAihDT49q7Nf2PVuVoRvRXU7qHnmvFFWg3dz42V2G5m8dRjYH5NJt27yj4SP",
  "key2": "2arAygX28ZwqZRJGsFk6gSGHtPCu7WEzbVPFKhGo8uqpWY8WTmeiWaK2hraYNYKbYExFWCkN4JwSLkhsGg3RmoxE",
  "key3": "4g3j2AaoC2p6WQzsYGThEurewwHj4zQVEDjcpT2c9PrCLp2QzieL77ZTbEZUQptoDgdJpyPeZR4nQgNAZgBeEZ4Q",
  "key4": "48eeUNt9AJohfMnH9n4FrNUiBXAf73uQJkjUAr6rUw6gwcwvqa4reuvnjCxsFiHbhLhTXZuHPc2hEY8CLPxcxvNV",
  "key5": "2VM9MeQuM2Tn6WpNNr14h6Q6F5S477N2oRWSj3rkhfkAjG9qfv92FdpfgisLCVqoufy9YZQnxmEfd76n8qGPn4tQ",
  "key6": "d8fJtJdn36kq8kEFtZhZKBH3xJRotcFjgacMdTntNJs3omJf41E8o6uhkCwe7MDLaFPqz7rFzo6gMx9bpCbpPqC",
  "key7": "5nGQfXzcsQPNS9mvSWu1dBHQnNo97xjxUBDweBsedjNmHYfVeqMuvwAo8uMZycad8ARmodBBtc1RA2nro2S6fZsi",
  "key8": "4N6kQN4ovAcBCanGCizr9uTUNipWJHs3jkysGRoHjAG4M9F1qJAbtJsATNnWcseVrPprzvgJwRzD2U8ny1PmEff7",
  "key9": "5Q9hf6ixiMmUjo69cPGq61TG6Cz8x5nV34WwKeajndunmwNff1WnQbWo8Ss1SPd1rD7oKgc22bBsXpSrCNUXHdYr",
  "key10": "td2uzTHmEgDcmBpZ3HrHLwBMfpFSHJWGCknTEXpKGgVsguayNtKopKjuaiPLEafjBRjkBVri1pejFYhTUBAZc7d",
  "key11": "4DZKFCYRRbZYS7h7uY6K1vrgZ2cU86w8aZj5rg7KBv5KfAiX2F1UWBdrruPto8p8buMd6RkSzvgdfFg2QQgs7McB",
  "key12": "4nhgZ1Z3zoyDfiJbgXv54TVytRJXQMJ8Fo53gBqT4Mc63zq5perAu4DMcwKm6fqWtjTrREsB8Q3kvVJgVUZ8Teyc",
  "key13": "5UhGQF9J3cVRVLqc6Lr6cnT5Fqoj8Th5uqJW7CNTkXmo2jCQCDq3VgBQeMAgrSftLKiW5icFJ5Kb7D7L4iQuTwvp",
  "key14": "2eiGTKcdWAZza4KRWyB1ZixRFmJMxnfhvEbq8ntesHW3zViMebLFuJUsh2AP4MSJkbcQtCfKUKxMeM83eS34jXi2",
  "key15": "2BFL12dfSkaiGTohe2xsNGwUa8sY1y5FqgaWwb9ndrJc3Bsm1frFkMyoneAQn7t2KLJzwencKHvZhY73miL5ZBre",
  "key16": "5XDuP45GZvr4w3j2VRG8FcpA33H6uJ7bq1sdx84LknJ3qnJzKGfYSH3TuVuNZvwy4xmzPTzz3a6zLDdvgiSXoDmX",
  "key17": "9btju79ZJpGCCsuT6GHTL7nPGjHoyRgcWa18wiTGPibcA8vwcxTVSMk921SJbZdUUiDDQPZ39Nq1cozxd6WoSuY",
  "key18": "4qWaokV9Mt17RMMjhVfcfjuKouUKWm2Uuh9D5KxeF8mXDTghrZNFWTztHyG9M9oBp1MJkGADb5hRgKUuJYPksYad",
  "key19": "4YNdtJMkGheYnZHshmA6vG3c1JLUhjXVZ9qLwsnKhkmHmnfn6p3f5VuHru9j7gzu48ZM1ozxynLSVp2Kvex58qgw",
  "key20": "5hsFBQEvopoZjFBTTJ6DS8ggpeJtpuimHiH8yyyXuDRSCjNDvqkk3uLGXWjLx6hvuTKzTmHFSpMcQ7HN4RNy11X9",
  "key21": "38V7Gw47JbnZ91oSxtY6k8dc6MZB5Z9zK3fHB1YXwiP9L4Wo2yMCow57oXMVza2g1AC6YWLgXAX4dkRMjx1d988r",
  "key22": "2sYW3JJ8UGiT6pyzZHLbwDzDim6hY6JoqZ7nkCBKc59B2L4ovE4NqLgsVTiEc91F8iyNQkrLNc179EHxmUkr53qq",
  "key23": "fjqVWH44eM8KNvzwxVkQJT1u5EmTAETnoE2oYZPyJUnrQVpM7iZV8kMA46UUKER4N3cRK8isVi4P4VTNdRceVoH",
  "key24": "2z7Sc4qzgozDRJJZQFVcbySf4nvrkKGE1nCyv7i7eVWqxZJUvVnRduFTvyAB1mJN1KWn7uC3DNtuqyTFWBXb5fkT",
  "key25": "35KyuBSqF8AmKKDD71jx5XM7gk3XSgSAN8XEoyJkuTfr49St6sBLFYfd3Vm6mTFsTTdbfWHjrkt8yKpSa6q88ZsF",
  "key26": "2DyHg1WiE8TRFPgZTW7fqjm6FqdPYXY9JVTowTyByMj9JiKhjAPTuEFYAzEwrVJCe8ZYw8nDB5FbuKHDGvPRXWU5",
  "key27": "2RfF6ewipMRuCZXpTWYYmZdkPCNnn1zTt42PqkpgnaWNxg9NWBDXRwHVC6Z3zxWeD52YHTgeBdKEEBtvoTv9gg34",
  "key28": "2WZH6HMbKjL6u4Hg8F3J3Rzs4Cyjf2iq2gRG1xvwSLZECQoZ1FzFT7vUhW991yetRCJzJLcQkfjpognnmQZszpTU",
  "key29": "5FaLs67o4U98Fti2DNxR3UAMw1FaE7CizbtZryNKPYZHaPb44HCfLc8a3e1oAVkLaf2YctLmUVfdZW97jL4F5HYJ",
  "key30": "3WcTHRdTkkD1dyAZd74yc3xmXk5sXR4jwDLgZX66Hp139WXXwW1AdzZTpXZtMHn8kinFMaR9ZhY2WypB9j3HBdNX",
  "key31": "5B3U1HP8yJZTBPNm3KD32WqayYsHJdsEqdayw5zuPWpkE9RxV4vHV8rSiAyCiUCzieSXTcwQ2VAM6ibNcqBpHfmj",
  "key32": "4SmP2AVfmLs2KmGfjRjcPw8uU7m4mWcwPTuEDnFTijHXL1EUkJSATYEeVP2SCw8d2ciyygxXuse6Drukf7qJJ5gA",
  "key33": "4mT8HEauK3LkvHyR8neKDHYqeh97iSxAGcgCjyH8KeTkMf2NreoxtUdXv7yJWWTw9V6aJa171ycVCrif9MSFHDLD",
  "key34": "2omxra9SSiuMHaRdJZLhLGufmHpB1PMjXgC9jHqCoCAuWbif5zMqfriX7C7VjtFn2iwCe7fCKbG7NgoPd3Z44N86",
  "key35": "4WmHuNCqQrxC1Zr2ETSYqbxpw4aUy4NRnCrM437uvCUH9xBw1vsBsEaZCtBtcv5USm3xXnwkVRugbUgup9BrTaiz",
  "key36": "32tMXZKsny5RBE6ahFYJ3Qqn4M9hGnjNG8qCvZ4AEjYhAvv2fqgZHRCnfH4jfcwj8Fgw5fDUZxhVkYSqKpcpLb8e",
  "key37": "2g7Pf7g7Ey1DyoA3bcakRUxZhau5UDwWvbkzU9XD84xedujGZB7XNZGF8zyKww8mG75vd6hLAFuRtf8nsmdryJDG",
  "key38": "5nfN5bk39jr7K5VjWR7DYScJK6pYYcsu75Sz4Jm9Mz3q7swgNQaTNgjKvrSAcgwb8ZTXx5gRByEd57yJhQ2diQmi",
  "key39": "3zfU3Bd2yCvEyAaGMLYmSmbmmxqMrYVc6xC52sxanLZSyP3MgS7gn2GyGTwbJVW7eqbn5ie6Vvxojyjcwdjnw2Hs",
  "key40": "3yNmNP8aVeeCMcjznJqKZopL5JiuBLVVyGxT4Hrd2J9Ngs6CTSXfeQ6Z2cCpQZSDcARF39KwsqdC6DeEJP2Hzy6p",
  "key41": "dETUizXzsnp9YkUw2aFHXan5f8cKASPYgzXDxX8KWqRdpRDLLQCdHyEdT6iNP1b1YKqczX2cqt1Qgp7WUhzxB4P",
  "key42": "a4sTBX9viYxFkrXy2SigXoPV2BjX9XSwLPPSMmFM3uMj9Qx6hyBJUj8ysXDqkvBEgxMUu2MSc3GJqLHEPBR81Uf",
  "key43": "3W8SnFVQyP2GSesErg3PtJTpXQokws85vwA2kyfDjp1AB1NQ8cLCvmYVmjAJCqgBH6NXXkhASNi1tR3wQAEtXLB8",
  "key44": "4kbUBH3pAPbZVXHJjumarGtEvBMPdufWwWwGPjeUptdD2UNMBZkrupMbegZYGncdDS1MZwyatHq8EkW78CPmvkDv",
  "key45": "S4ugDYwnNkJDEfD2jYCDRqbW6KoYtAADkquFt7kihdtoUbgmH6ZQ5jDNtcogKHtFxDu4zN2iajrfRWgw3kTLk5S",
  "key46": "ZCBAfb7X1ktZgkT1ZKqk6AToZ7RyLhWKQV8Lp9LwyVA5kDzyMhuYJBPViypWbt84rez8FHXhws68oGCsn1SsNaT"
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
