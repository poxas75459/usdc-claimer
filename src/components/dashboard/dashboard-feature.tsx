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
    "5ui8PMfARZ1an8zLXZgemSXAX6CcneqBNZ1zZtEeq1fMQGCK8PGLf1ExupiRTeYYDWP91CqpwgwX2nERBU8kkx7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZR2dnYyXC8CJRGFveT9LCWQp46o8CmY2E1KWUkydRHJu3FRycsUxbxfUcjqtGYAwaCZiCZTBa6Ztom4dqHtevJ",
  "key1": "56BiAG6WeJqNaxYUAzmFhy6fCxL3tfYhkcHiGhLGpxApP12yXQBMwhkbffSSABKnWa3Aa2ewbfB1N4PS8aocpgpF",
  "key2": "4oyokfGQqUrNqCejbc18sHURiMA1WVesurFYWzpawWTGW8xjeXr9iPJmWpoSfUNeYqGX6EPsfuN4ABNLj3vYWgnt",
  "key3": "2L6jKSGZCcQBdz5P3VuuPLUzcN6hbTiodGDJCwwajaUCvWHeE5r2YBacjWasZ3jCWdq4Yvwh3LgfGSuru4yQ6hfj",
  "key4": "4bRFrkWvduRNRPfequT3UzcG6im48rxUCy2R57k9kbPJKYjYgQCTVEYNCKXVgvUTMKgRvLP5DDhMRZaKdQp2XT6w",
  "key5": "62Bgb7THhPfiETwwQx2L71JyySvd56kXLXTqmJtPRAj83E8R269FFvzUwo9bVxTFV72nruyoSYUfbYRYcEorzvgh",
  "key6": "2DEKXtP7F8PrNNotoWpJtEbnGEzwZy8yR1kFnMUwJr2Z2zXU32EeshdjyEj7Rd47BvdzkCazeoLFVN8YUMcgEyAK",
  "key7": "4nG7ayhaen93UPKbuVxrNqJ1KFXwtBVhruYVdAXt78EsvZcHnyZRZiQjfzuKUf4V8ys2TuwohaZHN9Tt76DgMCnJ",
  "key8": "3K9QMZrLpa2MdGhfPC8nSH2rtVAtTbwgDdjdrFgFEeY3QZ1ctWW1yaZfUCLcW2mVBnEYb2K49GU622AW3hrbXsaW",
  "key9": "3LNpAzASK1XeCfz2sDFyZ4x2yxC8QyZdSTVhDqGtHEwNKCjfUTxzapHrm7xvvwu5JXncpyCMA329X9x2aMSRznAG",
  "key10": "3BdTzvdYH75d6hrRXUNveYQLno7rvLnUrai5xqCtVSiUYfZLiXQHWyFSa51cEKn3Kp2i4gyfuPKUy8pWoJ8WVNqu",
  "key11": "5odDLGX9SxM2FoY8jDbkESgrKJRJuafBWyArPu4poM1rz4oNwvXVN9kHJdsnRMahtV5WgDZtF4T8VVK2DgiK2HzK",
  "key12": "3yW537zcRCpVUhzoSDR4rP1yWRPowCyAyuwTxX2Ndr8BN2DTfkKG7YCJwLd6UJB6RKmnnfEmJ5DZuJrZkwKssj2Q",
  "key13": "5A4N7En5rTGsCEEBCcKbpov7AD7ok4iqn9ZAAEVs37BvJ8w18G3xfwRDG7f1erb67GJBZjNFA9ybqNUb4RvFBo9o",
  "key14": "2vKoK72j1mkQPG8gRm24QY53vWcxqvY15K3z3qXr7MbSy9kEhWVcH8RhuxGdZMwdy2p6R9Lf4f38P9QYuSWBXskL",
  "key15": "3rUKJtHT97mH2k4P7eRtoVjwxuEaacXRNnDTy5YNY8tYAyDQf71qGPWspYieQVcRwjbfgRRgPLYmEGMxKRuoMJrw",
  "key16": "2vFsvNRo5FJC9wnejVhHhEvoC2xeJGtpHyYvFx9zcxYmT774tz8nWPZCgrJawz7MrxVLdnt36wa5TH1wZbQApLtA",
  "key17": "5BgjiLCGmMGrAXYQSLJ5n4SnyfGUPnsdpzv6PpDsGSa83zRnUYakERYa3ZcZvEMijpgZ5RWAEf4N2E2ReWaZq9Ge",
  "key18": "yW5kwxD3urfaCMfMpggTRB97fFDncT2yMFi6ANtaW3igKC1Gh7oMZqSisBa6PW74wdZQhH2ozhHY5skN52ZKkWz",
  "key19": "QPnBmeV1xwxynnoTfLSj75a2kpTUo6AwAepXEQU14XGgnsFmjeYE6yZiLh9GyFY9ziW9HRzv7MShBpqE1HGtXyy",
  "key20": "3QQ7Xm5B4R9dyHiYV2Vgup3wWwt2auiigTKDan1X15s4quY2ukiV2pc4nRWsRyzzGmd52dawAw7d14JEk224zQyV",
  "key21": "2JDbHzbrV6w8zRqVZ7RQBU1biDup6sutLLRswXxL1LXXRSezXAPAvSGSWmg9J4JXuM3Yys5A2BH1QtyP7qPb69uw",
  "key22": "5pvMXpPJus8DyVYrfMdjrWHGXLGw7nJtxqcpBVgFzs7r8BCCutwNbgQRTANZ6p38XQqtoJFHsx3zYSJvdQUGdWtC",
  "key23": "5fupDxdyYc8QukwhpALX6fY2HtadFD9HSJv6XVGPP5QYxfb9iHnV7Nizqot1gvxhC6Lzm2mS7kqa3hziALKfwYzX",
  "key24": "2paFs33Hxrfh2DktC4FZvQXGECYcBUumDE5nqZpjoAuF7kq4XfmeHoCG5P1LBGorpFBJ6UwpTdTM4F6oeuvt425r",
  "key25": "HRDbs2uBVTL8eD5vkoR1sNjmB9owrtRPVqF39nRgvZo8e8HuUC9fAfdNBCCrCyxUMbarmJP58KYYH1S3pVpRt64",
  "key26": "2XXVYnuRDXyvkmCniae2Ke6PLAjDS8hqpUd4uCauedBxLy97jfE8e87YoqmPWKaxMtd6Bbh4SHQ6LSCmbrYSkMmr",
  "key27": "2QwvPQZTSfPi9So1ephTLTtt5hoGYfpanTasV4Bcvo8VB1gyzGPJZqBGmbKY9YX9TxsBpyW9RY4LVvoaFQE224MF",
  "key28": "4ebGcrCHWLW493qCDU1nWj8aqAXwZUvS9qoAa8jJUZoAA68yz2ww9hr6mmRazitggCx2MTyqapgywDKzjwsRT5EG",
  "key29": "3KSrt4mkZTUQST88b8vHPSYKGRobpwxB5uqMmtc82aQdBxHHk29DbXaF3nXBNehfSSoqN7YJXEhq7kmmFXFpkzSb",
  "key30": "481kQd3XXRkardTmw4iZp3BdvBuNe1mJedyMe4khdQ4HEHGeemvhKNoDhFv7dy1VE9oBwKXoBEabo64YQFFRKrL9",
  "key31": "5fYZ1ir2GcbNW5jKC4HJx1SsJugNVFqUEHkrkfeRabZeLfmEGPM1EtRDRa9hbDGimkouidbK8ZR6y6HNzcwpJFLk",
  "key32": "4GXxC89CjfY8hcH1NoNfmNx9CJ9HkLLJ8YLyqENU97zhYKBRGm6fNkNPnd5D8ouHR536Aqy57ompSDHGey6UeDmv",
  "key33": "5sPgR8eBYooTeYqhfdq4RX6KwLGnb975gvjJoBHLVnWD1Bsfx5TVuVwn7zGe7FSwzGcR3ZkptUmFf1uS5jRNeSgx",
  "key34": "5eoSJy1qRj88sXuEea5umS5Rp5G6eQwHGc3RbfTj1SzyyvGxxzLqTGwLnz6KFVA6kaK3cJY4eEGdvuMwpUcbUTNt",
  "key35": "fMdSQPgnavBgMicEFDgymSyvBYGSQnw7kxYPg52aGq8geBXQ5ZB6rgGK4x6S9ch4Ng5oucq9oxmLmUkRswKcJ5r",
  "key36": "4NTFZnmwhd66zzDLYdb2jCBgezFxYLMupfCSFM9thmuKPjirUQjPmQuye7ZczpsYWMFQtHX7gM6ZbKrHr3F3gKrm",
  "key37": "3StzdN5D4EqokqJrdhts2wgd3zoa2Be9nCoKVf4oR8EHUox9xCphDs27aJKXdTdrav48Xhtx5MVes7G4vhRsppYq",
  "key38": "5m6ov9eoC7a4wZWpT1JW9ZeuupkFDrgiEzKrAwpZ4fBTuqiNSaF6DXuaHuXVhaw3H3TmXz6sngWcZ3wZVFwacGyq",
  "key39": "5hUNejzW2AXqatg8PKpPU8SbhKR3PkT5BLF4yLYEPS6aJD1VNikvu1FaKu5p7qPvxcMzLj1cazGteHNHBSNCDQRv",
  "key40": "5RX6ts8pYcAM68BEWv3WvKt4Tmm6MceS9B7Cd6W2U36oBkQwCo4YLwhaU1GDdwtFFBsnfvQZr9vd8RB6gy1Sigmo",
  "key41": "42PjNehF52bzDkwMNEoPkkntB7hVsHeLQRmNbFNuAxrv1C1yBddsUZ1j6LUZhJoGqus6TNcQNWvRqjKe1R1RRzMp",
  "key42": "59JUThrfvBgyHVwEaNetNRZ79cRA6vMFXQXQVKtd6qrjeQ2bvWrH16u83s1Mr16bq1LsTpagmmEdGBXSQSPK9kq9",
  "key43": "2uBnXRcEvg2qVLR3J4nsVjCCk2TM8yFZgantYq2aK2PNzjSq3p5iy6akzGu5ZMAdSAoVSXTHteAENFfQddw7HwGG",
  "key44": "4n8udqiddJhwJX33743WvhJ9TvrDFByfTHPcsc2FefSvkMUoGT2yppThfqceJEJ1UoJJ8g5AoBCXgnnw5GUqbeND"
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
