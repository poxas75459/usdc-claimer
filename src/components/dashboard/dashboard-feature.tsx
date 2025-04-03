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
    "H9xdknk8LfxDtKaFF5hQg29jKvzwYzyggAeW7EbN8XKAWMzq6UGJkGNuGz9LYx3vrRHtrh12hB26FbyuiyUsjkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnE9S8jTWfcYB88uMheQQnca1ihjA4cWpVuQVfwtjWTfs7WRrZXP8MzjzznTu6nHZ2cSc1X9T9fyEeCGvDUC5Zh",
  "key1": "2ocQfLtV9zZQWUXjeVhBT8BhAQvEH2mzmW7V8yLbMdmC6rwaFuHHk47Y85ZWE9qZtkqcVuCbY9yD7EjxoUWY9qJS",
  "key2": "2zCmiA7dHwajfdmJsTvUYQRWT1TuXRvLUg64eLynz9b79LYY9ZZxQXhE22rYVYUb4GQkCzJexPQK2mwCvyaEihWk",
  "key3": "52zv4Z8VAmfxGeCT5LRkzp5C9PNge8jtBNYgJUdjF9girGSgfLUpJPBaswPawqrdyaaWQ4ojT53HAKrj6ZjEjcrK",
  "key4": "4H9gFukVP65fVHk6CVibFiRCfruRV943PDn5A7nYRuhvWiGWJmecxpQAP3ekEbyjsrnDq7Z5QuBuokqiU22qyaFG",
  "key5": "67Zvjkhvp95s9qrtUDxYNMFsrxYdtGHEvEgmBtn3zyAduPzJCkmdY7BeuAHjumfK4PH5a26Ks8kjUYVMVN2aqTH9",
  "key6": "51ZC2MfxtjBroLfc8UU1AamAMZSnjy6mv5SSwVMv7LgsZMyJ9xRgAwVbz9tidhzDYdutva2fCK7s5pWJoBf6CWWK",
  "key7": "3g5N7MRLUcuCirrcCwRnxqmfTWisCdxc624ADiZCXKyy2ZsTnksjCnkZXc4yBKR1Jb8VmhNQ2KXnyptG7RcA4w7A",
  "key8": "4yUCSVvBf1x9aXypbtVF1fCoox1V6q41jmdGRCLyCFg2S7y7gCtrVMcKiE4dNT3yVtTEsgCh7vgsdWWUPLjgki5N",
  "key9": "4ATYdaP1fSL59sqFeg1xS2sVWsV7FMs3yKANVixA9yFxgBQVQnQ4TD9V15WRDVh9gvyvdvVBCtkSNFKwUCsAPnL9",
  "key10": "3BLRVgoLxqYBcf7HSEDGTwYGNowQpBuiH5ShTLGhAWqkn58gFCDesDq1t5zWFZmWcbSeTD6KybG5HXYBE4yyAQce",
  "key11": "23FT8qEeQMdESrJ5Pw519C4cTYBfRC2xwQcQsTvM9JLLzeSXjMcAhVv4oPfKsCGihY89G5uvrEH81UkbK8dKzfuV",
  "key12": "SXQ3jmFHLtzUYgwuia1RV5y6aYPitWe3mXASqLzB8Pey8mvwG6bMHqpc1W2XeCuA4FYG7faRKfk83XHyyhwGM98",
  "key13": "5Ntzb4Cmz83KqdFDAnc4jhgstSThj7iFYZowTjrsJCHM5D8rvKBP45mwvTPjtvqcXDCzNamZ8txT4TNEwaGHhRbL",
  "key14": "5L7t6azjnx1rYmBJKWiSDobLQDWN5xiwoCW7WG1YD9BZFdHGYigTHeLFcdBgZxVFePro8XgwLuTGvKMa7Gyj3CKp",
  "key15": "3pTedjNokbLxDyB6m7Enu4yEDf73YMMThVRBgPjr1FxCF5X2yNBjYcfhMvMb95GdKjYohomUqUConFaPqMrJDhgg",
  "key16": "4w5YZLvHYxXzECVc1LvhoZHrB7bWFw8tfBaa9vqzALsGtCnwMxCK4jwj71uH8iRQ8n4Ca2FmR2Wenb2HNpb7DELP",
  "key17": "26DqcV6eDAK9ZnVzfWP2FrwZ9ffpGeqaUpE5f6jD7Xa4k8CkqhYr75ADopq8HyUirocFSRo2VawUENTkrPRFYehq",
  "key18": "3n4aztabdubd5ktKYZ6NeMi4kJVJY7vdz8HnMwKXRokgykyEEkxHp9nyy5Wa7MitVh9sDmD7gUMFhbZiJvdLtR61",
  "key19": "5wLJxiVELE6wWgSRCeC7rkXYacwuTHGmbYSoEHd6ZLSCfurBffZ35neJd6BRuEBzNQzkQtNGt3cVrLTiWDhKYNpC",
  "key20": "Th8TTm2RAbG4XS4L2y5PMs55nyeXtjpV3QjMLdAJK7BVEpuZB9cFFzfeb7hPrZQYcPoZDTTjDkNktC1sf5LTFzk",
  "key21": "2C2SKdQ6Vsd4GEk2T2Fzan1gZa5XCTfcnYTR4A9MtgfSZSXSUk6xgLRHD7YZ2JHcEALX2t8qHTDypTBmNgPsU6JY",
  "key22": "Q5S39gpuoXkr9WERVM3vUkzN6BmbcXnz4V92276xapLyHSAHhj9QrcYCpYPwrVVXzYzmU4zNixUhLJAfvBbFWi1",
  "key23": "2xWuhQUtPtG9MzsqxMqcGRCvpJm4Y7hf5mYv43vF18cYzWf9TNw1bQtS2DGwXJ2WrizMSNpx7LdEJgZrGpsk5UAo",
  "key24": "BCkavLYXY6vKrJban4wRfejNArAB375Wv74YJoQAHpRrfUrXd2HiwEjAGvG78caFGBSBNuU1mH1CQ3pEakYQevh",
  "key25": "2FroYQ9UzVpgSTWtqnUA3VQtwD4XnBbR5JShNxC66zTDEA1fn9iu6ioH4yqKmRScp6Cb9J5RpsgufUHUhYjre5EU",
  "key26": "5xnaPiDh3HQY69macyVUSikgdnc6nYaqUvehADCYVBSce5sEJQBmfYNBbnUJ5updyj7qEUfWpnUwBi6kA1xd3Tgn",
  "key27": "2nWPbGAK5tKaM2vgnjMbNTtmbJgN6mbKrjac5js9kti9Kh3xJLu4Wg5tKMyA3e7wp6M9iagd3wQotkzRQ1ze1US2",
  "key28": "643ty66ZM7SvwjVCevNVddhBHzCUw5dzQ44ooKE3MDwW7C2XFFcpdV5DM1bA15JcuCwVraoNXdwnWnMYaU6NoMdi",
  "key29": "5CDN2PddDNavRmBevCoQ16YRtfEkW4x7g8jR8Z2LfYahpf4KtDJCPKydoZcpcQEqZnh3Vgaw5y8xEfwDX4FQcaz2",
  "key30": "2PLLzqPoRpdN9YeQbMoWfYGHF4hBTYGTk2fGSSJLH7mYG6g2qgVGgbLnYPKQQZUvtmExASPn3jAnoEbugrncJXfa",
  "key31": "2vjuJzJhEKZjxrYGNGGPeu8xycbL45HgXYqJj9H94321LijLrKMfEgPeipRWXNBPLFa2bcwKC7fEFm5jedyMvpz1",
  "key32": "31RVMonqVpwTmvoNx76ut6WLpa4WFEpmF8bppciANmWpz5YdVvyjirkEUiax8ozxCvWiFWLcyZ4hfRVrNgj4TBFf",
  "key33": "5g4F7WWsCY8zoLoVpSjzfVCwPjR8UqvkeYh3rA3aSrVpJVjcMPFEXs1HAbUCc5tXtURnY3oqAMgzdALpYd3bJnKB",
  "key34": "5jWzwjpEiwUGVShiQaJCQjPuQgNbPhJpbv5Zn4ujCzBNcTcWtpW1UP3mmBPkPsEnN3cNAZSc43cEoa4ASSLh57eq"
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
