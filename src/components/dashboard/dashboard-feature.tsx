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
    "2NvmqZnrzfzSFHCiLUPjwwN45hWEW4E1GwTMzrvibNM3K6zgozxc5bf4qoPqX9AXfVJpDmZMqceMHf4LnCdNtSQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8ctNTxUmqxDx6D62ouMWhLKPuedWgcCzz9DXnFyya1Me7fy7pW8vN4aVRWhPj6MymKJexYBdHVsGFjCFnHGNkq",
  "key1": "2hsKzp499iLQspWY9jw5zUXfpAHRpG8XAYiz6KVZUuh7ZPm5NajKoRy4nykNKzkWzUVG62epUASz8S4yJ1CBSRKN",
  "key2": "296zrZovuTsjRmWdvmGsSzydABzUusGLNpQXTWxZHHVUryh5pGYHoRS17y59AhxngteZAE7GUN9JxaUUuMFr25wU",
  "key3": "3HW2Vn9siaipo8UbaYYm5Gmmvtq3EQfmzCShHRC6rqH87GaCr6LZ8g8zB8LaNHN5555rKX84zTQXYE5NveC7r1XM",
  "key4": "2vx9XjVsewQf4kCV9TWcaed65r4kSemYGe2w5rYb8WishopYxbBUUwR8E5L9sGBFKP83MQA5HUg29jGEQJvVdQoC",
  "key5": "5wZj46eNfRWnjbpjFuQbstPvGM1QQEcJqA94iGGi2x87JtTmH2Mswx4yVqQx2H6HiPEkfNDrvc852r45zqooEmke",
  "key6": "3GKVkwY6CxWgMTnyvsfcZQ83w6DCLCEwpXYjLzvdRwhS7cUYuXf9Xs2crvNuTWgNU1ifxbYdpSsVyYWgoAR9LZ2Y",
  "key7": "3T9pPnjqdJvzBgucjmgW3HqUXNpV5LcVUsgQSyu6rq1EhSWuBAfPKGaW43rcZhFETaPXfS6daFbR4Dc8FLPpYPUr",
  "key8": "3HTKQngrCPv8LpCL7KEc2UGMp9Xd1QvuY7UcXZ1XWA8u9MrKjnxTLwjmdx5ZuxZ9zDdPFKdxzPnbjudZSnaVgsYy",
  "key9": "3qeoiHYTmJpY3mRhe9HN9LW9YWTcGPvXnAGkVZdEiwVaHfnDZGedcBMKAScT1Er22XzxmAvdk4d9b6BZAc3tbRS3",
  "key10": "22EihvfxUYot4dBvnEmt66dexkr6cXHSbrm1NbLfPm863FqBYWf1mG2fC7oAmg2N87CR61F5SytQeqz1WPoTLbqD",
  "key11": "Vk7eQjck7jMm7TsY2cY1yFwbvc15DfLWSRZXPggbq4syTpqXSsBpQvpaiNyP8Qdsjza3cT2XWTgEtYr1xWbsQ28",
  "key12": "2HVatfuZ2fKLqWRqTvJYmJnUWFiWQegXASvAQox98Qfgwthu4EmAk3ABrqc12k5EwDHF1aQJrpQis8tXoxz77Wdk",
  "key13": "2nafCywL7Sg9AUrjynQkKpy8zAvQr3iS2hVpujfs1K5egFWU8eVKyVshKuuxbgtg7sYCSJpoj2zQZTNxJrTbSWhs",
  "key14": "4LGeAHeLXr5vTV3oCjTVYsDpLDLTzJPo4VRbfU5dS5XG6RpDVHrasvKFD9hMvU1gJF1aUeNkFMwaqJeEVHtdNdMu",
  "key15": "2o55b62q3Q4N3DDK4brRHTiQ7XG9GaW3VQpfg6eFtXLBujUzQQpCUmEss9F2QqDzibUHjSyRnCvRPGkU9vLVvkwM",
  "key16": "MDWkqeWmGyKH3Eu8oYMHjxY89bY6UmumX3v27PvwcrQ4VgqfTZ2CA46Vhasv7UxgYfTRRieeYfoay13yTDrnMrx",
  "key17": "4nLSJqDne6ZZmzoHp9PSnpUXqXkmsn455pdGc8DdPUSd8D5WgQCgkXMsyXRF6xi1J691bAbxRevRNTwKdGRCKwAp",
  "key18": "5MFLZTX2uS6a76io8VVcSKfpLq5L8N17si669ZoDYmBhF2tUmGpJeFrk1vs283KcougvwQ9EkbcUs1tHfyi1PtVd",
  "key19": "3AGmmxZCYRDRZAsDc6uZ6ZN6Bh4WjrP5Am1pCyejCSRTVdVdxygQeHgh9a1THZXR5rv44RrQiuwNEipxhPuJjEWG",
  "key20": "2pzoFwoaVrH2NCUpc8DjbXZrLgPihdKcPxd7x7pXsjKE1ZVxSHFiQEDaXs2ZjVrSGK4cnMd4RrZ3Ym4kjaUZEKNp",
  "key21": "2r7DhGv8uLz1Cj8NMZX3xoCXnXFLKNTfCCgGruDBKukHDsVNyrPobAgy6wUCPRTVBhmAhq57B1nRs1bbVopx5dr8",
  "key22": "5E8256bBbaHPDiKaURgfcSDDFhR1Wv2MJpUT7ixNq2YaFRkcru48hf6ZG9WpqA4oQStTQkQmBMD7PG9Vc7XrW3nP",
  "key23": "5mSRpT8DegVwagpRUDBiZ4zqKjZsh6xRxRCUMJFTLBSKCyBoqmwsPxnfHK3EtkvUxAuJcon2VkXmTsJYE7TEXDyL",
  "key24": "4iG1hfyutZUAitbpGoQbkvL53qnKyPAk4bbMiTGRnyordyEEh2mWeqyYKfEDuHQ9iPYojwLYKR74d4EGCu4ZGk53",
  "key25": "3K51odxj2j8yXvcQV5grDgdq4y9wpGaZYjRxjdJLk9sh5baN8k688JqEV5ieobXzP4UDgjVZeh86ciWVowvuHq5v",
  "key26": "2MJmcAzsSGNHBGEtJ8tyaukNTKULQ9AbaV3UuhvZ7hPxhYXKQA7w28JZD9UhwGJQEkyNQYmw1F1WWtrWdg6f6HfW",
  "key27": "5QNkv6w6pJD6CMKR6U8PHjRsjjmb3T8xX1BUJBRqfRV47zhrV8NX8Dmzhq2gw4Xxew8BoYGb7VMZV3ggD3e5T7Wj",
  "key28": "3whVQyRdGnCZMc83e8WAb6bXKQp6NN4nDvqR8cW2EKMNVHy1XrBkxVcQwZNYnGiasNvAc4pTL27727W3ouHfcpPM",
  "key29": "3J29xCnJ3VSMjsXAGcWC5FTb2jW99g6pFkG4BPw126oqLRDLsNfZ1Fhxu8aUegWbaTj6Sd6AgQmmxjPz73DynfGe",
  "key30": "4wGiKuyr3pQfKbZUkRMppi6jSpeA1QbaPRPKRsxadj3Tki8bFsvw8dxAQkBVPyUQSHrwFPvt7p34mxgLb7x7C9UP",
  "key31": "2ya6399jtCDSfTiRwm9tVqYwfJF2LLm9jRH5U73evU1Dw1qh9me8sHJyJLpDktoJarYwC5gjcPETGA9tzh8pFUMh",
  "key32": "4S3qkgUJiBS9HZPg6Ps5NCniyFr2Ef6tmeKxx5LfsK5s9HJtmt6ocQGcEtkaHoojP1nZRWpxEJudjDTy97wozMWi",
  "key33": "5RdjuSVULVTgmMSae7Giikr1yUsmcqXeWcj3vfYcfCGFo3NBQ7Ucqs5YhWo8zkBwBjdHFfAdthikm7CdcPwzbNXk",
  "key34": "3Mi7KFuYakt8JPbehff93VNL6vg1qz14pFE32ovdGqwmG6Gge74n2i3T4X2hA89wawRWgXYev3Z2HwX1b3eLvfhh"
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
