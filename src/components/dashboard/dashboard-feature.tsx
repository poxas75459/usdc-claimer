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
    "43JLVyGrPtVYJ3XVZsbBQqjhUgksk6o1AWkY2hk9fksy7zvuVGKwab143kARYNqbDURKAjdZNVEscuSidw7EYWc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568DeP2tLfwaTLzhTCEzWLZjvpmoQrfasenBvDHosBk4fqxjHk3kgW3kgKNqapB97voBbG4foVqft1omp4GEm37T",
  "key1": "3ZburFv3dj5sdFiNgoUNU1wPPndYgqyLVnz8hjjeyxi9TsCiuYeSbWFjcnqQCjLEu1nkQBJovFwibWJzAGsAHPBc",
  "key2": "csFdU6DQufbUq21KzhABHfjySYXu5ayZDS611J1mDHm7P2fG5KzC35f5xEs2gLxi4xu7qNTeGVwEiSEQQn3Cwp1",
  "key3": "yk6ztXsNnypBLnUE4mPtSp4GW94jFAGdNhroPw71mtoe21Chk7WrXYhbNAfXg9wWQeXZoFheqofXpc1zZa9uWjW",
  "key4": "4sso7m58p613SJafLPwZiezkARovb7ZpVWLbLyQVPGUSg7qshxdxvcCtPxyn4ZKDcL4EAxvMxLL7RGXj4VsGakiC",
  "key5": "28GFL97WguMmbC69UfADa6fHmgifwB5kqoNK3CnudjLUE1i6r7bx3RrTRqjMupy14Q54jnBtjzsZXyZ3p1H7DhJj",
  "key6": "4rXm7xPYYsk761FaiXJHn9tYUZvF3Ne8LPJQB9pRY4DHspweFcBaBh1CBKTjnacRM5ZsqnW16cufu53Z5wXYtnvz",
  "key7": "3Y7CBmtWZTedoncu9Pq7aNWz1AnHvonGbn3vQSEnyvsJDdUfi3AayhbUFRm5qtS4s5CKUnYGniBrz1Wory2C6jBk",
  "key8": "5hxAd9mUAYobrVxgtBNz3ZhTov73VsLfSvSthaFpC7PYPXVKfVmV5sbeN1RPEdv5GGhLdchWtJGZTQj5h9fQPnNi",
  "key9": "55LruBRVR7itnEFbuf9DxTb6zh2fjyeibVREAB3LZxhPqwgw4sxkpN2L4tnB5WXosni2XaepYsxWLN3oFZD8LwrH",
  "key10": "4TPHmqaNv5HoYA4DnUe8LAQXR5cZeVrDmXCxRs9aauRfyrR5eWsQUXpxtxCuyGE8qysZAffZd8QnYua4UKJt1Zv2",
  "key11": "VsQP35L1g1VFk7njMZgYM438DtbWYUsQ9EYoHiJGQy2eNapPSRFRrFXeXnQQvJRc7YUv4MiskGswxFPwNHQdAeu",
  "key12": "jfSfgUkPNmYK3K8d2STrws2PAuAEyhnwiCM3q5ABSXsi4yMJkdMzy99TKKzegGnhaTcu14ZKsiYFLBtgSoDb2aE",
  "key13": "3YFW2BuSby4vcYYUnjuQjcmK8JKecHsNij2xy9TWgeLsueaCDYCcmZKzHDdgAxxhr28TRkiYiXmRkTZf2AUaQvqB",
  "key14": "3cKU6FKqoXuqUSXt4cQRKobsEYhXdhUcae8izkekYmNjejeygz1w2DwsyGqWgraTfXcLNECWWwWveo4qG1ETXYk4",
  "key15": "5RC9qHUYFs2Sgjg6e6CXi7s3YiA86PkJfUMiBEhqygwyGhGGH1Q9RH1EPJwg4qEtLZeErcpCBwYgizbQpFxY9ScH",
  "key16": "2mPgfNhrQQFN2i2CSjAdiaVkBMSscLXk193QRndp8RtMjTQmrsBGq4VFG5LxLpKvrbgu8JL8LxRerb1Qhp6vWiRg",
  "key17": "R7x7Qz5mbXnvQv35Kby57tEEh7baawxsBDGg121Y1ia8FBxH1m47kKTsbwcNa1YKn9PUzKxJ6zPwEP2C7kB7eTJ",
  "key18": "3p9J5evhXZZvQiF9Zwtw5hNSqiZtDb1xbGnwL3mCtHym7mTcCzgCavYTbREg778Qw9ypBshSQKbXDRxVegYAgcdX",
  "key19": "4w9jJoHGg2rVGdAUB3e6e6iikhcxYgLH1csGivMoTWFKcpkvBjak9nqTHZufhaNFMDwEUZFhb8kALZ2LK4dYXN4S",
  "key20": "3YdKy6iRmJYTjUebp27QCTm9gpeHeJ81CNBjsf1SbTuMTfm6U8LPPeUQFfd1YeUELmkeJzfK3HXNacL3DmqYitki",
  "key21": "4srJrya1SRFJeWFifXhcZ2y2uXJ4tqfin5rRvgBvH28tQA5sGXkfj3fQPsY58AmCuTTiphQY2VV11dQAynjoSUtD",
  "key22": "5hvQw15frZw3tw6HSit6ZZ2WvWdY8FRz2tzjXLHUz5UUrA5Xb1nAiV9icmBZb98hhVpKa4pPvURH8Ket9fqhcxqN",
  "key23": "4aVSmbfNwobZ6juZZyr3REpB8xEMjjxd3ioSFofci8qPzh7gjAB7YXz28kv6D66chghqVaCvFarqBspXJ1vgJmuf",
  "key24": "LF4JBqLhRPPNTX2xqSXobdTWuuqx2DSp72niZgEAB3vbfYoEwLaviJSZdxCYqtXDi436vFM89qQmoT6naaHRGVN",
  "key25": "54hs1RPGYzyy99Gz9vai7YzuLUhKtAxBL5MKhvQWiniyNkQXuxMJojZjHTMmHYgXf69oU5fXtxL1uwHmjD1KCnhh",
  "key26": "4j8H12gDMJkc9heovWaU2kYYwLTvQPnavCSU1binhk56itYgUx5YMYg6VG3WZEi7FQ9qaXGKZfoAgCHki7djBXJQ",
  "key27": "2Gjp6Qvvx7Rsr3TP8igDRTuxgUavrKUjygr42Hj2U3rMeefQyMKTRxz5HaQ1VN4S5mCGc4wYdYTffJdM4MyR4QmD",
  "key28": "vT3uLiCdXoUaKTf24Jn3CfvfgC1N21ZVcJchVm2NWd5dw8JYDs3eQsAQ7cKHNsqAhuhkbfyBUPf8eRKnTmu1Kpj",
  "key29": "5sqaJpPYtpuof6wHNHAJQq6G1q75ksqF6AcDASwfz5gvbbnoNcDm1wNWUJWcr1vqAjdtQBExLPamiShQmDCysnp",
  "key30": "2eFc2qko5eNXUCo1XpmvRxzYrmvffLHx6JDm8JzGD3WqPzMvmWAV5Xo4ddbaRTHajxsDJQBBk7RjHWVufbnVNooK",
  "key31": "3F57YNNccYE2ZRBm5rzCiuL5LACRQ92f2vihCyowgJ9iZpjpn7b3cabACjfpt82RfVBSA4tBm2Ud5ZHAsXRhRCm2",
  "key32": "3QaoEtZhK5PXDexSPihZcUJH9EmkCpyc2WbPUdZBjWt1yhUK5ML8iigVnTyj5ExWkzJW3XnhjUcwp3zydpPMk5Ax",
  "key33": "4h3uJp7R5QCQ9G3gVJxtTUnfv2ANW74wcxVqzjdUaqrRVw65pUBdDzfbZWoYLiHD14RVL5FuELxwBNH427ZALenY",
  "key34": "4MWpg6j5WkFAYDuc1MvksNBoTEqUAdWVXWJ4JRfUnt3VTMfKvyH8yPw1YYNLrnhyxZuYFjnCRLwWdaHbftLwRsST",
  "key35": "3hLY59oELEwDQ1hpq6bTa9C2kbYf6JHMfEyWvjK2rdqfedd3YxwcT1URLuMfopaAURRT1Rj2VbC2ec6JNCGygSrt",
  "key36": "3YszCSWHcxEigMkGUQ56F7aBMGCGCfBp2BLXYcqjp7xdDQQW3xJVKo8fnDntXKZcPd8KJUP7Fa8pGmiFh7WdDnsZ",
  "key37": "4c13tmzXPcX2G1bD33b5E5Twn4CbygMFCS7xHWZDvjEgpu8oHvHxHMcNM69yXzcmxAEGx5JEJsU8Uuhzt7kz6N1H",
  "key38": "5fMmycc5vxXimx1fKQHWrH55wJzonoaoYoQTxRc4EvTtQNhd85r44JPFCDNffAS5A7yNCQwc46LSrUrVLBGNB3Ea",
  "key39": "5yRJ267H4qTPU8nmwUu715z8Rxgyhu38nzpEafFaDU3dFFBdZ4y15yRkAee4uLeHVboBg1HeMC7UQZQXNuhsTqk7"
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
