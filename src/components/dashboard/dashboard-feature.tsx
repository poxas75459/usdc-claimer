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
    "44nUdc1p9KyRB7mo2NUn626vN7DewTA76N4xH1wHnz16ig8ri7EX2F88nQ1vmjAJbvGRFnz3DcZPKQLW2t7wm1Pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FWCCs8kFmcaz1Rmg4Kinz8yrdsF78AHtKQpEpynbcRtuWdhj8XBksD5H7Gy7C6khqFeXmt7AybGk8jfnoFyzb8V",
  "key1": "4TCf9yuTQfHbCdhfYVXn8ZqiHLaZ2qoGgfHYWzGeHTd7tKZiRQ4icaXodGQqC1T13zuqmCRzSF3cdtYjEeRxkuhr",
  "key2": "437w358onfcnMPFUjozeddUkMRTgmRS12i3CaHaPpv69kMz8MBHUofWWnHvB9L6yPqNCbdrAVDpT4TQ68xZkRqPL",
  "key3": "NNoDnAr8XLTitNfLyhVk2FewEcw4tCSmYuJ4ijJibYFKDot6m5TZVbNGijg9ckkmM7imGc37fRebbBQmTuJaz19",
  "key4": "676iSroVkNYbxYLHHkRAamd5nk9UhGFi9dwPD9uuq2875t84uK3gXvTxQ4GFv8oKDAwucAhzLWWmb92yU9Nwzz3i",
  "key5": "5ywKLNKXRDKTPfZm4thzgkU47FRFfRsT5ygnwNqVCSq5D9g2X6TH8K398sMkkQorMVoxcsrfAbB24K6gUePhg6PP",
  "key6": "QRYRVpgxXC1KSQT7rqHVLfCTAEm9pZj5MMgnBLB6xcFoGFAxGKTqaXkwFNVwiVu2ZB4C3R49FPyjcsstoS2q2F3",
  "key7": "2dK8w6uhKzyc5LyBYJtPCPuCb9pHyrjUUXUByZwpCvKfBWfS776jUGHDvZymFue4ZX9Lpbpb529F6gCitGRmowD3",
  "key8": "6nvVMfqKSSFSZ31Y5pi6puZEyrNsqTCEBE4J6SeMtMVs6dfvfDdpcQPd1i2SFGTwNbQ4KsJKum7i1Jm9rWUCQ7W",
  "key9": "3vZv8CD2dUMWBkvNbvXJ1P4T3YuY3fxkCx4hZsDkD28XDk6HVo7tEMz82xMRoctVRW8HG75fwKB1UCSP2jsPxYWz",
  "key10": "4318syKppW9KupEBxsLhkSiJADtEHEpVayRGajqtVcutNaTNRQhSp921zV4RUssiDvJZEUaG1qV6tzd91hS1rECv",
  "key11": "5ZYyYNTNqNWKLAg39qiAnqFhfvQGHrE32bFZn5Z4YyBxpYcE8ZXn6Q4NPdWchujKk4HirPz268LDQDGjZQpq2yQv",
  "key12": "9yNrUwRXgb4oHLPN8uQxfrgP1yVRnXPQ19aHa8Qi3KfCFzGKXLxfw4b3nWjKwcauisi6799uQ9Q98TNeZJ4msi8",
  "key13": "5g8EX4w952uXyJGBvDz1n3otG64QbtjiuJ2TNMtHBXR1GzzTN2pbb37VFWvn2y8JPWeSZBsA7DHv4XSpcXGbSNbo",
  "key14": "T1N4UiBesW17Qe7cyDm6dktWSEDMssYcxoniLdxxUcw4Kt7K4yg2dbZ7thQDZbHMDnKpdhzcxeisBi7FZ7qfc8B",
  "key15": "38fdMCYQvbTnEbAPhG3LFnnGe2hHsBWA3Y9kQtrobLmQqGK1Zo3nKNjaEvB7cLBuYWUJvsJZw3cgFYtJxgXsT5YQ",
  "key16": "4hMovoXY5AwQT6QBb5EPHFtV5AoSQxBh6eNFK72UeecSeHeZUGpzSJxEPSE1rgj5Aqv6TmqfWWFWgJD5xJXxdWam",
  "key17": "3dX3KXH4RgmEiG7yRkhcqBh3JXEFKZHqxdXNTBUWMi3e1DrTJ5UQMueofSq6AxzrtBab1EDxr4ds67kSGGdiMomo",
  "key18": "497WKNJSgahszQREh8ABHWhqCmh5yvWwp9L4SgMzkoGxQbqZFjj9xVtzsoME9dvJZJJNvyjQowAnVAtZRXShNVR3",
  "key19": "EKyv7fgg8hPsn8FZtWaSjAZvdrAwAfBG2QQEf5aEBhp11XCxi66zX9immuNKtf7Y2FLksD9RBJXPFWmBwnDG53p",
  "key20": "3nrYCGJSrmbdVs1qKmLxXwpVnTnKWPH5UF2rkLmqwdQofVzW118qywY7991exrZbU5ZtXVdLSsyUni9qVyXaRfrw",
  "key21": "Pv7gdpuSr2PgL3i53Acz5kUht4PeSFjMMaXw3VpS1UQpsJWyJMuBvrA1Uc9c4LsfxEKnyZxjr7hAUtwPp4kyY7U",
  "key22": "55VVRnwdnHWURSWia5NAqtyxbaGFUao532Y11YmJsMTyT6aVd3jhnPgwCBKd6J5eVyT5WX2qawF2u6WDM5fENpV7",
  "key23": "81EdcPLxTrgSpMGMz2ED8Prwfpr9JpXEZQZe7koVHMGwANcGvHXitRiUo7TrynUxvSLLjmTHw6BnostCRUyocB5",
  "key24": "2HdcQ5iANms4rywEwDhMJt6FDDjaG4XTWy9kqjbSm5jJVHqBi17KskqEDyk6jSVPbFqnN5dMUiANFbcv8WC1p14V"
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
