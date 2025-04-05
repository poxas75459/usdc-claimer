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
    "3MFp8E3MRTVeJ23FDsizk4vjDK6WccCWmPXrNmVzCWRabkzDpV3WE4gu3PhaYUvuLGNTx27Jf1McAav4hZfP4jus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FE4DVfALReQg7iWntXHfL6UzfSiP14y1PmhEZRYq5xTLDBhFYH4hNmnubSa9AtQz6P5zzU85s2VwWAdgitekxVh",
  "key1": "vcYtLJqwKaJC6izZajEtBU56gPKyWAJgCByo1CPj1XFF6QJ9yW212WmHzEivY7hsjJBWtfcNVHkwKeZci5wtfNH",
  "key2": "3jqjqUsN5h7dtewWZ6jS6sTzFLgxGH1gjTacb7XPXWzaNDgfRMFKKPCdjwHq8wvqGdwGP5nkzSGNCa8VxpstTxr7",
  "key3": "iR9hSuP58wMFB84jahHdZCANk9ARu39G8WRNQizGq6b7bMUQA8FfxuJXyBxJ6wwUSrvofSZD818NQ9WoCkbaz8m",
  "key4": "47nZSsDPnPXPX7T78ahBBjoucaPdqBadNsLyD4hmkKF8FwiG1yV3XVFKQzhbTrV7Dz22He6mA8N897vXYuFZF4L",
  "key5": "2SRrtMM1o7GWVqddun4TteRvqGxdijRFCVSzt9wTefEfZP5WrE4xQYBzVQMaBhN9YazxuYqRcZgchRUacMngkZkd",
  "key6": "4sn4sBaFMKTMkWEVDKESoWDm2uwJx6dVWtGReduvHt7ot46Qw3bTC845yAL2e1RtwA3ZhseBKUxiLkCu5DMBSst2",
  "key7": "5MCSTAc9okLgFz4GuiddK9ugxvBV42sBfB6bADWJybsHiFanMqFZvjRiQVZnKWyS17xvGS3GxFzkardNoAtfGncj",
  "key8": "445ExugGj7pnFnXhLGnCdqUQTsEkuf4P8WsSPFReV32tFeoUFL8KWzfRQQRWPAwjAqoANXLszDCwhQrTswEawfCd",
  "key9": "32QYR5J2zynkQJGzTdMg8ukZtaG8DGFf9BQpnLqGCScwai6JH8iNg9Jb9W55MAXxGc65tNXevCKbZh7V3KwfD2us",
  "key10": "5GJE5f552MNVG9Uf8ChRfTNhQLfMiDYRQWJuxAtC3xZf4vG1L9TdwT1HUHBrX2biMFzFi7XmXkmmCy5QNuqNL5Pa",
  "key11": "5bamS8ZsVEsHP9aUH983GhaqWAXE4HedPRQWXJUArMde2km1T816YMk2FzZeZkhzRY19hYqMuam46R5Xtv4PTEza",
  "key12": "4yNNQaFc1qKEKJ2grtnWfLvTApuAsh55WkeDK4E58JxJvxooy4LXhGCXPcEMrdjDC7TKgsmSmFQiDDfCHxwgqT6R",
  "key13": "5YHHUnceksdJxi7nAzDbT5TXGNdCuGFRoK2TsZ8z3dZ2GaeX68xr9Ai9S4VFcffbDA3xegVuqWXH3LhipW7o2XX7",
  "key14": "Em3iTcnfxPtueFEAchU3zapiDCxTEJbYRTy4Gr5RPb8pd9LTn3JfWxjtJf5apf3NKaBkiYhokZYgw7vDDT2Ymy3",
  "key15": "38mLu8Fa6EXT3nwmq38pppXwZaNGjDUpUoztUx9jmcmAz5e1j29Dr3r884YSjgcQu8W3HvewiwncMixbHuEgTL2F",
  "key16": "3xZaoP3owa4JrFA5pTyUfLJYuSDG3nDRANhMcqw3CMdKb3bNCZZkAJmDn6fgr7i9Fxc73THJtVZAj68erPRNvFcz",
  "key17": "26tGJGDTS7hRkejHkrjpGXsDfdy2qVsNzbcUUuWMPak73EiKBPE2w5vCcsS9QQfGmoP93no8QFzK5ZYoznibox5A",
  "key18": "49pNpGv2Tp2qBkdC6hcAm1c6oHYfeDdSuyyLvDj5KCPhpA5jLWbr3VmykCUbT3zitGWCrXRG48fX2ZhuJFihkL4C",
  "key19": "26m8dopVCb34JmdN3PTovcp1rLE1A3r5b5rxah8MTUHLR3oCYbHpdT9fdMcjBRDM4q66yqrKteF8UYdTgQy6w9g2",
  "key20": "3UswAfkKSheyt8cr8bF6QhAZqGrdfWsWXyThcw1wi69n8ng3SarK6B4S1afpeqzJLYtwwpHdpEQmWHWyAwPTeAkH",
  "key21": "2bnhQc5SvgUJ5YXTVabg4nFWgvuzCyiSZQdXBFUnGPWdNXYvvMhM8NVijo7NtNJs1wTice6416oSEuQ1rTecxUYJ",
  "key22": "4vEcBDxF9y8Kv6yxvGqD4inyVBnFJGHv47wHHHWtyBDD9M8j4pvu9zAZN2XD4DJXuVkSrXPr3aR7sAXuYXxGpzTi",
  "key23": "3LLT66YCS61Vmv87pXg1dCZbbidaPDpSu2nNuBLZWkVcAd5aVwVUhUHh68bZEjtTWV52x3sTAzN8MoUEgZsGxpS5",
  "key24": "3y4L6TKNhC5U7sqLRXhqrjGgbcorUm2tBKDLiK4wUySfkyr4PJgy6e9uqkLaBkhtGs5mgv919kBJmTbpoECVYQ4c",
  "key25": "5TmJpPgTHX2WUtikxGDJx3coSq6cdetAKL2inFUbd4sx6hzHRcQopAie6vLuxNjVh6btDsYacCjJUfwBeYntbDZH",
  "key26": "aQ6er1yvo6JbBvEzqpUW2BENpFFfZ561g9Mzzf358dQZjCUeSDAajvXSe95R5YoaRM4jq4YmPcAhg1VhdAjwtgn",
  "key27": "3hP5ockVWnNni6j5LpA9BWmoMUsTj8dAftKFnasVEAifvxF6dyCPPTb2oDiudsKxeEiqGYdFzh584Grtx42avFgP",
  "key28": "3b3idioeYk3rAsn4DBKZTbRmtVnfBL6tZFzpvLnyu6RYhrzPQHkvjxtPx4cf5CqvMpdb8UQkWM7rHBEK7MbzdjXi",
  "key29": "663Eoe65vyaEQbUhsB98WjUeb7x9jUExeBV5C7E4pGh3iYMDVGY1i3j2rV2rDSjkNZvgwLSWZRidJTaX9d5KTtGW",
  "key30": "LEiTTCrLxQHGfskouEpRrf4AsL7H7UVA8RqnsUtqq8E2JgSYq8hm5WZKkisosfDgt52ruJUzyC3XB5Cn3G9Thzd",
  "key31": "3Gvc6q39NkUaV7y52Tz4g6cswqNKaC6fPkHXCPEmKFD1KmhvNLgK3mBWUHyMbt45p1UQ7ABvRDux7RnukXpn71Bo",
  "key32": "67T5UpkaSj8s266hVWCYtvG7gp32SEYyW26Ye4f1tMtiEvWaocW6MicdGHyFQaiYsZEzaYn8kuiCtKb3yojrasRK",
  "key33": "5NkLV4ztoDoZX1yQsJCa5Frdhs1EmRVV22QHZAhM2znPBfmv94ZcA9FbigLG8Et5SwVEruDK7NprftXTJLhWEzEe",
  "key34": "2rH9ftySj6wUSbTVqtxwNbmqbhbtBQsE5BJoq2zYWP1GDcjaeE16TwnswZ3dSz19UkZFwGHrrw1rDM6UFKYhr663",
  "key35": "2EV4VR83Swn9vho9t1wsG6kyia7EYq9yfyJCMwN1anjbe2D3d9v7bQge6vkgbwDCjbwwWjHnwVmVr88exuzSkC1c",
  "key36": "65VfeL3mqN8a9VeHah24qrALjQ6H1V1dqYUQ3PhMnnmi1LTKhfEmrj7y8K34HUWmbcWf4ZWX5kw11EjDYydhoNoC",
  "key37": "4C9xE5YGPGeDrwRgCaQWpiWEbKDMPyd2LyGwwpD32sGpaF6YEVMsFPXuT1iuxzf9tSMunHqsDrNE1QCCQ2pwLQyG",
  "key38": "2x4XCCAsNUC8xSxHSUQFQJLr2uRG1zFCFFnEinBcb9XBj27CEoHUFTkXuYJ3FikunFgX1P3bMd9ZV3RkLPvxjLSw"
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
