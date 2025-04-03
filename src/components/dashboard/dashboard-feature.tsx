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
    "37E4n4GhgJN7LM9yjDkYseet67T8WMFtu9y8bferNqqPHcWqd5fYSnGafzA62jcMBpWKMosfvKQrxsLAeVpHpo8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UaL1BgghC8yhd6M7HWzPmvg2cB1W5Rg1kP3QUfLFVqAwUuUp8Ec3xUhNGXtPaBQNJWFkDqyW1GKqxBaPn73r8tj",
  "key1": "3FELKnsLC7ZS5MkyZsjiLkWcWy1j5nxK8Nik7ZXb4wLAHaMNzVMccgYidJZowCvqVoJ3QDfMoPVjUjMxkPWiBTTv",
  "key2": "2DeHtTDMzWFdBQ1UehC3bDqsa4nJyqimjWKYGrEHSU2Bmiu78RzRkKfynw8RVPSSehzXKrcxp4WKdMjEUbdeLCqE",
  "key3": "aaBZsBGNtuioM81ig5XiPD2b9HufwDkE7Jc6G1WJgvFwCZQN1WJvp1VECBuSEVcXet5dSFMwagSuFLwbgrLKHW4",
  "key4": "2c8yQTtAvgsxi29BFVZEZzF7mYG8zdpuz1eLzjppzTtFFYpQurNxDFb61rubBSNhPWpSizNeuoZHbUn2HoZqKGtQ",
  "key5": "48ANa1WPRdQXxZccfCUtR5NkXCGStmyoU6Zcda9RgXQSZGpAQvxHeDDbYzdvYQycUY8HC2rksHzQpTZP2S1x9b7F",
  "key6": "3rkcwGoLQJqfyBGw7BhM2F1racogvAUggnCbEAbgrYwgQawQ5towvn6dbtLh199RhyavHGHoP7rTAitfCXGJCpYi",
  "key7": "PjdiDnPHscJpHmCYMa2BjrpcstnA2yH1v5xtX2TyA6tm7uVbyWCQfHVLs9c149VgVQwDd9CkthtgpREqn9XYHnr",
  "key8": "5S9ixQsw25RDqmidqw3jZd33vM9rSSkU6UUe6U3CqdHFAMb3QspfVq9VJWL6Y19yv9sTXXCYS5XVegTRhQXBg2vk",
  "key9": "49R7ZuvpLiCtZqRebvdYucmmhKnPeVqCzxGPyobC3k5ieHNp9vmkj5Z2PiRKrGSzx91fttqdqyfUQ2wNW8VDZuPk",
  "key10": "2EjWJTxUY2qwxA3uvWT5i6YXYfJYZyRyeNzBH5Uo9AEFENY5ja5ouUmmoLpmFUsT55RTqjMXvoNau3BZwfjNkWHC",
  "key11": "3Wq5pVyP1EjUdzXQH7SZsocC8JSTVHGdRwE51YMSWSw8RnFiB3KEcatjTY1pBpCEfQk8geDMi8SmpkQKB2361rZH",
  "key12": "3XbgSuUn4udSg1xyuMyagr5UGxkkjTNXPE1uhzQmqYAEnLHoY7caswyATXE3NG7LcmoNF2nP4CbRxC21EoqZuVCU",
  "key13": "2HuaxumThPxBoV5Ay76hnpc72GktChNq7dkXPwhrQa9WDEFet93AD23BhsKwZSWBysoGDa11wgN1LuvUPBrRyMi9",
  "key14": "5aCgqhzZQhCnnnGHhr8zk7EvHtVp3bRP3CdmbRoAuRqkM6YFZuzwCSkhH3Y2RvdFtiBTcoSE7vpgEgC66qb45BiK",
  "key15": "5X6rcU7Z9gkJQs1ChQst8MbPinLqnc4cUJ2DQwEMKcCSrbGUNpeWJS2Jf24fVBo9s5PLPCKsjgLg2K8cmheXGcfH",
  "key16": "2cRupZvdPygjCKTVZvzdF5PATPrQGRRuppkZ6KfkEfnBzxfpEyiLxd1w9nRZaXU1McTpMGUTCazQpzBqbq4Y1JSD",
  "key17": "5aNgsyy7zrmJKyz6aFF1h7LqGzRAWxX4NiQkrp4ovEUtCss7V3TgVarUge5C8m81m15dQkY4U5fmgohyHEuVcjAf",
  "key18": "3WbgDfRaUeDbDMpvFoEtFrYiVboEWp6d8vPYhB6gNa7aM1AYKpRhUpRyS3SgQH646GzKggA6wcJVZCygxsjLH8KA",
  "key19": "2LDz2rYr6YWfqQFztxT9MJsLCouDCKdeXUkiBqdVeKvB8iUywnk6RWMVyC993bBCTBvdJ1k4bgqgwtmU6V9c7P7",
  "key20": "AggqF1Pinhv6NTZyA2bEFybuxbmQ23RqEoF94Ho9yiXPcqGcHs5QF5JM7m2JBqcLCG6ZCXFqNk8MhBFHEuc3Egc",
  "key21": "55cX742USi728138J5YGgx2UAW7S5e8RS8Vsu1x2uz3HEtuvDoP19ZoFcoJ5zVdptgKreyBPMCSB4L83na8QTEnf",
  "key22": "4unHuGfxt86KJWjSzjPmnN38dtVJrizucYNqVAn2r7KYED9GKWLFifqUb5ajAiUi67CtLuNUqF5vCNjopiiRrdRe",
  "key23": "FmcTUJZGAC5TLjuYnqfcnFdK4Ss1brgr1Vcv8Yr2vNxzuYZWLxEMuKjGVGb938ywnB1dHYMfFp6uK6U9q4WvsaA",
  "key24": "4eqfqVRMEkEqrLHcnbutpQDVPW9gKmRPKrfTxoBjHVpNYgsAFuvyRZxKBcPXfBFnRYKXBtLbjjDBoACaqJj8FJVU",
  "key25": "4zDS4TEWvKMFm2n3fgAarxe5kEZGEVViZbjjioRZQN4Dws6hKkKbWP1SEU3zoCkLziRnc22Tm49q4kBb4Vy4s4qM",
  "key26": "3Rbg3g2ntZEmEqLTgxYzP71V5n4Q4NC36wRJxMdD97fTPWp568FNymKhD8KuSsZnNURBDsWDMKLW3reSJXcmfATB",
  "key27": "3QUSspNGtN2a7Hz8T98B46YY5spoFhWoyT22HTbBFiFciKUjTN9B95UcCD6m1KDh9uJktKww6PtLJBdyqXJ4zcs8",
  "key28": "3PGTttJXTUWfDmCvWFhFcMWxDF9DKvWakSPdWb9aYiGpFLEiBhf7KSzVhDqXf2UCwDwVdJRF1orrN1WXCvSepoFk",
  "key29": "oHEjjKWSHteu4MvbSN8WbKygqzt5BErtargEN2CUogMtLLLzKDJM4f4wygTWcrQaz8o1kW2FR4Z6da2nPXuzZBC",
  "key30": "QAKKhdGoPZ11QXP2bGPK1oVn18ssz8anCxvsbQeWdQGP1wEkGTMZeZhXTAweFacrVJGNrnbkuTATjcPAdV1gP8P",
  "key31": "3okifkcbKPnbgBQjToZuxMxmMFgjesLgtEWcpiJJUrVoS2UfHQ4JjVZxHyzjJbzHAAkb44W7wDkR9FhuLhdpr64T",
  "key32": "2wUf9oTzAgJCjkoPouoFfCU9744pKyAAKhZXuN5LGe6U3TGi7RhW5gxQg9NoXGTUnBT97quPTLeP8FyRkXudqQYo"
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
