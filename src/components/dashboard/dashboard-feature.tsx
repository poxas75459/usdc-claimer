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
    "qUNet1RH5mHnnp3EJhQv7kHaYNhZcCbwjuuRVPqZw4BqBU7gC9Q6pW8hELmzbs6u31eAcBGMh5b64irwPz8MhCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NwfQhpbzGs1gnXrK7EmyA42zZXPWfQteDvSnouyoKfeCfr3R3ddsbP3jfVEsegT441YDhHALLwjSZdPj2zpSwyk",
  "key1": "3MVVqXEUFRNirjfobsqcFKnkAffwc1YcFk6XtAETx5Wxd48zi4MPKBv6Y5Kyd1co6SRboSVjLra8ncSBk6stPJWC",
  "key2": "2TrhbPWYbCVKWqJcZLmLLH2g8ZdRj2386mYbi6afnCh7iA5jXY4HuEmt7yiuDtdmTRhUBLWwawAtXNLiPwoKzTY2",
  "key3": "4bRntfGTxbAJ6H7icFvDeQQQbNxTYormnQDUepTEjwTSQHJMEnouyzQMLnTctQpoUUFp3ARH1ukQ6G1uPtJUMBtC",
  "key4": "3XE5WkKWfMD8hzu3VWyzioxivsD9rPEEpeLKJsV3SbjtkiW66K1u5kYSEADTbA6tJKUonvJxjBPJtaNDeW2QPTXj",
  "key5": "3Fdrpk1GpvmroRjgSVq8MhhkjcUhqmos1uRTDmWTKjdBBxgSU4oY7Wx6izHQLgRHMFUP83JYkS5xBGUyvRmFM1Za",
  "key6": "2XCr4GxXyJwMtzw2pZJs8Q9rEnjji7NjMHA91J7aBihfgteoBeRudUgmi7wGd7xVSbaLSn6k4SDDYybHpsXp9iF3",
  "key7": "4dh4ZFVHVtXPUUuuuFxivSRHGicjA4NeXzGrGoadoyah2aVk5FQgBDkFwmpwLxagPBcS4FY6QrczipVfFNrwvFev",
  "key8": "RRnAoA4ethxQ5GQ4c7B7jzErtr3RKgrCYrmTWLog1KpVRYvHMQ4579KvoJSBa6BiewkLaeUEtmubwMTVs8MB1eG",
  "key9": "3u17dcDQJJAuacvGq4vkfzqKZSGV4YePD579HX83fQDkykY2e4m8Lqhx4KQ95u4FU7M9TijBtKspVwmHfa1BWrEy",
  "key10": "sgWFAfxgftvUXqrtmSbHAtHP2bJyumrTaBzb8Hvi5WBf1kR4cnKs1RaZazyjkVLs5d4UaQJDrsgkMdxMWSjimYW",
  "key11": "3y2vpkPDfR4QcbP9A3iirWRdGUyWqiC2D6aDxMVC7cRZ1gKWHdzaAfvkDeUFUN2A6vpWZM22yzFzsRDMpAjsVKFP",
  "key12": "29FBjwDpcFmY6Cdvq8W2aFKz5MFUc2YaevLqKixgRQyYErTtNQsAYwC1bcTpxZqheMfVAc8NKhUnsYaRdRTVFF8s",
  "key13": "3nmTfFqbzbXMCRPsae7cJfMfj7tQ1bqFoqEGVwuBwUTVdArb2V96hRxw5DA7gXg8NRAof356yGNuEpD2hb7bf8GH",
  "key14": "4UEitjWKKDRidVn5SGiHMuFBG4mJuQSu2yUMm4WH6PyGWRsh22q86dNRNxQgHCniqu6NYMKihYRfpfC86YHQgo4R",
  "key15": "5Cvmrxq5o3YxFghhKcoxPMzdRVHLMDwvzcbCsuJSURVFn2BRFGg5mdnrPoW5YFg1rsuM7TFrNnB8yLfLPvqxGnUp",
  "key16": "2epXGVenqA7f5CrH13r58C65Xd5cRtT373Fcq9FLHag4KDw7NEGF6iCBb6EKW1v1nNnU2c7TuXT41tbaNivbzFL2",
  "key17": "y41f1LhhFLpfTyDQduF9SRmcuYvS8ZJyWvZSVzSDMkNVSpuwkJej1yHe2zmDHv9yyN4R4xGXt4BNJUJ96RPZoMz",
  "key18": "4qXPPXaKVjT9BGPCaZrEHDMze3TwUYJoCM5Vs2TSiQVdWqPXQrx7piCVu6wFUP75Nre2XqMxZcabgAqaDKVkvEKX",
  "key19": "3R5mSzmksb2s4Py1D4x3omFZ5TedknS36QmatK4RGvjUmXnainjqtkdjqP8SuZmvbFgS2U5X4mDnB26gtvouUPMD",
  "key20": "4TJAQi8z46wGErcASEvdVmJJKxGivYyhwRiw59AAB8U9BoiEhNEjYpd1CPTMMFbGPtnK2TokzVJo6z65Mhni5CfB",
  "key21": "2pftHUJfu2uwb6xgKzDpbci98pNd4hHin4LHypCCx7T2MwmckivVwYNfes3DU9TJjLk74985EhQjDYoVPKNUFpTH",
  "key22": "5JfyuaeYhyn6etk9uYkAwX7g2idPAPAtAhp8abGbATWNYEpP3NjF4Qo2CBvHgwYMJL5APvd1xoDeTC7n2buXPpc8",
  "key23": "uBFyuVJJE8BZWD1Gp5Np2JBfsJUaYTLDzgm7fAEJ7GsJ5jw217cZ3VPTxvnkjFvFgM4DJn1vtVccimzyBTLVeUf",
  "key24": "3zQJbpTPZ3dhbt143DGRq5Yk1PSdjYdo1PeLz7Mz4D8cWcLWWDZsFNRV78z7oPEu74c6VDH7bfK6QyXKVWmN2MWM",
  "key25": "4NYLSno3XDy6eA1CM8N78uErkKnKuCjxEgF45WQCPHzswVvghdacNYUUzeRvrJwiFEZXf162ebs24RRPXd7jeu4c",
  "key26": "3jFuqHqkqEJvTReWtbSX3kNLF1k9X7JhFYJTwr9PpgieaKrZHBz8BNx9jwpiRLYnGKQVYaLphU9FLZWB1EUfgym1",
  "key27": "4nvjWMfWNSYtyTEKNBuB6jrGKd2FRmUfkpQ8ei1FrkFZR3uVW1tSfwzRnCPEPfTdAEHUYdTYCdDSvHfUP389Fr7p",
  "key28": "5HQNDK2ko3DqjaM5ezDPbcbFx1QKiRhXbzw4yvZd8iR1SqKzpscwnPhzpH57oRL6fSm5vbagWTaP4gaJEYhjfeWE",
  "key29": "YDgXJi6oNxKsVQ7tNKAr8fQwtnWJXFqMaHYWW5JNJ9p8YdxU5aG2vpFe452sekh7CAgkAPYkjWqodjak2GtHXD2",
  "key30": "3oRW6XPtKZWRDLKDRFjeK9cFtZqjvft495hMpuN3EJKeVapQA9p7iNcMYBtUKVQJrHjhJScvzNWzZQKanafGng8t",
  "key31": "47v7DGSa2iiseedTgxaq4GLwK7qkQWzgNEqXbh88Vk4j2TG2C8SsRD9asYRnFUszrsXG4EPYvhRtNKMr54Xd4RVF",
  "key32": "2AA4WygbHbsMu7fJ8V26Vwst8a71M82SLjh9wRwRBNdSqqhHLMZxeWuZiGZ65EamUpCWpTATxLvK8SHNb9KAP65T",
  "key33": "3efMbgTgR8pgVhvz45rwWiPyr4NNTXKutjxRnT3AG7HKyFrja1yfhgByA72fRfWfRsijNQj5EVSrZpXi6gvJhboB"
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
