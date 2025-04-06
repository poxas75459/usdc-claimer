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
    "zNnHoBB6yS7YozpeeoRKNXdECdCm6xuFvjhrNDjWRyG7BQ8BWS45nZLa3mDe9382ppiCzsER7T9Ve1JJsabBkMV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3REPsbcC4T6GUBRSa1oTFCZoGdMYt4dCr3sn9EWYimu5Th4pkb7q1iYe93jevUXYxnLRQE8h8eqocqs6HgJ6vMw5",
  "key1": "4kiJYW6KNQi6hfXekAmwoE5ab9vV3uo122tbvDFJHy6XeMMXX1QkVpnFayZAH6KDYo6ThhEnrhqH5Po6QwKFHgns",
  "key2": "3Hf6TzmPn8Zv2RhJv33qWvKjVt6yGUbZU3uBkF8L9ckodnQrzYTLC1e9seomSMUmL2jNmAA2Vcg9Linc5SqeBT8M",
  "key3": "2x1YzGQ5sv8xhJX9GrmBad1TAai2PTYZMotNav2QrYmTkCtauEH8Jchg4UPjPx8VUcX7qrEMzYcL3j7Q887SQWfh",
  "key4": "3uGvGEbKJx1ydcz6MjASd3Z6i8D5mjXbptjEgHrAUrMCFxWofkJYpyQhGKGvwpfCDaHe2ahhChMuAc1bG3ocbUQU",
  "key5": "4MGyyC4uWDB6yK8ixuDgztJPwM8erZgx9kUBseciXkVobd8sn7p72cLaCuUrwRgdbibPh4LPBqaa1EJxr1kq8s7m",
  "key6": "4i8PWrn4Cy6JDSXiaFAujQ9Aj8mLdnZR45eHcCvAP9Pwp7MHpTs9cSRzr1ArXWT3oJgzX2aphmTfsrHD7H5Q4AtF",
  "key7": "2E7GHXjbMBnhqgXzzRLEpYMkXysWtyaZ1WjPyR5NYqogWgojrSnfuE87qAKgDvrCswdFqqAV1YGkXMDSV9BB6yx8",
  "key8": "29yTGkqrXUe5vFeMVfvvKktdaq7nZhj3jrc62V6WZa79F5ZFA1e76sYK4HQT1ZPFxK79FBK34axMmeJRQrRAWqgx",
  "key9": "obZYiV7YoXpGxVrHunFxBfAYBTacrHtpXuRW4asYGkYLMvb3SREqESXVshV8zBkamHsW1b526m5eBdgTxYBvFwo",
  "key10": "JSevMR1STgNwfzMcur2TeidvfU9ut9bkjxxqT5ZuYv3SZ6Qb9pc4arDiiJmdpWu7DeVY83R5WDzgP8Qnx1yLQZu",
  "key11": "4qZn16G661PfdKGWg1vjQjj5wYwSrLxXtKTTu2EpaXeR7SesKf3VfHDnQ3TzimTprmFRBaF6AhDi6Fs8x1mZNJxH",
  "key12": "3mwboZ6mzMuqtM6wfSVj3yzKMDSdyUhVVpH6xvSg61jZZhHwSLiZUsykRMsYYwFnyfynUs4pcbrahNfBW7yP8bzc",
  "key13": "4MPo8qeJsb8pViNgMpYT93TdZfn98q9WWYzMY15uGPm8Q4SsZoeASvgG52fU9gQ2DDxuoMcYtaz2GzqUmQ7pJAXh",
  "key14": "4xgEiHhWqR5vXL8nG7aF29YXFPmj3YBjBV3KPYWLZcRQFDjz6BWbvmrDQSdQLSh667UVMJ5qw93eLbz9Y6vuCFqw",
  "key15": "5owzSf45nBsLVDkmLgyb7oVG4gnKtnRNrX7ijoX4fbCVxWGk35z6TMwreb2QVjVb14VCY7eKn7wmcU53MgmcqQA5",
  "key16": "5CQ84DJ25YApuhzHVAHDC3fZuUpASmuP2AgUAf2QgdVpS7k6rEb5wBTYY4nX9TALbdoAhDJK4THZE1TuJ6hNeasQ",
  "key17": "5yCgPQP8Ae9Mp2JWqFaNWD4Yn4vsqLiZYMUeUUwTM5CDF4dGzRwmco5QnXiz26AiaK2xgySWwByxEwxtCb8xyJqf",
  "key18": "5DqznTagKib19WHtj212jrjPdZEg6VcbFFAZ1SWDCmHq7NVnui9714xeSYujM3BDYWVnPeRXN9vEwemhoP8xdxvH",
  "key19": "4QLhCgTQxzUfFBRAoYLK2DutZhF4ymiAKpLCQvxYP3XHdB2Gu6w1ycjWrX2DQzB31whYBxh3sdHDyLDjR5TaEX8H",
  "key20": "58WC6T58mEQ3pa5Ju2pifFEyuCYQSFZvoihZBAsZNVepduNJRbMsRrEBqkk3ThFe3NjfdgmMCtcJeJUm58ko8FKE",
  "key21": "3K4c4JSWgFNAT9Rm8eGeeRwWDp6tSAsYzmN87QNSkbNP3ExUgXTbriNH1SMbfBwZJyAoWicvX9oUjuMPcXpRVE9j",
  "key22": "3jjPYsyij3iNVB4AiDPTU1CFG3TtgC9qtRDMiyGUfuEAJ9r421ggSQ4wH1BEJsVFHcaCoanjztQXckfh48pSGL2C",
  "key23": "4LTjYKQNCG8dBrGascsSBiLQhAQWW19RtdFWWB8xFAbEfNFKxLJaEfnC8UZgjUgGwVfveVnLUWdsFyktmhq2RqT3",
  "key24": "5ieBQzybWdUeoF17h5CDiL9YfJ5KCBbDq76ZqqJ1S8j75ZC24eAHjUYpyPj5EApnDEZsxKMF1Aa4yMcJNXYFRsVq",
  "key25": "5XpeazfjArXEHX6VvbuSdJsfhabETgaKRAHKTK9WgEn6moP545ASzZkQKmhZP2sBxhAgYgA43bXD9wybFU11kEQb",
  "key26": "5faQrg5ieSGaVePqxUDcHXMVoV7HwQbv5iRns1zp6Y8T5nFvodgLPTDW6SkxBF22mzFfPFwrstKSFHXyMGs7kEq3",
  "key27": "25yg1F1jhxnLm9FETf9MDRkpLWqhZkNs7qYqRNivQwmNrXKGAZcKmQqFVzCR6Z8P1fnmrPkXwGdxEXPkF6jDiS27",
  "key28": "4LyRc5Zs1LzYFxUnWNUNdJiULvzFE6j2SzN7jr54F6dCt9iyAGNeFg3T7Xttiic5xajiiapZW8EdAsAmxjNL6p4y",
  "key29": "wvntggEsesyq7WYdXaD5XBDEXwz7r2bb3QaSMsES1dDKGBafuQnRQVbYkSqWSH1Hh5Wk3pVfsdPYwtbtw5bHhsS",
  "key30": "2Wezj7X9VBJyDSzipXRhD5TqjNgXLvRWtCNG57Y2sTmjUj2qSrXD1yKPjFk38LThAhD2SX59bYBUco9UJuCwrioG",
  "key31": "37mXd28eGorQMeSxftfck256WBoEd7mBDJRCoRchpNH8n6KscDQigjeZuqX1HCnKRUuj7tdCv3xfEJiAtEFAS6Bn",
  "key32": "3rvcTMXE1SgHA1NNc8ipJDKwK3KLdyQQr3aKwtr5wGKcpgXbCYoo6iGVsHJFg2oKrceUnxZSJBFJhGALENjcPpTm",
  "key33": "cYz9aRRuNvxX9EkYfqW1MUvc52jJbGUv5SAzHqVP7w9gQxGLupSzrPWofajFdz3SUwZMyhSc3vr86vBMt7ceLMZ",
  "key34": "2BCfqQACx76xQC2tV7M5iGB8nwFhm8M3xbtcqqhhm9iAQWw2SWcXbJTKm2nkdZsdmnw3pKQMKhRVSJgMgJEKB3HM",
  "key35": "3bn5rRfPsLdZUtnH8YGVzmBTJiriq6E7EfxnZ42faistNC7kF2SzZPhXLzrvfVGDmcTUHcvZZCjwRc1a4886UtsE",
  "key36": "41ZsAqCxf3QTMAL7HzcEwrmnAE5MogZj1oiBMtENEMbnrKCGNGiXgFRGWUtGVvJRF5KPLhDpCGyHYcLMUtzq6KM5",
  "key37": "5TVU6d8tehqc1V93bEEVm5M2C4d2o7hpwJT4Kwpy7CLhTcXamhHJnkRVGMihcALN5ZqgRTTJMATFGjBw4LkZGmHS",
  "key38": "WhUfWz1QAW7jLmVE8XEWRvyke5Gk6hUKSijxT4AFGcQsAGoY9DHHaoL62Qchu2Hxu27tMDNp8Y534F1N5zkTx2j",
  "key39": "YyahQv14heiDn8mV7mktZ2yJShVWSDzMhVcQfuMvSZh9HZffVos4qxYbo7ag4uTgJ3LXeQymNpp17V8d8tVP251",
  "key40": "3xvP4GPcGvEQum2LZKBhAMh7HniW6uTMeXtFD53HBNhYdEDdJkrfudgPFnD4eTHoz8fnnjYqvHXrDZ2k4Lxn1TF4",
  "key41": "3M9YUxm4spFnovDJhZa8ZfbnYzNShxxw66J9NSCBMeguzbD322GPLjqTVVagUEagkmmFsSrMCFbUHbvvVFMTU5sk",
  "key42": "3pfAPaxTF8GMpBoqkGL964R3D7jbk6CVwcoW8iYngG7DiRsHEjovT46HiZrAhvMF2G6znHZhRLBSjNDyvvaV6yCs",
  "key43": "3VPADfXzszUaV4Hc3Rr5xYkpMJUAjpzfrBKj9u7iyuzWB1UjR3fUCFT9NRwiJis9h3avtukntbpWzZQgmTyJxrNz",
  "key44": "5Z23cqB1sbWyJmRTEakDSzsrfnWZ7J4d78wQE2XwM93mYmED9QKDa4YTKEyHmvLzB86yReCiqgKqJxCHqLJH3YWz",
  "key45": "qTugC5N88iN9w2G7mzJPP9pdAfkRG8G22tfgmYE36CksR8c4Svvs6TQ5FFzcLJiDkRBeWLgQ4MSa1ftrkxDdykG",
  "key46": "5TwAWfkWGprSka9nGm5SQRKEzvnEPGXPAyjtFQcBrQSUVs17awcJYh7Qfg2qHea6VGyKNqpTABoDYX2qqVeHiupH",
  "key47": "3nxHfsThvbdP5zwezFR63PKbhVubyShhwmHsXdAJgr2T48oYW5acBFisv4QwEkCwkfPKatchEQWAmkbdHVP7Z8v5",
  "key48": "EZadxaK6iw63qGeVfbvqGDPMnNLjcQJBmzTBM7hd7qEGYPshELzakuknZBCa2G5sNFCzj7Jom55QmHsLPQZCyYq",
  "key49": "sfibvwSQswGvWDkVgjCcP9K4Ec2mMbig4EiJnwiKViAm2VuugSvFSM3jyzkgQiooEYXQPVzNv7FNthQ98csiMab"
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
