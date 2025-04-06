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
    "41viXW9ypnJzNHN1DusnnAz4yexke2GPnoBxZ2eAX1buVFm4EeyB6NWpNbcEiwqeJVDWu5V73w1JuS6chg2wMzUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyM6jhXU5gMorbvCLYPKVgaYuktCc3QYbLEVC9SWqL4PsS4mnAA6p1KCh6LCEpSmNxHU4MZrq5vG6nrSPQC1WVB",
  "key1": "WBeCdgbdKqsQbN9289TedCXSWJPJKrwRZuR6FtS672RD8mLK3aWcYbADsLTW98knNYQU2PCZXoxarNXYFzF6cFf",
  "key2": "5Gob4qsvF66FM7piZyWBduhQ7iarWwdnTjDVkJooPiqqLvHReeCoksM154LL6CRrxcxSvdypyBNLm3F48xMrRept",
  "key3": "2zH5daDHfjLdb2BMBBPh4tBzAZXqcWezAmiBQ6kEinSmZ2rC8aYusckKba8prerSkU9DJpM3KEozNDqG6gVavGbw",
  "key4": "32JRQkrokQMyPJj15dDfCjhsx4jaGHBNdguf8Aq2QxeKkAp3DYZmf53s6wNbgsnwFPp6wWbCEgRJiYXhB7W4nRnJ",
  "key5": "eipQxHojGF1fCPAhYesjp6bHvYEBvYabt9VzT7tvKct2K896YUJB6uJFeuW3p2EZR45czdzF3sDYJw1yq2oTW2b",
  "key6": "4Dt9ULdF5jd6SZoQn8xrqzLRe3FDCbhyLnwYerUMoWrUC99jx5HPki76J91ZLJpmFFUcN5pmGUwe3EMdiUWAe74Z",
  "key7": "29gxGSHW45MkefyAF41Hb5ahsb7cuAULvLgqT8BJkfo8di9aVTVaiPiN7HAYxGayjDQaaCTYz8KpzfCwAW3YFcra",
  "key8": "5F7VNW7p2dJMdkG6GitetSoTcfeeJSufxbAvvEe6LA1vFDdArRzbsfqmkB34JniGYZGU7mbumPj96dmEwZkRJiGL",
  "key9": "Z1odDc9GHfHSEGQ9SQVeLfFx73g3soKs8dVJ1R2mff5QEGzvsgwcTgmf5kvK9MQNpY4mP6DQEeT9KGcE5jwFw32",
  "key10": "2CS1E96ukgmahAgg9sW6kY7ApYaiTceRSt3Ki459dAaoUXEuwfU18bMgRDXqfVUBZMpnM2rDGn6byF95zi3FxCDh",
  "key11": "5Xj1ALa2LHMwSyjxj2CCwMc5jpeaVpqAYAppV4dxL8LY9Z6cuMUFY4kbcGddYdm4m8spbSyfYzB5pkbv98FU8vK7",
  "key12": "2FXNqkUiAZiXuWFzo3H9aTbZuHPunPacpvsmcAdXbGpomUjkQ19bwc8f6SA9VMeyMue47zYyX68UtBLKgTEYNQ13",
  "key13": "3Uwv5qBXhPaGzhAtg3vTvTMXsPUdY56excH1wAgDjyGtnsmmKGrq65v5qkoHZX7bbJ2kZzZnQ1RBNEwuftjH9Deo",
  "key14": "3A2HCgjTv9nPezyK8RwJFTMDPQDbC4t4ji1KcVaGQ5eYcgfHTmeEASZPa6bnaMeeRS5Z7KfdpiHZFxbzti3L1x5c",
  "key15": "inTzpFyQjFwHCptXQzSMKSCmpiX4w4kdSPZMHrd1sB7f5ZTyh8osH1AXrV9nk24tzQGBcTHSu4nNQuA4AHFLWK8",
  "key16": "3yeaacL41Qm7qUSsFdrcVGDxKXxJRJYYE6BXhyAoCmv2dcEcBDi5MbEfEcBszpXV4i257joAvZZpEBzvFBQ4RXWB",
  "key17": "49ZTrvWCUy1CNCwxnrf3eR8VZGcDoY2EgUXy53tJB8uxp49KjafoqyotZxfw4mAyRFuVyX9hghPFpsW66m86UWyg",
  "key18": "GCVLUQRyRaS3HyntbvDjPdpiwb2hj4KGCP5FbQfeTaGHcLNCwWWyPs8dqtwvbY3NE9cGFXEiQ74b9dLdpKT14fs",
  "key19": "4zX9L2dak8iLFovaeYNfgYTxq8suTN5QEuzvhyJRv3zpYN2prZxNCA5gGQQhJSV4c1WDZygCKbJWKspoE7ri7bmr",
  "key20": "5faf8A2vZngfV2sYXNnzZd7pYBLYkmPoSwYW94RzxAaSjxjjq6iQmDFRQYQnNoqzn85aTFBsJE4jJdKy9TbN9mmy",
  "key21": "4qYhiQqW2pYT5ZyEHY5vn8usKJiLZeUmDu2mzXzmT9iAjUsDLYhXRsAVcMmARQdFAWFfBAFPMf7rTxj8BphbPGDd",
  "key22": "2EX4ZpmqmcyHg6XPh5Zha9BpJqGGXWXssfd6KvysmhkySv3N3rV8iNL3KrkUoZVDVVdYxWAdgiFwjYiiaURbj8jY",
  "key23": "3SMcLueMNhidgt2DRd1Pg87YPnPhbhwmqQLrjJkFzgS82TjkD7F3q69zHJbdpVEJ7VQW1irwSxHKFQ5hDsTWe7Cu",
  "key24": "5yKSwFmSYQwK41CrniDUqV7Q4zmStVsqQFGx1QG5htX7iqFjxWWUje3dfifP69T8Rh12LB7ZBLJKUWDhdJTJu3yL",
  "key25": "23wrXMgAw9Snh5GQgRAX936tseomqK2r4t4SMt6awGYNm7tW6ZismFvhiBTQK5o1uXRfTLgi4W8n8VnX7bFt8bzZ",
  "key26": "SbGvpYEYfMMSX8eYPFasvxXHYSQUW1B1uwDVHTEjuQvgr7MaBfJi96Wo1WgsKXp7AADnX5zP2DiHmqoKZoDZfCQ",
  "key27": "yoNnYVYqvzXRmu1FymXPEeKrdnZ3UQZ9LaGoLWax49y3JCNbcvTQpPQ6ymHCNuZEo9eUpSq2axEhRubhUXgkhZm",
  "key28": "5n5UKwj9rbs76c65QwnDzkhJx3BwhE9jqW88wPzDNDhh1bV4W4UF1Mgoyt7BCBymzLtFDPEY4at6awzVMc2iNvyx",
  "key29": "5G6dvxkAzrRt5W6AsveDL6vVn7gpJ7QbBndyF5XNFyF6sct1ZPJaf4MFD4nZDZT9eoNHavHgZZRsm2KNuPpVAkPQ",
  "key30": "5rWo4EYShRiE8jAbFieatq5pWtjAbTw18JsYNPSLKcmqr8gu5cPjtNSpPkfmFmVr1reMirSXYzzNwhq3o91rq7LS",
  "key31": "61fpPy2AHv5s2xPr9pgvtMiBLCw1nRNctnp4G3NbWajYC7QTHwJjSaGSiS48ikd1T2NvTsZcWw26o59rnhjCRkRG",
  "key32": "4Ck5NFpKwamXmcWD48YbTKJaMYK8uPKNhmTVVFREh7WPMD9LRhfspbiga9kkJA2WpmxqxGJCJNoGvNKdcyY9rfp1",
  "key33": "WcJRAdkDjX1cdjBBY2FyGUnv3SKRQnTzF1LCAJpaJYXFnxWErjLrutmGxPeTHpHwNtvF1ohxMTQ77dF9XXSvzPX",
  "key34": "GjEJHJ89W4J2pc5VMw9kanqLuZZKL6P1ga3a9zvk64y1sHXHUq6PmbiZJ5CEvdPWqmzB5winLVcPNZsxTJ79VFg",
  "key35": "dj56BrEVRARTHbXyuCepwc8U2SitEbhT1iDYBpMvjYgL99GL8GCgrmYjozoJKvtLC4ZoAXabNdriEDBkdeTqkjN",
  "key36": "4jupCa3sVZKToRTTmYYwP82Z3kqy6ZXYRTV36ZKpzQgG4brC3MkCsTE5TwJR383Tnn9uGkbREMZYyM45KpqjLJfe",
  "key37": "3Bpnggzog9XNFQRCSSZ436bZ5amWrcqwtvUNG6CiTbXkTJDbmMtX45Bzp7SH4JEL2XirLXBmHxuXEBRxMYZPeq75",
  "key38": "56gbb5VJztBrwaG2rvJXMz8JETnd6FXjKV6PYrjxiasW6AM8f2XawWmGrQn3T3KE345K434iXUptdjzeP6ERKWKv",
  "key39": "56uc3w9SgEe3TwgWjxDyau3z9ho8huavWvjF5Ni4J6p9a1CcWA12d1GNj7hgdGJxzbJ68wGpfTSLRq9dsnyPmLBg"
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
