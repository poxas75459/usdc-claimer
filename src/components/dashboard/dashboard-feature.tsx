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
    "4TdJmqAFtUW8ibtWtZZ3y8h4eqXDZSEcAWLx6WJL8iJYraoVX9xffGeLpM3D2bxAg6gib7ToWAneGQp7D4cRHJ83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VQeQyBv74NDosE6ahJ791cjJqYdTE3s9g8ySMe7wYTNk5G8hYVpYXxXAsRts1ZM8EC358Sgubf9xqbEvswWtZjj",
  "key1": "2UUkA3VndVV8QrwFxKateS3fMPWuXCTuxx1BPuFSdH7ckbmHjKQxRQzUqczgoJ7bmnuNaqbMkPx5kRAu2pWsJCWT",
  "key2": "4vzTeRmFnZDPrhro1Ys3DhCmhn7aai7Q22B5aJtew4RHtyZP1o4wai4THi5uNhrUwurNqCoR3eGYU6xrbWiDvAZ7",
  "key3": "3Uw3wwcXsW5Q2xzK3he1N8QYZz8R6V3rCPYoAVywGCrcy7JSUjsdAxrcKRG2BHxzZoPwZ7nmGBFXQQU8eiTXB3Y8",
  "key4": "4nRbnPv2bSr87ZdqYv5EzynNd1KQiUxK5ADGxPM1ts1ihwn7kU5edxTy5STaS9Te9DSdbuKz7kDrWP9VwLGq1zZF",
  "key5": "5K1JTuBz9inuY2juqGNbS1HPLDWWkj9Nc6yMqW6d5w24eVNyjnaEv9Qhj3g1gPPYhB8QsA89YmwRgixdZdVrLVzp",
  "key6": "3bdRAxFt6CXeLKpY7y4nUqNEReNeJZwqHCKH7vHRnTQTCRYbUjaMnXn5qxc1dJP8mf7NvUmDY8SBMP6orFf77m3V",
  "key7": "2tMg3J6ekcwqdvmTo3vY9BaEDrpxJECSs9nifzbSqBcP8MgEgHLX7uTTxZtxjr1CUt1Zk82qAm1GCUNexCrpdnQS",
  "key8": "5vgWCyAeDJ9h57ZcqjSmtbGaM8M3LftjvM28PG5FMsCP9R2CEYmRLuYg37Q1NiBH8CTT8t5YWdtF8JwkfY6Jo9VF",
  "key9": "3h2WnHzVgpGWmE7jSih9CCzqw6h2gbGMPBGKzwkv18TqiGNbYByBZbyWhyUdVf4rVJav9n7NsDJRyrTGGTNorWfk",
  "key10": "4QPH9aQzGXBKbnKjtBrc9DMRoMT8Lps5QQTxP3x4cyfd6aT2kDZ8iAoehBY3EAaF41ULGtRZWvEyYLV7p6grxhXT",
  "key11": "LRiiXuD6WQP6LwnRunoK9uja6Ai8RrdrWYaTdbtK6HMCp4zjQCjyNmF5tJivMhq5dorCYUArds7iA3xzPpVy8YN",
  "key12": "4EanoJpovCTChgc7xrSDnMszKPhUFzTHieRhFZKFqt5QefAhjkmdCvJyof2dkKtUPNcSAGyEujS9w7CYdGMm9yz",
  "key13": "3YHtyimS9hG93MLvScDoEwhaqfN9BpNszo61rahdouLfDf9p4TNshxTTbzPbGP3UQ58iyi8rNsNTFMabEJ9c6R7U",
  "key14": "3mEvzpCnsfkN3nuvBEv8NnePxDzhxeD2dM8YJz2faiCbPVbH6CYNiZGKz2agbDz3WU2b6ogmPBWYAxwW74iALE1L",
  "key15": "4JzeQ8GHDhxSB3d1zaoGyqEK4yqSxEy6zt6Xn42meEK3ygKMEhxhfZoccvHsSVGYfuLwSVMm3jj4tCq7dmkNYzz7",
  "key16": "4wLfu8C6ss7PaqFR2ZfaHHnJtoK63xW9dupDoXU9txkVGsxz2UPjYxHrxA4cbi2J7HkjtimqHdSx3NbkfUnDGd7e",
  "key17": "33u1qTFM5y65iL1C6P88hj3X5xhghGDBwavSP8eZLsFM7waMLrP2WXdpKXPQAkt75YURmLCbxZmNwvgKbtwtgKsR",
  "key18": "5dh7Mt6E48PQijHHe5d9XrnFoxm4wrHqACmYi9dMPGxsk1xJYd7kMPh1V4KdWA31bieRSLBuLt3rVuJqSefpuzek",
  "key19": "z4DAmirVPtj8fmAdS6gDPspaMBmBVgxwBb4ErVQpwny9RwrxoLTn56qwA956LSXRRxeHZ1gKzZistq6ECRnnrPG",
  "key20": "4sdW6dUFH2zhxfRxbGJ5Xais4oUo2efg8CrqfytyEPs83d4zYhupRWwybBswmhSiEXZVjxkbkGY2j62kDfEvkaKN",
  "key21": "48jUhEg7pfvSFme1Sf6VDsxtjry4dykypuDaYzfhDbA2y5Xf5UaYiJyF3bZde8kfHkMcT8jaRJurV7scLu4y8hDt",
  "key22": "2pYMc23AwmZg7ecxLEekvjHPTy1YyUY4opp3NQyeC66K6GYzZoNTQyAskVneRs1zWaNZ3DoTgy5rmyWZJx5mcH7E",
  "key23": "4979djjv2uhxxMyApLMcwUV4aZ3idozahDRBwZQS84v5qxBBUvSQAA6rgstw3ukZCpQedYSnwRxASPVNFtqLBGoM",
  "key24": "2vJXVHDutoQxbXdrzrLbtGCGCU9mDX5BRq6AXkGdjFbrn8S1nMPs4CVZAPHx1fAx6wpfZ4y7DGtbgh8giJGB9d9k",
  "key25": "3V6G1SEsNZsr4CADrZ5ZuXyuETk9qdvgv3pAAMbGm6eAK2tdjKLpsktYqMXjKF3QSgGQPwmufRvgDqSYZjGzyv9j",
  "key26": "n9vPhHAHT2mE6qvpwJ6jqZUhfCz4jFzeRBUzPeJsnKxXN991LuGSF7dco7trXqjDRTduN4g1mDawBYD6k3nb89D",
  "key27": "5gnpDAcx6tSuYHXm1gGWvdVQjFu4gChFe8wsz34Hu3vBQbEfVdNYCNd1MJmE7EBs7gpXf4eCfsGk5aiCmVuMuTr4",
  "key28": "49XcuQnPtjsVHZXkfrjTEvQdX41G635LfKGDCfPBNZVyTbqd77xPJbYn4n8H2YDNvmhZTXZRhCnk7F14JSnxxN2X",
  "key29": "cMeoJkLeXSPr3KHbiJgb1A4i7Hkp9n4T9WqG4TigfP3kpSazdbuuETJxkjJJWEy7nRv8aNFF6J5T719xWvfnK8s",
  "key30": "25Xo9mbuxJqjL1tsxTDqQv29sB1thJZc6MVAa4npjBuQU5ZxwvQf8EeGMGrJaqeebQCwicmAPcRRG9phU6EUUHRS",
  "key31": "5MyajESLbfRrW4RaBx3StBgBhQr6s2JUNSzYf4sfbnMXCKYNB3JU5kS7a8PvMGqDGrNZ2moczuBM8LzdJ9FvLHFi",
  "key32": "2dSxkpin2qup1d6k9kWAQSeoK7ZnSKfcCyJSNPiRVTgM6ksNLgM3s9F6K7v3hD6Aqmahz9mEuL22h6jvwqVKmhoJ",
  "key33": "dXtztfphvKhuXGDBfwjCucBmRLi6aFK8bpbr7YhhcLFXwf7tQCAHVaaVeh4m9oAXaWgphJRGhSNAaY5wkuS1tWk",
  "key34": "hrrmGRXbKTnVTjUTYeiX2nT25K5zVPgPuwMF5WETNwop6ZYCEoPcThwPX9y8BGbLobn9sDtFZVbVgjhSj95LaPj",
  "key35": "5v3rt98jpN9aRjNJAgVGZ5aiXGEp51mbfYhz81yYu56LAoYjEh6kxxwofhP4pDaWkK4MaZWf4UXbQ2tBZiWdHHMC",
  "key36": "43d5wW3YQbDKbaVdJjHX9yzbfKhGwxKuuptnyj2P1ffNtXK4fy5v69JM769sD5ysNTPkBDHQcWEkj9ewD16expQS",
  "key37": "3yVLh98gNY42tgktkNE1zcxUDWVZwN5Rjmd6ML28ijNuJY5KmcAZbwsqt8mXVkGNUg7DqTuSrcwBNDdkGtKb9Jg3",
  "key38": "3HqLb5iTgw2z4LMyjYoNvfmfeMoAXbfksHL6fphxGgp6rKe8QLWbqtVYPttD9GejicySjJiMZL1uwfbESVrKNRPd",
  "key39": "2CK5j2NnsRF3TCfKEKjTtGeaAfximhZsNKtJoZ29HeJAEwnz8FzZqUmaXx4JXKXXnXUU9Q2JrhPPiUi69uY3an9H",
  "key40": "3ZhYZAmXMS2Ya89ppZBt6m1DnF3ZGPmkSbzdp25ZN4fPUBRfhWfj2VEqvuAh9rQv6wbY8jME1eWtCATw4nTCS4do",
  "key41": "TDTuEdp7duuACHai2VhDxoLYELwjXUvq31TwbihrycTPnKf4HScESJG1V4ruzEKBLeFuRRCByNMHJyQBVCZYmZf",
  "key42": "5xnW3b3hk8jjymgEafyxVANm5qtbfhnJ13PE8wYW126osyp9qgqM4rf1Ar6gs8NvrgLSjSGG1Uq557TNiZW7EjHL",
  "key43": "2pgFaVLanfd3hEdADsQFV5ChU9s7DXBWmjCcyLVMofUcGbthaMW5ofTb4ffgRDfqqNG5Jq126JJev4KMkqFwAfoe",
  "key44": "2ZKp2TCkAuK8ZTPAEjJKPBeyabWRWWPXqZ8pCywmCPRTN63q5q5VoS4z235B3bRjjMbKPYgwPR2VHpZgCmuHP2YL",
  "key45": "3rJeBztGpxjZVqgFqSSGdDNTaGyeGjfsiZW4nsGDWcyLkTod5ZWoafToyDt3iFJwZYWbtR6Fb4hbM5M5RKp4SPz",
  "key46": "jeohFuPxPWAtvg1MyJR9rPTvKDY9KApDToNvrtm3D7iKNEytEDwBUvEa1tddSirxkcavEX9MZzrL7hR3TRaqcqp"
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
