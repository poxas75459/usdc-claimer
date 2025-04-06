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
    "5DS1K3exEd3VaxYuc25MHpHvsa7iP1Lxeh8PqxkB15qXZSgrrqdy2jTitjcuGEProBqkj6VmcmMr1n8UdDfiGRj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxFmmGKGirsYawQPjj9v6ZgQjN63824yhbm8D2S4gYGHjCuLVJTh5drAfY8WCuhWFCq8QCrxhkSGdcYdne8HFw6",
  "key1": "xR18YJjt2DdEwYodDwAgZG39jNYvnusHh9fKEWTmEsoGTAuzG9LyNJFXiAsfdF6FgfsEJ5V937pQ3W2nyiXY2Rm",
  "key2": "2eHcz2zpfr4WP5KMzDjdZdexuk93A5RC65Qnea5AFLjRs3dDCmbCr3UQDir8Mdu8GBvXft1nddEyCSuBC9fv1w9L",
  "key3": "5VUr7hfvKguuYDecuncArfWD2M9QAA8dYma5qaGjeZVDnfiaCMoSmdqVE6qxJgyiuyz8g5Ta69uh8AEULH4PF7pf",
  "key4": "5trWegY3YHPJSnkuNpskSfthLJ56bb1wMAgfKXxgV4YgzcbSfehxWXyYBd8f841WJSBtH97Yt6a47C73cv5S7R2K",
  "key5": "57abV8vi1s93EwY7MUwAaGjMji83qPWQb7L7FJFM9qYoRkS5eVyZFqLJBzSHxeQSu4FHQJHbgZREm77cXwWyvxtd",
  "key6": "5uDAnhnWYFqyEgo9nyRUdEydQSLTu6FQXAhLb4vUoAaNveZvsJjSXPhAiXgfEKuDBGTd7EKNeBq8YR6Jy2Yc2Q7",
  "key7": "2CFsdsfBWdxBHA6Zm4e56wKAqf3h4KA1XEJXtni8wHAw4cZg5eU174Q54sPDs3Kg9fESoFwQyw9nWkzVJSMhdNPU",
  "key8": "5UCNSjoM6B4DUnFkAxNkBTMVbE3P9qbYyPubjxBoEh2YzWS49u6HzpczUS3EKD8eygRaHxsJoJBJkvMR5ZQ3uVMY",
  "key9": "64bee4onm2xQv1zvn3ptbXYLSytg9FcCDF9XhN93SoG55bm6JfaUDVJVDCVQRZX3yxFpRiHBGciDHQ2NEDAsxgwE",
  "key10": "2LBKx9kkqNA8fA9o2o4TUVSiezFeGHCVGKQ2xxR7eKxStfNU2QECmY4rVyqTh9fAz7CfUrNHpnNZLKepUpbr3HkP",
  "key11": "TBKPwjz5KGYffvNAsgmPsLVKCNLY6S5DedQJXx1x5UQ8htzJWPw2txTrbDA85BLsQY84QZv1FnAMZhiX7qZMnPy",
  "key12": "4LcvtZ4unawFq8hKTkAGavcKycMd43i3vA7fdoToVsvFyHD4iw83NuaVNR2v1tVjR2rWGQap6ryc4AsYqDfazK5q",
  "key13": "Fi57UfXQQeaCmBSYv8NYs8RfwpcwRk7NQKoW73vqyaT31ZwDCNhJKRGXYW9PMHBxAgjxGkaWJKejgmfq6UPDN45",
  "key14": "3aeY2mBL4txorKZRYbCKxNPs9dVGors3QgSPtAw86eWn2sfpPGBvuB2ma55dQ2t9VALhxi84VZVc7SDJYYYBy44d",
  "key15": "5UbXF9xJ1Gy4WnyF6cbGXLJWs1nznCGj3hK15sZMFqowKuRTBxXGPLW7wZoJnd8UguwtbWDdoqKHwkWNucMtq72V",
  "key16": "4xD9NpjsWr4B6E4LWWsudDdgA5MAm4g3GVN6GR6LgPxEnA6rZQutQ49smD3ry2XkYkX7AqMzgwBiAuM65XYH9uu4",
  "key17": "79thR2ABqKCWLFYgSSXGhasS1Thh7gBJ1QsJ9rqwj5VK75j52BXnLAg61ezEcXrsU1W9q68tmnsJHh7cSJStEr7",
  "key18": "efBreJQGdtNNvE8vaK4jH8RnXX9JXZ3dQ5ywiQpyJhBgUG8KXbY8sDXfHgTSeh3Nr7isW7MqNi7fuX8RfG7Wsp4",
  "key19": "5UXq1pqrVW8LcF6dS7sKYF9t9dXDBprEAwGVpPBH8XJ6wGhULxWMTytKUFWAysNdKEyucQzJkshmysijKL3HBNCC",
  "key20": "3JSHLgNYk2qrFoc5Jtr6Y3N6cTxGsg8RFZR6BYsyUQyqpZY8QrtrDkJXwoVLqGmaY59roBFfZF5xYJfWFTxhNsai",
  "key21": "2hQ1r1Vw81NvBQNyzath2thPgEjtDMxC4ofFQwk3ZDtzZR5Hw8AFeTw4PpEtchWwTzHEZnGbjP1mS8u1DAzDeoLG",
  "key22": "5G7sqZL9pBux2zWJTaFp1efaVnhpmapHfvzAAewnrXsvsqtuW5txo9acdR9xj9s2tKstSxVZLyscvQBS7RtSgenX",
  "key23": "23AGPcxYrjZRXmxfPwsuSxBA7fkfyuBpWSi7vyR5ymmcPqzUhWdzN77woAy2JZ5YjdDTBj37BnRpTRdadG8V5NDs",
  "key24": "3kzjwfXVMCrMYd3C8swPV12KxPoo1WRn6PLQYRpsZayqN176DbchM5AbYT63NBarJ58tfdx4H9b5H1fqQNEChYtC",
  "key25": "5KMv2FFkfpSf5BYz4UuPe1JVzawa2rDBUaHCJcYppTMxJZGBmbMmhAwCDdz94EnF8673WB9twKmxm3AuzzuD52HH",
  "key26": "4waFavxcLa38E32HVLVSsggLUYfxp94Mc2atY9U7g8Tc4h3sHhiQcggG3ARh1btreJEMGfV6nhg99CBeUgqiuJn6",
  "key27": "22cdeu8tCL4Qr2sNvQd5GgEzXNYnZCntbv2bRd39ivDvXbtJzQMg1K8DfxaaT5qmjPjPwLRyEet41MTZkKB9zxZg",
  "key28": "3rfXDeqrUYvvBokxviidJWkFKXQvvb6fWcZ6ZkYimwDufJFCMxTvmAxhLizEqUfexbauUnj52ZWK8vNa37rpBGWe",
  "key29": "3Xy5t4TLC7xrVV2kPhHhhBUPmSbmQvNWxd8BTeyWt8Ch6aoqpGAz1ScZSqdN1EXRY4M2ywqLbSEw9nhVcozd8R98",
  "key30": "2vvtQSXDXvsDJzASKc97N6s21dkkJtTouFYbZAPHwmaccAvH9k7iVxsZBowg9zCbJa92EE776ifw2DCufdpXcKiH",
  "key31": "XAWDYFZWkajH9i4eLWANJgvLSarY2sJmQFEX1DJNysCpcVLU6kK48NKDqt5qxiJ8z2oXqMVtvvuxuo1G13JrzEa",
  "key32": "BoKTQzu1H2jTjTwr9UiHxbLZup9E2n7PUpHFjnf9mjYonZRvH6Y7o6tr7itgVMc2sZKfcZkiZXS1dAocGHf82Uz",
  "key33": "xf4brFNgDmu2XALAamFnvfKGLURwzL8FhWwzJA6zNWZFmnoumEvdgHGF2dvftQmLXCKPQcwmvcu38JJU42ix1Kh",
  "key34": "p9u97eouQv3Vm5M3feNTzyXDPhxLg5iJzXz2UUdZYDnpJWAM5xpmjF4fpcpjTuLo9cGZEDunYb6nbC2hHUPUzC4",
  "key35": "3Af9TMjbKZS9pXgozGtVE2JPgNDbJACJhqGFDpc1kKuAJvd5RWG7CVw3Wajr7wocNihxPLGkfrNsKTAdnRTnuWpT",
  "key36": "5USdQXswd7MnLfgAeyf98zLG6V4RNNTkCKso3xzfr41zUJDWVTNroTFFF6zTRDRoRSivM7nSEYmMLyNFNPo58pLm",
  "key37": "2ockUnGhLEqsq4WDth7H3p4QMFDeXMNvyUbEAWgwL8nH4m4uvYrgmNT82XQH311YviF3BTaeYzPzV5SVuHRBKwua",
  "key38": "5591bmANhxLYHZmVrSGQNRAUJtvVs8Fq4p81trmV9uWcMLD5v9KxEsxU8nHt6qxhr7B7fWZkCgxeS8oeaV6Pi92B"
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
