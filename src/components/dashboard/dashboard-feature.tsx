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
    "4VnQJNwQ68m79iPdAQKFKkGrWtr4XScoszvK4ykjPbHkWjfAgV6tPjjCfTdckRjQCBXPPmYrnDWUgKY8wxhDE2NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TVq29TmTNER9BvDBzpwqwqj19EUCpVXmHnaekUnQitLLZDgbdpC3zzMtr5fKDKdcJ2bWpxXy4hgHuHiJdA9wNDo",
  "key1": "2x9XhNX5G4rGHyBn4LTt4ezsPhEdps6m1qGETCE5RBJuVex4PVKdNWrp4hGJvFP8a8RjpKhkNNoSviBA1ss42W2X",
  "key2": "275ynfQYqS72CnqTHN1AbCQbw2uXsk2Rgei4EYRYAmK6kJpp1Jcsr2kxJDZDeo3iPMhBq3qfMz3ndtaPp3rXrr9K",
  "key3": "5EXJxzRsgFWKqFe2KHNfrtgTseCnDhUsEnBSRBrS53q5YKTvSCkPwq9zSeaFzZMpLCsY5rBJMyXX9AzrDUTtumtb",
  "key4": "4i7oUV7eqSXGBi1rPn5x9x61RHoAwtAmeWvoDNDb9pT9k7WC1yr4o8K5dkcqxRzdBQyUtao4FpVBb5AGJtkaZCpN",
  "key5": "CHnqS2TngMjsZxcdG8TqfYxMYXJEwtQ3NvEsvCoeSrGeRR5w3pmEZdFjeAmPtVztJDY3nEpYvRvubEjmYAKbNhv",
  "key6": "UDmVsdnGBgMUuY4JcoSXUcym6AjyVw2bh64GMV7SUuwztdn2Nbq1QkxbmZJuNHCozN5oPRqUCnRF7bgo4ugrXD4",
  "key7": "w5KyZYtvreHMXKy7XVvHqPXEqWheQoqd5v7kSgozTUKbDVvmZm8uQTgUodv4wYrMeSKhoBfBDundGarDMK3GTFe",
  "key8": "5CHLjVr3vex4QYKyPeFqkh4uYtT7xBbGYkcQ8x1fQW8umajv1vxf8LWVmGrtyut2zGjKMtnuGwxSE4oRa2hCSmj3",
  "key9": "356qh8LiGP9nVfvfjZ7xzp6Gy6gxDYP6GUZSdpp27b8XWkwL427QgTq6jxNQE2ykgartDwPMo2hz5pkfXrSJ5iNX",
  "key10": "4dFtwvJUu11SH9DHsXjqGzm1HtV9aK7DG6YsheDUNPAgyekuTBGosMZKiYmKudhesbKsEfkHjqf9QouiPamCqn5S",
  "key11": "5dzPiUii2ccjK2igKxJXLPbvJF5qtrZoHtpveqgYnLc8rHiM1NaYno9KB9Yzy43chuwG7yiKUzNtnucTLGSAdRVs",
  "key12": "57rCDYTa7sr4AvkjZ5aKiM8NvNiG5dcfWQdyR11GMQ5EVmC7xCG2H4U5nt23jZNDnfaKgHDnENracAscc6P3EDxM",
  "key13": "5VjB19AjXpQrTM1hp87hSJTstGUGgWXzs4WqfX6nz3Gobt8yGDqpciPdp5Lp2VVuufCKU8q7KrD3PXWrbBkf2Eoh",
  "key14": "5Hr3C2Trrrifu8bhPXg1CwFAxj7P2SicJLWsaLWzjD6LBGQMxRksW1bZ6bECAjkkQW6mA8qk3RPFsy6ex6YxwMfT",
  "key15": "wiLN8JSQgYJ2bVxPaowec1gbaCMZNX5Yy5TrL8m55BspDvxLJWPUvhC27unNtdftHhVRt27v6zxNr4b2jqTHCAN",
  "key16": "2BXsk56uvJ81MiThuuhoQrE16ZYtrrX1YbEggvWCCep5dC1dfnRdHJKGJ4FNKe979YfGTp1FAFpz16us5zToAgmH",
  "key17": "4NUmDUwbtPHYk86ApD144hock5i2wrVLgga5CGz7GrarZpREsR6LZ9BQ4UbmaSizbrVp63Lf1R5ooX9L21Pfbfgt",
  "key18": "MTgDrQYPVqW7S9QJCYFK3bovjbD6rxyukbmQCHXGgyTK1ccHbVarnrU9niruMBPq3BBJLJi5bUgEqVocVyjQQTY",
  "key19": "AeYr8X51mve9XKDhqyTCiov6E9AWYKQmqftP4XsRcVKUsEcCDLpJzmpzrMxBe7VjEtA51qXBWdxYWFKfjPWEuWK",
  "key20": "3tKSSjyFutcGy4haSKDJ53GGNfX3iPLvhi36LKXgsufEBUbcVMpfEJYxKSZ18eZeXGfLLMSpgKHdXBQDfMkGBzSv",
  "key21": "5XJig2uC72LQw9NbWXQUL9WBPY4RBdFgAscv58kxBDrKv5qvHqCz7bKg5QeeKiUdnFxWocJm47xMq3h8Fj2FZrfX",
  "key22": "uQd71TYK4rWGYCAAoZcRzt51S22jxabQH4pnu9GTu3z6YHcjLgytFMAQxEwspyFw3cyhKFHkwnfk7NCLdvnbSqL",
  "key23": "3Be6oxknfzwyxS4odPCtN3wDNGuMFCo7p9SLYCPZJyebVKFrhDxtb9UzWAcuuDkjPuvyQAXa5pTDjSgAd8bJ1NPc",
  "key24": "5GaukMdgkwjdY9HMSETf79DUc3BU7xJxrzxuxD8mDdtjKYN524TWQbLViUEqo8QxppRff4XmCQVbNdvDy5h4Xtqu",
  "key25": "5u1fYFoPWKBSENcPssN5DHgeqPif8LbT9K7eNiuFBNJUn8A2PnQo42FDfMFEpAr5xEbfSYxMqEjwpipCg83NDPCL",
  "key26": "466xHYH1yv7aGb33V8ifQXSUpXCFHUnxDiB5ZxaqPFkdq6oURajenF4XFYGj91eMqxmcbApTYB9vjeBNGgUQU2sZ",
  "key27": "3AhKNrja1D3iUwCW7XXrZoQ2uMwaqh5g62WJeewCXRv3neRsZMpNs2dEmesW1kXS2GSBe1oF4YuCK8fHgDU4LV1E",
  "key28": "5HZ1guPNvSK888MbBacmzGEU1NdYehYRbmtai71eo3WyQv1Fsy8XG4JPgV9pYz3XZtrBJfUGxDwuhgpaTqB3QULG",
  "key29": "5QX8CRZ4nDcA5W1Lg4ESjDnnmPijMmK6ALiR35qDmMaxkZcf8JrCnxVBZRa6CRgvT2dp5kjKkDcnFHP7AUgwVQUq",
  "key30": "5CUy2Tsg2UHypKGSpx6WSnaW92J3BDDaA9VpeWvxWwFER19pL3Ma7xmaJt7zMGcvweHiybwctH1qwU5ofz9yto4h",
  "key31": "3a2YFCK7qbavp8qH4mwHUuruJvW9i5xeUAVGLBTRTLujgaexyDzSDhUYWvWhyLwx6YC5WCac2kcKa1gaSKH8pa5w",
  "key32": "5gkG6GZF8TsV2S2hZXrwuVECgh19NuncxdgSttRJ96c5DeNUzAJ8LViYoC6jchskx4MwJFMGCgs8b87P5f7LMmHH",
  "key33": "4WP1ss4ZPFWFzKt9HGc5ZhNXm9PZ3gskFWTK9qyagUNjfAHXAtFhoaLEXjgpA6MR3bpjLTAm2u34wwyXP9eZLkWm",
  "key34": "23dFsGD6SQgXR2YrdgJNiZnybj13Vw8u2XsbTgCBHVTjjbR1JLM87ZuA3dVvPVzeTucfD3GpD69pZ6kX7M3hXDia",
  "key35": "3PavxpPgP3fV19fiYreXadyHET1gcz3FLde2QuPGNocRUBVpKVyHQ4JKMMANgPip1YrsKK6fZ89SJiGBDJk6QXc4",
  "key36": "DwrhnuReRXkwMEDPRDVV93w48jNqanZdFea9mvyxfftRY5ynbYdKkRvAxRWP4zHWENkEWrzJgSxYswzqmAcBFhq",
  "key37": "2vVeGqppmmXeXF42QirT7maJJKyzaDpeKRZaYoowm5vvpw7NDRc579cfsmBCw2nxhZrBLNMTrLxMKLdTHbD3zWMT",
  "key38": "5pj3d4RdyAfJDnFhha9jjvJLy6rSXcKmTUNXakqLfvyiFCs6ybaU7RacsL3yRx5RKSqM5CHyskGqMBBLjvwiqZzA",
  "key39": "2mTbWeQabDAWEsL2HBAFbXJ4LpaZYScM3ceRzEcK2ZquBJNAETSkcyrNXG5FFmv7eCLw54Qg8XTB1aryVcikCjGB",
  "key40": "4Txa3M3qvMBqpoiidcK7ABCsqfGuMGcy2Z3WiMYrsf1NmYmHqWSfbsguwM7KASUPuCDX2wMmz6cYVttBKnCS4N7i",
  "key41": "5rJ5tfp9BbM62rVwpbXgAj1wBveCWp4BofhXCEmd9RyLcxBGZgptE4HYB3iGjtuTon29y2WAzycLk8RYU1yCkMom",
  "key42": "3vpViRqRk7Eub3ALajyaeXtwKEsLPefu12hmGC7KUGh311o1WGv6cfNAEeypNE9UBU1Kbdv1cvov9zxvTM56ub4P",
  "key43": "4hHNy2nqufgDY6QAZV3QV68JGyHm4xw7SzXjQ1xivSwuroDwwEkYXVHjXccWKh66YarBKwBdWVqKqXTY9ye4w3LU",
  "key44": "V7Zob3VjpkaZLkizd7yLvGvC1XixJGF9quejwAfgzM45RmTGusNfkDNVMeCw5Y3xG8k28HHHVx5YXnWz3ugrTwE",
  "key45": "2JLGUHvyEdtooBBnjWoinu1FoaBS3oHGzSoroXDk9X3LX3eTBUZDCTjSiSzv6DhoYSJvDJTiTaqE95qmXGMKWCCY"
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
