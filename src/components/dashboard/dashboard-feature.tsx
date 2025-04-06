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
    "3zDYLANWGtg4yj24fCfmp5jSZwoTHxc6hKChMb85hdMCNyN6sLyQLuStxdMGbJtBk4wVfHggswYf9fPVv6ZGVaE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLCozH4ER6sxG8DaokdNyPWih3xXZda67rAjNpGqQD8otNahmC6rQxqHa28f8Dza89N4oEGdP3EQdghjnRCzPnA",
  "key1": "Z71uWUqSzsAbMW7k1tnDGjKxs6iNzLb2dg88BET6PEUdnpgJxWNo4wzZhvUsxERakQn1dbn9Jx4CAFZFFD8tKBj",
  "key2": "4SVcvPiqjdkWn2ogbMg5LZ2J28w6AVozU2S9S7Sk7pGzuiMcWWESHh5Tum6JzHfr8wv2VnCa1kHMgSF69KTzbacC",
  "key3": "5VTigb4o3TFbJX4tNNMNCZQACGFD4Jm6T8wZSmnBnpMU5Jt1D1t7obPW23cyDNydQYZyJsS38jh9UUuq2xgtkQWr",
  "key4": "3Q25YeB3K4HV7ZTC5dH9gXEvcshKhNZok2ELwngdYGQTSZ6QBWmM1Y35L6mFLkVTyuJkCF3T3aFg7FuCGXVPLZfC",
  "key5": "3tp44L9X9cfh4edsNzxEsiVd9Eu1UDFYSpY9vgdVmzBsPvFRyCy2tAuS3nuf9uhRQnYFoE1pmg72mgq2aT5CJTLm",
  "key6": "4VaDJEDB9vVYvrneEjDz5Lz5VY6vHhKUL4nGQyd1uVaTh7hZvNNmsjjxLgNSGhowZ2qcwUMe5kQooamXYnnCzAxL",
  "key7": "48UHLEKzcgixpGwJ3hrnVomfPBgKemJZEF9iNyMbgB83AUXSyG2hHXg4VjvacLxvfA6fnuFWR2tYQhbUuhZAr3M",
  "key8": "2JtKDjFJYkVkDHDm3rahXGhzuUTbrogWh8hBYV3GbiqHn8qhkmimiptNCVuDptHiFvjZ4s9CQgSc69voeLfebBsJ",
  "key9": "2TUY9U1DhZN9mrTP19WJGHNGPZ7Yu5QWoznW1e5GBvBu8XC7WdnwQVW9AKLSJMkKa7GWgtA923GtVSJDNndjtjHP",
  "key10": "61sBEPcUM9o9Bw6SatYK4XnpYG9sdXJrboRfRdZbp2QVyH48ofHDrMjbgb7HMxmkQ3xZVphzLYoGJScVwUspbtK2",
  "key11": "WsU2Pa8BrVpvj16GkC4t4sRDdjMGCz9Zx6KyyXb5iDPm7WmvurpL3wnbHcSpEiMzpc5j7CW9ScEzsR9cxbcCops",
  "key12": "5nqJ5Ey8VqVbgTbPc1YtgAUoCurevzCVamy8Rauftu1oH2ja5HnbFM9t4MbSMZ6nUbbLDkY4f9gpnCNMMDcpkEm7",
  "key13": "4Xib9ekXzsbiiWRCRUECSPSpX5bLdcz6neRAU6ejyVG884Fzn27nbMbq5yMxfzLtZu2vrTbSm6anKWwraPybzwMi",
  "key14": "59J26ppkj2eDeKws38FL8GLJ4mxJgMKAKFwFT2soYRPyNF6YFBDtUVdGRkfnd616TacmfHoVWxKMv8q5bMg8Z27C",
  "key15": "bu7YTa9nn8yox5is4HBzkPWb5cG5ADtPbbz29yH2PvSxhMbiZx6UoWXQVZxh2FXCh3CidWqnADQinPnibD23JZc",
  "key16": "4u7N4EpYLz3PWM72ViHTeAidVK2xMUs1Z6RdhVgw2aFsrUdESL1bkwVGojkszsCGKdRSWBQ1fMfshkrwVehKTxG1",
  "key17": "tA2DrJ7TaMnPgFCtJjPsb4q8LrTmYMMdEQjgHJUZxhcs4cdsFd6ERHBBaMcL3MhezPmXmQZv7XKQQJ7XTWuW94f",
  "key18": "3zPN7vjxHtAMC33sxo2QNMv6DX5x2dTbZftRJTNU2Jcjc1nbF3EEMB3spfeUFEsuNYc1AGwgMWz54j6uhgfDrhog",
  "key19": "3AhfRb9yLup5TryGsbs366RrjVh15kZ96548AdPUrw4uTz51mHTStjWU5qyQwibRsbgnXiHXgw5ktxDuaAdt82op",
  "key20": "4oNg7j6DKZr2hxkRn2N2CvZzujT1CoCyjeFBQVxeUqcr8BZ3nwHCyooScNbiuk73ru6Qj9emmEHMitc1PrPvgb9K",
  "key21": "i4k7fXXa85YQ3tbDbuc5HiXiHp9TwQX9gL8iwTbwX1sgA6UwXMmK866hFMCzV1hV5qgrUEj8w38YsP9PW4XH3Dd",
  "key22": "3nhnW1EYXbbgAWC8p1HxgWMjmiBXgS3X72CXKHkESZdVchSH3HGg7xHioZwTntGJ1gnTdyVbve69qQpJSerdKPCn",
  "key23": "5BqCZwgECJGKScynUtFV32R7bm5zXnB3rvoArwvkDbHHqasNLX5iP5ck4TCSy4TSBeTqbrENhxhCETtkHWTPUVCm",
  "key24": "yZH1TtxKEnWn8hVHMdC1v5Y4k4aZ1uTqNq7xtet3HVXLsAPYuDFrt19mpF7Yx1PndJgGUoH4tRG283UBdDC1kEG",
  "key25": "3FPmipf671Zd3epRwoUUGYtuuQsttMeWUXjQHDtPyNHZJgpmxM3DyEd7fnJArsHYw9nasjo8hjJowAiETrz1ahJK",
  "key26": "6Nv94cNA4vMovhkjkK3wJPjwB58r95QZNYEHD35QsGhvsznVx6UnYhvPtuzh4uSsZUcNo9XdLKM1zzP1fKb8zBo",
  "key27": "3zm9KUjVDTwV57D44EGajKCLg6BPmj3afFMkbCUSGaGHAT8SCyMnKmjsLcnfBiEKnD4BhRvkkdo9Yw8xv6k7eXRC",
  "key28": "5TFNxnG2Yee4z5EWEpmpSEXeBRwM6c2WDGYrPukdXZVKbvZu4ZLETGynqUn79fHujBeLeTSQ1dUYx5XZL4YJH8hR",
  "key29": "2ysJHsJpytoC8ZPWxMZCJuTwmJonsuifHpQ4ADamaBVosWquDZMxdshB48NeX8ztcV8g8VmdWnhNnBd1sQXdDtE8",
  "key30": "52RaEw1AsHWR41gyuWPqoxWUtCVV6nMMV9WvZxHee2E8K1a9nfwMHFFFxK6rxgENAYwjcrEggbVPb8PxdtBG8nJi",
  "key31": "4CcNAaewoAtva61xwbazybUuNdFAnZiEiJ2PBgRadErMaiWk8RfQ85xjiDhH7GC1kzJA5jZYC2FExbfSHLPNzZWr"
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
