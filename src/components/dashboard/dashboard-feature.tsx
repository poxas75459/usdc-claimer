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
    "CGA3LYcz3EbnKXjchPkTqoz45pCYW4GfhToLZr49wsieA9q5VH5V1yw1zYEFr7pfjskFuxXx9U1vneazY4GeDSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZx1xEP2gkHdSVWRvrPMVJRe7zsatXVtGU7tuyz7LyFzUYcGg6Fq9879gP4yWBvxtAkbWGEvPsdtcThpZKrPYwm",
  "key1": "49UaKnDN1sk4ERp2vhdvp9Yv9dLpWPgY3ivjKfckeuf8YL176PyLpExjMHZ1ihsL2NHpxWn1NpiNq6KC1TjpCWN1",
  "key2": "tGd3zdyoEtGJZ5Dw3Gh9LtYU6rgVxzL8zViF3eKwCQzEaSqpUzMTNHoi3duvvFxaaR4Rm1kwUzioSTWjZx9LzMc",
  "key3": "4hfRinuyNdv8j4n5gvMNwMGmr9kHhcMkev7wSQnuyjrhjcESz7aksdRKQpVpfavm9Yx5sGwGaP6bsaCvrT311kMk",
  "key4": "2TqhHVm1foXnTPieuxF6F5vtYMX2PyByP75MvvtcrENXh2qUrXRRRUJBYcvH5ddkSWM1YYwAJxKZ5KQJXgUFZ99H",
  "key5": "1SPKrwBP9cs2ETfY9QHSFq6gteWJ1zEbaBhAfmsWuiKFMya4q4ivYt4pjZ45aLSiPnH6TrPKBWYao3fEV3FZVRq",
  "key6": "5wk63SuGz1XQqSAvyKx1WUyibDYdjwgYtiV1GbYeh98NoXvgujoNKt9u3CaQ1kEEKGswZguMswvzU9vpz5sWD4B2",
  "key7": "4HLBxtnEN6PK3j7LYgDNhySwiga1jsfBXSrD9Qyj9GsSYniBMvAu9jQEytokYoHp5B17yyhtk8e78arcerrsw3XM",
  "key8": "2emLhrz6Lh9z7UCyPeuXeN2FqTGW5dCnW3zPnYP7E6yRMxmhfp4VdR5SnjukEP2yAk46KWNF6rQnnxsdZDoXKcdY",
  "key9": "5xfJM43xrncqxAiAyGWnLXS2dCzuXzMNyt95qR919gjTAEZUFokPpav6hXt6G5BzprUs6YZjEis2m6mpvoqQRzUZ",
  "key10": "2DhR7euyySyWpFnmrwf3UGEbEeTVzLb3Fpgjkd1MzpsRH6CFjP9m6GzxeHLGdimGmTSUzXQA1y6gBKsqFgNiV48R",
  "key11": "2ToG9FTmvDUEzU7yTT1wdpZoQjEZUCVV3knCkP3ZZ1eEZkTCCNCvbxXqvadfbcau6tiLxxrZuRTj9AjhF3Jb5ALd",
  "key12": "4mc83VBjbgzeA2hE7g1XymRxtp61PYNFMfXp3FNmPJXqYNwpuewGN14AbzTzCabfsKQCFcpHgq394pkTKXm7qaKx",
  "key13": "58nszmZmaCimDPX2E8UkHeR9S8m3mh2kR3GmycFfUwBvDE5eVeRY6kVQERqd5jtDmemsG2vgkpiF6Qf7dzs9gm6C",
  "key14": "3TVnazaNPuPrhp4y4LMsGvBP3RY1qgve5YzNV1NPCDDakxA91UrYNRwe6Hjk9c4bM5qSbgrd8c8ZiLhTuKXQAcgL",
  "key15": "58k7A6NWQ5a89PFYgJZMUBKEmUGbnmgT9LAR5VjJRSUUJUkz9uoSMf579AAGYap3WpPDCtWVarsWNcJzTodUj1LG",
  "key16": "49Ai5dZdtr6yLjoBmtcWFLWvuqzSwV4GRrPoEXmQrYqxZwttPAyR75hPK2wiJBRi52g1zrSH8XPMKZ7Upsa4EteA",
  "key17": "2CkWirjR8gaWUdMVz2nqQvhFcnih8TgMopUqs6HUvmtY8UcX8LWcu5DPb5qbFTcDhMFgDDCwEV6owMxT394PeV7c",
  "key18": "32HDRFoPUFR9HnVuJHEzi3twYo6Szbkz5RMfeRAKZpupJh9DKXkCjRY6p6uXUrnmRRAXujjgneymwbVzJDwHfNER",
  "key19": "3xQ9ureD5t872Rm8tX97sWbkA2ReyKzfwQPv7r6gUUDspxBeix6aBXsCc3qxNSJBEW69bSdsCWHMufAe7snhuLkj",
  "key20": "YX3gbjGzR682yUbdCxb4JP7AU6gpTnRyZd7g82Z11hF1GHWohQJ1pYh1xRsRFsbjzVzpq2E7VwUEWCG33m1ckLb",
  "key21": "eKEH8CgB2DVEMYGLznzbKkLpqh3UrzgnsrjUE41jvR3jbVu92jEugHgZbNyBDmTVYp4wAdJRV5GuqtXGSFAc995",
  "key22": "5GrKwVp1HqttqbcKWPmU2ED33bu56Rh8Rivzc6DEkMJvvfX8poFS5RFBjooCXqkhPZ3q5fiGr5Aceyx7K6pKWCMr",
  "key23": "42upoM6DjKgxsNGwrrdRL3p7YvJKqyYaLhAh6cXfZC3ekLgWn7FTpitEzYw3tYi9xNarPPJk7wCxrEG3W6att8sX",
  "key24": "3M5mfUda2vqQ88ueuX1qrKQGus3RajuPP992D8EbvQ29TLbs5sWkQg9qNRKjPRmn8xy5Sj8gEXrT3debTgWfs6si",
  "key25": "2tYPG9iQ84X7fEwupfKWp8KUKDfiEy7nqEP36aZ7V5XvnMog1d22kSt9qMc3Je5uWDbtAxRjXJT6G8w3oxUtXCbY",
  "key26": "rGwrF6za6nCKhck6bALHtT5mKeGaMX2MGfBRaCBNHcg5LH4GJ2ibfo933mqs1149mhyZmorjKCF8xj6hSNZGKCK",
  "key27": "2Sw2Zi54GLvNMafWYSto7UxzeAGYFsmqVN9HR7ayRjKoyo7dAs5ewH7n2r2q7bAqgJ1zWkxeKWZqEnMj7XofAeiY",
  "key28": "5Db5G1MmFdHSKxAScJbTZSzmDYJTtsoAE3kLVybFnMKbyJGiNAjP3qRhgyMwbdM3aS4hQce9mRgtdcSkVw8YWBW6",
  "key29": "5VpYjroP19cCKFWSQ8vRmLDnn15JZVbHdn11WNsc3xKbfFFaNi9imtsaGnNtkpEXx8ZNykT5YduQyVovXBypcecS",
  "key30": "9uiWHq7bRc1uGsxA7sTSvsu7WAtwNydpchBTBaZomkXZdWTEnKAhderGfYrMA8SbfpUeHUmNKviaC2pV5XoUCnM",
  "key31": "nWugCF5uJYuhRmS9sWBzgmmdH9i8ZLik8tqJQtKG8dpQJ41P1YLFBYy59ENRckANfRKBnKiYkJQ4RkEerM51ycg",
  "key32": "4jAVPxsh3tw71QqYbySocJkrkC67mEwEnBTSBM8yjMnfhCBL8GQF3kXBGSREXgvpShD2Sx7wFmNPMKa1Gs5T3V6i",
  "key33": "5XLgpX6BX76WbR1mionU7KPkb76bMNDykcHrAsAcqGAojJD9bJYJbefGe3AoizoPZ9WaTjg6xuUvGpTK68ZtfWCf",
  "key34": "5roocqYN1tUbSpQ9MAgrzmMqHQngyyZMBbiaa3oX3ZFMt4sHFJfKi1D44EdZob5FvbVgYpRjZwDa9fnuu3Zdgjw4",
  "key35": "5Fxfq4hLcJVsyCRRuWKfisMVATQYhupfDFHtogKhSNuMN5ABVEeZQ9du1Qc9478YDCWAE6LYWXrQwShQzpwWcMyH",
  "key36": "43BMaQLbd5pjgTUCCvXvjkQnmPuc1f7kR5R7iRWd3M2wKmnx6sbYBXe3JqUks6axXjcT9aqcoUrFds2hzs3VjTdk",
  "key37": "4hxtyhyjQQXXDjayWujh43pBkiniCDYXk9bq2UZJt87ntjksnhmbJeenWptrXfeLUKAjwXV923Yipeehoqe3twDZ"
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
