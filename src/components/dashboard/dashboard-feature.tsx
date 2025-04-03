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
    "3UByb4cjeGNvS3FGUgoVNDxt3p5gwaQrYp7j6FR4MhMjCDarpdZ4EfQC4rJcAgxGYVPFFoy2PKEnhbToVxrh3AD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P1mMnB2PWmLi3uE9uM8rYpot8cUHi6Uysw7UVmwnYVq2EW58Kbbt6XrLLAFLyFtgdY2NcYrRRbME6i7KqUPeVKn",
  "key1": "2neG9zvsRPhLTTzPdXXjEttjMQHiHX98gQ87YkHLTZpCGDo3Tzx4Q2PymMFB43r8UTHLeFcTDXL1qcT58jRtpPe4",
  "key2": "27sFWa96pAejjCfF2iqfqUAVoatB3eJEdpp9vufjH3S8e4WJZBzwGrfyZaqknP8Ej7AQZ13eNStEVfcxNQK8pBHd",
  "key3": "zctKm8jPw972wffDHh27kezKXjRa2ZjsJYpWEtBidDLKF3GDxBWZQxugtkmgEFqX2NDNMPKpfREUz11Rknekuar",
  "key4": "5pkWP8bM8ZNj1FMdyA1siaWcESkxLSGWdz781iacAny8Dp8BaSLSsc2e9Ff2BgQH1sr4YLry1MSsoHXGjky1sHEg",
  "key5": "4VnAUSL1Bz9XtcwwLCtTUdgQ2jKshMu1rxNjomyGoFuZQkZjEywNKYn9HE1ryH3j2rtiF3Pzhc5ZCTPGqhnrK1RE",
  "key6": "4svpKEzJVobK6uDN15TPnge9yGRBYeDMmnDUK2opu3GsyhmGrhgNYuoqgWmYUHFFr2f31FUiQpQpcdbXgBooV3wQ",
  "key7": "61hK1EBWkpn1XxFc3hJePuvwGiDtoMBWhTG2jP6wrPEi8dD6MZCfEBMUEGDkPQLCSG5x2qkyaG8k4jH7jkVfpTei",
  "key8": "4n9kHdVqUSzpkWqnXaTzwW4LUfA11amF7qj9GAGQWW6kymhyHCZGeEpLDfN1vgDMibUnCAC2teXWwAPxKLBfEdSC",
  "key9": "oYNKBmbDLYm2EA39Sv6a6jfgY5EpL7KWjRCEPUhf54DLPAtF7UVsyCS6wqji5Zqyzoraok1KuX8pQmUYAbm36U1",
  "key10": "4oVTe518S2GtqdTTBomvBjGtuMzzGsUmazJ7ESZMmPSuyYtG1QV5FUhtrdLeEFYJYVEWbqdV3WEwDN22NBTpitSx",
  "key11": "4rPF1SKPpovNbiBWCdffShBuEzZeL3Vjo8ES82R7a3BB1Bxct9wc8MaxeMDXha3Qo7ggV8fc3HB1s6bZKN9VqH9K",
  "key12": "5X76qj5VdSoMr4SnpjHUMEWtZmDsmtdrXoL1g1ePGHPiPDDD7uKBNLbbb5gXmXjM2BWrRVvpZDTpstMKuqaD4reQ",
  "key13": "4uLDS1Ww9mZkKQrKB7LWEm2RTwCDPY1aHxs28Z4zUSTsxibzUtVsDt1PyJZVSy1ZpJBjFPuGSjjJhkkwWaQ9iw9p",
  "key14": "4Rt9FtrKMJfJ45wViGG11YgDmoX9rRKYw5uMit4MW2yRGDsdcVjcRA1ruwLqiJcqveYHiNCvbR3cX2xn6LFKJqTN",
  "key15": "7vyfX1Jn7nA3iLiEZfsaVqULGqoSBRBD48d6Twwoz1YW2c2v5ST8xp7otZdb5EooDieK8S8kDFyg8RYPZ8X6NKB",
  "key16": "4v2G9PnZd4yJNgAXfznT6YENupEsnUdC24sEEThkLnL73uCzRbwaP7YniBxDxUGmbz3VTXyc3UrHeLM3DxofZ9uC",
  "key17": "39t7SFApoKuHU7AoC2n6Uw62Pbk98LsiCWgLLL9KmoPziyTKShh5bZjSqeLMyUgbH8AvAmWojoZF4uvRj39MUJeZ",
  "key18": "29ywuuVZK6amAgtbxWTAxBN3w2FJzhEyk3k6mZhs8a9bHCUc2zobgX1cE8tkyemneL3LrD6N2fuAfZ7djUHP9hhv",
  "key19": "3acw8ynNzmtPCsPKqh6zPkcNbYhZsLS5ke5j3pMeS4ZpDnYAaUvg8w2ow878XT38aR9CWAJLYguy15E9RVhCxVTv",
  "key20": "uM3Di2cqY4PZgrQjUFFsy8rh53CdJi5JEYrZbKf3bbDkmbwP4TFHomPjST5rzMRoBRAr9QRx9GHZq3PNtYKtM2c",
  "key21": "T3XgcFnQSuw32vXQqDFwfjVuvSLo8WfdstVGAAKJjrqGHDVoYAmJddAXtEc5xGMGpxFP5tuDp5McfVrQMCT4Gr5",
  "key22": "3XboaMXKFTFVe4rcKH9TebZ9RD81Bzpj3WtDk6BXDR6mvJ2praHkzxkzCXGzPaLk39PUiarQw9BHrKwAfbgDupS3",
  "key23": "VLcnmBQhfLbUyofHWEsJhavUuVaCyT77xhdxYJ6Cg3ysfWYZm3N26oaYad2fc8rpVLb2bduLzE6qWcY8M9vfNsN",
  "key24": "2hdHoJNWBn8YnyLU8j6BCzZL1XQLoMrZYtNN1Z4PZjES3CB8US1NLWcSePxQn2QGs4nbNscRtLTFMwkQtYHSSi2E",
  "key25": "3tuB3iezyj9SLUa4CKiFJTcmCnSmH8vVjrcX4seumKQBKgYYknDjapai3AwnuEY17qSoShYPfKd5ram7MSwkUSSW",
  "key26": "59qET9ngJR5NQcskmQZLvy68eiwBJCGGrAcfX4UBMGDPNDZ8aAnuKUhbFvQ9AECDhxiDkJBbFin91cgmNasAEmFX",
  "key27": "KQuJ3dpe4HYy6GESQVnvbNCYHtnWTfdcyENm5MDHyD2PHS4pC8c3qnv8zNjapAVvnCxG57jD9pSjk7RpKmi71xf",
  "key28": "4cWu5y2sk5BGAxfv5c9srrQ1nw7oEXvqTZmxxrYanxprGnT54FKBkAwnRjeBZMMYtXSh2UYNf9Pdy7bDfh75YbP9",
  "key29": "5eNo62xWQooWBAs6epM1iRPoss9YeLqQ15xQA5zMG7XpwD8vyvMH7eeWocJWnMpRzYCngtGgv4EnJELfy5qnp6ho",
  "key30": "2TM72jZrgvGVnu8EXhmqYnri7fjNXxX1vaPs6imW2cwfaFJPvYex8wygggerRJJD4CfRb6MkX6YaL14MkLP77AEu",
  "key31": "3uvWCgMadPqGC9fk7b5Q6ivd82R3GXBiKWi4aeQQFhLoom3q2qAvDiUyC62wrY1pjPRw3wEAwykEiN3RDPcExsjb",
  "key32": "4RhTqfPNLvRiUfxdLNwNk8waVhUFNHFhnyzSydgR3X2XSPyo3q2SLBYtcFqxjAcoPL3bBvtSJEA1w1QmPhir9Kyh",
  "key33": "3aVc71ruMbn59YH6EpEtZbTTTAWL27FMTwshkucSspxaQxuftZNX3HvURrg5wmG7c36DWJkSsX39259vB3v5UAdU",
  "key34": "2Sx5niErY7WMj2Q1i3kSdSXHLoZpMvTo5pcoSLosVNcGtX4ixKrixRrffTDE9j5RYAzBFCTywxcq39w92bMHomNN",
  "key35": "4goLB8Ed3J8HibkjKuLRG6517rESswZd5jKzEu67TXVcBqzRxJ99JgpkW797TyegTonkQoihuSd6hz7wdyot8tp7",
  "key36": "2gvTubJHCFksKfjSz6FCQ28PbEEiUfGr56ZaUj7jLRBjASCLxqewfRJMSssnpe6EEZy4tb68jLTJNPRqNFZgEpML",
  "key37": "5Ub1wZF6fPukoAytemQYHa3Kwnwc76eQ28e5bwEhikyyJiBZ8P2xRmqCoMvCX1swVTz14MTULcwnPB6SpBnXG9nV",
  "key38": "6QLQCbUcXeXzmygsSzHic7b3JpZaf7sAeDctTsGr8Rwd6hit8noTUKUENn6XB7coPZxoDDxux8Sy8pufgdYdgUT",
  "key39": "5iuKGrkizH4QBYk1wT1fE4cSrmqB8uGNpb3sWj65wRoff8k13Y7iiYt3ZqLmJwFDMCJFdi85MKbfRG4w2QAhEa3m",
  "key40": "5ccW6QYBJCZN6GXw3qDDYhNTnjaQSjk3Nud4Nh8ywmA9WpFcEAFe9euE6yKpYCv5UbfpKdZz6wicB7qGPoKMZruy",
  "key41": "5bmcH7LABVmacEtXq3iadTjdrbuayXGKGTd3h3CVPrJxAuYKn272rYwMtZLRcRU238wbdbjAzkQXkogJoMochd4u"
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
