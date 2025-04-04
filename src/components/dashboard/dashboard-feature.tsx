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
    "5sHg4UBhWykNiCci44Tq7857AYub9ZBMjphRezEDBu2kxVXtgY4vxCjkXbnpxVB2sQcft4nK5iQLDXDpqE8MAojT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aKxdACS3YyX4b6chsE5rpByY3MPBhVkimnDMLLMeh6x9iyKVc4vkg49VhnXWhn3PPddhKKE6ZPu8dbbhrJnUZWq",
  "key1": "4TFscx7autdisqHzSJhuyqWtMqCHBTQi8q7XzJDkGPyRwDpc7GcrKDUhYcFW1AsB7uXtcvSqZq9Mwdmg1MTH8rzG",
  "key2": "4DK5QSMwSH3piAyA31roXPEnBQypVGcXUhYpZTfGnSDxeZxPs41GWp1ij5b5qKye6JT1pGeS7LSworvaoHRGzNFx",
  "key3": "UQMLHT88PrM1T4g53hE5ZDaouFVhGsrZVCgw2WSADrN6CvaNDBCu5Z443xWCZuvGashHFTCpDq5moPYpcu2yt2J",
  "key4": "2bYL52dJN9QMSxgA5JScZkXLfmWbEn4b1fsVg4vtNXDoVxSpa4qmfbnXo4LKUqNZsKwjfR7PJbjjiPxfn2uhLfLx",
  "key5": "5BhztXgUsy9XVcqcRcsCQQixqDD6CqdD7ut1c7aedBQvHsBzpQ9Ce9tCcWHeMdnEUUmZAt2bLfxKB9Qh1V7VSNB4",
  "key6": "2DZ8KqnYo69wrfcdXq8h8foJuSLvSzYFuoXV8msnTpNGwU9TDrXykGHY8StcHDAqfZhboUHUT4PVkpQTADhKC8kn",
  "key7": "3tyiVmytC7rr9eMMuzwexw5Wy2hFWw2SmHKYcrA8m73ALfXwMtEmiFDxokBWzCrXvuaof7A4QqV7pt5bB2Tr3sBZ",
  "key8": "5X8H3t83HB7RCHuiQjun8NCCHChhUbUdFoxLj2EX7jhRewtotZ3gvzzZGPgmm7ZvjjSrftNMaT154UpamXvNSTt7",
  "key9": "DmZc7vQuhqtjDECA2MgvXADapwhBQVtPoF3iKS3SZ9TqyuBa4LsjoSi5fM2DPuMCsMFhUtDuimeGL6FkECbbLHn",
  "key10": "5TJ4DfheKZiAFk9HgAA6qd18a2MxniWsxC5RS8qQb1KwWJ2n1bS9uKGajzBcbFkEk7pjZS8ZYnVyJfdCPSvqfmci",
  "key11": "551Z7m2xCF4x5GpQkqkrjCWQqcvdFCRTZbiNJWgvbFoVfELrHnh7N2ZPceUJQYGxvUFfCVSUykHTWdMFYq91Vdix",
  "key12": "4FHi2iMf5Tb9J3PeCQSPvWbKyjFUfhb14KTp6kzHR9iKosZ2oPsJTqRCwWKMd6V6uiBZse7DdxeckvJm5tFrTpqt",
  "key13": "24tr7cCXdev9VotdNT9tQwfUZe1DmmZJwpJwquBDR1fdCmNd8Ci5YBMhVSVhnLRPirdBVKF3mTbWLXJqdpd9QGZe",
  "key14": "5GXxFdGeYSNo5kWEMF51mpqMHtBP4bWyeMffSEuQKetKVSZANs9KWTef2mVp6eQhknuWrHpAV2RZWaiywxsopfpQ",
  "key15": "dPutvWZ3MLwxYH4aw84UTuMeN7MCRSCFSAfFzk12GtLJ2qBuEsATC2t6fF9YFFXrhjF7fXEBMUq6gLeDEJCCvjv",
  "key16": "Y3kf53Rw11HiJn5vTHVLnrQY4R99vvmfcJ1FscyhKJEj5piuhSnRdKbEUA7hYbVkbKi4pSowu8aLdeUZ4uCsP66",
  "key17": "4BDFZmLMRjHyEuFNT5Uwat4ss3AmFoVsXrrDj2ZLu1zjkSYS5EM9LjKKbmrFmTKr44XNDVa1MgQVv3nT6VevcBUX",
  "key18": "2emXFGtgsNZMksUEAyNKU7FdyTAkK8XG3HtQTm93q8is1dEveT6YhSuMQJo8DSe7e85sr4ZCA6LXLTwCZ83j7CXF",
  "key19": "4YQPdGSLtSwRVcFteRytrBway34D73Tv7QPN2Jt9i6YXucmg2wzGhdeorPcmhGkjw2WfrWX6bERjrRSvTQ9Pv2GC",
  "key20": "3s2CJuPUNZE129ji6zaXY8LpwEKJWnEhsNR4XvDrXNUp1mZzVzXUt9Gp1sDJUfmoeDqshUuoXL5dtzUkbDQGL2TK",
  "key21": "5AttGGttUxhyizVCz1HuEB9epXoy9tFc7XQTKYdrZGHYGXjyjeCBVPiJrMp3FKDBMeVFPep26UNQNoy5yu4G4PT3",
  "key22": "5QmMdzFcfYZx5Msa7hdyvGCFuVPogSFrpnBUWLux2J6nEHXeoHy6oKwUNTEKEGQfeNLxGi3CosAGsVNdJipbgjtu",
  "key23": "36gTDnqaAU3sNqfiroomEZFMJJNCmjLbuSkCCXEJgrQBYio4UUQ5U2p7uhYCZY8HDQKAz4SUUxVzcsk7RiDEJbcn",
  "key24": "n17xRTsNJC5SY9FncePhvy3s4KiGWrB2FLA31zRzutXN1m9JjqA3xjKcSACnntCUMLs2s3hT9SkQF2XYq5izitY",
  "key25": "4pceNja8t774yinZoZPMHxBERCPqutbtZ1ARJvPfRFHALMgKkecF5VLrLFzMzRy2Mhd3npq53mRJuHd6EV3CXrEq",
  "key26": "2yvmRbLzj9V2oPGdLiyYuAVzXgCGbyiDKRy6EFPK5bNQGzJY1AnPHeFxxs9Ca3WVPiQy81L73vAbG5tdRKQcNxfE",
  "key27": "3vjFDrwPkVVtYd8odAQdgU25hEdxnxa3tqDvSpYysTCx38WEuirGFbeJqQ7FPsGjkQKvYDUJtJdgba2yDedPHN93",
  "key28": "2x41KecSKVX2W45gutVvjFhkBQSgxu3VRPpv9ibqGCZ8hupuy7Awb1sWkidzswcdrihPKrsJz2pBLp5Xz7bVm2pM",
  "key29": "4Maw1hdf3VxtckWMhF6WTwffQ8sFHfjz4VuownyebjENiXcpzt1Jzboey4BBW7Hekwb7FNcqwWX8baExf5wMTZtH",
  "key30": "5LQmQmsmE39VXmBRiA2KafsCnPW2MmCaG7ZhSWq3s8bKERHAEssRZA1Ey2wqQAzWJYyDvFLHCwuVa4wjaPEBV1Nf",
  "key31": "3mMaJSFSsqyM2iheb3kex9N175Sj6Di4mFMYsd9YnUTdWEYMcyZ1Mdz4oSZoTVW6Ko8citT7vwiDXatX6huNmbcC",
  "key32": "4doKVGdLcFKEP9h5rtG9Vv1NcVk39gqn66Rb253f9RkV6hdFdgKzwLGJwMNesr9sXphs8uCfV4f2uyYWNHMWVbiy"
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
