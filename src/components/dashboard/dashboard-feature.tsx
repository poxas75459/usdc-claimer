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
    "4zy9xJEjL95jFx43dk8PtB3AoLVSoahqxyYCW9rw7jSz2ssYr1wPfNaMsbwMp6CRD5T9221j46L2pA2vYhDAm75b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h7wSmSKsZ6jqt1oCXHWDFAYXsCbjjXpdod6faCRX1uW33J8R465ukkF1WuSFpKh6qYKu2EorKvKbnTjsvm5L8sB",
  "key1": "3YD3nz5ARYd1CUZc326uMNvRt4DToRwwPDTcwzjzfHmMooAUs4QnZTm1wgX1sd5mgykT7CMhKTGumjFq6Ev9SGS4",
  "key2": "3xBQqwAT4bVgDRkSFatA77bdvNbb7YC3ds91doYKwMpTbGDJFFXko86SSFcTNhq5M3fXS3xthLiZ1ApGQe4rqxDY",
  "key3": "2CxzJtNLBpc31YWY6V43fzWd3cXLz7y7zScGVYLTGJcSQFtvorR6ehnVj2cGP7wee8rsAtU6ccA24vnZwTdmkSjP",
  "key4": "oZi9jQ5c8JUQQv4Wc7MwZ1udJMLYLo5dWYTwca1DsnYhtWutie4RWCWynMnCBPAGSmt5MwQq67DigefdbEcarTq",
  "key5": "2DLC8PxVRXcm6bhLYbrE1c8aPkePeSSXd6dxVQUkT8eMXxYvh9ryZxWjE9FfJx5vZNdJRGNiiFhoswtYBWtfXaGR",
  "key6": "2MbNrwU5RmR4TykfMDDGnZqBXFWkkhphUaeoLH58oCvDTTEBkK15sJNLFL7y1Nd2Gpr7W4NmK9NQuXHXxWQ87jeY",
  "key7": "uLWKeoU5XLhVHxjvcJLRFyoZvZ8Ed2CnCqTmgtmUk5NWGV1b5B4zXj2Q86C5d1vPp7qinawHndcWHRteokDwDF7",
  "key8": "4Cpm7QEgfgWCFTD8QSK1se6yCAChjSnp1qiwf7d3565oq74YkUR9DPRBU5r6Feb7DPxHkzoHRrodrHbPN66dDVe3",
  "key9": "BHisAeXDGQmrL7MMyBcooZgu1s6W9wZiz8CfjFCm9X7tGkQHkrNTwyMkF4o9dwgexDTo2u9SoGcc6o7CUYdp6P7",
  "key10": "3njEFTGwzhU2WKdJPyfU18G5QLqLrb4LgzAmBj6kHt2gisCgZ3w98h9gGLs75mYcsQh6FVLNCNBG45jgqXTHrsor",
  "key11": "61HA6HqgJ1btJjzahJgrAETFMacMjsDZfJnHDfhzjQNXkxMb2Tu7ywXgDT4s8F3Y9dDorBrSUuyQSmL6iEVzrQQy",
  "key12": "Fsxvkh8hxQdeD72L83ov3tRrPe4NfHKcQHnpeWaDSHgjSaVrtbGdktS25qbcb8H5MRhNHDA4zmXVA6xf4rydmsJ",
  "key13": "2Mr1mwW4xaMU4eqNd2YYfefcHD2sNnGPMxhquJjzm88wA2asv9rFyu4ut2Qzgjzj2NUTjLogtEq2Bm62PLMEpRok",
  "key14": "AZLDnu64JuXZeXdS65CNcJQ4UVhCzcwcESw4F8pYH7zGUVDmmpstG6o5zpdsp1fVLrRAJ73mkiC5yfSFyY1mpUK",
  "key15": "39xtHyNffRmepywKmUzNJitqLN3hzXD7jQJkboX6iDRCwvNmW5q3vG6G9GuZWxXveUiFTkDwDX8cQHo7uh4DbZ1u",
  "key16": "fEPo6qffR4wpghXbEJjL8vsSGdfc1mRYGfPZ1J7YXrjbX9Mih5p92mfLGQECPgo9NP6UPJdmaMsBm9b8BMJgsdj",
  "key17": "3oUQmBvYdCGg6uRKg59y6Ms7pJaiW7wPjwCV3PdgNscYzgcWZ5777R7yX9ufBWNqYBmB5933Tju3xdLfZkmpvTri",
  "key18": "64USmmwuXZnM816e8r7FD3BspinT6dsVgL3dSoZXnxuMjFw7Rahtug4gRpV2H9vwvBX4GVoU2cXwvQbzY1cmcaLw",
  "key19": "628C3gbAvetT7DSeDMJ3hD7nP26QgxMN3nxDeD2ufYrV7ETwxsmLdgFydYZg1yCGxJhVN3y5P5moJyQ1FhBAkJGp",
  "key20": "2dv1CCwu3MoHu6LiRMkKmi2FKH476jompCLt7FjM2MVVG6CPPmLJAK4V2LdSSXNwdb1fDNpWzKEJDkVTSnW41AsX",
  "key21": "5X6ZDtw9ynxxRP4uFEu8vjZrBN3MarKCV5PR2Mn4ZvvrfP3j1N6ssVRdbhPDN6iNZFThuuUJ1gnBCyVBSpZWfnrP",
  "key22": "4HVjUR5JLBZLi6pDkiW5CxykrqcSBmJaBKrf4DA6D1fPcz3QRAC3xnj5g3x12L33Dya2ABqhYJ6Q7Mygef854eZx",
  "key23": "2KJt9Nwh4iG9kFP4AAM27YreG9NnJMQtf3g6N7K43jwgfVTKbEUcDEXKeAJEv7Q3igLANqr39xxpVw2mxjVVMPoa",
  "key24": "3znbKkDMeAyF3QcvDDJULN14VufZTZXFPDZ5weSpeQkSG1Du7FLAT6MvRyJRLSzpQ2aktyVjbwjbjsS4vQhkAucV",
  "key25": "3cr7iBeVGMWWa9AhEuAkzidw4y13DHHT6vC5hNM1XkSEyW2sMFc6s4GbFP4ACTydMoKb3SwfGpD4gZBPQc9cX76r",
  "key26": "5S9AbGbTKt2ksDvEv7hRBxEbY36ER7srqBhWeTATWVL7P4BF6io6pZ5391WctGdqxqgFfUhhJjKxbGX1F4z3Voai",
  "key27": "2JZQ4VychHUH9G9jzH7Abdwfyt9KoaLVSgDR6bY5Kfv3SdNXxGkbWf1WZZ28voFwUnHvmsNtAtriCSvYs5y8ajkJ",
  "key28": "29atNKbe6kv3TGPdNLZ5wHBM9WSNWEruaNBLRKwQF16E4sb4uK4jMGgEeiCLfGUgGBwD3eaXoQLayPdMb8Y5XHEH",
  "key29": "3HQLaTzB6LDYPoXo5D7ATfUFe1He1JqXh6dUqmch1BStgjToLb3eoWMsUQVpdabm394XKMGCafmg2m64gBvSCvpn",
  "key30": "38HQaG9C9kT1uXTQ1HC91m1mpHggq7n4qgBG3HpbfBdMmxCPM4zYAya4NrXAW7Encq3xwkfqGrPCahXYFuihoFmj"
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
