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
    "4XDscMwHhZB8ucaae1zUHKDjSswr24bbPS2UfHgc3m2Z52aegX7EQywtdTUi1tFMUm8juJ63XFSvv13nTLepqKEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pmdY3pji7DSsCg8kn7xT455JZvxtNu7pgTr6ekaKagjRXUmuCFSwsrjfK9Awe6x1M3iFqCZLj4fPbmZvwKNHNtv",
  "key1": "5hrQhxrnomd64ZPjfUnHTcFF9FiHyjBWbXkoMNBgSvHCFsU2ZiEQLEsUR9LNSQiumGnbhxi8CrcwqkKYxoyZz2wv",
  "key2": "54bPWvupbdiWRCeuNwx88QCEqVVZPfaSGnpQsNvtVHwGWAcJUDX7hwgVLHboXd5q9bCbM2vtNBoRVqXFZq8Nn4zX",
  "key3": "5YEF6Tmr9MPgZB3zW9BdG7kJFJiBYiB79VTH3hDKAugK29N8Rm6wnyUEZmjXW37KQAswFxwJ1t8EPdNkee5t2BX6",
  "key4": "25SYMdtwjBgayrMhzyN8qKQwiTiPowjdaY4urjuyPJptkGocpnDLRrW8vguCvN5TUBjSRUZFTXcjfKZhpXrRsNKB",
  "key5": "3EjTxuQb6anb8Jm68AYGUnXAW9RpK8jaSyf3HfURNx1FguMYvw2tJeLH3YtR3KeRvvybKUTeqwfyGdnbxkBNpkZQ",
  "key6": "4eG7M54SnPaG6F4AmgCuoBeoQh7gnqjhLNMguhtoX341ubNNm749EUKzwy6uywuM6s5ahRJx5rKjoSu6BCWbo5w8",
  "key7": "UTS6w77UiecoyFAbKTHamFUHYp2Lo8Rp7vVareLqfiyQ8FzJVEptVUdTD5EAt2dgNFN76onTLwAf2H8do7uQbje",
  "key8": "o2Ur9FUxGehjuxVKuVJ341rk3wiQTMhmEDo79mGpEbqch3xCj9YS3ez79VASiLCERXgkNKBBo47Ms4pzXLVG16v",
  "key9": "64vBBp3CWaASdG7FoWNS75A5a172VcdVMyi94aMaAVvHQbmk69q5Zd3AzDdX5fKtpXDTYc8kJr2HK2aST2pXyn2i",
  "key10": "34uoFGszfPwx2H8kJS5o8s69Mx3Z4SGktVzupHYinuPXSoZbKgetfKSiSpEgNawrnsy7ytqVkd5PZQUdn4Rg4w8m",
  "key11": "4KaUgioXnDLHPUBR1Hd9KUrSkA6mHJXdcXuFqGnynXPC9dS6vcCUu6hhRUWejbFX5qXaqciRNgtR9Z9hs22UVfxd",
  "key12": "3CumFrXWc4BhFDhpPYyZEkTLsxD6kaegwj9bZcwwYdQNhaMGkQKJzAvo6a5vv7HU7yxC3j2NZxeqnkmDtWXCb56h",
  "key13": "4m4wXnHZb7oMQcLtdwwGMG1VRFGds9FZLCLbBdgDRrCDknGSnp5gDeGDhzbiap2S245AQDDkZCzkYu4TH9UxsUbN",
  "key14": "duwZPcj9ktPm6CXdMj4Zxii5wZaAM2mSV1R2V7aGcCa6i61RcouANt18RaMrVY1bDmLEubXWoodYU6g729ehezh",
  "key15": "3S5rjM7pQKEscyiGMu4YXXj4mYjZ6r3MTvnx3gyRi2VB6WD29DyG3PvXUv4GzZKqaN4oK7ywBeAAETy941QX32vq",
  "key16": "55SaL3Gbxrhu1zq6k1b7Zdf9MLP7tbx8ESHZD4StoYTz51rAegk3w3yjzykMm3ydJYso6DbnwzvBbqbrNuorznok",
  "key17": "2CbNKTj2N6z6PqK97AyjB4MetREDHdFNQ1pEcZVSPqLBWps8h5hVDo5fga3sLLmQCJ8LbtSGJaEJxXb2SNQoyvX",
  "key18": "3MCcxQp3PqVkYLEfmfjqcyCmpWhTSNi6Ea9uUxEL8yCe2xc5jDTtqpfpe6QCVQSZ7v4hhdGbrUXywem3cZGayeDK",
  "key19": "5weHQ9Msb2SAKyMNQoHFNStSsVACLJLRNDu7bDqUcsH2pNv5eH7tSiQCSCUq6VLGFabUscz6A1J6uWJUr9K1G5Md",
  "key20": "6oM9onsaProLMuEv9YwUk62WL3nADmTa2FUndBy7kJku6Tf8NURzNA9n4kBmmCcWCqE5XjtPLnTJJnSNkQWFTZW",
  "key21": "23P9U7zsnqU2xZvtW36T4GuJSjWwngaBQqgkYvukhbpCgRVW6V6opwgbGwCBJNTha6zbgRqetUJXniXox75D5nRm",
  "key22": "5yovkjH2kibkvd2TTJBnJAeTSbHCYAEHGaaSibrxJuj999Ev6AzVrvaeoLqwRawN8ZHgbkyoTgo6AuDemAFKwr9y",
  "key23": "iBrfYjAiW8Egqc69oLsSUh2YHxHuie4tvvcroShH3u1axxeMe9ypf1c57uMft483iJSttErpjCHgyuv2kdQoVB3",
  "key24": "669npJtA3z6ea9FCara93rbCLNUt1C4hJpu2KYtWHyV1QpwxugGbrMkzP9CoYChvhGaArg9AEjwKQjxDTeNDTvxo",
  "key25": "3MsTegFR7EvG6d73NJ8PEnPJrR9SnSqmXQGpfDvpGvZGB2wSBmQmRt3bAto71AUBTYpcDzJZ2PJzmfHMSawhME9g",
  "key26": "5Me8DwPukGesAC1yh9bkaAmeH4us9UpesF1TdZKhqo2s52mQaqafzE7nL1M6Wpa6N9DuXh4A1K9xv53jduZpiCZc",
  "key27": "aVVwM71gqv4hSA12q6tpcpeJ4e5rVBek9YNzHEwKqX3fUxH9KTpVonvtf8XHtJbBmhwmR7TvxCVNmKjj7Xk8Qzj",
  "key28": "5RY1qizWcddaqZ56HiJwTsYtNXZ2wZ5mGoRLV59VFb4seYzQXxWugNAcntgyfveE2LnyVJpg3ugzmtczLnaTcHb7",
  "key29": "48H1zTp2SzKjqMQhL1S7supQJPoxd1mpLteTrsSRJQ9UeWpkWRohpDXPDSrCYtMoN4waMZSYaxrUsh6K98fLqmiS",
  "key30": "TBdg7WmRRessdyup6YXqwE6NPRukP33geAJRPuXx5d76HZbYqbpfV8bjByLKhYufzBsaxULYTvkW6RTfBik4DFS",
  "key31": "2kP3EH2RKPdbta8YXH8zef5wNEfG2ZXGZp8Zai5recLmodpxwnt8fRvpyJpGhvtmhHDhyoqXJWZAFtSu177mYGkX",
  "key32": "NCHS66TipQCnGrLUmEen9mg72HmLwRDxMNRVdwu9u6t8paNi1hzbEmqfnBsnhozBEgX1zXs4GeRYYJRt6QnM6vc",
  "key33": "2Kqbj3EXo1xLGyeQHEiu4i7RndfyvKkGXqEjfUcWAduMmB9FJBBQQVTa1YecZWhtxxH32LhnjqwDRyrHFQW7qyd9",
  "key34": "4UcLs1AeXgRGqZrXvvhwB7VdS9h1oaA6FYTucLrYzH4YHaKwsBfru6RaBTwdmoHMaK2Yr3yj6efVkH6ReX5gJrqj",
  "key35": "jW9F8qZfUskKF3SgrVp287rTg6L6sv1Gz14CzmqRDdKXGS7hwWEngpni7rveyEWb8tosxJESNFggfcHLHFXsxW7",
  "key36": "56VmiJ4GhbgxuUYZNkqRn9MigBeFPyY6L77GvEBiwxdyB2E76brsLCVXScvAh8CB8jknZiwLXdib4X6CHvmSzbg4",
  "key37": "2iJDsmJwQJFQTsoNZC7fp1yVAVCTfRYUQQoWkGUPGfuLiNBHCatDUN9s3VnW388SuELzMDkdQ4E6XPH6FVZ2eAwU",
  "key38": "3rYpDp3c5fbfvPYuuHKGygvZnP6jxt4c8jbSZZ7p532BB2wNrG6TJftCKYaN4AEXRnVqxdaEEzMcKg9BQgNKgQ6p",
  "key39": "5PNjH3XnoXodr749d8ypDsGXQY7kuQXfEHKk1ULBWDNXHE8QthrNFJgQWsWWhrG8vEMgYm32Cujo43RVuzt9P3FX",
  "key40": "53YuJW4cTBG1b24LXuoepZY5YykTtBQ4bJ9Wg1v9Bv68DTimfMkPrM4f3MZRQLZznySikVNpE3SXmKUbPqAVcFge",
  "key41": "3ifrmKsHVsuP1MVpMUVQExxa1UeVqnyqNV3KubauAyP5sdNaCDpMBzeqsgNyGFG7nkvsWvr36FUPbjX4VqsF6RM8",
  "key42": "4gZ1P4Vd25LmoXJ35AmTFcU74iGBtUpAugnf4Zy3wfofiCEVyHDmxy5qU5xhyY3WuLiVHNWJLPR9Af9smDN75bXp",
  "key43": "4yUE2cL7HnDpBktZzHcn45LYp7uaEaGTtkTLjPrP6YjoM4zLqy3nYz5P19gejfW1YEVCicMhTC7fhknaQsxzxhYA",
  "key44": "8kq5R9nMWSRLy8EsBpp634Zx5nPsSCj57innGJYvzKZdNK7DcHtUcqrqfTcYoNKwC4nNiqcaEuDywBiyfo66DoH",
  "key45": "4ntCfJFuKHth3a83R1mXNd9sMh6iQn4bYg7Cf2BfJk5zPWiwQqBD8NzfJndDCjwJTtjoyqHD3exCP85yH2fL6B3p"
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
