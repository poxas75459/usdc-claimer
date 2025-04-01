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
    "467PQmch1B4QSqFyot1zCAtbBc1dVkx3wDA4ARNd5FutQWwGAvX4ZLRUA3QGkDpPfEDGj2pgqL5Ht5BoUrdcdHwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qPAWv1QP9gNBTLeLBBXCiFJq2NAbnPUSV3SabFSDjtjZcfAqKrEajkBMe2qnFTFmREMrxXet3TZ5MXcGecrMWWQ",
  "key1": "5PhvRqCovrFQVsZJzSBALQEqAeCfLQgaiJd3WvXrkTNqbAFdCmkkCDrQTdTa1GPPgWsRfUZDxgTZ4sKg3TidWpzJ",
  "key2": "22GE4nouEZLBen1rydiP1k91GG1dL7Bo7Y9hYJsgv3skN89jr9Z1uJg75ZF9u3oAtKF1w9i9KBBnhmW52AhQZDz2",
  "key3": "5qP55hzjx524iK5mvFsLKw3oDN3pUDdPiGRGyZQjKsXFpVoc3HxZgobyNA2kJjhKtNUXR6S383tgK3AHowXdG4p3",
  "key4": "3XN9ShCGbAUqhrxdm267ZbtfGQPKYcdKdEQwTQtTfsuKYCDpizVyRFfCX3nLDKkqFgEJc9EqBivEGmyPqLa3ijf1",
  "key5": "3PyXEqB2yhJqgHRewsMsvx4aJniEyRmTzGApqVWat8ScVKkHAzQKBZ5FVTdT64qGXHg2P3CTwY9fBWFTZvZb2mqS",
  "key6": "57pJ46ADSCxcTUXcg9iEsWbnMdDjRDVqzwHmPLDKX2swigz8RnLNwh44MS5YwVyL2T9dSHAeqRw29nBfRdwfrK9R",
  "key7": "Db6fL25JYUovmNfio4HijB4BzGTB22wRH7YAkEuuKyTUoohpNTDgfJX9PVPmm8kahCZsy13jVfFbTRKqxjiUAEG",
  "key8": "29umpfv1LwGLB9AMyczAb8xTELzEfCbd3XL1zJV9oWb1gidezeQKFnuV9n9W4vKfyuXjSKVE16Wp2iK9dqYp7weL",
  "key9": "3GXpwFqMevGdSmQ2NPLtqhVHRRrwSR2su35eBYDMQHcUDs4a1PVsym82KRBVJ4bDfGc7a62ED9EbkaEu1PpfeUFN",
  "key10": "2RixDiUtnTo4bMCSC3qdzaqGqbHcaBdaoDxf1CY6rz3ptJJcmz95MumPL83DX9BUruekduZrA1X8Ata59aZibU3w",
  "key11": "5Esmbc3F9Ax4pSdrgJGtJYBbnDFTrrMjpjCX3mLMrNXaGK8Xq8eJPDMK6mHMufEUYG7tTFw8xLCVc9dG5xHrbJdn",
  "key12": "3LzYtaRjgfHPAudjZ3V7RcTmgNW5B4b1DTeYSM8zzCvW1ApXxLJNpn1RjBkmACrst91b3mWrSw1kfdd9Z7tQKL92",
  "key13": "4Hsjf7KKWXgkX6Rs1FgaaxsUKdLFbA97oeg8QcZiS7Z1s67HvAEZWHqnjgWhweusFT4ViG91FAHZ7o9mFXwehpFW",
  "key14": "2weypBt2oCw5LW47ubuBSZCsEg2fMHY7JQo8ydXGeZctyn4mpkFnTjKBHXrDR9fbWjoZhWTrm3v22UW4jGVWECQ3",
  "key15": "3fdKcZ1JmqtKBbFVWv9wMXcpEBQkq3XGUdEuhLqGTVfB4ci1QC1gmswS9jxtcKULZjSy2LQdQzza9EfSRsSH5TaT",
  "key16": "VG3qRbkwFnYNw5JvfY4PjX2SPjRy7cjxFsdn5YK7DJeL19uDvy8o1GaXCu3sASbbXSmydahDU1watvNwSp8zBTh",
  "key17": "3tWbCwMN5eLC7Dj6g6HbqPAWt84DDjZ8GEBJoCvZgZne4NQWtye6eoPAm1CMT2qHBBRG87Vck7kEzvQcySya28ur",
  "key18": "2uh2MKawFBcGfZuhScLSwz8RofDDYyNRhLRnDokxVrf2VkGD87iY9z3dp8Bs6ixBzeBPREsENCjyYiENueaCRh4n",
  "key19": "3KZtA32PHvsrCPyEaUZ77PEphKEN4m2C8YB3uRD6rDRiWWrUDeNypoTQzkrLy6ZuzYELPZNe1qcnHC5JuMHodTit",
  "key20": "t54vTYSKfDgvFE1AASmCUKEKVvwhntAnyLZeVN2b5zy6MfrJU3GPxquKySYJno8dGmLvwdfj4Rym92yR7d7rYQH",
  "key21": "5KdxDQvjr4pbFAWsEG58WTq9M7p5pYC1CTbLx1nGa3kNtETSNgynG7qU1X69qBNcRQV8RcGwU5RGyvxbC7cbhYE",
  "key22": "4oo3vViRPMacBwHHhgJMtXdFV6qnvxu9fkzD53FY8rwZT7MmCi5tawFBqXyTs2HpESibJQqdsKkP48JitBptPT6Q",
  "key23": "5iYt9SMj862a9H1RnaMLd7fCeo6SrXYav9s6ziL4HnNj4zkh8X6M2CDNrsGTn9wJVw7fLHenztESNNXWsYx4ML4g",
  "key24": "245dUQakdcQwfWW3ArvnmSje7nkqNvXAiwfpFHm9tDF5i2ZCHoUiFDHLqqXXhJLQVuvsmY1Jo9dGAhMbE5bu5wpW",
  "key25": "3mn3UrrLePxjdqX4sDCxWvfunsXuY8PvEWVxmnidab5VYtuJDEgH821oPqPFY8rbMpTeVsPuwcFCkuW1C7ZWjQH4",
  "key26": "5BGqhXvBRdUReS2aPeyd9CMjhQL8xjqPvxUxF87xq3rmHtoxsNmLs48b1tzCyvJq9fGYPmrxupbXXJP416jAV5gG",
  "key27": "5NnT1dH47yCzGUCUs4xTT7btxVJNZX2RL8S3aANtGifyfi5fDR7KypniTTdKXoifEQrTcPm1r1WtwpXmPYEsLypr",
  "key28": "2PPCK4pxvU7yhfv2BDfdskGdi44nYgLvkzskz98m2ApL6VEnTWWmDkjhajP9VbAbnkSZnem4R8FG2UMcFfgFBYfn",
  "key29": "5mTAudZ3NcGb94NW7hZnHukAfY9pzoYrrJfAMoLk1EKcixJSmkEbLXzkeqbhrQ6Ghyup1Ba9LeH8hDmLfeYzpiYE",
  "key30": "3CyqUrd1XsWDSuA7U7XZLT4cvT3jti97ZgaN5ozrCWC2acP4HcPMUKM4bVqvbiaWmqsRAx1ZiCefLRFuwUTkeUyv",
  "key31": "4gEFxNXPv4XtJqyFPXVSFwBwNfgrgrpScQrcUvSxUomn49zrgmyy4vcUy3Q1d6yxBw8HWTBhpigkNi9tdWpuCdVd"
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
