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
    "3VY5YEDQknJqsnfKAhPk2RYtU1imycMNryFywoVuxAo5yrPXfbEXPKfV5QLH2zrHtEQcsidShtETGoiTFwVGeDv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MsdyWnzsLv4kjo7HwQr29NaCjYkGCb1F5oALYZpbvsVqhqYphU3NDBgnYrRkoKxcwXZHQex4dRHhMiqF1Csufm2",
  "key1": "4vdVTgVJ45brcz66fCQscJPueeBhLNMtWuEVCHnfVVwMF49Ja8DL5eE4YCVHTL7qeTbejEU73WKCjtbKMgnW9EBs",
  "key2": "4dT9naxiuCpV8rU1GazVxv7HYNzG5mt6qyZtVGrCfXtGFCQ89uPszqQDC35YPYrg5LgrBdnjz2HScb49LoG2FRpG",
  "key3": "4UrK7i2ZhBXkxC5bh7eGVMctbuq64ivW44fPvAGdF9BFEXiHDwQcfD12DVm7aZ6CpncQNB3Q4KhLJ5eCxtj7VZ9E",
  "key4": "3p5vhQw8af78jGE3u8DdxJ3F6UUjRxThAuezuDwikT54dzBdEas6eJdwBaLQF7MHdzubdchgZYcdFdLFbXaybBhA",
  "key5": "31bZFcDd15dikWJaLKgD6YxkZMcXPB1q2XDT69bS4uNfqTfC2hvb6VXycCFL2FET76vsNyeYtKPJZx1Gc7a8s6VW",
  "key6": "3JKWfZggKojo2XaXeTGksAtFC3Aqy59h6YFoVvLBWJGpS1mhhjzMfqwikDpc4KDexcNJEjTS9SoQgZd4avRNnBou",
  "key7": "HLfUb95mJforfZ23vAuTxYhvQQRRgoNhieBP2L37VkidK9nbDnvWwYghXavD1We9iDGax1Bs7aMtFxVUPb5JGsm",
  "key8": "52FipFCPqF1VHUaG9kbFfCUNtXVVRUK1jSJVqmr1vCe1Mm4S4XbmZXX4MTpN6c4zT5WCPWiJfqM773Nej4BY3Eun",
  "key9": "fvEnUvgpkRYas3NVLxeMSaoh92BrfogaLdV5mDSdCqFAq8FohrRrfT3wbUfXyNSqx9zjYUu6dNJ8hcJdGQVSwhK",
  "key10": "jEHbDXLGmsHU1kPvoMtmR9gpZYvvRMRYyB7uFmpqKRKP6CJbQQPLJnwXNurn5XsHtHCACS94WHhD5GhrUWjDa1A",
  "key11": "4VWWGEXZGLDZCGhEJtvi2SEUHZptsTJaSsKCxDtqk4fqtyXGhL14mv18t35ivHnDcnZ3b6zgDdPxiaLT54yVh47i",
  "key12": "2W8D7a2pGaujWeRduEi8EiLBXqMymHw2gxK4neR4a45GBCQoHr7fPRURxEdHjgHvUKTvhHcvJjR2BSDLTBgSotfz",
  "key13": "MPaVySBjThe5vLJeBGsAK3LKS9Q69WnAGAq1q6VsaWYphu4t4hZNzdmjXjeJn2aZEg7dDLZ3fLBNH3GfSdTLua1",
  "key14": "3PQDDCckPJn36kAoThAQAw6bEsjKy78gCjYTqQNPY6XGrAbkixHmb5Xv9KDLTVyXkoXr5Zy8suzTw7icqvWXq1oL",
  "key15": "23q6cUgBxEy9SxV7XXPvqG36ejYRzBr2R4LSs2jLiyxFuJJNBnARt6j8dKxUDjefxCpZRTwJLxxsj53TEbnATPyT",
  "key16": "3NXKyfzGvYuKAxB7ebkHyDXDDWLBVrThF6ZexASL6E4KcoWEmdC3Vz2CsHjSG4bMkNra96iARmfEGvoEH81AuW4F",
  "key17": "2f5gR8pXneRVHuDu9VxkN4eYK1rhX4ioVBuRU5kfv4PEpjow1FKroPDc6gvSENx1DwXE71YKHpJ4Re3R1uoFkQNH",
  "key18": "5QCGkz6y5CtTDQSgthNWgMV4BrPU3M9kqTT9Wd128oecg44TYKwMrjdkfXpjxPkpV34sHMeLz9xGFZYLjwNfhT5t",
  "key19": "43xVbhvDg598fMtfeqHvhoPm5KC52jfiymmNzqCNQky7oa5PgvMwYTJ9EokpVBy73PMrPcYCRv4USADcxtEZx4Tw",
  "key20": "4Ezny6byWo9tFue8bQjn4JfacWHmZopt6FmVipYA3xkntEYJemDHqNkGD284G1gzKmxHQ5obHgGo9GJW6WBRgYzy",
  "key21": "5okCAUAxfZts6grWozh1KfUZ87e7WgacNwWfEH5EgqzR4tEyANdergicUwYCkUZK1ZQWJtDsXGwYuhSdamQiSDZV",
  "key22": "4KGhAVUAFrBmJbvdvQA3vXkGikwToV1iU2hPgpagh2BmvtVB5QMsphS4WVvREMScSbtw38XyHKzFu8C1HNZ56jnj",
  "key23": "4jWySh1nagNXxVuu9mwe6oVhkmFJGe8s6paf44fowQjdYpwjyfZUjNFDTYHgWk9PirGFeKhG8SiMb3eaQdQX1RRU",
  "key24": "32HHZqU6v83fQ3KfvxyniAaEKAA5bruUkpBFoKEMWymkMwL4rEECj1tLetUVKfDqYuzJVzTVs38X53KWM7KRo9S4",
  "key25": "2Lue57Pex7MF1CiWvrYHtu6RFbNfHMBcN8f3AWVQsq5rd7uJ2KUetf8mwUNLsdf4QykBKLuzyXnfY5mVofutR6zW",
  "key26": "ttWPxRKcvM7qSnroE2zAMb9dtuFhm6rLb37yDbvKkaKiMKxWcQPpHMgLiQbc6o15PqL9CDbFj6S7ajfCNw6Mv6q",
  "key27": "3rD78Gw6k2apRQoyuhd7wqdm3wN6Uz4yTVGq9E1caqYTg2sFWTXjrw7UL2yS4oQAwHTqhCSt8eCGDYE2rPSEpxQN",
  "key28": "kAvVsCc3svyCYQXucXrd3PVoJt5kMDfUEtRrnxM51MJ7YmNp1MGX4doiVe2Mbr3NnGLhUYdgHWWZmPWTqb3uBxA",
  "key29": "Y6dL9V825sSwHb6cPKXqhWd7qcQmkaxWjLczUzspk6WGC2HpJTmvLGNyWibFCyCNSEuXLw8Hpdq4cpybbQL2j62",
  "key30": "2yDHo4nTahFogJaec4utx57Zk6DfbdaZEhQZfGaBzubbPxafzozn55atcUXJX581E2wVALSdyL7rJnYveu1S3sJn",
  "key31": "4bxQiJ9qfh5hUy5qoYFTFAi6x9XMMSbpa4gypPe7KFkhY682u2NZ5gAmAkMzfs59dMVpUHcVr5q2EXM3PrJDF8su",
  "key32": "3si8dfuVHtHEoopy3mx2UsEoDTo5DRkE67B3p5uWLr4Rvt63sfKUWM97CX1tWeUcjDKZh6586R13pv7qL23ktRtJ",
  "key33": "PCVujXzFjFn5gqdGpq1gqbeir6itpBdiEMEnnuNKpGv1u3iuxTo17UM3NDrtrXeQTgvQVzSvzNeRQhWr2vSi5MN",
  "key34": "5XrSYSaDXRshCBvRGPg4cLM37N3MnuL88kbt98RfQUwgRcfRpiekUDa32z1oLvz8RDCuRAWFBdJAEEZwvB4JQVFP"
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
