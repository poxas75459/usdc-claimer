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
    "5y1yCqNPPKjMEeTguwKftBUoQQv6VQofSqpBHrq5WYbt2kEU2grnKx8C4DH2Fx9G3WFwJ91J9op6K6LLe3UZCGmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v5WhxrqiA4EbqC7U5zDciTJkADjPsjRwTVxZRaqqyCDsboy8orJv7kUyUh14QD6Fpccm9mqXhxESJfjZrrwuf2c",
  "key1": "37v61KYQsa8NFsop6rSv9ERfjQwJCSNzLUGsXiqngzEaVRWCvLZFXBoPygVnaNZNUNGGnMpksKWAExh3NkyEPCPH",
  "key2": "3G4sKgTNsYLgZfbU3d82xUuQZsTHuPgEyhoRrv4gHvDL7ieqx8w8C8PqYQp3UifzxiGPDQm5PBxnKNBNTt9o5n2f",
  "key3": "QbEHcUoaph6ainzvhhBpfRc5sdY8PErrRfzdjhKr5b12GsNjgUMD3ZJTHixbThHK2vAPiVmfdFDs3V2v9DyGFzV",
  "key4": "3hn5ioWQ7M5HpktHPHZvccuhvmBsVLDt5xkRn6rs3NUyGEf5GRKGXpByD1gHLtdG7oSEn2LDdpTww3qGEoszYZ56",
  "key5": "4s2oFjH7yMJzX8RmbjWndEH1ER9Wxp9kSRW81xBj3GLyUMn1Fpz76HyNApv6xFkBNFGK1nPssoEKRgiA16MzfdsM",
  "key6": "4Lq7HgQKiAZo89K242t9UyDxKkUS6b4e8DgVMr4VfRgc2wfa1JoBRiBuWTLZXc2RThkbN86GvLngnKiGfN9cKrD5",
  "key7": "FS3zSLCSDbeLjVHK8XSfhsuMUNHXc7X9WubayBmvBVjfYeKS6eSXLiPehtxFxNhX9zmT4cQubVtzv7YH5b4iZUp",
  "key8": "4AfWV9QS52R4Ti1U31jjuvAZZ3b3mUnQwtgngWuv817NYsEkGunNf7zSicP3DnpzcDzVsEbkAg57PXSFQQwdpsgA",
  "key9": "2mkrYFGcBUCutv7gBk5YKLW3iRT7RJhxjFYCJHt2drnqDSm14PMiQhHit3MbfgpfxbHyCt65Jk7ZriAzHSkXetQH",
  "key10": "5Hjb1GTm8dXrNLZ1LGhvW7jnVSjYpWixjGheekfcjhxJS1kwsRtHtzfqYvFHGeVjFCznoSb9G4a7eyF6U4h2yQS7",
  "key11": "217Ngvc3so8bFH7PMS4UVebfJV4TwAWvs7bhVmEyBwGykhxm5mhci6eCoUR1FFSsvzRC5m6XrK7oanj4vDPyrMaD",
  "key12": "PXMVQQZhehaxUFhH4o3VjEGHj7TgLRhb4w6kiAu6HDBBbwECYZ7JovjAryeA5kNkuWgcaya47RNMbYoauMWju9F",
  "key13": "Xqf6bGv88GJuwGp29ZLLArUzYxoXJmdYpdjxgtJbtnagJeiimLud5R5MH8pZPT7zXPS4z9qeiTrQh32wbhqFrpL",
  "key14": "2ySj7siG7sV6VJpv5XvDf3icFD6KfxNJqHpvh4cNDMG3Vx8wxFcUxc3SEuow1vwZeH8K2ZcNBrhpHipSB1Uhvtes",
  "key15": "3WN2eQaMPAMVGXS6UE9yPmd5CBHndEvLsbSY7uSL46kDGJqvnsKFE3z7rWJ71jebqLn3M2S7bAZs9B6iwZgqNAiF",
  "key16": "5jKhLMKLrTjVbqKJ32EhLBHD6MLbTjQf3RQj8STraJ1QXVRAYUVPWxF1EwVdmfPXi1LK5XGu3xNCqkbAmRwYxY5t",
  "key17": "b1yqbjA2ZHHDGgTWZZswtq2F8dQP9HY4YabfNToSp95CgRHnbwrH6MHa6YU3UhLjnFesTD5FGkQYMfGEAnSs5GJ",
  "key18": "2KQmtrZZcEiiJpkjWarUQSCG3AmBC5Et9ix73gNk6DNFY4Vm6gh8ZYQHuf7hqjQDWMigRFjw5U3DspFnunfgjK1A",
  "key19": "3F5vzi3JoqEpPfFqQmidv1tUnYVtCxuKyV3NM1iFXmnn5J61Fypv8VDdrcZwEyWPVMH3u2xjVrNK2VQSg7FxYfGE",
  "key20": "3CNm2tKby66QW23ZhzGKTuWwX78b5mEWN9b9DGwSeRhB5UFrsaoxDgiDudUazTDuap3UfcqALTWGYsxiJDgsCUv3",
  "key21": "3Ec9PnpMDgwLywpBuQGqmkcXuVjXMp3CaQE5sW8VXbP9Zmboem6JrMpNXc3KDVVkfWTWT7nisQuaD1H9mLLKtC1Y",
  "key22": "4jJgiXxSLPbDnZv6rZoavzWzJkkPo5387U5J9LXmpSjGUGAaUvBDRLcEBvR3M41XBgidLTJPVnKaW4yBWCA1R68A",
  "key23": "54hHmWhE6YcuU1jW7LMWjPiJfpUpJU9GZT2U8Uc12XeqFT1Gcs2j6SVrTa6hMXzq6Q1r7tejk3zjEE44z6bK6K4D",
  "key24": "4xZ2wq3xmTjZ7Jv15E5nxfXeBMPT1Vp7VYSbKQskYohP2LJv5ZLaWBB3288QvbjBJ9gdSudSVdjgLBesFL8sr3ym",
  "key25": "4gvsGhjvvdWGRzoCrTxMkMKX2gYyzxntcW78Zn9FXvRwVPQd4XzbXomjRDnu6RLUiW2vKRsusb7hLQg2qL4hxmHZ",
  "key26": "3CqniZ2SqxcvLETMdCeuJZx8dTwdbqekKvvYfPz3i1wMQHUyjmx84CheytEvcZX8Y4EjAGmtmLxgEDFNZHoUajWc"
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
