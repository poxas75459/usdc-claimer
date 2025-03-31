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
    "4uHL8sX8YMQTibjnBMCm3DWjEzRTaRzxP2ZyXwUoTAQxWJQjAEJ6qWJxhzXkrUmpJ8bEyBH2SNsxkpQC7jd5w9Rs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NMyPTiys6o9sXEqSdpjZGzvcQ7nFsW3MBGfsHECgcSC5E1ghWeLLyysNr4PpUyoALP7eeabudNZNidtYQPCMUdK",
  "key1": "4hGUYkrGKCq7CgLT4jHdfFAfvcWY5jtrKpbMupNXwfc3q6CFbQ9nTFr6DDLMrmaGZn8uH32ed7zTSHcNy3eLDajG",
  "key2": "3dehUvy9V6aCU7apcmLc4tSNEJh3kdBK3SY5qsZvaoiaVf8rY9k3Hce5GHBxm86ZFJoFyP5b9P2NP7ktfAam2tpL",
  "key3": "5Nwm2edFjwXQ6exJTeS7hvHoMhg5Snku1vMuvKJng3qHBZ2HfQ7ZB5j87YPxpzDuHcYhPeVoHj2VbyJYqvxg6ks8",
  "key4": "4NJQ6fXoD7hC9B3yvF63CZwBFkpuyPyyvVW7MM9mtS39dkWjQUyuZQBqaE9LQR5owbQETHzcUuwyukPfki1NguCW",
  "key5": "o6UkLGYo7nNGuEBFnpPkHYE86FqZ5trkiy1ca6oYE8fAnuP29nyw2HpCTdT5THkToHRyFU3TMc7C9UWCt56EteJ",
  "key6": "4wkpx5kh7BTcXsE7jCB9GLnEaHM3vGCCxsUFrWLgS1hxDrnZngBPk9kcXiwRP98jTzdqXbaKP1ppmvkjpBQZRw3V",
  "key7": "2pMmivEV5CLgD9o6hAd3A9gfkNXvigC4RacBHHQyHBGf7WVnCEuT1daDnfAJnMxrA8Y545yKisrWKMW8sX9hEfWU",
  "key8": "2qWrjbpupGB2G9zrcCKCEuCvczvz79Ybiujb3nL7H4pFzwhhnCvK5Dp1KK3aXSudqtychRuyDT4gTdbVrVbE8H7S",
  "key9": "Pv9X2YZDg7ELYaALVXNjdv4D9UaPJuDGPx1vzxDDTJ9fpSBVi7Qt1h5dK286Gu77sjhTgWjXyPc5ZikoBsnMPgd",
  "key10": "uWvjzYspc18fzUGdh5qhBwg7vyLToTxK8jpA5o9Ei2591KPR919bdzrFPX4ho5zFUHjqDgj49Xh5XmMwAusXHHb",
  "key11": "2cooqN51pvNjqgQuDmu6trf3gmVKfQtGTPhqcQ5mb1EMukF8EvwimrQFpjdGZoprCqUVM3mfdJwKtj8nEMuYguec",
  "key12": "56Ky6fYMGTzapYcmWh2hSQ5Zk7xCwgdFNiQECxnf2Ma7WgcGYuZpXB6g8WjyjuefNWCqF9dttsZZx1Ng3SJiccGR",
  "key13": "3XZ6TeVqc2NFmsPxpxSrXdDzD2UKSPAZ1AiDPeZfPag1JRbFCeY6ayHfyQqm3FxEUKHaPn7GS1xLfL19LnAWAvfr",
  "key14": "3EqnoQbMRWE9FETXWgLuoS7ZqXWksVzFEAx7azNZFQdG69tanvVgskorcK9mTkM63GMmPRwgU7eUcvzGAwh3zdSS",
  "key15": "5kHM5ghFYpLnJRNK6PG5Bn4SKQ3pLbWc855XZkvSfQvZpaAbJnLRWs71EPodFkBrpzw3SBtAaKqAnTnHae5iyJfE",
  "key16": "67GejP3CWLFtChCCQbu6BVeyDa8LAqVuiLffMQFNA4CpNZqjqxHQWD4rz6PkiWJ5nQTAGKU8F87YBWEin88qwjNS",
  "key17": "GkiPGT9PtKwPEbDnK33LSvLdH3Zj2G1Fec5QQKvJ8yo8WUKePX9DowHCHf6fvGQTAvbWjZE2J4JqEK5VKyZCdhS",
  "key18": "31WfCTHucAxgkdRjtGZhfj58kG4ZbVbNY5JgzztfkfRY4etWT8fmvK8viiMjvu8sevE5NLMEhEZUQZxyxzugqFqD",
  "key19": "4dVrNV37gNUXpBYwe6RVNXYSoZvofXWpyBt8JASMN8rkw2xzXafCJLNygrKaRzFGwdYRQJRPFnL2RhK2p2VCW3A7",
  "key20": "2LqHpEVihHYNF6uyHiqiVzXAY68Po6z84JkSHYXfTPxMbmLZgjQLx45zffFzKF1cqjsWnY9qBXsxXeaXXY2HVdty",
  "key21": "5WcEW6vhUjdFnERJMuCuK8LzQtLgmVTeyFPUAFKaMZv45J9Nqo733SJzwCi2m87GbbdEE8D7sBE1bnfLuiMhdLQu",
  "key22": "5A3LXZPeUUKEyPjcE4cQdhrfZARN2zZ7vKtRsJjfoubKwXUU6SJAgrhsEoG4fqWWLMz7xL2JEZ1xiMFQ2T777P6r",
  "key23": "2JjBBLmb43hnZHs6oGNqP8YP3Wf8VPaP9thiYc8B9CrWAMsdZRTbpcF6S1uC6a8pLadw2XaYMr2A9EUbinBvjfxt",
  "key24": "2UinLPco28ETy8deJcUFwFaVo5aQY8KEf1A6PRXC48ZGbjzfcoJpBY9GQrSw7yADjbNJ43XNCxfzXHwr3U2XGSDQ",
  "key25": "5NNa35RX6Yf2HtLF9eypnDhp2gMGaXGWpwzYwZjZQEAZfdeXxWP6mvANQS91cqkEgPJr2ZZVQwxiWyozjo2vfYQn",
  "key26": "6421jk9xNJck6VDDEUG8ETpwVT46RDSjoCQoQVL9aFCeeb2uVE1a4EtvTtANqBAYj2cb3cZAtq3o2Z6YJQ3dL9A2",
  "key27": "2sM2LP18UMZkkZYQuK2oVJ67wYuauKHxLSw8pdMZqpxMNR1n2ttne7jG4sDEoBDJjH1kpDDGTNJEG1RePnRaLgJx",
  "key28": "2HpYMn6xJXn1WnMu68Xrkk3sic2m6bjh3Y4i6ZygSb41WDeB3fzP4fETrJBFvcEdAwBwL6UGc3zYTnpo3ancP8yZ",
  "key29": "5Vwxa4ZtvTiEZrESE5fzfqroMMw5xBUAm8HwxvpTWzdCt6FrBn5fL3azYoJkNxsHCx9vtPHfUKi3P392TxNXNEe9",
  "key30": "5rBhHPBf38FwUTWsi9wmMd449zbKVTGfjZGPmEgYWV8waU2fK75ukupwSEirq9sixe4byLq4goh3kTVq874FjhFv",
  "key31": "3XUmTEyahwpjnbgYV5qqCfAn4ZfAsrWSJ56a8V5xrownZhgUNmdbAdqHg3aEg3Fgu4DeHRDYj5rHSXi6yJv2Jcoz",
  "key32": "3NoDFyHJnQ12pzvJuqvsnLBKqdXcL4pLBDfgB5c1GjD7mj8VBTfnF9EVBWShMN7tdE42oCVQd56kcu9ETdvGixt1",
  "key33": "66p6o2AvSbDJ8eSD9pLiSH1eerQRNPhBNp3bw9qMpNFTz6SnQqsVa2jNU3daR5DMTSU1p4G1mMxqBoXKqSX6or9Z",
  "key34": "3Srs97vw4GQWQSLggEiZjs19NeDaSAcRQ223v2xszYBBoMmFqmgdeZmeAvKQFGQPi8iZhqYzQLvfYT7jrixnvSW6",
  "key35": "2iehEzL3hYzLGXL4JuLR3JHyQLviPTh9etHhSRDoHc6uooPKWd4qHUkb8DtiLvyKLD6sS27Fr451PztbgEZf59M6",
  "key36": "3vjHH25psSPmMEJFrF2kpfL7iesjUPTGku2o3EfJH3H25oPVvyQfx9WnU26P9vqbUtNoxBieihzfiJ1sonZYSzsM",
  "key37": "2gig7TYJPwuwXfwMuQfjRLMv5fU13jKk4GHoPkQSZ5opBVkE11RfarwFaauGZwmhuMSzQ1Wr76JgP6x6Qg2SK7xB",
  "key38": "4T6vyi8xspux7NrfFQZiRfLqyLvmQjbqaDGHFa37AqpHysx39BJPiqRRRZF43BKDyhyr6m7mDiA9Z8fpT1kvKQYa",
  "key39": "5hN7RAXNoQGBu2Vt9xkhiC8RkC9n8aDTNP75Txe4PfwBEY6iEcu2LdimUKjVKMzm8j9ukhdco3MynhieXZGE5qX3",
  "key40": "5NuCabtZMFMcvaZF7L7GvXYqZvV1NwQ2mVLJcJCNd9vhwJFyrN166QnnAG9k3iLwuxx4FBkvaCRwLg4vwHwUdy5T",
  "key41": "39x4okyNUrjDLiP9BMfBG2vSghSGYueY44Xp25RNeByuHh97qghTe1RNggk5bcuRvikGa6Z5Ef3hXgmC9ZVZT48C",
  "key42": "65cuamUxtMsVPHWJAxmopJrAk7J2WRe5KXx5KQE3MBTW47U7GCA5B2hvJv9tm4z42WA713DqmJuU17uNXN9gSouH",
  "key43": "5sL1viG3sBfbGFxdj6VfZugXtFHfc4XHsjWBwAXerrnUfZXyFsJZHDhP4txny5s6JZ8NKH88nqHvWtQabkYzmSRs",
  "key44": "4TyznrAHDzMWrmevQcagGzQeVmi62aNeLrrPMgkJGHS8tqSNt96E7ZmocD1mTs7mHEFdLaD164zCkxQ5Nx4vWjYt",
  "key45": "52jT9Vy2mLCDVXpzKHW8crcJB8eKssFg9CFXkj548JpP7G6x8JDctVUANgHPCMRo39iPPnhedZmbuUuEjPKwLoBK",
  "key46": "mav7aXE7Y4nfevrkePiXQSZzSwN9dJTxYLYE5sFSB57Wj3scuqRWFoXG1n7jg2Wu4JhTbgAUD2t6qWDWN92JNtf",
  "key47": "5TZpJzzgd8Zkyc4D5bwQVFu8ikWFVc7Q5RjcMWKLUVDYRf9NTCQyCHkQbztwTKVsZv4iRbidNvFdrQ27CcCjJjce"
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
