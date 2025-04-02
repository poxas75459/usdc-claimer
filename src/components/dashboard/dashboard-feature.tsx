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
    "4UAtz7hUDcPkZUJKTRaesq3RPNQBM7b8NGHAzM76gw418H979pf9jE1kcM3tUz538GHwbLSusj7BupKVaDeA6cmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPFhHhA8uiU7Tv5sewDHgrcpyoQbXnpQzVrXhPyMRFL3yFjcmgL8VVXbQnpbkRggVMWPHr13HWtrwsq2DRSEHmP",
  "key1": "bKpsVADWF4SEpKPT7NcfqH6xhoyX4gaosvJRz2D1T5mpRZCaLTKxCD4ikRB8qBUG6dkny74bRd3Fkcf2EfbjeTB",
  "key2": "2F4nPNpFNtyKrikxGrkVVMfzYdriRFQHyUT7ZdPENJi6vkMsm2BJ54WKMP3E9RijXNcJvtiTvrn6xijC2Gy6MqjA",
  "key3": "3obBAYYSqQ4UuqX7AebTPzQnSwLuGyUUuNQGpopTHUCmLAh8gdDW1bEwPwGjJ4cFySB6GMEQS5gnvN6e6Sgvzdsr",
  "key4": "UhCJzjrv9rqsELLhfFv77HwzgS22Wjhd2mJSVktQXDp7iP1vZfjKhc88wWQYH2DfC7bBAWkQNnLsJJgE2WnatHL",
  "key5": "3tKeQkquBQnwmkfue5ys7Sq5ciUKbjDMzPNJrQnYWobmdmni9U3z8swzp9rRbRsjwu4BST4ehVEpfAwcK6HFAKrc",
  "key6": "2XdaEunBv2kSD9ySH5SPDTqFKRoXWbq58BWxXPb9aQjM5atq2QwmGPrwAEXzE8LxLX3L52yE8f1eQ4RUQkVwvGdZ",
  "key7": "4w6q6Pb32V4ojuuTN4jbAbY9HshNefvvsTvYuvBdLRzfp5WTHJ1vWpY6HiX4f4GfpZu9kekxNe38smnoGEx2pt22",
  "key8": "4fG2z1Lzjv6QGzYuv4rh42NZH2zu2FjZ8AnawQwW6a2f1jYuuH8VjWnL36stA7tRbDWucZaWjxh7hLGdVwZ7DRrJ",
  "key9": "36Uf7YDZRujE6vsuQ8JMzKKaqWJ5Avr6rTxx8Aduv7742bLW3eSz7Sfp23jamowQfFggHWVqzAR4PqVaaPQGSaje",
  "key10": "2tS1NgVS3Xfea1avBhZQHyveDPNjRj5hy1ZUUL8FcHfex7W4GVZHqz6r5f7czSoSQxD5jDDRoLTCj1bH6fxescPq",
  "key11": "66nshnDhMbg6SJ9YCDA646viVodBreMURcL4SgG6UJVsqjQcYRZB1264yKPC4iMfCvZ5ZyXWkZjehsESCaVRvyMR",
  "key12": "VhCanadwdZUTwFZr5ywF6bCxradtPseNYvQfpJHaRkPr39NUzWNC4zwzdRGhQYamPuW1sDtyns3DhqyvdP5dBrA",
  "key13": "2fqQpWgyz9qu5FkmuPTtG7vk6BwLnLX9vGsrkpQgKSj6C6cAgGvMRD6rv3NFmfopJMU9TfnKLrTagWvPLbAFXMts",
  "key14": "5rsAdoGDJryUVKsct55yLdkB8VcWtcZztcrust3HNEFDCA7xePfL3AK68J52BhFQQEJDpf3QJBDRNE4NFpBmg9VD",
  "key15": "25CU6KBsgKzmz7qgi2XB7Lr4Y3kjyNDSTEpEhab9iFXGsaQ6tWtKcUKgf8JZdJgtBCe9yb7uLh1k1pmY8gRSDe86",
  "key16": "2SN1yGo846hHWfJgf9PAaR8rcc7cxaz4yfxzkJXDjF8qj2v1NyNSonq5JQo2cUFdeVxkV3Q6ERcC4aVG9iKrXgny",
  "key17": "5HLvbvUVMXpLyBnxb47D4ka4gdo5wTEUGHM8jegTpkneSEBvw5mviW3nSknFAeQhPhxPepsYhgpNFur5bqV4n2mA",
  "key18": "2puXvovLgxCPjkddC9cm7ZksWcxgtsmTPweo3ZjR7aBYdi4s5SkjfGu1RigoDKmEeLwrv95TxE8bBJ483qmCEnH2",
  "key19": "4NEQPrrbV8FzhERJ4jLBgoCv9i4EVM23RaLDjxESfkvEe2tecmzDP8kL6dzhRDVPzeaFvoN6HJ5EuG6iJj3TCCet",
  "key20": "2RSz3rFHCM2Y57j4Cfb3FXCGPaPBTcMhaebGRM4gG2B5Z3yLws9UGG7NcbFYyuo84epRdTHe5eoMAW58NMV1H97i",
  "key21": "275yQrfuZGAk1mNrEjJ5UPhVJ55NkxDPSrxoUPZfTXmdwRR39DNhoBwjxcP54btJ4RrLUHxQpSVoj7AKfZgvQzcB",
  "key22": "4t49K8y6y7gzjj5i18cJ41kuE4uuD83CD815rHjP5mi8y2vUXbrogWRoQkvZLw8YDXiC4NJWXR4XKNXr18Lb9HJ4",
  "key23": "43Hfo23X7FXK59B94HqpDRciM8J3EtFbLoFbh9MRgt1gb1twWBTczDY6tF6RF3PatS2ipFZ6m5Zb7uMZ2JBEZEWF",
  "key24": "Jc2kxujxhDKUeX72szt28S6CdEagWbhQ3pthxGAt3kcAMdSDJjxmszJhRzJAWXf4oj6wTaEhLu2bPpBnLX2H3U9",
  "key25": "Mvd1rcpvZuGGz4EwxUrEY2nX2ZMFyR5pHxJRzRDFpt4fyfQdnZHHv7DbG6Q9XJveuLBuiBDnhvfpzzeuq4rc8aT"
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
