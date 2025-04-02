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
    "4rytCvkBFkGYTKzPUdvaNpiWmc8GPmEUSwDZaNMi2nRP4iCnGTd35T7vquvR4jDj2ZLLYK1bnc4Q6GZJyUeWd82u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C2CUNoahvbprNGrfEarNsVqzwkhiLrYs6ssAU7PpbprJRGgBYwaA8ME18CNp4ZHtrkVJg7jScHv1VTRufaDQc6K",
  "key1": "9eUZjefaYf61wNaAVk785hUmL1Ewych97SEtqAR83pVgG4rwFW4qeMxLZmiBL3bkcvyTqPoEBRYa9CH4yLnWwDD",
  "key2": "3YtVReYLVsn5aH8AVjfpEqpLSeUDYxXKwya61HyfDpLhPEuoG4Gkwg4ZnS4KUAYMqt9XkpnkiUo2tYkVFxuyw6JD",
  "key3": "2ghL5cBJ8sfch2cNwJjuaeNUZX3awN4DVWY2xKwssHrg33foNHpTHp4DZqjYWSUapDKeEdecuUh7tuP9WvWiSxPU",
  "key4": "2jHuBD792rUsLEvWjcvcyuYit1x42bDpUZgiHWmLnGzXGbd31X35TsCp5qmA55AGkYdWaQQjH7n2qjdSn7Ga8eTx",
  "key5": "61MRp7g95a1Q9JzWnjcbrWeRJVsScYoviCPo7XXGQFw3J54pAHjsyh9qZJfYdGby1thSuAE2qxTsSjNH7jqxK184",
  "key6": "pHiSyJSNzuQd4RhcPwnU9rpF5xZyTqvsNJiv2zzc8zddXZYo4yCR79dybVhB3djFKf9PztyhpHXNoouCkLPMKtn",
  "key7": "42vWKE94WejVKvfr62ec2hneXHnarkNWmxgyAVfXNf8JzNa79tew2dDCAf2JSG7hAns2wLUYEwD4Hs2u3vqK5Bf7",
  "key8": "Tc6RRp3AihZqtkfgZAi1Ri3HDfDadnbuzGLNJZmMRuqE7A7ETfPqjZrNGRNK9xVNjj4Bd3v4v8EKHmark2cXdNK",
  "key9": "ASAbYUjh3m9Q6QxhHHXCeD328wodUc4SYJxxpNueTyrk3aTQ2Qd1eHLySWcY2z7n673MCFUQ9TtBhteXF1d98Cc",
  "key10": "2nGKuFQayVwLjqTCyAF19FGoqVy8ERz6242sDceoP62QVfkVvQcTPxZnSMqzks82odQ49kYDproMt8sXrECWVf2M",
  "key11": "4YriC9ZwwTSFrbrSLQp9zPNwoXS5avveGW8teW4rnNgUnBsejQiAVEf9iewE44LpY422BmHdY4tCp9vgwokzifa9",
  "key12": "45K3RFtcEkoqgcVhBMaawEd4TMQoj8Z5sAvv9RUXpTNj64MnTpmktYFB4M4kFBDPc7pgZfcFfGZ9a9U5dUYxnUKw",
  "key13": "2YkRKZTcg153eihKRs32kWQgRWLmXDk81JLLHMtiMRfHmAtYopSTWgY6QwdPVFCPvrAMWC2ycTp9ZwsZufy26GPy",
  "key14": "3r4ZPVeyhgx5Dhp1LpMY62UgE88XvyGENYC9bQTxJjDCfFrPbLmcmiHYoHA5dYfsM2HTkgfCVSstWTjDK8MRWk7H",
  "key15": "5CZzZQWsxFVyN8e8SLShFA1VpnMpSBNtZ4xvnkh3u4DcHhh9ubCsXuDkZrNcabVemqzzLw1G3wRR9wgzLcH8Xmab",
  "key16": "5jX6MDsjm2A7nae4bG2QQUVBYQLU7rFqpJeiz54guPwZYXM7EbQ8JtBCn5dBrGrgBLkkHN4Dsu648UPdJW26bZ4v",
  "key17": "QqePEVkuV2HywQp1C9xgz6si3wcr8W8fiAqYcpt2DtwkpcVT3Pqo1Y28rhAPVBVLLUrd4UDK2uudaUnU7F9Mnxh",
  "key18": "5rA6MnK7v89kAQoiFKarbfbPZu3SrGVSE1Q9o74GX6Q4YCvMF5QGXsp1D1tYJ9p3CjHxK3teFZNcKRtJuxNyFZYE",
  "key19": "H8eZ1abX8SywyuJ3MscQNmFxAcg1RzFkqBZfDamvkBXaubnP3zsngSs1iPcxL3J4dRMgVLn87WFTxhdvtdFz2hu",
  "key20": "3GFPdLhuRqda6bM2sxyGAu4QNjKtGnZmSHZEN9r5BFRGyr3snCxfhHN9TfrSF6e7aRp6UzSTfqcdQgcUsSHxNve2",
  "key21": "2jaCXrKYmAY2i5RwNVSVQ7CaEoKKMKLRfp6xAWXR2nsb44u9DiGveecmAYseKKQ3DRsKfh7ySEwogLfdYUhZaisc",
  "key22": "4yjr66Cz4q8vmJ4N5xfvckwHUk2Hq9fyxz5hvMLTB7zMDurDziqYXiAA76t9vK8vLGptCz8QfRcm8EtY9tDLBtEF",
  "key23": "2GiUdokB35uQ8vs1eSRUuDEV5qqzFavyQLypiNZUf1Dswf42VoFkd9FCmDgC17nhEVDB4orLT2KWDvmESfd5Y8YY",
  "key24": "2kd42UG7ctVmWpSdhb9GbuQ3vWA4fuEtvffKeczLbm3Z6AC4tJW6KpJrBBMBQVUx1TXVXtdLBWyRXEdcoUt6uBCM",
  "key25": "5dkiA8ZUEjnWQELHvNDUD531dKoD7yMFRKxqbj4hS8R8eDSd7MY41vb5fEtvFYhJdo7aXfohaTXRUgxPivKZ3fGq",
  "key26": "3Nk53cwbhL2bqe736gPEZhiGZHg1smHwM21pvtDBg5DLSnfLw4rYiixSAzGkaod73svpNw2LHBF4rk84wAWRwrbx",
  "key27": "3H7ixJbraJxj4fegL3CvvDRAvpDiHo3U2T6ua9j7uPPrWiCFvRkUUNTEzuzsFfj949ze4z47WGBMUmE28pYpCf5b",
  "key28": "2PvGaFHHYJpFvhFpcizoBdzyf4CRFiWPXdMLghWHPFa5X5mhEUKXjkPQsqa6gCKYa2Dibmm3RFCXMKw696ME4DXW",
  "key29": "4xorEGoiH6cLxN9ZBFZEdh7Y3N827yJek5LcXkWoWD4A3ATDiyT4v5kp4fATdh5vsLnTyBcGU2M6x7qFPZv1G5GD",
  "key30": "2hytS7DYV9WNjm3krMX5z83WwYYjDV1WceNPTy2vv1rwYrcViF9EGch6TMX3CLFX5PToDS5iD2an9uCz7TMMw6gU",
  "key31": "67MBU9H6c4BXWHoGdX7mg8G3iFPBVMmmZd8SZscSC7bbBk2QArLUqn4ha6CPAozo8HJJ9g1DtgRMRQxCZnd5dW8J",
  "key32": "SwvWTUQMCT7vUgkJicsUeQqAYvhBkEP4xi4jBvR4qrhWmNAWmUUV3UNu8f8Ge43cjAzFAdrSNsFNx3aruw13JUm"
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
