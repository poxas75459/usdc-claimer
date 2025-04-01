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
    "5UsvVqfesNjj3C997M2eYzmUtRnx7vD2xKQRBtSGZga9cW5qeH3bEvycqKFwt2GBxGj45vMULbN7b34z9XQpTSip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DbVWs6gKMFJP9MTrePAMLby9BbFt87TQfr1zoJk2GW1cBFJeUTsd26c8BqVTW38uf9xEcZHwXraceACaXL3S9Tq",
  "key1": "5ciKXi52yesf4NbtAMwwUscV4iRJEkPzQH9VgyQ3qQKvpMScX6tA6XgGp6zLo772QZUDExnDWsnL25E5KMbaD3P9",
  "key2": "4pZkMJVX4BYa5rsTAyfxqV9xnEdfU2U7y8gZSMvtiXi72JeVKZLUWbsSVcqbNSDQwKx3WUi1jCiXPYt252UZ9LLx",
  "key3": "oepzBE42qrRFKZXenD6vuLVfLvABEqiCy8Weh4PBVacrGKyKbhSxxNGWa87LrQJCMahraa711oXHSYrgW4Cj59M",
  "key4": "iT2VQBcb4yVtvZ6t4U2bZiLZ6Nu6KTLFUYF4hNMf3eL88cdvNz4jKSpN53wNvxGvLnmwPrZnGq1fgNMd59XVsXV",
  "key5": "3VYE2xRyr8bxVEvADH8kberAf4Mx5ZNh3DQjkGYzMu5F1xGr6J6gwEfuMbSpuLfi55DbGTpHAQvLECzGowm6sFtz",
  "key6": "4J89uPrytjqRJcXWT7SsggyP9E6qec4t8Xi5oh68syThCrhd4hH4kCyvoAJQuoreBatTrtDT5yWHCne8nSrcpEm9",
  "key7": "3siWxdNofPiSN5z6jBywtY9UQaSrNa1qMLJXXZy4MgH7sJ47EptU8MrnHnFoxE4PtHMAniTGTS9Tzqsi4qfnTvZd",
  "key8": "5juLjFfd3Tr91rftwFwt7EZCZkpRxTahbKwHyF3FCEmFUe8kc61anmhhqXZMeNWBw3wx6jQPLSg2R8NdmK5j6r81",
  "key9": "2P4ngwtijg9YM8fejE4hXerR3pQgtz1vYhDBjJ18YAJF9gRwmkAGM38p4JyDzRbmTLbqEMAq1jxJ8rCSaSFE1NaT",
  "key10": "5Eve3UrsrVmYQfSiwD5xwQ2c6dSeEhtrkRqo65MC74uULzwR2jpM3JueGS69HqwuBEr3FuuC2RUqyMj3VWjkppjA",
  "key11": "edmGfNpT6XzgpzmFnJhRudpRd8XCaEi7Uux2KyLS8t6PkYLia4H1bmPHTSqq6Wn7wv1wTxpPRhzwWC5cyE6TuDf",
  "key12": "2GKsStu9GzMZhHL6XyRFi4hZeQzQTFnXRQyuKe7nsR2Bm4wZUDWqU46SMoN9z2LdwGJ9KLeoqMkzvG9ND1L4E2Bq",
  "key13": "2Z3sdS1C5WcDtRBEJrHD2vR4rJE1783U3CrHKnFyyBRWpoBK3sgpvCxdhAwbSCvhHMeDojts6FZ9keEVY9kFffox",
  "key14": "Zb5TFSiu6qSmWLqzvBzpUq3bBeXBhn8svRFMoNJmk1QAYPoZjVcYmDR1CPmyNDfZkYXAqhUnsSPuZ3QTMvnNCB8",
  "key15": "3FWhrKovYQPejdgB51rbynDSaFrHmsdkrhPQ8uRU1YDqHwoQeJ5uo1fgPXmwW5yYf1EyWt2mjUmbegS1FuoQMcjG",
  "key16": "3uBWxJEe7usKocLGbBoT6J1pqTvhjBbag8DAEUKir3Th61Q48skTPxpYL7cYWaExQ1v8iBX9qTfPQq4UMzf9DNxB",
  "key17": "3MgNS2aQTd4y1xKD7dMYvnrP3ABqKCTiCMA3gjJxWmephm5Z6c2s6a3x5fK6DnzqftQNcka7rdpZtFkiqmwKM5UE",
  "key18": "4cymhgWaSKgK92g69TM7vKuwwbBNQg7Cz47GyJiZ9oUA8GPsbarZnswmJj7dPrDNdKbSVK6HwVvYCb7tEygHF9mP",
  "key19": "4s5QHKCaA1zZBbbs551ay8XQ4EJFZzDrGoCLtDWyT72xhAN9Vxx5hSZqiuwNr3mQybfzYXUuuDD3bJ4VwnDMUTRU",
  "key20": "46EJ2rPatDHKXq3ivTcBwECZ8MLUvBKa7v38YNzFjrysz7Nz1YbFB614ewEsLJ9vEYQ596DLA1EyWveFnDfW2fdY",
  "key21": "2owSqJqZ2tYe191Rgxnpuv5NXnqF5Fqt9Um4tmjdsJETc9PGRFdM7Vep3qGSCgTmJkZiaX43BqvLmxeBiLt8EJTg",
  "key22": "ehhvupJcMxsqgLyGnFnVKw6kW6QRpnxa9cJvBC6CWSW7DpGYArcnrXr1S8ncQ9xdJBAYypysM4B2vY1gZ8TX7yF",
  "key23": "28fEPeYauo3swpreGWQu3t4xiYPsGXpQiXcXYmnqfknxhsyxbRB4GLw6gxzafJTdJTa5mwexk1MvPNGUXmwEriQo",
  "key24": "3GQuxqfupThz3z7kLivJGPRkoLF6roybmmxVv9EfS4zUPrT6ZwJWG574XSuHJPfgzHMYsZNYSFNooVZ8qce4RdQy",
  "key25": "65iA2ATSvtn2LZoFWt5b5ccLnTeLXcBACNk2Ym3B4y4tciFSu1TQ7nnQMZbfPy4U9jp2oWXeQvVa2ndJM8D6WcN5",
  "key26": "1QHZekHKwBS7F9cQqz2iAGhyfbhQ6GatXLooVBQwQ4y3LVJg24EfY5ZA3s5jck9fTKfedRAbtjsHUJLjqn6s5vk",
  "key27": "qkFJ7pA97Ui5SXfUBGYXU27v313NVhbQ769HmKc7foBQMUnd3UCWHwLz2FRTmUnFdrrjYQky7akFudQbUtXyVNK",
  "key28": "2j3td64xAeAzsp46y2kwp2iUzC5FdSB2jFNanHtuyvzT8EqYCjQMVAP9Qa4Y8pfrBbr3hwpgQxh1Tu6obpF5eVRH",
  "key29": "2eYSEH6NVbMMBdUaEFHgpmzZrfdPtrWxq7Yn94J94gPHwF1xZRPD82Wnpcsdj7S78GaE6UMYeTKTxyNJj7mZBJPd",
  "key30": "23KAjR1jLWJfQ3uAqex8JZLBvK6UNKDTARvqeAFWC2BHLyGwzw3HUqhFUbrXxh1ettVmapbtZzrXLrWXyVUd8aY5",
  "key31": "RaTXtuyxGQfWRgRwviRFVdg2SXFrczb8G8DGshJTcjwUXQGAb3iwgNeuYpEiXXwchREWkBLqMfM6KWsEZoL5ZVR",
  "key32": "5uex4iTTuNSbS1uCZbVqHyXTXMGZbadQPYsTpw9CPLgtMiEaMaoZvDq47rAbbCF82gNCQnwfFGf9f9X5o3CdytAS",
  "key33": "XWGC7Fpk91Q1doHEEPmVdWRdFZiSE3VSF4GvDWinoPbeDfjmSfEWQUBxkdjy4sfGcFJdAxubjLeWArgiFZ1shfX",
  "key34": "3JyNBXHQ7mWrhjUM38ULeesihBVu8jUuQ7yMVEdjDwhM1aEHwBRuqSmjC7oJSsxftvDzDqme14TcXnpKxWhVRB6C",
  "key35": "4jB7nFqkFABn3Qg6bcfGrMgT1oUd8cCMDscJqFRQRFTqCL5AYt1H9zWhoBHx5Y8wqPH21isEviRnpvPcLAFcu79s",
  "key36": "12A4AJYgwWEfSDVsuU4YkoAiiWujtPhpreM57vqNiBFTEVp7KbB1DdcF4Rt7BuwQGH9rwYADefBNgt9VN2aDrtYg",
  "key37": "eNDi1gjJbupAEvS1nnHQiqTEH75vCz3H7w2w8N5tfeqtrLPotA4i6awN9xtgwzyfnmcwdkfTyE3FWxJ1jFyX6cf",
  "key38": "4TprxqNztKtLKBtmiAHiroAZyKRYUdCpT6YTadm4CKVp6uKSs8ZNq1ZVpe4PmpXLZDYfLxiqdfprkXKEwd2iEC2i",
  "key39": "ymmnFoRP4ERfFQs2wBcFBUafMvuNGXwNa6RsbvqMaS4BgNQa4EV3vVgjw5k93abebeqqRq22zHTigsrGwbzw7PY",
  "key40": "2XXzDW5jGZdPtE6Tfe5GFCqZffe4rtZfvL1d5qnsEDNMwbnDe44fyUaHb5TpEaWeQw3cHUoDcxGe3oKZxjQSzsr6",
  "key41": "3ehiq2iqi6nH5nUcu9ybqq2DJE6hmUz9pKUJoZJ3NuaqQiwjxMFarz6Wvo7finDYib4qhJyUFVZLdPndSmb4zgyf",
  "key42": "3cfqWzophbEx5Mez14mW8wue8ZveKzy5BTNFH7xzWpXPq9quzyZ2ojgHMH8np2j38UkQcbFScJS2TuaRMoAcrPcd",
  "key43": "4cLCAbf73ChYn3DADqESjNKjQWjwCxbkLR6vByzs5G3C3BXi9m7muwED8ME7DbBUP2mbqSdMccEQPmQLWqnpDNA4"
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
