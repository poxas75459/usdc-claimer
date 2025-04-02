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
    "36Z2Cw4fcV6cx9fc3gKKFu4TUXigunr4xdHdQrSxkCtDHtHToYqUuYro5riveYT5rbdyYmhhMC8ohDnVik6w7zng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CVSPeWWtttyFbJjN6xSmiPxWBydsULcqawrMmENDbzgE8tK5gR86KzKQZaD46bYqjCFUnJkoy4dfyTRyjv3oxwj",
  "key1": "aNwHUtNAvjjQfWeHDuhnPpLxLxPajCK91TsoPMhGgCav1UAygHtVWPDV2dKspELBev3SCJh3SLpfTZgUDoNQj8X",
  "key2": "YXQueMtXLyUnhSQBiGLb8CUtjpHt8Ccm3siMoxh2gb2RwhMo3uTUvzct3mjXNxXHvq5D9m21WQECsjVxcgrFBRQ",
  "key3": "4T38r4UpKTUEVTbCnDtkUbS3FfRcuc7Ft1gpLwBg98qMdbRXNcv5GLbgH4H1A5h1zThuCBptgxQTefqZCsu2gg94",
  "key4": "RB7ut7gEMHW3XJtzPkSsadC5Jbzrn2ALrNaFmJ91XcpByK8L1CHrii5HgyZzH3A9vKAP2rdG6TPgqt56cSYrUTA",
  "key5": "3P3L9DrY74rKigPvCFTwtpBF1aySyBUDwWL4SRSQcw9NPMpDQMKHifnngyGipDfw789rwQHynoEx6kSV5DCfSDXh",
  "key6": "5y7d9bmBrWAr67yef2sYMkEsLuYBqsyXnjhqhSSPUgJZN59YHhnb7V5VWDxhmcWjQp2FYei7QLiJfEVh6rbqiioX",
  "key7": "45eeLWFLKAME622BUSmssK3qt692symg5P2EjZ6wufiiN29dqVr3eV7pP7sdUETWtUQXE6AEq7Povfg5kdnJuKWx",
  "key8": "5tXbbxNTjZjyKvK1hq6bWBEKHNygzfUjsTop363HqM9DKbtgY8E7web1dfLGUYjdYNxsa4j2mKQNwz9koBTxCicc",
  "key9": "tS68v2fTjSiT4Aic63EhNekAzj6WUKVvRxrvb5epxKcHsVWVNCg2BAqZ71dV89fCjRULBLNg68KHVWpTHU6xYHX",
  "key10": "3xG19Fpsiaq9Q7caGU3F95KnnKWer2o4kqcqeqTbTJLUJLKEew58HkitxAZcNqqD65LjYbGKTzS9dX6nPXomWJXK",
  "key11": "K1hthoQV5oLH7qQePpjuK8S72MjhFUnjWxdL2aPUUEtLrBj2PYRbR9Zo4YTQ7UjfjdngqtNrgFXEUFBPJEpx8Ks",
  "key12": "9vV3ZyzHBRVNLCxehLNCwvwrry7BcwJkJQdgGwg6XXdxJ6GimXVmPmK5vCBkuCapsJsn5nkU5KzDfpeq2afYKQE",
  "key13": "57MGgipv5WoQDb7Rz9347rJo9kvtsHV4vPgCWQmayT194pu3sMrzfbrxUpcZGDZyoqYxSqmJ1freE2eurVYDcEZg",
  "key14": "Hh4YJ9kU4VTuUfuKrSRd6FoSTaGdSTz5vPSSA9pQoumDeN635GJEFyQFZkk1tyqQfTAJ5444WUQcZ7u2eE3hE5G",
  "key15": "4nLhe2UQsyVQ8bg7sY2sAjmc51QFTiDVhXsPcvyZXPCRJMF3reRceDekXeXUnVq8kDtweyFetb1hyus2j6AA6CmW",
  "key16": "3QP83YmMqa7dxf8FL9kACeQy5UxgSigi546vxmuXxajjqeBmokbNZ7Rz8ZmG61xm7FsBuHVSGsE9QmTfMGwhyQjm",
  "key17": "4wLuFuvEogkamWhmbzDpZm4UJF6DBiV5cQuoETxkg9VDxhsqigUiP49xvsaDh5H5ezbDhotkbugFGgFcRWZVeQsZ",
  "key18": "2fYy3VwB4rFYvxWEWYCde8tswAEH5Nn5mzd1q715dss9wh6CNaA1bz93UigX7eTJmw1yWPAPvYkiyqh7YYTjyqS7",
  "key19": "4pTJgkULaDMrks6wwRqYg5KYMtLNuhKJhMC9HQx8ML4ZyTV4WN4Gb2Km6hE4moq2cRWFipjfZDx7rMqBd9yJ4Pfs",
  "key20": "a7ZtF1egprVKx1s3Zp5WkYfDeK5xexoKxAY5MnoCynm1ESH12ctNyjF2NaWZxeoGnvnDugDXGht4pdQx7yfd8hK",
  "key21": "4GM5EyBDJxAyWmGixVcmBZxt8VdV9aSUuGx1FLABiCsYQoXAhizLDZLHfxYCghB295EwAx4zi3FXkuAzcdn8jMTk",
  "key22": "5V96HVk54txjTUwjfMDqbnMoeVu5Hy8QwVzqCZyWSiuMotjap2VkwTp7nFXboh4M7sqpaGVTwESL752Zud5AETPL",
  "key23": "4R9BQUtXfMaAv8YqjCYbDwLxyaBad9raeYnm9TEKpuF2pCdVEhZKZDxJk6MUMzRFynaGieeGGkPVCPQf3yzsJbh8",
  "key24": "4xfdmbsuPcfLbZWYH9vQ6oTfpt6JRadQu2embGahFvt3vvqFD488YnAPdcU4kdgngnF5fzcgUh7KHFx97eHxzkAm"
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
