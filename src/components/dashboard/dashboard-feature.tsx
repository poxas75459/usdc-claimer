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
    "2iMg7VJ4bZERvgzm6T2siT49HT3fUJjvbvuXPVDno5XPVqwoMqctQbDUE2ZyfvXUhjKub1nBYJAkfo6cDAtKNhNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XAMNNWmzTJoiSJyr7Si7LkPoBSMqLaTudSxjd4XUjWXTXFkGksPGDGC7VkPhnoTzusQbURTE6hHPFPc7iAsjZkJ",
  "key1": "NPuooAhTkVcgNnTgtJpdWab1AcsRN4HaKZrKnceyutEBoD2XYSKsJ5NxdyHbAQ5TZksgZHACbLppfWqvJJKjoXf",
  "key2": "rpje4eE8jYLYHsPc6Fr6Hdbk2Vya7LwHEVribB43dF3Xsu4fMVgfVJawHjrmceEu3mzm8AqzBGp7wu2cufmMcQB",
  "key3": "7ShfpT5PmuvpdfwJ3z9fWx4Ry8dpwVEV9SirSGbsab5fxt5Cs8meG2D9AiM2w7idDzoFHSYzAWSzwCG6ZrgVGJ3",
  "key4": "2Y9CT2nSUZz4y3SpDyrFYx42CsVL1VvPM9meXqCB48gjYmG4HvkybhmBvmBf4SPPjAt2tTLpBdwHTZVT8X8vmvHb",
  "key5": "3f7VQWWKpjGFM8UcnyapxvF1KUiDayPTeSF46Fgsgt5vs1d3B2SZ9aswSQxthrH9fYvV9mzLkVb32Rz3Sxyw9919",
  "key6": "5NaABQMQzqHeNCje5s9C47C28zaGBKASU8HFK7BcKYUkrZVja7T1BLYXsRyW6Jn8pG2YRWpLAGczsKTwFGMRwQgn",
  "key7": "3et3LFJcynTwuLM7jbasWNdhCE62ayUaP6SDBhFhxu2VyrPL4KebHWhHUFyqEvZ8Srt742gFztFmgsYz8ticYS3w",
  "key8": "4AMsvjZkzPJSZN8g9S6fUg5eWaBi394gWLmDEUhJfvZwQUg5Y2uYipWr3PZ4tisCSDG6TJonvGmeotUr1Af2uD79",
  "key9": "wBPUScNdRmvNX35GmiYQRGKznuDip3tL1GCn2tyVmgtBwo37yXjaLSJqhv5gmuLgCuH5VGuB4oKXa2a7mJEfVDv",
  "key10": "4GtGFtYtWWGy6r5e6t9gwTqyGdREgvVYFruQTwAzs8uD4BwfS9oV7UMa84JnQeXBjjSL6wnQ1bYSe5mcoafxNFso",
  "key11": "2NS1k69Kfmjx3UM473Qt8XSjmyhn7PEqiyo9WMpnQpp3SmezqSj8NWR7hDQz6XFhMEPeYrLugxcASFcUhsFuivnf",
  "key12": "21KtmqyVHeoHjV1WPUCukMVSoaFJ6rP3UvXnWUvKvkTu6GN7uwseJEHoSnYkzXWURiTh1zFe9n1GQuwVxyjjgEpv",
  "key13": "Ca2pUVrLbKBhcRsZQBGjJUPmBMLh4Tmo1YrePhqGK6bcfSZ7wfeB11muJAUhE3pV6kajFC3GSxb1VgzK5HMriT2",
  "key14": "3D2d8FZznt8VbdtwSMy1QD4VTjDqbmcxaQXGd48BkZa6QV5gE41SS2nMWtTAXeEtPXiwibrdDELiemgJGBQqeKFE",
  "key15": "2V9gG46ePGBnYtogtH2QTvzrHnM3tD2cC1hN4QNGS6w8WRbYHfuWYS59bXs2o9utRToDNs9xKBw7p712ZqA2wAst",
  "key16": "6KBHPsuRN6wtWvVEoBJ4QapgWwvTLpnBFRHQhBo4jU196vhiSQPWd44ToKWVKEV7LvQ7nXfRRYf6AmyUJSrqHBH",
  "key17": "4yNoTbGxWCPnGxAjoCu3gnNrFxiKdtZ3taJC9oMqbc42sorCBirs2HAERnCyaGQVRxHiVqYqsynWsu7mHuXvAgCP",
  "key18": "3fHxcBsYa9p1Astco2ZsmgQWNhsXjF8QkUs5u8szoMbmgJsk5p5keo9X9iqGzojB2cjEexJ43nG75ngwFVZP2CE9",
  "key19": "5MB2aiZbaSVotjTyxteHK99JeTJtbPmwKeEVtmhSqvDWMYYXEciCedCiMcm8i3oNgzc9m3iLgNARqPcZqrUXEkR7",
  "key20": "3kisvghy4wiwQEX7HaPy1k2tfk43T7Ads3uTmAZbmkuRheo9ueuSfqSTvCmaLuEqBMmjtr8npk9ZrFHv6K2itiKB",
  "key21": "3MXN4N9YgbcAqxQLb21sTnWYJtZmbCgPPPRQ7EGJBxhkyYMq4BTRfHtPMrhsvSeVZ3RjzPSgXeZ5MmVvUGS58rtn",
  "key22": "4eieFZ6krCpMxUyE5jPrpdLxnLJg5i89g4MA3eXi2GdeofvSTVuwsmQUHYHp1MHLALjUToBiJiiY1VF9dqQUnznK",
  "key23": "4AmsnYzu2c4FjhmhXhdG5MMPf24LQgzbiA6uE23L7Bdesk9Tc36evT1UnRvnD6LsfFtxfPS5ao2MNMMwGqZvucJH",
  "key24": "2se7ATxT5nfJcTYj4QbnZiAFiWBAaihyQu1nkHfEemKtTtPotVj4853fzCo2uDJKhJJm2okFzsFfun9jbnYhjRCB",
  "key25": "2rWSkWbVddgzjveEbNAVxuYCuHAmijJSfNFrmvak67U41Z37cggBuT8ERHfw3hwzdzUfBE8JRWiech8FVM7LpnL3",
  "key26": "5chLnvE2vhjkJjSi3TAEcD7LdLXYUEgwCyqmTab15B4HM276E9WGhPLnBLSezKkTC8A3dnb3r2Cfm1Upk3QpJqVx",
  "key27": "2bCwxwTzsjo4UfNwvPmKVGRtP2kgg7tS7iRU1A7pssGggKajRDWk9RrLRq1ax5BEY1HZxJV8EcUBAADPuFos6ABV",
  "key28": "2gdbta75skY1fsB6NVgAKzoZPCtiTRtErKHgab1aQHdEdbm3tLd35FEvXd4QUVPGk6Uj86fCohwfPL8SUTotcPN7",
  "key29": "2UDtaDUiUrNFsrX48R7aUkhiN3z9AMoneGrtEmPcFveyb8V4YXWf6GJ8Rp3wSJWH75JzyqRcZ8St7vihvofhLYXf",
  "key30": "5D4tn28AJ2EqQunPw9uv2uSsoc7Vbi7ubLHfzNTnaq4BPP2Hju7Sgur61NC167RFrVitLW4goMDs2XFC7R3NUtx",
  "key31": "HJu1cMpLykvB9deADNeCGS1MfDcd414zLBVGryg4CSty4LGFsopgA8j7j8G3SrADAbr1f7Mi3P8nWndkyx5QTDa",
  "key32": "2MtQ2h1uD173W4Gjm6TiqqprDTCLZy7QzMy9V6yeVqvvCe4C671h1nJcs2pbLHLxFGakR9zB9ssQNUXLZgYfetV5",
  "key33": "5r5YSwdX3jh22Y6Bi9Ut1ka6mcsggJgnuWx864fLHtaMU5FkRoLUP1vjMR8ZkpiWBEr1YkAWErt3VeARQrk2T2qV",
  "key34": "P9oHU3LoHAzJJXXib9sUdCmxS36db81qhRqwVCQBYVjTN2NM7JrHzYajNiSWatJQmhonsB89kvRvF7jwvDohfC8",
  "key35": "4i2mEsMRTw3b8FFvQJau1FynbGL8cuce7GpRj8Swjmt4x29VLRBhuPGFAD2v1h82xZAzhwS2pK5Gr6efY51ypg5h",
  "key36": "2wsXCBtfZgUvXynSoZCSL6Cmz2zPhHhXWph5z6SakBG9fPSsfdxmEuWfNma227LurphEo29Nkr9GoKwP9SdZncsh",
  "key37": "4CpVLfN2wp8c21T2MXyZHdLxPZeishE6EcdoGrDvVNEm1215hgePZQa2YQXX6nFWC4EWTTuv6mwDyjsKhoycGe2h",
  "key38": "2uqnFpwnjF8ZqyWN46FdJBdtr41HdiRYaFLmtkCMqaTmjP5fJpTR4BVkxcmHjXbgQ7QGPBtkmgZo5EKmZHnn62mH",
  "key39": "3DyvkKqYKCZ17R9F4zBqYDjYp7hHqXLXUWXNULD8Lz9G3z4z9BYKpJa7aTJN7UxvntqKwymjQ9w9otgWW4qUjDWR",
  "key40": "3hNRnhbqxUTaJi6VRwEVdPiqvvPKGfd5F4ErHFu4tNRPo76vErH1msa5FFFpCh6gq5ZVJMJm7FvDWe7WZ8633tAk",
  "key41": "46DGbFWqQkaA7pLtmiWEicup5a5oMcDdfD5xVTRkqPjuxtayHKAJ3LAL6jQYcvBNvztr2pWXaGSr9hTwtUfj51hv",
  "key42": "epdXsUqdbo4qyWH3TVCJn5P8kFE7nxYCnMvusob271GC41CxbxchBvffVaVS11ARQraiEbJc9kmvD9bdLiwbTdC",
  "key43": "3xjFPA25xMJ2Q6Xd5GcZQGh11dt8pb8jyx9vG3GUubKV5v4JGa4jdBrvThYBPFfhf1jhuWm6Uiv2NM88awUjuASw"
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
