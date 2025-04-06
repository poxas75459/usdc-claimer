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
    "2vFzq1Yh2H7Sg9Hkt5NsPiE4uQqeGNUvpqGPPbhY3HnteP87tBJD7618WwjjEQtDsu1daUPVW7nFDRbcvChSe4o1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gzhvM7Sey5hPCjDVb8fQEXb3mKo6U6aHwAsuKWhcwTR4QTuUaee7WVNWa3KVjZic9xaJ93jnp99LLxYvjbroGtx",
  "key1": "2NZBZ6RW1utejxjwWjuVmcgKNQCvD3cqcxezuhTJrjpm8kw6Rt7Ht76daoTdnjsGdpb7jHd7QHvpMLGENWqZTUMb",
  "key2": "5oUYD5jTBdxM7LKm5yhmpenPwhnvjWfFeUUEjM2oNoYuMmT42iSov6YM9UDuDnqcPfUpsqy4RCLMYjVoDhLkoVf5",
  "key3": "2PmXXPaXHm9MgaukkHHtmWnCTrhAtf7DrFeSrFx9Y9LHwNesW3zJbnjhZXcn8jS3P7YTu7cBsaVgK6kVMFmfr1RP",
  "key4": "44VdfUeXokiBfPXU9fgWYZdMNuu2gbGFov2ffAHHTfUsynLdnjSXTWQXctcY9i4EYJYPNmm3Cg4hLj7RnZfQEr8d",
  "key5": "5WVcz4Pjs5JqhwvzUavjkqeUVn7kSyKbYWYqchydTFUXNHEwbC3vtboYbAPaB4jF7eXegGfNN4JNvCRXXcp9YjbC",
  "key6": "3pybnPgbgCYMmcFeJGwAttL3oX72hU2gX5CT2JJPr6gD1cHuHHhcPSFF8yqDq2BV1mWyMdk53vYKRcjnEY74CbwU",
  "key7": "4LF51UV2BSY7sCzBM48oQTcGFVd7pHQ6aGGK284PprjPQkDUu5pSzKu2GBiNy8PJq6NVqWFcGWx4wRYak2sMscTC",
  "key8": "64Fjab9mgWkUicWVF2oCb1AhASkRfayTAWkrsqR8LFpWwPo4tyEFCx7iP83tgdYJZjwAENnHMzPTAiGxynnJepQE",
  "key9": "kBPe3zN278oF1M5qBP5GsoYXf7LdViwnZP3KnvQqCYQinaegFLTX7DGxXp69T7vjC5GABrXu35xvq6Ec6eXuoTQ",
  "key10": "4sxek9C9vhDgVjmANjUy7fJURczCDjTxwhq7R6KJcRmCjHG2yxMjcDt78nK9tZ7vieXx94yeLjKbvSwiv7RE58oM",
  "key11": "5Ud6hcPvTaTtkeJ6FCA37PhyKSc7w2qVC2BUS5wVm9RLLMGGCKRTgoK1d7bRxNmDnYqgGMnAV242EWXtrFFMfw6U",
  "key12": "4teYSFMeZRyBEqKn822P4PwR5v7GNygyLr6NZHyP8x7hN1XzaVb9N67HdSxA8B3X8Ha5x6bt1dYdPYLmmyd22Cjh",
  "key13": "3GHhdQj6wwzyPJDUWTXzdr2LwV778TcUowUFuutYVLthxTScFy4kzMenLGqJ2QdRGuXH9F1ZUYYvUYr36qe71WwP",
  "key14": "3E3qYSgAZefSctarT77k8BGgfphD84nQtYJ7LvkhP7hUnWjns7gMhrJwF7gdEvAa78aRfP7JsGd7W6C9JstWGYRD",
  "key15": "2tuQgu2Crmo1gy1sfLFgKC51T3YZ1QDAGRnu8SkWJZZxnkZNyQ2hJmaXUro3ZPy3NUS8Kt2ECWWcqkYh5JANuVYD",
  "key16": "4djbfrkczQWJSdH9cHX2Qoktvs5GfubfV3UzoniNohoZLhxvL9hqPyzoK2pNJ3hWKofEYVrgkNoS3EBKMFtYYiRf",
  "key17": "w6UyMU2m2gnT4Dj1Uays928mjGUayZZRXH3konMxihRd6xyqv6mXSXAdbHp4Uq1ssU7VSu9ktkg2BrnXiBFCWM2",
  "key18": "2udmhNFtp1Hx7teLGmxgtjaKJXVnhY6xm3REinTQJ9C5Zm1JySsYqbL3oM1g6nV1rdV4RAN83ekLgD6y7nDhPzfT",
  "key19": "4G5iz77c8R93763zv9AefAZGnKGNaf1Tr9C611QgGqst8hYTTGMwHVgRctbyDoor4teTsRxKFoiPUqX1YkK4Qsci",
  "key20": "62r9KDhwpNDZgqVXgsUsErbLq4RpYbhc4HeyF7kmjWje4ifFp8f5So3XN7CL398K8rswjsAsqHwFYQ1WzLoZdLqs",
  "key21": "3JV81Ddm9eJw9WbXYh56Piqwe5poomuymEgEaexh8F8FnmXRN8F3utVPbZ4BzX9mVyZjHS5JB2UDSvBpuSBBBYYG",
  "key22": "4d4pj3pDkYT8NHb6E3waRVH6Regu2xzbRfiN2Hd61sVJY2vTsi181oSgRSKAdqYx3F5dMe6fZN3goGgzruAQtKFX",
  "key23": "3WXNSpU8Dk9XNWWWUkvTFviEmDvshJurvDJFaPJLf5cRbsa4nFRtWTF787A74sps5pyEGAAgTDNkitxfJLBzyGPM",
  "key24": "FmrjagyZk89eii59rLiXnc4YunvYhzFVYwWv1N15BKHwjvxfr8YJR5HPi19utkcYDyEz6idF5KQKtmT6miDP1Uk",
  "key25": "3yaec8Tsz5awbtiSzLd2jR6HcvkjZtzwt4MGwaJ2R1eoP439Z1dWCNrCMFvddk77yGQG25uB5MQXe2pBKfPcKLBr",
  "key26": "jogpMXebzmx4W4cvyvTD7xwxaLYg58JvDrD8J2qxPJftn47FhFiKiJZC5Ze4oKz9nvUygs13XTbEcxm67iH72aQ",
  "key27": "4SVSLMcivkMzhEPnxUZ23NUagbdsDscCCPCRevhLnrHHRi5VDnRScrsMAgbJKjtkA85mrfQJjr4anHhYH7eRU9T2",
  "key28": "5wWrnYsEbJd8JyZmSyw58gcNVCdg2jCn1zLhVRLF1GZLaC4dPKJmwmuBsvJp7qnWV8pHa21si9y7iLjs93oRTuRe",
  "key29": "61g7viWkEfrKPCh8SCURyLTtLAy1kRounovNQtky5FXDsyDFXtV7ggVY2YdzHCyWPmiJNxeQKoU9ddseHK3tHvf3",
  "key30": "2mt7WzvB38iWG8yLSBP2ZKMp3LqbcvqscVo8rz5schjEGJ6gP92YvWgyvg4zLygLjbjof2r2GG7Gb9YSjyKS64cZ",
  "key31": "4jvBmpuduWNFCvoGv3CbDHuKRz77JVKe9ey5X4bfRYtAVpTBKZfHck68jdzMv4PmgATFiSKX1BBYg8FRvZYtHpnc",
  "key32": "461faUBUpcEjHt5isUqMdQAEtKKHRd1upnfCMxcrnUj1BgLhcZZbH4JEWBHzc4nLdRindLzA5zF9WemoqB1PRd75",
  "key33": "358DChy4m5sN9tRBUU4r5zXMV2Ct6jHWduWrudw6ReK55Kzfbcvr9KDkcRUABNAyjedvo5rg9nfFSWHhqD2ybT2P",
  "key34": "3fQadf5QDnToLmzKUMaZF8tojKZkD6KG5aVyNX3Dd9ZKYSzQPZ3awcUUKEsT74VC5HZo7cfXey4KMtWKQcNof6j8",
  "key35": "5Lkf5fFzCk84uU94c3ZeYeQ6BUvN5SswpMaKoRDDaLUX1cisJLegYBMof3hiYroGhDozWbedEzVxUj5V71uhfd1n",
  "key36": "4upYkkhmBXqAZivsjFYV6JfhV9kTXABSsnnL9wA2LtzFzpTPCgWZJgDH7Km9md8XBaoNjd4JWsqKhhxyoCf8fLLM",
  "key37": "21Ekt88Caade2PHy9EpN1FuzvfafMeK2JN6apzDMQKFWVECJ5PraNNoMtRdVACDb5XNQBxFSSRnU4TAU7GS7oit7",
  "key38": "4QQ8k29uXb5XSTswAYi74VmrETiLmXCrLUqBdWuB7vTRWbfWNBboyncX15VcWz5WJaopADpHEhjXLkVV8D9VzQSb",
  "key39": "2Y4rzVoEjVbyCJMbyQBcZbGyZcdMM6R78F2jmLqXDqwy9xGHkkbGQJJjmNKyuSHDWhhs1HESTgFefgVo2o2diGwC",
  "key40": "5hMUWsG6EuozJvbZhFcaZTkAa3fiQN5qeb4iHczAQNVCDty4WRDUcJMR99En3ehm6Nvg3nkmVmUW7fKvLBPoWg2r",
  "key41": "ffYgMczpMDhvPGgYe9dN8SGVxN9dbac1ACwrop8MpnbsHVvnwtZjJeGwsczqgCdK4yJptmbosH89ufmNTKPJads",
  "key42": "3Hr5z8jtPsmuPidxeL58h6sNKrBAX68QE3HhiRmnSdPxkayKtTG8TL9bz2RQMtpW8XAdf9uVL3pzmGpY6Go4Ka8o",
  "key43": "2r5imF67UYpf4JrEwTBGbGkw1nj2ttFn5i4MCTz4nUFn3PzS25NUxarwv9nY58e3abijUAzV2eu7PUBm5eB87o1B",
  "key44": "3s2CSvPyikSPkuKdUG8tDuFoFvg95q2eVUhLzknKexLxDdBYym8fSAL7pDMMZ8Pdj4qbT7Zpguw18uVqSU6vtZuK",
  "key45": "4eke3wsRE98X4gK1cDDMxdJ3txfokGZsrJkc4poEDztTioFkEJkEn2C1LEzcne6p59FgTMJFpHVb488b2v3EXuf",
  "key46": "2TbFfvcfpUpJ3tr6949myxFpvQokRgHAC41BvscCXpeCiq2bDFTYzqfuCNPSRpjuWSpJi986x9RP71rVTcnWnXnb",
  "key47": "48k1QRhhiJqB9YjHvCNdybRB6cM8E2cEjcpoxo4nn76qNefN7TtA8Uv7WD4WRjfULo29kqiZnW49ot17zqU6ptB7",
  "key48": "5vuNBuu7oNitdQiJCMM7o9GPKGzk7dC2397VxZqBy99ybMrU6ymphAfhdHjj3HoPzobY1a2rLG7XhrZpVr2xafkH"
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
