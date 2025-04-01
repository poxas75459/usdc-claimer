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
    "5VqEWpDrp8DqHAPARaKAXB5zTtMV1pD8mAokG4nh3fpScdksN5nRaepuuKJv6NqRT9sBKKyUoc3pQgQgSeXgSAoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m5kvTJGnpb72NQerGHrqGV9WrUDhx1n9uLrLPC5sJ4XN8VzZDFhd4MDvXfLw6XWSV24DJi5PEQTqHgRoSkcLhBg",
  "key1": "45vx1djmyyUQxmDPRpXRMpb2tZ2CtUcUgeqvoejF2SxbQWpC4YrMCLvr9U4g9LfEKHKvBcKYYx9hahUgPjo4S5EK",
  "key2": "4DmGEGhYFYHP3wpahKEWJ9PDfL5Amh4jGacT4tbwhf6nNgaWiGPMMQ4qTUX9WCfM2EyeCKwfqF2d3wmBNbYdux6V",
  "key3": "P3RndhfdPv4X53jXsEqdj3xdAPVjSnbdPeMmPKY88V8q4yKU1ma1p7nX6BwALnzB3byRuLVksTvpH4TMNLhkDV3",
  "key4": "ZGXo1zzSswWGWSmPcQKruASQsPPnSx77GF3TsiDGu4K1kxMBzxHjJ21GYamKhZ9egrVcFwjdJEEhsrBaUWwAt27",
  "key5": "Ei5WLHygR9YDiHN23wXVpWrzvAZD9hgcos7z9XjSt4w2i8TQ9ZeeBfoBVJBqhdzoySj7dZadjoMzCGpENzyvqbR",
  "key6": "3C3bHVZS6sAgQcbBv1M24EDpszmaR93m8bxQYMgCDv4vCjWfrAqdDvH6aupLiX3eAt89FDpdWEXqMmjGaX783D2Y",
  "key7": "3A8SYEWC6isqgTXDD7FLhpNDT323sEZqouBbA8EriKfxetnqJc2dn26z31D2RFJ95CF4WMhf6AFs8azDtUmpzWNh",
  "key8": "34DMk2DaaoHG34ehdLe68JDiFMUzkrtt6xKEu5bh9bL9QpKwnHK4HzDm9mVcMnnXiajTDjRfH8vzQsjipw2PpsnF",
  "key9": "HaBJpPYdx8esv7RrTRA8psw9VAYk66zKz1onwrk2m92gwMXRj9JULr38C2XvnvUqnFZxramcDGmeiK93pMn5k1r",
  "key10": "4kQKTmfypGE9UdkMvUnLEvLC6nfDL8tCJ6wwQLskRZGq4E2Zo5NYCYUX9PmgqmMsac1bcA16GvcLye9PcoGn1HGK",
  "key11": "3GgznvCjt5FDZQH3FaRA6PEN6LEbQnjjLf1JHUnx9tmXF9PBN1GNckFVK2vDXZWdt3ZyWiBp8f7xnPG9dc7NqBkd",
  "key12": "sebNTJNZVbNtYB5YdwaasaYSBEa3EJCpv7mUaHt6hkBZrvqmmFycfZ77ywMRkLXfr9Qq3DF2QjNHDKEuAPUvvQW",
  "key13": "52NrUZF6pQntiaPeaVniB2oAXsCLAdrH8LTDwcdkqEL4zezeJe3D6zXA3nqbM18YAznED2QtQBWL1FFikY6RmP6z",
  "key14": "3p8ZgvhuiMowZnXFgRSYqvFe6FMyARuTWGRbcJ3sQ1kwCYW2kgzXRi4WWWny8PFGmTUKNH8gtixQAxFahEvmPnoA",
  "key15": "5r8FTC9QamxA8LxM1F1fLyh9t16yXxz11PjGYMCYSAwMjVmVUsQbaCjyYA7PeCfiwhbwsa1q7jU9jaUnX71N2WYo",
  "key16": "5GhJRzunREyEyjGEZN3ePA2mXRMTecfDPeBKt5fvypk7YdRrdiXe7YNK2SfFRm9aVoKAxTqtBSvocagwzVLPfJzb",
  "key17": "H9wGZ92WGA6Ccdrc3k4731TnEEuVZdfPzsD8dVVmXzNbRjsLNCY15exZcdveRanAurLULtqZFaLs9T4mwYauCv5",
  "key18": "5x1b3qxnbwJwgxiEifeg2q6FQkihNbR9eUYeHuRTo5P3h9k81rUnRu7R7e34n4bzgF6UtftdbWd8AxgrKVABDz5j",
  "key19": "48xd2JmopNXRGaJuuP3LWsqnoXfwoVUSfDRKh4indEWe6HPetjnQ7Ythz8jxM2HkV9DFWoZdPrvWykvQDXWztqj8",
  "key20": "3n5QEhJmFo4PouBAtN4rDu8xjzmdZWJz89M8LWTCHQS4YSucK2HSJUFtjAsGB9pfCvo38mZRYN4tFog7XL16VSrQ",
  "key21": "3gRnrVy2CAWdYibQSmTcokBpUviuqX7ZtLLqVP6p1qbL54VnmRgunpg1KRUjTzRdr5hU4c1CeVGAHbCmHQLW7NYX",
  "key22": "3cwpHiFQi4jace7Ki1hcUyuCD9y7fSdPExX69gpKmHAFmdHNPVTwmKh3C8FjyQiQQUP5fPqTmXHXRrf9X1ji7LjD",
  "key23": "JcZV1iGbNJbgaSu3gpRMwasDmaPaSnVxm1oWTZk8LSTrdybTc7E4V1MnGRyt2purmfWLGrnq9GNWWRZ9ZPcj13f",
  "key24": "2EVFMdNSL6ZWQHnjp3z13VcCdRvTZt5s8cFgHRMP7uMCeCmUQmf7Cmh55v3rjgWXECpDnrYJDoS89qYZtDUqm7E5",
  "key25": "5namJqV9GjgFWZzHF64XxU9ZmzQWYsR6g2kXs7B652giL3A2cKuhjiu4gWpdT6gWf1DXAwAtcTcKEQi2oqJt4DL",
  "key26": "eCcy81J9exFEHLyxnn93RVpAF51dNo9XRAH8fk92iR94Ph6nC62CLzSHeaMivSMJ2ScLcEqtM7LVtpyn6cjcFFX",
  "key27": "2TRKh5gVZnrV66JVc25G4gLTst7due8WzZAQ7hGXb7Z2EQMVaCVWR8XA778xyNoPFBSeu8NCHiLqoeF2oLVhpEX8",
  "key28": "4sEdVb2AjvepXEW4xmSmNggdwwB3ks6ZfL42VxRbp1sRwcnTjR7tFYDPCQWcD4NbCWhsJeGbuBEyDtDPr3anDEnm",
  "key29": "4Pfn6fzFC4B8vAZnLJuN7zHSiE9ZVsYHRSsDYECBDKbxbWnnuGfAxNEmcAKwniF3bTeHpEPqF6kE6mETK1RRmEZi",
  "key30": "2ssQyKzbJkBpPGWDLXrziaRcEEb7oCggJhEd8GKJzhCqfhGkxXaUzAA7gw25cGFTr3EamoaZNbP1uJJB13E9qTXf",
  "key31": "2ZbU5UUGHgPJXs2CDWyrh1YaJBz9H3QQwx6MNtJ4bC3dqvcW6xLztKkVBMXNpNc4g6L9KQprXyBEfsQsedmKsq5Z",
  "key32": "48QhHH6ptkCRWxxWkAAmywLNoD6b2bdWmVvVxZzdjVfeTuMzaEJZFdHAVepVWkZBZmS7xZVHyyRGH2KLnBTGXi9f",
  "key33": "67eERpGiPjZa3TRjwRyHcUj4WCGbGQUjSQuntapCFU7Bq1ALFhwvLhzqage2Awse1gQsGBnqtXfcjjtVQSVWsJFS",
  "key34": "3KDJArjTeK3dkQwYvmmoVpt5ohXq25vnqC4U8kTLz82shiCEdS2hGSP3rvKMFbFbDD1NXcB39H12Gegje7w4oVXC",
  "key35": "2kTwuqNC7G72XEyU2UwYpvDamwkqeo7t29iXPkrAEWqYHQARGcUCezzRB9AU17TtRFwQtxk16qZ6U7Rjt891Lay2",
  "key36": "3kn9ykPFexNHbHGXXYn4ag6K4vyFt92wVKS3Rbz6SM2PjGzyuc87EngTe9f1tjd72cKtefmeLDszyrYoMhSjaA8m",
  "key37": "3bqCJ8miwo1LjW8JbfrYKUmwtpjRbR7buakZ1tZRLEfoEwnjQ9V4KJ7LWgyr71TwkNkU25QGiB8saix8Mf4kr5yV",
  "key38": "3uuJrYMmapi4Jbkx9WJxzTbEqyHu2t91zzadXqkUBdEPJkH6GixPCUccrjSSUnmwayefA4GzVg1MskcJbUAarTcj",
  "key39": "5zeNtoNQZQfMQiq2YueTV59d2YDnXRxviqPJAGqyqav24jteURGdenb7xorJT69yoLBv4L6vuVYbMg2ahMMMZz6D",
  "key40": "4XqWTptg3eBuJNmBX4aN18gVv5hMkuCExy3pmYYqhcKgBgAB2bDeumS4n1uyPHNLuXitNMBQw9fGzKSoG9DRfzgS",
  "key41": "4z4T8BcxKh6PjjFGWWVMskRhu4Qn7EUFA5gxcCTvK8kGPfgyMGwU63bjqHHsXcuCRPuypcD3QxVjidqktA6huuUx",
  "key42": "u4VvbWR97UJ1BQvdkT4qytK1EFjm5oE1yTtwMC5F9W8U7j6ye4LN2Neio7zpSWC3CEdQK4kFBYp1wppWDaSpqdZ"
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
