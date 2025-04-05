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
    "k4aaQp6iein4VyAqgcKUMzZx4Uf23UAPWQoKQxJZe5wnmzyCQSKmUmJyvuSrHuuymQzPqSivnkgrXZqAw85tFMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvcFP23k3XuUYNYHfwNTNVs39HQmvtLXZuytft5BDBfXW8g4mi9rQtH2tkG1skWyBEB4MLgrCmXZaGyopwZTcZ5",
  "key1": "4pxYt2Cg1ePYnL8WW9caDYN2dMVE4tMuwdSNeXZtBMP8rUZjH6nf9pZCoKrjQ1uoa5VoH1AbX7zPfbByM8Jtj9hQ",
  "key2": "2LFPD8kwwhkLwEKKMNAtrXmyragsiju3o37AnBRHadgozsPUu99qRALf2CgiV3WygEG4Jh7fCBSW2Ckvw3otpoyd",
  "key3": "3EtCafyxVkgjiY4cd6VNJuXBoSvs2SrsGFjtCiEjA9MV9maCXhHAKAup4AMwLDfpX3tBUPhu1BAbBYK4MADXrFWQ",
  "key4": "4xZmVyW5opLPMHwFypVR2UMXWyviYT8x3BTQhXCwsBqi3FuWrzbnyYR32D8isw9rwHhfRr447PH9muVMJYffF6e5",
  "key5": "5cUFdERL9VMUfu9pK9uX3Xc2CDFdYRsZKwxPpLkVk56W8dS9CF1Zk1JM85aoAhUs2noiW3riq7NaPa6rd1VLQvb8",
  "key6": "4FyH5dbus78rE7WCpksRc8ofFh3P5Zwwan9eNFczt9Groxj48sSEc7n8outedTYNzPphKBrbtGPXvHXqzg73WTRy",
  "key7": "5csZ6wbWeotDScdRUDHpFpkaTWcAhSVhF2Zqpvptcmp9u7jcPfhGG98Ab3dUUG5bPHN1TqNJk34S42sRsRpvG6LC",
  "key8": "2g9vgY7WAyH8Z1kZtjxByJ7dxiQ4HAiJM6JPm3HSwQEDPWDsduLFgN5KTvT5dT4FqyjuzEQ8bCk68SQZBuuzC2BM",
  "key9": "2YBFYJi6AN5wCsXGrMmQNruVgi8T4UWQyHQHgXQ8sUCP7TLBetGN2DgVvvk5AjecWN7c8ZKPa3DppdKw4BGBrezh",
  "key10": "PLvLgRAogR6Ejfdvh3Hy8npUFj7S2cSAN8zgZjNxt521WrwAxM8MbBUhuoE3q4nPM8kHc5otwQmHjqjphRyRG5C",
  "key11": "52mT4K82XYJiScKyi2Ssr4CyU6KSkLjUVbNWyKsQ84aDkmQBrTdcuQJjZPAbZyeFnmaNhEURuiQiWd65He1xXtKz",
  "key12": "2KgotgCiqTLkyDLiiwdtHjDyUoeMWFPpjF76fnTMDUeinRemF4dGmxwRaJeiW1T1QRvukJ1aUD46k2CBw5ahsnrJ",
  "key13": "5ovE2AjwCsYt4ikNDQKTzNMeqPvSVWNVuaiCFF4cB71xXiMKPSDpFgUz53pWL6UUeU6HP9CtYQTrTnVF7UTfEZoy",
  "key14": "4fjvAJj4WYo6LWRzyusJjKgTZx9AhuBuhzM6yymzEefbsfnA5xTkfyLEm1xDvpjNA2YG55TQQ5ii5au76Z8ZMk8F",
  "key15": "2Skde32hVnY9bPSNmFhZwMNCJH2EYVYSKLLsnfM9YFhskYVatrgszroBAqf2yVSrZQcBMijV5Hq3LfnWC1jb3znv",
  "key16": "5WZrFSWfR7N68E6fEyhXvkZ2iubgmHUHG9MHDKTQjpMmskfqNE9GbyWEUBQw2Q76BWrH5z2SgEpxP4Cfr8ZSPKuN",
  "key17": "5Yp4nwAd7qiZxZtC6duCoysDGw2A8Eye3S9b5QehUZiEsFCtX24jx2mu1HnQGEkUfVYeJtxKzZL2KTX2xkDDAd47",
  "key18": "2FmmEa9RyBojLd8wxYbz2H6RyGr1DCpaBgvuhZAA4aAFFHS1PaC6vUPqgY2m2Hh5xXBQwJ5iauUhZEmhDnLPRUNp",
  "key19": "3bB3rAt3YJpMM8F6qvuT1MwxxyciA5yFeDhmVDdLEzfnkBbo3wcqLJcdrX99rmaJsrxMWMAZHDh2nARWxTMX9pTZ",
  "key20": "2eikVbnb9MsdFDYukhqtdXLwNBrBrzGpd2QjBfvdzBNzCqPufgw2FreLmYUZMDX5LXwSzjQz4LrDXR5VoWanCXoa",
  "key21": "29RKyNb8HRhWB2CgWSzF7XikoGPqNstBB274pTwH8VPJrvQu3K4X4nvnVmbbSMdp55W1HQNB26jT7qvhkgZc53Jx",
  "key22": "2CBch8NT7oUdje2DBuoTKwQU69zSKZsi2G8McMtax6RE9sLC7RGozjUJHAwjthCgKdAWD5unpJrhKTkTLUfp7oFM",
  "key23": "5SMp34LRrU4j8s78CDRgkoY33PGwZt5FVdw1heMuLidqKyb1v774Z2BjmTRB8t7CUCzGQAhrAncgEt5HAQfeAXes",
  "key24": "4KDeZUTVfBhGaU91SuDYdGAZtBBbYf7Q9vPREfwpTUn99c2oARYELy5uofpr7GA3K4FEmtFVqey7GjkuvmsFRJsg",
  "key25": "3q9tkNgMyFRRnu8yZNe5BPRw8Ebdgk3GKng9XFsUcZWD6JosreH6iNDBBVAfv7eGQjLU2tLQFbfGiANaPh8CgwBm",
  "key26": "3D8NPdbRqYs1voCRbnFCAuxA4rV1CcaiUwcUksxKQS919B7YwQ4t4TVXwhrazTvdawopmrn46yVLLLhRHanQ1XQH",
  "key27": "23VeL9ist2SB84sLFc2rfqYbURyro79X7uWLwYfcQttL44CLrooheBSqFTKGrXMHC9XwxW5ka52zU3htuysRAyKm",
  "key28": "4hms8AtHrkwociQgvmN2pLSyGUHjmRhKwFPV8Xb3hXSbreYvphnQJqkeqTog6bU2t5oDfaQCFiw9KoBLyRYi56PT"
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
