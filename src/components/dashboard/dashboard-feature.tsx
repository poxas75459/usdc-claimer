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
    "3mfYGvaG7nGWynMeA4fzoHvuDyTJWVMGtnug4f7ZPz2N28BteU7NGfQhThnfnaMzzfPNqif29jjXKzswxxfJeJ1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkUPyDKrbbLUQPff7jAe1gA2CS2adWdhmPR8rPrA5ywnYbduMhRe3uXdycb6UGZcnWCUqzBDnBC2BrErzcW1pz1",
  "key1": "qX5xwGUbXSPLcZwhjmYSLMc3HTBDm7uxKVgyx8aeAs7gsW6fPxwZwmJp8UybvHuJo4ynGrFTfZS1uCT3iHZPczC",
  "key2": "383xNmXSXW8P4NbyK8ztczvwMV2MPrKuQiHiLQKJRPgUzQtoHuckH9BqWZiVFvam8irr6fBiWS7htDJodKpz3iqn",
  "key3": "2S5nZ8NFGmpD8pbsxZ4Le4WLvCrbWAKJeoVu9PmchniuifP6o2HWEEr4dLnVQT1KQQ78Z2Sh4YWMiXQXkjRqSdoN",
  "key4": "5vU8Ew1Jn2QAdFcwyB5ks2CopLjUNNKN417pymevCzh3XdqENqyhakgCqAVahYqGQgHyS8SseExZeEGES1hXnbVR",
  "key5": "5jnNwg7bGH48BdxHTG7WAL53UNwFcSdPRMqAaXR6d3ePTzH2N6Lm8NXGVPvdLmgCsTxTn284FqnhTMUbmZuKTdnw",
  "key6": "63ae88P3Kw3rBxXnpGxddXpNzQs9p3vZBRuv5kgau8GvREmc4G1WXLWTPiipWcG1iktw4KcNEFvuJLWDC4UXAdB7",
  "key7": "25ARanFQhodzchii4akVS9BtN2vMktVWD33N1JBzcUdFuouT3TSM86mr2PcHCaZE3znhfBuBDGCMKmZDn6nUDkhS",
  "key8": "4QnH9XUi7caZkA1uM4puJidsVCXHtvvQRhHSb3adwB5k3Gwrr3SqaHSEDS5hssVWZUNRc1HXhhQwbPMC2QZ3v4T",
  "key9": "MRv3Qosd78wXbUAQeHoJfPzmQacYzLo9ZC19H8MwoQQRQs527cgM9PrLiHuZSWgNJ2mvSmNCKChTojswH39qxEc",
  "key10": "2AX4XAp8phBT4auJPeSNfwgRoUzvcrhuvteaCBwUWQDM88iDJBWu6oLxzu7WozMBsU5aTcWguRPzw6zLC5pddZFB",
  "key11": "3ieGBjjCMnhzSN9miea8JA9W2A2QQip8G1E74RCnGcqotjK6MP6jundRzYzZCWTWnb1g1GbCGKVG9jCtoFnFmhUu",
  "key12": "4Dwq9oh5wbeLGs4HUwLJqyn7GZSx4LhL66PE5Te6TgUkJHuJq66LgEx4wSiJkwp43Mmkr3GCfZo6E66Aanxo9mfS",
  "key13": "54XL1fWnhDv8P7Fg54hTAqDhMQcb3rfSEVkPsWuU13oTxQS7a8UGxJ18j98cTXFNDe612VDvUbKF9bbnAT8oHDHQ",
  "key14": "1B7hjtCJGn7eYfHrATm8mXP7uJgHCpkVAYtBtuqowPyWutWX84gq7x21AzTPNWCE7F82x8BNietgEsa3ZsRPvLs",
  "key15": "46zrsTMFcJEy1ApbZXurSNCdmqgQyioRWadj6LVKXYNCPzFg8cEAVH8hPZzLHoxnxVfjzZzHSu3e8pCWb4CvWcej",
  "key16": "3urcwcJTvtua3PBJKyQBL4KhWqaXDffcUE9GPLy6XeDhKSS8QKHHpBaBMUyLA1QNLeErLpQMypiwTfDaXrFuE683",
  "key17": "4SMMcPhUktkhC5EEwcJA24nQD63LVNZ4dZyDRbUEAdyfphjhNM3V4uYkvD2WSRtjhnXeS4jY5s5x63kjaahZ5ekv",
  "key18": "28v2FCJwYtwiLczExnmrwa5HKXALdTiuAyv7tq7UjrjA8W4GPqcH16YgcKCnbvsrNVLniTRjTTnPcmruUNMQStg3",
  "key19": "SEfXKdufxLfAhFe2fLFMGgZYVfB8RPncQyskoDTjo9ydij6FBXAcUbZupxmmwG6zvsctD92gNLq2V7B1RVq7DZM",
  "key20": "3PwY86A4Q3oXDX96TdLCE6NW7DW1swyzzzRHnncC8U9fBtcdySTe2SszMWEoCqmUvp5qVnLuABrtozqbF9DqF8Xt",
  "key21": "5ogK9bcEXmdT4AkrVNYiyFtyLbdig8Z3SPn9kwXtie3xFq5AhjuzmSVeRhrn1nmezQ3HGK2SKh2EuPuCEg3qkEzn",
  "key22": "3jAqEEpMTJec2C2cxZFSbFmnE8W2aBjtsmspsnHDBzmfvGohkdDP948F7JJxgJboK8fxN5gg6BJsXjCa5HEJadYb",
  "key23": "27WvK9tZpbya7U6YTLqfmiah11MBgEM14Z9jFN1G6A9xjrx86BzVQ2AroE7G9nRbLuuEGgkaWrDuAoJfZ58FMuB7",
  "key24": "2qW7iGTHtu8xD7HEStoGbZB9Xas6VznonAUveG9cMJh1dsLDaEChpQ5TXRGQE9Wg6a6zq8Bgc7pYs5Kahxb32pX5",
  "key25": "5shsxE4FtvoxZt1UKWjowtGCWe7qCbk4QywUisLinMaPv14VdsS4iPvf8Y1DibArhcGtjxxGcYJJUAYRX9q5qAER",
  "key26": "3jpFRZSDq6jXXbsxQUT1khGjebn4ycYjbXU88BohuM2DxdTR3SkDY2YvE86wiMkGP9X3uGWc4WhdcbKZMqMhZVFv",
  "key27": "5WZFVPKZxDA1h9PwreZL86BHDBABrybvBY3EtQ8idRriPEDWTUVhWAKfW3Lpciw7xcLgRv8iPfjN3NrBZ1inuyG9",
  "key28": "3dg96HCN6TZTvx9aGuqppFNVpjn2xNozw5jLA8HomiufgDnq9hu31MUfjSU7XdHVZXmqnrrKMr8tqCTFRHh3mGJ6",
  "key29": "4vmPwso1LSQjCLdspNizYL1pyB3GpLE3um1FGPcXkr6MfBeyLgZVq3hQws6E8ZEzXJMSV8qnVEDxRW89GJcvAQYu",
  "key30": "5GSdZFhXWxM8mzPJU6avgX8wjzuNr6tbZb9Gp481bafT4yTGKrLTEzLr8PJmma5ABCzmyJAjxBVJn8Y5a4RJhtSS",
  "key31": "uP1ujdUvBpamP8jnn84g8M5oEN7uTDgm7xP8EmshwfbEvnWef4i7YJ5JSCNvHzUesbocTXZMdP7iS4BZDdmdxg7",
  "key32": "PqHMusxb47NJn78p63D1cU6sF4YfebLrQV44Pfam2AKMBRUq4YFworFnL9omAW79jDjtmGebuAcNWPkVMGvkZQz",
  "key33": "3FWTeuYGDNhpPnfN8YRMzjBQC3WDVxKiMg72USF9jNYCiVeNn2dkCXJoG8rMFsuaTPMLBaYt1LNEmygqhwz68iBC",
  "key34": "5PXVDGNwP4M9p4GBw1n6ckG7X2wPFBHUfKcbsxPAkUAh33rJCmTebmu7YMsZ3Wf65e8ntjf1m6a7r9y5MJnhmAJK",
  "key35": "3gZh78nmvVZM8pqCdYMKmVZtvkaoTGV6cyBuJyZhggPTDcExnhPGq6aPgRjyWG1CEm6kPS7Dn8Y63FMpF5PZz2xz",
  "key36": "5QgCzBH2mdmPQqHzJHEs5RkwNsH5Ud1zmp3M3TvbJmGD7xGSPnA3a6rtsZZizxWGRJ5qdmq3qaBbyCGnuFExSXRN",
  "key37": "9NaHBdRGXpEN8yvCuKReWCmdkesD5WtdcaS2awCeCwAvKFn5bGzr7BjDCrkzMvzYbd5UMLjuKTRK2qgBJzJh83b",
  "key38": "38oG5q2udRrSJ2mFE7TFffzUAm5hfqeMJmx4nV6srspWpJEbhNvjyHBo1LaJxAKAkpurooXEhmMJuMUVTdb42J7f",
  "key39": "7yf2y4MnJesm3eDpkj5LYngByGctV666pswuGkUEuFCBAdiko6EnmmD1o3UBZubqPesG5qbVaJs2zo1un3ZEWw4",
  "key40": "2k98fm3dVkErjyHwiU2jrBy9Vuo3sGRSc1P1RhaqxScvDUnAvBSNkmVt33wYussBSBbzBXmUmCdzCZGoWGKG6XBh"
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
