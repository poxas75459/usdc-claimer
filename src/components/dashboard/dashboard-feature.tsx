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
    "4QDUxHMHzboRHVqDwDgh3PdocJC3isBAjV7HqzMPxkvioaDGfmj7bmLX1eHYGgmtYMUTV26otKFaSXsF2fFt7ubh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NmT1SpuzEWDnUT5JHFymiBeaJAu1Dua7XWQ5RyL9Qm5NcdkwbtapQjGF18A3Br2L6x5AiLeZ4E95tN9V7c5vhc6",
  "key1": "3KeCx9BBSQf9zZqoSyfdbYARjQfKyj635RrrBTKiPt41PoVEAUc3ACs6EuUtjB5hvFJqhVDxEz5TvUrKfEYcAiBs",
  "key2": "H7cd2DJnXhPHPV4MjykHfAVy1zJDo5u8AMDZURvGg3KAn7HeZXhm9zYSRteaUW9GxBDfdFm5kf3MGTxRY5Nz61D",
  "key3": "3wFsdyyHLXfrtfA9EnHaigD5Mc4Lt34BS6Z6sSk1SKATR9PjJQ6kf5yQaxzRHF5yBPTxKJwJ1QGCNdaJFQTFUdaR",
  "key4": "2azgJnkwg8Qg4bVYHLTuqHA5bxf9xTuV71o5gW7CD2JKJZhYaaKByVcMEy9XrxfJSmS8Dy4fqYBHuBMt858TWr48",
  "key5": "4hijdPqNxfHRcEX2ENCPipBJsSvEdNpXVdoKfoHkbKDvceYGDPfSij92RrSo5VXf2bQKsjVqjTbveAuGhUQ5gBiq",
  "key6": "3a7gwTsxN8e2nM1btZS2e6rxkafW2F7VEUuaPVvn5bRToKLJ3sZzBUFgHVrgdKDpxkMzgfSVL6EnypjmRLXcZdqS",
  "key7": "2RLkxasH5RdRTHg5w2TkgyCetgnfBuSz6neMA3jgeGnWfgXEjpevKNFkUBLK5Gcd5BfSKZTFFVwjWv8tiS96M15n",
  "key8": "22QMHaQWSmTU2RoYwDLMhSBd24qNfQtpSRQwx9EXJt85X49p3VyniJthEANUaopqkgXSY1cZsQxeqSwxiidD24ND",
  "key9": "2tgM28xXH9iSxwBAU2afdzRuNG7xahSZw775aAyxubXwrRXXwP9SjriAfqbMRaRDouDhNk1hyX3hWV7bDkGGu1wX",
  "key10": "kL17cE6MXuntcgo9RnabvjRCiPQYP7KsBv7zsFn9P5pzm5zDT1jBKWSqLntRPHJe6M1DubRCR9bxHLo8myMYG2B",
  "key11": "vo5kjEAZmFx2LnAL6HtmP5ysNXg9f4gmeoyuZ2VchqYsuBD5PVn1PZoePPcgYQHqNfgimGtnBytRdJ38EUaU5gG",
  "key12": "4cRGCVT8MiS9RiwDFJTs4wCwV4Zkc7YUtiqr8JWwoZ4evjrRgFpe3ccxd5LLdq7DE1mignJZ8Kcx4WrukEm4ZSYW",
  "key13": "3dSSVnvihiNEXQsWNhGo14M7yezhwDwrL7xUBsb3i5asmRHB7VsYQGqfjsxcnomcvMQYPdyN6tGXCm77Bgz9vXEP",
  "key14": "3uf7haJ3KpJ9pWUdxtdyMjtXWz2qE7zWhG4v4BApdsvxfma2gMkYCLFFsY5eqAMAhH6SX6YCeLuD7eWddF5mBNaX",
  "key15": "5DVrNVQtnAF4XCqy9zH9Jb1xPECebXRK8kWN4JzzUzDuMwuNWTJQVGaWvF36sgTUtTWwKzRnKyBkyGZaRbVE6sUT",
  "key16": "5MwFT4m4fs4v7rsV5vydv5gPu43voYRDusEnY8niwUB9ifuQwo3KFTYAC38hxhjdS31hBmnt48KLxagnNrsdBmm8",
  "key17": "3UjFu1oJzaaQ2KciApHJt1TYuhuhHyzEoyVAZ6aL9R2rZVpPjLePaufVjiCVukeoHw2mGFmtSMQKvqSx18bGtnTq",
  "key18": "3sP41jDx3QM5DyLxwhapLu1zJSgxa1RGeyxHvVj9BAorSfwf2bjWK5bQoWyLkUQ15Ey4ftBa5oE1zPjYe6KRDkmF",
  "key19": "3FBjZHsfP15MJXWH4XWF1v8UfAz7PjPnAgMeaZeP2hfw3m6BFkd3W5Y8nC5rrUZCynyA3cxc3YSqxBNQ9bzZzRPo",
  "key20": "4oiQyq52j2ZnnH4xGjyRhEnJoqqFDdpSpUFn6nFjMkjPojPjjori9Q8wiVDGJJ4FEjyNVr6ufYsKepYBzcGhyknj",
  "key21": "4i3h2xZiQ7oYk2heRX52mSVNVBzL2SWGaUnWeYPy1yAY2K8ySawiB9D54ZpEYVxdXWbyQrMmdiMAq6kLvztjVT8V",
  "key22": "2uiXCS3ge2MzNuWTzN9sdShwdYdUhtfo1qbK5DLA1oPW5zyZwt52pJ7f9Pdz535zk6bMoYKL1ZAnMia6Wt4erpcD",
  "key23": "38mEhHpwj7uEWSdBuAbZ6MVwpdF6AMxRcT1SWFgk9eBX4YQDb5TJUv3BS5bCByupVaWxZCHNh47AJ5EmCkzxgyR7",
  "key24": "4gpqXVRzgCDWJgU4f8xdPrU4EZUhD8jZGYtuSXYNkYNtPwQVLipXaRqCThC5i7KTxpFXgCnpixYUXkRCgwN7ctMC",
  "key25": "3K4g2YgQChGcix8iKs8nQjTd8cDwnKGUoQywBHkr3EgtQhCWfypwi3CAiS4nvZp3XExam9hpifYr58SWeKniM4Qb",
  "key26": "2sT5aft1g35kJk2iy4zxMQFV1DMrXLe73ng8UQ2ARwu5yzrUyB4VNJzxkeuo8pfAYvUbrBpg49tx3ch6xLsK6DLR",
  "key27": "dkNrYw424Ab2Y1veQnFUyTX7TeXXSkwvkjUepwUp1dWGCCLjAKDxbdTmJ5G8ypN6Kg6AhVRbqLmPYtpV9mhfZUs",
  "key28": "3LK3NppyMEDUEa8X1LafeFv1ZTbyLGSZLdrLuLMbektydr5J5KXztGukZH47cGFAwhTqxS6wrzPfidWYTdVXrphe",
  "key29": "56T6A2Y9gZ2pmuUMw3F9ZQEhLFTcFmBAtFVWtHJVvFjT5VmpRfPmLZDZw63ER6U643ZNrzhcLfEv9GhsrMLBAfp1",
  "key30": "5dPgWE4FtkTy4mt16xnS23uaF5Da85uvRQsnDNkBsgqGXm71ohiFxCXBEyewFHn5hayYb62JPjZhtXXGGyX8jLod",
  "key31": "5kAornsuuqR8gRch7XMMmFr3jMoSLq3mCrbeWyD9rqtjeNR19AXRqUnMXtGfnEukD8vj4fjSH8EnSNeTxZPV89sm",
  "key32": "29ELoay2dHN7EUNCUS439YGmoy4VX6ECNQtemmh14g1bDoYrxXry8kKVaUiQSmrTYiPvgJH6ihzDGCjw48WJqYs6",
  "key33": "3cio8qp3U4W98dRyHSKx28uKrVXqqJyW8v1ZxrbV1kqFTiAa89mtt5coeszYNfZm3ZjK3ErYm9GdrdGTMoUkzGDL",
  "key34": "4KwDFFC1Dv9NpaSnX2CounNu2JhMhvFDp6HekUBNqxrZG4QF9xMrWzZUm7ubQ6tJaeagkrztAsnuTm29jYJk8UvP",
  "key35": "4K7g2pMGU7knJho1SGNDPm41nCGuKfimZaaNDRpiQpdmVdrHZFqAKZiH5gLyW3qNWAQua3PfLuD9wpRVDGgYpkgX"
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
