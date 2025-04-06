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
    "3T6ux4eAHmw9oqLFbXyBiHEocyuNjQT6FZMgMfzz9d8syLc2vKPcVaHEWoMLGync4Nd7Azj5qhaYdjQPiCAmR7kK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ssDRbdwYVvHcJCh4mS79xkfhvawJgcpFEpU5Rb2eYEZQJET1NRxtfpadiACaQMPiEvevazXWUgtcFf5faAhxGbe",
  "key1": "3hq2WY9Z5YXSjD9ksi1zmQXSDgTRUszHvHMYmmEri3MBgdz1kCfFjn6skwZUcNvDDb2VqAQu1KzXvHeTt98PDU5j",
  "key2": "5E8WadFQpbFq9B9uz8DzFjuvRMcfSw9YLm994A7DiLmZ31nTcpasTRCjBuZZqT4Tq5dCZqmZHnL63jQ2mA9Z2cKH",
  "key3": "5eNk1YRDpxj62mYardEp6Q95aDgtDpTPpdJHHq5KxCSx5X1QLtCCuuzyrKCC17DoA73R2zyc97DFFQ3gZJm4xxXp",
  "key4": "FhRuBVxWh298Ftp4z9eufJcGhtecF6WUDRwfRdgRw8vnuTfCQMCqjnRggvLeNBCodYLV3j8ZDuLvqmmpmuAZE4o",
  "key5": "2YBfC7V917akv4xcqar68oqmdZmPYyC3PnD9REEqKREKiTuBpMKe9kj8hpjJ5JsGmAswQCGm1x43ZQxYkoifCTHs",
  "key6": "3M7eNFtdQr4gJhCuQ2Zn8YCMYgjCDBo76DxCVRq4bqjGX5gDqTniA9yVKWNyunbnkgddGVX26KHvnsrkYKEz4mvD",
  "key7": "4hzBQsUPJ2XQy754XK28wA1U7WU9CjBLxCQDZoMsaddCd8KM7qM3qv3ssb8unNyqj5eqij14z5jsVEohigSrsi1G",
  "key8": "5rPAtiYmnS1jPQTAZ5j1GV6kYGLotWNU4VAsBwXGN7Hw42agDgzdQvGajLqecDCZHCtXgiFa6X4K9TyQgYdMiMeA",
  "key9": "3SZGjx894SP1YPXSdMC2gYdKVvAjGwQr6bPb52ekSXVjiCRBc48HnT1Je8mthdB8akUccokSBnFA9o5NbX2uivUm",
  "key10": "297Vid88eL4QJRKEgQn5CRZvTFn2Lkp5jbgd7jEi8iYyWFuPuLnZtbGx68Kq4XTZTv76RrXUTV2VV7YLZKFjpDaF",
  "key11": "8PjYibgnrYdU6ER1xtSkDGmGdP66dvNirj2szPEKqFmr4N6eH1Uw1369HuiCn5ySDUMjcUVsEK9kCizjYrCFSzt",
  "key12": "3AksNJpGQfmtdAuPa4Wkk1NzdMXFb3G5JAm6UyQPB947ud5cHpo2xgNddpFmcHheZJRtUAzUoARfuEgN75cvuPvw",
  "key13": "v274eKg8fggfMxpHg8CeWeGmPstGKt8HcyQjKWWfcxSd5Zb4sgnpCVUwYLwwx9zRGZ33CKQxArwcHHVa619KxL2",
  "key14": "uM1ajdMWd1bMrLvu9SLLqvgar2Wj7xNMJwVZESjfFjsrG6JbRsbgNj88uSxwAWTjoUkD5zEVG2JU9gt7sGnw15V",
  "key15": "49PW1gVCpjGptUeXSaUwErp1iG9NnX8HYNmRuyQ7qKXj9PbLnL8KeoV3mLcNy5qXNCoaCC8hVUbVmCryCg6Mz8SJ",
  "key16": "RCu5pCYwT8wx23frhqbiNKTyGcxqgQzzY5Z3rQpLNnCn2keVQ6hFbASsoFENWeJMn6JAXCoovS4Z6oKqKpLME7a",
  "key17": "54aWU2LqyGwSBH5s8C8UntCk2TULWz2DSLryvQT7DkMHdaeGdED3M5jfjMvWW25sgjEYjfrevbu9apNeyjrkBK8U",
  "key18": "3DBf8VF2LNShavR8nQGPxK5S89sWN21Twb6r9DZdvA9gM3aXE22FQb6Jf8PAPeQnXhL2nxm8amsW9ctd8fBF8S6j",
  "key19": "5bbQCRGWBFfWwuSygLRVta6m4pxBgu8FBnMRGdGES9SMrjM8L7FsyovgMpnb8BXhHRU4AFePAE3J3npDRqhZCVst",
  "key20": "3KQpPsADLau3j6QYwa5hDtAtANw9rfVChArjv2BXDu8ShFF8Pe7nWdB5MaGxraZcBprhQhZMouC7YCtR2rKF4Num",
  "key21": "2TJh2YBL8QtubK46efeeqkPrmiZdwafnRW2N6t1DhcsjrDczVq7DYZ7Jpw5mjNKwkAp6dn73Js6RTEiLPvHFmNuj",
  "key22": "4WyEqzS8G96UoM8XWCXKq9DpDsta2gQu9WZSj3UU6N7buW39LPBNKP5ZQCPnsSj8D2R7pG78BKwseBad4JVUjPpb",
  "key23": "33BZDw5sa5b89z8uPkJWYKmzwZMUBCRt4Rx3H4s6JVakoLFHohtBoBTDRcLeratCsE3MwyBhA717R52jtAvYQKcw",
  "key24": "ygoXUggyV4MfsJUySeJfUwvRPZLDvtNRkEc2vfGGQTV5QU1BAAeg6vHRjw6SMoJ5oHUJGvUjx9hHxbuSXak5ZMR",
  "key25": "2NgvUJyD8s1FEJXc4sdbaR2cqoZtspTzsVrDGf6pDw7geMMjFX3hFXJt81kkCxoisX5geNKHNgNZxhmwpGCmVuH5",
  "key26": "5ob6NeQ5f7pFPP3b9Bg3Bg3L6RpLwzHcyoFNvjDjDkmGBUa5X7a1Zpg1ybAo9CyX3jvpa4bTa1UESNV4nghco94u",
  "key27": "vWt6vEhBAXVdTKQLcWENYTHbxmRA4ZMGBGJTWvNNH1xxYxPzNnwbzGuYGTUUg5pYcG9zTrTt7xZeSYjA26tJqaT",
  "key28": "3Zda8KpGsqGUUN9z2J5vyvojzBo2rSCtbPGzZfKPSQo3Tc8Gda9hCrYC8G2b6yPcs8jtriYkB7hmP1HSGh71XBGf",
  "key29": "3ijPSQj69RPJZZNMJ5ZGxPoowQPNtuteht25amo8kX7NAKv8nMQdcDSfgop8dqFSioGieUUuGv13FdygtBuMk1WP",
  "key30": "3aK4jLE1dyxctq4vDG2NWPPZcpqgnkBTWCe75wRBZoSZyWz8wxfXwVFp2ErRFUdJQaHoHSqZmju1TKYr1HR3RqJJ",
  "key31": "3vpvqBBvZRcN5eZGWo2ngt7PPW4UjDBNw441tEuFENtnvddY5zQgWtnmUW1UTQxhRY5N9CC2UvF41MxpHqUMGQHx",
  "key32": "2bxV4Gtk5XLCyNsvwFuuGTBeDLiQFRUaQBGvNcM5iuSD9iGJvwjh9VuqJxn8NJPSp4Pt5YXLaFRTLqXCVmyAoYdm",
  "key33": "2c56puvt3P2MzV7mzYChTj4tsGJACVpBpX4XhraLibHa4JGfGW8PFthaVWbD9yn3zyyED3S6yjDh3AqRL1Z5eQgW"
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
