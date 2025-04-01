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
    "5oqS2ai3nYVUNHqm9aXy3dgxNUiS1JXdmBmoiArPhkbKtxwTkPJ7WdyAUYMjdWKMZ2bvbxbQj3N9kCHRwnpLg51R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TKhJ6TeMe6dUKKzLNGACpAP4Fv9CgUUVFdsqWKYPTYyNcG5LK4nAu8oAtxD3jZ1SZVYQrkoTwScoffNXHLiakYP",
  "key1": "5KySLrs5MmETWcCX2jxL5hCfY9nqMkiigQycbUcoxQ2wRMqMW2zkfJR4tB8EfrCUjEg42Qq28f8EoQtLJFtBxm3F",
  "key2": "Jk5Q3CWQdHbPGvNiNvSfGBa1YRy2nnT8w8oRhV9sD85YuQbxwsLFggPGh4FsaWZTigdga1U26KUeWg7HzMSpj7N",
  "key3": "2m3koJBmRqRiosYem5y46f4HLxs2swCgVB6U35KcxeYCMYpodMok7vpxrJpwsGaPAk8gz2BFhim1fz8wAG9V8ztp",
  "key4": "3GmexWhpbv2hQdyxghDzBsDz1PpYHv3rSfPaS53at5E5k8Xx6QCaBZdsDAbKSyrkevd3JugvNZmabKGiC7LdwedB",
  "key5": "2KsT83xHShxbGRwVS2bxiXL1WxqsAdXEEmBhEn9rCxZdSHi28ekdtm1EB7wTC8UbEM8QgmefQgpcgNAkNbvaGJsX",
  "key6": "2kAANqSMwUFLULWaUYwM6YqGuE7H6TTrGNtkpmSoHNvFpHZdz3fFVnqNrohGW87Fwcfi61pujXHPa1GhKZ4Y6xFj",
  "key7": "5eCk6VfGx8JEuR4vLjb4hQbmajXG5FkpJYGVZ3QxcyBMLFuCmVGhzyZYC2KmYcsme3j5ErAb9LjyEmuXm5Re6J9w",
  "key8": "4nDuEfes7iqjZDLpHVqFrB8ZzAGhwKr5v4LwraK6DMjCfA79D48CkMrAcBtBcwvLfcqAMki24YDFpn8gtDwA5yT8",
  "key9": "qs4MMKyhQZ514orjJeWEGS1QBAGDjcbFrsTLikqx7JZm1BNk5h2qfdAfXfh1o5DPPqQE7CrbXTBL3JKFSWMZh1f",
  "key10": "66gq3hRkdd62BonHdjL25wtkcADk8HfEwm6Jzh6HkNTtfUhR7sBsbgLf9GskDU8edVsEwt4ogrD3cNiWowvpX83F",
  "key11": "4w6Heyi5qk4oZPyLu4HR5hCXEBuWukoWt5GYKFDvdZ1ruHZ1cciznKcV947YVeFT8Q1x7PyFUzwPzEeeEUEhLj9r",
  "key12": "2L1cvzoXvhA2jvPwQBf5EBJ47DvRMUNDrjyvkLGtYBwx63D984Ar2bNj9GcP4zq783TDZuYtaQcxqMFwFMCroSy5",
  "key13": "GZturcASNxWqQs7zxrwjwk8iG9uqFBpnbwybZkgcykyV9vjQCQFruiVbWjNdrzTe7xyEGExV6aL42TwBXkbWc3q",
  "key14": "2sQsPfrBur9zfEHu9eRpE23CghxEa9i3zHG2NhJzeQsxCtWwojKe1rDrf3AtXCbfpb5aqasyHUVfF7fuj1NWGWsV",
  "key15": "3hATWWixbBvVhnTYjsXqMYqwak8xXk2ZQsUPiG4z4EJn26nGiWRyZJnjh3pb7BAGydZ3kLPDhjFVFjE3JnNLnbHw",
  "key16": "21bhSkaLEJrAuBfkxWxC8ENnVAQrZkXiNtw3TCoubc1oiJ9MFNMMoUVP5vxSvifUZmdNga1u6U67e97CRvJUmNsa",
  "key17": "3CRK3mrziCBfon5TQmooUnee6g3KVuTggvnBNvNwqdmoENy7zLjjvi4WCg6dnqSkGfb8bY56ne7KwQj7NuJpt3yt",
  "key18": "2VhdD7VA4aigZ9MzipcVX8CWPNi1A6iAPVrCJnuDwVMu1WrrdnJvGBfYVCaecFWzmTfFtm7vEBBpa4Q29oUTN6dM",
  "key19": "4ZMbnpHC7CNGzUUjjdhqrzuwBUFdNDHXiwvG9iKiYfT1TLZD6xVvF5BZBwEKGMyLhS19psbJr2bF7k1JWpTq9Hkn",
  "key20": "4JLxkAUWqZUu6EuWp3qGGAPGEYXsBrzo8zvRy6zSPhouHiUQ7HME9Rvzk96pXNU4xVWkx9aqudSJtCVgFLdJ16qd",
  "key21": "3YBGxjz9wffYPe8vLEEuiXciemgWooAcfi91ovaVoSTRkBxEUC5WPJpuiHVbhnvSbvrVRSM3twJPveTbcVZeXBeG",
  "key22": "8bgpigaguTQhcp39sDcSFoFeAp8a5nJ5hMeQH9kNBGqSAUt79p6vhFm6EBebQwmcEvQ1gknMrjaK5bBkEBuStGK",
  "key23": "39ZWzov38Tuy8Vo98WvyUTfwijzdRW3qffvcYWj7Tzi578JaPqQbiZhAXaSEdvccjsP5DbuQz7DM1HRZGTNgUK11",
  "key24": "44GQoZ3SxnaMDPch2c5DSZeds4ctHJJrPEzMRXwqPVbwWLcBXvmhwSuFMxomqR4mvNDcjr8USNH3HrnAh5kE9iG5",
  "key25": "3e5RnuATVYYtESK7YNkempJSjjDeazTnuVEPesyX2cDrQ1np4qLTDzFefdiN2oRRaHK2ypyW6gpVpyHJnDVHx8gQ",
  "key26": "6XqXHNAXY26AA2z1fyEVyornwtw5BXUFNxxYZg7iCyWMykBmqUY2WMRtyQHqJtUK3hJDaFSGxt7ryFpneNBtqPH",
  "key27": "47jVr64robknkPYxT4TUD2aEmSQLPi2PTNQkuLTE2DmJmV3XSTgsq1eopvdpquvktHWfcweHKPWKFBRYTtJJZgri",
  "key28": "3o7qST6aj6VycrzYQFdv3pr29dAQkMeQRHZj1G5pKJzPbxJd2mo9ViJLyMhmsPjCX8aYAJo5YacHjKj9Ww64K21V",
  "key29": "2HrHQAgSBA3HS621PARJu6MeuUD1MYWxfAy7c73F4Sr7MgNMXJRb4d3Px61j2JSrXZF6FfKLG2azoxbdhu8CKq7B",
  "key30": "35Bz7oYhbrVb2xgAXEKNjajGSaosXmw8J4njpnAxAA9SF94WM4b6ffqbRwEzCw16seM2TQePxX6iLimbLM2dUVCL",
  "key31": "5nHq5Do3yg7NYxPuAjD6V3o9WAh6wW3THkndGkYVikJUeA9a3pLrcMPrHp1JZQ5gagYYNscZNoeCwk9CTCaZBg6",
  "key32": "35XgMUJf79FktMhjHLH56seNwEK1Eu6bj41PyPUwSaANhFEEserwM2mdMcjhyqbQ45eVt5ZmZyTZ6Y1HdaofuSa7",
  "key33": "NHDfKoDs8YDbr2YKE91SaU6iaGNjqwPf6fVnY9P9zYKAzxAsD7rNs7WocfY3ajqZ3Fu8Whwy5RcebxWbWsTTYC1",
  "key34": "5m62RWyk7QdFTsKEn6vNY8dHrp45VvNCSHctM7kKY2aFNdwYgcsWHgPHFhW6drGB9rjnuYxPuobpKutiyVCkBUmD",
  "key35": "5wfgVRQQS7txRKvKnWjDvoBhBTMc3xDMXngct6BzxVuKegRtbg7AFpRYXNjoCmKUJk78tpZGdKA3iCbrqY2GRFZ4",
  "key36": "teuCCpUZZkr7epX7WXAdfhwGN3UCEW5qEDCwkrck8yci9qij4BZEZR2CZ5vgrJe43d6G46MuwnGYTUzGSLpTkuU",
  "key37": "3HCkqRhtXJ3dnaLw18WN73x7aXmvrejosdvUgQtCDJSn2iwPmHaRSuc2x7kS5ZXVJa6c6CiXKMJnJAFXocWqgVgj",
  "key38": "3Ui1j2rPdXtqkbCDQbMjGCYTfxRc5NU31AxD68MgmSVUQQURhf7LewBoRd9vnmUtrLWaycbiMj4ru7U4bfYjkurH"
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
