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
    "2AWTHZ4aYYoTEX91FqTHXaoSiKBwSw2mzWkEmGJHVdZebLdfsjbWARiFWwV5Hy7qKUFkt9FafgStZzpWgwQ5F1fi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xCHXzq6faiRWg3JrvsYKPUY2BYUpGFfhrLYprEGsCJNnvkCKirFQMDx7XcRkrEzct1GaVYap4yEW3ieUn87nR5N",
  "key1": "66GZkP6uKtsi6nBhCw3jgzGFQgawMpFsHUocgJoefpLajTPXs3wwTLpV8cKTArz6g5wjnH9Sqoyha2VqddpzPALZ",
  "key2": "27MbVLohguZxyqAAisWehSCJRoRGkHuGsybpd6LeTWcHMxFgpJW4aDKNpxCMD8kRfKnb3HUiGFY57zHr4Kq6QSeG",
  "key3": "5kHqaChpsihaPfSwfd5v5JL5zCncLhFVtCC9Z9RxGCNZQKatBdU2LnbiNpA8H2anw81ywUosJbZqHfzYB5TH6mRc",
  "key4": "4u5p5bjeWVT28YXYTRvqc4VD1XqyedgypBTCpUvrkexZzY3Yw1EdiaP6P5zcSQ2xM7jumH3aQtrqnRw4i7yUwC9t",
  "key5": "4HR6tuqnHyJt2SdD7LQ9vi7wH3hY6YaxqPER1T8aKZt3kBz25AqPLUKoMpdcNAEuDivYPDoUHbJfPAJFm4bVWC43",
  "key6": "2mveGvMXFHBmzatF5rD1tXa5vgxU4CzCqeRYsBFpREPxvwCQwji2ezgY8rtyGt6Umfnq1fDDcHYaD91jC6JW2rx2",
  "key7": "5jcjPqwPmDMMMnZze1ky2eKANySTZCdspLKV3783N5u1QYiwcmUTkk8fyRoCnc5ejikA7pSFS3xesx9tudhdWhV5",
  "key8": "3Qu7EspWH5JPn6Wa357XVaPSEysKiueXCrqhihYXQ2jp6g5wpJPKq7Sr8aVtrC97hyuwZHdywdasSeGT5PJxqLNd",
  "key9": "67FxRiMDTRWUbtR5tTRE1QhuxwrwpDPTt7YL6j4cLsGZF7pGoScHRa9zA7QCBFCn1QTFz5ZNYer35FkxtxoX5jh1",
  "key10": "3wVcbAHBiyxbyWWDZ8BXk8tUsHGLVpJb2cGxRNTyd9Gkb7G8uq3imH19QR5c2FLe87jwauDfC3Xp55Yd2NCyZsKN",
  "key11": "2gLq5uwL4K4vxD1uZdfvjVhRxDzd5GS6tGVbsY8eooUVWZChMjtos4BcAZhS3HcWj8RUoZjMQW2bXYTRAjvHTpG3",
  "key12": "36teLH6CjnkbkUVHEm1siyoCqY6XFHtrEgGdVamNWkgVmoiLGcyJSDupG5sieXCfFdVqLJCs6UJgikT4iZ5DXkmH",
  "key13": "3DMnTH87iTMpgSikoLx6eqL3GNszKoh3VUeQMDofvuUSbmscXRL7BMCQVqucjCbQKEDhjCc4Gw9gM2ty6ABoF5Pn",
  "key14": "4ZjYP2KHyfeapCDWPeeMfRpmFoG6vTEcDht2PBNHZ2A1cxJnso7N2rLy8GV16qpdUpeZkc3DyRYuzJj3s5XeJfmR",
  "key15": "3jUknSPdooeaztRc7aF5P1TLnwQ11iQ7bmKeyv2gAEK5iiVT33dxpagQJ2skwXYqGcEavor8wfRzRda8LiEsvboL",
  "key16": "JjpKzoJ2eWpGPtCbbwECpKNJGJomwZsQU58T8vKgdSGJkCsCAkGY7nV2RgDZNVHdU2x1nPJ5vtwZ5Qe8xJVxFva",
  "key17": "2AZdxkvkpPWLk4cGaVt8yd9jNDbPrWk6iRmAzBZGewCd4VrqiWwnaqVFqjC5AXhZVLNNxhxf7KFdCDPZqNiuc2w3",
  "key18": "2qpkJ94M3knaf5qrwo2z8WZ7MEnRZU67GYE3BvPFdNsZ2SUd9B1LxiyCiEUgkz4vqNVZ81xniuv1u3SZcwR4AsMf",
  "key19": "3wkjcKrugR3w4mgJ2qv7xjFx3R9x2TrXLxPb6DMft7feRYLk3WvHzzH5Cy5NxRD17LY51ytVVYxh9AqEicffk8MP",
  "key20": "36yBhUNcBv916qbRWCb6q3gTg7YZX1uLrRAH6k35MphTVX11FFCnwy48prvBjRAmrMneAAw9MUsmkzKC6cWVZZzm",
  "key21": "5uAhV1atj68upZaAHTMbqrSEqn7pb5xPHkhkdtoVhimaCDm35T3gjiiAJN2FARq2w1EgWMKWThM7jfKMDA9FAYnH",
  "key22": "27uahzQQoq9ZvuZ33LFh8AeWMc6YBoMS9fWaRY6wqcdD2qEuPB85icDMURf1ePy4JXe8HDYbrC6W2UkthrbBpSeC",
  "key23": "DCXnEwh27poAZkX96paKzDQkFqSbcihnFa6vUFG1UFuU7KZK372xGrb2624E1RrthaWUQTFJT67TfyfbY5zWEVv",
  "key24": "3fsv21TNPEEAJKRCqCeDsUa1grk4TgREA4XXU5aWYNF6PuNeUuS4UnhHzRRKc9wb5cwi1aZdLyFHgu9s28g2PppC",
  "key25": "3rNrkbGVwYaWLzNpR3dKe4n8YeNcyyF7wpcrTYsZ7HZrCLESJDrJztgRiuoVZGPmuZZebEqUHT1CRih8HwtogAAZ",
  "key26": "3eh1WskY99EshpVKeSnR7qe1pMgL8F2ifrehe8bMaTqzPMgqy9uUGWPudFPLqtuc2furZZZnyCdLAJmMCNsGE1Z4",
  "key27": "42kpizTVLnRWdwhhPYRqru19TkaUm2mVbEsbLyB26a7wwzmP9YRphivwGnr5JNTzZrhxTdpP5jyknLMvzitXYi3P"
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
