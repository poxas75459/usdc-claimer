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
    "3SJvXYwwsQHyrtXeTH27a9z37vKu5zF16HWGMxyEZmHfccLP6MmdnDbyWjVSR23MqNuPW8J2wDSAbw53g6SDcfRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NnyvKtDejhXsxDiSrY1m5DfxqSpF9f4kgYDSnYzk8Tfv4KNhDhrRj6QqzTKjwPLvbmgqsRVV14hPaaciTL8hD9K",
  "key1": "648qpigQaUMAfAXYH6qQib3oRTTJeaxtrCfR1mwQStg3iiwUqyjZuqnUsff2Ai3CAP9RgEVpMNvDxo4aX8oCtRSA",
  "key2": "2FLvaJSheNCB7N2NWc8Y9jfZhYsaNtzfsdYUxB5V3XpD5W2gW5Pgy67sewgg4Z9WBdQUSx7XKDUzPuPEA1v3sYFZ",
  "key3": "4MYnaRG1usYVsoVSZWCdG7tzUw2GJNZuYPrQ9qNN7BmnxTVByebXbL1kqZFGYazxjDTxqVYVXRc2jCGNuHkehvGK",
  "key4": "2ESwQXYK9S5qtuYcxSDGCgtbv7y34odD5rdy7PoDmW25Y8Rj7mmntDcha1RLj54MiMRTyBRJGvCstxE1p4TzJnJ9",
  "key5": "4HqicVGkPYH87ywdRQ6aUdrHvte8iws7MGwc96zhMdLmpbHMMCvUumwujv8rWiXDbmRVPCwP9vEBoEYd4idHHfRW",
  "key6": "wNJZjTeKktLpEDT4LKcxkTEEHM3VPEgbkSMskBdYgXpbr9EKNHDqSDnnrR4ZqE3uqzobjQUVJigzp3cBkc84PmP",
  "key7": "621mTKhVA79cQHd5NatW4ZFX5nSU7vMfJuzNHCuh7rJQUcC1Dq2mfTEgYut3FGeFHxQHJUYLBUigLBdGCeJ9Jobm",
  "key8": "4UD5aFZGJND5jV5M73uwceerZgcB3miRpCpFGJEPYC8H6R18scHnyCzQqBZSHzy1BFN2hsyxT9oPB35sMu7nw2wW",
  "key9": "4Yghm31BCDLuPvQDWb81hpsjjHMvSMHK7VfbiDnunMF72vikdzAbDiuKBRLgwU2EsFusSHp1aKBM7kowftFmvcb1",
  "key10": "4KCHGUafWCrdK4XHUFLRETyuJuZNFkk1BjWJaeEKFZu1WkTzk44AofU2DwTjMeAUgctstz6MRTPSpokkBqKxiB1Y",
  "key11": "5Y1xGsv4uXQ4SB3YkkpGZH3rR13j4ofgPGzoGgtHcrLZGLyv96Uvb8NRpVKGtzFF84XnW6YJYLH9SvoyBRLYRh5J",
  "key12": "5dMZ7hGK6NZAYjqu4b6Tjx7M2onnryoWrZo6vinMwGfid6AKgnQU1PRDdz13178SRzuRmRBwn3XDe3mC7hQWvSxs",
  "key13": "3dK9mUs26eRdM84ejVaY5kQpeGC2SDq5kQc6inXeDQpT2uRMo2JkageSnPFsqSGAsxH2BbxUtBxmVGgvDhXKnCNZ",
  "key14": "4RavbKQnSBpZjEE6xgBg3gC5aj6Kj3gff8ky26LMzuiCBWKFv3rdbBxe2eYW8E3ic8YqJeyynoqMaNKPAT3CsHDQ",
  "key15": "3Me1gYjVw39JrCa1HoCsq3QRhsj7VJjt2PG8iJurce1jj3DZxQbLMjk4rpT3ckmBLytUsssjed4vf6sobDK8FukU",
  "key16": "Zs7ceHi4VJkrztQkMnT8KC84bAT8UccAkRCaDqozPDxmzRUV47t3izQVaDJDeW7m4ZSkCfNgeobEnDNHBkvpJ7U",
  "key17": "4QjFPd4ExPCgXhdrzWSxgDjRYJpUcvmgmN4M4U3QcTGnGPZoDjZJ8yK3KCSqbcSTwJDQRy4g6CUCHrs4ZNJtNRni",
  "key18": "3Us6Aj1hrxoRCKfzGuiVSBxajKnUBgTH7xJDRxjuvrvLm36PU8icgqUfUHyKGf5UDfiWTu6m76oSX9AJN4BP8ryE",
  "key19": "4EqGJgQr9wmZYsB7xzYEBWT9dirByEUwit5XxdbRNcqzWHowSjSwLL9s4f5FapPcjxY7tCk9iygAVYfq9DkWX4ze",
  "key20": "4WnFXACHg6Z3LPqxnLu1p33qkwLxprPdVAuoHne3r5BCUoV1WxuySipWG5cDCbLPaTBcSphzDsqqF6srJHmqx1MP",
  "key21": "mpqBVfmjcbPn1G3YVsXbgBDzrQfXmYvbCpQhcQt3myBKUGfwoG3sFN8T8sAgBZY3FrotfRVFMHbVRoExrzBQjaX",
  "key22": "4QHu4vG6n79YAX3hb13MQETwxUiaX73nPsLoAj7Rzu4C4Q8BBoqgBQov9ePatJunyZEMkX4Sx9qF1ibhbkgGoTVc",
  "key23": "4wdtfRGEsnS7CTmBexRgGkfo3e5pYR273FVwe2BWyUcu7RXZcqjneATYpZe8tXxzY73BvUx9WTttEu7QzEx4YRU1",
  "key24": "3jshFjL2qSH4vjeXqy6nT6Ki68EkQAcWspi1KaL9NNC3Rms6HTYt6in5rBGN6ruPxxBWp3zk56VNciBkiUsgETdX",
  "key25": "4JXSnqsMurN5xw9sxAwC4LsvKzyxEiSRySTgkzTowjTaNXqdYNqayjT9qZzDkpvpEkAi4odbhitvDLWUhMVS4nVR",
  "key26": "4FvzcG3xba4qWY4MfPgshveZztMYC6kkAu8NYReps7ME8gc7sgbUEQkoGeEZ7dKk4YWYoyncWMbTLWdzZuwsuLLq",
  "key27": "47ogiYfa2f4XcQ12TFT39ehcj6bkArSb3TKPCiqKELDsZGRznxRAPxtAYrFAWYBNKaTMsTk95JiSrNP6S895yevz",
  "key28": "2wa2L6q9Fo2gr64dsCoofo3isUtz8o4qNZ5GAZDc6uBbQLra7hVC2HTeC2QMutvY9VLUWzoVvvc5oHz4bM5TZTvv",
  "key29": "biNLo6Kw8eECjTC6Cyz1vsag8btCot7eQr7gpMTWJyGswY6njjATL62RSuDJxYMDu7J2HTMUwQkk1oBqHqBagDu",
  "key30": "4KdKPF2GunVKpFQWY4HkLpYUevk5FtHuCHYB1Jnx1dzAvn1SLxHKsJA89aKouAjqqFo9kN7apmwaBoGy3V9fTs9P",
  "key31": "5izxn8oTRWFMf9PRHDgeeERRu8UPLBBbcSsYyC4pTUawfADkFuvoNeSrraTgYeD2Cu1RhHy8ismgnEcTG2eFjdoA",
  "key32": "5WHaFPR9WTQ2RBVpjwDS5UnBE4cauWEhmMqjrHqo7goK8SqqZwLzGT5bTsyM4Mbow6XyovjefjjxhvV9UHLapaD1",
  "key33": "AhJv4JQDTCE5hHjJ7Zj6SHesL3YrCATHuLvEY4G8k49oRWmxhuTYXb86r3Bt1UTVD16n4U9MM5oyyvRYsNt39ap",
  "key34": "biwHLn3WQNQxjEKqS2KDi6awrW4H2UE8XKG9xeh5GaJz7A7VjZ9vq6LCvSGysnsyVuKmmBLWUibGg6h4GQwKFLi",
  "key35": "5DDrsVTL5YSMCSV4QbCdctkmbCuBmWXTb2rXBucQzkpjja58GbtLrPek6kCXxHccbNvTtGPCxRTmGcPT5GM7GKA8",
  "key36": "4gqiABkLCWAczsqtCbZJZSFakWVdzFVR8JkPhFCUnYWqBywyhxUvkCQeNAhAQBRzVnaMr6rMXRkTQmFJrwM8H7wj",
  "key37": "66z2mbjtgLdg9SyHxVkp1XX7jd7HKMYcjoYCkBaAUbL7pq41NRVZc4Vu4mZemAoHTKFXhumHgnfjCDUsZPL7xaUS",
  "key38": "4HqakED68yHC1DXjmVEjJc1e4X9etKfnqw2Br1uZNjB1D4vRYwyzrWnSUUea8QkLKjGAfc83X6CZo6S6m3bErBUj",
  "key39": "27S3dmbH77UzjEufVnHoG6cjtJoj6zN2Vo1kiLVnUBVhSVcMZpAVXevYVX2sdLdgeA9m8kkmFDQ4AUxfsmpCojTP",
  "key40": "5pGg4enLBbtukdeq3WuePCfnJq6Ker2ai1kB4vhZhKghmV5GicYbqzNLuS4jiH2gzVaJY3PKe1UVVj8oUQndo8Up",
  "key41": "4xNZqcBqME1SAFyu7HzCz2sVMbFr353ZmdjCZahi7Ca7NKQJyX2HKQdPSP2pcfuBExmZoBupUo4RUGeeTiFrqaUh",
  "key42": "YiRf9QuE8P8uMABYj6sK6Dz8icbr397KdetqwKK3GUZn3kRgU5XFu7hkrNNEXdb7JdCkgdXxEPgXYADcVuuGRNR",
  "key43": "2vVijCn6CfXPKtbViCt8hmknkLfp16HbgsytwHw97hBGr2V6dhAy4ezfjh6nUeJxHH3GoLTGu4TdBkA6dRZQcTLd",
  "key44": "4qhHiLz67hgfZmZYGosvEjmPrdRkPx6wZgxjZdcbaGFrRm2uNiHVpGESqfdXoFoEr8FdWopZpbkfS2oFtXiK3AuW",
  "key45": "62LEQyPsVPvgtPTgYWJTJgCKV5vc6uHXvsY4drXCz1hUgRL1YxK8AD9f5zGWkabG9bA4MGLDFZ3WdRsaAMrFzcep",
  "key46": "5arT1rf3hN718FzusSFLhcjwFJ6oys3harB9dqCAFLUhsMx5jDbbgUn18HzxSWbFr914AJJ8ABSbF98vsNT7CVcP",
  "key47": "47oj2cF7szAY2zDhajZt7hNPmcQGyNRZUt3dF4PPnBNvZew5w5zPFGnGEJRocvBdUq1dpqn5fuADyKHBaBLe86t1",
  "key48": "5ZdcZbjiVsR9vENT8Ev8uumUbV7yfyDgMY5u3PzGtAmiC6Epa4DN9oRdbCF1kUUyrTPK9XMMnFs84ErdHVmnUtEZ"
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
