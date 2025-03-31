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
    "4A9FtwE58Qsu2ccKxU8bq2MfoACzCZHn2BKYzCc6L9add9yRfNSwBPMr5C42rZ2Pohm2i5U917eCfyJcapuEuRTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r1dusWxrL1ZUDmkyvb54xtoM4CsU9pGd7DybLzG4qJtx3QWPuTr1NQVc182EiLW6BMTNmpEwWPWcZsgW6xdEW5q",
  "key1": "5sxhagsSLihxBHykqVcJz4CabmQ18zcD1baDKVYi77LK1FBrfJzvek8MaWDRjWsTwaDxpQoYLCLZBDtunx4h3WyM",
  "key2": "3U9HrrF2Rc9V1tD7prVmaP5b5NAZMoGiq1rYub3UFeFLzKcG5LnrwsaKiBgAXouK27japC5W9ochX8uGtmcauXyq",
  "key3": "5vY8S6UShLty1wtzVhdHYeZMCpHuzD7AU5LSUg82wbNqakfDw9ti7nV7EfdW1X6fy45y8C5krhQmoaU8eMWbdWLt",
  "key4": "5HRyVSfsKvmq1ApvHreszErHyUa8iMGdWsAvZL4ZHEiTd7vRFT1ULj1XJfiAPgNM4ce2DFXfqEbKT1K9TL1V3sg5",
  "key5": "2GHgD9gPNu5d8zqJQD2ZkTbPtN9iTfbDXtjXHvift8KSwj8Z5viQHBoh7u4Ez6WDUmMbddmFw2waDNerdz7UusRJ",
  "key6": "4L42sQxD3H4JWHngmZW1uR73uhRnjc3aky72xRWiNSyBJwC8YDtmKxPvkARuj6i4dxoLrxBZ8mRC6FhLMvx3Qcen",
  "key7": "6HBthJtZgM6ahKzJxBZDfHjuUfwTW1EKfV5fpFEvwbmaiuStcFnum6iX1q3f7dA77qwweVcsNUzbpt4r1hW38vr",
  "key8": "2HdbVWSm7FiEFv73MDxikbrFgEqGazYMm3EHnLn3DNJRU8yTsz4T3m4vghvQgqWKFb4KiyPna8uZg1GqmS8vrctJ",
  "key9": "Uxk9HawBqvVZxmPWMW4B2Ydhbh1K8tV1Uy1prj1KTcJHFoUBSLNU8RLa7EtjgSQ9oNoYw1YdsgKfAepboUWh1tB",
  "key10": "4TMo7LAX1sa1rYYmiVSwKhundmPMkxynLUCzuEyVBsC1jbvBxjkwQMwCyEny8dnv5R6epDpUGYkfJqzPZJwR8TGw",
  "key11": "zZJ71UAb9uPLiFXcqroJpHT5x14tgAgNwCdwcaJBXDLp2H981LBLoZZSLRy53q2buVphiiDEZKu2risTMJazmbM",
  "key12": "2AMKsjSbeuLrMG9phSqtcbAVkggruK3DbUmrK4RtPANVaxuPMs7QyWeeM2C9v4RaHVVnCVJHtWCrkma1piQLwiof",
  "key13": "HTyJNZLxLjtzPwptZvgA5VyGNyPjLm8krKes1mrjD3cFzpQCJjFU7QFBvVcZNhBDwdMWqaPwbxeFMgMiGrePtvP",
  "key14": "34hEFPFTb94FH1rVZbiKr9xbRhRMdVSRg8XV2crVJkbd7pJfH7xmv2RnJk774wTBV6eFCrse9H6PkX8pmCQWwcP8",
  "key15": "5UFVfB8iHMQapjapWkZeWbQbxAcYktYQFY6pXyS6c5edF48un5ex4BMHNRPuiZQdFAiXj5zxWJjWTWk2Uo14ccdf",
  "key16": "4EcWmi6mzV2ywiX22mCzUFgsGeZCVwHN3DcDz3o63KyeDGqwUdGYknYHKKZtUAbzn1S8hECWpExgVcM6EKoBGHm9",
  "key17": "2RsNGMfB9eSrcHD8YKyqvhYKCEGFuCvmZhexq5bYDayWYp3rSDuqE4AMsnun8oHp1BdRicNL16URw6ezASmQUmkA",
  "key18": "2zAGxq6MWF8caghkykFfTNaeiBbt281fuH2H9ytDCBAZijcVVZUHTzuWoHWk1RvjTN3bdunD54m1BWm2VniTWNR1",
  "key19": "2zuZEBfZ67j9RpG5RQk8BcMg7MG971BvR6aAskBntgPs3xQQYcWFvQ8BrjjxgJ8fj3v1diFY7t7R7AUEMxUpHxsZ",
  "key20": "8s55SE2oEAHvivytQoFRTq4JrU3NXJtK7kUPPY5NaUmacTTQs7M9diz1j9g13cYEey1kHeeQTxeseu4d6J3WTUc",
  "key21": "5Lw8DvtYaEW7XCBKfYGXAiSU8wGezARPm7cmD3Nixc6GdDCxPDHjqy4RpEKjvHyTMu8gn1PcW32SgJ47pSCix54f",
  "key22": "GTZupB1b3dT3FaAizvmj4X26JfxmHebJSec7gocwbnyiKG9Xx4fQiPZjoeCYy8Hz6891SRwh7zpEMdfEsmiisbX",
  "key23": "GMA95skfyS2NBKZNNJmJfoK4RrumxQnrwUbQk2aWZS7ETw3sBqKwLi2mufPdSkSFsRP6PunTQN2G3c65nA8dpXK",
  "key24": "5Y2hXjgrCfJgeAuwWFwFgYFBHtTFmC8dFehcHfQbBWeVtm7XCvHeXWjL31V25WtvBd6TVHWUWLXYqjaLQR2QY33B",
  "key25": "4XR2hjDAcCN1q2HZ1vwPq4eneMU1ozgNq95AnrYcMYgksC1zB2eKzTYYW8xHWYQeFGMSnfrR563oShGC2PsXsVm3",
  "key26": "5TytBcLPYgQekkpyv58z1YDm7cYiYn6U3ic1guDA6ykUKv5UY7o7s3M6TBtyw35FiWmY7EUmZEAG7U554WRtKJPB",
  "key27": "2VUGhGddjJZ8RoT9NLWcQe8qS4u2U3YZ4wBKSM8ZReb7VPEYWRtWSVebB4CooRXkdbMc3jwGbkFRgSEmTgFQDzKj",
  "key28": "2muAATkLjkjVer1tkWC9Cb3DBuHUaTi4HZYWqNYVpgmjyTki8LBs1AckvuhjQRS4D7vkAA5G5deTT7wpicH7Q1AL",
  "key29": "3druEwDELbHDU8HkLPPvqQmQyGHbGYtgYUeG3CUdjSzZ8RimYCAuSWU6PeRpjgRtXg4XrTToitU8y34ygv4XiMNF"
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
