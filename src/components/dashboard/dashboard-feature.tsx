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
    "51ZUAEzYBknPdfMdk3wgEu3XMmMRTUdxdqbmY8RuUdB8tYch9qKpnniJ41w9XdFdLQf5XgJA2Gw3XL7iFaPFNeKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYRj44q8Vn8DDP6M6rkQ5sutW13cugyZi2hjLznRhUM7mZNpAVBhX6iw3FsLR8VSRULfLeCZGvN59n18eSk9EVe",
  "key1": "3rhDkACxh4Pu8EykB8P29L4qmLEc4NtWdkzKcmC6whqnULrTvtQUNT3ZTwRoCB6GJTDrGjAk3ht4gXcHBwSZ5c8V",
  "key2": "QAxgBbEN5Ze4k4AE7aepiBYF4DeYuocAvdcxpD2mL7RNsNNYTsBTNAfa9Deq65FQri3ewLZgALcykW6EGQRYSDD",
  "key3": "3JitC1N3cbHnz3aKG6QTrtPr5J7xtB2Kgv1JScs731ZBEnJQQEZCbY7xRwacqZ3nf5JRRo5XRH4W1kKfSBsSBsPC",
  "key4": "2SRdirrLu7qQJNELjAR5BwEDSsfkam85Vx9Vc3fU58RCR7QGqwqpYjstTfizuohoUizsKszAP74v7riuU69m2DdQ",
  "key5": "3A4BAEccUNFzRLLXi1xRmMoEN85EdndFTxuEpixAmm656gVk7oeYW8vaxQo15TGiFuG1Tpm5H23DR8c1TGsQS6xb",
  "key6": "5tPZpq1fawM2scBz7VS9Umk2zLNuAvjp4iDyDFZ9b8UYYWnd9Tu424BBwGqLJTaMtZdVGwDN6FXQbyBLSD2yYJkM",
  "key7": "5DZaTrXK21abwgHUEek5CBUm8TUyCDdsVSuq7bV29inWTbPqLS49ho7bFMNxcZLLM44HakCjPwyucCtww9ZEUvBM",
  "key8": "4Ui8f6ez3WxKdmEBATneSxXGfbLyvNWWJCpg6hJF8ojuVGv5gdPYUcnr26B4jZxuTCPewRivoQJo9JgTkNqmgRvo",
  "key9": "2QhPyph8GWyTa8wSZZ6QNwKNfJXJo2fPisVy2jXE5tH8wPsv4VFdMN8nxMijirJ7NrfTdeq48a1bG3GXoYoSX2xQ",
  "key10": "2sbTMHm3XD8D8vdD6PnRHeDw65q2wMzbYsyWL1KYEEvH3ZtonNHpoT8j5guLJswD8kHQLczisSSE8efbK6iqEAzA",
  "key11": "4hiNkAs2Sz1NaA7aXcuYY3d6o6ckxohudTCmjiMafecgTWd4qz1tFeqmRtRSPjJ2hVvg5i2hRXMDXpq5TwJh2BQt",
  "key12": "4FZaqwDEWJ3bQSAf3apKkgv2NoKYwJeLd3yRumVxb2NHp5UtP77rzaRKuH3ntpQadv326MCGStCpQ19FTXPbF1Gf",
  "key13": "2XHxTZTegcJj5vvVuxVwC9NzYpBujSe7eNpgne6dymUmkxhKGu8y5CnyHnBNytfYfvVtXKr1b2LpU5y14wUFvNcn",
  "key14": "f2huCeiJLPi8f3KGNvWS3GiqwDqqa7SUmu6vCAvCHJwL6RFAuCBiBd1FYPxJ2gdjbMFGQT7fXA7jmzW8wqm1uR6",
  "key15": "2UCFJvL3hgWgvQLDNie2CEeJNbwmJwV9smENvdRhqrVLEkcx23tqqbRbqEEb1sorNvXTbATm5TquDS15HvwWkVBM",
  "key16": "3WaGiqc295v1PruUv51VrWj3b2N4C3AkyMBPdJFsAo38xcHQaEKdD9txVn9up6HAFU4RqtCrLq4i1NTMCyiw6XaC",
  "key17": "uJTb6Lww6ZwXNci3yXEdt3Kx9a9WqD137ajg8pLzmii6HGC9TKkw1HSp7YdDZ55WPCVPsNNkq41htuiRbsJ4yTC",
  "key18": "2XQ6xCWmXGPFeMd6wbHksGzKQ5CnLKtWB9k3TqAi6M9WX1vCQ4oMUoBogpqWw846n6giWoW3nHxwzKweCDtpxRBh",
  "key19": "2bM91v3tmxv68yRyCLQ4wfR6Yjv2WSusMiF4TZSTHY9g1pVQZF5jh1yPCKr91E7Yv4wKtMvFVpSvu5yFhTt13YB",
  "key20": "zqzmmZZLNGzJ9ZFSdmaMSu7r1XPGRDeDbtdFWuYvZdT7ZwYF2voHNLSHyXEq9VzAyKi3vpmvHQUSyjQRCDndjsc",
  "key21": "5Grh9B3brhx4mM3ypyF6nPfTCgqboxxvmyNY8Lb5XBqCVWxU2EabcBocCQRKnjuXTaXfYQ186Purxu6caRrHjy6k",
  "key22": "51JBRLVBmScpPzqDm7fJRcBsfC39oEdNphNvVH5hByBbtLMN2XdgEsJZcg2Gp7agJZJ3rnhjNmYTPb6cPy5j91bE",
  "key23": "2SZiZphQfyvZUjct7DDtzz9qfJKbmnc4e9NAMaZ8Sq75zWN4cDM1tMYY6C34brNzhdSiXQtdmYXSacbjpWPnjokV",
  "key24": "4unyWq1vswc3xshMmXiXCGVpibDrYnbSVGKmyYCpKgnfWVTYLXg2jtDr9WheTEpV1ycKtU5xGE4PBTxW7xviNDPb",
  "key25": "27WuCuQNGGzvnmLgDzLzHbsWQfpPvMZtrAEJAeZLM6S9vnmkebafbUduJK5u6dMgA9RC3yuokT76UQ37S3GRE2C4",
  "key26": "5aPfCSU3JwhH997ukpCbQWLe8aHhJXWgJyid2XD7fJ2a7AsYHvRE4QBtFQdwyaVY8irn4gPm7VLddgWV9JeHD96e",
  "key27": "48BUo8QGZ8ht41p31DwBjThhXsRCGu9soYYvf6pLcKXVbwgnXs472T6QX7kRAdP9QWGJtsLSD21h2RWuchZaRm44"
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
