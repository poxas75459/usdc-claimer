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
    "3A358vekemb8d69tbiAbSUphcscWMNzg4CTcS4t5F9JJ8EtLpk73yk9GHVZB1c5GFF9cSLSRYoqBSVAF25NN48dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58PbvfaZAm8H4kuDTM1RWYKZqMMhPQ9Ytw2YybAo8QoXwG29bcV8w4pgjqpXS6svNBEdHr12uyFgpEEWnESAoKK",
  "key1": "5WYFHWzwPqmrBcjWJvJtDMJjjBQ8ZWNEYyATRNwN2bpWCKcMvD3R1B3i66szrFWEWTeGoaiy1NaGqWWfmKm2UUHp",
  "key2": "4mnxcruTKQsS9nfxayYRGvBvzfYv5mRTE1Dy6XxWwT44dN4CBkcYfjYmn9VnSxgPLh5kxUF56P7WJrWyPC5xwspw",
  "key3": "4aNPnqBrMj73MtBrz11SfeSNvrncp1epKJdCQpwHSLBPytbsnALFnVEJMc85axqiVGQcai5bmkNBqE6nuLXuPVCT",
  "key4": "4VVm9hxjmZQ7WKZsmx1hRFcb31d2FTFvqxJhHYgCzoFMezYrAp3Stjmopp3eJVAXvx7msFzXLpQRtv7rDXy9RYdF",
  "key5": "62pPjSJJ4P56B8BkabvmjDDR4pbfHJgUYZxXo5E3erATeaCA7CGMCaDnX6YCp59SqfBoymhAjxwDTsvrkQgovDuw",
  "key6": "j6tgZcFB3rBRyoumNWKxkYxQgPzxCZ7gCWv4QvzYKsd8VNxzd4KDQqTmmZ8xjeRk1TFPzSxhwR9tjykiKm8Kd8s",
  "key7": "2UPWs2vmZuGfX3WiSH61WZWxJfAcVUAys5KSMRJMdqNfkx7EfBzC9rkheqoLAwW33SQjAd8dVHGTwwzdtsZdkMrq",
  "key8": "2PdDyh32qMd3hZYmC7VMCfpHFAdLoy676du8cJd5C6cs2q4BN1rqr8dkyDLDHBDKEuY2EHZ2AAcAAtW3LWxWgjKW",
  "key9": "yi2EigtUbR4CzWSLsVvzZD5uBB3YiL1CihEeXr7AUuMGCABhjMC9P6TKWZ4BtMn9e47NkrX4EWEvTLTwUvcMcoM",
  "key10": "1WJKwvJDLLk77jBtVJeYvRddg3zpLE4gaqfN7XgFjcgcWQUMv3BYLMm5vfNWtVRi2yMBrmS9eyrr7tQrkhjZe7S",
  "key11": "52De1Tq7TGkGcMM4aNisBWftreYUKiupe7nyuda5mUy2uSbgaKZh7wmuL8sXvNCrMz2qUtt6V94gAmPJkVjWrevb",
  "key12": "5yjGf8Tof6eQczt4NGEnixoLj5LXqmGaCJTz1RwrCwED8NzdpbSzUrEnHMzwsWtnsTjecUaewHo6aKoPBmDtazMR",
  "key13": "5oAsrJpyS93fDgm9ytPs3xXTUioNKpiP2En3Rzc6deZJHsRpUZatcyyB8hytdANyyxNGAp5UKt1QJ9S32zhK6Eoq",
  "key14": "5vWBcQdFE5BgGYPVgYgEzSGDTURFrQPEm8Y8R13CpNWBPpyp15RYUKoDy4njYEairPqaUKZXpvGSytdAAj3ueSWL",
  "key15": "4Muj51439Aua4N8JQfNvggdWxLx8qkFdAYcxZZQ2uAK9pzbaepVywWhx8X9iUwwwrsDRijfcrkMHUbdCjXQJ46Pr",
  "key16": "5EQrPvn4CGpy6L3ghvWhBqsqosBrfHTiYrbtb2maAU4BQTwS7Jrge7RatMjGCgUH8EQDU4SJrczfsaA265u4SY8c",
  "key17": "2w8AkxHoswEfgibA5qvhbZ2qsNqXcB8GiiwFaP949MpHiKZqvnwwk7XGr63gHGpAF7uF8LCmwD6JF7NXCHDwPjYS",
  "key18": "4WNosgT6Jkz7eqpKNe44uHPQuTzHZ9evv4K3dLcHNLx2Qq8WyetP35FKk1oRn97M1fKi5v8y8jGsDmSrePMa6PHD",
  "key19": "4uc9ogfaMPjkH1kGunbSMfRdhUZJgWMwMAF3g3kXXSU7bgLnLWVUSXXeZ9NAjyyvrrofwRW5aZRsuVXCXU4BTrJc",
  "key20": "cCTrAouoogUVjX2oJ5fxuzxchoUR6M3Vrd84oFk3pbgpkJoy75a1L65ytxthRuvVchG7RbY8i38Ff9fW2KcPhHz",
  "key21": "5r6DUTo1Da5D9EmTQ6487iwXE7KaUih1bmSwYXYkauy7ExqHfYrypseNWohwSxCKsXYMAZRV2sUEsJBHGRjj8Fep",
  "key22": "4eV1sjsiwVHPBx5v6iGJGrKpaBJnwpeRTueYzGkpYVrfHifTDGyhEMyCCkhFDLg4AzPrwjSTszfPjVkZLaPZBXBt",
  "key23": "5geYiVzUwBfXaYS9p8EiB2nu79XAw8actqBjttjCswYjh9LYqAVXrxePvQfhCsUSSjYpkV1FeTPDJMeYDrbqUUmy",
  "key24": "2srdRBZxrpyakGiuZaJRx6VZtskv4n6gkuAWUAE1ArcXW4x2y2iHfuEpzRQhmRU6VEY2MBAEavzhQfXSSkrHwHbz",
  "key25": "35y9aXEoN27JxAan3gsMLKDTNRxjyJzdGGGygjSUpt8BdrE9LioagxopMTPqv9Sm2GtsWdpTYj7EcuMrkwsMaHAq",
  "key26": "2SrJbwjn8VvZzdUVtT2GaQwUrRFyhjGCMumLZNUwfpGGa1WTaaWREFoLGGX2zseMcKWiYUFVAWt24Fy2aRkcpP7V",
  "key27": "5XfNdpY5PSpw6dnDjswazzgkg6y33xhMAdyBNcgP6wQn3jZbD5JETk9HCt4XP6W1Wunj1v8Tn4ynmUgTBPwh1g6L",
  "key28": "3EmZhYHNxwMkaGBjbTyM41er4Q7hCahEniYeV9Nfa9rLfsKeaLE9JryWHpPmMy5CztixD5akgcJRmJJmCXz2ZCwf",
  "key29": "2mXT2MwptLVdhgV3BeDkhbN12QwpgbeD7p8uEPw7wU3PEbCJzPqmfCNRVWmYTwe5pMuK9p5hTRbat6w1RQYzDVhk",
  "key30": "TvJi3ddDYNtBqpss3nxzCeAxrMCJdBtHxdnjRB1apSKqHxHFrVd7e4MYc5MWjkvhb3S53RpptKgWGcVWcUXetsr",
  "key31": "aiNLCdkv1uPzDgr9XUPrTphRwAqTRVAc2XYmacRT3UU2gmLQYrVbcuhcoPHpyeTeQLVkQKvSFCzBXCCuZxXyf4g",
  "key32": "2r9E5JRawSzqTCMgMkMGTo9GNMg1MRZtQKgBsRdvXF3Av33FU7wURjD3WSiUSb65CebNBXti1FKiYJdL2CGqE7KP",
  "key33": "4o82ZHsbgpFJGQ63iZx9VwUyf9Seejt3kDbYgxQEyandp4ekXTMoXbTZNFSbU4MpPFadcaruynpMrRqdTcbytrSe",
  "key34": "3Be6wvFU2S7LGUoDnWLZPmMKhMNb8rQqf92Gp2pdHGFCs4bQDFwMzZW5WaDFYQEFzP9je584uCEpErue6nVXp4Jy",
  "key35": "5WNxcKBusfo7UZMVTDGMdAZUPZuwowdc2VBcjoBCnNMsy56rxVmLQtvWr7ezMdGp16mVZUVrmKGz1mYvpK29C84P",
  "key36": "5S35U71Ycd5djjyu9BrjRCQZ11vwPjkvUX78YJ8jK5CcwEkUBqVhh5uvptaxUVVDyNX5fFYYjXkEtFR1Mux5ji4y",
  "key37": "2BwF77YMAvJQxTGTv2Rrhpy6Qp6CQjp2dE2FH41T2WJGxN3T6F5GZkcrzmMRM5XzKFYdp8UXZW1avJdi9hV4UBFg",
  "key38": "P6SWa7kLUyfnpLfwKgGZPhCm6sQSDgASfTHeZ52HgWJWy8t6E7PgMCcZ3g4rYqimR5hFDM8spsdVii1utcC1X29",
  "key39": "3G2cxSmmF43GKE4UuR3Gu7zmZVCauarMcLigyC6SgffxW6zWoRiLxPgyzoJ2QKXieXWkz8qm5hpcofn1f56g82MH",
  "key40": "5JdZGtU3FTv7YXuFvCCfwPWXkvWsNTrY6SHzmdMnZe1MJojrU7ACPR7CwgsyaxGYYAbHNzmmJvUFdDiEV8qM7AJt",
  "key41": "FD8Q9pzaoe34qzrHqHsAjYfksp5QxAWVkGpZgsj9RwbEPLJgSDCPQR7KKhwP8SRuHC6kj4TzKNK51yKJkKwoVwS",
  "key42": "M7s8NrhFx3LNtipLNVuNjnszCt78oJkhyyFyarws6rfaz3ZEaMr79ob36aajzgVtQG32uMeDdxV9QTyhVpWBKJz"
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
