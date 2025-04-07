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
    "2YSLKAF9UJgDweWmARpH1S3ACDc7bHskWVz28pp1yEohgzpZbfd2QMHHPWqthoV994y3a551oY7HTK3ZqFGXXhD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WUoMb9k6gqYLFzYDuGTTGxHZE6bKctDY6pvX6ESrrnWNoDLJ4GvaE6hDWzMC6k711s6Pk57kBsMzK8e1enRW619",
  "key1": "3VJvnaPMFiPMve9AGcsUeA9T5yJALeKBm4HDuiAHM7vdgzrhuR9x4Q3hDCubtpQL5hJTE5yCf4f2pGJgF8V74Gg8",
  "key2": "42uJZZvNt25Jccx8nTzsatXmmv2GDBvK84JKqZegQKtAwLKowrdEgixcgAvKjE7vHQ3YBx1e4e37GKphLVL8kPBm",
  "key3": "2RwAePLJoxx9P6eAGz6SbU7Bpm9UrLpDB2AM85aATGcqGfkYAeUNrK18FuwdE5DhdgT9N33spCsxhj9RWcBa4ZZ4",
  "key4": "c4E2U6XDGpSGFTwEcEZffQsdPWv64HZfZpCykN4NEah458Njk8ghKq1NkSrRH9cmbsQfJbuSv6dZb1hH12rEKEn",
  "key5": "2cukK7PQjfFMNgL6vLHguVqWYa6x9XqpapLjMbrwjRJyyG1Dgawq6H4jvfc3gzXvTQaZFReT4gWWU1LFfjENbCYe",
  "key6": "qdz7jWb4gQCTFePH7gpusVfj7ErgrYCGRcUhSUqoSLEw54uutExSg5fJjWGTEXuphPrCsZnWx7FupwwQ9KkKwGT",
  "key7": "2GgL3zdFpAXu9RDJHdgCMYchLQvA6HNfNQWKo5JLyYUSSNMaKPuiNKY9yMNRvHKQMm4E15paqh2X5Q3bZmu16GxA",
  "key8": "4nr7igugSL21T2sEMGN2cQ3Fms88eupMRZRWkhQ1uqrNzjdXzXWnBp95C6TTrhwh54hQZDcHh9Yy6qpHTmF9zh2P",
  "key9": "4Prb5yDLzam58QvWVSKt9rSoCzRwRM2v4qhZrafQHC3Ry1MCa78wkM28t3NudyFaYjiP9kLCwJ5niizszdHcf1AM",
  "key10": "5zShdC1KHQXsKshF2zPxrh55DjZUMTsVEE46XfQGufkzmJsNbzEcoAtV4oXmHebJQj6caegoKikd1L1cKxdybQ8D",
  "key11": "3vGbcbpsWrUyEankyUS8EtoSfdCqK2fAomRPXUWVPdiBrBfKH3LJNaDFzVorShZefkWCfmVaY9SWtQFdHSR2GLoK",
  "key12": "51qD7j6S1TRrU1kD3tsBsWUuS3xhbqneVjGGdJWPc3DJqbxdTaQJghUTePf3Q1cNWxFE8UX1yWVo1iRgPbD9yXQ4",
  "key13": "3GuFrhUfpLSf8ib7R74gLijjP7sVXf3Yuxsirfh1c88TPFnKUHt2ro8VRtvkRXyLYaB8DQcRoGdoGEZsfA8M5UMm",
  "key14": "RcqiG1hAaEb9meVp4nzN7e6mazYGEpuEwKYQjUc6ASCqTVjfth31PB4mGd1xQgqw3MtSoevdDbYbhchTfVWdXug",
  "key15": "48Lhw8xk8MtLB8h4C1spvFaf6vpDNJqw9JbrEk5kUYhCAiSr6K8bLBksfuS5H1daRa144cibUGavg46Aus2HikTL",
  "key16": "4d8ao1Nu5nUSkGYYSv8RnzJSnoZE1yx7i49V7ofou23tcwVornn8b17vwmqeT2EbwAfqMgGT8THJU5h63wjzo3s4",
  "key17": "yHJCvmsgP9AYavGLpBG97Y7mY2TcDjAT9DKy2cSkje8rNyg4x8aXqrdZ3B3jAtxJAXt5Wx8DTrNVBfm3TkQSmwV",
  "key18": "2Lw3q5wAFtFo5BuZXMjyJNXjrS46SjZyvKxjExJHf4qMt4HXqwF3bNgmHjreTuQMcE14e4iugZCExFiSWA5oDiPE",
  "key19": "3GrnUD9KEsYZBqToZFavzMs4c9bCeM7jmhnZzaahd26Heo8jTn7vS6rDTX1SB8JwReMrv4P91wyTE56FiXJ6Br4X",
  "key20": "5ZccMi4b3vhYGS3MMq7b9RatLuq1hjem1QdFUCN5cPLwgbHuxdBRoV5k7z3ydV3PeW4PjKDhFyt81KVsv1sftyJQ",
  "key21": "3JcgcwkpFe7oa2yttX5r3Hv5S3nAVEwY1fGk5nFKzYmyowRNYUhLVspbeUgyDhkLRBUVbShdAxQu1SQLgGepKZjZ",
  "key22": "51P4VEmbM6ZTJfwkD5XCpRxTi1PVV3KiamjXs2xbipkzFb8FkXCXXUuqqYpPjoeBiUCEZUSTEyMXogCySwWBJpeP",
  "key23": "4Nd5JuHwsTFBeWYRbtbUW5D9qW8x7rK3NAqj6oPkrkbNHnCr7sMneRGcUDEXaznegLXnjY12KdpTMkeRi3icigNL",
  "key24": "4yXRM7ierxo1DBgNkCEy1hpLJLUv4KFSRMpXCgq4jww6feXsEeYjVF49KEuwTJDrD7zGjEBmKaEwf5vpPguzK39a"
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
