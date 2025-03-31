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
    "5jh8JwRNCs28WNCQYr6Mjj2jX3T51C7kVn6NG2EhngcbiT6tbWty1oZYBUAaLAsjZQxuVq4pNSR2WhWMRYNxFmcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RQDft8YbKYXs3UW4wahQ1T5NZCksuruL5Ta41Lr6Kho6YaSPqs5kPN4dfLLzD351XvDm3dwyHVUFBH3fWGunWeK",
  "key1": "5c5HQ2TeJCizNiHybfPScs27QmUCEsXxVRskNr5Bp8TbpvfZnydsBKkEHhXzz5up8c6VKJEVRSfKCLm8sxpwPrrG",
  "key2": "4K3jvGWCTGoTrsuTY44DdvQcRogme6RN1v6UXnEMoLKcGSZsuhrPUx46BMq5UPMSXhCsB4Pt1nAAyJCiYUQ6Dq1w",
  "key3": "3fpEXCL24BAdgnECG8F6NSH3QSdk5p7CmXvdZnVNFCKStrVe1rLY7PN1BpMEWxWzJzR489unxNxk1FfewVC7ZAdh",
  "key4": "65i5vnEc5ytMDRC9cKQzVjG2zxktL5upzTWqf27YYfDgAa9nx4AAyedBoXksft11cweuRUgipPfEJXGYCENL68at",
  "key5": "5kHDYWmLxYHGJYv6qss9ZrVDAr9Y6puyoDSEnTPZUGtfyMi3NTQ98gSnmJa4AvUMa2FYnoP9eGLKMGNh877P2vSh",
  "key6": "3YNytrrLActsMnRUqRBtRRBUDYQp7ZCDAXp5WWaELAjxjpFGoRzodUEosJKdhVUuDVuiUSFoBuuz4H2FfFDQvVfT",
  "key7": "2ks4srKceNJ8dznGFCeXPCeRCJHZkT5Wz7SXhNRZDAXZeYEBFivp9Ttd7c2AmntyLU6sEYm42MyZRdk5jV5vKgT4",
  "key8": "3nvHM99XVqMT6JxnzFEy68j6BPhqJDGFP6cKsAHQqPUisKx7HS5JvszRyrKFjhLAnFyAaoChh8uaWhVLjAp7kzfP",
  "key9": "44JP9Zn8xmwuFt8amzBKRpZaMhnoKecVjmBDiNkSeovv1v5trXNSF5no8UJoHXgPxTEraBSjnmR3JpirHnjC9Ygu",
  "key10": "5X1oERS8MNX56jA1RB5WpiipqTZRAAVZ7P7iXK2wpr2pjYY6suwhRZTfstFeRh3bSGLr8PSPF99yKT6GHtyyjb7s",
  "key11": "4Vudd3tv9CxxTK1sdGHrCoBfWnVqW3yqkoKLdD24KoTJHJQiLuNNQDDi6ZnFvBMQafif7WJEsFwwV4iPGYPAzmEu",
  "key12": "3fUn6C7CPm6ouqb631As6HqjQ6HTBFhqyLKGgccBWkne7rSmWXDXsUzXnuZdqG9SizGYcdpr9W7dWkCosQk8yU4t",
  "key13": "fA8YXfYGhTyLnaf6aAyBNeFFQn5S18vAwb2gKLLBd4uAoW5k12UuNzLE6YstaYV9skejbpf46s3SXP8bj6Z1rx2",
  "key14": "46gJjq2MrnJ9XynYaUAL81qX8fVweBG4zua3rvz7vwUrk52u2uXUQPBSjgv66HJzxAU9emQbF7ET2R4JYwR7F9vd",
  "key15": "3yGvPSkyXpeKUjSpdsqZYY4eAnQ29E16yyJS3VBFjGhCuSDzXg1c3egQUxhFQQBRn1unGG2qFeJmMJFzK5YPJ7XV",
  "key16": "5AP4FUDrjV1L7F5uBrpiNpQCiBcq3T9ja6rvPC6L8eSvY7mfcBiEvnpcLxwVXPFWkzycdSEBekhUE8dMHiJp4Ax2",
  "key17": "5jVdAo2TgfpzFHpcFsGanLAorZQiQTquVDFwC3zojKrEBo9rG9AmMP1jzCTU7qBjpw7CXAhoMfLS96EK9PyESuoC",
  "key18": "3Hf3U5rpQ9NJ1MUn5VyGFKUYYYAfUzj5tkfmA67HeM4tPb27qvXmSAm5iTYC2asrAGQNz6m2koyUDNvLZ7qRuYvq",
  "key19": "whjSyAiRqARuGmebVK76rf8R6hoTZ18ByaL6jcetyHDNtAbY6eZounmEKZNiYJRcUmv8SGP59CuLMyaXihZ4DCu",
  "key20": "2rEpST5y24F5oT1wZV9TpWgDZR3TumFNvnpp6iEeoKyS2Hmzs5BuNcx7eAEHPRU1dBoMquF7MbhiaPc5ih52rViS",
  "key21": "8dh7hZDatDiaPCFBmXxCZ6MLiX5N2fha5khAncG2YiD8xFaghx76hFKwvg1GyTxEs2B1x7WbqFxaqHTRNonXsns",
  "key22": "4oEQdKJ5WidWVrqbckc6d1oDYoozLXYDVaX9QdFtQFJ6NvByh2MPmDrE7uzA4QafTiCwrmsbCjHXiP4ooEEFWX4d",
  "key23": "3P8YLfakndvF9gPjx2VXw1yjTe5p7EdEzMguEpzF4fF2eJMasiczoXiH4Vf5teSGADQxan9myeu7NBmurGcvTgot",
  "key24": "2cngH91beV1wCdm5nKT4jp5GJB254qGWPWWh4y8prxxgHYALnsWy3z6SbHSnb4SAt3N2XE8DZAREgqXREMndVNe6",
  "key25": "2nkvUonKP7sh9Vi9UYYj59THzoYPmGtaQv81wwR8oELEHY5a5JyyST67s5hLz4bDU56isGt5GRNQgmrZ6i81A9af",
  "key26": "4TqCT2Ffdud6zCQgzvWgkQP8Y8WAznwiR71VyA57NugDNJk1bawuDzsopnc8qqccgWheLKiWSdFJozkchoqAMKJN"
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
