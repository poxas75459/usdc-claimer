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
    "57Pc28M6rPowJu9wmdrXc9SLCW1WSK7azC2tS1VfcBHnmaS86ycyny6FU8bUX8Jk4TjJhpDHfe9Z7qbKzVizyxCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kBw1m6eZ3gC3Vx1eoJYde7UQaMvBYfQKf7AUJcTumBBcRi84vY2H8VQB2kxiTKXGCQ6cQSUnJKsmpTx5v2wF39W",
  "key1": "u9B4h7kHcCJMnsizYASFhAUKqyWdKBwzxVdpKtK9eCB3WWHhgomo17o8fm4dXfe5GF18HTX9v9zi1Nq1PDwHTAH",
  "key2": "5SkBHrNBXi5ofSZRKvhxSDnMSVyenKX8EBXJaJmFWyiCbh85g73F1MbWiuxeunzXAmvkGMA95ypAVjLgZsdn9Pjp",
  "key3": "5dn5vJrdQSVs3zMwU4EoeHkGrrd8ywoRLPoBsPZrzSkYw3bGxs5TynfN7CUFQcnHn9st2bfzUdbarBW2a85u79kp",
  "key4": "4WnNrQFqmbsYTz344PCXG7XicC7KB9d6TCafAgsGyyZdnUT6Fzw1AvDkyVJuDm3WvCeBHHqVoiqsFq8SpWFSpGWs",
  "key5": "3AYh4S3nDSwqoC5wWB73FsESV1DGAF9bCdWi9k2ESPQkYaCRZ63zq8jqGtptG5nvYeQCXcETkgqEwS4a4qLrtShS",
  "key6": "4yZ2zZhiiRC5r1xa4Cranpu6Vg3k1VoJ6dUjPdHzSgEVrSymNgbTp15GyZM13Apra4bWHK4tjMgeCnsAubRYxBwQ",
  "key7": "4x5ANM68AT3JwrsUC7a8WPKkefA2iRzSRLSMop2pDjwVSw4mHDwBceAwxfLv2xYS6H38Kfda9vJt4c5zWgUFrCGi",
  "key8": "2UHWFH5VRW1sNvTkPQDhoQiSvrpEVVwE5GCJYXkDwpn33tDRbxMKfrximd8wMw1s2HgiwMpupCBGD5kPrk1jy8Pf",
  "key9": "3k4Sku4zHJf9wxxrfByHVNrPm6civjv1CMBWnfdrsVoJgaFqikRHWAFR9BCuu4pBLKPwDnbtkY3313cJgFk2g6RW",
  "key10": "2cttDUGJuay5ox54XuLwbSNyEzWKTqTriWC8wsui9RAiHThwBYKXAxQRLf6fhJWoSuJzUadenUJWKzL8xPtAELRq",
  "key11": "3rs8mgeX6sEAZ3vvL3aGySDbzEPNsueQTNK6s6kYPsSMEpNL2hp6QDdAsiX8DAXEyACPmA51cDcFPFP28WHiHoR3",
  "key12": "5kwRt5qiNkKY7oC2Hm2Jq7cSfWV4tMhA5FXLDk8s8NegMoMaDFr5m2RZ46QrmjkruRDFxtvDuq7hedWJN4iSqUC8",
  "key13": "MdyWzms2SvXTYqEi7JE84tE5qKZWqt4UjcRr2xgFYnCUnZTumeRKbKnFN6UzBW1ohCpQo3sWDrod2p2qg6adSSE",
  "key14": "5mK1iZcgbzHzQpKyB8jNsLMN4YKn9uibLR5HD8rTEvd4JUwbmwBSDvduQqcgE2xyfshmD9UbxGLA5ag8JCwWWFfS",
  "key15": "41r6EAcUaz8RxNqkx2WenNxD1GmtL2Fu3KT3UdF93CvymbUBkRyo3mA3YEGJuwNWq7S6LVggJFvoA1EZFk23BSm9",
  "key16": "3YyyAs35WAPNHtAosuwWakLbRBxKx7ZVxMPdUTzn9TTCc4xmSsqs4XANgViqxjyeJMzK6tNveucFydHCWgwLuH5g",
  "key17": "3PWLcXFmDjVp8kaCtA9qvahs4Xjs6Brod1YqwaWKSzi4ZBkEyLivFRas9GunwfnYqwfMq6HpH3nxYkTS3BhRtp2d",
  "key18": "67ViLdmAiNKiaST947NgsTWjVM9HYxuHLY1ZrG7rhER6LKaGvW3E4uXRJQxSfiWvCCwM6iyMUvD2eKbipJnYdEmQ",
  "key19": "4qugFrAB4EGXVJg2VsRrTXB8LPU4eS4aGekqNc86C9BSp42XyuEjr3YELto9wqo8CqGWTtpmkvtw3LjvxipQnonX",
  "key20": "5G1zamT8ZPUjRM2iXP9SB3gdMCi81oCSBaJ1PsgNHY6u76GUcrUJLnFxEQyLqjH5dT51GTBQ2N1k2HHuF7mjSss4",
  "key21": "4SjZTTKA2JPL4vR8YHMzCkSFEnFu5oUeN6zVsLmZP8KWPpdxd7uumocPQ9Vdjv9u4PWUnDUXWsDDYzw8gFTwMf49",
  "key22": "2YHzjCK3edkf1xTor9mAyuEebgDnUdYv5kfhiVsvqLCrTVv6s2fWfQkYfFcn3iH6rsjqV7178YQ97sumrHb9P45k",
  "key23": "3LHY3kF6KmqyTAWq3g4zgqgHSHVVca8UNpfbJZm5UZwmsHEk3NbVmfFCHQ48QpG854g8Su7CUdhPBWxtiSLdcz7w",
  "key24": "3UFfxxm3V1A4yWSkcpN72JTFWjgSC4Hjx8i7TDjfEdK4A2x9yGst5mrZ5kD3hQjCWR4y44ThESeVBWrstkTDGxWg",
  "key25": "4QFZZJEZ38tbpJXrkeNWjtzK6w4maVmcWwqPm6K4MbjksXLmiokNrsWxEeP2ewKNoxp64ANkjxMx6xL5svD5MG5o"
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
