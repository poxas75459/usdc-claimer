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
    "FxUdBvWZszLebeDpx3Wyo7WaUGoX1FgcotdEqbX7772TQaR8P9YtBhgyd31KX5qcTbbWLdJNSqi4k9Beouqgwxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLNm5BXwaLeW3ozxFio5zXWrfa3ifMEfvay289Fa3CqSyPr9mj85vkCa7jaHGkeQ9jzS1oU2igrV7nTEqVfBugf",
  "key1": "3vVYeao88pyHSmvHrnXuwvVoyAebdSDZyf675upVE4i8Gakmh4zxSymmdoGddRpaxRogdDXhYM8wdkbcXTGrTvoV",
  "key2": "wVZtZWmoeLBGky5Cboe7goqZs4rYH994hW94fS34dvoZ6LeHLDMHMoNJdb1y8ih8pRKaCExmJF9RS7i5ztFqfZ9",
  "key3": "3vZquhjA6YHiLA3KDWSb5EjgMhevSXwLrRfimTrHgeWLKsxP5aHc86zcVF1f3Z2zXr1jTZ5zpNXKSzDZhgZZhTSW",
  "key4": "4u22MeXodomH5o1ToWimvvMeBQ6wuyman2iyczuNS1eGEemXDnchouA1mvoQGdZSCqrpSitFV2jXiGyxyFUM6eFv",
  "key5": "4yHACUEPjr9tY9ZJJ7ZmLv1jrrVtqsFJgcYwwS2zjThSevspS1ARRcBU4mGk2F7sgbUfxBpj2BLWFC9seqLRCTAT",
  "key6": "2UXuX2gW647mZvgrAWUJF71NV6rACqU4HrH5H4XoAW7T3JD4T3Sa752QM82gVYoDfSKmQN1ZtQkrghtPTpUdULYy",
  "key7": "4zUQ2AUuGfuhPy2qJH5oTHS4nTL5EQtnbFZXJQ4U1PEP1ofDEQcueF8yMAikh52Ac2dAjRNQxNBPvpSYHTcqwRL5",
  "key8": "3ogAsBZoVqyxiyjwZTDKc6kMBfeMpp7af8iFXFBMNHgwemkmxNELckekt4hUEFLLNjjYd39eABTjYHPA3bRib1U5",
  "key9": "5ek8CbSY8Uv2YSRqUk31mip19cMLaXv1gNhgnF8Eeg5QM1XTLXGpA9mkZpiEQUifGthvAwB5jdg4yt1cEnso9deB",
  "key10": "3kWyct2EBB8EnDe5LPRFvqbA6fG4zhH3ahm6JwrZASdBcg82iBhS4aLh2M7eaipdDnR3naxWsCnjGn7mcA6NJUdi",
  "key11": "5HY7aYVHnaV5dYVehiTdWPytyx941FZ8q4exkod8YiPm7ZVUrrJu6pYaCTog9WWA8LwFgE7BgEqghxEeHSBfQJNY",
  "key12": "2J5jkWi4PQp5yJzA2wcm5P82NUwgX3TVQB6Mh8PRPGEWK8EL6S9NQpLk2YPwLnB71eci1S9ekSRZYn3qawkwiW3k",
  "key13": "4wAHVByWjTeTuUbK8BCph8teAbnEzhn86DtsWYiWkeX1XU37WZMykJ9PVWWT1Pb8SYMaFg35LDYgb43thGnP8Qvf",
  "key14": "5gB8dbNhMLXUsjmeisfwff4BfefZ5QSoYQCZd48xNAXkpaPA42RmZt5h1fK3aAeriCHFpeKeD9FqjWHwXqfNmfbU",
  "key15": "2sWixQzPDanZChJk4brBJ6Q1hXqby8xhHRuE1J8mHzYiffVYPtt415Ev94vAUTmsgGtdKmxJgX3nAg4cBc67CVQK",
  "key16": "t7ms9NtbmLebPCo3svSDq1GivHNhWpLx2jdamqcYvCVQrrk43YWXmNgSS5zm63nReotbjQdMYKahggpj5c1kWcQ",
  "key17": "3n6Kt21HRZP5o7HCxeu9ePCQGCuCbQkRfy5U7vpiYc1okhRh8f3RnFJNy3tCvKdzWepb67XLp1T97x6uHPFu5Wo5",
  "key18": "5KoJ2ZrgaGtgasvy8neGpcWCUGaKriDC2zRZRsCw1YSC8oFy6dTmPEgK6y5vxyNodwr7ECdRqQPvF4gmn41oLmx5",
  "key19": "5E1b1seBjvSqF69bETn5n4oRFyX5r4ztJrqPvjTB7RF4USfUTYfpH6xynnx9ScCASpAhMDVoWamM4DdcohjchfKF",
  "key20": "2xpAGqaxQ7hguf1H4BTaZ6bNiyMB3KjvdnTKH2WXja4uHL1QMR2S7XaWXftG8VCWmqDnxjxddprGEEoh9wjMkPQU",
  "key21": "4ssTWqRQPgc7Pxyv9zLrYzc7JRv7jVDBvMUsRE1gDnCUSBA5Ad7zU6faqJc1bAvrgntaJTrp1KV9wTK1PDmTEVVg",
  "key22": "55hqSPtSuDmKLHUdSVzSYNhDNZn74CaL5iy2WMpy7W4b2EFpkPA2hSoAAYT2MeLanyvnwLkZS1PE1nMCJnqL1TvZ",
  "key23": "5tTciuxW8x8JecPqUNXTgA8C9C1JqJZZCZJruPpY9jGky4TiF2qWiPo98DkfqxjL3GxVaYUEYBFAPnn6Z9j4cgNZ",
  "key24": "4ieFyPMFHfoTPn4WcNnUH8crwxvrc4WsGFGiBZPB2y3ooHArJEvoYMCgPnRytB4gyJDp2oUaoNDV9zuLAmaBUmgp",
  "key25": "3ah1JU3gPfVZDd69gWBKqXHEVHJGondow8LXTMgZ1odFa18uYLkWLXDtqhxcVG9RfNusgZPWAyDASF9U9U67UAjv",
  "key26": "3KdFCyVwzG286iefGTjjEwkGUFJ25925tG3KRevNUDTsdCLdz2v2n97SroPQdGSKy5mjqcJJrcUZibnBFvpYtNeX",
  "key27": "2HvUkeXv7CzypU1u9YSCq3ZWpWArZnFJVivk7pFNU3YXSHfHGwLr3yz7NYhakWtHUs4hJqMr4tNK1HqcyDBbb2Rh",
  "key28": "3qQfhg2qXe7zpjNegEWrYopbd6XZCFgfc8wpxFBkDD7qBvTRhTd4QSArqfFdjqPnNuaGD8EUTSgTHiUVe7A4M7bh",
  "key29": "4CmzxRzucpeqatk4BkvTmyr46tREMXxdGJQvcv7iGJ4ZFc436ifvoCkzct2eoaDRoamodTQJWJKAq4tPc8CFqJwA",
  "key30": "56dwBKSQFgxvx1XMgt66qyA3bzdYo99vRfYQK1wzpB5GJ2SunrP9L9tWkZaiwLGviHTfUnsZ1xMWpqQAWygD8ZUQ",
  "key31": "2we6n1j1pA7HCpNW4oRpW2ie2wV51QDA5us3fRnFqYuocykvsfG8EaohayMkkcWRYptdaM66VCiREFWkoqeuN1u8",
  "key32": "2ebhW8EpPGXJaKtmFcShprGPX1LvmA8YbP2oap2dFFZG4Z6r7PvLv1q9Axy5qYP6N4ZPnyyEYLqRTt8ukDaEvuot",
  "key33": "5rNxaHaffq5ChQxe1F9cR2C3jQEbHahDKjQ6R97U2cUx49Zi3fhCLbQbLghx9xzcU9xgNbe9eUgXjquNPpLm83FX"
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
