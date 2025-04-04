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
    "2g4f38d3QEr6GGY36rQ8DmwjYJy2i1ih2ajNFMjteYKBX4HVHStFsLstekwWySjz3ofiF3ubsB699dykAQHVsYvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KNkryP2EdCMiNPJA4yULL6Rq5duG8f6HXpsbJwD2mFLcreXYv3ZyySCCGjYqTweUEykKubD3qWRaa19ddtWadwc",
  "key1": "rdg8Ybdyp4Mcr9Rze12YgS64eSCBXuWEtmETDPckXWCgBTnbh19VBXsxRpwvpmQeCb7RR2ZMdK4qoDFaadsqAiU",
  "key2": "2rRqJ2VBeKzxP67jSgHNvethmyuyu5cDpHVVqGCBw59JtgM4HZW2iXcDhRpZTCNQZUDmXq7hVnhSuU9He7hBc5sv",
  "key3": "3fpXz9N25PV4UrWAZ3Bwg4T94Uq3y21XFhhpK5QLD319uaqgccPvRZZqf89Go1MYdnUuZi3ziuvHCYKQTR77cqng",
  "key4": "5CeDWB5FFZ5trFMvLvQipED3CSTo97fp9zNmP7EkQm23uzKmADNeNayaSbjU3ExDFL8mU5SpLKNuYrJHoUrpyySS",
  "key5": "23mSAjKSxrhxT5jWGTq1qfGnPRYb2FuCwbmhm6rpg1qxGm9nmyhxCM5NqAugeCxvbZ1nw1h3VAJnjR646sqCbtev",
  "key6": "GMMakJHopRjkQycL8peNYHri6YqThZkaDwsxNZ1nA5ZutedJ3SuvFasgtEGdf4FFW1PdugXkVxrjgn2SbvkuX8b",
  "key7": "2fVjaLWHipvTjNPkvRjYhuiPLsJpTmn4oXS7KJiH56tD2AS89RY73rYFnZpz7fagfVYemeDoSqN1ZKA7dJT2umNn",
  "key8": "3jr176Q1zVPk87TYAVYEPVRoxCcBBDTqkzbLx9BwERwYWMLXg8bbWrsb32NAQawLkfT4FeBHMFQzSZ7iKYRNccUk",
  "key9": "E7M9knPEuKY3uvkCsQ8uAspXeVa7xTfjNLWqxaYwy1YhenNPh6pb2NRnMEBGYaTV2vMGYCXhSRKEHpf7Zj7VB8U",
  "key10": "4oXTDeTWBPkqYA1pCHswvT4uYwQrpyGYs688vBZTfRaTBkVT88Kt6ct3zHjte5Abep43djDMLkEupvkesd7Bpg4r",
  "key11": "4e8YCS3whrU5RRavMeoaMMuuyDuSSEFJzEPBToZBQgkMhzmpPtwoXJWeJ52nY9qZXswv3oEm2K9pUftLc9Eiam3u",
  "key12": "2x2Fe6nfoAu7o7YFVk397J34Gehi6a8fA45j3shZLWCggfhAT3rWapXh1nUVufHwcuK8gNnpwavVGmfHP9BX5ptA",
  "key13": "SUFydvQsdsXtibjyvKURk4qjyAwAezkPN9HRvPguaxhMPa6L94yNkX5jSPZFwFRyrSav5fRLTTXqhNXTyh4as4m",
  "key14": "5EPrYUudkFtAWSz5rFusDNGfRDivcT4yN121xKx9nZRm2f3UJBGboChfbMYRDwzjYxUKBmEKFwu3VS29HmpDfuDT",
  "key15": "2JwunZSYuCTNFNxoCk3ftSeemfNkhQr7kmMcE1zdVxgmAHWszKeqGYU8WjmiYND1NHsg4BU93hFFkfjN5BicafiM",
  "key16": "5SaQfsX7snuXeq73V9pG7FbFRufQxRnSD3oKaf6TvURVnCNUsEjVZQ3BhCEC2y4VhvjTjoctM8GLfy7riRAcugjs",
  "key17": "3k7yx4Anyb54Ds4DjY2vmz8u5UXySg92KMzSicjwva5EXk9X5svzav5LCyioZmb4aCLmZB7j47WpH5X2i5xBjo5g",
  "key18": "32hcGDLwPKejCGbboHC2Me5Mtvx9H57VutxsgMRsjjv3Zbayrcaf8VMQUpKd4BajRLAjmLTASkXyRW5yjh1r7tjm",
  "key19": "2moZBdw9VSJUdeEyKrLsanrpR4v5azCGcqugqhYPwUpZt3qFEiPGggFHvJSo8FUxx8ituThKChb8r1RMGo32Z8Ew",
  "key20": "5u6sTAWtqhhWhtAtDzYiH6BtcSXsAYYiDjThfrzqqXkquL9j53PRxUYTrFConS8x163iVpmXFaPMeWFqrCEswrwn",
  "key21": "5fBDHfWDK7ftnRay5MDj3xGTdhA8uAV31SLnKH2WBHXaJjtE3NhPCrXNHjsteiF5qHNZgYYC8dEJpcFAy1zhh9EF",
  "key22": "5bnCdv1Wa6XLcftBDiWJAM6t7mPw4XyQ2NueRYQAFDEMTHU3gaSHoDoZHWjyc7o7E3gdAtix8SFyEzEoNx9eqM69",
  "key23": "3vgeb3HXf2UbA2A29NA5SMNkAbJ46nyUzNDGNZHUmskshLCEr7Y1W2ERH75UA7baoshcEuvoVvsvPFbY1sAQmd2f",
  "key24": "52UQAM2A8TFpDBfjE8vYxR7733BSxrd7ZujjYSzGoN57DvzddnNSG7hYrmVdkoBDaJ7RwNEY2kkcYj1owvB2FYKW",
  "key25": "9htF9NBwYVfD39D1Nm2dYB3Semid82BDheBP2Bja2hwZvxCtvS48cc2pniET5NYVPKfnvmGrCp4n73QDGHyqkfN",
  "key26": "5mtRMef8XDyyAcysbyGhvFibvvj7HL1WG44bHw6Cas1FKmBgMNqXAgnaXZJ6ctz67YgszMyZJY6b6vEpwgH69JdK",
  "key27": "2iXpjEwFqsCjBgX2rpgLMyN4AucK5Eiei26gZTGszjNp14Cq8EoWm9TzbFKhBik6ZDfzN7mwhxK3SYMFom9zbg6f",
  "key28": "5diQM1sQrXrhFFButBeBp2ZYateiFftdU2eSNbAE2nV9LWT5JBhnAfTm4Zax5vAPqfii2k4X2u3YxeyLe2tTsuMw",
  "key29": "61YddUd2wboTGTSmwuD5XTVGzsU2vZpcdKKAo7yc2b1C4ML7YAVKbFyPYc3tJ6iLiq8baYrozRm4tgDWZGcjLJsK",
  "key30": "3WNsj9eWZNLU8BN9F4krsMfWjnSou5nhwJXaWuk4QAZEfBHUbpLeFiGfET9M88k7JjXDro2KDyxtxE3DvJHvmnHZ",
  "key31": "5zctKUhf7R6Se981KrgScNzHdX8ZR2cXsPXcWRwz1HDWA4XrwntQUk6TFFxFFdQBsq6NDnvqV737WTCSSUcN2EJk",
  "key32": "3F11edxBxRPZyixm5xKrpkDgjoHC5cXrZeoSEJ5R4rA8pDrCEYgeGyQheSKJVnvHCmAL1chfxg12N9yZjy7rBav",
  "key33": "4hLGPASzv4z7YUBLCftiqgoy1u5Z7k9XV69nZDdbCrM8F7dXm1Su93oQtB5op4Gmn6ShBzN7xLD5Ub17NzLaV6QV"
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
