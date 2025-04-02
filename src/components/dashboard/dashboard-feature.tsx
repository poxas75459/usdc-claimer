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
    "2deqHX4EpdK6kVLUDA8npM2qm6wonruiSgv5yqtcqpgQVhkWpp768GZ26stJHQ1QJL8uRxUmnA3etrYZ9dvcpKDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yghbgs4XNt9bqXkGmBx9UdDyifMiGrK9irhgqXM8k2CLMf4nuojBY2Py2WhpaHiGLuSxGGgCfH9dJTmNrr1cQo6",
  "key1": "57LLfyTc13t61tQdiByGsZ6qgjsT1vfLH7mSnSJjQRMfZTwg2QAX4NC4KfCXxb4FKr3Vbp9bFqu6NcPU8gKhYpWc",
  "key2": "2UXb3EBB9mMywzoUHrFERxcmFns2E31ni7oGXsBxqhaV8BCpHF7jADE6m85J2VYRWQcAGWNvZgMy1iNEqeED1qVX",
  "key3": "4npqkMpNh154ChaYzgG3n6crrEzjGsKKVdQtJbsFvdL8LdF9XvMaCShLfze3Jww5vVqeRpe6mmwwKcEQ2d7aLMBB",
  "key4": "2fx2PMKWgbCN9zVt85zzh9dGJNwkNTgYTSUR7Ann1pEwqW8SVi26kaWGVuxcmRi8wFXzqYSweSusN7HXdQPkp5Bx",
  "key5": "4AuahXoWjyMkqc2dtevnhhKEsZLRCSDUWwemPpSgb8sXH4BACEc81wiP4p4SDUiAPsBgvk7HepNPMWGYos8eaUWL",
  "key6": "66SCbNbSKanTFbE16Q8ZNKsQ4zw13iJN8T6VyZ2bGWL1vrARmD4yZteC4KKhuu9hzDaeyebxdiciJytC4FEcJjwE",
  "key7": "4E7xeyB8JuQnvk8JE9nmoSofQ4ebx9MfGvWmCpThnDgntifqrgjswqBaA4rmvFnoCaqtvarUeQY5yg8wi9VaQJsM",
  "key8": "3oorUATqyBBWT45u7WVQR3kU8Qd9LWZdFL5FQo7xCqPqHkZwPWPrKZY4ie6K7mTrNesce6SjCsWMN9pAQxtJ6qc6",
  "key9": "48rsNP18An1YcSDxAQWDEekznXgEwAs5PsVpTo195sZ7E8Tug8p6diFEZLnhLz7dX2tZcjcVCjf2NWBLZaHyS5J1",
  "key10": "5XQ1undpBTx2YVYAWGQH4mCDDWRVNW3NaFfV3kXgvi2LhjEkXPLfwmUMbmimLkNueSRZk1KQrMjGGLXWG2nrP9rX",
  "key11": "5j6rEtWVFLhbL6rffQ64uqVGu1Ls9becwv4BWDLXmPC75mHzWw3fmg13A5Z2pfHZAySR5t6cpuuh2QtGQVLBpfky",
  "key12": "sneppAezBjW7wVXhrsTUFGUBqyaGKzCfyio9sG9JQBdqrbXzRWNGGyhyzQ13iZ14J17amfgA6T6ptZ6jHPSH8Fk",
  "key13": "5prcffvDYsQa1N5NZKxADoAjKq4YxTknQAMt9k1ERpEWPxnCdnPrzBXoigEGR46GKVDKxDYSXa6KH8so5Fy2K9eF",
  "key14": "3TE1dncuFNsw9F68VKhWUg2q9o6HJXkJJqgR1NppDAoDQqpbFBy4qY4jXqJnmFShoJExrKrnBcUk89dzpkdMuMKT",
  "key15": "2bRxcWFNtdmUeX3XSyPCA426NnoLzpvFoNpDDEscjteUuJXMtcJkscgRQoFrT1UDjfwyMU6w6bGiVziCr3wcwmVV",
  "key16": "g3wEPRZJqnvgc1qAEZjyzCNkcinGyTDcZQsAMjvVT6siFRSrJutLsSmRNvNxFQtaBxZgii6J1BocWEvv33nRuDs",
  "key17": "jEurLBXyaxTMM4W8CnaxSNriZvq3cHdkmuFPvGp8KJXVmHEmDmPCd5kJDN8dMans5dYrmF6VTEgyVQPCu437mBH",
  "key18": "4LXKNNB7v3fhWBcdgcpMSnZzJXjAaMNW4DTxcYNCq64AGUvJaDJtP8EJ69drYadFGLcijCCdhFxpejuKAe9G3JY2",
  "key19": "2qQQyJo8PXeoaTaSWk8bQU5fo5SuYFK3yY1EvTRgLoPLfs7gUe1RVKqBEQWWCn9jwDLvDtdQ48rRk7rDUJdkNjSx",
  "key20": "619MpW434CdTsQAGX6cPh653K1VNngB3Vv29B4fPVKUMExtTtx5HdoNXj3vra3JVRN8yXLG2cvx4VNd7FXBGWetf",
  "key21": "3pv9fqNvqyxxQBJw3wQAgmAzXCC94TLC1osNudyqTTAP4pXoFQF2Yukopr4D8DKB3XKQaebnys1Gd5Ssj4UeZzaP",
  "key22": "3eWU3mf4y8jR7Tc4muDnJF69gPnQi87jL57yRce2KZPa9F2sLmQ4HREGwYKF575GHD4WihHe1WGjz9coa5YtfZPY",
  "key23": "257DnCM1AtDLGJ4tv8p37CRwxu4WtbW3BbEuUmXLehmTxSgi9BwR2B9bz891RKvpaGRLdrLCBHKfEeKUHaynugov",
  "key24": "4cEbTLfi3JzALfDdCwbi91cinXfubFvhZE9BJjkzA881km4PCFpnuahE2LFUXhEmMZbHnvPGwGqTVDZ5rjCGKnKM",
  "key25": "49r6Fa7McpxKEVB1TUQjGfXc4wKPcaYibSu1xDBkv5EW72shTsJ4SCsdVUjfJP18e1deAbToVkTqVhYepc2GB3eT",
  "key26": "2BhaaJP5Fsdhczh8fyyeAfaphhB2N13Jpk9x8FV4egLQQNRGRSu9Rf1BHvu6WcoTixT5WT9XsKytsZFdfEsCTNna",
  "key27": "3dgzyMv8p8cqmVHEgLsV6748xdPXf5zrhaeBcMWQYStaB3ZxjX5djsv3L9D5o9oJwjgJd3a7j1xAGUwEumQRJka1",
  "key28": "2ua6xF5YrZyDz37rX1mo94VamVbS8buKLd6bJUACmHSt7Si8dQCSDHqLY1jsYCYnLy14d1WRBDE7TPyaHn4B2ydW",
  "key29": "2GQMWf1VEw4Yhx2KPASNheHFQX2gSy5N1JMzkw41nn21hCQ2xnSBtpVWHXrNojs1mZ3Ti6MsbLBddoHxaN8wcAQC",
  "key30": "3p2eNAR9ayXzAw4KsZiH9quoFC7tV7oGwsuostWcA1fb1RywnDma6oyKwLuaKqJL5tGebt3Z1oRjRZ1QwsCeU5kX",
  "key31": "3Z8hioDbwod27mFkSioLfM6Wxzxhu9wx6cUV5zNv6t45yApqXuDFvNfS3xRxLBZUzV4XRshJ5Ja5JB2ERRdCsoEK",
  "key32": "8jpymUjMmJASRnRY8Lb2k1t7hQd25K8gdvf1157HXYX5eupyfxPpcqWp6AKcVNjyVi4xZkMYkKftEutV37oSTJj",
  "key33": "53CZ4exZR8Ddt8TUhUYT6RzNQbJ4BymioL8zSKcmkYz1wPFvYMsHEf46twNeEGVr1NQDWZNwgYZqJPG1wyKvXWjD",
  "key34": "E7pNBK6XGb3AL76mf9GfQ9u77aZUk3W7LYVBwQaYfqPDxVSG8ydZEHKQiwXAC95vCZygphbVSWsaMp1kN9kQHYT",
  "key35": "41xcjj42m8bMoqvEuvyVciPDw1kncwWdsJPrUPk1QHYqGp7jcxmTAnPBcdjbNGiYL1GkERXS8sHRgqySJZPEnLKi",
  "key36": "vBu2B7EoEAi6X5ahJ5fZde6xjzcRADAk3UPvins7dARGYKUCdGeYkvbZpYNPGaamcPUw4xCchDVFqhLbpaV1oro",
  "key37": "2naeBdbTbivMRVCFJsxjGY8wvsqcyqMr27ieizBfZyZDSBqYLT8mfGGdJTeQTov3raP2YGaMewjMtA9pudHv5kMg",
  "key38": "2M1CcyJ11wdsiipfV3ZuC5VSWdxQcemNdA5TZc85rAaZAxjV8Rmvu9bM2b5Jr6F7utZdGUBxWpfQe2ixDKZCxfY4",
  "key39": "3u5Kd6BDeXKaV7YqRDV2QphUDJK4wfqZS8DacfP1fvaHeW4JB2AHQPm8G5LQZD41kNeSo7R1YFiBrCk2vP95nZPK",
  "key40": "cFB4p2xvKwhDSVe4wrPqRyevbZBNtGAskwciwnVXUXYcmJvFBZnMuHWe8FxciEBJ8cEQYgi7LMgyfhjjhMS1QrA",
  "key41": "4ENUAo6iDdsnJF5dEYpBfaQChwMx7iNyzyUMA1WHK5eFGNpFPfXjpBEX5sT4ywfv24gET59QGgzUmgq8kpyEZz1e",
  "key42": "37royQQWaF3CuB6hkYuBhAnVv3m8iSh94bAvG93kfFtykSon3cBdYTBupzxBX4AEsi8SehGpxaCP3T4eDEuszeC4",
  "key43": "5WENbTEp4uXcG2HoWahMEht11vRruhUKobafGfBbjQGbFvJcWFkeVBTKmZ72PqdS6J9BQhSXm8bN16zQP27jdwqN",
  "key44": "46oEwpJsKCp9wg52kPcArnTjUxZB2PREfL8C7aX4a71BEWb1iWgyCnJSRP5mBsZ8ZZMU98JjWymX7VFqFcvtCrKb"
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
