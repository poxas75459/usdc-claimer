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
    "22F9nRPWuijgvATDi7tkJVkPyVA4oZUrKEDvCF92cQR7jdR2nNiboZ4JSUZYxAZ7NjkZXJEoRwpG6GnZuhB4oacG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44HXfnqr7nBysecjGPC84KMudCjgUREhDZptdbQnGAuULCukV9RkKMgJpAZavPSearji3h4JkYDczRJzEUErEw7D",
  "key1": "GSZqpWTCZnQMCd3mmQuT9HfrFv7RyewnM3cJw9awEGubyMY4Ay5kv9rZiPhBfyzkHqpSDk4smiTvd8k5FDqj2aA",
  "key2": "2VwyNpd2NQSypzopVU8aHmJHPidvn18VqVbA24bFDcwoncV4bPUU5dMVbeQxoSGN2zG5VCoJHA8wqZ4xkVXJxt7Y",
  "key3": "2qGkxcefkCRRb5acNgFJk1BCeaTgufuu9bkd7CvYtC4yQgDvjCdz3Bw1Zuhm4D3YgDUgb6iCURWeAVxJEgdz5wR5",
  "key4": "nPvCg11VyFCjn3f8qDHmVnhtSCAvpTA3SysYL2JwbifGvuyRP6L4wZ5Kicf3NfTe981LNEyQ5KMSREAQBm6znGP",
  "key5": "RpmDLnt1UrcrA6yr3neYfqZsvwUUqeey4R427m1gp2vrw7bHd8S9LD49gMAxC6w3KWC8F57FTvSzvt2AALStg9V",
  "key6": "33nDzFQrRoVtcNhRJWTMmXuPpSRt6FDFcJHvxaB35Y8tWdbLX9Vos6NnxXRSLc4c2zbSiM9yjfPgvyGbNHxLisaa",
  "key7": "2ZAJHom2iLnQTzwhsLeMZJnf3WRcw5ZQP4UueLLtY18K2j4ALLy8vXwHn22LLTmJchGqgud2PUaVKiSX8MoxiNKT",
  "key8": "5Qa5xvDpwoCStA7tbqy1PCLLPv8jXzRn1aLEDWdds1tiqYXp5PDhRTrA6PH6hhTcYkvT5ynebg3vgDV6LfhMvSE6",
  "key9": "2gHMCSa5S5RRp2rFsewvuGF5qbnSGWYuPiLc42AfZjVhAqhyxxU3i6qxfrkHEWYNF9NNGAwiAmnC8rPEVHXaRTXQ",
  "key10": "wiuDBoaPqDc7XfDAG2jSWGhPoqSsSYY8SiJKgHjiWjRNU74s9SDpy2QBvsEdL5uqXRuAd5nAjijNy9Zic7YBN8N",
  "key11": "5iLFbeUtVEDC41pC7qtBySExBfC7cznkfEUiXErS6pLmwoeRFyzES47U2vaMkCzagNgHyicc5LgyMEpH3bJBuad6",
  "key12": "32uX4BrRMqm46vvGvjkXun9xgHKifqPJVtz6aEV9cuBx7qHmsYRHPtxwnWnXc85DxscQoQoyQWnXnxHRajH63SYj",
  "key13": "7D19P47asf6yMRTLfk5aWRzdBeLFSYBfeLUqb7EwA8iJP796UycQjDKRY4kSdWASHYzoNKRFJpJKtsoGLkvgvtv",
  "key14": "3M4oTKaxLh7X3xguaQZi8oMMmFzdup8Yskq1N4vxHvk6Sz8MEkfBVS4HFDzB2nPtkHHSYzjhQGH9f4FZjH5ESzHj",
  "key15": "47cyZbYeCDnde6uJzaRdBaCcbxy6kGW2EgwdgPKv8nM9grhz4dBFzmYKYnFH5wBHWLfMsH6iFydtLv3PsxnxXhLe",
  "key16": "4Jk8fb3emqE88qasLcJ2tLf54Z5T1C13jgnmmYXg2RcCGbxPFguT4t9Cnvp8gqof3W6EHd4d6jq1RuypFnZ94QLm",
  "key17": "314tiEHmtDPiGj7j3B6iMs8oYmz45NXz36eHvDB2GnbuVZjRVmgW4bDZ1z4tVmuVEEBixAhKEndv13usKkyroCE",
  "key18": "2TGnMj6HuF5HbkGhDYBfiGqqpffdC1WxEe7r9UFuLB2yTgivq3uACSDSBpckm4V5cG71shW8Ebz3vu783po9vqfE",
  "key19": "4RvGMaD9ySn9X3o3ufUX3HNvC1x1mr3uAReEmGqbwzbooMkfXsPWhgygwkwqwVAz9bvsFnUqG83hr67ea3NMWTgy",
  "key20": "3efwiCHrrQenV16J2g9JtSzj1sTmve7carfa4rLAHhBcHbSHZaCxibsYy5WAMKxERHr2massojjRchYNXeJTRFzZ",
  "key21": "5K7qi5i9j5VSHupiyG8JtxkLpUq6CQzznPbuJSLvc3EU6gPPeRWcspLen7YqB29cF7gAQnEuMGTvUFpZDvo8wgx4",
  "key22": "5y782cA3tZj2sGk3PKZmH97BjvdkL6WCBJtA6oX1SqamUxXU4XqNaY52Q6zCb7tBjKajSKReGEteiJ9U3En2PiLJ",
  "key23": "3rWVZ9DAgP51DRKFGQ5NRNmxjqZXch8xVqPeVa74TmXYQSAbBVeBQWUR2tMszMapn3ky4XzHf47XNTKGM61ncz1V",
  "key24": "48BDupigQ46UCJn9XhEWbgPrTtLNw7u2bPmWFK3bfgUVKVTHHP2qonTU52jehJjkbqkxnD6MQqCFUfYTFTMUzbGN",
  "key25": "4otfDG98djiyAtb9Y6z3R7DJEZaJPb6hVAT1RWZV6Fo7PNdc6ujjWFoikP3sgFWi5Ad3YYBhRBrpCooEV5rzUqne",
  "key26": "4y5hUfkdWBr1xVaWpsbEfkbi5pqNKmhVPbsky3ryBvjCaMQmnQjTu3hXcsoWc8waaMVcLN4FF7SLkBZzA5Z5cVi3",
  "key27": "yK5hu1hvojiGgQs9fVM8FfxMgDK3uG4gBawrMrbk8VDm8ANApN6Z2nMe21ifXLHvFNfuPEVH2MEwQAQRNhQ6Cu8",
  "key28": "22VX2fqD7WzuwskyCYTknAyTdkFzdzToWoZCpvuuhhHyka2nEhvEXMGgDYhWQSJtVzk4ch5MJNpm8dpQ95NiDaaF",
  "key29": "2UYsBmfcpZ1B6fHZQ4rd4oQkhytQjyKYWenbCAq6L8QpbCA1Cu5DpVA41ogxecXfbfPKtxYnGaAHRDnLSnPNm9N9",
  "key30": "Q8M4LahUUxae6268H6JcaYEkPoMXkTLmQ1suhuU2eSH2EcDcZdiBF6hgJjTgfjFR3oAdzr2D3zrExWGrXdh9KR1",
  "key31": "33pPvKj8x4Tn3UWQ4TpUvbQU2DYh1fgnCELqn8fyZyJv3QgDRSbVZaxSL2fa5YzKmJaUvCYrBdJ23uqrSnMFf8WM",
  "key32": "58MwP9rfuggZeLZsJFkQEa9M5ZYPHYRNfgRfy1s9Tg6MCF9YY22WWzJbCauHAwgVvSY1XwjuZiPU3Wfusx5pbp23",
  "key33": "3t73w1pZkTkoZ84qMwfFFeF1Vmgh9znYcX2fQ7UH94TdvdKTyPxvFHjW8rTjRbL4w6371H2y6TtgxDZVibxTnSM9",
  "key34": "38XkooFHG6x5GzTNftyNadZmMfotQgpFFjTwKRjYQt5C69kU3WHWPxSwnwascjVz1YHFLi6KnvMDXvQb4XCyw3F",
  "key35": "5moyBhXNUzg2gXddeHkdxZYuqTi1bqWE5maWGhMPFDJAuGkmGVKdF4x8d7YLfFfwm1sHMqinniaCeBErDJUvDPu4"
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
