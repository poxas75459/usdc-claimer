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
    "652msko8oEqn3vFFdazR8nw1xKHW5mdTPXfojunEpLNPUKbxSynGnM1jo1tEzFBosH4DXnrA9zRQESw7CQVNycZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpqfsXTbM6iWDFx4dFbYKs5NurDCBuiDyZqu7yZYD3getPGaQQnc1jDMhiiVCvvHfbnTLfRtqZJsPPmxeKqFep9",
  "key1": "5b5VeTwVWMXTt9cbAveCV1C5Z8ZdZEHxbVWwM31dPB7y3hCaXYUCMTQkMpxH25yNM6RypXDkjwYpDmew9TKXSF66",
  "key2": "5atBoFkBmXNtbty2HPoWNTNCpDmPhf47VVjvrSM2iEvckHYoH7iBwhGHwxbWrPbR97FGy2ReqHMT9Cg9rZwFdyRU",
  "key3": "41f5ZU8tMefbQrVuT9sJEuYQ822RYR8zW92gVgAhBXbG5DSYkcjpjugkJnFy7ayKfD5Yjayzu5ovuGCwRLcKXA9t",
  "key4": "ZeaURTebe24cxjwAM8oC22gwHQuvJorNd2AeFEN2R2eiHStfGwEu8YbGKvqpR4Cjap9UuJ4h3VoezSF412b5Uzv",
  "key5": "STeA4Ldyh1aAYpDjpxnwXycsxYBhDBEDtE9XsF5BjuRUR9vcW5JTybmFYU3187g5CbzfkvAkAFevvgETbYbuqEb",
  "key6": "ZLSJwYTPZbs7qJXzkGusU4rtziBPVjV1X8mab77d92txaNQB1PeWNgPHpqnSEivF9AUTTSxSp5KxQGT8c9hhCNW",
  "key7": "5xxSGfY9XZFoeKEEnJZKwP8LZnPdMcxxTzFFDeyaXxtPnvM39HtKZoJp5u6eRJK8tw11m1fMkZoAz6HDfjQ5Twnd",
  "key8": "5PYqFoWgTRHAGBQxgQfSRk6aQXAnZMTq6gqcrB55UwZqR7zji4A5BDrEKfrLUx7LeGThw4v7mNT8F5c5gLDgrWjr",
  "key9": "3iXs19coBQ9wjbBVf5swSMz2jfPKyRFvkzDMNSqaqGTeqGYNbb6ZuTnJFFF4WrjWWgULFhQ17Mv8AJGm6L5mTSBL",
  "key10": "2yJ2s97KY6SC47bfiyApBWhkdPBsNsh6NH5X553721kAPhAzXut8sZWqFd5tSYphsP9ow3yKHfbP6rGRb4padAuU",
  "key11": "3uwEW5eqHcqQkQAG7DPJmvzA67sD1My6dh9kpt8z3BtndL25YHCLMRneRN34zvh2bDFFoSQ8iEyntN67xEmYbmz",
  "key12": "4b7TYdRwq6YdwLnBmoUoTjQMoR6qaK2fmovKEnM2rNzScP8MhZuy4oJh8yg3fKSWHNBKdYa9czHnXiajdsoKuznU",
  "key13": "4ofzsSw2rQG6fcv3R3fcwSQQH87fAWKgoHqUyUggTAcvTJYUa9UtNPBRxxcoFyrurTGPiaSDh83wJAGd1tVZYd8",
  "key14": "zABVaytBJuMQDK2xEDNpyY9sQZZJWb8bDndqbyyh8U71soYmdMh8q8QBceS4K6fSFXdvrgwX5Fyoya1fCaZaw6m",
  "key15": "4DMaQ6voYcsNZCNu7szgAefHoXGqvGwbHfmM9nf57SqupTxGx9gKRHmMKrzu1zfwq3KS5joNdXRNW2dP781eZiPy",
  "key16": "4eshJnqyfsM3oYzJyv5kJzoCEw9ga63x8UUXy16krFqKVPczm1D3S34dJuvxuAWtEAiZAqiiHA48DaGARkgAnGSL",
  "key17": "2FW8cgK7EGAkZrc6brsjvjVUuSDv9NwXGjLqjY6WXrTdp2t9mUoBhkbHFFw4aBpgACY8DXgHVyFEaF9613yBbiHk",
  "key18": "3y93FnTBYHrtwAbDHFMHUSViAYa4TdZGjeVAYzQbLJmhHmviibbDoquYj3SvhhMAc8CbxhHsKNvRuxZbazFkxYqA",
  "key19": "5NpXeoAMpVDMt4MByaf6XGKSQyay9DGBXJx4arrCTaQzfhxWvmAnYqygNuRuLHK7tvh4K2qU3KgPzXtF5Zhyzb3g",
  "key20": "2UWPQAqh4AGZi6c9SmVdS83KYh5LcvAGv9tcVEwCQVxnc8FsHMzWiFB7Bt6vXzpig8JGcR4wgGDZEjejiKkazxv8",
  "key21": "Tk5rdF11CWYeKc4s2rp777ikKMUiwsqWCcJi2bU9srQ85x1H8W2aKPzMUCZJKLYsivCrjpVgExTUo5cGnKDtwCE",
  "key22": "2ERo28RoK29FYV1ZuMUqNoDzVQofdKNiLmqX9ztbrVk2KSCFAybmUsr128jwAyVEhu6RriTVY4bctttUeWnafhQi",
  "key23": "2VHj9Sw5ax9d9nuwDxjV34DnpPffBnbD9ALUMnNT32RsxB2x8g4eVAVsQbLXHWyVM34fiyAvg5SnwSWucR1SR1Yx",
  "key24": "2HBweWjKPvr1TSS7cyjcW4U2aNTKycpTZ15irMV5p8faXbtTMxrFFjonncxM2qo728z9wVUTvNyCAsCL5xJZeTxg",
  "key25": "2s5R8wRrP1o8oM1o3cT8s4yvsPJuf24xRHGpBXp4xrme4GsCT4AcTUWKDGmZ6uPJsSRL5cpvSam3WLTAdLivnTRG",
  "key26": "4gK1WfYXCHvP6EeoAjAxwmEAxFnMe1a12WN3pnSCbugREk53Xavc9c84FTsUufbhmcMunRdhqvmuv9Sv6C9gupNU",
  "key27": "53duoEe9Qvx2W92yM3TSGG4gsWx7izx84vPaGEoh8UzR3DF2T2qG3b9QGhYQeBE63R18nQDGXmoQk5P24SJ7hkh1"
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
