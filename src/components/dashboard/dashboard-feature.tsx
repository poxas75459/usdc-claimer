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
    "5tLZBUfAqFG2LBji2kRmJ9UPJaHEfaNc8fHkSszLdxyjqDqm6Kn5W9mcaJH5qeaysy2iQebKseVpykW9o3MHGJdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QXyUSE195iQQkkuymfeEkj1VNo5PuWDBxeYUEkFJZE3Krgcd6uASZqu1N76eMJ38Xi1tJiEqpkaDiynnJVntMnN",
  "key1": "53Rhn6pZcUHa42v7KuQFHmCZJwhzsAMqxo74bhyHBwE8pJ4WsMgKnfNDQZbGg5fdcF2LPgiKrVstUmz99K2u52eb",
  "key2": "4nEXDtbUhqAUqLRdY75DrD5JBoEtD38Qyi2h6DVSZUWMbrjThqKGpafhEPJRMXsnCF1gtNw1ArsS4Ck32AVa1HrH",
  "key3": "eSyCNRDJayHgqPLwpyD3ZrU1zUUpfUUDT9g6R2VcELCWiR9NRu2oToFdKKpNKQ7XgaRuJiTd7bStNdEYiJARY3c",
  "key4": "5AR9nqXuXpYWQPsXvsxBYVX4uvZfqQCYN23hS9i3ojH9udnCWHMnPk4nUEFjqvAN4oNRyqS53F5nHQyCPvXDERMZ",
  "key5": "5os6yydZSfPD7RLSbRjAx3AyVexSEbQtUG62vz2G9cT6qugyR9AMfZfkZg3bgyLpkN63jGCbLKdofXVsXGhm2Yit",
  "key6": "41RtHAzKBZoz1TFcsMS9nweK7zCX4uHtese8qnyC6qV3ib2JiL5vJi9VVEzwrbivLoAJTpGmYv5vWQhpqbUAbhmQ",
  "key7": "2fhjaWXXDCDzDx48qU37mzhA1f5HRBBS1sMLF2QuFj3xc3ofLDQoGrCfXWD88u5KtKVioq4ocrekJGe3cN6AzkN4",
  "key8": "MtLwJjwGQbNV3vekitnGd4PGGN2s8vyNMNJgsuaER9VyggZWbSW5oFiFA7KuzyBgit1dBpC7n6WDXnAPgSRbf53",
  "key9": "4tG2PMDsLcMKxuks5VyEnJm3XC4yGSkKEbdFR4gd4n1X13Fp7Tcq4W8o1tKg6Sd3uw6MPaGjGihNEr43p5f6ijoe",
  "key10": "4jJEQGBUKgFrQAXVxiUkuX8bXGbX5JVNjZa7nWz6gjtyzWhw8N6KtAL39MsVTdA6xR8ex6SiP3B8dEQ1mooBLpzA",
  "key11": "GyeD9Qw8fe9H5V9G685EjxfaCFE5CcXF9jfhaArym7HaWZtytBDyqNuq4vgtppf5TQVrrdLDZzAoZCweo5Bm3YD",
  "key12": "2mgd7L7EkYJzRR55MJ9utS9fD5oU2SRgBr8JazewvnPHaPGcuNDYtSmYT7xCKay2b13u6vFUsHH3zPfuAcVT3mvb",
  "key13": "V9vkihzFHFMLx14dkvpHzzEou979MmAPccZHWfpsAvZ19YFmvB26iGczXQXjh2pk3kdnNne1ZbVYVyVR2Ba8Jjs",
  "key14": "5SJu5YCYdqsqiGzyFDtNeemdcuRHG9oTWBDWpSe9gXadtQn5MFdJ4bbpXFtSTvsLv8SBtsfQzS8Yhy9gMmcQVmBu",
  "key15": "4hD51hdG4LdkVJLPpZUgADGdfoeb6NDrVruBnNw1k6U5Cotitj5wQrELCcv1tCFdeBGw82QN81pzBj2UQFD3irox",
  "key16": "5s8jrBZqFud33J2nYA9QBBfR66yU2z3bMpnaKuZdwtxxfrTC6sETh89Wdu33s8mUC6BnztDTMsB5Ma1aYjK1q21a",
  "key17": "5GtRRmoFkAGnSnN8KxZLo2pS2FaR5yFQjs6EJ927AFK7pFWs7bTFeeUW9sNd34vEXsZmLTAfRVQvywZhUz3BRNUh",
  "key18": "2XV1ZobyH9ZHPQxiCTEetMxskaRcW5Pq3iw669uXS36QFFWe4UgmMyiJdRNFao1SWKa6MTKRPuitLJUeGKp9Y5h7",
  "key19": "RjipmNb1qE51k5KeRgBhpkGBq5jrGhH4DFiHzVDb8wMueyVYAoz1AMWpiBYeXPPPYeWYQum2NVq2Wb8zDuCAu8E",
  "key20": "3Lxi7TxEFtBk8mc92sXL4R6w8NmQRy4e3hHfC73HwZym5yGNCHJkbC8jppQuhDXzzTbJU5upg5nKpjprWGBPrMmY",
  "key21": "5ywfb1WyJpGpYNp8o8tKLvq7LXJhhqu1YVVE2yigwEP5RPRqF2L5EnjgQUL1w8HxKmCBn394WrxgVMuA32XGDhKX",
  "key22": "3XyH8oBmziYPpGeVNSip7Db4ekcuE26WojTU1pGZbxbTQzbvYHQrt7UQEr9gvioQCeRacThnGYJnVoxgUzu2r4HS",
  "key23": "28VJtSyLNqfm1yiJV3fNxpd95dHP57L16J34ArZ4T8wKP37UYpCDBMYr8qXDMH6f6JX65FdoBqaYqCpDovUbxiaP",
  "key24": "5NGbaTbPkQ5ecJH2rbvqKGxEE55dTSXJfaq37N7PtXEG5g9YDWt3iYMKn5xZgMboXvjGG35WHuWKVEVVrwogAWs9",
  "key25": "aa2vVPMw5ATNhv5jtW8MdP5269WAcGfZAzyRG7FWZeuEqqMNirwpPQSHYoyRZPyJp43npLtbtFg8jGDdQFcVjG9",
  "key26": "4KLnTJv9v3iMoiEdAa4RbaTN6JSQiWoGJ5nkAqQ7S8i2gPtkWhSCqnMgEe7qfwKxB85E3WH32ZyVQMKPHoRqwQ8e",
  "key27": "2DxDBWxpKRNRsTMrbPJL4L3MLGsFXBLrpRCvdGaHbtPpdZTNm2qTsogZJQoVo4SYVwFVjaVD9Jm1Wfg2XN1dS9AS",
  "key28": "2VY8sPf3z7o1ovZEAmjw6qqFPNTdiHuZ5iT2LqkToryLjv6kuagARj1x9eeQ2cS4bgNdtak2TQPaKF7kMJiWA5dR",
  "key29": "66eZ7CKDKEZKZr4vWFQo1rzfSdHfNNUejTt9At9p7sdBxX9i3czUjb6nGR1yZXZkLnYxHv4kVoBAsZkbYxtr31PH",
  "key30": "2S8Ez85fkNAqG19kHuVf75RjuJFPLYtd7SX8L9Z44UHdaVqPBZQRmXavvYgTDSFHxdAW9ngGMwhQQ6yK69k8su43",
  "key31": "5epEsbLtKE9M5xNxqmftKUDvZhgo953wGuc639gWJ5LPMuHg7dhkAnYorZcTwXRvS5cv5RwaHN3W2HMHgEW73bqd",
  "key32": "3iWT82Mv7MbiawT387Vie2311mR8rHXTRrkbB1gJ3rUCoqxDjduhD1vLSVBpcHwSMoUPiZLYKWkeUCvzWfvM96kk",
  "key33": "4XPsC1mTM7k9TKx5aGadVLGyfcM9Lvecb4X8Lk4roaiKQEzYLeT1VbfBMGYJxSjGpJEEQJCPjNDTZDm675JNd3sB",
  "key34": "4VvhbQ6jZdFLiqYqLJ4Q8Rz6gUfh7skDFxEjyG16pXaQAMFSiFRfxiEJpL2NvY8gzVKtZt5oHd4VgHLmNbv8NRdt",
  "key35": "SeyzWP4mLqRMPNk6GiUiVmgNWkoctjJaGN3yBGkD3wLAC9g7MQMG96J3qhaVqm5W5UHqmS8SzPVV1nLP37hR9Ez",
  "key36": "4e1w69ZqQEmdZhUCe8hsu3wsD1zzayi2FpqXBn1gCPtJLgiHhd7dxQ4Jud9qoKgkkKUtAv44wkEY96FNWnguN43f",
  "key37": "iwm7RppF3mwM97yTAWrN9bKei9sfvtRsybQS8f2tbZdtGkQt1xcUUVFLQbrepa3PTpWJgrvTSKCPsWBFh78dk2W",
  "key38": "ncuL9qcHAMf3GiW5CDuDfgPuUUSVrMkZGe21PAdZve9YBmkt22LXRvRbyg6RNU223aUTYGiw8Qsxynj6MnPiZv4",
  "key39": "2BWLAM1VCv5GU9FPNFQXRMMy1HiChTvmyXsiTZfbpxzi1XZdFhmYfeDB4zBzqdtjGFJhBHrHPwdPV2Db6hYY1zDY",
  "key40": "5JkAvbmsgcPz4FR5wQunrZgLqCJaWsuzNndMnkXerdPrMmVWUZk7NnbD1ojerzaFrK5NEdoiSQ95qUYJ76ibnTKk",
  "key41": "2pzoy7F1DjFp1MAEUKWtMpLHBDvtfqiPCLiDkQamNJ9nMz8wKgkjmfuv9QdHKXcvm9DewXhW6CzFvHHWZNsmFmuY",
  "key42": "4HkeVvry3hnp9t9myNyHkGD5L8uMsKfcXHfPH88XhANwKRufk3sqomBjowMRziS9xiqjJNX6vRVdisyWWQ1szWaH",
  "key43": "4q53pQ2XivTn3n8hy5dxdxuVagR2PnsNq6MkguV7j2yviefpMknCfzyVq9KtmnWKr1QUo2qcRWwLYJjUDrHBqJtx"
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
