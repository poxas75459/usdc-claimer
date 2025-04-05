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
    "3fq6B4CGUaf874A5KKSDQtiZNkZu9ggUFiy4AZFzVRZRESyzpViRLUhp17A2VhdfMFq12o9gDTsZQhhS7kRKNv7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Cx5bC29qN6X1aQHExXQuAWVoc3gg5ERinjbZNJAFpi4hNs1GdzLYs8fAzV5Ub2BMnwUCyRBBktgVgi76srqB99k",
  "key1": "rkuK3pQocxE5ftqvsX2xDgNSbXt6tYRPuCo99jXcR5R9gyj1ZZYdBFYWbGDkYCL4ViDZUdaVc4u3Q4xsSt8awjT",
  "key2": "441W2YgJQeqAEx2x3TFz27kMn8hhN3xVMgPYBJAUai8bVYVXv6pzKgjRZyvqqMrX7LDgQgZec6vg7rKcxucd2fRA",
  "key3": "2hNg5afFVACFLb6E3VQmEqFT4PzceWuhnMQNFq8cBBn5Y1Uo7Afqzpq4hYSsR6ixDmJbhnG2U1YnDN3aKpba4GNK",
  "key4": "4nvEHuzk7ZScmT69YjUVvQZAuTmxYvMhg3SJ81w9rNs8TRUXDcVPMxzBVusHbJyTjzsLVWVNbkfS3GPT1St6ZaTt",
  "key5": "35ZzNJMwQa5EBbwgPczDsSTYhNo4mmZ1ibnDjVvYZAxKSbepCzjKudKHoMt9D773gN43yqd6BHkd2mgahjht48Jr",
  "key6": "rMxaaYWSykTbCoS12KoeRbbznUyyVJ1P34z2b8nh4vJwTgos1KSAzSD4TLNCWd4zTTNeM6wzTrswQh8uqcsaQiP",
  "key7": "4zVWEoZp9M9TbmciwgyFNLz6gUKVm47YixNZYqvmrqb8QmrXL4qRwHb2PSSyt1WcssuQkuiS6qqvu6cvA9BsGGQK",
  "key8": "43qxi5znqThv4K2oYQTv13xEyGcH75c3s3jCKEk6tCM1fnqyxbT5JK3VnUV9C7kEV3XErnC5BfS4VEJBsq9KrFMg",
  "key9": "3CdVZZNqHeWhG8Cqrg5WQeGNt5q1wmQ8VtpBTHxh4Tq7YGSysLbFnpZX8obT9SRajZYp62ohvtS1RXdCawrNXabT",
  "key10": "2zYkqPFMiorhyCMPciW82DWpatxZKrEeRQrN9hBxTFxXuPLJRvCDCGCpxeNmydtZZUYWGBQ2epc79jVVpnc2hFNb",
  "key11": "BJweQcpjmaH1WKQfDsDKFQWK6aDvfdrTvZjfwMngNb1mpcY746pDgYsrbYYycoRsx4tev4HqVuyHMbKLxb7NK3t",
  "key12": "5EehJoov4gPTTsb2jxVRjzY8ZUSh52W8PpodJrJ8si3S2XVMw9UY7px2pbtA4BUPBXH4CSEEXAo2mvRri9PSkvSw",
  "key13": "273FXDPhRH1bxVKSuSCDWqTdTnkAqjkMTz85LEGm9xpH4GvwPWHgTSZdARH5ykHujLyYmqFdiQRfovMsxobfA8YM",
  "key14": "4eBwrsWFpmuyY5BFuHUdT2Bkc12TB7qL6Thmjr1LabAw3qudVsr61YDP4dv6SYtKWCCEakVAbh112NDaMZeVQmx9",
  "key15": "3hiWuNpCJ5krYb6ox1TXcfmcYTBTdn1kRMGdBC7RAKTrxdYhwYVp4TynehVHFsiv4MjyQkwo9pUtb44FJFiD3GMA",
  "key16": "4Y9VR7sW7tBg6Hwu1vMi8SDJvx9gfz4ye43cm2s4qCTZ9j917XaaWu2FMY9jZUuM2bVg1VuxDvsTWBXWP9o4mrGi",
  "key17": "2dmEtjhfridpNSGfQaC3sYYYB8feV6d8VctaDkRi4iPUJnrZcf5PHSAtt3uuv88gdEQ1bG1y9mTPaStn28wuNRzj",
  "key18": "vkPM8LmMDpzr56Fs8FKvTgA552zKdKmJFKpvQJouVjisfMps8JrHGMkH2EwH2GVndLWVLk1HwN3Xts3mzSTk4dB",
  "key19": "Yo9xp2GNdovSYeAHZpeqB4HDRRACdMF8jCy4q7fNnX49Qek8AH9S28rEsuyUxboRvXvMmYNy3aSWoLs979rhEa6",
  "key20": "4TA528JHTgiq9usDyMcJios9Qq3pFbwmn3U5Yr1aNkZwdjuBZbUd5oKRGZYvPCF3ceGjVQ4P468mzXZuLJev7iz8",
  "key21": "BZkcDAN2QEwNJ87PJ8TmmaWRJx3Yh5cPwMkCWwbJCvKRBRTgmXpAYXMF6SPAWa3zByRVtS9AMnhG5gd43hai9cz",
  "key22": "5z4nJUxgUUVuV4H2jhxyaf3c8njAtCEEgS5qWAUSgoLcmbVPDDgXTeVbamdqeTRUCYTHH6EzgkJcRqSBoE3HiJ2A",
  "key23": "3wu1JAZsXEUf6w7gyG5f3GDm5egNrEEjvKDF1HQE61qdXVNngbo4JKL3vZ6nQsv4K8i5A1mig6CMFkin5FMhpQyg",
  "key24": "2t4xMBPmb1tHH57bx5shL8QRgT9hFkNtPLQuG5jVcUYcaoBw3pF2xMDy8JBkVxJcXk6PWsFoy3Z6S8da1RPRZN7H",
  "key25": "2UBUk1mmkVKrCgSgsw4WciFhgqXzAHEsm5W6Pd7AsPJExbi9JGPFFQxPLjZ4qhED2hEap97PMRerCA7oTh6kpqsW",
  "key26": "2E3U9fGmbyLRXDCeJRj1NoEk79Sgskyy1vUtfgtZ4qeeKqF4QV7qrohDAsZVUZMXrFXyUEFSXbZFBGik3AAJQXuQ",
  "key27": "5ZiebE7uW4W8wcHaxW59sXv9WnMpQy7nFhCSizkmmq8ZYuugS6pufDdR1rtzockJE2Sb5Vu8qBnXALHhjt4z2b7m",
  "key28": "5XCt7dV7GmB4kotdNipoKGEUNypx8MzdkzYxjNLC8kJ8wDD7uEWi51RgH2vSx82sRAMB6WGBWBpdTvyxLGcKvTzc",
  "key29": "o7CAnYpQLDAbfBjoQVkFDxeXxic4ZnbzsZTqQ862KiKGkLkLZ2BUNXtiTHEvdTYU5H4iEhW2orZAk8TEdgk7F9U",
  "key30": "3urapoRrYtggAbA8aSTMJ5nSnT7E9sYhTcddEQmDBekSAq1ZT4GczgxRFHYLV7VXyt5NPbmBULBnWSfyxthyCp5H",
  "key31": "4M2bD1crY2vYsVXgfUxRJXbxKSUgB6iiZpEMfeqk9PF5bhx8ofLcbrh7SjofCc4K4kQ36ENYBq6FQewsM7YB5z9H",
  "key32": "FXRLZDCw88shvFTJYWKV4n94m5Nf1ERT4dxckDMVwA4YnidMJMctDMoZv7Kdp983wxeC94BngM8HuoJ92n8NzhZ",
  "key33": "5XXWvNrTZ9FvctLxuTnKQvEdKokbfa9yxPewioX2XFHue1SZLAnMRpciicQ85zbrWYR2jBgNh5TBJG6z3JNbnETf",
  "key34": "awv2rQCPsdG2S72iWNHfxhmkXonJPT1zs3Wx2cfFPpy8rB6XXBS6wPaFLSYkq48MPmDZeky5FFcXJSmhExsRcF8",
  "key35": "2S6NSWwAZReimEWYfE13b4W2JnaKXn6uHYSsMcPqAFxUZmi6eWZx2c6KqDC3dxMnGZ6T33H3xxA1qxS76646EYh1",
  "key36": "23htSYRSipKuG3bDDb8AAHuX7sQ1QNwuFFGMX9MYhUJLVSB17DxbMq83WHe9s7kWMSWjqFyyrhnFWUv9XSmqnpRd",
  "key37": "2XDWQewAD6XD2Wpp1cYyG3t4UZNKnXqgoK4FhzKah3yxySke6FduEuDEk5ffuiFvqQMfmJEzovPYyxZ5QCCEAxcf",
  "key38": "5Ah99L7z8QABxKwiqTCgyNrm4iSLMMX6VKUyF3bG8ZHbddu4zxoPtzzaV8T74RJxe89tcuLX5pKUcnXYvbLj1Zqr",
  "key39": "5kxcMrZRMuyktKiu5hU9GTJAMr1nhz2TLrnDYZcxWJLS8WPVGVoyrrjALsxFn2KQEEoN6odaaYWRmPqej5eJTXBm",
  "key40": "Hesow9KAykMjv6oxez7iAbdWAa8KaP1vLoqQA3KSZVvFAif1jrX4VJks4iYpbYL3HyfZSNf7DyYyfYaDBgBTVHr",
  "key41": "4Mz25K7nnWTQZC8QoE5pHNTWyrHSFbsYsJffTHuq9b9wkUPQtLsQWqsKiTHuMqLwY1qHS3c2hWU5xYoz8pbP6fNy",
  "key42": "3dR1Ci41BUHZ9XCQ1Q63rtkXay86oLZGQiyTeL1q6nfwVDFWMyP6CnUcLJGa38RzTnjMkMbSrXAnN84YFpqy8fip",
  "key43": "4Q2dBXs1swHz3WncpWjBkKkaKzK2TDKPB5f65M7dcMoFWQKWZVTybi95rJRbm13DEVLRbYi1Z6m9wrWAbQhwMiJq",
  "key44": "4tbazx6BRMTpHoSjv5vYsPjTU8b3GMAPsHXCi4iQNivadLJXo183pLaK36YTekyghJeyEJmL5zixrQw9k2HPVCeo",
  "key45": "2gF8kxD75c2pscCVjaoaaGXvVphg6LPfm7ir5cUftxni6BTkKSqcCLtjosYEBuazwZ9aw5iE6XsVRuHESGxA1Qqz",
  "key46": "2ymZpC2de1ixgMb9LRYVyn78xLPDPhs7jRA36iepFj69kdf6p8yiTBGrJ6FguXAsHD5LKC3UPiUCqU1aF1CxmDZX",
  "key47": "46VSkJagN92YRcYCoVdrUYZnBWTwqqYUC7bAditqpUv3UbP2yRTNaCJW6WPMFQTdtLy8wHAuXAEnY4TAwQ4s1hsm",
  "key48": "32nDUc9FzKpPjpdaXqKNQqyuwBiCGWbM7TRbeVaTgrByiZAXVB2EV4LAzc8L16ZuRX1GztLG5cp7UgQ7X6FgH744"
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
