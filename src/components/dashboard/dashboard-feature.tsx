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
    "4R4973U1evKoCSDAD6NWwFxpoxSiDNdzbGTxsWqVEkAZYmZcfF1DcqjDm6t5zXmgGeP1GgY2LJZDfm5QDdf7Wdjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PNXTS9TS6Tu4p1Sp9kRPGQSnoCuUZ4jqWC4yPtXn7R8ooowi9ATdQ4Hx5uXFV7BVLj5oYFD4Xj6gXrNkqEUdxrJ",
  "key1": "4LzQXevKNsUwhmjbFaATn5zYuf4dFuzNGHQfzDRiMJkKzWXJv32bhib4mhqCvTL2QRZ9XNmj27u16M4oP5vr1vHU",
  "key2": "674uCGxkzhFQSkG4TR4cCETX2iPPwrouxTJ3FN3Jws29zHxhFuZAhwK9hahD8zXzuUvogr7bt2zk1GUFqnK9SZfn",
  "key3": "qHHfCR4bjYNQ3BFQDqYA6KQDxwxpfQ1HU9n3YNsmmZjVCSzgziro7yf69bbpBMofY2mGV1EW98iaDFc8XgLxKjG",
  "key4": "3nu5ompsyUdsFpVf5FQ6r6LZST6FTAn2khZYV8ryh4gnbzq1SGkr2LbaWi6wknSWsWE8HoyY2f8oZrEN5BwgSsG2",
  "key5": "3wHYzKqKCZcH4Jd9A5ejTrAQcVhQhLpSCvFPajvKG2sWLoAj5bB6JysRaGSynEuJBXsCNZF52qjMSY5uWQRLBtZy",
  "key6": "51d8JwGdfBzn792fg5kTiD5EGpWXcwxUAhy2BcBsMvVzZgWZykUHN3RFWLGfGvc4MpHvG3RPwx9CV5XSCfuqrTM6",
  "key7": "4vZvWzdnKLZRSWEdSWGZYQobDycqcuMuYsywpimzwT5yg1iSpWptT5AyveYthgcv6Eeq8Sphvisky4hR164NMGma",
  "key8": "48upSUbGE4ZQVU4ymQLmmnM7oQ5JzFna1TbQ8SY1C6VDXdXMdqz7KvsR87roQJbgYU51dasYoFAug1P8VtrhYtY9",
  "key9": "4NatmuhmKe9vE9BdsFnkMejGDnAyBsXwoZnFizcM8jup3hxWc7Z8wXJ8AKnTFNVfrGc9QGgxVArN3wpxQG1TqsxB",
  "key10": "4oA9EgqMJDB7nXfeuAvF8Xf7pHppSCwKM1nc2oR7Qdf4LgNsfExwJYq2rkf9gBTL9qVCRco9t1qYyW1Ji3EmHXdE",
  "key11": "p9g4xYGjkuj4ikuhXAnAXPB5UgYoqo3PEEyBG8dXBbpTmq5Eacc1as4cePRCicxhgedroLFeKJgq3DVUJSE4rp9",
  "key12": "3mGJcwPQi2o5XLcsSc5Efri4b9c9PpZoJMf2YEjNFRDgo7RFsF7e5h6GMrJgCWWtSfmT3PMoqztamdWvbDrwDB8F",
  "key13": "3FFFPNeNydFZnj8rxmgWToJJhZEJikhZJWEw2tLeWjB6yQJ3aoUTvBmHvHRMESvbZU8izocE524zxajRtz4HbAJ1",
  "key14": "5BfuwjQc35ep1wGMW13PEwY9AEcY1W2xtrCbgaXd1Qo4UyyRFXz7eHNMfZyVASbze2JYJgwWegrCH4JEePkPUZkJ",
  "key15": "QjqpQzm1tiK7nTNkGPSwsrAd4WfSHEHFG5LUnMqve5xzuGMc5mrRJBhEAtMFyFa7D3MT52MM21Jtg9GKo7f43ub",
  "key16": "4gWVVNqZ5UghoYEu2kseKKNUoZe4TUVqVHLQao5CNTRQtEmYMqLfxBXsERMA86SHDMWcuMwvgHLAgYgXBtgVJ3Ma",
  "key17": "4rDWbTEJALhZDc66bFZrGG78vXPV1Hse6E3jrFbTTSrkcuVNwuEwSuruKB6VmLVtDQFX8u7QSwxksBkBXi41CvYH",
  "key18": "278uLngSt4htHdzkpyX3qM8W7KLTmpPj1zMMKkoUr3DAPrPSG7aB2bgoG7upYJNbu7REKQNvBBKgHxqiP5PeWbAa",
  "key19": "3nuJWh3mN2C6NVHuLdvioc5QykXJ86Jf225gJ3zU4yR98iwXafBgsKq8M8Qf7vJjRtyWQykXYTXxq8pskYfajgMG",
  "key20": "iP7upNERhpdhokwG4LjGZ32oqELQ8g5Xb2mvTBeFH67E6XwAZPQ9LfzigRYyp8uvUaCFU34rCnC2gEVdLJxYHzn",
  "key21": "3cZz8Tns1NbsAbs3PnJMNBBNJ3v7hXLQQaBJJBzgCaZcpwAY4zpcq3jugs2ibkPkTZSWKsi8xvcqiyQgrGDbgx9H",
  "key22": "3pw5gJeqW9ckTEuR9G9tNWeP8P7sxXMPXcfe2He8xzexoaYksSvJtva1e7NaaBwgfankaeAYxDVnbWkQ3QwSxzeg",
  "key23": "4mDSrvfNVU5CHZP1FaTssvrDMfdPuV3c3RcybRpyuue8AaEfxeFRxvUghT5KidMPanVdbqpDwM4XdGcGyMWGk5sV",
  "key24": "3e6idvEq1kFaxY4Vaz34XZdfeBYnCMBixn4E8bquWK4aQjKNo3Ktb9iu1tk8FVhePwLDUdduLU97FFMSx6tEcTKH",
  "key25": "zxt9EAzMMiH7ENVnRWLENTE56mji3qGNSUSc3EbCSFCUk3ECYgqSzb3yNziKYBWnF8pZqUjLNpcaPZPetyBJnam",
  "key26": "5xbMCmbjNLCAGc2j4SohCdtgTm9SFtrd6fgDg6qNBpL1HjN5TCZXCcSq8GYNBXvSpwg2zWfDT9CuVaJ8xWCQxbv3",
  "key27": "4ebuPopeAb6mLF5VKzHWUbs3hzXqMneetLvAGugdXFfJhwoyENrv6vWoSJXJKqHoxGwQbaU8D6mVSKfy1a2Qu7Be",
  "key28": "gWTpuUCdPaxpxXpKR2VxyPF49gAzwdqBDBUrHQrPuucQkiyoH82pSWnTxcH3oc8r84hAft6DsuLGjRsmpYUBNBL",
  "key29": "QwzKxZ8eXxzuy1HXFkuggrGWRC9LCyijhazRR3jTouK2hxhmf7ecUF5X8phfQVHt8zYg7scCka6pwUM9btb7DrW",
  "key30": "3W217yVTWnfuVn17Vm1YkxBhZ4esEQd6z3h5WPjePscVM1hJ2mFHLHNsToa4wG1T4UHmGuWZbMSwiwdAYD4ntMLP",
  "key31": "5yHBQYdu4HK8tGHcFvHKesDZoNULixDvBSWjqZL5JXSQmMu7idmsdQvrNenviWRpB3bgqu62u3BM8fbDdAvQyyXn",
  "key32": "5SrZF3jcWn1hSziYBpDGva9YBGo5jPNdWafRxscqGcn54wvjKd8NyakHSBJNybZGKBrMc617AfiePMUnL4VA13Dn",
  "key33": "353obsN5F6UMeSrfbMkgHwdcYEzqXSWwLCAY6VLP8LKo5vMDHEuVwZWGWEPioEQFqstA2kNWMgfTxBq8G5FL3Kcf",
  "key34": "4AGeLQC1DUQky6MrxXpp2NoWg7xGkQNpqU8HQVxCdJpu2sGQeyGY8Nh4ctsqeZHwG3VED6rPQuct7gmzjtXnX75q",
  "key35": "58zmmXcVxmyUaRQHcrESRri5cvMLadEET3a25kQoBz8vnqFLzsA2ycVX1R9DDGTFko8751Upkj99shzoL7uReLhd",
  "key36": "2Ua3bppXhbp3MeJ7N9cB2PYRKaEE6tRcxNwYRN4YXTQohyJwFXghjgpcFn1MTuF4zXPiFPsxisaTTf2fCVawmGc2"
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
