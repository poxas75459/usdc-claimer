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
    "3GdY2M7dRuEZdtxGkvwXwYT3W11MDaVT9uRbb5sMkDqpduY14gZcS4zZNjs6fpaovtLVRrescK9g1iGLqHANtmo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YrsC1jUWpA4oJYYAbN11Fr19CmDgUhpLdNUpnXTpi6qEPLfDiWw1cWRhHQGNEbBWCAAGRfjELHta9fpmtsaiwyG",
  "key1": "23CK45Beu7TXGHKpZoHxA5JzjyJTn2gfmGmmwcAD46SxJk4U1YAsU9kn23qkoo3DBVAUu9CywarvGW2fCE7pdAGo",
  "key2": "C7YZUu1EGodPJvBRcPGo7dCz8xnQEVw2QBg8QXfv3NFmfwf4K71tvoFH5zfXst4NH6oYccksA6FU3RpETJFhJk3",
  "key3": "4FPfBjL8J6WXpnXMHLVXy1MFWzsGSDTtizU2z1KueWaiopvbfwPLi5sZsm3qtC2X96QwvB1se8Cbh4Q1VxXQGbDU",
  "key4": "5wJdcGCMVm6NkRDqprWmApSoG7RjaLLaYTJjjnp92MEPxH9s6pxDPHt2VEEFRwqgwJVP2pwYp4GNUoNeT1Q8dGoT",
  "key5": "2HHEuui6ESEtsMFJTkZjVfCC5J37awid8BUdmUterdUpvzVZTaD6bRjKwrxkYpyfPpo9WYjWiKGCmo2cE7E3vCFE",
  "key6": "3hbXhnEoj6GjAyZ7R8oZB1en7CC7EGDc2hsWnT52GU5S39qnxwVEy3aPbkrBxoQae4FJYCXbKmhFnBztAEBXpB9b",
  "key7": "629WJjb91q1WL7hnHBcdUiWCFB3paaHSq8yGNqv4khYufYtBFTLnYrkJEo1rxqSv7GHd2D74wgDYsZQJpBWjvyF1",
  "key8": "2qiCQsaQQNLhotqFRMVVdJU6w7PARxinWJNEnSCk8f2LZkdvS2XW7QP2ozcoifpCMdzFePAxGffgk9iA77CuLE3M",
  "key9": "34b2n1QvB23Kwsq3bKvkwvsPWfxdyYP2kC698BSH5jgMg1ESZD9h8qsokwBdm1ADJJ2vZzg8TgFPeKJYKiJmjSdm",
  "key10": "295dpAzGE6ZheuB4KDwSySUz4UyxC4omo63XWqdgQFwDU96Vbw549D5Tkq4pbbUUWnbe8BSgvZqr7cuyvkKikoYc",
  "key11": "SjXjuNeFFoficQUREW4EXruQNYd65WqyGd7hVsCRSBun495jxJA6HMiuYfv76odKuDFpYAWB1fJYB6nYxBGcyuq",
  "key12": "5nAKjEQXfQ3YRerVqbWVNf7TnCQircsqpao85dCYohVavxeX7Z9ifmVoCUxjnBEfwPyXpwEBtTFyFTT6zeJaYBD",
  "key13": "5Nudi2zMgxEx1Y9XTktp6ikzxNvUkDGzkq6WXwwczNCSYVeGPLz5k1nGZmNdaSReeJ3caJjDt8h6Zz5aeMZ5XMSz",
  "key14": "2SseUx3KNgBttvAKWwqLPwGTWEJNcb1YCyZgGLMynPPWN2ZRVvC2obHCJqyUtuuZ1cWMsCGMMABVXgJAY1NqpR62",
  "key15": "47AH6V1EPpYnZZ9X72RNmTvy7F93fnTJeBvnZD8XwDoESxhDf6bNuYy2UHGSN1gUBsLPsFLBRgMUaDQ1XdqZEW4N",
  "key16": "5WuEFFKgpKacLdhFB2gR4qQApdL7QesPhHC9MtEeTyMMfyfHpaMix7EBQiwYr9EDfc156TB3PrzjPBudCdSzmBPb",
  "key17": "5vGE9nPseMJEyxrAbw5ivJhF5kn71Anz7wYjoSPm92xqHd1kqddemAPf5swkFGbbU4mnVXt4WD5KbvGKmi6diVgF",
  "key18": "4EtQCea4rt7CNHMuEzMaV5KVnTDLp5KkLfk8TAEzjXFfkCSQc6FxnQTr4dYPY7fkXp6zzCkc5T2VgvEDRsM9Ptey",
  "key19": "5PRysN4iWd5Z2Y2CpQxrvkFSnq31ZCbHDuQdKgFh3FANUnJcPmdDfJL623bXjPRMT27obTdxJ9RvM1PGrT6TB6cA",
  "key20": "svgyLQFm2xf1hTxcu63JGbRcyx9t2rQZv9j8siA1K1Hk4Gi5ztoSmSkYmUmejL1EpuDbDaJ1LVWUGe2smTSPZ4R",
  "key21": "sa1TmFkMqLwhJNmiyiRSZY6e4eecnddJcxpv13o8nKJSME77cPvikYxKFZSyT4LJvpT1ATp8GmgLmdzsBxoKFVm",
  "key22": "5ts5AQ7i782bFqTmw749evfKoQ8KfN2AATK8SFKLa3KWZXu7bYtQGGttT9JVT8WhZZqWkj32Zxn5K9eZCwHqWJ9v",
  "key23": "4aAnfpHaDh2U8wWfYyA6UYjD8CU2yjfNmgDkkQEBmrKBH4icdoCUTuVKALhhPAvvqwmVLqeNaWtrhEQt6sr2Sfxy",
  "key24": "5DuZesAnKbqeAnbqwTnh983TbGuZ8phWKjexyYLpQqu1WmoHHy8rqW1Xa1qvf5pxKKXUdz3xxtBU6qav9h4FxWFF",
  "key25": "34Kn7ktN7F3Ryi7JJP29QWUDZUnt1QoDPRbCn7t7EEt3aQBCCUT9iG1Nz4qX8j6jxs8YJjx6AbRm1FRiQAmPD3SX",
  "key26": "4Jaq48DHQBVcEQkRQMVv3f3fX6W9AvgJv5FXCJf6PczAMZyL9jxnfHTCN56wS9d1iTaQudUWbKrn18orsgG6KpvB",
  "key27": "37upBVyVahPYuYd8iyLqL7DnU8gTkzR3A9aRW75AMN5LNWusV9nbGuSuTnnSXmNH1tmHHjtzSGS37xxREr8UZ7rR",
  "key28": "4y4WcUrJKHTANzFrXGsNxa45B9dY7bKRwQWcgEkbwMjT4apcA4e56yQJagHfPguqLqyg5CCxa2Jf9xX5TaSLmE3x",
  "key29": "4aWifszVG8TmARM9qZWetddu1upHVuoqyYnY1rNeCT6YJp2U7g6awZyf82hz1RG138FfHMdaj1FBthVH4x3w9SNR",
  "key30": "4yNaaUdCqXgTCffiPkJzUbRq5HtJyZqpTCjAzBipZbYoeVfhYxTpEFKHwA7WvNT3EXZ2jZgT58N88ay9YmwLbPbC",
  "key31": "25ExV1FX7DTJTEh9UCnA3TJVwTiXUfPUnyM9upFkBZdNy4nmWezuPggDUbLSwVfk1yfDFZCrTSktUWzoMzVBMXeo",
  "key32": "gqxXDmrxhHUtZGutDe9EN98uGvXb1XM8E8qHRruaVBPn7UFBWxfUW8XasN9zasALRXbT4iunCo2QvUnup2rjjvr"
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
