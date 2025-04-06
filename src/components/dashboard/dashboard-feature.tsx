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
    "4NZ3eiNLEjMTtxDf32NNvkmSjQ3WHxBy4y6ywtYzoqhf24Ndxjo8Ne8JU5DgSexxCmotauJBkq5C4vTjNr621uS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eh8JnKziUpcY6M5tYfU1dL7LTz8GvcAQeZL4j1fF8aL7u5wAWYwydSi8sCFkmCcXyjWryv4y2VVaE3zPArTzWjb",
  "key1": "22HAGvZaTKitaXJTdfqANRK1wEYs1dchL8XCXvCHQqyR65ZL2r2FEU5zvyhvZfoWPqq8Lqfuyye2oXeLqKLZuqqo",
  "key2": "65tAzbNoDh4JaYLnizCwfcWydu6YbkTvpXrbAV6eKcP13jzZPVpqiGwxzGZNdrWMFJNqzmuHrt6YDHnfaN8rz2Xf",
  "key3": "5HnaVo9kJds5nYSTTLFQbWnvAaGLAY41i6BVv2QV9JKva8b8hMaRAYpsuwVhQGzDxUZqc4XKCvQG1N2zjEPpje3P",
  "key4": "4KBhboGXbc1Yj1xFXhVfBk2k6mw9fvBKhSfgvmEMUqowFrkvFPEtwAfimGo7miVbb3DQ6UbAm35kp5WUXeg6s3nd",
  "key5": "2caGL9SK8wUxHLGkJXjQzonyjg6y1dWSPdGaww3vGYGUddmy3WyrfSUiG3At5cFWKxvA7X8tnuNWp2rKtBLvK4CH",
  "key6": "5ACEJkvGy1Yz9UeC5SR6uUiztw7jnJ66hW4oMrgrjoPkGevQzbUFc1TvowCp5yNmeBT6WriXQBiEPLLUrjvPn3BH",
  "key7": "32MjubjadzPRTx8aJQsGDRPzWjgr5Tsjua9Y3YwZP9nfVRH3EYsPRQHqKDs3nCoUkGKgAVwMckL1qmoLitfXr9Eb",
  "key8": "3VN2zSxbJqGv5rouR9gxKx88QGrkPkAbsvsvyXuiMFCp7Y8hBNhkZ5MtSX7BrEBPsxg9t9RzyrK4y2evSLSQosw5",
  "key9": "5DoyDj8rgUR5rmf6UaWhD8AfsdAhm3pR8LYUhhFMRK3VukqPstG5EjgzPJTeSzrTPLuTpkhmbb11CFMZMgds2Hx2",
  "key10": "5WGoY6BdaY9zjdGLXxB5nN16TftBMiZANpkAg4xBpgiXPKXoPMxaetv6kVfWU1uFBAgNexUQNM1iRFpDefRYTVmt",
  "key11": "5pxDny56hY37dexHUxL3TCHXj3boGbTuu26MdGE3UjNS6vCfch7Fh4PYvXQTaARUtBrENVKaAqmRRLkeUumpcMbV",
  "key12": "4M5f4UJ1LJNSiLRim2u3nbd8Dw1NXV5o3nREVKdL5AiyymPrDE4rBuEFkukFujiTiB9oKjEVD3Cqq63AJze1QStX",
  "key13": "3riWGexVjwdrrWS9XD4K5csVtejqcX9eHPYNHNiYF2am44RVY3rfkkvUdUrSS55n1q7wL2baPs3nbtM4LgRtAR5i",
  "key14": "391MGdMr8zcaS82NMVeByss8WSkDkV4MBes7aLbNz3pdVYxjGLFUgHEfMQSavUhwMvXkbMoKMSicTerDG9mro4hx",
  "key15": "5H6FFg6fRGQxum17rkQoznF3SwRPpLSNNok4EeZfH5sskonkLtAtB8URmehF4i3RYwua3YiDkbywAFJMnzsiGLCP",
  "key16": "28cZDJcAJge3woL2dNSdkxtaK6MMvERkCdVDEBMq782zSAbn33iwsn46F4rMwSJ4GHPwpxTpXEt3MLqkaquoyD3z",
  "key17": "j5JRZeVnkeywbCByGi8CwLDkShEC5qF9PLSVoyq48vXm5Kg78UXJfAVcJgEwVZqdGtsYr1uMazH91HA4Hu3MUg5",
  "key18": "35XjMciQNmxu6TfhE26eENHHTR3GT1rZYP5MGbmD8AcXhMe1ZY3mxreTUpdnJgdTMbPENVeVgUo8YPnMKoJBg92L",
  "key19": "2nymwnG81ZkX1pnL9e23nHTiHRawCpACRjVUzqYYKVSLQPgj7WKqs7zExFpj97nZbHqKjbhhoEYP4Z259C1wsB4e",
  "key20": "4TyKecKzpHs6KGvwoZzzSHD256bP5Wc1HsBX2yZwTbD9y1DMBeFWSTmNipcSzL2EDYQ9u8qCmZKdcYbR79ntn5uX",
  "key21": "2MUMe4q4PU13PJ3mvHbwjrN3QeRbtorLoJsCKwjXJqG4LCAPM9gyGnvVzaqu4xAV7bBUjwAqHuHGhiNYqSK78p4k",
  "key22": "2pBEvKim9wy7bKSzcLzrY5eSoueex3kby44MvMGGf3kbGQqEJCCwky4HE8WK9uL2WVRYq1JRtfEfHGtii4a31tv5",
  "key23": "9s5oMaNpTUPeKUTHR7ZjFibaQPHk7UiG3qsxuEVeQHPYY9QFqzAEbWZJx9r4iYRza2bko1TKXMGUMazYuAbakMs",
  "key24": "2qD1zZAyQiRH5p7HQAS2VvbXEtnowKtKtcF8cDMSvcXNUfuNa6ntjkA76SvX6bgPvsbJoxfJNJsmcDHYzhD36xNT",
  "key25": "4YjoFZ7vGeswbdqccC3dAH1oBLj3pb9HVGutUQ5whrxUP5Swvf8mGrd6aemFgkzYM9C4wT4e7poji1NcpCULz6hq",
  "key26": "2PQpKh6weJrUe24V4wCGHwcVusyrPHQZX5CRMa48JuviyerbYsZ2nwkjxFH6P6UqzdCdSTVR8zyUUWngXnrSFYYY",
  "key27": "3RYLNTwUsvqLM1DitqRUUh3mVaKLkwuBT3zPc5tZv4vMdEakm7Jq7mnbb7Uuhn6ntgwBW3ANToTBTYfWPp5nMXa8",
  "key28": "3WDZN5WHav7gEyRmQZdkiA3Hvn82UMSaBTYj7wpCKYg8RePDTwCiuWzycAAQRGAWod1SA6ajpbTgKjqYEdeAPM1t",
  "key29": "2UoFbrgcLYg7FjgxVwtFRfZxvm9DxTcMLYcXVmRbvvpgnkUE6vP8jDCeT8u8CVfAH8hj2cBEegxgxckofDxY8iFN",
  "key30": "3gLxwJV21hky8BQkYRrHNXKAo42VopiKa1Dw6MZcAdLKwJKiGiTDvAdjahefkgK2brTtHLZrvxd4bTrBtTsqoDse",
  "key31": "2ym8hG3BK4KSBC2nBALdRG3jLCHvrBXfruLCb4kWe5iMvoyXSqPkL1Z5kcJENuSgMwpVVHogqc6LHz9D2e4tRx5o"
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
