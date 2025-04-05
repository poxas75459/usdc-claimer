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
    "36RQSYUDMheUCCpHQ2qRWGtgwYFfjpTEYKxV6TdKAMxEKbLCKknV65oFRcBCZUgdTEFxGKoxf5zFvgqkG7JEr5VF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "433Fr4UYAJTgAN6mHTYtsDejhGM4gMSv9LqUyS49zqSPsK9NNr9SsdSu8FzN8SnYBZ1Sziiz5buN8sZK4dnQdmSz",
  "key1": "3xqRFWrD4U6FjnTQwFNrscbNbtM5Qo1fyWHUW1LueHm8F1HbMxoeuWvPdZ3S3mAvWaMzKAtgK9Jo8oBBeDrwT1ab",
  "key2": "6WarLTbqzV6jn7eBLv7EpbX2mc85SzC7VBRvkZUen72xMciL3hQ3Dxw53UUbmeiJSWKvQes4oWEGRqs9J6UR9jH",
  "key3": "4xZdV7cyRHtFnmrxAnAnSozfEtxuwfW3VZvSs3a9pGWfQiv6BJ5sEotijWJR3LthqGsRTHCQrdRgMxGgVoYPvmG2",
  "key4": "4g8VaY7ywxMk4NMiNehqsXKQkY4x5AoWuo1j5zrF7EfY41TVAQNjh1ibG1hBNbaLvcVwtZxZQFFS43YCWBaeZMse",
  "key5": "4gPwF6zeic5dTbdaZ7wQMovPZQwEUmX3MQPCM1QuXdJouUakubGWCNkpcqGzEqyQX1Y8gRWv48BGRJibDmY132oz",
  "key6": "3ZwvCJNXDA4Rou93B136fMEfjXcWMzNtUuQSsTywSvt6TqoyK1KMjygGAbHjWjFCko4eXnYGewySkJgbeAjJBWSC",
  "key7": "2pJfo2SgHdwCHvZ19RKwYXskv4kkkZSEpyhhh3jZLY6cMowi36SjYqxG3d9UMYgXw3LcbHE6ipH1hx9XEc4KNcjB",
  "key8": "4RWqB7N2wn7CfjWM79TG9kCdjswEMPteeA1kKS8sb6crpTgiCAbH2uT3swB1kfeVt8DuzQadhZKeMLV8jhp8QTHe",
  "key9": "3QMdiAgr2uYToCSqJivDga9gL7JMbq5QzY5RYkjTnJXtMpD2TEzEgVCsJ52PGCZLYeDaH7RUge2SgaNwg6ZpEB6h",
  "key10": "2du6Ns3CgZc9mehBRFeggiBx2H7tMLf7LGEnKNn9Jkw5jBNSKRExGhPcUHao1TPqYEu7S5cCqPTV4iBnyqPkv3FC",
  "key11": "2tKL7fvvTqWDeiYqAcsM8mctWPkkWhtqP48hDQAbvE5uKhxq7FMVPLnCRNcBwE6YZoDe5tDWQkuK2joLBQqgEqui",
  "key12": "2bMn3SRZt2UMegiqbwrKoekRGAnzPmthgq2MxnmpJty5LaDvDdS1G5NQWpKexv8gAoWzbgxwpqq1qpAAJfuBLP7c",
  "key13": "5AtQaiJFyeBtpZKDc4Qg7cvnmjBcUUGzsjz1oKMDZvcR6pAs8Wyj48MBmugW36Bkd4SsVuvQA3D9kWuGajEgbCKL",
  "key14": "efb8CTHtDynx7RJrsrqinBqdpEm5h2bDoiyGmEedg4sqHAsNHxTDT29LX5ZBGRwiFwRs7dw47DM624NuSGeRn4C",
  "key15": "38hhqMaEHfk2dmyQ5XkuhiXAhudFVy3XaLqjCscGphev8AavCx6a66ZkMnQ8DxhWDgMryNh8NavUpZqEnAsqUe6q",
  "key16": "3wHpma2AQ1H3cwmeVkuri7Lovx2UVBDR4NYbvnLL5xkopzM339pHpQUZELvKLfd12tBToAb4ZDeh8G93nnnvf5WT",
  "key17": "nNyj5KQNidQTmy8KCKXz8L2rYtcvdjrNmCiQSunbiSfxMwfCfy4UyyK4257KdBXeHL458Woj9kCnQ7KtAZcZR6S",
  "key18": "5LPqCsxFRzD8jLy7ybK7LoN2vSZ48sWMoFHSCL5UqAkwrCA73NqkGsMJFDSYjc4W1uFgCqDe91TNiySphqXW1wN",
  "key19": "5LEGwqrr2u3Uhqfr7fEcnKS5sqRG6CET73AXaDeeHh1XdxJkkvuwdf231NTBngozPhiAr1wnGh7NnU2fPGMDP1hc",
  "key20": "2HBQeoyA86LQRjP1bwTJCUGDc6DFTSsRW28zpo6vpukkq4NjrMUhpm6akpFM5KW3Qn3FrLdAqsk5ka3pz4KPREoX",
  "key21": "3HBUcCxa4XSUkVXTSwNaJDwxFpsqD7eS8wKUvW3dfi95MPTXDBWHbATcfsTawRMYfRYx9UPHDoM8AiMxDuKuqLc7",
  "key22": "yAFC3Epd1cu5DePUzWkBQUaZa35uejPsijH3Y8odNWCVPQCFCFRC8Btt6yaGiEns3LiaCcGxkTsKxmCzFbmJpG5",
  "key23": "2vhFPjreX9ef58ejwu22FPShCt33Vvbr9mRGtcvgq53v6vdMJEEePrpSFCWjDYwmvEq2oihkZs4itrKo2pX4r2jU",
  "key24": "3YKkeDP72XviAjneZKMjtbHJ9mYt2iJBd9wcug9h69KWy1sNr5yv4H6s8NG3epyQfv3hz4tW24jk4BDX9fWrSKMa",
  "key25": "4QCer7JgAbLdLF53vYg6T8USzo7G6gFJPRqRzvpvuctJ1RvbhNcWsELAc9rcAr6PT1NuJNCPrDjsJEbxpaHhXABC",
  "key26": "5tJpqR7G3VMjvJvsmAGD6jjuYcfCDwL2ErzUmnRckSHpqhc9xB5qK4BcqSv875U36Mi6YsnLJjpb1JcmsAcYWTbv",
  "key27": "Zd9Xcdh7cf3aucDLXYMT19trfrzSmP5FQVbQdUA3jfrkTWyGqhxhQfjTN9HjxXmkayv1NNrmQqMxvbZzsbAmwR2",
  "key28": "44nEBxUFkHGzSgaH5XvMG8QrmPWXLiyau5YNBwBcaZy9aGpbGwZSChkYu91fH6uHUjeBetpTd7UBuvG2dBKruky9",
  "key29": "3CDyw1n685LRGnm4EPqKqE8Q2F16r2SXqr9J6J3bNVYL4oBzyBHYYuWHbHvBrbe92bzQWzN5HXgN2v5nRpKYurXj",
  "key30": "3VEuLyehmJdj8Yr43qAQFva8KxZc8qK1Lot5FEkuyoPixYtx7hxFDtDw7rxsHmcMYiKg7PWr69vs1eVCj6T1f7wV"
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
