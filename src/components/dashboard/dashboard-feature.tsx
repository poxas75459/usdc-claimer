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
    "4AG2Y8CUMHYUCHBeUVd2gf4wNFqJEeechFh9AGVa4k8itMCEJfCuPco8Xn3jeSt1zrfNhnSQcoRhPwHi1KSMqoD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhTPqE6fJGTeFNzvudJNfhpDcc4CKaG7dHAbxRRgbHbbcTzXA3CvcxGeJxzbaceFgNSuUps1FcobWNehMJvTGbv",
  "key1": "63eqyZeqAhaLS2fFTEiFcpf6bFhwAFUCQp27jNqoE2AcXtzUwM6PTedEwARLhiz6R2qMu5jqbQopvV5NjgtBgXey",
  "key2": "5afhLpKbGE5HMJvfShBWc1RWPk5Fa8y1twHNvmrL99oC1N2kCMjhNLN3vGkgAaNWFzmAazELkkNakUrQvFc9tpp3",
  "key3": "5Y3A5vbP6KmPMaYbFNJ4QFK7EW6m5NCFmWeQf9FP9zwL4Csy5g5dnNrJwssHZA7smZTokUq1K1s6ryyw7mtiRNXx",
  "key4": "4G7s2CWoZkqqSLw55AFHbeUA44SuSR9M4tE9eQubjEkrLaaEfLN4Atsu6aJ8oDKrHnUv4DexnRK7eBQoU5YX71NB",
  "key5": "3GVszvm1qvmxYHygU8juNLSZW1mr8sd3UWvstECJx34r29WKa8F1Quf2QQj7Y5ySsH7Sf5PfNrDTgjyJCv3xSxAU",
  "key6": "D2RY2VtgBBTvXQmhRV4tNqdJAqyRo7AqVy2sQ3771haW47iUog7oCoJbhBQUE2EAZx9Y6WgCBZB5QnyBamkmFrU",
  "key7": "2M4NjoePrTyntfwXahkoMZAmpbvenngamcP14wLWf7PjiZepmMBhyDsGweo39fGvUvzFvjoFNyyjQCCvoVxSSFGQ",
  "key8": "5MzA5Sb8YtMxP1wDBR1HVpvZL7KfFPg9QKEoEKj5mKf2Q7hvQXzNAPFrset8VkKSEmBobshkjVgsGNtKDMDuhSNT",
  "key9": "51Ecs9Erp2kaXLG8ijJG6avQ8kqFGNNaps9wJZyLHpenjBM3C4JUi9A9chaGPGPy5MDQ6Er7KPybFVGLnLSqcGrL",
  "key10": "2eNxPKh4GZjkUyYGiUCb4Y5rfDFZtiZJJaH92zq4ATpZ1GirQDL9cp6oa2965YRxdnXH6D5mQkNVv9L29nKBTvS5",
  "key11": "4bZDz4QuTxoSYWgDLLjBYqoQwBhB2MwBDS8mDDmbS8fmvqaLdqfnDamsBNayepFXy4z1Hi5MLgGgymznpZYtZWqD",
  "key12": "67WMgTJeQ7kGuwbpkV2bdcaaMq8se3fi1iK9oByZjQkmkyNVuCkQWsh4i5DSXMyq9DPw53Lm3PhFkgSnF1BEAjiL",
  "key13": "4FxMbSGi6cAr5Ju7kUXrVByi8BvH6pgF95tK73kofB7a7pjDNUthmrVqV55NQtK4QHknTMTSjjBJWAsYohNKi7Fg",
  "key14": "2vJbDiDxc7WyNmEDxZ5wiRiJh6hyYaTn2QAtQM8VuASW1NJk8wmTNZMQW4eouVZxZEnCxkhy6CupT2Un6EGRS78r",
  "key15": "5x6GTUAuUa6u8B5XzpxnD78WuPpjJzgFa5tf7UAn6z1ektPUZtrzA3hyJp2wYD9nXSTFhz51ax4HXTJ71Hf1tHTR",
  "key16": "217YdeHyqBVufvD3JF6DezXVE4ySzZPLnmZPAmxMtRWSnDYHke6mp8ef8y5cRgBV51Z1FsiM2bVkmcFhdcBRas1k",
  "key17": "46wj6SbMkhYZH8J6CHHg19Q2fcUpvP1uBuV6mLwh4wScNQWcwDHWcS3MQ7ZyDkRgNTuu4zVguL8AACi6UmxgnVVd",
  "key18": "4CsdxiZrb3PKz6BDfe8TiRHWw2LvBejvez9j9LEPKCYMg1LXG8MQnQbfA7xKut4bJ5i342oYQU9K6uwmuUK74oyB",
  "key19": "63Bv2frMAtfVc94H63ViuUwYCriV4x27c7XznuBte4cpDxBuToDb3qaVkuaFoGq9kepcMCjiqGgdnz9DgTWcFqCV",
  "key20": "63KRGf3mxkC666WdiJhdAmtL532a8vKZcMnmrDYGffw8A5k4UwsA2P6TEig1Kz3rummeyYJZHCgf5xQbi9X84N4Z",
  "key21": "uLF7UbqJ6gxh6Piw19E5hVZccmZhME8aoC38tXiCuiECSdXHwm6PniY555KfCUnFVtuUgpGXGM6aVsMyveJvxoV",
  "key22": "2h4SQyAUsSLDQDNTTcom39CtwbrFK2afvRsarjH2enGgNkpruHxTQ5BDDyUQW2aiCbziWWpNz8xVYK6KKgmx92NP",
  "key23": "5eEFL9LEvwTgtu2xBMHYMH1uCvB7fSwVAsLZLz1XZe62dG5bZh1gr21tQ4mB2ekZMGm7u7Qk4Qwqr72sdfNHJCuG",
  "key24": "5Jg3EBfwQP13rJhfCzLhkHdw6JP3tsgx6DwNCtaqxKvHJdYZtKZ3soAHSu8YwKTo4yzLaCJvKMUsYtH2eW26nRvu",
  "key25": "3PHSMSzFn4QKvYRTaXmefEXasurqhLVmcZVNKw8eh9yqNFvBwpvmRoc2sugDt3mAyBNePkbiDZCqwt9u4ziPib48",
  "key26": "5uRYbFXY4vwtVXmcYnFcp2Ky9NsNvTTcrgAANGWhPAzpknDDyx4p1G2R9qcQmZybqZwHUkwcdwBewRwtHiTADesc",
  "key27": "44Q5MsGcPj8G6BE4i7FizoL5vX4GaJ1QqKxNJEuvk9oM4UXU3J5rcPU5kMecV125Sv94QHUXJk3r3aXMoihfTcoo",
  "key28": "4GzuX3eD2Qd5kTwp2T3PPMa8C8C3gLJYdQ7XE4QvqiShABeFEpUaNBef1F2Nt75rkqrVxzPTFxXSRxayWLf6sPXi",
  "key29": "2xAk6RXA6ocy58ZeXeUju6K4EKsntAT1uV9mSrEHVN72wPjTJVHj7WNFJLemdGAaCetBn7GSCztKhteUzfL6DU8B",
  "key30": "2CBSGYtPZGySxzsCZkBi7pFGCruy6j6Ca2XAnfXhiNFejY4Sm7tykXPsa34gEnuJDAkkrbtw41MVgvHQxcjXYDW",
  "key31": "2rXNw2Sv8nxuJ9QfbmqBnzX1fMvMnKgeTsNK69Z79oy9Bi5GWHR23DzNey7ksGGUn7Ku2opxTX2pMLtXFBZcGayG",
  "key32": "EERENpu7oZCH38W9eCYWNMz4hdESBnQeeYVTWQcp6fufT9cqhxtMGU9abyYkJa4E5KtovfPa6t65534uCb68fiS",
  "key33": "XGBTrK1UjZ1dycKj4kBwFBoUFkzaXZQHhJmFRvT2kGjnYhWWQwvc9cxbhDZ2GtWJBr2fhnXidQodtUgNvWf6vCa",
  "key34": "42SvW1PPG5TynLzBpAshMHCKYZ3V1sShFfQj1MqpUmMFpsgBJdBqiUhFfFS6AmwCnoN1SLuEUtMdiZtm9WxKK3ea",
  "key35": "29CeVjUyn8L4x4PxPxzLwQkEkt6krpcE7YJEJ2LgRdYda5nmn2eoB9WyV89gt3b6VoYWceozu8UHiBj1qo475me2",
  "key36": "2aJ9aLUksp4AiBKVcNEjqUvNwrJszYzUuzTg9TSQv57JYLAEA22RWedUrUgwnihtL2QcfEnGioFL2SWsJkaWATcn",
  "key37": "2gYzpkxRxqrkcvBTiAk8gcAoAXSD6E22BDfesuNjerCBu5FWm2yxDyCEPFmRvuPJPs8rza6BtcLRciWGtQKWuyUE",
  "key38": "3ieguxPZwpMUhVyhQuqz9dG6RZBGmoSTHqdcyAosNc9aMD7EdMH998ZLUVYQb41AzpcW4x1AY8z7S3FnXun76zNB",
  "key39": "28rVqt5B9e6PFmdfCtyybZk9GaLemApf2W9G13PqKmRLLTumhLgrKG3n9yAMPuguBLEHbkPiW4MQZqJbikXn7tAx",
  "key40": "4YVE3kTC5FYgzB886YZePpzeJpLsWBYktJ78MnyR6o3bYPy45WEZgM3u9S5pQQUHusbb7ahiya3ubKSdkR6yvi21",
  "key41": "2qqJ6hww3g1YENE9hrPGKaYvs5mB2iFLZ4haXNworJ64wAn1MUzDDiLqZDPKmjbDLH7Jj9nSxr2TqqoigXPYkeVu",
  "key42": "4R9BHsULMXT6z5P4J5d7eyyxgGkeUbZed5hRFwEwWCzXh5BGCk6ZtirU4km9YWzp67BKchVxwwTdr27oxP5ruboZ",
  "key43": "ByuMStk6sBsRA8JCz7ybrNHPBcdjwPUG4XXaTkEwCK62Nn6Hdf6svPAz3g2ainyjGKghC78zABkHe565mFgYyZi",
  "key44": "4ooQNrbNhqpPJCpF2NQvJZpGfMuViaK6gxNwH3LWH6hAykygL6UnZyhBdLf6ipSdy5zcbEig5x5ZhsjNHsFXKDme",
  "key45": "2nKGvttB6XGkEyhF7VkAvAnj1utbCCqt6tyR4EBux3gC5URFBnG9V1PCxnVUUvUZfPbi4wK7u4666ood5GzrR7Lz",
  "key46": "64Xm3PQggC3CnXLq3HvBbVHTGUnSu6ufrqao4JCJeMZDbFH9NzR25vb8vUeybGUEr5dFqRFYFmoSh1FsLASSjqbw",
  "key47": "5bpEUi87YM6sXL1Q2gBcP2rSDXmceAPeoWC32o1UkXycnDPmJZ2a1i5tsnqWb8uZWBoCRehVTXt6qZ7QZk2S7EPc",
  "key48": "2MwXTbwwvRfjGdZUHehkZAs4VBzroCgEPQrrzjsSrM98TSsBhWAyVp2stH5zPwX4X1Ymoy7px6N6hQsKVmMv3Gmw"
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
