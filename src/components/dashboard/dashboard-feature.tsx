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
    "22L8fFPBQ8LG4c79yZGvZeQkQE6UpeA7RxbSdpDLCnTywuRgx1XKo6bRHd7EMSHodJ3esmknqnBmwUgcnSWZVhet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yxbCKQWcasi5Tibdhbn6wQScsM7VnsdmggUfvei5rw45ochVEinQ6aB5D4G8NTSqhQpJA84FQMSyGmcFU16ZgB8",
  "key1": "2hk4j6bBC7Gue769mfoMTXpRCPmEvcnfZjpdwzX44FmYTvnbfiHGw47tiftiXQrzvrpgyXajEy4q8rnKaFiKAF3G",
  "key2": "3srueqr26R8Zcw49fKkneWC4hTLHTP2D9KDabPb3uQYD6Mghh8sGwzo9tvVCbfTvfiTZ9Mg2q4oiXiMGwDxPSFBa",
  "key3": "Wvriowr7LTtA4UH45i9rPZmxh7jkPH6xvdwhmshayW7g8PHCEdLTUXEa6hTc5f7niWESTnJxayFnRjhkqVNQhPL",
  "key4": "5DeSrhRTtVYQnE87Sy89eGz4XJsViiwM4dydVHyHrBr1dYeEqP4Qz3eE5gfQochELnDwDXf6ZCRwdFpsB38sJApe",
  "key5": "7W6bsvXv5j5i4TFjEdPQNgzVbMJcPU9dLqEgRdFH96nxQ2ETBjnbx5rL6hyb84umWxX51guvUfwJk9TiQsqwTZg",
  "key6": "2GkvuYBuNzd6G2TGKwDajrwimo7KZ7hN47rbxcJd74SrBQL3Mg9m3ffh6hXcAATyLBXtmGv2XYgTpXtwtBQniY6e",
  "key7": "23MCbr5YU5Ydr9dQ4R4uphPPdNBW29NKed9wnYd69MGZrBm4dQW1xbeKjTSuNfXkEBeaZdFjG8Vx1ENSipAQkRT4",
  "key8": "67qoHR7erzBXpHU28kqRQqQfZ3NKjNgGKx2xHH55cXbC5PEozfHET3bUkHhQxmKM73k1ZVj1r9rUYU9Hq2MXk8CP",
  "key9": "3D7Vfpn8DWzXCWa962z3QJyuukEu6UMX2NNjSjGNybumzxuE4AwxFpamr4vyR4LDqzANv3XR2fNehbTEomWeBicv",
  "key10": "2g7zBpUvKoqR2TBxNtnsd999EbnZ4gBdGUnzht6P9M7kCEoDnytrxkSLUk6iqp1vD9LT1tFAdiBr2trBbCBNdQB2",
  "key11": "4BHNFNxzrHd4QRiHmtwwNhWAzsT3tNTApAw3up2McKwKa61mzLs6mgfH5Ugf2EeVomKdF3Z1CGbNmNQZ66qYZXoT",
  "key12": "5xzdTXWFT3TKXNkRAJuGMsNKvdF7bo7wLR41QDmUtXnL8mNMyQC7MRGXpZLN958M95wPi8sEs6HprbKfjkJe4mte",
  "key13": "3VDDhRewL6GHMP5MWz6b288VioS6uLJ19zat1azCadZWM4sNC6SmdMihgKsXSwezPZqyaoj1HSb5SfGNeUvxEyVK",
  "key14": "RsWjgK2L3XFnTafmTzU4CPb5cEWk9DjjWidtJsPQV5manPbz5QN2foZgh3A5zsnuJ7SfnuSA4R5SYcvdW6F4eL3",
  "key15": "4n4WJNwWAFSEKrK9bsadsS9eueQSGj2zgUrHs9m37czR8GbzTDqZsSMHd8jBAZ3oxmZpBodGAyUbCFHVs68Tujx5",
  "key16": "4gQmcw7zs1dWa4ZeB4zyes2XFond7HQE1jaffksBmNf6jf556gCSuG8Zi9U42kTAgwLXBEyffT1W1V1BtcQc1UwJ",
  "key17": "5Vt5FE2pJAiU5DDcVKC54e1qavAMYRfZp1w9syYMpJNa5d4Dep1Af9gZ6hc4txih94qvUSKMkUJTVh2KBCKfMVUr",
  "key18": "2jrbADsx5Nz74sTjxY9ji13fdGyF3ufPFPLhPoWhpSSD514EWDxKLnFEBchtAozhiuaSvPoa9Rmt6V6oaf1pieBX",
  "key19": "57inbUxV5tGyU7eSqPYMmTEXViyTt3Spw4xdLFTT2sYVT9yQzxeBHgL3md9F79TiuBbvBhvM7mx2Wq6oURtzysjh",
  "key20": "2jQ6ZEbKo4WYNmYHcz4UXYwu7knec8v4nnZdQEhpLqXspXGieCE3muoBB72ohjLzHmDUcauzynH3Wfx9fMytriSs",
  "key21": "41f3jQV8EyJG1ZpbiXVhyzz4FmREmTL9Lq3LN5hc3CUXN2r3MV7jMnh8Kr7hvWTuco1aeX28DFBaWHA1ex55enSK",
  "key22": "5dqR9TfQMDLwqQTHKXpg94dC7SQyPXmWNuLt9yMreMcxZXMcn23NfUPkavSwLFHq3XufvBMFBs78CCukQTvhiE9D",
  "key23": "3Je8TaBvFruCaRBURqfE3yWEVRMrp31EcP51ATK6wbwjRzSFQt9qBAHty6y7FJbxGjssxua622qmgyVTa5xCgf3K",
  "key24": "Ar238wuTV4XmYyPR8sMb8zdiEtiSnGU2R3GMhDbMLbuG1LJbFHzQtPXi5K8k5zQxA4cGBBi5GutyH9QAcP4NiVR",
  "key25": "2Rbd7yN5EkdgAgdWudqUXCnXLwsfXWMqKCKNmtUXTeWzKHTqQ995HFvdkh1V8MxxPuLGN2QxtTFVqeqmPcKNDnLn",
  "key26": "2zvrk2JgmA2wWhmKoDbjpSG198jBDQquhYWxFKJ8FyoVuiu7xG9Dw6qTFv5E67VmWetJdTvDoA1BSHPKsY61sRyc",
  "key27": "hoH97QnnKTRZdmm9JjJeUMeybUQMWVjxzgA54A4v4uoBtJvcdz3j92Zzcep5Wq6TAnGjpacmJzJFUoB9fiHuZTN",
  "key28": "3GMtYCxz53GNrB3ZUeHjG4qYvYYEnctYxn3AWtGGEBY1Uz4JZf5NFrq5hZLU1ZHQLHmfxUHdG6DXi6eJqeFf3bkR",
  "key29": "49dmbJaoQ3SXWQivNchiPUrVgFR6UF36TFf58tFbGUi5hoaUVWdqvki6wVCmeR5w7sjm5Nytu3Awy1cAGbLCxnEP",
  "key30": "42UzLP218VYm2MSnBrDvJsWs558YMXuRNeR1poSGckf5WXLz424iSEpRKFotF2fLBiqCpxRn7pua7X3RGUt8Hamx",
  "key31": "spTP3rAmGhBncqAneNiXPYLveYAsTuaZmBC7d6spW8bo3tnZ9Pzw9h2fmAMEC33sSJR6Z1tBFQCPvtdJnFsZVMD",
  "key32": "2khYfkAYXroYRFiQQzGcV9Ch9iGfpN7uYhEE9dsJrog2oJxEJr22LfrJ4QWRwFzR72ZTEtUCMyNfMFxYHeyff7qm",
  "key33": "5xFPgpqjGyn3vTcRJeMm6Lkikk1Hs1RnxKLk9tuHofs5TyuXeyRfYn9rYk7oS52ny6osyu2A6nF2pi38T8EdjEEY",
  "key34": "2gnCc5QPU5DnkYKLai2ZsJmZavueF8qR3VPQx184QhcdzAuiMDayeCJ38SNG3vqhMEjUzjGU2FgetNLPDqpV2GPa",
  "key35": "7hs9duGd6ZoKBz6YqHdGz8LLPRqtQhRBxJyBQqET99EY6FxboGk6xMZPecaeoCxj5XGAk4ZzAzKRJR1sLNxWYT6",
  "key36": "41sGH7ViP3CdsH45y4a2yzDYxZ1UjoEdyYRR8Aqg8dX6gJpNcvR7LGS5diBFDvtPL8mWchKggWYJh2JUb5GuHyKz",
  "key37": "54dbh6Z8PMyBm5T2JAauncRpvgwCGVKQES8WtaZfQVHhnHZY8ArbTvkE7TQDZY5wrT3RYfjzNsow3NsZUztJgaEP",
  "key38": "3veGG9LQN3PVZZsbuaPEGGEkfzgKDRqtb9Jd6DBXeV6fHFFYH7bQr23z4ir6DabBFCR4fqS7VCfxm4itvkXVEGHm",
  "key39": "4E2iNRW2HpwUZ8co964deQSGSFjoBjUAJrdjsaronyt8XMn6JqcCX7sWR8JfqEkEbBXqiC9A33nZNfEkaDwPNySC",
  "key40": "2YpwGqCZh4r7EQ5yGQJ3Ajg32PSHYqGsoumS74wdoRJcKdEhDAoQupQqqWno2oujuYUdyq5nWBPPHTwUTiAGPro4",
  "key41": "3brxuESEEaHcj8777uHrT89NFX6SjUTVqw2BrBruEHAw9XsYbqj1a8cT8oEhCinhR762mp5omL3UgZswU57gkpNk",
  "key42": "25W4J1bVG4ZDfREYvn4cUc7byrx5fKt4r1dZNB3KdNDQfXKwakdKAjkSubhZgReGNSJEfKzwZZo54urVG3b63NCm",
  "key43": "5D1TTQiciZQEAk1EQgc9GRxn7sXh77PTs6KRdDwQJHtLexHaAq3Jo1UKsqE5kZTCcc3rHvJ8dvYbZucDUTSDToEg",
  "key44": "5syK6Ls7ThjrWNiUfEZnNi7GTx4Py4TNmqi2BUqABa2ECjbeDLCaJtWawzoChXekuB8DDYGAn7JnHMLC6QiQWaCU",
  "key45": "4MxPruTGrLhiY2fgcB6ppRPydYQDq2M7QGneMELNcbuGDWx32G4F6w989fTysrxxtZyStQadhmDkkSGHkN5SaU3o",
  "key46": "4RtHWqPZ2qcFCk8f9FYCeDX9WcSW6DAj2kbAXriFAPd9cFXsSs9N4xzTEJriodzr27NNCMj2VA53vHh7Rkw64SDc",
  "key47": "4fSFr6n3VVaKJQns4Zgp549fUfuxMRGrwEqwDf5gFqX3g4nuwjQr3XG5f4UAQgU1Y3kLdzzesSgNHam1UGwC9GKX",
  "key48": "2eJxKuzVbv2yVhY5iDarw3uM1vdDh3MGecJQJVdx2LsNxN7C6aFn1kocuuLhRz8fHH1rhPZWC5gKd1EZ9FphMnCG"
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
