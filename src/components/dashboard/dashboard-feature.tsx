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
    "2CGwTA2gwgg8JPsRJWM5BV6Ld5tfygFiSJxKZpPw6PMvM2ofhj1uT6N3oNYHBJHxM8qUqHFvm1LGfArSxRfieUR1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4QGHPXpEGU9YsxTVmbPpySbnqwdFkitiow1eqcGrVw6RUVtUzkeypbt5Y8hAit6Q8dJhpc39dpJkpJQCqcWPgq",
  "key1": "3HTYrJr82TMPrLSGdzak7WwrmV6JVJFp57rT4nX4yrUHrXHpsGxWJ61veejwSknFs8P6nGNn2BVPx27sBopi9y2G",
  "key2": "2BojyvbqB6dLmvZsWCK1KZHyHsiyPGYEJfAsYh2qhCtLuXhgEk4rBtar3YwGFUsdA9NrH844jGq7KZqJmQ9FpPxS",
  "key3": "9XCof5Ak9QbppwEZSDe8A4LYRXSKxq4HhgoPZHihZpdGRWJJaSnfkGa5eBsboqdfW95NW7k2B3ahD2MSUNTY8vE",
  "key4": "JsmM1vsu8tDdnjDhcwAjaJb2hxxrjLxFw7tJoaNZp32oNm11cW6885ekF9KXFKLzSFcJ1HdgLqwkb2xazUa8bxe",
  "key5": "48Cp2UBQMdbrMk4yDaVcvyB62fbHwPDUKQ39TztcZRSvF4dFU9ic8C71zZNgNFhbVnZwPisGmrvfQHDoshGnVQic",
  "key6": "2JTCji4E4zXuwMme67gXRCknTRcMRG1LLVUWFwLw1efR8FobPVXa9MjtZFEzKB2Y49jsdgSYMsq5LoXwbwgNmgJF",
  "key7": "28Bij1yDhbjF14VBxVJ8LxS5Uo9eHZEyPCoHeEEfqaRr9amc3P5PsM7zUTxaDdXdjC8rzUahoVwQEmcGeZTNy4v9",
  "key8": "4x5FFBcNrbRmiyxHdA8jGBKmmapnqyVZtebfMj5wiKcjGcvHm2vdoud6Y5NjuMgkHxZSTd64qaB5GYCDdw4W8kvJ",
  "key9": "453e3yH5KCNZVhR5RF6TdynVeWtTnPV6a4TUYp9WrRmNCpfErgfykeyv4ovci1c9rTrJt7TmTJSyGDDPm7e4qGK5",
  "key10": "2FDRC1rwjapeH1Z6XcjLgPbW5YhEncBaWGpJTZxGghBAnf9cfAsWZvT17Xh41kvcfbzFq7Z1tBSWGoDs3w8NAjxK",
  "key11": "4XwkmbgSHxM98RjSVDC9wGyYzB1Ehymt8tLd8jzSdYWDN9JcoTos3HkrpH7HeQH7Hp3UAHh6TdY1hXS2FPmdpEg",
  "key12": "36dyM8ZD87QFJgkCrWqKRmwTaE7kDvtSwnmd4Tq55T6ZPSLKQpQpnCMu7YQYeGTcSrdY59HWU7uRv5s4ThJActmP",
  "key13": "3Y6H7o629FXQAS5pRSeFN2DfDM9Fsu1zU4TtDm29R6K4YN7X5NfCg6ddDkPjFhisNWbfYRPjvGugRywP7zW48E3p",
  "key14": "gUTLBdW7xfXBuUbEUvtFpafSPGQEhsgYhJbK5EH4zZTTHjwSkurEyMCir35ca7xiAy66yCLfUj62i1FMpKTbVEr",
  "key15": "3hZhSnvki2mYMN313GBb9Mh3DdEcLLrXnHA7vUN8rCprwKywttQLGVRh2yxbviKd3oKXd3uS1DQWZEwfZjocDLxc",
  "key16": "2gBfNWdu8U24nWm1bDtDQoXPFaU47jh2gfuXMXi91fKdMNFGxmq4bwZ3zNiGCiSJ6chKrABZ7MPTCAnSsgxnZAxM",
  "key17": "4rMABafBN9WBFqyZ1zThQQA1zhzHRj5tohKvQ7icVCVmKGPrgsjpCP3v8T6WoAj8dajSDhZvan11qS1qVh2u1zCJ",
  "key18": "2n3hprgypUiiL6taNAegKAk5YFt7ZEVVR7ks7jHVYdWCU3ehCWMfTYcipYSdgUf5xVutphgjos68ZnYftLjVbcZ7",
  "key19": "4RsmjsVN3ARdemP9TBcrn9pjMDKDtBAtifYgAiZGnhEiUCU9JbzRg9x33oy1jkiLBpZeuNTyPmaJutJUikzEif2f",
  "key20": "4rdra7EpPu1HeTddXC9BMSRXx7a1hKDGuaYHGNNaw76hXyAyuqTCtbzNvNxPVf5UMio277hzS5ShceB9aizkKGr2",
  "key21": "2NW2VayZHYa3fBzTWqywtugwrHyVzuU3VTqVLGE9PT1agvztXm138ZSkArXgVFJ6zvc3vmsbiuiSMrxDVrNWFx8e",
  "key22": "2btW5iokArKKuPTTrPvSRBxte5Spz3KUd1g9o3UHTFANCTu4rtkh9nZvgRxGYYFTmaRKHuHheTmBD1amZRsjH3Sg",
  "key23": "nJLC5K1XuFodbkyD5bhUZYvxz5S3rWVgRQhs6vwzN52WRXaPLqR7xBfULkrhkXoQtXUAFWNLxNuHbiBAx3fi6aX",
  "key24": "45cs4wX73RsX7zPGRxxWkgu4H7X4PjjrBkjnDJ7iyYcnd2wbkvZqxpVUZDwem76rRxYHHrUgQSb5GvpZ9tXV6umf",
  "key25": "4WQpYRfZoFT9CTmLa2x4Hydsdv8ukLTKfLZwBNMVegc6Pvzd6D5GLANLKgwB72aF8D4Bmix15C9dSBpD3KXkhV8J"
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
