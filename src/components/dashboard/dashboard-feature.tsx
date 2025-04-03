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
    "26G1xyHg1tfDBkzruu6yx499t3fWmugAo9u8YzYReyYjXRbdsP9urRQ5TuSKQPXFhHGr2EWoNBodB7pUCczvMHWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T18rDhhhcD153gzMq5TPMNnjZ3exai91J1vG2MvrXETBm5xwLxUcft5zAdETPQAs12g9g9bzRhRkNsR7uFhZHWN",
  "key1": "39LzV7KDfsgaLSGEoLxfZ5Xao9FbDze717Zj1N2rBha6qhebYqZh7avbwXaWEX7ZJz7qkVrMH7cRpYpinCVbMCwT",
  "key2": "4wgMUGmub3CcTBQbpRECuabgZhnbRyUtXUq6T1aUQ3CxFpDAHMnYEhDU45tPVqU8SsrVVcN2xEVP9BZcPAyiYg2m",
  "key3": "52QkPCwAZhu99xJXfq7xm8xKtCsxqbdXvCUmxXEHvdz6Rskvtf1bmNP5UduESyHPiinMwmeoNhmZDSBe3vRHtfsy",
  "key4": "4z1j5UdTB5NmEh8aidvxn3xjVrzXYNSWfMV2sPWjkyzLTcAzVVuz91Ugddwa6G75pw8KX9iWeoGnnsbNu64bkt7v",
  "key5": "3Wya5ezaCDe6zLEYsyTxMLXARzyAjf48kzf6nRqDQNoY6B5rpPDihsDmWbjCdj1DhgAhdSoBSFYTBqaYnqtdQiAw",
  "key6": "2ZApvzDSzoRd4BuHm8n2Nu8thN5E7ANx1rQ76rNY5HetPvDVm3ACyoZfMGRmpA1VXYQvmE2E2F9mrKY15PqoLU6r",
  "key7": "38K8c3gMb2pgHP8oUBeDXt1uFt8NynTUVUbaRdTW2A6CRKjfLSmHApqRD7f51EYyALyfefoc6735GuYXNkKDmgca",
  "key8": "3T7ZL7GitGRbfK7PK23qB53kJxk9BDbJpmdE54mcEZ86DEF8MCsgK9tMbrCrZCd6LpFCb7tZALurzejM7sZTRTQp",
  "key9": "4B7352DKQoFnGMddBaGdhPArWLpS73yfbafc1kGJpPaSTnHZYpk5Jz3yoV7RLEhJt9ULmBUphNu1Rmv16hec5yiY",
  "key10": "SPLwgqGkD4pAyBvu68WZKXAwMC8fjWS36m4QiyA1XAA4Mwtg7xTqyiwLTxbJGa2EB1mDkuvPYm7FCX5aftnJzrc",
  "key11": "31d9aHrhWoEeLUDRhsd1r1FSd3ohUMpkNfxARGPScBuoCY1yJ7LUXbgLnTi9K7bxqZEvxavF8DDthxhUo9Aj6ZZG",
  "key12": "3TtPsAUJAVC1mEfd4XFuXEwqLG7cnhdGTSstMzJz2Tx492QZP3eyGK7SGHU8ARd53gX5f2QQwxdF7qqRBXUwdx8K",
  "key13": "3y3tvvjjpd3BstqRPhDyui6Se1hQBWQzAbq47uRy9YKuY9Nh9NVXjha47MRMdDNcRUVTiFh11nPhFA5YGHjmCYVB",
  "key14": "u9vhb2MxDk7q9Q1bHX3iGVhHLrcZeShuAgQ5xPTWfh4sLvxg3Vhmh2keV1rZeK79u7k1unGcNaPEwjrakLoBs59",
  "key15": "4CMZQRcvPQib5LzkVjQeCnxMZ9Hjrr3hGT8CkVCMUQdP74BFYgNGScDGHTQHznTkUJ9MVpi5VTzY45aRN6nfW8nF",
  "key16": "3Q8nYsuzDJZGCXbhzqz3BAXcjBVtGjEKqoxjTrJpQvkQGj3gXFeCDND2M1T6dX7PuhY5tDVtYoGJjNfw1YpJHgbN",
  "key17": "37gbA2FhvGsPaFotEN99iCYuG2LE98EeZQ9vz3j4wfhWP9NSPKzih7H7y9NUpYHhYPCRPwoEfxGQtog8CNQCuijk",
  "key18": "5AHYZXTLbynmPdc6QzxqauEVVsqxFfhevaS9Z1hxxyarEE2zbxmParbz3vZnjxZPJjFxUgVAnrpniNcpXQX9v7g",
  "key19": "5ULhnzVAZeNXQLaRenHdxbFuAhuAYcJHueMhvLg6tuxZpECbnLmU7mTuhKrYhPgqF3sQJg5Hwv7zvY9cfLowLSR8",
  "key20": "492dNsAY6esy1yc5JryWsaskkn2ocFUrrsh1L4Vncu2ghKuojxTKPJyWPJ98KspyxQfiq3141TbPD52QzeedQ8N3",
  "key21": "drUS5E4V4kZAFBJhyc6oqyeq88FQpadiod4yH7TvoH9UBRhvJeahyAmgZPTj6D7dErYgyFWx6WzQjcZo5PcjiKZ",
  "key22": "CNMuEGtzAHDCWFfatyt8vxsuvBRRqD4HYFkNRgr28ohB3Rbo6F4cQGUPonGykWjkLWKPyUpnkumqCRC377KVevz",
  "key23": "5RfBsjjUxAnzgm8pmgKiZw5eGAegnRuA4ieFUeKt3fomCugb4aM6gVTgRfBRFJ8j9m4fhdBbUkbRVwb8q7TkUQ4M",
  "key24": "5CXCLYNvFjhB1RLsYX2RAiNixed4U8XUDhFDmBC9ocRmMWjFMYXtXSBZV136p5HdQ1J3EFruuUSwCo3kNKDQaFYC",
  "key25": "2Q6ik3r6NkF9dKorRis56kG3yUu5CjLtNqjuNWc6zmbKsKTBgQZVgNigDGrSC28Sttf2LFSBbgrvCn8t38RSUSa3",
  "key26": "2xPrGdNWZAEZYH2WNY5bJcfUyvK8ao6igT1LPj3SdFECqasPg5u7qSGtc5CdixkdtK5ZCxwJtm218v5WoSxHgwWe",
  "key27": "2jAuy313MLhMbTvhKJ6jDGzhE7RMwxGXfoX4DZmShTrckdooeaVZdzjZfrFRYU9CYB89Rk2syz8rd5RFbA4zpfMW",
  "key28": "3ZsonViqYn35GY3XfYvAnormft82wYYVYJmCXBQyccK7UZ751d2Ycpw4PEioBkejSYkqSCrMSDwHj192T6idLeVT"
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
