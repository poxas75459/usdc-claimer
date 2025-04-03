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
    "5vhAyD8asj1WNdh8umb4J3d5QWSpTe4FXkdhNdHKao5SeBqujhak4DjrB1Z2CycmwvtVafugMMKeutPp2Wpcd1NF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jTFSmXmSDgS1i92CknKYrk1NTUiyGqUNbMWjFBWVRNqTjHAgGwumtXg8mMyz3jPN6YuBcRYzcSEZHjCQQGugroD",
  "key1": "56ToM6689H4njhcmzGypJgQS6fm6qNaFuTobnmh5mckLBRm3MrQdJ6ZEG9vzXJD43RehWHBSX2kGUNJqGRcad25J",
  "key2": "Z5PEsUJzcrNAn2s8MBrAvq5kd86zZxqdtD5LXe2Rw3EPNdc7ARgh4xQUvyFCyeiC9d2bHvTLRpaypNvAZDyPSzD",
  "key3": "rZz5n4UcBgyR5JfSXY4VZeQ47TWQDR2AHpfyprEA7RUYjsGcHV5dxV835VGHrCZMav4NcHMZXoD4uLgy4s5ZSkz",
  "key4": "3rYnVmjDds1ypkSEXuyaGKEX6SiamVwcKqh3AEcyPRQLhEvA6ZoXnouqwQF65NvBWyuu7JHeMV9riGueTCnFE6wH",
  "key5": "44Ljab1GcLh45b4Q5aqmW1MXGVKj4jSf9WCqfWk3atifhjNbB71gqq7f1Xvf9EeKizQy5CrnZpAxyfhEdNGim8mt",
  "key6": "24DsNqaHvDph5PvVzTrMNGgbFUmmdp97Jofzr8hDoH9dvCZ8Jf5Qtc1uVouuZdG8DnCDXFAuXa5NQhxZpfn7ywg4",
  "key7": "Dic1QxnVXzMQ88xYHF2ysgHXfhhxVf8U8ZUdZ6RzRXTPy3G16s7Dgv8RnJRFXVn7V59FheKccaZd7M8NotBeG6D",
  "key8": "8RAfbmnChNjgaS7tE8JqACh79VtgcsqL63QZnUcFkNJysqQ9yEgJsaVRKtaPQNAsmAQNvYo5NracdtAXmiz8dQr",
  "key9": "5gAAWn6yQ9YT3xsL1hHw5Z782uPQUW43nxs1TBQRvQDCiiuhxsJEm7XK8HMatJ3FxJAYGwMwcyS4V3SpmumG3b7V",
  "key10": "2ggAz8S5FS5fbY3NXdGtU6d1Vkwni6gENon8EiQPJCzNqgSZenHkk7MczXkWUCxtAqudk1xao4XNzj8TRLBKK44W",
  "key11": "4Wj9oUU42ucvJSVFAjUbGmrC2qJ8CKauqri1zk3CCkhD77FvVEGEubYkzriJTZe6tWp3fZZmUwqpuXxDPSmPawLx",
  "key12": "oR7H7qQRva7oGX28fitvgxJzqNz9Q1cfedQanj4HufBmoRZkieNCXHabD31GsLeomEeUnx5H3ZrPa4WvY2dGWDd",
  "key13": "PhWpGbyZe2zYvC6w3RQ1hUh1tFzs4MB1pLBkUXRcKSgSjhSRNgvhXLWpUDcxS3HiCvyfkKdhLQwdtrz6V4Pr8M6",
  "key14": "3SbrZTvzFdeSHbd2mLxxH8pVywtaFsSQTVbPdgMbx6CFi8rhNjj4LiGfgusV2ex2ny7iBJLYD11of2sJVLVZcTRw",
  "key15": "3S2BfXnomDuXc2NxJdefsSRD7K1MGNXyTBUGh6pE6r1r1mhBsxDEaXYGYcSwFKG2e5TqmFWE2VJmYiqs9ZErRkTL",
  "key16": "2sCc1GjVzCe8xFZp8mhJAmnghyyHX8CbxhZe4g1AsVA6GHKwygJKH9k7seQhFGmDkKHpWd3wRdce4WVbkr98viAs",
  "key17": "3SWZ49mqZKezsCaCux3xSZ85qoYwXHKHs4P8NbCWx6b77PjRbeRZZHVYVinbBuAuaRku8aUrAvts8KTbR73NwkD5",
  "key18": "3Y3aGWXvfLnExCcQqg1kweHZGUs7VvskTS7S2tnr5c2dHRU1fYZEoiVkSaFP3RSYrhWQujBPT9CkaAMqjMvxNq6",
  "key19": "2hWJRQRp1Z9ZWGwCVHMYBujQEXW6vjYKDtVfBZW1JPKgTFFpMdRAZACxjKMxwyryZgLs4vCMNiBaks3s696JBZs1",
  "key20": "D6ojVfoMkWnuRwgpwaLzPsWt4nWPh4yKy8KgCaaNiTZ3hP2g7SJep9CZdn7PvPQr1GsMFdYRqsFpdx6AwvuC77q",
  "key21": "3jziVhv9mRvfwxCsktjEzNxCqDYHQ1aTxYNwFh1ttocXNmvtmj7PN252rbE6dZ32R6Z6tLyBRys8nnzkBQ2R2Ru5",
  "key22": "39g165547xSLAprDo4aToNqCnr6p7tkdREy7NBUTKZXF6SYd1xodszwR7EidBZnb8ZVaU98TDmmHotcvnhk8jeTz",
  "key23": "21WVgmgr13YqXKodrfRGiXQCZuocgkxR5i22EdmTQA42RozjzZsymU6VUTS8DqqstqR6JJLckVQGkNfz3wXahw91",
  "key24": "Cv5nMUc4Ei6ndRh7ZsXQiKFGK2KA2PvfmUspvq1KKJanA4q9aPpCsp2E1M2gCHqbvqqfNg5Pg4kFKxvEjNCp5Te",
  "key25": "paA8eejg342oN5T7f5qMttt7TUZGGrDCwPj4fyHhM7N3M6X9BGS5K6JMYv9bUWnTpXnJE5YudLk65w9VHTww8es",
  "key26": "5rU3q4nD35s1d1oaQYvDsrm1ZChdPmtXCCHHF9seJiFxh47t3Nykw41SsaGHMvgMaGDaneVVX966zcTzKG792Tk6",
  "key27": "4CpFt3zjEyHKQXA8hyMeWH3px8VAtSCQJAcAdJrpgjzXToUQxsZK1vQhzzVfs5M34Uh7isAJMK6UeYNL37BMGy7j",
  "key28": "44pZJJHHFtd1WSRctxPJc1yiEaMPnSkn3SKQUwhX87mk13wPsQjPp6gUJPceCwjWsTaM1H5T5ey3kgWzqDzBUDrr",
  "key29": "5EmgcKnDUaBZBfr4j667qkovMUxPMevTZJKcbeaSzdZxmzpSNjQWqVMw8a94B7MjixfKJQgjFvrwyWenyPvjgrDZ",
  "key30": "26nxkM9MdJYAnHacZS2e6vNY9w3t57T3ffJdmHTheC6cFFXSJg4xfWBYSiHUWXDPzobjsVAHiMCpZPKNwodt3N7h",
  "key31": "3pVfnojvmZgj1nvJ2Rj8W7Bsgv5Y29i6oU9rNUar1z3CYEG8uNJFt735t9hp1yoCLoRU24QBRvSqgGiEpFaB5425",
  "key32": "y7n5ign1m1PRMdtvnbUN24ZsRwMacB8yGpTTwv2VaQVkt92FgZ81jdfZ3u9XLP4qtVGSKnnqF3R8zPRG6S15tbu",
  "key33": "5DV3LHQmbfDAVZB52h5VewPheYNL1b8aVjQn7nLq4qDFgRL2VEatUyd7x2mp7STk7frGpXYjfrnCX45dkAsVVbMK",
  "key34": "5QNhNRUmfF2yFS3m1dwDMqRCfHnqJ5ePypLrWVARtZPFgbmRHeCLQ2PFq8e6mWeNowfVJn7Y225T55BXwaK9JzRP",
  "key35": "YAnCYrAkL4NSSE2mz5fr4iAUebwXjNBLEMXr6dW58NvEDHZA5YT88YYXYh6tmzWw9i8TzQyT5xdeXJQ3ZtcAL6d"
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
