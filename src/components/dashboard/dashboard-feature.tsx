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
    "5s5oY6JD7TGZG34rGGUak53epNv8yKF1qPznaTWKSce89dqcn9MUg39HRHBKioT7PhwdViLq38sSof34SdW3Y9YQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xBPxUHfDbZVLknpsKzi3Jt4qTdHzx6tFi8F5kbj513mLQYj41dqgRWZ7AnmBca7Wm2HNDy33X1YegZ25JGJx4m",
  "key1": "pBpjaRUkZ1bcsYULc8rE3hYM8K3XutLu27g2Xt3G6FxXh71onXb9SZ5Dc4kJNinaBRcWMFXinwazg9cQNH1uFsQ",
  "key2": "jNyfBmWjhuyBvUcmzhmhXgKdixagPmWvYhYjWDtRRbjfzYR8AxsAyx2WfHUr6pm9p3w8ZQPMSJGqedFqSVCmeuM",
  "key3": "4Pn6bCA8LgZcVa1tSZkafELU6nZS1vBuGfkpmswFkDfPyMiJVmw2HJxsUwQ2Wheh5unn8z67MbrVeS27fstGPZ4g",
  "key4": "4sVE4kFRpYP7XKK4i2E2qS9cgY87J9pDtAWTmUaU8ErdhTmt3K7FRrX96sg8317NatPiSa1f8wqtrmaGAzgP8bAa",
  "key5": "maYmPFK3XsNEgodejgFJ3QVHBhvEMLoRKU6VfgV3eyR6b1Fi3GQQE8NioeZZZzv6A8EgFNcvzv2SitdKzAapKRc",
  "key6": "4Hax7PPidnqT3ZZJ4xN77sjTLbBch1KGuiXVs83YKgp3pDThrfiX6g46pe1Sc1ZBzqndbZXdDuZLiHKRtS74hkjN",
  "key7": "3MadaxDCuUFRzNSNNmzd8nhpZRLEZx3MWfgcRkSZGB4FR91FgsNv6QFBGMhtHbsP7MXTi8WuNPXVpjpEZzfT7e7b",
  "key8": "tJgWfn1Xzx6njMqph1gMp9XjCkp5NPQrQPCn3UrSQqzsEgkvTweabQ6E4iyP3wxnP77t1cUrt2UbNgh5KDRt2nQ",
  "key9": "R3iJnDc65dirL1sweVzn6voXxzf1Fv4TzWjZhgxgxH9uP2F1hNLu1sQmPBDeYWR8Ktye4BDgzeX67LL1g8ct1Ps",
  "key10": "44czFpsdDxkStif2q6qWff5VwvGHvPFg7FytaAD8wnwE4ajGcfUVWawVLhxFznAZdY3GqvycqvGFbkei47ACzkeb",
  "key11": "2QAyJrXiqVcAanQEQtscf7EWUGR3aw4murMr46VjmPVC7sD2ComxtUokrprdgTcaY3doQSU4Zt7N1hLMJbpHwPAC",
  "key12": "Zv3ATzCxgW7BZ6Gd4DWjuLvfVHEarf16qR7H5ENuLskhU9i3Df3sEQna4jqSe4R75KCQCX944ttihNPMJzLrZji",
  "key13": "BrFZUBG3QEKQFy8hQVwztsahc5Yuh8kRP4FM9dXLvzCvM6DoVWpAdB3sNezNzgkpQL5VRBvY9CSwMWLMhyA2CbC",
  "key14": "3y43rBKyx5DrTcn6ZbiLAo6TeAHZVQFn9Teografc6dcKDbNUsT4LtqABX861vEwHefAAmGYUSGpbis9QHL697m2",
  "key15": "4V3ySvAGwy3Tx2gEfAoyNnf5wqbAS8iEKqsXkd3a4SzA4zMUHaFd8wGxrsPY2eh4k7RswhF5g5Bisf6YncvhYP6g",
  "key16": "5HWk9aUJ9yqvLPrehbVhfGuAEkCbx8qjeE3cWRH6m7jMjbiTuFREabUbdLQitZX9K3nFZzPZCMhQBq2a6FtEQ2es",
  "key17": "f5mT2U45ZDg8SXUu6A2nCvVv2jLarbDvvnMU1JEJEFKBjLodTRUx4T3vU9usUW2BxMULU5E9czGhBSkQMXqXLw1",
  "key18": "3TFXo9SzkEUb4CuBdq3KANUKxna5DoDMwJwa1j7W1BWA3SKWHA6VTMFvhGCCoeF9zGqoLssdEtdPWveUMHr592iB",
  "key19": "2D87f3fQdudcRjzVgJhjgdtoPgaKqFD596zHBux9CDi1L1G3SgkH4ktkQFRW7oT6hMahjGL2jHNoxT21ar81AA9d",
  "key20": "2ejDeLXmbiBK9p2KHTNHmonYbr6Qx6kG5QHw1fa2hf6jughno6CisQtfYfo4s1tFZpGa6kUmLfYsXF9rPSMrpgnv",
  "key21": "4w3kCFMmh2mvE8tXsx98vN8MGndsb3rLpQTAGER5ScEtL4WCtBaL55axoPYLD6qdY7y3ogjQzQU9jRZqdCcMXnD1",
  "key22": "58UymRvehMxymytdeMg73zZnZrqjccnUt8f6dZDNwUFrGuHhwm73bo9rwsqkVTCn22fgusJZR6XV1FQt7Fxe49su",
  "key23": "3BikDNpSc5gXngGiyCUU1NrghZiJAdtxAtaoSwwYtZdKxd2pgCq6mspkQ8bqE5pMSQUenMhpdQ4Z2WGDaDEgWvFU",
  "key24": "d5eV1AH4TSx9nmW2sC65jGcZctZ6bToaB99yxGHHkbjKdj7K1SijcYAPe2MuBZyCtWG2NGu3n9DprqbmtUGT4wY",
  "key25": "2HGc7D8E6Vjth3LAXb3JJd6iZCgWsQDbcxfnUJuSpm2EK5jyG8tCFUpC16jGxPa5LSiRAfS1Q5cWCeWCfin6qRHp",
  "key26": "3XKQmVY5NMhKjfuHTrUQZ17jhRKUFnV22A1zuhSQKWH8PqHAMwL4f1FnLgvUxBgA1D7QVWRzjtqRRCxVyYojL2z5",
  "key27": "5hzKp9tK4Uv9R9NMbKXhe9ruVnTpX7a2v1P5E3Fv3H4BrQubobXaAirc58J1YrvxMEcvSGSAtwpA6tyjkLWu6Big",
  "key28": "3HxAsxPuVN4G6T4azZRF6qGbb4PWATsrT92zoszCojHVAXy2Yp8L2R9vP4sKJH99eHoydKGLEiCgZujr5c2FQ2J9",
  "key29": "67QHC26GeA9mRF3kLxjzgRL9YobbcgS38Aa6PYkCRYciCZtKQLhBMAtvUk7R3zry6mu3r4dDogQ3unnNP5pxzFi2",
  "key30": "211CUCEpXSdqBF6VgTM7E3om6ynSxbaCZehQJdqRk4AWRvuLJi1XpLTHSGPxzSdF9GyvgBc6SiSb2uaZuH4Lx7uv",
  "key31": "mWvnP4afKH7CGvnsZu7S6KwWc44QkGSsSESDkY2DwZi3oDEwFMYBeQxbeutUqmcpjgjgf6EL9Xf8AsNgMGwzegq",
  "key32": "gbDyJX3mLx8NmJZhaW5yjtToXEhqpzFwUBoQWfwj7hfoVzyAoFGfLpWS8mQaEyp4Pcvqu1QaJYVis6DUcUnJ7PE",
  "key33": "X4XSiBWyD2ksuHf89Pn5EbrRVu7okKxtGhLWPVDaMKmF1wbZEexpRfc5LkJDYszgebwV5h9DGmcY86u9FMQQ8Uc",
  "key34": "2fEYUGkXE3rmJnhftGQJG8kzZTAM9T7jAkjJAdm753q3x5m1iaiCWtHZzoDgzePXsgKKbxGLpeRZJZeWEuiRJfpd",
  "key35": "39inWu7RGyCQDFhibVj8TCdWiznwdbqAZ27z8reycbR65DpcLRtCgwVTdsU1R31boSU58vWjSr9kMyBWkuvTWjCy",
  "key36": "5Gjxf4H9VnfzWbxpQ5XZKdqcbhDgXzQfMt5mNoKaKg2PV4MFgyGQskrXLrhoj5VxtRdAHcFazNhFMxRHSVrzAdSK",
  "key37": "3S5mq8PAF6KscjG9CAnpuCo6gGBYyiLqdz4yZsQe5ER8JFP2u8kRGCUBWFDgbLZKHmvC3puTgxznihBeW2CwXykE",
  "key38": "fDqNrCQsJYnY1s6qWr36Qzf5E1p8mdh518xczFDfc3JFSxY5AzfFNZqfxkhgBUyBkNyqNRqhLu3K4os52ZXTSym",
  "key39": "435Qvr5DHRwW1JU2tkLSHQoHfSc6jwZQTRThiU2i2MM7sjuHTwgq3bGVZKLCafxMWGkMvHgYmeEoZv5ChMSsjxQu",
  "key40": "3oAQiR1K9mnJHkfj2Y73fhEJimvSEwugaNKg1biwixYQEvJRvhLhPsGmWJ73QR43S6ZPaC2r8mE7CYCt3p4Cn1PJ",
  "key41": "24Cm81aUekGdASu5V8NN1YUnsAziss95KwDBGq3npRJcEUfygp1omdJw5XBECUzFh3J61MW4nBk5HV3mfqruQ2ks",
  "key42": "4z4BwDZHLaKLMcrybE7y1DMpf9Ccvb7TdoV5C4udU8qRNyMwausGq9YakzXk2CkvBTsjhb9NYRgbcpBu2CtRQYmR",
  "key43": "5VxJZ9q8RtDdEGtsEnNaxxXZfaSq4ycfVM8Z39MBzXneVxvEfN3Txxvez7SSnpC3zkWbJd9ge2WEDbW7uBrPQBrk",
  "key44": "2z9t4ZLP7wdoMwkywuR63HsNyPrWJbjKefzofzZBVdvvujdqQajLgBsW9NhsJxrZ2v1giMqFqngwevwPUggDtWFV"
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
