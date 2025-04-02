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
    "S1h1qARsFWhN6QWqS6VHtg4b5QfpzoKoiGVTsWJTnzpeTYkzJSVJTxdkg2DCP6H9APPyLc3VMTCirmKusoFUasJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3xgqoRFnhddgxxo6Fixst8a3hSMZQW3dCZKLTfmf6NvTept5drr6DW5p1mqFY7BkRRnLGBGED86W9z3PRprChx",
  "key1": "32aaS9nQKqC4G3ALo5P8EYmyjFPgjMuC4GaYwh1tNaNFrqLhxHFLKNT6fBgJTkuAJCXkAywY15eG7mEBQfgEbAqA",
  "key2": "3Q13NHKpG8iea9Y566mkCa9ynrES3xqfhMybbt5UitYocmvWQcGE7tuWP3RpfPCfkX4FtNTfKmbzmdGhVHWbjpZR",
  "key3": "2fSAyLkzi3jm7P7msomXRqDpFSgqYsDkqzwSSxyWJ2X1CvHtqGPGVCHYspJm9j55QxQUhf2KeLroQ8orJxgp1QiU",
  "key4": "2aNLocRjLH2Y6VcskTqAbfsFM6v1ibsMbZSjrNqkHoVuz1og6KXmmYxzYs29YisJo7YzSVsnPP48Yfty6tAtw5mw",
  "key5": "2jTJVK79WDkVqj78Jjxvwa1yF7wK6hJftWQGGGZAarVcGdMPkffi6JGYRpmj6u2iyV8c46P1Me7FNgKFAEjG614R",
  "key6": "2qu5CBwbxZ9qCNyEDwwM6YGfF2J8ZJmWuXyFA9Zwuj97RFnVQDHqDqqLjLoGd8CYE7uVazYraMwc1gFfqJuBup8M",
  "key7": "557TBZNBBDLPHorcHxnjjrV7tmKW7rc9d6U7FzWU73oLyEuh6DZHMrCGuPja1Ycv8YGJuR5y2NCtWtfjCe9aLU7E",
  "key8": "42QRj4gd5W7b2HqHFp8oumiJCZh61kjGceKH5ATMLoMudCT46wgBAgPYyCTawpVehi2LKbDP4uZEUQcXveh5ebxR",
  "key9": "33tSgM61C7nkH9AsuQ1Mjh6rJWwFeowDh7XRvZnXVwXiJCu8GaCutL7rXnEKgdDeCuDY4bw2gd8FonGCM9dAW3GH",
  "key10": "3uWaLPnAKJesTQQWeSGSfWc9EFTd3Bj6wPe4MXQoWk9bJKPmFFjmnPBRBoXravyLVdw2u2iRhcS3LwZnqy17LHeg",
  "key11": "5BapHSUwsM5sFgQNnHB44metw45u9EqTQSUHaMDQAoQjQFTMHsnhHSFRRGFLwcD1KU8Z5ibmGMJGv4HRqRd8Tfky",
  "key12": "65fQvZDh2dyvY9PFdMfJdgdZg1jciQJxVVQRLRap7VYydRTR9HwSJKkgxFEdWTwWnywXBRvSDyUsKB4LCQKKzMGY",
  "key13": "42s2xWNb5XwmGZ8XFeWLpor8JJCQ9rXVNrSc24rzSDLiSPYhEYM2NQeajgkGEhDGZoErrX7VZxWQ4KtLGzLJn4w7",
  "key14": "37Y4s7ZrPbKZgRgtfVr7qLGVmC6MMYJiYV7LYTDejAyWiJuop5utQs45ZETmmtkh8TADBSiteDpofuVz2S6u9WzK",
  "key15": "2mgMDqkEWMW2oh4ChVRwjM9uDw6bxWXwSRbkPoHE8uZhU54Y2WWXe6TAyB64Nrk6NhpSVeqPxFUPBGijU8jQpxxG",
  "key16": "T3daWfAWG7MZVJrZpJSjURxUsKV1TiQ74evAUbw9eZs55cJuMo1zN5uFDqoVYafbubG9dn67rcWKmD1YHPpzA3P",
  "key17": "2WEZ6TMUd1GwMJ5QZZu6qUBruEtykAjNGyE68JuFs8W3RqaGRR9nr1RDGnk8keJoMmZrmsyXfUVTZaBvRJsS3QFF",
  "key18": "4nWvEEgDmhrr4EyEgtxvX7nMXPcVnRnJv4nwZPwMGkyt6nMZoTXwpVQ6mLbfMSTPioBrT3jkZURKWU3ta6Aq6srH",
  "key19": "4g2VxVwpiDETHATUDMhhHMNVS16fBNJxATTPGbhN7TWAqzwCoBrVDpNh9zmkcYyBAAR6x1TcDit9zvpra4Q6dR5w",
  "key20": "3PRdSsTzoTsZSJigg13CkneLJGAFms5wcm2BtTxpSqXcHe3reWpQjd2UCDBUj7eC9qd664kV5PDq8DGWtQbBg9Zx",
  "key21": "61jTfWtTLQKFnFDiNeHRCpbonDc8VJDVKQQ2Pqzp2GuyckAGer8p62sNfNXi3XERhMz2y8tacxEJrmLYBHewFKRU",
  "key22": "2cCdPxvT4VUMnnB1s4oPBfN8JYUQoPAnB3tNKJgyaZhRQQ4KpU65P7qucGckMwXyJVcbS9ryW6Py7KFsYCkrHoHt",
  "key23": "HuW12M1Lw3Qh6wthgPacGjKxSH6FVbd2zC3YiTD2YaZ7KQJ3KwMCjzBExo2NEivu3fPef9oiiN1aTxbjMjebwmg",
  "key24": "5Kbv2Pqe8SBTBMVHtcoLzjq1EEzKGrtChmegXRU4DinayoUA2ph1irg5zs3BNtEUjSwsnPpVVfCnJkjPXSszrPy4",
  "key25": "nq4wdLhy4UpamZJFm6K9TGxvm9Rzf1FRjHtfeBK77C7vii6UungSbqAjWHWT9nnbuEjqKTuQ4yVa2xbqUY6LARS",
  "key26": "3VWp1Ti26eErwR1NQTBMiXtwhoqm4m14PzjZkLhG6v4j7E7XnwpXCa79afsD1xGMHtdtBH9oGN3WEHvhxhQeuYWB",
  "key27": "drCV1q3zYgM8FX2G2DQagW3jc2J98BiwPWPPXUsCHsSynFCwBQDoegYBcPaohXmYrFKU2maE24oWG4j5ZsJ9sjQ",
  "key28": "3pJfLGX2WjCNWvdxUaz8fBSgWjstG6v79fZkUVYj7rpzWSrnXGfFwXaSLGs3hqQ6Q9kqysyDK5idfEb5nmFSK18o",
  "key29": "51eu8Luw8777ez9g5mfXPLgk5xWKSkHWuizYyvDVH19cwU76vo26NaRQhyqisX2AkL42H3Aeo1ghv2WQzXG3RAFK",
  "key30": "4vzeTEUYrcMyMNxCkBWFnFdgcSUHyp1sFBRqtK18Y9QCpqdqsf4SfAobsB4D9W8N9LdKiwweHH7ykDDiwRQkuUKD",
  "key31": "2AzRRMcNWoKKx7sPUQNyJLmMTGCgtDXaa3GQLcWqbRzcZkS8fPCfZKkbNpLPkBk8YiaUvTYhWSVhoLrq3uPMv6zu",
  "key32": "5Az73CE21R7ERL62PoMx5kZc1qmNTGYTC1afhzt38DK6hYSm7oig6Z3ARCQBh94Jehro7u95BPWwwWbi9UGUYYpQ",
  "key33": "44uJc5QPDrDZ8rp7VY4nW3Xm26Nu74KmgxdH3W6SxKtpXs4UaSaFdjTGD9JFhWExT2yntNxndrGshtq5MddbJLeU",
  "key34": "3MAGWDTf6vLbMd71qEpnZw4caQBqjsL7KZEGJSefuGVD4dksSYM3qyhdnh8WdjbnrTM7i39zJH9mLBUhtfNyVrbR"
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
