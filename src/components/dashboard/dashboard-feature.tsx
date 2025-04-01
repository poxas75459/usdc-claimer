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
    "2bPAePA2ZB4XfAZnGyPK27AuwV4UNpraobkKpoZLpoSKvXRDFQKj3xohfTLqAUXhp48sHTuAGt76TvPCAXmWQS9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71bwVebRQGiLCwim3upFmuYhKUJoMnTzcNQtFurHGBE1snpBHuejc7FfrdRHg1TeaP19etRYFnmfXYYq8cfGfeQ",
  "key1": "AYTHo6y9KJ4McZoRwSiJRVqLqubiUx49qotsVac1JpooUVir6jEo4QqZJJoE5HuD4gtFZQkiCHWaZMN6ypW6SzH",
  "key2": "4imdEyNggYWg8HZpouWaszm8hLeBTiqyEoaqgsB9xf8qD1gxgYKjUa35WiXAcw5jVtiXnXBiJFrsWPXMgTb5Hgio",
  "key3": "4z8QHbSQtom9Vr8TkZK4mScfXfvHBuLCcqPMMuWYrZ9HupeeVY1zPatttCmzTYJtA8RNFWmDMhSQAKha3RbtAQXq",
  "key4": "4g5LMrPTRHqb2qxtkyNBQfjzHvXev23rjVTJ78fb1kDfpp7EiN4V76toTpRx4woNibpNbVsqnsjZQ16tcqguzNCv",
  "key5": "44LgQKYbVPbg48dsR7ayKzuUigeJjUzNL8ZPGDcnaAGdegRzC6BzJfvrAuAvfujWUXJXN8D5ZNXVtWkGaE4KWsCw",
  "key6": "KyXf5wPaig6TSgbq9FQFhu3LD1koTv8Fj3j4UUTD9xarEfFKCiy8ymeCeVqXKaYW7AJcW8CVtnRauJLKukHco9c",
  "key7": "4jK5QQx2WQFFaij9Jaoj3WxE2uCL8zXkdNSuRzurSdSgp51jT7WctnFHMWJYugfZ1UXvjjdPncRahHU41Tb7ykLq",
  "key8": "kB6JmKYraT3BXLJoKfevWofHf6GneVXQ3gSbZMhA7aSacBxkjCkNTmsqMm3JMV2rdj11aRDrJv9RnaGK4ZYuaqc",
  "key9": "4K94AMfddyB5DiavfMqejEmiwaDqvgUjBUNNNAto6Hr31m5Kgnpr2axhWYts94XEg1RiR6vgTNmuR2NAgrVpVTGv",
  "key10": "4eZk5FwMj4NWvXrNX6SMbPxxwTAgUoL4frbmjvR7HinBzCDKfRtj9xa3HD3r7cY59Gvqk7YrBJ1XL6fxWhR6WZn5",
  "key11": "2bpJ38LbuAMW8GvxkrRGZqX1KPvH1mwmFo39LL45vqJVfNXB4bZL9xdY3mVZamhQZcLpZto1Q7txSosJEu73tFA9",
  "key12": "2pFZSneUwPqK988y6xc1hG5VCbvpqz8hv3jqS69d4y74Er9Af2pwj3eFsFYPrHq8eKw36vDA2khCs3zyHudUrnmp",
  "key13": "BD9DCBJDK8VN6Wk69bvvDazb61wcQgb1pNkf2qsUWATe1eEkoCXH3HtXyCi8guZaQM6DUNnU4cYNKn2S6fBsuD6",
  "key14": "J11dqDjkfueQkjv5HC3jQaUz1D7mRbgoWCNsTdqqokDP7eZb7VjgVQSK3MNYYPuBZPP2Uu4Jn8MoswhdDbmXJ2u",
  "key15": "4hYQJugofuHM9YRFRuMy3hpreCGB6G2aLf8Nvv8hBjRDJMA31VNKuVSoJx6bqn3gaNa3uYmLbK1yVL17EKesb7MG",
  "key16": "uYLKNXiZYxwzghM96BUQYuKuy1BXsp4dCJYX4PnxZPoiMyygeiAnWDCpwA5ew6vPsa28SpGHRV3GVSFUJJMWvsx",
  "key17": "3y1foAdjsApdqHAW2kPnWYpaBwdHTCavTpPuhGZ1LBqtmD9zrasdi2msgWeQYBGoH6Y5hebSTuqmrXzJQxPVhVnU",
  "key18": "5EDcDysmH4Samj9HEoTBeQ9g1yToSt31tQpiFeGcLRktW7r22pVNRQx5qKU9xFXTUUKpRxiyYLMSUA1MG6tK3RZY",
  "key19": "2VcVzrwtinKnr3B7dqULLXSWAjpMAHMimgPYDp1tLXGCEFodSFdQrTd3C6wDDicvpYKYY2H7nbMHSWUBa5vvNk4t",
  "key20": "UjAHg8mUgFdPjn5o3XujruWYmaGPaApgp1hhz4uL8B46vPgWp6VHLTJXMEXxQbus6wpAd9KmgVh5k6E5MHFvAwz",
  "key21": "3ma3q6u9nHUG9z848zyxsGKewxjPogXxETAVN6MCY7PcMtm7dJB8NQ2bVye91gvAt6tejBKF8GbpCbjxTnjtn1QU",
  "key22": "3bNRYzLaeTYUwDtxPE9KzYs6hU8SPSmceAqw2pMCLk7hpWjFNSVLfE57tTc35h7MSZtAeMq9oNRfxTWQGw9fn651",
  "key23": "4ML62nUAFrfYbmeLYR68u6mXZAFnR1UyYNvLsx1oEkCkabMykD4ygQbBPjDTRBggWwrKjPdcZ2yDs1p7mFaaAAg7",
  "key24": "5PKirFDhhsqpu3fBhE29gVmP8abPdVpBZsAYRyqBoBVH4zmzrqbNqvQqJn2f6DaC9EWmAVF9nhhASwdYfVVYe2TL",
  "key25": "5rassFvt7Faem6LAoojnM3kFeVPQ7RSHDmgnuDk5NTgyeP3M7pzrTfVBz7CzVjpgv3aBQfH3UsLRvSLha7r6PL4S",
  "key26": "5CYStTAA72Ku39BhcEzARHxaRVrekJMKuanK3QE4DcQ6mRXeumWBqPeYpyimp9TUXyaq3dsvnNnbdaPBncjxZS4w",
  "key27": "yiaSk7yJRFSRKZP2cSsCFCqKVd9QCsrAqKuDxbndvUZ8o8EVcuk9VM7gpEnVXvxgPbHfcPuPLw115KfcafvjVeF",
  "key28": "R2bwGz5yZZgVpZMzAdbsX7JwEaqHVdznNUA2vTGubxQN4iTsaub7mDMw2jPcCj1knXmn8ksTsRDRFScxAL1165v",
  "key29": "y3DPsP5R4iNUVAVfjLa7wsnpqs2V9pLKYqwixtSznGQi68GWM7r5cH17ZMz2WWpdraWN6qq2Xx3dcU7cRBHziYN",
  "key30": "5LA1y7WNfgjNmXhknRtKT3tMgaucdmgeX7zpQSMuZ2oz8vk6uSqchZkNx44wZH9gYoxgyrgnZXDj73XVa4Sxv4cE",
  "key31": "ctBucmuMvXej33JYYAtPZz9En9RarrZaNN9QnvcFPvoJfgZQZQLiX4UwLfREn9Cm3Fktf8TFHGQwu1oh17C4os6",
  "key32": "9gW5XL6nCCyFA4fskLB13oWYin4MVU16MTzuYHi6c9EJMziNguKJjd52NXTZZpWL8Jg4utPrhrnzfhw4at1tZvG"
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
