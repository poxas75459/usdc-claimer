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
    "4QxjoWXLRxuPccGMeioVsDiM6HBJbV2Cmc9CsebqK7Hd7AgUP5baB2hMm35iZuJ4LqvfFLhc67t4KM7TraJ3WMyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qEySY8zyAVhf5ovPuHNMszzk7pjhcQ6U25skuZ6jYMpUeRqX5aNtApbr1i7JrXaEdCmyVCBVPzNe6AuGfuvmyea",
  "key1": "4wv2vp3xygkunqsVh7SjoaKvtW1uDyTQCuxqWogTQt5bp8N36R729j4754ousj8fDYBXZUwepvg5RgTpdAnaQDFm",
  "key2": "3pikMziRigTpKESvhuUSQn39YQwLMzQ9SaBxTRro8kdmT258PvuRz5q8fKpST5mQ16zSN9gBw8mEsKzzAtbssU2j",
  "key3": "46qLMywS9wD4NgYKdTxeTpeoBpTVoXxqGKEtBs3fVvEaPmaRvPMqQ5cvXjNSYVbwd5XPVXkHibokXjj1P7R48LeG",
  "key4": "4EovmMVfobhMRoeXr2pBuGSBim8qbFdpyLyyy5rnumCYHDgUA7dxa1keMVA52XMqFfAXxkge3xbn3MitWRt77GEB",
  "key5": "58DccrrsvLbrNgeLcXJM2EtWAYJLKTMEJZfjgo4kRdtjrsvrjQi6wwyYMH21esvenoBpQBEA5cexRm3oXHCqjVDM",
  "key6": "56tD7hazDaqrSUj321nRgGKnEqDQByXoV8woK8Qdj1TggNTZgFoexZkusi9bAws3znehqiWjEYAaHtaYVCvmoVag",
  "key7": "5kAF7kgBJYR4vkXyTfZhJUqcosYkaa88amUttDWBGhkTT5k2Si8zfHWa9by9rVkvkA7UAoSNkKF2Qq3zMHfW1bvm",
  "key8": "5J4NkwUbP2v9zPsj1ybEpk9wbVu9yuWsMFpzcfUirzRzTNs15AqmJ3FCxyFjpQPHDAamdnPLBc4Wk7ZzntCDfEV2",
  "key9": "MhpbLUtd6sNvAzH6vPgJdtENbJpZSD21raSKzQnycAcssLdYHkFcXTQ3hCkpu3geXyiKnT7WKHzfaAJ7RwGvut5",
  "key10": "59uXSSjqN2qpmCEtoFUS4wRpyXjkYvjmufvXHTULoADPKLmYNLe63cY41N5dVtNRJZg22h1w6KE1Sx3g1br6d2Li",
  "key11": "5FDfzxKYYFESMMdMssN5MDuwg4Nk8K2henshfnwmAzj39D8m5cUvG6Wafej7kKHD7JpFikeLMDKE4t5xhT3FG5PL",
  "key12": "59B99PG8Tfn4EL5gWzhteYRYtTKtczm7ZKFNWZGe3QftsqYbAK3X5sBWW8MsBuLoroFUwpEhnrqn4rU628rMd8uz",
  "key13": "2y7h4THoFRvw7YG4VPGP3oH9MEZrgDcVP4rRqHVZ2rSigDHbWS6RVnXY1k7kZ8tqVjTgtYiKunJs482LkjV3DaXa",
  "key14": "51LZNrdouKC8jTGXAVjsGUde1FJk8GCmyJ7hzXMTZT8hpceFr7rNstsiJ6yDDVBTwXw3Egpfcm3wMrniWkDJxvrD",
  "key15": "4KmSHw84G3wbTj3Rj1Huffq3synvgsfGZ9jxSE5tFi2xsjR7k2Wq8UBiVkrN1eQR2ggteT6MTfEAvA8JecCbmiJY",
  "key16": "2iNijUXFzEBJypQ58tnVjXSQYVqdrQFdTphxRCGrfxQuBeC5Z5m4qV7ySwdx9GSug84DVuQoahh37Cu14Ynuqzu5",
  "key17": "gs56uBGotj9qerYEw5NFtS7jDmEfx64RcWNdfcTSZvg7866Qv7F2v17CbQ9ax45KUFwsJuSmxSrpz48pAp9pYc7",
  "key18": "6Mj5nnuWTV6cj1VWN4Co2qbxKmYuNpiKXuctNpYxVAzSVG73ertLktPL1eFQ8zcGir7w2qQJXHCVDFuqTz3vCzu",
  "key19": "iK5NcPfJaohY5fF4Xbugs7iXuyhPxhaSK7jRmt7haSBKpJiFmAg2vRW9mYcF7dnNj5WEJp5HSvDvrrUnuwkbpc6",
  "key20": "4cRskyNGH7hyTM4kjJpWqWvqqkFHt1gSHV8Vx5dW8cDuBNPaxGGUoV8hhr71mZ4FgQPkv45bPtyFJ4jyFXbczo36",
  "key21": "4HvhADooa9L5bCjXrVF345z37oVsQzYdKdTB3N9Taf2aWPqquajAnYNSpNKCZt41hY5GgXETBkW84mfs26BYpMNE",
  "key22": "5CnFQF5odz25v8HamzTk9DfijAXZsSDAaqmjQQnsVzz4LhwxeG3GGLsoNFpaWScxPwVg2Sipbigop8Rabxf68N5e",
  "key23": "22GYBZCMrjmt8MzXUqgubhpXYXvuVsS9a5W4UaTMHR5A1mt8fr1fxHUDtgQeLGjVUmNaRBfKRdzPkfJCx2B58B1A",
  "key24": "42n3EA59MavC2zPsF84ZVQCPFjxLJMP5GHQYB9JzQ2gnrPWUjnWJhmxhWiLbf8Xu7jHHrcd41eWQ3ou2N4jJuAc8",
  "key25": "2bPHxv6oBiPLrVjBKkbiTA8xGY8vKP4qUFht7ZjEamJNYGKiRwTNPjh74iTNRCDTvqK4marXBRir6LTu8mif2Zp",
  "key26": "5EWf9cB7LMFoPqcgJmUZJihJqRW5m8rZdWgDBJuzmHKJi3UNSdo32BbY5kLpzf7ttdo4wN8FKujh32g91Nm9Hq7h",
  "key27": "5eozSox9cecbL7baEE2z74DkYoWmHPUCHHUVKmgH1i5iRtHGgv183AdmYiHXEhESN1QRBsiSkKZHowYQEPy2mprJ",
  "key28": "3n7GNCZHZvnA4zfzqMgebgCVxVbMminKz2DtyGsUrbJB37ayWjAUoo88bCv7aM4dn6uHMVvVnfYggYxkEHwYSQGr",
  "key29": "3x9ALJJeCh5L2UiZwRXrS1DAyR54CjB2xVy4SwGodyeHMyqqn5caLAVdt6orC43yKTMtagrcqu8wDKULXT6bg1AZ",
  "key30": "5k8wYJQSTE2JUWfre4yJy6rDGTYujcXMoYD2yzYKR7nSGiza59T1GawZupuXVWniei3cXLSCneYfQ3QuhZJU8w4P"
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
