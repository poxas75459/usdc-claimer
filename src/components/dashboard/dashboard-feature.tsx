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
    "4RffPuQj9JmdigBRoRLmXnXqUL6xRFRv6g8LtzbroM7G9dny5AESjhX5Z2X511DAjaYPBJdu1ZS9YC5vGaZaZv7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TNoUKvA8GxiXTWFFqLeSkvJ5M5s8h4X3D9uAgTsCL6aAU4cKye83yvH8TL1z3V8qmuDib5dsHdax4qRcuXqkLSo",
  "key1": "2kgSvA5eSYPyhAFoPfzwcEKSLhyHbGmS97M6Zac2cRzboHEozLjpZgGeCTgMd37sUYLkMnoK2vRqQyGfYVme4SRz",
  "key2": "3YKhMaJJrLGbTGbHvhiRKKRqUT9xzHQVcELfLpEeJWYx1mgXEMh93aw7iqQpZkCREfXwgTDJndxYqgveieqxy4zd",
  "key3": "4J8GAJR7f1rXFtPhD6BG9UXkEWzQKSpzTD6owpSRhnavTDRvRZE5CxFVLKYRBqmf22cMVqEL8EpgXmZQoAYtA42K",
  "key4": "SGJFG6eMMxVy8cPLmmiRbhoXEgiQYj3rfQ8BRX13qqXUEdUoW5neCmnp7i6NA9FwPXr7Z7QwyCSbMgW7BxiwfFH",
  "key5": "2iXrdHtWM5e8GqkCtjhZNZnczAW5MftxZQ4ERrH6zqgo4r52ZsgSHFyXtJ1e19PGdW8TFXWentTHKrR7n3Gm9acq",
  "key6": "5ZmuegYv32eyCwnaK2rknLs5SFSC5yPeEUUHbb4TX1d8FumZL4JWRuDFVqqferuPwZhZh9M1uppCfaiC97aZ6FZ2",
  "key7": "58pzRccNRWg3gJMxLGKFYeFM6QH9zUihimytdcALfnFnwtQ5pcWRRDZeV77rT4mXkTobH32UATmNhgzeXM9GLbQd",
  "key8": "4S8EbMf55AMaxXmYPFhuU3oaG2N1kJHwZFbNh9L5NTBRf3WgV9TW1MQ4GoogJzo7nMc4ZyNDsV5pAg42Kt3rcPPh",
  "key9": "V3FdJrW4knserSJT4bT6Kfz6dbbfy35A9NcTHxvVYPLMCKgYSNTKnjbpqmtcURN85sd5rtNPTxx2MKMJJPCgRno",
  "key10": "31qvDowKNLkcbo41dPGUCPtKpDPopzJQzzu5K8w65cdSLZ1RgF1RgY9zxFPi4StoZtPXQq57BAtxAEWepznMFXwy",
  "key11": "3fvyomeNjJRUQg6ma4sBHArbKkMmYTkFRTFjPqMwoXPQ8nx8nL9nAN2djeEWygXSHpC2DJww1CQ4Skuwzt95Dq8S",
  "key12": "4aRWxyZ4fJKAArWaQHJ9ibXquSFNRBLcSDMvXWpdLGuKHJmZ21mxCUew9sH3DqmFEcfgddDFyKFpBADw1xdjp9Gx",
  "key13": "2NUXBp1JoK1fWYnGGnXAQQduujaJLFvuGEHJguNE43RcKQNDw9u6LcPh9UPszQzNhdxVDBRPJGDVKnpesseEVSYM",
  "key14": "2UBGmJMHAk6yDDXcBD12oLqpUq9t8CN299efUYVRgGBz8wkQGB7UVFTBe91NBFrKm55Md4iwSff5bhwiCvPy6QS7",
  "key15": "54PxafG4vVVwRLtC3dRAdsBMchGokAk8yaWxEkajCd6PYvfzzSh5tq6BedzDD5K8hS4uwdUT2BTsqPofNJ1jpN7S",
  "key16": "3aLQxQ3C4cJ6HSYpjqXB6yZLkNqutydbj2N1a4HSy23bTXnd2THeGqpPPabpNsSrrgQ7zYMBcNpYfnD1R1gg213i",
  "key17": "2LFBMCYcWVi9T8xsDcRt49THvch69r5RoRWg2ibW12pGqnbzrBzRFJvJ9XQVFN8ndcKi5rc7ybbLsbfZbuEBmhwK",
  "key18": "37H9X5N8qiViXpqVGvVioJZWc6haHhVW168drFTb9eTGJLVV3PUyzVZ7qdebPBbuxpbM9WbfcPLHc9Fujns4qNun",
  "key19": "5xHA2Y4bahzVLXHaX273wmWdMJ4nf9jPKDNnkxiSYT7kmFfxc1yX2evRvLcJgacc5a3iWSK4XwN7585pobVPPxCc",
  "key20": "4CQBWqPgZVhVgJaZFBBgq7gt9oj9V2GfqRwcy9UA5JTgWxK6XspfkxP4aLA2sFUevZHeZtEYSwXHNL2mZGBLn9w9",
  "key21": "2nErguw8YTzxFTe7Vg4cdh21pLpEgPV3ZFw6P2v8VezTDJU9Snpz4pf22kZm4E9MmFhG8WrYg24kvtMEs2a6i8rg",
  "key22": "28etNpi3mENZe7DspUAg1nEB4npwFePJrkMwYS7vWdHKh8XdkaEpX5rd4PLNtQiqqkHfmDdMvkt2KC54qcBUVe9D",
  "key23": "yBdok9W6wa93e5ktD14rexVHcy5CeyE5M6R697m6SdEUfMAppghynaokYhgc2Mz7cyThZrhpHb7V4Nfg5oGqWV4",
  "key24": "34Fx3cmkUm6BLZmzCymi7pQ2Jcdw4gYqadmWABprK78AsjazjUMof8Si6S7sDP7szCs2RWa2TvtJSWKVeoba6D9c",
  "key25": "5CwKFVKrSXBSPEzgnzqfRE9BQ6vJ3qsXzPFx5ssCHxGjTskJkTkFeLV3dJt9h3P6p5Bkj1ZfZous1wU4iQe5NEjt",
  "key26": "2BdiTWUbYWfVRVkQJ7nytxn5C3wyap1U8tXMXL3MwHhum8GpdR3BxoFiJfht9mU49X28ayvGS46S2jKxKBAmSqAh",
  "key27": "4FHJKKhrtcqEN44rsHtZJVnUsoVxSEQZr7NWvz4Jk1EyQJsgbUthuKp2NdeLg3FTfx8V9R9LWESpmxz1czaQVXL",
  "key28": "2umLrAumRYQMann85mJCx54expQrPcLpBqZm97NCZPNQU4qMUi2iheVgV2fDoER3ucDo7MQXjwNkv6pyQNxbwA6u",
  "key29": "5HCTgTCUTeTEEafsy8USfUrBhmCGEfcmhuRG14jSjjGQNhGzXLG8jAeNr7Jj7C4cV3ySeYmyM3xrfRUasFgHmdTU",
  "key30": "2j8kBzqZHfuD5iYkCiWYeArEEB8vUBADk85XE6Np2oVXYeMBPthFjsJjCZAEFUKfAobhwu4rnR5U51udg73TLJa8"
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
