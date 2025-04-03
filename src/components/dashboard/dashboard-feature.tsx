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
    "nQj2hjzBM3DLmcYVTtd7zEsYD3et3abShan8VNT62YBh89omT7s7FaanBsbB9seCnv6fNF9QvVZMBkpShZVHH5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEKzLSy8cqkkJh29TWetxQ8xfoMNm9aejJcAFYwzvihxTj1AeDCc7Rgerh9c3drqpatKTHTSf85TV9P4ZNeJ8fX",
  "key1": "5PricV34LNz1NZss9GxUkioNJrL3DEGdPRZ8ow3gBV3Bgy7qaxvovEgx2MNZLdBVANQkvtgkSRhf2Rdc6SaKr3nP",
  "key2": "2XCW2bGBhvyQbGj9eA28w5LRXE1PAhy2b2DBvve6WbHerFdR4G6VJbD7YLsAvgYrfZR7NDtAmKacweD2LfR2dMa7",
  "key3": "44tvHu3x7RkaBV18yRUQ7vDiDnn9CzP7AQSXC37dPyeaL1s95sw6Xu9UuPfXfqGGWpP6LU9XbyA3Tc9LUsZihoJy",
  "key4": "3A2wSnPXykm5Ze85cbgX2DCDHdWHHWABKpz7uSHshHUvUkwgy7XU6iYuHT1qBCTmMtYC2ncYppjvtVjQA5WfcNa4",
  "key5": "4BkcTMY6g4BMdcxAxABmALvtB9EgyE3qXeTPFSudyddgHorf98HVAyCs9q9gfmXraayyAhicbewpngw5e34nK9So",
  "key6": "V5vdkq2heDTbsZXcAwo9RgGvdry4SnP3xZU9t4EazSiSjjwdEbQdf828CAHXnw4JH5TJjKa6PNbKvqXv53pZ62i",
  "key7": "5hzvE8Lg8KDszevkNdk3pfk3wxvEzWqvSmojHbNn7vPYTp5MAauGFwqNvQ2WhWMiyZLfEnCZ92wbmiYtc4hxAegW",
  "key8": "4s5MEeptLagq5cFqraGKSBaha7e6iTrD49PnNNjKfdCjfKXTi7EjrqWrpYtFodSD86BNzpi8isSEmbn8wenghJ59",
  "key9": "xjrLYnjuH17rdy3JCtrxDhpsr2oFDGodQjof4xVzjz7QqPBT8MrNuAoK1Xrj9oBQgHjXDtvGpvvYGSVaS2wBk6e",
  "key10": "6368bbVNQDU5FdMXuAxj42J7jmBteg6mFHLEvAmV7hbC2UuMqzxcJE1prXRxWDuF8P1CNzfGjy91T7FYTJDkyVC1",
  "key11": "39RuMn2fZ2QkFr6vb6HLevdFGGfCmH4jkgY9W9CY9HzgCmzVdW41s3q7Ub5PrHdG3bSRLB8c9vnZA6fAWsg1LRLj",
  "key12": "2F3rp41EQoZ1ypxYE7spUR8yKtnBy3sKrSiRvuEZDy6Gr2MfHzJm5YKKoZPY4dEHGKndHiHRAMKnbWFmu3jJie9L",
  "key13": "2BTtNXXntbGeBszASNA4qgk4QLATpgXrWGzj8cQL4k2xmh8JkjtTdoMigAPMv47Xj9Tb4G3zNWZEPBU1TrtUDGL2",
  "key14": "5sHt5F25wK96nrjir7QS1G1qSnRYM2xeMJjzLxX2jkLphCZL1FS4qoDHQwJ49mh8u4SHAMhRumzMYvHhZ4hGRsLf",
  "key15": "5WwuSAvdnPg7HbQxZ3HVBTHngwTTbf82NKp6TVFHJyDYhf2DSNupBUvSAuYj4gow7xFd5v1P9WQ2QgMNAsLyiY2b",
  "key16": "5fs4s2LCZbMhBj1zQbpn5FqXvFCJs6yrCchi2TpVg3noj5ckUe5VaWCxZHbrCJUEvYJoNPSaPmuxsW6UP5rbebx8",
  "key17": "43YYZ3Ej5CuNnhp8K7SgSeTmkfrx87hnFoPrGENhg4N8x2nC4L8qzfU2GWLJfEjP5eu7EQdQGZymueFX8tZpiHoA",
  "key18": "34Doy9bChzUSvgijFLpQiwQRXweHtmLAKWrwyYEQY3Z4KPPABciMP8Y7MDPvrQEat9pAWyseW6a5rWdSJR9RWoLD",
  "key19": "4TrfTJ6aP6kStxbJRUPpgGW9srJBZhuJ9XwxHZtvG4fdqsvYiGddEiNf2bHUakySpXtWexw3Aesgnduf4ogdqu8E",
  "key20": "2kwKwAwrZZHAgbeSKtS37p9Le4PdB7i3iyU4bpjox69gfVV6mzt6cnryfvFHnuhPfwJAJH2iGawp3q5wq7s1NnX8",
  "key21": "2CiYRQVcSZ7NatkmqA2vhwCZNy9LuAanYH6R1kEGjYPqijokHCKbSQqw6sPYvejJoqqECoUWc8ZxBLCQiPWzBMVb",
  "key22": "3dwLgatRpCFPuhdTALC6ZRojoSvQ3nqaCLWDabyDSzTvSwwhpFHx8weZJj5U5ivUtJu8GmKLMvxfRLbPpf6q8zeu",
  "key23": "2QiSynBNswMvJ9C5oz4Xr98p3RcsQEbaRrQh9XiChgXJq8PmYeB7ogiYaK13vJSpebzdJnQxgbJK2MN88iGij8mv",
  "key24": "2cPKfjFpDr65ghSgLvmvXtXAM5pJLv8sUa1UT9D42yQDYGJFBFHbeGr35Yyr72vxyr8nqHNmPwe7kVsWMpXY6Fxk",
  "key25": "5ubhVpPkfYAA2UxwkZj6XESUyaPU31wZYK2Mw7FpCYpp5zHTFvfmEiDdcYqpXztMkpZp4jWLTY3YAWZJyn77dMPs",
  "key26": "tUbgXB2PJQH2C4sEfpLvDCRuXDv2tQbpTtU82yuMYpRtKi7hcQVXLj6G1MRS6ff5GKF1yXh9twmiXQxK89oko4V",
  "key27": "4cbUagLDRZ3N34E5G5j8B3VoM3WtkjbZYDt9u5Z3qqqxx8GLymZSU3krLvK2mkAJ2J5H8EWVTR1Mac3dzG7wYg7p",
  "key28": "3bSKftv8VsagYc9oLEPH2YEvhgVWWecyoo1irfX7S33XrmkPFUQB9V5hzS9w2kheJXtxzv7b7EWJ68Lhgbx9iWXb"
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
