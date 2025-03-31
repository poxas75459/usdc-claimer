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
    "4jgwNToQscYcMMBPXsKJmgJC9xfHE3gmGBBYjzWBZd6SNJnUKWMciJ3FnbQY8fHNiJyJKMhi58d62GK43F1Zf1qA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1mswbixJY8CxjS3pRNnNVoZxbDYYsofTjpSUVY2HLjzXwANGRgKCmJC8KqW4e4mfb6hcJeRmuyUVLcqVoPDgmAy",
  "key1": "56zMfHuE1hY4GZMtEc1zcbHByAFKYbbYYNxF2voV5KHLcgEJUdPF1bnr3hVsG87j7pMDDU9k9HU7TW87kG1oxdUp",
  "key2": "2fp5Ry56LZdxAYcbqJDicFqtBgTg68xbC91Gt92BCFnaSo468iyUUrrzN4TjTsJ3i4dn258nKsnqY2JLfumjeb6e",
  "key3": "3kWDdKyA495A41Y1mcLA1YadnGJJkSqsViHj7UbHfEHopDtfFV6Bh5phD8TzpNNzvWP3TfWy3MoP3zAvUt4tpm7g",
  "key4": "2TCrbrQTfLkkZ3zksGh8uApVpHCkLfYb2rEsWgARgPdgcRafDjcz88vGx6zYeQ38ceeafLRUPXECeau6NCofdpFd",
  "key5": "V3oLYkQF7XgDM5cF43PMePnWZGxikfgCmQY1arhf2SCcQqVVHYFyweWbMtiKstzJRz2pj3ZCAWD3Fd1YDxpbrSR",
  "key6": "37E4KVhSSGhhrzfp2q6RrjZtc7eM1vniB5B7sXKXNMdxdeh1tyo3w6RHP3wUAJvVEF27piuZLBSoENdbNHouSqxf",
  "key7": "3yBruGrJNRHzzu2sxtsuTTougXeWVwjarq7tDFoW3cBQgYV5kp5dEnQBjsVXWNRHWRMcyQakR4MuU3AzJfzp79Dv",
  "key8": "26bq5evcnVpiXyoEBTmD4zZA3GnNWZZksWjcAyZYerp5zpfyRkFgHGcVkAcBuG19UJcADzCv5uUkv5MAkAA2uAn7",
  "key9": "NSELqZFNHrjRjoeaZERntauvN1xgHX2KoX1j3kocY7zoyy2c9rYXHYY1pL5jBibVSHhXuSDy1yJ9euW6ER3Pufu",
  "key10": "3LCzR14nPLXnk3Pn5JpdbUAh4yCiWSeyU6sdGjZVsSE1Qjfj8K5vGpQfA4pGgdBLdE2kGomLotTUwkS33RUCbHdF",
  "key11": "ysfHm6tEHVLerAsn1bWTrz7s2LHio3BXphu6zEs9Uvdn3dhCBLicUdq1GMBh9cKgpNPFGaJfDcUdbPmWGGTz6QN",
  "key12": "35tUHSeHHqjuyhfWHJSoBub5b6v9EUFv4d3bTfMSe7BsHHYHqfWP1ijCxuzwA3m4Hj42hfFxbZAbWuvVBy1xm389",
  "key13": "56pFERNzphhuBNYLptwLFQXbr3rh8eb3a9fHPxJyzaaGaSAVq32XzdX7YhebC3KSz5wQ9jcEHynkrEKhKbopU9tL",
  "key14": "315XEF8A6DtWz26kiLwh1cxp5dmzkjPSRy8nVn5jGJh3VusG4DsMZqTGcjWZsdc1eZn3TMb3ic6vwHi4JPh8KetM",
  "key15": "2UwfQNSQzdnUWMUUFXaUY9ELfDq9mieFkMW469ndkLarojRPsuygatTcZFNhThbXr6qgCrd5K5jNNur1M74pE1ep",
  "key16": "4ovKi5QkgV54neMAwcMqbFC6ZD8SKSGJpiJMQdRgVppk6BDgJGEZUdKHg6tgSky778y9hNC3mpVffA3zqLaXckLs",
  "key17": "5vQeL6Tr4zM1tmHggDfZwRJyLQEaDy4zVbwkgcfeMMFH6gcz4shRMNn22zS3UfrhxpiMuE3YfJZS9JzknZt8SahG",
  "key18": "3ZcUKy6qQZNpvzcCsd3gryboSdWTGqLARAgjnEkAfkwDyWYARGVordSXExeXA1yZh21pHbLtnQSPMeiiDpME2Aav",
  "key19": "4wqgVNRak2Jrj5ERBVhUJG3ZhqEhkg6iNKkfT6wSJpnN4AvY92DFQmwnKbwSAAmAyvxjTnaqcYPyX1AKF8d5465R",
  "key20": "2DcgzLeq8tABPCMpgd3vgiSeKAm8Qt2MZc1kn9cfNzZaVGYbkX3FPdEE8ob5iKBbbppLPd94HhMr261zfSC1e5i3",
  "key21": "5Y12RnPpiuYUNhx1RyU3rNYXNaFBt5xMBLz7SacZTgZWM4ZuZqKePUzbDfVGNWtNctjAYTMCswvmHkJed5n4LzA1",
  "key22": "2Lah6BjjbVUNDoUZc8QWahX4GP8oY6QK4WEpv5aFD8TeY3WAfBkMVsY6PWMV62xQQgCVv14jYCoaEyy2b79X4NjG",
  "key23": "1nQBkLqbRZNEsBcdP33NsZGJuwDTbSSNZdcEB16CvNgaYnPmETEopS5ogSWXWDH2RZuV6VKre4KuZAzvVu4LnKb",
  "key24": "4zV68g6DpygMNPWrc3FarbmWvqoaqK9EaWHwnRbRKGYkbQDY4pZZTPq8hbZ6kfuRMj9wSN2fFS1sWfjqsADJNQ9W",
  "key25": "scunNFuk6412QKJH8M4NomTd8UkWFFQMTLESECsQcpGhDvwmkigmodnubMBXVhhMW5FUZ3KwW6V6H5K9LEFGkdK",
  "key26": "4rFhncbsRyRKa4QqaSzLA4CWiHm7UfMrbmBYStLz6birLejYEWrtvtktxVCTVJxdyMn55PskDzdVnKPN5csR8S2g",
  "key27": "417WGgp5CLypYYt7L2V8HLzfcckW77amkyk8ptVEc5n8qJeDunNP1pthPrtRnkTEYatZ6e5ygz1BfJvTyvxre557",
  "key28": "3heViMTrPgkJgw3pqeEVfRG2X5sdUGWAg5ABgvqWfUmK9zBvXhVpV7iX79LS5b2LSwdb5SptHfoHNT7kmzMqFpyT",
  "key29": "5ngcvUKTk6ZJu16mDsnXnDfyZCgEH8BqjTtutwGHcZcdqNBEQHxBJHzc3DXbvfAKYCbxJ8eu8nt1KdhX2xMgfSjr",
  "key30": "5VKQhnP93XzZybwmbRmYqXs5qsfhWuyakpv532CyocvC8ae9LA6F5E3LzdePEETFSzmM8e17VLCGrVterEAH3Puv",
  "key31": "jBKjjcQpifzEWYzVA12bCjLkp4fK6jtkvuYCKJFknLGBnnLK5enCjuu3Xzw8nej66Pyy39yXL6pVnz5GKT4mxDg",
  "key32": "4QXY22TwDGyh6iRDpA9wqoXzMjGE69kNbkJJSRYdJAw2a11C9MXs5aTsmsb15kAVsrUmrkqq3AGJ2j9mgsejGkz9",
  "key33": "3Cp16McLLhRqsT16vM98bKECe6nADT8inab3VBZP6bT7ajXzHRfRSJhXo3tzchvf66A1y3LJoxdAGb4d9gX2Dzyd",
  "key34": "5w9s8f7o9adyjSmQoXUwUjY9wTrG82NkaZbzUrFj1cJyrxi3t7h5S5QAvwMC9kJQMrksdxViQXpFX91ggoYauZ16",
  "key35": "35p3aZdDCHu3fEfi2xrTrF5UVY6CMGvEXVitFssfwQN5L1w534u9HFe2CzK7S4dkChpvi3osKivg7viA9i7hV4JH",
  "key36": "4qEthoLayz1gz1ThFPVB2nYgvCtb2bgFYgn9QumkMywyjTd9g2wzyYXJAuthC6uvFu3S7sTQxx9y3ebyxfZszq5S",
  "key37": "65DdTkXxRGeXPqRRd5DLanYGUWxejfQmuPgry6Mn2WXbK7Mu4WfEKd3ABX2W1kb5DimQSmM4a9ojN3thdPcQfDcr",
  "key38": "4Uw9BjCuuj3VDLSEDmeiczGxRMrKtmcdAi9L7rYFio5TKeXCXAytvhXKRcYp2UdDRu662ScyAUthiV1iWGUwRDeP",
  "key39": "HdC1HZquqMc7rVkdZ7UwUfMaHaY2beQYwPw8ukPcCQGtYyLna4yr5cm5FssnVzQWuMGNuv7Az22HyVdRUr2btbf",
  "key40": "4GasomoBDPTRgAAPxBeD84GJesk9L359bZvn87YNf18ogeSkgNWLxf2caY7E6foq4FhExPh2f8ghuZXfGddX17ww",
  "key41": "3ZKexvux9XzMf98XdZYEp29WTUcTJ6ESsg28dmRGCQfP7b7ThfwrdpAngCeWWZNqyKG2FvWUdyoXLB1XvePEVKb5"
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
