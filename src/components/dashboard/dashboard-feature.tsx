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
    "4xCfoR3hFX3dnQsCz4qjzwni6YZnbvQnKXuww89GbNNCPMUxmmuWEjYMKPvDbaSPm61qkm3LkB5ozsWTGHD6jMJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZ79wrhVSfxeyhRiBGKTd6aaHnPJAwsvS9G15XVnKeq7poD5Ze3iNgQnnydPpx7XXeGWG9sWJ4oYVo7X2ExparP",
  "key1": "r5aw1nXG5ceG1aGc5vFRMoQgvN8pyiNmgAScZzNq1ZUW5oYiyk8EaHSMqD6jji6vY4gjJZEuNAneXU799KjFaqQ",
  "key2": "j9WNRUwCHqt2uKff66g35JLTxqtPzoqwTASfbh3mUhJ2uYNwCfXdpdYWzcuG1NNKd1GdVGMhE9D6u1YzPx3QMxB",
  "key3": "vd9qfPVMCuSUauE27M6vUos3EKFhPdwM5SaC3s4zev3eGrnswfQEj8VDsY1wMyqAWXXT2tsY8XYDqVK2bkH6E5A",
  "key4": "4EfyMbHberDzgnjdPSEQ6VfFgN5QhJSPHb6sZoeA8vThZoWvAZSEQSMNdgNY1wFmwCzuAD1eXxDhBPqm2THC484j",
  "key5": "2wZ4C8nUADjDMgFfmN2fmMdMZAA2p2Yx7meVCmZpmcXcy7as671QEdPkkJc7HrJXHdN5HGFpwk9WwDw8T1qskzZj",
  "key6": "baAnMQ7rX7iPYxNG6xVwsVUNuHsiSkwfiMd6QxH7R4vZB31iGzST7UuhaHdBs9mCN3ZUfvJDKyLg7fynGCprmRK",
  "key7": "3TdfnGjHjNzQZ9X32meifd2xLUaEzSX564TDYfH15NufbTwnNCJRcfGzgu2NNvXkW4F8n7vw9AKJDRJst4ubHruW",
  "key8": "5LLcE5BSpyph7sTZs7uStKs6VdtseQf5n5mgrSX9KNqvBnhsazS2Ace1Xwo4YXYxW3ZuaWtFKmtSVZGahnLDVQYB",
  "key9": "3MYr3BxNq5Ey71yGSd5riMBeKKs7MqoeLccLmDMZffKADtdVfKkHbgGaswLS6BqSTnt94Et3fnXbge7jxF7Jzfbb",
  "key10": "8sS4hjmQPFjSguktmp3aRihX1fCTttD6xzeomTPUiZKghhS9CSfk46j81JSNqoGSJiLsovGDpYP7QAsjoBvw5XK",
  "key11": "2qHyypbndxFcNHfAe4rBKHCM3rKmoSowp8GbWGgMgMfitCzd26Fik7sDVHH6oU1FVVv7UTqyLmd9rZi3o4WYF99R",
  "key12": "2n77v7SKtm7q67pWus4WWbRPW9zrkLYG5VjifgeAR4KCXhxwsGgGAaZkoncJyBCnrZABgAavifhHkK2QpaBTCYTX",
  "key13": "5syEfP6exiG4ddwAUUyrMfpeMPTwK6rQtzZhCY6RdUn75ery46sGaAThftpiACfMuanndWq6FZLnod9qK5k8eLPa",
  "key14": "vFTRKNUYg4MJC43d5hLVGHMStiTqRdcxT8v2ixEC5wz5aVp8PhmXsS53LTtKYFqcPSgsMu2DDd82cnQbdzD15SS",
  "key15": "3r4E4esCR7wwDwDMmAVXG76Vd2f1vQC4Eq6MK8ProZ2SzQ22XWuwFrP98uQHhVpR3gy8zWrqYLPTDP7LqyMYDkHK",
  "key16": "4k822xJh9VBLXbBb6yRXyK1gYuRvazjr54rfaqdqrhpvWJSvPsSxbyn7BSUcU8g3CrdEcyamoesXQ9YMXNWASVTd",
  "key17": "5aaXSX1W1vmbNDTxuqGsQ7uUB6sxWJimDfZN1wU5v4w9JKvPuzhk2Uc5An6QL7U3NdTyrZF4zb7y8WyKu1VCmaT2",
  "key18": "5QJ4L88WNefNASCHrP8MjCD5cAQyGMNQ3sV8DnPXnZvYFnCF344RCr7K1bd84N71dKfYKFnzwNQfUYBLJtjnadRv",
  "key19": "3UpBLJF7Cpv4XzcrwMZ4689pV3Z8KcymhhjvJcxGZLVNDi7cFdEs9uQoMSh9vEuFdtdzGg5e6YYyztsrUiy8ddW9",
  "key20": "4eAU45UVU29uh6LXr9DUPuVQ7HAJkU5dscuHfLNsft1hveKpor4s1XvkHbpiDgUr1MHUmbA7yBBZGc6xG2PnpGHR",
  "key21": "Jy1WCHv8uYtaDeqkUqPPsFvBahTEyg2yuJLT9bdnxsmRqQK6fmwszawKV2bTyNGBH7UKZtSx1dgbVNbBQTSbSPf",
  "key22": "4enznYTHW87hat5xGKeK3fjaDbTwA2uAUgEAZVF6Nn2L1sBPRsKDUX3owdoTMRvKvSiEGBGhwb1b7Bi6uPZ5bHcL",
  "key23": "5CaecNV2B2S8V2dTnxCfhNkzuu4iq4hVHsZ27GbZKL1QTi6odyJhmVtGZdJyXAaP2UgV5irPmtHGvMMD81HHMcSq",
  "key24": "3911PMjjmcKxSTwstUu5acZ6PmmVXMe3pwj4WFasVBHh6GJruW3V9pg6u6xToXA94n3E46rKsMRGUEwbCrD6iCcE",
  "key25": "HUBY3DnRJBwuUzXiR9FdEvCPQVigpNsHrJegjv1gcUgTZSYTq1ko1EqgK85y9NfPUgCkFK8PpNDUY4xuZx61z9s",
  "key26": "3mFxTdDB4WM6YWkDM6s3WAzS1vbsyYcSJV4Qft8WQ7QMprcKFRrdu1ndtJHzwcvKPJVasiMKW7o5HuRVmciEznLT",
  "key27": "AQovtejbStLjWqdHRFQN5TNUwnHrcHDenf6EP75dmBMd9WVpF5Q5TT485LuiYzUCXojVphxwf6p3KKQwwgtTuSb",
  "key28": "2hVciXRSWzMm5pPVheUWrAMYGAEQrkHknrBnL5nm4ahbDa8SyGpFnEXxDiyJyR5A6BEKaCzgLgW7B34KU7Zjth7V",
  "key29": "2qwxthPUhjYZUQLTQ1oNN7ZZQnZPZKX5bZCT75iqawJ2Ct3HBEpg2Eife9849WyHBmRi6r2vbPWV9UGBhAhbv2bi",
  "key30": "33h4beTm7tkqeNtV5HSHjx6VZmc4BhW8KmLFDPqFGZSCwDoEKfpivvL6YDpzVK1Mkt6ydRXk9vJtnuFp846nHQmd",
  "key31": "5LASPfZXmRtTvWf3UmVU4KA1ddd6vWTM2pjDNh3E859X2vzL7w6ZeKS8M5TG8Q1p2FcF9PT6bp7vjweTTMempzJ3",
  "key32": "5YGW8xyetwA5KtsYrgTBwiqDAswzSCgmUtEZQU1V8bnEKTsjUki9GEfR6omu2k45MhAspQ8VQWo8kdFUgLU45ZXi",
  "key33": "5nU3MahLXLcPWRnGpo2ysnJbi35EtBdxkjwSvF5m5hY4GxfRcJAZaiumL7K77uFsp5AvSoRnNrK4osfguu1ALy6",
  "key34": "3dRdBWDZFTsfQQ8dKMUyX3idzsX4EfJVYUZMdKag1oawejrVWvmuBxu8EzQEhnv7Np2SRWfbnet21vzjcRdgTumJ",
  "key35": "Xz3NUZxMXfLSyCU8CCN9tqtdoTuQsRBVkEXaFQUEfZwvbrSqMVxNsP1J9YgSt6x7emR8KAVnLwc3297WgjiZjgi"
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
