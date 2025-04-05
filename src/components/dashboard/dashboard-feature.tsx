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
    "5uAHWvue2zJXU2bT9Ef56VxvjJp9YpSxVL3W8rCXb9tZNpguz8YVmZAp1rUBPS1z6CsEdekYudxeEEbd3bu1nmMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63cFSy6Fqx4AySo7QMJCGDyK6CJJpRMNkp1nu8eYSxX4g4VtpPcfx2J95mJZDuUJrUFK7qVSFGjn4Y2wLUTVLsXg",
  "key1": "4A63KDxEtr7jK9fkyrs9TG1GvRt8RqPpixDWW47dt3yV9VjjURHmm98UWVq6CexzYNm4NkS6HN5MwxuQYrZsUfQB",
  "key2": "4RLfqPyHaECSkukrnRY4y59DgBKd9xs25zhphJBrZJXpJ3AX9EipfyVW1M1judn94L4brqRGZunUfHCr8ui4G6oo",
  "key3": "4az6e88H6GEmiqTTmnQqjVzFLuAkdByv8tHe6oWEsoGuFFvf2ssCbf2KzrfkwHFptufG3DkUYFfBbXvf9gXxoEX5",
  "key4": "53v5JB7Xi7ag3wtJktASMe3sXeyNz2saiuYX6eE1jwAsbAsPDcv1JxdQ6MtasfzGzk1zfadCCvYsdKfWkTpTK88t",
  "key5": "VzpeLYspD8Yy1jKZbJfXNpDEPMWUg5hjecrsSLKCV4zmGML2Gpfcw5tBkvqed9QoxrJk9XcePpTg62HQDStrqqK",
  "key6": "5a2uwfsVLR91ukQvrYXbwFW1R1E7nUxTK21euucVZfBY7ehSa3r5gLx5vFC6Q3tmVqWZQrNJQsp27Cf3kXHtJN49",
  "key7": "Xh5icHTxryDv9jmk3LXQfekgCdiBUHiwSdu9tmzZrsWtsbYMZbib4W83UNSCeKSsRAxrdrHSybL48PeTpR7QQc9",
  "key8": "4fNpSGidZgxPoznUq1NyK35mCoAqJECSJpmXj4fxQCyctkaSeeWVFPgUzrasmLkiuAUSAyxNWNSet2xfDA4wrXdD",
  "key9": "5WerxXg1E6s8jwzvK6cxiqZjDmBLUZZhijabmLFbXezXLVSdhwsEziEr4a46uXcXgjZDCpUTGgEKLjSvgMJXVatu",
  "key10": "ioJwje7pLdrJh5HbJuJonhfadR22tNFEAaEABGNnkbNmmGJz14m72Wi6txFeUKScNHnbytZX9739NoqgaacPEb7",
  "key11": "3t6bVuH1uaLeuNGrD5mHEnwH7jvhEJtHzVFwaAL7F3k2QZrSZGWokXU3UTED3ban94NgVeXT9UKg7BUrtM1NKfgH",
  "key12": "2yb6kVsZqQrQfxcM46mV7C8ZYrpmZGAgCaZ5db5BCwHQuUhCr4o3nicfhnAByphTFbZS6E4r2ohbmsfdXHmuU18v",
  "key13": "2cM91GoqyGCAVBsVTHg77pAG5oLLwGzT1eQPavsjThduqPDtYDpVsTVtxoPVhVrCE4vuBZnGsz7ghLJPBiXjMNjM",
  "key14": "3iwX1aVSjcLyrYKejCLuSU4mqST1UJVnS6t9LStGUbmJGQDZkJuCcPEuHYEFcVeYDsua94SbkX48UqrDUpdo4pKp",
  "key15": "39HqMgeyP9FCps6PyiJVNMG8Q4dtEX7K6x5EuMcfAWtCdudyb9THwdU5p6tELq6U3m9N88sJBgy7EWHsvCbsS2UJ",
  "key16": "4VxWZALTV1o46wrYr4YjG2HxMdpQXHGmnLP8icAMHNDpRBaWYfSLNqqTZP3wjk5zicEM7NEvFf1wzikCiFyExR8M",
  "key17": "4ganutPKCvgttFQetYN9jTbFKDXTf5KgJ4CfcdNNS2D1iq9gqq7aqrLgu6KuKDHgtRHuXx9G55REZfFPNo3qK6sQ",
  "key18": "3y9Qkjik5AMTEHYhXiYE3SzABfZTCL41p7HFAk1FJxxvz1oDutczpVUnr99XMLsXMMS6EK2i3rJXRDxyz4zpMPTK",
  "key19": "2aGufhoayDqskeZzdJPKxUXLTL7AeQvHHnwCnga5Bu9rhGDHY9VzKa5vzitVG7HnjvtWpJANhXtpWKNWpiz4SzY7",
  "key20": "3uWaFGEtiiBdqTFvB3rmiX9aTSd4nt7d4EnCHPEuYJFRiwsx3PsTxKZ9N8nxZnQKUEvzFQbWTDLFpV4uqb7KWa49",
  "key21": "3ussFGvFFAd36reGQgPVrsDpyB4NCTsEGVinoYv57ZQcNpn66XBWak4TurXv16Bps9BCSEeoWUajC2cQoc8b3SZP",
  "key22": "3fe3pZsDjvrFNJ9gDb4FUPHaG4py5sT2FNHdHELcw6coGhSV2LFBGpq9GCTbE9ezFbaeUp3ktBvnw9jezfwYBqFU",
  "key23": "5cHjcnMDxRDEZnrdaBUKrBCkxdjdG1MwhVHZkdAYKGKDE3g3ZgUG8YZH5Lm8qGAK5J9ZEt93SnULWPrZwsQt6kYa",
  "key24": "5r5MqYZUcqEoqHeDqz6YFKd2R1jSxcX531mLtUVeMh8getS6M74uRDsdQmgqSGu7othk855Gf5Se5ZJbm8LcqQHc",
  "key25": "3qnEVW5ufLDbyPgKJPpNd1NKYC281xLFrFn4U1AYZfnQUcHxKg58J412pTseUu8LpFsYTA8scipbDedhYivUMMoh",
  "key26": "5fmfgahaADmQBjhNikkxrrSFQ8jUzjhVLm7kCiJ5KUKPoMdYDUCY65JSMJa94RUDBwdt64756bhd6oBQb6tNxUuX",
  "key27": "2gkJAdsCEF5FHBE3PgKy9KA2bvSVtdzdiC1N8LpjmzDpxr7Z11D2rBGJ9Pe1i23hL2fi53c6XbsNPX9wE3onD2VE",
  "key28": "iikuQV3aCaQkJ5RBjBPzBXZ6cKN8kPnw8ZYrQCWE6yATnKTyeLJLpdc6jcqx7UPEoG2LURCqKiFcxgHTNx5RTXF",
  "key29": "38qc4PPUPtemWxgodSp7AiqUPspaKU8y298dmGc2TYWNxW6FzdqQBx1DxhtpasHGcpwwPKq7agjHJ2mmKXmawN1x",
  "key30": "4LnFTDMJhAc5jDXCLMd3RMcnerWQwcNExpZPUH6dmnSa9wrR263rdBqfA8jZzP4ZNGJh6sLENtpaBHQYt27jcEBK",
  "key31": "5T8LpGb81FBrGyBHDYrom6q3ZqsG6pYhFFzEFBTbdnLPGBEcV2C3Vrfk4UEse4XbHGpPKR5sA9V7jHAMrCaeu55i",
  "key32": "49WZaCP1inh4QZwPh1faMKoD6VZmfng7XWhFwbUcJYDSwieSUwghh4vdrnbsdDzoMdAMLdi3XXL67CgZX2TeqXuD",
  "key33": "3eFFSdVkuCHAqQY4ExpyPUUQsyzPk9NxM7Nn1WENDKbBSsBAVivKgm3kkQCMFiPB6VMC7EBRKdmFZY9hnpUyfGDH",
  "key34": "YWyfzRPXBHf4KvzC6TsRNLiBPu6ojABZNH1wnXXkK1hhtJWcJMp6nCHZ2bzeor4dn9K8RF7PmrVxyu22d5z1oRS"
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
