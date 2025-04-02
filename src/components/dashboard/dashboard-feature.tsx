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
    "263G7XeJjz1Wr1KYJwLPuBUkigSKsS7NRM69J1o9ms4XXQ3U258nCTFSBrsNkPQ2s5A9CvQmUEWgDVMm1ZWDbCnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LyhLz5ntuHxSV6S34MLo3PS4FFJPU81DmxbPPv9ZiSuM8rKBnSRDh4xHae43csoACBm74ugjAAxkMiopucMiJ1i",
  "key1": "2MTVd1V3dgsULuYP7yzUr4qQFJfLQneFkLptgA2opH1oUpaFzcqvikCm9G5DX7Xmj1z2Wp7DU59fmGfcQHfqX3dS",
  "key2": "5ZHdDYtrkxDefwrnmpbSoDYguLNDrtmECHsLcANHLJhGb1JjP7rrcguGXPcRxsmMNiJv3bkGTu73a8GgUG24HTiM",
  "key3": "5ao3CzHgcRDmD5bF6xNfGesS9a6uN3E2TVt4cDTBGeBdvtRhe3kxwzhpshBf4961J6rVHauhcheRKYReMxXamxpU",
  "key4": "bUMJ2ZnksyrRdMEqnwFMGYfaTKzja72Xp8U493GYqyeaPLXrzMYEW8vB7nGZFG1nH26GmQ3emXZxZW3pdZ6USbw",
  "key5": "2sA7C8CHgHgUNV42XCRc3CN5pwr2a9uPeWucu8H5XxYLJtRdkvHncKUap3zwYGVmoBbM5eCTgFgQ5YiZsp2stXgB",
  "key6": "3MArugYnB7N1ds1TBMSRf5uBozxvi1Cis8P2FJHc8oBLjahYPkZtPb4khGtYgpUZJXn3JmHiRBQgmosNcs9QLSw5",
  "key7": "41CiGQvvgYdmFDA1DYAkhrEhcCeKu2YoEimxrLqYHESPHPH5Lix41gyDwYgh7WGVsns9Hevb5DycwbDJiTTgsMHb",
  "key8": "PcooMtz2AXTqyj5JJE6LcWwWkSay1EgJ7fqnx58tkgBZL2rLqaD2QfNfHkAcJVpnowQPMGaL4bhA8BYWXJAN2a4",
  "key9": "4jihwgTo8QSf7HhrJ4MyM51Bn4zdsq7YC8qrHXhQX5eTi1bYtTm1UhnXf5pBqjeYEM9mvApYBxHokziyTNghWWvU",
  "key10": "TfdpAAwLXVAtrLwv69EnrfxiNdC5MLskQSJ4z8prieSzGu2Yrze7nemvGwHZbhRuCjAfTFDVcXDKbQhD4opoNCN",
  "key11": "4Tx6m5idz9t7tTAcoaD8BWPhG5mUjyPejnE11TcTNR1TpuePCzY3RNrNHpiCXKBA6TUbYE6k2SptD7ANYD58ui5F",
  "key12": "2gYzEq4QfG6ukksNYytXN9omoLs6R9HDTkauNVZQsNzSmouri96hyGWzzXnSCgwvUDHCuDzGmqY9TJdgwwtAfESx",
  "key13": "29UPNPvQRPS48MWPwk7hHP6xAAfJA9k3JqrRhuxesYzxDW6JNGLwbbeAoRYttN86515sgmK7hiZxfA9KkHehyUuH",
  "key14": "4PGGe9aE1Y3rvgEd3mXin1NM7SRv2ioRiAKdzWQajGDVBKGakSnWSCHPnJhLJzQRSKxgUeX9wmtD2CjvcqvnSZJM",
  "key15": "3phvGyJto4GYKfpJW7xBaRaFHW2cUigS7zDScHhmXwagC9Zq2Dwg9Hn6q9Z8B1qzenfimAckk6rBnFvfgtVajdKB",
  "key16": "4ZFzhbhEY1ybD3QSSsXqydkDFwgaHbV1r8bYetdoZu3e2kpTdzNUGSNTdRDbgAkPAC2ovgoZje3L4gB74YrzwBo8",
  "key17": "4mSVedAFYNvx1fNhC5x3iPq61UcUFX19UKiE2MXghEvsi17hRrxH44BjnnKKAY1WjwFHy5D7MGcQcPQk5DAThgAB",
  "key18": "34G3oCHCUucv9vM96mbLJ1fmSpwJ9Pgsi2LNedqKu5hjysHG5BUi5vUtZVWbCZFCCkpqAsEvkDKyD2bmkjGjZ8pS",
  "key19": "3RG7HVd4qnNuJNmErE84BVpLxGkZGh7FhzvkdeykbMAYDH1XTMCB2KiGS34uhWrppatgok7xW6pgtxmA6wytFgwt",
  "key20": "4Guo1ShjgNYMQbTFbSb5iBhWa1gshcsCyK8MU4NXeRUKN6Zk1a9iUGh7pBgYnbJ8wyMk8QRo32AV42jnFg9sTwC",
  "key21": "4i2QgVX9gNC1JjjCtV5fyComkK2paEF7xeYXneQcbNcBSWtu4hhGA7akoj6LUnEiAqujRjGN96p4gDcKzAxWBzJR",
  "key22": "3aZNZbWXzc9zgjXwQkDhUTrQQTKmv4kDAb7fq1eLkeDMXzgV6Tr3oS1g8izYQBpYhJNaFidvaCiBFSpH2hTZE8Qa",
  "key23": "2RYo8PLrXBMuS6quEBqdxHXteV3hnxpoT8R5zyzTPuWZoVqqo8DvRYpQGfpT4rX6qMfipPeaFPejMnQN46Yho5vZ",
  "key24": "3GayuA76EBmSaszpjFDn8kVL8oPfFnuq8qKQ42nJgHKQbGmyCrjVbjQULzDj8tnrC1xYmv8LGjb7BCzDfZzWE9eX"
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
