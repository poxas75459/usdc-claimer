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
    "5uFv8SH8kmnG5GnQtwwnjFmLnSMfRvGwEwXsmBrda4Zcf2nbwSwqsdTTgZq9hM515vq5KBriFuZ1xXKHYHsVmwES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HuWAPaUpW5Fg4rnXiPNa8HCsUsjVrmmxCDhXATocdYxzvUro8XXjFZHQcdfo1s8bnK5tmoNGXqCwPQSTEfv9E49",
  "key1": "2vZ3ughqNcczawCtoQkcBvk1YXcRvQetQTzJZa3Q3hXjwaandxvYSN9BgzVJoztNba4QEHM28XxY1BsUyfWgvUZK",
  "key2": "2Z4cSgBbxvRX5C7zsmQKG1ZjWb3sJAZHiPPH6DR5sFRX3g1PWDhVWrv4PyQKJA5j3FjAEQd5QBMUBJjBuKvxXATt",
  "key3": "5Q7s3akPGpcn8qw5zYRDGMHpDNLDxrBY1KkB7PUzQhSz85GfnHrw5jBTDLBUeYt4HG37jvjueanU52PWegKuypya",
  "key4": "25ixVyK4PJEsJ5bJpEpMCJs6k5vm8dd3bjizkAEbgU93gywudLwpeQES94Xsq9p6uneK2uUzGzxFEoihSFoCdMJi",
  "key5": "4F7Kt5iibc7MvJs1u4i6U6cqYM5JVny7mNFdW1xzfrMa2PPAGiB5V9NBmEKtMtjRhp8VWkXLxNUuf4B1a7vDPH9a",
  "key6": "5dkyVtZ63JtCo3ygMixa87McDDbp7CCYzmqz54auoj6MF3Wngn3vu9GCYXErExrSMQ5ePyb9LcgdBgtNLJoCV36J",
  "key7": "4pALdPFMfWpzDgFaNFienbZYco2pqJoempYUYQb2GA3z1Lb97YCS1md9Hpivf6TmXVNJqjXZfudtBVYvSMXaYaZX",
  "key8": "4VbafXLG38d5pSemGB3skmzTsx4qW64dLbsKbRvmwN7YYvhZJwHpaqA7wS71v6pkQ7chApcRNYFNobSJu5zazViJ",
  "key9": "4tKDkiSuH93CXcgHTdr1k94wNKUi21g7SrppiCWNuxqNXbEAXZ1Ms8Lo7MdAsc71PeWARLptpdVfBg5GHUaawvMo",
  "key10": "3u9Rjf5TdFigHuBfFyUqegN21AUY3PcGuE7AHtKVepNU1xnnB422wAV5NSNBHUDB9mxgagGqv5trjnweu2y4nNgS",
  "key11": "PvNpHJNwLqATB5oKKGTSHhergMtWucwpiMW2FB2nrzt9SwkFT6xBujb4Un55QUT4huGHRNgnyftorBXgg7RLAuq",
  "key12": "2zRag5N2vV4VYhVP9Qb3NPns8eWpNrqbfZjxYV2pBafJLoy1pFVFG9LCdX92BjSwdLq8bAcrCgp5svDo5L7D3MQh",
  "key13": "4B1pUubdMyJURaWneS6EEeR7wnrt4KD6jKXbX8N5Zk6nSmTgn4EXodfjPZNW35CLfXEXBsDVTfDrwe4ee4tfrR4y",
  "key14": "5kGXG1oDbP2V7xES7emcknUouaV6Y24jQHDo93GJDEvSpyxDJ3a2Q6aY8jtw8ECdvyTMTxXTp2ZWjP6T1DfsNxJJ",
  "key15": "5fkzAZmNsCcxjHLq2zZ8cPJzNvi4L3PzHeeRYKuz7Xy8BaFHAXZifZS3GvwbCAw9ksRxvy22VnFxTfAmw2B82b4p",
  "key16": "4SCY5d7wkU9bsM1D6x1rtPz6kzRCjgXYrXeF7xX5LU4SCXroe6uoqAV88b1oyZ4CKDDBNCjVootuERsBerCYYBDx",
  "key17": "58DW8vryxHdYKEq44wkLQ5C3JZhZ8sJUKzsVGgLNLiCWjxBzZupip6ZWHquYVyJ396w69RN6fmx2GDxn2JEwn27Z",
  "key18": "5BVoEDRKjSMgRxmwMtZqJ2mJiidZUo8epypsgbcpNCkgnuneRSVsT17MWciJgqUYEuryZ38LMB5JyYDh2cqyUHRs",
  "key19": "4wtYTfDLjUwiEmfVjiPAJJ3RnGHzCXhKBvFLgTbrE7FwX1VQYEzZMdo6smhk8kncbgF4ttrGMFxUg8auU6iFoBYX",
  "key20": "4nJgTWR7bAXwq4CUUiYUBY6KsXwPsQzwEApmYJUS1fZfdiMWzMcZx1zvVjhajSPgA79UhidcJk32wNR9bRTzmNFa",
  "key21": "4LBTyboFAEhZA3R23bFW2bXQFsbMufsVS298hT7N89EWGZ54rWCKKW2VL2popfyiXbscB8AqhqmtyqN8nekTGvfb",
  "key22": "R44rgR2e3tdCRS5Fd3dR1zabGE4mhZZ1nLLxGAJgG6W9VW9SdGF5sDk7F7FkJ9sPpveuJfkJ6fAPeAZaRrdptDf",
  "key23": "22dokotjbaLR5de2dHefkbmVBGwL1pbURhZKySgrgzrU8UCy7YCRZEyVZFnjjwmjjVDfNM3sBn6zbryE4DgJGuYk",
  "key24": "5WabGHdTomAPZWFcLhAD2EedbRR5mrxJbGV3y931k7aEUmu76qD24x6kL2BCxHEFygLzmY8RtE7x455tQbSwF3qw",
  "key25": "BXNyVcoZHb7pZR5tSbWSnKGJVBo2WN42Xj1FeXPaHW5y5mX9jtFbycyVMS4aoTydqhYenokkAXWCYoXJ5r4xP72",
  "key26": "bPTNrUyraXaDsn46TFxcbBn6CWM2jfyVuFCXjk6dHChgVivLDCRWmc2FznFmgwQidgec4B1ZUtKzp7e2JF62ZqK",
  "key27": "4FZBUQbRgrSi3tZJWYGZEd72mavu2U4NiBkWd19PVhXPTsiWzQprTtMUBPYgy8kC3QTZm8S3bLaJFRE3xY6MbRWW",
  "key28": "5X7fMMB5JneHqgw6fcrDkje5rxwogqUbmWGK19etKKCDLACrkfPjWLpuXSRhuubfEb4WmzdJ6foGQDVoydzDTgGm",
  "key29": "2BMwXAWBsWxtwCYztVNuTDxM1fUzCwbf6Wbi865bUhn6VFmz74Ld11TFHAhTF8Sj8DWwPzwSAExtiiDKEt7FemqK",
  "key30": "5rTnA3GuQefa3AbTq3BgAztbE6M4PMK8amjum1ZX6HhpuoK14DFAwGwKPAetQk8kXoF8j64S68wrQp1FrAXMwZym",
  "key31": "4hxuL5qWAv2hU9RGMYeXW4Uv2WvDXc3T3zAMTdaSqqkXNb64y8Ao4dYfx4sXbRffLUfF6hhSrrhaRYxapv9YAFvQ",
  "key32": "2rEVeiF7BqhmWtsqLrBkTjUDdqPwuL3QDtXzNYeVi9gF5MvL6jSbDtG7NJLKMV2mugtDjPPVT7VZ25xBAkpgW69f",
  "key33": "2ig4zanL8uCt52ZqZwHgvtnZdYyBdDWDSgoAPNb1pnnH9kNWQeRzT4aeRTjpWFvQsey96vTTC6XaCwWStSLcJYqb",
  "key34": "3B5HmZ397qBJzYT6UxqhDPhdSpsdaXMnUZ4whHRVxiYjVEKBSS7gzYSCeHR3CoVTgLrLHMSxBFSftUnQju4gvdGZ",
  "key35": "4arUan8dNFpUnRzqU1g16zNnyjLCGjZiLXd2pe7hoZMW8w3g6xPX4asMShzxc2vDsCK69TCiz6MN5JVAr1cN9qwP",
  "key36": "3CphayTBmKB21xiuuWjtDYRnJfyHaio2DyRfBnd1dvWbuvvScGVMeaoxAtVeXFnykjZNaTePMxGLWyVjiw8Kw6xb",
  "key37": "4QrbngDzE6r2TtuntwcTx9BrVYSPCbYvLHsyzMwxMVuQwo3RqPJhDgn78Rmk9rsRgiMGKSGRsxUEmGX6uAuaf4sA",
  "key38": "2gkCyFQUjVFhuXu7LhW4q9VKs1n5pUdYuaaYJBwGGQM5nEUtuxRzU27zkDtS2udi2WBTa2YqUYbf4UNiJ6gKvEHA",
  "key39": "5y3TK4dj27eM3V6SfKWNsbKpqXedvEqDbLHqAg5o1VSEPrcTrosQyd4JtqZMD1TmzjdUE4G5rMZfUbGUPYWPp4LB",
  "key40": "511PQvMs2TKGFFTsAwvia3m2PVDv9UGBrS91FwV7LAgE3VMd8MYyUgvCZbuQKn3K5hxojvYgRbXsjnBDd1866s1K",
  "key41": "4GC2A8n9PWsPNutBTWNn5giFPtsc3jGuv2AHik1N6QjKGhvfg2ChnHay1uMymPRjt36ZeVEiDFj2KNFqxcg4y6t1"
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
