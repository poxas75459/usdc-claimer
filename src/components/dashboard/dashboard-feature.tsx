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
    "5B4qaZKS3GXJ5UWEn1fwb8haNkg82hd2tQTGKck4eH2XhmFJ3nNTzNpYRq8E9Ad4huMXgFh6GfVNEGp1ijb7tQVb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yXDSRiRJLh6A8tNhXpBghQLxrX8SQB2419pck431h6cfnjsaR7TFRruVizA46dbe81G2izTZZmefQJp3cpBQDFX",
  "key1": "2Uewx7Dcsdo8SvMsQxy4WN4QyWxzrzSkuDfQLSSGEBXjbhmitFNvHmNKcXCcTTA43VTpAdaXSEb3hYEX9vda5tRf",
  "key2": "5pvFUUSAvx3pg3oGTsNybGMXieuGzFsCHqCnV1LR8zRsdEebiJ7qE2WZ4f6AMUxR7ujrPVpDownSHGrHbXfjvd4t",
  "key3": "3gSy7ynM4cJPkHgL3TxmbpqGYm8eucbsCMJ3cEDbfGmZZGs3EFfAzf2qdvpZw5kBmARadSbKEHxnqxw6bcFPzUW4",
  "key4": "vhKj6xzkuTaWyaLwhsg8qEd2qbYKmkZPLLaoPn1qz24GtYHSgCUEsTWy56dkWZGej4U9qqAJXEBbnEPLDaJLoH9",
  "key5": "5frA8iLJv2s9cns7VdDiQHoK2HZQGt6XG9YA7Ws7G39DsxGH5W4mKafyMP8Qv8P4YuQG7X42rUziqLawZTd8aVTW",
  "key6": "EuoS6tkYmEy5WXtcyfReAE3q4UNTZSFDTcX5xCMhDGHiaStPFvTZbeJPknrrSko79ks1vcxovct6cnkSCB7hKDc",
  "key7": "2oKjJTTBhXUbASXhQJsmQasYCjijPQYg2hFmHCn3E3VexjDwj5yuqLW2cbU6u5zH6eHfmLAcwvKreA5SVDJmpb1B",
  "key8": "2TSa4Q4v8MxPy1MskejgbGGxxJQCqmpWKgLqLumjHQs5TRy9ATybKJ4JGB21oawhbwaRM72ytZMw6eGLFGdMj7zj",
  "key9": "kRwLq2Tzp6qFkiwuVJTLrRQitUoFTWctCKRJ8bnmSqt9W2dz95uBopnLYy6m435awUq93pGiCEcyVHz4yRYcQU5",
  "key10": "4oTGacNZbwPLPr1Ano6DmJNCe7AeP2F7ojZqWeRzy3xW2emBB4qVT28UEvtMSxNXYnADJTq68tSv2PHtAnzrJGM4",
  "key11": "5iMvbP7rWe9Ba4TUS8ncPhkU3Ve4oj3zaLg1vsvDEkmBjahdzUjtfDZUPHitCugHwVezfT87Pu6B5Fg9gvJJN7g1",
  "key12": "3DFmZcDWo72xAWNk8wgCeatYCVJGXkeXGLCpeoTECMoNmCpRYtW4uQwxQ2MPgq8UfcpkBcXNXQ8RgrgrpdLpTqzt",
  "key13": "3rKmtZHYWwaYyuZkHKhqFNM77uQp6iaycB53tyRuFTBmubAZ5EUKSrFtFfMM9itTsb5F16V1UzQsjcn8yJtvPsp7",
  "key14": "qAKJAcGrLMgosf6c5n823S3tekXRX2RGsUQXSD3URbHeu7P7QaxvGUmLeWhQ3ezgocwjYaiYQcDpetVz4EkbgoZ",
  "key15": "426EX779wMw4VNNtkc4kMvtvDMDNfJQY7k5YsRDe6xodardC6i3ZXLr4zMTNHo6gyv3mEwzk1fC559AsLCQcfqPM",
  "key16": "4rr1kxjWfDRWUEJeg58ijY4XYDTPxXoDXV8kR7N7QzCj2Jq9crZppX1YSvG5B3HQwpSPomMcSZxn5Mjx6h8idD6F",
  "key17": "4RZ4Ym4sY9VKf7qrtiNwCy6tsoiTtn9dw3VqaV3UYZKWyyBBsumgvvjXB3B2xcaJ2oXh8Zm2KJmBdJHHAbv3HEvq",
  "key18": "2y5cPbwBvQ452B84dde7h4ikqGYfKCzdwAZpbv8yuqUcUidCxaHGwz2m9Y4cSA9vRWZhihrqR6zE1gnYa3spE84a",
  "key19": "pGqXjQMHR8Nsjjyem5fpqihXH1REPkSce31nyRWfx9hMcfAnhD8jvenoWyut7JLC4eMJ4nUjNbkCWYkExqcz1Ud",
  "key20": "3NeKZLJCXazVBtL4sNzuCgGLGHBK92CWyskG7XExYiUogXJL3UXdvdxwsYaxJsqGLAyFPvv68QTgMj7e8WhTJhJy",
  "key21": "GXWkjiaPpDazHdtrM1sk6UMsnybzUrbSpVDKrt4kuGwkcU84WatLmn9zQ3Q69witxRznRK54GWLWdLvsM5Q2U9c",
  "key22": "4qk2guvnEawuW6GH87z9cmYd7sUVrTsKX5dT5o6yitGPPFpaeSzCr82G22dz9HDFqeKBMFA8Jejo6yZLtYZMWyMP",
  "key23": "4XSTik6AQesgf9HR4e7wwfTdD8C582FTrrj9E2Vkr6obVNhCyxVxD12ChyijeSm635GicBnZCRVx4R1qZMb5TigA",
  "key24": "5y4EJYAp3AHGm32z1KRgwYjwpRJWP4ytNPeR5417NYDqF7e3vrZ7oUEocAbtUcp8zBQHWiSQf4h4sZMPjuuzohYU",
  "key25": "62vQ7oEL4AwDL3aGwMr6DafXcSR9DgmN7r5qpwHHHEZTDbvkxh9n8aabPcHikFHGsDb5Wba44cz8tmRaqqjHtedY",
  "key26": "2zNXGfVzQ4WEQxs6xYZhNSJGU5r35U4PibN2oCv7cptwhDNREvgnmh48fXuCeTDR1pmPTW3FcR28ZsybZ6dAhrt5",
  "key27": "3wuQeDJ5PniTxduR28JKAkXuNNjvFReFysWNBgueLq4rU1EoA6fPuKRqX3ARg1hXTvNq6brx17R2vakCWN2Rc5CV",
  "key28": "SparBVHKfJH7Fd5aB7p7aa8KAfK3U9pW8jFdExx3v9MrrTR9bnHdLCtiNiJLsBEP7vb5xo4kwD8tDMQvTmaUB3H",
  "key29": "49362ZVqMkDoL3arhaxBKTd5mZ2Rn6tS86r9SuEURMKJTHAWULTcyGvcxM5KyNzztL5LH4Mmpwr4Nno4kJufZQrQ",
  "key30": "52g3Ewr1joGqavNtZmZ7SwUGVjU66gWmsfomCa5MHMrJ2Pzrid7qYWyGGk8iANRCyRdw9KKAS18SWhX77dFkYEHM",
  "key31": "VZ63r2VeyYXTpqWfruBphvTwoNWMJswActsZJiXanpMhJjGoFbjKgkjgNyH46jXNdhwTBeoryBWaGbJNUs6oULD",
  "key32": "5niSPexwsVkBZt8vA4RTETZYTrRJidfjajuSuoAjJNsydW29dhUMc2NSMBhRZGttHNvv42BVXiGcbgoiD4yPTMiH",
  "key33": "Hz3EKL1yQYP1ZgJJQRdh2gkUgunpsd7u2atkbubnnjazGPKYfKLEeKXhNfi9Ne7PXeo5wDLfqtiT9f8MpDjUJ34",
  "key34": "49YEfMLjLNMkRW37eXQ2DiwXGTb1iiNUjQkHmwhXqzqyBNDC2BXJP4qTv7Z8dxKdec6t3jmzHEKwiamL5SMYrgXE",
  "key35": "3j417c79rq55KJmVrykV1wrkoyeWR7tJA5QX3GWfCDkjtDKz6VKqWAeWSY64ZtYwk6EcvmNRHKQ8ToYoPVTkdo5W",
  "key36": "4u6WBugd89kk3ajqzY98hHM5RBxhk8rmMyav9HnMpyxZdoZP4hk4ewdMCiCkJXr6RHpqNNkpZp4ZkU8HznhdixWb",
  "key37": "5n9QUY9kqZ6csw15Hjv3hHbwNXq7UJX1HCZz5Nn4pKb3MYbW2CSTDyZkyG1q4cCoDEMQ8RaYiHes3kSM8onsbYRh",
  "key38": "2Jk3ti4nUZnLERwBwfvwht9cBfhxnLmcd6Th4UqkV8xfPSrP65J9ZrropLLAmzodPmSkD5ap4E9BDBrDY2UasBDM",
  "key39": "2WS4DvLApP4NZPsJos5EaPMgnF2nGLSJEXDZ9aFkQEy4qNxcZLs8TrBNiUF9W7foEcfjmAUDHtbdfCdxegri6xWG",
  "key40": "3RqYbcgCogEdHBugS4pAUr5J3u1VnnmtLbZh3vg962KGKQ8fGv2KHC3Qpq3A8JeW9Z6QKM8rTyGKaeRL3NF7Y7Zh",
  "key41": "2B3SVoov9yjENSLcSC5srMJ8RKpaWDiaW13fd1uwZUj6bwMNwZmoK1FibSgRdu22LtnLaJhyBEGRPAFgf9wRU1w3"
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
