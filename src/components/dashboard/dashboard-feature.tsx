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
    "4jHQzand4ZDTXiNKB5r6xNbxB9aHRBzgfABVTJAhFvXo7XwAKEJwL68MBipF9QU9tf6f36sXeKgjDbJDogHHjX2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GNyQXcHd84zfykjJ1XNzXPU5993rPbXWG8emUi7Ecp3Mn4iPFrYYssqALZrkd65VkiMKSkMzANFsvm8vPb7DbUQ",
  "key1": "5L5iYYLuwkMUpP9fRy3Bbr8jzEaED8Lbm3wZfJrTS1SQTddjBoqVScvrjngy1cLVChQy7QGz3LHY78bvkiiJjAMc",
  "key2": "58JvMo9DAS35DUa8shWMvy7WUFwXHj5AxXLfmwrPVj6WmjkTyhdV1FMEMgo98dWwDMx36YtitLkJBUJwGY7FHPT3",
  "key3": "2p1zQmLCT92eMvt2vbWfuBmFeEuiXLpZVPBTQUFUpkqAiWhG3KruawjiY7Yav3W3XsgSGEJWhP1iocBmPAMwD9dd",
  "key4": "2H1nn3js9CCXtHZqVR2yHoDdDMGUk8Lhs5HA2ofYX24sGqt5u1Ha8Vn8gyDYkZQmociPQTVUDCwt4jwHdhXJJP8k",
  "key5": "4VcJWxi95rRTJxLPRKR3P6p7Gus89JEyofGPHnbRSset4MDKEdoJhwyx3sQfT1y3yZNxZq2KoDfChru4nnzewrGW",
  "key6": "2ijF96mDp8L19LdEbCCQYCB1p888RHS61TkV3vaPrQzwbzBFDSHwCUQSWP9Qgk2K5EHAVHKAvB4LDbLF2Ue6QUVQ",
  "key7": "LSmUqC9c7mWztbw2goH3jCnaSCnPzq312kTJKnutMe6BpRNMX8mhnDaMo3VtQzFB6e19SD4pUchT5o8hVANA5SW",
  "key8": "4MhH7dmpJJpvDdknpnA3KpK9MFPvbdTabCswwtPxLy6GUKuLGERsZUaYodMYChRYJEeV9iQ68raz9FYzPSBQ9R2H",
  "key9": "5Y4zKiYaM7jmzdg9UW5rZBp7fZY2RxeoP5JqzCb4yEEMe3iQQKX7y4yPtH41bZxmBXf5snaaocRgVRK2puDhZ2tL",
  "key10": "3wts7eQbf7y9uHBVmUroseGxwcFEzMmGmhxSQyU7QjosXaAfC4ze5CZfvz73un9BGuJvUNGFFkS9BiHygHTg77UE",
  "key11": "3V1ZFJWFPPB5qGEAjr8cpVoTPJ4fxhBV9Zw1sHVkdD7vnumTBDRMeoT6SnDSZoRPQxEibPhAP4m9euZSZ8hvsTK2",
  "key12": "67PBgmQvDBRpDaA6pL2LGunoJFxj15gkVrXsJzs99QUWQte4BZVgUhn3z4UD4rqHefNzFqKcjH271jap7qYNUagq",
  "key13": "2ZLRq4Yc6oEnR3mZpnwY5S13NdCwFSHEcVy2dp6jY9W9iuPWK236ed68UWoKCXQcNbaVPEFnP5rmwmyiji8YRUyK",
  "key14": "4zRHTPwM3p8nMDVS3qnsoFzUXNQi4TJ9yRukCiReHPHHMSv6o6ZiwArRM9VNU7wkm368FGKQnDan43zj8QEwh4Rt",
  "key15": "2yMJ2n1fRPRBwMCxwsZarkKTHW5D8XreJ7FH6tGPUbNgzAayeV6yqmDuuYeSSUFXePTm9G41nEkrdFJaQMu2X4im",
  "key16": "2CnFCNarqGh3akhtb4WHXmmw1enzugk9VCNz4otZxQeNEh3J7FRMW3nrGpYDftCyeBUQP4uYDngXGDKYSRqSJoUC",
  "key17": "BAQJf1H1UFNon7E2cgUqCfBj9YhtXEwjPor3g3bcr26yyxP9uEV1Qy5rxqk6b4JFo7aPvap5XRYJgv8hPs9boz2",
  "key18": "4AnXLCLTyj3n18TdBwSyXnV2txYfv3WKoSdU9w2TXZNQybHj5Y2HJeLE9WFwEF9fxm1Pmcju5VuLH1iTx13Scmx",
  "key19": "5SyUabN5VccX9S3hKbWTHDqzV3NwUhrHsU4A12XCGTXUCDnPYeEMD4kq4FUBxNoU1NFCRA7pbuh6PYitvh3P7Wte",
  "key20": "5b3M3qS3SqvdWHvCRAcN189QBEs7d9bniZq72ixWuPyeW6pUZerpcKHuvCsBgiu3nNtKxaTaEna4YUJJEYrhH1kf",
  "key21": "GtyQc5gdHcCeY1Djnz4mBen5T7ysYGcehEazJWbRGVnhhjHk39yrvLq3gvhQLP5az5m6SFQrnnJqmidKmqZAr2P",
  "key22": "5Xthxdj4pdzgrko6N7MARRS8LmRPSuSQycnSTosKq3YkTgA3iuZQPZJaqWGvKq7Qj9NoUQJhug8ssW9JikG8RJgz",
  "key23": "5tvgLjHqNY31DG7ZYzSLtR6fpvHhtjGTo2sREihMhKGsiE9hySiHC3uEg15m2WxVzzc5dBSJFinsSgGEtZE52ST3",
  "key24": "2XTn4YvvRVfBogbDPxLyMjyw3yoeuBcqQURfdpF6UBrjGNSkXQPF7rqzDYkXq1kQvqQVoCrQ7DR9Re1szx7zzDnU",
  "key25": "3etT4Mjd7nJkCXmYf57tEzGFXti2zHVQFTWtw3uGWc8vVbKyLs7LFpRDDZ9ARXFtfsYXkDdMrqjgtntoxKBtk7Bd",
  "key26": "5MRhCFkMBEuKT5CDggqogjnkkPuGVgNYojpcvLTbJ55jJKR4cqyFxUD5baa3Wg9iuumnViTphCLsZzD6f6Taj37y",
  "key27": "4VGiZXqnNVaJ2k1p3wHzPXSvK3hTroKL3Ff4sLiSpBLJryqDzBhGK3Mb7JkyfgN24CNuV1n3t7XHT9rAR3QJoJnq",
  "key28": "4A1ZJaEjvh2B8G1dcAiM8wE6VgRVbaH5ufUAY3HXiJi29BhQPLyfiRUELf56NpJNBxAVwsFh4jiNYHwRunND2YNk",
  "key29": "4FNzyf1uKYsShDG4ewFo6HS31J95MUFtUW7EWqcxuo2N41WR3rm9q8HPNyFqi22o4EwPihmJzSWKdp7aJedgX38Y"
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
