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
    "3deT6zBScKEcEHQoKL2AJvmwW99SuNdCjehiUcSEM7kEBjMMSRcqcFkeZnbQnZbsqc5TSFEibNFZumjpMfiCRKWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CvhG9sn5ED6WCXat5Lhc7UNGtRB4rZjiK9NpbD8kFdtsWY65fHP4ZEruVg8ZJVkB2N5hqiuBjMUycQYYBGocjTw",
  "key1": "4ryKWTTTwgqNkjD52UNFoLajAokiEaHjMWYMg8GQJchbYFR2bKTzE2wv33Fautb8XHs92n8m64hbcUwBuJXUJByP",
  "key2": "mJBnsFQVAeXqUEzD6NMKyh8xfVbSTF12zXBRSkK7B2inf21YTGCp2C5h896NqjLfC5pQ3xLH5C7wyb4VHkXLeBZ",
  "key3": "39Hee9qtt8DhhazZPSrgHiG7gENFMWmHJeZcYxCriUtToXdGeTpxt1bnVGUX2BhoF8nXD5AWrNbJBn3k9mhKE3zu",
  "key4": "n5tjh3ScHUN1pXqaAQmvyXLQzpPW3iCG2KwACbvM2G9o4H8p3SYvEcvuAkP2bphnvq8yfkXugXvS3377J33irwD",
  "key5": "2PTTBav5KUPKQZ14zVWvr9aEnJuMMQJvLfFARzSnxNkpaLRf4rYKUbQjG8S67hodAXdSdaK5YWVa9b7zpkfHatYV",
  "key6": "4Vpy1SYx1pHA4mzcwwP7z9ig9Haz81zrp8kG9MTjoR6J93TSfMZwoLxSP5k1yYDhKKL2vJw4LVsVJYf72WDFp1LY",
  "key7": "5z4vRBYhTGdwy4AJftH88JXcUpHtCrLKx26H7icmZm82MiMwbd7f6nU2neptzdPn1RfuSAX2J9YG9fPGqsQBw59k",
  "key8": "F2aUVR21CRTvVDkt5NRqpyAtmovcU2UJfTo4bNRPnBsbTX2KLSLcjXRBt5M3gAJ7Fu85W7HZ3gYvwPzf5geMfqx",
  "key9": "5B8ewU8RS59YbxLsyFEMiQ6zabitbUtoNFHdAASoEM4rQvEbHSb5duhJUa1zCcUPj7jiEzwEtvq6aEu5jYN2ozTt",
  "key10": "GEic4XtvajE1UJ1mzBdPKGMjBkVtz4SAQ72E8T2bBboKEmupQSGammDQ86joT83QzNgeqyjzCzSp1LhkNFtdU3L",
  "key11": "4MQABDb7qvFp7sH3i4fuTGVgawVvf7RcNuN5KwSq5yPDqkBFCUfKACMpP2FtWqwMCBGqxwk62KGEGG1hW8zBWdA",
  "key12": "22XsPdwCXtQegHozUPreFY99waCEGZv5sNEheHn2L4gquMDYbc6VzhKEkGXoWvphAaifE1pRjjixvHLE5cRYFpqd",
  "key13": "2QsqW85mBrckG8esADZt7W84omfEVQnpTvAEktCLKCX5cDWJ2x8uBBsw8QDNCVFHaJHK3Py3WCPDjTAdoNsK8Sv1",
  "key14": "23By7GHrX1vGt24zZvXrXxWQsPJznfGfJieFeiD85ydbthrCxG6NU7dvX5wtkrHzHQjnNaBhsqR8Zm85zXTW77yg",
  "key15": "5RXGcdbWxPmPFWYqforPxCQ6KpVpCA1mcy5Hjjrozensh9HtUpBv7NZqefwyYGdYv1QWCXQZjooK35bSsDLqWsUG",
  "key16": "3nh6n2QPLupf61i2RxYSktPKwWKbX8meE28UuSvRD9nk5Mnx9MmMj55cshpziaMFYpVHyLPbTvtGmJB7nrV8WBVR",
  "key17": "3JQzuinnjR45WgBQzKWWPPuAcyZTs1FHaMP3qqiwscekagRudPskwF4A8C62XDLTAhZFWdE9AAJyGPCcQwSxVD6h",
  "key18": "48XhiwmQtLHXPzSpJovXPEw3S6Dv95rRAPEtnZTccNSvjbvku44ekN2prfuyKuJeo4gHVBm7VLCDktK5A1knuRPw",
  "key19": "5VBdMryURRJ7AqK4MhKwqw67qEveGP9xv4fTgsJK9HhkyXZckv1fbAeyNdJDxBL1VYGtLKLkP8odWZCxTTJxXNMQ",
  "key20": "3oiG8bHiMe1nWos5pVcKynWHjeexQm3xBh5JjaPYi9gc7v4UszwCXKZSNXeJ1nWmH8miFGgx5XNwuisHR7ZPrMPB",
  "key21": "2W3WB6LpPWVPNpV3wnjNBFLPSwkj1AYf3HCQLu6ryzHxDVM6vyNm24PsgWsMVV66cWBhMA4ZMcqWq8CXqkeCGfTg",
  "key22": "4mTEwcB1nm3g9NdXB4kTAotXHNS7fyHLV7nam4SPABHYYzKU5TCkGk2GbgsPoLpu2AbQdrbzY5SbERgEi9e56UqY",
  "key23": "3NyjiPcBtcDLxsbgReh1qSCi9xPEtuC4U2tJyGMsDVMg1RjfRvWBsk5gt6cLiQMjnTw7jiYnCM2gakvX9ztA4ncA",
  "key24": "2LRLYtV2vDSPGCh7KgWfgkFYLoderVqBZUMYazv1swkwU8hBimfr2FYddhoEY15kKUqif5t3VXt9RCdGbVkxeLjE",
  "key25": "4WUVmXtBa1ndt1w4PNppjJyT2nu7LsVBjS2nxyXCxjb4SCHb5j4UfwD9SwCDffsnUGgYEqsQ1cp92UMUXqcCuXUW",
  "key26": "JSeNBXSucxUvPT41qEPtDrQPwdmpeGeKZ8LUErcx2RmcsuPif7R6QfpKWsTrwE5TJrku21hyMfttWdexHgFUqwh",
  "key27": "43iDESKQ3gpbJ2ACkF4mUMUx67Czp9CTPxBbyuBm7AzL8VNkDJEEMcMvvdFvLZ8JE7JtW4emVwCKbHT3e6otRUHh",
  "key28": "2MuziwPzCK7SVNBACnRp4X2cu2DbFKwzo9V8eGMx8FxEAeYoZihuWDJ3NqWGpUv7ES3ZpZqCYkwyvUX5Fc14GhZ8",
  "key29": "4LgiV2RnneB6FhbmSAf9hQCAxjD1ET3tm4xMUAyYzv1dzkh24VCvJzhU7gDpNmTMxdbdxVdyaGtoX5j3e9KMMB5q",
  "key30": "RJMzQrN4XSUNUybj1kcB4eWDCjZRPTecvN9p6veLJAyAJMRuB26utJTVJDwwdSep5gPrh4BUiXgubKaNPutvtuh",
  "key31": "2CQxZZoJ2ws8HBxCvFXmwStfqUqd8mHNrajM7C4pxRqGAyELUscD6hPTy9H5HyeSa2Z4ieyCQboJYEhbFFHv2LS1"
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
