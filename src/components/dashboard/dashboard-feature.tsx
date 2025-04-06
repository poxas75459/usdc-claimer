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
    "43efG6autxH9LqWXXrz8gYUh4o2BidBqFZxvp7cSGiHLv2xXC53jzkgjgi4D9LsE6tJuZPhr8HhbhCBy3hBvftd9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gu5t7XaoUvyVr9PwGVHcUpv2u4YH25jLadjYyCc77L8MJU7ZFgnEcgEZRRDpuFumut9t2jHoe89NaDCWi9rHsme",
  "key1": "xVioC4aNrnM53YECfMo8wvUacbDCHw54prTPpTxvz59gkZgPDWCjNGPQAq1xtMtLEP7jNS37HMhHWaS1mjQywqJ",
  "key2": "48pGSZXQXzYZX1QCBbMDuN2djhLdnvVPqPXj1KPKBJHMqjD5p3h17e6sLNC9hmgN1trtAzSmRB51HW1ae6n1J95p",
  "key3": "4j5pj6xA4aUaQPS76zYX7n9RgcBZ4kEUq9GvbTieNXQbyZJhJovfCGpwbm7MTQHzGKMidWkgnmWSkTpk35MQL2BH",
  "key4": "5FphutMkxu9XZJ6KY871fW2BqAAmqLUzThimqX1uPByL83BjmsidComKZF8814rPYXFALnmKVcSxbzC1JwFfKnTr",
  "key5": "32HLo81dABrMLX7gQ58AdeotcpXSdJErxaS2HDb1LPNcTnW5FBBjZaXtj9qg4hFMho3h4Qb8ZdMGVC4sXx3tYnEW",
  "key6": "4TD3gYpAP3Vx7z3AHxRSSrSW2zfwne8mjEpi8EPpHRmyfeVZ7YhH4qojEkE8CDaXDvoNX9PXwvRcKCmjG5tYs56h",
  "key7": "2h4d8HhQQAUyTWwuqkKrskXgJfnWTeNjHDSrn1Wyf3cAvFmoJeMfpXLTM1ukQQE2fjGCEqrFJt3eSW8rsuzqCCRs",
  "key8": "32BiXtgVVGNHkC7ZZZGqkGQ47oEfhBTjnTo21P6z4ZvqUutYgqqBQV7fY7C5DPFSRus8VaRbaztWmi7pBsn8Yakb",
  "key9": "3ViBMeNdVFYd2hhJX6vqQN8S8wyKq7Lr2nh1zwKV4g29ErjNwxbidvYkzBnnx3KkRNTrK7j7AuQcYzn5pqCfRWzL",
  "key10": "4H9fmNjZLuMx2XZc8MckxYtFCMcr1frk37whCQ2LB2BQ5R9UXbCnYH9MYeoY9BxBNJVdTv2J3EZRbeBVhwRinA9F",
  "key11": "3EpxCjWmrkaKnpPMKhs1ho8bF8NhpbMP2pSoeErkfUPvyc8FBVSNkP3LZtcf5LrMCSTEVTS1LMpnzqktwHFjh2qf",
  "key12": "4WFxSsetvomUCFiGHYcuGpJ8FEarahaomt3KcgKZnNNhfYGCVEyp4bKswicnWLVBfcsS9pNQmjNbhkZVmtZn7M4c",
  "key13": "4UwZBfkUKwPKZ9CYgXepAYZQgrCzSY951jvWYVBCyiFGi1H3JvTNwisqPpLXH8QVGTL1E94kmDeJr76C4Y1ZXK3d",
  "key14": "298AvHxY1TTjjtuNbTCKPKiacFmZj2psxo9UwJhd1F7iPH3XpqLRcF2qcRzP2CGd5FwtEocg7HRfjjQr7wBFXrdy",
  "key15": "3SoJsoWZ4EEjn72iaXFF8PR5kySgSVb8Mb2j1fBXoCP1Ndi7BGtJV9Rwx5h81phExrZVPBcgQ4iApvF2t17xmgFu",
  "key16": "2VKKoTM58SFVrLZZSMCg4mYW6XmKCtUtiwYwtiutUxYDdwh4KKn89s7nJhxAYg5yWEdoy3AwiJms5kGyPFTRkovc",
  "key17": "3Wp64WJmh6c3BxzVcBf5p7t6icmG4zmcK7SQsoM6b49snWhjymir1zmeaAqo1cStDMn5xRvyGuMg4DBqGHDT6bxb",
  "key18": "mQryC7RUXRqWUVqxtoadjpKoxwCkW65Nzvr96BkE1rD8E3km8CdG7UzRPzRSzbcyadSYwdD1Cijt4LRMLc7BAQR",
  "key19": "2cvHY9SY76pA8NzNQUfnEE3fqRkEghkXAG2gBnHYjwYShKXczacbcUMzJg9eVeZhX62gLuMi44eJ67UggX8FxqJh",
  "key20": "JJvNQwgV6w9PM2FLNFgCeTLbgeK1ezdiTuR8zMprU8y7VdFH5jLeGtbFemT1KCdCYjzTyQhczhAvRa56tCdv1xC",
  "key21": "HHxnWD9anjS9iaF2wLpUi5QPKFiNbVVXzzwtJSLEKyudSestHo9hcQK1BHGEFbynCLbSYJXypRHX11ZsytTKSXa",
  "key22": "2BcwGtJaTLi5umvbBWpv2MFbcGsoXCHZs8oZJSqbe38oC55x7fyLdfHKKqce348wa4sNLisbprKaBDuP3H5yDraA",
  "key23": "56bTfJKvEQwjrvWZuTvkV746RyUYE57QmvJhqnudK4TmCdjS6PLk41WjK567rNMgctCktHHFbKiXcLjdn6pA91oM",
  "key24": "5P5cWkExX7EW2zA2i3faFGKLfnpeoz5Xvi3Ch4RGmUwbBgwyvvagNVT9khpQ4HaAsPadw3bReRLSW3vNMa34uk4a",
  "key25": "2sWah63PTnLnF9r7TYu39TJrhP1opzMoX88QuVeS4tpZAabuMmDQeaHujkptSKUyJAzEbn9mhvsKUdY9uRL6VBCa",
  "key26": "2uS9dvBVvTbGXUPhSgo4janP7JKavU6GxSSk5i3xLnDrigtRZKLE8LMj9TBCR8rAHC8DrCbgsHeZih4vLgFEAfr",
  "key27": "2XVYL2PZXTvsP57U6P72gsRNUyCpXGDVffSWhuWHxjF3bnetJ42SKrqbxiVqPTXC7jxKu6tcKtCmw8NyTymN6B5y"
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
