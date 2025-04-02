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
    "2jU6Vyf4ePxY1aLg3WEQKYzSoSXooYENt2QqyFp4PbaCbVJuVCFLxhYtCr1dwTMXPcP42CA3G1zVoxk8YANHG7vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32msPjE2XQQADVZMM7TwSPB3XmzwsErvann32iL7bSh5WeASNwHPw31HGDr7MfG6PQJVZTiychYgbBcAeBVUqG3x",
  "key1": "3eQuJczfPyJJMMb8LeAaKJvoPUVtGStn2mGJ5JdVhyLFPcidunZungdPwsjWqrnDPeYjYUVFwCdAekv1A1n7wiCA",
  "key2": "jac41iq77pHc7MQjkzzntyzSFVVnSws6SJ4GmhbH756WysJ6SP4XFZYHdhfCQZwMs2YgJHrs414WPjKsJTdpub6",
  "key3": "tyGjnYXWzHp8jRobHJZFvQpYqoLsLFsqWi6DjvgATvk782PDxXg9ePbi9aUQFYGKu9JG6VSrff2wALR7uTL6JYC",
  "key4": "2pRVRZx6NHFT45Bwj46cuAdMLmEQcYD1DKywepgyv8ipuUsSdCBjd7MXciwYRoNDXstd4XuwieNyj2JRi5B8mrnQ",
  "key5": "4W1X1k5ioqAyxt9AuxL2oBuUy27DLV93ujJaGZKG4FjZqrHMrDXheT5Ju9BpJduT9qnHQWvAzcGuUUzsZ3PN27KK",
  "key6": "5n6f6Dgphysj9db6kCWyCyhVcQZZueA3CX3TYaVAD8bFR9Rj4wCd51MNYMAeWQMZpL3VXAzEiB4GNPZQyx9WGov",
  "key7": "29H32kpJM1fhf7uNAADiJygUbXbzufwy5CH3vXQihLDJrYyenpVYW8gSkDjmcuKn1brrRFFsSiiRfeTY9nLAvZ7Q",
  "key8": "5TsvufYVHo7bn3wmB7UcoUJsWKABRLJfH49wJzvFWpF87PUhno2jZe8Yj9iFdUaJQEwdbBYAcUNTvNBYZWAGGqCL",
  "key9": "Z1azV7Gqrfyh1eERtG1p1jvFMj2PjazMH5WR2tbPdhbt2sBeZGxEjZbfazM62443cNYcqu8rFZZ9V2PLj55Q2g5",
  "key10": "5VJp7RepVFB3xV3SZr19EY5i9m4VN6i2js9jvJXZaTYum37nfiGuimNxixP5HCbDtJqZKGq5nVz1o7TjV9Jr5hZN",
  "key11": "dWE42KfVQcYx4Ri51aUJrx7qaTfzczLier6bcoaEezm4RtBSnNpsdbkmKHaXWrRXXyKs6v7o8DbStX63zG1gqHu",
  "key12": "5U6GN6riYkKYs4N4paj2k63CdMPSwJhUL1mwoKGRZLhwyiDLpWBQ1tz1QPa3UnTNYdYudKKXJg3pRQrR7kyE274N",
  "key13": "2sKgCR8LhSNYCCCVBoV6KUfJ8BK4oF8GwLhtGhUBpThKA2LfGeyAJTQqXpZFX8FzoEx5SQ6XAcqDuFpophzybhdS",
  "key14": "4MFVboMmTh94LRhaPXnMghBWYUEUMsuw57Nzzq99tYvBCGr98Cr85rPFwyWtWVuzpnC9WBTnhggm4ZJ3S5aSvAnM",
  "key15": "3YUgFWk8Gnn6FrdFRmooH64SyLZBKXm3qwvuLvmWoDEuEiPevMX7sMtjQMuBm8K8cZ5yGYrHtJDT9tEj6g4CnoN4",
  "key16": "47MdXBVGH1pMnf6JX6RXbjofqE85SoyhPMJXtnNpoDkvSJd4X1ayBjHKFboKqReyj262Leg8yjqKL8BqQ8BfDiMp",
  "key17": "4zXmQhwDiP3qZHaBMHTa4qDgsfrtW9JW5zLevykYhLgfDjuoYyn7hguYo2b7PDHWZMABZACJewNE5zKx2FW1eSM6",
  "key18": "5RoDDyhKw6aptymkMKMfUGfQWLSz58qsussDm32oFtninTKNgfM1g5vxEkkgjGWebd6ztedgBfNN7ngadxEp5gdL",
  "key19": "1pHWZn9tdAgszRpRb2928zM5YkYyHAtYAjbjfwRpogKRgfv93dAutZzQCqyAnpeLhYNmsYvgVLjWXMU4CohELyK",
  "key20": "zW4MqjXeDzbxVVYBQCVHqhECvGtKodgQ3dSQYTF3sT5r9q5yrnStXBXyh9srmLebKg7M1Xbg7Mu6wNkcGdnoNpQ",
  "key21": "xp7AoAGzSuF9SP7wj1hSh2aex2N9p8rM6DHmKqzN7RWg7oDQUhn7pDKPmbrYQgujrXNXrVfZsHrg5t77NiokC1U",
  "key22": "5xJ8AGqwf7KEdMkSBpnSVvfxNbKgLZXinLhLMrnutDsqzJaSFBNPn6Wof5nhduv73j5DV7KUTRkGahsCgtLEQqWT",
  "key23": "2huGGBUNqREuVfdwQHv4hc4ziDWqFNf59FQEG6toKEuacFDk7oVFuLcUfxQbZ2AUjE2NDpTg6EExnRP3zKZ3Rz7J",
  "key24": "37DTuzuJFT4uNx1XCN2Ev89au5kiCpMeah6GPy1KCHQvSCbne7AhYJFBqsA8JFsadRnLuDpLL7mms3bPRUd7jMnx",
  "key25": "2r1Qms4mFKQifDHzZ9Q7sngeQtgjLmXXqkkn2DzCPTjG9EeYVFqyY4XM9DwSnjYYdDdMPi2kq5k5THHoeMGusExQ"
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
