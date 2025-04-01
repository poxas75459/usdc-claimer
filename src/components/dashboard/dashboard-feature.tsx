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
    "3MDXmdzYSHAFwpCsZwnq84tGCnDZsBPApZYHj95hYs4eEVu1Arw5PFmTsjS9rLaJ49LCqipekX6QTzyYfuux6JqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YAdtuJomRqNdKiCagw6KoxuL27nEXJZasvVWHEmciXGx8sLQwhURr2onCHgoogdjgyLLvqiGyJ8Nx38P682ZgnX",
  "key1": "2H5MfeA82mqhzTS12ci4A5zrSrxeayCAwZdmpKn5WPThF5hqhFCfhzWnPmV42VZ4RCDd7Mjw1XvgRsjgWBPnyB74",
  "key2": "53T8UGHV21t2i15oCLELF33mBb8jdSiAGTgLSbGH2WPgAGy2BqhJ9o9HuxQzre7xnbCzypY2Yxh7VXFQJ4f2JyVt",
  "key3": "2CktYzYV6suNj4sokhvhRYULwnCgJPcG5BSEy11xvjfZRXzT8us4BBDLbo8VV8hzjmqqFCR3NMcVrbP3pfUFaBK3",
  "key4": "5sQrsHMeV4ibUVaz37Nis2vep5sgGU8eDKYDBTj6tRfeNr7u47BW2dRqeQrafUar89dAaEMCjTkoktXX7aGVQbzF",
  "key5": "aebNDAoJqFC6mK8NWnXvzS3t1x6Bc7EWtRpcFdQoaY2ipkukUcnZWe6FTdjXs7Nx2NHh2zrjHsQRwcG6Tz9SUPn",
  "key6": "4Tpr2iJKyc7qDRRz9UVExFK2bJHMnCNE84FbeCVjbsYXb28qb8RF7VHdHe2dLdMTeXfG1bMfQkLveBYefuELLRpY",
  "key7": "2EPBuNfV22qDL2EhH116iuegToQVaqc6esJhc8rry6tHG2hzL2FFFwYJM5STD3Wn78yQjdoD6NSMDYrhanANPfBm",
  "key8": "5b158JKKnrnPdRZjeV8LdsYqRpJpuYPyAXG9BinqCocswTQiYsRqG7h8TKJy4hettcuvobrSKg2H1NhM5rEz3b7r",
  "key9": "5uixaw8VXDGAcQAth1f3rSzNiwL1f9jTKmvicvnzfBNmQ92DZjkAm8q3QRa1AhgZ71CUyqAJjqjzMf4Qm6UWnMr5",
  "key10": "5Vx21jirvndeGf1s88eU6XYxKySo4gWoCfFpkpxArKv6FqKirU9zYpYaXhTNpUiJveUJUSyomLjEzvFBcSBZTCg6",
  "key11": "2gC7RPtL2Uab4e8kUaSD8AAh7dymDDfSUKqZWfhBfAnKDLAWzuXN6fNDiHyFHrtn9nayY9T9ELuNA4pQGLVsLZ9r",
  "key12": "4RUFgmovKtRWw7hnVmiE7DTXT58Ax6aSSDRiYTVf2pwuqg7PxVdCP5Nt8L7cZfkVDp489syTgCdPpBPri2SqPeDW",
  "key13": "5JyC4uoQiqaDW2dGsFKCmdnbpMFRxAUkn7j4DrB5oWakHkVVS6R6F6eBvtJxt4BsyGcb7J8QSZyCubzeFLwCRPJo",
  "key14": "3S2UarUaMVsPGfhpCBojbDwF29uoDqbs6ubLCQWF1tchxTro8u2XLgGFENfzk8hRqJUQYhbWMCKZ3ZvVisbm2Txf",
  "key15": "2CBRoWuSEiQzEhEP65hHrvAxXvJDsSNRgwVVC2L597WJJ6iYX6NxK2iAWYSSgV2cvqQeahiaZ6PMrvHYuPe42mcJ",
  "key16": "4c4zXFuB8ZhF9rVmNfYebyDXLBYdvKns9Y9fg4tPbU7MiwkLPY66Ku75DfgBH1Q7pNmNgqjpbocFKMoDSwexeEYe",
  "key17": "4iLZ8TSoPLAEjuLB7SrMf4EciaPWCxwvQypA6AjtWxS4YmsJ58ss9dZRxpxSqgPPMGfVHtbnp9yBrWJhFzsAHXyc",
  "key18": "5ejeBMxzFCze7VZ9g2T6fNo3fizdeegZzc7GcMaBzQvrWZktFNxYVGwp4AbuDixQyVDRV9BMocKXLerD8A3tzBxG",
  "key19": "2mPHNqNfDerDEzurEcmyporp5dcUFes5G5NCGc44horoe2PMrzai88uLHB2yuWYn7D1XWao6KcFwqqpfBMHqdzdg",
  "key20": "64YELMFKf5hG2nNm7Ydf2tfDuEmBuUEGgDmi5Ygf1o7CdzH5TeC2t8pXc6Kdygh1q9RutquF5GbXPfEZxc8Rm5Uh",
  "key21": "4M41W9kU6unqqwDXacFMjXWtMvahPvoH373DdU1LGZrLPCG4iet858hNLockXXdSaVRz5JiwwPwf26faB18wyDJM",
  "key22": "23bjGdYLUPfETHUKh2FVEPz1wfsVc1UgPLKerkzE3YmerX3cFGeD3eazFh5vGeWYFpzG22BufXteW8rV3xj8Tu7R",
  "key23": "3G3wT9rKQvavCdMvDvUTy5ET37LudauM2PHbFz3vFQcdnJ2L8fKV5W5THV3rB2fp9NwNX4cWQxRpEcSq1R5T4tLi",
  "key24": "PvXMayTyHuRMFTmeSvQuCYfGYqr5QqyhXvJr6e3xiEfjUVLwh29DpjQZsnzYoSFookiGvUgzMz56kkQrvnyGwzT",
  "key25": "5fvsci1SFaXjB4ueVjHsizzXWppbVqQtYJaAyia8Geoh6K4bXGCQ1zUUE587gcRNrYHWNbz9ScKqg6cY3Rdt9vpG",
  "key26": "61FZvfkNKSwSePh5RPMQkKEdPC6hpZ6TpMuzqpgTfzKPY5QzMKpK9VYpgQMAucaxFgZvbaVGgJq8r6LYXyaFcN3M",
  "key27": "5TnPUdNz4KeWzKYpFx3kcr8occdvBdK3cdi4VGgVGUdhZW8pQ35cmiZgWwi7TmisbFMnjpFhVMAno6o36YG2t2TT",
  "key28": "4WjBT2ccBZaowqr2A6T67gUXF9cEPtsJgBiacUxmg6KDFH1mvjZvuZK7PjoFkwLuFQ5oSgXxwB1tEvSHN1GBWvSA",
  "key29": "5SNAq2S8gGJjjrpZ3nsY7roE6xk2hoXRFBZF39FfsCTLpumGqUVjyx6fJztY8WyfaqUonBfyStmJJyKwconYYgEA"
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
