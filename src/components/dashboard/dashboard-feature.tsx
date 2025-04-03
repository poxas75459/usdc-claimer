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
    "4CC7VeeLi5FSFuLNEWiwceHoGYm5MNMuVz8pqKw7fkNLu2cX4GpRePG3eU9sEgFXGzWxDCE1tFvsCCTUxoz8SE7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vNMHq2cypH3wRTjourysSB8rWUV4g9jVrUYSTiSaUu3Dz2n5WUR1Hff6Fy3x8eEAVyc2JNjhsAfgzA2Z4TcAdbg",
  "key1": "2N6UoU93x8zEkk4tqndRDbeJMrrUnWa6V4598BHSifHZeCiqrgQLX1yv4FcXxMuwuzLX4P2XQq1ULSvKv9XmbjPb",
  "key2": "2JYgwYVdkxWMiMctzgaSbAc4ZRXL6QiM1NaznpuojcnZEaNSyWqxZFPLTMNWuajVrGx1udeziNiSq7do2RoQAUYw",
  "key3": "2nnSqbdB4ervqJWJ3KhiZoM2jwa2LH9GWZDmK4cLYUhfpMQXLbCyvmn3V6a5BMsZnGXcMAC2AxwcC1NDFJ4pyfRc",
  "key4": "57Mshrbg7uAeuopForUjendXKQN6oVvyaBzPNun86LFu8EcYT3zc7t2kMaCJMfba6sRFneDExyqK22VKmTBrG9vz",
  "key5": "63mSuuJmznrLVMJzu9XNMxRvjQ9E5aKpkYtTFxCuy768gnzRdYJ4YtMjtJ7d1t5wdBjiCVN6xjFNcJntdTZ8G7f7",
  "key6": "nx91pN4LAsTApCDvL3D3WtX2MR3ppGenGqinyU8q17nrhVJrnv4RGi5K6USo1wT3ybT6bBXbtonETapCzUX4WG3",
  "key7": "3Xwrr1KszaxGRasDhkuPbwhscBFUdrVFYUGfkGzazRnjWrjUySjujn8ZxLYrUsTVnGKkJjMfqD3hWqC6E2SNB9YF",
  "key8": "28DMZE1zBW918gsa96TYzuZz7PkaX2TcuwmWEgz3NNb6BdkpubwvDayBwKrUiZbKnmzBPRVBpndPMQ7FfUqagbz9",
  "key9": "5K1LHrRfAKbDN7LkanKJw9xWYujjcqSzqMpRTZ9NpH9PpxQMpEcAhHNEKFAgbd2C19g8QAsV8xqTh5PR8Fyardka",
  "key10": "pYYfatnTG3vZo1x1yfVShtfi7NHP8YLmR7MhCpWCtUPsN9VmfXDEzAN4kqkCRKzGf1G5p9DhH6aAx4Se7yFLfZ1",
  "key11": "63a1nqZJLwWjfN8NcMSwweYSfRWeEjfHjDjCXYN5nL79KoYKB6aiUCwFpkx3uZgaAUmoxywho2ied4SZVhtjFNtx",
  "key12": "5DxTPoPfY91wxoyyNsfrQgFs5CgN1uGAqijcvWfLi9FVVM11aG47BZL4eM9mNDCaSGcaPsYoNL8vCUjxDVWzuzbG",
  "key13": "5WVLwhCNLBT4go2hEuR2oLxG9zbyrn6Jcbs3ecPriMqcf4gnJ7Mde1rECJqA4eEbcPRYC3oS1KzkvBzksD52DKmj",
  "key14": "5BV3dNe2866VKxqBCrswvKnCYE8rXS9XHJBiWWq3HDAK4tRoWsc5rzymvF6ehxqpULYKMrgpBKSuu8TcdZoz96MF",
  "key15": "1H1rKd6Dy59PohbvEF6tkSgMZQjVKU5UCiTgBENFLJd9W46hK7JWBg7RaqGNEkky6kkATSKcVsDYAaDHYQpTm7F",
  "key16": "4TsJzX9By2H4ppjt9r1Qz8DcnVNDHm6PfP7hKiQSetK66tmm3wTEhmVxyWDqEMroWZ4QtfysLRXpwvATbcSEh9Qd",
  "key17": "2u5RFpyqzQEnmhZDtxYp7tTwqhGeh4Yji3gbP2SgAmswTkB6jN5uoGCjN4dgUg9Mws5LrBSNyuzta3R4w56CX49Y",
  "key18": "5HandFG3XSxM8R32QDL9XoLMK3x4NJsY7vz8p7Sm2fUayobVVC9JF1RKajnUp3LCYZ9NLUPredFNRhfmPRfLYaBQ",
  "key19": "5fYk35PjBxnGwDTynJg114XZyrPZ6KfH6bdBhWNQcofPqFrVw8u959N5Y7HfKVEsA68u8n828ngYjqpY4JQfGYSp",
  "key20": "hswvALuZQvgoD7ck62nURpvxyTHzxDxHLaLHJhFibx46Kdb5DKjMrji8AWh36FVGoHoQjmVJBZD5Cr6NciV3NiU",
  "key21": "4DzSrjR6kTHSCyhhuN5TAzZRHJa3VdwpTrZrpbriELTahaRMhb5c6HNj6G1J6SUEa31tNJHSfysEBmoxgniej9wf",
  "key22": "5Eis7gBDKyPsHGS9nqQunTFkCdt8Lqo3sfjzbtCbjYq6N5iHCJGK7tqwAo44uDHuZQ8Z4xjFjnpJEx6EFvVVHiRp",
  "key23": "34oQcyGHjnDy5vVi7osBTCmycdvH3G8nXuseg7dDupJ1LvbzPhp5UHGPWKyvzm4VqXV7mGGSCzg77Xd5AaZxP3JF",
  "key24": "5Y7MvQa7kVQY7zXpSRcwRzkWquQaW5wdx1VPiYit3ngwbVn4jGvpMdBnYPP9yQC4pBCPy4FQJ4oj7gnnG8oALavG",
  "key25": "2QWKEggbGADvcRUkzF5f6ETrLcDJfkx9QGBaDsLy5UT1sUjKDkZJLiHn4H7bahHxhsY8GvMear78znnvCXPvqMkc",
  "key26": "5C9BxV9p4jWQ4VGg6aRiwo38AMfG2jw2wiFDoRvFJqqwC4hV3AMHscZPCoqUsFEAJJCg8pEScr2q7DnNXegmzsNx",
  "key27": "2icBfxtCsDPgHf5FoHZf4RKqrX9TX19cUQNCGiuo9BVaR9rfHz2K76i9WcxuHjBDkpNFBL3DN2dDivJcc5JCW4Wq",
  "key28": "3Yx9znHdscev7vDNf5YaZCzzHZKUeFD3dFuzwJhRzyW4VammFRzUPEspx66aG4U3kD74SAUy4iXkDM9Z6bBDeKbD",
  "key29": "2G7jydKH4yhLj2U43DdUfJiSEjYqhmgDRHUo16aa2TaUYvbr5XCcsg7mFbby4US5FC3CDeGnBJCjtWRNepjQhktU",
  "key30": "3rzaVZGWvaaDrCmbQoBALvpmZmY6GCdQVohk1tQMSGmV5Ta4xtogFDn3kM53Mct3WVKLNN4vth73ZTEn9cVWFxhL",
  "key31": "2NkRHEuGq3356muyUPXpZm8Jrxm3cDUnp9ainv8LtfG18gB3HyWVAXs4C4zs23xCnnFXtwDwtkZenxzgBzzqrMos",
  "key32": "5NRnReWyD861VMhbQuLP3t5hWkoXVnFiF55apnPszfhFbQkvpJzUT7tPSUhQmzUQKgC8evx9UK8Jzfu4Vgq1Nq6A",
  "key33": "5QPPvfXEPQPNRTMVaDMrUaRcMnixEXkkVVHRzx83V79513XSWs9foDYGzdAowCjbXc7XEgejGhVEZdPRXh8P31kr",
  "key34": "3mFDgi7KbyeoJH77fMcvgcWFJSinRBpsdktQr3MVNRF1f2B3svbCqMLzw9nugQBVDAiB4xKMctWTdJTw5hzX9un6",
  "key35": "24iSSq55KV4rGE8g88TAAFVouBbFqtaE9hxyKQfpsC4VjMWdPBruZ7cuU4DZEVRjri5iLczSB5r3m35L7PCHkDVE"
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
