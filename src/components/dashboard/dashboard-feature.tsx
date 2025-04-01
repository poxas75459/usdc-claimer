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
    "5KRMcQ6UbuPm4S1uemi7sJuxn2gCvxstLBMMRejk1s3U71Mb7zb163Lh6KpqZCoyqdNcFRZa1zbBH5sRC7c4Haip"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WqtiXR1dkYEWNdAKuPqptU926vdLhWS5zjAswXchzHE73kciBpxJBeguDnSvrhbPvEmgSrc2mzkuvrJDGo3mLjP",
  "key1": "2ANZuGFjPDSG4myQgTUGMwzZUXSTc3aqvySBbtpBiwkAedGCToj11d5X1gKvQn1JaJsjgf7TUwBZ27j1u9XZHgo8",
  "key2": "2h7gBWWn2WC5bWU51sWcPY88sqcGFwRvTXHXTnoNzPWHUiHvAS2u7cFLjhRx6xXxv9kagEW9e4DnFj3pGsx61MYM",
  "key3": "4a5Lwubu6x58d29mgR3svjWgEtAfTxVPWLGCgZaei5R6YCawHP4GZLYLQE7QdbRFcTS7xM5jbTqpY2Q1esmcX5tQ",
  "key4": "4gFghDbkBbcfRmgoHC7XU5StQGKRNrtwkXXezEJbS4GBxVSFdoavs6TaoHhuHdfTuFK7ueLqdZbNBXtp7w8PfFK3",
  "key5": "5FWvLhMD9o9B4XpAoFh24n2gTBF7dhp9DgnKjqn4YeKJXRdFrbwwR7XjZHaYRM1ykAAFqmCbSVyTAgeNqmTwTmD6",
  "key6": "3Kavoawk5UHNLDxAQwUVtT6RFDkwRupRdQnJFrArLE3pLux1fHuMnCQnCR8kmyqHe4jQxGRYFvLyXR8HCtZ2B5qp",
  "key7": "5bCfU9Lu12CvHsAkpgTyWgySHVZmXw3QmjUFweviJCPNNeP3SkatTQwb7myHrTHpsje5xshteHhj2MmpfswCYbik",
  "key8": "3yk4vYdcyzeX3h8KydTQKXLbEin8WWrn1DSPK5P3Pa8XW1AU4m1CbNotqD2Yp4nGayha98PnSUaEBWhcXqdWjYET",
  "key9": "3QHYACYUKKMRpY26gY6CJDAYeYwHoGS7dNarv8WhuWGsNo7wEvN8ztMFth8hz8Qo4Jduh44WRHHLHDCrgT1gK2sP",
  "key10": "48Lu7UZkYqDgKym4LvziofKWqHuXi3fo5EafsRJevZR9nMAVwnDn3YCDmRrKpwDBKKSiDeySMSWNzuVCkkfiMe9r",
  "key11": "UY8VpPRLCNFtnyktLzu1DhxdHbavj3gd2y2xuioahzXpA8YqLouGM6oS5pyWC5Q2iJtc79dsMNraDTUarZpUofx",
  "key12": "7crkauE6dzLBbgcpwtN4WfoBAH3EY3duViD56hcjQkjQ87DwxgGxZKTMon2qRPQg3FbX9WproWfda4VLcTZFrhp",
  "key13": "J3vMhz4CKjXs2CwMPg2MxqgqkpngSovrYmU7BhahN4CEV9YRoE6pPhFrbBST9ghs8y84AEkr7ssFU8d7Xk3ARzB",
  "key14": "2uTfvjUe4WP9RDTKUs5vf4WR6YdEKx994w2m9wGqRz8b212Yy74ihF23SLnuygxzuE4ubdg637gzj5khvbv2aSWE",
  "key15": "32Nmf1zfo5k68ZxfyZjRm8erHeEsh9bo5e2pkjEy6nYTyfRMBYT11msb7NQSkDbxSg3oLgjAxPJG7AvMefxZrAxh",
  "key16": "2h1HcGDZQHA8VcFy3BuKsatXuWSR1CWNBE14yA92fhkkRxefmd8q1W7uDjjDNdNZfo7zhB3dJhJFDiEgdxBAwq4s",
  "key17": "4yCq6N3d7SAXTDXTYd3x91htVKYNerZMdrRut4DBU8UsTUicz2Hgwnm1vsgxcAvAqBrQcbVLQodE23yEyjDWTS1u",
  "key18": "5kZtARaDcRuAWBfcnqVLWeKiHeB51Leg1xMqRpx67okhswnpi2ETMbjFEbpqHakaeVKGTLk6Vyb3Ega1pFfA68UL",
  "key19": "5xF1LLWMQC4tNMPAYKdu1G3ANiMxFqaCRwT4KrZ2CVUSZkCef5FnskYBT29R1hoMJUk2VWf2HW6p84L2LaHajDJS",
  "key20": "2BEK797CRwGNDH5SU94K5AdeF9ayzuw9mtythJmvxrrkde3Zo8CY64PkgJMfu7tP3BKoAidDQKC27KyLS2cRRQaK",
  "key21": "5LYwcyDJxE7SgGVLMKNW62DLVa6kniZUuUYzGo35FwfaGXD3pemPu84H7GLiRN8hu94AJ2Ymsx6R7AfaynFQP9Vz",
  "key22": "2BhNhWh4ppZUfiAeTTjBz7aawSZh9buavXVF5gcTtd4wmFVTFbg3jsH7hPkBXKDT1iepi5xSo74JQFdPq6jbPmaB",
  "key23": "2Ar3zHUyQswHrGeBrMkpFJuyD6onZvJbMMqdH4H9CeZoDxGEzqFVgBLKGiUE4mQChGAgr5we7dHywKWfDQv2FiHX",
  "key24": "3iKAhHDjNYmq9n4ZbBdvb2eL3Cub2sa6nCuXrripzkXtSVJSv9MNYKG8MSRFJwVLBHU71VV51MkWfqZaRsReUyJn",
  "key25": "2Tx18YUGrrkguXMWBBQGDVcQ9VtFF4uAiZZxQczG1JaEmg5LxMi9gpnQxf1Yj5oQ9nYPX9h7Ws99dqttS98LXPsu",
  "key26": "4rEF218H2fvQfviZtnrWyTw2PiNocJdmmZKnyQQiZpqHs85oGgrVGaRwk799SGaTuCvWZkgHhCjFXGX3KXStZqzd",
  "key27": "5XTfvn5WqDTi6qjeL13Fmt4SMnnUpHNL8isPPH8tbWguHmLzF6iYy1YfrEUYYaSiFmmzNcHV4nU1GPbeG7moznXN",
  "key28": "5qLBhpEYfXGzazgRqoKrkcC7J96L77FSxKQ1ThvmzfWBTZxJxc9JAyic1HxaWHGguxD3aJX5q4j3RxC539nuNpi9",
  "key29": "zxVy2oXnRicRsb8r2vXZiZ1ACpVCWuFcVckRaaU5EuV2dVaRMZEzf7UKQU2LSctU6Epo29Y3j1ecKzrsRLpuSdV"
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
