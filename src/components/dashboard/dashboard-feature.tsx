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
    "61UHL6czg81ukTAguH3zdREPZLgHo5mYYT3WaRrXJVityFvwqcsx5DQGxFTHE2Hf1hSnrAodbVhr4mQHtWLonbZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CZJK7m2L3i5zATBTE5aUV8ABZz2uzEMQPBXkdL7SSFZ8NLANP2QaLg1NGo1Gi1u5FAMdWYNGJfGyoMzyPf4sqfj",
  "key1": "38QYZ9o5AaH2GedgP1CgZiSftkoUYXC3suoMR9Leysb3b71e9mWsabmDrNg1DqXBMtKmmmqbb1SjSwa3ZYCAogC",
  "key2": "guz2maEvp6UFUJpkg1qvvaBhH9Mm3Z4YuaWDXUK6HYLFHGmHmW2Ubbjh9ucgrDTkpewj6t1bgg6R9ccDJUzCG9L",
  "key3": "5zceGt1ueLowyq7xmHuyUFFnRXjK8RMQbLKZTwJivjFrZ49f6JCVHudWSCJpkPXH2BqQQfrVZw4jGMfAFayMb5gy",
  "key4": "5tnCm2NzJCgioCkjBF3KZ7BFMkPijyQJRf4z2dcKgXJB5tFhsUuf8GBXfXGBKBsy71wk93JWggy2sMicXFApqciU",
  "key5": "5gaaKomWsEuab4dD7XN1jzSR4BZv5pu132bw9vo5zPSkS5uHZCoid2CTb8iwmzaZA1b8Ww45YYHMRZyC1VQAedqP",
  "key6": "Knd3BhFqE9sPkCormfxwmKFUn9kyGK15SDfDTxkxcfDZcGtFGcQt1CZqC896PQmcD6CkjmrhVJcT6PWACZxdY1o",
  "key7": "55xNaYSQgu394HQXN1Y41vkfKnzbL9mtBpq8sQ8R1jA6LaSTd3eRf32sQr3P6bd27dbmDNnqeCS3Ra7tHGzXvk2d",
  "key8": "8oAn4zBVZPyKe8yYnYBVZskXSbaNfhWTaWkfYtE6w31ngXCCAHLyrnXigmpGx361LXAyNXNDQzagRaZLESuY9zH",
  "key9": "5PmQtnEDDF5XywjPu7in81udjYRmaugbzePdHGnDwFYgB5zA5eo5JtGcs9SniPuTsuMirAq5EoE7AYCUGRseQmnC",
  "key10": "4uPiyPWBwS31Z6u8SCFfrpLtNRdCQzhx7VwrB6efZmGWQB5cHAfPkcESAkhWeyoNptMn5YtJTVezN7C1iypf5XqH",
  "key11": "2CXaFEdNztAFSPN1LSaFnCRtmKEkGjQJ9tdDiy12hXqRhwvdYgbo7UwxBHrnpifyh1vaog8JgmzyCxkdxHGihJH4",
  "key12": "4mqPxn6BgCxSDQf3sbdsk4WhoJZFTvsuSUKieTDYX9499qE6Pwe2qnp4vfq64tcvoWWicK8wQw4b1Bxqrn9xrtKy",
  "key13": "4nwo56jahBHz963ZNZT16jCFcs8FyNcRZbHpqicnp1hgL5p587EPfXGK1rpmDkiACKmxe4eduAjz9fu5MZSgdzPF",
  "key14": "5kZ48SskzxbEzjHvWNsC9KZqWkM3HaSzrke7gsAB2XQWpFB3cGKgGHE2LKMF4DBqGY83SG3aP6DeKT49227KESiB",
  "key15": "31mYqodwqwe3C8UuK4TAxiDSf4agfAno8Pxhd72dpNhkV9F5G3BzyVPrUqJ3isjuSt5eEgTsWtpYW6cDbT4qUs3d",
  "key16": "3VcMqqtnFj8sS2S9Ji1K6daCcUku3ZTWgmQkF6Cr9aQ11Gq4Tpz6PXvs8WCrGgCo6tB3vvk4egNZkhp96uHWf923",
  "key17": "AqBcQLSjEAm1b3wywfnEm1MBNfcaCgPFqCiPRif3s8V8oSgjki6eiKJEGyochj1Ru92MdRv6o9JRovd4nkzazsk",
  "key18": "5pvxScFqbt5EWRNyhrc9ZNXSd3weQmJYf8e8vbudzM8aGgZ3dQqTVaDZD55pxY2fTxUfh9rz9BaPYZkRMx1p76wU",
  "key19": "62z5TFX12XfMUejZDc8D3uXCHopjpRbVP9WbXoqETNuG5swetG7H9Bo4rM1cM2sJ7b4SZZ5yB8sQcQxHmfAiQHVT",
  "key20": "4hFjeRYidvBaWGZwNx37jCq1CG1CcTfu2nfdHqSezTD2jtBmRsAyDBSAVk1L2WXMAo1C3eDu3eypduVfQbLCPJ3y",
  "key21": "4mkUAuSJVW4uRKb8j6E36u62CKYymgGfWqkV62cvt5srjJca2iqYQohUdxxyLTGsSjG4Lpr5yusYG6Xq365Tabth",
  "key22": "4ANccpamcuq44G36jvx4U9UTi7uXtZaqy3s3v8ooou7r2a15zh2Hq8FxHz629bGS8au2CHzmQw98pSrmWDde3tmh",
  "key23": "399eAtFJr3NQoeyHCCwtTwHqEPR9mDfKDCDZHgTSWaVMPyBTtagS6C268rr54Jxk768rUPoVbqmxS1G6zAy7igjM",
  "key24": "2FUkZQdfZmADWDSPrt4R7sQR2PBnrkfnWGmyiDRZdEdjPsc7NuLFwqVAcYCeVn5tpEhuifQpdHjsyauTBZA5hH3q",
  "key25": "DWSqwzySCD8yjeqrNzt5qUPNJ1DfxuS3ar316gFsFjDohQzLUsoXNxCJ2CVy6Fy4yXZfwxhTjXRyXSeqjcFWVnx",
  "key26": "s2AiEwNq3FrckAt4D8yA4k8JK18jpJ5C9vR8S8WQRvGP6ijKweocBTFv2YPweM3PQwahqAyWkgvCn5hTU4yW4rh",
  "key27": "fGBrJA8yn75jkUi9WNNfk4cSq4mzBunEN9PCA3WyMapGWZTkRKab3ruQbsTc4NipUJ585cEJrk4LUhxpXrGxjy2",
  "key28": "5GyfPti2b5Nrm4uqdQNgFtYtRwAsfywZtVCS8owQ8BR2izzi1UBzfRkrrAKEbLBqpPnhtxmnBjeLkzEi6MGrujAe",
  "key29": "2KgGzwiy8U8w8sCBjpxVyuQJzZ4fcmuKW5S2gnxzmrT3uuZxcN4diHUuCH4o8dbQbE9dhzrcWsMHHiGqouHfKd29",
  "key30": "5iLAV4RBvJPCzb6fzM7esgukY1ve346LaaCe8k6QDBwBETrJ8GHuuQprjAhLvi5fEYssNuuxAEZDBWhxH1poRG7K",
  "key31": "2nGPZ9tM1Q6YVM7Va2nGHvRJaxgoBZ5vFutZw4dD3hz5ouHxTukFoGYovZTw4qEQS8HYjMxpM9yS9YeJGxXMAnZJ",
  "key32": "673tWujuPXwS5r6JLntYQa93V4iDWXhZfLjF4qmRVRDBiGn2Njoa19meHigVwNsuCGVAbEaDYXXzcGjsAaP5FdgL",
  "key33": "5B6RiuzkGFbKAC6mtUGRL59rZao4szHLQNUbGqsqVQtjAXcXUBVGnZWZS84YBzA5WphC8HLGZBX55KMoEFrSf27b",
  "key34": "Ybq6qi9skz4CcyedUFPPwHcC4oKd6EbCmamHGdCGJqDSxfdzuQ3mivfJvVVjW8joZegZ1YHNMTEZRp38uJ9eP7i",
  "key35": "67GcFmzZKwhKeGfEGTs9uggGUVmBEy7PuuzUx7AH7iYTdxZwmRDoKjokNXeTNQziAvRDHmoXJ7gdKU5kUWnDXWfQ",
  "key36": "4TH7zJxFwNeDj5w4sZ4VnL1WrBhJnbipHTmGuqP3A4gGmsu8VnuLKtHnLSGmGQEvyP1GVRPWWsahF5h54xXswqgY",
  "key37": "2AQX9tHmU4CTyKw9zKjvqPuxFanuV46SWR7VGzadWCVqd1vLmFHV3rCGYSVGcXq833cYByChrnpAw89cUGkZbtjG",
  "key38": "2qKpgJVZMQV9Z6KjGNGQF8wgyx3pmpTL7CQ72tMJyXXS3KvSoEGLbYUunLS7PHh1soPxJ34xJnHYDURfd4GGKYS6",
  "key39": "33uCetssXFNVm1XjZ7QudBVyoa7A9PW5r2c5q1ujKvyhZkFMUMADVmhPvypr477B17mR3hY9aVXNVPA82WFA33U6",
  "key40": "323jdk1GmsdTDTdC5RqjCy7xPvA8zQRdveb7eEQrq4iFZNuY3xt1hsqyV2QoKzddDoWNTEnurfwq5P1U2zshAFp",
  "key41": "3sixSVGVrgA8jPqwKFkxeuc5o2KEGzjmF7i5ion6DKTFdDUYqd5pyU9UL9edyLFfhPnAWydrGdASNetvPCtGRsiC",
  "key42": "3vVsAaKqLZfa4e5rZJZR3ddBN1QzRzcd1jLg9bPPuGXLmf817htaGvn8PmAgo2BqDV4axrERiJeFGGw7cSq1EduR",
  "key43": "4zPDkbMfAruvnRt5mWKPew9oZcMGiw8iv7xn3zQrDmDkURgHW3kkcShpiHvJwWURZ3cEeSjFgJ1aQKg1z4z3TnSK"
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
