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
    "2ehXAoaLVBch4kjcPNHuhVEk7sK14LEVcvZizZdiPoBTkszw3rceQHLUAgqBcikjmmCoj8AH8Lb3fjfFtY1iUe6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PdqPYrjt7umYjpjJGN3AfJj87GJ885BvJBGe1HasuugrfbYJMYhaUEa1e4tQMLYqZrMMPsTQRQY8p3NQUvEoeq",
  "key1": "585tC1usqsEpoQDRCJUR4SZb9HxCRZFUyURw62VvccgRjqhS3M1miQCxk2TBP2zgekK79L6RrCzdQdzAGoFyYouv",
  "key2": "31q4XznZgmSUVWCwE91UgBbUcegNr1hRfXefH8xQXWrFJjcycqztMfbrj2TU84R63BtCzNn8rymLcpCSTZ5fvRdi",
  "key3": "31ZoGJHWD7T2nBG1ycx3SN9a1LtgYNXNrVFfcDVGYunHDpob9aKjBr6SUGznCebD2UXT6pbVdHMy7F9feoRgHds5",
  "key4": "39BDcV9NV9qPqNLB3t4mJXUEbCa4JTBVrjHEU3Tx5Zg5xjrtpvmDXo3FfjHAoF7yoTu2U3pzqNLJfSmRzUomB5EA",
  "key5": "bgjhBXY8oY8Jy7KhHtEH6587pKcCXfN8yjxnByHAthMmY1DKMtKU8azZt1mpkumDD5JBSrDYY96CzBr6C3bcmHc",
  "key6": "5o1YvzgcXSTfNKiTCNMd8Xg82gc6Y3PoEUYNKxKqhRdz9EWLpJ85x5MprABQ1Sm66ywweiBz27NQBPQbrdtL4wKZ",
  "key7": "p3ek6wvd7ifcfGF8BqDnER3t82exybeju31M8kBS18VqvFPvSUu4DSR441Mexs3PwnaULhm7rR3CM7tT1Y5kEzu",
  "key8": "77Aq3ACRTdQgQ1Z6B1kxt4takFEhpiGAaZmHLvq3uuJoxUgqgoRy3WbHc5n7Xp6Uojkjktt4ukPFK37aTDErwZy",
  "key9": "5erzeAaGyrjgQAX9sAiNB31Siv8G5GWME87ww4hF3jseJoWPkFaCriYhcqszfXRJVwD6PGVcWRmDvhS8u5qqSfBR",
  "key10": "2mUZRegS7pZBfK9Nmngegroy92CHBiyfgANURn4cMA5P57WwRRpo11aFp8TvRHLpAMe5rRqog3btJ2FgxM46ck11",
  "key11": "3MAkGCEqU7H5ckRVJvfe11Zxb2hANfpNfCF4WXhz6Kim4rD8M5bLqhcW21eBPjUfbBYuVeFSmAy7j3rQB8grCxJ",
  "key12": "4NgFF4obvQ4VmV2J8SUCHv6M3e8r2NiTP879M6Yx9uPcBanU2NAFUY3LKTKiqLkCWGwmDjrU4KSnYNjt4XUfsz1V",
  "key13": "2mQpT3JkpUvPDuavWbTGFrCXUus7o5btptHLGk1djVcHmSvbWALV1EkRs7gddyWwSYNMQpxKTCVhJ1YVQkDv27q",
  "key14": "2p13KJbYb86fHAmbszmvpDRXmKgujVG7pVezAhH8vGqGHk6cAMUgDt9wPdSsV8eRtKUWacfsDht9EGMWVEGhX3jr",
  "key15": "3hWTEKZgNqFEMU5jx1fbinnY9ZDQSUmwUJecQbptP1GB32SKt28bLZrB9RRbvTVEvD2xcMzcquY3tabFwt7v6CKR",
  "key16": "2QXH3MDoNN1yQTrhRAGt9qcfJRuqbpa2pyBwvwEX77xy3KtQRdmsjuyrTzd4vAsgU2D8kV3hH56PZWNnAaxRxncF",
  "key17": "4TmHHRCaPdFksTZCUCr4qHf2qWhgdT6Eaoz4orTknc3VxmtFhWQ8Wo27vAdhFbhyD7m7YoiyjMLaPuKMsNdcN6D8",
  "key18": "37Ez4qektBAT1ex2hANZaxUYMUwJxZ5hsSm1kcaqRVRcM2DaPoSLoTJZ6xsGzVDRKtVfb7mZMWYwW5XJc7rcCjm6",
  "key19": "41WR2YrnPacV8BaX26ZECpXLxzt5GKrgLUno5HkGh7dsvFTgg4ApKYgexXrJ3CyM1HBdsgo9gYLiTVct4KLiF4aT",
  "key20": "4UMwPtkNP6TaRfKFA8omeRLXjUDJhqBb5ytG49mapZ5VHQnfAVqsB37Y4nyaYkqU1MwtrtiWtUkmsERJWfNz5kp2",
  "key21": "4EJCWwwBxDuYLR9SFCfeLDX7bLSpz8eQCzWgA8tHzSFDahvEpHG8oFjXnCaDvBvgFDCkxiiSsRvRVWHkMWZSwhG7",
  "key22": "4NguCWzbG6Nw1eW7qkDVWGheyRiBVo3vYV4HzNuhP5bpoCraBSVC1Uv7yJjtUscBSJQqttgqxEBpGHd8esRMzJfm",
  "key23": "r3sNxNATJQfYVnGfzEydefzaRmjawVaVPtKhH7AyRBqCg7GN9wQ44176TGjVMaBJwuD8LgGCzY1ijfwZxjJEPsS",
  "key24": "4ER6WX7THSwv1AGZfuQfuhzC318ecwaoYHTrxauyT5WGuQQWBp1fecAM3xVRn6aJ8zb4B4S3gTU8A9tbTTWig5kc",
  "key25": "36MSVe3zYSNEANR7J3hmUpkHWcHRZDhckDJkd9r5c82RU3RgEEQ8S9wCDbDKXHHHwcx27hgUpKfZAGgNdphQo2fp",
  "key26": "49eWUgPRscCw4AHr8QTx7EZsrEwuUiaJX1xreu3Cfrn3UfspbCfheEpGhCkEGXqDkLoMmZzjz46U4QXLWWPup4ty",
  "key27": "YYQ3AR2jydFjs8nPqATwPbh59AoPeMwunMLz2XWgJAdzrHDJntQhxAZXpYHcB6ev1qtHWd3TghgxVCMunJH8Mjg",
  "key28": "831ju9S1LEEsbZKErjJCbP3JcQggDLrJET8xdoNH3BjswyyXDPqZVRkUXFfgCsZKydTfeetTUvynkdayPTu3sbX",
  "key29": "3ddskHeDYLgCd85w63U2JRK5KpBr1qPXmH65iiKTQ2Uz95Z4Ac1MX1PsWKCAk83z5xaiob6VyQRNoGJVjzVHfLjx",
  "key30": "DqmkGo1WmzHEKEXV3KUcPBSZbhyZdTK1RhGYf5BkpqimNG6wimqiRUkcheLg9AQTyxytQZ5XQUedr57eM7Y47b6",
  "key31": "5M7q4oHkn1yRpqsJGmChmcKMGNb1TVUgaLn6CrJEB6sw7QCnWnNCSg5m1ZgA2kUzH9ctxPxP1i6SPnTGx7XxtRTG",
  "key32": "MMaAtXfBoWgnFV9g61aa27Dy8M1aXV3Yq9xLS4UXoXtVvxvBhBuY21dQgmrArcr8BL3u3krx2ddnhqktAQjANe4",
  "key33": "2fHuVYoTEU5NNEwKoSTxrdqDz4Pq6q5oojCeoYgXhG9LJkz4jFxnEzKPpSBayhRhNo4z5nADAkXg2AMLbrx7YDgr"
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
