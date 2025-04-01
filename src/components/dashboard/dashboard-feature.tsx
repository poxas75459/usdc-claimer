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
    "eEwxgnJf9XCsyuyTfNW7qmhNVnc9RCZAeeYpvczoGfMyABPr64szXriaT9vJHmi1nVC842fifnM9ejmwQwLYUXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NzTGnbWSVWE7GdFkdosy3YhyjCrCXockarcdZ9jxiketjKcp7KgzWH4VyVTYqfH8QXLZATPFg7wSFQCCs2xRGMf",
  "key1": "H71ZZKQ3zMv7Nevr6V9YJY65iQ57JNgsZn55YceM7FXfmSLip8bTa8M8RhYoW6ywZre1YoT8178L2QvUgcBo1kz",
  "key2": "4S7fnTzEXLc2Hf8kTs81Yp8UZEVsXct6SxwZ9fX4T16mdAsXd9EDyDWxqK7BeAag12Cf4q8Gwn627XEfZH7ChW9d",
  "key3": "4UZKaiyNcyWyZK84V6RxGanCVtjdseLope1S7DyueA2HCBJpLNtMgrocQFkk3JtAB5o7qQTxJfUy6CRZhMnJJTSi",
  "key4": "66YdNMbYeZzVHhaQ5wEEs4Q12cmCfnhuMCx7C4sNWqZfd38oFkucqYzGgzJgrNoXR99PJqTaD1A3WCf5USmwiHgn",
  "key5": "33dYMU5WdHonXXKdwTtiLiq4HDdJjLzHdR8Ft2Z9FPvLGyK26R3NYRjfyYi79RDf4WSq8f27SzsNoW7LYmCc3u4n",
  "key6": "5wym6h8EuYLiy5fonzA9pq8TTW5N3ERuivrK3rAGjSno76LmRpewmodxPJJhmGUMXdNdquytnVHUQNjdQrdzwzGx",
  "key7": "KX9RFtse6K1Wywhg3d3kyYKzfkgBvKei1HkU1vyQPmeQnnGmpY9MeBkVos1Ui8489NjX93YcMJzMr4hdQXQWQ3B",
  "key8": "4N7YpzqCDGCb4EAMgzrGCqLx16eFC11EnJASNgtsSKBLHNaVJE92jPeTaAxkSjTfXEv5aoB3qwC7j5tuBUJ6yedX",
  "key9": "5e4qX2foAZDYAwPPJAqjF1M5tXTF8AnUpxvagcHc7cw4qyJv8ze4CqGERbkrZw8fhmYSVSqq6PzE7Q166wcteHUE",
  "key10": "5KDH2dwBnhtM8gDaC8J7SrMeT3degFTpDrebXhLN9nGZfirKo448io5dtEFc8yzw9eu7ME7SyLsbDJSmqGwiD8Mw",
  "key11": "3zhm9bPiW4EY1z1GN57XDcLB3MhYGx7ZJctxtJ3wu39paiifMgSKTZTrU4zs3NvHJTf8M6toycoMshngz3jyJYHG",
  "key12": "47RPdswcKVUBnLiWpmtPwPorBKBTQtsrefX3CLKk8caCen8XsM8N4tVBFcKkhduhwtf918SnrJExUkmBhB6XDJy1",
  "key13": "3T4c1ZUXYq1gfnK3KwJwX88mxbzM2AnT4hzfMSbXkBrPfVWza9jCJZuiHYtLvNVwfnJSMpTM8yt3CwYH4kc9DRV5",
  "key14": "2bprGjZqVrb2WNNf1nkBU7tnw1YS8bpCXQxF69YfRJLmwHZBPezyYD1yMPY23X51iUyPrYqLw1bVBfv8hXPpZPrZ",
  "key15": "4dJ9urFf5TMNedoHrpDBRfuyBvUxMwF2dvm5DoiG4np2jQBBZvrpxd1yn87TdrB3BFyC1G6X2X2LzHrFJ5A5rmEr",
  "key16": "4UdL7Xrtbv2g88NkqxEaZMmQCEmmjYq3imEL3BhqijwKngEsnfMtJuhtzXGeLu1gdMDW7AwQL5pwSj77hdwdJB9z",
  "key17": "2kwAh7hm4KRPcGaU3JYXsB3B19sCvK4mFSGcMQLThL3ZB2Y4ShYS85NKQnm6us9qW6dTSP8UcbaJxJG74YJGmSym",
  "key18": "3UcPwkkPZ1ksmDajrSwhBsFZNduhMR8jwYVG4QAupURn1nv5PG6Rbz6Guh9T3G1p6Y6aJKHADPkFTKxari1CSnMC",
  "key19": "3PwyTntdgVQVUHub4JZjp8efZ6WRrD4fx8iSTqwxTRiV8Ct9dAfkYgorr1XhYo8kfQjaUe77dbYyqWBFnnvaEdBe",
  "key20": "63WyL7ma1B1oq3ig4poh3P8cEN8W73X2t9vQKjy1hJRmhY2bbKcRx1x48SuNVwJDMmESFPfHoQ64ZTFXe4TDcSqQ",
  "key21": "3hJbCjgTGiER7WMcTzM8tJzMHchZ33GZu5zXa1fV6QFgL51wsY3oagWLovPySuPJSoPub3LAPSnwBbrhRAa6TBBT",
  "key22": "FMycLg2eTqDJpoaxWPW4ZgWTqkiABKkVfqjGdixUrdrbK6Z64AQePQ8vB2wvZ6kBN7Zx78HCrfqzWRpiWnxp9iC",
  "key23": "4UcmaDV45RjMvjMBkvmhuXbiFBMmo5RLjLSsEePLLGnufTmdiBxSHiCqjAKf1H5Kq1C4FUbkxTYcMMKfuJhZ4zdq",
  "key24": "5QeUJchptAAQLd7Rm15C6mZF2HNU3Z5pAaBGuTBehdiMVD9NhqJaJWrYaLHuVt4SBseAR8qTPc5FzisHT8YKGLGF",
  "key25": "3Kj61FZWLAAiyae3AsKtwqBt5oBBbdcF5a34NykahDSu2b6qLav9oyhpW9T2okPnh98e8QfqAtKBy3tHmERjWwYb",
  "key26": "2CetTLuxPxw5Xrzrfg6CgsT2JLdNvVKmAhpm29nsNkAp1nmdPAiPVFkxvvNqYnY2pJtpEXcLwJe9FemTgs9U191B",
  "key27": "32yoGUQXgibpgxxG8rddsTp7yCC6rfVV5bBFHChNcYyusHkMMEqYQFYBDTfdPmG99Aw3bLY4q8PqF2pGg2EWFVoc",
  "key28": "27QmpafCmoTWVZXuwWaVVsXiJcHodMcNT8zU2MZKtCNzNzLmqKSUJYZrjMVJrL6Trodu6mbmAc4zX45vFnxLmmTN",
  "key29": "3Ld4gtgiviGqQUwDXQk2ap76ERp8wLnR6LNj4GscnJRrzWZ24FApgci42QugEspjPzU6MMni6kkHVESxZLymx1Bk"
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
