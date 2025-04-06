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
    "5dU91TxV3jvAjjrtKF27uZdy9A4xk1e9mPAQi1BTvggURZwRJMnJtv4BrLFQCxFHwPN5RvvixUCtbDphmD5viyfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VS774zegEKz7WS7QCvD2wcTCY3dUVaQjaXCtfU89yN6nbyL3q8VcSBcN3A6UVoQVEoSwu8mpbUeuWBkc2XcWpT",
  "key1": "5KGieHamxiZbwSt4btRKKrHW5zsWzEYxRduX2UJ79WVrnp6GHe1poDiDEXnqUvicxiQQoLYbKxvMKvfgDkjv8CJ7",
  "key2": "2F7iPuktNrQMxTTGxwgt3kNQUup9uvwhSiWvqSs9gygbGGTEXVKyH7F4wuxQPpPcfRXbKxrbv1zp4MTNAkuRSqRc",
  "key3": "mVKrJxCXKaJzATJS7T2LQ53p6ifemfAvDQAawDyakJWQBSPwxb8zZbq72zWMXYVrachzXBrFqyMdqMwpMJjtSTK",
  "key4": "3ujEHNyg1p5DxkdqRQHubm87TeDv6KWnYp6AcC9FTCwFEw6KULAzQPccFHGZV4UeLm2CricbizqSkKcYxa32bRy3",
  "key5": "3okb5sZ2iRYfPgQPcraAREXp33M56ZpCCrn6Locc3RxjMsZjjRxt5u6a6eTAxVTEpCtHtYbJgZvHfK6Tur7MNAYK",
  "key6": "5gARhzd2poiDWd6sikEwYQEAxHmDhtYMjYqXBLMWGDizLwdYAPYHVFq19ooViPRKLyCCNr35EznGP95hDKhEh6mb",
  "key7": "5hXzH2nqaVfPzvyZght87NWRu1F1KL4DLct6wDMPTBdrH8kXbFFe372SuN4KVGwkZVferJPbhsueizhiAh2NyAdc",
  "key8": "4qKVyr7zaEXKEHNGRKrpyyq22qAUgdUN1HQXq3J2s955XyZ7tVJYVCYskQuSPGEzF2RP94S5XXZEt177FR28mmZy",
  "key9": "5VrsKD7yJF6zcDDQyfFQDT3NEE5AiXFjrDTcU2XCL4tKq57PtUnZ8eP5cSF1tLy5v9B97Eim8hUsHPCz16ULToSJ",
  "key10": "5u4L7w7V4r6p74R6ZbwaWF4k5ihG7sAHN8aLWoEpxtjT74vuRoV2erpzVXS13gqYZXcR1VDxFkfTRSmm5jsYihW7",
  "key11": "3QkVX89W3rt5DtRGgfdiBdjgortWqxhwHwkYsVNT44RaPSmh1KzDXWudPqyBYnashwmTAwbrK4vMo72pN4ERekxe",
  "key12": "3zZ4onTyS7iaFyhRz9rovLgiLutejpgUE9gteQbrVr5texUm2zzDwvuVRMvETjmmKfZBh8hNVt68B4GBwarL2qCG",
  "key13": "3LucS9icKdi2eNMhrxPE642WevM6R9u7U4gJchnsTQW1U6NHWxQrckxGBr1CdJTRYVyMByToNyzgv4Z7mR1Arw4i",
  "key14": "aQEVr2uikP1Kf367XjewLZZ4z1sgxYYuMUUXyYwDC8TjidZHgBmmLbbXSBCN4gXYXhUY263sBvKxtDKPnY9UJZG",
  "key15": "28bmoatJhMMmXBFU2qxUS7KeBLT979oR4LjA4qAqZYa3Dr2fCWg1WcvNK9a3CtnNs9FsAANGxd7AaBCGrwFY1kZC",
  "key16": "1V3EbaXGkCL4b2ogBEkZe8ViDvSB8cnHwTFqmzVgVPQVXxL61y7hNyJGvw2pZBTjADTuEoCTThf6wfqJfSiiH9y",
  "key17": "63e36vuZ2Ezb15AbH3cHXTJarrcT7q1bRvuBQo3tZLMm3WRghguqb4P3Emcg3PPKvoFNseEwDhaPkmjjLEDDibo1",
  "key18": "39FxA4ziFHj4TsGg1P8etuLkY5UYx4adSfJSoZ4MkgfLLy8VYmEdrmdMf6ygKjEeTG2fAmcacXuoXXCGjFbrRLXu",
  "key19": "4nw4gVKyi6qDSgpPobSYdkBizUFPqrpNwR8PmsTNuGufmajcX2pAg9QRDP8onmhtdmy41b2MrbBbMUjMmJQ2M3fi",
  "key20": "4pexDg84ANvns3eaxKjs6JAXCcAosuWrkkP1trmkGoEgSZAeEmgZJKam323E22WpAMju3xUNeoVazz6dFDabCx1e",
  "key21": "4TgNpAXUQn823jKpfMYmbcJSQXRBMsej5CAG3NPsU2vhZfgsPEquKzKrSE8CHJjCeTVv95Sn2jUEZiSxcp67sRNg",
  "key22": "5Pq6mdUHkdTWfUUpcEyV6EUpKUiMffESgYPuEuM6ipp1V8j8Yf3veJUhq859ESGuZAoBRNtqUi2wTNdXp3G79MEt",
  "key23": "4EWVRnogM1SDKvVsN6evHjNMA3zwLxHXaVfTjBaEr4UheYvC89PF4a5u86ZaLdiqtzsAHBYfmBBBvQyjSvNt5XwQ",
  "key24": "649Vcc9wweVyrR6e1W7kfoo5nJUJS6FWDqZaSb2WhArf1e7YuYJXgBpmojBWebbKu3L83QcrARaTgTmWSWde8ABW",
  "key25": "3yy4N6RVnBmf1T8fjM93YNyvbz9Yo9zMBgSsZK1yuy24btDSAwfBDRf95cKrGWifnVa2PQBjWaJnp3EHHnVk9Stv",
  "key26": "3VoJ1zAADwdPm45mPwHtceCiWzbgkGA3nng7epFAYCr616HodSsMTVaRJ8cqfZixP8oDptf8NLsEhtUWiBySRAjQ",
  "key27": "2C3P8nmBsGnJu2vnvVF7r2LibGWVeMtaJNWJ1kgVXezFjJpWraFt12t7k4swNr136mo2MNijyrebvnniJ1Ve9bvZ",
  "key28": "5ZGyLk3XiPttRj14m3evg1bxZFDfAQ9c61MwpV6ZpxYEA8mxuQT44Dgx62zEk7mhRe5irtr6jifDwypxMe5i7odw",
  "key29": "3jiow3y9n5KdbpVtWnr5cpXaHcRMsH4u1i2GjUDHLu2L7CFNii2xQ67y2M8zRdbCkUhks6S6ayTWGhCYNErCVJTD",
  "key30": "3RrajoXCLWxc7eq4znpSP6YvUF9JATzCKtc3VbT2TaEr9Am4HRP7bTqbuFPjDEaB2qKbAR1ejhR2FdohiVewbnYp",
  "key31": "3M6PHzc26pUzTQVrJsLyMkM1XGYmuPwjbxRUr1kNtZKJHM5irkmrDdk7EZNyDQXouEHa1SN6wTBGPVwdC4HnvhMc",
  "key32": "2wccQwsKmSyHQcoztpdBsAhpiNLgisgj91mkuYcFXgr7VxNyzjoZ856YUZVYREcKGjbehKETxv1DWba556pJh7Yx",
  "key33": "tiF5oFWWEg1ZmTHDV4PNWe6hqsWxGAjw21WXAdTemqAFygQL4MLzM4GNHPm2u66HMNyD31JwMbpnXoFWRMPiRkU",
  "key34": "3MqYxRyLJyibL78g5BkXeM9EhbvB3JPg8vEdqhp4WHjXJfWXph8xwrkS6ApGEA7HNGBw4MKjLCd5tJpoRCFDeSw3",
  "key35": "icwei3ZrGAmUu4c8TAezZGacUoRYGvuYLHWzrs5Dninanm4o6A3TS5V1mztEHCUQyHiW2vQKJW9rY7y5mVHgJMA",
  "key36": "464hBzihF9maV3rJp888xdX5bbi8Xhx6GY6MyvRck9WUYCNq6BPAw2F2DKLYpbBdWD75kDRtzkhrEziDgFWreP5b",
  "key37": "3NjGhGzH35VQUpkipJ8NtUEgZJbEQyowMpnTx7GNsKSaMJ9EivKVYcG1qdvWyPy3ESfhvuXW8i4yhzDBPe4JgSdU",
  "key38": "3uv4s8Q9ZBhrAjdELbEUVqUbW8pviMhgAyed8tApzgHMRqqUCs4psNGYofSqPcjfuuZTgaYc1QSMJ8x5EByfgtEy"
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
