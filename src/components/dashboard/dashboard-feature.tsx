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
    "2MHJ4ezCDL8Fb3WohSA46zc8wbALAgutDkGoN9qSkuHKofRQ6Y9cy5Wpsd6B1GGemYGXiLNrn99NgKKRSY9CEn6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AzoAybGJNR5sdYLWjYLqsusoexSstRXCo4E6vbqo7uruE4riosr5qEteduoihXVA53qBeaquf1KNaX374tYkXZr",
  "key1": "2Jpi7LDqYseU4SzQ1PMBEyMTdS1pCtxbC12NejdSuVmQW5Wmmj5Kqg7XYAZUBLyg7VWKZL2m2FG3dVhkdfw4YXvd",
  "key2": "Ly6rjWrpWbvqBKCGnEWeZNUDfgGmUuM7tXnocaY2tCKvkHo3U7Kt1kye1oJX1WynbpDsXNaBPLtzxiK9tAg7WH8",
  "key3": "2rqFLYAtkxhZyh7rSa1M479P7h7vRPskFrrs3XwNAd4BoFWwpMJQgSCJM4cPAZsqrRYcwpWbGJnR6cgvDVzLNyyg",
  "key4": "4RYVf3T2nE2hheVgHuUpbeodtg3FpfBEqeuX72gDvfKvf26UxodsTC49gawxY1K3bpqg9YAGuDfsy9WrnBQicnUV",
  "key5": "5dE9Vo9BD2xyjeMjXtDp1rAPdL158Qvdk29y2mWWeAVmwmpTNKJmk2cpVZthGn46KFsSanroRhRCgaQ3CUA5qDgP",
  "key6": "Xnh2GbgGTpuDggySM98RR5WH6hd1Mcd7JbgxQBFGuJb2kRrsmA4ZD3ASgYnmtAcCArdQEESjuCV9UC8wAzZJZ2C",
  "key7": "4pULFsR14yXa9MRvDkdMLs85x7xHr7eCWpCwEG2CXwFP3scUw8nm959yDpRpLdumjGasjDacfiNDSbZA5VYCpFEM",
  "key8": "3u3S6byZBhjTseNijtVjHK3rwk7ymzr2zyaT6hmg3NLqdHVWFYA6K5dPSPSJVNqtND1pi4zB6PKFz5G74wUs9ghS",
  "key9": "27cKjFRKxuEyc1AG4xPijGtMnEr1RfaiSqTVyvDhJrE2guPZebBT6kneJ7fC8mrMDuvDQRPs7iyx9Vvc6kChywzV",
  "key10": "2fst8NCAM7ksMV5CdSZtkQi3zfj3KYPhSmMeWEDsuTKuyHLHXyFqxcE4nGuNUoePFXJu63yXVwWYib1rLy5MXqsg",
  "key11": "YLygtgDLvie1QtLdvQddqSeBe5TaCwKbTcG79UeqhLvwALaMzbYGgAjCQcTpyskJM99CKCvwU1F2faKYgZvGR8D",
  "key12": "37FLmshhm21YRNtQ7Y1yeRX23Re3y9sgXq57HXqH15bpv56rBUWPDGiqwe3HGSux3CbtK8GRhMBRcvoM4mYKLHhV",
  "key13": "3CcXKdhGTcWQ9ZxKaRpE1T97Cm6oikEE6STZZMzaHDjhmz66x7DGkTKrwiqL3UmKCayVGZq7woeqQQoqFaXmtaaD",
  "key14": "QoTPfy3xJW6Mzm4JZ9heq61yy82dMana94pVhvPEUAjtLNxgZbJqKh6jSP3jNZ4ZqNbu9Dxr98GrNWtGaaATrG2",
  "key15": "3abDhoHKZPebfzAF85JdzyQUYdAr5barPALtRGiz1Qi473VZDcJgeHEFM9Vc3mnwddCp7GxL8LRNpAKHAS2tMtjF",
  "key16": "2UY92ZeGgWZHDT9TjEWSKozoMrNZeHX86Xn7J1KgrdSjkcgwhjgXLBbHYHRuYMRz886aMGxRZWUTxRvpTowCrUQm",
  "key17": "frSmvD9HdCnxYMGdwMwBozeYbCs5t1eV7pGyKthn3kHibZsJzPBczVwZjaYEgovC5JSQqphLDgqZHLGTnt7Ka6U",
  "key18": "4cUypZX3jDffcJ8FqCo9afcqJaUvUU5dUcUPT753uLgb4LsBcNU8RVWLXrj7WRnZ7qCHDcMxeYj9c1dj1cTQp31G",
  "key19": "f2s9m2vQA6CNZwUznpmPjkXs9yBZrmHXo3djywgeTBNg2LSRqeLdqJcPbmZzHHhythTuMBivVoQL1ZZMw6T6rvh",
  "key20": "H8pgKJfnpxAMUdWQJwnjPmmWMFk79pEW7QzbpuE2YxJeqpmH9YSJ8RPtGQdvC8dL54kVZG4SCXWpg2RHNJTrEep",
  "key21": "2S5WaiWJcWvzkAVyvwKSrsnDsXKuUwqWUjBWR8E7Mkeu9UER5UBtfcUVSFxfn4QUS42G4VUhV87bsJAe5aKA5kfV",
  "key22": "AZKAJf1ovMsEX5iozapPPubTnLXy6X1ctWnAtke9HYCqZhmJzh8Vrunw22HnJA9pBwDkmvxnTMLYnP2TzUdCsDj",
  "key23": "4uLjdghHp1ARVDsKHhyvWZv3VNPbdnTL1AgsJ2Hu9QB5VLJdze4MGAtiMNDdJ8sT9FvoHXjqVTuQMKSZAttbkn2h",
  "key24": "3Q9hQKeKGcu3YBJnaGtZ79cRfAvNHqnQhnehnKLELWp37RaHYakL2iEURMgX4FSiE5ciWFyowaNyRUAVqwDyXG6B",
  "key25": "2JUFZKtiv7ufCM5gpauqWi4hTvnARMouET3mTq9hF6Fv9jVpY5uZZWWBSpQ2oPXzKwSM9TWQXQGEfbNEtxmXQnfu",
  "key26": "31pmv3CLSSf9UtPaFKxXX4eMMjwjvBei17m8RafBivDWhxbMT1SA1izshW9AEW34E46zWTLA2WQbtHYti5wnbL1C",
  "key27": "3DEdjNCmjPxTn4zjwbNtE8ZK9tTGJBuFxRBxLHkABMMh1pwLs8h2vDEfeUqQAKY2KR97i5qYQtmZckuCNeJ6xuQR",
  "key28": "2fxtZNqd8bQSYSD8ppfte5s438Wi9hJyFfauDn96tazRCCfQ8EhNWPtomobvfBxuzjad2c3REGh87k13HBzNHmzo",
  "key29": "5v1ZfTGVPsZowP7qob24EBtRHmQmDeScgfiA5or2eQq1auZ7Rz8uyprxYEA6PmuZ1nnShrRjGNtSwprVMmxvh5f9",
  "key30": "4kCbZh14Yg28Mur63WE7u3meHS1dCUvqqR3bKAEeksYG1PDntKhbNkx2t5uq8ZbgBPQt8qi17QiYuvwWT9SC1EFx",
  "key31": "2Q59KEAuMHprjXmGi3Yx7Rb4gducTrkGQJjNyERep1xiLVVTRVX5ZzaeQVrFFYHAp9B7M6gQ3fnH9DNdfQsYUyc8",
  "key32": "3fz24SsF7jx3zmr1UbmtinKBccKhpRk3B7Ba56sLnuWtkU3HFiC4Dtb1q7BRhyWAyxcNDfU854bDcjNAWRdBnBWo",
  "key33": "2S1sHYZh3t2tUS5pt7v62prXWtGKqFDpLdJtCbkYBYdFwKMtSnucxJny8ioFXhp1RRsRuDSajwnRyEnKMxwoaR2c",
  "key34": "3BXESbia66nws6631BXMSXE9oGPYRv9ZMyYkHxuLRiAceiQmKMYmFqC2LEiwKxEPL3cZhEMURfm8cnZbAzcwygF6",
  "key35": "4qfMcbgdhZbhsahe6pSeoriEo7VNsDHeXUDRzRkLkjMpErthpLcYLLt2LekkvjueBj842fYofcUn59fRdy9nArZA",
  "key36": "5rPzmMrgeoadK8sU8kcs8LTFy9gBSv8Tq15CNVMdaUqG81WCf8UhWhTdrrhoUg9Fv2fD865d3eZS6Q5J7sue8Tsn",
  "key37": "3LmNzih6hGzTff1Nbu1iv74mTUv61uSWNqfhbvLPQ8MUk7ipXxBf1bveHEHy8WpTGNowPHxnBz7c1z2UADxQRQn9",
  "key38": "5oC1CfGDm56DM43WsH9tnyZ1DUFbY6q13WdmCJog7cE9b4aGjg9LdiGyrPEsAVNVfkVCZDRVdScV7D2r8ktkBAeh",
  "key39": "5A7mdyUSMnFJ2wHtHA7LPwfuuvdmFA3NHdyy6yUeFxnJDxz7bUPyv87AhQf6yWMUywHNFjZXCqcVpSKwPErPsdMg",
  "key40": "3TpAbMxYnFXiQMymW369tGv7sNrxGNz4uhMoQWRjWetjnFcvV3k5hwR5RNX9846bEXVdwDmVgsbJkux5uGuW5sgq",
  "key41": "3Aee1bE18DEsRNvicmarrxwXuEgxEEggC4A7y5y32y9XWZyxwbXe7n1mFUUKQvK2nF96bFCuHKUSCXx7QBrc7oPu",
  "key42": "rQfNrZjG8tuVhw3eAWkknQqy3MtvxLmSAe3W8dohSd8dvk7WTyUJUxQbhg76yiwtsLYE7EDipbVnYdeR5gGmYiH",
  "key43": "3757odhqA943rkh5Fe5DqUj12aTTiihPkCQJnwfqPkSpWrhFUirH3QVzXGbscdPFwQvHzFDnLP33yYYDEFSHiDBv",
  "key44": "5dQd5RMi9TYdvtw6LvXeC6Y5X8LtJiAPzMJABytgsRBLVeFu1nV59j7Cf4dkkFAwc8ULkB8YFHfacM4mdabpgPaf",
  "key45": "3cNjEUPyf3YKPibptjfrvpofTbt8EKUm6JiL4RCo5fQeT2rMeCky5iVkdHYTVTxnFgMJgkcE1bKwMrP7VS4tE4Nb"
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
