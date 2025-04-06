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
    "JCCpaMCUqnr6sDqtMqEBoMdZEGzWA4HwUpLh7yY4UUNieaLvNZDDNdACJkBUhresmrQd487nspcArTKvBwVobgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sW1RkjK6u1xc7kzCcShSZeXLopmCqC25Dar2QoAfNAWa4zpej5VTh89qakgfm3xdZuWj75Z45jksHX76eHDoAHn",
  "key1": "52sWqKckSDkW2pr44YKeAJziknpmkLjWeP8ufjdfWCE92SbjLqxgppuhTm3oypXWpaAZu4ym4UDdMALgvjWGYRhB",
  "key2": "3vSzxteXYkcvpf2YXDN1HModyWq1i2Ht2bbv73hHevc3z9YohphC5rJ4ywKX1reEogPaLZtLqVpaakamNC6rkpu6",
  "key3": "26hyULiGASPC3Bm7XCYWjjEMJUD7r84XhCK8kWfrmVBdwCtBg6txLjuMpnJELTaE8hNKsHaNr9heHZRA9C1Zc9e1",
  "key4": "2V9dgBPa8MZ3zSH7YgU6S9XBYrjtJ7g699LYbDTSKt6PXhvBd8FRj91kKAGD1P7xyLE6CKACtfvg9KesfL5GUp5S",
  "key5": "ewD5Bzg6c7Jke7EmcXXCzNzChtNDRWCd4gDiew6wHM4SDGkSA2y5t8V6LJMb1MU1B9cYoxUTJTo61VA7MTDpH6m",
  "key6": "2czzjsTGMkFPgBRTMUJmUGywQdD5sNPFfEk9KyxXuq4Ba1aEMvbUufioNpKpyvrGmGyQeizDJx9kNsTV63XHrvmm",
  "key7": "342LQa8Zu8tHhGbHzfWEkQhyXy6cNcdR9FNMUsoDm2SWWLjM4y5k7aADQry8aM6pZZqtiUQAmnGNBFCuVkDvNUkv",
  "key8": "tHzCjnefCQGm3FQrFFCWKx5TbvaHVhJeKTas6NoHSGUvCfGANForXNudaHoKmw8QX3zJsBNK6ENsFF1nXQN1AuS",
  "key9": "4ZAFBkc8G4inHXKd5mwGRTNmnNQWb8s8D8WS3qD4tYnkGCXaXzsZj4AbiFsm4SbFtFoWRomegHYFK2sQobLEhDRf",
  "key10": "4kU6Gp4zmpbTyWq3jmm92vR8Qr8VkZidUo9P2TMWs2XCKWdCZH2LXnibNw4PiRwwazVU73Niuwf9WNa7MPKANb9R",
  "key11": "5CvXNSU1yG6BJrijvKMFLWPTtu3vzwA6WmrdHhN5Ks2juH7bLVpWeU1e4P8EHhg1xXcCkR4C3bMWzeQ4kY8jYRtV",
  "key12": "3jjgqeFiNWJoSv2dnY7wBVEKwycpqMoFd9bVAgSNxVhbfxxiHQQDBMgavogMzNqW6SuSqzQFrXtus9DJSgQrrupU",
  "key13": "4Vpgvzy7YFSjduZQRNqDGPAAnRnqH6s8ZfTeu5SZ372tdKWtnNE9z5ivAKWXLfs4RMoRVFngDmHTzcLEUo2g2qH7",
  "key14": "4qjWGmworRS4Qa1fukvU6sgve9Ni1e6c5ZBN1b5u2WjPWVuGD6XeB1QrkrfX3oSiVwMqYYEJjgSoyPN1tjTrXYfg",
  "key15": "4hf5mb9CUcgjBWqyUfYgjhRvBqQBbFNi778jmKVmvJAyMZLNh9Zm31sbBNGntGak7SPN65sY8ZxCdLSnT269Yd5c",
  "key16": "4HNQn82svjqMYjeB1mAs1pz6kxArdhK1RNfmQKgFRxzqpH1KTMK9ZgLRrFWwr6VAo7Hyvp8LJmgMfzRy46RnTBfR",
  "key17": "4utBfTrBXK55iHcQ1wgRGKq4kabBcbHzsVGEchA4GJET4MLPvDL2X91E6LVsPRjFNj3kje9ePhWqZF249uMMX8wY",
  "key18": "225ixvvJFUyY1XpNcBpfDU5CbvYae1KzhP4Yj4vp8dEkGBugeWwmfQWkBF8VJtH8d4kkKjpRMpTTCTigSvvWwGe5",
  "key19": "5bX9Nj4jd9BXyoK7ceq3SZwTfHYbTGFE7dBjZ5VRHyqXKWHwhvfqMHqUo9NPSZtzZuswBrFwapCNHYA1HAdwt2AM",
  "key20": "2eGekRipXdGyftBdLWRZpvTWs2yXVCY6arREpp1uDc3dCz3Bg1SDHjMaH2GtXqEbN92yLzv3jdi9tDuGCA9bzD8b",
  "key21": "FJKZfvNEciMHR94KHrMGezFmnjq9bKnTxiFJKrkNvJt4RRYXmZ9MfYkarwD5XnsryWgwmUCNXBqWZfTgrhZvES6",
  "key22": "2hnbZ7FGyN15AyUhr1giWrXbV1tgfYH6VTxKv8sKJkcW9nuHdXdszdvGUscHbFxPxqZ8oDByAD4FFsXVhB8ypufX",
  "key23": "5oExPnA6GgKer4W58VLg4Cxr3Wt4DxdxTszw6KLNuRZhRvTSePxPpJkkybLC7i3R8eoLnQDRzAofPpHVyV2Q81Fq",
  "key24": "2L7xiyVfUy2be3fEc8gRg1zueg7pVrH6X6E7WXcCQEnPZBY9uvnP1uZzmKeZv9omTQLBCy45pW3wjZN6At1tBJbs",
  "key25": "4MhUdnkrSq3yaQBo2Vie84UJHL56QrEqfJLGxkmyAS6WmLvnCMqdhagpzVA1xzESJsJk2SMLBBvpeFQdN9K8XvVH",
  "key26": "2ZS4SgcKGFt25y3XpwYAEEj95dbMHc7LZF9UYuue1BUvhixfraeD9UxK1ze2ErztZW9aAfZWbfyExtFFYNwQH7kY",
  "key27": "2XrFYx7zFLmC4jDxagbN16F9VN3mLS1TVCcduHoWetQyQoBrBi4a65XH61CVYpMmRtbMbLko7EK7K6LKw4BJK2kf",
  "key28": "1gRPRWWH4ZF5wpYgqH28AdMcHhe2bCEZoV5ZCjbxFqoh95mPYvwTFuj4xrw2rSYcNFCH5PoVzahsNsUENQ22y6S",
  "key29": "3XrZjKMqaxquidzydzNCyEoQewGkS5jM99wqLkbcZjbk5DMjWiS9JhnAK4sakbbJJ2STZwEKAUBQLpNvh3EbUvUK",
  "key30": "4SuuNRhQzebX9jriWvZJn1qyiNX6XBM4eHabjvMKEr36e3BDkGqFMNiHJaHX3p1gDaMxyv2ECE5KUx21Gj3MgPzZ",
  "key31": "336G1iCrcdPvQo5hioaadNKsAfyk83xpANdzQH4mkyxDpURjwPqi3jCKvP2nbBAdN5oDpi4Y3FeT2GqgyhRgRy3t",
  "key32": "3jmyuXjzmLHsJUBUT5jeBC9g3hcSQ1n7WS5a7knTPMYUiC3wWLLwZSUvxofBozSbkGxD9PNoz2WWRCfpJxjREDBw",
  "key33": "4RNYCSiXAPz5JurBuxzgcw2Civrksy78oQdLvFU7fFTZQnJt78fvtXSjWGW8tzs7YTB6Gx97hZCqKKF73HrtwNC3",
  "key34": "Z6uRp8Dzu8paSbxFTp4qeecbkbM2eKkgyL71SVKCpqmFNqSESXTJQMHsED4mtkJa1HDp5u3JxEWPwCaQAGgQrx2",
  "key35": "2k5mMyeUyATXgE3RGMNKEkEG5dbjFuEsiCUFSQwbZsqiCZuUxGWDYPVVAy3KyMmCoDTVVTmvys9QUvSsAhkEDq25",
  "key36": "5rJX2GixDJkPRJvwmfzHfhkNp5QCC7ir2NuT9dy1aCA1dUBKY2jmcY3ba1ufaLvGHm2QZUvBZxDwYPBz26QKohf5",
  "key37": "4RbewaWijNC2cJbH9o5hXiLgRXbbScFYfFq3hoTX8FpRaw2vNV6PCekLUgJJStjcXVtKfMsEaapGFh4yBNTMeRAY",
  "key38": "4FmBbucPPFJuFrfpfWCUv7hDrTjLD4zRveo1DKWzt1rV4n597hXxTV9yhX2W5MjprcLKfvVteqxgmw3w7nESoR8i",
  "key39": "543Ek4rH6MeNNkb4Tpvzy6mKmy1bpQJv4RDwfu3Vif8dcQJ7Kid1nHogBWS2HJTZFX3kTmu7F5UyqazGrErtBLnk",
  "key40": "3kG9H4wQ3AKdfXUeEkVu1m5cUnNH6xVD7bnFZkX3dgkpSqkE8avRr94zHC6VyVugDjSkesrYfMi4dwUESskcKCR5"
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
