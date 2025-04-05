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
    "YV5UPX9EYD7nrrn4waJfM6SFqReG7PaSavYChmSYGC7peRBJP3Mm7LEiQSt2UTpR4SmwFGBQ4xmHxretC4RRern"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vQZnrQeCT5xBEgeDsZwPpmQmfuRxTqri8SWLZ4k2BXktZTwFqc9Dwipuqjm6jJLBuTeD2HJFcZBG9Nu6MNfBqhZ",
  "key1": "b43h65iajKeri1m4zzCj7DD4GF3atcLLPgfpVNRaoGYh6VERHqFUTtCxqL3rY1BwgNY4rRtDieG9bKA1kyFUzBh",
  "key2": "3zNG7Um7EtAJYpuxCqHWEirYs35epfRvtJkP7sXFv9XxnrVecVrDRP7iK3QTVTeedwgwWtGkMfj5fmgr8YH8tmgn",
  "key3": "3vpRtiNBBujczBkQ15CrDJEabkAsmRLvnCSd773mECdniRQpcWNhRzKNbiAG9NqcRYzcFquAk9ozrwTrSVZpRegB",
  "key4": "5sRXYEaw5VULCXdu1Kz1tuzCtwHFeVAKN6rMsTHVxjHhGS2QJub6mwM9ZHgCuPs5BLNN87qvvfJmtQfScLDuNa2Q",
  "key5": "2gUp7LAndYYJraXRUfFKgJVFKQiA3ug53cLkamu2EzrQ92wWX1SSwkkJaW4dQQJHqcaid8Y6tQo6SwJy2KWbVnW7",
  "key6": "3uqyzc5vwkaiwWQiBE5i5VCJntugZXUaveV7XT5M9zsFPuLRQxfk58eaPf9WNBY9ne2PwH9RVniQsZGFa4TNJnYt",
  "key7": "36eVwgpBs6sxk9xPYZa9PTFxgi7NH8Cg6dfxhsXfhm3fLLysq4wF6E4EdtKnQHo75dnVbnqRRzKiDDG3PzWriLe3",
  "key8": "4dJj16Q2KMVJrQ9jcRFeLrpQ9Rgs3vCPngf1vpKNrhJNgFBGYG4WberxWEuyD9fcRwXzwSf2vdNnYCZ5MQ4QznYv",
  "key9": "2EE47iC39T5ivek9CUhB59gbDSRMZhshCMtH9xgcHxGSy1azwu3RWyAwwt6WPcH6AQProxtJ6pm3BwxkXLVenAJY",
  "key10": "agvVkdDsjDxqQUqSYy76SdbJ3V69uNwE8qZtwxZ5Vi2FdL5ChWPCmYBz5NRaAUn2KTMic2m16AmbM9BqZf5v84d",
  "key11": "35ewHSQqSqTTVDvzRXWQa1NtkeSjPzSHrqRQt2xzrrUToiQJEPBofLqneNZHgbT9AZXi8XZgLbME2vRfYK9uzUXc",
  "key12": "2LiVbL9rqsuWqd4fME8LsQHBudu9WMkuW9fdhDHxXbfJ2LmPPLEkQvY1B4yNG3Ve8aPJuW4wA98fH4JNvVqXvLas",
  "key13": "gLLu6d7PHoyTE5RJy5QhezTTptPfi1rT13uuQjNxw6bzHSYFMAkyLKygK4Ue8JFiifx1Ygsg3veMNRhjzLxPozc",
  "key14": "3UfMnX7xavoD3RSxAvWRsmtcJj8wyjtnFyhfsxfnwWaLQj5ptD8ZGRYJA1f3c5SheVZJaGBZniWiM83SsM3DHWK",
  "key15": "LXn35m1o8zpnYha8eJdfhWg7Yj4RpEs98T8p1wXS4xjfnsJwGXj4yof5o7YQxEqeP4rPVe6frCQ4ZsKaGhsw2V6",
  "key16": "3GG8PGMyAhQSZFPe41irNdyiZqghWzemnrBNGRSeQPC6vDfgBpPSHx2CWsjRXHdDsCymT4X7A8HxgkC3sV6CZHrn",
  "key17": "UAC86tRPRA8Lsxbhbx2ykyioWWNrwW6zDn74rDJ5GcmQFKssw767vq8zJphfBj39mZJxiAsc3fGUB9MGLnCxphe",
  "key18": "3qd3hcKXPZzgXcXTZDh6YiNu1VLVZrx9Y4B9rQ8QDcQLt9G9AiFeMYYepALYaDNdKd8K1V3RQmE7NeSS5hz4WvmN",
  "key19": "2T9h8wEw8CUDdgtzLReyBb48FnPgK4G273N7u3Q3T4mvfjSxoKg7Xb3ckrsPKuKYtWGdmpE8oorNCrwcjbvfe3me",
  "key20": "2hZ8QuQfNuTfi6GTkKmiNPi96zjub6WknMH55WfPXzTg8r4JZYMxw7RfAc8nkYqsYCoHwzPR83ovABBGRwUen3u9",
  "key21": "DLwJWwNTqWE58dZgSUkMZyKY8LpTz4NmTy66cckQ9eFLh5Vdij8gyyg8VWNuDtLuxbY2dkK9E2zeqCfupxzHibF",
  "key22": "DxKFViKsNRYPrSLW1oJ7xVoj8j7adY5NioQUYEDRZx32d9iVZYfKC1YXTj4pc3C92zzdr7Ypb2pXEYJZfLxbWSy",
  "key23": "veNYXGHQ7tmDCXJfGBscsK3qoRu3p2xZ7tw2AdxRx44kKideH3BMtbPqgRcovvZJqZQ1cwiMBGz28UpYqWnViMi",
  "key24": "2oJ7GCBxT2xKfhr24uQXiNoe7frdVb6qHH9SRZNjgXNsqmThUndeS8cuJgxi3vxGuCjNzVuhSwVzekfCzJ1J98s2",
  "key25": "hjKtHuYRhjgm4NASntYvMRzczTYjNqvHs7qLXLH5rDx3wPQ5LTetd8fyjgWAAJCmignBzTuVxMQZVc3hEzdnQV5",
  "key26": "5aR7Rd1CJkT4NypmgiNkEWg1BYjUb1yn2dMDB3tvpUQkXBqe88A5sit6iZWSqWATyTEUECKn5udqrpWDkvD9iyVh",
  "key27": "Spid4E7mDNXrF8NHJpzFgM8sMcT6CzrvVK96pd94XdgcdfkcbiFL6rrycyerazUGxjPYcz88X26wysQAgadQVZX",
  "key28": "GLv7st2Sy3sXtB7RJsNfXBiecs2X8kMbyTGyRYKQs9krtEUU3PXzUU7yhDD7567nYuK3shdRdDyBJCLTjqdq5iu",
  "key29": "4STurjrydfyyALrVRtLp3h5HYDSn59d31V77C1ohfmUZUqzpayFRhRsfLED9sfSRUM39GtJ523UDEDpNCSp9BW51",
  "key30": "64zqV92YcjHwUVnMe4mKpJQuC6x3HZRFTHUqMdpze8Rp1zmyLLpzYAanrhGB8X6YR3LCkWejK9zfqqfEyxAkyyBN",
  "key31": "2Ltneim62duwDGPMJbVjomsSDL8PA1ayM7vqNHCPY5s6YBneXc72XYWg42czUah34rxdC3ZY4G4ocSCU2J63XKNN",
  "key32": "4jFhC7cD9Wks33puNQKpySz2e492oJQ6M7u3hAfMrThRzSdEnWWRgPGXVXsbz4tDSUuFH4KjcyKdmXozLNPZJ2Dc",
  "key33": "4GXentJAFVTgyAbD8knbtRjSfUXhA1KDc682rLi37GaRt8nRoV268Nmfdf3Cfh3mykWtyFG7HwTifj9X4gXNNjfx",
  "key34": "5LT99xmrTUwov77AWkpBm3fjewNRaPJTYy1KYnkjzvnXUpZN582qX3nxq1Gg7LDf1u5DD91Q1RGvsMtgnJgvRqRb",
  "key35": "4Y2wDMiu59gYqDNbrGrcuc4ApmvGeHAgZUMsHKbzEopFk4d9u3fbphDxReZSZQ6tG6eP4Vj8LXMY6uurmbG5Lyf6",
  "key36": "5omBY75dQKoHwg7N82PAaAPqyhgpjMxdHC7BYRfaqQvApD9PfVSF2FXBJxbm2MTovx8rMGRHutJS2KQEkmW7UyV",
  "key37": "2RFJUHL9quvfbvZpi7ypTdKodakJeG2DoAigYunxTPXix8UNmMR9KCygP5y4WLamxYXa6Qky9UNZBQ5HCdSegXto",
  "key38": "2VWKvpqgMYxdZVwUidY2RrrNmYHnG6qWrV9MyGPaCadHT7JpDCD526CpwzqYbnyPdbpwEPF2i6KSRwcEuKaUSgoL",
  "key39": "5mtdj5HXVXnLcU8foGw3TTXPvAYyTjvqRRFmEiNmowQ48htYs7bmX9ArrMpGTNeb3pVh1mKkgXtnG8FdfT7Bbr31"
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
