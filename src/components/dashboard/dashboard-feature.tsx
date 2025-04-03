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
    "5WDSS3CpAsJTwkjfjzZntSLNNMBmNaUqLui5D4YqBtW8MG134wNM3mPmZVzXQpLCdjEVAf2bDT59NYG29P2u3BKX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51zSTSNd7punndkHxCfK8JBcRphtoeWt6atchYmhq8T7ydWBs3AHgnVVcmBY8Mj2WA1Fd639J4TjPniE2bchnBQA",
  "key1": "JhwZmJfDPy72j8eVNhqtKcumkt16htFkusbw5wFfyMmeQTneHEuKNBnjWS6wTmrXLghivYDo678psYM2zLzYi7f",
  "key2": "2s19ZtQLrEZPyScRDJAwiq39CvRyqtCpXrTmJ7jmShQ5j2m11vW8fnxAGpt9eJ4CFza9t6rDCAPujQ7dEZANdJhu",
  "key3": "3XcD3bMoeCBMguSDSpkjRz41VbV6TDeh2pkrddEszSiLEWjUyPmYZgrZo6rkseTCw1oWcbRBE6hSs6BVh7kwLRps",
  "key4": "5cfCb1WxtwGtfGULdJhyYCve3wKBwgevz5X1EmHjAhchixRvr8xodMvSxvAKXrbNDFPUbXK2Z5kuoDuBTymiHe26",
  "key5": "3qH59D5C8QRMsrn7Y5jBdosBQq8x7AXfmuDWyMfjAxhUanDKDQeaHwBR185wLhoY4RCcSX7FUVabFa5sgrZTAudK",
  "key6": "2kAs9pU8XT7Qfm1Bqh9m2VsNJwE2csmhsgdzog8uU8TFcbqeW88s5cdZKWsvJXScemsNMgyETtZcYTFYgQWu3LqH",
  "key7": "5vhG4Br1imodghsSzQJkyzFZPcZeLaB1emGEVK2Ls25htWkt1Jkz19tv3LDvwnsk5xptj6ykc5xmMhv5fdbdZFt5",
  "key8": "63LgTX4918pi4A7735w3fdtNsLgQBNL8jTDoWRtnnAKP6b3Lu1Ud4bR39ZKwE2jbycSp8nVJGUXByaYHesrxWvvR",
  "key9": "iT7khq3ywHXcFPV8MrzH9cU6S6HT2Mt8p6hrHtGhqzYz8Za1zbeAFqwQeLTgKZUqLWeytRBosbTERhmSKCSFTPV",
  "key10": "46HeXW5nUhShGUvLTR2wLhKXVeF6EABo8GzQJk5mrfPNZx2wJNnasFfiygrKGroAYt1trtE25qenuCGvHLgaHUwu",
  "key11": "2cQLW9NdwFjF4QpwmkPFTUet1xXpZ4nMnoo2M4sWydrF5PdBPW1A9ZuYhKgH8PBLZekyFEhrnqc3zrX4hrjUV49S",
  "key12": "4Nb1bpPEEPkaCRWd7yJ6dz3XjgnUZNBVhhFAWcLM7mUJpEDJrjt5Gn5AkN7YG2Ad868NaqGSNcXJp8iXDqeqdwXu",
  "key13": "5rin3PctuT4Koyaq1foEXF4tTc868GSY3fVh8ntQruDYRfnQ329XpJcEidJM43qpMwdhv9afngZpcVJvpgcE4jN5",
  "key14": "2TVWrFqNkqU1PKrPP8hf9PpMjA31aA9zLZdJYKHaf9BbhEuDiXCmprLcDVj4SLi3dC58ert7Gqm9QHkbaDQ1YkSy",
  "key15": "4wrLY6wmJ5x7RreGwa9LfoK35FyE79qu9bvmbJ4wjRWZDSXVUoHGJE6f7XzZzhxSx5jv83FCRAdtDtsV34xs9GHV",
  "key16": "5rK6tEfUYSo7UsAjrvz3mUSkLfsBNrGP2JTmGCXivsLFXbTX75Ci3hXJ8GHLYCtCTAMzy7E8kQuHNSdr4qoQtSQz",
  "key17": "3d7J5g4rQLRGpAqL4CuSutYydAWt5skYYyqELwhWP15boMxbEoCj6zjAr63NCRJLw79xgYSmT5CUHGA52NhNy45N",
  "key18": "2SCjZTW9gK29uqeVnQX5Ubg9pHHdpqgaVYEyabeSC7dSNLqitALgxF5D1w9t6jishLrQ6MEjMTS9SueF4kBZB57j",
  "key19": "3QzDLM9EAMQrbWXxEkX763anqtFpsGGqGhx4C4oA12tiu8gYyArq66K1pZvQdmrxLejY6BuoWTysG1As7XzWJcMa",
  "key20": "5cB51VdS2a1eaS7eKeXmZtZpmBFLwXvf2wBXqRbWPLhU14UWqZtZMbWEM4nitCTcxsh9fjNPtfMoqGHmS3xm4xPL",
  "key21": "Rn6bmWfTjzorH8Hod3w9eSRrD7KEnaksQQVa57GpsTKjRbzFAtzZv6efyhRogjeFVKcaj9XBiqoHCmXjRr2QFXP",
  "key22": "5v8Ggb9kMepcMn7UiJ24jL8XCiaEMs4BTEZeQVdbZfwN4NWdMFNe6UkSDfvxFfWZSDLNrn8Xi8SCE7UPCzk3tHsq",
  "key23": "2GiiCJGCzVZ2mroLCgmZah9z66rYuERZJyxnLQgpcm6PH9KNFW6ico3y7CuuJTUSEbKF1ACKZ7jzhJUT3N9MuQEP",
  "key24": "3W93TzSVNt6sYdaKoWsWt3trGzhtiFrgJitSMXFySVZB2UUGrgJnFBmRYeZHKgSu3hRmLiXCtyiCPy8CGqv8QChy",
  "key25": "4jh1eVwsd3xqLzsXNRWpb5kuMKopkbZcYSb7N2eqQsmKLFAKS4GKHaTozR2SE8AUf4fLDHEVQ5EBrqz4uKePnQ6C",
  "key26": "2e6HqXeFF1iJKnYkewqAQaEwa17nd8nmLP5WY5PSFvd6j3pey6QABHpnktLeCbuRHLhSrCJozq6G5J9kwk2DwfxY",
  "key27": "3DvJXheFCaGsDJLDuyP9t5zgMkF69iFvGnMdTPKioL2viEeHKV1itdi5DeVWDzYpUHfb7y6NNJAp8Qq9o4PrAgCR",
  "key28": "5omg3kwgVBUcmkKy1AZiT5zEmcF1BxnUmb5jLm2XWTsV6kRByRr35WFjPDBtcBeGaPySYvZdvLM5trPRVZ8kwv8F",
  "key29": "3xHHKmxhp2XA79ZVVLvPyy3xf9LSzVGUUnLELgKxf1jhxxnpHsye21mH6kjGZPrcpkKN6sHZxbPZo3fFiHm9KKby",
  "key30": "cKuhqEcSsLyYVrpyCSMKdg9Yvd1Vp5YFKgTFcuKzcMW5uaNg5QVsEyXkosLvXy3gz9pGatnddnawMuAnWk71K7o",
  "key31": "31c1GjW6LPw9xiRidxpB1P11PHDAryETtznqqej8eYSGfJd3JZBB6cE1MiCLxmeQjn8B6VEopkzw4AdSoGR7njbZ",
  "key32": "2bDEmuoc1aZ5ZVnsyEKc8JxCBf59ssbDLbSKS6DHjHk4N8bN7Cyu85dvMLGb6MCNJ8nFAFKQwE2yu49Z2fTjcP7u",
  "key33": "6dFrxRbQW5gnT2viEbaunD5U1mBEe4mPrTTeZNEc8V9H5NN6zSkw1NbhMXZna9g1S7JW5cjiDyuXgQT5P2yEj8K",
  "key34": "5Erg9JmUPjD8dNU99PPLvWT9hdxVNFe1PBVtt4LGjszaUi73UffKmKaRi9PFXgPMXx8fy8tYrsYD6v84mZskfq6E",
  "key35": "3ZvJ9dksno4UFTq9L1W2EhqhHCr6Ea3EaavGmyX6ohjGsHDaPnUME4XEaaxoDpSFVVYxJx8FSPgy91HZ9Cjx2KRJ",
  "key36": "3e9vbCH9PbE9mTB8E6tuS34ytPw6NsiMBLGkJR4rCtK7EWjLV5wTTQWCmY54mWCLfaxTQiLLpjRWEXDWWeCxJwQY",
  "key37": "69FPRTdcpV7fKALqAq3j2j3F4ncpbQUs5sMkzwpfLZXhaExDnUzzEDrxUqRKRzTvbgfptJStSbVJi2xJp27u79m"
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
