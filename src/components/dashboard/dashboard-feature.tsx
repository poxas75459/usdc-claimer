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
    "56BXuWHW5detVWsCtgpujnGov9x6FYVCAi4PeiC59oEAXX89LyRRxpHoRWtGPoxgmxujAuViv9sQ1FXvQLM9en5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64S4eqitkmEXa5spHQxAd5X6mNvqkbmt7fHZyXWhaqQykCoL6W2SNrbHjCkALMJenCwHM8iEM3mLm7VRk2T8JLid",
  "key1": "pNfMCTSnFSZ6FB5ue7oYACdXMJydyuSjD76EJ9P1iXQrB81vB9HdK67vXTNXBRDZaX3bNLPzHmmBy9zHaL85xeX",
  "key2": "4kVFnGBv39wpDEjVoeJVpFecoCYbm1WKHj4MX3bVa3gvGhKLt3RtihU7oYZ79usTHgLW3RrZxxEx99nLv929KjX2",
  "key3": "4b5Yz14L9RHWPNgM59je1Dk5CCiTrJJxmDemtaFHtinQmyANw7HLoWkSFhyX7jVbkGC2GtdGsVZBERuATH5wghvn",
  "key4": "4EwBAkuGzP7CLbfoGWhoX6LgC5QdYELE6YDLMP3gnqDttaNxwa4xhotbCRXWLPKRJ13YYBFKBG6wZKDQqM42jeAM",
  "key5": "3KRpEK5pTT5Mob7uAGExZyeWA8p2eLnnwAJEY5eGvkiV9WRtnZz1CavLzEXq1d17FRdZYBGGxwpebj2tZ53n3vPd",
  "key6": "2PwxDJVwmRQpttdpM2HjdEp5BuU81YDmc6X8K33W1vKFbJcEz9V1o8rwFjhZfzvCu5L8ascM6zJyRvYNJZMbcRmB",
  "key7": "4LZm2MwMxSPyVQmZkhejMfCzi9Z6AQxyGU5D41HG5UnEMq4tM9acmiQGitgpJ5RndF7aEtz5Ufa3TRsuzpWUybge",
  "key8": "2wnZZ38GNZiXYKtm8CkMPHA9854MbZwVL7Sat5jeg2mskGjnr5RHrCsPq1sBA16eWUwAexQSDUUQqgVzmr9LeaW2",
  "key9": "3kqZpyuDUaSKEuJpcMvxmvrZkZUZYdgfJ21V1ryZ7tPdKvZ76aka8UmNE8MUrJTqRQ7BruxkvtCqMdk125s3bYym",
  "key10": "4Z27acj8KoHKA7wzdeHs2pXYuH38TAVG2qGyQtzb6pQWa48GaS4TKSLZqutj8PfTDjCqtrjFL6PNnG6VQnsGRShe",
  "key11": "SrvDfbi2MpL5gUYDyUSew64A53ZoJCBztMKX5fAMXQefJQzU59ddG1o18Pc1suA8Ye9B28F16btcpQFvvx9Nt9v",
  "key12": "hVodbRXEFaqUDmqSYJVbJmVZQnGYGRonNb3QYHRMwJ1wH2zaaxi4k12gQVQ4ytRpSBBxCQg517RADh8wyCNaVVw",
  "key13": "5h6m1EUw2NxCduVYmYDd3BVyK2kpEXELVp6fZ7ZJomzRp8UkkwbtKX7wEAY9X8SazH5yBsPJZ1Zb2FnpFpLKxMBs",
  "key14": "4BzoThGBaVacWEbxfQS4DB4iHbr4UeJvTxw4Zm4UAdj4jg5C9g9wd7c8iyiSHeXxXUfBdFD6bwqJDPMHWp4g3RHy",
  "key15": "3a697R79S63A9WqsKYxGD27gBG1kaoLRZE3etD4PNUSG2hZ6qZ6etxCELuSAAhitygGfixdjoKipdvYbKQkqZ2ws",
  "key16": "4tB3S3DMc8bxaSiuNfvarWtZmhC1uZmPZScG4VNiGBhGkKFUKBLR19JAfHmBTNFRXBQUYfPWr51pxLhy3LxyRdpq",
  "key17": "3j6MTy2a1M39Rn3UpkEE88WsgV7ktuSx8VZMbnt1tBLFPGZcwnCWRHAy3ETQL3C6jyUiuDVB2Boy7Q1u4uJuUbq8",
  "key18": "3VUDQitg1ALei5FpMXeUe2ZNgaaTRiy45dB4yqv9MQ1pdCwVHPo3czSHN85q3Zk5z4WHDEz55deyZtTWTQr9FtBy",
  "key19": "2Nfp69oYUnbTZzh36xiAwdJpge1dzW7SXEoDvoGBV1cuvXqbjJLaSp3R8DUGYbNdvXH57VUNn2EaZVUHUtuKNxdB",
  "key20": "o42akG8gud2pXEE29fwpCpDBZBqdYByj2t1AAGTrgwSVcdmdTzN1y6b5iigmPusknLBzsxe9zkcoRgrNTd8yZot",
  "key21": "2eFGM6E4FfWZRbjWSzamLnNXh1yjbcyX2RxWPBm7TE1DxwDMJR6u5rQZ6XUfmZamY4p3YxiMABP2HFpVN2iS6KXH",
  "key22": "2KB7otq1RQnnAxaYGBb7jS1GLFesgCg8UxW6nSMbeQ5YaJRk2Lb2q9YcREmbjjQTw2i3bbxPEUkxdnfaQA4syUrm",
  "key23": "5DzBDMD2npHCr6iwVw7R7pTAxud7wTo3MymzSP7NkUCH3To449SNFBhk6bXRSpTAdxai2GGtbCggEk3aG3yQMLnp",
  "key24": "yg4kgnpBEJ1RG5Yf34zbpVmMkuQ6mJ2Bt9XcJ3BjTPqgUBRwWjnaP9SEQFiGfkw2jpZQLTjM5ikTvbmGpux3JUt",
  "key25": "3ouLgZTFRdVG48MKBkxxtrhTryipU1hJjSJrrBa7Kyn2K42Wx7uGz9wvaxTBYNK6c7wSYbJ6nz72RNYtQjG89nVe",
  "key26": "4ycfwjaoZYLD2AG836fMD5e82HoGdpbpFcabrEQGSQ8gG1K8Xc8qy3NLJ55ewnm78iA89YzutXGNmYUwtE4Tz13Y",
  "key27": "5xErALxcPhd99K9GFeZ9wqGG8ESeLUXL9mgshpEiVcUJ9V4HWrKJCn48V7LGxPpHXoaWmZq3463hMz6yeAUainYW",
  "key28": "ZEY9YXA45iVwboVdHuzfzVzoFGbVJybNhb3eBiHmAyo63q9f5Fx2AusCrHfJXmksMqt2eFQAbuXDzy6N4CSNZMR",
  "key29": "ak9yNUxZhyCbV5rrtwEwEdYxCi7uA8U78teCEh8KtCPhggaGuaAnnuM2rScHpsK7178bZs1kV7LciEWgD5xYeBu",
  "key30": "2LanfR6bgXtxSHjDBwqMjTonGByHwbWPQfT866VAL3xAr1MRSHxc5vhydeEvWwmW8METQ8VA5wWTb4cq9toYCdTD",
  "key31": "3iBr2z3wnYLukUXRJ1s4oHEzRReesWuGoGnZ8FXd8R3hboKABWvecVy44bcrUZ1iMkYi6ssazyyqb7gTs4r5PoFF",
  "key32": "5jVapNzCAVerAZUasnt9mfA2XccusbMT4nFR4UkufgANz2mHVAgCiLnZbwfrziQ6k6eZQ9faubtEc3AycX6muMS4",
  "key33": "4qbztD7HxgVEBcWHSJUr3FVooAzNC7mt3rGnKQo2VxdoxxWpmxKh55Lpu3CKMXw3oEJTybUw6JRbPGbZXft8RpUb",
  "key34": "391PKiyJ9BPYs4HAsnuvnXbkJpW56zZsZbQaXGogVeVdnGvUNYb6vbvHdGjcMkpUU1uKi7Rt2MTJ6PJYGfMxDnpx",
  "key35": "PW8dN6qfcSSffED29iTjpbLJ6gkemFyk9Xx5NXXgCaqBG8w35SZQnsZ3xGk2aFwrju4o8bxaHHRpxs3EfPSWXzx",
  "key36": "2rY6j6ygSLpkRRbimP6ZXpmVFbLqXvAxQ5vVsYWPKXxsUHVdoqfHSRqEFu66M1XpVgMur2KbdfLnwFutmLjbiZAv",
  "key37": "5Yt6XQEUZBorMExWcmDWnLRWLdZjWuu2whxX3FsQkVqDAe669fKSF3q6bYvwwFSSkwLeKNmvoFuavMLCwmrT97jg",
  "key38": "2w6AKSsGzVnkFPDvxhDtkyrMwA35jdxSCPADtPyBcXJNWTbnSgRMpkN9wevA6DAE5EyFaWHrQYwfZzDZWwpCMGa2",
  "key39": "4PHQVhXGGyQ8oN1JjQ3bohCNGUv5k6YMQzNjP4yPrUe9bL7BqGnn1pWAxyQF5SNHTSmyv3yGQPs1EVkksjhvAefa",
  "key40": "5WDcknEuFhJhvh94K5cFBY3q5XD7k5YygL71iGR7oBq8vh73jZPUq2hXh9TmJNeyhzD5LFwLUkZNoYwkuEt7Zw45",
  "key41": "21PwRvFnuaiNJhu2So1sCX7BP2QbdVrmkqpVoov3cERvMLW83zcyZRyroNhimcD5MFQ4EZqjwP41vTwKceSGwUkb"
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
