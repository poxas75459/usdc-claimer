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
    "4wJ8C77YNAbCAv4jgwHGy6bxxUC1e2MTNQviJsNG3EbFCbVzz25WVDrMMFdzPMftQtj5okY2xvUh3ZoefbaRTYPD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z66uXcsTXrGvszXCfSRVUa3DK4LyYxtttC5zhBfoqDuwfgEdSd8GsQ563giKj9sjSLF5Q8jKHj36mS1pJXFh73j",
  "key1": "3g25ZyZpqSUPTWyfYHiFBJegM3qjqPqemUNMHLu3U1PUji9ETs69FYkD44BPQ2DePNqthLpxVTKQN8brxba8kGKT",
  "key2": "5iFHqR1NiivrTTCbGoKo1hJ2BaMFKSj9W3AoQK6MAjzVaN2JbL4EDmSBBju7kVpCwkqQKuTLF3mJ3qCVGNeJ7dRs",
  "key3": "2CDThf2gVSvKb9URD9qSqYun1VSdzCXVcgsziEuvwN31K2oieZk7ELJ3bspTdeCq2A2HbHGhZCH5nLHKY4rFcmbd",
  "key4": "5iEgqT3jDDcKuYiMYT9jh6D4gtnf1KwDQXjo9K7hgLFQMEUJVULM3Nf65qTT7abHNMCnaQ8fMcJHtpjH9DhPUAen",
  "key5": "5vJnjbMCjS5QaQMDywuHRBCVJRFaeME17Bh7anFHFfWSLQhNGZZYFSHeMCh1VRWZz7CLRHTYBtR55f8SvgEgUif1",
  "key6": "4hKwGxSyQsicY3JotWuoA74vi5NMVNjTNfc12TxeyBXBEG4b86P7EX3NKYYv15UWwqQXKLqK5GfQtzRW1fmMKda7",
  "key7": "2XcB7csM6UGxaZuxQP87Udw8CnmEGvoRmLmaRpgYPsBDKqgjwTnZAMTGCJzeFnAUoVdnuNBoetrAAmaW3aNXQcFn",
  "key8": "dDEcukYmAeZ8UYmq2X7VjWYMSgCiXpUEYyWg1QUfYFjfY2sDLbT6NSvDKYaXDMNCDc7R5x2C3tkaQuNwFbqqboX",
  "key9": "3caWpQuWGMG7ymrBsHQ9iaVW7srUAUqubbpdaMty2zt4y5r6TTVgqpR8GjysdErVXhgvUQdcc5bygJQeV2cEr6dp",
  "key10": "5UadBWBve7yPS4MWQpv1JYzpobbNQy56umMLPpyzNpY3c7RArQkbFZZyjT1ovooabBEaZcXH3FBF9wsmcgQ8kQKe",
  "key11": "4MWcrBB56hBDWvAtogDU4G1mZB5LaE1w9nud1rRiS8znpk2DTuHqPtUXbYgRW6TQHJNyPUvXwb5Re1A21Uq7CAeZ",
  "key12": "65vwjNWQU4QGSLCmLkpKB4BGx7pZ3Gjb3RJwVWyKCY5HJzyCVJZSCfsbdg9DqjU2MJbNErjKkQb68BcvGVWy78mj",
  "key13": "3b6Lnk62vj7hbNrSvFVn9pQyhqyccjPh3mTe7wBc7LyArTnfY7WeVAxCkUFxjd75ZKjS8LxFjpbobPQSSPh6EBe1",
  "key14": "3pQFbXmats13n4eGtrpkjv1jaDgSAJvfQzRYp4S2pAvFmFYnVK6gh9uW2AqovnvNxRdaQoryUEawggRxw1tNvgA8",
  "key15": "4TG738YWrmBRHV54S1Pb7E3FxEhjSxLUBQVessxLTihHNZ5ieBNzNy8YGo1vGGftJHE9CFAByyx7uHvPvSkB6Y68",
  "key16": "5EQGF8M1AeNmqfVSF8oo4FYRwp2pX6yjYWpYz8KGb1Lh82kusnPbcp7DAjVnsP6fBF2KKbbLvwNYXXcDzfbNvHyT",
  "key17": "3wikTq5Mu84YJzQKpcnvAMxSTdKcpRTv8BK5fPo27mZLmPMgFGrS1YffpSBEgvi1QAs2WU8J5RVZWF4N1sKSPEnU",
  "key18": "N8mD2Xp3kj1J1Q7ZgZP4CBtGd51ri8ASYQSCapAD1AARpoQtzGXm91L2GKQizHJ4tcCduHfPfTQNM7MafQrRwNG",
  "key19": "4sfHPQgBkCd3BUtoiEZ4nugBLA8iRKidyqVSmGpojjzsvAtRKLo8GfmvCZjVHDBSeL5DyfDsdQYt2LqeStUGYLEy",
  "key20": "62uagvpSveEi1eazhWaBCrZSYN69vEfhvyA4ktzmXrHpZGT7kBn6quNsb4e8nqQrmreE4wDwW51nRqV4zWFWH8P6",
  "key21": "YH5ru7WTnWRoegj8DBD5jsqrWxRWQgDyyS2p8DQtAeqgGrJWCBWy9hVUcgWS4Qi7UtzgznWpDhYSW91DM7hVBrq",
  "key22": "qCPzkgg9VpzqRfkoyPwM2iqnW4XD5hbYBcBm1zGBJpyczsuDyxAqvcd7mYHh98Vx3jTEczTNqJnQKv2zw6aoa83",
  "key23": "4XEggtjPsAzBEs8XgjmUTzPiPbg4bofxyxxj9kPgfpEk3YARv2tmApozqE6MtyvuvxBhQnLWmk4X9bHUBhJCwPam",
  "key24": "3ZYyJD9jMzYKnUx1SRgH8SizFBevg5Ev6reWpPhGTE3r35Y1SvVEfasr7iNZzcGoFYnrfjsSjGBQ2CUk6JnEerLj",
  "key25": "ZERb9vgMaYVzERZQ95XEATwngXa1wE9ZMNkAeBMkUDHZ1qDqme2zPgGj218n8KuSH2zyLFDUnQM1QHxXA7pGg9S",
  "key26": "3uzEVSbjZ194PnmXUv9GMZ5P8bnmETStAhetiDYNC9KABNhk3M8gq3EMY9SBePo8PYjC3rGFPaahwr22ouxZKXNC",
  "key27": "E4nEGFTxJErbnBQJ2jQP5wnJbNpkTbhi6RAWVx6aQ7nTanVMKzez9bAv7c9hjFo3ZcFzEvGxefaiJzMToYKEd8f",
  "key28": "2Yae1KMEfidT3R3RAojcwdT6CBgt3JdHWiEjU6AcFCgFVhPUomkPkuc9cVsE2vrjcVTFBP1BE6Fymz9cmSSvYoau"
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
