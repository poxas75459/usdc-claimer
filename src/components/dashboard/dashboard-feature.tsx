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
    "3fAWRZBGzg7rXnM6rjS8MPgMx73ydMdSpN26BgmfpbHUkKQUpi6wVT6tBqoKjQyhMXyNqcirCXEGXTCiZnDeMLQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R78ipgKkJ9x4LzYpmqwGJAdqjmNQ3xtfgTjVPWM3eUrrw6Cb5rkd4j5rxRe2duYnNqa1hNz7scbAkLejiLLQ5j6",
  "key1": "3T1ZYkrJwiHLTatGKQ7M1RtSwYnKJQ7YxBXaNmN8Uj3o9NQVN6AYpRvB3phKEXWcHuiNKXx6Y5Nk7VYW5J3vXnEz",
  "key2": "5ieuMKmf8ncbcMvrgMF56jrsVMjxNvxgiwW3F7GAm4Me8hVmk3PUwBHwE2P5iQcAgsfTHyWTYNGUKwzJmFdCWtZt",
  "key3": "5o5SzoJecPeEADeo98T4QGGZk2o5FZP7Mg8Pq4HfFKJmGgEKY2xrWBYqLG3NKu8Gqe8Z4eQsnuaz9SWEru1sf4si",
  "key4": "5RbEgWLUxoxEdaDnZMsFFkUcuVtCja3k2sRRegLyFJbyRchs33tE2xGuFgaN7tsrv81Eang6PvJD4as1UCAZmF31",
  "key5": "38vRKSNPQvT3izoDUfxPzi7pVnMvAALQ26N2nDQnwaPeGrBs4PWqd4q88DQQ3RvExZA8eGFPJm6sKTUhsoGVrny6",
  "key6": "2gR51UZhpi4oLyhTy934Zxrg6oEexvqjBFBdHxbzYD9huiifux4GvzSKh3eyMCXkLuF4VRKFm43Ayb1iVGuYp5xN",
  "key7": "3dxNdujLZhAHRHHsvKiBU5RvUyS1EpHR9S3zkJmtLX2wMZkB6okeFQL6ZWvQm1v7T2qRXTpQrE6QhsrauyfMUd94",
  "key8": "638efKeSAfuWCbdMqxbWwaptvTPnBSGuJYurtiN7TzfGYn8o9RdZroCUt16oQ6zdtLAKPhJUnUJLmZ6hNXbPosgD",
  "key9": "34MAfebnCbFbjPYBGuJSF8jo7hseFWrskDot6kKkFkuRrTUaozn3N82873GQrpPwmRdnMPfrzHSKopayp39GQ8xX",
  "key10": "5oQEGc86ybsJaDFz7evxV9WqmSZP12zBC8wREFTgvyHmCTyZDxTrhuTqqWDvMXp99pArMvrYPQXq5SufpV2w3tv",
  "key11": "vzBjqnxzKgqS4feQesqyfbUvaXm7hSk4fgMgxdBiSBdDjhwwAqYU53T26qUHK5U8UEwHnHDfvJqc8VXa35zGZho",
  "key12": "NgNBdvP9NDi14YDKa444oPYjKRHNbRu3zdLmaVXXhjeTVgRamJc33FyDZyYYF4ZS4xMoKPEK35H54ksQahPAXkV",
  "key13": "46gbHyAyRWMRqmLRs4XfUN1iaBmPW1HRBDjRdNR8dygWKVaBM1MuVxyhDzs6hdj5VZVbNHTC6iyMvtwmJ81MRJyf",
  "key14": "W5fom9ntm9hh6SP7A1L4pedL3PR3JknauA2ZfaujsJSfc83WFUMmtZUpNpyit2nufh6Jaeqs8egkiM9tZ14NxBB",
  "key15": "5cRn4BE7aAg8EoAxi75dU59EuDS33i6BfN9yg2t2icY4J27LsnaUnXKkGo1Nd6HvPiRqS3ik1gdjsbfDuf2Kkya7",
  "key16": "5sJ9LfkYWz5B4FH8H7vVU3GrrM572yxw5nvKneX6To9yRUhX63biqWSo5Le1UH1S4w4iHJggxEDwaY1ecdMHoARJ",
  "key17": "5cvYT1tHyeXTmpNiaobF8xbJtzzjEuPk9wt2zjKvAE7eydrPqN1ayaanNxcqss7rwdYn7GZvh4PvkhZKvrwbgKg4",
  "key18": "2y5vq6xQKQ4MoZfxRHc2BhV951XxiB8cSmkEdminbgnZo1N3AR9LLvUNuLUrvGDWGJSzD4zZpuv2vKmcWEL5LSpN",
  "key19": "66rbSxPjBZGCovyr2BHAeBs8ViPReKHFiLq1dpJ2Jtrmj37Sw3ciND731tvsna7MNJdKDFWpHxh1QAnQkcXeWiod",
  "key20": "4q7j8jDN1zrVPzYBvT8TFR2x55KVAaGGh7fGqhj8zhTMsBhueoQEAACyHZJAHNXvhU1cmQmV7bXerKkQq5Cfuv9J",
  "key21": "4tTmo2Uk7aZ3mRCxnEvQfKKr7TnF2fcRdPCTR8CZvuBku3sFFJqmFk3s3dd3i7j1GQVt5eZbwosQb1FixF2zsyKZ",
  "key22": "4yCE271BgU9pxoA9cL1E8ydjSeg3UTuFfccexCNyywd2HoQAyv3VSQTHJq6h4viQbdDopGth5JYCKppTVvKhGZCp",
  "key23": "3PbfVQRCkgKvm2v436kHsTt6QtMtYivn6cgztoG4no8B77doNPPc6ULdjggqvHWQt77z7aZmFmj7tigyu7a9yts6",
  "key24": "2eM6JKnkneygS4xPSCBvHoCufVam2XvssfHERZ3YS9Fav6VLYfvDvzX3hCjsvdYuZzkckRY5r2ca8SBSdh2oe3my"
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
