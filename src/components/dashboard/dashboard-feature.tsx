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
    "4prm3dG9aTuHbUVmJQ1dnbzMEjwrQd837BuxpPCz1PRc6fPudz8pA2K9rYeFTzuFxMSNj1d7XTtTtwvs7i3go1PW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JDfA52soZ16JVYuK5WHwd7UrzQcJ49pPzcPGqwZ6PBLjRukDAcVNv1y3PXtjJs6GFk2UuVo5nC61TFawfjRdk6Q",
  "key1": "2p6MbAdzYNzk4moHiEDPBbUkXJvBtkpM6AofkkfcYJ9dJRRABYGS37hXNoy54J46ZJWCLe7W31R5ceFmFhRWNSxX",
  "key2": "4RJyzFdFSY4dN37WvKEEjmy4RwsTLoXehNSQ4EQEUwGeyFwcE8z4KUEtH41MmEVN17YkRL6hYketC2cmKnWAXF6k",
  "key3": "DhQtyDdfV8Y58BdGnChVAr3CeRKeU1uRrgQMuiF2QJx3VLvULXRwcqQhQ8bK2pfiNxd1FikDs9ffdm15LpPrEeE",
  "key4": "3HShXYJx6T1otVt9wej7prDSAUmhxJURfhiXZpoYqnFM18Rpi3A6h4GSnjd34FUaot19VjUr74B8LCkhbMcs1MV3",
  "key5": "4ygCz6RY5TaWZqy9UBhVrRgkNuUwCsnZPcbFRpgqcxfhLYxKF5mtiM2sdc9tkciLo662gqfNpE97QqSVRzV9eywR",
  "key6": "3ehzBWVAFtJH6YaHRduq4gshkYy62Z34SxrgWMPyLyFpzRg7whPUCFZaPcLxS5nwTjpBiTGGA8obRgSPuS9vqhHM",
  "key7": "2cGapCc8sYWM8rGJU4ZidrXVpf7LbJqu7j3ifQzrG4YGyGsbSHNS7xqoUtHnE9vYdFrgpNhZBKLS9SLvYLYz5mHx",
  "key8": "4TK66e9ttMBXEJrinUsR17t9ZVPZ3gQSaPESy9xSR4Y1p7CD5yK2YyLkeVHrcEQ7KbEc8tG1dPrBwH5hLKDR6vRU",
  "key9": "3XzswnwMJPnnmYBjYmRPKaqQMyYUkq2M8aQJHmdx3qCVmvTWekWfVMnpzpAt2hUUPnMCRCPHxcRMB2CgdxKugsLS",
  "key10": "33FbDAUGK9t7F4qaKgg6dJfXTcBX9edV3CbjhZC8jWQrSWHLytkJyEb1SnZZk9VFHcMnc4tUtPcsviYjhY3ESB7G",
  "key11": "2TPnHA6P1n2o5od4egftD39xU74kqDAS1aS32ZUegpe5F3RHpnVLu5wJhMxMoxPLYZhFBv8fgdncHZkuERJpMwHg",
  "key12": "2XZjjmD7iGEiTYWk6wQkS62abLrSbwhJJgxYjxbK2GGLAWqF8JRoqVJpuMZWqLnaDAprgbt8z5z8zUp65EVMNXeu",
  "key13": "2szmoHJUnNUXMaPwGuAXn8RfTAmy1nMEE2KSQFkvD7h9L1PMXjcoMtQ529QLi9o5sCSq7r76d1fcftRTFwapmDcH",
  "key14": "558s9W7dNeaRaWC4kJNBjsusznqk2bvrL1ekDppX3Q9Bcz3TQ2SYAru4BgWyvQosi7wk9pJGEyh3aST5xsZT8FTP",
  "key15": "3W4UWpcwvX8fofvYDy5JLPff6NrstMPo6DisqcF4mM1Nz5hSYw6u4D2P9PGs2Rxs9XNyxJi881o3UCYGeJanJEZU",
  "key16": "2f4jjeC74AkCBspCynhL1YTuZQMk65Vij4zqVnLHdafUdNwh6hUaB5CMGRJpbHGZMusY4vV4zWctttZ2xivC7KHc",
  "key17": "4fnEPwYgmEmP6fFrA5xxrieeMb1fDpTrwfZDkmTfs8MZW2zk1qnGG7kT8YbC14T4z5ZYkCRcnhr3pgXrEKxdXPL1",
  "key18": "2iePyHhTkUvQgMTsSgmre8njcM3mPYkYgA8iEaaLNCNCzGLt3pePszzSpoVUCSv5H4xnbBWaFFbmdG9aTXZfhzhF",
  "key19": "3BA8bvUMBJP5YRqUMNS7bD7M62Ygy3r5vRSNfjj6BPMjQpzhKfTocCV81HCYQGu9b2xhxxC29dGp8HH1T8sPdLsy",
  "key20": "3uSVajSS79BHFu4dCFsiJJ94pfMuULKHwvGHK29SUrhmbSXDoL4JdnfnhUUSRMPjBynCFfPnCm7KJiCL15LhPnh3",
  "key21": "43Cs6oC6uNMWMzeneviZrar8MRm3YGHux4PWds94Yn1QykSxCoiQx4steMh8on6WdCqcix5oH6MMjpXWCvyWhEVr",
  "key22": "MGV7p5UktnBbRdopgAJ9iSck7uSq9Kq9aY3SSmdF8VGXsr2qS7Ja6aieJt5DhxaXK9ejyGjQLBrqJEik9qwxB3D",
  "key23": "kfnhZax5gMaafUXike5GUs6NSnwiaDXFKA69epiavnsGCxFMzVLpzkwht3egpfZor3sYKH2SZYoQtZjBQysD8bj",
  "key24": "3cVTLKZM3FBQpCenMK5oPXnceBiVirQLPVN1moCn4R5KTqXjFZkHAj1gLnYTvwZVXAvctcmQ2ARNEgZ2dE6KjKCf",
  "key25": "59jYrKuYLTqGTF4nFwYxjAVcuLMwBTv5zRF81npPk8puPR8utmmvTBvCku3bQgUgwdEd1uWdimkA1cZcx1KcwUQP",
  "key26": "5B716dXGSp9Hd2UmdzgaGKCiVfBvcQigcyWz8bP8j2eGXA3ts7MRVjq856py6mzd9z4JyWZr8aUz4F1kGeYTsPLr",
  "key27": "53eYAef4FD7uuXgiFW25hFPMxUzXkHi9Av7UVwzxkAXy9xy2hyTu8ksZQGy5ULvUZx3XaTyGhkPEXRhUQo7m1vJt",
  "key28": "2vDd4f7WRqFaLJUoQfGPtmvrUQP6woPkTbj5pW8VcNW4piTiDneUD7PaD2jG2LF7ANaXAssgu5mULc9bM7tpKysD",
  "key29": "66AbLp4h9uBvCuJ1aXpsUPnM5Ah5WoWqJnNnQg8QUAg4gj2TjtRdZkZGbg48D1aLMEd7Wkh42FWKGy287DSNNQHK",
  "key30": "2fEC6i2uGPz3FN6vVyFciUSPM3uZqf4hubUudcQRjCiQBb984YMvtZAJtWKuQhjmmDvdp61Wia4uFDBKxrHxFEYn",
  "key31": "3USK563LEiShNvi3bBrLtXsD35b7iRpy7KLH5jnoncLi7JSDPuKCqRAkCgtGtmFhRCf8V3F663qgWVzzW8hHpiGX",
  "key32": "4ZecirBRg6yeaffd4uaebSZgUfNCLRmKVvpUCygruQz4kihbFj3q1ZQYLY3hf5sUxY8bwZhBDkJ4T9Q9EexdDGCw"
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
