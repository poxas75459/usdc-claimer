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
    "2eSfnFnYBu3g9bRVu6yrWeoGi1CvQcYxxZ7aTSFRJn3WG8vPXuTTfsGmh87v6Qjybga3BZNYFgKW62ERFptVwxWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rrZog1pGw93mog4dK5Y8sG3Cjfo4dSfpgZL3qiqa52AhcWUDQiCsqhPCr1R4h53N7RxebBM7rcPDuTjqF1XaDWk",
  "key1": "2E9Ehyci37WiZwExiB57Ef9WSeJKu7Kx8iAUg3A4gKTn5vZp9dMVjwYFG8in3XURCAdgP32WNpFhzSDy8MjDXPgZ",
  "key2": "5W4goBr6BjdneY6z9foPdNYv4X7UjGiXvoqkw3yrnL9Sy28zBUmVp5tAT1kZ7FPRJS6LdEudKNEx1PumiTS1d6Fs",
  "key3": "82pwLVFjd3zV2KujoyB4i8KJUXWvyHTS6o97nEm3R7DmZcamAhwP31Mh1726bdwbKZpByGMMA4kdjqugbZTh4By",
  "key4": "3XDBk2SV6Qer5xbPfi8PsxcKokJSXcLLjAQqmpM7MP2cnvZvEmFfeLN6hs2hxenzpPZiCbnLrSiasgUSsaigUfUL",
  "key5": "2q4WKJCH2UsDSPgTf17JG871a3ZDF9uJDUajp5uKZk1LhT56CdA86fHmWnFjdsayQ5D3BRNrY1pLpQN7oCCGyLFz",
  "key6": "4uDi197zUnrAddfu39JLzZmTnrYVMcVwgySWGfNFYVQ624gk1c6PWR6YKeFLrFhDj119796zx3hi8LvvnyVYPNnQ",
  "key7": "fEL8Sc1T3A66GdpLk2uwH8EicUhq8ftJfeAUpPnsWbsm2JMcz3i8cR6kqzHAwo6MPZqDYKtgaGwcrVqonTDj9xB",
  "key8": "FL5974MySBDjWGY1wP24q8vMzdKLMjyrAzeWrdJT5YwQzeyUhVZ3XeTFpWs7ndXkPRJmUN8CemsopQ36e5g53Wb",
  "key9": "3KcdKDkDz8Rkg5P2FN4Xm17iJuXj4mFUKx6ASurpDXKUaGkVn8cXJY8VcKpzPf8xVcLwkgZQZdFGv43FEQ3mhmHz",
  "key10": "3eTgRM47xFXAqVW3QAr41QAfpyu7JHrZnzES2LwrXQawotytZ3HcK9NmECSL2LoY7SH5opgekAtz7AfeGY4RK4Sh",
  "key11": "43c6MmgFtx3Zz3sDnuobNZytB9xCpQbZwbiDUSbrqwDL66eKX6bk86tekr3euiH8EY7v9DVGW5Rh6PzuRTv2EMmW",
  "key12": "2pN1jiwj1UU8oF8VYeWXEzZFwRY8fnQtVNP7wvdgA3UtJATqCVyL1vjVxiBGrvCzsZnqBH5vggrTZkFXTrxHYgoN",
  "key13": "3euoYX2fTbLaw23XQ7fgxUv8CFRzMNTFH8aDY8QFptqJtLm3oXLwDaNFBxeY52BS8F8xHS1cDxwDyoh83eKVCpwr",
  "key14": "4Sh2k1E54JxufQHqe77Nt6aoBdpqbWDLVr5oKHhEqfrGo8LxSLUxVZpxdRQizHx7L1QHqDNq7Stngy4dabudsSCb",
  "key15": "4M7qENQcM9NQ7hSKmhuUKvJw2uooJgWFomzqsS7kHVe1CKV88RqdxYjfwzhFLP1xLx2bLDoa2RtukYaTqvhU9W3e",
  "key16": "66uaVkzeRnW5EqkTTqs6cxS7SHwpVtDTnMaJWFzCUQQSZHfepyq1dUpBNxeVupkMrLwsQqbxH5s3m17owgH5nRkv",
  "key17": "32XXopqYNh3d5dYrHf9hJ6bjZHAYeJuYvpVhRwaaFDhfyTWL3X8QqXq1eht45CY1qhyQeDrFzBAWgmp4LLgJjN5x",
  "key18": "n3rh7DPsW2tTkQuVmrkd87ouwxKZAZHuRhum89wyp6FvHxCJa5y6w4xyX88hbaLvWk8PvXq9iCreiNadxLHnKXb",
  "key19": "35wsSZaC2yZmXXHin7JdJSvovfgGLUgFEFMeii5NyRXbv2wAN1pd1bpV1tTrPBC6riLPZw36djbj39736B4DcH3z",
  "key20": "3tcJeDSSF6XG99Ebo92WLBMurueuRF5F3vhQXYobNixQba7XbLWcrGXAuLjNAbCtUsy1G9WCcbcEYK3MaGJcD485",
  "key21": "2FA5pFDj5yFNxXcGxVpjvvm9AruHtqJdgeeBr9tnCuNnJs6Bv2SJomLuLXpVeuhTjwQGwzM3NiXidF4WyqvkWLbZ",
  "key22": "54pwgSJkkBJqfTCPAkaMuqhAvuLe6TgqRr7LtyjJNjUXGyKaoUUfXbp6Ja51MXNWQ9iRyAa1ZVRhUr81sRKuQoUK",
  "key23": "2yicN7PNJWREaSLxHkUEonWgEcoocNRKiuKctszoo2BxFZtoMcC9SiTZPyqfUrj67UyRHtX6MkgYpxj4PTHem2t8",
  "key24": "3jco9i3GHExkZZocxv3jnrPPD4G8VEvDF4PgzzmjCue3DeTnwkYHdZT2D8ySGdFJENuoNYW1Gf4f9TFsTWwGMCq9",
  "key25": "5KKawUECtTZpUScKTtyMyP6x56YKUaK23UnRsSFCvTNmgTY74eeJKcCtSKZYydwoCGsQP3dkRvZFSyjJEhKL9zby",
  "key26": "3EqdSYoz7AXtCc6mmwR79T1CD33pMn9zAycF39UFyhpmQzmm1cB9PbGnz2XkqKBBrbfABNtZLFqBv3tgC8wYpbjc",
  "key27": "TGjK9gceXCktgRjsuhcKPK4NmDbkhPtSsjZJM8LyNS2YNA4MqtcfagPCwvVwyAQ2NHKyDXLXGRkLUdXcTiDwZHq",
  "key28": "2qiAmneusi95ncwDeZA7sQBnG2HP19oTcBsWCokxPfKfX3iaiJUUdodfE9iqK7w8GVJ9NLLak79iZWhgPLE2jrgz",
  "key29": "5tryKCqxqTKwfCE7FeaKBxngEYWAuNSxF5T7n55Vh7NvZXkGzsyp4A71cQaXdUuBqFtxmANbrw7CJm2j7mvLmJRJ",
  "key30": "5uHvarVr3jHFgArSfsqZDkpcKfurKufF6tfeGoC9GJugiaN5nvqEBTQzJwZm6c4u8Dv8F4pDfsvFqHe6R689DT2e",
  "key31": "3F9p7sz7b669rw69HnLofbGUGRqJmFoJuExd4Y6VLEnoxwGEfEfhJpEGSKfqJ7zRt9B9wZ75CWGXvGJ8jheHQxeV",
  "key32": "4363ThLXhUeKgrbetToJVyQEyueuQdnRu83kCzUnCfcGo57wLKCxBtMCpart38uoF1CtnSiRWLuc76hhQsFQcaB2",
  "key33": "4gmqzX9PThroZDoFLDoFAExKVQJZ6Sn7k6z6aEdtTu2sXujrKR8xkmCPoQfcAmTGuATXSPwdqj8KmFzLMAG2R3qU",
  "key34": "ahXqvhAdSnr33ZgWsq1cxWxQMaoxz1zTEShyDBH1AQbGKihP4qYYHVhtRpjCFsfM6t1K2uCLHTRhQq4reBFf7rL",
  "key35": "4g1Gqkm29eoEprd5f3e5bMy7XSnavSjshL7AN9AQ2qT9eUWeZETB6xepFUx3gB8JkY59Si5c7GhgYQuo7Vtpvyy6",
  "key36": "5Vg82C51qLkTi2WUL2Z3coiBGoEmVLCk9WwurZzcKLRoDMAzmauoGZdiqboXQd67eEg8vbE45RK53YHkfzgYUvVS",
  "key37": "4gFWTnWekUC57UDCFbcqxnrFBU1TrtKhSdac2L76yFZCUwxgDgbkT9Xc8RRu8mGYQgUx8fnGUEmsZaKN5skZDJQk",
  "key38": "3WPSoS1oHdfkK6CNX8T1hkvAgZxFYccFC4S9hvbfn95PQP9MThNBqba8zoo5GPoYTXZnhvaJ8Wz5KWjhXV4agWGe",
  "key39": "32gGR93KmvHoJkquC8iRnomKeKex7ke8x8gx7zuhzxPjcNhGu5f2FgQzycPJqEL7ibecYd5Xp1ikQqRYNhXN6cwM",
  "key40": "3Rd6fUiUwCy2ym8wdCqdWe5jZ1v47fcq9k7UEtZpHYx25EiD67L72Rv2Fn4cw342rLx9snxkrekbnr2vK7wefzY6",
  "key41": "4AzJqXgPdAnxm2UKARtfS1HjBkjQuUMFLexzGa6yN71SeRQp4M7c7DihJL69rCa81fR8Lrx611o214mwPQwUK3rc",
  "key42": "wGnXuGGo8mehvgEUQWC6JgPECMLkqcJ3t99c96UfnCd36d8LCDjxFyNCh6E4gbxULsH38NNYih4Ss5MnBc3n65C",
  "key43": "3vcY4XDBMsCkcWCG5ka6uDuA4XYPeHExJ2X7EhQqPUsiJDYNmSSDXxJXYbCXV79DMPfCNSpoj8eYN1YTq2LNnspQ"
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
