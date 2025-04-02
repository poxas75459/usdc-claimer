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
    "2Nhjq5siAKMa6gRMrBbBi9ufkXwJ1ye3DFSYFuNEDgA1PVUqvWBWGggQttusrFV5RCeQapKUfTiK62xCnQgoLnQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44qiKApbP1AJdFy4y5BcZsNm3WXcT298vAXctbes4PmtmvPY6wqQMcqJsAVBstpC9NPCW3avbUB3sT7uByEgqpvn",
  "key1": "5a5uu4SWPkWcdFs6C4HxvcJE9vfHxWXRYix7hpcwR5AMB726JNX4De6Lb1qtggngMFphyzee3r7FFUypkjNkQfhh",
  "key2": "5UrdBQvuxH7vRVSXxzZcF92WHkV7KQMWq1nVsjQPqNAPhkCY1LvhpiuLXgpGaeZmshcukGr9vRB21ron5VbfSVqv",
  "key3": "3Ji8AvhSdnDJbdHswWQJHiR5gR6qcPQXW8EmnuvEQzAebZt78nbW86eFctLdociBNBBuEn6t5y2bq2XA5ow8KpwR",
  "key4": "5nfxk7oU1tFLrKqfaVfToUt9vbLfdXSBjDgkmUErXCVsyTHkUS9MZFhT5C4MRDEXVtbnYFaHngh6bBxdPLBi26Tk",
  "key5": "5zDWBGkBgLjxvukoaNYrwqu34QAT2JxqqsiJipTD8qr7X1PaFxDU5xvutPt8S6NXoc6EhhVtC41pgYz6xdAzLxpj",
  "key6": "2uuq3hNCbNEhZfuuLheYXb66eA4keLquQTGwA3wbfVL8rrhYpW9fULrwQDQhMimPJvGz4Sz3Lk2bA6PmPWJivQzR",
  "key7": "kT6yYC9HiiXLeWyyYb7hw46LuL9ZU4VZev29eRVb5NvJ79oUhNrqyLswfcPPihiukGWfYpjeJqYYWNyZ9LigZT5",
  "key8": "3jGokhrj67oCVr5aDgkHoou4HnTMUVB2LmYrhgQmjoPbe9JfTm7C2Gmqo1u8Y1r2WVD1xtPbZmiGTaut128dcDiv",
  "key9": "MzNrxfPpM49DhwQSVSQBJ9KyZgTfYX2q4cXUhTUbuoJmthMCGbN1ewKQwUtM7JZjZ2sr45Uw74eZv1Ao5xp3yYu",
  "key10": "2tVFY4rf7a6rDskSWkfMyAbzkwPuwVK8yUhufyGDaoiQHu1jpsJe6mhkdSK91BTGFrrmPgPhJEBmwxxgg5BALxhR",
  "key11": "5PxoWgYVEVtA7gtwbAfsSYgZE5DuGAoBGuHn1yrrrN2s6fLvFjJTpzCkv7dr5kTHDxTmH7HvfXs47Lkp6V3SDQB7",
  "key12": "5RQxLoXPcGpXL6rZ95sXFZNAx7PiQNNEeEjArQvJufCCZmt6ViS7zQCxnjSaiozHyw9naRFHnrZNVJCtZgc2eEaU",
  "key13": "36WPMV3G1AuZoGQWTtjfsy37pKogabWa5QomWHsTAHCZ3iCYiGcQJZKqtR2iyhda9VjxeHhBXXdLpgYRYjo9uNfT",
  "key14": "3BmyesQ8qsGBrYuGiyGi4UgbVFDrw5wLoiCmU44nXxfbcpMMnEb5TickycGhYBmx3cKQJcEz49nyBgohLPKBP81k",
  "key15": "3P43W8P51K7fw7zeHux4b7kPjL4Q3MqunW1PRsKXHzZqK1bwgaE6xn9UxLyB5nHFiH2C4JzKjuGmx8RQtKWRimnA",
  "key16": "2yuWwipGCLbz8wkYyDiiDs7UeUHbE1np7PZmgdrLbamhUTBT9xobv6KpS3MxcyAjbdQY5hom12pkQWkogHRPzRUK",
  "key17": "5XFxe8baMYSt73H3oipBXR29kyckzkWX2AZMhdS78gH4PUQ9wCMVd82vQFkWnhh7aJHv7Y5ceKZhZ8Ru7Sc52HfU",
  "key18": "31dcNktQjo6h2BTg7fiJrpK1mAbC2CUzMZK8hiSnBueFGjqPKD6PVVRMrUTpGpF8FFjQUSHdjYu8FgyA25PoMesb",
  "key19": "67BhdoXZ7N8X3KmxZmJMWyHFT3mXW8wE8sgzpjQXrKxwnyUZZ126R2FW8sn1NCjGNNYxmchRw3GmoDt89Yo5HktB",
  "key20": "3Lhq1jps1HF3EoX4fwmeMti5ey3tz6PCt6kwNB1ngmYSKD82eCGtGR9Eb6yzL3pyJS35dhcpX8wEYeqUL6Ud8v1X",
  "key21": "3EkK7Ye5JdvkPDc3WDk7uvGC4BVTEuQQgYmcSviC5vtLbh565aTvP2KSdA484qgumLLTrkz52VzK7z27mSeSYNQX",
  "key22": "5YmcKnpHezF9Q2udqFMS5y3zfBB9HxGiTHZKCKUvDq7UMKZeVnDeYFgBoJXDVdGAiLv2551p6Ga8yiDVn32pZQ8M",
  "key23": "4fMtyqtVKL1cBh93prqDknBbYDkxyfWUSwYii8ReX2CMYYDCQZUJfd3CGvqknJUrWedmR5s8RZZTWvWuRQg17VBG",
  "key24": "4h5F8g3dcEezhHDzQtdhGNLiPvmzC49ZFxZnDZooQh8MAJ1C4HFU6aSsuweX2JAPx9NW1qZM9FhA5XpJjnf1guna",
  "key25": "63H8Asqwreh3sY4jTETgaq9Uzri4ZY3M5XjDMcvSmv9H26gsakxJ2jQH3RC8BGpvjKFWr1ypwKHcGRD1KMejNdcs",
  "key26": "5KCHXV3mzQNN6SdGzrMiy9GqDKJcv7R18WPX6fpFH6jo6DUdJUGa5j4uSDfF5qc6922St5C4R4KXxKk65npVesgt",
  "key27": "23h5V95yUt4Lfmd6YVP7ERk9vAsXFhiu8ghodW28mCWEyHybyWVyP1D4XCzJ6JqkootmZWH5o4cst61uwXYaHAWd",
  "key28": "4tPAr8vtMdkRviq2on9ycaAqGSv4MCVe9ksqQVWKEacp5KMEEhzf5zxQqaVXB1t5f72PBjxrnnVmYgHEA2By3pFC",
  "key29": "hNkqEwnVsaKixVkkzR8L8LiHuJE8AHr8kF6APTeWsKWSkaTJzn6BhSstke7JddKRKtSP72i1iyaBeVjX3zZeNNu",
  "key30": "whuHiNthcfASU1qGA9PqzX2iE92gpo8GbmshzFM9E64cCNJNCNg5rudw6AH9uDRWAyGksbCxYjBBPXYx7hMTqJB",
  "key31": "3LTfEkyAozqqUg6Ve4wMgWRhpM9Xh9TucNoBJAEcfhY9iWM92o8XVyLcQsyAEBUf5y8DGAyzYUsMQmYqm2UFbPDK",
  "key32": "5o6A2cVp3Y9r4k8bGG3gu8fddaEtwox62SGBsR5m24xr95bD829ZuYHBEnLaeRhtg1LpgjgmEku34Aw5htvnS4CV",
  "key33": "5wi15udfrNK5tWDe5uDKM61qvftxAFU5UUZY6nGtS59g3PuQYiuofZR9euQP4a2xbxuQ6ng2SsfAPbHhzYehbQeC",
  "key34": "3RFg7mxq12o1qH8sH7cwfUPVAAoqccPaEr1yoxP4iPLoHrnJoUfg4V1R6pbSYCcJXPFHjRbW2azjVTFFn8Z4GasJ",
  "key35": "4km3Ly2hguPJ7CSzJF3YzqbjCYMwE6STAWSHBNGbKC8igyHWQRZjciJAiW95Cax5Zi8aqXfgG8ZEyGo24tc5Vnq8",
  "key36": "2L8yFtfA7Ymq8wdhaYjEboDs1gfZxmmEkaBDoxriWva72o9gZK3sBUjC72FTjL8isvGDacMCFaeawhsRZoXTDbgr",
  "key37": "4ytM6eoKDMoAP239Xfns6H4VzCTU1wbSnv3rBkQPueeqibC6fSzAhHc7p2eh3Aiw5zgc1duBWdviqz4EXnRL3mJ7",
  "key38": "2KZt8boNuxvrRrtMa1aFkguvAiroeqYVf16JviXKMdDUsNsig74yYhbVGte4Frg4EcS6rSKFhEUiMGBvhqWLAp2L",
  "key39": "33LEUY2dBh1AyVaQfx4A7bZQ5chFFo9QGJY98Rr7zbYiMjeHTZWGu3XcDofZj37AcAqdmNATLcBjTMUNzpgBX4NJ",
  "key40": "5taGdNJTWDDkSSzpkVX4NcTU9uxwLwvMCmqeH5TMTkZgGm9rV4AKsV5bd5iBjXYnwvi7VdHStUwvs3AMCdKbp7Dz",
  "key41": "2oPAEq5Gw2zeJjEgCRa5w175dvkBrrgNrdLdh1R695VYG8yiDFrHL2pz5gj7im7wCq47wwaKqVLxtGUSSzwGX6qj",
  "key42": "4ahmaWW6rS5oq1x21SnpHoSqiFQL96quvhv2bSqwWchmp646rekUHe4wawuvVj717JGFmBJykJmsU1fzsXiPGZVt",
  "key43": "3jRvmYoHz3aLwYNsNPq94pmn9zdkR5M2dbYvdtmDXaTL7g9y1y75YU9U1oAgLTABMoCwF4vJFpnjYiwfd63oiduh"
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
