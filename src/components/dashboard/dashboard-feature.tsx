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
    "3WUWGmuKAVjjUawa7Vn9B2a9sZ9nxwoQhuhsQHK9Y7TUUN26BF7b989TyZrQEtrXjJHUWPhQdm6syH6chHaDn9d1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rLEAWqR9u2R6s6bRGgB38YGTru7r3FT2UWTLAXVZEHp4jPrxPyvrPPfh57Pddw9RwTTwyVwwnJpnwVbUDk3axpF",
  "key1": "5sjDKN6aMW8C6gsKohTa4qw3sLQXopyc5Pb8nZZCGvkRNBc6jYewrmEreRVNPkB3xm18c8M5YkfgtAHAdKWV6HDq",
  "key2": "1kX51WLPtNWvXWE9xZjx85i7p67HeeDVjanX1mnrH67WDezrt6L52sMJ6bnLYo3sAsfT4VFriqcoRFSivZWREn5",
  "key3": "2uZqYkigPRuYZowZuDQVvTUYgeny2vVAUsGoGrU5QB8YwXyVtvfDESuEtVgDS2tHxXMpXQYwSE3ms5d5T8EJWGNP",
  "key4": "XAGigq6JaL5JssZzbxhBvevabswcA89dBooSg1qjkhdGh1E3kdPwshRH5rnXoujncTjRBnMb7DRWxBBdd1s38bT",
  "key5": "66g2EDantNhMHugcK2VdFp2yw4p3Q7SDZx2kpqxuXL5zHoKCLQ61yZxJckK9w2XK7MrjCzHTe3gpSa6LYd6XyQ4a",
  "key6": "5QUoR3aYx3iu1BNJhtw78xEBtE5uZUTFNvCERqWnpT22oKWkpMBQEcNHHbXFqCoCYR7k1KYpSmWr58kVk1GRyGj6",
  "key7": "2sBjJY8bsp85YGcuRNimBv31C9ooh8in6zWEhtZXqb2QYdfdnmSCtbw3xcgN9mbiG7fcMLFkXTnrMTCseSm2Srqg",
  "key8": "5CrRgq5rLdo5dJAfHx7rfWWdRkt4ryBg3MriGYpREkaBtM5PYQHQ69GmwAUDWq4EeKW8B1xTtT1mYWheb9VaJVHh",
  "key9": "2jePmSJsia1jdeFFR7veerS9F5PXCc6XX4u2QZMNsqppHD2uFxx2dgZwxknxBA79amy9b3qjmvJRrof5o4vXn6HH",
  "key10": "5ZdpdPMbSnGSt5VvnK95XS79xmUmEx6vBdQSaPp9cZEyS2DX79KaFmx6iufwjV38j9zQURxBdtLifq4EFKCCaVHw",
  "key11": "5JjjHbdcYi24Zr7akfFGDYacTqcRA5wCxGXJEkqA7dGsZ2DuNDEZuVnt8R1bBqH1LiyttDGJFyzsjk43V2cXoaYC",
  "key12": "57YvPLEe3ndb7ZBJDqHhwezTsSkWb9LNL6KchGhoeJ3Fk1XpHQ6L9whFc3qYBHceECjQEXGECFnuduKpFd7oKqxi",
  "key13": "3yXkRnEVhBu9wwv82uqTYzM4T1Komn2uV2pABzPDKkub55Neuqc9ESPEEd3QDuTQqG23ZfdgaYivZLwS6YpmskLD",
  "key14": "5mc8SFSUAKKDNtZKmS9PEhqd4zqLZ1d9WkTf4ouKUdFBDLkMBSJ6KZqbgtoMP6QFTGdFuWvyYPoHzAbZGDN3xHLb",
  "key15": "5d6Qom8qqhBT9wmfnZB7Z1kQNLasYnu5yx3vRxxnQmDpA6CDx4K95UGjdxGbB3TxVGYCfJp9Miw7i1FDsam7mPfJ",
  "key16": "36f35H3yNF46J7qNA9VbHCJhVJCS27MQS1DfnodEqJ4NVFcikDdQ55tmxNSgn5vfiRwuMQsvExE1VMyqrNc6n7AH",
  "key17": "2BJdShLSmkHs8H4n6LeQHMNn7kRGhCi5SsM4o9o3fmb6rVrKsS27b5mRL9hi8dUNw375sAZmfKLWaocaF8Sds4wa",
  "key18": "KJPsLz9vmt7pun4xwztuNZD6UNTvTBzE1jbCzp5UeDTLSqScNKShbCubpf4M7iKPpPCTme3rwusrAe3KzTfPLon",
  "key19": "4ij2prcUjGm2jMK8ZGYKsV2npRtUQLtTes2xvKePeJqjWyN6mW9fAq8mjmsX1QSf6zqiQAdrRnFbeHdiGYR2RbT3",
  "key20": "632hhGaH24c29Qw25ijK4NuUPhg1K6qSrmidFf3azftEGermv9S35tj1NRgkm2EkQs3nCYd8TiVEPXXTjtkCutEj",
  "key21": "2UiXNBZSUGXUAfy1MrLirVZUNzkDvYeLXGL2YqStR3mEnhj61tuniuXutwB9tFzzgU8dKpxk1LypHcBjmKMXgUBJ",
  "key22": "6zQpYNqKbUU6hXGGZHYBp6nL1Av9uE1Qt3zpSA4U42fjAMkPjeCUp4j3CH5FzobVn6QJ4syMiwKuE7zXjZ4FMQh",
  "key23": "5f88cM8Fo2oNALLmLzHx8TxhdcvkTMi35ENcyuoNbJGonJMMdb69ou89HtPaGRMcXANa6hNYCsKZzuh9oUABKxRW",
  "key24": "ZD1urEGYDJhAjm8QoZSofQj4DCt1gAHxwCtpahsRGn6cTko7mJ8Erqs2C2nnePDDfR1eEVMYc2TYSNEnZkxydhe",
  "key25": "5w5LKKTVsBK96ypiQnpnqqFGg3gpbSu1wYpWAmyuYL38pqbv2st91vrFycnz2FdMWv4YqVNpdKAz4132wr2KFykk",
  "key26": "4ZgjKR7c5VcVzDkZCn5k5dhkPQHJ4gXesFPa4RiBMTWEMHHuTL1xaj5NE7RMwkGppd8kwkiBAX7PCPaC2w9FvqiB",
  "key27": "669kw9tspoHMELL97QRAqmsjkGTJTDxGjAWswqmTyZg5WKRdEZmVaKi9mH26zYWgy4Z1GqbqNZG9Zm2bwDXd18VW",
  "key28": "62NWt8rFN5XLpUPruyLL4UTF2wXjsfxnoYMegzYHKyyax1WbprEfYyrZXR2KM6TW9wExEMpxKy7wr22DiGfR4HWv",
  "key29": "38GEsjhqx4vRfYL31kwHM9FzbYCK82QGuj4senvgszXdsFowjZA1URE6htLPYMiJL7DprjtfNCwxYqJM7BwQKbNm",
  "key30": "5ee32fvpgna8tWyQknJ39spFrUd3UGc9CE9rwdNMLY4HwUe6expFkQdSwG6N7R8CF24tQBqZZdmo1898hs3z4Gdr",
  "key31": "5TTQr1j8HS2dQQdWpnxCaRTrFQySDLVu1SU1e3pmJ6vewYB8FJvFzYd3kzCVKdyYAUquUXDAyrmLBYG8v4acZZp1",
  "key32": "C6yPydmfkVmipawCj1aD8KcG3E2btKMjtXBMCbweQer4Exjyz1HFC9pzQoZPMSfNDEcGwXfHJps3ihSP2PT6P1E",
  "key33": "SAmaoBU6Tes5y2RPAjVuPdNqeh3MU2WGsxN7d1vhiHSRdAZesCnKare6NEGkuJ5m7LtVTMx1Lxc5wWdDrVEY719",
  "key34": "GPCEPEGPWJnZWAAriJxuVygZTRZBPTWgve5nhWWFtamfDq8NipVXV1RvMajkgCxPpWogaLuvS1v71a964Zx3VMC",
  "key35": "4ttoMSnQKJcJNAFmJVJ3Amk1jbg2d6QkFP4q4dp551t6cQSw3UVFbEs6HmxaJWrakpHQGu385jNNYo8DPKgyP38e",
  "key36": "66YFkbnKynCTS6L1VyLvFws12kJ9TVZA4Dt5QwKi8L8W46DpTSaDkHaBqHcuggzsgXAWeMTADMvNzgAw2oX63kaa",
  "key37": "4KcXxtJzXux5teLYWTTFW5nb1NsT7mqxCtGC67ED5TEcMjxNDU9LCCc7nm2Vh96qX9Z6RtbLA1NQzLB5fHgNtL1L",
  "key38": "4Yte2TxshjcXyGR7gTiDXUgapHPM8nLWrU6HJqcxCysEc6QbpmE5ULwwvErePjxa76GXUo6fca963P6t9qituyQY",
  "key39": "5YXzxgzqL6evffLu57ZNEKwQXS2sLVPKsYZvbuxvJ6HvbFoCt7ZHEYCUSi2HJrqMBaUWrstQkaqoXd88DZ2ciLaN",
  "key40": "2wB8VUziChdY7S38iGWQqjUHaj4escQRfbn7WZ7QcEGPEdWgpSJHuCpbRk7FxnQ7jyx4opamrB8RJgv3EXoW5GHH",
  "key41": "5hYkjyZgst3ajeVs7ppZtXC1JKE5Q9op72RRB7B1AMkkSxLuvCQH6AEhWnmkzqsB11sThYVAaaKNLfg6mX6wvR7Y",
  "key42": "5zuJ9dQC5djyjRDToTDSJWF6CQZPtUwY7xyQh8g8Xd9cWU6xBPSJAV4u69ZwG45vddYsmzFjc3nSqBe7uRxuWV1G",
  "key43": "2bevTYHMmQoaW7zQafRc2PcFNJLxxYuTCw7psBgnKKqksgux97kBr9WjZLbSrEt5Y3nGyk1Gw3tF6EamwEjbagxx",
  "key44": "2GqrBa8DDKzws88RmaP6LaE574pTHsaEu8cumSzjs12ZiadD4H96R1T31rARbDk6F566ST3SCVRP9jGE8uCt8ong",
  "key45": "3uabDiZWG1aivuKRyBkPzKRnWr8pbik67kPMTshAJbZYAt3cyAGxHdfbpRyKUPD2hDBsLcVYJ2cTAGWJTvQknLcQ",
  "key46": "kdcK7Z8DAqWZRP3qMTqiMzCbuWNRJ8fanqc8nre9cif1CEyoATCAXUKbrzCn6f6UGd4MFncJxkLTeJKM4zfPmkb"
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
