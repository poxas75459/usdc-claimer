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
    "5b7nQLonjqLk2CmYrGEaDhcenPuFpRYuHS2DvFtuQQsTz4534sWrpya1GYzoVFm953EMyEB8moKqzMoFuMw7EMh3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXBjgFgNe1VkpsKBscXKGhemzfkKqdPM1bwfdCYXK412x4inGx22fxAPyaeXiQ6CPTcNrYDC3gzdJqQHEQwE9FX",
  "key1": "UDEnBrxwJvjFUHenofxQtFPSxW5wL5eqaGHCzuXcjGWdAj7b9S2GekPFpSc1TQkWTktjkbBLEXKJeK3WGZ4ucJV",
  "key2": "2v4z7inyAqVrFeTdZkQW1GPYA22eCGTNJZzL6yVppwrfGJDPACxsnYxCCtFFuFqMVsstMWrnJQSjoCbCMbKXhAa8",
  "key3": "4eMpxUVnmc7eebrFJqVaMc2Tid5tYargGjkXJc7pAwJ2PSEWeXhQ7yjC6T1MT6yBanrQCY7A8xHcD2PjgwuVnwgw",
  "key4": "36kVSB8fDUtBFiDoMoLLLeNWKhDdhvH5cLTbeGAiFT4DWTi74AM61VKVjMHiRJodds22xKMMGcxYD7ws3zwNMgWN",
  "key5": "3NAU7FS6EhsqYuBUJH4SL18Ct5GgmGrL77WdsizdohybTHYZEEqYNbBgNtZUHpTay8Hg9CDCzP6uGkQNuZwyk1MW",
  "key6": "54qZg4tfM8nwBJDcTkycqbHNXXi7UbkYJTPQYNEu9tc5XXjRLRFHPgDap4CB7QpsEXPXSZ37edTgAZstrQ8i76Ge",
  "key7": "oMwt11ccUrhFm5wgFMKdvPhSTXmF8S58fEJc31MSgizubnaJYF4xn9ybXLCybbM4NncwkzXSNMFJhJbngTV3si7",
  "key8": "2Zed6vqviK2DBUbYqrvcUA5fDeC9gB5mbtKgqyU2mKhRearG9XHzFHHUMtMzmWVPLZzgRzdLX89TU9sheMDWwFs4",
  "key9": "5YPec6VRe7uZtSW28d63LUFLsMhQuyEC2rf9ETeSzKYzJDMvB8bg1wAVSV4xgFksVFDQFGULHH9W54APEsYnKMWX",
  "key10": "41hhFAXwrtLx8z8TGw9p45oZoGXXhDZ4RSVN7LDwoZuN9xKesynnSoaVL3XBE4kjN9mqo5mcuyf25Qssdhvawhta",
  "key11": "2fXpstHdG2qGfY532CrwGASWqNYhyga26Xqek6Y74UpYhHj44HbL4duHVWzEF73itz1fABnHeN5YA4zux7JJGW3G",
  "key12": "5x94rpE2FJnrhFRgxJLyVjd1XJrKKvLvbhbyHt9NrzRtpKwRWqDANdgqeRTeL4hY3cRkNkJF2FccaiosRR8uQPPh",
  "key13": "4KtGpC1sdFopMgT2YX2MFhGP3GsBUkYVfCW6MsmfZt1w1Ad4yS6wBEVToFd4pQMXwycPSrVyFVV5v4GurgQxyrTo",
  "key14": "2y4SQ7eYJPTjDQ6sp1WDtdi3T2KtWgCQpfvaMS8TNGhm2Gxj9r3vitkjSdyexvX8kzCNNcmLPZXYNvJGDx67SZg5",
  "key15": "4FPugXwzvotuDyosy8gZJHDt33yAgdZ4C16yzk7Xd4QTRbhVwrRetdL9EioPomUdJr8WmV15ZpYmhWRe1PHrN1Z8",
  "key16": "2ngcV3GaHd1DmrpvXh3dqp7S5REEyWTzPhRKF2Rd7RkLJFxRQ2DRt17qPNjSbCnyUAifFP8says99xsqGUtnRNqo",
  "key17": "ct7X3iFy2ra552XeCvxSHu2KGYed5bwoR91pfwxsCerpKkAFSLEskBejyzV54F5R4sttosHAswA9heqtMezoimt",
  "key18": "4SFgWsnhp6UKfqBFJjrwnkcXstVsT3mcPxhECSAPAvzQXrZBSP151rEZow3Ji3Yn1Nq9PCgDmPF5353QwF1YU4U",
  "key19": "3Jfuxu8FLbt1nHqnv9fRpAoFAPUENLFb4hJ95HY5fvfoWQpBCZGQkwgCmpXd6ukWam5xGXcLD8jwTxB38YEBG2QM",
  "key20": "5fMSk4sjkdZj7tidp9KcPUYxiAFoaVEt4tjQeUYgDXfSg9NEnVRa4p9X8bLQBNiNjyApuRy5dK4LB3hXbtRpXSCW",
  "key21": "tFsvFPz3eDEixGooMuerhVdeZWr4UBJg8RAnkW1ZAzXoDqTYwnWkQLeqvYknGey7i9wNE488JyoWqfiZ3BGLbpp",
  "key22": "3FL7WgY8c1ZkzKSgn3EXDzdyFtUrUWtY5wvnC19TF18LvdhK52Aqsu7YEj1U5PGUMeomXRriDU7fyGRecLVoVd3N",
  "key23": "3HopgCf4td1KW3XnDm2iqRYEx99o6LNhtJSPpufkiJEnscn6EXawaqEtE9hu3zT7Vo9BywttfJNZ7pGo3dGJHGrV",
  "key24": "2dX5eog8RiSXpFBBvpJaVZj6Xj7yL16Ytf1Tb249xBRAKcK1W3ki72konadJCrosZY5SKVD9rQd4J6SxWBScjHfa",
  "key25": "2HaV8iswbqUb4dwhARgEGawfnMs8BRYyXeNAqZybeE2oEF3AYC1yXcqFGCrKuteq79uVzpju331STkajBaHVaxYF",
  "key26": "32YmHN4KvWdchfm9vMjqLYPJpVdvKjfw6ojVuopF7pzWrnDFF49ehRq3D6F91N548T8kgKUsWiTwUqWCfNYDF6RQ",
  "key27": "63DtTnanaRFckdZFsABt78kawPBe2XBtqNPw1KiPWrn3FyV8ShE9oDuUapn1hJmNTUWRrsnUVjHAtZxNM5TTeiYU",
  "key28": "2FBxD6FMzBdr6UUFSAaP2upWhbfSKSYLMS7N2GbDegrozzSBehZPqgfE2rKHHvjBvAZeUwKewLxxJ3k7soFekhQi",
  "key29": "3e6xKeBCzavGmz49PAjLiDtxLyAa61u8wGaAmtogsphtv1qtnezJhheBwM6ytLLHnDTa7X2vCtdMPBXT6E95BaNp"
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
