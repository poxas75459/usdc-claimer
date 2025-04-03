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
    "5z4M8TrnF1APv31eTD4WFwjBHGiAi6akm7uMC8VhTFBnSNWt77rKDxY3RsAsTUTj4ibcAPjCFPnYG9umoYC7p5MZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j3SaEE2kWASfAP8bZ7oc7qvMNZbJMJpV9XnYrA6bzds6MsKzAGKKRPe78JS2rJJGPjTR6TtLAqwJQGP4DpvPyi8",
  "key1": "4KmD8BmRigSrhw7CwUREetM8MS9orR3XPmxmA2GXFnCRck6VQcJRaAPKUwraMP7WT7CY4nXUSUxJYAjH6BnMBv6H",
  "key2": "24WzJiZwV7zqcGR2TJrRdFUMsDmsPSHLPhnGSMhZnjYWRoXAtchfmZ9eBN4DUivy4hThAJfcmU1ExuMG1smXC57S",
  "key3": "3VfwvFyxZk73yHmXt6DsVReuKvK52cDsYcsktcdcZi92YAoE2AiWDKsa49BWyGMyaY3YHatEQQkZDFoc4oPhMQXH",
  "key4": "2KiUBP7qr7goy1pinjQXnd2EHJfYzbiowycVTPwDE8z7yufiNtMM4qycJQbYozDCVEWzY4N2LgWVxbapiJGV4wQQ",
  "key5": "35gtxiAwXZ8pCvHUPQZY9MsHyhSZCzXpQaas65ZtQQEQbcmrCyhwwrRJShQZnTSQwrTNULmndXki7SjNcpf4pSgq",
  "key6": "669feqDf4aXJB4gjCM2ri3KB6PFxq94iREBGssBwoWw3xvfkpxyC8hVMY41VkQXsni8S2yArpzdzo835FNKDv9La",
  "key7": "2CASezdQqb877HQSLofMK9Wwmc6px6XuyC22U19hcJpdXjuy8Rvjmwp1d5A24yFAWTj6AhoC7C6j2nnM4aBxymK",
  "key8": "5UCVFqLPS9173o5ooCZ4FesFBzYtcXWhPRTPshhXXYKfnK6tHm8C7ktA5mwuQN5XjfncS6NKLYJNNY7b6pJiaDuF",
  "key9": "3h31XSYaDe2JMVba63SQP2TR4dTVEMc3VYRahntUD6FmigWrQcGAi8YgYyuaZVqa9q3cY3S7ZdDYf4B4Tp9j2Jde",
  "key10": "3k2NV5bZ1YvhVDUJabKHXLiRLcp9pDmrwJRRcV2HKsN3uQ33X8JbbQKzdcqwEC6rhaTCshW2tLKywy5n8EPvXtMd",
  "key11": "5GWH5kHKkf1ziurHP9wQgZhjvBBXa56yWXDjEf3zF699GNsqD8Fxzqb9sTVYMAEURoYfHSTsvFUbjrvBtEQp8na1",
  "key12": "3HAaPwL6pqoDBdfMh73UVsbq94ByfmrAnxa5j1f34PwPebZ7HLXDihbEebMrsHmabqySkLRCVb1ZxE5tsgTT26mQ",
  "key13": "4crmENL8WwQgD5NbLmNk5YsJ9v5vFSqGZdb8pfjG2XFaKZ6ojxVh5WwZwQVXPFqNteTKwSTg6LdHBBh1X2C6sorH",
  "key14": "3vYAdrmeDNCmsYqK8v7BxXGD285WciyHrrDxP3eBvRiHfgfPDMvNJ3kk6Ld1aYKGZysfK2yfEFhVA3i4MzXE6rFf",
  "key15": "6zX1uCLDLNskosuwCF9fRfr1Vz6YB6NvM2t1379A3XW78zQMZ6QyapGe1zwf2GL6puQWhtsP6uuifbRQFUmkfov",
  "key16": "cL3XYwXKs6mMG2tjcSxJvfGq5RUMX5QkoZZcjcc21uggbox2gpHT21PhQK1zhdcmriBrZGxUgkerhBsWjDQLTgr",
  "key17": "5aQRtfQ87Cw7KkZFEjf1QgSN8mPgcTxxdHFSEe4J5KBzxujN4WRJSaHGrJ9WGbiQKjsd96QB8TtpYto4NjUpavPS",
  "key18": "3e9QkwWeBHh9a3HmC89EhQcnmfQqGCPaMXeSdf2VPoM9LFpRFX2QybChhB9Qmxg4t5yGMs2iVoYXA8Tzm8Hs1P3V",
  "key19": "31YKkdJeLjxrR5dVQD18i5nDcTWkhXcFNQdbEzre5bsgAgvJTV5pkmNpBV1bVYm1YFGpRArixNdadxDQrts6nv7B",
  "key20": "4jXondP2ahZAjrViz9V63qgMZA2Fz9RUctYQW9f1CZR4CC1GrMwzxtH5PhNscdEqMi342scdFwU3ZdhpUbTWUhwd",
  "key21": "42MHe1yNMhPQ6ezPBw7EhPh5VUY7m34WGAZmeBF6y3nSoTRDfjJG5AfZyjFv1amjbTivLcB5fac8Fm3XfEpcaQXM",
  "key22": "3hP81aGLa4zW8uKFWypWvEtiyFTr7uVDx14LBBnH9eDh5QMWST4LH168fwCjXsBdi5vK6MT68phmEabC6xqbrt9m",
  "key23": "2sUw5S3FiA5mfPCESMH1YBJ5mosoVF75BejBchLQqKqi2DFGvKHV3LxfCEnmeNdvzEJ9PaXUcnu415eSGVRbL4my",
  "key24": "42JDqYHTFNmW2NgCZnagSC3YVEzWhdv6YDBfzRzq3TfTB7A5DycaLH3wBkbPao3MPuJ8TzduTVwqYvkLPyYKrQTo",
  "key25": "43GFVsvtkuy3Nksu9gsHuj4X2jVu19FYiJoe2ytn5C7YZ13Ep7s5mY6aedsFY3vzQDdgXPwGEArEBw1dUesgyK6y",
  "key26": "3GMQctkfRvSZpLFiDetyLVipcgZsVHRa4Q1eY5z91x7jwxkdE7zVUfMatkUXxFAZc3pfyZUrzJw5eG12FxcXah3G",
  "key27": "YGYWs9P1XThvasRxNsUmc1E3wFNviRAWJZqTauvdXhSWyepi3gzorx39SK3ecP8q5dTm3oxC5fgbHB41NTjjxQC",
  "key28": "2A4swNU8hEt1zWb4ijX7cE6FuKZXtDneLkHCLNuEieE6T4jXwem1CJr9fS81XmoJ14nY4CxyS6bQvxwaeGv1FULJ",
  "key29": "51CymRETQWBZdWuKgFpUxyYZmMoHiWKCVMQBE5ArDnRmp5y3tBbdos9Gtjxom34vnsvNCkLEqwNoEshKQhdxDu7A",
  "key30": "63LDcxCsHUm24ZKRVvtsa7T4imTBhtkB2NMrLmffo66759gn5Ky4hTP5L51wNbf8FAL73wFCTZACzsJnvrYerAQT",
  "key31": "LjjCikYwtsPUgcEy587djjfB87JAX3c7z8s5HukCKjP2bJCVmGKi1n2ZCVUJZcwofikxs9xS125ZB3KgAdp7XfD",
  "key32": "2N7LmQDpQTYGQqQGXiS6HDU9uihsQLu1BAwNMpJReC4Cc6rcttHQtKGFoGa2DyTw3JnaRavCqx3yce93rngHcpdi",
  "key33": "3fcgYrpH3akiHHVvF8MbXeRQymGtauDiJPC8JycCsyWUegzdVepNSX6QgEu7ZAR7QPEfsLbBsECNFpJVjQtyH7nA",
  "key34": "1XecdAocoQwwcuGTYvu9sEVXEV9ugtLozRD5ZBz13wFBD2Jft4H1EYt1urfL7nCiFSmeGRuPKXL7uinV2cNusan",
  "key35": "z2RFiNPQtdEuvyX1p6pPNgdYNhXyp71zSS3gkwySTXJNHzNZ4huaYaoQ3893GaVpHobkE55JubSMixs3wz4xLz3",
  "key36": "3TakKMynSMHcRrvtbBLgGaQ4Lx5SfWYCkwjB5zd6bRpY5EfFrZBX6yY6EFQQf4PyK6KyRwucioFimNGbH4HT9QnJ",
  "key37": "5W8soczR7KDdLgFqzfggjFSqFQkgbtb4gyULLQS9TeAxra5g9cF76X9LKdwR3HRzMvJw1CujCoTubgW26YGcVMyh",
  "key38": "UK747WkQYqRCwTWSJiGgzPi9Dt1SXBJ2FRauwzGToQZ74utXzC8Tee6kd24PHxHFsBH2BuryoaCuH42fhUxz34R",
  "key39": "xBWEh1qwkWAheuBSGkwD7UnE6VsRvxXrKiDTqyvZLooKe8esC2AZKJzBrcPMZke2VCE57YtcegBGHmSjZh3DMh6",
  "key40": "2iWG2Pj976gFnvmHh9BP9jex78SjrdiiexP8NyR2CDU1kRDEA9m2BcSx6T7xXBHRM1BZhCJtHvrcE5PcVdfWjwwN",
  "key41": "2R5PzPpu7xrHZXvNTs8GKWpeMmHtiVxuBitEQ5efYesQUCuY3gS33gpyhCht1h7z3eQkE9PveDTkcsWNyRBsZ4GQ",
  "key42": "4UviP62fJ7hM6qJ4ZQmbbhvmjT4m4oRPB76ANziJ3ewEm775vUNmWRuAksHrkWeWZ7ogoJcmeTSjcLT8xjPiWTAQ"
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
