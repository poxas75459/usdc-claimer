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
    "5gs1Ex5AxtUDqfgzwqKQbrhctdebyriww143wDCbTLBsamUbn3LmSeBztLsdCKnooDVs9U3ecU8Pc5kVg9RbPobk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cm1TkQCJJzYHkF1GipVnChrfCez7pgYFanPvNfQAs2hHhzyTBnHozq4vVAwhkT7a7vUMaVC3ohJJQweaNNAtJCs",
  "key1": "QE93tAap2mE52C5penTTi7J5WCxLqhiiujtbyP6SwX2Ms934gbFDMbZrfqTp7hmvVaCKn7DGsuQ4pEckNpmhvWf",
  "key2": "2NHSQDivRrKBYNRkaKwKHHxDYsqRUgb55oDZdCmJXFNQGBo5K6H6KDrg84mW6BzTmoMCMPdYoP71U1dvZTLm6yWk",
  "key3": "4RvbFG4cnRfVaKeQq7tq4CVJSKfgFaDi1hTVNA9GfdReKfnMkwn7KGbkqsnq91z6p5GB96YyFCBAfr3GesyPMrVn",
  "key4": "58M3W2CiQNY4mkWYduzUZqckz3PxTRWH1da1uApomn9av18d1H6kLUp1kKpiYz3Xj2mNTmFKmTxtjoxK5QKcjZX8",
  "key5": "2zjSUHrGMVkGUxu4DtwVEa9JMiSzAAz1s4rFiS7SqmqM36ffHHqfMsZ9mUStdkSTNNHFwybELG3fQXH4Rr17X4rf",
  "key6": "bN98GgRwZiFeTzpbcgxNp6JgNpEGiwJKGgB4Rs8KLR9gEkieGJhe8ivrGa7Vcw1RmZ6R3ZbPNaRfiqej59m3jjv",
  "key7": "pMit6WWijm3DdsRcLef2iX9ZdKE52Q9CLCNgrcjqLsFbAVWquVCpgxQgkvR7qVi6vDhP4M13JX1RyeZH5EvwM36",
  "key8": "4HWVrDnfMD9GephbkU5nugLpyd65xLBWc55mZumpmJQtCkivkLMyp15kJTPjFzDPLvmZBdSUfFbwHpfYBoFL2Xfs",
  "key9": "5FwSuMEKKvpZSeDSLtaHcJqEuaF8mTwhtoDdrquHCoSVAUD3fSYmVDB3PZFntavJSENMoqx1rP3C8CxMGTs3GseP",
  "key10": "2X9GvcAdeXL6P4V8pvEzcvBtLu9rLEnDNgNMJmKE4Xn1zh3C3mkjGHoPDK1jVNL6ET8AH3LWg61rCCB5PoymjDCu",
  "key11": "5cyq4Guvx64xjJrzeMd8JTRKPN8GC1F7xnAKxShckF37sHXvmWNZhFjgmGG66J2tcDcFanCjvgyknfGDTQATZhm8",
  "key12": "4e3fCkVWof484faEQ2imA5XD7gdeb1hZgQps1v6Exh65R9JaWUr4NpnDtab7dfFE88mj8XNBVipvoehn1jPj1sry",
  "key13": "5sh5e94Feo2C8Gc9eLEvspNY6ouaKZmbjezepQp2UGWThPoQyS6JnEv7pzYzcxjFauMK63TRY71SawVKVFtkF4xP",
  "key14": "27iGU2VN51untvkDeSEUC58duPRwzqvyw5K4t3xv2L9MLszp4oUNJZ3Knpe5Yjy5Tjd4MnweLWHWKYtVxNStiXDg",
  "key15": "5Db67jXa4R2w7f86PD9LbhKyVSS8WfqYyy9fp8bpknF4UxU4KjuobA19Xw5X4DxREX77F6CdWaJTsRT1tKdgbAbN",
  "key16": "24u53H3kThS1Mvco4hvcePvem8Sbxi9NGpj5jbjThUxBcCXTpavb6TBEQ5R3ErzTrhyw4QSpEhEwmHLbbT9LE7ka",
  "key17": "PbYNxZ9gVckjzS6quoroVDPkndEiLAgjBe2rxC6Vd1qLzL3nMxYaqNs8dRrK2kZU8yeLy2uqPpNwRJe2WuV8JkB",
  "key18": "4MT6gQ4TeG3oWavCWK5S9bczXusvd9EDi9UGpqbWzaPCgtB9DHm4pkFoap47mpZ8Hv33q2nqdSEiVp9FYKpR6Vfu",
  "key19": "4gS2DhQkrmrz8cG6bgvVCUcfgHC2uAbJWy6Zuf4FaVYPKBL7YVMNb4rUe3EutKL8QYzLF9jZHGG9C78SCo1nbZPf",
  "key20": "5iZLGBnu9WrexFejkqnao35smWqqCYTWSTAChPgSjisFjpbMv2n8ZX5n5qP3xVErMbdRegGft9R6AgBf8WhdDeWa",
  "key21": "5vf3ndXCDs1xrEEvuSXRd4mtsZhXC8cuzU8cqMxRDBb2cPdKwZj4L5zFbnrbVPKe7JetiEKqnTqsUH8KX9z2nseP",
  "key22": "5pTqaqQz86qJRcfE4cSLinuXLBG2TK9LvXhtHbWXF4EBRjbuZzUrraeiLMLWAdTfbr2DvPuouuhTTw9EKvxA3bAb",
  "key23": "2E88bvLJivshbvqhJCrpiFpG5BrPre1kN7qpG9eXZr4aj871FeGDz9db4JYXqiQpHrbko89rwwmgvukCVWhFwEtd",
  "key24": "4YAziiTr6xEpryQPodzooS6H3TmzbqfLdexy6cA1uGEqszuBBmafiPFrhyGMn67oznQpxVP5AqyrPUm8eZH8jzF5",
  "key25": "4pquvXm7xVs79xPiy2qnTvVY516gjBonQcsdVp56pqsQHzCnBiwqjutTRwGBvLrjhiwkXQVri6n8jtr2gru43psi",
  "key26": "VR2FrRBsnnMhQ27NCWWT6ShvnWpkqDGLcjcqBdkqM3hRZM9dPGxqG7xT5ssE6A2T4S2CzDb1gnjD4EEzNfrLqJs",
  "key27": "3fWnAoaCtshAcuTiaTp6Sxc5U88fzubvcbbRSfbkVgHdnhwjywSeNpnT2yhpiR7991NE4uqdUBht5S2eQZ4x1moh",
  "key28": "zHVMe2qXDRvpQSb5i1X8dhKvHcrtX5KJSeTKzwhd7XgSZrTVKkeknv9s6AXQX1N4WHDuEFMtGyMMJG1zTcBikuW",
  "key29": "2HAbR8262SSHwCmxgWcRXzxFsqkgTNAQjse1NXKXteHYXLaD4AHhQkyvM1Wv5idCdkQ6vDVufYqsrwgjwMBDDmTX",
  "key30": "5XbMuNpVJYfqigyp7TfmaiZER9TGXhTvgUKDFLKhNUKPhJmNLYF1j8XFuxi7aY1VCQDvwdctdn6EhnA6dVzebwJy",
  "key31": "5ghWEpgnGTkJcLnpHwzXcmyX7Q5xS4niwPWeRQwxA6r7VUV8c5sLxHFD71qcv5ZhwG8tSqPKoZv9YgbEVCjKAWmJ",
  "key32": "3J59XcMef2CmrzQuM81f4Q3RdvX99t1xWPs8y27FTmThijNoWfqEV2dzLV1xefB3BqrbTeAVsnSbFj3YRZLsDKmV",
  "key33": "4dAM2fXfkcaywUjGpEvHDxhMCUWFPDoFejzRHAGDoguLU25tVSkABGtKp1zxDvoJtZjHpbxGmfkiygGpgtZXsRpP",
  "key34": "2DX4SUuKb1Vo4dnqq3gFhwkPjr8VSqgDynPMomeGN5pEuUfHLP5BZ7ZC1WE3TLSEbYDa1sKBR36Lz5mbeBtKyZSi",
  "key35": "31DeMhia25jBNbqGTyHkzc4NXSwqtmb2rfr7kDAoRqsigh9JNrrXkUoVQpAVpqCfzyZvUmZwn6SJGEJcZpeetmQ3",
  "key36": "4FMZwcNfBDzqJYCNJriSaLmzxntR9SRKz2R41eLk3ViJ9JMc252RYHBvX2Wc3H3Vy94SUbWoFvz9SqDJ99GPaGpz",
  "key37": "WnHn1h6GTWeXyEkehqJtWEhRwqp1nLyZbTphecghgtP6TxG4LbTLe4i1AcqLFif4uqntbKYJsCus3qQNwtkUegx",
  "key38": "kY99vh2tdJBSFcvfo5n63PVUoWy5Jn3iZ8p2tzBxwoqLiHu1A8A6TEJUzHz6fbys6Lp8jUb4sFt9eSsTs9q4vUb",
  "key39": "bsPGCc6BqUncwkM69zUVRkQ7CCWZXjBPdZtvpiFwjkoFhDQyVjxJSHqhMMiqwjkKkaCcoZ6Xd942vmw3EgLBH1L",
  "key40": "2NfhWKXCPLVtiBFuAZRTPCiBA4AgeBiunMogZEQNK1MV9dDUyAU8Zwyc2CvMgfrRHZP4swfRYPrjSJ5QykdmDa78",
  "key41": "9uFcBUjULvp7tDR97nFZWMM2vDcY6vEvUR1PsQ3ZeZiWPQVpqfWWshNqTQ8i8wNc4VUrgKyix9QLhmsHFCxfAHr",
  "key42": "3Z41YmKYfdeddZVnhc6uHnpKczyfmZJ9QvMAnD8nukF4tfcCfJ2TTWf3vgd8Mxxeb5tvATf8JZnQ4VBUWDppudJ7"
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
