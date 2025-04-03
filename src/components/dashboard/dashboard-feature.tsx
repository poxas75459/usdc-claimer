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
    "NKLa1C7Faa4bDLmKhrpS6wj364vDw1od2bECy5hvdfCDBPV7WDFLf9FtL1Pn3g4P6DnW19r5DUFr4pZiFfnMG89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HyJhcVdwY5s9gLUVkcwn68uhaNhFrURwWeY4Qq4ieYHSi3UshytATZJVFmk1mc5HqMScKxduh8z5SJiDxtRCRe",
  "key1": "3S7htimkeKxP3XCksEmDP9nYpBXerzMXJXntn76x5y2hLkjE7TRtKYRqTf1u2i2UaCuFE8npoNYoa7pJWsqhwXVJ",
  "key2": "3YJrri7sEVsVwyvzPBNRcNcWcXrjeRYFNP3BarbBGBYCPmCiHGNvQ8PPFE11VgLaPZZAKPGoaHuPmjWsRPL5BbSo",
  "key3": "5GJMRNC2F8UDScApsQQRFQLTWBGbYC5paK9C8CuuRiLGEZ3ozxeDRt6cVQPEF7MKKMWfksxexDFAoNjAUEGbijwW",
  "key4": "DFeXJ7fkPRh8BHKdNJ3hFUD8VyC3AE68ngRTc3KnCrtcHjduxJdYSFwVJo2PST5JWKJcMjktf4UPT3Pm3PUfNNa",
  "key5": "34CNxvT2LjKxWXrRH6Q9HA18VjNpZwv8DcgvUYPHDvzNGdtHxvWNqEkNZ9BEMZUVResHvNPMrv8NKUva19umU8DW",
  "key6": "5oVHKyyrRg9Kjo2JJcayH6pVN691gDbFUf2sAwLeVNqQVPCGCK7iVVuKSYUasYkbjoxEBnb8ytc8WX9e9TWEazjK",
  "key7": "23NJ7dcPFGtC3C8BrqEX1C1kNKTpA2ChC5GYebu2Pb5djukJKL3FDNei57javopLo7dd4iuuFwQmtRKT1cyJnSxd",
  "key8": "242JGgAfzrYFR4zYWBczmsp5we8r3fEeGL94ueEhhoNafNpFAWJC3nJa74YXNM8SXaYkQDCRd4uWLFQ6WDLJ1kzb",
  "key9": "46wWiaKAaaeWLihe5f1oN5He9UAJJdG4uxWqMPYq9LMfDsvamTEv3Lyv8xisCG21WasFURgamb73woJX5Bg5aSmr",
  "key10": "5D9S6mezTK6DqFGchD6ZvXuaWd4ZPm94koDd3JdPj8m9kx85UdJ6bPVvMkX6DhfyfuVtwSkcsjfrQYQ8bUsF35LQ",
  "key11": "63YobWoVqFTZ9GNCMpMCnWiKdtZaXhxLAKvs1U9XHb1t32EWYTixWFbt5W1qLgNA1dfsN51XdDY368VTMSY6mUQ2",
  "key12": "z2XqaKZLWn2wo7yiVKmbQQoBcVAFJkuvyNMgZS4mh46NaxH51woceB1uibyXtGknCGBrbYdsfixpF6mfwKd3qsC",
  "key13": "YVUSYASP5RzABHzguQ4kz2PNQLGCJeRuYm997LQzD7TbmRmQ5k89w8sDUwLUj1DvPceYWsWB5kJmzzZViXNFUtv",
  "key14": "2z65L8Jpj4BADiaLyWikVEnLReBYcgR5YedT6vZ1AraqwPZgcUwGqRzEPgMzSNbWDaQBjDugaSdJP4UF6n8dpUaD",
  "key15": "KQZ57cZN8nMyLp1gk2TWaLe3LgpKnz2mY2zKcJFFFhYNwvq4SY4xhyKQSGbFQWPrgrsBqdPcuwYJTs5t1LXACqt",
  "key16": "33631ykhXNdjDnn4fEbLud3eEQeUc8fxny5vYrM5DerKXJA5HddFkiTi9tFTnXZbUm2Y1prUizAD7CHST5Gq7pZ",
  "key17": "59mRmr6MH1Hjyg44vFbUQfW61V3V1mj7Xsdc4TgxesPYut42uo3ZQinb7yGEUD8uC82JYVm9WxskWWHQV53fNgXt",
  "key18": "2hMt2nLmfBorq4DoaLtyXprEUMdPye1Utxb1Z9acRJfYufCrEfVD8HHywpt5PFPFqtFLCs25nYDhaEC6mTst7C1D",
  "key19": "285TSu5E4NGeyj1Bg3AyBCh5nHoNkfhwH6iPHE4CktWsPUHxoXCosNtHAPicPp463v5YPtkPVYQTU6SnUpMKrtwZ",
  "key20": "273n9JAZHYpw25E7wau8pGXVj2SJLfnUfuiR36r6xsYH5gdvmaVZE5TcZPXa1TLyxkvMhmi4LwHqm5oTRrLPCYzt",
  "key21": "2ijj6A7ffQpo6tdFLHuPG929txRsm7m3pXeU9GzCmqxNvnhVg7cj3Akwvb5hS3Nfr14Fvvy2v1u8q2W2gKKu9tRA",
  "key22": "vJu86rQ7SWNWTAF5ZtAmgB46dwLGHiwzdKwdA4uvgnmt8kyrGr8hZzHVfWttuKv7jV6cnqe2GwkN1Fovqd1FsC1",
  "key23": "4htuk3v2qdbed65qNtuspoTnZRxE4dFBafCiEoLREQairGBwQp8v3or4BTUFWsRKSaktKxG1iozCXsbLciWcRXhD",
  "key24": "e7Yz2fqbiWHhtRxMbjhAj4mqFdLTJDknnLxP3GpmbkxwvELT1oZ8NhdQVMhqePDGRCaByiwCQncCBHuX5hhwgeu",
  "key25": "DPYmStMFLnm52sZ2GxGRwHKL1iG6M16XkPtLSFvEaiHYLjZo43ZyM3awDvp3ar3ss1nBdPmPubGvRhcXPGNLuJy"
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
