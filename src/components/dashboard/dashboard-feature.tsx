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
    "55nxQNgwZh5atnujAwLkaS836vC1VdyfGE6g4Ct4jhn1bfdyzLWomSVC4f7s7kitd7weewbxEK5dTfKFhHeNAm4x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1krBKhJh8v7Uy8AiatWS1zJKWHqVHFXGF9ua4H7FGNs4yVFNJ4FXBjLgBHVDnQBUJWsMW1DqeuYaPfrFTV5qKZo",
  "key1": "2cP68Wq9oDdrzwf228Jcr8wffvrygMMVnRr7JMZmNiCXF1CfCfXnd7qgXrscAtxA61mudEeJk7NqyD2GL55AsFGW",
  "key2": "HSNGZeYv9BFZzeex4tdaEgy4qiTRmvTEqVPfF7ispoMXZdabybq8RqinX3uzrrveuLwRwASV7nK1SmptDf7U8HP",
  "key3": "2pECUKT3WWhA3iNXVG8KdAmPeotXypmokpwSuv3opftJdnQcSdxvjpH5fnwLS9rDQjG6Uv31YGM6EEsgkENorV7i",
  "key4": "5gb4vCXXnb7Ehs4tMHBE4mp9kFVKejf61DvEGDiGMeXZMHFjQSrz8bPdrLPR7BhZthXPbpDUv6CHyecWxkWGdHaR",
  "key5": "4HQXRjkyibWhyaKMzCJBHq2HdEffrFcHPuFXCtLxMMvL8scxMu2A1Dt33oHuYNBSiUJU5YjCHUPrfTaRyCBJBvNQ",
  "key6": "PZt7ikTHFJS2G4781CJa7pBpUz1TLqSrCaW8riTiFyK1DkCBJt9E4YnBJkWiShCURojG4YWqMZ1jCSdBkgLTgSB",
  "key7": "4z7Kki5vMmFLyukYaP2thGk9ZnjLHtC17CnV6zPRVVHy2qEpRRXbSWeBAaNyjixwNtn2LPn8uQJXzfpy5NfxgJAG",
  "key8": "asLRSMAmK2xLVonsAMRLxwuG5UyTcSTQnGjfggucYTmbrrYDrVY9tGpERB5gcNVCYZ3X4iDTT4zdwWRF92wJCVd",
  "key9": "5eTfuAGxwWGVvsy2nmgKnWvvXwPbrHLVWGwansbFC3wpxp4gVKT8qcSkVxfBidzHNtFL6Y1xR8k8k1xLywNdB4VY",
  "key10": "2ygfLYni6J2i7qYC8zhVaE5cE9h6mTs2coE5TJyhZVHJ8FEffREiLpgiRrNm2CnYn5YqrZYqY3oUSJwttXdRFqqG",
  "key11": "HE9yQvn7cEZ46QxRVV85vah7vKjnjrzhSvUqbriwgfVp6Kj6VZMk9S7atHxjABvEgaiU7Gy2yc3voPjnCYocuqv",
  "key12": "5ZLs3epLVRTVMaZ6daQaLApd792rHVBjZChpHBRaYAUbQ7Fu9WSZsdPKF5m66s9ddEPyt69zKcLk6a9MKBNPpc1S",
  "key13": "4eoz8ErBafrRbiLV8K4uDutf7KKUmcVw5XSRkiVCBxkfShNCQMGCKX9aBdqBAN53XGfdTCXd314if5zcxEBTNUXN",
  "key14": "5s4DWpqJWidzxX7wrG6J91X5JVyVWSr37tUipMiS62aZU9CudUja7baF29GjMfGa6UCehSakUEzy8FfE1bSFZknD",
  "key15": "2SE4XncYhRbdBQjCiqUDtfinqJLbHdYQePg33SynvBhuujCMynyizHR2PNSEad9ErHp46LKvmJ8p8TpNCLB3fggx",
  "key16": "4Bak6wMuBWZ5R2kNd1wM4AA4f4fCgrEozLCw1uh4Fjs9ZBrdWCT17mMwmu5zVffsezm2DUcUxsQbJRqzJ38qHzJV",
  "key17": "5zFMjmWKpi8G1H3bELYd5JwZwfZWH9SJMix2cW9XLykRXewWrRkRuYRtbM16MJFnNBX39HCtcXY7JXzarZTcnvPJ",
  "key18": "4Vip4uUuRhbDux6vHFBa4bhBJCMsufM9aRpkjSjPyQSf5vtq7Jm6BTwtaSncPokwkQ1u3e6tegmT69NKkqs1Fjeq",
  "key19": "4ecEde7nypKQScXNCwVAga3dRygyomHcD4ZskvnyYdDB7uQMYj4CUH2YbzqJ3AkyJctJ1VPhNwvHAJDhUBpSksaA",
  "key20": "4qLr2tVP9KPn2NwuFzmhYirErwC4vu8UfXqYFgB6Ld5MbyNdSVmWcmQvGxB7MTCw3v1rkrqGbjUjF4XGpxu42VGa",
  "key21": "61kpX3x4gtz2nrfLEgqzqMX5Rma3KP7XS2giw2vnMab78c16Q4afVP7LNPd1yLb5abmLwAPi1M9mH2wwfV2WVp9F",
  "key22": "4usAo72FMJ4F8NroJUWpsDVuoQL1NV5HGLPAhyzmU3mS8cLWTxSed4D1dAvFMdhFmacRPPsf9ZXDJGtNpJima5tf",
  "key23": "2ZvG4Pba2M8pN86aLhHChu5rXdv1XmVaB7dqtKsdqG2fPGfLVXCFiPpoKzyKRdhDPArp563jvmj1FkzvY2JC3KE",
  "key24": "GuWGraUHk14fmGhcbjPxbFVpnS4MnE2ZNqYwgLtiqGzLMjtN5bihYWbnJiQabo2LyTsDireztZSKm7M4wfS5wAY",
  "key25": "3fyqMhm6GRztaYHxazk1mvu5U6FCxpS8SSqaovhpMhfPbTFaSyrNvSDVxBxAqoU7vtwE8Kg8adg3cSFVJ1o3yk9b",
  "key26": "4QHwMkGWgzC8jXzMkGrbQVLMrt6buzFxPihUq3nAH25ERH4DdSFMGpRRWrU8g6MXoQtAMXcsLbjYLZNSm2N94Uas",
  "key27": "48Gj21KedcStDUvaF9RpbZ5wxaufikcZaoYkXLkoaRoQLUMMiE3W1QwoKkvLdXY4RR5PKGJNr5C5Tr4nGqtP2g7z",
  "key28": "66kjSqu6ZvcpeobREtcXSNNckFHgruk63MhjBDGTJY3MjBp5eimmNTmNDVZK3n2nGHb97iVZqDj2XAE6V4BBbmz6",
  "key29": "34NWQwvxTATJPjPjkzVdngkaWCSd39oT6muD7zhS1yzk2GovjLnoCD6Xk3Yp4QLfUEbdWofGmi3pMiS2pwX7bhv4",
  "key30": "53BEKtdXBA2i8cqWsC6PKaT4AcmJ3x1ShM9rJcSrzXmuwkx1JqXUTbWhLALghRSwrkNwoTiU7vfiiP6oCqP8kjsd"
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
