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
    "3jdLnmFHYCqYydxMHLUVGLgQkBxawJj2YHuVzQZYomZPRZzG79eZAcLtt3KVyfruvPG5bQ1rmqyMX1hhNLZ9JS8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HeorGkDc8o8cDePnZxGZvbuDfWxaB1PiZMa1Y5SMpxVfoqaEa8GpYKjQPNsw6e4JxtWxpy42MqSLBGKkRyxtUPg",
  "key1": "4Y1MHkMWUKQ3fjf5WdBqPBMaah4ZZVxDqxAtHU2SdcPDNWFbb4GwBRP3oYDqoDEiTGkaN6Rm5pQP4EsWgPznmaY7",
  "key2": "3VwSsEMXRA7AiCJE3GrXN81e49k75Lx3gApYwe6fg8nibjg855W42LoPqMDdgM1L15x6sT1YMzTKUvbUS4A8Aet8",
  "key3": "2TAdJi2LsR5rqLwiroHkJeiDjdB2unutsS4m4Sn7Wq7tncG4cMPUd9ETKaBokrHtFmUqMWjHXMoX9pCCDd6u4Tsy",
  "key4": "561CbUVD4VqzziWWyC8TSqrR2fZKXRY5yVMVGrMTrQLhzNt8jvikVP9HgFdB1fpSCdQk93x3PRoiZhhMDGGSPm12",
  "key5": "5MNJm2ogyeJ5Jw7Yz7CbmzvRqdLJLMezW5dbSk3z6NdZjw9aXAGAfBdt9YRZ2Q8AdEmVEut4rQLUMrEvhipnt2Bf",
  "key6": "Pmask1es6gcXodEx3h8p6XB7NpmhSHP2xbxB9sRTP7EwpA97sf6jdvgQ6dbce7Mcybk2GaNpyV1SHdL7aGYfYzU",
  "key7": "5c8AhZ4YLM5YQrUv3sfYcsAC3zoLYwA3uXHi5iEwcjY7Vjgan4rzmg7hFm43HdrTXbs9GEEGq9eZkqJResA4d91Y",
  "key8": "43ohBA2ayAe85rfrK2eddjPsixhJr4wDze8UhugVvxdyyDwfd4hFSp2fKMnFNbHAcBqqBBsi39XdMj9P5PjuCg3B",
  "key9": "3Ko7f1Su8eutPmGon5zB7BreeirAt3y5wh6qwbQ1QQAPrMqSDfBcc1RDEtJgT63HNpZmQXNPooLRuiZFGcNznRtY",
  "key10": "5TJkex2FgCienEwf2wvNdo6QCMBLACjik1pj1jwj4j29NxZDFPjmRnMuE45yKGxiLuUpD9A93gXmycxY381xSgfG",
  "key11": "5CAyeThY9hhy55rQbmyUKwwJN1VPvdzZ6aPjDuYamHZHjFbpGVqjCVRvbJ478DkP4mbujfvbJPfzApgBuduynSyW",
  "key12": "3kf5iMYG84DWSuGFuJ5W2cjEakRpzhLes3ga5TrF9qn5tEiM4bUdfsJaMoqCAE8b8BKZ9N3aFvX7vapAiqqR8fYP",
  "key13": "5t5M63f9s6NoPLfusyP6EnjgadafaWdjrCufQ5HmeJwovuUQsjML8oe9LNPWyzvxedrGuhrrH7mPwUU8NW8ftpER",
  "key14": "5BGUwukeQTz2EwSPFk6hZrjciYudLXSQvsPJiKGVWExWZ2NcPziA4PKhQL3aSWe75cS643YkYJD5f8Hr7cg1r9KS",
  "key15": "51mfZ6qKD1D8V23vRfb5wo7a9pNcwvFi1r9iHDztvHymWszoJofaiYwGmC7pbpv5jNwctnHiGKMe6nAEai1zUgHJ",
  "key16": "5Bq3paC6goY1iZY9djJ8731eL1ygqrsxfyfYEDaDjuXimCH3dgiFdtvsvwrkQTVg6w1cXx6yrF7qdQ8AEXK8uWYU",
  "key17": "3v1AdH89wqZykheHtnv2jGBGn5CC5KuQiNE3vpCb5AsGRPAkftnfd4FBA3SQDRqAVaSwFNaHkwwsAqPHeXUBCkzi",
  "key18": "2yDRGu9DVqU6a4Kw4vdXzFnypXWG2uJWNRRW4ZUxienxUDrmGAVyHPT1ndm3yoQt1Co3jM4ABvrSgy5i7TmMffoh",
  "key19": "8wUbHD4NG9H2RFM4K3d47V5BRt5tyaEQJhP4aupLZxviUPzAFqfY9pLB3NXtumtsqqDz9PKxvXTgrFGG13u7APN",
  "key20": "2LZgv3kP8V6kxNa8JHB16cnNingMkKC31cTZhBHKwtdZwgbadPApkaGiphsBDUBYyYaxGieKafDYBVKPnraH8kF9",
  "key21": "4gseDw1TMmEMuAyuNk4DbGumt8knsvRXRSArg5u3EVVpLbBv6FMUwP9ADTFc1ubXXDHwQMcQHtEWxdKfWjn8T16s",
  "key22": "4zPNFRJC1MXs6CUzeTimPzssycPJyo4UhBL7FNpqyjoK3LuVca2SgXsvSe8dxwCaKX6Kqts3WnaczQDGxbQE2aoJ",
  "key23": "4n7eUrzLZg1yKhQ166dGvjJ3W3dJXUEkoT5mHqqfqzmf8kVwVA7PfRbkHTxGy5eKphjk17A6e5iaHZcRmXcUkMWJ",
  "key24": "3vf5ysU1WAnu4FYHWbg8MkRqRTfwkkE7orPJyRzUy4ByjxBk4Pv5DWDEy6rKLUR6W2yBTLTXDpQEjk6u3dJYUCTd",
  "key25": "227GJnnH2fcZpFEV1ELHLdoewUQhAEi8dUKNb8uiyn6cn6GDcgqeDQsgjhynS2yifSs7CVdzpfwuHKewZWw5ePuL",
  "key26": "2kHDrh5vLLhxMyYzVVDsi1FF7quCNLMFaM49CaTCuadCXfbL9Xbbfwf1bw7ExdhPjSHYnCDD84aq6zoXvFwt6NH2",
  "key27": "rrvznMPJfwWeji6Qot4sDbZTbR9KKhNcZozAezRzfRigotPAAXLYND2JQZzgnxCtavfyekzejAWi6p2tSbjtaV8",
  "key28": "3Hv2xnCrfqGL8AkK5M96ZKAkX2fTFcsZ5mK7zYauYVvfFKuezzgWjRXMVsbUNxUtBvT7Gv9NAXYW6NzPruRGqMdk",
  "key29": "2Ja572Bh3vtJtyB8b3bHDD58cJoNuxnCrxuPvVygFGz53YtqKFwUXSgJuvzYH7sckrPiZcxez6vwnBHv54ucvopC",
  "key30": "3UAnu3uBJat5rkvtw4ojctJur2sw7amenqmRSqUmLyd2osQoa73CTiBcVohTHSAPgPyGNxUzwMy44uN4YCBT81zi",
  "key31": "4WW67YEQW9sn4W7WQMsYZcm28JMz1bXUCz8YBLpB5VES6g6UgF1mUNk1yszHZR5Vjq7F5gLS6vtsizgimBb772js",
  "key32": "s9x6DF7LMRjqspqiApPairsXYJnYhGLLiyshDfNr5rmjrVymfViwMB1cRHmk7d7pSppbX2qSQeGyeoR9f63TM2S",
  "key33": "fAqf4ywVkP3V5P2jZ6hBdTkaDeysvENRSWaUN7w7zvdT7EMWPzqdyWB5ttWaWqSQDewyMRXyyH6Un1SLwEdfmaw",
  "key34": "63KWVPKEDN24o1FMsCKEK3fyHsmwUFz8BiJr5jyHHvqqzoVBUVEM2G3VJpg2Nc7mcKaje8XDWMamhdUVAyWLB5C9",
  "key35": "QEU4u9UxEi9WGNCVAEqdz6jhQ36WyDAA672GdnojvGXAY2iQZSsCedNpAiuRewMuW684PbT4FLvAVk8GwttNJ4U",
  "key36": "4uHhot6FEBrmKhppteTNPVd4VbokkzX4Rvr6c2EdphabSm4WbtYNzsvQGsMVoXL9Q3xWG3RD26adfnhHUNU76cqS",
  "key37": "2jKyFEJJUdjE7yfAmSDLtNuaHNHMKi5gY26M4zbPmk5DeQS6ork31kYxDBoHNRTvJTseGAjpacQBR8TUKQRLhrX9",
  "key38": "4m9y9XSiuxkyT9krJ6PMt7Xd1fdSH1GG8ok979DYvfdbHxSGkdyBnSyXQoZTEGxXxy9w5GUccgPCqKByTxSNTwJm",
  "key39": "5QL2nGby8LKNq62zm36qV3duADPHE5cMLH3BT6Z14CRaLXv5eTQrQyRkvSiaG2c9ipsDpD9kMpi6e2NJPJvLsLni",
  "key40": "BVMnywBnvxCJkMZaLV8uXUwmjSzNfiNYHuBNeYfZtXg5JXu6xT3rXogFwHfg1N5bZg2HG5Y2tLxRuNMa28kfSDL",
  "key41": "2CuWi9EyCu1iTgpPJF6y26K5enKmodTziwb8D5BBJQxL5DjgsEM41xg3hrXpF2ktYpiVDEp1Ss3CzaKL8PX1QgA3",
  "key42": "3ruvwcPCR2d6qSNAdZnW6Xvhf6y7oJTf4xJWZ4jCzRWgBKNUG3WaT2eMwCq2ircnLXEEJzwmgc3JG9ARuEuxfGCP",
  "key43": "57Bc1QucvYjs4gMqg4DssdiDh6KNLkndN1zQ5moGZBigySD7r3t7xsp2Qvdy37WaF2xcX1HdzUEBP9i1bVdkG6WB",
  "key44": "5QJsHS6aVX3HzrGVo3NHhusC88e7fPM8t5rw1CaV2SxUqtc2oGyNZ9Jh5d1aL7CPhaZ7QbaBydd6V4SzwmK1uMxa",
  "key45": "2Xdu7FDPqhhQj11dg5LtZFjR1N8KVLEhNuLunm9GSsxgRLFTfuhyPedes6ZzeC4ctLcuMRMKSngF5qwVGobChGZp"
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
