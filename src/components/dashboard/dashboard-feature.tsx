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
    "CwRmbdktCMx2hZ7fgZSBYAGZfzdh38KkbFNL3NJFJQocYMTwA5Ljgn9DmFzD5YxC43pcM66tWXCEu9w2CVofZkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P6vQBBxwyiZEsrWYRCazxcxDZS1FfFCqrVdJxvzh4Wy1w1QsmKBam2PunS8zJ13gQ5LroQvwt72KXvDjXHuSNGi",
  "key1": "bPxjfSx1G1Bw79aD2YJYtNuuSWTWC7UjjDXpY72BffmRW3dvdZp6tC3sFCgdGoTVXXYR84py7hWf9wNb14CbQts",
  "key2": "3wc7RTvVviWZAGaMRtjtPU6meGd4qgESXfzY8c5wHHrcxj51W94fMePFYu2q52Trm2jSxkbU2gE4occC6uQwEJn5",
  "key3": "4dMrUVA7Em5GfyzsAMo2nqhCmGGaVPUkirpVQsSC3QdQxQqiY45ZVfFyjs2GjkmL2GRVhZiA6rFsZFYs7iAqi8wS",
  "key4": "4iEXq5KQyRwpnHXfvn4R81uTDxXox9JK8kXHhcJ9RnSG1wap9nXwo4X937vpDhTDA47nNjZeBadZDuDwxERScyah",
  "key5": "2fBb8x1Nqek9cDzd4RkxZstYKyyDVkMetg8nidy94AmtvEgdFG263isWjMRBFp4yhWEhRpWgMwm7XQW3561z77rX",
  "key6": "5YWwEabAzd9fvSECxFP4wV9c9T5m8hRE4Hhq2498ac7Gjs7hhKgKLgwvpQASnfWEVUavXnhuvGNM1TjiSZieuhjJ",
  "key7": "2b9MpJGomWuhiht5iWzQwgAwyKYuwQ285HjWgKXnWDiPGKsvGEQX1Jiiq8CZHwWRXWCbBeamwFK9BkKeXBE6v2J6",
  "key8": "28jxXPijWEpJWZ82QPHG4XMemU1qRf5puePc5j6pDJ56qhHHdZwRykXFEF6GicB8t6Jbeg71Esz8Nqwepkm1FRss",
  "key9": "5hbzojodjpbyFfBkVJ77tSPKikic6STx46cJdeWQQNcgQyUfA4EGuFxjUCGPoCPZPKmTu2jvsTFwZ4fLmj2zq9w4",
  "key10": "5W8yDh6VXBPHPTcoGcS8tbviphVo2FTcKW15T18fDu3BP9HXpm8hMqrZ29H6eacSnuvsemJgbXZhXiiN642a9ZHo",
  "key11": "3rKhT9iMj3EMD4JCoucXWSFKK2TRSup3p94eRMMj6F44WRvpFeYYB4BsxCLopsHjBFpd1QY58zxAMVgax81uqvH6",
  "key12": "3zogchAXScDKoRKa3Hii4o9J1YJWuzp3vxagVXcZsGJvRN6cstFLDxfyuSU1NguQaYyY7zwLUgAfe1TNmmvJeM6o",
  "key13": "5PqSUPZjBnxcyZbYFE2QnvStwLPmMBpgvcsTMMtTymqT87t57MeoorMJUpDB6AhhjPTGEstG9YAL3PS4hSt1rYee",
  "key14": "4bwacfGFAAhp8AGjh3mr79fUiqE6zDDABKu6LPBj7BRYvEsiwu2ZHnkYWewhQ6Cygh2KjppvWYSBtWN4CBRccDrE",
  "key15": "4pcHiWz1tehxTJUA6Dfdtzzz2tRjeCi7AcUVcZXEwqJAnJ9Vfbyp23Rh5zLijTTmCHkQQPKBmya1W7Nn252nymfi",
  "key16": "5dunXMSEcFZsvaU5YtKxMoJ18fgE1CnJwfCE22Dka4pnfeUtE37QdN9CyQZtYRMt2fYRYaDQdRC6Xks81Yog9oaD",
  "key17": "3yT8XXfDc8wSCsafyHdqCvRjJ2QsW2X5nqkTnym5ShUPzD1PkBYJ6Ddnd64KFCdV6Hpba59qGv26o7Fp6Y3WB6Qv",
  "key18": "3DjvrgeSTZMwP1pYoXfXrPNyJEq1gP7ShFr6LqrNu6ZBnhaEeaM2svz4CyFZhfnsW55AuX6Sbf1CvtKAwnJe363b",
  "key19": "57qiVvoDRAftT4imuZgbwgzw3SMVb8H23zuwnrxHxSrmoeNGZasgzXQeR8ppb9DSNpFnuWZStedKjvpv3AqRvT4E",
  "key20": "3uHBihGfmkxPbFNySCSEe8mCd1HhU9NJjQd7GCdtXXgPbW7RYJPzDaARV2H8niK6vvMdTW7WwRJ1XcwJJMCwnEiJ",
  "key21": "tBadNQ2uso45weTvmaywRnJ6F3VVth4HDpuKjortFoEt93hedWSAccMQyYf1SZLqxU4Rdx8KCDk2SMre6SVeLgG",
  "key22": "pmzz8asNSY9Kqe86dTN8iVvqrFVMWtBy4WVVbUnksVLK8Ykdp4kVuV1LAhsHTWzJgiRnMzvDRUC1ttjgDMqZgNE",
  "key23": "2KdPZBw7HsDua9XyibrkrkuSsBp6NMRuAv5YSmuJ7afHwEeSeRZA8PboLK4Euv4W8PSx565X3KRMheS44SBHGeSh",
  "key24": "5mmEkfiR6yYJQioJDEgsPdKLwH7KiupkfPugMERDRvBNFTRoD7NL1ikVgEY2LbsHUC4MoWJECEgknHZKFMUnTpK1",
  "key25": "4kw9riwnwiyN4gXRNamWK2CMmyTQ14GXirfG3NjfSGBRwqDb7uVS3nHj5Cec5hAtd4tc32wknKyRJxS4JBhCzFec",
  "key26": "5KNWLXG4wZVWADuxzcCnfVSLB2uxwWRG452xBfziJrDb9p3ChkwsN4tuCjL7R8kHyuPsXLMS6PDNDjns6fu4XuXi",
  "key27": "LajMq2MEK9FEKvFZH4oy9HByt93oBXHfMJwwYkzNZ6Vz8B29GqQDH8NCsQ2omJzatfLkF8QHf2RR6yL8ZTbHhUj"
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
