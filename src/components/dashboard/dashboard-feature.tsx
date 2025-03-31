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
    "4FitecAChna9bQemtBTV8sWeeHsEziHkXdEhuGeKscSikFxoz9LpaCc88ffDuWowBnZrbmXxyFDR71TwHVUU5H5d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pDodvxG5EZZSpskL1wh3qDDEWCHKCJUyotvEHdW8odqXznAJQ6N8TjUbrBpD7SLnrwnX4wXY5TNiqgx2TwPgdub",
  "key1": "3ECshcudFyAcWYZUXx6fhjJipHv7DM1Ac2htAvWxTX4DGXRoJWohrTDHLgydbdc61hjsKcYdq2nvoeJpTN8VM8Um",
  "key2": "2QzFYUp5DSSV2B2CZq4hhRwWWvCge34Nb12CqYf2fzjBcwGTCje7bmgbEBEDfoAa3qmpmF5izbTEbuGvW4dVE3nj",
  "key3": "5HXpmKq56MSCn33vYM1h7qtwjTUym2f2w4HWV9egzhHuXuhQ2FBYp77vrYnZGT76ZpSpXtFVE7wxQ3ucnXsba8t2",
  "key4": "4Chzu83MK4apsx2wtDu6cVyn1PHWeGvBPpPiC3KynyKULBpXBdR8vUsmyqQ4ULf7j37P5nKwSJsUrSGJF4iMq7kC",
  "key5": "27QvGstnCn7rkfnXvEtF4UdPUu3mJQDrN2osPq7CNj9BHxfZqhpo84VMqVChbu5AXftcsgo76JcU6cWoFF7RvNNe",
  "key6": "5FYJ2nKw9YTsLmQ1KKujbsWSLp5kauTLuPVyK8jdeWQp27ViT25r1r5jnNESZfhrYysa4RtvWJNiZ9fTsrUa1i1R",
  "key7": "3yYz1PRfUR7eoD2evk2LLHxE8Pjq544u4hUTAPFWHV7AuSNLvb9vdFDZJoktmqWs3PMw7JiBG4xRGU7KiXe5aMhu",
  "key8": "UeGzU5bFxSXvPwmb4HrbZfTx5tJi9gE3CMMDnu41irJHFU2SxFm81wXVeX9bt9Q5m6ThYVx364qZfxNX5HWJNbz",
  "key9": "2hcfnNLwezxmKREMDqYQd1vJ3EJF6yuDPEYeDJLtoso4exwu3UYnjHpz774M6DrP65RDz4Q3chvmeRMHjjNdkGnp",
  "key10": "48p5gjhUjWJcuF3F4Ud2gK2gG4LxJyGtnkc89y8VdnCKpmB9fGYeEgt4HyvmGi2TVm1FZByyN4q86Dem36T2rKir",
  "key11": "3fivEy3nTFwyaSgAWwKbpvARqFRiMc1o77auRCQpFLe2tmzzLTR7rxMkeGXiF8BdzFYKCDhNjj2w1dvEWNDXtjKX",
  "key12": "2AfW7Q1mhVdGGXdt4hpgs1eMwmoeASpL5KdYEQmFmxG2pbVL4pykMwbtePa24rx8DAPp5R4cYwu3f4McZU8XbPs8",
  "key13": "4LMYRbTYmzZgAQ5Det4m8LiHR2og96mpkKNP1Kw8esyLcMdMMY62gLVoNiEwFSD7R7BocUSzzPKibpQc1BtLyWPn",
  "key14": "4nxFe7nvmFESijm3YyEKpyvsRgPGvFRE26LCYBiz6HsFLPVXJUJpHkoReYhc1R7JkxVYD9PcK6wyENDAQSLdAuFb",
  "key15": "2VHWNhcTvBYgUp1SqRa7WSaPrqa3b4yTAUQcnqSvEyf7Qzhn5xkWP2um47KwqHUtzYWpWNQ8JETe2XJQgUzSHfxh",
  "key16": "2NRLb4KbZGRentVQ45EPvNWZH5vwLTvRQhdN86thgiHvhtMaFQEWbVmfcW1NdPfDQVwgoCb7aMQYADZXPoDiqeN",
  "key17": "3iFNdkz7piiF2BurvL7oDek6yJB4cjhG1d18L6uy6p5oXcx1DMd4Dfe7HeK1oLwa5ZvDJgCuCfEdz84RrmHEqbTL",
  "key18": "45diwJpEhjNMepzAHGcYM2rAff9CKb16ZFX5UeNDyn8gGCvysyyt3fe6VdE9zniMSq3An9GytMNSDF7RcVrf3upf",
  "key19": "4tE4h6KkgBTuzAgnx1XWjxwqq9faxNYHLPJGBRrgP1qmGzPpieUGPdBzfvrcksyN9szw9rY75KmX1c9zqZPMbieJ",
  "key20": "5rK1HTomwS7w6UgRvnT96dz97UU4NjfEejPdjSn91g766RGGjW35qysk2tCU3LoP95BmCMtNj1Ex9fNu7vCprzCu",
  "key21": "4mdfPc9g5qN2PxABeCiUfKHtXrhLrk1BAA94aBaieQaQSmQxDeFZinCECcXS9SWcGAeUqhJDQ9spqAJK6AtX3bKr",
  "key22": "4rc4P13e6bxeJNgGBpFzpKusfCNFRwipMsW9YvTGi1t8U25VQnRPvYoaNwbn7REewBV9Bf8CLhUrXQkiXzpYnbZs",
  "key23": "2zvu29YrtY2cbWYrUnsWPdiCZmyZVRznVToMWrwUeijsu1SobkHuRmaG43LZPyZiwQjkuzgHSxzvTrEEC8uGLVNF",
  "key24": "4MxnfbbAhYL7TRDKJ2WHWtPSXXv8U9GR868NKZbFGayWnw5VuFidpyhb3FhES2WmvKD2iz4sL9cFHEM95fiwNdf",
  "key25": "5B2hkptXZ3r9zH6bvECbavmWXbwBLxTvuuF6k1e2RKApuAxvnDwSsaCaDjRV4N6nYseJM9UMWBhN23g9jQjhy9EY",
  "key26": "5G5eymgFfnV8xDJT2sSRaKKy8Qiy3n5PTZi4v89KRyd95P8eANXfMNVMLgFNDLCFm9mq3qZb3ArziSe64hEe4avu",
  "key27": "62DKE39z1obsfBFfG5HD4Q6E4Fo9c97FECuFYumwdeP9koGJpi84tTgk7oDoJr8PwyRbugaHD3nj8TQmvZN8XAeT",
  "key28": "2uARmbahE2myieh9YfpMmm4hRfQmmy9Rgcdf11jaCsaoYsP3aPfWVtdcTthBV4xZ2MEgXzdpm3T3fvPNS3BE5bdS",
  "key29": "4fPfuDMfQcmViYgmAvXrFUW3ss6S3RsjFLtS68PGiWCFBnne9kb6H4uZS4bUegPxZPSZGWnTbrsDk9c8gh2grDUg",
  "key30": "2txHu9rGeh9DLAkJELbR2D3wAtpmtSMivAFTV2oYUwZ3Rvtrwg2D3oRZDiH2wnNMfvrXXfFZW91u2w33kZzqXhVd",
  "key31": "5fLiyUAW7fTg2QaTdhw55YyJfvTGwFcUUjJQMUPuKE7zTw2owM4wnfA6qNwNk8vskSpT2CztqX3zvkiqty6YgXfi",
  "key32": "nABmE76Z78YXT5khNBMVkDyRsJFEE2VUHmDco65aR3yAuadZsZvvMo9wp1iMj9eKBop7vPW3i9BqdZ16GjJ3WNQ",
  "key33": "5XVSabqW9aVW2LTun2FnrKLwgUEpEN4zPzP48HVp7J9fdRmnz6vJzi7GKPtQo66gYk742w5vwySYZE4B1rL7uAnR",
  "key34": "4EE5ojTFZHMdb3N5GVfSyrWmWAdfznEm8zrmHy4oPf2VFUsYuA6ZP2uqvaaB5UMpCgiCd2obiFXyPhoPR8C4tqYE",
  "key35": "oxHciamNuwQeAa4ijtYyGURFYkFBFAHtnzLMMfdAeyU36wyE3F4zNiDgRraxJcN9rbHnwqr66XrHStY1RQJuUZi",
  "key36": "3LFxGNWmgtHQoY1sCFuKjaVYoUTWDrDmCNTRXbMctz16pkiNbfc2dDP7kgdsba6EfRsUWhtqX37w5VdkntfA2UUM",
  "key37": "5NKvmueYewx7ZhBWaf8wqaGcUDbbKsp1pTf14Di1i9pxSxVMuNQzviC93yPvppFwBFMSQYXQe4mVR9W7mFGr6qjd"
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
