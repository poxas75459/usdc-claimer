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
    "47mPHVzSayDBR7VjbVZxWKni54pocXHGFYMM1uobxndTh4MJPnXfB9MkHTSERLFSKTXunmL3Q62jRxrrzoUCKRMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YyNNxBgW2ww3fX3sbrmDY8pvVtJjxdw64ZS5jJdfyJAUu2aaNn9fw5SUo8ZbB5wzo3cyXFDJdsdyTsbkg1EhNjh",
  "key1": "3hUHXjfjuc6Lod9DDjJxQJE75rRBYNKqssjvta183W5FU53fYApvSaExnUZnvou9ytfS4KpNfQJRwaBB8pb7Ey4b",
  "key2": "2dK9Tk9X29cccYJS7fRU6SFziCg778yH9MuSVoYaUXPcHcj6ptsGMXcZC3141CsEwE5pKcAGuiWvVuSixLEqVBMx",
  "key3": "3nEqRhLpwu26yzBfa67cNV7rHmUwDnSTxDPQsVF1YxKFnVVBywmrwA7J7MdiJFFcFVrwR58Pju8SUqrjaZzD1jft",
  "key4": "38FHVQyCundSrdrJYY4Nn9vbL1TAzo1rc1Ebv3pwRw7KXdXdok1LsmjjTaKRSZ3J9v36KqC8BhZneMJLs58Dv4Jb",
  "key5": "4v2RTjhRFsPg8sdX7y5SYaDRreVUZLhyzZZ8jZ2G7Xdp86DY21zFTqixhEGCmcUnxvHvogzCsW5g9M41yEZ1rm58",
  "key6": "3Xrh1SLVRyyRRRenK2WavCxcXBQE6yVARX3vUb1DPfFnfEqS3YFe6wPg36C5uKC6ctzfgYBdApsZw2TaGp9HwbKh",
  "key7": "xpTij7KMsHQw1j3c2YT1GeCJNRnDHKTE352VUFGMHKscR3YkTEXP6jb3BabyN5akfM1U3atV1xSnoP2Te8MwmKr",
  "key8": "2wFhsnB9byNhVBMYtUQXVx6LC3Zt4VouJ2VXKPXgRFjQ4WgawYLwv3faPemNMrKirdZ1V3bGi9wqGhzpP9AKRWrA",
  "key9": "2vafZFcfV1p1bXNY2bbc9ZYEmXHCY8DGnJimYejkX2nrdSwYtfYFpqCxLT6sjU2TdE1Rd64Figb92KnvSmXJ5aBt",
  "key10": "4EzuSDs9ZcHKRsV2hYUgmXH6xDMQRcyo6dcSEYpe9odzK2WppfmudbHbUHMm5FzBoJTPgNj8RJWmGE8BnEjhR1VP",
  "key11": "2o2iV4fTUGJFYfDoC7scwBQnsbTkx4Q2kvWmahVbvPXgT169gRYQC7mdprFyEdV46ouR6AMCXNoSZCqpx7q8dty8",
  "key12": "37b8GVt9frQPpk7S8qD9eoHDREXAPkgpjmU8erytXYkc2DaoDrvud6kFVdkVkhXvkdKuznhoqTpiiSRYy6BEHMXn",
  "key13": "RQKBTsiVxmnZYC4EbwinVon52f4QBWvhAS72C9UD1ibpPFFvdeBN32cvDpHzVPHrJMhv4x3Y1ikC6n4ooHRZ7Zm",
  "key14": "2LkgkzLASx8ArByzrSeSDGgywUn8URJe1SrNKiHKi368a13ZLzWdjWDDii1Qqhc46LZ4m7PemNJUSPwRhVTHmkeo",
  "key15": "5oLBfKpnUnWuwxcL7Ghs7HYTuitRn11p17ZEXpD7q3G1UYiawLed9kWKuA4KRxGuwNvUmwgvUyyDfLzA34d4ULk6",
  "key16": "3iGz4u7cBtA2RJL3W4fHrg2oRuoiBkgAMWz5HKFHpHYk6zVfNExwwAKCdCineXHrLBGQjNr1t1pEFm8RhxdH9hCe",
  "key17": "rTErdP6FahC494CAqm4BCk2Ncitn3e6zXNk3o6hsHh62uH9Qqhp3SxPFZF8MVraygWmeQTTxdaoVRNQxM6XXd9d",
  "key18": "2EdbxC533rfLo73zTGPH1XwGMuWfBVVLNTagwPwXdZx3xihURnXV2DvfC3v7VQEGCFtke7RtDE458iCzs5vLZCPY",
  "key19": "qqBurLaqDHrYkjGK5gFcX4DKzjFgfMFhtnFFavgpwQ6NEnCe8vRW1pwcmSb61EpaTDpF9A1VCqY38BYpTAXXB3C",
  "key20": "2J23m38WRZPW3ywHAjBroRbe5q9C1rxXAxCYzh3vbSAumd3SB6ZRgMKbUZrnVtLL2oz3B7qAMMCK1izuiiHXzb7C",
  "key21": "F59uQ6ziUbRLszU8Aa9MCBL5kqKuk7jNMxjEPVwVVKgKJEpYkcWTWNdiMgpJmUBMgLW9U4mRtbKsZ6EkEX6Hubz",
  "key22": "5REwHJrmVe7NsFcvBGVTsC1qFGa2wjrC18WfYhMd9QVVbrVq2xWj3zeFNjxCkw2uGjEr3NqQEri2xRqa75uithwT",
  "key23": "4Kt9Y94T77wpjttytQSkDan6sZniYWjbQMPjC2FRzizm27yZehi4goYufNmwLczkxXkADBYSjyf7ffANYALku85V",
  "key24": "4aJzduBhdvajKwVnSwqdAGDbYx8978eQevs98UqN7uoingqJZF3qdyUBUuU1fiRoJdvsVSx9FKaSZG5yj9akhW22",
  "key25": "4LbGBNnJwouLCQWrxxZx2Nehd34ehvp7jAmcRN85nQHgPJYvnN6o17J1QNYRAk2ycW3QqvTeGxveDyGeG3J1RQMh",
  "key26": "53cQgGbomVBKaM3SuY6WQqkC7U4biFp7NMBmsiizTzrYNuZr34ZiNQnGc6r7MtLyWKmcGtQUisqTf4gk1HstdtBW",
  "key27": "2QZGCbP28DFTrR5n2R2Cchf716qyZHSxD9RyCtcxYo9RgP1xBtszMUu38kpDzVeZzYXWGnSCPAeZZNmbrj7uhMpV",
  "key28": "yNhwMfwWUYfUVEPCxbfLKJEqFspVfcXZJK1DrGeFiYZozFH25KdXEsLooa8RZJJ3ttRTrMW2cekMVXBknseCApp"
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
