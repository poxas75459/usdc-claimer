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
    "58L4YCsieTzksPT9rdAFwaobMPVu6qdSBeKFKPart61dfvLxVZQ2ybNtZk8WqaJE9FKxabtmRiUYA2VGJqpsQB8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QLpSJhMkpW5VWz5mMJ8A6KVU39wwsUBYKRpqa41fAHNiMEkZXwRfvcRdNa4nBuFGKEh4HfZT3K31zGX16mY39qu",
  "key1": "5oduaDQfcivgLhGPf1EYCmgtRKnko91Uuse7n4kuFxGT651VmwmCnKxCtvhULZ6mvx8hsX7hMm1A9XyMXxqkU4j9",
  "key2": "4hPsaUp9fg37aL7Q5co5QorH4LxzddSQ2B2hxWtsKKvKSrt9w4kGiSWkYaex58TykW1seRAVh4vQyjsK8j7d2oNa",
  "key3": "5SndocGovpX7naaFZF9xWdgsnC3y2tGDNpgDd2YyCvBAtiHpryVnUqgMSHE7KJPbHGGH5xiMn3BKxxbo73WQd9oW",
  "key4": "3XJhbVsqYJNvnXG6j4BFG9bV9Ca11nKHwG7y57VhvMHcszQR7YQ2MhoH2pVGhyFhdqHyRintwkbNN3Kv9y4Pgj4e",
  "key5": "3atNQqeYMce545WhN8TNBAMn8YX8GquHLabPVQG2sSTPMS3jrmb1qaRpgmeHRo7uSgk3u71U5y3GudgYGHXAHF2L",
  "key6": "5hLt6y8ng7FFTniZKbAjQqZQuTDurSFc9NF4YQHrgeW2fWbryPcKZRb67RWSzGBM4dVJ6PHTc4s5Ly7E3FTEhcrr",
  "key7": "2Zkj1TJ4VzZdM1Z4QhcsBFrXzW9pkU8B6gDoUTZ2gFdfD6pkPsnhKw6tn1HdfgLjFLkd8aNCx7fkqhxqHWvQi5di",
  "key8": "2hcKXi6mG12bN3szQJfrXByQddEJ5ineyp4ePRntAQr1n7HMvZuJa6cduixd4sqpCYnmEeCejgiJx4LcKry3NCP2",
  "key9": "3bgX8kCRbrbqzZwhxmvcmKykHoVEAyRhf8XQTM7AXbbdXZM8YSLwRgtXvB6bLsYpTWXSKjVkQ6Y2WUWH6H2SvD31",
  "key10": "WjF6VNfWYtZCPFyjMpLifnDiV9YeWQRs8A6QRbBhWG1jN6onf3Z9GxuSLmndy7DCSASLELXN6HwmkfFxFLXQ8Nc",
  "key11": "64oqxFK7wEbS52a1EqirhuKw1L4RrD6Q5rNtgezpMzZnrnu3SDZgzySm36DeAoQMKm8FmA3jL5EQjLWF33j277K4",
  "key12": "2Xrxr51PYBEUwy5e8ZKDyXmeci1dieeEekNseoeUu9Wtz8MwvR3frfmZkYbLmnGqeMVZsHMcLR7YHw7cwwadWCaA",
  "key13": "3dgRTj9gqmarvQ3eCuidHYxqjGbGgQyA1SmLy3cprCNMqCZZcwKxr5t7eNNjC39VcnWm6rwByjxZGrWMJhzKpB4B",
  "key14": "2waQAAZ1Kby3Y34Rhp9juzABFYHHrwCWryw5Kz25m1Q3LdcFZbcUVqJrB1XbKwGeHUD44PpncX4fAvYbi1Ugtcsh",
  "key15": "38LgcaGz794Hkb8apnQHdTmqFADycFbwQ6W6e1uRCPMBhZLCaoPKsd7qnUW8p5jKKrUyi1VL8JzUo45oz3mYw5t8",
  "key16": "4M9iKVmnQE1wWs91pSdVgmvttaMYWc4gEkaJDJ9ubZgUMRzqfczsmoTs5P7esT1WXNn4RRjAK6VDwPfCXNE4h2Bz",
  "key17": "33cuV2zpaZnZaXahM6vLq2Cd6bRxqUBFfhUmfHJw3AgQcX5GM1QAS24wwdNi6FZksDuNVoqCKpEH9THrH3iu9bFS",
  "key18": "5v8BBrcvzbCefHbQX61Np6SZ3efzZvoe1rpwpTKDNZy9QCZVuJJ6CZLqToNAjpFYadBYQrNfZDShqFTfcaz6GnH6",
  "key19": "F4iXo9gqVdWbZuec65qZ4z4uF5QFqp9RGAkjESoCAXmmFG7nUDFTY7KZLUtAgUQYB8wsuCH2P13VFgo4EM2PMfT",
  "key20": "LNvRwp3trAmYR22bRkXxU26rgnHLijLVEZQttGYYGjfXXmEpZEZUksb8R8TpPqgR61WvpiKGpxMt6Buc65BtrPz",
  "key21": "5gb2rLMtk8TpRKncY7wy35UNQGHio1w99wJkBvbjaV2821uRFKV1MCTFhSVcZvYCUBruw5DFXhHWwoQy18LyK9xy",
  "key22": "2tVkpdMqteQDDBnEvbMrrvEoMBpHQwm7FDLg1Ndif1m6eXLuRQhgBrTVr3BwXbKyY9i66q44PWPKwu6JK3uGhGrC",
  "key23": "21S8hvkGNpWDnWgCiF6LKxBAN6AtYasirWJeEuQBfhkWTW3gsTEaCzWGcioVDfhawNpAApyNp6qEUVjFdogPMnsV",
  "key24": "3UdJqE28cbQjk5Gj9UXD1nf3m6LrdEeJbomVuUBWYqjG12ZZXzJSwWWS46TmXxho2w7uNMA2vZfRF5SZEB9KUUJf",
  "key25": "5yxBicxb2VMLNkTHuJiYi2kmeTLUKLKTgfyrxyqJsKZoyHF3vxpAz7qT2nGzHc7J4gX42XgevMfdmiz7hDejfzLy",
  "key26": "59dV2PSvQAoKnzhjikviuQaDJnRJVx38E5zWvQCTKbZv8ETFY7T4a7Lk77aExqMiVZcabU4uSanAvoW5Ywd28h8a",
  "key27": "3Tj5bCrF4fF1gPb3FM2GG7KHfqWJhwwAVrc2T3nYYeGREM1vwqavJSS459Ybrq1rtuChrjD6zVaSExcnQbKJoP1E",
  "key28": "w4dVHLwP5EyoQ1h3MMqo3mkag9SKsNZcZhvDgeUvAfd3y3eV6GW9bC8NYm7rEeYU52uyVMyjTh3UDB5YiozFDSZ",
  "key29": "4oLEY1vWb4fyw8hMWR6BKTCQ27VJMBqUsebYKExizoVK2PN54DRoy1RTsYsZA7ZEu1EojLLdDw6tEMCqjnazzecu",
  "key30": "4iFTPjJqnS7wHPYRD8A5SB3dssRjPoCJqTAPXEB8DC2gvYEqDMxV4jqErpH4xTCHvtjiSsFHfMCubNVhE3Do4Mt3",
  "key31": "3YpMcmLjXgAc5cV13VFG3Eo26MPUabam97UP9iSzYScKcjvCjg7yHWDa4EKKHyZw5TDgHsAhGug9t7F37CCFvirb",
  "key32": "4Lb9hKcEG3yymc3Z4v3CK28P7wqo3GavEZTTB4KgNkUtY1mjMum3rofQqbT1X742D7y7wjHhTKkFmgjJHkEXJ6kC",
  "key33": "2p31EatGvtyKoqatL46dXcKy7so9UP1vVTVhEHV3FJFE2aRufqFf5PpTyXSy6kXTfygamYA73kfUhcQN2fhkzdm6",
  "key34": "XaMV5Q5YYJCYDUD8qKSWrpR5M6zGN7cxKi3JXTYZoADzVczjnEXFquKJGmqzsNHW8gjgAszrG1NvTQHMh4oaCao",
  "key35": "2KVWPoWsABeCuW53Z85dTLRoVr3x56gJwZ2GW2FbaRMFPYMdx6XG9SvAeQZMDj3DjDy3A73K9wuC4GaTWmDHu3Zu",
  "key36": "63xjek6iHPsAjWZYgqXQo5QJ4xaExwJsT5E3fK7xDu6jJ56ZPdbD5teJJS5diWkU6AGDeDGkqupw71MvcaeVhDar",
  "key37": "5bFueBbpN8ToK6CYajfGg5zYo6mhFjA4uDSnKduaxfaXxJtkZBBN84hHJ9jxDrJ3PEetEqUcETd3tYMsKyrrUcRG",
  "key38": "5EF7frS6EPtSFF7aSKm1vZFTrRywdqFwEXxX8FUd1DTkpyTHfw4tRRgiRK5BkTN6kbwc2HbULsgu5UCqak7XrWbg"
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
