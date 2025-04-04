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
    "4XH2n9LgkL5HMXKVTiCgV81euxXq1oMbJKqkyGJoSnqVXpAPsRSQnJHcsf872yGNAJgHpN6eUbYxubT42PEaEYdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQx7GsdNo93CoKFNKuWiwe1iWKrByg72A5P4x29QTmsMUMUQFSQjhhTMgCdGZdadL42iXZcaEzrsPe5RqJhG1of",
  "key1": "5HiWTptX4dj4odofmEwm9HuE2D3otgKW89wzHtzmqWpXfhmJag7rRwkt9GGgU97GaFatohF8ZsQUAQXuzE2dTvLr",
  "key2": "4hSSobjC4AuSzz46eMYeumB1GZLLef9Ku1jwEYJpersgAXkbptBReAjYJtLGmrGD1ihf89peK1DGtw7BeDcDyXgJ",
  "key3": "WnXF5cRWtXhM8m3weMg6ertKMhS9bXVFhPkXY7EgSZmzVAXtSfZVYThXQT4eWmfGfuYQv5RuE7FFg93vcn1QAMf",
  "key4": "gL4jSfwN7ChqC98fTAHmTX2owQA7F1YNDBx7hDxWSgcX886Vitm63ZMUt2meWpY3B4uMnTSxB1vZDCkoUn2mwAD",
  "key5": "3EZFjWt9koiVp4jda2NsrzmFc7DX9HW8jjwPGGbt4XfkW5CoVQT6pUBHW2NHwvuzYDF9m1zwsBtXeFmkQsRG5xAU",
  "key6": "52gt25wDiKBS36XpgLWTNWS4bWNk7jrDzCcNjDtUzkSmYGwKb7F46TnDAD4p8tu8CC2BYc9T4EkiAnXZ3dZfBHXx",
  "key7": "31hfZ9nn9uWXd26FpWeZs6JsYqYGTVkgUEHAFq9CWEkXEt3GCbG21XCC14BAuTWrY1vyr3evyfmRzrnHmXcKpuNm",
  "key8": "3ME1WL6br15j3VUgDaaYcJVgX2hw2vFFba4hTYa5UoU6bJFwbsRwi1bWgQ4bfU8d6rV8CEByFCJ8NaoQBHCqkb6J",
  "key9": "4xDvaankj5AZqEQFuqM9Rbfmkoof7cMw7DVYw4SJA2nKkkViNiwFzL9Q5gRyfYnW2Un5JVzhAjxrePoB4burfwcm",
  "key10": "4SSxcBn6PFC7QpnuN5hnyFfvuGcEq3mT7XWu63aXLr9gZxn4TuycyjNw9v9tUfpSrhJXqF5wRuaBDqm7wjAZ3Nj5",
  "key11": "5zRa8Re1gyiHoHwGfmTL64VFzd1uKHfpLAxynSFafRc76iLRqNw4siRU1SZWa1HJAKY8pedBsyAipS91Yc7vZ1Hw",
  "key12": "9HKE9Bncqpo3xqRh9swTmam9nKxAuWzHqrMxKDsNcs4SAU1DZEmrs54oDf4ZZHJaM2L7i78CTawMS88LwspY5ZR",
  "key13": "4WTMzYEQh5fJSPCS65jswUeoe4spCTQpEWzAGrPJXKzdEbAZNtXgY5YDt8np4gjPA4MzCKgZ6VRtUnHkriFVxxyW",
  "key14": "4PXR1CrE6XjoA9T6zhp6uerBZeKtpN7UfRbwbvowiKG4gwLqSgk49N7M9HENmrWxVgreHyMvDP6DUiU63ZVnq55Z",
  "key15": "5oqBY9aBixv9RQ7LndgU6MCJurZ52p7Ns1DWTAtAZrdJrd6xH5fjDestHyZM6CBzynvMfd8NY4gK7DUptJviKFvD",
  "key16": "4VCcgMypfcEhHmbgZKKnx3fbgvgFDLqMFaFQ1fMoJML2LZdD2tGySSE1fhEC99xpYzokWrUoL6WjSvA6gs1oZRXk",
  "key17": "5RcNirp9SbJKZnY18bp698NZPCNUYYujow4HnEdCxCsNcyBgzXZXepCmbiR5AjgjWwj1L2xREvdVH1n9Bu9Sr1w4",
  "key18": "64dHCJvX3cepzwaHbTkbfgGDe89z7qnkbbtwL5eZTJXhuwvSFyx11XAFj35VP3TBthTNuCuYmB3J9QRBjWRJj6JP",
  "key19": "64vS6rLvSW4UAvBtN25nwzH1C24zLpup6VavfipoSJe8919MzpWXTD4eZfyr14vbYrFMUj2sE2mPZ7BAg6MnEinf",
  "key20": "54hRPsazhRt7QHXUu1pRmUdyvvRZEEW4KrQKSfuAooh1Pki5j8K5EJTUNxUMyWnC5rVTUWkXxkTEc8crS277X7gv",
  "key21": "5Cma8Z9hX8atZtczbWmMDBFmg92TgsApaWqpXZJ7Sjn3BLUgutCEyz4SAHjNuxeU6BKzerczVNQQbs5Wjpxj2qui",
  "key22": "2jpUHULuxmdnYCe9ARh48s6XQ751B3uhuqetDZvbNSz29jH1HQj3zDb39FDRtQRJPoEnjmMeKJJGEVQxgRAREqQT",
  "key23": "5csSft1FboRZdsVZ9EPXgNJELDeAR4dTY6wXz8NQWKDw1FSuhjWdMfrTDx1z8i3vhLZFYA9KzBHPafdgJykEeEFG",
  "key24": "2yZJ6B2Ys4Bm95ofWoMeeYYdqWhX4HxFccohUXS5E7Mz1PXM8etchwVAQmwogbkYa6MwiPU4CPL9KvDYtrzQ5ZFg",
  "key25": "5dXaS6gFZcouKWqk7B5LSf2owVrAZ4f3Sw2FarYGvUfSaFvY5REp9NQE4mGAEb9grKhsmTh6RddBxY6QguhZPMgT",
  "key26": "2hdrEes15LxYkL1pDxxqm4KM7pQufgNwf3JfQMNrb2rWTJZyjmBqxNGBLT9vRtT74tnGq7iLVfE4fnSibt31wgcN",
  "key27": "58hFpyjrZrGnVA86UjkSXHKWgiK183ZVQbTVTJLE69ukqwK619iMSwZrYruHUGt4dW1yfBVZPWssbh2TXY2PVrgV",
  "key28": "4ME2JkME8wR4m5kRoGeMtd5MiZE6CxELHetpVmWV7ftvtZGpSQxhKX1hSGamVAQLD7PzMfZfrJQoLxTdT7oxMhzs",
  "key29": "2MEBci1owJRAuiso4n9LSHwvLbe8onZBLKCLFwqpvtXo4JcTgHqkRuwEPEjkDDdydsTMrVFrXS7vkNFGQ9NAn2T2",
  "key30": "3M1XKou2KkpuktWquihb1vA56gEUG8s2Y65Nppqj8c5DLzZoRDJ4E9YFXv39uua2x6zpNy67mELHN4bbTKkKwbQ"
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
