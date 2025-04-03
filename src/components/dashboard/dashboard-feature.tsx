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
    "5SNZ754FXJyhAYZm5eBjXMpqVBuWHWDajVUCRBxwW6D8T3eo5kGmsREGuzALUqc6acrPce2UzoJnMr8PWGUwq1jF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skZJh9YFB32XG8e6wVxoBgrSF384y4F752GpfBZhf2LhAqyL6iWyYV8szp2CFEEv4iNFqu8PA1eh5CwZsBYzTGN",
  "key1": "2kSR2HNX2na9u2QqkYrCtmvdRBqMHeMHNQzpxLXhJeqvMSW1vFWrBbJKaq2ydBqUBvuFf7kvFTw7wT7Uxe9dLsf",
  "key2": "3JBzcv3gGsXWUvCY5vkVkaawpTAENWEuyCNTqps7NdXvEceMvsUuc49m5PHPXh3rGaYoHZcdCVo1gN28xkZqoSs5",
  "key3": "xYFCRnqBRV9ZBwE6pJq2jo1nKMffsN6phwa9kjx2Y9qfHFUxaG9LvkxJ64STSM5EnCR2eKWMcoZKNRqq8YuiRV4",
  "key4": "3V8Hcc6W5iJ6Nu4717s6CHjLhaeVxTbwxsgpJ2GSvCLHAFMbVkvMjjdgXSmen2owbp5khzkyKbGF2NNKhJPjPrYy",
  "key5": "52y8AExtWrgJEG5An7pydMDKZ3aa7rDsTgxrmuR3wvpYQWv51TCEGahUZCdq3mJvFM1cMebaG9Kgwfwft5hEP7Ut",
  "key6": "3yZwFbeW7rQ2nErYyhR6GaypwNX9wxnoN4cD9nEwSCuDgvNhwWQTyuRsc1acubaQFaEQK6nVtGAtYsh6WJvZ1fAU",
  "key7": "4C7eNWSDHWdpfvr9kf2SB9gnz7eTiuEdSMeFg8TaXAGfLgA4z4Ce1uiHZjXBeiGgVkW5rdzLoUqBygL3bK3HGkzN",
  "key8": "3og2RpdJ2eH9uS3ep2EqijcsMxu4ZjY1ikhTeWVFwgwtTuPLP5fAY8T9JSFDYfeZgCgtjuqR1gaSLyzBYNemf8bL",
  "key9": "5kdunRtDbLpz5paszysVDnHy5x4tNZZnwY6M69NeKbrWTXs8YpoSBDBm9aKaZmJHKS7qYVRHenqy5mdjL57jYZqw",
  "key10": "2sNRCDK4zci5vUN6byk2pW1BRjmgroZGZbEnuFkKazgztS5ybxGY7TUy7HVENgTtEDeF8jSvbf2UYeTgEBhU9yqt",
  "key11": "2YjsUSsh7bhdCfu6p2UG1kwYK5yfXcPYDATAbqfeUsedMbM5kTTMSXEkguEeAPT8hURYsQ2deLSZfweDb2xjtK6j",
  "key12": "3VfSaaEoxe5aGNeiz8io2Q8HqXg4F7feB2Ac9G8tDDVK9PCGd3CqoiANdCeQeojEBdxdeAvagSXrkoXgNVFz33DF",
  "key13": "62DTAR9GN3b6XsvPKAtiCMP76iXFnssfmLD4UcgUXwdx6J9sKJhXLzHbxUXuD2k4xXaAWZNq6dpUFwTvjGa6C2vy",
  "key14": "3pN3ukBWeJkxFKLteszH3W4JoThgVDctVZoBMDGUGdi9WLf3ssyjZB2cuae7SxxxGUoefGW7K5tDn761xyavB5BC",
  "key15": "3JXZYciKGT2BPWGaR2tf8AWiu7CVqb9RY61XAciPkt4WNaKYuuxjb8VXJzcMeo8Pms8AJm3CNrJAVD7v6RwvsK4D",
  "key16": "2BXJzgBtEithD4V1EBdKrvYPbnhNrmQsRRvhWqUKvfHjr41XuRhKvEcACxfQtNZosRTMtypJjWSk3FwDA313tfD7",
  "key17": "TTEBHRWtLLeGxdn8hAuRe9uksi8eXr4HSX714zPwtFBfhojZbq7JRYYEpfAt7LyRoqyUDKRfSDKurNENy9MbWqk",
  "key18": "3MYx91NBVU7eGf4LUjKVCmGdmR6EGepN2WSp5HnX8b1BdbPwzp5vZqdDoWWVFLqis1WhMZz2amronF2oD2tDmg6A",
  "key19": "4ZMrq8mczZ4f6ZKJJSwmQ3VVxCkfHpJdGJxmQnhS9nvyLTgWiEcb4k5h9MTfXupy5DKKmwBtwBZHsphtT69FtFPT",
  "key20": "28P7REPH248gTu8bsqjAcaPdrH1Ri3dDmSU7ayfZKJyAXoh6nqekLtLDv3CTTy8uAweepKqLxRWFcQxqd28teJ1M",
  "key21": "5CF63oN4R8xPbxtEYM5P4LK2dxTwwbaC8DfQG46UuMH3MJMxxL5APqNwRSDTNtXhaQKmEtVKG3GcoCn4rxN7UBFc",
  "key22": "2iX6pqcMHYigStjC4JMyTRX3W23r4wmNjS1qqUUJrcDtv7LeVS5ADho1J7EPKhZ3JMFpXtkXdPu6noDQPzc2VJZM",
  "key23": "nvx6rQfAs8dsnGcLRockcLCDajuX63jQMhdyopJw3nM2o6YNXsrXTpraduXP6EnSRnKxvoGKJkouMCyzTNPZTck",
  "key24": "3jtdanPtCSMgBi5Sp6uY6qxpU5wEvknzr6oAgMC29My7t7PhvehZnjWRs4odjJhKjuH2jyaUtXyKTX8d1LSaYxZT",
  "key25": "5PA6kQe3huhHT21ZTWcdQbYPYVJqLbc3127QhbgQXXbJAAoG7ejwdGp5UL3BHW9vRz8Ev5DR57F3eWN7dDGyYs8G",
  "key26": "5fSHaVCfTfbsZvL5AqPd3YDZRQppMVs8CJXNLzdvsBvfyb3gUZ5aAgtBU85r5qwMwsaxkk5QfeT94svG7za1M2BA",
  "key27": "kVQWABEZLUezZU2KN7sCwFQCgC8jazbXunNwtH9kV1MnZmeA4kWCJJ651AdN9FStr5MatxGjk7ERKmLe6fyyKkW",
  "key28": "4iqAjzsS1CiR5poGoj5svHAG5sbdWhtq7Qvn8Z7ghpwKFeYQ3cKDg6gBUab1Udev5jbS4pMwPmxaZjPoGtd4VDfb",
  "key29": "hN9CqzyqhDvxc3E6AprCpHwVY44Y8qAuiaf3zRUAx86o95X9X7a4ifyDysMXz9765B6sKSddJ7pBzkW3iEFKQf4",
  "key30": "5waeGeeLGiqpbmSJ9HEoT1VGf8ZKerJZbnJLiwwSsMabe58vs1X2gN2Ur4W3YaoRVquU4jxYSzf9bysrS78Wscys",
  "key31": "2k2Bur5Y94wuXAVPjBRU9ybABpCpK3n4QcdinFFkp5JtxGTixLPnqgxd5aKoTXWNnNAHY8ZwUgx2By1UyG5vMpyR",
  "key32": "5optxw4hASdckEfvybAf8piErCEKtCMHeJbauq6UMpKrXoa2o3rfE13TEcqNTdSfQP9iaMfJSFvWpA92rsC2s6cg",
  "key33": "2xDg4UxCVVNwRGP4Qg2992yg6iXZa52wjJ77wkSgkoSXDWKXaQXLXyuuCNHrv1fQD3RcxpF5SNnwUuuiaT1Fc7BM",
  "key34": "23z4xFfztkGJqbVrDpCwXmHDbzopuL1gcaWcQTqahwYViXNADKn9XHvSRZFkvcdvrZjpFU3nrVYDN7waD4dTAAe2",
  "key35": "4wqQRNnYsk4mrPJX72Nq3ZtY45rFhbHFLVrEtnFMDuZZDY44mzRzM9PGiLLpoUDuvdA8kATC9MhY2G15xB6Dp5pW"
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
