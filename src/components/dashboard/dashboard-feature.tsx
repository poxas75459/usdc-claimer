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
    "5n5fhGcLUibsBT8L1ZZJaX2UNx5DUBDaam2uAPe5pNK6Sg8yJoRNM8NADLTbAEyvisNUFrjvmoSVNCQhRaakB16B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbVBhuFjV4ErHQFRdMTGGGcuxfBNLX7FtXkQA7afsWiEx68K8CKeMNk5JH4ehFauYQxR5jKEFugntsqkmjH1bmU",
  "key1": "2FHBPy7HQ1HeQP9FWkuxmwtepGnn2yZj9B56FGS1WkGFfXzGpHyNPKoebNDSScfGZvK3y9hYcWFFk1f7KFBJFSwW",
  "key2": "N3ops9t7oHkhaqLx9D5sXyeWzVDui6br2DZFhDBrRhR2gbpJdmse6FccktjnE7XCy82gnNCWu7rb6yiwHKyDhcs",
  "key3": "27fJ193pCEvEEbrXX5X9BwLfXjnwPnVjHfeckNW8mgf21n6pKNb61YTFDwDC44RJo7msmcNwYmUn8wxx6yH1zhxd",
  "key4": "5Akp3uagwaXn9NRDWz6CMM9G3hYoaT3jw5UJWojjU6Yn3gN9c36VkgP4kYpLZFmyeCzQniC638jXNwTwCNW9rgvb",
  "key5": "3JfnP9HEAnmL87hiJx8veH54frX4rTw18eDNzsreBqC28VtLtme6hNtkMYwc3QMZ4k5R6GxPqBPnRL7FNM9VVMvk",
  "key6": "6kiZ8G4mxLZ7BZP5fa9T2aZdeMHyp2AghMDi4QDKwhXEZKDsJRfJjrYvWbrwLtLpxWfLMX1h94ncobB21PjqkVS",
  "key7": "4HAVtCH19SNYgCCSCEBk6RV4U5xLDPnWnxjDc1RrjrajdopaeoCKerry2rFm4kw5XKbrg7EQawHGxaRCFQHxtomK",
  "key8": "3Bk2SgeLV1JfGRcJeNhNUFrtgBMAi98H6hZHnQi1AuHvBhnyHKLkBBDr4vwdKcZyv76mCsvSESHi922dC75eFwRQ",
  "key9": "HCBGiBCHkL7Yx4XSitZmZYiN3wdiSEL2JZqyQXw2RfgzkGFwM7UffnorEXi3FDHCDSj8Mzq6bkYCgE9xiEPh3wi",
  "key10": "3yQn9sZMzjcKoexcyTTmnT8AnYUXjA4R4x5GW2174isMNvLummCALQbyDLtCavLefFFWcU4YkUxUyZ9wPEuARFwY",
  "key11": "3uU2JFq4y8oLTWy2BZ5NR42hbZcwQTizxyB1YcNhqZQfuPC2jCtmqVvKZLhYoUi5PDa8t3yK6Mo58aVkTnaERCAc",
  "key12": "4UVPpxjRhyWVh4GPiVjwVQdFah4nHko7xZut6TeriWCmKKQesfTGjwabQV9w9JQzVmGBGksFZH7CmCFVJJjYUa9G",
  "key13": "36ubZpfqjGemkmUjPrxTjijiaq9amkj1RC7zETSH2kcUZWVCaLVnh71J3ncHoLu9fSa7HDaLQP661zQCY7yvP2ST",
  "key14": "2EYEQnYUZVHpsu8pjqyB4cMkSnGBnzLP8oXKxjHL6xf4rTFLC6nmXfUKanxp8pgS1BTVGXW75iMpArMgdHZEhUbk",
  "key15": "5R2fRrMcdddoAVD1Q8EvvC2o6jbB6iB5dNEioTMFpJbs5zcE46PfFvznspSeHMt6aMYm9BsqV3RdjBX46PEsUAid",
  "key16": "35pSecdPfuP7DEHAR71L83sysiNvxbXmvW3fxxqeuw42x9cfh8dtx1MdPpky2hbXgKP3ks82AETsVwKKcYxNBfpq",
  "key17": "5V5VPsP6RT5V5QgLZkJj7Kv8nttQw67hanS3bio6HQKCohwrtC3Mdkj1DPc6LLtHz7URPt9LogHxqAFJJLmGTVLg",
  "key18": "3wEvKTrhrCjrhxX1AXeupX3urVUqUHpFsEBb3jquVsLTKpWcQFp5H71cxX12ja7MqgZvHf98cj7hKAPgRWay3Xhh",
  "key19": "hfAoHEqrNfwvPpC6oSz8PXb6uiU9KYQYA7sCfZ7vRcpus5xaPGEZ14o43sMPRdR4UsGju3ENdxiPtNRkZYBUMt5",
  "key20": "56wvqm6Aaf73MHHDmFZMc9HCHYysySLMMbjRy4ZnvcBsTFiXnS96Ku3dgtkDY4ob4PqVZ39Q2AFUYpz823SZ3Uas",
  "key21": "4joo6qtyqcBszFdZGe2A9tYqcyXBptj2bqAHhWo9TCkPSha9fa3hFpjnUP4ioZPTiM43HLLrzHkmrHiEpRHfqZC5",
  "key22": "5Q154a9tUsMwZQa45LYCZWoM7dMoGgYx2cnZN4MwJqui6RvbUjSmBPJQLToXWM2yrDRQCfT6ZLuqrRLrZFdf2QDp",
  "key23": "1J4ka6CkZTggrd3GoHyo7oxqdNhio2a6xDWtKTQ2cQRrcd3BsSo5wzRWDSL3GdRboVnKbvqfCLYTSAXZxABnQcW",
  "key24": "2KbWc2ax2GNKu9ndk2m1fZfArj4FKvEE5DEreKVz6jPKpoNA7keVxoecZJkYQG8GdyZB537XTTgSbbNdbw7vgkiD",
  "key25": "5FCJFntMTJpCQBFEwL5cvyUJwx5s6pB16QkJGz2FdgEGbgfZV8DiEh3ErH45uvMNhDgBG53t5VAaZ9dH5xAg3ap6",
  "key26": "2E8gS7ZfauRpymE6x2tM7FpmDxBBExphEvYHLYQRSkAjYrcMZ7odJ9RFf42WhtRVU3AM9rJeEx9xaSgLEzxmZ7op",
  "key27": "DhPsA1VAqZL7KX8XEDC9sQpkirfswtA8Bw5SUtdwGPrr75ETqJnCW7V2oAvLxBZEs7p85FTEb97x4GcVUcpTVup",
  "key28": "2NJZwRyqaQif8zHCbcZgWawXwFnvueZP78hganL2atQYx5141NXWixihWUhw2zAKPRXBg8vFAPDCFzbpMvJqCVJE",
  "key29": "5xcRxVrRKFcazyQdxDZqut6hyEzYHWoMrhWxGX9ywXqM776rap5SwZRULM7rJHMrPkdmNU74DcygKpQSbKqn4siR",
  "key30": "44LYeZjYvtFeMtmWG4XRkf66hgdoyDUwuATJY1MP53coA8PscEr39RzLXP3FHExVHjJQkeMx9Hdd13LNAD4HaLK8",
  "key31": "3Zu1SjaFcEqXJFxmQ4dZ9zAQnSRgxE56mohiX6Dz8wcwCAJbX9CMUY79rzLN7Nx8h5jvHZC7bxFcNPyCw84jgS5b",
  "key32": "2iyUKv8oh1koHr3zttsTg6TAHVgX91bsSEpHG5VbZachS3ZFWjXAGnuUedXg49umUgsUMk4tmqPcGnWiRoYiKeZ1",
  "key33": "3VsWsaZWWGyojjvTLLSVrq8V8pVzkUL4WKiMLnnyUy16kipfdzZsnZni749ZxfCEKmmgbGqkw97sXELVxgmkbSVf",
  "key34": "3i6zC9cLkTVxKXTya2mwAAJmFEQM8eyToYfMKcZWBdoY12ZuzrUWtajbNd4y94VDtbuH2ZjPxGyJuT8iMmhkeCA1",
  "key35": "piUSGchE4fqE8xUQyVPbJC93a35xpnd1XFdZEFniWndn2kWo91JaZs7VrCZsyXy66VmsMFKdxVbTamEmSNyjgtZ",
  "key36": "2Uc7eJgwAHCVyofUL5BCec2GppsnnzJHfhum2422JrdeBrpyYtn2Yxsy4rGKqNDEQprU9kxGt7PhJDM5HfXh283Z",
  "key37": "2fZFb8s4rAGgyMQcdnLKDxYNG92hAhma92Z7sD5NsqL17ZjK4g4tvv8kzuGJhz594t7gfYcTUUPD6DG3fgmomX7R",
  "key38": "3K7ZCbUXTGmunugh7M3AskpaDxQR5e6vpKEcUwMzie1XyB3KnKrGUBrDWDNKrqV9jFU3coyY8Xygz4Pz9zsHJnhU",
  "key39": "5u8gitDM8GyyUkz1YwYNe4JbtzrQAhtAGEXf5SA3XNPujWjN7KDJRit8i8KGkVjybvyYurU1PWqMo6yTubtkGm3v",
  "key40": "4grTEuJSZwYV9YT5iHQNiRmerxEibS11QbZRvwXvbfh33Q5EwEpAEp3vzAZoKcSJ5HNjy5CzM2nNHwgi3SRWzRob",
  "key41": "5uSC2NnvddDQsY9Y4mjYwj8dZurKu6TdigzZfvs1jgsE2aAzSj44WgUZciSkeuuFek5XojU7wLc8m6Sv7XDbE8YS",
  "key42": "2m8zG7naq666yc5KbeWnJtNHSqSJvq375Wx8AV8QmbkWcLCeeZHD3qe6mqztJgxjnDcWkA8LoDtpUY64UQxA1dCb",
  "key43": "3pdi7gyxUgZmqGubxLECJh6AmrKQRM39gQKmkd4dPdR8UK5MbnmCmVBThNcTpcevUTDTZD9bvy2oWXLvCaEynYnv"
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
