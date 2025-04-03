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
    "39Lg5JYGAwxr5ftPujeGfPtrzfyxNgPJcGbG9dcVdSjLivxXEA9VcVwtRxZk3Achzi5yq5zMu7GUYyn4hQBWfAfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FcnQisYMgBVkJHMQ3mE5sKfyshTbBV8eGH6TSp97QBehYbyz5RaZcCQFQUimFCuaTSwBxt3fLNch1qaDoUe8iNB",
  "key1": "2krutYQEVF5jffoKbMD6bW6mqYWageQAk8tbzv1P4NfR4vJvgb8aUSViU3sU5pDYKXQDpphE99nCJX2rzLg9aXqj",
  "key2": "32CXvb2uz9ZUM1CSgJgfysojGrBspcA1XuaL6zbbHNWywi8NYkTtV1Dhcp7Kk3oMQNbpK9QDhJZTWeCTHfB3TsZQ",
  "key3": "schfGgpsYDKB1J5VxaVRakf4DQibzZp378Ea4ZPMPkVqHUTWjDmKWhQiQYUwggST5h2cXEMkPQ713FZTDSUicPv",
  "key4": "3o9TKiXRKE2w3UfkjapXBUR9CYsuVfa2rCJg5objM6sCRaWBb2MuQZznC88cRfV8qMnXehcNcrFUi4K8nL7SwmJS",
  "key5": "4xy1D2KB5zhjCoFyAnAh9EQv1PA6XqeMzWzKDU17Dm27VhS9HpspHriovpiRCSgTmJmfuBF2F61gPMtXseDorN6J",
  "key6": "4ffnCSS7P5UvygNpvoopewg2Ywsd8hmiq8BS6VmXFzAQhKSQtRLhsTVVvj5pR27JSiaH5CUfAjbqTSZywCuD2iGz",
  "key7": "4gAXkcLfqsTV32mU6H53Ykd8emsVT23caqkA9esQknaUycpzfWdqSS3twEXhXSpZiyDifxwhjDzwvApYBRoebeSD",
  "key8": "2h83jATZjVhxEiNkp3V2QPxrwkAgrLxswSrFG6kU3MFQng2gMtdgbwgAxmpmNLJ8YW9trRewogrpzLFwYBvGihT5",
  "key9": "5Kregzif1PPWNnq491YiVXWkGPRNqA544guRdpRGRBvRANic78AdpTakMBhmVxkUvMx6DCTACvSqHPtRfN4rDT8",
  "key10": "4aEvFSvx4PnErKcKQNuc93fJkUYy8ne1zdZRtWbvWrAkzbu1F8at2uALsQRvDmenNooKddLcZAmQGvZi4Vgqn9FF",
  "key11": "4CJrK1GJN5529EwLpbHphtgtKNaxmwckPdVPpC4ZPK6Wy8JC9eTeNx8GTSMvdrJEg2ptpZjqmiZsf6pKh5wAbF9X",
  "key12": "2NFPVjQArQbxBB6KVzKAdnQo9QL5mvyXxhRRT9xrKxpwnkwoCcFzkNtyDXpduR2ArCsyMN6CvAPSqFkhVG9dSQyu",
  "key13": "2KdSAdQxijAmsFiTJGavLqS2k74rnYXxGg8a1of7hJ2R7hqhLTnSSozXkThxFML3xTgDmutttTQYykcdKhgZVA2n",
  "key14": "3PsHxwVpzmXE5Kucb7KXebcGjJhFWYfXWbRsPrdwukhQ4nZFeA7oukrBLUiBgYuz6DRH92wxYTwSkMg3gNpbQSan",
  "key15": "w3x3Ufck8iw3h5TpMsqPJXSKsqnqkBjTWEYJ7mR8mZ5TEsUsi2SqzYDZkcCbm5qQw6GWhv44VxFUYcyCHAkrxKj",
  "key16": "3uDiFa3AS1X6fjeRH1eE6YqdXLBCQK1EaGroY1oUiSgdHNp6T4fUA4mH4g9wZPATjHHsxqjc1ANtr3xVnNcRe8h5",
  "key17": "3y2BTJTkUgMAQdBGVoGmnYjmMbLH2SFKYKYSynawBGf1ShNJvLtY3LsLXxvNbK9k5YSoz5d8DKRwLktMFScffH2v",
  "key18": "3BE4cQFnTy9hicdRbdoFxLS2gMTzud3bvUzqXNaEzAEP6L8enT5135vhbWJHEespN5oVFYRBfxp3hKFAWwTTMYpx",
  "key19": "dY4yLMJxhkqrkhMN9D63pLVJ9Lfvt1yJWnNnvNEQ8V6LZuoHHqbw2ZXGNutuqWWuzfAeHm9StaPvcLVAP3sGjF4",
  "key20": "57pKxHuXShScPXLaG6dVUJXzKDLFoxKKGKkfoghtpLryXswFYb1TRPthswH5EdDB7RvcyJaBq7CMMzgoRNTgDWYM",
  "key21": "YsxvH2GRz41HGGpW2GGX24zKTcA1SesXDddiYUyqEgywXE9j9e8Fs9UKAsgTBBgTPeJgisDnuCxB3N1eGLAnxKT",
  "key22": "4QLnFfKfNPLNNkhq1o3wsDvLXsNtamdE32iUASK633XitzpKc5paa43vU2iv6N8srsCgXgSvtbNemjuqeDEHSRaf",
  "key23": "2newLuMZSfBga3kTFwbP7ZDnzKSaLJwA4ugjzYyi5Ho1vnj2vbALvnFfhmyu8dMxse9dEjqVnGU4mwDWU4PYuoAv",
  "key24": "27yyD1V4A6QJRRkhC1zed41ySpu6LjS4vftASTXzceATXLzsiaetTqHe2RWAUqrxe2YwH3yyGEvKN1RUB9DvFwbE",
  "key25": "5ndST9YkuhTwcEvAFjbJ3oSTWgJCKG6Q2eKgDf38RMRZURX2TJLUYb2fTLmvCc2qfs8hPkWcVxM1oXukwbYXwuPa",
  "key26": "5RkaC5jzNUgBQ5JjYm6HnbACHfPb5wk2xEe3kscmFTh2ozntv65aTn4aRTgbd5r72jFJ8LKRFup4VM2wwQdc3K1W",
  "key27": "s5UT98LjMWz9SfkVv53LS1K6RDrUD1z5TgGTzpv85NQQBBJmxEJuvJrZn4AS2oKJ22fv6HPVk44FJykhnFQwiwi",
  "key28": "5iXsWkL1i7dN32owN1iUkcknUozdYYZ5GbwNHPPXGTx94XCCsiMU84wYYo25VmMmgnYgqXh81ikSvjeDVdS7z61T",
  "key29": "2hqeBoDJHTBdP9F7YixCNk4AJStBrQ2MHW1To747DNERtM2oPQJdi8VZPTF3yyXgXqR9Cvx81fJniPbEKwpzJaW9",
  "key30": "5A7takm42sMybArpAf3SC3EhfgtM12iXTKyp4dZhnxKZkXqrUJ9w9Cm4GQBvRx3DjGArmtGCppQThJT8RTyNEtWv",
  "key31": "2QAcy1u42eReDKp1RPTnMLFMCmNhqV2bgkN5GUWzAkDTe75jrGWW7vzC8DGH2dnsXekQPFZiifPWxR7ECXKpCjt3",
  "key32": "23WxXT91yg4KBCrJGSE9j5dDKcvT6j3srDJHkixBhCdgRPy5vZ2g55TGnVpRAJJoPNydmqNLYoXMRR9u1GT5NYES",
  "key33": "2Zkd5QR3RWx2evEtv2CJCydaJZSDRvVJXrRhDp5pa5cFK7UfCCuBjXpK31xkG6qvJKpNibqAuo2CXVxdTxerHwqY",
  "key34": "3N298ogk9f2u7xacMxxjkY4xR2FZ5BJZMnbDzbxuqFxvJjXSmhmAWDjudyE9cap4ajQkRaVS7EF1eD2v8DJLYMo6"
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
