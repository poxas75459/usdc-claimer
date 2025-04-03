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
    "5fEkadiCkFRRjtfN2qddjzizonLCNmmzNvmZYHbcDrVmcACceqKxJy1FyHCsYJkKvpyTxzgLn9Q7H9nRv3v6tS3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p8nYxC2p79HfFuQd9EVpMgqstuj2FN2Li1DXi2yCRVC8NasHGB3rPcNnwjrJRdBk8BwbtxLr1EaoQTYPTeo4e2s",
  "key1": "2ruUifEPhMLKWcyKcKkbMtzj5fjNkGk99avUwjmbczPx5aGbEehyqhiv2WYwFQhBxHYSNsUcRa8RCcpGSdo38cXo",
  "key2": "48vb17ymrENFqxfSC4kHESyibM1mJJMbhQi9mfdNfrvxXUAHDqkoAEnSoafyoWNjncSU1WNjzB4AKq6Qrp2HS2s3",
  "key3": "zf3RndEEY3bxJMNDExpgy49ZDb4USvxAJysd7FYtnrJNsPuiriyyXNLK1nat2BqZ7PcYWxXEBpodJppHSKUjSUk",
  "key4": "hrmpne5VpGsL8hSCvaqLaBfRFJzRdmK7qiHS1qHAX3QLqUfKoBqgGfCSWeJVLeG7yCzV94ydVDNgqvNMSBScfT6",
  "key5": "5jYULTFM8yuFsh9PdKU885qAV9WBRFKE7Pqmid4g4uyfiqqp4Y5qkMuKLih5dDXmQjo9VhAPCGUfExmBaTmxtFsH",
  "key6": "5DwdEZ54KzcNGV25rmujRur1XdVnLbbSWpdRmhkkQ9qkJa5zn8rZtWP911kFeZujVzpgLUUH5ruB5wg99LKY5Aev",
  "key7": "4FUuwBBPkEre1VGZfs3d2dHxjhnM8xPSo4eYyvvKSwFWxqAFRSRwCMjd9qZjDxpdi7QSSbf2JnamfqmW4CE9PAG8",
  "key8": "4KxWJHZzVBQUHEqEAZzq1ecQdnV9SpiVopcMCNdtwKLpjzVLegB3jytCbYs5v23qYr3T864KpudBHrEGAk54dAVt",
  "key9": "3jAkkrR6KYxuMmxNEAd5D89sn6AKHT3EzxgfpZ66C2K3Nugo7TAd8A5wvfbUuCFCkJvms8FCAhZD1gfP6HCnx71V",
  "key10": "4LDxeHSFrJweMVwpuHB4jaYdNfJT5rWM19oXfx4ifEcsKGqoFsoz4jVwXbriEgrh182dtP2vYyuSUwEg5N1LCc48",
  "key11": "3QpCL9o3SgZNMoa5oqvndN6gWbWVTDtrzyojBnEsWM7QnBikyxo9YVMQLCG4PCyoASPqdkb8TCxWevJLx4tkanqR",
  "key12": "29kj3ztuXjywVZda8bWmfx7GM168pgauzWZQZ7AWPWyc5Z15TjUW3QnJpZUTHQ5qYdMRY1pqpQGfiuEaM26aUDgX",
  "key13": "4RRi2DF8kgvda98HrdxkooCDVjrWPpkU3jbmvUdas1pwiw7h6FEvEvD4n185uJoCF9UrDsLPneMaRrxapR8dm1Aw",
  "key14": "3X94iJRA2wtwxy82NrysdoTNprof1iXVwwwAt1Qxx5jrgMCw7rk848FG7MPi4jX4Up5VFHSV6apqdjEYXexFSuBS",
  "key15": "52n9cncjBasCWHrKSiS3gYdLPJ5wrCyhqRnqtVnJbxzicqp9YXFpB8oum44FmmtM6bfro8yxECvpXDrDRvyyS6Pt",
  "key16": "5Ha3xEvco9yRKzg8LRWdxcSSAYVVYochT58kEueLL13TqAgQtZpauD4UDdGnLUHReTLNs9iHzZtuwhPsD7jqU9oE",
  "key17": "3rwWwuGdwe2fgjE2dHreMqFhwKmuhsgH4aoL5eZQ8Ff14AMbZbk2iaJGGXrdoeosUFb6yQPZrXpqCDw8ir4j2jpp",
  "key18": "bU2PrrsEprLC2cU4y9mzftKYxEddN6SsAumpWf5EeaUuKov26WU3LGt5nnDWnhUYXZJsjjdrYYQHRE4z3uWNfWx",
  "key19": "2TbZTeFRww5Lj1bqsQSET5kdzZxCRGBme3Fc4Ak1fu6UvhYTWU17yU6sGPZ2kuZQTuAECjY4RGaLR7bjUFd3RDBq",
  "key20": "3CZbBLPH68ZCP1fUkJNWtwKifTTATo6HsXffj2UXZFGRTh7AfawXLevdbTe4K3SM9TaCPFdDdHZhNW7EHw4v79PK",
  "key21": "vdpj2nJrVxzBMdz2MY5KZ8rg1mSUtYdE3ZUJkr2ASrQ2jPoRo4B9WEszVDAyv4p46GJtRoxCK6ZRPNdgcXeiSeT",
  "key22": "46FGx7LpywXEyVQZiyHtQ3FaR1JWZHEXP9V3H5mw4B2ohDGxJEjSjzsgQCPZfGCpUcx8HK3tZnfHquY3Jqx6Vf5w",
  "key23": "pbGW9DD42JTrDxGbHn2hRVsTMmUJ65jAEAB5qNBh9cuHFXaA5sVEAWHrbBWuJNqwfqZupuuuU7VJ4LqBJEhZYj6",
  "key24": "4SS3CGR1NpTbezn3uNAftXYujp2RtVB8J7zn2hzes1QZ6Jqdj84Z1nM8PPa4VZDwjkB1zFxwjZ8cj5nFQQj7GfoF",
  "key25": "rnE8aQExc5uqxW7azj7ZVWv76EzksUBfWbDa13gHo7JbRiVyZcCNjEKFFgDBP2gVimb4qVvg49hsjYL7bq9iFRz",
  "key26": "5jL1sp4kBxbe9ypJCNrkZFpM7LdeFsbHLpeNqazF4KWfBgEveoCtnm9zQ6SJqnm57uddoHDoeAUsCQukVqq9tQ4P",
  "key27": "2vLttkTW9eLRophFX8jrh1N5F8BhC1W8x3DurLdFBYnztqQxfoXWFq72jkc6pjHb7BC8BjDnduJsE9GB3xbLqEw5",
  "key28": "2HP1bNMdnukDjA6YK5zJ8EUDFnZtYeUCWjjHrcHTmXv8vJMLnMw42fMa6JLJuLn9fDusZDw13dyjYrv5oDHDunEY",
  "key29": "znSVCDThuDgBAmWXjc7jsy7vHDD5h8oZjVL9xd44iSMAhBLZuUqcKxRYzu8Jr3TbU6US5ekvwGGVEF7rSgCKWD9",
  "key30": "2TfwdsQKP46S2ZRN16MF6do8RFGPkg7huy7tV25Ucn8SvdQiG2PHAnszCLc6QQmU7W9315CELUtQkkmfh4LdnMRx",
  "key31": "C3oUVaQ9YtYw82GCU84ALCLThtNxv4MRhggTGrVwktPEW5K244jyiTHJcTqEBVxuGdfTF5mk27TW8MvGmhRPbms",
  "key32": "2V2tnN5REbsD2aQ7w7mxCwrdaFmCQjZSHMo7TyTm3XJbFgZAc1ULBdmdbQxoVNDaWraQ7dEvikAF4rXaik9R6Lgu",
  "key33": "2DfQrSnrfQ6A9r5BG87koQxYzPMypjevYwrv7rWVHdkVbx6sTC5bMYbB8R2No59FLqS6kDis8DtFbujNVggTagQd",
  "key34": "29R2M5KPeq9wgoXE9iWAnD6MqwPJjCTkbYijm8GbEY8mrorZAiLgSzpng9ywcdLfBEZm6Fe9KTwYtxmSvNDfxGTu",
  "key35": "2UpZaXRUdBsYaQCTsc8H7La86zHv6uccgevrbq8YmZYHnrCnnxDrG9Zk5oxhz2YzKE1S6Q1th4xdVshjpKLyntCb",
  "key36": "25MDXVx3h755smUpmLUNWVjGpP1uWLHdySpBkX7114w8NwSgVRNykZYez6LBadcpLd7UWFuFJxJWkb51jX7yYtgt",
  "key37": "5hJPN1usxLpqCRe8pFVrS9gzEwiiZ8xbcV2x54qkwSYCpzcLGkaFmfR23Zu6C4rr9PMnWdmknHSAX4uMiLmkGcdH",
  "key38": "23ap1nGySgLHr87jVThFaAoy5nzArdTgkr8CnyokkZoAffPMzNndz9g2zCSaYHRcNX41xCrhiockEuiGR75mv6DA",
  "key39": "514VgSgP2sJAp86vbDfU5Syg2t3JC5tyBs14vwujQDUjsDvmGX2ZCN2qLCbstMywa9ZPu5beh4wWMPLFapuyvYyX",
  "key40": "55oxAhXnxczbxfQKNYx2dwEwt1BoPvnztXCXCUB3xwTzp4rmanEeWmSwXPmxvmTVQdsb4VovEEPNEna91pDArGkj",
  "key41": "3x4Rqquo8pQHHadZtBNz4HJtAMhJhNj1pbLvBHrgJhKhwVJbPgxT8jAjthQpm9RG1NwVrA1JKs9BMzKRE8MMxCyz",
  "key42": "3wHcaGwWaSZZw3QC8o5rihraQTw2EeU6qYtauokt4SwRrHeLNSUfARZXW6FC3e1E8GrEAXBZWEpwX8rgb5bpn3s",
  "key43": "5kec2fSTyT7vyQ8XXKEAXZxzy5H6T6pwyeXByQvEXJVF4KYnEABnYuDmHxJ1WgU6bYJpVbPQ4iuPtmnskgQVoDA8",
  "key44": "4Ai3TJ2FipSAAHqNWymsFzKrvMjteAQDXamRY4YQRAyzyxSYnguH766c1KPpM9rfYx8XJQkxmXNqznuuWg1vBrrs",
  "key45": "GQX3Z6pZMLaTGdAZB9m4YiVs5sNcqm2TozJKgtnEkQHaH5tt7wXgjQw6tBNR2zoA6vAzG3691MuuXNxPBmfzv7N",
  "key46": "4GBQfvqfgba4vN92Ropdcw9v4Sk1GhV5uHzebJoWRmsYWbqkjXfhkLX16f5QSY1JNfXnCEpXh5qnm2Ds6NYVTc18",
  "key47": "EBp1tLvwtwCSrx9zkS6uV9gZJ1gVG6WmCKAgC9g55rmjmkiHYxh5bkQjBXQB6inGwG2YbAZhcYJ7wVFhvMMALJk",
  "key48": "5q8Cipm5R2z7UCNKv9rB7yCwRo9PyBAARwqtxugA4J7RYK4tkHBd6TCKvXqPoFXDADuZF5W7YD2aAHjARBej1rZt",
  "key49": "c3T9bWM7gKA4EYYkfwh7pbLYbt1td45m6zfn1ABBF4BTqJnT2FXkSPKS2Lde6X5gGQjj11ZVz8Q3brf1z8XVidc"
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
