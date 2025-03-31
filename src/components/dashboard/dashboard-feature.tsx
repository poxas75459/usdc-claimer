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
    "4NT6YFbLbed2fLuHC2Qo1KwtPBuu4R5Mbi44EvATxbvLpwdveD9nhtpS7ET89obkfYuayt1R4nw6EfaFbMVUr14W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VnCxgupLdXeLwKtjw9SafMpRrtqtgXrrxWbg8stHFJ445611bzYquhx6wHL1ezpXQcVB8uLaSm56AvfSJfi5tLc",
  "key1": "2RPrzMB8nzRJ8ysm3e2q85VKTzjzj14LhUkB1i5XYkX2PbwyXhC3ufRV7k6XrehPsfEvnXYBogYb9npxfcGeUr7K",
  "key2": "3NiZmHCTj791M3Br9Ay3mdT13mCKMQE1Bd4o9FykjBuDyHn6KKUsfNS4XUq6L6WES5rEy769Hc5CLuD4QFp7MDRg",
  "key3": "5mCeaopJiPHMs2GvoKJsTYuWoxVNMqEiKjZMdUtRLTvntuxLkpfyRs2ebs5KSCkGGxWYR1P4yiuBr7749ESMkYRH",
  "key4": "4P1H2swT4C9LezNnyFUiahYzwpCtAhqGtzymaoAvwSataZUWFmHKobeEDqtmmhxBiL7w2XQR2nK8rgrn5rqgJePU",
  "key5": "5wyaXjP84qSASdMoHtnkH7viytzXbt93wt13GGjjyrZxsvUNNpFgv8c4koKp5hjZxkonpeH5vW73bQzCNrJGZzB1",
  "key6": "F4MfM7ojmZdZEvEQKh5FFEWgfZaKGwSyC98BpJL9iYVXH3dZ9e2XKaXjWNUYCWesVmdDvwY1mYTWWMdYjcb4iJi",
  "key7": "4qaQ3rseHg4JanUn9YsJeDu7s7AKLpUhekh21BvTwrVU84SCtd7NsB8y8Mz2bRM9RDbS5ZsY8CoYdrTPhpDGcART",
  "key8": "3HKGz1DiEiRut4CMbiHY1Ygf8MNdtFQtBQcKpob5V88hQjN4k4YC2NPSWb6KfMciH5qCe4SWLaMJDVxitZZFvU5M",
  "key9": "26ZWvQ38syTFyRj7vAxoeQ1Y4yPerVeW7tNqddcrxuary5F6Ycc4C935FhxTKNbZF9rjJvTZduvMwhBsdCUQTqNC",
  "key10": "2HS2dtbJx3x7uJok7GKv2iM45LDYeaQttochGuoi3oPGnYTzLaGU5fjCKxvogFbLk8pzc2rmZNRZCXq2dBoo9xdQ",
  "key11": "7EJ2To8w4L84jmfBJ42waGcj8hG4tnFytG1Jh3YmjsynAuzhbeH8YmK5sLZzrJTT26dBBJGbmwVgscrgP4vF7wH",
  "key12": "4as7h7ej51eiRaw8hNePM73eMyiK1pCRTrdPATsrQsQWkFVvuqNRun1cq1dtZ4kPirEowCWZ1HaxEM1ta7s75Pzz",
  "key13": "2RV4yFvU1Z11uAendcMCkqFNRNdwZHRhrre7aFYcNKEJtqDX3c9sx9ZLgs6YYBVpQxU8YVA1ATrwqRMy5KCeh8Cr",
  "key14": "4eJiNRg1cWZvUBZuZVbwkCnfhos15MmCtTzFHiowWD6j8nbGXCw6if8rkWRWSR1JdcU8xLc3KFmFP82ZJHQhmx31",
  "key15": "5hNamWieeG9eMHUEsjdNgVrB5tXe3XCmfNBhKsfLHxdKaNXmpGVRRFfVt5rTUsN1TYhh2xiUxJKooHKAPGKtZKS8",
  "key16": "5tLQjL9wVckrnTER4gCji73BGBHV935NvLoigczgNCgbNE1mhDCmDrxNw49KQDUSbgmvuyXW3PTN14fSe85ns61P",
  "key17": "5tXFQrkC4gLQdpHU5E6vTWNtRrGaZF8apma8Au6VXox45ZtKA1x3acreDcTRNsrmwCn65KndtkEbs7hKDJrRKb3P",
  "key18": "3MtYhyewBsg9oXjbCKja2bMF1E3pkeUJhuDLFypmvKSkYd1onHqVqXHbpWz5wZwv9JDbUmPQBL5AEvkB3cUYoeqk",
  "key19": "3J69NGawe4uQPJWJwRDQBQFyWPNLMLv3rMWT1ZHqqJ3jztScaqM3of2mK7SVS8M4MyAmcLG2cCkaCj63rvfgRj3N",
  "key20": "4WoH6es6jvQ1QfDDoQB7PJXzPyPtGJMvEzYZYxMoUaR6SjrBLwVRBaXgJ3nmnLqpNrxhFyasKY2q1cGVtekSFVdC",
  "key21": "2stSXzjbWWwnD7Rg7HGi3XDLPBLeCTeQJ1HfF2Q1CrTVHRN6gd7JiCTqNATy4kAvz5FNexWuekck8cpisQo6ySoh",
  "key22": "36FMfqATT7eMtezwL4yujq6cTLngkpHnwmZMswAaugnWVzvQfhEqakErrgGfxNZ7E3Jd83yFdc1fahA6HYmSzrN7",
  "key23": "2GwMZdhtx2uZSh7zeDDpB3Mgj61v8N3vGfxRbkdSAwNVdFjjDiPMbD9NfLbFDxuuxpP7NQrYFwk72gPX1ZEfQ2tv",
  "key24": "4i8T25BLGiEaHZ8fdALdBsEA7DEVN3FgG4yveieUHawAkpvZ2WB5hc4E6xVYHUYJc2tfPePD3hQLGJfFBrNKmWwR",
  "key25": "5nA77RMsc7VwYg23kTadmw5X3uqG8sdYyefruZLZ2A4Lumvke8V8TRzsra71uTfuL2JyJdQtVGxGSMrjBPnGs27a",
  "key26": "2Ff78bnxUPVy7xYpgp1HuyejyAmQzCoXWbVcnHNGo2hULxyasBzTNSHKna3SLqVAA8zjD4BXixrQmvwgSB6gf6fe",
  "key27": "4WWWRsWwLX3vYRrPTPHTsYD2gREE49rT3upCLUJJ4PdPpSCHHfNxjrSpEKzPZRKaiK74jbTwBNx7GZQtHswe8G8G",
  "key28": "6SKwzSQgDGRRMMNtv3bVpCfbC9rmKoBHx9JaLQbdiprxtVwZgx48Cmjh4CATC3NPtrq1y8dwzSJzVuSJmv62NoR",
  "key29": "2QAU1m5ZtNGvobZ86yqNq5DVFdq3bmnVufe3yq6retz8NunE9PuCLzVPH7TRnMhh318dANeMgeAQPk4M21ftnmzY",
  "key30": "5Ffsmy9qAyLYYq8ut6DHe4y5GhuhTrx9YDbu3cgZNnQSkkC2rUnzDGMKgKabZ9RTYusjjw6G6knJ9tMd9oaR1f7Z",
  "key31": "4YFo9ACYBFea7PDDjvT1ZjAvgKJc8RrDiBYj1aw6TUPRPiQnUEgPX1TQzvLtrj1aEek7DDGtNGcbQufwVEqVXvDF",
  "key32": "5FCGTqC5hJcQsgHynxGMfLPavq2Hc4ztHV5Tyt1y9Jw4NEsLMxaq4dwoDUesqBANvBdz2HHDrJCjVmBzeHEgZVkj",
  "key33": "29vfntDsruysPEG3MAETixPRQ14bVzjfEY1Fuj7shfSVBbkbmSJZeH31HgbAFFMyxCg7YagYGeHcv1XiXCQnSX3N",
  "key34": "3VokgY22DaCvHz2aedrqeJ9bWP4AeZCa66AcnQn76Qs55SaeYn86S2c8cCnNPgABrBp7LrQo4nYUeWKyDkg6j6JB",
  "key35": "5y7DaTLGewNwT3oFqZqbwGs6NMMtLP7Wkyvv8kb3wLrwfHLjwqQJgMjbrLwzVoFcnP1Y316zMyrAjozuNK8Zcamm",
  "key36": "4du7YBfprzbsJvgKyiheF6DX5fsZYtPZu4Ey6bx6rSpkcGjVf1gg7VTBGaCotRYPDvVQnoL5MTGkmJsKWkbRqyNE",
  "key37": "2Y8pqL7jPP4tsqMm1vuGkcojvbw3jo2tqGq7RNUqqBMyfwq4mP3Bn4GP7iwV8F9PVBKi4SgKNYubYDdNJw53cfPj",
  "key38": "3L7LYutRvWWTxaTNBuq3kqRosmGqpkiKnHUHd3fPGDitkz1vy8wnb3ZeGk5gzSXn4odNVdAg2kNbJW5NTqV92Drj",
  "key39": "4piQPs1LEyUdvTvZHMuxrbqWjA116veB5D3kGsw6parYLmMRx7ArKBeJzHV4P8rDBFCGka76H2h5Utt1yknH3Hm1",
  "key40": "3WHf9PnZzoGnouunDG7wdaCZaVhXRqFqyQUdsXbKHWw6ENmw3EceAFwWaRHhz6vDh8S8dnzxhHkix7r2dPrvVpzs",
  "key41": "2sTBtVZ6sP4mfDCJReMhBanGmKTHf5v8CB76JE1zterf4Zk4EeCZrNZnSTwnNLbJECLvxzzB31UZrZDn26yb7Wvs",
  "key42": "cuLNmxZmihbMvkvMdtHuRyB4GRqLjJJhiq5QYUbDdxUCju5Zzct9zVfJEXGGaqgdSm747KFGFKduHVvLqCpSbCJ",
  "key43": "2XFubUeT3Ysz3i1w3z15CJy1HZGwyBmfRQoNhnkq7b7YocZvacKXrVixajxAbFhJajan8PD8LuoW3kinvdn5RyKa",
  "key44": "56ajfkq1KXJs4oKELZpZyhecHMT83kHKtNqMKz6NcHAb1KGrygFSyzcS8DbDtvHu717g8TWALgZGLTkJ3CqRaUdL",
  "key45": "3PvZ2jDVhnwBWewRy6cQKZQBeeZEF6f2NGGC6ku5qheE4xGovYiVTJSjk2fcRPbC7Da19Pyk9npUkpuRqPJjs916",
  "key46": "FFv9BGrXp2xDxsV5B17sfq9HsFYeP916UPXp7G9G5NJ4TbyH6Jaz7FTVdRgVfKQtYj9EMWLFNvjcJpkV4cNNuqt",
  "key47": "2yT88vsTmi9g8oQo72hftuPvj8ikCZUxB6gMXhkaHPHwZHje6DBmmKkaCBfSFXpoU3r9kcZ7EUpdaMeQT9SeY43J",
  "key48": "3F5n55qXiG2YJMZhhhPRrprwYrfA6GCMzLN876h1Pvhy9o4bduVp46cKhoQ9Cpza25vPxuzCrnx6YkhqfuewzVfj"
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
