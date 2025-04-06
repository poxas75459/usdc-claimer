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
    "52L8rm3nwj2hagQFuKsE6Y83rv9yfUpBU2EvZ3fmisbdLPWFWr11egAzakfSiY2YX4iu8JBoj2ysj6RPPmjd4JXj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gxn6XK88XEzwEPXEqsubVzWjPs4r4sYjrBMeiJAaHBXvF2vaZqjTCQgSzqFrhEHfVds8MuHLpojcFcNCQe51TFv",
  "key1": "29zFw2fcQQxNEA5BPrDsFadmeTW19odbVcUysYj4fHj5BgCgJ9C17WYtrcxR5VzERUDhs166EuQW1fYqpEdmetrp",
  "key2": "5iqeXxCUmz1GVNDYbxPJ6SjsPLJ1AZhuR7XMFEA3Pe9KHqLxL7EeQPGiLW9Ad8G9hFyPqDxkk6ahCFChSTWiFkmu",
  "key3": "4XFvgbmbcDsGCFXrsrVmFFfmNZasLZ6rFJbxWrt8QereSoB2DX63G9bY4zrQdwdZ74MLS1vkFSgSFBUKNdj7dzwb",
  "key4": "iLyvt53enrmfZDaqnJYY1kp1hCHBosRu9fspMAJdBMdbjWKjuwH9GULLKHmMwSMbneknVK92M9ZCgKj38ZgFXit",
  "key5": "2n4i2gSyy554bmgbKM1t98uAhPq7VNcvm9EuhRK7ZYKXNMRNw8eFbSugS3BrGQKvLGMnwa5g6ubdWcqrKBWP2zz9",
  "key6": "4sWSm2uTXuEDFwynzX2c87Msfs3e1eYmKH8vNVPzP4BUo4BkXfXaZ5DAtV891ukTCsXJFh24KfSpmHT7KJeV5r5x",
  "key7": "73zrynq2xKMEpm4h6rQ1JjDVFKF81jDfEZMPYectoaBUW1fYesTMkR9K743FhymzwSGfVbuG664tVFpUFA5q4m8",
  "key8": "4N4NANkEgryivULRZFYZGVMGdBWCBDxPwAUjMTgksTMje93HUzSQ9Ynu7H1hHJpLYGvQvtNPnWwXjprxa4xYCtk9",
  "key9": "4dsBHqXao3zT4qJTsGix19cz2YkZKpEZF1A8SVHJLruazJ7BfuZMaEbx9TeYXaFibzRCXiBb3jNmAw6nmAziJXn6",
  "key10": "4Ez6XEsBoJ14PAbZJd9XPHwUbwQJmmhFchBQMVFCdZF8afDXcxPFc84dnrTAKDTuaijNMnatgxkfLbbjktdwRChU",
  "key11": "yf3bRq1REnvxwRXJtqNyJZkQWU5fQBw55ebDgWs43LzzMUd7DLoi6py5eXJ79pXuDpDJntBLjkQhfhMFLhUMiL7",
  "key12": "48aKKV898cEV7qmkGhbuDw4hxcJgmcEtMqio95iBNtMExC5CG3eQVb3zC3WGd6aDy4STvbiAbJXMVfYxektRmxAU",
  "key13": "2yTbsX8SA8QvcCN2jABmPDiFXAnB5UnpEQGEJujx4QgoJuhHvCDxHPYwr3T5Kwq1uZSqqJZtoKnpBfub4UzqSbfi",
  "key14": "4E2tG9Gv2EpGhUZxTriYEPQw48gSGmEThgB6SgYRM16sC6M8uyaKEGvuJcvUyahiwCdWPoUU3S1KGXZjcr1pDCkm",
  "key15": "3A8xMbUww3GjMAfPoZ2QHKSNz9BzqkADRAMrXVFphCm44fzEXihEp7iSKXFWd9RrczKFZsVCXX6fsppjEP8j2aka",
  "key16": "591QGmzfkuF3UNXebyaeYMGdLsaAq1rbxRNXBYodsoE5Dwt8ipwAeRBT4EimaWe2PZ4gWW3dRmR1jLLtPiVNupDw",
  "key17": "211T3pvtzwXebjakgtDf8Set3MfXS98YYgVLNu8NqrjNnrxAyefQHS2pbPMCVkQVtnLDeGith7ABF3MB4jQuGx7A",
  "key18": "3smsbN9Hc7ehZ1FCKH2wj8fyNApZGPxGYuK7G8UrEucjGG912hd7arHnF91ByhzHUv1quaZJzh3NT5mWsf9AHCnB",
  "key19": "ZHkwRHnBanTZgrf2C8pDbB9hUttPNq1UmRJiCgLwnbSKP2BH6ti8X68nMNoCC7Ak7JvCVcw3CtF7qakisRWzMKZ",
  "key20": "64RQ6Ah1MfxpjUT3Rq5QXxTxZcRgSMA6xiHDJraeRLPZwpnRMcDBvekAdqk4gHAih7Jhs81nSMqHwjHSJfVoXYmi",
  "key21": "5fjARJzNwp1TVfvRode4gVSb4kKVNkefoqinAKVcqzjjdZ4eUE2RZj7igAwVCCYGjTzSdatkSKPUKdhqDYsBrVHM",
  "key22": "5Eq93wTGki9guQkTqDbbktxetABm5WCsb5hSHDFQewQrB38CPgrFFARcfazYa51LAirJG7esDEqbBx7GYPjH5SK2",
  "key23": "PnEE7XW4XYQcHekMY3TCbh9HgPyqbe6K9R1MVftNzFavBrh5SHNV1NZ1qsXt1GHwxmsxv7vqXY1M8kVZJq8FcNp",
  "key24": "3rtvgEkTyVUtXUWE1y7L6i14xyYFxsLSoemxjyzNGH7izVVZHZnMHbBHN1i8VV9Uf2U5EACheeyWSYdKzDN8PgJQ",
  "key25": "kHW2AoT4R8dD8owx4GC28RMvCnA5rbijQaggthbuaP9u6dTrxy6N9y3DUgFHXxQdx9Ad17YEeg266CbfFsexPtB",
  "key26": "5eXEMNVhhnQbncTXpQ5CEeYcf8jYeyCzsiNmEKc2UvTtzLkjGiajbQboqhjyXwFc682ZxeTEoDuCmUG3XGhAqucg",
  "key27": "4upho5f3A3MqCESX1Az8rU99NKuRLeTUAPsWvDaE3Xcuz5unVmPmgatHcSyjSQRj8wthEDTBv3fdPboFae4BpCfr",
  "key28": "647Qxz3pjXjrT9GQZAjT6Ehy2J6oJyHnHyx7eVzn84ZAES3LRySXxghqN3YgRbMGDtAQkduK7D2uVqbXMbyCEB6v",
  "key29": "5mTFa1x1oRnhcWayWWBBbo7B9qhmoiVeCEqLwnZScLhN7kW1rXQ4aY2jmPYh4KJ3eM9x3z3XyBqjM11qFPhtZWCX",
  "key30": "439pBdjV8F9DK1qxb8EUMLmzRe7rWRsPeYuVBS85CKvgQ1YAXkenHTSK9othB7siz7YnzkJ8oXB4iA7rTcsrfzPj",
  "key31": "4uHP7Bryhaz98EyxpkyU9rdQykJPkke6QcAp5cC8p4wBe2NtTtnHCD5WwyvmvyQ66nyzFGYR9pfv8Uci1TfSBm8G"
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
