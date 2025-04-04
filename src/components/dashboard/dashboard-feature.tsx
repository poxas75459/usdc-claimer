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
    "3Nodexh1sFBm2SJF1YEBnNHRh1dF2dP8My6TqGWp9gp2PuFMj3hrARGKEC3SQ3tJw3eNQ2DikBqCxmJ87nGCcyj8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y4osKewjMF9eMWaXBnbyRxkBEoXE6AUKKsLGuJsLQYoQj13XAjpyRRjK7pTwaNtnSP2jVvhu6oeuKuxUg5FW2GG",
  "key1": "3CbLU32CanB8M3Vnao7m9vnZ5dzvGzUhhp6DYkVkZhEvy95EGggPz3qnxkspuXJbZVt2XkJNuq8Lr9tFw99eTghh",
  "key2": "4rAd7VYALGsF9jNPs6LxKGXyJhpGDn7pa1AMEafJGhaF64jTUaYGM7cE1AE1JKBUQhCFbiLfAU1KwPm8aMJhNkNY",
  "key3": "2FGxGnKYKabNwoumtPApPNFBEutrohsJnhnWZSbCQAkEQEN1hs1GLJXvtKz3NFvwC7pasUDjqeCuBhXReY9K2yLP",
  "key4": "5th7PqNM74PDfh2cgACSK2xz8suv31YwEFgPEQezXkexk3ipvt83HFpCopMGatj4ytkgTwyynBAWR4tzA59RXXih",
  "key5": "4Xo5KYjbPjgWF9QaTmHM79WmRAHAGdqKLhr8zzFkCfe8rM5t3kLSkuYe1aGgYPRFzRVyRjidGTjYpDCsQRdBctZa",
  "key6": "t2LvEVedfdM6fnShmDMReEx2ULQWF4AWaJwxAVr7GymUUWGjm1NoSGntffY5naS8yf89SauMsT6Xbuzg2LBccfr",
  "key7": "29rkY1pga3RdKwd3e2Tap4yFKSbdwFM21Smjz9iZ7zLPmvHzCTNyXGK4174HRg7xjdCN1rtSqYfSQy7a1ZVKfQ3E",
  "key8": "26Y2yLoGQsEjis7L9g8y6MaNz1a4RMzD6JNP6aHQkAExVCbZDfchgBsQKjJWjaqhtLzy898yNuFCyuVrLDbmwtGT",
  "key9": "4AQdtVzVkU4eWwe6fNMHNPk2z9YxBrmjmHYVm3iY5EFcS3rodZXxZjvj48bfj9Rf5m8kFR7UV9yWyyg3DNPq6us2",
  "key10": "5Y7DVx8UbcGTYQgPPWCmqafXK8ssotnV1BRdHpu4dxP6JX4GFsFtWifLANyRiCsknBZa8MYugWhbcMhEiEMPVovs",
  "key11": "zsUvbkRm19QVvkSgaXKkPaLLaAjw549v5dB6g7fEKNYLZP4oDy3sC92LUcoYaFxxjpmS3iyA7hMKQW2XuLAWMyw",
  "key12": "MwrNzP34jyCwCHPFwdmxugC8ec5egWX4cy2AcTQ4YoSGkYJWPWGnj9SFSGh5ruYx5qb4v7qNohf7BEpEFHgwmA9",
  "key13": "5TiTfWU3ezKLHkXQ94TdJyoZmytmgphfv7hHY8f7GG6t9PDYukBDZfguEhuVAoMhxEWsVf885nbPrzPse1XHdcsh",
  "key14": "2oqD5NXgbhzRQM8aoKGFUAWJsNwJSm9iM9Jpv8P6TXiLq63PChdcxe7myntFX3ZEfpWZiURMDLFQoc8Gb4VJUu98",
  "key15": "59CwLc7xovXLDMARgnvRy9jhPncMxprgWPix4ym4Qa8xw2wfxKEfhoMHcznhcXWY1rHWtsTftWc96hBvNmYnxubf",
  "key16": "56f3uZ5Cs8MTMsmBUUQyyLfiCmaovQtq5dCtZHrukVzQvsV3M1SCQ6G14RpyGExwFtMyB427Ymfg2EvAnqgZggB8",
  "key17": "58Etvp56jsssj3J1c2e61QrgBQtD1Yv3LkM9tfQcoFte7dgvBcDVookNJNgGqAvRRF7qwSry2sfEizxH5oxy9BB4",
  "key18": "2ivtXYjS5EoeEG5BrEuRxg3VbUNjSHtcxJqRmWVYiXUrmh8r4gea2qekwFTSBxmXdtgEEN43fLxUmBBn6AyS9JvA",
  "key19": "4zFZthiHexhDEZdYLAZwLZjGnttqRft2MKKuQMZt9ovwNC4cvP2ze4Gz7ZY5E6tVZN94PFGMmVtZKJ6EieyY4D3p",
  "key20": "qQUZCScRcYdEcu8LjxGC1wNLVHnzmATYBXhKtG2r5RgNEro57k51MeWzLakbWmwFSc4V3E83CXT6BzNQ2ojM782",
  "key21": "5GcCt1eoeZLXCkkAXhU2GVvQBT9FMjL1eUJU35AVRxbppXb5BprUMf77jbTjvh6uEDZRbepmfAtYVdz99KWNP5U5",
  "key22": "4BaGQ14558sqyaWC7j2JBi5Nh7cJFmqpgwGmjqKYA6JnGY1srgg8Ki7paBqE4khcHBTUB2sTtXHjz2QtFakghyzL",
  "key23": "52QFiKcD96opNXU6VxDczDiKJU1qLJZVG3f5XAwjrEwd8Y1pLprk74QQzrQWBCLpZMJx4uxaMdH9UbrNuruNZLJ3",
  "key24": "5DjGdR7hEV2zMnGDQjSncxipfLn386p6FAUeUyM1ZrQjVaXv6HXpWWZcM3izvvkrtYHPwtDFShumooc2UDS4NJ8C",
  "key25": "4C7n5Xjm5CSutou8936USBVjCz4m3zS2rTfpSfxUeZmNWnMNkubqHp63h4PMVGiGmBCjHR5HtPbg8qHNMgXWfb18",
  "key26": "mTAtebriidbeQT7SPNWCrRcuLjS3EgDy9GPE7pDjWq72GogM2xCMV3LpEcJDUMP9RhrfDhHYQVWheRvm6U3bovy",
  "key27": "BeBPFPAzB6zvPeAxVVaDJJsMhugdCPdLsbBo4gqP5MvcPABnK8uZRH5AvcpzBe2WQJVoezMuDR4wCuEUds7Fm36",
  "key28": "KGeYmPqQJSMkjkqyRLZWJZ3C2ttu48QikmxVk6ygeTkNqvGMJATvTRjKcMnntmVuc3HSxQjUhT452KbrZmXCLox",
  "key29": "3mi7sTT6dDJ8YijgaLe8v6D6FaTrHD3H5FQmsegLVLYrsCn84vVwNpTXxbcLg81D8SRarGKKSgCLGg6DRYEuPV1p",
  "key30": "5k2iyamk4HybupR2LMzuVnnzVoZXYsy4Zt1LjP3zSe3nP5aqz7SSyE3dSB3aMBfr8D6nPFCfGq91fhadEaSifNWJ",
  "key31": "W5RGkW8XffL5sWEEux8Ut6jZHsBpT77NUPQQASRabSa4CT7eVqNKwvsUL5T3GUsesS3f4cNjWy3nszWUc6ZNPCN",
  "key32": "5mcbxFjor5X2wACydyQxpuSqAMN4SyfYSkpL3EJd2H2s7rAwwtncKcFuixEGBEQyUaNBzPjPjNkT11yBHS8QEggm",
  "key33": "88cWxpwFJV1yvMnCyZVfn27UfiEVBGNysaJRkxgXnh7ecK1gekDu7uvBdn77WbYy5ynuyMvErePmiQcPpfWhLKG",
  "key34": "XgyXjYAQB9iiUiPi3rxuNHSohoxEcvKxbSVmcvWpEsebPHfcznaauCJGgugPLRQm3kX3WmJQqb67mvbYM9MJipE"
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
