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
    "2EYebJo5TmKVDxWRGVhe5wEQa7Vswd7qnE3gkdeTao2qKzEdu7wg3VZ9s66nA8sbQhoiVvorh3sbBvC8gkpndSrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XPNUuoCJ3di9WurbuynNaZX8FAeGcDrh87DhA1fvrp3YjjLJ5X8UAzZnMChH8f4i7YYJMyZ4dzrGJ4VTvPj3ju6",
  "key1": "3NEZLKr6AYoRhE4N6NBVJv4waah1DrcvgsJpWLqrX6K5rPX1yQNwiE91iD2FmtHKJKvMqDN7ddPGCPPZ4jD8VQMK",
  "key2": "2pXAB2DxGyrVKMTXcXAneZUi1n7m5Yb1PQ4Mb57YrLs985o2wUq93r5x1g2BCbBwwF7f2eLKcNSuQEKC64BkX2zN",
  "key3": "253KFBLTd2syEXLCLk3fNkkzP6ftb3rSUpT9GsYbTPBZjd17hiXYWUcpRXDHyY2YXDSNK11452pMwGR4FYtVeoX3",
  "key4": "36RVFAQrVaQexAVJB9fogiWsZwqPKECyG5VZB1Q28B3etYJTFKyeRdPS75wxffx1MGH4Y9AKVcEg1C1Pi4hA1FQm",
  "key5": "4RrHL8h6ZrgKwph94tSiueCeny3CbXM8ckMwhiYWrNVXqdc7m1tmaDpY7wfFv9pQkcp3YvWHPbZSmMP4sYn9jwFo",
  "key6": "3ttSC6aVF11kuaimBqCekbZMNLHPTrJvqaSq5oR7hWQTXDtQqFc9mNg75NYLgwCwnCVEL6LoHH1FJDrjrfgQbQ6X",
  "key7": "4inBAFSq8WX8AUjt1WdB2kkkmPfHkGG37EFMFgSfhBBf3Kw19iNc1odbG36cCoXbEupVWLEUYoy97xiKUBvVFu4u",
  "key8": "3PNPtgXhubK7XPfgvy7eREHoP8m9dxfYGFcbGvYeaQNQrnmFDH8qSEpjJDBBqAXxHFWa9ZqnjCBoLEhBk7YBkhtv",
  "key9": "mVATx641N6KK5RGhvMW9j4TTJmMyoCfjTPdRKgVTh2TAM1bW9hv3ws5AZwbfQ2fUPhw58Rxc9vRDKh2WbtFz4ow",
  "key10": "cdFcNUUSUrWqZoQinsu1pitknpkrU88DM1yDq9BsTgbMfHcncrKfdiExL8YYV8mxdBktKfwKwymfeq89r7baDG3",
  "key11": "L9KmqLt7Li13AYQefFzQVyyf9QZFRFh3hESstKX5RN93oDjtBz8FTgTEGw68Z3WKeKXx4dRAMZffCetYhk4BLbM",
  "key12": "4MoNeoZ2RKV6HgBcMR1Q7naAZ6k2iQ3UpYFnpkYiHGRXM85eC8v1iVXUmbQ7FaSVyYYQQWfsWD7mboa6Bj76zxvW",
  "key13": "57LhDeNLjgxSQowsQP2KpFL3F2qdraAqe4bDWYeNeho1WbnYjKdfJCAmc4NMqeaNYBxAHdeeeJJsvqsLSaskWmJB",
  "key14": "5zFAUzC9WEGyRJXpEFNop7CTSgm8aZHSZfmJdqhtZc2nUvaqy9YgPmcaLxsnzQwYAqi6CyANGzcpeko66iY4miVh",
  "key15": "5wrkkCNSmhfkpcR3byGy5FeLNMfKQ4SE3Bfh5YHvrekAEq5dKduUgk2FghUqT6PLHwRLLsS5XVmbunody6oQsZND",
  "key16": "2BySEyxk3NMFLpHGwUR6PLVx8YW3e1GYehUPPCT4YKeUEGfx5Yqjjxp8GuYon1DutRsLtgn5UgMjMqirDFdNt7kc",
  "key17": "5qi9AdTAk8ARGmgXN3Sf8ZgwLvFnwHCvXMFRSrRvjQYeGaRE4XUXwjYjAk2VEN1HTw9BWv2o3n7pFSCePWD5i2cj",
  "key18": "4MouuWs1BN8eCpedikPWFFb98uLxkvgYPhZkyxRfvPhKRE4dQugwFV7Kspm4oSknzJznqH7Evy4KTjBpJ6GiNodR",
  "key19": "5stsziY5bsn4bjnbGNs6rCLzYLUrYBwkyP9jzdADMYpHHeFP95paJiLh2JqsZzCohAFwCFt7ujnrYvNEmn2yCgKk",
  "key20": "5bp3cabvgKrjicSpZLBkQYiMbU9AtXoQfQMDawHM5GMKhNDBu1gKedsauC3mELqjMF4WXqWi9qjzre35MmEQTCx5",
  "key21": "3tu5YUgo3sQL137H2U5VMFb14YCAmYtLuZFQDsJwgaRarWH9f7gjPsnYZojkDucGTMBV5Mz2HzNfisiU8jSSn9H4",
  "key22": "3ojtporehg2G3gf6GoqhKGXLLtjopie7FfbBSaDzAA5fZFRaY731gGrBHeMqR3vbMPWtE6co2vqy4BdQR3Vk6DgT",
  "key23": "5H4Nkb4TYJjWaSTw2uEw2SutGaHHGsS8tCDYjDjHM9uCyXjUJX2hKhY4mtj5h3cgkV3Woaseh2bDoTDY7Q9LK1x6",
  "key24": "dGZ5291GrsN8tRjMBdzYkr442gY5N8cNr3AJbfHhmnNpQAbVhGGBVV4heUW8zPPAuRmug91MdZDoR6wE6soKFtz",
  "key25": "4rekeZK7DkNoViyufGPxZ5qvg3FPRpaSDpT3j1cghd78H1MZerDNMf5CFTysdfH4JApbsrK4iQhs667ruCqAxVwR",
  "key26": "3rb9kmmZdwJ13d7z66maFNZg88tV8NG8yBrXtnMusBqL8m5PuFSpqUhpeyJSdA3VLgFqnAsQiWMpSNLRvrPLZCKL",
  "key27": "22PByPj4qn2LULsDZLMRkoZShjUUTUQj1CFSscM7x7g8iNqxUM2QYZwjJvXeZB9rKnjzmiXVsE6AYgzArVkMWHEt",
  "key28": "krgee65PANCob5seGKCiPpWmtACXZ2VxGPv15DGrLf9kveFBMRe5Dir2tHN739PTE8yPZkKnkWUFqVwHDmtnXc5",
  "key29": "2TVe4RkaTThYykRLo1XUAoSRU3gx5HvhtfxHu58DHEDxfGnifR8YzERBbjVJYPopyfpQcx8dVS473ubYsXS86Bfj"
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
