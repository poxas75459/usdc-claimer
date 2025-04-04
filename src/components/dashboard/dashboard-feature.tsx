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
    "3D3n5ntUQk56UFgXciFsCuZipTva1XjJzAF1YWteZmHNnVMbMJhzCWUjHw4yhFLHbKRL8K954BbkPXtGMHvkCLk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NVEXdPCvvQb33gS4n7bFtfSga5uDjUkXQZPCHAKonPA7MXtGAvoCdLcRARfehzzky7z9rTABsDJqPoQRacejRQ8",
  "key1": "4fGPEJEZePWThp37efEiDifjrwuSupZ7B6Jcyrhh4vpvq4Z6pFLSFK2wxd35D57JT9ixdAKXYRnCDEK2HhPmuXRe",
  "key2": "2YNXs6xKoJf8FFYiFgf9hdqKtxc5WTGb2ASQwMmXum9kktG89vSvraCrWPKpXRp18HR8RDJiUWb7Vuwbf8mnrVTG",
  "key3": "6r1U19a248tJt4YHvuhBsQXeZrD2aZJewLGcHpZgwu5URCZ3dPBCKxdnbeJXf4hPWPUnzLcL4dMNrv8oDgz4Q3R",
  "key4": "5DyoiMWoWxWBomvQq3c7GirAkcZN2tQgKJmdrhfSdCNtDbkSmirAchSnW2J3AptUjvBqc36q17p5jCgwGjFzyWfe",
  "key5": "4SGYRBcKA1gaASU7iRoTXSWAkCdXZrYbeCr2E2eC4pS9S39C9kUEe4YQa69xNWvyjo8ZaeL7otqfzF2bkzzACsXx",
  "key6": "2EzGjcAerZQWhb4X6DkmL9XpdnDtKJoJDaWKysn3MtbVvpkJhkYzUFMPNeFWxsLTqZVH2smsukPi6bcfid4NU52D",
  "key7": "3TftbnKrs8JfhTxyYSq27eEYZFeb8eZzoNA1EpoQjJ7cwxdNvJrgjYUkK7c1fAwFFbJNv6qSg2w11hZXPY1j4yQ1",
  "key8": "4R9GnkgBmMXmw4KBzWwAVRCD7RibmfZsDtubzKSqWE6adSpKZKALwZiCSFjVQsMGCchhVbCrjmo3ohh7fAoT2kcV",
  "key9": "3fJcXR1fH4D59BpgH4Hz88Tug9sFyxQh39dTrykoeE4B4byzxSgAehK3gHs667b3X27vemcJuiJE42pDcw2usoH2",
  "key10": "4mMw4C5fi9e5tYHhdxnyL1zWXPSTv2GS3nNDu623rz1ULWUbDnN1mhGHF7h2SuChcJqAfXvKVoH4DjzuqmESEmUR",
  "key11": "41sRFr2bYxSy9mzEi4UUU3Vq8DfY1TycqAQZC8n7Yg4vVW8LikCqoToyeqcKYaD4bXCctaqwR7m9bFYnbQ7nFR83",
  "key12": "3pkRJv2hKdARfUnZtqG6txLGsKsiC5mtPjz6kWmVyGD4LHDNzvmsCGDJV85P4gEo3EBeeHmLvqq5NZVE5q5Bp7Pj",
  "key13": "qZRFW1kkUnW25i7Kv9pTubUhUTELL7eZfUuaLZq83u4J1FVtwgc2C8oWzZxVdaHacgoLcKioZAdwBeBzDYD8ooE",
  "key14": "65h9RcR1imjbPXW4Wfmpdgv94FJLwgSGDCr3xWJeDWd5HjKwWsjpV863cdTC3KZaM3jxjzdfqCvcCrgwxsY2ap6B",
  "key15": "61ALSXVbt2tsFFSNFzoyEhJDtik59o2tWvH3DLLbyajSatxyqyEZLaUpfKCJHQ1VAzBss4qJHB9V9yqZPGxSaZ2Q",
  "key16": "4MTS2bQqjeSaru9hoYaym7Rh5KYLaToBehu6723Yun7oVH1mt2bNK2Ybb4qMMD5MNzaJyRv8uxznRUJ2sFb2x48V",
  "key17": "4DGE7cKLkL8pJ85sYMCoA93VacCarDWKoA4Nn7odhCShYzcMR5jMq2NgjVDCaGjDHvSPCUxG1sUngtCUighQkX1R",
  "key18": "4KhbNgtpXs7v81McqgYSYejB75WXVzRRFKfUjuWZL5ape5Bnr76MjzVJHU4Vkx8Vfn5qDiuc9JkKyAWQG4jxzxfK",
  "key19": "3DYWW9jZVrFCsYrbe3JZPnTjos5qyPPkQTMUVdKcJnX6pRG8GReFjaXb3GN4VaWG5FAK5d2NQQYV12VQu4CBr83T",
  "key20": "3x3zfeEhjumNX9GL4oP94hEHysCE87qRB78coBoz5hWYbfAjVUk4LGMpTktUkNqYNrSvu89fZ9iDT1iA5P2fUDSa",
  "key21": "5TwkGmHcQU2jQQsYajuF4RbcAFMvTXNQw3u81rFdfsGHMQEjyUdNvjBfP9twepz1WJBq4qqT5YqajeVKJTMX8TYE",
  "key22": "3bF4H76ueG9nGLEPA1Ci8E4ULxVNrKdCy6zTCjvhQnT6F4MBBVCK3Q5miwjiD5W3ackQNGSRjAB2BUte2YCmhsLC",
  "key23": "goXeBwxWLdKunLgRVk34X68gikXkdehiYZGkVUM1X1NRroTMA8mwYzidYTZwMMHqyyYbeqWXPQ5MCFGxN6j6KDk",
  "key24": "4i37FxGYtbJLceeTRch97s1aqvswDq2cZ6WnGFAo844ircRSmchV455xTiZg4B1yixFkUfp4sRWRGZ9HbFB8eJdw",
  "key25": "4B9vjdvSJ1QUZebwhkduPUGSF5zHdQNoDK6HYZJCxapYpB43hwHxEmuTpANkQAqoWhAfRoqBZXH38jZDGDaNTSHR",
  "key26": "2Hejk8Cro93mpfy6PDLmurZDi2MyxPYuc4ACc29DEskNJKRXz3iJryPnFgmREwu4zDibZgDkaE3f6ESawuRrpqcw",
  "key27": "2GnmXUjY7aozMdzXPfv19dnsFjVo5Re6x8Bqae7yFyKcVXBYcptwhmMfrboTtoW8cX9vCXoJHmmmn1h15bewezPf",
  "key28": "2tgdZVJNKnPYLKk6JLXDHRC7gdxkv3GVVYxZQaP1riBkRizxm6jYC5xhBXWSDvsyL2ijBckNuUHQEZKQcTQRRDk7",
  "key29": "3YT1QwhfqTMRkY5oXYEZ6yY7XjCuvjqAyR69udS2TyoAr3RuW8vCxdVBKKUqpr7EPCyTtvk7A6897a9SaNomkRPR",
  "key30": "jyU4YfRiaM6bpSyFoRMCiin8izQpdZHkTA3dcQjCwTgyTmxqnjSXDH1FQKqKEtLMM4VdQLgjhehXP4yfwD2gr6y",
  "key31": "66udi1qnRi6KbXxUYRDMzfR88is6ty6JMc9ubzqEZpXWVELgtarst5DNk3CrmdhTs6HMxaQxEV6sF6RZ6Wq8qiCg",
  "key32": "42jQ86PHBRqzfVgbR5yXaZnb9ByLJtbBYXDv6Yw22U1iUiXgBAZp1usPRfPVLfFzYyuv6iX5TuFZmEVb1BxrzGQK",
  "key33": "2paSc3XR3T5oTcK6SsA8xbDoDnFUbjBiJ7daBncxiFDHU4Nijwu3oyozPpC9Wn92XjWmFQqhaxuf3Bz7VNFZtaZ",
  "key34": "5oHqyPEFVp7Yah1iC52bX2wFyV31B8U8hn7a8ZdSGeNMdTgQjG2Yp4nSWmUkBhoGw6XBKDmdTPSZ7rNNjELwJBKJ",
  "key35": "5BDavCewhh22YXGBijck9PKqD3H53fVyxyQMcr4ocUK9hZ33H8E2rHDHaYmNcoyCB78c58WKg1fY5nfWhAtMF4Fd",
  "key36": "iWL1wePJneRsYi6YRRHKiJ8w6BmyA6Zha3phtDKuj8AWCpjqmTGwzhJmjaZkChpq4tGd4uL2NwkdDEFYUF4Tu4C",
  "key37": "2LCtPeMf8M7ZTasi1uuFpzizMz2TJVJnj9Lpr77os1zoKd2NRT8ixP44PLJMFtXvQdCx8kQLhudYpYTHTpbK4hZY",
  "key38": "rgkdae6HLqcweiRzrKrZLaWyU3Sqv7nH2diVAuU8XV3Jv9nGtdyUnYTXB5HoLgxGHoewEP2RdYevNdx68AEbZjc",
  "key39": "5CvyPA7dET3jdGKhv6LAhJEWhRSbPDB33ype5umxAmaiSHWn8HvLH1JtKQva4VACHBm3Ef7jDS9Lrix6D3JFTsRK",
  "key40": "h1AL4zKi1DyAzXMU2yKBsekNDEmDTuGxo48EHewjUnc3gUoyGihctydXR55RwCJBB3x4pRr68w5MqzTubFibBEt",
  "key41": "28QsMYq9HvTAPZJAYgWUmmhhL8Ck6q1UcUdTqdPEuU6kv95JUmQKoM6NubecQ3476S8FuW1c51YXyHcGfd7CKdz5",
  "key42": "ECu9hdwKaHcNjB8qdBW96GCocsTk4HZELYVetMCCtfDWfQdp1sUGQoyn2QnP394QhTjarXPE4hJeH4YLLQse7tA",
  "key43": "4GyM8RgcMCdNa3baTg4LriejBJbkfZfVPoPvCSsDoKnYWqu7R3iTkUCdnr48ozLwJ1pHEBbYr15nquZujemkNPiZ"
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
